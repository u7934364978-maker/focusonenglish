import { InteractionSchema } from '../course-engine/schema';

/**
 * Valida interacciones del motor adaptativo / premium (`IndexedInteraction`)
 * frente a `InteractionSchema` (distinto del envelope `courseExerciseSchema`).
 */
export function validateInteractionForApi(raw: unknown): {
  ok: boolean;
  issues: string[];
} {
  const r = InteractionSchema.safeParse(raw);
  if (r.success) {
    return { ok: true, issues: [] };
  }
  return {
    ok: false,
    issues: r.error.issues.map(
      (i) => `${i.path.length ? i.path.join('.') : '(root)'}: ${i.message}`,
    ),
  };
}
