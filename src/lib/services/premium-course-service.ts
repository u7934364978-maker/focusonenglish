import { supabase } from '@/lib/supabase/client';
import { UnitData, PremiumInteraction, PremiumBlock } from '@/types/premium-course';
import { UserPerformanceRecord } from '../course-engine/adaptive';

export type CourseLevel = 'ingles-a1' | 'ingles-a2' | 'ingles-b1' | 'ingles-b2' | 'ingles-c1' | 'ingles-c2' | 'emails-b1';

export const premiumCourseService = {
  /**
   * Fetches the list of interaction IDs completed by the user.
   * This is client-safe as it only uses the Supabase client.
   */
  async getProgress(userId: string, level: string): Promise<string[]> {
    if (!supabase || !userId || userId === 'anonymous') return [];

    const { data, error } = await supabase
      .from('user_interaction_progress')
      .select('interaction_id')
      .eq('user_id', userId);

    if (error) {
      console.error(`Error fetching ${level} progress:`, error);
      return [];
    }

    return data.map(item => item.interaction_id);
  },

  /**
   * Fetches SRS performance data for a set of interactions.
   */
  async getSRSPerformance(userId: string, interactionIds: string[]): Promise<UserPerformanceRecord[]> {
    if (!supabase || !userId || userId === 'anonymous' || interactionIds.length === 0) return [];

    const { data, error } = await supabase
      .from('user_srs')
      .select('*')
      .eq('user_id', userId)
      .in('item_id', interactionIds);

    if (error) {
      console.error(`Error fetching SRS performance:`, error);
      return [];
    }

    return data.map(item => ({
      interaction_id: item.item_id,
      quality: item.last_quality || 0,
      last_review_at: new Date(item.last_review_at),
      next_review_at: new Date(item.next_review_at),
      iterations: item.iterations
    }));
  },

  /**
   * Updates SRS performance for an interaction.
   */
  async updateSRS(userId: string, interactionId: string, quality: number): Promise<boolean> {
    if (!supabase || !userId || userId === 'anonymous') return false;

    const { error } = await supabase.rpc('update_srs_item', {
      p_user_id: userId,
      p_item_id: interactionId,
      p_quality: quality
    });

    if (error) {
      console.error(`Error updating SRS for ${interactionId}:`, error);
      return false;
    }

    return true;
  },

  async getA1Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'A1');
  },

  async getA2Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'A2');
  },

  async getB1Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'B1');
  },

  async getB2Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'B2');
  },

  async getC1Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'C1');
  },

  async getC2Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'C2');
  },

  async getEmailsB1Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'EMAILS-B1');
  },

  /**
   * Saves progress for a specific interaction.
   * This is client-safe as it only uses the Supabase client.
   */
  async saveInteractionProgress(userId: string, interactionId: string): Promise<boolean> {
    if (!supabase || !userId || userId === 'anonymous') return false;

    const { error } = await supabase
      .from('user_interaction_progress')
      .upsert({
        user_id: userId,
        interaction_id: interactionId,
        completed: true,
        completed_at: new Date().toISOString()
      }, {
        onConflict: 'user_id,interaction_id'
      });

    if (error) {
      console.error(`Error saving progress for ${interactionId}:`, error);
      return false;
    }

    return true;
  }
};
