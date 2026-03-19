/**
 * Unidad 67 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 17
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_17_EXERCISES } from './unit-17';

export const UNIT_TITLE = 'Modal Passive & Adventure & Extreme Sports';

export const UNIT_67_EXERCISES = UNIT_17_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u17-/, 'b2-u67-') : ex.id,
}));
