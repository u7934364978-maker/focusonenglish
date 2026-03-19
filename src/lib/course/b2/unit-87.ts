/**
 * Unidad 87 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 12
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_12_EXERCISES } from './unit-12';

export const UNIT_TITLE = 'Relative Clauses Reduction';

export const UNIT_87_EXERCISES = UNIT_12_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u12-/, 'b2-u87-') : ex.id,
}));
