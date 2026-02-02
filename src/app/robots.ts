import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://focus-on-english.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/blog/"],
        disallow: [
          "/cuenta/",
          "/dashboard/",
          "/api/",
          "/auth/",
          "/checkout/",
          "/_next/",
          "/static/",
          "/admin/",
          "/privacidad",
          "/terminos",
          "/lecciondemuestra",
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
