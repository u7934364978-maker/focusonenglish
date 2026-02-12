import { Exercise } from '@/lib/exercise-generator';
import { ExerciseType } from '@/lib/exercise-types';

export const generateReviewExercises = (unitId: number, topic: string, startId: number = 11, count: number = 40): Exercise[] => {
  return Array.from({ length: count }, (_, i) => ({
    id: `b1-u${unitId}-e${i + startId}`,
    type: (i % 5 === 0 ? 'flashcard' : i % 5 === 1 ? 'multiple-choice' : i % 5 === 2 ? 'matching' : i % 5 === 3 ? 'fill-blank' : 'sentence-building') as ExerciseType,
    level: 'B1',
    topic: topic,
    topicName: i % 2 === 0 ? 'Grammar' : 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Review Exercise',
      instructions: 'Practice your skills.',
      items: i % 5 === 0 ? [{ front: 'Topic word', back: 'Palabra del tema' }] : undefined,
      questions: (i % 5 === 1 || i % 5 === 3) ? [{ id: 'q', question: 'Select the [correct] option.', text: 'Select the [correct] option.', options: ['correct', 'wrong'], correctAnswer: 'correct' }] : undefined,
      pairs: i % 5 === 2 ? [{ id: '1', word: 'Term', correctMatch: 'Definition' }] : undefined,
      words: i % 5 === 4 ? ['This', 'is', 'correct'] : undefined,
      correctOrder: i % 5 === 4 ? ['This', 'is', 'correct'] : undefined
    } as any
  }));
};
