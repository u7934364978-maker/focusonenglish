import type { z } from 'zod';
import type { courseExerciseSchema } from '@/lib/validation/course-exercise-schema';
import type { IndexedInteraction } from '@/lib/course-engine/global-content-provider';
import { stripBilingualMarkup } from '@/lib/premium-utils';

type CourseEx = z.infer<typeof courseExerciseSchema>;

function stripTrailingTrueFalseNoMarker(stem: string): string {
  const s = stem.trim();
  // Quita marcadores tipo "no" suelto al final (patrón típico cuando el modelo añade
  // un "no" para indicar falsedad en vez de construir la frase correcta).
  // Mantiene "no" que venga dentro del sentido (p. ej. doesn't -> no en el markup).
  const withoutBilingual = s.replace(/\s*\[\[no\|no\]\]\s*$/i, '').trim();
  if (withoutBilingual !== s) return withoutBilingual;

  // Quita " no" o "no" final si queda como token aislado.
  const withoutPlain = s.replace(/(\s*[.!?])?\s+no\s*$/i, '$1').replace(/\s+$/,'').trim();
  return withoutPlain;
}

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
      stimulus_en: stripTrailingTrueFalseNoMarker(stem),
      correct_answer: truth,
      mastery_tag: String(ex.topic ?? 'ai-generated'),
      concept_tags: [String(ex.topic ?? 'general')],
      feedback_correct_es: explanation,
    } as IndexedInteraction;
  }

  if (t === 'fill-blank') {
    const opts = Array.isArray(optionsRaw) ? (optionsRaw as unknown[]).map(String) : [];
    if (opts.length < 2) return null;
    const ca = q0.correctAnswer;
    let correctStr = '';
    if (typeof ca === 'string') correctStr = ca.trim();
    else if (typeof ca === 'number' && opts[ca] !== undefined) correctStr = String(opts[ca]).trim();
    if (!correctStr) return null;
    const hasGap = /_{2,}/.test(stem) || /\b_+\b/.test(stem);
    if (!hasGap) return null;
    return {
      interaction_id: id,
      type: 'fill_blank',
      level: 'A1',
      complexity: 2,
      prompt_es: instructions || 'Completa el hueco.',
      stimulus_en: stem,
      options: opts.map((text, i) => ({ id: String(i), text })),
      correct_answer: correctStr,
      mastery_tag: String(ex.topic ?? 'ai-generated'),
      concept_tags: [String(ex.topic ?? 'general')],
      feedback_correct_es: explanation,
    } as IndexedInteraction;
  }

  if (t === 'translation') {
    const opts = Array.isArray(optionsRaw) ? (optionsRaw as unknown[]).map(String) : [];
    const stemPlain = stripBilingualMarkup(stem);
    const hasGap = /_{2,}/.test(stem) || /_{2,}/.test(stemPlain);
    const looksLikeChoice =
      /choose the correct|elige (la )?(palabra|verbo|artículo)/i.test(stemPlain) ||
      /choose the correct|elige (la )?(palabra|verbo|artículo)/i.test(stem);
    if (opts.length >= 2 && (hasGap || looksLikeChoice)) {
      const coerced: CourseEx = {
        ...ex,
        type: hasGap ? 'fill-blank' : 'multiple-choice',
      } as CourseEx;
      return mapCourseExerciseToIndexedInteraction(coerced, index);
    }

    const ca = q0.correctAnswer;
    const correctStr = typeof ca === 'string' ? ca.trim() : String(ca ?? '').trim();
    if (correctStr.length < 1) return null;
    return {
      interaction_id: id,
      type: 'short_writing',
      level: 'A1',
      complexity: 2,
      prompt_es: instructions || 'Traduce al inglés.',
      stimulus_es: stem,
      correct_answer: correctStr,
      mastery_tag: String(ex.topic ?? 'ai-generated'),
      concept_tags: [String(ex.topic ?? 'general')],
      explanation,
    } as IndexedInteraction;
  }

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
