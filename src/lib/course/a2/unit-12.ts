import { Exercise } from '@/lib/exercise-generator';

export const UNIT_12_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: School Subjects (1-10) ---
  {
    id: 'a2-u12-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Asignatura',
          back: 'Subject',
          example: 'What is your favorite subject?',
          pronunciation: '/ˈsʌbdʒɪkt/',
          explanation: 'Una materia de estudio en la escuela.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e2',
    type: 'matching',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'School Subjects',
      instructions: 'Une la asignatura con su traducción.',
      pairs: [
        { id: '1', left: 'Geography', right: 'Geografía' },
        { id: '2', left: 'History', right: 'Historia' },
        { id: '3', left: 'Science', right: 'Ciencias' },
        { id: '4', left: 'Arts', right: 'Plástica / Arte' },
        { id: '5', left: 'PE (Physical Education)', right: 'Educación Física' }
      ],
      explanation: 'Materias comunes en el colegio.'
    } as any
  },
  {
    id: 'a2-u12-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'What do you study?',
      instructions: 'Elige la asignatura correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We study numbers and calculations in ___ .',
          options: ['Maths', 'English', 'Music'],
          correctAnswer: 0,
          explanation: 'Estudiamos números en matemáticas (Maths).'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'Learning languages',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'My ___ teacher is from London.',
          correctAnswer: 'English',
          explanation: 'Si es de Londres, probablemente enseña inglés.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Favorite subject',
      instructions: 'Ordena las palabras.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'love', 'Geography', 'because', 'I', 'like', 'maps', '.'],
          correctSentence: 'I love Geography because I like maps.',
          translation: 'Me encanta la geografía porque me gustan los mapas.',
          hint: 'Usa "because".',
          explanation: 'Estructura para dar una razón.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Horario',
          back: 'Timetable / Schedule',
          example: 'Check your timetable for the next class.',
          pronunciation: '/ˈtaɪmˌteɪbəl/',
          explanation: 'La lista de horas y clases.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'School equipment',
      instructions: 'Elige el objeto correcto.',
      questions: [
        {
          id: 'q1',
          question: 'I use a ___ to carry my books.',
          options: ['backpack', 'pencil case', 'desk'],
          correctAnswer: 0,
          explanation: 'Usamos la mochila (backpack) para llevar los libros.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Science',
      instructions: 'Di "Science".',
      questions: [
        {
          id: 'q1',
          text: 'Science',
          correctAnswer: 'Science',
          explanation: 'Se pronuncia /ˈsaɪəns/.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Break time',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The students are playing in the ___ during break.',
          correctAnswer: 'playground',
          explanation: 'El patio de recreo es el "playground".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Exam time',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'have', 'a', 'maths', 'exam', 'tomorrow', '.'],
          correctSentence: 'We have a maths exam tomorrow.',
          translation: 'Tenemos un examen de matemáticas mañana.',
          hint: 'Usa "maths exam".',
          explanation: 'Anuncio de un evento escolar.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Ability (Can / Could) (11-20) ---
  {
    id: 'a2-u12-e11',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Poder (presente)',
          back: 'Can',
          example: 'I can speak two languages.',
          pronunciation: '/kæn/',
          explanation: 'Indica habilidad o permiso en el presente.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e12',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Podía / Podía (pasado)',
          back: 'Could',
          example: 'I could swim when I was five.',
          pronunciation: '/kʊd/',
          explanation: 'Pasado de "can", indica habilidad en el pasado.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Can vs Could',
      instructions: 'Elige la forma correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Now I ___ play the guitar, but I ___ when I was ten.',
          options: ['can / couldn\'t', 'could / can', 'can / can'],
          correctAnswer: 0,
          explanation: 'Presente (can) y pasado negativo (couldn\'t).'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Negative ability',
      instructions: 'Completa con la forma negativa.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ understand the homework yesterday. (not could)',
          correctAnswer: "couldn't",
          explanation: '"Couldn\'t" es la contracción de "could not".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e15',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Asking for permission',
      instructions: 'Ordena para formar una pregunta.',
      sentences: [
        {
          id: 's1',
          words: ['Can', 'I', 'go', 'to', 'the', 'toilet', 'please', '?'],
          correctSentence: 'Can I go to the toilet please?',
          translation: '¿Puedo ir al baño, por favor?',
          hint: 'Empieza con "Can".',
          explanation: '"Can" se usa habitualmente para pedir permiso en el aula.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e16',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Could',
      instructions: 'Di "I could do it".',
      questions: [
        {
          id: 'q1',
          text: 'I could do it',
          correctAnswer: 'I could do it',
          explanation: 'La "l" es muda, rima con "wood".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e17',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Polite requests',
      instructions: 'Elige la forma más educada.',
      questions: [
        {
          id: 'q1',
          question: '___ you help me with this exercise?',
          options: ['Could', 'Can', 'Do'],
          correctAnswer: 0,
          explanation: '"Could" es más educado que "can" para hacer peticiones.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e18',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Past ability',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'My grandfather ___ speak six languages when he was young.',
          correctAnswer: 'could',
          explanation: 'Habilidad en el pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e19',
    type: 'matching',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Can/Could meanings',
      instructions: 'Une la oración con su uso.',
      pairs: [
        { id: '1', left: 'Can I open the window?', right: 'Permission' },
        { id: '2', left: 'I can swim very well.', right: 'Ability' },
        { id: '3', left: 'Could you pass the salt?', right: 'Request' },
        { id: '4', left: 'I couldn\'t find my keys.', right: 'Past inability' }
      ],
      explanation: 'Diferentes funciones de estos verbos modales.'
    } as any
  },
  {
    id: 'a2-u12-e20',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Complex ability',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'can', 'read', 'English', 'but', 'I', 'cannot', 'write', 'it', '.'],
          correctSentence: 'I can read English but I cannot write it.',
          translation: 'Puedo leer inglés pero no puedo escribirlo.',
          hint: 'Usa "but".',
          explanation: 'Contrastando habilidades.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: School Rules & Verbs (21-30) ---
  {
    id: 'a2-u12-e21',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Deberes / Tarea',
          back: 'Homework',
          example: 'Don\'t forget to do your homework.',
          pronunciation: '/ˈhəʊmˌwɜːk/',
          explanation: 'Trabajo escolar para hacer en casa.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e22',
    type: 'matching',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'School Verbs',
      instructions: 'Une el verbo con su traducción.',
      pairs: [
        { id: '1', left: 'Learn', right: 'Aprender' },
        { id: '2', left: 'Teach', right: 'Enseñar' },
        { id: '3', left: 'Pass an exam', right: 'Aprobar un examen' },
        { id: '4', left: 'Fail an exam', right: 'Suspender un examen' }
      ],
      explanation: 'Acciones básicas del entorno educativo.'
    } as any
  },
  {
    id: 'a2-u12-e23',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Uniform',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'We have to wear a ___ at my school.',
          options: ['uniform', 'suit', 'costume'],
          correctAnswer: 0,
          explanation: '"Uniform" es la ropa reglamentaria de un colegio.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e24',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Do homework',
      instructions: 'Completa con el verbo correcto.',
      questions: [
        {
          id: 'q1',
          text: 'You should ___ your homework before dinner.',
          correctAnswer: 'do',
          explanation: 'Usamos "do" para "homework".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e25',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'School rules',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'must', 'arrive', 'at', 'school', 'on', 'time', '.'],
          correctSentence: 'We must arrive at school on time.',
          translation: 'Debemos llegar a la escuela a tiempo.',
          hint: 'Usa "must".',
          explanation: 'Expresando una obligación escolar.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e26',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Pasillo',
          back: 'Corridor / Hallway',
          example: 'Don\'t run in the corridor.',
          pronunciation: '/ˈkɒrɪdɔː/',
          explanation: 'El espacio largo que une las aulas.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Take an exam',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I am going to ___ an exam next Friday.',
          options: ['take', 'make', 'do'],
          correctAnswer: 0,
          explanation: 'Usamos "take" (o "sit") para decir "hacer un examen".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e28',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Homework',
      instructions: 'Di "I have a lot of homework".',
      questions: [
        {
          id: 'q1',
          text: 'I have a lot of homework',
          correctAnswer: 'I have a lot of homework',
          explanation: '"Homework" es incontable, no digas "homeworks".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e29',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Fail/Pass',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I am happy because I ___ my history exam.',
          correctAnswer: 'passed',
          explanation: '"Passed" significa aprobado.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e30',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Teacher instructions',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Please', 'open', 'your', 'books', 'on', 'page', 'ten', '.'],
          correctSentence: 'Please open your books on page ten.',
          translation: 'Por favor, abrid vuestros libros en la página diez.',
          hint: 'Usa "page ten".',
          explanation: 'Instrucción típica de clase.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Higher Education & Places (31-40) ---
  {
    id: 'a2-u12-e31',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Universidad',
          back: 'University / College',
          example: 'She studies law at university.',
          pronunciation: '/ˌjuːnɪˈvɜːsɪti/',
          explanation: 'Educación superior después del colegio.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e32',
    type: 'matching',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'Education Places',
      instructions: 'Une el lugar con su nivel.',
      pairs: [
        { id: '1', left: 'Nursery school', right: 'Guardería' },
        { id: '2', left: 'Primary school', right: 'Primaria' },
        { id: '3', left: 'Secondary school', right: 'Secundaria / Instituto' },
        { id: '4', left: 'Boarding school', right: 'Internado' }
      ],
      explanation: 'Diferentes centros de enseñanza.'
    } as any
  },
  {
    id: 'a2-u12-e33',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'University degree',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'After three or four years at university, you get a ___ .',
          options: ['degree', 'paper', 'mark'],
          correctAnswer: 0,
          explanation: 'Al terminar la carrera obtienes un título (degree).'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e34',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Student life',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'University students usually live in a ___ .',
          correctAnswer: 'dormitory',
          explanation: 'Residencia de estudiantes (o "halls of residence").'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e35',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Future plans',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'want', 'to', 'study', 'medicine', 'at', 'university', '.'],
          correctSentence: 'I want to study medicine at university.',
          translation: 'Quiero estudiar medicina en la universidad.',
          hint: 'Usa "want to".',
          explanation: 'Expresión de ambición educativa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e36',
    type: 'flashcard',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Profesor universitario',
          back: 'Professor / Lecturer',
          example: 'The professor is giving a lecture.',
          pronunciation: '/prəˈfesə/',
          explanation: '"Teacher" es para escuela, "Professor" para universidad.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e37',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Mark vs Grade',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I got a good ___ in my last test.',
          options: ['mark', 'number', 'note'],
          correctAnswer: 0,
          explanation: '"Mark" o "Grade" se usan para la nota del examen.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e38',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: University',
      instructions: 'Di "University".',
      questions: [
        {
          id: 'q1',
          text: 'University',
          correctAnswer: 'University',
          explanation: 'Empieza con sonido "y": /ˌjuːnɪˈvɜːsɪti/.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Applying',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I need to ___ for a scholarship.',
          correctAnswer: 'apply',
          explanation: '"Apply" significa solicitar (una beca, un puesto, etc.).'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Academic goal',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'graduated', 'from', 'university', 'last', 'year', '.'],
          correctSentence: 'He graduated from university last year.',
          translation: 'Él se graduó de la universidad el año pasado.',
          hint: 'Usa "graduated from".',
          explanation: 'Finalización de estudios superiores.',
          points: 15
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mix (41-50) ---
  {
    id: 'a2-u12-e41',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Review: Subject',
      instructions: '¿Dónde estudias el pasado?',
      questions: [
        {
          id: 'q1',
          question: 'In which subject do you learn about the past?',
          options: ['History', 'Science', 'Maths'],
          correctAnswer: 0,
          explanation: 'Estudiamos el pasado en historia (History).'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e42',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Review: Can',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ speak Spanish fluently.',
          correctAnswer: 'can',
          explanation: 'Habilidad presente.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e43',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Review: Timetable',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Maths', 'is', 'the', 'first', 'class', 'on', 'my', 'timetable', '.'],
          correctSentence: 'Maths is the first class on my timetable.',
          translation: 'Mates es la primera clase en mi horario.',
          hint: 'Empieza con "Maths".',
          explanation: 'Descripción del horario escolar.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e44',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Pronunciation: Geography',
      instructions: 'Di "I like Geography".',
      questions: [
        {
          id: 'q1',
          text: 'I like Geography',
          correctAnswer: 'I like Geography',
          explanation: 'Se pronuncia /dʒiˈɒɡrəfi/.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e45',
    type: 'matching',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'School Mix',
      instructions: 'Une el objeto con su uso.',
      pairs: [
        { id: '1', left: 'Ruler', right: 'Measure things' },
        { id: '2', left: 'Eraser / Rubber', right: 'Remove mistakes' },
        { id: '3', left: 'Dictionary', right: 'Look up words' },
        { id: '4', left: 'Calculator', right: 'Do maths' }
      ],
      explanation: 'Útiles escolares y funciones.'
    } as any
  },
  {
    id: 'a2-u12-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Review: Couldn\'t',
      instructions: 'Elige.',
      questions: [
        {
          id: 'q1',
          question: 'I ___ finish the exam. It was too long.',
          options: ["couldn't", "can't", "not could"],
          correctAnswer: 0,
          explanation: 'Incapacidad en el pasado.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Review: Learn',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I want to ___ how to play the piano.',
          correctAnswer: 'learn',
          explanation: 'Aprender es "learn".'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'hard',
    content: {
      title: 'Review: Could question',
      instructions: 'Ordena.',
      sentences: [
        {
          id: 's1',
          words: ['Could', 'you', 'read', 'when', 'you', 'were', 'four', '?'],
          correctSentence: 'Could you read when you were four?',
          translation: '¿Podías leer cuando tenías cuatro años?',
          hint: 'Pregunta de habilidad pasada.',
          explanation: 'Estructura interrogativa con "could".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u12-e49',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: PE',
      instructions: 'Di "I have PE on Monday".',
      questions: [
        {
          id: 'q1',
          text: 'I have PE on Monday',
          correctAnswer: 'I have PE on Monday',
          explanation: '"PE" se pronuncia letra por letra: P-E.'
        }
      ]
    }
  },
  {
    id: 'a2-u12-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'School & Education',
    topicName: 'School & Education',
    difficulty: 'easy',
    content: {
      title: 'Final education check',
      instructions: '¿Quién enseña?',
      questions: [
        {
          id: 'q1',
          question: 'The person who teaches students is a ___ .',
          options: ['student', 'teacher', 'nurse'],
          correctAnswer: 1,
          explanation: 'El profesor (teacher) es quien enseña.'
        }
      ]
    }
  }
];
