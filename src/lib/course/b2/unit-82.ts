/**
 * Unidad 82 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 58
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_58_EXERCISES } from './unit-58';

export const UNIT_TITLE = 'Review: Advanced Conditionals';

export const UNIT_82_EXERCISES = UNIT_58_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u58-/, 'b2-u82-') : ex.id,
}));
