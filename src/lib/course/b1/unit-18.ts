import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_18_EXERCISES: Exercise[] = [
  {
    id: 'b1-u18-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Politics & Government',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Democracy', back: 'Democracia', example: 'Many countries are based on the principles of democracy.', pronunciation: '/dɪˈmɒk.rə.si/', explanation: 'A system of government by the whole population or all the eligible members of a state, typically through elected representatives.' }] } as any
  },
  ...generateReviewExercises(18, 'Politics & Government', 2, 49)
];
