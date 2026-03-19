/**
 * Índice de las 6 lecciones de la Unidad 9 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_9_LESSON_1_GRAMMAR } from './unit-9-lesson-1-grammar';
import { UNIT_9_LESSON_2_GRAMMAR_CONTEXT } from './unit-9-lesson-2-grammar-context';
import { UNIT_9_LESSON_3_READING } from './unit-9-lesson-3-reading';
import { UNIT_9_LESSON_4_LISTENING } from './unit-9-lesson-4-listening';
import { UNIT_9_LESSON_5_WRITING } from './unit-9-lesson-5-writing';
import { UNIT_9_LESSON_6_SPEAKING } from './unit-9-lesson-6-speaking';

export const UNIT_9_LESSONS = {
  grammar: UNIT_9_LESSON_1_GRAMMAR,
  grammar_context: UNIT_9_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_9_LESSON_3_READING,
  listening: UNIT_9_LESSON_4_LISTENING,
  writing: UNIT_9_LESSON_5_WRITING,
  speaking: UNIT_9_LESSON_6_SPEAKING,
} as const;

export const UNIT_9_ALL_LESSONS: Exercise[][] = [
  UNIT_9_LESSON_1_GRAMMAR,
  UNIT_9_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_9_LESSON_3_READING,
  UNIT_9_LESSON_4_LISTENING,
  UNIT_9_LESSON_5_WRITING,
  UNIT_9_LESSON_6_SPEAKING,
];

export const UNIT_9_ALL_EXERCISES: Exercise[] = UNIT_9_ALL_LESSONS.flat();
