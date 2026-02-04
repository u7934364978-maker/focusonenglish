import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 44;

export const C1_U44_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Music & Culture Vocabulary',
  explanation: 'Advanced terms for discussing music, genres, and their cultural impact.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Music is a form of cultural ___ . (express)',
      'The ___ of the music is very catchy. (rhythm)',
      'She is a ___ on the violin. (virtuoso)',
      'The song has a deep ___ . (meaning)',
      'Jazz has its ___ in New Orleans. (root)',
      'The ___ of the singer is very distinctive. (voice)',
      'Traditional music is part of our ___ . (heritage)',
      'The concert was a ___ success. (resound)',
      'Music can evoke a sense of ___ . (nostalgic)',
      'The ___ of different genres is very interesting. (fusion)'
    ][i],
    correctAnswer: [
      'expression',
      'rhythm',
      'virtuoso',
      'meaning',
      'roots',
      'voice',
      'heritage',
      'resounding',
      'nostalgia',
      'fusion'
    ][i],
    explanation: 'Correct music and culture terminology.',
    points: 1
  }))
};

export const C1_U44_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Musical Concepts & Impact',
  explanation: 'Identifying and defining concepts related to music and its influence on society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "folk music"?',
      'What does "evocative" mean in music?',
      'What is "improvisation"?',
      'What is "acappella"?',
      'What is "composition"?',
      'What is "lyrics"?',
      'What is "syncopation"?',
      'What is a "prodigy"?',
      'What is "resonance"?',
      'What is "avant-garde" music?'
    ][i],
    options: [
      ['Traditional music of a people', 'Popular music', 'Electronic music'],
      ['Bringing strong images/feelings to mind', 'Very loud', 'Boring'],
      ['Creating music spontaneously', 'Writing music', 'Reading notes'],
      ['Singing without instruments', 'Singing alone', 'A type of group'],
      ['The act of writing music', 'Buying music', 'Playing an instrument'],
      ['The words of a song', 'The notes', 'The instruments'],
      ['Displacement of regular accents in music', 'Singing fast', 'Playing loud'],
      ['Young person with exceptional talent', 'A professional', 'A teacher'],
      ['Quality of being deep and full in sound', 'Speed', 'Pitch'],
      ['Experimental or innovative music', 'Old music', 'Quiet music']
    ][i],
    correctAnswer: [
      'Traditional music of a people',
      'Bringing strong images/feelings to mind',
      'Creating music spontaneously',
      'Singing without instruments',
      'The act of writing music',
      'The words of a song',
      'Displacement of regular accents in music',
      'Young person with exceptional talent',
      'Quality of being deep and full in sound',
      'Experimental or innovative music'
    ][i],
    explanation: 'Correct definition of musical concept.',
    points: 1
  }))
};

export const C1_U44_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Advanced Comparison for Music',
  explanation: 'Using advanced comparative structures to discuss musical styles and influences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ the music, the more I enjoy it.',
      'This concert was by far ___ than the last one.',
      'Jazz is ___ more complex than pop.',
      'She is ___ talented as her brother.',
      'The more I listen, ___ I like it.',
      'It was ___ better than I expected.',
      'The song is ___ as popular as it was.',
      'This version is ___ different from the original.',
      'The tempo is ___ faster than before.',
      'He is ___ the best pianist I know.'
    ][i],
    options: [
      ['more complex', 'complexer', 'most complex'],
      ['better', 'good', 'best'],
      ['considerably', 'much', 'very'],
      ['every bit as', 'as bit as', 'bit as'],
      ['the more', 'more', 'most'],
      ['infinitely', 'very', 'too'],
      ['nowhere near', 'near nowhere', 'not near'],
      ['altogether', 'all together', 'together'],
      ['fractionally', 'small', 'little'],
      ['easily', 'easy', 'easiest']
    ][i],
    correctAnswer: [
      'more complex',
      'better',
      'considerably',
      'every bit as',
      'the more',
      'infinitely',
      'nowhere near',
      'altogether',
      'fractionally',
      'easily'
    ][i],
    explanation: 'Correct use of advanced comparative structures.',
    points: 1
  }))
};

export const unit44: Lesson = createC1Unit(
  'c1-u44',
  'Music & Cultural Identity',
  'Advanced vocabulary and grammar for discussing music, cultural significance, and comparative musical analysis.',
  ['Use precise terminology for music and its cultural impact', 'Identify and define key musical concepts', 'Apply advanced comparative structures to analyze musical styles'],
  [
    C1_U44_BLOCK1, C1_U44_BLOCK2, C1_U44_BLOCK3,
    C1_U44_BLOCK1, C1_U44_BLOCK2, C1_U44_BLOCK3,
    C1_U44_BLOCK1, C1_U44_BLOCK2, C1_U44_BLOCK3, C1_U44_BLOCK1
  ]
);
