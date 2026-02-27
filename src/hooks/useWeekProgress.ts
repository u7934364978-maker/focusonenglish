'use client';

import { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase-client';

interface UseWeekProgressReturn {
  completedActivities: string[];
  markComplete: (activityId: string) => Promise<void>;
  isLoading: boolean;
}

function getLocalStorageKey(weekId: string): string {
  return `course_progress_${weekId}`;
}

export function useWeekProgress(weekId: string, userId: string | null): UseWeekProgressReturn {
  const [completedActivities, setCompletedActivities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const localKey = getLocalStorageKey(weekId);
    const saved = localStorage.getItem(localKey);
    const localActivities: string[] = saved ? JSON.parse(saved) : [];

    setCompletedActivities(localActivities);

    if (!userId) {
      setIsLoading(false);
      return;
    }

    supabase
      .from('user_interaction_progress')
      .select('interaction_id')
      .eq('user_id', userId)
      .eq('week_id', weekId)
      .then(({ data }) => {
        if (data && data.length > 0) {
          const remoteIds = data.map((row: { interaction_id: string }) => row.interaction_id);
          const merged = Array.from(new Set([...localActivities, ...remoteIds]));
          setCompletedActivities(merged);
          localStorage.setItem(localKey, JSON.stringify(merged));
        }
        setIsLoading(false);
      });
  }, [weekId, userId]);

  const markComplete = async (activityId: string) => {
    setCompletedActivities(prev => {
      if (prev.includes(activityId)) return prev;
      const updated = [...prev, activityId];
      localStorage.setItem(getLocalStorageKey(weekId), JSON.stringify(updated));
      return updated;
    });

    if (!userId) return;

    await supabase.from('user_interaction_progress').upsert({
      user_id: userId,
      interaction_id: activityId,
      week_id: weekId,
      completed_at: new Date().toISOString(),
    });
  };

  return { completedActivities, markComplete, isLoading };
}
