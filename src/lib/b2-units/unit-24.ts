import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 24;

// ============================================
// BLOCK 1: GRAMMAR - ALL-CLEFT SENTENCES
// ============================================
export const B2_U24_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'All-Cleft Sentences',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Use "All + clause + is/was + focus" to emphasize that only one thing is/was needed or happened.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'I want justice. -> ___ I want is justice.',
      'He said "hello". -> ___ he said was "hello".',
      'She did was cry. -> ___ she did was cry.',
      'They need is a chance. -> ___ they need is a chance.',
      'I heard was a loud noise. -> ___ I heard was a loud noise.',
      'He wants is to be heard. -> ___ he wants is to be heard.',
      'She wrote was a short note. -> ___ she wrote was a short note.',
      'We saw was a bird. -> ___ we saw was a bird.',
      'He does is complain. -> ___ he does is complain.',
      'I want for Christmas is you. -> ___ I want for Christmas is you.'
    ][i],
    options: [['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That'], ['All', 'What', 'That']][i % 1],
    correctAnswer: 'All',
    explanation: 'Using "All" to create a cleft sentence for emphasis.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - TIME, PLACE, AND REASON CLEFTS
// ============================================
export const B2_U24_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Time, Place, and Reason Clefts',
  grammarPoint: 'Cleft Sentences',
  explanation: 'Use "The time/place/reason... is/was..." to focus on when, where, or why something happened.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      '___ (reason) I am here is to help.',
      '___ (time) I saw him was last Sunday.',
      '___ (place) we met was in London.',
      '___ (reason) she left was the noise.',
      '___ (time) the accident happened was at night.',
      '___ (place) I grew up was a small village.',
      '___ (reason) they failed was lack of planning.',
      '___ (time) I finish work is at 5 PM.',
      '___ (place) he lives is very quiet.',
      '___ (reason) I am calling is to confirm.'
    ][i],
    correctAnswer: [
      'The reason',
      'The time',
      'The place',
      'The reason',
      'The time',
      'The place',
      'The reason',
      'The time',
      'The place',
      'The reason'
    ][i],
    explanation: 'Using noun-based clefts to focus on specific aspects of a situation.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - SOCIAL JUSTICE
// ============================================
export const B2_U24_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Social Justice Concepts',
  explanation: 'Terms for fairness, rights, and equality.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'We must strive for social ___ (justice).',
      'Human ___ (rights) are universal.',
      'We need to fight for ___ (equality) for all.',
      'Economic ___ (inequality) is a global problem.',
      '___ (Fairness) is the foundation of a good society.',
      'We should protect the most ___ (vulnerable) members of society.',
      '___ (Privilege) often goes unnoticed by those who have it.',
      'We must promote ___ (inclusion) in all areas of life.',
      '___ (Diversity) makes our community stronger.',
      'We need to address the root ___ (causes) of poverty.'
    ][i],
    correctAnswer: [
      'justice',
      'rights',
      'equality',
      'inequality',
      'Fairness',
      'vulnerable',
      'Privilege',
      'inclusion',
      'Diversity',
      'causes'
    ][i],
    explanation: 'Core vocabulary for discussing social justice.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - INEQUALITY & DISCRIMINATION
// ============================================
export const B2_U24_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Inequality and Bias',
  explanation: 'Terms for the obstacles to social justice.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      '___ (Discrimination) is still a reality for many.',
      'We must eliminate ___ (prejudice) and bias.',
      'The ___ (gender) pay gap is a form of inequality.',
      '___ (Systemic) racism is built into institutions.',
      'Many people face ___ (barriers) to education.',
      '___ (Marginalized) groups often lack a voice.',
      'We need to overcome social ___ (stigma).',
      '___ (Oppression) has many forms.',
      'The ___ (gap) between the rich and poor is widening.',
      'We must stand up against ___ (injustice).'
    ][i],
    options: [
      ['Discrimination', 'Inclusion', 'Fairness'],
      ['prejudice', 'friendship', 'kindness'],
      ['gender', 'job', 'money'],
      ['Systemic', 'Personal', 'Small'],
      ['barriers', 'doors', 'gates'],
      ['Marginalized', 'Large', 'Rich'],
      ['stigma', 'mark', 'name'],
      ['Oppression', 'Freedom', 'Peace'],
      ['gap', 'hole', 'door'],
      ['injustice', 'justice', 'right']
    ][i],
    correctAnswer: [
      'Discrimination',
      'prejudice',
      'gender',
      'Systemic',
      'barriers',
      'Marginalized',
      'stigma',
      'Oppression',
      'gap',
      'injustice'
    ][i],
    explanation: 'Vocabulary for the challenges and negatives in society.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (JUSTICE)
// ============================================
export const B2_U24_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Ethics and Society',
  explanation: 'Form words related to justice and equality.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (EQUAL) of all people is a basic principle.',
      'We must fight against ___ (JUST).',
      'Her ___ (GENEROUS) was inspiring.',
      'The ___ (POOR) in this area is shocking.',
      'We need a more ___ (INCLUSION) society.',
      'The ___ (DIVERSE) of the city is its strength.',
      'He is a very ___ (INFLUENCE) speaker on human rights.',
      'The ___ (RESPONSIBLE) of the government is clear.',
      'The ___ (VULNERABLE) of children must be protected.',
      'She showed great ___ (BRAVE) in the face of adversity.'
    ][i],
    correctAnswer: [
      'equality',
      'injustice',
      'generosity',
      'poverty',
      'inclusive',
      'diversity',
      'influential',
      'responsibility',
      'vulnerability',
      'bravery'
    ][i],
    explanation: 'Forming nouns and adjectives in an ethical context.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE FIGHT FOR EQUAL PAY
