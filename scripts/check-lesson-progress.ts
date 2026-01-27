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

async function checkLessonProgress() {
  const userId = 'bddd168d-9869-465b-bb7d-41a3be09931d';
  const { data, error } = await supabase
    .from('user_lesson_progress')
    .select('*')
    .eq('user_id', userId);
  
  if (error) {
    console.error('Error checking lesson progress:', error);
  } else {
    console.log('Lesson Progress:', JSON.stringify(data, null, 2));
  }
}

checkLessonProgress();
