import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 18;

// ============================================
// BLOCK 1: GRAMMAR - REPORTING VERBS (VERB + THAT)
// ============================================
export const B2_U18_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Reporting Verbs: That-Clauses',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Common reporting verbs like suggest, insist, deny, and claim followed by "that".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'He ___ that he had not seen the report.',
      'She ___ that we should start earlier.',
      'The manager ___ that the project be finished by Friday.',
      'They ___ that the system was perfectly safe.',
      'I ___ that there had been a misunderstanding.',
      'He ___ that he was the best person for the job.',
      'She ___ that she would be late.',
      'They ___ that the deal was off.',
      'He ___ that he had made a mistake.',
      'She ___ that everything would be fine.'
    ][i],
    options: [
      ['denied', 'refused', 'offered'],
      ['suggested', 'ordered', 'told'],
      ['insisted', 'said', 'asked'],
      ['claimed', 'wanted', 'denied'],
      ['explained', 'told', 'asked'],
      ['boasted', 'said', 'informed'],
      ['warned', 'ordered', 'asked'],
      ['announced', 'said', 'told'],
      ['admitted', 'refused', 'offered'],
      ['promised', 'ordered', 'asked']
    ][i],
    correctAnswer: [
      'denied',
      'suggested',
      'insisted',
      'claimed',
      'explained',
      'boasted',
      'warned',
      'announced',
      'admitted',
      'promised'
    ][i],
    explanation: 'Using appropriate reporting verbs for different communicative intents.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - REPORTING VERBS (VERB + -ING / VERB + TO)
// ============================================
export const B2_U18_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Reporting Verbs: -ing and to-Infinitive',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Some verbs are followed by a gerund (admit, deny, suggest) and others by a to-infinitive (offer, refuse, promise, agree).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'He suggested ___ (go) to the new Italian restaurant.',
      'She offered ___ (help) me with the bags.',
      'They refused ___ (sign) the contract.',
      'He denied ___ (steal) the watch.',
      'She admitted ___ (be) wrong.',
      'They agreed ___ (meet) at 10 AM.',
      'He promised ___ (be) home by midnight.',
      'She apologized for ___ (be) late.',
      'He recommended ___ (read) this book.',
      'She threatened ___ (call) the police.'
    ][i],
    correctAnswer: [
      'going',
      'to help',
      'to sign',
      'stealing',
      'being',
      'to meet',
      'to be',
      'being',
      'reading',
      'to call'
    ][i],
    explanation: 'Differentiating between patterns for reporting verbs.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - MEETINGS & NEGOTIATIONS
// ============================================
export const B2_U18_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Meetings and Discussions',
  explanation: 'Terms for formal and informal workplace gatherings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We need to set an ___ (agenda) for the meeting.',
      'Who is going to take the ___ (minutes)?',
      'The meeting was ___ (chaired) by the CEO.',
      'We had a very ___ (productive) discussion.',
      'There were several ___ (action) points to follow up on.',
      'I\'d like to ___ (raise) a point about the budget.',
      'Let\'s stay on ___ (track) and avoid distractions.',
      'We need to reach a ___ (consensus) before we leave.',
      'The meeting was ___ (adjourned) until tomorrow.',
      'Can we ___ (summarize) what we have agreed so far?'
    ][i],
    correctAnswer: [
      'agenda',
      'minutes',
      'chaired',
      'productive',
      'action',
      'raise',
      'track',
      'consensus',
      'adjourned',
      'summarize'
    ][i],
    explanation: 'Vocabulary for structuring and managing meetings.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - NEGOTIATION STRATEGIES
// ============================================
export const B2_U18_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'The Art of Negotiation',
  explanation: 'Vocabulary for reaching agreements and compromising.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We are looking for a ___ (win-win) situation.',
      'The negotiation reached a ___ (deadlock).',
      'We need to make a ___ (concession) to close the deal.',
      'He is a very tough ___ (negotiator).',
      'The ___ (terms) of the contract are very clear.',
      'We managed to ___ (iron) out the details.',
      'The deal is still up in the ___ (air).',
      'We need to find common ___ (ground).',
      'They gave us a take-it-or-___ (leave)-it offer.',
      'The negotiation was very ___ (intense).'
    ][i],
    options: [
      ['win-win', 'good-good', 'best-best'],
      ['deadlock', 'stop', 'wall'],
      ['concession', 'gift', 'prize'],
      ['negotiator', 'talker', 'dealer'],
      ['terms', 'words', 'lines'],
      ['iron', 'wash', 'clean'],
      ['air', 'sky', 'cloud'],
      ['ground', 'land', 'place'],
      ['leave', 'take', 'make'],
      ['intense', 'hard', 'strong']
    ][i],
    correctAnswer: [
      'win-win',
      'deadlock',
      'concession',
      'negotiator',
      'terms',
      'iron',
      'air',
      'ground',
      'leave',
      'intense'
    ][i],
    explanation: 'Key terms and idioms in business negotiations.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (COMMUNICATION)
