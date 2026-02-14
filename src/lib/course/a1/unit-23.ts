import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 23: Health
 */

export const UNIT_23_EXERCISES: Exercise[] = [
  {
    id: 'a1-u23-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'Personal Médico y Lugares',
      instructions: 'Relaciona cada palabra con su traducción al español.',
      pairs: [
        { id: 'p1', left: 'Doctor', right: 'Doctor/a' },
        { id: 'p2', left: 'Nurse', right: 'Enfermero/a' },
        { id: 'p3', left: 'Hospital', right: 'Hospital' },
        { id: 'p4', left: 'Clinic', right: 'Clínica' },
        { id: 'p5', left: 'Pharmacy', right: 'Farmacia' }
      ],
      explanation: 'Personas y lugares fundamentales en el sistema de salud.'
    } as any
  },
  {
    id: 'a1-u23-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'Ver al doctor',
      instructions: '¿Cómo dirías "necesito ver a un doctor"?',
      questions: [
        {
          id: 'q1',
          question: 'I need to see a ________.',
          options: ['doctor', 'nurse', 'hospital'],
          correctAnswer: 0,
          explanation: '"Doctor" es la persona que diagnostica y trata enfermedades.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'El hospital',
      instructions: 'Escribe la palabra para "hospital".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is near here.',
          correctAnswer: 'hospital',
          explanation: '"Hospital" se escribe igual en inglés y español, pero cambia su pronunciación.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Enfermero/a',
          back: 'Nurse',
          example: 'The nurse is very kind.',
          pronunciation: '/nɜːrs/',
          explanation: '"Nurse" ayuda a los doctores y cuida a los pacientes.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'Estoy en la farmacia',
      instructions: 'Ordena para decir "Yo estoy en la farmacia".',
      sentences: [
        {
          id: 's1',
          words: ['pharmacy', 'the', 'at', 'am', 'I'],
          correctSentence: 'I am at the pharmacy',
          translation: 'Yo estoy en la farmacia.',
          explanation: 'Usamos "at the" para indicar nuestra ubicación en un establecimiento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e6',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Health',
      instructions: 'Di la palabra para "salud".',
      questions: [
        {
          id: 'q1',
          text: 'Health',
          phonetic: '/helθ/',
          translation: 'Salud',
          explanation: 'La "th" final se pronuncia poniendo la lengua entre los dientes.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'Sentirse mal',
      instructions: 'Relaciona el síntoma o estado con su traducción.',
      pairs: [
        { id: 'p1', left: 'Sick', right: 'Enfermo/a' },
        { id: 'p2', left: 'Pain', right: 'Dolor' },
        { id: 'p3', left: 'Fever', right: 'Fiebre' },
        { id: 'p4', left: 'Cold', right: 'Resfriado' },
        { id: 'p5', left: 'Cough', right: 'Tos' }
      ],
      explanation: 'Vocabulario básico para describir cómo nos sentimos físicamente.'
    } as any
  },
  {
    id: 'a1-u23-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      title: 'Estar enfermo',
      instructions: '¿Qué significa "I feel sick"?',
      questions: [
        {
          id: 'q1',
          question: 'I feel sick.',
          options: ['Me siento enfermo.', 'Me siento bien.', 'Tengo hambre.'],
          correctAnswer: 0,
          explanation: '"Sick" es el término general para sentirse mal o enfermo.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Tengo fiebre',
      instructions: 'Completa con la palabra para "fiebre".',
      questions: [
        {
          id: 'q1',
          question: 'I have a ________.',
          correctAnswer: 'fever',
          explanation: 'Usamos "have a fever" para indicar que nuestra temperatura es alta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Resfriado',
          back: 'Cold',
          example: 'I have a bad cold.',
          pronunciation: '/koʊld/',
          explanation: '"Cold" significa frío, pero también se usa para un resfriado común.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Tengo tos',
      instructions: 'Ordena para decir "Yo tengo una tos fuerte".',
      sentences: [
        {
          id: 's1',
          words: ['cough', 'bad', 'a', 'have', 'I'],
          correctSentence: 'I have a bad cough',
          translation: 'Yo tengo una tos fuerte.',
          explanation: 'En este contexto, "bad" se traduce como fuerte o grave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Dolores Específicos',
      instructions: 'Une la parte del cuerpo con su dolor (-ache).',
      pairs: [
        { id: 'p1', left: 'Head', right: 'Headache (Dolor de cabeza)' },
        { id: 'p2', left: 'Stomach', right: 'Stomachache (Dolor de estómago)' },
        { id: 'p3', left: 'Back', right: 'Backache (Dolor de espalda)' },
        { id: 'p4', left: 'Tooth', right: 'Toothache (Dolor de muela)' },
        { id: 'p5', left: 'Ear', right: 'Earache (Dolor de oído)' }
      ],
      explanation: "Muchos dolores se forman añadiendo el sufijo '-ache' a la parte del cuerpo."
    } as any
  },
  {
    id: 'a1-u23-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Dolor de muela',
      instructions: '¿Qué significa "I have a toothache"?',
      questions: [
        {
          id: 'q1',
          question: 'I have a toothache.',
          options: ['Tengo dolor de muela.', 'Tengo dolor de cabeza.', 'Tengo dolor de espalda.'],
          correctAnswer: 0,
          explanation: '"Tooth" es diente/muela y "-ache" es dolor.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Me duele la espalda',
      instructions: 'Completa con la palabra para "dolor de espalda".',
      questions: [
        {
          id: 'q1',
          question: 'I have a ________.',
          correctAnswer: 'backache',
          explanation: '"Back" (espalda) + "ache" (dolor).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Headache',
      instructions: 'Di la palabra para "dolor de cabeza".',
      questions: [
        {
          id: 'q1',
          text: 'Headache',
          phonetic: '/ˈhedeɪk/',
          translation: 'Dolor de cabeza',
          explanation: 'La terminación "ache" se pronuncia como "eik".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Tratamientos y Remedios',
      instructions: 'Relaciona el remedio con su traducción.',
      pairs: [
        { id: 'p1', left: 'Medicine', right: 'Medicina' },
        { id: 'p2', left: 'Pill', right: 'Pastilla' },
        { id: 'p3', left: 'Rest', right: 'Descanso' },
        { id: 'p4', left: 'Water', right: 'Agua' },
        { id: 'p5', left: 'Sleep', right: 'Dormir' }
      ],
      explanation: 'Cosas que nos ayudan a sentirnos mejor cuando estamos enfermos.'
    } as any
  },
  {
    id: 'a1-u23-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Necesitar descanso',
      instructions: '¿Qué significa "You need to rest"?',
      questions: [
        {
          id: 'q1',
          question: 'You need to rest.',
          options: ['Necesitas descansar.', 'Necesitas medicina.', 'Necesitas agua.'],
          correctAnswer: 0,
          explanation: '"Rest" es descanso o descansar.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Tomar la medicina',
      instructions: 'Completa con la palabra para "medicina".',
      questions: [
        {
          id: 'q1',
          question: 'Take your ________.',
          correctAnswer: 'medicine',
          explanation: '"Medicine" es la sustancia para curar enfermedades.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Pastilla',
          back: 'Pill',
          example: 'Take one pill a day.',
          pronunciation: '/pɪl/',
          explanation: '"Pill" es una forma común de medicina sólida.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Beber mucha agua',
      instructions: 'Ordena para decir "Bebe mucha agua".',
      sentences: [
        {
          id: 's1',
          words: ['water', 'of', 'lot', 'a', 'Drink'],
          correctSentence: 'Drink a lot of water',
          translation: 'Bebe mucha agua.',
          explanation: 'Consejo común de salud.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Hábitos Saludables',
      instructions: 'Relaciona el hábito con su traducción.',
      pairs: [
        { id: 'p1', left: 'Healthy', right: 'Saludable' },
        { id: 'p2', left: 'Exercise', right: 'Ejercicio' },
        { id: 'p3', left: 'Fruit', right: 'Fruta' },
        { id: 'p4', left: 'Vegetables', right: 'Verduras' },
        { id: 'p5', left: 'Sport', right: 'Deporte' }
      ],
      explanation: 'Acciones que nos mantienen en buena forma.'
    } as any
  },
  {
    id: 'a1-u23-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Comida saludable',
      instructions: '¿Qué significa "Fruit is healthy"?',
      questions: [
        {
          id: 'q1',
          question: 'Fruit is healthy.',
          options: ['La fruta es saludable.', 'La fruta es dulce.', 'La fruta es cara.'],
          correctAnswer: 0,
          explanation: '"Healthy" se refiere a algo bueno para la salud.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Hacer ejercicio',
      instructions: 'Completa con la palabra para "ejercicio".',
      questions: [
        {
          id: 'q1',
          question: 'I do ________ every day.',
          correctAnswer: 'exercise',
          explanation: '"Do exercise" es la expresión para realizar actividad física.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e24',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Vegetables',
      instructions: 'Di la palabra para "verduras".',
      questions: [
        {
          id: 'q1',
          text: 'Vegetables',
          phonetic: '/ˈvedʒtəblz/',
          translation: 'Verduras',
          explanation: 'Cuidado: se pronuncian solo tres sílabas: "VEJ-ta-blz".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Partes del cuerpo que duelen',
      instructions: 'Une la frase con su traducción.',
      pairs: [
        { id: 'p1', left: 'My leg hurts', right: 'Me duele la pierna' },
        { id: 'p2', left: 'My arm hurts', right: 'Me duele el brazo' },
        { id: 'p3', left: 'My eye hurts', right: 'Me duele el ojo' },
        { id: 'p4', left: 'My back hurts', right: 'Me duele la espalda' },
        { id: 'p5', left: 'My throat hurts', right: 'Me duele la garganta' }
      ],
      explanation: "Usamos el verbo 'hurt' para indicar que una parte del cuerpo duele."
    } as any
  },
  {
    id: 'a1-u23-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Dolor de garganta',
      instructions: '¿Cómo se dice "garganta"?',
      questions: [
        {
          id: 'q1',
          question: 'My ________ hurts.',
          options: ['throat', 'tooth', 'nose'],
          correctAnswer: 0,
          explanation: '"Throat" es garganta. Muy común en resfriados.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Me duele la pierna',
      instructions: 'Escribe el verbo para "duele".',
      questions: [
        {
          id: 'q1',
          question: 'My leg ________.',
          correctAnswer: 'hurts',
          explanation: 'Añadimos "s" al verbo porque la pierna es tercera persona del singular.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Sano / Saludable',
          back: 'Healthy',
          example: 'I am healthy.',
          pronunciation: '/ˈhelθi/',
          explanation: 'Describe a alguien o algo que está en buen estado de salud.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: '¿Dónde te duele?',
      instructions: 'Ordena para preguntar "¿Dónde te duele?".',
      sentences: [
        {
          id: 's1',
          words: ['it', 'hurt', 'does', 'Where'],
          correctSentence: 'Where does it hurt',
          translation: '¿Dónde te duele?',
          explanation: 'Pregunta típica que hace un médico.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Citas Médicas',
      instructions: 'Relaciona la frase.',
      pairs: [
        { id: 'p1', left: 'Appointment', right: 'Cita / Hora' },
        { id: 'p2', left: 'Patient', right: 'Paciente' },
        { id: 'p3', left: 'Help', right: 'Ayuda / Ayudar' },
        { id: 'p4', left: 'Wait', right: 'Esperar' },
        { id: 'p5', left: 'Emergency', right: 'Emergencia' }
      ],
      explanation: 'Términos relacionados con la gestión de la salud.'
    } as any
  },
  {
    id: 'a1-u23-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Tener una cita',
      instructions: 'I have an ________ with the doctor.',
      questions: [
        {
          id: 'q1',
          question: 'I have an ________ with the doctor.',
          options: ['appointment', 'emergency', 'exercise'],
          correctAnswer: 0,
          explanation: '"Appointment" se usa para una cita programada.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Emergencia',
      instructions: 'Escribe la palabra para "emergencia".',
      questions: [
        {
          id: 'q1',
          question: 'This is an ________!',
          correctAnswer: 'emergency',
          explanation: 'Se usa para situaciones graves que requieren atención inmediata.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Patient',
      instructions: 'Di la palabra para "paciente".',
      questions: [
        {
          id: 'q1',
          text: 'Patient',
          phonetic: '/ˈpeɪʃnt/',
          translation: 'Paciente',
          explanation: 'La "ti" suena como una "sh".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Verbos de Salud',
      instructions: 'Relaciona el verbo.',
      pairs: [
        { id: 'p1', left: 'Breathe', right: 'Respirar' },
        { id: 'p2', left: 'Sneeze', right: 'Estornudar' },
        { id: 'p3', left: 'Feel', right: 'Sentirse' },
        { id: 'p4', left: 'Sleep', right: 'Dormir' },
        { id: 'p5', left: 'Drink', right: 'Beber' }
      ],
      explanation: 'Acciones básicas que hacemos o nos piden hacer por salud.'
    } as any
  },
  {
    id: 'a1-u23-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Respirar hondo',
      instructions: '¿Qué significa "Breathe deeply"?',
      questions: [
        {
          id: 'q1',
          question: 'Breathe deeply.',
          options: ['Respira hondo.', 'Duerme mucho.', 'Bebe agua.'],
          correctAnswer: 0,
          explanation: '"Breathe" es respirar.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      title: 'Estornudar',
      instructions: 'Completa: Yo estornudo mucho.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a lot.',
          correctAnswer: 'sneeze',
          explanation: '"Sneeze" es estornudar, algo muy típico de las alergias.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Sentirse mejor',
          back: 'Feel better',
          example: 'I hope you feel better.',
          pronunciation: '/fiːl ˈbetər/',
          explanation: 'Expresión para desear mejoría a alguien.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: '¿Cómo te sientes?',
      instructions: 'Ordena para preguntar "¿Cómo te sientes?".',
      sentences: [
        {
          id: 's1',
          words: ['feel', 'you', 'do', 'How'],
          correctSentence: 'How do you feel',
          translation: '¿Cómo te sientes?',
          explanation: 'Pregunta básica sobre el estado de salud.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Repaso de Síntomas',
      instructions: 'Relaciona el síntoma con su descripción.',
      pairs: [
        { id: 'p1', left: 'Headache', right: 'Pain in the head' },
        { id: 'p2', left: 'Toothache', right: 'Pain in the tooth' },
        { id: 'p3', left: 'Stomachache', right: 'Pain in the stomach' },
        { id: 'p4', left: 'Earache', right: 'Pain in the ear' },
        { id: 'p5', left: 'Backache', right: 'Pain in the back' }
      ],
      explanation: 'Entender qué significa el sufijo "-ache".'
    } as any
  },
  {
    id: 'a1-u23-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: '¿Necesitas ayuda?',
      instructions: '¿Cómo preguntarías si alguien necesita ayuda?',
      questions: [
        {
          id: 'q1',
          question: '________ you need help?',
          options: ['Do', 'Are', 'Is'],
          correctAnswer: 0,
          explanation: "Usamos el auxiliar 'do' para preguntas en presente simple con el verbo 'need'."
        }
      ]
    }
  },
  {
    id: 'a1-u23-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Tomar agua',
      instructions: 'Completa: Bebe mucha agua.',
      questions: [
        {
          id: 'q1',
          question: 'Drink a lot of ________.',
          correctAnswer: 'water',
          explanation: '"Water" es esencial para la recuperación.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e42',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Pronunciación: Hospital',
      instructions: 'Di la palabra para "hospital".',
      questions: [
        {
          id: 'q1',
          text: 'Hospital',
          phonetic: '/ˈhɒspɪtl/',
          translation: 'Hospital',
          explanation: 'La "h" se pronuncia como una aspiración, como en "hola" pero más suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Vocabulario Final',
      instructions: 'Relaciona los conceptos finales.',
      pairs: [
        { id: 'p1', left: 'Strong', right: 'Fuerte' },
        { id: 'p2', left: 'Weak', right: 'Débil' },
        { id: 'p3', left: 'Tired', right: 'Cansado/a' },
        { id: 'p4', left: 'Energy', right: 'Energía' },
        { id: 'p5', left: 'Better', right: 'Mejor' }
      ],
      explanation: 'Palabras para describir cómo nos sentimos después de la recuperación.'
    } as any
  },
  {
    id: 'a1-u23-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Sentirse cansado',
      instructions: 'I feel very ________.',
      questions: [
        {
          id: 'q1',
          question: 'I feel very ________.',
          options: ['tired', 'strong', 'healthy'],
          correctAnswer: 0,
          explanation: '"Tired" es cuando no tienes energía y necesitas dormir.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Estar mejor',
      instructions: 'Completa: Me siento mejor ahora.',
      questions: [
        {
          id: 'q1',
          question: 'I feel ________ now.',
          correctAnswer: 'better',
          explanation: '"Better" indica una mejoría respecto al estado anterior.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Débil',
          back: 'Weak',
          example: 'I feel weak after the fever.',
          pronunciation: '/wiːk/',
          explanation: '"Weak" es lo opuesto a "strong".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Medicina y descanso',
      instructions: 'Ordena para decir "Yo necesito medicina y descanso".',
      sentences: [
        {
          id: 's1',
          words: ['rest', 'and', 'medicine', 'need', 'I'],
          correctSentence: 'I need medicine and rest',
          translation: 'Yo necesito medicina y descanso.',
          explanation: 'Estructura simple con el verbo "need".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Pregunta de cita',
      instructions: '¿Tienes una cita?',
      questions: [
        {
          id: 'q1',
          question: 'Do you have an ________?',
          options: ['appointment', 'hospital', 'pain'],
          correctAnswer: 0,
          explanation: '"Appointment" es la palabra clave para citas programadas.'
        }
      ]
    }
  },
  {
    id: 'a1-u23-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Tener salud',
      instructions: 'Es bueno estar sano.',
      questions: [
        {
          id: 'q1',
          question: 'It is good to be ________.',
          correctAnswer: 'healthy',
          explanation: '"Healthy" es el adjetivo para sano.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u23-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Health',
    topicName: 'Healthy Life',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de Salud',
      instructions: 'Relaciona los términos más importantes de la unidad.',
      pairs: [
        { id: 'p1', left: 'Doctor', right: 'Médico' },
        { id: 'p2', left: 'Medicine', right: 'Medicina' },
        { id: 'p3', left: 'Sick', right: 'Enfermo' },
        { id: 'p4', left: 'Pain', right: 'Dolor' },
        { id: 'p5', left: 'Healthy', right: 'Sano' }
      ],
      explanation: 'Resumen del vocabulario esencial para hablar de salud en inglés.'
    } as any
  }
];
