/**
 * Índice de las 6 lecciones de la Unidad 42 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_42_LESSON_1_GRAMMAR } from './unit-42-lesson-1-grammar';
import { UNIT_42_LESSON_2_GRAMMAR_CONTEXT } from './unit-42-lesson-2-grammar-context';
import { UNIT_42_LESSON_3_READING } from './unit-42-lesson-3-reading';
import { UNIT_42_LESSON_4_LISTENING } from './unit-42-lesson-4-listening';
import { UNIT_42_LESSON_5_WRITING } from './unit-42-lesson-5-writing';
import { UNIT_42_LESSON_6_SPEAKING } from './unit-42-lesson-6-speaking';

export const UNIT_42_LESSONS = {
  grammar: UNIT_42_LESSON_1_GRAMMAR,
  grammar_context: UNIT_42_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_42_LESSON_3_READING,
  listening: UNIT_42_LESSON_4_LISTENING,
  writing: UNIT_42_LESSON_5_WRITING,
  speaking: UNIT_42_LESSON_6_SPEAKING,
} as const;

export const UNIT_42_ALL_LESSONS: Exercise[][] = [
  UNIT_42_LESSON_1_GRAMMAR,
  UNIT_42_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_42_LESSON_3_READING,
  UNIT_42_LESSON_4_LISTENING,
  UNIT_42_LESSON_5_WRITING,
  UNIT_42_LESSON_6_SPEAKING,
];

export const UNIT_42_ALL_EXERCISES: Exercise[] = UNIT_42_ALL_LESSONS.flat();