// ============================================
export const B2_U18_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Professional Interaction',
  explanation: 'Form words related to meetings and negotiations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (AGREE) was signed yesterday.',
      'We had a very ___ (CONSTRUCT) meeting.',
      'The ___ (NEGOTIATE) process was long.',
      'He showed great ___ (FLEXIBLE) during the talk.',
      'The ___ (CLARIFY) of his points was appreciated.',
      'We need a ___ (DECIDE) leader for this project.',
      'The ___ (ORGANIZE) of the meeting was poor.',
      'She is a very ___ (PERSUADE) speaker.',
      'The ___ (EFFICIENT) of the team improved.',
      'His ___ (CONTRIBUTE) to the discussion was vital.'
    ][i],
    correctAnswer: [
      'agreement',
      'constructive',
      'negotiation',
      'flexibility',
      'clarity',
      'decisive',
      'organization',
      'persuasive',
      'efficiency',
      'contribution'
    ][i],
    explanation: 'Suffixes for nouns and adjectives in professional contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - MASTERING NEGOTIATION
// ============================================
export const B2_U18_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: How to Get What You Want',
  explanation: 'Read the tips on negotiation and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the "BATNA" in negotiation?' : 'Why is active listening important?',
    options: [['Best alternative to a negotiated agreement', 'Bigger and tougher name always', 'Budget and time now always', 'Bank and tax name always'], ['To understand the other side\'s needs', 'To talk more', 'To show power', 'To waste time']][i % 2],
    correctAnswer: i < 5 ? 'Best alternative to a negotiated agreement' : 'To understand the other side\'s needs',
    explanation: 'Understanding technical negotiation concepts.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - DIFFICULT NEGOTIATION
// ============================================
export const B2_U18_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Reaching an Agreement',
  explanation: 'Listen to the negotiation between a supplier and a client.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the main point of contention?`,
    options: ['Price', 'Delivery time', 'Quality', 'Quantity'],
    correctAnswer: 'Price',
    explanation: 'Identifying the main issue in a business discussion.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - NEGOTIATION EMAILS
// ============================================
export const B2_U18_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Following up after a Meeting',
  explanation: 'Choose the best phrase for a follow-up email.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To thank someone for the meeting:',
      'To summarize the main points:',
      'To refer to an action point:',
      'To clarify a misunderstanding:',
      'To request more info:',
      'To propose a next step:',
      'To mention an attachment:',
      'To state your commitment:',
      'To set a deadline for a response:',
      'To close the email:'
    ][i],
    options: [
      ['Thank you for your time today.', 'Meeting was good.', 'Thanks.'],
      ['As discussed, here is a summary of...', 'We said this:', 'Summary:'],
      ['As per our agreement, I will...', 'I do this.', 'Action:'],
      ['I would like to clarify my position on...', 'You got it wrong.', 'Clarify:'],
      ['Could you please provide more details on...', 'Need info.', 'Details:'],
      ['I suggest we meet again next week.', 'Let\'s meet.', 'Next time:'],
      ['Please find the revised contract attached.', 'Here is the file.', 'Attached:'],
      ['We are fully committed to this partnership.', 'We are with you.', 'Promise:'],
      ['I look forward to hearing from you by Friday.', 'Tell me by Friday.', 'Date:'],
      ['Best regards,', 'Bye.', 'See you.']
    ][i],
    correctAnswer: [
      'Thank you for your time today.',
      'As discussed, here is a summary of...',
      'As per our agreement, I will...',
      'I would like to clarify my position on...',
      'Could you please provide more details on...',
      'I suggest we meet again next week.',
      'Please find the revised contract attached.',
      'We are fully committed to this partnership.',
      'I look forward to hearing from you by Friday.',
      'Best regards,'
    ][i],
    explanation: 'Using professional register for business correspondence.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - HANDLING OBJECTIONS
// ============================================
export const B2_U18_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Responding to Concerns',
  explanation: 'Identify natural ways to respond to objections during a negotiation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally respond when someone says the price is too high?`,
    options: ['I understand your concern, however...', 'No it isn\'t.', 'That\'s the price.', 'It is cheap.'],
    correctAnswer: 'I understand your concern, however...',
    explanation: 'Using polite but firm language in negotiations.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U18_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 18',
  explanation: 'Consolidation of Reporting Verbs and Negotiation Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'He ___ (admit) that he was wrong.' : 'She suggested ___ (take) a break.',
    options: i < 5 ? ['admitted', 'refused', 'offered'] : ['taking', 'to take', 'take'],
    correctAnswer: i < 5 ? 'admitted' : 'taking',
    explanation: 'Review of patterns and verb choices.',
    points: 1
  }))
};

export const B2_UNIT_18 = createB2Unit(
  'b2-u18',
  'Meetings & Negotiations',
  'Master the art of professional reporting and negotiation strategies.',
  ['Use reporting verbs with various grammatical patterns (that, -ing, to)', 'Identify and use key vocabulary for meetings and negotiations', 'Communicate effectively and professionally in business discussions'],
  [
    B2_U18_BLOCK1, B2_U18_BLOCK2, B2_U18_BLOCK3, B2_U18_BLOCK4, B2_U18_BLOCK5,
    B2_U18_BLOCK6, B2_U18_BLOCK7, B2_U18_BLOCK8, B2_U18_BLOCK9, B2_U18_BLOCK10
  ]
);
