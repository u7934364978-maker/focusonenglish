/**
 * Unidad 18 B2 — Lección 1: Gramática (So, such, too, enough)
 * 18 ejercicios (B2: más vocabulario y complejidad que B1)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE =
  '[[Grammar|Gramática]]: [[So, such, too, enough|Tan, tal, demasiado, suficiente]]';
const INSTRUCTIONS =
  'Elige la forma correcta: so, such, too o enough según el contexto.';

export const UNIT_18_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'b2-u18-l1-g1',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[so|tan]] + [[adjective|adjetivo]] = tan + adjetivo',
      questions: [
        {
          id: 'g1-q1',
          type: 'fill-blank',
          question:
            '[[The pasta|La pasta]] [[was|era]] ____ [[delicious|deliciosa]] [[that|que]] [[I had a second helping|pedí una segunda ración]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adjective: "so delicious" = tan delicioso. Se usa "that" para la consecuencia.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g2',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[such|tal]] + [[(a/an)|(un/una)]] + [[noun|sustantivo]] = tan + sustantivo',
      questions: [
        {
          id: 'g2-q1',
          type: 'fill-blank',
          question:
            '[[It was|Fue]] ____ [[good meal|buena comida]] [[that|que]] [[we stayed for dessert|nos quedamos para el postre]].',
          options: ['[[such a|tan buena]]', '[[so a|tan un]]', '[[too a|demasiado un]]'],
          correctAnswer: '[[such a|tan buena]]',
          acceptableAnswers: ['[[such a|tan buena]]'],
          explanation:
            'Such a + noun: "such a good meal" = tan buena comida. Con sustantivo contable singular.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g3',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[too|demasiado]] + [[adjective|adjetivo]] = demasiado + adjetivo',
      questions: [
        {
          id: 'g3-q1',
          type: 'fill-blank',
          question:
            '[[The soup|La sopa]] [[was|estaba]] ____ [[hot|caliente]] [[to eat|para comer]]. [[I had to wait for it to cool down|Tuve que esperar a que se enfriara]].',
          options: ['[[too|demasiado]]', '[[so|tan]]', '[[enough|suficiente]]'],
          correctAnswer: '[[too|demasiado]]',
          acceptableAnswers: ['[[too|demasiado]]'],
          explanation:
            'Too + adjective: "too hot" = demasiado caliente. Implica que no se pudo comer.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g4',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[adjective|adjetivo]] + [[enough|suficiente]] = suficiente',
      questions: [
        {
          id: 'g4-q1',
          type: 'multiple-choice',
          question:
            "[[The cake|La tarta]] [[wasn't|no era]] [[sweet|dulce]] ____ [[for my taste|para mi gusto]]. [[I prefer more sugar|Prefiero más azúcar]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          explanation:
            'Adjective + enough: "wasn\'t sweet enough" = no era lo bastante dulce.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g5',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[so many|tantos/tantas]] + [[plural noun|sustantivo plural]]',
      questions: [
        {
          id: 'g5-q1',
          type: 'fill-blank',
          question:
            "[[There were|Había]] ____ [[many choices|muchas opciones]] [[on the menu|en el menú]] [[that|que]] [[I couldn't decide|no pude decidir]].",
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So many + plural: "so many choices" = tantas opciones. "Many" va con plural.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g6',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[so much|tanto]] + [[uncountable noun|sustantivo incontable]]',
      questions: [
        {
          id: 'g6-q1',
          type: 'fill-blank',
          question:
            '[[The restaurant had|El restaurante tenía]] ____ [[much salt|mucha sal]] [[in the food|en la comida]] [[that|que]] [[I was thirsty all night|tuve sed toda la noche]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So much + uncountable: "so much salt" = tanta sal. "Much" va con incontables.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g7',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[too|demasiado]] + [[adjective|adjetivo]] + [[to infinitive|infinitivo con to]]',
      questions: [
        {
          id: 'g7-q1',
          type: 'fill-blank',
          question:
            '[[The coffee|El café]] [[was|era]] ____ [[strong|fuerte]] [[to drink without milk|para beber sin leche]].',
          options: ['[[too|demasiado]]', '[[so|tan]]', '[[enough|suficiente]]'],
          correctAnswer: '[[too|demasiado]]',
          acceptableAnswers: ['[[too|demasiado]]'],
          explanation:
            'Too + adjective + to: "too strong to drink" = demasiado fuerte para beber.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g8',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[enough|suficiente]] + [[noun|sustantivo]]',
      questions: [
        {
          id: 'g8-q1',
          type: 'multiple-choice',
          question:
            "[[We didn't have|No tuvimos]] ____ [[time|tiempo]] [[to order dessert|para pedir postre]]. [[The restaurant was closing|El restaurante estaba cerrando]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          explanation:
            'Enough + noun: "enough time" = suficiente tiempo. "Enough" va antes del sustantivo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g9',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[such|tal]] + [[uncountable/plural|incontable/plural]] (sin a/an)',
      questions: [
        {
          id: 'g9-q1',
          type: 'fill-blank',
          question:
            '[[We had|Tuvimos]] ____ [[wonderful food|comida maravillosa]] [[at the restaurant|en el restaurante]] [[that|que]] [[we went back the next week|volvimos la semana siguiente]].',
          options: ['[[such|tal]]', '[[so|tan]]', '[[too|demasiado]]'],
          correctAnswer: '[[such|tal]]',
          acceptableAnswers: ['[[such|tal]]'],
          explanation:
            'Such + noun (sin a/an con incontables): "such wonderful food" = tan buena comida.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g10',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[so|tan]] + [[adverb|adverbio]]',
      questions: [
        {
          id: 'g10-q1',
          type: 'fill-blank',
          question:
            "[[The chef prepared the dish|El chef preparó el plato]] ____ [[quickly|rápidamente]] [[that|que]] [[we couldn't believe it|no pudimos creerlo]].",
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adverb: "so quickly" = tan rápido. Con adverbios usamos "so", no "such".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g11',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[too|demasiado]] + [[adverb|adverbio]]',
      questions: [
        {
          id: 'g11-q1',
          type: 'multiple-choice',
          question:
            '[[The waiter served us|El camarero nos sirvió]] ____ [[slowly|despacio]]. [[We were waiting for over an hour|Estuvimos esperando más de una hora]].',
          options: ['[[too|demasiado]]', '[[so|tan]]', '[[enough|suficiente]]'],
          correctAnswer: '[[too|demasiado]]',
          explanation:
            'Too + adverb: "too slowly" = demasiado despacio. Expresa negatividad.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g12',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[enough|suficiente]] + [[to infinitive|infinitivo con to]]',
      questions: [
        {
          id: 'g12-q1',
          type: 'fill-blank',
          question:
            '[[The portion|La porción]] [[was|era]] [[big|grande]] ____ [[to share between two people|para compartir entre dos personas]].',
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          acceptableAnswers: ['[[enough|suficiente]]'],
          explanation:
            'Adjective + enough + to: "big enough to share" = lo bastante grande para compartir.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g13',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[such a|tan un]] + [[adjective|adjetivo]] + [[noun|sustantivo]]',
      questions: [
        {
          id: 'g13-q1',
          type: 'fill-blank',
          question:
            '[[It was|Era]] ____ [[expensive restaurant|restaurante caro]] [[that|que]] [[we could only afford to go once a year|solo podíamos permitirnos ir una vez al año]].',
          options: ['[[such an|tan]]', '[[so an|tan un]]', '[[too an|demasiado un]]'],
          correctAnswer: '[[such an|tan]]',
          acceptableAnswers: ['[[such an|tan]]'],
          explanation:
            'Such a/an + adjective + noun: "such an expensive restaurant" = un restaurante tan caro.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g14',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[too|demasiado]] + [[noun|sustantivo]]',
      questions: [
        {
          id: 'g14-q1',
          type: 'multiple-choice',
          question:
            '[[There was|Había]] ____ [[sugar|azúcar]] [[in the cake|en la tarta]]. [[It was almost inedible|Era casi incomible]].',
          options: ['[[too much|demasiado]]', '[[so much|tanto]]', '[[enough|suficiente]]'],
          correctAnswer: '[[too much|demasiado]]',
          explanation:
            'Too much + uncountable: "too much sugar" = demasiado azúcar. Expresa exceso negativo.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g15',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[so|tan]] + [[adjective|adjetivo]] (sin that)',
      questions: [
        {
          id: 'g15-q1',
          type: 'fill-blank',
          question:
            '[[The wine|El vino]] [[was|era]] ____ [[good|bueno]]! [[We ordered another bottle|Pedimos otra botella]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adjective (exclamación): "so good!" = ¡tan bueno! No necesita "that".',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g16',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[so few|tan pocos/pocas]] + [[plural|plural]]',
      questions: [
        {
          id: 'g16-q1',
          type: 'fill-blank',
          question:
            '[[There were|Había]] ____ [[few vegetarian options|pocas opciones vegetarianas]] [[that|que]] [[I had to ask for something special|tuve que pedir algo especial]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So few + plural: "so few options" = tan pocas opciones. "Few" con plural contable.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g17',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: '[[not enough|no suficiente]] + [[noun|sustantivo]]',
      questions: [
        {
          id: 'g17-q1',
          type: 'multiple-choice',
          question:
            "[[There wasn't|No había]] ____ [[seating|asientos]] [[for everyone|para todos]]. [[Some people had to stand|Algunos tuvieron que estar de pie]].",
          options: ['[[enough|suficiente]]', '[[too|demasiado]]', '[[so|tan]]'],
          correctAnswer: '[[enough|suficiente]]',
          explanation:
            'Not enough + noun: "wasn\'t enough seating" = no había suficiente asientos.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b2-u18-l1-g18',
    type: 'grammar',
    level: 'B2',
    topic: 'So, such, too, enough',
    difficulty: 'medium',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      grammarPoint: 'Resumen: [[so|tan]], [[such|tal]], [[too|demasiado]], [[enough|suficiente]]',
      questions: [
        {
          id: 'g18-q1',
          type: 'fill-blank',
          question:
            '[[The service|El servicio]] [[was|era]] ____ [[fast|rápido]] [[that|que]] [[we finished our meal in less than an hour|terminamos la comida en menos de una hora]].',
          options: ['[[so|tan]]', '[[such|tal]]', '[[too|demasiado]]'],
          correctAnswer: '[[so|tan]]',
          acceptableAnswers: ['[[so|tan]]'],
          explanation:
            'So + adjective + that: "so fast that" = tan rápido que. Consecuencia positiva.',
          points: 2,
        },
      ],
    },
    topicName: 'Grammar',
  },
];
