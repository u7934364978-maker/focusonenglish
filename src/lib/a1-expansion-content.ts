import { Exercise } from './exercise-types';

// ===============================================
// ADJETIVOS EN INGLÉS
// ===============================================
export const A1_EXP_ADJECTIVES: Exercise[] = [
  {
    id: 'a1-exp-adj-1',
    type: 'grammar',
    title: 'Position and Form of Adjectives',
    instructions: 'Choose the correct English translation for the following sentences.',
    grammarPoint: 'Adjective + Noun (Singular only)',
    explanation: `
Recuerda que los adjetivos en inglés:
1. **No tienen plural**: siempre van en singular (ej. *good coffees*, no *goods coffees*).
2. **Posición**: siempre van **antes** del sustantivo (ej. *a good coffee*).
    `,
    examples: [
      'This is a good coffee.',
      'A tall woman.',
      'The new hotel is nice.'
    ],
    questions: [
      {
        id: 'a1-exp-adj-q1',
        type: 'multiple-choice',
        question: 'Traduce: Éste es un café bueno.',
        options: ['This is a coffee good.', 'This is a good coffee.', 'This is a good coffees.'],
        correctAnswer: 'This is a good coffee.',
        explanation: 'El adjetivo "good" debe ir antes del sustantivo "coffee".',
        points: 1
      },
      {
        id: 'a1-exp-adj-q2',
        type: 'multiple-choice',
        question: 'Traduce: El sandwich de queso y tomate es caro.',
        options: ['The cheese and tomato sandwich is expensive.', 'The sandwich of cheese and tomato is expensive.', 'The cheese and tomato sandwich is expensives.'],
        correctAnswer: 'The cheese and tomato sandwich is expensive.',
        explanation: 'En inglés usamos "cheese and tomato sandwich" y el adjetivo "expensive" no cambia si es plural o singular.',
        points: 1
      },
      {
        id: 'a1-exp-adj-q3',
        type: 'multiple-choice',
        question: 'Traduce: Una mujer alta.',
        options: ['A woman tall.', 'A tall woman.', 'A talls woman.'],
        correctAnswer: 'A tall woman.',
        explanation: 'Adjetivo (tall) + Sustantivo (woman).',
        points: 1
      }
    ]
  }
];

// ===============================================
// ADVERBIOS Y ADVERBIOS DE FRECUENCIA
// ===============================================
export const A1_EXP_ADVERBS: Exercise[] = [
  {
    id: 'a1-exp-adv-1',
    type: 'grammar',
    title: 'Adjectives vs Adverbs',
    instructions: 'Choose the correct adjective or adverb to complete the sentence.',
    grammarPoint: 'Adjective (Noun) vs Adverb (Verb)',
    explanation: `
- El **adjetivo** dice una cualidad de un sustantivo (persona o cosa).
- El **adverbio** dice cómo el verbo hace algo. Pregúntale "¿cómo?" al verbo.
- Generalmente se añade **-ly** al adjetivo para formar el adverbio.
    `,
    examples: [
      'He drives slowly.',
      'She writes in perfect English.',
      'He is a dangerous driver.'
    ],
    questions: [
      {
        id: 'a1-exp-adv-q1',
        type: 'multiple-choice',
        question: 'He drives ___ (slow).',
        options: ['slow', 'slowly', 'slows'],
        correctAnswer: 'slowly',
        explanation: '¿Cómo conduce él? Despacio. Necesitamos un adverbio: slow + ly.',
        points: 1
      },
      {
        id: 'a1-exp-adv-q2',
        type: 'multiple-choice',
        question: 'She sings very ___ (good).',
        options: ['good', 'goodly', 'well'],
        correctAnswer: 'well',
        explanation: '"Well" es el adverbio irregular de "good".',
        points: 1
      },
      {
        id: 'a1-exp-adv-q3',
        type: 'multiple-choice',
        question: 'He is a ___ (dangerous) driver.',
        options: ['dangerous', 'dangerously', 'dangerousely'],
        correctAnswer: 'dangerous',
        explanation: 'Aquí acompaña a "driver" (sustantivo), por lo tanto necesitamos un adjetivo.',
        points: 1
      }
    ]
  },
  {
    id: 'a1-exp-freq-1',
    type: 'grammar',
    title: 'Adverbs of Frequency Position',
    instructions: 'Choose the correct order for the sentence including the frequency adverb.',
    grammarPoint: 'Position of always, usually, often, etc.',
    explanation: `
**Posición:**
1. Entre el sujeto y el verbo (si no es 'to be'): *I **always** go to school.*
2. Detrás del verbo 'to be': *She is **always** at home.*
3. Delante del verbo principal en negativas: *She doesn't **often** write.*
    `,
    examples: [
      'I always go to school by bus.',
      'I never arrive late.',
      'Sometimes I have lunch in a restaurant.'
    ],
    questions: [
      {
        id: 'a1-exp-freq-q1',
        type: 'multiple-choice',
        question: 'Ordena: to the mountains / never / we go',
        options: ['We never go to the mountains.', 'We go never to the mountains.', 'Never we go to the mountains.'],
        correctAnswer: 'We never go to the mountains.',
        explanation: 'El adverbio "never" va entre el sujeto (we) y el verbo (go).',
        points: 1
      },
      {
        id: 'a1-exp-freq-q2',
        type: 'multiple-choice',
        question: '¿Cuál es correcta?',
        options: ['Our teacher usually is angry.', 'Our teacher is usually angry.', 'Usually our teacher is angry.'],
        correctAnswer: 'Our teacher is usually angry.',
        explanation: 'Con el verbo "to be" (is), el adverbio va después.',
        points: 1
      }
    ]
  }
];

