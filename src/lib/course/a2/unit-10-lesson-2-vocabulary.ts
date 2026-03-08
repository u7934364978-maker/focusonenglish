/**
 * Unidad 10 — Lección 2: Vocabulario (Repaso Módulo 1)
 * 15 ejercicios: mix de unidades 1-9
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[Module 1 Review|Repaso Módulo 1]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada par correctamente.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';

export const UNIT_10_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u10-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[past|pasado]] [[of|de]] "[[buy|comprar]]"?',
          options: ['[[buyed|compré]]', '[[bought|compró]]', '[[buied|compré]]'],
          correctAnswer: 1,
          explanation: '[[Buy|Comprar]] → [[bought|compró]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[superlative|superlativo]] [[of|de]] "[[good|bueno]]"?',
          options: ['[[goodest|el mejor]]', '[[the best|el mejor]]', '[[the most good|el más bueno]]'],
          correctAnswer: 1,
          explanation: '[[Good|Bueno]] [[is|es]] [[irregular|irregular]]: [[the best|el mejor]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[adverb|adverbio]] [[of|de]] "[[quick|rápido]]"?',
          options: ['[[quick|rápido]]', '[[quickly|rápidamente]]', '[[quicker|más rápido]]'],
          correctAnswer: 1,
          explanation: '[[Quick|Rápido]] → [[quickly|rápidamente]]. [[Adjective|Adjetivo]] + -ly.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[preposition|preposición]] [[do we use|usamos]] [[for|para]] [[specific|hora]] [[time|específica]]?',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: 0,
          explanation: '[[At|A]] = [[at 7 o\'clock|a las 7 en punto]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[does|significa]] "[[into|dentro de]]" [[mean|significar]]?',
          options: ['[[movement|movimiento]] [[from|desde]] [[outside|fuera]] [[to|hacia]] [[inside|dentro]]', '[[movement|movimiento]] [[from|desde]] [[inside|dentro]] [[to|hacia]] [[outside|fuera]]', '[[movement|movimiento]] [[over|sobre]] [[a|una]] [[surface|superficie]]'],
          correctAnswer: 0,
          explanation: '[[Into|Dentro de]] = [[entering|entrando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[He|Él]] ____ [[a|un]] [[film|película]] [[yesterday|ayer]]." ([[see|ver]])',
          options: ['[[see|ve]]', '[[saw|vió]]', '[[seen|visto]]'],
          correctAnswer: 1,
          explanation: '[[See|Ver]] → [[saw|vió]]. [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[go|ir]]', right: '[[went|fui]]' },
        { id: 'p2', left: '[[tall|alto]]', right: '[[the tallest|el más alto]]' },
        { id: 'p3', left: '[[Monday|lunes]]', right: '[[on|en]]' },
        { id: 'p4', left: '[[enter|entrar]]', right: '[[into|en]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[good|bueno]]', right: '[[well|bien]]' },
        { id: 'p2', left: '[[7 o\'clock|7 en punto]]', right: '[[at|a]]' },
        { id: 'p3', left: '[[January|enero]]', right: '[[in|en]]' },
        { id: 'p4', left: '[[walk|caminar]] [[inside|dentro]]', right: '[[through|a través de]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[This|Este]] [[book|libro]] [[is|es]] ____ [[than|que]] [[that|ese]] [[one|uno]]. ([[interesting|interesante]])',
          options: ['[[interesting|interesante]]', '[[more interesting|más interesante]]', '[[most interesting|más interesante]]'],
          correctAnswer: '[[more interesting|más interesante]]',
          explanation: '[[Comparatives|Comparativos]]: [[long adjectives|adjetivos largos]] = [[more|más]] + [[adjective|adjetivo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[writes|escribe]] ____ [[and|y]] [[never|nunca]] [[makes|hace]] [[mistakes|errores]]. ([[careful|cuidadoso]])',
          options: ['[[careful|cuidadoso]]', '[[carefully|cuidadosamente]]', '[[carefuller|más cuidadoso]]'],
          correctAnswer: '[[carefully|cuidadosamente]]',
          explanation: '[[Careful|Cuidadoso]] → [[carefully|cuidadosamente]]. [[Adverb|Adverbio]] [[of|de]] [[manner|modo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[We|Nosotros]] [[go|vamos]] [[on|de]] [[holiday|vacaciones]] ____ [[August|agosto]].',
          options: ['[[at|a]]', '[[on|en]]', '[[in|en]]'],
          correctAnswer: '[[in|en]]',
          explanation: '[[In|En]] = [[months|meses]]. [[In August|En agosto]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] [[walked|caminaron]] ____ [[the|el]] [[forest|bosque]] [[to|para]] [[get|llegar]] [[to|al]] [[other|otro]] [[side|lado]].',
          options: ['[[into|en]]', '[[out of|de]]', '[[through|a través de]]', '[[across|a través de]]'],
          correctAnswer: '[[through|a través de]]',
          explanation: '[[Through|A través de]] = [[inside|dentro]] [[from|desde]] [[one|un]] [[end|extremo]] [[to|al]] [[other|otro]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[Wh-word|palabra Wh]] [[do we use|usamos]] [[for|para]] [[place|lugar]]?',
          options: ['[[What|Qué]]', '[[Where|Dónde]]', '[[When|Cuándo]]'],
          correctAnswer: 1,
          explanation: '[[Where|Dónde]] = [[asks|pregunta]] [[about|sobre]] [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[past|pasado]] [[of|de]] "[[make|hacer]]"?',
          options: ['[[maked|hizo]]', '[[made|hizo]]', '[[maded|hizo]]'],
          correctAnswer: 1,
          explanation: '[[Make|Hacer]] → [[made|hizo]]. [[Irregular verb|Verbo irregular]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u10-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 1 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[He|Él]] ____ [[out of|de]] [[the|el]] [[car|coche]]."',
          options: ['[[went|fue]]', '[[got|salió]]', '[[came|vino]]'],
          correctAnswer: 1,
          explanation: '[[Get out of|Salir de]] = [[leave|dejar]] [[a|un]] [[vehicle|vehículo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
