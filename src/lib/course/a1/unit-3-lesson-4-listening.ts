/**
 * Unidad 3 — Lección 4: Comprensión auditiva
 * 15 ejercicios individuales (8 elección múltiple, 4 verdadero/falso, 3 síntesis)
 * audioUrl se puede añadir cuando exista el archivo de audio
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión auditiva';
const LISTENING_TRANSCRIPT = `[[Receptionist|Recepcionista]]: [[Good morning|Buenos días]]! [[How|Cómo]] [[are|estás]] [[you|tú]] [[today|hoy]]?

[[Ben|Ben]]: [[Hi|Hola]]! [[I|Yo]] [[am|estoy]] [[not|no]] [[great|muy bien]], [[actually|la verdad]]. [[I|Yo]] [[am|estoy]] [[very|muy]] [[tired|cansado]].

[[Receptionist|Recepcionista]]: [[Oh|Oh]], [[I|yo]] [[am|estoy]] [[sorry|lo siento]]. [[Is|Estás]] [[your|tú]] [[friend|amigo]] [[Ana|Ana]] [[here|aquí]] [[with|con]] [[you|ti]] [[today|hoy]]?

[[Ben|Ben]]: [[Yes|Sí]], [[she|ella]] [[is|está]] [[over there|allí]]. [[She|Ella]] [[is|está]] [[excited|emocionada]] — [[she|ella]] [[is|está]] [[not|no]] [[tired|cansada]] [[at all|para nada]].

[[Receptionist|Recepcionista]]: [[Is|Tiene]] [[she|ella]] [[hungry|hambre]]? [[We|Nosotros]] [[have|tenemos]] [[snacks|merienda]] [[here|aquí]].

[[Ben|Ben]]: [[Actually|En realidad]], [[she|ella]] [[isn't|no está]] [[hungry|hambrienta]], [[but|pero]] [[she|ella]] [[is|está]] [[thirsty|sedienta]]. [[Are|Hay]] [[there|aquí]] [[any|algunos]] [[drinks|bebidas]] [[here|aquí]]?

[[Receptionist|Recepcionista]]: [[Of course|Por supuesto]]! [[And|Y]] [[what|qué]] [[about|hay de]] [[you|ti]], [[Ben|Ben]]? [[Are|Estás]] [[you|tú]] [[hungry|hambriento]]?

[[Ben|Ben]]: [[Yes|Sí]], [[I|yo]] [[am|estoy]] [[a little|un poco]] [[hungry|hambriento]]. [[I|Yo]] [[am not|no estoy]] [[angry|enfadado]] [[or|ni]] [[sad|triste]] — [[just|solo]] [[tired|cansado]] [[and|y]] [[hungry|hambriento]].`;

const INST_MC = 'Escucha el audio y elige la respuesta correcta.';
const INST_TF = 'Escucha el audio. Indica si la afirmación es verdadera o falsa.';
const INST_SYN = 'Escucha el audio. Elige la mejor respuesta.';

export const UNIT_3_LESSON_4_LISTENING: Exercise[] = [
  // ─── 1–8: Elección múltiple ────────────────────────────────────────────────
  {
    id: 'a1-u3-l4-listening-1',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How does Ben feel today?|¿Cómo se siente Ben hoy?]]',
          options: ['excited', 'happy', 'angry', 'tired'],
          correctAnswer: 3,
          explanation: 'Ben dice "I am very tired".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-2',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Is Ana tired?|¿Está Ana cansada?]]',
          options: [
            'Yes, she is.',
            'She is a little tired.',
            'No, she isn\'t.',
            'She is very tired.',
          ],
          correctAnswer: 2,
          explanation: 'Ben dice "she is not tired at all".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-3',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How does Ana feel?|¿Cómo se siente Ana?]]',
          options: ['tired', 'sad', 'scared', 'excited'],
          correctAnswer: 3,
          explanation: 'Ben dice "she is excited".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-4',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Is Ana hungry?|¿Tiene hambre Ana?]]',
          options: [
            'Yes, she is very hungry.',
            'She is a little hungry.',
            'She is not thirsty.',
            'No, she isn\'t hungry.',
          ],
          correctAnswer: 3,
          explanation: 'Ben dice "she isn\'t hungry".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-5',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[What does Ana want?|¿Qué quiere Ana?]]',
          options: ['food', 'snacks', 'coffee', 'a drink'],
          correctAnswer: 3,
          explanation: 'Ben dice "she is thirsty", así que quiere algo para beber.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-6',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Is Ben hungry?|¿Tiene hambre Ben?]]',
          options: [
            'No, he isn\'t.',
            'He is very hungry.',
            'He is thirsty, not hungry.',
            'Yes, a little.',
          ],
          correctAnswer: 3,
          explanation: 'Ben dice "Yes, I am a little hungry".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-7',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[How does Ben feel? (all emotions)|¿Cómo se siente Ben? (todas las emociones)]]',
          options: [
            'angry and sad',
            'excited and thirsty',
            'tired and hungry',
            'happy and excited',
          ],
          correctAnswer: 2,
          explanation: 'Ben dice "just tired and hungry".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-8',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_MC,
      questions: [
        {
          question: '[[Who are Ben and Ana talking to?|¿Con quién hablan Ben y Ana?]]',
          options: [
            'A friend',
            'A teacher',
            'A doctor',
            'A receptionist',
          ],
          correctAnswer: 3,
          explanation: 'El diálogo empieza con una recepcionista saludando.',
        },
      ],
    },
    topicName: 'Listening',
  },
  // ─── 9–12: Verdadero/Falso ─────────────────────────────────────────────────
  {
    id: 'a1-u3-l4-listening-9',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'Ben is angry today.',
          options: ['True', 'False'],
          correctAnswer: 'False',
          explanation: 'Falso. Ben dice "I am not angry".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-10',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'Ana is excited.',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'Verdadero. Ben dice "she is excited".',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-11',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'Both Ben and Ana are hungry.',
          options: ['True', 'False'],
          correctAnswer: 'False',
          explanation: 'Falso. Ana no tiene hambre; solo Ben tiene un poco.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-12',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_TF,
      questions: [
        {
          question: 'The receptionist offers drinks.',
          options: ['True', 'False'],
          correctAnswer: 'True',
          explanation: 'Verdadero. La recepcionista confirma que tienen bebidas.',
        },
      ],
    },
    topicName: 'Listening',
  },
  // ─── 13–15: Síntesis ────────────────────────────────────────────────────────
  {
    id: 'a1-u3-l4-listening-13',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[What is the main topic of this audio?|¿Cuál es el tema principal de este audio?]]',
          options: [
            'A job interview',
            'A restaurant order',
            'A school lesson',
            'Two people describing their state and emotions',
          ],
          correctAnswer: 3,
          explanation: 'El audio muestra a Ben y Ana diciendo cómo se sienten usando to be en afirmativa, negativa e interrogativa.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-14',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[Who is the most positive person in this dialogue?|¿Quién es la persona más positiva en este diálogo?]]',
          options: [
            'Ben, because he is not angry',
            'The receptionist, because she offers help',
            'Both are equally positive',
            'Ana, because she is excited and not tired',
          ],
          correctAnswer: 3,
          explanation: 'Ana está emocionada y no está cansada, lo que la hace la más positiva del diálogo.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-u3-l4-listening-15',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3',
    content: {
      title: LESSON_TITLE,
      instructions: INST_SYN,
      questions: [
        {
          question: '[[When Ben says "I am not angry or sad", which grammar structure is he using?|Cuando Ben dice "I am not angry or sad", ¿qué estructura gramatical usa?]]',
          options: [
            'Affirmative to be',
            'Past tense',
            'Negative to be',
            'Question with to be',
          ],
          correctAnswer: 2,
          explanation: '"I am not" es la forma negativa de to be. Ben la usa para negar dos emociones.',
        },
      ],
    },
    topicName: 'Listening',
  },
];
