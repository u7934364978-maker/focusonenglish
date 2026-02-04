/**
 * SEO Utilities for internal linking and keyword management.
 */

export interface KeywordLink {
  keyword: string;
  url: string;
}

export const SEO_KEYWORD_LINKS: KeywordLink[] = [
  { keyword: "aprender ingles gratis", url: "/blog/metodos/como-aprender-ingles-gratis" },
  { keyword: "ingles para el trabajo", url: "/blog/trabajo" },
  { keyword: "ingles para viajar", url: "/blog/viajes" },
  { keyword: "ingles desde cero", url: "/blog/metodos/ingles-desde-cero-guia" },
  { keyword: "ejercicios de ingles", url: "/blog/metodos/ejercicios-ingles-interactivos" },
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
  const currentYear = new Date().getFullYear().toString();
  let optimizedTitle = title;

  if (!optimizedTitle.includes(currentYear)) {
    if (optimizedTitle.includes("Guía")) {
      optimizedTitle = optimizedTitle.replace("Guía", `Guía ${currentYear}`);
    } else {
      optimizedTitle = `${optimizedTitle} (${currentYear})`;
    }
  }

  return optimizedTitle;
}
