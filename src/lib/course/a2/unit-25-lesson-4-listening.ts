/**
 * Unidad 25 — Lección 4: Comprensión auditiva (Future Contrast)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Anna|Ana]]! [[I|Yo]] [[am calling|llamo]] [[about|sobre]] [[our|nuestra]] [[plans|planes]]. [[Next|El próximo]] [[Saturday|sábado]] [[I|yo]] [[am getting married|me caso]] — [[it is already arranged|está ya organizado]]! [[I|Yo]] [[will|voy a]] [[send|enviar]] [[you|te]] [[the|la]] [[invitation|invitación]] [[tomorrow|mañana]]. [[I|Yo]] [[am going to|voy a]] [[wear|llevar]] [[a|un]] [[white|blanco]] [[dress|vestido]] — [[I|yo]] [[have|he]] [[already|ya]] [[chosen|elegido]] [[it|lo]]. [[Maybe|Quizás]] [[I|yo]] [[will|voy a]] [[have|tener]] [[a|un]] [[party|fiesta]] [[the|el]] [[day|día]] [[after|después]] [[too|tambien]]. [[I|Yo]] [[think|creo]] [[everything|todo]] [[will|será]] [[be|ser]] [[perfect|perfecto]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]]?',
    options: ['[[Maria|María]]', '[[Anna|Ana]]', '[[Emma|Emma]]', '[[Lisa|Lisa]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[Hi Anna|Hola Ana]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[happening|pasando]] [[next|el próximo]] [[Saturday|sábado]]?',
    options: ['[[a|una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[a|una]] [[wedding|boda]]', '[[a|un]] [[concert|concierto]]', '[[a|una]] [[meeting|reunión]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I am getting married|Me caso]]".',
  },
  {
    question: '[[What|Qué]] [[will|va a]] [[the|el]] [[speaker|hablante]] [[send|enviar]] [[tomorrow|mañana]]?',
    options: ['[[a|un]] [[gift|regalo]]', '[[the|la]] [[invitation|invitación]]', '[[flowers|flores]]', '[[photos|fotos]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I will send you the invitation tomorrow|Te enviaré la invitación mañana]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] [[going to|va a]] [[wear|llevar]]?',
    options: ['[[a|un]] [[blue|azul]] [[suit|traje]]', '[[a|un]] [[white|blanco]] [[dress|vestido]]', '[[a|un]] [[red|rojo]] [[dress|vestido]]', '[[a|un]] [[black|negro]] [[suit|traje]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I am going to wear a white dress|Voy a llevar un vestido blanco]]".',
  },
  {
    question: '[[Has|Ha]] [[the|el]] [[speaker|hablante]] [[chosen|elegido]] [[the|el]] [[dress|vestido]]?',
    options: ['[[No|No]]', '[[Yes|Sí]]', '[[Maybe|Quizás]]', '[[Not yet|Aún no]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I have already chosen it|Ya lo he elegido]]".',
  },
  {
    question: '[[What|Qué]] [[might|podría]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[the|el]] [[day|día]] [[after|después]]?',
    options: ['[[travel|viajar]]', '[[have|tener]] [[a|una]] [[party|fiesta]]', '[[rest|descansar]]', '[[work|trabajar]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[Maybe I will have a party the day after|Quizás tendré una fiesta al día siguiente]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[think|creer]] [[about|sobre]] [[everything|todo]]?',
    options: ['[[difficult|difícil]]', '[[perfect|perfecto]]', '[[boring|aburrido]]', '[[strange|extraño]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I think everything will be perfect|Creo que todo será perfecto]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[present|presente]] [[continuous|continuo]] [[for|para]] [[the|la]] [[wedding|boda]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[I am getting married|Me caso]]" — [[arranged|organizado]] [[event|evento]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[will|will]] [[for|para]] [[sending|enviar]] [[the|la]] [[invitation|invitación]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[I will send you the invitation|Te enviaré la invitación]]" — [[promise|promesa]]/[[intention|intención]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[sure|segura]] [[about|sobre]] [[the|la]] [[party|fiesta]] [[the|el]] [[day|día]] [[after|después]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[says|dice]] "[[Maybe|Quizás]]" — [[not|no]] [[sure|segura]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[has|ha]] [[not|no]] [[chosen|elegido]] [[the|el]] [[dress|vestido]] [[yet|aún]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[She|Ella]] [[says|dice]] "[[I have already chosen it|Ya lo he elegido]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[Wedding|Boda]] [[plans|planes]] [[using|usando]] [[different|diferentes]] [[future|futuros]] [[forms|formas]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[wedding|boda]] [[plans|planes]] [[with|con]] [[different|diferentes]] [[future|futuros]] [[tenses|tiempos]].',
  },
  {
    question: '[[Which|Cuál]] [[form|forma]] [[expresses|expresa]] [[a|una]] [[fixed|fija]] [[arrangement|organización]]?',
    options: ['[[Maybe I will|Quizás voy a]]', '[[I am getting married|Me caso]]', '[[I think|Creo]]', '[[I promise|Prometo]]'],
    correctAnswer: 1,
    explanation: '[[Present|Presente]] [[continuous|continuo]] "[[I am getting married|Me caso]]" = [[fixed|fija]] [[arrangement|organización]].',
  },
  {
    question: '[[When|Cuándo]] [[will|va a]] [[the|el]] [[speaker|hablante]] [[send|enviar]] [[the|la]] [[invitation|invitación]]?',
    options: ['[[today|hoy]]', '[[tomorrow|mañana]]', '[[next week|la próxima semana]]', '[[next month|el próximo mes]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[says|dice]] "[[I will send you the invitation tomorrow|Te enviaré la invitación mañana]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] "[[going to|voy a]]" [[for|para]] [[the|el]] [[dress|vestido]]?',
    options: ['[[spontaneous|decisión]] [[decision|espontánea]]', '[[already|ya]] [[planned|planeado]]', '[[uncertain|incierto]]', '[[past|pasado]]'],
    correctAnswer: 1,
    explanation: '[[She|Ella]] [[has|ha]] [[already|ya]] [[chosen|elegido]] [[the|el]] [[dress|vestido]] — [[planned|planeado]] [[in advance|con antelación]].',
  },
];

export const UNIT_25_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u25-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Future Contrast',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
