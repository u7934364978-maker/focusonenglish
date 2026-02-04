import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 10;

// ============================================
// BLOCK 1: GRAMMAR - DEFINING RELATIVE CLAUSES
// ============================================
export const B2_U10_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Defining Relative Clauses',
  grammarPoint: 'Relative Clauses',
  explanation: 'Use who, whom, which, that, and whose to identify which person or thing you are talking about.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The scientist ___ discovered the new species won an award.',
      'This is the book ___ I was telling you about.',
      'The company ___ makes these panels is located in Spain.',
      'The man ___ house was destroyed by the flood is staying with us.',
      'Is this the city ___ you grew up?',
      'The person ___ you spoke to is the director.',
      'He is the athlete ___ won three gold medals.',
      'The trees ___ were planted last year are growing fast.',
      'I know a girl ___ father is a famous biologist.',
      'The documentary ___ we watched yesterday was very moving.'
    ][i],
    options: [
      ['who', 'which', 'whose'],
      ['that', 'who', 'whose'],
      ['which', 'who', 'whom'],
      ['whose', 'who', 'that'],
      ['where', 'which', 'that'],
      ['whom', 'whose', 'which'],
      ['who', 'which', 'whose'],
      ['that', 'who', 'whom'],
      ['whose', 'who', 'which'],
      ['which', 'who', 'whose']
    ][i],
    correctAnswer: [
      'who',
      'that',
      'which',
      'whose',
      'where',
      'whom',
      'who',
      'that',
      'whose',
      'which'
    ][i],
    explanation: 'Choosing the correct relative pronoun based on the antecedent (person, thing, possession, or place).',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - NON-DEFINING RELATIVE CLAUSES
// ============================================
export const B2_U10_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Non-Defining Relative Clauses',
  grammarPoint: 'Relative Clauses',
  explanation: 'Use commas to add extra information that is not essential to the sentence.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'My brother, ___ (who) lives in London, is visiting.',
      'Mount Everest, ___ (which) is the highest peak, is in the Himalayas.',
      'The Amazon rainforest, ___ (where) many species live, is under threat.',
      'Professor Smith, ___ (whose) research is famous, will give a talk.',
      'This laptop, ___ (which) I bought last week, is already broken.',
      'Paris, ___ (which) is known as the City of Light, is beautiful.',
      'The new law, ___ (which) aims to reduce plastic, was passed today.',
      'My neighbors, ___ (who) are very friendly, helped me move.',
      'The Nile, ___ (which) flows through Egypt, is the longest river.',
      'Solar energy, ___ (which) is a renewable source, is becoming cheaper.'
    ][i],
    correctAnswer: [
      'who',
      'which',
      'where',
      'whose',
      'which',
      'which',
      'which',
      'who',
      'which',
      'which'
    ][i],
    explanation: 'Using relative pronouns in non-defining clauses (note that "that" cannot be used here).',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - THE NATURAL WORLD
// ============================================
export const B2_U10_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'The Natural World',
  explanation: 'Vocabulary for landscapes, flora, and fauna.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The Amazon is a vast ___ (rainforest) with rich biodiversity.',
      'The arctic is a very harsh ___ (environment).',
      'Many species are at risk of ___ (extinction).',
      'We need to protect the natural ___ (habitat) of tigers.',
      'The mountains are covered in thick ___ (forests).',
      'The coastal ___ (erosion) is a serious problem.',
      'She is an expert in marine ___ (biology).',
      'The desert is a very dry ___ (landscape).',
      'We must preserve our ___ (ecosystems).',
      'The national park is home to rare ___ (wildlife).'
    ][i],
    correctAnswer: [
      'rainforest',
      'environment',
      'extinction',
      'habitat',
      'forests',
      'erosion',
      'biology',
      'landscape',
      'ecosystems',
      'wildlife'
    ][i],
    explanation: 'Common terms related to nature and conservation.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - SUSTAINABILITY & POLLUTION
// ============================================
export const B2_U10_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Sustainability and Pollution',
  explanation: 'Terms for environmental issues and green living.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'We should use more ___ (renewable) energy sources.',
      'Plastic pollution is a ___ (global) issue.',
      'Carbon ___ (footprint) is the amount of CO2 we produce.',
      'We need to ___ (recycle) more of our waste.',
      'Global ___ (warming) is causing ice caps to melt.',
      'The government introduced a tax on ___ (emissions).',
      'Organic farming is more ___ (sustainable).',
      'The air ___ (quality) in the city is very poor.',
      'We must reduce our ___ (consumption) of single-use plastics.',
      'Solar power is an alternative to ___ (fossil) fuels.'
    ][i],
    options: [
      ['renewable', 'reusable', 'repairable'],
      ['global', 'local', 'national'],
      ['footprint', 'handprint', 'step'],
      ['recycle', 'reuse', 'reduce'],
      ['warming', 'heating', 'cooling'],
      ['emissions', 'smoke', 'gas'],
      ['sustainable', 'strong', 'fixed'],
      ['quality', 'quantity', 'level'],
      ['consumption', 'usage', 'waste'],
      ['fossil', 'old', 'natural']
    ][i],
    correctAnswer: [
      'renewable',
      'global',
      'footprint',
      'recycle',
      'warming',
      'emissions',
      'sustainable',
      'quality',
      'consumption',
      'fossil'
    ][i],
    explanation: 'Key vocabulary for environmental discussions.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (ENVIRONMENT)
