/**
 * Unidad 3 — Lección 4: Comprensión auditiva
 * 1 audio (transcripción) + 14 preguntas (8 MC, 4 V/F, 2 síntesis)
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

export const UNIT_3_LESSON_4_LISTENING: Exercise[] = [
  {
    id: 'a1-u3-l4-listening-1',
    type: 'listening',
    level: 'A1',
    topic: 'Emotions',
    difficulty: 'easy',
    transcript: LISTENING_TRANSCRIPT,
    // audioUrl: '/audio/a1-u3-l4-listening.mp3', // descomentar cuando exista
    content: {
      title: LESSON_TITLE,
      instructions: '[[Listen|Escucha]] [[the|el]] [[audio|audio]] [[below|abajo]]. [[You can|Puedes]] [[read|leer]] [[the|la]] [[transcript|transcripción]] [[after|después]] [[listening|escuchar]]. [[Then|Después]] [[answer|responde]] [[the|las]] [[questions|preguntas]].',
      questions: [
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Ben|Ben]] [[today|hoy]]?',
          options: ['[[excited|emocionado]]', '[[happy|feliz]]', '[[tired|cansado]]', '[[angry|enfadado]]'],
          correctAnswer: 2,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[I am very tired|Estoy muy cansado]]".',
        },
        {
          question: '[[Is|Está]] [[Ana|Ana]] [[tired|cansada]]?',
          options: ['[[Yes, she is.|Sí, lo está.]]', '[[No, she isn\'t.|No, no lo está.]]', '[[She is a little tired.|Está un poco cansada.]]', '[[She is very tired.|Está muy cansada.]]'],
          correctAnswer: 1,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she is not tired at all|no está cansada para nada]]".',
        },
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Ana|Ana]]?',
          options: ['[[tired|cansada]]', '[[sad|triste]]', '[[excited|emocionada]]', '[[scared|asustada]]'],
          correctAnswer: 2,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she is excited|ella está emocionada]]".',
        },
        {
          question: '[[Is|Tiene]] [[Ana|Ana]] [[hungry|hambre]]?',
          options: ['[[Yes, she is very hungry.|Sí, tiene mucha hambre.]]', '[[She is a little hungry.|Tiene un poco de hambre.]]', '[[No, she isn\'t hungry.|No, no tiene hambre.]]', '[[She is not thirsty.|No tiene sed.]]'],
          correctAnswer: 2,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she isn\'t hungry|ella no está hambrienta]]".',
        },
        {
          question: '[[What|Qué]] [[does|quiere]] [[Ana|Ana]] [[want|querer]]?',
          options: ['[[food|comida]]', '[[a drink|una bebida]]', '[[snacks|merienda]]', '[[coffee|café]]'],
          correctAnswer: 1,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[she is thirsty|tiene sed]]", [[so|así que]] [[she|ella]] [[wants|quiere]] [[something|algo]] [[to drink|para beber]].',
        },
        {
          question: '[[Is|Está]] [[Ben|Ben]] [[hungry|hambriento]]?',
          options: ['[[No, he isn\'t.|No, no lo está.]]', '[[He is very hungry.|Tiene mucha hambre.]]', '[[Yes, a little.|Sí, un poco.]]', '[[He is thirsty, not hungry.|Tiene sed, no hambre.]]'],
          correctAnswer: 2,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[Yes, I am a little hungry|Sí, estoy un poco hambriento]]".',
        },
        {
          question: '[[How|Cómo]] [[does|se siente]] [[Ben|Ben]]? (all [[emotions|emociones]])',
          options: [
            '[[tired and hungry|cansado y hambriento]]',
            '[[angry and sad|enfadado y triste]]',
            '[[excited and thirsty|emocionado y sediento]]',
            '[[happy and excited|feliz y emocionado]]',
          ],
          correctAnswer: 0,
          explanation: '[[Ben|Ben]] [[says|dice]] "[[just tired and hungry|solo cansado y hambriento]]".',
        },
        {
          question: '[[Who|Quién]] [[are|son]] [[Ben|Ben]] [[and|y]] [[Ana|Ana]] [[talking|hablando]] [[to|con]]?',
          options: ['[[A friend|Un amigo]]', '[[A receptionist|Una recepcionista]]', '[[A teacher|Un profesor]]', '[[A doctor|Un médico]]'],
          correctAnswer: 1,
          explanation: '[[The|El]] [[dialogue|diálogo]] [[starts|empieza]] [[with|con]] [[a|una]] [[receptionist|recepcionista]] [[greeting|saludando]] [[them|les]].',
        },
        // ─── 9–12: Verdadero/Falso ─────────────────────────────────────────
        {
          question: '[[Ben|Ben]] [[is|está]] [[angry|enfadado]] [[today|hoy]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Ben|Ben]] [[says|dice]] "[[I am not angry|no estoy enfadado]]".',
        },
        {
          question: '[[Ana|Ana]] [[is|está]] [[excited|emocionada]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Ben|Ben]] [[says|dice]] "[[she is excited|ella está emocionada]]".',
        },
        {
          question: '[[Both|Tanto]] [[Ben|Ben]] [[and|como]] [[Ana|Ana]] [[are|están]] [[hungry|hambrientos]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'False',
          explanation: '[[False|Falso]]. [[Ana|Ana]] [[is not|no está]] [[hungry|hambrienta]], [[only|solo]] [[Ben|Ben]] [[is|está]] [[a little|un poco]] [[hungry|hambriento]].',
        },
        {
          question: '[[The|La]] [[receptionist|recepcionista]] [[offers|ofrece]] [[drinks|bebidas]].',
          options: ['[[True|Verdadero]]', '[[False|Falso]]'],
          correctAnswer: 'True',
          explanation: '[[True|Verdadero]]. [[Ben|Ben]] [[asks|pregunta]] [[about|sobre]] [[drinks|bebidas]] [[and|y]] [[the|la]] [[receptionist|recepcionista]] [[has|tiene]] [[snacks|merienda]] [[and|y]] [[presumably|presumiblemente]] [[drinks|bebidas]].',
        },
        // ─── 13–14: Síntesis ──────────────────────────────────────────────
        {
          question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
          options: [
            '[[A|Un]] [[job|trabajo]] [[interview|entrevista]]',
            '[[Two people|Dos personas]] [[describing|describiendo]] [[their|sus]] [[physical|físico]] [[state|estado]] [[and|y]] [[emotions|emociones]]',
            '[[A|Una]] [[restaurant|restaurante]] [[order|pedido]]',
            '[[A|Una]] [[school|escuela]] [[lesson|clase]]',
          ],
          correctAnswer: 1,
          explanation: '[[The|El]] [[audio|audio]] [[shows|muestra]] [[Ben|Ben]] [[and|y]] [[Ana|Ana]] [[saying|diciendo]] [[how|cómo]] [[they|se]] [[feel|sienten]] [[using|usando]] [[to be|el verbo to be]] [[in|en]] [[positive|afirmativa]], [[negative|negativa]] [[and|e]] [[interrogative|interrogativa]].',
        },
        {
          question: '[[Which|Cuál]] [[person|persona]] [[is|está]] [[more|más]] [[positive|positiva]] [[in|en]] [[this|este]] [[dialogue|diálogo]]?',
          options: [
            '[[Ben|Ben]], [[because|porque]] [[he|él]] [[is|está]] [[not|no]] [[angry|enfadado]]',
            '[[The receptionist|La recepcionista]], [[because|porque]] [[she|ella]] [[offers|ofrece]] [[help|ayuda]]',
            '[[Ana|Ana]], [[because|porque]] [[she|ella]] [[is|está]] [[excited|emocionada]] [[and|y]] [[not|no]] [[tired|cansada]]',
            '[[Both|Ambos]] [[are|están]] [[equally|igualmente]] [[positive|positivos]]',
          ],
          correctAnswer: 2,
          explanation: '[[Ana|Ana]] [[is|está]] [[excited|emocionada]] [[and|y]] [[is not|no está]] [[tired|cansada]], [[making|haciéndola]] [[her|la]] [[most|más]] [[positive|positiva]] [[person|persona]] [[in|en]] [[the|el]] [[dialogue|diálogo]].',
        },
      ],
    },
    topicName: 'Listening',
  },
];
