import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 11;

export const C1_U11_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Nominalization',
  grammarPoint: 'Nominalization',
  explanation: 'Transforming verbs and adjectives into nouns to create a more formal and objective tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of the data took weeks. (analyze)',
      'There has been a steady ___ in prices. (increase)',
      'The ___ of the project was unexpected. (fail)',
      'We are awaiting ___ of the news. (confirm)',
      'The ___ of the new law caused protests. (introduce)',
      'The ___ of the species is a concern. (extinct)',
      'They reached an ___ after long talks. (agree)',
      'The ___ of the building was completed. (construct)',
      'She expressed her ___ with the service. (dissatisfy)',
      'The ___ of the problem is key. (understand)'
    ][i],
    correctAnswer: [
      'analysis',
      'increase',
      'failure',
      'confirmation',
      'introduction',
      'extinction',
      'agreement',
      'construction',
      'dissatisfaction',
      'understanding'
    ][i],
    explanation: 'Correct noun form (nominalization).',
    points: 1
  }))
};

export const C1_U11_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Formal Academic Phrasing',
  explanation: 'Replacing "cluttered" sentences with nominalized versions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'Instead of "They analyzed the data", use:',
      'Instead of "The government decided to...", use:',
      'Instead of "We discussed the matter", use:',
      'Instead of "He failed to comply", use:',
      'Instead of "The climate is changing", use:',
      'Instead of "People migrated", use:',
      'Instead of "Technology evolved", use:',
      'Instead of "Resources were depleted", use:',
      'Instead of "The population grew", use:',
      'Instead of "They implemented the policy", use:'
    ][i],
    options: [
      ['The analysis of the data...', 'They did an analysis...', 'Analyzing the data...'],
      ['The government\'s decision to...', 'A decision by the government...', 'The government decided...'],
      ['A discussion of the matter...', 'We had a discussion...', 'The matter was discussed...'],
      ['His failure to comply...', 'He did not comply...', 'His non-compliance...'],
      ['Climate change...', 'The changing climate...', 'Changes in climate...'],
      ['Migration...', 'The migration of people...', 'People migrating...'],
      ['Technological evolution...', 'The evolution of technology...', 'Technology evolving...'],
      ['Resource depletion...', 'The depletion of resources...', 'Depleted resources...'],
      ['Population growth...', 'The growth of the population...', 'Growing population...'],
      ['The implementation of the policy...', 'They did implementation...', 'Policy implementation...']
    ][i],
    correctAnswer: [
      'The analysis of the data...',
      'The government\'s decision to...',
      'A discussion of the matter...',
      'His non-compliance...',
      'Climate change...',
      'Migration...',
      'Technological evolution...',
      'Resource depletion...',
      'Population growth...',
      'The implementation of the policy...'
    ][i],
    explanation: 'More formal, nominalized phrasing.',
    points: 1
  }))
};

export const C1_U11_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Abstract Nouns in Context',
  explanation: 'Using abstract nouns to discuss complex ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of justice is essential.',
      'He showed great ___ in the face of danger.',
      'The ___ of the universe is vast.',
      'There is no ___ for his actions.',
      'She has a deep ___ for music.',
      'The ___ of the situation is clear.',
      'We must strive for ___ in all we do.',
      'The ___ of the evidence is undeniable.',
      'He has a high level of ___ .',
      'The ___ of the task was daunting.'
    ][i],
    correctAnswer: [
      'administration',
      'courage',
      'complexity',
      'justification',
      'appreciation',
      'gravity',
      'excellence',
      'validity',
      'competence',
      'magnitude'
    ][i],
    explanation: 'Correct abstract noun usage.',
    points: 1
  }))
};

export const unit11: Lesson = createC1Unit(
  'c1-u11',
  'Abstract Nouns & Nominalization',
  'Transforming verbs and adjectives into nouns to create a more formal and academic tone.',
  ['Use nominalization to enhance formal writing', 'Identify abstract nouns for complex discourse', 'Transform informal sentences into professional phrasing'],
  [
    C1_U11_BLOCK1, C1_U11_BLOCK2, C1_U11_BLOCK3,
    C1_U11_BLOCK1, C1_U11_BLOCK2, C1_U11_BLOCK3,
    C1_U11_BLOCK1, C1_U11_BLOCK2, C1_U11_BLOCK3, C1_U11_BLOCK1
  ]
);
