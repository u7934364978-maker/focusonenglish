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
          front: 'Bucket list',
          back: 'Lista de cosas por hacer antes de morir',
          example: 'Skydiving is at the top of my bucket list.',
          pronunciation: '/ˈbʌk.ɪt lɪst/',
          explanation: 'A list of things you want to do before you die.'
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
        { id: '1', left: 'Missed', right: 'the train' },
        { id: '2', left: 'Caught', right: 'the bus' },
        { id: '3', left: 'Boarded', right: 'the plane' },
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

  // --- SUB-TOPIC 5: Regrets & Feelings (41-50) ---
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
          front: 'Regret',
          back: 'Arrepentimiento / Arrepentirse',
          example: 'I have no regrets about my decision.',
          pronunciation: '/rɪˈɡret/',
          explanation: 'A feeling of sadness about something sad or wrong or about a mistake.'
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
  }
];
