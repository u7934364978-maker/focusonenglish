/**
 * Unidad 17 — Lección 3: Comprensión lectora (Past Simple + Past Continuous, when/while, story connectors)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[At first|Al principio]] [[last|el]] [[Saturday|sábado]] [[I|yo]] [[was|estaba]] [[walking|caminando]] [[in|en]] [[the|el]] [[park|parque]] [[when|cuando]] [[I|yo]] [[met|conocí]] [[an|un]] [[old|viejo]] [[friend|amigo]]. [[We|Nosotros]] [[were|estábamos]] [[talking|hablando]] [[while|mientras]] [[we|nosotros]] [[walked|caminábamos]] [[around|alrededor]] [[the|el]] [[lake|lago]]. [[Then|Entonces]] [[suddenly|de repente]] [[it|él]] [[started|empezó]] [[to|a]] [[rain|llover]]. [[We|Nosotros]] [[were|estábamos]] [[running|corriendo]] [[to|a]] [[find|encontrar]] [[shelter|refugio]] [[when|cuando]] [[a|una]] [[woman|mujer]] [[offered|ofreció]] [[us|a nosotros]] [[her|su]] [[umbrella|paraguas]]. [[We|Nosotros]] [[waited|esperamos]] [[under|bajo]] [[a|un]] [[tree|árbol]] [[until|hasta]] [[the|la]] [[rain|lluvia]] [[stopped|paró]]. [[Finally|Finalmente]] [[the|el]] [[sun|sol]] [[came out|salió]] [[and|y]] [[we|nosotros]] [[continued|continuamos]] [[our|nuestro]] [[walk|paseo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[did|ocurrió]] [[this|esto]] [[happen|ocurrir]]?',
    options: ['[[Friday|Viernes]]', '[[Saturday|Sábado]]', '[[Sunday|Domingo]]', '[[Monday|Lunes]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Last Saturday|El sábado pasado]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[the|el]] [[narrator|narrador]] [[doing|haciendo]] [[when|cuando]] [[he|él]] [[met|conoció]] [[his|su]] [[friend|amigo]]?',
    options: ['[[running|corriendo]]', '[[walking|caminando]] [[in|en]] [[the|el]] [[park|parque]]', '[[sitting|sentado]]', '[[swimming|nadando]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I was walking in the park when I met an old friend|Estaba caminando en el parque cuando conocí a un viejo amigo]]".',
  },
  {
    question: '[[What|Qué]] [[were|estaban]] [[they|ellos]] [[doing|haciendo]] [[while|mientras]] [[they|ellos]] [[walked|caminaban]] [[around|alrededor]] [[the|el]] [[lake|lago]]?',
    options: ['[[running|corriendo]]', '[[talking|hablando]]', '[[swimming|nadando]]', '[[eating|comiendo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We were talking while we walked around the lake|Estábamos hablando mientras caminábamos alrededor del lago]]".',
  },
  {
    question: '[[What|Qué]] [[happened|pasó]] [[suddenly|de repente]]?',
    options: ['[[the|el]] [[sun|sol]] [[came out|salió]]', '[[it|él]] [[started|empezó]] [[to|a]] [[rain|llover]]', '[[they|ellos]] [[found|encontraron]] [[shelter|refugio]]', '[[a|un]] [[friend|amigo]] [[arrived|llegó]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Suddenly it started to rain|De repente empezó a llover]]".',
  },
  {
    question: '[[Who|Quién]] [[offered|ofreció]] [[them|a ellos]] [[an|un]] [[umbrella|paraguas]]?',
    options: ['[[a|un]] [[man|hombre]]', '[[a|una]] [[woman|mujer]]', '[[their|su]] [[friend|amigo]]', '[[a|un]] [[child|niño]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[A woman offered us her umbrella|Una mujer nos ofreció su paraguas]]".',
  },
  {
    question: '[[Where|Dónde]] [[did|esperaron]] [[they|ellos]] [[wait|esperar]] [[until|hasta]] [[the|la]] [[rain|lluvia]] [[stopped|paró]]?',
    options: ['[[in|en]] [[a|un]] [[cafe|café]]', '[[under|bajo]] [[a|un]] [[tree|árbol]]', '[[at|en]] [[home|casa]]', '[[in|en]] [[the|el]] [[car|coche]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We waited under a tree until the rain stopped|Esperamos bajo un árbol hasta que paró la lluvia]]".',
  },
  {
    question: '[[What|Qué]] [[happened|pasó]] [[finally|finalmente]]?',
    options: ['[[they|ellos]] [[went|fueron]] [[home|casa]]', '[[the|el]] [[sun|sol]] [[came out|salió]] [[and|y]] [[they|ellos]] [[continued|continuaron]] [[their|su]] [[walk|paseo]]', '[[it|él]] [[rained|llovió]] [[again|de nuevo]]', '[[they|ellos]] [[met|conocieron]] [[another|otro]] [[friend|amigo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Finally the sun came out and we continued our walk|Finalmente salió el sol y continuamos nuestro paseo]]".',
  },
  {
    question: '[[The|El]] [[narrator|narrador]] [[was|estaba]] [[running|corriendo]] [[when|cuando]] [[he|él]] [[met|conoció]] [[his|su]] [[friend|amigo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[was|estaba]] [[walking|caminando]], [[not|no]] [[running|corriendo]].',
  },
  {
    question: '[[They|Ellos]] [[were|estaban]] [[talking|hablando]] [[while|mientras]] [[they|ellos]] [[walked|caminaban]] [[around|alrededor]] [[the|el]] [[lake|lago]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[We were talking while we walked around the lake|Estábamos hablando mientras caminábamos alrededor del lago]]".',
  },
  {
    question: '[[A|Un]] [[man|hombre]] [[offered|ofreció]] [[them|a ellos]] [[an|un]] [[umbrella|paraguas]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[A|Una]] [[woman|mujer]] [[offered|ofreció]] [[them|a ellos]] [[the|el]] [[umbrella|paraguas]].',
  },
  {
    question: '[[They|Ellos]] [[continued|continuaron]] [[their|su]] [[walk|paseo]] [[after|después]] [[the|la]] [[rain|lluvia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[Finally the sun came out and we continued our walk|Finalmente salió el sol y continuamos nuestro paseo]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[A|Un]] [[walk|paseo]] [[in|en]] [[the|el]] [[park|parque]] [[with|con]] [[Past Simple|Pasado Simple]] [[and|y]] [[Past Continuous|Pasado Continuo]]', '[[School|Escuela]] [[life|vida]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[the|la]] [[beach|playa]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[a|un]] [[walk|paseo]] [[with|con]] [[when|cuando]]/[[while|mientras]] [[and|y]] [[story|historia]] [[connectors|conectores]].',
  },
  {
    question: '[[What|Qué]] [[story|historia]] [[connector|conector]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[first|primero]]?',
    options: ['[[Finally|Finalmente]]', '[[Suddenly|De repente]]', '[[At first|Al principio]]', '[[Then|Entonces]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[text|texto]] [[starts|empieza]] [[with|con]] "[[At first|Al principio]]".',
  },
  {
    question: '[[What|Qué]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[the|la]] [[long|larga]] [[action|acción]] [[of|de]] [[walking|caminar]]?',
    options: ['[[Present Simple|Presente Simple]]', '[[Past Continuous|Pasado Continuo]]', '[[Future|Futuro]]', '[[Present Perfect|Presente Perfecto]]'],
    correctAnswer: 1,
    explanation: '[[Past Continuous|Pasado Continuo]]: [[I was walking|Estaba caminando]], [[we were talking|estábamos hablando]].',
  },
  {
    question: '[[How|Cuántos]] [[story|historia]] [[connectors|conectores]] [[does|usa]] [[the|el]] [[text|texto]] [[mention|mencionar]]?',
    options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'],
    correctAnswer: 3,
    explanation: '[[At first|Al principio]], [[Then|Entonces]], [[Suddenly|De repente]], [[Finally|Finalmente]] = [[four|cuatro]] [[connectors|conectores]].',
  },
];

export const UNIT_17_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u17-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Past Simple Past Continuous',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
