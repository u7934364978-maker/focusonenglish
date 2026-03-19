/**
 * Índice de las 6 lecciones de la Unidad 26 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_26_LESSON_1_GRAMMAR } from './unit-26-lesson-1-grammar';
import { UNIT_26_LESSON_2_GRAMMAR_CONTEXT } from './unit-26-lesson-2-grammar-context';
import { UNIT_26_LESSON_3_READING } from './unit-26-lesson-3-reading';
import { UNIT_26_LESSON_4_LISTENING } from './unit-26-lesson-4-listening';
import { UNIT_26_LESSON_5_WRITING } from './unit-26-lesson-5-writing';
import { UNIT_26_LESSON_6_SPEAKING } from './unit-26-lesson-6-speaking';

export const UNIT_26_LESSONS = {
  grammar: UNIT_26_LESSON_1_GRAMMAR,
  grammar_context: UNIT_26_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_26_LESSON_3_READING,
  listening: UNIT_26_LESSON_4_LISTENING,
  writing: UNIT_26_LESSON_5_WRITING,
  speaking: UNIT_26_LESSON_6_SPEAKING,
} as const;

export const UNIT_26_ALL_LESSONS: Exercise[][] = [
  UNIT_26_LESSON_1_GRAMMAR,
  UNIT_26_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_26_LESSON_3_READING,
  UNIT_26_LESSON_4_LISTENING,
  UNIT_26_LESSON_5_WRITING,
  UNIT_26_LESSON_6_SPEAKING,
];

export const UNIT_26_ALL_EXERCISES: Exercise[] = UNIT_26_ALL_LESSONS.flat();
