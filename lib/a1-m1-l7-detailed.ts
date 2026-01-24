// A1 - Module 1 - Lesson 7: Consolidation and Practice
// This lesson consolidates all topics from Module 1 with more challenging exercises
// CEFR Level: A1

import { Exercise } from './course-data';

// GRAMMAR EXERCISE 1: Mixed Module 1 Topics
const A1_M1_L7_GRAMMAR_1: Exercise = {
  id: 'a1-m1-l7-grammar-1',
  type: 'grammar',
  title: 'Consolidation: All Module 1 Grammar',
  instructions: 'Complete these mixed exercises covering all Module 1 topics.',
  examples: [
    'I am from Italy. I am Italian. I am 30 years old.',
    'My sister is a teacher. Her name is Anna.',
    'Are they students? Yes, they are.'
  ],
  questions: [
    {
      id: 'a1-m1-l7-g1-q1',
      type: 'fill-blank',
      question: 'My name ___ Carlos and I ___ from Mexico.',
      correctAnswer: 'is, am',
      acceptableAnswers: ['is, am', 'is am'],
      explanation: 'We use "is" after "name" (it) and "am" with "I".',
      points: 1
    },
    {
      id: 'a1-m1-l7-g1-q2',
      type: 'multiple-choice',
      question: '___ your parents from Spain? - No, ___ from Portugal.',
      options: ['Is / they\'re', 'Are / they\'re', 'Are / we\'re', 'Is / we\'re'],
      correctAnswer: 'Are / they\'re',
      explanation: 'We use "Are" with "your parents" (they), and "they\'re" in the answer.',
      points: 1
    },
    {
      id: 'a1-m1-l7-g1-q3',
      type: 'fill-blank',
      question: 'This is Maria. ___ is my sister. ___ is 18 years old.',
      correctAnswer: 'She, She',
      acceptableAnswers: ['She, She', 'she, she', 'She she'],
      explanation: 'Maria is female, so we use "She" (subject pronoun).',
      points: 1
    },
    {
      id: 'a1-m1-l7-g1-q4',
      type: 'multiple-choice',
      question: 'How old ___ your daughter? ___ ten.',
      options: ['is / She\'s', 'are / She\'s', 'is / Her', 'are / Her'],
      correctAnswer: 'is / She\'s',
      explanation: 'We use "is" with "daughter" (she), and "She\'s" = "She is".',
      points: 1
    },
    {
      id: 'a1-m1-l7-g1-q5',
      type: 'true-false',
      question: 'We can say: "My mother she is a doctor."',
      correctAnswer: 'False',
      explanation: 'False. We say "My mother is a doctor" (don\'t repeat the subject).',
      points: 1
    },
    {
      id: 'a1-m1-l7-g1-q6',
      type: 'fill-blank',
      question: 'I have two ___. They are my brother\'s children.',
      correctAnswer: 'nephews',
      acceptableAnswers: ['nephews', 'Nephews'],
      explanation: 'Your brother\'s or sister\'s children are your nephews (male) or nieces (female).',
      points: 1
    }
  ]
};

