import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 42;

export const C1_U42_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Literary Terminology',
  explanation: 'Advanced terms for discussing literature, genres, and writing styles.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of the novel is set in the 19th century. (narrate)',
      'The author uses a lot of ___ in his writing. (symbol)',
      'The ___ is the main character in the story. (protagonist)',
      'The book is a ___ of social norms. (satire)',
      'The story is told from a first-person ___ . (perspective)',
      'The ___ is full of suspense. (plot)',
      'She is known for her ___ prose. (lyric)',
      'The novel explores the ___ of betrayal. (theme)',
      'The ___ is the final part of a story. (epilogue)',
      'The author\'s ___ is very distinctive. (style)'
    ][i],
    correctAnswer: [
      'narrative',
      'symbolism',
      'protagonist',
      'satire',
      'perspective',
      'plot',
      'lyrical',
      'theme',
      'epilogue',
      'style'
    ][i],
    explanation: 'Correct literary terminology.',
    points: 1
  }))
};

export const C1_U42_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Narrative Techniques',
  explanation: 'Identifying and defining various techniques used by authors to tell a story.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "stream of consciousness"?',
      'What is an "unreliable narrator"?',
      'What is "foreshadowing"?',
      'What is "allegory"?',
      'What is "magical realism"?',
      'What is "irony" in literature?',
      'What is "motif"?',
      'What is "pacing" in a story?',
      'What is "dialogue"?',
      'What is "metaphor"?'
    ][i],
    options: [
      ['Depicting a character\'s thoughts as they occur', 'A fast river', 'A type of poem'],
      ['Narrator whose credibility is compromised', 'A narrator who lies', 'A narrator who is a ghost'],
      ['Hints about what will happen later', 'Looking at shadows', 'A type of scary movie'],
      ['Story with a hidden moral/political meaning', 'A type of music', 'A short story'],
      ['Realistic story with magical elements', 'A magic show', 'A fantasy novel'],
      ['Contrast between expectation and reality', 'A coincidence', 'A lie'],
      ['Recurring element with symbolic significance', 'A type of car', 'A musical note'],
      ['The speed at which a story unfolds', 'Walking fast', 'The length of the book'],
      ['Conversation between characters', 'Talking to oneself', 'A long speech'],
      ['Direct comparison between two things', 'A type of car', 'A simile']
    ][i],
    correctAnswer: [
      'Depicting a character\'s thoughts as they occur',
      'Narrator whose credibility is compromised',
      'Hints about what will happen later',
      'Story with a hidden moral/political meaning',
      'Realistic story with magical elements',
      'Contrast between expectation and reality',
      'Recurring element with symbolic significance',
      'The speed at which a story unfolds',
      'Conversation between characters',
      'Direct comparison between two things'
    ][i],
    explanation: 'Correct definition of narrative technique.',
    points: 1
  }))
};

export const C1_U42_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Inversion for Narrative Effect',
  explanation: 'Using inversion to create emphasis, drama, or a more formal literary tone.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Never ___ I read such a compelling story.',
      'Only then ___ he realize the truth.',
      'Hardly ___ I finished the book when I started it again.',
      'Little ___ she know what was about to happen.',
      'Seldom ___ such a talented writer appear.',
      'Scarcely ___ the sun risen when they left.',
      'Rarely ___ we see such innovation in fiction.',
      'Not until later ___ the significance become clear.',
      'No sooner ___ she spoken than she regretted it.',
      'Under no circumstances ___ the secret be revealed.'
    ][i],
    options: [
      ['had', 'did', 'have'],
      ['did', 'do', 'have'],
      ['had', 'did', 'have'],
      ['did', 'does', 'had'],
      ['does', 'did', 'is'],
      ['had', 'did', 'was'],
      ['do', 'does', 'did'],
      ['did', 'does', 'is'],
      ['had', 'did', 'was'],
      ['should', 'shall', 'would']
    ][i],
    correctAnswer: [
      'had',
      'did',
      'had',
      'did',
      'does',
      'had',
      'do',
      'did',
      'had',
      'should'
    ][i],
    explanation: 'Correct use of inversion for literary effect.',
    points: 1
  }))
};

export const unit42: Lesson = createC1Unit(
  'c1-u42',
  'Literature & Narrative Voice',
  'Advanced vocabulary and grammar for discussing literature, narrative techniques, and formal literary expression.',
  ['Use precise literary and narrative terminology', 'Identify and define key narrative techniques', 'Apply inversion to create a formal or dramatic literary tone'],
  [
    C1_U42_BLOCK1, C1_U42_BLOCK2, C1_U42_BLOCK3,
    C1_U42_BLOCK1, C1_U42_BLOCK2, C1_U42_BLOCK3,
    C1_U42_BLOCK1, C1_U42_BLOCK2, C1_U42_BLOCK3, C1_U42_BLOCK1
  ]
);
