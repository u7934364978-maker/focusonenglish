/**
 * Unidad 66 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 16
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_16_EXERCISES } from './unit-16';

export const UNIT_TITLE = 'Passive & Technology';

export const UNIT_66_EXERCISES = UNIT_16_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u16-/, 'b2-u66-') : ex.id,
}));
