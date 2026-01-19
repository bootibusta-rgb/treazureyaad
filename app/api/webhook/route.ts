import { getStripe } from '@/lib/stripe';
import { supabase } from '@/lib/supabaseClient';

const stripeWebhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

export async function POST(request: Request) {
  const signature = request.headers.get('stripe-signature');
  if (!signature) {
    return new Response('No signature', { status: 400 });
  }

  let event;

  try {
    const body = await request.text();

    // Get the Stripe instance from your lib/stripe.ts
    const stripe = await getStripe();
    if (!stripe) {
      return new Response('Stripe not initialized', { status: 500 });
    }

    // Construct the event using the loaded Stripe instance
    event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
  } catch (error: any) {
    console.error('Webhook error:', error.message);
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  // Handle successful checkout → make user Pro
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;

    if (session.payment_status === 'paid') {
      // Note: updateUser needs a user context — we'll use admin if needed later
      // For now, just log — we can fix exact logic once site is live
      console.log('Payment succeeded for session:', session.id);
      // If you have user_id in metadata, you can update that user here
    }
  }

  return new Response('OK', { status: 200 });
}