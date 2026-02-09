import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UltraAdaptiveEngine } from '@/lib/course-engine/ultra-adaptive-engine';

export async function POST(request: NextRequest) {
  try {
    let user = null;
    try {
      const supabase = await createClient();
      const { data } = await supabase.auth.getUser();
      user = data.user;
    } catch (e) {
      console.warn("Auth error in API (expected in dev without DB):", e);
    }

    const isTest = process.env.NODE_ENV === 'development';
    const finalUserId = user?.id || (isTest ? 'test-user-id' : null);

    if (!finalUserId) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const { level } = await request.json().catch(() => ({}));

    const exercise = await UltraAdaptiveEngine.getNextExercise(finalUserId, level);

    if (!exercise) {
      return NextResponse.json({ 
        success: false, 
        error: 'No available exercises found for your level.' 
      }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      exercise
    });

  } catch (error: any) {
    console.error('❌ UltraAdaptive API Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Internal server error"
    }, { status: 500 });
  }
}
