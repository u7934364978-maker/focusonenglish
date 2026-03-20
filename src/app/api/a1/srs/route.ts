import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

/**
 * GET /api/a1/srs
 * ?due=true  → only cards where next_review_at <= now
 * ?due=false → all cards (default)
 * Returns: { cards: SRSCardRow[], dueCount: number }
 */
export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const dueOnly = request.nextUrl.searchParams.get('due') === 'true';

    let query = supabase
      .from('a1_srs_cards')
      .select('*')
      .eq('user_id', user.id)
      .order('next_review_at', { ascending: true });

    if (dueOnly) {
      query = query.lte('next_review_at', new Date().toISOString());
    }

    const { data, error } = await query;
    if (error) {
      console.error('[api/a1/srs GET]', error);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    const now = new Date().toISOString();
    const dueCount = (data ?? []).filter(c => c.next_review_at <= now).length;

    return NextResponse.json({ cards: data ?? [], dueCount });
  } catch (e) {
    console.error('[api/a1/srs GET]', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/a1/srs
 * Body: { exerciseId, topic, interval, repetitions, easeFactor, nextReviewAt, lastQuality }
 * Upserts the card state for the current user.
 */
export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await request.json().catch(() => ({}));
    const { exerciseId, topic, interval, repetitions, easeFactor, nextReviewAt, lastQuality } = body;

    if (!exerciseId) {
      return NextResponse.json({ error: 'exerciseId required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('a1_srs_cards')
      .upsert({
        user_id: user.id,
        exercise_id: exerciseId,
        topic: topic ?? '',
        interval: Number(interval ?? 1),
        repetitions: Number(repetitions ?? 0),
        ease_factor: Number(easeFactor ?? 2.5),
        next_review_at: nextReviewAt ?? new Date().toISOString(),
        last_quality: Number(lastQuality ?? 0),
        updated_at: new Date().toISOString(),
      }, { onConflict: 'user_id,exercise_id' });

    if (error) {
      console.error('[api/a1/srs POST]', error);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[api/a1/srs POST]', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
