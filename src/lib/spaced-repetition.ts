export interface SRSCard {
  exerciseId: string;
  topic: string;
  level: string;
  interval: number;
  repetitions: number;
  easeFactor: number;
  nextReview: number;
  lastQuality: number;
}

export function sm2Update(card: SRSCard, quality: number): SRSCard {
  const q = Math.max(0, Math.min(5, quality));
  let { interval, repetitions, easeFactor } = card;

  if (q >= 3) {
    if (repetitions === 0) interval = 1;
    else if (repetitions === 1) interval = 6;
    else interval = Math.round(interval * easeFactor);
    repetitions += 1;
  } else {
    repetitions = 0;
    interval = 1;
  }

  easeFactor = Math.max(1.3, easeFactor + 0.1 - (5 - q) * (0.08 + (5 - q) * 0.02));

  const nextReview = Date.now() + interval * 24 * 60 * 60 * 1000;

  return { ...card, interval, repetitions, easeFactor, nextReview, lastQuality: q };
}

export function qualityFromResult(correct: boolean, score: number): number {
  if (!correct) return score >= 50 ? 2 : 1;
  if (score >= 90) return 5;
  if (score >= 75) return 4;
  return 3;
}

const storageKey = (level: string) => `srs-${level.toLowerCase()}`;

export function getStoredCards(level: string): SRSCard[] {
  if (typeof window === 'undefined') return [];
  try {
    const raw = localStorage.getItem(storageKey(level));
    if (!raw) return [];
    return JSON.parse(raw) as SRSCard[];
  } catch {
    return [];
  }
}

export function saveCard(card: SRSCard): void {
  if (typeof window === 'undefined') return;
  const cards = getStoredCards(card.level);
  const idx = cards.findIndex(c => c.exerciseId === card.exerciseId);
  if (idx >= 0) cards[idx] = card;
  else cards.push(card);
  localStorage.setItem(storageKey(card.level), JSON.stringify(cards));
}

export function getDueCards(level: string): SRSCard[] {
  const now = Date.now();
  return getStoredCards(level).filter(c => c.nextReview <= now);
}

export function getWeakTopics(level: string): string[] {
  const cards = getStoredCards(level);
  const topicScores: Record<string, { total: number; count: number }> = {};
  for (const card of cards) {
    if (!topicScores[card.topic]) topicScores[card.topic] = { total: 0, count: 0 };
    topicScores[card.topic].total += card.lastQuality;
    topicScores[card.topic].count += 1;
  }
  return Object.entries(topicScores)
    .filter(([, v]) => v.count > 0 && v.total / v.count < 3.5)
    .sort((a, b) => a[1].total / a[1].count - b[1].total / b[1].count)
    .map(([topic]) => topic)
    .slice(0, 5);
}

export function getTopicStats(level: string): Record<string, { avg: number; count: number }> {
  const cards = getStoredCards(level);
  const stats: Record<string, { total: number; count: number }> = {};
  for (const card of cards) {
    if (!stats[card.topic]) stats[card.topic] = { total: 0, count: 0 };
    stats[card.topic].total += card.lastQuality;
    stats[card.topic].count += 1;
  }
  const result: Record<string, { avg: number; count: number }> = {};
  for (const [topic, v] of Object.entries(stats)) {
    result[topic] = { avg: Math.round((v.total / v.count) * 20), count: v.count };
  }
  return result;
}

export function getDueCount(level: string): number {
  return getDueCards(level).length;
}
