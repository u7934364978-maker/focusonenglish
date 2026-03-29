import { z } from 'zod';

/**
 * Plantillas alineadas con `src/lib/course/a1/unit-1-*` (y el resto de unidades A1).
 * Sirven para: prompts de IA, validación de JSON generado, tests.
 *
 * El envelope completo (`id`, `level`, `topic`, …) sigue en `course-exercise-schema.ts`;
 * aquí se fija la **forma mínima de `content`** por tipo.
 */

/** Tipos de ejercicio que aparecen de forma recurrente en el A1 (unidad 1 como referencia). */
export const A1_TEMPLATE_TYPES = [
  'fill-blank',
  'multiple-choice',
  'sentence-building',
  'true-false',
  'matching',
  'reading',
  'listening',
  'pronunciation',
  'writing',
] as const;

export type A1TemplateType = (typeof A1_TEMPLATE_TYPES)[number];

export const A1TemplateTypeSchema = z.enum(A1_TEMPLATE_TYPES);

/**
 * Instrucciones para prompts de generación (Llama/OpenAI). Debe mantenerse alineado con los Zod
 * de este archivo (`a1GeneratedContentShapeSchema` / `a1GeneratedExerciseSchema`).
 */
export const A1_GENERATION_PROMPT_SPEC = `
=== A1 STRICT SHAPE (must match server validator) ===
Each exercise object MUST include at root: "type", "level", "topic", "topicName", optional "difficulty" ("easy"|"medium"|"hard"), optional "transcript" (string).

Use "content" EXACTLY as follows for each "type" (do not mix shapes):

• type "fill-blank":
  content = { "title": string, "instructions": string, "questions": [ { "question": string (use ___ for gap), "options": string[] (2–6 distractors/word bank), "correctAnswer": string (the exact correct word), "explanation": string } ] }
  At least 1 question.

• type "multiple-choice":
  content = { "title", "instructions", "questions": [ { "question", "options": string[] (2–6), "correctAnswer": integer (0-based index of correct option), "explanation" } ] }
  At least 1 question.

• type "true-false":
  content = { "title", "instructions", "questions": [ { "question", "options": ["True","False"] exactly, "correctAnswer": "True" or "False", "explanation" } ] }
  At least 1 question.

• type "sentence-building":
  content = { "title", "instructions", "correctSentence": string (full correct sentence), "words": string[] (min 2, scrambled words) }
  NO "questions" array for this type.

• type "matching":
  content = { "title", "instructions", "pairs": [ { "id": string, "left": string, "right": string } ] } with at least 2 pairs.

• type "reading" OR "listening":
  content = { "title", "instructions", "questions": [ EXACTLY ONE question object ] } where that question is EITHER multiple-choice (numeric correctAnswer index) OR true/false (options True/False, string correctAnswer).
  Put the passage or script in the ROOT field "transcript" on the exercise (not only inside content).

• type "pronunciation":
  content = { "title", "instructions", "targetText": string (phrase to say), "expectedResponse": string in PLAIN English for TTS — NO bilingual glosses like [[en|es]] inside expectedResponse }

• type "writing":
  content = { "title", "instructions", "prompt": string, "minWords": positive integer, "maxWords": positive integer }

General: short sentences, simple A1 vocabulary; explanations may use [[English|Spanish]] glosses when helpful.
`.trim();

const bilingualOrPlain = z.string().min(1);

/** Pregunta: hueco con banco de opciones (string correcto). */
export const a1FillBlankQuestionSchema = z.object({
  question: bilingualOrPlain,
  options: z.array(z.string()).min(2).max(6),
  correctAnswer: z.string(),
  explanation: bilingualOrPlain,
});

/** Pregunta: opción correcta por índice. */
export const a1MultipleChoiceQuestionSchema = z.object({
  question: bilingualOrPlain,
  options: z.array(z.string()).min(2).max(6),
  correctAnswer: z.number().int().min(0),
  explanation: bilingualOrPlain,
});

/** T/F con respuesta textual True/False (como en el curso A1). */
export const a1TrueFalseQuestionSchema = z.object({
  question: bilingualOrPlain,
  options: z.array(z.string()).length(2),
  correctAnswer: z.enum(['True', 'False']),
  explanation: bilingualOrPlain,
});

