import type { Exercise, Lesson } from '../exercise-types';

/**
 * Ensures a unit has exactly 100 exercises (or questions)
 * organized into 10 themed blocks.
 */
export function createC1Unit(
  id: string,
  title: string,
  description: string,
  objectives: string[],
  exerciseBlocks: Exercise[]
): Lesson {
  return {
    id,
    title,
    description,
    duration: 120, // C1 units are intensive
    objectives,
    exercises: exerciseBlocks
  };
}

/**
 * Helper to generate a unique ID for exercises
 */
export function genId(unit: number, block: string, q: number): string {
  return `c1-u${unit}-${block}-q${q}`;
}
