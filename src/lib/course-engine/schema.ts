import { z } from 'zod';

// ============================================
// BASE SCHEMAS
// ============================================

export const CEFRLevelSchema = z.enum(['A1', 'A2', 'B1', 'B2', 'C1', 'C2']);

export const BaseInteractionSchema = z.object({
  interaction_id: z.string(),
  unit_id: z.string().optional(),
  unit_order: z.number().optional(),
  prompt_es: z.string().optional(),
  prompt: z.string().optional(),
  explanation: z.string().optional(),
  mastery_tag: z.string().optional(), // Specific skill (e.g., "past-simple-affirmative")
  concept_tags: z.array(z.string()).optional(), // Broader categories (e.g., ["grammar", "verbs"])
  complexity: z.number().min(1).max(4).optional(), // 1: Recognition, 2: Guided, 3: Controlled, 4: Free
});

// ============================================
// SPECIFIC INTERACTION SCHEMAS
// ============================================

const OptionSchema = z.object({
  id: z.string(),
  text: z.string(),
});

const MultipleChoiceSchema = BaseInteractionSchema.extend({
  type: z.literal('multiple_choice'),
  options: z.array(OptionSchema),
  correct_answer: z.string(),
});

const TrueFalseSchema = BaseInteractionSchema.extend({
  type: z.literal('true_false'),
  correct_answer: z.union([z.boolean(), z.string()]),
  options: z.array(OptionSchema).optional(),
});

const ReorderWordsSchema = BaseInteractionSchema.extend({
  type: z.literal('reorder_words'),
  options: z.array(OptionSchema),
  correct_answer: z.array(z.string()),
});

const TransformationSchema = BaseInteractionSchema.extend({
  type: z.literal('transformation'),
  stimulus_en: z.string().optional(),
  correct_answer: z.union([z.string(), z.any()]),
  tip_es: z.string().optional(),
});

const AudioPlayerSchema = BaseInteractionSchema.extend({
  type: z.literal('audio_player'),
  audio_url: z.string().optional(),
  transcript: z.string().optional(),
});

const MatchingSchema = BaseInteractionSchema.extend({
  type: z.literal('matching'),
  pairs: z.array(z.object({
    id: z.string(),
    left: z.string(),
    right: z.string(),
  })),
  correct_answer: z.any().optional(),
});

const FillBlanksSchema = BaseInteractionSchema.extend({
  type: z.literal('fill_blanks'),
  stimulus_en: z.string().optional(),
  correct_answer: z.union([z.string(), z.array(z.string())]),
});

const ShortWritingSchema = BaseInteractionSchema.extend({
  type: z.literal('short_writing'),
  stimulus_es: z.string().optional(),
  correct_answer: z.string(),
  validation_regex: z.string().optional(),
});

const CategorizationSchema = BaseInteractionSchema.extend({
  type: z.literal('categorization'),
  categories: z.array(z.object({
    id: z.string(),
    title: z.string(),
    items: z.array(z.union([OptionSchema, z.string()])),
  })),
  correct_answer: z.any().optional(),
});

const ReadingComprehensionSchema = BaseInteractionSchema.extend({
  type: z.literal('reading-comprehension'),
  title: z.string().optional(),
  text: z.string(),
  question: z.string(),
  options: z.array(OptionSchema),
  correct_answer: z.string(),
});

const FlashcardSchema = BaseInteractionSchema.extend({
  type: z.literal('flashcard'),
  stimulus_en: z.string().optional(),
  correct_answer: z.string().optional(),
  cards: z.array(z.object({
    id: z.string().optional(),
    front: z.string(),
    back: z.string(),
  })).optional(),
});

const MultipleChoiceClozeSchema = BaseInteractionSchema.extend({
  type: z.literal('multiple_choice_cloze'),
  main_text: z.string().optional(),
  prompt: z.string().optional(),
  gaps: z.array(z.object({
    id: z.string(),
    options: z.array(OptionSchema),
  })),
  correct_answer: z.record(z.string(), z.string()),
});

const MultipleMatchingSchema = BaseInteractionSchema.extend({
  type: z.literal('multiple_matching'),
  stimulus: z.string().optional(),
  items: z.array(z.object({
    id: z.string(),
    text: z.string(),
    match_id: z.string().optional(),
  })),
  matches: z.array(z.object({
    id: z.string(),
    text: z.string(),
  })),
  correct_answer: z.record(z.string(), z.string()),
});

const GenericInteractionSchema = BaseInteractionSchema.extend({
  type: z.enum([
    'ai-mission',
    'dictation_guided',
    'odd_one_out',
    'speaking_task',
    'writing_task',
    'touch_word_audio',
    'mini_dictation',
    'branching_dialogue',
    'voice_note',
    'chat_simulation',
    'ar_lite',
    'spot_the_difference',
    'video',
  ]),
  stimulus_en: z.string().optional(),
  stimulus_es: z.string().optional(),
  stimulus: z.string().optional(),
  tts_en: z.string().optional(),
  instruction_en: z.string().optional(),
  options: z.array(z.any()).optional(),
  correct_answer: z.any().optional(),
  video: z.any().optional(),
  hotspots: z.array(z.any()).optional(),
  predictive_suggestions: z.array(z.string()).optional(),
  audio_target: z.string().optional(),
  chat_history: z.array(z.any()).optional(),
});

// Union for all interaction types
export const InteractionSchema = z.union([
  MultipleChoiceSchema,
  TrueFalseSchema,
  ReorderWordsSchema,
  MatchingSchema,
  FillBlanksSchema,
  CategorizationSchema,
  ReadingComprehensionSchema,
  ShortWritingSchema,
  FlashcardSchema,
  TransformationSchema,
  AudioPlayerSchema,
  MultipleChoiceClozeSchema,
  MultipleMatchingSchema,
  GenericInteractionSchema,
]);

// ============================================
// COURSE STRUCTURE SCHEMAS
// ============================================

export const BlockSchema = z.object({
  block_id: z.string(),
  title: z.string(),
  content: z.array(InteractionSchema),
});

export const CourseMetadataSchema = z.object({
  unit_id: z.string(),
  unit_title: z.string(),
  level: CEFRLevelSchema,
  total_duration_minutes: z.number().optional(),
  language_ui: z.string().optional(),
  target_language: z.string().optional(),
});

export const CourseUnitSchema = z.object({
  course: CourseMetadataSchema,
  learning_outcomes: z.array(z.string()).optional(),
  blocks: z.array(BlockSchema),
});

export type CourseUnit = z.infer<typeof CourseUnitSchema>;
export type Interaction = z.infer<typeof InteractionSchema>;
export type Block = z.infer<typeof BlockSchema>;
