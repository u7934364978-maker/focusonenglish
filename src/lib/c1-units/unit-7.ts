import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 7;

export const C1_U7_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting Structures',
  grammarPoint: 'Passive Voice',
  explanation: 'Using reporting verbs like "think", "believe", "say", "report" in the passive voice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'It is ___ that the economy will grow.',
      'He is said ___ the best in his field.',
      'The company is reported ___ bankrupt.',
      'It was thought ___ he had left the country.',
      'The missing man is believed ___ seen in Paris.',
      'It is generally ___ that education is key.',
      'The ruins are thought ___ back to the 5th century.',
      'He is understood ___ resigned from his post.',
      'It is rumored ___ they are getting married.',
      'The suspect is alleged ___ committed the crime.'
    ][i],
    correctAnswer: [
      'expected',
      'to be',
      'to be',
      'that',
      'to have been',
      'accepted',
      'to date',
      'to have',
      'that',
      'to have'
    ][i],
    explanation: 'Correct passive reporting structure.',
    points: 1
  }))
};

export const C1_U7_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Advanced Passive Forms',
  explanation: 'Using "it" as a dummy subject vs. personal passive structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      '___ that the treasure is buried here.',
      'The painting ___ to be a forgery.',
      'It ___ reported that the strike has ended.',
      'The witness ___ believed to be telling the truth.',
      '___ is widely known that she is a talented singer.',
      'The news ___ rumored to be false.',
      'It ___ been suggested that we postpone the meeting.',
      'The students ___ expected to finish on time.',
      '___ was feared that many had died.',
      'The results ___ thought to be accurate.'
    ][i],
    options: [
      ['It is believed', 'He is believed', 'There is believed'],
      ['is thought', 'thinks', 'is thinking'],
      ['is', 'has', 'was'],
      ['is', 'has', 'was'],
      ['It', 'This', 'That'],
      ['is', 'has', 'was'],
      ['has', 'is', 'was'],
      ['are', 'is', 'have'],
      ['It', 'There', 'This'],
      ['are', 'is', 'have']
    ][i],
    correctAnswer: [
      'It is believed',
      'is thought',
      'is',
      'is',
      'It',
      'is',
      'has',
      'are',
      'It',
      'are'
    ][i],
    explanation: 'Correct use of reporting structures.',
    points: 1
  }))
};

export const C1_U7_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Journalistic Language',
  explanation: 'Formal verbs used in news reporting and academic contexts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The authorities have ___ a state of emergency.',
      'The report ___ the need for urgent action.',
      'Critics ___ the government\'s handling of the crisis.',
      'The study ___ a link between diet and health.',
      'He ___ any involvement in the scandal.',
      'The spokesperson ___ that no decisions had been made.',
      'The article ___ the history of the conflict.',
      'Witnesses ___ seeing a suspicious vehicle.',
      'The researchers ___ a breakthrough in their work.',
      'The proposal has ___ mixed reactions.'
    ][i],
    correctAnswer: [
      'declared',
      'highlights',
      'slammed',
      'establishes',
      'denied',
      'stressed',
      'outlines',
      'recalled',
      'claimed',
      'sparked'
    ][i],
    explanation: 'Formal vocabulary for reporting.',
    points: 1
  }))
};

export const unit7: Lesson = createC1Unit(
  'c1-u7',
  'Passive Reporting Structures',
  'Using reporting verbs in the passive voice for formal reporting and journalism.',
  ['Master passive reporting structures', 'Use formal journalistic vocabulary', 'Distinguish between personal and impersonal passive'],
  [
    C1_U7_BLOCK1, C1_U7_BLOCK2, C1_U7_BLOCK3,
    C1_U7_BLOCK1, C1_U7_BLOCK2, C1_U7_BLOCK3,
    C1_U7_BLOCK1, C1_U7_BLOCK2, C1_U7_BLOCK3, C1_U7_BLOCK1
  ]
);
