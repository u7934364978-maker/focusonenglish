import type { z } from 'zod';
import type { courseExerciseSchema } from '@/lib/validation/course-exercise-schema';
import type { IndexedInteraction } from '@/lib/course-engine/global-content-provider';

type CourseEx = z.infer<typeof courseExerciseSchema>;

/**
 * Convierte ejercicios del envelope `courseExerciseSchema` a interacciones planas
 * que `PremiumSession` ya normaliza (MC, T/F, fill-blank con banco).
 */
export function mapCourseExerciseToIndexedInteraction(
  ex: CourseEx,
  index: number,
): IndexedInteraction | null {
  const id = String(ex.id || `ai-daily-${Date.now()}-${index}`);
  const content = ex.content as Record<string, unknown> | undefined;
  if (!content || typeof content !== 'object') return null;

  const questions = content.questions as Record<string, unknown>[] | undefined;
  const q0 = Array.isArray(questions) && questions[0] ? questions[0] : null;
  if (!q0) return null;

  const instructions = String(content.instructions ?? content.title ?? '').trim();
  const stem = String(q0.question ?? '').trim();
  const optionsRaw = q0.options;
  const explanation = String(q0.explanation ?? '');

  const t = String(ex.type);

  if (t === 'multiple-choice') {
    const opts = Array.isArray(optionsRaw) ? (optionsRaw as unknown[]).map(String) : [];
    if (opts.length < 2) return null;
    const ca = q0.correctAnswer;
    const idx = typeof ca === 'number' ? ca : 0;
    return {
      interaction_id: id,
      type: 'multiple_choice',
      level: 'A1',
      complexity: 2,
      prompt_es: instructions || 'Elige la opción correcta.',
      stimulus_en: stem,
      options: opts.map((text, i) => ({ id: String(i), text })),
      correct_answer: String(Math.min(Math.max(0, idx), opts.length - 1)),
      mastery_tag: String(ex.topic ?? 'ai-generated'),
      concept_tags: [String(ex.topic ?? 'general')],
      feedback_correct_es: explanation,
    } as IndexedInteraction;
  }

  if (t === 'true-false') {
    const caRaw = q0.correctAnswer;
    const truth =
      typeof caRaw === 'string'
        ? caRaw.toLowerCase() === 'true'
        : Boolean(caRaw);
    /* PremiumSession `true_false`: botones VERDADERO/FALSO y `correct_answer` booleano */
    return {
      interaction_id: id,
      type: 'true_false',
      level: 'A1',
      complexity: 1,
      prompt_es: instructions || 'Verdadero o falso.',
      stimulus_en: stem,
      correct_answer: truth,
      mastery_tag: String(ex.topic ?? 'ai-generated'),
      concept_tags: [String(ex.topic ?? 'general')],
      feedback_correct_es: explanation,
    } as IndexedInteraction;
  }

  /* fill-blank: el UI premium mezcla teclado y opciones; aquí omitimos para evitar estados inconsistentes. */

  return null;
}

export function mapExerciseListToInteractions(
  list: CourseEx[],
): IndexedInteraction[] {
  const out: IndexedInteraction[] = [];
  list.forEach((ex, i) => {
    const m = mapCourseExerciseToIndexedInteraction(ex, i);
    if (m) out.push(m);
  });
  return out;
}
