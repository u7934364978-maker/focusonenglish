import { Exercise } from '@/lib/exercise-generator';

export const UNIT_26_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Accidents & Injuries (1-12) ---
  {
    id: 'a2-u26-e1',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Accidente',
          back: 'Accident',
          example: 'He had a small accident in the kitchen.',
          pronunciation: '/ˈæksɪdənt/',
          explanation: 'Algo inesperado que suele causar daño.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e2',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Common Injuries',
      instructions: 'Une la lesión con su traducción.',
      pairs: [
        { id: '1', left: 'Burn', right: 'Quemadura' },
        { id: '2', left: 'Cut', right: 'Corte' },
        { id: '3', left: 'Bruise', right: 'Moretón / Cardenal' },
        { id: '4', left: 'Sprain', right: 'Esguince' },
        { id: '5', left: 'Fracture', right: 'Fractura' }
      ],
      explanation: 'Tipos comunes de lesiones físicas.'
    } as any
  },
  {
    id: 'a2-u26-e3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'At home',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Be careful! You might ___ on the wet floor.',
          options: ['slip', 'break', 'cut'],
          correctAnswer: 0,
          explanation: '"Slip" es resbalar.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Falling down',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'I fell off my bike and ___ my arm.',
          correctAnswer: 'broke',
          explanation: 'Pasado de "break" (romper).'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e5',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Sudden event',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['He', 'hit', 'his', 'head', 'on', 'the', 'door', '.'],
          correctSentence: 'He hit his head on the door.',
          translation: 'Se golpeó la cabeza con la puerta.',
          hint: 'Usa "hit".',
          explanation: '"Hit" es golpear. El pasado de "hit" es también "hit".',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e6',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Sangrar',
          back: 'Bleed',
          example: 'Your finger is bleeding.',
          pronunciation: '/bliːd/',
          explanation: 'Perder sangre por una herida.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Pain',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'My ankle is very ___ after the fall.',
          options: ['swollen', 'cut', 'burnt'],
          correctAnswer: 0,
          explanation: '"Swollen" significa hinchado.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e8',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Accident',
      instructions: 'Di "It was an accident".',
      questions: [
        {
          id: 'q1',
          text: 'It was an accident',
          correctAnswer: 'It was an accident',
          explanation: 'Pronuncia "accident" como /ˈæksɪdənt/.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Kitchen safety',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'I burnt my hand on the hot ___ .',
          correctAnswer: 'stove',
          explanation: '"Stove" es la cocina o fogón.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e10',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Minor injury',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'have', 'a', 'small', 'cut', 'on', 'my', 'finger', '.'],
          correctSentence: 'I have a small cut on my finger.',
          translation: 'Tengo un pequeño corte en el dedo.',
          hint: 'Usa "on".',
          explanation: 'Preposición para partes del cuerpo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e11',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Symptoms',
      instructions: 'Une la acción con la lesión.',
      pairs: [
        { id: '1', left: 'Limping', right: 'Sprained ankle' },
        { id: '2', left: 'Crying', right: 'Pain / Shock' },
        { id: '3', left: 'Shaking', right: 'Being scared / Cold' },
        { id: '4', left: 'Bleeding', right: 'A cut' }
      ],
      explanation: 'Reacciones físicas ante accidentes.'
    } as any
  },
  {
    id: 'a2-u26-e12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Recovery',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'He needs to wear a ___ on his broken leg.',
          options: ['cast', 'bandage', 'plaster'],
          correctAnswer: 0,
          explanation: '"Cast" es una escayola o yeso.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 2: Adverbs of Degree (13-24) ---
  {
    id: 'a2-u26-e13',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Extremadamente / Muy',
          back: 'Extremely / Very',
          example: 'It is extremely dangerous to play with fire.',
          pronunciation: '/ɪkˈstriːmli/ /ˈveri/',
          explanation: 'Adverbios que intensifican el adjetivo al máximo.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e14',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Degree Adverbs',
      instructions: 'Une el adverbio con su intensidad.',
      pairs: [
        { id: '1', left: 'Extremely', right: 'Very strong (100%)' },
        { id: '2', left: 'Quite / Fairly', right: 'Medium (60-70%)' },
        { id: '3', left: 'Slightly / A bit', right: 'Low (20-30%)' }
      ],
      explanation: 'Diferentes niveles de intensidad para adjetivos.'
    } as any
  },
  {
    id: 'a2-u26-e15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Intensity',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The injury is ___ painful, but not too serious.',
          options: ['quite', 'slightly', 'extremely'],
          correctAnswer: 0,
          explanation: '"Quite" indica una intensidad moderada.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e16',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'A bit of pain',
      instructions: 'Completa con un adverbio de grado bajo.',
      questions: [
        {
          id: 'q1',
          text: 'My head hurts ___ . I just need some rest.',
          correctAnswer: 'slightly',
          explanation: '"Slightly" significa un poco o ligeramente.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e17',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Very serious',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'car', 'crash', 'was', 'extremely', 'scary', '.'],
          correctSentence: 'The car crash was extremely scary.',
          translation: 'El choque de coche fue extremadamente aterrador.',
          hint: 'Intensidad máxima.',
          explanation: 'Adverbio antes del adjetivo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e18',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Bastante (positivo/neutro)',
          back: 'Fairly',
          example: 'The road is fairly safe during the day.',
          pronunciation: '/ˈfeəli/',
          explanation: 'Indica un grado moderado, similar a "quite".'
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e19',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Comparing Degree',
      instructions: 'Elige el adverbio más fuerte.',
      questions: [
        {
          id: 'q1',
          question: 'The weather is ___ cold! Don’t go outside.',
          options: ['extremely', 'fairly', 'slightly'],
          correctAnswer: 0,
          explanation: 'Necesitamos el grado más alto por la advertencia.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e20',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Extremely',
      instructions: 'Di "It is extremely hot".',
      questions: [
        {
          id: 'q1',
          text: 'It is extremely hot',
          correctAnswer: 'It is extremely hot',
          explanation: 'Pronuncia "extremely" como /ɪkˈstriːmli/.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e21',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Adverb Choice',
      instructions: 'Completa con "quite" o "slightly".',
      questions: [
        {
          id: 'q1',
          text: 'The car is ___ damaged, but we can still drive it.',
          correctAnswer: 'slightly',
          explanation: '"Slightly" (un poco) encaja mejor si aún se puede conducir.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e22',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Fairly safe',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['This', 'place', 'is', 'fairly', 'safe', 'at', 'night', '.'],
          correctSentence: 'This place is fairly safe at night.',
          translation: 'Este lugar es bastante seguro por la noche.',
          hint: 'Usa "fairly".',
          explanation: 'Grado moderado.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e23',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Adverb Context',
      instructions: 'Une el adverbio con la situación lógica.',
      pairs: [
        { id: '1', left: 'Extremely dangerous', right: 'Walking on a thin wire' },
        { id: '2', left: 'Slightly expensive', right: 'A 5% price increase' },
        { id: '3', left: 'Quite difficult', right: 'A test you need to study for' },
        { id: '4', left: 'Very happy', right: 'Winning a small prize' }
      ],
      explanation: 'Uso de adverbios según la gravedad de la situación.'
    } as any
  },
  {
    id: 'a2-u26-e24',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Too vs Very',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The box is ___ heavy for me to lift.',
          options: ['too', 'very', 'extremely'],
          correctAnswer: 0,
          explanation: 'Usamos "too" cuando la intensidad impide realizar una acción.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 3: Emergencies & Help (25-36) ---
  {
    id: 'a2-u26-e25',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Emergencia',
          back: 'Emergency',
          example: 'In case of emergency, call 911.',
          pronunciation: '/ɪˈmɜːdʒənsi/',
          explanation: 'Situación crítica que requiere ayuda inmediata.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u24-e26',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Emergency Services',
      instructions: 'Une el servicio con su traducción.',
      pairs: [
        { id: '1', left: 'Ambulance', right: 'Ambulancia' },
        { id: '2', left: 'Fire engine / truck', right: 'Coche de bomberos' },
        { id: '3', left: 'Police car', right: 'Coche patrulla' },
        { id: '4', left: 'Paramedic', right: 'Paramédico' },
        { id: '5', left: 'Firefighter', right: 'Bombero' }
      ],
      explanation: 'Personas y vehículos de emergencia.'
    } as any
  },
  {
    id: 'a2-u26-e27',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Calling for help',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'We need to call the ___ . There is a fire!',
          options: ['fire brigade', 'police', 'doctor'],
          correctAnswer: 0,
          explanation: '"Fire brigade" es el cuerpo de bomberos.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e28',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Hospital',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'The ambulance took him to the ___ department.',
          correctAnswer: 'emergency',
          explanation: '"Emergency department" es el servicio de urgencias.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e29',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Rescue',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'paramedics', 'saved', 'his', 'life', '.'],
          correctSentence: 'The paramedics saved his life.',
          translation: 'Los paramédicos le salvaron la vida.',
          hint: 'Usa "saved".',
          explanation: 'Acción heroica en emergencias.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e30',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Primeros auxilios',
          back: 'First aid',
          example: 'Every office should have a first aid kit.',
          pronunciation: '/ˌfɜːst ˈeɪd/',
          explanation: 'Ayuda inicial a un herido.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e31',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Giving help',
      instructions: 'Elige el verbo correcto.',
      questions: [
        {
          id: 'q1',
          question: 'The nurse ___ a bandage on my arm.',
          options: ['put', 'made', 'did'],
          correctAnswer: 0,
          explanation: '"Put a bandage" es poner una venda.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e32',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      title: 'Pronunciation: Ambulance',
      instructions: 'Di "Call an ambulance!".',
      questions: [
        {
          id: 'q1',
          text: 'Call an ambulance!',
          correctAnswer: 'Call an ambulance!',
          explanation: 'Pronuncia "ambulance" como /ˈæmbjələns/.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e33',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Emergency call',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'The operator asked me for my ___ .',
          correctAnswer: 'location',
          explanation: 'Necesitan saber dónde estás (location).'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e34',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Stay calm',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['It', 'is', 'important', 'to', 'stay', 'calm', '.'],
          correctSentence: 'It is important to stay calm.',
          translation: 'Es importante mantener la calma.',
          hint: 'Usa "stay calm".',
          explanation: 'Consejo fundamental en emergencias.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e35',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'What to do?',
      instructions: 'Une la emergencia con la acción.',
      pairs: [
        { id: '1', left: 'Fire', right: 'Evacuate the building' },
        { id: '2', left: 'Heart attack', right: 'Perform CPR' },
        { id: '3', left: 'Small cut', right: 'Apply a plaster' },
        { id: '4', left: 'Traffic accident', right: 'Call the police' }
      ],
      explanation: 'Acciones correctas ante diferentes problemas.'
    } as any
  },
  {
    id: 'a2-u26-e36',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Life saving',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The patient is ___ . They are not breathing.',
          options: ['unconscious', 'asleep', 'scared'],
          correctAnswer: 0,
          explanation: '"Unconscious" significa inconsciente.'
        }
      ]
    }
  },

  // --- SUB-TOPIC 4: Safety & Prevention (37-45) ---
  {
    id: 'a2-u26-e37',
    type: 'flashcard',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Seguridad',
          back: 'Safety',
          example: 'Road safety is very important.',
          pronunciation: '/ˈseɪfti/',
          explanation: 'Estado de estar protegido de daños.'
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e38',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Safety rules',
      instructions: 'Elige la palabra correcta.',
      questions: [
        {
          id: 'q1',
          question: 'Always wear a ___ in the car.',
          options: ['seat belt', 'helmet', 'gloves'],
          correctAnswer: 0,
          explanation: '"Seat belt" es el cinturón de seguridad.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e39',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Warning signs',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Look at that ___ ! It says "Danger".',
          correctAnswer: 'sign',
          explanation: '"Sign" es un letrero o señal.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e40',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Prevention',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'can', 'prevent', 'most', 'accidents', '.'],
          correctSentence: 'We can prevent most accidents.',
          translation: 'Podemos prevenir la mayoría de los accidentes.',
          hint: 'Usa "prevent".',
          explanation: '"Prevent" significa evitar que ocurra algo.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e41',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Safety Equipment',
      instructions: 'Une el equipo con su uso.',
      pairs: [
        { id: '1', left: 'Life jacket', right: 'In a boat / sea' },
        { id: '2', left: 'Fire extinguisher', right: 'To put out a fire' },
        { id: '3', left: 'Helmet', right: 'On a bike or motorbike' },
        { id: '4', left: 'Smoke alarm', right: 'Inside a house' }
      ],
      explanation: 'Elementos que nos mantienen seguros.'
    } as any
  },
  {
    id: 'a2-u26-e42',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Giving advice',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'You ___ play with matches.',
          options: ['shouldn’t', 'must', 'can'],
          correctAnswer: 0,
          explanation: '"Shouldn’t" para dar consejos negativos de seguridad.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e43',
    type: 'speaking-analysis',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Pronunciation: Danger',
      instructions: 'Di "Watch out! Danger!".',
      questions: [
        {
          id: 'q1',
          text: 'Watch out! Danger!',
          correctAnswer: 'Watch out! Danger!',
          explanation: 'Pronuncia "danger" como /ˈdeɪndʒə/.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e44',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Safe behavior',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'Drive ___ when the roads are wet.',
          correctAnswer: 'carefully',
          explanation: 'Adverbio de modo: conducir con cuidado.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e45',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Safety check',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['Don’t', 'forget', 'to', 'check', 'the', 'smoke', 'alarms', '.'],
          correctSentence: 'Don’t forget to check the smoke alarms.',
          translation: 'No olvides revisar las alarmas de humo.',
          hint: 'Negativo imperativo.',
          explanation: 'Mantenimiento de seguridad.',
          points: 10
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Review & Mixed Practice (46-50) ---
  {
    id: 'a2-u26-e46',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Mixed Review',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'The accident was ___ serious, but he is okay now.',
          options: ['quite', 'too', 'slightly'],
          correctAnswer: 0,
          explanation: '"Quite" indica intensidad moderada.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e47',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Emergency review',
      instructions: 'Completa.',
      questions: [
        {
          id: 'q1',
          text: 'He has a ___ leg after the car crash.',
          correctAnswer: 'broken',
          explanation: '"Broken leg" es pierna rota.'
        }
      ]
    }
  },
  {
    id: 'a2-u26-e48',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Degree review',
      instructions: 'Ordena la frase.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'am', 'extremely', 'sorry', 'for', 'the', 'mistake', '.'],
          correctSentence: 'I am extremely sorry for the mistake.',
          translation: 'Siento muchísimo el error.',
          hint: 'Intensidad máxima.',
          explanation: 'Uso de adverbio de grado.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: 'a2-u26-e49',
    type: 'matching',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'medium',
    content: {
      title: 'Injury Review',
      instructions: 'Une la lesión con el objeto causante.',
      pairs: [
        { id: '1', left: 'Cut', right: 'Knife' },
        { id: '2', left: 'Burn', right: 'Hot water' },
        { id: '3', left: 'Slip', right: 'Wet floor' },
        { id: '4', left: 'Sprain', right: 'Running / Sports' }
      ],
      explanation: 'Relación de causa y efecto en accidentes.'
    } as any
  },
  {
    id: 'a2-u26-e50',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Accidents & Emergencies',
    topicName: 'Accidents & Emergencies',
    difficulty: 'hard',
    content: {
      title: 'Final Challenge',
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          id: 'q1',
          question: 'If there is an ___ , you must remain ___ calm.',
          options: ['emergency / extremely', 'accident / slightly', 'emergency / fairly'],
          correctAnswer: 0,
          explanation: 'En una emergencia, la calma debe ser máxima.'
        }
      ]
    }
  }
];
