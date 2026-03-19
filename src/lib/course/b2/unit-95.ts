/**
 * Unidad 95 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 34
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_34_EXERCISES } from './unit-34';

export const UNIT_TITLE = 'State verbs & Technology';

export const UNIT_95_EXERCISES = UNIT_34_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u34-/, 'b2-u95-') : ex.id,
}));
