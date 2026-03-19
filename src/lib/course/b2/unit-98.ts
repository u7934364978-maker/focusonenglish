/**
 * Unidad 98 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 46
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_46_EXERCISES } from './unit-46';

export const UNIT_TITLE = 'Psychology & Human Behavior';

export const UNIT_98_EXERCISES = UNIT_46_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u46-/, 'b2-u98-') : ex.id,
}));
