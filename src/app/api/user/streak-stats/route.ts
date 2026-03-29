import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export const dynamic = 'force-dynamic';

function utcToday(): string {
  return new Date().toISOString().slice(0, 10);
}

function utcYesterday(): string {
  const d = new Date();
  d.setUTCDate(d.getUTCDate() - 1);
  return d.toISOString().slice(0, 10);
}

function isMissingTableError(error: unknown): boolean {
  const e = error as { code?: string };
  return e?.code === 'PGRST205' || e?.code === '42P01';
}

export type StreakStatsPayload = {
  streak: number;
  lastStreakDate: string | null;
  todayXp: number;
  xpDay: string | null;
};

function toPayload(row: {
  streak_current: number;
  last_streak_date: string | null;
  today_xp: number;
  xp_day: string | null;
}): StreakStatsPayload {
  return {
    streak: row.streak_current,
    lastStreakDate: row.last_streak_date,
    todayXp: row.today_xp,
    xpDay: row.xp_day,
  };
}

/**
 * GET /api/user/streak-stats
 */
export async function GET() {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { data, error } = await supabase
      .from('user_streak_stats')
      .select('streak_current, last_streak_date, today_xp, xp_day')
      .eq('user_id', user.id)
      .maybeSingle();

    if (error) {
      if (isMissingTableError(error)) {
        return NextResponse.json({
          streak: 0,
          lastStreakDate: null,
          todayXp: 0,
          xpDay: null,
          skipped: true,
        });
      }
      console.error('[streak-stats GET]', error);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    if (!data) {
      return NextResponse.json({
        streak: 0,
        lastStreakDate: null,
        todayXp: 0,
        xpDay: null,
      });
    }

    const today = utcToday();
    let todayXp = data.today_xp;
    if (data.xp_day !== today) {
      todayXp = 0;
    }

    return NextResponse.json({
      ...toPayload({ ...data, today_xp: todayXp }),
      xpDay: data.xp_day ?? null,
    });
  } catch (e) {
    console.error('[streak-stats GET]', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

type PostBody = {
  action: 'add_xp' | 'complete_daily_session';
  amount?: number;
};

/**
 * POST /api/user/streak-stats
 * Body: { action: 'add_xp', amount?: number } | { action: 'complete_daily_session' }
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = (await request.json().catch(() => ({}))) as PostBody;
    const action = body.action;

    if (action !== 'add_xp' && action !== 'complete_daily_session') {
      return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
    }

    const today = utcToday();
    const yesterday = utcYesterday();

    const { data: row, error: fetchErr } = await supabase
      .from('user_streak_stats')
      .select('streak_current, last_streak_date, today_xp, xp_day')
      .eq('user_id', user.id)
      .maybeSingle();

    if (fetchErr && !isMissingTableError(fetchErr)) {
      console.error('[streak-stats POST fetch]', fetchErr);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    if (fetchErr && isMissingTableError(fetchErr)) {
      return NextResponse.json({ skipped: true, streak: 0, lastStreakDate: null, todayXp: 0, xpDay: null });
    }

    let streakCurrent = row?.streak_current ?? 0;
    let lastStreakDate: string | null = row?.last_streak_date ?? null;
    let todayXp = row?.today_xp ?? 0;
    let xpDay: string | null = row?.xp_day ?? null;

    if (xpDay !== today) {
      todayXp = 0;
      xpDay = today;
    }

    if (action === 'add_xp') {
      const amount = Math.max(0, Math.min(500, Number(body.amount) || 0));
      todayXp += amount;
      xpDay = today;
    }

    if (action === 'complete_daily_session') {
      if (lastStreakDate === today) {
        /* ya contó hoy */
      } else if (lastStreakDate === yesterday) {
        streakCurrent = streakCurrent + 1;
      } else {
        streakCurrent = 1;
      }
      lastStreakDate = today;
    }

    const upsertPayload = {
      user_id: user.id,
      streak_current: streakCurrent,
      last_streak_date: lastStreakDate,
      today_xp: todayXp,
      xp_day: xpDay,
      updated_at: new Date().toISOString(),
    };

    const { error: upsertErr } = await supabase.from('user_streak_stats').upsert(upsertPayload, {
      onConflict: 'user_id',
    });

    if (upsertErr) {
      if (isMissingTableError(upsertErr)) {
        return NextResponse.json({ skipped: true, streak: 0, lastStreakDate: null, todayXp: 0, xpDay: null });
      }
      console.error('[streak-stats POST upsert]', upsertErr);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    return NextResponse.json({
      streak: streakCurrent,
      lastStreakDate,
      todayXp,
      xpDay,
    } satisfies StreakStatsPayload);
  } catch (e) {
    console.error('[streak-stats POST]', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
