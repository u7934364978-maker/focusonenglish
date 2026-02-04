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
    case 'true_false':
      if (interaction.correct_sentence_en) {
        return `${prefix}${interaction.correct_sentence_en}`;
      }
      if (interaction.options && interaction.correct_answer) {
        const correctOption = interaction.options.find(opt => opt.id === interaction.correct_answer);
        return correctOption ? `${prefix}${correctOption.text}` : "";
      }
      break;

    case 'multiple_choice':
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
    case 'fill_blanks':
    case 'fill_blank':
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

export function getEncouragingMessage(isCorrect: boolean, failCount: number): string {
  if (isCorrect) {
    const successMessages = [
      "¡Excelente!",
      "¡Muy bien!",
      "¡Buen trabajo!",
      "¡Increíble!",
      "¡Perfecto!",
      "¡Lo lograste!",
      "¡Sigue así!",
      "¡Eres una máquina!",
      "¡Impresionante!",
      "¡Qué crack!"
    ];
    return successMessages[Math.floor(Math.random() * successMessages.length)];
  } else {
    if (failCount === 1) {
      return "¡Casi! Inténtalo una vez más.";
    } else if (failCount === 2) {
      return "¡No te rindas! Fíjate bien en los detalles.";
    } else {
      return "No pasa nada, aquí tienes la solución para aprender:";
    }
  }
}
