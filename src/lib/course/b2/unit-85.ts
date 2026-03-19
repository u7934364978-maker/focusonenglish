/**
 * Unidad 85 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 9
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_9_EXERCISES } from './unit-9';

export const UNIT_TITLE = 'Participle Clauses & Environment';

export const UNIT_85_EXERCISES = UNIT_9_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u9-/, 'b2-u85-') : ex.id,
}));
