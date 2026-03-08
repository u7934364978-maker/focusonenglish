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

    const isAdmin = (adminUser.user_metadata?.role === 'admin') || (adminUser.app_metadata?.role === 'admin');
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Usar service role para leer progreso de cualquier alumno (RLS solo permite el propio)
    const client = supabaseAdmin ?? supabase;
    const { data: progressData, error } = await client
      .from('a1_progress')
      .select('*')
      .eq('user_id', userId)
      .order('unit_id', { ascending: true });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to fetch progress' }, { status: 500 });
    }

    return NextResponse.json({
      userId,
      progress: progressData || [],
      summary: {
        totalUnitsStarted: progressData?.length || 0,
        totalUnitsCompleted: progressData?.filter(u => u.status === 'completed').length || 0,
        averageAccuracy: progressData && progressData.length > 0
          ? (progressData.reduce((sum, u) => sum + (u.accuracy_percentage || 0), 0) / progressData.length).toFixed(2)
          : 0,
      },
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
