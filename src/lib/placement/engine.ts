export type CEFR = "A1" | "A2" | "B1" | "B2" | "C1" | "C2";

export type PlacementQuestion = {
  id: string;
  skill: "grammar" | "vocabulary" | "reading";
  prompt: string;
  sentence: string;
  options: [string, string, string];
  answerIndex: 0 | 1 | 2;
  levelHint: CEFR;
};

export type PlacementBank = {
  version: number;
  questions: PlacementQuestion[];
};

const ORDER: CEFR[] = ["A1", "A2", "B1", "B2", "C1", "C2"];

function clampIndex(i: number) {
  return Math.max(0, Math.min(ORDER.length - 1, i));
}

export function computePlacementLevel(answers: Record<string, number>, bank: PlacementBank): {
  score: number;
  maxScore: number;
  recommended: CEFR;
  breakdown: Record<CEFR, { correct: number; total: number }>;
} {
  const breakdown: Record<CEFR, { correct: number; total: number }> = {
    A1: { correct: 0, total: 0 },
    A2: { correct: 0, total: 0 },
    B1: { correct: 0, total: 0 },
    B2: { correct: 0, total: 0 },
    C1: { correct: 0, total: 0 },
    C2: { correct: 0, total: 0 }
  };

  let score = 0;
  let maxScore = 0;

  for (const q of bank.questions) {
    breakdown[q.levelHint].total++;
    maxScore++;
    const a = answers[q.id];
    if (a === q.answerIndex) {
      breakdown[q.levelHint].correct++;
      score++;
    }
  }

  // Regla simple:
  // - calcula el nivel más alto donde el usuario acierta >=60% de ese nivel
  // - si no, cae al anterior.
  let bestIndex = 0;
  for (let i = 0; i < ORDER.length; i++) {
    const lvl = ORDER[i];
    const { correct, total } = breakdown[lvl];
    if (total === 0) continue;
    if (correct / total >= 0.6) bestIndex = i;
  }

  return {
    score,
    maxScore,
    recommended: ORDER[clampIndex(bestIndex)],
    breakdown
  };
}
