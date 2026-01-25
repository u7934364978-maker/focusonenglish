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

async function checkTables() {
  const { data, error } = await supabase
    .from('information_schema.tables')
    .select('table_name')
    .eq('table_schema', 'public');
  
  if (error) {
    // If we can't query information_schema directly via PostgREST, 
    // we'll try to just select from one of the expected tables.
    console.log('Error querying information_schema, trying direct table access...');
    const { error: e2 } = await supabase.from('course_modules').select('count').limit(1);
    console.log('course_modules access error:', e2);
    
    const { data: d3 } = await supabase.rpc('get_tables'); // sometimes people have helper rpcs
    console.log('Tables from RPC:', d3);
  } else {
    console.log('Tables found:', data.map(t => t.table_name));
  }
}

checkTables();
