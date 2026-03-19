/**
 * Índice de las 6 lecciones de la Unidad 14 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_14_LESSON_1_GRAMMAR } from './unit-14-lesson-1-grammar';
import { UNIT_14_LESSON_2_GRAMMAR_CONTEXT } from './unit-14-lesson-2-grammar-context';
import { UNIT_14_LESSON_3_READING } from './unit-14-lesson-3-reading';
import { UNIT_14_LESSON_4_LISTENING } from './unit-14-lesson-4-listening';
import { UNIT_14_LESSON_5_WRITING } from './unit-14-lesson-5-writing';
import { UNIT_14_LESSON_6_SPEAKING } from './unit-14-lesson-6-speaking';

export const UNIT_14_LESSONS = {
  grammar: UNIT_14_LESSON_1_GRAMMAR,
  grammar_context: UNIT_14_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_14_LESSON_3_READING,
  listening: UNIT_14_LESSON_4_LISTENING,
  writing: UNIT_14_LESSON_5_WRITING,
  speaking: UNIT_14_LESSON_6_SPEAKING,
} as const;

export const UNIT_14_ALL_LESSONS: Exercise[][] = [
  UNIT_14_LESSON_1_GRAMMAR,
  UNIT_14_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_14_LESSON_3_READING,
  UNIT_14_LESSON_4_LISTENING,
  UNIT_14_LESSON_5_WRITING,
  UNIT_14_LESSON_6_SPEAKING,
];

export const UNIT_14_ALL_EXERCISES: Exercise[] = UNIT_14_ALL_LESSONS.flat();
