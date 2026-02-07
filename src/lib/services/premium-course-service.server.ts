import { supabase } from '@/lib/supabase/client';
import { UnitData, PremiumInteraction, PremiumBlock } from '@/types/premium-course';
import fs from 'fs';
import path from 'path';

export type CourseLevel = 'ingles-a1' | 'ingles-a2' | 'ingles-b1' | 'ingles-b2' | 'ingles-c1' | 'ingles-c2' | 'emails-b1';

export const premiumCourseServerService = {
  /**
   * Loads all interactions from the JSON files in the content directory for a specific level.
   */
  async getAllInteractions(level: CourseLevel): Promise<PremiumInteraction[]> {
    const contentDir = path.join(process.cwd(), `src/content/cursos/${level}`);
    const interactions: PremiumInteraction[] = [];

    if (!fs.existsSync(contentDir)) return [];

    const files = fs.readdirSync(contentDir)
      .filter(file => file.endsWith('.json'));

    for (const file of files) {
      try {
        const filePath = path.join(contentDir, file);
        const unitData: UnitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        
        unitData.blocks.forEach((block: PremiumBlock) => {
          block.content.forEach((content: any) => {
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

  /**
   * Loads all units with their metadata and interaction counts.
   */
  async getUnits(level: CourseLevel) {
    const contentDir = path.join(process.cwd(), `src/content/cursos/${level}`);
    const units: any[] = [];

    if (fs.existsSync(contentDir)) {
      const files = fs.readdirSync(contentDir)
        .filter(file => file.endsWith('.json'))
        .sort((a, b) => {
          const getNum = (s: string) => {
            const match = s.match(/\d+/);
            return match ? parseInt(match[0]) : 0;
          };
          return getNum(a) - getNum(b);
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

    // Load from Database (Fallback/Expanded content)
    if (supabase && level.startsWith('ingles-')) {
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

  async getUnitData(courseId: string, unitId: string): Promise<UnitData | null> {
    try {
      // First try in src/content/cursos/ (modern path)
      const contentPath = path.join(process.cwd(), 'src', 'content', 'cursos', courseId, `${unitId}.json`);
      if (fs.existsSync(contentPath)) {
        const fileContent = fs.readFileSync(contentPath, 'utf8');
        return JSON.parse(fileContent);
      }

      // Then try in src/data/courses/ (legacy path)
      const filePath = path.join(process.cwd(), 'src', 'data', 'courses', courseId, `${unitId}.json`);
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      }

      const { data, error } = await supabase
        .from('premium_units')
        .select('*')
        .eq('course_id', courseId)
        .eq('unit_id', unitId)
        .single();

      if (error || !data) return null;
      return data.content as UnitData;
    } catch (e) {
      console.error('Error fetching unit data:', e);
      return null;
    }
  },

  async saveInteraction(interaction: Omit<PremiumInteraction, 'id' | 'created_at'>) {
    const { data, error } = await supabase
      .from('premium_interactions')
      .insert([interaction])
      .select()
      .single();

    if (error) throw error;
    return data;
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

  async getAllEmailsB1Interactions(): Promise<PremiumInteraction[]> {
    return this.getAllInteractions('emails-b1');
  }
};