// GRAMMAR EXERCISE 2: Advanced Combinations
const A1_M1_L7_GRAMMAR_2: Exercise = {
  id: 'a1-m1-l7-grammar-2',
  type: 'grammar',
  title: 'Practice: Complex Sentences',
  instructions: 'Create complex sentences using all Module 1 grammar.',
  examples: [
    'My name is John. I\'m American. I\'m 25. My parents are from New York.',
    'This is my sister. Her name is Lisa. She\'s 20 years old. She\'s a student.'
  ],
  questions: [
    {
      id: 'a1-m1-l7-g2-q1',
      type: 'multiple-choice',
      question: 'Complete: My brother and I ___ from Canada. ___ parents are Canadian too.',
      options: ['am / My', 'are / Our', 'is / Our', 'are / My'],
      correctAnswer: 'are / Our',
      explanation: 'We use "are" with "my brother and I" (we), and "Our" for possession.',
      points: 1
    },
    {
      id: 'a1-m1-l7-g2-q2',
      type: 'fill-blank',
      question: 'My grandmother is ___. She was born in 1943.',
      correctAnswer: '81',
      acceptableAnswers: ['81', 'eighty-one', 'eighty one'],
      explanation: '2024 - 1943 = 81 years old.',
      points: 1
    },
    {
      id: 'a1-m1-l7-g2-q3',
      type: 'multiple-choice',
      question: 'Where ___ your cousins from? ___ from Italy.',
      options: ['is / They', 'are / They\'re', 'is / Their', 'are / Their'],
      correctAnswer: 'are / They\'re',
      explanation: 'We use "are" with "cousins" (they), and "They\'re" = "They are".',
      points: 1
    },
    {
      id: 'a1-m1-l7-g2-q4',
      type: 'true-false',
      question: 'In English, nationality words always start with a capital letter.',
      correctAnswer: 'True',
      explanation: 'True. Nationality words are always capitalized (Spanish, French, Chinese).',
      points: 1
    },
    {
      id: 'a1-m1-l7-g2-q5',
      type: 'fill-blank',
      question: '___ you married? - Yes, I ___. My wife is Japanese.',
      correctAnswer: 'Are, am',
      acceptableAnswers: ['Are, am', 'are, am', 'Are am'],
      explanation: 'We use "Are" to form questions with "you", and "am" with "I".',
      points: 1
    },
    {
      id: 'a1-m1-l7-g2-q6',
      type: 'multiple-choice',
      question: 'My uncle ___ 45 years old. ___ wife is 42.',
      options: ['is / Her', 'are / His', 'is / His', 'are / Her'],
      correctAnswer: 'is / His',
      explanation: 'We use "is" with "uncle" (he), and "His" for his possession.',
      points: 1
    }
  ]
};

// READING EXERCISE
const A1_M1_L7_READING: Exercise = {
  id: 'a1-m1-l7-reading-1',
  type: 'reading',
  title: 'Reading: A Global Family',
  text: `A Global Family

My name is Lisa Chen and I have a very international family!

I am 32 years old and I am Chinese-American. I was born in San Francisco, USA, but my parents are from China. My father is 60 and my mother is 58. They moved to the USA in 1985. They are both retired now.

I am married to David. He is British, from London. He is 34 years old. We met in 2015 when we were both students in Paris. Now we live in Singapore with our two children.

Our daughter, Emma, is 6 years old. She goes to an international school. Our son, Alex, is 3. Both children speak English, Chinese, and they are learning French!

My sister, Amy, is 29. She is a doctor in New York. She is not married, but she has a boyfriend. His name is Marco and he is Italian. He is 31 and he is a musician.

My brother, Tom, is 25. He is a teacher in Beijing, China. His wife, Mei, is Chinese. She is 24 and she is a nurse. They have one son - my nephew! His name is Lucas and he is 1 year old.

Every year, we try to meet in a different country. Last year, we all met in Italy. This year, we are planning to meet in Japan! Our family speaks four languages: English, Chinese, French, and Italian. Our children are very lucky - they are learning about many different cultures.

Family is very important to us, even when we live in different countries!`,
  questions: [
    {
      id: 'a1-m1-l7-r-q1',
      type: 'multiple-choice',
      question: 'How old is Lisa?',
      options: ['29', '30', '32', '34'],
      correctAnswer: '32',
      explanation: 'Lisa says "I am 32 years old".',
      points: 1
    },
    {
      id: 'a1-m1-l7-r-q2',
      type: 'true-false',
      question: 'Lisa\'s parents were born in the USA.',
      correctAnswer: 'False',
      explanation: 'False. Lisa says "my parents are from China".',
      points: 1
    },
    {
      id: 'a1-m1-l7-r-q3',
      type: 'multiple-choice',
      question: 'Where does Lisa live now?',
      options: ['San Francisco', 'London', 'Singapore', 'Beijing'],
      correctAnswer: 'Singapore',
      explanation: 'Lisa says "Now we live in Singapore".',
      points: 1
    },
    {
      id: 'a1-m1-l7-r-q4',
      type: 'fill-blank',
      question: 'Lisa has ___ children.',
      correctAnswer: 'two',
      acceptableAnswers: ['two', 'Two', '2'],
      explanation: 'Lisa has two children: Emma (6) and Alex (3).',
      points: 1
    },
    {
      id: 'a1-m1-l7-r-q5',
      type: 'multiple-choice',
      question: 'What is Tom\'s wife\'s job?',
      options: ['Doctor', 'Teacher', 'Nurse', 'Musician'],
      correctAnswer: 'Nurse',
      explanation: 'The text says "she is a nurse".',
      points: 1
    },
    {
      id: 'a1-m1-l7-r-q6',
      type: 'true-false',
      question: 'The family meets in the same country every year.',
      correctAnswer: 'False',
      explanation: 'False. They meet "in a different country" each year.',
      points: 1
    }
  ]
};

