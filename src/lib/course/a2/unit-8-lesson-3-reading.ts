/**
 * Unidad 8 — Lección 3: Comprensión lectora (Preposiciones de tiempo)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Tom|Tom]] [[and|y]] [[I|yo]] [[have|tengo]] [[a|una]] [[busy|ocupada]] [[week|semana]]. [[On|El]] [[Monday|lunes]] [[and|y]] [[Wednesday|miércoles]] [[I|yo]] [[go|voy]] [[to|a]] [[work|trabajo]] [[at|a]] [[8|8]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]. [[On|El]] [[Tuesday|martes]] [[I|yo]] [[have|tengo]] [[a|una]] [[meeting|reunión]] [[at|a]] [[noon|mediodía]]. [[On|El]] [[Friday|viernes]] [[I|yo]] [[finish|termino]] [[early|temprano]] [[at|a]] [[3|3]] [[pm|de la tarde]] [[and|y]] [[I|yo]] [[go|voy]] [[to|a]] [[the|el]] [[gym|gimnasio]]. [[At|El]] [[the weekend|fin de semana]] [[I|yo]] [[relax|relajo]]. [[On|El]] [[Saturday|sábado]] [[morning|mañana]] [[I|yo]] [[sleep|duermo]] [[until|hasta]] [[10|10]] [[o\'clock|en punto]]. [[In|En]] [[the|la]] [[afternoon|tarde]] [[I|yo]] [[meet|me reúno]] [[my|mis]] [[friends|amigos]]. [[In|En]] [[summer|verano]] [[I|yo]] [[go|voy]] [[on|de]] [[holiday|vacaciones]] [[in|en]] [[August|agosto]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[does|va]] [[Tom|Tom]] [[go|ir]] [[to|a]] [[work|trabajo]]?',
    options: ['[[on|el]] [[Monday|lunes]] [[and|y]] [[Wednesday|miércoles]] [[at|a]] [[8|8]] [[o\'clock|en punto]] [[in|por]] [[the|la]] [[morning|mañana]]', '[[on|el]] [[Tuesday|martes]]', '[[at|a]] [[noon|mediodía]]', '[[in|en]] [[August|agosto]]'],
    correctAnswer: 0,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Monday and Wednesday I go to work at 8 o\'clock in the morning|El lunes y miércoles voy a trabajar a las 8 de la mañana]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|tiene]] [[he|él]] [[have|tener]] [[a|una]] [[meeting|reunión]]?',
    options: ['[[on|el]] [[Monday|lunes]]', '[[on|el]] [[Tuesday|martes]] [[at|a]] [[noon|mediodía]]', '[[on|el]] [[Friday|viernes]]', '[[at|a]] [[midnight|medianoche]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Tuesday I have a meeting at noon|El martes tengo una reunión a mediodía]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|termina]] [[he|él]] [[finish|terminar]] [[work|trabajo]] [[on|el]] [[Friday|viernes]]?',
    options: ['[[at|a]] [[5|5]] [[pm|de la tarde]]', '[[at|a]] [[3|3]] [[pm|de la tarde]]', '[[at|a]] [[noon|mediodía]]', '[[at|a]] [[midnight|medianoche]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Friday I finish early at 3 pm|El viernes termino temprano a las 3 de la tarde]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[he|él]] [[do|hacer]] [[at|el]] [[the weekend|fin de semana]]?',
    options: ['[[He|Él]] [[works|trabaja]]', '[[He|Él]] [[relaxes|relaja]]', '[[He|Él]] [[goes|va]] [[to|a]] [[work|trabajo]]', '[[He|Él]] [[studies|estudia]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[At the weekend I relax|El fin de semana relajo]]". [[He relaxes|Él se relaja]] = [[he|él]] [[relaxes|relaja]].',
  },
  {
    question: '[[When|Cuándo]] [[does|duerme]] [[he|él]] [[sleep|dormir]] [[until|hasta]] [[10|10]] [[o\'clock|en punto]]?',
    options: ['[[on|el]] [[Friday|viernes]] [[night|noche]]', '[[on|el]] [[Saturday|sábado]] [[morning|mañana]]', '[[on|el]] [[Sunday|domingo]]', '[[in|en]] [[the|la]] [[evening|noche]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[On Saturday morning I sleep until 10 o\'clock|El sábado por la mañana duermo hasta las 10]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|se reúne]] [[he|él]] [[meet|reunirse]] [[his|sus]] [[friends|amigos]]?',
    options: ['[[in|por]] [[the|la]] [[morning|mañana]]', '[[in|por]] [[the|la]] [[afternoon|tarde]] [[on|el]] [[Saturday|sábado]]', '[[at|a]] [[noon|mediodía]]', '[[at|a]] [[midnight|medianoche]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[In the afternoon I meet my friends|Por la tarde me reúno con mis amigos]]".',
  },
  {
    question: '[[When|Cuándo]] [[does|va]] [[he|él]] [[go|ir]] [[on|de]] [[holiday|vacaciones]]?',
    options: ['[[in|en]] [[winter|invierno]]', '[[in|en]] [[August|agosto]] [[in|en]] [[summer|verano]]', '[[on|el]] [[Monday|lunes]]', '[[at|a]] [[Christmas|Navidad]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[In summer I go on holiday in August|En verano voy de vacaciones en agosto]]".',
  },
  {
    question: '[[He|Él]] [[goes|va]] [[to|a]] [[work|trabajo]] [[on|el]] [[Saturday|sábado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[goes|va]] [[to|a]] [[work|trabajo]] [[on|el]] [[Monday|lunes]] [[and|y]] [[Wednesday|miércoles]]. [[At|El]] [[the weekend|fin de semana]] [[he|él]] [[relaxes|relaja]].',
  },
  {
    question: '[[He|Él]] [[has|tiene]] [[a|una]] [[meeting|reunión]] [[at|a]] [[noon|mediodía]] [[on|el]] [[Tuesday|martes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[On Tuesday I have a meeting at noon|El martes tengo una reunión a mediodía]]".',
  },
  {
    question: '[[He|Él]] [[finishes|termina]] [[work|trabajo]] [[at|a]] [[5|5]] [[pm|de la tarde]] [[on|el]] [[Friday|viernes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[finishes|termina]] [[at|a]] [[3|3]] [[pm|de la tarde]].',
  },
  {
    question: '[[He|Él]] [[goes|va]] [[on|de]] [[holiday|vacaciones]] [[in|en]] [[August|agosto]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[In summer I go on holiday in August|En verano voy de vacaciones en agosto]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[Tom|Tom]]\'s [[weekly|semanal]] [[schedule|horario]] [[and|y]] [[prepositions of time|preposiciones de tiempo]]', '[[A|Una]] [[meeting|reunión]]', '[[A|Un]] [[holiday|vacaciones]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[describes|describe]] [[Tom|Tom]]\'s [[schedule|horario]] [[using|usando]] [[prepositions of time|preposiciones de tiempo]]: [[at|a]], [[on|en]], [[in|en]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[8 o\'clock|las 8 en punto]]?',
    options: ['[[on|en]]', '[[at|a]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[At|A]] = [[specific|específico]] [[time|hora]]. [[At 8 o\'clock|A las 8 en punto]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[Monday|lunes]]?',
    options: ['[[at|a]]', '[[on|en]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 1,
    explanation: '[[On|En]] = [[days|días]]. [[On Monday|El lunes]].',
  },
  {
    question: '[[Which|Cuál]] [[preposition|preposición]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[August|agosto]]?',
    options: ['[[at|a]]', '[[on|en]]', '[[in|en]]', '[[to|a]]'],
    correctAnswer: 2,
    explanation: '[[In|En]] = [[months|meses]]. [[In August|En agosto]].',
  },
];

export const UNIT_8_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u8-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Prepositions of Time',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
