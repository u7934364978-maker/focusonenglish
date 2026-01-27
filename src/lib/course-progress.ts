import { supabase } from '@/lib/supabase-client';
import { localCourseService } from '@/lib/services/local-course-service';
import { Exercise } from './exercise-types';

export interface UncompletedExercisesResult {
  courseTitle: string;
  weekTitle: string;
  uncompletedExercises: {
    id: string;
    prompt: string;
    type: string;
  }[];
}

/**
 * Finds all exercises in a given course week that have not been completed by the user.
 * 
 * @param userId The ID of the user
 * @param sector The course sector (e.g., 'finanzas')
 * @param level The course level (e.g., 'b1')
 * @param trimester The trimester (e.g., 'trimestre1')
 * @param weekId The week ID (e.g., 'semana01')
 */
export async function getUncompletedExercises(
  userId: string,
  sector: string,
  level: string,
  trimester: string,
  weekId: string
): Promise<UncompletedExercisesResult | null> {
  try {
    // 1. Get all exercises for the specified week
    const lesson = await localCourseService.getProfessionalLesson(sector, level, trimester, weekId);
    if (!lesson || !lesson.exercises) {
      return null;
    }

    // 2. Fetch completed exercises for this user from xp_transactions
    // We assume completed exercises are recorded with source='exercise' and source_id=exerciseId
    const { data: completedTx, error } = await supabase
      .from('xp_transactions')
      .select('source_id')
      .eq('user_id', userId)
      .eq('source', 'exercise');

    if (error && error.code !== 'PGRST116') {
      console.error('Error fetching completed exercises:', error);
      // If table doesn't exist or other error, assume none are completed
    }

    const completedIds = new Set(completedTx?.map(tx => tx.source_id) || []);

    // 3. Filter out completed exercises
    // Note: localCourseService.convertItemsToExercises might change the ID or structure, 
    // so we should be careful. Let's look at the original IDs if possible.
    // However, the prompt asks for exercises from the Banking and Finance course week 1.
    
    // We need to match against the IDs in the JSON.
    // Let's get the raw exercises to be sure we have the original IDs.
    const uncompleted = lesson.exercises
      .filter(ex => !completedIds.has(ex.id))
      .map(ex => {
        // Find the prompt/question. Exercise structure is complex.
        const exAny = ex as any;
        const question = exAny.questions?.[0];
        return {
          id: ex.id,
          prompt: question?.question || exAny.instructions || exAny.prompt || 'No prompt available',
          type: ex.type
        };
      });

    return {
      courseTitle: lesson.title,
      weekTitle: weekId,
      uncompletedExercises: uncompleted
    };
  } catch (error) {
    console.error('Error in getUncompletedExercises:', error);
    return null;
  }
}
