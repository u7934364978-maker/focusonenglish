import {
  AI_PRACTICE_EXERCISE_TYPES,
  expandPracticeExerciseTypesForCount,
} from '../shared-ai-practice-config';

describe('shared-ai-practice-config', () => {
  it('expandPracticeExerciseTypesForCount repite el ciclo de 4 tipos', () => {
    expect(expandPracticeExerciseTypesForCount(0)).toEqual([]);
    expect(expandPracticeExerciseTypesForCount(4)).toEqual([...AI_PRACTICE_EXERCISE_TYPES]);
    expect(expandPracticeExerciseTypesForCount(5)).toEqual([
      ...AI_PRACTICE_EXERCISE_TYPES,
      AI_PRACTICE_EXERCISE_TYPES[0],
    ]);
  });
});
