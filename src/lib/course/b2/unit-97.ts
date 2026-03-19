/**
 * Unidad 97 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 42
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_42_EXERCISES } from './unit-42';

export const UNIT_TITLE = 'Scientific Discoveries';

export const UNIT_97_EXERCISES = UNIT_42_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u42-/, 'b2-u97-') : ex.id,
}));
