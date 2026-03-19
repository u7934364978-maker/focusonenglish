/**
 * Índice de las 6 lecciones de la Unidad 25 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_25_LESSON_1_GRAMMAR } from './unit-25-lesson-1-grammar';
import { UNIT_25_LESSON_2_GRAMMAR_CONTEXT } from './unit-25-lesson-2-grammar-context';
import { UNIT_25_LESSON_3_READING } from './unit-25-lesson-3-reading';
import { UNIT_25_LESSON_4_LISTENING } from './unit-25-lesson-4-listening';
import { UNIT_25_LESSON_5_WRITING } from './unit-25-lesson-5-writing';
import { UNIT_25_LESSON_6_SPEAKING } from './unit-25-lesson-6-speaking';

export const UNIT_25_LESSONS = {
  grammar: UNIT_25_LESSON_1_GRAMMAR,
  grammar_context: UNIT_25_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_25_LESSON_3_READING,
  listening: UNIT_25_LESSON_4_LISTENING,
  writing: UNIT_25_LESSON_5_WRITING,
  speaking: UNIT_25_LESSON_6_SPEAKING,
} as const;

export const UNIT_25_ALL_LESSONS: Exercise[][] = [
  UNIT_25_LESSON_1_GRAMMAR,
  UNIT_25_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_25_LESSON_3_READING,
  UNIT_25_LESSON_4_LISTENING,
  UNIT_25_LESSON_5_WRITING,
  UNIT_25_LESSON_6_SPEAKING,
];

export const UNIT_25_ALL_EXERCISES: Exercise[] = UNIT_25_ALL_LESSONS.flat();
