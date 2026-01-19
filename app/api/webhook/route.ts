import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

// Initialize Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // Use service role for admin operations
);

// Stripe webhook secret (from Stripe Dashboard or CLI)
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(req: NextRequest) {
  const body = await req.text();
  const signature = req.headers.get('stripe-signature');

  if (!signature) {
    console.error('❌ No Stripe signature found');
    return NextResponse.json({ error: 'No signature' }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    // Verify the webhook signature
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err: any) {
    console.error(`❌ Webhook signature verification failed: ${err.message}`);
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
  }

  console.log(`✅ Webhook received: ${event.type}`);

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    
    console.log('💳 Checkout session completed:', session.id);
    
    // Get user email from session
    const customerEmail = session.customer_email || session.customer_details?.email;
    const userId = session.metadata?.userId;
    const plan = session.metadata?.plan || 'monthly';
    
    if (!customerEmail && !userId) {
      console.error('❌ No customer email or user ID found in session');
      return NextResponse.json({ error: 'No user identifier' }, { status: 400 });
    }

    try {
      // Update user in Supabase
      const updateData = {
        is_pro: true,
        pro_plan: plan,
        paid_at: new Date().toISOString(),
        stripe_customer_id: session.customer as string,
        stripe_subscription_id: session.subscription as string,
      };

      let result;
      
      if (userId) {
        // Update by user ID
        result = await supabase
          .from('users')
          .update(updateData)
          .eq('id', userId);
      } else if (customerEmail) {
        // Update by email
        result = await supabase
          .from('users')
          .update(updateData)
          .eq('email', customerEmail);
      }

      if (result?.error) {
        console.error('❌ Supabase update error:', result.error);
        return NextResponse.json({ error: 'Database update failed' }, { status: 500 });
      }

      console.log(`✅ User upgraded to Pro: ${customerEmail || userId}`);
      console.log(`   Plan: ${plan}`);
      console.log(`   Subscription ID: ${session.subscription}`);

    } catch (error) {
      console.error('❌ Error updating user:', error);
      return NextResponse.json({ error: 'Update failed' }, { status: 500 });
    }
  }

  // Handle subscription updated (for renewals)
  if (event.type === 'customer.subscription.updated') {
    const subscription = event.data.object as Stripe.Subscription;
    console.log('🔄 Subscription updated:', subscription.id);
    
    // Update subscription status in database
    const { error } = await supabase
      .from('users')
      .update({
        subscription_status: subscription.status,
        current_period_end: new Date(subscription.current_period_end * 1000).toISOString(),
      })
      .eq('stripe_subscription_id', subscription.id);

    if (error) {
      console.error('❌ Failed to update subscription status:', error);
    }
  }

  // Handle subscription cancelled
  if (event.type === 'customer.subscription.deleted') {
    const subscription = event.data.object as Stripe.Subscription;
    console.log('❌ Subscription cancelled:', subscription.id);
    
    const { error } = await supabase
      .from('users')
      .update({
        is_pro: false,
        subscription_status: 'cancelled',
      })
      .eq('stripe_subscription_id', subscription.id);

    if (error) {
      console.error('❌ Failed to update cancelled subscription:', error);
    }
  }

  // Handle payment failed
  if (event.type === 'invoice.payment_failed') {
    const invoice = event.data.object as Stripe.Invoice;
    console.log('⚠️ Payment failed for:', invoice.customer_email);
    
    // You could send an email notification here
  }

  return NextResponse.json({ received: true });
}

// Disable body parsing for webhook (Stripe needs raw body)
export const config = {
  api: {
    bodyParser: false,
  },
};
