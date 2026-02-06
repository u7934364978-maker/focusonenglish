import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'b1';

export const B1_W2_BLOCK1: Exercise = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'reading-comprehension',
  title: 'Skimming and Scanning',
  explanation: 'Practice finding main ideas and specific details quickly.',
  questions: Array.from({ length: 5 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "skimming"?',
      'When should you use "scanning"?',
      'The main idea of a paragraph is often found in:',
      'What are "keywords"?',
      'Scanning helps you find:'
    ][i],
    options: [
      ['Reading for detail', 'Reading for the main idea', 'Reading for pleasure'],
      ['Finding specific info', 'Writing a summary', 'Translating words'],
      ['The last sentence', 'The middle', 'The topic sentence'],
      ['Common words like "the"', 'Important nouns and verbs', 'Short words only'],
      ['A specific date or name', 'The author\'s opinion', 'The tone of the text']
    ][i],
    correctAnswer: [
      'Reading for the main idea',
      'Finding specific info',
      'The topic sentence',
      'Important nouns and verbs',
      'A specific date or name'
    ][i],
    explanation: 'Basic reading strategies for TOEFL.',
    points: 1
  }))
};

export const B1_WEEK_2 = createToeflUnit(
  'toefl-b1-w2',
  'Week 2: Academic Reading Strategies',
  'Master skimming and scanning techniques for academic texts.',
  ['Differentiate between skimming and scanning', 'Locate topic sentences', 'Identify keywords in questions'],
  [B1_W2_BLOCK1]
);
