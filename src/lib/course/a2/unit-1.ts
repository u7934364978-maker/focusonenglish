import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = [
  // --- DISCOVERY: Flashcards & Matching (1-15) ---
  {
    id: 'a2-u1-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Nacionalidad',
          back: 'Nationality',
          example: 'What is your nationality?',
          pronunciation: '/ˌnæʃəˈnæləti/',
          explanation: 'Se refiere al país de origen o pertenencia legal.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e2',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Estado civil',
          back: 'Marital status',
          example: 'Please state your marital status on the form.',
          pronunciation: '/ˈmærɪtəl ˈsteɪtəs/',
          explanation: 'Indica si una persona está soltera, casada, etc.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e3',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ocupación',
          back: 'Occupation',
          example: 'What is your current occupation?',
          pronunciation: '/ˌɒkjʊˈpeɪʃən/',
          explanation: 'Sinónimo formal de "job" o trabajo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e4',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Soltero/a',
          back: 'Single',
          example: 'He is currently single.',
          pronunciation: '/ˈsɪŋɡəl/',
          explanation: 'Persona que no está casada ni tiene pareja formal.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e5',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Casado/a',
          back: 'Married',
          example: 'They have been married for ten years.',
          pronunciation: '/ˈmærid/',
          explanation: 'Persona que ha contraído matrimonio.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e6',
    type: 'matching',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Common Adjectives',
      instructions: 'Une el adjetivo con su significado.',
      pairs: [
        { id: '1', left: 'Friendly', right: 'Amigable' },
        { id: '2', left: 'Shy', right: 'Tímido/a' },
        { id: '3', left: 'Outgoing', right: 'Extrovertido/a' },
        { id: '4', left: 'Kind', right: 'Amable' },
        { id: '5', left: 'Serious', right: 'Serio/a' }
      ],
      explanation: 'Estos adjetivos se usan frecuentemente para describir la personalidad.'
    } as any
  },
  {
    id: 'a2-u1-e7',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Dirección',
          back: 'Address',
          example: 'Write your home address here.',
          pronunciation: '/əˈdres/',
          explanation: 'El lugar donde vive una persona.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e8',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Fecha de nacimiento',
          back: 'Date of birth',
          example: 'My date of birth is May 12th.',
          pronunciation: '/deɪt əv bɜːθ/',
          explanation: 'A menudo abreviado como DOB en formularios.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e9',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Apellido',
          back: 'Surname / Last name',
          example: 'What is your surname?',
          pronunciation: '/ˈsɜːneɪm/',
          explanation: '"Surname" es más común en el Reino Unido, "Last name" en EE. UU.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e10',
    type: 'matching',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Personal Info Labels',
      instructions: 'Une la etiqueta con la información correspondiente.',
      pairs: [
        { id: '1', left: 'First name', right: 'John' },
        { id: '2', left: 'Surname', right: 'Smith' },
        { id: '3', left: 'Age', right: '25' },
        { id: '4', left: 'Nationality', right: 'British' },
        { id: '5', left: 'Occupation', right: 'Teacher' }
      ],
      explanation: 'Información básica que se encuentra en perfiles y formularios.'
    } as any
  },
  {
    id: 'a2-u1-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Lugar de nacimiento',
          back: 'Place of birth',
          example: 'My place of birth is Madrid.',
          pronunciation: '/pleɪs əv bɜːθ/',
          explanation: 'La ciudad o país donde naciste.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e12',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Correo electrónico',
          back: 'Email address',
          example: 'Please provide your email address.',
          pronunciation: '/ˈiːmeɪl əˈdres/',
          explanation: 'Dirección para correspondencia digital.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Número de teléfono',
          back: 'Phone number',
          example: 'Can I have your phone number?',
          pronunciation: '/fəʊn ˈnʌmbə/',
          explanation: 'Número de contacto telefónico.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Physical Description',
      instructions: 'Une el adjetivo con su traducción.',
      pairs: [
        { id: '1', left: 'Tall', right: 'Alto/a' },
        { id: '2', left: 'Short', right: 'Bajo/a' },
        { id: '3', left: 'Slim', right: 'Delgado/a' },
        { id: '4', left: 'Curly hair', right: 'Pelo rizado' },
        { id: '5', left: 'Blue eyes', right: 'Ojos azules' }
      ],
      explanation: 'Adjetivos básicos para describir la apariencia física.'
    } as any
  },
  {
    id: 'a2-u1-e15',
    type: 'flashcard',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Intereses',
          back: 'Interests',
          example: 'What are your main interests?',
          pronunciation: '/ˈɪntrəsts/',
          explanation: 'Cosas que te gusta hacer o aprender.'
        }
      ]
    } as any
  },
  // --- PRACTICE: Multiple Choice & Fill-blank (16-35) ---
  {
    id: 'a2-u1-e16',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Verb to be: Present',
      instructions: 'Elige la forma correcta del verbo "to be".',
      questions: [
        {
          id: 'q1',
          question: 'I ___ from Spain.',
          options: ['is', 'am', 'are'],
          correctAnswer: 1,
          explanation: 'Para "I", siempre usamos "am".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e17',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Basic Info',
      instructions: 'Completa la oración con la palabra correcta.',
      questions: [
        {
          id: 'q1',
          text: 'My ___ is Smith.',
          correctAnswer: 'surname',
          explanation: 'Smith es un apellido (surname).'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e18',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Nationality',
      instructions: 'Elige el adjetivo de nacionalidad correcto.',
      questions: [
        {
          id: 'q1',
          question: 'She is from France. She is ___.',
          options: ['France', 'French', 'Frances'],
          correctAnswer: 1,
          explanation: 'El adjetivo para Francia es "French".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e19',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Age',
      instructions: 'Completa con el verbo correcto.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ 20 years old.',
          correctAnswer: 'am',
          explanation: 'En inglés usamos el verbo "to be" para expresar la edad.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e20',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Marital Status',
      instructions: 'Elige el término correcto.',
      questions: [
        {
          id: 'q1',
          question: 'He has a wife. He is ___.',
          options: ['single', 'divorced', 'married'],
          correctAnswer: 2,
          explanation: 'Si tiene esposa, está casado (married).'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Present Simple: to be',
      instructions: 'Completa con "is" o "are".',
      questions: [
        {
          id: 'q1',
          text: 'My parents ___ from Italy.',
          correctAnswer: 'are',
          explanation: '"Parents" es plural, por lo que usamos "are".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e22',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Occupation',
      instructions: 'Elige el artículo correcto (a/an).',
      questions: [
        {
          id: 'q1',
          question: 'I am ___ engineer.',
          options: ['a', 'an', 'the'],
          correctAnswer: 1,
          explanation: 'Usamos "an" antes de palabras que empiezan por vocal.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e23',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Address Info',
      instructions: 'Completa con la palabra adecuada.',
      questions: [
        {
          id: 'q1',
          text: 'What is your home ___?',
          correctAnswer: 'address',
          explanation: 'Se pregunta por la dirección (address).'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Possessive Adjectives',
      instructions: 'Elige el adjetivo posesivo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'This is my sister. ___ name is Anna.',
          options: ['His', 'Her', 'Its'],
          correctAnswer: 1,
          explanation: 'Para una mujer (sister), usamos "Her".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e25',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Birth Info',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Where ___ you born?',
          correctAnswer: 'were',
          explanation: 'Para preguntar el lugar de nacimiento en pasado con "you", usamos "were born".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e26',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Describing Personality',
      instructions: 'Elige el adjetivo opuesto.',
      questions: [
        {
          id: 'q1',
          question: 'What is the opposite of "friendly"?',
          options: ['Kind', 'Unfriendly', 'Outgoing'],
          correctAnswer: 1,
          explanation: 'El prefijo "un-" se usa a menudo para crear el opuesto de adjetivos.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e27',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Job Titles',
      instructions: 'Completa con la profesión.',
      questions: [
        {
          id: 'q1',
          text: 'A person who teaches is a ___.',
          correctAnswer: 'teacher',
          explanation: 'El sufijo "-er" indica a menudo la persona que realiza la acción.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e28',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Personal Pronouns',
      instructions: 'Elige el pronombre correcto.',
      questions: [
        {
          id: 'q1',
          question: 'John and I are students. ___ are in the same class.',
          options: ['They', 'We', 'You'],
          correctAnswer: 1,
          explanation: '"John and I" equivale a "We" (nosotros).'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Negative form: to be',
      instructions: 'Completa con la forma negativa contraída.',
      questions: [
        {
          id: 'q1',
          text: 'She ___ married. She is single.',
          correctAnswer: "isn't",
          explanation: '"Isn\'t" es la contracción de "is not".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e30',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Question words',
      instructions: 'Elige la palabra de pregunta correcta.',
      questions: [
        {
          id: 'q1',
          question: '___ old are you?',
          options: ['Who', 'What', 'How'],
          correctAnswer: 2,
          explanation: 'Usamos "How old" para preguntar la edad.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e31',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Plural nouns',
      instructions: 'Completa con el plural de "child".',
      questions: [
        {
          id: 'q1',
          text: 'I have three ___.',
          correctAnswer: 'children',
          explanation: '"Children" es un plural irregular de "child".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e32',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Formal Introductions',
      instructions: 'Elige la respuesta más formal.',
      questions: [
        {
          id: 'q1',
          question: 'How do you do?',
          options: ['I am fine', 'How do you do?', 'Hi there'],
          correctAnswer: 1,
          explanation: 'En contextos muy formales, la respuesta a "How do you do?" es repetir la misma frase.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Interests',
      instructions: 'Completa con la preposición correcta.',
      questions: [
        {
          id: 'q1',
          text: 'I am interested ___ music.',
          correctAnswer: 'in',
          explanation: 'El adjetivo "interested" siempre va seguido de la preposición "in".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e34',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'hard',
    content: {
      title: 'Personality Nuances',
      instructions: 'Elige el adjetivo que mejor describe la situación.',
      questions: [
        {
          id: 'q1',
          question: 'Someone who talks a lot is ___.',
          options: ['Shy', 'Quiet', 'Talkative'],
          correctAnswer: 2,
          explanation: '"Talkative" describe a alguien que habla mucho.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e35',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Possessive \'s',
      instructions: 'Completa con la posesión.',
      questions: [
        {
          id: 'q1',
          text: 'This is my ___ car. (friend)',
          correctAnswer: "friend's",
          explanation: "Usamos 's para indicar posesión."
        }
      ]
    }
  },
  // --- PRODUCTION: Sentence Building & Speaking Analysis (36-50) ---
  {
    id: 'a2-u1-e36',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Introducing yourself',
      instructions: 'Ordena las palabras para formar una presentación.',
      sentences: [
        {
          id: 's1',
          words: ['am', 'I', 'from', 'London', '.'],
          correctSentence: 'I am from London.',
          translation: 'Yo soy de Londres.',
          hint: 'Empieza con el sujeto.',
          explanation: 'La estructura básica es Sujeto + Verbo + Complemento.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e37',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Asking about nationality',
      instructions: 'Ordena las palabras para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['What', 'your', 'nationality', 'is', '?'],
          correctSentence: 'What is your nationality?',
          translation: '¿Cuál es tu nacionalidad?',
          hint: 'Empieza con la palabra de pregunta.',
          explanation: 'En preguntas, el verbo "is" va antes del sujeto.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Nationality',
      instructions: 'Di "Nationality" claramente.',
      questions: [
        {
          id: 'q1',
          text: 'Nationality',
          correctAnswer: 'Nationality',
          explanation: 'El acento recae en la tercera sílaba: na-tio-NAL-i-ty.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e39',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Describing a friend',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['is', 'My', 'best', 'friend', 'very', 'kind', '.'],
          correctSentence: 'My best friend is very kind.',
          translation: 'Mi mejor amigo es muy amable.',
          hint: 'El adjetivo va al final.',
          explanation: 'Los adjetivos de personalidad suelen ir después del verbo "to be".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e40',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Surname',
      instructions: 'Di "What is your surname?".',
      questions: [
        {
          id: 'q1',
          text: 'What is your surname?',
          correctAnswer: 'What is your surname?',
          explanation: 'Asegúrate de pronunciar la "s" inicial de "surname" sin una "e" antes.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e41',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'hard',
    content: {
      title: 'Complex Introduction',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'live', 'in', 'Madrid', 'but', 'I', 'am', 'Italian', '.'],
          correctSentence: 'I live in Madrid but I am Italian.',
          translation: 'Vivo en Madrid pero soy italiano.',
          hint: 'Usa "but" para contrastar.',
          explanation: '"But" es una conjunción que une dos ideas opuestas o diferentes.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e42',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Occupation',
      instructions: 'Di "Occupation".',
      questions: [
        {
          id: 'q1',
          text: 'Occupation',
          correctAnswer: 'Occupation',
          explanation: 'La terminación "-tion" suena como "shun".'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Asking about interests',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['Are', 'you', 'interested', 'in', 'sports', '?'],
          correctSentence: 'Are you interested in sports?',
          translation: '¿Te interesan los deportes?',
          hint: 'Es una pregunta de sí/no.',
          explanation: 'La estructura es Verbo + Sujeto + Adjetivo + Preposición.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Interested in',
      instructions: 'Di "I am interested in art".',
      questions: [
        {
          id: 'q1',
          text: 'I am interested in art',
          correctAnswer: 'I am interested in art',
          explanation: 'Une "interested" con "in" al hablar: in-tres-tid-in.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Marital status sentence',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['My', 'brother', 'is', 'not', 'married', '.'],
          correctSentence: 'My brother is not married.',
          translation: 'Mi hermano no está casado.',
          hint: 'Coloca "not" después de "is".',
          explanation: 'La negación con "to be" se forma añadiendo "not" después del verbo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e46',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Single',
      instructions: 'Di "I am single".',
      questions: [
        {
          id: 'q1',
          text: 'I am single',
          correctAnswer: 'I am single',
          explanation: 'La "i" en "single" es corta.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e47',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Asking about age',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['How', 'old', 'is', 'your', 'sister', '?'],
          correctSentence: 'How old is your sister?',
          translation: '¿Qué edad tiene tu hermana?',
          hint: 'Empieza con "How old".',
          explanation: 'Preguntamos por la edad de otros usando "How old is [persona]".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e48',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Address',
      instructions: 'Di "My address is 10 Park Street".',
      questions: [
        {
          id: 'q1',
          text: 'My address is 10 Park Street',
          correctAnswer: 'My address is 10 Park Street',
          explanation: 'Recuerda que los números se dicen uno a uno o por decenas.'
        }
      ]
    }
  },
  {
    id: 'a2-u1-e49',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'hard',
    content: {
      title: 'Describing someone',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'is', 'tall', 'with', 'short', 'dark', 'hair', '.'],
          correctSentence: 'He is tall with short dark hair.',
          translation: 'Él es alto con pelo corto y oscuro.',
          hint: 'El orden de los adjetivos es importante.',
          explanation: 'Cuando describimos el pelo, solemos decir el tamaño y luego el color.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u1-e50',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Personal Profile',
    topicName: 'Personal Profile',
    difficulty: 'medium',
    content: {
      title: 'Final introduction',
      instructions: 'Di tu nombre y nacionalidad.',
      questions: [
        {
          id: 'q1',
          text: 'My name is John and I am British',
          correctAnswer: 'My name is John and I am British',
          explanation: '¡Felicidades! Has completado la primera unidad de perfil personal.'
        }
      ]
    }
  }
];
