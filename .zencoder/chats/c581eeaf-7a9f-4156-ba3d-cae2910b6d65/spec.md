# Technical Specification: SEO Domain Authority Strategy

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Content Format**: Markdown (.md) with YAML Frontmatter
- **Location**: `src/content/blog/` (Cluster posts) and `src/content/seo-pages/rutas/` (Pillar pages)
- **Metadata Management**: `gray-matter` for parsing, `zod` for validation (existing patterns)

## 2. Implementation Approach
We will adopt a **Hub-and-Spoke** (Topic Cluster) model:
- **Spokes (Cluster Content)**: Individual blog posts targeting specific, low-difficulty keywords.
- **Hubs (Pillar Pages)**: Existing or new SEO "routes" that consolidate authority for a broad topic.

### 2.1 Content Structure
New blog posts will follow the existing template:
```markdown
---
title: "Title with [Keyword]"
date: "2026-02-06"
author: "Focus English Team"
excerpt: "Compelling summary including [Keyword]."
category: "category_name"
readTime: "X min"
image: "https://images.pexels.com/..."
alt: "Descriptive alt text"
keywords:
  - "target keyword"
  - "secondary keyword"
---
## H2 Heading
Content...
```

### 2.2 Internal Linking Logic
- **Cluster to Pillar**: Every new post in `blog/viajes` MUST link to `/rutas/ingles-para-hosteleria` or `/rutas/ingles-para-viajar`.
- **Cluster to Cluster**: Posts within the same category will link to at least one other relevant post.
- **Pillar to Cluster**: Update `src/content/seo-pages/rutas/*.md` to include a "Related Articles" or "Deep Dive" section linking to the new cluster posts.

## 3. Source Code Changes
### 3.1 New Content Files (Examples)
- `src/content/blog/viajes/ingles-para-camareros-guia.md`
- `src/content/blog/trabajo/entrevista-trabajo-ingles-preguntas.md`
- `src/content/blog/examenes/guia-precios-cambridge-2026.md`

### 3.2 Updates to Existing Files
- Update `src/content/seo-pages/rutas/ingles-para-hosteleria.md` to link to new hospitality posts.
- Update `src/content/seo-pages/rutas/certificaciones-ingles.md` (if exists) or create it as a hub for exam keywords.

## 4. Delivery Phases
1. **Phase 1: Hospitality Cluster**: Create 3-5 posts for `hosteleria`, `recepcionistas`, `camareros`.
2. **Phase 2: Exam Cluster**: Create posts for `precios cambridge`, `aptis a2`, `toefl caducidad`.
3. **Phase 3: Work Cluster**: Create posts for `emails profesionales`, `entrevistas`.
4. **Phase 4: Internal Linking Audit**: Verify all links are functional and use optimized anchor text.

## 5. Verification
- **Build Test**: Run `npm run build` to ensure no broken links or markdown errors.
- **Linting**: Run `npm run lint`.
- **SEO Audit**: Use `scripts/audit-blog-seo.mjs` to verify metadata and keyword density.
