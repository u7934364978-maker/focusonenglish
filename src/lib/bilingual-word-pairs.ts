/**
 * Convierte pares [[frase EN|frase ES]] en marcas [[token EN|token ES]] alineadas por palabra.
 * (Misma lógica que el flujo C1; reutilizable en TranslatedText para recepcionista.)
 */

/**
 * Evita `|` y `]]` dentro de un segmento de par [[...|...]] (TranslatedText usa | como separador).
 */
export function escapeTooltipSegment(s: string): string {
  return s.replace(/\|/g, '·').replace(/\]\]/g, '⟩⟩');
}

/** Trocea por espacios (incluye saltos de línea). */
export function tokenizeBilingualLine(s: string): string[] {
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
 * y asigna las palabras ES cuyo intervalo solapa.
 */
export function alignSpanishPerEnglishWord(enWords: string[], esWords: string[]): string[] {
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
 * Convierte el par (texto EN, traducción ES) en marcas [[palabra|traducción]] por token EN.
 * Si el texto EN ya contiene [[...]], un único par envuelve todo para no romper anidado.
 */
export function expandBlockToWordPairMarkup(questionEn: string, questionEs: string): string {
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

/**
 * Sustituye cada [[EN|ES]] por la versión expandida palabra a palabra (sin tocar [[solo]] ni anidados).
 */
export function expandExplicitWordPairMarkupInString(text: string): string {
  const explicitRegex = /\[\[(.*?)(?:\|(.*?))?\]\]/g;
  return text.replace(explicitRegex, (full, w: string, tr: string | undefined) => {
    const en = String(w);
    if (en.includes('[[')) return full;
    const es = tr !== undefined && tr !== null ? String(tr) : '';
    if (!es.trim()) return full;
    const expanded = expandBlockToWordPairMarkup(en, es);
    if (expanded === en) return full;
    return expanded;
  });
}
