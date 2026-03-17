import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';
export const maxDuration = 60;

function coerceCloudflareResponseToText(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value == null) return '';
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

const LEVEL_CONTEXT: Record<string, string> = {
  A1: 'absolute beginner. Uses present simple, basic vocabulary (greetings, numbers, colors, family, everyday objects). Short sentences.',
  A2: 'elementary. Uses past simple, present continuous, common adjectives, everyday routines. Can describe simple situations.',
  B1: 'intermediate. Uses present perfect, conditionals, modal verbs, a range of everyday vocabulary. Can discuss familiar topics.',
  B2: 'upper-intermediate. Uses complex grammar structures, passive voice, reported speech, wide vocabulary. Can discuss abstract topics.',
};

const EXERCISE_TYPE_PROMPTS: Record<string, string> = {
  'multiple-choice': 'A multiple choice question with exactly 4 options (options array of strings) and correctAnswer as the 0-based index of the correct option.',
  'fill-blank': 'A fill-in-the-blank sentence where one word is replaced by ___. Include the correct word in correctAnswer (string).',
  'true-false': 'A true/false statement. correctAnswer must be exactly "True" or "False".',
  'sentence-building': 'Scrambled words that form a sentence. words array with all words, correctAnswer is the correct sentence string.',
  'translation': 'A Spanish sentence to translate into English. correctAnswer is the English translation.',
};

interface GenerateRequest {
  level: string;
  topic: string;
  weakTopics?: string[];
  count?: number;
  exerciseTypes?: string[];
  focusOn?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body: GenerateRequest = await request.json();
    const {
      level = 'A1',
      topic = 'General',
      weakTopics = [],
      count = 5,
      exerciseTypes = ['multiple-choice', 'fill-blank', 'true-false'],
      focusOn = '',
    } = body;

    const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
    const apiToken = process.env.CLOUDFLARE_API_TOKEN;

    if (!accountId || !apiToken) {
      return NextResponse.json({ error: 'Cloudflare credentials not configured' }, { status: 500 });
    }

    const levelCtx = LEVEL_CONTEXT[level] || LEVEL_CONTEXT.A1;
    const typeDescriptions = exerciseTypes
      .map(t => `- "${t}": ${EXERCISE_TYPE_PROMPTS[t] || 'A practice exercise.'}`)
      .join('\n');

    const weakFocus = weakTopics.length > 0
      ? `\nPRIORITY: Focus especially on these topics where the student has struggled: ${weakTopics.join(', ')}.`
      : '';

    const extraFocus = focusOn ? `\nAdditional focus: ${focusOn}` : '';

    const systemPrompt = `You are an expert English language teacher creating exercises for students. Return ONLY valid JSON, no other text.`;

    const userPrompt = `Create exactly ${count} English practice exercises for a ${level} level student (${levelCtx}).

Topic area: ${topic}${weakFocus}${extraFocus}

Exercise types to use (rotate through them):
${typeDescriptions}

Return a JSON array of exactly ${count} exercise objects. Each object must have:
- "id": unique string like "gen-${level.toLowerCase()}-1"
- "type": one of [${exerciseTypes.map(t => `"${t}"`).join(', ')}]
- "level": "${level}"
- "topic": topic string
- "difficulty": "easy", "medium", or "hard" (progress from easy to harder)
- "content": object containing:
  - "title": "Práctica personalizada"
  - "instructions": clear instruction in Spanish for what to do
  - "question": the exercise question/sentence (string)
  - "options": array of strings (for multiple-choice and true-false only)
  - "correctAnswer": the correct answer
  - "explanation": brief explanation in Spanish of why the answer is correct
- "topicName": topic display name

IMPORTANT:
- Make exercises varied and educational, with a clear progression from easy to harder
- Use natural English, avoid artificial or overly simple examples
- For fill-blank: the sentence must be grammatically complete with the correct word inserted
- For multiple-choice: make distractors plausible but clearly wrong to an educated student
- Ensure all exercises are appropriate for ${level} level

Return ONLY the JSON array, nothing else.`;

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          max_tokens: 3000,
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error('Llama exercise gen error:', err);
      return NextResponse.json({ error: 'AI generation failed' }, { status: 500 });
    }

    const data = await res.json() as { result?: { response?: unknown } };
    const raw = coerceCloudflareResponseToText(data.result?.response);

    const jsonMatch = raw.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error('No JSON array found in response:', raw.slice(0, 300));
      return NextResponse.json({ error: 'Invalid AI response format' }, { status: 500 });
    }

    let exercises: any[];
    try {
      exercises = JSON.parse(jsonMatch[0]);
    } catch (e) {
      console.error('Failed to parse exercises JSON:', e);
      return NextResponse.json({ error: 'Failed to parse generated exercises' }, { status: 500 });
    }

    const validated = exercises.map((ex: any, i: number) => ({
      id: ex.id || `gen-${level.toLowerCase()}-${Date.now()}-${i}`,
      type: ex.type || exerciseTypes[i % exerciseTypes.length],
      level: ex.level || level,
      topic: ex.topic || topic,
      difficulty: ex.difficulty || 'medium',
      content: {
        title: ex.content?.title || 'Práctica personalizada',
        instructions: ex.content?.instructions || 'Responde la pregunta.',
        question: ex.content?.question || ex.content?.text || '',
        options: ex.content?.options || [],
        correctAnswer: ex.content?.correctAnswer ?? '',
        explanation: ex.content?.explanation || '',
      },
      topicName: ex.topicName || topic,
      isAIGenerated: true,
    }));

    return NextResponse.json({ exercises: validated });
  } catch (error: any) {
    console.error('Generate exercises error:', error);
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}
