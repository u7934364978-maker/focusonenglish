import { Exercise } from '@/lib/exercise-generator';

export const UNIT_5_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Hobby Vocabulary (1-10) ---
  {
    id: 'a2-u5-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tiempo libre / Ocio',
          back: 'Leisure time',
          example: 'What do you do in your leisure time?',
          pronunciation: '/ˈleʒə taɪm/',
          explanation: 'Término formal para "free time".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Common Hobbies',
      instructions: 'Une el hobby con su traducción.',
      pairs: [
        { id: '1', left: 'Drawing', right: 'Dibujo' },
        { id: '2', left: 'Gardening', right: 'Jardinería' },
        { id: '3', left: 'Reading', right: 'Lectura' },
        { id: '4', left: 'Hiking', right: 'Senderismo' },
        { id: '5', left: 'Cooking', right: 'Cocina' }
      ],
      explanation: 'Hobbies comunes.'
    } as any
  },
  {
    id: 'a2-u5-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Go vs Play vs Do',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'I often ___ hiking in the mountains.',
          options: ['go', 'play', 'do'],
          correctAnswer: 0,
          explanation: 'Usamos "go" para actividades que terminan en "-ing".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Hobbies',
      instructions: 'Completa con la actividad.',
      questions: [
        {
          id: 'q1',
          text: 'I love ___ books about history.',
          correctAnswer: 'reading',
          explanation: 'La actividad de leer libros es "reading".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'My favorite hobby',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'favorite', 'hobby', 'is', 'swimming', '.'],
          correctSentence: 'My favorite hobby is swimming.',
          translation: 'Mi hobby favorito es la natación.',
          hint: 'Empieza con "My".',
          explanation: 'Estructura simple para definir una preferencia.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ajedrez',
          back: 'Chess',
          example: 'He plays chess every Sunday.',
          pronunciation: '/tʃes/',
          explanation: 'Un juego de mesa táctico.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hobby verbs',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Do you ___ any musical instrument?',
          options: ['play', 'do', 'make'],
          correctAnswer: 0,
          explanation: 'Usamos "play" para instrumentos musicales y juegos competitivos.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Gardening',
      instructions: 'Di "Gardening".',
      questions: [
        {
          id: 'q1',
          text: 'Gardening',
          correctAnswer: 'Gardening',
          explanation: 'Asegúrate de pronunciar la "g" final suavemente.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hobby collection',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'He ___ stamps as a hobby.',
          correctAnswer: 'collects',
          explanation: 'Coleccionar objetos es "to collect".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hobby frequency',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'usually', 'go', 'cycling', 'at', 'the', 'weekend', '.'],
          correctSentence: 'I usually go cycling at the weekend.',
          translation: 'Suelo ir en bicicleta el fin de semana.',
          hint: 'Cycling es el hobby.',
          explanation: 'Uso de "go" + actividad con "-ing".',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Like, Love, Hate + -ing (11-20) ---
  {
    id: 'a2-u5-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Encantar / Amar',
          back: 'To love',
          example: 'I love painting landscapes.',
          pronunciation: '/lʌv/',
          explanation: 'Expresa una preferencia muy fuerte.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e12',
    type: 'matching',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Preferences',
      instructions: 'Une el verbo con su intensidad.',
      pairs: [
        { id: '1', left: 'Love', right: '+++ (Encantar)' },
        { id: '2', left: 'Like', right: '+ (Gustar)' },
        { id: '3', left: 'Don\'t mind', right: '0 (No importar)' },
        { id: '4', left: 'Don\'t like', right: '- (No gustar)' },
        { id: '5', left: 'Hate', right: '--- (Odiar)' }
      ],
      explanation: 'Grados de preferencia.'
    } as any
  },
  {
    id: 'a2-u5-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Verb patterns: -ing',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I like ___ video games.',
          options: ['play', 'playing', 'to playing'],
          correctAnswer: 1,
          explanation: 'Tras verbos de preferencia (like, love, hate), el siguiente verbo suele ir en "-ing".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Preferences negative',
      instructions: 'Completa con la forma correcta.',
      questions: [
        {
          id: 'q1',
          text: 'She doesn\'t like ___ the dishes. (wash)',
          correctAnswer: 'washing',
          explanation: 'Incluso en negativa, mantenemos el patrón del verbo en "-ing".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hate + -ing',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'hate', 'getting', 'up', 'early', '.'],
          correctSentence: 'I hate getting up early.',
          translation: 'Odio levantarme temprano.',
          hint: 'Empieza con "I".',
          explanation: 'Estructura: Sujeto + Hate + Verbo-ing + Adverbio.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e16',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'No me importa',
          back: "I don't mind",
          example: "I don't mind doing chores.",
          pronunciation: '/aɪ dəʊnt maɪnd/',
          explanation: 'Indica que algo no te molesta pero tampoco te encanta.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Enjoy',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We enjoy ___ to the park.',
          options: ['go', 'going', 'to go'],
          correctAnswer: 1,
          explanation: 'El verbo "enjoy" también sigue el patrón de "-ing".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e18',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Don\'t mind',
      instructions: 'Di "I don\'t mind waiting".',
      questions: [
        {
          id: 'q1',
          text: "I don't mind waiting",
          correctAnswer: "I don't mind waiting",
          explanation: 'La palabra "mind" rima con "find".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Mixed Preferences',
      instructions: 'Completa la oración.',
      questions: [
        {
          id: 'q1',
          text: 'My brother loves ___ football on TV. (watch)',
          correctAnswer: 'watching',
          explanation: 'Usamos "-ing" tras "loves".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Asking about preferences',
      instructions: 'Ordena para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'like', 'taking', 'photos', '?'],
          correctSentence: 'Do you like taking photos?',
          translation: '¿Te gusta tomar fotos?',
          hint: 'Empieza con "Do".',
          explanation: 'Estructura de pregunta con verbo de preferencia.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Social Hobbies (21-30) ---
  {
    id: 'a2-u5-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Salir (con amigos)',
          back: 'To go out',
          example: 'I go out with my friends on Fridays.',
          pronunciation: '/ɡəʊ aʊt/',
          explanation: 'Actividad social fuera de casa.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Socializing',
      instructions: 'Une la actividad social con su traducción.',
      pairs: [
        { id: '1', left: 'Hang out', right: 'Pasar el rato / Quedar' },
        { id: '2', left: 'Chat online', right: 'Chatear por internet' },
        { id: '3', left: 'Join a club', right: 'Unirse a un club' },
        { id: '4', left: 'Go to a party', right: 'Ir a una fiesta' }
      ],
      explanation: 'Actividades para socializar.'
    } as any
  },
  {
    id: 'a2-u5-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hang out',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We usually ___ out at the shopping mall.',
          options: ['hang', 'go', 'play'],
          correctAnswer: 0,
          explanation: '"Hang out" es pasar tiempo de forma relajada con alguien.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Joining a club',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I want to ___ a photography club.',
          correctAnswer: 'join',
          explanation: '"Join" se usa para hacerse miembro de un grupo o club.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Social routine',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'often', 'hang', 'out', 'after', 'school', '.'],
          correctSentence: 'We often hang out after school.',
          translation: 'A menudo pasamos el rato después de la escuela.',
          hint: 'Adverbio de frecuencia antes del verbo.',
          explanation: 'Estructura social común.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hacer senderismo',
          back: 'To go hiking',
          example: 'We go hiking every spring.',
          pronunciation: '/ˈhaɪkɪŋ/',
          explanation: 'Caminar por la naturaleza o montañas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Online hobbies',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I like ___ social media in my free time.',
          options: ['scrolling', 'watching', 'doing'],
          correctAnswer: 0,
          explanation: '"Scrolling" es el acto de deslizar por redes sociales.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Hang out',
      instructions: 'Di "Let\'s hang out".',
      questions: [
        {
          id: 'q1',
          text: "Let's hang out",
          correctAnswer: "Let's hang out",
          explanation: 'Une la "g" final de "hang" con la "o" de "out".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Social preference',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I enjoy ___ out with my best friend. (go)',
          correctAnswer: 'going',
          explanation: 'Usamos "-ing" tras "enjoy".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Hobby invitation',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['Would', 'you', 'like', 'to', 'go', 'out', 'tonight', '?'],
          correctSentence: 'Would you like to go out tonight?',
          translation: '¿Te gustaría salir esta noche?',
          hint: 'Empieza con "Would".',
          explanation: 'Usamos "Would you like + to + infinitivo" para invitaciones.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Adjectives to describe hobbies (31-40) ---
  {
    id: 'a2-u5-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Relajante',
          back: 'Relaxing',
          example: 'Reading is very relaxing.',
          pronunciation: '/rɪˈlæksɪŋ/',
          explanation: 'Algo que ayuda a descansar y reducir el estrés.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Hobby Descriptions',
      instructions: 'Une el adjetivo con su significado.',
      pairs: [
        { id: '1', left: 'Exciting', right: 'Emocionante' },
        { id: '2', left: 'Boring', right: 'Aburrido' },
        { id: '3', left: 'Creative', right: 'Creativo' },
        { id: '4', left: 'Expensive', right: 'Caro' },
        { id: '5', left: 'Cheap', right: 'Barato' }
      ],
      explanation: 'Adjetivos para describir actividades.'
    } as any
  },
  {
    id: 'a2-u5-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Why do you like it?',
      instructions: 'Elige el adjetivo lógico.',
      questions: [
        {
          id: 'q1',
          question: 'I love mountain climbing because it is ___.',
          options: ['boring', 'exciting', 'easy'],
          correctAnswer: 1,
          explanation: 'La escalada suele ser emocionante (exciting).'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Boring hobbies',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I hate fishing. I think it is very ___.',
          correctAnswer: 'boring',
          explanation: 'Si odias algo, probablemente te parezca aburrido (boring).'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hobby opinion',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Playing', 'the', 'piano', 'is', 'quite', 'difficult', '.'],
          correctSentence: 'Playing the piano is quite difficult.',
          translation: 'Tocar el piano es bastante difícil.',
          hint: 'Bastante es "quite".',
          explanation: 'Usamos el gerundio (Playing) como sujeto de la oración.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sano / Saludable',
          back: 'Healthy',
          example: 'Sport is a healthy hobby.',
          pronunciation: '/ˈhelθi/',
          explanation: 'Bueno para la salud física y mental.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Creative hobbies',
      instructions: '¿Cuál es un hobby creativo?',
      questions: [
        {
          id: 'q1',
          question: 'Which hobby is creative?',
          options: ['Watching TV', 'Painting', 'Sleeping'],
          correctAnswer: 1,
          explanation: 'Pintar (painting) es una actividad creativa.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Exciting',
      instructions: 'Di "It is very exciting".',
      questions: [
        {
          id: 'q1',
          text: 'It is very exciting',
          correctAnswer: 'It is very exciting',
          explanation: 'El acento va en la segunda sílaba: ex-CI-ting.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Expensive vs Cheap',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Sailing is very ___. You need a lot of money for a boat.',
          correctAnswer: 'expensive',
          explanation: 'Si requiere mucho dinero, es caro (expensive).'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Describing a hobby',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Swimming', 'is', 'a', 'very', 'healthy', 'activity', '.'],
          correctSentence: 'Swimming is a very healthy activity.',
          translation: 'La natación es una actividad muy saludable.',
          hint: 'Usa "very healthy".',
          explanation: 'Estructura descriptiva completa.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u5-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Review: Hobby verbs',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'He ___ karate twice a week.',
          options: ['goes', 'plays', 'does'],
          correctAnswer: 2,
          explanation: 'Usamos "do" para artes marciales y ejercicios individuales sin pelota.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Review: Like + -ing',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Does your sister like ___? (cook)',
          correctAnswer: 'cooking',
          explanation: 'Uso de "-ing" en la pregunta tras "like".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Review: Opinions',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'think', 'playing', 'chess', 'is', 'boring', '.'],
          correctSentence: 'I think playing chess is boring.',
          translation: 'Pienso que jugar al ajedrez es aburrido.',
          hint: 'Empieza con "I think".',
          explanation: 'Introducción de una opinión personal.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Leisure',
      instructions: 'Di "What do you do in your leisure time?".',
      questions: [
        {
          id: 'q1',
          text: 'What do you do in your leisure time?',
          correctAnswer: 'What do you do in your leisure time?',
          explanation: 'Recuerda que "leisure" se pronuncia /ˈleʒə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hobby verbs mix',
      instructions: 'Une el verbo con el hobby.',
      pairs: [
        { id: '1', left: 'Play', right: 'Drums' },
        { id: '2', left: 'Go', right: 'Jogging' },
        { id: '3', left: 'Do', right: 'Yoga' },
        { id: '4', left: 'Collect', right: 'Coins' }
      ],
      explanation: 'Verbos adecuados para cada actividad.'
    } as any
  },
  {
    id: 'a2-u5-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Review: Don\'t mind',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: "I don't mind ___ early on Saturdays.",
          options: ['working', 'work', 'to work'],
          correctAnswer: 0,
          explanation: '"Don\'t mind" va seguido de verbo en "-ing".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Review: Enjoy',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'We really enjoy ___ to music. (listen)',
          correctAnswer: 'listening',
          explanation: '"Enjoy" + "-ing".'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Review: Multi-hobby',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'likes', 'cooking', 'and', 'listening', 'to', 'music', '.'],
          correctSentence: 'He likes cooking and listening to music.',
          translation: 'Le gusta cocinar y escuchar música.',
          hint: 'Usa "and" para unir.',
          explanation: 'Cuando hay dos hobbies, ambos mantienen el patrón "-ing".',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u5-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Reading',
      instructions: 'Di "I love reading novels".',
      questions: [
        {
          id: 'q1',
          text: 'I love reading novels',
          correctAnswer: 'I love reading novels',
          explanation: 'La "ea" en "reading" es una "i" larga.'
        }
      ]
    }
  },
  {
    id: 'a2-u5-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Free Time & Hobbies',
    topicName: 'Free Time & Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Final hobby check',
      instructions: '¿Qué actividad es social?',
      questions: [
        {
          id: 'q1',
          question: 'Which one is a social activity?',
          options: ['Reading alone', 'Going to a party', 'Sleeping'],
          correctAnswer: 1,
          explanation: 'Ir a una fiesta es una actividad social.'
        }
      ]
    }
  }
];
