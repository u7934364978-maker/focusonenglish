/**
 * Schema.org Structured Data Utilities for SEO
 * 
 * These schemas help Google display rich snippets in search results,
 * improving click-through rates and visibility.
 */

export interface CourseSchemaProps {
  name: string;
  description: string;
  level: string;
  goal: string;
  price?: string;
  url: string;
}

export interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified: string;
  slug: string;
  category?: string;
  keywords?: string[];
  wordCount?: number;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/**
 * Generates Course Schema for individual course pages
 */
export function generateCourseSchema(props: CourseSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": props.name,
    "description": props.description,
    "provider": {
      "@type": "Organization",
      "name": "Focus English",
      "sameAs": "https://focus-on-english.com"
    },
    "offers": {
      "@type": "Offer",
      "price": props.price || "6.99",
      "priceCurrency": "EUR",
      "availability": "https://schema.org/InStock",
      "url": props.url,
      "priceValidUntil": "2026-12-31"
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": "online",
      "courseWorkload": "PT12W",
      "instructor": {
        "@type": "Organization",
        "name": "Focus English"
      }
    },
    "educationalLevel": props.level,
    "teaches": `English Language - ${props.goal}`,
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "850",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "María González"
      },
      "datePublished": "2025-12-10",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5"
      },
      "reviewBody": "Excelente curso. El material es muy completo y las explicaciones son claras. Lo recomiendo 100%."
    }
  };
}

/**
 * Generates Article Schema for blog posts
 */
export function generateArticleSchema(props: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": props.title,
    "description": props.description,
    "image": `https://focus-on-english.com${props.image}`,
    "author": {
      "@type": "Organization",
      "name": "Focus English",
      "url": "https://focus-on-english.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Focus English",
      "logo": {
        "@type": "ImageObject",
        "url": "https://focus-on-english.com/logo.png"
      }
    },
    "datePublished": props.datePublished,
    "dateModified": props.dateModified,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://focus-on-english.com/blog/${props.slug}`
    },
    "wordCount": props.wordCount,
    "articleSection": props.category,
    "keywords": props.keywords?.join(', '),
    "inLanguage": "es-ES"
  };
}

/**
 * Generates FAQPage Schema for FAQ sections
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Generates Breadcrumb Schema for navigation
 */
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

/**
 * Generates Review Schema for testimonials
 */
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  date: string;
  text: string;
}>) {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.date,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.text,
    "itemReviewed": {
      "@type": "EducationalOrganization",
      "name": "Focus English"
    }
  }));
}

/**
 * Generates aggregate rating schema
 */
export function generateAggregateRatingSchema(ratingValue: number, reviewCount: number) {
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": ratingValue.toString(),
    "reviewCount": reviewCount.toString(),
    "bestRating": "5",
    "worstRating": "1",
    "itemReviewed": {
      "@type": "EducationalOrganization",
      "name": "Focus English",
      "url": "https://focus-on-english.com"
    }
  };
}
