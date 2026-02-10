import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    id: 'a1-u1-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Common Greetings',
      instructions: 'Choose the correct greeting for the morning.',
      questions: [
        {
          id: 'q1',
          question: 'What do you say at 8:00 AM?',
          options: ['Good evening', 'Good morning', 'Good night'],
          correctAnswer: 1,
          explanation: '"Good morning" is used from sunrise until noon.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hola',
          back: 'Hello / Hi',
          example: 'Hello, how are you?',
          pronunciation: '/həˈloʊ/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'I am...',
      instructions: 'Order the words to say "I am Juan".',
      sentences: [
        {
          id: 's1',
          words: ['Juan', 'I', 'am', '.'],
          correctOrder: [1, 2, 0, 3],
          translation: 'Yo soy Juan.',
          hint: 'Start with the pronoun "I".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Meeting People',
      instructions: 'What is the most common response to "Nice to meet you"?',
      questions: [
        {
          id: 'q1',
          question: 'Person A: Nice to meet you. \nPerson B: ___________',
          options: ['Nice to meet you too', 'I am fine', 'Good night'],
          correctAnswer: 0,
          explanation: 'Adding "too" is the standard polite response.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Hello',
      instructions: 'Say "Hello" clearly into the microphone.',
      questions: [
        {
          id: 'q1',
          text: 'Hello',
          correctAnswer: 'Hello',
          explanation: 'Focus on the "H" sound.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Greeting Pairs',
      instructions: 'Match the Spanish greeting with its English translation.',
      pairs: [
        { id: '1', left: 'Buenos días', right: 'Good morning' },
        { id: '2', left: 'Buenas tardes', right: 'Good afternoon' },
        { id: '3', left: 'Buenas noches (saludo)', right: 'Good evening' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Self Introduction',
      instructions: 'Fill in the blank with the correct verb.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ a student.',
          correctAnswer: 'am',
          explanation: 'We use "am" with the pronoun "I".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Saying Goodbye',
      instructions: 'Choose the correct way to say goodbye.',
      questions: [
        {
          id: 'q1',
          question: 'Which one is a farewell?',
          options: ['Welcome', 'Goodbye', 'Hi'],
          correctAnswer: 1,
          explanation: '"Goodbye" is used when leaving.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Cuál es tu nombre?',
          back: "What's your name?",
          example: "Hi, what's your name?",
          pronunciation: '/wɒts jɔː neɪm/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Good afternoon',
      instructions: 'Order the words to say "Good afternoon".',
      sentences: [
        {
          id: 's1',
          words: ['afternoon', 'Good', '!'],
          correctOrder: [1, 0, 2],
          translation: 'Buenas tardes.',
          hint: 'The adjective "Good" comes first.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Personal Info',
      instructions: 'Choose the correct pronoun for yourself.',
      questions: [
        {
          id: 'q1',
          question: 'How do you say "Yo" in English?',
          options: ['You', 'I', 'He'],
          correctAnswer: 1,
          explanation: '"I" is the first person singular pronoun.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: I am',
      instructions: 'Say "I am" followed by your name.',
      questions: [
        {
          id: 'q1',
          text: 'I am',
          correctAnswer: 'I am',
          explanation: 'Speak clearly.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Name and Me',
      instructions: 'Match the words.',
      pairs: [
        { id: '1', left: 'Name', right: 'Nombre' },
        { id: '2', left: 'I', right: 'Yo' },
        { id: '3', left: 'Student', right: 'Estudiante' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Fine, thanks',
      instructions: 'Complete the response to "How are you?".',
      questions: [
        {
          id: 'q1',
          text: 'I am ___, thanks.',
          correctAnswer: 'fine',
          explanation: '"Fine" or "Good" are common responses.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Night Greeting',
      instructions: 'Which one is a greeting at night?',
      questions: [
        {
          id: 'q1',
          question: 'When you arrive at a party at 9:00 PM:',
          options: ['Good night', 'Good evening', 'Good morning'],
          correctAnswer: 1,
          explanation: '"Good evening" is for arriving/greeting, "Good night" is for leaving/sleeping.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Cómo estás?',
          back: 'How are you?',
          example: 'Hello, how are you today?',
          pronunciation: '/haʊ ɑː juː/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'My name is...',
      instructions: 'Order the words to say "My name is Maria".',
      sentences: [
        {
          id: 's1',
          words: ['Maria', 'name', 'My', 'is', '.'],
          correctOrder: [2, 1, 3, 0, 4],
          translation: 'Mi nombre es Maria.',
          hint: 'Start with "My name".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Casual Goodbye',
      instructions: 'Choose a casual way to say goodbye.',
      questions: [
        {
          id: 'q1',
          question: 'A friend is leaving:',
          options: ['See you later', 'Nice to meet you', 'Good morning'],
          correctAnswer: 0,
          explanation: '"See you later" is a common casual farewell.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Nice to meet you',
      instructions: 'Say "Nice to meet you".',
      questions: [
        {
          id: 'q1',
          text: 'Nice to meet you',
          correctAnswer: 'Nice to meet you',
          explanation: 'Try to link the words.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Basic Responses',
      instructions: 'Match the question with the response.',
      pairs: [
        { id: '1', left: 'How are you?', right: 'I am fine' },
        { id: '2', left: 'What is your name?', right: 'My name is John' },
        { id: '3', left: 'Goodbye', right: 'See you later' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Missing "to"',
      instructions: 'Complete the phrase.',
      questions: [
        {
          id: 'q1',
          text: 'Nice ___ meet you.',
          correctAnswer: 'to',
          explanation: 'The full phrase is "Nice to meet you".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Informal Hello',
      instructions: 'Choose the most informal greeting.',
      questions: [
        {
          id: 'q1',
          question: 'Which one is very informal?',
          options: ['Hi', 'Good morning', 'Good afternoon'],
          correctAnswer: 0,
          explanation: '"Hi" is more informal than "Hello".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Por favor',
          back: 'Please',
          example: 'Coffee, please.',
          pronunciation: '/pliːz/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'How are you?',
      instructions: 'Order the words to ask "How are you?".',
      sentences: [
        {
          id: 's1',
          words: ['are', 'How', 'you', '?'],
          correctOrder: [1, 0, 2, 3],
          translation: '¿Cómo estás?',
          hint: 'Question words like "How" come first.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Being a student',
      instructions: 'Choose the correct verb form.',
      questions: [
        {
          id: 'q1',
          question: 'I ____ a student.',
          options: ['is', 'am', 'are'],
          correctAnswer: 1,
          explanation: 'I always takes "am".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Goodbye',
      instructions: 'Say "Goodbye".',
      questions: [
        {
          id: 'q1',
          text: 'Goodbye',
          correctAnswer: 'Goodbye',
          explanation: 'Focus on the "oo" sound.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e27',
    type: 'matching',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Personal Pronouns',
      instructions: 'Match the pronouns.',
      pairs: [
        { id: '1', left: 'I', right: 'Yo' },
        { id: '2', left: 'You', right: 'Tú' },
        { id: '3', left: 'We', right: 'Nosotros' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Thanks!',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'Thank ___ very much.',
          correctAnswer: 'you',
          explanation: 'The standard phrase is "Thank you".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'The teacher',
      instructions: 'Identify the person.',
      questions: [
        {
          id: 'q1',
          question: 'Who teaches the class?',
          options: ['The student', 'The teacher', 'The doctor'],
          correctAnswer: 1,
          explanation: 'A teacher is someone who educates.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Gracias',
          back: 'Thanks / Thank you',
          example: 'Thank you, Maria.',
          pronunciation: '/θæŋks/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'See you',
      instructions: 'Order the words to say "See you tomorrow".',
      sentences: [
        {
          id: 's1',
          words: ['tomorrow', 'you', 'See', '.'],
          correctOrder: [2, 1, 0, 3],
          translation: 'Nos vemos mañana.',
          hint: '"See you" is a standard phrase.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Naming objects',
      instructions: 'Identify the object.',
      questions: [
        {
          id: 'q1',
          question: 'What is a "Book"?',
          options: ['Libro', 'Mesa', 'Silla'],
          correctAnswer: 0,
          explanation: '"Book" means "Libro" in Spanish.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Morning',
      instructions: 'Say "Morning".',
      questions: [
        {
          id: 'q1',
          text: 'Morning',
          correctAnswer: 'Morning',
          explanation: 'Focus on the "or" sound.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Greetings & Responses',
      instructions: 'Match the pairs.',
      pairs: [
        { id: '1', left: 'Hello', right: 'Hi' },
        { id: '2', left: 'Thanks', right: "You're welcome" },
        { id: '3', left: "What's up?", right: 'Not much' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'I am here',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ here.',
          correctAnswer: 'am',
          explanation: 'I am = Yo estoy.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Arriving at work',
      instructions: 'What do you say when arriving at 9 AM?',
      questions: [
        {
          id: 'q1',
          question: 'Arriving at the office:',
          options: ['Good night', 'Good morning', 'Goodbye'],
          correctAnswer: 1,
          explanation: 'Always use "Good morning" in the early hours.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'De nada',
          back: "You're welcome",
          example: "A: Thanks! B: You're welcome.",
          pronunciation: '/jʊər ˈwɛlkəm/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Nice day',
      instructions: 'Order the words to say "Have a nice day".',
      sentences: [
        {
          id: 's1',
          words: ['nice', 'a', 'Have', 'day', '.'],
          correctOrder: [2, 1, 0, 3, 4],
          translation: 'Que tengas un buen día.',
          hint: 'Start with the verb "Have".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Subject Pronoun',
      instructions: 'Choose the correct pronoun for "Tú".',
      questions: [
        {
          id: 'q1',
          question: 'How do you say "Tú" in English?',
          options: ['He', 'You', 'They'],
          correctAnswer: 1,
          explanation: '"You" is used for both singular and plural.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Name',
      instructions: 'Say "My name is...".',
      questions: [
        {
          id: 'q1',
          text: 'My name is',
          correctAnswer: 'My name is',
          explanation: 'Clear pronunciation of "name".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Evening vs Night',
      instructions: 'Match the situation.',
      pairs: [
        { id: '1', left: 'Arriving at 7 PM', right: 'Good evening' },
        { id: '2', left: 'Going to bed', right: 'Good night' },
        { id: '3', left: 'Leaving at 10 PM', right: 'Good night' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'I am English',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ from Spain.',
          correctAnswer: 'am',
          explanation: 'I am from... = Soy de...'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Informal "How are you?"',
      instructions: 'Choose the informal version.',
      questions: [
        {
          id: 'q1',
          question: 'Which one is common among friends?',
          options: ['How are you?', "What's up?", 'Good morning'],
          correctAnswer: 1,
          explanation: '"What\'s up?" is very casual.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hasta luego',
          back: 'See you later',
          example: 'Bye! See you later.',
          pronunciation: '/siː juː ˈleɪtər/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Thanks for everything',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Thanks', 'for', 'everything', '!'],
          correctOrder: [0, 1, 2, 3],
          translation: 'Gracias por todo.',
          hint: 'The order is very similar to Spanish.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Who is he?',
      instructions: 'Choose the correct meaning.',
      questions: [
        {
          id: 'q1',
          question: 'What does "He" mean?',
          options: ['Ella', 'Él', 'Ellos'],
          correctAnswer: 1,
          explanation: '"He" refers to a male person.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Hi',
      instructions: 'Say "Hi".',
      questions: [
        {
          id: 'q1',
          text: 'Hi',
          correctAnswer: 'Hi',
          explanation: 'Short and clear.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'English Symbols',
      instructions: 'Match the symbols/punctuations.',
      pairs: [
        { id: '1', left: '?', right: 'Question mark' },
        { id: '2', left: '!', right: 'Exclamation mark' },
        { id: '3', left: '.', right: 'Full stop / Period' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Am I?',
      instructions: 'Complete the question.',
      questions: [
        {
          id: 'q1',
          text: '___ I a student?',
          correctAnswer: 'Am',
          explanation: 'In questions, the verb "Am" comes before "I".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Review: Morning',
      instructions: 'One last check.',
      questions: [
        {
          id: 'q1',
          question: 'Choose "Buenos días":',
          options: ['Good afternoon', 'Good morning', 'Good evening'],
          correctAnswer: 1,
          explanation: 'Correct! You finished Unit 1.'
        }
      ]
    }
  }
];
