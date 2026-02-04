import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 50;

// ============================================
// BLOCK 1: GRAMMAR REVIEW - GERUNDS, INFINITIVES & REPORTING
// ============================================
export const B2_U50_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Grammar Review: Verb Patterns',
  grammarPoint: 'Gerunds & Infinitives',
  explanation: 'Consolidating gerunds, infinitives, and reporting verb patterns.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'I suggested ___ (study) together for the exam.',
      'He denied ___ (cheat) on the research paper.',
      'We managed ___ (finish) the experiment on time.',
      'She recommended ___ (that) we use a different methodology.',
      'They admitted ___ (be) unprepared for the results.',
      'Remember ___ (to bring) your ID to the lab.',
      'I\'ll never forget ___ (see) the rocket launch.',
      'The teacher urged us ___ (to read) the textbook.',
      'They warned her ___ (not / to touch) the equipment.',
      'I tried ___ (to open) the file, but it was corrupted.'
    ][i],
    correctAnswer: [
      'studying',
      'cheating',
      'to finish',
      'that',
      'being',
      'to bring',
      'seeing',
      'to read',
      'not to touch',
      'to open'
    ][i],
    explanation: 'Testing the correct verb patterns from Units 41 and 48.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR REVIEW - PASSIVES & CONDITIONALS
// ============================================
export const B2_U50_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Grammar Review: Advanced Structures',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'Reviewing Passive Reporting and Mixed Conditionals.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'It is ___ that the universe is 13.8 billion years old.',
      'If I had studied harder, I ___ a doctor now.',
      'The vaccine is considered ___ safe for all ages.',
      'If she spoke better English, she ___ that job last year.',
      'It is ___ that the project will be finished by June.',
      'If they hadn\'t missed the flight, they ___ here by now.',
      'The experiment is said ___ a huge success.',
      'If he were taller, he ___ for the team last season.',
      'It is widely ___ that climate change is real.',
      'If you had saved more money, you ___ that laptop now.'
    ][i],
    options: [
      ['estimated', 'estimate', 'estimating'],
      ['would be', 'would have been', 'am'],
      ['to be', 'being', 'be'],
      ['would have got', 'would get', 'got'],
      ['thought', 'think', 'thinking'],
      ['would be', 'would have been', 'are'],
      ['to have been', 'being', 'been'],
      ['would have played', 'would play', 'played'],
      ['believed', 'believe', 'believing'],
      ['would be able to afford', 'would have afforded', 'can afford']
    ][i],
    correctAnswer: [
      'estimated',
      'would be',
      'to be',
      'would have got',
      'thought',
      'would be',
      'to have been',
      'would have played',
      'believed',
      'would be able to afford'
    ][i],
    explanation: 'Differentiating between reporting passives and mixed conditional types.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: GRAMMAR REVIEW - CLEFTS & RELATIVE CLAUSES
// ============================================
export const B2_U50_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'grammar',
  title: 'Grammar Review: Emphasis & Clauses',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Reviewing Cleft Sentences and advanced Relative Clauses.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'It was the methodology ___ (that) caused the error.',
      'What we need ___ (is) more investment in research.',
      'The person to ___ (whom) you spoke is the dean.',
      '___ (Whatever) happens, the project must continue.',
      'It is her dedication ___ (that) impressed us.',
      'What she wants ___ (is) to study abroad.',
      'The era in ___ (which) they lived was revolutionary.',
      '___ (Whoever) found the solution is a genius.',
      'It was in 2021 ___ (that) the discovery was made.',
      'Choose ___ (whichever) option is best for you.'
    ][i],
    correctAnswer: [
      'that',
      'is',
      'whom',
      'Whatever',
      'that',
      'is',
      'which',
      'Whoever',
      'that',
      'whichever'
    ][i],
    explanation: 'Testing emphasis structures and formal relative clauses.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY REVIEW - EDUCATION & ACADEMIA
// ============================================
export const B2_U50_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Vocabulary: Learning & Teaching',
  explanation: 'Reviewing terms for education systems, university life, and EdTech.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'fill-blank',
    question: [
      'The school ___ (curriculum) is very demanding.',
      'He received a ___ (scholarship) to study in London.',
      'We submitted our ___ (dissertation) last week.',
      '___ (Gamification) is used to engage students.',
      'The ___ (halls) of residence are near the campus.',
      'She is a ___ (postgraduate) student in psychology.',
      'We use a ___ (Virtual) Learning Environment.',
      'The ___ (deadline) for the assignment is tomorrow.',
      'He is a very ___ (disciplined) student.',
      'The lecture ___ (theatre) was packed.'
    ][i],
    correctAnswer: [
      'curriculum',
      'scholarship',
      'dissertation',
      'Gamification',
      'halls',
      'postgraduate',
      'Virtual',
      'deadline',
      'disciplined',
      'theatre'
    ][i],
    explanation: 'Recalling key educational vocabulary from Module 5.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: VOCABULARY REVIEW - SCIENCE & TECHNOLOGY
