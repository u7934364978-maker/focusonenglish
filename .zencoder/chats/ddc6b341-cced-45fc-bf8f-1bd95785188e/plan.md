# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification

### [x] Step: Planning

Create a detailed implementation plan based on `/Users/lidia/Documents/focusonenglish/focusonenglish/.zencoder/chats/ddc6b341-cced-45fc-bf8f-1bd95785188e/spec.md`.

1. Break down the work into concrete tasks
2. Each task should reference relevant contracts and include verification steps
3. Replace the Implementation step below with the planned tasks

### [ ] Step: Implementation

#### Phase 1: Core Fixes & Utilities
- [x] **Task 1: Implement `normalizeCategory` in `src/lib/blog.ts`**
  - Create the utility to unify category handling (lowercase, NFD normalization).
  - Verification: Manual check of exported function.
- [x] **Task 2: Fix runtime error in `src/app/blog/temas/[keyword]/page.tsx`**
  - Replace `decodedKeyword` with correctly defined variable from params.
  - Verification: Access a keyword hub page and ensure it loads.
- [x] **Task 3: Update `SEO_KEYWORD_LINKS` in `src/utils/seo-utils.ts`**
  - Audit links against `src/content/blog` and fix broken paths.
  - Verification: Check that links point to existing markdown files.

#### Phase 2: Professional 404
- [x] **Task 4: Implement `src/app/not-found.tsx`**
  - Create a custom 404 page using `Navigation` and `Button` components.
  - Verification: Visit `/this-path-does-not-exist` and see the new page.

#### Phase 3: Route & Sitemap Unification
- [x] **Task 5: Update `src/app/sitemap.ts`**
  - Apply `normalizeCategory` to all dynamic blog and category URLs.
  - Verification: Check `/sitemap.xml` (local development) or sitemap object.
- [x] **Task 6: Update `src/app/blog/[category]/page.tsx`**
  - Use `normalizeCategory` for both `generateMetadata` and the main component.
  - Verification: Visit category pages with and without accents (e.g., `/blog/metodos`).
- [x] **Task 7: Update `src/app/blog/[category]/[slug]/page.tsx`**
  - Ensure canonical URLs and breadcrumbs use the normalized category.
  - Verification: Check canonical tag in head of an article page.

#### Phase 4: Content Macrostructure & Authority
- [x] **Task 8: Fix broken internal hub links in content**
  - Replaced `/blog/gramatica` with `/blog/temas/gramatica-inglesa` and `/blog/habilidades` with `/blog/metodos`.
- [x] **Task 9: Implement Dynamic Topic Cluster component**
  - Created `TopicClusterLinks` and integrated it into the article page.
- [x] **Task 10: Configure 301 Redirects for Authority**
  - Added redirects in `next.config.js` to preserve equity of old hub URLs.

#### Final Review
- [x] **Task 11: Run final verification and linting**
  - Run `npm run lint` and verify no regressions in blog routing.

