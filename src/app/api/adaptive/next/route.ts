import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { UltraAdaptiveEngine } from '@/lib/course-engine/ultra-adaptive-engine';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const exercise = await UltraAdaptiveEngine.getNextExercise(user.id);

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
