import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 13: Movement
 */

export const UNIT_13_EXERCISES: Exercise[] = [
  {
    id: 'a1-u13-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Caminar',
      instructions: '¿Cómo se dice "caminar" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ to school every day.',
          options: ['walk', 'run', 'jump'],
          correctAnswer: 0,
          explanation: '"Walk" significa caminar. Es un movimiento lento y constante.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Correr',
          back: 'Run',
          example: 'I run in the park.',
          pronunciation: '/rʌn/',
          explanation: '"Run" es correr. Es más rápido que caminar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Puedo correr rápido',
      instructions: 'Ordena las palabras para decir "Yo puedo correr rápido".',
      sentences: [
        {
          id: 's1',
          words: ['fast', 'run', 'can', 'I'],
          correctSentence: 'I can run fast',
          translation: 'Yo puedo correr rápido.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "can" para expresar habilidad física.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e4',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Verbos de Movimiento',
      instructions: 'Une cada verbo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Jump', right: 'Saltar' },
        { id: 'p2', left: 'Dance', right: 'Bailar' },
        { id: 'p3', left: 'Swim', right: 'Nadar' },
        { id: 'p4', left: 'Climb', right: 'Escalar/Subir' },
        { id: 'p5', left: 'Fly', right: 'Volar' }
      ],
      explanation: 'Estos verbos describen diferentes formas de desplazarse o moverse.'
    } as any
  },
  {
    id: 'a1-u13-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Walk',
      instructions: 'Di la palabra para "caminar".',
      questions: [
        {
          id: 'q1',
          text: 'Walk',
          phonetic: '/wɔːk/',
          translation: 'Caminar',
          explanation: 'La "l" es muda. Suena parecido a "wok".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Saltar alto',
      instructions: 'Completa con la palabra para "saltar".',
      questions: [
        {
          id: 'q1',
          question: 'The frog can ________ high.',
          answer: 'jump',
          explanation: '"Jump" es la acción de elevarse del suelo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Nadar en el mar',
      instructions: '¿Qué verbo describe moverse en el agua?',
      questions: [
        {
          id: 'q1',
          question: 'Fish can ________.',
          options: ['swim', 'walk', 'fly'],
          correctAnswer: 0,
          explanation: '"Swim" es nadar. Es el movimiento natural en el agua.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Me gusta bailar',
      instructions: 'Ordena para decir "Me gusta bailar".',
      sentences: [
        {
          id: 's1',
          words: ['dance', 'to', 'like', 'I'],
          correctSentence: 'I like to dance',
          translation: 'Me gusta bailar.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "like to" seguido de un verbo para expresar aficiones.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Escalar / Subir',
          back: 'Climb',
          example: 'I climb the mountain.',
          pronunciation: '/klaɪm/',
          explanation: 'La "b" al final es muda. No se pronuncia.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: '¿Qué es "fly"?',
      instructions: '¿Cuál es la traducción correcta?',
      questions: [
        {
          id: 'q1',
          question: 'Birds can fly.',
          options: ['Volar', 'Caminar', 'Nadar'],
          correctAnswer: 0,
          explanation: '"Fly" significa volar. Es la habilidad de las aves y los aviones.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Escalar árboles',
      instructions: 'Escribe la palabra para "escalar" o "subir".',
      questions: [
        {
          id: 'q1',
          question: 'Can you ________ that tree?',
          answer: 'climb',
          explanation: '"Climb" se usa para árboles, montañas o escaleras.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Direcciones de Movimiento',
      instructions: 'Une cada expresión con su significado.',
      pairs: [
        { id: 'p1', left: 'Go up', right: 'Subir' },
        { id: 'p2', left: 'Go down', right: 'Bajar' },
        { id: 'p3', left: 'Go in', right: 'Entrar' },
        { id: 'p4', left: 'Go out', right: 'Salir' },
        { id: 'p5', left: 'Go back', right: 'Regresar' }
      ],
      explanation: 'Estas combinaciones de "go" indican la dirección del movimiento.'
    } as any
  },
  {
    id: 'a1-u13-e13',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Run',
      instructions: 'Di la palabra para "correr".',
      questions: [
        {
          id: 'q1',
          text: 'Run',
          phonetic: '/rʌn/',
          translation: 'Correr',
          explanation: 'La "u" suena como una "a" corta y cerrada.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Sube las escaleras',
      instructions: 'Ordena para decir "Yo subo las escaleras".',
      sentences: [
        {
          id: 's1',
          words: ['stairs', 'the', 'up', 'go', 'I'],
          correctSentence: 'I go up the stairs',
          translation: 'Yo subo las escaleras.',
          hint: 'Empieza con "I".',
          explanation: '"Go up" es la acción de ascender.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Entrar en casa',
      instructions: '¿Cómo se dice "entrar"?',
      questions: [
        {
          id: 'q1',
          question: 'Please ________ the house.',
          options: ['go in', 'go out', 'go up'],
          correctAnswer: 0,
          explanation: '"Go in" o "Enter" significa entrar en un lugar.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sentarse',
          back: 'Sit down',
          example: 'Sit down on the chair.',
          pronunciation: '/sɪt daʊn/',
          explanation: '"Sit down" es la acción de tomar asiento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Levantarse',
      instructions: 'Escribe la expresión para "levantarse" (ponerse de pie).',
      questions: [
        {
          id: 'q1',
          question: 'Please ________ up.',
          answer: 'stand',
          explanation: '"Stand up" es ponerse de pie. Lo opuesto a "sit down".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e18',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Acciones Corporales',
      instructions: 'Une cada acción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Sit down', right: 'Sentarse' },
        { id: 'p2', left: 'Stand up', right: 'Levantarse' },
        { id: 'p3', left: 'Turn around', right: 'Darse la vuelta' },
        { id: 'p4', left: 'Lie down', right: 'Tumbarse' },
        { id: 'p5', left: 'Fall down', right: 'Caerse' }
      ],
      explanation: 'Estas son acciones básicas que realizamos con nuestro cuerpo.'
    } as any
  },
  {
    id: 'a1-u13-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Moverse rápido o lento',
      instructions: '¿Cómo se dice "lento"?',
      questions: [
        {
          id: 'q1',
          question: 'A turtle is ________.',
          options: ['slow', 'fast', 'quick'],
          correctAnswer: 0,
          explanation: '"Slow" significa lento. Lo opuesto es "fast".'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Jump',
      instructions: 'Di la palabra para "saltar".',
      questions: [
        {
          id: 'q1',
          text: 'Jump',
          phonetic: '/dʒʌmp/',
          translation: 'Saltar',
          explanation: 'La "j" suena como una "y" fuerte o "dg".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Él camina despacio',
      instructions: 'Ordena para decir "Él camina despacio".',
      sentences: [
        {
          id: 's1',
          words: ['slowly', 'walks', 'He'],
          correctSentence: 'He walks slowly',
          translation: 'Él camina despacio.',
          hint: 'Empieza con "He".',
          explanation: 'Añadimos "s" al verbo en tercera persona: "walks".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Girar / Doblar',
          back: 'Turn',
          example: 'Turn left at the corner.',
          pronunciation: '/tɜːn/',
          explanation: '"Turn" se usa para cambiar de dirección.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Darse la vuelta',
      instructions: 'Escribe la palabra para "girar" o "darse la vuelta".',
      questions: [
        {
          id: 'q1',
          question: '________ around and look at me.',
          answer: 'Turn',
          explanation: '"Turn around" es girar sobre uno mismo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Moverse hacia aquí',
      instructions: '¿Cómo se dice "venir"?',
      questions: [
        {
          id: 'q1',
          question: '________ here, please.',
          options: ['Come', 'Go', 'Run'],
          correctAnswer: 0,
          explanation: '"Come" significa venir. "Go" significa ir.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Opuestos de Movimiento',
      instructions: 'Une cada verbo con su opuesto.',
      pairs: [
        { id: 'p1', left: 'Come', right: 'Go' },
        { id: 'p2', left: 'Sit down', right: 'Stand up' },
        { id: 'p3', left: 'Go in', right: 'Go out' },
        { id: 'p4', left: 'Push', right: 'Pull' },
        { id: 'p5', left: 'Arrive', right: 'Leave' }
      ],
      explanation: 'Aprender los opuestos te ayudará a duplicar tu vocabulario rápidamente.'
    } as any
  },
  {
    id: 'a1-u13-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Climb',
      instructions: 'Di la palabra para "escalar".',
      questions: [
        {
          id: 'q1',
          text: 'Climb',
          phonetic: '/klaɪm/',
          translation: 'Escalar',
          explanation: 'Recuerda: ¡No pronuncies la "b"!'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Ella va al trabajo',
      instructions: 'Ordena para decir "Ella va al trabajo caminando".',
      sentences: [
        {
          id: 's1',
          words: ['work', 'to', 'walks', 'She'],
          correctSentence: 'She walks to work',
          translation: 'Ella va al trabajo caminando.',
          hint: 'Empieza con "She".',
          explanation: 'Usamos el verbo "walk" para indicar que el desplazamiento es a pie.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Empujar y Tirar',
      instructions: '¿Qué haces para abrir una puerta que dice "PULL"?',
      questions: [
        {
          id: 'q1',
          question: 'I have to ________ the door.',
          options: ['pull', 'push', 'turn'],
          correctAnswer: 0,
          explanation: '"Pull" es tirar hacia uno mismo. "Push" es empujar.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Llegar',
          back: 'Arrive',
          example: 'I arrive at 8:00 AM.',
          pronunciation: '/əˈraɪv/',
          explanation: '"Arrive" es llegar a un destino.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Salir de casa',
      instructions: 'Escribe la palabra para "irse" o "salir".',
      questions: [
        {
          id: 'q1',
          question: 'I have to ________ now.',
          answer: 'leave',
          explanation: '"Leave" significa irse o abandonar un lugar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Mover objetos',
      instructions: '¿Cómo se dice "traer"?',
      questions: [
        {
          id: 'q1',
          question: 'Please ________ the water.',
          options: ['bring', 'take', 'go'],
          correctAnswer: 0,
          explanation: '"Bring" es traer algo hacia donde estás.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e32',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Acciones con Objetos',
      instructions: 'Une cada verbo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Bring', right: 'Traer' },
        { id: 'p2', left: 'Take', right: 'Llevar' },
        { id: 'p3', left: 'Carry', right: 'Cargar/Transportar' },
        { id: 'p4', left: 'Throw', right: 'Lanzar' },
        { id: 'p5', left: 'Catch', right: 'Atrapar' }
      ],
      explanation: 'Estos verbos implican movimiento combinado con el manejo de objetos.'
    } as any
  },
  {
    id: 'a1-u13-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Dance',
      instructions: 'Di la palabra para "bailar".',
      questions: [
        {
          id: 'q1',
          text: 'Dance',
          phonetic: '/dɑːns/',
          translation: 'Bailar',
          explanation: 'La "a" suena larga en inglés británico y corta en americano.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Llévate tu paraguas',
      instructions: 'Ordena para decir "Llévate tu paraguas".',
      sentences: [
        {
          id: 's1',
          words: ['umbrella', 'your', 'Take'],
          correctSentence: 'Take your umbrella',
          translation: 'Llévate tu paraguas.',
          hint: 'Empieza con "Take".',
          explanation: 'Usamos "Take" para llevar algo fuera o lejos de aquí.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Lanzar / Tirar',
          back: 'Throw',
          example: 'Throw the ball.',
          pronunciation: '/θrəʊ/',
          explanation: 'La "th" suena como una "z" española.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Atrapar la pelota',
      instructions: '¿Cuál es el opuesto de "throw"?',
      questions: [
        {
          id: 'q1',
          question: '________ the ball!',
          options: ['Catch', 'Kick', 'Run'],
          correctAnswer: 0,
          explanation: '"Catch" es atrapar o coger algo que viene en el aire.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Empujar fuerte',
      instructions: 'Escribe la palabra para "empujar".',
      questions: [
        {
          id: 'q1',
          question: 'Please ________ the door.',
          answer: 'push',
          explanation: '"Push" es ejercer fuerza para alejar algo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e38',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Movimientos Rápidos',
      instructions: 'Une cada verbo con su traducción.',
      pairs: [
        { id: 'p1', left: 'Rush', right: 'Ir con prisa' },
        { id: 'p2', left: 'Slide', right: 'Deslizarse' },
        { id: 'p3', left: 'Spin', right: 'Girar rápido' },
        { id: 'p4', left: 'Shake', right: 'Sacudir' },
        { id: 'p5', left: 'Kick', right: 'Patear' }
      ],
      explanation: 'Estos verbos añaden matices a la forma en que nos movemos.'
    } as any
  },
  {
    id: 'a1-u13-e39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Move',
      instructions: 'Di la palabra para "moverse".',
      questions: [
        {
          id: 'q1',
          text: 'Move',
          phonetic: '/muːv/',
          translation: 'Moverse',
          explanation: 'La "o" suena como una "u" larga.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'No te muevas',
      instructions: 'Ordena para decir "Por favor, no te muevas".',
      sentences: [
        {
          id: 's1',
          words: ['move', "don't", 'Please'],
          correctSentence: "Please don't move",
          translation: 'Por favor, no te muevas.',
          hint: 'Empieza con "Please".',
          explanation: 'Usamos "don\'t" para dar órdenes negativas.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Caminar en la calle',
      instructions: '¿Cómo se dice "cruzar"?',
      questions: [
        {
          id: 'q1',
          question: '________ the street carefully.',
          options: ['Cross', 'Walk', 'Stop'],
          correctAnswer: 0,
          explanation: '"Cross" es cruzar de un lado a otro.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Parar / Detenerse',
          back: 'Stop',
          example: 'Stop at the red light.',
          pronunciation: '/stɒp/',
          explanation: '"Stop" es el final del movimiento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Cruzar el puente',
      instructions: 'Escribe la palabra para "cruzar".',
      questions: [
        {
          id: 'q1',
          question: 'We need to ________ the bridge.',
          answer: 'cross',
          explanation: '"Cross" se usa para calles, puentes o fronteras.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Seguir a alguien',
      instructions: '¿Cómo se dice "seguir"?',
      questions: [
        {
          id: 'q1',
          question: 'Please ________ me.',
          options: ['follow', 'lead', 'stay'],
          correctAnswer: 0,
          explanation: '"Follow" es ir detrás de alguien.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e45',
    type: 'matching',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Velocidad y Ritmo',
      instructions: 'Une cada palabra con su significado.',
      pairs: [
        { id: 'p1', left: 'Fast', right: 'Rápido' },
        { id: 'p2', left: 'Slow', right: 'Lento' },
        { id: 'p3', left: 'Quickly', right: 'Rápidamente' },
        { id: 'p4', left: 'Slowly', right: 'Lentamente' },
        { id: 'p5', left: 'Steady', right: 'Constante/Firme' }
      ],
      explanation: 'Estos adverbios y adjetivos describen la cualidad del movimiento.'
    } as any
  },
  {
    id: 'a1-u13-e46',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Follow',
      instructions: 'Di la palabra para "seguir".',
      questions: [
        {
          id: 'q1',
          text: 'Follow',
          phonetic: '/ˈfɒl.əʊ/',
          translation: 'Seguir',
          explanation: 'La acentuación está en la primera sílaba.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Ellos corren rápido',
      instructions: 'Ordena para decir "Ellos corren muy rápido".',
      sentences: [
        {
          id: 's1',
          words: ['fast', 'very', 'run', 'They'],
          correctSentence: 'They run very fast',
          translation: 'Ellos corren muy rápido.',
          hint: 'Empieza con "They".',
          explanation: 'Usamos "very" para intensificar el adjetivo "fast".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'easy',
    content: {
      title: 'Moverse en coche',
      instructions: '¿Cómo se dice "conducir"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a car.',
          options: ['drive', 'ride', 'walk'],
          correctAnswer: 0,
          explanation: '"Drive" se usa para coches, camiones o autobuses.'
        }
      ]
    }
  },
  {
    id: 'a1-u13-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Montar (bici/caballo)',
          back: 'Ride',
          example: 'I ride a bicycle.',
          pronunciation: '/raɪd/',
          explanation: '"Ride" se usa para bicicletas, motos o animales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u13-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Movement',
    topicName: 'Move It!',
    difficulty: 'hard',
    content: {
      title: 'Ir en bicicleta',
      instructions: 'Escribe la palabra para "montar" (bici).',
      questions: [
        {
          id: 'q1',
          question: 'I ________ my bike to the park.',
          answer: 'ride',
          explanation: 'Recuerda: usamos "drive" para coches y "ride" para bicis.'
        }
      ]
    } as any
  }
];
