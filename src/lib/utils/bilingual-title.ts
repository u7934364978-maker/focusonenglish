/**
 * Títulos con formato `[[inglés|español]]` (TranslatedText): búsqueda y metadatos accesibles.
 */

export function bilingualTitleForSearch(title: string): string {
  const t = title.trim();
  const m = t.match(/^\[\[([\s\S]+?)\|([\s\S]+?)\]\]$/);
  return m ? `${m[1]} ${m[2]}` : t;
}

export function bilingualTitleEnglishPrimary(title: string): string {
  const t = title.trim();
  const m = t.match(/^\[\[([\s\S]+?)\|([\s\S]+?)\]\]$/);
  return m ? m[1].trim() : t;
}

/** Texto solo en inglés para TTS: quita capas de [[en|es]] de dentro hacia fuera. */
export function stripBilingualMarkersForSpeech(text: string): string {
  let s = text;
  for (let i = 0; i < 30; i++) {
    const next = s.replace(/\[\[([^\[\]]*)\|([^\[\]]*)\]\]/g, '$1');
    if (next === s) break;
    s = next;
  }
  return s;
}
