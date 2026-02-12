import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_5_EXERCISES: Exercise[] = [
  {
    id: 'b1-u5-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Environment & Nature',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Global warming', back: 'Calentamiento global', example: 'Global warming is a major threat to the planet.', pronunciation: '/ˈɡloʊ.bəl ˈwɔːr.mɪŋ/', explanation: 'The gradual increase in the overall temperature of the earth\'s atmosphere.' }] } as any
  },
  {
    id: 'b1-u5-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Environment & Nature',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'If we [don’t] recycle, pollution will increase.', options: ['didn’t', 'don’t', 'won’t', 'wouldn’t'], correctAnswer: 'don’t', explanation: 'First conditional: if + present simple, will + infinitive.' }] } as any
  },
  {
    id: 'b1-u5-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Environment & Nature',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { pairs: [{ id: '1', word: 'Recycle', correctMatch: 'Process waste into new materials' }, { id: '2', word: 'Pollution', correctMatch: 'Harmful substances in the environment' }, { id: '3', word: 'Wildlife', correctMatch: 'Animals living in the wild' }] } as any
  },
  {
    id: 'b1-u5-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Environment & Nature',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'If people [used] less plastic, the oceans would be cleaner.', correctAnswer: 'used', explanation: 'Second conditional: if + past simple, would + infinitive.' }] } as any
  },
  {
    id: 'b1-u5-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Environment & Nature',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { words: ['We', 'must', 'protect', 'the', 'endangered', 'species'], correctOrder: ['We', 'must', 'protect', 'the', 'endangered', 'species'], translation: 'Debemos proteger las especies en peligro de extinción.' } as any
  },
  ...generateReviewExercises(5, 'Environment & Nature')
];
