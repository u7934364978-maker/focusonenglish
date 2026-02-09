import { premiumCourseServerService, CourseLevel } from '../services/premium-course-service.server';
import { Interaction } from './schema';

export type IndexedInteraction = Interaction & {
  level: string;
  unit_id?: string;
  unit_order?: number;
};

export class GlobalContentProvider {
  private static instance: GlobalContentProvider;
  private interactions: IndexedInteraction[] = [];
  private isLoaded = false;

  private constructor() {}

  static getInstance(): GlobalContentProvider {
    if (!GlobalContentProvider.instance) {
      GlobalContentProvider.instance = new GlobalContentProvider();
    }
    return GlobalContentProvider.instance;
  }

  /**
   * Loads all interactions from all available courses into memory.
   * In a production environment with thousands of exercises, this could be
   * replaced by a database query or a search index like Meilisearch/Elasticsearch.
   */
  async loadAllContent(): Promise<void> {
    if (this.isLoaded) return;

    const levels: CourseLevel[] = [
      'ingles-a1',
      'ingles-a2',
      'ingles-b1',
      'ingles-b2',
      'ingles-c1',
      'ingles-c2',
      'emails-b1'
    ];

    console.log('🚀 Loading global content for ultra-intelligent algorithm...');

    const loadingPromises = levels.map(async (level) => {
      try {
        const levelInteractions = await premiumCourseServerService.getAllInteractions(level);
        const cefrLevel = level.replace('ingles-', '').toUpperCase();
        
        return levelInteractions.map(i => ({
          ...i,
          level: cefrLevel,
        } as IndexedInteraction));
      } catch (error) {
        console.error(`Failed to load content for level ${level}:`, error);
        return [];
      }
    });

    const results = await Promise.all(loadingPromises);
    this.interactions = results.flat();
    this.isLoaded = true;

    console.log(`✅ Loaded ${this.interactions.length} interactions across all levels.`);
  }

  getAllInteractions(): IndexedInteraction[] {
    return this.interactions;
  }

  getInteractionsByLevel(level: string): IndexedInteraction[] {
    return this.interactions.filter(i => i.level === level);
  }

  getInteractionById(id: string): IndexedInteraction | undefined {
    return this.interactions.find(i => i.interaction_id === id);
  }

  /**
   * Filters interactions based on multiple criteria for the adaptive engine.
   */
  findEligibleInteractions(criteria: {
    maxLevel?: string;
    skills?: string[];
    complexityRange?: [number, number];
    tags?: string[];
  }): IndexedInteraction[] {
    const { maxLevel, skills, complexityRange, tags } = criteria;
    
    const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const maxLevelIdx = maxLevel ? levelOrder.indexOf(maxLevel) : levelOrder.length - 1;

    return this.interactions.filter(i => {
      // 1. Level check
      const iLevelIdx = levelOrder.indexOf(i.level);
      if (maxLevelIdx !== -1 && iLevelIdx > maxLevelIdx) return false;

      // 2. Skill check
      if (skills && skills.length > 0) {
        const interactionSkill = i.concept_tags?.find(t => skills.includes(t));
        if (!interactionSkill) return false;
      }

      // 3. Complexity check
      if (complexityRange) {
        const complexity = i.complexity || 1;
        if (complexity < complexityRange[0] || complexity > complexityRange[1]) return false;
      }

      // 4. Tags check
      if (tags && tags.length > 0) {
        const hasTag = i.concept_tags?.some(t => tags.includes(t));
        if (!hasTag) return false;
      }

      return true;
    });
  }
}
