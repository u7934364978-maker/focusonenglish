import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

/** unitId: 1-60 unidades, 0 = Test final A1 */
interface ExerciseResult {
  unitId: number | string;
  exerciseId: string;
  exerciseType: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
}

function normalizeUnitId(unitId: number | string): number {
  if (typeof unitId === 'string') {
    if (unitId === 'test-final') return 0;
    const n = parseInt(unitId, 10);
    return Number.isNaN(n) ? -1 : n;
  }
  return unitId;
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body: ExerciseResult = await request.json();

    if (!body.exerciseId || body.isCorrect === undefined) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const unitId = normalizeUnitId(body.unitId ?? -1);
    if (unitId < 0 || unitId > 60) {
      return NextResponse.json({ error: 'Invalid unit ID (use 1-60 or test-final)' }, { status: 400 });
    }

    // Insert exercise result (unit_id 0 = Test final A1)
    const { data, error } = await supabase
      .from('a1_exercise_results')
      .insert({
        user_id: user.id,
        unit_id: unitId,
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
