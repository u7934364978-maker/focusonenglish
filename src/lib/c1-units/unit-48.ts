import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 48;

export const C1_U48_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Philosophical Vocabulary',
  explanation: 'Advanced terms for discussing philosophy, ethics, and logic.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ is the study of knowledge. (epistemology)',
      'The ___ of the argument is flawed. (logic)',
      'She is a prominent ___ . (philosophy)',
      'The theory is based on ___ . (empirical)',
      '___ is the belief in one god. (monotheism)',
      'He is a ___ of the existentialist school. (proponent)',
      'The ___ of morality is highly debated. (nature)',
      '___ is the study of the nature of being. (ontology)',
      'Her ___ is very complex. (ideology)',
      'The ___ of the issue is multifaceted. (essence)'
    ][i],
    correctAnswer: [
      'Epistemology',
      'logic',
      'philosopher',
      'empiricism',
      'Monotheism',
      'proponent',
      'nature',
      'Ontology',
      'ideology',
      'essence'
    ][i],
    explanation: 'Correct philosophical terminology.',
    points: 1
  }))
};

export const C1_U48_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Modern Intellectual Movements',
  explanation: 'Identifying and defining concepts related to modern philosophy and thought.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "existentialism"?',
      'What is "nihilism"?',
      'What is "post-structuralism"?',
      'What is "secularism"?',
      'What is "utilitarianism"?',
      'What is "rationalism"?',
      'What is "idealism"?',
      'What is "pragmatism"?',
      'What is "phenomenology"?',
      'What is "stoicism"?'
    ][i],
    options: [
      ['Focus on individual existence and freedom', 'Belief in nothing', 'A type of science'],
      ['Rejection of all religious and moral principles', 'A happy outlook', 'Focus on nature'],
      ['Critique of structures in language and culture', 'Building bridges', 'A type of art'],
      ['Separation of state and religious institutions', 'Belief in one god', 'A type of prayer'],
      ['Greatest good for the greatest number', 'Focus on yourself', 'A type of machine'],
      ['Belief that reason is the source of knowledge', 'Thinking fast', 'Being emotional'],
      ['Belief that reality is mentally constructed', 'Being very positive', 'A type of hobby'],
      ['Focus on practical consequences and utility', 'Being a dreamer', 'Following rules'],
      ['Study of the structures of consciousness', 'Study of plants', 'Study of stars'],
      ['Endurance of pain or hardship without complaint', 'A type of rock', 'Being very angry']
    ][i],
    correctAnswer: [
      'Focus on individual existence and freedom',
      'Rejection of all religious and moral principles',
      'Critique of structures in language and culture',
      'Separation of state and religious institutions',
      'Greatest good for the greatest number',
      'Belief that reason is the source of knowledge',
      'Belief that reality is mentally constructed',
      'Focus on practical consequences and utility',
      'Study of the structures of consciousness',
      'Endurance of pain or hardship without complaint'
    ][i],
    explanation: 'Correct definition of philosophical concept.',
    points: 1
  }))
};

export const C1_U48_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Abstract Nouns & Word Formation',
  explanation: 'Forming and using abstract nouns to discuss complex philosophical ideas.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ of life is a major theme. (exist)',
      'We must strive for ___ . (equal)',
      'His ___ is very profound. (think)',
      'The ___ of the theory is clear. (valid)',
      'She is known for her ___ . (generous)',
      'The ___ of the soul is a complex topic. (nature)',
      'We need to find the ___ of the problem. (true)',
      '___ is a fundamental human value. (free)',
      'The ___ of the argument is impressive. (coherent)',
      'His ___ is based on years of study. (know)'
    ][i],
    options: [
      ['existence', 'existing', 'exists'],
      ['equality', 'equalize', 'equally'],
      ['thought', 'thinking', 'thinker'],
      ['validity', 'validing', 'valid'],
      ['generosity', 'generousness', 'generously'],
      ['nature', 'natural', 'naturally'],
      ['truth', 'true', 'truely'],
      ['Freedom', 'Freeing', 'Freely'],
      ['coherence', 'coherent', 'coherently'],
      ['knowledge', 'knowing', 'knows']
    ][i],
    correctAnswer: [
      'existence',
      'equality',
      'thought',
      'validity',
      'generosity',
      'nature',
      'truth',
      'Freedom',
      'coherence',
      'knowledge'
    ][i],
    explanation: 'Correct formation and use of abstract nouns.',
    points: 1
  }))
};

export const unit48: Lesson = createC1Unit(
  'c1-u48',
  'Philosophy & Modern Thought',
  'Advanced vocabulary and grammar for discussing philosophy, abstract ideas, and intellectual movements.',
  ['Use complex philosophical and ethical terminology', 'Identify and define key intellectual movements', 'Apply abstract nouns to discuss profound philosophical concepts'],
  [
    C1_U48_BLOCK1, C1_U48_BLOCK2, C1_U48_BLOCK3,
    C1_U48_BLOCK1, C1_U48_BLOCK2, C1_U48_BLOCK3,
    C1_U48_BLOCK1, C1_U48_BLOCK2, C1_U48_BLOCK3, C1_U48_BLOCK1
  ]
);
