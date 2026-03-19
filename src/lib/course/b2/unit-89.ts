/**
 * Unidad 89 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 14
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_14_EXERCISES } from './unit-14';

export const UNIT_TITLE = 'Modal Deduction & Business';

export const UNIT_89_EXERCISES = UNIT_14_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u14-/, 'b2-u89-') : ex.id,
}));
