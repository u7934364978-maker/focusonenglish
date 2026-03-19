/**
 * Índice de las 6 lecciones de la Unidad 54 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_54_LESSON_1_GRAMMAR } from './unit-54-lesson-1-grammar';
import { UNIT_54_LESSON_2_GRAMMAR_CONTEXT } from './unit-54-lesson-2-grammar-context';
import { UNIT_54_LESSON_3_READING } from './unit-54-lesson-3-reading';
import { UNIT_54_LESSON_4_LISTENING } from './unit-54-lesson-4-listening';
import { UNIT_54_LESSON_5_WRITING } from './unit-54-lesson-5-writing';
import { UNIT_54_LESSON_6_SPEAKING } from './unit-54-lesson-6-speaking';

export const UNIT_54_LESSONS = {
  grammar: UNIT_54_LESSON_1_GRAMMAR,
  grammar_context: UNIT_54_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_54_LESSON_3_READING,
  listening: UNIT_54_LESSON_4_LISTENING,
  writing: UNIT_54_LESSON_5_WRITING,
  speaking: UNIT_54_LESSON_6_SPEAKING,
} as const;

export const UNIT_54_ALL_LESSONS: Exercise[][] = [
  UNIT_54_LESSON_1_GRAMMAR,
  UNIT_54_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_54_LESSON_3_READING,
  UNIT_54_LESSON_4_LISTENING,
  UNIT_54_LESSON_5_WRITING,
  UNIT_54_LESSON_6_SPEAKING,
];

export const UNIT_54_ALL_EXERCISES: Exercise[] = UNIT_54_ALL_LESSONS.flat();
