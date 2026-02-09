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
  static async getNextExercise(userId: string, forcedLevel?: string): Promise<IndexedInteraction | null> {
    // 1. Ensure content is loaded
    await this.provider.loadAllContent();

    // 2. Fetch User State
    const state = await this.getUserState(userId);
    const srsDue = await this.getSRSDue(userId);
    const mastery = await this.getUserMastery(userId);

    // 3. Decision Logic
    const currentLevel = forcedLevel || state.current_level;
    
    const baseCriteria = {
      specialization: state.selected_path || 'generic'
    };

    // Priority 1: Stuck Remediation (only if not forcing a level)
    if (state.is_stuck && !forcedLevel) {
      // Find a simpler exercise for the same level but lower complexity
      const remediation = this.provider.findEligibleInteractions({
        ...baseCriteria,
        maxLevel: currentLevel,
        complexityRange: [1, Math.max(1, state.current_complexity - 1)]
      });
      if (remediation.length > 0) return this.pickRandom(remediation);
    }

    // Priority 2: Boredom Acceleration (only if not forcing a level)
    if (state.is_bored && !forcedLevel) {
      // Jump level or complexity
      const nextLevelMap: Record<string, string> = { 'A1': 'A2', 'A2': 'B1', 'B1': 'B2', 'B2': 'C1', 'C1': 'C2', 'C2': 'C2' };
      const targetLevel = nextLevelMap[currentLevel] || 'A1';
      
      const accelerated = this.provider.findEligibleInteractions({
        ...baseCriteria,
        maxLevel: targetLevel,
        complexityRange: [Math.min(4, state.current_complexity + 1), 4]
      });
      if (accelerated.length > 0) return this.pickRandom(accelerated);
    }

    // Priority 3: SRS (Spaced Repetition) Interleaving
    // 30% chance to inject an SRS item if available (only if it matches forced level or no level forced)
    if (srsDue.length > 0 && Math.random() < 0.3) {
      const srsItem = this.pickRandom(srsDue);
      const interaction = this.provider.getInteractionById(srsItem.interaction_id);
      // Ensure SRS item matches path and level if possible
      if (interaction && (state.selected_path === 'all' || interaction.specialization === state.selected_path)) {
        if (!forcedLevel || interaction.level === forcedLevel) {
          return interaction;
        }
      }
    }

    // Priority 4: Normal Progression
    // Focus on current level and complexity
    const eligible = this.provider.findEligibleInteractions({
      ...baseCriteria,
      maxLevel: currentLevel,
      complexityRange: forcedLevel ? undefined : [state.current_complexity, state.current_complexity]
    });

    if (eligible.length > 0) {
      // Avoid repeating exercises if possible (could implement a session history check here)
      // Filter for exact level match if forced
      const exactMatch = forcedLevel ? eligible.filter(i => i.level === forcedLevel) : eligible;
      return this.pickRandom(exactMatch.length > 0 ? exactMatch : eligible);
    }

    // Fallback: Just give something from the current level
    const fallback = this.provider.findEligibleInteractions({
      ...baseCriteria,
      maxLevel: currentLevel
    });
    
    if (fallback.length > 0) {
      const exactFallback = forcedLevel ? fallback.filter(i => i.level === forcedLevel) : fallback;
      return this.pickRandom(exactFallback.length > 0 ? exactFallback : fallback);
    }
    
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

    try {
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
    } catch (e) {
      console.warn("Could not update state in DB (expected in dev without DB):", e);
    }
  }

  private static async getUserState(userId: string): Promise<UltraSessionState> {
    const isTest = process.env.NODE_ENV === 'development' || userId === 'test-user-id';
    
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from('user_ultra_state')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (error || !data) throw error;
      return data as UltraSessionState;
    } catch (e) {
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
  }

  private static async getSRSDue(userId: string): Promise<UserPerformanceRecord[]> {
    try {
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
    } catch (e) {
      return [];
    }
  }

  private static async getUserMastery(userId: string): Promise<any[]> {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase
        .from('user_mastery')
        .select('*')
        .eq('user_id', userId);
      return data || [];
    } catch (e) {
      return [];
    }
  }

  private static pickRandom<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
  }
}
