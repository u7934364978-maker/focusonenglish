/**
 * Unidad 33 — Lección 4: Comprensión auditiva (Future with 'Will': Predictions)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I|Yo]] [[think|creo]] [[the|el]] [[match|partido]] [[will|]] [[be|será]] [[exciting|emocionante]] [[tomorrow|mañana]]. [[Our|Nuestro]] [[team|equipo]] [[will|]] [[probably|probablemente]] [[win|ganar]] [[because|porque]] [[we|nosotros]] [[have|tenemos]] [[the|los]] [[best|mejores]] [[players|jugadores]]. [[I|Yo]] [[don't|no]] [[think|creo]] [[it|]] [[will|]] [[rain|lloverá]] [[so|así que]] [[the|el]] [[weather|tiempo]] [[will|]] [[be|será]] [[nice|agradable]]. [[Maybe|Quizás]] [[we|nosotros]] [[will|]] [[see|veremos]] [[a|un]] [[lot of|montón de]] [[goals|goles]]. [[I|Yo]] [[expect|espero]] [[it|]] [[will|]] [[be|será]] [[a|un]] [[great|gran]] [[day|día]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[does|cree]] [[the|el]] [[speaker|hablante]] [[think|creer]] [[the|el]] [[match|partido]] [[will|]] [[be|ser]]?', options: ['[[Boring|Aburrido]]', '[[Exciting|Emocionante]]', '[[Long|Largo]]', '[[Cancelled|Cancelado]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I think the match will be exciting|creo que el partido será emocionante]]".' },
  { question: '[[When|Cuándo]] [[is|es]] [[the|el]] [[match|partido]]?', options: ['[[Today|Hoy]]', '[[Tomorrow|Mañana]]', '[[Next|La próxima]] [[week|semana]]', '[[Yesterday|Ayer]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[tomorrow|mañana]]".' },
  { question: '[[Who|Quién]] [[will|]] [[probably|probablemente]] [[win|ganar]]?', options: ['[[The|El]] [[other|otro]] [[team|equipo]]', '[[Our|Nuestro]] [[team|equipo]]', '[[Nobody|Nadie]]', '[[Draw|Empate]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[Our team will probably win|nuestro equipo probablemente ganará]]".' },
  { question: '[[Why|Por qué]] [[will|]] [[their|su]] [[team|equipo]] [[win|ganar]]?', options: ['[[Luck|Suerte]]', '[[They|Tienen]] [[have|los]] [[the|mejores]] [[best|jugadores]]', '[[Weather|Tiempo]]', '[[Referee|Árbitro]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[because we have the best players|porque tenemos los mejores jugadores]]".' },
  { question: '[[Will|]] [[it|]] [[rain|llover]] [[tomorrow|mañana]]?', options: ['[[Yes|Sí]]', '[[No|No]] [[—|]] [[he|él]] [[doesn\'t|no]] [[think|creo]] [[so|que]]', '[[Maybe|Quizás]]', '[[Definitely|Definitivamente]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I don\'t think it will rain|no creo que lloverá]]".' },
  { question: '[[What|Qué]] [[will|]] [[the|el]] [[weather|tiempo]] [[be|ser]] [[like|]]?', options: ['[[Rainy|Lluvioso]]', '[[Nice|Agradable]]', '[[Cold|Frío]]', '[[Stormy|Tormentoso]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[the weather will be nice|el tiempo será agradable]]".' },
  { question: '[[What|Qué]] [[might|podríamos]] [[they|ellos]] [[see|ver]]?', options: ['[[Rain|Lluvia]]', '[[A|Un]] [[lot of|montón de]] [[goals|goles]]', '[[Snow|Nieve]]', '[[Fog|Niebla]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[Maybe we will see a lot of goals|quizás veremos muchos goles]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[will|will]] [[for|para]] [[predictions|predicciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All|Todos]] [[sentences|enunciados]] [[use|usan]] [[will|will]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[sure|seguro]] [[about|sobre]] [[the|el]] [[result|resultado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[uses|usa]] [[probably|probablemente]] [[and|y]] [[maybe|quizás]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[expects|espera]] [[a|un]] [[great|gran]] [[day|día]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I expect it will be a great day|espero que será un gran día]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Work|Trabajo]]', '[[Predictions|Predicciones]] [[about|sobre]] [[a|un]] [[football|fútbol]] [[match|partido]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[predictions|predicciones]] [[for|para]] [[a|un]] [[match|partido]].' },
  { question: '[[How many|Cuántas]] [[predictions|predicciones]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[make|hacer]]?', options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'], correctAnswer: 3, explanation: '[[Four|Cuatro]]: [[match|partido]], [[team|equipo]] [[win|ganar]], [[weather|tiempo]], [[goals|goles]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[excited|emocionado]] [[about|por]] [[the|el]] [[match|partido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[expects|espera]] [[a|un]] [[great|gran]] [[day|día]].' },
  { question: '[[What|Qué]] [[word|palabra]] [[shows|muestra]] [[uncertainty|incertidumbre]]?', options: ['[[Definitely|Definitivamente]]', '[[Maybe|Quizás]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 1, explanation: '[[Maybe|Quizás]] [[shows|muestra]] [[uncertainty|incertidumbre]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[thinks|cree]] [[it|]] [[will|]] [[rain|lloverá]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I don\'t think it will rain|no creo que lloverá]]".' },
];

export const UNIT_33_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u33-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: "Future with 'Will': Predictions",
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
