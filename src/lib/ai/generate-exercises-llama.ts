/**
 * Núcleo compartido: Llama (Cloudflare Workers AI) + validación Zod.
 * Usado por POST /api/generate-exercises y por la sesión diaria personalizada.
 */
import { validateExerciseListForApi } from '@/lib/validation/course-exercise-api';
import type { ExerciseListValidationResult } from '@/lib/validation/course-exercise-api';
import { A1_GENERATION_PROMPT_SPEC } from '@/lib/validation/a1-exercise-templates';
import {
  buildPedagogyPromptSection,
  type ExerciseGenerationPedagogyBody,
} from '@/lib/ai/exercise-generation-pedagogy';
import { CF_LLAMA_3_3_70B_INSTRUCT_FP8_FAST } from '@/lib/ai/cloudflare-workers-ai-models';
import {
  GENERATION_PEDAGOGY_QUALITY_BLOCK_EN,
  GENERATION_PEDAGOGY_QUALITY_SYSTEM_ONE_LINER,
} from '@/lib/ai/generation-prompt-quality';
import {
  validateExerciseListPedagogyQuality,
  type PedagogyQualityBatchResult,
} from '@/lib/validation/pedagogy-quality-rules';
import {
  partitionExercisesByPedagogyGate,
  summarizePedagogyGateRejected,
  type PedagogyDisplayGateSummary,
} from '@/lib/validation/pedagogy-pre-display-audit';
import type { z } from 'zod';
import { courseExerciseSchema } from '@/lib/validation/course-exercise-schema';

function coerceCloudflareResponseToText(value: unknown): string {
  if (typeof value === 'string') return value;
  if (value == null) return '';
  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function tryParseExerciseArray(raw: string): unknown[] | null {
  const trimmed = raw.trim();
  if (!trimmed) return null;

  const tryJson = (s: string) => {
    try {
      return JSON.parse(s);
    } catch {
      return null;
    }
  };

  const direct = tryJson(trimmed);
  if (Array.isArray(direct)) return direct;
  if (direct && typeof direct === 'object') {
    const w = direct as { exercises?: unknown; data?: unknown; items?: unknown };
    if (Array.isArray(w.exercises)) return w.exercises;
    if (Array.isArray(w.data)) return w.data;
    if (Array.isArray(w.items)) return w.items;
  }

  const bracket = trimmed.match(/\[[\s\S]*\]/);
  if (bracket) {
    const arr = tryJson(bracket[0]);
    if (Array.isArray(arr)) return arr;
  }

  return null;
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
      explanation:
        '[[We say "My name is..." to introduce ourselves.|Decimos "My name is..." para presentarnos.]]',
    },
    {
      question: '[[Choose the correct verb: I ___ a student.|Elige el verbo correcto: I ___ a student.]]',
      options: ['am', 'is', 'are', 'be'],
      correctAnswer: 0,
      explanation: '[[With "I", we use "am".|Con "I", usamos "am".]]',
    },
    {
      question:
        '[[Choose the correct article: ___ apple.|Elige el artículo correcto: ___ apple.]]',
      options: ['a', 'an', 'the', '—'],
      correctAnswer: 1,
      explanation:
        '[[We use "an" before vowel sounds (a,e,i,o,u).|Usamos "an" antes de sonido vocal.]]',
    },
    {
      question:
        '[[Choose the correct word: This is my ___.|Elige la palabra correcta: This is my ___.]]',
      options: ['mother', 'brother', 'teacher', 'name'],
      correctAnswer: 0,
      explanation: '[["Mother" means "madre".|"Mother" significa "madre".]]',
    },
    {
      question: '[[Translate: "Hola"|Traduce: "Hola"]]',
      correctAnswer: 'Hello',
      explanation: '[["Hola" translates as "Hello".|"Hola" se traduce como "Hello".]]',
    },
    {
      question: '[[Complete: I ___ from Spain.|Completa: I ___ from Spain.]]',
      correctAnswer: 'am',
      explanation: '[[With "I", we use "am".|Con "I", usamos "am".]]',
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
                  ? typeof base.correctAnswer === 'string'
                    ? base.correctAnswer
                    : ''
                  : type === 'true-false'
                    ? 'True'
                    : base.correctAnswer,
            explanation: base.explanation,
            type,
          },
        ],
      },
    };

    if (type === 'multiple-choice' && normalized.content.questions[0].options.length !== 4) {
      normalized.content.questions[0].options = ['A', 'B', 'C', 'D'];
      normalized.content.questions[0].correctAnswer = 0;
      normalized.content.questions[0].explanation =
        '[[Ejercicio de reserva por timeout.|Fallback por timeout.]]';
    }

    if (type === 'fill-blank' && normalized.content.questions[0].options.length < 2) {
      const ans = String(normalized.content.questions[0].correctAnswer || 'answer');
      normalized.content.questions[0].options = [ans, 'option_b', 'option_c'];
    }

    return normalized;
  });
}

