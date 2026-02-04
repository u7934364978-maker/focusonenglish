# Technical Specification: Blog Expansion for SEO

## 1. Technical Context
-   **Framework**: Next.js 15 (App Router).
-   **Content Management**: Markdown files with Frontmatter.
-   **Library for Markdown**: `gray-matter` for parsing, `react-markdown` for rendering.
-   **Styling**: Tailwind CSS with `@tailwindcss/typography`.

## 2. Implementation Approach
The blog expansion will follow the existing pattern of file-based routing and content.

### Folder Structure
A new category folder will be created:
-   `src/content/blog/examenes/`: For exam-related content.

Existing folders will be used for grammar and vocabulary:
-   `src/content/blog/metodos/`: For grammar points and general learning methods.

### Markdown Schema
Each new article MUST follow this structure to ensure compatibility with the existing blog renderer and SEO audit script:

```markdown
---
title: "Article Title"
description: "SEO Meta Description (150-160 chars)"
excerpt: "Short summary for the blog list page"
keywords: ["key1", "key2", "key3"]
date: "2024-02-04"
category: "metodos|examenes|trabajo|viajes"
author: "Focus English"
image: "https://images.pexels.com/photos/... (High quality image)"
faqs:
  - question: "Common Question?"
    answer: "Detailed answer."
---

## Heading 2 (Target Keyword)
Content...

### Heading 3 (Secondary Keyword)
Content...
```

## 3. Data Model & Interface Changes
-   No changes to the data model are required as we are using the existing `BlogPost` structure.
-   The `category` field in frontmatter should be strictly one of the supported categories to ensure correct routing in `src/app/blog/[category]/[slug]`.

## 4. Delivery Phases
-   **Phase 1**: Article on B2 First (FCE) and Linguaskill (Category: `examenes`).
-   **Phase 2**: Article on Present Perfect vs Past Simple and Passive Voice (Category: `metodos`).
-   **Phase 3**: Article on Vocabulary (Clothing) and Social Media Slang (Category: `metodos`).

## 5. Verification Approach
-   **SEO Audit**: Run `npm run audit-seo` to verify that all new articles meet the frontmatter and content requirements.
-   **Visual Check**: Navigate to `http://localhost:5436/blog/[category]/[slug]` to ensure formatting and images are correct.
-   **Linting**: Run `npm run lint` to ensure no issues were introduced.
