import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 36;

export const C1_U36_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Tech & Ethics Vocabulary',
  explanation: 'Advanced terms for discussing technology, ethics, and innovation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The new technology raises ethical ___ . (dilemma)',
      'We must consider the ___ of AI. (imply)',
      '___ engineering is a controversial field. (genetic)',
      'Data privacy is a major ___ . (concern)',
      'The algorithm shows signs of ___ . (bias)',
      'We need to ___ the use of facial recognition. (regulate)',
      'Technology can be a double-edged ___ . (sword)',
      'There is a digital ___ between different groups. (divide)',
      '___ intelligence is evolving rapidly. (artificial)',
      'We must ensure technological ___ . (account)'
    ][i],
    correctAnswer: [
      'dilemmas',
      'implications',
      'Genetic',
      'concern',
      'bias',
      'regulate',
      'sword',
      'divide',
      'Artificial',
      'accountability'
    ][i],
    explanation: 'Correct technology and ethics terminology.',
    points: 1
  }))
};

export const C1_U36_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Ethical Concepts in Tech',
  explanation: 'Identifying and defining concepts related to the ethics of technology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "algorithmic bias"?',
      'What is "data mining"?',
      'What is "surveillance capitalism"?',
      'What is "transhumanism"?',
      'What is "biometrics"?',
      'What is "net neutrality"?',
      'What is "e-waste"?',
      'What is "cybersecurity"?',
      'What is "the singularity"?',
      'What is "technological determinism"?'
    ][i],
    options: [
      ['Unfair outcomes from algorithms', 'A fast computer', 'A type of math'],
      ['Examining large databases to find info', 'Digging for gold', 'Building a computer'],
      ['Profit from monitoring online behavior', 'Selling cameras', 'A type of market'],
      ['Belief in enhancing humans with tech', 'Moving to another planet', 'Living in a cave'],
      ['Measurement of physical characteristics', 'A type of metric', 'Fast running'],
      ['Principle that all internet data is equal', 'Free internet', 'No internet'],
      ['Electronic waste', 'Bad emails', 'Slow computers'],
      ['Protection of systems from cyberattacks', 'Locking your door', 'A type of insurance'],
      ['Point where AI exceeds human intelligence', 'A single computer', 'A large city'],
      ['Belief that tech shapes society', 'Tech is bad', 'We control tech']
    ][i],
    correctAnswer: [
      'Unfair outcomes from algorithms',
      'Examining large databases to find info',
      'Profit from monitoring online behavior',
      'Belief in enhancing humans with tech',
      'Measurement of physical characteristics',
      'Principle that all internet data is equal',
      'Electronic waste',
      'Protection of systems from cyberattacks',
      'Point where AI exceeds human intelligence',
      'Belief that tech shapes society'
    ][i],
    explanation: 'Correct definition of tech ethics concept.',
    points: 1
  }))
};

export const C1_U36_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Passive Reporting Structures for Tech Claims',
  explanation: 'Using passive reporting to discuss technological claims and theories.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'AI is said ___ the way we work.',
      'It is believed ___ that the trend will continue.',
      'The technology is reported ___ developed in secret.',
      'It is claimed ___ that the algorithm is unbiased.',
      'The data is thought ___ have been compromised.',
      'It is expected ___ that the product will launch soon.',
      'The breakthrough is considered ___ a major step forward.',
      'It is estimated ___ millions will be affected.',
      'The system is understood ___ be highly complex.',
      'It is suggested ___ that we need more regulation.'
    ][i],
    options: [
      ['to be changing', 'changing', 'to change'],
      ['by many', 'to many', 'for many'],
      ['to have been', 'to be', 'being'],
      ['by the developers', 'to the developers', 'from the developers'],
      ['to', 'for', 'at'],
      ['by experts', 'to experts', 'of experts'],
      ['to be', 'be', 'being'],
      ['that', 'to', 'for'],
      ['to', 'as', 'for'],
      ['by critics', 'to critics', 'at critics']
    ][i],
    correctAnswer: [
      'to be changing',
      'by many',
      'to have been',
      'by the developers',
      'to',
      'by experts',
      'to be',
      'that',
      'to',
      'by critics'
    ][i],
    explanation: 'Correct use of passive reporting structures.',
    points: 1
  }))
};

export const unit36: Lesson = createC1Unit(
  'c1-u36',
  'Technology & Ethics',
  'Advanced vocabulary and grammar for discussing technological innovation and ethical implications.',
  ['Use advanced terminology for technology and ethics', 'Identify and define key ethical concepts in tech', 'Apply passive reporting structures to discuss tech claims'],
  [
    C1_U36_BLOCK1, C1_U36_BLOCK2, C1_U36_BLOCK3,
    C1_U36_BLOCK1, C1_U36_BLOCK2, C1_U36_BLOCK3,
    C1_U36_BLOCK1, C1_U36_BLOCK2, C1_U36_BLOCK3, C1_U36_BLOCK1
  ]
);
