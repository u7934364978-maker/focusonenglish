import { Exercise } from '@/lib/exercise-generator';

export const UNIT_17_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Sports & Activities (1-12) ---
  {
    id: 'a2-u17-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ciclismo',
          back: 'Cycling',
          example: 'I love cycling in the mountains.',
          pronunciation: '/ˈsaɪklɪŋ/',
          explanation: 'El deporte de montar en bicicleta.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Common Sports',
      instructions: 'Une el deporte con su traducción.',
      pairs: [
        { id: '1', left: 'Swimming', right: 'Natación' },
        { id: '2', left: 'Running', right: 'Correr' },
        { id: '3', left: 'Hiking', right: 'Senderismo' },
        { id: '4', left: 'Sailing', right: 'Vela' },
        { id: '5', left: 'Climbing', right: 'Escalada' }
      ],
      explanation: 'Vocabulario básico de deportes.'
    } as any
  },
  {
    id: 'a2-u17-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Play, Go, or Do?',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ football with my friends every Sunday.',
          options: ['play', 'go', 'do'],
          correctAnswer: 0,
          explanation: 'Usamos "play" para deportes de equipo con pelota.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Verbs for Sports',
      instructions: 'Completa con play, go o do.',
      questions: [
        {
          id: 'q1',
          text: 'She wants to ___ yoga twice a week.',
          correctAnswer: 'do',
          explanation: 'Usamos "do" para actividades individuales o de artes marciales.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Sporting Habit',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'go', 'swimming', 'at', 'the', 'weekend', '.'],
          correctSentence: 'We go swimming at the weekend.',
          translation: 'Vamos a nadar el fin de semana.',
          hint: 'Usa "go".',
          explanation: 'Usamos "go" con deportes que terminan en -ing.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Equipo / Team',
          back: 'Team',
          example: 'Our team won the match!',
          pronunciation: '/tiːm/',
          explanation: 'Grupo de personas que juegan juntas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Result of the Match',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The game ended 0-0, so it was a ___ .',
          options: ['draw', 'win', 'loss'],
          correctAnswer: 0,
          explanation: 'Un empate se llama "draw".'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Sport',
      instructions: 'Di "I enjoy playing sports".',
      questions: [
        {
          id: 'q1',
          text: 'I enjoy playing sports',
          correctAnswer: 'I enjoy playing sports',
          explanation: 'Pronuncia "sports" con una "o" larga: /spɔːrts/.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Verb choice',
      instructions: 'Completa con play, go o do.',
      questions: [
        {
          id: 'q1',
          text: 'He ___ skiing every winter.',
          correctAnswer: 'goes',
          explanation: 'Recuerda añadir "s" para la tercera persona con "go" -> "goes".'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Team Sport',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'play', 'any', 'team', 'sports', '?'],
          correctSentence: 'Do you play any team sports?',
          translation: '¿Juegas algún deporte de equipo?',
          hint: 'Es una pregunta.',
          explanation: 'Estructura interrogativa en presente simple.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Activities',
      instructions: 'Une la actividad con su verbo.',
      pairs: [
        { id: '1', left: 'Karate', right: 'Do' },
        { id: '2', left: 'Surfing', right: 'Go' },
        { id: '3', left: 'Basketball', right: 'Play' },
        { id: '4', left: 'Gymnastics', right: 'Do' }
      ],
      explanation: 'Repaso de las combinaciones de verbos y deportes.'
    } as any
  },
  {
    id: 'a2-u17-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'hard',
    content: {
      title: 'Compete',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The best runner wins a gold ___ .',
          options: ['medal', 'cup', 'prize'],
          correctAnswer: 0,
          explanation: '"Medal" (medalla) es el premio típico en atletismo.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Sports Equipment & Places (13-24) ---
  {
    id: 'a2-u17-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Raqueta',
          back: 'Racket',
          example: 'I need a new tennis racket.',
          pronunciation: '/ˈrækɪt/',
          explanation: 'Equipo usado en tenis o bádminton.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Where to play?',
      instructions: 'Une el lugar con el deporte.',
      pairs: [
        { id: '1', left: 'Court', right: 'Tennis / Basketball' },
        { id: '2', left: 'Pitch', right: 'Football' },
        { id: '3', left: 'Pool', right: 'Swimming' },
        { id: '4', left: 'Gym', right: 'Fitness / Yoga' },
        { id: '5', left: 'Track', right: 'Running' }
      ],
      explanation: 'Vocabulario de lugares deportivos.'
    } as any
  },
  {
    id: 'a2-u17-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Footwear',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You should wear ___ when you go running.',
          options: ['trainers', 'boots', 'sandals'],
          correctAnswer: 0,
          explanation: '"Trainers" son las zapatillas deportivas.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Football equipment',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The players are trying to kick the ball into the ___ .',
          correctAnswer: 'goal',
          explanation: 'El objetivo es meter el balón en la portería (goal).'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Tennis match',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'are', 'meeting', 'at', 'the', 'tennis', 'court', '.'],
          correctSentence: 'We are meeting at the tennis court.',
          translation: 'Nos vemos en la pista de tenis.',
          hint: 'Usa "at".',
          explanation: 'Lugar específico para jugar tenis.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Casco',
          back: 'Helmet',
          example: 'Always wear a helmet when cycling.',
          pronunciation: '/ˈhelmɪt/',
          explanation: 'Protección para la cabeza.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Golf',
      instructions: 'Elige el lugar correcto.',
      questions: [
        {
          id: 'q1',
          question: 'They are playing golf on the ___ .',
          options: ['course', 'pitch', 'court'],
          correctAnswer: 0,
          explanation: 'El golf se juega en un "course" (campo).'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Racket',
      instructions: 'Di "I have a new racket".',
      questions: [
        {
          id: 'q1',
          text: 'I have a new racket',
          correctAnswer: 'I have a new racket',
          explanation: 'Pronuncia "racket" como /ˈrækɪt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Swimming',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Don’t forget your swimming ___ when you go to the pool.',
          correctAnswer: 'costume',
          explanation: '"Swimming costume" o "swimsuit" es el bañador.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Safety',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['You', 'must', 'wear', 'a', 'helmet', 'for', 'climbing', '.'],
          correctSentence: 'You must wear a helmet for climbing.',
          translation: 'Debes llevar un casco para escalar.',
          hint: 'Usa "must".',
          explanation: 'Obligación en contextos de seguridad.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Equipment Mix',
      instructions: 'Une el equipo con su deporte.',
      pairs: [
        { id: '1', left: 'Bat', right: 'Baseball / Cricket' },
        { id: '2', left: 'Goggles', right: 'Swimming' },
        { id: '3', left: 'Gloves', right: 'Boxing' },
        { id: '4', left: 'Net', right: 'Volleyball / Tennis' }
      ],
      explanation: 'Equipamiento deportivo específico.'
    } as any
  },
  {
    id: 'a2-u17-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'hard',
    content: {
      title: 'Competition Place',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The final match will be held in a large ___ .',
          options: ['stadium', 'gym', 'pool'],
          correctAnswer: 0,
          explanation: 'Un "stadium" (estadio) es el lugar para grandes eventos.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Adverbs of Manner (25-36) ---
  {
    id: 'a2-u17-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Rápidamente',
          back: 'Quickly',
          example: 'He runs very quickly.',
          pronunciation: '/ˈkwɪkli/',
          explanation: 'Adverbio que indica velocidad.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Adverbs of Manner',
      instructions: 'Une el adjetivo con su adverbio.',
      pairs: [
        { id: '1', left: 'Slow', right: 'Slowly' },
        { id: '2', left: 'Bad', right: 'Badly' },
        { id: '3', left: 'Quiet', right: 'Quietly' },
        { id: '4', left: 'Careful', right: 'Carefully' },
        { id: '5', left: 'Happy', right: 'Happily' }
      ],
      explanation: 'Formación de adverbios añadiendo -ly.'
    } as any
  },
  {
    id: 'a2-u17-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Irregular Adverbs',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'She plays tennis very ___ .',
          options: ['well', 'good', 'goodly'],
          correctAnswer: 0,
          explanation: 'El adverbio de "good" es "well".'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Adverb form',
      instructions: 'Convierte el adjetivo en adverbio: (loud).',
      questions: [
        {
          id: 'q1',
          text: 'The fans cheered ___ during the game.',
          correctAnswer: 'loudly',
          explanation: 'Añadimos -ly a loud.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'How he runs',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'runs', 'fast', 'down', 'the', 'track', '.'],
          correctSentence: 'He runs fast down the track.',
          translation: 'Él corre rápido por la pista.',
          hint: '"Fast" es irregular.',
          explanation: '"Fast" es tanto adjetivo como adverbio (no existe "fastly").',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Duro / Con esfuerzo',
          back: 'Hard',
          example: 'They practiced hard for the final.',
          pronunciation: '/hɑːrd/',
          explanation: '"Hard" funciona como adverbio sin cambiar de forma.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Adjective or Adverb?',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The cyclist was ___ , so he finished the race quickly.',
          options: ['fast', 'fastly', 'quickly'],
          correctAnswer: 0,
          explanation: 'Aquí necesitamos un adjetivo para describir al ciclista.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Well',
      instructions: 'Di "She swims very well".',
      questions: [
        {
          id: 'q1',
          text: 'She swims very well',
          correctAnswer: 'She swims very well',
          explanation: 'Enfócate en la pronunciación de "well" /wel/.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Adverb formation',
      instructions: 'Convierte: (easy).',
      questions: [
        {
          id: 'q1',
          text: 'Our team won the match ___ .',
          correctAnswer: 'easily',
          explanation: 'Si termina en "y", cambiamos a "i" + "ly".'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Careful play',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Please', 'kick', 'the', 'ball', 'carefully', '.'],
          correctSentence: 'Please kick the ball carefully.',
          translation: 'Por favor, patea el balón con cuidado.',
          hint: 'Adverbio al final.',
          explanation: 'Los adverbios de modo suelen ir después del objeto.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Opposite Adverbs',
      instructions: 'Une los opuestos.',
      pairs: [
        { id: '1', left: 'Well', right: 'Badly' },
        { id: '2', left: 'Quickly', right: 'Slowly' },
        { id: '3', left: 'Loudly', right: 'Quietly' },
        { id: '4', left: 'Happily', right: 'Sadly' }
      ],
      explanation: 'Pares de adverbios con significados opuestos.'
    } as any
  },
  {
    id: 'a2-u17-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'hard',
    content: {
      title: 'Choose the adverb',
      instructions: 'Elige la opción gramaticalmente correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You must drive ___ when it is raining.',
          options: ['safely', 'safe', 'saves'],
          correctAnswer: 0,
          explanation: 'Necesitamos el adverbio para describir cómo conducir.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Fitness & Health (37-45) ---
  {
    id: 'a2-u17-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mantenerse en forma',
          back: 'Keep fit / Stay fit',
          example: 'I go to the gym to keep fit.',
          pronunciation: '/kiːp fɪt/',
          explanation: 'Estar saludable y en buena condición física.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Gym activity',
      instructions: 'Elige el verbo.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ out at the gym three times a week.',
          options: ['work', 'do', 'play'],
          correctAnswer: 0,
          explanation: '"Work out" es la expresión para hacer ejercicio.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Fitness Goals',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Exercise is good for your ___ .',
          correctAnswer: 'health',
          explanation: 'El ejercicio es bueno para tu salud (health).'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Daily Exercise',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'is', 'important', 'to', 'exercise', 'every', 'day', '.'],
          correctSentence: 'It is important to exercise every day.',
          translation: 'Es importante hacer ejercicio todos los días.',
          hint: 'Empieza con "It".',
          explanation: 'Estructura impersonal para dar consejos.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Fitness Vocabulary',
      instructions: 'Une el concepto con su definición.',
      pairs: [
        { id: '1', left: 'Membership', right: 'Paying to belong to a gym' },
        { id: '2', left: 'Trainer', right: 'Someone who helps you exercise' },
        { id: '3', left: 'Calories', right: 'Energy in food' },
        { id: '4', left: 'Weights', right: 'Heavy objects for exercise' }
      ],
      explanation: 'Vocabulario relacionado con el gimnasio.'
    } as any
  },
  {
    id: 'a2-u17-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Active Lifestyle',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Instead of the lift, I always take the ___ .',
          options: ['stairs', 'car', 'bus'],
          correctAnswer: 0,
          explanation: 'Subir las escaleras (stairs) es más saludable que el ascensor.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Exercise',
      instructions: 'Di "I need more exercise".',
      questions: [
        {
          id: 'q1',
          text: 'I need more exercise',
          correctAnswer: 'I need more exercise',
          explanation: 'Pronuncia "exercise" como /ˈeksəsaɪz/.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'hard',
    content: {
      title: 'Getting better',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'He is training hard to ___ his fitness.',
          correctAnswer: 'improve',
          explanation: '"Improve" significa mejorar.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'hard',
    content: {
      title: 'Joining a Gym',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'going', 'to', 'join', ' a', 'new', 'gym', '.'],
          correctSentence: 'I am going to join a new gym.',
          translation: 'Me voy a apuntar a un nuevo gimnasio.',
          hint: 'Usa "join".',
          explanation: 'Expresando intenciones futuras.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u17-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The referee blew the ___ to start the match.',
          options: ['whistle', 'ball', 'bell'],
          correctAnswer: 0,
          explanation: 'El árbitro usa un silbato (whistle).'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Adverb practice',
      instructions: 'Completa con el adverbio de (quiet).',
      questions: [
        {
          id: 'q1',
          text: 'The athlete entered the room ___ .',
          correctAnswer: 'quietly',
          explanation: 'Adverbio terminado en -ly.'
        }
      ]
    }
  },
  {
    id: 'a2-u17-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Favorite Sport',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Which', 'sport', 'do', 'you', 'like', 'best', '?'],
          correctSentence: 'Which sport do you like best?',
          translation: '¿Qué deporte te gusta más?',
          hint: 'Empieza con "Which".',
          explanation: 'Preguntando por preferencias.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u17-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'medium',
    content: {
      title: 'Sports Review',
      instructions: 'Une el deporte con su verbo habitual.',
      pairs: [
        { id: '1', left: 'Surfing', right: 'Go' },
        { id: '2', left: 'Table tennis', right: 'Play' },
        { id: '3', left: 'Pilates', right: 'Do' },
        { id: '4', left: 'Running', right: 'Go' }
      ],
      explanation: 'Consolidación de verbos de actividades.'
    } as any
  },
  {
    id: 'a2-u17-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Sports & Fitness',
    topicName: 'Sports & Fitness',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'If you want to win, you have to practice ___ .',
          options: ['hard', 'hardly', 'good'],
          correctAnswer: 0,
          explanation: '"Hard" es el adverbio correcto. "Hardly" significa "apenas".'
        }
      ]
    }
  }
];
