import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 9;

// ============================================
// BLOCK 1: GRAMMAR - QUANTIFIERS WITH COUNTABLE/UNCOUNTABLE
// ============================================
export const B2_U9_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Quantifiers: Countable and Uncountable',
  grammarPoint: 'Quantifiers',
  explanation: 'Use much, many, few, little, a great deal of, plenty of, and several correctly.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'There isn\'t ___ water left in the bottle.',
      'How ___ people were at the gym?',
      'I have ___ friends who are professional athletes.',
      'He has ___ knowledge about nutrition.',
      'We have ___ of time before the class starts.',
      '___ people understand the importance of sleep.',
      'I\'ve seen ___ improvements in my fitness.',
      'There is ___ interest in new diet trends.',
      '___ of the participants finished the marathon.',
      'I have ___ money to spend on supplements.'
    ][i],
    options: [
      ['much', 'many', 'few'],
      ['many', 'much', 'little'],
      ['a few', 'a little', 'much'],
      ['a great deal of', 'many', 'several'],
      ['plenty', 'many', 'much'],
      ['few', 'little', 'much'],
      ['several', 'much', 'a little'],
      ['a lot of', 'many', 'several'],
      ['most', 'much', 'little'],
      ['very little', 'very few', 'several']
    ][i],
    correctAnswer: [
      'much',
      'many',
      'a few',
      'a great deal of',
      'plenty',
      'few',
      'several',
      'a lot of',
      'most',
      'very little'
    ][i],
    explanation: 'Using the correct quantifier based on whether the noun is countable or uncountable.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - ADVANCED QUANTIFIERS (EACH, EVERY, EITHER, NEITHER)
// ============================================
export const B2_U9_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Each, Every, Either, Neither',
  grammarPoint: 'Quantifiers',
  explanation: 'Distinguishing between quantifiers used for two items vs. multiple items.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '___ (every) student must bring their own towel.',
      '___ (each) of the two runners received a medal.',
      '___ (either) of these two diets will work.',
      '___ (neither) of the results was positive.',
      '___ (every) time I exercise, I feel better.',
      'I have two bikes, but ___ (neither) of them is working.',
      '___ (each) day is a new opportunity.',
      'You can choose ___ (either) the morning or evening session.',
      '___ (every) individual has different needs.',
      '___ (neither) my brother nor I enjoy running.'
    ][i],
    correctAnswer: [
      'every',
      'each',
      'either',
      'neither',
      'every',
      'neither',
      'each',
      'either',
      'every',
      'neither'
    ][i],
    explanation: 'Using distributive quantifiers correctly.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - HEALTH & WELLBEING
// ============================================
export const B2_U9_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Health and Wellbeing',
  explanation: 'Vocabulary for physical and mental health.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'It is important to maintain a ___ (balanced) diet.',
      'Regular exercise is ___ (essential) for health.',
      'I try to avoid ___ (processed) foods.',
      'Mental ___ (wellbeing) is just as important as physical health.',
      'He is in peak physical ___ (condition).',
      'She has a lot of ___ (stamina) for long runs.',
      'Yoga helps to reduce ___ (stress) levels.',
      'I need to improve my ___ (flexibility).',
      'He is recovering from a minor ___ (injury).',
      'Good ___ (nutrition) is key to recovery.'
    ][i],
    correctAnswer: [
      'balanced',
      'essential',
      'processed',
      'wellbeing',
      'condition',
      'stamina',
      'stress',
      'flexibility',
      'injury',
      'nutrition'
    ][i],
    explanation: 'Common health-related terms.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - FITNESS & EXERCISE
// ============================================
export const B2_U9_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Fitness and Exercise',
  explanation: 'Vocabulary for the gym and training.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'I like to ___ (work) out in the morning.',
      'He is ___ (training) for a half-marathon.',
      'She did three ___ (sets) of ten repetitions.',
      'We went for a ___ (jog) in the park.',
      'He ___ (lifted) weights at the gym.',
      'She is very ___ (fit) and active.',
      'I need to ___ (warm) up before I start.',
      'He ___ (stretched) his muscles after the run.',
      'The gym has state-of-the-art ___ (equipment).',
      'She ___ (joined) a new fitness class.'
    ][i],
    options: [
      ['work', 'get', 'take'],
      ['training', 'learning', 'practicing'],
      ['sets', 'groups', 'teams'],
      ['jog', 'run', 'walk'],
      ['lifted', 'took', 'held'],
      ['fit', 'strong', 'healthy'],
      ['warm', 'heat', 'hot'],
      ['stretched', 'pulled', 'pushed'],
      ['equipment', 'tools', 'machines'],
      ['joined', 'made', 'took']
    ][i],
    correctAnswer: [
      'work',
      'training',
      'sets',
      'jog',
      'lifted',
      'fit',
      'warm',
      'stretched',
      'equipment',
      'joined'
    ][i],
    explanation: 'Standard fitness and gym terminology.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (HEALTH)
