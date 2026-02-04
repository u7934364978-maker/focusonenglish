import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 23;

// ============================================
// BLOCK 1: GRAMMAR - MIXED CONDITIONALS (TYPE 3/2)
// ============================================
export const B2_U23_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Mixed Conditionals: Past to Present',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'Use (If + past perfect, would + infinitive) to talk about a hypothetical past situation with a present consequence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'If we had taken action earlier, the planet ___ (be) in better shape now.',
      'I ___ (not/be) so tired if I had gone to bed early.',
      'If she had studied botany, she ___ (work) in a lab today.',
      'We ___ (have) more water if it had rained last month.',
      'If the law had been passed, the air ___ (be) cleaner now.',
      'I ___ (know) how to use this app if I had read the manual.',
      'If they had invested in solar, they ___ (save) money now.',
      'We ___ (be) lost if we hadn\'t brought a map.',
      'If he had been more careful, he ___ (not/be) in hospital today.',
      'If I had finished my work, I ___ (go) out tonight.'
    ][i],
    options: [
      ['would be', 'would have been', 'will be'],
      ['wouldn\'t be', 'wouldn\'t have been', 'weren\'t'],
      ['would work', 'would have worked', 'works'],
      ['would have', 'would have had', 'will have'],
      ['would be', 'would have been', 'is'],
      ['would know', 'would have known', 'know'],
      ['would save', 'would have saved', 'save'],
      ['would be', 'would have been', 'are'],
      ['wouldn\'t be', 'wouldn\'t have been', 'isn\'t'],
      ['would go', 'would have gone', 'will go']
    ][i],
    correctAnswer: [
      'would be',
      'wouldn\'t be',
      'would work',
      'would have',
      'would be',
      'would know',
      'would save',
      'would be',
      'wouldn\'t be',
      'would go'
    ][i],
    explanation: 'Connecting a past condition to a present result.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - MIXED CONDITIONALS (TYPE 2/3)
// ============================================
export const B2_U23_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Mixed Conditionals: Present to Past',
  grammarPoint: 'Mixed Conditionals',
  explanation: 'Use (If + past simple, would have + past participle) to talk about a hypothetical present state with a past consequence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'If I ___ (be) braver, I would have spoken to him yesterday.',
      'If she ___ (speak) French, she would have got the job in Paris.',
      'If we ___ (be) richer, we would have bought that house.',
      'I would have called you if I ___ (not/be) so busy these days.',
      'If he ___ (not/be) so lazy, he would have finished the project.',
      'If they ___ (have) more time, they would have visited us.',
      'We would have gone to the beach if the weather ___ (be) better lately.',
      'If I ___ (know) the answer, I would have told you.',
      'If she ___ (be) taller, she would have played basketball.',
      'If we ___ (live) in the city, we would have gone to the theater.'
    ][i],
    correctAnswer: [
      'were',
      'spoke',
      'were',
      'weren\'t',
      'weren\'t',
      'had',
      'were',
      'knew',
      'were',
      'lived'
    ][i],
    explanation: 'Connecting a general/present state to a past result.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - ENVIRONMENTAL CHALLENGES
// ============================================
export const B2_U23_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Environmental Crisis',
  explanation: 'Vocabulary for discussing the state of the planet.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (depletion) of natural resources is a major concern.',
      '___ (Overfishing) is destroying marine ecosystems.',
      'The ___ (scarcity) of water is affecting millions.',
      '___ (Deforestation) leads to habitat loss.',
      'We need to reduce our ___ (dependence) on fossil fuels.',
      'The ___ (contamination) of the soil is a serious problem.',
      '___ (Desertification) is turning fertile land into desert.',
      'The ___ (extinction) of species is accelerating.',
      '___ (Pollution) levels are rising in the oceans.',
      'The ___ (imbalance) in the ecosystem is dangerous.'
    ][i],
    correctAnswer: [
      'depletion',
      'Overfishing',
      'scarcity',
      'Deforestation',
      'dependence',
      'contamination',
      'Desertification',
      'extinction',
      'Pollution',
      'imbalance'
    ][i],
    explanation: 'Vocabulary for environmental degradation.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - ECOLOGICAL SOLUTIONS
// ============================================
export const B2_U23_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Going Green',
  explanation: 'Terms for ecological conservation and restoration.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We need to ___ (restore) the natural habitat.',
      '___ (Reforestation) is key to capturing carbon.',
      'The ___ (transition) to renewable energy is essential.',
      'We must ___ (conserve) water during the drought.',
      '___ (Sustainability) should be at the heart of policy.',
      'We need to ___ (mitigate) the effects of climate change.',
      '___ (Preservation) of the rainforest is vital.',
      'We should ___ (promote) eco-friendly tourism.',
      '___ (Alternative) energy sources are becoming cheaper.',
      'The ___ (protection) of endangered species is a priority.'
    ][i],
    options: [
      ['restore', 'make', 'fix'],
      ['Reforestation', 'Gardening', 'Planting'],
      ['transition', 'move', 'shift'],
      ['conserve', 'save', 'hold'],
      ['Sustainability', 'Strength', 'Power'],
      ['mitigate', 'lessen', 'stop'],
      ['Preservation', 'Saving', 'Keeping'],
      ['promote', 'show', 'make'],
      ['Alternative', 'New', 'Other'],
      ['protection', 'safety', 'guard']
    ][i],
    correctAnswer: [
      'restore',
      'Reforestation',
      'transition',
      'conserve',
      'Sustainability',
      'mitigate',
      'Preservation',
      'promote',
      'Alternative',
      'protection'
    ][i],
    explanation: 'Vocabulary for ecological restoration and sustainability.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (NATURE)