// LISTENING EXERCISE
const A1_M1_L7_LISTENING: Exercise = {
  id: 'a1-m1-l7-listening-1',
  type: 'listening',
  title: 'Listening: Making New Friends',
  audioUrl: '/audio/a1-m1-l7-listening-1.mp3',
  transcript: `Conversation: At an International Student Meet-up

Person A: Hi! I'm Sarah. What's your name?

Person B: Hello Sarah! My name is Kenji. Nice to meet you!

Sarah: Nice to meet you too! Where are you from, Kenji?

Kenji: I'm from Japan. I'm Japanese. And you?

Sarah: I'm from Australia. I'm Australian. How old are you?

Kenji: I'm 21. What about you?

Sarah: I'm 22. So, why are you here in London?

Kenji: I'm a student. I'm studying English at the London Language School. What about you?

Sarah: I'm a student too! But I'm studying business at university.

Kenji: That's interesting! Do you have family here?

Sarah: No, my family is in Australia. My parents are in Sydney. I have one brother. He's 18 and he's a student in Melbourne.

Kenji: Oh, I see. I don't have any brothers or sisters. I'm an only child. But my uncle lives here in London. He's 45 years old. He's a chef at a Japanese restaurant.

Sarah: That's great! So you're not alone here!

Kenji: No, I'm not. What about you? Are you alone here?

Sarah: Yes, I am. But I have many friends from university.

Kenji: That's good! Well, now you have a new friend!

Sarah: Thank you! You too!`,
  duration: 95,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l7-l-q1',
      type: 'multiple-choice',
      question: 'Where is Kenji from?',
      options: ['China', 'Japan', 'Korea', 'Australia'],
      correctAnswer: 'Japan',
      explanation: 'Kenji says "I\'m from Japan".',
      points: 1
    },
    {
      id: 'a1-m1-l7-l-q2',
      type: 'fill-blank',
      question: 'Sarah is ___ years old.',
      correctAnswer: '22',
      acceptableAnswers: ['22', 'twenty-two', 'twenty two'],
      explanation: 'Sarah says "I\'m 22".',
      points: 1
    },
    {
      id: 'a1-m1-l7-l-q3',
      type: 'true-false',
      question: 'Kenji is studying business.',
      correctAnswer: 'False',
      explanation: 'False. Kenji is studying English. Sarah is studying business.',
      points: 1
    },
    {
      id: 'a1-m1-l7-l-q4',
      type: 'multiple-choice',
      question: 'How many siblings does Sarah have?',
      options: ['None', 'One brother', 'Two brothers', 'One sister'],
      correctAnswer: 'One brother',
      explanation: 'Sarah says "I have one brother".',
      points: 1
    },
    {
      id: 'a1-m1-l7-l-q5',
      type: 'multiple-choice',
      question: 'What is Kenji\'s uncle\'s job?',
      options: ['Teacher', 'Student', 'Chef', 'Doctor'],
      correctAnswer: 'Chef',
      explanation: 'Kenji says "He\'s a chef at a Japanese restaurant".',
      points: 1
    },
    {
      id: 'a1-m1-l7-l-q6',
      type: 'true-false',
      question: 'Sarah\'s family lives in London.',
      correctAnswer: 'False',
      explanation: 'False. Sarah\'s family is in Australia (Sydney and Melbourne).',
      points: 1
    }
  ]
};