export const a1SentenceBuildingContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  correctSentence: bilingualOrPlain,
  words: z.array(bilingualOrPlain).min(2),
});

export const a1MatchingContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  pairs: z
    .array(
      z.object({
        id: z.string().min(1),
        left: bilingualOrPlain,
        right: bilingualOrPlain,
      }),
    )
    .min(2),
});

/** Lectura/escucha: una pregunta por ítem; el texto base va en `transcript` del ejercicio padre. */
export const a1ReadingListeningQuestionSchema = z.union([
  a1MultipleChoiceQuestionSchema,
  a1TrueFalseQuestionSchema,
]);

export const a1ReadingListeningContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  questions: z.array(a1ReadingListeningQuestionSchema).min(1).max(1),
});

export const a1PronunciationContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  targetText: bilingualOrPlain,
  /** Inglés plano — sin `[[|]]` (normas TTS/evaluación). */
  expectedResponse: z.string().min(1).refine((s) => !s.includes('[['), {
    message: 'expectedResponse must be plain English (no [[|]])',
  }),
});

export const a1WritingContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  prompt: bilingualOrPlain,
  minWords: z.number().int().positive(),
  maxWords: z.number().int().positive(),
});

/** Contenidos con `questions[]` estándar (gramática / vocab). */
export const a1QuestionsContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  questions: z.array(z.union([a1FillBlankQuestionSchema, a1MultipleChoiceQuestionSchema])).min(1),
});

export const a1TrueFalseContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  questions: z.array(a1TrueFalseQuestionSchema).min(1),
});

export const a1FillBlankOnlyContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  questions: z.array(a1FillBlankQuestionSchema).min(1),
});

export const a1MultipleChoiceOnlyContentSchema = z.object({
  title: bilingualOrPlain,
  instructions: bilingualOrPlain,
  questions: z.array(a1MultipleChoiceQuestionSchema).min(1),
});

/**
 * Discriminación por `type`: lo que debe devolver la IA antes de envolver en `Exercise`.
 */
export const a1GeneratedContentShapeSchema = z.discriminatedUnion('type', [
  z.object({ type: z.literal('fill-blank'), content: a1FillBlankOnlyContentSchema }),
  z.object({ type: z.literal('multiple-choice'), content: a1MultipleChoiceOnlyContentSchema }),
  z.object({ type: z.literal('sentence-building'), content: a1SentenceBuildingContentSchema }),
  z.object({ type: z.literal('true-false'), content: a1TrueFalseContentSchema }),
  z.object({ type: z.literal('matching'), content: a1MatchingContentSchema }),
  z.object({ type: z.literal('reading'), content: a1ReadingListeningContentSchema }),
  z.object({ type: z.literal('listening'), content: a1ReadingListeningContentSchema }),
  z.object({ type: z.literal('pronunciation'), content: a1PronunciationContentSchema }),
  z.object({ type: z.literal('writing'), content: a1WritingContentSchema }),
]);

export type A1GeneratedContentShape = z.infer<typeof a1GeneratedContentShapeSchema>;

/** Contenido validado (solo `content`, sin el discriminador `type`). */
export type A1ValidatedContent = z.infer<typeof a1GeneratedContentShapeSchema> extends infer U
  ? U extends { content: infer C }
    ? C
    : never
  : never;

/** Payload mínimo para validar: type + content (+ metadatos); útil tras generación IA. */
export const a1GeneratedExerciseSchema = z
  .object({
    type: A1TemplateTypeSchema,
    topic: z.string().min(1),
    topicName: z.string().min(1),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    content: z.unknown(),
    transcript: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    const r = a1GeneratedContentShapeSchema.safeParse({ type: data.type, content: data.content });
    if (!r.success) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message:
          r.error.issues.map((i) => `${i.path.join('.')}: ${i.message}`).join('; ') || 'Invalid A1 content',
      });
    }
  });

export type A1GeneratedExercisePayload = z.infer<typeof a1GeneratedExerciseSchema>;

/** Valida `content` según el `type` A1. */
export function parseA1ContentByType(
  type: A1TemplateType,
  content: unknown,
): { success: true; data: A1ValidatedContent } | { success: false; error: z.ZodError } {
  const union = a1GeneratedContentShapeSchema.safeParse({ type, content });
  if (!union.success) {
    return { success: false, error: union.error };
  }
  return { success: true, data: union.data.content };
}
