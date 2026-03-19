/**
 * Unidad 96 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 36
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_36_EXERCISES } from './unit-36';

export const UNIT_TITLE = 'Used to, would & Culture';

export const UNIT_96_EXERCISES = UNIT_36_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u36-/, 'b2-u96-') : ex.id,
}));
