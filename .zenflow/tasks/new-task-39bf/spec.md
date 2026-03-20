# Technical Specification: Hub "Curso Inglés"

## Technical Context

- **Language**: TypeScript / Next.js 14 (App Router)
- **Content system**: Markdown files with YAML frontmatter, parsed via `gray-matter` in `src/lib/blog.ts`
- **No new routes, components, or dependencies** are required. This task is purely content authoring.
- **Author**: `sara-mendez` (exists in `src/lib/authors.ts`)

---

## Architecture Overview

### Hub System

- **Hub files**: `src/content/hubs/*.md` — frontmatter `title` + `description`, free-form Markdown body.
- **Hub page**: `src/app/hubs/[slug]/page.tsx` — reads hub via `getHubContent(slug)`, renders body with `ReactMarkdown`.
- **Article filtering** (line 78–80 of `page.tsx`):
  ```ts
  allArticles.filter((article) =>
    article.keywords?.some(
      (k) => slugify(k) === slugify(slug) || slugify(k).includes(slug.split("-")[0])
    )
  );
  ```
  For slug `curso-ingles`:
  - Exact match: `slugify(k) === "curso-ingles"` — keyword `"curso ingles"` matches.
  - Prefix match: `slugify(k).includes("curso")` — any keyword starting with "curso" also matches.

### `slugify` function (`src/lib/blog.ts:137`)

Lowercases → NFD normalize → strips accents → replaces spaces with `-` → strips non-word chars.  
`"curso ingles"` → `"curso-ingles"` ✓  
`"curso inglés a1"` → `"curso-ingles-a1"` (contains "curso") ✓

---

## Implementation Approach

### 1. New hub file: `src/content/hubs/curso-ingles.md`

**Frontmatter** (matches existing hub convention — only `title` and `description`):
```yaml
---
title: "Curso de Inglés: Guía Completa para Elegir el Mejor en 2026"
description: "Encuentra el mejor curso de inglés según tu nivel y objetivos. Guía completa con cursos gratis, online, por niveles (A1 a C2) y comparativa de plataformas para hispanohablantes."
---
```

**Body structure** (~1000 words, Markdown):
- H1: Título principal
- Introducción: por qué elegir bien el método importa
- H2: Cursos de inglés por nivel MCER (A1 → C2 con enlace a cada artículo de cluster)
- H2: Formatos: presencial, online, apps (enlace a `clases-de-ingles-guia` y `apps-vs-cursos-ingles`)
- H2: Gratis vs. pago (enlace a `curso-ingles-gratis` y `curso-ingles-online`)
- H2: CTA — curso online Focus English

### 2. Keyword update in 8 existing articles

Add `"curso ingles"` to the `keywords` array in the frontmatter of:

| File | Current relevant keyword |
|------|--------------------------|
| `src/content/blog/metodos/ingles-a1.md` | `"curso inglés a1"` |
| `src/content/blog/metodos/ingles-a2.md` | `"curso inglés a2"` |
| `src/content/blog/metodos/cursos-online-ingles-b1.md` | `"cursos online ingles b1"` |
| `src/content/blog/metodos/ingles-b2.md` | `"curso inglés b2"` |
| `src/content/blog/metodos/ingles-c1.md` | `"curso ingles c1"` |
| `src/content/blog/metodos/ingles-c2.md` | `"curso ingles c2"` |
| `src/content/blog/metodos/clases-de-ingles-guia.md` | `"clases de ingles"` |
| `src/content/blog/metodos/apps-vs-cursos-ingles.md` | `"apps vs cursos ingles cual elegir"` |

**Change**: append `- curso ingles` to the `keywords` list of each file. No body content changes.

### 3. New article: `src/content/blog/metodos/curso-ingles-gratis.md`

**Frontmatter**:
```yaml
---
title: 'Curso de Inglés Gratis: Los Mejores Recursos para Aprender sin Pagar'
date: '2026-03-20'
updatedDate: '2026-03-20'
author: sara-mendez
excerpt: 'Descubre los mejores cursos de inglés gratuitos online en 2026: BBC Learning English, British Council, Duolingo, YouTube educativo y más. Con plan de estudio de 6 meses.'
description: 'Guía completa de los mejores cursos de inglés 100% gratuitos online: recursos del British Council, BBC Learning English, Duolingo y el plan gratuito de Focus English. Incluye plan de estudio por niveles.'
category: metodos
readTime: 9 min
image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg'
alt: 'Persona estudiando inglés gratis desde casa con el ordenador'
keywords:
  - curso ingles
  - curso inglés gratis
  - aprender inglés gratis online
  - curso inglés gratuito
  - inglés gratis desde cero
  - recursos gratuitos ingles
  - bbc learning english
  - british council ingles gratis
faqs:
  - question: '¿Se puede aprender inglés de cero de forma totalmente gratuita?'
    answer: '...'
  - question: '¿Qué nivel de inglés puedo alcanzar con recursos gratuitos?'
    answer: '...'
  - question: '¿Es suficiente Duolingo para aprender inglés?'
    answer: '...'
  - question: '¿Cuánto tiempo debo dedicar al día para aprender inglés gratis?'
    answer: '...'
canonical: 'https://www.focus-on-english.com/blog/metodos/curso-ingles-gratis'
---
```

