import { Exercise } from '@/lib/exercise-generator';
import { generateReviewExercises } from './utils';

export const UNIT_4_EXERCISES: Exercise[] = [
  {
    id: 'b1-u4-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { items: [{ front: 'Prescription', back: 'Receta médica', example: 'The doctor gave me a prescription for antibiotics.', pronunciation: '/prɪˈskrɪp.ʃən/', explanation: 'A piece of paper on which a doctor writes the details of the medicine.' }] } as any
  },
  {
    id: 'b1-u4-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'You [should] see a doctor.', options: ['must', 'should', 'can', 'may'], correctAnswer: 'should', explanation: '"Should" is used for giving advice.' }] } as any
  },
  {
    id: 'b1-u4-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { pairs: [{ id: '1', word: 'Fever', correctMatch: 'High body temperature' }, { id: '2', word: 'Cough', correctMatch: 'Expelling air from lungs with sound' }, { id: '3', word: 'Sore throat', correctMatch: 'Pain in the throat' }] } as any
  },
  {
    id: 'b1-u4-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'You [mustn’t] smoke in the hospital.', correctAnswer: 'mustn’t', explanation: '"Mustn’t" is used for prohibitions.' }] } as any
  },
  {
    id: 'b1-u4-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { words: ['I', 'have', 'been', 'feeling', 'tired', 'lately'], correctOrder: ['I', 'have', 'been', 'feeling', 'tired', 'lately'], translation: 'Me he estado sintiendo cansado últimamente.' } as any
  },
  {
    id: 'b1-u4-e6',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'If you are "fit", you are...', options: ['healthy and strong', 'sick', 'tired', 'lazy'], correctAnswer: 'healthy and strong' }] } as any
  },
  {
    id: 'b1-u4-e7',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'Have you [ever] broken a bone?', correctAnswer: 'ever', explanation: '"Ever" is used in questions with the present perfect.' }] } as any
  },
  {
    id: 'b1-u4-e8',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', question: 'Where do you go to get medicine?', options: ['Pharmacy', 'Library', 'Bakery', 'Gym'], correctAnswer: 'Pharmacy' }] } as any
  },
  {
    id: 'b1-u4-e9',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Production',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', prompt: 'What do you do to stay healthy?', expectedPhrases: ['I exercise', 'I eat healthy', 'I sleep well', 'I avoid stress'], sampleAnswer: 'To stay healthy, I exercise three times a week and eat a balanced diet.' }] } as any
  },
  {
    id: 'b1-u4-e10',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Health & Well-being',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: { questions: [{ id: 'q1', text: 'I have a [headache].', correctAnswer: 'headache' }] } as any
  },
  ...generateReviewExercises(4, 'Health & Well-being')
];
