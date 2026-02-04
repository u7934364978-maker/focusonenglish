import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 49;

// ============================================
// BLOCK 1: GRAMMAR - RELATIVE CLAUSES WITH PREPOSITIONS
// ============================================
export const B2_U49_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Formal Connections',
  grammarPoint: 'Relative Clauses',
  explanation: 'Using prepositions with "which" and "whom" in formal English (e.g., in which, for whom).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The house in ___ he lived was very small.',
      'The person to ___ you spoke is the manager.',
      'The school from ___ she graduated is famous.',
      'The era in ___ they lived was peaceful.',
      'The company for ___ he works is global.',
      'The town in ___ I was born is very quiet.',
      'The reason for ___ she left is unknown.',
      'The book on ___ the film is based is a classic.',
      'The group with ___ they traveled was friendly.',
      'The theory to ___ she referred is well-known.'
    ][i],
    options: [
      ['which', 'who', 'that'],
      ['whom', 'who', 'which'],
      ['which', 'whom', 'where'],
      ['which', 'that', 'where'],
      ['which', 'whom', 'who'],
      ['which', 'where', 'that'],
      ['which', 'why', 'what'],
      ['which', 'what', 'where'],
      ['whom', 'which', 'who'],
      ['which', 'whom', 'that']
    ][i],
    correctAnswer: [
      'which',
      'whom',
      'which',
      'which',
      'which',
      'which',
      'which',
      'which',
      'whom',
      'which'
    ][i],
    explanation: 'Using the formal structure "Preposition + which/whom".',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - NOMINAL RELATIVE CLAUSES
// ============================================
export const B2_U49_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Whatever and Whoever',
  grammarPoint: 'Relative Clauses',
  explanation: 'Using nominal relative clauses (what, whatever, whoever, whichever) to refer to things or people without a specific antecedent.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'You can eat ___ (whatever) you want.',
      '___ (Whoever) finishes first gets a prize.',
      'Choose ___ (whichever) one you like best.',
      'I will do ___ (what) is necessary.',
      '___ (Whatever) happens, don\'t give up.',
      'I don\'t know ___ (what) he is talking about.',
      'Ask ___ (whoever) is at the desk.',
      'Buy ___ (whichever) dress you prefer.',
      '___ (What) I need is a long holiday.',
      '___ (Whoever) broke the window must pay for it.'
    ][i],
    correctAnswer: [
      'whatever',
      'Whoever',
      'whichever',
      'what',
      'Whatever',
      'what',
      'whoever',
      'whichever',
      'What',
      'Whoever'
    ][i],
    explanation: 'Using relative pronouns that include the object/person they refer to.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - DIGITAL ACCESS & INEQUALITY
// ============================================
export const B2_U49_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Bridging the Gap',
  explanation: 'Vocabulary for technology access, internet infrastructure, and social inequality.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The digital ___ (divide) separates those with and without internet.',
      'Many rural areas lack high-speed ___ (broadband).',
      'We need to improve internet ___ (connectivity) in schools.',
      'Lack of ___ (access) to tech limits job opportunities.',
      'The government is subsidizing ___ (infrastructure) projects.',
      '___ (Net) neutrality is a major political issue.',
      'Digital ___ (inclusion) programs help elderly people.',
      'The ___ (bandwidth) is too low for video calls.',
      'Mobile ___ (data) is expensive in some countries.',
      'The country has a very high internet ___ (penetration) rate.'
    ][i],
    correctAnswer: [
      'divide',
      'broadband',
      'connectivity',
      'access',
      'infrastructure',
      'Net',
      'inclusion',
      'bandwidth',
      'data',
      'penetration'
    ][i],
    explanation: 'Core terms for discussing technological disparities.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SOCIAL MEDIA & IMPACT
// ============================================
export const B2_U49_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'The Connected World',
  explanation: 'Terms for the social and psychological impact of being constantly online.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Social media can create echo ___ (chambers).',
      'She is a famous social media ___ (influencer).',
      'I need to do a digital ___ (detox).',
      '___ (Cyberbullying) is a serious issue among teens.',
      'The video went ___ (viral) overnight.',
      'We must protect our online ___ (privacy).',
      'The ___ (algorithm) determines what we see.',
      'I spend too much ___ (screen) time.',
      'He is addicted to ___ (scrolling) through news.',
      'The app has millions of ___ (users).'
    ][i],
    options: [
      ['chambers', 'rooms', 'boxes'],
      ['influencer', 'person', 'worker'],
      ['detox', 'clean', 'break'],
      ['Cyberbullying', 'Bad-online', 'Mean-talk'],
      ['viral', 'popular', 'big'],
      ['privacy', 'secrets', 'safety'],
      ['algorithm', 'math', 'program'],
      ['screen', 'computer', 'phone'],
      ['scrolling', 'looking', 'reading'],
      ['users', 'people', 'members']
    ][i],
    correctAnswer: [
      'chambers',
      'influencer',
      'detox',
      'Cyberbullying',
      'viral',
      'privacy',
      'algorithm',
      'screen',
      'scrolling',
      'users'
    ][i],
    explanation: 'Vocabulary for modern digital habits and their consequences.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U49_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Digital Society',
  explanation: 'Form nouns, adjectives, and verbs related to technology and society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (EQUAL) of access is a major goal.',
      'The world is increasingly ___ (CONNECT).',
      'We need to ___ (DIGIT) our old records.',
      'The ___ (PROMPT) of technology is amazing.',
      'She is an ___ (ADVISE) on digital strategy.',
      'The ___ (SOLVE) requires global cooperation.',
      'His ___ (DEPEND) on technology is worrying.',
      'The ___ (CONSTRUCT) of the network took years.',
      'It was a ___ (BENEFIT) change for the community.',
      'The system is highly ___ (SECURE).'
    ][i],
    correctAnswer: [
      'equality',
      'connected',
      'digitize',
      'promptness',
      'advisor',
      'solution',
      'dependence',
      'construction',
      'beneficial',
      'secure'
    ][i],
    explanation: 'Transforming root words into digital and social terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - BRIDGING THE DIVIDE
