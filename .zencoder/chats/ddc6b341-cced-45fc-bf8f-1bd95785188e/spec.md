# Technical Specification: 404 Resolution & Content Macrostructure

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Content**: Markdown-based blog posts in `src/content/blog`
- **SEO Utilities**: `src/utils/seo-utils.ts`

## 2. Implementation Approach

### 2.1. Normalization Utility
Create a centralized `normalizeCategory` function in `src/lib/blog.ts` to ensure categories are treated consistently (lowercase, no accents, slugified) throughout the app.

```typescript
export function normalizeCategory(category: string): string {
  return category
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}
```

### 2.2. Fix Runtime Errors
- **Keyword Hub**: Update `src/app/blog/temas/[keyword]/page.tsx` to correctly define and use `originalKeyword` (or `decodedKeyword`).

### 2.3. Broken Links Audit & Fix
- Update `src/utils/seo-utils.ts` with valid URLs verified against `src/content/blog`.
- **Verified Links to add**:
    - `aprender-ingles-ia-guia` (metodos)
    - `ingles-para-viajar-guia` (seo/viajes)
    - `ingles-para-trabajo` (seo/trabajo)

### 2.4. Custom 404 Page
Create `src/app/not-found.tsx` using existing UI components (`Navigation`, `Button`) to provide a helpful fallback.

### 2.5. Sitemap & Route Consistency
- Update `src/app/sitemap.ts` to use the new `normalizeCategory` utility.
- Ensure `src/app/blog/[category]/page.tsx` and `src/app/blog/[category]/[slug]/page.tsx` use the same normalization logic to prevent "Category not found" errors when valid content exists.

## 3. Source Code Changes

| File | Change |
| --- | --- |
| `src/lib/blog.ts` | Add `normalizeCategory` and export it. |
| `src/app/blog/temas/[keyword]/page.tsx` | Fix undefined `decodedKeyword`. |
| `src/utils/seo-utils.ts` | Update `SEO_KEYWORD_LINKS` with valid existing paths. |
| `src/app/not-found.tsx` | **NEW**: Implement custom 404 page. |
| `src/app/sitemap.ts` | Use `normalizeCategory` for dynamic URLs. |
| `src/app/blog/[category]/page.tsx` | Use `normalizeCategory` for metadata and page data fetching. |

## 4. Delivery Phases

### Phase 1: Core Fixes & Utilities
1. Implement `normalizeCategory` in `lib/blog.ts`.
2. Fix `KeywordHubPage` runtime error.
3. Update `SEO_KEYWORD_LINKS`.

### Phase 2: Professional 404
1. Implement `src/app/not-found.tsx`.

### Phase 3: Route & Sitemap Unification
1. Update `sitemap.ts`.
2. Update `CategoryPage` and `BlogArticle` page logic to use unified normalization.

## 5. Verification Approach
- **Lint**: `npm run lint`
- **Manual Verification**:
    - Visit `/blog/temas/ingles-negocios` (or any valid tag).
    - Visit a non-existent URL to verify the new 404 page.
    - Check `/sitemap.xml` for valid URLs.
