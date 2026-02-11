import { Exercise } from '@/lib/exercise-generator';

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
          explanation: '"One" es uno.'
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
          pronunciation: '/tuː/'
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
          hint: 'Empieza por el número.'
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
          explanation: '"Four" es cuatro.'
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
          explanation: 'La "th" se pronuncia colocando la lengua entre los dientes.'
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
        { id: '3', left: 'Tres', right: 'Three' }
      ]
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
          explanation: '"Five" es cinco.'
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
          explanation: '"Six" es seis.'
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
          pronunciation: '/ˈsev.ən/'
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
          hint: 'Empieza con el número.'
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
          explanation: '"Nine" es nueve.'
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
          explanation: 'Asegúrate de pronunciar la "v" apoyando los dientes en el labio inferior.'
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
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Seis', right: 'Six' },
        { id: '2', left: 'Siete', right: 'Seven' },
        { id: '3', left: 'Diez', right: 'Ten' }
      ]
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
          explanation: '"Ten" es diez.'
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
      instructions: '¿Cómo se hace el plural de "book"?',
      questions: [
        {
          id: 'q1',
          question: 'One book, two ________.',
          options: ['bookes', 'books', 'bookies'],
          correctAnswer: 1,
          explanation: 'La mayoría de los plurales se forman añadiendo "s".'
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
          pronunciation: '/kɑːrz/'
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
          hint: 'Usa el plural añadiendo "s".'
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
          explanation: '"Eleven" es once.'
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
          explanation: 'La "gh" es muda.'
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
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Gato', right: 'Cat' },
        { id: '2', left: 'Gatos', right: 'Cats' },
        { id: '3', left: 'Manzanas', right: 'Apples' }
      ]
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
          explanation: '"Twelve" es doce.'
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
          explanation: '"Thirteen" es trece. Los números del 13 al 19 terminan en "-teen".'
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
          pronunciation: '/ˌfɔːrˈtiːn/'
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
          hint: 'Recuerda el plural "books".'
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
          explanation: '"Fifteen" es quince.'
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
          explanation: 'Asegúrate de pronunciar la "v" al final.'
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
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Once', right: 'Eleven' },
        { id: '2', left: 'Trece', right: 'Thirteen' },
        { id: '3', left: 'Quince', right: 'Fifteen' }
      ]
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
          explanation: '"Sixteen" es dieciséis.'
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
          pronunciation: '/ˌeɪˈtiːn/'
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
          hint: 'Usa el plural de house.'
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
          explanation: 'En algunos acentos, la segunda "t" apenas se oye.'
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
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Dieciséis', right: 'Sixteen' },
        { id: '2', left: 'Dieciocho', right: 'Eighteen' },
        { id: '3', left: 'Veinte', right: 'Twenty' }
      ]
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
          explanation: '"Twenty" es veinte.'
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
      instructions: '¿Cómo se pregunta "¿Cuántos?"?',
      questions: [
        {
          id: 'q1',
          question: '________ apples do you have?',
          options: ['How many', 'How much', 'How old'],
          correctAnswer: 0,
          explanation: '"How many" se usa para preguntar cantidad de cosas contables.'
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
          pronunciation: '/haʊ ˈmen.i/'
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
          hint: 'Usa "How many".'
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
          explanation: '4 + 7 = 11 (eleven).'
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
          explanation: 'Pon el énfasis en "-teen".'
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
      title: 'Más números',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Catorce', right: 'Fourteen' },
        { id: '2', left: 'Diecisiete', right: 'Seventeen' },
        { id: '3', left: 'Diecinueve', right: 'Nineteen' }
      ]
    } as any
  },
  {
    id: 'a1-u5-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Questions',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: '¿Cuántas tazas?',
      instructions: 'Escribe la palabra que falta para preguntar cantidad.',
      questions: [
        {
          id: 'q1',
          text: 'How ___ cups?',
          correctAnswer: 'many',
          explanation: '"How many" para cantidad.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Plural de "man"',
      instructions: '¿Cuál es el plural de "man" (hombre)?',
      questions: [
        {
          id: 'q1',
          question: 'One man, two ________.',
          options: ['men', 'mans', 'mens'],
          correctAnswer: 0,
          explanation: '"Men" es un plural irregular.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mujer (singular) -> Mujeres (plural)',
          back: 'Woman -> Women',
          example: 'Two women in the car.',
          pronunciation: '/ˈwɪm.ɪn/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u5-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Dos hombres',
      instructions: 'Ordena para decir "Dos hombres".',
      sentences: [
        {
          id: 's1',
          words: ['men', 'Two'],
          correctSentence: 'Two men',
          translation: 'Dos hombres.',
          hint: 'Usa el plural irregular.'
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
      title: 'Resta simple',
      instructions: '¿Cuánto es 20 - 5?',
      questions: [
        {
          id: 'q1',
          question: 'Twenty minus five is ________.',
          options: ['fifteen', 'fifty', 'five'],
          correctAnswer: 0,
          explanation: '20 - 5 = 15 (fifteen).'
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
      title: 'Pronunciación: Fifteen',
      instructions: 'Di la palabra para "quince".',
      questions: [
        {
          id: 'q1',
          text: 'Fifteen',
          correctAnswer: 'Fifteen',
          explanation: 'No digas "fiveteen", es "fifteen".'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Plurales irregulares',
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Hombre', right: 'Man' },
        { id: '2', left: 'Hombres', right: 'Men' },
        { id: '3', left: 'Mujeres', right: 'Women' }
      ]
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
      title: 'Número cuatro',
      instructions: 'Escribe el número "cuatro".',
      questions: [
        {
          id: 'q1',
          text: 'Two plus two is ___.',
          correctAnswer: 'four',
          explanation: '"Four" es cuatro.'
        }
      ]
    }
  },
  {
    id: 'a1-u5-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Plurals',
    topicName: 'Counting Sheep',
    difficulty: 'easy',
    content: {
      title: 'Repaso plurals',
      instructions: '¿Cuál es el plural de "boy"?',
      questions: [
        {
          id: 'q1',
          question: 'One boy, two ________.',
          options: ['boys', 'boies', 'boyes'],
          correctAnswer: 0,
          explanation: 'El plural de boy es boys.'
        }
      ]
    }
  }
];
