/**
 * Índice de las 6 lecciones de la Unidad 13 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_13_LESSON_1_GRAMMAR } from './unit-13-lesson-1-grammar';
import { UNIT_13_LESSON_2_GRAMMAR_CONTEXT } from './unit-13-lesson-2-grammar-context';
import { UNIT_13_LESSON_3_READING } from './unit-13-lesson-3-reading';
import { UNIT_13_LESSON_4_LISTENING } from './unit-13-lesson-4-listening';
import { UNIT_13_LESSON_5_WRITING } from './unit-13-lesson-5-writing';
import { UNIT_13_LESSON_6_SPEAKING } from './unit-13-lesson-6-speaking';

export const UNIT_13_LESSONS = {
  grammar: UNIT_13_LESSON_1_GRAMMAR,
  grammar_context: UNIT_13_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_13_LESSON_3_READING,
  listening: UNIT_13_LESSON_4_LISTENING,
  writing: UNIT_13_LESSON_5_WRITING,
  speaking: UNIT_13_LESSON_6_SPEAKING,
} as const;

export const UNIT_13_ALL_LESSONS: Exercise[][] = [
  UNIT_13_LESSON_1_GRAMMAR,
  UNIT_13_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_13_LESSON_3_READING,
  UNIT_13_LESSON_4_LISTENING,
  UNIT_13_LESSON_5_WRITING,
  UNIT_13_LESSON_6_SPEAKING,
];

export const UNIT_13_ALL_EXERCISES: Exercise[] = UNIT_13_ALL_LESSONS.flat();
