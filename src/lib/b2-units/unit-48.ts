import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 48;

// ============================================
// BLOCK 1: GRAMMAR - REPORTING VERB PATTERNS (I)
// ============================================
export const B2_U48_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Reporting Educational Trends',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Using reporting verbs followed by "that + clause" or "verb + -ing".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The expert suggested ___ (use) more AI in schools.',
      'He denied ___ (cheat) on the online test.',
      'She recommended ___ (that) we should flip the classroom.',
      'The principal announced ___ (that) the budget was cut.',
      'They admitted ___ (be) unprepared for the change.',
      'I suggest ___ (take) a break before the lecture.',
      'He mentioned ___ (see) a new app for learning math.',
      'They reported ___ (that) student engagement had increased.',
      'She proposed ___ (study) in groups.',
      'The study confirmed ___ (that) gamification works.'
    ][i],
    options: [
      ['using', 'to use', 'use'],
      ['cheating', 'to cheat', 'cheat'],
      ['that', 'to', 'for'],
      ['that', 'to', 'for'],
      ['being', 'to be', 'be'],
      ['taking', 'to take', 'take'],
      ['seeing', 'to see', 'saw'],
      ['that', 'to', 'for'],
      ['studying', 'to study', 'study'],
      ['that', 'to', 'for']
    ][i],
    correctAnswer: [
      'using',
      'cheating',
      'that',
      'that',
      'being',
      'taking',
      'seeing',
      'that',
      'studying',
      'that'
    ][i],
    explanation: 'Verifying the correct verb pattern after common reporting verbs.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - REPORTING VERB PATTERNS (II)
// ============================================
export const B2_U48_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Directing and Advising',
  grammarPoint: 'Reporting Verbs',
  explanation: 'Using reporting verbs followed by "object + to-infinitive" (e.g., urge, encourage, warn).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The teacher encouraged us ___ (to try) the new software.',
      'He warned them ___ (not / to share) their passwords.',
      'The guide urged everyone ___ (to wear) a mask.',
      'She advised him ___ (to apply) for the scholarship.',
      'They persuaded her ___ (to join) the research team.',
      'The coach reminded us ___ (to bring) our gear.',
      'I told them ___ (to wait) in the hall.',
      'The doctor instructed her ___ (to take) the medicine.',
      'They invited us ___ (to speak) at the conference.',
      'The company asked him ___ (to lead) the project.'
    ][i],
    correctAnswer: [
      'to try',
      'not to share',
      'to wear',
      'to apply',
      'to join',
      'to bring',
      'to wait',
      'to take',
      'to speak',
      'to lead'
    ][i],
    explanation: 'Using the verb + object + to-infinitive pattern.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - EDTECH & MODERN PEDAGOGY
// ============================================
export const B2_U48_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Digital Classrooms',
  explanation: 'Vocabulary for new teaching technologies and methods.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Gamification) uses game elements in learning.',
      'In a ___ (flipped) classroom, students watch lectures at home.',
      'A ___ (Virtual) Learning Environment (VLE) is essential today.',
      '___ (Personalized) learning adapts to the student\'s needs.',
      'The use of ___ (tablets) in primary schools is controversial.',
      'We use ___ (collaborative) tools to work on projects.',
      '___ (Asynchronous) learning allows students to study at their own pace.',
      'The school offers ___ (blended) learning options.',
      'Students use ___ (digital) portfolios to showcase their work.',
      '___ (Instructional) design focuses on creating effective courses.'
    ][i],
    correctAnswer: [
      'Gamification',
      'flipped',
      'Virtual',
      'Personalized',
      'tablets',
      'collaborative',
      'Asynchronous',
      'blended',
      'digital',
      'Instructional'
    ][i],
    explanation: 'Core terms for modern education technology and strategies.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SKILLS FOR THE FUTURE
// ============================================
export const B2_U48_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: '21st Century Skills',
  explanation: 'Terms for the competencies required in the modern world.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We need to foster critical ___ (thinking) skills.',
      'Digital ___ (literacy) is a basic requirement.',
      'Problem-___ (solving) is highly valued by employers.',
      '___ (Creativity) is essential for innovation.',
      'Effective ___ (communication) is key to teamwork.',
      '___ (Adaptability) is crucial in a changing world.',
      'Self-___ (direction) is important for online learners.',
      'Global ___ (awareness) helps us understand other cultures.',
      '___ (Collaboration) leads to better results.',
      'Information ___ (management) is a vital skill.'
    ][i],
    options: [
      ['thinking', 'thought', 'mind'],
      ['literacy', 'reading', 'smartness'],
      ['solving', 'fixing', 'doing'],
      ['Creativity', 'Arts', 'Making'],
      ['communication', 'talk', 'chat'],
      ['Adaptability', 'Change', 'Move'],
      ['direction', 'look', 'way'],
      ['awareness', 'sight', 'news'],
      ['Collaboration', 'Working', 'Group'],
      ['management', 'care', 'taking']
    ][i],
    correctAnswer: [
      'thinking',
      'literacy',
      'solving',
      'Creativity',
      'communication',
      'Adaptability',
      'direction',
      'awareness',
      'Collaboration',
      'management'
    ][i],
    explanation: 'Vocabulary for core competencies in modern education.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U48_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Innovation',
  explanation: 'Form nouns, adjectives, and verbs related to teaching and technology.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Technology has ___ (REVOLUTION) the classroom.',
      'He is a very ___ (INNOVATE) teacher.',
      'The ___ (EFFECT) of the method was high.',
      'We need more ___ (INTERACT) lessons.',
      'The ___ (TRADITION) model of teaching is changing.',
      'He showed great ___ (ENTHUSIAST) for the project.',
      'The course provides ___ (VALUE) insights.',
      'We need to ___ (SIMPLIFY) the instructions.',
      'The ___ (MOTIVATE) of the students increased.',
      'She is an ___ (EXPERT) in educational technology.'
    ][i],
    correctAnswer: [
      'revolutionized',
      'innovative',
      'effectiveness',
      'interactive',
      'traditional',
      'enthusiasm',
      'valuable',
      'simplify',
      'motivation',
      'expert'
    ][i],
    explanation: 'Transforming root words into educational and technological terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE FLIPPED CLASSROOM
