/**
 * Índice de las 6 lecciones de la Unidad 22 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_22_LESSON_1_GRAMMAR } from './unit-22-lesson-1-grammar';
import { UNIT_22_LESSON_2_GRAMMAR_CONTEXT } from './unit-22-lesson-2-grammar-context';
import { UNIT_22_LESSON_3_READING } from './unit-22-lesson-3-reading';
import { UNIT_22_LESSON_4_LISTENING } from './unit-22-lesson-4-listening';
import { UNIT_22_LESSON_5_WRITING } from './unit-22-lesson-5-writing';
import { UNIT_22_LESSON_6_SPEAKING } from './unit-22-lesson-6-speaking';

export const UNIT_22_LESSONS = {
  grammar: UNIT_22_LESSON_1_GRAMMAR,
  grammar_context: UNIT_22_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_22_LESSON_3_READING,
  listening: UNIT_22_LESSON_4_LISTENING,
  writing: UNIT_22_LESSON_5_WRITING,
  speaking: UNIT_22_LESSON_6_SPEAKING,
} as const;

export const UNIT_22_ALL_LESSONS: Exercise[][] = [
  UNIT_22_LESSON_1_GRAMMAR,
  UNIT_22_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_22_LESSON_3_READING,
  UNIT_22_LESSON_4_LISTENING,
  UNIT_22_LESSON_5_WRITING,
  UNIT_22_LESSON_6_SPEAKING,
];

export const UNIT_22_ALL_EXERCISES: Exercise[] = UNIT_22_ALL_LESSONS.flat();
