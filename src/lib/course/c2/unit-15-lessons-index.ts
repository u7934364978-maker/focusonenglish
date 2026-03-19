/**
 * Índice de las 6 lecciones de la Unidad 15 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_15_LESSON_1_GRAMMAR } from './unit-15-lesson-1-grammar';
import { UNIT_15_LESSON_2_GRAMMAR_CONTEXT } from './unit-15-lesson-2-grammar-context';
import { UNIT_15_LESSON_3_READING } from './unit-15-lesson-3-reading';
import { UNIT_15_LESSON_4_LISTENING } from './unit-15-lesson-4-listening';
import { UNIT_15_LESSON_5_WRITING } from './unit-15-lesson-5-writing';
import { UNIT_15_LESSON_6_SPEAKING } from './unit-15-lesson-6-speaking';

export const UNIT_15_LESSONS = {
  grammar: UNIT_15_LESSON_1_GRAMMAR,
  grammar_context: UNIT_15_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_15_LESSON_3_READING,
  listening: UNIT_15_LESSON_4_LISTENING,
  writing: UNIT_15_LESSON_5_WRITING,
  speaking: UNIT_15_LESSON_6_SPEAKING,
} as const;

export const UNIT_15_ALL_LESSONS: Exercise[][] = [
  UNIT_15_LESSON_1_GRAMMAR,
  UNIT_15_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_15_LESSON_3_READING,
  UNIT_15_LESSON_4_LISTENING,
  UNIT_15_LESSON_5_WRITING,
  UNIT_15_LESSON_6_SPEAKING,
];

export const UNIT_15_ALL_EXERCISES: Exercise[] = UNIT_15_ALL_LESSONS.flat();
