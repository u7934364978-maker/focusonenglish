import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 13;

// ============================================
// BLOCK 1: GRAMMAR - MODALS OF DEDUCTION (PRESENT)
// ============================================
export const B2_U13_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Modals of Deduction: Present',
  grammarPoint: 'Modal Verbs',
  explanation: 'Use must, can\'t, and might/may/could to express how certain you are about something in the present.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The AI system is making no errors. It ___ be very advanced.',
      'He doesn\'t answer his phone. He ___ be in a meeting.',
      'That ___ be the right answer; it\'s logically impossible!',
      'They ___ be working on a new robot, but I\'m not sure.',
      'You\'ve been studying AI all day. You ___ be exhausted.',
      'This ___ be his laptop; it has his name on it.',
      'It ___ rain later, so bring an umbrella just in case.',
      'He ___ be the CEO; he looks way too young.',
      'The results ___ be accurate; we need to double-check them.',
      'The lights are on in the lab. Someone ___ be working late.'
    ][i],
    options: [
      ['must', 'can\'t', 'might'],
      ['might', 'must', 'can\'t'],
      ['can\'t', 'must', 'could'],
      ['might', 'must', 'can\'t'],
      ['must', 'can\'t', 'could'],
      ['must', 'can\'t', 'might'],
      ['might', 'must', 'can\'t'],
      ['can\'t', 'must', 'might'],
      ['might not', 'must not', 'can\'t'],
      ['must', 'can\'t', 'might']
    ][i],
    correctAnswer: [
      'must',
      'might',
      'can\'t',
      'might',
      'must',
      'must',
      'might',
      'can\'t',
      'might not',
      'must'
    ][i],
    explanation: 'Choosing the correct modal based on degrees of certainty (90-100% vs 50%).',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MODALS OF DEDUCTION (PAST)
// ============================================
export const B2_U13_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Modals of Deduction: Past',
  grammarPoint: 'Modal Verbs',
  explanation: 'Use modal + have + past participle to speculate about past events.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'The data is gone. You ___ (must/delete) it by mistake.',
      'He ___ (can\'t/hear) the alarm; he was wearing headphones.',
      'They ___ (might/forget) about the meeting.',
      'She ___ (must/be) very happy when she got the job.',
      'The robot ___ (could/malfunction) during the test.',
      'You ___ (can\'t/see) him yesterday; he\'s in London.',
      'The file ___ (might/not/save) correctly.',
      'He ___ (must/work) very hard to finish this project.',
      'The system ___ (could/be) hacked last night.',
      'I ___ (might/leave) my keys in the office.'
    ][i],
    correctAnswer: [
      'must have deleted',
      'can\'t have heard',
      'might have forgotten',
      'must have been',
      'could have malfunctioned',
      'can\'t have seen',
      'might not have saved',
      'must have worked',
      'could have been',
      'might have left'
    ][i],
    explanation: 'Using modal perfects for past speculation.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - AI & MACHINE LEARNING
// ============================================
export const B2_U13_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'AI and Machine Learning',
  explanation: 'Key terms in the field of artificial intelligence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The computer uses an ___ (algorithm) to process the data.',
      '___ (Machine) learning allows systems to improve over time.',
      'The AI can ___ (simulate) human conversation.',
      'We need a large ___ (dataset) to train the model.',
      'The software can ___ (recognize) faces in a crowd.',
      '___ (Automation) is replacing many repetitive tasks.',
      'The neural ___ (network) mimics the human brain.',
      'This AI is capable of ___ (predictive) analysis.',
      'The system operates in real-___ (time).',
      'It can ___ (generate) realistic images from text.'
    ][i],
    correctAnswer: [
      'algorithm',
      'Machine',
      'simulate',
      'dataset',
      'recognize',
      'automation',
      'network',
      'predictive',
      'time',
      'generate'
    ][i],
    explanation: 'Technical and general AI vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ETHICS & PHILOSOPHY
// ============================================
export const B2_U13_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Ethics and Technology',
  explanation: 'Vocabulary for discussing right and wrong in tech.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'AI development raises many ___ (ethical) questions.',
      'We must prevent ___ (bias) in automated decisions.',
      'Data ___ (privacy) is a fundamental human right.',
      'Companies should be held ___ (accountable) for AI errors.',
      'There is a lot of ___ (controversy) surrounding facial recognition.',
      'The use of AI in warfare is a highly ___ (sensitive) topic.',
      'We need strict ___ (regulations) to control AI growth.',
      'The ___ (transparency) of algorithms is essential.',
      'Some fear that AI will ___ (undermine) human autonomy.',
      'Is AI a ___ (threat) or an opportunity for humanity?'
    ][i],
    options: [
      ['ethical', 'moral', 'legal'],
      ['bias', 'error', 'truth'],
      ['privacy', 'safety', 'access'],
      ['accountable', 'responsible', 'liable'],
      ['controversy', 'agreement', 'peace'],
      ['sensitive', 'angry', 'easy'],
      ['regulations', 'rules', 'laws'],
      ['transparency', 'clarity', 'view'],
      ['undermine', 'help', 'boost'],
      ['threat', 'danger', 'risk']
    ][i],
    correctAnswer: [
      'ethical',
      'bias',
      'privacy',
      'accountable',
      'controversy',
      'sensitive',
      'regulations',
      'transparency',
      'undermine',
      'threat'
    ][i],
    explanation: 'Vocabulary related to the moral implications of technological progress.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ETHICS)
