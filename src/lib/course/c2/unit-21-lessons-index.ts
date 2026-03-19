/**
 * Índice de las 6 lecciones de la Unidad 21 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_21_LESSON_1_GRAMMAR } from './unit-21-lesson-1-grammar';
import { UNIT_21_LESSON_2_GRAMMAR_CONTEXT } from './unit-21-lesson-2-grammar-context';
import { UNIT_21_LESSON_3_READING } from './unit-21-lesson-3-reading';
import { UNIT_21_LESSON_4_LISTENING } from './unit-21-lesson-4-listening';
import { UNIT_21_LESSON_5_WRITING } from './unit-21-lesson-5-writing';
import { UNIT_21_LESSON_6_SPEAKING } from './unit-21-lesson-6-speaking';

export const UNIT_21_LESSONS = {
  grammar: UNIT_21_LESSON_1_GRAMMAR,
  grammar_context: UNIT_21_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_21_LESSON_3_READING,
  listening: UNIT_21_LESSON_4_LISTENING,
  writing: UNIT_21_LESSON_5_WRITING,
  speaking: UNIT_21_LESSON_6_SPEAKING,
} as const;

export const UNIT_21_ALL_LESSONS: Exercise[][] = [
  UNIT_21_LESSON_1_GRAMMAR,
  UNIT_21_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_21_LESSON_3_READING,
  UNIT_21_LESSON_4_LISTENING,
  UNIT_21_LESSON_5_WRITING,
  UNIT_21_LESSON_6_SPEAKING,
];

export const UNIT_21_ALL_EXERCISES: Exercise[] = UNIT_21_ALL_LESSONS.flat();
