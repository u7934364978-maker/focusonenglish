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
// ============================================
// VOCABULARY EXERCISE 1: Food and Drinks Vocabulary
// ============================================
export const A1_M3_L1_VOCABULARY_1 = {
  id: 'a1-m3-l1-vocabulary-1',
  type: 'vocabulary',
  title: 'Food and Drinks Vocabulary',
  instructions: 'Learn and practice common food and drink words.',
  wordList: [
    { word: 'apple', definition: 'a round fruit with red or green skin', example: 'I eat an apple every day.' },
    { word: 'banana', definition: 'a long yellow fruit', example: 'She likes bananas for breakfast.' },
    { word: 'bread', definition: 'food made from flour and water, baked in an oven', example: 'We need some bread.' },
    { word: 'cheese', definition: 'a food made from milk', example: 'I like cheese on my sandwich.' },
    { word: 'chicken', definition: 'meat from a chicken', example: 'We have chicken for dinner.' },
    { word: 'coffee', definition: 'a hot brown drink', example: 'She drinks coffee every morning.' },
    { word: 'egg', definition: 'a round food from a chicken', example: 'I eat two eggs for breakfast.' },
    { word: 'fish', definition: 'an animal that lives in water; also the meat from this animal', example: 'We eat fish on Fridays.' },
    { word: 'juice', definition: 'liquid from fruit or vegetables', example: 'I drink orange juice.' },
    { word: 'meat', definition: 'food from animals', example: 'Do you eat meat?' },
    { word: 'milk', definition: 'a white liquid from cows', example: 'Children drink milk.' },
    { word: 'orange', definition: 'a round orange fruit', example: 'These oranges are sweet.' },
    { word: 'rice', definition: 'small white or brown grains that we cook and eat', example: 'We eat rice with vegetables.' },
    { word: 'sugar', definition: 'a sweet white substance', example: 'I need some sugar for my tea.' },
    { word: 'tea', definition: 'a hot drink made from leaves', example: 'Would you like some tea?' },
    { word: 'tomato', definition: 'a soft red fruit (used as a vegetable)', example: 'I need three tomatoes.' },
    { word: 'vegetable', definition: 'a plant that we eat (carrot, potato, etc.)', example: 'Eat your vegetables!' },
    { word: 'water', definition: 'a clear liquid that we drink', example: 'I drink a lot of water.' },
    { word: 'butter', definition: 'a yellow food made from milk', example: 'Put some butter on the bread.' },
    { word: 'sandwich', definition: 'two pieces of bread with food between them', example: 'I have a cheese sandwich for lunch.' }
  ],
  questions: [
    {
      id: 'a1-m3-l1-v1-q1',
      type: 'multiple-choice',
      question: 'What is "a round fruit with red or green skin"?',
      options: ['orange', 'apple', 'tomato', 'banana'],
      correctAnswer: 'apple',
      explanation: 'An apple is a round fruit with red or green skin.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q2',
      type: 'multiple-choice',
      question: 'What is "a long yellow fruit"?',
      options: ['orange', 'apple', 'banana', 'tomato'],
      correctAnswer: 'banana',
      explanation: 'A banana is a long yellow fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q3',
      type: 'multiple-choice',
      question: 'What is "food made from flour and water, baked in an oven"?',
      options: ['cheese', 'bread', 'rice', 'butter'],
      correctAnswer: 'bread',
      explanation: 'Bread is food made from flour and water, baked in an oven.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q4',
      type: 'multiple-choice',
      question: 'What is "a food made from milk" (not butter)?',
      options: ['cheese', 'bread', 'egg', 'meat'],
      correctAnswer: 'cheese',
      explanation: 'Cheese is a food made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q5',
      type: 'multiple-choice',
      question: 'What is "a white liquid from cows"?',
      options: ['water', 'milk', 'juice', 'coffee'],
      correctAnswer: 'milk',
      explanation: 'Milk is a white liquid from cows.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q6',
      type: 'multiple-choice',
      question: 'What is "a hot brown drink" (not tea)?',
      options: ['milk', 'juice', 'coffee', 'water'],
      correctAnswer: 'coffee',
      explanation: 'Coffee is a hot brown drink.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q7',
      type: 'multiple-choice',
      question: 'What is "a round food from a chicken"?',
      options: ['meat', 'egg', 'chicken', 'fish'],
      correctAnswer: 'egg',
      explanation: 'An egg is a round food from a chicken.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q8',
      type: 'multiple-choice',
      question: 'What are "small white or brown grains that we cook and eat"?',
      options: ['sugar', 'flour', 'rice', 'bread'],
      correctAnswer: 'rice',
      explanation: 'Rice consists of small white or brown grains that we cook and eat.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q9',
      type: 'multiple-choice',
      question: 'What is "a sweet white substance"?',
      options: ['salt', 'sugar', 'flour', 'rice'],
      correctAnswer: 'sugar',
      explanation: 'Sugar is a sweet white substance.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q10',
      type: 'multiple-choice',
      question: 'What is "a soft red fruit (used as a vegetable)"?',
      options: ['apple', 'orange', 'tomato', 'banana'],
      correctAnswer: 'tomato',
      explanation: 'A tomato is a soft red fruit that we use as a vegetable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q11',
      type: 'multiple-choice',
      question: 'What is "a clear liquid that we drink"?',
      options: ['milk', 'juice', 'coffee', 'water'],
      correctAnswer: 'water',
      explanation: 'Water is a clear liquid that we drink.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q12',
      type: 'multiple-choice',
      question: 'What is "a yellow food made from milk"?',
      options: ['cheese', 'butter', 'sugar', 'egg'],
      correctAnswer: 'butter',
      explanation: 'Butter is a yellow food made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q13',
      type: 'multiple-choice',
      question: 'What is "two pieces of bread with food between them"?',
      options: ['toast', 'sandwich', 'cake', 'cookie'],
      correctAnswer: 'sandwich',
      explanation: 'A sandwich is two pieces of bread with food between them.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q14',
      type: 'multiple-choice',
      question: 'What is "meat from a chicken"?',
      options: ['fish', 'beef', 'chicken', 'pork'],
      correctAnswer: 'chicken',
      explanation: 'Chicken is meat from a chicken.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q15',
      type: 'multiple-choice',
      question: 'What is "liquid from fruit or vegetables"?',
      options: ['water', 'milk', 'juice', 'coffee'],
      correctAnswer: 'juice',
      explanation: 'Juice is liquid from fruit or vegetables.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q16',
      type: 'multiple-choice',
      question: 'What is "a hot drink made from leaves"?',
      options: ['coffee', 'tea', 'juice', 'milk'],
      correctAnswer: 'tea',
      explanation: 'Tea is a hot drink made from leaves.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q17',
      type: 'multiple-choice',
      question: 'What is "a round orange fruit"?',
      options: ['apple', 'banana', 'tomato', 'orange'],
      correctAnswer: 'orange',
      explanation: 'An orange is a round orange fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q18',
      type: 'multiple-choice',
      question: 'What is "an animal that lives in water; also the meat from this animal"?',
      options: ['chicken', 'fish', 'beef', 'pork'],
      correctAnswer: 'fish',
      explanation: 'Fish is an animal that lives in water, and also the meat from this animal.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q19',
      type: 'multiple-choice',
      question: 'What is "food from animals"?',
      options: ['vegetable', 'fruit', 'meat', 'bread'],
      correctAnswer: 'meat',
      explanation: 'Meat is food from animals.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v1-q20',
      type: 'multiple-choice',
      question: 'What is "a plant that we eat (carrot, potato, etc.)"?',
      options: ['fruit', 'vegetable', 'meat', 'bread'],
      correctAnswer: 'vegetable',
      explanation: 'A vegetable is a plant that we eat, like carrots and potatoes.',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 2: Food and Drinks Practice
// ============================================
export const A1_M3_L1_VOCABULARY_2 = {
  id: 'a1-m3-l1-vocabulary-2',
  type: 'vocabulary',
  title: 'Food and Drinks Vocabulary Practice',
  instructions: 'Practice using food and drink vocabulary in context.',
  questions: [
    {
      id: 'a1-m3-l1-v2-q1',
      type: 'multiple-choice',
      question: 'I drink ___ every morning with my breakfast.',
      options: ['bread', 'coffee', 'chicken', 'cheese'],
      correctAnswer: 'coffee',
      explanation: 'Coffee is a drink we have in the morning.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q2',
      type: 'multiple-choice',
      question: 'She eats a ___ for a healthy snack.',
      options: ['water', 'banana', 'milk', 'tea'],
      correctAnswer: 'banana',
      explanation: 'A banana is a fruit we can eat as a snack.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q3',
      type: 'multiple-choice',
      question: 'We need ___ to make a sandwich.',
      options: ['bread', 'juice', 'sugar', 'rice'],
      correctAnswer: 'bread',
      explanation: 'We use bread to make a sandwich.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q4',
      type: 'multiple-choice',
      question: 'Children drink ___ because it\'s good for their bones.',
      options: ['coffee', 'tea', 'milk', 'juice'],
      correctAnswer: 'milk',
      explanation: 'Milk is good for children\'s bones.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q5',
      type: 'multiple-choice',
      question: 'I put ___ in my coffee to make it sweet.',
      options: ['salt', 'sugar', 'butter', 'cheese'],
      correctAnswer: 'sugar',
      explanation: 'We add sugar to make coffee sweet.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q6',
      type: 'multiple-choice',
      question: 'We eat ___ with chopsticks in Asian countries.',
      options: ['bread', 'rice', 'cheese', 'butter'],
      correctAnswer: 'rice',
      explanation: 'Rice is commonly eaten with chopsticks in Asian countries.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q7',
      type: 'multiple-choice',
      question: 'I need two ___ to make an omelette.',
      options: ['eggs', 'apples', 'oranges', 'tomatoes'],
      correctAnswer: 'eggs',
      explanation: 'We use eggs to make an omelette.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q8',
      type: 'multiple-choice',
      question: 'She puts ___ on her toast.',
      options: ['water', 'juice', 'butter', 'milk'],
      correctAnswer: 'butter',
      explanation: 'We spread butter on toast.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q9',
      type: 'multiple-choice',
      question: 'He drinks ___ when he\'s thirsty.',
      options: ['bread', 'water', 'chicken', 'cheese'],
      correctAnswer: 'water',
      explanation: 'We drink water when we\'re thirsty.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q10',
      type: 'multiple-choice',
      question: 'We eat ___ for dinner. It\'s grilled.',
      options: ['juice', 'milk', 'fish', 'bread'],
      correctAnswer: 'fish',
      explanation: 'Fish can be grilled and eaten for dinner.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q11',
      type: 'multiple-choice',
      question: 'I like ___ on my pizza.',
      options: ['coffee', 'tea', 'cheese', 'juice'],
      correctAnswer: 'cheese',
      explanation: 'Pizza usually has cheese on it.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q12',
      type: 'multiple-choice',
      question: 'She drinks orange ___ for vitamin C.',
      options: ['water', 'milk', 'tea', 'juice'],
      correctAnswer: 'juice',
      explanation: 'Orange juice contains vitamin C.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q13',
      type: 'multiple-choice',
      question: 'We put ___ in a salad.',
      options: ['coffee', 'vegetables', 'sugar', 'butter'],
      correctAnswer: 'vegetables',
      explanation: 'Salads are made with vegetables.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q14',
      type: 'multiple-choice',
      question: 'British people drink ___ in the afternoon.',
      options: ['juice', 'milk', 'tea', 'coffee'],
      correctAnswer: 'tea',
      explanation: 'British people traditionally drink tea in the afternoon.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q15',
      type: 'multiple-choice',
      question: 'I eat an ___ a day. It\'s good for my health.',
      options: ['egg', 'apple', 'orange', 'banana'],
      correctAnswer: 'apple',
      explanation: 'The saying is "An apple a day keeps the doctor away."',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q16',
      type: 'multiple-choice',
      question: 'We make spaghetti sauce with ___ .',
      options: ['bananas', 'apples', 'tomatoes', 'oranges'],
      correctAnswer: 'tomatoes',
      explanation: 'Spaghetti sauce is made with tomatoes.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q17',
      type: 'multiple-choice',
      question: 'Vegetarians don\'t eat ___ .',
      options: ['vegetables', 'fruit', 'meat', 'bread'],
      correctAnswer: 'meat',
      explanation: 'Vegetarians don\'t eat meat.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q18',
      type: 'multiple-choice',
      question: 'We roast ___ in the oven for Sunday dinner.',
      options: ['water', 'juice', 'chicken', 'milk'],
      correctAnswer: 'chicken',
      explanation: 'Chicken can be roasted in the oven.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q19',
      type: 'multiple-choice',
      question: 'Monkeys love to eat ___ .',
      options: ['cheese', 'fish', 'bananas', 'bread'],
      correctAnswer: 'bananas',
      explanation: 'Monkeys are famous for loving bananas.',
      points: 1
    },
    {
      id: 'a1-m3-l1-v2-q20',
      type: 'multiple-choice',
      question: 'This ___ is sweet and round. It\'s orange in color.',
      options: ['banana', 'apple', 'orange', 'tomato'],
      correctAnswer: 'orange',
      explanation: 'An orange is sweet, round, and orange in color.',
      points: 1
    }
  ]
};

// ============================================
// FILL-IN-THE-BLANKS EXERCISE
// ============================================
export const A1_M3_L1_FILL_BLANKS = {
  id: 'a1-m3-l1-fill-blanks-1',
  type: 'fill-in-the-blanks',
  title: 'Complete the Sentences',
  instructions: 'Fill in the blanks with the correct word from the options.',
  questions: [
    {
      id: 'a1-m3-l1-fb-q1',
      type: 'fill-in-the-blank',
      question: 'I eat ___ apple every day.',
      correctAnswer: 'an',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "an" before words starting with a vowel sound. "Apple" starts with a vowel.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q2',
      type: 'fill-in-the-blank',
      question: 'She drinks ___ water after exercise.',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'many'],
      explanation: 'We use "some" with uncountable nouns in affirmative sentences. Water is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q3',
      type: 'fill-in-the-blank',
      question: 'There are three ___ on the table.',
      correctAnswer: 'bananas',
      options: ['banana', 'bananas', 'some banana', 'any banana'],
      explanation: 'With numbers, we use the plural form of countable nouns.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q4',
      type: 'fill-in-the-blank',
      question: 'Do you have ___ milk?',
      correctAnswer: 'any',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "any" in questions with uncountable nouns.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q5',
      type: 'fill-in-the-blank',
      question: 'I would like ___ sandwich, please.',
      correctAnswer: 'a',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "a" before singular countable nouns starting with a consonant sound.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q6',
      type: 'fill-in-the-blank',
      question: 'We don\'t have ___ bread.',
      correctAnswer: 'any',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "any" in negative sentences.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q7',
      type: 'fill-in-the-blank',
      question: 'She eats a lot of ___ .',
      correctAnswer: 'fruit',
      options: ['fruit', 'fruits', 'a fruit', 'an fruit'],
      explanation: '"Fruit" is usually uncountable when referring to fruit in general.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q8',
      type: 'fill-in-the-blank',
      question: 'How ___ eggs do you need?',
      correctAnswer: 'many',
      options: ['much', 'many', 'a lot', 'some'],
      explanation: 'We use "how many" with countable nouns in questions.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q9',
      type: 'fill-in-the-blank',
      question: 'He drinks ___ cup of coffee every morning.',
      correctAnswer: 'a',
      options: ['a', 'an', 'some', 'many'],
      explanation: 'We use "a" before singular countable nouns. "Cup" starts with a consonant.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q10',
      type: 'fill-in-the-blank',
      question: 'There isn\'t ___ cheese in the fridge.',
      correctAnswer: 'any',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "any" in negative sentences with uncountable nouns.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q11',
      type: 'fill-in-the-blank',
      question: 'Can I have ___ orange juice?',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'many'],
      explanation: 'We can use "some" in questions when offering or requesting. Juice is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q12',
      type: 'fill-in-the-blank',
      question: 'They buy ___ tomatoes every week.',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'much'],
      explanation: 'We use "some" with plural countable nouns in affirmative sentences.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q13',
      type: 'fill-in-the-blank',
      question: 'How ___ water do you drink?',
      correctAnswer: 'much',
      options: ['much', 'many', 'a', 'an'],
      explanation: 'We use "how much" with uncountable nouns in questions.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q14',
      type: 'fill-in-the-blank',
      question: 'I need ___ butter for the cake.',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'many'],
      explanation: 'We use "some" with uncountable nouns. Butter is uncountable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q15',
      type: 'fill-in-the-blank',
      question: 'She wants ___ piece of chocolate.',
      correctAnswer: 'a',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "a" before singular countable nouns. "Piece" starts with a consonant.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q16',
      type: 'fill-in-the-blank',
      question: 'Are there ___ cookies left?',
      correctAnswer: 'any',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "any" in questions with plural countable nouns.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q17',
      type: 'fill-in-the-blank',
      question: 'We have ___ rice for dinner.',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'many'],
      explanation: 'We use "some" with uncountable nouns in affirmative sentences.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q18',
      type: 'fill-in-the-blank',
      question: 'I drink ___ glass of milk before bed.',
      correctAnswer: 'a',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "a" before singular countable nouns. "Glass" starts with a consonant.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q19',
      type: 'fill-in-the-blank',
      question: 'There are ___ apples in the bowl.',
      correctAnswer: 'some',
      options: ['a', 'an', 'some', 'much'],
      explanation: 'We use "some" with plural countable nouns in affirmative sentences.',
      points: 1
    },
    {
      id: 'a1-m3-l1-fb-q20',
      type: 'fill-in-the-blank',
      question: 'He doesn\'t eat ___ meat.',
      correctAnswer: 'any',
      options: ['a', 'an', 'some', 'any'],
      explanation: 'We use "any" in negative sentences with uncountable nouns.',
      points: 1
    }
  ]
};

