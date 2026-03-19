/**
 * Unidad 72 B2 — Extension (provisional)
 *
 * Reutiliza ejercicios de la unidad 65 pero con IDs ajustados
 * para evitar colisiones en tracking/export.
 */

import { UNIT_65_EXERCISES } from './unit-65';

export const UNIT_TITLE = 'B2 Extension Unit 72';

export const UNIT_72_EXERCISES = UNIT_65_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u65-/, 'b2-u72-') : ex.id,
}));
