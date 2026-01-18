// ============================================
// DUOLINGO INFINITE EXERCISES SERVICE
// ============================================
// Servicio para generar ejercicios ilimitados basados en unidades y lecciones

import { ExerciseGenerator } from '@/lib/ai/exercise-generator';
import { getCurriculum, getTopicById } from '@/lib/ai/curriculum-helper';
import type { Lesson, Unit } from '@/lib/duolingo/units';
import type { CEFRLevel, ExerciseType, DifficultyLevel } from '@/lib/exercise-types';

export interface DuolingoExerciseRequest {
  lessonId: string;
  unitId: string;
  level: CEFRLevel;
  count?: number;
  userId?: string;
  sessionId?: string;
}

export interface DuolingoExercise {
  id: string;
  type: ExerciseType;
  question: string;
  options?: string[];
  correctAnswer: any;
  explanation: string;
  translation?: string;
  audio?: string;
  image?: string;
  xpReward: number;
  topic: string;
  difficulty: DifficultyLevel;
}

// ============================================
// MAPEO DE LECCIONES A TEMAS DEL CURRÍCULO
// ============================================

const LESSON_TO_TOPIC_MAP: Record<string, { topicId: string; keywords: string[] }> = {
  // Unit 1: Greetings & Introductions
  'a1-u1-l1': {
    topicId: 'a1-greetings',
    keywords: ['hello', 'hi', 'good morning', 'goodbye', 'greetings']
  },
  'a1-u1-l2': {
    topicId: 'a1-personal-pronouns',
    keywords: ['name', 'my name is', 'I am', 'you are', 'introductions']
  },
  'a1-u1-l3': {
    topicId: 'a1-countries',
    keywords: ['country', 'from', 'nationality', 'where are you from']
  },
  
  // Unit 2: Numbers & Time
  'a1-u2-l1': {
    topicId: 'a1-numbers',
    keywords: ['numbers', 'counting', 'one', 'two', 'three', 'ten', 'twenty']
  },
  'a1-u2-l2': {
    topicId: 'a1-numbers',
    keywords: ['numbers', 'thirty', 'forty', 'fifty', 'hundred']
  },
  'a1-u2-l3': {
    topicId: 'a1-time',
    keywords: ['time', 'clock', 'hour', 'minute', 'what time']
  },
  
  // Unit 3: Family & People
  'a1-u3-l1': {
    topicId: 'a1-family',
    keywords: ['family', 'mother', 'father', 'sister', 'brother', 'parents']
  },
  'a1-u3-l2': {
    topicId: 'a1-family',
    keywords: ['this is', 'my family', 'introduce', 'presentation']
  },
  'a1-u3-l3': {
    topicId: 'a1-personal-pronouns',
    keywords: ['he', 'she', 'they', 'pronouns', 'gender']
  },
  
  // Unit 4: Daily Routines
  'a1-u4-l1': {
    topicId: 'a1-daily-activities',
    keywords: ['wake up', 'get up', 'breakfast', 'morning', 'routine']
  },
  'a1-u4-l2': {
    topicId: 'a1-present-simple',
    keywords: ['present simple', 'habits', 'routines', 'daily', 'usually']
  },
  'a1-u4-l3': {
    topicId: 'a1-daily-activities',
    keywords: ['dinner', 'evening', 'night', 'sleep', 'go to bed']
  },
  
  // Unit 5: Food & Drinks
  'a1-u5-l1': {
    topicId: 'a1-food',
    keywords: ['food', 'bread', 'rice', 'pasta', 'chicken', 'fish', 'vegetables']
  },
  'a1-u5-l2': {
    topicId: 'a1-food',
    keywords: ['drinks', 'water', 'juice', 'coffee', 'tea', 'milk']
  },
  'a1-u5-l3': {
    topicId: 'a1-food',
    keywords: ['restaurant', 'menu', 'order', 'waiter', 'bill']
  }
};

// ============================================
// MAPEO DE LECCIONES A TIPOS DE EJERCICIOS
// ============================================

