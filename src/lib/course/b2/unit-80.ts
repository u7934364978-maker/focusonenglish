/**
 * Unidad 80 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 60
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_60_EXERCISES } from './unit-60';

export const UNIT_TITLE = 'Final Course Review & Evaluation';

export const UNIT_80_EXERCISES = UNIT_60_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u60-/, 'b2-u80-') : ex.id,
}));
