/**
 * Unidad 84 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 8
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_8_EXERCISES } from './unit-8';

export const UNIT_TITLE = 'Mixed Conditionals & Travel';

export const UNIT_84_EXERCISES = UNIT_8_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u8-/, 'b2-u84-') : ex.id,
}));
