import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

interface ExerciseResult {
  unitId: number;
  exerciseId: string;
  exerciseType: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body: ExerciseResult = await request.json();

    // Validate input
    if (!body.unitId || !body.exerciseId || body.isCorrect === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (body.unitId < 1 || body.unitId > 60) {
      return NextResponse.json({ error: 'Invalid unit ID' }, { status: 400 });
    }

    // Insert exercise result
    const { data, error } = await supabase
      .from('a1_exercise_results')
      .insert({
        user_id: user.id,
        unit_id: body.unitId,
        exercise_id: body.exerciseId,
        exercise_type: body.exerciseType,
        is_correct: body.isCorrect,
        time_spent_seconds: body.timeSpentSeconds || null,
      })
      .select();

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to record exercise' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      result: data?.[0],
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
