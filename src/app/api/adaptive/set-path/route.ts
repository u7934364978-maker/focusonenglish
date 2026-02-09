import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { path } = await request.json();

    if (!path) {
      return NextResponse.json({ success: false, error: 'Path is required' }, { status: 400 });
    }

    const { error } = await supabase.rpc('set_user_learning_path', {
      p_user_id: user.id,
      p_path: path
    });

    if (error) throw error;

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('❌ Set Path API Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Internal server error"
    }, { status: 500 });
  }
}
