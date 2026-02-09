import { createClient } from '../supabase/server';
import { GlobalContentProvider, IndexedInteraction } from './global-content-provider';
import { UserPerformanceRecord } from './adaptive';

export interface UltraSessionState {
  current_level: string;
  current_complexity: number;
  accuracy_streak: number;
  is_stuck: boolean;
  is_bored: boolean;
  avg_response_time_ms: number;
  selected_path: string;
}

export class UltraAdaptiveEngine {
  private static provider = GlobalContentProvider.getInstance();

  /**
   * Main entry point to get the next exercise for a user.
   */
  static async getNextExercise(userId: string): Promise<IndexedInteraction | null> {
    // 1. Ensure content is loaded
    await this.provider.loadAllContent();

    // 2. Fetch User State
    const state = await this.getUserState(userId);
    const srsDue = await this.getSRSDue(userId);
    const mastery = await this.getUserMastery(userId);

    // 3. Decision Logic
    
    const baseCriteria = {
      specialization: state.selected_path || 'generic'
    };

    // Priority 1: Stuck Remediation
    if (state.is_stuck) {
      // Find a simpler exercise for the same level but lower complexity
      const remediation = this.provider.findEligibleInteractions({
        ...baseCriteria,
        maxLevel: state.current_level,
        complexityRange: [1, Math.max(1, state.current_complexity - 1)]
      });
      if (remediation.length > 0) return this.pickRandom(remediation);
    }

    // Priority 2: Boredom Acceleration
    if (state.is_bored) {
      // Jump level or complexity
      const nextLevelMap: Record<string, string> = { 'A1': 'A2', 'A2': 'B1', 'B1': 'B2', 'B2': 'C1', 'C1': 'C2', 'C2': 'C2' };
      const targetLevel = nextLevelMap[state.current_level] || 'A1';
      
      const accelerated = this.provider.findEligibleInteractions({
        ...baseCriteria,
        maxLevel: targetLevel,
        complexityRange: [Math.min(4, state.current_complexity + 1), 4]
      });
      if (accelerated.length > 0) return this.pickRandom(accelerated);
    }

    // Priority 3: SRS (Spaced Repetition) Interleaving
    // 30% chance to inject an SRS item if available
    if (srsDue.length > 0 && Math.random() < 0.3) {
      const srsItem = this.pickRandom(srsDue);
      const interaction = this.provider.getInteractionById(srsItem.interaction_id);
      // Ensure SRS item matches path if possible
      if (interaction && (state.selected_path === 'all' || interaction.specialization === state.selected_path)) {
        return interaction;
      }
    }

    // Priority 4: Normal Progression
    // Focus on current level and complexity
    const eligible = this.provider.findEligibleInteractions({
      ...baseCriteria,
      maxLevel: state.current_level,
      complexityRange: [state.current_complexity, state.current_complexity]
    });

    if (eligible.length > 0) {
      // Avoid repeating exercises if possible (could implement a session history check here)
      return this.pickRandom(eligible);
    }

    // Fallback: Just give something from the current level
    const fallback = this.provider.findEligibleInteractions({
      ...baseCriteria,
      maxLevel: state.current_level
    });
    
    if (fallback.length > 0) return this.pickRandom(fallback);
    
    // Last resort fallback: anything from the provider
    return this.pickRandom(this.provider.findEligibleInteractions(baseCriteria));
  }

  /**
   * Processes the result of an interaction.
   */
  static async evaluateAnswer(
    userId: string,
    interactionId: string,
    isCorrect: boolean,
    responseTimeMs: number
  ): Promise<void> {
    const interaction = this.provider.getInteractionById(interactionId);
    if (!interaction) return;

    const supabase = await createClient();

    // 1. Update Mastery (Existing Supabase function)
    if (interaction.concept_tags && interaction.concept_tags.length > 0) {
      await supabase.rpc('update_concept_mastery', {
        p_user_id: userId,
        p_concept_tags: interaction.concept_tags,
        p_success: isCorrect
      });
    }

    // 2. Update SRS
    await supabase.rpc('update_srs_item', {
      p_user_id: userId,
      p_item_id: interactionId,
      p_quality: isCorrect ? 5 : 0 // Simplified quality for now
    });

    // 3. Update Ultra State
    await supabase.rpc('update_ultra_state', {
      p_user_id: userId,
      p_is_correct: isCorrect,
      p_response_time: responseTimeMs,
      p_complexity: interaction.complexity || 1,
      p_level: interaction.level
    });
  }

  private static async getUserState(userId: string): Promise<UltraSessionState> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('user_ultra_state')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (error || !data) {
      return {
        current_level: 'A1',
        current_complexity: 1,
        accuracy_streak: 0,
        is_stuck: false,
        is_bored: false,
        avg_response_time_ms: 0,
        selected_path: 'generic'
      };
    }

    return data as UltraSessionState;
  }

  private static async getSRSDue(userId: string): Promise<UserPerformanceRecord[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('user_srs')
      .select('item_id, last_quality, iterations, last_review_at, next_review_at')
      .eq('user_id', userId)
      .lte('next_review_at', new Date().toISOString());

    if (error || !data) return [];

    return (data as any[]).map((d: any) => ({
      interaction_id: d.item_id,
      quality: d.last_quality,
      iterations: d.iterations,
      last_review_at: new Date(d.last_review_at),
      next_review_at: new Date(d.next_review_at)
    }));
  }

  private static async getUserMastery(userId: string): Promise<any[]> {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('user_mastery')
      .select('*')
      .eq('user_id', userId);
    return data || [];
  }

  private static pickRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
