import { supabase } from '@/lib/supabase-client';

export interface UserAdaptiveState {
  id: string;
  user_id: string;
  course_id: string;
  current_difficulty: number;
  consecutive_correct: number;
  completed_exercise_ids: string[];
  updated_at: string;
}

export interface AdaptiveExerciseResponse {
  exercise: any;
  isReview: boolean;
  currentDifficulty: number;
}

export class AdaptiveEngine {
  private static COURSE_ID = 'a2-english';

  /**
   * Fetches or initializes the user's adaptive state
   */
  static async getOrCreateState(userId: string): Promise<UserAdaptiveState> {
    const { data, error } = await supabase
      .from('user_adaptive_state')
      .select('*')
      .eq('user_id', userId)
      .eq('course_id', this.COURSE_ID)
      .single();

    if (error && error.code === 'PGRST116') {
      // Not found, create initial state
      const { data: newState, error: createError } = await supabase
        .from('user_adaptive_state')
        .insert({
          user_id: userId,
          course_id: this.COURSE_ID,
          current_difficulty: 1,
          consecutive_correct: 0,
          completed_exercise_ids: []
        })
        .select()
        .single();

      if (createError) throw createError;
      return newState;
    }

    if (error) throw error;
    return data;
  }

  /**
   * Selects the next exercise based on SRS and adaptive rules
   */
  static async getNextExercise(userId: string): Promise<AdaptiveExerciseResponse | null> {
    const state = await this.getOrCreateState(userId);

    // 1. Check for due SRS items
    const { data: srsItems, error: srsError } = await supabase
      .from('user_srs')
      .select('*')
      .eq('user_id', userId)
      .lte('next_review_at', new Date().toISOString())
      .limit(1);

    if (srsError) console.error('Error fetching SRS:', srsError);

    if (srsItems && srsItems.length > 0) {
      const srsItem = srsItems[0];
      const { data: exercise, error: exError } = await supabase
        .from('course_exercises')
        .select('*')
        .eq('id', srsItem.item_id)
        .single();

      if (exercise) {
        return {
          exercise,
          isReview: true,
          currentDifficulty: state.current_difficulty
        };
      }
    }

    // 2. Fetch a new exercise of current difficulty
    // We try to find exercises that haven't been completed
    const { data: exercises, error: fetchError } = await supabase
      .from('course_exercises')
      .select('*, lesson:course_lessons(module:course_modules(course_level))')
      .eq('difficulty', state.current_difficulty)
      .not('id', 'in', `(${state.completed_exercise_ids.join(',') || 'NULL'})`)
      .limit(20);

    if (fetchError) throw fetchError;

    // Filter by A2 level (just in case difficulty seeding mixed levels)
    const a2Exercises = exercises?.filter(ex => 
      (ex.lesson as any)?.module?.course_level === 'A2'
    ) || [];

    if (a2Exercises.length === 0) {
      // If no more exercises at current level, maybe level up or just pick any uncompleted A2
      if (state.current_difficulty < 4) {
        // Force level up if current level exhausted
        await this.updateDifficulty(userId, state.current_difficulty + 1);
        return this.getNextExercise(userId);
      }
      return null;
    }

    // Pick a random one from the batch
    const randomIndex = Math.floor(Math.random() * a2Exercises.length);
    const selectedExercise = a2Exercises[randomIndex];

    return {
      exercise: selectedExercise,
      isReview: false,
      currentDifficulty: state.current_difficulty
    };
  }

  /**
   * Processes the result of an exercise completion
   */
  static async processResult(
    userId: string, 
    exerciseId: string, 
    isCorrect: boolean,
    quality: number // 0-5 for SRS
  ): Promise<UserAdaptiveState> {
    const state = await this.getOrCreateState(userId);
    
    // 1. Update SRS
    try {
      await supabase.rpc('update_srs_item', {
        p_user_id: userId,
        p_item_id: exerciseId,
        p_quality: quality
      });
    } catch (err) {
      console.error('Error updating SRS:', err);
    }

    // 2. Update Adaptive State
    let newDifficulty = state.current_difficulty;
    let newConsecutive = isCorrect ? state.consecutive_correct + 1 : 0;
    const newCompleted = [...state.completed_exercise_ids];

    if (isCorrect && !newCompleted.includes(exerciseId)) {
      newCompleted.push(exerciseId);
    }

    if (newConsecutive >= 3 && newDifficulty < 4) {
      newDifficulty++;
      newConsecutive = 0;
    } else if (!isCorrect && newDifficulty > 1 && state.consecutive_correct === 0) {
      // If they fail twice in a row at the start of a level, maybe go down?
      // For now, let's keep it simple: only progress upwards.
    }

    const { data: updatedState, error } = await supabase
      .from('user_adaptive_state')
      .update({
        current_difficulty: newDifficulty,
        consecutive_correct: newConsecutive,
        completed_exercise_ids: newCompleted,
        updated_at: new Date().toISOString()
      })
      .eq('user_id', userId)
      .eq('course_id', this.COURSE_ID)
      .select()
      .single();

    if (error) throw error;
    return updatedState;
  }

  private static async updateDifficulty(userId: string, difficulty: number) {
    await supabase
      .from('user_adaptive_state')
      .update({ current_difficulty: difficulty, updated_at: new Date().toISOString() })
      .eq('user_id', userId)
      .eq('course_id', this.COURSE_ID);
  }
}
