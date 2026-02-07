# Product Requirements Document (PRD): Fix 404s & Content Macrostructure

## 1. Overview
The goal of this project is to eliminate 404 errors across the Focus English website and implement a robust content macrostructure to improve domain authority and SEO.

## 2. Problem Statement
- Users and search engines encounter 404 errors due to broken internal links and incorrect routing.
- Content is not perfectly siloed, which dilutes domain authority.
- Inconsistent URL normalization leads to duplicate content risks or broken links.
- Runtime errors in dynamic pages (Keyword Hubs) disrupt user experience.

## 3. Goals
- [ ] 0 broken internal links in blog posts and SEO utilities.
- [ ] Consistent category normalization across the entire site.
- [ ] Professional 404 handling with a custom `not-found.tsx`.
- [ ] Improved internal linking for better Topic Cluster "link juice" flow.

## 4. Identified Issues & Tasks
### 4.1. Broken Links in SEO Utilities
- **Issue**: `src/utils/seo-utils.ts` contains hardcoded links to non-existent files.
- **Task**: Audit and update `SEO_KEYWORD_LINKS` to point to valid existing content.

### 4.2. Runtime Error in Keyword Hubs
- **Issue**: `src/app/blog/temas/[keyword]/page.tsx` uses an undefined variable `decodedKeyword`.
- **Task**: Fix the variable reference.

### 4.3. Inconsistent Normalization
- **Issue**: `sitemap.ts`, `[category]/page.tsx`, and `lib/blog.ts` handle categories inconsistently (accents, casing).
- **Task**: Implement a `normalizeCategory` utility and use it consistently in sitemaps and dynamic routes.

### 4.4. Missing 404 Handling
- **Issue**: No custom `not-found.tsx` page.
- **Task**: Create a user-friendly 404 page that encourages exploration of valid content.

### 4.5. Content Macrostructure (Siloing)
- **Issue**: Internal links in Markdown files are sometimes redundant or broken.
- **Task**: Ensure every article links to its respective Pillar Page (Category Hub) and improve the `SEOInterlinking` component if necessary.

## 5. Success Criteria
- [ ] No runtime errors when visiting blog or keyword hub pages.
- [ ] Sitemap URLs match actual accessible routes.
- [ ] A custom 404 page is visible when navigating to a non-existent route.
