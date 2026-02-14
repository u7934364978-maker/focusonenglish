import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 11: Jobs
 */

export const UNIT_11_EXERCISES: Exercise[] = [
  {
    id: 'a1-u11-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Soy profesor',
      instructions: '¿Cómo se dice "profesor" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I am a ________.',
          options: ['teacher', 'doctor', 'student'],
          correctAnswer: 0,
          explanation: '"Teacher" es profesor o maestro. Usamos "a" antes de profesiones que empiezan por consonante.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Médico / Doctor',
          back: 'Doctor',
          example: 'The doctor is in the hospital.',
          pronunciation: '/ˈdɒk.tər/',
          explanation: '"Doctor" se escribe igual que en español, pero la pronunciación cambia.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Él es médico',
      instructions: 'Ordena las palabras para decir "Él es un médico".',
      sentences: [
        {
          id: 's1',
          words: ['doctor', 'a', 'is', 'He'],
          correctSentence: 'He is a doctor',
          translation: 'Él es un médico.',
          hint: 'Empieza con "He".',
          explanation: 'En inglés siempre usamos un artículo (a/an) delante de la profesión.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Profesiones Comunes',
      instructions: 'Une cada profesión con su traducción.',
      pairs: [
        { id: 'p1', left: 'Nurse', right: 'Enfermero/a' },
        { id: 'p2', left: 'Chef', right: 'Cocinero/a' },
        { id: 'p3', left: 'Pilot', right: 'Piloto' },
        { id: 'p4', left: 'Driver', right: 'Conductor/a' },
        { id: 'p5', left: 'Artist', right: 'Artista' }
      ],
      explanation: 'Estas son profesiones que verás con frecuencia en contextos cotidianos.'
    } as any
  },
  {
    id: 'a1-u11-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'El hospital',
      instructions: 'Completa con la palabra para "enfermero/a".',
      questions: [
        {
          id: 'q1',
          question: 'She is a ________.',
          answer: 'nurse',
          explanation: '"Nurse" ayuda a los doctores en el hospital.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Trabajar en un restaurante',
      instructions: '¿Quién cocina en un restaurante?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ cooks food.',
          options: ['chef', 'pilot', 'dentist'],
          correctAnswer: 0,
          explanation: '"Chef" es la persona encargada de la cocina.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Soy un artista',
      instructions: 'Ordena para decir "Yo soy un artista".',
      sentences: [
        {
          id: 's1',
          words: ['artist', 'an', 'am', 'I'],
          correctSentence: 'I am an artist',
          translation: 'Yo soy un artista.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "an" porque "artist" empieza por sonido de vocal.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ingeniero',
          back: 'Engineer',
          example: 'An engineer builds bridges.',
          pronunciation: '/ˌen.dʒɪˈnɪər/',
          explanation: 'Recuerda usar "an" delante de "engineer".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Volar aviones',
      instructions: '¿Cómo se llama la persona que vuela aviones?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ flies the plane.',
          options: ['pilot', 'driver', 'teacher'],
          correctAnswer: 0,
          explanation: '"Pilot" es la persona que maneja una aeronave.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Construir edificios',
      instructions: 'Escribe la palabra para "ingeniero".',
      questions: [
        {
          id: 'q1',
          question: 'He is an ________.',
          answer: 'engineer',
          explanation: '"Engineer" se escribe con doble "e" al final.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Oficios y Lugares',
      instructions: 'Relaciona la profesión con el lugar de trabajo.',
      pairs: [
        { id: 'p1', left: 'Teacher', right: 'School' },
        { id: 'p2', left: 'Doctor', right: 'Hospital' },
        { id: 'p3', left: 'Chef', right: 'Restaurant' },
        { id: 'p4', left: 'Police officer', right: 'Police station' },
        { id: 'p5', left: 'Actor', right: 'Theater' }
      ],
      explanation: 'Saber dónde trabaja cada profesional te ayudará a contextualizar el vocabulario.'
    } as any
  },
  {
    id: 'a1-u11-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: '¿Cuál es tu trabajo?',
      instructions: 'Ordena las palabras para preguntar "¿Cuál es tu trabajo?".',
      sentences: [
        {
          id: 's1',
          words: ['job', 'your', 'is', 'What'],
          correctSentence: 'What is your job',
          translation: '¿Cuál es tu trabajo?',
          hint: 'Empieza con "What".',
          explanation: 'Esta es la forma más directa de preguntar a qué se dedica alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Otra forma de preguntar',
      instructions: '¿Qué significa "What do you do?"?',
      questions: [
        {
          id: 'q1',
          question: 'What do you do?',
          options: ['¿A qué te dedicas?', '¿Qué estás haciendo?', '¿Cómo estás?'],
          correctAnswer: 0,
          explanation: '"What do you do?" es la forma más común en inglés de preguntar por la profesión.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Científico',
          back: 'Scientist',
          example: 'The scientist works in a lab.',
          pronunciation: '/ˈsaɪən.tɪst/',
          explanation: '"Science" (ciencia) -> "Scientist" (científico).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Experimentos',
      instructions: 'Escribe la palabra para "científico".',
      questions: [
        {
          id: 'q1',
          question: 'She is a brilliant ________.',
          answer: 'scientist',
          explanation: '"Scientist" empieza con la misma raíz que ciencia.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Servicios Públicos',
      instructions: 'Une cada oficio con su traducción.',
      pairs: [
        { id: 'p1', left: 'Firefighter', right: 'Bombero/a' },
        { id: 'p2', left: 'Police officer', right: 'Oficial de policía' },
        { id: 'p3', left: 'Mail carrier', right: 'Cartero/a' },
        { id: 'p4', left: 'Garbage collector', right: 'Recolector/a de basura' },
        { id: 'p5', left: 'Librarian', right: 'Bibliotecario/a' }
      ],
      explanation: 'Estos son trabajos que mantienen la ciudad funcionando.'
    } as any
  },
  {
    id: 'a1-u11-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Pintar cuadros',
      instructions: '¿Quién pinta cuadros?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ paints a picture.',
          options: ['artist', 'engineer', 'waiter'],
          correctAnswer: 0,
          explanation: '"Artist" es un término general, pero a menudo se asocia con la pintura.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Yo soy dentista',
      instructions: 'Ordena para decir "Yo soy dentista".',
      sentences: [
        {
          id: 's1',
          words: ['dentist', 'a', 'am', 'I'],
          correctSentence: 'I am a dentist',
          translation: 'Yo soy dentista.',
          hint: 'Empieza con "I".',
          explanation: 'Al igual que "doctor", "dentist" es muy parecido al español.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Camarero / Mesero',
          back: 'Waiter / Waitress',
          example: 'The waiter brings the food.',
          pronunciation: '/ˈweɪ.tər/',
          explanation: '"Waiter" para hombre, "Waitress" para mujer. Hoy en día también se usa "Server" para ambos.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'En el restaurante',
      instructions: 'Escribe la palabra para "camarero".',
      questions: [
        {
          id: 'q1',
          question: 'Call the ________, please.',
          answer: 'waiter',
          explanation: '"Waiter" viene de la palabra "wait" (esperar).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Vender cosas',
      instructions: '¿Quién trabaja en una tienda?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ works in a store.',
          options: ['shop assistant', 'pilot', 'nurse'],
          correctAnswer: 0,
          explanation: '"Shop assistant" o "Salesperson" es la persona que vende en una tienda.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'Verbos de Trabajo',
      instructions: 'Une cada verbo con su significado.',
      pairs: [
        { id: 'p1', left: 'Teach', right: 'Enseñar' },
        { id: 'p2', left: 'Help', right: 'Ayudar' },
        { id: 'p3', left: 'Fly', right: 'Volar' },
        { id: 'p4', left: 'Build', right: 'Construir' },
        { id: 'p5', left: 'Cook', right: 'Cocinar' }
      ],
      explanation: 'Estos verbos describen las acciones principales de muchas profesiones.'
    } as any
  },
  {
    id: 'a1-u11-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'Trabajo en una oficina',
      instructions: 'Ordena para decir "Yo trabajo en una oficina".',
      sentences: [
        {
          id: 's1',
          words: ['office', 'an', 'in', 'work', 'I'],
          correctSentence: 'I work in an office',
          translation: 'Yo trabajo en una oficina.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "work in" para indicar el lugar de trabajo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Trabajar con animales',
      instructions: '¿Cómo se dice "veterinario" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ helps sick animals.',
          options: ['vet', 'doctor', 'chef'],
          correctAnswer: 0,
          explanation: '"Vet" es la abreviatura común de "veterinarian".'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Abogado',
          back: 'Lawyer',
          example: 'I need a lawyer for my case.',
          pronunciation: '/ˈlɔɪ.ər/',
          explanation: '"Law" (ley) -> "Lawyer" (abogado).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'Leyes y justicia',
      instructions: 'Escribe la palabra para "abogado".',
      questions: [
        {
          id: 'q1',
          question: 'My brother is a ________.',
          answer: 'lawyer',
          explanation: '"Lawyer" ayuda a las personas con asuntos legales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Música',
      instructions: '¿Quién toca un instrumento?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ plays the piano.',
          options: ['musician', 'artist', 'scientist'],
          correctAnswer: 0,
          explanation: '"Musician" es músico.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e32',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Herramientas de Trabajo',
      instructions: 'Une cada profesional con su herramienta.',
      pairs: [
        { id: 'p1', left: 'Doctor', right: 'Stethoscope' },
        { id: 'p2', left: 'Artist', right: 'Paintbrush' },
        { id: 'p3', left: 'Chef', right: 'Knife' },
        { id: 'p4', left: 'Teacher', right: 'Book' },
        { id: 'p5', left: 'Scientist', right: 'Microscope' }
      ],
      explanation: 'Cada trabajo tiene sus herramientas características.'
    } as any
  },
  {
    id: 'a1-u11-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: '¿Trabajas?',
      instructions: 'Ordena las palabras para preguntar "¿Trabajas aquí?".',
      sentences: [
        {
          id: 's1',
          words: ['here', 'work', 'you', 'Do'],
          correctSentence: 'Do you work here',
          translation: '¿Trabajas aquí?',
          hint: 'Empieza con "Do".',
          explanation: 'Usamos el auxiliar "Do" para hacer preguntas en presente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Peluquero / Estilista',
          back: 'Hairdresser / Stylist',
          example: 'I go to the hairdresser.',
          pronunciation: '/ˈheəˌdres.ər/',
          explanation: '"Hair" (pelo) + "dresser" (quien lo arregla).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Reparar coches',
      instructions: '¿Quién arregla los coches?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ fixes the car.',
          options: ['mechanic', 'pilot', 'vet'],
          correctAnswer: 0,
          explanation: '"Mechanic" es mecánico.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Cortar el pelo',
      instructions: 'Escribe la palabra para "peluquero".',
      questions: [
        {
          id: 'q1',
          question: 'She is a famous ________.',
          answer: 'hairdresser',
          explanation: '"Hairdresser" es una palabra compuesta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e38',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Trabajos de Construcción',
      instructions: 'Une cada oficio con su nombre.',
      pairs: [
        { id: 'p1', left: 'Builder', right: 'Constructor/a' },
        { id: 'p2', left: 'Electrician', right: 'Electricista' },
        { id: 'p3', left: 'Plumber', right: 'Fontanero/a' },
        { id: 'p4', left: 'Carpenter', right: 'Carpintero/a' },
        { id: 'p5', left: 'Painter', right: 'Pintor/a' }
      ],
      explanation: 'Estos son oficios técnicos esenciales en la construcción.'
    } as any
  },
  {
    id: 'a1-u11-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'Me gusta mi trabajo',
      instructions: 'Ordena para decir "Realmente me gusta mi trabajo".',
      sentences: [
        {
          id: 's1',
          words: ['job', 'my', 'like', 'really', 'I'],
          correctSentence: 'I really like my job',
          translation: 'Realmente me gusta mi trabajo.',
          hint: 'Empieza con "I".',
          explanation: '"Really" añade énfasis a la oración.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Dinero',
      instructions: '¿Cómo se dice "sueldo" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I receive a ________.',
          options: ['salary', 'job', 'work'],
          correctAnswer: 0,
          explanation: '"Salary" es el salario o sueldo.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Desempleado',
          back: 'Unemployed',
          example: 'He is currently unemployed.',
          pronunciation: '/ˌʌn.ɪmˈplɔɪd/',
          explanation: '"Employed" (empleado) -> "Unemployed" (desempleado).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'Buscando trabajo',
      instructions: 'Escribe la palabra para "salario".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very good.',
          answer: 'salary',
          explanation: '"Salary" se parece mucho a "salario".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'Retiro',
      instructions: '¿Cómo se dice "jubilado" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'My grandfather is ________.',
          options: ['retired', 'tired', 'hired'],
          correctAnswer: 0,
          explanation: '"Retired" significa jubilado o retirado.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e45',
    type: 'matching',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      title: 'En la oficina',
      instructions: 'Une cada objeto con su traducción.',
      pairs: [
        { id: 'p1', left: 'Computer', right: 'Ordenador/Computadora' },
        { id: 'p2', left: 'Desk', right: 'Escritorio' },
        { id: 'p3', left: 'Chair', right: 'Silla' },
        { id: 'p4', left: 'Phone', right: 'Teléfono' },
        { id: 'p5', left: 'Keyboard', right: 'Teclado' }
      ],
      explanation: 'Este es el equipamiento básico de cualquier oficina.'
    } as any
  },
  {
    id: 'a1-u11-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'Ella quiere ser médico',
      instructions: 'Ordena para decir "Ella quiere ser médico".',
      sentences: [
        {
          id: 's1',
          words: ['doctor', 'a', 'be', 'to', 'wants', 'She'],
          correctSentence: 'She wants to be a doctor',
          translation: 'Ella quiere ser médico.',
          hint: 'Empieza con "She".',
          explanation: 'Usamos "wants to be" para expresar aspiraciones profesionales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'easy',
    content: {
      title: 'Trabajo duro',
      instructions: '¿Cómo se dice "difícil" o "duro"?',
      questions: [
        {
          id: 'q1',
          question: 'My job is ________.',
          options: ['hard', 'easy', 'fun'],
          correctAnswer: 0,
          explanation: '"Hard" puede significar tanto duro como difícil.'
        }
      ]
    }
  },
  {
    id: 'a1-u11-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Empresa / Compañía',
          back: 'Company',
          example: 'I work for a large company.',
          pronunciation: '/ˈkʌm.pə.ni/',
          explanation: '"Company" es el término más común para empresa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u11-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Jobs',
    topicName: 'My Job',
    difficulty: 'hard',
    content: {
      title: 'El nombre de la empresa',
      instructions: 'Escribe la palabra para "empresa".',
      questions: [
        {
          id: 'q1',
          question: 'What is the name of your ________?',
          answer: 'company',
          explanation: '"Company" se usa para preguntar por el lugar donde trabajas.'
        }
      ]
    } as any
  }
];
