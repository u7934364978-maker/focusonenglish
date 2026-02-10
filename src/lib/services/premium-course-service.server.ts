import { createClient } from '@/lib/supabase/server';
import { UnitData, PremiumInteraction, PremiumBlock } from '@/types/premium-course';
import { UserPerformanceRecord } from '../course-engine/adaptive';
import fs from 'fs';
import path from 'path';

export type CourseLevel = string;

export const premiumCourseServerService = {
  /**
   * Fetches SRS performance data for a set of interactions from the server.
   */
  async getSRSPerformance(userId: string, interactionIds: string[]): Promise<UserPerformanceRecord[]> {
    if (!userId || userId === 'anonymous' || interactionIds.length === 0) return [];
    
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('user_srs')
      .select('*')
      .eq('user_id', userId)
      .in('item_id', interactionIds);

    if (error) {
      console.error(`Error fetching server SRS performance:`, error);
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
   * Fetches user mastery data for all concepts.
   */
  async getUserMastery(userId: string): Promise<any[]> {
    if (!userId || userId === 'anonymous') return [];
    
    const supabase = await createClient();
    const { data, error } = await supabase
      .from('user_mastery')
      .select('concept_tag, mastery_score')
      .eq('user_id', userId);

    if (error) {
      console.error(`Error fetching user mastery:`, error);
      return [];
    }

    return data;
  },

  /**
   * Loads all interactions for a specific level.
   * Prioritizes Supabase Database, falls back to local JSON files.
   */
  async getAllInteractions(level: CourseLevel): Promise<PremiumInteraction[]> {
    const supabase = await createClient();
    const cefrLevel = level.includes('-') ? level.split('-')[1].toUpperCase() : level.toUpperCase();

    // 1. Try Supabase Database First
    try {
      const { data: dbInteractions, error } = await supabase
        .from('course_exercises')
        .select(`
          id,
          type,
          title,
          content,
          order_index,
          course_lessons!inner (
            id,
            order_index,
            course_modules!inner (course_level)
          )
        `)
        .eq('course_lessons.course_modules.course_level', cefrLevel);

      if (!error && dbInteractions && dbInteractions.length > 0) {
        return dbInteractions.map(ex => ({
          interaction_id: ex.id,
          type: ex.type,
          unit_id: ex.course_lessons.id,
          unit_order: ex.course_lessons.order_index,
          ...ex.content
        } as PremiumInteraction));
      }
    } catch (dbError) {
      console.warn(`[PremiumCourseService] Database fetch failed for ${level}, falling back to JSON.`, dbError);
    }

    // 2. Fallback to Local JSON Files
    const contentDir = path.join(process.cwd(), `src/content/cursos/${level}`);
    const interactions: PremiumInteraction[] = [];

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

      files.forEach((file, unitIdx) => {
        try {
          const filePath = path.join(contentDir, file);
          const unitData: UnitData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
          const unitId = unitData.course.unit_id;
          const unitOrder = unitIdx + 1;
          
          unitData.blocks.forEach((block: PremiumBlock) => {
            block.content.forEach((content: any) => {
              if (content.interaction_id) {
                interactions.push({
                  ...content,
                  unit_id: unitId,
                  unit_order: unitOrder
                } as PremiumInteraction);
              } else if (content.video && content.video.interactions) {
                content.video.interactions.forEach((i: any) => {
                  interactions.push({
                    ...i,
                    unit_id: unitId,
                    unit_order: unitOrder
                  } as PremiumInteraction);
                });
              }
            });
          });
        } catch (error) {
          console.error(`Error loading interactions from ${file}:`, error);
        }
      });
      return interactions;
    }

    return [];
  },

  /**
   * Loads all units with their metadata and interaction counts.
   */
  async getUnits(level: CourseLevel) {
    const contentDir = path.join(process.cwd(), `src/content/cursos/${level}`);
    const units: any[] = [];
    const supabase = await createClient();

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
    if (level.startsWith('ingles-')) {
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
      console.log(`[PremiumCourseService] Fetching unit data: courseId=${courseId}, unitId=${unitId}`);
      const supabase = await createClient();
      // First try in src/content/cursos/ (modern path)
      const contentPath = path.join(process.cwd(), 'src', 'content', 'cursos', courseId, `${unitId}.json`);
      if (fs.existsSync(contentPath)) {
        console.log(`[PremiumCourseService] Found JSON file at ${contentPath}`);
        const fileContent = fs.readFileSync(contentPath, 'utf8');
        return JSON.parse(fileContent);
      }

      // Then try in src/data/courses/ (legacy path)
      const filePath = path.join(process.cwd(), 'src', 'data', 'courses', courseId, `${unitId}.json`);
      if (fs.existsSync(filePath)) {
        console.log(`[PremiumCourseService] Found legacy JSON file at ${filePath}`);
        const fileContent = fs.readFileSync(filePath, 'utf8');
        return JSON.parse(fileContent);
      }

      console.log(`[PremiumCourseService] Checking premium_units table...`);
      const { data, error } = await supabase
        .from('premium_units')
        .select('*')
        .eq('course_id', courseId)
        .eq('unit_id', unitId)
        .single();

      if (!error && data) {
        console.log(`[PremiumCourseService] Found in premium_units table`);
        return data.content as UnitData;
      }

      // New: Support fetching from course_lessons and course_exercises (Dynamic A2/A1 content)
      if (courseId.startsWith('ingles-')) {
        const cefrLevel = courseId.split('-')[1].toUpperCase();
        console.log(`[PremiumCourseService] Checking dynamic content for level ${cefrLevel}...`);
        
        // Fetch the lesson
        const { data: lesson, error: lessonError } = await supabase
          .from('course_lessons')
          .select(`
            id,
            title,
            course_modules!inner (course_level),
            course_exercises (
              id,
              type,
              title,
              content,
              order_index
            )
          `)
          .eq('id', unitId)
          .eq('course_modules.course_level', cefrLevel)
          .single();

        if (lesson && !lessonError) {
          console.log(`[PremiumCourseService] Found dynamic lesson: ${lesson.title} with ${lesson.course_exercises?.length || 0} exercises`);
          // Transform database format to UnitData format
          const exercises = (lesson.course_exercises as any[]) || [];
          exercises.sort((a, b) => a.order_index - b.order_index);

          const blocks: PremiumBlock[] = [{
            block_id: `block-${lesson.id}`,
            title: 'Lesson Exercises',
            duration_minutes: exercises.length * 2, // Estimate 2 mins per exercise
            content: exercises.map(ex => {
              // The JSON in DB content field for course_exercises is different
              // We need to map it to PremiumInteraction
              const dbContent = ex.content;
              return {
                interaction_id: ex.id,
                type: ex.type,
                ...dbContent
              };
            })
          }];

          return {
            course: {
              unit_id: lesson.id,
              unit_title: lesson.title,
              level: cefrLevel,
              total_duration_minutes: blocks[0].duration_minutes,
              language_ui: 'es',
              target_language: 'en'
            },
            blocks
          } as UnitData;
        } else {
          console.log(`[PremiumCourseService] Dynamic lesson not found or error:`, lessonError);
        }
      }

      console.log(`[PremiumCourseService] Unit not found anywhere`);
      return null;
    } catch (e) {
      console.error('Error fetching unit data:', e);
      return null;
    }
  },

  async saveInteraction(interaction: Omit<PremiumInteraction, 'id' | 'created_at'>) {
    const supabase = await createClient();
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
  }
};
