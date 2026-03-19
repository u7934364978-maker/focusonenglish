/**
 * Unidad 86 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 11
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_11_EXERCISES } from './unit-11';

export const UNIT_TITLE = 'Relative Clauses & Culture';

export const UNIT_86_EXERCISES = UNIT_11_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u11-/, 'b2-u86-') : ex.id,
}));
