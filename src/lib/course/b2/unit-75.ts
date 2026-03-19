/**
 * Unidad 75 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 29
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_29_EXERCISES } from './unit-29';

export const UNIT_TITLE = 'Collocations Adj+Noun';

export const UNIT_75_EXERCISES = UNIT_29_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u29-/, 'b2-u75-') : ex.id,
}));
