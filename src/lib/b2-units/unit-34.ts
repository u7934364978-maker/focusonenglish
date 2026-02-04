import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 34;

// ============================================
// BLOCK 1: GRAMMAR - THE... THE... STRUCTURE
// ============================================
export const B2_U34_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Advanced Comparatives: The... The...',
  grammarPoint: 'Comparatives',
  explanation: 'Use "the + comparative, the + comparative" to show that two things change together.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The ___ (big) the city, the ___ (busy) the life.',
      'The ___ (much) you earn, the ___ (high) the cost of living.',
      'The ___ (soon) we leave, the ___ (early) we arrive.',
      'The ___ (far) you live, the ___ (long) the commute.',
      'The ___ (quiet) the village, the ___ (peaceful) the nights.',
      'The ___ (polluted) the air, the ___ (bad) for your health.',
      'The ___ (many) people there are, the ___ (crowded) it feels.',
      'The ___ (well) you plan, the ___ (easy) it is to move.',
      'The ___ (old) the buildings, the ___ (charming) the street.',
      'The ___ (low) the price, the ___ (attractive) the house.'
    ][i],
    options: [
      ['bigger / busier', 'biggest / busiest', 'big / busy'],
      ['more / higher', 'most / highest', 'much / high'],
      ['sooner / earlier', 'soonest / earliest', 'soon / early'],
      ['farther / longer', 'farthest / longest', 'far / long'],
      ['quieter / more peaceful', 'quietest / most peaceful', 'quiet / peaceful'],
      ['more polluted / worse', 'most polluted / worst', 'polluted / bad'],
      ['more / more crowded', 'most / most crowded', 'many / crowded'],
      ['better / easier', 'best / easiest', 'well / easy'],
      ['older / more charming', 'oldest / most charming', 'old / charming'],
      ['lower / more attractive', 'lowest / most attractive', 'low / attractive']
    ][i],
    correctAnswer: [
      'bigger / busier',
      'more / higher',
      'sooner / earlier',
      'farther / longer',
      'quieter / more peaceful',
      'more polluted / worse',
      'more / more crowded',
      'better / easier',
      'older / more charming',
      'lower / more attractive'
    ][i],
    explanation: 'Maintaining the parallel comparative structure for related changes.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - DOUBLE COMPARATIVES & AS... AS...
// ============================================
export const B2_U34_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Advanced Comparatives: Emphasis',
  grammarPoint: 'Comparatives',
  explanation: 'Use double comparatives (more and more) for continuing change, and "not so much... as..." for specific comparisons.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'It is becoming ___ and ___ (difficult) to find a cheap flat.',
      'Cities are getting ___ and ___ (crowded) every year.',
      'The commute is getting ___ and ___ (long) due to traffic.',
      'Life in the country is not ___ (stressful) as in the city.',
      'He is not so ___ (much) a farmer as a gardener.',
      'The prices are getting ___ and ___ (high).',
      'Public transport is getting ___ and ___ (efficient).',
      'It\'s not ___ (easy) as it used to be.',
      'The air is getting ___ and ___ (clean) in some areas.',
      'The village is getting ___ and ___ (quiet) as people leave.'
    ][i],
    correctAnswer: [
      'more and more difficult',
      'more and more crowded',
      'longer and longer',
      'so stressful',
      'much',
      'higher and higher',
      'more and more efficient',
      'as easy',
      'cleaner and cleaner',
      'quieter and quieter'
    ][i],
    explanation: 'Using repetitive comparatives and "as... as" variations for emphasis.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - CITY LIFE & AMENITIES
