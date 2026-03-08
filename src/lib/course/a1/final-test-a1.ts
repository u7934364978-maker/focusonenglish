/**
 * Test final A1 — Evaluación de fin de nivel
 * 28 ítems: gramática (9), vocabulario (7), lectura (4), escucha (4), escritura (3).
 * Criterio aprobado: ≥ 70% aciertos.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Test final A1';
const INSTRUCTIONS_GRAMMAR = 'Elige la opción correcta.';
const INSTRUCTIONS_VOCAB = 'Elige la palabra o frase correcta.';
const INSTRUCTIONS_READING = 'Lee el texto y responde.';
const INSTRUCTIONS_LISTENING = 'Escucha (o lee el texto) y responde.';
// Instrucciones de escritura del test: se definen por ejercicio (sin frase guía; opcionalmente expressionHint).

// Texto único para lectura (4 preguntas)
const READING_TEXT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Anna|Anna]]. [[I|Yo]] [[live|vivo]] [[in|en]] [[Madrid|Madrid]] [[with|con]] [[my|mi]] [[family|familia]]. [[I|Yo]] [[work|trabajo]] [[in|en]] [[an|una]] [[office|oficina]] [[from|de]] [[Monday|lunes]] [[to|a]] [[Friday|viernes]]. [[Every|cada]] [[morning|mañana]] [[I|yo]] [[get|me]] [[up|levanto]] [[at|a]] [[seven|siete]] [[o'clock|en punto]] [[and|y]] [[have|tomo]] [[breakfast|desayuno]]. [[I|Yo]] [[usually|normalmente]] [[have|tomo]] [[coffee|café]] [[and|y]] [[toast|tostadas]]. [[At|Por]] [[the|la]] [[weekend|fin de semana]] [[I|yo]] [[like|me gusta]] [[to|]] [[relax|relajarme]] [[and|y]] [[meet|quedar]] [[my|con mis]] [[friends|amigos]]. [[Last|El]] [[weekend|fin de semana pasado]] [[we|nosotros]] [[went|fuimos]] [[to|a]] [[the|el]] [[cinema|cine]].`;

// Transcript para listening (4 preguntas)
const LISTENING_TRANSCRIPT = `[[Hello|Hola]]. [[I|Yo]] [[am|soy]] [[going|voy]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[trip|viaje]]. [[Last|El]] [[year|año pasado]] [[I|yo]] [[went|fui]] [[to|a]] [[London|Londres]] [[by|en]] [[plane|avión]]. [[I|Yo]] [[stayed|me alojé]] [[in|en]] [[a|un]] [[hotel|hotel]] [[near|cerca de]] [[the|la]] [[station|estación]]. [[Every|cada]] [[day|día]] [[I|yo]] [[visited|visité]] [[museums|museos]] [[and|y]] [[ate|comí]] [[in|en]] [[restaurants|restaurantes]]. [[I|Yo]] [[bought|compré]] [[souvenirs|recuerdos]] [[for|para]] [[my|mi]] [[family|familia]]. [[I|Yo]] [[had|tuve]] [[a|una]] [[great|gran]] [[time|estancia]].`;

export const FINAL_TEST_A1_EXERCISES: Exercise[] = [
  // ─── Gramática (9) ───────────────────────────────────────────────────────
  {
    id: 'a1-final-g1',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[She|Ella]] ____ [[a|una]] [[teacher|profesora]].',
        options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'],
        correctAnswer: 'is',
        acceptableAnswers: ['is'],
        explanation: '[[With|Con]] [[she|ella]] [[we use|usamos]] "[[is|es]]".',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g2',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[He|Él]] ____ [[to work|al trabajo]] [[every day|cada día]].',
        options: ['[[go|ir]]', '[[goes|va]]', '[[going|yendo]]'],
        correctAnswer: 'goes',
        acceptableAnswers: ['goes'],
        explanation: '[[Third person|Tercera persona]]: [[he/she/it + verb + s|he/she/it + verbo + s]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[There|Hay]] ____ [[a|una]] [[book|libro]] [[on|en]] [[the|la]] [[table|mesa]].',
        options: ['[[is|hay (singular)]]', '[[are|hay (plural)]]', '[[have|tener]]'],
        correctAnswer: 0,
        explanation: '[[There is|Hay]] [[for singular|para singular]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g4',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[She|Ella]] ____ [[speak|hablar]] [[Spanish|español]] [[very well|muy bien]].',
        options: ['[[can|puede]]', '[[cans|incorrecto]]', '[[is can|incorrecto]]'],
        correctAnswer: 'can',
        acceptableAnswers: ['can'],
        explanation: '[[Can + infinitive|Can + infinitivo]] [[without to|sin to]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g5',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[Yesterday|Ayer]] [[I|yo]] ____ [[to the cinema|al cine]].',
        options: ['[[go|ir]]', '[[went|fui]]', '[[goed|incorrecto]]'],
        correctAnswer: 'went',
        acceptableAnswers: ['went'],
        explanation: '[[Past Simple|Pasado simple]] [[of go is went|de go es went]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g6',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[There is not|No hay]] ____ [[milk|leche]] [[in the fridge|en la nevera]].',
        options: ['[[some|algún]]', '[[any|ninguno]]', '[[many|muchos]]'],
        correctAnswer: 'any',
        acceptableAnswers: ['any'],
        explanation: '[[In negatives we use any|En negativas usamos any]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '____ ____ [[water|agua]] [[do you want|quieres]]?',
        options: ['[[How much|Cuánto]]', '[[How many|Cuántos]]', '[[How|Cómo]]'],
        correctAnswer: 0,
        explanation: '[[How much for uncountables|How much para incontables]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g8',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[This bag|Esta bolsa]] [[is|es]] ____ ____ [[to carry|para llevar]] [[everything|todo]].',
        options: ['[[enough big|incorrecto]]', '[[big enough|suficientemente grande]]', '[[too big|demasiado grande]]'],
        correctAnswer: 'big enough',
        acceptableAnswers: ['big enough'],
        explanation: '[[Enough after adjective|Enough después del adjetivo]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a1-final-g9',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[You|Tú]] ____ [[wear|llevar]] [[a seatbelt|el cinturón]] [[in the car|en el coche]].',
        options: ['[[should|deberías]]', '[[can|puedes]]', '[[must|debes (obligación fuerte)]]'],
        correctAnswer: 2,
        explanation: '[[Must for obligation|Must para obligación]].',
      }],
    },
    topicName: 'Grammar',
  },
  // ─── Vocabulario (7) ─────────────────────────────────────────────────────
  {
    id: 'a1-final-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[Opposite of|Lo contrario de]] "[[expensive|caro]]" [[is|es]]:',
        options: ['[[cheap|barato]]', '[[big|grande]]', '[[fast|rápido]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-final-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[Where do you catch|Dónde coges]] [[a train|un tren]]?',
        options: ['[[At the station|En la estación]]', '[[At the supermarket|En el supermercado]]', '[[At the hospital|En el hospital]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-final-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[I need to|Necesito]] ____ [[my passport|mi pasaporte]] [[before the flight|antes del vuelo]].',
        options: ['[[show|mostrar]]', '[[eat|comer]]', '[[sleep|dormir]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-final-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A place where you buy|Un lugar donde compras]] [[fruit and vegetables|fruta y verdura]]:',
        options: ['[[market|mercado]]', '[[airport|aeropuerto]]', '[[bank|banco]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-final-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[The day after|El día después de]] [[Friday|viernes]] [[is|es]]:',
        options: ['[[Saturday|sábado]]', '[[Sunday|domingo]]', '[[Thursday|jueves]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-final-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[You use this to|Usas esto para]] [[cut paper|cortar papel]]:',
        options: ['[[scissors|tijeras]]', '[[umbrella|paraguas]]', '[[key|llave]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-final-v7',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[When you are sick you go to|Cuando estás enfermo vas a]]:',
        options: ['[[the doctor|el médico]]', '[[the bakery|la panadería]]', '[[the library|la biblioteca]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  // ─── Lectura (4) ─────────────────────────────────────────────────────────
  {
    id: 'a1-final-r1',
    type: 'reading',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[Where|Dónde]] [[does Anna live|vive Anna]]?',
        options: ['[[In Madrid|En Madrid]]', '[[In London|En Londres]]', '[[In Barcelona|En Barcelona]]'],
        correctAnswer: 0,
        explanation: '[[I live in Madrid|Vivo en Madrid]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-final-r2',
    type: 'reading',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[What time|A qué hora]] [[does she get up|se levanta]]?',
        options: ['[[At six|A las seis]]', '[[At seven|A las siete]]', '[[At eight|A las ocho]]'],
        correctAnswer: 1,
        explanation: '[[I get up at seven o\'clock|Me levanto a las siete]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-final-r3',
    type: 'reading',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[What did she do|Qué hizo]] [[last weekend|el fin de semana pasado]]?',
        options: ['[[She stayed at home|Se quedó en casa]]', '[[She went to the cinema|Fue al cine]]', '[[She went to work|Fue a trabajar]]'],
        correctAnswer: 1,
        explanation: '[[Last weekend we went to the cinema|Fuimos al cine]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a1-final-r4',
    type: 'reading',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[What does she usually have|Qué suele tomar]] [[for breakfast|en el desayuno]]?',
        options: ['[[Tea and biscuits|Té y galletas]]', '[[Coffee and toast|Café y tostadas]]', '[[Juice and eggs|Zumo y huevos]]'],
        correctAnswer: 1,
        explanation: '[[I usually have coffee and toast|Suelo tomar café y tostadas]].',
      }],
    },
    topicName: 'Reading',
  },
  // ─── Escucha (4) ────────────────────────────────────────────────────────
  {
    id: 'a1-final-l1',
    type: 'listening',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Where did the person go|A dónde fue la persona]] [[last year|el año pasado]]?',
        options: ['[[To London|A Londres]]', '[[To Paris|A París]]', '[[To Rome|A Roma]]'],
        correctAnswer: 0,
        explanation: '[[I went to London|Fui a Londres]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-final-l2',
    type: 'listening',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[How did they travel|Cómo viajó]]?',
        options: ['[[By plane|En avión]]', '[[By train|En tren]]', '[[By car|En coche]]'],
        correctAnswer: 0,
        explanation: '[[I went to London by plane|Fui a Londres en avión]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-final-l3',
    type: 'listening',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[What did they do every day|Qué hizo cada día]]?',
        options: ['[[Stayed at the hotel|Se quedó en el hotel]]', '[[Visited museums and ate in restaurants|Visitó museos y comió en restaurantes]]', '[[Went to the airport|Fue al aeropuerto]]'],
        correctAnswer: 1,
        explanation: '[[Every day I visited museums and ate in restaurants|Cada día visité museos y comí en restaurantes]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'a1-final-l4',
    type: 'listening',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Who did they buy souvenirs for|Para quién compró recuerdos]]?',
        options: ['[[For friends|Para amigos]]', '[[For family|Para la familia]]', '[[For colleagues|Para compañeros]]'],
        correctAnswer: 1,
        explanation: '[[I bought souvenirs for my family|Compré recuerdos para mi familia]].',
      }],
    },
    topicName: 'Listening',
  },
  // ─── Escritura (3): instrucción clara + pista de expresiones (sin frase modelo guía) ───
  {
    id: 'a1-final-w1',
    type: 'writing',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Escribe una o dos frases en inglés sobre qué hiciste el fin de semana pasado.',
      expressionHint: 'Puedes usar, por ejemplo: [[last weekend|el fin de semana pasado]], [[I watched|vi]], [[I went|fui]], [[I visited|visité]], [[I met|quedé con]]… (pasado simple: watched, went, had, etc.).',
      targetLength: '1-2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-final-w2',
    type: 'writing',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Escribe una o dos frases en inglés sobre qué debes hacer en el aeropuerto antes de volar.',
      expressionHint: 'Puedes usar: [[must|debes]] / [[should|deberías]], [[show your passport|mostrar el pasaporte]], [[go through security|pasar por seguridad]], [[check in|facturar]], [[board the plane|embarcar]].',
      targetLength: '1-2 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'a1-final-w3',
    type: 'writing',
    level: 'A1',
    topic: 'Test final A1',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Describe en inglés tu rutina de por la mañana (dos o tres frases).',
      expressionHint: 'Puedes usar: [[I get up|me levanto]] [[at|a]] [[… o\'clock|en punto]], [[I have breakfast|desayuno]], [[I go to work|voy al trabajo]], [[I leave home|salgo de casa]]… (Present Simple: get, have, go, leave).',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
];

export const FINAL_TEST_A1_TITLE = 'Test final A1';