// ============================================
// MULTIPLE CHOICE EXERCISE
// ============================================
export const A1_M3_L1_MULTIPLE_CHOICE = {
  id: 'a1-m3-l1-multiple-choice-1',
  type: 'multiple-choice',
  title: 'Food and Drinks - Multiple Choice',
  instructions: 'Choose the correct answer for each question.',
  questions: [
    {
      id: 'a1-m3-l1-mc-q1',
      type: 'multiple-choice',
      question: 'What do you eat for breakfast?',
      options: ['Coffee and tea', 'Bread and eggs', 'Lunch and dinner', 'Water and juice'],
      correctAnswer: 'Bread and eggs',
      explanation: 'Bread and eggs are typical breakfast foods.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q2',
      type: 'multiple-choice',
      question: 'Which is a dairy product?',
      options: ['Apple', 'Cheese', 'Rice', 'Chicken'],
      correctAnswer: 'Cheese',
      explanation: 'Cheese is a dairy product made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q3',
      type: 'multiple-choice',
      question: 'Which drink is hot?',
      options: ['Water', 'Orange juice', 'Coffee', 'Milk'],
      correctAnswer: 'Coffee',
      explanation: 'Coffee is typically served hot.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q4',
      type: 'multiple-choice',
      question: 'What do vegetarians NOT eat?',
      options: ['Vegetables', 'Fruit', 'Meat', 'Bread'],
      correctAnswer: 'Meat',
      explanation: 'Vegetarians don\'t eat meat.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q5',
      type: 'multiple-choice',
      question: 'Which is a fruit?',
      options: ['Carrot', 'Potato', 'Banana', 'Onion'],
      correctAnswer: 'Banana',
      explanation: 'A banana is a fruit. The others are vegetables.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q6',
      type: 'multiple-choice',
      question: 'What do you put in tea to make it sweet?',
      options: ['Salt', 'Sugar', 'Butter', 'Cheese'],
      correctAnswer: 'Sugar',
      explanation: 'We add sugar to make tea sweet.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q7',
      type: 'multiple-choice',
      question: 'Which food comes from the sea?',
      options: ['Chicken', 'Fish', 'Beef', 'Pork'],
      correctAnswer: 'Fish',
      explanation: 'Fish comes from the sea.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q8',
      type: 'multiple-choice',
      question: 'What is the main ingredient in bread?',
      options: ['Sugar', 'Flour', 'Rice', 'Salt'],
      correctAnswer: 'Flour',
      explanation: 'Flour is the main ingredient in bread.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q9',
      type: 'multiple-choice',
      question: 'Which is good to drink when you\'re thirsty?',
      options: ['Bread', 'Cheese', 'Water', 'Rice'],
      correctAnswer: 'Water',
      explanation: 'Water is the best drink when you\'re thirsty.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q10',
      type: 'multiple-choice',
      question: 'What color is an orange?',
      options: ['Red', 'Green', 'Orange', 'Yellow'],
      correctAnswer: 'Orange',
      explanation: 'An orange is orange in color.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q11',
      type: 'multiple-choice',
      question: 'Which food is yellow and long?',
      options: ['Apple', 'Banana', 'Orange', 'Tomato'],
      correctAnswer: 'Banana',
      explanation: 'A banana is yellow and long.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q12',
      type: 'multiple-choice',
      question: 'What do chickens produce?',
      options: ['Milk', 'Eggs', 'Cheese', 'Butter'],
      correctAnswer: 'Eggs',
      explanation: 'Chickens produce eggs.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q13',
      type: 'multiple-choice',
      question: 'Which is eaten with chopsticks in Asia?',
      options: ['Pizza', 'Sandwich', 'Rice', 'Burger'],
      correctAnswer: 'Rice',
      explanation: 'Rice is commonly eaten with chopsticks in Asia.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q14',
      type: 'multiple-choice',
      question: 'What is white and comes from cows?',
      options: ['Water', 'Juice', 'Milk', 'Tea'],
      correctAnswer: 'Milk',
      explanation: 'Milk is white and comes from cows.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q15',
      type: 'multiple-choice',
      question: 'Which is a red fruit often used in salads?',
      options: ['Apple', 'Banana', 'Tomato', 'Orange'],
      correctAnswer: 'Tomato',
      explanation: 'Tomatoes are red and often used in salads.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q16',
      type: 'multiple-choice',
      question: 'What do you spread on bread?',
      options: ['Water', 'Butter', 'Tea', 'Coffee'],
      correctAnswer: 'Butter',
      explanation: 'We spread butter on bread.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q17',
      type: 'multiple-choice',
      question: 'Which meal do you eat in the evening?',
      options: ['Breakfast', 'Lunch', 'Dinner', 'Snack'],
      correctAnswer: 'Dinner',
      explanation: 'Dinner is the meal we eat in the evening.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q18',
      type: 'multiple-choice',
      question: 'What is pizza made with?',
      options: ['Rice', 'Bread dough', 'Noodles', 'Potato'],
      correctAnswer: 'Bread dough',
      explanation: 'Pizza is made with bread dough.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q19',
      type: 'multiple-choice',
      question: 'Which vitamin is in orange juice?',
      options: ['Vitamin A', 'Vitamin B', 'Vitamin C', 'Vitamin D'],
      correctAnswer: 'Vitamin C',
      explanation: 'Orange juice is rich in Vitamin C.',
      points: 1
    },
    {
      id: 'a1-m3-l1-mc-q20',
      type: 'multiple-choice',
      question: 'What is tea made from?',
      options: ['Coffee beans', 'Tea leaves', 'Fruit', 'Milk'],
      correctAnswer: 'Tea leaves',
      explanation: 'Tea is made from tea leaves.',
      points: 1
    }
  ]
};

