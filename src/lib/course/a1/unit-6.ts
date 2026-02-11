import { Exercise } from '@/lib/exercise-generator';

export const UNIT_6_EXERCISES: Exercise[] = [
  {
    id: 'a1-u6-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color rojo',
      instructions: '¿Cómo se dice "rojo" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'The apple is ________.',
          options: ['red', 'blue', 'green'],
          correctAnswer: 0,
          explanation: '"Red" es rojo.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Azul',
          back: 'Blue',
          example: 'The sky is blue.',
          pronunciation: '/bluː/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Cielo azul',
      instructions: 'Ordena las palabras para traducir "El cielo es azul".',
      sentences: [
        {
          id: 's1',
          words: ['blue', 'sky', 'is', 'The'],
          correctSentence: 'The sky is blue',
          translation: 'El cielo es azul.',
          hint: 'Empieza con "The".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color verde',
      instructions: '¿Cuál es la palabra para "verde"?',
      questions: [
        {
          id: 'q1',
          question: 'The grass is ________.',
          options: ['yellow', 'green', 'black'],
          correctAnswer: 1,
          explanation: '"Green" es verde.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Yellow',
      instructions: 'Di la palabra para "amarillo".',
      questions: [
        {
          id: 'q1',
          text: 'Yellow',
          correctAnswer: 'Yellow',
          explanation: 'La "y" suena como una "i" suave.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Colores básicos',
      instructions: 'Une el español con el inglés.',
      pairs: [
        { id: '1', left: 'Rojo', right: 'Red' },
        { id: '2', left: 'Azul', right: 'Blue' },
        { id: '3', left: 'Amarillo', right: 'Yellow' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color blanco',
      instructions: 'Escribe la palabra para "blanco".',
      questions: [
        {
          id: 'q1',
          text: 'Milk is ___.',
          correctAnswer: 'white',
          explanation: '"White" es blanco.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color negro',
      instructions: '¿Cómo se dice "negro"?',
      questions: [
        {
          id: 'q1',
          question: 'Coffee is ________.',
          options: ['white', 'black', 'brown'],
          correctAnswer: 1,
          explanation: '"Black" es negro.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Grande',
          back: 'Big',
          example: 'The house is big.',
          pronunciation: '/bɪɡ/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Casa grande',
      instructions: 'Ordena para decir "La casa es grande".',
      sentences: [
        {
          id: 's1',
          words: ['big', 'is', 'house', 'The'],
          correctSentence: 'The house is big',
          translation: 'La casa es grande.',
          hint: 'En inglés el adjetivo suele ir después de "is" en estas frases.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pequeño',
      instructions: '¿Cuál es la palabra para "pequeño"?',
      questions: [
        {
          id: 'q1',
          question: 'The mouse is ________.',
          options: ['small', 'big', 'fast'],
          correctAnswer: 0,
          explanation: '"Small" es pequeño.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Orange',
      instructions: 'Di la palabra para "naranja".',
      questions: [
        {
          id: 'q1',
          text: 'Orange',
          correctAnswer: 'Orange',
          explanation: 'La "g" suena como una "y" africada.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Opuestos',
      instructions: 'Une los opuestos.',
      pairs: [
        { id: '1', left: 'Big', right: 'Small' },
        { id: '2', left: 'Black', right: 'White' },
        { id: '3', left: 'Hot', right: 'Cold' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color naranja',
      instructions: 'Escribe la palabra para "naranja".',
      questions: [
        {
          id: 'q1',
          text: 'The fruit is ___.',
          correctAnswer: 'orange',
          explanation: '"Orange" sirve para el color y la fruta.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color rosa',
      instructions: '¿Cómo se dice "rosa"?',
      questions: [
        {
          id: 'q1',
          question: 'The flower is ________.',
          options: ['pink', 'purple', 'grey'],
          correctAnswer: 0,
          explanation: '"Pink" es rosa.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Morado',
          back: 'Purple',
          example: 'I like purple.',
          pronunciation: '/ˈpɜːrpl/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Coche rojo',
      instructions: 'Ordena para decir "Un coche rojo".',
      sentences: [
        {
          id: 's1',
          words: ['car', 'red', 'A'],
          correctSentence: 'A red car',
          translation: 'Un coche rojo.',
          hint: 'En inglés el color va antes del objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color gris',
      instructions: '¿Cómo se dice "gris"?',
      questions: [
        {
          id: 'q1',
          question: 'The elephant is ________.',
          options: ['grey', 'brown', 'pink'],
          correctAnswer: 0,
          explanation: '"Grey" es gris.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Green',
      instructions: 'Di la palabra para "verde".',
      questions: [
        {
          id: 'q1',
          text: 'Green',
          correctAnswer: 'Green',
          explanation: 'La "ee" suena como una "i" larga.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Más colores',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Marrón', right: 'Brown' },
        { id: '2', left: 'Gris', right: 'Grey' },
        { id: '3', left: 'Morado', right: 'Purple' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Color marrón',
      instructions: 'Escribe la palabra para "marrón".',
      questions: [
        {
          id: 'q1',
          text: 'Chocolate is ___.',
          correctAnswer: 'brown',
          explanation: '"Brown" es marrón.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Nuevo',
      instructions: '¿Cómo se dice "nuevo"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ car.',
          options: ['new', 'old', 'clean'],
          correctAnswer: 0,
          explanation: '"New" es nuevo.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Viejo',
          back: 'Old',
          example: 'An old book.',
          pronunciation: '/oʊld/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Libro viejo',
      instructions: 'Ordena para decir "Un libro viejo".',
      sentences: [
        {
          id: 's1',
          words: ['book', 'old', 'An'],
          correctSentence: 'An old book',
          translation: 'Un libro viejo.',
          hint: 'Usa "An" porque "old" empieza por vocal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Rápido',
      instructions: '¿Qué palabra significa "rápido"?',
      questions: [
        {
          id: 'q1',
          question: 'The car is ________.',
          options: ['fast', 'slow', 'big'],
          correctAnswer: 0,
          explanation: '"Fast" es rápido.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Small',
      instructions: 'Di la palabra para "pequeño".',
      questions: [
        {
          id: 'q1',
          text: 'Small',
          correctAnswer: 'Small',
          explanation: 'La "a" suena parecida a una "o".'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e27',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Adjetivos comunes',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'New', right: 'Nuevo' },
        { id: '2', left: 'Old', right: 'Viejo' },
        { id: '3', left: 'Fast', right: 'Rápido' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Lento',
      instructions: 'Escribe la palabra para "lento".',
      questions: [
        {
          id: 'q1',
          text: 'The turtle is ___.',
          correctAnswer: 'slow',
          explanation: '"Slow" es lento.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Bonito',
      instructions: '¿Cómo se dice "bonito" o "hermoso"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ flower.',
          options: ['beautiful', 'ugly', 'bad'],
          correctAnswer: 0,
          explanation: '"Beautiful" es hermoso o bonito.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Feo',
          back: 'Ugly',
          example: 'An ugly monster.',
          pronunciation: '/ˈʌɡli/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Niño alto',
      instructions: 'Ordena para decir "Un niño alto".',
      sentences: [
        {
          id: 's1',
          words: ['boy', 'tall', 'A'],
          correctSentence: 'A tall boy',
          translation: 'Un niño alto.',
          hint: 'El adjetivo va antes del nombre.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Bajo (estatura)',
      instructions: '¿Cuál es la palabra para "bajo"?',
      questions: [
        {
          id: 'q1',
          question: 'He is ________.',
          options: ['short', 'tall', 'long'],
          correctAnswer: 0,
          explanation: '"Short" es bajo (o corto).'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Beautiful',
      instructions: 'Di la palabra para "hermoso".',
      questions: [
        {
          id: 'q1',
          text: 'Beautiful',
          correctAnswer: 'Beautiful',
          explanation: 'La "t" suena casi como una "r" suave en inglés americano.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Más opuestos',
      instructions: 'Une las parejas de opuestos.',
      pairs: [
        { id: '1', left: 'Tall', right: 'Short' },
        { id: '2', left: 'Beautiful', right: 'Ugly' },
        { id: '3', left: 'Slow', right: 'Fast' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Limpio',
      instructions: 'Escribe la palabra para "limpio".',
      questions: [
        {
          id: 'q1',
          text: 'The room is ___.',
          correctAnswer: 'clean',
          explanation: '"Clean" es limpio.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Sucio',
      instructions: '¿Cómo se dice "sucio"?',
      questions: [
        {
          id: 'q1',
          question: 'The shoes are ________.',
          options: ['dirty', 'clean', 'new'],
          correctAnswer: 0,
          explanation: '"Dirty" es sucio.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Feliz',
          back: 'Happy',
          example: 'I am happy.',
          pronunciation: '/ˈhæpi/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Estoy feliz',
      instructions: 'Ordena para decir "Estoy feliz".',
      sentences: [
        {
          id: 's1',
          words: ['happy', 'am', 'I'],
          correctSentence: 'I am happy',
          translation: 'Estoy feliz.',
          hint: 'Empieza con "I".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Triste',
      instructions: '¿Cuál es la palabra para "triste"?',
      questions: [
        {
          id: 'q1',
          question: 'Do not be ________.',
          options: ['sad', 'happy', 'good'],
          correctAnswer: 0,
          explanation: '"Sad" es triste.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Dirty',
      instructions: 'Di la palabra para "sucio".',
      questions: [
        {
          id: 'q1',
          text: 'Dirty',
          correctAnswer: 'Dirty',
          explanation: 'La "ir" suena como una "e" cerrada.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Estados',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Happy', right: 'Feliz' },
        { id: '2', left: 'Sad', right: 'Triste' },
        { id: '3', left: 'Angry', right: 'Enfadado' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Enfadado',
      instructions: 'Escribe la palabra para "enfadado".',
      questions: [
        {
          id: 'q1',
          text: 'The boss is ___.',
          correctAnswer: 'angry',
          explanation: '"Angry" es enfadado.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Bueno',
      instructions: '¿Cómo se dice "bueno"?',
      questions: [
        {
          id: 'q1',
          question: 'Have a ________ day.',
          options: ['good', 'bad', 'new'],
          correctAnswer: 0,
          explanation: '"Good" es bueno.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Malo',
          back: 'Bad',
          example: 'A bad movie.',
          pronunciation: '/bæd/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Gato negro',
      instructions: 'Ordena para decir "Un gato negro".',
      sentences: [
        {
          id: 's1',
          words: ['cat', 'black', 'A'],
          correctSentence: 'A black cat',
          translation: 'Un gato negro.',
          hint: 'Adjetivo + Nombre.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Malo',
      instructions: '¿Cuál es la palabra para "malo"?',
      questions: [
        {
          id: 'q1',
          question: 'That is a ________ idea.',
          options: ['bad', 'good', 'tall'],
          correctAnswer: 0,
          explanation: '"Bad" es malo.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Angry',
      instructions: 'Di la palabra para "enfadado".',
      questions: [
        {
          id: 'q1',
          text: 'Angry',
          correctAnswer: 'Angry',
          explanation: 'La "a" es abierta.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Calidad',
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Good', right: 'Bueno' },
        { id: '2', left: 'Bad', right: 'Malo' },
        { id: '3', left: 'Clean', right: 'Limpio' }
      ]
    } as any
  },
  {
    id: 'a1-u6-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Muy bueno',
      instructions: 'Escribe la palabra para "bueno".',
      questions: [
        {
          id: 'q1',
          text: 'Very ___.',
          correctAnswer: 'good',
          explanation: '"Good" es bueno.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Repaso colores',
      instructions: '¿Qué color se forma con "blue" y "red"?',
      questions: [
        {
          id: 'q1',
          question: 'Blue + Red = ________.',
          options: ['purple', 'orange', 'green'],
          correctAnswer: 0,
          explanation: 'Azul + Rojo = Morado (Purple).'
        }
      ]
    }
  }
];
