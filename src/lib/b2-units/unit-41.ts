import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 41;

// ============================================
// BLOCK 1: GRAMMAR - GERUNDS & INFINITIVES (I)
// ============================================
export const B2_U41_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Gerunds vs Infinitives: Academic Life',
  grammarPoint: 'Gerunds & Infinitives',
  explanation: 'Choosing between the -ing form and the to-infinitive after specific verbs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'He suggested ___ (study) in the library.',
      'We decided ___ (apply) for the scholarship.',
      'I avoid ___ (do) my homework at the last minute.',
      'They managed ___ (finish) the project on time.',
      'She enjoys ___ (learn) about new cultures.',
      'We hope ___ (graduate) next year.',
      'You should keep ___ (practice) your English.',
      'He promised ___ (help) me with the essay.',
      'I can\'t help ___ (think) about the exam.',
      'We plan ___ (visit) the campus tomorrow.'
    ][i],
    options: [
      ['studying', 'to study', 'study'],
      ['to apply', 'applying', 'apply'],
      ['doing', 'to do', 'do'],
      ['to finish', 'finishing', 'finish'],
      ['learning', 'to learn', 'learn'],
      ['to graduate', 'graduating', 'graduate'],
      ['practicing', 'to practice', 'practice'],
      ['to help', 'helping', 'help'],
      ['thinking', 'to think', 'think'],
      ['to visit', 'visiting', 'visit']
    ][i],
    correctAnswer: [
      'studying',
      'to apply',
      'doing',
      'to finish',
      'learning',
      'to graduate',
      'practicing',
      'to help',
      'thinking',
      'to visit'
    ][i],
    explanation: 'Verifying the correct verb pattern (gerund or infinitive).',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - GERUNDS & INFINITIVES (II)
// ============================================
export const B2_U41_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Verbs with a Change in Meaning',
  grammarPoint: 'Gerunds & Infinitives',
  explanation: 'Some verbs change meaning depending on whether they are followed by a gerund or an infinitive (stop, remember, forget, try).',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I remember ___ (locking) the classroom door.',
      'Remember ___ (to bring) your ID card.',
      'He stopped ___ (to smoke) because he was out of breath.',
      'She stopped ___ (eating) meat five years ago.',
      'I tried ___ (to open) the window, but it was stuck.',
      'Try ___ (adding) some salt to the soup.',
      'I forgot ___ (to send) the email.',
      'I\'ll never forget ___ (visiting) Paris for the first time.',
      'We regret ___ (to inform) you that the class is cancelled.',
      'I regret ___ (saying) that to her.'
    ][i],
    correctAnswer: [
      'locking',
      'to bring',
      'to smoke',
      'eating',
      'to open',
      'adding',
      'to send',
      'visiting',
      'to inform',
      'saying'
    ][i],
    explanation: 'Distinguishing the change in meaning between gerund and infinitive usage.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - EDUCATION SYSTEMS
// ============================================
export const B2_U41_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Educational Landscapes',
  explanation: 'Vocabulary related to schools, teaching methods, and academic structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He attend a ___ (vocational) school to learn mechanics.',
      '___ (Homeschooling) is becoming more popular in some countries.',
      'The school ___ (curriculum) includes music and drama.',
      'Teachers use different ___ (pedagogical) methods.',
      'A ___ (scholarship) covers the tuition fees.',
      'She is a ___ (postgraduate) student at Oxford.',
      'We need to improve our ___ (literacy) rates.',
      'Continuous ___ (assessment) is better than one final exam.',
      'The school has excellent ___ (facilities).',
      'He is a very ___ (disciplined) student.'
    ][i],
    correctAnswer: [
      'vocational',
      'Homeschooling',
      'curriculum',
      'pedagogical',
      'scholarship',
      'postgraduate',
      'literacy',
      'assessment',
      'facilities',
      'disciplined'
    ][i],
    explanation: 'Core vocabulary for education and academic systems.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - LEARNING & STUDYING
// ============================================
export const B2_U41_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Mastering the Mind',
  explanation: 'Terms for study habits, memory techniques, and lifelong learning.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'I use ___ (mnemonics) to remember the list.',
      'He is a ___ (lifelong) learner.',
      'We need to ___ (revise) for the upcoming test.',
      'She has a very ___ (inquisitive) mind.',
      'I find it hard to ___ (concentrate) in a noisy room.',
      'This course will help you ___ (acquire) new skills.',
      'The teacher gave us useful ___ (feedback).',
      'He is a ___ (gifted) mathematician.',
      'We used a ___ (mind-map) to organize our ideas.',
      'I need to ___ (brush up) on my French.'
    ][i],
    options: [
      ['mnemonics', 'notes', 'tricks'],
      ['lifelong', 'longlife', 'forever'],
      ['revise', 'review', 'look'],
      ['inquisitive', 'asking', 'curious'],
      ['concentrate', 'focus', 'think'],
      ['acquire', 'get', 'take'],
      ['feedback', 'news', 'talk'],
      ['gifted', 'talented', 'smart'],
      ['mind-map', 'brain-chart', 'idea-list'],
      ['brush up', 'clean', 'fix']
    ][i],
    correctAnswer: [
      'mnemonics',
      'lifelong',
      'revise',
      'inquisitive',
      'concentrate',
      'acquire',
      'feedback',
      'gifted',
      'mind-map',
      'brush up'
    ][i],
    explanation: 'Vocabulary for study techniques and cognitive skills.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U41_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Academic Excellence',
  explanation: 'Form nouns, adjectives, and verbs related to learning and education.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Education is the key to ___ (PROSPER).',
      'She showed great ___ (INTELLIGENT) at a young age.',
      'The ___ (GRADUATE) ceremony was very emotional.',
      'He has a ___ (PASSION) interest in science.',
      'We need to ___ (MODERN) our teaching methods.',
      'The ___ (KNOW) we gain is invaluable.',
      'She is a very ___ (CREATE) writer.',
      'The course provides ___ (PRACTICE) experience.',
      'His ___ (ACHIEVE) are quite impressive.',
      'Education should be ___ (ACCESS) to everyone.'
    ][i],
    correctAnswer: [
      'prosperity',
      'intelligence',
      'graduation',
      'passionate',
      'modernize',
      'knowledge',
      'creative',
      'practical',
      'achievements',
      'accessible'
    ][i],
    explanation: 'Transforming root words into appropriate academic terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - ALTERNATIVE EDUCATION
