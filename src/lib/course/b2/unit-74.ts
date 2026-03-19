/**
 * Unidad 74 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 28
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_28_EXERCISES } from './unit-28';

export const UNIT_TITLE = 'Collocations Verb+Noun';

export const UNIT_74_EXERCISES = UNIT_28_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u28-/, 'b2-u74-') : ex.id,
}));
