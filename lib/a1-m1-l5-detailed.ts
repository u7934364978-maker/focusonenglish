// A1 Module 1 Lesson 5: Family and Relationships
// Complete exercises with 6 questions each

// ============================================
// GRAMMAR EXERCISE 1: Possessive 's
// ============================================
export const A1_M1_L5_GRAMMAR_1 = {
  id: 'a1-m1-l5-grammar-1',
  type: 'grammar',
  title: 'Possessive \'s - Showing Relationships',
  grammarPoint: 'Possessive \'s with Family Members',
  explanation: `We use possessive 's to show relationships and ownership:

Formation:
• Singular noun + 's: John's sister, Maria's mother, Tom's father
• Plural noun ending in -s + ': my parents' house, the students' books
• Irregular plural + 's: children's room, women's bags

With Family Members:
• John's mother = the mother of John
• Sarah's brother = the brother of Sarah
• My sister's name = the name of my sister

Note: We use 's after the person who possesses or has the relationship.
The thing that is possessed comes after.`,
  examples: [
    'This is Tom\'s sister. (the sister of Tom)',
    'Maria\'s father is a doctor.',
    'My brother\'s wife is very nice.',
    'The children\'s grandmother lives with us.',
    'What\'s your mother\'s name?'
  ],
  questions: [
    {
      id: 'a1-m1-l5-g1-q1',
      type: 'multiple-choice',
      question: 'This is ___ car.',
      options: ['John', 'Johns', 'John\'s', 'John is'],
      correctAnswer: 'John\'s',
      explanation: 'We use John\'s (with apostrophe + s) to show possession.',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q2',
      type: 'multiple-choice',
      question: 'My ___ name is Sarah.',
      options: ['sister', 'sisters', 'sister\'s', 'sisters\''],
      correctAnswer: 'sister\'s',
      explanation: 'We use sister\'s to show "the name of my sister".',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q3',
      type: 'fill-blank',
      question: 'What is your mother___ name?',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: 'We say "your mother\'s name" (the name of your mother).',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q4',
      type: 'true-false',
      question: 'We write "the childrens\' room" without apostrophe before s.',
      correctAnswer: 'False',
      explanation: 'False. We write "the children\'s room" (children is irregular plural, so + \'s).',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q5',
      type: 'multiple-choice',
      question: 'Which is correct?',
      options: ['Tom sister', 'Toms sister', 'Tom\'s sister', 'The Tom sister'],
      correctAnswer: 'Tom\'s sister',
      explanation: 'The correct form is "Tom\'s sister" to show the relationship.',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q6',
      type: 'fill-blank',
      question: 'My ___ house is very big. (the house of my parents)',
      correctAnswer: 'parents\'',
      acceptableAnswers: ['parents\'', 'parents\'', 'parent\'s'],
      explanation: 'We say "my parents\' house" (parents ends in s, so just add apostrophe).',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Family Relationships
// ============================================
export const A1_M1_L5_GRAMMAR_2 = {
  id: 'a1-m1-l5-grammar-2',
  type: 'grammar',
  title: 'Family Relationships and Plurals',
  grammarPoint: 'Talking about Family Members',
  explanation: `Family relationship vocabulary:

Immediate Family:
• mother/father (parents)
• sister/brother (siblings)
• son/daughter (children)
• husband/wife (spouse)

Extended Family:
• grandmother/grandfather (grandparents)
• grandson/granddaughter (grandchildren)
• uncle/aunt
• cousin
• nephew/niece

Plurals:
• Regular: sister → sisters, brother → brothers
• Irregular: child → children, person → people

Useful expressions:
• I have two brothers. / I don\'t have any sisters.
• My brother is married. He has two children.
• I\'m an only child. (I don\'t have brothers or sisters)`,
  examples: [
    'I have one brother and two sisters.',
    'My mother\'s mother is my grandmother.',
    'My father\'s brother is my uncle.',
    'I don\'t have any children.',
    'She\'s an only child.'
  ],
  questions: [
    {
      id: 'a1-m1-l5-g2-q1',
      type: 'multiple-choice',
      question: 'Your mother\'s mother is your ___.',
      options: ['aunt', 'grandmother', 'sister', 'mother-in-law'],
      correctAnswer: 'grandmother',
      explanation: 'Your mother\'s mother is your grandmother.',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q2',
      type: 'multiple-choice',
      question: 'The plural of "child" is ___.',
      options: ['childs', 'childes', 'children', 'child'],
      correctAnswer: 'children',
      explanation: '"Child" is irregular. The plural is "children".',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q3',
      type: 'fill-blank',
      question: 'My father\'s brother is my ___.',
      correctAnswer: 'uncle',
      acceptableAnswers: ['uncle', 'Uncle'],
      explanation: 'Your father\'s brother is your uncle.',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q4',
      type: 'true-false',
      question: 'If you don\'t have brothers or sisters, you\'re an only child.',
      correctAnswer: 'True',
      explanation: 'True. "Only child" means you don\'t have any siblings.',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q5',
      type: 'multiple-choice',
      question: 'Your brother\'s son is your ___.',
      options: ['cousin', 'nephew', 'uncle', 'grandson'],
      correctAnswer: 'nephew',
      explanation: 'Your brother\'s son is your nephew.',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q6',
      type: 'fill-blank',
      question: 'I have two ___. (brother)',
      correctAnswer: 'brothers',
      acceptableAnswers: ['brothers', 'Brothers'],
      explanation: 'The plural of brother is brothers.',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L5_READING = {
  id: 'a1-m1-l5-reading-1',
  type: 'reading',
  title: 'Reading: My Big Family',
  text: `My Big Family

Hi! My name is Emma, and I want to tell you about my big family.

I live with my parents and my older brother. My mother\'s name is Susan. She\'s 45 years old and she\'s a nurse. My father\'s name is Michael. He\'s 48 years old and he works in a bank. My brother\'s name is Tom. He\'s 18 years old and he\'s a university student.

We\'re a close family. Every Sunday, we have lunch at my grandmother\'s house. My grandmother\'s name is Elizabeth, but we call her "Grandma Liz". She\'s 72 years old and she\'s very energetic! My grandfather passed away three years ago, so now Grandma Liz lives alone.

I have many cousins because my mother has three sisters and my father has one brother. My favorite cousin is Julia. She\'s my aunt Patricia\'s daughter. Julia is 16 years old, and we\'re like best friends. We go to the same school and we do everything together.

My uncle Robert, my father\'s brother, has two sons. Their names are Mike and Dave. Mike is 12 and Dave is 10. They\'re very funny boys. When we have family gatherings, we always have a great time playing together.

I also have a younger cousin named Sophie. She\'s only 5 years old. She\'s my aunt Maria\'s daughter. Sophie is so cute! She always wants to play with me.

I love my big family. Family is the most important thing in life!`,
  questions: [
    {
      id: 'a1-m1-l5-read-q1',
      type: 'multiple-choice',
      question: 'How old is Emma\'s brother?',
      options: ['16 years old', '18 years old', '20 years old', '22 years old'],
      correctAnswer: '18 years old',
      explanation: 'The text says "My brother\'s name is Tom. He\'s 18 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q2',
      type: 'multiple-choice',
      question: 'Where does the family have lunch every Sunday?',
      options: ['At Emma\'s house', 'At a restaurant', 'At grandmother\'s house', 'At uncle\'s house'],
      correctAnswer: 'At grandmother\'s house',
      explanation: 'The text says "Every Sunday, we have lunch at my grandmother\'s house."',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q3',
      type: 'true-false',
      question: 'Julia is Emma\'s sister.',
      correctAnswer: 'False',
      explanation: 'False. Julia is Emma\'s cousin (her aunt Patricia\'s daughter).',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q4',
      type: 'fill-blank',
      question: 'Emma\'s grandmother is ___ years old.',
      correctAnswer: '72',
      acceptableAnswers: ['72', 'seventy-two', 'seventy two'],
      explanation: 'The text says "She\'s 72 years old."',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q5',
      type: 'multiple-choice',
      question: 'How many sons does Uncle Robert have?',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 'Two',
      explanation: 'Uncle Robert has two sons: Mike and Dave.',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q6',
      type: 'multiple-choice',
      question: 'Who is Sophie?',
      options: ['Emma\'s sister', 'Emma\'s cousin', 'Emma\'s niece', 'Emma\'s aunt'],
      correctAnswer: 'Emma\'s cousin',
      explanation: 'Sophie is Emma\'s cousin. She\'s aunt Maria\'s daughter.',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L5_LISTENING = {
  id: 'a1-m1-l5-listening-1',
  type: 'listening',
  audioUrl: '/audio/a1-m1-l5-listening-1.mp3',
  transcript: `Conversation: Talking About Family

Person A: Hi Sarah! Tell me about your family.

Sarah: Sure! I have a small family. I live with my parents and my younger sister.

Person A: How old is your sister?

Sarah: She\'s 14. Her name is Amy. She\'s in high school.

Person A: That\'s nice. Do you have any brothers?

Sarah: No, I don\'t. It\'s just my sister and me. But I have many cousins!

Person A: Oh really? How many cousins do you have?

Sarah: I have five cousins. Three on my mother\'s side and two on my father\'s side.

Person A: Wow! Do you see them often?

Sarah: Yes, we have family dinners every month. My grandmother organizes them.

Person A: That sounds wonderful! Does your grandmother live with you?

Sarah: No, she doesn\'t. She lives with my uncle and aunt. But she lives very close to us.

Person A: And your grandfather?

Sarah: My grandfather lives in another city. He lives with my aunt Emma. We visit him twice a year.

Person A: It\'s great that you have a close family!

Sarah: Yes, I\'m very lucky. Family is very important to me.`,
  duration: 65,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l5-list-q1',
      type: 'multiple-choice',
      question: 'How old is Sarah\'s sister?',
      options: ['12 years old', '14 years old', '16 years old', '18 years old'],
      correctAnswer: '14 years old',
      explanation: 'Sarah says "She\'s 14."',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q2',
      type: 'true-false',
      question: 'Sarah has two brothers.',
      correctAnswer: 'False',
      explanation: 'False. Sarah says "No, I don\'t" when asked about brothers.',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q3',
      type: 'multiple-choice',
      question: 'How many cousins does Sarah have?',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five',
      explanation: 'Sarah says "I have five cousins."',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q4',
      type: 'fill-blank',
      question: 'The family has dinners every ___.',
      correctAnswer: 'month',
      acceptableAnswers: ['month', 'Month'],
      explanation: 'Sarah says "we have family dinners every month."',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q5',
      type: 'multiple-choice',
      question: 'Where does Sarah\'s grandmother live?',
      options: ['With Sarah', 'With uncle and aunt', 'Alone', 'In another city'],
      correctAnswer: 'With uncle and aunt',
      explanation: 'Sarah says "She lives with my uncle and aunt."',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q6',
      type: 'true-false',
      question: 'Sarah visits her grandfather twice a year.',
      correctAnswer: 'True',
      explanation: 'True. Sarah says "We visit him twice a year."',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L5_SPEAKING = {
  id: 'a1-m1-l5-speaking-1',
  type: 'speaking',
  title: 'Speaking: Talk About Your Family',
  prompt: 'Answer these questions about your family. Speak clearly and use complete sentences.',
  instructions: 'Record your answers to the following questions. Try to speak for at least 10 seconds for each question.',
  timeLimit: 120,
  questions: [
    'How many people are in your family?',
    'Do you have any brothers or sisters? How old are they?',
    'What are your parents\' names?',
    'Do you have grandparents? Where do they live?',
    'Do you have any cousins? How many?',
    'Who is your favorite family member? Why?'
  ],
  tips: [
    'Use "I have..." to talk about family members',
    'Use possessive \'s: "My brother\'s name is..."',
    'You can say "I\'m an only child" if you don\'t have siblings',
    'Describe relationships: "My mother\'s mother is my grandmother"',
    'Talk about ages: "My sister is 20 years old"'
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L5_WRITING = {
  id: 'a1-m1-l5-writing-1',
  type: 'writing',
  title: 'Writing: My Family',
  prompt: 'Write a short paragraph (60-100 words) about your family. Include: family members, their names, ages, and relationships. Describe what makes your family special.',
  wordLimit: { min: 60, max: 150 },
  rubric: {
    content: 'Includes family members with names, ages, and relationships',
    grammar: 'Correct use of possessive \'s and family vocabulary',
    vocabulary: 'Appropriate use of family relationship words',
    organization: 'Clear and logical paragraph structure'
  },
  tips: [
    'Start with: "I have a [small/big] family."',
    'Use: "My mother\'s name is..." "My father\'s name is..."',
    'Include ages: "My brother is 25 years old."',
    'Describe relationships: "My uncle is my father\'s brother."',
    'End with something special about your family'
  ],
  exampleAnswer: 'I have a medium-sized family. My mother\'s name is Linda and she\'s 50 years old. My father\'s name is Robert and he\'s 52. I have one older brother named David. He\'s 28 years old and he\'s married. His wife\'s name is Anna. They have one daughter, so I\'m an aunt! My niece\'s name is Emma and she\'s 3 years old. She\'s so cute! We also have family dinners with my grandparents every Sunday. My family is very close and we love spending time together. I\'m very lucky to have such a loving family.'
};

// ============================================
// PRONUNCIATION EXERCISE
// ============================================
export const A1_M1_L5_PRONUNCIATION = {
  id: 'a1-m1-l5-pronunciation-1',
  type: 'pronunciation',
  title: 'Pronunciation: Family Words',
  instructions: 'Listen and repeat each word. Pay attention to the stress and vowel sounds.',
  targetSentences: [
    {
      text: 'mother - father',
      audioUrl: '/audio/a1-m1-l5-pronun-1.mp3',
      phonetic: '/ˈmʌðə - ˈfɑːðə/'
    },
    {
      text: 'brother - sister',
      audioUrl: '/audio/a1-m1-l5-pronun-2.mp3',
      phonetic: '/ˈbrʌðə - ˈsɪstə/'
    },
    {
      text: 'grandmother - grandfather',
      audioUrl: '/audio/a1-m1-l5-pronun-3.mp3',
      phonetic: '/ˈgrænmʌðə - ˈgrænfɑːðə/'
    },
    {
      text: 'aunt - uncle',
      audioUrl: '/audio/a1-m1-l5-pronun-4.mp3',
      phonetic: '/ɑːnt - ˈʌŋkəl/'
    },
    {
      text: 'cousin - nephew - niece',
      audioUrl: '/audio/a1-m1-l5-pronun-5.mp3',
      phonetic: '/ˈkʌzən - ˈnefjuː - niːs/'
    },
    {
      text: 'daughter - son',
      audioUrl: '/audio/a1-m1-l5-pronun-6.mp3',
      phonetic: '/ˈdɔːtə - sʌn/'
    }
  ],
  focusPoints: [
    'Stress is usually on the FIRST syllable: MOther, FAther, BROther',
    'The "th" sound /ð/ in mother, father, brother (voiced)',
    'Silent letters: daughter (silent "gh"), nephew (silent "ph")',
    'Different vowel sounds: mother /ʌ/ vs father /ɑː/'
  ],
  tips: [
    'Practice the "th" sound by putting your tongue between your teeth',
    'Remember: daughter has a silent "gh" - say "DOter"',
    'Nephew: the "ph" sounds like /f/ but we say "NEF-yoo"',
    'Aunt can be pronounced /ɑːnt/ or /ænt/ (both correct)'
  ],
  questions: [
    {
      id: 'a1-m1-l5-pronun-q1',
      type: 'multiple-choice',
      question: 'Where is the stress in "mother"?',
      options: ['First syllable: MOther', 'Second syllable: moTHER', 'Both equal', 'No stress'],
      correctAnswer: 'First syllable: MOther',
      explanation: 'Family words have stress on the first syllable: MOther.',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q2',
      type: 'true-false',
      question: 'The word "daughter" has a silent "gh".',
      correctAnswer: 'True',
      explanation: 'True. "Daughter" is pronounced /ˈdɔːtə/ - the "gh" is silent.',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q3',
      type: 'multiple-choice',
      question: 'The "th" in "mother" and "father" is pronounced:',
      options: ['Like /t/', 'Like /s/', 'Like /ð/ (voiced th)', 'Like /θ/ (unvoiced th)'],
      correctAnswer: 'Like /ð/ (voiced th)',
      explanation: 'The "th" in mother, father, brother is voiced: /ð/.',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q4',
      type: 'fill-blank',
      question: 'In family words, stress is usually on the ___ syllable.',
      correctAnswer: 'first',
      acceptableAnswers: ['first', 'First', '1st'],
      explanation: 'Family words have stress on the FIRST syllable.',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q5',
      type: 'true-false',
      question: 'The word "nephew" is pronounced exactly as it\'s spelled.',
      correctAnswer: 'False',
      explanation: 'False. "Nephew" has a silent "ph" sound and is pronounced /ˈnefjuː/.',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q6',
      type: 'multiple-choice',
      question: 'How do you pronounce "aunt"?',
      options: ['Only /ɑːnt/', 'Only /ænt/', 'Both /ɑːnt/ and /ænt/ are correct', 'Like "ant"'],
      correctAnswer: 'Both /ɑːnt/ and /ænt/ are correct',
      explanation: 'Both pronunciations are correct in English.',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 1: Immediate Family
// ============================================
export const A1_M1_L5_VOCABULARY_1 = {
  id: 'a1-m1-l5-vocabulary-1',
  type: 'vocabulary',
  title: 'Vocabulary: Immediate Family',
  words: [
    { word: 'mother', translation: 'madre', example: 'My mother is a teacher.' },
    { word: 'father', translation: 'padre', example: 'My father works in an office.' },
    { word: 'parents', translation: 'padres', example: 'My parents are very kind.' },
    { word: 'sister', translation: 'hermana', example: 'My sister is 16 years old.' },
    { word: 'brother', translation: 'hermano', example: 'I have one brother.' },
    { word: 'daughter', translation: 'hija', example: 'She has two daughters.' },
    { word: 'son', translation: 'hijo', example: 'Their son is a doctor.' },
    { word: 'children', translation: 'hijos/niños', example: 'They have three children.' },
    { word: 'husband', translation: 'esposo', example: 'Her husband is very tall.' },
    { word: 'wife', translation: 'esposa', example: 'His wife is a nurse.' }
  ],
  questions: [
    {
      id: 'a1-m1-l5-v1-q1',
      type: 'multiple-choice',
      question: 'Your mother and father together are your ___.',
      options: ['sisters', 'brothers', 'parents', 'children'],
      correctAnswer: 'parents',
      explanation: 'Mother + father = parents.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q2',
      type: 'fill-blank',
      question: 'A man\'s wife is his ___. A woman\'s husband is her ___.',
      correctAnswer: 'wife, husband',
      acceptableAnswers: ['wife, husband', 'wife/husband', 'spouse'],
      explanation: 'Wife and husband are married to each other.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q3',
      type: 'true-false',
      question: 'The plural of "child" is "children".',
      correctAnswer: 'True',
      explanation: 'True. Child → children (irregular plural).',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q4',
      type: 'multiple-choice',
      question: 'Your male sibling is your ___.',
      options: ['sister', 'brother', 'cousin', 'uncle'],
      correctAnswer: 'brother',
      explanation: 'A male sibling is a brother.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q5',
      type: 'fill-blank',
      question: 'My parents have two ___: my brother and me.',
      correctAnswer: 'children',
      acceptableAnswers: ['children', 'Children', 'kids'],
      explanation: 'Sons and daughters together are children.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q6',
      type: 'multiple-choice',
      question: 'A female child is a ___.',
      options: ['son', 'daughter', 'sister', 'niece'],
      correctAnswer: 'daughter',
      explanation: 'A female child is a daughter.',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 2: Extended Family
// ============================================
export const A1_M1_L5_VOCABULARY_2 = {
  id: 'a1-m1-l5-vocabulary-2',
  type: 'vocabulary',
  title: 'Vocabulary: Extended Family',
  words: [
    { word: 'grandmother', translation: 'abuela', example: 'My grandmother is 70 years old.' },
    { word: 'grandfather', translation: 'abuelo', example: 'My grandfather loves fishing.' },
    { word: 'grandparents', translation: 'abuelos', example: 'I visit my grandparents every week.' },
    { word: 'aunt', translation: 'tía', example: 'My aunt lives in Paris.' },
    { word: 'uncle', translation: 'tío', example: 'My uncle is very funny.' },
    { word: 'cousin', translation: 'primo/prima', example: 'I have five cousins.' },
    { word: 'nephew', translation: 'sobrino', example: 'My nephew is 5 years old.' },
    { word: 'niece', translation: 'sobrina', example: 'My niece is very smart.' },
    { word: 'grandson', translation: 'nieto', example: 'He is my grandfather\'s grandson.' },
    { word: 'granddaughter', translation: 'nieta', example: 'She is their only granddaughter.' }
  ],
  questions: [
    {
      id: 'a1-m1-l5-v2-q1',
      type: 'multiple-choice',
      question: 'Your mother\'s mother is your ___.',
      options: ['aunt', 'grandmother', 'mother-in-law', 'sister'],
      correctAnswer: 'grandmother',
      explanation: 'Your mother\'s mother is your grandmother.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q2',
      type: 'fill-blank',
      question: 'Your brother\'s son is your ___.',
      correctAnswer: 'nephew',
      acceptableAnswers: ['nephew', 'Nephew'],
      explanation: 'Your brother\'s son is your nephew.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q3',
      type: 'true-false',
      question: 'Your aunt is your mother\'s or father\'s sister.',
      correctAnswer: 'True',
      explanation: 'True. Your aunt is your parent\'s sister (or your uncle\'s wife).',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q4',
      type: 'multiple-choice',
      question: 'Your uncle\'s children are your ___.',
      options: ['siblings', 'nephews', 'cousins', 'nieces'],
      correctAnswer: 'cousins',
      explanation: 'Your uncle\'s children are your cousins.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q5',
      type: 'fill-blank',
      question: 'Grandmother and grandfather together are ___.',
      correctAnswer: 'grandparents',
      acceptableAnswers: ['grandparents', 'Grandparents'],
      explanation: 'Grandmother + grandfather = grandparents.',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q6',
      type: 'multiple-choice',
      question: 'Your sister\'s daughter is your ___.',
      options: ['cousin', 'daughter', 'niece', 'granddaughter'],
      correctAnswer: 'niece',
      explanation: 'Your sister\'s daughter is your niece.',
      points: 1
    }
  ]
};

// Export all exercises for Module 1, Lesson 5


export const A1_M1_L5_SENTENCE_COMPLETION = {
  id: 'a1-m1-l5-sentence-completion',
  type: 'sentence-completion',
  title: 'Complete Family Sentences',
  instructions: 'Complete sentences about family.',
  sentences: [
    {
      id: 'sc1',
      prompt: 'My father\'s wife is my ___.',
      correctCompletion: 'mother',
      options: ['mother', 'sister', 'aunt', 'grandmother'],
      explanation: 'Your father\'s wife is your mother.',
      points: 1
    },
    {
      id: 'sc2',
      prompt: 'My mother\'s brother is my ___.',
      correctCompletion: 'uncle',
      options: ['uncle', 'aunt', 'cousin', 'brother'],
      explanation: 'Your mother\'s brother is your uncle.',
      points: 1
    },
    {
      id: 'sc3',
      prompt: 'My sister\'s son is my ___.',
      correctCompletion: 'nephew',
      options: ['nephew', 'niece', 'cousin', 'son'],
      explanation: 'Your sister\'s son is your nephew.',
      points: 1
    }
  ]
};

export const A1_M1_L5_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l5-error-identification',
  type: 'error-identification',
  title: 'Find Family Term Errors',
  instructions: 'Find errors in family relationship sentences.',
  sentences: [
    {
      id: 'ei1',
      sentence: 'My father is my mother husband.',
      hasError: true,
      errorWord: 'mother',
      correction: 'mother\'s',
      explanation: 'Incorrect! We need the possessive form. Correct: My father is my mother\'s husband.',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'My brother\'s daughter is my niece.',
      hasError: false,
      explanation: 'Correct! This is the right family relationship.',
      points: 1
    }
  ]
};

export const A1_M1_L5_GAP_FILL = {
  id: 'a1-m1-l5-gap-fill',
  type: 'gap-fill-text',
  title: 'My Family Tree',
  instructions: 'Complete the text about family.',
  text: `I have a big family. My {{1}} are John and Mary. I have one {{2}} and two {{3}}.

My brother is married. His {{4}} is called Sarah. They have two children - my {{5}} Tom and my {{6}} Emma.

My {{7}} (my mother\'s parents) live nearby. They are very kind.`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'parents',
      options: ['parents', 'parentss', 'other'],
      explanation: 'Mother and father are your parents.',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'brother',
      options: ['brother', 'sister', 'father'],
      explanation: 'Male sibling.',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'sisters',
      options: ['sisters', 'brothers', 'parents'],
      explanation: 'Female siblings.',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'wife',
      options: ['wife', 'husband', 'partner'],
      explanation: 'His wife is Sarah.',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'nephew',
      options: ['nephew', 'nephews', 'other'],
      explanation: 'Brother\'s son is nephew.',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'niece',
      options: ['niece', 'nieces', 'other'],
      explanation: 'Brother\'s daughter is niece.',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'grandparents',
      options: ['grandparents', 'grandparentss', 'other'],
      explanation: 'Mother\'s parents are grandparents.',
      points: 1
    }
  ]
};

export const A1_M1_L5_COLLOCATION_MATCHING = {
  id: 'a1-m1-l5-collocation-matching',
  type: 'collocation-matching',
  title: 'Match Family Relationships',
  instructions: 'Match the family member with their relationship.',
  pairs: [
    {
      id: 'cm1',
      word: 'Mother',
      correctMatch: 'female parent',
      distractors: ['male parent', 'sibling', 'child'],
      example: 'My mother is very kind.',
      points: 1
    },
    {
      id: 'cm2',
      word: 'Uncle',
      correctMatch: 'parent\'s brother',
      distractors: ['parent\'s sister', 'sibling\'s son', 'grandparent'],
      example: 'My uncle is my father\'s brother.',
      points: 1
    }
  ]
};

export const A1_M1_L5_ALL_EXERCISES = [
  A1_M1_L5_GRAMMAR_1,
  A1_M1_L5_GRAMMAR_2,
  A1_M1_L5_READING,
  A1_M1_L5_LISTENING,
  A1_M1_L5_SPEAKING,
  A1_M1_L5_WRITING,
  A1_M1_L5_PRONUNCIATION,
  A1_M1_L5_VOCABULARY_1,
  A1_M1_L5_VOCABULARY_2,
  A1_M1_L5_SENTENCE_COMPLETION,
  A1_M1_L5_ERROR_IDENTIFICATION,
  A1_M1_L5_GAP_FILL,
  A1_M1_L5_COLLOCATION_MATCHING
];