// SPEAKING EXERCISE
const A1_M1_L7_SPEAKING: Exercise = {
  id: 'a1-m1-l7-speaking-1',
  type: 'speaking',
  title: 'Speaking: Complete Personal Introduction',
  instructions: 'Record a complete introduction about yourself covering all Module 1 topics. Speak for at least 90 seconds.',
  prompt: 'Introduce yourself completely covering: your name, age, nationality, family members (at least 3 people), where they live, their ages, their jobs or studies, and something you do with your family.',
  expectedResponse: 'Student should provide a complete personal and family introduction with all required information, using correct grammar and pronunciation.',
  hints: [
    'Start with: My name is..., I am... years old, I am from...',
    'Talk about family: I have... My [family member] is... years old.',
    'Mention where people live: He/She lives in...',
    'Describe jobs: My [family member] is a...',
    'Use correct verb forms: is, are, am'
  ],
  targetWords: ['name', 'age', 'from', 'family', 'mother', 'father', 'brother', 'sister', 'years old', 'lives', 'is', 'are'],
  timeLimit: 120,
  expectedLength: 90,
  targetLevel: 'A1',
  evaluationCriteria: [
    'Complete introduction with all required information',
    'Correct use of verb "to be" in all forms',
    'Appropriate use of personal and possessive pronouns',
    'Accurate numbers and ages',
    'Proper family vocabulary',
    'Clear pronunciation and fluency'
  ],
  questions: [
    {
      id: 'a1-m1-l7-s-q1',
      type: 'speaking',
      question: 'Introduce yourself completely',
      expectedAnswer: 'Student should provide name, age, country, nationality with correct grammar.',
      points: 3
    },
    {
      id: 'a1-m1-l7-s-q2',
      type: 'speaking',
      question: 'Describe your family',
      expectedAnswer: 'Student should describe at least 3 family members with ages and details.',
      points: 4
    },
    {
      id: 'a1-m1-l7-s-q3',
      type: 'speaking',
      question: 'Talk about family activities',
      expectedAnswer: 'Student should mention activities they do with family.',
      points: 3
    }
  ]
};

// WRITING EXERCISE
const A1_M1_L7_WRITING: Exercise = {
  id: 'a1-m1-l7-writing-1',
  type: 'writing',
  title: 'Writing: My International Family',
  instructions: 'Write a text (100-120 words) about your family. Include: personal information, family members, ages, nationalities, where they live, and what they do. Use all the grammar and vocabulary from Module 1.',
  prompt: 'Write about your family and yourself',
  minWords: 100,
  maxWords: 120,
  targetLevel: 'A1',
  rubric: [
    {
      criterion: 'Content and Completeness',
      description: 'Includes all required information about self and family',
      maxScore: 4
    },
    {
      criterion: 'Grammar Accuracy',
      description: 'Correct use of verb "to be", pronouns, possessives, questions',
      maxScore: 3
    },
    {
      criterion: 'Vocabulary',
      description: 'Appropriate use of family, nationality, number vocabulary',
      maxScore: 2
    },
    {
      criterion: 'Organization',
      description: 'Clear structure with logical flow',
      maxScore: 1
    }
  ],
  questions: [
    {
      id: 'a1-m1-l7-w-q1',
      type: 'writing',
      question: 'Write your text about your family.',
      expectedAnswer: 'Student should write 100-120 words covering all Module 1 topics.',
      points: 10
    }
  ]
};

