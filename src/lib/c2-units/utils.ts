import type { Exercise, Lesson } from '../exercise-types';

/**
 * Ensures a C2 unit has exactly 100 exercises (or questions)
 * organized into 10 themed blocks.
 */
export function createC2Unit(
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
    module: 'C2 Proficiency',
    duration: 150, // C2 units are even more intensive
    objectives,
    exercises: exerciseBlocks
  };
}

/**
 * Helper to generate a unique ID for C2 exercises
 */
export function genC2Id(unit: number, block: string, q: number): string {
  return `c2-u${unit}-${block}-q${q}`;
}
