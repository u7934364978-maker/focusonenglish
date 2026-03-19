/**
 * Unidad 69 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 19
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_19_EXERCISES } from './unit-19';

export const UNIT_TITLE = 'Comparative & Superlative';

export const UNIT_69_EXERCISES = UNIT_19_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u19-/, 'b2-u69-') : ex.id,
}));
