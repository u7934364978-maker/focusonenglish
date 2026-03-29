/**
 * Configuración compartida para práctica generada con Llama (`generateExercisesWithLlama`).
 * Debe coincidir con `AIExercisePractice` (unidades de curso) y con la sesión diaria A1
 * para misma mezcla de tipos y criterios pedagógicos.
 */
export const AI_PRACTICE_EXERCISE_TYPES = [
  'multiple-choice',
  'fill-blank',
  'true-false',
  'translation',
] as const;

export type AiPracticeExerciseType = (typeof AI_PRACTICE_EXERCISE_TYPES)[number];

/**
 * Repite el ciclo MC → fill-blank → T/F → traducción hasta cubrir `count` ítems
 * (misma lógica que antes en el cliente con array inline de longitud fija 8).
 */
export function expandPracticeExerciseTypesForCount(count: number): string[] {
  const base = [...AI_PRACTICE_EXERCISE_TYPES];
  if (count <= 0) return [];
  return Array.from({ length: count }, (_, i) => base[i % base.length]);
}