// ============================================
export const B2_U49_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Satellite Internet for All',
  explanation: 'Read about projects like Starlink and their goal to provide global internet access.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'How does satellite internet differ from traditional cable?' : 'What is one concern about having thousands of satellites in orbit?',
    options: [['It can reach remote areas without cables', 'It is always faster', 'It is free'], ['Space debris and light pollution', 'Too many aliens', 'They might fall on houses']][i % 2],
    correctAnswer: i < 5 ? 'It can reach remote areas without cables' : 'Space debris and light pollution',
    explanation: 'Understanding the technical and environmental implications of new connectivity solutions.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - DIGITAL LITERACY FOR SENIORS
// ============================================
export const B2_U49_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Grandma Goes Online',
  explanation: 'Listen to an interview with a volunteer who teaches technology to elderly people.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the biggest challenge for seniors when learning to use tech?`,
    options: ['Fear of breaking something or making a mistake', 'Lack of interest', 'Not having enough money', 'Bad eyesight'],
    correctAnswer: 'Fear of breaking something or making a mistake',
    explanation: 'Listening for psychological barriers to technology adoption.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - LETTERS TO THE EDITOR
// ============================================
export const B2_U49_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Expressing Public Concern',
  explanation: 'Identify the best way to write a formal letter about a social issue like the digital divide.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To state the reason for writing:',
      'To express a strong opinion:',
      'To provide evidence for a claim:',
      'To suggest a solution:',
      'To conclude and call for action:',
      'To use a formal connector:',
      'To address the editor:',
      'To avoid emotional language:',
      'To highlight the urgency:',
      'To use a formal sign-off:'
    ][i],
    options: [
      ['I am writing to express my concern about...', 'I want to talk about...', 'Look at this:'],
      ['It is my firm belief that...', 'I think...', 'It is good.'],
      ['Statistics indicate that over 30% of...', 'I saw that...', 'Lots of people say:'],
      ['One possible solution would be to...', 'We should...', 'Let\'s do:'],
      ['It is time for the government to take action.', 'Fix it now.', 'Bye.'],
      ['Furthermore, it should be noted that...', 'And also...', 'Next thing:'],
      ['Dear Editor,', 'Hey Editor,', 'To the person:'],
      ['The situation is quite problematic.', 'The situation is a disaster!', 'It is terrible.'],
      ['This issue requires immediate attention.', 'Do it fast!', 'It is a bit late.'],
      ['Yours faithfully,', 'Take care,', 'Best regards,']
    ][i],
    correctAnswer: [
      'I am writing to express my concern about...',
      'It is my firm belief that...',
      'Statistics indicate that over 30% of...',
      'One possible solution would be to...',
      'It is time for the government to take action.',
      'Furthermore, it should be noted that...',
      'Dear Editor,',
      'The situation is quite problematic.',
      'This issue requires immediate attention.',
      'Yours faithfully,'
    ][i],
    explanation: 'Using the appropriate formal register for letters of opinion.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING TECH TRENDS
// ============================================
export const B2_U49_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Whatever happens, technology will...',
  explanation: 'How to use nominal relative clauses and advanced connectors naturally.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally use "whatever" to talk about the future?`,
    options: ['Whatever happens, technology will continue to advance.', 'What happens, tech goes.', 'If something happens, tech moves.', 'No matter what, tech is good.'],
    correctAnswer: 'Whatever happens, technology will continue to advance.',
    explanation: 'Using nominal relative clauses to make general but emphatic statements.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U49_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 49',
  explanation: 'Consolidation of Relative Clauses and Digital Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The era in ___ (which/where) we live is digital.' : '___ (Whoever/Whatever) uses the internet must be careful.',
    options: i < 5 ? ['which', 'where', 'that'] : ['Whoever', 'Whatever', 'Whichever'],
    correctAnswer: i < 5 ? 'which' : 'Whoever',
    explanation: 'Final check of key concepts from Unit 49.',
    points: 1
  }))
};

export const B2_UNIT_49 = createB2Unit(
  'b2-u49',
  'The Digital Divide',
  'Examine the global gap in technology access while mastering advanced relative clauses and nominal relative pronouns.',
  ['Use relative clauses with prepositions correctly', 'Apply nominal relative clauses like "whatever" and "whoever" naturally', 'Acquire vocabulary for digital access, infrastructure, and social impact'],
  [
    B2_U49_BLOCK1, B2_U49_BLOCK2, B2_U49_BLOCK3, B2_U49_BLOCK4, B2_U49_BLOCK5,
    B2_U49_BLOCK6, B2_U49_BLOCK7, B2_U49_BLOCK8, B2_U49_BLOCK9, B2_U49_BLOCK10
  ]
);
