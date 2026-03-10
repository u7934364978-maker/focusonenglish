/**
 * Test final A2 — Evaluación de fin de nivel
 * 28 ítems: gramática (9), vocabulario (7), lectura (4), escucha (4), escritura (3).
 * Criterio aprobado: ≥ 70% aciertos.
 */

import { Exercise } from '@/lib/exercise-generator';

const TITLE = 'Test final A2';
const INSTRUCTIONS_GRAMMAR = 'Elige la opción correcta.';
const INSTRUCTIONS_VOCAB = 'Elige la palabra o frase correcta.';
const INSTRUCTIONS_READING = 'Lee el texto y responde.';
const INSTRUCTIONS_LISTENING = 'Escucha (o lee el texto) y responde.';

// Texto único para lectura (4 preguntas)
const READING_TEXT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[work|trabajo]] [[as|como]] [[a|un]] [[software|software]] [[engineer|ingeniero]] [[in|en]] [[Barcelona|Barcelona]]. [[I|Yo]] [[have|he]] [[been|estado]] [[living|viviendo]] [[here|aquí]] [[for|desde]] [[three|tres]] [[years|años]]. [[Last|El]] [[year|año pasado]] [[I|yo]] [[visited|visité]] [[Japan|Japón]] [[for|durante]] [[two|dos]] [[weeks|semanas]] [[and|y]] [[it|eso]] [[was|fue]] [[the|la]] [[most|más]] [[amazing|increíble]] [[trip|viaje]] [[I|que]] [[have|he]] [[ever|nunca]] [[had|tenido]]. [[Next|El]] [[month|próximo mes]] [[I|yo]] [[am going to|voy a]] [[start|empezar]] [[a|un]] [[new|nuevo]] [[project|proyecto]] [[with|con]] [[a|un]] [[team|equipo]] [[from|de]] [[Germany|Alemania]]. [[I|Yo]] [[have to|tengo que]] [[improve|mejorar]] [[my|mi]] [[German|alemán]] [[before|antes]] [[the|la]] [[meeting|reunión]].`;

// Transcript para listening (4 preguntas)
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Sarah|Sarah]] [[and|y]] [[I|yo]] [[am|estoy]] [[going to|voy a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[plans|planes]] [[for|para]] [[next|el próximo]] [[summer|verano]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[a|un]] [[flight|vuelo]] [[to|a]] [[Italy|Italia]]. [[I|Yo]] [[will|voy a]] [[visit|visitar]] [[Rome|Roma]], [[Florence|Florencia]] [[and|y]] [[Venice|Venecia]]. [[I|Yo]] [[have never|nunca he]] [[been|estado]] [[to|en]] [[Italy|Italia]] [[before|antes]], [[so|así que]] [[I|yo]] [[am|estoy]] [[very|muy]] [[excited|emocionada]]. [[I|Yo]] [[have to|tengo que]] [[learn|aprender]] [[some|algo de]] [[Italian|italiano]] [[because|porque]] [[I|yo]] [[want|quiero]] [[to|]] [[speak|hablar]] [[with|con]] [[the|los]] [[locals|locales]]. [[My|Mi]] [[sister|hermana]] [[is|está]] [[coming|viniendo]] [[with|con]] [[me|mí]] [[and|y]] [[we|nosotros]] [[are going to|vamos a]] [[stay|quedarnos]] [[in|en]] [[small|pequeños]] [[hotels|hoteles]] [[in|en]] [[the|el]] [[centre|centro]] [[of|de]] [[each|cada]] [[city|ciudad]].`;

