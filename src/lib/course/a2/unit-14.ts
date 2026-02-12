import { Exercise } from '@/lib/exercise-generator';

export const UNIT_14_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Digital Devices (1-10) ---
  {
    id: 'a2-u14-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dispositivo / Aparato',
          back: 'Device / Gadget',
          example: 'A smartphone is a versatile device.',
          pronunciation: '/dɪˈvaɪs/',
          explanation: 'Término general para aparatos electrónicos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Modern Gadgets',
      instructions: 'Une el dispositivo con su traducción.',
      pairs: [
        { id: '1', left: 'Headphones', right: 'Auriculares' },
        { id: '2', left: 'Tablet', right: 'Tableta' },
        { id: '3', left: 'Smartwatch', right: 'Reloj inteligente' },
        { id: '4', left: 'Laptop', right: 'Portátil' },
        { id: '5', left: 'Charger', right: 'Cargador' }
      ],
      explanation: 'Dispositivos de uso diario.'
    } as any
  },
  {
    id: 'a2-u14-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Device usage',
      instructions: '¿Para qué sirve?',
      questions: [
        {
          id: 'q1',
          question: 'I use my ___ to take photos and call people.',
          options: ['smartphone', 'printer', 'mouse'],
          correctAnswer: 0,
          explanation: 'El smartphone es para fotos y llamadas.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Low battery',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'My phone is dead. Can I borrow your ___?',
          correctAnswer: 'charger',
          explanation: 'Necesitas el cargador (charger) si el móvil no tiene batería.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'The latest tech',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'bought', ' a', 'new', 'laptop', 'last', 'week', '.'],
          correctSentence: 'I bought a new laptop last week.',
          translation: 'Compré un portátil nuevo la semana pasada.',
          hint: 'Usa el pasado de "buy".',
          explanation: 'Estructura simple de compra de tecnología.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pantalla',
          back: 'Screen',
          example: 'The screen on my tablet is broken.',
          pronunciation: '/skriːn/',
          explanation: 'La parte visual de un dispositivo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Input devices',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'You use a ___ to type on a computer.',
          options: ['keyboard', 'screen', 'speaker'],
          correctAnswer: 0,
          explanation: 'El teclado (keyboard) sirve para escribir.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Device',
      instructions: 'Di "This device is useful".',
      questions: [
        {
          id: 'q1',
          text: 'This device is useful',
          correctAnswer: 'This device is useful',
          explanation: 'Se pronuncia /dɪˈvaɪs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Volume',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I can\'t hear anything. Turn up the ___ .',
          correctAnswer: 'speakers',
          explanation: 'Los altavoces (speakers) emiten el sonido.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Touchscreen',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Does', 'your', 'computer', 'have', 'a', 'touchscreen', '?'],
          correctSentence: 'Does your computer have a touchscreen?',
          translation: '¿Tiene tu ordenador pantalla táctil?',
          hint: 'Empieza con "Does".',
          explanation: 'Pregunta sobre especificaciones técnicas.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Present Continuous for Future Plans (11-20) ---
  {
    id: 'a2-u14-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Planes futuros fijos',
          back: 'Future arrangements',
          example: 'I am meeting my boss tomorrow at 10.',
          pronunciation: '/n/a/',
          explanation: 'Usamos el Present Continuous para planes confirmados en el futuro.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Arrangement vs Fact',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'We ___ to London next Friday. We already have the tickets.',
          options: ['are flying', 'fly', 'flies'],
          correctAnswer: 0,
          explanation: 'Plan confirmado con billetes: Present Continuous.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e13',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Meeting someone',
      instructions: 'Completa con el tiempo futuro apropiado (continuous).',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (meet) John for coffee this afternoon.',
          correctAnswer: 'am meeting',
          explanation: 'Plan agendado.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e14',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Next week',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'are', 'having', 'a', 'party', 'next', 'Saturday', '.'],
          correctSentence: 'We are having a party next Saturday.',
          translation: 'Vamos a celebrar una fiesta el sábado que viene.',
          hint: 'Usa "having".',
          explanation: 'Uso de Present Continuous para eventos futuros organizados.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e15',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Now vs Future',
      instructions: '¿La frase indica el presente o el futuro?',
      pairs: [
        { id: '1', left: 'I am eating lunch now.', right: 'Present (Now)' },
        { id: '2', left: 'I am eating with Jane tomorrow.', right: 'Future Arrangement' },
        { id: '3', left: 'They are playing tennis later.', right: 'Future Arrangement' },
        { id: '4', left: 'Shh! They are playing tennis.', right: 'Present (Now)' }
      ],
      explanation: 'El contexto o el marcador temporal (tomorrow, later) indica si es futuro.'
    } as any
  },
  {
    id: 'a2-u14-e16',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Asking about plans',
      instructions: 'Elige la pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ anything special this weekend?',
          options: ['Are you doing', 'Do you do', 'Are you do'],
          correctAnswer: 0,
          explanation: 'Pregunta sobre planes para el fin de semana.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e17',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Tomorrow',
      instructions: 'Di "I am leaving tomorrow".',
      questions: [
        {
          id: 'q1',
          text: 'I am leaving tomorrow',
          correctAnswer: 'I am leaving tomorrow',
          explanation: 'Tomorrow se pronuncia /təˈmɒrəʊ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e18',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Negative plans',
      instructions: 'Completa en negativo.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (not/go) to the cinema tonight because I\'m tired.',
          correctAnswer: "am not going",
          explanation: 'Plan cancelado o inexistente.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Specific time',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'What time ___ the meeting starting tomorrow?',
          options: ['is', 'are', 'does'],
          correctAnswer: 0,
          explanation: 'Sujeto "the meeting" (it), usamos "is".'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Arranging a call',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'calling', 'you', 'on', 'Skype', 'later', 'today', '.'],
          correctSentence: 'I am calling you on Skype later today.',
          translation: 'Te llamaré por Skype más tarde hoy.',
          hint: 'Usa "later today".',
          explanation: 'Combinación de comunicación y planes futuros.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Using Apps & Social Media (21-30) ---
  {
    id: 'a2-u14-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Subir (a internet)',
          back: 'To upload',
          example: 'I am uploading the photos to Instagram.',
          pronunciation: '/ˌʌpˈləʊd/',
          explanation: 'Enviar datos desde tu dispositivo a la red.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Online Actions',
      instructions: 'Une el verbo con su traducción.',
      pairs: [
        { id: '1', left: 'Download', right: 'Descargar' },
        { id: '2', left: 'Share', right: 'Compartir' },
        { id: '3', left: 'Search', right: 'Buscar' },
        { id: '4', left: 'Follow', right: 'Seguir' }
      ],
      explanation: 'Acciones comunes en redes sociales.'
    } as any
  },
  {
    id: 'a2-u14-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Social Media',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I always ___ my friends\' posts on Facebook.',
          options: ['like', 'want', 'hope'],
          correctAnswer: 0,
          explanation: 'Dar a "me gusta" es "to like".'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Passwords',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Don\'t tell anyone your ___ !',
          correctAnswer: 'password',
          explanation: 'La contraseña (password) es secreta.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'App usage',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'use', 'this', 'app', 'to', 'learn', 'English', '.'],
          correctSentence: 'I use this app to learn English.',
          translation: 'Uso esta aplicación para aprender inglés.',
          hint: 'Usa "to learn".',
          explanation: 'Expresar propósito con "to + infinitivo".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Enlace',
          back: 'Link',
          example: 'Click on the link to open the website.',
          pronunciation: '/lɪŋk/',
          explanation: 'Dirección web en la que se puede hacer clic.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Files',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Can you ___ this document to the email?',
          options: ['attach', 'connect', 'button'],
          correctAnswer: 0,
          explanation: '"Attach" significa adjuntar.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Download',
      instructions: 'Di "I am downloading a movie".',
      questions: [
        {
          id: 'q1',
          text: 'I am downloading a movie',
          correctAnswer: 'I am downloading a movie',
          explanation: 'Se pronuncia /ˈdaʊnləʊdɪŋ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Wireless',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Is there free ___ in this café?',
          correctAnswer: 'Wi-Fi',
          explanation: 'Conexión inalámbrica.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Deleting history',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['You', 'should', 'delete', 'your', 'browsing', 'history', '.'],
          correctSentence: 'You should delete your browsing history.',
          translation: 'Deberías borrar tu historial de navegación.',
          hint: 'Usa "should".',
          explanation: 'Consejo sobre privacidad digital.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Common Problems & Solutions (31-40) ---
  {
    id: 'a2-u14-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'No funciona / Estropeado',
          back: 'Out of order / Broken',
          example: 'The printer is out of order.',
          pronunciation: '/ˌaʊt əv ˈɔːdə/',
          explanation: 'Cuando algo no funciona correctamente.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Tech Problems',
      instructions: 'Une el problema con la solución.',
      pairs: [
        { id: '1', left: 'Phone is frozen', right: 'Restart it' },
        { id: '2', left: 'Low battery', right: 'Charge it' },
        { id: '3', left: 'No internet', right: 'Check Wi-Fi' },
        { id: '4', left: 'Screen is dirty', right: 'Clean it' }
      ],
      explanation: 'Soluciones básicas a problemas tecnológicos.'
    } as any
  },
  {
    id: 'a2-u14-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Cracked screen',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I dropped my phone and the screen is ___ .',
          options: ['cracked', 'frozen', 'empty'],
          correctAnswer: 0,
          explanation: '"Cracked" significa agrietada.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Signal',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I can\'t call you. I don\'t have any ___ here.',
          correctAnswer: 'signal',
          explanation: 'La cobertura o señal (signal).'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Restarting',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Try', 'turning', 'it', 'off', 'and', 'on', 'again', '.'],
          correctSentence: 'Try turning it off and on again.',
          translation: 'Intenta apagarlo y encenderlo de nuevo.',
          hint: 'Usa "turning".',
          explanation: 'La solución universal en informática.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Almacenamiento',
          back: 'Storage / Space',
          example: 'My phone is full. I need more storage.',
          pronunciation: '/ˈstɔːrɪdʒ/',
          explanation: 'Capacidad de guardar archivos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Updating',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'My computer is very slow. It needs an ___ .',
          options: ['update', 'appointment', 'invitation'],
          correctAnswer: 0,
          explanation: '"Update" es una actualización.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Broken',
      instructions: 'Di "My tablet is broken".',
      questions: [
        {
          id: 'q1',
          text: 'My tablet is broken',
          correctAnswer: 'My tablet is broken',
          explanation: 'Se pronuncia /ˈbrəʊkən/.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Spam',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Check your ___ folder for the email.',
          correctAnswer: 'spam',
          explanation: 'La carpeta de correo no deseado.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Future repair',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'technician', 'is', 'fixing', 'it', 'next', 'Monday', '.'],
          correctSentence: 'The technician is fixing it next Monday.',
          translation: 'El técnico lo va a arreglar el lunes que viene.',
          hint: 'Present Continuous para futuro.',
          explanation: 'Uso de plan futuro para una reparación.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u14-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Review: Future plans',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'Are you ___ to the conference tomorrow?',
          options: ['coming', 'come', 'comes'],
          correctAnswer: 0,
          explanation: 'Pregunta sobre un plan futuro.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Review: Mouse',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I use the ___ to move the cursor on the screen.',
          correctAnswer: 'mouse',
          explanation: 'El ratón del ordenador.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Review: Continuous',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'are', 'not', 'using', 'our', 'phones', 'during', 'dinner', '.'],
          correctSentence: 'We are not using our phones during dinner.',
          translation: 'No estamos usando nuestros teléfonos durante la cena.',
          hint: 'Usa "during".',
          explanation: 'Acción en progreso (o regla actual).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Keyboard',
      instructions: 'Di "My keyboard is dirty".',
      questions: [
        {
          id: 'q1',
          text: 'My keyboard is dirty',
          correctAnswer: 'My keyboard is dirty',
          explanation: 'Se pronuncia /ˈkiːbɔːd/.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Mix: Tech',
      instructions: 'Une.',
      pairs: [
        { id: '1', left: 'Save', right: 'Guardar' },
        { id: '2', left: 'Print', right: 'Imprimir' },
        { id: '3', left: 'Copy', right: 'Copiar' },
        { id: '4', left: 'Paste', right: 'Pegar' }
      ],
      explanation: 'Comandos básicos de edición.'
    } as any
  },
  {
    id: 'a2-u14-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Review: Laptop vs Desktop',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'A computer that you can carry is a ___ .',
          options: ['laptop', 'desktop', 'screen'],
          correctAnswer: 0,
          explanation: 'Portátil se dice "laptop".'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Review: Social Media',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ a video on YouTube yesterday.',
          correctAnswer: 'uploaded',
          explanation: 'Subí (upload) en pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'hard',
    content: {
      title: 'Review: Arrangement',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'is', 'starting', 'her', 'new', 'job', 'on', 'Monday', '.'],
          correctSentence: 'She is starting her new job on Monday.',
          translation: 'Ella empieza su nuevo trabajo el lunes.',
          hint: 'Plan futuro fijo.',
          explanation: 'Uso típico para fechas de inicio.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u14-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Message',
      instructions: 'Di "I sent you a message".',
      questions: [
        {
          id: 'q1',
          text: 'I sent you a message',
          correctAnswer: 'I sent you a message',
          explanation: 'Se pronuncia /ˈmesɪdʒ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u14-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Technology & Communication',
    topicName: 'Technology & Communication',
    difficulty: 'easy',
    content: {
      title: 'Final check',
      instructions: '¿Cómo nos conectamos sin cables?',
      questions: [
        {
          id: 'q1',
          question: 'Most devices connect to the internet via ___ .',
          options: ['Wi-Fi', 'radio', 'battery'],
          correctAnswer: 0,
          explanation: 'Wi-Fi es el estándar de conexión inalámbrica.'
        }
      ]
    }
  }
];
