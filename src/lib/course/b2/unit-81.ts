/**
 * Unidad 81 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 18
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_18_EXERCISES } from './unit-18';

export const UNIT_TITLE = 'So Such Too Enough';

export const UNIT_81_EXERCISES = UNIT_18_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u18-/, 'b2-u81-') : ex.id,
}));
