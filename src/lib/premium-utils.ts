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
    case 'reading-comprehension':
    case 'writing-analysis':
      const q = (interaction.type === 'reading-comprehension' || interaction.type === 'writing-analysis')
        ? ((interaction.options && interaction.options.length > 0) ? interaction : (interaction.content?.questions?.[0] || interaction.content || interaction))
        : interaction;
      
      const options = q.options || interaction.options;
      const correctAnswer = q.correct_answer || q.correctAnswer || interaction.correct_answer;

      if (options && correctAnswer) {
        const correctOption = options.find((opt: any) => 
          (opt.id && opt.id === correctAnswer) || 
          (opt.text && opt.text === correctAnswer) ||
          (opt === correctAnswer)
        );
        return correctOption ? `${prefix}${typeof correctOption === 'string' ? correctOption : correctOption.text}` : String(correctAnswer);
      }
      return String(correctAnswer || "");

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
    case 'vocabulary-match':
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
    return "¡Excelente!";
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
