import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const unitId = request.nextUrl.searchParams.get('unitId');

    if (unitId) {
      // Get specific unit progress
      const { data, error } = await supabase
        .from('a1_progress')
        .select('*')
        .eq('user_id', user.id)
        .eq('unit_id', parseInt(unitId))
        .single();

      if (error && error.code !== 'PGRST116') {
        // PGRST116 = no rows returned (unit not started)
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
      }

      return NextResponse.json({
        progress: data || {
          unit_id: parseInt(unitId),
          status: 'not_started',
          exercises_completed: 0,
          exercises_total: 0,
          accuracy_percentage: 0,
        },
      });
    } else {
      // Get all units progress
      const { data, error } = await supabase
        .from('a1_progress')
        .select('*')
        .eq('user_id', user.id)
        .order('unit_id', { ascending: true });

      if (error) {
        console.error('Database error:', error);
        return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
      }

      return NextResponse.json({
        progress: data || [],
        summary: {
          totalUnitsStarted: data?.length || 0,
          totalUnitsCompleted: data?.filter(u => u.status === 'completed').length || 0,
          averageAccuracy: data && data.length > 0
            ? (data.reduce((sum, u) => sum + (u.accuracy_percentage || 0), 0) / data.length).toFixed(2)
            : 0,
        },
      });
    }
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
