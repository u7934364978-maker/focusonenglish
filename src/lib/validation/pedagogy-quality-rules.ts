import type { z } from 'zod';
import type { courseExerciseSchema } from '@/lib/validation/course-exercise-schema';

export type PedagogyQualitySeverity = 'error' | 'warn';

export type PedagogyQualityIssue = {
  /** Identificador estable para CI / informes (p. ej. PQ_EXPL_MIN). */
  ruleId: string;
  severity: PedagogyQualitySeverity;
  message: string;
  path?: string;
};

export type PedagogyQualityExerciseReport = {
  id: string;
  issues: PedagogyQualityIssue[];
};

export type PedagogyQualityBatchResult = {
  /** true si ningún ejercicio tiene issues de severidad `error`. */
  ok: boolean;
  exercises: PedagogyQualityExerciseReport[];
};

type ExerciseLike = z.infer<typeof courseExerciseSchema>;

function norm(s: unknown): string {
  return String(s ?? '')
    .trim()
    .toLowerCase()
    .replace(/\s+/g, ' ');
}

function optionToString(o: unknown): string {
  if (typeof o === 'string') return o;
  if (o && typeof o === 'object' && 'text' in (o as object)) {
    return String((o as { text?: unknown }).text ?? '');
  }
  return String(o);
}

/**
 * Evalúa reglas pedagógicas comprobables post-schema (no sustituyen revisión humana).
 */
