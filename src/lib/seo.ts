import fs from "fs";
import path from "path";
import matter from "gray-matter";

const SEO_DIR = path.join(process.cwd(), "src/content/seo-pages");

export interface SEOPage {
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  faqs?: { question: string; answer: string }[];
  content: string;
  canonical?: string;
  related_routes?: string[];
}

export function getSEOPageBySlug(slug: string, isRoute: boolean = false): SEOPage | null {
  const dir = isRoute ? path.join(SEO_DIR, "rutas") : SEO_DIR;
  const filePath = path.join(dir, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || "Focus English",
    description: data.description || "",
    keywords: data.keywords || [],
    faqs: data.faqs || [],
    canonical: data.canonical,
    related_routes: data.related_routes || [],
    content,
  } as SEOPage;
}

export function getAllSEORoutes(): string[] {
  const rutasDir = path.join(SEO_DIR, "rutas");
  if (!fs.existsSync(rutasDir)) return [];
  
  return fs.readdirSync(rutasDir)
    .filter(file => file.endsWith(".md"))
    .map(file => file.replace(/\.md$/, ""));
}
