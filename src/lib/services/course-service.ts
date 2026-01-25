import { supabase } from '@/lib/supabase/client';
import { z } from 'zod';
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
  content: z.record(z.any()),
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
      .select('*')
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

    return {
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
          type: e.type,
          title: e.title,
          ...e.content
        };
      }).filter(Boolean) as Exercise[],
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

    return (lessonsRaw || []).map((lRaw: any) => {
      const lParsed = LessonSchema.safeParse(lRaw);
      if (!lParsed.success) return null;
      return {
        ...lParsed.data,
        exercises: [],
      };
    }).filter(Boolean) as Lesson[];

    setCache(cacheKey, result);
    return result;
  }
};
