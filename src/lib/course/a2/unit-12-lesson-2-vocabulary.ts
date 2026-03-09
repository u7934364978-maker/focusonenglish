/**
 * Unidad 12 — Lección 2: Vocabulario (experiencias ever/never - ocio, viaje, comida)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[experiences|experiencias]] [[with|con]] [[ever|alguna vez]] [[and|y]] [[never|nunca]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_12_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u12-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "[[alguna vez|alguna vez]]" [[in|en]] [[questions|preguntas]]?',
          options: ['[[never|nunca]]', '[[ever|alguna vez]]', '[[already|ya]]'],
          correctAnswer: 1,
          explanation: '[[Ever|Alguna vez]] = [[at any time|en algún momento]] [[in|en]] [[your|tu]] [[life|vida]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "[[nunca|nunca]]"?',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yet|aún]]'],
          correctAnswer: 1,
          explanation: '[[Never|Nunca]] = [[not|no]] [[once|ni una vez]] [[in|en]] [[your|tu]] [[life|vida]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[Have|¿Has]] ____ [[tried|probado]] [[sushi|sushi]]?"',
          options: ['[[never|nunca]]', '[[ever|alguna vez]]', '[[already|ya]]'],
          correctAnswer: 1,
          explanation: '[[Ever|Alguna vez]] [[in|en]] [[questions|preguntas]] [[about|sobre]] [[experiences|experiencias]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "[[viajar en avión|viajar en avión]]"?',
          options: ['[[travel|viajar]]', '[[fly|volar]]', '[[trip|viaje]]'],
          correctAnswer: 1,
          explanation: '[[Fly|Volar]] = [[travel|viajar]] [[by|en]] [[plane|avión]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "[[probar|probar]]" [[food|comida]]?',
          options: ['[[eat|comer]]', '[[try|probar]]', '[[taste|sabor]]'],
          correctAnswer: 1,
          explanation: '[[Try|Probar]] = [[taste|probar]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[Yes|Sí]], [[I|yo]] [[have|he]]" [[is|es]] [[a|una]] ____ [[answer|respuesta]] [[to|a]] "[[Have you ever...?|¿Has... alguna vez?]]"',
          options: ['[[short|corta]]', '[[long|larga]]', '[[negative|negativa]]'],
          correctAnswer: 0,
          explanation: '[[Short answer|Respuesta corta]]: [[Yes, I have|Sí, he]] [[or|o]] [[No, I haven\'t|No, no he]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Ever|Alguna vez]]', right: 'Alguna vez' },
        { id: 'p2', left: '[[Never|Nunca]]', right: 'Nunca' },
        { id: 'p3', left: '[[Try|Probar]]', right: 'Probar' },
        { id: 'p4', left: '[[Experience|Experiencia]]', right: 'Experiencia' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Fly|Volar]]', right: 'Volar' },
        { id: 'p2', left: '[[Ride|Montar]]', right: 'Montar (caballo, bici)' },
        { id: 'p3', left: '[[Ski|Esquiar]]', right: 'Esquiar' },
        { id: 'p4', left: '[[Surf|Surfear]]', right: 'Surfear' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[have|he]] ____ [[flown|volado]] [[in|en]] [[a|un]] [[hot-air balloon|globo aerostático]]. [[It|Fue]] [[was|fue]] [[amazing|increíble]].',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'already',
          explanation: '[[Have already flown|Ya he volado]] = [[experience|experiencia]] [[completed|completada]] [[at|en]] [[some|algún]] [[point|momento]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[She|Ella]] [[has|ha]] ____ [[eaten|comido]] [[Indian|india]] [[food|comida]]. [[She|Ella]] [[wants|quiere]] [[to|a]] [[try|probar]] [[it|él]].',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'never',
          explanation: '[[Has never eaten|Nunca ha comido]] = [[no|no]] [[experience|experiencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[Have|¿Has]] ____ [[ridden|montado]] [[a|un]] [[horse|caballo]]? [[Yes|Sí]], [[I|yo]] [[have|he]] [[twice|dos veces]].',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[yet|aún]]'],
          correctAnswer: 'ever',
          explanation: '[[Have you ever ridden|¿Has montado alguna vez]] = [[question|pregunta]] [[about|sobre]] [[experience|experiencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[He|Él]] [[has|ha]] ____ [[been|estado]] [[to|a]] [[a|un]] [[concert|concierto]]. [[He|Él]] [[loves|ama]] [[music|música]].',
          options: ['[[ever|alguna vez]]', '[[never|nunca]]', '[[already|ya]]'],
          correctAnswer: 'never',
          explanation: '[[Has never been|Nunca ha estado]] = [[negative|negativa]] [[experience|experiencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[leisure|ocio]] [[activity|actividad]] [[can|puede]] [[you|tú]] [[ask|preguntar]] [[about|sobre]] [[with|con]] "[[Have you ever...?|¿Has... alguna vez?]]"?',
          options: [
            '[[Have you ever been to a concert?|¿Has estado alguna vez en un concierto?]]',
            '[[Do you go to concerts?|¿Vas a conciertos?]]',
            '[[When did you go to a concert?|¿Cuándo fuiste a un concierto?]]',
          ],
          correctAnswer: 0,
          explanation: '[[Have you ever...?|¿Has... alguna vez?]] [[asks|pregunta]] [[about|sobre]] [[life|vida]] [[experience|experiencia]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[No|No]], [[I|yo]] ____. [[I|Yo]] [[have|he]] [[never|nunca]] [[tried|probado]] [[it|él]]."',
          options: ['[[have|he]]', '[[haven\'t|no he]]', '[[hasn\'t|no ha]]'],
          correctAnswer: 1,
          explanation: '[[No, I haven\'t|No, no he]] = [[short|respuesta corta]] [[negative|negativa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u12-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Present Perfect Ever Never',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[food|comida]] [[experience|experiencia]] [[can|puede]] [[you|tú]] [[ask|preguntar]] [[about|sobre]]?',
          options: [
            '[[Have you ever eaten sushi?|¿Has comido sushi alguna vez?]]',
            '[[Do you eat sushi?|¿Comes sushi?]]',
            '[[When did you eat sushi?|¿Cuándo comiste sushi?]]',
          ],
          correctAnswer: 0,
          explanation: '[[Have you ever eaten...?|¿Has comido... alguna vez?]] = [[experience|experiencia]] [[question|pregunta]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
