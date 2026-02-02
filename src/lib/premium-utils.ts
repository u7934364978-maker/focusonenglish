import { PremiumInteraction, PremiumOption, PremiumPair, PremiumCategory } from "@/types/premium-course";

export function isLikelyEnglish(text: string): boolean {
  if (!text) return false;
  // Simple heuristic: check for Spanish-specific characters
  const spanishChars = /[áéíóúüñ¿¡]/i;
  return !spanishChars.test(text);
}

export function getSolutionText(interaction: PremiumInteraction): string {
  if (!interaction) return "";

  const prefix = "";

  switch (interaction.type) {
    case 'multiple_choice':
    case 'true_false':
    case 'odd_one_out':
    case 'role_play':
      if (interaction.options && interaction.correct_answer) {
        const correctOption = interaction.options.find(opt => opt.id === interaction.correct_answer);
        return correctOption ? `${prefix}${correctOption.text}` : "";
      }
      break;

    case 'reorder_words':
      if (Array.isArray(interaction.correct_answer) && interaction.options) {
        const solution = interaction.correct_answer
          .map(id => interaction.options?.find(opt => opt.id === id)?.text)
          .filter(Boolean)
          .join(" ");
        return `${prefix}${solution}`;
      }
      break;

    case 'matching':
      if (interaction.pairs) {
        const solution = interaction.pairs
          .map(pair => `${pair.left} → ${pair.right}`)
          .join(", ");
        return `${prefix}${solution}`;
      }
      break;

    case 'transformation':
      if (typeof interaction.correct_answer === 'string') {
        return `${prefix}${interaction.correct_answer}`;
      }
      break;

    case 'categorization':
      if (interaction.categories) {
        const solution = interaction.categories
          .map(cat => `${cat.title || cat.name || 'Categoría'}: ${cat.items.join(", ")}`)
          .join(" | ");
        return `${prefix}${solution}`;
      }
      break;

    case 'short_writing':
    case 'dictation_guided':
      if (interaction.correct_answer_es) {
        return `${prefix}${interaction.correct_answer_es}`;
      } else if (typeof interaction.correct_answer === 'string') {
        return `${prefix}${interaction.correct_answer}`;
      }
      break;

    default:
      if (typeof interaction.correct_answer === 'string') {
        return `${prefix}${interaction.correct_answer}`;
      }
  }

  return "";
}
