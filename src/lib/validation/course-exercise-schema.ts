import { z } from 'zod';
import { CEFRLevelSchema } from '../course-engine/schema';

/**
 * Esquemas Zod alineados con:
 * - `docs/normas-items-curriculum.md` (metadatos, explicaciones, pronunciation)
 * - `ExerciseRenderer` (`content.questions`, `correctAnswer`, `transcript`, etc.)
 *
 * Uso: validación en build, scripts, APIs o tests; no sustituye revisión humana.
 */

/** Tipos que suelen aparecer en rutas de curso + renderer principal. */
export const RENDERER_EXERCISE_TYPES = [
  'multiple-choice',
  'true-false',
  'fill-blank',
  'open-cloze',
  'open-answer',
  'key-word-transformation',
  'reading',
  'reading-comprehension',
  'listening',
  'listening-comprehension',
  'writing',
  'speaking-analysis',
  'pronunciation',
  'sentence-building',
  'spelling',
  'drag-drop',
  'matching',
  'flashcard',
  'word-search',
  'crossword',
  'interactive-dialogue',
] as const;

export type RendererExerciseType = (typeof RENDERER_EXERCISE_TYPES)[number];

export const RendererExerciseTypeSchema = z.enum(
  [...RENDERER_EXERCISE_TYPES] as [RendererExerciseType, ...RendererExerciseType[]],
);

const optionItemSchema = z.union([
  z.string(),
  z.object({ text: z.string() }).passthrough(),
]);

/** Pregunta tal como la consume `ExerciseRenderer` (campos opcionales = datos legacy). */
export const exerciseQuestionSchema = z
  .object({
    id: z.string().optional(),
    question: z.string().optional(),
    text: z.string().optional(),
    prompt: z.string().optional(),
    type: z.string().optional(),
    options: z.array(optionItemSchema).optional(),
    correctAnswer: z
      .union([z.number(), z.string(), z.boolean(), z.array(z.string())])
      .optional(),
    answer: z.union([z.number(), z.string(), z.boolean()]).optional(),
    explanation: z.string().optional(),
    acceptableAnswers: z.union([z.array(z.string()), z.string()]).optional(),
    acceptableAlternatives: z.union([z.array(z.string()), z.string()]).optional(),
    exampleAnswer: z.string().optional(),
    keyWord: z.string().optional(),
    startOfAnswer: z.string().optional(),
    audioUrl: z.string().optional(),
    imageUrl: z.string().optional(),
    targetPhrase: z.string().optional(),
  })
  .passthrough();

export type ExerciseQuestion = z.infer<typeof exerciseQuestionSchema>;

/** `exercise.content` típico en cursos TS (renderer lee title, instructions, questions, text, …). */
export const exerciseContentSchema = z
  .object({
    title: z.string().optional(),
    instructions: z.string().optional(),
    questions: z.array(exerciseQuestionSchema).optional(),
    text: z.string().optional(),
    transcript: z.string().optional(),
    audioUrl: z.string().optional(),
    expectedResponse: z.string().optional(),
    targetText: z.string().optional(),
    evaluationCriteria: z.array(z.string()).optional(),
    modelExample: z.string().optional(),
    expressionHint: z.string().optional(),
    minWords: z.number().optional(),
    maxWords: z.number().optional(),
    words: z.array(z.string()).optional(),
    gridSize: z.number().optional(),
    items: z.array(z.unknown()).optional(),
  })
  .passthrough();

export type ExerciseContent = z.infer<typeof exerciseContentSchema>;

