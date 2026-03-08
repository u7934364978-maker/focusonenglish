/**
 * Unidad 1 — Lección 2: Vocabulario (hometown, neighbourhood, hobby, favourite)
 * 15 ejercicios
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Vocabulary|Vocabulario]]: [[hometown|ciudad natal]], [[neighbourhood|barrio]], [[hobby|pasatiempo]], [[favourite|favorito]]';
const INSTRUCTIONS_MC = 'Elige la palabra correcta para cada definición o frase.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra en inglés con su traducción.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta del recuadro.';

export const UNIT_1_LESSON_2_VOCABULARY: Exercise[] = [
  {
    id: 'a2-u1-l2-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "ciudad natal"?',
          options: ['[[name|nombre]]', '[[hometown|ciudad natal]]', '[[city|ciudad]]', '[[country|país]]'],
          correctAnswer: 1,
          explanation: '[[Hometown|Ciudad natal]] = [[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "barrio"?',
          options: ['[[neighbourhood|barrio]]', '[[hometown|ciudad natal]]', '[[street|calle]]', '[[house|casa]]'],
          correctAnswer: 0,
          explanation: '[[Neighbourhood|Barrio]] = [[the|el]] [[area|área]] [[around|alrededor]] [[your|tu]] [[home|casa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "pasatiempo"?',
          options: ['[[job|trabajo]]', '[[hobby|pasatiempo]]', '[[school|escuela]]', '[[home|casa]]'],
          correctAnswer: 1,
          explanation: '[[Hobby|Pasatiempo]] = [[activity|actividad]] [[you|tú]] [[enjoy|disfrutas]] [[in|en]] [[your|tu]] [[free|libre]] [[time|tiempo]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[means|significa]] "favorito"?',
          options: ['[[new|nuevo]]', '[[old|viejo]]', '[[favourite|favorito]]', '[[big|grande]]'],
          correctAnswer: 2,
          explanation: '[[Favourite|Favorito]] = [[the|el]] [[one|uno]] [[you|tú]] [[like|te gusta]] [[most|más]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[My|Mi]] ____ [[is|es]] [[reading|leer]] [[books|libros]]."',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]'],
          correctAnswer: 2,
          explanation: '[[Hobby|Pasatiempo]] = [[activity|actividad]] [[you|tú]] [[like|te gusta]] [[most|más]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '"[[I|Yo]] [[love|amo]] [[my|mi]] ____" [[means|significa]] "[[Amo|Amo]] [[mi|mi]] [[ciudad natal|ciudad natal]]".',
          options: ['[[neighbourhood|barrio]]', '[[hometown|ciudad natal]]', '[[hobby|pasatiempo]]'],
          correctAnswer: 1,
          explanation: '[[Hometown|Ciudad natal]] = [[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v7',
    type: 'matching',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Hometown|Ciudad natal]]', right: 'Ciudad natal' },
        { id: 'p2', left: '[[Neighbourhood|Barrio]]', right: 'Barrio' },
        { id: 'p3', left: '[[Hobby|Pasatiempo]]', right: 'Pasatiempo' },
        { id: 'p4', left: '[[Favourite|Favorito]]', right: 'Favorito' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v8',
    type: 'matching',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[Reading|Leer]]', right: 'Leer' },
        { id: 'p2', left: '[[Swimming|Nadar]]', right: 'Nadar' },
        { id: 'p3', left: '[[Cooking|Cocinar]]', right: 'Cocinar' },
        { id: 'p4', left: '[[Music|Música]]', right: 'Música' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[is|es]] [[Madrid|Madrid]]. [[I|Yo]] [[was|fui]] [[born|nacido]] [[there|allí]].',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]'],
          correctAnswer: '[[hometown|ciudad natal]]',
          explanation: '[[Hometown|Ciudad natal]] = [[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v10',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[I|Yo]] [[live|vivo]] [[in|en]] [[a|un]] [[quiet|tranquilo]] ____. [[There|Hay]] [[are|son]] [[many|muchos]] [[parks|parques]] [[near|cerca]].',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]'],
          correctAnswer: '[[neighbourhood|barrio]]',
          explanation: '[[Neighbourhood|Barrio]] = [[the|el]] [[area|área]] [[around|alrededor]] [[your|tu]] [[home|casa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v11',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[is|es]] [[playing|jugar]] [[football|fútbol]]. [[I|Yo]] [[play|juego]] [[every|cada]] [[weekend|fin de semana]].',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]'],
          correctAnswer: '[[hobby|pasatiempo]]',
          explanation: '[[Hobby|Pasatiempo]] = [[activity|actividad]] [[you|tú]] [[enjoy|disfrutas]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v12',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [
        {
          question: '[[My|Mi]] ____ [[colour|color]] [[is|es]] [[blue|azul]]. [[I|Yo]] [[love|amo]] [[it|él]].',
          options: ['[[favourite|favorito]]', '[[hobby|pasatiempo]]', '[[hometown|ciudad natal]]'],
          correctAnswer: '[[favourite|favorito]]',
          explanation: '[[Favourite|Favorito]] = [[the|el]] [[one|uno]] [[you|tú]] [[like|te gusta]] [[most|más]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v13',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[is|es]] [[the|la]] [[correct|correcta]] [[form|forma]]? "[[What|Cuál]] [[is|es]] [[your|tu]] ____ [[food|comida]]?"',
          options: ['[[hometown|ciudad natal]]', '[[favourite|favorito]]', '[[hobby|pasatiempo]]'],
          correctAnswer: 1,
          explanation: '[[Favourite|Favorito]] = [[the|el]] [[one|uno]] [[you|tú]] [[like|te gusta]] [[most|más]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v14',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[I|Yo]] [[live|vivo]] [[in|en]] [[a|un]] [[nice|bonito]] ____."',
          options: ['[[hometown|ciudad natal]]', '[[neighbourhood|barrio]]', '[[favourite|favorito]]'],
          correctAnswer: 1,
          explanation: '[[Neighbourhood|Barrio]] = [[the|el]] [[area|área]] [[around|alrededor]] [[your|tu]] [[home|casa]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-u1-l2-v15',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Greetings',
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [
        {
          question: '[[What|Qué]] [[word|palabra]] [[completes|complete]] [[the|la]] [[sentence|frase]]? "[[My|Mi]] ____ [[is|es]] [[Barcelona|Barcelona]]. [[I|Yo]] [[was|fui]] [[born|nacido]] [[there|allí]]."',
          options: ['[[neighbourhood|barrio]]', '[[hobby|pasatiempo]]', '[[hometown|ciudad natal]]'],
          correctAnswer: 2,
          explanation: '[[Hometown|Ciudad natal]] = [[the|la]] [[place|lugar]] [[where|donde]] [[you|tú]] [[were|fuiste]] [[born|nacido]].',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
];
