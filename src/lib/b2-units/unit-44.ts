import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 44;

// ============================================
// BLOCK 1: GRAMMAR - FUTURE PERFECT
// ============================================
export const B2_U44_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Milestones in Medicine',
  grammarPoint: 'Future Perfect',
  explanation: 'Use the Future Perfect (will have + past participle) for actions completed before a specific point in the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'By 2050, scientists ___ (develop) a cure for many cancers.',
      'The new hospital ___ (finish) construction by next year.',
      'By the end of the decade, they ___ (map) the entire human genome.',
      'I ___ (complete) my medical degree by the time I\'m 26.',
      'By next week, the clinical trials ___ (conclude).',
      'The pharmacy ___ (close) by the time you get there.',
      'By 2030, we ___ (eliminate) several infectious diseases.',
      'He ___ (recover) from the surgery by the end of the month.',
      'By then, the technology ___ (become) more affordable.',
      'The government ___ (implement) the new health policy by next autumn.'
    ][i],
    correctAnswer: [
      'will have developed',
      'will have finished',
      'will have mapped',
      'will have completed',
      'will have concluded',
      'will have closed',
      'will have eliminated',
      'will have recovered',
      'will have become',
      'will have implemented'
    ][i],
    explanation: 'Using future perfect to describe completed future achievements.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - FUTURE PERFECT CONTINUOUS
// ============================================
export const B2_U44_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Ongoing Research and Progress',
  grammarPoint: 'Future Perfect Continuous',
  explanation: 'Use the Future Perfect Continuous (will have been + -ing) for actions that will continue up to a point in the future.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'By next year, she ___ (work) as a surgeon for ten years.',
      'They ___ (conduct) research on this virus for over a decade.',
      'By 2030, scientists ___ (study) the effects of climate on health for 50 years.',
      'How long ___ you ___ (live) in this city by next Christmas?',
      'By the time he retires, he ___ (treat) thousands of patients.',
      'The lab ___ (run) tests for 24 hours by tomorrow morning.',
      'By 2040, we ___ (use) this vaccine for twenty years.',
      'She ___ (train) to be a nurse for three years by June.',
      'They ___ (investigate) the outbreak for several months by the time they find the source.',
      'By the end of the day, I ___ (wait) for the results for eight hours.'
    ][i],
    correctAnswer: [
      'will have been working',
      'will have been conducting',
      'will have been studying',
      'will, have been living',
      'will have been treating',
      'will have been running',
      'will have been using',
      'will have been training',
      'will have been investigating',
      'will have been waiting'
    ][i],
    explanation: 'Emphasizing the duration of a future activity up to a certain point.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - HEALTHCARE & GENETICS
// ============================================
export const B2_U44_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Future of Health',
  explanation: 'Vocabulary for genetics, advanced medical technology, and healthcare systems.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      '___ (Gene) therapy is a promising new field.',
      'The patient is suffering from a ___ (chronic) condition.',
      'We need to increase the ___ (capacity) of our hospitals.',
      'The disease is highly ___ (contagious).',
      'The ___ (mortality) rate has decreased significantly.',
      'They are using ___ (artificial) intelligence to diagnose diseases.',
      'The drug has several ___ (side-effects).',
      'He received a heart ___ (transplant).',
      'We need to focus on ___ (preventive) medicine.',
      'The laboratory specializes in ___ (biomedical) engineering.'
    ][i],
    correctAnswer: [
      'Gene',
      'chronic',
      'capacity',
      'contagious',
      'mortality',
      'artificial',
      'side-effects',
      'transplant',
      'preventive',
      'biomedical'
    ][i],
    explanation: 'Core terms for modern medicine and genetics.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - EPIDEMIOLOGY & PUBLIC HEALTH
// ============================================
export const B2_U44_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Public Health and Safety',
  explanation: 'Terms for managing outbreaks, vaccines, and global health.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The World Health ___ (Organization) declared a pandemic.',
      'We need to achieve herd ___ (immunity).',
      'The vaccine requires two ___ (doses).',
      'Public health ___ (surveillance) is crucial.',
      'The virus has several ___ (variants).',
      'They implemented strict ___ (quarantine) measures.',
      'The ___ (outbreak) started in a small village.',
      'We need to improve our ___ (hygiene) standards.',
      'The patient made a full ___ (recovery).',
      'Health ___ (equity) is a major global issue.'
    ][i],
    options: [
      ['Organization', 'Group', 'Club'],
      ['immunity', 'safety', 'health'],
      ['doses', 'parts', 'rounds'],
      ['surveillance', 'watching', 'looking'],
      ['variants', 'kinds', 'types'],
      ['quarantine', 'hiding', 'staying'],
      ['outbreak', 'start', 'end'],
      ['hygiene', 'clean', 'bath'],
      ['recovery', 'get-well', 'back'],
      ['equity', 'fairness', 'equal']
    ][i],
    correctAnswer: [
      'Organization',
      'immunity',
      'doses',
      'surveillance',
      'variants',
      'quarantine',
      'outbreak',
      'hygiene',
      'recovery',
      'equity'
    ][i],
    explanation: 'Vocabulary for discussing global health crises and prevention.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION
