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

async function checkExerciseProgress() {
  const userId = 'bddd168d-9869-465b-bb7d-41a3be09931d';
  const { data, error } = await supabase
    .from('xp_transactions')
    .select('source_id')
    .eq('user_id', userId)
    .eq('source', 'exercise');
  
  if (error) {
    console.error('Error checking exercise progress:', error);
  } else {
    const completedExerciseIds = data.map(d => d.source_id);
    console.log('Completed Exercises:', completedExerciseIds);
  }
}

checkExerciseProgress();
