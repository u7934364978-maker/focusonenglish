import { Exercise } from '@/lib/exercise-generator';

export const UNIT_25_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Biographies & Fame (1-12) ---
  {
    id: 'a2-u25-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Famoso',
          back: 'Famous',
          example: 'He is a very famous actor.',
          pronunciation: '/ˈfeɪməs/',
          explanation: 'Conocido por muchas personas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Famous Roles',
      instructions: 'Une el rol con su traducción.',
      pairs: [
        { id: '1', left: 'Writer', right: 'Escritor' },
        { id: '2', left: 'Scientist', right: 'Científico' },
        { id: '3', left: 'Artist', right: 'Artista' },
        { id: '4', left: 'Leader', right: 'Líder' },
        { id: '5', left: 'Athlete', right: 'Atleta / Deportista' }
      ],
      explanation: 'Diferentes profesiones por las que alguien puede ser famoso.'
    } as any
  },
  {
    id: 'a2-u25-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Accomplishments',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'She ___ the Nobel Prize in 1920.',
          options: ['won', 'did', 'made'],
          correctAnswer: 0,
          explanation: 'Ganar un premio es "win" (pasado: won).'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Inventions',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Alexander Graham Bell ___ the telephone.',
          correctAnswer: 'invented',
          explanation: '"Invented" significa inventó.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Einstein',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Albert', 'Einstein', 'was', 'a', 'brilliant', 'scientist', '.'],
          correctSentence: 'Albert Einstein was a brilliant scientist.',
          translation: 'Albert Einstein fue un científico brillante.',
          hint: 'Usa "was".',
          explanation: 'Descripción básica de una persona famosa en pasado.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Logro / Éxito',
          back: 'Achievement / Success',
          example: 'Landing on the moon was a great achievement.',
          pronunciation: '/əˈtʃiːvmənt/',
          explanation: 'Algo importante conseguido con esfuerzo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Discoveries',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Christopher Columbus ___ America in 1492.',
          options: ['discovered', 'invented', 'created'],
          correctAnswer: 0,
          explanation: '"Discovered" es descubrió.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Famous',
      instructions: 'Di "She is famous".',
      questions: [
        {
          id: 'q1',
          text: 'She is famous',
          correctAnswer: 'She is famous',
          explanation: 'Pronuncia "famous" como /ˈfeɪməs/.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Influence',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'His work had a great ___ on modern art.',
          correctAnswer: 'influence',
          explanation: '"Influence" es influencia.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Famous quote',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'is', 'one', 'of', 'the', 'best', 'writers', '.'],
          correctSentence: 'He is one of the best writers.',
          translation: 'Él es uno de los mejores escritores.',
          hint: 'Usa "one of the best".',
          explanation: 'Superlativo para describir fama.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Nouns from Verbs',
      instructions: 'Une el verbo con el nombre de la persona.',
      pairs: [
        { id: '1', left: 'Write', right: 'Writer' },
        { id: '2', left: 'Paint', right: 'Painter' },
        { id: '3', left: 'Science', right: 'Scientist' },
        { id: '4', left: 'Direct', right: 'Director' }
      ],
      explanation: 'Formación de profesiones.'
    } as any
  },
  {
    id: 'a2-u25-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'Legacy',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Shakespeare’s ___ still exist today.',
          options: ['plays', 'playings', 'playing'],
          correctAnswer: 0,
          explanation: '"Plays" son las obras de teatro.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Past Simple vs Present Perfect (13-24) ---
  {
    id: 'a2-u25-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pasado Simple vs Presente Perfecto',
          back: 'Finished vs Unfinished time',
          example: 'I went to Rome in 2010. / I have been to Rome.',
          pronunciation: '/n/a/',
          explanation: 'Usamos Past Simple para tiempos terminados y Present Perfect para experiencias sin fecha exacta.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Time markers',
      instructions: 'Une el marcador con el tiempo correcto.',
      pairs: [
        { id: '1', left: 'Yesterday / In 1990', right: 'Past Simple' },
        { id: '2', left: 'Ever / Never', right: 'Present Perfect' },
        { id: '3', left: 'Last week', right: 'Past Simple' },
        { id: '4', left: 'So far / Just', right: 'Present Perfect' }
      ],
      explanation: 'Palabras clave que nos ayudan a elegir el tiempo verbal.'
    } as any
  },
  {
    id: 'a2-u25-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Choosing the tense',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Picasso ___ many paintings in his life.',
          options: ['painted', 'has painted', 'paints'],
          correctAnswer: 0,
          explanation: 'Usamos Past Simple porque la vida de Picasso ya terminó.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Ongoing experience',
      instructions: 'Completa con Present Perfect.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ (read) three books by this author so far.',
          correctAnswer: 'have read',
          explanation: 'Acción que continúa en el presente (so far).'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Historical event',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Man', 'walked', 'on', 'the', 'moon', 'in', '1969', '.'],
          correctSentence: 'Man walked on the moon in 1969.',
          translation: 'El hombre caminó sobre la luna en 1969.',
          hint: 'Usa Past Simple.',
          explanation: 'Fecha específica = Past Simple.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Acabo de...',
          back: 'I have just...',
          example: 'I have just finished the book.',
          pronunciation: '/dʒʌst/',
          explanation: '"Just" con Present Perfect indica una acción muy reciente.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Recent news',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The famous singer ___ a new album today.',
          options: ['has released', 'released', 'releases'],
          correctAnswer: 0,
          explanation: 'Noticia reciente sin fecha exacta -> Present Perfect.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Participio',
      instructions: 'Di "I have seen him".',
      questions: [
        {
          id: 'q1',
          text: 'I have seen him',
          correctAnswer: 'I have seen him',
          explanation: 'Pronuncia "seen" con una "i" larga /siːn/.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'Specific time',
      instructions: 'Completa con Past Simple.',
      questions: [
        {
          id: 'q1',
          text: 'The actor ___ (die) two years ago.',
          correctAnswer: 'died',
          explanation: '"Ago" siempre requiere Past Simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Ever question',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Have', 'you', 'ever', 'met', 'anyone', 'famous', '?'],
          correctSentence: 'Have you ever met anyone famous?',
          translation: '¿Has conocido alguna vez a alguien famoso?',
          hint: 'Usa "ever".',
          explanation: 'Pregunta sobre experiencias vitales.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Tense contrast',
      instructions: 'Une la frase con el tiempo correcto.',
      pairs: [
        { id: '1', left: 'I met him in 2005', right: 'Past Simple' },
        { id: '2', left: 'I have met him twice', right: 'Present Perfect' },
        { id: '3', left: 'He lived here last year', right: 'Past Simple' },
        { id: '4', left: 'He has lived here since May', right: 'Present Perfect' }
      ],
      explanation: 'Diferenciación de uso por contexto temporal.'
    } as any
  },
  {
    id: 'a2-u25-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'Grammar challenge',
      instructions: '¿Cuál es correcta?',
      questions: [
        {
          id: 'q1',
          question: '___ you ___ his new movie yesterday?',
          options: ['Did / see', 'Have / seen', 'Did / seen'],
          correctAnswer: 0,
          explanation: '"Yesterday" obliga al uso de Past Simple (Did + base verb).'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Describing Characters (25-36) ---
  {
    id: 'a2-u25-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Talentoso',
          back: 'Talented',
          example: 'She is a very talented musician.',
          pronunciation: '/ˈtæləntɪd/',
          explanation: 'Tener una habilidad natural para algo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Personal Qualities',
      instructions: 'Une el adjetivo con su traducción.',
      pairs: [
        { id: '1', left: 'Brave', right: 'Valiente' },
        { id: '2', left: 'Intelligent', right: 'Inteligente' },
        { id: '3', left: 'Creative', right: 'Creativo' },
        { id: '4', left: 'Kind', right: 'Amable' },
        { id: '5', left: 'Ambitious', right: 'Ambicioso' }
      ],
      explanation: 'Adjetivos para describir a personas destacadas.'
    } as any
  },
  {
    id: 'a2-u25-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Reputation',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'He is ___ for his charity work.',
          options: ['well-known', 'famously', 'know'],
          correctAnswer: 0,
          explanation: '"Well-known" es un sinónimo de famoso.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Hard work',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Successful people often work very ___ .',
          correctAnswer: 'hard',
          explanation: '"Work hard" es trabajar duro.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Motivation',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['His', 'life', 'story', 'is', 'very', 'inspiring', '.'],
          correctSentence: 'His life story is very inspiring.',
          translation: 'La historia de su vida es muy inspiradora.',
          hint: 'Usa "inspiring".',
          explanation: '"Inspiring" describe algo que nos motiva.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Poderoso',
          back: 'Powerful',
          example: 'She is a powerful world leader.',
          pronunciation: '/ˈpaʊəfəl/',
          explanation: 'Que tiene mucho poder o influencia.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Creativity',
      instructions: 'Elige el adjetivo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'She came up with a very ___ solution.',
          options: ['creative', 'creator', 'creatively'],
          correctAnswer: 0,
          explanation: '"Creative" describe la solución.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Brilliant',
      instructions: 'Di "He is a brilliant artist".',
      questions: [
        {
          id: 'q1',
          text: 'He is a brilliant artist',
          correctAnswer: 'He is a brilliant artist',
          explanation: 'Pronuncia "brilliant" como /ˈbrɪljənt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Courage',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'You need to be ___ to explore new lands.',
          correctAnswer: 'brave',
          explanation: '"Brave" es valiente.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Popularity',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Is', 'he', 'still', 'popular', 'today', '?'],
          correctSentence: 'Is he still popular today?',
          translation: '¿Sigue siendo popular hoy en día?',
          hint: 'Pregunta.',
          explanation: '"Popular" significa que gusta a mucha gente.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Character Mix',
      instructions: 'Une el adjetivo con su descripción.',
      pairs: [
        { id: '1', left: 'Ambitious', right: 'Wanting to be successful' },
        { id: '2', left: 'Generous', right: 'Giving money or time to others' },
        { id: '3', left: 'Wise', right: 'Having experience and knowledge' },
        { id: '4', left: 'Determined', right: 'Not giving up easily' }
      ],
      explanation: 'Vocabulario de rasgos de personalidad.'
    } as any
  },
  {
    id: 'a2-u25-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'High Status',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'She is a ___ figure in the history of science.',
          options: ['leading', 'leader', 'led'],
          correctAnswer: 0,
          explanation: '"Leading figure" es una figura destacada.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Fame & Media (37-45) ---
  {
    id: 'a2-u25-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Entrevista',
          back: 'Interview',
          example: 'I watched an interview with the president.',
          pronunciation: '/ˈɪntəvjuː/',
          explanation: 'Una charla donde se hacen preguntas a alguien famoso.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'The News',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The actor’s name is in all the ___ today.',
          options: ['headlines', 'heads', 'headers'],
          correctAnswer: 0,
          explanation: '"Headlines" son los titulares de las noticias.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Fans',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'There was a huge ___ waiting outside the theater.',
          correctAnswer: 'crowd',
          explanation: '"Crowd" es una multitud.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Private life',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Famous', 'people', 'don’t', 'have', 'much', 'privacy', '.'],
          correctSentence: 'Famous people don’t have much privacy.',
          translation: 'La gente famosa no tiene mucha privacidad.',
          hint: 'Usa "privacy".',
          explanation: '"Privacy" es privacidad.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Media Words',
      instructions: 'Une el concepto con su descripción.',
      pairs: [
        { id: '1', left: 'Paparazzi', right: 'Photographers who follow famous people' },
        { id: '2', left: 'Autograph', right: 'A famous person’s signature' },
        { id: '3', left: 'Fan club', right: 'A group of people who love a star' },
        { id: '4', left: 'Social media', right: 'Where stars post updates' }
      ],
      explanation: 'Vocabulario del mundo de la fama.'
    } as any
  },
  {
    id: 'a2-u25-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'The Show',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The actress walked down the ___ carpet.',
          options: ['red', 'blue', 'gold'],
          correctAnswer: 0,
          explanation: '"Red carpet" es la alfombra roja.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Interview',
      instructions: 'Di "An exclusive interview".',
      questions: [
        {
          id: 'q1',
          text: 'An exclusive interview',
          correctAnswer: 'An exclusive interview',
          explanation: 'Pronuncia "exclusive" como /ɪkˈskluːsɪv/.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'Reputation loss',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The scandal ruined his ___ .',
          correctAnswer: 'reputation',
          explanation: '"Reputation" es reputación.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'Fans online',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'has', 'millions', 'of', 'followers', 'on', 'Instagram', '.'],
          correctSentence: 'She has millions of followers on Instagram.',
          translation: 'Ella tiene millones de seguidores en Instagram.',
          hint: 'Usa "followers".',
          explanation: '"Followers" son los seguidores.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u25-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Newton ___ the law of gravity.',
          options: ['discovered', 'has discovered', 'discovers'],
          correctAnswer: 0,
          explanation: 'Evento histórico pasado = Past Simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Accomplishment review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Winning the Oscar was her greatest ___ .',
          correctAnswer: 'achievement',
          explanation: '"Achievement" es logro.'
        }
      ]
    }
  },
  {
    id: 'a2-u25-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Recent event review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'have', 'never', 'seen', 'that', 'painter’s', 'work', '.'],
          correctSentence: 'I have never seen that painter’s work.',
          translation: 'Nunca he visto la obra de ese pintor.',
          hint: 'Present Perfect.',
          explanation: 'Experiencia vital negativa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u25-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'medium',
    content: {
      title: 'Fame Review',
      instructions: 'Une el personaje con su área.',
      pairs: [
        { id: '1', left: 'Marie Curie', right: 'Science' },
        { id: '2', left: 'Leonardo da Vinci', right: 'Art' },
        { id: '3', left: 'Nelson Mandela', right: 'Leadership' },
        { id: '4', left: 'Usain Bolt', right: 'Sports' }
      ],
      explanation: 'Personajes históricos y sus campos.'
    } as any
  },
  {
    id: 'a2-u25-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Famous People',
    topicName: 'Famous People',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ you ___ to the new song ___ ?',
          options: ['Have / listened / yet', 'Did / listen / yet', 'Have / listen / already'],
          correctAnswer: 0,
          explanation: 'Pregunta sobre acción reciente: Present Perfect + yet.'
        }
      ]
    }
  }
];
