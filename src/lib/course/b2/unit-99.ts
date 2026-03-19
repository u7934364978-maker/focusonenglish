/**
 * Unidad 99 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 55
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_55_EXERCISES } from './unit-55';

export const UNIT_TITLE = 'Cultural Heritage & Identity';

export const UNIT_99_EXERCISES = UNIT_55_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u55-/, 'b2-u99-') : ex.id,
}));
