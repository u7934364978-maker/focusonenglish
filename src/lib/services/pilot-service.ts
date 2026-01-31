import { createClient } from '@/lib/supabase/client';

export interface PilotProgress {
  unit_id: string;
  current_lesson_id: string;
  completed_lessons: string[];
  scores: Record<string, any>;
}

export async function getPilotProgress(userId: string, unitId: string): Promise<PilotProgress | null> {
  const supabase = createClient();
  if (!supabase) return null;

  const { data, error } = await supabase
    .from('pilot_progress')
    .select('*')
    .eq('user_id', userId)
    .eq('unit_id', unitId)
    .single();

  if (error) {
    console.error('Error fetching pilot progress:', error);
    return null;
  }

  return data;
}

export async function updatePilotProgress(userId: string, unitId: string, updates: Partial<PilotProgress>) {
  const supabase = createClient();
  if (!supabase) return;

  const { error } = await supabase
    .from('pilot_progress')
    .upsert({
      user_id: userId,
      unit_id: unitId,
      ...updates,
      last_updated: new Date().toISOString()
    }, {
      onConflict: 'user_id,unit_id'
    });

  if (error) {
    console.error('Error updating pilot progress:', error);
    throw error;
  }
}
