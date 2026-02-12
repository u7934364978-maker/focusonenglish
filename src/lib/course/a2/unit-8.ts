import { Exercise } from '@/lib/exercise-generator';

export const UNIT_8_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Transportation Vocabulary (1-10) ---
  {
    id: 'a2-u8-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Medio de transporte',
          back: 'Means of transport',
          example: 'What is your favorite means of transport?',
          pronunciation: '/miːnz əv ˈtrænspɔːt/',
          explanation: 'La forma o vehículo que usas para viajar.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'Common Vehicles',
      instructions: 'Une el vehículo con su traducción.',
      pairs: [
        { id: '1', left: 'Underground / Subway', right: 'Metro' },
        { id: '2', left: 'Motorbike', right: 'Moto' },
        { id: '3', left: 'Coach', right: 'Autocar / Autobús de larga distancia' },
        { id: '4', left: 'Ferry', right: 'Ferry / Transbordador' },
        { id: '5', left: 'Lorry / Truck', right: 'Camión' }
      ],
      explanation: 'Vehículos para diferentes tipos de viajes.'
    } as any
  },
  {
    id: 'a2-u8-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'By + Transport',
      instructions: 'Elige la preposición correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I usually go to work ___ bus.',
          options: ['in', 'by', 'on'],
          correctAnswer: 1,
          explanation: 'Usamos "by" para indicar el medio de transporte.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'On foot',
      instructions: 'Completa la excepción.',
      questions: [
        {
          id: 'q1',
          text: 'I often go to the park ___ foot.',
          correctAnswer: 'on',
          explanation: 'Para ir andando, la única excepción es "on foot".'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Commuting sentence',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'takes', 'thirty', 'minutes', 'by', 'train', '.'],
          correctSentence: 'It takes thirty minutes by train.',
          translation: 'Tarda treinta minutos en tren.',
          hint: 'Usa "It takes".',
          explanation: 'Estructura para expresar duración de un viaje.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Andén',
          back: 'Platform',
          example: 'The train for London leaves from platform 4.',
          pronunciation: '/ˈplætfɔːm/',
          explanation: 'El lugar en la estación donde esperas al tren.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Get on vs Get in',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ the car, please. We are late.',
          options: ['Get in', 'Get on', 'Get into'],
          correctAnswer: 0,
          explanation: 'Usamos "get in" para coches y taxis; "get on" para transportes públicos grandes.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Vehicle',
      instructions: 'Di "Vehicle".',
      questions: [
        {
          id: 'q1',
          text: 'Vehicle',
          correctAnswer: 'Vehicle',
          explanation: 'La "h" es muda: /ˈviːɪkəl/.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'At the station',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Wait for the bus at the bus ___.',
          correctAnswer: 'stop',
          explanation: 'La parada de autobús es el "bus stop".'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Traveling preference',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'prefer', 'traveling', 'by', 'plane', '.'],
          correctSentence: 'I prefer traveling by plane.',
          translation: 'Prefiero viajar en avión.',
          hint: 'Usa "prefer".',
          explanation: 'Estructura simple de preferencia de transporte.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Giving Directions (11-20) ---
  {
    id: 'a2-u8-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Girar a la izquierda',
          back: 'Turn left',
          example: 'Turn left at the traffic lights.',
          pronunciation: '/tɜːn left/',
          explanation: 'Instrucción de dirección básica.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'Direction Phrases',
      instructions: 'Une la instrucción con su traducción.',
      pairs: [
        { id: '1', left: 'Go straight on', right: 'Sigue recto' },
        { id: '2', left: 'Turn right', right: 'Gira a la derecha' },
        { id: '3', left: 'Go past', right: 'Pasa por delante de' },
        { id: '4', left: 'Cross the road', right: 'Cruza la calle' }
      ],
      explanation: 'Instrucciones para orientar a alguien.'
    } as any
  },
  {
    id: 'a2-u8-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Street objects',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A place where two streets meet is a ___.',
          options: ['corner', 'roundabout', 'traffic light'],
          correctAnswer: 0,
          explanation: 'La esquina es el "corner".'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Taking a turning',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: '___ the first turning on the right.',
          correctAnswer: 'Take',
          explanation: 'Usamos el verbo "take" para giros específicos.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Asking for directions',
      instructions: 'Ordena para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'do', 'I', 'get', 'to', 'the', 'bank', '?'],
          correctSentence: 'How do I get to the bank?',
          translation: '¿Cómo llego al banco?',
          hint: 'Empieza con "How".',
          explanation: 'Pregunta estándar para pedir indicaciones.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Semáforos',
          back: 'Traffic lights',
          example: 'Wait for the traffic lights to turn green.',
          pronunciation: '/ˈtræfɪk laɪts/',
          explanation: 'Luces que regulan el tráfico.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Roundabouts',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Go around the ___ and take the second exit.',
          options: ['roundabout', 'corner', 'square'],
          correctAnswer: 0,
          explanation: 'Una rotonda es un "roundabout".'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Straight',
      instructions: 'Di "Go straight on".',
      questions: [
        {
          id: 'q1',
          text: 'Go straight on',
          correctAnswer: 'Go straight on',
          explanation: 'La "gh" es muda: /streɪt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Lost in the city',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Excuse me, I am ___ . Can you help me?',
          correctAnswer: 'lost',
          explanation: '"Lost" significa perdido/a.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Complex direction',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Turn', 'left', 'and', 'the', 'museum', 'is', 'on', 'your', 'right', '.'],
          correctSentence: 'Turn left and the museum is on your right.',
          translation: 'Gira a la izquierda y el museo está a tu derecha.',
          hint: 'Usa "on your right".',
          explanation: 'Frase típica para indicar la ubicación final.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Travel Verbs & Phrases (21-30) ---
  {
    id: 'a2-u8-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Perder (el tren/bus)',
          back: 'To miss',
          example: 'Hurry up or we will miss the bus!',
          pronunciation: '/mɪs/',
          explanation: 'Llegar tarde y no poder tomar el transporte.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'Journey verbs',
      instructions: 'Une el verbo con su significado.',
      pairs: [
        { id: '1', left: 'Depart', right: 'Salida / Partida' },
        { id: '2', left: 'Arrive', right: 'Llegar' },
        { id: '3', left: 'Change', right: 'Hacer transbordo' },
        { id: '4', left: 'Return', right: 'Volver / Regresar' }
      ],
      explanation: 'Verbos sobre el proceso del viaje.'
    } as any
  },
  {
    id: 'a2-u8-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Tickets',
      instructions: 'Elige el tipo de billete.',
      questions: [
        {
          id: 'q1',
          question: 'A ticket for going and coming back is a ___ ticket.',
          options: ['single', 'return', 'double'],
          correctAnswer: 1,
          explanation: 'Un billete de ida y vuelta es un "return ticket".'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Catching a transport',
      instructions: 'Completa con el verbo adecuado.',
      questions: [
        {
          id: 'q1',
          text: 'I usually ___ the 8:30 train.',
          correctAnswer: 'catch',
          explanation: '"Catch" se usa para tomar o alcanzar un transporte.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Arrival time',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'time', 'does', 'the', 'plane', 'arrive', '?'],
          correctSentence: 'What time does the plane arrive?',
          translation: '¿A qué hora llega el avión?',
          hint: 'Empieza con "What time".',
          explanation: 'Estructura de pregunta para horarios.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ida (billete)',
          back: 'Single ticket / One-way ticket',
          example: 'I need a single ticket to Manchester.',
          pronunciation: '/ˈsɪŋɡəl ˈtɪkɪt/',
          explanation: 'Billete para un solo trayecto.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Transfers',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'You have to ___ trains at Oxford Circus.',
          options: ['change', 'miss', 'stop'],
          correctAnswer: 0,
          explanation: '"Change" se usa para cambiar de línea o transporte (transbordo).'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Depart',
      instructions: 'Di "The train departs at noon".',
      questions: [
        {
          id: 'q1',
          text: 'The train departs at noon',
          correctAnswer: 'The train departs at noon',
          explanation: 'El acento va en la segunda sílaba: de-PARTS.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Boarding',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Please show your boarding ___ at the gate.',
          correctAnswer: 'pass',
          explanation: 'La tarjeta de embarque es el "boarding pass".'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Missing transport',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'missed', 'the', 'last', 'bus', 'home', '.'],
          correctSentence: 'We missed the last bus home.',
          translation: 'Perdimos el último autobús a casa.',
          hint: 'Usa el pasado de "miss".',
          explanation: 'Frase común para un inconveniente de viaje.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Imperatives for Directions (31-40) ---
  {
    id: 'a2-u8-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cruzar',
          back: 'To cross',
          example: 'Cross the bridge and turn right.',
          pronunciation: '/krɒs/',
          explanation: 'Ir de un lado a otro de una calle o puente.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e32',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Imperative form',
      instructions: 'Elige la forma correcta de dar una orden.',
      questions: [
        {
          id: 'q1',
          question: '___ straight until the end of the street.',
          options: ['Go', 'Going', 'You go'],
          correctAnswer: 0,
          explanation: 'El imperativo usa la forma base del verbo sin sujeto.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e33',
    type: 'matching',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Imperative Mix',
      instructions: 'Une el verbo con el complemento adecuado.',
      pairs: [
        { id: '1', left: 'Take', right: 'the second left' },
        { id: '2', left: 'Go', right: 'past the park' },
        { id: '3', left: 'Stop', right: 'at the lights' },
        { id: '4', left: 'Turn', right: 'around' }
      ],
      explanation: 'Combinaciones comunes para dar órdenes.'
    } as any
  },
  {
    id: 'a2-u8-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Negative imperative',
      instructions: 'Completa la negación.',
      questions: [
        {
          id: 'q1',
          text: '___ turn left here! It is a one-way street.',
          correctAnswer: "Don't",
          explanation: 'Usamos "Don\'t" para imperativos negativos.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Giving a simple direction',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Take', 'the', 'first', 'street', 'on', 'the', 'right', '.'],
          correctSentence: 'Take the first street on the right.',
          translation: 'Toma la primera calle a la derecha.',
          hint: 'Empieza con el verbo.',
          explanation: 'Uso del imperativo para indicaciones precisas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sigue / Continúa',
          back: 'Keep going',
          example: 'Keep going for 200 meters.',
          pronunciation: '/kiːp ˈɡəʊɪŋ/',
          explanation: 'Indica continuar la acción actual.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Wait vs Go',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: '___ here until I come back.',
          options: ['Wait', 'Go', 'Take'],
          correctAnswer: 0,
          explanation: '"Wait" es esperar.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Cross',
      instructions: 'Di "Cross the bridge".',
      questions: [
        {
          id: 'q1',
          text: 'Cross the bridge',
          correctAnswer: 'Cross the bridge',
          explanation: 'Pronuncia la "o" de "cross" de forma abierta.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Polite imperative',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: '___ , please sit down.',
          correctAnswer: 'Please',
          explanation: 'Añadir "please" suaviza el imperativo.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Full direction imperative',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Go', 'straight', 'and', 'turn', 'right', 'at', 'the', 'bank', '.'],
          correctSentence: 'Go straight and turn right at the bank.',
          translation: 'Sigue recto y gira a la derecha en el banco.',
          hint: 'Usa "at the bank".',
          explanation: 'Combinación de dos instrucciones con "and".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u8-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Review: Prepositions',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I like to travel ___ bike.',
          options: ['on', 'by', 'in'],
          correctAnswer: 1,
          explanation: '"By bike" es la forma estándar.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Review: Train parts',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Wait for the train on the ___.',
          correctAnswer: 'platform',
          explanation: 'Esperamos en el andén (platform).'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Review: How to get to',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'do', 'I', 'get', 'to', 'the', 'station', '?'],
          correctSentence: 'How do I get to the station?',
          translation: '¿Cómo llego a la estación?',
          hint: 'Pregunta por el camino.',
          explanation: 'Pregunta esencial para viajeros.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Roundabout',
      instructions: 'Di "Go around the roundabout".',
      questions: [
        {
          id: 'q1',
          text: 'Go around the roundabout',
          correctAnswer: 'Go around the roundabout',
          explanation: 'La palabra "roundabout" tiene tres sílabas: ROUND-a-bout.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Transport Mix',
      instructions: 'Une el transporte con su lugar.',
      pairs: [
        { id: '1', left: 'Plane', right: 'Airport' },
        { id: '2', left: 'Ship', right: 'Port / Harbour' },
        { id: '3', left: 'Train', right: 'Station' },
        { id: '4', left: 'Bus', right: 'Bus stop' }
      ],
      explanation: 'Ubicaciones de cada transporte.'
    } as any
  },
  {
    id: 'a2-u8-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Review: Duration',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'It ___ one hour to get there.',
          options: ['takes', 'has', 'makes'],
          correctAnswer: 0,
          explanation: 'Usamos "takes" para expresar tiempo de duración.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Review: Ticket types',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I bought a ___ ticket because I am not coming back.',
          correctAnswer: 'single',
          explanation: '"Single ticket" es solo ida.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'hard',
    content: {
      title: 'Review: Direction review',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Go', 'past', 'the', 'supermarket', 'and', 'turn', 'left', '.'],
          correctSentence: 'Go past the supermarket and turn left.',
          translation: 'Pasa por delante del supermercado y gira a la izquierda.',
          hint: 'Usa "Go past".',
          explanation: 'Combinación de preposición de lugar e imperativo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u8-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Catch the bus',
      instructions: 'Di "I need to catch the bus".',
      questions: [
        {
          id: 'q1',
          text: 'I need to catch the bus',
          correctAnswer: 'I need to catch the bus',
          explanation: 'La "u" de "bus" es corta: /bʌs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u8-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Getting Around',
    topicName: 'Getting Around',
    difficulty: 'easy',
    content: {
      title: 'Final transport check',
      instructions: '¿Cuál va por el agua?',
      questions: [
        {
          id: 'q1',
          question: 'Which one travels on water?',
          options: ['Train', 'Ferry', 'Helicopter'],
          correctAnswer: 1,
          explanation: 'El ferry va por el agua.'
        }
      ]
    }
  }
];
