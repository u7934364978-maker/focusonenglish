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

/**
 * Alinea tokens ES a cada palabra EN: si hay el mismo número de tokens, emparejamiento 1:1.
 * Si no, reparte la frase ES en n bloques contiguos (uno por palabra EN), sin solapamientos.
 * Así cada palabra española cae en un solo tooltip y se evitan repeticiones absurdas del tipo
 * muchas palabras EN mapeadas a "(analizar)" o "directivo" (problema de la proyección por caracteres).
 */
export function alignSpanishPerEnglishWord(enWords: string[], esWords: string[]): string[] {
  const n = enWords.length;
  const m = esWords.length;
  if (n === 0) return [];
  if (m === 0) return Array(n).fill('');
  if (n === m) return [...esWords];

  const out: string[] = [];
  for (let i = 0; i < n; i++) {
    const start = Math.floor((i * m) / n);
    const end = Math.floor(((i + 1) * m) / n);
    const slice = esWords.slice(start, end);
    if (slice.length > 0) {
      out.push(slice.join(' '));
    } else {
      const fallback = esWords[Math.min(Math.max(0, start), m - 1)];
      out.push(fallback);
    }
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
