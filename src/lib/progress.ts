export type WeekProgress = {
  core: { attempted: number; correct: number; total: number };
  coreAccuracy: number;      // correct/attempted
  coreUnlockedNext: boolean; // attempted>=total && accuracy>=0.8
  updatedAt: number;
};

type WeekRuntime = {
  answeredCore: Record<string, { correct: boolean }>;
};

function pad2(n: number) {
  return String(n).padStart(2, "0");
}

export function weekIdFromNumber(n: number) {
  return `semana-${pad2(n)}`;
}

export function progressKey(goal: string, level: string, weekId: string) {
  return `fe:progress:${goal}:${level}:${weekId}`;
}

function runtimeKey(goal: string, level: string, weekId: string) {
  return `fe:runtime:${goal}:${level}:${weekId}`;
}

export function loadWeekProgress(goal: string, level: string, weekId: string): WeekProgress | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(progressKey(goal, level, weekId));
    return raw ? (JSON.parse(raw) as WeekProgress) : null;
  } catch {
    return null;
  }
}

function saveWeekProgress(goal: string, level: string, weekId: string, p: WeekProgress) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(progressKey(goal, level, weekId), JSON.stringify(p));
}

function loadRuntime(goal: string, level: string, weekId: string): WeekRuntime {
  if (typeof window === "undefined") return { answeredCore: {} };
  try {
    const raw = window.localStorage.getItem(runtimeKey(goal, level, weekId));
    return raw ? (JSON.parse(raw) as WeekRuntime) : { answeredCore: {} };
  } catch {
    return { answeredCore: {} };
  }
}

function saveRuntime(goal: string, level: string, weekId: string, r: WeekRuntime) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(runtimeKey(goal, level, weekId), JSON.stringify(r));
}

export function recordCoreAttempt(params: {
  goal: string;
  level: string;
  weekId: string;
  exerciseId: string;
  isCorrect: boolean;
  coreTotal: number; // normalmente 48
}) {
  const { goal, level, weekId, exerciseId, isCorrect, coreTotal } = params;

  const runtime = loadRuntime(goal, level, weekId);
  runtime.answeredCore[exerciseId] = { correct: isCorrect };
  saveRuntime(goal, level, weekId, runtime);

  const answered = Object.values(runtime.answeredCore);
  const attempted = answered.length;
  const correct = answered.filter((x) => x.correct).length;

  const coreAccuracy = attempted > 0 ? correct / attempted : 0;
  const coreUnlockedNext = attempted >= coreTotal && coreAccuracy >= 0.8;

  const progress: WeekProgress = {
    core: { attempted, correct, total: coreTotal },
    coreAccuracy,
    coreUnlockedNext,
    updatedAt: Date.now(),
  };

  saveWeekProgress(goal, level, weekId, progress);

  return progress;
}

export function isWeekUnlocked(goal: string, level: string, weekNumber: number) {
  if (weekNumber <= 1) return true;
  const prevWeek = weekIdFromNumber(weekNumber - 1);
  const prevProgress = loadWeekProgress(goal, level, prevWeek);
  return Boolean(prevProgress?.coreUnlockedNext);
}

export type UnitProgress = {
  total: number;
  completed: number;
  percentage: number;
};

export function calculateUnitProgress(
  allInteractionIds: string[],
  completedInteractionIds: string[]
): UnitProgress {
  const total = allInteractionIds.length;
  const completedSet = new Set(completedInteractionIds);
  const completed = allInteractionIds.filter(id => completedSet.has(id)).length;
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;
  
  return {
    total,
    completed,
    percentage
  };
}

export type StarRating = 'bronze' | 'silver' | 'gold' | null;

export type UnitCompletionResult = {
  stars: StarRating;
  accuracy: number;
  isNewRecord: boolean;
};

export function calculateStarRating(accuracyPercentage: number): StarRating {
  if (accuracyPercentage >= 95) return 'gold';
  if (accuracyPercentage >= 80) return 'silver';
  if (accuracyPercentage >= 60) return 'bronze';
  return null;
}

export async function completeUnitWithStars(params: {
  userId: string;
  courseId: string;
  unitId: string;
  totalExercises: number;
  correctExercises: number;
  supabaseClient: any;
}): Promise<UnitCompletionResult> {
  const { userId, courseId, unitId, totalExercises, correctExercises, supabaseClient } = params;
  
  const { data, error } = await supabaseClient
    .rpc('complete_unit_with_stars', {
      p_user_id: userId,
      p_course_id: courseId,
      p_unit_id: unitId,
      p_total_exercises: totalExercises,
      p_correct_exercises: correctExercises
    });

  if (error) {
    console.error('Error completing unit with stars:', error);
    
    const accuracy = totalExercises > 0 
      ? Math.round((correctExercises / totalExercises) * 100) 
      : 0;
    return {
      stars: calculateStarRating(accuracy),
      accuracy,
      isNewRecord: false
    };
  }

  const result = data?.[0];
  return {
    stars: result?.unit_stars || null,
    accuracy: result?.accuracy_percentage || 0,
    isNewRecord: result?.is_new_record || false
  };
}