// ============================================
// MATCHING EXERCISE
// ============================================
export const A1_M3_L1_MATCHING = {
  id: 'a1-m3-l1-matching-1',
  type: 'matching',
  title: 'Match Food and Drinks',
  instructions: 'Match each word with its correct definition or category.',
  questions: [
    {
      id: 'a1-m3-l1-match-q1',
      type: 'matching',
      question: 'Match: Apple',
      options: ['A vegetable', 'A fruit', 'A drink', 'A dairy product'],
      correctAnswer: 'A fruit',
      explanation: 'An apple is a fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q2',
      type: 'matching',
      question: 'Match: Milk',
      options: ['A fruit', 'A vegetable', 'A dairy product', 'A meat'],
      correctAnswer: 'A dairy product',
      explanation: 'Milk is a dairy product.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q3',
      type: 'matching',
      question: 'Match: Chicken',
      options: ['A vegetable', 'A fruit', 'Meat', 'A drink'],
      correctAnswer: 'Meat',
      explanation: 'Chicken is a type of meat.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q4',
      type: 'matching',
      question: 'Match: Carrot',
      options: ['A fruit', 'A vegetable', 'Meat', 'A dairy product'],
      correctAnswer: 'A vegetable',
      explanation: 'A carrot is a vegetable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q5',
      type: 'matching',
      question: 'Match: Coffee',
      options: ['A food', 'A drink', 'A vegetable', 'A fruit'],
      correctAnswer: 'A drink',
      explanation: 'Coffee is a drink.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q6',
      type: 'matching',
      question: 'Match: Cheese',
      options: ['A fruit', 'A vegetable', 'A dairy product', 'A drink'],
      correctAnswer: 'A dairy product',
      explanation: 'Cheese is a dairy product made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q7',
      type: 'matching',
      question: 'Match: Orange',
      options: ['A vegetable', 'A fruit', 'Meat', 'A dairy product'],
      correctAnswer: 'A fruit',
      explanation: 'An orange is a fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q8',
      type: 'matching',
      question: 'Match: Fish',
      options: ['A vegetable', 'A fruit', 'Meat/Seafood', 'A dairy product'],
      correctAnswer: 'Meat/Seafood',
      explanation: 'Fish is seafood, a type of meat.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q9',
      type: 'matching',
      question: 'Match: Bread',
      options: ['A fruit', 'A bakery product', 'A drink', 'A vegetable'],
      correctAnswer: 'A bakery product',
      explanation: 'Bread is a bakery product.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q10',
      type: 'matching',
      question: 'Match: Water',
      options: ['A food', 'A drink', 'A fruit', 'Meat'],
      correctAnswer: 'A drink',
      explanation: 'Water is a drink.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q11',
      type: 'matching',
      question: 'Match: Tomato',
      options: ['A fruit (used as vegetable)', 'Meat', 'A dairy product', 'A drink'],
      correctAnswer: 'A fruit (used as vegetable)',
      explanation: 'Botanically, a tomato is a fruit, but we use it as a vegetable in cooking.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q12',
      type: 'matching',
      question: 'Match: Butter',
      options: ['A fruit', 'A vegetable', 'A dairy product', 'Meat'],
      correctAnswer: 'A dairy product',
      explanation: 'Butter is a dairy product made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q13',
      type: 'matching',
      question: 'Match: Banana',
      options: ['A vegetable', 'A fruit', 'A drink', 'Meat'],
      correctAnswer: 'A fruit',
      explanation: 'A banana is a fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q14',
      type: 'matching',
      question: 'Match: Tea',
      options: ['A food', 'A drink', 'A fruit', 'A vegetable'],
      correctAnswer: 'A drink',
      explanation: 'Tea is a drink.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q15',
      type: 'matching',
      question: 'Match: Egg',
      options: ['A fruit', 'A protein food', 'A vegetable', 'A drink'],
      correctAnswer: 'A protein food',
      explanation: 'Eggs are a protein-rich food.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q16',
      type: 'matching',
      question: 'Match: Rice',
      options: ['A fruit', 'A vegetable', 'A grain', 'Meat'],
      correctAnswer: 'A grain',
      explanation: 'Rice is a grain.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q17',
      type: 'matching',
      question: 'Match: Juice',
      options: ['A food', 'A drink', 'A vegetable', 'Meat'],
      correctAnswer: 'A drink',
      explanation: 'Juice is a drink made from fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q18',
      type: 'matching',
      question: 'Match: Potato',
      options: ['A fruit', 'A vegetable', 'Meat', 'A dairy product'],
      correctAnswer: 'A vegetable',
      explanation: 'A potato is a vegetable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q19',
      type: 'matching',
      question: 'Match: Sandwich',
      options: ['A drink', 'A meal/food item', 'A fruit', 'A vegetable'],
      correctAnswer: 'A meal/food item',
      explanation: 'A sandwich is a food item made with bread.',
      points: 1
    },
    {
      id: 'a1-m3-l1-match-q20',
      type: 'matching',
      question: 'Match: Sugar',
      options: ['A fruit', 'A sweetener', 'Meat', 'A vegetable'],
      correctAnswer: 'A sweetener',
      explanation: 'Sugar is a sweetener used to make food and drinks sweet.',
      points: 1
    }
  ]
};

