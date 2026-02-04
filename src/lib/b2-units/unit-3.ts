import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 3;

// ============================================
// BLOCK 1: GRAMMAR - THE MORE..., THE MORE...
// ============================================
export const B2_U3_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Correlative Comparatives',
  grammarPoint: 'Advanced Comparatives',
  explanation: 'Use "The + comparative, the + comparative" to show how one thing depends on another.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (much) I know her, the ___ (much) I like her.',
      'The ___ (hard) you work, the ___ (good) your results will be.',
      'The ___ (soon), the ___ (good).',
      'The ___ (old) he gets, the ___ (wise) he becomes.',
      'The ___ (more) dangerous it is, the ___ (more) I enjoy it.',
      'The ___ (expensive) the car, the ___ (fast) it usually goes.',
      'The ___ (long) the wait, the ___ (impatient) I get.',
      'The ___ (less) you spend, the ___ (more) you save.',
      'The ___ (small) the apartment, the ___ (cheap) the rent.',
      'The ___ (high) you climb, the ___ (cold) it gets.'
    ][i],
    correctAnswer: [
      'more, more',
      'harder, better',
      'sooner, better',
      'older, wiser',
      'more, more',
      'more expensive, faster',
      'longer, more impatient',
      'less, more',
      'smaller, cheaper',
      'higher, colder'
    ][i],
    explanation: 'Standard correlative comparative structure.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - AS...AS / NOT AS...AS / FAR MORE...
// ============================================
export const B2_U3_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Advanced Comparison Structures',
  grammarPoint: 'Advanced Comparatives',
  explanation: 'Using modifiers like "far", "slightly", "by far" and "as...as".',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'She is ___ intelligent as her sister.',
      'This car is ___ more expensive than my old one.',
      'He is ___ the best player in the team.',
      'It\'s ___ colder today than it was yesterday.',
      'The test was ___ as difficult as I expected.',
      'He is not ___ ambitious as his father.',
      'This book is ___ more interesting than the last one.',
      'It\'s getting ___ and ___ difficult to find a job.',
      'She is ___ taller than me.',
      'This is ___ the most beautiful place I\'ve seen.'
    ][i],
    options: [
      ['as', 'so', 'more'],
      ['far', 'more', 'much'],
      ['by far', 'much', 'far'],
      ['slightly', 'bit', 'few'],
      ['just', 'only', 'more'],
      ['so', 'as', 'more'],
      ['considerably', 'much', 'far'],
      ['more / more', 'better / better', 'harder / harder'],
      ['slightly', 'few', 'small'],
      ['easily', 'much', 'far']
    ][i],
    correctAnswer: [
      'as',
      'far',
      'by far',
      'slightly',
      'just',
      'so',
      'considerably',
      'more / more',
      'slightly',
      'easily'
    ][i],
    explanation: 'Nuanced comparisons using modifiers.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CHARACTER TRAITS (POSITIVE)
// ============================================
export const B2_U3_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Positive Character Traits',
  explanation: 'Adjectives to describe good qualities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'multiple-choice',
    question: [
      'Someone who is sensible and can be trusted is ___.',
      'A person who is very determined to succeed is ___.',
      'Someone who is happy and energetic is ___.',
      'If you are kind and helpful, you are ___.',
      'A person who thinks of others before themselves is ___.',
      'Someone who is calm and controlled is ___.',
      'If you have a lot of new ideas, you are ___.',
      'A person who is good at making decisions is ___.',
      'Someone who is very intelligent is ___.',
      'If you are always honest, you are ___.'
    ][i],
    options: [
      ['reliable', 'stubborn', 'moody'],
      ['ambitious', 'lazy', 'shy'],
      ['cheerful', 'dull', 'clumsy'],
      ['considerate', 'mean', 'selfish'],
      ['selfless', 'greedy', 'vain'],
      ['composed', 'anxious', 'wild'],
      ['creative', 'boring', 'dull'],
      ['decisive', 'hesitant', 'weak'],
      ['bright', 'dim', 'slow'],
      ['trustworthy', 'deceitful', 'sly']
    ][i],
    correctAnswer: [
      'reliable',
      'ambitious',
      'cheerful',
      'considerate',
      'selfless',
      'composed',
      'creative',
      'decisive',
      'bright',
      'trustworthy'
    ][i],
    explanation: 'Expanding B2 level personality vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - CHARACTER TRAITS (NEGATIVE)
// ============================================
export const B2_U3_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Negative Character Traits',
  explanation: 'Adjectives to describe challenging qualities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'fill-blank',
    question: [
      'He is so ___ (stubborn) that he never admits he is wrong.',
      'She is very ___ (vain) and spends hours in front of the mirror.',
      'Don\'t be so ___ (selfish); share your toys.',
      'He is quite ___ (moody); you never know how he will react.',
      'She is too ___ (gullible); she believes everything you tell her.',
      'He can be very ___ (arrogant) about his achievements.',
      'She is a bit ___ (clumsy) and always drops things.',
      'He is very ___ (possessive) of his belongings.',
      'She is quite ___ (cynical) about people\'s motives.',
      'He is a ___ (prejudiced) person who doesn\'t like change.'
    ][i],
    correctAnswer: [
      'stubborn',
      'vain',
      'selfish',
      'moody',
      'gullible',
      'arrogant',
      'clumsy',
      'possessive',
      'cynical',
      'prejudiced'
    ][i],
    explanation: 'Describing negative or difficult traits.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ADJECTIVES)
