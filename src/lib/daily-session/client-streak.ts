'use client';

/** Estado alineado con GET /api/user/streak-stats */
export type DailyStreakState = {
  streak: number;
  lastStreakDate: string | null;
  todayXp: number;
  xpDay: string | null;
};

function parsePayload(data: Record<string, unknown>): DailyStreakState {
  return {
    streak: Number(data.streak) || 0,
    lastStreakDate: typeof data.lastStreakDate === 'string' ? data.lastStreakDate : null,
    todayXp: Number(data.todayXp) || 0,
    xpDay: typeof data.xpDay === 'string' ? data.xpDay : null,
  };
}

/** Carga racha + XP del día desde Supabase (vía API). */
export async function fetchStreakStats(): Promise<DailyStreakState> {
  const res = await fetch('/api/user/streak-stats', { cache: 'no-store' });
  if (!res.ok) {
    if (res.status === 401) {
      return { streak: 0, lastStreakDate: null, todayXp: 0, xpDay: null };
    }
    throw new Error('No se pudo cargar la racha');
  }
  const data = (await res.json()) as Record<string, unknown>;
  return parsePayload(data);
}

/** Suma XP al total de hoy (persistido en Supabase). */
export async function addSessionXpRemote(amount: number): Promise<DailyStreakState> {
  const res = await fetch('/api/user/streak-stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'add_xp', amount }),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { skipped?: boolean };
    if (data.skipped) {
      return { streak: 0, lastStreakDate: null, todayXp: 0, xpDay: null };
    }
    throw new Error('No se pudo guardar el XP');
  }
  const data = (await res.json()) as Record<string, unknown>;
  return parsePayload(data);
}

/** Marca que el usuario completó la sesión del día (actualiza racha). */
export async function completeDailySessionRemote(): Promise<DailyStreakState> {
  const res = await fetch('/api/user/streak-stats', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'complete_daily_session' }),
  });
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { skipped?: boolean };
    if (data.skipped) {
      return { streak: 0, lastStreakDate: null, todayXp: 0, xpDay: null };
    }
    throw new Error('No se pudo registrar la sesión');
  }
  const data = (await res.json()) as Record<string, unknown>;
  return parsePayload(data);
}
