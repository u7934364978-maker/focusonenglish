/**
 * Unidad 14 — Lección 2: Vocabulario (Present Simple: I, You, We, They)
 * Ocio y tareas domésticas.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: ocio y tareas domésticas';
const TOPIC = 'Present Simple: I, You, We, They';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona la acción con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_14_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a1-u14-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[TV|la tele]] [[every|todas las]] [[evening|tardes]].',
        options: ['[[watch|veo]]', '[[watches|ve]]', '[[watching|viendo]]'],
        correctAnswer: 0,
        explanation: 'I watch TV. Watch = ver (televisión).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[We|Nosotros]] ____ [[the|la]] [[housework|limpieza]] [[on|los]] [[Saturdays|sábados]].',
        options: ['[[do|hacemos]]', '[[does|hace]]', '[[doing|haciendo]]'],
        correctAnswer: 0,
        explanation: 'We do the housework. Do housework = hacer las tareas.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Do|¿]] [[you|tú]] ____ [[music|música]]? [[Yes|Sí]], [[I|yo]] [[do|sí]].',
        options: ['[[like|te gusta]]', '[[likes|le gusta]]', '[[liking|gustando]]'],
        correctAnswer: 0,
        explanation: 'Do you like music? Like = gustar.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[cook|cocino]] [[dinner|cena]]. [[My|Mi]] [[husband|marido]] [[washes|lava]] [[the|los]] [[dishes|platos]].',
        options: ['[[cook|preparo]]', '[[cooks|prepara]]', '[[cooking|preparando]]'],
        correctAnswer: 0,
        explanation: 'I cook dinner. Cook = cocinar.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[They|Ellos]] ____ [[football|fútbol]] [[at|los]] [[weekends|fines de semana]].',
        options: ['[[play|juegan]]', '[[plays|juega]]', '[[playing|jugando]]'],
        correctAnswer: 0,
        explanation: 'They play football. Play = jugar.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[I|Yo]] ____ [[read|leo]] [[books|libros]] [[in|por]] [[the|la]] [[evening|tarde]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: 0,
        explanation: 'I don\'t read. Negativa con I.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: '[[watch TV|ver la tele]]', right: 'Ver la tele' },
        { id: 'p2', left: '[[do the housework|hacer las tareas domésticas]]', right: 'Hacer las tareas' },
        { id: 'p3', left: '[[cook dinner|cocinar la cena]]', right: 'Cocinar la cena' },
        { id: 'p4', left: '[[play football|jugar al fútbol]]', right: 'Jugar al fútbol' },
        { id: 'p5', left: '[[read books|leer libros]]', right: 'Leer libros' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la acción con su traducción.',
      pairs: [
        { id: 'p1', left: '[[wash the dishes|lavar los platos]]', right: 'Lavar los platos' },
        { id: 'p2', left: '[[clean the house|limpiar la casa]]', right: 'Limpiar la casa' },
        { id: 'p3', left: '[[listen to music|escuchar música]]', right: 'Escuchar música' },
        { id: 'p4', left: '[[go shopping|ir de compras]]', right: 'Ir de compras' },
        { id: 'p5', left: '[[meet friends|quedar con amigos]]', right: 'Quedar con amigos' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la pregunta con la respuesta.',
      pairs: [
        { id: 'p1', left: '[[Do you like music?|¿Te gusta la música?]]', right: '[[Yes, I do.|Sí.]]' },
        { id: 'p2', left: '[[Do you cook?|¿Cocinas?]]', right: '[[No, I don\'t.|No.]]' },
        { id: 'p3', left: '[[Do they play tennis?|¿Juegan al tenis?]]', right: '[[Yes, they do.|Sí.]]' },
        { id: 'p4', left: '[[Do we have time?|¿Tenemos tiempo?]]', right: '[[Yes, we do.|Sí.]]' },
        { id: 'p5', left: '[[Do you do housework?|¿Haces tareas domésticas?]]', right: '[[Yes, I do.|Sí.]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el hábito con su descripción.',
      pairs: [
        { id: 'p1', left: '[[watch TV|ver la tele]]', right: 'Ocio en casa' },
        { id: 'p2', left: '[[do the housework|hacer tareas]]', right: 'Tarea doméstica' },
        { id: 'p3', left: '[[play sport|practicar deporte]]', right: 'Actividad física' },
        { id: 'p4', left: '[[read|leer]]', right: 'Ocio tranquilo' },
        { id: 'p5', left: '[[cook|cocinar]]', right: 'Tarea en la cocina' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Do|¿]] ____ [[you|tú]] [[like|te gusta]] [[reading|leer]]?',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: 'do',
        acceptableAnswers: ['do'],
        explanation: 'Do you like...?',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[We|Nosotros]] ____ [[play|jugamos]] [[video games|videojuegos]]. [[We|Nosotros]] [[prefer|preferimos]] [[sport|deporte]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: "don't",
        acceptableAnswers: ["don't"],
        explanation: 'We don\'t play.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Do|¿]] [[they|ellos]] ____ [[clean|limpian]] [[the|la]] [[bathroom|baño]]? [[Yes|Sí]], [[they|ellos]] [[do|sí]].',
        options: ['[[clean|limpian]]', '[[cleans|limpia]]', '[[cleaning|limpiando]]'],
        correctAnswer: 'clean',
        acceptableAnswers: ['clean'],
        explanation: 'Do they clean? Verbo en infinitivo tras do.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] "[[Do you watch TV in the evening?|¿Ves la tele por la tarde?]]". [[You|Tú]] [[don\'t|no]] [[watch|ves]] [[TV|la tele]]. [[You|Tú]] ____.',
        options: ['[[Yes, I do.|Sí.]]', '[[No, I don\'t.|No.]]', '[[I am fine.|Estoy bien.]]'],
        correctAnswer: 1,
        explanation: 'No, I don\'t.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u14-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|si]] [[someone|alguien]] [[likes|le gusta]] [[cooking|cocinar]]. [[You|Tú]] ____.',
        options: ['[[Do you like cooking?|¿Te gusta cocinar?]]', '[[What time is it?|¿Qué hora es?]]', '[[Where do you work?|¿Dónde trabajas?]]'],
        correctAnswer: 0,
        explanation: 'Do you like cooking?',
      }],
    },
    topicName: 'Vocabulary',
  },
];
