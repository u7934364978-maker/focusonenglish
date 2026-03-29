import { C1_UNIT1_QUESTION_ES } from './c1-unit1-question-es';
import { C1_UNIT2_QUESTION_ES } from './c1-unit2-question-es';
import { C1_UNIT3_QUESTION_ES } from './c1-unit3-question-es';
import { C1_UNIT4_QUESTION_ES } from './c1-unit4-question-es';
import { C1_UNIT5_QUESTION_ES } from './c1-unit5-question-es';
import { C1_UNIT6_QUESTION_ES } from './c1-unit6-question-es';
import { C1_UNIT7_QUESTION_ES } from './c1-unit7-question-es';
import { C1_UNIT8_QUESTION_ES } from './c1-unit8-question-es';
import { C1_UNIT9_QUESTION_ES } from './c1-unit9-question-es';
import { C1_UNIT10_QUESTION_ES } from './c1-unit10-question-es';

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
  if (exerciseId.startsWith('c1-u10-')) return C1_UNIT10_QUESTION_ES;
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

/** Posición [start,end) de cada token en `words.join(' ')`. */
function charSpansForWords(words: string[]): { start: number; end: number }[] {
  const n = words.length;
  if (n === 0) return [];
  const spans: { start: number; end: number }[] = [];
  let p = 0;
  for (let i = 0; i < n; i++) {
    const w = words[i];
    spans.push({ start: p, end: p + w.length });
    p += w.length + (i < n - 1 ? 1 : 0);
  }
  return spans;
}

/**
 * Alinea tokens ES a cada palabra EN: si hay el mismo número de tokens, emparejamiento 1:1.
 * Si no, proyecta el intervalo de caracteres de cada palabra EN sobre la frase ES (misma longitud relativa)
 * y asigna las palabras ES cuyo intervalo solapa — mejor que repartir por índice de palabra.
 */
function alignSpanishPerEnglishWord(enWords: string[], esWords: string[]): string[] {
  const n = enWords.length;
  const m = esWords.length;
  if (n === 0) return [];
  if (m === 0) return Array(n).fill('');
  if (n === m) return [...esWords];
  const enJoined = enWords.join(' ');
  const esJoined = esWords.join(' ');
  const lenEn = enJoined.length;
  const lenEs = esJoined.length;
  const enSpans = charSpansForWords(enWords);
  const esSpans = charSpansForWords(esWords);
  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    const { start: es, end: ee } = enSpans[i];
    if (lenEn === 0) {
      out.push('');
      continue;
    }
    const rs = Math.floor((es / lenEn) * lenEs);
    const re = Math.min(lenEs, Math.ceil((ee / lenEn) * lenEs));
    const hits: string[] = [];
    for (let j = 0; j < m; j++) {
      const { start: sj, end: ej } = esSpans[j];
      if (ej > rs && sj < re) hits.push(esWords[j]);
    }
    if (hits.length > 0) {
      out.push(hits.join(' '));
      continue;
    }
    const mid = (rs + re) / 2;
    let best = esWords[0];
    let bestD = Infinity;
    for (let j = 0; j < m; j++) {
      const c = (esSpans[j].start + esSpans[j].end) / 2;
      const d = Math.abs(c - mid);
      if (d < bestD) {
        bestD = d;
        best = esWords[j];
      }
    }
    out.push(best);
  }
  return out;
}

/**
 * Convierte el par (enunciado EN, traducción ES) en marcas [[palabra|traducción]] por token EN.
 * Si el enunciado ya contiene [[...]], un único par envuelve todo para no romper anidado.
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

  const esAligned = alignSpanishPerEnglishWord(enWords, esWords);
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
