import { z } from 'zod';
import {
  courseExerciseSchema,
  parseCourseExercise,
} from './course-exercise-schema';
import {
  A1_TEMPLATE_TYPES,
  type A1TemplateType,
  a1GeneratedExerciseSchema,
} from './a1-exercise-templates';

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

const A1_TEMPLATE_SET = new Set<string>(A1_TEMPLATE_TYPES);

function isA1TemplateExerciseType(type: string): type is A1TemplateType {
  return A1_TEMPLATE_SET.has(type);
}

/**
 * Si el ítem es nivel A1 y el `type` tiene plantilla A1, valida `content` + metadatos
 * contra `a1GeneratedExerciseSchema` (subconjunto más estricto que el envelope general).
 */
export function validateA1TemplateShapeIssues(
  exercise: z.infer<typeof courseExerciseSchema>,
): string[] {
  if (exercise.level !== 'A1' || !isA1TemplateExerciseType(exercise.type)) {
    return [];
  }
  const r = a1GeneratedExerciseSchema.safeParse({
    type: exercise.type,
    topic: exercise.topic,
    topicName: exercise.topicName,
    difficulty: exercise.difficulty,
    content: exercise.content,
    transcript: exercise.transcript,
  });
  if (r.success) return [];
  return zodIssuesToStrings(r.error);
}

export type ExerciseApiValidationError = {
  index?: number;
  id?: string;
  issues: string[];
};

/** Resultado de validar una lista: envelope general vs plantilla A1 estricta (independientes). */
export type ExerciseListValidationResult = {
  /** `true` si todos los ítems pasan `courseExerciseSchema`. */
  ok: boolean;
  /** Fallos del envelope (id, level, topic, content objeto, …). */
  errors: ExerciseApiValidationError[];
  /** Plantilla A1 solo aplica si level A1 y type está en A1_TEMPLATE_TYPES; si no aplica, `ok` es true y `errors` vacío. */
  a1Template: {
    ok: boolean;
    errors: ExerciseApiValidationError[];
  };
};

/** Un ejercicio listo para JSON + incidencias separadas: envelope vs plantilla A1. */
export function validateExercisePayloadForApi(
  raw: unknown,
  defaults?: { level?: string; topic?: string },
): {
  value: z.infer<typeof courseExerciseSchema>;
  envelopeIssues: string[];
  a1TemplateIssues: string[];
} {
  const s = sanitizeForCourseExerciseEnvelope(raw, defaults);
  const r = parseCourseExercise(s);
  if (!r.success) {
    return {
      value: s as z.infer<typeof courseExerciseSchema>,
      envelopeIssues: zodIssuesToStrings(r.error),
      a1TemplateIssues: [],
    };
  }
  return {
    value: r.data,
    envelopeIssues: [],
    a1TemplateIssues: validateA1TemplateShapeIssues(r.data),
  };
}

export function validateExerciseListForApi(
  list: unknown[],
  defaults?: { level?: string; topic?: string },
): {
  exercises: z.infer<typeof courseExerciseSchema>[];
  validation: ExerciseListValidationResult;
} {
  const envelopeErrors: ExerciseApiValidationError[] = [];
  const a1Errors: ExerciseApiValidationError[] = [];
  const exercises = list.map((raw, index) => {
    const { value, envelopeIssues, a1TemplateIssues } = validateExercisePayloadForApi(raw, defaults);
    const id =
      typeof (raw as { id?: unknown })?.id === 'string' ? (raw as { id: string }).id : String(value.id);
    if (envelopeIssues.length > 0) {
      envelopeErrors.push({ index, id, issues: envelopeIssues });
    }
    if (a1TemplateIssues.length > 0) {
      a1Errors.push({ index, id, issues: a1TemplateIssues });
    }
    return value;
  });
  return {
    exercises,
    validation: {
      ok: envelopeErrors.length === 0,
      errors: envelopeErrors,
      a1Template: {
        ok: a1Errors.length === 0,
        errors: a1Errors,
      },
    },
  };
}
