# Technical Specification: Programmatic Phrases Hub

## 1. Technical Context
- **Framework**: Next.js 15 (App Router)
- **Database**: Supabase (PostgreSQL)
- **Styling**: Tailwind CSS + Framer Motion
- **Icons**: Lucide React
- **Audio**: Existing ElevenLabs/OpenAI integration pipeline

## 2. Data Model Changes

### 2.1 New Table: `seo_phrases`
To support programmatic SEO, we will create a dedicated table for phrases.

```sql
CREATE TABLE public.seo_phrases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phrase_en TEXT NOT NULL,
    phrase_es TEXT NOT NULL,
    category_slug TEXT NOT NULL, -- e.g., 'amor', 'instagram', 'viajes'
    tags TEXT[] DEFAULT '{}',    -- e.g., ['cortas', 'bonitas', 'motivadoras']
    audio_url TEXT,
    difficulty_level TEXT,       -- 'A1', 'A2', etc.
    usage_context TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Index for fast lookup by category
CREATE INDEX idx_seo_phrases_category ON public.seo_phrases(category_slug);
CREATE INDEX idx_seo_phrases_tags ON public.seo_phrases USING GIN(tags);

-- RLS
ALTER TABLE public.seo_phrases ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read seo_phrases" ON public.seo_phrases FOR SELECT USING (true);
```

### 2.2 New Table: `seo_phrase_categories`
To store metadata for each category page (title, description, FAQs).

```sql
CREATE TABLE public.seo_phrase_categories (
    slug TEXT PRIMARY KEY, -- 'amor', 'instagram'
    title TEXT NOT NULL,
    description TEXT,
    h1_title TEXT,
    content_top TEXT,     -- Markdown intro
    content_bottom TEXT,  -- Markdown outro
    faqs JSONB DEFAULT '[]'::jsonb,
    keywords TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS
ALTER TABLE public.seo_phrase_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public can read seo_phrase_categories" ON public.seo_phrase_categories FOR SELECT USING (true);
```

## 3. Architecture & Routing

### 3.1 Directory Structure
- `src/app/frases-en-ingles/page.tsx`: Index page (Hub).
- `src/app/frases-en-ingles/[slug]/page.tsx`: Dynamic category page.
- `src/components/seo/PhraseCard.tsx`: Individual phrase component.
- `src/components/seo/PhraseList.tsx`: Filterable list of phrases.

### 3.2 Metadata Strategy
Use `generateMetadata` in `[slug]/page.tsx` to fetch category data and generate SEO tags (Title, Description, Canonical).

## 4. Implementation Approach

### 4.1 Phase 1: Database Setup
1. Create migrations for `seo_phrases` and `seo_phrase_categories`.
2. Seed data for the initial 400 keywords (categorized).

### 4.2 Phase 2: Core Infrastructure
1. Implement a library utility `src/lib/phrases.ts` to fetch data from Supabase.
2. Create the base layout and hub page.

### 4.3 Phase 3: Dynamic Pages & Interactive UI
1. Build the dynamic `[slug]` page.
2. Implement `PhraseCard` with:
    - Audio playback logic (referencing `src/hooks/use-audio.ts` if available).
    - Copy-to-clipboard functionality using `navigator.clipboard`.
    - Framer motion animations for hover states.

### 4.4 Phase 4: Rich Snippets & Sitemap
1. Add `ItemList` and `FAQPage` JSON-LD to category pages.
2. Update `src/app/sitemap.ts` to include all categories from `seo_phrase_categories`.

## 5. Verification Plan
- **Linting**: `npm run lint`
- **Typecheck**: `npm run typecheck`
- **SEO Validation**: Check generated metadata and JSON-LD with Google Search Console helper or similar.
- **Functionality**: Verify audio playback and clipboard copy on mobile and desktop.
