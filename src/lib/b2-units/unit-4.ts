import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 4;

// ============================================
// BLOCK 1: GRAMMAR - USED TO VS WOULD
// ============================================
export const B2_U4_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Past Habits: Used to vs Would',
  grammarPoint: 'Past Habits',
  explanation: 'Use "used to" for past states and habits. Use "would" only for repeated actions (not states).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'I ___ live in London when I was a child.',
      'Every Sunday, we ___ go to the park.',
      'He ___ have long hair, but now it\'s short.',
      'They ___ always bring us gifts when they visited.',
      'She ___ be very shy, but she\'s confident now.',
      'We ___ play hide and seek for hours.',
      'I ___ like spinach, but I love it now.',
      'My grandfather ___ tell us amazing stories.',
      'There ___ be a cinema here, but it closed.',
      'We ___ spend our summers at the beach.'
    ][i],
    options: [
      ['used to', 'would', 'both'],
      ['both', 'used to', 'would'],
      ['used to', 'would', 'both'],
      ['both', 'used to', 'would'],
      ['used to', 'would', 'both'],
      ['both', 'used to', 'would'],
      ['used to', 'would', 'both'],
      ['both', 'used to', 'would'],
      ['used to', 'would', 'both'],
      ['both', 'used to', 'would']
    ][i],
    correctAnswer: [
      'used to',
      'both',
      'used to',
      'both',
      'used to',
      'both',
      'used to',
      'both',
      'used to',
      'both'
    ][i],
    explanation: '"Used to" works for both states and actions; "would" only for actions.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - BE/GET USED TO
// ============================================
export const B2_U4_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Be used to vs Get used to',
  grammarPoint: 'Be/Get used to',
  explanation: '"Be used to" describes a state (familiarity). "Get used to" describes a process (becoming familiar). Both are followed by -ing or a noun.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I am finally ___ (use) to the cold weather.',
      'It took me a long time to ___ (get) used to driving on the left.',
      'She isn\'t ___ (use) to waking up so early.',
      'Are you ___ (get) used to your new job yet?',
      'I will never ___ (get) used to this noise.',
      'He was ___ (use) to living alone.',
      'We are ___ (get) used to the new software.',
      'I couldn\'t ___ (get) used to the food in that country.',
      'She is ___ (use) to working under pressure.',
      'Have you ___ (get) used to the routine?'
    ][i],
    correctAnswer: [
      'used',
      'get',
      'used',
      'getting',
      'get',
      'used',
      'getting',
      'get',
      'used',
      'got'
    ][i],
    explanation: 'Differentiating between state and process of adaptation.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: GRAMMAR - GERUNDS AND INFINITIVES
// ============================================
export const B2_U4_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Gerunds and Infinitives',
  grammarPoint: 'Gerunds & Infinitives',
  explanation: 'Certain verbs are followed by -ing, others by to + infinitive.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'I enjoy ___ (read) in my free time.',
      'She decided ___ (accept) the job offer.',
      'He avoided ___ (answer) my question.',
      'We managed ___ (finish) the project on time.',
      'I don\'t mind ___ (help) you with the laundry.',
      'They promised ___ (call) as soon as they arrived.',
      'She suggested ___ (go) to the cinema.',
      'He offered ___ (carry) my bags.',
      'I remember ___ (visit) Paris when I was five.',
      'Don\'t forget ___ (lock) the door.'
    ][i],
    correctAnswer: [
      'reading',
      'to accept',
      'answering',
      'to finish',
      'helping',
      'to call',
      'going',
      'to carry',
      'visiting',
      'to lock'
    ][i],
    explanation: 'Correct verb patterns for B2 level.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - LIFESTYLE HABITS
// ============================================
export const B2_U4_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Lifestyle Habits',
  explanation: 'Common expressions for daily routines and habits.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'I want to ___ (start) a new hobby.',
      'He needs to ___ (stop) smoking.',
      'She ___ (does) yoga every morning.',
      'We always ___ (go) for a walk after dinner.',
      'I ___ (spend) too much time on my phone.',
      'He ___ (keeps) a healthy diet.',
      'She ___ (takes) up a lot of space.',
      'I need to ___ (break) this bad habit.',
      'He ___ (makes) an effort to exercise.',
      'She ___ (leads) a very active life.'
    ][i],
    options: [
      ['take up', 'start up', 'make up'],
      ['give up', 'put off', 'go off'],
      ['practices', 'makes', 'does'],
      ['go', 'take', 'make'],
      ['spend', 'waste', 'lose'],
      ['follows', 'keeps', 'has'],
      ['takes up', 'gets up', 'fills up'],
      ['break', 'quit', 'stop'],
      ['makes', 'does', 'takes'],
      ['leads', 'lives', 'has']
    ][i],
    correctAnswer: [
      'take up',
      'give up',
      'practices',
      'go',
      'spend',
      'follows',
      'takes up',
      'break',
      'makes',
      'leads'
    ][i],
    explanation: 'Collocations and phrasal verbs for lifestyle.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - OPEN CLOZE
