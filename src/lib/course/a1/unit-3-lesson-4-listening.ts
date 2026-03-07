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
          question: '[[How|Cómo]] [[does|se siente]] [[Ben|Ben]] [[today|hoy]]?',
          options: ['[[excited|emocionado]]', '[[happy|feliz]]', '[[angry|enfadado]]', '[[tired|cansado]]'],
          correctAnswer: 3,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[I am very tired|Estoy muy cansado]]".',
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
          question: '[[Is|Está]] [[Ana|Ana]] [[tired|cansada]]?',
          options: [
            '[[Yes, she is.|Sí, lo está.]]',
            '[[She is a little tired.|Está un poco cansada.]]',
            '[[No, she isn\'t.|No, no lo está.]]',
            '[[She is very tired.|Está muy cansada.]]',
          ],
          correctAnswer: 2,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she is not tired at all|no está cansada para nada]]".',
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
          question: '[[How|Cómo]] [[does|se siente]] [[Ana|Ana]]?',
          options: ['[[tired|cansada]]', '[[sad|triste]]', '[[scared|asustada]]', '[[excited|emocionada]]'],
          correctAnswer: 3,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she is excited|ella está emocionada]]".',
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
          question: '[[Is|Tiene]] [[Ana|Ana]] [[hungry|hambre]]?',
          options: [
            '[[Yes, she is very hungry.|Sí, tiene mucha hambre.]]',
            '[[She is a little hungry.|Tiene un poco de hambre.]]',
            '[[She is not thirsty.|No tiene sed.]]',
            '[[No, she isn\'t hungry.|No, no tiene hambre.]]',
          ],
          correctAnswer: 3,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she isn\'t hungry|ella no está hambrienta]]".',
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
          question: '[[What|Qué]] [[does|quiere]] [[Ana|Ana]] [[want|querer]]?',
          options: ['[[food|comida]]', '[[snacks|merienda]]', '[[coffee|café]]', '[[a drink|una bebida]]'],
          correctAnswer: 3,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she is thirsty|tiene sed]]", [[so|así que]] [[she|ella]] [[wants|quiere]] [[something|algo]] [[to drink|para beber]].',
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
          question: '[[Is|Está]] [[Ben|Ben]] [[hungry|hambriento]]?',
          options: [
            '[[No, he isn\'t.|No, no lo está.]]',
            '[[He is very hungry.|Tiene mucha hambre.]]',
            '[[He is thirsty, not hungry.|Tiene sed, no hambre.]]',
            '[[Yes, a little.|Sí, un poco.]]',
          ],
          correctAnswer: 3,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[Yes, I am a little hungry|Sí, estoy un poco hambriento]]".',
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
          question: '[[How|Cómo]] [[does|se siente]] [[Ben|Ben]]? ([[all|todas]] [[emotions|emociones]])',
          options: [
            '[[angry and sad|enfadado y triste]]',
            '[[excited and thirsty|emocionado y sediento]]',
            '[[tired and hungry|cansado y hambriento]]',
            '[[happy and excited|feliz y emocionado]]',
          ],
          correctAnswer: 2,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[just tired and hungry|solo cansado y hambriento]]".',
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
          question: '[[Who|Quién]] [[are|son]] [[Ben|Ben]] [[and|y]] [[Ana|Ana]] [[talking|hablando]] [[to|con]]?',
          options: ['[[A friend|Un amigo]]', '[[A teacher|Un profesor]]', '[[A doctor|Un médico]]', '[[A receptionist|Una recepcionista]]'],
          correctAnswer: 3,
          explanation: '[[The|El]] [[dialogue|diálogo]] [[starts|empieza]] [[with|con]] [[a|una]] [[receptionist|recepcionista]] [[greeting|saludando]] [[them|les]].',
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
          question: '[[Ben|Ben]] [[is|está]] [[angry|enfadado]] [[today|hoy]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Ben|Ben]] [[says|dice]] "[[I am not angry|no estoy enfadado]]".',
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
          question: '[[Ana|Ana]] [[is|está]] [[excited|emocionada]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Ben|Ben]] [[says|dice]] "[[she is excited|ella está emocionada]]".',
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
          question: '[[Both|Tanto]] [[Ben|Ben]] [[and|como]] [[Ana|Ana]] [[are|están]] [[hungry|hambrientos]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Ana|Ana]] [[is not|no está]] [[hungry|hambrienta]], [[only|solo]] [[Ben|Ben]] [[is|está]] [[a little|un poco]] [[hungry|hambriento]].',
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
          question: '[[The|La]] [[receptionist|recepcionista]] [[offers|ofrece]] [[drinks|bebidas]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Ben|Ben]] [[asks|pregunta]] [[about|sobre]] [[drinks|bebidas]] [[and|y]] [[the|la]] [[receptionist|recepcionista]] [[confirms|confirma]] [[they|que]] [[have|tienen]] [[them|bebidas]].',
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
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
          options: [
            '[[A|Un]] [[job|trabajo]] [[interview|entrevista]]',
            '[[A|Una]] [[restaurant|restaurante]] [[order|pedido]]',
            '[[A|Una]] [[school|escuela]] [[lesson|clase]]',
            '[[Two people|Dos personas]] [[describing|describiendo]] [[their|sus]] [[physical|físico]] [[state|estado]] [[and|y]] [[emotions|emociones]]',
          ],
          correctAnswer: 3,
          explanation: '[[The|El]] [[audio|audio]] [[shows|muestra]] [[Ben|Ben]] [[and|y]] [[Ana|Ana]] [[saying|diciendo]] [[how|cómo]] [[they|se]] [[feel|sienten]] [[using|usando]] [[to be|el verbo to be]] [[in|en]] [[positive|afirmativa]], [[negative|negativa]] [[and|e]] [[interrogative|interrogativa]].',
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
          question: '[[Which|Cuál]] [[person|persona]] [[is|está]] [[more|más]] [[positive|positiva]] [[in|en]] [[this|este]] [[dialogue|diálogo]]?',
          options: [
            '[[Ben|Ben]], [[because|porque]] [[he|él]] [[is|está]] [[not|no]] [[angry|enfadado]]',
            '[[The receptionist|La recepcionista]], [[because|porque]] [[she|ella]] [[offers|ofrece]] [[help|ayuda]]',
            '[[Both|Ambos]] [[are|están]] [[equally|igualmente]] [[positive|positivos]]',
            '[[Ana|Ana]], [[because|porque]] [[she|ella]] [[is|está]] [[excited|emocionada]] [[and|y]] [[not|no]] [[tired|cansada]]',
          ],
          correctAnswer: 3,
          explanation: '[[Ana|Ana]] [[is|está]] [[excited|emocionada]] [[and|y]] [[is not|no está]] [[tired|cansada]], [[making|haciéndola]] [[her|la]] [[most|más]] [[positive|positiva]] [[person|persona]] [[in|en]] [[the|el]] [[dialogue|diálogo]].',
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
          question: '[[When|Cuando]] [[Ben|Ben]] [[says|dice]] "[[I am not angry or sad|no estoy enfadado ni triste]]", [[which|qué]] [[grammar|gramática]] [[structure|estructura]] [[is|está]] [[he|él]] [[using|usando]]?',
          options: [
            '[[Affirmative|Afirmativa]] [[to be|to be]]',
            '[[Past|Pasado]] [[tense|tiempo]]',
            '[[Negative|Negativa]] [[to be|to be]]',
            '[[Question|Pregunta]] [[with|con]] [[to be|to be]]',
          ],
          correctAnswer: 2,
          explanation: '"[[I am not|No estoy]]" [[is|es]] [[the|la]] [[negative|negativa]] [[form|forma]] [[of|de]] [[to be|to be]]. [[Ben|Ben]] [[uses|usa]] [[it|la]] [[to|para]] [[deny|negar]] [[two|dos]] [[emotions|emociones]].',
        },
      ],
    },
    topicName: 'Listening',
  },
];
