import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 43;

export const C1_U43_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Cinematography & Filmmaking',
  explanation: 'Advanced terms for discussing the technical and artistic aspects of film.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ of the film is breathtaking. (cinema)',
      'He is a famous film ___ . (direct)',
      'The ___ was written by a talented team. (screen)',
      'The ___ of the movie is very moving. (score)',
      'The film uses a lot of special ___ . (effect)',
      'She gave a powerful ___ . (perform)',
      'The ___ of the scene is very dramatic. (light)',
      'The movie is a ___ of the book. (adapt)',
      'The ___ was very fast-paced. (edit)',
      'The ___ of the film is set in Paris. (locate)'
    ][i],
    correctAnswer: [
      'cinematography',
      'director',
      'screenplay',
      'score',
      'effects',
      'performance',
      'lighting',
      'adaptation',
      'editing',
      'location'
    ][i],
    explanation: 'Correct cinematography and filmmaking terminology.',
    points: 1
  }))
};

export const C1_U43_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Film Analysis & Criticism',
  explanation: 'Identifying and defining terms used to analyze and critique films.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "mise-en-scène"?',
      'What is a "motif" in film?',
      'What does "genre-defying" mean?',
      'What is "cinematic"?',
      'What is a "box office hit"?',
      'What is "indie" film?',
      'What is "CGI"?',
      'What is a "cameo"?',
      'What is "soundtrack"?',
      'What is "visual effects" (VFX)?'
    ][i],
    options: [
      ['Arrangement of scenery and props', 'A type of camera', 'The actors\' lines'],
      ['Recurring element with symbolic meaning', 'A type of car', 'A musical note'],
      ['Not fitting into a specific genre', 'A very scary movie', 'A comedy'],
      ['Relating to or characteristic of movies', 'A type of ticket', 'A popcorn flavor'],
      ['A very successful movie', 'A box full of tickets', 'A movie about a box'],
      ['Independent film', 'Film from India', 'A scary film'],
      ['Computer-generated imagery', 'A type of camera', 'A movie theater'],
      ['Brief appearance by a famous person', 'A type of snack', 'A hidden camera'],
      ['The music used in a film', 'A physical track', 'A singer'],
      ['Digital imagery added in post-production', 'Makeup', 'Costumes']
    ][i],
    correctAnswer: [
      'Arrangement of scenery and props',
      'Recurring element with symbolic meaning',
      'Not fitting into a specific genre',
      'Relating to or characteristic of movies',
      'A very successful movie',
      'Independent film',
      'Computer-generated imagery',
      'Brief appearance by a famous person',
      'The music used in a film',
      'Digital imagery added in post-production'
    ][i],
    explanation: 'Correct definition of film analysis concept.',
    points: 1
  }))
};

export const C1_U43_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Cleft Sentences for Emphasis',
  explanation: 'Using cleft sentences to emphasize specific elements of a film or scene.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      '___ I loved most was the cinematography.',
      '___ was the director who made the difference.',
      '___ impressed me was the acting.',
      '___ we need is a better script.',
      '___ that makes the film unique is the music.',
      '___ the ending that I found confusing.',
      '___ I want to see is the sequel.',
      '___ the special effects that stood out.',
      '___ happened was that the lead actor left.',
      '___ she did was write the screenplay.'
    ][i],
    options: [
      ['What', 'It', 'That'],
      ['It', 'What', 'That'],
      ['What', 'It', 'That'],
      ['What', 'It', 'That'],
      ['It is', 'What is', 'That is'],
      ['It was', 'What was', 'That was'],
      ['What', 'It', 'That'],
      ['It was', 'What was', 'That was'],
      ['What', 'It', 'That'],
      ['What', 'It', 'That']
    ][i],
    correctAnswer: [
      'What',
      'It',
      'What',
      'What',
      'It is',
      'It was',
      'What',
      'It was',
      'What',
      'What'
    ][i],
    explanation: 'Correct use of cleft sentences for emphasis.',
    points: 1
  }))
};

export const unit43: Lesson = createC1Unit(
  'c1-u43',
  'Cinema & Film Analysis',
  'Advanced vocabulary and grammar for discussing filmmaking, cinematography, and analyzing cinematic works.',
  ['Use technical and artistic film terminology', 'Identify and define key concepts in film analysis', 'Apply cleft sentences to emphasize specific cinematic elements'],
  [
    C1_U43_BLOCK1, C1_U43_BLOCK2, C1_U43_BLOCK3,
    C1_U43_BLOCK1, C1_U43_BLOCK2, C1_U43_BLOCK3,
    C1_U43_BLOCK1, C1_U43_BLOCK2, C1_U43_BLOCK3, C1_U43_BLOCK1
  ]
);
