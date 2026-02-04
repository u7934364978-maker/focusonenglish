import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 60;

export const C1_U60_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Technological Singularity Terminology',
  explanation: 'Advanced terms for discussing the hypothetical point in time when technological growth becomes uncontrollable.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ refers to the moment AI surpasses human intelligence. (singularity)',
      '___ intelligence (ASI) is a hypothetical level of AI. (super)',
      'We must consider the ___ risks of advanced AI. (exist)',
      '___ is the belief in using tech to enhance human abilities. (trans)',
      'The ___ of human and machine is a common theme. (merge)',
      '___ intelligence could solve many of our problems. (art)',
      'The ___ of technology is exponential. (advance)',
      '___ refers to life after the singularity. (post)',
      'The ___ of consciousness is a deep mystery. (nature)',
      '___ computing could accelerate AI development. (quantum)'
    ][i],
    correctAnswer: [
      'singularity',
      'Superintelligent',
      'existential',
      'Transhumanism',
      'merging',
      'Artificial',
      'advancement',
      'Post-humanism',
      'nature',
      'Quantum'
    ][i],
    explanation: 'Correct technological singularity terminology.',
    points: 1
  }))
};

export const C1_U60_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Post-human & ASI Concepts',
  explanation: 'Identifying and defining concepts related to artificial superintelligence and the future of humanity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "mind uploading"?',
      'What is "intelligence explosion"?',
      'What is "friendly AI"?',
      'What is "the alignment problem"?',
      'What is "cyborg"?',
      'What is "substrate independence"?',
      'What is "simulated reality"?',
      'What is "Turing test"?',
      'What is "Heuristic"?',
      'What is "Existential risk"?'
    ][i],
    options: [
      ['Transferring a human mind to a digital substrate', 'Sending an email', 'A type of brain scan'],
      ['Rapid, runaway growth in AI capability', 'A big explosion', 'A type of engine'],
      ['AI designed to have a positive impact on humanity', 'An AI that says hello', 'A type of robot'],
      ['Challenge of aligning AI goals with human values', 'A type of puzzle', 'A broken car'],
      ['Being with both organic and biomechatronic body parts', 'A robot', 'A fast car'],
      ['Idea that mind can exist on different types of hardware', 'Being independent', 'A type of gas'],
      ['Idea that our reality is a computer simulation', 'A movie', 'A type of game'],
      ['Test of a machine\'s ability to exhibit human behavior', 'A math test', 'A driving test'],
      ['Practical method not guaranteed to be optimal', 'A type of tool', 'A new word'],
      ['Risk that could lead to human extinction', 'A scary movie', 'A dangerous road']
    ][i],
    correctAnswer: [
      'Transferring a human mind to a digital substrate',
      'Rapid, runaway growth in AI capability',
      'AI designed to have a positive impact on humanity',
      'Challenge of aligning AI goals with human values',
      'Being with both organic and biomechatronic body parts',
      'Idea that mind can exist on different types of hardware',
      'Idea that our reality is a computer simulation',
      'Test of a machine\'s ability to exhibit human behavior',
      'Practical method not guaranteed to be optimal',
      'Risk that could lead to human extinction'
    ][i],
    explanation: 'Correct definition of post-human or ASI concept.',
    points: 1
  }))
};

export const C1_U60_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Syntactic Structures for Philosophy',
  explanation: 'Using complex sentences and rhetorical devices to discuss philosophical questions about the future of humanity.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ the case may be, we must be prepared.',
      'Not only ___ AI change our lives, it will redefine them.',
      '___ we to achieve ASI, the world would change forever.',
      'Should ___ occur, we must ensure it is beneficial.',
      'Hardly ___ we considered the risks before we acted.',
      '___ is the power of tech that we cannot ignore it.',
      '___ it been for AI, we wouldn\'t have these problems.',
      'Were ___ to exist, what would it mean for us?',
      '___ though it may seem, the singularity is a possibility.',
      '___ we act now, we may regret it later.'
    ][i],
    options: [
      ['Whatever', 'However', 'Whichever'],
      ['will', 'do', 'does'],
      ['Were', 'If', 'Should'],
      ['it', 'this', 'that'],
      ['had', 'have', 'did'],
      ['Such', 'So', 'As'],
      ['Had', 'If', 'Should'],
      ['ASI', 'it', 'they'],
      ['Unlikely', 'Likely', 'Like'],
      ['Unless', 'If', 'Should']
    ][i],
    correctAnswer: [
      'Whatever',
      'will',
      'Were',
      'it',
      'had',
      'Such',
      'Had',
      'ASI',
      'Unlikely',
      'Unless'
    ][i],
    explanation: 'Correct use of advanced syntactic structures and rhetorical devices.',
    points: 1
  }))
};

export const unit60: Lesson = createC1Unit(
  'c1-u60',
  'The Technological Singularity',
  'Advanced vocabulary and grammar for discussing artificial superintelligence, post-humanism, and complex philosophical questions using sophisticated syntactic structures.',
  ['Use precise terminology for the technological singularity', 'Identify and define key concepts in post-humanism and ASI', 'Apply advanced syntactic structures to discuss philosophical dilemmas'],
  [
    C1_U60_BLOCK1, C1_U60_BLOCK2, C1_U60_BLOCK3,
    C1_U60_BLOCK1, C1_U60_BLOCK2, C1_U60_BLOCK3,
    C1_U60_BLOCK1, C1_U60_BLOCK2, C1_U60_BLOCK3, C1_U60_BLOCK1
  ]
);
