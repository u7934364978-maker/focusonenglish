import { Exercise } from '@/lib/exercise-generator';

export const UNIT_2_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Life Experiences (1-10) ---
  {
    id: 'b1-u2-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To go abroad',
          back: 'Ir al extranjero',
          example: 'I have never been abroad before.',
          pronunciation: '/tuː ɡəʊ əˈbrɔːd/',
          explanation: 'To travel to a foreign country.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Ever and Never',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'Have you ___ eaten sushi?',
          options: ['ever', 'never', 'already', 'yet'],
          correctAnswer: 'ever',
          explanation: 'We use "ever" in questions to ask about experiences at any time in the past.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e3',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Collocations',
      instructions: 'Match the verb with the noun.',
      pairs: [
        { id: '1', left: 'Book', right: 'a flight' },
        { id: '2', left: 'Pack', right: 'a suitcase' },
        { id: '3', left: 'Check in', right: 'at the hotel' },
        { id: '4', left: 'Go on', right: 'a sightseeing tour' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Just, Already, Yet',
      instructions: 'Fill in the blanks with the correct word.',
      questions: [
        {
          id: 'q1',
          text: 'I have ___ (acabo de) finished my homework.',
          correctAnswer: 'just',
          explanation: '"Just" indicates a very recent action.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e5',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Present Perfect Experience',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'have', 'been', 'to', 'London', 'three', 'times', '.'],
          correctSentence: 'I have been to London three times.',
          translation: 'He estado en Londres tres veces.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e6',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Highlight',
          back: 'Lo más destacado',
          example: 'The highlight of the trip was visiting the Grand Canyon.',
          pronunciation: '/ˈhaɪ.laɪt/',
          explanation: 'The most exciting or memorable part of an event.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e7',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'For vs Since',
      instructions: 'Choose the correct preposition.',
      questions: [
        {
          id: 'q1',
          question: 'I have lived here ___ 2010.',
          options: ['for', 'since', 'during', 'ago'],
          correctAnswer: 'since',
          explanation: 'We use "since" for a specific point in time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e8',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Unspecified Time',
      instructions: 'Complete with the Present Perfect form.',
      questions: [
        {
          id: 'q1',
          text: 'She ___ (see) that movie already.',
          correctAnswer: 'has seen',
          explanation: 'Present Perfect for actions at an unspecified time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e9',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Experience Adjectives',
      instructions: 'Match the adjective with its meaning.',
      pairs: [
        { id: '1', left: 'Thrilling', right: 'Very exciting' },
        { id: '2', left: 'Exhausting', right: 'Making you feel very tired' },
        { id: '3', left: 'Breathtaking', right: 'Extremely beautiful' },
        { id: '4', left: 'Ordinary', right: 'Not special or different' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e10',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Recent Activity',
      instructions: 'Say this sentence clearly.',
      questions: [
        {
          id: 'q1',
          text: 'I have just finished reading a very interesting book.',
          correctAnswer: 'I have just finished reading a very interesting book',
          explanation: 'Pronuncia "just" y "finished" con claridad.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Travel Memories (11-20) ---
  {
    id: 'b1-u2-e11',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Souvenir',
          back: 'Recuerdo / Souvenir',
          example: 'I bought a small model of the Eiffel Tower as a souvenir.',
          pronunciation: '/ˌsuː.vəˈnɪər/',
          explanation: 'Something you buy to help you remember a place.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e12',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Present Perfect vs Past Simple',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ to Paris last year.',
          options: ['have gone', 'went', 'go', 'was going'],
          correctAnswer: 'went',
          explanation: 'Use Past Simple for a finished action at a specific time in the past.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e13',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Unfinished Time',
      instructions: 'Complete with Present Perfect or Past Simple.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (drink) three cups of coffee so far today.',
          correctAnswer: 'have drunk',
          explanation: '"So far today" is an unfinished time period.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e14',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Negative Experience',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'has', 'never', 'tried', 'Mexican', 'food', '.'],
          correctSentence: 'He has never tried Mexican food.',
          translation: 'Él nunca ha probado la comida mexicana.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e15',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Accommodation',
      instructions: 'Select the best option.',
      questions: [
        {
          id: 'q1',
          question: 'We stayed in a lovely ___ near the beach.',
          options: ['guesthouse', 'station', 'airport', 'museum'],
          correctAnswer: 'guesthouse',
          explanation: 'A guesthouse is a small hotel or private house where you can pay to stay.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e16',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Transport Memories',
      instructions: 'Match the phrases.',
      pairs: [
        { id: '1', left: 'Missed', right: 'my flight' },
        { id: '2', left: 'Caught', right: 'the last bus' },
        { id: '3', left: 'Boarded', right: 'the ship' },
        { id: '4', left: 'Lost', right: 'my luggage' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e17',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Been vs Gone',
      instructions: 'Fill in with "been" or "gone".',
      questions: [
        {
          id: 'q1',
          text: 'She isn\'t here. She has ___ (go) to the supermarket.',
          correctAnswer: 'gone',
          explanation: '"Gone" means she is still there or on her way.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e18',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Been vs Gone 2',
      instructions: 'Fill in with "been" or "gone".',
      questions: [
        {
          id: 'q1',
          text: 'I have ___ (be) to Italy twice in my life.',
          correctAnswer: 'been',
          explanation: '"Been" means you went and have now returned.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e19',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Travel Question',
      instructions: 'Answer the question out loud.',
      questions: [
        {
          id: 'q1',
          text: 'Have you ever missed a flight or a train?',
          correctAnswer: 'Yes, I have / No, I haven\'t',
          explanation: 'Practica la entonación en las respuestas cortas.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e20',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Already in Sentence',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'have', 'already', 'visited', 'the', 'museum', '.'],
          correctSentence: 'They have already visited the museum.',
          translation: 'Ellos ya han visitado el museo.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Childhood & Past Habits (21-30) ---
  {
    id: 'b1-u2-e21',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To grow up',
          back: 'Crecer / Criarse',
          example: 'I grew up in a small village.',
          pronunciation: '/tuː ɡrəʊ ʌp/',
          explanation: 'To change from being a child to being an adult.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e22',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Used to Habits',
      instructions: 'Choose the best option for a past habit.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ play with dolls when I was a girl.',
          options: ['used to', 'am used to', 'got used to', 'use to'],
          correctAnswer: 'used to',
          explanation: 'We use "used to + infinitive" for past habits that no longer happen.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e23',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Used to Negative',
      instructions: 'Complete the negative form of "used to".',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (no) use to like vegetables when I was a kid.',
          correctAnswer: 'didn\'t',
          explanation: 'Negative: "didn\'t use to". Note there is no "d" in "use".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e24',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Life Stages',
      instructions: 'Match the stage with the age group.',
      pairs: [
        { id: '1', left: 'Toddler', right: '1-3 years old' },
        { id: '2', left: 'Adolescent', right: '13-19 years old' },
        { id: '3', left: 'Infant', right: 'A very young baby' },
        { id: '4', left: 'Elderly', right: 'Old people' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e25',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Past Continuous vs Simple',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'was', 'playing', 'when', 'it', 'started', 'to', 'rain', '.'],
          correctSentence: 'I was playing when it started to rain.',
          translation: 'Estaba jugando cuando empezó a llover.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e26',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Memory Verbs',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'I can\'t ___ where I left my keys.',
          options: ['recall', 'remind', 'memorize', 'learn'],
          correctAnswer: 'recall',
          explanation: '"Recall" means to bring back a memory into your mind.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e27',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Remind vs Remember',
      instructions: 'Fill in with "remind" or "remember".',
      questions: [
        {
          id: 'q1',
          text: 'Please ___ (recordar a alguien) me to call my mother later.',
          correctAnswer: 'remind',
          explanation: '"Remind" means to make someone else remember something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e28',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Remind vs Remember 2',
      instructions: 'Fill in with "remind" or "remember".',
      questions: [
        {
          id: 'q1',
          text: 'I don\'t ___ (recordar algo) meeting him before.',
          correctAnswer: 'remember',
          explanation: '"Remember" means to have a memory of something in your mind.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e29',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Used to Practice',
      instructions: 'Say the sentence with good intonation.',
      questions: [
        {
          id: 'q1',
          text: 'I used to live in a much smaller house than this one.',
          correctAnswer: 'I used to live in a much smaller house than this one',
          explanation: 'La "s" en "used to" suena como /s/, no /z/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e30',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Past Interruption',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'were', 'you', 'doing', 'when', 'I', 'called', '?'],
          correctSentence: 'What were you doing when I called?',
          translation: '¿Qué estabas haciendo cuando llamé?',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Major Life Events (31-40) ---
  {
    id: 'b1-u2-e31',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To graduate',
          back: 'Graduarse',
          example: 'I graduated from university in 2018.',
          pronunciation: '/tuː ˈɡrædʒ.u.eɪt/',
          explanation: 'To complete a school, college, or university course.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e32',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Job Change',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'He decided to ___ his job and travel the world.',
          options: ['give up', 'get up', 'take up', 'look up'],
          correctAnswer: 'give up',
          explanation: '"Give up" can mean to quit or stop doing something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e33',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Present Perfect Since',
      instructions: 'Complete the sentence.',
      questions: [
        {
          id: 'q1',
          text: 'We have been married ___ (durante) fifteen years.',
          correctAnswer: 'for',
          explanation: 'Use "for" for a duration of time.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e34',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Life Events Matching',
      instructions: 'Match the verb with the life event.',
      pairs: [
        { id: '1', left: 'Get', right: 'married' },
        { id: '2', left: 'Fall', right: 'in love' },
        { id: '3', left: 'Have', right: 'a baby' },
        { id: '4', left: 'Retire', right: 'from work' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e35',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Just Action',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'has', 'just', 'bought', 'a', 'new', 'house', '.'],
          correctSentence: 'He has just bought a new house.',
          translation: 'Él acaba de comprar una casa nueva.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e36',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Been to vs Been in',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I have ___ London for two months now.',
          options: ['been in', 'been to', 'gone to', 'went to'],
          correctAnswer: 'been in',
          explanation: 'Use "been in" to describe how long you have been living/staying in a place.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e37',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Yet in Negative',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'I haven\'t seen the results ___ (todavía).',
          correctAnswer: 'yet',
          explanation: '"Yet" is used at the end of negative sentences.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e38',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Settling Down',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'They want to ___ and have a family.',
          options: ['settle down', 'settle up', 'set up', 'stand up'],
          correctAnswer: 'settle down',
          explanation: '"Settle down" means to start living a stable and calm life.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e39',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Graduation Memory',
      instructions: 'Read this sentence clearly.',
      questions: [
        {
          id: 'q1',
          text: 'I will never forget the day I graduated from university.',
          correctAnswer: 'I will never forget the day I graduated from university',
          explanation: 'Pronuncia el pasado "graduated" con la sílaba extra /ɪd/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e40',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Recent Change',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'city', 'has', 'changed', 'a', 'lot', 'since', 'I', 'was', 'young', '.'],
          correctSentence: 'The city has changed a lot since I was young.',
          translation: 'La ciudad ha cambiado mucho desde que yo era joven.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Growth & Feelings (41-50) ---
  {
    id: 'b1-u2-e41',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Growth',
          back: 'Crecimiento / Desarrollo',
          example: 'Traveling alone led to significant personal growth.',
          pronunciation: '/ɡrəʊθ/',
          explanation: 'The process of developing or maturing physically, mentally, or spiritually.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e42',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Missing Home',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'When I lived abroad, I felt very ___.',
          options: ['homesick', 'homework', 'homeless', 'homemade'],
          correctAnswer: 'homesick',
          explanation: '"Homesick" means feeling unhappy because you are away from home.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e43',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Already Position',
      instructions: 'Fill in the blank with "already".',
      questions: [
        {
          id: 'q1',
          text: 'We have ___ (already) seen this film twice.',
          correctAnswer: 'already',
          explanation: '"Already" usually goes between the auxiliary "have" and the past participle.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e44',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Feelings Matching',
      instructions: 'Match the feeling with the situation.',
      pairs: [
        { id: '1', left: 'Relieved', right: 'When a bad situation ends' },
        { id: '2', left: 'Embarrassed', right: 'When you feel stupid in public' },
        { id: '3', left: 'Proud', right: 'When you achieve something great' },
        { id: '4', left: 'Disappointed', right: 'When something is not as good as you hoped' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e45',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Nostalgic Sentence',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Old', 'songs', 'always', 'make', 'me', 'feel', 'nostalgic', '.'],
          correctSentence: 'Old songs always make me feel nostalgic.',
          translation: 'Las canciones viejas siempre me hacen sentir nostálgico.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e46',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Past Simple Finished Time',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ my best friend ten years ago.',
          options: ['have met', 'met', 'meet', 'was meeting'],
          correctAnswer: 'met',
          explanation: '"Ten years ago" indicates a finished time, so we use Past Simple.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e47',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Negative Experience 2',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: 'I have ___ (nunca) been to South America.',
          correctAnswer: 'never',
          explanation: 'Use "never" for negative experiences.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e48',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Outcome Word',
      instructions: 'Fill in the missing word.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ (resultado) of the surgery was very positive.',
          correctAnswer: 'outcome',
          explanation: '"Outcome" means result.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e49',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Feeling Relieved',
      instructions: 'Read this out loud.',
      questions: [
        {
          id: 'q1',
          text: 'I was so relieved when I finally passed the exam.',
          correctAnswer: 'I was so relieved when I finally passed the exam',
          explanation: 'Enfatiza "relieved" /rɪˈliːvd/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e50',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Childhood Habit',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'dad', 'used', 'to', 'read', 'me', 'stories', 'every', 'night', '.'],
          correctSentence: 'My dad used to read me stories every night.',
          translation: 'Mi papá solía leerme cuentos todas las noches.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Travel Highlights & Anecdotes (51-60) ---
  {
    id: 'b1-u2-e51',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'To set off',
          back: 'Partir / Salir de viaje',
          example: 'We set off for the airport at 5 AM.',
          pronunciation: '/tuː set ɒf/',
          explanation: 'To start a journey.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e52',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Delay',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'The plane ___ two hours late because of the fog.',
          options: ['took off', 'took in', 'took up', 'took away'],
          correctAnswer: 'took off',
          explanation: '"Take off" is when a plane leaves the ground and starts to fly.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e53',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Challenges',
      instructions: 'Match the verb with the problem.',
      pairs: [
        { id: '1', left: 'Get', right: 'stuck in traffic' },
        { id: '2', left: 'Run out', right: 'of petrol' },
        { id: '3', left: 'Break', right: 'down on the highway' },
        { id: '4', left: 'Lose', right: 'your passport' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e54',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Past Interruption',
      instructions: 'Complete with Past Simple or Past Continuous.',
      questions: [
        {
          id: 'q1',
          text: 'While we ___ (drive) to the coast, the car ___ (break) down.',
          correctAnswer: 'were driving / broke',
          explanation: 'Acción larga interrumpida por una acción corta.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e55',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Missing a Flight',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'missed', 'the', 'flight', 'because', 'we', 'were', 'late', '.'],
          correctSentence: 'We missed the flight because we were late.',
          translation: 'Perdimos el vuelo porque llegamos tarde.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e56',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Highlight',
          back: 'Lo más destacado / Punto culminante',
          example: 'The visit to the ancient temple was the highlight of our trip.',
          pronunciation: '/ˈhaɪ.laɪt/',
          explanation: 'The most exciting or important part of something.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e57',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Unexpected Event',
      instructions: 'Choose the best word for the context.',
      questions: [
        {
          id: 'q1',
          question: 'We ___ ran into an old friend while we were in Rome.',
          options: ['unexpectedly', 'usually', 'rarely', 'patiently'],
          correctAnswer: 'unexpectedly',
          explanation: '"Unexpectedly" means in a way that was not expected.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e58',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Travel Story',
      instructions: 'Fill in the blanks with the correct past form.',
      questions: [
        {
          id: 'q1',
          text: 'When the train ___ (arrive), I ___ (wait) on the platform.',
          correctAnswer: 'arrived / was waiting',
          explanation: 'Acción puntual que ocurre durante una acción en curso.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e59',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Phrasals 2',
      instructions: 'Match the phrasal verb with its meaning.',
      pairs: [
        { id: '1', left: 'Check in', right: 'Register at a hotel/airport' },
        { id: '2', left: 'Check out', right: 'Leave a hotel after paying' },
        { id: '3', left: 'Get in', right: 'Arrive (train/plane)' },
        { id: '4', left: 'Get away', right: 'Go on holiday' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e60',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Travel Disaster',
      instructions: 'Say this sentence out loud.',
      questions: [
        {
          id: 'q1',
          text: 'My luggage was lost, so I had to buy new clothes.',
          correctAnswer: 'My luggage was lost, so I had to buy new clothes',
          explanation: 'Pronuncia "luggage" como /ˈlʌɡ.ɪdʒ/.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Recent Experiences & "Just/Already/Yet" (61-70) ---
  {
    id: 'b1-u2-e61',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Already Position 2',
      instructions: 'Select the correct sentence.',
      questions: [
        {
          id: 'q1',
          question: 'Which sentence is correct?',
          options: [
            'I have already seen that film.',
            'I already have seen that film.',
            'I have seen already that film.',
            'Already I have seen that film.'
          ],
          correctAnswer: 0,
          explanation: '"Already" va entre el auxiliar y el participio.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e62',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Yet in Questions',
      instructions: 'Complete the question.',
      questions: [
        {
          id: 'q1',
          text: 'Have you finished your lunch ___ (ya/todavía)?',
          correctAnswer: 'yet',
          explanation: '"Yet" se usa al final de preguntas.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e63',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Just Received',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'have', 'just', 'received', 'your', 'email', '.'],
          correctSentence: 'I have just received your email.',
          translation: 'Acabo de recibir tu correo electrónico.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e64',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Still vs Yet',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ haven\'t finished the report.',
          options: ['still', 'yet', 'already', 'just'],
          correctAnswer: 'still',
          explanation: '"Still" enfatiza que algo continúa sin terminar, situándose antes del verbo negativo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e65',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Present Perfect Experience',
      instructions: 'Fill in with the correct form of the verb.',
      questions: [
        {
          id: 'q1',
          text: 'This is the first time I ___ (be) to this restaurant.',
          correctAnswer: 'have been',
          explanation: 'Con "This is the first time", usamos el Present Perfect.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e66',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'So far',
          back: 'Hasta ahora',
          example: 'We have visited three cities so far.',
          pronunciation: '/səʊ fɑːr/',
          explanation: 'Until now.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e67',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'How Long Question',
      instructions: 'Choose the correct question.',
      questions: [
        {
          id: 'q1',
          question: '___ have you known your best friend?',
          options: ['How long', 'How many time', 'How much time', 'How long time'],
          correctAnswer: 'How long',
          explanation: 'Usamos "How long" para preguntar por la duración.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e68',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Time Expressions',
      instructions: 'Match the expression with its use.',
      pairs: [
        { id: '1', left: 'Since', right: 'A point in time (1990)' },
        { id: '2', left: 'For', right: 'A duration (3 years)' },
        { id: '3', left: 'Ago', right: 'Back from now (with Past Simple)' },
        { id: '4', left: 'Already', right: 'Sooner than expected' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e69',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Specific vs General Time',
      instructions: 'Complete with Present Perfect or Past Simple.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (live) in Madrid for two years, and then I ___ (move) to London.',
          correctAnswer: 'lived / moved',
          explanation: 'Si el periodo de tiempo terminó por completo, usamos Past Simple.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e70',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Unfinished Duration',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'I have been a teacher for over ten years now.',
          correctAnswer: 'I have been a teacher for over ten years now',
          explanation: 'Pronuncia "teacher" /ˈtiː.tʃər/ y "years" /jɪəz/.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Childhood vs Now (Used to) (71-80) ---
  {
    id: 'b1-u2-e71',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Primary school',
          back: 'Escuela primaria',
          example: 'I have many good memories from primary school.',
          pronunciation: '/ˈpraɪ.mə.ri skuːl/',
          explanation: 'A school for children between 5 and 11 years old.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e72',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Used to State',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ very shy when I was younger.',
          options: ['used to be', 'used be', 'am use to', 'used to being'],
          correctAnswer: 'used to be',
          explanation: '"Used to" se usa con verbos de estado como "be".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e73',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Used to Question',
      instructions: 'Complete the question.',
      questions: [
        {
          id: 'q1',
          text: '___ you use to have long hair? (pregunta pasado)',
          correctAnswer: 'Did',
          explanation: 'Preguntas con "used to" usan el auxiliar "Did".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e74',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Childhood Habit 2',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'used', 'to', 'go', 'to', 'the', 'beach', 'every', 'summer', '.'],
          correctSentence: 'We used to go to the beach every summer.',
          translation: 'Solíamos ir a la playa cada verano.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e75',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Used to vs Would',
      instructions: 'Which one is NOT possible?',
      questions: [
        {
          id: 'q1',
          question: 'Which sentence is gramatically INCORRECT?',
          options: [
            'I would have a lot of toys.',
            'I used to have a lot of toys.',
            'I would play with my toys.',
            'I used to play with my toys.'
          ],
          correctAnswer: 0,
          explanation: '"Would" no se puede usar con verbos de estado (como "have" o "be") para hábitos pasados.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e76',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Childhood Activities',
      instructions: 'Match the verb with the activity.',
      pairs: [
        { id: '1', left: 'Play', right: 'hide and seek' },
        { id: '2', left: 'Climb', right: 'trees' },
        { id: '3', left: 'Read', right: 'comic books' },
        { id: '4', left: 'Watch', right: 'cartoons' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e77',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Past Contrast',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (not/like) coffee, but now I love it.',
          correctAnswer: 'didn\'t use to like',
          explanation: 'Para contrastar un hábito pasado con el presente.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e78',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Nostalgic',
          back: 'Nostálgico',
          example: 'I feel nostalgic when I look at old photos.',
          pronunciation: '/nɒsˈtæl.dʒɪk/',
          explanation: 'Feeling happy and also slightly sad when you think about things that happened in the past.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e79',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Memory Type',
      instructions: 'Choose the best adjective.',
      questions: [
        {
          id: 'q1',
          question: 'That was an ___ experience that I will remember forever.',
          options: ['unforgettable', 'unknown', 'untidy', 'unusual'],
          correctAnswer: 'unforgettable',
          explanation: '"Unforgettable" means impossible to forget.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e80',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Past Habit',
      instructions: 'Say this naturally.',
      questions: [
        {
          id: 'q1',
          text: 'I used to play hide and seek with my friends every afternoon.',
          correctAnswer: 'I used to play hide and seek with my friends every afternoon',
          explanation: 'Une "used" y "to" como si fuera una sola palabra /juːstə/.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: Describing Memorable Places (81-90) ---
  {
    id: 'b1-u2-e81',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Scenery',
          back: 'Paisaje / Escenario natural',
          example: 'The scenery in the mountains was breathtaking.',
          pronunciation: '/ˈsiː.nər.i/',
          explanation: 'The general appearance of the natural environment.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e82',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Place Description',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'The city was very ___, with people everywhere.',
          options: ['crowded', 'empty', 'silent', 'lonely'],
          correctAnswer: 'crowded',
          explanation: '"Crowded" means full of people.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e83',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Present Perfect Experience 2',
      instructions: 'Complete with "ever".',
      questions: [
        {
          id: 'q1',
          text: 'Have you ___ (alguna vez) been to the Grand Canyon?',
          correctAnswer: 'ever',
          explanation: 'Usamos "ever" en preguntas sobre experiencias.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e84',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Describing Places',
      instructions: 'Match the adjective with its opposite.',
      pairs: [
        { id: '1', left: 'Lively', right: 'Quiet' },
        { id: '2', left: 'Modern', right: 'Ancient' },
        { id: '3', left: 'Clean', right: 'Polluted' },
        { id: '4', left: 'Cheap', right: 'Expensive' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e85',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Memorable Trip',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'was', 'one', 'of', 'the', 'best', 'trips', 'of', 'my', 'life', '.'],
          correctSentence: 'It was one of the best trips of my life.',
          translation: 'Fue uno de los mejores viajes de mi vida.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e86',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Tourist Activity',
      instructions: 'Choose the correct verb.',
      questions: [
        {
          id: 'q1',
          question: 'We spent the whole day ___ in the city centre.',
          options: ['sightseeing', 'viewing', 'looking', 'watching'],
          correctAnswer: 'sightseeing',
          explanation: '"Sightseeing" is the activity of visiting interesting places as a tourist.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e87',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Environment',
      instructions: 'Fill in the missing word.',
      questions: [
        {
          id: 'q1',
          text: 'The air in the countryside is very ___ (fresco).',
          correctAnswer: 'fresh',
          explanation: '"Fresh" means clean and cool.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e88',
    type: 'flashcard',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Landmark',
          back: 'Punto de referencia / Lugar emblemático',
          example: 'The Eiffel Tower is a famous landmark.',
          pronunciation: '/ˈlænd.mɑːk/',
          explanation: 'A building or place that is easily recognized.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e89',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Past Simple vs Present Perfect 2',
      instructions: 'Which one is correct?',
      questions: [
        {
          id: 'q1',
          question: 'I ___ to Japan twice already.',
          options: ['have been', 'was', 'went', 'have gone'],
          correctAnswer: 'have been',
          explanation: 'Usamos Present Perfect para experiencias de vida sin un tiempo específico.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e90',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Scenic View',
      instructions: 'Read this sentence.',
      questions: [
        {
          id: 'q1',
          text: 'The view from the top of the cliff was absolutely amazing.',
          correctAnswer: 'The view from the top of the cliff was absolutely amazing',
          explanation: 'Pronuncia "absolutely" /ˌæb.səˈluːt.li/ con énfasis.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Mixed Review & Production (91-100) ---
  {
    id: 'b1-u2-e91',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Review: Prepositions',
      instructions: 'Choose the correct preposition.',
      questions: [
        {
          id: 'q1',
          question: 'I have been waiting for you ___ 8 o\'clock.',
          options: ['since', 'for', 'at', 'during'],
          correctAnswer: 'since',
          explanation: '"Since" con una hora específica.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e92',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Review: Negative Past',
      instructions: 'Complete with the negative past.',
      questions: [
        {
          id: 'q1',
          text: 'They ___ (not / go) to the party last night.',
          correctAnswer: 'didn\'t go',
          explanation: 'Pasado simple negativo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e93',
    type: 'matching',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Verb Phrases',
      instructions: 'Match the verb with its phrase.',
      pairs: [
        { id: '1', left: 'Make', right: 'a decision' },
        { id: '2', left: 'Take', right: 'a photograph' },
        { id: '3', left: 'Have', right: 'an argument' },
        { id: '4', left: 'Keep', right: 'a secret' }
      ]
    } as any
  },
  {
    id: 'b1-u2-e94',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Experience with Still',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'still', 'haven\'t', 'decided', 'where', 'to', 'go', '.'],
          correctSentence: 'I still haven\'t decided where to go.',
          translation: 'Todavía no he decidido a dónde ir.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e95',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Feeling Check',
      instructions: 'How would you feel?',
      questions: [
        {
          id: 'q1',
          question: 'How would you feel if you won the lottery?',
          options: ['overjoyed', 'disappointed', 'embarrassed', 'bored'],
          correctAnswer: 'overjoyed',
          explanation: '"Overjoyed" means extremely happy.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e96',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Mixed Past 2',
      instructions: 'Complete with the correct form.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (be) in this city for three days now.',
          correctAnswer: 'have been',
          explanation: 'Acción que continúa en el presente.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e97',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Grammar',
    difficulty: 'hard',
    content: {
      title: 'Long Wait',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'long', 'have', 'you', 'been', 'waiting', 'here', '?'],
          correctSentence: 'How long have you been waiting here?',
          translation: '¿Cuánto tiempo llevas esperando aquí?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e98',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Life Lesson',
      instructions: 'Say this with conviction.',
      questions: [
        {
          id: 'q1',
          text: 'The best way to learn is by making mistakes and learning from them.',
          correctAnswer: 'The best way to learn is by making mistakes and learning from them',
          explanation: 'Fluidez y énfasis en "mistakes" /mɪˈsteɪks/.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e99',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Memorable Experience',
      instructions: 'Read this sentence clearly.',
      questions: [
        {
          id: 'q1',
          text: 'I will always cherish the memories of my childhood holidays.',
          correctAnswer: 'I will always cherish the memories of my childhood holidays',
          explanation: 'Pronuncia "cherish" /ˈtʃer.ɪʃ/ con suavidad.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u2-e100',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Experiences & Memories',
    topicName: 'Production',
    difficulty: 'hard',
    content: {
      title: 'Final Reflection',
      instructions: 'Read out loud to complete the unit.',
      questions: [
        {
          id: 'q1',
          text: 'Every experience we have shapes the person we are today.',
          correctAnswer: 'Every experience we have shapes the person we are today',
          explanation: 'Fluidez y entonación descendente al final.'
        }
      ]
    } as any
  }
];
