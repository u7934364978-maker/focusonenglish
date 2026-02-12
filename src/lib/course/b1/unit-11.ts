import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_11_EXERCISES: Exercise[] = [
  {
    id: 'b1-u11-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Science & Innovation',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Discovery', back: 'Descubrimiento', example: 'The discovery of penicillin changed medicine.', pronunciation: '/dɪˈskʌv.ər.i/', explanation: 'The act of finding something that had not been known before.' }] } as any
  },
  ...generateReviewExercises(11, 'Science & Innovation', 2, 49)
];