// ============================================
export const B2_U34_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Urban Living',
  explanation: 'Terms for city infrastructure and urban experiences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The city has an excellent public transport ___ (network).',
      'We live in the ___ (suburbs) and commute every day.',
      'The ___ (skyscrapers) dominate the skyline.',
      'There is a lot of ___ (congestion) in the city center.',
      'The ___ (amenities) in this neighborhood are great.',
      'He enjoys the ___ (hustle) and bustle of city life.',
      'The area is undergoing ___ (gentrification).',
      'They live in a high-rise ___ (apartment) block.',
      'The city is known for its vibrant ___ (cultural) scene.',
      'We often spend time in the local ___ (parks).'
    ][i],
    correctAnswer: [
      'network',
      'suburbs',
      'skyscrapers',
      'congestion',
      'amenities',
      'hustle',
      'gentrification',
      'apartment',
      'cultural',
      'parks'
    ][i],
    explanation: 'Core vocabulary for describing urban environments.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - RURAL LIFE & LANDSCAPES
// ============================================
export const B2_U34_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'Country Living',
  explanation: 'Terms for rural areas and the natural environment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'The village is surrounded by beautiful ___ (countryside).',
      'We enjoy the ___ (tranquility) of the rural area.',
      'There are many ___ (quaint) cottages in the village.',
      'The area is known for its ___ (breath-taking) views.',
      'He works on a small family ___ (farm).',
      'The ___ (pace) of life is much slower here.',
      'They went for a walk in the ___ (rolling) hills.',
      'The village is quite ___ (isolated) and remote.',
      'We love the ___ (fresh) air and green spaces.',
      'It\'s a very ___ (tight-knit) community.'
    ][i],
    options: [
      ['countryside', 'land', 'grass'],
      ['tranquility', 'quiet', 'rest'],
      ['quaint', 'old', 'strange'],
      ['breath-taking', 'big', 'nice'],
      ['farm', 'field', 'ground'],
      ['pace', 'speed', 'way'],
      ['rolling', 'moving', 'falling'],
      ['isolated', 'alone', 'lonely'],
      ['fresh', 'new', 'clean'],
      ['tight-knit', 'close', 'friendly']
    ][i],
    correctAnswer: [
      'countryside',
      'tranquility',
      'quaint',
      'breath-taking',
      'farm',
      'pace',
      'rolling',
      'isolated',
      'fresh',
      'tight-knit'
    ][i],
    explanation: 'Essential terms for describing life outside the city.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (URBANIZATION)
// ============================================
export const B2_U34_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Changing Landscapes',
  explanation: 'Form words related to growth and development.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'The ___ (GROW) of the city is incredible.',
      'We need more ___ (SUSTAIN) urban planning.',
      'The ___ (POPULATE) is increasing rapidly.',
      'It was a very ___ (PEACE) weekend in the country.',
      'The ___ (INDUSTRIAL) of the area began years ago.',
      'They live in a highly ___ (RESIDENT) area.',
      'The ___ (LOCATE) is perfect for commuting.',
      'We saw a ___ (DRAMA) increase in property prices.',
      'The ___ (MODERN) of the city is impressive.',
      'It was an ___ (ATTRACT) offer for a house.'
    ][i],
    correctAnswer: [
      'growth',
      'sustainable',
      'population',
      'peaceful',
      'industrialization',
      'residential',
      'location',
      'dramatic',
      'modernization',
      'attractive'
    ][i],
    explanation: 'Applying word formation rules to urban and rural development.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE MIGRATION TO THE COUNTRYSIDE
// ============================================
export const B2_U34_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: The "Escape to the Country" Trend',
  explanation: 'Read about why people are leaving cities and answer.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is "counter-urbanization"?' : 'How has remote work influenced this trend?',
    options: [['The movement of people from cities to rural areas', 'Building more cities', 'Living in smaller flats'], ['By making it possible to live far from the office', 'By requiring people to live in cities', 'By decreasing the need for houses']][i % 2],
    correctAnswer: i < 5 ? 'The movement of people from cities to rural areas' : 'By making it possible to live far from the office',
    explanation: 'Analyzing modern societal shifts in living preferences.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - AN URBAN PLANNER
// ============================================
export const B2_U34_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: Designing the Cities of Tomorrow',
  explanation: 'Listen to an interview about sustainable urban design.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the "15-minute city" concept?`,
    options: ['A city where everything is within a 15-minute walk or cycle', 'A city that only lasts 15 minutes', 'A very small town', 'A high-speed train network'],
    correctAnswer: 'A city where everything is within a 15-minute walk or cycle',
    explanation: 'Listening for core concepts in urban planning.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - COMPARING OPTIONS