// ============================================
// SENTENCE BUILDING EXERCISE
// ============================================
export const A1_M3_L1_SENTENCE_BUILDING = {
  id: 'a1-m3-l1-sentence-building-1',
  type: 'sentence-building',
  title: 'Build Sentences about Food',
  instructions: 'Put the words in the correct order to make sentences.',
  questions: [
    {
      id: 'a1-m3-l1-sb-q1',
      type: 'sentence-building',
      question: 'Put in order: apple / I / an / eat',
      scrambledWords: ['apple', 'I', 'an', 'eat'],
      correctAnswer: 'I eat an apple',
      explanation: 'The correct order is: Subject (I) + Verb (eat) + Object (an apple).',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q2',
      type: 'sentence-building',
      question: 'Put in order: milk / She / drinks / some',
      scrambledWords: ['milk', 'She', 'drinks', 'some'],
      correctAnswer: 'She drinks some milk',
      explanation: 'The correct order is: Subject (She) + Verb (drinks) + Object (some milk).',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q3',
      type: 'sentence-building',
      question: 'Put in order: are / bananas / There / three',
      scrambledWords: ['are', 'bananas', 'There', 'three'],
      correctAnswer: 'There are three bananas',
      explanation: 'For "there is/are" sentences: There + be verb + quantity + noun.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q4',
      type: 'sentence-building',
      question: 'Put in order: rice / need / We / some',
      scrambledWords: ['rice', 'need', 'We', 'some'],
      correctAnswer: 'We need some rice',
      explanation: 'The correct order is: Subject (We) + Verb (need) + Object (some rice).',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q5',
      type: 'sentence-building',
      question: 'Put in order: have / any / don\'t / We / bread',
      scrambledWords: ['have', 'any', 'don\'t', 'We', 'bread'],
      correctAnswer: 'We don\'t have any bread',
      explanation: 'Negative: Subject + don\'t/doesn\'t + verb + object.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q6',
      type: 'sentence-building',
      question: 'Put in order: cheese / in / is / the / There / fridge / some',
      scrambledWords: ['cheese', 'in', 'is', 'the', 'There', 'fridge', 'some'],
      correctAnswer: 'There is some cheese in the fridge',
      explanation: 'There + be verb + quantity + noun + location.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q7',
      type: 'sentence-building',
      question: 'Put in order: eggs / two / breakfast / He / for / eats',
      scrambledWords: ['eggs', 'two', 'breakfast', 'He', 'for', 'eats'],
      correctAnswer: 'He eats two eggs for breakfast',
      explanation: 'Subject + verb + object + purpose/time.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q8',
      type: 'sentence-building',
      question: 'Put in order: like / you / Do / coffee?',
      scrambledWords: ['like', 'you', 'Do', 'coffee?'],
      correctAnswer: 'Do you like coffee?',
      explanation: 'Questions: Do/Does + subject + verb + object?',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q9',
      type: 'sentence-building',
      question: 'Put in order: water / a lot of / I / drink',
      scrambledWords: ['water', 'a lot of', 'I', 'drink'],
      correctAnswer: 'I drink a lot of water',
      explanation: 'Subject + verb + quantity + noun.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q10',
      type: 'sentence-building',
      question: 'Put in order: vegetables / eat / They / every day',
      scrambledWords: ['vegetables', 'eat', 'They', 'every day'],
      correctAnswer: 'They eat vegetables every day',
      explanation: 'Subject + verb + object + time expression.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q11',
      type: 'sentence-building',
      question: 'Put in order: any / Is / juice / there / orange?',
      scrambledWords: ['any', 'Is', 'juice', 'there', 'orange?'],
      correctAnswer: 'Is there any orange juice?',
      explanation: 'Questions: Is/Are + there + quantity + noun?',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q12',
      type: 'sentence-building',
      question: 'Put in order: sandwich / a / wants / She',
      scrambledWords: ['sandwich', 'a', 'wants', 'She'],
      correctAnswer: 'She wants a sandwich',
      explanation: 'Subject + verb + object.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q13',
      type: 'sentence-building',
      question: 'Put in order: tea / morning / drink / every / I',
      scrambledWords: ['tea', 'morning', 'drink', 'every', 'I'],
      correctAnswer: 'I drink tea every morning',
      explanation: 'Subject + verb + object + time expression.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q14',
      type: 'sentence-building',
      question: 'Put in order: fish / doesn\'t / He / like',
      scrambledWords: ['fish', 'doesn\'t', 'He', 'like'],
      correctAnswer: 'He doesn\'t like fish',
      explanation: 'Negative: Subject + doesn\'t + verb + object.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q15',
      type: 'sentence-building',
      question: 'Put in order: tomatoes / How many / need / you / do?',
      scrambledWords: ['tomatoes', 'How many', 'need', 'you', 'do?'],
      correctAnswer: 'How many tomatoes do you need?',
      explanation: 'How many + noun + do/does + subject + verb?',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q16',
      type: 'sentence-building',
      question: 'Put in order: fruit / a lot of / She / eats',
      scrambledWords: ['fruit', 'a lot of', 'She', 'eats'],
      correctAnswer: 'She eats a lot of fruit',
      explanation: 'Subject + verb + quantity + noun.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q17',
      type: 'sentence-building',
      question: 'Put in order: butter / bread / on / Put / some / the',
      scrambledWords: ['butter', 'bread', 'on', 'Put', 'some', 'the'],
      correctAnswer: 'Put some butter on the bread',
      explanation: 'Imperative: Verb + object + location.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q18',
      type: 'sentence-building',
      question: 'Put in order: chicken / for / We / have / dinner',
      scrambledWords: ['chicken', 'for', 'We', 'have', 'dinner'],
      correctAnswer: 'We have chicken for dinner',
      explanation: 'Subject + verb + object + purpose.',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q19',
      type: 'sentence-building',
      question: 'Put in order: like / Would / some / you / coffee?',
      scrambledWords: ['like', 'Would', 'some', 'you', 'coffee?'],
      correctAnswer: 'Would you like some coffee?',
      explanation: 'Polite offer: Would you like + object?',
      points: 1
    },
    {
      id: 'a1-m3-l1-sb-q20',
      type: 'sentence-building',
      question: 'Put in order: are / apples / bowl / in / There / the / some',
      scrambledWords: ['are', 'apples', 'bowl', 'in', 'There', 'the', 'some'],
      correctAnswer: 'There are some apples in the bowl',
      explanation: 'There + be verb + quantity + noun + location.',
      points: 1
    }
  ]
};

