/**
 * Unidad 47 — Lección 1: Gramática (Superlatives: The best in the world)
 * 15 ejercicios: The biggest, the most...
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = "[[Superlatives|Superlativos]]: [[The best in the world|El mejor del mundo]]";
const INSTRUCTIONS = 'Completa con la forma superlativa correcta o elige la opción correcta.';

export const UNIT_47_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u47-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Mount Everest|El Monte Everest]] [[is|es]] ____ ____ ____ [[mountain|montaña]] [[in|en]] [[the world|el mundo]].',
          options: ['[[the highest|la más alta]]', '[[the most high|la más alta]]', '[[the higher|la más alta]]'],
          correctAnswer: 'the highest',
          explanation: "[[High|Alto]] → [[the highest|el más alto]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[Tokyo|Tokio]] [[is|es]] ____ ____ ____ [[city|ciudad]] [[in|en]] [[the world|el mundo]].',
          options: ['[[the most expensive|la más cara]]', '[[the expensivest|la más cara]]', '[[the expensiver|la más cara]]'],
          correctAnswer: 'the most expensive',
          explanation: "[[Expensive|Caro]] = [[long|adjetivo largo]] → [[the most expensive|el más caro]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[This|Esta]] [[is|es]] ____ ____ ____ [[beach|playa]] [[I|yo]] [[have|he]] [[ever|nunca]] [[seen|visto]].',
          options: ['[[the most beautiful|la más bonita]]', '[[the beautifulest|la más bonita]]', '[[the beautifullest|la más bonita]]'],
          correctAnswer: 'the most beautiful',
          explanation: "[[Beautiful|Bonito]] = [[long|adjetivo largo]] → [[the most beautiful|el más bonito]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[The Nile|El Nilo]] [[is|es]] ____ ____ ____ [[river|río]] [[in|en]] [[the world|el mundo]].',
          options: ['[[the longest|el más largo]]', '[[the most long|el más largo]]', '[[the longer|el más largo]]'],
          correctAnswer: 0,
          explanation: "[[Long|Largo]] → [[the longest|el más largo]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] ____ ____ ____ [[student|estudiante]] [[in|en]] [[the class|la clase]].',
          options: ['[[the best|la mejor]]', '[[the goodest|la mejor]]', '[[the most good|la mejor]]'],
          correctAnswer: 0,
          explanation: "[[Good|Bueno]] → [[the best|el mejor]] ([[irregular|irregular]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[That|Ese]] [[was|fue]] ____ ____ ____ [[day|día]] [[of|de]] [[my|mi]] [[life|vida]].',
          options: ['[[the worst|el peor]]', '[[the baddest|el peor]]', '[[the most bad|el peor]]'],
          correctAnswer: 0,
          explanation: "[[Bad|Malo]] → [[the worst|el peor]] ([[irregular|irregular]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[This|Este]] [[is|es]] ____ ____ ____ [[hotel|hotel]] [[in|en]] [[town|la ciudad]].',
          options: ['[[the biggest|el más grande]]', '[[the most big|el más grande]]', '[[the bigger|el más grande]]'],
          correctAnswer: 0,
          explanation: "[[Big|Grande]] → [[the biggest|el más grande]] ([[double consonant|doble consonante]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[He|Él]] [[is|es]] ____ ____ ____ [[person|persona]] [[I|yo]] [[know|conozco]].',
          options: ['[[the most interesting|el más interesante]]', '[[the interestingest|el más interesante]]', '[[the interestingst|el más interesante]]'],
          correctAnswer: 0,
          explanation: "[[Interesting|Interesante]] = [[long|adjetivo largo]] → [[the most interesting|el más interesante]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[This|Esta]] [[is|es]] ____ ____ ____ [[restaurant|restaurante]] [[in|en]] [[the city|la ciudad]].',
          options: ['[[the cheapest|el más barato]]', '[[the most cheap|el más barato]]', '[[the cheapper|el más barato]]'],
          correctAnswer: 0,
          explanation: "[[Cheap|Barato]] → [[the cheapest|el más barato]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[That|Esa]] [[was|fue]] ____ ____ ____ [[film|película]] [[I|yo]] [[have|he]] ____ [[seen|visto]].',
          options: ['[[the best|la mejor]] ... [[ever|nunca]]', '[[the goodest|la mejor]] ... [[ever|nunca]]', '[[the most good|la mejor]] ... [[ever|nunca]]'],
          correctAnswer: 0,
          explanation: "[[Good|Bueno]] → [[the best|el mejor]] ([[irregular|irregular]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g11',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[Russia|Rusia]] [[is|es]] ____ ____ ____ [[country|país]] [[in|en]] [[the world|el mundo]].',
          options: ['[[the largest|el más grande]]', '[[the most large|el más grande]]', '[[the larger|el más grande]]'],
          correctAnswer: 0,
          explanation: "[[Large|Grande]] → [[the largest|el más grande]] ([[e|e]] + [[st|st]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g12',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[She|Ella]] [[is|es]] ____ ____ ____ [[famous|famosa]] [[actress|actriz]] [[in|en]] [[the country|el país]].',
          options: ['[[the most|la más]]', '[[the more|la más]]', '[[the -est|la más]]'],
          correctAnswer: 0,
          explanation: "[[Famous|Famosa]] = [[long|adjetivo largo]] → [[the most famous|la más famosa]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Elige la opción correcta.',
      questions: [
        {
          question: '[[December|Diciembre]] [[is|es]] ____ ____ ____ [[month|mes]] [[of|del]] [[the year|año]].',
          options: ['[[the coldest|el más frío]]', '[[the most cold|el más frío]]', '[[the colder|el más frío]]'],
          correctAnswer: 0,
          explanation: "[[Cold|Frío]] → [[the coldest|el más frío]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g14',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[This|Este]] [[is|es]] ____ ____ ____ [[place|lugar]] [[to|para]] [[visit|visitar]] [[in|en]] [[Europe|Europa]].',
          options: ['[[the most popular|el más popular]]', '[[the popularest|el más popular]]', '[[the popularst|el más popular]]'],
          correctAnswer: 'the most popular',
          explanation: "[[Popular|Popular]] = [[long|adjetivo largo]] → [[the most popular|el más popular]].",
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u47-l1-g15',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Superlatives',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS,
      questions: [
        {
          question: '[[The Pacific|El Pacífico]] [[is|es]] ____ ____ ____ [[ocean|océano]] [[in|en]] [[the world|el mundo]].',
          options: ['[[the deepest|el más profundo]]', '[[the most deep|el más profundo]]', '[[the deeper|el más profundo]]'],
          correctAnswer: 'the deepest',
          explanation: "[[Deep|Profundo]] → [[the deepest|el más profundo]] ([[short|adjetivo corto]]).",
        },
      ],
    },
    topicName: 'Grammar',
  },
];