// ============================================
export const B2_U13_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Tech Ethics',
  explanation: 'Form words related to ethics and innovation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (EXIST) of AI poses new challenges.',
      'Many people are ___ (SKEPTIC) about AI safety.',
      'The ___ (RESPONSIBLE) of developers is huge.',
      'We need an ___ (OBJECT) assessment of the risks.',
      'The ___ (IMPLICATE) of this technology are far-reaching.',
      'AI can be a ___ (POWER) tool for good.',
      'The ___ (RELEVANT) of this study is questionable.',
      'His ___ (ARGUE) against AI was very convincing.',
      'The ___ (LIMIT) of current AI are well-documented.',
      'The ___ (SIGNIFICANT) of this discovery cannot be overstated.'
    ][i],
    correctAnswer: [
      'existence',
      'skeptical',
      'responsibility',
      'objective',
      'implications',
      'powerful',
      'relevance',
      'argument',
      'limitations',
      'significance'
    ][i],
    explanation: 'Noun and adjective formation in abstract contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - AI IN THE ARTS
// ============================================
export const B2_U13_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Can Robots be Creative?',
  explanation: 'Read the article about AI-generated art and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Who owns the copyright of AI art?' : 'What is the main argument of the author?',
    options: [['It is unclear', 'The programmer', 'The AI', 'Everyone'], ['AI is a tool', 'AI is an artist', 'AI is useless', 'AI is dangerous']][i % 2],
    correctAnswer: i < 5 ? 'It is unclear' : 'AI is a tool',
    explanation: 'Reading for complex arguments and legal nuances.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - DEBATE ON AI
// ============================================
export const B2_U13_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The AI Revolution Debate',
  explanation: 'Listen to the debate and identify the speakers\' main points.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is Speaker A's main concern?`,
    options: ['Job loss', 'Privacy', 'Bias', 'Cost'],
    correctAnswer: 'Job loss',
    explanation: 'Identifying viewpoints and concerns in a discussion.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - DISCURSIVE ESSAYS
// ============================================
export const B2_U13_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Balancing Arguments',
  explanation: 'Choose the best phrase to balance a discursive essay.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To present the first argument:',
      'To introduce a counter-argument:',
      'To show both sides of a coin:',
      'To emphasize a point:',
      'To refer to common fears:',
      'To mention potential benefits:',
      'To conclude with a warning:',
      'To suggest a middle ground:',
      'To refer to the need for control:',
      'To end on a hopeful note:'
    ][i],
    options: [
      ['On the one hand, AI offers...', 'First thing:', 'Good side:'],
      ['On the other hand, critics argue...', 'But some say...', 'Bad side:'],
      ['There are both pros and cons to...', 'It has two sides.', 'Both ways:'],
      ['It is imperative to consider...', 'Very important!', 'Think about:'],
      ['Widespread concerns exist regarding...', 'People are scared.', 'Fear:'],
      ['Potential advantages include...', 'Good things:', 'Benefits:'],
      ['However, we must remain vigilant.', 'Be careful!', 'Watch out.'],
      ['A balanced approach is necessary.', 'Middle way.', 'Balance:'],
      ['Stringent regulations are required.', 'Need rules.', 'Control:'],
      ['Ultimately, technology should serve humanity.', 'Hope for future.', 'Good end.']
    ][i],
    correctAnswer: [
      'On the one hand, AI offers...',
      'On the other hand, critics argue...',
      'There are both pros and cons to...',
      'It is imperative to consider...',
      'Widespread concerns exist regarding...',
      'Potential advantages include...',
      'However, we must remain vigilant.',
      'A balanced approach is necessary.',
      'Stringent regulations are required.',
      'Ultimately, technology should serve humanity.'
    ][i],
    explanation: 'Advanced linking words for academic writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ON EVIDENCE
// ============================================
export const B2_U13_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Speculating about Facts',
  explanation: 'Identify natural ways to speculate about a situation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Looking at these results, what would you say?`,
    options: ['Judging by the data, it must be...', 'I see data, so it is...', 'The data says...', 'Look at this.'],
    correctAnswer: 'Judging by the data, it must be...',
    explanation: 'Using evidence to back up deductions in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U13_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 13',
  explanation: 'Consolidation of Modals of Deduction.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The system crashed again. It ___ (be) a bug.' : 'He ___ (can\'t/see) the email; it was sent after he left.',
    options: i < 5 ? ['must be', 'can\'t be', 'might not be'] : ['can\'t have seen', 'must have seen', 'might have seen'],
    correctAnswer: i < 5 ? 'must be' : 'can\'t have seen',
    explanation: 'Deducing present and past states correctly.',
    points: 1
  }))
};

export const B2_UNIT_13 = createB2Unit(
  'b2-u13',
  'AI & Ethics',
  'Explore the ethical boundaries of technology while mastering modal verbs of deduction.',
  ['Use modals of deduction to speculate about present and past events', 'Understand vocabulary related to AI and ethics', 'Debate the moral implications of technological innovation'],
  [
    B2_U13_BLOCK1, B2_U13_BLOCK2, B2_U13_BLOCK3, B2_U13_BLOCK4, B2_U13_BLOCK5,
    B2_U13_BLOCK6, B2_U13_BLOCK7, B2_U13_BLOCK8, B2_U13_BLOCK9, B2_U13_BLOCK10
  ]
);
