/**
 * Unidad 20 — Lección 1: Gramática (Module 2 Review)
 * 15 ejercicios: repaso Present Perfect, Past Continuous, for/since
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Module|Módulo]] [[2|2]] [[Review|Repaso]]';
const INSTRUCTIONS_FILL = 'Elige la forma correcta para cada frase.';
const INSTRUCTIONS_MULTIPLE = 'Elige la frase o la forma correcta.';
const INSTRUCTIONS_ORDER = 'Ordena las palabras para formar una oración correcta.';
const INSTRUCTIONS_TF = 'Indica si la afirmación es verdadera o falsa.';

export const UNIT_20_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'a2-u20-l1-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] ____ [[been|estado]] [[to|a]] [[Paris|París]] [[twice|dos veces]].',
          options: ['[[have|he]]', '[[has|ha]]', '[[went|fui]]'],
          correctAnswer: 'have',
          explanation: '[[Present Perfect|Presente Perfecto]] [[for|para]] [[experience|experiencia]]: [[have/has|he/ha]] + [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[watching|viendo]] [[TV|televisión]] [[when|cuando]] [[I|yo]] [[called|llamé]].',
          options: ['[[was|estaba]]', '[[were|estaban]]', '[[is|es]]'],
          correctAnswer: 'was',
          explanation: '[[Past Continuous|Pasado Continuo]]: [[was/were|estaba/estaban]] + [[-ing|-ando]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] [[lived|vivido]] [[here|aquí]] ____ [[five years|cinco años]].',
          options: ['[[for|durante]]', '[[since|desde]]', '[[ago|hace]]'],
          correctAnswer: 'for',
          explanation: '[[For|Durante]] + [[duration|duración]]; [[since|desde]] + [[point|punto]] [[in|en]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Have|¿Has]] [[you|tú]] ____ [[been|estado]] [[to|a]] [[Japan|Japón]]?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yesterday|ayer]]'],
          correctAnswer: 'ever',
          explanation: '[[Ever|Alguna vez]] [[in|en]] [[questions|preguntas]] [[about|sobre]] [[experiences|experiencias]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g5',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[went|fui]] [[to|a]] [[London|Londres]] ____ [[last year|el año pasado]].',
          options: ['[[have|he]]', '[[went|fui]]', '[[go|ir]]'],
          correctAnswer: 'went',
          explanation: '[[Past Simple|Pasado Simple]] [[with|con]] [[last year|el año pasado]] = [[specific|específico]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[I|Yo]] [[have|he]] [[already|ya]] [[finished|terminado]] [[my|mi]] [[homework|deberes]].',
            '[[I|Yo]] [[have|he]] [[yet|aún]] [[finished|terminado]] [[my|mi]] [[homework|deberes]].',
            '[[I|Yo]] [[have|he]] [[finished|terminado]] [[my|mi]] [[homework|deberes]] [[already|ya]].',
          ],
          correctAnswer: 0,
          explanation: '[[Already|Ya]] [[between|entre]] [[have|he]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[sentence|frase]]:',
          options: [
            '[[While|Mientras]] [[I|yo]] [[was|estaba]] [[walking|caminando]], [[I|yo]] [[saw|vi]] [[an|un]] [[accident|accidente]].',
            '[[While|Mientras]] [[I|yo]] [[walked|caminé]], [[I|yo]] [[saw|vi]] [[an|un]] [[accident|accidente]].',
            '[[When|Cuando]] [[I|yo]] [[walk|camino]], [[I|yo]] [[saw|vi]] [[an|un]] [[accident|accidente]].',
          ],
          correctAnswer: 0,
          explanation: '[[While|Mientras]] + [[Past Continuous|Pasado Continuo]]; [[short|Corta]] [[action|acción]] = [[Past Simple|Pasado Simple]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[What|Qué]] [[question|pregunta]] [[asks|pregunta]] [[about|sobre]] [[duration|duración]]?',
          options: [
            '[[How often|Con qué frecuencia]] [[do|haces]] [[you|tú]] [[exercise|ejercicio]]?',
            '[[How long|Cuánto tiempo]] [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?',
            '[[How many|Cuántos]] [[books|libros]] [[do|tienes]] [[you|tú]] [[have|tener]]?',
          ],
          correctAnswer: 1,
          explanation: '[[How long|Cuánto tiempo]] = [[duration|duración]] [[of|de]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g9',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Complete|Completa]]: "[[She|Ella]] [[has|ha]] ____ [[just|acabar de]] ____ [[arrived|llegado]]."',
          options: ['[[has|ha]]', '[[just|acabar de]]', '[[arrived|llegado]]'],
          correctAnswer: 1,
          explanation: '[[She has just arrived|Ella acaba de llegar]]. [[Just|Acabar de]] [[between|entre]] [[has|ha]] [[and|y]] [[past participle|participio pasado]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g10',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MULTIPLE,
      questions: [
        {
          question: '[[Which|Cuál]] [[sentence|frase]] [[is|es]] [[correct|correcta]]?',
          options: [
            '[[They|Ellos]] [[have|han]] [[lived|vivido]] [[here|aquí]] [[since|desde]] [[2019|2019]].',
            '[[They|Ellos]] [[have|han]] [[lived|vivido]] [[here|aquí]] [[for|durante]] [[2019|2019]].',
            '[[They|Ellos]] [[lived|vivieron]] [[here|aquí]] [[since|desde]] [[2019|2019]].',
          ],
          correctAnswer: 0,
          explanation: '[[Since|Desde]] + [[point|punto]] ([[2019|2019]]); [[Present Perfect|Presente Perfecto]] [[for|para]] [[duration|duración]] [[until|hasta]] [[now|ahora]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g11',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|a]] [[Japan|Japón]].',
      words: ['[[I|Yo]]', '[[have|he]]', '[[never|nunca]]', '[[been|estado]]', '[[to|a]]', '[[Japan|Japón]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g12',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[While|Mientras]] [[she|ella]] [[was|estaba]] [[cooking|cocinando]], [[the|el]] [[phone|teléfono]] [[rang|sonó]].',
      words: ['[[While|Mientras]]', '[[she|ella]]', '[[was|estaba]]', '[[cooking|cocinando]]', '[[the|el]]', '[[phone|teléfono]]', '[[rang|sonó]].'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g13',
    type: 'sentence-building',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_ORDER,
      correctSentence: '[[How long|Cuánto tiempo]] [[have|has]] [[you|tú]] [[lived|vivido]] [[here|aquí]]?',
      words: ['[[How long|Cuánto tiempo]]', '[[have|has]]', '[[you|tú]]', '[[lived|vivido]]', '[[here|aquí]]?'],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g14',
    type: 'true-false',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '[[Module 2|Módulo 2]] [[covers|cubre]] [[Present Perfect|Presente Perfecto]], [[Past Continuous|Pasado Continuo]], [[for/since|durante/desde]] [[and|y]] [[How|Cómo]] [[questions|preguntas]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Module 2|Módulo 2]] = [[experiences|experiencias]] [[and|y]] [[Present Perfect|Presente Perfecto]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-u20-l1-g15',
    type: 'true-false',
    level: 'A2',
    topic: 'Module 2 Review',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_TF,
      questions: [
        {
          question: '"[[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[Paris|París]] [[yesterday|ayer]]" [[is|es]] [[correct|correcto]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Present Perfect|Presente Perfecto]] [[not|no]] [[with|con]] [[specific|específico]] [[time|tiempo]]. [[Correct|Correcto]]: "[[I went to Paris yesterday|Fui a París ayer]]".',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
