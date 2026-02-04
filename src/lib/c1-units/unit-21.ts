import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 21;

export const C1_U21_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Natural Fillers & Hedges',
  explanation: 'Using phrases to sound more natural and less direct.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ , I think we should reconsider. (actually)',
      '___ speaking, the results are positive. (general)',
      '___ enough, nobody noticed the mistake. (strange)',
      'It seems to me, ___ , that we are lost. (least)',
      '___ , I don\'t really agree with that. (honest)',
      '___ , it\'s not that simple. (well)',
      '___ , I hadn\'t thought of that. (mind)',
      '___ , it\'s a bit of a gray area. (suppose)',
      'To be ___ , I\'m not sure. (frank)',
      '___ , it\'s quite a complex issue. (point)'
    ][i],
    correctAnswer: [
      'Actually',
      'Generally',
      'Strangely',
      'at least',
      'Honestly',
      'Well',
      'To be fair',
      'I suppose',
      'frank',
      'Basically'
    ][i],
    explanation: 'Correct use of conversational fillers and hedges.',
    points: 1
  }))
};

export const C1_U21_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Softening Devices',
  explanation: 'Phrases used to soften the impact of a statement or disagreement.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a softening device for "You are wrong"?',
      'How to soften "I don\'t like it"?',
      'How to soften "This is bad"?',
      'How to soften "I want a refund"?',
      'How to soften "You missed the deadline"?',
      'How to soften "I can\'t help you"?',
      'How to soften "This is too expensive"?',
      'How to soften "I don\'t understand"?',
      'How to soften "Your idea is boring"?',
      'How to soften "Shut up"?'
    ][i],
    options: [
      ['I see what you mean, but...', 'You are incorrect.', 'Wrong.'],
      ['It\'s not quite what I had in mind.', 'I hate it.', 'Bad.'],
      ['It could perhaps be improved.', 'This is terrible.', 'Fix it.'],
      ['I was wondering if I could get a refund.', 'Give me my money.', 'Refund now.'],
      ['I noticed the deadline has passed.', 'You are late.', 'Deadline missed.'],
      ['I\'m afraid I won\'t be able to assist.', 'No help.', 'I won\'t do it.'],
      ['It\'s a bit outside my budget.', 'Too much money.', 'Cheapen it.'],
      ['I\'m not entirely sure I follow.', 'What?', 'Confusing.'],
      ['I think we could explore other options.', 'Boring.', 'Next.'],
      ['Would you mind if I finished my point?', 'Be quiet.', 'Stop talking.']
    ][i],
    correctAnswer: [
      'I see what you mean, but...',
      'It\'s not quite what I had in mind.',
      'It could perhaps be improved.',
      'I was wondering if I could get a refund.',
      'I noticed the deadline has passed.',
      'I\'m afraid I won\'t be able to assist.',
      'It\'s a bit outside my budget.',
      'I\'m not entirely sure I follow.',
      'I think we could explore other options.',
      'Would you mind if I finished my point?'
    ][i],
    explanation: 'Correct use of softening devices in conversation.',
    points: 1
  }))
};

export const C1_U21_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Question Tags for Fluency',
  explanation: 'Using advanced question tags to check information and keep the conversation going.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'You\'ve been here before, ___?',
      'He hardly ever speaks, ___?',
      'Let\'s go for a walk, ___?',
      'I\'m right, ___?',
      'Nobody called, ___?',
      'Don\'t forget to call, ___?',
      'Everything is ready, ___?',
      'You\'d rather stay, ___?',
      'There\'s nothing left, ___?',
      'Shut the door, ___?'
    ][i],
    options: [
      ['haven\'t you', 'hadn\'t you', 'have you'],
      ['does he', 'doesn\'t he', 'did he'],
      ['shall we', 'will we', 'do we'],
      ['aren\'t I', 'am not I', 'ain\'t I'],
      ['did they', 'didn\'t they', 'did he'],
      ['will you', 'do you', 'won\'t you'],
      ['isn\'t it', 'aren\'t they', 'is it'],
      ['wouldn\'t you', 'don\'t you', 'hadn\'t you'],
      ['is there', 'isn\'t there', 'is it'],
      ['will you', 'do you', 'shall you']
    ][i],
    correctAnswer: [
      'haven\'t you',
      'does he',
      'shall we',
      'aren\'t I',
      'did they',
      'will you',
      'isn\'t it',
      'wouldn\'t you',
      'is there',
      'will you'
    ][i],
    explanation: 'Correct use of question tags.',
    points: 1
  }))
};

export const unit21: Lesson = createC1Unit(
  'c1-u21',
  'Conversational Fillers & Natural Fluency',
  'Mastering the art of natural-sounding English through fillers, hedges, and softening devices.',
  ['Use fillers and hedges to sound more authentic', 'Apply softening devices to maintain politeness', 'Use question tags correctly in various contexts'],
  [
    C1_U21_BLOCK1, C1_U21_BLOCK2, C1_U21_BLOCK3,
    C1_U21_BLOCK1, C1_U21_BLOCK2, C1_U21_BLOCK3,
    C1_U21_BLOCK1, C1_U21_BLOCK2, C1_U21_BLOCK3, C1_U21_BLOCK1
  ]
);
