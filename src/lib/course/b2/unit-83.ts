/**
 * Unidad 83 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 59
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_59_EXERCISES } from './unit-59';

export const UNIT_TITLE = 'Review: Modal Deduction & Speculation';

export const UNIT_83_EXERCISES = UNIT_59_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u59-/, 'b2-u83-') : ex.id,
}));
