import { Exercise } from '../exercise-types';
import { createC1Unit, genId } from './utils';

const UNIT_ID = 1;

// ============================================
// BLOCK 1: GRAMMAR - INVERSION
// ============================================
export const C1_U1_BLOCK1: Exercise = {
  id: `c1-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Negative Inversion',
  grammarPoint: 'Inversion',
  explanation: 'Use inversion (auxiliary before subject) after certain negative or restrictive adverbials.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'Never ___ I seen such a magnificent performance.',
      'Rarely ___ she venture out after dark.',
      'Little ___ they know what was about to happen.',
      'Not only ___ he late, but he also forgot his notes.',
      'Under no circumstances ___ you open this door.',
      'Only then ___ I realize the gravity of the situation.',
      'Hardly ___ we started the meeting when the phone rang.',
      'No sooner ___ they arrived than it began to pour.',
      'Seldom ___ one find such dedication nowadays.',
      'On no account ___ this information be shared.'
    ][i],
    correctAnswer: [
      'have',
      'does',
      'did',
      'was',
      'should',
      'did',
      'had',
      'had',
      'does',
      'must'
    ][i],
    explanation: 'Inversion after negative/restrictive adverbials.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - ADVANCED NARRATIVE TENSES
// ============================================
export const C1_U1_BLOCK2: Exercise = {
  id: `c1-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Narrative Tenses & Backgrounding',
  grammarPoint: 'Past Tenses',
  explanation: 'Using past tenses to create complex narrative structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'I ___ for hours when I finally found the solution.',
      'By the time the authorities arrived, the evidence ___ .',
      'She ___ always complaining about her colleagues.',
      'I ___ to mention that I won\'t be coming tomorrow.',
      'They ___ in London for ten years before they moved.',
      'I ___ just about to leave when he walked in.',
      'We ___ the project for months before it was cancelled.',
      'He ___ the letter three times before sending it.',
      'She ___ to have been working there since 2010.',
      'I wish I ___ more attention during the lecture.'
    ][i],
    options: [
      ['had been working', 'was working', 'had worked'],
      ['had been removed', 'was removed', 'had removed'],
      ['was', 'has been', 'had been'],
      ['was meaning', 'meant', 'had meant'],
      ['had been living', 'lived', 'were living'],
      ['was', 'had been', 'were'],
      ['had been developing', 'developed', 'were developing'],
      ['read', 'had read', 'was reading'],
      ['is said', 'was said', 'had said'],
      ['had paid', 'paid', 'was paying']
    ][i],
    correctAnswer: [
      'had been working',
      'had been removed',
      'was',
      'was meaning',
      'had been living',
      'was',
      'had been developing',
      'had read',
      'is said',
      'had paid'
    ][i],
    explanation: 'Advanced use of past tenses for narrative flow.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - IDIOMS & EXPRESSIONS
// ============================================
export const C1_U1_BLOCK3: Exercise = {
  id: `c1-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Idiomatic Expressions',
  explanation: 'Common C1 level idioms and their meanings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He\'s always beating around the ___ instead of being direct.',
      'Don\'t worry, it\'s not rocket ___ .',
      'I\'m feeling a bit under the ___ today.',
      'Let\'s call it a ___ and go home.',
      'You hit the ___ on the head with that comment.',
      'We need to get our ___ in a row before the presentation.',
      'I heard it straight from the horse\'s ___ .',
      'That\'s the last ___ ! I can\'t take it anymore.',
      'He has a chip on his ___ about his background.',
      'Let\'s play it by ___ and see what happens.'
    ][i],
    correctAnswer: [
      'bush',
      'science',
      'weather',
      'day',
      'nail',
      'ducks',
      'mouth',
      'straw',
      'shoulder',
      'ear'
    ][i],
    explanation: 'Advanced idioms in context.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - COLLOCATIONS
// ============================================
export const C1_U1_BLOCK4: Exercise = {
  id: `c1-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Academic Collocations',
  explanation: 'Common word pairings in academic and professional English.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The research provides ___ evidence for the theory.',
      'There is a ___ difference between the two approaches.',
      'The government needs to ___ action immediately.',
      'He made a ___ contribution to the field.',
      'The results ___ the hypothesis.',
      'We need to ___ the underlying causes.',
      'The project is ___ schedule.',
      'She has a ___ knowledge of the subject.',
      'The data ___ a clear trend.',
      'It is of ___ importance to remain objective.'
    ][i],
    options: [
      ['compelling', 'strong', 'big'],
      ['striking', 'large', 'wide'],
      ['take', 'do', 'make'],
      ['significant', 'large', 'important'],
      ['support', 'hold', 'give'],
      ['address', 'look', 'deal'],
      ['behind', 'after', 'late'],
      ['profound', 'deep', 'wide'],
      ['reveals', 'shows', 'says'],
      ['paramount', 'high', 'top']
    ][i],
    correctAnswer: [
      'compelling',
      'striking',
      'take',
      'significant',
      'support',
      'address',
      'behind',
      'profound',
      'reveals',
      'paramount'
    ][i],
    explanation: 'Natural sounding word combinations at C1 level.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - KEY WORD TRANSFORMATION
