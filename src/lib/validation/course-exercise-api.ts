import { z } from 'zod';
import {
  courseExerciseSchema,
  parseCourseExercise,
} from './course-exercise-schema';

const CEFR = new Set(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

/**
 * Normaliza payloads de IA o legacy para el envelope `courseExerciseSchema`
 * (topicName, level CEFR, content objeto, id/type mínimos).
 */
export function sanitizeForCourseExerciseEnvelope(
  raw: unknown,
  defaults?: { level?: string; topic?: string },
): Record<string, unknown> {
  if (!raw || typeof raw !== 'object') {
    const topic = defaults?.topic ?? 'General';
    return {
      id: `sanitized-${Date.now()}`,
      type: 'multiple-choice',
      level: defaults?.level && CEFR.has(defaults.level) ? defaults.level : 'A1',
      topic,
      topicName: topic,
      content: {},
    };
  }

  const ex = { ...(raw as Record<string, unknown>) };
  const topic = String(ex.topic ?? defaults?.topic ?? 'General').trim() || 'General';
  ex.topic = topic;
  ex.topicName = String(ex.topicName ?? topic).trim() || topic;

  const lv = String(ex.level ?? defaults?.level ?? 'A1');
  const fallbackLevel =
    defaults?.level && CEFR.has(defaults.level) ? defaults.level : 'A1';
  ex.level = CEFR.has(lv) ? lv : fallbackLevel;

  if (ex.content == null || typeof ex.content !== 'object' || Array.isArray(ex.content)) {
    ex.content = {};
  }

  if (ex.id === undefined || ex.id === null || String(ex.id).trim() === '') {
    ex.id = `gen-${Date.now()}`;
  }
  if (ex.type === undefined || ex.type === null || String(ex.type).trim() === '') {
    ex.type = 'multiple-choice';
  }

  return ex;
}

function zodIssuesToStrings(err: z.ZodError): string[] {
  return err.issues.map((i) => `${i.path.join('.') || '(root)'}: ${i.message}`);
}

export type ExerciseApiValidationError = {
  index?: number;
  id?: string;
  issues: string[];
};

/** Un ejercicio listo para JSON + incidencias Zod (si las hay tras sanitizar). */
export function validateExercisePayloadForApi(
  raw: unknown,
  defaults?: { level?: string; topic?: string },
): { value: z.infer<typeof courseExerciseSchema>; issues: string[] } {
  const s = sanitizeForCourseExerciseEnvelope(raw, defaults);
  const r = parseCourseExercise(s);
  if (r.success) {
    return { value: r.data, issues: [] };
  }
  return {
    value: s as z.infer<typeof courseExerciseSchema>,
    issues: zodIssuesToStrings(r.error),
  };
}

export function validateExerciseListForApi(
  list: unknown[],
  defaults?: { level?: string; topic?: string },
): {
  exercises: z.infer<typeof courseExerciseSchema>[];
  validation: { ok: boolean; errors: ExerciseApiValidationError[] };
} {
  const errors: ExerciseApiValidationError[] = [];
  const exercises = list.map((raw, index) => {
    const { value, issues } = validateExercisePayloadForApi(raw, defaults);
    if (issues.length > 0) {
      errors.push({
        index,
        id: typeof (raw as { id?: unknown })?.id === 'string' ? (raw as { id: string }).id : String(value.id),
        issues,
      });
    }
    return value;
  });
  return { exercises, validation: { ok: errors.length === 0, errors } };
}
