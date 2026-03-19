/**
 * Unidad 79 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 57
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_57_EXERCISES } from './unit-57';

export const UNIT_TITLE = 'Media Literacy & Critical Thinking';

export const UNIT_79_EXERCISES = UNIT_57_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u57-/, 'b2-u79-') : ex.id,
}));
