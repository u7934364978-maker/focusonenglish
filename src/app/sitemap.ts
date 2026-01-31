import type { MetadataRoute } from "next";
import { getBlogArticles } from "@/lib/blog";

const baseUrl = "https://focus-on-english.com";

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
      url: `${baseUrl}/planes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/test-nivel`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/cursos`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    // Landing pages principales de cursos
    {
      url: `${baseUrl}/cursos/trabajo`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cursos/viajes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${baseUrl}/cursos/examenes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    
    // Blog - Contenido SEO
    {
      url: `${baseUrl}/blog`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    
    // Contacto
    {
      url: `${baseUrl}/contacto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    
    // Autenticación (baja prioridad, no indexar en robots.txt)
    {
      url: `${baseUrl}/cuenta/login`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cuenta/registro`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Add blog content dynamically - Alta prioridad para SEO
  const articles = getBlogArticles();
  
  // 1. Add Category Pages (Subhubs)
  const categories = Array.from(new Set(articles.map(a => a.category)));
  urls.push(
    ...categories.map((category) => ({
      url: `${baseUrl}/blog/${category}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))
  );

  // 2. Add Individual Articles with proper Silo path
  urls.push(
    ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.category}/${article.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // Add course pages dynamically - Páginas de conversión importantes
  const goals = ['trabajo', 'viajes', 'examenes'];
  const levels = ['a1', 'a2', 'b1', 'b2', 'c1', 'c2'];
  
  goals.forEach(goal => {
    levels.forEach(level => {
      // Prioridad más alta para B2 en exámenes (más demandado)
      let priority = 0.6;
      if (goal === 'examenes' && level === 'b2') {
        priority = 0.8;
      } else if (goal === 'examenes' && level === 'c1') {
        priority = 0.7;
      }
      
      urls.push({
        url: `${baseUrl}/cursos/${goal}/${level}`,
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority,
      });
    });
  });

  return urls;
}
