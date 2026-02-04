import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 59;

// ============================================
// BLOCK 1: GRAMMAR - MODAL DEDUCTION (PAST - CERTAINTY)
// ============================================
export const B2_U59_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Solving the Case',
  grammarPoint: 'Modal Deduction (Past - Certainty)',
  explanation: 'Use "must have + past participle" for positive certainty about the past, and "can\'t/couldn\'t have + past participle" for negative certainty.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The thief ___ (must/have/enter) through the window.',
      'He ___ (can\'t/have/stolen) the car; he was with me.',
      'They ___ (must/have/known) the truth all along.',
      'She ___ (couldn\'t/have/seen) us; it was too dark.',
      'The witness ___ (must/have/lied) to protect her friend.',
      'It ___ (can\'t/have/been) an accident; the brakes were cut.',
      'You ___ (must/have/forgotten) your keys at the office.',
      'He ___ (couldn\'t/have/left) the country; his passport is here.',
      'They ___ (must/have/reached) a decision by now.',
      'She ___ (can\'t/have/received) my email yet.'
    ][i],
    correctAnswer: [
      'must have entered',
      'can\'t have stolen',
      'must have known',
      'couldn\'t have seen',
      'must have lied',
      'can\'t have been',
      'must have forgotten',
      'couldn\'t have left',
      'must have reached',
      'can\'t have received'
    ][i],
    explanation: 'Using modals to express certainty about past events.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MODAL DEDUCTION (PAST - POSSIBILITY)
// ============================================
export const B2_U59_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Unsolved Mysteries',
  grammarPoint: 'Modal Deduction (Past - Possibility)',
  explanation: 'Use "might/may/could have + past participle" to express possibility or uncertainty about the past.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The plane ___ (might/have/crashed) due to mechanical failure.',
      'He ___ (could/have/forgotten) about the meeting.',
      'They ___ (may/have/taken) the wrong turn.',
      'The money ___ (might/have/been/stolen) by a ghost!',
      'She ___ (could/have/told) us if she had known.',
      'It ___ (may/have/rained) during the night.',
      'The ancient civilization ___ (might/have/collapsed) due to drought.',
      'They ___ (could/have/escaped) through the back door.',
      'He ___ (may/have/misunderstood) my instructions.',
      'The message ___ (might/have/been/lost) in the mail.'
    ][i],
    correctAnswer: [
      'might have crashed',
      'could have forgotten',
      'may have taken',
      'might have been stolen',
      'could have told',
      'may have rained',
      'might have collapsed',
      'could have escaped',
      'may have misunderstood',
      'might have been lost'
    ][i],
    explanation: 'Using modals to speculate about past possibilities.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CRIME & INVESTIGATION
// ================= :::::::::::::::::::::::::::::
export const B2_U59_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Forensic Evidence',
  explanation: 'Vocabulary for crime scenes, evidence, and legal procedures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The police found ___ (fingerprints) on the safe.',
      'The ___ (suspect) was seen leaving the building.',
      'They are analyzing the DNA ___ (evidence).',
      'The detective is looking for a ___ (motive).',
      'There were no ___ (eyewitnesses) to the crime.',
      'The case remains ___ (unsolved) after ten years.',
      'He has a solid ___ (alibi) for the night of the murder.',
      'The victim was ___ (assaulted) in a dark alley.',
      'The trial is taking place in the high ___ (court).',
      'The ___ (verdict) was "not guilty".'
    ][i],
    correctAnswer: [
      'fingerprints',
      'suspect',
      'evidence',
      'motive',
      'eyewitnesses',
      'unsolved',
      'alibi',
      'assaulted',
      'court',
      'verdict'
    ][i],
    explanation: 'Key terms for discussing crime and justice.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SPECULATION & MYSTERY
// ================= ::::::::::::::::::::::::::::
export const B2_U59_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'The Unknown',
  explanation: 'Vocabulary for puzzles, secrets, and things that are hard to explain.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The disappearance of the ship is a complete ___ (mystery).',
      'The ruins are ___ (shrouded) in secrecy.',
      'He tried to ___ (unravel) the truth.',
      'The story sounds very ___ (far-fetched).',
      'There is a lot of ___ (speculation) about the incident.',
      'The code is almost impossible to ___ (decipher).',
      'The cave contains ___ (enigmatic) drawings.',
      'The theory is quite ___ (controversial).',
      'We must ___ (investigate) every possibility.',
      'The truth was finally ___ (revealed) years later.'
    ][i],
    options: [
      ['mystery', 'fact', 'truth'],
      ['shrouded', 'covered', 'hidden'],
      ['unravel', 'find', 'make'],
      ['far-fetched', 'true', 'easy'],
      ['speculation', 'proof', 'news'],
      ['decipher', 'read', 'write'],
      ['enigmatic', 'clear', 'simple'],
      ['controversial', 'easy', 'calm'],
      ['investigate', 'look', 'find'],
      ['revealed', 'hidden', 'closed']
    ][i],
    correctAnswer: [
      'mystery',
      'shrouded',
      'unravel',
      'far-fetched',
      'speculation',
      'decipher',
      'enigmatic',
      'controversial',
      'investigate',
      'revealed'
    ][i],
    explanation: 'Vocabulary for describing mysterious and speculative topics.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U59_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Finding the Truth',
  explanation: 'Form nouns, adjectives, and verbs related to evidence and discovery.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (IDENTIFY) of the body was difficult.',
      'They found ___ (CONVINCE) proof of his guilt.',
      'The ___ (APPEAR) of the witness was unexpected.',
      'He is a very ___ (SUSPECT) person.',
      'The results were ___ (CONCLUDE).',
      'The ___ (INVESTIGATE) lasted for months.',
      'She showed great ___ (PERSIST) in her work.',
      'The artifacts were ___ (GENUINE) ancient.',
      'We need more ___ (SCIENCE) evidence.',
      'The ___ (REVEAL) of the secret was a shock.'
    ][i],
    correctAnswer: [
      'identification',
      'convincing',
      'appearance',
      'suspicious',
      'conclusive',
      'investigation',
      'persistence',
      'genuinely',
      'scientific',
      'revelation'
    ][i],
    explanation: 'Transforming root words into terms describing investigative processes.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE ROANOKE COLONY
