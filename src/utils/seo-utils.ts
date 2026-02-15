/**
 * SEO Utilities for internal linking and keyword management.
 */

export interface KeywordLink {
  keyword: string;
  url: string;
}

export const SEO_KEYWORD_LINKS: KeywordLink[] = [
  { keyword: "aprender ingles gratis", url: "/blog/metodos/apps-ingles-gratuitas-vs-pago" },
  { keyword: "ingles para el trabajo", url: "/blog/trabajo" },
  { keyword: "ingles para viajar", url: "/blog/viajes" },
  { keyword: "ingles desde cero", url: "/blog/metodos/ingles-a1" },
  { keyword: "ejercicios de ingles", url: "/blog/gramatica/gramatica-ingles-b1-guia" },
  { keyword: "gramatica inglesa", url: "/blog/gramatica/gramatica-ingles-b1-guia" },
  { keyword: "vocabulario ingles", url: "/blog/trabajo/vocabulario-b1-ingles-trabajo" },
  { keyword: "entrevista de trabajo", url: "/blog/trabajo/entrevista-trabajo-exito" },
];

/**
 * Suggests internal links based on keywords present in the content.
 */
export function suggestInternalLinks(content: string): KeywordLink[] {
  const suggested: KeywordLink[] = [];
  const lowerContent = content.toLowerCase();

  SEO_KEYWORD_LINKS.forEach((item) => {
    if (lowerContent.includes(item.keyword.toLowerCase())) {
      suggested.push(item);
    }
  });

  return suggested;
}

/**
 * Optimizes titles by ensuring they include the current year and target keywords.
 */
export function optimizeSEOTitle(title: string): string {
  if (!title || typeof title !== 'string') return title || "Focus English";
  
  const currentYear = new Date().getFullYear().toString();
  let optimizedTitle = title;

  if (!optimizedTitle.includes(currentYear)) {
    if (optimizedTitle.includes("Guía ") || optimizedTitle.endsWith("Guía")) {
      optimizedTitle = optimizedTitle.replace("Guía", `Guía ${currentYear}`);
    } else if (optimizedTitle.includes("Guías")) {
      optimizedTitle = optimizedTitle.replace("Guías", `Guías ${currentYear}`);
    } else {
      optimizedTitle = `${optimizedTitle} (${currentYear})`;
    }
  }

  return optimizedTitle;
}
