import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 12;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE VOICE (PRESENT & PAST)
// ============================================
export const B2_U12_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Voice: Present and Past',
  grammarPoint: 'Passive Voice',
  explanation: 'Use the passive voice (be + past participle) to focus on the action rather than the person performing it.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The reports ___ (send) every Monday morning.',
      'The company ___ (found) in 1995.',
      'Coffee ___ (serve) in the break room.',
      'The new office ___ (paint) last weekend.',
      'These products ___ (manufacture) in Germany.',
      'The decision ___ (make) by the board yesterday.',
      'Letters ___ (not/deliver) on Sundays.',
      'The mistake ___ (discover) by the intern.',
      'Meetings ___ (hold) in the conference room.',
      'The project ___ (complete) on time.'
    ][i],
    options: [
      ['are sent', 'is sent', 'were sent'],
      ['was founded', 'is founded', 'were founded'],
      ['is served', 'are served', 'was served'],
      ['was painted', 'is painted', 'were painted'],
      ['are manufactured', 'is manufactured', 'was manufactured'],
      ['was made', 'is made', 'were made'],
      ['are not delivered', 'is not delivered', 'were not delivered'],
      ['was discovered', 'is discovered', 'were discovered'],
      ['are held', 'is held', 'was held'],
      ['was completed', 'is completed', 'were completed']
    ][i],
    correctAnswer: [
      'are sent',
      'was founded',
      'is served',
      'was painted',
      'are manufactured',
      'was made',
      'are not delivered',
      'was discovered',
      'are held',
      'was completed'
    ][i],
    explanation: 'Basic passive forms in present simple and past simple.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE VOICE (CONTINUOUS & PERFECT)
// ============================================
export const B2_U12_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Passive Voice: Continuous and Perfect',
  grammarPoint: 'Passive Voice',
  explanation: 'Advanced passive structures for ongoing or completed actions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The office ___ (clean) at the moment.',
      'The website ___ (update) recently.',
      'The new software ___ (test) all morning.',
      'The employees ___ (inform) about the changes.',
      'The package ___ (already/send).',
      'The room ___ (decorate) for the party right now.',
      'The results ___ (not/publish) yet.',
      'The building ___ (renovate) when the fire started.',
      'The car ___ (repair) by the mechanic.',
      'How many people ___ (invite) to the workshop?'
    ][i],
    correctAnswer: [
      'is being cleaned',
      'has been updated',
      'is being tested',
      'have been informed',
      'has already been sent',
      'is being decorated',
      'have not been published',
      'was being renovated',
      'is being repaired',
      'have been invited'
    ][i],
    explanation: 'Passive forms in present/past continuous and present perfect.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - WORKPLACE ROLES & RESPONSIBILITIES
// ============================================
export const B2_U12_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Workplace Roles',
  explanation: 'Common job titles and descriptions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'She is in charge of the ___ (human) resources department.',
      'The ___ (manager) is responsible for the team\'s performance.',
      'I am an ___ (intern) learning the ropes.',
      'He works as a ___ (consultant) for several firms.',
      'The ___ (executive) made a bold move.',
      'She is a highly skilled ___ (developer).',
      'The ___ (accountant) handles the taxes.',
      'We have a dedicated ___ (support) team.',
      'He is the ___ (founder) of the startup.',
      'She works as a ___ (freelancer) from home.'
    ][i],
    correctAnswer: [
      'human',
      'manager',
      'intern',
      'consultant',
      'executive',
      'developer',
      'accountant',
      'support',
      'founder',
      'freelancer'
    ][i],
    explanation: 'Vocabulary for different roles within a company.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - OFFICE ENVIRONMENT & TOOLS
// ============================================
export const B2_U12_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Office Life',
  explanation: 'Terms for the physical and digital office.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We work in an ___ (open)-plan office.',
      'I need to ___ (book) a meeting room.',
      'The ___ (deadline) for the project is Friday.',
      'Please ___ (attach) the file to the email.',
      'We have a weekly ___ (briefing) on Mondays.',
      'The office has a very relaxed ___ (atmosphere).',
      'I need a new ___ (keyboard) for my computer.',
      'The company offers great ___ (benefits).',
      'He decided to ___ (resign) from his position.',
      'She was ___ (promoted) to senior manager.'
    ][i],
    options: [
      ['open', 'free', 'wide'],
      ['book', 'take', 'make'],
      ['deadline', 'limit', 'end'],
      ['attach', 'join', 'add'],
      ['briefing', 'talk', 'chat'],
      ['atmosphere', 'air', 'mood'],
      ['keyboard', 'board', 'key'],
      ['benefits', 'gifts', 'prizes'],
      ['resign', 'leave', 'stop'],
      ['promoted', 'moved', 'raised']
    ][i],
    correctAnswer: [
      'open',
      'book',
      'deadline',
      'attach',
      'briefing',
      'atmosphere',
      'keyboard',
      'benefits',
      'resign',
      'promoted'
    ][i],
    explanation: 'General workplace vocabulary and collocations.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (WORK)
