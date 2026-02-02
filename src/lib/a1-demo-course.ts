import { Lesson, Exercise } from './exercise-types';

/**
 * 7-DAY A1 ENGLISH DEMO COURSE
 * Focused on real-life situations for absolute beginners.
 */

export const A1_DEMO_DAY_1: Lesson = {
  id: 'a1-demo-day-1',
  title: 'Day 1: Greetings & Introductions',
  description: 'Learn how to say hello and introduce yourself in English.',
  duration: 15,
  objectives: ['Master basic greetings', 'Introduce yourself', 'Say where you are from'],
  theorySlides: [
    {
      title: 'Vocabulary: Greetings',
      content: 'Let\'s start with some basic ways to say hello and goodbye.',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: 'Hello', back: 'Hola\n(Standard greeting)', pronunciation: '/həˈləʊ/' },
          { front: 'Good morning', back: 'Buenos días\n(Until 12:00 PM)', pronunciation: '/ɡʊd ˈmɔːrnɪŋ/' },
          { front: 'Good afternoon', back: 'Buenas tardes\n(12:00 PM to 6:00 PM)', pronunciation: '/ɡʊd ˌæftərˈnuːn/' },
          { front: 'Good evening', back: 'Buenas noches\n(Greeting after 6:00 PM)', pronunciation: '/ɡʊd ˈiːvnɪŋ/' },
          { front: 'Goodbye', back: 'Adiós\n(Parting phrase)', pronunciation: '/ˌɡʊdˈbaɪ/' },
          { front: 'Nice to meet you', back: 'Encantado/a de conocerte', pronunciation: '/naɪs tu miːt ju/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d1-ex1',
      type: 'multiple-choice',
      title: 'Greetings Quiz',
      instructions: 'Choose the correct greeting for the situation.',
      questions: [
        {
          id: 'a1-d1-q1',
          question: 'It is 8:00 AM. What do you say?',
          options: ['Good afternoon', 'Good morning', 'Good evening'],
          correctAnswer: 'Good morning',
          explanation: 'We use "Good morning" before noon.',
          points: 1
        },
        {
          id: 'a1-d1-q2',
          question: 'How do you say "Adiós"?',
          options: ['Hello', 'Nice to meet you', 'Goodbye'],
          correctAnswer: 'Goodbye',
          explanation: '"Goodbye" is used when leaving.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d1-ex2',
      type: 'sentence-building',
      title: 'Introduce Yourself',
      description: 'Arrange the words to form a proper introduction.',
      instructions: 'Drag the words to build: "Hello, my name is John."',
      challenges: [
        {
          id: 'a1-d1-sb1',
          prompt: 'Form the sentence: "Hello, my name is John"',
          targetSentence: 'Hello, my name is John',
          words: [
            { id: 'w1', text: 'Hello', type: 'subject' },
            { id: 'w2', text: ',', type: 'complement' },
            { id: 'w3', text: 'my', type: 'determiner' },
            { id: 'w4', text: 'name', type: 'subject' },
            { id: 'w5', text: 'is', type: 'verb' },
            { id: 'w6', text: 'John', type: 'object' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Basic Introductions',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d1-ex3',
      type: 'listening',
      title: 'Listening Practice: Meeting Someone',
      instructions: 'Listen to the dialogue and answer the question.',
      transcript: 'A: Hello! I am Sarah. What is your name?\nB: Hi Sarah! My name is Tom. Nice to meet you.\nA: Nice to meet you too, Tom.',
      questions: [
        {
          id: 'a1-d1-l1',
          question: 'What is the man\'s name?',
          options: ['Sarah', 'John', 'Tom'],
          correctAnswer: 'Tom',
          explanation: 'The man says "My name is Tom".',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d1-ex4',
      type: 'speaking',
      title: 'Saying Hello',
      instructions: 'Record yourself saying: "Nice to meet you."',
      targetText: 'Nice to meet you',
      points: 5
    } as any,
    {
      id: 'a1-d1-ex5',
      type: 'writing',
      title: 'Introduce yourself',
      instructions: 'Complete the sentence with your own name.',
      question: 'Hello, my name is ___.',
      correctAnswer: 'any',
      points: 2
    } as any,
    {
      id: 'a1-d1-ex6',
      type: 'drag-and-drop',
      title: 'Match Greeting to Time',
      instructions: 'Match the greeting with the correct time of day.',
      items: [
        { id: 'i1', text: 'Good morning' },
        { id: 'i2', text: 'Good afternoon' },
        { id: 'i3', text: 'Good evening' }
      ],
      categories: [
        { id: 'c1', title: '8:00 AM' },
        { id: 'c2', title: '2:00 PM' },
        { id: 'c3', title: '8:00 PM' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i2': 'c2',
        'i3': 'c3'
      }
    } as any
  ]
};

export const A1_DEMO_DAY_2: Lesson = {
  id: 'a1-demo-day-2',
  title: 'Day 2: Personal Information & Numbers',
  description: 'Learn how to give your age, phone number, and basic personal details.',
  duration: 15,
  objectives: ['Count from 1 to 20', 'Share personal information', 'Ask for basic details'],
  theorySlides: [
    {
      title: 'Vocabulary: Numbers 1-10',
      content: 'Let\'s learn the basic numbers.',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: '1', back: 'One', pronunciation: '/wʌn/' },
          { front: '2', back: 'Two', pronunciation: '/tuː/' },
          { front: '3', back: 'Three', pronunciation: '/θriː/' },
          { front: '4', back: 'Four', pronunciation: '/fɔːr/' },
          { front: '5', back: 'Five', pronunciation: '/faɪv/' },
          { front: '6', back: 'Six', pronunciation: '/sɪks/' },
          { front: '7', back: 'Seven', pronunciation: '/ˈsev.ən/' },
          { front: '8', back: 'Eight', pronunciation: '/eɪt/' },
          { front: '9', back: 'Nine', pronunciation: '/naɪn/' },
          { front: '10', back: 'Ten', pronunciation: '/ten/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d2-ex1',
      type: 'multiple-choice',
      title: 'Numbers Quiz',
      instructions: 'Select the correct word for the number.',
      questions: [
        {
          id: 'a1-d2-q1',
          question: 'What is the number 7?',
          options: ['Six', 'Seven', 'Eight'],
          correctAnswer: 'Seven',
          explanation: '7 is seven.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d2-ex2',
      type: 'sentence-building',
      title: 'State Your Age',
      instructions: 'Form the sentence: "I am twenty years old."',
      challenges: [
        {
          id: 'a1-d2-sb1',
          prompt: 'Form the sentence: "I am twenty years old"',
          targetSentence: 'I am twenty years old',
          words: [
            { id: 'w1', text: 'I', type: 'subject' },
            { id: 'w2', text: 'am', type: 'verb' },
            { id: 'w3', text: 'twenty', type: 'object' },
            { id: 'w4', text: 'years', type: 'object' },
            { id: 'w5', text: 'old', type: 'object' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Age',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d2-ex3',
      type: 'listening',
      title: 'Phone Number Practice',
      instructions: 'Listen and identify the phone number.',
      transcript: 'My phone number is five-five-five, zero-one-two-three.',
      questions: [
        {
          id: 'a1-d2-l1',
          question: 'What is the phone number?',
          options: ['555-0123', '555-1234', '555-0132'],
          correctAnswer: '555-0123',
          explanation: 'The speaker says 5-5-5, 0-1-2-3.',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d2-ex4',
      type: 'speaking',
      title: 'Say Your Age',
      instructions: 'Record yourself saying: "I am twenty-five."',
      targetText: 'I am twenty-five',
      points: 5
    } as any,
    {
      id: 'a1-d2-ex5',
      type: 'writing',
      title: 'Fill in Details',
      instructions: 'Complete with a number.',
      question: 'I have ___ (3) brothers.',
      correctAnswer: 'three',
      points: 2
    } as any,
    {
      id: 'a1-d2-ex6',
      type: 'drag-and-drop',
      title: 'Match Words to Numbers',
      instructions: 'Drag the word to its numerical form.',
      items: [
        { id: 'i1', text: 'Five' },
        { id: 'i2', text: 'Nine' },
        { id: 'i3', text: 'Zero' }
      ],
      categories: [
        { id: 'c1', title: '5' },
        { id: 'c2', title: '9' },
        { id: 'c3', title: '0' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i2': 'c2',
        'i3': 'c3'
      }
    } as any
  ]
};

export const A1_DEMO_DAY_3: Lesson = {
  id: 'a1-demo-day-3',
  title: 'Day 3: Family & Relationships',
  description: 'Learn vocabulary to talk about your family members.',
  duration: 15,
  objectives: ['Identify family members', 'Use possessive adjectives (my, your)', 'Describe relationships'],
  theorySlides: [
    {
      title: 'Vocabulary: Family Members',
      content: 'Let\'s learn the names for people in your family.',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: 'Mother', back: 'Madre', pronunciation: '/ˈmʌðər/' },
          { front: 'Father', back: 'Padre', pronunciation: '/ˈfɑːðər/' },
          { front: 'Brother', back: 'Hermano', pronunciation: '/ˈbrʌðər/' },
          { front: 'Sister', back: 'Hermana', pronunciation: '/ˈsɪstər/' },
          { front: 'Son', back: 'Hijo', pronunciation: '/sʌn/' },
          { front: 'Daughter', back: 'Hija', pronunciation: '/ˈdɔːtər/' },
          { front: 'Husband', back: 'Esposo', pronunciation: '/ˈhʌzbənd/' },
          { front: 'Wife', back: 'Esposa', pronunciation: '/waɪf/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d3-ex1',
      type: 'multiple-choice',
      title: 'Family Quiz',
      instructions: 'Choose the correct family member.',
      questions: [
        {
          id: 'a1-d3-q1',
          question: 'Your mother\'s husband is your ___?',
          options: ['Brother', 'Father', 'Son'],
          correctAnswer: 'Father',
          explanation: 'Your mother\'s husband is your father.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d3-ex2',
      type: 'sentence-building',
      title: 'Talk about your family',
      instructions: 'Form the sentence: "My brother is a teacher."',
      challenges: [
        {
          id: 'a1-d3-sb1',
          prompt: 'Form the sentence: "My brother is a teacher"',
          targetSentence: 'My brother is a teacher',
          words: [
            { id: 'w1', text: 'My', type: 'determiner' },
            { id: 'w2', text: 'brother', type: 'subject' },
            { id: 'w3', text: 'is', type: 'verb' },
            { id: 'w4', text: 'a', type: 'article' },
            { id: 'w5', text: 'teacher', type: 'object' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Possessive Adjectives',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d3-ex3',
      type: 'listening',
      title: 'Identifying Family',
      instructions: 'Listen and identify who the speaker is talking about.',
      transcript: 'This is my sister, her name is Anna. She is a doctor.',
      questions: [
        {
          id: 'a1-d3-l1',
          question: 'Who is Anna?',
          options: ['The speaker\'s mother', 'The speaker\'s sister', 'The speaker\'s wife'],
          correctAnswer: 'The speaker\'s sister',
          explanation: 'The speaker says "This is my sister, her name is Anna".',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d3-ex4',
      type: 'speaking',
      title: 'Introduce your sister',
      instructions: 'Record yourself saying: "She is my sister."',
      targetText: 'She is my sister',
      points: 5
    } as any,
    {
      id: 'a1-d3-ex5',
      type: 'writing',
      title: 'Fill in the blanks',
      instructions: 'Use "my" or "your".',
      question: 'I love ___ family.',
      correctAnswer: 'my',
      points: 2
    } as any,
    {
      id: 'a1-d3-ex6',
      type: 'drag-and-drop',
      title: 'Match Opposites',
      instructions: 'Match the male and female family members.',
      items: [
        { id: 'i1', text: 'Father' },
        { id: 'i2', text: 'Brother' },
        { id: 'i3', text: 'Husband' }
      ],
      categories: [
        { id: 'c1', title: 'Mother' },
        { id: 'c2', title: 'Sister' },
        { id: 'c3', title: 'Wife' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i2': 'c2',
        'i3': 'c3'
      }
    } as any
  ]
};

export const A1_DEMO_DAY_4: Lesson = {
  id: 'a1-demo-day-4',
  title: 'Day 4: Daily Routine & Time',
  description: 'Talk about your daily activities and tell the time.',
  duration: 15,
  objectives: ['Tell the time', 'Describe basic daily actions', 'Use prepositions of time (at, in)'],
  theorySlides: [
    {
      title: 'Vocabulary: Daily Actions',
      content: 'Let\'s learn verbs for everyday life.',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: 'Wake up', back: 'Despertarse', pronunciation: '/weɪk ʌp/' },
          { front: 'Have breakfast', back: 'Desayunar', pronunciation: '/hæv ˈbrekfəst/' },
          { front: 'Go to work', back: 'Ir al trabajo', pronunciation: '/ɡəʊ tu wɜːrk/' },
          { front: 'Have lunch', back: 'Almorzar', pronunciation: '/hæv lʌntʃ/' },
          { front: 'Go home', back: 'Ir a casa', pronunciation: '/ɡəʊ həʊm/' },
          { front: 'Have dinner', back: 'Cenar', pronunciation: '/hæv ˈdɪnər/' },
          { front: 'Go to sleep', back: 'Ir a dormir', pronunciation: '/ɡəʊ tu sliːp/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d4-ex1',
      type: 'multiple-choice',
      title: 'Time Quiz',
      instructions: 'Select the correct time.',
      questions: [
        {
          id: 'a1-d4-q1',
          question: 'How do you say 7:00?',
          options: ['It is seven o\'clock', 'It is seven hours', 'It is seven time'],
          correctAnswer: 'It is seven o\'clock',
          explanation: 'We use "o\'clock" for exact hours.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d4-ex2',
      type: 'sentence-building',
      title: 'Routine Builder',
      instructions: 'Form the sentence: "I go to work at 8:00."',
      challenges: [
        {
          id: 'a1-d4-sb1',
          prompt: 'Form the sentence: "I go to work at 8:00"',
          targetSentence: 'I go to work at 8:00',
          words: [
            { id: 'w1', text: 'I', type: 'subject' },
            { id: 'w2', text: 'go', type: 'verb' },
            { id: 'w3', text: 'to', type: 'preposition' },
            { id: 'w4', text: 'work', type: 'object' },
            { id: 'w5', text: 'at', type: 'preposition' },
            { id: 'w6', text: '8:00', type: 'object' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Prepositions of Time',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d4-ex3',
      type: 'listening',
      title: 'Daily Schedule',
      instructions: 'Listen and identify the time of the activity.',
      transcript: 'I have lunch at one o\'clock every day.',
      questions: [
        {
          id: 'a1-d4-l1',
          question: 'What time does the speaker have lunch?',
          options: ['12:00', '1:00', '2:00'],
          correctAnswer: '1:00',
          explanation: 'The speaker says "at one o\'clock".',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d4-ex4',
      type: 'speaking',
      title: 'Tell the Time',
      instructions: 'Record yourself saying: "It is nine o\'clock."',
      targetText: 'It is nine o\'clock',
      points: 5
    } as any,
    {
      id: 'a1-d4-ex5',
      type: 'writing',
      title: 'Prepositions Practice',
      instructions: 'Fill in the blank with "at" or "in".',
      question: 'I wake up ___ 7:00 AM.',
      correctAnswer: 'at',
      points: 2
    } as any,
    {
      id: 'a1-d4-ex6',
      type: 'drag-and-drop',
      title: 'Morning vs Evening',
      instructions: 'Sort the activities.',
      items: [
        { id: 'i1', text: 'Wake up' },
        { id: 'i2', text: 'Have dinner' },
        { id: 'i3', text: 'Go to sleep' },
        { id: 'i4', text: 'Have breakfast' }
      ],
      categories: [
        { id: 'c1', title: 'Morning' },
        { id: 'c2', title: 'Evening/Night' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i4': 'c1',
        'i2': 'c2',
        'i3': 'c2'
      }
    } as any
  ]
};

export const A1_DEMO_DAY_5: Lesson = {
  id: 'a1-demo-day-5',
  title: 'Day 5: Food & Ordering',
  description: 'Practice ordering food and drinks in a restaurant.',
  duration: 15,
  objectives: ['Identify common food and drinks', 'Order at a restaurant', 'Use "I would like"'],
  theorySlides: [
    {
      title: 'Vocabulary: Food & Drinks',
      content: 'Useful words for the restaurant.',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: 'Water', back: 'Agua', pronunciation: '/ˈwɔːtər/' },
          { front: 'Coffee', back: 'Café', pronunciation: '/ˈkɒfi/' },
          { front: 'Tea', back: 'Té', pronunciation: '/tiː/' },
          { front: 'Pizza', back: 'Pizza', pronunciation: '/ˈpiːtsə/' },
          { front: 'Salad', back: 'Ensalada', pronunciation: '/ˈsæləd/' },
          { front: 'Burger', back: 'Hamburguesa', pronunciation: '/ˈbɜːrɡər/' },
          { front: 'Check/Bill', back: 'Cuenta', pronunciation: '/bɪl/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d5-ex1',
      type: 'multiple-choice',
      title: 'Restaurant Quiz',
      instructions: 'Select the best response.',
      questions: [
        {
          id: 'a1-d5-q1',
          question: 'What do you say to the waiter when you want to order?',
          options: ['I would like a pizza, please', 'Give me pizza', 'Pizza is good'],
          correctAnswer: 'I would like a pizza, please',
          explanation: '"I would like..." is the polite way to order.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d5-ex2',
      type: 'sentence-building',
      title: 'Ordering Practice',
      instructions: 'Form the sentence: "I would like a coffee, please."',
      challenges: [
        {
          id: 'a1-d5-sb1',
          prompt: 'Form the sentence: "I would like a coffee, please"',
          targetSentence: 'I would like a coffee, please',
          words: [
            { id: 'w1', text: 'I', type: 'subject' },
            { id: 'w2', text: 'would', type: 'auxiliary' },
            { id: 'w3', text: 'like', type: 'verb' },
            { id: 'w4', text: 'a', type: 'article' },
            { id: 'w5', text: 'coffee', type: 'object' },
            { id: 'w6', text: ',', type: 'complement' },
            { id: 'w7', text: 'please', type: 'complement' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Polite Requests',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d5-ex3',
      type: 'listening',
      title: 'At the Cafe',
      instructions: 'Listen and identify what the customer orders.',
      transcript: 'A: Good morning! What would you like?\nB: Hello! I would like a tea and a salad, please.',
      questions: [
        {
          id: 'a1-d5-l1',
          question: 'What does the customer order?',
          options: ['Coffee and pizza', 'Tea and salad', 'Water and burger'],
          correctAnswer: 'Tea and salad',
          explanation: 'The customer says "a tea and a salad".',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d5-ex4',
      type: 'speaking',
      title: 'Practice Ordering',
      instructions: 'Record yourself saying: "I would like the bill, please."',
      targetText: 'I would like the bill, please',
      points: 5
    } as any,
    {
      id: 'a1-d5-ex5',
      type: 'writing',
      title: 'Menu Completion',
      instructions: 'Complete the sentence.',
      question: 'I drink ___ in the morning.',
      correctAnswer: 'coffee',
      points: 2
    } as any,
    {
      id: 'a1-d5-ex6',
      type: 'drag-and-drop',
      title: 'Drinks vs Food',
      instructions: 'Sort the items.',
      items: [
        { id: 'i1', text: 'Water' },
        { id: 'i2', text: 'Pizza' },
        { id: 'i3', text: 'Tea' },
        { id: 'i4', text: 'Burger' }
      ],
      categories: [
        { id: 'c1', title: 'Drinks' },
        { id: 'c2', title: 'Food' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i3': 'c1',
        'i2': 'c2',
        'i4': 'c2'
      }
    } as any
  ]
};

export const A1_DEMO_DAY_6: Lesson = {
  id: 'a1-demo-day-6',
  title: 'Day 6: Places in Town & Directions',
  description: 'Learn how to navigate a city and ask for directions.',
  duration: 15,
  objectives: ['Name places in town', 'Ask for directions', 'Understand basic prepositions of place'],
  theorySlides: [
    {
      title: 'Vocabulary: Places in Town',
      content: 'Where do you go in the city?',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: 'Supermarket', back: 'Supermercado', pronunciation: '/ˈsuːpərmɑːrkɪt/' },
          { front: 'Bank', back: 'Banco', pronunciation: '/bæŋk/' },
          { front: 'Hospital', back: 'Hospital', pronunciation: '/ˈhɒspɪtəl/' },
          { front: 'Park', back: 'Parque', pronunciation: '/pɑːrk/' },
          { front: 'School', back: 'Escuela', pronunciation: '/skuːl/' },
          { front: 'Restaurant', back: 'Restaurante', pronunciation: '/ˈrestrɒnt/' },
          { front: 'Pharmacy', back: 'Farmacia', pronunciation: '/ˈfɑːrməsi/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d6-ex1',
      type: 'multiple-choice',
      title: 'City Quiz',
      instructions: 'Select the correct place.',
      questions: [
        {
          id: 'a1-d6-q1',
          question: 'Where do you buy food?',
          options: ['Hospital', 'Supermarket', 'School'],
          correctAnswer: 'Supermarket',
          explanation: 'You buy food at the supermarket.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d6-ex2',
      type: 'sentence-building',
      title: 'Direction Finder',
      instructions: 'Form the sentence: "Where is the bank?"',
      challenges: [
        {
          id: 'a1-d6-sb1',
          prompt: 'Form the sentence: "Where is the bank?"',
          targetSentence: 'Where is the bank?',
          words: [
            { id: 'w1', text: 'Where', type: 'adverb' },
            { id: 'w2', text: 'is', type: 'verb' },
            { id: 'w3', text: 'the', type: 'article' },
            { id: 'w4', text: 'bank', type: 'subject' },
            { id: 'w5', text: '?', type: 'complement' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Asking for locations',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d6-ex3',
      type: 'listening',
      title: 'Asking the Way',
      instructions: 'Listen and identify the destination.',
      transcript: 'A: Excuse me, where is the park?\nB: It is next to the hospital.',
      questions: [
        {
          id: 'a1-d6-l1',
          question: 'Where is the park?',
          options: ['Next to the supermarket', 'Next to the hospital', 'Behind the school'],
          correctAnswer: 'Next to the hospital',
          explanation: 'The speaker says "It is next to the hospital".',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d6-ex4',
      type: 'speaking',
      title: 'Practice Asking',
      instructions: 'Record yourself saying: "Excuse me, where is the pharmacy?"',
      targetText: 'Excuse me, where is the pharmacy?',
      points: 5
    } as any,
    {
      id: 'a1-d6-ex5',
      type: 'writing',
      title: 'Complete the Direction',
      instructions: 'Fill in the blank.',
      question: 'The park is ___ (enfrente de) the school.',
      correctAnswer: 'opposite',
      points: 2
    } as any,
    {
      id: 'a1-d6-ex6',
      type: 'drag-and-drop',
      title: 'Match Icon to Word',
      instructions: 'Drag the word to the place description.',
      items: [
        { id: 'i1', text: 'School' },
        { id: 'i2', text: 'Hospital' },
        { id: 'i3', text: 'Pharmacy' }
      ],
      categories: [
        { id: 'c1', title: 'Place to study' },
        { id: 'c2', title: 'Place for sick people' },
        { id: 'c3', title: 'Place for medicine' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i2': 'c2',
        'i3': 'c3'
      }
    } as any
  ]
};

export const A1_DEMO_DAY_7: Lesson = {
  id: 'a1-demo-day-7',
  title: 'Day 7: Hobbies & Abilities',
  description: 'Talk about what you like to do and what you can do.',
  duration: 15,
  objectives: ['Express likes and dislikes', 'Talk about abilities with "can"', 'Identify common hobbies'],
  theorySlides: [
    {
      title: 'Vocabulary: Hobbies',
      content: 'What do you like to do in your free time?',
      type: 'theory',
      interactive: {
        type: 'flashcards',
        items: [
          { front: 'Reading', back: 'Leer', pronunciation: '/ˈriːdɪŋ/' },
          { front: 'Swimming', back: 'Nadar', pronunciation: '/ˈswɪmɪŋ/' },
          { front: 'Cooking', back: 'Cocinar', pronunciation: '/ˈkʊkɪŋ/' },
          { front: 'Running', back: 'Correr', pronunciation: '/ˈrʌnɪŋ/' },
          { front: 'Dancing', back: 'Bailar', pronunciation: '/ˈdɑːnsɪŋ/' },
          { front: 'Playing football', back: 'Jugar fútbol', pronunciation: '/ˈpleɪɪŋ ˈfʊtbɔːl/' }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'a1-d7-ex1',
      type: 'multiple-choice',
      title: 'Hobbies Quiz',
      instructions: 'Select the correct word.',
      questions: [
        {
          id: 'a1-d7-q1',
          question: 'I like ___ books.',
          options: ['Reading', 'Swimming', 'Running'],
          correctAnswer: 'Reading',
          explanation: 'You read books.',
          points: 1
        }
      ]
    } as Exercise,
    {
      id: 'a1-d7-ex2',
      type: 'sentence-building',
      title: 'Ability Builder',
      instructions: 'Form the sentence: "I can speak English."',
      challenges: [
        {
          id: 'a1-d7-sb1',
          prompt: 'Form the sentence: "I can speak English"',
          targetSentence: 'I can speak English',
          words: [
            { id: 'w1', text: 'I', type: 'subject' },
            { id: 'w2', text: 'can', type: 'auxiliary' },
            { id: 'w3', text: 'speak', type: 'verb' },
            { id: 'w4', text: 'English', type: 'object' }
          ],
          difficulty: 'easy',
          grammarFocus: 'Abilities with "can"',
          points: 5
        }
      ]
    } as any,
    {
      id: 'a1-d7-ex3',
      type: 'listening',
      title: 'Talking about Hobbies',
      instructions: 'Listen and identify the hobby.',
      transcript: 'I love music. I can dance very well.',
      questions: [
        {
          id: 'a1-d7-l1',
          question: 'What is the speaker\'s hobby?',
          options: ['Cooking', 'Running', 'Dancing'],
          correctAnswer: 'Dancing',
          explanation: 'The speaker says "I can dance very well".',
          points: 2
        }
      ]
    } as any,
    {
      id: 'a1-d7-ex4',
      type: 'speaking',
      title: 'Share your Hobby',
      instructions: 'Record yourself saying: "I like swimming."',
      targetText: 'I like swimming',
      points: 5
    } as any,
    {
      id: 'a1-d7-ex5',
      type: 'writing',
      title: 'Abilities',
      instructions: 'Complete with "can" or "can\'t".',
      question: 'I ___ (poder) swim.',
      correctAnswer: 'can',
      points: 2
    } as any,
    {
      id: 'a1-d7-ex6',
      type: 'drag-and-drop',
      title: 'Like vs Dislike',
      instructions: 'Sort the phrases.',
      items: [
        { id: 'i1', text: 'I love it' },
        { id: 'i2', text: 'I hate it' },
        { id: 'i3', text: 'It is great' },
        { id: 'i4', text: 'I don\'t like it' }
      ],
      categories: [
        { id: 'c1', title: 'Positive' },
        { id: 'c2', title: 'Negative' }
      ],
      correctMapping: {
        'i1': 'c1',
        'i3': 'c1',
        'i2': 'c2',
        'i4': 'c2'
      }
    } as any
  ]
};

export const A1_DEMO_COURSE_LESSONS: Lesson[] = [
  A1_DEMO_DAY_1,
  A1_DEMO_DAY_2,
  A1_DEMO_DAY_3,
  A1_DEMO_DAY_4,
  A1_DEMO_DAY_5,
  A1_DEMO_DAY_6,
  A1_DEMO_DAY_7,
];

export const A1_DEMO_COURSE = {
  id: 'a1-demo-7-days',
  title: 'English A1: 7-Day Challenge',
  level: 'A1',
  description: 'A micro-learning journey into real-life English situations.',
  lessons: A1_DEMO_COURSE_LESSONS
};
