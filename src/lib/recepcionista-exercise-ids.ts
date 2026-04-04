/** IDs de ejercicios del curso Inglés para recepcionista (A1–B2), p. ej. rec-b2-u1-l1-g1 */
export function isRecepcionistaExerciseId(id: string | undefined): boolean {
  if (!id) return false;
  return /^rec-(a1|a2|b1|b2)-/i.test(id);
}
