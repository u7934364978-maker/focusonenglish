import { supabase } from '@/lib/supabase/client';

export interface UserProfile {
  id: string;
  email: string;
  full_name: string;
  avatar_url?: string;
  phone?: string;
  country?: string;
  language_level?: string;
  learning_goals?: string[];
  bio?: string;
  timezone?: string;
  notifications_enabled?: boolean;
  email_notifications?: boolean;
  created_at?: string;
  updated_at?: string;
}

export interface UserProgress {
  user_id: string;
  total_lessons_completed: number;
  total_exercises_completed: number;
  total_study_minutes: number;
  current_streak_days: number;
  longest_streak_days: number;
  average_score: number;
  total_xp: number;
  level: number;
  achievements?: string[];
  last_activity?: string;
}

export interface LessonProgress {
  id: string;
  user_id: string;
  lesson_id: string;
  lesson_title: string;
  completed: boolean;
  score?: number;
  time_spent_minutes?: number;
  completed_at?: string;
}

// ============================================
// USER PROFILE OPERATIONS
// ============================================

export async function getUserProfile(userId: string): Promise<UserProfile | null> {
  try {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single();

    if (error) {
      console.error('Error fetching user profile:', error);
      return null;
    }

    return data as UserProfile;
  } catch (error) {
    console.error('Error in getUserProfile:', error);
    return null;
  }
}

export async function updateUserProfile(
  userId: string,
  updates: Partial<UserProfile>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .update({
        ...updates,
        updated_at: new Date().toISOString(),
      })
      .eq('id', userId);

    if (error) {
      console.error('Error updating user profile:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updateUserProfile:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

export async function createUserProfile(profile: UserProfile): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .insert([{
        ...profile,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('Error creating user profile:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in createUserProfile:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// ============================================
// USER PROGRESS OPERATIONS
// ============================================

export async function getUserProgress(userId: string): Promise<UserProgress | null> {
  try {
    const { data, error } = await supabase
      .from('user_progress')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching user progress:', error);
      return null;
    }

    return data as UserProgress;
  } catch (error) {
    console.error('Error in getUserProgress:', error);
    return null;
  }
}

export async function updateUserProgress(
  userId: string,
  updates: Partial<UserProgress>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('user_progress')
      .update(updates)
      .eq('user_id', userId);

    if (error) {
      console.error('Error updating user progress:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in updateUserProgress:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// ============================================
// LESSON PROGRESS OPERATIONS
// ============================================

export async function getUserLessonProgress(userId: string): Promise<LessonProgress[]> {
  try {
    const { data, error } = await supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false });

    if (error) {
      console.error('Error fetching lesson progress:', error);
      return [];
    }

    return data as LessonProgress[];
  } catch (error) {
    console.error('Error in getUserLessonProgress:', error);
    return [];
  }
}

export async function saveLessonProgress(
  progress: Omit<LessonProgress, 'id'>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { error } = await supabase
      .from('lesson_progress')
      .insert([{
        ...progress,
        completed_at: new Date().toISOString(),
      }]);

    if (error) {
      console.error('Error saving lesson progress:', error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (error) {
    console.error('Error in saveLessonProgress:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error' 
    };
  }
}

// ============================================
// STATISTICS & ANALYTICS
// ============================================

export async function getRecentActivity(userId: string, limit: number = 10) {
  try {
    const { data, error } = await supabase
      .from('lesson_progress')
      .select('*')
      .eq('user_id', userId)
      .order('completed_at', { ascending: false })
      .limit(limit);

    if (error) {
      console.error('Error fetching recent activity:', error);
      return [];
    }

    return data;
  } catch (error) {
    console.error('Error in getRecentActivity:', error);
    return [];
  }
}

export async function getUserStats(userId: string) {
  try {
    const progress = await getUserProgress(userId);
    const recentLessons = await getRecentActivity(userId, 5);
    const skillsBreakdown = await getSkillsBreakdown(userId);

    return {
      progress,
      recentLessons,
      skillsBreakdown,
      nextMilestone: calculateNextMilestone(progress),
    };
  } catch (error) {
    console.error('Error in getUserStats:', error);
    return null;
  }
}

export async function getSkillsBreakdown(userId: string) {
  try {
    // Query exercises by type and calculate average scores
    const { data: exerciseResults, error } = await supabase
      .from('exercise_results')
      .select('exercise_type, score')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching exercise results:', error);
      return {
        reading: 0,
        writing: 0,
        listening: 0,
        speaking: 0,
      };
    }

    // Calculate averages per skill type
    const skillScores: { [key: string]: number[] } = {
      reading: [],
      writing: [],
      listening: [],
      speaking: [],
    };

    exerciseResults?.forEach((result: any) => {
      const type = result.exercise_type?.toLowerCase();
      if (type && skillScores[type]) {
        skillScores[type].push(result.score || 0);
      }
    });

    // Calculate averages
    const calculateAverage = (scores: number[]) =>
      scores.length > 0
        ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
        : 0;

    return {
      reading: calculateAverage(skillScores.reading),
      writing: calculateAverage(skillScores.writing),
      listening: calculateAverage(skillScores.listening),
      speaking: calculateAverage(skillScores.speaking),
    };
  } catch (error) {
    console.error('Error in getSkillsBreakdown:', error);
    return {
      reading: 0,
      writing: 0,
      listening: 0,
      speaking: 0,
    };
  }
}

function calculateNextMilestone(progress: UserProgress | null) {
  if (!progress) return null;

  const milestones = [
    { lessons: 10, title: 'Getting Started' },
    { lessons: 25, title: 'Consistent Learner' },
    { lessons: 50, title: 'Dedicated Student' },
    { lessons: 100, title: 'English Master' },
  ];

  for (const milestone of milestones) {
    if (progress.total_lessons_completed < milestone.lessons) {
      return {
        ...milestone,
        remaining: milestone.lessons - progress.total_lessons_completed,
      };
    }
  }

  return null;
}
