'use client';

import { useCallback } from 'react';
import {
  sm2Update,
  qualityFromResult,
  saveCard,
  getDueCards,
  getWeakTopics,
  getDueCount,
  getTopicStats,
  getStoredCards,
  type SRSCard,
} from '@/lib/spaced-repetition';

export function useSpacedRepetition(courseLevel: string) {
  const recordResult = useCallback(
    (exerciseId: string, topic: string, correct: boolean, score: number) => {
      const quality = qualityFromResult(correct, score);
      const cards = getStoredCards(courseLevel);
      const existing = cards.find(c => c.exerciseId === exerciseId);

      const baseCard: SRSCard = existing ?? {
        exerciseId,
        topic,
        level: courseLevel,
        interval: 1,
        repetitions: 0,
        easeFactor: 2.5,
        nextReview: Date.now(),
        lastQuality: quality,
      };

      const updated = sm2Update(baseCard, quality);
      saveCard(updated);
    },
    [courseLevel]
  );

  const getDue = useCallback(() => getDueCards(courseLevel), [courseLevel]);

  const getWeak = useCallback(() => getWeakTopics(courseLevel), [courseLevel]);

  const getStats = useCallback(() => getTopicStats(courseLevel), [courseLevel]);

  const hasDueReviews = typeof window !== 'undefined' ? getDueCount(courseLevel) > 0 : false;

  return { recordResult, getDue, getWeak, getStats, hasDueReviews };
}