// PRONUNCIATION EXERCISE
const A1_M1_L7_PRONUNCIATION: Exercise = {
  id: 'a1-m1-l7-pronunciation-1',
  type: 'pronunciation-practice',
  title: 'Pronunciation: Final Review',
  instructions: 'Practice these sentences that combine all Module 1 pronunciation points.',
  targetSentences: [
    {
      text: 'My name is Maria. I\'m from Spain. I\'m Spanish.',
      audioUrl: '/audio/a1-m1-l7-pronun-1.mp3',
      phonetic: '/maɪ neɪm ɪz məˈriːə. aɪm frɒm speɪn. aɪm ˈspænɪʃ/'
    },
    {
      text: 'This is my mother. Her name is Anna. She\'s forty-five.',
      audioUrl: '/audio/a1-m1-l7-pronun-2.mp3',
      phonetic: '/ðɪs ɪz maɪ ˈmʌðə. hɜː neɪm ɪz ˈænə. ʃiːz ˈfɔːti faɪv/'
    },
    {
      text: 'Are your parents from Japan? No, they\'re from China.',
      audioUrl: '/audio/a1-m1-l7-pronun-3.mp3',
      phonetic: '/ɑː jɔː ˈpeərənts frɒm ʤəˈpæn? nəʊ, ðeə frɒm ˈʧaɪnə/'
    },
    {
      text: 'My brother has three children. They\'re my nephews.',
      audioUrl: '/audio/a1-m1-l7-pronun-4.mp3',
      phonetic: '/maɪ ˈbrʌðə hæz θriː ˈʧɪldrən. ðeə maɪ ˈnefjuːz/'
    },
    {
      text: 'How old is your sister? She\'s nineteen years old.',
      audioUrl: '/audio/a1-m1-l7-pronun-5.mp3',
      phonetic: '/haʊ əʊld ɪz jɔː ˈsɪstə? ʃiːz ˌnaɪnˈtiːn jɪəz əʊld/'
    },
    {
      text: 'We\'re not Brazilian. We\'re Argentinian.',
      audioUrl: '/audio/a1-m1-l7-pronun-6.mp3',
      phonetic: '/wɪə nɒt brəˈzɪliən. wɪər ˌɑːʤənˈtɪniən/'
    }
  ],
  focusPoints: [
    'Contractions: I\'m, She\'s, They\'re, We\'re',
    'Rising intonation in questions',
    'Stress in nationality words',
    'Clear pronunciation of numbers (especially -teen vs -ty)',
    'The "th" sound in: this, they, mother, brother'
  ],
  tips: [
    'Practice linking: "I_am" → "I\'m", "She_is" → "She\'s"',
    'Make your voice go UP in Yes/No questions',
    'Stress the correct syllable in long words',
    'Say "nineTEEN" (not "NINEteen") to distinguish from "ninety"'
  ],
  questions: [
    {
      id: 'a1-m1-l7-p-q1',
      type: 'multiple-choice',
      question: 'In "Argentinian", which syllable is stressed?',
      options: ['Ar-', '-gen-', '-ti-', '-ni-'],
      correctAnswer: '-ti-',
      explanation: 'The stress is on the third syllable: Ar-gen-TI-nian.',
      points: 1
    },
    {
      id: 'a1-m1-l7-p-q2',
      type: 'true-false',
      question: 'The contraction "They\'re" sounds like "there".',
      correctAnswer: 'True',
      explanation: 'True. "They\'re" /ðeə/ and "there" /ðeə/ have the same pronunciation.',
      points: 1
    },
    {
      id: 'a1-m1-l7-p-q3',
      type: 'multiple-choice',
      question: 'How do we pronounce "nineteen"?',
      options: ['/ˈnaɪntiːn/', '/naɪnˈtiːn/', '/ˈnaɪnti/', '/naɪnˈti/'],
      correctAnswer: '/naɪnˈtiːn/',
      explanation: 'Nineteen has stress on the SECOND syllable: nine-TEEN.',
      points: 1
    },
    {
      id: 'a1-m1-l7-p-q4',
      type: 'fill-blank',
      question: 'In "mother" and "brother", the "th" sound is ___.',
      correctAnswer: 'voiced',
      acceptableAnswers: ['voiced', 'Voiced'],
      explanation: 'The "th" in mother and brother is voiced /ð/.',
      points: 1
    },
    {
      id: 'a1-m1-l7-p-q5',
      type: 'true-false',
      question: 'In Yes/No questions, the voice usually goes up at the end.',
      correctAnswer: 'True',
      explanation: 'True. We use rising intonation for Yes/No questions.',
      points: 1
    },
    {
      id: 'a1-m1-l7-p-q6',
      type: 'multiple-choice',
      question: 'The contraction "We\'re" is pronounced:',
      options: ['/wiːr/', '/wɪə/', '/weər/', '/wər/'],
      correctAnswer: '/wɪə/',
      explanation: '"We\'re" is pronounced /wɪə/ in British English.',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 1: Complete Review
const A1_M1_L7_VOCABULARY_1: Exercise = {
  id: 'a1-m1-l7-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Complete Module 1 Review',
  instructions: 'Test your knowledge of all Module 1 vocabulary.',
  words: [
    { word: 'introduce', definition: 'To tell someone your name and information about yourself', example: 'Let me introduce myself. I\'m John.' },
    { word: 'married', definition: 'Having a husband or wife', example: 'I\'m married. My wife\'s name is Sarah.' },
    { word: 'retired', definition: 'Not working anymore because of age', example: 'My father is retired. He\'s 70.' },
    { word: 'nationality', definition: 'The country you are from', example: 'My nationality is Brazilian.' },
    { word: 'sibling', definition: 'A brother or sister', example: 'I have two siblings - one brother and one sister.' },
    { word: 'only child', definition: 'A person with no brothers or sisters', example: 'I\'m an only child. I don\'t have siblings.' }
  ],
  questions: [
    {
      id: 'a1-m1-l7-v1-q1',
      type: 'multiple-choice',
      question: 'If you are "retired", you:',
      options: ['are very young', 'don\'t work anymore', 'are a student', 'have a new job'],
      correctAnswer: 'don\'t work anymore',
      explanation: 'Retired means you don\'t work anymore, usually because of age.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v1-q2',
      type: 'fill-blank',
      question: 'When you meet someone new, you ___ yourself.',
      correctAnswer: 'introduce',
      acceptableAnswers: ['introduce', 'Introduce'],
      explanation: 'To introduce yourself means to tell your name and information.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v1-q3',
      type: 'true-false',
      question: 'An "only child" has no brothers or sisters.',
      correctAnswer: 'True',
      explanation: 'True. An only child has no siblings.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v1-q4',
      type: 'multiple-choice',
      question: 'If you have a husband or wife, you are:',
      options: ['single', 'married', 'retired', 'young'],
      correctAnswer: 'married',
      explanation: 'Married means having a husband or wife.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v1-q5',
      type: 'fill-blank',
      question: 'Your brothers and sisters are your ___.',
      correctAnswer: 'siblings',
      acceptableAnswers: ['siblings', 'Siblings'],
      explanation: 'Siblings are your brothers and sisters.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v1-q6',
      type: 'multiple-choice',
      question: 'Your ___ is the country you are from.',
      options: ['age', 'name', 'nationality', 'family'],
      correctAnswer: 'nationality',
      explanation: 'Nationality is the country you are from.',
      points: 1
    }
  ]
};

// VOCABULARY EXERCISE 2: Advanced Practice
const A1_M1_L7_VOCABULARY_2: Exercise = {
  id: 'a1-m1-l7-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary Practice: Challenging Questions',
  instructions: 'Answer these more challenging vocabulary questions.',
  questions: [
    {
      id: 'a1-m1-l7-v2-q1',
      type: 'multiple-choice',
      question: 'What is the nationality for someone from Poland?',
      options: ['Polandish', 'Polish', 'Polander', 'Polanian'],
      correctAnswer: 'Polish',
      explanation: 'The nationality for Poland is Polish.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v2-q2',
      type: 'fill-blank',
      question: 'My aunt\'s daughter is my ___.',
      correctAnswer: 'cousin',
      acceptableAnswers: ['cousin', 'Cousin'],
      explanation: 'Your aunt\'s or uncle\'s children are your cousins.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v2-q3',
      type: 'true-false',
      question: 'Your "in-laws" are your spouse\'s family.',
      correctAnswer: 'True',
      explanation: 'True. In-laws are your husband\'s or wife\'s family.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v2-q4',
      type: 'multiple-choice',
      question: 'If you are from Vietnam, you are:',
      options: ['Vietnamer', 'Vietnamian', 'Vietnamese', 'Vietnamish'],
      correctAnswer: 'Vietnamese',
      explanation: 'The nationality for Vietnam is Vietnamese.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v2-q5',
      type: 'fill-blank',
      question: 'Your grandmother and grandfather are your ___.',
      correctAnswer: 'grandparents',
      acceptableAnswers: ['grandparents', 'Grandparents'],
      explanation: 'Grandparents = grandmother and grandfather.',
      points: 1
    },
    {
      id: 'a1-m1-l7-v2-q6',
      type: 'multiple-choice',
      question: 'How do you say the year 2000?',
      options: ['Two thousand', 'Twenty hundred', 'Two hundreds', 'Twenty thousand'],
      correctAnswer: 'Two thousand',
      explanation: 'We say 2000 as "two thousand".',
      points: 1
    }
  ]
};

// Export all exercises for Lesson 7


export const A1_M1_L7_SENTENCE_COMPLETION = {
  id: 'a1-m1-l7-sentence-completion',
  type: 'sentence-completion',
  title: 'Final Practice - Sentences',
  instructions: 'Final practice with all topics.',
  sentences: [
    {
      id: 'sc1',
      prompt: 'This is ___ book.',
      correctCompletion: 'my',
      options: ['my', 'mine', 'I'],
      explanation: 'Possessive adjective before noun.',
      points: 1
    },
    {
      id: 'sc2',
      prompt: '___ are from China.',
      correctCompletion: 'They',
      options: ['They', 'Their', 'Them'],
      explanation: 'Subject pronoun for plural.',
      points: 1
    },
    {
      id: 'sc3',
      prompt: 'My father ___ a doctor.',
      correctCompletion: 'is',
      options: ['am', 'is', 'are'],
      explanation: 'Singular verb with "father".',
      points: 1
    },
    {
      id: 'sc4',
      prompt: 'How old ___ you?',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'Use "are" with "you".',
      points: 1
    },
    {
      id: 'sc5',
      prompt: '___ sister is 18 years old.',
      correctCompletion: 'His',
      options: ['He', 'His', 'Him'],
      explanation: 'Possessive adjective before noun.',
      points: 1
    },
    {
      id: 'sc6',
      prompt: 'We ___ students at this school.',
      correctCompletion: 'are',
      options: ['am', 'is', 'are'],
      explanation: 'Plural verb with "we".',
      points: 1
    }
  ]
};

export const A1_M1_L7_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l7-error-identification',
  type: 'error-identification',
  title: 'Final Error Check',
  instructions: 'Find any errors.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'We is students.',
      hasError: true,
      errorWord: 'is',
      correction: 'are',
      explanation: 'We use "are" with "we".',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'My sister and I am from Italy.',
      hasError: true,
      errorWord: 'am',
      correction: 'are',
      explanation: 'Use "are" with compound subjects (my sister and I = we).',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'She have 25 years.',
      hasError: true,
      errorWord: 'have',
      correction: 'is',
      explanation: 'Say "is 25 years old" not "have 25 years".',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'They are from Japan.',
      hasError: false,
      explanation: 'Correct!',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'Him brother is a teacher.',
      hasError: true,
      errorWord: 'Him',
      correction: 'His',
      explanation: 'Use possessive "His" before noun.',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'I am from Spain.',
      hasError: false,
      explanation: 'Correct!',
      points: 1
    }
  ]
};

