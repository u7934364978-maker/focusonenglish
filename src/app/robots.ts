import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://www.focus-on-english.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: [
          "/",
          "/blog/",
          "/aprender-ingles",
          "/aplicaciones-para-aprender-ingles",
          "/certificaciones-ingles-oficiales",
          "/frases-en-ingles/",
          "/planes",
          "/test-nivel",
          "/contacto",
          "/herramientas/",
        ],
        disallow: [
          "/cuenta/",
          "/dashboard/",
          "/api/",
          "/auth/",
          "/checkout/",
          "/_next/",
          "/static/",
          "/admin/",
          "/curso/",
          "/curso-a1/",
          "/curso-a2/",
          "/curso-b1/",
          "/curso-b2/",
          "/demo-course/",
          "/privacidad",
          "/terminos",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
