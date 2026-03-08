/**
 * Unidad 15 — Lección 2: Vocabulario (Present Simple: He, She, It)
 * Hábitos de animales y rutinas profesionales.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: rutinas (he/she/it) y hábitos de animales';
const TOPIC = 'Present Simple: He, She, It';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona con su descripción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_15_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a1-u15-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[She|Ella]] ____ [[at|a]] [[seven|siete]] [[every|todas las]] [[morning|mañanas]].',
        options: ['[[wakes up|se levanta]]', '[[wake up|levantarse]]', '[[waking up|levantándose]]'],
        correctAnswer: 0,
        explanation: 'She wakes up. 3.ª persona: wake → wakes.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] ____ [[sleeps|duerme]] [[in|en]] [[the|la]] [[day|día]] [[and|y]] [[hunts|caza]] [[at|por]] [[night|noche]].',
        options: ['[[cat|gato]]', '[[owl|búho]]', '[[dog|perro]]'],
        correctAnswer: 1,
        explanation: 'Owls sleep by day and hunt at night.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[He|Él]] ____ [[reports|informes]] [[every|cada]] [[week|semana]].',
        options: ['[[writes|escribe]]', '[[write|escribir]]', '[[writing|escribiendo]]'],
        correctAnswer: 0,
        explanation: 'He writes. Write → writes (con -s).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|La]] ____ [[barks|ladra]] [[when|cuando]] [[it|él]] [[sees|ve]] [[a|un]] [[stranger|desconocido]].',
        options: ['[[dog|perro]]', '[[cat|gato]]', '[[bird|pájaro]]'],
        correctAnswer: 0,
        explanation: 'The dog barks. Dog = perro.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[My|Mi]] ____ [[starts|empieza]] [[work|trabajo]] [[at|a]] [[eight|ocho]]. [[She|Ella]] [[is|es]] [[a|una]] [[nurse|enfermera]].',
        options: ['[[sister|hermana]]', '[[brother|hermano]]', '[[father|padre]]'],
        correctAnswer: 0,
        explanation: 'My sister. She = hermana.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] ____ [[doesn\'t|no]] [[eat|come]] [[meat|carne]]. [[It|Él]] [[eats|come]] [[grass|hierba]].',
        options: ['[[cat|gato]]', '[[cow|vaca]]', '[[dog|perro]]'],
        correctAnswer: 1,
        explanation: 'The cow eats grass.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el animal con lo que hace.',
      pairs: [
        { id: 'p1', left: '[[dog|perro]]', right: '[[barks|ladra]]' },
        { id: 'p2', left: '[[cat|gato]]', right: '[[meows|maúlla]]' },
        { id: 'p3', left: '[[bird|pájaro]]', right: '[[flies|vuela]]' },
        { id: 'p4', left: '[[fish|pez]]', right: '[[swims|nada]]' },
        { id: 'p5', left: '[[horse|caballo]]', right: '[[runs|corre]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la persona con su rutina profesional.',
      pairs: [
        { id: 'p1', left: '[[teacher|profesor/a]]', right: '[[teaches|enseña]]' },
        { id: 'p2', left: '[[doctor|médico/a]]', right: '[[helps patients|ayuda a pacientes]]' },
        { id: 'p3', left: '[[nurse|enfermero/a]]', right: '[[works in a hospital|trabaja en un hospital]]' },
        { id: 'p4', left: '[[engineer|ingeniero/a]]', right: '[[designs|diseña]]' },
        { id: 'p5', left: '[[chef|cocinero/a]]', right: '[[cooks|cuece]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la pregunta con la respuesta.',
      pairs: [
        { id: 'p1', left: '[[Does he get up early?|¿Se levanta temprano?]]', right: '[[Yes, he does.|Sí.]]' },
        { id: 'p2', left: '[[Does she work on Sunday?|¿Trabaja el domingo?]]', right: '[[No, she doesn\'t.|No.]]' },
        { id: 'p3', left: '[[Does the cat like milk?|¿Al gato le gusta la leche?]]', right: '[[Yes, it does.|Sí.]]' },
        { id: 'p4', left: '[[Does your brother study?|¿Tu hermano estudia?]]', right: '[[Yes, he does.|Sí.]]' },
        { id: 'p5', left: '[[Does Maria cook?|¿María cocina?]]', right: '[[No, she doesn\'t.|No.]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el verbo en 3.ª persona con el infinitivo.',
      pairs: [
        { id: 'p1', left: '[[goes|va]]', right: '[[go|ir]]' },
        { id: 'p2', left: '[[watches|ve]]', right: '[[watch|ver]]' },
        { id: 'p3', left: '[[studies|estudia]]', right: '[[study|estudiar]]' },
        { id: 'p4', left: '[[has|tiene]]', right: '[[have|tener]]' },
        { id: 'p5', left: '[[finishes|termina]]', right: '[[finish|terminar]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[She|Ella]] ____ [[breakfast|desayuno]] [[at|a]] [[eight|ocho]].',
        options: ['[[have|tener]]', '[[has|tiene]]', '[[having|teniendo]]'],
        correctAnswer: 'has',
        acceptableAnswers: ['has'],
        explanation: 'She has breakfast. Have → has en 3.ª persona.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] ____ [[like|le gusta]] [[cooking|cocinar]]. [[He|Él]] [[eats|come]] [[in|en]] [[restaurants|restaurantes]].',
        options: ['[[don\'t|no]]', '[[doesn\'t|no]]', '[[not|no]]'],
        correctAnswer: "doesn't",
        acceptableAnswers: ["doesn't"],
        explanation: 'He doesn\'t like.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Does|¿]] ____ [[your|tu]] [[mother|madre]] [[work|trabaja]]? [[Yes|Sí]], [[she|ella]] [[does|sí]].',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 'does',
        acceptableAnswers: ['does'],
        explanation: 'Does your mother work?',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|describir]] [[describe|la]] [[your|rutina]] [[sister\'s|de tu]] [[routine|hermana]]. [[You|Tú]] ____.',
        options: ['[[She gets up at seven. She has breakfast. She goes to work.|Se levanta a las siete. Desayuna. Va a trabajar.]]', '[[I get up at seven.|Yo me levanto a las siete.]]', '[[Do you get up early?|¿Te levantas temprano?]]'],
        correctAnswer: 0,
        explanation: 'Describir rutina de otra persona: She + 3.ª persona.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u15-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|si]] [[your|tu]] [[brother|hermano]] [[plays|juega]] [[tennis|tenis]]. [[You|Tú]] ____.',
        options: ['[[Does your brother play tennis?|¿Tu hermano juega al tenis?]]', '[[Do you play tennis?|¿Juegas al tenis?]]', '[[He plays tennis.|Él juega al tenis.]]'],
        correctAnswer: 0,
        explanation: 'Does he/she/it...? Para 3.ª persona.',
      }],
    },
    topicName: 'Vocabulary',
  },
];
