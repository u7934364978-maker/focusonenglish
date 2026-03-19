/**
 * Unidad 90 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 26
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_26_EXERCISES } from './unit-26';

export const UNIT_TITLE = 'Phrasal Verbs 3';

export const UNIT_90_EXERCISES = UNIT_26_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u26-/, 'b2-u90-') : ex.id,
}));
