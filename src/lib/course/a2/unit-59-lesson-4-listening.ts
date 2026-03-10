/**
 * Unidad 59 — Lección 4: Comprensión auditiva (Final Exam Preparation)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Lucas|Lucas]]. [[I|Yo]] [[am|estoy]] [[studying|estudiando]] [[for|para]] [[my|mi]] [[final|final]] [[exam|examen]] [[this|esta]] [[week|semana]]. [[I|Yo]] [[study|estudio]] [[every|cada]] [[day|día]] [[for|durante]] [[three hours|tres horas]]. [[I|Yo]] [[review|reviso]] [[vocabulary|vocabulario]], [[practice|practico]] [[grammar|gramática]], [[and|y]] [[do|hago]] [[reading|lectura]] [[exercises|ejercicios]]. [[I|Yo]] [[was|estaba]] [[very|muy]] [[nervous|nervioso]] [[at first|al principio]] [[but|pero]] [[now|ahora]] [[I|yo]] [[feel|me siento]] [[more|más]] [[confident|seguro]]. [[I|Yo]] [[have|he]] [[passed|aprobado]] [[all|todos]] [[the|los]] [[practice|prácticos]] [[tests|exámenes]] [[so|así que]] [[I|yo]] [[think|creo]] [[I|yo]] [[will|]] [[pass|aprobar]] [[the|el]] [[real|real]] [[exam|examen]]. [[My|Mi]] [[advice|consejo]] [[is|es]] [[to|]] [[study|estudiar]] [[regularly|regularmente]] [[and|y]] [[not|no]] [[to|]] [[wait|esperar]] [[until|hasta]] [[the last day|el último día]]. [[Good|Buena]] [[luck|suerte]] [[with|con]] [[your|tu]] [[exam|examen]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is|está]] [[Lucas|Lucas]] [[doing|haciendo]]?', options: ['[[Working|Trabajando]]', '[[Studying for his final exam|Estudiando para su examen final]]', '[[Traveling|Viajando]]', '[[Teaching|Enseñando]]'], correctAnswer: 1, explanation: '[[I am studying for my final exam|Estoy estudiando para mi examen final]].' },
  { question: '[[When|Cuándo]] [[is|es]] [[his|su]] [[exam|examen]]?', options: ['[[Last week|La semana pasada]]', '[[Next month|El próximo mes]]', '[[This week|Esta semana]]', '[[Tomorrow|Mañana]]'], correctAnswer: 2, explanation: '[[I am studying for my final exam this week|Estoy estudiando para mi examen final esta semana]].' },
  { question: '[[How long|Cuánto tiempo]] [[does|estudia]] [[he|él]] [[study|estudiar]] [[every day|cada día]]?', options: ['[[One hour|Una hora]]', '[[Two hours|Dos horas]]', '[[Three hours|Tres horas]]', '[[Four hours|Cuatro horas]]'], correctAnswer: 2, explanation: '[[I study every day for three hours|Estudio cada día durante tres horas]].' },
  { question: '[[What|Qué]] [[does|hace]] [[he|él]] [[do|hacer]] [[when|cuando]] [[studying|estudiando]]?', options: ['[[Only vocabulary|Solo vocabulario]]', '[[Vocabulary, grammar, and reading|Vocabulario, gramática y lectura]]', '[[Only grammar|Solo gramática]]', '[[Only reading|Solo lectura]]'], correctAnswer: 1, explanation: '[[I review vocabulary, practice grammar, and do reading exercises|Reviso vocabulario, practico gramática y hago ejercicios de lectura]].' },
  { question: '[[How|Cómo]] [[did|se sentía]] [[he|él]] [[feel|sentir]] [[at first|al principio]]?', options: ['[[Confident|Seguro]]', '[[Happy|Feliz]]', '[[Very nervous|Muy nervioso]]', '[[Relaxed|Relajado]]'], correctAnswer: 2, explanation: '[[I was very nervous at first|Estaba muy nervioso al principio]].' },
  { question: '[[How|Cómo]] [[does|se siente]] [[he|él]] [[feel|sentir]] [[now|ahora]]?', options: ['[[More nervous|Más nervioso]]', '[[More confident|Más seguro]]', '[[Tired|Cansado]]', '[[Sad|Triste]]'], correctAnswer: 1, explanation: '[[Now I feel more confident|Ahora me siento más seguro]].' },
  { question: '[[Has|¿]] [[he|él]] [[passed|aprobado]] [[the|los]] [[practice tests|exámenes de práctica]]?', options: ['[[Yes, all of them|Sí, todos]]', '[[No|No]]', '[[Some|Algunos]]', '[[He did not say|No lo dijo]]'], correctAnswer: 0, explanation: '[[I have passed all the practice tests|He aprobado todos los exámenes de práctica]].' },
  { question: '[[What|Cuál]] [[is|es]] [[his|su]] [[advice|consejo]]?', options: ['[[Study only the last day|Estudiar solo el último día]]', '[[Study regularly and do not wait until the last day|Estudiar regularmente y no esperar hasta el último día]]', '[[Do not study|No estudiar]]', '[[Study at night only|Estudiar solo de noche]]'], correctAnswer: 1, explanation: '[[Study regularly and do not wait until the last day|Estudiar regularmente y no esperar hasta el último día]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[A student studying for his exam and giving advice|Un estudiante estudiando para su examen y dando consejos]]', '[[School rules|Reglas escolares]]', '[[Grammar lessons|Lecciones de gramática]]', '[[Travel plans|Planes de viaje]]'], correctAnswer: 0, explanation: '[[The audio is about Lucas and his exam preparation|El audio trata de Lucas y su preparación para el examen]].' },
  { question: '[[Lucas|Lucas]] [[thinks|cree]] [[he|él]] [[will|]] [[pass|aprobar]] [[the|el]] [[exam|examen]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[I think I will pass the real exam|Creo que aprobaré el examen real]].' },
  { question: '[[Lucas|Lucas]] [[was|estaba]] [[confident|seguro]] [[from|desde]] [[the beginning|el principio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He was nervous at first|Estaba nervioso al principio]].' },
  { question: '[[Which|Cuál]] [[activity|actividad]] [[does|NO]] [[Lucas|Lucas]] [[NOT|]] [[mention|mencionar]]?', options: ['[[Review vocabulary|Revisar vocabulario]]', '[[Practice grammar|Practicar gramática]]', '[[Listening exercises|Ejercicios de escucha]]', '[[Reading exercises|Ejercicios de lectura]]'], correctAnswer: 2, explanation: '[[He does not mention listening|No menciona escucha]].' },
  { question: '[[Lucas|Lucas]] [[studies|estudia]] ____ ____ ____.', options: ['[[every day for three hours|cada día durante tres horas]]', '[[only on weekends|solo los fines de semana]]', '[[once a week|una vez a la semana]]', '[[never|nunca]]'], correctAnswer: 0, explanation: '[[I study every day for three hours|Estudio cada día durante tres horas]].' },
  { question: '[[Lucas|Lucas]] [[says|dice]] [[good luck|buena suerte]] ____ ____.', options: ['[[to the teacher|al profesor]]', '[[with your exam|con tu examen]]', '[[to his friends|a sus amigos]]', '[[for the weekend|para el fin de semana]]'], correctAnswer: 1, explanation: '[[Good luck with your exam|Buena suerte con tu examen]].' },
  { question: '[[The|El]] [[best|mejor]] [[strategy|estrategia]] [[according to|según]] [[Lucas|Lucas]] [[is|es]]?', options: ['[[Wait until the last day|Esperar hasta el último día]]', '[[Study regularly|Estudiar regularmente]]', '[[Study only vocabulary|Estudiar solo vocabulario]]', '[[Do not rest|No descansar]]'], correctAnswer: 1, explanation: '[[Study regularly and do not wait until the last day|Estudiar regularmente y no esperar hasta el último día]].' },
];

export const UNIT_59_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u59-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Final Exam Preparation',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
