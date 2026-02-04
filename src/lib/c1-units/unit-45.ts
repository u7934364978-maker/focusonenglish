import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 45;

export const C1_U45_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Fashion & Style Vocabulary',
  explanation: 'Advanced terms for discussing fashion, trends, and individual style.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The new collection is very ___ . (trend)',
      'She has an ___ sense of style. (impeccable)',
      '___ fashion is a growing concern. (sustain)',
      'The dress is made of ___ silk. (luxury)',
      'He is a ___ follower of fashion. (devote)',
      'The ___ of the garment is superb. (craft)',
      'Vintage clothing is becoming more ___ . (vogue)',
      'The fashion show was a ___ event. (glamour)',
      'She is known for her ___ choices. (eccentric)',
      'The ___ industry is very competitive. (apparel)'
    ][i],
    correctAnswer: [
      'trendy',
      'impeccable',
      'Sustainable',
      'luxurious',
      'devoted',
      'craftsmanship',
      'voguish',
      'glamorous',
      'eccentric',
      'apparel'
    ][i],
    explanation: 'Correct fashion and style terminology.',
    points: 1
  }))
};

export const C1_U45_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Fashion Industry & Trends',
  explanation: 'Identifying and defining concepts related to the fashion industry and social trends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "haute couture"?',
      'What is "fast fashion"?',
      'What does "bespoke" mean?',
      'What is "streetwear"?',
      'What is "minimalism" in fashion?',
      'What is "vintage"?',
      'What is a "trendsetter"?',
      'What is "branding"?',
      'What is "textile"?',
      'What is "capsule wardrobe"?'
    ][i],
    options: [
      ['High-end custom-made fashion', 'Cheap clothing', 'Sportswear'],
      ['Inexpensive clothing produced rapidly', 'Expensive clothes', 'Handmade clothes'],
      ['Made to a particular customer\'s order', 'Bought in a shop', 'Old clothes'],
      ['Casual clothing inspired by urban culture', 'Formal wear', 'Suits'],
      ['Simple and clean design', 'Lots of colors', 'Expensive brands'],
      ['Clothing from a previous era', 'New clothes', 'Ripped clothes'],
      ['Person who starts a new fashion', 'A tailor', 'A model'],
      ['Creating a unique name and image', 'Buying clothes', 'Selling shoes'],
      ['Any cloth or goods produced by weaving', 'A shoe', 'A hat'],
      ['Small collection of versatile clothes', 'A large closet', 'Clothes in a box']
    ][i],
    correctAnswer: [
      'High-end custom-made fashion',
      'Inexpensive clothing produced rapidly',
      'Made to a particular customer\'s order',
      'Casual clothing inspired by urban culture',
      'Simple and clean design',
      'Clothing from a previous era',
      'Person who starts a new fashion',
      'Creating a unique name and image',
      'Any cloth or goods produced by weaving',
      'Small collection of versatile clothes'
    ][i],
    explanation: 'Correct definition of fashion-related concept.',
    points: 1
  }))
};

export const C1_U45_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Adjectives & Order of Adjectives',
  explanation: 'Using a wide range of adjectives and maintaining the correct order when describing clothing and style.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'She wore a ___ dress.',
      'He has a ___ jacket.',
      'It was a ___ shirt.',
      'I bought some ___ shoes.',
      'She has a ___ handbag.',
      'He wore a ___ tie.',
      'It was a ___ coat.',
      'She wore a ___ hat.',
      'I love that ___ skirt.',
      'He has a ___ watch.'
    ][i],
    options: [
      ['beautiful long red silk', 'red long beautiful silk', 'silk red long beautiful'],
      ['stylish black leather', 'leather black stylish', 'black stylish leather'],
      ['crisp white cotton', 'white crisp cotton', 'cotton white crisp'],
      ['expensive Italian leather', 'leather Italian expensive', 'Italian expensive leather'],
      ['small vintage brown', 'brown small vintage', 'vintage small brown'],
      ['patterned silk blue', 'blue patterned silk', 'silk blue patterned'],
      ['warm oversized wool', 'wool warm oversized', 'oversized warm wool'],
      ['wide-brimmed straw sun', 'sun straw wide-brimmed', 'straw sun wide-brimmed'],
      ['pleated green velvet', 'velvet pleated green', 'green pleated velvet'],
      ['classic silver Swiss', 'Swiss classic silver', 'silver Swiss classic']
    ][i],
    correctAnswer: [
      'beautiful long red silk',
      'stylish black leather',
      'crisp white cotton',
      'expensive Italian leather',
      'small vintage brown',
      'blue patterned silk',
      'warm oversized wool',
      'wide-brimmed straw sun',
      'pleated green velvet',
      'classic silver Swiss'
    ][i],
    explanation: 'Correct order of adjectives (Opinion, Size, Age, Shape, Color, Origin, Material, Purpose).',
    points: 1
  }))
};

export const unit45: Lesson = createC1Unit(
  'c1-u45',
  'Fashion & Social Trends',
  'Advanced vocabulary and grammar for discussing fashion, style, and social trends.',
  ['Use precise fashion and style terminology', 'Identify and define key concepts in the fashion industry', 'Apply correct order of adjectives in detailed descriptions'],
  [
    C1_U45_BLOCK1, C1_U45_BLOCK2, C1_U45_BLOCK3,
    C1_U45_BLOCK1, C1_U45_BLOCK2, C1_U45_BLOCK3,
    C1_U45_BLOCK1, C1_U45_BLOCK2, C1_U45_BLOCK3, C1_U45_BLOCK1
  ]
);
