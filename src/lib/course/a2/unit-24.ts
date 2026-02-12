import { Exercise } from '@/lib/exercise-generator';

export const UNIT_24_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Types of Celebrations (1-12) ---
  {
    id: 'a2-u24-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cumpleaños',
          back: 'Birthday',
          example: 'It is my birthday today!',
          pronunciation: '/ˈbɜːθdeɪ/',
          explanation: 'El día en que celebras tu nacimiento.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Common Festivals',
      instructions: 'Une el festival con su traducción.',
      pairs: [
        { id: '1', left: 'Christmas', right: 'Navidad' },
        { id: '2', left: 'Easter', right: 'Semana Santa / Pascua' },
        { id: '3', left: 'New Year’s Eve', right: 'Nochevieja' },
        { id: '4', left: 'Wedding', right: 'Boda' },
        { id: '5', left: 'Anniversary', right: 'Aniversario' }
      ],
      explanation: 'Celebraciones comunes en muchas culturas.'
    } as any
  },
  {
    id: 'a2-u24-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Gift giving',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We usually give ___ to our friends on their birthdays.',
          options: ['presents', 'cards', 'exams'],
          correctAnswer: 0,
          explanation: '"Presents" (o gifts) son los regalos.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Party time',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Are you coming to my birthday ___ ?',
          correctAnswer: 'party',
          explanation: '"Party" es fiesta.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'New Year',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'watch', 'fireworks', 'at', 'midnight', '.'],
          correctSentence: 'We watch fireworks at midnight.',
          translation: 'Vemos fuegos artificiales a medianoche.',
          hint: 'Usa "at midnight".',
          explanation: '"Fireworks" son fuegos artificiales.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Invitado',
          back: 'Guest',
          example: 'There are fifty guests at the wedding.',
          pronunciation: '/ɡest/',
          explanation: 'Persona invitada a un evento.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Invitations',
      instructions: 'Elige el verbo.',
      questions: [
        {
          id: 'q1',
          question: 'I want to ___ all my friends to the dinner.',
          options: ['invite', 'visit', 'celebrate'],
          correctAnswer: 0,
          explanation: '"Invite" es invitar.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Birthday',
      instructions: 'Di "Happy Birthday".',
      questions: [
        {
          id: 'q1',
          text: 'Happy Birthday',
          correctAnswer: 'Happy Birthday',
          explanation: 'La "th" se pronuncia poniendo la lengua entre los dientes: /ˈbɜːθdeɪ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Wedding',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ wore a beautiful white dress.',
          correctAnswer: 'bride',
          explanation: '"Bride" es la novia en una boda.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Celebration habit',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'usually', 'have', 'a', 'big', 'dinner', 'together', '.'],
          correctSentence: 'We usually have a big dinner together.',
          translation: 'Normalmente cenamos todos juntos.',
          hint: 'Usa "usually".',
          explanation: 'Forma común de celebrar en familia.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Celebration People',
      instructions: 'Une el rol con el evento.',
      pairs: [
        { id: '1', left: 'Groom', right: 'Wedding' },
        { id: '2', left: 'Host', right: 'Party' },
        { id: '3', left: 'Graduate', right: 'Graduation' },
        { id: '4', left: 'Winner', right: 'Competition' }
      ],
      explanation: 'Personas clave en diferentes eventos.'
    } as any
  },
  {
    id: 'a2-u24-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Customs',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'In Spain, it is a ___ to eat twelve grapes on New Year’s Eve.',
          options: ['tradition', 'habit', 'rule'],
          correctAnswer: 0,
          explanation: '"Tradition" es tradición.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Ordinal Numbers & Dates (13-24) ---
  {
    id: 'a2-u24-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Primero, Segundo, Tercero',
          back: 'First, Second, Third',
          example: 'Today is the first of May.',
          pronunciation: '/fɜːst/ /ˈsekənd/ /θɜːd/',
          explanation: 'Números ordinales básicos. Se usan para fechas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Ordinal Numbers',
      instructions: 'Une el número con su forma escrita.',
      pairs: [
        { id: '1', left: '4th', right: 'Fourth' },
        { id: '2', left: '5th', right: 'Fifth' },
        { id: '3', left: '12th', right: 'Twelfth' },
        { id: '4', left: '20th', right: 'Twentieth' },
        { id: '5', left: '31st', right: 'Thirty-first' }
      ],
      explanation: 'Formación de números ordinales.'
    } as any
  },
  {
    id: 'a2-u24-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Birthdays',
      instructions: 'Elige la fecha correcta.',
      questions: [
        {
          id: 'q1',
          question: 'My birthday is on August ___ .',
          options: ['22nd', '22th', '22st'],
          correctAnswer: 0,
          explanation: '22 termina en "second", por eso es "22nd".'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Months',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The ___ month of the year is February.',
          correctAnswer: 'second',
          explanation: 'Febrero es el segundo (second) mes.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Christmas date',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Christmas', 'is', 'on', 'December', 'the', 'twenty-fifth', '.'],
          correctSentence: 'Christmas is on December the twenty-fifth.',
          translation: 'Navidad es el veinticinco de diciembre.',
          hint: 'Usa "on".',
          explanation: 'Estructura estándar para fechas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Siglo',
          back: 'Century',
          example: 'We live in the 21st century.',
          pronunciation: '/ˈsentʃəri/',
          explanation: 'Un periodo de 100 años. Usamos ordinales para nombrarlos.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Prepositions for dates',
      instructions: 'Elige la preposición correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The party is ___ Saturday, June ___ .',
          options: ['on / 10th', 'at / 10th', 'in / 10st'],
          correctAnswer: 0,
          explanation: 'Usamos "on" para días y fechas específicas.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Twelfth',
      instructions: 'Di "The twelfth of July".',
      questions: [
        {
          id: 'q1',
          text: 'The twelfth of July',
          correctAnswer: 'The twelfth of July',
          explanation: 'Pronuncia "twelfth" como /twelfθ/.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Spelling Ordinals',
      instructions: 'Escribe el ordinal de 9 (Nine).',
      questions: [
        {
          id: 'q1',
          text: 'He finished in ___ place.',
          correctAnswer: 'ninth',
          explanation: '¡Cuidado! Se quita la "e" en "ninth".'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Today’s date',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Today', 'is', 'the', 'third', 'of', 'March', '.'],
          correctSentence: 'Today is the third of March.',
          translation: 'Hoy es tres de marzo.',
          hint: 'Usa "the" y "of".',
          explanation: 'Forma hablada habitual de las fechas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Abbreviation Mix',
      instructions: 'Une el número con su abreviatura.',
      pairs: [
        { id: '1', left: 'First', right: '1st' },
        { id: '2', left: 'Second', right: '2nd' },
        { id: '3', left: 'Third', right: '3rd' },
        { id: '4', left: 'Fourth', right: '4th' }
      ],
      explanation: 'Abreviaturas de los números ordinales.'
    } as any
  },
  {
    id: 'a2-u24-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Date writing',
      instructions: '¿Cuál es la forma correcta de decir la fecha?',
      questions: [
        {
          id: 'q1',
          question: 'May 4th is spoken as ___ .',
          options: ['May the fourth', 'May four', 'The four of May'],
          correctAnswer: 0,
          explanation: 'Al hablar decimos "the fourth".'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Party & Event Vocabulary (25-36) ---
  {
    id: 'a2-u24-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Decoraciones',
          back: 'Decorations',
          example: 'We put up decorations for the party.',
          pronunciation: '/ˌdekəˈreɪʃənz/',
          explanation: 'Cosas que usamos para adornar un lugar.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Party Items',
      instructions: 'Une el objeto con su traducción.',
      pairs: [
        { id: '1', left: 'Balloons', right: 'Globos' },
        { id: '2', left: 'Cake', right: 'Pastel / Tarta' },
        { id: '3', left: 'Candles', right: 'Velas' },
        { id: '4', left: 'Costume', right: 'Disfraz' },
        { id: '5', left: 'Music', right: 'Música' }
      ],
      explanation: 'Cosas necesarias para una fiesta.'
    } as any
  },
  {
    id: 'a2-u24-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Food & Drink',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Would you like some ___ for the toast?',
          options: ['champagne', 'water', 'tea'],
          correctAnswer: 0,
          explanation: 'Se suele brindar con champán (champagne).'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Birthday cake',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Make a wish and blow out the ___ !',
          correctAnswer: 'candles',
          explanation: 'Soplamos las velas (candles).'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Dressing up',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Everyone', 'wore', 'a', 'funny', 'costume', '.'],
          correctSentence: 'Everyone wore a funny costume.',
          translation: 'Todos llevaban un disfraz gracioso.',
          hint: 'Usa "costume".',
          explanation: '"Costume" es un disfraz.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Envolver un regalo',
          back: 'Wrap a present',
          example: 'I need to wrap this present.',
          pronunciation: '/ræp/',
          explanation: 'Poner papel de regalo a algo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Planning',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'We are ___ a surprise party for him.',
          options: ['organizing', 'making', 'doing'],
          correctAnswer: 0,
          explanation: '"Organizing" es organizar.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Balloons',
      instructions: 'Di "Buy some balloons".',
      questions: [
        {
          id: 'q1',
          text: 'Buy some balloons',
          correctAnswer: 'Buy some balloons',
          explanation: 'La acentuación está al final: /bəˈluːnz/.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'The Venue',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'We ___ a room in a hotel for the wedding.',
          correctAnswer: 'booked',
          explanation: '"Book" es reservar.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Celebration time',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Let’s', 'celebrate', 'your', 'success', '.'],
          correctSentence: 'Let’s celebrate your success.',
          translation: 'Celebremos tu éxito.',
          hint: 'Usa "Let’s".',
          explanation: '"Celebrate" es el verbo celebrar.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Party Verbs',
      instructions: 'Une el verbo con el objeto.',
      pairs: [
        { id: '1', left: 'Send', right: 'an invitation' },
        { id: '2', left: 'Blow out', right: 'the candles' },
        { id: '3', left: 'Bake', right: 'a cake' },
        { id: '4', left: 'Wrap', right: 'a gift' }
      ],
      explanation: 'Acciones típicas en fiestas.'
    } as any
  },
  {
    id: 'a2-u24-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Atmosphere',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The party was great! Everyone had a lot of ___ .',
          options: ['fun', 'funny', 'funs'],
          correctAnswer: 0,
          explanation: '"Have fun" es divertirse. "Fun" es sustantivo.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Traditions & Customs (37-45) ---
  {
    id: 'a2-u24-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Día festivo / Feriado',
          back: 'Public holiday / Bank holiday',
          example: 'Monday is a public holiday.',
          pronunciation: '/ˈpʌblɪk ˈhɒlədeɪ/',
          explanation: 'Día en que no se trabaja por una celebración oficial.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Cultural events',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'A ___ is a large public celebration with a street procession.',
          options: ['parade', 'party', 'meeting'],
          correctAnswer: 0,
          explanation: '"Parade" es un desfile.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Typical food',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'It is a tradition to eat roast ___ on Christmas day.',
          correctAnswer: 'turkey',
          explanation: 'El pavo (turkey) es típico en Navidad en países anglosajones.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Traditions',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'celebrate', 'Easter', 'in', 'the', 'spring', '.'],
          correctSentence: 'We celebrate Easter in the spring.',
          translation: 'Celebramos la Pascua en primavera.',
          hint: 'Usa "in the spring".',
          explanation: 'Estación en la que ocurre el festival.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Festival Symbols',
      instructions: 'Une el símbolo con el festival.',
      pairs: [
        { id: '1', left: 'Pumpkin', right: 'Halloween' },
        { id: '2', left: 'Tree with lights', right: 'Christmas' },
        { id: '3', left: 'Chocolate eggs', right: 'Easter' },
        { id: '4', left: 'Red hearts', right: 'Valentine’s Day' }
      ],
      explanation: 'Símbolos típicos de celebraciones.'
    } as any
  },
  {
    id: 'a2-u24-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Giving wishes',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'On December 31st, we say "___ New Year!".',
          options: ['Happy', 'Merry', 'Great'],
          correctAnswer: 0,
          explanation: 'Decimos "Happy New Year".'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Tradition',
      instructions: 'Di "It is a tradition".',
      questions: [
        {
          id: 'q1',
          text: 'It is a tradition',
          correctAnswer: 'It is a tradition',
          explanation: 'La terminación "-tion" suena como /ʃən/.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Special occasions',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'My parents celebrated their 25th wedding ___ .',
          correctAnswer: 'anniversary',
          explanation: '"Anniversary" es aniversario.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Festival activity',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['People', 'dance', 'in', 'the', 'streets', 'during', 'Carnival', '.'],
          correctSentence: 'People dance in the streets during Carnival.',
          translation: 'La gente baila en las calles durante el Carnaval.',
          hint: 'Usa "during".',
          explanation: 'Descripción de una actividad de festival.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u24-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'What is the ___ month of the year?',
          options: ['third', 'three', 'threeth'],
          correctAnswer: 0,
          explanation: 'Ordinal para preguntar por orden.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Dates review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Halloween is on October the ___ .',
          correctAnswer: 'thirty-first',
          explanation: '31 de octubre.'
        }
      ]
    }
  },
  {
    id: 'a2-u24-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Invitation review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'sent', 'an', 'email', 'to', 'invite', 'them', '.'],
          correctSentence: 'I sent an email to invite them.',
          translation: 'Envié un email para invitarlos.',
          hint: 'Usa el pasado de "send".',
          explanation: 'Acción de invitar.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'medium',
    content: {
      title: 'Celebration Review',
      instructions: 'Une el ordinal con su posición.',
      pairs: [
        { id: '1', left: '1st', right: 'First' },
        { id: '2', left: '11th', right: 'Eleventh' },
        { id: '3', left: '21st', right: 'Twenty-first' },
        { id: '4', left: '30th', right: 'Thirtieth' }
      ],
      explanation: 'Consolidación de números ordinales.'
    } as any
  },
  {
    id: 'a2-u24-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Celebrations & Festivals',
    topicName: 'Celebrations & Festivals',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We ___ our 10th anniversary ___ May 15th.',
          options: ['celebrated / on', 'celebrate / in', 'celebrating / at'],
          correctAnswer: 0,
          explanation: 'Pasado + preposición "on" para fechas.'
        }
      ]
    }
  }
];
