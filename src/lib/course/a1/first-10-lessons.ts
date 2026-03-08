/**
 * Primeras 10 lecciones del curso A1 para la prueba tipo videojuego.
 * Unidad 1 (6 lecciones) + Unidad 2 (4 lecciones: grammar, vocabulary, reading, listening).
 */

import type { Exercise } from '@/lib/exercise-generator';
import { UNIT_1_ALL_LESSONS } from './unit-1-lessons-index';
import { UNIT_2_ALL_LESSONS } from './unit-2-lessons-index';

const LESSONS_TO_TAKE_FROM_UNIT_2 = 4;

/** Nombres de las 10 lecciones para mostrar en el juego */
export const FIRST_10_LESSON_NAMES = [
  'Gramática: Verbo to be',
  'Vocabulario: Saludos',
  'Lectura',
  'Escucha',
  'Expresión oral',
  'Escritura',
  'Gramática: Unidad 2',
  'Vocabulario: Unidad 2',
  'Lectura: Unidad 2',
  'Escucha: Unidad 2',
] as const;

/** Ejercicios de las 10 primeras lecciones en orden (por lección) */
export function getFirst10LessonsAsArrays(): Exercise[][] {
  const unit1 = UNIT_1_ALL_LESSONS; // 6 lecciones
  const unit2First4 = UNIT_2_ALL_LESSONS.slice(0, LESSONS_TO_TAKE_FROM_UNIT_2);
  return [...unit1, ...unit2First4];
}

/** Todos los ejercicios de las 10 primeras lecciones en un solo array */
export function getFirst10LessonsExercises(): Exercise[] {
  return getFirst10LessonsAsArrays().flat();
}

/** Metadatos para el juego */
export function getFirst10LessonsMeta() {
  const arrays = getFirst10LessonsAsArrays();
  return {
    lessonCount: arrays.length,
    totalExercises: arrays.reduce((sum, arr) => sum + arr.length, 0),
    lessonNames: FIRST_10_LESSON_NAMES.slice(0, arrays.length),
    exercisesPerLesson: arrays.map((arr) => arr.length),
  };
}
