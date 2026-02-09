import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

async function check() {
  const { count, error } = await supabase
    .from('exercise_explanations_cache')
    .select('*', { count: 'exact', head: true });

  if (error) {
    console.error('Error fetching count:', error);
  } else {
    console.log(`Total explanations in cache: ${count}`);
  }
  
  // Check A1 specifically
  const { count: a1Count, error: a1Error } = await supabase
    .from('exercise_explanations_cache')
    .select('*', { count: 'exact', head: true })
    .ilike('exercise_id', 'U%'); // A1 IDs start with U followed by unit number

  if (a1Error) {
    console.error('Error fetching A1 count:', a1Error);
  } else {
    console.log(`A1 explanations in cache (IDs starting with U): ${a1Count}`);
  }
}

check().catch(console.error);
