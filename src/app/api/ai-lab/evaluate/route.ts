import { NextResponse } from 'next/server';
import OpenAI from 'openai';
import { MISSION_CATALOG } from '@/lib/exercise-types';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

export async function POST(req: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: 'OPENAI_API_KEY is not configured' }, { status: 500 });
  }

  try {
    const { missionId, messages, goalsReached } = await req.json();

    const mission = MISSION_CATALOG.find(m => m.id === missionId);
    if (!mission) {
      return NextResponse.json({ error: 'Mission not found' }, { status: 404 });
    }

    const evaluationPrompt = `You are an expert English teacher evaluating a student's performance in a mission-based roleplay.
Mission: ${mission.title}
Goal: ${mission.goal}
Level: ${mission.level}

CONVERSATION HISTORY:
${messages.map((m: any) => `${m.role.toUpperCase()}: ${m.content}`).join('\n')}

GOALS REACHED BY STUDENT (Self-reported):
${goalsReached.join(', ')}

Please evaluate the student based on:
1. Goal achievement (did they actually achieve the mission goal?).
2. Language accuracy (grammar, vocabulary correct for level ${mission.level}).
3. Professionalism/Appropriateness (did they use the right tone for the sector ${mission.sector}?).

Provide a detailed evaluation in Spanish.
Responde en formato JSON:
{
  "score": número 0-100,
  "feedback": "Resumen general de su desempeño en español",
  "strengths": ["punto fuerte 1", "punto fuerte 2"],
  "improvements": ["área de mejora 1", "área de mejora 2"],
  "grammarCorrections": [
    { "original": "frase con error", "correction": "frase corregida", "explanation": "explicación breve" }
  ],
  "missionStatus": "SUCCESS" | "PARTIAL" | "FAILED"
}`;

    const response = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        { role: 'system', content: 'You are a helpful English teacher.' },
        { role: 'user', content: evaluationPrompt }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.3,
    });

    const evaluation = JSON.parse(response.choices[0].message.content || '{}');

    return NextResponse.json({
      success: true,
      evaluation
    });

  } catch (error: any) {
    console.error('AI Lab Evaluation Error:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
