/**
 * Unidad 93 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 39
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_39_EXERCISES } from './unit-39';

export const UNIT_TITLE = 'Phrasal Verbs 6 (TURN, WORK, others) & Sport';

export const UNIT_93_EXERCISES = UNIT_39_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u39-/, 'b2-u93-') : ex.id,
}));