const LEVEL_CONTEXT: Record<string, string> = {
  A1: 'absolute beginner. Present simple, basic vocabulary (greetings, numbers, colors, family). Short sentences.',
  A2: 'elementary. Past simple, present continuous, everyday routines.',
  B1: 'intermediate. Present perfect, conditionals, modals, everyday topics.',
  B2: 'upper-intermediate. Passive, reported speech, abstract topics.',
  C1: 'advanced. Nuanced vocabulary, complex argumentation.',
  C2: 'proficiency. Near-native subtlety and range.',
};

const EXERCISE_TYPE_PROMPTS: Record<string, string> = {
  'multiple-choice':
    'Multiple choice: exactly 4 strings in options[]; correctAnswer = 0-based index (integer).',
  'fill-blank':
    'Fill blank: sentence with ___ ; options[] = word bank (at least 2 strings); correctAnswer = exact correct word (string).',
  'true-false':
    'True/false: options must be ["True","False"]; correctAnswer is "True" or "False".',
  'sentence-building':
    'Sentence building: content has words[] (shuffled), correctSentence string; optional title/instructions.',
  translation:
    'Translation: question in Spanish or English as appropriate; correctAnswer = English string.',
  'reading-comprehension':
    'Reading: optional content.text passage; questions[] with MC or T/F as per type.',
  'listening-comprehension':
    'Listening: same shape as reading; transcript can go in exercise.transcript if needed.',
  'key-word-transformation':
    'Key word transformation: each question has keyWord, startOfAnswer, correctAnswer as per course.',
  'word-formation':
    'Word formation: passage with gaps and base words per question number.',
  pronunciation:
    'Pronunciation: content with targetText and expectedResponse (plain English, no [[|]]).',
  writing:
    'Writing: content with prompt, minWords, maxWords.',
  matching:
    'Matching: content with pairs[{ id, left, right }].',
};

function buildSystemPrompt(): string {
  return `You are an expert English teacher aligned with CEFR and communicative teaching. Respect any PEDAGOGICAL CONSTRAINTS block in the user message (objectives, spaced review, vocabulary, grammar, reading/listening focus, oral goals). ${GENERATION_PEDAGOGY_QUALITY_SYSTEM_ONE_LINER} Output MUST be valid JSON only: a single JSON array of exercise objects, no markdown fences, no commentary.`;
}

function buildUserPrompt(params: {
  safeCount: number;
  level: string;
  levelCtx: string;
  topic: string;
  weakTopics: string[];
  exerciseTypes: string[];
  focusOn: string;
  pedagogy?: ExerciseGenerationPedagogyBody;
}): string {
  const { safeCount, level, levelCtx, topic, weakTopics, exerciseTypes, focusOn, pedagogy } =
    params;

  const pedagogyBlock = buildPedagogyPromptSection(pedagogy, { weakTopics, level });

  const typeLines = exerciseTypes
    .map(
      (t) =>
        `- "${t}": ${EXERCISE_TYPE_PROMPTS[t] || 'Follow standard discrete-item rules for this type.'}`,
    )
    .join('\n');

  const weakFocus =
    weakTopics.length > 0
      ? `\nPRIORITY topics (student struggled here): ${weakTopics.join(', ')}.`
      : '';

  const extra = focusOn.trim() ? `\nExtra focus: ${focusOn.trim()}` : '';

  const a1Block =
    level === 'A1'
      ? `

${A1_GENERATION_PROMPT_SPEC}

Follow the above shape exactly for each exercise "type". Do not invent extra fields.
`
      : '';

  return `Create exactly ${safeCount} English practice exercises for CEFR ${level} (${levelCtx}).

Topic area: ${topic}${weakFocus}${extra}
${pedagogyBlock}
Rotate exercise types in order through this list (repeat if needed):
${typeLines}

Required JSON shape — each array element MUST be an object with:
- "id": unique string, e.g. "gen-${level.toLowerCase()}-0"
- "type": one of [${exerciseTypes.map((t) => `"${t}"`).join(', ')}]
- "level": "${level}"
- "topic": string (same theme as above)
- "topicName": human-readable topic label (can match topic)
- "difficulty": "easy" | "medium" | "hard" (progress slightly from easier to harder within the batch)
- "content": {
    "title": string,
    "instructions": string (Spanish is OK for learner-facing instructions),
    "questions": [ /* one or more question objects depending on type */ ]
  }

Question objects (inside content.questions) for discrete types:
- "question": string (the stem; use ___ for gaps in fill-blank)
- "options": string[] (required for multiple-choice, true-false, fill-blank word bank)
- "correctAnswer": number (0-based index) for multiple-choice OR string for fill-blank OR "True"/"False" for true-false
- "explanation": string (why the answer is correct; Spanish OK)

Important:
- For types that use them, include content.questions[] as required; for sentence-building, matching, pronunciation, writing follow the A1 spec instead (no questions[] where forbidden).
- For multiple-choice at non-A1 levels: prefer 4 options unless the type line says otherwise.
- English for stems/options; explanations can be Spanish or bilingual [[en|es]].
${a1Block}

${GENERATION_PEDAGOGY_QUALITY_BLOCK_EN}

Return ONLY the JSON array, nothing else.`;
}

