import { Exercise } from '@/lib/exercise-generator';

export const UNIT_29_EXERCISES: Exercise[] = [
  // --- MIXED REVIEW: UNITS 1-28 ---
  
  // 1. Greetings & Personal Info (Unit 1 & 11)
  {
    id: 'a1-u29-1',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'Hello, how are you?', back: 'Hola, ¿cómo estás?' },
        { front: 'I am a doctor.', back: 'Soy médico.' },
        { front: 'What is your name?', back: '¿Cómo te llamas?' },
        { front: 'Nice to meet you.', back: 'Mucho gusto.' },
        { front: 'She is a teacher.', back: 'Ella es profesora.' }
      ],
      explanation: 'Un repaso de los saludos básicos y profesiones introducidos al inicio del curso.'
    }
  },
  {
    id: 'a1-u29-2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'They _______ students at the university.',
          options: ['is', 'am', 'are', 'be'],
          correctAnswer: 'are',
          explanation: 'Usamos "are" con el pronombre plural "they".'
        }
      ]
    }
  },
  {
    id: 'a1-u29-3',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'Where _______ you from?',
          correctAnswers: ['are'],
          explanation: 'La pregunta estándar para el origen usa el verbo "to be" en segunda persona.'
        }
      ]
    }
  },

  // 2. Family & Home (Unit 3 & 4)
  {
    id: 'a1-u29-4',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'My brother is tall.', back: 'Mi hermano es alto.' },
        { front: 'The kitchen is big.', back: 'La cocina es grande.' },
        { front: 'My parents are happy.', back: 'Mis padres están felices.' },
        { front: 'The bedroom is small.', back: 'El dormitorio es pequeño.' },
        { front: 'Where is the bathroom?', back: '¿Dónde está el baño?' }
      ],
      explanation: 'Vocabulario clave sobre la familia y las partes de la casa.'
    }
  },
  {
    id: 'a1-u29-5',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'This is my sister.',
          spanish: 'Esta es mi hermana.',
          words: ['This', 'is', 'my', 'sister.'],
          explanation: 'Repaso de adjetivos posesivos y demostrativos.'
        }
      ]
    }
  },

  // 3. Numbers & Time (Unit 5 & 7)
  {
    id: 'a1-u29-6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'Twelve plus eight is _______',
          options: ['eighteen', 'twenty', 'twelve', 'fifteen'],
          correctAnswer: 'twenty',
          explanation: '12 + 8 = 20 (twenty).'
        }
      ]
    }
  },
  {
    id: 'a1-u29-7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: "It's half _______ seven.",
          correctAnswers: ['past'],
          explanation: 'Usamos "half past" para decir que son las siete y media.'
        }
      ]
    }
  },

  // 4. Daily Routine & Verbs (Unit 8 & 13)
  {
    id: 'a1-u29-8',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'I wake up at 6:00.', back: 'Me despierto a las 6:00.' },
        { front: 'She goes to work.', back: 'Ella va a trabajar.' },
        { front: 'We eat breakfast.', back: 'Nosotros desayunamos.' },
        { front: 'He takes a shower.', back: 'Él se ducha.' },
        { front: 'They sleep early.', back: 'Ellos duermen temprano.' }
      ],
      explanation: 'Repaso de verbos de acción diaria en presente simple.'
    }
  },
  {
    id: 'a1-u29-9',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'I drink coffee every morning.',
          spanish: 'Bebo café todas las mañanas.',
          explanation: 'Practica la pronunciación de un hábito común.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-10',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'My father _______ (work) in a bank.',
          correctAnswers: ['works'],
          explanation: 'Recuerda añadir la "s" en la tercera persona del singular (he/she/it).'
        }
      ]
    }
  },

  // 5. Food & Likes (Unit 9)
  {
    id: 'a1-u29-11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: "I don't _______ spicy food.",
          options: ['likes', 'like', 'liking', 'liked'],
          correctAnswer: 'like',
          explanation: 'Después del auxiliar "don\'t", el verbo va en su forma base.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-12',
    type: 'flashcard',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      items: [
        { front: 'Bread', back: 'Pan' },
        { front: 'Milk', back: 'Leche' },
        { front: 'Apple', back: 'Manzana' },
        { front: 'Chicken', back: 'Pollo' }
      ],
      explanation: 'Vocabulario esencial de alimentos.'
    }
  },

  // 6. Clothes & Colors (Unit 6 & 10)
  {
    id: 'a1-u29-13',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'A blue shirt', back: 'Una camisa azul' },
        { front: 'Red shoes', back: 'Zapatos rojos' },
        { front: 'A black hat', back: 'Un sombrero negro' },
        { front: 'Green pants', back: 'Pantalones verdes' },
        { front: 'A white dress', back: 'Un vestido blanco' }
      ],
      explanation: 'El adjetivo de color siempre va antes del sustantivo en inglés.'
    }
  },
  {
    id: 'a1-u29-14',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'She is wearing a yellow jacket.',
          spanish: 'Ella lleva puesta una chaqueta amarilla.',
          words: ['She', 'is', 'wearing', 'a', 'yellow', 'jacket.'],
          explanation: 'Usamos el presente continuo para describir lo que alguien lleva puesto.'
        }
      ]
    }
  },

  // 7. Ability & Prepositions (Unit 19 & 20)
  {
    id: 'a1-u29-15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'Can you _______ the piano?',
          options: ['playing', 'plays', 'play', 'played'],
          correctAnswer: 'play',
          explanation: 'Después de "can", usamos la forma base del verbo.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-16',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'The keys are _______ the table.',
          correctAnswers: ['on'],
          explanation: 'Usamos "on" para algo que está sobre una superficie.'
        }
      ]
    }
  },

  // 8. Past Simple: Was/Were (Unit 25)
  {
    id: 'a1-u29-17',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'I was tired.', back: 'Yo estaba cansado.' },
        { front: 'They were happy.', back: 'Ellos estaban felices.' },
        { front: 'It was cold.', back: 'Hacía frío / Estaba frío.' },
        { front: 'We were at home.', back: 'Estábamos en casa.' },
        { front: 'She was a student.', back: 'Ella era estudiante.' }
      ],
      explanation: 'Repaso del pasado del verbo "to be".'
    }
  },
  {
    id: 'a1-u29-18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: '_______ you at school yesterday?',
          options: ['Was', 'Were', 'Did', 'Are'],
          correctAnswer: 'Were',
          explanation: 'Para "you", usamos "were" en el pasado.'
        }
      ]
    }
  },

  // 9. Past Simple: Regular & Irregular (Unit 26)
  {
    id: 'a1-u29-19',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'Last night, I _______ (watch) a movie.',
          correctAnswers: ['watched'],
          explanation: 'El pasado de los verbos regulares termina en "-ed".'
        }
      ]
    }
  },
  {
    id: 'a1-u29-20',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'I did not go to the park.',
          spanish: 'No fui al parque.',
          words: ['I', 'did', 'not', 'go', 'to', 'the', 'park.'],
          explanation: 'Usamos "did not" + verbo base para negar en pasado.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-21',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'I went to London last summer.',
          spanish: 'Fui a Londres el verano pasado.',
          explanation: '"Went" es el pasado irregular de "go".'
        }
      ]
    }
  },

  // 10. Future Plans: Going to (Unit 27)
  {
    id: 'a1-u29-22',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'I am going to travel.', back: 'Voy a viajar.' },
        { front: 'He is going to study.', back: 'Él va a estudiar.' },
        { front: 'We are going to eat.', back: 'Vamos a comer.' },
        { front: 'She is going to sleep.', back: 'Ella va a dormir.' },
        { front: 'They are going to play.', back: 'Ellos van a jugar.' }
      ],
      explanation: 'Repaso de la estructura "be + going to + verb" para el futuro.'
    }
  },
  {
    id: 'a1-u29-23',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'Are you _______ to visit your family?',
          options: ['go', 'goes', 'going', 'gone'],
          correctAnswer: 'going',
          explanation: 'La estructura requiere el gerundio "going".'
        }
      ]
    }
  },

  // 11. Comparatives (Unit 28)
  {
    id: 'a1-u29-24',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'The train is _______ (fast) than the bus.',
          correctAnswers: ['faster'],
          explanation: 'Para adjetivos cortos, añadimos "-er" para comparar.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-25',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'This car is more expensive than that one.',
          spanish: 'Este coche es más caro que aquel.',
          words: ['This', 'car', 'is', 'more', 'expensive', 'than', 'that', 'one.'],
          explanation: 'Usamos "more" para adjetivos largos de tres o más sílabas.'
        }
      ]
    }
  },

  // 12. Mix: Prepositions, Weather, Animals (Unit 12, 15, 16)
  {
    id: 'a1-u29-26',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'It is sunny today.', back: 'Está soleado hoy.' },
        { front: 'The cat is on the sofa.', back: 'El gato está en el sofá.' },
        { front: 'I live in a city.', back: 'Vivo en una ciudad.' },
        { front: 'A lion is an animal.', back: 'Un león es un animal.' },
        { front: 'The bank is next to the park.', back: 'El banco está al lado del parque.' }
      ],
      explanation: 'Un repaso rápido de lugares, clima y animales.'
    }
  },
  {
    id: 'a1-u29-27',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'Is it _______ outside? Take an umbrella.',
          options: ['sunny', 'raining', 'hot', 'dry'],
          correctAnswer: 'raining',
          explanation: 'Si necesitas un paraguas, es porque está lloviendo (raining).'
        }
      ]
    }
  },

  // 13. Mix: Health & Hobbies (Unit 23 & 24)
  {
    id: 'a1-u29-28',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'I have a _______ (head). I need an aspirin.',
          correctAnswers: ['headache'],
          explanation: 'Un dolor de cabeza se dice "headache".'
        }
      ]
    }
  },
  {
    id: 'a1-u29-29',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'I love playing football on Saturdays.',
          spanish: 'Me encanta jugar al fútbol los sábados.',
          explanation: 'Practica expresar tus gustos y aficiones.'
        }
      ]
    }
  },

  // --- CONTINUING REVIEW TO REACH 50 ---

  {
    id: 'a1-u29-30',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'Do - Did', back: 'Hacer - Hizo' },
        { front: 'Go - Went', back: 'Ir - Fue' },
        { front: 'Eat - Ate', back: 'Comer - Comió' },
        { front: 'See - Saw', back: 'Ver - Vio' },
        { front: 'Have - Had', back: 'Tener - Tuvo' }
      ],
      explanation: 'Pares de verbos irregulares esenciales en presente y pasado.'
    }
  },
  {
    id: 'a1-u29-31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'I have two _______ at home.',
          options: ['child', 'childs', 'children', 'childrens'],
          correctAnswer: 'children',
          explanation: '"Children" es el plural irregular de "child".'
        }
      ]
    }
  },
  {
    id: 'a1-u29-32',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'She is _______ engineer.',
          correctAnswers: ['an'],
          explanation: 'Usamos "an" antes de palabras que empiezan con sonido de vocal.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-33',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'Do you speak English?',
          spanish: '¿Hablas inglés?',
          words: ['Do', 'you', 'speak', 'English?'],
          explanation: 'Repaso de la estructura interrogativa en presente simple.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-34',
    type: 'flashcard',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      items: [
        { front: 'Yesterday', back: 'Ayer' },
        { front: 'Today', back: 'Hoy' },
        { front: 'Tomorrow', back: 'Mañana' },
        { front: 'Now', back: 'Ahora' }
      ],
      explanation: 'Palabras clave para situar acciones en el tiempo.'
    }
  },
  {
    id: 'a1-u29-35',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'Hot - Cold', back: 'Caliente - Frío' },
        { front: 'Big - Small', back: 'Grande - Pequeño' },
        { front: 'Happy - Sad', back: 'Feliz - Triste' },
        { front: 'Old - New', back: 'Viejo - Nuevo' },
        { front: 'Fast - Slow', back: 'Rápido - Lento' }
      ],
      explanation: 'Opuestos básicos para describir cosas y estados.'
    }
  },
  {
    id: 'a1-u29-36',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'Whose bag is this? It is _______',
          options: ['mine', 'my', 'me', 'I'],
          correctAnswer: 'mine',
          explanation: '"Mine" es el pronombre posesivo (mío).'
        }
      ]
    }
  },
  {
    id: 'a1-u29-37',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'Look! It _______ (snow).',
          correctAnswers: ['is snowing'],
          explanation: 'Usamos el presente continuo para acciones que ocurren en el momento.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-38',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'I cannot swim very well.',
          spanish: 'No puedo nadar muy bien.',
          words: ['I', 'cannot', 'swim', 'very', 'well.'],
          explanation: '"Cannot" o "can\'t" expresa falta de habilidad.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-39',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'My favorite color is green.',
          spanish: 'Mi color favorito es el verde.',
          explanation: 'Una frase sencilla para practicar fluidez.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-40',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'I - Me', back: 'Yo - Me/Mí' },
        { front: 'You - You', back: 'Tú - Te/Ti' },
        { front: 'He - Him', back: 'Él - Lo/Él' },
        { front: 'She - Her', back: 'Ella - La/Ella' },
        { front: 'We - Us', back: 'Nosotros - Nos' }
      ],
      explanation: 'Pares de pronombres de sujeto y de objeto.'
    }
  },
  {
    id: 'a1-u29-41',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'How _______ apples are there?',
          options: ['much', 'many', 'any', 'some'],
          correctAnswer: 'many',
          explanation: 'Usamos "many" con sustantivos contables en plural.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-42',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'How _______ is this shirt?',
          correctAnswers: ['much'],
          explanation: 'Usamos "how much" para preguntar el precio.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-43',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'I always eat lunch at noon.',
          spanish: 'Siempre almuerzo al mediodía.',
          words: ['I', 'always', 'eat', 'lunch', 'at', 'noon.'],
          explanation: 'El adverbio de frecuencia va antes del verbo principal.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-44',
    type: 'flashcard',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      items: [
        { front: 'Angry', back: 'Enfadado' },
        { front: 'Bored', back: 'Aburrido' },
        { front: 'Excited', back: 'Emocionado' },
        { front: 'Tired', back: 'Cansado' }
      ],
      explanation: 'Adjetivos para describir cómo nos sentimos.'
    }
  },
  {
    id: 'a1-u29-45',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'Library', back: 'Biblioteca' },
        { front: 'Hospital', back: 'Hospital' },
        { front: 'Cinema', back: 'Cine' },
        { front: 'Museum', back: 'Museo' },
        { front: 'Pharmacy', back: 'Farmacia' }
      ],
      explanation: 'Vocabulario de lugares comunes en la ciudad.'
    }
  },
  {
    id: 'a1-u29-46',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'I use my _______ to hear.',
          options: ['eyes', 'ears', 'nose', 'hands'],
          correctAnswer: 'ears',
          explanation: 'Usamos los oídos (ears) para escuchar.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-47',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          text: 'The day after Friday is _______',
          correctAnswers: ['Saturday'],
          explanation: 'Después del viernes viene el sábado.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-48',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      sentences: [
        {
          english: 'The supermarket is behind the park.',
          spanish: 'El supermercado está detrás del parque.',
          words: ['The', 'supermarket', 'is', 'behind', 'the', 'park.'],
          explanation: '"Behind" significa "detrás de".'
        }
      ]
    }
  },
  {
    id: 'a1-u29-49',
    type: 'speaking-analysis',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      questions: [
        {
          question: 'I can speak a little English now.',
          spanish: 'Ahora puedo hablar un poco de inglés.',
          explanation: '¡Felicidades! Estás terminando el nivel A1.'
        }
      ]
    }
  },
  {
    id: 'a1-u29-50',
    type: 'matching',
    level: 'A1',
    topic: 'Graduation',
    topicName: 'Final Graduation',
    difficulty: 'medium',
    content: {
      pairs: [
        { front: 'Good luck!', back: '¡Buena suerte!' },
        { front: 'See you later.', back: 'Hasta luego.' },
        { front: 'Thank you.', back: 'Gracias.' },
        { front: 'Well done!', back: '¡Bien hecho!' },
        { front: 'I am ready.', back: 'Estoy listo.' }
      ],
      explanation: 'Frases finales para cerrar tu graduación del nivel A1.'
    }
  }
];