// ============================================
export const B2_U34_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Contrasting Lifestyles',
  explanation: 'Identify the best way to compare and contrast city and country life.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To introduce a comparison:',
      'To highlight a benefit of the city:',
      'To highlight a benefit of the country:',
      'To use a "the... the..." structure:',
      'To contrast two points directly:',
      'To summarize the differences:',
      'To express a personal preference:',
      'To mention a drawback of the city:',
      'To mention a drawback of the country:',
      'To end with a balanced conclusion:'
    ][i],
    options: [
      ['When comparing urban and rural living, one must consider...', 'Cities and villages are different.', 'I will talk about cities.'],
      ['One major advantage of the city is the easy access to...', 'Cities are good for stuff.', 'Lots of shops.'],
      ['In contrast, the countryside offers a much more peaceful...', 'Villages are quiet.', 'Nature is nice.'],
      ['The more people live in a city, the more congested it becomes.', 'Cities are busy.', 'People make traffic.'],
      ['While the city is vibrant, the country is tranquil.', 'City good, country quiet.', 'They are different.'],
      ['In short, the choice depends on your priorities.', 'Both are okay.', 'It depends.'],
      ['Personally, I find the country more appealing because...', 'I like villages.', 'Me too.'],
      ['However, the high cost of living in cities can be...', 'Money is a problem.', 'It is expensive.'],
      ['On the other hand, the lack of public transport in...', 'No buses.', 'Hard to move.'],
      ['Ultimately, both environments have their pros and cons.', 'They are both good and bad.', 'Final word.']
    ][i],
    correctAnswer: [
      'When comparing urban and rural living, one must consider...',
      'One major advantage of the city is the easy access to...',
      'In contrast, the countryside offers a much more peaceful...',
      'The more people live in a city, the more congested it becomes.',
      'While the city is vibrant, the country is tranquil.',
      'In short, the choice depends on your priorities.',
      'Personally, I find the country more appealing because...',
      'However, the high cost of living in cities can be...',
      'On the other hand, the lack of public transport in...',
      'Ultimately, both environments have their pros and cons.'
    ][i],
    explanation: 'Using sophisticated transition and comparison language.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING WHERE TO LIVE
// ============================================
export const B2_U34_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Comparing Lifestyles Naturally',
  explanation: 'Learn how to use "the... the..." and emphasis in a conversation.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally say that moving further away makes your commute longer?`,
    options: ['The further out you live, the longer the commute is.', 'It is longer if you live far.', 'Commuting takes time.', 'I live far, so it\'s long.'],
    correctAnswer: 'The further out you live, the longer the commute is.',
    explanation: 'Using complex comparative structures in spoken English.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U34_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 34',
  explanation: 'Consolidation of Advanced Comparatives and Urban/Rural Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'The ___ (more) you study, the ___ (better) you do.' : 'The village is very ___ (quiet) and remote.',
    options: i < 5 ? ['more / better', 'most / best', 'much / well'] : ['quiet', 'noisy', 'busy'],
    correctAnswer: i < 5 ? 'more / better' : 'quiet',
    explanation: 'Verifying comparative structures and vocabulary accuracy.',
    points: 1
  }))
};

export const B2_UNIT_34 = createB2Unit(
  'b2-u34',
  'Urban vs Rural Living',
  'Contrast the advantages and challenges of city and country life while mastering advanced comparative structures.',
  ['Use "the... the..." structure for parallel comparisons', 'Apply double comparatives for ongoing change', 'Understand key vocabulary for urban amenities and rural tranquility'],
  [
    B2_U34_BLOCK1, B2_U34_BLOCK2, B2_U34_BLOCK3, B2_U34_BLOCK4, B2_U34_BLOCK5,
    B2_U34_BLOCK6, B2_U34_BLOCK7, B2_U34_BLOCK8, B2_U34_BLOCK9, B2_U34_BLOCK10
  ]
);
