/**
 * Índice de las 6 lecciones de la Unidad 34 (C2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_34_LESSON_1_GRAMMAR } from './unit-34-lesson-1-grammar';
import { UNIT_34_LESSON_2_GRAMMAR_CONTEXT } from './unit-34-lesson-2-grammar-context';
import { UNIT_34_LESSON_3_READING } from './unit-34-lesson-3-reading';
import { UNIT_34_LESSON_4_LISTENING } from './unit-34-lesson-4-listening';
import { UNIT_34_LESSON_5_WRITING } from './unit-34-lesson-5-writing';
import { UNIT_34_LESSON_6_SPEAKING } from './unit-34-lesson-6-speaking';

export const UNIT_34_LESSONS = {
  grammar: UNIT_34_LESSON_1_GRAMMAR,
  grammar_context: UNIT_34_LESSON_2_GRAMMAR_CONTEXT,
  reading: UNIT_34_LESSON_3_READING,
  listening: UNIT_34_LESSON_4_LISTENING,
  writing: UNIT_34_LESSON_5_WRITING,
  speaking: UNIT_34_LESSON_6_SPEAKING,
} as const;

export const UNIT_34_ALL_LESSONS: Exercise[][] = [
  UNIT_34_LESSON_1_GRAMMAR,
  UNIT_34_LESSON_2_GRAMMAR_CONTEXT,
  UNIT_34_LESSON_3_READING,
  UNIT_34_LESSON_4_LISTENING,
  UNIT_34_LESSON_5_WRITING,
  UNIT_34_LESSON_6_SPEAKING,
];

export const UNIT_34_ALL_EXERCISES: Exercise[] = UNIT_34_ALL_LESSONS.flat();
