/**
 * Índice de las lecciones de la Unidad 25 (A2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_25_LESSON_3_READING } from './unit-25-lesson-3-reading';
import { UNIT_25_LESSON_4_LISTENING } from './unit-25-lesson-4-listening';
import { UNIT_25_LESSON_5_SPEAKING } from './unit-25-lesson-5-speaking';
import { UNIT_25_LESSON_6_WRITING } from './unit-25-lesson-6-writing';

export const UNIT_25_LESSONS = {
  reading: UNIT_25_LESSON_3_READING,
  listening: UNIT_25_LESSON_4_LISTENING,
  speaking: UNIT_25_LESSON_5_SPEAKING,
  writing: UNIT_25_LESSON_6_WRITING,
} as const;

export const UNIT_25_ALL_LESSONS: Exercise[][] = [
  UNIT_25_LESSON_3_READING,
  UNIT_25_LESSON_4_LISTENING,
  UNIT_25_LESSON_5_SPEAKING,
  UNIT_25_LESSON_6_WRITING,
];

export const UNIT_25_ALL_EXERCISES: Exercise[] = UNIT_25_ALL_LESSONS.flat();
