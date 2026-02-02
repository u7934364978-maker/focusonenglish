import type { MetadataRoute } from "next";
import { getBlogArticles } from "@/lib/blog";

const baseUrl = "https://www.focus-on-english.com";

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
  // Solo añadir rutas que existen realmente para evitar 404 en buscadores
  const courseUrls: MetadataRoute.Sitemap = [
    // Exámenes / Cursos Genéricos
    {
      url: `${baseUrl}/curso/ingles-a1`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/curso/ingles-a2`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/curso/ingles-b1`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/curso/ingles-b2`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    }
  ];

  urls.push(...courseUrls);

  return urls;
}
