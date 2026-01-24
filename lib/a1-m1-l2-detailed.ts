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
      acceptableAnswers: ['They', 'they'],
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
      type: 'true-false',
      question: 'We can say: "Her is my sister."',
      correctAnswer: 'False',
      explanation: 'False. "Her" is an object pronoun. We must say: "She is my sister."',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q7',
      type: 'multiple-choice',
      question: 'Tom is my classmate. ___ is very intelligent.',
      options: ['He', 'She', 'His', 'Him'],
      correctAnswer: 'He',
      explanation: 'Tom is a man/boy, so we use "He" (subject pronoun).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q8',
      type: 'multiple-choice',
      question: 'My parents are at home. ___ are watching TV.',
      options: ['He', 'She', 'They', 'Them'],
      correctAnswer: 'They',
      explanation: '"My parents" (two people) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q9',
      type: 'fill-blank',
      question: 'This is my dog. ___ likes to play in the park.',
      correctAnswer: 'It',
      acceptableAnswers: ['It', 'it', 'He', 'he', 'She', 'she'],
      explanation: 'For animals, we typically use "It", though "He" or "She" is also acceptable.',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q10',
      type: 'multiple-choice',
      question: 'My sister and her husband live in Paris. ___ speak French.',
      options: ['He', 'She', 'We', 'They'],
      correctAnswer: 'They',
      explanation: '"My sister and her husband" (two people) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q11',
      type: 'fill-blank',
      question: 'The car is new. ___ is very expensive.',
      correctAnswer: 'It',
      acceptableAnswers: ['It', 'it'],
      explanation: 'For objects and things, we use "It".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q12',
      type: 'multiple-choice',
      question: 'My teacher is Mrs. Brown. ___ teaches English.',
      options: ['He', 'She', 'They', 'It'],
      correctAnswer: 'She',
      explanation: 'Mrs. Brown is a woman, so we use "She".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q13',
      type: 'fill-blank',
      question: 'You and I are good friends. ___ like the same music.',
      correctAnswer: 'We',
      acceptableAnswers: ['We', 'we'],
      explanation: '"You and I" = We (first person plural)',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q14',
      type: 'multiple-choice',
      question: 'The books are on the shelf. ___ are very old.',
      options: ['It', 'Its', 'They', 'Them'],
      correctAnswer: 'They',
      explanation: '"The books" (plural) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q15',
      type: 'fill-blank',
      question: 'Mr. Smith is my neighbor. ___ is very friendly.',
      correctAnswer: 'He',
      acceptableAnswers: ['He', 'he'],
      explanation: 'Mr. Smith is a man, so we use "He".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q16',
      type: 'multiple-choice',
      question: 'My aunt lives in London. ___ works in a bank.',
      options: ['He', 'She', 'They', 'Her'],
      correctAnswer: 'She',
      explanation: '"My aunt" is a woman, so we use "She" (subject pronoun).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q17',
      type: 'fill-blank',
      question: 'The children are playing outside. ___ are very happy.',
      correctAnswer: 'They',
      acceptableAnswers: ['They', 'they'],
      explanation: '"The children" (plural) = They',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q18',
      type: 'multiple-choice',
      question: 'This is my house. ___ is big and beautiful.',
      options: ['He', 'She', 'It', 'They'],
      correctAnswer: 'It',
      explanation: 'For buildings and places, we use "It".',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q19',
      type: 'true-false',
      question: 'We can say: "Me and John are friends."',
      correctAnswer: 'False',
      explanation: 'False. We must say: "John and I are friends." Use "I" (subject pronoun), not "me" (object pronoun).',
      points: 1
    },
    {
      id: 'a1-m1-l2-g1-q20',
      type: 'fill-blank',
      question: 'My grandparents are retired. ___ travel a lot.',
      correctAnswer: 'They',
      acceptableAnswers: ['They', 'they'],
      explanation: '"My grandparents" (two people) = They',
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
      acceptableAnswers: ['Their', 'their'],
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
      type: 'true-false',
      question: 'Possessive adjectives come AFTER the noun.',
      correctAnswer: 'False',
      explanation: 'False. Possessive adjectives come BEFORE the noun. Example: "my book" (not "book my").',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L2_READING = {
  id: 'a1-m1-l2-reading-1',
  type: 'reading',
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
      type: 'short-answer',
      question: 'What is Tom\'s job?',
      correctAnswer: 'doctor',
      acceptableAnswers: ['doctor', 'Doctor', 'a doctor', 'A doctor', 'He is a doctor'],
      explanation: 'Tom is a doctor. He works in a hospital.',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q5',
      type: 'true-false',
      question: 'Max plays football every Saturday.',
      correctAnswer: 'True',
      explanation: 'True. The text says: "He plays football every Saturday."',
      points: 1
    },
    {
      id: 'a1-m1-l2-r-q6',
      type: 'true-false',
      question: 'The grandparents live far away from the Smith family.',
      correctAnswer: 'False',
      explanation: 'False. The text says: "They live near us."',
      points: 1
    }
  ],
  vocabularyHelp: [
    { word: 'husband', definition: 'a married man' },
    { word: 'daughter', definition: 'a female child' },
    { word: 'son', definition: 'a male child' },
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
      type: 'short-answer',
      question: 'How many books does Sarah have?',
      correctAnswer: 'five',
      acceptableAnswers: ['five', 'Five', '5', 'five books', 'Five books'],
      explanation: 'Sarah says: "I have five books."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q5',
      type: 'true-false',
      question: 'The family photo is on the wall.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says: "Look at the wall! That is my family photo."',
      points: 1
    },
    {
      id: 'a1-m1-l2-list-q6',
      type: 'true-false',
      question: 'Sarah uses her laptop for games.',
      correctAnswer: 'False',
      explanation: 'False. Sarah says: "I use it for my homework" (not for games).',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L2_SPEAKING = {
  id: 'a1-m1-l2-speaking-1',
  type: 'speaking',
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
      text: "This is John's book.",
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
      text: "My sister's car is new.",
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
      type: 'true-false',
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
      acceptableAnswers: ['/s/', 's', 'S', '/s/ sound'],
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
    { word: 'sister', definition: 'female sibling', example: 'Her sister is 18.' },
    { word: 'brother', definition: 'male sibling', example: 'My brother is tall.' },
    { word: 'daughter', definition: 'female child', example: 'Their daughter is 10.' },
    { word: 'son', definition: 'male child', example: 'Our son is a student.' },
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
      options: ['grandparents', 'parents', 'children', 'siblings'],
      correctAnswer: 'parents',
      explanation: 'Your mother and father together are called your parents.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q2',
      type: 'multiple-choice',
      question: 'A male child is a ___.',
      options: ['daughter', 'son', 'brother', 'father'],
      correctAnswer: 'son',
      explanation: 'A son is a male child. A daughter is a female child.',
      points: 1
    },
    {
      id: 'a1-m1-l2-v1-q3',
      type: 'fill-blank',
      question: 'My female sibling is my ___.',
      correctAnswer: 'sister',
      acceptableAnswers: ['sister', 'Sister'],
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
      type: 'true-false',
      question: 'A brother is a male sibling.',
      correctAnswer: 'True',
      explanation: 'True. A brother is a male sibling. A sister is a female sibling.',
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
    { word: 'wallet', definition: 'small case for money', example: 'His wallet is black.' },
    { word: 'watch', definition: 'device to tell time', example: 'Her watch is expensive.' },
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
      type: 'true-false',
      question: 'Glasses help you see better.',
      correctAnswer: 'True',
      explanation: 'True. Glasses are worn to help you see more clearly.',
      points: 1
    }
  ]
};

// Export all exercises for Module 1, Lesson 2
export const A1_M1_L2_ALL_EXERCISES = [
  A1_M1_L2_GRAMMAR_1,
  A1_M1_L2_GRAMMAR_2,
  A1_M1_L2_READING,
  A1_M1_L2_LISTENING,
  A1_M1_L2_SPEAKING,
  A1_M1_L2_WRITING,
  A1_M1_L2_PRONUNCIATION,
  A1_M1_L2_VOCABULARY_1,
  A1_M1_L2_VOCABULARY_2
];
