# Stripe + Supabase Integration Setup

This guide will help you set up real Stripe payments with Supabase for Pro upgrades.

## Prerequisites

- [Stripe Account](https://dashboard.stripe.com/register)
- [Supabase Account](https://supabase.com)
- [Stripe CLI](https://stripe.com/docs/stripe-cli) (for local testing)
- Node.js installed

---

## Step 1: Stripe Setup

### 1.1 Get API Keys
1. Go to [Stripe Dashboard → Developers → API Keys](https://dashboard.stripe.com/apikeys)
2. Copy your **Publishable key** (starts with `pk_test_`)
3. Copy your **Secret key** (starts with `sk_test_`)

### 1.2 Create Products & Prices
1. Go to [Stripe Dashboard → Products](https://dashboard.stripe.com/products)
2. Click **Add Product**
3. Create two prices:

**Pro Monthly:**
- Name: `Treazure Yaad Pro Monthly`
- Price: `$9.99 / month` (recurring)
- Copy the Price ID (starts with `price_`)

**Pro Annual:**
- Name: `Treazure Yaad Pro Annual`
- Price: `$99.99 / year` (recurring)
- Copy the Price ID (starts with `price_`)

---

## Step 2: Supabase Setup

### 2.1 Create Project
1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Click **New Project**
3. Note your **Project URL** and **API keys**

### 2.2 Create Users Table
1. Go to SQL Editor in your Supabase project
2. Run the migration in `supabase/migrations/001_users_table.sql`

### 2.3 Get API Keys
1. Go to Settings → API
2. Copy:
   - **Project URL** (NEXT_PUBLIC_SUPABASE_URL)
   - **anon public** key (NEXT_PUBLIC_SUPABASE_ANON_KEY)
   - **service_role** key (SUPABASE_SERVICE_ROLE_KEY) - Keep this SECRET!

---

## Step 3: Environment Variables

Create a `.env.local` file in the `marketplace` folder:

```env
# Stripe
STRIPE_SECRET_KEY=sk_test_...
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
STRIPE_PRICE_MONTHLY=price_...
STRIPE_PRICE_ANNUAL=price_...

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

---

## Step 4: Install Stripe CLI

### macOS
```bash
brew install stripe/stripe-cli/stripe
```

### Windows
```bash
scoop install stripe
```

### Login to Stripe CLI
```bash
stripe login
```

---

## Step 5: Test Locally

### Terminal 1: Run Next.js
```bash
cd marketplace
npm install
npm run dev
```

### Terminal 2: Forward Webhooks
```bash
stripe listen --forward-to localhost:3000/api/webhook
```

Copy the webhook signing secret (`whsec_...`) and add to `.env.local`

---

## Step 6: Test Payment

1. Open http://localhost:3000
2. Click "Upgrade to Pro"
3. Choose a plan and click "Pay with Stripe"
4. Use test card: `4242 4242 4242 4242`
   - Expiry: Any future date
   - CVC: Any 3 digits
5. Complete payment

### Expected Result:
- Stripe CLI shows: `✅ Webhook received: checkout.session.completed`
- Supabase user row updates: `is_pro = true`
- Page shows green banner: "You're now Pro!"

---

## Step 7: Production Deployment

### 7.1 Add Webhook Endpoint in Stripe Dashboard
1. Go to [Webhooks](https://dashboard.stripe.com/webhooks)
2. Click **Add endpoint**
3. URL: `https://yourdomain.com/api/webhook`
4. Select events:
   - `checkout.session.completed`
   - `customer.subscription.updated`
   - `customer.subscription.deleted`
   - `invoice.payment_failed`
5. Copy the **Signing secret** → update `STRIPE_WEBHOOK_SECRET`

### 7.2 Switch to Live Keys
Replace `sk_test_` and `pk_test_` with `sk_live_` and `pk_live_`

---

## Test Cards

| Card | Scenario |
|------|----------|
| `4242 4242 4242 4242` | Success |
| `4000 0000 0000 9995` | Decline |
| `4000 0000 0000 3220` | 3D Secure |

---

## Troubleshooting

### Webhook not receiving events?
1. Check Stripe CLI is running
2. Verify webhook secret matches
3. Check console for errors

### Database not updating?
1. Check Supabase service role key
2. Verify table exists
3. Check RLS policies

### Payment succeeds but no Pro status?
1. Check metadata is being passed
2. Verify email matches in database
3. Check webhook logs in Stripe Dashboard

---

## Files Created

```
marketplace/
├── app/api/
│   ├── checkout/route.ts   # Creates Stripe Checkout session
│   └── webhook/route.ts    # Handles Stripe webhooks
├── components/
│   └── ProSuccessBanner.tsx # Green success banner
├── lib/
│   ├── stripe.ts           # Stripe client utilities
│   └── supabase.ts         # Supabase client utilities
├── supabase/migrations/
│   └── 001_users_table.sql # Database schema
└── env.example.txt         # Environment template
```

---

## Support

- [Stripe Docs](https://stripe.com/docs)
- [Supabase Docs](https://supabase.com/docs)
- [Next.js Docs](https://nextjs.org/docs)
