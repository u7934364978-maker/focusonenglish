/**
 * Unidad 88 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 13
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_13_EXERCISES } from './unit-13';

export const UNIT_TITLE = 'Modals & Money';

export const UNIT_88_EXERCISES = UNIT_13_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u13-/, 'b2-u88-') : ex.id,
}));
