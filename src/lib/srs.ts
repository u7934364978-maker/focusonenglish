import { supabase } from '@/lib/supabase-client';

export interface SRSItem {
  id?: string;
  user_id: string;
  item_id: string;
  item_type: 'vocabulary' | 'grammar' | 'phrase';
  content: any;
  iterations: number;
  interval: number;
  easiness_factor: number;
  last_review_at?: string;
  next_review_at?: string;
}

/**
 * Updates an SRS item based on user performance.
 * Quality: 0-5 (0=again, 3=hard, 4=good, 5=easy)
 */
export async function updateSRSItem(itemId: string, itemType: string, content: any, quality: number) {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return { success: false, error: 'User not authenticated' };

    // First ensure the item exists with content (for rendering in future reviews)
    const { data: existing } = await supabase
      .from('user_srs')
      .select('id')
      .eq('user_id', user.id)
      .eq('item_id', itemId)
      .single();

    if (!existing) {
      await supabase.from('user_srs').insert({
        user_id: user.id,
        item_id: itemId,
        item_type: itemType,
        content: content,
        next_review_at: new Date().toISOString()
      });
    }

    // Call the stored procedure for SM-2 logic
    const { data, error } = await supabase.rpc('update_srs_item', {
      p_user_id: user.id,
      p_item_id: itemId,
      p_quality: quality
    });

    if (error) throw error;
    return { success: true, data };
  } catch (error) {
    console.error('Error in updateSRSItem:', error);
    return { success: false, error };
  }
}

/**
 * Fetches items due for review today.
 */
export async function getDueSRSItems() {
  try {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return [];

    const { data, error } = await supabase
      .from('user_srs')
      .select('*')
      .eq('user_id', user.id)
      .lte('next_review_at', new Date().toISOString())
      .order('next_review_at', { ascending: true });

    if (error) throw error;
    return data as SRSItem[];
  } catch (error) {
    console.error('Error fetching due SRS items:', error);
    return [];
  }
}
