import { supabase as defaultClient } from '@/lib/supabase/client';
import { z } from 'zod';
import { SupabaseClient } from '@supabase/supabase-js';

// ============================================
// SCHEMAS & TYPES
// ============================================

export const PhraseCategorySchema = z.object({
  slug: z.string(),
  title: z.string(),
  description: z.string().nullable().transform(val => val || ''),
  h1_title: z.string().nullable().transform(val => val || ''),
  content_top: z.string().nullable().transform(val => val || ''),
  content_bottom: z.string().nullable().transform(val => val || ''),
  faqs: z.array(z.object({
    question: z.string(),
    answer: z.string(),
  })).nullable().default([]),
  keywords: z.array(z.string()).nullable().default([]),
});

export const PhraseSchema = z.object({
  id: z.string(),
  phrase_en: z.string(),
  phrase_es: z.string(),
  category_slug: z.string(),
  tags: z.array(z.string()).nullable().default([]),
  audio_url: z.string().nullable(),
  difficulty_level: z.string().nullable(),
  usage_context: z.string().nullable(),
  order_index: z.number(),
});

export type PhraseCategory = z.infer<typeof PhraseCategorySchema>;
export type Phrase = z.infer<typeof PhraseSchema>;

// ============================================
// CACHE (Optional, but good for performance)
// ============================================

const cache = new Map<string, { data: any, timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 15; // 15 minutes

function getCached<T>(key: string): T | null {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data as T;
  }
  return null;
}

function setCache(key: string, data: any): void {
  cache.set(key, { data, timestamp: Date.now() });
}

// ============================================
// DATA ACCESS FUNCTIONS
// ============================================

export const phraseService = {
  /**
   * Get all categories with basic metadata for the Hub index
   */
  async getAllCategories(client?: SupabaseClient): Promise<PhraseCategory[]> {
    const supabase = client || defaultClient;
    const cacheKey = 'phrase-categories-all';
    const cached = getCached<PhraseCategory[]>(cacheKey);
    if (cached) return cached;

    const { data, error } = await supabase
      .from('seo_phrase_categories')
      .select('*')
      .order('title', { ascending: true });

    if (error) {
      console.error('[phraseService] Error fetching categories:', error);
      return [];
    }

    const result = (data || []).map(cat => PhraseCategorySchema.parse(cat));
    setCache(cacheKey, result);
    return result;
  },

  /**
   * Get a specific category by slug
   */
  async getCategoryBySlug(slug: string, client?: SupabaseClient): Promise<PhraseCategory | null> {
    const supabase = client || defaultClient;
    const cacheKey = `phrase-category-${slug}`;
    const cached = getCached<PhraseCategory>(cacheKey);
    if (cached) return cached;

    const { data, error } = await supabase
      .from('seo_phrase_categories')
      .select('*')
      .eq('slug', slug)
      .maybeSingle();

    if (error) {
      console.error(`[phraseService] Error fetching category ${slug}:`, error);
      return null;
    }

    if (!data) return null;

    const result = PhraseCategorySchema.parse(data);
    setCache(cacheKey, result);
    return result;
  },

  /**
   * Get phrases for a specific category
   */
  async getPhrasesByCategory(slug: string, client?: SupabaseClient): Promise<Phrase[]> {
    const supabase = client || defaultClient;
    const cacheKey = `phrases-by-category-${slug}`;
    const cached = getCached<Phrase[]>(cacheKey);
    if (cached) return cached;

    const { data, error } = await supabase
      .from('seo_phrases')
      .select('*')
      .eq('category_slug', slug)
      .order('order_index', { ascending: true })
      .order('created_at', { ascending: true });

    if (error) {
      console.error(`[phraseService] Error fetching phrases for category ${slug}:`, error);
      return [];
    }

    const result = (data || []).map(phrase => PhraseSchema.parse(phrase));
    setCache(cacheKey, result);
    return result;
  }
};
