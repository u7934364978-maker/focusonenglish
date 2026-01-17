// ============================================
// API ENDPOINT: GENERAR EJERCICIOS
// ============================================
// POST /api/generate-exercise

import { NextRequest, NextResponse } from 'next/server';
import { 
  getExerciseGenerator, 
  getExerciseCache,
  validateGeneratedExercise
} from '@/lib/ai/exercise-generator';
import {
  GenerateExerciseRequest,
  ExerciseType,
  DifficultyLevel,
  CEFRLevel
} from '@/lib/exercise-types';

export const runtime = 'edge'; // Usar Edge Runtime para mejor performance

// ============================================
// POST - Generar ejercicio
// ============================================

export async function POST(request: NextRequest) {
  try {
    // Parsear body
    const body = await request.json();

    // Validar request
    const validationError = validateRequest(body);
    if (validationError) {
      return NextResponse.json(
        { error: validationError },
        { status: 400 }
      );
    }

    const generateRequest: GenerateExerciseRequest = {
      exerciseType: body.exerciseType,
      topic: body.topic,
      difficulty: body.difficulty || 'medium',
      level: body.level || 'B2',
      count: body.count || 1,
      customPrompt: body.customPrompt
    };

    // Intentar obtener del caché primero
    const cache = getExerciseCache();
    const cachedExercises = cache.get(generateRequest, generateRequest.count);

    if (cachedExercises.length === generateRequest.count) {
      console.log('✅ Returning cached exercises');
      return NextResponse.json({
        success: true,
        exercises: cachedExercises,
        cached: true
      });
    }

    // Si no está en caché, generar con IA
    console.log('🤖 Generating new exercises with AI...');
    const generator = getExerciseGenerator();
    const exercises = await generator.generateMultiple(generateRequest);

    // Validar ejercicios generados
    const validExercises = exercises.filter(ex => 
      validateGeneratedExercise(ex.content, ex.type)
    );

    if (validExercises.length === 0) {
      return NextResponse.json(
        { error: 'Failed to generate valid exercises. Please try again.' },
        { status: 500 }
      );
    }

    // Guardar en caché
    cache.set(generateRequest, validExercises);

    return NextResponse.json({
      success: true,
      exercises: validExercises,
      cached: false,
      generated: validExercises.length
    });

  } catch (error) {
    console.error('Error generating exercise:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to generate exercise',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

// ============================================
// GET - Obtener tipos de ejercicios disponibles
// ============================================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category');

    if (category) {
      const { getExercisesByCategory } = await import('@/lib/exercise-types');
      const exercises = getExercisesByCategory(category as any);
      
      return NextResponse.json({
        success: true,
        category,
        exercises
      });
    }

    // Retornar todos los tipos
    const { EXERCISE_TYPE_CATALOG, B2_GRAMMAR_TOPICS, B2_VOCABULARY_TOPICS } = 
      await import('@/lib/exercise-types');

    return NextResponse.json({
      success: true,
      exerciseTypes: EXERCISE_TYPE_CATALOG,
      grammarTopics: B2_GRAMMAR_TOPICS,
      vocabularyTopics: B2_VOCABULARY_TOPICS
    });

  } catch (error) {
    console.error('Error getting exercise types:', error);
    
    return NextResponse.json(
      { error: 'Failed to get exercise types' },
      { status: 500 }
    );
  }
}

// ============================================
// HELPERS
// ============================================

function validateRequest(body: any): string | null {
  if (!body.exerciseType) {
    return 'exerciseType is required';
  }

  const validTypes: ExerciseType[] = [
    'multiple-choice',
    'fill-blank',
    'key-word-transformation',
    'word-formation',
    'multiple-choice-cloze',
    'sentence-building',
    'reading-comprehension',
    'writing-prompt',
    'speaking-prompt',
    'pronunciation-practice'
  ];

  if (!validTypes.includes(body.exerciseType)) {
    return `Invalid exerciseType. Must be one of: ${validTypes.join(', ')}`;
  }

  if (body.difficulty) {
    const validDifficulties: DifficultyLevel[] = ['easy', 'medium', 'hard'];
    if (!validDifficulties.includes(body.difficulty)) {
      return `Invalid difficulty. Must be one of: ${validDifficulties.join(', ')}`;
    }
  }

  if (body.level) {
    const validLevels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    if (!validLevels.includes(body.level)) {
      return `Invalid level. Must be one of: ${validLevels.join(', ')}`;
    }
  }

  if (body.count && (body.count < 1 || body.count > 10)) {
    return 'count must be between 1 and 10';
  }

  return null;
}
