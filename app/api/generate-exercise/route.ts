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
import { generateFallbackExercise, shouldUseFallback } from '@/lib/ai/fallback-exercises';
import { generateSessionId } from '@/lib/ai/exercise-tracker';
import {
  GenerateExerciseRequest,
  ExerciseType,
  DifficultyLevel,
  CEFRLevel
} from '@/lib/exercise-types';

// Usando Node.js runtime para acceder a process.env en runtime
export const runtime = 'edge';

// ============================================
// POST - Generar ejercicio
// ============================================

export async function POST(request: NextRequest) {
  try {
    // Debug: Verificar disponibilidad de API keys
    const hasOpenAI = !!process.env.OPENAI_API_KEY;
    const hasGemini = !!process.env.GEMINI_API_KEY;
    console.log('🔑 API Keys status:', { 
      hasOpenAI, 
      hasGemini,
      openaiLength: process.env.OPENAI_API_KEY?.length || 0 
    });
    
    // Parsear body
    const body = await request.json();

    // Obtener sessionId del header o generar uno nuevo
    const sessionId = request.headers.get('x-session-id') || body.sessionId || generateSessionId();
    const userId = request.headers.get('x-user-id') || body.userId;

    console.log('📝 Session info:', { sessionId: sessionId.substring(0, 20) + '...', userId });

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

    console.log('🎯 Generate request:', {
      type: generateRequest.exerciseType,
      level: generateRequest.level,
      difficulty: generateRequest.difficulty,
      count: generateRequest.count,
      sessionId: sessionId.substring(0, 15) + '...'
    });

    // HABILITAR CACHÉ - Cache inteligente con aleatoriedad
    // Mantiene pool grande de ejercicios y devuelve aleatorios
    const cache = getExerciseCache();
    const cachedExercises = cache.get(generateRequest, generateRequest.count * 3); // Obtener más para variedad

    // Si hay ejercicios en caché, devolver algunos al azar
    if (cachedExercises.length >= generateRequest.count) {
      console.log(`✅ Cache hit! Returning ${generateRequest.count} random exercises from pool of ${cachedExercises.length}`);
      
      // Seleccionar ejercicios al azar del pool
      const shuffled = cachedExercises.sort(() => 0.5 - Math.random());
      const selected = shuffled.slice(0, generateRequest.count);
      
      return NextResponse.json({
        success: true,
        exercises: selected,
        cached: true,
        sessionId
      });
    }

    console.log(`💾 Cache miss. Cached: ${cachedExercises.length}, Needed: ${generateRequest.count}`);

    // Verificar si debemos usar fallback (sin API key)
    if (shouldUseFallback()) {
      console.warn('⚠️ OpenAI API key not configured - using fallback exercises');
      
      const exercises = [];
      for (let i = 0; i < generateRequest.count; i++) {
        const fallbackExercise = generateFallbackExercise(
          generateRequest.exerciseType,
          generateRequest.topic,
          generateRequest.difficulty,
          generateRequest.level
        );
        exercises.push(fallbackExercise);
      }
      
      return NextResponse.json({
        success: true,
        exercises: exercises,
        generated: exercises.length,
        cached: false,
        fallback: true,
        sessionId,
        message: '⚠️ Usando ejercicios de demostración. Configura OPENAI_API_KEY para ejercicios generados con IA.'
      });
    }

    // Si no está en caché, generar con IA
    console.log('🤖 Generating new exercises with AI...');
    const generator = getExerciseGenerator(sessionId, userId);
    
    if (!generator) {
      // Fallback secundario en caso de error
      console.log('⚠️ AI generator not available. Using fallback exercises...');
      const exercises = [];
      for (let i = 0; i < generateRequest.count; i++) {
        const fallbackExercise = generateFallbackExercise(
          generateRequest.exerciseType,
          generateRequest.topic,
          generateRequest.difficulty,
          generateRequest.level
        );
        exercises.push(fallbackExercise);
      }
      
      return NextResponse.json({
        success: true,
        exercises: exercises,
        generated: exercises.length,
        cached: false,
        fallback: true,
        sessionId
      });
    }
    
    const exercises = await generator.generateMultiple(generateRequest);

    // Validar ejercicios generados
    const validExercises = exercises.filter(ex => 
      validateGeneratedExercise(ex.content, ex.type)
    );

    if (validExercises.length === 0) {
      console.warn('⚠️ AI generation failed - using fallback');
      
      const fallbackExercise = generateFallbackExercise(
        generateRequest.exerciseType,
        generateRequest.topic,
        generateRequest.difficulty,
        generateRequest.level
      );
      
      return NextResponse.json({
        success: true,
        exercises: [fallbackExercise],
        generated: 1,
        cached: false,
        fallback: true,
        sessionId,
        message: 'Generación con IA falló. Usando ejercicio de demostración.'
      });
    }

    // GUARDAR en caché para respuestas más rápidas
    // Pool grande permite variedad mientras mantiene velocidad
    console.log(`💾 Saving ${validExercises.length} exercises to cache`);
    const existingCache = cache.get(generateRequest, 100); // Obtener hasta 100 del pool
    const updatedPool = [...existingCache, ...validExercises];
    cache.set(generateRequest, updatedPool);
    console.log(`✅ Cache updated. Pool size: ${updatedPool.length}`);

    return NextResponse.json({
      success: true,
      exercises: validExercises,
      cached: false,
      generated: validExercises.length,
      fallback: false,
      cachePoolSize: updatedPool.length,
      sessionId // Retornar el sessionId para que el cliente lo guarde
    });

  } catch (error) {
    console.error('Error generating exercise:', error);
    
    // Mensaje de error más específico
    let errorMessage = 'Failed to generate exercise. ';
    let errorDetails = '';
    
    if (error instanceof Error) {
      errorDetails = error.message;
      
      // Detectar errores comunes
      if (errorDetails.includes('API key')) {
        errorMessage += 'OpenAI API key is not configured or invalid.';
      } else if (errorDetails.includes('rate limit')) {
        errorMessage += 'Rate limit exceeded. Please try again in a moment.';
      } else if (errorDetails.includes('timeout')) {
        errorMessage += 'Request timed out. Please try again.';
      } else {
        errorMessage += 'Please try again.';
      }
    }
    
    return NextResponse.json(
      { 
        error: errorMessage,
        details: errorDetails,
        success: false
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
    'writing-analysis',
    'speaking-analysis',
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