export const FINAL_TEST_A2_EXERCISES: Exercise[] = [
  // ─── Gramática (9) ───────────────────────────────────────────────────────
  {
    id: 'a2-final-g1',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[She|Ella]] ____ ____ ____ [[wear|llevar]] [[a|un]] [[uniform|uniforme]] [[at|en]] [[work|trabajo]].',
        options: ['[[has to|tiene que]]', '[[have to|tengo que]]', '[[must to|debe a]]'],
        correctAnswer: 'has to',
        acceptableAnswers: ['has to'],
        explanation: '[[Third person|Tercera persona]]: [[she has to|ella tiene que]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g2',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[Next|El próximo]] [[weekend|fin de semana]] [[I|yo]] ____ ____ ____ [[visit|visitar]] [[my|a mis]] [[parents|padres]].',
        options: ['[[am going to|voy a]]', '[[will|will]]', '[[am visiting|estoy visitando]]'],
        correctAnswer: 'am going to',
        acceptableAnswers: ['am going to'],
        explanation: '[[Going to|Ir a]] [[for plans|para planes]] [[already decided|ya decididos]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g3',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[I|Yo]] ____ ____ ____ [[never|nunca]] [[been|estado]] [[to|en]] [[Paris|París]].',
        options: ['[[have|he]]', '[[has|ha]]', '[[had|había]]'],
        correctAnswer: 'have',
        acceptableAnswers: ['have'],
        explanation: '[[Present Perfect|Presente perfecto]]: [[I have been|he estado]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g4',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[This|Este]] [[hotel|hotel]] [[is|es]] ____ ____ [[that|ese]] [[one|uno]].',
        options: ['[[more expensive|más caro]]', '[[most expensive|el más caro]]', '[[expensiver|incorrecto]]'],
        correctAnswer: 'more expensive',
        acceptableAnswers: ['more expensive'],
        explanation: '[[Comparative|Comparativo]]: [[more + adjective|más + adjetivo]] [[for long adjectives|para adjetivos largos]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[The|El]] [[man|hombre]] ____ ____ ____ [[helped|ayudó]] [[me|me]] [[was|era]] [[very|muy]] [[kind|amable]].',
        options: ['[[who|que]]', '[[which|que]]', '[[where|donde]]'],
        correctAnswer: 0,
        explanation: '[[Who|Who]] [[for people|para personas]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g6',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[You|Tú]] ____ ____ [[smoke|fumar]] [[here|aquí]]. [[It|Es]] [[is|]] [[prohibited|prohibido]].',
        options: ['[[mustn\'t|no debes]]', '[[don\'t have to|no tienes que]]', '[[shouldn\'t|no deberías]]'],
        correctAnswer: "mustn't",
        acceptableAnswers: ["mustn't", 'mustnt'],
        explanation: '[[Mustn\'t|No debes]] [[for prohibition|para prohibición]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g7',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[She|Ella]] ____ ____ ____ [[lived|vivido]] [[in|en]] [[London|Londres]] [[for|desde]] [[five|cinco]] [[years|años]].',
        options: ['[[has|ha]]', '[[have|he]]', '[[had|había]]'],
        correctAnswer: 'has',
        acceptableAnswers: ['has'],
        explanation: '[[Present Perfect|Presente perfecto]]: [[she has lived|ella ha vivido]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g8',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[Mount Everest|El Monte Everest]] [[is|es]] ____ ____ ____ ____ [[mountain|montaña]] [[in|del]] [[the world|mundo]].',
        options: ['[[the highest|la más alta]]', '[[higher than|más alta que]]', '[[the most high|incorrecto]]'],
        correctAnswer: 0,
        explanation: '[[Superlative|Superlativo]]: [[the highest|la más alta]].',
      }],
    },
    topicName: 'Grammar',
  },
  {
    id: 'a2-final-g9',
    type: 'fill-blank',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_GRAMMAR,
      questions: [{
        question: '[[I|Yo]] ____ ____ ____ ____ [[finish|terminar]] [[this|este]] [[report|informe]] [[by|para]] [[Friday|viernes]].',
        options: ['[[have to|tengo que]]', '[[has to|tiene que]]', '[[must to|debo a]]'],
        correctAnswer: 'have to',
        acceptableAnswers: ['have to'],
        explanation: '[[I have to|Tengo que]] [[for obligation|para obligación]].',
      }],
    },
    topicName: 'Grammar',
  },
  // ─── Vocabulario (7) ─────────────────────────────────────────────────────
  {
    id: 'a2-final-v1',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A person who designs buildings|Una persona que diseña edificios]]:',
        options: ['[[architect|arquitecto]]', '[[engineer|ingeniero]]', '[[pilot|piloto]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-final-v2',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[Where do you go to catch a plane|Dónde vas para coger un avión]]?',
        options: ['[[airport|aeropuerto]]', '[[station|estación]]', '[[port|puerto]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-final-v3',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[The document you need to travel abroad|El documento que necesitas para viajar al extranjero]]:',
        options: ['[[passport|pasaporte]]', '[[ticket|billete]]', '[[receipt|recibo]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-final-v4',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[Opposite of|Lo contrario de]] "[[departure|salida]]" [[is|es]]:',
        options: ['[[arrival|llegada]]', '[[delay|retraso]]', '[[boarding|embarque]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-final-v5',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A place where you can borrow books|Un lugar donde puedes tomar libros prestados]]:',
        options: ['[[library|biblioteca]]', '[[bookshop|librería]]', '[[museum|museo]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-final-v6',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[When a flight is late|Cuando un vuelo llega tarde]] [[we say it is|decimos que está]]:',
        options: ['[[delayed|retrasado]]', '[[cancelled|cancelado]]', '[[early|temprano]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a2-final-v7',
    type: 'multiple-choice',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_VOCAB,
      questions: [{
        question: '[[A person who fixes cars|Una persona que arregla coches]]:',
        options: ['[[mechanic|mecánico]]', '[[driver|conductor]]', '[[pilot|piloto]]'],
        correctAnswer: 0,
      }],
    },
    topicName: 'Vocabulary',
  },
  // ─── Lectura (4) ─────────────────────────────────────────────────────────
  {
    id: 'a2-final-r1',
    type: 'reading',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[Where|Dónde]] [[does Tom work|trabaja Tom]]?',
        options: ['[[In Barcelona|En Barcelona]]', '[[In Japan|En Japón]]', '[[In Germany|En Alemania]]'],
        correctAnswer: 0,
        explanation: '[[I work in Barcelona|Trabajo en Barcelona]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a2-final-r2',
    type: 'reading',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[How long|Cuánto tiempo]] [[has Tom been living|lleva Tom viviendo]] [[in Barcelona|en Barcelona]]?',
        options: ['[[Two years|Dos años]]', '[[Three years|Tres años]]', '[[Five years|Cinco años]]'],
        correctAnswer: 1,
        explanation: '[[I have been living here for three years|Llevo viviendo aquí tres años]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a2-final-r3',
    type: 'reading',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[What|Qué]] [[does Tom have to do|tiene que hacer Tom]] [[before the meeting|antes de la reunión]]?',
        options: ['[[Visit Japan|Visitar Japón]]', '[[Improve his German|Mejorar su alemán]]', '[[Start a new project|Empezar un nuevo proyecto]]'],
        correctAnswer: 1,
        explanation: '[[I have to improve my German before the meeting|Tengo que mejorar mi alemán antes de la reunión]].',
      }],
    },
    topicName: 'Reading',
  },
  {
    id: 'a2-final-r4',
    type: 'reading',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: READING_TEXT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_READING,
      questions: [{
        question: '[[What|Qué]] [[is Tom going to do|va a hacer Tom]] [[next month|el próximo mes]]?',
        options: ['[[Visit Japan|Visitar Japón]]', '[[Start a new project|Empezar un nuevo proyecto]]', '[[Learn German|Aprender alemán]]'],
        correctAnswer: 1,
        explanation: '[[Next month I am going to start a new project|El próximo mes voy a empezar un nuevo proyecto]].',
      }],
    },
    topicName: 'Reading',
  },
  // ─── Escucha (4) ────────────────────────────────────────────────────────
  {
    id: 'a2-final-l1',
    type: 'listening',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Where|A dónde]] [[is Sarah going|va Sarah]] [[next summer|el próximo verano]]?',
        options: ['[[To Spain|A España]]', '[[To Italy|A Italia]]', '[[To France|A Francia]]'],
        correctAnswer: 1,
        explanation: '[[I have already booked a flight to Italy|Ya he reservado un vuelo a Italia]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'a2-final-l2',
    type: 'listening',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Has Sarah been to Italy before|Ha estado Sarah en Italia antes]]?',
        options: ['[[Yes, many times|Sí, muchas veces]]', '[[No, never|No, nunca]]', '[[Only once|Solo una vez]]'],
        correctAnswer: 1,
        explanation: '[[I have never been to Italy before|Nunca he estado en Italia antes]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'a2-final-l3',
    type: 'listening',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Why|Por qué]] [[does Sarah have to learn Italian|tiene que aprender italiano Sarah]]?',
        options: ['[[For work|Para trabajar]]', '[[To speak with the locals|Para hablar con los locales]]', '[[For her exam|Para su examen]]'],
        correctAnswer: 1,
        explanation: '[[I have to learn some Italian because I want to speak with the locals|Tengo que aprender algo de italiano porque quiero hablar con los locales]].',
      }],
    },
    topicName: 'Listening',
  },
  {
    id: 'a2-final-l4',
    type: 'listening',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    transcript: LISTENING_TRANSCRIPT,
    content: {
      title: TITLE,
      instructions: INSTRUCTIONS_LISTENING,
      questions: [{
        question: '[[Who|Quién]] [[is coming with Sarah|va con Sarah]]?',
        options: ['[[Her brother|Su hermano]]', '[[Her sister|Su hermana]]', '[[Her friend|Su amiga]]'],
        correctAnswer: 1,
        explanation: '[[My sister is coming with me|Mi hermana viene conmigo]].',
      }],
    },
    topicName: 'Listening',
  },
  // ─── Escritura (3) ────────────────────────────────────────────────────────
  {
    id: 'a2-final-w1',
    type: 'writing',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Escribe dos o tres frases en inglés sobre tus planes para las próximas vacaciones.',
      expressionHint: 'Puedes usar: [[I am going to|voy a]], [[I will|voy a]], [[I have to|tengo que]], [[I want to|quiero]], [[because|porque]]…',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'a2-final-w2',
    type: 'writing',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Describe en inglés el viaje más interesante que has hecho (dos o tres frases).',
      expressionHint: 'Puedes usar: [[I went to|fui a]], [[I visited|visité]], [[I have been to|he estado en]], [[it was|fue]], [[the most|el más]]…',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
  {
    id: 'a2-final-w3',
    type: 'writing',
    level: 'A2',
    topic: 'Test final A2',
    difficulty: 'medium',
    content: {
      title: TITLE,
      instructions: 'Escribe dos o tres frases sobre algo que tienes que hacer esta semana y por qué.',
      expressionHint: 'Puedes usar: [[I have to|tengo que]], [[I must|debo]], [[because|porque]], [[this week|esta semana]]…',
      targetLength: '2-3 frases',
    },
    topicName: 'Writing',
  },
];

export const FINAL_TEST_A2_TITLE = 'Test final A2';
