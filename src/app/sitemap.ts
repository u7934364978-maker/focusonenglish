import type { MetadataRoute } from "next";
import { getBlogArticles } from "@/lib/blog";
import { getAllSEORoutes } from "@/lib/seo";

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
    
    // SEO Hub - Alta prioridad para captar "aprender inglés"
    {
      url: `${baseUrl}/aprender-ingles`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.95,
    },
    
    // Páginas principales de conversión
    {
      url: `${baseUrl}/planes`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    
    // Pillar Pages SEO
    {
      url: `${baseUrl}/aplicaciones-para-aprender-ingles`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/certificaciones-ingles-oficiales`,
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

    // Legal
    {
      url: `${baseUrl}/privacidad`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.3,
    },
  ];

  // 1. Añadir las nuevas Rutas SEO (Artículos comerciales)
  const seoRoutes = getAllSEORoutes();
  urls.push(
    ...seoRoutes.map((slug) => ({
      url: `${baseUrl}/curso-ingles-${slug.replace(/^ingles-/, "")}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85, // Prioridad alta para captar leads
    }))
  );

  // 2. Añadir artículos del blog dinámicamente
  const articles = getBlogArticles();
  
  // Categorías del blog
  const categories = Array.from(new Set(articles.map(a => a.category)));
  urls.push(
    ...categories.map((category) => {
      const categoryArticles = articles.filter(a => a.category === category);
      const latestDate = categoryArticles.length > 0 
        ? new Date(categoryArticles[0].date) 
        : now;

      return {
        url: `${baseUrl}/blog/${category}`,
        lastModified: latestDate,
        changeFrequency: "weekly" as const,
        priority: 0.75,
      };
    })
  );

  // Artículos individuales
  urls.push(
    ...articles.map((article) => ({
      url: `${baseUrl}/blog/${article.category}/${article.slug}`,
      lastModified: new Date(article.date),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }))
  );

  // NOTA: No incluimos /curso/ingles-a1 etc. ya que son páginas de la plataforma de pago
  // y no deben ser indexadas para evitar problemas de contenido duplicado o acceso.

  return urls;
}
