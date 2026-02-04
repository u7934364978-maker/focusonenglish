import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 14;

// ============================================
// BLOCK 1: GRAMMAR - GERUNDS AND INFINITIVES (BASIC)
// ============================================
export const B2_U14_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Gerunds and Infinitives: Fundamentals',
  grammarPoint: 'Gerunds and Infinitives',
  explanation: 'Choose between the -ing form (gerund) and the to-infinitive based on the preceding verb or expression.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'I enjoy ___ (work) in a team.',
      'He decided ___ (apply) for the senior position.',
      'She finished ___ (write) the report at 5 PM.',
      'I hope ___ (get) a promotion next year.',
      'They suggested ___ (wait) until the results arrive.',
      'We agreed ___ (meet) at the lobby.',
      'I can\'t afford ___ (buy) a new car yet.',
      'He admitted ___ (make) a mistake in the calculations.',
      'She promised ___ (help) me with the presentation.',
      'Avoid ___ (interrupt) people during the meeting.'
    ][i],
    options: [
      ['working', 'to work', 'work'],
      ['to apply', 'applying', 'apply'],
      ['writing', 'to write', 'write'],
      ['to get', 'getting', 'get'],
      ['waiting', 'to wait', 'wait'],
      ['to meet', 'meeting', 'meet'],
      ['to buy', 'buying', 'buy'],
      ['making', 'to make', 'make'],
      ['to help', 'helping', 'help'],
      ['interrupting', 'to interrupt', 'interrupt']
    ][i],
    correctAnswer: [
      'working',
      'to apply',
      'writing',
      'to get',
      'waiting',
      'to meet',
      'to buy',
      'making',
      'to help',
      'interrupting'
    ][i],
    explanation: 'Basic patterns of verb + gerund or infinitive.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - VERBS WITH CHANGE IN MEANING
// ============================================
export const B2_U14_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Verbs with Change in Meaning',
  grammarPoint: 'Gerunds and Infinitives',
  explanation: 'Some verbs (remember, forget, stop, try, regret) change their meaning when followed by a gerund or an infinitive.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'I remember ___ (lock) the door, I\'m sure of it.',
      'Remember ___ (lock) the door before you leave.',
      'He stopped ___ (smoke) last year for health reasons.',
      'He stopped ___ (smoke) a cigarette during the break.',
      'I tried ___ (open) the window, but it was stuck.',
      'Try ___ (restart) your computer; that might fix it.',
      'I regret ___ (say) that I cannot come to the party.',
      'I regret ___ (tell) him the secret; now everyone knows.',
      'I forgot ___ (buy) milk, so I had to go back to the shop.',
      'I\'ll never forget ___ (meet) the president.'
    ][i],
    correctAnswer: [
      'locking',
      'to lock',
      'smoking',
      'to smoke',
      'to open',
      'restarting',
      'to say',
      'telling',
      'to buy',
      'meeting'
    ][i],
    explanation: 'Differentiating meanings: action in progress vs. intent or memory.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CAREER PATHS
// ============================================
export const B2_U14_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Career Paths',
  explanation: 'Terms for job progression and professional growth.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'He climbed the corporate ___ (ladder) very quickly.',
      'She is pursuing a ___ (career) in medicine.',
      'I need to improve my soft ___ (skills) like communication.',
      'He decided to change his ___ (vocation) in his thirties.',
      'Networking is essential for ___ (professional) growth.',
      'She works in the public ___ (sector).',
      'He took a ___ (sabbatical) to travel around the world.',
      'I am looking for a job with good ___ (prospects).',
      'She is a highly ___ (motivated) individual.',
      'He has a very impressive ___ (resume).'
    ][i],
    correctAnswer: [
      'ladder',
      'career',
      'skills',
      'vocation',
      'professional',
      'sector',
      'sabbatical',
      'prospects',
      'motivated',
      'resume'
    ][i],
    explanation: 'Vocabulary for career planning and development.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - HARD AND SOFT SKILLS
// ============================================
export const B2_U14_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Hard and Soft Skills',
  explanation: 'Distinguishing between technical and interpersonal abilities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Empathy is a crucial ___ (soft) skill for managers.',
      'Coding is a ___ (hard) skill that is in high demand.',
      'He has excellent time ___ (management) skills.',
      'Critical ___ (thinking) is vital for problem-solving.',
      'She is very ___ (proficient) in Excel.',
      'Teamwork requires good ___ (interpersonal) skills.',
      'Adaptability is the ability to ___ (adjust) to change.',
      'Leadership involves ___ (inspiring) others.',
      'Attention to ___ (detail) is important in accounting.',
      'Strong ___ (negotiation) skills can help in sales.'
    ][i],
    options: [
      ['soft', 'hard', 'basic'],
      ['hard', 'soft', 'manual'],
      ['management', 'control', 'timing'],
      ['thinking', 'thought', 'mind'],
      ['proficient', 'good', 'fast'],
      ['interpersonal', 'personal', 'internal'],
      ['adjust', 'move', 'fix'],
      ['inspiring', 'making', 'telling'],
      ['detail', 'small', 'info'],
      ['negotiation', 'talking', 'selling']
    ][i],
    correctAnswer: [
      'soft',
      'hard',
      'management',
      'thinking',
      'proficient',
      'interpersonal',
      'adjust',
      'inspiring',
      'detail',
      'negotiation'
    ][i],
    explanation: 'Key terms for skills listed on a CV.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (SKILLS)