/** Metadatos de ítem (normas §3) + contenido flexible. `type` como string para no bloquear tipos nuevos del catálogo. */
export const courseExerciseSchema = z
  .object({
    id: z.string().min(1, 'id obligatorio'),
    type: z.string().min(1, 'type obligatorio'),
    level: CEFRLevelSchema,
    topic: z.string().min(1, 'topic obligatorio'),
    topicName: z.string().min(1, 'topicName obligatorio'),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    content: z.unknown(),
    transcript: z.string().optional(),
    audioUrl: z.string().optional(),
    estimatedTime: z.number().nonnegative().optional(),
    createdAt: z.union([z.date(), z.string()]).optional(),
  })
  .passthrough()
  .superRefine((data, ctx) => {
    if (data.content != null && typeof data.content !== 'object') {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'content debe ser un objeto cuando está presente',
        path: ['content'],
      });
    }
  });

export type CourseExercise = z.infer<typeof courseExerciseSchema>;

const MIN_EXPLANATION_LEN = 15;

function isClosedQuestion(
  exerciseType: string,
  q: ExerciseQuestion,
): boolean {
  if (q.type === 'true-false' || exerciseType === 'true-false') return true;
  if (Array.isArray(q.options) && q.options.length > 0) return true;
  return false;
}

function hasPlainExpectedResponse(content: unknown): boolean {
  if (!content || typeof content !== 'object') return false;
  const er = (content as ExerciseContent).expectedResponse;
  return typeof er === 'string' && er.trim().length > 0;
}

/**
 * Refuerzo editorial (normas §5–§6): explicación mínima en preguntas cerradas;
 * `pronunciation` con `expectedResponse` sin gloss `[[|]]`.
 */
export const courseExerciseSchemaNormsStrict = courseExerciseSchema.superRefine((data, ctx) => {
  const content = data.content;
  if (!content || typeof content !== 'object') return;

  const questions = Array.isArray((content as ExerciseContent).questions)
    ? (content as ExerciseContent).questions!
    : [];

  if (data.type === 'pronunciation') {
    const er = (content as ExerciseContent).expectedResponse;
    if (typeof er === 'string' && er.includes('[[')) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          'expectedResponse debe ser inglés plano para TTS/evaluación (sin [[EN|ES]]) — normas §5.3',
        path: ['content', 'expectedResponse'],
      });
    }
    if (!hasPlainExpectedResponse(content)) {
      const first = questions[0] as ExerciseQuestion | undefined;
      const phrase =
        typeof first?.targetPhrase === 'string' && first.targetPhrase.trim()
          ? first.targetPhrase
          : typeof first?.question === 'string' && first.question.trim()
            ? first.question
            : '';
      if (!phrase.trim()) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            'pronunciation: definir content.expectedResponse o pregunta con targetPhrase/question — renderer',
          path: ['content', 'expectedResponse'],
        });
      }
    }
  }

  for (let i = 0; i < questions.length; i++) {
    const q = questions[i] as ExerciseQuestion;
    if (!isClosedQuestion(data.type, q)) continue;
    const exp = q.explanation;
    if (typeof exp !== 'string' || exp.trim().length < MIN_EXPLANATION_LEN) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `Pregunta ${i}: explanation obligatoria (≥${MIN_EXPLANATION_LEN} caracteres) — normas §5.1 y §6`,
        path: ['content', 'questions', i, 'explanation'],
      });
    }
  }
});

export type CourseExerciseNormsStrict = z.infer<typeof courseExerciseSchemaNormsStrict>;

/** Igual que `ExerciseRenderer`: objeto de contenido efectivo. */
export function getExerciseContent(exercise: {
  content?: unknown;
  [key: string]: unknown;
}): Record<string, unknown> {
  const c = exercise.content;
  if (c && typeof c === 'object' && !Array.isArray(c)) {
    return c as Record<string, unknown>;
  }
  return exercise as Record<string, unknown>;
}

export function parseCourseExercise(data: unknown) {
  return courseExerciseSchema.safeParse(data);
}

export function parseCourseExerciseNormsStrict(data: unknown) {
  return courseExerciseSchemaNormsStrict.safeParse(data);
}

/** Valida solo la forma de `content` cuando ya tienes el envelope aceptado. */
export function parseExerciseContent(content: unknown) {
  return exerciseContentSchema.safeParse(content);
}