// ===============================================
// AFTER / THEN / AFTERWARDS
// ===============================================
export const A1_EXP_CONNECTORS: Exercise[] = [
  {
    id: 'a1-exp-conn-1',
    type: 'grammar',
    title: 'After vs Then',
    instructions: 'Complete the sentences using after or then.',
    grammarPoint: 'After (prep/conj) vs Then (adv)',
    explanation: `
- **After**: Significa "después de". Va seguido de sustantivo o de oración (Sujeto + Verbo).
- **Then**: Significa "después/luego". Suele ir al principio de una oración o después de "and".
    `,
    examples: [
      'I do my homework after lunch.',
      'I get up and then I get dressed.',
      'After I have a shower, I go to bed.'
    ],
    questions: [
      {
        id: 'a1-exp-conn-q1',
        type: 'multiple-choice',
        question: 'We can discuss it ___________ lunch.',
        options: ['after', 'then', 'afterwards'],
        correctAnswer: 'after',
        explanation: 'Usamos "after" seguido de un sustantivo (lunch). "Después de la comida".',
        points: 1
      },
      {
        id: 'a1-exp-conn-q2',
        type: 'multiple-choice',
        question: 'I get up and ___________ I get dressed.',
        options: ['after', 'then', 'afterwards'],
        correctAnswer: 'then',
        explanation: '"Then" indica una correlación de hechos: "y después me visto".',
        points: 1
      },
      {
        id: 'a1-exp-conn-q3',
        type: 'multiple-choice',
        question: '___________ I have a shower, I go to bed.',
        options: ['After', 'Then', 'Afterwards'],
        correctAnswer: 'After',
        explanation: '"After" seguido de una oración (I have a shower). "Después de ducharme".',
        points: 1
      }
    ]
  }
];

// ===============================================
// COMMON MISTAKES
// ===============================================
export const A1_EXP_COMMON_MISTAKES: Exercise[] = [
  {
    id: 'a1-exp-mist-1',
    type: 'grammar',
    title: 'Common Mistakes for Spanish Speakers',
    instructions: 'Identify and correct the common mistakes in these sentences.',
    grammarPoint: 'Articles, Plurals and Prepositions',
    explanation: `
Errores comunes que debemos evitar:
- **Allow**: *allow me **to** go* (no *allow me go*).
- **Articles**: *Do you have **a** car?* (sustantivos contables singulares necesitan artículo).
- **Uncountables**: *information, homework, work* (no llevan -s).
- **Internet**: *on the Internet* (siempre con 'on the').
    `,
    examples: [
      'Do you have a car?',
      'I have 3 children.',
      'I go to a state school.'
    ],
    questions: [
      {
        id: 'a1-exp-mist-q1',
        type: 'multiple-choice',
        question: '¿Cuál es correcta?',
        options: ['I have 3 childrens.', 'I have 3 children.', 'I have 3 childs.'],
        correctAnswer: 'I have 3 children.',
        explanation: '"Children" ya es plural, no necesita -s.',
        points: 1
      },
      {
        id: 'a1-exp-mist-q2',
        type: 'multiple-choice',
        question: '¿Cómo se dice: "en Internet"?',
        options: ['in Internet', 'on Internet', 'on the Internet'],
        correctAnswer: 'on the Internet',
        explanation: 'La expresión correcta es siempre "on the Internet".',
        points: 1
      },
      {
        id: 'a1-exp-mist-q3',
        type: 'multiple-choice',
        question: 'I need some ___ (información).',
        options: ['informations', 'information', 'an information'],
        correctAnswer: 'information',
        explanation: '"Information" es incontable, nunca lleva -s.',
        points: 1
      }
    ]
  }
];

