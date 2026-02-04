import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 47;

export const C1_U47_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Culinary Terminology',
  explanation: 'Advanced terms for discussing food, cooking, and dining experiences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The dish is a perfect example of ___ cuisine. (fusion)',
      'The ___ of the food is very important. (present)',
      'He is a ___ chef. (michelin)',
      'The ingredients are all ___ sourced. (local)',
      'The ___ of the sauce is very rich. (texture)',
      'She has a ___ for spicy food. (prefer)',
      'The restaurant is known for its ___ . (gourmet)',
      'The ___ of the meal was excellent. (savor)',
      '___ is the art of good eating. (gastronomy)',
      'The ___ of different flavors is subtle. (blend)'
    ][i],
    correctAnswer: [
      'fusion',
      'presentation',
      'Michelin-starred',
      'locally',
      'texture',
      'preference',
      'gourmet',
      'savoriness',
      'Gastronomy',
      'blending'
    ][i],
    explanation: 'Correct culinary terminology.',
    points: 1
  }))
};

export const C1_U47_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Food & Culture Concepts',
  explanation: 'Identifying and defining concepts related to culinary traditions and global food trends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "fusion cuisine"?',
      'What is "slow food"?',
      'What does "farm-to-table" mean?',
      'What is "molecular gastronomy"?',
      'What is "authenticity" in food?',
      'What is a "connoisseur"?',
      'What is "street food"?',
      'What is "sustainable eating"?',
      'What is "culinary heritage"?',
      'What is "umami"?'
    ][i],
    options: [
      ['Combining elements from different culinary traditions', 'Cooking very fast', 'Only eating fruit'],
      ['Movement promoting local food and traditional cooking', 'Eating slowly', 'Cooking with steam'],
      ['Food served directly from the producer', 'Eating at a farm', 'Buying from a supermarket'],
      ['Scientific discipline that explores transformations of ingredients', 'Cooking with magnets', 'A type of science lab'],
      ['Being true to traditional recipes and methods', 'Eating expensive food', 'Cooking for yourself'],
      ['An expert judge in matters of taste', 'A type of doctor', 'A waiter'],
      ['Food sold in a street or public place', 'Food for cars', 'Eating while walking'],
      ['Choosing food with low environmental impact', 'Only eating greens', 'Eating a lot'],
      ['Traditions, practices, and history related to food', 'A cooking school', 'Buying a kitchen'],
      ['One of the five basic tastes (savory)', 'A type of fish', 'A spicy pepper']
    ][i],
    correctAnswer: [
      'Combining elements from different culinary traditions',
      'Movement promoting local food and traditional cooking',
      'Food served directly from the producer',
      'Scientific discipline that explores transformations of ingredients',
      'Being true to traditional recipes and methods',
      'An expert judge in matters of taste',
      'Food sold in a street or public place',
      'Choosing food with low environmental impact',
      'Traditions, practices, and history related to food',
      'One of the five basic tastes (savory)'
    ][i],
    explanation: 'Correct definition of food-related concept.',
    points: 1
  }))
};

export const C1_U47_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Describing Flavors & Textures',
  explanation: 'Using a wide range of adjectives and precise language to describe the sensory experience of food.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The steak was ___ and juicy.',
      'The sauce had a ___ flavor.',
      'The bread was ___ on the outside.',
      'The dessert was ___ sweet.',
      'The soup was ___ and creamy.',
      'The peppers were ___ hot.',
      'The fish was ___ cooked.',
      'The salad was ___ and fresh.',
      'The wine had a ___ finish.',
      'The cheese was ___ and aged.'
    ][i],
    options: [
      ['tender', 'hard', 'tough'],
      ['subtle', 'loud', 'big'],
      ['crusty', 'soft', 'wet'],
      ['cloyingly', 'very', 'a bit'],
      ['smooth', 'rough', 'lumpy'],
      ['intensely', 'highly', 'totally'],
      ['perfectly', 'well', 'good'],
      ['crisp', 'soft', 'wilted'],
      ['lingering', 'fast', 'short'],
      ['pungent', 'sweet', 'mild']
    ][i],
    correctAnswer: [
      'tender',
      'subtle',
      'crusty',
      'cloyingly',
      'smooth',
      'intensely',
      'perfectly',
      'crisp',
      'lingering',
      'pungent'
    ][i],
    explanation: 'Correct use of descriptive adjectives for food.',
    points: 1
  }))
};

export const unit47: Lesson = createC1Unit(
  'c1-u47',
  'Culinary Traditions & Global Fusion',
  'Advanced vocabulary and grammar for discussing cuisine, sensory experiences of food, and global food trends.',
  ['Use precise culinary and sensory terminology', 'Identify and define key concepts in global food culture', 'Apply descriptive adjectives to provide detailed sensory descriptions of food'],
  [
    C1_U47_BLOCK1, C1_U47_BLOCK2, C1_U47_BLOCK3,
    C1_U47_BLOCK1, C1_U47_BLOCK2, C1_U47_BLOCK3,
    C1_U47_BLOCK1, C1_U47_BLOCK2, C1_U47_BLOCK3, C1_U47_BLOCK1
  ]
);