// ============================================
export const B2_U23_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Ecological Terms',
  explanation: 'Form words related to the environment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (DESTRUCT) of the reefs is tragic.',
      'We need to improve our ___ (EFFICIENT) in water use.',
      'The ___ (STABLE) of the climate is at stake.',
      'There is a lot of ___ (VULNERABLE) in coastal areas.',
      '___ (AWARE) is the first step to change.',
      'The ___ (SURVIVE) of the species is in danger.',
      'The ___ (BENEFIT) effects of trees are well-known.',
      'The ___ (GROWTH) of the green sector is positive.',
      'We need an ___ (OBJECT) view on the data.',
      'The ___ (SIGNIFICANT) of this discovery is huge.'
    ][i],
    correctAnswer: [
      'destruction',
      'efficiency',
      'stability',
      'vulnerability',
      'Awareness',
      'survival',
      'beneficial',
      'growth',
      'objective',
      'significance'
    ][i],
    explanation: 'Standard word formation transformations.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE IMPACT OF OVERFISHING
// ============================================
export const B2_U23_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Empty Oceans',
  explanation: 'Read the article about marine life depletion and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is "bycatch"?' : 'What is the consequence of removing top predators?',
    options: [['Unwanted fish caught in nets', 'The best fish', 'A type of net', 'Small fish'], ['The whole ecosystem collapses', 'More fish for everyone', 'The ocean gets cleaner', 'Nothing happens']][i % 2],
    correctAnswer: i < 5 ? 'Unwanted fish caught in nets' : 'The whole ecosystem collapses',
    explanation: 'Reading for specific terminology and consequences.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - SUSTAINABILITY PODCAST
// ============================================
export const B2_U23_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Small Changes, Big Impact',
  explanation: 'Listen to the expert and identify the most effective lifestyle changes.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the first tip mentioned?`,
    options: ['Reducing meat consumption', 'Using less plastic', 'Flying less', 'Buying local'],
    correctAnswer: 'Reducing meat consumption',
    explanation: 'Listening for main points and sequence.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - DISCURSIVE ARTICLES
// ============================================
export const B2_U23_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Argumentative Writing on the Environment',
  explanation: 'Choose the best phrase for a discursive article about sustainability.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To open the debate:',
      'To present a counter-argument:',
      'To emphasize a point:',
      'To provide a practical example:',
      'To mention scientific evidence:',
      'To show cause and effect:',
      'To suggest a future consequence:',
      'To conclude with a summary:',
      'To end with a call to action:',
      'To show a personal opinion:'
    ][i],
    options: [
      ['It is often argued that...', 'Some people say...', 'Look:'],
      ['On the other hand, others claim that...', 'But some say...', 'Opposite view:'],
      ['It is crucial to understand that...', 'It is important.', 'Note:'],
      ['For instance, switching to solar can...', 'Like...', 'Example:'],
      ['Recent research has shown that...', 'Studies say...', 'Info:'],
      ['As a result, biodiversity is declining.', 'So...', 'Result:'],
      ['If we don\'t act, the consequences will be...', 'Later...', 'Soon:'],
      ['In conclusion, a balanced approach is key.', 'Bye.', 'Final word:'],
      ['The time to act is now.', 'Do it now.', 'Go!'],
      ['In my view, we must prioritize...', 'I think...', 'My idea:']
    ][i],
    correctAnswer: [
      'It is often argued that...',
      'On the other hand, others claim that...',
      'It is crucial to understand that...',
      'For instance, switching to solar can...',
      'Recent research has shown that...',
      'As a result, biodiversity is declining.',
      'If we don\'t act, the consequences will be...',
      'In conclusion, a balanced approach is key.',
      'The time to act is now.',
      'In my view, we must prioritize...'
    ][i],
    explanation: 'Using sophisticated linking devices for B2 essays.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - HYPOTHESIZING ABOUT THE PAST
// ============================================
export const B2_U23_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: What if things had been different?',
  explanation: 'Identify natural ways to talk about hypothetical pasts.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally hypothesize about the impact of an old law?`,
    options: ['If that law had been passed, things would be different now.', 'If law was there, things are good.', 'The law was bad.', 'We need law.'],
    correctAnswer: 'If that law had been passed, things would be different now.',
    explanation: 'Using mixed conditionals for nuanced speculation.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U23_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 23',
  explanation: 'Consolidation of Mixed Conditionals and Environment Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'If I ___ (be) richer, I would have bought that.' : 'We ___ (not/be) here now if we hadn\'t taken the map.',
    options: i < 5 ? ['were', 'had been', 'was'] : ['wouldn\'t be', 'wouldn\'t have been', 'weren\'t'],
    correctAnswer: i < 5 ? 'were' : 'wouldn\'t be',
    explanation: 'Review of mixed conditional structures.',
    points: 1
  }))
};

export const B2_UNIT_23 = createB2Unit(
  'b2-u23',
  'Mixed Conditionals',
  'Master the complexity of mixed conditionals while discussing environmental challenges and solutions.',
  ['Connect hypothetical past events to present results (Type 3/2)', 'Connect present hypothetical states to past results (Type 2/3)', 'Use vocabulary for environmental crisis and ecological restoration'],
  [
    B2_U23_BLOCK1, B2_U23_BLOCK2, B2_U23_BLOCK3, B2_U23_BLOCK4, B2_U23_BLOCK5,
    B2_U23_BLOCK6, B2_U23_BLOCK7, B2_U23_BLOCK8, B2_U23_BLOCK9, B2_U23_BLOCK10
  ]
);
