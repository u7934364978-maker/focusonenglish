/**
 * Unidad 72 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 23
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_23_EXERCISES } from './unit-23';

export const UNIT_TITLE = 'Phrasal Verbs 1';

export const UNIT_72_EXERCISES = UNIT_23_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u23-/, 'b2-u72-') : ex.id,
}));
