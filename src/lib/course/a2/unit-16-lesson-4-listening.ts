/**
 * Unidad 16 — Lección 4: Comprensión auditiva (Past Continuous)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Yesterday|Ayer]] [[afternoon|tarde]] [[at|a]] [[3pm|las 3]] [[I|yo]] [[was|estaba]] [[reading|leyendo]] [[a|un]] [[book|libro]] [[in|en]] [[the|el]] [[park|parque]]. [[My|Mi]] [[friend|amigo]] [[was|estaba]] [[running|corriendo]] [[around|alrededor]] [[the|el]] [[lake|lago]]. [[Some|Algunos]] [[children|niños]] [[were|estaban]] [[playing|jugando]] [[football|fútbol]] [[near|cerca]]. [[Suddenly|De repente]] [[it|él]] [[started|empezó]] [[to|a]] [[rain|llover]]. [[Everyone|Todos]] [[was|estaba]] [[running|corriendo]] [[to|a]] [[find|encontrar]] [[shelter|refugio]]. [[I|Yo]] [[was|estaba]] [[getting|poniéndome]] [[wet|mojado]] [[when|cuando]] [[a|una]] [[kind|amable]] [[woman|mujer]] [[offered|ofreció]] [[me|a mí]] [[her|su]] [[umbrella|paraguas]]. [[We|Nosotros]] [[waited|esperamos]] [[under|bajo]] [[a|un]] [[tree|árbol]] [[until|hasta]] [[the|la]] [[rain|lluvia]] [[stopped|paró]]. [[At|A]] [[that|ese]] [[moment|momento]] [[the|el]] [[sun|sol]] [[was|estaba]] [[coming out|saliendo]] [[again|de nuevo]]. [[I|Yo]] [[was|estaba]] [[grateful|agradecido]] [[for|por]] [[her|su]] [[help|ayuda]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[did|ocurrió]] [[this|esto]] [[happen|ocurrir]]?',
    options: ['[[yesterday|ayer]] [[morning|mañana]]', '[[yesterday|ayer]] [[afternoon|tarde]]', '[[today|hoy]] [[morning|mañana]]', '[[last week|la semana pasada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Yesterday afternoon|Ayer por la tarde]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[the|el]] [[speaker|hablante]] [[doing|haciendo]] [[at|a]] [[3pm|las 3]]?',
    options: ['[[running|corriendo]]', '[[playing|jugando]] [[football|fútbol]]', '[[reading|leyendo]] [[a|un]] [[book|libro]] [[in|en]] [[the|el]] [[park|parque]]', '[[cooking|cocinando]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I was reading a book in the park|Estaba leyendo un libro en el parque]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[his|su]] [[friend|amigo]] [[doing|haciendo]]?',
    options: ['[[reading|leyendo]]', '[[running|corriendo]] [[around|alrededor]] [[the|el]] [[lake|lago]]', '[[playing|jugando]] [[football|fútbol]]', '[[sleeping|durmiendo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My friend was running around the lake|Mi amigo estaba corriendo alrededor del lago]]".',
  },
  {
    question: '[[What|Qué]] [[were|estaban]] [[the|los]] [[children|niños]] [[doing|haciendo]]?',
    options: ['[[reading|leyendo]]', '[[running|corriendo]]', '[[playing|jugando]] [[football|fútbol]]', '[[swimming|nadando]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[Some children were playing football|Algunos niños estaban jugando al fútbol]]".',
  },
  {
    question: '[[What|Qué]] [[happened|pasó]] [[suddenly|de repente]]?',
    options: ['[[the|el]] [[sun|sol]] [[came out|salió]]', '[[it|él]] [[started|empezó]] [[to|a]] [[rain|llover]]', '[[a|un]] [[friend|amigo]] [[arrived|llegó]]', '[[the|el]] [[park|parque]] [[closed|cerró]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Suddenly it started to rain|De repente empezó a llover]]".',
  },
  {
    question: '[[Who|Quién]] [[offered|ofreció]] [[the|el]] [[speaker|hablante]] [[an|un]] [[umbrella|paraguas]]?',
    options: ['[[his|su]] [[friend|amigo]]', '[[a|una]] [[kind|amable]] [[woman|mujer]]', '[[a|un]] [[child|niño]]', '[[a|un]] [[man|hombre]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[A kind woman offered me her umbrella|Una mujer amable me ofreció su paraguas]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|esperaron]] [[they|ellos]] [[wait|esperar]] [[until|hasta]] [[the|la]] [[rain|lluvia]] [[stopped|paró]]?',
    options: ['[[in|en]] [[a|una]] [[cafe|café]]', '[[under|bajo]] [[a|un]] [[tree|árbol]]', '[[in|en]] [[the|el]] [[car|coche]]', '[[at|en]] [[home|casa]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We waited under a tree until the rain stopped|Esperamos bajo un árbol hasta que paró la lluvia]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[was|estaba]] [[playing|jugando]] [[football|fútbol]] [[at|a]] [[3pm|las 3]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[was|estaba]] [[reading|leyendo]] [[a|un]] [[book|libro]], [[not|no]] [[playing|jugando]] [[football|fútbol]].',
  },
  {
    question: '[[The|El]] [[sun|sol]] [[was|estaba]] [[coming out|saliendo]] [[after|después]] [[the|la]] [[rain|lluvia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[At that moment the sun was coming out again|En ese momento el sol estaba saliendo de nuevo]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[was|estaba]] [[grateful|agradecido]] [[for|por]] [[the|la]] [[woman\'s|de la mujer]] [[help|ayuda]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I was grateful for her help|Estaba agradecido por su ayuda]]".',
  },
  {
    question: '[[The|Los]] [[children|niños]] [[were|estaban]] [[swimming|nadando]] [[in|en]] [[the|el]] [[lake|lago]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[were|estaban]] [[playing|jugando]] [[football|fútbol]], [[not|no]] [[swimming|nadando]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[Activities|Actividades]] [[in|en]] [[the|el]] [[park|parque]] [[and|y]] [[rain|lluvia]] [[with|con]] Past Continuous', '[[A|Un]] [[trip|viaje]] [[to|a]] [[the|la]] [[beach|playa]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[activities|actividades]] [[in|en]] [[progress|progreso]] (Past Continuous) [[and|y]] [[an|un]] [[event|evento]] [[with|con]] [[rain|lluvia]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[A|Una]] [[woman|mujer]] [[in|en]] [[the|el]] [[park|parque]]', '[[A|Una]] [[person|persona]] [[who|que]] [[was|estaba]] [[in|en]] [[the|el]] [[park|parque]] [[yesterday|ayer]]', '[[A|Un]] [[child|niño]]', '[[The|El]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[describes|describe]] [[his|su]] [[experience|experiencia]] [[in|en]] [[the|el]] [[park|parque]] ("[[I was reading|Estaba leyendo]]").',
  },
  {
    question: '[[What|Qué]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[to|para]] [[describe|describir]] [[what|qué]] [[people|gente]] [[were|estaban]] [[doing|haciendo]]?',
    options: ['[[Present Simple|Presente Simple]]', '[[Past Continuous|Pasado Continuo]]', '[[Future|Futuro]]', '[[Present Perfect|Presente Perfecto]]'],
    correctAnswer: 1,
    explanation: '[[Past Continuous|Pasado Continuo]]: [[was reading|estaba leyendo]], [[was running|estaba corriendo]], [[were playing|estaban jugando]].',
  },
  {
    question: '[[Where|Dónde]] [[did|ocurrió]] [[this|esto]] [[happen|ocurrir]]?',
    options: ['[[at|en]] [[home|casa]]', '[[in|en]] [[the|el]] [[park|parque]]', '[[at|en]] [[school|la escuela]]', '[[in|en]] [[a|un]] [[cafe|café]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I was reading a book in the park|Estaba leyendo un libro en el parque]]".',
  },
];

export const UNIT_16_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u16-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Past Continuous',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
