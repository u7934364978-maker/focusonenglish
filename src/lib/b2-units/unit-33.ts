import { Exercise } from '../exercise-types';
import { createB2Unit, genId } from './utils';

const UNIT_ID = 33;

// ============================================
// BLOCK 1: GRAMMAR - QUANTIFIERS WITH COUNTABLE/UNCOUNTABLE
// ============================================
export const B2_U33_BLOCK1: Exercise = {
  id: `b2-u${UNIT_ID}-b1`,
  type: 'grammar',
  title: 'Quantifiers: Cooking and Ingredients',
  grammarPoint: 'Quantifiers',
  explanation: 'Use much, a little, a great deal of with uncountable nouns; use many, a few, a number of with countable nouns.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'We don\'t have ___ (much/many) flour left for the cake.',
      'There are ___ (a few/a little) oranges in the bowl.',
      'How ___ (much/many) spice should I add?',
      'A ___ (great deal/number) of research has been done on this diet.',
      'There is ___ (little/few) hope of finding the secret recipe.',
      '___ (Many/Much) people prefer organic food these days.',
      'I only need ___ (a little/a few) salt for this dish.',
      'There are ___ (several/much) ways to prepare salmon.',
      'We spent ___ (plenty/a lot) of time in the kitchen.',
      '___ (Both/Either) restaurants serve excellent pasta.'
    ][i],
    options: [
      ['much', 'many', 'lot'],
      ['a few', 'a little', 'some'],
      ['much', 'many', 'few'],
      ['great deal', 'number', 'lot'],
      ['little', 'few', 'none'],
      ['Many', 'Much', 'A lot'],
      ['a little', 'a few', 'some'],
      ['several', 'much', 'lots'],
      ['plenty', 'much', 'many'],
      ['Both', 'Either', 'Every']
    ][i],
    correctAnswer: [
      'much',
      'a few',
      'much',
      'great deal',
      'little',
      'Many',
      'a little',
      'several',
      'plenty',
      'Both'
    ][i],
    explanation: 'Matching the quantifier to the type of noun (countable vs. uncountable).',
    points: 1
  }))
};

// ============================================
// BLOCK 2: GRAMMAR - EMPHATIC QUANTIFIERS
// ============================================
export const B2_U33_BLOCK2: Exercise = {
  id: `b2-u${UNIT_ID}-b2`,
  type: 'grammar',
  title: 'Emphatic Quantifiers: Food Waste and Abundance',
  grammarPoint: 'Quantifiers',
  explanation: 'Use expressions like "hardly any", "a vast amount of", "far too many" for emphasis.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b2', i + 1),
    type: 'fill-blank',
    question: [
      'There is hardly ___ (any) food left in the fridge.',
      'A ___ (vast) amount of food is wasted every year.',
      'There are ___ (far) too many sugary drinks on the market.',
      'Very ___ (few) people know how to cook from scratch.',
      '___ (All) of the ingredients must be fresh.',
      '___ (No) salt was added to the sauce.',
      'We have ___ (enough) bread for everyone.',
      'There is ___ (quite) a lot of sugar in this cereal.',
      '___ (Most) of the guests enjoyed the meal.',
      '___ (Neither) of the cakes was particularly good.'
    ][i],
    correctAnswer: [
      'any',
      'vast',
      'far',
      'few',
      'All',
      'No',
      'enough',
      'quite',
      'Most',
      'Neither'
    ][i],
    explanation: 'Using quantifiers for rhetorical emphasis on quantity.',
    points: 1
  }))
};

// ============================================
// BLOCK 3: VOCABULARY - FLAVORS AND TEXTURES
// ============================================
export const B2_U33_BLOCK3: Exercise = {
  id: `b2-u${UNIT_ID}-b3`,
  type: 'vocabulary',
  title: 'Describing Food: Taste and Feel',
  explanation: 'Advanced adjectives for describing culinary experiences.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b3', i + 1),
    type: 'fill-blank',
    question: [
      'The lemon has a very ___ (sour) taste.',
      'The steak was perfectly ___ (tender) and easy to cut.',
      'I love the ___ (crunchy) texture of these biscuits.',
      'The curry was quite ___ (spicy) and hot.',
      'The bread is a bit ___ (stale) because it was left out.',
      'This chocolate is very ___ (rich) and dark.',
      'The soup is a little ___ (bland); it needs more seasoning.',
      'The grapes are sweet and ___ (juicy).',
      'The sauce is smooth and ___ (creamy).',
      'The fish had a very ___ (savory) flavor.'
    ][i],
    correctAnswer: [
      'sour',
      'tender',
      'crunchy',
      'spicy',
      'stale',
      'rich',
      'bland',
      'juicy',
      'creamy',
      'savory'
    ][i],
    explanation: 'Using precise vocabulary for sensory descriptions of food.',
    points: 1
  }))
};

