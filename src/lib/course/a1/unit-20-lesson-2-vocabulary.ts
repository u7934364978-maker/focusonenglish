/**
 * Unidad 20 — Lección 2: Vocabulario (Jobs & Work)
 * teacher, doctor, nurse, chef, office, hospital, work, job, Where do you work?
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: trabajo y profesiones';
const TOPIC = 'Jobs & Work';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona la profesión con su lugar de trabajo.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_20_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a1-u20-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Un]] ____ [[teaches|enseña]] [[in|en]] [[a|un]] [[school|colegio]].',
        options: ['[[teacher|profesor/a]]', '[[doctor|médico]]', '[[chef|cocinero/a]]'],
        correctAnswer: 0,
        explanation: 'Teacher = profesor/a.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Un]] ____ [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]] [[and|y]] [[helps|ayuda]] [[sick|enfermos]] [[people|personas]].',
        options: ['[[teacher|profesor]]', '[[doctor|médico]]', '[[waiter|camarero]]'],
        correctAnswer: 1,
        explanation: 'Doctor = médico.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[She|Ella]] [[works|trabaja]] [[in|en]] [[an|una]] ____. [[She|Ella]] [[has|tiene]] [[a|un]] [[desk|escritorio]] [[and|y]] [[a|un]] [[computer|ordenador]].',
        options: ['[[office|oficina]]', '[[hospital|hospital]]', '[[restaurant|restaurante]]'],
        correctAnswer: 0,
        explanation: 'Office = oficina.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Un]] ____ [[cooks|cuece]] [[food|comida]] [[in|en]] [[a|un]] [[restaurant|restaurante]] [[or|o]] [[hotel|hotel]].',
        options: ['[[nurse|enfermero/a]]', '[[engineer|ingeniero/a]]', '[[chef|cocinero/a]]'],
        correctAnswer: 2,
        explanation: 'Chef = cocinero/a.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[My|Mi]] ____ [[is|es]] [[at|en]] [[a|un]] [[bank|banco]]. [[I|Yo]] [[work|trabajo]] [[there|allí]] [[every|todos]] [[day|los días]].',
        options: ['[[job|trabajo]]', '[[school|colegio]]', '[[home|casa]]'],
        correctAnswer: 0,
        explanation: 'Job = trabajo (como sustantivo).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Una]] ____ [[helps|ayuda]] [[doctors|médicos]] [[and|y]] [[patients|pacientes]] [[in|en]] [[a|un]] [[hospital|hospital]].',
        options: ['[[nurse|enfermero/a]]', '[[pilot|piloto]]', '[[artist|artista]]'],
        correctAnswer: 0,
        explanation: 'Nurse = enfermero/a.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la profesión con su traducción.',
      pairs: [
        { id: 'p1', left: '[[teacher|profesor/a]]', right: 'Profesor/a' },
        { id: 'p2', left: '[[doctor|médico/a]]', right: 'Médico/a' },
        { id: 'p3', left: '[[nurse|enfermero/a]]', right: 'Enfermero/a' },
        { id: 'p4', left: '[[chef|cocinero/a]]', right: 'Cocinero/a' },
        { id: 'p5', left: '[[engineer|ingeniero/a]]', right: 'Ingeniero/a' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona el lugar con su traducción.',
      pairs: [
        { id: 'p1', left: '[[office|oficina]]', right: 'Oficina' },
        { id: 'p2', left: '[[hospital|hospital]]', right: 'Hospital' },
        { id: 'p3', left: '[[school|colegio/escuela]]', right: 'Colegio / escuela' },
        { id: 'p4', left: '[[restaurant|restaurante]]', right: 'Restaurante' },
        { id: 'p5', left: '[[bank|banco]]', right: 'Banco' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[teacher|profesor]]', right: '[[school|colegio]]' },
        { id: 'p2', left: '[[doctor|médico]]', right: '[[hospital|hospital]]' },
        { id: 'p3', left: '[[chef|cocinero]]', right: '[[restaurant|restaurante]]' },
        { id: 'p4', left: '[[waiter|camarero]]', right: '[[restaurant|restaurante]]' },
        { id: 'p5', left: '[[engineer|ingeniero]]', right: '[[office|oficina]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la pregunta con su significado.',
      pairs: [
        { id: 'p1', left: '[[What do you do?|¿A qué te dedicas?]]', right: 'Pregunta por la profesión' },
        { id: 'p2', left: '[[Where do you work?|¿Dónde trabajas?]]', right: 'Pregunta por el lugar' },
        { id: 'p3', left: '[[Do you like your job?|¿Te gusta tu trabajo?]]', right: 'Pregunta si te gusta' },
        { id: 'p4', left: '[[I work in an office.|Trabajo en una oficina.]]', right: 'Respuesta sobre lugar' },
        { id: 'p5', left: '[[I am a teacher.|Soy profesor/a.]]', right: 'Respuesta sobre profesión' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[I|Yo]] ____ [[in|en]] [[a|un]] [[hospital|hospital]]. [[I|Yo]] [[am|soy]] [[a|una]] [[nurse|enfermera]].',
        options: ['[[work|trabajo]]', '[[works|trabaja]]', '[[working|trabajando]]'],
        correctAnswer: 'work',
        acceptableAnswers: ['work'],
        explanation: 'I work.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[What|Qué]] ____ [[do|(auxiliar)]] [[you|tú]] [[do|haces]]? [[I|Yo]] [[am|soy]] [[a|un]] [[teacher|profesor]].',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[are|eres]]'],
        correctAnswer: 'do',
        acceptableAnswers: ['do'],
        explanation: 'What do you do?',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] ____ [[a|un]] [[doctor|médico]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]].',
        options: ['[[is|es]]', '[[are|son]]', '[[am|soy]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: 'He is a doctor.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] "[[What do you do?|¿A qué te dedicas?]]". [[You|Tú]] [[are|eres]] [[a|un]] [[teacher|profesor]]. [[You|Tú]] [[say|dices]]: ____.',
        options: ['[[I work in a school.|Trabajo en un colegio.]]', '[[I am a teacher.|Soy profesor.]]', '[[I like teaching.|Me gusta enseñar.]]'],
        correctAnswer: 1,
        explanation: 'I am a teacher.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u20-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[where|dónde]] [[someone|alguien]] [[works|trabaja]]. [[You|Tú]] ____.',
        options: ['[[say|dices]] "[[What do you do?|¿A qué te dedicas?]]"', '[[say|dices]] "[[Where do you work?|¿Dónde trabajas?]]"', '[[say|dices]] "[[Do you work?|¿Trabajas?]]"'],
        correctAnswer: 1,
        explanation: 'Where do you work?',
      }],
    },
    topicName: 'Vocabulary',
  },
];
