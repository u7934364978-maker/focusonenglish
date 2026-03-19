/**
 * Unidad 73 B2 — Real content (reinforcement)
 * Copia funcional del temario existente de la unidad 24
 * (IDs remapeados para que el tracking sea independiente).
 */

import { UNIT_24_EXERCISES } from './unit-24';

export const UNIT_TITLE = 'Phrasal Verbs 2';

export const UNIT_73_EXERCISES = UNIT_24_EXERCISES.map((ex) => ({
  ...ex,
  id: typeof ex.id === 'string' ? ex.id.replace(/^b2-u24-/, 'b2-u73-') : ex.id,
}));
