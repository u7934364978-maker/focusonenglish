/**
 * Índice de las 6 lecciones de la Unidad 1 (A1).
 * Exporta todo el contenido de texto listo para integrar en la web.
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_1_LESSON_1_GRAMMAR } from './unit-1-lesson-1-grammar';
import { UNIT_1_LESSON_2_VOCABULARY } from './unit-1-lesson-2-vocabulary';
import { UNIT_1_LESSON_3_READING } from './unit-1-lesson-3-reading';
import { UNIT_1_LESSON_4_LISTENING } from './unit-1-lesson-4-listening';
import { UNIT_1_LESSON_5_SPEAKING } from './unit-1-lesson-5-speaking';
import { UNIT_1_LESSON_6_WRITING } from './unit-1-lesson-6-writing';

export const UNIT_1_LESSONS = {
  grammar: UNIT_1_LESSON_1_GRAMMAR,
  vocabulary: UNIT_1_LESSON_2_VOCABULARY,
  reading: UNIT_1_LESSON_3_READING,
  listening: UNIT_1_LESSON_4_LISTENING,
  speaking: UNIT_1_LESSON_5_SPEAKING,
  writing: UNIT_1_LESSON_6_WRITING,
} as const;

/** Todas las lecciones en orden: Gramática, Vocabulario, Lectura, Escucha, Oral, Escrita */
export const UNIT_1_ALL_LESSONS: Exercise[][] = [
  UNIT_1_LESSON_1_GRAMMAR,
  UNIT_1_LESSON_2_VOCABULARY,
  UNIT_1_LESSON_3_READING,
  UNIT_1_LESSON_4_LISTENING,
  UNIT_1_LESSON_5_SPEAKING,
  UNIT_1_LESSON_6_WRITING,
];

/** Todos los ejercicios de la Unidad 1 en un solo array (90 ejercicios) */
export const UNIT_1_ALL_EXERCISES: Exercise[] = UNIT_1_ALL_LESSONS.flat();
