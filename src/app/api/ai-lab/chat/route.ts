import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { MISSION_CATALOG } from '@/lib/exercise-types';
import { generateMissionSystemPrompt } from '@/lib/ai/mission-engine';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
  }

  try {
    const { missionId, messages } = await req.json();

    const mission = MISSION_CATALOG.find(m => m.id === missionId);
    if (!mission) {
      return NextResponse.json({ error: 'Mission not found' }, { status: 404 });
    }

    const systemPrompt = generateMissionSystemPrompt(mission);

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: systemPrompt },
        ...messages
      ],
      stream: true,
      temperature: 0.7,
    });

    // We convert the OpenAI stream into a standard Web stream
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of response) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            controller.enqueue(new TextEncoder().encode(content));
          }
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });

  } catch (error: any) {
    console.error('AI Lab Chat Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