// ============================================
// BLOCK 4: VOCABULARY - COOKING METHODS & UTENSILS
// ============================================
export const B2_U33_BLOCK4: Exercise = {
  id: `b2-u${UNIT_ID}-b4`,
  type: 'vocabulary',
  title: 'In the Kitchen: Techniques',
  explanation: 'Verbs for preparing food and names of kitchen equipment.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b4', i + 1),
    type: 'multiple-choice',
    question: [
      'You should ___ (simmer) the sauce for ten minutes.',
      '___ (Whisk) the eggs until they are fluffy.',
      '___ (Grate) the cheese over the pasta.',
      '___ (Peel) the potatoes before boiling them.',
      '___ (Sauté) the onions in a little oil.',
      'Use a ___ (colander) to drain the vegetables.',
      'The meat should be ___ (roasted) in the oven.',
      '___ (Stir) the soup continuously.',
      '___ (Chop) the herbs finely.',
      'Preheat the ___ (oven) to 200 degrees.'
    ][i],
    options: [
      ['simmer', 'boil', 'fry'],
      ['Whisk', 'Beat', 'Mix'],
      ['Grate', 'Cut', 'Slice'],
      ['Peel', 'Skin', 'Cut'],
      ['Sauté', 'Fry', 'Bake'],
      ['colander', 'sieve', 'bowl'],
      ['roasted', 'baked', 'grilled'],
      ['Stir', 'Move', 'Turn'],
      ['Chop', 'Break', 'Cut'],
      ['oven', 'stove', 'grill']
    ][i],
    correctAnswer: [
      'simmer',
      'Whisk',
      'Grate',
      'Peel',
      'Sauté',
      'colander',
      'roasted',
      'Stir',
      'Chop',
      'oven'
    ][i],
    explanation: 'Vocabulary for specific culinary actions and tools.',
    points: 1
  }))
};

// ============================================
// BLOCK 5: USE OF ENGLISH - WORD FORMATION (NUTRITION)
// ============================================
export const B2_U33_BLOCK5: Exercise = {
  id: `b2-u${UNIT_ID}-b5`,
  type: 'word-formation',
  title: 'Word Formation: Diet & Health',
  explanation: 'Form words related to nutrition and eating habits.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b5', i + 1),
    type: 'fill-blank',
    question: [
      'A ___ (HEALTH) diet is essential for well-being.',
      'We need to avoid ___ (PROCESSED) foods.',
      'The ___ (NUTRITION) value of this fruit is high.',
      'He suffers from a severe vitamin ___ (DEFICIENT).',
      '___ (OBESE) is a growing problem in many countries.',
      'The ___ (CONSUME) of sugar has increased.',
      'She made a ___ (DELICIOUS) meal for us.',
      'The ___ (PREPARE) took several hours.',
      'It was an ___ (APPETITE) looking dish.',
      'There is a ___ (VARIOUS) of dishes to choose from.'
    ][i],
    correctAnswer: [
      'healthy',
      'processed',
      'nutritional',
      'deficiency',
      'Obesity',
      'consumption',
      'delicious',
      'preparation',
      'appetizing',
      'variety'
    ][i],
    explanation: 'Applying word formation in the context of food and health.',
    points: 1
  }))
};

// ============================================
// BLOCK 6: READING - THE FUTURE OF FOOD
// ============================================
export const B2_U33_BLOCK6: Exercise = {
  id: `b2-u${UNIT_ID}-b6`,
  type: 'reading-comprehension',
  title: 'Reading: Lab-Grown Meat and Insects',
  explanation: 'Read about future food trends and answer the questions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b6', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'What is the main benefit of lab-grown meat?' : 'Why are insects considered a sustainable food source?',
    options: [['Reduced environmental impact', 'Better taste', 'Lower price'], ['They require very little water and space', 'They are easy to cook', 'Everyone likes them']][i % 2],
    correctAnswer: i < 5 ? 'Reduced environmental impact' : 'They require very little water and space',
    explanation: 'Understanding the motivations behind new food technologies.',
    points: 1
  }))
};

// ============================================
// BLOCK 7: LISTENING - A COOKING SHOW
// ============================================
export const B2_U33_BLOCK7: Exercise = {
  id: `b2-u${UNIT_ID}-b7`,
  type: 'listening',
  title: 'Listening: The Secret to a Perfect Risotto',
  explanation: 'Listen to a chef explaining the steps to make a classic Italian dish.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b7', i + 1),
    type: 'multiple-choice',
    question: `What is the most important rule when adding stock to risotto?`,
    options: ['Add it gradually and stir constantly', 'Pour it all in at once', 'Use cold stock', 'Never stir the rice'],
    correctAnswer: 'Add it gradually and stir constantly',
    explanation: 'Listening for precise instructions and sequential steps.',
    points: 1
  }))
};

