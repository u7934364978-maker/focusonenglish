/**
 * Índice de las 6 lecciones de la Unidad 60 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_60_LESSON_1_GRAMMAR } from './unit-60-lesson-1-grammar';
import { UNIT_60_LESSON_2_GRAMMAR_CONTEXT } from './unit-60-lesson-2-grammar-context';
import { UNIT_60_LESSON_3_READING } from './unit-60-lesson-3-reading';
import { UNIT_60_LESSON_4_LISTENING } from './unit-60-lesson-4-listening';
import { UNIT_60_LESSON_5_WRITING } from './unit-60-lesson-5-writing';
import { UNIT_60_LESSON_6_SPEAKING } from './unit-60-lesson-6-speaking';

export const UNIT_60_LESSONS = {
  grammar: UNIT_60_LESSON_1_GRAMMAR,
  grammar_context: UNIT_60_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_60_LESSON_3_READING,
  listening: UNIT_60_LESSON_4_LISTENING,
  writing: UNIT_60_LESSON_5_WRITING,
  speaking: UNIT_60_LESSON_6_SPEAKING,
} as const;

export const UNIT_60_ALL_LESSONS: Exercise[][] = [
  UNIT_60_LESSON_1_GRAMMAR,
  UNIT_60_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_60_LESSON_3_READING,
  UNIT_60_LESSON_4_LISTENING,
  UNIT_60_LESSON_5_WRITING,
  UNIT_60_LESSON_6_SPEAKING,
];

export const UNIT_60_ALL_EXERCISES: Exercise[] = UNIT_60_ALL_LESSONS.flat();