// ============================================
export const B2_U10_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Green Issues',
  explanation: 'Form words related to the environment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (ENVIRONMENT) impact of the factory is huge.',
      'We need to find a ___ (SUSTAIN) way to produce food.',
      '___ (POLLUTE) is a major problem in big cities.',
      'The ___ (PROTECT) of the oceans is vital.',
      'This product is very ___ (ECOLOGY).',
      'The ___ (DESTROY) of the forest must stop.',
      'We are looking for ___ (RENEW) energy solutions.',
      'The ___ (AWARE) of climate change is growing.',
      'His ___ (KNOW) of botany is impressive.',
      'The project was ___ (SUCCESS) in reducing waste.'
    ][i],
    correctAnswer: [
      'environmental',
      'sustainable',
      'pollution',
      'protection',
      'ecological',
      'destruction',
      'renewable',
      'awareness',
      'knowledge',
      'successful'
    ][i],
    explanation: 'Common word transformations in environmental contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - CLIMATE CHANGE
// ============================================
export const B2_U10_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The Melting Arctic',
  explanation: 'Read about the arctic changes and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Why are the ice caps melting?' : 'What is one consequence mentioned?',
    options: [['Rising temperatures', 'More rain', 'Ocean currents', 'Fishing'], ['Sea level rise', 'Bigger fish', 'More snow', 'Cold summers']][i % 2],
    correctAnswer: i < 5 ? 'Rising temperatures' : 'Sea level rise',
    explanation: 'Testing comprehension of environmental texts.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - RECYCLING PROGRAM
// ============================================
export const B2_U10_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: New Recycling Rules',
  explanation: 'Listen to the announcement about recycling and identify the correct instructions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `Where should glass bottles be placed?`,
    options: ['Green bin', 'Blue bin', 'Red bin', 'Yellow bin'],
    correctAnswer: 'Green bin',
    explanation: 'Identifying specific details in a spoken announcement.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - ESSAYS ON THE ENVIRONMENT
// ============================================
export const B2_U10_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Argumentative Essays',
  explanation: 'Choose the best phrase for an essay about climate change.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a topic:',
      'To express a personal opinion:',
      'To present an opposing view:',
      'To list points:',
      'To provide an example:',
      'To show cause and effect:',
      'To conclude:',
      'To emphasize a point:',
      'To refer to a common view:',
      'To suggest a solution:'
    ][i],
    options: [
      ['One of the most pressing issues is...', 'I like trees.', 'Nature is good.'],
      ['In my view, we must act now.', 'I think...', 'My idea:'],
      ['On the other hand, some argue that...', 'But some people...', 'Opposite view:'],
      ['Firstly, we must reduce waste.', 'One.', 'Number 1:'],
      ['For instance, many countries have banned...', 'Like...', 'Example:'],
      ['Consequently, sea levels are rising.', 'So...', 'Result:'],
      ['In conclusion, sustainability is key.', 'Bye.', 'Final point:'],
      ['It is crucial to understand that...', 'It is important.', 'Note:'],
      ['It is widely believed that...', 'Many people say...', 'Common thought:'],
      ['A possible solution would be to...', 'Maybe do this.', 'Fix:']
    ][i],
    correctAnswer: [
      'One of the most pressing issues is...',
      'In my view, we must act now.',
      'On the other hand, some argue that...',
      'Firstly, we must reduce waste.',
      'For instance, many countries have banned...',
      'Consequently, sea levels are rising.',
      'In conclusion, sustainability is key.',
      'It is crucial to understand that...',
      'It is widely believed that...',
      'A possible solution would be to...'
    ][i],
    explanation: 'Academic linking words and phrases for B2 level essays.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - SPECULATING ABOUT THE FUTURE
// ============================================
export const B2_U10_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Speculating about the Future',
  explanation: 'Identify natural ways to talk about future environmental possibilities.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally speculate about the future of energy?`,
    options: ['It is highly likely that solar power will dominate.', 'Maybe solar is good.', 'Solar will be the one.', 'I think solar.'],
    correctAnswer: 'It is highly likely that solar power will dominate.',
    explanation: 'Using degrees of certainty in speaking.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U10_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 10',
  explanation: 'Consolidation of Unit 10 topics.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'Choose the correct relative pronoun.' : 'Choose the correct environmental term.',
    options: i < 5 ? ['who', 'which', 'whose'] : ['renewable', 'sustainable', 'footprint'],
    correctAnswer: i < 5 ? 'which' : 'renewable',
    explanation: 'Review of Unit 10 concepts.',
    points: 1
  }))
};

export const B2_UNIT_10 = createB2Unit(
  'b2-u10',
  'Environmental Awareness',
  'Master relative clauses and discuss critical environmental issues.',
  ['Use defining and non-defining relative clauses correctly', 'Identify key vocabulary for nature and sustainability', 'Express opinions on climate change and green living'],
  [
    B2_U10_BLOCK1, B2_U10_BLOCK2, B2_U10_BLOCK3, B2_U10_BLOCK4, B2_U10_BLOCK5,
    B2_U10_BLOCK6, B2_U10_BLOCK7, B2_U10_BLOCK8, B2_U10_BLOCK9, B2_U10_BLOCK10
  ]
);
