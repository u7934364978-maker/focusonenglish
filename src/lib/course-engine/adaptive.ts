import { Interaction, CourseUnit } from './schema';

export interface AdaptiveSessionOptions {
  maxExercises?: number;
  reviewPriority?: number; // 0 to 1, how much to prioritize reviews over new items
  shuffleNew?: boolean;
}

export interface UserPerformanceRecord {
  interaction_id: string;
  quality: number; // 0-5 (SM-2 standard: 0=fail, 5=perfect)
  last_review_at: Date;
  next_review_at: Date;
  iterations: number;
}

export class AdaptiveEngine {
  /**
   * Generates a sequence of exercises based on user history and unit content.
   * This implements a Duolingo-style session where new content is mixed with reviews.
   */
  static generateSequence(
    unit: CourseUnit,
    performance: UserPerformanceRecord[],
    options: AdaptiveSessionOptions = {}
  ): Interaction[] {
    const {
      maxExercises = 15,
      reviewPriority = 0.4, // Default to 40% review, 60% new
      shuffleNew = true
    } = options;

    // 1. Flatten all interactions from the unit
    const allInteractions = unit.blocks.flatMap(b => b.content);
    
    // 2. Identify items by status
    const now = new Date();
    const performanceMap = new Map(performance.map(p => [p.interaction_id, p]));
    
    // Items that are due for review or were failed recently
    const reviewItems = allInteractions.filter(item => {
      const perf = performanceMap.get(item.interaction_id);
      if (!perf) return false;
      return new Date(perf.next_review_at) <= now || perf.quality < 3;
    });

    // Items never seen before
    const newItems = allInteractions.filter(item => !performanceMap.has(item.interaction_id));

    // Items already mastered and not due
    const masteredItems = allInteractions.filter(item => {
      const perf = performanceMap.get(item.interaction_id);
      return perf && new Date(perf.next_review_at) > now && perf.quality >= 3;
    });

    // 3. Build the sequence based on quotas
    let sequence: Interaction[] = [];
    
    const reviewQuota = Math.min(reviewItems.length, Math.ceil(maxExercises * reviewPriority));
    const newQuota = Math.min(newItems.length, maxExercises - reviewQuota);

    // Pick reviews (prioritize by lowest quality first, then oldest next_review)
    const sortedReviews = [...reviewItems].sort((a, b) => {
      const perfA = performanceMap.get(a.interaction_id)!;
      const perfB = performanceMap.get(b.interaction_id)!;
      if (perfA.quality !== perfB.quality) return perfA.quality - perfB.quality;
      return new Date(perfA.next_review_at).getTime() - new Date(perfB.next_review_at).getTime();
    });

    sequence.push(...sortedReviews.slice(0, reviewQuota));

    // Pick new items
    let candidateNew = [...newItems];
    if (shuffleNew) {
      candidateNew = candidateNew.sort(() => Math.random() - 0.5);
    }
    sequence.push(...candidateNew.slice(0, newQuota));

    // 4. Fill remaining slots if unit has more content
    if (sequence.length < Math.min(maxExercises, allInteractions.length)) {
      const usedIds = new Set(sequence.map(s => s.interaction_id));
      const remainingItems = allInteractions
        .filter(item => !usedIds.has(item.interaction_id))
        .sort(() => Math.random() - 0.5);
      
      const needed = Math.min(maxExercises, allInteractions.length) - sequence.length;
      sequence.push(...remainingItems.slice(0, needed));
    }

    // 5. Final mix of the sequence for an organic feel
    return sequence.sort(() => Math.random() - 0.5);
  }

  /**
   * Generates a sequence from a flat list of interactions (e.g., across multiple units).
   */
  static generateGlobalSequence(
    interactions: Interaction[],
    performance: UserPerformanceRecord[],
    options: AdaptiveSessionOptions = {}
  ): Interaction[] {
    const {
      maxExercises = 15,
      reviewPriority = 0.5, // Global practice usually prioritizes reviews
      shuffleNew = true
    } = options;

    const now = new Date();
    const performanceMap = new Map(performance.map(p => [p.interaction_id, p]));
    
    // 1. Identify items by status
    const reviewItems = interactions.filter(item => {
      const perf = performanceMap.get(item.interaction_id);
      if (!perf) return false;
      return new Date(perf.next_review_at) <= now || perf.quality < 3;
    });

    const newItems = interactions.filter(item => !performanceMap.has(item.interaction_id));

    // 2. build sequence
    let sequence: Interaction[] = [];
    const reviewQuota = Math.min(reviewItems.length, Math.ceil(maxExercises * reviewPriority));
    const newQuota = Math.min(newItems.length, maxExercises - reviewQuota);

    const sortedReviews = [...reviewItems].sort((a, b) => {
      const perfA = performanceMap.get(a.interaction_id)!;
      const perfB = performanceMap.get(b.interaction_id)!;
      if (perfA.quality !== perfB.quality) return perfA.quality - perfB.quality;
      return new Date(perfA.next_review_at).getTime() - new Date(perfB.next_review_at).getTime();
    });

    sequence.push(...sortedReviews.slice(0, reviewQuota));

    let candidateNew = [...newItems];
    if (shuffleNew) candidateNew = candidateNew.sort(() => Math.random() - 0.5);
    sequence.push(...candidateNew.slice(0, newQuota));

    // Fill remaining
    if (sequence.length < Math.min(maxExercises, interactions.length)) {
      const usedIds = new Set(sequence.map(s => s.interaction_id));
      const remaining = interactions
        .filter(item => !usedIds.has(item.interaction_id))
        .sort(() => Math.random() - 0.5);
      const needed = Math.min(maxExercises, interactions.length) - sequence.length;
      sequence.push(...remaining.slice(0, needed));
    }

    return sequence.sort(() => Math.random() - 0.5);
  }

  /**
   * Calculates the next SRS state for an interaction based on performance.
   * Based on modified SM-2 algorithm.
   */
  static calculateNextSRS(
    current: UserPerformanceRecord | null,
    quality: number // 0-5
  ): Partial<UserPerformanceRecord> {
    let iterations = current?.iterations || 0;
    let interval = 1;
    let easinessFactor = 2.5; // Default EF

    if (quality >= 3) {
      if (iterations === 0) {
        interval = 1;
      } else if (iterations === 1) {
        interval = 6;
      } else {
        // We don't store interval in UserPerformanceRecord yet, 
        // but we can derive it from last and next review or iterations
        // For simplicity in this first version, we'll use iterations-based growth
        interval = Math.ceil(iterations * easinessFactor);
      }
      iterations++;
    } else {
      iterations = 0;
      interval = 1;
    }

    const nextReview = new Date();
    nextReview.setDate(nextReview.getDate() + interval);

    return {
      interaction_id: current?.interaction_id,
      quality,
      iterations,
      last_review_at: new Date(),
      next_review_at: nextReview
    };
  }
}