// ============================================
// TRUE/FALSE EXERCISE
// ============================================
export const A1_M3_L1_TRUE_FALSE = {
  id: 'a1-m3-l1-true-false-1',
  type: 'true-false',
  title: 'True or False - Food Facts',
  instructions: 'Decide if each statement is true or false.',
  questions: [
    {
      id: 'a1-m3-l1-tf-q1',
      type: 'true-false',
      question: 'An apple is a fruit.',
      correctAnswer: 'true',
      explanation: 'True. An apple is a fruit.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q2',
      type: 'true-false',
      question: 'Bread is uncountable.',
      correctAnswer: 'true',
      explanation: 'True. Bread is an uncountable noun. We say "some bread" or "a loaf of bread".',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q3',
      type: 'true-false',
      question: 'We use "many" with uncountable nouns.',
      correctAnswer: 'false',
      explanation: 'False. We use "many" with countable nouns. For uncountable nouns, we use "much".',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q4',
      type: 'true-false',
      question: 'Cheese is a dairy product.',
      correctAnswer: 'true',
      explanation: 'True. Cheese is a dairy product made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q5',
      type: 'true-false',
      question: 'Fish comes from trees.',
      correctAnswer: 'false',
      explanation: 'False. Fish comes from water (seas, rivers, lakes), not from trees.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q6',
      type: 'true-false',
      question: 'We can say "two waters".',
      correctAnswer: 'false',
      explanation: 'False. Water is uncountable. We say "some water" or "two glasses of water".',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q7',
      type: 'true-false',
      question: 'Coffee is a hot drink.',
      correctAnswer: 'true',
      explanation: 'True. Coffee is typically a hot drink (though it can also be served cold).',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q8',
      type: 'true-false',
      question: 'Eggs are countable.',
      correctAnswer: 'true',
      explanation: 'True. Eggs are countable. We can say one egg, two eggs, three eggs, etc.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q9',
      type: 'true-false',
      question: 'Vegetarians eat meat.',
      correctAnswer: 'false',
      explanation: 'False. Vegetarians do not eat meat.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q10',
      type: 'true-false',
      question: 'A banana is yellow.',
      correctAnswer: 'true',
      explanation: 'True. A ripe banana is yellow.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q11',
      type: 'true-false',
      question: 'We use "a" before uncountable nouns.',
      correctAnswer: 'false',
      explanation: 'False. We use "a/an" only before singular countable nouns, not uncountable nouns.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q12',
      type: 'true-false',
      question: 'Milk comes from cows.',
      correctAnswer: 'true',
      explanation: 'True. Milk comes from cows (and other animals).',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q13',
      type: 'true-false',
      question: 'Sugar makes things sweet.',
      correctAnswer: 'true',
      explanation: 'True. Sugar is used to make food and drinks sweet.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q14',
      type: 'true-false',
      question: 'Rice is a vegetable.',
      correctAnswer: 'false',
      explanation: 'False. Rice is a grain, not a vegetable.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q15',
      type: 'true-false',
      question: 'We can say "a few water".',
      correctAnswer: 'false',
      explanation: 'False. "A few" is used with countable nouns. Water is uncountable. We say "a little water".',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q16',
      type: 'true-false',
      question: 'Orange juice is made from oranges.',
      correctAnswer: 'true',
      explanation: 'True. Orange juice is made from oranges.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q17',
      type: 'true-false',
      question: 'A tomato is red.',
      correctAnswer: 'true',
      explanation: 'True. A ripe tomato is typically red.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q18',
      type: 'true-false',
      question: 'We use "much" with countable nouns.',
      correctAnswer: 'false',
      explanation: 'False. We use "much" with uncountable nouns. For countable nouns, we use "many".',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q19',
      type: 'true-false',
      question: 'Butter is made from milk.',
      correctAnswer: 'true',
      explanation: 'True. Butter is a dairy product made from milk.',
      points: 1
    },
    {
      id: 'a1-m3-l1-tf-q20',
      type: 'true-false',
      question: 'Breakfast is the meal we eat in the evening.',
      correctAnswer: 'false',
      explanation: 'False. Breakfast is the meal we eat in the morning. Dinner is the evening meal.',
      points: 1
    }
  ]
};

