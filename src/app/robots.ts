import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Indexamos solo marketing (B): home + listados + curriculum
        allow: [
          "/",
          "/app/cursos",
          "/app/cursos/",
          "/app/cursos/emailing",
          "/app/cursos/emailing/",
          "/app/cursos/emailing/b1",
          "/app/cursos/emailing/b1/",
        ],
        // Bloqueamos semanas premium
        disallow: ["/app/cursos/*/*/semana-*"],
      },
    ],
    sitemap: "https://englishworkinglab.com/sitemap.xml",
  };
}
