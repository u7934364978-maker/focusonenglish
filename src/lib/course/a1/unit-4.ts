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
          explanation: '"House" significa casa.'
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
          pronunciation: '/ruːm/'
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
          hint: 'Empieza con "This".'
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
          explanation: '"Kitchen" es cocina.'
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
          explanation: 'La "h" suena como una aspiración suave.'
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
        { id: '3', left: 'Cuarto', right: 'Room' }
      ]
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
      instructions: 'Escribe la palabra que falta para "baño".',
      questions: [
        {
          id: 'q1',
          text: 'The ___ is clean.',
          correctAnswer: 'bathroom',
          explanation: '"Bathroom" significa baño.'
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
          explanation: '"Bedroom" es dormitorio.'
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
          pronunciation: '/ˈlɪvɪŋ ruːm/'
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
          hint: 'Usa "My".'
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
          explanation: '"Garden" es jardín.'
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
          explanation: 'La "ch" suena como "ch" en español.'
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
      title: 'Habitaciones',
      instructions: 'Une las parejas.',
      pairs: [
        { id: '1', left: 'Dormitorio', right: 'Bedroom' },
        { id: '2', left: 'Baño', right: 'Bathroom' },
        { id: '3', left: 'Jardín', right: 'Garden' }
      ]
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
      instructions: 'Escribe la palabra que falta para "salón".',
      questions: [
        {
          id: 'q1',
          text: 'My living ___.',
          correctAnswer: 'room',
          explanation: '"Living room" es salón.'
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
      instructions: '¿Cómo se dice "Esto es"?',
      questions: [
        {
          id: 'q1',
          question: '________ is a table.',
          options: ['This', 'These', 'That'],
          correctAnswer: 0,
          explanation: '"This" se usa para algo cercano en singular.'
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
          pronunciation: '/ˈteɪbl/'
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
          hint: 'Usa "Your".'
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
          explanation: '"Chair" es silla.'
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
          explanation: 'La "th" suena como una "z" suave.'
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
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Mesa', right: 'Table' },
        { id: '2', left: 'Silla', right: 'Chair' },
        { id: '3', left: 'Puerta', right: 'Door' }
      ]
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
          explanation: '"Door" es puerta.'
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
          explanation: '"Bed" es cama.'
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
          pronunciation: '/ˈwɪndoʊ/'
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
          hint: 'Empieza con "This".'
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
          explanation: '"Window" es ventana.'
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
          explanation: 'La "ch" es como en español.'
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
      title: 'Elementos de casa',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Cama', right: 'Bed' },
        { id: '2', left: 'Ventana', right: 'Window' },
        { id: '3', left: 'Pared', right: 'Wall' }
      ]
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
          explanation: '"Wall" es pared.'
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
          explanation: '"Sofa" es igual en inglés y español.'
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
          pronunciation: '/ˈdaɪnɪŋ ruːm/'
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
          hint: 'Usa "This is".'
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
          explanation: '"Dining room" es el comedor.'
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
          explanation: 'La "w" suena como una "u".'
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
      title: 'Zonas comunes',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Salón', right: 'Living room' },
        { id: '2', left: 'Comedor', right: 'Dining room' },
        { id: '3', left: 'Pasillo', right: 'Hallway' }
      ]
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
          explanation: '"Hallway" significa pasillo.'
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
          explanation: '"Key" es llave.'
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
          pronunciation: '/flɔːr/'
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
          hint: 'Empieza con "This".'
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
      instructions: '¿Cuál es la palabra para "techo"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is high.',
          options: ['ceiling', 'floor', 'wall'],
          correctAnswer: 0,
          explanation: '"Ceiling" es el techo interior.'
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
          explanation: 'La "oo" suena como una "o" larga.'
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
      title: 'Estructura',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Suelo', right: 'Floor' },
        { id: '2', left: 'Techo', right: 'Ceiling' },
        { id: '3', left: 'Llave', right: 'Key' }
      ]
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
      title: 'Una llave',
      instructions: 'Escribe la palabra para "llave".',
      questions: [
        {
          id: 'q1',
          text: 'This is a ___.',
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
      title: 'Garaje',
      instructions: '¿Cómo se dice "garaje"?',
      questions: [
        {
          id: 'q1',
          question: 'The car is in the ________.',
          options: ['garage', 'garden', 'kitchen'],
          correctAnswer: 0,
          explanation: '"Garage" es garaje.'
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
          front: 'Escaleras',
          back: 'Stairs',
          example: 'Walk up the stairs.',
          pronunciation: '/steərz/'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Demonstratives',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Este es mi jardín',
      instructions: 'Ordena las palabras correctamente.',
      sentences: [
        {
          id: 's1',
          words: ['garden', 'my', 'is', 'This'],
          correctSentence: 'This is my garden',
          translation: 'Este es mi jardín.',
          hint: 'Empieza con "This".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u4-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Escaleras',
      instructions: '¿Cuál es la palabra para "escaleras"?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ are long.',
          options: ['stairs', 'floor', 'wall'],
          correctAnswer: 0,
          explanation: '"Stairs" significa escaleras.'
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
      title: 'Pronunciación: Garage',
      instructions: 'Di la palabra para "garaje".',
      questions: [
        {
          id: 'q1',
          text: 'Garage',
          correctAnswer: 'Garage',
          explanation: 'La "g" final suena suave.'
        }
      ]
    }
  },
  {
    id: 'a1-u4-e48',
    type: 'matching',
    level: 'A1',
    topic: 'House',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Exteriores',
      instructions: 'Une las palabras.',
      pairs: [
        { id: '1', left: 'Garaje', right: 'Garage' },
        { id: '2', left: 'Escaleras', right: 'Stairs' },
        { id: '3', left: 'Muebles', right: 'Furniture' }
      ]
    } as any
  },
  {
    id: 'a1-u4-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Furniture',
    topicName: 'Home Sweet Home',
    difficulty: 'easy',
    content: {
      title: 'Un sofá',
      instructions: 'Escribe la palabra para "sofá".',
      questions: [
        {
          id: 'q1',
          text: 'This is a ___.',
          correctAnswer: 'sofa',
          explanation: '"Sofa" es sofá.'
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
      title: 'Resumen',
      instructions: '¿Qué significa "This is my house"?',
      questions: [
        {
          id: 'q1',
          question: 'This is my house.',
          options: ['Esta es mi casa', 'Tu casa es grande', 'Mi casa es azul'],
          correctAnswer: 0,
          explanation: '"This is my house" significa esta es mi casa.'
        }
      ]
    }
  }
];
