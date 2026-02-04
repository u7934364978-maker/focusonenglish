import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 53;

// ============================================
// BLOCK 1: GRAMMAR - FUTURE CONTINUOUS
// ============================================
export const B2_U53_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Life in 2040',
  grammarPoint: 'Future Continuous',
  explanation: 'Use the Future Continuous (will be + -ing) for actions in progress at a specific time in the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'This time tomorrow, I ___ (be/work) from home.',
      'By next year, most companies ___ (be/use) AI for hiring.',
      'In ten years, we ___ (be/live) in a more automated world.',
      'Will you ___ (be/attend) the conference next week?',
      'At noon, they ___ (be/have) a meeting about the new project.',
      'We ___ (not / be/work) on Saturdays anymore.',
      'He ___ (be/commute) to London every day by then.',
      'What ___ you ___ (be/doing) this time next year?',
      'She ___ (be/study) for her MBA during the summer.',
      'They ___ (be/compete) in a global market.'
    ][i],
    correctAnswer: [
      'will be working',
      'will be using',
      'will be living',
      'be attending',
      'will be having',
      'won\'t be working',
      'will be commuting',
      'will, be doing',
      'will be studying',
      'will be competing'
    ][i],
    explanation: 'Using the future continuous for future progress.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - FUTURE PERFECT
// ============================================
export const B2_U53_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Career Milestones',
  grammarPoint: 'Future Perfect',
  explanation: 'Use the Future Perfect (will have + past participle) for actions completed before a certain time in the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'By the time I\'m 40, I ___ (will/have/save) enough for retirement.',
      'They ___ (will/have/finish) the project by Friday.',
      'By 2030, many jobs ___ (will/have/disappear) due to automation.',
      'I ___ (will/have/complete) my training by next month.',
      'The company ___ (will/have/expand) to five countries by then.',
      'By next year, we ___ (will/have/implement) the new software.',
      'She ___ (will/have/work) here for twenty years by June.',
      'Will you ___ (have/sent) the report by noon?',
      'He ___ (will/have/retire) by the time the office moves.',
      'By the end of the day, I ___ (will/have/respond) to all the emails.'
    ][i],
    correctAnswer: [
      'will have saved',
      'will have finished',
      'will have disappeared',
      'will have completed',
      'will have expanded',
      'will have implemented',
      'will have worked',
      'have sent',
      'will have retired',
      'will have responded'
    ][i],
    explanation: 'Using the future perfect for future completion.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - THE MODERN WORKPLACE
// ============================================
export const B2_U53_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Evolving Careers',
  explanation: 'Vocabulary for new work models, automation, and professional skills.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (gig) economy offers more flexibility but less security.',
      'Many tasks are being ___ (automated) to save time.',
      'He works as a ___ (freelancer) for several companies.',
      'We need to focus on our ___ (soft) skills, like empathy.',
      'Remote work allows for a better work-life ___ (balance).',
      'She is a ___ (digital) nomad, traveling while she works.',
      'The company is moving to a ___ (hybrid) model.',
      'We need to ___ (upskill) to stay relevant in the market.',
      '___ (Automation) is changing the manufacturing industry.',
      'The ___ (workforce) is becoming more diverse.'
    ][i],
    correctAnswer: [
      'gig',
      'automated',
      'freelancer',
      'soft',
      'balance',
      'digital',
      'hybrid',
      'upskill',
      'Automation',
      'workforce'
    ][i],
    explanation: 'Core terms for modern work trends and professional development.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - EMPLOYMENT & INNOVATION
// ============================================
export const B2_U53_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Innovation and Jobs',
  explanation: 'Terms for recruitment, career paths, and the impact of technology on employment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The company uses AI for ___ (recruitment).',
      'He is looking for a ___ (permanent) position.',
      'The job offers a competitive ___ (salary) and benefits.',
      'We need to foster an ___ (innovative) culture.',
      'She is an ___ (expert) in her field.',
      'The ___ (headhunter) contacted him about a new role.',
      'He decided to take early ___ (retirement).',
      'The company is ___ (outsourcing) its IT services.',
      'We have a very low employee ___ (turnover) rate.',
      'She received a ___ (promotion) last month.'
    ][i],
    options: [
      ['recruitment', 'hiring', 'finding'],
      ['permanent', 'long', 'stable'],
      ['salary', 'money', 'pay'],
      ['innovative', 'new', 'smart'],
      ['expert', 'master', 'know-all'],
      ['headhunter', 'boss', 'owner'],
      ['retirement', 'rest', 'end'],
      ['outsourcing', 'sending', 'giving'],
      ['turnover', 'change', 'move'],
      ['promotion', 'step-up', 'win']
    ][i],
    correctAnswer: [
      'recruitment',
      'permanent',
      'salary',
      'innovative',
      'expert',
      'headhunter',
      'retirement',
      'outsourcing',
      'turnover',
      'promotion'
    ][i],
    explanation: 'Vocabulary for the modern labor market and corporate structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U53_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Work and Success',
  explanation: 'Form nouns, adjectives, and verbs related to careers and professionalism.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      '___ (EMPLOY) is a major social issue.',
      'He is a very ___ (PROFESSION) person.',
      'We need to increase ___ (PRODUCT).',
      'The ___ (QUALIFY) required for the job are high.',
      'She showed great ___ (LEAD) skills.',
      'His ___ (AMBITIOUS) is to become the CEO.',
      'The ___ (DETERMINE) of the team was key.',
      'The results were ___ (FINANCE) rewarding.',
      'We are looking for a ___ (SOLVE) to the problem.',
      'The ___ (PROMPT) of the response was appreciated.'
    ][i],
    correctAnswer: [
      'Employment',
      'professional',
      'productivity',
      'qualifications',
      'leadership',
      'ambition',
      'determination',
      'financially',
      'solution',
      'promptness'
    ][i],
    explanation: 'Transforming root words into professional and career-related terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - AUTOMATION AND THE LABOR MARKET
