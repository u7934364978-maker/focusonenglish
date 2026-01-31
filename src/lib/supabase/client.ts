import { createClient as supabaseCreateClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://nprqtjljoekoirlrjxlh.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5wcnF0amxqb2Vrb2lybHJqeGxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg2NTMzNzcsImV4cCI6MjA4NDIyOTM3N30.GdTvAPa08RiadT-yxbGHOGPDz1baypAOeDDezqyFJNA';

// Create client only if variables are available
export const supabase = supabaseUrl && supabaseAnonKey 
  ? supabaseCreateClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: typeof window !== 'undefined',
        autoRefreshToken: typeof window !== 'undefined',
        detectSessionInUrl: typeof window !== 'undefined',
      },
    })
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
