/**
 * Test final B1 — Evaluación de fin de nivel (Cambridge PET)
 * 28 ítems: gramática (9), vocabulario (7), lectura (4), escucha (4), escritura (3).
 * Criterio aprobado: ≥ 70% aciertos.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Test final B1';
const INSTRUCTIONS_GRAMMAR = 'Elige la opción correcta.';
const INSTRUCTIONS_VOCAB = 'Elige la palabra o frase correcta.';
const INSTRUCTIONS_READING = 'Lee el texto y responde.';
const INSTRUCTIONS_LISTENING = 'Escucha (o lee el texto) y responde.';

const READING_TEXT = `[[I|Yo]] [[have|he]] [[been|estado]] [[working|trabajando]] [[as|como]] [[a|un]] [[journalist|periodista]] [[for|desde hace]] [[ten|diez]] [[years|años]]. [[Last|El]] [[month|mes pasado]] [[I|yo]] [[was|fui]] [[sent|enviado]] [[to|a]] [[cover|cubrir]] [[a|una]] [[conference|conferencia]] [[on|sobre]] [[climate change|cambio climático]] [[in|en]] [[Geneva|Ginebra]]. [[If|Si]] [[I|yo]] [[had known|hubiera sabido]] [[how|cuán]] [[important|importante]] [[it would be|sería]], [[I|yo]] [[would have|habría]] [[prepared|preparado]] [[better|mejor]]. [[The|Los]] [[speakers|ponentes]] [[who|que]] [[spoke|hablaron]] [[were|eran]] [[experts|expertos]] [[from|de]] [[all over|de todo]] [[the world|el mundo]]. [[I|Yo]] [[must|debo]] [[hand in|entregar]] [[my article|mi artículo]] [[by|para]] [[Friday|el viernes]]. [[I|Yo]] [[am looking forward to|espero con ganas]] [[publishing|publicar]] [[it|lo]] [[soon|pronto]].`;

const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Maria|María]] [[and|y]] [[I|yo]] [[have|he]] [[just|acabo de]] [[returned|regresado]] [[from|de]] [[a|un]] [[business trip|viaje de negocios]] [[to|a]] [[Berlin|Berlín]]. [[The|El]] [[hotel|hotel]] [[where|donde]] [[I|yo]] [[stayed|me alojé]] [[was|fue]] [[recommended|recomendado]] [[by|por]] [[a colleague|un compañero]]. [[I|Yo]] [[had to|tuve que]] [[attend|asistir]] [[several|varias]] [[meetings|reuniones]] [[during|durante]] [[my stay|mi estancia]]. [[If|Si]] [[I|yo]] [[had had|hubiera tenido]] [[more time|más tiempo]], [[I|yo]] [[would have visited|habría visitado]] [[more museums|más museos]]. [[The|Los]] [[report|informe]] [[I|yo]] [[wrote|escribí]] [[has been|ha sido]] [[approved|aprobado]] [[by|por]] [[my boss|mi jefe]]. [[I|Yo]] [[am used to|estoy acostumbrada]] [[to|a]] [[travelling|viajar]] [[for work|por trabajo]] [[now|ahora]].`;

export const FINAL_TEST_B1_EXERCISES: Exercise[] = [
  // ─── Gramática (9) ───────────────────────────────────────────────────────
  {
    id: 'b1-final-g1',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[If|Si]] [[it|ello]] ____ [[rains|llueve]] [[tomorrow|mañana]], [[we|nosotros]] [[will stay|nos quedaremos]] [[at home|en casa]].',
        options: ['[[rains|llueve]]', '[[will rain|lloverá]]', '[[rained|llovió]]'],
        correctAnswer: 'rains',
        acceptableAnswers: ['rains'],
        explanation: '[[First conditional|Primer condicional]]: [[if + present|si + presente]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g2',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[The book|El libro]] ____ ____ ____ ____ [[written|escrito]] [[by|por]] [[a famous author|un autor famoso]].',
        options: ['[[was|fue]]', '[[is|es]]', '[[has been|ha sido]]'],
        correctAnswer: 'was',
        acceptableAnswers: ['was'],
        explanation: '[[Passive voice|Voz pasiva]]: [[was/were + past participle|was/were + participio pasado]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g3',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[She|Ella]] ____ ____ ____ ____ [[me|me]] [[that|que]] [[she|ella]] [[was|estaba]] [[leaving|marchándose]] [[the next day|al día siguiente]].',
        options: ['[[told|dijo]]', '[[said|dijo]]', '[[asked|preguntó]]'],
        correctAnswer: 0,
        explanation: '[[Reported speech|Estilo indirecto]]: [[she told me that|me dijo que]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g4',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[He|Él]] ____ ____ ____ ____ [[be|ser]] [[at home|en casa]] [[—|—]] [[his|su]] [[car|coche]] [[is|está]] [[outside|fuera]].',
        options: ['[[must|debe]]', '[[might|podría]]', '[[can\'t|no puede]]'],
        correctAnswer: 0,
        acceptableAnswers: ['must'],
        explanation: '[[Modal of deduction|Modal de deducción]]: [[must|debe]] [[for strong probability|para probabilidad fuerte]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g5',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[I|Yo]] ____ ____ ____ ____ [[to live|vivir]] [[in the countryside|en el campo]] [[when|cuando]] [[I|yo]] [[was|era]] [[a child|un niño]].',
        options: ['[[used|solía]]', '[[use|uso]]', '[[uses|usa]]'],
        correctAnswer: 'used',
        acceptableAnswers: ['used'],
        explanation: '[[Used to|Solía]] [[for past habits|para hábitos pasados]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g6',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[If|Si]] [[I|yo]] ____ ____ ____ ____ [[had|hubiera tenido]] [[more money|más dinero]], [[I|yo]] [[would have bought|habría comprado]] [[a car|un coche]].',
        options: ['[[had had|hubiera tenido]]', '[[have had|he tenido]]', '[[have|tengo]]'],
        correctAnswer: 'had had',
        acceptableAnswers: ['had had'],
        explanation: '[[Third conditional|Tercer condicional]]: [[if + past perfect|si + pasado perfecto]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g7',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[There|Hay]] ____ ____ ____ ____ [[people|gente]] [[at the concert|en el concierto]] [[—|—]] [[it|ello]] [[was|estaba]] ____ ____ ____ ____ [[crowded|abarrotado]].',
        options: ['[[so many / such|tantos / tal]]', '[[so much / so|tanto / tan]]', '[[such / so|tal / tan]]'],
        correctAnswer: 0,
        explanation: '[[So many + countable|So many + contable]]; [[such + noun|such + sustantivo]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g8',
    type: 'fill-blank',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[She|Ella]] ____ ____ ____ ____ [[interested in|interesada en]] [[learning|aprender]] [[German|alemán]].',
        options: ['[[is|está]]', '[[are|están]]', '[[be|ser]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: '[[Adjective + preposition|Adjetivo + preposición]]: [[interested in|interesado en]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'b1-final-g9',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[You|Tú]] ____ ____ ____ ____ [[better|mejor]] [[hurry up|darte prisa]] [[—|—]] [[we|nosotros]] [[are late|llegamos tarde]].',
        options: ['[[had|deberías]]', '[[have|tienes]]', '[[would|preferirías]]'],
        correctAnswer: 0,
        explanation: '[[Had better|Sería mejor]] [[for advice|para consejos]].',
      }],
    },
    topicName: 'Grammar',
  },
  // ─── Vocabulario (7) ─────────────────────────────────────────────────────
  {
    id: 'b1-final-v1',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A place where you buy books|Un lugar donde compras libros]]:',
        options: ['[[bookshop|librería]]', '[[bakery|panadería]]', '[[pharmacy|farmacia]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'b1-final-v2',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[To stop doing something difficult|Dejar de hacer algo difícil]]:',
        options: ['[[give up|rendirse]]', '[[take off|despegar]]', '[[look after|cuidar]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'b1-final-v3',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A person who writes for a newspaper|Una persona que escribe para un periódico]]:',
        options: ['[[journalist|periodista]]', '[[lawyer|abogado]]', '[[engineer|ingeniero]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'b1-final-v4',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[To depend on someone|Depender de alguien]]:',
        options: ['[[rely on|rely on]]', '[[look at|mirar]]', '[[wait for|esperar]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'b1-final-v5',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[The opposite of "success"|Lo contrario de "éxito"]]:',
        options: ['[[failure|fracaso]]', '[[achievement|logro]]', '[[progress|progreso]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'b1-final-v6',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[To discover information|Descubrir información]]:',
        options: ['[[find out|averiguar]]', '[[give up|rendirse]]', '[[take off|despegar]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'b1-final-v7',
    type: 'multiple-choice',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A meeting to discuss work|Una reunión para discutir trabajo]]:',
        options: ['[[conference|conferencia]]', '[[concert|concierto]]', '[[exhibition|exposición]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  // ─── Lectura (4) ─────────────────────────────────────────────────────────
  {
    id: 'b1-final-r1',
    type: 'reading',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[How long|Cuánto tiempo]] [[has the person been working|ha estado trabajando la persona]] [[as a journalist|como periodista]]?',
        options: ['[[Five years|Cinco años]]', '[[Ten years|Diez años]]', '[[Fifteen years|Quince años]]'],
        correctAnswer: 1,
        explanation: '[[I have been working for ten years|He estado trabajando desde hace diez años]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'b1-final-r2',
    type: 'reading',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[Where|Dónde]] [[was the conference|fue la conferencia]] [[held|celebrada]]?',
        options: ['[[In Madrid|En Madrid]]', '[[In Geneva|En Ginebra]]', '[[In London|En Londres]]'],
        correctAnswer: 1,
        explanation: '[[A conference in Geneva|Una conferencia en Ginebra]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'b1-final-r3',
    type: 'reading',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[What|Qué]] [[topic|tema]] [[was the conference about|era la conferencia sobre]]?',
        options: ['[[Technology|Tecnología]]', '[[Climate change|Cambio climático]]', '[[Education|Educación]]'],
        correctAnswer: 1,
        explanation: '[[A conference on climate change|Una conferencia sobre cambio climático]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'b1-final-r4',
    type: 'reading',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[When|Cuándo]] [[must the person hand in|debe entregar la persona]] [[the article|el artículo]]?',
        options: ['[[By Thursday|Para el jueves]]', '[[By Friday|Para el viernes]]', '[[By Monday|Para el lunes]]'],
        correctAnswer: 1,
        explanation: '[[I must hand in my article by Friday|Debo entregar mi artículo para el viernes]].',
      }],
    },
    topicName: 'Reading',
  },
  // ─── Escucha (4) ────────────────────────────────────────────────────────
  {
    id: 'b1-final-l1',
    type: 'listening',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Where|Dónde]] [[did Maria go|fue María]] [[on her business trip|en su viaje de negocios]]?',
        options: ['[[To Paris|A París]]', '[[To Berlin|A Berlín]]', '[[To Amsterdam|A Ámsterdam]]'],
        correctAnswer: 1,
        explanation: '[[I have just returned from a business trip to Berlin|Acabo de regresar de un viaje de negocios a Berlín]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'b1-final-l2',
    type: 'listening',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Who|Quién]] [[recommended the hotel|recomendó el hotel]]?',
        options: ['[[Her boss|Su jefe]]', '[[A colleague|Un compañero]]', '[[A friend|Un amigo]]'],
        correctAnswer: 1,
        explanation: '[[The hotel was recommended by a colleague|El hotel fue recomendado por un compañero]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'b1-final-l3',
    type: 'listening',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[What|Qué]] [[has been approved|ha sido aprobado]]?',
        options: ['[[The report|El informe]]', '[[The meeting|La reunión]]', '[[The trip|El viaje]]'],
        correctAnswer: 0,
        explanation: '[[The report I wrote has been approved|El informe que escribí ha sido aprobado]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'b1-final-l4',
    type: 'listening',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Is Maria used to|Está María acostumbrada]] [[travelling for work|a viajar por trabajo]]?',
        options: ['[[Yes|Sí]]', '[[No|No]]'],
        correctAnswer: 'Yes',
        explanation: '[[I am used to travelling for work now|Estoy acostumbrada a viajar por trabajo ahora]].',
      }],
    },
    topicName: 'Listening',
  },
  // ─── Escritura (3) ───────────────────────────────────────────────────────
  {
    id: 'b1-final-w1',
    type: 'writing',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Escribe dos o tres frases en inglés sobre un viaje que hiciste. Usa pasado simple y pasado perfecto si es posible.',
      expressionHint: 'Puedes usar: [[I went to|fui a]], [[I had never been|nunca había estado]], [[before|antes]], [[so|así que]], [[when|cuando]].',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b1-final-w2',
    type: 'writing',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Escribe dos frases: una con first conditional (if + present, will) y otra con second conditional (if + past, would).',
      expressionHint: 'Puedes usar: [[If it rains|si llueve]], [[I will|yo haré]]; [[If I had|si tuviera]], [[I would|yo haría]].',
      targetLength: '2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'b1-final-w3',
    type: 'writing',
    level: 'B1',
    topic: 'Test final B1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Describe en inglés tu rutina de trabajo o estudios (tres o cuatro frases). Usa presente simple, presente continuo o presente perfecto según corresponda.',
      expressionHint: 'Puedes usar: [[I work|trabajo]], [[I have been|he estado]], [[I usually|normalmente]], [[I am currently|actualmente estoy]].',
      targetLength: '3-4 frases',
    },
    topicName: 'Writing',
  },
];

export const FINAL_TEST_B1_TITLE = 'Test final B1';
