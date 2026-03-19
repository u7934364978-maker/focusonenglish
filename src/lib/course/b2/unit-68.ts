/**
 * Unidad 68 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 56
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_56_EXERCISES } from './unit-56';

export const UNIT_TITLE = 'Digital Rights & Online Ethics';

export const UNIT_68_EXERCISES = UNIT_56_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u56-/, 'b2-u68-') : ex.id,
}));
