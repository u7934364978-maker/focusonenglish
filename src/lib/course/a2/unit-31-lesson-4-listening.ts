/**
 * Unidad 31 — Lección 4: Comprensión auditiva (Future with 'Going to')
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Mark|Mark]]! [[I|Yo]] [[am calling|llamo]] [[to|para]] [[tell|decirte]] [[you|te]] [[about|sobre]] [[my|mis]] [[plans|planes]]. [[Next|El próximo]] [[weekend|fin de semana]] [[I|yo]] [[am going to|voy a]] [[have|tener]] [[a|una]] [[birthday|cumpleaños]] [[party|fiesta]]. [[I|Yo]] [[am going to|voy a]] [[invite|invitar]] [[all|todos]] [[my|mis]] [[friends|amigos]]. [[I|Yo]] [[am going to|voy a]] [[order|pedir]] [[pizza|pizza]] [[and|y]] [[make|hacer]] [[a|un]] [[cake|pastel]]. [[My|Mi]] [[brother|hermano]] [[is going to|va a]] [[help|ayudar]] [[me|me]] [[with|con]] [[the|la]] [[decorations|decoraciones]]. [[I|Yo]] [[think|creo]] [[it|será]] [[will|será]] [[be|]] [[fun|divertido]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]]?', options: ['[[John|John]]', '[[Mark|Mark]]', '[[Paul|Paul]]', '[[Peter|Peter]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[Hi Mark|Hola Mark]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going to|a]] [[have|tener]] [[next|el próximo]] [[weekend|fin de semana]]?', options: ['[[a|una]] [[meeting|reunión]]', '[[a|una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[a|un]] [[concert|concierto]]', '[[a|una]] [[dinner|cena]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to have a birthday party|Voy a tener una fiesta de cumpleaños]]".' },
  { question: '[[Who|A quiénes]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going to|a]] [[invite|invitar]]?', options: ['[[only|solo]] [[family|familia]]', '[[all|todos]] [[her|sus]] [[friends|amigos]]', '[[neighbours|vecinos]]', '[[colleagues|compañeros]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to invite all my friends|Voy a invitar a todos mis amigos]]".' },
  { question: '[[What|Qué]] [[food|comida]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going to|a]] [[order|pedir]]?', options: ['[[burgers|hamburguesas]]', '[[pizza|pizza]]', '[[sushi|sushi]]', '[[salads|ensaladas]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to order pizza|Voy a pedir pizza]]".' },
  { question: '[[What|Qué]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going to|a]] [[make|hacer]]?', options: ['[[sandwiches|bocadillos]]', '[[a|un]] [[cake|pastel]]', '[[soup|sopa]]', '[[salad|ensalada]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I am going to make a cake|Voy a hacer un pastel]]".' },
  { question: '[[Who|Quién]] [[is|va]] [[going to|a]] [[help|ayudar]] [[the|el]] [[speaker|hablante]]?', options: ['[[Her|Su]] [[sister|hermana]]', '[[Her|Su]] [[brother|hermano]]', '[[Her|Su]] [[mother|madre]]', '[[Her|Su]] [[friend|amiga]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[My brother is going to help me|Mi hermano va a ayudarme]]".' },
  { question: '[[With|Con]] [[what|qué]] [[is|va]] [[the|el]] [[brother|hermano]] [[going to|a]] [[help|ayudar]]?', options: ['[[the|la]] [[food|comida]]', '[[the|las]] [[decorations|decoraciones]]', '[[the|la]] [[music|música]]', '[[the|las]] [[invitations|invitaciones]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[help me with the decorations|ayudarme con las decoraciones]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[uses|usa]] [[going to|going to]] [[for|para]] [[plans|planes]] [[already|ya]] [[decided|decididos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[has|tiene]] [[specific|específicos]] [[plans|planes]] [[for|para]] [[the|la]] [[party|fiesta]].' },
  { question: '[[The|El]] [[party|fiesta]] [[is|es]] [[this|este]] [[weekend|fin de semana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The|La]] [[party|fiesta]] [[is|es]] [[next|el próximo]] [[weekend|fin de semana]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[thinks|cree]] [[it|será]] [[will|será]] [[be|]] [[fun|divertido]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[says|dice]] "[[I think it will be fun|Creo que será divertido]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[A|Una]] [[job|trabajo]] [[interview|entrevista]]', '[[Birthday|Fiesta]] [[party|de cumpleaños]] [[plans|planes]] [[using|usando]] [[going to|going to]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[birthday|cumpleaños]] [[party|fiesta]] [[plans|planes]].' },
  { question: '[[When|Cuándo]] [[is|es]] [[the|la]] [[party|fiesta]]?', options: ['[[this|este]] [[Saturday|sábado]]', '[[next|el próximo]] [[weekend|fin de semana]]', '[[tomorrow|mañana]]', '[[next|el próximo]] [[month|mes]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[next weekend|el próximo fin de semana]]".' },
  { question: '[[Why|Por qué]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[going to|going to]]?', options: ['[[past|pasado]] [[events|eventos]]', '[[future|futuros]] [[plans|planes]] [[already|ya]] [[decided|decididos]]', '[[uncertain|inciertos]] [[predictions|predicciones]]', '[[habits|hábitos]]'], correctAnswer: 1, explanation: '[[Going to|Going to]] [[for|para]] [[plans|planes]] [[and|y]] [[intentions|intenciones]].' },
  { question: '[[How many|Cuántas]] [[things|cosas]] [[is|va]] [[the|el]] [[speaker|hablante]] [[going to|a]] [[do|hacer]] [[for|para]] [[the|la]] [[party|fiesta]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 2, explanation: '[[Three|Tres]]: [[invite|invitar]], [[order pizza|pedir pizza]], [[make cake|hacer pastel]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[organising|organizando]] [[the|la]] [[party|fiesta]] [[alone|sola]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Her|Su]] [[brother|hermano]] [[is going to|va a]] [[help|ayudar]] [[with|con]] [[decorations|decoraciones]].' },
];

export const UNIT_31_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u31-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: "Future with 'Going to'",
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
