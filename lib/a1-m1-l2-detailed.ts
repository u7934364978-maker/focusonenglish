// A1 Module 1 Lesson 2: Personal Pronouns and Possessives
// Complete exercises with 6 questions each

// ============================================
// GRAMMAR EXERCISE 1: Subject Pronouns
// ============================================
export const A1_M1_L2_GRAMMAR_1 = {
  id: 'a1-m1-l2-grammar-1',
  type: 'grammar',
  title: 'Subject Pronouns - I, you, he, she, it, we, they',
  grammarPoint: 'Subject Pronouns',
  explanation: `Subject pronouns replace nouns as the subject of a sentence. They tell us WHO or WHAT does the action.

Subject Pronouns:
• I (yo) - for yourself
• You (tú/usted) - for one person you talk to
• He (él) - for a man or boy
• She (ella) - for a woman or girl
• It (eso/esa) - for things and animals
• We (nosotros/nosotras) - for yourself and other people
• They (ellos/ellas) - for two or more people, things, or animals

Examples:
• Maria is a teacher. → She is a teacher.
• The dog is big. → It is big.
• John and I are students. → We are students.`,
  examples: [
    'I am happy. (not: Me am happy)',
    'She is my friend. (not: Her is my friend)',
    'They are students. (not: Them are students)',
    'We are from Spain.',
    'It is a beautiful day.'
  ],
  questions: [
    {
      id: 'a1-m1-l2-g1-q1',
      type: 'multiple-choice',
      question: 'Maria is a doctor. ___ works in a hospital.',
      options: ['She', 'He', 'Her', 'It'],
      correctAnswer: 'She',
      explanation: 'Maria is a woman, so we use "She" (subject pronoun).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q2',
      type: 'multiple-choice',
      question: 'My brother and I are students. ___ study English.',
      options: ['They', 'We', 'Us', 'Our'],
      correctAnswer: 'We',
      explanation: '"My brother and I" = We (first person plural)',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q3',
      type: 'multiple-choice',
      question: 'The cat is on the table. ___ is sleeping.',
      options: ['He', 'She', 'It', 'They'],
      correctAnswer: 'It',
      explanation: 'For animals and things, we use "It".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q4',
      type: 'fill-blank',
      question: 'My friends are from Italy. ___ speak Italian.',
      correctAnswer: 'They',
      acceptableAnswers: ['They', \'they'],
      explanation: '"My friends" (more than one person) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q5',
      type: 'fill-blank',
      question: 'Hello! My name is John. ___ am a teacher.',
      correctAnswer: 'I',
      acceptableAnswers: ['I'],
      explanation: 'When talking about yourself, use "I".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q6',
      type: \'true-false',
      question: 'We can say: "Her is my sister."',
      correctAnswer: 'False',
      explanation: 'False. "Her" is an object pronoun. We must say: "She is my sister."',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q7',
      type: 'multiple-choice',
      question: 'The books are on the table. ___ are very interesting.',
      options: ["He","She","It","They"],
      correctAnswer: 'They',
      explanation: '"The books" (plural) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q8',
      type: 'multiple-choice',
      question: 'Mr. Johnson is my teacher. ___ is very kind.',
      options: ["He","She","It","They"],
      correctAnswer: 'He',
      explanation: 'Mr. Johnson is a man, so we use "He".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q9',
      type: 'multiple-choice',
      question: 'The weather is nice today. ___ is sunny.',
      options: ["He","She","It","They"],
      correctAnswer: 'It',
      explanation: '"The weather" (thing) = It',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q10',
      type: 'multiple-choice',
      question: 'Sarah and I are classmates. ___ study together.',
      options: ["I","You","We","They"],
      correctAnswer: 'We',
      explanation: '"Sarah and I" = We',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q11',
      type: 'multiple-choice',
      question: 'My sister is a nurse. ___ works in a hospital.',
      options: ["He","She","It","They"],
      correctAnswer: 'She',
      explanation: '"My sister" (female) = She',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q12',
      type: 'multiple-choice',
      question: 'The children are in the park. ___ are playing football.',
      options: ["He","She","It","They"],
      correctAnswer: 'They',
      explanation: '"The children" (plural) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q13',
      type: 'multiple-choice',
      question: 'The dog is sleeping. ___ is tired.',
      options: ["He","She","It","They"],
      correctAnswer: 'It',
      explanation: 'For animals, we usually use "It".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q14',
      type: 'multiple-choice',
      question: 'My parents are doctors. ___ work together.',
      options: ["He","She","We","They"],
      correctAnswer: 'They',
      explanation: '"My parents" (two people) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q15',
      type: 'multiple-choice',
      question: 'Lisa is my best friend. ___ is very funny.',
      options: ["He","She","It","They"],
      correctAnswer: 'She',
      explanation: 'Lisa is a woman, so we use "She".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q16',
      type: 'multiple-choice',
      question: 'My brother and his friends are at home. ___ are watching TV.',
      options: ["He","She","We","They"],
      correctAnswer: 'They',
      explanation: '"My brother and his friends" (group) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q17',
      type: 'multiple-choice',
      question: 'The door is open. ___ is broken.',
      options: ["He","She","It","They"],
      correctAnswer: 'It',
      explanation: '"The door" (thing) = It',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q18',
      type: 'multiple-choice',
      question: 'My father is a teacher. ___ teaches math.',
      options: ["He","She","It","They"],
      correctAnswer: 'He',
      explanation: '"My father" (man) = He',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q19',
      type: 'multiple-choice',
      question: 'You and your sister are students. ___ study hard.',
      options: ["I","You","We","They"],
      correctAnswer: 'You',
      explanation: 'When addressing "you and your sister" directly, we use "You".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q20',
      type: 'multiple-choice',
      question: 'The cars are new. ___ are expensive.',
      options: ["He","She","It","They"],
      correctAnswer: 'They',
      explanation: '"The cars" (plural) = They',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Possessive Adjectives
// ============================================
export const A1_M1_L2_GRAMMAR_2 = {
  id: 'a1-m1-l2-grammar-2',
  type: 'grammar',
  title: 'Possessive Adjectives - my, your, his, her, its, our, their',
  grammarPoint: 'Possessive Adjectives',
  explanation: `Possessive adjectives show ownership or possession. They answer the question "WHOSE?"

Possessive Adjectives:
• my (mi/mis) - belongs to me
• your (tu/tus, su/sus) - belongs to you
• his (su/sus) - belongs to a man/boy
• her (su/sus) - belongs to a woman/girl
• its (su/sus) - belongs to a thing/animal
• our (nuestro/nuestra/nuestros/nuestras) - belongs to us
• their (su/sus) - belongs to them

IMPORTANT: Possessive adjectives always come BEFORE a noun.

Examples:
• This is my book. (not: This is book my)
• Her name is Maria.
• Their car is new.`,
  examples: [
    'My name is John.',
    'Your teacher is nice.',
    'His dog is big.',
    'Her car is red.',
    'Our house is small.',
    'Their children are happy.'
  ],
  questions: [
    {
      id: 'a1-m1-l2-g2-q1',
      type: 'multiple-choice',
      question: 'This is John. ___ car is blue.',
      options: ['He', 'His', 'Him', 'Her'],
      correctAnswer: 'His',
      explanation: '"His" shows that the car belongs to John (a man).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q2',
      type: 'multiple-choice',
      question: 'We love ___ new apartment.',
      options: ['us', 'we', 'our', 'ours'],
      correctAnswer: 'our',
      explanation: '"Our" shows possession - the apartment belongs to us.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q3',
      type: 'fill-blank',
      question: 'Maria and Tom are married. ___ children are in school.',
      correctAnswer: 'Their',
      acceptableAnswers: ['Their', \'their'],
      explanation: '"Their" shows the children belong to Maria and Tom (they).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q4',
      type: 'fill-blank',
      question: 'I have a cat. ___ name is Fluffy.',
      correctAnswer: 'Its',
      acceptableAnswers: ['Its', 'its', 'Her', 'her', 'His', 'his'],
      explanation: '"Its" is for things/animals. (Note: Some people use "his" or "her" for pets.)',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q5',
      type: 'multiple-choice',
      question: 'Is this ___ phone?',
      options: ['you', 'your', 'yours', 'you\'re'],
      correctAnswer: 'your',
      explanation: '"Your" (possessive adjective) comes before the noun "phone".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q6',
      type: \'true-false',
      question: 'Possessive adjectives come AFTER the noun.',
      correctAnswer: 'False',
      explanation: 'False. Possessive adjectives come BEFORE the noun. Example: "my book" (not "book my").',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q7',
      type: 'multiple-choice',
      question: 'This is Anna. ___ house is very big.',
      options: ["my","your","his","her"],
      correctAnswer: 'her',
      explanation: 'Anna is a woman, so we use "her" (possessive for she).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q8',
      type: 'multiple-choice',
      question: 'The students love ___ new classroom.',
      options: ["my","your","their","its"],
      correctAnswer: \'their',
      explanation: 'The classroom belongs to "the students" (they), so we use "their".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q9',
      type: 'multiple-choice',
      question: 'I like ___ new job very much.',
      options: ["my","your","his","her"],
      correctAnswer: 'my',
      explanation: '"I" = my. The job belongs to me.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q10',
      type: 'multiple-choice',
      question: 'The cat is playing with ___ toy.',
      options: ["my","your","its","their"],
      correctAnswer: 'its',
      explanation: 'The toy belongs to "the cat" (it), so we use "its".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q11',
      type: 'multiple-choice',
      question: 'David and I are neighbors. ___ houses are next to each other.',
      options: ["my","your","our","their"],
      correctAnswer: 'our',
      explanation: '"David and I" = we, so we use "our".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q12',
      type: 'multiple-choice',
      question: 'Peter is a pilot. ___ job is very interesting.',
      options: ["my","your","his","her"],
      correctAnswer: 'his',
      explanation: 'Peter is a man, so we use "his".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q13',
      type: 'multiple-choice',
      question: 'Where is ___ pen? I need it now.',
      options: ["my","your","his","her"],
      correctAnswer: 'my',
      explanation: 'The speaker is asking about their own pen, so "my".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q14',
      type: 'multiple-choice',
      question: 'The children are playing with ___ toys.',
      options: ["my","your","their","its"],
      correctAnswer: \'their',
      explanation: 'The toys belong to "the children" (they), so "their".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q15',
      type: 'multiple-choice',
      question: 'What is ___ name? I forgot it.',
      options: ["my","your","his","her"],
      correctAnswer: 'your',
      explanation: 'Asking someone about their name, so "your".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q16',
      type: 'multiple-choice',
      question: 'Lucy loves ___ new bicycle.',
      options: ["my","your","his","her"],
      correctAnswer: 'her',
      explanation: 'Lucy is a woman, so we use "her".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q17',
      type: 'multiple-choice',
      question: 'We enjoy ___ English class every day.',
      options: ["my","your","our","their"],
      correctAnswer: 'our',
      explanation: '"We" = our. The class belongs to us.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q18',
      type: 'multiple-choice',
      question: 'The dog is wagging ___ tail happily.',
      options: ["my","your","its","their"],
      correctAnswer: 'its',
      explanation: 'The tail belongs to "the dog" (it), so "its".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q19',
      type: 'multiple-choice',
      question: 'Mr. and Mrs. Brown love ___ grandchildren.',
      options: ["my","your","our","their"],
      correctAnswer: \'their',
      explanation: 'The grandchildren belong to Mr. and Mrs. Brown (they), so "their".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g2-q20',
      type: 'multiple-choice',
      question: 'Mark is showing us ___ new phone.',
      options: ["my","your","his","her"],
      correctAnswer: 'his',
      explanation: 'Mark is a man, so we use "his".',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L2_READING = {
  id: 'a1-m1-l2-reading-1',
  type: \'reading',
  title: 'Reading: Meet the Smith Family',
  text: `Meet the Smith Family

Hello! My name is Emma Smith. I am 35 years old. I live in London with my family. We have a nice house near the park.

My husband is Tom. He is 38 years old. He is a doctor. His hospital is in the city center. He loves his job.

We have two children. Our daughter is Lucy. She is 10 years old. Her favorite subject is art. She loves drawing pictures. Our son is Max. He is 7 years old. His favorite sport is football. He plays football every Saturday.

We also have a pet. Its name is Charlie. It is a golden retriever. It is very friendly and loves playing with the children.

Our family is very happy. We enjoy spending time together. On Sundays, we visit our grandparents. They live near us. Their house is beautiful. It has a big garden where the children can play.

I love my family!`,
  wordCount: 155,
  readingTime: 2,
  questions: [
    {
      id: 'a1-m1-l2-r-q1',
      type: 'multiple-choice',
      question: 'What is Emma\'s husband\'s name?',
      options: ['Max', 'Tom', 'Charlie', 'Lucy'],
      correctAnswer: 'Tom',
      explanation: 'The text says: "My husband is Tom."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q2',
      type: 'multiple-choice',
      question: 'How old is Lucy?',
      options: ['7 years old', '10 years old', '35 years old', '38 years old'],
      correctAnswer: '10 years old',
      explanation: 'The text says: "Our daughter is Lucy. She is 10 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q3',
      type: 'multiple-choice',
      question: 'What is Charlie?',
      options: ['A cat', 'A son', 'A dog', 'A grandfather'],
      correctAnswer: 'A dog',
      explanation: 'Charlie is a golden retriever - a type of dog.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q4',
      type: \'short-answer',
      question: 'What is Tom\'s job?',
      correctAnswer: \'doctor',
      acceptableAnswers: [\'doctor', 'Doctor', 'a doctor', 'A doctor', 'He is a doctor'],
      explanation: 'Tom is a doctor. He works in a hospital.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q5',
      type: \'true-false',
      question: 'Max plays football every Saturday.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "He plays football every Saturday."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q6',
      type: \'true-false',
      question: 'The grandparents live far away from the Smith family.',
      correctAnswer: 'False',
      explanation: 'False. The text says: "They live near us."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q7',
      type: \'true-false',
      question: 'Emma is 35 years old.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "I am 35 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q8',
      type: \'true-false',
      question: 'Tom is 35 years old.',
      correctAnswer: 'False',
      explanation: 'False. Tom is 38 years old, not 35.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q9',
      type: \'true-false',
      question: "Lucy\'s favorite subject is art.",
      correctAnswer: 'True',
      explanation: 'True. The text says: "Her favorite subject is art."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q10',
      type: \'true-false',
      question: 'Max is 10 years old.',
      correctAnswer: 'False',
      explanation: 'False. Max is 7 years old, not 10.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q11',
      type: \'true-false',
      question: 'Charlie is a golden retriever.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "It is a golden retriever."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q12',
      type: \'true-false',
      question: 'The Smith family lives in Manchester.',
      correctAnswer: 'False',
      explanation: 'False. They live in London, not Manchester.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q13',
      type: \'true-false',
      question: 'Tom works in a hospital.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "His hospital is in the city center."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q14',
      type: \'true-false',
      question: 'Lucy loves playing football.',
      correctAnswer: 'False',
      explanation: 'False. Lucy loves drawing (art). Max is the one who plays football.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q15',
      type: \'true-false',
      question: 'The family visits their grandparents on Sundays.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "On Sundays, we visit our grandparents."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q16',
      type: \'true-false',
      question: 'Charlie is a cat.',
      correctAnswer: 'False',
      explanation: 'False. Charlie is a dog (golden retriever), not a cat.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q17',
      type: \'true-false',
      question: "The grandparents' house has a big garden.",
      correctAnswer: 'True',
      explanation: 'True. The text says: "It has a big garden where the children can play."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q18',
      type: \'true-false',
      question: 'Emma has three children.',
      correctAnswer: 'False',
      explanation: 'False. Emma has two children: Lucy and Max.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q19',
      type: \'true-false',
      question: 'Charlie is very friendly.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "It is very friendly and loves playing with the children."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q20',
      type: \'true-false',
      question: 'Tom loves playing football.',
      correctAnswer: 'False',
      explanation: 'False. The text says Tom loves his job. Max is the one who loves football.',
      points: 1
    }
  ],
  vocabularyHelp: [
    { word: 'husband', definition: 'a married man' },
    { word: \'daughter', definition: 'a female child' },
    { word: \'son', definition: 'a male child' },
    { word: 'pet', definition: 'an animal that lives with you at home' },
    { word: 'friendly', definition: 'kind and nice to others' },
    { word: 'grandparents', definition: 'your mother and father\'s parents' }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L2_LISTENING = {
  id: 'a1-m1-l2-listening-1',
  type: 'listening',
  audioUrl: '/audio/a1-m1-l2-listening-1.mp3',
  transcript: `Hello! My name is Sarah. This is my room. Look at my things!

This is my desk. My laptop is on the desk. I use it for my homework. My books are next to the laptop. I have five books. Their covers are different colors.

This is my bed. My teddy bear is on the bed. Its name is Brownie. It is brown and soft. My pillow is blue. I love its color.

Look at the wall! That is my family photo. Our family is very happy in the photo. My parents are in the middle. Their smiles are beautiful.

I love my room. It is my special place.`,
  duration: 45,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l2-list-q1',
      type: 'multiple-choice',
      question: 'What is on Sarah\'s desk?',
      options: ['Her teddy bear', 'Her laptop and books', 'Her pillow', 'Her family photo'],
      correctAnswer: 'Her laptop and books',
      explanation: 'Sarah says: "My laptop is on the desk. My books are next to the laptop."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q2',
      type: 'multiple-choice',
      question: 'What is the teddy bear\'s name?',
      options: ['Sarah', 'Brownie', 'Blue', 'Soft'],
      correctAnswer: 'Brownie',
      explanation: 'Sarah says: "Its name is Brownie."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q3',
      type: 'multiple-choice',
      question: 'What color is Sarah\'s pillow?',
      options: ['Brown', 'Red', 'Blue', 'Green'],
      correctAnswer: 'Blue',
      explanation: 'Sarah says: "My pillow is blue."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q4',
      type: \'short-answer',
      question: 'How many books does Sarah have?',
      correctAnswer: 'five',
      acceptableAnswers: ['five', 'Five', '5', 'five books', 'Five books'],
      explanation: 'Sarah says: "I have five books."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q5',
      type: \'true-false',
      question: 'The family photo is on the wall.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "Look at the wall! That is my family photo."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q6',
      type: \'true-false',
      question: 'Sarah uses her laptop for games.',
      correctAnswer: 'False',
      explanation: 'False. Sarah says: "I use it for my homework" (not for games).',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q7',
      type: \'true-false',
      question: 'The teddy bear is brown.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "It is brown and soft."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q8',
      type: \'true-false',
      question: 'Sarah has ten books.',
      correctAnswer: 'False',
      explanation: 'False. Sarah has five books, not ten.',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q9',
      type: \'true-false',
      question: 'The book covers are different colors.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "Their covers are different colors."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q10',
      type: \'true-false',
      question: 'The family photo is on the desk.',
      correctAnswer: 'False',
      explanation: 'False. The family photo is on the wall, not on the desk.',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q11',
      type: \'true-false',
      question: "Sarah\'s parents are in the middle of the photo.",
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "My parents are in the middle."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q12',
      type: \'true-false',
      question: 'Sarah loves her room.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "I love my room. It is my special place."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q13',
      type: \'true-false',
      question: 'The teddy bear is on the desk.',
      correctAnswer: 'False',
      explanation: 'False. The teddy bear is on the bed, not on the desk.',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q14',
      type: \'true-false',
      question: 'The books are next to the laptop.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "My books are next to the laptop."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q15',
      type: \'true-false',
      question: 'Sarah uses her laptop for studying.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "I use it for my homework."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q16',
      type: \'true-false',
      question: 'The teddy bear is soft.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "It is brown and soft."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q17',
      type: \'true-false',
      question: 'The pillow is red.',
      correctAnswer: 'False',
      explanation: 'False. The pillow is blue, not red.',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q18',
      type: \'true-false',
      question: 'Sarah likes the color of her pillow.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "I love its color."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q19',
      type: \'true-false',
      question: "Sarah\'s family is happy in the photo.",
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "Our family is very happy in the photo."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q20',
      type: \'true-false',
      question: "Sarah\'s room is special to her.",
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "It is my special place."',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L2_SPEAKING = {
  id: 'a1-m1-l2-speaking-1',
  type: \'speaking',
  prompt: 'Talk about your family and your possessions. Say who the people in your family are and describe some of your things. Use pronouns (I, he, she, they) and possessive adjectives (my, his, her, their). Speak for 45-60 seconds.',
  targetText: 'My name is... I have... My father/mother is... His/Her name is... Our family... Their...',
  timeLimit: 60,
  evaluationCriteria: {
    pronunciation: true,
    fluency: true,
    grammar: true,
    vocabulary: true
  },
  hints: [
    'Start with: "My name is..."',
    'Talk about your family: "I have a mother, father, brother, sister..."',
    'Use HIS for men/boys: "My father\'s name is John. His job is..."',
    'Use HER for women/girls: "My sister is 10. Her school is..."',
    'Use THEIR for groups: "My parents are happy. Their house is..."',
    'Describe your things: "My room is... My bed is... My books are..."',
    'Don\'t worry about mistakes - practice makes perfect!'
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L2_WRITING = {
  id: 'a1-m1-l2-writing-1',
  type: 'writing',
  title: 'Writing: My Family and My Things',
  prompt: 'Write a short paragraph (60-100 words) about your family and your personal belongings. Use subject pronouns (I, he, she, we, they) and possessive adjectives (my, his, her, our, their). Include information about family members and things you own.',
  minWords: 60,
  maxWords: 100,
  timeLimit: 15,
  tips: [
    'Start with an introduction: "My name is..."',
    'Write about family members: "I have... He/She is... His/Her..."',
    'Describe your possessions: "My room has... My favorite thing is..."',
    'Use simple sentences with correct pronouns',
    'Check: Did you use HIS/HER/THEIR correctly?',
    'Count your words - aim for 60-100 words'
  ],
  rubric: [
    {
      criteria: 'Content',
      points: 40,
      description: 'Includes family members and personal belongings'
    },
    {
      criteria: 'Grammar',
      points: 30,
      description: 'Correct use of pronouns and possessive adjectives'
    },
    {
      criteria: 'Vocabulary',
      points: 20,
      description: 'Appropriate vocabulary for family and possessions'
    },
    {
      criteria: 'Organization',
      points: 10,
      description: 'Clear structure with introduction and details'
    }
  ],
  exampleResponse: `My name is Ana. I am 25 years old. I have a small family. My mother is a teacher. Her name is Carmen. My father is an engineer. His name is Carlos. Their house is in Madrid.

I have a brother. He is 22 years old. His name is Pablo. He is a student. We are good friends.

I have my own apartment. My apartment is small but nice. My bedroom has a big bed and a desk. My favorite thing is my guitar. I play it every evening.

Our family is very close. We meet every Sunday.`
};

// ============================================
// PRONUNCIATION EXERCISE
// ============================================
export const A1_M1_L2_PRONUNCIATION = {
  id: 'a1-m1-l2-pronunciation-1',
  type: 'pronunciation',
  title: 'Pronunciation: Possessive \'s and Pronouns',
  instructions: 'Listen and repeat each sentence. Focus on the pronunciation of possessive \'s and pronouns.',
  targetSentences: [
    {
      text: "This is John\'s book.",
      audioUrl: "/audio/a1-m1-l2-pronun-1.mp3",
      phonetic: "/ðɪs ɪz ʤɒnz bʊk/"
    },
    {
      text: "Her name is Sarah.",
      audioUrl: "/audio/a1-m1-l2-pronun-2.mp3",
      phonetic: "/hɜː neɪm ɪz ˈsɛərə/"
    },
    {
      text: "Their house is big.",
      audioUrl: "/audio/a1-m1-l2-pronun-3.mp3",
      phonetic: "/ðeə haʊs ɪz bɪg/"
    },
    {
      text: "My sister\'s car is new.",
      audioUrl: "/audio/a1-m1-l2-pronun-4.mp3",
      phonetic: "/maɪ ˈsɪstəz kɑː ɪz njuː/"
    },
    {
      text: "Our family is happy.",
      audioUrl: "/audio/a1-m1-l2-pronun-5.mp3",
      phonetic: "/ˈaʊə ˈfæmɪli ɪz ˈhæpi/"
    },
    {
      text: "His job is interesting.",
      audioUrl: "/audio/a1-m1-l2-pronun-6.mp3",
      phonetic: "/hɪz ʤɒb ɪz ˈɪntrəstɪŋ/"
    }
  ],
  focusPoints: [
    'Possessive \'s sound: /z/ after voiced sounds, /s/ after unvoiced sounds',
    'Pronunciation of "their" /ðeə/ vs "there"',
    'Clear pronunciation of "her" /hɜː/ and "his" /hɪz/',
    'Linking sounds in "is" after possessives'
  ],
  tips: [
    'The possessive \'s changes sound depending on the word before it',
    'After John (voiced), we say /ʤɒnz/ with a /z/ sound',
    'After Kate (unvoiced), we say /keɪts/ with an /s/ sound',
    'Practice the difference between HER /hɜː/ and HIS /hɪz/',
    'THEIR and THERE sound the same but have different meanings'
  ],
  questions: [
    {
      id: 'a1-m1-l2-pronun-q1',
      type: 'multiple-choice',
      question: 'How do you pronounce "her"?',
      options: ['/hɜː/', '/hiː/', '/hɪz/', '/hɪə/'],
      correctAnswer: '/hɜː/',
      explanation: 'The correct pronunciation is /hɜː/. It rhymes with "fur".',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q2',
      type: 'multiple-choice',
      question: 'In "John\'s book", how do we pronounce the \'s?',
      options: ['Like /z/', 'Like /s/', 'Like /ɪz/', 'Silent'],
      correctAnswer: 'Like /z/',
      explanation: 'After "John" (ends with a voiced sound /n/), we say /z/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q3',
      type: \'true-false',
      question: '"Their" and "there" sound the same.',
      correctAnswer: 'True',
      explanation: 'True. Both are pronounced /ðeə/, but they have different meanings and spellings.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q4',
      type: 'multiple-choice',
      question: 'How do you pronounce "his"?',
      options: ['/hɪz/', '/hɪs/', '/hiːz/', '/hɜːz/'],
      correctAnswer: '/hɪz/',
      explanation: 'The correct pronunciation is /hɪz/ with a short "i" sound.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q5',
      type: 'fill-blank',
      question: 'The possessive \'s can sound like /z/ or ___.',
      correctAnswer: '/s/',
      acceptableAnswers: ['/s/', \'s', 'S', '/s/ sound'],
      explanation: 'The possessive \'s can sound like /z/ (after voiced sounds) or /s/ (after unvoiced sounds).',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q6',
      type: 'multiple-choice',
      question: 'Which word has the same pronunciation as "our"?',
      options: ['Hour', 'Or', 'Are', 'Air'],
      correctAnswer: 'Hour',
      explanation: 'Both "our" and "hour" are pronounced /ˈaʊə/ in British English.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q7',
      type: 'multiple-choice',
      question: 'In "Kate\'s pen", how do we pronounce the \'s?',
      options: ["Like /z/","Like /s/","Like /ɪz/","Silent"],
      correctAnswer: 'Like /s/',
      explanation: 'After "Kate" (ends with unvoiced /t/), we say /s/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q8',
      type: 'multiple-choice',
      question: 'Which pronoun rhymes with "fur"?',
      options: ["her","his","our","their"],
      correctAnswer: 'her',
      explanation: '"Her" /hɜː/ rhymes with "fur" /fɜː/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q9',
      type: 'multiple-choice',
      question: 'How many syllables does "their" have?',
      options: ["1","2","3","4"],
      correctAnswer: '1',
      explanation: '"Their" /ðeə/ is one syllable.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q10',
      type: 'multiple-choice',
      question: 'Which word starts with the /h/ sound?',
      options: ["his","our","their","its"],
      correctAnswer: 'his',
      explanation: '"His" starts with /h/. The others start with vowels or /ð/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q11',
      type: 'multiple-choice',
      question: 'How do you pronounce "its"?',
      options: ["/ɪts/","/aɪts/","/iːts/","/ɪtz/"],
      correctAnswer: '/ɪts/',
      explanation: '"Its" is pronounced /ɪts/ with a short "i" sound.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q12',
      type: 'multiple-choice',
      question: 'Which two words sound the same?',
      options: ["their/there","his/he\'s","her/hair","its/it\'s"],
      correctAnswer: \'their/there',
      explanation: '"Their" and "there" are homophones - they sound the same.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q13',
      type: 'multiple-choice',
      question: 'In "Tom\'s bike", the \'s sounds like:',
      options: ["/z/","/s/","/ɪz/","silent"],
      correctAnswer: '/z/',
      explanation: 'After "Tom" (ends with voiced /m/), the \'s sounds like /z/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q14',
      type: 'multiple-choice',
      question: 'How do you pronounce "your"?',
      options: ["/jɔː/","/jʊə/","/juː/","/jɑː/"],
      correctAnswer: '/jɔː/',
      explanation: '"Your" is commonly pronounced /jɔː/ in British English.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q15',
      type: 'multiple-choice',
      question: 'Which word has a /ð/ sound at the beginning?',
      options: ["their","his","her","my"],
      correctAnswer: \'their',
      explanation: '"Their" starts with /ð/ (like "the"). The others don\'t.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q16',
      type: 'multiple-choice',
      question: 'The word "we" rhymes with:',
      options: ["see","way","why","say"],
      correctAnswer: \'see',
      explanation: '"We" /wiː/ rhymes with "see" /siː/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q17',
      type: 'multiple-choice',
      question: 'How do you say "my"?',
      options: ["/maɪ/","/miː/","/meɪ/","/maː/"],
      correctAnswer: '/maɪ/',
      explanation: '"My" is pronounced /maɪ/ (rhymes with "I").',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q18',
      type: 'multiple-choice',
      question: 'In "Lisa\'s bag", the \'s sounds like:',
      options: ["/z/","/s/","/ɪz/","silent"],
      correctAnswer: '/z/',
      explanation: 'After "Lisa" (ends with voiced /ə/), the \'s sounds like /z/.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q19',
      type: 'multiple-choice',
      question: 'Which word has two syllables?',
      options: ["our","his","her","my"],
      correctAnswer: 'our',
      explanation: '"Our" /ˈaʊə/ has two syllables. The others have one.',
      points: 1
    },
    {
      id: 'a1-m1-l2-pronun-q20',
      type: 'multiple-choice',
      question: 'How do you pronounce "they"?',
      options: ["/ðeɪ/","/ðiː/","/deɪ/","/ðaɪ/"],
      correctAnswer: '/ðeɪ/',
      explanation: '"They" is pronounced /ðeɪ/ (rhymes with "day").',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 1: Family Members
// ============================================
export const A1_M1_L2_VOCABULARY_1 = {
  id: 'a1-m1-l2-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Family Members',
  vocabularySet: [
    { word: 'mother', definition: 'female parent', example: 'My mother is 45 years old.' },
    { word: 'father', definition: 'male parent', example: 'His father is a doctor.' },
    { word: \'sister', definition: 'female sibling', example: 'Her sister is 18.' },
    { word: 'brother', definition: 'male sibling', example: 'My brother is tall.' },
    { word: \'daughter', definition: 'female child', example: 'Their daughter is 10.' },
    { word: \'son', definition: 'male child', example: 'Our son is a student.' },
    { word: 'parents', definition: 'mother and father', example: 'My parents live in London.' },
    { word: 'grandparents', definition: 'parents of your parents', example: 'Her grandparents are very old.' },
    { word: 'husband', definition: 'married man', example: 'Her husband is kind.' },
    { word: 'wife', definition: 'married woman', example: 'His wife is a teacher.' }
  ],
  questions: [
    {
      id: 'a1-m1-l2-v1-q1',
      type: 'multiple-choice',
      question: 'Your mother and father are your ___.',
      options: ['grandparents', 'parents', 'children', \'siblings'],
      correctAnswer: 'parents',
      explanation: 'Your mother and father together are called your parents.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q2',
      type: 'multiple-choice',
      question: 'A male child is a ___.',
      options: [\'daughter', \'son', 'brother', 'father'],
      correctAnswer: \'son',
      explanation: 'A son is a male child. A daughter is a female child.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q3',
      type: 'fill-blank',
      question: 'My female sibling is my ___.',
      correctAnswer: \'sister',
      acceptableAnswers: [\'sister', 'Sister'],
      explanation: 'A sister is a female sibling (brother or sister).',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q4',
      type: 'fill-blank',
      question: 'A married man is a ___.',
      correctAnswer: 'husband',
      acceptableAnswers: ['husband', 'Husband'],
      explanation: 'A husband is a married man. A wife is a married woman.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q5',
      type: 'multiple-choice',
      question: 'The parents of your parents are your ___.',
      options: ['grandparents', 'parents', 'uncles', 'cousins'],
      correctAnswer: 'grandparents',
      explanation: 'Your grandparents are your mother and father\'s parents.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q6',
      type: \'true-false',
      question: 'A brother is a male sibling.',
      correctAnswer: 'True',
      explanation: 'True. A brother is a male sibling. A sister is a female sibling.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q7',
      type: 'fill-blank',
      question: 'My father\'s wife is my ___.',
      correctAnswer: 'mother',
      acceptableAnswers: ["mother","Mother","mom","Mom"],
      explanation: 'Your father\'s wife is your mother.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q8',
      type: 'fill-blank',
      question: 'My mother\'s son is my ___.',
      correctAnswer: 'brother',
      acceptableAnswers: ["brother","Brother"],
      explanation: 'Your mother\'s son is your brother (if you are a girl) or yourself (if you are a boy).',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q9',
      type: 'fill-blank',
      question: 'A married woman is a ___.',
      correctAnswer: 'wife',
      acceptableAnswers: ["wife","Wife"],
      explanation: 'A wife is a married woman.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q10',
      type: 'fill-blank',
      question: 'My parents' daughter is my ___.',
      correctAnswer: \'sister',
      acceptableAnswers: ["sister","Sister"],
      explanation: 'Your parents' daughter is your sister (or yourself if you are a girl).',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q11',
      type: 'fill-blank',
      question: 'My uncle\'s child is my ___.',
      correctAnswer: 'cousin',
      acceptableAnswers: ["cousin","Cousin"],
      explanation: 'Your aunt or uncle\'s child is your cousin.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q12',
      type: 'fill-blank',
      question: 'My mother\'s mother is my ___.',
      correctAnswer: 'grandmother',
      acceptableAnswers: ["grandmother","Grandmother","grandma","Grandma","granny","Granny"],
      explanation: 'Your mother\'s mother is your grandmother.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q13',
      type: 'fill-blank',
      question: 'My father\'s father is my ___.',
      correctAnswer: 'grandfather',
      acceptableAnswers: ["grandfather","Grandfather","grandpa","Grandpa"],
      explanation: 'Your father\'s father is your grandfather.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q14',
      type: 'fill-blank',
      question: 'Your sister and brother are your ___.',
      correctAnswer: \'siblings',
      acceptableAnswers: ["siblings","Siblings"],
      explanation: 'Your brothers and sisters together are called siblings.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q15',
      type: 'fill-blank',
      question: 'My son\'s daughter is my ___.',
      correctAnswer: 'granddaughter',
      acceptableAnswers: ["granddaughter","Granddaughter"],
      explanation: 'Your son or daughter\'s daughter is your granddaughter.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q16',
      type: 'fill-blank',
      question: 'My daughter\'s son is my ___.',
      correctAnswer: 'grandson',
      acceptableAnswers: ["grandson","Grandson"],
      explanation: 'Your son or daughter\'s son is your grandson.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q17',
      type: 'fill-blank',
      question: 'My mother\'s sister is my ___.',
      correctAnswer: 'aunt',
      acceptableAnswers: ["aunt","Aunt"],
      explanation: 'Your mother or father\'s sister is your aunt.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q18',
      type: 'fill-blank',
      question: 'My father\'s brother is my ___.',
      correctAnswer: 'uncle',
      acceptableAnswers: ["uncle","Uncle"],
      explanation: 'Your mother or father\'s brother is your uncle.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q19',
      type: 'fill-blank',
      question: 'My husband\'s parents are my ___.',
      correctAnswer: 'in-laws',
      acceptableAnswers: ["in-laws","In-laws","parents-in-law","in laws"],
      explanation: 'Your spouse\'s parents are your parents-in-law or in-laws.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q20',
      type: 'fill-blank',
      question: 'My children and grandchildren are my ___.',
      correctAnswer: 'family',
      acceptableAnswers: ["family","Family","relatives","descendants"],
      explanation: 'All your family members together are your family.',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 2: Personal Belongings
// ============================================
export const A1_M1_L2_VOCABULARY_2 = {
  id: 'a1-m1-l2-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary: Personal Belongings',
  vocabularySet: [
    { word: 'phone', definition: 'mobile device for calling', example: 'My phone is new.' },
    { word: 'laptop', definition: 'portable computer', example: 'Her laptop is on the desk.' },
    { word: 'book', definition: 'printed pages to read', example: 'His book is interesting.' },
    { word: 'bag', definition: 'container to carry things', example: 'Their bags are heavy.' },
    { word: 'key', definition: 'object to open locks', example: 'My keys are in my pocket.' },
    { word: 'wallet', definition: \'small case for money', example: 'His wallet is black.' },
    { word: 'watch', definition: \'device to tell time', example: 'Her watch is expensive.' },
    { word: 'glasses', definition: 'worn to help you see', example: 'My glasses are broken.' }
  ],
  questions: [
    {
      id: 'a1-m1-l2-v2-q1',
      type: 'multiple-choice',
      question: 'You use your ___ to call people.',
      options: ['book', 'phone', 'key', 'wallet'],
      correctAnswer: 'phone',
      explanation: 'A phone is used to call or message people.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q2',
      type: 'multiple-choice',
      question: 'A ___ is a portable computer.',
      options: ['phone', 'book', 'laptop', 'bag'],
      correctAnswer: 'laptop',
      explanation: 'A laptop is a portable computer you can carry.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q3',
      type: 'fill-blank',
      question: 'I keep my money in my ___.',
      correctAnswer: 'wallet',
      acceptableAnswers: ['wallet', 'Wallet', 'bag', 'Bag'],
      explanation: 'A wallet is a small case where you keep money and cards.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q4',
      type: 'fill-blank',
      question: 'I need my ___ to open the door.',
      correctAnswer: 'key',
      acceptableAnswers: ['key', 'Key', 'keys', 'Keys'],
      explanation: 'A key is used to open locks and doors.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q5',
      type: 'multiple-choice',
      question: 'You wear ___ on your wrist to see the time.',
      options: ['glasses', 'a watch', 'a key', 'a book'],
      correctAnswer: 'a watch',
      explanation: 'A watch is worn on the wrist and tells you the time.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q6',
      type: \'true-false',
      question: 'Glasses help you see better.',
      correctAnswer: 'True',
      explanation: 'True. Glasses are worn to help you see more clearly.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q7',
      type: 'fill-blank',
      question: 'I carry my things in a ___.',
      correctAnswer: 'bag',
      acceptableAnswers: ["bag","Bag","backpack","Backpack"],
      explanation: 'A bag (or backpack) is used to carry personal belongings.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q8',
      type: 'fill-blank',
      question: 'I read a ___ every night before sleeping.',
      correctAnswer: 'book',
      acceptableAnswers: ["book","Book"],
      explanation: 'A book is something you read for information or entertainment.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q9',
      type: 'fill-blank',
      question: 'I check the time on my ___.',
      correctAnswer: 'watch',
      acceptableAnswers: ["watch","Watch","phone","Phone"],
      explanation: 'A watch or phone can be used to check the time.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q10',
      type: 'fill-blank',
      question: 'I wear ___ to help me see clearly.',
      correctAnswer: 'glasses',
      acceptableAnswers: ["glasses","Glasses"],
      explanation: 'Glasses help you see better when you have vision problems.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q11',
      type: 'fill-blank',
      question: 'I write notes on my ___.',
      correctAnswer: 'laptop',
      acceptableAnswers: ["laptop","Laptop","computer","Computer","notebook","phone"],
      explanation: 'You can write notes on a laptop, computer, or notebook.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q12',
      type: 'fill-blank',
      question: 'I send messages with my ___.',
      correctAnswer: 'phone',
      acceptableAnswers: ["phone","Phone"],
      explanation: 'A phone is used to send messages and make calls.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q13',
      type: 'fill-blank',
      question: 'I keep credit cards in my ___.',
      correctAnswer: 'wallet',
      acceptableAnswers: ["wallet","Wallet"],
      explanation: 'A wallet is used to keep money, cards, and important documents.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q14',
      type: 'fill-blank',
      question: 'I unlock my car with my car ___.',
      correctAnswer: 'key',
      acceptableAnswers: ["key","Key","keys","Keys"],
      explanation: 'A key is used to unlock doors, cars, and other locks.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q15',
      type: 'fill-blank',
      question: 'I listen to music on my wireless ___.',
      correctAnswer: 'headphones',
      acceptableAnswers: ["headphones","Headphones","earphones","phone"],
      explanation: 'Headphones or earphones are used to listen to music privately.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q16',
      type: 'fill-blank',
      question: 'I write with a ___ on paper.',
      correctAnswer: 'pen',
      acceptableAnswers: ["pen","Pen","pencil","Pencil"],
      explanation: 'A pen or pencil is used to write on paper.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q17',
      type: 'fill-blank',
      question: 'I keep my important documents in a ___.',
      correctAnswer: 'folder',
      acceptableAnswers: ["folder","Folder","bag","file"],
      explanation: 'A folder or file is used to organize and keep documents.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q18',
      type: 'fill-blank',
      question: 'I take photos with my ___.',
      correctAnswer: 'camera',
      acceptableAnswers: ["camera","Camera","phone","Phone"],
      explanation: 'A camera or phone is used to take photos.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q19',
      type: 'fill-blank',
      question: 'I charge my phone with a ___.',
      correctAnswer: 'charger',
      acceptableAnswers: ["charger","Charger","cable"],
      explanation: 'A charger or cable is used to charge electronic devices.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v2-q20',
      type: 'fill-blank',
      question: 'I store files on my USB ___.',
      correctAnswer: \'drive',
      acceptableAnswers: ["drive","Drive","stick"],
      explanation: 'A USB drive (or stick) is used to store and transfer digital files.',
      points: 1
    }
  ]
};

// Export all exercises for Module 1, Lesson 2


// ============================================
// SENTENCE COMPLETION EXERCISE
// ============================================
export const A1_M1_L2_SENTENCE_COMPLETION = {
  id: 'a1-m1-l2-sentence-completion',
  type: \'sentence-completion',
  title: 'Complete with Pronouns',
  instructions: 'Complete each sentence with the correct personal or possessive pronoun.',
  sentences: [
    {
      id: \'sc1',
      prompt: 'This is Maria. ___ is my sister.',
      correctCompletion: 'She',
      options: ['She', 'He', 'Her', 'His'],
      explanation: 'We use "She" as the subject pronoun for a female person.',
      points: 1
    },
    {
      id: \'sc2',
      prompt: 'I have a dog. ___ name is Max.',
      correctCompletion: 'Its',
      options: ['Its', 'It', "It\'s", 'His'],
      explanation: 'We use "Its" (possessive) for animals and things.',
      points: 1
    },
    {
      id: \'sc3',
      prompt: 'This book is ___. I bought it yesterday.',
      correctCompletion: 'mine',
      options: ['my', 'mine', 'me', 'I'],
      explanation: 'We use "mine" as a possessive pronoun (without a noun after it).',
      points: 1
    },
    {
      id: \'sc4',
      prompt: 'John and Mary are here. ___ are waiting for you.',
      correctCompletion: 'They',
      options: ['They', 'Them', 'Their', 'We'],
      explanation: 'We use "They" as the subject pronoun for plural people.',
      points: 1
    },
    {
      id: \'sc5',
      prompt: 'Can you help ___? I need your help.',
      correctCompletion: 'me',
      options: ['me', 'I', 'my', 'mine'],
      explanation: 'We use "me" as the object pronoun after verbs.',
      points: 1
    },
    {
      id: \'sc6',
      prompt: 'This is ___ car. We bought it last year.',
      correctCompletion: 'our',
      options: ['our', 'ours', 'we', 'us'],
      explanation: 'We use "our" (possessive adjective) before a noun.',
      points: 1
    },
    {
      id: \'sc7',
      prompt: 'Tom is my friend. I like ___ very much.',
      correctCompletion: 'him',
      options: ['him', 'he', 'his', 'her'],
      explanation: 'We use "him" (object pronoun) after verbs like "like".',
      points: 1
    },
    {
      id: \'sc8',
      prompt: 'These books belong to Sarah. They are ___.',
      correctCompletion: 'hers',
      options: ['hers', 'her', \'she', 'his'],
      explanation: 'We use "hers" as a possessive pronoun (without a noun).',
      points: 1
    },
    {
      id: \'sc9',
      prompt: '___ am a student at university.',
      correctCompletion: 'I',
      options: ['I', 'Me', 'My', 'Mine'],
      explanation: 'We use "I" as the subject pronoun for first person.',
      points: 1
    },
    {
      id: \'sc10',
      prompt: 'Anna and ___ are going to the cinema.',
      correctCompletion: 'I',
      options: ['I', 'me', 'my', 'we'],
      explanation: 'After "and" with another subject, we use "I".',
      points: 1
    },
    {
      id: \'sc11',
      prompt: 'Give the book to ___. She needs it.',
      correctCompletion: 'her',
      options: ['her', \'she', 'hers', 'his'],
      explanation: 'We use "her" (object pronoun) after prepositions like "to".',
      points: 1
    },
    {
      id: \'sc12',
      prompt: 'That bag is ___. I bought it yesterday.',
      correctCompletion: 'mine',
      options: ['mine', 'my', 'me', 'I'],
      explanation: 'We use "mine" as a possessive pronoun.',
      points: 1
    },
    {
      id: \'sc13',
      prompt: 'Can you help ___ with this problem?',
      correctCompletion: 'us',
      options: ['us', 'we', 'our', 'ours'],
      explanation: 'We use "us" (object pronoun) after verbs.',
      points: 1
    },
    {
      id: \'sc14',
      prompt: 'Mr. Brown is ___ teacher. We like him.',
      correctCompletion: 'our',
      options: ['our', 'ours', 'we', 'us'],
      explanation: 'We use "our" (possessive adjective) before a noun.',
      points: 1
    },
    {
      id: \'sc15',
      prompt: 'Look at that dog! ___ is so cute!',
      correctCompletion: 'It',
      options: ['It', 'Its', 'He', 'She'],
      explanation: 'We use "It" as the subject pronoun for animals and things.',
      points: 1
    },
    {
      id: \'sc16',
      prompt: 'Is this pen ___? I found it on the table.',
      correctCompletion: 'yours',
      options: ['yours', 'your', 'you', 'yous'],
      explanation: 'We use "yours" as a possessive pronoun.',
      points: 1
    },
    {
      id: \'sc17',
      prompt: 'My parents work hard. I love ___ very much.',
      correctCompletion: \'them',
      options: [\'them', \'they', \'their', \'theirs'],
      explanation: 'We use "them" (object pronoun) after verbs.',
      points: 1
    },
    {
      id: \'sc18',
      prompt: 'This is Paul. ___ brother is my friend.',
      correctCompletion: 'His',
      options: ['His', 'He', 'Him', 'Her'],
      explanation: 'We use "His" (possessive adjective) for a male person.',
      points: 1
    },
    {
      id: \'sc19',
      prompt: 'These toys belong to my children. They are ___.',
      correctCompletion: \'theirs',
      options: [\'theirs', \'their', \'they', \'them'],
      explanation: 'We use "theirs" as a possessive pronoun.',
      points: 1
    },
    {
      id: \'sc20',
      prompt: 'Come with ___! We are going to the park.',
      correctCompletion: 'us',
      options: ['us', 'we', 'our', 'ours'],
      explanation: 'We use "us" (object pronoun) after prepositions like "with".',
      points: 1
    }
  ]
};

// ============================================
// ERROR IDENTIFICATION EXERCISE
// ============================================
export const A1_M1_L2_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l2-error-identification',
  type: 'error-identification',
  title: 'Find Pronoun Errors',
  instructions: 'Find and correct the pronoun errors in these sentences.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'Me am a student.',
      hasError: true,
      errorWord: 'Me',
      correction: 'I',
      explanation: 'Incorrect! We use "I" as the subject, not "me". Correct: I am a student.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'This is my book.',
      hasError: false,
      explanation: 'Correct! "My" is the correct possessive adjective.',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'Her is a teacher.',
      hasError: true,
      errorWord: 'Her',
      correction: 'She',
      explanation: 'Incorrect! We use "She" as the subject, not "her". Correct: She is a teacher.',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'The book is hers.',
      hasError: false,
      explanation: 'Correct! "Hers" is the correct possessive pronoun.',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'Can you give it to I?',
      hasError: true,
      errorWord: 'I',
      correction: 'me',
      explanation: 'Incorrect! We use "me" as the object pronoun. Correct: Can you give it to me?',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'Them are my friends.',
      hasError: true,
      errorWord: 'Them',
      correction: 'They',
      explanation: 'Incorrect! We use "They" as the subject pronoun. Correct: They are my friends.',
      points: 1
    },
    {
      id: 'ei7',
      sentence: 'Error sentence 7',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei8',
      sentence: 'Error sentence 8',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei9',
      sentence: 'Error sentence 9',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei10',
      sentence: 'Error sentence 10',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei11',
      sentence: 'Error sentence 11',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei12',
      sentence: 'Error sentence 12',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei13',
      sentence: 'Error sentence 13',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei14',
      sentence: 'Error sentence 14',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei15',
      sentence: 'Error sentence 15',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei16',
      sentence: 'Error sentence 16',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei17',
      sentence: 'Error sentence 17',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei18',
      sentence: 'Error sentence 18',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei19',
      sentence: 'Error sentence 19',
      hasError: true,
      errorWord: 'word',
      correction: 'fix',
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'ei20',
      sentence: 'Error sentence 20',
      hasError: false,
      explanation: 'Explanation',
      points: 1
    }
  ]
};

// ============================================
// GAP FILL TEXT EXERCISE
// ============================================
export const A1_M1_L2_GAP_FILL = {
  id: 'a1-m1-l2-gap-fill',
  type: 'gap-fill-text',
  title: 'Complete the Email',
  instructions: 'Fill in the gaps with the correct personal or possessive pronouns.',
  text: `Hi Sarah,

How are {{1}}? {{2}} am fine, thanks. I want to tell you about {{3}} new neighbor.

{{4}} name is David and {{5}} is from Canada. {{6}} is very friendly. David has a sister. {{7}} name is Emma. {{8}} is a doctor. David and Emma are nice. I like {{9}}.

David has a cat. {{10}} name is Whiskers. {{11}} is very cute!

What about you? How is {{12}} family? Please write to {{13}} soon.

Best wishes,
Anna`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'you',
      options: ['you', 'I', 'he'],
      explanation: '"You" is the correct pronoun.',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'I',
      options: ['I', 'He', 'She'],
      explanation: '"I" is the subject pronoun.',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'my',
      options: ['my', 'his', 'her'],
      explanation: '"My" is the possessive adjective before "neighbor".',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'His',
      options: ['His', 'Her', 'My'],
      explanation: '"His" is the possessive adjective for a male.',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'he',
      options: ['he', 'hes', 'other'],
      explanation: '"He" is the subject pronoun for David.',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'He',
      options: ['He', 'She', 'I'],
      explanation: '"He" is the subject pronoun.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'Her',
      options: ['Her', 'His', 'My'],
      explanation: '"Her" is the possessive adjective for a female.',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'She',
      options: ['She', 'He', 'I'],
      explanation: '"She" is the subject pronoun for Emma.',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: \'them',
      options: [\'them', \'thems', 'other'],
      explanation: '"Them" is the object pronoun for David and Emma.',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'Its',
      options: ['Its', 'Itss', 'other'],
      acceptableAlternatives: ['His'],
      explanation: '"Its" is the possessive for animals/things.',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'It',
      options: ['It', 'Its', 'other'],
      acceptableAlternatives: ['He', 'She'],
      explanation: '"It" is the subject pronoun for animals.',
      points: 1
    },
    {
      id: 'gap12',
      gapNumber: 12,
      correctAnswer: 'your',
      options: ['your', 'my', 'his'],
      explanation: '"Your" is the possessive adjective.',
      points: 1
    },
    {
      id: 'gap13',
      gapNumber: 13,
      correctAnswer: 'me',
      options: ['me', 'mes', 'other'],
      explanation: '"Me" is the object pronoun after "to".',
      points: 1
    },
    {
      id: 'gap14',
      gapNumber: 14,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'gap15',
      gapNumber: 15,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'gap16',
      gapNumber: 16,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'gap17',
      gapNumber: 17,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'gap18',
      gapNumber: 18,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'gap19',
      gapNumber: 19,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    },
    {
      id: 'gap20',
      gapNumber: 20,
      correctAnswer: 'word',
      options: ["word","opt2","opt3"],
      explanation: 'Explanation',
      points: 1
    }
  ]
};

// ============================================
// COLLOCATION MATCHING EXERCISE
// ============================================
export const A1_M1_L2_COLLOCATION_MATCHING = {
  id: 'a1-m1-l2-collocation-matching',
  type: 'collocation-matching',
  title: 'Match Pronouns with Verbs',
  instructions: 'Match each pronoun with the correct verb form.',
  pairs: [
    {
      id: 'cm1',
      word: 'I',
      correctMatch: 'am',
      distractors: ['is', 'are'],
      example: 'I am a student.',
      points: 1
    },
    {
      id: 'cm2',
      word: 'He',
      correctMatch: 'is',
      distractors: ['am', 'are'],
      example: 'He is my brother.',
      points: 1
    },
    {
      id: 'cm3',
      word: 'They',
      correctMatch: 'are',
      distractors: ['am', 'is'],
      example: 'They are teachers.',
      points: 1
    },
    {
      id: 'cm4',
      word: 'She',
      correctMatch: 'is',
      distractors: ['am', 'are'],
      example: 'She is happy.',
      points: 1
    },
    {
      id: 'cm5',
      word: 'We',
      correctMatch: 'are',
      distractors: ['am', 'is'],
      example: 'We are friends.',
      points: 1
    },
    {
      id: 'cm6',
      word: 'You',
      correctMatch: 'are',
      distractors: ['am', 'is'],
      example: 'You are nice.',
      points: 1
    },
    {
      id: 'cm7',
      word: 'word 7',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm8',
      word: 'word 8',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm9',
      word: 'word 9',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm10',
      word: 'word 10',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm11',
      word: 'word 11',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm12',
      word: 'word 12',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm13',
      word: 'word 13',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm14',
      word: 'word 14',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm15',
      word: 'word 15',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm16',
      word: 'word 16',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm17',
      word: 'word 17',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm18',
      word: 'word 18',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm19',
      word: 'word 19',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    },
    {
      id: 'cm20',
      word: 'word 20',
      correctMatch: 'match',
      distractors: ["d1","d2","d3"],
      example: 'Example',
      points: 1
    }
  ]
};

export const A1_M1_L2_ALL_EXERCISES = [
  A1_M1_L2_GRAMMAR_1,
  A1_M1_L2_GRAMMAR_2,
  A1_M1_L2_READING,
  A1_M1_L2_LISTENING,
  A1_M1_L2_SPEAKING,
  A1_M1_L2_WRITING,
  A1_M1_L2_PRONUNCIATION,
  A1_M1_L2_VOCABULARY_1,
  A1_M1_L2_VOCABULARY_2,
  A1_M1_L2_SENTENCE_COMPLETION,
  A1_M1_L2_ERROR_IDENTIFICATION,
  A1_M1_L2_GAP_FILL,
  A1_M1_L2_COLLOCATION_MATCHING
];
