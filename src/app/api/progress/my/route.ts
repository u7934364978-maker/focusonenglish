import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const courseId = request.nextUrl.searchParams.get('courseId')?.toString() || '';
    if (!courseId) {
      return NextResponse.json({ error: 'Missing courseId' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('user_lesson_progress')
      .select(
        'unit_id, status, exercises_completed, exercises_total, attempts, correct_count, accuracy_percent, time_spent_seconds, last_activity_at'
      )
      .eq('user_id', user.id)
      .eq('course_id', courseId)
      .order('last_activity_at', { ascending: false });

    if (error) {
      console.error('[progress/my] select error', error);
      return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
    }

    const byUnit = new Map<number, any>();
    for (const row of data ?? []) {
      const unitId = Number(row.unit_id);
      if (!Number.isFinite(unitId)) continue;

      if (!byUnit.has(unitId)) {
        byUnit.set(unitId, {
          unit_id: unitId,
          status: 'not_started',
          exercises_completed: 0,
          exercises_total: 0,
          attempts: 0,
          correct_count: 0,
          // keep latest
          last_activity_at: row.last_activity_at ?? null,
        });
      }

      const agg = byUnit.get(unitId)!;
      agg.exercises_completed += row.exercises_completed ?? 0;
      agg.exercises_total += row.exercises_total ?? 0;
      agg.attempts += row.attempts ?? 0;
      agg.correct_count += row.correct_count ?? 0;

      if (row.last_activity_at) {
        const prev = agg.last_activity_at ? new Date(agg.last_activity_at).getTime() : 0;
        const next = new Date(row.last_activity_at).getTime();
        if (next > prev) agg.last_activity_at = row.last_activity_at;
      }

      // status will be derived after aggregation
    }

    const progress = Array.from(byUnit.values()).map((agg: any) => {
      const completed =
        (agg.exercises_total ?? 0) > 0 && (agg.exercises_completed ?? 0) >= (agg.exercises_total ?? 0);
      const inProgress = (agg.exercises_completed ?? 0) > 0;

      const status = completed ? 'completed' : (inProgress ? 'in_progress' : 'not_started');
      const accuracy_percent = agg.attempts > 0 ? Math.round(((agg.correct_count / agg.attempts) * 100) * 100) / 100 : 0;

      return {
        unit_id: agg.unit_id,
        status,
        exercises_completed: agg.exercises_completed,
        exercises_total: agg.exercises_total,
        attempts: agg.attempts,
        correct_count: agg.correct_count,
        accuracy_percent,
        last_activity_at: agg.last_activity_at,
      };
    });

    const summary = {
      totalUnitsStarted: progress.filter((p: any) => p.status === 'in_progress' || p.status === 'completed').length,
      totalUnitsCompleted: progress.filter((p: any) => p.status === 'completed').length,
      overallAccuracy:
        progress.length > 0
          ? progress.reduce((sum: number, p: any) => sum + (p.accuracy_percent ?? 0), 0) / progress.length
          : 0,
      unitsWithProgress: progress.length,
    };

    return NextResponse.json({ progress, summary });
  } catch (e) {
    console.error('[progress/my] error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

