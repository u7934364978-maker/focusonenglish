import { premiumCourseServerService, CourseLevel } from '../services/premium-course-service.server';
import { Interaction } from './schema';
import { A1_KIDS_EXERCISES } from '../a1-visual-exercises';

export type IndexedInteraction = Interaction & {
  level: string;
  unit_id?: string;
  unit_order?: number;
  specialization?: 'generic' | 'finance' | 'it' | 'emails' | 'travel';
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

    const levels: string[] = [
      'ingles-a1',
      'ingles-a2',
      'ingles-b1',
      'ingles-b2',
      'ingles-c1',
      'ingles-c2',
      'emails-b1',
      'negociaciones-b2',
      'viajes/a1'
    ];

    console.log('🚀 Loading global content for ultra-intelligent algorithm...');

    const loadingPromises = levels.map(async (levelPath) => {
      try {
        const levelInteractions = await premiumCourseServerService.getAllInteractions(levelPath as any);
        
        // Extract CEFR level from path (e.g., 'ingles-a1' -> 'A1', 'viajes/a1' -> 'A1')
        let cefrLevel = 'A1';
        const levelMatch = levelPath.match(/[a-c][1-2]/i);
        if (levelMatch) cefrLevel = levelMatch[0].toUpperCase();
        
        return levelInteractions.map(i => {
          let specialization: IndexedInteraction['specialization'] = 'generic';
          
          const unitTitle = (i as any).unit_title?.toLowerCase() || "";
          
          if (levelPath === 'emails-b1') specialization = 'emails';
          else if (levelPath.includes('viajes')) specialization = 'travel';
          else if (levelPath === 'negociaciones-b2') specialization = 'finance';
          else if (unitTitle.includes('finance') || unitTitle.includes('business') || unitTitle.includes('negotiation') || unitTitle.includes('econom')) specialization = 'finance';
          else if (unitTitle.includes('tech') || unitTitle.includes(' it ') || unitTitle.includes('software') || unitTitle.includes('coding') || unitTitle.includes('computer')) specialization = 'it';
          
          return {
            ...i,
            level: cefrLevel,
            specialization,
          } as IndexedInteraction;
        });
      } catch (error) {
        console.error(`Failed to load content for level ${levelPath}:`, error);
        return [];
      }
    });

    const results = await Promise.all(loadingPromises);
    this.interactions = results.flat();

    // 4. Inject Visual Exercises for A1
    const visualInteractions = A1_KIDS_EXERCISES.flatMap(unit => 
      unit.questions.map(q => ({
        ...q,
        level: 'A1',
        specialization: 'generic' as const,
        unit_id: unit.id,
      }))
    );
    this.interactions = [...this.interactions, ...visualInteractions];

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
    specialization?: string;
  }): IndexedInteraction[] {
    const { maxLevel, skills, complexityRange, tags, specialization } = criteria;
    
    const levelOrder = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    const maxLevelIdx = maxLevel ? levelOrder.indexOf(maxLevel) : levelOrder.length - 1;

    return this.interactions.filter(i => {
      // 0. Specialization check
      if (specialization && specialization !== 'all') {
        if (i.specialization !== specialization) return false;
      }

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
