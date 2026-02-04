import { Exercise, Lesson } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 12;

export const C1_U12_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Hedging and Indirectness',
  grammarPoint: 'Modality',
  explanation: 'Using modal verbs and tentative language to be more diplomatic and less confrontational.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'It ___ be argued that the current policy is flawed.',
      'We ___ need to reconsider our position.',
      'There ___ to be some misunderstanding.',
      'It ___ seem that the budget is insufficient.',
      'I ___ suggest that we wait for more data.',
      '___ I ask why you decided to cancel?',
      'It ___ that we have reached a stalemate.',
      'We ___ want to explore other options.',
      'This ___ lead to further complications.',
      'It ___ be wise to consult with an expert.'
    ][i],
    options: [
      ['could', 'must', 'should'],
      ['might', 'will', 'do'],
      ['appears', 'is', 'has'],
      ['would', 'must', 'does'],
      ['would', 'will', 'do'],
      ['Might', 'Must', 'Will'],
      ['seems', 'is', 'has'],
      ['might', 'will', 'do'],
      ['could', 'must', 'will'],
      ['would', 'must', 'should']
    ][i],
    correctAnswer: [
      'could',
      'might',
      'appears',
      'would',
      'would',
      'Might',
      'seems',
      'might',
      'could',
      'would'
    ][i],
    explanation: 'Correct hedging device for diplomacy.',
    points: 1
  }))
};

export const C1_U12_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'vocabulary',
  title: 'Negotiation Vocabulary',
  explanation: 'Key terms used in professional negotiations and agreements.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'We need to find a ___ ground. (common)',
      'They reached a ___ after hours of talk. (compromise)',
      'The talks are currently at a ___ . (deadlock)',
      'We are looking for a ___ solution. (mutually)',
      'He is a very skilled ___ . (negotiator)',
      'We must ___ all the details first. (clarify)',
      'The contract is legally ___ . (binding)',
      'They made a counter-___ . (offer)',
      'We need to ___ the terms. (negotiate)',
      'The deal was ___ yesterday. (finalized)'
    ][i],
    correctAnswer: [
      'common',
      'compromise',
      'deadlock',
      'mutually beneficial',
      'negotiator',
      'clarify',
      'binding',
      'offer',
      'negotiate',
      'finalized'
    ][i],
    explanation: 'Correct negotiation terminology.',
    points: 1
  }))
};

export const C1_U12_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'speaking-analysis',
  title: 'Diplomatic Phrases',
  explanation: 'Choosing the most diplomatic response in a business context.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'How to disagree politely:',
      'How to ask for clarification:',
      'How to propose a compromise:',
      'How to handle a difficult question:',
      'How to end a negotiation:',
      'How to express concern:',
      'How to ask for more time:',
      'How to reject an offer politely:',
      'How to emphasize a point diplomatically:',
      'How to seek agreement:'
    ][i],
    options: [
      ['I see your point, but...', 'You are wrong.', 'I don\'t agree.'],
      ['Could you elaborate on that?', 'What do you mean?', 'I don\'t get it.'],
      ['Perhaps we could meet halfway?', 'Let\'s do this instead.', 'Give me what I want.'],
      ['That\'s an interesting point, let me...', 'I don\'t know.', 'No comment.'],
      ['I think we have a basis for agreement.', 'We\'re done.', 'I\'m leaving.'],
      ['I have some reservations about...', 'I don\'t like this.', 'This is bad.'],
      ['Would it be possible to revisit this?', 'Wait.', 'I need more time.'],
      ['I\'m afraid we can\'t accept that.', 'No way.', 'That\'s too low.'],
      ['It is worth considering that...', 'Listen to me.', 'This is important.'],
      ['Would you be open to this?', 'Agree with me.', 'Yes or no?']
    ][i],
    correctAnswer: [
      'I see your point, but...',
      'Could you elaborate on that?',
      'Perhaps we could meet halfway?',
      'That\'s an interesting point, let me...',
      'I think we have a basis for agreement.',
      'I have some reservations about...',
      'Would it be possible to revisit this?',
      'I\'m afraid we can\'t accept that.',
      'It is worth considering that...',
      'Would you be open to this?'
    ][i],
    explanation: 'Correct diplomatic phrasing.',
    points: 1
  }))
};

export const unit12: Lesson = createC1Unit(
  'c1-u12',
  'Business Negotiations & Diplomacy',
  'Learning the language of hedging, diplomacy, and persuasion in a professional setting.',
  ['Use hedging and modal verbs for diplomacy', 'Apply professional negotiation vocabulary', 'Select appropriate diplomatic responses in business contexts'],
  [
    C1_U12_BLOCK1, C1_U12_BLOCK2, C1_U12_BLOCK3,
    C1_U12_BLOCK1, C1_U12_BLOCK2, C1_U12_BLOCK3,
    C1_U12_BLOCK1, C1_U12_BLOCK2, C1_U12_BLOCK3, C1_U12_BLOCK1
  ]
);
