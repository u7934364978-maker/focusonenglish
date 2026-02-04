import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 32;

export const C1_U32_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Economic Terminology',
  explanation: 'Advanced terms for discussing global economics and finance.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The country is facing a severe ___ . (recede)',
      '___ is the general increase in prices. (inflate)',
      'The stock market is very ___ right now. (volatility)',
      'We need to attract more foreign ___ . (invest)',
      'The government is implementing ___ measures. (austere)',
      '___ of living is rising in urban areas. (cost)',
      'The currency has ___ against the dollar. (depreciate)',
      'There is a significant ___ of wealth. (distribute)',
      '___ products are often cheaper. (import)',
      'The trade ___ has widened. (deficit)'
    ][i],
    correctAnswer: [
      'recession',
      'Inflation',
      'volatile',
      'investment',
      'austerity',
      'Cost',
      'depreciated',
      'distribution',
      'Imported',
      'deficit'
    ][i],
    explanation: 'Correct economic terminology.',
    points: 1
  }))
};

export const C1_U32_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Trade & Markets',
  explanation: 'Identifying and defining concepts related to international trade and market behavior.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "tariff"?',
      'What does "globalization" refer to?',
      'What is "protectionism"?',
      'What is a "free trade agreement"?',
      'What does "emerging market" mean?',
      'What is "outsourcing"?',
      'What is "supply chain"?',
      'What is "monetary policy"?',
      'What is "fiscal policy"?',
      'What is "GDP"?'
    ][i],
    options: [
      ['Tax on imported goods', 'A type of boat', 'A market stall'],
      ['Increasing global interconnectedness', 'Traveling the world', 'A large map'],
      ['Restricting imports to help local industry', 'Protecting the environment', 'Security'],
      ['Pact to reduce trade barriers', 'Free gifts', 'A legal document'],
      ['Developing economy with high growth', 'A new store', 'A type of vegetable'],
      ['Hiring outside providers for services', 'Buying locally', 'Moving house'],
      ['Network of entities involved in production', 'A type of necklace', 'A storage facility'],
      ['Management of money supply/interest rates', 'Spending money', 'Printing notes'],
      ['Government spending and taxation', 'Personal savings', 'Buying stocks'],
      ['Total value of goods/services produced', 'A type of car', 'Great Domestic Product']
    ][i],
    correctAnswer: [
      'Tax on imported goods',
      'Increasing global interconnectedness',
      'Restricting imports to help local industry',
      'Pact to reduce trade barriers',
      'Developing economy with high growth',
      'Hiring outside providers for services',
      'Network of entities involved in production',
      'Management of money supply/interest rates',
      'Government spending and taxation',
      'Total value of goods/services produced'
    ][i],
    explanation: 'Correct definition of trade and market concepts.',
    points: 1
  }))
};

export const C1_U32_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Describing Trends & Changes',
  explanation: 'Using precise verbs and adverbs to describe economic shifts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Prices have ___ significantly this year.',
      'The economy is expected to ___ slowly.',
      'Investment has ___ in recent months.',
      'The deficit has ___ slightly.',
      'Stock prices ___ after the news.',
      'The currency ___ value against the euro.',
      'Unemployment ___ last quarter.',
      'Growth has ___ in the last decade.',
      'Demand for oil has ___ .',
      'The market ___ after the intervention.'
    ][i],
    options: [
      ['surged', 'surging', 'surge'],
      ['recover', 'recovering', 'recovered'],
      ['plummeted', 'plummeting', 'plummet'],
      ['shrunk', 'shrink', 'shrinking'],
      ['tumbled', 'tumbling', 'tumble'],
      ['gained', 'gain', 'gaining'],
      ['plateaued', 'plateau', 'plateauing'],
      ['stagnated', 'stagnate', 'stagnating'],
      ['fluctuated', 'fluctuate', 'fluctuating'],
      ['stabilized', 'stabilize', 'stabilizing']
    ][i],
    correctAnswer: [
      'surged',
      'recover',
      'plummeted',
      'shrunk',
      'tumbled',
      'gained',
      'plateaued',
      'stagnated',
      'fluctuated',
      'stabilized'
    ][i],
    explanation: 'Correct use of verbs to describe economic trends.',
    points: 1
  }))
};

export const unit32: Lesson = createC1Unit(
  'c1-u32',
  'Global Economy & Trade',
  'Advanced vocabulary and grammar for discussing economic systems, trade, and financial trends.',
  ['Use precise economic and financial terminology', 'Identify and define international trade concepts', 'Describe economic trends and changes with advanced verbs'],
  [
    C1_U32_BLOCK1, C1_U32_BLOCK2, C1_U32_BLOCK3,
    C1_U32_BLOCK1, C1_U32_BLOCK2, C1_U32_BLOCK3,
    C1_U32_BLOCK1, C1_U32_BLOCK2, C1_U32_BLOCK3, C1_U32_BLOCK1
  ]
);
