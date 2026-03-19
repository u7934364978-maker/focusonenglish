/**
 * Unidad 92 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 38
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_38_EXERCISES } from './unit-38';

export const UNIT_TITLE = 'Phrasal Verbs 5 (RUN, SET, TAKE) & Leisure';

export const UNIT_92_EXERCISES = UNIT_38_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u38-/, 'b2-u92-') : ex.id,
}));
