export type LevelId = "a1" | "a2" | "b1" | "b2" | "c1" | "c2";

export type PlacementState = {
  goal: string;
  recommendedLevel: LevelId;
  unlockedMaxLevel: LevelId;
  updatedAt: number;
};

export type PracticeGate = {
  coreTotal: number;         // 48
  passThreshold: number;     // 0.8
  cyclesUsed: number;        // 0..5
  maxCycles: number;         // 5
  passed: boolean;
  locked: boolean;           // true si cyclesUsed>=5 y no passed
  lastAccuracy: number | null;
  updatedAt: number;
};

export type PracticeProgress = {
  answeredCore: Record<string, { correct: boolean }>;
};

const LEVEL_ORDER: LevelId[] = ["a1", "a2", "b1", "b2", "c1", "c2"];

function clampLevel(level: string): LevelId {
  if (LEVEL_ORDER.includes(level as LevelId)) return level as LevelId;
  return "a1";
}

function placementKey(goal: string) {
  return `fe:placement:${goal}`;
}

function practiceGateKey(goal: string, level: string, weekId: string) {
  return `fe:practicegate:${goal}:${level}:${weekId}`;
}

function practiceProgressKey(goal: string, level: string, weekId: string) {
  return `fe:practiceprogress:${goal}:${level}:${weekId}`;
}

export function loadPlacement(goal: string): PlacementState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(placementKey(goal));
    return raw ? (JSON.parse(raw) as PlacementState) : null;
  } catch {
    return null;
  }
}

export function savePlacement(state: PlacementState) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(placementKey(state.goal), JSON.stringify(state));
}

export function canAccessLevel(goal: string, level: string) {
  const lvl = clampLevel(level);
  const p = loadPlacement(goal);
  if (!p) return true;
  const maxIdx = LEVEL_ORDER.indexOf(p.unlockedMaxLevel);
  const idx = LEVEL_ORDER.indexOf(lvl);
  return idx <= maxIdx;
}

export function nextLevel(level: LevelId): LevelId | null {
  const idx = LEVEL_ORDER.indexOf(level);
  return idx >= 0 && idx < LEVEL_ORDER.length - 1 ? LEVEL_ORDER[idx + 1] : null;
}

export function unlockNextLevel(goal: string, currentLevel: LevelId) {
  const p = loadPlacement(goal);
  if (!p) return;

  const nxt = nextLevel(currentLevel);
  if (!nxt) return;

  const currentMaxIdx = LEVEL_ORDER.indexOf(p.unlockedMaxLevel);
  const nextIdx = LEVEL_ORDER.indexOf(nxt);
  if (nextIdx > currentMaxIdx) {
    savePlacement({ ...p, unlockedMaxLevel: nxt, updatedAt: Date.now() });
  }
}

// ===== PRACTICE (80%) =====

function defaultPracticeGate(): PracticeGate {
  return {
    coreTotal: 48,
    passThreshold: 0.8,
    cyclesUsed: 0,
    maxCycles: 5,
    passed: false,
    locked: false,
    lastAccuracy: null,
    updatedAt: Date.now(),
  };
}

export function loadPracticeGate(goal: string, level: string, weekId: string): PracticeGate {
  if (typeof window === "undefined") return defaultPracticeGate();
  try {
    const raw = window.localStorage.getItem(practiceGateKey(goal, level, weekId));
    return raw
      ? ({ ...defaultPracticeGate(), ...(JSON.parse(raw) as Partial<PracticeGate>) } as PracticeGate)
      : defaultPracticeGate();
  } catch {
    return defaultPracticeGate();
  }
}

export function savePracticeGate(goal: string, level: string, weekId: string, gate: PracticeGate) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(practiceGateKey(goal, level, weekId), JSON.stringify(gate));
}

export function loadPracticeProgress(goal: string, level: string, weekId: string): PracticeProgress {
  if (typeof window === "undefined") return { answeredCore: {} };
  try {
    const raw = window.localStorage.getItem(practiceProgressKey(goal, level, weekId));
    return raw ? (JSON.parse(raw) as PracticeProgress) : { answeredCore: {} };
  } catch {
    return { answeredCore: {} };
  }
}

export function savePracticeProgress(goal: string, level: string, weekId: string, prog: PracticeProgress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(practiceProgressKey(goal, level, weekId), JSON.stringify(prog));
}

export function recordCoreResult(params: {
  goal: string;
  level: string;
  weekId: string;
  exerciseId: string;
  isCorrect: boolean;
}) {
  const { goal, level, weekId, exerciseId, isCorrect } = params;
  const prog = loadPracticeProgress(goal, level, weekId);
  prog.answeredCore[exerciseId] = { correct: isCorrect };
  savePracticeProgress(goal, level, weekId, prog);
}

export function getCoreStats(goal: string, level: string, weekId: string, coreTotal = 48) {
  const prog = loadPracticeProgress(goal, level, weekId);
  const answered = Object.values(prog.answeredCore);
  const attempted = answered.length;
  const correct = answered.filter((x) => x.correct).length;
  const accuracy = attempted > 0 ? correct / attempted : 0;
  const complete = attempted >= coreTotal;
  return { attempted, correct, accuracy, complete };
}

// Botón: “Finalizar práctica”
export function finalizePractice(goal: string, level: string, weekId: string) {
  const gate = loadPracticeGate(goal, level, weekId);
  if (gate.locked || gate.passed) return gate;

  const stats = getCoreStats(goal, level, weekId, gate.coreTotal);
  if (!stats.complete) return gate;

  const passed = stats.accuracy >= gate.passThreshold;

  const next: PracticeGate = {
    ...gate,
    passed: passed ? true : gate.passed,
    lastAccuracy: stats.accuracy,
    updatedAt: Date.now(),
    locked: false,
  };

  // Si falla, NO consumimos ciclo aquí. El ciclo se consume solo si el usuario hace Reset.
  savePracticeGate(goal, level, weekId, next);
  return next;
}

// Botón: “Reset ciclo” (consume 1 ciclo)
export function resetPracticeCycle(goal: string, level: string, weekId: string) {
  const gate = loadPracticeGate(goal, level, weekId);
  if (gate.passed) return gate;

  const nextCyclesUsed = gate.cyclesUsed + 1;
  const locked = nextCyclesUsed >= gate.maxCycles;

  const nextGate: PracticeGate = {
    ...gate,
    cyclesUsed: nextCyclesUsed,
    locked: locked,
    lastAccuracy: null,
    updatedAt: Date.now(),
  };

  // reset respuestas core
  savePracticeProgress(goal, level, weekId, { answeredCore: {} });
  savePracticeGate(goal, level, weekId, nextGate);
  return nextGate;
}
