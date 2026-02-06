export type CEFR = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type SkillType = 'grammar' | 'vocabulary' | 'reading' | 'listening';

export interface BaseQuestion {
  id: string;
  skill: SkillType;
  level: CEFR;
  points: number;
  question: string;
  context?: string;
  options: string[];
  correctAnswer: number;
}

export type PlacementResult = {
  score: number;
  maxPoints: number;
  percentage: number;
  recommendedLevel: CEFR;
  breakdown: Record<CEFR, { points: number; maxPoints: number; percentage: number }>;
};

const LEVEL_ORDER: CEFR[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

/**
 * Computes the placement level based on user answers and a set of questions.
 * Supports weighted scoring (points) and per-level breakdown.
 */
export function computePlacement(
  answers: Record<string, number>,
  questions: BaseQuestion[]
): PlacementResult {
  const breakdown: Record<CEFR, { points: number; maxPoints: number; percentage: number }> = {
    A1: { points: 0, maxPoints: 0, percentage: 0 },
    A2: { points: 0, maxPoints: 0, percentage: 0 },
    B1: { points: 0, maxPoints: 0, percentage: 0 },
    B2: { points: 0, maxPoints: 0, percentage: 0 },
    C1: { points: 0, maxPoints: 0, percentage: 0 },
    C2: { points: 0, maxPoints: 0, percentage: 0 }
  };

  let totalPoints = 0;
  let maxPossiblePoints = 0;

  for (const q of questions) {
    const level = q.level;
    breakdown[level].maxPoints += q.points;
    maxPossiblePoints += q.points;

    const userAnswer = answers[q.id];
    if (userAnswer === q.correctAnswer) {
      breakdown[level].points += q.points;
      totalPoints += q.points;
    }
  }

  // Calculate percentages for each level
  for (const lvl of LEVEL_ORDER) {
    const data = breakdown[lvl];
    if (data.maxPoints > 0) {
      data.percentage = (data.points / data.maxPoints) * 100;
    }
  }

  // Determine recommended level
  // Logic: The highest level where the user scored at least 60%
  let bestLevelIndex = 0;
  for (let i = 0; i < LEVEL_ORDER.length; i++) {
    const lvl = LEVEL_ORDER[i];
    if (breakdown[lvl].maxPoints > 0 && breakdown[lvl].percentage >= 60) {
      bestLevelIndex = i;
    }
  }

  return {
    score: totalPoints,
    maxPoints: maxPossiblePoints,
    percentage: maxPossiblePoints > 0 ? (totalPoints / maxPossiblePoints) * 100 : 0,
    recommendedLevel: LEVEL_ORDER[bestLevelIndex],
    breakdown
  };
}
