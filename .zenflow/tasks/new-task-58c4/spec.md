# Technical Specification: Hub Expansion — "Mejores Apps para Aprender Inglés Gratis"

## 1. Technical Context

### Language & Stack
- **Framework**: Next.js 14+ (App Router) with TypeScript
- **Content format**: Markdown (`.md`) with YAML frontmatter parsed via `gray-matter`
- **Blog engine**: `src/lib/blog.ts` — reads all `.md` files recursively from `src/content/blog/`, auto-discovers articles via filesystem, no registry needed
- **Routing**: Dynamic `[category]/[slug]` routes in `src/app/blog/[category]/[slug]/page.tsx`
- **No new code changes required**: adding `.md` files is sufficient for the system to auto-discover and serve them

### Content Schema (`BlogPost` interface in `src/lib/blog.ts`)
```typescript
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  updatedDate?: string;
  author: string;
  excerpt: string;
  description?: string;
  category: string;
  readTime: string;
  image?: string;
  alt?: string;
  keywords?: string[];
  faqs?: { question: string; answer: string }[];
  featured?: boolean;
  canonical?: string;
  content: string;
}
```

### Frontmatter Template (required fields)
```yaml
---
title: '...'
date: '2026-03-XX'
updatedDate: '2026-03-XX'
author: sara-mendez
excerpt: '...'
category: metodos
readTime: X min
image: 'https://images.pexels.com/photos/XXXXXX/pexels-photo-XXXXXX.jpeg?auto=compress&cs=tinysrgb&w=1200'
alt: '...'
keywords:
  - keyword1
  - keyword2
faqs:
  - question: '...'
    answer: '...'
canonical: 'https://www.focus-on-english.com/blog/metodos/SLUG'
---
```

---

## 2. Implementation Approach

### Pattern: Pure content addition
No application code changes are needed. The blog engine auto-discovers all `.md` files under `src/content/blog/`. Adding new `.md` files in `src/content/blog/metodos/` is sufficient for:
- Static path generation (`generateStaticParams`)
- Metadata generation (`generateMetadata`)
- Article rendering via `ReactMarkdown`

### Hub update pattern (existing file edit)
The hub article at `src/content/blog/metodos/mejores-apps-ingles-gratis.md` (the one served at `/blog/metodos/mejores-apps-ingles-gratis`) will be edited to:
1. Add inline links to cluster articles within each app's section
2. Add a final "Profundiza más" section with links to all 10 cluster articles

> Note: there are two related files:
> - `src/content/hubs/mejores-apps-ingles-gratis.md` — hub landing (different route)
> - `src/content/blog/metodos/mejores-apps-ingles-gratis.md` — the blog article (the actual hub per the PRD)
> Both will receive internal links to the cluster articles.

### Internal link format
All internal links use relative paths within Markdown:
```markdown
[Guía completa de Anki](/blog/metodos/anki-para-aprender-ingles-guia)
```

### Content quality standards (enforced per article)
- Minimum ~1,500 words of useful content
- H2/H3 heading structure
- Comparison tables where applicable
- FAQ section (minimum 3 questions)
- At least one internal link to the hub: `/blog/metodos/mejores-apps-ingles-gratis`
- Cross-links to sibling cluster articles where relevant
- Author: `sara-mendez`
- Language: Spanish (Spain)
- Images: Pexels URLs

---

## 3. Source Code Structure Changes

### New files (10 articles)
```
src/content/blog/metodos/
  anki-para-aprender-ingles-guia.md          (Priority 1)
  mejores-canales-youtube-aprender-ingles.md  (Priority 2)
  repeticion-espaciada-srs-ingles.md          (Priority 3)
  rutina-apps-ingles-como-combinarlas.md      (Priority 4)
  duolingo-ingles-review.md                   (Priority 5)
  elsa-speak-review-pronunciacion-ingles.md   (Priority 6)
  bbc-learning-english-guia-completa.md       (Priority 7)
  lingopie-review-aprender-ingles-series.md   (Priority 8)
  cake-app-ingles-review.md                   (Priority 9)
  apps-ingles-sin-internet-offline.md         (Priority 10)
```

### Modified files (hub update)
```
src/content/blog/metodos/mejores-apps-ingles-gratis.md   (add cluster links)
src/content/hubs/mejores-apps-ingles-gratis.md            (add cluster links)
```

---

## 4. Data Model / API / Interface Changes

**None.** The `BlogPost` interface already supports all required frontmatter fields. No new routes, API endpoints, or components needed.

---

## 5. Delivery Phases

### Phase 1 — High-priority cluster articles (articles 1–4)
Articles with highest SEO impact and strongest cross-linking potential:
1. `anki-para-aprender-ingles-guia.md`
2. `mejores-canales-youtube-aprender-ingles.md`
3. `repeticion-espaciada-srs-ingles.md`
4. `rutina-apps-ingles-como-combinarlas.md` *(links to all others — write last within phase)*

### Phase 2 — App-specific deep dives (articles 5–9)
5. `duolingo-ingles-review.md`
6. `elsa-speak-review-pronunciacion-ingles.md`
7. `bbc-learning-english-guia-completa.md`
8. `lingopie-review-aprender-ingles-series.md`
9. `cake-app-ingles-review.md`

### Phase 3 — Complementary article + hub update
10. `apps-ingles-sin-internet-offline.md`
11. Update `src/content/blog/metodos/mejores-apps-ingles-gratis.md` with cluster links
12. Update `src/content/hubs/mejores-apps-ingles-gratis.md` with cluster links

---

## 6. Verification Approach

### Build verification
Since this is pure content (no TypeScript code), verification consists of:

1. **Frontmatter validation**: Ensure each file parses correctly (required fields: `title`, `date`, `author`, `excerpt`, `category`, `readTime`)
2. **Build check**: Run `npm run build` — Next.js static generation will fail loudly if any frontmatter is malformed or a slug conflicts
3. **Link check**: Verify all internal links reference existing slugs (manual review against the file list)

### No unit tests required
Per the PRD assumptions: *"Los artículos son contenido editorial, no código funcional — no hay tests ni linting específico"*.

### Lint
Run `npm run lint` after any edits if TypeScript/component files are touched (not expected for this task).

---

## 7. Internal Linking Map

| Cluster Article | Links TO hub | Links TO other clusters |
|----------------|-------------|------------------------|
| anki-guia | ✓ hub | → repeticion-espaciada, → rutina |
| canales-youtube | ✓ hub | → rutina |
| repeticion-espaciada | ✓ hub | → anki-guia |
| rutina-apps | ✓ hub | → ALL other cluster articles |
| duolingo-review | ✓ hub | → rutina, → apps-offline |
| elsa-speak-review | ✓ hub | → rutina |
| bbc-learning-english | ✓ hub | → rutina |
| lingopie-review | ✓ hub | → anki-guia, → rutina |
| cake-app-review | ✓ hub | → rutina |
| apps-offline | ✓ hub | → anki-guia, → duolingo-review |

Hub article updates:
- Each app section → its dedicated cluster article
- New "Profundiza más" section → all 10 cluster articles
