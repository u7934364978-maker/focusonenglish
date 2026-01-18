import { NextRequest, NextResponse } from 'next/server';
import { generateLessonExercises } from '@/lib/duolingo/exercise-service';
import type { CEFRLevel } from '@/lib/exercise-types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

/**
 * POST /api/duolingo/exercises
 * Genera ejercicios ilimitados para una lección
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { lessonId, level, count = 10, userId, sessionId } = body;

    // Validación
    if (!lessonId) {
      return NextResponse.json(
        { error: 'lessonId is required' },
        { status: 400 }
      );
    }

    if (!level) {
      return NextResponse.json(
        { error: 'level is required' },
        { status: 400 }
      );
    }

    // Validar nivel CEFR
    const validLevels: CEFRLevel[] = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'];
    if (!validLevels.includes(level)) {
      return NextResponse.json(
        { error: `Invalid level. Must be one of: ${validLevels.join(', ')}` },
        { status: 400 }
      );
    }

    // Validar count
    if (count < 1 || count > 20) {
      return NextResponse.json(
        { error: 'count must be between 1 and 20' },
        { status: 400 }
      );
    }

    console.log(`📝 Generating ${count} exercises for lesson ${lessonId} (${level})`);

    // Generar ejercicios
    const exercises = await generateLessonExercises(
      lessonId,
      level,
      count,
      userId,
      sessionId
    );

    console.log(`✅ Generated ${exercises.length} exercises successfully`);

    return NextResponse.json({
      success: true,
      exercises,
      count: exercises.length,
      lessonId,
      level
    });

  } catch (error) {
    console.error('❌ Error generating exercises:', error);
    
    return NextResponse.json(
      {
        error: 'Failed to generate exercises',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/duolingo/exercises?lessonId=xxx&level=A1
 * Obtiene ejercicios para una lección (para testing)
 */
export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const lessonId = searchParams.get('lessonId');
    const level = searchParams.get('level') as CEFRLevel;
    const count = parseInt(searchParams.get('count') || '5');

    if (!lessonId || !level) {
      return NextResponse.json(
        { error: 'lessonId and level are required' },
        { status: 400 }
      );
    }

    const exercises = await generateLessonExercises(lessonId, level, count);

    return NextResponse.json({
      success: true,
      exercises,
      count: exercises.length
    });

  } catch (error) {
    console.error('Error in GET:', error);
    
    return NextResponse.json(
      { error: 'Failed to fetch exercises' },
      { status: 500 }
    );
  }
}
