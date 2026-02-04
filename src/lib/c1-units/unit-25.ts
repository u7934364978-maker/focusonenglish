import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 25;

export const C1_U25_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'vocabulary',
  title: 'Conflict & Resolution Terms',
  explanation: 'Vocabulary for describing disputes and their solutions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'We need to ___ the conflict. (resolve)',
      'They reached a ___ . (compromise)',
      'A ___ was appointed to help. (mediate)',
      'The situation is quite ___ . (tense)',
      'They are in a ___ . (deadlock)',
      'We must find common ___ . (ground)',
      'The dispute was ___ . (settle)',
      'There is a clear ___ of interest. (conflict)',
      'We need to ___ the tension. (diffuse)',
      'A ___ solution is needed. (mutual)'
    ][i],
    correctAnswer: [
      'resolve',
      'compromise',
      'mediator',
      'tense',
      'deadlock',
      'ground',
      'settled',
      'conflict',
      'de-escalate',
      'mutually'
    ][i],
    explanation: 'Correct vocabulary for conflict resolution.',
    points: 1
  }))
};

export const C1_U25_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'writing-analysis',
  title: 'Mediation Language',
  explanation: 'Phrases used to mediate and facilitate resolution.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'How to start a mediation session:',
      'How to acknowledge both sides:',
      'How to encourage listening:',
      'How to rephrase a point:',
      'How to suggest a compromise:',
      'How to handle an outburst:',
      'How to identify shared goals:',
      'How to ask for clarification:',
      'How to move forward:',
      'How to summarize the agreement:'
    ][i],
    options: [
      ['I\'m here to facilitate a discussion.', 'Tell me who is wrong.', 'Let\'s fight.'],
      ['I hear what you both are saying.', 'You are both wrong.', 'One of you is right.'],
      ['Would you mind letting them finish?', 'Shut up and listen.', 'Listen to me.'],
      ['If I understand correctly, you feel...', 'You said...', 'Wait, what?'],
      ['Could we perhaps meet halfway?', 'Give in.', 'Do what they say.'],
      ['Let\'s take a short break.', 'Stop being angry.', 'Calm down!'],
      ['What do we both want to achieve?', 'What do I want?', 'What do you want?'],
      ['Could you elaborate on that?', 'What?', 'Explain now.'],
      ['What are the next steps?', 'Is it over?', 'Go away.'],
      ['To recap, we have agreed to...', 'We are done.', 'Here is the deal.']
    ][i],
    correctAnswer: [
      'I\'m here to facilitate a discussion.',
      'I hear what you both are saying.',
      'Would you mind letting them finish?',
      'If I understand correctly, you feel...',
      'Could we perhaps meet halfway?',
      'Let\'s take a short break.',
      'What do we both want to achieve?',
      'Could you elaborate on that?',
      'What are the next steps?',
      'To recap, we have agreed to...'
    ][i],
    explanation: 'Correct mediation phrasing.',
    points: 1
  }))
};

export const C1_U25_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Hypotheticals for Negotiation',
  explanation: 'Using conditionals to explore possibilities and reach agreements.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'If you ___ the price, we might consider.',
      'Supposing we ___ to your terms, what then?',
      'We would accept, ___ you guarantee delivery.',
      'If we ___ known, we wouldn\'t have agreed.',
      'Imagine if we ___ to increase the budget.',
      'What if we ___ the deadline?',
      'Unless you ___ a discount, we can\'t buy.',
      'Providing that you ___ the quality...',
      'Should you ___ to change your mind...',
      'Were we ___ accept, we would need a contract.'
    ][i],
    options: [
      ['lowered', 'lower', 'lowering'],
      ['agreed', 'agree', 'agreeing'],
      ['provided', 'if', 'unless'],
      ['had', 'did', 'have'],
      ['were', 'are', 'was'],
      ['extended', 'extend', 'extending'],
      ['offer', 'offered', 'offering'],
      ['maintain', 'maintaining', 'maintained'],
      ['decide', 'decided', 'deciding'],
      ['to', 'for', 'at']
    ][i],
    correctAnswer: [
      'lowered',
      'agreed',
      'provided',
      'had',
      'were',
      'extended',
      'offer',
      'maintain',
      'decide',
      'to'
    ][i],
    explanation: 'Correct use of conditionals in negotiation.',
    points: 1
  }))
};

export const unit25: Lesson = createC1Unit(
  'c1-u25',
  'Conflict Resolution & Mediation',
  'Developing the skills to manage disputes and facilitate agreements through effective communication.',
  ['Use professional vocabulary for conflict and resolution', 'Apply mediation techniques and language', 'Use complex conditionals for negotiation and hypotheticals'],
  [
    C1_U25_BLOCK1, C1_U25_BLOCK2, C1_U25_BLOCK3,
    C1_U25_BLOCK1, C1_U25_BLOCK2, C1_U25_BLOCK3,
    C1_U25_BLOCK1, C1_U25_BLOCK2, C1_U25_BLOCK3, C1_U25_BLOCK1
  ]
);
