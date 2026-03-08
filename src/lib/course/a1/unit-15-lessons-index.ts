/**
 * Índice de las 6 lecciones de la Unidad 15 (A1): Present Simple: He, She, It.
 * Exporta todo el contenido listo para la web.
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_15_LESSON_1_GRAMMAR } from './unit-15-lesson-1-grammar';
import { UNIT_15_LESSON_2_VOCABULARY } from './unit-15-lesson-2-vocabulary';
import { UNIT_15_LESSON_3_READING } from './unit-15-lesson-3-reading';
import { UNIT_15_LESSON_4_LISTENING } from './unit-15-lesson-4-listening';
import { UNIT_15_LESSON_5_SPEAKING } from './unit-15-lesson-5-speaking';
import { UNIT_15_LESSON_6_WRITING } from './unit-15-lesson-6-writing';
import { UNIT_15_RECAP } from './unit-15-recap';

export const UNIT_15_LESSONS = {
  grammar: UNIT_15_LESSON_1_GRAMMAR,
  vocabulary: UNIT_15_LESSON_2_VOCABULARY,
  reading: UNIT_15_LESSON_3_READING,
  listening: UNIT_15_LESSON_4_LISTENING,
  speaking: UNIT_15_LESSON_5_SPEAKING,
  writing: UNIT_15_LESSON_6_WRITING,
  recap: UNIT_15_RECAP,
} as const;

/** Todas las lecciones en orden: Gramática, Vocabulario, Lectura, Escucha, Oral, Escrita + Repaso 11–15 */
export const UNIT_15_ALL_LESSONS: Exercise[][] = [
  UNIT_15_LESSON_1_GRAMMAR,
  UNIT_15_LESSON_2_VOCABULARY,
  UNIT_15_LESSON_3_READING,
  UNIT_15_LESSON_4_LISTENING,
  UNIT_15_LESSON_5_SPEAKING,
  UNIT_15_LESSON_6_WRITING,
  UNIT_15_RECAP,
];

/** Todos los ejercicios de la Unidad 15 (90 + 8 repaso) */
export const UNIT_15_ALL_EXERCISES: Exercise[] = UNIT_15_ALL_LESSONS.flat();
