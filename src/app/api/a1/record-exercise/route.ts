import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

/** unitId: 1-60 unidades, 0 = Test final A1 */
interface ExerciseResult {
  unitId: number | string;
  exerciseId: string;
  exerciseType: string;
  isCorrect: boolean;
  timeSpentSeconds?: number;
  lessonKey?: string;
  expectedExercisesTotal?: number;
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

    // Also write unified academic progress by lessonKey (best-effort).
    // This feeds the admin overview and the unified student sidebar.
    try {
      const courseId = 'ingles-a1';
      const lessonKey = (body.lessonKey ?? '').toString();
      const expectedExercisesTotal =
        body.expectedExercisesTotal !== undefined ? Number(body.expectedExercisesTotal) : undefined;

      if (lessonKey) {
        await supabase.from('user_exercise_events').insert({
          user_id: user.id,
          course_id: courseId,
          unit_id: unitId,
          lesson_key: lessonKey,
          exercise_id: body.exerciseId,
          exercise_type: body.exerciseType,
          is_correct: body.isCorrect,
          time_spent_seconds: body.timeSpentSeconds || null,
        });

        const { data: existing } = await supabase
          .from('user_lesson_progress')
          .select('attempts, correct_count, time_spent_seconds, exercises_completed, exercises_total, status, started_at')
          .eq('user_id', user.id)
          .eq('course_id', courseId)
          .eq('unit_id', unitId)
          .eq('lesson_key', lessonKey)
          .maybeSingle();

        const attempts = (existing?.attempts ?? 0) + 1;
        const correctCount = (existing?.correct_count ?? 0) + (body.isCorrect ? 1 : 0);
        const timeSpentSeconds = (existing?.time_spent_seconds ?? 0) + (body.timeSpentSeconds || 0);

        const exercisesCompleted = (existing?.exercises_completed ?? 0) + 1;
        const exercisesTotal =
          expectedExercisesTotal !== undefined && Number.isFinite(expectedExercisesTotal) && expectedExercisesTotal > 0
            ? Math.floor(expectedExercisesTotal)
            : (existing?.exercises_total ?? 0);

        const status =
          exercisesTotal > 0 && exercisesCompleted >= exercisesTotal
            ? 'completed'
            : (existing?.status ?? 'in_progress');

        const accuracy =
          attempts > 0 ? Math.round(((correctCount / attempts) * 100) * 100) / 100 : 0;

        await supabase.from('user_lesson_progress').upsert({
          user_id: user.id,
          course_id: courseId,
          unit_id: unitId,
          lesson_key: lessonKey,
          status,
          exercises_completed: exercisesCompleted,
          exercises_total: exercisesTotal,
          attempts,
          correct_count: correctCount,
          accuracy_percent: accuracy,
          time_spent_seconds: timeSpentSeconds,
          last_activity_at: new Date().toISOString(),
          started_at: existing?.started_at ?? new Date().toISOString(),
          ...(status === 'completed' ? { completed_at: new Date().toISOString() } : {}),
        }, { onConflict: 'user_id,course_id,unit_id,lesson_key' });
      }
    } catch (e) {
      // Do not fail core A1 tracking.
      console.warn('[a1/record-exercise] unified progress skipped', e);
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