// ============================================
export const B2_U14_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Professionalism',
  explanation: 'Form words related to skills and careers.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'He is a very ___ (PROFESSION) worker.',
      'The ___ (EFFECTIVE) of the team was high.',
      'Her ___ (LEAD) skills are exceptional.',
      'We need to increase ___ (PRODUCT) in the office.',
      'The ___ (CREATE) of the campaign was brilliant.',
      'He has a ___ (FLEXIBLE) schedule.',
      'The ___ (ORGANIZE) of the event was perfect.',
      'She is known for her ___ (RELIABLE).',
      'The job requires great ___ (STRENGHT).',
      'His ___ (ENTHUSIASTIC) for the project was contagious.'
    ][i],
    correctAnswer: [
      'professional',
      'effectiveness',
      'leadership',
      'productivity',
      'creativity',
      'flexible',
      'organization',
      'reliability',
      'strength',
      'enthusiasm'
    ][i],
    explanation: 'Forming nouns and adjectives from base verbs/nouns.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - LIFELONG LEARNING
// ============================================
export const B2_U14_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Importance of Lifelong Learning',
  explanation: 'Read the article about continuous education and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What does lifelong learning mean?' : 'Why is it important in the modern world?',
    options: [['Learning throughout life', 'Going to school forever', 'Reading books', 'Taking tests'], ['Skills become obsolete fast', 'It is fun', 'It is free', 'Jobs are easy']][i % 2],
    correctAnswer: i < 5 ? 'Learning throughout life' : 'Skills become obsolete fast',
    explanation: 'Understanding the concept of professional adaptability.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - CAREER ADVICE PODCAST
// ============================================
export const B2_U14_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: How to Ace Your Career',
  explanation: 'Listen to the expert and identify the best strategies.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the first step recommended by the expert?`,
    options: ['Self-assessment', 'Updating CV', 'Applying to jobs', 'Calling friends'],
    correctAnswer: 'Self-assessment',
    explanation: 'Listening for sequence and main advice.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - COVER LETTERS
// ============================================
export const B2_U14_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Effective Cover Letters',
  explanation: 'Choose the best phrase for a cover letter.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To express interest in the role:',
      'To highlight your experience:',
      'To mention your skills:',
      'To explain why you are a good fit:',
      'To refer to the company:',
      'To mention an attachment:',
      'To request an interview:',
      'To mention availability:',
      'To close professionally:',
      'To state your current role:'
    ][i],
    options: [
      ['I am writing to express my interest in...', 'I want the job.', 'Hello!'],
      ['I have over five years of experience in...', 'I did this before.', 'Work history:'],
      ['I possess strong skills in...', 'I am good at...', 'My skills:'],
      ['My background makes me an ideal candidate.', 'I am the best.', 'Fit:'],
      ['I have long admired your company\'s...', 'I like your company.', 'Company info:'],
      ['As you will see from my enclosed CV...', 'Here is my CV.', 'Attached:'],
      ['I would welcome the opportunity to discuss...', 'Let\'s talk.', 'Interview?'],
      ['I am available for an interview at...', 'Call me anytime.', 'Free time:'],
      ['Thank you for your time and consideration.', 'Thanks.', 'Bye.'],
      ['Currently, I am working as a...', 'Now I am a...', 'My job:']
    ][i],
    correctAnswer: [
      'I am writing to express my interest in...',
      'I have over five years of experience in...',
      'I possess strong skills in...',
      'My background makes me an ideal candidate.',
      'I have long admired your company\'s...',
      'As you will see from my enclosed CV...',
      'I would welcome the opportunity to discuss...',
      'I am available for an interview at...',
      'Thank you for your time and consideration.',
      'Currently, I am working as a...'
    ][i],
    explanation: 'Using professional and persuasive language in recruitment documents.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING CAREER GOALS
// ============================================
export const B2_U14_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Talking about Ambition',
  explanation: 'Identify natural ways to talk about your professional future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally say you want to improve?`,
    options: ['I am keen to expand my skill set.', 'I want to learn more.', 'I need better skills.', 'I will improve.'],
    correctAnswer: 'I am keen to expand my skill set.',
    explanation: 'Using sophisticated vocabulary to discuss goals.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U14_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 14',
  explanation: 'Consolidation of Gerunds and Infinitives.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'I remember ___ (talk) to him about this.' : 'He stopped ___ (buy) expensive coffee.',
    options: i < 5 ? ['talking', 'to talk', 'talk'] : ['buying', 'to buy', 'buy'],
    correctAnswer: i < 5 ? 'talking' : 'buying',
    explanation: 'Review of advanced verb patterns.',
    points: 1
  }))
};

export const B2_UNIT_14 = createB2Unit(
  'b2-u14',
  'Career Paths & Skills',
  'Master advanced gerund and infinitive patterns while planning your professional future.',
  ['Use gerunds and infinitives correctly, including verbs with meaning changes', 'Identify and use vocabulary for career paths and professional skills', 'Write effective cover letters and discuss career goals'],
  [
    B2_U14_BLOCK1, B2_U14_BLOCK2, B2_U14_BLOCK3, B2_U14_BLOCK4, B2_U14_BLOCK5,
    B2_U14_BLOCK6, B2_U14_BLOCK7, B2_U14_BLOCK8, B2_U14_BLOCK9, B2_U14_BLOCK10
  ]
);
