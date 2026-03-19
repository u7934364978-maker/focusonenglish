/**
 * Unidad 70 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 21
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_21_EXERCISES } from './unit-21';

export const UNIT_TITLE = 'Linkers Contrast';

export const UNIT_70_EXERCISES = UNIT_21_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u21-/, 'b2-u70-') : ex.id,
}));
