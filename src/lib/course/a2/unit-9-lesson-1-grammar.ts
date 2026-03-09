/**
 * Unidad 9 — Lección 1: Gramática (Preposiciones de lugar y movimiento)
 * 15 ejercicios: into, out of, through, across
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Prepositions of Place and Movement|Preposiciones de lugar y movimiento]]: [[into|dentro de]], [[out of|fuera de]], [[through|a través de]], [[across|a través de]]';
const INSTRUCTIONS_FILL = 'Elige la preposición correcta (into, out of, through, across) para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_9_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u9-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[went|entró]] ____ [[the|la]] [[room|habitación]] [[and|y]] [[closed|cerró]] [[the|la]] [[door|puerta]].',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: 'into',
          explanation: '[[Into|Dentro de]] = [[movement|movimiento]] [[from|desde]] [[outside|fuera]] [[to|hacia]] [[inside|dentro]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[ran|corrió]] ____ [[the|la]] [[building|edificio]] [[when|cuando]] [[he|él]] [[heard|oyó]] [[the|la]] [[fire alarm|alarma de incendios]].',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: 'out of',
          explanation: '[[Out of|Fuera de]] = [[movement|movimiento]] [[from|desde]] [[inside|dentro]] [[to|hacia]] [[outside|fuera]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[walked|caminamos]] ____ [[the|el]] [[park|parque]] [[to|para]] [[get|llegar]] [[to|a]] [[the|el]] [[other|otro]] [[side|lado]].',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: 'through',
          explanation: '[[Through|A través de]] = [[movement|movimiento]] [[from|desde]] [[one|un]] [[side|lado]] [[to|al]] [[other|otro]] [[inside|dentro]] [[something|algo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[The|El]] [[cat|gato]] [[ran|corrió]] ____ [[the|la]] [[street|calle]] [[to|para]] [[the|el]] [[other|otro]] [[side|lado]].',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: 'across',
          explanation: '[[Across|A través de]] = [[movement|movimiento]] [[from|desde]] [[one|un]] [[side|lado]] [[to|al]] [[other|otro]] [[of|de]] [[a|una]] [[surface|superficie]] ([[street|calle]], [[bridge|puente]]).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[put|puse]] [[the|los]] [[books|libros]] ____ [[my|mi]] [[bag|bolso]].',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: 'into',
          explanation: '[[Into|Dentro de]] = [[movement|movimiento]] [[towards|hacia]] [[inside|dentro]]. [[Put into|Poner dentro de]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[drove|condujeron]] ____ [[the|el]] [[tunnel|túnel]] [[to|para]] [[reach|alcanzar]] [[the|la]] [[city|ciudad]].',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: 'through',
          explanation: '[[Through|A través de]] = [[inside|dentro]] [[something|algo]] [[from|desde]] [[one|un]] [[end|extremo]] [[to|al]] [[other|otro]]. [[Through the tunnel|A través del túnel]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[She|Ella]] [[went|entró]] [[in|en]] [[the|la]] [[room|habitación]].',
            '[[She|Ella]] [[went|entró]] [[into|dentro de]] [[the|la]] [[room|habitación]].',
            '[[She|Ella]] [[went|entró]] [[through|a través de]] [[the|la]] [[room|habitación]].',
          ],
          correctAnswer: 1,
          explanation: '[[Into|Dentro de]] = [[movement|movimiento]] [[entering|entrando]]. [[Go into|Entrar en]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|la]] [[difference|diferencia]] [[between|entre]] "[[through|a través de]]" [[and|y]] "[[across|a través de]]"?',
          options: [
            '[[Through|A través de]] = [[inside|dentro]] [[something|algo]]; [[across|a través de]] = [[over|sobre]] [[a|una]] [[surface|superficie]]',
            '[[They|Son]] [[are|iguales]] [[same|idénticas]]',
            '[[Across|A través de]] = [[inside|dentro]]; [[through|a través de]] = [[outside|fuera]]',
          ],
          correctAnswer: 0,
          explanation: '[[Through|A través de]] = [[through the forest|a través del bosque]]. [[Across|A través de]] = [[across the road|al otro lado de la carretera]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[He|Él]] [[got|salió]] ____ [[the|el]] [[car|coche]] [[and|y]] [[walked|caminó]] [[away|lejos]]."',
          options: ['[[out of|de]]', '[[into|en]]', '[[through|a través de]]'],
          correctAnswer: 0,
          explanation: '[[Get out of|Salir de]] = [[leave|dejar]] [[a|un]] [[vehicle|vehículo]] [[or|o]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[We|Nosotros]] [[swam|nadamos]] ____ [[the|el]] [[river|río]]."',
          options: ['[[into|dentro de]]', '[[out of|fuera de]]', '[[across|a través de]]'],
          correctAnswer: 2,
          explanation: '[[Across|A través de]] = [[from|desde]] [[one|un]] [[side|lado]] [[to|al]] [[other|otro]] [[of|de]] [[a|una]] [[surface|superficie]]. [[Across the river|Al otro lado del río]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[She|Ella]] [[went|entró]] [[into|en]] [[the|la]] [[shop|tienda]] [[to|para]] [[buy|comprar]] [[bread|pan]].',
      words: ['[[went|entró]]', '[[She|Ella]]', '[[into|en]]', '[[the|la]]', '[[shop|tienda]]', '[[to|para]]', '[[buy|comprar]]', '[[bread|pan]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[He|Él]] [[ran|corrió]] [[out of|de]] [[the|la]] [[building|edificio]] [[when|cuando]] [[the|la]] [[alarm|alarma]] [[sounded|sonó]].',
      words: ['[[ran|corrió]]', '[[He|Él]]', '[[out of|de]]', '[[the|la]]', '[[building|edificio]]', '[[when|cuando]]', '[[the|la]]', '[[alarm|alarma]]', '[[sounded|sonó]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[We|Nosotros]] [[walked|caminamos]] [[through|a través de]] [[the|el]] [[forest|bosque]] [[to|para]] [[reach|alcanzar]] [[the|el]] [[lake|lago]].',
      words: ['[[walked|caminamos]]', '[[We|Nosotros]]', '[[through|a través de]]', '[[the|el]]', '[[forest|bosque]]', '[[to|para]]', '[[reach|alcanzar]]', '[[the|el]]', '[[lake|lago]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[Go|Entrar]] [[into|en]]" [[and|y]] "[[go|entrar]] [[in|en]]" [[mean|significan]] [[the same|lo mismo]] [[in|en]] [[English|inglés]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Both|Ambos]] [[express|expresan]] [[movement|movimiento]] [[entering|entrando]]. [[Go into the room|Entrar en la habitación]] = [[go in the room|entrar en la habitación]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u9-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Prepositions Place Movement',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[We use|Usamos]] "[[across|a través de]]" [[for|para]] [[crossing|cruzar]] [[a|una]] [[road|carretera]] [[or|o]] [[bridge|puente]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Walk across the road|Caminar al otro lado de la carretera]]. [[Across|A través de]] = [[over|sobre]] [[a|una]] [[surface|superficie]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
