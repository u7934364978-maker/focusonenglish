// ===============================================
// MÓDULO 3, LECCIÓN 1: FOOD AND DRINKS - CONTENIDO COMPLETO DETALLADO
// Este archivo contiene todos los ejercicios con contenido real y funcional
// ===============================================

// Note: We use 'any' type to avoid circular dependency with course-data-a1.ts
// The actual types are enforced when imported in course-data-a1.ts

// ============================================
// GRAMMAR EXERCISE 1: Countable and Uncountable Nouns - Formation
// ============================================
export const A1_M3_L1_GRAMMAR_1 = {
  id: 'a1-m3-l1-grammar-1',
  type: 'grammar',
  title: 'Countable and Uncountable Nouns - Formation',
  grammarPoint: 'Countable and Uncountable Nouns',
  explanation: `
Nouns in English can be countable or uncountable. It's important to know the difference because it affects how we use them.

**Countable Nouns:**
Countable nouns are things we can count. They have singular and plural forms.

| Singular | Plural |
|----------|--------|
| apple    | apples |
| banana   | bananas |
| egg      | eggs |
| sandwich | sandwiches |
| cookie   | cookies |

Examples:
✓ I have one apple.
✓ She buys two bananas.
✓ There are three eggs in the fridge.

**Uncountable Nouns:**
Uncountable nouns are things we cannot count individually. They have only one form.

Common uncountable food nouns:
- Liquids: water, milk, juice, coffee, tea, oil
- Grains: rice, bread, flour, sugar, salt
- Dairy: cheese, butter, yogurt
- Meat: chicken, beef, pork, fish
- Others: food, fruit, chocolate

Examples:
✓ I drink water every day.
✓ She likes cheese.
✓ We need bread for breakfast.

**Important:**
- With countable nouns: a/an, one, two, three... (a banana, two apples)
- With uncountable nouns: some, any, much, a lot of (some water, much rice)
- We use containers/measures with uncountable: a glass of water, a piece of bread, a cup of coffee
  `,
  examples: [
    "I eat an apple every day. (countable)",
    "She drinks milk for breakfast. (uncountable)",
    "There are three bananas on the table. (countable)",
    "We need some rice for dinner. (uncountable)",
    "He wants a sandwich. (countable)",
    "I like cheese. (uncountable)",
    "They have two eggs. (countable)"
  ],
  questions: [
    {
      id: 'a1-m3-l1-g1-q1',
      type: 'multiple-choice',
      question: 'Which noun is countable?',
      options: ['water', 'apple', 'milk', 'rice'],
      correctAnswer: 'apple',
      explanation: '"Apple" is countable. We can say one apple, two apples. Water, milk, and rice are uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q2',
      type: 'multiple-choice',
      question: 'Which noun is uncountable?',
      options: ['banana', 'bread', 'egg', 'orange'],
      correctAnswer: 'bread',
      explanation: '"Bread" is uncountable. We cannot say one bread, two breads. Banana, egg, and orange are countable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q3',
      type: 'multiple-choice',
      question: 'Choose the correct sentence:',
      options: ['I want a water.', 'I want some water.', 'I want two waters.', 'I want waters.'],
      correctAnswer: 'I want some water.',
      explanation: 'Water is uncountable, so we use "some water", not "a water" or "waters".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q4',
      type: 'multiple-choice',
      question: 'Choose the correct sentence:',
      options: ['She eats two sandwich.', 'She eats sandwich.', 'She eats two sandwiches.', 'She eats some sandwich.'],
      correctAnswer: 'She eats two sandwiches.',
      explanation: 'Sandwich is countable. With numbers, we use the plural form: two sandwiches.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q5',
      type: 'true-false',
      question: 'Coffee is an uncountable noun.',
      correctAnswer: 'true',
      explanation: 'Coffee is uncountable. We say "some coffee", not "a coffee" (unless we mean a cup of coffee).',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q6',
      type: 'true-false',
      question: 'We can say "three rices".',
      correctAnswer: 'false',
      explanation: 'Rice is uncountable. We cannot say "three rices". We say "some rice" or "three bags of rice".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q7',
      type: 'multiple-choice',
      question: 'Which is uncountable?',
      options: ['tomato', 'cheese', 'potato', 'carrot'],
      correctAnswer: 'cheese',
      explanation: 'Cheese is uncountable. Tomato, potato, and carrot are countable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q8',
      type: 'multiple-choice',
      question: 'Complete: I need ___ for my coffee.',
      options: ['a sugar', 'sugars', 'some sugar', 'three sugar'],
      correctAnswer: 'some sugar',
      explanation: 'Sugar is uncountable. We use "some sugar", not "a sugar" or "sugars".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q9',
      type: 'multiple-choice',
      question: 'Complete: There are five ___ in the basket.',
      options: ['apple', 'apples', 'some apple', 'much apples'],
      correctAnswer: 'apples',
      explanation: 'Apple is countable. With numbers, we use the plural form: five apples.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q10',
      type: 'true-false',
      question: 'Juice is a countable noun.',
      correctAnswer: 'false',
      explanation: 'Juice is uncountable. We say "some juice" or "a glass of juice", not "a juice" (unless we mean one serving).',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q11',
      type: 'multiple-choice',
      question: 'Which sentence is correct?',
      options: ['I buy a bread.', 'I buy some breads.', 'I buy some bread.', 'I buy two bread.'],
      correctAnswer: 'I buy some bread.',
      explanation: 'Bread is uncountable. We say "some bread" or "a loaf of bread", not "a bread" or "breads".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q12',
      type: 'multiple-choice',
      question: 'Complete: She wants three ___ for breakfast.',
      options: ['egg', 'eggs', 'some egg', 'much eggs'],
      correctAnswer: 'eggs',
      explanation: 'Egg is countable. With numbers, we use the plural form: three eggs.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q13',
      type: 'true-false',
      question: 'We can count butter.',
      correctAnswer: 'false',
      explanation: 'Butter is uncountable. We cannot count butter directly. We say "some butter" or use measures like "a stick of butter".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q14',
      type: 'multiple-choice',
      question: 'Which is countable?',
      options: ['flour', 'salt', 'cookie', 'oil'],
      correctAnswer: 'cookie',
      explanation: 'Cookie is countable. We can say one cookie, two cookies. Flour, salt, and oil are uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q15',
      type: 'multiple-choice',
      question: 'Complete: We need ___ for the cake.',
      options: ['a flour', 'two flour', 'some flour', 'many flour'],
      correctAnswer: 'some flour',
      explanation: 'Flour is uncountable. We use "some flour", not "a flour" or "many flour".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q16',
      type: 'true-false',
      question: 'Orange is a countable noun.',
      correctAnswer: 'true',
      explanation: 'Orange (the fruit) is countable. We can say one orange, two oranges, three oranges, etc.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q17',
      type: 'multiple-choice',
      question: 'Complete: He drinks ___ every morning.',
      options: ['a tea', 'teas', 'some tea', 'two tea'],
      correctAnswer: 'some tea',
      explanation: 'Tea is uncountable. We say "some tea" or "a cup of tea", not "a tea" (unless we mean one cup).',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q18',
      type: 'multiple-choice',
      question: 'Which sentence is correct?',
      options: ['I eat chicken every day.', 'I eat a chicken every day.', 'I eat chickens every day.', 'I eat some chickens every day.'],
      correctAnswer: 'I eat chicken every day.',
      explanation: 'Chicken (the meat) is uncountable. We say "chicken" or "some chicken", not "a chicken" (which means the animal).',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q19',
      type: 'true-false',
      question: 'Fish (as food) is usually uncountable.',
      correctAnswer: 'true',
      explanation: 'Fish (the food/meat) is usually uncountable. We say "some fish". However, fish (the animal) can be countable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g1-q20',
      type: 'multiple-choice',
      question: 'Complete: There is ___ in the fridge.',
      options: ['a yogurt', 'some yogurt', 'yogurts', 'many yogurt'],
      correctAnswer: 'some yogurt',
      explanation: 'Yogurt is uncountable. We use "some yogurt", not "a yogurt" or "yogurts" (unless we mean containers).',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Countable and Uncountable Nouns - Practice
// ============================================
export const A1_M3_L1_GRAMMAR_2 = {
  id: 'a1-m3-l1-grammar-2',
  type: 'grammar',
  title: 'Countable and Uncountable Nouns - Practice',
  grammarPoint: 'Countable and Uncountable Nouns with Quantifiers',
  explanation: `
Now let's practice using countable and uncountable nouns with quantifiers (words that express quantity).

**With Countable Nouns:**
- a/an (singular): a banana, an apple, an egg
- numbers: one banana, two apples, three eggs
- many: many apples
- a few: a few bananas
- How many...?: How many eggs?

**With Uncountable Nouns:**
- some: some water, some rice, some milk
- any (questions/negatives): any bread?, I don't have any sugar
- much: much water (usually in questions/negatives)
- a little: a little milk
- How much...?: How much rice?

**With Both:**
- some: some apples, some water
- any: any bananas?, any milk?
- a lot of: a lot of cookies, a lot of coffee
- lots of: lots of oranges, lots of juice

**Containers and Measures:**
We use these with uncountable nouns to make them "countable":
- a glass of water/milk/juice
- a cup of coffee/tea
- a bottle of water/oil
- a piece of bread/cake/cheese
- a slice of bread/pizza/cake
- a bowl of rice/soup
- a bag of flour/sugar/rice
  `,
  examples: [
    "I have many apples. (countable)",
    "She drinks much water. (uncountable)",
    "We need some eggs and some milk. (both)",
    "Is there any bread? (uncountable)",
    "There aren't many bananas. (countable)",
    "I'd like a glass of orange juice. (container + uncountable)",
    "Can I have a piece of cake? (measure + uncountable)"
  ],
  questions: [
    {
      id: 'a1-m3-l1-g2-q1',
      type: 'multiple-choice',
      question: 'Complete: How ___ apples do you want?',
      options: ['much', 'many', 'any', 'a little'],
      correctAnswer: 'many',
      explanation: 'We use "many" with countable nouns in questions. How many apples?',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q2',
      type: 'multiple-choice',
      question: 'Complete: How ___ water do you drink?',
      options: ['much', 'many', 'a few', 'a lot'],
      correctAnswer: 'much',
      explanation: 'We use "much" with uncountable nouns in questions. How much water?',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q3',
      type: 'multiple-choice',
      question: 'Complete: I need ___ milk for my coffee.',
      options: ['many', 'a few', 'a little', 'few'],
      correctAnswer: 'a little',
      explanation: 'We use "a little" with uncountable nouns for a small quantity. Milk is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q4',
      type: 'multiple-choice',
      question: 'Complete: There are ___ cookies in the jar.',
      options: ['much', 'a little', 'a few', 'little'],
      correctAnswer: 'a few',
      explanation: 'We use "a few" with countable nouns for a small number. Cookies are countable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q5',
      type: 'multiple-choice',
      question: 'Complete: Is there ___ cheese in the fridge?',
      options: ['many', 'a', 'any', 'a few'],
      correctAnswer: 'any',
      explanation: 'We use "any" in questions with both countable and uncountable nouns. Cheese is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q6',
      type: 'multiple-choice',
      question: 'Complete: I drink ___ coffee every day.',
      options: ['many', 'a lot of', 'a few', 'few'],
      correctAnswer: 'a lot of',
      explanation: '"A lot of" can be used with both countable and uncountable nouns. Coffee is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q7',
      type: 'true-false',
      question: 'We can say "many rice".',
      correctAnswer: 'false',
      explanation: 'We cannot say "many rice" because rice is uncountable. We use "much rice" or "a lot of rice".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q8',
      type: 'true-false',
      question: 'We can say "a few bananas".',
      correctAnswer: 'true',
      explanation: '"A few" is used with countable nouns. Bananas are countable, so "a few bananas" is correct.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q9',
      type: 'multiple-choice',
      question: 'Complete: We don\'t have ___ bread.',
      options: ['many', 'a few', 'any', 'a little of'],
      correctAnswer: 'any',
      explanation: 'We use "any" in negative sentences. We don\'t have any bread.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q10',
      type: 'multiple-choice',
      question: 'Complete: She wants ___ orange juice.',
      options: ['a glass of', 'a slice of', 'a piece of', 'a loaf of'],
      correctAnswer: 'a glass of',
      explanation: 'We use "a glass of" with liquids like juice. A glass of orange juice.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q11',
      type: 'multiple-choice',
      question: 'Complete: Can I have ___ cake?',
      options: ['a glass of', 'a piece of', 'a bottle of', 'a bowl of'],
      correctAnswer: 'a piece of',
      explanation: 'We use "a piece of" with cake. Can I have a piece of cake?',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q12',
      type: 'multiple-choice',
      question: 'Complete: There aren\'t ___ eggs.',
      options: ['much', 'many', 'a little', 'little'],
      correctAnswer: 'many',
      explanation: 'We use "many" with countable nouns in negative sentences. Eggs are countable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q13',
      type: 'multiple-choice',
      question: 'Complete: He eats ___ fruit every day.',
      options: ['many', 'a few', 'lots of', 'few'],
      correctAnswer: 'lots of',
      explanation: '"Lots of" can be used with both countable and uncountable nouns. Fruit is usually uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q14',
      type: 'true-false',
      question: 'We can say "much cookies".',
      correctAnswer: 'false',
      explanation: 'We cannot say "much cookies" because cookies are countable. We use "many cookies" or "a lot of cookies".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q15',
      type: 'multiple-choice',
      question: 'Complete: I\'d like ___ tea, please.',
      options: ['a cup of', 'a piece of', 'a slice of', 'a bag of'],
      correctAnswer: 'a cup of',
      explanation: 'We use "a cup of" with hot drinks like tea and coffee. A cup of tea.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q16',
      type: 'multiple-choice',
      question: 'Complete: Are there ___ tomatoes?',
      options: ['much', 'a little', 'any', 'little'],
      correctAnswer: 'any',
      explanation: 'We use "any" in questions. Are there any tomatoes? (Tomatoes are countable)',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q17',
      type: 'multiple-choice',
      question: 'Complete: I need ___ sugar for the recipe.',
      options: ['many', 'a few', 'some', 'few'],
      correctAnswer: 'some',
      explanation: 'We use "some" with uncountable nouns in affirmative sentences. Sugar is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q18',
      type: 'true-false',
      question: 'We use "a little" with countable nouns.',
      correctAnswer: 'false',
      explanation: '"A little" is used with uncountable nouns. For countable nouns, we use "a few".',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q19',
      type: 'multiple-choice',
      question: 'Complete: They buy ___ water every week.',
      options: ['a bottle of', 'a slice of', 'a loaf of', 'a cup of'],
      correctAnswer: 'a bottle of',
      explanation: 'We use "a bottle of" with water. A bottle of water.',
      points: 1
    },
    {
      id: 'a1-m3-l1-g2-q20',
      type: 'multiple-choice',
      question: 'Complete: There is ___ butter in the bowl.',
      options: ['many', 'a few', 'a little', 'few'],
      correctAnswer: 'a little',
      explanation: 'We use "a little" with uncountable nouns for a small quantity. Butter is uncountable.',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M3_L1_READING = {
  id: 'a1-m3-l1-reading-1',
  type: 'reading',
  title: 'Reading: Shopping for Food',
  text: `Emma goes to the supermarket every Saturday morning. Today she needs many things for the week.

First, she goes to the fruit and vegetable section. She buys some apples, three bananas, and a lot of tomatoes. She also needs some potatoes for dinner. Emma loves fruit, so she takes some oranges too.

Next, Emma goes to the dairy section. She picks up a bottle of milk, some cheese, and a little butter. She also takes a few eggs because she wants to make a cake on Sunday.

In the bakery section, Emma buys a loaf of bread and some cookies for her children. The bread is fresh and smells delicious.

Emma needs some meat for the week. She buys chicken and some fish. She doesn't buy much meat because it's expensive.

Finally, Emma goes to the drinks section. She takes a bottle of orange juice and some water. She also buys a little coffee and some tea.

At the checkout, Emma pays for her shopping. She spends a lot of money, but she has food for the whole week. She is happy because she has everything she needs.`,
  wordCount: 198,
  readingTime: 3,
  questions: [
    {
      id: 'a1-m3-l1-r1-q1',
      type: 'multiple-choice',
      question: 'When does Emma go to the supermarket?',
      options: ['Every Sunday', 'Every Saturday morning', 'Every Friday', 'Every day'],
      correctAnswer: 'Every Saturday morning',
      explanation: 'The text says "Emma goes to the supermarket every Saturday morning."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q2',
      type: 'multiple-choice',
      question: 'How many bananas does Emma buy?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 'Three',
      explanation: 'The text says "she buys... three bananas."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q3',
      type: 'true-false',
      question: 'Emma buys a lot of tomatoes.',
      correctAnswer: 'true',
      explanation: 'The text says "a lot of tomatoes."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q4',
      type: 'multiple-choice',
      question: 'What does Emma buy in the dairy section?',
      options: ['Only milk', 'Milk, cheese, butter, and eggs', 'Only cheese', 'Bread and butter'],
      correctAnswer: 'Milk, cheese, butter, and eggs',
      explanation: 'The text lists milk, cheese, butter, and eggs in the dairy section.',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q5',
      type: 'true-false',
      question: 'Emma wants to make a cake on Saturday.',
      correctAnswer: 'false',
      explanation: 'The text says she wants to make a cake on Sunday, not Saturday.',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q6',
      type: 'multiple-choice',
      question: 'What does Emma buy in the bakery section?',
      options: ['Only bread', 'Bread and cookies', 'Only cookies', 'Cake'],
      correctAnswer: 'Bread and cookies',
      explanation: 'The text says "Emma buys a loaf of bread and some cookies."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q7',
      type: 'true-false',
      question: 'The bread is fresh.',
      correctAnswer: 'true',
      explanation: 'The text says "The bread is fresh and smells delicious."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q8',
      type: 'multiple-choice',
      question: 'What meat does Emma buy?',
      options: ['Only chicken', 'Chicken and fish', 'Only fish', 'Beef and chicken'],
      correctAnswer: 'Chicken and fish',
      explanation: 'The text says "She buys chicken and some fish."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q9',
      type: 'true-false',
      question: 'Emma buys a lot of meat.',
      correctAnswer: 'false',
      explanation: 'The text says "She doesn\'t buy much meat because it\'s expensive."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q10',
      type: 'multiple-choice',
      question: 'Why doesn\'t Emma buy much meat?',
      options: ['She doesn\'t like it', 'It\'s expensive', 'She\'s vegetarian', 'The shop doesn\'t have it'],
      correctAnswer: 'It\'s expensive',
      explanation: 'The text says "She doesn\'t buy much meat because it\'s expensive."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q11',
      type: 'true-false',
      question: 'Emma buys orange juice.',
      correctAnswer: 'true',
      explanation: 'The text says "She takes a bottle of orange juice."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q12',
      type: 'multiple-choice',
      question: 'What drinks does Emma buy?',
      options: ['Only juice', 'Juice, water, coffee, and tea', 'Only water', 'Coffee and tea only'],
      correctAnswer: 'Juice, water, coffee, and tea',
      explanation: 'The text lists orange juice, water, coffee, and tea.',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q13',
      type: 'true-false',
      question: 'Emma has children.',
      correctAnswer: 'true',
      explanation: 'The text mentions "cookies for her children."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q14',
      type: 'multiple-choice',
      question: 'How much money does Emma spend?',
      options: ['A little', 'Nothing', 'A lot', 'The text doesn\'t say exactly'],
      correctAnswer: 'A lot',
      explanation: 'The text says "She spends a lot of money."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q15',
      type: 'true-false',
      question: 'Emma is happy after shopping.',
      correctAnswer: 'true',
      explanation: 'The text says "She is happy because she has everything she needs."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q16',
      type: 'multiple-choice',
      question: 'How long does Emma have food for?',
      options: ['One day', 'Three days', 'The whole week', 'Two weeks'],
      correctAnswer: 'The whole week',
      explanation: 'The text says "she has food for the whole week."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q17',
      type: 'true-false',
      question: 'Emma needs potatoes for lunch.',
      correctAnswer: 'false',
      explanation: 'The text says she needs potatoes for dinner, not lunch.',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q18',
      type: 'multiple-choice',
      question: 'What does Emma love?',
      options: ['Vegetables', 'Meat', 'Fruit', 'Bread'],
      correctAnswer: 'Fruit',
      explanation: 'The text says "Emma loves fruit."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q19',
      type: 'true-false',
      question: 'Emma goes to the supermarket in the afternoon.',
      correctAnswer: 'false',
      explanation: 'The text says she goes "every Saturday morning."',
      points: 1
    },
    {
      id: 'a1-m3-l1-r1-q20',
      type: 'multiple-choice',
      question: 'What fruit does Emma NOT buy?',
      options: ['Apples', 'Bananas', 'Oranges', 'Grapes'],
      correctAnswer: 'Grapes',
      explanation: 'The text mentions apples, bananas, and oranges, but not grapes.',
      points: 1
    }
  ],
  vocabularyHelp: [
    { word: 'supermarket', definition: 'a large shop that sells food and other items' },
    { word: 'section', definition: 'a part or area of something' },
    { word: 'dairy', definition: 'products made from milk (milk, cheese, butter, yogurt)' },
    { word: 'bakery', definition: 'a place where bread and cakes are made or sold' },
    { word: 'fresh', definition: 'recently made or obtained; not old' },
    { word: 'checkout', definition: 'the place in a shop where you pay' },
    { word: 'expensive', definition: 'costing a lot of money' },
    { word: 'loaf', definition: 'a quantity of bread shaped and baked in one piece' }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M3_L1_LISTENING = {
  id: 'a1-m3-l1-listening-1',
  type: 'listening',
  title: 'Listening: At the Market',
  audioUrl: '/audio/a1-m3-l1-listening.mp3',
  transcript: `Customer: Good morning! Do you have any fresh tomatoes?
Vendor: Yes, we have many tomatoes today. How many do you need?
Customer: I need about five tomatoes, please. And do you have any cucumbers?
Vendor: Yes, we have some cucumbers. They're very fresh.
Customer: Great! I'll take three cucumbers. How much cheese do you have?
Vendor: We have a lot of cheese. Would you like some?
Customer: Yes, please. Can I have a little cheese? Just a small piece.
Vendor: Of course. Anything else?
Customer: Do you have any bread?
Vendor: Yes, we have fresh bread. We baked it this morning.
Customer: Perfect! I'll take a loaf of bread. How much is everything?
Vendor: Let me see... the tomatoes, cucumbers, cheese, and bread. That's 15 euros.
Customer: Here you are. Thank you!
Vendor: Thank you! Have a nice day!`,
  duration: 90,
  questions: [
    {
      id: 'a1-m3-l1-l1-q1',
      type: 'multiple-choice',
      question: 'What does the customer want first?',
      options: ['Cucumbers', 'Tomatoes', 'Cheese', 'Bread'],
      correctAnswer: 'Tomatoes',
      explanation: 'The customer asks "Do you have any fresh tomatoes?" first.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q2',
      type: 'multiple-choice',
      question: 'How many tomatoes does the customer need?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five',
      explanation: 'The customer says "I need about five tomatoes."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q3',
      type: 'true-false',
      question: 'The cucumbers are fresh.',
      correctAnswer: 'true',
      explanation: 'The vendor says "They\'re very fresh" about the cucumbers.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q4',
      type: 'multiple-choice',
      question: 'How many cucumbers does the customer buy?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctAnswer: 'Three',
      explanation: 'The customer says "I\'ll take three cucumbers."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q5',
      type: 'true-false',
      question: 'The vendor has a lot of cheese.',
      correctAnswer: 'true',
      explanation: 'The vendor says "We have a lot of cheese."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q6',
      type: 'multiple-choice',
      question: 'How much cheese does the customer want?',
      options: ['A lot', 'A little', 'Many pieces', 'No cheese'],
      correctAnswer: 'A little',
      explanation: 'The customer says "Can I have a little cheese?"',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q7',
      type: 'true-false',
      question: 'The customer wants a big piece of cheese.',
      correctAnswer: 'false',
      explanation: 'The customer asks for "a little cheese" and "just a small piece."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q8',
      type: 'multiple-choice',
      question: 'When was the bread baked?',
      options: ['Yesterday', 'This morning', 'Last week', 'Two days ago'],
      correctAnswer: 'This morning',
      explanation: 'The vendor says "We baked it this morning."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q9',
      type: 'true-false',
      question: 'The bread is fresh.',
      correctAnswer: 'true',
      explanation: 'The vendor says "we have fresh bread" and it was baked this morning.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q10',
      type: 'multiple-choice',
      question: 'How much does the customer pay?',
      options: ['10 euros', '15 euros', '20 euros', '25 euros'],
      correctAnswer: '15 euros',
      explanation: 'The vendor says "That\'s 15 euros."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q11',
      type: 'true-false',
      question: 'The customer buys four different things.',
      correctAnswer: 'true',
      explanation: 'The customer buys tomatoes, cucumbers, cheese, and bread (4 items).',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q12',
      type: 'multiple-choice',
      question: 'Where does this conversation take place?',
      options: ['At a restaurant', 'At a market', 'At a supermarket', 'At home'],
      correctAnswer: 'At a market',
      explanation: 'The title indicates this is "At the Market" and the dialogue shows a customer and vendor.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q13',
      type: 'true-false',
      question: 'The vendor is friendly.',
      correctAnswer: 'true',
      explanation: 'The vendor is polite, helpful, and says "Have a nice day!"',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q14',
      type: 'multiple-choice',
      question: 'What does the customer NOT buy?',
      options: ['Tomatoes', 'Apples', 'Cucumbers', 'Bread'],
      correctAnswer: 'Apples',
      explanation: 'The customer buys tomatoes, cucumbers, cheese, and bread, but not apples.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q15',
      type: 'true-false',
      question: 'The customer asks about tomatoes first.',
      correctAnswer: 'true',
      explanation: 'The first question is "Do you have any fresh tomatoes?"',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q16',
      type: 'multiple-choice',
      question: 'What does the vendor say about the tomatoes?',
      options: ['They don\'t have any', 'They have many', 'They have a few', 'They have some'],
      correctAnswer: 'They have many',
      explanation: 'The vendor says "we have many tomatoes today."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q17',
      type: 'true-false',
      question: 'The customer buys a loaf of bread.',
      correctAnswer: 'true',
      explanation: 'The customer says "I\'ll take a loaf of bread."',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q18',
      type: 'multiple-choice',
      question: 'What time of day is it?',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
      correctAnswer: 'Morning',
      explanation: 'The customer says "Good morning!" at the start of the conversation.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q19',
      type: 'true-false',
      question: 'The customer asks "Anything else?"',
      correctAnswer: 'false',
      explanation: 'The vendor asks "Anything else?", not the customer.',
      points: 1
    },
    {
      id: 'a1-m3-l1-l1-q20',
      type: 'multiple-choice',
      question: 'Who says "Have a nice day"?',
      options: ['The customer', 'The vendor', 'Both', 'Neither'],
      correctAnswer: 'The vendor',
      explanation: 'The vendor says "Have a nice day!" at the end of the conversation.',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M3_L1_SPEAKING = {
  id: 'a1-m3-l1-speaking-1',
  type: 'speaking',
  title: 'Speaking: Talking about Food Preferences',
  instructions: 'Answer the following questions about food and drinks. Speak clearly and use complete sentences. Try to give reasons for your answers.',
  prompts: [
    'What is your favorite food?',
    'Do you like vegetables? Which ones?',
    'What do you usually eat for breakfast?',
    'Do you drink coffee or tea?',
    'What fruit do you like?',
    'Do you eat meat? What kind?',
    'What do you drink with your meals?',
    'Do you like cheese? What type?',
    'What is a typical food from your country?',
    'What food don\'t you like?'
  ],
  evaluationCriteria: {
    pronunciation: {
      description: 'Clear pronunciation of food vocabulary',
      maxPoints: 25,
      criteria: [
        'Countable/uncountable nouns pronounced correctly',
        'Clear word stress in food items',
        'Comprehensible speech overall'
      ]
    },
    grammar: {
      description: 'Correct use of countable/uncountable nouns',
      maxPoints: 25,
      criteria: [
        'Correct use of a/an with countable nouns',
        'Correct use of some/any with uncountable nouns',
        'Proper plurals for countable nouns'
      ]
    },
    vocabulary: {
      description: 'Range of food and drink vocabulary',
      maxPoints: 25,
      criteria: [
        'Variety of food items mentioned',
        'Use of quantifiers (some, any, a lot of, etc.)',
        'Appropriate descriptive words (fresh, delicious, etc.)'
      ]
    },
    fluency: {
      description: 'Ability to speak without long pauses',
      maxPoints: 25,
      criteria: [
        'Smooth delivery with minimal hesitation',
        'Complete sentences',
        'Natural pace of speech'
      ]
    }
  },
  totalPoints: 100,
  timeLimit: 300
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M3_L1_WRITING = {
  id: 'a1-m3-l1-writing-1',
  type: 'writing',
  title: 'Writing: My Favorite Meal',
  instructions: 'Write a short paragraph (60-80 words) about your favorite meal. Include what food and drinks you have, when you eat it, and why you like it. Use countable and uncountable nouns correctly.',
  prompt: 'Describe your favorite meal. What do you eat and drink? When do you have this meal? Why do you like it?',
  wordCountMin: 60,
  wordCountMax: 80,
  rubric: {
    contentAndIdeas: {
      description: 'Relevance and completeness of content',
      maxPoints: 25,
      criteria: [
        'Describes the meal clearly',
        'Mentions food and drinks',
        'Explains why they like it',
        'Stays on topic'
      ]
    },
    grammar: {
      description: 'Correct use of countable/uncountable nouns and basic grammar',
      maxPoints: 25,
      criteria: [
        'Correct use of a/an with countable nouns',
        'Correct use of some/any with uncountable nouns',
        'Proper plural forms',
        'Basic sentence structure correct'
      ]
    },
    vocabulary: {
      description: 'Range and accuracy of food vocabulary',
      maxPoints: 25,
      criteria: [
        'Appropriate food and drink vocabulary',
        'Use of quantifiers (some, a lot of, etc.)',
        'Variety of words used',
        'Correct word choices'
      ]
    },
    organization: {
      description: 'Structure and coherence of writing',
      maxPoints: 25,
      criteria: [
        'Clear beginning, middle, and end',
        'Logical flow of ideas',
        'Appropriate length (60-80 words)',
        'Uses connecting words (and, but, because, etc.)'
      ]
    }
  },
  totalPoints: 100,
  exampleAnswer: `My favorite meal is Sunday breakfast with my family. I eat two eggs, some toast with butter, and a few pieces of fruit. I also have some bacon and a lot of orange juice. My mother makes fresh coffee, and the smell is wonderful! I like this meal because we eat together and talk about our week. It's delicious and special.`
};

// ============================================
// PRONUNCIATION PRACTICE
// ============================================
export const A1_M3_L1_PRONUNCIATION = {
  id: 'a1-m3-l1-pronunciation-1',
  type: 'pronunciation',
  title: 'Pronunciation: Food and Drink Words',
  instructions: 'Listen and repeat the following words. Pay attention to stress and vowel sounds.',
  targetSounds: [
    {
      sound: '/æ/',
      description: 'Short "a" sound as in "cat"',
      examples: ['apple', 'salad', 'sandwich', 'banana']
    },
    {
      sound: '/iː/',
      description: 'Long "ee" sound as in "cheese"',
      examples: ['cheese', 'meat', 'tea', 'sweet']
    },
    {
      sound: '/ʌ/',
      description: 'Short "u" sound as in "cup"',
      examples: ['butter', 'lunch', 'onion', 'honey']
    }
  ],
  questions: [
    {
      id: 'a1-m3-l1-p1-q1',
      type: 'pronunciation',
      word: 'apple',
      audioUrl: '/audio/pronunciation/apple.mp3',
      phonetic: '/ˈæp.əl/',
      explanation: 'Stress on first syllable: AP-ple',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q2',
      type: 'pronunciation',
      word: 'banana',
      audioUrl: '/audio/pronunciation/banana.mp3',
      phonetic: '/bəˈnɑː.nə/',
      explanation: 'Stress on second syllable: ba-NA-na',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q3',
      type: 'pronunciation',
      word: 'cheese',
      audioUrl: '/audio/pronunciation/cheese.mp3',
      phonetic: '/tʃiːz/',
      explanation: 'Long "ee" sound',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q4',
      type: 'pronunciation',
      word: 'sandwich',
      audioUrl: '/audio/pronunciation/sandwich.mp3',
      phonetic: '/ˈsæn.wɪdʒ/',
      explanation: 'Stress on first syllable: SAND-wich',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q5',
      type: 'pronunciation',
      word: 'vegetables',
      audioUrl: '/audio/pronunciation/vegetables.mp3',
      phonetic: '/ˈvedʒ.tə.bəlz/',
      explanation: 'Stress on first syllable: VEG-e-ta-bles (often pronounced VEG-ta-bles)',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q6',
      type: 'pronunciation',
      word: 'chocolate',
      audioUrl: '/audio/pronunciation/chocolate.mp3',
      phonetic: '/ˈtʃɒk.lət/',
      explanation: 'Stress on first syllable: CHOC-o-late (often pronounced CHOC-late)',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q7',
      type: 'pronunciation',
      word: 'breakfast',
      audioUrl: '/audio/pronunciation/breakfast.mp3',
      phonetic: '/ˈbrek.fəst/',
      explanation: 'Stress on first syllable: BREAK-fast',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q8',
      type: 'pronunciation',
      word: 'tomato',
      audioUrl: '/audio/pronunciation/tomato.mp3',
      phonetic: '/təˈmɑː.təʊ/ (UK) or /təˈmeɪ.t̬oʊ/ (US)',
      explanation: 'Stress on second syllable: to-MA-to',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q9',
      type: 'pronunciation',
      word: 'potato',
      audioUrl: '/audio/pronunciation/potato.mp3',
      phonetic: '/pəˈteɪ.təʊ/',
      explanation: 'Stress on second syllable: po-TA-to',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q10',
      type: 'pronunciation',
      word: 'orange',
      audioUrl: '/audio/pronunciation/orange.mp3',
      phonetic: '/ˈɒr.ɪndʒ/',
      explanation: 'Stress on first syllable: OR-ange',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q11',
      type: 'pronunciation',
      word: 'water',
      audioUrl: '/audio/pronunciation/water.mp3',
      phonetic: '/ˈwɔː.tər/',
      explanation: 'Stress on first syllable: WA-ter',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q12',
      type: 'pronunciation',
      word: 'coffee',
      audioUrl: '/audio/pronunciation/coffee.mp3',
      phonetic: '/ˈkɒf.i/',
      explanation: 'Stress on first syllable: COF-fee',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q13',
      type: 'pronunciation',
      word: 'butter',
      audioUrl: '/audio/pronunciation/butter.mp3',
      phonetic: '/ˈbʌt.ər/',
      explanation: 'Stress on first syllable: BUT-ter',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q14',
      type: 'pronunciation',
      word: 'chicken',
      audioUrl: '/audio/pronunciation/chicken.mp3',
      phonetic: '/ˈtʃɪk.ɪn/',
      explanation: 'Stress on first syllable: CHICK-en',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q15',
      type: 'pronunciation',
      word: 'delicious',
      audioUrl: '/audio/pronunciation/delicious.mp3',
      phonetic: '/dɪˈlɪʃ.əs/',
      explanation: 'Stress on second syllable: de-LI-cious',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q16',
      type: 'pronunciation',
      word: 'restaurant',
      audioUrl: '/audio/pronunciation/restaurant.mp3',
      phonetic: '/ˈres.tər.ɒnt/',
      explanation: 'Stress on first syllable: RES-tau-rant (often pronounced RES-trant)',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q17',
      type: 'pronunciation',
      word: 'hungry',
      audioUrl: '/audio/pronunciation/hungry.mp3',
      phonetic: '/ˈhʌŋ.ɡri/',
      explanation: 'Stress on first syllable: HUN-gry',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q18',
      type: 'pronunciation',
      word: 'thirsty',
      audioUrl: '/audio/pronunciation/thirsty.mp3',
      phonetic: '/ˈθɜː.sti/',
      explanation: 'Stress on first syllable: THIR-sty. Note the "th" sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q19',
      type: 'pronunciation',
      word: 'supermarket',
      audioUrl: '/audio/pronunciation/supermarket.mp3',
      phonetic: '/ˈsuː.pəˌmɑː.kɪt/',
      explanation: 'Primary stress on first syllable, secondary on third: SU-per-MAR-ket',
      points: 1
    },
    {
      id: 'a1-m3-l1-p1-q20',
      type: 'pronunciation',
      word: 'vegetarian',
      audioUrl: '/audio/pronunciation/vegetarian.mp3',
      phonetic: '/ˌvedʒ.əˈteə.ri.ən/',
      explanation: 'Stress on third syllable: veg-e-TAR-i-an',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M3_L1_LISTENING = {
  id: 'a1-m3-l1-listening-1',
  type: 'listening',
  audioUrl: '/audio/a1-m3-l1-listening-1.mp3',
  transcript: `Hello! My name is Sophie. Today I want to talk about my favorite foods and drinks. For breakfast, I usually have some bread with butter and jam. I also drink a cup of coffee with a little milk. Sometimes I eat an apple or a banana.

For lunch, I like to eat a sandwich with cheese and some tomatoes. I drink water or orange juice. I don't drink much soda because it's not healthy.

For dinner, my family eats chicken or fish with rice and vegetables. We also have some salad. After dinner, we sometimes eat a piece of cake or some cookies.

I love fruit! I eat a lot of oranges, apples, and bananas. I also like yogurt. On weekends, I go to the supermarket and buy food for the week. I always buy some milk, eggs, and bread because we use them every day.`,
  duration: 60,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m3-l1-list-q1',
      type: 'multiple-choice',
      question: 'What does Sophie have for breakfast?',
      options: ['Eggs and bacon', 'Bread with butter and jam', 'Cereal with milk', 'Fruit only'],
      correctAnswer: 'Bread with butter and jam',
      explanation: 'Sophie says "I usually have some bread with butter and jam."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q2',
      type: 'multiple-choice',
      question: 'What does Sophie drink for breakfast?',
      options: ['Tea', 'Coffee with milk', 'Orange juice', 'Water'],
      correctAnswer: 'Coffee with milk',
      explanation: 'Sophie says "I also drink a cup of coffee with a little milk."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q3',
      type: 'true-false',
      question: 'Sophie sometimes eats fruit for breakfast.',
      correctAnswer: 'true',
      explanation: 'Sophie says "Sometimes I eat an apple or a banana."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q4',
      type: 'multiple-choice',
      question: 'What does Sophie eat for lunch?',
      options: ['Pizza', 'A sandwich with cheese', 'Chicken with rice', 'Salad only'],
      correctAnswer: 'A sandwich with cheese',
      explanation: 'Sophie says "I like to eat a sandwich with cheese and some tomatoes."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q5',
      type: 'true-false',
      question: 'Sophie drinks a lot of soda.',
      correctAnswer: 'false',
      explanation: 'Sophie says "I don\'t drink much soda because it\'s not healthy."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q6',
      type: 'multiple-choice',
      question: 'What does Sophie drink for lunch?',
      options: ['Coffee', 'Water or orange juice', 'Soda', 'Tea'],
      correctAnswer: 'Water or orange juice',
      explanation: 'Sophie says "I drink water or orange juice."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q7',
      type: 'multiple-choice',
      question: 'What does Sophie\'s family eat for dinner?',
      options: ['Pizza', 'Chicken or fish with rice', 'Sandwiches', 'Pasta'],
      correctAnswer: 'Chicken or fish with rice',
      explanation: 'Sophie says "my family eats chicken or fish with rice and vegetables."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q8',
      type: 'true-false',
      question: 'Sophie\'s family has salad with dinner.',
      correctAnswer: 'true',
      explanation: 'Sophie says "We also have some salad."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q9',
      type: 'multiple-choice',
      question: 'What does Sophie sometimes eat after dinner?',
      options: ['Ice cream', 'Cake or cookies', 'Fruit', 'Nothing'],
      correctAnswer: 'Cake or cookies',
      explanation: 'Sophie says "we sometimes eat a piece of cake or some cookies."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q10',
      type: 'true-false',
      question: 'Sophie loves fruit.',
      correctAnswer: 'true',
      explanation: 'Sophie says "I love fruit!"',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q11',
      type: 'multiple-choice',
      question: 'Which fruits does Sophie eat?',
      options: ['Grapes and strawberries', 'Oranges, apples, and bananas', 'Pears and peaches', 'Only apples'],
      correctAnswer: 'Oranges, apples, and bananas',
      explanation: 'Sophie says "I eat a lot of oranges, apples, and bananas."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q12',
      type: 'true-false',
      question: 'Sophie likes yogurt.',
      correctAnswer: 'true',
      explanation: 'Sophie says "I also like yogurt."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q13',
      type: 'multiple-choice',
      question: 'When does Sophie go to the supermarket?',
      options: ['Every day', 'On weekdays', 'On weekends', 'Never'],
      correctAnswer: 'On weekends',
      explanation: 'Sophie says "On weekends, I go to the supermarket."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q14',
      type: 'true-false',
      question: 'Sophie buys food for the week.',
      correctAnswer: 'true',
      explanation: 'Sophie says "I go to the supermarket and buy food for the week."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q15',
      type: 'multiple-choice',
      question: 'What does Sophie always buy?',
      options: ['Meat and vegetables', 'Milk, eggs, and bread', 'Fruit and juice', 'Cookies and cake'],
      correctAnswer: 'Milk, eggs, and bread',
      explanation: 'Sophie says "I always buy some milk, eggs, and bread."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q16',
      type: 'true-false',
      question: 'Sophie uses milk, eggs, and bread every day.',
      correctAnswer: 'true',
      explanation: 'Sophie says "because we use them every day."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q17',
      type: 'true-false',
      question: 'Sophie thinks soda is healthy.',
      correctAnswer: 'false',
      explanation: 'Sophie says "I don\'t drink much soda because it\'s not healthy."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q18',
      type: 'multiple-choice',
      question: 'What vegetable does Sophie mention for lunch?',
      options: ['Carrots', 'Tomatoes', 'Lettuce', 'Cucumbers'],
      correctAnswer: 'Tomatoes',
      explanation: 'Sophie says "a sandwich with cheese and some tomatoes."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q19',
      type: 'true-false',
      question: 'Sophie eats vegetables with dinner.',
      correctAnswer: 'true',
      explanation: 'Sophie says "chicken or fish with rice and vegetables."',
      points: 1
    },
    {
      id: 'a1-m3-l1-list-q20',
      type: 'multiple-choice',
      question: 'How much milk does Sophie put in her coffee?',
      options: ['A lot', 'A little', 'No milk', 'The text doesn\'t say exactly'],
      correctAnswer: 'A little',
      explanation: 'Sophie says "a cup of coffee with a little milk."',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M3_L1_SPEAKING = {
  id: 'a1-m3-l1-speaking-1',
  type: 'speaking',
  prompt: 'Talk about your favorite foods and drinks. Say what you eat for breakfast, lunch, and dinner. Mention what foods you like and don\'t like. Speak for 45-90 seconds.',
  targetText: 'For breakfast, I usually eat... I like... I don\'t like... For lunch, I have... For dinner, I eat...',
  timeLimit: 90,
  evaluationCriteria: {
    pronunciation: true,
    fluency: true,
    grammar: true,
    vocabulary: true
  },
  hints: [
    'Start with: "For breakfast, I usually eat..."',
    'Use countable and uncountable nouns correctly',
    'Say: "I like..." and "I don\'t like..."',
    'Use quantifiers: some, a lot of, a little, a few',
    'Talk about drinks: "I drink..." or "I usually have..."',
    'You can mention containers: a glass of water, a cup of coffee',
    'Try to use vocabulary from this lesson',
    'Speak slowly and clearly'
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M3_L1_WRITING = {
  id: 'a1-m3-l1-writing-1',
  type: 'writing',
  title: 'Writing: My Food Habits',
  prompt: 'Write a short paragraph (60-100 words) about your food and drink habits. What do you usually eat and drink? What foods do you like? Use countable and uncountable nouns correctly.',
  wordLimit: { min: 60, max: 100 },
  timeLimit: 20,
  rubric: [
    {
      criteria: 'Content',
      points: 3,
      description: 'Describes food and drink habits clearly'
    },
    {
      criteria: 'Grammar - Countable/Uncountable',
      points: 3,
      description: 'Uses countable and uncountable nouns correctly'
    },
    {
      criteria: 'Vocabulary',
      points: 2,
      description: 'Uses food and drink vocabulary appropriately'
    },
    {
      criteria: 'Organization',
      points: 2,
      description: 'Clear and logical paragraph structure'
    }
  ],
  tips: [
    'Start with a general statement about food',
    'Use "I usually eat..." or "I like..."',
    'Remember: some water, an apple, three bananas',
    'Use quantifiers: some, a lot of, a little, a few, much, many',
    'Mention different meals: breakfast, lunch, dinner',
    'You can use containers: a glass of juice, a cup of tea',
    'Check your grammar - countable vs uncountable',
    'Read your paragraph before submitting'
  ],
  exampleResponse: `I like healthy food. For breakfast, I usually eat some bread with butter and drink a cup of coffee. I also have an apple or a banana. For lunch, I eat a sandwich with cheese and some vegetables. I drink water because it\'s good for my health. For dinner, I have rice with chicken and a lot of vegetables. I don\'t eat much meat. I also like fruit, especially oranges and apples. I buy food at the supermarket every week.`
};

// ============================================
// PRONUNCIATION EXERCISE
// ============================================
export const A1_M3_L1_PRONUNCIATION = {
  id: 'a1-m3-l1-pronunciation-1',
  type: 'pronunciation-practice',
  title: 'Pronunciation: Food and Drink Words',
  targetSentences: [
    {
      text: "I eat some bread for breakfast.",
      audioUrl: "/audio/a1-m3-l1-pronun-1.mp3",
      phonetic: "/aɪ iːt sʌm bred fɔːr ˈbrekfəst/"
    },
    {
      text: "She drinks a glass of water.",
      audioUrl: "/audio/a1-m3-l1-pronun-2.mp3",
      phonetic: "/ʃiː drɪŋks ə ɡlɑːs əv ˈwɔːtər/"
    },
    {
      text: "We need some milk and eggs.",
      audioUrl: "/audio/a1-m3-l1-pronun-3.mp3",
      phonetic: "/wiː niːd sʌm mɪlk ənd eɡz/"
    },
    {
      text: "They buy a lot of fruit.",
      audioUrl: "/audio/a1-m3-l1-pronun-4.mp3",
      phonetic: "/ðeɪ baɪ ə lɒt əv fruːt/"
    },
    {
      text: "How much rice do you want?",
      audioUrl: "/audio/a1-m3-l1-pronun-5.mp3",
      phonetic: "/haʊ mʌtʃ raɪs duː juː wɒnt/"
    },
    {
      text: "I'd like a cup of coffee, please.",
      audioUrl: "/audio/a1-m3-l1-pronun-6.mp3",
      phonetic: "/aɪd laɪk ə kʌp əv ˈkɒfi pliːz/"
    }
  ],
  focusPoints: [
    'Pronunciation of food words: bread /bred/, meat /miːt/, fruit /fruːt/',
    'Pronunciation of drink words: water /ˈwɔːtər/, coffee /ˈkɒfi/, juice /dʒuːs/',
    'Stress in compound words: BREAKfast, SUpermarket',
    'Linking sounds: "a lot of" /ə lɒt əv/'
  ],
  tips: [
    'Pay attention to vowel sounds in food words',
    'Practice the difference between /iː/ (eat, meat) and /ɪ/ (milk, drink)',
    'The "ea" in "bread" sounds like /e/, not /iː/',
    'In "water", the T can sound like a D in American English',
    'Listen carefully and repeat after each sentence',
    'Record yourself and compare with the model'
  ],
  questions: [
    {
      id: 'a1-m3-l1-pronun-q1',
      type: 'multiple-choice',
      question: 'How do you pronounce "bread"?',
      options: ['/bred/', '/briːd/', '/breɪd/', '/brɪd/'],
      correctAnswer: '/bred/',
      explanation: 'The correct pronunciation is /bred/. The "ea" sounds like /e/, not /iː/.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q2',
      type: 'multiple-choice',
      question: 'How do you pronounce "meat"?',
      options: ['/met/', '/miːt/', '/meɪt/', '/mɪt/'],
      correctAnswer: '/miːt/',
      explanation: 'The correct pronunciation is /miːt/. The "ea" sounds like /iː/.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q3',
      type: 'multiple-choice',
      question: 'Where is the stress in "breakfast"?',
      options: ['BREAK-fast', 'break-FAST'],
      correctAnswer: 'BREAK-fast',
      explanation: 'The stress is on the first syllable: BREAK-fast.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q4',
      type: 'multiple-choice',
      question: 'How do you pronounce "juice"?',
      options: ['/dʒuːs/', '/dʒʊs/', '/dʒaɪs/', '/ʒuːs/'],
      correctAnswer: '/dʒuːs/',
      explanation: 'The correct pronunciation is /dʒuːs/ with a long /uː/ sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q5',
      type: 'true-false',
      question: 'In "water", the vowel sound is the same as in "father".',
      correctAnswer: 'true',
      explanation: 'In British English, "water" /ˈwɔːtər/ has a similar vowel to "father" /ˈfɑːðər/.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q6',
      type: 'multiple-choice',
      question: 'Where is the stress in "supermarket"?',
      options: ['SU-per-mar-ket', 'su-PER-mar-ket', 'su-per-MAR-ket', 'su-per-mar-KET'],
      correctAnswer: 'SU-per-mar-ket',
      explanation: 'The stress is on the first syllable: SU-per-mar-ket.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q7',
      type: 'multiple-choice',
      question: 'How do you pronounce "coffee"?',
      options: ['/ˈkɒfi/', '/ˈkəʊfi/', '/ˈkɑːfi/', '/kəˈfiː/'],
      correctAnswer: '/ˈkɒfi/',
      explanation: 'The correct British pronunciation is /ˈkɒfi/ with stress on the first syllable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q8',
      type: 'true-false',
      question: 'The "ea" in "bread" and "meat" sound the same.',
      correctAnswer: 'false',
      explanation: 'False. "Bread" is /bred/ but "meat" is /miːt/. They have different vowel sounds.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q9',
      type: 'multiple-choice',
      question: 'How do you pronounce "fruit"?',
      options: ['/fruːt/', '/frʊt/', '/fraɪt/', '/frut/'],
      correctAnswer: '/fruːt/',
      explanation: 'The correct pronunciation is /fruːt/ with a long /uː/ sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q10',
      type: 'multiple-choice',
      question: 'In "a lot of", how are the words linked?',
      options: ['/ə lɒt əv/', '/eɪ lɒt ɒv/', '/ə lɒt ɔːf/', '/ə ləʊt əv/'],
      correctAnswer: '/ə lɒt əv/',
      explanation: 'The correct pronunciation is /ə lɒt əv/ with linking between words.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q11',
      type: 'true-false',
      question: 'The word "rice" rhymes with "nice".',
      correctAnswer: 'true',
      explanation: 'True. Both "rice" /raɪs/ and "nice" /naɪs/ have the same vowel sound /aɪ/.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q12',
      type: 'multiple-choice',
      question: 'How do you pronounce "vegetable"?',
      options: ['/ˈvedʒtəbəl/', '/veˈdʒetəbəl/', '/ˈvedʒɪtəbəl/', '/vedʒəˈtɑːbəl/'],
      correctAnswer: '/ˈvedʒtəbəl/',
      explanation: 'The stress is on the first syllable: VEG-e-ta-ble /ˈvedʒtəbəl/.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q13',
      type: 'multiple-choice',
      question: 'How do you pronounce "cheese"?',
      options: ['/tʃiːz/', '/ʃiːz/', '/tʃeɪz/', '/tʃɪz/'],
      correctAnswer: '/tʃiːz/',
      explanation: 'The correct pronunciation is /tʃiːz/ with a long /iː/ sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q14',
      type: 'true-false',
      question: 'In "breakfast", both syllables are stressed equally.',
      correctAnswer: 'false',
      explanation: 'False. The first syllable is stressed more: BREAK-fast.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q15',
      type: 'multiple-choice',
      question: 'How do you pronounce "sugar"?',
      options: ['/ˈʃʊɡər/', '/ˈsuːɡər/', '/ˈsʌɡər/', '/ʃuˈɡɑːr/'],
      correctAnswer: '/ˈʃʊɡər/',
      explanation: 'The correct pronunciation is /ˈʃʊɡər/. Note that "su" sounds like "shu".',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q16',
      type: 'multiple-choice',
      question: 'How do you pronounce "banana"?',
      options: ['/bəˈnɑːnə/', '/ˈbænənə/', '/bæˈnænə/', '/bəˈnænə/'],
      correctAnswer: '/bəˈnɑːnə/',
      explanation: 'The correct British pronunciation is /bəˈnɑːnə/ with stress on the second syllable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q17',
      type: 'true-false',
      question: 'The word "egg" has a short vowel sound.',
      correctAnswer: 'true',
      explanation: 'True. "Egg" /eɡ/ has a short /e/ vowel sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q18',
      type: 'multiple-choice',
      question: 'How do you pronounce "milk"?',
      options: ['/mɪlk/', '/miːlk/', '/melk/', '/mʌlk/'],
      correctAnswer: '/mɪlk/',
      explanation: 'The correct pronunciation is /mɪlk/ with a short /ɪ/ sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q19',
      type: 'multiple-choice',
      question: 'Where is the stress in "tomato"?',
      options: ['to-MA-to', 'TO-ma-to', 'to-ma-TO'],
      correctAnswer: 'to-MA-to',
      explanation: 'In British English, the stress is on the second syllable: to-MA-to /təˈmɑːtəʊ/.',
      points: 1
    },
    {
      id: 'a1-m3-l1-pronun-q20',
      type: 'true-false',
      question: 'The word "drink" rhymes with "think".',
      correctAnswer: 'true',
      explanation: 'True. Both "drink" /drɪŋk/ and "think" /θɪŋk/ rhyme.',
      points: 1
    }
  ]
};