// ============================================
export const B2_U24_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Closing the Gap',
  explanation: 'Read the article about equal pay and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the "gender pay gap"?' : 'What is one proposed solution?',
    options: [['The difference in earnings between men and women', 'Men working more than women', 'Women being better at jobs', 'Both earning the same'], ['Transparency in salaries', 'Paying everyone less', 'Stopping all work', 'More taxes']][i % 2],
    correctAnswer: i < 5 ? 'The difference in earnings between men and women' : 'Transparency in salaries',
    explanation: 'Understanding economic and social justice arguments.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SPEECH ON CIVIL RIGHTS
// ============================================
export const B2_U24_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: A Voice for the Voiceless',
  explanation: 'Listen to the speech and identifies the main call to action.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What does the speaker believe is the first step to justice?`,
    options: ['Acknowledging the problem', 'Ignoring the past', 'Making more money', 'Traveling abroad'],
    correctAnswer: 'Acknowledging the problem',
    explanation: 'Listening for core messages and foundational arguments.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - OPINION ARTICLES
// ============================================
export const B2_U24_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Persuasive Writing on Social Justice',
  explanation: 'Choose the best phrase for an opinion piece about inequality.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To open with a strong statement:',
      'To define a problem:',
      'To provide a personal anecdote:',
      'To cite a statistic:',
      'To emphasize the human cost:',
      'To address the reader directly:',
      'To challenge a common myth:',
      'To propose a structural change:',
      'To conclude with a vision:',
      'To show a sense of urgency:'
    ][i],
    options: [
      ['Injustice anywhere is a threat to justice everywhere.', 'It is bad.', 'Life is not fair.'],
      ['The issue at heart is the deep-seated inequality in...', 'The problem is:', 'This is wrong:'],
      ['I have seen first-hand the impact of...', 'My friend told me...', 'Story:'],
      ['Studies show that 1 in 5 people face...', 'Lots of people...', 'Percent info:'],
      ['Beyond the numbers, these are real lives at stake.', 'People are sad.', 'Cost:'],
      ['We must ask ourselves what kind of world we want.', 'You must think.', 'Think!'],
      ['Contrary to popular belief, poverty is not a choice.', 'Many think wrong.', 'Myth:'],
      ['We need to reform the entire system from the ground up.', 'Change everything.', 'Reform:'],
      ['Imagine a world where equality is a reality.', 'One day...', 'Hope:'],
      ['We cannot afford to wait another day.', 'Act now!', 'Hurry.']
    ][i],
    correctAnswer: [
      'Injustice anywhere is a threat to justice everywhere.',
      'The issue at heart is the deep-seated inequality in...',
      'I have seen first-hand the impact of...',
      'Studies show that 1 in 5 people face...',
      'Beyond the numbers, these are real lives at stake.',
      'We must ask ourselves what kind of world we want.',
      'Contrary to popular belief, poverty is not a choice.',
      'We need to reform the entire system from the ground up.',
      'Imagine a world where equality is a reality.',
      'We cannot afford to wait another day.'
    ][i],
    explanation: 'Using emotive and powerful language for social advocacy.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - EMPHASIZING KEY POINTS
// ============================================
export const B2_U24_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Making Your Voice Heard',
  explanation: 'Identify effective ways to emphasize your main point during a discussion.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally emphasize the most important thing you want?`,
    options: ['The main thing I want is to see real change.', 'I want change.', 'Change is good.', 'Give me change.'],
    correctAnswer: 'The main thing I want is to see real change.',
    explanation: 'Using noun-based clefts for emphasis in speech.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U24_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 24',
  explanation: 'Consolidation of Cleft Sentences and Social Justice Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'All I need ___ (be) a chance.' : 'The reason ___ I came was to help.',
    options: i < 5 ? ['is', 'are', 'was'] : ['why', 'that', 'which'],
    correctAnswer: i < 5 ? 'is' : 'why',
    explanation: 'Review of emphasis structures and relative adverbs in clefts.',
    points: 1
  }))
};

export const B2_UNIT_24 = createB2Unit(
  'b2-u24',
  'Social Justice',
  'Master the art of emphasis with advanced cleft sentences while exploring the critical issues of justice and inequality.',
  ['Use "All" clefts and time/place/reason clefts for emphasis', 'Understand key vocabulary for social justice and discrimination', 'Write and analyze persuasive arguments for social change'],
  [
    B2_U24_BLOCK1, B2_U24_BLOCK2, B2_U24_BLOCK3, B2_U24_BLOCK4, B2_U24_BLOCK5,
    B2_U24_BLOCK6, B2_U24_BLOCK7, B2_U24_BLOCK8, B2_U24_BLOCK9, B2_U24_BLOCK10
  ]
);
