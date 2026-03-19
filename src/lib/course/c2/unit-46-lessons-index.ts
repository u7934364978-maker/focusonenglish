/**
 * Índice de las 6 lecciones de la Unidad 46 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_46_LESSON_1_GRAMMAR } from './unit-46-lesson-1-grammar';
import { UNIT_46_LESSON_2_GRAMMAR_CONTEXT } from './unit-46-lesson-2-grammar-context';
import { UNIT_46_LESSON_3_READING } from './unit-46-lesson-3-reading';
import { UNIT_46_LESSON_4_LISTENING } from './unit-46-lesson-4-listening';
import { UNIT_46_LESSON_5_WRITING } from './unit-46-lesson-5-writing';
import { UNIT_46_LESSON_6_SPEAKING } from './unit-46-lesson-6-speaking';

export const UNIT_46_LESSONS = {
  grammar: UNIT_46_LESSON_1_GRAMMAR,
  grammar_context: UNIT_46_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_46_LESSON_3_READING,
  listening: UNIT_46_LESSON_4_LISTENING,
  writing: UNIT_46_LESSON_5_WRITING,
  speaking: UNIT_46_LESSON_6_SPEAKING,
} as const;

export const UNIT_46_ALL_LESSONS: Exercise[][] = [
  UNIT_46_LESSON_1_GRAMMAR,
  UNIT_46_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_46_LESSON_3_READING,
  UNIT_46_LESSON_4_LISTENING,
  UNIT_46_LESSON_5_WRITING,
  UNIT_46_LESSON_6_SPEAKING,
];

export const UNIT_46_ALL_EXERCISES: Exercise[] = UNIT_46_ALL_LESSONS.flat();
