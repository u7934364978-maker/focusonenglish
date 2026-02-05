import { supabase } from '@/lib/supabase/client';

export interface SpecializationStatus {
  goal: string;
  level: string;
  totalExercises: number;
  completedExercises: number;
  isComplete: boolean;
  percentage: number;
}

export const certificationService = {
  /**
   * Checks if a user has completed a specific specialization (goal + level)
   */
  async checkSpecializationCompletion(userId: string, goal: string, level: string): Promise<SpecializationStatus> {
    if (!supabase || !userId || userId === 'anonymous') {
      return { goal, level, totalExercises: 0, completedExercises: 0, isComplete: false, percentage: 0 };
    }

    // 1. Get all exercise IDs for this specialization
    const { data: exercises, error: exercisesError } = await supabase
      .from('course_exercises')
      .select(`
        id,
        lesson_id,
        course_lessons!inner (
          id,
          module_id,
          course_modules!inner (
            id,
            course_goal,
            course_level
          )
        )
      `)
      .eq('course_lessons.course_modules.course_goal', goal)
      .eq('course_lessons.course_modules.course_level', level);

    if (exercisesError) {
      console.error('Error fetching specialization exercises:', exercisesError);
      return { goal, level, totalExercises: 0, completedExercises: 0, isComplete: false, percentage: 0 };
    }

    const totalExercises = exercises?.length || 0;
    if (totalExercises === 0) {
      return { goal, level, totalExercises: 0, completedExercises: 0, isComplete: false, percentage: 0 };
    }

    const exerciseIds = exercises.map(ex => ex.id);

    // 2. Get user's completed exercises
    const { data: progress, error: progressError } = await supabase
      .from('user_interaction_progress')
      .select('interaction_id')
      .eq('user_id', userId)
      .in('interaction_id', exerciseIds);

    if (progressError) {
      console.error('Error fetching user progress:', progressError);
      return { goal, level, totalExercises, completedExercises: 0, isComplete: false, percentage: 0 };
    }

    const completedExercises = progress?.length || 0;
    const isComplete = completedExercises === totalExercises;
    const percentage = Math.round((completedExercises / totalExercises) * 100);

    return {
      goal,
      level,
      totalExercises,
      completedExercises,
      isComplete,
      percentage
    };
  },

  /**
   * Issues a certificate for a user if they completed the specialization
   */
  async issueCertificate(userId: string, goal: string, level: string): Promise<string | null> {
    const status = await this.checkSpecializationCompletion(userId, goal, level);
    
    if (!status.isComplete) return null;

    // Check if certificate already exists
    const { data: existing } = await supabase
      .from('certifications')
      .select('id')
      .eq('user_id', userId)
      .eq('level', level)
      .eq('exam_type', `Specialization: ${goal}`)
      .maybeSingle();

    if (existing) return existing.id;

    // Create new certificate
    const { data, error } = await supabase
      .from('certifications')
      .insert({
        user_id: userId,
        level: level,
        exam_type: `Specialization: ${goal}`,
        score: 100,
        metadata: {
          goal,
          total_exercises: status.totalExercises,
          issued_via: 'automated-completion'
        }
      })
      .select('id')
      .single();

    if (error) {
      console.error('Error issuing certificate:', error);
      return null;
    }

    return data.id;
  },

  /**
   * Gets all certificates for a user
   */
  async getUserCertificates(userId: string) {
    const { data, error } = await supabase
      .from('certifications')
      .select('*')
      .eq('user_id', userId)
      .order('issued_at', { ascending: false });

    if (error) {
      console.error('Error fetching certificates:', error);
      return [];
    }

    return data;
  }
};