// ============================================
// DIALOGUE PRACTICE EXERCISE
// ============================================
export const A1_M3_L1_DIALOGUE = {
  id: 'a1-m3-l1-dialogue-1',
  type: 'dialogue',
  title: 'Dialogue Practice: At the Café',
  instructions: 'Read the dialogue and answer the questions.',
  dialogue: [
    { speaker: 'Waiter', text: 'Good morning! What would you like?' },
    { speaker: 'Customer', text: 'Good morning! I\'d like some coffee, please.' },
    { speaker: 'Waiter', text: 'Would you like milk and sugar with your coffee?' },
    { speaker: 'Customer', text: 'Yes, a little milk and two sugars, please.' },
    { speaker: 'Waiter', text: 'Anything else?' },
    { speaker: 'Customer', text: 'Yes, do you have any sandwiches?' },
    { speaker: 'Waiter', text: 'Yes, we have cheese sandwiches and chicken sandwiches.' },
    { speaker: 'Customer', text: 'I\'ll have a cheese sandwich, please.' },
    { speaker: 'Waiter', text: 'Would you like some fruit?' },
    { speaker: 'Customer', text: 'Yes, I\'d like an apple.' },
    { speaker: 'Waiter', text: 'So that\'s one coffee with milk and sugar, a cheese sandwich, and an apple. Is that correct?' },
    { speaker: 'Customer', text: 'Yes, that\'s perfect. Thank you!' },
    { speaker: 'Waiter', text: 'You\'re welcome. Enjoy your meal!' }
  ],
  questions: [
    {
      id: 'a1-m3-l1-dial-q1',
      type: 'multiple-choice',
      question: 'What does the customer want to drink?',
      options: ['Tea', 'Coffee', 'Juice', 'Water'],
      correctAnswer: 'Coffee',
      explanation: 'The customer says "I\'d like some coffee, please."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q2',
      type: 'true-false',
      question: 'The customer wants milk in the coffee.',
      correctAnswer: 'true',
      explanation: 'True. The customer says "Yes, a little milk and two sugars."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q3',
      type: 'multiple-choice',
      question: 'How much sugar does the customer want?',
      options: ['One', 'Two', 'Three', 'No sugar'],
      correctAnswer: 'Two',
      explanation: 'The customer wants "two sugars."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q4',
      type: 'multiple-choice',
      question: 'What type of sandwich does the customer order?',
      options: ['Chicken sandwich', 'Cheese sandwich', 'Fish sandwich', 'Vegetable sandwich'],
      correctAnswer: 'Cheese sandwich',
      explanation: 'The customer says "I\'ll have a cheese sandwich, please."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q5',
      type: 'true-false',
      question: 'The café has chicken sandwiches.',
      correctAnswer: 'true',
      explanation: 'True. The waiter says "we have cheese sandwiches and chicken sandwiches."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q6',
      type: 'multiple-choice',
      question: 'What fruit does the customer want?',
      options: ['A banana', 'An orange', 'An apple', 'No fruit'],
      correctAnswer: 'An apple',
      explanation: 'The customer says "I\'d like an apple."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q7',
      type: 'true-false',
      question: 'The waiter asks "Anything else?"',
      correctAnswer: 'true',
      explanation: 'True. The waiter asks this question to see if the customer wants more.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q8',
      type: 'multiple-choice',
      question: 'Who says "Enjoy your meal"?',
      options: ['The customer', 'The waiter', 'Both', 'Neither'],
      correctAnswer: 'The waiter',
      explanation: 'The waiter says "Enjoy your meal!" at the end.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q9',
      type: 'true-false',
      question: 'The customer wants a chicken sandwich.',
      correctAnswer: 'false',
      explanation: 'False. The customer wants a cheese sandwich, not a chicken sandwich.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q10',
      type: 'multiple-choice',
      question: 'What time of day is it?',
      options: ['Morning', 'Afternoon', 'Evening', 'Night'],
      correctAnswer: 'Morning',
      explanation: 'They both say "Good morning!" at the start.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q11',
      type: 'true-false',
      question: 'The customer wants a lot of milk.',
      correctAnswer: 'false',
      explanation: 'False. The customer wants "a little milk," not a lot.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q12',
      type: 'multiple-choice',
      question: 'How many items does the customer order in total?',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctAnswer: 'Three',
      explanation: 'The customer orders three items: coffee, a sandwich, and an apple.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q13',
      type: 'true-false',
      question: 'The waiter confirms the order.',
      correctAnswer: 'true',
      explanation: 'True. The waiter repeats the order to confirm: "So that\'s one coffee with milk and sugar, a cheese sandwich, and an apple."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q14',
      type: 'multiple-choice',
      question: 'What does "I\'d like" mean?',
      options: ['I want', 'I have', 'I don\'t want', 'I need to pay'],
      correctAnswer: 'I want',
      explanation: '"I\'d like" (I would like) is a polite way to say "I want."',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q15',
      type: 'true-false',
      question: 'The customer is polite.',
      correctAnswer: 'true',
      explanation: 'True. The customer uses "please" and "thank you," which shows politeness.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q16',
      type: 'multiple-choice',
      question: 'What does the waiter offer with the coffee?',
      options: ['Bread and butter', 'Milk and sugar', 'Fruit and juice', 'Cheese and meat'],
      correctAnswer: 'Milk and sugar',
      explanation: 'The waiter asks "Would you like milk and sugar with your coffee?"',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q17',
      type: 'true-false',
      question: 'The customer wants no sugar.',
      correctAnswer: 'false',
      explanation: 'False. The customer wants two sugars.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q18',
      type: 'multiple-choice',
      question: 'The customer uses "I\'d like" to:',
      options: ['Complain', 'Order politely', 'Ask a question', 'Say goodbye'],
      correctAnswer: 'Order politely',
      explanation: '"I\'d like" is a polite way to order or request something.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q19',
      type: 'true-false',
      question: 'The waiter is helpful.',
      correctAnswer: 'true',
      explanation: 'True. The waiter offers options, confirms the order, and is polite.',
      points: 1
    },
    {
      id: 'a1-m3-l1-dial-q20',
      type: 'multiple-choice',
      question: 'Where does this conversation take place?',
      options: ['At home', 'At a café/restaurant', 'At a supermarket', 'At school'],
      correctAnswer: 'At a café/restaurant',
      explanation: 'This is a typical conversation between a customer and a waiter at a café.',
      points: 1
    }
  ]
};

// ============================================
// EXPORT ALL EXERCISES
// ============================================
export const A1_M3_L1_ALL_EXERCISES = [
  A1_M3_L1_GRAMMAR_1,
  A1_M3_L1_GRAMMAR_2,
  A1_M3_L1_READING,
  A1_M3_L1_LISTENING,
  A1_M3_L1_SPEAKING,
  A1_M3_L1_WRITING,
  A1_M3_L1_PRONUNCIATION,
  A1_M3_L1_VOCABULARY_1,
  A1_M3_L1_VOCABULARY_2,
  A1_M3_L1_FILL_BLANKS,
  A1_M3_L1_MULTIPLE_CHOICE,
  A1_M3_L1_MATCHING,
  A1_M3_L1_SENTENCE_BUILDING,
  A1_M3_L1_TRUE_FALSE,
  A1_M3_L1_DIALOGUE
];
