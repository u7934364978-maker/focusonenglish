/**
 * Índice de las 6 lecciones de la Unidad 2 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_2_LESSON_1_GRAMMAR } from './unit-2-lesson-1-grammar';
import { UNIT_2_LESSON_2_GRAMMAR_CONTEXT } from './unit-2-lesson-2-grammar-context';
import { UNIT_2_LESSON_3_READING } from './unit-2-lesson-3-reading';
import { UNIT_2_LESSON_4_LISTENING } from './unit-2-lesson-4-listening';
import { UNIT_2_LESSON_5_WRITING } from './unit-2-lesson-5-writing';
import { UNIT_2_LESSON_6_SPEAKING } from './unit-2-lesson-6-speaking';

export const UNIT_2_LESSONS = {
  grammar: UNIT_2_LESSON_1_GRAMMAR,
  grammar_context: UNIT_2_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_2_LESSON_3_READING,
  listening: UNIT_2_LESSON_4_LISTENING,
  writing: UNIT_2_LESSON_5_WRITING,
  speaking: UNIT_2_LESSON_6_SPEAKING,
} as const;

export const UNIT_2_ALL_LESSONS: Exercise[][] = [
  UNIT_2_LESSON_1_GRAMMAR,
  UNIT_2_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_2_LESSON_3_READING,
  UNIT_2_LESSON_4_LISTENING,
  UNIT_2_LESSON_5_WRITING,
  UNIT_2_LESSON_6_SPEAKING,
];

export const UNIT_2_ALL_EXERCISES: Exercise[] = UNIT_2_ALL_LESSONS.flat();
