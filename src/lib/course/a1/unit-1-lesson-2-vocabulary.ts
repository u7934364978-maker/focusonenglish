/**
 * Unidad 1 — Lección 2: Vocabulario (presentación, saludos, datos personales)
 * 15 ejercicios: 6 elección múltiple, 4 emparejar, 3 completar huecos, 2 elección contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: presentación';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';
const INSTRUCTIONS_CTX = 'Elige la palabra correcta para el contexto.';

export const UNIT_1_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: Elección múltiple (palabra correcta) ─────────────────────────────
  {
    id: 'a1-u1-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "nombre" [[in|en]] [[English|inglés]]?',
          options: ['[[age|edad]]', '[[name|nombre]]', '[[city|ciudad]]', '[[country|país]]'],
          correctAnswer: 1,
          explanation: '[[Name|Nombre]] = [[name|nombre]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Tengo|I have]] [[thirty|treinta]] [[years|años]]" → [[I|Yo]] [[am|tengo]] [[thirty|treinta]] ____ [[old|de edad]].',
          options: ['[[year|año]]', '[[years|años]]', '[[years old|años]]', '[[age|edad]]'],
          correctAnswer: 2,
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[years old|años (de edad)]]" [[for|para]] [[age|edad]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[means|significa]] "de" [[when|cuando]] [[we|nosotros]] [[talk|hablamos]] [[about|sobre]] [[origin|origen]]?',
          options: ['[[to|a]]', '[[from|de]]', '[[in|en]]', '[[at|en]]'],
          correctAnswer: 1,
          explanation: '"[[I am from Madrid|Soy de Madrid]]" → [[from|de]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[do|hacemos]] [[we|nosotros]] [[say|decir]] [[to|para]] [[greet|saludar]] [[someone|alguien]] [[in|por]] [[the|la]] [[morning|mañana]]?',
          options: ['[[Hello|Hola]]', '[[Good morning|Buenos días]]', '[[Goodbye|Adiós]]', '[[Good night|Buenas noches]]'],
          correctAnswer: 1,
          explanation: '[[Good morning|Buenos días]] = [[greeting|saludo]] [[in|por]] [[the|la]] [[morning|mañana]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Which|Cuál]] [[word|palabra]] [[means|significa]] "trabajo" [[or|o]] "profesión"?',
          options: ['[[name|nombre]]', '[[age|edad]]', '[[job|trabajo]]', '[[city|ciudad]]'],
          correctAnswer: 2,
          explanation: '[[Job|Trabajo]] = [[job|trabajo]] [[or|o]] [[profession|profesión]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Encantado|Nice]] [[to|de]] [[meet|conocer]] [[you|a ti]]" [[in|en]] [[English|inglés]] [[is|es]]:',
          options: ['[[Hello|Hola]]', '[[Goodbye|Adiós]]', '[[Nice to meet you|Encantado de conocerte]]', '[[How are you?|¿Cómo estás?]]'],
          correctAnswer: 2,
          explanation: '[[Nice to meet you|Encantado de conocerte]] [[is|es]] [[the|la]] [[phrase|frase]] [[for|para]] [[first|primera]] [[meeting|reunión]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: Emparejar (palabra–traducción) ──────────────────────────────────
  {
    id: 'a1-u1-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Hello|Hola]]', right: 'Hola' },
        { id: 'p2', left: '[[Name|Nombre]]', right: 'Nombre' },
        { id: 'p3', left: '[[Friend|Amigo]]', right: 'Amigo' },
        { id: 'p4', left: '[[Student|Estudiante]]', right: 'Estudiante' },
        { id: 'p5', left: '[[Teacher|Profesor]]', right: 'Profesor' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[From|De]]', right: 'De (origen)' },
        { id: 'p2', left: '[[City|Ciudad]]', right: 'Ciudad' },
        { id: 'p3', left: '[[Country|País]]', right: 'País' },
        { id: 'p4', left: '[[Years old|años]]', right: 'años (edad)' },
        { id: 'p5', left: '[[Goodbye|Adiós]]', right: 'Adiós' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Good morning|Buenos días]]', right: 'Buenos días' },
        { id: 'p2', left: '[[Good afternoon|Buenas tardes]]', right: 'Buenas tardes' },
        { id: 'p3', left: '[[Good evening|Buenas tardes/noches]]', right: 'Buenas tardes' },
        { id: 'p4', left: '[[Good night|Buenas noches]]', right: 'Buenas noches' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[My|Mi]]', right: 'Mi' },
        { id: 'p2', left: '[[Your|Tu]]', right: 'Tu' },
        { id: 'p3', left: '[[Happy|Feliz]]', right: 'Feliz' },
        { id: 'p4', left: '[[Nice|Encantado/agradable]]', right: 'Encantado' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: Completar huecos (vocabulario) ──────────────────────────────────
  {
    id: 'a1-u1-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[is|es]] [[Ana|Ana]].',
          options: ['[[name|nombre]]', '[[age|edad]]', '[[city|ciudad]]'],
          correctAnswer: '[[name|nombre]]',
          explanation: '[[We|Nosotros]] [[say|decimos]] "[[My name is|Mi nombre es]]" + [[name|nombre]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[am|soy]] ____ [[Madrid|Madrid]].',
          options: ['[[from|de]]', '[[in|en]]', '[[at|en]]'],
          correctAnswer: '[[from|de]]',
          explanation: '[[Origin|Origen]]: "[[I am from|Soy de]]" + [[place|lugar]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Context|Contexto]]: [[You|Tú]] [[teach|enseñas]] [[English|inglés]] [[at|en]] [[a|una]] [[school|escuela]]. [[Complete|Completa]]: [[I|Yo]] [[am|soy]] [[a|un]] ____.',
          options: ['[[teacher|profesor]]', '[[student|estudiante]]', '[[doctor|médico]]'],
          correctAnswer: '[[teacher|profesor]]',
          explanation: '[[If|Si]] [[you|tú]] [[teach|enseñas]], [[you are a teacher|eres profesor]]. [[Correct|Correcto]]: "[[I am a teacher|Soy profesor]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: Elección múltiple (contexto) ───────────────────────────────────
  {
    id: 'a1-u1-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Someone|Alguien]] [[says|dice]] "[[Hi|Hola]]!" [[when|cuando]] [[they|ellos]] [[see|ven]] [[you|a ti]]. [[You|Tú]] [[reply|respondes]]:',
          options: ['[[Goodbye|Adiós]]', '[[Hi or Hello|Hola]]', '[[Good night|Buenas noches]]', '[[My name is|Mi nombre es]]'],
          correctAnswer: 1,
          explanation: '[[We|Nosotros]] [[reply|respondemos]] [[with|con]] [[the same|el mismo]] [[greeting|saludo]]: [[Hi or Hello|Hola]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u1-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Personal Info',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Context|Contexto]]: [[You|Tú]] [[meet|conoces]] [[a|una]] [[person|persona]] [[for|por]] [[the first time|la primera vez]]. [[The best|La mejor]] [[phrase|frase]] [[to|para]] [[say|decir]] [[after|después]] [[introductions|presentaciones]] [[is|es]]:',
          options: ['[[Goodbye|Adiós]]', '[[Nice to meet you|Encantado de conocerte]]', '[[I am twenty|Tengo veinte]]', '[[From Madrid|De Madrid]]'],
          correctAnswer: 1,
          explanation: '[[Nice to meet you|Encantado de conocerte]] [[is|es]] [[used|usado]] [[after|después]] [[introductions|presentaciones]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
