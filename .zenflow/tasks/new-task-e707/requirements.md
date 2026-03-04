# PRD: BreadcrumbList Structured Data for Blog

## Overview

The task is to audit and fix the blog section of the Focus English platform to ensure proper `BreadcrumbList` structured data (JSON-LD) is implemented across all blog page types, following Google's guidelines for rich results.

---

## Background

The Google documentation provided describes how `BreadcrumbList` schema.org structured data enables breadcrumb rich results in Google Search. The blog already has a working `generateBreadcrumbSchema()` utility in `src/lib/schemas.ts` and uses it correctly in the article detail page (`/blog/[category]/[slug]/page.tsx`). However, other blog pages are missing this structured data.

---

## Current State Analysis

### Pages with breadcrumb structured data ✅
- **`/blog/[category]/[slug]/page.tsx`** — Correctly injects JSON-LD `BreadcrumbList` with 4 items: Inicio > Blog > Category > Article Title. The last item includes its URL, which is valid per Google docs (optional but allowed).

### Pages missing breadcrumb structured data ❌

#### 1. `/blog/[category]/page.tsx` (Category listing page)
- Has visual HTML breadcrumbs: `<nav aria-label="breadcrumb">` with `<ol>/<li>` — correct markup.
- **Missing:** JSON-LD `BreadcrumbList` schema injection.
- Expected breadcrumb: Inicio > Blog > [Category Name]

#### 2. `/blog/temas/[keyword]/page.tsx` (Topic/keyword hub page)
- Has visual HTML breadcrumbs: `<nav aria-label="breadcrumb">` with `<ol>/<li>` — correct markup.
- **Missing:** JSON-LD `BreadcrumbList` schema injection.
- Expected breadcrumb: Inicio > Blog > Temas > [Keyword]

#### 3. `/blog/autor/[slug]/page.tsx` (Author profile page)
- **Missing:** Both visual HTML breadcrumbs and JSON-LD `BreadcrumbList` schema.
- Expected breadcrumb: Inicio > Blog > Autores > [Author Name]

### Schema utility issue (minor)
- `BreadcrumbItem` interface in `src/lib/schemas.ts` requires a `url` for every item. Per Google docs, `item` (URL) is **not required** for the last element. The interface should make `url` optional to allow conforming to this.
- This is not a blocking issue (providing the URL for the last item is valid), but making it optional allows correct implementation where the last page omits its own URL.

---

## Requirements

### REQ-1: Add JSON-LD BreadcrumbList to Category page
- Inject `<JsonLd data={breadcrumbSchema} />` in `/blog/[category]/page.tsx`.
- Schema items: `[Inicio, Blog, CategoryLabel]`.
- The `JsonLd` component and `generateBreadcrumbSchema` are already available.

### REQ-2: Add JSON-LD BreadcrumbList to Topic Hub page
- Inject `<JsonLd data={breadcrumbSchema} />` in `/blog/temas/[keyword]/page.tsx`.
- Schema items: `[Inicio, Blog, Temas, OriginalKeyword]`.
- The last item (keyword hub) should include its URL.

### REQ-3: Add visual breadcrumbs and JSON-LD BreadcrumbList to Author page
- Add a visual HTML breadcrumb nav (`<nav aria-label="breadcrumb">`) to `/blog/autor/[slug]/page.tsx`, consistent with the pattern used in the category and temas pages.
- Inject `<JsonLd data={breadcrumbSchema} />`.
- Schema items: `[Inicio, Blog, Autores, AuthorName]`.
- URL for "Autores" item: `https://www.focus-on-english.com/blog` (there is no `/blog/autores` listing page, so linking back to Blog is appropriate).

### REQ-4: Make `url` optional on `BreadcrumbItem` interface (minor improvement)
- In `src/lib/schemas.ts`, update `BreadcrumbItem.url` to be `url?: string`.
- Update `generateBreadcrumbSchema` to only include `"item"` in the output when `url` is defined, so the last breadcrumb can omit its own URL.
- Callers that already pass a URL are unaffected.

---

## Out of Scope
- `/blog/page.tsx` (top-level blog listing) — no breadcrumb needed; it is a top-level section.
- Changing the visual breadcrumb design on existing pages.
- Any non-blog pages.

---

## Acceptance Criteria
1. All four blog page types (`/blog/[category]`, `/blog/temas/[keyword]`, `/blog/autor/[slug]`, `/blog/[category]/[slug]`) output a valid `BreadcrumbList` JSON-LD block.
2. The JSON-LD passes validation in Google's Rich Results Test.
3. The author page has a visible breadcrumb nav consistent in style with the category and temas pages.
4. TypeScript types remain correct and no lint errors are introduced.
