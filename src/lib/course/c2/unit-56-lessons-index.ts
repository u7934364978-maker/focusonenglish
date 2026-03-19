/**
 * Índice de las 6 lecciones de la Unidad 56 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_56_LESSON_1_GRAMMAR } from './unit-56-lesson-1-grammar';
import { UNIT_56_LESSON_2_GRAMMAR_CONTEXT } from './unit-56-lesson-2-grammar-context';
import { UNIT_56_LESSON_3_READING } from './unit-56-lesson-3-reading';
import { UNIT_56_LESSON_4_LISTENING } from './unit-56-lesson-4-listening';
import { UNIT_56_LESSON_5_WRITING } from './unit-56-lesson-5-writing';
import { UNIT_56_LESSON_6_SPEAKING } from './unit-56-lesson-6-speaking';

export const UNIT_56_LESSONS = {
  grammar: UNIT_56_LESSON_1_GRAMMAR,
  grammar_context: UNIT_56_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_56_LESSON_3_READING,
  listening: UNIT_56_LESSON_4_LISTENING,
  writing: UNIT_56_LESSON_5_WRITING,
  speaking: UNIT_56_LESSON_6_SPEAKING,
} as const;

export const UNIT_56_ALL_LESSONS: Exercise[][] = [
  UNIT_56_LESSON_1_GRAMMAR,
  UNIT_56_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_56_LESSON_3_READING,
  UNIT_56_LESSON_4_LISTENING,
  UNIT_56_LESSON_5_WRITING,
  UNIT_56_LESSON_6_SPEAKING,
];

export const UNIT_56_ALL_EXERCISES: Exercise[] = UNIT_56_ALL_LESSONS.flat();
