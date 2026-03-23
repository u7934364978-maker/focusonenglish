import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { TUTOR_PROMPTS, GLOBAL_TUTOR_INSTRUCTIONS } from '@/lib/ai/tutor-prompts';
import { createClient } from '@/lib/supabase/server';
import { resolveEntitlements } from '@/lib/access/entitlements';
import { getUserProfileByAuthId } from '@/lib/access/user-profile';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
  }

  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ success: false, error: 'Unauthorized' }, { status: 401 });
    }

    const profile = await getUserProfileByAuthId<{
      subscription_status?: string;
      subscription_plan?: string;
    }>(supabase, user.id, 'subscription_status, subscription_plan');

    const entitlements = resolveEntitlements({
      subscriptionStatus: profile?.subscription_status,
      subscriptionPlan: profile?.subscription_plan,
    });

    // El chat completo del tutor IA queda para premium.
    if (!entitlements.aiSpeakingFull) {
      return NextResponse.json(
        {
          success: false,
          error: 'Este bloque requiere plan premium.',
          upgradeRequired: true,
        },
        { status: 402 }
      );
    }

    const { tutorId, messages, level, scenario } = await req.json();

    const tutorPrompt = TUTOR_PROMPTS[tutorId] || TUTOR_PROMPTS.tutor1;
    const systemInstructions = GLOBAL_TUTOR_INSTRUCTIONS
      .replace('{level}', level || 'Intermediate')
      .replace('{scenario}', scenario || 'General Conversation');

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: `${tutorPrompt}\n${systemInstructions}` },
        ...messages
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    });

    const content = JSON.parse(response.choices[0].message.content || '{}');

    return NextResponse.json({
      success: true,
      ...content
    });

  } catch (error: unknown) {
    console.error('AI Tutor Chat Error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
