import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 27;

export const C1_U27_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Rhetorical Devices',
  explanation: 'Advanced devices for persuasive public speaking.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ is the repetition of initial consonant sounds. (alliteration)',
      'A ___ is a comparison using "like" or "as". (simile)',
      'A ___ is a direct comparison without "like" or "as". (metaphor)',
      'A ___ question is asked for effect, not an answer. (rhetorical)',
      'The "Rule of ___" is using groups of three for impact. (three)',
      '___ is an exaggeration for emphasis. (hyperbole)',
      '___ is giving human qualities to non-human things. (personify)',
      '___ is the repetition of words at the start of clauses. (anaphora)',
      'A ___ is an overused expression. (cliche)',
      '___ is the use of contradictory terms together. (oxymoron)'
    ][i],
    correctAnswer: [
      'Alliteration',
      'simile',
      'metaphor',
      'rhetorical',
      'Three',
      'Hyperbole',
      'Personification',
      'Anaphora',
      'cliche',
      'Oxymoron'
    ][i],
    explanation: 'Correct rhetorical device term.',
    points: 1
  }))
};

export const C1_U27_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Public Speaking Structure',
  explanation: 'Vocabulary for structuring and delivering a speech.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "hook" in a speech?',
      'What is the "thesis statement"?',
      'What are "signposts"?',
      'What is "delivery"?',
      'What is "body language"?',
      'What is "vocal variety"?',
      'What is "eye contact"?',
      'What is a "call to action"?',
      'What is "pacing"?',
      'What is "enunciation"?'
    ][i],
    options: [
      ['The opening to grab attention', 'A tool for fishing', 'The end of the speech'],
      ['The main argument', 'A list of names', 'A greeting'],
      ['Words that guide the audience', 'Road signs', 'Pictures'],
      ['How the speech is presented', 'Bringing food', 'The content'],
      ['Non-verbal communication', 'A type of workout', 'How you dress'],
      ['Changing pitch and tone', 'Singing', 'Talking loudly'],
      ['Looking at the audience', 'Wearing glasses', 'Closing your eyes'],
      ['The final request to the audience', 'Calling someone on the phone', 'A type of exercise'],
      ['The speed of delivery', 'Walking around', 'The length of the speech'],
      ['Clear pronunciation of words', 'Speaking fast', 'Using big words']
    ][i],
    correctAnswer: [
      'The opening to grab attention',
      'The main argument',
      'Words that guide the audience',
      'How the speech is presented',
      'Non-verbal communication',
      'Changing pitch and tone',
      'Looking at the audience',
      'The final request to the audience',
      'The speed of delivery',
      'Clear pronunciation of words'
    ][i],
    explanation: 'Correct public speaking structure term.',
    points: 1
  }))
};

export const C1_U27_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Emphatic Structures for Speaking',
  explanation: 'Using cleft sentences and inversion for impact.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ we need is more investment.',
      '___ was her courage that inspired us.',
      'Never ___ I seen such a performance.',
      'Only then ___ they realize the truth.',
      'Not only ___ he speak, but he also acts.',
      'Under no circumstances ___ you leave.',
      'It was the CEO ___ made the decision.',
      'What ___ me was his honesty.',
      'Seldom ___ such a talented artist appear.',
      'Hardly ___ I arrived when the news broke.'
    ][i],
    options: [
      ['What', 'It', 'That'],
      ['Such', 'So', 'Very'],
      ['have', 'had', 'did'],
      ['did', 'do', 'have'],
      ['does', 'did', 'is'],
      ['should', 'shall', 'would'],
      ['who', 'which', 'what'],
      ['impressed', 'impress', 'impressive'],
      ['does', 'did', 'is'],
      ['had', 'did', 'have']
    ][i],
    correctAnswer: [
      'What',
      'Such',
      'have',
      'did',
      'does',
      'should',
      'who',
      'impressed',
      'does',
      'had'
    ][i],
    explanation: 'Correct use of emphatic structures.',
    points: 1
  }))
};

export const unit27: Lesson = createC1Unit(
  'c1-u27',
  'Public Speaking & Rhetorical Devices',
  'Mastering the techniques of persuasive and impactful public speaking.',
  ['Identify and use rhetorical devices for effect', 'Structure a speech with clear signposts and a strong hook', 'Use emphatic grammar structures for emphasis in delivery'],
  [
    C1_U27_BLOCK1, C1_U27_BLOCK2, C1_U27_BLOCK3,
    C1_U27_BLOCK1, C1_U27_BLOCK2, C1_U27_BLOCK3,
    C1_U27_BLOCK1, C1_U27_BLOCK2, C1_U27_BLOCK3, C1_U27_BLOCK1
  ]
);
