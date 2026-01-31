import { createClient as supabaseCreateClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client only if variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? supabaseCreateClient(supabaseUrl, supabaseAnonKey)
  : null;

export function getSupabaseClient() {
  return supabase;
}

// For compatibility with the usages I added
export const createClientComponentClient = () => supabase;
export const createClient = () => supabase;

// Server-side client with service role key (for admin operations)
export const supabaseAdmin = supabaseUrl && process.env.SUPABASE_SERVICE_ROLE_KEY
  ? supabaseCreateClient(supabaseUrl, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;
