import { Exercise } from '@/lib/exercise-generator';

export const UNIT_6_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Cultural Traditions & Customs (1-10) ---
  {
    id: 'b1-u6-e1',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Custom',
          back: 'Costumbre',
          example: 'It is a local custom to remove your shoes before entering a home.',
          pronunciation: '/ˈkʌs.təm/',
          explanation: 'Una forma tradicional de hacer algo que es específica de una sociedad o lugar.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e2',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Heritage',
          back: 'Patrimonio / Herencia cultural',
          example: 'The city is famous for its rich architectural heritage.',
          pronunciation: '/ˈher.ɪ.tɪdʒ/',
          explanation: 'Características, tradiciones o edificios que se han transmitido de generación en generación.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e3',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tradition',
          back: 'Tradición',
          example: 'Celebrating the summer solstice is an ancient tradition in this region.',
          pronunciation: '/trəˈdɪʃ.ən/',
          explanation: 'La transmisión de costumbres o creencias de generación en generación.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e4',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Values',
          back: 'Valores',
          example: 'Respect for elders is one of the core values in their culture.',
          pronunciation: '/ˈvæl.juːz/',
          explanation: 'Principios o estándares de comportamiento que una sociedad considera importantes.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e5',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Belief',
          back: 'Creencia',
          example: 'Their religious beliefs influence their daily life and decisions.',
          pronunciation: '/bɪˈliːf/',
          explanation: 'La aceptación de que algo existe o es verdadero, especialmente sin pruebas.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e6',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      title: 'Local Traditions',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'A specific way of acting that is traditional for a group of people is a __________.',
          options: ["custom", "heritage", "believing", "value"],
          correctAnswer: 0,
          explanation: 'A custom is a traditional way of behaving in a specific society.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e7',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      title: 'Cultural Assets',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'Historical buildings and traditions passed down are part of our __________.',
          options: ["heritage", "customs", "beliefs", "values"],
          correctAnswer: 0,
          explanation: 'Heritage refers to the historical and cultural assets of a group.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e8',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      title: 'Deep Convictions',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Something you accept as true, often related to religion, is a __________.',
          options: ["belief", "tradition", "custom", "heritage"],
          correctAnswer: 0,
          explanation: 'A belief is a conviction that something is true.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e9',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      title: 'Core Principles',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'The principles that help a society decide what is right or wrong are its __________.',
          options: ["values", "traditions", "customs", "beliefs"],
          correctAnswer: 0,
          explanation: 'Values are the principles or standards of behavior of a society.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e10',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      title: 'Generational Transmission',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'The passing of customs or beliefs from generation to generation is a __________.',
          options: ["tradition", "heritage", "custom", "value"],
          correctAnswer: 0,
          explanation: 'A tradition is the transmission of customs or beliefs over time.'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Indirect Questions (11-25) ---
  {
    id: 'b1-u6-e11',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Polite Inquiries',
      instructions: 'Choose the correct indirect question structure.',
      questions: [
        {
          id: 'q1',
          question: 'Could you tell me where __________?',
          options: ["the museum is", "is the museum", "does the museum is", "the museum"],
          correctAnswer: 0,
          explanation: 'In indirect questions, we use the statement word order (subject + verb).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e12',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Opening Times',
      instructions: 'Select the correct indirect question.',
      questions: [
        {
          id: 'q1',
          question: 'Do you know what time __________?',
          options: ["the shop opens", "does the shop open", "is the shop open", "the shop open"],
          correctAnswer: 0,
          explanation: 'Indirect questions do not use "do/does/did" in the embedded question.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e13',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Asking for Directions',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'I wonder how __________ to the city center.',
          options: ["I can get", "can I get", "do I get", "I get"],
          correctAnswer: 0,
          explanation: 'Word order is subject ("I") + auxiliary/verb ("can get").'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e14',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Yes/No Indirect Questions',
      instructions: 'Choose the correct word to link the clauses.',
      questions: [
        {
          id: 'q1',
          question: 'Can you tell me __________ there is a pharmacy nearby?',
          options: ["if", "where", "what", "when"],
          correctAnswer: 0,
          explanation: 'We use "if" or "whether" for yes/no questions in indirect structures.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e15',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Train Departure',
      instructions: 'Select the correct indirect question.',
      questions: [
        {
          id: 'q1',
          question: 'Do you happen to know when __________?',
          options: ["the next train leaves", "does the next train leave", "is the next train leaving", "the next train will leave"],
          correctAnswer: 0,
          explanation: 'Subject + verb order, and we keep the original tense (Present Simple for schedules).'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e16',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Indirect Practice 1',
      instructions: "Rewrite: 'Where is the station?' -> 'Do you know...'",
      questions: [
        {
          id: 'q1',
          text: "Do you know where the station ___?",
          correctAnswer: "is",
          explanation: "In indirect questions, the verb 'is' goes after the subject 'the station'."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e17',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Indirect Practice 2',
      instructions: "Rewrite: 'What time does the tour start?' -> 'Could you tell me...'",
      questions: [
        {
          id: 'q1',
          text: "Could you tell me what time the tour ___?",
          correctAnswer: "starts",
          explanation: "Remove 'does' and conjugate the main verb 'starts'."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e18',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Indirect Practice 3',
      instructions: "Rewrite: 'Is the bus free?' -> 'Do you know if...'",
      questions: [
        {
          id: 'q1',
          text: "Do you know if the bus ___ free?",
          correctAnswer: "is",
          explanation: "Subject + verb order after 'if'."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e19',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Indirect Practice 4',
      instructions: "Rewrite: 'Why are they late?' -> 'I wonder...'",
      questions: [
        {
          id: 'q1',
          text: "I wonder why they ___ late.",
          correctAnswer: "are",
          explanation: "Subject 'they' + verb 'are'."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e20',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Indirect Practice 5',
      instructions: "Rewrite: 'Did it rain yesterday?' -> 'Can you tell me if...'",
      questions: [
        {
          id: 'q1',
          text: "Can you tell me if it ___ yesterday?",
          correctAnswer: "rained",
          explanation: "Remove 'did' and use the past form 'rained'."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e21',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Building Indirect Questions 1',
      instructions: 'Order the words to form a polite question.',
      sentences: [
        {
          id: 's1',
          words: ['Could', 'you', 'tell', 'me', 'what', 'time', 'it', 'is', '?'],
          correctSentence: 'Could you tell me what time it is?',
          translation: '¿Podrías decirme qué hora es?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e22',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Building Indirect Questions 2',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'know', 'where', 'the', 'nearest', 'ATM', 'is', '?'],
          correctSentence: 'Do you know where the nearest ATM is?',
          translation: '¿Sabes dónde está el cajero más cercano?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e23',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Building Indirect Questions 3',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'wonder', 'if', 'the', 'museum', 'is', 'open', 'today', '.'],
          correctSentence: 'I wonder if the museum is open today.',
          translation: 'Me pregunto si el museo está abierto hoy.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e24',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Building Indirect Questions 4',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Can', 'you', 'tell', 'me', 'how', 'long', 'the', 'flight', 'is', '?'],
          correctSentence: 'Can you tell me how long the flight is?',
          translation: '¿Puedes decirme cuánto dura el vuelo?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e25',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Building Indirect Questions 5',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'happen', 'to', 'know', 'who', 'this', 'statue', 'is', '?'],
          correctSentence: 'Do you happen to know who this statue is?',
          translation: '¿Por casualidad sabes de quién es esta estatua?',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Travel Experiences & Cultural Etiquette (26-35) ---
  {
    id: 'b1-u6-e26',
    type: 'reading-comprehension',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Reading',
    difficulty: 'medium',
    content: {
      title: 'Visiting Japan: Etiquette',
      text: `When traveling to Japan, it's important to understand certain local customs. For example, bowing is a common way to greet people. The depth of the bow indicates the level of respect.

Also, it's considered impolite to eat while walking in public. Most people find a quiet spot or stay at the stall where they bought the food. Another key custom is removing shoes before entering someone's house or certain traditional restaurants.

If you follow these simple rules, you will show respect for their rich cultural heritage and values.`,
      questions: [
        {
          id: 'q1',
          question: 'What is a common way to greet people in Japan?',
          options: ["Shaking hands", "Bowing", "Hugging", "Waving"],
          correctAnswer: 1,
          explanation: 'The text mentions bowing as a common way to greet people.'
        },
        {
          id: 'q2',
          question: 'Where should you remove your shoes?',
          options: ["At the airport", "In a park", "Before entering a house", "While walking"],
          correctAnswer: 2,
          explanation: 'It is custom to remove shoes before entering a house or traditional restaurant.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e27',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Etiquette',
          back: 'Etiqueta / Normas de comportamiento',
          example: 'Learning about local etiquette can help you avoid awkward situations.',
          pronunciation: '/ˈet.ɪ.ket/',
          explanation: 'Las reglas convencionales de comportamiento social educado.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e28',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Polite Behavior',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'The set of rules for polite behavior in a society is called __________.',
          options: ["etiquette", "custom", "heritage", "value"],
          correctAnswer: 0,
          explanation: 'Etiquette specifically refers to rules of polite behavior.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e29',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Polite Greeting',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: "In many Asian cultures, people ___ (se inclinan) to show respect.",
          correctAnswer: "bow",
          explanation: "'Bow' is the action of lowering the head or body as a sign of respect."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e30',
    type: 'matching',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Customs',
      instructions: 'Match the custom with the country (based on general knowledge/text).',
      pairs: [
        { id: '1', left: 'Bowing', right: 'Japan' },
        { id: '2', left: 'Tipping 20%', right: 'USA' },
        { id: '3', left: 'Siesta', right: 'Spain' },
        { id: '4', left: 'Removing shoes', right: 'Many Asian countries' }
      ]
    } as any
  },
  {
    id: 'b1-u6-e31',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Cultural Awareness',
      instructions: 'Select the best phrase.',
      questions: [
        {
          id: 'q1',
          question: 'Being aware of other people\'s feelings and customs is being __________.',
          options: ["culturally sensitive", "impolite", "ignorant", "uninterested"],
          correctAnswer: 0,
          explanation: 'Being culturally sensitive means respecting and understanding other cultures.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e32',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Impolite',
          back: 'Maleducado / Descortés',
          example: 'It is considered impolite to interrupt someone while they are speaking.',
          pronunciation: '/ˌɪm.pəlˈaɪt/',
          explanation: 'No ser educado; comportarse de una manera que molesta u ofende a los demás.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e33',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Opposite of Polite',
      instructions: 'Choose the correct antonym.',
      questions: [
        {
          id: 'q1',
          question: 'What is the opposite of "polite"?',
          options: ["impolite", "sensitive", "traditional", "valuable"],
          correctAnswer: 0,
          explanation: '"Impolite" is the direct antonym of "polite".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e34',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Social Rules',
      instructions: 'Fill in the blank.',
      questions: [
        {
          id: 'q1',
          text: "Social ___ (normas) vary greatly from one country to another.",
          correctAnswer: "norms",
          explanation: "Norms are standard patterns of social behavior."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e35',
    type: 'speaking-analysis',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Production',
    difficulty: 'medium',
    content: {
      title: 'Respecting Cultures',
      instructions: 'Say this clearly.',
      questions: [
        {
          id: 'q1',
          text: 'We should always respect the traditions and heritage of the places we visit.',
          correctAnswer: 'We should always respect the traditions and heritage of the places we visit',
          explanation: 'Enfatiza "respect", "traditions" y "heritage".'
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Phrasal Verbs for Travel (36-45) ---
  {
    id: 'b1-u6-e36',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To set off',
          back: 'Partir / Salir de viaje',
          example: 'We set off early in the morning to avoid the traffic.',
          pronunciation: '/tuː set ɒf/',
          explanation: 'Comenzar un viaje.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e37',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To get in',
          back: 'Llegar (vuelo, tren, etc.)',
          example: 'What time does your flight get in?',
          pronunciation: '/tuː ɡet ɪn/',
          explanation: 'Llegar a un lugar, especialmente cuando se viaja en transporte público.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e38',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To check in',
          back: 'Registrarse',
          example: 'You need to check in at least two hours before departure.',
          pronunciation: '/tuː tʃek ɪn/',
          explanation: 'Registrar tu llegada a un hotel o aeropuerto.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e39',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To hold up',
          back: 'Retrasar',
          example: 'Sorry I\'m late, I was held up in traffic.',
          pronunciation: '/tuː həʊld ʌp/',
          explanation: 'Retrasar a alguien o algo.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e40',
    type: 'flashcard',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'To look around',
          back: 'Explorar / Echar un vistazo',
          example: 'We decided to look around the city center before lunch.',
          pronunciation: '/tuː lʊk əˈraʊnd/',
          explanation: 'Visitar un lugar y ver lo que hay en él.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e41',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Phrasal Verbs 1',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'We should __________ for the airport at 5 AM.',
          options: ["set off", "get in", "check in", "hold up"],
          correctAnswer: 0,
          explanation: "'Set off' means to start a journey."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e42',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Phrasal Verbs 2',
      instructions: 'Select the best option.',
      questions: [
        {
          id: 'q1',
          question: 'I can\'t wait to __________ the local markets.',
          options: ["look around", "get in", "hold up", "check in"],
          correctAnswer: 0,
          explanation: "'Look around' means to explore a place."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e43',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Delayed Trip',
      instructions: 'Fill in the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          text: "The heavy snow ___ (retrasó) our flight for three hours.",
          correctAnswer: "held up",
          explanation: "'Held up' means delayed."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e44',
    type: 'matching',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Travel Phrasals Matching',
      instructions: 'Match the phrasal verb with its meaning.',
      pairs: [
        { id: '1', left: 'Check in', right: 'Register at a hotel' },
        { id: '2', left: 'Set off', right: 'Start a journey' },
        { id: '3', left: 'Get in', right: 'Arrive (flight/train)' },
        { id: '4', left: 'Look around', right: 'Explore a place' }
      ]
    } as any
  },
  {
    id: 'b1-u6-e45',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Vocabulary',
    difficulty: 'medium',
    content: {
      title: 'Arriving Late',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'time', 'does', 'your', 'train', 'get', 'in', '?'],
          correctSentence: 'What time does your train get in?',
          translation: '¿A qué hora llega tu tren?',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Comparison Review (46-50) ---
  {
    id: 'b1-u6-e46',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Comparing Cultures',
      instructions: 'Choose the correct comparative form.',
      questions: [
        {
          id: 'q1',
          question: 'This tradition is __________ than the one in my country.',
          options: ["more ancient", "ancienter", "most ancient", "more ancienter"],
          correctAnswer: 0,
          explanation: 'We use "more" + long adjective for comparatives.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e47',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Superlative Sites',
      instructions: 'Select the correct superlative.',
      questions: [
        {
          id: 'q1',
          question: 'The Sagrada Familia is the __________ building in Barcelona.',
          options: ["most famous", "famoust", "more famous", "most famously"],
          correctAnswer: 0,
          explanation: 'Superlative of a long adjective: "the most" + adjective.'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e48',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Equality Comparison',
      instructions: 'Use "as...as".',
      questions: [
        {
          id: 'q1',
          text: "Rome is ___ beautiful ___ Florence. (as/as)",
          correctAnswer: "as",
          explanation: "We use 'as + adjective + as' to show equality."
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e49',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'Irregular Comparison',
      instructions: 'Choose the correct form of "good".',
      questions: [
        {
          id: 'q1',
          question: 'The local food here is much __________ than I expected.',
          options: ["better", "gooder", "best", "more better"],
          correctAnswer: 0,
          explanation: '"Better" is the irregular comparative of "good".'
        }
      ]
    } as any
  },
  {
    id: 'b1-u6-e50',
    type: 'sentence-building',
    level: 'B1',
    topic: 'Culture & Travel',
    topicName: 'Grammar',
    difficulty: 'medium',
    content: {
      title: 'The Best Trip',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'is', 'the', 'best', 'trip', 'I', 'have', 'ever', 'had', '.'],
          correctSentence: 'This is the best trip I have ever had.',
          translation: 'Este es el mejor viaje que he tenido jamás.',
          points: 10
        }
      ]
    } as any
  }
];
