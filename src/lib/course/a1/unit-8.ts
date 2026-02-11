import { Exercise } from '@/lib/exercise-generator';

export const UNIT_8_EXERCISES: Exercise[] = [
  {
    id: 'a1-u8-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Me despierto',
      instructions: '¿Cómo se dice "despertarse" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ at 7:00 AM.',
          options: ['wake up', 'go to sleep', 'eat'],
          correctAnswer: 0,
          explanation: '"Wake up" significa despertarse. Es la primera acción del día.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Desayunar',
          back: 'Eat breakfast',
          example: 'I eat breakfast in the morning.',
          pronunciation: '/iːt ˈbrek.fəst/',
          explanation: '"Breakfast" literalmente significa "romper el ayuno".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Voy al trabajo',
      instructions: 'Ordena las palabras para decir "Voy al trabajo".',
      sentences: [
        {
          id: 's1',
          words: ['work', 'to', 'go', 'I'],
          correctSentence: 'I go to work',
          translation: 'Voy al trabajo.',
          hint: 'Empieza con "I".',
          explanation: 'Usamos "go to" para indicar movimiento hacia un lugar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Ducharse',
      instructions: '¿Cuál es la frase para "tomar una ducha"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ in the morning.',
          options: ['take a shower', 'take a coffee', 'take a sleep'],
          correctAnswer: 0,
          explanation: '"Take a shower" es la expresión estándar para ducharse.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e5',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Breakfast',
      instructions: 'Di la palabra para "desayuno".',
      questions: [
        {
          id: 'q1',
          text: 'Breakfast',
          correctAnswer: 'Breakfast',
          explanation: 'Aunque viene de "break", se pronuncia con una "e" corta: /brek/.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Verbos de rutina',
      instructions: 'Une el verbo en español con su traducción al inglés.',
      pairs: [
        { id: '1', left: 'Comer', right: 'Eat' },
        { id: '2', left: 'Dormir', right: 'Sleep' },
        { id: '3', left: 'Trabajar', right: 'Work' },
        { id: '4', left: 'Ir', right: 'Go' },
        { id: '5', left: 'Beber', right: 'Drink' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Estos verbos de acción son los bloques de construcción de tu día a día.'
    } as any
  },
  {
    id: 'a1-u8-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Almuerzo',
      instructions: 'Escribe la palabra para "almuerzo/comida".',
      questions: [
        {
          id: 'q1',
          text: 'I eat ___ at 1:00 PM.',
          correctAnswer: 'lunch',
          explanation: '"Lunch" es la comida que se hace a mitad del día.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Ir a casa',
      instructions: '¿Cómo dices que vas a casa?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ after work.',
          options: ['go home', 'go to home', 'go the home'],
          correctAnswer: 0,
          explanation: 'Con la palabra "home", no usamos la preposición "to". Decimos simplemente "go home".'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cenar',
          back: 'Eat dinner',
          example: 'I eat dinner at 8:00 PM.',
          pronunciation: '/iːt ˈdɪn.ər/',
          explanation: '"Dinner" es la comida principal de la noche.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Me duermo',
      instructions: 'Ordena para decir "Voy a dormir".',
      sentences: [
        {
          id: 's1',
          words: ['sleep', 'to', 'go', 'I'],
          correctSentence: 'I go to sleep',
          translation: 'Voy a dormir.',
          hint: 'Empieza con "I".',
          explanation: 'Indica la acción de ir a la cama para descansar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Leer',
      instructions: '¿Qué verbo significa "leer"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ a book at night.',
          options: ['read', 'write', 'watch'],
          correctAnswer: 0,
          explanation: '"Read" es leer. Se pronuncia /riːd/.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e12',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Work',
      instructions: 'Di la palabra para "trabajo".',
      questions: [
        {
          id: 'q1',
          text: 'Work',
          correctAnswer: 'Work',
          explanation: 'La "o" suena como una "e" muy cerrada y profunda (/wɜːrk/).'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Acciones diarias',
      instructions: 'Une la acción con su traducción.',
      pairs: [
        { id: '1', left: 'Despertarse', right: 'Wake up' },
        { id: '2', left: 'Ducharse', right: 'Take a shower' },
        { id: '3', left: 'Desayunar', right: 'Eat breakfast' },
        { id: '4', left: 'Almorzar', right: 'Eat lunch' },
        { id: '5', left: 'Cenar', right: 'Eat dinner' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Estas cinco acciones cubren los hitos principales de cualquier día.'
    } as any
  },
  {
    id: 'a1-u8-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Ver la televisión',
      instructions: 'Escribe el verbo "ver" para la televisión.',
      questions: [
        {
          id: 'q1',
          text: 'I ___ TV in the evening.',
          correctAnswer: 'watch',
          explanation: '"Watch" se usa para mirar algo que tiene movimiento o durante un tiempo, como la TV.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Beber café',
      instructions: '¿Cuál es el verbo correcto?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ coffee in the morning.',
          options: ['drink', 'eat', 'read'],
          correctAnswer: 0,
          explanation: '"Drink" significa beber.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Escuchar música',
          back: 'Listen to music',
          example: 'I listen to music every day.',
          pronunciation: '/ˈlɪs.ən tu ˈmjuː.zɪk/',
          explanation: 'La "t" en "listen" es muda. Siempre lleva "to" después.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Escucho música',
      instructions: 'Ordena para traducir "Escucho música".',
      sentences: [
        {
          id: 's1',
          words: ['music', 'to', 'listen', 'I'],
          correctSentence: 'I listen to music',
          translation: 'Escucho música.',
          hint: 'No olvides el "to".',
          explanation: 'En inglés decimos "listen to" algo, nunca "listen" algo directamente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Ir a la escuela',
      instructions: '¿Cómo dices que vas a la escuela?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ school.',
          options: ['go to', 'go', 'go in'],
          correctAnswer: 0,
          explanation: '"Go to" indica el destino.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e19',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Shower',
      instructions: 'Di la palabra para "ducha".',
      questions: [
        {
          id: 'q1',
          text: 'Shower',
          correctAnswer: 'Shower',
          explanation: 'La "sh" es suave y la terminación suena como "auer".'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Lugares y acciones',
      instructions: 'Une el lugar con la acción lógica.',
      pairs: [
        { id: '1', left: 'Kitchen', right: 'Eat' },
        { id: '2', left: 'Bedroom', right: 'Sleep' },
        { id: '3', left: 'Bathroom', right: 'Shower' },
        { id: '4', left: 'Office', right: 'Work' },
        { id: '5', left: 'School', right: 'Study' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Relacionar lugares con acciones te ayuda a recordar el vocabulario en contexto.'
    } as any
  },
  {
    id: 'a1-u8-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Estudiar',
      instructions: 'Escribe el verbo "estudiar".',
      questions: [
        {
          id: 'q1',
          text: 'I ___ English.',
          correctAnswer: 'study',
          explanation: '"Study" significa estudiar. ¡Es lo que estás haciendo ahora!'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Limpiar',
      instructions: '¿Qué verbo significa "limpiar"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ my room.',
          options: ['clean', 'cook', 'make'],
          correctAnswer: 0,
          explanation: '"Clean" significa limpiar. Se pronuncia /kliːn/.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Cocinar',
          back: 'Cook',
          example: 'I cook dinner.',
          pronunciation: '/kʊk/',
          explanation: 'La "oo" suena como una "u" corta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Cocino la cena',
      instructions: 'Ordena para decir "Yo cocino la cena".',
      sentences: [
        {
          id: 's1',
          words: ['dinner', 'cook', 'I'],
          correctSentence: 'I cook dinner',
          translation: 'Yo cocino la cena.',
          hint: 'Sujeto + Verbo + Objeto.',
          explanation: 'Estructura básica para describir acciones habituales.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Hacer ejercicio',
      instructions: '¿Cómo se dice "hacer ejercicio"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ in the afternoon.',
          options: ['exercise', 'eat', 'sleep'],
          correctAnswer: 0,
          explanation: '"Exercise" significa hacer ejercicio.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e26',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Lunch',
      instructions: 'Di la palabra para "almuerzo".',
      questions: [
        {
          id: 'q1',
          text: 'Lunch',
          correctAnswer: 'Lunch',
          explanation: 'La "u" suena como una "a" corta y la "ch" es marcada.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e27',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Verbos y objetos',
      instructions: 'Une el verbo con el objeto correcto.',
      pairs: [
        { id: '1', left: 'Read', right: 'A book' },
        { id: '2', left: 'Watch', right: 'TV' },
        { id: '3', left: 'Listen to', right: 'Music' },
        { id: '4', left: 'Drive', right: 'A car' },
        { id: '5', left: 'Drink', right: 'Water' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Combinar verbos con sus complementos es esencial para formar frases con sentido.'
    } as any
  },
  {
    id: 'a1-u8-e28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Ir a la cama',
      instructions: 'Escribe la palabra para "cama".',
      questions: [
        {
          id: 'q1',
          text: 'I go to ___ at 10:00 PM.',
          correctAnswer: 'bed',
          explanation: '"Bed" es cama. "Go to bed" es la frase común para irse a dormir.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e29',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Caminar',
      instructions: '¿Qué verbo significa "caminar"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ to the park.',
          options: ['walk', 'run', 'swim'],
          correctAnswer: 0,
          explanation: '"Walk" significa caminar. La "l" es muda.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e30',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Lavar los platos',
          back: 'Wash the dishes',
          example: 'I wash the dishes after dinner.',
          pronunciation: '/wɒʃ ðə dɪʃɪz/',
          explanation: '"Wash" significa lavar y "dishes" son los platos/vajilla.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e31',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Lavo los platos',
      instructions: 'Ordena para decir "Lavo los platos".',
      sentences: [
        {
          id: 's1',
          words: ['dishes', 'the', 'wash', 'I'],
          correctSentence: 'I wash the dishes',
          translation: 'Lavo los platos.',
          hint: 'Usa "wash".',
          explanation: 'Acción común después de comer.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e32',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Hablar',
      instructions: '¿Cómo se dice "hablar" con amigos?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ with my friends.',
          options: ['talk', 'walk', 'cook'],
          correctAnswer: 0,
          explanation: '"Talk" significa hablar o conversar. La "l" es muda, suena como "tok".'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e33',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Dinner',
      instructions: 'Di la palabra para "cena".',
      questions: [
        {
          id: 'q1',
          text: 'Dinner',
          correctAnswer: 'Dinner',
          explanation: 'Se acentúa la primera sílaba: DI-nner.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e34',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Tiempos y comidas',
      instructions: 'Une el momento del día con la comida correspondiente.',
      pairs: [
        { id: '1', left: 'Morning', right: 'Breakfast' },
        { id: '2', left: 'Noon', right: 'Lunch' },
        { id: '3', left: 'Evening', right: 'Dinner' },
        { id: '4', left: 'Afternoon', right: 'Snack' },
        { id: '5', left: 'Night', right: 'Sleep' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Asociar momentos del día con comidas te da contexto temporal.'
    } as any
  },
  {
    id: 'a1-u8-e35',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Ir al trabajo',
      instructions: 'Escribe la preposición correcta.',
      questions: [
        {
          id: 'q1',
          text: 'I go ___ work.',
          correctAnswer: 'to',
          explanation: 'Usamos "to" para indicar la dirección o destino.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Comprar comida',
      instructions: '¿Qué frase significa "hacer la compra"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ on Saturdays.',
          options: ['go shopping', 'go cooking', 'go cleaning'],
          correctAnswer: 0,
          explanation: '"Go shopping" se refiere a ir de compras o hacer la compra.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e37',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Limpiar la casa',
          back: 'Clean the house',
          example: 'I clean the house on Sundays.',
          pronunciation: '/kliːn ðə haʊs/',
          explanation: 'Combinamos el verbo "clean" con el objeto "the house".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Limpio mi cuarto',
      instructions: 'Ordena para decir "Limpio mi habitación".',
      sentences: [
        {
          id: 's1',
          words: ['room', 'my', 'clean', 'I'],
          correctSentence: 'I clean my room',
          translation: 'Limpio mi habitación.',
          hint: 'Empieza con "I".',
          explanation: '"My room" es un complemento directo común para el verbo clean.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e39',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Descansar',
      instructions: '¿Cómo dices que te tomas un descanso?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ for ten minutes.',
          options: ['take a break', 'take a work', 'take a study'],
          correctAnswer: 0,
          explanation: '"Take a break" significa tomarse un descanso o pausa.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e40',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Study',
      instructions: 'Di la palabra para "estudiar".',
      questions: [
        {
          id: 'q1',
          text: 'Study',
          correctAnswer: 'Study',
          explanation: 'No añadas una "e" al principio. Empieza directamente con el sonido de la "s" (/ˈstʌdi/).'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e41',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Verbos de ocio',
      instructions: 'Une el verbo con su traducción.',
      pairs: [
        { id: '1', left: 'Jugar', right: 'Play' },
        { id: '2', left: 'Cantar', right: 'Sing' },
        { id: '3', left: 'Bailar', right: 'Dance' },
        { id: '4', left: 'Correr', right: 'Run' },
        { id: '5', left: 'Nadar', right: 'Swim' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Estos verbos describen actividades que hacemos fuera del trabajo o estudio.'
    } as any
  },
  {
    id: 'a1-u8-e42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Jugar a videojuegos',
      instructions: 'Escribe el verbo "jugar".',
      questions: [
        {
          id: 'q1',
          text: 'I ___ video games.',
          correctAnswer: 'play',
          explanation: '"Play" se usa para juegos, deportes y música.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e43',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Correr',
      instructions: '¿Qué verbo significa "correr"?',
      questions: [
        {
          id: 'q1',
          question: 'I ________ in the morning.',
          options: ['run', 'sleep', 'read'],
          correctAnswer: 0,
          explanation: '"Run" significa correr.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ir al gimnasio',
          back: 'Go to the gym',
          example: 'I go to the gym at 6:00 PM.',
          pronunciation: '/ɡoʊ tu ðə dʒɪm/',
          explanation: '"Gym" es la abreviatura de "gymnasium".'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e45',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Voy al gimnasio',
      instructions: 'Ordena para decir "Voy al gimnasio".',
      sentences: [
        {
          id: 's1',
          words: ['gym', 'the', 'to', 'go', 'I'],
          correctSentence: 'I go to the gym',
          translation: 'Voy al gimnasio.',
          hint: 'No olvides "to the".',
          explanation: 'Estructura común para actividades físicas fuera de casa.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u8-e46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Trabajar mucho',
      instructions: '¿Cómo dices que trabajas mucho?',
      questions: [
        {
          id: 'q1',
          question: 'I work ________.',
          options: ['hard', 'easy', 'small'],
          correctAnswer: 0,
          explanation: '"Work hard" significa trabajar duro o mucho.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e47',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Pronunciación: Sleep',
      instructions: 'Di la palabra para "dormir".',
      questions: [
        {
          id: 'q1',
          text: 'Sleep',
          correctAnswer: 'Sleep',
          explanation: 'Alarga el sonido de la "ee" (/sliːp/).'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e48',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Resumen de rutina',
      instructions: 'Une las frases correctamente.',
      pairs: [
        { id: '1', left: 'I wake', right: 'up' },
        { id: '2', left: 'I take a', right: 'shower' },
        { id: '3', left: 'I eat', right: 'breakfast' },
        { id: '4', left: 'I go to', right: 'work' },
        { id: '5', left: 'I go', right: 'home' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Este es el resumen perfecto de una rutina básica matutina.'
    } as any
  },
  {
    id: 'a1-u8-e49',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Final del día',
      instructions: 'Escribe el verbo "dormir".',
      questions: [
        {
          id: 'q1',
          text: 'At night, I ___.',
          correctAnswer: 'sleep',
          explanation: 'La acción principal de la noche.'
        }
      ]
    }
  },
  {
    id: 'a1-u8-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routine',
    topicName: 'Daily Grind',
    difficulty: 'easy',
    content: {
      title: 'Repaso: Desayuno',
      instructions: '¿Qué es "breakfast"?',
      questions: [
        {
          id: 'q1',
          question: 'Breakfast is in the ________.',
          options: ['morning', 'afternoon', 'night'],
          correctAnswer: 0,
          explanation: 'El desayuno es la primera comida del día, por la mañana.'
        }
      ]
    }
  }
];