// ============================================
export const B2_U41_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Beyond the Classroom',
  explanation: 'Read a short article about Montessori and Waldorf schools.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is a key feature of Montessori education?' : 'How do Waldorf schools differ from traditional schools?',
    options: [['Student-led learning and self-correction', 'Heavy focus on exams', 'Strict seating plans'], ['Focus on creativity and artistic expression', 'More homework', 'Uniforms are mandatory']][i % 2],
    correctAnswer: i < 5 ? 'Student-led learning and self-correction' : 'Focus on creativity and artistic expression',
    explanation: 'Extracting key differences between educational philosophies.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN ONLINE COURSE
// ============================================
export const B2_U41_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Rise of MOOCs',
  explanation: 'Listen to a podcast about Massive Open Online Courses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is one of the main advantages of MOOCs mentioned?`,
    options: ['Accessibility and flexible schedules', 'Lower quality of teaching', 'Harder to fail', 'No interaction'],
    correctAnswer: 'Accessibility and flexible schedules',
    explanation: 'Identifying benefits of digital learning platforms.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ACADEMIC STYLE
// ============================================
export const B2_U41_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Academic Integrity',
  explanation: 'Identify the best way to structure academic arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a supporting point:',
      'To provide a counter-argument:',
      'To state an objective fact:',
      'To refer to a source:',
      'To conclude a paragraph:',
      'To avoid personal pronouns (formal style):',
      'To emphasize a point:',
      'To express a tentative result:',
      'To list several points:',
      'To summarize the overall findings:'
    ][i],
    options: [
      ['Furthermore, studies have shown...', 'Also, I think...', 'Another thing:'],
      ['On the contrary, some experts argue...', 'But some people say...', 'The other side is:'],
      ['Research indicates that...', 'I know for a fact that...', 'It\'s true that:'],
      ['According to Smith (2020),', 'Smith said that...', 'Look at Smith\'s book:'],
      ['Consequently, the results were...', 'So that\'s why...', 'Last thing:'],
      ['It is generally agreed that...', 'I agree that...', 'Everyone thinks:'],
      ['It is important to note that...', 'Pay attention to...', 'This is big:'],
      ['The data suggests that...', 'The data definitely shows...', 'The data is:'],
      ['Firstly, secondly, and finally...', 'One, two, and three...', 'Next, next, and last:'],
      ['In summary, the evidence suggests...', 'Basically, we found...', 'To wrap up:']
    ][i],
    correctAnswer: [
      'Furthermore, studies have shown...',
      'On the contrary, some experts argue...',
      'Research indicates that...',
      'According to Smith (2020),',
      'Consequently, the results were...',
      'It is generally agreed that...',
      'It is important to note that...',
      'The data suggests that...',
      'Firstly, secondly, and finally...',
      'In summary, the evidence suggests...'
    ][i],
    explanation: 'Applying academic register and formal linking devices.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING EDUCATION
// ============================================
export const B2_U41_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Educational Values',
  explanation: 'How to discuss the importance of learning naturally.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you formally agree with someone about the value of education?`,
    options: ['I couldn\'t agree more; it\'s essential for personal growth.', 'Yeah, you\'re right.', 'Education is okay.', 'I guess so.'],
    correctAnswer: 'I couldn\'t agree more; it\'s essential for personal growth.',
    explanation: 'Using sophisticated agreement phrases in academic discussions.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U41_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 41',
  explanation: 'Consolidation of Gerunds, Infinitives and Education Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'I avoid ___ (to procrastinate/procrastinating) during the week.' : 'The school ___ (curriculum/facilities) includes a swimming pool.',
    options: i < 5 ? ['to procrastinate', 'procrastinating', 'procrastinate'] : ['curriculum', 'facilities', 'literacy'],
    correctAnswer: i < 5 ? 'procrastinating' : 'facilities',
    explanation: 'Final check of key concepts from Unit 41.',
    points: 1
  }))
};

export const B2_UNIT_41 = createB2Unit(
  'b2-u41',
  'Education Systems & Learning',
  'Explore different educational philosophies and master the use of gerunds and infinitives in an academic context.',
  ['Distinguish between gerunds and infinitives correctly', 'Use verbs that change meaning depending on the form that follows', 'Acquire vocabulary for schools, study techniques, and academic style'],
  [
    B2_U41_BLOCK1, B2_U41_BLOCK2, B2_U41_BLOCK3, B2_U41_BLOCK4, B2_U41_BLOCK5,
    B2_U41_BLOCK6, B2_U41_BLOCK7, B2_U41_BLOCK8, B2_U41_BLOCK9, B2_U41_BLOCK10
  ]
);
