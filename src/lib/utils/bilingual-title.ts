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
