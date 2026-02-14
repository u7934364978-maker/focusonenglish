import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 27: Future Plans
 */

export const UNIT_27_EXERCISES: Exercise[] = [
  {
    id: 'a1-u27-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Vocabulario de Planes',
      instructions: 'Une cada expresión con su traducción al español.',
      pairs: [
        { id: 'p1', left: 'Tomorrow', right: 'Mañana' },
        { id: 'p2', left: 'Tonight', right: 'Esta noche' },
        { id: 'p3', left: 'Next week', right: 'La próxima semana' },
        { id: 'p4', left: 'Next month', right: 'El próximo mes' },
        { id: 'p5', left: 'Next year', right: 'El próximo año' }
      ],
      explanation: 'Estas expresiones temporales son fundamentales para hablar de planes futuros.'
    } as any
  },
  {
    id: 'a1-u27-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Estructura Básica',
      instructions: 'Elige la forma correcta del verbo to be para "going to".',
      questions: [
        {
          id: 'q1',
          question: 'I ________ going to visit my friend tomorrow.',
          options: ['am', 'is', 'are'],
          correctAnswer: 0,
          explanation: 'Con "I" siempre usamos "am" en la estructura "am going to".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Planes de hoy',
      instructions: 'Completa con "is" o "are".',
      questions: [
        {
          id: 'q1',
          question: 'He ________ going to cook dinner tonight.',
          correctAnswer: 'is',
          explanation: 'Usamos "is" para la tercera persona del singular (he, she, it).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Going to',
          back: 'Ir a (hacer algo)',
          example: 'I am going to study.',
          pronunciation: '/ˈɡəʊ.ɪŋ tuː/',
          explanation: 'Usamos "going to" para expresar intenciones y planes futuros.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Construye la frase',
      instructions: 'Ordena las palabras para decir "Vamos a jugar al fútbol".',
      sentences: [
        {
          id: 's1',
          words: ['play', 'going', 'are', 'We', 'football', 'to'],
          correctSentence: 'We are going to play football',
          translation: 'Nosotros vamos a jugar al fútbol.',
          hint: 'Empieza con "We".',
          explanation: 'Estructura: Sujeto + am/is/are + going to + verbo base.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Verbos Comunes de Planes',
      instructions: 'Une el verbo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Visit', right: 'Visitar' },
        { id: 'p2', left: 'Watch', right: 'Ver/Mirar' },
        { id: 'p3', left: 'Travel', right: 'Viajar' },
        { id: 'p4', left: 'Buy', right: 'Comprar' },
        { id: 'p5', left: 'Meet', right: 'Quedar con/Conocer' }
      ],
      explanation: 'Estos verbos se usan frecuentemente con "going to" para hablar de planes.'
    } as any
  },
  {
    id: 'a1-u27-e7',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Going to',
      instructions: 'Di la frase: "I am going to travel".',
      questions: [
        {
          id: 'q1',
          text: 'I am going to travel',
          phonetic: '/aɪ æm ˈɡəʊ.ɪŋ tuː ˈtræv.əl/',
          translation: 'Voy a viajar.',
          explanation: 'En lenguaje coloquial, "going to" a menudo suena como "gonna", pero es mejor practicar la forma completa primero.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Negación',
      instructions: '¿Cuál es la forma negativa correcta?',
      questions: [
        {
          id: 'q1',
          question: 'They ________ going to swim today.',
          options: ["aren't", "isn't", "am not"],
          correctAnswer: 0,
          explanation: 'Para "they" la negación es "are not" o "aren\'t".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Planes de fin de semana',
      instructions: 'Completa con la forma correcta de "to be".',
      questions: [
        {
          id: 'q1',
          question: 'She ________ not going to work this weekend.',
          correctAnswer: 'is',
          explanation: 'La negación se coloca después del verbo "to be": Subject + to be + not + going to.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Pregunta de planes',
      instructions: 'Ordena para preguntar "¿Qué vas a hacer?".',
      sentences: [
        {
          id: 's1',
          words: ['you', 'are', 'What', 'do', 'going', 'to', '?'],
          correctSentence: 'What are you going to do ?',
          translation: '¿Qué vas a hacer?',
          hint: 'Empieza con "What".',
          explanation: 'En preguntas, el verbo "to be" pasa delante del sujeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e11',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Actividades de Tiempo Libre',
      instructions: 'Une cada actividad con su traducción.',
      pairs: [
        { id: 'p1', left: 'Go to the cinema', right: 'Ir al cine' },
        { id: 'p2', left: 'Have a party', right: 'Tener una fiesta' },
        { id: 'p3', left: 'Read a book', right: 'Leer un libro' },
        { id: 'p4', left: 'Listen to music', right: 'Escuchar música' },
        { id: 'p5', left: 'Take a nap', right: 'Echar una siesta' }
      ],
      explanation: 'Actividades comunes que planeamos para nuestro tiempo libre.'
    } as any
  },
  {
    id: 'a1-u27-e12',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Preguntas Sí/No',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '¿Vas a estudiar inglés?',
          options: ['Are you going to study English?', 'You are going to study English?', 'Is you going to study English?'],
          correctAnswer: 0,
          explanation: 'Estructura interrogativa: Are + you + going to + verb?'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Próximo mes',
      instructions: 'Completa la frase con la palabra que falta.',
      questions: [
        {
          id: 'q1',
          question: 'We are going ________ visit London next month.',
          correctAnswer: 'to',
          explanation: 'Nunca olvides el "to" después de "going" en esta estructura de futuro.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e14',
    type: 'flashcard',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Next week',
          back: 'La próxima semana',
          example: 'I am going to relax next week.',
          pronunciation: '/nekst wiːk/',
          explanation: '"Next" se usa para indicar el siguiente periodo de tiempo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Pregunta',
      instructions: 'Pregunta: "Are you going to stay?"',
      questions: [
        {
          id: 'q1',
          text: 'Are you going to stay',
          phonetic: '/ɑː jʊ ˈɡəʊ.ɪŋ tuː steɪ/',
          translation: '¿Te vas a quedar?',
          explanation: 'La entonación sube al final de las preguntas de sí o no.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Viajes Planeados',
      instructions: 'Une el destino con la acción.',
      pairs: [
        { id: 'p1', left: 'Beach', right: 'Swim' },
        { id: 'p2', left: 'Museum', right: 'See art' },
        { id: 'p3', left: 'Restaurant', right: 'Eat' },
        { id: 'p4', left: 'Mountain', right: 'Hike' },
        { id: 'p5', left: 'Store', right: 'Shop' }
      ],
      explanation: 'Vocabulario relacionado con planes de viaje y ocio.'
    } as any
  },
  {
    id: 'a1-u27-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Respuestas cortas',
      instructions: 'Responde: "Are you going to help me?"',
      questions: [
        {
          id: 'q1',
          question: 'Yes, I ________.',
          options: ['am', 'do', 'going'],
          correctAnswer: 0,
          explanation: 'En respuestas cortas usamos solo el verbo "to be".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Mañana por la mañana',
      instructions: 'Completa la frase negativa.',
      questions: [
        {
          id: 'q1',
          question: 'I am ________ going to wake up early tomorrow.',
          correctAnswer: 'not',
          explanation: 'Usamos "not" después de "am/is/are" para negar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e19',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Planes de fiesta',
      instructions: 'Ordena para decir "Ella va a tener una fiesta".',
      sentences: [
        {
          id: 's1',
          words: ['party', 'is', 'She', 'going', 'to', 'have', 'a'],
          correctSentence: 'She is going to have a party',
          translation: 'Ella va a tener una fiesta.',
          hint: 'Empieza con "She".',
          explanation: 'Estructura afirmativa completa con el objeto "a party".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Planes y Horarios',
      instructions: 'Une el momento con el plan sugerido.',
      pairs: [
        { id: 'p1', left: '6:00 AM', right: 'Get up' },
        { id: 'p2', left: '1:00 PM', right: 'Have lunch' },
        { id: 'p3', left: '8:00 PM', right: 'Watch a movie' },
        { id: 'p4', left: '11:00 PM', right: 'Go to bed' },
        { id: 'p5', left: '5:00 PM', right: 'Finish work' }
      ],
      explanation: 'Combinando planes futuros con horas específicas.'
    } as any
  },
  {
    id: 'a1-u27-e21',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Predicciones basadas en evidencia',
      instructions: 'Mira el cielo gris y elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Look at those clouds! It ________ rain.',
          options: ['is going to', 'are going to', 'am going to'],
          correctAnswer: 0,
          explanation: 'También usamos "going to" para predicciones cuando vemos evidencia clara.'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e22',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Planes de estudio',
      instructions: 'Completa la pregunta.',
      questions: [
        {
          id: 'q1',
          question: '________ you going to pass the exam?',
          correctAnswer: 'Are',
          explanation: 'En preguntas directas para "you", siempre comenzamos con "Are".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Prediction',
          back: 'Predicción',
          example: "It's going to snow.",
          pronunciation: '/prɪˈdɪk.ʃən/',
          explanation: '"Going to" se usa para cosas que estamos seguros que pasarán pronto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Planes complejos',
      instructions: 'Ordena para decir "Mis padres van a viajar a España".',
      sentences: [
        {
          id: 's1',
          words: ['Spain', 'My', 'going', 'parents', 'are', 'travel', 'to', 'to'],
          correctSentence: 'My parents are going to travel to Spain',
          translation: 'Mis padres van a viajar a España.',
          hint: 'Empieza con "My".',
          explanation: 'Recuerda: "going to" (futuro) + "travel to" (dirección).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Eventos del Año',
      instructions: 'Une el evento con el mes típico.',
      pairs: [
        { id: 'p1', left: 'Christmas', right: 'December' },
        { id: 'p2', left: 'Summer holiday', right: 'August' },
        { id: 'p3', left: 'Easter', right: 'April' },
        { id: 'p4', left: 'New Year', right: 'January' },
        { id: 'p5', left: 'Halloween', right: 'October' }
      ],
      explanation: 'Eventos que solemos planear con antelación.'
    } as any
  },
  {
    id: 'a1-u27-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Plural o Singular',
      instructions: 'Elige la opción correcta para un grupo.',
      questions: [
        {
          id: 'q1',
          question: 'The students ________ watch a video.',
          options: ['are going to', 'is going to', 'am going to'],
          correctAnswer: 0,
          explanation: '"Students" es plural, por lo que usamos "are".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Pregunta de lugar',
      instructions: 'Completa: "¿A dónde van a ir?".',
      questions: [
        {
          id: 'q1',
          question: 'Where ________ they going to go?',
          correctAnswer: 'are',
          explanation: 'Estructura: Wh- word + are + they + going to + verb.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e28',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: Negación',
      instructions: 'Di: "He is not going to call".',
      questions: [
        {
          id: 'q1',
          text: 'He is not going to call',
          phonetic: '/hiː ɪz nɒt ˈɡəʊ.ɪŋ tuː kɔːl/',
          translation: 'Él no va a llamar.',
          explanation: 'Asegúrate de pronunciar claramente el "not" para que se entienda la negación.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e29',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Planes de Carrera',
      instructions: 'Une el plan con el objetivo.',
      pairs: [
        { id: 'p1', left: 'Study hard', right: 'Pass exams' },
        { id: 'p2', left: 'Practice English', right: 'Speak better' },
        { id: 'p3', left: 'Save money', right: 'Buy a house' },
        { id: 'p4', left: 'Work out', right: 'Be healthy' },
        { id: 'p5', left: 'Read news', right: 'Be informed' }
      ],
      explanation: 'Intenciones a largo plazo usando "going to".'
    } as any
  },
  {
    id: 'a1-u27-e30',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Futuro Inmediato',
      instructions: '¿Qué va a pasar ahora mismo?',
      questions: [
        {
          id: 'q1',
          question: 'The baby is tired. He ________ sleep.',
          options: ['is going to', 'am going to', 'are going to'],
          correctAnswer: 0,
          explanation: 'Usamos "is going to" porque el bebé es singular.'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e31',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Próximo lunes',
      instructions: 'Escribe la palabra para "lunes".',
      questions: [
        {
          id: 'q1',
          question: 'I am going to work next ________.',
          correctAnswer: 'Monday',
          explanation: 'Los días de la semana siempre empiezan con mayúscula en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Fin de semana',
      instructions: '¿Qué vas a hacer el sábado?',
      questions: [
        {
          id: 'q1',
          question: 'We ________ going to watch a movie on Saturday.',
          options: ['are', 'is', 'am'],
          correctAnswer: 0,
          explanation: '"We" es plural, por eso usamos "are".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e33',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Mañana',
      instructions: 'Une las frases con su traducción.',
      pairs: [
        { id: 'p1', left: 'I am going to study', right: 'Voy a estudiar' },
        { id: 'p2', left: 'You are going to eat', right: 'Vas a comer' },
        { id: 'p3', left: 'He is going to sing', right: 'Él va a cantar' },
        { id: 'p4', left: 'She is going to dance', right: 'Ella va a bailar' },
        { id: 'p5', left: 'It is going to rain', right: 'Va a llover' }
      ],
      explanation: 'Ejemplos básicos de la estructura con diferentes sujetos.'
    } as any
  },
  {
    id: 'a1-u27-e34',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'La cena',
      instructions: 'Completa con el verbo "cook" (cocinar).',
      questions: [
        {
          id: 'q1',
          question: 'They are going to ________ dinner.',
          correctAnswer: 'cook',
          explanation: 'Después de "going to" el verbo va en su forma base.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'easy',
    content: {
      title: 'Pregunta simple',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Is he ________ to help us?',
          options: ['going', 'go', 'goes'],
          correctAnswer: 0,
          explanation: 'La estructura fija es always "going to".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e36',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Limpiar la casa',
      instructions: 'Ordena para decir "Voy a limpiar mi habitación".',
      sentences: [
        {
          id: 's1',
          words: ['am', 'room', 'going', 'I', 'to', 'clean', 'my'],
          correctSentence: 'I am going to clean my room',
          translation: 'Voy a limpiar mi habitación.',
          hint: 'Empieza con "I".',
          explanation: 'Sujeto + am + going to + verbo + objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e37',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Planes de Comida',
      instructions: 'Une el plan con el lugar.',
      pairs: [
        { id: 'p1', left: 'Have pizza', right: 'Pizzeria' },
        { id: 'p2', left: 'Buy milk', right: 'Supermarket' },
        { id: 'p3', left: 'Drink coffee', right: 'Café' },
        { id: 'p4', left: 'Eat fish', right: 'Seafood restaurant' },
        { id: 'p5', left: 'Have a burger', right: 'Fast food place' }
      ],
      explanation: 'Relacionando actividades futuras con lugares específicos.'
    } as any
  },
  {
    id: 'a1-u27-e38',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Próxima semana',
      instructions: '¿Qué van a hacer ellos?',
      questions: [
        {
          id: 'q1',
          question: 'They ________ buy a new car next week.',
          options: ['are going to', 'is going to', 'am going to'],
          correctAnswer: 0,
          explanation: '"They" requiere "are" plural.'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e39',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'El clima',
      instructions: 'Completa: "Va a estar soleado".',
      questions: [
        {
          id: 'q1',
          question: 'It is going to ________ sunny.',
          correctAnswer: 'be',
          explanation: 'Usamos el verbo "be" (ser/estar) después de "going to".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e40',
    type: 'flashcard',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Tonight',
          back: 'Esta noche',
          example: 'I am going to watch TV tonight.',
          pronunciation: '/təˈnaɪt/',
          explanation: '"Tonight" se refiere a la noche del día de hoy.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Planes de Estudio',
      instructions: 'Une la asignatura con el plan.',
      pairs: [
        { id: 'p1', left: 'English', right: 'Learn new words' },
        { id: 'p2', left: 'Maths', right: 'Solve problems' },
        { id: 'p3', left: 'History', right: 'Read about kings' },
        { id: 'p4', left: 'Science', right: 'Do an experiment' },
        { id: 'p5', left: 'Art', right: 'Paint a picture' }
      ],
      explanation: 'Vocabulario escolar aplicado a planes futuros.'
    } as any
  },
  {
    id: 'a1-u27-e42',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Negación plural',
      instructions: 'Elige la opción negativa correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We ________ going to play video games.',
          options: ["aren't", "am not", "isn't"],
          correctAnswer: 0,
          explanation: '"Aren\'t" es la contracción de "are not", necesaria para "we".'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Pregunta de tiempo',
      instructions: 'Completa: "¿Cuándo vas a venir?".',
      questions: [
        {
          id: 'q1',
          question: 'When are you ________ to come?',
          correctAnswer: 'going',
          explanation: 'La palabra clave del futuro planeado es "going".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e44',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Planes de cine',
      instructions: 'Ordena para decir "Vamos a ver una película".',
      sentences: [
        {
          id: 's1',
          words: ['are', 'movie', 'We', 'going', 'to', 'watch', 'a'],
          correctSentence: 'We are going to watch a movie',
          translation: 'Vamos a ver una película.',
          hint: 'Empieza con "We".',
          explanation: 'Estructura plural afirmativa estándar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e45',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Planes',
      instructions: 'Di: "I am going to relax".',
      questions: [
        {
          id: 'q1',
          text: 'I am going to relax',
          phonetic: '/aɪ æm ˈɡəʊ.ɪŋ tuː rɪˈlæks/',
          translation: 'Voy a relajarme.',
          explanation: 'Pon énfasis en "relax".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e46',
    type: 'matching',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Planes de Fin de Semana Largo',
      instructions: 'Une el plan con el día.',
      pairs: [
        { id: 'p1', left: 'Friday night', right: 'Go out' },
        { id: 'p2', left: 'Saturday morning', right: 'Go shopping' },
        { id: 'p3', left: 'Saturday afternoon', right: 'Visit family' },
        { id: 'p4', left: 'Sunday morning', right: 'Relax at home' },
        { id: 'p5', left: 'Sunday evening', right: 'Prepare for work' }
      ],
      explanation: 'Secuenciando planes futuros a lo largo del fin de semana.'
    } as any
  },
  {
    id: 'a1-u27-e47',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Evidencia',
      instructions: '¿Qué va a pasar?',
      questions: [
        {
          id: 'q1',
          question: 'The car is very fast! It ________ win the race.',
          options: ['is going to', 'are going to', 'am going to'],
          correctAnswer: 0,
          explanation: 'Usamos "is going to" para predicciones con evidencia (el coche es rápido).'
        }
      ]
    }
  },
  {
    id: 'a1-u27-e48',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Planes de viaje',
      instructions: 'Escribe la palabra para "volar".',
      questions: [
        {
          id: 'q1',
          question: 'We are going to ________ to New York.',
          correctAnswer: 'fly',
          explanation: '"Fly" (volar) es el verbo base después de "going to".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e49',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Pregunta compleja',
      instructions: 'Ordena para preguntar "¿A qué hora vas a llegar?".',
      sentences: [
        {
          id: 's1',
          words: ['are', 'you', 'going', 'What', 'arrive', 'time', 'to', '?'],
          correctSentence: 'What time are you going to arrive ?',
          translation: '¿A qué hora vas a llegar?',
          hint: 'Empieza con "What".',
          explanation: 'Pregunta con Wh- phrase ("What time") seguida del auxiliar "are".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u27-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Future Plans',
    topicName: 'Going to...',
    difficulty: 'hard',
    content: {
      title: 'Respuesta negativa corta',
      instructions: 'Responde: "Are they going to stay?"',
      questions: [
        {
          id: 'q1',
          question: 'No, they ________.',
          options: ["aren't", "isn't", "not going"],
          correctAnswer: 0,
          explanation: 'Para "they" la respuesta corta negativa es "No, they aren\'t".'
        }
      ]
    }
  }
];