function mergeContentFromAi(ex: Record<string, unknown>): Record<string, unknown> {
  const raw = ex?.content;
  const rawContent =
    raw && typeof raw === 'object' && !Array.isArray(raw) ? { ...(raw as Record<string, unknown>) } : {};

  const content: Record<string, unknown> = {
    ...rawContent,
    title: rawContent.title ?? 'Práctica personalizada',
    instructions: rawContent.instructions ?? 'Responde la pregunta.',
  };

  const hasQuestions = Array.isArray(content.questions) && (content.questions as unknown[]).length > 0;
  if (!hasQuestions) {
    content.question = rawContent.question ?? rawContent.text ?? '';
    content.options = rawContent.options ?? [];
    content.correctAnswer = rawContent.correctAnswer ?? '';
    content.explanation = rawContent.explanation ?? '';
  }

  return content;
}

function normalizeToQuestionsShape(ex: Record<string, unknown>): Record<string, unknown> {
  const content = (ex?.content as Record<string, unknown>) ?? {};
  const questionText = String(content.question ?? content.text ?? content.prompt ?? '');
  const options = Array.isArray(content.options) ? content.options : [];
  const correctAnswer = content.correctAnswer ?? '';
  const explanation = String(content.explanation || '');

  const normalized: Record<string, unknown> = {
    ...ex,
    content: {
      ...content,
      questions:
        Array.isArray(content.questions) && (content.questions as unknown[]).length > 0
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

  if (normalized.type === 'multiple-choice' && Array.isArray((normalized.content as Record<string, unknown>).questions)) {
    const qs = (normalized.content as Record<string, unknown>).questions as Record<string, unknown>[];
    const q = qs[0];
    if (
      q &&
      typeof q.correctAnswer !== 'number' &&
      Array.isArray(q.options) &&
      (q.options as unknown[]).length > 0
    ) {
      const norm = (s: string) => s.toLowerCase().trim().replace(/\s+/g, ' ');
      const answerText = String(q.correctAnswer || '').trim();
      let idx = (q.options as unknown[]).findIndex((opt) => norm(String(opt)) === norm(answerText));
      if (idx < 0) idx = 0;
      q.correctAnswer = idx;
    }
  }

  return normalized;
}

export type GenerateExercisesRequest = {
  level: string;
  topic: string;
  weakTopics?: string[];
  count?: number;
  exerciseTypes?: string[];
  focusOn?: string;
  pedagogy?: ExerciseGenerationPedagogyBody;
};

export type GenerateExercisesLlamaResult = {
  exercises: z.infer<typeof courseExerciseSchema>[];
  validation: ExerciseListValidationResult;
  /** Reglas pedagógicas comprobables (explicación mínima, índices MC, etc.) sobre lo entregado. */
  pedagogyQuality?: PedagogyQualityBatchResult;
  /** Ítems excluidos por la puerta previa a mostrar (PQ_*). */
  pedagogyGate?: PedagogyDisplayGateSummary;
  warning?: string;
};

type CourseEx = z.infer<typeof courseExerciseSchema>;

function finalizeExercisesForDisplay(
  exercises: CourseEx[],
  level: string,
  validation: ExerciseListValidationResult,
  baseWarning?: string,
): GenerateExercisesLlamaResult {
  const { accepted, rejected } = partitionExercisesByPedagogyGate(exercises, level);
  const pedagogyQuality = validateExerciseListPedagogyQuality(accepted, level);

  const parts: string[] = [];
  if (baseWarning?.trim()) parts.push(baseWarning.trim());
  if (rejected.length) {
    parts.push(
      `Puerta pedagógica: se excluyeron ${rejected.length} ítem(s) con problemas PQ_* antes de mostrarlos.`,
    );
    console.warn(
      '[pedagogy-display-gate] excluded:',
      rejected.map((r) => `${r.id}: ${r.issues.map((i) => i.ruleId).join(',')}`).join(' | '),
    );
  }

  return {
    exercises: accepted,
    validation,
    pedagogyQuality,
    ...(rejected.length ? { pedagogyGate: summarizePedagogyGateRejected(rejected) } : {}),
    ...(parts.length ? { warning: parts.join(' ') } : {}),
  };
}

export async function generateExercisesWithLlama(
  body: GenerateExercisesRequest,
): Promise<GenerateExercisesLlamaResult> {
  const {
    level = 'A1',
    topic = 'General',
    weakTopics = [],
    count = 5,
    exerciseTypes = ['multiple-choice', 'fill-blank', 'true-false'],
    focusOn = '',
    pedagogy,
  } = body;

  const safeCount = Math.max(1, Math.min(8, Number(count) || 5));

  const accountId = process.env.CLOUDFLARE_ACCOUNT_ID;
  const apiToken = process.env.CLOUDFLARE_API_TOKEN;

  if (!accountId || !apiToken) {
    throw new Error('Cloudflare credentials not configured');
  }

  const levelCtx = LEVEL_CONTEXT[level] || LEVEL_CONTEXT.A1;
  const safeTypes = exerciseTypes.length > 0 ? exerciseTypes : ['multiple-choice'];

  const userPrompt = buildUserPrompt({
    safeCount,
    level,
    levelCtx,
    topic,
    weakTopics,
    exerciseTypes: safeTypes,
    focusOn,
    pedagogy,
  });

  const maxTokens = Math.min(4096, 250 + safeCount * 380);
  const timeoutMs = Math.min(35000, 15000 + safeCount * 2500);

  const cloudflareCall = async () => {
    const res = await fetch(
      `https://api.cloudflare.com/client/v4/accounts/${accountId}/ai/run/${CF_LLAMA_3_3_70B_INSTRUCT_FP8_FAST}`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${apiToken}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [
            { role: 'system', content: buildSystemPrompt() },
            { role: 'user', content: userPrompt },
          ],
          max_tokens: maxTokens,
        }),
      },
    );

    const text = await res.text();
    return { ok: res.ok, status: res.status, text };
  };

  const finishWithFallback = (warning: string): GenerateExercisesLlamaResult => {
    const fallback = buildFallbackExercises({
      level,
      topic,
      count: safeCount,
      exerciseTypes: safeTypes,
    });
    const { exercises, validation } = validateExerciseListForApi(fallback, { level, topic });
    return finalizeExercisesForDisplay(exercises, level, validation, warning);
  };

  const raced = await Promise.race([
    cloudflareCall(),
    new Promise<{ timeout: true }>((resolve) => setTimeout(() => resolve({ timeout: true }), timeoutMs)),
  ]);

  if ('timeout' in raced) {
    return finishWithFallback('AI timeout; returned fallback exercises');
  }

  const { ok: resOk, text: resText } = raced;

  if (!resOk) {
    console.error('Llama exercise gen error:', resText.slice(0, 500));
    return finishWithFallback('AI generation failed; returned fallback exercises');
  }

  let data: unknown;
  try {
    data = JSON.parse(resText);
  } catch {
    data = { result: { response: resText } };
  }

  const raw = coerceCloudflareResponseToText(
    (data as { result?: { response?: unknown } })?.result?.response ?? data,
  );

  const exercisesParsed = tryParseExerciseArray(raw);
  if (!exercisesParsed) {
    console.error('No JSON array found in response:', raw.slice(0, 300));
    return finishWithFallback('Invalid AI response; returned fallback exercises');
  }

  const exercisesRaw = exercisesParsed as Record<string, unknown>[];

  const validated = exercisesRaw.map((ex, i) => {
    const merged = mergeContentFromAi(ex);
    return normalizeToQuestionsShape({
      id: ex.id || `gen-${level.toLowerCase()}-${Date.now()}-${i}`,
      type: ex.type || safeTypes[i % safeTypes.length],
      level: ex.level || level,
      topic: ex.topic || topic,
      difficulty: ex.difficulty || 'medium',
      content: merged,
      topicName: ex.topicName || topic,
      isAIGenerated: true,
    });
  });

  const { exercises: zodExercises, validation } = validateExerciseListForApi(validated, {
    level,
    topic,
  });

  if (!validation.ok) {
    console.warn(
      '[generate-exercises-llama] envelope:',
      validation.errors.map((e) => `${e.id}: ${e.issues.join('; ')}`).join(' || '),
    );
  }
  if (!validation.a1Template.ok) {
    console.warn(
      '[generate-exercises-llama] A1 template:',
      validation.a1Template.errors.map((e) => `${e.id}: ${e.issues.join('; ')}`).join(' || '),
    );
  }

  const a1OnlyMismatch = validation.ok && !validation.a1Template.ok && level === 'A1';

  const warningParts: string[] = [];
  if (a1OnlyMismatch) {
    warningParts.push(
      'A1 strict template mismatch: exercises are valid for the app but do not match a1GeneratedContentShapeSchema; see validation.a1Template.errors',
    );
  }
  return finalizeExercisesForDisplay(
    zodExercises,
    level,
    validation,
    warningParts.length ? warningParts.join(' ') : undefined,
  );
}
