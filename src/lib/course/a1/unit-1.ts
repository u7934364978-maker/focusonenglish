import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  {
    id: 'a1-u1-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Saludos comunes',
      instructions: 'Elige el saludo correcto para la mañana.',
      questions: [
        {
          id: 'q1',
          question: '¿Qué dices a las 8:00 AM?',
          options: ['Good evening', 'Good morning', 'Good night'],
          correctAnswer: 1,
          explanation: '"Good morning" se usa desde el amanecer hasta el mediodía.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hola',
          back: 'Hello / Hi',
          example: 'Hello, how are you?',
          pronunciation: '/həˈloʊ/',
          explanation: '"Hello" es formal y "Hi" es más informal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Yo soy...',
      instructions: 'Ordena las palabras para traducir "Yo soy Juan".',
      sentences: [
        {
          id: 's1',
          words: ['Juan', 'I', 'am', '.'],
          correctSentence: 'I am Juan.',
          translation: 'Yo soy Juan.',
          hint: 'Empieza con el pronombre "I".',
          explanation: 'En inglés, el pronombre "I" siempre se escribe en mayúscula y va seguido de "am" para presentaciones.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Conocer gente',
      instructions: '¿Cuál es la respuesta más común a "Nice to meet you"?',
      questions: [
        {
          id: 'q1',
          question: 'Persona A: Nice to meet you. \nPersona B: ___________',
          options: ['Nice to meet you too', 'I am fine', 'Good night'],
          correctAnswer: 0,
          explanation: 'Añadir "too" al final es la forma estándar de responder "igualmente".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Hello',
      instructions: 'Di "Hello" claramente por el micrófono.',
      questions: [
        {
          id: 'q1',
          text: 'Hello',
          correctAnswer: 'Hello',
          explanation: 'La "H" en inglés suena como un suspiro suave, no es muda como en español.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Parejas de saludos',
      instructions: 'Une el saludo en español con su traducción al inglés.',
      pairs: [
        { id: '1', left: 'Buenos días', right: 'Good morning' },
        { id: '2', left: 'Buenas tardes', right: 'Good afternoon' },
        { id: '3', left: 'Buenas noches (saludo)', right: 'Good evening' },
        { id: '4', left: 'Hola', right: 'Hello' },
        { id: '5', left: 'Adiós', right: 'Goodbye' }
      ],
      explanation: 'Utilizamos "Good morning" hasta las 12 PM, "Good afternoon" hasta las 6 PM y "Good evening" para saludar por la noche.'
    } as any
  },
  {
    id: 'a1-u1-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Presentación personal',
      instructions: 'Completa el espacio con el verbo correcto.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ a student.',
          correctAnswer: 'am',
          explanation: 'El verbo "to be" para el pronombre "I" siempre es "am".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Despedidas',
      instructions: 'Elige la forma correcta de decir adiós.',
      questions: [
        {
          id: 'q1',
          question: '¿Cuál de estos es una despedida?',
          options: ['Welcome', 'Goodbye', 'Hi'],
          correctAnswer: 1,
          explanation: '"Goodbye" es la forma estándar de despedirse.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Cuál es tu nombre?',
          back: "What's your name?",
          example: "Hi, what's your name?",
          pronunciation: '/wɒts jɔː neɪm/',
          explanation: '"What\'s" es la contracción de "What is".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Buenas tardes',
      instructions: 'Ordena las palabras para traducir "Buenas tardes".',
      sentences: [
        {
          id: 's1',
          words: ['afternoon', 'Good', '!'],
          correctSentence: 'Good afternoon!',
          translation: 'Buenas tardes.',
          hint: 'El adjetivo "Good" va primero.',
          explanation: 'En inglés, el adjetivo descriptivo (como Good) suele preceder al sustantivo (afternoon).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Información personal',
      instructions: 'Elige el pronombre correcto para ti mismo.',
      questions: [
        {
          id: 'q1',
          question: '¿Cómo se dice "Yo" en inglés?',
          options: ['You', 'I', 'He'],
          correctAnswer: 1,
          explanation: 'El pronombre "I" (Yo) siempre debe ir en mayúsculas en inglés.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: I am',
      instructions: 'Di "I am" seguido de tu nombre.',
      questions: [
        {
          id: 'q1',
          text: 'I am',
          correctAnswer: 'I am',
          explanation: 'Pronuncia la "I" como "ai" y la "am" cerrando ligeramente los labios al final.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Nombre y yo',
      instructions: 'Une las palabras con su traducción.',
      pairs: [
        { id: '1', left: 'Nombre', right: 'Name' },
        { id: '2', left: 'Yo', right: 'I' },
        { id: '3', left: 'Estudiante', right: 'Student' },
        { id: '4', left: 'Maestro', right: 'Teacher' },
        { id: '5', left: 'Escuela', right: 'School' }
      ],
      explanation: 'Estas son palabras básicas para presentarte en un entorno académico.'
    } as any
  },
  {
    id: 'a1-u1-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Bien, gracias',
      instructions: 'Completa la respuesta a "¿Cómo estás?".',
      questions: [
        {
          id: 'q1',
          text: 'I am ___, thanks.',
          correctAnswer: 'fine',
          explanation: '"Fine" es una de las respuestas más comunes para indicar que estás bien.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Saludo nocturno',
      instructions: '¿Cuál es un saludo por la noche?',
      questions: [
        {
          id: 'q1',
          question: 'Cuando llegas a una fiesta a las 9:00 PM:',
          options: ['Good night', 'Good evening', 'Good morning'],
          correctAnswer: 1,
          explanation: '"Good evening" es para saludar por la noche. "Good night" es solo para despedirse.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Cómo estás?',
          back: 'How are you?',
          example: 'Hello, how are you today?',
          pronunciation: '/haʊ ɑː juː/',
          explanation: 'Esta es la pregunta estándar para preguntar por el bienestar de alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Mi nombre es...',
      instructions: 'Ordena las palabras para traducir "Mi nombre es Maria".',
      sentences: [
        {
          id: 's1',
          words: ['Maria', 'name', 'My', 'is', '.'],
          correctSentence: 'My name is Maria.',
          translation: 'Mi nombre es Maria.',
          hint: 'Empieza con "My name".',
          explanation: 'Usamos "My name is..." para presentarnos de forma clara.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Despedida informal',
      instructions: 'Elige una forma informal de decir adiós.',
      questions: [
        {
          id: 'q1',
          question: 'Un amigo se va:',
          options: ['See you later', 'Nice to meet you', 'Good morning'],
          correctAnswer: 0,
          explanation: '"See you later" significa "Nos vemos luego" y es muy común entre amigos.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Nice to meet you',
      instructions: 'Di "Nice to meet you".',
      questions: [
        {
          id: 'q1',
          text: 'Nice to meet you',
          correctAnswer: 'Nice to meet you',
          explanation: 'La frase suena casi como una sola palabra larga: nais-tu-mit-chu.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Respuestas básicas',
      instructions: 'Une la pregunta con su respuesta lógica.',
      pairs: [
        { id: '1', left: 'How are you?', right: 'I am fine' },
        { id: '2', left: 'What is your name?', right: 'My name is John' },
        { id: '3', left: 'Goodbye', right: 'See you later' },
        { id: '4', left: 'Nice to meet you', right: 'Nice to meet you too' },
        { id: '5', left: 'Are you a student?', right: 'Yes, I am' }
      ],
      explanation: 'Emparejar preguntas con respuestas te ayuda a mantener una conversación fluida.'
    } as any
  },
  {
    id: 'a1-u1-e21',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Hola informal',
      instructions: '¿Cuál es una forma corta e informal de decir "Hello"?',
      questions: [
        {
          id: 'q1',
          question: 'Saludo informal entre amigos:',
          options: ['Hi', 'Good morning', 'Good night'],
          correctAnswer: 0,
          explanation: '"Hi" es perfectamente aceptable en casi cualquier situación informal.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mucho gusto / Encantado',
          back: 'Nice to meet you',
          example: 'Nice to meet you, I am Sarah.',
          pronunciation: '/naɪs tu miːt juː/',
          explanation: 'Se usa exclusivamente la primera vez que conoces a alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e23',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Cómo estás',
      instructions: 'Ordena las palabras para preguntar "¿Cómo estás?".',
      sentences: [
        {
          id: 's1',
          words: ['you', 'How', 'are', '?'],
          correctSentence: 'How are you?',
          translation: '¿Cómo estás?',
          hint: 'Empieza con la palabra de pregunta "How".',
          explanation: 'En las preguntas, el verbo (are) suele ir antes que el sujeto (you).',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Abreviaturas comunes',
      instructions: '¿Qué significa "I\'m"?',
      questions: [
        {
          id: 'q1',
          question: '"I\'m" es la contracción de:',
          options: ['I am', 'I have', 'I will'],
          correctAnswer: 0,
          explanation: 'Las contracciones son muy comunes en el inglés hablado para ganar fluidez.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e25',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Hi',
      instructions: 'Di "Hi" claramente.',
      questions: [
        {
          id: 'q1',
          text: 'Hi',
          correctAnswer: 'Hi',
          explanation: 'La "i" suena como el diptongo "ai".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e26',
    type: 'matching',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronombres y Verbos',
      instructions: 'Une el pronombre con el verbo ser correspondiente.',
      pairs: [
        { id: '1', left: 'I', right: 'am' },
        { id: '2', left: 'You', right: 'are' },
        { id: '3', left: 'He', right: 'is' },
        { id: '4', left: 'She', right: 'is' },
        { id: '5', left: 'They', right: 'are' }
      ],
      explanation: 'El verbo "to be" cambia su forma dependiendo de la persona que realiza la acción.'
    } as any
  },
  {
    id: 'a1-u1-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Saludo matutino',
      instructions: 'Completa la frase para saludar por la mañana.',
      questions: [
        {
          id: 'q1',
          text: 'Good ___, teacher.',
          correctAnswer: 'morning',
          explanation: 'Utilizamos "morning" para referirnos a cualquier momento antes del almuerzo.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Nombres',
      instructions: '¿Cómo preguntas el nombre de alguien?',
      questions: [
        {
          id: 'q1',
          question: 'Preguntar el nombre:',
          options: ["What's your name?", "How are you?", "Who am I?"],
          correctAnswer: 0,
          explanation: 'Esta es la pregunta más directa y común para conocer el nombre de alguien.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hasta luego',
          back: 'See you later',
          example: 'Goodbye, see you later!',
          pronunciation: '/siː juː ˈleɪtə/',
          explanation: '"Later" significa luego o más tarde.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e30',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Buenas noches',
      instructions: 'Ordena las palabras para despedirte por la noche.',
      sentences: [
        {
          id: 's1',
          words: ['night', 'Good', '.'],
          correctSentence: 'Good night.',
          translation: 'Buenas noches (despedida).',
          hint: 'Usa "night" para despedirte.',
          explanation: 'Recuerda: "Good evening" para llegar, "Good night" para irse.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: '¿Y tú?',
      instructions: '¿Cómo devuelves la pregunta "¿Cómo estás?"?',
      questions: [
        {
          id: 'q1',
          question: 'Persona A: How are you? \nPersona B: I am fine, ________?',
          options: ['and you', 'who are you', 'how is he'],
          correctAnswer: 0,
          explanation: '"And you?" es la forma más corta y natural de devolver la pregunta.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e32',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Goodbye',
      instructions: 'Di "Goodbye" claramente.',
      questions: [
        {
          id: 'q1',
          text: 'Goodbye',
          correctAnswer: 'Goodbye',
          explanation: 'Asegúrate de marcar bien la "d" en medio de la palabra.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e33',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Más despedidas',
      instructions: 'Une las despedidas equivalentes.',
      pairs: [
        { id: '1', left: 'Adiós', right: 'Goodbye' },
        { id: '2', left: 'Chao', right: 'Bye' },
        { id: '3', left: 'Nos vemos', right: 'See you' },
        { id: '4', left: 'Cuídate', right: 'Take care' },
        { id: '5', left: 'Buen día', right: 'Have a nice day' }
      ],
      explanation: 'Existen muchas formas de despedirse dependiendo del grado de confianza.'
    } as any
  },
  {
    id: 'a1-u1-e34',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Mucho gusto corto',
      instructions: 'Completa la respuesta corta a "Nice to meet you".',
      questions: [
        {
          id: 'q1',
          text: 'You ___.',
          correctAnswer: 'too',
          explanation: '"You too" es una forma muy casual de decir "igualmente".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Título de cortesía',
      instructions: '¿Cómo te diriges a un profesor hombre?',
      questions: [
        {
          id: 'q1',
          question: 'Good morning, ________ Smith.',
          options: ['Mr.', 'Mrs.', 'Ms.'],
          correctAnswer: 0,
          explanation: '"Mr." se usa para hombres, independientemente de su estado civil.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e36',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Señorita / Señora',
          back: 'Ms.',
          example: 'Hello, Ms. Johnson.',
          pronunciation: '/mɪz/',
          explanation: '"Ms." es la forma más segura y profesional de dirigirse a una mujer.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e37',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Encantado',
      instructions: 'Ordena para decir "Encantado de conocerte".',
      sentences: [
        {
          id: 's1',
          words: ['meet', 'to', 'you', 'Nice'],
          correctSentence: 'Nice to meet you',
          translation: 'Encantado de conocerte.',
          hint: 'Empieza con "Nice".',
          explanation: 'Esta frase es la forma estándar de cortesía al conocer a alguien nuevo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e38',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: '¿Cómo va todo?',
      instructions: 'Elige la forma más natural de preguntar "¿Cómo va?".',
      questions: [
        {
          id: 'q1',
          question: 'Informal check-in:',
          options: ['How is it going?', 'What is that?', 'Where are you?'],
          correctAnswer: 0,
          explanation: '"How is it going?" es una alternativa muy común a "How are you?".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Mr.',
      instructions: 'Di "Mr." seguido de un nombre.',
      questions: [
        {
          id: 'q1',
          text: 'Mr.',
          correctAnswer: 'Mr.',
          explanation: 'Se pronuncia como "míster".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e40',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Títulos y Nombres',
      instructions: 'Une el título con su uso correcto.',
      pairs: [
        { id: '1', left: 'Mr.', right: 'Hombre' },
        { id: '2', left: 'Mrs.', right: 'Mujer casada' },
        { id: '3', left: 'Ms.', right: 'Mujer (general)' },
        { id: '4', left: 'First name', right: 'Nombre' },
        { id: '5', left: 'Last name', right: 'Apellido' }
      ],
      explanation: 'Saber usar los títulos de cortesía es fundamental para la etiqueta en inglés.'
    } as any
  },
  {
    id: 'a1-u1-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Contracción de nombre',
      instructions: 'Escribe la forma corta de "What is".',
      questions: [
        {
          id: 'q1',
          text: "___ your name?",
          correctAnswer: "What's",
          explanation: 'La contracción "What\'s" es mucho más frecuente que "What is" al hablar.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e42',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Respuesta negativa',
      instructions: '¿Cómo dices que "no" eres algo?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a teacher.',
          options: ['am not', 'is not', 'are not'],
          correctAnswer: 0,
          explanation: 'Para negar con "I am", simplemente añadimos "not" después.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e43',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¡Tenga un buen día!',
          back: 'Have a nice day!',
          example: 'Goodbye, have a nice day!',
          pronunciation: '/hæv ə naɪs deɪ/',
          explanation: 'Una forma muy amable y común de despedirse de alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e44',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Yo no soy',
      instructions: 'Ordena para decir "Yo no soy Juan".',
      sentences: [
        {
          id: 's1',
          words: ['not', 'Juan', 'am', 'I'],
          correctSentence: 'I am not Juan',
          translation: 'Yo no soy Juan.',
          hint: 'Pon "not" después de "am".',
          explanation: 'La estructura negativa es: Sujeto + am/is/are + not.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e45',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Plural de cortesía',
      instructions: '¿Cómo saludas a una clase entera?',
      questions: [
        {
          id: 'q1',
          question: 'Hello, ________.',
          options: ['everyone', 'someone', 'no one'],
          correctAnswer: 0,
          explanation: '"Everyone" significa "todos" y se usa para saludar a un grupo.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e46',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Everyone',
      instructions: 'Di "Hello everyone".',
      questions: [
        {
          id: 'q1',
          text: 'Hello everyone',
          correctAnswer: 'Hello everyone',
          explanation: 'Marca bien la "v" en "everyone".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e47',
    type: 'matching',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Resumen de saludos',
      instructions: 'Une cada saludo con su momento del día.',
      pairs: [
        { id: '1', left: '7 AM', right: 'Good morning' },
        { id: '2', left: '3 PM', right: 'Good afternoon' },
        { id: '3', left: '8 PM', right: 'Good evening' },
        { id: '4', left: '11 PM (al irse)', right: 'Good night' },
        { id: '5', left: 'A cualquier hora', right: 'Hello' }
      ],
      explanation: 'Saber elegir el saludo correcto demuestra que tienes un buen nivel de educación en el idioma.'
    } as any
  },
  {
    id: 'a1-u1-e48',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Apellido',
      instructions: 'Escribe la palabra para "apellido".',
      questions: [
        {
          id: 'q1',
          text: "What is your ___ name?",
          correctAnswer: "last",
          explanation: 'En inglés se usa "last name" o "surname" para el apellido.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e49',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: '¿Qué tal?',
      instructions: '¿Cuál es la forma más informal (estilo Duolingo) de decir "¿Qué pasa?"?',
      questions: [
        {
          id: 'q1',
          question: 'Very informal greeting:',
          options: ["What's up?", "How do you do?", "Good day"],
          correctAnswer: 0,
          explanation: '"What\'s up?" es extremadamente común entre gente joven y amigos cercanos.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Resumen final',
      instructions: '¿Cuál es la mejor forma de presentarte por primera vez?',
      questions: [
        {
          id: 'q1',
          question: 'Conocer a alguien nuevo:',
          options: ["Hi, I am John. Nice to meet you.", "Goodbye John.", "How are you teacher?"],
          correctAnswer: 0,
          explanation: 'Saludar, decir tu nombre y añadir una frase de cortesía es la estructura perfecta.'
        }
      ]
    }
  }
];