// ===============================================
// GENITIVO SAJÓN
// ===============================================
export const A1_EXP_POSSESSION: Exercise[] = [
  {
    id: 'a1-exp-poss-1',
    type: 'grammar',
    title: 'Possession: Genitive Saxon',
    instructions: 'Choose the correct way to express possession.',
    grammarPoint: "Persona's + Objeto",
    explanation: `
El genitivo sajón se usa para posesión cuando el poseedor es una persona, animal o lugar.
**Regla:** Persona + 's + Objeto
- *Peter's car* (El coche de Peter)
- Si acaba en -s (plural regular): *My parents' house* (sólo apóstrofo).
- Si es inanimado: *The end of the film* (usamos 'of').
    `,
    examples: [
      "Maria's house is big.",
      "John's job is boring.",
      "My parents' house."
    ],
    questions: [
      {
        id: 'a1-exp-poss-q1',
        type: 'multiple-choice',
        question: 'Traduce: La casa de María.',
        options: ["Maria's house", 'The house of Maria', 'Marias house'],
        correctAnswer: "Maria's house",
        explanation: "Poseedor (Maria) + 's + Objeto (house).",
        points: 1
      },
      {
        id: 'a1-exp-poss-q2',
        type: 'multiple-choice',
        question: 'La casa de mis padres (plural).',
        options: ["My parent's house", "My parents' house", 'The house of my parents'],
        correctAnswer: "My parents' house",
        explanation: 'En plurales que terminan en -s, solo añadimos el apóstrofo.',
        points: 1
      }
    ]
  }
];

// ===============================================
// CAPITAL LETTERS (MAYÚSCULAS)
// ===============================================
export const A1_EXP_CAPITALS: Exercise[] = [
  {
    id: 'a1-exp-cap-1',
    type: 'grammar',
    title: 'Capital Letters in English',
    instructions: 'Choose the sentence with the correct capitalization.',
    grammarPoint: 'Nationalities, Languages, Months, Days',
    explanation: `
En inglés, a diferencia del español, **SIEMPRE** se escriben con mayúscula:
1. Nacionalidades (*Spanish, German*)
2. Idiomas (*English, French*)
3. Meses (*May, February*)
4. Días de la semana (*Tuesday, Saturday*)
    `,
    examples: [
      'I am Spanish.',
      'My birthday is in May.',
      'I see you on Saturday.'
    ],
    questions: [
      {
        id: 'a1-exp-cap-q1',
        type: 'multiple-choice',
        question: '¿Cuál es correcta?',
        options: ["I'm learning english.", "I'm learning English.", "i'm learning english."],
        correctAnswer: "I'm learning English.",
        explanation: 'Los idiomas siempre van con mayúscula en inglés.',
        points: 1
      },
      {
        id: 'a1-exp-cap-q2',
        type: 'multiple-choice',
        question: 'My birthday is in ___ (mayo).',
        options: ['may', 'May', 'mAy'],
        correctAnswer: 'May',
        explanation: 'Los meses del año siempre van con mayúscula.',
        points: 1
      }
    ]
  }
];

// ===============================================
// ORDINALES Y FECHAS
// ===============================================
export const A1_EXP_DATES: Exercise[] = [
  {
    id: 'a1-exp-dates-1',
    type: 'grammar',
    title: 'Ordinal Numbers and Dates',
    instructions: 'Select the correct ordinal number format for the date.',
    grammarPoint: '1st, 2nd, 3rd... and Dates',
    explanation: `
Usamos números ordinales para las fechas:
- 1st (first), 2nd (second), 3rd (third).
- El resto suele terminar en **-th**: 4th, 5th, 11th.
- **Formato fecha**: 24th September o May 18th.
    `,
    examples: [
      '24th September.',
      '18th May.',
      '22nd April.'
    ],
    questions: [
      {
        id: 'a1-exp-dates-q1',
        type: 'multiple-choice',
        question: '¿Cómo se escribe: 22 de abril?',
        options: ['22th April', '22st April', '22nd April'],
        correctAnswer: '22nd April',
        explanation: 'El ordinal de 22 es "twenty-second", por tanto termina en "nd".',
        points: 1
      }
    ]
  }
];

