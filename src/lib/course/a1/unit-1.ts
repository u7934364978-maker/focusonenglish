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
          pronunciation: '/həˈloʊ/'
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
      instructions: 'Ordena las palabras para decir "I am Juan".',
      sentences: [
        {
          id: 's1',
          words: ['Juan', 'I', 'am', '.'],
          correctSentence: 'I am Juan.',
          translation: 'Yo soy Juan.',
          hint: 'Empieza con el pronombre "I".',
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
          explanation: 'Añadir "too" es la respuesta cortés estándar.'
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
          explanation: 'Concéntrate en el sonido de la "H".'
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
        { id: '3', left: 'Buenas noches (saludo)', right: 'Good evening' }
      ]
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
          explanation: 'Usamos "am" con el pronombre "I".'
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
          explanation: '"Goodbye" se usa al irse.'
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
          pronunciation: '/wɒts jɔː neɪm/'
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
      instructions: 'Ordena las palabras para decir "Good afternoon".',
      sentences: [
        {
          id: 's1',
          words: ['afternoon', 'Good', '!'],
          correctSentence: 'Good afternoon!',
          translation: 'Buenas tardes.',
          hint: 'El adjetivo "Good" va primero.',
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
          explanation: '"I" es el pronombre de la primera persona del singular.'
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
          explanation: 'Habla con claridad.'
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
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Nombre', right: 'Name' },
        { id: '2', left: 'Yo', right: 'I' },
        { id: '3', left: 'Estudiante', right: 'Student' }
      ]
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
          explanation: '"Fine" o "Good" son respuestas comunes.'
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
          explanation: '"Good evening" es para saludar al llegar, "Good night" es para despedirse o dormir.'
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
          pronunciation: '/haʊ ɑː juː/'
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
      instructions: 'Ordena las palabras para decir "My name is Maria".',
      sentences: [
        {
          id: 's1',
          words: ['Maria', 'name', 'My', 'is', '.'],
          correctSentence: 'My name is Maria.',
          translation: 'Mi nombre es Maria.',
          hint: 'Empieza con "My name".',
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
          explanation: '"See you later" es una despedida casual común.'
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
          explanation: 'Intenta enlazar las palabras.'
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
      instructions: 'Une la pregunta con su respuesta.',
      pairs: [
        { id: '1', left: 'How are you?', right: 'I am fine' },
        { id: '2', left: 'What is your name?', right: 'My name is John' },
        { id: '3', left: 'Goodbye', right: 'See you later' }
      ]
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
          explanation: '"Hi" es una versión más corta e informal de "Hello".'
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
          pronunciation: '/naɪs tu miːt juː/'
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
          explanation: '"I\'m" es la forma corta y común de decir "I am".'
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
          explanation: 'La "H" suena como una exhalación suave.'
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
        { id: '3', left: 'He/She', right: 'is' }
      ]
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
          explanation: '"Good morning" es el saludo estándar antes del mediodía.'
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
          explanation: '"What\'s your name?" se usa para preguntar el nombre.'
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
          pronunciation: '/siː juː ˈleɪtə/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e30',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Yo soy estudiante',
      instructions: 'Ordena las palabras para decir "I am a student".',
      sentences: [
        {
          id: 's1',
          words: ['a', 'student', 'I', 'am', '.'],
          correctSentence: 'I am a student.',
          translation: 'Yo soy un estudiante.',
          hint: 'No olvides el artículo "a".',
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
      title: 'Hora de dormir',
      instructions: '¿Qué dices antes de irte a dormir?',
      questions: [
        {
          id: 'q1',
          question: 'Despedida antes de dormir:',
          options: ['Good night', 'Good morning', 'Good afternoon'],
          correctAnswer: 0,
          explanation: '"Good night" se usa únicamente para despedirse al final del día o al ir a dormir.'
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
          explanation: 'Enfatiza la segunda sílaba.'
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
      title: 'Día y Noche',
      instructions: 'Une el momento del día con el saludo.',
      pairs: [
        { id: '1', left: '8:00 AM', right: 'Good morning' },
        { id: '2', left: '3:00 PM', right: 'Good afternoon' },
        { id: '3', left: '8:00 PM', right: 'Good evening' }
      ]
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
      title: 'Mi nombre',
      instructions: 'Completa la frase para decir tu nombre.',
      questions: [
        {
          id: 'q1',
          text: 'My name ___ John.',
          correctAnswer: 'is',
          explanation: 'Usamos "is" para la tercera persona (my name).'
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
      title: '¿Cómo estás?',
      instructions: 'Elige la respuesta más común a "How are you?".',
      questions: [
        {
          id: 'q1',
          question: 'Respuesta estándar:',
          options: ["I'm fine, thank you", "My name is John", "I'm a student"],
          correctAnswer: 0,
          explanation: "I'm fine, thank you es la respuesta más común y cortés."
        }
      ]
    }
  },
  {
    id: 'a1-u1-e36',
    type: 'flashcard',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Yo soy',
          back: 'I am / I\'m',
          example: 'I am from Spain.',
          pronunciation: '/aɪ æm/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e37',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Mucho gusto',
      instructions: 'Ordena para decir "Nice to meet you".',
      sentences: [
        {
          id: 's1',
          words: ['meet', 'to', 'you', 'Nice', '.'],
          correctSentence: 'Nice to meet you.',
          translation: 'Encantado de conocerte.',
          hint: 'Empieza con el adjetivo "Nice".',
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
      title: 'Tardes',
      instructions: '¿A qué hora empiezas a decir "Good afternoon"?',
      questions: [
        {
          id: 'q1',
          question: 'Uso de Good afternoon:',
          options: ['After 12:00 PM', 'Before 10:00 AM', 'At 9:00 PM'],
          correctAnswer: 0,
          explanation: 'Se usa desde el mediodía hasta el atardecer.'
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
      title: 'Pronunciación: Good morning',
      instructions: 'Di "Good morning".',
      questions: [
        {
          id: 'q1',
          text: 'Good morning',
          correctAnswer: 'Good morning',
          explanation: 'Asegúrate de pronunciar la "ng" suavemente.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e40',
    type: 'matching',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Sujetos',
      instructions: 'Une el pronombre en inglés con el español.',
      pairs: [
        { id: '1', left: 'I', right: 'Yo' },
        { id: '2', left: 'You', right: 'Tú / Usted' },
        { id: '3', left: 'He', right: 'Él' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Hola de nuevo',
      instructions: 'Completa la palabra más común.',
      questions: [
        {
          id: 'q1',
          text: 'H_llo!',
          correctAnswer: 'e',
          explanation: 'La palabra es "Hello".'
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
      title: 'Cortesía',
      instructions: '¿Qué dices después de recibir un "Thank you"?',
      questions: [
        {
          id: 'q1',
          question: 'Responder a un agradecimiento:',
          options: ["You're welcome", "Goodbye", "I'm sorry"],
          correctAnswer: 0,
          explanation: '"You\'re welcome" es la respuesta educada a un agradecimiento.'
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
          front: 'Gracias',
          back: 'Thank you / Thanks',
          example: 'Thank you for your help.',
          pronunciation: '/θæŋk juː/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e44',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'De dónde eres',
      instructions: 'Ordena para decir "I am from Spain".',
      sentences: [
        {
          id: 's1',
          words: ['Spain', 'from', 'I', 'am', '.'],
          correctSentence: 'I am from Spain.',
          translation: 'Yo soy de España.',
          hint: 'Empieza con el sujeto "I".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a1-u1-e45',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Puntualidad',
      instructions: '¿Cómo dices "Hola" de forma muy informal?',
      questions: [
        {
          id: 'q1',
          question: 'Saludo muy casual:',
          options: ['Hey', 'Good evening', 'Goodbye'],
          correctAnswer: 0,
          explanation: '"Hey" es muy común entre amigos jóvenes o cercanos.'
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
      title: 'Di tu nombre',
      instructions: 'Di "My name is" y tu nombre.',
      questions: [
        {
          id: 'q1',
          text: 'My name is',
          correctAnswer: 'My name is',
          explanation: 'Habla de forma natural.'
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
      title: 'Despedidas comunes',
      instructions: 'Une las despedidas.',
      pairs: [
        { id: '1', left: 'Goodbye', right: 'Adiós' },
        { id: '2', left: 'See you', right: 'Nos vemos' },
        { id: '3', left: 'Take care', right: 'Cuídate' }
      ]
    } as any
  },
  {
    id: 'a1-u1-e48',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Gracias',
      instructions: 'Completa la palabra de agradecimiento.',
      questions: [
        {
          id: 'q1',
          text: 'Th_nks!',
          correctAnswer: 'a',
          explanation: 'La palabra es "Thanks".'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e49',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Introductions',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      title: 'Ubicación',
      instructions: '¿Cómo dices "Soy de..."?',
      questions: [
        {
          id: 'q1',
          question: 'Indicar origen:',
          options: ['I am from...', 'I am name...', 'I am fine...'],
          correctAnswer: 0,
          explanation: 'Usamos "from" para indicar el lugar de origen.'
        }
      ]
    }
  },
  {
    id: 'a1-u1-e50',
    type: 'flashcard',
    level: 'A1',
    topic: 'Greetings',
    topicName: 'Hello World!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'De nada',
          back: 'You\'re welcome',
          example: 'Thank you! - You\'re welcome.',
          pronunciation: '/jɔː ˈwɛlkəm/'
        }
      ]
    } as any
  }
];