const LESSON_EXERCISE_TYPES: Record<string, ExerciseType[]> = {
  // Lessons normales: variedad de ejercicios
  'lesson': [
    'multiple-choice',
    'fill-blank',
    'sentence-building',
    'translation'
  ],
  
  // Practice: más variedad
  'practice': [
    'multiple-choice',
    'fill-blank',
    'sentence-building',
    'translation',
    'matching'
  ],
  
  // Test: ejercicios de evaluación
  'test': [
    'multiple-choice',
    'fill-blank',
    'key-word-transformation',
    'sentence-building'
  ],
  
  // Story: comprensión y contextual
  'story': [
    'reading-comprehension',
    'multiple-choice',
    'fill-blank'
  ]
};

// ============================================
// SERVICIO PRINCIPAL
// ============================================

export class DuolingoExerciseService {
  private generator: ExerciseGenerator | null = null;
  
  constructor() {
    // Inicializar generador solo si hay API key
    const apiKey = process.env.OPENAI_API_KEY;
    if (apiKey) {
      this.generator = new ExerciseGenerator(apiKey);
    }
  }

  /**
   * Genera ejercicios ilimitados para una lección
   */
  async generateExercisesForLesson(
    request: DuolingoExerciseRequest
  ): Promise<DuolingoExercise[]> {
    const { lessonId, level, count = 5, userId, sessionId } = request;
    
    // Obtener información de la lección
    const lessonInfo = LESSON_TO_TOPIC_MAP[lessonId];
    if (!lessonInfo) {
      throw new Error(`Lesson ${lessonId} not found in curriculum map`);
    }

    // Determinar tipos de ejercicios según el tipo de lección
    const lessonType = this.getLessonType(lessonId);
    const exerciseTypes = LESSON_EXERCISE_TYPES[lessonType] || LESSON_EXERCISE_TYPES['lesson'];
    
    // Generar ejercicios con IA
    if (this.generator) {
      return this.generateWithAI(
        lessonInfo,
        exerciseTypes,
        level,
        count,
        userId,
        sessionId
      );
    }
    
    // Fallback: ejercicios pre-generados
    return this.generateFallbackExercises(lessonInfo, exerciseTypes, level, count);
  }

  /**
   * Genera un ejercicio individual
   */
  async generateSingleExercise(
    lessonId: string,
    level: CEFRLevel,
    userId?: string,
    sessionId?: string
  ): Promise<DuolingoExercise> {
    const exercises = await this.generateExercisesForLesson({
      lessonId,
      unitId: lessonId.split('-')[0] + '-' + lessonId.split('-')[1],
      level,
      count: 1,
      userId,
      sessionId
    });
    
    return exercises[0];
  }

  /**
   * Genera ejercicios con IA
   */
  private async generateWithAI(
    lessonInfo: { topicId: string; keywords: string[] },
    exerciseTypes: ExerciseType[],
    level: CEFRLevel,
    count: number,
    userId?: string,
    sessionId?: string
  ): Promise<DuolingoExercise[]> {
    const exercises: DuolingoExercise[] = [];
    
    // Distribuir ejercicios entre los tipos disponibles
    for (let i = 0; i < count; i++) {
      const exerciseType = exerciseTypes[i % exerciseTypes.length];
      
      try {
        const generated = await this.generator!.generateExercise({
          exerciseType,
          topic: lessonInfo.topicId,
          keywords: lessonInfo.keywords,
          difficulty: this.getDifficultyForLevel(level),
          level,
          count: 1
        });
        
        // Convertir al formato Duolingo
        const duolingoExercise = this.convertToDuolingoFormat(generated);
        exercises.push(duolingoExercise);
        
      } catch (error) {
        console.error(`Error generating exercise ${i}:`, error);
        // Continuar con el siguiente
      }
    }
    
    return exercises;
  }

  /**
   * Genera ejercicios fallback cuando no hay IA disponible
   */
  private generateFallbackExercises(
    lessonInfo: { topicId: string; keywords: string[] },
    exerciseTypes: ExerciseType[],
    level: CEFRLevel,
    count: number
  ): Promise<DuolingoExercise[]> {
    // Ejercicios básicos pre-definidos por tema
    const exercises: DuolingoExercise[] = [];
    
    for (let i = 0; i < count; i++) {
      const type = exerciseTypes[i % exerciseTypes.length];
      exercises.push(this.createFallbackExercise(lessonInfo, type, level, i));
    }
    
    return Promise.resolve(exercises);
  }