// ============================================
export const B2_U48_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Flipping the Script',
  explanation: 'Read about the "Flipped Classroom" model and its impact on student engagement.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main idea behind a flipped classroom?' : 'What is a challenge mentioned for this model?',
    options: [['Moving the lecture home and the "homework" to class', 'Doing more exams', 'No teachers'], ['Ensuring all students have access to technology at home', 'Less talking', 'Uniforms']][i % 2],
    correctAnswer: i < 5 ? 'Moving the lecture home and the "homework" to class' : 'Ensuring all students have access to technology at home',
    explanation: 'Identifying the core mechanics and hurdles of a modern teaching method.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AI IN EDUCATION
// ============================================
export const B2_U48_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: AI - Friend or Foe?',
  explanation: 'Listen to a debate about the role of Artificial Intelligence in the classroom.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is one positive use of AI mentioned by the speaker?`,
    options: ['Providing instant, personalized feedback', 'Replacing teachers entirely', 'Doing all the homework for students', 'Making exams harder'],
    correctAnswer: 'Providing instant, personalized feedback',
    explanation: 'Listening for arguments and examples in an educational debate.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - EDUCATIONAL BLOGS
// ============================================
export const B2_U48_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Engaging Teachers',
  explanation: 'Identify the best way to write an engaging blog post for fellow educators.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To hook the reader at the start:',
      'To introduce a new teaching tool:',
      'To share a personal anecdote:',
      'To use a rhetorical question:',
      'To provide a call to action:',
      'To structure a "Top 5" list:',
      'To summarize a benefit:',
      'To acknowledge a difficulty:',
      'To reference a fellow blogger:',
      'To use a punchy title:'
    ][i],
    options: [
      ['Have you ever wondered why some students struggle with...?', 'I am writing about...', 'Teaching is hard.'],
      ['I recently discovered a game-changing app called...', 'Here is an app.', 'Look at this:'],
      ['I remember a time in my class when...', 'One day, I did...', 'Teacher story:'],
      ['Is traditional teaching truly effective in the digital age?', 'Is it good?', 'What do you think?'],
      ['I urge you to try this in your next lesson!', 'Try it.', 'Do it now.'],
      ['Here are five ways to improve...', 'Five things:', 'Look at these 5:'],
      ['The results were truly remarkable.', 'It was good.', 'Happy days.'],
      ['Of course, implementing this isn\'t always easy.', 'It is hard.', 'Problems happen.'],
      ['As [Name] pointed out in their last post,', '[Name] said...', 'Look at [Name]'],
      ['5 Innovative Ways to Flip Your Classroom!', 'Teaching with tech', 'New tools']
    ][i],
    correctAnswer: [
      'Have you ever wondered why some students struggle with...?',
      'I recently discovered a game-changing app called...',
      'I remember a time in my class when...',
      'Is traditional teaching truly effective in the digital age?',
      'I urge you to try this in your next lesson!',
      'Here are five ways to improve...',
      'The results were truly remarkable.',
      'Of course, implementing this isn\'t always easy.',
      'As [Name] pointed out in their last post,',
      '5 Innovative Ways to Flip Your Classroom!'
    ][i],
    explanation: 'Choosing the correct semi-formal and engaging register for professional blogging.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - GIVING ADVICE ON TECH
// ============================================
export const B2_U48_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Recommending Tools',
  explanation: 'How to use reporting verbs and advice structures naturally.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally recommend an app to a colleague?`,
    options: ['I highly recommend using this app for vocabulary practice.', 'I say you use this.', 'App is good.', 'You must have it.'],
    correctAnswer: 'I highly recommend using this app for vocabulary practice.',
    explanation: 'Using sophisticated reporting verbs in a professional spoken context.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U48_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 48',
  explanation: 'Consolidation of Reporting Verbs and EdTech Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The teacher ___ (suggested/warned) us to study more.' : '___ (Gamification/Literacy) involves using games in the classroom.',
    options: i < 5 ? ['suggested', 'warned', 'recommended'] : ['Gamification', 'Literacy', 'Asynchronous'],
    correctAnswer: i < 5 ? 'warned' : 'Gamification',
    explanation: 'Final check of key concepts from Unit 48.',
    points: 1
  }))
};

export const B2_UNIT_48 = createB2Unit(
  'b2-u48',
  'Innovation in Teaching',
  'Explore the cutting edge of education while mastering a wide range of advanced reporting verbs and patterns.',
  ['Use a variety of reporting verbs correctly with their specific patterns', 'Understand and apply modern educational terms like gamification and flipped classroom', 'Draft engaging professional content for fellow educators'],
  [
    B2_U48_BLOCK1, B2_U48_BLOCK2, B2_U48_BLOCK3, B2_U48_BLOCK4, B2_U48_BLOCK5,
    B2_U48_BLOCK6, B2_U48_BLOCK7, B2_U48_BLOCK8, B2_U48_BLOCK9, B2_U48_BLOCK10
  ]
);
