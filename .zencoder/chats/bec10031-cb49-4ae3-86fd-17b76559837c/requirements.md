# PRD: SEO Strategy for Domain Authority (3116 Keywords)

## 1. Goal
Build domain authority for Focus English by targeting 3116 keywords related to English learning, specifically for Spanish speakers.

## 2. Target Audience
- Spanish speakers (global, with focus on Spain/LATAM).
- Professionals (Work), Travelers (Viajes), and Students (Exams/General).
- Beginners (Desde cero) to Intermediate learners.

## 3. SEO Pillars & Keyword Clusters
Based on the keyword analysis, we will focus on the following clusters:

### Cluster 1: Learn English for Free (Aprender Inglés Gratis)
- **Keywords**: "aprender ingles gratis", "cursos gratis de ingles", "ingles online gratis".
- **Target**: Pillar page for free resources and individual articles for specific free tools.

### Cluster 2: English Exercises & Interactive Tools (Ejercicios e interactividad)
- **Keywords**: "ejercicios ingles", "juegos de ingles", "fichas interactivas", "practicar ingles online".
- **Target**: High-authority landing pages linking to the app's interactive exercises.

### Cluster 3: Professional English (Inglés para el Trabajo)
- **Keywords**: "ingles para el trabajo", "entrevista de trabajo en ingles", "emails en ingles".
- **Target**: Blog category "Trabajo" with deep guides on professional communication.

### Cluster 4: Travel English (Inglés para Viajes)
- **Keywords**: "ingles para viajar", "frases ingles viajes", "ingles aeropuertos".
- **Target**: Blog category "Viajes" with practical guides.

### Cluster 5: Beginners & Fast Learning (Principiantes y Aprendizaje Rápido)
- **Keywords**: "ingles desde cero", "aprender ingles rapido", "ingles basico".
- **Target**: Structured paths for absolute beginners.

## 4. Strategy Components

### A. Topic Clustering & Pillar Pages
- Create/Optimize **Pillar Pages** for each main cluster.
- Use **Topic Clusters** to support pillar pages with long-tail keywords.

### B. Content Optimization (On-Page)
- Follow the `audit-blog-seo.mjs` standards:
  - Unique `title` and `excerpt`.
  - Structured `keywords` array in frontmatter.
  - Proper heading hierarchy (No H1 in body).
  - Alt text for all images.
  - FAQ Schema where applicable.

### C. Internal Linking Architecture
- Implement a "Hub and Spoke" model.
- Pillar pages link to sub-topics.
- Sub-topics link back to pillar pages with optimized anchor text.

### D. Technical SEO
- Sitemap updates.
- Schema markup (Breadcrumb, Article, FAQ).
- Performance optimization (Next.js 15 standards).

## 5. Unclear Aspects & Assumptions
- **Assumption**: We will use the existing blog structure in `src/content/blog`.
- **Assumption**: We will leverage existing interactive exercises to satisfy "ejercicios" and "juegos" keywords.
- **Unclear**: Do we need to generate all 3116 keywords into content immediately? (Proposed: Grouping into ~50-100 high-impact articles first).
