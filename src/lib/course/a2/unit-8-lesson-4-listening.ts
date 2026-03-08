/**
 * Unidad 8 — Lección 4: Comprensión auditiva (Preposiciones de tiempo)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|a ti]] [[about|sobre]] [[my|mi]] [[typical|típico]] [[day|día]]. [[I|Yo]] [[wake up|me despierto]] [[at|a]] [[6|6]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]. [[I|Yo]] [[have|tomo]] [[breakfast|desayuno]] [[at|a]] [[7|7]] [[am|de la mañana]]. [[On|Los]] [[weekdays|días laborables]] [[I|yo]] [[start|empiezo]] [[work|trabajo]] [[at|a]] [[9|9]] [[o\'clock|en punto]]. [[I|Yo]] [[have|tengo]] [[lunch|comida]] [[at|a]] [[noon|mediodía]]. [[In|Por]] [[the|la]] [[afternoon|tarde]] [[I|yo]] [[have|tengo]] [[meetings|reuniones]]. [[On|El]] [[Saturday|sábado]] [[I|yo]] [[sleep|duermo]] [[until|hasta]] [[10|10]] [[o\'clock|en punto]] [[and|y]] [[I|yo]] [[meet|me reúno]] [[my|mis]] [[friends|amigos]] [[in|por]] [[the|la]] [[evening|noche]]. [[In|En]] [[December|diciembre]] [[I|yo]] [[go|voy]] [[on|de]] [[holiday|vacaciones]] [[for|durante]] [[two|dos]] [[weeks|semanas]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[does|se despierta]] [[the|el]] [[person|persona]] [[wake up|despertarse]]?',
    options: ['[[at|a]] [[6|6]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]', '[[at|a]] [[7|7]] [[am|de la mañana]]', '[[at|a]] [[9|9]] [[o\'clock|en punto]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[I wake up at 6 o\'clock in the morning|Me despierto a las 6 de la mañana]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|toma]] [[he|él]] [[have|tomar]] [[breakfast|desayuno]]?',
    options: ['[[at|a]] [[6|6]] [[am|de la mañana]]', '[[at|a]] [[7|7]] [[am|de la mañana]]', '[[at|a]] [[noon|mediodía]]', '[[in|por]] [[the|la]] [[evening|noche]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have breakfast at 7 am|Tomo desayuno a las 7 de la mañana]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|empieza]] [[he|él]] [[start|empezar]] [[work|trabajo]]?',
    options: ['[[at|a]] [[7|7]] [[am|de la mañana]]', '[[at|a]] [[9|9]] [[o\'clock|en punto]]', '[[at|a]] [[noon|mediodía]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[On weekdays I start work at 9 o\'clock|Los días laborables empiezo a trabajar a las 9]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|tiene]] [[he|él]] [[have|tener]] [[lunch|comida]]?',
    options: ['[[at|a]] [[9|9]] [[am|de la mañana]]', '[[at|a]] [[noon|mediodía]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]', '[[in|por]] [[the|la]] [[evening|noche]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have lunch at noon|Tengo la comida a mediodía]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|tiene]] [[he|él]] [[have|tener]] [[meetings|reuniones]]?',
    options: ['[[in|por]] [[the|la]] [[morning|mañana]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]', '[[at|a]] [[noon|mediodía]]', '[[at|a]] [[night|noche]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[In the afternoon I have meetings|Por la tarde tengo reuniones]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|duerme]] [[he|él]] [[sleep|dormir]] [[until|hasta]] [[10|10]] [[o\'clock|en punto]]?',
    options: ['[[on|el]] [[Friday|viernes]]', '[[on|el]] [[Saturday|sábado]]', '[[on|el]] [[Sunday|domingo]]', '[[every|cada]] [[day|día]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[On Saturday I sleep until 10 o\'clock|El sábado duermo hasta las 10]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|se reúne]] [[he|él]] [[meet|reunirse]] [[his|sus]] [[friends|amigos]] [[on|el]] [[Saturday|sábado]]?',
    options: ['[[in|por]] [[the|la]] [[morning|mañana]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]', '[[in|por]] [[the|la]] [[evening|noche]]', '[[at|a]] [[noon|mediodía]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I meet my friends in the evening|Me reúno con mis amigos por la noche]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|va]] [[he|él]] [[go|ir]] [[on|de]] [[holiday|vacaciones]]?',
    options: ['[[in|en]] [[August|agosto]]', '[[in|en]] [[December|diciembre]]', '[[in|en]] [[January|enero]]', '[[on|el]] [[Saturday|sábado]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[In December I go on holiday|En diciembre voy de vacaciones]]".',
  },
  {
    question: '[[He|Él]] [[wakes up|se despierta]] [[at|a]] [[7|7]] [[o\'clock|en punto]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[wakes up|se despierta]] [[at|a]] [[6|6]] [[o\'clock|en punto]]. [[He|Él]] [[has|tiene]] [[breakfast|desayuno]] [[at|a]] [[7|7]].',
  },
  {
    question: '[[He|Él]] [[has|tiene]] [[lunch|comida]] [[at|a]] [[noon|mediodía]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have lunch at noon|Tengo la comida a mediodía]]".',
  },
  {
    question: '[[He|Él]] [[has|tiene]] [[meetings|reuniones]] [[in|por]] [[the|la]] [[morning|mañana]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|tiene]] [[meetings|reuniones]] [[in|por]] [[the|la]] [[afternoon|tarde]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[A|Un]] [[typical|típico]] [[day|día]] [[and|y]] [[prepositions of time|preposiciones de tiempo]]', '[[A|Una]] [[meeting|reunión]]', '[[A|Un]] [[holiday|vacaciones]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[a|un]] [[typical|típico]] [[day|día]] [[using|usando]] [[prepositions of time|preposiciones de tiempo]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[6 o\'clock|las 6 en punto]]?',
    options: ['[[on|en]]', '[[at|a]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]. [[At 6 o\'clock|A las 6 en punto]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[the morning|la mañana]]?',
    options: ['[[at|a]]', '[[on|en]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 2,
    explanation: '[[In|En]] = [[in the morning|por la mañana]], [[in the afternoon|por la tarde]], [[in the evening|por la noche]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[Saturday|sábado]]?',
    options: ['[[at|a]]', '[[on|en]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[On|En]] = [[days|días]]. [[On Saturday|El sábado]].',
  },
];

export const UNIT_8_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u8-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Prepositions of Time',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
