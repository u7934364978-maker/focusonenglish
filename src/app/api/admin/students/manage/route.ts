import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { createClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { sendWelcomeEmail } from '@/lib/email-service';

type CreateStudentBody = {
  action: 'create';
  email: string;
  name?: string;
  languageLevel?: string;
  subscriptionStatus?: string;
  subscriptionPlan?: string;
};

type ResetPasswordBody = {
  action: 'reset-password';
  userId: string;
};

type MovePositionBody = {
  action: 'move-position';
  userId: string;
  courseId: string;
  unitId: number;
  lessonKey?: string;
};

function normalizeCoursePath(courseId: string, unitId: number): string {
  const map: Record<string, string> = {
    'ingles-a1': '/curso-a1',
    'ingles-a2': '/curso-a2',
    'ingles-b1': '/curso-b1',
    'ingles-b2': '/curso-b2',
    'ingles-c1': '/curso-c1',
    'ingles-c2': '/curso-c2',
  };
  const base = map[courseId] ?? '/curso-a1';
  return `${base}/unit-${unitId}`;
}

async function ensureAdmin() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) return { ok: false as const, status: 401, message: 'Unauthorized' };

  const { data: profile } = await supabase
    .from('user_profiles')
    .select('role')
    .eq('user_id', user.id)
    .single();

  if (profile?.role !== 'admin') {
    return { ok: false as const, status: 403, message: 'Forbidden' };
  }

  return { ok: true as const };
}

export async function POST(request: NextRequest) {
  try {
    if (!supabaseAdmin) {
      return NextResponse.json({ error: 'SUPABASE_SERVICE_ROLE_KEY not configured' }, { status: 500 });
    }

    const adminCheck = await ensureAdmin();
    if (!adminCheck.ok) {
      return NextResponse.json({ error: adminCheck.message }, { status: adminCheck.status });
    }

    const body = (await request.json().catch(() => ({}))) as
      | CreateStudentBody
      | ResetPasswordBody
      | MovePositionBody;

    if (body.action === 'create') {
      const email = body.email?.trim().toLowerCase();
      const name = (body.name ?? '').trim();
      const languageLevel = (body.languageLevel ?? 'A1').toUpperCase();
      const subscriptionStatus = body.subscriptionStatus ?? 'inactive';
      const subscriptionPlan = body.subscriptionPlan ?? 'free';

      if (!email) {
        return NextResponse.json({ error: 'Email is required' }, { status: 400 });
      }

      const tempPassword = crypto.randomBytes(12).toString('hex') + '!';
      const { data: created, error: createErr } = await supabaseAdmin.auth.admin.createUser({
        email,
        password: tempPassword,
        email_confirm: true,
        user_metadata: { full_name: name },
      });

      if (createErr || !created.user) {
        return NextResponse.json({ error: createErr?.message ?? 'Failed to create user' }, { status: 400 });
      }

      const userId = created.user.id;

      await Promise.all([
        supabaseAdmin.from('users').upsert({
          id: userId,
          email,
          name: name || email,
          language_level: languageLevel,
          updated_at: new Date().toISOString(),
        }),
        supabaseAdmin.from('user_profiles').upsert({
          user_id: userId,
          email,
          name: name || email,
          role: 'student',
          language_level: languageLevel,
          subscription_status: subscriptionStatus,
          subscription_plan: subscriptionPlan,
          subscription_start_date: subscriptionStatus === 'active' ? new Date().toISOString() : null,
        }),
        supabaseAdmin.from('user_stats').upsert({ user_id: userId, level: 1 }),
        supabaseAdmin.from('user_xp').upsert({ user_id: userId, total_xp: 0, level: 1, xp_to_next_level: 100 }),
        supabaseAdmin.from('user_streaks').upsert({ user_id: userId, current_streak: 0, longest_streak: 0 }),
      ]);

      const mailSent = await sendWelcomeEmail({
        email,
        name: name || 'Estudiante',
        planName: subscriptionPlan,
        tempPassword,
      });

      return NextResponse.json({ ok: true, userId, mailSent, tempPassword });
    }

    if (body.action === 'reset-password') {
      const userId = body.userId?.trim();
      if (!userId) return NextResponse.json({ error: 'userId is required' }, { status: 400 });

      const tempPassword = crypto.randomBytes(12).toString('hex') + '!';
      const { error: updErr } = await supabaseAdmin.auth.admin.updateUserById(userId, {
        password: tempPassword,
      });
      if (updErr) return NextResponse.json({ error: updErr.message }, { status: 400 });

      const { data: profile } = await supabaseAdmin
        .from('user_profiles')
        .select('email,name,subscription_plan')
        .eq('user_id', userId)
        .maybeSingle();

      const email = profile?.email;
      let mailSent = false;
      if (email) {
        mailSent = await sendWelcomeEmail({
          email,
          name: profile?.name ?? 'Estudiante',
          planName: profile?.subscription_plan ?? 'free',
          tempPassword,
        });
      }

      return NextResponse.json({ ok: true, userId, mailSent, tempPassword });
    }

    if (body.action === 'move-position') {
      const userId = body.userId?.trim();
      const courseId = body.courseId?.trim();
      const unitId = Number(body.unitId);
      const lessonKey = (body.lessonKey ?? '').trim();

      if (!userId || !courseId || !Number.isFinite(unitId) || unitId <= 0) {
        return NextResponse.json({ error: 'userId, courseId and unitId are required' }, { status: 400 });
      }

      const lastSeenPath = normalizeCoursePath(courseId, unitId);

      await supabaseAdmin
        .from('user_profiles')
        .update({
          last_seen_path: lastSeenPath,
          last_seen_at: new Date().toISOString(),
        })
        .eq('user_id', userId);

      if (lessonKey) {
        await supabaseAdmin.from('user_lesson_progress').upsert(
          {
            user_id: userId,
            course_id: courseId,
            unit_id: unitId,
            lesson_key: lessonKey,
            status: 'in_progress',
            exercises_completed: 0,
            exercises_total: 0,
            attempts: 0,
            correct_count: 0,
            accuracy_percent: 0,
            started_at: new Date().toISOString(),
            last_activity_at: new Date().toISOString(),
          },
          { onConflict: 'user_id,course_id,unit_id,lesson_key' }
        );
      }

      return NextResponse.json({ ok: true, userId, courseId, unitId, lessonKey: lessonKey || null });
    }

    return NextResponse.json({ error: 'Unsupported action' }, { status: 400 });
  } catch (error) {
    console.error('[admin/students/manage] error', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

