import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 6: Colors
 */

export const UNIT_6_EXERCISES: Exercise[] = [
  {
    id: 'a1-u6-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'El color de las manzanas',
      instructions: '¿Cuál es el color típico de una manzana madura?',
      questions: [
        {
          id: 'q1',
          question: 'The apple is ________.',
          options: ['red', 'blue', 'green'],
          correctAnswer: 0,
          explanation: '"Red" significa rojo. Es el color más común asociado con las manzanas en los ejercicios básicos.'
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
          pronunciation: '/bluː/',
          explanation: '"Blue" se pronuncia como "blu". Es el color del cielo y del mar.'
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
          hint: 'Empieza con la mayúscula "The".',
          explanation: 'En inglés, la estructura es Sujeto (The sky) + Verbo (is) + Adjetivo/Color (blue).'
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
      title: 'El color del césped',
      instructions: '¿Qué color tiene el césped?',
      questions: [
        {
          id: 'q1',
          question: 'The grass is ________.',
          options: ['yellow', 'green', 'black'],
          correctAnswer: 1,
          explanation: '"Green" significa verde. Se pronuncia con una "i" larga: /ɡriːn/.'
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
      instructions: 'Pronuncia la palabra para "amarillo".',
      questions: [
        {
          id: 'q1',
          text: 'Yellow',
          correctAnswer: 'Yellow',
          explanation: 'En "Yellow", la "Y" suena como una "i" muy suave, no como la "y" fuerte del español.'
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
      title: 'Mezcla de colores',
      instructions: 'Une cada color en español con su traducción al inglés.',
      pairs: [
        { id: '1', left: 'Rojo', right: 'Red' },
        { id: '2', left: 'Verde', right: 'Green' },
        { id: '3', left: 'Blanco', right: 'White' },
        { id: '4', left: 'Negro', right: 'Black' },
        { id: '5', left: 'Amarillo', right: 'Yellow' }
      ].sort(() => Math.random() - 0.5)
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
      title: 'La leche',
      instructions: 'Escribe el color de la leche en inglés.',
      questions: [
        {
          id: 'q1',
          text: 'Milk is [white].',
          correctAnswer: 'white',
          explanation: '"White" significa blanco. La "h" es muda y la "i" suena como "ai".'
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
      title: 'Café solo',
      instructions: '¿Cómo describirías el café sin leche?',
      questions: [
        {
          id: 'q1',
          question: 'Coffee is ________.',
          options: ['white', 'black', 'brown'],
          correctAnswer: 1,
          explanation: '"Black" es negro. "White coffee" es café con leche, pero el café solo es "black coffee".'
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
          pronunciation: '/bɪɡ/',
          explanation: '"Big" se usa para tamaño general. Se pronuncia con una "i" corta y seca.'
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
      instructions: 'Ordena las palabras para decir "La casa es grande".',
      sentences: [
        {
          id: 's1',
          words: ['big', 'is', 'house', 'The'],
          correctSentence: 'The house is big',
          translation: 'La casa es grande.',
          hint: 'Sujeto + is + adjetivo.',
          explanation: 'Cuando usamos el verbo "to be" (is), el adjetivo va al final de la frase.'
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
      title: 'El ratón',
      instructions: '¿Cuál es el tamaño típico de un ratón?',
      questions: [
        {
          id: 'q1',
          question: 'The mouse is ________.',
          options: ['small', 'big', 'fast'],
          correctAnswer: 0,
          explanation: '"Small" significa pequeño. La "a" suena como una "o" abierta: /smɔːl/.'
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
      instructions: 'Pronuncia la palabra para "naranja".',
      questions: [
        {
          id: 'q1',
          text: 'Orange',
          correctAnswer: 'Orange',
          explanation: 'La terminación "-ge" suena suave, parecida a una "y" castellana en "yo".'
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
      title: 'Opuestos básicos',
      instructions: 'Une cada palabra con su opuesto.',
      pairs: [
        { id: '1', left: 'Big', right: 'Small' },
        { id: '2', left: 'Black', right: 'White' },
        { id: '3', left: 'Hot', right: 'Cold' },
        { id: '4', left: 'Yes', right: 'No' },
        { id: '5', left: 'Hello', right: 'Goodbye' }
      ].sort(() => Math.random() - 0.5)
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
      title: 'La fruta naranja',
      instructions: 'Escribe el nombre del color naranja en inglés.',
      questions: [
        {
          id: 'q1',
          text: 'The fruit is [orange].',
          correctAnswer: 'orange',
          explanation: '"Orange" es tanto el nombre de la fruta como el color naranja.'
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
      instructions: '¿Cómo se dice "rosa" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'The flower is ________.',
          options: ['pink', 'purple', 'grey'],
          correctAnswer: 0,
          explanation: '"Pink" es rosa. No lo confundas con "rose", que es la flor rosa.'
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
          pronunciation: '/ˈpɜːrpl/',
          explanation: '"Purple" se pronuncia algo así como "pérpol". Es el color morado o púrpura.'
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
      title: 'Descripción de objeto',
      instructions: 'Ordena para decir "Un coche rojo".',
      sentences: [
        {
          id: 's1',
          words: ['car', 'red', 'A'],
          correctSentence: 'A red car',
          translation: 'Un coche rojo.',
          hint: 'El color siempre va antes que el objeto.',
          explanation: 'Regla de oro: en inglés, los adjetivos (como los colores) van DELANTE del sustantivo.'
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
      instructions: '¿Cuál es el color del elefante?',
      questions: [
        {
          id: 'q1',
          question: 'The elephant is ________.',
          options: ['grey', 'brown', 'pink'],
          correctAnswer: 0,
          explanation: '"Grey" (o "gray") significa gris. Ambas escrituras son correctas, "grey" es más común en Reino Unido.'
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
      instructions: 'Di el color verde en inglés.',
      questions: [
        {
          id: 'q1',
          text: 'Green',
          correctAnswer: 'Green',
          explanation: 'Asegúrate de alargar la "ee" para que suene como una "i" española clara y larga.'
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
      title: 'Más colores variados',
      instructions: 'Empareja los colores.',
      pairs: [
        { id: '1', left: 'Marrón', right: 'Brown' },
        { id: '2', left: 'Gris', right: 'Grey' },
        { id: '3', left: 'Morado', right: 'Purple' },
        { id: '4', left: 'Rosa', right: 'Pink' },
        { id: '5', left: 'Naranja', right: 'Orange' }
      ].sort(() => Math.random() - 0.5)
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
      title: 'El cielo nocturno',
      instructions: '¿De qué color es el cielo por la noche?',
      questions: [
        {
          id: 'q1',
          text: 'The night sky is [black].',
          correctAnswer: 'black',
          explanation: '"Black" es negro. Recuerda que la "ck" suena como una "k" fuerte.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Chocolate',
      instructions: '¿De qué color suele ser el chocolate?',
      questions: [
        {
          id: 'q1',
          question: 'Chocolate is usually ________.',
          options: ['blue', 'brown', 'green'],
          correctAnswer: 1,
          explanation: '"Brown" significa marrón. Se pronuncia como "braun".'
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
          front: 'Bonito',
          back: 'Beautiful',
          example: 'The flower is beautiful.',
          pronunciation: '/ˈbjuːtɪfl/',
          explanation: '"Beautiful" es un adjetivo largo que significa hermoso o muy bonito.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Libro azul',
      instructions: 'Ordena para decir "Un libro azul".',
      sentences: [
        {
          id: 's1',
          words: ['book', 'blue', 'A'],
          correctSentence: 'A blue book',
          translation: 'Un libro azul.',
          hint: 'Pon el color antes que el libro.',
          explanation: 'Primero el color (blue) y luego el objeto (book). ¡Al revés que en español!'
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
      title: 'Felicidad',
      instructions: '¿Cómo se dice "feliz"?',
      questions: [
        {
          id: 'q1',
          question: 'I am ________.',
          options: ['happy', 'sad', 'angry'],
          correctAnswer: 0,
          explanation: '"Happy" es feliz. La "h" inicial se aspira, como echando aire.'
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
      title: 'Pronunciación: Beautiful',
      instructions: 'Pronuncia la palabra para "hermoso".',
      questions: [
        {
          id: 'q1',
          text: 'Beautiful',
          correctAnswer: 'Beautiful',
          explanation: 'Divide la palabra: beau-ti-ful. El énfasis está al principio.'
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
      title: 'Emociones básicas',
      instructions: 'Une cada emoción con su traducción.',
      pairs: [
        { id: '1', left: 'Feliz', right: 'Happy' },
        { id: '2', left: 'Triste', right: 'Sad' },
        { id: '3', left: 'Enojado', right: 'Angry' },
        { id: '4', left: 'Cansado', right: 'Tired' },
        { id: '5', left: 'Hambriento', right: 'Hungry' }
      ].sort(() => Math.random() - 0.5)
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
      title: 'Tristeza',
      instructions: 'Traduce la palabra "triste" al inglés.',
      questions: [
        {
          id: 'q1',
          text: 'The boy is [sad].',
          correctAnswer: 'sad',
          explanation: '"Sad" significa triste. Es una palabra corta con "a" abierta.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Nieve',
      instructions: '¿De qué color es la nieve?',
      questions: [
        {
          id: 'q1',
          question: 'Snow is ________.',
          options: ['white', 'black', 'grey'],
          correctAnswer: 0,
          explanation: '"White" es blanco. La nieve siempre es white.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Oro / Dorado',
          back: 'Gold',
          example: 'Gold is expensive.',
          pronunciation: '/ɡəʊld/',
          explanation: '"Gold" se usa tanto para el metal oro como para el color dorado.'
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
      title: 'Manzana roja',
      instructions: 'Ordena para decir "Una manzana roja".',
      sentences: [
        {
          id: 's1',
          words: ['apple', 'red', 'A'],
          correctSentence: 'A red apple',
          translation: 'Una manzana roja.',
          hint: 'Recuerda el orden: Color + Objeto.',
          explanation: 'Incluso en frases cortas, el color (red) precede al objeto (apple).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'El Sol',
      instructions: '¿De qué color dibujamos el Sol?',
      questions: [
        {
          id: 'q1',
          question: 'The sun is ________.',
          options: ['purple', 'yellow', 'pink'],
          correctAnswer: 1,
          explanation: '"Yellow" es amarillo. Se asocia siempre con el Sol en dibujos.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: White',
      instructions: 'Pronuncia el color blanco en inglés.',
      questions: [
        {
          id: 'q1',
          text: 'White',
          correctAnswer: 'White',
          explanation: 'La "w" inicial suena como una "u". No pronuncies la "h".'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Objects',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Colores y Objetos',
      instructions: 'Une el objeto con su color típico.',
      pairs: [
        { id: '1', left: 'Sun', right: 'Yellow' },
        { id: '2', left: 'Grass', right: 'Green' },
        { id: '3', left: 'Milk', right: 'White' },
        { id: '4', left: 'Coal', right: 'Black' },
        { id: '5', left: 'Sky', right: 'Blue' }
      ].sort(() => Math.random() - 0.5)
    } as any
  },
  {
    id: 'a1-u6-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Plátano',
      instructions: 'Escribe el color del plátano.',
      questions: [
        {
          id: 'q1',
          text: 'The banana is [yellow].',
          correctAnswer: 'yellow',
          explanation: 'Los plátanos maduros son "yellow" (amarillos).'
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
      title: 'Velocidad',
      instructions: '¿Cómo se dice "rápido" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'The car is ________.',
          options: ['slow', 'fast', 'old'],
          correctAnswer: 1,
          explanation: '"Fast" significa rápido. Su opuesto es "slow" (lento).'
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
          front: 'Lento',
          back: 'Slow',
          example: 'The turtle is slow.',
          pronunciation: '/sləʊ/',
          explanation: '"Slow" significa lento. La "ow" suena como una "o" que se cierra en "u".'
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
      title: 'Gato negro',
      instructions: 'Ordena para decir "Un gato negro".',
      sentences: [
        {
          id: 's1',
          words: ['cat', 'black', 'A'],
          correctSentence: 'A black cat',
          translation: 'Un gato negro.',
          hint: 'Color + Animal.',
          explanation: 'La estructura es siempre: Artículo + Color + Objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Plata / Plateado',
      instructions: '¿Cómo se dice "plateado"?',
      questions: [
        {
          id: 'q1',
          question: 'The ring is ________.',
          options: ['silver', 'gold', 'bronze'],
          correctAnswer: 0,
          explanation: '"Silver" es plata o plateado. Se pronuncia "sílver".'
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
      title: 'Pronunciación: Happy',
      instructions: 'Pronuncia la palabra "feliz".',
      questions: [
        {
          id: 'q1',
          text: 'Happy',
          correctAnswer: 'Happy',
          explanation: 'Recuerda que la "H" debe sonar como un suspiro fuerte.'
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
      title: 'Cualidades',
      instructions: 'Une cada adjetivo con su traducción.',
      pairs: [
        { id: '1', left: 'Beautiful', right: 'Hermoso' },
        { id: '2', left: 'Ugly', right: 'Feo' },
        { id: '3', left: 'New', right: 'Nuevo' },
        { id: '4', left: 'Old', right: 'Viejo' },
        { id: '5', left: 'Fast', right: 'Rápido' }
      ].sort(() => Math.random() - 0.5)
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
      title: 'Nuevo',
      instructions: 'Escribe la palabra para "nuevo".',
      questions: [
        {
          id: 'q1',
          text: 'The phone is [new].',
          correctAnswer: 'new',
          explanation: '"New" significa nuevo. Se pronuncia "niú".'
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
      title: 'Vejez',
      instructions: '¿Cuál es el opuesto de "new"?',
      questions: [
        {
          id: 'q1',
          question: 'The car is ________.',
          options: ['new', 'old', 'young'],
          correctAnswer: 1,
          explanation: '"Old" significa viejo. Se usa tanto para objetos como para personas.'
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
          front: 'Feo',
          back: 'Ugly',
          example: 'The monster is ugly.',
          pronunciation: '/ˈʌɡli/',
          explanation: '"Ugly" es el opuesto de "beautiful". La "u" suena parecida a una "a".'
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
      title: 'Mar azul',
      instructions: 'Ordena para decir "El mar es azul".',
      sentences: [
        {
          id: 's1',
          words: ['blue', 'is', 'sea', 'The'],
          correctSentence: 'The sea is blue',
          translation: 'El mar es azul.',
          hint: 'The sea + is + color.',
          explanation: 'Estructura simple: El mar (Sujeto) + es (Verbo) + azul (Color).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u6-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Zanahorias',
      instructions: '¿De qué color son las zanahorias?',
      questions: [
        {
          id: 'q1',
          question: 'Carrots are ________.',
          options: ['orange', 'purple', 'black'],
          correctAnswer: 0,
          explanation: '"Orange" es naranja. Las zanahorias son el ejemplo perfecto de este color.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Purple',
      instructions: 'Pronuncia la palabra para "morado".',
      questions: [
        {
          id: 'q1',
          text: 'Purple',
          correctAnswer: 'Purple',
          explanation: 'La primera sílaba tiene una "u" que suena como una "e" cerrada.'
        }
      ]
    }
  },
  {
    id: 'a1-u6-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Repaso Final de Colores',
      instructions: 'Une cada color en español con el inglés.',
      pairs: [
        { id: '1', left: 'Gris', right: 'Grey' },
        { id: '2', left: 'Marrón', right: 'Brown' },
        { id: '3', left: 'Rosa', right: 'Pink' },
        { id: '4', left: 'Blanco', right: 'White' },
        { id: '5', left: 'Negro', right: 'Black' }
      ].sort(() => Math.random() - 0.5)
    } as any
  },
  {
    id: 'a1-u6-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Colors',
    topicName: 'Rainbow Colors',
    difficulty: 'easy',
    content: {
      title: 'Arcoíris',
      instructions: 'Escribe el nombre del color rojo.',
      questions: [
        {
          id: 'q1',
          text: 'The first color of the rainbow is [red].',
          correctAnswer: 'red',
          explanation: '"Red" es el primer color del arcoíris. ¡Fácil de recordar!'
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
      title: 'Color Favorito',
      instructions: '¿Cómo se dice "Mi color favorito"?',
      questions: [
        {
          id: 'q1',
          question: 'My ________ color is blue.',
          options: ['favourite', 'best', 'good'],
          correctAnswer: 0,
          explanation: '"Favourite" (o "favorite") significa favorito. Se coloca antes del sustantivo "color".'
        }
      ]
    }
  }
];
