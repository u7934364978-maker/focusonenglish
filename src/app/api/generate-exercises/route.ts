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

function buildFallbackExercises(params: {
  level: string;
  topic: string;
  count: number;
  exerciseTypes: string[];
}) {
  const { level, topic, count, exerciseTypes } = params;

  const tfOptions = ['True', 'False'];

  const bank = [
    {
      question: '[[What is your name?|¿Cómo te llamas?]]',
      options: ['I am John', 'My name is John', 'I name John', 'My is John'],
      correctAnswer: 1,
      explanation: '[[We say \"My name is...\" to introduce ourselves.|Decimos \"My name is...\" para presentarnos.]]',
    },
    {
      question: '[[Choose the correct verb: I ___ a student.|Elige el verbo correcto: I ___ a student.]]',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 0,
      explanation: '[[With \"I\", we use \"am\".|Con \"I\", usamos \"am\".]]',
    },
    {
      question: '[[Choose the correct article: ___ apple.|Elige el artículo correcto: ___ apple.]]',
      options: ['a', 'an', 'the', '—'],
      correctAnswer: 1,
      explanation: '[[We use \"an\" before vowel sounds (a,e,i,o,u).|Usamos \"an\" antes de sonido vocal.]]',
    },
    {
      question: '[[Choose the correct word: This is my ___. (mother)|Elige la palabra correcta: This is my ___. (mother)]]',
      options: ['mother', 'brother', 'teacher', 'name'],
      correctAnswer: 0,
      explanation: '[[\"Mother\" means \"madre\".|\"Mother\" significa \"madre\".]]',
    },
    {
      question: '[[Translate: \"Hola\"|Traduce: \"Hola\"]]',
      correctAnswer: 'Hello',
      explanation: '[[\"Hola\" translates as \"Hello\".|\"Hola\" se traduce como \"Hello\".]]',
    },
    {
      question: '[[Complete: I ___ from Spain.|Completa: I ___ from Spain.]]',
      correctAnswer: 'am',
      explanation: '[[With \"I\", we use \"am\".|Con \"I\", usamos \"am\".]]',
    },
  ];

  const pick = (i: number) => bank[i % bank.length];

  return Array.from({ length: count }, (_, i) => {
    const type = exerciseTypes[i % exerciseTypes.length] || 'multiple-choice';
    const base = pick(i);

    const normalized = {
      id: `gen-${level.toLowerCase()}-${Date.now()}-${i}`,
      type,
      level,
      topic,
      difficulty: 'easy',
      topicName: topic,
      isAIGenerated: false,
      content: {
        title: 'Práctica personalizada',
        instructions: 'Responde la pregunta.',
        questions: [
          {
            question: base.question,
            options:
              type === 'true-false'
                ? tfOptions
                : Array.isArray(base.options)
                  ? base.options
                  : [],
            correctAnswer:
              type === 'translation'
                ? base.correctAnswer
                : type === 'fill-blank'
                  ? (typeof base.correctAnswer === 'string' ? base.correctAnswer : '')
                  : type === 'true-false'
                    ? 'True'
                    : base.correctAnswer,
            explanation: base.explanation,
            type,
          },
        ],
      },
    };

    // Ensure multiple-choice always has 4 options.
    if (type === 'multiple-choice' && normalized.content.questions[0].options.length !== 4) {
      normalized.content.questions[0].options = ['A', 'B', 'C', 'D'];
      normalized.content.questions[0].correctAnswer = 0;
      normalized.content.questions[0].explanation = '[[Ejercicio de reserva por timeout.|Fallback por timeout.]]';
    }

    return normalized;
  });
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

    const safeCount = Math.max(1, Math.min(8, Number(count) || 5));

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

    const userPrompt = `Create exactly ${safeCount} English practice exercises for a ${level} level student (${levelCtx}).

Topic area: ${topic}${weakFocus}${extraFocus}

Exercise types to use (rotate through them):
${typeDescriptions}

Return a JSON array of exactly ${safeCount} exercise objects. Each object must have:
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

    const controller = new AbortController();
    // Cloudflare often times out around ~30s at the edge; keep a buffer.
    const timeoutMs = 25000;
    const timeout = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/@cf/meta/llama-3.3-70b-instruct-fp8-fast`,
      {
        method: 'POST',
        signal: controller.signal,
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user', content: userPrompt },
          ],
          // Reduce token budget to lower latency; UI only needs short exercises.
          max_tokens: 1400,
        }),
      }
    ).finally(() => clearTimeout(timeout));

    if (!res.ok) {
      const err = await res.text();
      console.error('Llama exercise gen error:', err);
      const fallback = buildFallbackExercises({ level, topic, count: safeCount, exerciseTypes });
      return NextResponse.json({ exercises: fallback, warning: 'AI generation failed; returned fallback exercises' });
    }

    const data = await res.json() as { result?: { response?: unknown } };
    const raw = coerceCloudflareResponseToText(data.result?.response);

    const jsonMatch = raw.match(/\[[\s\S]*\]/);
    if (!jsonMatch) {
      console.error('No JSON array found in response:', raw.slice(0, 300));
      const fallback = buildFallbackExercises({ level, topic, count: safeCount, exerciseTypes });
      return NextResponse.json({ exercises: fallback, warning: 'Invalid AI response; returned fallback exercises' });
    }

    let exercises: any[];
    try {
      exercises = JSON.parse(jsonMatch[0]);
    } catch (e) {
      console.error('Failed to parse exercises JSON:', e);
      const fallback = buildFallbackExercises({ level, topic, count: safeCount, exerciseTypes });
      return NextResponse.json({ exercises: fallback, warning: 'Parse error; returned fallback exercises' });
    }

    const normalizeToQuestionsShape = (ex: any) => {
      const content = ex?.content ?? {};
      const questionText = content.question ?? content.text ?? content.prompt ?? '';
      const options = Array.isArray(content.options) ? content.options : [];
      const correctAnswer = content.correctAnswer ?? '';
      const explanation = content.explanation || '';

      // Many UI components expect `content.questions: [{...}]` even for single-question exercises.
      return {
        ...ex,
        content: {
          ...content,
          questions: Array.isArray(content.questions) && content.questions.length > 0
            ? content.questions
            : [
                {
                  question: questionText,
                  options,
                  correctAnswer,
                  explanation,
                  type: ex?.type,
                },
              ],
        },
      };
    };

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
    })).map(normalizeToQuestionsShape);

    return NextResponse.json({ exercises: validated });
  } catch (error: any) {
    if (error?.name === 'AbortError') {
      // Timeout talking to Cloudflare AI: return fallback exercises quickly.
      try {
        const body: GenerateRequest = await request.json().catch(() => ({} as any));
        const level = body.level || 'A1';
        const topic = body.topic || 'General';
        const count = Math.max(1, Math.min(8, Number(body.count) || 5));
        const exerciseTypes = body.exerciseTypes || ['multiple-choice', 'fill-blank', 'true-false'];
        const fallback = buildFallbackExercises({ level, topic, count, exerciseTypes });
        return NextResponse.json({ exercises: fallback, warning: 'AI timeout; returned fallback exercises' });
      } catch {
        return NextResponse.json({ error: 'AI timeout' }, { status: 504 });
      }
    }
    console.error('Generate exercises error:', error);
    return NextResponse.json({ error: error.message || 'Internal error' }, { status: 500 });
  }
}
