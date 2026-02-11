import { Exercise } from '../../exercise-generator';
import { PremiumInteraction } from '../../../types/premium-course';

export function mapExerciseToPremium(exercise: Exercise): PremiumInteraction {
  const base: Partial<PremiumInteraction> = {
    interaction_id: exercise.id,
    type: exercise.type,
    mastery_tag: exercise.topic || 'general',
    explanation: (exercise.content as any).questions?.[0]?.explanation || (exercise.content as any).explanation,
  };

  if (exercise.type === 'multiple-choice') {
    const q = (exercise.content as any).questions[0];
    return {
      ...base,
      type: 'multiple_choice',
      prompt_es: 'Elige la opción correcta:',
      stimulus_en: q.question,
      options: q.options.map((opt: string, i: number) => ({ id: `opt-${i}`, text: opt })),
      correct_answer: q.correctAnswer,
    } as PremiumInteraction;
  }

  if (exercise.type === 'fill-blank') {
    const q = (exercise.content as any).questions[0];
    return {
      ...base,
      type: 'fill_blank',
      prompt_es: 'Completa el espacio en blanco:',
      stimulus_en: q.text,
      correct_answer: q.correctAnswers[0],
    } as PremiumInteraction;
  }

  if (exercise.type === 'matching') {
    const pairs = (exercise.content as any).pairs;
    return {
      ...base,
      type: 'matching',
      prompt_es: 'Une las parejas correspondientes:',
      pairs: pairs.map((p: any, i: number) => ({
        id: `pair-${i}`,
        left: p.front,
        right: p.back
      }))
    } as PremiumInteraction;
  }

  // Fallback
  return {
    ...base,
    prompt_es: 'Resuelve el ejercicio:',
    type: exercise.type
  } as PremiumInteraction;
}
