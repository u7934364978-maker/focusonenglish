import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: verbos de rutina';
const INSTRUCTIONS_MC = 'Elige el verbo correcto para cada definición o contexto.';
const INSTRUCTIONS_MATCH = 'Relaciona cada verbo en inglés con su traducción al español.';
const INSTRUCTIONS_FILL = 'Completa la frase con el verbo correcto en presente simple.';
const INSTRUCTIONS_CTX = 'Elige el verbo correcto para el contexto.';

export const UNIT_5_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: Elección múltiple (verbo correcto) ────────────────────────────────
  {
    id: 'a1-u5-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[verb|verbo]] [[means|significa]] [[doing your job|hacer tu trabajo]]?',
          options: ['[[sleep|dormir]]', '[[play|jugar]]', '[[work|trabajar]]', '[[eat|comer]]'],
          correctAnswer: 2,
          explanation: '"[[Work|Trabajar]]" [[means|significa]] [[to do your job|hacer tu trabajo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[You|Tú]] [[do|haces]] [[this|esto]] [[at night|por la noche]] [[to|para]] [[rest|descansar]]. [[Which|Cuál]] [[verb|verbo]] [[is it|es]]?',
          options: ['[[drink|beber]]', '[[study|estudiar]]', '[[come|venir]]', '[[sleep|dormir]]'],
          correctAnswer: 3,
          explanation: '"[[Sleep|Dormir]]" [[means|significa]] [[to rest|descansar]] [[during the night|durante la noche]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[You|Tú]] [[do|haces]] [[this|esto]] [[at|a la]] [[mealtime|hora de comer]]. [[Which|Cuál]] [[verb|verbo]] [[is it|es]]?',
          options: ['[[go|ir]]', '[[eat|comer]]', '[[wake up|despertarse]]', '[[study|estudiar]]'],
          correctAnswer: 1,
          explanation: '"[[Eat|Comer]]" [[means|significa]] [[to take food|tomar alimentos]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Students|Los estudiantes]] [[do|hacen]] [[this|esto]] [[to|para]] [[learn|aprender]] [[and|y]] [[prepare|preparar]] [[for|para]] [[exams|los exámenes]]. [[Which|Cuál]] [[verb|verbo]] [[is it|es]]?',
          options: ['[[play|jugar]]', '[[drink|beber]]', '[[study|estudiar]]', '[[get up|levantarse]]'],
          correctAnswer: 2,
          explanation: '"[[Study|Estudiar]]" [[means|significa]] [[to learn|aprender]] [[reading|leyendo]] [[and|y]] [[practicing|practicando]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[You|Tú]] [[are|estás]] [[thirsty|con sed]]. [[Which|Cuál]] [[verb|verbo]] [[describes|describe]] [[what|lo que]] [[you|tú]] [[do|haces]]?',
          options: ['[[sleep|dormir]]', '[[work|trabajar]]', '[[come|venir]]', '[[drink|beber]]'],
          correctAnswer: 3,
          explanation: '"[[Drink|Beber]]" [[means|significa]] [[to take a liquid|tomar un líquido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[Children|Los niños]] [[do|hacen]] [[this|esto]] [[with|con]] [[a|un]] [[ball|balón]] [[or|o]] [[a board game|un juego de mesa]] [[for|para]] [[fun|divertirse]]. [[Which|Cuál]] [[verb|verbo]] [[is it|es]]?',
          options: ['[[go|ir]]', '[[eat|comer]]', '[[wake up|despertarse]]', '[[play|jugar]]'],
          correctAnswer: 3,
          explanation: '"[[Play|Jugar]]" [[means|significa]] [[to do an activity|hacer una actividad]] [[for fun|por diversión]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: Emparejar (verbo–traducción) ─────────────────────────────────────
  {
    id: 'a1-u5-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Work|Trabajar]]', right: 'Trabajar' },
        { id: 'p2', left: '[[Study|Estudiar]]', right: 'Estudiar' },
        { id: 'p3', left: '[[Eat|Comer]]', right: 'Comer' },
        { id: 'p4', left: '[[Drink|Beber]]', right: 'Beber' },
        { id: 'p5', left: '[[Sleep|Dormir]]', right: 'Dormir' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Play|Jugar]]', right: 'Jugar' },
        { id: 'p2', left: '[[Wake up|Despertarse]]', right: 'Despertarse' },
        { id: 'p3', left: '[[Get up|Levantarse]]', right: 'Levantarse' },
        { id: 'p4', left: '[[Go|Ir]]', right: 'Ir' },
        { id: 'p5', left: '[[Come|Venir]]', right: 'Venir' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[I work.|Yo trabajo.]]', right: 'Yo trabajo.' },
        { id: 'p2', left: '[[She studies.|Ella estudia.]]', right: 'Ella estudia.' },
        { id: 'p3', left: '[[He eats.|Él come.]]', right: 'Él come.' },
        { id: 'p4', left: '[[They drink.|Ellos beben.]]', right: 'Ellos beben.' },
        { id: 'p5', left: '[[We sleep.|Nosotros dormimos.]]', right: 'Nosotros dormimos.' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[She eats breakfast.|Ella desayuna.]]', right: 'Ella desayuna.' },
        { id: 'p2', left: '[[He drinks coffee.|Él bebe café.]]', right: 'Él bebe café.' },
        { id: 'p3', left: '[[They go to school.|Ellos van a la escuela.]]', right: 'Ellos van a la escuela.' },
        { id: 'p4', left: '[[I wake up early.|Yo me despierto temprano.]]', right: 'Yo me despierto temprano.' },
        { id: 'p5', left: '[[He comes home.|Él llega a casa.]]', right: 'Él llega a casa.' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: Completar huecos (vocabulario) ──────────────────────────────────
  {
    id: 'a1-u5-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] ____ [[every|todas las]] [[mornings|mañanas]] [[at|a las]] [[seven|siete]].',
          options: ['[[wakes up|se despierta]]', '[[goes|va]]', '[[drinks|bebe]]'],
          correctAnswer: '[[wakes up|se despierta]]',
          explanation: '"[[Wake up|Despertarse]]" + "[[s|s]]" [[for|para]] "[[she|ella]]": "[[wakes up|se despierta]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[They|Ellos]] ____ [[lunch|el almuerzo]] [[together|juntos]] [[every day|todos los días]].',
          options: ['[[sleep|duermen]]', '[[eat|comen]]', '[[study|estudian]]'],
          correctAnswer: '[[eat|comen]]',
          explanation: '"[[Eat|Comer]]" [[with|con]] "[[they|ellos]]" [[uses|usa]] [[the base form|la forma base]]: "[[eat|comen]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] ____ [[to work|al trabajo]] [[by|en]] [[bus|autobús]] [[every|todos los]] [[mornings|días]].',
          options: ['[[comes|viene]]', '[[plays|juega]]', '[[goes|va]]'],
          correctAnswer: '[[goes|va]]',
          explanation: '"[[Go|Ir]]" + "[[es|es]]" [[for|para]] "[[he|él]]": "[[goes|va]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: Elección múltiple (contexto) ────────────────────────────────────
  {
    id: 'a1-u5-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Ana|Ana]] [[is|es]] [[a student|una estudiante]]. [[Every evening|Todas las tardes]], [[she|ella]] ____ [[for|para]] [[her exams|sus exámenes]].',
          options: ['[[sleeps|duerme]]', '[[plays|juega]]', '[[studies|estudia]]', '[[drinks|bebe]]'],
          correctAnswer: 2,
          explanation: '[[A student|Una estudiante]] [[prepares for exams|se prepara para los exámenes]] [[by|estudiando]]: "[[studies|estudia]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u5-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Daily Routines',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [
        {
          question: '[[Every morning|Todas las mañanas]], [[Pedro|Pedro]] [[opens his eyes|abre los ojos]] [[and|y]] [[gets out of bed|sale de la cama]]. [[He|Él]] ____ [[and|y]] [[gets up|se levanta]].',
          options: ['[[eats|come]]', '[[works|trabaja]]', '[[wakes up|se despierta]]', '[[goes|va]]'],
          correctAnswer: 2,
          explanation: '[[Opening your eyes|Abrir los ojos]] [[and getting out of bed|y salir de la cama]] [[is|es]] [[waking up|despertarse]]: "[[wakes up|se despierta]]".',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
