import { createClient } from '@/lib/supabase/server';
import { supabaseAdmin } from '@/lib/supabase/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ userId: string }> }
) {
  try {
    const { userId } = await params;
    const supabase = await createClient();
    const { data: { user: adminUser } } = await supabase.auth.getUser();
    if (!adminUser) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('user_id', adminUser.id)
      .single();
    if (profile?.role !== 'admin') return NextResponse.json({ error: 'Forbidden' }, { status: 403 });

    const client = supabaseAdmin ?? supabase;

    const { data: cards, error } = await client
      .from('a1_srs_cards')
      .select('*')
      .eq('user_id', userId)
      .order('next_review_at', { ascending: true });

    if (error) {
      console.error('[admin/a1-srs GET]', error);
      return NextResponse.json({ error: 'DB error' }, { status: 500 });
    }

    const now = new Date().toISOString();
    const allCards = cards ?? [];
    const dueCards = allCards.filter(c => c.next_review_at <= now);

    const topicMap: Record<string, { totalQuality: number; count: number; dueCount: number }> = {};
    for (const card of allCards) {
      const t = card.topic || 'General';
      if (!topicMap[t]) topicMap[t] = { totalQuality: 0, count: 0, dueCount: 0 };
      topicMap[t].totalQuality += card.last_quality;
      topicMap[t].count += 1;
      if (card.next_review_at <= now) topicMap[t].dueCount += 1;
    }

    const topicStats = Object.entries(topicMap)
      .map(([topic, v]) => ({
        topic,
        avgQuality: Math.round((v.totalQuality / v.count) * 10) / 10,
        count: v.count,
        dueCount: v.dueCount,
      }))
      .sort((a, b) => a.avgQuality - b.avgQuality);

    const weakTopics = topicStats.filter(t => t.avgQuality < 3.5);

    const avgEaseFactor =
      allCards.length > 0
        ? Math.round((allCards.reduce((s, c) => s + Number(c.ease_factor), 0) / allCards.length) * 100) / 100
        : null;

    return NextResponse.json({
      totalCards: allCards.length,
      dueCount: dueCards.length,
      avgEaseFactor,
      topicStats,
      weakTopics,
    });
  } catch (e) {
    console.error('[admin/a1-srs GET]', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
