import type { MetadataRoute } from "next";
import fs from "node:fs";
import path from "node:path";

const baseUrl = "https://focus-on-english.com";
const CONTENT_DIR = "content";

function getSlugsFromDir(relativeDir: string) {
  const dir = path.join(process.cwd(), relativeDir);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((f) => f.replace(/\.mdx?$/, ""));
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const urls: MetadataRoute.Sitemap = [
    // Homepage - Máxima prioridad
    {
      url: `${baseUrl}/`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    
    // Páginas principales de conversión
    {
      url: `${baseUrl}/cursos-especializados`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/certificaciones`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/planes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    // Blog - Contenido SEO
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    
    // Herramientas de conversión
    {
      url: `${baseUrl}/diagnostico`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    
    // Páginas de autenticación (prioridad baja, pero indexables)
    {
      url: `${baseUrl}/signin`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/signup`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.3,
    },
  ];

  // Add blog posts - Alta prioridad para SEO
  const blogSlugs = getSlugsFromDir(`${CONTENT_DIR}/blog`);
  urls.push(
    ...blogSlugs.map((slug) => ({
      url: `${baseUrl}/blog/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7, // Aumentado de 0.6 a 0.7 (blog es importante para SEO)
    }))
  );

  // Add course pages dynamically - Páginas de conversión importantes
  const goals = ['trabajo', 'viajes', 'examenes'];
  const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  
  goals.forEach(goal => {
    levels.forEach(level => {
      const priority = (goal === 'examenes' && level === 'b2') ? 0.8 : 0.6; // B2 First más demandado
      urls.push({
        url: `${baseUrl}/cursos/${goal}/${level}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
      });
    });
  });

  // Páginas específicas de exámenes (alta demanda SEO)
  const examSpecificPages = [
    { slug: 'b2', priority: 0.85 }, // Cambridge B2 First - muy demandado
    { slug: 'c1', priority: 0.75 }, // Cambridge C1 Advanced
  ];
  
  examSpecificPages.forEach(({ slug, priority }) => {
    urls.push({
      url: `${baseUrl}/cursos/examenes/${slug}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority,
    });
  });

  return urls;
}
