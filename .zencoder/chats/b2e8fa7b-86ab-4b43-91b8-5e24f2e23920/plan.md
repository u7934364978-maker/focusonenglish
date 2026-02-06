# Full SDD workflow

## Workflow Steps

### [x] Step: Requirements
### [x] Step: Technical Specification
### [x] Step: Planning

## Implementation Plan

### Phase 1: Database & Data Setup
- [x] **Task 1: Create Supabase Migrations**
    - Create `seo_phrases` and `seo_phrase_categories` tables with RLS policies.
    - *Verification*: Run migration and check table existence in Supabase dashboard or via CLI.
- [x] **Task 2: Seed Initial Category Metadata**
    - Insert metadata for core categories (Amor, Instagram, Viajes, etc.) into `seo_phrase_categories`.
    - *Verification*: `SELECT * FROM seo_phrase_categories;`
- [x] **Task 3: Seed Phrase Data**
    - Insert a sample set of phrases into `seo_phrases` to test the categorization and display.
    - *Verification*: `SELECT count(*) FROM seo_phrases;`

### Phase 2: Core Infrastructure
- [x] **Task 4: Implement Data Access Library**
    - Create `src/lib/phrases.ts` with functions to fetch phrases by category and category metadata.
    - *Verification*: Import and test in a temporary script or component.
- [x] **Task 5: Create Hub Index Page**
    - Implement `/src/app/frases-en-ingles/page.tsx` showing the category grid.
    - *Verification*: Navigate to `/frases-en-ingles` and verify layout.

### Phase 3: Dynamic Category Pages & UI
- [x] **Task 6: Build PhraseCard Component**
    - Create `src/components/seo/PhraseCard.tsx` with Audio and Copy functionality.
    - *Verification*: Test click interactions and clipboard content.
- [x] **Task 7: Build Dynamic Category Page**
    - Implement `/src/app/frases-en-ingles/[slug]/page.tsx` with metadata generation and phrase listing.
    - *Verification*: Navigate to `/frases-en-ingles/amor` and check title/content.

### Phase 4: SEO & Final Polish
- [x] **Task 8: Implement JSON-LD Rich Snippets**
    - Add `ItemList` and `FAQPage` schema to category pages.
    - *Verification*: Inspect source code for correct script tags.
- [x] **Task 9: Update Sitemap**
    - Integrate phrases categories into `src/app/sitemap.ts`.
    - *Verification*: Check `/sitemap.xml` output.
- [x] **Task 10: Final Quality Check**
    - Run `npm run lint` and `npm run typecheck`.
    - *Verification*: Zero errors in console.

### Phase 5: Scaling & Authority
- [x] **Task 11: Content Population**
    - Script to process the keyword list and insert real phrase data into Supabase.
    - *Verification*: `SELECT count(*) FROM seo_phrases;` should show hundreds of entries.
- [x] **Task 12: Internal Linking Strategy**
    - Add the Hub link to the site's Footer and main navigation.
    - *Verification*: Verify links are visible and functional across the site.
- [x] **Task 13: SSG Optimization**
    - Implement `generateStaticParams` in the dynamic routes for maximum speed.
    - *Verification*: `npm run build` output shows static generation for phrase categories.
