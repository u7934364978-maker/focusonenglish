/**
 * Unidad 71 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 22
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_22_EXERCISES } from './unit-22';

export const UNIT_TITLE = 'Linkers Reason Purpose';

export const UNIT_71_EXERCISES = UNIT_22_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u22-/, 'b2-u71-') : ex.id,
}));
