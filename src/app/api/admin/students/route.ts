import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin
    const { data: adminUser } = await supabase
      .from('auth.users')
      .select('raw_user_meta_data')
      .eq('id', user.id)
      .single();

    const isAdmin = adminUser?.raw_user_meta_data?.role === 'admin';
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get all users (future students)
    const { data: students, error } = await supabase
      .from('auth.users')
      .select('id,email,raw_user_meta_data')
      .neq('raw_user_meta_data->>role', 'admin');

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
    }

    return NextResponse.json({
      students: students?.map(s => ({
        id: s.id,
        email: s.email,
        name: s.raw_user_meta_data?.name || 'Unknown',
      })) || [],
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
