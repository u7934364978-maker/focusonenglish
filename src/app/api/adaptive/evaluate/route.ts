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

    const { interactionId, isCorrect, responseTimeMs } = await request.json();

    if (!interactionId) {
      return NextResponse.json({ success: false, error: 'Missing interactionId' }, { status: 400 });
    }

    await UltraAdaptiveEngine.evaluateAnswer(
      user.id,
      interactionId,
      isCorrect,
      responseTimeMs || 5000
    );

    return NextResponse.json({
      success: true,
      message: 'Result processed successfully'
    });

  } catch (error: any) {
    console.error('❌ UltraAdaptive Evaluate Error:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || "Internal server error"
    }, { status: 500 });
  }
}