// ============================================
export const B2_U53_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Will a Robot Take Your Job?',
  explanation: 'Read an article about the impact of AI and automation on different industries.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Which type of jobs are most at risk of being automated?' : 'What is the "human advantage" mentioned in the text?',
    options: [['Repetitive and manual tasks', 'Creative and emotional roles', 'All jobs'], ['Emotional intelligence and creativity', 'Being faster than robots', 'Not needing electricity']][i % 2],
    correctAnswer: i < 5 ? 'Repetitive and manual tasks' : 'Emotional intelligence and creativity',
    explanation: 'Analyzing the challenges and opportunities of the automated workplace.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN INTERVIEW WITH A CAREER COACH
// ============================================
export const B2_U53_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Upskilling for the Future',
  explanation: 'Listen to a career coach giving advice on how to stay relevant in a changing market.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most important piece of advice from the coach?`,
    options: ['Commit to lifelong learning and upskilling', 'Stay in the same job forever', 'Don\'t use computers', 'Only learn one skill'],
    correctAnswer: 'Commit to lifelong learning and upskilling',
    explanation: 'Listening for career development strategies and professional advice.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - RESUMES & COVER LETTERS
// ============================================
export const B2_U53_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Pitching Yourself',
  explanation: 'Identify the most effective and professional way to write about your skills.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe your key achievements:',
      'To mention your soft skills:',
      'To express your enthusiasm for the role:',
      'To use a formal sign-off in a cover letter:',
      'To summarize your career goals:',
      'To highlight your adaptability:',
      'To mention a relevant qualification:',
      'To refer to an attached document:',
      'To invite the reader to contact you:',
      'To use an action verb for "leading":'
    ][i],
    options: [
      ['During my time at [Company], I successfully managed...', 'I did a good job at...', 'My work was okay.'],
      ['I possess strong interpersonal and communication skills.', 'I am good at talking.', 'I like people.'],
      ['I am highly motivated to join your team as a...', 'I really want the job.', 'It looks like fun.'],
      ['Yours sincerely,', 'Best,', 'See ya,'],
      ['My objective is to leverage my skills in...', 'I want a job.', 'Work is good.'],
      ['I am a versatile professional with a proven ability to...', 'I can do many things.', 'I change easily.'],
      ['I hold a Bachelor\'s degree in...', 'I went to school for...', 'I learned:'],
      ['Please find my resume attached for your review.', 'Look at my CV.', 'Here it is:'],
      ['I look forward to discussing my application with you further.', 'Call me.', 'Let\'s talk.'],
      ['I spearheaded a team of ten people.', 'I was the boss.', 'I led others.']
    ][i],
    correctAnswer: [
      'During my time at [Company], I successfully managed...',
      'I possess strong interpersonal and communication skills.',
      'I am highly motivated to join your team as a...',
      'Yours sincerely,',
      'My objective is to leverage my skills in...',
      'I am a versatile professional with a proven ability to...',
      'I hold a Bachelor\'s degree in...',
      'Please find my resume attached for your review.',
      'I look forward to discussing my application with you further.',
      'I spearheaded a team of ten people.'
    ][i],
    explanation: 'Using sophisticated professional language for recruitment purposes.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - PREDICTING YOUR CAREER
// ============================================
export const B2_U53_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: In five years, I will have...',
  explanation: 'How to use future tenses naturally to discuss your career aspirations.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express a future career goal?`,
    options: ['By the time I am 30, I will have reached a senior position.', 'In the future, I have a good job.', 'I am going to work a lot.', 'I will be rich.'],
    correctAnswer: 'By the time I am 30, I will have reached a senior position.',
    explanation: 'Using the future perfect to set ambitious and clear career milestones.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U53_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 53',
  explanation: 'Consolidation of Future Continuous, Future Perfect and Work Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'By next month, I ___ (will have/will be) finished the course.' : 'The ___ (gig/hybrid) economy is changing how we work.',
    options: i < 5 ? ['will have', 'will be', 'have'] : ['gig', 'hybrid', 'stable'],
    correctAnswer: i < 5 ? 'will have' : 'gig',
    explanation: 'Final check of key concepts from Unit 53.',
    points: 1
  }))
};

export const B2_UNIT_53 = createB2Unit(
  'b2-u53',
  'The Future of Work',
  'Explore the changing landscape of employment while mastering future continuous and future perfect tenses to describe your professional journey.',
  ['Use future continuous and future perfect correctly in a professional context', 'Acquire vocabulary for automation, the gig economy, and soft skills', 'Draft professional correspondence and discuss career aspirations naturally'],
  [
    B2_U53_BLOCK1, B2_U53_BLOCK2, B2_U53_BLOCK3, B2_U53_BLOCK4, B2_U53_BLOCK5,
    B2_U53_BLOCK6, B2_U53_BLOCK7, B2_U53_BLOCK8, B2_U53_BLOCK9, B2_U53_BLOCK10
  ]
);
