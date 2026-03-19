/**
 * Unidad 76 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 31
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_31_EXERCISES } from './unit-31';

export const UNIT_TITLE = 'Articles (advanced) & Education';

export const UNIT_76_EXERCISES = UNIT_31_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u31-/, 'b2-u76-') : ex.id,
}));
