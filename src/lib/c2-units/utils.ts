import type { Exercise, Lesson } from '../exercise-types';

export interface C2LessonBlock {
  index: 1 | 2 | 3 | 4 | 5 | 6;
  type: 'grammar' | 'grammar-context' | 'reading' | 'listening' | 'writing' | 'speaking';
  label: string;
}

export const LESSON_TYPES: C2LessonBlock[] = [
  { index: 1, type: 'grammar', label: 'Grammar input & presentation' },
  { index: 2, type: 'grammar-context', label: 'Grammar in context / collocations' },
  { index: 3, type: 'reading', label: 'Reading comprehension (C2 text)' },
  { index: 4, type: 'listening', label: 'Listening / discourse management' },
  { index: 5, type: 'writing', label: 'Writing practice (genre-specific)' },
  { index: 6, type: 'speaking', label: 'Speaking / review / integration' },
];

/**
 * Ensures a C2 unit has exactly 60 exercises (or questions)
 * organized into 6 themed blocks (one per lesson type).
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
