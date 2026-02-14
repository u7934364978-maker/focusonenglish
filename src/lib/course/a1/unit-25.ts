import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 25: Past Tense
 */

export const UNIT_25_EXERCISES: Exercise[] = [
  {
    id: 'a1-u25-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'El Pasado de To Be',
      instructions: 'Relaciona la forma en presente con su forma en pasado.',
      pairs: [
        { id: 'p1', left: 'I am', right: 'I was' },
        { id: 'p2', left: 'You are', right: 'You were' },
        { id: 'p3', left: 'He is', right: 'He was' },
        { id: 'p4', left: 'We are', right: 'We were' },
        { id: 'p5', left: 'They are', right: 'They were' }
      ],
      explanation: "El verbo 'to be' tiene dos formas en pasado: 'was' (para I, he, she, it) y 'were' (para you, we, they)."
    } as any
  },
  {
    id: 'a1-u25-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Yo estaba feliz',
      instructions: 'Traduce: Yo estaba feliz ayer.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ happy yesterday.',
          options: ['was', 'were', 'am'],
          correctAnswer: 0,
          explanation: "Usamos 'was' con el sujeto 'I' para hablar del pasado."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Ellos estaban en casa',
      instructions: 'Completa con la forma correcta de "to be" en pasado.',
      questions: [
        {
          id: 'q1',
          question: 'They ________ at home last night.',
          correctAnswer: 'were',
          explanation: "Usamos 'were' para sujetos en plural como 'they'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ayer',
          back: 'Yesterday',
          example: 'I was tired yesterday.',
          pronunciation: '/ˈjestərdeɪ/',
          explanation: '"Yesterday" es la palabra clave para referirse al día anterior al de hoy.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Ella era profesora',
      instructions: 'Ordena para decir "Ella era una buena profesora".',
      sentences: [
        {
          id: 's1',
          words: ['teacher', 'good', 'a', 'was', 'She'],
          correctSentence: 'She was a good teacher',
          translation: 'Ella era una buena profesora.',
          explanation: 'La estructura en pasado es la misma que en presente: Sujeto + was/were + complemento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Expresiones de Tiempo Pasado',
      instructions: 'Relaciona la expresión con su traducción.',
      pairs: [
        { id: 'p1', left: 'Last night', right: 'Anoche' },
        { id: 'p2', left: 'Last week', right: 'La semana pasada' },
        { id: 'p3', left: 'Last month', right: 'El mes pasado' },
        { id: 'p4', left: 'Two days ago', right: 'Hace dos días' },
        { id: 'p5', left: 'A year ago', right: 'Hace un año' }
      ],
      explanation: "Usamos 'last' para 'pasado/a' y 'ago' para 'hace' (al final de la frase)."
    } as any
  },
  {
    id: 'a1-u25-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      title: 'Hace un momento',
      instructions: '¿Cómo se dice "Hace diez minutos"?',
      questions: [
        {
          id: 'q1',
          question: 'Ten minutes ________.',
          options: ['ago', 'last', 'past'],
          correctAnswer: 0,
          explanation: "'Ago' siempre se coloca después del periodo de tiempo para indicar cuánto tiempo ha pasado."
        }
      ]
    }
  },
  {
    id: 'a1-q25-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'La película estuvo genial',
      instructions: 'Completa: La película estuvo muy bien.',
      questions: [
        {
          id: 'q1',
          question: 'The movie ________ very good.',
          correctAnswer: 'was',
          explanation: "'The movie' es equivalente a 'it', por lo que usamos 'was'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'La semana pasada',
          back: 'Last week',
          example: 'We were in London last week.',
          pronunciation: '/læst wiːk/',
          explanation: '"Last" se usa con periodos de tiempo para indicar el inmediatamente anterior.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: '¿Dónde estabas?',
      instructions: 'Ordena para preguntar "¿Dónde estabas tú?".',
      sentences: [
        {
          id: 's1',
          words: ['you', 'were', 'Where'],
          correctSentence: 'Where were you',
          translation: '¿Dónde estabas tú?',
          explanation: 'Para preguntas, invertimos: Word + was/were + Sujeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Negación en Pasado',
      instructions: 'Relaciona la afirmación con su negación correspondiente.',
      pairs: [
        { id: 'p1', left: 'I was', right: 'I was not (wasn\'t)' },
        { id: 'p2', left: 'You were', right: 'You were not (weren\'t)' },
        { id: 'p3', left: 'He was', right: 'He was not (wasn\'t)' },
        { id: 'p4', left: 'We were', right: 'We were not (weren\'t)' },
        { id: 'p5', left: 'It was', right: 'It was not (wasn\'t)' }
      ],
      explanation: "Añadimos 'not' después de 'was/were' para negar. Las contracciones 'wasn't' y 'weren't' son muy comunes."
    } as any
  },
  {
    id: 'a1-u25-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'No estaba cansado',
      instructions: 'Traduce: Yo no estaba cansado.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ tired.',
          options: ["wasn't", "weren't", 'no was'],
          correctAnswer: 0,
          explanation: "'Wasn't' es la contracción de 'was not'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'No estaban aquí',
      instructions: 'Escribe la forma negativa contraída de "were".',
      questions: [
        {
          id: 'q1',
          question: 'They ________ here yesterday.',
          correctAnswer: "weren't",
          explanation: '"Weren\'t" es la contracción de "were not".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Sentimientos en el Pasado',
      instructions: 'Relaciona el estado de ánimo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Happy', right: 'Feliz' },
        { id: 'p2', left: 'Sad', right: 'Triste' },
        { id: 'p3', left: 'Excited', right: 'Emocionado/a' },
        { id: 'p4', left: 'Bored', right: 'Aburrido/a' },
        { id: 'p5', left: 'Angry', right: 'Enfadado/a' }
      ],
      explanation: 'Adjetivos útiles para describir cómo nos sentíamos en momentos pasados.'
    } as any
  },
  {
    id: 'a1-u25-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Estábamos emocionados',
      instructions: '¿Cómo dirías "Estábamos muy emocionados"?',
      questions: [
        {
          id: 'q1',
          question: 'We ________ very excited.',
          options: ['were', 'was', 'are'],
          correctAnswer: 0,
          explanation: "Sujeto plural 'we' requiere 'were'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Tristeza pasada',
      instructions: 'Completa: Él estaba triste la semana pasada.',
      questions: [
        {
          id: 'q1',
          question: 'He ________ sad last week.',
          correctAnswer: 'was',
          explanation: "Usamos 'was' para la tercera persona del singular."
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Aburrido/a',
          back: 'Bored',
          example: 'The class was very bored.',
          pronunciation: '/bɔːrd/',
          explanation: '"Bored" describe el sentimiento de una persona (aburrida).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: '¿Fue divertido?',
      instructions: 'Ordena para preguntar "¿Fue divertido el viaje?".',
      sentences: [
        {
          id: 's1',
          words: ['fun', 'trip', 'the', 'Was'],
          correctSentence: 'Was the trip fun',
          translation: '¿Fue divertido el viaje?',
          explanation: 'Invertimos el orden del sujeto (the trip) y el verbo (was) en preguntas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Lugares Memorables',
      instructions: 'Relaciona el lugar con su traducción.',
      pairs: [
        { id: 'p1', left: 'Museum', right: 'Museo' },
        { id: 'p2', left: 'Concert', right: 'Concierto' },
        { id: 'p3', left: 'Party', right: 'Fiesta' },
        { id: 'p4', left: 'Beach', right: 'Playa' },
        { id: 'p5', left: 'Mountain', right: 'Montaña' }
      ],
      explanation: 'Lugares comunes que solemos visitar y recordar.'
    } as any
  },
  {
    id: 'a1-u25-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'En la playa',
      instructions: '¿Dónde estuviste el verano pasado?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ at the beach last summer.',
          options: ['was', 'were', 'am'],
          correctAnswer: 0,
          explanation: "Recordamos: 'I was'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'La fiesta',
      instructions: 'Completa: La fiesta fue genial.',
      questions: [
        {
          id: 'q1',
          question: 'The party ________ great.',
          correctAnswer: 'was',
          explanation: '"The party" es una cosa singular (it).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Clima en el Pasado',
      instructions: 'Relaciona el clima.',
      pairs: [
        { id: 'p1', left: 'Sunny', right: 'Soleado' },
        { id: 'p2', left: 'Rainy', right: 'Lluvioso' },
        { id: 'p3', left: 'Cloudy', right: 'Nublado' },
        { id: 'p4', left: 'Windy', right: 'Ventoso' },
        { id: 'p5', left: 'Cold', right: 'Frío' }
      ],
      explanation: 'El clima es un tema típico para practicar el pasado del verbo to be.'
    } as any
  },
  {
    id: 'a1-u25-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Hacía sol',
      instructions: 'It ________ sunny yesterday.',
      questions: [
        {
          id: 'q1',
          question: 'It ________ sunny yesterday.',
          options: ['was', 'were', 'is'],
          correctAnswer: 0,
          explanation: "Usamos 'it was' para hablar del clima en el pasado."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Hacía mucho viento',
      instructions: 'Escribe la palabra para "estaba/hacía" (clima).',
      questions: [
        {
          id: 'q1',
          question: 'It ________ very windy last night.',
          correctAnswer: 'was',
          explanation: "El sujeto impersonal para el clima es 'it', que va con 'was'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Nublado',
          back: 'Cloudy',
          example: 'It was cloudy in the morning.',
          pronunciation: '/ˈklaʊdi/',
          explanation: '"Cloudy" viene de "cloud" (nube).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'No llovía',
      instructions: 'Ordena para decir "No estaba lluvioso ayer".',
      sentences: [
        {
          id: 's1',
          words: ['yesterday', 'rainy', "wasn't", 'It'],
          correctSentence: "It wasn't rainy yesterday",
          translation: 'No estaba lluvioso ayer.',
          explanation: 'Negación impersonal para el clima.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Preguntas y Respuestas Cortas',
      instructions: 'Une la pregunta con su respuesta corta lógica.',
      pairs: [
        { id: 'p1', left: 'Were you at home?', right: 'Yes, I was.' },
        { id: 'p2', left: 'Was he happy?', right: 'No, he wasn\'t.' },
        { id: 'p3', left: 'Were they late?', right: 'Yes, they were.' },
        { id: 'p4', left: 'Was it cold?', right: 'No, it wasn\'t.' },
        { id: 'p5', left: 'Were we together?', right: 'Yes, we were.' }
      ],
      explanation: 'En las respuestas cortas repetimos el sujeto y el verbo auxiliar (was/were).'
    } as any
  },
  {
    id: 'a1-u25-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Respuesta corta afirmativa',
      instructions: 'Were you tired? ________.',
      questions: [
        {
          id: 'q1',
          question: 'Were you tired? ________.',
          options: ['Yes, I was', 'Yes, I were', 'Yes, I am'],
          correctAnswer: 0,
          explanation: "Si te preguntan con 'you', respondes con 'I' y su forma correspondiente 'was'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Respuesta corta negativa',
      instructions: 'Completa: No, no lo eran.',
      questions: [
        {
          id: 'q1',
          question: 'Were they expensive? No, they ________.',
          correctAnswer: "weren't",
          explanation: "Usamos la forma negativa contraída en las respuestas cortas."
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Estados Físicos en el Pasado',
      instructions: 'Relaciona el estado con su traducción.',
      pairs: [
        { id: 'p1', left: 'Tired', right: 'Cansado/a' },
        { id: 'p2', left: 'Hungry', right: 'Hambriento/a' },
        { id: 'p3', left: 'Thirsty', right: 'Sediento/a' },
        { id: 'p4', left: 'Sleepy', right: 'Somnoliento/a' },
        { id: 'p5', left: 'Sick', right: 'Enfermo/a' }
      ],
      explanation: 'Sensaciones físicas que podemos haber tenido en el pasado.'
    } as any
  },
  {
    id: 'a1-u25-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Tener mucha sed',
      instructions: 'I ________ very thirsty after the run.',
      questions: [
        {
          id: 'q1',
          question: 'I ________ very thirsty after the run.',
          options: ['was', 'were', 'am'],
          correctAnswer: 0,
          explanation: "Usamos 'was' para estados físicos pasados del sujeto 'I'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      title: 'Hambre pasada',
      instructions: 'Completa: Teníamos mucha hambre.',
      questions: [
        {
          id: 'q1',
          question: 'We ________ very hungry.',
          correctAnswer: 'were',
          explanation: "En inglés 'tener hambre' se dice con el verbo to be + hungry."
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Sediento/a',
          back: 'Thirsty',
          example: 'She was thirsty because it was hot.',
          pronunciation: '/ˈθɜːrsti/',
          explanation: 'La "th" inicial es sorda, como en "thanks".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'No tenía sueño',
      instructions: 'Ordena para decir "Yo no tenía sueño anoche".',
      sentences: [
        {
          id: 's1',
          words: ['night', 'last', 'sleepy', "wasn't", 'I'],
          correctSentence: "I wasn't sleepy last night",
          translation: 'Yo no tenía sueño anoche.',
          explanation: 'Estructura negativa con expresión de tiempo al final.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Repaso de Pronombres y To Be',
      instructions: 'Une el sujeto con su forma de pasado correcta.',
      pairs: [
        { id: 'p1', left: 'My brother', right: 'Was' },
        { id: 'p2', left: 'The children', right: 'Were' },
        { id: 'p3', left: 'My friends and I', right: 'Were' },
        { id: 'p4', left: 'The cat', right: 'Was' },
        { id: 'p5', left: 'The students', right: 'Were' }
      ],
      explanation: 'Sustituir nombres por pronombres ayuda a elegir entre was y were.'
    } as any
  },
  {
    id: 'a1-u25-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: '¿Quién estaba allí?',
      instructions: '¿Cómo preguntarías "¿Quién estaba allí?"?',
      questions: [
        {
          id: 'q1',
          question: '________ was there?',
          options: ['Who', 'What', 'Where'],
          correctAnswer: 0,
          explanation: "'Who' se usa para preguntar por personas."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Hace tiempo',
      instructions: 'Completa: Fue hace mucho tiempo.',
      questions: [
        {
          id: 'q1',
          question: 'It was a long time ________.',
          correctAnswer: 'ago',
          explanation: '"Ago" se refiere a cuánto tiempo hace que ocurrió algo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Resumen de Vocabulario',
      instructions: 'Relaciona los términos finales de la unidad.',
      pairs: [
        { id: 'p1', left: 'Memory', right: 'Recuerdo' },
        { id: 'p2', left: 'Past', right: 'Pasado' },
        { id: 'p3', left: 'Ago', right: 'Hace (tiempo)' },
        { id: 'p4', left: 'Last', right: 'Pasado/a' },
        { id: 'p5', left: 'Was / Were', right: 'Era / Estaba' }
      ],
      explanation: 'Conceptos clave para hablar de tus recuerdos.'
    } as any
  },
  {
    id: 'a1-u25-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Llegar tarde',
      instructions: 'They ________ late for the meeting.',
      questions: [
        {
          id: 'q1',
          question: 'They ________ late for the meeting.',
          options: ['were', 'was', 'am'],
          correctAnswer: 0,
          explanation: "Sujeto plural 'they' requiere 'were'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Buen día',
      instructions: 'Completa: Ayer fue un buen día.',
      questions: [
        {
          id: 'q1',
          question: 'Yesterday ________ a good day.',
          correctAnswer: 'was',
          explanation: '"Yesterday" funciona como un sujeto singular.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'Hace dos años',
          back: 'Two years ago',
          example: 'I was in Spain two years ago.',
          pronunciation: '/tuː jɪərz əˈɡoʊ/',
          explanation: 'Recuerda: el número y la unidad de tiempo van antes de "ago".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Mis amigos estaban allí',
      instructions: 'Ordena para decir "Mis amigos estaban allí anoche".',
      sentences: [
        {
          id: 's1',
          words: ['night', 'last', 'there', 'were', 'friends', 'My'],
          correctSentence: 'My friends were there last night',
          translation: 'Mis amigos estaban allí anoche.',
          explanation: '"My friends" es plural, por eso usamos "were".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Pregunta sobre el precio pasado',
      instructions: 'How much ________ the tickets?',
      questions: [
        {
          id: 'q1',
          question: 'How much ________ the tickets?',
          options: ['were', 'was', 'are'],
          correctAnswer: 0,
          explanation: "Como 'tickets' es plural, usamos 'were'."
        }
      ]
    }
  },
  {
    id: 'a1-u25-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Yo no estaba allí',
      instructions: 'Escribe la forma negativa contraída para "I".',
      questions: [
        {
          id: 'q1',
          question: 'I ________ there.',
          correctAnswer: "wasn't",
          explanation: 'La negación para el sujeto "I" es "wasn\'t".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u25-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Past Tense',
    topicName: 'Past Memories',
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de To Be (Pasado)',
      instructions: 'Relaciona las frases más importantes de la unidad.',
      pairs: [
        { id: 'p1', left: 'I was happy', right: 'Yo era feliz' },
        { id: 'p2', left: 'It was rainy', right: 'Estaba lluvioso' },
        { id: 'p3', left: 'They were late', right: 'Ellos llegaron tarde' },
        { id: 'p4', left: 'Was it fun?', right: '¿Fue divertido?' },
        { id: 'p5', left: "We weren't bored", right: 'No estábamos aburridos' }
      ],
      explanation: 'Resumen de los usos principales de was y were vistos en esta unidad.'
    } as any
  }
];
