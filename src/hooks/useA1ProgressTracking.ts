import { useCallback, useRef } from 'react';
import { useAuth } from '@/components/AuthProvider';

interface RecordExerciseParams {
  unitId: number;
  exerciseId: string;
  exerciseType: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export function useA1ProgressTracking() {
  const { user } = useAuth();
  const isRecordingRef = useRef(false);

  const recordExercise = useCallback(
    async (params: RecordExerciseParams) => {
      if (!user || isRecordingRef.current) {
        return;
      }

      isRecordingRef.current = true;

      try {
        const response = await fetch('/api/a1/record-exercise', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(params),
        });

        if (!response.ok) {
          console.error('Failed to record exercise:', response.statusText);
          return;
        }

        const data = await response.json();
        console.log('Exercise recorded:', data);
        return data;
      } catch (error) {
        console.error('Error recording exercise:', error);
      } finally {
        isRecordingRef.current = false;
      }
    },
    [user]
  );

  const getProgress = useCallback(async (unitId?: number) => {
    if (!user) {
      return null;
    }

    try {
      const url = unitId
        ? `/api/a1/progress?unitId=${unitId}`
        : '/api/a1/progress';

      const response = await fetch(url);

      if (!response.ok) {
        console.error('Failed to fetch progress:', response.statusText);
        return null;
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching progress:', error);
      return null;
    }
  }, [user]);

  return { recordExercise, getProgress, isAuthenticated: !!user };
}
