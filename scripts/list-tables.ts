import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('Missing env vars');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

async function listTables() {
  const { data, error } = await supabase.rpc('get_tables');
  if (error) {
    // If RPC doesn't exist, try a simple select from a known table
    console.log('RPC get_tables failed, trying direct query...');
    const { data: d2, error: e2 } = await supabase.from('users').select('id').limit(1);
    console.log('users table exists:', !e2);
    
    // Try to query pg_catalog if possible
    const { data: d3, error: e3 } = await supabase.from('pg_tables').select('tablename').eq('schemaname', 'public');
    console.log('Tables from pg_tables:', d3, e3);
  } else {
    console.log('Tables:', data);
  }
}

listTables();
