import { Exercise } from '@/lib/exercise-generator';

export const UNIT_13_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Jobs & Occupations (1-10) ---
  {
    id: 'a2-u13-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Puesto de trabajo',
          back: 'Job / Position',
          example: 'I applied for a sales position.',
          pronunciation: '/dʒɒb/',
          explanation: 'El trabajo específico que realizas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Common Jobs',
      instructions: 'Une el trabajo con su traducción.',
      pairs: [
        { id: '1', left: 'Lawyer', right: 'Abogado/a' },
        { id: '2', left: 'Nurse', right: 'Enfermero/a' },
        { id: '3', left: 'Flight attendant', right: 'Auxiliar de vuelo' },
        { id: '4', left: 'Accountant', right: 'Contable' },
        { id: '5', left: 'Electrician', right: 'Electricista' }
      ],
      explanation: 'Profesiones comunes.'
    } as any
  },
  {
    id: 'a2-u13-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Where do they work?',
      instructions: 'Elige el lugar de trabajo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'A nurse usually works in a ___ .',
          options: ['hospital', 'factory', 'garage'],
          correctAnswer: 0,
          explanation: 'Las enfermeras trabajan en hospitales.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Job descriptions',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'A person who fixes cars is a ___ .',
          correctAnswer: 'mechanic',
          explanation: 'Un mecánico (mechanic) arregla coches.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'My job',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'work', 'as', 'a', 'receptionist', 'in', 'a', 'hotel', '.'],
          correctSentence: 'I work as a receptionist in a hotel.',
          translation: 'Trabajo como recepcionista en un hotel.',
          hint: 'Usa "work as a".',
          explanation: 'Estructura para decir tu profesión: work as + a/an + trabajo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Empresa / Compañía',
          back: 'Company / Firm',
          example: 'He works for a large IT company.',
          pronunciation: '/ˈkʌmpəni/',
          explanation: 'La organización para la que trabajas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Work conditions',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'If you work 40 hours a week, you have a ___ job.',
          options: ['full-time', 'part-time', 'temporary'],
          correctAnswer: 0,
          explanation: '"Full-time" significa jornada completa.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Lawyer',
      instructions: 'Di "Lawyer".',
      questions: [
        {
          id: 'q1',
          text: 'Lawyer',
          correctAnswer: 'Lawyer',
          explanation: 'Se pronuncia /ˈlɔːjə/, rima con "sawyer".'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Uniforms at work',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Police officers have to wear a ___ at work.',
          correctAnswer: 'uniform',
          explanation: 'Muchos trabajos requieren uniforme.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Looking for work',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['She', 'is', 'looking', 'for', 'a', 'new', 'job', '.'],
          correctSentence: 'She is looking for a new job.',
          translation: 'Ella está buscando un nuevo trabajo.',
          hint: 'Usa "looking for".',
          explanation: '"Looking for" se usa para la búsqueda de empleo.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Present Simple vs Present Continuous (11-20) ---
  {
    id: 'a2-u13-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hábito vs Ahora',
          back: 'Routine vs Right now',
          example: 'I usually work (habit), but today I am resting (now).',
          pronunciation: '/n/a/',
          explanation: 'Simple para rutinas, Continuo para acciones en progreso.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Choose the tense',
      instructions: 'Elige la forma verbal correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ as a waiter every summer.',
          options: ['work', 'am working', 'worked'],
          correctAnswer: 0,
          explanation: 'Es una rutina de cada verano, usamos Present Simple.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e13',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Current action',
      instructions: 'Completa con Present Continuous.',
      questions: [
        {
          id: 'q1',
          text: 'Wait! The manager ___ to someone right now. (talk)',
          correctAnswer: 'is talking',
          explanation: 'Acción que ocurre en este momento.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e14',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Routine at work',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'always', 'starts', 'work', 'at', 'eight', 'o\'clock', '.'],
          correctSentence: 'He always starts work at eight o\'clock.',
          translation: 'Él siempre empieza a trabajar a las ocho.',
          hint: 'Usa el Present Simple.',
          explanation: 'Los adverbios de frecuencia (always) indican rutina.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e15',
    type: 'matching',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Tense markers',
      instructions: 'Une el marcador temporal con el tiempo verbal.',
      pairs: [
        { id: '1', left: 'Usually / Every day', right: 'Present Simple' },
        { id: '2', left: 'At the moment / Now', right: 'Present Continuous' },
        { id: '3', left: 'On Mondays', right: 'Present Simple' },
        { id: '4', left: 'Today', right: 'Present Continuous (often)' }
      ],
      explanation: 'Palabras clave para distinguir tiempos verbales.'
    } as any
  },
  {
    id: 'a2-u13-e16',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Permanent vs Temporary',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'She usually works in London, but this week she ___ in Paris.',
          options: ['is working', 'works', 'work'],
          correctAnswer: 0,
          explanation: 'Usamos el continuo para situaciones temporales (this week).'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e17',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Working',
      instructions: 'Di "I am working hard today".',
      questions: [
        {
          id: 'q1',
          text: 'I am working hard today',
          correctAnswer: 'I am working hard today',
          explanation: 'Recuerda no pronunciar la "g" final de forma fuerte.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e18',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Mixed tenses',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'What ___ you ___? I am a doctor. (do)',
          correctAnswer: 'do / do',
          explanation: 'Cuando preguntamos por la profesión permanente, usamos Present Simple: "What do you do?".'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'State verbs',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ what you mean.',
          options: ['understand', 'am understanding', 'understanding'],
          correctAnswer: 0,
          explanation: '"Understand" es un verbo de estado y no suele usarse en continuo.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Contrast building',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'usually', 'wear', 'jeans', 'but', 'today', 'I', 'am', 'wearing', 'a', 'suit', '.'],
          correctSentence: 'I usually wear jeans but today I am wearing a suit.',
          translation: 'Suelo llevar vaqueros pero hoy llevo un traje.',
          hint: 'Usa el contraste de tiempos.',
          explanation: 'Muestra clara del uso de ambos tiempos en una oración.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: Office & Business (21-30) ---
  {
    id: 'a2-u13-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Compañero de trabajo',
          back: 'Colleague / Coworker',
          example: 'I have lunch with my colleagues every day.',
          pronunciation: '/ˈkɒliːɡ/',
          explanation: 'La persona con la que compartes el lugar de trabajo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e22',
    type: 'matching',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Office Items',
      instructions: 'Une el objeto con su traducción.',
      pairs: [
        { id: '1', left: 'Desk', right: 'Escritorio' },
        { id: '2', left: 'Stapler', right: 'Grapadora' },
        { id: '3', left: 'Folder', right: 'Carpeta' },
        { id: '4', left: 'Keyboard', right: 'Teclado' }
      ],
      explanation: 'Material de oficina.'
    } as any
  },
  {
    id: 'a2-u13-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Work hierarchy',
      instructions: 'Elige el cargo.',
      questions: [
        {
          id: 'q1',
          question: 'The person in charge of a department is the ___ .',
          options: ['manager', 'assistant', 'customer'],
          correctAnswer: 0,
          explanation: 'El jefe o encargado es el "manager".'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Business meetings',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'We have an important ___ at 10 AM.',
          correctAnswer: 'meeting',
          explanation: '"Meeting" es una reunión.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Office routine',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'spend', 'most', 'of', 'my', 'time', 'answering', 'emails', '.'],
          correctSentence: 'I spend most of my time answering emails.',
          translation: 'Paso la mayor parte de mi tiempo respondiendo correos.',
          hint: 'Usa "answering".',
          explanation: 'Uso de "spend time + -ing".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sueldo / Salario',
          back: 'Salary / Wage',
          example: 'She is happy with her new salary.',
          pronunciation: '/ˈsæləri/',
          explanation: 'El dinero que recibes por tu trabajo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Earn',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'How much does a doctor ___ in your country?',
          options: ['earn', 'win', 'gain'],
          correctAnswer: 0,
          explanation: 'Usamos "earn" para ganar dinero trabajando.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Colleague',
      instructions: 'Di "My colleagues are very friendly".',
      questions: [
        {
          id: 'q1',
          text: 'My colleagues are very friendly',
          correctAnswer: 'My colleagues are very friendly',
          explanation: 'Se pronuncia /ˈkɒliːɡz/.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Deadline',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'We need to finish this report before the ___ .',
          correctAnswer: 'deadline',
          explanation: '"Deadline" es la fecha límite.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Business trip',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'is', 'going', 'on', 'a', 'business', 'trip', 'to', 'Tokyo', '.'],
          correctSentence: 'He is going on a business trip to Tokyo.',
          translation: 'Él va a ir de viaje de negocios a Tokio.',
          hint: 'Usa "on a business trip".',
          explanation: 'Estructura para viajes de trabajo.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Applying for a Job (31-40) ---
  {
    id: 'a2-u13-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Currículum',
          back: 'CV / Resume',
          example: 'Send your CV to the manager.',
          pronunciation: '/ˌsiːˈviː/',
          explanation: '"CV" es común en Europa, "Resume" en EE. UU.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e32',
    type: 'matching',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Application Process',
      instructions: 'Une la acción con su traducción.',
      pairs: [
        { id: '1', left: 'Apply for a job', right: 'Solicitar un trabajo' },
        { id: '2', left: 'Job interview', right: 'Entrevista de trabajo' },
        { id: '3', left: 'Skills', right: 'Habilidades' },
        { id: '4', left: 'Experience', right: 'Experiencia' }
      ],
      explanation: 'Pasos para conseguir empleo.'
    } as any
  },
  {
    id: 'a2-u13-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'The Interview',
      instructions: 'Elige la correcta.',
      questions: [
        {
          id: 'q1',
          question: 'I have a job ___ tomorrow morning at 9:00.',
          options: ['interview', 'meeting', 'class'],
          correctAnswer: 0,
          explanation: 'Una cita para optar a un puesto es una "interview".'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Skills',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Computer ___ are very important for this position.',
          correctAnswer: 'skills',
          explanation: 'Habilidades (skills) informáticas.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Asking about experience',
      instructions: 'Ordena para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['Do', 'you', 'have', 'any', 'previous', 'experience', '?'],
          correctSentence: 'Do you have any previous experience?',
          translation: '¿Tiene alguna experiencia previa?',
          hint: 'Empieza con "Do".',
          explanation: 'Pregunta típica de entrevista.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Contratar',
          back: 'To hire',
          example: 'The company wants to hire new people.',
          pronunciation: '/ˈhaɪə/',
          explanation: 'Dar empleo a alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Fired vs Retired',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'He is 65 years old and doesn\'t work anymore. He is ___ .',
          options: ['retired', 'fired', 'hired'],
          correctAnswer: 0,
          explanation: '"Retired" significa jubilado.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Interview',
      instructions: 'Di "I have an interview".',
      questions: [
        {
          id: 'q1',
          text: 'I have an interview',
          correctAnswer: 'I have an interview',
          explanation: 'En inglés americano, la primera "n" a veces silencia la "t": /ˌɪnərˌvju/.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Unemployed',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'He is ___ at the moment, so he is looking for work.',
          correctAnswer: 'unemployed',
          explanation: '"Unemployed" significa desempleado / en el paro.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Success!',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['They', 'offered', 'me', 'the', 'job', 'yesterday', '!'],
          correctSentence: 'They offered me the job yesterday!',
          translation: '¡Me ofrecieron el trabajo ayer!',
          hint: 'Usa el pasado.',
          explanation: 'Ofrecer un puesto: "offer a job".',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u13-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Review: Present Simple',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'My father ___ a taxi driver.',
          options: ['is', 'are', 'am'],
          correctAnswer: 0,
          explanation: 'Tercera persona del verbo to be para ocupaciones.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Review: Mechanic',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'If your car is broken, you should see a ___ .',
          correctAnswer: 'mechanic',
          explanation: 'Profesión que repara vehículos.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Review: Continuous',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Why', 'are', 'you', 'working', 'on', 'Saturday', '?'],
          correctSentence: 'Why are you working on Saturday?',
          translation: '¿Por qué estás trabajando en sábado?',
          hint: 'Pregunta en continuo.',
          explanation: 'Estructura interrogativa para una acción excepcional hoy.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Secretary',
      instructions: 'Di "She is a secretary".',
      questions: [
        {
          id: 'q1',
          text: 'She is a secretary',
          correctAnswer: 'She is a secretary',
          explanation: 'Se pronuncia /ˈsekrətəri/.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e45',
    type: 'matching',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Work Mix',
      instructions: 'Une la profesión con el objeto.',
      pairs: [
        { id: '1', left: 'Doctor', right: 'Stethoscope' },
        { id: '2', left: 'Writer', right: 'Computer / Pen' },
        { id: '3', left: 'Chef', right: 'Knife / Pan' },
        { id: '4', left: 'Artist', right: 'Brush / Paint' }
      ],
      explanation: 'Herramientas de trabajo.'
    } as any
  },
  {
    id: 'a2-u13-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Review: Employer vs Employee',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'The person who pays you is the ___ .',
          options: ['employer', 'employee', 'colleague'],
          correctAnswer: 0,
          explanation: 'El empleador (employer) es el jefe o la empresa.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Review: CV',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'Please attach your ___ to the email.',
          correctAnswer: 'CV',
          explanation: 'Abreviatura de Curriculum Vitae.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'hard',
    content: {
      title: 'Review: Multi-tense',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'not', 'working', 'now', 'because', 'I', 'am', 'on', 'holiday', '.'],
          correctSentence: 'I am not working now because I am on holiday.',
          translation: 'No estoy trabajando ahora porque estoy de vacaciones.',
          hint: 'Usa "on holiday".',
          explanation: 'Uso del continuo para el estado actual.',
          points: 15
        }
      ]
    } as any
  },
  {
    id: 'a2-u13-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Career',
      instructions: 'Di "I want a long career".',
      questions: [
        {
          id: 'q1',
          text: 'I want a long career',
          correctAnswer: 'I want a long career',
          explanation: 'Se pronuncia /kəˈrɪə/, acento en la segunda sílaba.'
        }
      ]
    }
  },
  {
    id: 'a2-u13-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Work & Jobs',
    topicName: 'Work & Jobs',
    difficulty: 'easy',
    content: {
      title: 'Final work check',
      instructions: '¿Quién vuela aviones?',
      questions: [
        {
          id: 'q1',
          question: 'The person who flies a plane is a ___ .',
          options: ['pilot', 'driver', 'captain'],
          correctAnswer: 0,
          explanation: 'El piloto (pilot) vuela el avión.'
        }
      ]
    }
  }
];
