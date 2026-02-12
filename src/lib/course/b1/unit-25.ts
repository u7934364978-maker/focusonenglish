import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_25_EXERCISES: Exercise[] = [
  {
    id: 'b1-u25-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Conditionals: Mixed',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { items: [{ front: 'If I had worked harder, I would be rich now.', back: 'Si hubiera trabajado más duro, ahora sería rico.', example: 'Mixed conditional for past actions with present consequences.', explanation: 'If + past perfect, would + infinitive.' }] } as any
  },
  ...generateReviewExercises(25, 'Conditionals: Mixed', 2, 49)
];