// ============================================
export const B2_U44_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Medical Advances',
  explanation: 'Form nouns, adjectives, and verbs related to health and medicine.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Regular exercise is ___ (BENEFIT) to health.',
      'The discovery of antibiotics was ___ (REVOLUTION).',
      'He is a specialist in ___ (NEUROLOGY).',
      'The ___ (PREVENT) of disease is better than the cure.',
      'The patient showed signs of ___ (IMPROVE).',
      'The treatment was highly ___ (EFFECT).',
      'We need to ___ (VACCINE) the population.',
      'The research is ___ (FUND) by the university.',
      'She is a very ___ (KNOWLEDGE) doctor.',
      'The operation was a ___ (SURGERY) success.'
    ][i],
    correctAnswer: [
      'beneficial',
      'revolutionary',
      'neurology',
      'prevention',
      'improvement',
      'effective',
      'vaccinate',
      'funded',
      'knowledgeable',
      'surgical'
    ][i],
    explanation: 'Transforming root words into medical and health-related terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - LONGEVITY AND AGING
// ============================================
export const B2_U44_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Living to 100',
  explanation: 'Read about the factors that contribute to longevity in "Blue Zones".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is a "Blue Zone"?' : 'What is a common dietary habit in these areas?',
    options: [['A region where people live significantly longer lives', 'A place with lots of water', 'A cold area'], ['Eating mostly plant-based foods', 'Eating lots of meat', 'Skipping breakfast']][i % 2],
    correctAnswer: i < 5 ? 'A region where people live significantly longer lives' : 'Eating mostly plant-based foods',
    explanation: 'Identifying key concepts in a text about health and aging.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - A MEDICAL PODCAST
// ============================================
export const B2_U44_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Telemedicine and the Future',
  explanation: 'Listen to a discussion about how digital technology is changing healthcare delivery.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is one benefit of telemedicine mentioned?`,
    options: ['Increased access for people in remote areas', 'It is always cheaper', 'No need for internet', 'Better food'],
    correctAnswer: 'Increased access for people in remote areas',
    explanation: 'Listening for benefits and trends in modern healthcare.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - MEDICAL ETHICS
// ============================================
export const B2_U44_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Arguing an Ethical Case',
  explanation: 'Identify the best way to structure an essay on medical ethics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a moral dilemma:',
      'To express a balanced view:',
      'To use formal vocabulary for "agreeing":',
      'To highlight a potential risk:',
      'To conclude a medical report:',
      'To state a legal requirement:',
      'To define a key term:',
      'To provide a recommendation:',
      'To reference a medical study:',
      'To use a tentative phrase for outcomes:'
    ][i],
    options: [
      ['This raises fundamental ethical questions regarding...', 'This is a hard choice.', 'It\'s about right and wrong.'],
      ['On the one hand, ... while on the other, ...', 'I like both sides.', 'There are two things.'],
      ['Proponents of this view maintain that...', 'People like this...', 'It is good.'],
      ['The potential hazards associated with...', 'The bad things are...', 'It might be dangerous.'],
      ['In summary, the clinical evidence points to...', 'So we found...', 'Last thing:'],
      ['Under current legislation, it is mandatory to...', 'The law says...', 'You must do it.'],
      ['Epidemiology can be defined as...', 'It means...', 'What it is:'],
      ['It is strongly recommended that...', 'Do this:', 'I think you should.'],
      ['A recent study published in The Lancet...', 'A book said...', 'Look at this:'],
      ['It appears that the treatment may...', 'The treatment will...', 'It is certain.']
    ][i],
    correctAnswer: [
      'This raises fundamental ethical questions regarding...',
      'On the one hand, ... while on the other, ...',
      'Proponents of this view maintain that...',
      'The potential hazards associated with...',
      'In summary, the clinical evidence points to...',
      'Under current legislation, it is mandatory to...',
      'Epidemiology can be defined as...',
      'It is strongly recommended that...',
      'A recent study published in The Lancet...',
      'It appears that the treatment may...'
    ][i],
    explanation: 'Using formal and precise language for ethical and medical writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - HEALTH ADVICE
// ============================================
export const B2_U44_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Discussing Health Trends',
  explanation: 'How to use future tenses to predict health outcomes naturally.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally predict a future health trend?`,
    options: ['By the time we are old, scientists will have cured most diseases.', 'I think we will be healthy.', 'Everything is going to be fine.', 'People will live long.'],
    correctAnswer: 'By the time we are old, scientists will have cured most diseases.',
    explanation: 'Using the future perfect to make ambitious and natural predictions.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U44_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 44',
  explanation: 'Consolidation of Future Perfect, Future Perfect Continuous and Health Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'By next year, I ___ (will have/will be) finished my training.' : 'The disease is highly ___ (contagious/chronic), so be careful.',
    options: i < 5 ? ['will have', 'will be', 'have'] : ['contagious', 'chronic', 'mortal'],
    correctAnswer: i < 5 ? 'will have' : 'contagious',
    explanation: 'Final check of key concepts from Unit 44.',
    points: 1
  }))
};

export const B2_UNIT_44 = createB2Unit(
  'b2-u44',
  'Medical Research & Health',
  'Explore the frontiers of medical science and master the use of future perfect tenses to describe upcoming breakthroughs.',
  ['Use the future perfect and future perfect continuous correctly', 'Acquire vocabulary for genetics, epidemiology, and healthcare technology', 'Apply formal and objective language in health-related writing'],
  [
    B2_U44_BLOCK1, B2_U44_BLOCK2, B2_U44_BLOCK3, B2_U44_BLOCK4, B2_U44_BLOCK5,
    B2_U44_BLOCK6, B2_U44_BLOCK7, B2_U44_BLOCK8, B2_U44_BLOCK9, B2_U44_BLOCK10
  ]
);
