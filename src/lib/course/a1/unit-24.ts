import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 24: Hobbies
 */

export const UNIT_24_EXERCISES: Exercise[] = [
  {
    id: 'a1-u24-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Hobbies Comunes',
      instructions: 'Relaciona cada hobby con su traducción al español.',
      pairs: [
        { id: 'p1', left: 'Reading', right: 'Leer / Lectura' },
        { id: 'p2', left: 'Cooking', right: 'Cocinar / Cocina' },
        { id: 'p3', left: 'Painting', right: 'Pintar / Pintura' },
        { id: 'p4', left: 'Dancing', right: 'Bailar / Baile' },
        { id: 'p5', left: 'Singing', right: 'Cantar / Canto' }
      ],
      explanation: 'Los hobbies son actividades que disfrutamos hacer en nuestro tiempo libre.'
    } as any
  },
  {
    id: 'a1-u24-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Me gusta leer',
      instructions: '¿Cómo dirías "Me gusta leer"?',
      questions: [
        {
          id: 'q1',
          question: 'I like ________.',
          options: ['reading', 'read', 'to reading'],
          correctAnswer: 0,
          explanation: "Después del verbo 'like', solemos usar la forma '-ing' del verbo para hablar de hobbies."
        }
      ]
    }
  },
  {
    id: 'a1-u24-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Hobby de cocina',
      instructions: 'Escribe la palabra para "cocinar" (en forma -ing).',
      questions: [
        {
          id: 'q1',
          question: 'I love ________.',
          correctAnswer: 'cooking',
          explanation: '"Cooking" es el sustantivo o forma gerundio para la actividad de cocinar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pintura / Pintar',
          back: 'Painting',
          example: 'Painting is my favorite hobby.',
          pronunciation: '/ˈpeɪntɪŋ/',
          explanation: '"Painting" se refiere tanto a la acción de pintar como al hobby.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Me encanta bailar',
      instructions: 'Ordena para decir "Yo amo bailar".',
      sentences: [
        {
          id: 's1',
          words: ['dancing', 'love', 'I'],
          correctSentence: 'I love dancing',
          translation: 'Yo amo bailar.',
          explanation: 'Usamos "love" para expresar que algo nos gusta mucho.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Deportes Comunes',
      instructions: 'Relaciona el deporte con su traducción.',
      pairs: [
        { id: 'p1', left: 'Soccer / Football', right: 'Fútbol' },
        { id: 'p2', left: 'Tennis', right: 'Tenis' },
        { id: 'p3', left: 'Swimming', right: 'Natación' },
        { id: 'p4', left: 'Running', right: 'Correr / Atletismo' },
        { id: 'p5', left: 'Basketball', right: 'Baloncesto' }
      ],
      explanation: 'Diferentes tipos de actividades físicas populares.'
    } as any
  },
  {
    id: 'a1-u24-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      title: 'Jugar al fútbol',
      instructions: '¿Cómo dirías "Juego al fútbol"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ soccer.',
          options: ['play', 'go', 'do'],
          correctAnswer: 0,
          explanation: "Usamos 'play' para deportes que se juegan con una pelota o en equipo."
        }
      ]
    }
  },
  {
    id: 'a1-u24-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Ir a nadar',
      instructions: 'Completa con el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ swimming on Saturdays.',
          correctAnswer: 'go',
          explanation: "Usamos 'go' para actividades que terminan en '-ing' y que suelen implicar desplazarse a algún sitio."
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tenis',
          back: 'Tennis',
          example: 'Let\'s play tennis.',
          pronunciation: '/ˈtenɪs/',
          explanation: '"Tennis" se escribe igual pero se pronuncia con el acento al principio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Me gusta correr',
      instructions: 'Ordena para decir "Me gusta correr en el parque".',
      sentences: [
        {
          id: 's1',
          words: ['park', 'the', 'in', 'running', 'like', 'I'],
          correctSentence: 'I like running in the park',
          translation: 'Me gusta correr en el parque.',
          explanation: 'Estructura Sujeto + like + hobby + lugar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Actividades de Pantalla',
      instructions: 'Relaciona la actividad.',
      pairs: [
        { id: 'p1', left: 'Watch TV', right: 'Ver la tele' },
        { id: 'p2', left: 'Play video games', right: 'Jugar a videojuegos' },
        { id: 'p3', left: 'Surf the internet', right: 'Navegar por internet' },
        { id: 'p4', left: 'Watch movies', right: 'Ver películas' },
        { id: 'p5', left: 'Use social media', right: 'Usar redes sociales' }
      ],
      explanation: 'Hobbies digitales y de entretenimiento visual.'
    } as any
  },
  {
    id: 'a1-u24-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Videojuegos',
      instructions: '¿Qué significa "I enjoy video games"?',
      questions: [
        {
          id: 'q1',
          question: 'I enjoy video games.',
          options: ['Disfruto de los videojuegos.', 'Odio los videojuegos.', 'Compro videojuegos.'],
          correctAnswer: 0,
          explanation: '"Enjoy" es disfrutar.'
        }
      ]
    }
  },
  {
    id: 'a1-u24-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Ver la tele',
      instructions: 'Completa con el verbo "ver".',
      questions: [
        {
          id: 'q1',
          question: 'I ________ TV in the evening.',
          correctAnswer: 'watch',
          explanation: "Usamos 'watch' para cosas que miramos con atención durante un tiempo, como la TV o películas."
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Música y Arte',
      instructions: 'Relaciona la actividad artística.',
      pairs: [
        { id: 'p1', left: 'Listen to music', right: 'Escuchar música' },
        { id: 'p2', left: 'Play the guitar', right: 'Tocar la guitarra' },
        { id: 'p3', left: 'Drawing', right: 'Dibujar / Dibujo' },
        { id: 'p4', left: 'Photography', right: 'Fotografía' },
        { id: 'p5', left: 'Writing stories', right: 'Escribir historias' }
      ],
      explanation: 'Hobbies relacionados con la creatividad y la expresión.'
    } as any
  },
  {
    id: 'a1-u24-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Escuchar música',
      instructions: '¿Qué falta en la frase?',
      questions: [
        {
          id: 'q1',
          question: 'I listen ________ music.',
          options: ['to', 'at', 'with'],
          correctAnswer: 0,
          explanation: "El verbo 'listen' siempre va acompañado de la preposición 'to' cuando indicamos qué escuchamos."
        }
      ]
    }
  },
  {
    id: 'a1-u24-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Fotografía',
      instructions: 'Completa: Me gusta la fotografía.',
      questions: [
        {
          id: 'q1',
          question: 'I like ________.',
          correctAnswer: 'photography',
          explanation: '"Photography" es el término para el hobby de sacar fotos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Dibujar',
          back: 'Drawing',
          example: 'Drawing is relaxing.',
          pronunciation: '/ˈdrɔːɪŋ/',
          explanation: '"Drawing" viene del verbo "draw".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Tocar la guitarra',
      instructions: 'Ordena para decir "Yo puedo tocar la guitarra".',
      sentences: [
        {
          id: 's1',
          words: ['guitar', 'the', 'play', 'can', 'I'],
          correctSentence: 'I can play the guitar',
          translation: 'Yo puedo tocar la guitarra.',
          explanation: 'Usamos "the" antes de los instrumentos musicales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Frecuencia de Hobbies',
      instructions: 'Relaciona con qué frecuencia haces tus hobbies.',
      pairs: [
        { id: 'p1', left: 'Every day', right: 'Todos los días' },
        { id: 'p2', left: 'On weekends', right: 'Los fines de semana' },
        { id: 'p3', left: 'Sometimes', right: 'A veces' },
        { id: 'p4', left: 'Often', right: 'A menudo' },
        { id: 'p5', left: 'Never', right: 'Nunca' }
      ],
      explanation: 'Palabras para decir cuándo practicamos nuestras aficiones.'
    } as any
  },
  {
    id: 'a1-u24-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Fines de semana',
      instructions: 'I play soccer ________.',
      questions: [
        {
          id: 'q1',
          question: 'I play soccer ________.',
          options: ['on weekends', 'every weekends', 'at weekend'],
          correctAnswer: 0,
          explanation: "Usamos 'on weekends' para referirnos a los sábados y domingos."
        }
      ]
    }
  },
  {
    id: 'a1-u24-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Todos los días',
      instructions: 'Escribe la frase para "todos los días".',
      questions: [
        {
          id: 'q1',
          question: 'I read books ________ ________.',
          correctAnswer: 'every day',
          explanation: '"Every day" indica una rutina diaria.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Preferencias',
      instructions: 'Relaciona la intensidad del gusto.',
      pairs: [
        { id: 'p1', left: 'Love', right: 'Encantar' },
        { id: 'p2', left: 'Like', right: 'Gustar' },
        { id: 'p3', left: 'Enjoy', right: 'Disfrutar' },
        { id: 'p4', left: "Don't like", right: 'No gustar' },
        { id: 'p5', left: 'Hate', right: 'Odiar' }
      ],
      explanation: 'Diferentes formas de expresar sentimientos hacia las actividades.'
    } as any
  },
  {
    id: 'a1-u24-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Odiar algo',
      instructions: '¿Qué significa "I hate running"?',
      questions: [
        {
          id: 'q1',
          question: 'I hate running.',
          options: ['Odio correr.', 'Me gusta correr.', 'Corro a veces.'],
          correctAnswer: 0,
          explanation: '"Hate" es el opuesto de "love".'
        }
      ]
    }
  },
  {
    id: 'a1-u24-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'No me gusta',
      instructions: 'Completa la negación.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ like cooking.',
          correctAnswer: "don't",
          explanation: "Usamos 'don't' para negar gustos en presente simple."
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Disfrutar',
          back: 'Enjoy',
          example: 'I enjoy playing video games.',
          pronunciation: '/ɪnˈdʒɔɪ/',
          explanation: '"Enjoy" es un sinónimo de "like" que suena un poco más formal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: '¿Cuál es tu hobby?',
      instructions: 'Ordena para preguntar "¿Cuál es tu hobby favorito?".',
      sentences: [
        {
          id: 's1',
          words: ['hobby', 'favorite', 'your', 'is', 'What'],
          correctSentence: 'What is your favorite hobby',
          translation: '¿Cuál es tu hobby favorito?',
          explanation: 'Pregunta típica para conocer a alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Deportes "Do"',
      instructions: 'Une el deporte que usa el verbo "do" (artes marciales y ejercicios individuales).',
      pairs: [
        { id: 'p1', left: 'Yoga', right: 'Do yoga' },
        { id: 'p2', left: 'Karate', right: 'Do karate' },
        { id: 'p3', left: 'Judo', right: 'Do judo' },
        { id: 'p4', left: 'Aerobics', right: 'Do aerobics' },
        { id: 'p5', left: 'Gymnastics', right: 'Do gymnastics' }
      ],
      explanation: "Usamos 'do' para artes marciales y actividades físicas que no requieren equipo o pelota."
    } as any
  },
  {
    id: 'a1-u24-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hacer yoga',
      instructions: 'I ________ yoga in the morning.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ yoga in the morning.',
          options: ['do', 'play', 'go'],
          correctAnswer: 0,
          explanation: "Recuerda: 'do yoga'."
        }
      ]
    }
  },
  {
    id: 'a1-u24-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Hacer karate',
      instructions: 'Completa con el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'Does he ________ karate?',
          correctAnswer: 'do',
          explanation: "Usamos 'do' para deportes de combate sin armas."
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'Lugares para Hobbies',
      instructions: 'Relaciona el lugar con la actividad.',
      pairs: [
        { id: 'p1', left: 'Gym', right: 'Exercise' },
        { id: 'p2', left: 'Library', right: 'Reading' },
        { id: 'p3', left: 'Pool', right: 'Swimming' },
        { id: 'p4', left: 'Studio', right: 'Painting' },
        { id: 'p5', left: 'Stadium', right: 'Watching soccer' }
      ],
      explanation: 'Lugares específicos donde practicamos o vemos hobbies.'
    } as any
  },
  {
    id: 'a1-u24-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'En el gimnasio',
      instructions: '¿Qué haces en el gimnasio?',
      questions: [
        {
          id: 'q1',
          question: 'I go to the ________ to exercise.',
          options: ['gym', 'library', 'studio'],
          correctAnswer: 0,
          explanation: '"Gym" es la abreviatura de "gymnasium".'
        }
      ]
    }
  },
  {
    id: 'a1-u24-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      title: 'La piscina',
      instructions: 'Escribe la palabra para "piscina".',
      questions: [
        {
          id: 'q1',
          question: 'I swim in the ________.',
          correctAnswer: 'pool',
          explanation: '"Pool" (o swimming pool) es el lugar para nadar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Biblioteca',
          back: 'Library',
          example: 'I go to the library to read.',
          pronunciation: '/ˈlaɪbrəri/',
          explanation: '"Library" es donde vas a leer o estudiar (no donde compras libros).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Ver una película',
      instructions: 'Ordena para decir "Me gusta ver películas los domingos".',
      sentences: [
        {
          id: 's1',
          words: ['Sundays', 'on', 'movies', 'watching', 'like', 'I'],
          correctSentence: 'I like watching movies on Sundays',
          translation: 'Me gusta ver películas los domingos.',
          explanation: 'Usamos "on" para los días de la semana en plural.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Resumen de Verbos de Deporte',
      instructions: 'Une el verbo correcto con la actividad.',
      pairs: [
        { id: 'p1', left: 'Play', right: 'Basketball (juego con pelota)' },
        { id: 'p2', left: 'Go', right: 'Cycling (termina en -ing)' },
        { id: 'p3', left: 'Do', right: 'Gymnastics (ejercicio individual)' },
        { id: 'p4', left: 'Play', right: 'Chess (juego de mesa)' },
        { id: 'p5', left: 'Go', right: 'Hiking (actividad al aire libre)' }
      ],
      explanation: 'Un resumen de las reglas de uso de play, go y do.'
    } as any
  },
  {
    id: 'a1-u24-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Hobby favorito',
      instructions: '¿Cómo preguntarías por el hobby de alguien?',
      questions: [
        {
          id: 'q1',
          question: 'What do you ________ doing in your free time?',
          options: ['like', 'are', 'do'],
          correctAnswer: 0,
          explanation: "Pregunta común: 'What do you like doing in your free time?'."
        }
      ]
    }
  },
  {
    id: 'a1-u24-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Tiempo libre',
      instructions: 'Escribe la palabra para "libre".',
      questions: [
        {
          id: 'q1',
          question: 'What is your hobby in your ________ time?',
          correctAnswer: 'free',
          explanation: '"Free time" es tiempo libre u ocio.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Intereses y Talentos',
      instructions: 'Relaciona el término.',
      pairs: [
        { id: 'p1', left: 'Talent', right: 'Talento' },
        { id: 'p2', left: 'Interest', right: 'Interés' },
        { id: 'p3', left: 'Club', right: 'Club / Asociación' },
        { id: 'p4', left: 'Team', right: 'Equipo' },
        { id: 'p5', left: 'Game', right: 'Juego' }
      ],
      explanation: 'Palabras relacionadas con el entorno social de los hobbies.'
    } as any
  },
  {
    id: 'a1-u24-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'En un equipo',
      instructions: 'I play in a ________.',
      questions: [
        {
          id: 'q1',
          question: 'I play in a ________.',
          options: ['team', 'game', 'talent'],
          correctAnswer: 0,
          explanation: '"Team" es un equipo de personas que juegan juntas.'
        }
      ]
    }
  },
  {
    id: 'a1-u24-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'El club de lectura',
      instructions: 'Completa: El club de lectura.',
      questions: [
        {
          id: 'q1',
          question: 'The reading ________ is fun.',
          correctAnswer: 'club',
          explanation: '"Club" se usa igual que en español para grupos con intereses comunes.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Divertido',
          back: 'Fun',
          example: 'My hobbies are fun.',
          pronunciation: '/fʌn/',
          explanation: '"Fun" describe algo que nos hace pasar un buen rato.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Escuchar música en casa',
      instructions: 'Ordena para decir "Me gusta escuchar música en casa".',
      sentences: [
        {
          id: 's1',
          words: ['home', 'at', 'music', 'to', 'listening', 'like', 'I'],
          correctSentence: 'I like listening to music at home',
          translation: 'Me gusta escuchar música en casa.',
          explanation: 'Recordamos: listen + to + objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Hobby relajante',
      instructions: 'Painting is very ________.',
      questions: [
        {
          id: 'q1',
          question: 'Painting is very ________.',
          options: ['relaxing', 'hard', 'tired'],
          correctAnswer: 0,
          explanation: '"Relaxing" es relajante.'
        }
      ]
    }
  },
  {
    id: 'a1-u24-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Me encanta mi hobby',
      instructions: 'Completa con el verbo "encantar".',
      questions: [
        {
          id: 'q1',
          question: 'I ________ my hobby!',
          correctAnswer: 'love',
          explanation: '"Love" expresa un gusto muy fuerte.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u24-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Hobbies',
    topicName: 'My Hobbies',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de Hobbies',
      instructions: 'Relaciona los conceptos finales de la unidad.',
      pairs: [
        { id: 'p1', left: 'Free time', right: 'Tiempo libre' },
        { id: 'p2', left: 'Favorite', right: 'Favorito' },
        { id: 'p3', left: 'Like', right: 'Gustar' },
        { id: 'p4', left: 'Hobby', right: 'Afición' },
        { id: 'p5', left: 'Fun', right: 'Divertido' }
      ],
      explanation: 'Resumen del vocabulario esencial para hablar de tus pasatiempos.'
    } as any
  }
];
