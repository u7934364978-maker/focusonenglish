-- Migration: Create SEO Phrases Hub tables
-- Description: Tables for programmatic SEO hub "Frases en Inglés"

-- 1. Table: seo_phrase_categories
CREATE TABLE IF NOT EXISTS public.seo_phrase_categories (
    slug TEXT PRIMARY KEY, -- 'amor', 'instagram', 'viajes'
    title TEXT NOT NULL,
    description TEXT,
    h1_title TEXT,
    content_top TEXT,     -- Markdown intro
    content_bottom TEXT,  -- Markdown outro
    faqs JSONB DEFAULT '[]'::jsonb,
    keywords TEXT[] DEFAULT '{}',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Table: seo_phrases
CREATE TABLE IF NOT EXISTS public.seo_phrases (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    phrase_en TEXT NOT NULL,
    phrase_es TEXT NOT NULL,
    category_slug TEXT REFERENCES public.seo_phrase_categories(slug) ON DELETE CASCADE,
    tags TEXT[] DEFAULT '{}',    -- ['cortas', 'bonitas', 'motivadoras']
    audio_url TEXT,
    difficulty_level TEXT,       -- 'A1', 'A2', etc.
    usage_context TEXT,
    order_index INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Indices
CREATE INDEX IF NOT EXISTS idx_seo_phrases_category ON public.seo_phrases(category_slug);
CREATE INDEX IF NOT EXISTS idx_seo_phrases_tags ON public.seo_phrases USING GIN(tags);

-- Enable RLS
ALTER TABLE public.seo_phrase_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.seo_phrases ENABLE ROW LEVEL SECURITY;

-- RLS Policies
DROP POLICY IF EXISTS "Public can read seo_phrase_categories" ON public.seo_phrase_categories;
CREATE POLICY "Public can read seo_phrase_categories" ON public.seo_phrase_categories FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public can read seo_phrases" ON public.seo_phrases;
CREATE POLICY "Public can read seo_phrases" ON public.seo_phrases FOR SELECT USING (true);
