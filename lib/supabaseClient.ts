import { createClient } from '@supabase/supabase-js';

// Client-side Supabase client (uses anon key)
export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// Types for the users table
export interface User {
  id: string;
  email: string;
  name?: string;
  role?: string;
  is_pro: boolean;
  pro_plan?: string;
  paid_at?: string;
  subscription_status?: string;
  current_period_end?: string;
  stripe_customer_id?: string;
  stripe_subscription_id?: string;
  created_at: string;
  updated_at: string;
}

// Check if user is Pro
export async function checkProStatus(email: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('users')
    .select('is_pro')
    .eq('email', email)
    .single();

  if (error || !data) {
    return false;
  }

  return data.is_pro;
}

// Get user by email
export async function getUserByEmail(email: string): Promise<User | null> {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', email)
    .single();

  if (error || !data) {
    return null;
  }

  return data as User;
}