// ============================================
export const B2_U50_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'vocabulary',
  title: 'Vocabulary: Science & Progress',
  explanation: 'Reviewing terms for research, health, space, and the digital divide.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'multiple-choice',
    question: [
      'The discovery was a major ___ (breakthrough).',
      'The disease is highly ___ (contagious).',
      'The ___ (digital) divide is a global issue.',
      'The rocket will ___ (launch) tonight.',
      'They are conducting clinical ___ (trials).',
      'He suffers from ___ (cognitive) bias.',
      'The ___ (broadband) speed is very slow.',
      'She has a very ___ (retentive) memory.',
      'The vaccine requires two ___ (doses).',
      'The ___ (universe) is constantly expanding.'
    ][i],
    options: [
      ['breakthrough', 'failure', 'start'],
      ['contagious', 'chronic', 'safe'],
      ['digital', 'tech', 'online'],
      ['launch', 'land', 'fly'],
      ['trials', 'tests', 'games'],
      ['cognitive', 'thinking', 'brain'],
      ['broadband', 'internet', 'wire'],
      ['retentive', 'long', 'good'],
      ['doses', 'parts', 'rounds'],
      ['universe', 'galaxy', 'planet']
    ][i],
    correctAnswer: [
      'breakthrough',
      'contagious',
      'digital',
      'launch',
      'trials',
      'cognitive',
      'broadband',
      'retentive',
      'doses',
      'universe'
    ][i],
    explanation: 'Testing core scientific and technological terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE IMPACT OF SCIENCE
// ============================================
export const B2_U50_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Science for Humanity',
  explanation: 'Read a concluding text about the balance between innovation and ethics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main challenge for future scientists?' : 'What role should ethics play in research?',
    options: [['Balancing progress with moral responsibility', 'Making more money', 'Traveling faster'], ['It should be at the core of every study', 'It is not important', 'It is only for philosophers']][i % 2],
    correctAnswer: i < 5 ? 'Balancing progress with moral responsibility' : 'It should be at the core of every study',
    explanation: 'Synthesizing the module\'s themes of science and ethics.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - A GRADUATION SPEECH
// ============================================
export const B2_U50_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Looking Forward',
  explanation: 'Listen to a graduation speech about lifelong learning and future challenges.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the speaker's advice to the new graduates?`,
    options: ['Never stop being curious and keep learning', 'Find a high-paying job immediately', 'Take a long holiday', 'Forget everything they learned'],
    correctAnswer: 'Never stop being curious and keep learning',
    explanation: 'Listening for main messages and inspirational advice.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ACADEMIC REGISTER
// ============================================
export const B2_U50_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Formal Academic Style',
  explanation: 'Identify the most polished and formal way to present arguments.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a complex issue:',
      'To provide a formal citation:',
      'To express a cautious conclusion:',
      'To use a cleft sentence for emphasis:',
      'To report a general belief:',
      'To link ideas formally:',
      'To describe a scientific breakthrough:',
      'To acknowledge a limitation:',
      'To address a counter-argument:',
      'Formal verb for "look into":'
    ][i],
    options: [
      ['This phenomenon raises a myriad of questions...', 'This is a hard thing.', 'Many people ask:'],
      ['(Johnson & Lee, 2022)', 'Johnson and Lee said...', 'Look at this book:'],
      ['The evidence would appear to suggest that...', 'The data shows...', 'It is true.'],
      ['What the data indicates is a significant shift.', 'The data shows a shift.', 'There is a shift.'],
      ['It is widely hypothesized that...', 'People think...', 'It is said:'],
      ['Furthermore, it must be considered that...', 'And also...', 'Another thing:'],
      ['A significant milestone in medical research was reached.', 'We did a good thing.', 'A big discovery.'],
      ['One constraint of the current study is...', 'The bad part was...', 'We couldn\'t do:'],
      ['Despite these claims, other experts argue...', 'But some say...', 'The other side is:'],
      ['Investigate', 'Check', 'Look']
    ][i],
    correctAnswer: [
      'This phenomenon raises a myriad of questions...',
      '(Johnson & Lee, 2022)',
      'The evidence would appear to suggest that...',
      'What the data indicates is a significant shift.',
      'It is widely hypothesized that...',
      'Furthermore, it must be considered that...',
      'A significant milestone in medical research was reached.',
      'One constraint of the current study is...',
      'Despite these claims, other experts argue...',
      'Investigate'
    ][i],
    explanation: 'Consolidating formal writing skills from the module.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SUMMARIZING PROGRESS
// ============================================
export const B2_U50_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Reflecting on Learning',
  explanation: 'Using advanced structures to discuss your educational journey.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you formally summarize your progress in this module?`,
    options: ['What I have gained is a much deeper understanding of formal structures.', 'I learned a lot.', 'I am good now.', 'The module was interesting.'],
    correctAnswer: 'What I have gained is a much deeper understanding of formal structures.',
    explanation: 'Using Wh-clefts to reflect and emphasize personal achievements.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MODULE 5 GRAND FINAL
// ============================================
export const B2_U50_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Module 5 Grand Review',
  explanation: 'Final check of all major structures from Module 5.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'If I ___ (had known/knew) about the course, I would have applied.' : 'It is ___ (believed/believing) that AI will transform education.',
    options: i < 5 ? ['had known', 'knew', 'know'] : ['believed', 'believing', 'believe'],
    correctAnswer: i < 5 ? 'had known' : 'believed',
    explanation: 'Final verification of reporting and conditional structures.',
    points: 1
  }))
};

export const B2_UNIT_50 = createB2Unit(
  'b2-u50',
  'Module 5 Review & Assessment',
  'A comprehensive review of the grammar and vocabulary covered in units 41 to 49, focusing on education, science, and academic excellence.',
  ['Consolidate mixed conditionals and passive reporting', 'Master cleft sentences and advanced relative clauses', 'Review vocabulary for science, education, and digital society'],
  [
    B2_U50_BLOCK1, B2_U50_BLOCK2, B2_U50_BLOCK3, B2_U50_BLOCK4, B2_U50_BLOCK5,
    B2_U50_BLOCK6, B2_U50_BLOCK7, B2_U50_BLOCK8, B2_U50_BLOCK9, B2_U50_BLOCK10
  ]
);
