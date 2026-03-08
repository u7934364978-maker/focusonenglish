/**
 * Unidad 9 — Lección 2: Vocabulario (Preposiciones de lugar y movimiento)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Prepositions of Place and Movement|Preposiciones de lugar y movimiento]]';
const INSTRUCTIONS_MC = 'Elige la preposición correcta para cada frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada verbo con la preposición correcta.';
const INSTRUCTIONS_FILL = 'Completa la frase con la preposición correcta: into, out of, through, across.';

export const UNIT_9_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u9-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[into|dentro de]]" [[mean|significar]]?',
          options: ['[[movement|movimiento]] [[from|desde]] [[outside|fuera]] [[to|hacia]] [[inside|dentro]]', '[[movement|movimiento]] [[from|desde]] [[inside|dentro]] [[to|hacia]] [[outside|fuera]]', '[[movement|movimiento]] [[over|sobre]] [[a|una]] [[surface|superficie]]'],
          correctAnswer: 0,
          explanation: '[[Into|Dentro de]] = [[entering|entrando]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[out of|fuera de]]" [[mean|significar]]?',
          options: ['[[movement|movimiento]] [[to|hacia]] [[inside|dentro]]', '[[movement|movimiento]] [[from|desde]] [[inside|dentro]] [[to|hacia]] [[outside|fuera]]', '[[movement|movimiento]] [[through|a través de]]'],
          correctAnswer: 1,
          explanation: '[[Out of|Fuera de]] = [[leaving|saliendo]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[through|a través de]]" [[mean|significar]]?',
          options: ['[[from|desde]] [[one|un]] [[side|lado]] [[to|al]] [[other|otro]] [[inside|dentro]] [[something|algo]]', '[[over|sobre]] [[a|una]] [[surface|superficie]]', '[[into|dentro de]] [[something|algo]]'],
          correctAnswer: 0,
          explanation: '[[Through|A través de]] = [[from|desde]] [[one|un]] [[end|extremo]] [[to|al]] [[other|otro]] [[inside|dentro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[across|a través de]]" [[mean|significar]]?',
          options: ['[[from|desde]] [[inside|dentro]] [[to|hacia]] [[outside|fuera]]', '[[from|desde]] [[one|un]] [[side|lado]] [[to|al]] [[other|otro]] [[of|de]] [[a|una]] [[surface|superficie]]', '[[into|dentro de]] [[something|algo]]'],
          correctAnswer: 1,
          explanation: '[[Across|A través de]] = [[over|sobre]] [[a|una]] [[surface|superficie]] ([[road|carretera]], [[bridge|puente]], [[river|río]]).',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[She|Ella]] [[went|entró]] ____ [[the|la]] [[shop|tienda]]."',
          options: ['[[into|en]]', '[[out of|de]]', '[[through|a través de]]'],
          correctAnswer: 0,
          explanation: '[[Go into|Entrar en]] = [[enter|entrar]] [[a|un]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Walk|Caminar]] ____ [[the|el]] [[forest|bosque]]" [[needs|necesita]] [[which|cuál]] [[preposition|preposición]]?',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]'],
          correctAnswer: 2,
          explanation: '[[Through|A través de]] = [[inside|dentro]] [[from|desde]] [[one|un]] [[end|extremo]] [[to|al]] [[other|otro]]. [[Through the forest|A través del bosque]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[go|ir]] [[enter|entrar]]', right: '[[into|en]]' },
        { id: 'p2', left: '[[get|salir]] [[leave|dejar]]', right: '[[out of|de]]' },
        { id: 'p3', left: '[[walk|caminar]] [[inside|dentro]]', right: '[[through|a través de]]' },
        { id: 'p4', left: '[[run|correr]] [[over|sobre]] [[surface|superficie]]', right: '[[across|a través de]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[the room|la habitación]]', right: '[[into|en]] / [[out of|de]]' },
        { id: 'p2', left: '[[the tunnel|el túnel]]', right: '[[through|a través de]]' },
        { id: 'p3', left: '[[the street|la calle]]', right: '[[across|a través de]]' },
        { id: 'p4', left: '[[the river|el río]]', right: '[[across|a través de]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[got|salió]] ____ [[the|el]] [[car|coche]] [[and|y]] [[walked|caminó]] [[to|a]] [[the|la]] [[shop|tienda]].',
          options: ['[[into|en]]', '[[out of|de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: '[[out of|de]]',
          explanation: '[[Get out of|Salir de]] = [[leave|dejar]] [[a|un]] [[vehicle|vehículo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[drove|condujimos]] ____ [[the|el]] [[tunnel|túnel]] [[and|y]] [[reached|llegamos]] [[the|la]] [[city|ciudad]].',
          options: ['[[into|en]]', '[[out of|de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: '[[through|a través de]]',
          explanation: '[[Through|A través de]] = [[inside|dentro]] [[from|desde]] [[one|un]] [[end|extremo]] [[to|al]] [[other|otro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[The|El]] [[children|niños]] [[ran|corrieron]] ____ [[the|la]] [[street|calle]] [[to|para]] [[the|el]] [[other|otro]] [[side|lado]].',
          options: ['[[into|en]]', '[[out of|de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: '[[across|a través de]]',
          explanation: '[[Across|A través de]] = [[over|sobre]] [[a|una]] [[surface|superficie]]. [[Across the street|Al otro lado de la calle]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[put|puso]] [[the|los]] [[keys|llaves]] ____ [[her|su]] [[pocket|bolsillo]].',
          options: ['[[into|en]]', '[[out of|de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: '[[into|en]]',
          explanation: '[[Put into|Poner en]] = [[movement|movimiento]] [[towards|hacia]] [[inside|dentro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[They|Ellos]] ____ ____ ____ [[the|el]] [[building|edificio]] [[when|cuando]] [[the|la]] [[fire|fuego]] [[started|empezó]]."',
          options: ['[[ran|corrieron]] [[into|en]]', '[[ran|corrieron]] [[out of|de]]', '[[walked|caminaron]] [[through|a través de]]'],
          correctAnswer: 1,
          explanation: '[[Run out of|Salir corriendo de]] = [[escape|escapar]] [[from|desde]] [[inside|dentro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[We|Nosotros]] [[swam|nadamos]] ____ [[the|el]] [[lake|lago]]."',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
          correctAnswer: 2,
          explanation: '[[Across|A través de]] = [[from|desde]] [[one|un]] [[side|lado]] [[to|al]] [[other|otro]]. [[Swim across the lake|Nadar al otro lado del lago]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u9-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[The|El]] [[train|tren]] [[went|fue]] ____ [[the|el]] [[tunnel|túnel]]."',
          options: ['[[into|dentro de]]', '[[through|a través de]]', '[[out of|fuera de]]'],
          correctAnswer: 1,
          explanation: '[[Through|A través de]] = [[inside|dentro]] [[from|desde]] [[one|un]] [[end|extremo]] [[to|al]] [[other|otro]]. [[Through the tunnel|A través del túnel]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
