export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Focus English",
    "alternateName": "Focus on English",
    "url": "https://www.focus-on-english.com",
    "logo": "https://www.focus-on-english.com/logo.png",
    "description": "Cursos de inglés general para todos los niveles (A1-C2). Programas personalizados de 90 días con metodología probada.",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "ES",
      "addressLocality": "España"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Support",
      "email": "info@focus-on-english.com",
      "availableLanguage": ["Spanish", "English"]
    },
    "sameAs": [
      "https://www.instagram.com/focusonenglish",
      "https://www.tiktok.com/@focusonenglish",
      "https://www.youtube.com/@focusonenglish"
    ],
    "foundingDate": "2024",
    "areaServed": {
      "@type": "Country",
      "name": "España"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Cursos de Inglés",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Cursos de Inglés General (A1-C2)",
            "description": "Programas de dominio lingüístico completo desde nivel básico hasta avanzado",
            "provider": {
              "@type": "EducationalOrganization",
              "name": "Focus English"
            }
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function CourseSchema({ 
  name, 
  description, 
  level, 
  duration = "90 días",
  price = "6.99",
  currency = "EUR"
}: { 
  name: string; 
  description: string; 
  level: string; 
  duration?: string;
  price?: string;
  currency?: string;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "EducationalOrganization",
      "name": "Focus English",
      "url": "https://www.focus-on-english.com"
    },
    "educationalLevel": level,
    "timeRequired": duration,
    "availableLanguage": "es",
    "inLanguage": "en",
    "teaches": "Inglés",
    "courseMode": "online",
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT15H"
    },
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": currency,
      "availability": "https://schema.org/InStock",
      "url": "https://www.focus-on-english.com/planes"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ArticleSchema({
  title,
  description,
  slug,
  datePublished,
  dateModified,
  author = "Focus English",
  keywords = []
}: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
  keywords?: string[];
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": "https://www.focus-on-english.com/og-image.jpg",
    "author": {
      "@type": "Organization",
      "name": author,
      "url": "https://www.focus-on-english.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Focus English",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.focus-on-english.com/logo.png"
      }
    },
    "datePublished": datePublished,
    "dateModified": dateModified || datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.focus-on-english.com/blog/${slug}`
    },
    "keywords": keywords.join(", ")
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ questions }: { questions: Array<{ question: string; answer: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map(q => ({
      "@type": "Question",
      "name": q.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": q.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.focus-on-english.com${item.url}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Focus English",
    "url": "https://www.focus-on-english.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.focus-on-english.com/blog?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
