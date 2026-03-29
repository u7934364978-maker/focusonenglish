/**
 * Tipos que `PremiumSession` puede pintar (evita ítems que caen en "Actividad no implementada").
 */
const PREMIUM_RENDERABLE_TYPES = new Set([
  'pronunciation',
  'audio_player',
  'reading-comprehension',
  'writing-analysis',
  'vocabulary-match',
  'ai-mission',
  'flashcard',
  'listening_image_mc',
  'writing_task',
  'speaking_task',
  'reorder_words',
  'word-search',
  'crossword',
  'multiple_matching',
  'gapped_text',
  'multiple_choice_cloze',
  'matching',
  'multiple_choice',
  'odd_one_out',
  'role_play',
  'chat_simulation',
  'transformation',
  'fill_blanks',
  'fill_blank',
  'fill-blank',
  'fill-blanks-mc',
  'categorization',
  'true_false',
  'short_writing',
  'dictation_guided',
  'listening_dictation',
]);

export function isPremiumRenderableType(type: string | undefined): boolean {
  if (!type) return false;
  return PREMIUM_RENDERABLE_TYPES.has(type);
}
