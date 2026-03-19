/**
 * Unidad 83 B2 — Extension (provisional)
 *
 * Reutiliza ejercicios de la unidad 65 pero con IDs ajustados
 * para evitar colisiones en tracking/export.
 */

import { UNIT_65_EXERCISES } from './unit-65';

export const UNIT_TITLE = 'B2 Extension Unit 83';

export const UNIT_83_EXERCISES = UNIT_65_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u65-/, 'b2-u83-') : ex.id,
}));