// ============================================
export const B2_U3_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Personality',
  explanation: 'Form adjectives from the given nouns or verbs.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'She is very ___ (IMAGINATION).',
      'He is highly ___ (COMPETE).',
      'The child is quite ___ (OBEY).',
      'She has a very ___ (SENSE) approach to life.',
      'He is an ___ (ADVENTURE) traveler.',
      'She is very ___ (SYMPATHY) to others.',
      'He is a ___ (RELY) worker.',
      'She is extremely ___ (TALENT).',
      'He is very ___ (REBELLION) for his age.',
      'She is a ___ (SOCIETY) person.'
    ][i],
    correctAnswer: [
      'imaginative',
      'competitive',
      'obedient',
      'sensible',
      'adventurous',
      'sympathetic',
      'reliable',
      'talented',
      'rebellious',
      'sociable'
    ][i],
    explanation: 'Suffixes for forming personality adjectives.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - PERSONALITY PROFILES
// ============================================
export const B2_U3_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Five Factor Model',
  explanation: 'Read the descriptions of personality types and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Which trait is associated with being organized and dependable?' : 'What does "extraversion" primarily refer to?',
    options: [['Conscientiousness', 'Agreeableness', 'Openness', 'Neuroticism'], ['Social energy', 'Internal thoughts', 'Physical strength', 'Intelligence']][i % 2],
    correctAnswer: i < 5 ? 'Conscientiousness' : 'Social energy',
    explanation: 'Comprehending psychology-related vocabulary.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - DESCRIBING PEOPLE
// ============================================
export const B2_U3_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: First Impressions',
  explanation: 'Listen to descriptions of people and choose the best adjective.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Speaker ${i + 1} is describing their new boss. The boss is ___.`,
    options: ['Demanding', 'Easy-going', 'Incompetent', 'Strict'],
    correctAnswer: 'Demanding',
    explanation: 'Identifying character from spoken descriptions.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - FORMAL VS INFORMAL
// ============================================
export const B2_U3_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Describing a Person',
  explanation: 'Choose the most appropriate phrase for a formal character reference.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To describe a hard worker formally:',
      'To mention someone is friendly:',
      'To say someone is intelligent:',
      'To describe someone as reliable:',
      'To mention leadership skills:',
      'To describe communication skills:',
      'To mention punctuality:',
      'To say someone is creative:',
      'To conclude a reference:',
      'To address the recipient:'
    ][i],
    options: [
      ['Diligence and dedication', 'He works a lot', 'Always busy'],
      ['Excellent interpersonal skills', 'He is nice', 'Good guy'],
      ['Highly intellectual', 'Very smart', 'Brainy'],
      ['Consistently dependable', 'Always shows up', 'Good for it'],
      ['Strong leadership qualities', 'Bossy', 'Can lead people'],
      ['Articulate and persuasive', 'Good talker', 'Talks well'],
      ['Impeccable punctuality', 'Never late', 'On time'],
      ['Innovative and creative', 'Lots of ideas', 'Fancy thinker'],
      ['I highly recommend him', 'He\'s great', 'Hire him'],
      ['To Whom It May Concern', 'Hi everyone', 'Dear people']
    ][i],
    correctAnswer: [
      'Diligence and dedication',
      'Excellent interpersonal skills',
      'Highly intellectual',
      'Consistently dependable',
      'Strong leadership qualities',
      'Articulate and persuasive',
      'Impeccable punctuality',
      'Innovative and creative',
      'I highly recommend him',
      'To Whom It May Concern'
    ][i],
    explanation: 'Formal register for professional descriptions.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - COMPARING PEOPLE
// ============================================
export const B2_U3_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Comparing People',
  explanation: 'Identify natural comparison phrases.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `Which is the most natural way to say two people are very similar?`,
    options: ['They are like two peas in a pod.', 'They are identical units.', 'They match each other.', 'They have the same personality.'],
    correctAnswer: 'They are like two peas in a pod.',
    explanation: 'Using idioms and natural expressions in speaking.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U3_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 3',
  explanation: 'Consolidation of Unit 3 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct "the more... the more" structure.' : 'Choose the best adjective for the description.',
    options: i < 5 ? ['The more I study, the better I feel.', 'More I study, more I feel better.', 'The more I study, more I feel better.'] : ['Ambitious', 'Selfish', 'Reliable'],
    correctAnswer: i < 5 ? 'The more I study, the better I feel.' : 'Ambitious',
    explanation: 'Review of Unit 3 concepts.',
    points: 1
  }))
};

export const B2_UNIT_3 = createB2Unit(
  'b2-u3',
  'Personality & Character Traits',
  'Learn advanced comparisons and describe people in detail.',
  ['Use correlative comparatives', 'Describe complex character traits', 'Use formal register for descriptions'],
  [
    B2_U3_BLOCK1, B2_U3_BLOCK2, B2_U3_BLOCK3, B2_U3_BLOCK4, B2_U3_BLOCK5,
    B2_U3_BLOCK6, B2_U3_BLOCK7, B2_U3_BLOCK8, B2_U3_BLOCK9, B2_U3_BLOCK10
  ]
);