// ===============================================
// TRANSPORTES Y PREPOSICIONES
// ===============================================
export const A1_EXP_TRANSPORT: Exercise[] = [
  {
    id: 'a1-exp-trans-1',
    type: 'grammar',
    title: 'Transport Prepositions',
    instructions: 'Select the correct preposition for each transport situation.',
    grammarPoint: 'By, On, In, On foot',
    explanation: `
- **By**: Uso general (by car, by train). Sin artículo ni posesivo.
- **On**: Para train, bus, plane, bike cuando es específico.
- **In**: Para car, taxi cuando es específico (in my car).
- **On foot**: Para decir "a pie".
    `,
    examples: [
      'I go to work by car.',
      'I came in my car.',
      'I go to school on foot.'
    ],
    questions: [
      {
        id: 'a1-exp-trans-q1',
        type: 'multiple-choice',
        question: 'I go to work ___ car.',
        options: ['by', 'in', 'on'],
        correctAnswer: 'by',
        explanation: 'Uso general del medio de transporte.',
        points: 1
      },
      {
        id: 'a1-exp-trans-q2',
        type: 'multiple-choice',
        question: 'I came ___ my car.',
        options: ['by', 'in', 'on'],
        correctAnswer: 'in',
        explanation: 'Cuando es específico ("my car"), usamos "in".',
        points: 1
      },
      {
        id: 'a1-exp-trans-q3',
        type: 'multiple-choice',
        question: 'I go to school ___ foot.',
        options: ['by', 'in', 'on'],
        correctAnswer: 'on',
        explanation: 'La expresión para ir andando es siempre "on foot".',
        points: 1
      }
    ]
  },
  {
    id: 'a1-exp-trans-2',
    type: 'grammar',
    title: 'Getting On and Off',
    instructions: 'Choose the correct verb for getting on or off transport.',
    grammarPoint: 'Get on/off vs Get into/out of',
    explanation: `
- **Get on / Get off**: Bus, train, plane, bike.
- **Get into / Get out of**: Car, taxi.
    `,
    examples: [
      'Phone me when you get on the train.',
      'I got out of the taxi and paid the driver.',
      'You should get off the train at Atocha Station.'
    ],
    questions: [
      {
        id: 'a1-exp-trans-q4',
        type: 'multiple-choice',
        question: 'Phone me when you ___ the train.',
        options: ['get into', 'get on', 'get in'],
        correctAnswer: 'get on',
        explanation: 'Para trenes usamos "get on".',
        points: 1
      },
      {
        id: 'a1-exp-trans-q5',
        type: 'multiple-choice',
        question: 'I ___ the taxi and paid the driver.',
        options: ['got off', 'got out of', 'got out'],
        correctAnswer: 'got out of',
        explanation: 'Para salir de un taxi usamos "get out of".',
        points: 1
      }
    ]
  }
];

// ===============================================
// PREPOSICIONES DE LUGAR
// ===============================================
export const A1_EXP_PLACE: Exercise[] = [
  {
    id: 'a1-exp-place-1',
    type: 'grammar',
    title: 'Prepositions of Place',
    instructions: 'Choose the correct preposition of place.',
    grammarPoint: 'Near, Next to, Opposite, In front of',
    explanation: `
- **near** (cerca de): No lleva 'of'.
- **next to** (al lado de): Siempre con 'to'.
- **opposite** (enfrente de): No lleva 'of' ni 'to'.
- **in front of** (delante de): Significa "delante", no "enfrente".
    `,
    examples: [
      'There is a supermarket near my house.',
      'The dining table is close to the TV.',
      'Next to the school, there is a bus stop.'
    ],
    questions: [
      {
        id: 'a1-exp-place-q1',
        type: 'multiple-choice',
        question: 'There is a supermarket ___ my house.',
        options: ['near of', 'near', 'close'],
        correctAnswer: 'near',
        explanation: '"Near" no necesita "of".',
        points: 1
      },
      {
        id: 'a1-exp-place-q2',
        type: 'multiple-choice',
        question: 'I sat ___ a beautiful woman on the train.',
        options: ['opposite', 'opposite to', 'in front of'],
        correctAnswer: 'opposite',
        explanation: '"Opposite" significa cara a cara, sin preposiciones adicionales.',
        points: 1
      },
      {
        id: 'a1-exp-place-q3',
        type: 'multiple-choice',
        question: 'Traduce: Al lado de mi casa hay una guardería.',
        options: ['Near my house...', 'Next to my house...', 'In front of my house...'],
        correctAnswer: 'Next to my house...',
        explanation: '"Next to" es "al lado de".',
        points: 1
      }
    ]
  }
];

// Combine all for easy export
export const A1_EXPANSION_ALL: Exercise[] = [
  ...A1_EXP_ADJECTIVES,
  ...A1_EXP_ADVERBS,
  ...A1_EXP_CONNECTORS,
  ...A1_EXP_COMMON_MISTAKES,
  ...A1_EXP_POSSESSION,
  ...A1_EXP_CAPITALS,
  ...A1_EXP_DATES,
  ...A1_EXP_TRANSPORT,
  ...A1_EXP_PLACE
];
