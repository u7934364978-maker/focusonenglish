/**
 * Unidad 39 — Lección 1: Gramática (Zero Conditional: General Truths)
 * 15 ejercicios: If + present simple, present simple (general truths, scientific facts)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Zero Conditional|Condicional cero]]: [[General Truths|Verdades generales]]";
const INSTRUCTIONS = 'Completa con la forma correcta del verbo o elige la opción correcta.';

export const UNIT_39_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u39-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[heat|calientas]] [[water|agua]], [[it|ella]] ____ [[boils|hierve]].',
          options: ['[[heat / boils|calientas / hierve]]', '[[heats / boil|calienta / hierven]]', '[[heated / boiled|calentaste / hirvió]]'],
          correctAnswer: 'heat / boils',
          explanation: "[[Zero Conditional|Condicional cero]]: [[If|Si]] + [[present simple|presente simple]], [[present simple|presente simple]]. [[General truth|Verdad general]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If|Si]] [[it|ello]] ____ [[rains|llueve]], [[the|el]] [[ground|suelo]] ____ [[gets|se pone]] [[wet|mojado]].',
          options: ['[[rains / gets|llueve / se pone]]', '[[rain / get|llueven / se ponen]]', '[[rained / got|llovía / se puso]]'],
          correctAnswer: 'rains / gets',
          explanation: "[[Zero Conditional|Condicional cero]]: [[cause|causa]] [[and|y]] [[effect|efecto]] [[always|siempre]] [[true|verdaderos]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[mix|mezclas]] [[red|rojo]] [[and|y]] [[blue|azul]], [[you|tú]] ____ [[get|obtienes]] [[purple|morado]].',
          options: ['[[mix / get|mezclas / obtienes]]', '[[mixes / gets|mezcla / obtiene]]', '[[mixed / got|mezclaste / obtuviste]]'],
          correctAnswer: 'mix / get',
          explanation: "[[Scientific fact|Hecho científico]]: [[present simple|presente simple]] [[in both|en ambas]] [[clauses|oraciones]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[freeze|congelar]] [[water|agua]], [[it|ella]] ____ [[turns|se convierte]] [[into|en]] [[ice|hielo]].',
          options: ['[[freeze / turns|freeze / turns]]', '[[freezes / turn|freezes / turn]]', '[[froze / turned|froze / turned]]'],
          correctAnswer: 0,
          explanation: "[[Zero Conditional|Condicional cero]]: [[If you freeze|Si congelas]] + [[it turns|se convierte]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[people|la gente]] ____ [[sleep|dormir]] [[well|bien]], [[they|ellos]] ____ [[feel|sienten]] [[better|mejor]].',
          options: ['[[sleep / feel|sleep / feel]]', '[[sleeps / feels|sleeps / feels]]', '[[slept / felt|slept / felt]]'],
          correctAnswer: 0,
          explanation: "[[General truth|Verdad general]]: [[always|siempre]] [[true|verdad]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[the|el]] [[sun|sol]] ____ [[shines|brilla]], [[the|el]] [[weather|tiempo]] ____ [[is|es]] [[nice|agradable]].',
          options: ['[[shines / is|shines / is]]', '[[shine / are|shine / are]]', '[[shone / was|shone / was]]'],
          correctAnswer: 0,
          explanation: "[[Zero Conditional|Condicional cero]]: [[If the sun shines|Si el sol brilla]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[eat|comer]] [[too much|demasiado]], [[you|tú]] ____ [[feel|sientes]] [[sick|enfermo]].',
          options: ['[[eat / feel|eat / feel]]', '[[eats / feels|eats / feels]]', '[[ate / felt|ate / felt]]'],
          correctAnswer: 0,
          explanation: "[[General truth|Verdad general]] [[about|sobre]] [[health|salud]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[plants|las plantas]] ____ [[don\'t get|no reciben]] [[water|agua]], [[they|ellas]] ____ [[die|mueren]].',
          options: ["[[don't get / die|don't get / die]]", "[[doesn't get / dies|doesn't get / dies]]", "[[didn't get / died|didn't get / died]]"],
          correctAnswer: 0,
          explanation: "[[Scientific fact|Hecho científico]]: [[plants|plantas]] [[need|necesitan]] [[water|agua]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[press|presionas]] [[the|el]] [[button|botón]], [[the|la]] [[light|luz]] ____ [[turns on|se enciende]].',
          options: ['[[press / turns on|press / turns on]]', '[[presses / turn on|presses / turn on]]', '[[pressed / turned on|pressed / turned on]]'],
          correctAnswer: 0,
          explanation: "[[Cause and effect|Causa y efecto]]: [[always|siempre]] [[the same|igual]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[ice|el hielo]] ____ [[melts|se derrite]], [[it|él]] ____ [[becomes|se convierte]] [[water|agua]].',
          options: ['[[melts / becomes|melts / becomes]]', '[[melt / become|melt / become]]', '[[melted / became|melted / became]]'],
          correctAnswer: 0,
          explanation: "[[Scientific fact|Hecho científico]]: [[water cycle|ciclo del agua]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[exercise|haces ejercicio]] [[regularly|regularmente]], [[you|tú]] ____ [[stay|permaneces]] [[healthy|sano]].',
          options: ['[[exercise / stay|exercise / stay]]', '[[exercises / stays|exercises / stays]]', '[[exercised / stayed|exercised / stayed]]'],
          correctAnswer: 0,
          explanation: "[[General truth|Verdad general]] [[about|sobre]] [[health|salud]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[add|añades]] [[sugar|azúcar]] [[to|a]] [[tea|té]], [[it|él]] ____ [[tastes|sabe]] [[sweet|dulce]].',
          options: ['[[add / tastes|add / tastes]]', '[[adds / taste|adds / taste]]', '[[added / tasted|added / tasted]]'],
          correctAnswer: 0,
          explanation: "[[Zero Conditional|Condicional cero]]: [[cause|causa]] [[and|y]] [[effect|efecto]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[If|Si]] [[it|ello]] ____ [[snows|nieva]], [[the|el]] [[ground|suelo]] ____ [[gets|se pone]] [[white|blanco]].',
          options: ['[[snows / gets|snows / gets]]', '[[snow / get|snow / get]]', '[[snowed / got|snowed / got]]'],
          correctAnswer: 0,
          explanation: "[[General truth|Verdad general]] [[about|sobre]] [[weather|tiempo]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[drop|dejas caer]] [[something|algo]], [[it|ello]] ____ [[falls|cae]] [[to|al]] [[the|el]] [[ground|suelo]].',
          options: ['[[drop / falls|drop / falls]]', '[[drops / fall|drops / fall]]', '[[dropped / fell|dropped / fell]]'],
          correctAnswer: 'drop / falls',
          explanation: "[[Gravity|Gravedad]]: [[scientific fact|hecho científico]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u39-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Zero Conditional',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[If|Si]] [[you|tú]] ____ [[don\'t water|no riegas]] [[plants|plantas]], [[they|ellas]] ____ [[die|mueren]].',
          options: ["[[don't water / die|don't water / die]]", "[[doesn't water / dies|doesn't water / dies]]", "[[didn't water / died|didn't water / died]]"],
          correctAnswer: "don't water / die",
          explanation: "[[Zero Conditional|Condicional cero]]: [[negative|negativa]] [[in|en]] [[if clause|oración condicional]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
