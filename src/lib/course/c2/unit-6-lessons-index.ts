/**
 * Índice de las 6 lecciones de la Unidad 6 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_6_LESSON_1_GRAMMAR } from './unit-6-lesson-1-grammar';
import { UNIT_6_LESSON_2_GRAMMAR_CONTEXT } from './unit-6-lesson-2-grammar-context';
import { UNIT_6_LESSON_3_READING } from './unit-6-lesson-3-reading';
import { UNIT_6_LESSON_4_LISTENING } from './unit-6-lesson-4-listening';
import { UNIT_6_LESSON_5_WRITING } from './unit-6-lesson-5-writing';
import { UNIT_6_LESSON_6_SPEAKING } from './unit-6-lesson-6-speaking';

export const UNIT_6_LESSONS = {
  grammar: UNIT_6_LESSON_1_GRAMMAR,
  grammar_context: UNIT_6_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_6_LESSON_3_READING,
  listening: UNIT_6_LESSON_4_LISTENING,
  writing: UNIT_6_LESSON_5_WRITING,
  speaking: UNIT_6_LESSON_6_SPEAKING,
} as const;

export const UNIT_6_ALL_LESSONS: Exercise[][] = [
  UNIT_6_LESSON_1_GRAMMAR,
  UNIT_6_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_6_LESSON_3_READING,
  UNIT_6_LESSON_4_LISTENING,
  UNIT_6_LESSON_5_WRITING,
  UNIT_6_LESSON_6_SPEAKING,
];

export const UNIT_6_ALL_EXERCISES: Exercise[] = UNIT_6_ALL_LESSONS.flat();