  /**
   * Crea un ejercicio fallback básico
   */
  private createFallbackExercise(
    lessonInfo: { topicId: string; keywords: string[] },
    type: ExerciseType,
    level: CEFRLevel,
    index: number
  ): DuolingoExercise {
    // Ejercicios básicos por defecto
    const basicExercises: Record<string, any> = {
      'multiple-choice': {
        question: `What is the correct form? (${lessonInfo.keywords[0]})`,
        options: ['Option A', 'Option B', 'Option C', 'Option D'],
        correctAnswer: 0,
        explanation: 'This is the correct answer because...'
      },
      'fill-blank': {
        question: `Complete: I _____ to school every day.`,
        correctAnswer: 'go',
        explanation: 'We use "go" for present simple habits.'
      },
      'sentence-building': {
        question: 'Arrange the words to form a correct sentence',
        options: ['I', 'am', 'student', 'a'],
        correctAnswer: 'I am a student',
        explanation: 'Subject + verb + article + noun'
      }
    };

    const template = basicExercises[type] || basicExercises['multiple-choice'];
    
    return {
      id: `fallback-${type}-${index}`,
      type,
      question: template.question,
      options: template.options,
      correctAnswer: template.correctAnswer,
      explanation: template.explanation,
      xpReward: 10,
      topic: lessonInfo.topicId,
      difficulty: this.getDifficultyForLevel(level)
    };
  }

  /**
   * Convierte ejercicio generado por IA al formato Duolingo
   */
  private convertToDuolingoFormat(generated: any): DuolingoExercise {
    // Extraer primera pregunta del contenido generado
    const content = generated.content;
    const firstQuestion = content.questions?.[0] || {};
    
    return {
      id: generated.id,
      type: generated.type,
      question: firstQuestion.question || firstQuestion.text || 'Exercise question',
      options: firstQuestion.options,
      correctAnswer: firstQuestion.correctAnswer,
      explanation: firstQuestion.explanation || 'No explanation available',
      translation: firstQuestion.translation,
      audio: firstQuestion.audio,
      image: firstQuestion.image,
      xpReward: 10,
      topic: generated.topic,
      difficulty: generated.difficulty
    };
  }

  /**
   * Obtiene el tipo de lección basado en el ID
   */
  private getLessonType(lessonId: string): string {
    if (lessonId.includes('practice')) return 'practice';
    if (lessonId.includes('test')) return 'test';
    if (lessonId.includes('story')) return 'story';
    return 'lesson';
  }

  /**
   * Mapea nivel CEFR a dificultad
   */
  private getDifficultyForLevel(level: CEFRLevel): DifficultyLevel {
    switch (level) {
      case 'A1':
      case 'A2':
        return 'easy';
      case 'B1':
      case 'B2':
        return 'medium';
      case 'C1':
      case 'C2':
        return 'hard';
      default:
        return 'medium';
    }
  }
}

// ============================================
// SINGLETON INSTANCE
// ============================================

let serviceInstance: DuolingoExerciseService | null = null;

export function getDuolingoExerciseService(): DuolingoExerciseService {
  if (!serviceInstance) {
    serviceInstance = new DuolingoExerciseService();
  }
  return serviceInstance;
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Genera ejercicios para una lección específica
 */
export async function generateLessonExercises(
  lessonId: string,
  level: CEFRLevel,
  count: number = 10,
  userId?: string,
  sessionId?: string
): Promise<DuolingoExercise[]> {
  const service = getDuolingoExerciseService();
  
  return service.generateExercisesForLesson({
    lessonId,
    unitId: lessonId.substring(0, lessonId.lastIndexOf('-')),
    level,
    count,
    userId,
    sessionId
  });
}

/**
 * Valida si una respuesta es correcta
 */
export function validateAnswer(
  exercise: DuolingoExercise,
  userAnswer: any
): boolean {
  const { type, correctAnswer } = exercise;
  
  switch (type) {
    case 'multiple-choice':
      return userAnswer === correctAnswer;
      
    case 'fill-blank':
      const userText = String(userAnswer).toLowerCase().trim();
      const correctText = String(correctAnswer).toLowerCase().trim();
      return userText === correctText;
      
    case 'true-false':
      return userAnswer === correctAnswer;
      
    default:
      // Para otros tipos, comparación simple
      return userAnswer === correctAnswer;
  }
}
