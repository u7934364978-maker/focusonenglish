/**
 * Unidad 78 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 47
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_47_EXERCISES } from './unit-47';

export const UNIT_TITLE = 'Academic Writing & Reports';

export const UNIT_78_EXERCISES = UNIT_47_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u47-/, 'b2-u78-') : ex.id,
}));
