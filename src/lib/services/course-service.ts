import { supabase } from '@/lib/supabase/client';
import { z } from 'zod';
import { UnitData, PremiumInteraction } from '@/types/premium-course';
import { 
  Module, 
  Lesson, 
  Exercise, 
  CEFRLevel, 
  ExerciseCategory 
} from '../exercise-types';

// ============================================
// SCHEMAS DE VALIDACIÓN (ZOD)
// ============================================

const ExerciseSchema = z.object({
  id: z.string(),
  type: z.string(),
  title: z.string(),
  content: z.record(z.string(), z.any()),
});

const LessonSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable().transform(val => val || ''),
  duration: z.number().nullable().transform(val => val || 0),
  objectives: z.array(z.string()).default([]),
  exercises: z.array(z.any()).optional().default([]),
});

const ModuleSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().nullable().transform(val => val || ''),
  order_index: z.number(),
  objectives: z.array(z.string()).default([]),
  grammar: z.array(z.string()).default([]),
  vocabulary: z.array(z.string()).default([]),
});

// ============================================
// CACHE IN-MEMORY
// ============================================

const cache = new Map<string, { data: any, timestamp: number }>();
const CACHE_TTL = 1000 * 60 * 10; // 10 minutos

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

export const courseService = {
  /**
   * Get all modules for a specific level and goal, including their lessons
   */
  async getModules(level: CEFRLevel, goal: string): Promise<Module[]> {
    const cacheKey = `modules-${level}-${goal}`;
    const cached = getCached<Module[]>(cacheKey);
    if (cached) return cached;

    if (!supabase) {
      console.error('Supabase client not initialized');
      return [];
    }

    const { data: modulesRaw, error: mError } = await supabase
      .from('course_modules')
      .select('*')
      .eq('course_level', level)
      .eq('course_goal', goal)
      .order('order_index', { ascending: true });

    if (mError) {
      console.error('Error fetching modules:', mError);
      return [];
    }

    const result: Module[] = [];

    for (const mRaw of modulesRaw) {
      // Validar módulo
      const mParsed = ModuleSchema.safeParse(mRaw);
      if (!mParsed.success) {
        console.error(`Invalid module data for ${mRaw.id}:`, mParsed.error);
        continue;
      }
      const m = mParsed.data;

      const { data: lessonsRaw, error: lError } = await supabase
        .from('course_lessons')
        .select('*, course_exercises(id, type)')
        .eq('module_id', m.id)
        .order('order_index', { ascending: true });

      if (lError) {
        console.error(`Error fetching lessons for module ${m.id}:`, lError);
        continue;
      }

      result.push({
        id: m.id,
        title: m.title,
        description: m.description,
        topics: m.objectives,
        number: m.order_index + 1,
        grammar: m.grammar,
        vocabulary: m.vocabulary,
        lessons: (lessonsRaw || []).map((lRaw: any) => {
          const lParsed = LessonSchema.safeParse(lRaw);
          if (!lParsed.success) return null;
          return {
            ...lParsed.data,
            exercises: lRaw.course_exercises || [],
          };
        }).filter(Boolean) as unknown as Lesson[],
      } as unknown as Module);
    }

    setCache(cacheKey, result);
    return result;
  },

  /**
   * Get a lesson by ID, including its exercises
   */
  async getLesson(lessonId: string): Promise<Lesson | null> {
    const cacheKey = `lesson-${lessonId}`;
    const cached = getCached<Lesson>(cacheKey);
    if (cached) return cached;

    if (!supabase) {
      console.error('Supabase client not initialized');
      return null;
    }

    const { data: lessonRaw, error: lessonError } = await supabase
      .from('course_lessons')
      .select('*, course_modules(course_level)')
      .eq('id', lessonId)
      .single();

    if (lessonError || !lessonRaw) {
      console.error('Error fetching lesson:', lessonError);
      return null;
    }

    const lessonParsed = LessonSchema.safeParse(lessonRaw);
    if (!lessonParsed.success) {
      console.error('Invalid lesson data:', lessonParsed.error);
      return null;
    }
    const lessonData = lessonParsed.data;

    const { data: exerciseRaw, error: exerciseError } = await supabase
      .from('course_exercises')
      .select('*')
      .eq('lesson_id', lessonId)
      .order('order_index', { ascending: true });

    if (exerciseError) {
      console.error('Error fetching exercises:', exerciseError);
      return null;
    }

    const result = {
      id: lessonData.id,
      title: lessonData.title,
      description: lessonData.description,
      duration: lessonData.duration,
      objectives: lessonData.objectives,
      exercises: (exerciseRaw || []).map((eRaw: any) => {
        const eParsed = ExerciseSchema.safeParse(eRaw);
        if (!eParsed.success) return null;
        const e = eParsed.data;
        return {
          id: e.id,
          type: e.type as any,
          title: e.title,
          content: e.content,
          createdAt: eRaw.created_at ? new Date(eRaw.created_at) : new Date(),
          estimatedTime: (e.content as any).estimatedTime || 5, // Default to 5 mins if not specified
          level: (lessonRaw as any).course_modules?.course_level || 'A1', // Inherit from module
          topic: (lessonRaw as any).title,
          topicName: (lessonRaw as any).title
        };
      }).filter(Boolean) as any[],
    };

    setCache(cacheKey, result);
    return result;
  },

  /**
   * Get all lessons for a specific module
   */
  async getModuleLessons(moduleId: string): Promise<Lesson[]> {
    const cacheKey = `module-lessons-${moduleId}`;
    const cached = getCached<Lesson[]>(cacheKey);
    if (cached) return cached;

    if (!supabase) {
      console.error('Supabase client not initialized');
      return [];
    }

    const { data: lessonsRaw, error } = await supabase
      .from('course_lessons')
      .select('*')
      .eq('module_id', moduleId)
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Error fetching module lessons:', error);
      return [];
    }

    const result = (lessonsRaw || []).map((lRaw: any) => {
      const lParsed = LessonSchema.safeParse(lRaw);
      if (!lParsed.success) return null;
      return {
        ...lParsed.data,
        exercises: [],
      };
    }).filter(Boolean) as Lesson[];

    setCache(cacheKey, result);
    return result;
  },

  /**
   * Get a Premium unit by ID (maps from database to Premium structure)
   */
  async getPremiumUnitData(unitId: string): Promise<UnitData | null> {
    if (!supabase) return null;

    // Map 'unitX' to 'a1-mY-lX' if needed, or use unitId directly if it's already a lesson ID
    let lessonId = unitId;
    
    // Legacy support for 'unit6'
    if (unitId.toLowerCase() === 'unit6') {
      lessonId = 'a1-m1-l6';
    }

    // Fetch lesson info
    const { data: lesson, error: lError } = await supabase
      .from('course_lessons')
      .select('*, course_modules(title, course_level)')
      .eq('id', lessonId)
      .single();

    if (lError || !lesson) {
      // If not found by ID, try to find by order_index or title if necessary
      // For now, we assume unitId is the lesson ID
      return null;
    }

    // Fetch exercises
    const { data: exercises, error: eError } = await supabase
      .from('course_exercises')
      .select('*')
      .eq('lesson_id', lessonId)
      .order('order_index', { ascending: true });

    if (eError) {
      console.error('Error fetching exercises for Premium unit:', eError);
      return null;
    }

    // Map to UnitData structure
    return {
      course: {
        unit_id: lesson.id,
        unit_title: lesson.title,
        level: lesson.course_modules?.course_level || 'A1',
        total_duration_minutes: lesson.duration || 60,
        language_ui: 'es-ES',
        target_language: 'en'
      },
      learning_outcomes: lesson.objectives || [],
      mastery_tags: [],
      blocks: [
        {
          block_id: 'B1',
          title: 'Contenido de la Unidad',
          duration_minutes: lesson.duration || 60,
          content: (exercises || []).map(ex => this.mapExerciseToInteraction(ex))
        }
      ]
    };
  },

  /**
   * Helper to map a generic course exercise to a Premium interaction
   */
  mapExerciseToInteraction(ex: any): PremiumInteraction {
    const content = typeof ex.content === 'string' ? JSON.parse(ex.content) : ex.content;
    
    const typeMap: Record<string, string> = {
      'multipleChoice': 'multiple_choice',
      'matching': 'matching',
      'drag-drop': 'reorder_words',
      'fillBlanks': 'fill_blanks',
      'flashcard': 'flashcard'
    };

    const interaction: any = {
      interaction_id: ex.id,
      type: typeMap[ex.type] || ex.type,
      ...content,
      prompt_es: content.prompt || content.instructions || content.text || content.title || '',
      mastery_tag: 'vocab_family' // Default tag
    };

    if (ex.type === 'multipleChoice') {
      interaction.options = (content.options || []).map((opt: string, i: number) => ({
        id: `o${i}`,
        text: opt
      }));
      interaction.correct_answer = `o${content.answerIndex}`;
    } else if (ex.type === 'matching' || ex.type === 'vocabulary-match') {
      interaction.pairs = (content.pairs || []).map((p: any) => ({
        id: p.id,
        left: p.word || p.left,
        right: p.correctMatch || p.right
      }));
    } else if (ex.type === 'drag-drop') {
      interaction.type = 'reorder_words';
      interaction.prompt_es = content.translation || content.instructions || '';
      interaction.stimulus_en = content.correctSentence;
      // Reorder words requires options as words
      const words = content.correctSentence.split(' ');
      interaction.options = words.map((w: string, i: number) => ({
        id: `w${i}`,
        text: w
      }));
      interaction.correct_answer = words.map((_: string, i: number) => `w${i}`);
    } else if (ex.type === 'fillBlanks') {
      interaction.type = 'fill_blanks';
      interaction.stimulus_en = content.text;
      interaction.correct_answer = content.answers?.[0];
    } else if (ex.type === 'flashcard') {
      interaction.type = 'flashcard';
      interaction.flashcards = (content.items || []).map((item: any) => ({
        front: item.front,
        back: item.back,
        pronunciation: item.pronunciation
      }));
    }

    return interaction as PremiumInteraction;
  }
};
