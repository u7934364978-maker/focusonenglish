/**
 * Índice de las 6 lecciones de la Unidad 48 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_48_LESSON_1_GRAMMAR } from './unit-48-lesson-1-grammar';
import { UNIT_48_LESSON_2_GRAMMAR_CONTEXT } from './unit-48-lesson-2-grammar-context';
import { UNIT_48_LESSON_3_READING } from './unit-48-lesson-3-reading';
import { UNIT_48_LESSON_4_LISTENING } from './unit-48-lesson-4-listening';
import { UNIT_48_LESSON_5_WRITING } from './unit-48-lesson-5-writing';
import { UNIT_48_LESSON_6_SPEAKING } from './unit-48-lesson-6-speaking';

export const UNIT_48_LESSONS = {
  grammar: UNIT_48_LESSON_1_GRAMMAR,
  grammar_context: UNIT_48_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_48_LESSON_3_READING,
  listening: UNIT_48_LESSON_4_LISTENING,
  writing: UNIT_48_LESSON_5_WRITING,
  speaking: UNIT_48_LESSON_6_SPEAKING,
} as const;

export const UNIT_48_ALL_LESSONS: Exercise[][] = [
  UNIT_48_LESSON_1_GRAMMAR,
  UNIT_48_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_48_LESSON_3_READING,
  UNIT_48_LESSON_4_LISTENING,
  UNIT_48_LESSON_5_WRITING,
  UNIT_48_LESSON_6_SPEAKING,
];

export const UNIT_48_ALL_EXERCISES: Exercise[] = UNIT_48_ALL_LESSONS.flat();
