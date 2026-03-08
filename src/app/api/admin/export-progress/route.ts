/**
 * GET /api/admin/export-progress
 * Devuelve todos los alumnos con su progreso A1 (para exportar CSV desde el admin).
 * Requiere sesión de usuario con role admin. Usa service role para leer a1_progress.
 */

import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

const UNIT_LABELS: Record<number, string> = {
  0: 'Test final A1',
};
for (let i = 1; i <= 60; i++) UNIT_LABELS[i] = `Unidad ${i}`;

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const isAdmin = (user.user_metadata?.role === 'admin') || (user.app_metadata?.role === 'admin');
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    if (!supabaseAdmin) {
      return NextResponse.json(
        { error: 'Service role not configured; cannot export all progress' },
        { status: 503 }
      );
    }

    const { data: progressRows, error: progressError } = await supabaseAdmin
      .from('a1_progress')
      .select('user_id, unit_id, exercises_completed, exercises_total, accuracy_percentage, status, last_activity')
      .order('user_id')
      .order('unit_id', { ascending: true });

    if (progressError) {
      console.error('Export progress error:', progressError);
      return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
    }

    const { data: { users } } = await supabaseAdmin.auth.admin.listUsers({ perPage: 1000 });
    const userMap = new Map(
      (users ?? []).map((u) => [
        u.id,
        {
          email: u.email ?? '',
          name: (u.user_metadata?.full_name ?? u.user_metadata?.name ?? u.email ?? 'Sin nombre').toString(),
        },
      ])
    );

    const byUser = new Map<string, { email: string; name: string; progress: typeof progressRows }>();
    for (const row of progressRows ?? []) {
      const uid = row.user_id as string;
      if (!byUser.has(uid)) {
        const info = userMap.get(uid) ?? { email: uid.slice(0, 8), name: 'Unknown' };
        byUser.set(uid, { ...info, progress: [] });
      }
      byUser.get(uid)!.progress.push(row);
    }

    const exportData = Array.from(byUser.entries()).map(([userId, { email, name, progress }]) => ({
      userId,
      email,
      name,
      progress: (progress ?? []).map((p) => ({
        unit_id: p.unit_id,
        unit_label: UNIT_LABELS[p.unit_id as number] ?? `Unidad ${p.unit_id}`,
        exercises_completed: p.exercises_completed,
        exercises_total: p.exercises_total,
        accuracy_percentage: p.accuracy_percentage,
        status: p.status,
        last_activity: p.last_activity,
      })),
      summary: {
        unitsStarted: (progress ?? []).length,
        unitsCompleted: (progress ?? []).filter((p) => p.status === 'completed').length,
        totalExercises: (progress ?? []).reduce((s, p) => s + (p.exercises_completed ?? 0), 0),
        avgAccuracy:
          (progress ?? []).length > 0
            ? (
                (progress ?? []).reduce((s, p) => s + (p.accuracy_percentage ?? 0), 0) /
                (progress ?? []).length
              ).toFixed(1)
            : '0',
      },
    }));

    return NextResponse.json({ export: exportData });
  } catch (error) {
    console.error('Export progress error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