// ============================================
export const B2_U4_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'open-cloze',
  title: 'Open Cloze: Changing Habits',
  explanation: 'Fill in each gap with one word.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'I used ___ live in a small town.',
      'I am getting used ___ the traffic.',
      'He would ___ tell us stories.',
      'She is interested ___ learning Japanese.',
      'I avoid ___ late for meetings.',
      'We managed ___ find the keys.',
      'They suggested ___ to the park.',
      'I am fond ___ swimming.',
      'He is good ___ playing chess.',
      'It depends ___ the weather.'
    ][i],
    correctAnswer: [
      'to',
      'to',
      'always',
      'in',
      'being',
      'to',
      'going',
      'of',
      'at',
      'on'
    ][i],
    explanation: 'Testing prepositions and verb patterns.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - HEALTHY HABITS
// ============================================
export const B2_U4_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Science of Habits',
  explanation: 'Read the text and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'How long does it typically take to form a new habit?' : 'What is the "cue" in the habit loop?',
    options: [['21 days', '66 days', 'One year', 'One week'], ['The trigger', 'The reward', 'The action', 'The result']][i % 2],
    correctAnswer: i < 5 ? '66 days' : 'The trigger',
    explanation: 'Comprehending text about behavior.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - DAILY ROUTINES
// ============================================
export const B2_U4_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Day in the Life',
  explanation: 'Listen and identify the habit described.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} is describing their morning routine. What do they always do?`,
    options: ['Drink coffee', 'Go for a run', 'Read the news', 'Meditate'],
    correctAnswer: 'Drink coffee',
    explanation: 'Identifying habits from spoken context.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ADVICE & SUGGESTIONS
// ============================================
export const B2_U4_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Giving Advice',
  explanation: 'Choose the best way to give advice on changing habits.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To give strong advice:',
      'To make a polite suggestion:',
      'To recommend something:',
      'To warn about a bad habit:',
      'To encourage someone:',
      'To suggest an alternative:',
      'To ask for advice:',
      'To express a desire to change:',
      'To describe a successful change:',
      'To summarize advice:'
    ][i],
    options: [
      ['You should definitely...', 'Maybe you can...', 'It might be ok to...'],
      ['Why don\'t you try...?', 'You must...', 'Do this:'],
      ['I highly recommend...', 'It is nice...', 'Try it.'],
      ['Be careful not to...', 'It is bad.', 'Stop it.'],
      ['You can do it!', 'It is hard.', 'Try again.'],
      ['Instead of that, try...', 'Don\'t do that.', 'Do another thing.'],
      ['What would you recommend?', 'Tell me what to do.', 'Advice please.'],
      ['I wish I could...', 'I want to.', 'I will.'],
      ['It has made a huge difference.', 'It is better.', 'I changed.'],
      ['Overall, the best thing is...', 'In short...', 'Lastly...']
    ][i],
    correctAnswer: [
      'You should definitely...',
      'Why don\'t you try...?',
      'I highly recommend...',
      'Be careful not to...',
      'You can do it!',
      'Instead of that, try...',
      'What would you recommend?',
      'I wish I could...',
      'It has made a huge difference.',
      'Overall, the best thing is...'
    ][i],
    explanation: 'Functional language for advice and suggestions.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - TALKING ABOUT HABITS
// ============================================
export const B2_U4_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Talking About Habits',
  explanation: 'Identify natural expressions for frequency and habits.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which is the most natural way to say you do something occasionally?`,
    options: ['Every now and then.', 'Occasionally I do it.', 'Sometimes I do.', 'From time to time.'],
    correctAnswer: 'Every now and then.',
    explanation: 'Idiomatic expressions for frequency.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U4_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 4',
  explanation: 'Consolidation of Unit 4 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct form of "be/get used to".' : 'Choose the correct gerund or infinitive.',
    options: i < 5 ? ['I am used to living here.', 'I used to live here.', 'I am used to live here.'] : ['I enjoy swimming.', 'I enjoy to swim.', 'I enjoy swim.'],
    correctAnswer: i < 5 ? 'I am used to living here.' : 'I enjoy swimming.',
    explanation: 'Review of Unit 4 concepts.',
    points: 1
  }))
};

export const B2_UNIT_4 = createB2Unit(
  'b2-u4',
  'Habits in the Past & Lifestyle',
  'Master used to, would, be/get used to and talk about lifestyle.',
  ['Use used to and would for past habits', 'Understand be and get used to', 'Master gerund and infinitive patterns'],
  [
    B2_U4_BLOCK1, B2_U4_BLOCK2, B2_U4_BLOCK3, B2_U4_BLOCK4, B2_U4_BLOCK5,
    B2_U4_BLOCK6, B2_U4_BLOCK7, B2_U4_BLOCK8, B2_U4_BLOCK9, B2_U4_BLOCK10
  ]
);
