import { createClient } from '@/lib/supabase/server';
import { NextResponse } from 'next/server';
import { supabaseAdmin } from '@/lib/supabase/client';

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

    // Get all students from user_profiles.
    // Use service role when available to avoid RLS restrictions in admin panel.
    const client = supabaseAdmin ?? supabase;

    // NOTE: we select '*' to avoid tight coupling with the exact schema columns.
    const { data: students, error } = await client
      .from('user_profiles')
      .select('*')
      // Include students with role NULL and exclude explicit admin rows.
      .or('role.is.null,role.neq.admin')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Database error:', error);
      return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
    }

    const profileStudents = (students ?? []).map((s: any) => ({
      id: s.user_id,
      email: s.email,
      name: s.name ?? s.full_name ?? s.email ?? 'Unknown',
      role: s.role ?? 'student',
      subscription_status: s.subscription_status ?? 'inactive',
      language_level: s.language_level ?? 'A1',
    }));

    // Fallback: include auth users that don't yet have a row in user_profiles.
    // This avoids "missing students" in admin list when profile creation failed.
    if (!supabaseAdmin) {
      return NextResponse.json({ students: profileStudents });
    }

    const { data: authUsersData, error: authUsersError } = await supabaseAdmin.auth.admin.listUsers();
    if (authUsersError) {
      console.error('Auth users error:', authUsersError);
      return NextResponse.json({ students: profileStudents });
    }

    const profileByUserId = new Map(profileStudents.map((s) => [s.id, s]));
    const merged = [...profileStudents];

    for (const u of authUsersData.users ?? []) {
      if (profileByUserId.has(u.id)) continue;
      const email = u.email ?? null;
      // Skip likely admin/system accounts by email heuristic if there is no profile row.
      if (email && email.toLowerCase().includes('admin')) continue;

      merged.push({
        id: u.id,
        email,
        name: (u.user_metadata?.full_name as string | undefined) ?? email ?? 'Unknown',
        role: 'student',
        subscription_status: 'inactive',
        language_level: 'A1',
      });
    }

    return NextResponse.json({ students: merged });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
