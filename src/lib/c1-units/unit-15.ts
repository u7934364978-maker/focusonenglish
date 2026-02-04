import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 15;

export const C1_U15_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Emphatic "do"',
  grammarPoint: 'Emphasis',
  explanation: 'Using the auxiliary "do/does/did" in affirmative sentences for added emphasis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I ___ believe we should act now.',
      'She ___ look beautiful in that dress.',
      'He ___ manage to finish on time.',
      'They ___ seem to be happy together.',
      'I ___ hope you can come to the party.',
      'He ___ need a break after all that work.',
      'We ___ try our best to help him.',
      'She ___ have a point, doesn\'t she?',
      'I ___ feel much better today.',
      'They ___ want to solve the problem.'
    ][i],
    correctAnswer: [
      'do',
      'does',
      'did',
      'do',
      'do',
      'does',
      'did',
      'does',
      'do',
      'do'
    ][i],
    explanation: 'Correct use of emphatic "do".',
    points: 1
  }))
};

export const C1_U15_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'speaking-analysis',
  title: 'Rhetorical Questions for Persuasion',
  explanation: 'Using rhetorical questions to engage the listener and emphasize a point.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'How to challenge a slow decision:',
      'How to emphasize the importance of time:',
      'How to suggest a lack of common sense:',
      'How to highlight a paradox:',
      'How to question a lack of action:',
      'How to emphasize a clear benefit:',
      'How to challenge a negative attitude:',
      'How to suggest an obvious choice:',
      'How to highlight the scale of a problem:',
      'How to close a persuasive speech:'
    ][i],
    options: [
      ['What are we waiting for?', 'Why are we slow?', 'Can we decide?'],
      ['Isn\'t time of the essence?', 'Is time important?', 'Do we have time?'],
      ['Who in their right mind would...?', 'Is he crazy?', 'Does this make sense?'],
      ['How can we be both rich and poor?', 'Why are we rich?', 'Are we poor?'],
      ['If not now, when?', 'Should we act?', 'When is the time?'],
      ['Who wouldn\'t want a better future?', 'Do you want this?', 'Is this good?'],
      ['Why so much negativity?', 'Are you sad?', 'Don\'t be negative.'],
      ['Is there any other real option?', 'Which one?', 'Pick this one.'],
      ['Where will it all end?', 'Is it a big problem?', 'How many?'],
      ['Can we really afford to ignore this?', 'Ignore this.', 'Should we ignore?']
    ][i],
    correctAnswer: [
      'What are we waiting for?',
      'Isn\'t time of the essence?',
      'Who in their right mind would...?',
      'How can we be both rich and poor?',
      'If not now, when?',
      'Who wouldn\'t want a better future?',
      'Why so much negativity?',
      'Is there any other real option?',
      'Where will it all end?',
      'Can we really afford to ignore this?'
    ][i],
    explanation: 'Effective rhetorical question for the situation.',
    points: 1
  }))
};

export const C1_U15_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Emphasis in the Past Tense',
  explanation: 'Using "did" to emphasize past actions, often in contrast to expectations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'I ___ call him, but he didn\'t answer.',
      'She ___ finish the report, despite the noise.',
      'He ___ arrive on time, for once.',
      'We ___ try to warn them about the risk.',
      'I ___ see him at the conference yesterday.',
      'They ___ manage to escape from the fire.',
      'She ___ tell me about her plans.',
      'He ___ have a good reason for leaving.',
      'I ___ enjoy the movie, contrary to reviews.',
      'We ___ pay the bill on time.'
    ][i],
    correctAnswer: [
      'did',
      'did',
      'did',
      'did',
      'did',
      'did',
      'did',
      'did',
      'did',
      'did'
    ][i],
    explanation: 'Correct use of emphatic "did".',
    points: 1
  }))
};

export const unit15: Lesson = createC1Unit(
  'c1-u15',
  'Emphasis using "do" & Rhetorical Questions',
  'Techniques for emphasizing points in speech and writing using the auxiliary "do" and rhetorical questions.',
  ['Use the auxiliary "do" for emphasis in different tenses', 'Construct effective rhetorical questions for persuasion', 'Analyze and apply emphatic structures in communication'],
  [
    C1_U15_BLOCK1, C1_U15_BLOCK2, C1_U15_BLOCK3,
    C1_U15_BLOCK1, C1_U15_BLOCK2, C1_U15_BLOCK3,
    C1_U15_BLOCK1, C1_U15_BLOCK2, C1_U15_BLOCK3, C1_U15_BLOCK1
  ]
);
