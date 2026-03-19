/**
 * Unidad 91 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 27
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_27_EXERCISES } from './unit-27';

export const UNIT_TITLE = 'Phrasal Verbs 4';

export const UNIT_91_EXERCISES = UNIT_27_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u27-/, 'b2-u91-') : ex.id,
}));
