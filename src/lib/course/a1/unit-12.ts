import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 12: City
 */

export const UNIT_12_EXERCISES: Exercise[] = [
  {
    id: 'a1-u12-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Voy al banco',
      instructions: '¿Cómo se dice "banco" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I go to the ________.',
          options: ['bank', 'park', 'school'],
          correctAnswer: 0,
          explanation: '"Bank" es banco. Es una palabra muy similar al español.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Parque',
          back: 'Park',
          example: 'I run in the park.',
          pronunciation: '/pɑːk/',
          explanation: '"Park" es un espacio verde en la ciudad.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'El parque es grande',
      instructions: 'Ordena las palabras para decir "El parque es grande".',
      sentences: [
        {
          id: 's1',
          words: ['big', 'is', 'park', 'The'],
          correctSentence: 'The park is big',
          translation: 'El parque es grande.',
          hint: 'Empieza con "The".',
          explanation: 'Usamos "The" para referirnos a un objeto específico.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e4',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Lugares de la Ciudad',
      instructions: 'Une cada lugar con su traducción.',
      pairs: [
        { id: 'p1', left: 'Supermarket', right: 'Supermercado' },
        { id: 'p2', left: 'Hospital', right: 'Hospital' },
        { id: 'p3', left: 'Cinema', right: 'Cine' },
        { id: 'p4', left: 'Library', right: 'Biblioteca' },
        { id: 'p5', left: 'Museum', right: 'Museo' }
      ],
      explanation: 'Estos son los edificios más importantes de una ciudad.'
    } as any
  },
  {
    id: 'a1-u12-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Supermarket',
      instructions: 'Di la palabra para "supermercado".',
      questions: [
        {
          id: 'q1',
          text: 'Supermarket',
          phonetic: '/ˈsuː.pəˌmɑː.kɪt/',
          translation: 'Supermercado',
          explanation: 'La acentuación principal está en la primera sílaba: SU-per-market.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Comprar comida',
      instructions: 'Completa con la palabra para "supermercado".',
      questions: [
        {
          id: 'q1',
          question: 'I buy food at the ________.',
          answer: 'supermarket',
          explanation: 'El supermercado es donde compramos alimentos y víveres.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Ver películas',
      instructions: '¿A dónde vas para ver una película?',
      questions: [
        {
          id: 'q1',
          question: 'I watch movies at the ________.',
          options: ['cinema', 'bank', 'park'],
          correctAnswer: 0,
          explanation: '"Cinema" o "Movie theater" es el lugar para ver películas.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e8',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: '¿Dónde está el cine?',
      instructions: 'Ordena para preguntar "¿Dónde está el cine?".',
      sentences: [
        {
          id: 's1',
          words: ['cinema', 'the', 'is', 'Where'],
          correctSentence: 'Where is the cinema',
          translation: '¿Dónde está el cine?',
          hint: 'Empieza con "Where".',
          explanation: 'Usamos "Where is" para preguntar por la ubicación de un lugar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Biblioteca',
          back: 'Library',
          example: 'I read books in the library.',
          pronunciation: '/ˈlaɪ.brər.i/',
          explanation: '¡Cuidado! "Library" no es librería (tienda de libros), es biblioteca.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e10',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Librería vs Biblioteca',
      instructions: '¿Cómo se dice "librería" (tienda donde compras libros)?',
      questions: [
        {
          id: 'q1',
          question: 'I buy books at the ________.',
          options: ['bookstore', 'library', 'school'],
          correctAnswer: 0,
          explanation: '"Bookstore" o "Bookshop" es donde compras libros. "Library" es donde los pides prestados.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Leer en silencio',
      instructions: 'Escribe la palabra para "biblioteca".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is very quiet.',
          answer: 'library',
          explanation: '"Library" es un falso amigo; se parece a "librería" pero significa biblioteca.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e12',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Edificios Públicos',
      instructions: 'Relaciona cada edificio con su función.',
      pairs: [
        { id: 'p1', left: 'Post office', right: 'Enviar cartas' },
        { id: 'p2', left: 'City hall', right: 'Gobierno local' },
        { id: 'p3', left: 'Police station', right: 'Seguridad' },
        { id: 'p4', left: 'Fire station', right: 'Emergencias' },
        { id: 'p5', left: 'Airport', right: 'Viajar en avión' }
      ],
      explanation: 'Conocer los edificios públicos es esencial para orientarse en cualquier ciudad.'
    } as any
  },
  {
    id: 'a1-u12-e13',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Museum',
      instructions: 'Di la palabra para "museo".',
      questions: [
        {
          id: 'q1',
          text: 'Museum',
          phonetic: '/mjuːˈziː.əm/',
          translation: 'Museo',
          explanation: 'La acentuación recae en la segunda sílaba: mu-SE-um.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'La calle es larga',
      instructions: 'Ordena las palabras para decir "La calle es larga".',
      sentences: [
        {
          id: 's1',
          words: ['long', 'is', 'street', 'The'],
          correctSentence: 'The street is long',
          translation: 'La calle es larga.',
          hint: 'Empieza con "The".',
          explanation: '"Street" es calle. Usamos adjetivos después de "is".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Cruzar la calle',
      instructions: '¿Dónde cruzas la calle de forma segura?',
      questions: [
        {
          id: 'q1',
          question: 'Use the ________ to cross.',
          options: ['crosswalk', 'bridge', 'river'],
          correctAnswer: 0,
          explanation: '"Crosswalk" (EE.UU.) o "Zebra crossing" (RU) es el paso de cebra.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Puente',
          back: 'Bridge',
          example: 'The bridge is over the river.',
          pronunciation: '/brɪdʒ/',
          explanation: '"Bridge" sirve para cruzar ríos o carreteras.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e17',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Cruzar el río',
      instructions: 'Escribe la palabra para "puente".',
      questions: [
        {
          id: 'q1',
          question: 'Look at that old ________.',
          answer: 'bridge',
          explanation: '"Bridge" se pronuncia con una "j" suave al final.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e18',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Transporte Urbano',
      instructions: 'Une cada lugar con el transporte correspondiente.',
      pairs: [
        { id: 'p1', left: 'Bus station', right: 'Autobús' },
        { id: 'p2', left: 'Train station', right: 'Tren' },
        { id: 'p3', left: 'Subway station', right: 'Metro' },
        { id: 'p4', left: 'Taxi stand', right: 'Taxi' },
        { id: 'p5', left: 'Parking lot', right: 'Coche' }
      ],
      explanation: 'Saber dónde tomar cada transporte te facilitará moverte por la ciudad.'
    } as any
  },
  {
    id: 'a1-u12-e19',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Edificios altos',
      instructions: '¿Cómo se dice "rascacielos" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'A very tall building is a ________.',
          options: ['skyscraper', 'house', 'store'],
          correctAnswer: 0,
          explanation: '"Skyscraper" literalmente significa "el que rasca el cielo".'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e20',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Avenue',
      instructions: 'Di la palabra para "avenida".',
      questions: [
        {
          id: 'q1',
          text: 'Avenue',
          phonetic: '/ˈæv.ə.njuː/',
          translation: 'Avenida',
          explanation: 'La acentuación está en la primera sílaba.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e21',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Vivo en esta calle',
      instructions: 'Ordena para decir "Yo vivo en esta calle".',
      sentences: [
        {
          id: 's1',
          words: ['street', 'this', 'on', 'live', 'I'],
          correctSentence: 'I live on this street',
          translation: 'Yo vivo en esta calle.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos la preposición "on" para referirnos a la ubicación en una calle.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e22',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Tienda / Almacén',
          back: 'Store / Shop',
          example: 'I go to the clothing store.',
          pronunciation: '/stɔːr/',
          explanation: '"Store" es más común en EE.UU. y "Shop" en el Reino Unido.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e23',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'Comprar ropa',
      instructions: 'Escribe la palabra para "tienda".',
      questions: [
        {
          id: 'q1',
          question: 'Let\'s go to the jewelry ________.',
          answer: 'store',
          explanation: '"Store" se usa para cualquier tipo de establecimiento comercial.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e24',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Farmacia',
      instructions: '¿Dónde compras medicina?',
      questions: [
        {
          id: 'q1',
          question: 'I buy medicine at the ________.',
          options: ['pharmacy', 'bakery', 'bank'],
          correctAnswer: 0,
          explanation: '"Pharmacy" o "Drugstore" es la farmacia.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e25',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'Tiendas Especializadas',
      instructions: 'Une cada tienda con lo que vende.',
      pairs: [
        { id: 'p1', left: 'Bakery', right: 'Pan' },
        { id: 'p2', left: 'Butcher shop', right: 'Carne' },
        { id: 'p3', left: 'Bookstore', right: 'Libros' },
        { id: 'p4', left: 'Pet shop', right: 'Mascotas' },
        { id: 'p5', left: 'Pharmacy', right: 'Medicina' }
      ],
      explanation: 'Conocer las tiendas especializadas te ayudará a hacer recados específicos.'
    } as any
  },
  {
    id: 'a1-u12-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Restaurant',
      instructions: 'Di la palabra para "restaurante".',
      questions: [
        {
          id: 'q1',
          text: 'Restaurant',
          phonetic: '/ˈres.trɒnt/',
          translation: 'Restaurante',
          explanation: 'La segunda "a" no se suele pronunciar. Suena como RES-tront.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e27',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'El hotel está cerca',
      instructions: 'Ordena para decir "El hotel está cerca de la estación".',
      sentences: [
        {
          id: 's1',
          words: ['station', 'the', 'near', 'is', 'hotel', 'The'],
          correctSentence: 'The hotel is near the station',
          translation: 'El hotel está cerca de la estación.',
          hint: 'Empieza con "The".',
          explanation: '"Near" significa cerca de.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Direcciones básicas',
      instructions: '¿Cómo se dice "enfrente de"?',
      questions: [
        {
          id: 'q1',
          question: 'The park is ________ the bank.',
          options: ['opposite', 'under', 'on'],
          correctAnswer: 0,
          explanation: '"Opposite" o "In front of" significa enfrente de.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Plaza / Centro',
          back: 'Square / Center',
          example: 'Let\'s meet in the main square.',
          pronunciation: '/skweər/',
          explanation: '"Square" es una plaza pública, a menudo en el centro de la ciudad.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e30',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'La plaza principal',
      instructions: 'Escribe la palabra para "plaza".',
      questions: [
        {
          id: 'q1',
          question: 'The town ________ is beautiful.',
          answer: 'square',
          explanation: '"Square" también significa "cuadrado".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Religión y Arquitectura',
      instructions: '¿Cómo se dice "iglesia"?',
      questions: [
        {
          id: 'q1',
          question: 'There is a big ________ here.',
          options: ['church', 'school', 'hospital'],
          correctAnswer: 0,
          explanation: '"Church" es iglesia.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e32',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Señales de Tráfico',
      instructions: 'Une cada señal con su traducción.',
      pairs: [
        { id: 'p1', left: 'Traffic light', right: 'Semáforo' },
        { id: 'p2', left: 'Stop sign', right: 'Señal de stop' },
        { id: 'p3', left: 'No parking', right: 'Prohibido aparcar' },
        { id: 'p4', left: 'One way', right: 'Sentido único' },
        { id: 'p5', left: 'Pedestrian zone', right: 'Zona peatonal' }
      ],
      explanation: 'Conocer las señales de tráfico te ayudará a moverte con seguridad.'
    } as any
  },
  {
    id: 'a1-u12-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Neighborhood',
      instructions: 'Di la palabra para "barrio" o "vecindario".',
      questions: [
        {
          id: 'q1',
          text: 'Neighborhood',
          phonetic: '/ˈneɪ.bə.hʊd/',
          translation: 'Vecindario',
          explanation: 'La acentuación está en la primera sílaba: NEI-bor-hood.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e34',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Me gusta mi barrio',
      instructions: 'Ordena para decir "Me gusta mi barrio".',
      sentences: [
        {
          id: 's1',
          words: ['neighborhood', 'my', 'like', 'I'],
          correctSentence: 'I like my neighborhood',
          translation: 'Me gusta mi barrio.',
          hint: 'Empieza con "I".',
          explanation: '"Neighborhood" viene de "neighbor" (vecino).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e35',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Acera / Vereda',
          back: 'Sidewalk / Pavement',
          example: 'Walk on the sidewalk.',
          pronunciation: '/ˈsaɪd.wɔːk/',
          explanation: '"Sidewalk" en EE.UU. y "Pavement" en el Reino Unido.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Caminar seguro',
      instructions: '¿Dónde caminan los peatones?',
      questions: [
        {
          id: 'q1',
          question: 'Walk on the ________.',
          options: ['sidewalk', 'river', 'sky'],
          correctAnswer: 0,
          explanation: '"Sidewalk" es la zona para caminar a los lados de la calle.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'El semáforo',
      instructions: 'Escribe la palabra para "semáforo".',
      questions: [
        {
          id: 'q1',
          question: 'The ________ is red.',
          answer: 'traffic light',
          explanation: '"Traffic light" literalmente es "luz de tráfico".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e38',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Servicios en la Ciudad',
      instructions: 'Une cada servicio con su traducción.',
      pairs: [
        { id: 'p1', left: 'Public restroom', right: 'Baño público' },
        { id: 'p2', left: 'Trash can', right: 'Papelera/Cubo de basura' },
        { id: 'p3', left: 'Bench', right: 'Banco (para sentarse)' },
        { id: 'p4', left: 'Street lamp', right: 'Farola' },
        { id: 'p5', left: 'Fountain', right: 'Fuente' }
      ],
      explanation: 'Estos son elementos del mobiliario urbano.'
    } as any
  },
  {
    id: 'a1-u12-e39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: City',
      instructions: 'Di la palabra para "ciudad".',
      questions: [
        {
          id: 'q1',
          text: 'City',
          phonetic: '/ˈsɪt.i/',
          translation: 'Ciudad',
          explanation: 'La "c" inicial suena como una "s" suave.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e40',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'Vivo en una ciudad grande',
      instructions: 'Ordena para decir "Yo vivo en una ciudad grande".',
      sentences: [
        {
          id: 's1',
          words: ['city', 'big', 'a', 'in', 'live', 'I'],
          correctSentence: 'I live in a big city',
          translation: 'Yo vivo en una ciudad grande.',
          hint: 'Empieza con "I".',
          explanation: 'El adjetivo "big" va antes del sustantivo "city".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Direcciones: Derecha e Izquierda',
      instructions: '¿Cómo se dice "gira a la izquierda"?',
      questions: [
        {
          id: 'q1',
          question: '________ left at the corner.',
          options: ['Turn', 'Walk', 'Go'],
          correctAnswer: 0,
          explanation: '"Turn left" es girar a la izquierda.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e42',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Girar a la derecha',
          back: 'Turn right',
          example: 'Turn right at the bank.',
          pronunciation: '/tɜːn raɪt/',
          explanation: '"Turn right" es girar a la derecha.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e43',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'Girar a la derecha',
      instructions: 'Escribe la palabra para "derecha".',
      questions: [
        {
          id: 'q1',
          question: 'Turn ________ here.',
          answer: 'right',
          explanation: '"Right" significa tanto derecha como "correcto".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e44',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Sigue recto',
      instructions: '¿Cómo se dice "sigue recto"?',
      questions: [
        {
          id: 'q1',
          question: 'Go ________ on this street.',
          options: ['straight', 'back', 'under'],
          correctAnswer: 0,
          explanation: '"Go straight" o "Go straight ahead" es seguir recto.'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e45',
    type: 'matching',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Dar Direcciones',
      instructions: 'Une cada expresión con su significado.',
      pairs: [
        { id: 'p1', left: 'Turn left', right: 'Girar a la izquierda' },
        { id: 'p2', left: 'Turn right', right: 'Girar a la derecha' },
        { id: 'p3', left: 'Go straight', right: 'Seguir recto' },
        { id: 'p4', left: 'Cross the street', right: 'Cruzar la calle' },
        { id: 'p5', left: 'On the corner', right: 'En la esquina' }
      ],
      explanation: 'Estas frases son fundamentales para pedir o dar indicaciones.'
    } as any
  },
  {
    id: 'a1-u12-e46',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      title: 'Pronunciación: Corner',
      instructions: 'Di la palabra para "esquina".',
      questions: [
        {
          id: 'q1',
          text: 'Corner',
          phonetic: '/ˈkɔː.nər/',
          translation: 'Esquina',
          explanation: 'La acentuación está en la primera sílaba.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e47',
    type: 'sentence-building',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'Gira en la esquina',
      instructions: 'Ordena para decir "Gira a la izquierda en la esquina".',
      sentences: [
        {
          id: 's1',
          words: ['corner', 'the', 'at', 'left', 'Turn'],
          correctSentence: 'Turn left at the corner',
          translation: 'Girar a la izquierda en la esquina.',
          hint: 'Empieza con "Turn".',
          explanation: '"At the corner" indica el punto exacto donde girar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e48',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'easy',
    content: {
      title: 'Distancia',
      instructions: '¿Cómo se dice "lejos"?',
      questions: [
        {
          id: 'q1',
          question: 'The airport is ________.',
          options: ['far', 'near', 'next to'],
          correctAnswer: 0,
          explanation: '"Far" significa lejos. Lo opuesto es "near".'
        }
      ]
    }
  },
  {
    id: 'a1-u12-e49',
    type: 'flashcard',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'medium',
    content: {
      items: [
        {
          front: 'Al lado de',
          back: 'Next to',
          example: 'The bank is next to the park.',
          pronunciation: '/nekst tuː/',
          explanation: '"Next to" indica contigüidad física.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u12-e50',
    type: 'fill-blank',
    level: 'A1',
    topic: 'City',
    topicName: 'In the City',
    difficulty: 'hard',
    content: {
      title: 'Ubicación contigua',
      instructions: 'Escribe la expresión para "al lado de".',
      questions: [
        {
          id: 'q1',
          question: 'My house is ________ the school.',
          answer: 'next to',
          explanation: '"Next to" es una preposición compuesta muy común.'
        }
      ]
    } as any
  }
];
