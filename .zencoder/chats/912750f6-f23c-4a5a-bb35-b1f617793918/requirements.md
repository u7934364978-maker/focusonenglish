# Product Requirements Document (PRD): Blog Expansion for SEO

## 1. Overview
The goal is to expand the "Focus English" blog to improve SEO rankings by targeting high-volume keywords provided in the `seo-keyword-categorization.json` and recent user input. This expansion will cover missing topics in exams, grammar, and essential vocabulary.

## 2. Target Audience
-   Students preparing for official Cambridge exams (B2 First, C1 Advanced).
-   English learners seeking clear explanations for complex grammar points.
-   Professionals and travelers needing situational vocabulary.

## 3. Selected Content Clusters
Based on the keyword analysis, the following articles will be prioritized:

### Cluster 1: Official Exams (Category: `examenes`)
1.  **Guía Completa para el B2 First (FCE) de Cambridge**: Everything about the exam structure, tips, and resources.
    -   *Keywords*: `fce first certificate in english exam`, `b2 first cambridge`, `examen cambridge first`.
2.  **Linguaskill de Cambridge: Qué es y cómo prepararlo**: Modern adaptive test guide.
    -   *Keywords*: `linguaskill`, `linguaskill cambridge`, `linguaskill english live`.

### Cluster 2: Essential Grammar (Category: `metodos`)
3.  **Present Perfect vs Past Simple: ¿Cuándo usar cada uno?**: Clear distinction with practical examples.
    -   *Keywords*: `present perfect and past simple`, `present perfect tense examples`, `difference between present perfect and past simple`.
4.  **La Voz Pasiva en Inglés: Reglas y Ejemplos**: Complete guide to passive structures.
    -   *Keywords*: `passive voice examples`, `the passive voice`, `examples of passive voice`.

### Cluster 3: Vocabulary & Culture (Category: `metodos`)
5.  **Vocabulario de Ropa en Inglés: Guía Visual y Práctica**: Clothes, accessories, and "dress" vs "wear".
    -   *Keywords*: `prendas de ropa en ingles`, `clothes in english`, `vocabulario ropa ingles`.
6.  **¿Qué significa TBT? El Diccionario de Redes Sociales en Inglés**: Explaining digital slang.
    -   *Keywords*: `que significa tbt`, `tbt significado`, `slang in english`.

## 4. Technical Requirements
-   **Format**: Markdown files in `src/content/blog/[category]/[slug].md`.
-   **Frontmatter**: Must include `title`, `description`, `excerpt`, `keywords`, `date`, `category`, `author`, and `image`.
-   **SEO Optimization**:
    -   Include primary and secondary keywords in headings (H2, H3).
    -   Alt text for all images.
    -   Minimum 800 words per article.
    -   FAQ schema (via frontmatter `faqs` field) to improve SERP visibility.
-   **Consistency**: Follow the tone and style of existing articles (e.g., `mejor-app-aprender-ingles.md`).

## 5. Deliverables
-   New folder: `src/content/blog/examenes`.
-   6 New blog articles in Markdown format.
-   Updated `sitemap.ts` (if manual, but Next.js usually handles it).

## 6. Success Metrics
-   Increased organic traffic to the blog.
-   Better positioning for "Cambridge" and "Grammar" related keywords in Spain.
