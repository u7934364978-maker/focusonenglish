'use client';

import { useCallback, useEffect, useRef } from 'react';
import {
  sm2Update,
  qualityFromResult,
  saveCard,
  getDueCards,
  getWeakTopics,
  getDueCount,
  getTopicStats,
  getStoredCards,
  mergeServerCards,
  type SRSCard,
} from '@/lib/spaced-repetition';

/**
 * Only A1 syncs with the server API; other levels keep localStorage-only.
 * To add server sync for more levels, extend this set.
 */
const SERVER_SYNC_LEVELS = new Set(['A1']);

function serverSyncEnabled(level: string) {
  return SERVER_SYNC_LEVELS.has(level.toUpperCase());
}

async function pushCardToServer(card: SRSCard) {
  try {
    await fetch('/api/a1/srs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        exerciseId: card.exerciseId,
        topic: card.topic,
        interval: card.interval,
        repetitions: card.repetitions,
        easeFactor: card.easeFactor,
        nextReviewAt: new Date(card.nextReview).toISOString(),
        lastQuality: card.lastQuality,
      }),
    });
  } catch {
    // Non-blocking — localStorage is the source of truth for the session
  }
}

export function useSpacedRepetition(courseLevel: string) {
  const syncEnabled = serverSyncEnabled(courseLevel);
  const initialSyncDone = useRef(false);

  useEffect(() => {
    if (!syncEnabled || initialSyncDone.current) return;
    initialSyncDone.current = true;

    fetch('/api/a1/srs')
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (!data?.cards?.length) return;
        const serverCards: SRSCard[] = data.cards.map((c: {
          exercise_id: string;
          topic: string;
          interval: number;
          repetitions: number;
          ease_factor: number | string;
          next_review_at: string;
          last_quality: number;
        }) => ({
          exerciseId: c.exercise_id,
          topic: c.topic,
          level: courseLevel,
          interval: c.interval,
          repetitions: c.repetitions,
          easeFactor: Number(c.ease_factor),
          nextReview: new Date(c.next_review_at).getTime(),
          lastQuality: c.last_quality,
        }));
        mergeServerCards(courseLevel, serverCards);
      })
      .catch(() => {});
  }, [syncEnabled, courseLevel]);

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

      if (syncEnabled) {
        pushCardToServer(updated);
      }
    },
    [courseLevel, syncEnabled]
  );

  const getDue = useCallback(() => getDueCards(courseLevel), [courseLevel]);

  const getWeak = useCallback(() => getWeakTopics(courseLevel), [courseLevel]);

  const getStats = useCallback(() => getTopicStats(courseLevel), [courseLevel]);

  const hasDueReviews = typeof window !== 'undefined' ? getDueCount(courseLevel) > 0 : false;

  return { recordResult, getDue, getWeak, getStats, hasDueReviews };
}
