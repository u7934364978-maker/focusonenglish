import { supabase } from '@/lib/supabase-client';

export interface CompletionResult {
  success: boolean;
  message: string;
}

/**
 * Marks a single unit as completed for the current user.
 */
export async function markUnitAsCompleted(
  userId: string,
  level: string,
  goal: string,
  moduleId: string,
  lessonId: string,
  exerciseIds: string[]
): Promise<CompletionResult> {
  try {
    // 1. Insert XP transactions for each exercise to simulate real activity
    const xpTransactions = exerciseIds.map(id => ({
      user_id: userId,
      amount: 20, // Base XP for practice
      source: 'exercise',
      source_id: id,
      description: `Debug: Completed exercise ${id}`
    }));

    const { error: xpError } = await supabase
      .from('xp_transactions')
      .insert(xpTransactions);

    if (xpError) {
      console.warn('Error inserting XP transactions (might be duplicates):', xpError);
    }

    // 2. Update course_progress table
    const { error: progressError } = await supabase
      .from('course_progress')
      .upsert({
        user_id: userId,
        course_level: level,
        course_goal: goal,
        module_id: moduleId,
        lesson_id: lessonId,
        completed: true,
        score: 100,
        exercises_completed: exerciseIds,
        completed_at: new Date().toISOString(),
        last_accessed_at: new Date().toISOString()
      }, {
        onConflict: 'user_id,course_level,course_goal,module_id,lesson_id'
      });

    if (progressError) throw progressError;

    return { success: true, message: `Unit ${lessonId} completed successfully.` };
  } catch (error: any) {
    console.error('Error in markUnitAsCompleted:', error);
    return { success: false, message: error.message };
  }
}

/**
 * Marks the entire B2 course as completed.
 */
export async function markFullB2CourseAsCompleted(userId: string): Promise<CompletionResult> {
  try {
    const level = 'B2';
    const goal = 'trabajo';
    const moduleId = 'debug-b2';
    
    // Total units to complete
    const totalUnits = 30;
    let completedCount = 0;

    for (let i = 1; i <= totalUnits; i++) {
      const unitId = `unit-${i}`;
      let exercises: any[] = [];

      try {
        if (i <= 11) {
          // Load from TS files
          const module = await import(`@/lib/course/b2/unit-${i}`);
          exercises = module[`UNIT_${i}_EXERCISES`];
        } else {
          // Load from JSON files
          const response = await fetch(`/content/cursos/ingles-b2/unit${i}.json`);
          if (response.ok) {
            const data = await response.json();
            // JSON structure is different
            exercises = data.blocks.flatMap((b: any) => b.content).map((ex: any) => ({
              id: ex.interaction_id || ex.id
            }));
          }
        }

        const exerciseIds = exercises.map(ex => ex.id || ex.interaction_id);
        if (exerciseIds.length > 0) {
          await markUnitAsCompleted(userId, level, goal, moduleId, unitId, exerciseIds);
          completedCount++;
        }
      } catch (err) {
        console.error(`Error processing unit ${i}:`, err);
      }
    }

    return { 
      success: true, 
      message: `Completed ${completedCount} units of B2 course.` 
    };
  } catch (error: any) {
    console.error('Error in markFullB2CourseAsCompleted:', error);
    return { success: false, message: error.message };
  }
}

/**
 * Marks the entire C1 course as completed.
 */
export async function markFullC1CourseAsCompleted(userId: string): Promise<CompletionResult> {
  try {
    const level = 'C1';
    const goal = 'trabajo';
    const moduleId = 'debug-c1';
    
    // Total units to complete
    const totalUnits = 30;
    let completedCount = 0;

    for (let i = 1; i <= totalUnits; i++) {
      const unitId = `unit-${i}`;
      let exercises: any[] = [];

      try {
        const module = await import(`@/lib/c1-units/unit-${i}`);
        const unitData = module[`unit${i}`];
        
        if (unitData && unitData.exercises) {
          exercises = unitData.exercises.flatMap((block: any) => 
            block.questions.map((q: any) => ({
              id: q.id
            }))
          );
        }

        const exerciseIds = exercises.map(ex => ex.id);
        if (exerciseIds.length > 0) {
          await markUnitAsCompleted(userId, level, goal, moduleId, unitId, exerciseIds);
          completedCount++;
        }
      } catch (err) {
        console.error(`Error processing C1 unit ${i}:`, err);
      }
    }

    return { 
      success: true, 
      message: `Completed ${completedCount} units of C1 course.` 
    };
  } catch (error: any) {
    console.error('Error in markFullC1CourseAsCompleted:', error);
    return { success: false, message: error.message };
  }
}
