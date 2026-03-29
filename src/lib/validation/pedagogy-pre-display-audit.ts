import type { z } from 'zod';
import type { courseExerciseSchema } from '@/lib/validation/course-exercise-schema';
import {
  assessPedagogyQualityForExercise,
  type PedagogyQualityIssue,
} from '@/lib/validation/pedagogy-quality-rules';

type CourseEx = z.infer<typeof courseExerciseSchema>;

export type PedagogyDisplayGateRejected = {
  id: string;
  issues: PedagogyQualityIssue[];
};

export type PedagogyDisplayGateSummary = {
  rejectedCount: number;
  rejected: Array<{ id: string; ruleIds: string[] }>;
};

/**
 * Parte la lista de ejercicios listos para API en aceptados / rechazados según reglas PQ_*.
 * Por defecto solo bloquea `severity: error` (incoherencia T/F vs MC, explicación vacía, etc.).
 *
 * `PEDAGOGY_DISPLAY_GATE_BLOCK_WARNINGS=1` también excluye ítems que solo tengan `warn`.
 */
export function partitionExercisesByPedagogyGate(
  exercises: CourseEx[],
  level: string,
  options?: { treatWarningsAsBlocking?: boolean },
): {
  accepted: CourseEx[];
  rejected: PedagogyDisplayGateRejected[];
} {
  const blockWarnings =
    options?.treatWarningsAsBlocking ??
    process.env.PEDAGOGY_DISPLAY_GATE_BLOCK_WARNINGS === '1';

  const accepted: CourseEx[] = [];
  const rejected: PedagogyDisplayGateRejected[] = [];

  for (const ex of exercises) {
    const issues = assessPedagogyQualityForExercise(ex, level);
    const hasError = issues.some((i) => i.severity === 'error');
    const hasWarn = issues.some((i) => i.severity === 'warn');
    if (hasError || (blockWarnings && hasWarn)) {
      rejected.push({ id: String(ex.id ?? 'unknown'), issues });
    } else {
      accepted.push(ex);
    }
  }

  return { accepted, rejected };
}

export function summarizePedagogyGateRejected(
  rejected: PedagogyDisplayGateRejected[],
): PedagogyDisplayGateSummary {
  return {
    rejectedCount: rejected.length,
    rejected: rejected.map((r) => ({
      id: r.id,
      ruleIds: [...new Set(r.issues.map((i) => i.ruleId))],
    })),
  };
}
