/**
 * Índice de las 6 lecciones de la Unidad 50 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_50_LESSON_1_GRAMMAR } from './unit-50-lesson-1-grammar';
import { UNIT_50_LESSON_2_GRAMMAR_CONTEXT } from './unit-50-lesson-2-grammar-context';
import { UNIT_50_LESSON_3_READING } from './unit-50-lesson-3-reading';
import { UNIT_50_LESSON_4_LISTENING } from './unit-50-lesson-4-listening';
import { UNIT_50_LESSON_5_WRITING } from './unit-50-lesson-5-writing';
import { UNIT_50_LESSON_6_SPEAKING } from './unit-50-lesson-6-speaking';

export const UNIT_50_LESSONS = {
  grammar: UNIT_50_LESSON_1_GRAMMAR,
  grammar_context: UNIT_50_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_50_LESSON_3_READING,
  listening: UNIT_50_LESSON_4_LISTENING,
  writing: UNIT_50_LESSON_5_WRITING,
  speaking: UNIT_50_LESSON_6_SPEAKING,
} as const;

export const UNIT_50_ALL_LESSONS: Exercise[][] = [
  UNIT_50_LESSON_1_GRAMMAR,
  UNIT_50_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_50_LESSON_3_READING,
  UNIT_50_LESSON_4_LISTENING,
  UNIT_50_LESSON_5_WRITING,
  UNIT_50_LESSON_6_SPEAKING,
];

export const UNIT_50_ALL_EXERCISES: Exercise[] = UNIT_50_ALL_LESSONS.flat();
