/**
 * Unidad 77 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 32
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_32_EXERCISES } from './unit-32';

export const UNIT_TITLE = 'Quantifiers & Environment';

export const UNIT_77_EXERCISES = UNIT_32_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u32-/, 'b2-u77-') : ex.id,
}));