export function assessPedagogyQualityForExercise(
  ex: ExerciseLike | Record<string, unknown>,
  level: string,
): PedagogyQualityIssue[] {
  const issues: PedagogyQualityIssue[] = [];
  const type = String((ex as { type?: unknown }).type ?? '');
  const content = (ex as { content?: unknown }).content as Record<string, unknown> | undefined;
  const questions = (content?.questions as unknown[]) ?? [];

  const lv = level.toUpperCase();

  if (!content || typeof content !== 'object') {
    issues.push({
      ruleId: 'PQ_CONTENT_OBJECT',
      severity: 'error',
      message: 'Falta content objeto.',
      path: 'content',
    });
    return issues;
  }

  const title = String(content.title ?? '');
  const instructions = String(content.instructions ?? '');
  if (title.trim().length < 2 && instructions.trim().length < 5) {
    issues.push({
      ruleId: 'PQ_TITLE_OR_INSTRUCTIONS',
      severity: 'warn',
      message: 'title/instructions muy cortos o vacíos para el alumno.',
      path: 'content.title|instructions',
    });
  }

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i] as Record<string, unknown>;
    const path = `content.questions[${i}]`;
    const stem = String(q.question ?? q.text ?? q.prompt ?? '');
    const explanation = String(q.explanation ?? '');

    if (['multiple-choice', 'true-false', 'fill-blank', 'translation'].includes(type)) {
      if (stem.trim().length < 8) {
        issues.push({
          ruleId: 'PQ_STEM_MIN',
          severity: 'warn',
          message: `Enunciado muy corto (${stem.length} caracteres); revisar claridad.`,
          path: `${path}.question`,
        });
      }
      if (explanation.trim().length < 20) {
        issues.push({
          ruleId: 'PQ_EXPLANATION_MIN',
          severity: 'error',
          message: 'explanation debe enseñar (mín. ~20 caracteres útiles), no solo "Correcto".',
          path: `${path}.explanation`,
        });
      }
    }

    if (type === 'multiple-choice') {
      const opts = Array.isArray(q.options) ? q.options.map(optionToString) : [];
      if (opts.length < 2) {
        issues.push({
          ruleId: 'PQ_MC_OPTIONS_COUNT',
          severity: 'error',
          message: 'multiple-choice requiere al menos 2 opciones.',
          path: `${path}.options`,
        });
      } else {
        const norms = opts.map((o) => norm(o)).filter(Boolean);
        const uniq = new Set(norms);
        if (uniq.size !== norms.length) {
          issues.push({
            ruleId: 'PQ_MC_OPTIONS_DISTINCT',
            severity: 'warn',
            message: 'Opciones duplicadas o demasiado similares tras normalizar.',
            path: `${path}.options`,
          });
        }
      }
      const ca = q.correctAnswer;
      if (typeof ca === 'number') {
        const n = opts.length;
        if (n > 0 && (ca < 0 || ca >= n || !Number.isInteger(ca))) {
          issues.push({
            ruleId: 'PQ_MC_INDEX_RANGE',
            severity: 'error',
            message: `correctAnswer índice ${ca} fuera de rango [0, ${n - 1}].`,
            path: `${path}.correctAnswer`,
          });
        }
      }

      const parenHint = stem.match(/\(([A-Za-z][A-Za-z\s'-]{0,39})\)/);
      if (parenHint && opts.length > 0) {
        const hintNorm = norm(parenHint[1]);
        if (hintNorm.length >= 2 && hintNorm.split(/\s+/).length <= 3) {
          const optNorms = opts.map((o) => norm(o));
          const spoils = optNorms.some((o) => o === hintNorm || o.includes(hintNorm) || hintNorm.includes(o));
          if (spoils) {
            issues.push({
              ruleId: 'PQ_MC_SPOILER_PAREN',
              severity: 'warn',
              message:
                'Pista entre paréntesis en el enunciado coincide con una opción: anula la dificultad; quitar el spoiler o reformular.',
              path: `${path}.question`,
            });
          }
        }
      }
    }

    if (type === 'true-false') {
      const opts = Array.isArray(q.options) ? q.options.map(optionToString) : [];
      const tfOk =
        opts.length === 2 &&
        norm(opts[0]) === 'true' &&
        norm(opts[1]) === 'false';
      if (!tfOk) {
        issues.push({
          ruleId: 'PQ_TF_OPTIONS',
          severity: 'warn',
          message: 'true-false: options deben ser exactamente True y False (orden libre si el índice cuadra).',
          path: `${path}.options`,
        });
      }

      const blobTf = `${instructions} ${title} ${stem}`.toLowerCase();
      if (
        /choose the correct (verb|word|article)/i.test(blobTf) ||
        /elige (la palabra correcta|el verbo correcto|el artículo correcto)/i.test(blobTf)
      ) {
        issues.push({
          ruleId: 'PQ_TF_VS_MC_INSTRUCTION',
          severity: 'error',
          message:
            'Ítem true-false con instrucción de elección léxica/gramatical: usar multiple-choice o fill-blank, no V/F.',
          path: `${path}.question`,
        });
      }
      if (/_\s{0,2}_/.test(stem) || /_{3,}/.test(stem)) {
        issues.push({
          ruleId: 'PQ_TF_FILLBLANK_STEM',
          severity: 'error',
          message:
            'Ítem true-false con hueco tipo rellenar (___): el formato no encaja con verdadero/falso.',
          path: `${path}.question`,
        });
      }
    }

    if (type === 'fill-blank' && typeof q.correctAnswer === 'string') {
      const ca = String(q.correctAnswer).trim();
      if (ca.length < 1) {
        issues.push({
          ruleId: 'PQ_FILL_CORRECT_EMPTY',
          severity: 'error',
          message: 'fill-blank: correctAnswer vacío.',
          path: `${path}.correctAnswer`,
        });
      }
    }
  }

  const isReadingOrListening =
    type === 'reading' ||
    type === 'reading-comprehension' ||
    type === 'listening' ||
    type === 'listening-comprehension';
  if (isReadingOrListening && (lv === 'A1' || lv === 'A2')) {
    const transcript = String((ex as { transcript?: unknown }).transcript ?? content.transcript ?? '');
    if (transcript.trim().length < 40) {
      issues.push({
        ruleId: 'PQ_A1_READING_TRANSCRIPT_SHORT',
        severity: 'warn',
        message: 'A1/A2: texto/transcript muy corto para comprensión significativa.',
        path: 'transcript',
      });
    }
  }

  return issues;
}

export function validateExerciseListPedagogyQuality(
  exercises: ExerciseLike[],
  level: string,
): PedagogyQualityBatchResult {
  const reports: PedagogyQualityExerciseReport[] = exercises.map((ex) => ({
    id: String(ex.id ?? 'unknown'),
    issues: assessPedagogyQualityForExercise(ex, level),
  }));

  const hasError = reports.some((r) => r.issues.some((i) => i.severity === 'error'));

  return {
    ok: !hasError,
    exercises: reports,
  };
}

/** Lista de ruleIds para documentación / PR checklist. */
export const PEDAGOGY_QUALITY_RULE_IDS = [
  'PQ_CONTENT_OBJECT',
  'PQ_TITLE_OR_INSTRUCTIONS',
  'PQ_STEM_MIN',
  'PQ_EXPLANATION_MIN',
  'PQ_MC_OPTIONS_COUNT',
  'PQ_MC_OPTIONS_DISTINCT',
  'PQ_MC_INDEX_RANGE',
  'PQ_MC_SPOILER_PAREN',
  'PQ_TF_OPTIONS',
  'PQ_TF_VS_MC_INSTRUCTION',
  'PQ_TF_FILLBLANK_STEM',
  'PQ_FILL_CORRECT_EMPTY',
  'PQ_A1_READING_TRANSCRIPT_SHORT',
] as const;
