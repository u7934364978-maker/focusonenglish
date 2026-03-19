import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // Check if user is admin (use user_profiles.role, consistent with middleware/login-admin)
    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();

    const isAdmin = profile?.role === 'admin';
    if (!isAdmin) {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Get all students from user_profiles
    // NOTE: we select '*' to avoid tight coupling with the exact schema columns.
    const { data: students, error } = await supabase
      .from('user_profiles')
      .select('*')
      .neq('role', 'admin');

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
    }

    return NextResponse.json({
      students: (students ?? []).map((s: any) => ({
        id: s.user_id,
        email: s.email,
        name: s.name ?? s.full_name ?? s.email ?? 'Unknown',
        role: s.role,
        subscription_status: s.subscription_status,
        language_level: s.language_level,
      })),
    });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
