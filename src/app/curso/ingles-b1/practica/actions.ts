'use server';

import { premiumCourseService } from '@/lib/services/premium-course-service';
import { createClient } from '@/lib/supabase/server';
import { revalidatePath } from 'next/cache';

export async function saveExerciseProgress(interactionId: string) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) return { success: false, error: 'Not authenticated' };

  const success = await premiumCourseService.saveInteractionProgress(user.id, interactionId);
  
  if (success) {
    revalidatePath('/curso/ingles-b1');
  }

  return { success };
}
