/**
 * Unidad 94 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 33
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_33_EXERCISES } from './unit-33';

export const UNIT_TITLE = 'Regret, remember, forget & Feelings';

export const UNIT_94_EXERCISES = UNIT_33_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u33-/, 'b2-u94-') : ex.id,
}));