// ============================================
export const B2_U9_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Health Trends',
  explanation: 'Form words related to health and lifestyle.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'Sugar ___ (CONSUME) should be limited.',
      'Regular exercise increases ___ (ENDURE).',
      'She made a full ___ (RECOVER) from the injury.',
      'There is an ___ (AWARE) of the importance of sleep.',
      'His ___ (FIT) level has improved significantly.',
      'The ___ (BENEFIT) effects of exercise are well-known.',
      'He is very ___ (HEALTH) for his age.',
      'The ___ (STRENGTH) of his muscles is impressive.',
      'Yoga improves ___ (FLEXIBLE).',
      'The ___ (SOLVE) to his health problems was simple.'
    ][i],
    correctAnswer: [
      'consumption',
      'endurance',
      'recovery',
      'awareness',
      'fitness',
      'beneficial',
      'healthy',
      'strength',
      'flexibility',
      'solution'
    ][i],
    explanation: 'Suffixes for health and fitness vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - MODERN FITNESS TRENDS
// ============================================
export const B2_U9_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Rise of Biohacking',
  explanation: 'Read the article about health trends and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the primary goal of biohacking?' : 'What does the author suggest about extreme diets?',
    options: [['Optimizing health', 'Selling products', 'Avoiding doctors', 'Gaining weight'], ['They can be risky', 'They are always good', 'They are cheap', 'They are easy']][i % 2],
    correctAnswer: i < 5 ? 'Optimizing health' : 'They can be risky',
    explanation: 'Analyzing contemporary health topics in text.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - HEALTH ADVICE
// ============================================
export const B2_U9_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Tips from a Trainer',
  explanation: 'Listen to the fitness trainer and identify the main advice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `The trainer emphasizes the importance of ___.`,
    options: ['Consistency', 'Intensity', 'Speed', 'Equipment'],
    correctAnswer: 'Consistency',
    explanation: 'Identifying core advice in a spoken context.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - HEALTH ARTICLES
// ============================================
export const B2_U9_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Informative Health Articles',
  explanation: 'Choose the best phrase for an article about health.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a health problem:',
      'To mention a scientific study:',
      'To provide a practical tip:',
      'To warn about a risk:',
      'To describe a benefit:',
      'To mention a common myth:',
      'To encourage the reader:',
      'To provide a statistic:',
      'To suggest further research:',
      'To conclude the article:'
    ][i],
    options: [
      ['A growing concern in modern society is...', 'Health is bad.', 'Problem:'],
      ['According to recent research...', 'Someone said...', 'Study info:'],
      ['A simple way to improve this is...', 'Do this.', 'Small tip:'],
      ['It is important to be aware of the risks of...', 'Watch out.', 'Danger:'],
      ['The advantages of this approach include...', 'Good thing is...', 'Benefit:'],
      ['Contrary to popular belief...', 'Many people think wrong...', 'Myth:'],
      ['Taking small steps can lead to big changes.', 'Just do it.', 'Go!'],
      ['Recent data suggests that 30% of...', 'Lots of people...', 'Percent info:'],
      ['Further investigation is required.', 'Look for more.', 'More info needed.'],
      ['In summary, prioritize your health.', 'Health is key.', 'Final word:']
    ][i],
    correctAnswer: [
      'A growing concern in modern society is...',
      'According to recent research...',
      'A simple way to improve this is...',
      'It is important to be aware of the risks of...',
      'The advantages of this approach include...',
      'Contrary to popular belief...',
      'Taking small steps can lead to big changes.',
      'Recent data suggests that 30% of...',
      'Further investigation is required.',
      'In summary, prioritize your health.'
    ][i],
    explanation: 'Using appropriate register and structure for health-related informative writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING HEALTH TRENDS
// ============================================
export const B2_U9_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Expressing Doubt about Trends',
  explanation: 'Identify natural ways to show skepticism about new trends.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally express doubt about a new "superfood"?`,
    options: ['I take it with a pinch of salt.', 'I don\'t believe it.', 'It is not true.', 'I have doubt.'],
    correctAnswer: 'I take it with a pinch of salt.',
    explanation: 'Using idiomatic expressions in conversation.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U9_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 9',
  explanation: 'Consolidation of Unit 9 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct quantifier.' : 'Choose the correct fitness term.',
    options: i < 5 ? ['little', 'few', 'many'] : ['work out', 'jog', 'lift'],
    correctAnswer: i < 5 ? 'little' : 'work out',
    explanation: 'Review of Unit 9 concepts.',
    points: 1
  }))
};

export const B2_UNIT_9 = createB2Unit(
  'b2-u9',
  'Health & Fitness Trends',
  'Master quantifiers and explore modern health and fitness topics.',
  ['Use quantifiers correctly with countable and uncountable nouns', 'Understand health and fitness vocabulary', 'Discuss contemporary wellness trends'],
  [
    B2_U9_BLOCK1, B2_U9_BLOCK2, B2_U9_BLOCK3, B2_U9_BLOCK4, B2_U9_BLOCK5,
    B2_U9_BLOCK6, B2_U9_BLOCK7, B2_U9_BLOCK8, B2_U9_BLOCK9, B2_U9_BLOCK10
  ]
);