// ============================================
// BLOCK 8: WRITING ANALYSIS - RECIPES & FOOD BLOGS
// ============================================
export const B2_U33_BLOCK8: Exercise = {
  id: `b2-u${UNIT_ID}-b8`,
  type: 'writing-analysis',
  title: 'Writing Analysis: Crafting a Recipe',
  explanation: 'Identify the best way to write clear and engaging food instructions.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b8', i + 1),
    type: 'multiple-choice',
    question: [
      'To list ingredients clearly:',
      'To provide a step-by-step instruction:',
      'To give a helpful cooking tip:',
      'To describe the finished dish:',
      'To use a verb for preparing vegetables:',
      'To state the preparation time:',
      'To specify the number of servings:',
      'To suggest a variation:',
      'To emphasize a crucial step:',
      'To invite readers to comment:'
    ][i],
    options: [
      ['200g of plain flour, sifted', 'Some flour.', 'Get flour.'],
      ['Firstly, sauté the onions until golden.', 'Start now.', 'Onions in.'],
      ['Pro tip: Use fresh herbs for a better aroma.', 'Use herbs.', 'Herbs are good.'],
      ['The result is a light and airy sponge.', 'It looks good.', 'Done.'],
      ['Finely dice the carrots.', 'Cut carrots.', 'Small carrots.'],
      ['Prep time: 15 minutes', 'Short time.', 'Fast.'],
      ['Serves 4 people', 'For four.', 'Group size.'],
      ['For a vegan version, substitute milk with...', 'Try this.', 'Change it.'],
      ['Crucially, do not overmix the batter.', 'Don\'t mix much.', 'Careful.'],
      ['Let me know how yours turned out!', 'Tell me.', 'Comments?']
    ][i],
    correctAnswer: [
      '200g of plain flour, sifted',
      'Firstly, sauté the onions until golden.',
      'Pro tip: Use fresh herbs for a better aroma.',
      'The result is a light and airy sponge.',
      'Finely dice the carrots.',
      'Prep time: 15 minutes',
      'Serves 4 people',
      'For a vegan version, substitute milk with...',
      'Crucially, do not overmix the batter.',
      'Let me know how yours turned out!'
    ][i],
    explanation: 'Using clear, instructional, and engaging language for culinary writing.',
    points: 1
  }))
};

// ============================================
// BLOCK 9: SPEAKING - DISCUSSING EATING HABITS
// ============================================
export const B2_U33_BLOCK9: Exercise = {
  id: `b2-u${UNIT_ID}-b9`,
  type: 'speaking-analysis',
  title: 'Speaking: Complimenting and Criticizing Food',
  explanation: 'Learn how to express your opinion on a meal politely or enthusiastically.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b9', i + 1),
    type: 'multiple-choice',
    question: `How would you naturally compliment someone's cooking?`,
    options: ['This is absolutely delicious! You must give me the recipe.', 'It is good.', 'I like eating this.', 'Nice food.'],
    correctAnswer: 'This is absolutely delicious! You must give me the recipe.',
    explanation: 'Using appropriate social language for culinary contexts.',
    points: 1
  }))
};

// ============================================
// BLOCK 10: MIXED REVIEW
// ============================================
export const B2_U33_BLOCK10: Exercise = {
  id: `b2-u${UNIT_ID}-b10`,
  type: 'grammar',
  title: 'Mixed Review Unit 33',
  explanation: 'Consolidation of Quantifiers and Food Vocabulary.',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(UNIT_ID, 'b10', i + 1),
    type: 'multiple-choice',
    question: i < 5 ? 'There is ___ (little/few) sugar in this tea.' : 'How ___ (much/many) apples do we need?',
    options: i < 5 ? ['little', 'few', 'small'] : ['many', 'much', 'lots'],
    correctAnswer: i < 5 ? 'little' : 'many',
    explanation: 'Reviewing quantifier rules for different noun types.',
    points: 1
  }))
};

export const B2_UNIT_33 = createB2Unit(
  'b2-u33',
  'Gastronomy & Food Culture',
  'Master the use of quantifiers while exploring the rich world of international cuisine, cooking, and nutrition.',
  ['Use quantifiers correctly with countable and uncountable nouns', 'Apply emphatic quantifiers to discuss abundance and waste', 'Understand key vocabulary for flavors, cooking methods, and nutrition'],
  [
    B2_U33_BLOCK1, B2_U33_BLOCK2, B2_U33_BLOCK3, B2_U33_BLOCK4, B2_U33_BLOCK5,
    B2_U33_BLOCK6, B2_U33_BLOCK7, B2_U33_BLOCK8, B2_U33_BLOCK9, B2_U33_BLOCK10
  ]
);
