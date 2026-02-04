import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 42;

// ============================================
// BLOCK 1: GRAMMAR - PASSIVE REPORTING (I)
// ============================================
export const B2_U42_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Passive Reporting: Scientific Claims',
  grammarPoint: 'Passive Reporting',
  explanation: 'Using "It is said that..." and "Subject + is said to..." for reporting general beliefs or scientific findings.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'It is ___ (believe) that the universe is expanding.',
      'The new vaccine is ___ (consider) to be safe.',
      'It is ___ (think) that the project will take two years.',
      'Water is ___ (know) to cover most of the Earth\'s surface.',
      'It is ___ (estimate) that 70% of the species are unknown.',
      'The experiment is ___ (say) to have been a success.',
      'It is ___ (claim) that this discovery will change everything.',
      'The virus is ___ (expect) to mutate soon.',
      'It is ___ (report) that the findings are inconclusive.',
      'The scientist is ___ (allege) to have falsified the data.'
    ][i],
    correctAnswer: [
      'believed',
      'considered',
      'thought',
      'known',
      'estimated',
      'said',
      'claimed',
      'expected',
      'reported',
      'alleged'
    ][i],
    explanation: 'Choosing the correct reporting verb in the passive voice.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - PASSIVE REPORTING (II)
// ============================================
export const B2_U42_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Active to Passive Reporting',
  grammarPoint: 'Passive Reporting',
  explanation: 'Transforming active sentences with reporting verbs into passive structures.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'People say he is a genius. -> He is ___ (say) to be a genius.',
      'They think the planet is habitable. -> The planet is ___ (think) to be habitable.',
      'Experts believe the ice is melting. -> It is ___ (believe) that the ice is melting.',
      'Everyone knows she discovered the element. -> She is ___ (know) to have discovered the element.',
      'We expect the results tomorrow. -> The results are ___ (expect) tomorrow.',
      'They claim the theory is flawed. -> The theory is ___ (claim) to be flawed.',
      'Journalists report a breakthrough. -> A breakthrough is ___ (report) to have occurred.',
      'Historians consider him a visionary. -> He is ___ (consider) a visionary.',
      'Authorities allege he stole the files. -> He is ___ (allege) to have stolen the files.',
      'Researchers estimate the age at 5,000 years. -> The age is ___ (estimate) to be 5,000 years.'
    ][i],
    correctAnswer: [
      'said',
      'thought',
      'believed',
      'known',
      'expected',
      'claimed',
      'reported',
      'considered',
      'alleged',
      'estimated'
    ][i],
    explanation: 'Converting between reporting structures.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - SCIENTIFIC BREAKTHROUGHS
// ============================================
export const B2_U42_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Breakthroughs and Discoveries',
  explanation: 'Vocabulary for scientific achievements and the research process.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The discovery of penicillin was a major ___ (breakthrough).',
      'Researchers are conducting an ___ (experiment) in the lab.',
      'The results were published in a peer-reviewed ___ (journal).',
      'He won the Nobel ___ (Prize) for his work in physics.',
      'We need to verify the ___ (validity) of the data.',
      'The study was based on a large ___ (sample) size.',
      'This technology has many ___ (applications) in medicine.',
      'The theory was supported by empirical ___ (evidence).',
      'They are looking for a ___ (cure) for the disease.',
      'The lab is equipped with state-of-the-art ___ (instruments).'
    ][i],
    correctAnswer: [
      'breakthrough',
      'experiment',
      'journal',
      'Prize',
      'validity',
      'sample',
      'applications',
      'evidence',
      'cure',
      'instruments'
    ][i],
    explanation: 'Core terms for science and research.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SCIENTIFIC ETHICS & SOCIETY
// ============================================
export const B2_U42_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Science and Ethics',
  explanation: 'Terms for ethical dilemmas and the impact of science on society.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'Genetically ___ (modified) crops are controversial.',
      'Is ___ (cloning) humans ethically acceptable?',
      'The trial was conducted with informed ___ (consent).',
      'We must consider the long-term ___ (implications).',
      'The research was funded by a government ___ (grant).',
      'There is a heated ___ (debate) about AI safety.',
      'The scientist faced an ethical ___ (dilemma).',
      'The procedure is highly ___ (invasive).',
      'Public ___ (opinion) on space travel is divided.',
      'We need stricter ___ (regulations) on biotech.'
    ][i],
    options: [
      ['modified', 'changed', 'fixed'],
      ['cloning', 'copying', 'doubling'],
      ['consent', 'agree', 'permit'],
      ['implications', 'results', 'ideas'],
      ['grant', 'money', 'gift'],
      ['debate', 'talk', 'fight'],
      ['dilemma', 'problem', 'choice'],
      ['invasive', 'into', 'deep'],
      ['opinion', 'thought', 'view'],
      ['regulations', 'rules', 'laws']
    ][i],
    correctAnswer: [
      'modified',
      'cloning',
      'consent',
      'implications',
      'grant',
      'debate',
      'dilemma',
      'invasive',
      'opinion',
      'regulations'
    ][i],
    explanation: 'Vocabulary for discussing the morality of scientific progress.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U42_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Science and Research',
  explanation: 'Form nouns, adjectives, and verbs related to science and investigation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The experiment was a ___ (SUCCESS) one.',
      'We need to ___ (ANALYZE) the results carefully.',
      'The discovery was purely ___ (ACCIDENT).',
      'He is a world-renowned ___ (BIOLOGY).',
      'The ___ (PROVE) of the theory took years.',
      'The device is very ___ (RELY).',
      'The findings were quite ___ (SURPRISE).',
      'We are looking for a ___ (SOLVE) to the problem.',
      'The ___ (EXPLORE) of Mars is ongoing.',
      'She made a significant ___ (CONTRIBUTE) to the field.'
    ][i],
    correctAnswer: [
      'successful',
      'analyze',
      'accidental',
      'biologist',
      'proof',
      'reliable',
      'surprising',
      'solution',
      'exploration',
      'contribution'
    ][i],
    explanation: 'Transforming root words into scientific terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE FUTURE OF MEDICINE
