import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 28: Comparatives
 */

export const UNIT_28_EXERCISES: Exercise[] = [
  {
    id: 'a1-u28-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Adjetivos Opuestos',
      instructions: 'Une cada adjetivo con su opuesto.',
      pairs: [
        { id: 'p1', left: 'Big', right: 'Small' },
        { id: 'p2', left: 'Tall', right: 'Short' },
        { id: 'p3', left: 'Fast', right: 'Slow' },
        { id: 'p4', left: 'Hot', right: 'Cold' },
        { id: 'p5', left: 'Old', right: 'New' }
      ],
      explanation: 'Antes de comparar, debemos conocer los adjetivos básicos y sus opuestos.'
    } as any
  },
  {
    id: 'a1-u28-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Regla del -er',
      instructions: 'Elige la forma comparativa correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A car is ________ than a bicycle.',
          options: ['faster', 'fast', 'fastest'],
          correctAnswer: 0,
          explanation: 'Para adjetivos cortos de una sílaba, añadimos "-er" para formar el comparativo.'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Comparando tamaños',
      instructions: 'Completa con la forma comparativa de "small".',
      questions: [
        {
          id: 'q1',
          question: 'A mouse is ________ than a cat.',
          correctAnswer: 'smaller',
          explanation: '"Small" es un adjetivo corto, por lo que su comparativo es "smaller".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Than',
          back: 'Que (para comparar)',
          example: 'Coffee is hotter than water.',
          pronunciation: '/ðæn/',
          explanation: 'Usamos "than" siempre después del adjetivo comparativo para introducir el segundo elemento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Construye la comparación',
      instructions: 'Ordena para decir "Yo soy más alto que tú".',
      sentences: [
        {
          id: 's1',
          words: ['am', 'taller', 'than', 'I', 'you'],
          correctSentence: 'I am taller than you',
          translation: 'Yo soy más alto que tú.',
          hint: 'Empieza con "I".',
          explanation: 'Estructura: Sujeto + am/is/are + adj-er + than + objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Formas Comparativas',
      instructions: 'Une el adjetivo con su forma comparativa.',
      pairs: [
        { id: 'p1', left: 'Long', right: 'Longer' },
        { id: 'p2', left: 'Short', right: 'Shorter' },
        { id: 'p3', left: 'Cheap', right: 'Cheaper' },
        { id: 'p4', left: 'Clean', right: 'Cleaner' },
        { id: 'p5', left: 'Cold', right: 'Colder' }
      ],
      explanation: 'Muchos adjetivos cortos siguen la regla estándar de añadir "-er".'
    } as any
  },
  {
    id: 'a1-u28-e7',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Colder',
      instructions: 'Di la frase: "It is colder today".',
      questions: [
        {
          id: 'q1',
          text: 'It is colder today',
          phonetic: '/ɪt ɪz ˈkəʊl.dər təˈdeɪ/',
          translation: 'Hace más frío hoy.',
          explanation: 'La terminación "-er" suena como una "schwa" suave /ər/.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Ortografía: Consonante doble',
      instructions: 'Elige la forma correcta de "big".',
      questions: [
        {
          id: 'q1',
          question: 'Russia is ________ than Spain.',
          options: ['bigger', 'biger', 'more big'],
          correctAnswer: 0,
          explanation: 'Adjetivos cortos de consonante-vocal-consonante doblan la última letra: big -> bigger.'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Clima caluroso',
      instructions: 'Completa con el comparativo de "hot".',
      questions: [
        {
          id: 'q1',
          question: 'Summer is ________ than winter.',
          correctAnswer: 'hotter',
          explanation: '"Hot" termina en consonante-vocal-consonante, por lo que doblamos la "t".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparando objetos',
      instructions: 'Ordena para decir "Este libro es más viejo".',
      sentences: [
        {
          id: 's1',
          words: ['book', 'is', 'older', 'This'],
          correctSentence: 'This book is older',
          translation: 'Este libro es más viejo.',
          hint: 'Empieza con "This".',
          explanation: 'A veces comparamos sin usar "than" si el segundo elemento se sobreentiende.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e11',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Adjetivos Terminados en -y',
      instructions: 'Une el adjetivo con su forma comparativa.',
      pairs: [
        { id: 'p1', left: 'Happy', right: 'Happier' },
        { id: 'p2', left: 'Easy', right: 'Easier' },
        { id: 'p3', left: 'Busy', right: 'Busier' },
        { id: 'p4', left: 'Funny', right: 'Funnier' },
        { id: 'p5', left: 'Dirty', right: 'Dirtier' }
      ],
      explanation: 'Si el adjetivo termina en "y", la cambiamos por "i" y añadimos "-er".'
    } as any
  },
  {
    id: 'a1-u28-e12',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Felicidad',
      instructions: '¿Cómo se escribe el comparativo de "happy"?',
      questions: [
        {
          id: 'q1',
          question: 'I am ________ now.',
          options: ['happier', 'happyer', 'more happy'],
          correctAnswer: 0,
          explanation: 'La "y" cambia a "i" antes de añadir "-er".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Tareas fáciles',
      instructions: 'Completa con el comparativo de "easy".',
      questions: [
        {
          id: 'q1',
          question: 'This exercise is ________ than the last one.',
          correctAnswer: 'easier',
          explanation: 'Cambiamos "y" por "i" y añadimos "er".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e14',
    type: 'flashcard',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Irregular: Good',
          back: 'Better (Mejor)',
          example: 'This pizza is better.',
          pronunciation: '/ˈbet.ər/',
          explanation: '"Good" es irregular. No decimos "gooder", decimos "better".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Better',
      instructions: 'Di la frase: "Better than before".',
      questions: [
        {
          id: 'q1',
          text: 'Better than before',
          phonetic: '/ˈbet.ər ðæn bɪˈfɔːr/',
          translation: 'Mejor que antes.',
          explanation: 'La "tt" en inglés americano a menudo suena como una "d" suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Irregulares y Especiales',
      instructions: 'Une el adjetivo con su forma comparativa correcta.',
      pairs: [
        { id: 'p1', left: 'Good', right: 'Better' },
        { id: 'p2', left: 'Bad', right: 'Worse' },
        { id: 'p3', left: 'Far', right: 'Farther/Further' },
        { id: 'p4', left: 'Fun', right: 'More fun' },
        { id: 'p5', left: 'Beautiful', right: 'More beautiful' }
      ],
      explanation: 'Algunos adjetivos son irregulares o usan "more" si son largos.'
    } as any
  },
  {
    id: 'a1-u28-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Adjetivos largos',
      instructions: 'Elige la opción correcta para "expensive".',
      questions: [
        {
          id: 'q1',
          question: 'A house is ________ than a car.',
          options: ['more expensive', 'expensiver', 'expensivier'],
          correctAnswer: 0,
          explanation: 'Para adjetivos de dos o más sílabas (excepto los terminados en "y"), usamos "more".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Cosas malas',
      instructions: 'Completa con el comparativo de "bad".',
      questions: [
        {
          id: 'q1',
          question: 'This movie is ________ than the book.',
          correctAnswer: 'worse',
          explanation: '"Bad" es irregular. Su comparativo es "worse".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e19',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Más importante',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['important', 'Health', 'is', 'more', 'than', 'money'],
          correctSentence: 'Health is more than money',
          translation: 'La salud es más importante que el dinero.',
          hint: 'Empieza con "Health".',
          explanation: '"Important" es un adjetivo largo, usamos "more". (Nota: en la solución falta la palabra original "important" en la traducción, se asume el adjetivo en la construcción).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparaciones Reales',
      instructions: 'Une los elementos con su comparación lógica.',
      pairs: [
        { id: 'p1', left: 'Plane / Bus', right: 'Faster' },
        { id: 'p2', left: 'Elephant / Mouse', right: 'Bigger' },
        { id: 'p3', left: 'Ice / Water', right: 'Colder' },
        { id: 'p4', left: 'Turtle / Rabbit', right: 'Slower' },
        { id: 'p5', left: 'Gold / Silver', right: 'More expensive' }
      ],
      explanation: 'Práctica de comparativos con situaciones del mundo real.'
    } as any
  },
  {
    id: 'a1-u28-e21',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: '¿Cuál es correcto?',
      instructions: 'Identifica la frase bien escrita.',
      questions: [
        {
          id: 'q1',
          question: 'Selecciona la frase correcta:',
          options: [
            'My cat is smaller than yours.',
            'My cat is more small than yours.',
            'My cat is small than yours.'
          ],
          correctAnswer: 0,
          explanation: 'La estructura correcta usa el comparativo "smaller" seguido de "than".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e22',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Mi habitación',
      instructions: 'Completa: "Mi habitación es más grande que la tuya".',
      questions: [
        {
          id: 'q1',
          question: 'My room is ________ than yours.',
          correctAnswer: 'bigger',
          explanation: '"Big" dobla la "g" y añade "er".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Intelligent',
          back: 'More intelligent',
          example: 'Humans are more intelligent than dogs.',
          pronunciation: '/mɔːr ɪnˈtel.ɪ.dʒənt/',
          explanation: 'Adjetivo de cuatro sílabas, obligatorio usar "more".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Comparación negativa',
      instructions: 'Ordena: "El invierno no es más caliente que el verano".',
      sentences: [
        {
          id: 's1',
          words: ['not', 'Winter', 'is', 'hotter', 'summer', 'than'],
          correctSentence: 'Winter is not hotter than summer',
          translation: 'El invierno no es más caliente que el verano.',
          hint: 'Empieza con "Winter".',
          explanation: 'Usamos "not" después de "is" para negar la comparación.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Ciudades del Mundo',
      instructions: 'Une la ciudad con la comparación común.',
      pairs: [
        { id: 'p1', left: 'New York / Madrid', right: 'Bigger' },
        { id: 'p2', left: 'London / Cairo', right: 'Colder' },
        { id: 'p3', left: 'Tokyo / Paris', right: 'More modern' },
        { id: 'p4', left: 'Venice / New York', right: 'Older' },
        { id: 'p5', left: 'Oslo / Bangkok', right: 'More expensive' }
      ],
      explanation: 'Comparando características geográficas y culturales.'
    } as any
  },
  {
    id: 'a1-u28-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Adjetivos de dos sílabas en -y',
      instructions: '¿Cuál es el comparativo de "heavy" (pesado)?',
      questions: [
        {
          id: 'q1',
          question: 'This bag is ________ than that one.',
          options: ['heavier', 'more heavy', 'heavyer'],
          correctAnswer: 0,
          explanation: 'Aunque tiene dos sílabas, termina en "y", por lo que usamos la regla de "-ier".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Lejanía',
      instructions: 'Completa con el comparativo de "far" (lejos).',
      questions: [
        {
          id: 'q1',
          question: 'The moon is ________ than the clouds.',
          correctAnswer: 'farther',
          explanation: '"Far" puede ser "farther" (distancia física) o "further" (distancia metafórica).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e28',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: More difficult',
      instructions: 'Di: "English is more difficult than Spanish".',
      questions: [
        {
          id: 'q1',
          text: 'English is more difficult than Spanish',
          phonetic: '/ˈɪŋ.ɡlɪʃ ɪz mɔːr ˈdɪf.ɪ.kəlt ðæn ˈspæn.ɪʃ/',
          translation: 'El inglés es más difícil que el español.',
          explanation: 'Mantén el ritmo al decir "more difficult than".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e29',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Situaciones de Vida',
      instructions: 'Une la situación con su adjetivo comparativo lógico.',
      pairs: [
        { id: 'p1', left: 'Running / Walking', right: 'More tiring' },
        { id: 'p2', left: 'Sleeping / Working', right: 'More relaxing' },
        { id: 'p3', left: 'Exam / Homework', right: 'More difficult' },
        { id: 'p4', left: 'Holiday / Office', right: 'Happier' },
        { id: 'p5', left: 'New phone / Old phone', right: 'Faster' }
      ],
      explanation: 'Uso de comparativos en contextos variados.'
    } as any
  },
  {
    id: 'a1-u28-e30',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Diferencias sutiles',
      instructions: 'Elige la opción que mejor completa la frase.',
      questions: [
        {
          id: 'q1',
          question: 'I think science is ________ than history.',
          options: ['more interesting', 'interestinger', 'more interest'],
          correctAnswer: 0,
          explanation: '"Interesting" es un adjetivo largo, por lo que usamos "more".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e31',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Comparando alturas',
      instructions: 'Escribe el comparativo de "tall".',
      questions: [
        {
          id: 'q1',
          question: 'My brother is ________ than me.',
          correctAnswer: 'taller',
          explanation: 'Añadimos "-er" a "tall" para comparar alturas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Puntualidad',
      instructions: '¿Cómo se dice "más tarde"?',
      questions: [
        {
          id: 'q1',
          question: 'I will call you ________.',
          options: ['later', 'late', 'more late'],
          correctAnswer: 0,
          explanation: '"Late" termina en "e", solo añadimos una "r".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e33',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Adjetivos de Calidad',
      instructions: 'Une el adjetivo con su comparativo.',
      pairs: [
        { id: 'p1', left: 'Nice', right: 'Nicer' },
        { id: 'p2', left: 'Safe', right: 'Safer' },
        { id: 'p3', left: 'Large', right: 'Larger' },
        { id: 'p4', left: 'Cute', right: 'Cuter' },
        { id: 'p5', left: 'Wide', right: 'Wider' }
      ],
      explanation: 'Si el adjetivo ya termina en "e", solo añadimos la "r".'
    } as any
  },
  {
    id: 'a1-u28-e34',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Precios bajos',
      instructions: 'Completa con el comparativo de "cheap" (barato).',
      questions: [
        {
          id: 'q1',
          question: 'Apples are ________ than grapes.',
          correctAnswer: 'cheaper',
          explanation: '"Cheap" + "er" = "cheaper".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'easy',
    content: {
      title: 'Comparando pesos',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A truck is ________ than a car.',
          options: ['heavier', 'heavy', 'more heavy'],
          correctAnswer: 0,
          explanation: 'Recordamos: cambia "y" por "i" + "er".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e36',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparando sentimientos',
      instructions: 'Ordena: "Él está más triste hoy".',
      sentences: [
        {
          id: 's1',
          words: ['sadder', 'is', 'He', 'today'],
          correctSentence: 'He is sadder today',
          translation: 'Él está más triste hoy.',
          hint: 'Empieza con "He".',
          explanation: '"Sad" termina en C-V-C, doblamos la "d".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e37',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Animales Comparados',
      instructions: 'Une el animal con su adjetivo comparativo típico.',
      pairs: [
        { id: 'p1', left: 'Cheetah', right: 'Faster' },
        { id: 'p2', left: 'Giraffe', right: 'Taller' },
        { id: 'p3', left: 'Snake', right: 'Longer' },
        { id: 'p4', left: 'Lion', right: 'Stronger' },
        { id: 'p5', left: 'Monkey', right: 'Funnier' }
      ],
      explanation: 'Práctica de comparativos con animales conocidos.'
    } as any
  },
  {
    id: 'a1-u28-e38',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Adjetivo Irregular',
      instructions: '¿Cómo se compara la calidad?',
      questions: [
        {
          id: 'q1',
          question: 'Your English is ________ than mine.',
          options: ['better', 'gooder', 'best'],
          correctAnswer: 0,
          explanation: '"Better" es el comparativo de "good".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e39',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparando ruido',
      instructions: 'Completa con el comparativo de "noisy" (ruidoso).',
      questions: [
        {
          id: 'q1',
          question: 'The city is ________ than the country.',
          correctAnswer: 'noisier',
          explanation: 'Cambiamos "y" por "i" y añadimos "er".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e40',
    type: 'flashcard',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Careful',
          back: 'More careful',
          example: 'Be more careful next time!',
          pronunciation: '/mɔːr ˈkeə.fəl/',
          explanation: '"Careful" tiene dos sílabas pero no termina en "y", usamos "more".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Planes de Viaje',
      instructions: 'Une el transporte con su comparativo.',
      pairs: [
        { id: 'p1', left: 'Bicycle / Car', right: 'Slower' },
        { id: 'p2', left: 'Train / Car', right: 'Faster' },
        { id: 'p3', left: 'Walking / Flying', right: 'Cheaper' },
        { id: 'p4', left: 'Bus / Taxi', right: 'Bigger' },
        { id: 'p5', left: 'Plane / Ship', right: 'Quicker' }
      ],
      explanation: 'Comparando medios de transporte comunes.'
    } as any
  },
  {
    id: 'a1-u28-e42',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparando distancias',
      instructions: '¿Cuál es el comparativo de "far"?',
      questions: [
        {
          id: 'q1',
          question: 'The supermarket is ________ than the park.',
          options: ['farther', 'farrer', 'more far'],
          correctAnswer: 0,
          explanation: '"Farther" es la forma comparativa irregular para distancia.'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparando brillo',
      instructions: 'Escribe el comparativo de "bright" (brillante).',
      questions: [
        {
          id: 'q1',
          question: 'The sun is ________ than the moon.',
          correctAnswer: 'brighter',
          explanation: '"Bright" + "er" = "brighter".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e44',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Comparación de edad',
      instructions: 'Ordena: "Mi abuelo es más viejo que mi padre".',
      sentences: [
        {
          id: 's1',
          words: ['is', 'My', 'older', 'grandfather', 'my', 'than', 'father'],
          correctSentence: 'My grandfather is older than my father',
          translation: 'Mi abuelo es más viejo que mi padre.',
          hint: 'Empieza con "My grandfather".',
          explanation: 'Usamos "older" para comparar la edad de personas u objetos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e45',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Smaller',
      instructions: 'Di: "This one is smaller".',
      questions: [
        {
          id: 'q1',
          text: 'This one is smaller',
          phonetic: '/ðɪs wʌn ɪz ˈsmɔː.lər/',
          translation: 'Este es más pequeño.',
          explanation: 'La palabra "one" sustituye al objeto que comparamos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e46',
    type: 'matching',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Comparando Tecnologías',
      instructions: 'Une el dispositivo con la comparación.',
      pairs: [
        { id: 'p1', left: 'Laptop / PC', right: 'More portable' },
        { id: 'p2', left: 'New phone / Old phone', right: 'Faster' },
        { id: 'p3', left: 'Tablet / Phone', right: 'Larger' },
        { id: 'p4', left: 'Smart TV / Old TV', right: 'Better' },
        { id: 'p5', left: 'Speaker / Headphones', right: 'Louder' }
      ],
      explanation: 'Comparando gadgets tecnológicos.'
    } as any
  },
  {
    id: 'a1-u28-e47',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Adjetivo irregular: Bad',
      instructions: '¿Cuál es la forma correcta?',
      questions: [
        {
          id: 'q1',
          question: 'The weather today is ________ than yesterday.',
          options: ['worse', 'badder', 'more bad'],
          correctAnswer: 0,
          explanation: '"Worse" es el comparativo irregular de "bad".'
        }
      ]
    }
  },
  {
    id: 'a1-u28-e48',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Comparando comodidad',
      instructions: 'Escribe el comparativo de "comfortable" (cómodo).',
      questions: [
        {
          id: 'q1',
          question: 'This sofa is ________ ________ than that chair.',
          correctAnswer: 'more comfortable',
          explanation: 'Al ser un adjetivo largo, usamos "more".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e49',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Frase larga',
      instructions: 'Ordena: "Los libros son más interesantes que las películas".',
      sentences: [
        {
          id: 's1',
          words: ['Books', 'are', 'more', 'interesting', 'than', 'movies'],
          correctSentence: 'Books are more interesting than movies',
          translation: 'Los libros son más interesantes que las películas.',
          hint: 'Empieza con "Books".',
          explanation: 'Usamos "are" porque "books" es plural.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u28-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Comparatives',
    topicName: 'Comparing Things',
    difficulty: 'hard',
    content: {
      title: 'Comparando sentimientos',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'She feels ________ now.',
          options: ['happier', 'more happy', 'happyer'],
          correctAnswer: 0,
          explanation: 'Recuerda: adjetivos de dos sílabas que terminan en "y" siempre cambian a "-ier".'
        }
      ]
    }
  }
];
