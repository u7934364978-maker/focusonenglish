import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 53;

export const C1_U53_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'AI & Machine Learning Vocabulary',
  explanation: 'Advanced terms for discussing algorithms, neural networks, and AI development.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ is trained on a massive dataset. (algorithm)',
      '___ networks are inspired by the human brain. (neural)',
      '___ learning allows computers to learn from data. (machine)',
      'The AI can ___ human behavior. (simulate)',
      '___ processing is a key field in AI. (nature)',
      'Deep ___ is a subset of machine learning. (learn)',
      'The AI shows signs of ___ . (autonomous)',
      'We need to address the ___ of the data. (bias)',
      'The ___ of AI is a major concern. (ethic)',
      'Generative AI can ___ high-quality content. (produce)'
    ][i],
    correctAnswer: [
      'algorithm',
      'Neural',
      'Machine',
      'simulate',
      'Natural language',
      'learning',
      'autonomy',
      'bias',
      'ethics',
      'produce'
    ][i],
    explanation: 'Correct AI and machine learning terminology.',
    points: 1
  }))
};

export const C1_U53_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'AI Concepts & Future Trends',
  explanation: 'Identifying and defining concepts related to the impact and development of artificial intelligence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "General AI" (AGI)?',
      'What is "Narrow AI"?',
      'What is "Big Data"?',
      'What is "Cloud Computing"?',
      'What is "Robotics"?',
      'What is "Natural Language Processing" (NLP)?',
      'What is "Computer Vision"?',
      'What is "Reinforcement Learning"?',
      'What is "Explainable AI" (XAI)?',
      'What is "The Turing Test"?'
    ][i],
    options: [
      ['AI with human-like intelligence across tasks', 'A type of robot', 'A fast computer'],
      ['AI designed for a specific task', 'AI that is very small', 'A slow computer'],
      ['Extremely large datasets analyzed computationally', 'A large hard drive', 'A lot of books'],
      ['Delivery of computing services over the internet', 'Computing in the sky', 'Rainy weather'],
      ['Design and use of robots', 'Building toys', 'Working in a factory'],
      ['Ability of computers to understand human language', 'Talking to a computer', 'A fast speaker'],
      ['Ability of computers to interpret visual information', 'A type of glasses', 'A digital camera'],
      ['Learning through trial and error', 'Going to school', 'Physical training'],
      ['AI that provides transparent reasoning', 'Invisible AI', 'A fast AI'],
      ['Test of a machine\'s ability to exhibit intelligent behavior', 'A type of car', 'A math test']
    ][i],
    correctAnswer: [
      'AI with human-like intelligence across tasks',
      'AI designed for a specific task',
      'Extremely large datasets analyzed computationally',
      'Delivery of computing services over the internet',
      'Design and use of robots',
      'Ability of computers to understand human language',
      'Ability of computers to interpret visual information',
      'Learning through trial and error',
      'AI that provides transparent reasoning',
      'Test of a machine\'s ability to exhibit intelligent behavior'
    ][i],
    explanation: 'Correct definition of AI-related concept.',
    points: 1
  }))
};

export const C1_U53_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Complex Passive for Formal AI Reports',
  explanation: 'Using the complex passive to report findings and opinions on AI in a formal academic style.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'It is widely ___ that AI will transform work.',
      'AI is believed ___ by many experts.',
      'The algorithm is reported ___ developed in 2023.',
      'It is claimed ___ the system is unbiased.',
      'The data is thought ___ been compromised.',
      'It is expected ___ AI will improve healthcare.',
      'The breakthrough is considered ___ a major step.',
      'It is estimated ___ millions will be affected.',
      'The AI is understood ___ be highly sophisticated.',
      'It is suggested ___ more regulation is needed.'
    ][i],
    options: [
      ['believed', 'believe', 'believing'],
      ['to be superior', 'superior', 'to being superior'],
      ['to have been', 'to be', 'being'],
      ['by some', 'to some', 'from some'],
      ['to have', 'to', 'for'],
      ['that', 'to', 'for'],
      ['to be', 'be', 'being'],
      ['that', 'to', 'for'],
      ['to', 'as', 'for'],
      ['that', 'by', 'to']
    ][i],
    correctAnswer: [
      'believed',
      'to be superior',
      'to have been',
      'by some',
      'to have',
      'that',
      'to be',
      'that',
      'to',
      'that'
    ][i],
    explanation: 'Correct use of the complex passive structure.',
    points: 1
  }))
};

export const unit53: Lesson = createC1Unit(
  'c1-u53',
  'Artificial Intelligence & Machine Learning',
  'Advanced vocabulary and grammar for discussing AI, machine learning, and formal reporting of scientific claims.',
  ['Use precise terminology for AI and machine learning', 'Identify and define key concepts in intelligent systems', 'Apply the complex passive to report on AI developments in a formal style'],
  [
    C1_U53_BLOCK1, C1_U53_BLOCK2, C1_U53_BLOCK3,
    C1_U53_BLOCK1, C1_U53_BLOCK2, C1_U53_BLOCK3,
    C1_U53_BLOCK1, C1_U53_BLOCK2, C1_U53_BLOCK3, C1_U53_BLOCK1
  ]
);
