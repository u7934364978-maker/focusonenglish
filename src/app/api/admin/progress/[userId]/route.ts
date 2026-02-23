import { createClient } from '@/lib/supabase/server';
import { NextRequest, NextResponse } from 'next/server';

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

    // Check if requester is admin
    const { data: adminData } = await supabase
      .from('auth.users')
      .select('raw_user_meta_data')
      .eq('id', adminUser.id)
      .single();

    const isAdmin = adminData?.raw_user_meta_data?.role === 'admin';
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get student progress
    const { data: progressData, error } = await supabase
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