// ============================================
export const B2_U59_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Lost Colony of Roanoke',
  explanation: 'Read about the mysterious disappearance of an entire English colony in North America in 1590.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What happened to the Roanoke colonists?' : 'What clue was left behind?',
    options: [['They disappeared without a trace', 'They moved to New York', 'They were found safe'], ['The word "Croatoan" carved on a post', 'A detailed map', 'A pile of gold']][i % 2],
    correctAnswer: i < 5 ? 'They disappeared without a trace' : 'The word "Croatoan" carved on a post',
    explanation: 'Analyzing historical mysteries and evaluating different theories.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - FORENSIC BREAKTHROUGHS
// ============================================
export const B2_U59_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: DNA and Cold Cases',
  explanation: 'Listen to a podcast about how new DNA technology is solving "cold cases" from decades ago.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `How does genetic genealogy help solve crimes?`,
    options: ['By finding relatives of the suspect in public databases', 'By traveling back in time', 'By reading minds', 'By using magic'],
    correctAnswer: 'By finding relatives of the suspect in public databases',
    explanation: 'Listening for the intersection of science and law enforcement.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - REPORTS & NARRATIVES
// ================= ::::::::::::::::::::::::::::::
export const B2_U59_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Speculative Descriptions',
  explanation: 'Learn how to use modal deduction effectively in reports and stories.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To express a high degree of certainty (positive):',
      'To express a high degree of certainty (negative):',
      'To suggest a plausible theory:',
      'To admit you are completely unsure:',
      'To criticize someone\'s past behavior:',
      'To state what was possible but didn\'t happen:',
      'To use a more formal version of "might have":',
      'To conclude based on the evidence:',
      'To express surprise about a past event:',
      'To refer to an unlikely but possible scenario:'
    ][i],
    options: [
      ['The suspect must have known the code.', 'He maybe knew it.', 'I think he knew it.'],
      ['He couldn\'t have committed the crime.', 'He didn\'t do it.', 'He probably didn\'t.'],
      ['The fire could have been started by a short circuit.', 'Maybe a wire did it.', 'It was the wires.'],
      ['It might have been anyone.', 'I don\'t know.', 'Who knows?'],
      ['You should have told the police earlier.', 'Tell them next time.', 'Why didn\'t you say?'],
      ['They could have escaped, but they stayed.', 'They had a chance.', 'They stayed there.'],
      ['The scroll may have been damaged by water.', 'Water might do it.', 'It was water.'],
      ['We can conclude that he must have been present.', 'He was there.', 'I think he was there.'],
      ['She can\'t have been serious!', 'Is she real?', 'She was joking.'],
      ['It is possible that the treasure might have been buried here.', 'Maybe it is here.', 'The gold is here.']
    ][i],
    correctAnswer: [
      'The suspect must have known the code.',
      'He couldn\'t have committed the crime.',
      'The fire could have been started by a short circuit.',
      'It might have been anyone.',
      'You should have told the police earlier.',
      'They could have escaped, but they stayed.',
      'The scroll may have been damaged by water.',
      'We can conclude that he must have been present.',
      'She can\'t have been serious!',
      'It is possible that the treasure might have been buried here.'
    ][i],
    explanation: 'Using modal verbs for precise and varied levels of speculation.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SOLVING THE RIDDLE
// ================= ::::::::::::::::::::::::::::::
export const B2_U59_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: They must have forgotten...',
  explanation: 'How to use modal deduction naturally in everyday conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally react if a friend didn't show up for a meeting?`,
    options: ['He must have forgotten or maybe his phone died.', 'He isn\'t here.', 'Why is he late?', 'He is coming.'],
    correctAnswer: 'He must have forgotten or maybe his phone died.',
    explanation: 'Using modals to speculate about common life situations.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U59_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 59',
  explanation: 'Consolidation of Modal Deduction and Crime Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'He ___ (must/can\'t) have been there; he has an alibi.' : 'The ___ (suspect/victim) was arrested.',
    options: i < 5 ? ['must', 'can\'t', 'might'] : ['suspect', 'victim', 'witness'],
    correctAnswer: i < 5 ? 'can\'t' : 'suspect',
    explanation: 'Final check of key concepts from Unit 59.',
    points: 1
  }))
};

export const B2_UNIT_59 = createB2Unit(
  'b2-u59',
  'Review: Modal Deduction & Speculation',
  'Master the nuances of past deduction and speculation while investigating unsolved mysteries and the fascinating world of forensic science.',
  ['Apply modal verbs of deduction in the past correctly (must/can\'t/might have)', 'Acquire specialized vocabulary for crime scenes, evidence, and investigations', 'Speculate about mysterious events and discuss forensic evidence with precision'],
  [
    B2_U59_BLOCK1, B2_U59_BLOCK2, B2_U59_BLOCK3, B2_U59_BLOCK4, B2_U59_BLOCK5,
    B2_U59_BLOCK6, B2_U59_BLOCK7, B2_U59_BLOCK8, B2_U59_BLOCK9, B2_U59_BLOCK10
  ]
);
