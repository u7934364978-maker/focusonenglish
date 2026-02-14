import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 5: Numbers
 */

export const UNIT_5_EXERCISES: Exercise[] = [
  {
    id: 'a1-u5-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número uno',
      instructions: '¿Cómo se dice "uno" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I have ________ apple.',
          options: ['one', 'two', 'three'],
          correctAnswer: 0,
          explanation: '"One" es el número uno. Usamos "one" para indicar una sola unidad.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dos',
          back: 'Two',
          example: 'I have two eyes.',
          pronunciation: '/tuː/',
          explanation: '"Two" se pronuncia igual que "to" o "too".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Tres gatos',
      instructions: 'Ordena las palabras para traducir "Tres gatos".',
      sentences: [
        {
          id: 's1',
          words: ['cats', 'Three'],
          correctSentence: 'Three cats',
          translation: 'Tres gatos.',
          hint: 'Empieza por el número.',
          explanation: 'En inglés, el número va antes que el sustantivo, igual que en español.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número cuatro',
      instructions: '¿Cuál es el número "cuatro"?',
      questions: [
        {
          id: 'q1',
          question: 'Count to ________.',
          options: ['three', 'four', 'five'],
          correctAnswer: 1,
          explanation: '"Four" es cuatro. No lo confundas con "for" (para).'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Three',
      instructions: 'Di la palabra para "tres".',
      questions: [
        {
          id: 'q1',
          text: 'Three',
          correctAnswer: 'Three',
          explanation: 'La "th" requiere que pongas la lengua entre los dientes y dejes pasar el aire.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Números 1-5',
      instructions: 'Une el español con el inglés.',
      pairs: [
        { id: '1', left: 'Uno', right: 'One' },
        { id: '2', left: 'Dos', right: 'Two' },
        { id: '3', left: 'Tres', right: 'Three' },
        { id: '4', left: 'Cuatro', right: 'Four' },
        { id: '5', left: 'Cinco', right: 'Five' }
      ],
      explanation: 'Dominar los primeros cinco números es el primer paso para contar en inglés.'
    } as any
  },
  {
    id: 'a1-u5-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número cinco',
      instructions: 'Escribe la palabra para el número "cinco".',
      questions: [
        {
          id: 'q1',
          text: 'One, two, three, four, ___.',
          correctAnswer: 'five',
          explanation: '"Five" es cinco. Recuerda la "v" final que suena vibrando en el labio.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número seis',
      instructions: '¿Cómo se dice "seis"?',
      questions: [
        {
          id: 'q1',
          question: 'I see ________ stars.',
          options: ['five', 'six', 'seven'],
          correctAnswer: 1,
          explanation: '"Six" es seis. La "x" suena como "ks".'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Siete',
          back: 'Seven',
          example: 'Seven days in a week.',
          pronunciation: '/ˈsev.ən/',
          explanation: 'Se pronuncia /ˈsev.ən/. Dos sílabas claras.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Ocho perros',
      instructions: 'Ordena para traducir "Ocho perros".',
      sentences: [
        {
          id: 's1',
          words: ['dogs', 'Eight'],
          correctSentence: 'Eight dogs',
          translation: 'Ocho perros.',
          hint: 'Empieza con el número.',
          explanation: '"Eight" termina en sonido "t". El plural de "dog" es "dogs".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número nueve',
      instructions: '¿Cuál es el número "nueve"?',
      questions: [
        {
          id: 'q1',
          question: '________ comes after eight.',
          options: ['Nine', 'Ten', 'Seven'],
          correctAnswer: 0,
          explanation: '"Nine" es nueve. La "e" final es muda.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Five',
      instructions: 'Di la palabra para "cinco".',
      questions: [
        {
          id: 'q1',
          text: 'Five',
          correctAnswer: 'Five',
          explanation: 'La "i" suena larga (/faɪ/) y la "v" debe vibrar suavemente.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Números 6-10',
      instructions: 'Une cada número con su traducción.',
      pairs: [
        { id: '1', left: 'Seis', right: 'Six' },
        { id: '2', left: 'Siete', right: 'Seven' },
        { id: '3', left: 'Ocho', right: 'Eight' },
        { id: '4', left: 'Nueve', right: 'Nine' },
        { id: '5', left: 'Diez', right: 'Ten' }
      ],
      explanation: 'Con estos completas la primera decena de números en inglés.'
    } as any
  },
  {
    id: 'a1-u5-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número diez',
      instructions: 'Escribe la palabra para "diez".',
      questions: [
        {
          id: 'q1',
          text: 'I have ___ fingers.',
          correctAnswer: 'ten',
          explanation: '"Ten" es diez. Corta y con sonido de "e" claro.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Plural básico',
      instructions: '¿Cómo se forma el plural de "book"?',
      questions: [
        {
          id: 'q1',
          question: 'One book, two ________.',
          options: ['bookes', 'books', 'bookies'],
          correctAnswer: 1,
          explanation: 'En inglés, la regla general para formar el plural es añadir una "s" al final del sustantivo.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Coche (singular) -> Coches (plural)',
          back: 'Car -> Cars',
          example: 'I have three cars.',
          pronunciation: '/kɑːrz/',
          explanation: 'La "s" final en "cars" suena un poco vibrada como una "z" suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Cinco manzanas',
      instructions: 'Ordena para decir "Cinco manzanas".',
      sentences: [
        {
          id: 's1',
          words: ['apples', 'Five'],
          correctSentence: 'Five apples',
          translation: 'Cinco manzanas.',
          hint: 'Usa el plural añadiendo "s".',
          explanation: 'Usamos el número seguido del sustantivo en plural.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número once',
      instructions: '¿Cómo se dice "once"?',
      questions: [
        {
          id: 'q1',
          question: 'Ten, ________, twelve.',
          options: ['eleven', 'twelve', 'thirteen'],
          correctAnswer: 0,
          explanation: '"Eleven" es once. Es un número irregular en su formación.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Eight',
      instructions: 'Di la palabra para "ocho".',
      questions: [
        {
          id: 'q1',
          text: 'Eight',
          correctAnswer: 'Eight',
          explanation: 'La combinación "gh" no se pronuncia. Se dice /eɪt/.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Singular y Plural',
      instructions: 'Une el singular con su forma plural o significado.',
      pairs: [
        { id: '1', left: 'Gato', right: 'Cat' },
        { id: '2', left: 'Gatos', right: 'Cats' },
        { id: '3', left: 'Perro', right: 'Dog' },
        { id: '4', left: 'Perros', right: 'Dogs' },
        { id: '5', left: 'Manzanas', right: 'Apples' }
      ],
      explanation: 'Practica la transición de una unidad a varias añadiendo la "s".'
    } as any
  },
  {
    id: 'a1-u5-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número doce',
      instructions: 'Escribe la palabra para "doce".',
      questions: [
        {
          id: 'q1',
          text: 'Ten, eleven, ___.',
          correctAnswer: 'twelve',
          explanation: '"Twelve" es doce. Cuidado con la ortografía: t-w-e-l-v-e.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número trece',
      instructions: '¿Cuál es el número "trece"?',
      questions: [
        {
          id: 'q1',
          question: 'I am ________ years old.',
          options: ['thirteen', 'thirty', 'three'],
          correctAnswer: 0,
          explanation: '"Thirteen" es trece. Los números del 13 al 19 suelen terminar en "-teen".'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Catorce',
          back: 'Fourteen',
          example: 'Fourteen students.',
          pronunciation: '/ˌfɔːrˈtiːn/',
          explanation: 'Literalmente "four" + "teen".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Quince libros',
      instructions: 'Ordena para decir "Quince libros".',
      sentences: [
        {
          id: 's1',
          words: ['books', 'Fifteen'],
          correctSentence: 'Fifteen books',
          translation: 'Quince libros.',
          hint: 'Recuerda el plural "books".',
          explanation: '"Fifteen" cambia la raíz de "five" a "fif".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número quince',
      instructions: '¿Cómo se dice "quince"?',
      questions: [
        {
          id: 'q1',
          question: 'Ten plus five is ________.',
          options: ['fifteen', 'fifty', 'five'],
          correctAnswer: 0,
          explanation: '"Fifteen" es quince. ¡No lo confundas con fifty (cincuenta)!'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Twelve',
      instructions: 'Di la palabra para "doce".',
      questions: [
        {
          id: 'q1',
          text: 'Twelve',
          correctAnswer: 'Twelve',
          explanation: 'La "w" suena como una "u" y la "v" final es muy importante.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e27',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Números 11-15',
      instructions: 'Une cada número con su nombre en inglés.',
      pairs: [
        { id: '1', left: 'Once', right: 'Eleven' },
        { id: '2', left: 'Doce', right: 'Twelve' },
        { id: '3', left: 'Trece', right: 'Thirteen' },
        { id: '4', left: 'Catorce', right: 'Fourteen' },
        { id: '5', left: 'Quince', right: 'Fifteen' }
      ],
      explanation: 'Estos números son clave y suelen ser los más difíciles de recordar al principio.'
    } as any
  },
  {
    id: 'a1-u5-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número dieciséis',
      instructions: 'Escribe la palabra para "dieciséis".',
      questions: [
        {
          id: 'q1',
          text: 'I have ___ friends.',
          correctAnswer: 'sixteen',
          explanation: '"Sixteen" es dieciséis. Se forma con "six" + "teen".'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número diecisiete',
      instructions: '¿Cómo se dice "diecisiete"?',
      questions: [
        {
          id: 'q1',
          question: '________ candles on the cake.',
          options: ['Seventeen', 'Seventy', 'Seven'],
          correctAnswer: 0,
          explanation: '"Seventeen" es diecisiete.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dieciocho',
          back: 'Eighteen',
          example: 'I am eighteen years old.',
          pronunciation: '/ˌeɪˈtiːn/',
          explanation: 'Solo se pone una "t" entre "eight" y "een".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Siete casas',
      instructions: 'Ordena para decir "Siete casas".',
      sentences: [
        {
          id: 's1',
          words: ['houses', 'Seven'],
          correctSentence: 'Seven houses',
          translation: 'Siete casas.',
          hint: 'Usa el plural de house.',
          explanation: 'Para palabras que terminan en sonido similar a "s", a veces añadimos "es" (como houses).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número diecinueve',
      instructions: '¿Cuál es el número "diecinueve"?',
      questions: [
        {
          id: 'q1',
          question: 'Almost twenty, I am ________.',
          options: ['nineteen', 'ninety', 'nine'],
          correctAnswer: 0,
          explanation: '"Nineteen" es diecinueve.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Twenty',
      instructions: 'Di la palabra para "veinte".',
      questions: [
        {
          id: 'q1',
          text: 'Twenty',
          correctAnswer: 'Twenty',
          explanation: 'La "y" final suena como una "i" corta y feliz.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Números 16-20',
      instructions: 'Une cada número con su traducción.',
      pairs: [
        { id: '1', left: 'Dieciséis', right: 'Sixteen' },
        { id: '2', left: 'Diecisiete', right: 'Seventeen' },
        { id: '3', left: 'Dieciocho', right: 'Eighteen' },
        { id: '4', left: 'Diecinueve', right: 'Nineteen' },
        { id: '5', left: 'Veinte', right: 'Twenty' }
      ],
      explanation: 'Has completado los números hasta el 20. ¡Buen trabajo!'
    } as any
  },
  {
    id: 'a1-u5-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Número veinte',
      instructions: 'Escribe la palabra para "veinte".',
      questions: [
        {
          id: 'q1',
          text: 'Ten plus ten is ___.',
          correctAnswer: 'twenty',
          explanation: '"Twenty" es veinte. En inglés americano la segunda "t" suele ser muda.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: '¿Cuántos?',
      instructions: '¿Cómo se pregunta "¿Cuántos?" para objetos?',
      questions: [
        {
          id: 'q1',
          question: '________ apples do you have?',
          options: ['How many', 'How much', 'How old'],
          correctAnswer: 0,
          explanation: '"How many" se usa exclusivamente para sustantivos contables.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Questions',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Cuántos? / ¿Cuántas?',
          back: 'How many?',
          example: 'How many sisters?',
          pronunciation: '/haʊ ˈmen.i/',
          explanation: 'Se usa cuando puedes contar las cosas una a una (1, 2, 3...).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Questions',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: '¿Cuántos perros?',
      instructions: 'Ordena para preguntar "¿Cuántos perros?".',
      sentences: [
        {
          id: 's1',
          words: ['dogs?', 'many', 'How'],
          correctSentence: 'How many dogs?',
          translation: '¿Cuántos perros?',
          hint: 'Usa "How many".',
          explanation: 'Recuerda poner el signo de interrogación solo al final en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Suma simple',
      instructions: '¿Cuánto es 4 + 7?',
      questions: [
        {
          id: 'q1',
          question: 'Four plus seven is ________.',
          options: ['eleven', 'ten', 'twelve'],
          correctAnswer: 0,
          explanation: 'Four (4) + Seven (7) = Eleven (11).'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Fourteen',
      instructions: 'Di la palabra para "catorce".',
      questions: [
        {
          id: 'q1',
          text: 'Fourteen',
          correctAnswer: 'Fourteen',
          explanation: 'Asegúrate de acentuar la última sílaba: four-TEEN.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Números desordenados',
      instructions: 'Une el número con su palabra.',
      pairs: [
        { id: '1', left: '13', right: 'Thirteen' },
        { id: '2', left: '14', right: 'Fourteen' },
        { id: '3', left: '15', right: 'Fifteen' },
        { id: '4', left: '3', right: 'Three' },
        { id: '5', left: '5', right: 'Five' }
      ],
      explanation: 'Diferenciar entre el número base y su versión "-teen" es fundamental.'
    } as any
  },
  {
    id: 'a1-u5-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Muchas sillas',
      instructions: 'Escribe el plural de "chair".',
      questions: [
        {
          id: 'q1',
          text: 'Two ___.',
          correctAnswer: 'chairs',
          explanation: 'Añadimos "s" para formar el plural de "chair".'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Cero',
      instructions: '¿Cómo se dice "cero"?',
      questions: [
        {
          id: 'q1',
          question: 'The number is ________.',
          options: ['zero', 'none', 'nothing'],
          correctAnswer: 0,
          explanation: '"Zero" es el número cero. En contextos informales a veces se dice "oh".'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Número',
          back: 'Number',
          example: 'What is your number?',
          pronunciation: '/ˈnʌmbər/',
          explanation: 'Plural: numbers.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Tengo diez gatos',
      instructions: 'Ordena para decir "Tengo diez gatos".',
      sentences: [
        {
          id: 's1',
          words: ['cats', 'ten', 'have', 'I'],
          correctSentence: 'I have ten cats',
          translation: 'Tengo diez gatos.',
          hint: 'Usa "I have".',
          explanation: 'Estructura: Sujeto + Verbo + Cantidad + Objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Veintiuno',
      instructions: '¿Cómo crees que se dice "veintiuno"?',
      questions: [
        {
          id: 'q1',
          question: 'Twenty + one = ________.',
          options: ['twenty-one', 'twentyone', 'one-twenty'],
          correctAnswer: 0,
          explanation: 'A partir del 21, usamos un guion para unir las decenas y las unidades.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Zero',
      instructions: 'Di la palabra para "cero".',
      questions: [
        {
          id: 'q1',
          text: 'Zero',
          correctAnswer: 'Zero',
          explanation: 'La "z" debe sonar como el zumbido de una abeja.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Repaso final de números',
      instructions: 'Une el número con su escritura.',
      pairs: [
        { id: '1', left: '0', right: 'Zero' },
        { id: '2', left: '11', right: 'Eleven' },
        { id: '3', left: '12', right: 'Twelve' },
        { id: '4', left: '20', right: 'Twenty' },
        { id: '5', left: '21', right: 'Twenty-one' }
      ],
      explanation: 'Estos números completan tu base para contar casi cualquier cosa cotidiana.'
    } as any
  },
  {
    id: 'a1-u5-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Uno solo',
      instructions: 'Escribe la palabra para "uno".',
      questions: [
        {
          id: 'q1',
          text: 'Only ___ house.',
          correctAnswer: 'one',
          explanation: '"One" se usa para enfatizar que hay solo una unidad.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Numbers',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Resumen de números',
      instructions: '¿Qué número va después del nineteen?',
      questions: [
        {
          id: 'q1',
          question: 'Eighteen, nineteen, ________.',
          options: ['twenty', 'ten', 'twenty-one'],
          correctAnswer: 0,
          explanation: '"Twenty" sigue al diecinueve (nineteen).'
        }
      ]
    }
  }
];
