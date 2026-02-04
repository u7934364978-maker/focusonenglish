import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 41;

export const C1_U41_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Art Movements & Styles',
  explanation: 'Advanced terms for discussing art history and modern movements.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      '___ art does not attempt to represent external reality. (abstract)',
      'The ___ movement focused on dreams and the unconscious. (surreal)',
      '___ is a style that uses small, distinct dots of color. (pointillism)',
      'The ___ of the painting is very evocative. (compose)',
      'He is a master of ___ . (minimal)',
      'The gallery is hosting a ___ of her work. (retro)',
      'The artist uses a vibrant ___ . (palette)',
      '___ art is often found in public spaces. (install)',
      'The piece is a ___ of different styles. (fusion)',
      'Her work is characterized by its ___ . (original)'
    ][i],
    correctAnswer: [
      'Abstract',
      'surrealist',
      'Pointillism',
      'composition',
      'minimalism',
      'retrospective',
      'palette',
      'Installation',
      'fusion',
      'originality'
    ][i],
    explanation: 'Correct art terminology.',
    points: 1
  }))
};

export const C1_U41_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Describing & Interpreting Art',
  explanation: 'Identifying and defining terms used to describe and analyze artwork.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "aesthetic"?',
      'What does "evocative" mean?',
      'What is "chiaroscuro"?',
      'What does "avant-garde" refer to?',
      'What is a "curator"?',
      'What is "medium" in art?',
      'What is "perspective"?',
      'What does "nuanced" mean?',
      'What is "iconography"?',
      'What is "conceptual art"?'
    ][i],
    options: [
      ['Principles concerning beauty', 'A type of paint', 'A fast car'],
      ['Bringing strong images/feelings to mind', 'Very loud', 'Boring'],
      ['Strong contrast between light and dark', 'A type of pasta', 'A fast dance'],
      ['Experimental or innovative ideas', 'Old-fashioned', 'A type of guard'],
      ['Person in charge of a museum/gallery', 'A type of doctor', 'An artist'],
      ['The materials used by an artist', 'An average size', 'A psychic'],
      ['Representation of depth on a flat surface', 'A type of lens', 'A fast runner'],
      ['Possessing subtle differences in meaning', 'Very loud', 'Simple'],
      ['Visual images/symbols used in art', 'A type of graph', 'Writing with icons'],
      ['Art where the idea is more important than the object', 'Drawing concepts', 'A blueprint']
    ][i],
    correctAnswer: [
      'Principles concerning beauty',
      'Bringing strong images/feelings to mind',
      'Strong contrast between light and dark',
      'Experimental or innovative ideas',
      'Person in charge of a museum/gallery',
      'The materials used by an artist',
      'Representation of depth on a flat surface',
      'Possessing subtle differences in meaning',
      'Visual images/symbols used in art',
      'Art where the idea is more important than the object'
    ][i],
    explanation: 'Correct definition of art-related concept.',
    points: 1
  }))
};

export const C1_U41_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Participle Clauses for Description',
  explanation: 'Using present and past participle clauses to add detail and variety to descriptions of art.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ by the landscape, the artist painted all day.',
      '___ in the gallery, the painting looked magnificent.',
      '___ for years, the statue was finally restored.',
      '___ the brush with care, he added the final touch.',
      '___ the exhibition, I felt a sense of peace.',
      '___ by critics, the work became very valuable.',
      '___ the colors, she created a sense of depth.',
      '___ in marble, the bust was very realistic.',
      '___ to be a masterpiece, the painting was heavily guarded.',
      '___ through the gallery, I noticed a recurring theme.'
    ][i],
    options: [
      ['Inspired', 'Inspiring', 'Inspiration'],
      ['Displayed', 'Displaying', 'Display'],
      ['Neglected', 'Neglecting', 'Neglect'],
      ['Handling', 'Handled', 'Handle'],
      ['Visiting', 'Visited', 'Visit'],
      ['Acclaimed', 'Acclaiming', 'Acclaim'],
      ['Blending', 'Blended', 'Blend'],
      ['Carved', 'Carving', 'Carve'],
      ['Considered', 'Considering', 'Consider'],
      ['Walking', 'Walked', 'Walk']
    ][i],
    correctAnswer: [
      'Inspired',
      'Displayed',
      'Neglected',
      'Handling',
      'Visiting',
      'Acclaimed',
      'Blending',
      'Carved',
      'Considered',
      'Walking'
    ][i],
    explanation: 'Correct use of participle clauses for description.',
    points: 1
  }))
};

export const unit41: Lesson = createC1Unit(
  'c1-u41',
  'Modern Art & Interpretation',
  'Advanced vocabulary and grammar for discussing art history, movements, and analyzing artwork.',
  ['Use precise terminology for art movements and techniques', 'Identify and define key concepts in art analysis', 'Apply participle clauses for detailed artistic descriptions'],
  [
    C1_U41_BLOCK1, C1_U41_BLOCK2, C1_U41_BLOCK3,
    C1_U41_BLOCK1, C1_U41_BLOCK2, C1_U41_BLOCK3,
    C1_U41_BLOCK1, C1_U41_BLOCK2, C1_U41_BLOCK3, C1_U41_BLOCK1
  ]
);
