import { C1_UNIT1_QUESTION_ES } from './c1-unit1-question-es';
import { C1_UNIT2_QUESTION_ES } from './c1-unit2-question-es';
import { C1_UNIT3_QUESTION_ES } from './c1-unit3-question-es';
import { C1_UNIT4_QUESTION_ES } from './c1-unit4-question-es';
import { C1_UNIT5_QUESTION_ES } from './c1-unit5-question-es';
import { C1_UNIT6_QUESTION_ES } from './c1-unit6-question-es';
import { C1_UNIT7_QUESTION_ES } from './c1-unit7-question-es';
import { C1_UNIT8_QUESTION_ES } from './c1-unit8-question-es';
import { C1_UNIT9_QUESTION_ES } from './c1-unit9-question-es';

function c1QuestionEsMapForExercise(exerciseId: string): Record<string, string> | null {
  if (exerciseId.startsWith('c1-u1-')) return C1_UNIT1_QUESTION_ES;
  if (exerciseId.startsWith('c1-u2-')) return C1_UNIT2_QUESTION_ES;
  if (exerciseId.startsWith('c1-u3-')) return C1_UNIT3_QUESTION_ES;
  if (exerciseId.startsWith('c1-u4-')) return C1_UNIT4_QUESTION_ES;
  if (exerciseId.startsWith('c1-u5-')) return C1_UNIT5_QUESTION_ES;
  if (exerciseId.startsWith('c1-u6-')) return C1_UNIT6_QUESTION_ES;
  if (exerciseId.startsWith('c1-u7-')) return C1_UNIT7_QUESTION_ES;
  if (exerciseId.startsWith('c1-u8-')) return C1_UNIT8_QUESTION_ES;
  if (exerciseId.startsWith('c1-u9-')) return C1_UNIT9_QUESTION_ES;
  return null;
}

/** Reading/listening ya llevan [[Text:|Texto:]], roles, etc.; no envolver otra capa [[en|es]]. */
/**
 * Evita `|` y `]]` dentro de un segmento de par [[...|...]] (TranslatedText usa | como separador).
 */
function escapeTooltipSegment(s: string): string {
  return s.replace(/\|/g, '·').replace(/\]\]/g, '⟩⟩');
}

/**
 * Trocea por espacios (incluye saltos de línea).
 */
function tokenizeBilingualLine(s: string): string[] {
  return s.trim().split(/\s+/).filter(Boolean);
}

/**
 * Asigna a cada token inglés un token español por posición proporcional cuando
 * los recuentos no coinciden (las traducciones no son 1:1 palabra a palabra).
 */
function alignSpanishTokensToEnglish(enWords: string[], esWords: string[]): string[] {
  const n = enWords.length;
  const m = esWords.length;
  if (n === 0) return [];
  if (m === 0) return Array(n).fill('');
  if (n === 1) return [esWords.join(' ')];
  const out: string[] = [];
  const denom = Math.max(n - 1, 1);
  for (let i = 0; i < n; i++) {
    const j = Math.round((i * (m - 1)) / denom);
    out.push(esWords[j]);
  }
  return out;
}

/**
 * Convierte un par bloque [[pregunta EN|traducción ES]] en marcas [[palabra|traducción]] por token,
 * para que TranslatedText muestre un tooltip por palabra (mejor lectura que un solo subrayado).
 * Si el enunciado ya contiene [[...]], se mantiene un único par para no romper el anidado.
 */
export function expandC1BlockToWordPairMarkup(questionEn: string, questionEs: string): string {
  const en = questionEn.trim();
  const es = questionEs.trim();
  if (!en) return questionEn;
  if (!es) return questionEn;
  if (en.includes('[[')) {
    return `[[${questionEn}|${questionEs}]]`;
  }

  const enWords = tokenizeBilingualLine(en);
  const esWords = tokenizeBilingualLine(es);
  if (enWords.length === 0) return questionEn;

  const esAligned = alignSpanishTokensToEnglish(enWords, esWords);
  const pairs = enWords.map((w, i) => {
    const t = esAligned[i] ?? '';
    return `[[${escapeTooltipSegment(w)}|${escapeTooltipSegment(t)}]]`;
  });
  return pairs.join(' ');
}

export function shouldSkipC1BilingualQuestionWrap(questionEn: string): boolean {
  return (
    questionEn.includes('[[Text:|Texto:]]') ||
    questionEn.includes('[[Speaker:|') ||
    questionEn.includes('[[Lecturer:|') ||
    questionEn.includes('[[Interviewer:|') ||
    questionEn.includes('[[Coach:|') ||
    questionEn.includes('[[Podcast host:|') ||
    questionEn.includes('[[Therapist:|') ||
    questionEn.includes('[[Debate:|') ||
    questionEn.includes('[[Seminar leader:|') ||
    questionEn.includes('[[Radio:|') ||
    questionEn.includes('[[Workshop:|') ||
    questionEn.includes('[[Lecture:|') ||
    questionEn.includes('[[Clip:|') ||
    questionEn.includes('[[Interview:|') ||
    questionEn.includes('[[Panel:|') ||
    questionEn.includes('[[Talk:|') ||
    questionEn.includes('[[Discussion:|') ||
    questionEn.includes('[[Summary:|')
  );
}

export function applyC1QuestionBilingual(exerciseId: string, questionEn: string): string {
  const map = c1QuestionEsMapForExercise(exerciseId);
  if (!map) return questionEn;
  const es = map[exerciseId];
  if (!es) return questionEn;
  if (shouldSkipC1BilingualQuestionWrap(questionEn)) return questionEn;
  return expandC1BlockToWordPairMarkup(questionEn, es);
}