export const A1_M1_L7_GAP_FILL = {
  id: 'a1-m1-l7-gap-fill',
  type: 'gap-fill-text',
  title: 'Consolidation Text',
  instructions: 'Complete this final practice text.',
  text: `I {{1}} Maria. I am {{2}} Spain. I am {{3}} years old. I {{4}} Spanish.

{{5}} family is international. My father {{6}} from Italy. {{7}} is 58 years old and {{8}} is a doctor. My mother {{9}} British. {{10}} is 55 and {{11}} is a teacher.

I have one brother. {{12}} name is Carlos. He {{13}} 28 years old. {{14}} wife is French. They {{15}} very happy together.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'am',
      explanation: 'Verb to be.',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'from',
      explanation: 'I am from...',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: '25',
      acceptableAlternatives: ['twenty-five'],
      explanation: 'Age.',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'am',
      explanation: 'Nationality with "I am".',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'My',
      explanation: 'Possessive adjective.',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'is',
      explanation: 'Singular verb with father.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'He',
      explanation: 'Subject pronoun for male.',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'he',
      explanation: 'Subject pronoun.',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'is',
      explanation: 'Singular verb with mother.',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'She',
      explanation: 'Subject pronoun for female.',
      points: 1
    },
    {
      id: 'gap11',
      gapNumber: 11,
      correctAnswer: 'she',
      explanation: 'Subject pronoun.',
      points: 1
    },
    {
      id: 'gap12',
      gapNumber: 12,
      correctAnswer: 'His',
      explanation: 'Possessive adjective for male.',
      points: 1
    },
    {
      id: 'gap13',
      gapNumber: 13,
      correctAnswer: 'is',
      explanation: 'Singular verb.',
      points: 1
    },
    {
      id: 'gap14',
      gapNumber: 14,
      correctAnswer: 'His',
      explanation: 'Possessive adjective.',
      points: 1
    },
    {
      id: 'gap15',
      gapNumber: 15,
      correctAnswer: 'are',
      explanation: 'Plural verb with "they".',
      points: 1
    }
  ]
};

export const A1_M1_L7_COLLOCATION_MATCHING = {
  id: 'a1-m1-l7-collocation-matching',
  type: 'collocation-matching',
  title: 'Final Matching',
  instructions: 'Match items.',
  pairs: [
    {
      id: 'cm1',
      word: 'I',
      correctMatch: 'am',
      distractors: ['is', 'are'],
      example: 'I am happy.',
      points: 1
    },
    {
      id: 'cm2',
      word: 'She',
      correctMatch: 'is',
      distractors: ['am', 'are'],
      example: 'She is from Italy.',
      points: 1
    },
    {
      id: 'cm3',
      word: 'They',
      correctMatch: 'are',
      distractors: ['am', 'is'],
      example: 'They are students.',
      points: 1
    },
    {
      id: 'cm4',
      word: 'My',
      correctMatch: 'mother',
      distractors: ['she', 'her'],
      example: 'My mother is a teacher.',
      points: 1
    },
    {
      id: 'cm5',
      word: 'years',
      correctMatch: 'old',
      distractors: ['age', 'have'],
      example: 'I am 25 years old.',
      points: 1
    },
    {
      id: 'cm6',
      word: 'from',
      correctMatch: 'Spain',
      distractors: ['Spanish', 'Spaniard'],
      example: 'I am from Spain.',
      points: 1
    }
  ]
};

export const A1_M1_L7_ALL_EXERCISES = [
  A1_M1_L7_GRAMMAR_1,
  A1_M1_L7_GRAMMAR_2,
  A1_M1_L7_READING,
  A1_M1_L7_LISTENING,
  A1_M1_L7_SPEAKING,
  A1_M1_L7_WRITING,
  A1_M1_L7_PRONUNCIATION,
  A1_M1_L7_VOCABULARY_1,
  A1_M1_L7_VOCABULARY_2,
  A1_M1_L7_SENTENCE_COMPLETION,
  A1_M1_L7_ERROR_IDENTIFICATION,
  A1_M1_L7_GAP_FILL,
  A1_M1_L7_COLLOCATION_MATCHING
];
