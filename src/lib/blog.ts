import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src/content/blog");

// Cache for blog articles to improve performance during build
let articlesCache: BlogPost[] | null = null;

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  description?: string;
  category: string;
  readTime: string;
  image?: string;
  alt?: string;
  keywords?: string[];
  faqs?: { question: string, answer: string }[];
  featured?: boolean;
  canonical?: string;
  content: string;
}

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  if (!fs.existsSync(dirPath)) return [];
  
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    if (fs.statSync(filePath).isDirectory()) {
      arrayOfFiles = getAllFiles(filePath, arrayOfFiles);
    } else {
      if (file.endsWith(".md") || file.endsWith(".mdx")) {
        arrayOfFiles.push(filePath);
      }
    }
  });

  return arrayOfFiles;
}

export function normalizeCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export function getBlogArticles(): BlogPost[] {
  if (articlesCache) {
    return articlesCache;
  }

  const allFiles = getAllFiles(BLOG_DIR);
  
  const articles = allFiles.map((filePath) => {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(fileContent);
    const slug = path.basename(filePath).replace(/\.mdx?$/, "");

    if (!data || typeof data !== 'object') {
      console.error(`[BlogLib] FAILED to parse frontmatter for: ${filePath}`);
      return null;
    }

    return {
      slug,
      title: data.title || "Untitled",
      date: data.date || new Date().toISOString(),
      author: data.author || "Focus English",
      excerpt: data.excerpt || data.description || "",
      description: data.description || data.excerpt,
      category: normalizeCategory(data.category || "General"),
      readTime: data.readTime || "5 min",
      image: data.image,
      alt: data.alt,
      keywords: data.keywords || [],
      faqs: data.faqs || [],
      featured: data.featured || false,
      canonical: data.canonical,
      content,
    } as BlogPost;
  }).filter((a): a is BlogPost => a !== null);

  // Sort by date descending
  articlesCache = articles.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return articlesCache;
}

export function getArticleBySlug(slug: string, category?: string): BlogPost | null {
  const articles = getBlogArticles();
  if (category) {
    const normalizedCategory = normalizeCategory(category);
    return articles.find(a => a.slug === slug && normalizeCategory(a.category) === normalizedCategory) || null;
  }
  return articles.find(a => a.slug === slug) || null;
}

export function getArticlesByCategory(category: string): BlogPost[] {
  const normalizedSearch = normalizeCategory(category);
  return getBlogArticles().filter(article => normalizeCategory(article.category) === normalizedSearch);
}

export function getRelatedArticles(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  const allArticles = getBlogArticles();
  return allArticles
    .filter(article => article.slug !== currentSlug && article.category === category)
    .slice(0, limit);
}

export function getRelatedByKeywords(currentSlug: string, keywords: string[], limit: number = 3): BlogPost[] {
  if (!keywords || keywords.length === 0) return [];
  
  const allArticles = getBlogArticles();
  const normalizedKeywords = keywords.map(k => slugify(k));
  
  return allArticles
    .filter(article => {
      if (article.slug === currentSlug) return false;
      return article.keywords?.some(k => normalizedKeywords.includes(slugify(k)));
    })
    .slice(0, limit);
}

export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // normalize accents
    .replace(/[\u0300-\u036f]/g, '') // remove accents
    .replace(/\s+/g, '-') // replace spaces with -
    .replace(/[^\w-]+/g, '') // remove all non-word chars
    .replace(/--+/g, '-') // replace multiple - with single -
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text
}

export function getArticlesByKeyword(keyword: string): BlogPost[] {
  const allArticles = getBlogArticles();
  return allArticles.filter(article => 
    article.keywords?.some(k => slugify(k) === slugify(keyword))
  );
}

export interface HubContent {
  slug: string;
  title: string;
  description?: string;
  content: string;
}

const HUBS_DIR = path.join(process.cwd(), "src/content/hubs");

export function getHubContent(keyword: string): HubContent | null {
  // 1. Try direct match with the string provided (could be already a slug)
  let filePath = path.join(HUBS_DIR, `${keyword}.md`);
  if (fs.existsSync(filePath)) {
    return parseHubFile(filePath, keyword);
  }

  // 2. Try slugified version
  const slug = slugify(keyword);
  filePath = path.join(HUBS_DIR, `${slug}.md`);
  if (fs.existsSync(filePath)) {
    return parseHubFile(filePath, slug);
  }

  return null;
}

function parseHubFile(filePath: string, slug: string): HubContent {
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(fileContent);

  return {
    slug,
    title: data.title || slug.replace(/-/g, " "),
    description: data.description,
    content,
  };
}

export function getAllKeywords(): string[] {
  const allArticles = getBlogArticles();
  const keywords = new Set<string>();
  
  // From articles
  allArticles.forEach(article => {
    article.keywords?.forEach(k => keywords.add(k.toLowerCase()));
  });

  // From hub files
  if (fs.existsSync(HUBS_DIR)) {
    const hubFiles = fs.readdirSync(HUBS_DIR);
    hubFiles.forEach(file => {
      if (file.endsWith(".md")) {
        // Use filename as keyword (replacing dashes with spaces for better readability in breadcrumbs if needed)
        const hubName = file.replace(".md", "").replace(/-/g, " ");
        keywords.add(hubName);
      }
    });
  }

  return Array.from(keywords);
}
