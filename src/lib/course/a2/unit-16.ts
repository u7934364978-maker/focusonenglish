import { Exercise } from '@/lib/exercise-generator';

export const UNIT_16_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Cinema & Films (1-12) ---
  {
    id: 'a2-u16-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Película de terror',
          back: 'Horror film',
          example: 'I don’t like watching horror films alone.',
          pronunciation: '/ˈhɒrə fɪlm/',
          explanation: 'Un género de cine que busca asustar.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Movie Genres',
      instructions: 'Une el género con su traducción.',
      pairs: [
        { id: '1', left: 'Comedy', right: 'Comedia' },
        { id: '2', left: 'Sci-fi', right: 'Ciencia ficción' },
        { id: '3', left: 'Thriller', right: 'Suspense' },
        { id: '4', left: 'Cartoon', right: 'Dibujos animados' },
        { id: '5', left: 'Documentary', right: 'Documental' }
      ],
      explanation: 'Vocabulario básico de géneros cinematográficos.'
    } as any
  },
  {
    id: 'a2-u16-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'At the Cinema',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We need to buy our ___ before entering the cinema.',
          options: ['tickets', 'screens', 'actors'],
          correctAnswer: 0,
          explanation: 'Necesitas entradas (tickets) para entrar.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Movie Cast',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The main ___ in that movie is very famous.',
          correctAnswer: 'actor',
          explanation: '"Actor" es la persona que actúa en la película.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Watching a Movie',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'time', 'does', 'the', 'film', 'start', '?'],
          correctSentence: 'What time does the film start?',
          translation: '¿A qué hora empieza la película?',
          hint: 'Empieza con "What time".',
          explanation: 'Estructura común para preguntar horarios.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Palomitas',
          back: 'Popcorn',
          example: 'I always buy popcorn at the cinema.',
          pronunciation: '/ˈpɒpkɔːn/',
          explanation: 'El snack más común en el cine.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'The Plot',
      instructions: 'Elige la definición correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The story of a film is called the ___ .',
          options: ['script', 'plot', 'scene'],
          correctAnswer: 1,
          explanation: '"Plot" es la trama o argumento de la historia.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Cinema',
      instructions: 'Di "Let\'s go to the cinema".',
      questions: [
        {
          id: 'q1',
          text: "Let's go to the cinema",
          correctAnswer: "Let's go to the cinema",
          explanation: 'Pronuncia "cinema" como /ˈsɪnəmə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Film Reviews',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The movie was so ___ that I fell asleep.',
          correctAnswer: 'boring',
          explanation: 'Si te duermes es porque era aburrida (boring).'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Favorite Actor',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Who', 'is', 'your', 'favorite', 'actor', '?'],
          correctSentence: 'Who is your favorite actor?',
          translation: '¿Quién es tu actor favorito?',
          hint: 'Empieza con "Who".',
          explanation: 'Pregunta sobre preferencias personales.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Movie People',
      instructions: 'Une el rol con su descripción.',
      pairs: [
        { id: '1', left: 'Director', right: 'Tells actors what to do' },
        { id: '2', left: 'Audience', right: 'People watching the film' },
        { id: '3', left: 'Star', right: 'The most important actor' },
        { id: '4', left: 'Fan', right: 'A person who loves a movie' }
      ],
      explanation: 'Personas involucradas en el cine.'
    } as any
  },
  {
    id: 'a2-u16-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'hard',
    content: {
      title: 'Watching Movies',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I prefer to watch movies with ___ so I can understand the original language.',
          options: ['subtitles', 'headphones', 'trailers'],
          correctAnswer: 0,
          explanation: 'Los subtítulos (subtitles) ayudan a entender la versión original.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Music & Instruments (13-24) ---
  {
    id: 'a2-u16-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tocar un instrumento',
          back: 'Play an instrument',
          example: 'Can you play an instrument?',
          pronunciation: '/pleɪ ən ˈɪnstrʊmənt/',
          explanation: 'Usamos "play" para instrumentos musicales.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Musical Instruments',
      instructions: 'Une el instrumento con su traducción.',
      pairs: [
        { id: '1', left: 'Drums', right: 'Batería' },
        { id: '2', left: 'Guitar', right: 'Guitarra' },
        { id: '3', left: 'Keyboard', right: 'Teclado' },
        { id: '4', left: 'Violin', right: 'Violín' },
        { id: '5', left: 'Flute', right: 'Flauta' }
      ],
      explanation: 'Vocabulario básico de instrumentos.'
    } as any
  },
  {
    id: 'a2-u16-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Music Genres',
      instructions: 'Elige el género.',
      questions: [
        {
          id: 'q1',
          question: 'Mozart and Beethoven wrote ___ music.',
          options: ['classical', 'rock', 'jazz'],
          correctAnswer: 0,
          explanation: 'Música clásica (classical).'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Live Music',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I went to a rock ___ last night.',
          correctAnswer: 'concert',
          explanation: 'Un evento de música en vivo es un "concert".'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Practicing Music',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'is', 'learning', 'to', 'play', 'the', 'piano', '.'],
          correctSentence: 'She is learning to play the piano.',
          translation: 'Ella está aprendiendo a tocar el piano.',
          hint: 'Usa "learning to".',
          explanation: 'Usamos "the" con instrumentos musicales tras "play".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Letra de una canción',
          back: 'Lyrics',
          example: 'I love the lyrics of this song.',
          pronunciation: '/ˈlɪrɪks/',
          explanation: 'Las palabras de una canción.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'The Band',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The person who sings in a band is the ___ .',
          options: ['singer', 'musician', 'drummer'],
          correctAnswer: 0,
          explanation: '"Singer" es el cantante.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Guitar',
      instructions: 'Di "I play the guitar".',
      questions: [
        {
          id: 'q1',
          text: 'I play the guitar',
          correctAnswer: 'I play the guitar',
          explanation: 'La acentuación en "guitar" recae en la segunda sílaba: /ɡɪˈtɑːr/.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Listening to Music',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I often listen ___ music while I work.',
          correctAnswer: 'to',
          explanation: 'Siempre usamos "listen to".'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Going to a Gig',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'bought', 'tickets', 'for', 'the', 'festival', '.'],
          correctSentence: 'We bought tickets for the festival.',
          translation: 'Compramos entradas para el festival.',
          hint: 'Usa el pasado de "buy".',
          explanation: 'Estructura simple en pasado.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Music Vocabulary',
      instructions: 'Une la palabra con su definición.',
      pairs: [
        { id: '1', left: 'Album', right: 'A collection of songs' },
        { id: '2', left: 'Track', right: 'One song on a CD' },
        { id: '3', left: 'Stage', right: 'Where musicians perform' },
        { id: '4', left: 'Band', right: 'A group of musicians' }
      ],
      explanation: 'Vocabulario general de la industria musical.'
    } as any
  },
  {
    id: 'a2-u16-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'hard',
    content: {
      title: 'Sound',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Turn the music down! It’s too ___ .',
          options: ['loud', 'quiet', 'soft'],
          correctAnswer: 0,
          explanation: '"Loud" significa ruidoso o alto de volumen.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: TV & Media (25-36) ---
  {
    id: 'a2-u16-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Noticias',
          back: 'News',
          example: 'I watch the news every morning.',
          pronunciation: '/njuːz/',
          explanation: 'Información sobre eventos actuales. "News" es siempre singular en gramática.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'TV Programs',
      instructions: 'Une el programa con su traducción.',
      pairs: [
        { id: '1', left: 'Soap opera', right: 'Telenovela' },
        { id: '2', left: 'Game show', right: 'Concurso' },
        { id: '3', left: 'Talk show', right: 'Programa de entrevistas' },
        { id: '4', left: 'Sports program', right: 'Programa de deportes' },
        { id: '5', left: 'Weather forecast', right: 'Pronóstico del tiempo' }
      ],
      explanation: 'Diferentes tipos de programas de televisión.'
    } as any
  },
  {
    id: 'a2-u16-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Media Channels',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'What is your favorite TV ___ ?',
          options: ['channel', 'radio', 'news'],
          correctAnswer: 0,
          explanation: '"Channel" se refiere al canal de televisión.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Social Media',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I posted a photo on ___ yesterday.',
          correctAnswer: 'Instagram',
          explanation: 'Instagram es una red social muy popular.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Watching TV',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'usually', 'watch', 'TV', 'in', 'the', 'evening', '.'],
          correctSentence: 'I usually watch TV in the evening.',
          translation: 'Normalmente veo la tele por la noche.',
          hint: 'Usa "usually".',
          explanation: 'Posición del adverbio de frecuencia.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Anuncio / Publicidad',
          back: 'Advertisement / Ad',
          example: 'There are too many ads on TV.',
          pronunciation: '/ədˈvɜːtɪsmənt/',
          explanation: 'Mensajes para vender productos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Remote Control',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Please use the ___ to change the channel.',
          options: ['remote control', 'battery', 'screen'],
          correctAnswer: 0,
          explanation: '"Remote control" es el mando a distancia.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: News',
      instructions: 'Di "I watch the news".',
      questions: [
        {
          id: 'q1',
          text: 'I watch the news',
          correctAnswer: 'I watch the news',
          explanation: 'La "s" final suena como /z/.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Series',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I finished the first ___ of this show.',
          correctAnswer: 'season',
          explanation: '"Season" significa temporada de una serie.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Streaming',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'often', 'stream', 'movies', 'online', '.'],
          correctSentence: 'We often stream movies online.',
          translation: 'A menudo vemos películas online.',
          hint: 'Usa "stream".',
          explanation: '"Stream" se refiere a ver contenido por internet sin descargarlo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Media Types',
      instructions: 'Une el tipo con su ejemplo.',
      pairs: [
        { id: '1', left: 'Print media', right: 'Newspapers and magazines' },
        { id: '2', left: 'Social media', right: 'Facebook and Twitter' },
        { id: '3', left: 'Broadcast', right: 'Radio and TV' },
        { id: '4', left: 'Digital', right: 'Websites and apps' }
      ],
      explanation: 'Clasificación de los medios de comunicación.'
    } as any
  },
  {
    id: 'a2-u16-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'hard',
    content: {
      title: 'Journalism',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The person who writes for a newspaper is a ___ .',
          options: ['journalist', 'presenter', 'editor'],
          correctAnswer: 0,
          explanation: '"Journalist" es el periodista.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Present Perfect - Experiences (37-45) ---
  {
    id: 'a2-u16-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'He visto esa película',
          back: 'I have seen that movie',
          example: 'I have seen that movie three times.',
          pronunciation: '/aɪ həv siːn ðæt ˈmuːvi/',
          explanation: 'Usamos Present Perfect para experiencias pasadas sin especificar cuándo ocurrieron.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Have you ever...?',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Have you ever ___ to a music festival?',
          options: ['been', 'went', 'go'],
          correctAnswer: 0,
          explanation: 'Usamos el participio "been" para preguntar por experiencias.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Past Experiences',
      instructions: 'Completa con el verbo en participio.',
      questions: [
        {
          id: 'q1',
          text: 'She has ___ (meet) a famous actor.',
          correctAnswer: 'met',
          explanation: 'El participio de "meet" es "met".'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Experience Negatives',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'have', 'never', 'played', 'the', 'drums', '.'],
          correctSentence: 'I have never played the drums.',
          translation: 'Nunca he tocado la batería.',
          hint: 'Usa "never".',
          explanation: 'Posición de "never" en el Present Perfect.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Present Perfect Forms',
      instructions: 'Une el sujeto con su auxiliar.',
      pairs: [
        { id: '1', left: 'I / You / We / They', right: 'have' },
        { id: '2', left: 'He / She / It', right: 'has' },
        { id: '3', left: 'Negative (I)', right: 'haven’t' },
        { id: '4', left: 'Negative (She)', right: 'hasn’t' }
      ],
      explanation: 'Formas del auxiliar "have" en Present Perfect.'
    } as any
  },
  {
    id: 'a2-u16-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Been vs Gone',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'My brother has ___ to London. He’s coming back next week.',
          options: ['gone', 'been'],
          correctAnswer: 0,
          explanation: 'Usamos "gone" cuando la persona aún no ha vuelto.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Participio',
      instructions: 'Di "I have heard that song".',
      questions: [
        {
          id: 'q1',
          text: 'I have heard that song',
          correctAnswer: 'I have heard that song',
          explanation: '"Heard" se pronuncia /hɜːd/.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'hard',
    content: {
      title: 'Short Answers',
      instructions: 'Completa la respuesta corta.',
      questions: [
        {
          id: 'q1',
          text: 'Has he seen the news? Yes, he ___.',
          correctAnswer: 'has',
          explanation: 'En respuestas cortas repetimos el auxiliar.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'hard',
    content: {
      title: 'Questions with Ever',
      instructions: 'Ordena la pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['Have', 'you', 'ever', 'written', 'a', 'song', '?'],
          correctSentence: 'Have you ever written a song?',
          translation: '¿Alguna vez has escrito una canción?',
          hint: 'Usa "written".',
          explanation: 'Estructura estándar para preguntas sobre experiencias.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u16-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The ___ showed us our seats in the theater.',
          options: ['usher', 'director', 'fan'],
          correctAnswer: 0,
          explanation: '"Usher" es el acomodador.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Media Habits',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I have ___ (watch) three movies this week.',
          correctAnswer: 'watched',
          explanation: 'Participio regular.'
        }
      ]
    }
  },
  {
    id: 'a2-u16-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Entertainment Preferences',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'don’t', 'like', 'horror', 'films', 'very', 'much', '.'],
          correctSentence: 'I don’t like horror films very much.',
          translation: 'No me gustan mucho las películas de terror.',
          hint: 'Usa "very much" al final.',
          explanation: 'Expresión de gusto personal.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u16-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'medium',
    content: {
      title: 'Vocabulary Mix',
      instructions: 'Une el concepto con su categoría.',
      pairs: [
        { id: '1', left: 'Cello', right: 'Instrument' },
        { id: '2', left: 'Sitcom', right: 'TV Program' },
        { id: '3', left: 'Review', right: 'Opinion' },
        { id: '4', left: 'Podcast', right: 'Audio media' }
      ],
      explanation: 'Repaso de vocabulario variado.'
    } as any
  },
  {
    id: 'a2-u16-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Entertainment & Media',
    topicName: 'Entertainment & Media',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ you ever ___ to a live concert?',
          options: ['Have / been', 'Has / gone', 'Do / go'],
          correctAnswer: 0,
          explanation: 'Pregunta sobre experiencia con el participio de "be".'
        }
      ]
    }
  }
];
