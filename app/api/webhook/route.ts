import stripe from '@/lib/stripe';
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
    event = stripe.webhooks.constructEvent(body, signature, stripeWebhookSecret);
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 });
  }

  // Example: make user Pro on payment
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as any;
    if (session.payment_status === 'paid') {
      await supabase.auth.updateUser({ data: { isPro: true } });
    }
  }

  return new Response('OK', { status: 200 });
}