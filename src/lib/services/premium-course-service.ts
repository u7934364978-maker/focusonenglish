import { supabase } from '@/lib/supabase/client';
import { UnitData, PremiumInteraction, PremiumBlock } from '@/types/premium-course';
import fs from 'fs';
import path from 'path';

export const premiumCourseService = {
  /**
   * Loads all interactions from the 30 JSON files in the content directory for a specific level.
   * This is intended to be called from a Server Component or API route.
   */
  async getAllInteractions(level: 'ingles-a1' | 'ingles-a2' | 'ingles-b1' | 'ingles-b2' | 'ingles-c1' | 'ingles-c2'): Promise<PremiumInteraction[]> {
    const contentDir = path.join(process.cwd(), `src/content/cursos/${level}`);
    const interactions: PremiumInteraction[] = [];

    if (!fs.existsSync(contentDir)) return [];

    const files = fs.readdirSync(contentDir)
      .filter(file => file.startsWith('unit') && file.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(contentDir, file);
        const unitData: UnitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        unitData.blocks.forEach((block: PremiumBlock) => {
          block.content.forEach((content: any) => {
            // Some content objects are interactions directly, others might be wrapped
            if (content.interaction_id) {
              interactions.push(content as PremiumInteraction);
            } else if (content.video && content.video.interactions) {
              interactions.push(...content.video.interactions);
            }
          });
        });
      } catch (error) {
        console.error(`Error loading interactions from ${file}:`, error);
      }
    }

    return interactions;
  },

  async getAllA1Interactions(): Promise<PremiumInteraction[]> {
    return this.getAllInteractions('ingles-a1');
  },

  async getAllB1Interactions(): Promise<PremiumInteraction[]> {
    return this.getAllInteractions('ingles-b1');
  },

  async getAllB2Interactions(): Promise<PremiumInteraction[]> {
    return this.getAllInteractions('ingles-b2');
  },

  async getAllC1Interactions(): Promise<PremiumInteraction[]> {
    return this.getAllInteractions('ingles-c1');
  },

  async getAllC2Interactions(): Promise<PremiumInteraction[]> {
    return this.getAllInteractions('ingles-c2');
  },

  /**
   * Loads all units with their metadata and interaction counts.
   * Merges JSON-based units with Database-based units.
   */
  async getUnits(level: 'ingles-a1' | 'ingles-a2' | 'ingles-b1' | 'ingles-b2' | 'ingles-c1' | 'ingles-c2') {
    const contentDir = path.join(process.cwd(), `src/content/cursos/${level}`);
    const units: any[] = [];

    // 1. Load from JSON files first (New content/Original structure)
    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir)
        .filter(file => file.startsWith('unit') && file.endsWith('.json'))
        .sort((a, b) => {
          const numA = parseInt(a.replace('unit', '').replace('.json', ''));
          const numB = parseInt(b.replace('unit', '').replace('.json', ''));
          return numA - numB;
        });

      for (const file of files) {
        try {
          const filePath = path.join(contentDir, file);
          const unitData: UnitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          
          const unitId = unitData.course.unit_id;
          const interactionIds: string[] = [];
          unitData.blocks.forEach((block: PremiumBlock) => {
            block.content.forEach((content: any) => {
              if (content.interaction_id) {
                interactionIds.push(content.interaction_id);
              } else if (content.video && content.video.interactions) {
                interactionIds.push(...content.video.interactions.map((i: any) => i.interaction_id));
              }
            });
          });

          units.push({
            id: unitId,
            title: unitData.course.unit_title,
            file: file.replace('.json', ''),
            totalExercises: interactionIds.length,
            interactionIds
          });
        } catch (error) {
          console.error(`Error loading unit from ${file}:`, error);
        }
      }
    }

    // 2. Load from Database (Fallback/Expanded content)
    // Only add if not already present by title
    if (supabase) {
      const cefrLevel = level.split('-')[1].toUpperCase();
      const { data: dbLessons, error } = await supabase
        .from('course_lessons')
        .select(`
          id, 
          title, 
          order_index,
          course_modules!inner (course_level),
          course_exercises (id)
        `)
        .eq('course_modules.course_level', cefrLevel)
        .order('order_index', { ascending: true });

      if (!error && dbLessons) {
        dbLessons.forEach(lesson => {
          if (!units.find(u => u.title === lesson.title)) {
            units.push({
              id: lesson.id,
              title: lesson.title,
              file: lesson.id,
              totalExercises: lesson.course_exercises?.length || 0,
              interactionIds: lesson.course_exercises?.map((ex: any) => ex.id) || []
            });
          }
        });
      }
    }

    return units;
  },

  /**
   * Fetches the list of interaction IDs completed by the user.
   */
  async getProgress(userId: string, level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): Promise<string[]> {
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

  async getA1Progress(userId: string): Promise<string[]> {
    return this.getProgress(userId, 'A1');
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

  /**
   * Saves progress for a specific interaction.
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
