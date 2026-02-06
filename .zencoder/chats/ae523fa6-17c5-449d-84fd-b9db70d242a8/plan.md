# Implementation Plan - SEO Indexing Fix

## Phase 1: Internal Linking Boost
- [x] Add category links to Homepage "Elige Tu Camino" cards.
- [x] Add category links to Homepage "Blog Preview" section header.
- [x] Add category links to Footer.

## Phase 2: Sitemap & Metadata Polish
- [x] Review and adjust priorities in `src/app/sitemap.ts`.
- [x] Verify `categoryMetadata` in `src/app/blog/[category]/page.tsx`.

## Phase 3: Verification
- [x] Run `npm run lint`.
- [ ] Run `npm run build` to verify sitemap generation.
- [x] Manual check of links.

## Tasks
1. **Modify `src/app/page.tsx`**: Add category links to the 3 main course cards and the blog preview header.
2. **Modify `src/components/sections/Footer.tsx`**: Add a list of blog categories.
3. **Modify `src/app/sitemap.ts`**: Update category priority to 0.8.
4. **Final check and linting**.
