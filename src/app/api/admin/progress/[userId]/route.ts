import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;
    const supabase = await createClient();
    const { data: { user: adminUser } } = await supabase.auth.getUser();

    if (!adminUser) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Validación de admin consistente con login de admin / middleware
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('user_id', adminUser.id)
      .single();
    const isAdmin = profile?.role === 'admin';
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Admin usa servicio role si existe (para leer progreso de cualquier alumno)
    const client = supabaseAdmin ?? supabase;

    // courseId opcional; por defecto intentamos A1 y, si no hay datos, usamos el curso con más actividad.
    let courseId = request.nextUrl.searchParams.get('courseId')?.toString() || 'ingles-a1';

    const { data: rows, error } = await client
      .from('user_lesson_progress')
      .select(
        'unit_id, exercises_completed, exercises_total, attempts, correct_count, accuracy_percent, last_activity_at'
      )
      .eq('user_id', userId)
      .eq('course_id', courseId);

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
    }

    let finalRows = rows ?? [];
    if (!request.nextUrl.searchParams.get('courseId') && finalRows.length === 0) {
      const { data: anyRows, error: anyErr } = await client
        .from('user_lesson_progress')
        .select(
          'course_id, unit_id, exercises_completed, exercises_total, attempts, correct_count, accuracy_percent, last_activity_at'
        )
        .eq('user_id', userId);

      if (anyErr) {
        console.error('Database error (fallback):', anyErr);
        return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
      }

      const byCourseCount = new Map<string, number>();
      for (const r of anyRows ?? []) {
        const cid = String((r as any).course_id ?? '');
        if (!cid) continue;
        byCourseCount.set(cid, (byCourseCount.get(cid) ?? 0) + 1);
      }

      const topCourse = Array.from(byCourseCount.entries()).sort((a, b) => b[1] - a[1])[0]?.[0];
      if (topCourse) {
        courseId = topCourse;
        finalRows = (anyRows ?? []).filter((r: any) => String(r.course_id) === courseId);
      }
    }

    // Agregar por unit_id (cada unit puede tener múltiples lesson_key)
    const byUnit = new Map<number, any>();
    for (const r of finalRows) {
      const unitIdNum = Number(r.unit_id);
      if (!Number.isFinite(unitIdNum)) continue;

      if (!byUnit.has(unitIdNum)) {
        byUnit.set(unitIdNum, {
          unit_id: unitIdNum,
          exercises_completed: 0,
          exercises_total: 0,
          attempts: 0,
          correct_count: 0,
          last_activity_at: r.last_activity_at ?? null,
        });
      }

      const agg = byUnit.get(unitIdNum)!;
      agg.exercises_completed += r.exercises_completed ?? 0;
      agg.exercises_total += r.exercises_total ?? 0;
      agg.attempts += r.attempts ?? 0;
      agg.correct_count += r.correct_count ?? 0;

      if (r.last_activity_at) {
        const prev = agg.last_activity_at ? new Date(agg.last_activity_at).getTime() : 0;
        const next = new Date(r.last_activity_at).getTime();
        if (next > prev) agg.last_activity_at = r.last_activity_at;
      }
    }

    const progress = Array.from(byUnit.values()).map((agg) => {
      const completed =
        (agg.exercises_total ?? 0) > 0 && (agg.exercises_completed ?? 0) >= (agg.exercises_total ?? 0);
      const inProgress = (agg.exercises_completed ?? 0) > 0;
      const status = completed ? 'completed' : (inProgress ? 'in_progress' : 'not_started');

      const accuracy_percent =
        agg.attempts > 0 ? Math.round(((agg.correct_count / agg.attempts) * 100) * 100) / 100 : 0;

      return {
        unit_id: agg.unit_id,
        status,
        exercises_completed: agg.exercises_completed,
        exercises_total: agg.exercises_total,
        accuracy_percentage: accuracy_percent,
      };
    });

    progress.sort((a, b) => a.unit_id - b.unit_id);

    const startedUnits = progress.filter((u) => (u.exercises_total ?? 0) > 0 && (u.exercises_completed ?? 0) > 0);
    const totalUnitsStarted = startedUnits.length;
    const totalUnitsCompleted = progress.filter((u) => u.status === 'completed').length;
    const averageAccuracy = startedUnits.length > 0
      ? (
          startedUnits.reduce((sum, u) => sum + (u.accuracy_percentage ?? 0), 0) / startedUnits.length
        ).toFixed(2)
      : '0';

    return NextResponse.json({
      userId,
      courseId,
      progress,
      summary: {
        totalUnitsStarted,
        totalUnitsCompleted,
        averageAccuracy,
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