// ============================================
export const B2_U42_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Personalized Medicine',
  explanation: 'Read about the shift towards personalized healthcare and genomic medicine.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main goal of personalized medicine?' : 'What role does DNA sequencing play in this field?',
    options: [['Tailoring treatments to individual genetics', 'Reducing costs for everyone', 'Building bigger hospitals'], ['Identifying specific disease risks', 'Replacing doctors with robots', 'Making medicine cheaper']][i % 2],
    correctAnswer: i < 5 ? 'Tailoring treatments to individual genetics' : 'Identifying specific disease risks',
    explanation: 'Understanding complex scientific trends and their benefits.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN INTERVIEW WITH AN ASTRONOMER
// ============================================
export const B2_U42_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Searching for Exoplanets',
  explanation: 'Listen to an interview with an astronomer about the James Webb Space Telescope.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What makes the James Webb Telescope unique according to the speaker?`,
    options: ['Its ability to see infrared light', 'It is the first telescope in space', 'It was built by one person', 'It is very small'],
    correctAnswer: 'Its ability to see infrared light',
    explanation: 'Identifying specific technical features from an oral presentation.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - RESEARCH REPORTS
// ============================================
export const B2_U42_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Summarizing Findings',
  explanation: 'Identify the most objective and precise way to report data.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To report a significant increase:',
      'To mention a stable trend:',
      'To express doubt about a result:',
      'To describe a methodology:',
      'To cite a source in text:',
      'To conclude based on data:',
      'To introduce a chart:',
      'To highlight a limitation:',
      'To state the objective of the study:',
      'To use a precise verb for "happening":'
    ][i],
    options: [
      ['There was a substantial rise in...', 'Things went up a lot.', 'It grew.'],
      ['The figures remained steady over the period.', 'The numbers didn\'t move.', 'It stayed the same.'],
      ['The results should be interpreted with caution.', 'The results might be wrong.', 'We don\'t know.'],
      ['The experiment was conducted under controlled conditions.', 'We did the test in a room.', 'The way we did it was:'],
      ['(Miller, 2019)', 'Miller said in 2019', 'Look at Miller'],
      ['In light of these findings, we can conclude that...', 'So we think...', 'That\'s why:'],
      ['As illustrated in Figure 1,', 'Look at the picture,', 'Figure 1 shows:'],
      ['One limitation of this study is...', 'The bad part was...', 'We couldn\'t do:'],
      ['The aim of this research is to investigate...', 'We want to look at...', 'This paper is about:'],
      ['The reaction occurs when...', 'The reaction happens when...', 'The reaction is when...']
    ][i],
    correctAnswer: [
      'There was a substantial rise in...',
      'The figures remained steady over the period.',
      'The results should be interpreted with caution.',
      'The experiment was conducted under controlled conditions.',
      '(Miller, 2019)',
      'In light of these findings, we can conclude that...',
      'As illustrated in Figure 1,',
      'One limitation of this study is...',
      'The aim of this research is to investigate...',
      'The reaction occurs when...'
    ][i],
    explanation: 'Choosing the correct academic and scientific register for reporting.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ABOUT THE FUTURE
// ============================================
export const B2_U42_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Speculating on Science',
  explanation: 'How to use passive reporting and speculation phrases naturally.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you formally speculate about the future of AI?`,
    options: ['It is widely expected that AI will revolutionize the job market.', 'I think AI will change jobs.', 'AI is going to do stuff.', 'People say AI is good.'],
    correctAnswer: 'It is widely expected that AI will revolutionize the job market.',
    explanation: 'Using sophisticated reporting structures in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U42_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 42',
  explanation: 'Consolidation of Passive Reporting and Science Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'It is ___ (known/know) that the Earth revolves around the Sun.' : 'A major ___ (breakthrough/dilemma) in genetics was recently announced.',
    options: i < 5 ? ['known', 'know', 'knew'] : ['breakthrough', 'dilemma', 'grant'],
    correctAnswer: i < 5 ? 'known' : 'breakthrough',
    explanation: 'Final check of key concepts from Unit 42.',
    points: 1
  }))
};

export const B2_UNIT_42 = createB2Unit(
  'b2-u42',
  'Scientific Discoveries',
  'Master the art of passive reporting while exploring the fascinating world of scientific breakthroughs and ethics.',
  ['Use passive reporting structures accurately', 'Transform active reporting into passive equivalents', 'Acquire vocabulary for scientific research, ethics, and achievements'],
  [
    B2_U42_BLOCK1, B2_U42_BLOCK2, B2_U42_BLOCK3, B2_U42_BLOCK4, B2_U42_BLOCK5,
    B2_U42_BLOCK6, B2_U42_BLOCK7, B2_U42_BLOCK8, B2_U42_BLOCK9, B2_U42_BLOCK10
  ]
);
