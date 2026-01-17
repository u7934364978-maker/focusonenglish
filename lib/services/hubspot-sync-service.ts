import { UserProfile, UserProgress } from './profile-service';

export interface HubSpotSyncData {
  email: string;
  firstname: string;
  lastname?: string;
  phone?: string;
  current_level?: string;
  total_lessons_completed?: number;
  total_study_minutes?: number;
  average_score?: number;
  current_streak?: number;
  last_activity_date?: string;
  learning_goals?: string;
  timezone?: string;
  language_proficiency?: string;
}

/**
 * Sync user profile data to HubSpot CRM
 */
export async function syncProfileToHubSpot(
  profile: UserProfile,
  progress?: UserProgress
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/hubspot/sync-profile', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: profile.email,
        firstname: profile.full_name?.split(' ')[0] || '',
        lastname: profile.full_name?.split(' ').slice(1).join(' ') || '',
        phone: profile.phone || '',
        current_level: profile.language_level || '',
        total_lessons_completed: progress?.total_lessons_completed || 0,
        total_study_minutes: progress?.total_study_minutes || 0,
        average_score: progress?.average_score || 0,
        current_streak: progress?.current_streak_days || 0,
        last_activity_date: progress?.last_activity || new Date().toISOString(),
        learning_goals: profile.learning_goals?.join(', ') || '',
        timezone: profile.timezone || '',
        language_proficiency: profile.language_level || '',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('HubSpot sync error:', error);
      return { success: false, error: error.message || 'Failed to sync with HubSpot' };
    }

    const result = await response.json();
    return { success: true, ...result };
  } catch (error) {
    console.error('Error syncing to HubSpot:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Update specific property in HubSpot
 */
export async function updateHubSpotProperty(
  email: string,
  property: string,
  value: string | number
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/hubspot/update-property', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        property,
        value: String(value),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.message || 'Failed to update HubSpot' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error updating HubSpot property:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Sync lesson completion to HubSpot
 */
export async function syncLessonCompletionToHubSpot(
  email: string,
  lessonTitle: string,
  score: number,
  studyMinutes: number
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/hubspot/sync-lesson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        lessonTitle,
        score,
        studyMinutes,
        completedAt: new Date().toISOString(),
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.message || 'Failed to sync lesson' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error syncing lesson to HubSpot:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}

/**
 * Create activity/engagement in HubSpot timeline
 */
export async function createHubSpotActivity(
  email: string,
  activityType: string,
  activityData: Record<string, any>
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/hubspot/create-activity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        activityType,
        activityData,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.message || 'Failed to create activity' };
    }

    return { success: true };
  } catch (error) {
    console.error('Error creating HubSpot activity:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
    };
  }
}