**Body structure** (2000+ words):
- H1
- Introducción
- H2: ¿Se puede aprender inglés gratis? (realismo + expectativas)
- H2: Los mejores recursos gratuitos para aprender inglés (BBC Learning English, British Council, Duolingo, YouTube, podcasts, Focus English plan gratuito)
- H2: Plan de estudio gratuito de 6 meses por niveles (A1 → B2)
- H2: Consejos para mantener la motivación estudiando solo
- H2: Gratis vs. pago — cuándo considerar invertir
- Enlace interno al hub `/hubs/curso-ingles`
- CTA a Focus English

### 4. New article: `src/content/blog/metodos/curso-ingles-online.md`

**Frontmatter**:
```yaml
---
title: 'Los Mejores Cursos de Inglés Online en 2026: Guía y Comparativa'
date: '2026-03-20'
updatedDate: '2026-03-20'
author: sara-mendez
excerpt: 'Comparativa de los mejores cursos de inglés online en 2026: Focus English, Babbel, Preply, ABA English, British Council y Coursera. Precios, niveles, metodología y certificación.'
description: 'Guía de los mejores cursos de inglés online de pago en 2026. Comparativa de plataformas, precios, metodología y a quién le conviene cada uno. Con tabla comparativa y recomendaciones por perfil.'
category: metodos
readTime: 10 min
image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg'
alt: 'Persona haciendo un curso de inglés online desde casa'
keywords:
  - curso ingles
  - curso inglés online
  - mejores cursos ingles online
  - plataformas aprender inglés online
  - curso inglés con certificado
  - aprender ingles online 2026
  - focus english online
  - babbel preply aba english
faqs:
  - question: '¿Cuál es el mejor curso de inglés online en 2026?'
    answer: '...'
  - question: '¿Cuánto cuesta un curso de inglés online de calidad?'
    answer: '...'
  - question: '¿Los cursos de inglés online dan certificado?'
    answer: '...'
  - question: '¿Es mejor un curso online o una academia presencial?'
    answer: '...'
canonical: 'https://www.focus-on-english.com/blog/metodos/curso-ingles-online'
---
```

**Body structure** (2000+ words):
- H1
- Introducción: ventajas del formato online
- H2: Criterios para elegir un curso de inglés online
- H2: Comparativa de las mejores plataformas (tabla: plataforma, precio, nivel, metodología, certificado, para quién)
  - Focus English, Babbel, Preply, ABA English, British Council, Coursera
- H2: Análisis individual de cada plataforma (H3 por plataforma)
- H2: ¿Cuál elegir según tu perfil?
- H2: Errores comunes al elegir un curso online
- Enlace interno al hub `/hubs/curso-ingles` y al artículo `curso-ingles-gratis`
- CTA a Focus English

---

## Source Code Structure Changes

```
src/content/
  hubs/
    curso-ingles.md                           ← NEW
  blog/
    metodos/
      ingles-a1.md                            ← ADD keyword
      ingles-a2.md                            ← ADD keyword
      cursos-online-ingles-b1.md              ← ADD keyword
      ingles-b2.md                            ← ADD keyword
      ingles-c1.md                            ← ADD keyword
      ingles-c2.md                            ← ADD keyword
      clases-de-ingles-guia.md                ← ADD keyword
      apps-vs-cursos-ingles.md                ← ADD keyword
      curso-ingles-gratis.md                  ← NEW
      curso-ingles-online.md                  ← NEW
```

No changes to `src/app/`, `src/components/`, `src/lib/`, or any TypeScript files.

---

## Data Model / API / Interface Changes

None. The existing `BlogPost` interface and hub system already supports all required fields and content patterns.

---

## Verification Approach

1. **Build check**: `npm run build` — verify no build errors (all new `.md` files have valid frontmatter).
2. **Hub page**: navigate to `/hubs/curso-ingles` — verify hub renders and all 10 cluster articles appear in the "Artículos relacionados" section.
3. **Keyword filter test**: confirm `slugify("curso ingles") === "curso-ingles"` and that the hub page's filter picks up all 10 articles.
4. **Lint**: `npm run lint` — no TypeScript or linting errors (only `.md` files are modified/created).
