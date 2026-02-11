import { Exercise } from '@/lib/exercise-generator';

export const UNIT_4_EXERCISES: Exercise[] = [
  {
    id: 'a1-u4-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Mi casa',
      instructions: '¿Cómo se dice "casa" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'This is my ________.',
          options: ['house', 'room', 'garden'],
          correctAnswer: 0,
          explanation: '"House" es la palabra estándar para referirse a la construcción física de una casa.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Habitación / Cuarto',
          back: 'Room',
          example: 'This is my room.',
          pronunciation: '/ruːm/',
          explanation: '"Room" se utiliza para cualquier habitación de la casa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Demonstratives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Esta es...',
      instructions: 'Ordena las palabras para traducir "Esta es mi casa".',
      sentences: [
        {
          id: 's1',
          words: ['house', 'is', 'my', 'This'],
          correctSentence: 'This is my house',
          translation: 'Esta es mi casa.',
          hint: 'Empieza con "This".',
          explanation: '"This is" se utiliza para presentar algo que está cerca de nosotros.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'La cocina',
      instructions: '¿Cuál es la palabra para "cocina"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is big.',
          options: ['bathroom', 'kitchen', 'bedroom'],
          correctAnswer: 1,
          explanation: '"Kitchen" significa cocina. ¡No la confundas con "chicken" (pollo)!'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: House',
      instructions: 'Di la palabra para "casa".',
      questions: [
        {
          id: 'q1',
          text: 'House',
          correctAnswer: 'House',
          explanation: 'La "h" inicial se pronuncia aspirando aire, como si empañaras un cristal.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Partes de la casa',
      instructions: 'Une el español con el inglés.',
      pairs: [
        { id: '1', left: 'Casa', right: 'House' },
        { id: '2', left: 'Cocina', right: 'Kitchen' },
        { id: '3', left: 'Cuarto', right: 'Room' },
        { id: '4', left: 'Jardín', right: 'Garden' },
        { id: '5', left: 'Baño', right: 'Bathroom' }
      ],
      explanation: 'Conocer las partes básicas de la casa te ayudará a orientarte y describir dónde estás.'
    } as any
  },
  {
    id: 'a1-u4-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'El baño',
      instructions: 'Escribe la palabra para "baño".',
      questions: [
        {
          id: 'q1',
          text: 'The ___ is clean.',
          correctAnswer: 'bathroom',
          explanation: '"Bathroom" se compone de "bath" (baño/bañera) y "room" (habitación).'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'El dormitorio',
      instructions: '¿Cómo se dice "dormitorio"?',
      questions: [
        {
          id: 'q1',
          question: 'I am in my ________.',
          options: ['kitchen', 'bedroom', 'garden'],
          correctAnswer: 1,
          explanation: '"Bedroom" viene de "bed" (cama) y "room" (habitación).'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Salón / Sala de estar',
          back: 'Living room',
          example: 'My living room is small.',
          pronunciation: '/ˈlɪvɪŋ ruːm/',
          explanation: 'Es el lugar donde se hace la vida (living) común en la casa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Mi dormitorio',
      instructions: 'Ordena para traducir "Mi dormitorio".',
      sentences: [
        {
          id: 's1',
          words: ['bedroom', 'My'],
          correctSentence: 'My bedroom',
          translation: 'Mi dormitorio.',
          hint: 'Usa "My".',
          explanation: 'La estructura Posesivo + Sustantivo es directa en este caso.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'El jardín',
      instructions: '¿Cuál es la palabra para "jardín"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is green.',
          options: ['garden', 'kitchen', 'house'],
          correctAnswer: 0,
          explanation: '"Garden" es jardín. Si es muy grande, a veces se le llama "yard" en EE.UU.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Kitchen',
      instructions: 'Di la palabra para "cocina".',
      questions: [
        {
          id: 'q1',
          text: 'Kitchen',
          correctAnswer: 'Kitchen',
          explanation: 'Asegúrate de marcar bien la "t" silenciosa y la "ch" final.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Habitaciones principales',
      instructions: 'Une cada habitación con su nombre en inglés.',
      pairs: [
        { id: '1', left: 'Dormitorio', right: 'Bedroom' },
        { id: '2', left: 'Baño', right: 'Bathroom' },
        { id: '3', left: 'Jardín', right: 'Garden' },
        { id: '4', left: 'Salón', right: 'Living room' },
        { id: '5', left: 'Garaje', right: 'Garage' }
      ],
      explanation: 'Dominar estos nombres te permitirá describir cualquier vivienda.'
    } as any
  },
  {
    id: 'a1-u4-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Mi salón',
      instructions: 'Escribe la palabra para "habitación" que completa "salón".',
      questions: [
        {
          id: 'q1',
          text: 'My living ___.',
          correctAnswer: 'room',
          explanation: '"Living room" es la expresión completa para salón.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Demonstratives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Esto es...',
      instructions: '¿Cómo se dice "Esto es" para algo cercano?',
      questions: [
        {
          id: 'q1',
          question: '________ is a table.',
          options: ['This', 'These', 'That'],
          correctAnswer: 0,
          explanation: '"This" se usa para un solo objeto que puedes tocar o que está muy cerca.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Mesa',
          back: 'Table',
          example: 'This is a table.',
          pronunciation: '/ˈteɪbl/',
          explanation: 'Se pronuncia /ˈteɪ.bəl/, la "e" final es muda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Tu cocina',
      instructions: 'Ordena para traducir "Tu cocina".',
      sentences: [
        {
          id: 's1',
          words: ['kitchen', 'Your'],
          correctSentence: 'Your kitchen',
          translation: 'Tu cocina.',
          hint: 'Usa "Your".',
          explanation: 'Recuerda que "Your" es el posesivo para "tú".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Silla',
      instructions: '¿Cómo se dice "silla"?',
      questions: [
        {
          id: 'q1',
          question: 'A ________ in the room.',
          options: ['chair', 'table', 'door'],
          correctAnswer: 0,
          explanation: '"Chair" es silla. La "ch" suena fuerte.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Bathroom',
      instructions: 'Di la palabra para "baño".',
      questions: [
        {
          id: 'q1',
          text: 'Bathroom',
          correctAnswer: 'Bathroom',
          explanation: 'La "th" se pronuncia colocando la punta de la lengua entre los dientes delanteros.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Muebles básicos',
      instructions: 'Une cada mueble con su nombre en inglés.',
      pairs: [
        { id: '1', left: 'Mesa', right: 'Table' },
        { id: '2', left: 'Silla', right: 'Chair' },
        { id: '3', left: 'Puerta', right: 'Door' },
        { id: '4', left: 'Sofá', right: 'Sofa' },
        { id: '5', left: 'Cama', right: 'Bed' }
      ],
      explanation: 'Estos son los objetos más comunes que encontrarás en cualquier habitación.'
    } as any
  },
  {
    id: 'a1-u4-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Una puerta',
      instructions: 'Escribe la palabra para "puerta".',
      questions: [
        {
          id: 'q1',
          text: 'This is a ___.',
          correctAnswer: 'door',
          explanation: '"Door" se pronuncia casi como "dor" en español, pero más abierta.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Cama',
      instructions: '¿Cuál es la palabra para "cama"?',
      questions: [
        {
          id: 'q1',
          question: 'A big ________.',
          options: ['bed', 'bath', 'box'],
          correctAnswer: 0,
          explanation: '"Bed" es cama. Corta y simple.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ventana',
          back: 'Window',
          example: 'Open the window.',
          pronunciation: '/ˈwɪndoʊ/',
          explanation: '"Window" literalmente significa "ojo del viento" en su origen etimológico.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Una mesa',
      instructions: 'Ordena para decir "Esto es una mesa".',
      sentences: [
        {
          id: 's1',
          words: ['table', 'a', 'is', 'This'],
          correctSentence: 'This is a table',
          translation: 'Esto es una mesa.',
          hint: 'Empieza con "This".',
          explanation: 'Mantenemos la estructura: Sujeto + Verbo + Complemento.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'La ventana',
      instructions: '¿Cómo se dice "ventana"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is open.',
          options: ['window', 'door', 'wall'],
          correctAnswer: 0,
          explanation: '"Window" es la traducción correcta.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Chair',
      instructions: 'Di la palabra para "silla".',
      questions: [
        {
          id: 'q1',
          text: 'Chair',
          correctAnswer: 'Chair',
          explanation: 'La "ch" suena como "ch" en chocolate, y la "air" como el aire que respiras.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e27',
    type: 'matching',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Elementos estructurales',
      instructions: 'Une cada elemento con su nombre en inglés.',
      pairs: [
        { id: '1', left: 'Cama', right: 'Bed' },
        { id: '2', left: 'Ventana', right: 'Window' },
        { id: '3', left: 'Pared', right: 'Wall' },
        { id: '4', left: 'Suelo', right: 'Floor' },
        { id: '5', left: 'Techo', right: 'Ceiling' }
      ],
      explanation: 'Estos términos describen la estructura misma de cualquier habitación.'
    } as any
  },
  {
    id: 'a1-u4-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'La pared',
      instructions: 'Escribe la palabra para "pared".',
      questions: [
        {
          id: 'q1',
          text: 'The ___ is white.',
          correctAnswer: 'wall',
          explanation: '"Wall" es pared. Se pronuncia casi como "uol".'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Sofá',
      instructions: '¿Cómo se dice "sofá"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is comfortable.',
          options: ['sofa', 'chair', 'table'],
          correctAnswer: 0,
          explanation: '"Sofa" es una palabra universal que entenderán en cualquier sitio.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Comedor',
          back: 'Dining room',
          example: 'The dining room is here.',
          pronunciation: '/ˈdaɪnɪŋ ruːm/',
          explanation: '"Dining" viene del verbo "dine" (cenar/comer formalmente).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Una silla',
      instructions: 'Ordena para decir "Esto es una silla".',
      sentences: [
        {
          id: 's1',
          words: ['chair', 'a', 'is', 'This'],
          correctSentence: 'This is a chair',
          translation: 'Esto es una silla.',
          hint: 'Usa "This is".',
          explanation: '"A" se usa antes de palabras que empiezan con sonido de consonante (como chair).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'El comedor',
      instructions: '¿Cuál es el "comedor"?',
      questions: [
        {
          id: 'q1',
          question: 'Eat in the ________.',
          options: ['dining room', 'bedroom', 'bathroom'],
          correctAnswer: 0,
          explanation: '"Dining room" es el lugar específico para comer.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Window',
      instructions: 'Di la palabra para "ventana".',
      questions: [
        {
          id: 'q1',
          text: 'Window',
          correctAnswer: 'Window',
          explanation: 'La primera sílaba "win" se marca más que la segunda "dow".'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Rooms',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Zonas comunes y extras',
      instructions: 'Une cada zona con su traducción.',
      pairs: [
        { id: '1', left: 'Salón', right: 'Living room' },
        { id: '2', left: 'Comedor', right: 'Dining room' },
        { id: '3', left: 'Pasillo', right: 'Hallway' },
        { id: '4', left: 'Entrada', right: 'Entrance' },
        { id: '5', left: 'Escaleras', right: 'Stairs' }
      ],
      explanation: 'Estas palabras te ayudarán a dar direcciones dentro de una casa.'
    } as any
  },
  {
    id: 'a1-u4-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'El pasillo',
      instructions: 'Escribe la palabra para "pasillo".',
      questions: [
        {
          id: 'q1',
          text: 'The ___ is long.',
          correctAnswer: 'hallway',
          explanation: '"Hallway" es el corredor o pasillo de la casa.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Llave',
      instructions: '¿Cómo se dice "llave"?',
      questions: [
        {
          id: 'q1',
          question: 'Where is my ________?',
          options: ['key', 'door', 'lock'],
          correctAnswer: 0,
          explanation: '"Key" es llave. Se pronuncia como la letra "K".'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Suelo',
          back: 'Floor',
          example: 'The floor is clean.',
          pronunciation: '/flɔːr/',
          explanation: 'También se usa "floor" para referirse a la planta o piso de un edificio (1st floor, 2nd floor).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Demonstratives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Mi cuarto',
      instructions: 'Ordena para decir "Este es mi cuarto".',
      sentences: [
        {
          id: 's1',
          words: ['room', 'my', 'is', 'This'],
          correctSentence: 'This is my room',
          translation: 'Este es mi cuarto.',
          hint: 'Empieza con "This".',
          explanation: 'Usamos "This is" para señalar nuestra propia habitación.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Techo',
      instructions: '¿Cuál es la palabra para "techo" (interior)?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is high.',
          options: ['ceiling', 'floor', 'wall'],
          correctAnswer: 0,
          explanation: '"Ceiling" es el techo que ves desde dentro. El exterior se llama "roof".'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Floor',
      instructions: 'Di la palabra para "suelo".',
      questions: [
        {
          id: 'q1',
          text: 'Floor',
          correctAnswer: 'Floor',
          explanation: 'La "fl" es suave y la "o" es alargada.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e41',
    type: 'matching',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Objetos y partes finales',
      instructions: 'Une cada objeto con su nombre en inglés.',
      pairs: [
        { id: '1', left: 'Llave', right: 'Key' },
        { id: '2', left: 'Suelo', right: 'Floor' },
        { id: '3', left: 'Techo', right: 'Ceiling' },
        { id: '4', left: 'Lámpara', right: 'Lamp' },
        { id: '5', left: 'Espejo', right: 'Mirror' }
      ],
      explanation: 'Detalles finales para completar tu descripción de una casa.'
    } as any
  },
  {
    id: 'a1-u4-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'La llave',
      instructions: 'Escribe la palabra para "llave".',
      questions: [
        {
          id: 'q1',
          text: 'I have the ___.',
          correctAnswer: 'key',
          explanation: '"Key" es llave.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Lámpara',
      instructions: '¿Cómo se dice "lámpara"?',
      questions: [
        {
          id: 'q1',
          question: 'A small ________.',
          options: ['lamp', 'light', 'bulb'],
          correctAnswer: 0,
          explanation: '"Lamp" es lámpara. Muy parecida al español.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Espejo',
          back: 'Mirror',
          example: 'I see a mirror.',
          pronunciation: '/ˈmɪrər/',
          explanation: 'Se pronuncia /ˈmɪr.ər/.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Mi cocina es grande',
      instructions: 'Ordena para traducir "Mi cocina es grande".',
      sentences: [
        {
          id: 's1',
          words: ['big', 'is', 'kitchen', 'My'],
          correctSentence: 'My kitchen is big',
          translation: 'Mi cocina es grande.',
          hint: 'Usa "is big".',
          explanation: 'Estructura: Sujeto + Verbo "to be" + Adjetivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Grande o pequeño',
      instructions: '¿Qué significa "small"?',
      questions: [
        {
          id: 'q1',
          question: 'The room is ________.',
          options: ['small', 'big', 'new'],
          correctAnswer: 0,
          explanation: '"Small" significa pequeño.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Mirror',
      instructions: 'Di la palabra para "espejo".',
      questions: [
        {
          id: 'q1',
          text: 'Mirror',
          correctAnswer: 'Mirror',
          explanation: 'Las "r" en inglés son más suaves y no vibran como en español.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Describiendo la casa',
      instructions: 'Une cada adjetivo con su significado.',
      pairs: [
        { id: '1', left: 'Big', right: 'Grande' },
        { id: '2', left: 'Small', right: 'Pequeño' },
        { id: '3', left: 'Clean', right: 'Limpio' },
        { id: '4', left: 'New', right: 'Nuevo' },
        { id: '5', left: 'Old', right: 'Viejo' }
      ],
      explanation: 'Estos adjetivos te permiten dar más detalles sobre cómo es una casa.'
    } as any
  },
  {
    id: 'a1-u4-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Adjectives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Limpio',
      instructions: 'Escribe la palabra para "limpio".',
      questions: [
        {
          id: 'q1',
          text: 'The house is ___ish.',
          correctAnswer: 'clean',
          explanation: '"Clean" significa limpio. (Nota: ignoramos el sufijo -ish por ahora).'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Resumen de casa',
      instructions: '¿Dónde duermes?',
      questions: [
        {
          id: 'q1',
          question: 'I sleep in the ________.',
          options: ['bedroom', 'kitchen', 'bathroom'],
          correctAnswer: 0,
          explanation: '"Bedroom" es el lugar destinado al descanso.'
        }
      ]
    }
  }
];