// ============================================
export const C1_U1_BLOCK5: Exercise = {
  id: `c1-u${UNIT_ID}-b5`,
  type: 'key-word-transformation',
  title: 'Key Word Transformation',
  explanation: 'Rewrite the sentence using the key word so it has the same meaning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'key-word-transformation',
    sentence: [
      'I haven\'t seen him for five years.',
      'She regreted not studying harder.',
      'He found the test very difficult.',
      'They might have forgotten about the meeting.',
      'It\'s possible that he missed the train.',
      'I only realized my mistake later.',
      'He started working as soon as he arrived.',
      'I prefer staying home to going out.',
      'He is likely to win the competition.',
      'She didn\'t mean to offend you.'
    ][i],
    keyWord: [
      'SINCE',
      'WISHES',
      'DIFFICULTY',
      'MAY',
      'COULD',
      'DID',
      'SOONER',
      'RATHER',
      'CHANCE',
      'INTENTION'
    ][i],
    startOfAnswer: [
      'It has been five years ___',
      'She ___',
      'He had ___',
      'They ___',
      'He ___',
      'Only later ___',
      'No ___',
      'I would ___',
      'There is a ___',
      'She had ___'
    ][i],
    correctAnswer: [
      'since I last saw him',
      'wishes she had studied harder',
      'had difficulty in doing the test',
      'may have forgotten about the meeting',
      'could have missed the train',
      'did I realize my mistake',
      'sooner had he arrived than he started working',
      'rather stay home than go out',
      'good chance that he will win',
      'no intention of offending you'
    ][i],
    explanation: 'CAE style Key Word Transformation.',
    points: 2
  }))
};

// ============================================
// BLOCK 6: READING - MULTIPLE CHOICE CLOZE
// ============================================
export const C1_U1_BLOCK6: Exercise = {
  id: `c1-u${UNIT_ID}-b6`,
  type: 'multiple-choice-cloze',
  title: 'Multiple Choice Cloze: The Future of AI',
  explanation: 'Choose the best word to fill each gap.',
  text: 'The rapid (1)___ of technology has changed our lives. Many people (2)___ that AI will soon surpass human intelligence...',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: `Gap ${i + 1}: The rapid ___ of technology has changed our lives.`,
    options: ['advancement', 'growth', 'rise', 'spread'],
    correctAnswer: 'advancement',
    explanation: 'Vocabulary in context.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - NUANCE & ATTITUDE
// ============================================
export const C1_U1_BLOCK7: Exercise = {
  id: `c1-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Implicit Meaning',
  explanation: 'Identify what the speaker implies in each situation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} says "It's not exactly what I expected." What do they mean?`,
    options: ['They are disappointed', 'They are pleasantly surprised', 'They are confused', 'They are angry'],
    correctAnswer: 'They are disappointed',
    explanation: 'Understanding sarcasm and understatement.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING - FORMAL REPORTS
// ============================================
export const C1_U1_BLOCK8: Exercise = {
  id: `c1-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Formal Reports',
  explanation: 'Choose the most appropriate academic phrasing.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a topic:',
      'To show contrast:',
      'To provide examples:',
      'To conclude:',
      'To express uncertainty:',
      'To refer to data:',
      'To suggest improvements:',
      'To emphasize a point:',
      'To link ideas:',
      'To state an objective:'
    ][i],
    options: [
      ['The purpose of this report is to...', 'I am writing to tell you about...', 'This is about...'],
      ['In contrast,', 'But on the other hand,', 'However,'],
      ['For instance,', 'Like for example,', 'Such as...'],
      ['In conclusion,', 'To wrap up,', 'Finally,'],
      ['It appears that...', 'Maybe...', 'I think...'],
      ['According to the data,', 'The numbers say...', 'As seen in...'],
      ['It is recommended that...', 'We should...', 'How about...'],
      ['It is important to note that...', 'I want to say that...', 'Don\'t forget that...'],
      ['Furthermore,', 'Also,', 'What\'s more,'],
      ['This report aims to...', 'We want to...', 'The goal is...']
    ][i],
    correctAnswer: [
      'The purpose of this report is to...',
      'In contrast,',
      'For instance,',
      'In conclusion,',
      'It appears that...',
      'According to the data,',
      'It is recommended that...',
      'It is important to note that...',
      'Furthermore,',
      'This report aims to...'
    ][i],
    explanation: 'Formal register and academic tone.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATION
// ============================================
export const C1_U1_BLOCK9: Exercise = {
  id: `c1-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Speculating & Evaluating',
  explanation: 'Choose the best phrase for speculating about a photograph.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you speculate about someone's feelings?`,
    options: ['They must be feeling quite overwhelmed.', 'They are happy.', 'I think they like it.', 'Maybe they are sad.'],
    correctAnswer: 'They must be feeling quite overwhelmed.',
    explanation: 'Using modal verbs for speculation.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED C1 REVIEW
// ============================================
export const C1_U1_BLOCK10: Exercise = {
  id: `c1-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed C1 Review',
  explanation: 'A comprehensive review of Unit 1 concepts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Identify the error in the sentence.' : 'Choose the most sophisticated synonym.',
    options: i < 5 ? ['Inversion error', 'Tense error', 'No error'] : ['Exacerbate', 'Make worse', 'Intensify'],
    correctAnswer: i < 5 ? 'No error' : 'Exacerbate',
    explanation: 'Review of advanced structures.',
    points: 1
  }))
};

export const C1_UNIT_1 = createC1Unit(
  'c1-u1',
  'Advanced Narrative & Inversion',
  'Master negative inversion and sophisticated narrative tenses.',
  ['Use negative inversion correctly', 'Analyze academic reports', 'Speculate using advanced modals'],
  [
    C1_U1_BLOCK1, C1_U1_BLOCK2, C1_U1_BLOCK3, C1_U1_BLOCK4, C1_U1_BLOCK5,
    C1_U1_BLOCK6, C1_U1_BLOCK7, C1_U1_BLOCK8, C1_U1_BLOCK9, C1_U1_BLOCK10
  ]
);
