/**
 * Unidad 100 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 50
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_50_EXERCISES } from './unit-50';

export const UNIT_TITLE = 'Repaso 41-49';

export const UNIT_100_EXERCISES = UNIT_50_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u50-/, 'b2-u100-') : ex.id,
}));
