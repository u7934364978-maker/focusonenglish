import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 20;

export const C1_U20_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Module 2 Grammar Review',
  explanation: 'Consolidating Passive Reporting, Nominalization, and Advanced Verb Patterns.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'It is widely ___ that the economy will recover.',
      'The ___ of the new policy caused much debate.',
      'She remembers ___ to the museum as a child.',
      'He was made ___ the fine.',
      'The company is reported ___ a loss.',
      '___ the project on time was a miracle.',
      'They suggested ___ the meeting.',
      'I look forward to ___ from you.',
      'It is vital that he ___ present.',
      'Hardly ___ I started working when the phone rang.'
    ][i],
    options: [
      ['believed', 'believe', 'believing'],
      ['implementation', 'implement', 'implementing'],
      ['being taken', 'taking', 'to be taken'],
      ['to pay', 'pay', 'paying'],
      ['to have made', 'make', 'making'],
      ['Completing', 'Complete', 'To complete'],
      ['postponing', 'to postpone', 'postpone'],
      ['hearing', 'hear', 'to hear'],
      ['be', 'is', 'was'],
      ['had', 'did', 'have']
    ][i],
    correctAnswer: [
      'believed',
      'implementation',
      'being taken',
      'to pay',
      'to have made',
      'Completing',
      'postponing',
      'hearing',
      'be',
      'had'
    ][i],
    explanation: 'Review of advanced grammar structures from Module 2.',
    points: 1
  }))
};

export const C1_U20_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Module 2 Vocabulary Review',
  explanation: 'Consolidating Professional, Academic, and Technological vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'A short introduction about yourself: ___ pitch.',
      'Learning new skills for your current job: ___ .',
      'Unfairness in AI code: algorithm ___ .',
      'To contact someone you don\'t know: ___ calling.',
      'A point of contact: ___ .',
      'To focus on one thing specifically: ___ down.',
      'A change in career direction: career ___ .',
      'The amount of mental effort required: ___ load.',
      'Tasks being done by machines: ___ .',
      'A recommendation for a job: ___ .'
    ][i],
    correctAnswer: [
      'elevator',
      'upskilling',
      'bias',
      'cold',
      'touchpoint',
      'narrow',
      'pivot',
      'cognitive',
      'automation',
      'referral'
    ][i],
    explanation: 'Review of professional and technical vocabulary.',
    points: 1
  }))
};

export const C1_U20_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'writing-analysis',
  title: 'Professional Communication Review',
  explanation: 'Refining tone and register in professional contexts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Which is most formal?',
      'Which is most appropriate for a LinkedIn request?',
      'Which is best for a follow-up email?',
      'Which is best for asking for help?',
      'Which is best for declining an offer?',
      'Which is best for introducing a colleague?',
      'Which is best for sharing an article?',
      'Which is best for concluding a formal letter?',
      'Which is best for starting a presentation?',
      'Which is best for handling a complaint?'
    ][i],
    options: [
      ['I am writing to inform you...', 'Just wanted to say...', 'Hi there!'],
      ['I\'d like to add you to my professional network.', 'Add me!', 'Let\'s connect.'],
      ['Thank you for your time yesterday.', 'Great meeting you!', 'What\'s next?'],
      ['I was wondering if you could assist me with...', 'Help me please.', 'I need help.'],
      ['Unfortunately, I am unable to accept at this time.', 'No thanks.', 'I can\'t do it.'],
      ['I\'d like to introduce my colleague...', 'This is my friend...', 'Meet my coworker.'],
      ['I thought this might be of interest to you.', 'Read this!', 'Check this out.'],
      ['I look forward to hearing from you.', 'Bye!', 'Talk soon.'],
      ['Good morning everyone, today I will...', 'Hi, I\'m going to...', 'Listen to me.'],
      ['We sincerely apologize for any inconvenience.', 'Sorry about that.', 'We made a mistake.']
    ][i],
    correctAnswer: [
      'I am writing to inform you...',
      'I\'d like to add you to my professional network.',
      'Thank you for your time yesterday.',
      'I was wondering if you could assist me with...',
      'Unfortunately, I am unable to accept at this time.',
      'I\'d like to introduce my colleague...',
      'I thought this might be of interest to you.',
      'I look forward to hearing from you.',
      'Good morning everyone, today I will...',
      'We sincerely apologize for any inconvenience.'
    ][i],
    explanation: 'Review of professional communication register.',
    points: 1
  }))
};

export const unit20: Lesson = createC1Unit(
  'c1-u20',
  'Module 2 Review & Consolidation',
  'Comprehensive review of Academic & Professional Excellence topics.',
  ['Consolidate grammar from units 11-19', 'Review and apply professional vocabulary', 'Refine professional communication skills'],
  [
    C1_U20_BLOCK1, C1_U20_BLOCK2, C1_U20_BLOCK3,
    C1_U20_BLOCK1, C1_U20_BLOCK2, C1_U20_BLOCK3,
    C1_U20_BLOCK1, C1_U20_BLOCK2, C1_U20_BLOCK3, C1_U20_BLOCK1
  ]
);
