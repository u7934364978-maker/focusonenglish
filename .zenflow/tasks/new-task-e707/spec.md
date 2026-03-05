# Technical Specification: BreadcrumbList Structured Data for Blog Pages

## Technical Context

- **Language**: TypeScript 5.7.2
- **Framework**: Next.js 15 (App Router, RSC)
- **Relevant files**:
  - `src/lib/schemas.ts` — Schema generation utilities
  - `src/components/seo/JsonLd.tsx` — JSON-LD injection component
  - `src/app/blog/[category]/page.tsx` — Category listing page
  - `src/app/blog/temas/[keyword]/page.tsx` — Topic/keyword hub page
  - `src/app/blog/autor/[slug]/page.tsx` — Author profile page
  - `src/app/blog/[category]/[slug]/page.tsx` — Article detail page (reference implementation, already correct)

---

## Existing Patterns

### JSON-LD injection (reference: article detail page)
```tsx
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "https://www.focus-on-english.com" },
  { name: "Blog",   url: "https://www.focus-on-english.com/blog" },
  { name: categoryLabel, url: `https://www.focus-on-english.com/blog/${category}` },
  { name: article.title, url: `https://www.focus-on-english.com/blog/${category}/${slug}` },
]);

// Injected inside the JSX return:
<JsonLd data={breadcrumbSchema} />
```

### Visual breadcrumb (reference: category and temas pages)
```tsx
<nav className="mb-12" aria-label="breadcrumb">
  <ol className="flex items-center gap-2 text-sm text-white/70">
    <li><Link href="/" className="hover:text-white transition-colors">Inicio</Link></li>
    <li>›</li>
    <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
    <li>›</li>
    <li className="font-semibold text-white">{label}</li>
  </ol>
</nav>
```

---

## Implementation Approach

### Change 1 — `src/lib/schemas.ts`: Make `BreadcrumbItem.url` optional

**Why**: Google docs state `item` (URL) is not required for the last breadcrumb element. Making it optional allows correct omission on the final item without breaking existing callers that already pass a URL.

```ts
// Before
export interface BreadcrumbItem {
  name: string;
  url: string;
}

// After
export interface BreadcrumbItem {
  name: string;
  url?: string;
}
```

Update `generateBreadcrumbSchema` to conditionally include `"item"`:

```ts
export function generateBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      ...(item.url !== undefined && { "item": item.url }),
    })),
  };
}
```

**Backward compatibility**: All existing callers pass a URL, so no call sites break.

---

### Change 2 — `src/app/blog/[category]/page.tsx`: Add JSON-LD

Add imports:
```tsx
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
```

Inside `CategoryPage`, before the `return`, generate the schema using the category `meta.name` (same text shown in the visual breadcrumb):
```tsx
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "https://www.focus-on-english.com" },
  { name: "Blog",   url: "https://www.focus-on-english.com/blog" },
  { name: meta.name, url: `https://www.focus-on-english.com/blog/${category}` },
]);
```

Inject inside the JSX fragment (`<>...</>`), alongside `<Navigation />`:
```tsx
<JsonLd data={breadcrumbSchema} />
```

---

### Change 3 — `src/app/blog/temas/[keyword]/page.tsx`: Add JSON-LD

Add imports:
```tsx
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
```

Inside `KeywordHubPage`, before the `return`:
```tsx
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio", url: "https://www.focus-on-english.com" },
  { name: "Blog",   url: "https://www.focus-on-english.com/blog" },
  { name: "Temas",  url: "https://www.focus-on-english.com/blog" },
  { name: originalKeyword, url: `https://www.focus-on-english.com/blog/temas/${keyword}` },
]);
```

> Note: There is no `/blog/temas` listing page, so the "Temas" item links back to `/blog` — consistent with what the requirements specify for similar situations.

Inject `<JsonLd data={breadcrumbSchema} />` in the JSX.

---

### Change 4 — `src/app/blog/autor/[slug]/page.tsx`: Add visual breadcrumbs + JSON-LD

Add imports:
```tsx
import { generateBreadcrumbSchema } from "@/lib/schemas";
import { JsonLd } from "@/components/seo/JsonLd";
```

Inside `AuthorPage`, before the `return`:
```tsx
const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Inicio",  url: "https://www.focus-on-english.com" },
  { name: "Blog",    url: "https://www.focus-on-english.com/blog" },
  { name: "Autores", url: "https://www.focus-on-english.com/blog" },
  { name: author.name, url: `https://www.focus-on-english.com/blog/autor/${slug}` },
]);
```

> Note: There is no `/blog/autores` listing page, so "Autores" links back to `/blog`.

Add a visual breadcrumb nav inside the `<main>` container, before the author profile section. The author page has a white background (`bg-slate-50`) and no hero gradient, so the breadcrumb should use slate text colors instead of the white-on-gradient style used on category/temas pages:

```tsx
<nav className="mb-8" aria-label="breadcrumb">
  <ol className="flex items-center gap-2 text-sm text-slate-500">
    <li><Link href="/" className="hover:text-coral-600 transition-colors">Inicio</Link></li>
    <li>›</li>
    <li><Link href="/blog" className="hover:text-coral-600 transition-colors">Blog</Link></li>
    <li>›</li>
    <li className="font-semibold text-slate-700">Autores</li>
    <li>›</li>
    <li className="font-semibold text-slate-700">{author.name}</li>
  </ol>
