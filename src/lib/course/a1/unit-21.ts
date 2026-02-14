import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 21: Travel
 */

export const UNIT_21_EXERCISES: Exercise[] = [
  {
    id: 'a1-u21-e1',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'Medios de Transporte',
      instructions: 'Relaciona el medio de transporte con su traducción.',
      pairs: [
        { id: 'p1', left: 'Car', right: 'Coche' },
        { id: 'p2', left: 'Bus', right: 'Autobús' },
        { id: 'p3', left: 'Train', right: 'Tren' },
        { id: 'p4', left: 'Plane', right: 'Avión' },
        { id: 'p5', left: 'Bicycle', right: 'Bicicleta' }
      ],
      explanation: 'Estos son los medios de transporte más comunes para viajar.'
    } as any
  },
  {
    id: 'a1-u21-e2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'Viajar en autobús',
      instructions: '¿Cómo se dice "en autobús"?',
      questions: [
        {
          id: 'q1',
          question: 'I go to work ________ bus.',
          options: ['by', 'in', 'on'],
          correctAnswer: 0,
          explanation: "Usamos la preposición 'by' seguida del medio de transporte para indicar cómo nos desplazamos."
        }
      ]
    }
  },
  {
    id: 'a1-u21-e3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'El avión',
      instructions: 'Escribe la palabra para "avión".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very fast.',
          correctAnswer: 'plane',
          explanation: '"Plane" es la forma corta y común de "airplane".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e4',
    type: 'flashcard',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Tren',
          back: 'Train',
          example: 'I take the train every morning.',
          pronunciation: '/treɪn/',
          explanation: '"Train" es tren. Recuerda la pronunciación de la "ai" como "ei".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'Tengo una bicicleta',
      instructions: 'Ordena las palabras para decir "Yo tengo una bicicleta azul".',
      sentences: [
        {
          id: 's1',
          words: ['bicycle', 'blue', 'a', 'have', 'I'],
          correctSentence: 'I have a blue bicycle',
          translation: 'Yo tengo una bicicleta azul.',
          explanation: 'El adjetivo de color va antes del sustantivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e6',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Bus',
      instructions: 'Di la palabra para "autobús".',
      questions: [
        {
          id: 'q1',
          text: 'Bus',
          phonetic: '/bʌs/',
          translation: 'Autobús',
          explanation: 'La "u" suena corta, similar a una "a" relajada.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e7',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'Lugares de Viaje',
      instructions: 'Relaciona el lugar con su traducción.',
      pairs: [
        { id: 'p1', left: 'Airport', right: 'Aeropuerto' },
        { id: 'p2', left: 'Station', right: 'Estación' },
        { id: 'p3', left: 'Port', right: 'Puerto' },
        { id: 'p4', left: 'Stop', right: 'Parada' },
        { id: 'p5', left: 'Ticket office', right: 'Taquilla' }
      ],
      explanation: 'Lugares esenciales donde tomamos los transportes.'
    } as any
  },
  {
    id: 'a1-u21-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      title: 'En el aeropuerto',
      instructions: '¿Dónde están los aviones?',
      questions: [
        {
          id: 'q1',
          question: 'The planes are at the ________.',
          options: ['airport', 'station', 'port'],
          correctAnswer: 0,
          explanation: '"Airport" es el lugar de salida y llegada de los aviones.'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e9',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'La estación de tren',
      instructions: 'Completa con la palabra para "estación".',
      questions: [
        {
          id: 'q1',
          question: 'I am at the train ________.',
          correctAnswer: 'station',
          explanation: '"Train station" es la estación de ferrocarril.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e10',
    type: 'flashcard',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Billete / Boleto',
          back: 'Ticket',
          example: 'I have my ticket.',
          pronunciation: '/ˈtɪkɪt/',
          explanation: '"Ticket" es necesario para viajar en transporte público.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e11',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Comprar un billete',
      instructions: 'Ordena para decir "Yo necesito un billete".',
      sentences: [
        {
          id: 's1',
          words: ['ticket', 'a', 'need', 'I'],
          correctSentence: 'I need a ticket',
          translation: 'Yo necesito un billete.',
          explanation: 'Verbo "need" (necesitar) + objeto.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e12',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Acciones de Viaje',
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: 'Travel', right: 'Viajar' },
        { id: 'p2', left: 'Take', right: 'Tomar/Coger' },
        { id: 'p3', left: 'Go', right: 'Ir' },
        { id: 'p4', left: 'Wait', right: 'Esperar' },
        { id: 'p5', left: 'Arrive', right: 'Llegar' }
      ],
      explanation: 'Verbos fundamentales para hablar de tus viajes.'
    } as any
  },
  {
    id: 'a1-u21-e13',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Tomar el autobús',
      instructions: '¿Cómo se dice "Cojo el autobús"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ the bus at 8:00.',
          options: ['take', 'go', 'travel'],
          correctAnswer: 0,
          explanation: "Usamos el verbo 'take' para indicar que cogemos un transporte público."
        }
      ]
    }
  },
  {
    id: 'a1-u21-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Llegar a tiempo',
      instructions: 'Escribe la palabra para "llegar".',
      questions: [
        {
          id: 'q1',
          question: 'We ________ at the station.',
          correctAnswer: 'arrive',
          explanation: '"Arrive" significa llegar a un destino.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e15',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Arrive',
      instructions: 'Di la palabra para "llegar".',
      questions: [
        {
          id: 'q1',
          text: 'Arrive',
          phonetic: '/əˈraɪv/',
          translation: 'Llegar',
          explanation: 'La segunda sílaba es la que tiene la fuerza.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e16',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Más Transportes',
      instructions: 'Relaciona estos otros medios de transporte.',
      pairs: [
        { id: 'p1', left: 'Subway', right: 'Metro' },
        { id: 'p2', left: 'Taxi', right: 'Taxi' },
        { id: 'p3', left: 'Motorcycle', right: 'Motocicleta' },
        { id: 'p4', left: 'Ship', right: 'Barco (grande)' },
        { id: 'p5', left: 'Boat', right: 'Bote / Barco pequeño' }
      ],
      explanation: 'Diferentes formas de moverse por la ciudad o el mar.'
    } as any
  },
  {
    id: 'a1-u21-e17',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'En el metro',
      instructions: 'I go to the city by ________.',
      questions: [
        {
          id: 'q1',
          question: 'I go to the city by ________.',
          options: ['subway', 'bicycle', 'ship'],
          correctAnswer: 0,
          explanation: '"Subway" es el término americano para el metro (underground en UK).'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e18',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'El taxi',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          question: 'Please call a ________.',
          correctAnswer: 'taxi',
          explanation: '"Taxi" es igual en español e inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e19',
    type: 'flashcard',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Motocicleta',
          back: 'Motorcycle',
          example: 'He rides a motorcycle.',
          pronunciation: '/ˈmoʊtərsaɪkl/',
          explanation: 'También se puede decir de forma corta "motorbike".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Viajar en barco',
      instructions: 'Ordena para decir "Nosotros viajamos en un barco grande".',
      sentences: [
        {
          id: 's1',
          words: ['ship', 'big', 'a', 'by', 'travel', 'We'],
          correctSentence: 'We travel by a big ship',
          translation: 'Nosotros viajamos en un barco grande.',
          explanation: "Adjetivo 'big' antes de 'ship'."
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e21',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Objetos de Viaje',
      instructions: 'Relaciona el objeto.',
      pairs: [
        { id: 'p1', left: 'Suitcase', right: 'Maleta' },
        { id: 'p2', left: 'Passport', right: 'Pasaporte' },
        { id: 'p3', left: 'Map', right: 'Mapa' },
        { id: 'p4', left: 'Backpack', right: 'Mochila' },
        { id: 'p5', left: 'Money', right: 'Dinero' }
      ],
      explanation: 'Cosas necesarias que llevamos al viajar.'
    } as any
  },
  {
    id: 'a1-u21-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'El pasaporte',
      instructions: '¿Qué necesitas para viajar a otro país?',
      questions: [
        {
          id: 'q1',
          question: 'I need my ________ to travel.',
          options: ['passport', 'bicycle', 'map'],
          correctAnswer: 0,
          explanation: '"Passport" es el documento de identidad internacional.'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'La maleta',
      instructions: 'Escribe la palabra para "maleta".',
      questions: [
        {
          id: 'q1',
          question: 'Where is my ________?',
          correctAnswer: 'suitcase',
          explanation: '"Suitcase" es donde guardamos la ropa para el viaje.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e24',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Suitcase',
      instructions: 'Di la palabra para "maleta".',
      questions: [
        {
          id: 'q1',
          text: 'Suitcase',
          phonetic: '/ˈsuːtkeɪs/',
          translation: 'Maleta',
          explanation: 'La "ui" suena como una "u" larga.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e25',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Adjetivos de Viaje',
      instructions: 'Relaciona el adjetivo.',
      pairs: [
        { id: 'p1', left: 'Fast', right: 'Rápido' },
        { id: 'p2', left: 'Slow', right: 'Lento' },
        { id: 'p3', left: 'Cheap', right: 'Barato' },
        { id: 'p4', left: 'Expensive', right: 'Caro' },
        { id: 'p5', left: 'Safe', right: 'Seguro' }
      ],
      explanation: 'Palabras para describir cómo es el viaje o el transporte.'
    } as any
  },
  {
    id: 'a1-u21-e26',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Transporte caro',
      instructions: 'The taxi is ________.',
      questions: [
        {
          id: 'q1',
          question: 'The taxi is ________.',
          options: ['expensive', 'cheap', 'slow'],
          correctAnswer: 0,
          explanation: '"Expensive" significa que cuesta mucho dinero.'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Transporte rápido',
      instructions: 'El avión es muy rápido.',
      questions: [
        {
          id: 'q1',
          question: 'The plane is very ________.',
          correctAnswer: 'fast',
          explanation: '"Fast" es rápido.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e28',
    type: 'flashcard',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Seguro',
          back: 'Safe',
          example: 'Flying is very safe.',
          pronunciation: '/seɪf/',
          explanation: '"Safe" significa que no hay peligro.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e29',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Billetes baratos',
      instructions: 'Ordena para decir "Los billetes de tren son baratos".',
      sentences: [
        {
          id: 's1',
          words: ['cheap', 'are', 'tickets', 'train', 'The'],
          correctSentence: 'The train tickets are cheap',
          translation: 'Los billetes de tren son baratos.',
          explanation: 'Estructura plural con el adjetivo al final.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e30',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Preguntas de Viaje',
      instructions: 'Relaciona la pregunta con su traducción.',
      pairs: [
        { id: 'p1', left: 'Where is the station?', right: '¿Dónde está la estación?' },
        { id: 'p2', left: 'How much is the ticket?', right: '¿Cuánto cuesta el billete?' },
        { id: 'p3', left: 'What time is the bus?', right: '¿A qué hora es el autobús?' },
        { id: 'p4', left: 'Is it far?', right: '¿Está lejos?' },
        { id: 'p5', left: 'Where are you going?', right: '¿A dónde vas?' }
      ],
      explanation: 'Preguntas esenciales para sobrevivir en un viaje.'
    } as any
  },
  {
    id: 'a1-u21-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Precio del billete',
      instructions: '¿Cómo preguntarías el precio?',
      questions: [
        {
          id: 'q1',
          question: '________ much is the ticket?',
          options: ['How', 'What', 'Where'],
          correctAnswer: 0,
          explanation: "Usamos 'How much' para preguntar por precios."
        }
      ]
    }
  },
  {
    id: 'a1-u21-e32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Ubicación de la estación',
      instructions: 'Escribe la palabra para "¿Dónde?".',
      questions: [
        {
          id: 'q1',
          question: '________ is the train station?',
          correctAnswer: 'Where',
          explanation: '"Where" se usa para preguntar por lugares.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Ticket',
      instructions: 'Di la palabra para "billete".',
      questions: [
        {
          id: 'q1',
          text: 'Ticket',
          phonetic: '/ˈtɪkɪt/',
          translation: 'Billete',
          explanation: 'La "i" suena corta y la "t" final es clara.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Tipos de Viaje',
      instructions: 'Relaciona el tipo de viaje.',
      pairs: [
        { id: 'p1', left: 'Trip', right: 'Viaje (corto/específico)' },
        { id: 'p2', left: 'Journey', right: 'Trayecto / Viaje largo' },
        { id: 'p3', left: 'Vacation', right: 'Vacaciones (US)' },
        { id: 'p4', left: 'Holiday', right: 'Vacaciones (UK)' },
        { id: 'p5', left: 'Tour', right: 'Recorrido / Tour' }
      ],
      explanation: 'Diferentes matices para la palabra "viaje".'
    } as any
  },
  {
    id: 'a1-u21-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Vacaciones',
      instructions: 'I am on ________.',
      questions: [
        {
          id: 'q1',
          question: 'I am on ________.',
          options: ['vacation', 'work', 'car'],
          correctAnswer: 0,
          explanation: '"Vacation" es el tiempo de descanso.'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e36',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Buen viaje',
      instructions: 'Completa: Ten un buen viaje.',
      questions: [
        {
          id: 'q1',
          question: 'Have a nice ________!',
          correctAnswer: 'trip',
          explanation: '"Have a nice trip" es la expresión estándar para desear buen viaje.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Trayecto / Viaje largo',
          back: 'Journey',
          example: 'The journey takes five hours.',
          pronunciation: '/ˈdʒɜːrni/',
          explanation: '"Journey" se enfoca en el trayecto de un punto a otro.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Viaje largo',
      instructions: 'Ordena para decir "Es un viaje largo".',
      sentences: [
        {
          id: 's1',
          words: ['journey', 'long', 'a', 'is', 'It'],
          correctSentence: 'It is a long journey',
          translation: 'Es un viaje largo.',
          explanation: '"Long" (largo) antes del sustantivo.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e39',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Direcciones Básicas',
      instructions: 'Relaciona la dirección.',
      pairs: [
        { id: 'p1', left: 'Left', right: 'Izquierda' },
        { id: 'p2', left: 'Right', right: 'Derecha' },
        { id: 'p3', left: 'Straight', right: 'Recto' },
        { id: 'p4', left: 'Stop', right: 'Parar' },
        { id: 'p5', left: 'Turn', right: 'Girar' }
      ],
      explanation: 'Instrucciones útiles para llegar a tu transporte.'
    } as any
  },
  {
    id: 'a1-u21-e40',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Girar a la izquierda',
      instructions: '¿Cómo se dice "Gira a la izquierda"?',
      questions: [
        {
          id: 'q1',
          question: '________ left.',
          options: ['Turn', 'Stop', 'Go'],
          correctAnswer: 0,
          explanation: '"Turn left" es la instrucción para girar a la izquierda.'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Todo recto',
      instructions: 'Escribe la palabra para "recto".',
      questions: [
        {
          id: 'q1',
          question: 'Go ________ ahead.',
          correctAnswer: 'straight',
          explanation: '"Straight" significa sin desviarse.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e42',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Right',
      instructions: 'Di la palabra para "derecha".',
      questions: [
        {
          id: 'q1',
          text: 'Right',
          phonetic: '/raɪt/',
          translation: 'Derecha',
          explanation: 'La "gh" es muda.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e43',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Repaso de Transportes y Lugares',
      instructions: 'Une el transporte con su lugar correspondiente.',
      pairs: [
        { id: 'p1', left: 'Plane', right: 'Airport' },
        { id: 'p2', left: 'Train', right: 'Station' },
        { id: 'p3', left: 'Bus', right: 'Stop' },
        { id: 'p4', left: 'Ship', right: 'Port' },
        { id: 'p5', left: 'Car', right: 'Parking' }
      ],
      explanation: 'Relación lógica entre vehículos y sus terminales.'
    } as any
  },
  {
    id: 'a1-u21-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Ir a pie',
      instructions: '¿Cómo se dice "ir a pie"?',
      questions: [
        {
          id: 'q1',
          question: 'I go ________ foot.',
          options: ['on', 'by', 'at'],
          correctAnswer: 0,
          explanation: "Atención: Para todos los transportes usamos 'by', pero para caminar usamos 'on foot'."
        }
      ]
    }
  },
  {
    id: 'a1-u21-e45',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'En coche',
      instructions: 'Completa: Voy en coche.',
      questions: [
        {
          id: 'q1',
          question: 'I go ________ car.',
          correctAnswer: 'by',
          explanation: "Regla general: 'by' + medio de transporte."
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e46',
    type: 'flashcard',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      items: [
        {
          front: 'A pie',
          back: 'On foot',
          example: 'I go to school on foot.',
          pronunciation: '/ɒn fʊt/',
          explanation: 'Es la única excepción a la regla del "by" en transportes.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Aeropuerto lejos',
      instructions: 'Ordena para decir "El aeropuerto está lejos".',
      sentences: [
        {
          id: 's1',
          words: ['far', 'is', 'airport', 'The'],
          correctSentence: 'The airport is far',
          translation: 'El aeropuerto está lejos.',
          explanation: '"Far" significa a gran distancia.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Llegada del tren',
      instructions: '¿A qué hora llega el tren?',
      questions: [
        {
          id: 'q1',
          question: 'What time does the train ________?',
          options: ['arrive', 'travel', 'go'],
          correctAnswer: 0,
          explanation: '"Arrive" es el verbo correcto para preguntar por la llegada.'
        }
      ]
    }
  },
  {
    id: 'a1-u21-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Tomar un taxi',
      instructions: 'Tomemos un taxi.',
      questions: [
        {
          id: 'q1',
          question: "Let's ________ a taxi.",
          correctAnswer: 'take',
          explanation: "Usamos 'take' para usar un taxi."
        }
      ]
    } as any
  },
  {
    id: 'a1-u21-e50',
    type: 'matching',
    level: 'A1',
    topic: 'Travel',
    topicName: "Let's Travel",
    difficulty: 'hard',
    content: {
      title: 'Repaso Final de Vocabulario',
      instructions: 'Relaciona los términos finales.',
      pairs: [
        { id: 'p1', left: 'Ticket', right: 'Billete' },
        { id: 'p2', left: 'Suitcase', right: 'Maleta' },
        { id: 'p3', left: 'Passport', right: 'Pasaporte' },
        { id: 'p4', left: 'Trip', right: 'Viaje' },
        { id: 'p5', left: 'Arrive', right: 'Llegar' }
      ],
      explanation: 'Resumen del vocabulario clave para tus futuros viajes.'
    } as any
  }
];