// ============================================
export const B2_U12_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Career Development',
  explanation: 'Form words related to work and careers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (EMPLOY) rates are high this year.',
      'She is a very ___ (AMBIT) young woman.',
      'His ___ (QUALIFY) are perfect for the job.',
      'The company provides excellent ___ (TRAIN).',
      'We are looking for a ___ (RELY) assistant.',
      'The ___ (PROMPT) response was appreciated.',
      'He has a lot of ___ (EXPERIENCE) in marketing.',
      'The ___ (INTERVIEW) was very impressed.',
      'She received a letter of ___ (RECOMMEND).',
      'The ___ (ASSIGN) was completed ahead of schedule.'
    ][i],
    correctAnswer: [
      'employment',
      'ambitious',
      'qualifications',
      'training',
      'reliable',
      'prompt',
      'experience',
      'interviewer',
      'recommendation',
      'assignment'
    ][i],
    explanation: 'Suffixes and prefixes for job-related words.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - REMOTE WORK REVOLUTION
// ============================================
export const B2_U12_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The End of the 9-to-5?',
  explanation: 'Read about the shift to remote work and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is one benefit of remote work?' : 'What is a common challenge mentioned?',
    options: [['Flexibility', 'More meetings', 'Less pay', 'Longer commute'], ['Isolation', 'Too much free time', 'Better focus', 'Faster internet']][i % 2],
    correctAnswer: i < 5 ? 'Flexibility' : 'Isolation',
    explanation: 'Understanding advantages and disadvantages in a professional text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - JOB INTERVIEW
// ============================================
export const B2_U12_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Successful Interview',
  explanation: 'Listen to the interview and answer the questions about the candidate.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the candidate's greatest strength?`,
    options: ['Communication', 'Coding', 'Punctuality', 'Design'],
    correctAnswer: 'Communication',
    explanation: 'Listening for specific information in a formal context.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FORMAL EMAILS
// ============================================
export const B2_U12_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Formal Workplace Emails',
  explanation: 'Choose the best formal phrase for each situation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To open a formal email to someone you don\'t know:',
      'To state the purpose of the email:',
      'To request information:',
      'To attach a document:',
      'To apologize for a delay:',
      'To schedule a meeting:',
      'To confirm an appointment:',
      'To offer help:',
      'To close a formal email:',
      'To sign off when you know the name:'
    ][i],
    options: [
      ['Dear Sir/Madam,', 'Hi there,', 'To everyone,'],
      ['I am writing to inform you...', 'Just wanted to say...', 'Listen up:'],
      ['I would be grateful if you could...', 'Can you tell me...', 'Need info:'],
      ['Please find attached the...', 'Here is the...', 'Look at this:'],
      ['I apologize for any inconvenience caused.', 'Sorry I\'m late.', 'Late email:'],
      ['I was wondering if we could meet...', 'Let\'s meet.', 'Meeting time?'],
      ['I am writing to confirm our meeting.', 'See you then.', 'Confirmed.'],
      ['Please let me know if I can be of further assistance.', 'Need help?', 'Call me.'],
      ['I look forward to hearing from you.', 'Bye for now.', 'Talk soon.'],
      ['Yours sincerely,', 'Best regards,', 'See ya,']
    ][i],
    correctAnswer: [
      'Dear Sir/Madam,',
      'I am writing to inform you...',
      'I would be grateful if you could...',
      'Please find attached the...',
      'I apologize for any inconvenience caused.',
      'I was wondering if we could meet...',
      'I am writing to confirm our meeting.',
      'Please let me know if I can be of further assistance.',
      'I look forward to hearing from you.',
      'Yours sincerely,'
    ][i],
    explanation: 'Mastering formal business correspondence conventions.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - GIVING A PRESENTATION
// ============================================
export const B2_U12_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Presentation Phrases',
  explanation: 'Identify effective ways to structure a presentation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally transition to a new point?`,
    options: ['Moving on to my next point...', 'Next.', 'Change topic.', 'I have more.'],
    correctAnswer: 'Moving on to my next point...',
    explanation: 'Using signposting phrases in professional speaking.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U12_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 12',
  explanation: 'Consolidation of Passive Voice and Work Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The project ___ (finish) by next week.' : 'She was ___ (hire) as a consultant.',
    options: i < 5 ? ['will be finished', 'is finished', 'was finished'] : ['hired', 'hire', 'hiring'],
    correctAnswer: i < 5 ? 'will be finished' : 'hired',
    explanation: 'Review of passive forms and workplace terminology.',
    points: 1
  }))
};

export const B2_UNIT_12 = createB2Unit(
  'b2-u12',
  'The Modern Workplace',
  'Master the passive voice while navigating the complexities of the modern professional world.',
  ['Use the passive voice in various tenses correctly', 'Understand workplace roles and office vocabulary', 'Communicate effectively in formal business contexts'],
  [
    B2_U12_BLOCK1, B2_U12_BLOCK2, B2_U12_BLOCK3, B2_U12_BLOCK4, B2_U12_BLOCK5,
    B2_U12_BLOCK6, B2_U12_BLOCK7, B2_U12_BLOCK8, B2_U12_BLOCK9, B2_U12_BLOCK10
  ]
);