</nav>
```

Inject `<JsonLd data={breadcrumbSchema} />` in the JSX.

---

## Source Code Structure Changes

| File | Change type |
|---|---|
| `src/lib/schemas.ts` | Modify — make `BreadcrumbItem.url` optional; update `generateBreadcrumbSchema` |
| `src/app/blog/[category]/page.tsx` | Modify — add imports + JSON-LD |
| `src/app/blog/temas/[keyword]/page.tsx` | Modify — add imports + JSON-LD |
| `src/app/blog/autor/[slug]/page.tsx` | Modify — add imports + visual breadcrumb + JSON-LD |

No new files required.

---

## Data Model / Interface Changes

```ts
// src/lib/schemas.ts

// BreadcrumbItem: url is now optional
export interface BreadcrumbItem {
  name: string;
  url?: string;  // was: url: string
}
```

The `generateBreadcrumbSchema` function output changes only for items where `url` is `undefined` — those items will omit the `"item"` key in the JSON-LD output.

---

## Delivery Phases

### Phase 1 — Schema utility update (no risk, no UI change)
1. Update `BreadcrumbItem.url` to `url?: string` in `src/lib/schemas.ts`.
2. Update `generateBreadcrumbSchema` to conditionally output `"item"`.
3. Verify existing callers compile without errors.

### Phase 2 — Add JSON-LD to category and temas pages
1. Add imports + breadcrumb schema generation + `<JsonLd>` injection to `/blog/[category]/page.tsx`.
2. Add imports + breadcrumb schema generation + `<JsonLd>` injection to `/blog/temas/[keyword]/page.tsx`.

### Phase 3 — Add visual breadcrumbs + JSON-LD to author page
1. Add visual breadcrumb `<nav>` to `/blog/autor/[slug]/page.tsx`.
2. Add imports + breadcrumb schema generation + `<JsonLd>` injection.

---

## Verification Approach

```bash
# Type check
npm run build

# Lint
npx eslint src/lib/schemas.ts src/app/blog/[category]/page.tsx src/app/blog/temas/\[keyword\]/page.tsx src/app/blog/autor/\[slug\]/page.tsx
```

Manual validation:
- Open each page in local dev (`npm run dev`) and inspect `<head>` for `<script type="application/ld+json">` tags.
- Validate JSON-LD output using [Google's Rich Results Test](https://search.google.com/test/rich-results).
- Confirm author page displays the breadcrumb nav visually before the profile section.
