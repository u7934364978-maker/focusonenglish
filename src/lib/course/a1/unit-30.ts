import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 30: The Final Step
 */

export const UNIT_30_EXERCISES: Exercise[] = [
  // --- BONUS CHALLENGE: ADVANCED MIX ---
  
  // 1. Challenging Mixed Grammar
  {
    id: 'a1-u30-1',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'I am better than him.', right: 'Soy mejor que él.' },
        { left: 'She was going to call.', right: 'Ella iba a llamar.' },
        { left: 'Can you help me now?', right: '¿Puedes ayudarme ahora?' },
        { left: 'They were not there.', right: 'Ellos no estaban allí.' },
        { left: 'It is the best day!', right: '¡Es el mejor día!' }
      ],
      explanation: 'Un reto que mezcla comparativos, pasado del verbo to be y planes futuros.'
    }
  },
  {
    id: 'a1-u30-2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Last year I _______ to Italy, but next year I _______ to Japan.',
          options: [
            'go / am going',
            'went / am going',
            'went / go',
            'go / went'
          ],
          correctAnswer: 'went / am going',
          explanation: 'Usamos el pasado simple ("went") para el año pasado y "am going" para planes futuros.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'This book is _______ (interesting) than the movie.',
          correctAnswers: ['more interesting'],
          explanation: 'Para adjetivos largos usamos "more" + adjetivo para comparar.'
        }
      ]
    }
  },

  // 2. Natural Conversations
  {
    id: 'a1-u30-4',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'What are you going to do this weekend?',
          spanish: '¿Qué vas a hacer este fin de semana?',
          words: ['What', 'are', 'you', 'going', 'to', 'do', 'this', 'weekend?'],
          explanation: 'Estructura interrogativa común para preguntar por planes futuros.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'I would like to order a large pizza, please.',
          spanish: 'Me gustaría pedir una pizza grande, por favor.',
          explanation: 'Practica una frase cortés y natural para pedir comida.'
        }
      ]
    }
  },

  // 3. Phrasal Verbs & Expressions
  {
    id: 'a1-u30-6',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Wake up', right: 'Despertarse' },
        { left: 'Get up', right: 'Levantarse' },
        { left: 'Sit down', right: 'Sentarse' },
        { left: 'Stand up', right: 'Ponerse de pie' },
        { left: 'Turn on', right: 'Encender' }
      ],
      explanation: 'Phrasal verbs básicos que todo estudiante de nivel A1 debe conocer.'
    }
  },
  {
    id: 'a1-u30-7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Please _______ the lights before you leave.',
          options: ['turn on', 'turn off', 'get up', 'sit down'],
          correctAnswer: 'turn off',
          explanation: 'Apagamos ("turn off") las luces antes de salir.'
        }
      ]
    }
  },

  // 4. Time & Frequency Mix
  {
    id: 'a1-u30-8',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'I _______ (never / be) to New York before.',
          correctAnswers: ['have never been'],
          explanation: 'Aunque es un reto, el uso de "have never been" es una frase hecha muy útil.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-9',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'He usually plays tennis on Friday afternoons.',
          spanish: 'Él suele jugar al tenis los viernes por la tarde.',
          words: ['He', 'usually', 'plays', 'tennis', 'on', 'Friday', 'afternoons.'],
          explanation: 'Orden correcto: Sujeto + Adverbio + Verbo + Complementos.'
        }
      ]
    }
  },

  // 5. Advanced Vocabulary
  {
    id: 'a1-u30-10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      items: [
        { front: 'Delicious', back: 'Delicioso / Muy rico' },
        { front: 'Expensive', back: 'Caro' },
        { front: 'Crowded', back: 'Lleno de gente' },
        { front: 'Comfortable', back: 'Cómodo' }
      ],
      explanation: 'Adjetivos más avanzados para enriquecer tus descripciones.'
    }
  },

  // Reach 50 exercises with variety
  {
    id: 'a1-u30-11',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Beautiful city', right: 'Ciudad hermosa' },
        { left: 'Modern building', right: 'Edificio moderno' },
        { left: 'Ancient ruins', right: 'Ruinas antiguas' },
        { left: 'Friendly people', right: 'Gente amable' },
        { left: 'Local food', right: 'Comida local' }
      ],
      explanation: 'Combinaciones de adjetivos y sustantivos para describir lugares.'
    }
  },
  {
    id: 'a1-u30-12',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'The weather in London is _______ than in Madrid.',
          options: ['wetter', 'wet', 'more wet', 'wettest'],
          correctAnswer: 'wetter',
          explanation: '"Wetter" es el comparativo irregular de "wet".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'I can speak Spanish, but I _______ (not / speak) French.',
          correctAnswers: ['cannot speak', "can't speak"],
          explanation: 'Expresando falta de habilidad con "cannot".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'There are some apples in the fridge.',
          spanish: 'Hay algunas manzanas en la nevera.',
          words: ['There', 'are', 'some', 'apples', 'in', 'the', 'fridge.'],
          explanation: 'Uso de "there are" y "some" para plurales contables.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Where were you born?',
          spanish: '¿Dónde naciste?',
          explanation: 'Una pregunta fundamental que usa el pasado del verbo to be.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-16',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Always', right: 'Siempre' },
        { left: 'Sometimes', right: 'A veces' },
        { left: 'Hardly ever', right: 'Casi nunca' },
        { left: 'Rarely', right: 'Raramente' },
        { left: 'Never', right: 'Nunca' }
      ],
      explanation: 'Adverbios de frecuencia desde lo más habitual a lo menos.'
    }
  },
  {
    id: 'a1-u30-17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'How _______ does this shirt cost?',
          options: ['many', 'much', 'price', 'any'],
          correctAnswer: 'much',
          explanation: 'Preguntamos el precio con "How much".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'She _______ (have) a big dog and two cats.',
          correctAnswers: ['has'],
          explanation: 'Tercera persona del singular del verbo "have" es "has".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-19',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'I did not see my friends yesterday.',
          spanish: 'No vi a mis amigos ayer.',
          words: ['I', 'did', 'not', 'see', 'my', 'friends', 'yesterday.'],
          explanation: 'Negación en pasado simple: did not + verbo base.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'What time do you usually wake up?',
          spanish: '¿A qué hora sueles despertarte?',
          explanation: 'Pregunta sobre la rutina diaria.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-21',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Spring', right: 'Primavera' },
        { left: 'Summer', right: 'Verano' },
        { left: 'Autumn', right: 'Otoño' },
        { left: 'Winter', right: 'Invierno' },
        { left: 'Season', right: 'Estación' }
      ],
      explanation: 'Las cuatro estaciones del año.'
    }
  },
  {
    id: 'a1-u30-22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Is your house _______ than mine?',
          options: ['big', 'bigger', 'more big', 'biggest'],
          correctAnswer: 'bigger',
          explanation: 'Comparativo de "big" es "bigger" (doble consonante).'
        }
      ]
    }
  },
  {
    id: 'a1-u30-23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'We _______ (study) English every day.',
          correctAnswers: ['study'],
          explanation: 'Hábito presente con el pronombre "we".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'She is much taller than her brother.',
          spanish: 'Ella es mucho más alta que su hermano.',
          words: ['She', 'is', 'much', 'taller', 'than', 'her', 'brother.'],
          explanation: 'Usamos "much" antes de un comparativo para dar énfasis.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-25',
    type: 'flashcard',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      items: [
        { front: 'Tired', back: 'Cansado' },
        { front: 'Hungry', back: 'Hambriento' },
        { front: 'Thirsty', back: 'Sediento' },
        { front: 'Scared', back: 'Asustado' }
      ],
      explanation: 'Estados físicos y emocionales comunes.'
    }
  },
  {
    id: 'a1-u30-26',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Doctor', right: 'Médico' },
        { left: 'Nurse', right: 'Enfermero/a' },
        { left: 'Dentist', right: 'Dentista' },
        { left: 'Surgeon', right: 'Cirujano' },
        { left: 'Patient', right: 'Paciente' }
      ],
      explanation: 'Vocabulario relacionado con la salud y profesiones médicas.'
    }
  },
  {
    id: 'a1-u30-27',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Are there _______ eggs in the kitchen?',
          options: ['any', 'some', 'a', 'an'],
          correctAnswer: 'any',
          explanation: 'Usamos "any" para preguntas en plural.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'My sister is _______ (young) than me.',
          correctAnswers: ['younger'],
          explanation: 'Comparativo de "young" es "younger".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'I am going to buy some new clothes tomorrow.',
          spanish: 'Voy a comprar algo de ropa nueva mañana.',
          words: ['I', 'am', 'going', 'to', 'buy', 'some', 'new', 'clothes', 'tomorrow.'],
          explanation: 'Estructura de futuro para una intención clara.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-30',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Could you tell me the way to the station?',
          spanish: '¿Podría decirme el camino a la estación?',
          explanation: 'Frase útil y educada para pedir direcciones.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-31',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Laptop', right: 'Ordenador portátil' },
        { left: 'Keyboard', right: 'Teclado' },
        { left: 'Mouse', right: 'Ratón' },
        { left: 'Screen', right: 'Pantalla' },
        { left: 'Headphones', right: 'Auriculares' }
      ],
      explanation: 'Vocabulario tecnológico esencial.'
    }
  },
  {
    id: 'a1-u30-32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Where _______ your parents live?',
          options: ['do', 'does', 'are', 'is'],
          correctAnswer: 'do',
          explanation: 'Usamos el auxiliar "do" para el plural "parents".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-33',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'I _______ (write) an email to my boss right now.',
          correctAnswers: ['am writing'],
          explanation: 'Presente continuo para una acción en progreso.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'This is the most expensive watch in the shop.',
          spanish: 'Este es el reloj más caro de la tienda.',
          words: ['This', 'is', 'the', 'most', 'expensive', 'watch', 'in', 'the', 'shop.'],
          explanation: 'Uso del superlativo para adjetivos largos.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      items: [
        { front: 'Breakfast', back: 'Desayuno' },
        { front: 'Lunch', back: 'Almuerzo / Comida' },
        { front: 'Dinner', back: 'Cena' },
        { front: 'Snack', back: 'Merienda / Tentempié' }
      ],
      explanation: 'Las comidas del día.'
    }
  },
  {
    id: 'a1-u30-36',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Speak - Spoke', right: 'Hablar - Habló' },
        { left: 'Write - Wrote', right: 'Escribir - Escribió' },
        { left: 'Read - Read', right: 'Leer - Leyó' },
        { left: 'Sing - Sang', right: 'Cantar - Cantó' },
        { left: 'Run - Ran', right: 'Correr - Corrió' }
      ],
      explanation: 'Más verbos irregulares en su forma de presente y pasado.'
    }
  },
  {
    id: 'a1-u30-37',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: '_______ you like a cup of tea?',
          options: ['Do', 'Would', 'Can', 'Are'],
          correctAnswer: 'Would',
          explanation: '"Would you like...?" es la forma estándar de ofrecer algo.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-38',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'There _______ (be) no milk in the fridge.',
          correctAnswers: ['is'],
          explanation: 'Usamos "is" con sustantivos incontables como "milk".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-39',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'I think that English is easier than German.',
          spanish: 'Creo que el inglés es más fácil que el alemán.',
          words: ['I', 'think', 'that', 'English', 'is', 'easier', 'than', 'German.'],
          explanation: 'Expresando opiniones con comparativos.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: "I'm sorry, I don't understand. Can you repeat that?",
          spanish: 'Lo siento, no entiendo. ¿Puedes repetir eso?',
          explanation: 'Frases esenciales para la comunicación cuando no comprendemos algo.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-41',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'Slowly', right: 'Lentamente' },
        { left: 'Quickly', right: 'Rápidamente' },
        { left: 'Happily', right: 'Felizmente' },
        { left: 'Carefully', right: 'Cuidadosamente' },
        { left: 'Quietly', right: 'Silenciosamente' }
      ],
      explanation: 'Adverbios de modo formados a partir de adjetivos (+ ly).'
    }
  },
  {
    id: 'a1-u30-42',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'He is _______ at English than his sister.',
          options: ['gooder', 'better', 'more good', 'best'],
          correctAnswer: 'better',
          explanation: '"Better" es el comparativo irregular de "good".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'We _______ (go) to the cinema last Saturday.',
          correctAnswers: ['went'],
          explanation: 'Pasado simple del verbo irregular "go".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-44',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'How many brothers and sisters do you have?',
          spanish: '¿Cuántos hermanos y hermanas tienes?',
          words: ['How', 'many', 'brothers', 'and', 'sisters', 'do', 'you', 'have?'],
          explanation: 'Pregunta clásica sobre la familia.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-45',
    type: 'flashcard',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      items: [
        { front: 'Expensive', back: 'Caro' },
        { front: 'Cheap', back: 'Barato' },
        { front: 'Rich', back: 'Rico' },
        { front: 'Poor', back: 'Pobre' }
      ],
      explanation: 'Adjetivos relacionados con el dinero y el coste.'
    }
  },
  {
    id: 'a1-u30-46',
    type: 'matching',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      pairs: [
        { left: 'In front of', right: 'Delante de' },
        { left: 'Behind', right: 'Detrás de' },
        { left: 'Between', right: 'Entre' },
        { left: 'Above', right: 'Encima de' },
        { left: 'Below', right: 'Debajo de' }
      ],
      explanation: 'Preposiciones de lugar para indicar posición exacta.'
    }
  },
  {
    id: 'a1-u30-47',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'It is _______ today than it was yesterday.',
          options: ['hot', 'hotter', 'more hot', 'hottest'],
          correctAnswer: 'hotter',
          explanation: '"Hotter" es el comparativo de "hot" (duplica la "t").'
        }
      ]
    }
  },
  {
    id: 'a1-u30-48',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          text: 'What _______ you doing at the moment?',
          correctAnswers: ['are'],
          explanation: 'Verbo auxiliar "are" para el presente continuo con "you".'
        }
      ]
    }
  },
  {
    id: 'a1-u30-49',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      sentences: [
        {
          english: 'I think you are doing a great job!',
          spanish: '¡Creo que estás haciendo un gran trabajo!',
          words: ['I', 'think', 'you', 'are', 'doing', 'a', 'great', 'job!'],
          explanation: 'Una frase de ánimo para terminar el curso.'
        }
      ]
    }
  },
  {
    id: 'a1-u30-50',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Bonus',
    topicName: 'Bonus Challenge',
    difficulty: 'hard',
    content: {
      questions: [
        {
          question: 'Congratulations! You have finished the A1 course.',
          spanish: '¡Felicidades! Has terminado el curso A1.',
          explanation: '¡Lo lograste! Has completado las 30 unidades del nivel A1.'
        }
      ]
    }
  }
];
