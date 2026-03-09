/**
 * Índice de las lecciones de la Unidad 27 (A2).
 */

import { Exercise } from '@/lib/exercise-generator';
import { UNIT_27_LESSON_3_READING } from './unit-27-lesson-3-reading';
import { UNIT_27_LESSON_4_LISTENING } from './unit-27-lesson-4-listening';
import { UNIT_27_LESSON_5_SPEAKING } from './unit-27-lesson-5-speaking';
import { UNIT_27_LESSON_6_WRITING } from './unit-27-lesson-6-writing';

export const UNIT_27_LESSONS = {
  reading: UNIT_27_LESSON_3_READING,
  listening: UNIT_27_LESSON_4_LISTENING,
  speaking: UNIT_27_LESSON_5_SPEAKING,
  writing: UNIT_27_LESSON_6_WRITING,
} as const;

export const UNIT_27_ALL_LESSONS: Exercise[][] = [
  UNIT_27_LESSON_3_READING,
  UNIT_27_LESSON_4_LISTENING,
  UNIT_27_LESSON_5_SPEAKING,
  UNIT_27_LESSON_6_WRITING,
];

export const UNIT_27_ALL_EXERCISES: Exercise[] = UNIT_27_ALL_LESSONS.flat();
