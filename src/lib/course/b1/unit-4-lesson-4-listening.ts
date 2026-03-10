/**
 * Unidad 4 B1 — Lección 4: Comprensión auditiva (Past simple vs present perfect, time expressions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Emma|Emma]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[travel|viajes]] [[experiences|experiencias]]. [[Last|El pasado]] [[summer|verano]] [[I|yo]] [[went|fui]] [[to|a]] [[Spain|España]] [[for|durante]] [[two|dos]] [[weeks|semanas]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|en]] [[Spain|España]] [[before|antes]] [[that|esa]] [[trip|viaje]]. [[I|Yo]] [[have|he]] [[just|acabo de]] [[returned|regresado]] [[from|de]] [[Italy|Italia]] [[last|la pasada]] [[week|semana]]. [[I|Yo]] [[have|he]] [[already|ya]] [[visited|visitado]] [[ten|diez]] [[countries|países]] [[in|en]] [[Europe|Europa]]. [[Have|¿Has]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|en]] [[Italy|Italia]]? [[I|Yo]] [[haven't|no he]] [[finished|terminado]] [[planning|planear]] [[my|mi]] [[next|próximo]] [[trip|viaje]] [[yet|todavía]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is Emma talking about|está contando Emma]]?', options: ['[[her job|su trabajo]]', '[[her travel experiences|sus experiencias de viaje]]', '[[her family|su familia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I want to tell you about my travel experiences|quiero contarte sobre mis experiencias de viaje]]".' },
  { question: '[[When|Cuándo]] [[did she go|fue]] [[to Spain|a España]]?', options: ['[[last year|el año pasado]]', '[[last summer|el verano pasado]]', '[[this summer|este verano]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Last summer I went to Spain|el verano pasado fui a España]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did she stay|estuvo]] [[in Spain|en España]]?', options: ['[[one week|una semana]]', '[[two weeks|dos semanas]]', '[[three weeks|tres semanas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I went to Spain for two weeks|fui a España durante dos semanas]]".' },
  { question: '[[Had|Había]] [[she|ella]] [[been|estado]] [[to Spain|en España]] [[before|antes]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[She says|Dice]] "[[I have never been to Spain before that trip|nunca había estado en España antes de ese viaje]]".' },
  { question: '[[Where|De dónde]] [[has she just returned|acaba de regresar]]?', options: ['[[Spain|España]]', '[[Italy|Italia]]', '[[France|Francia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I have just returned from Italy|acabo de regresar de Italia]]".' },
  { question: '[[How many|Cuántos]] [[countries|países]] [[has she visited|ha visitado]] [[in Europe|en Europa]]?', options: ['[[five|cinco]]', '[[ten|diez]]', '[[fifteen|quince]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I have already visited ten countries|ya he visitado diez países]]".' },
  { question: '[[Has|Ha]] [[she|ella]] [[finished|terminado]] [[planning|planear]] [[her next trip|su próximo viaje]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[She says|Dice]] "[[I haven\'t finished planning my next trip yet|todavía no he terminado de planear mi próximo viaje]]".' },
  { question: '[[Emma|Emma]] [[went|fue]] [[to Italy|a Italia]] [[last week|la semana pasada]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[has just returned|acaba de regresar]] [[from Italy|de Italia]] [[last week|la semana pasada]].' },
  { question: '[[Emma|Emma]] [[had|había]] [[never|nunca]] [[been|estado]] [[to Spain|en España]] [[before her trip|antes de su viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have never been to Spain before that trip|nunca había estado en España antes de ese viaje]]".' },
  { question: '[[Emma|Emma]] [[has|ha]] [[visited|visitado]] [[more than five countries|más de cinco países]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[has visited ten|ha visitado diez]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Travel experiences and plans|Experiencias de viaje y planes]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Emma\'s travel experiences|las experiencias de viaje de Emma]].' },
  { question: '[[Which time expression|Qué expresión de tiempo]] [[does Emma use|usa Emma]] [[with Present Perfect|con presente perfecto]]?', options: ['[[yesterday|ayer]]', '[[just|acabo de]]', '[[last summer|el verano pasado]]'], correctAnswer: 1, explanation: '[[She uses|Usa]] "[[I have just returned|acabo de regresar]]".' },
  { question: '[[Emma|Emma]] [[is|está]] [[planning|planeando]] [[her next trip|su próximo viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[hasn\'t finished yet|todavía no ha terminado]] [[but is planning|pero está planeando]].' },
  { question: '[[Emma|Emma]] [[asks|pregunta]] [[if|si]] [[you|tú]] [[have|has]] [[ever|alguna vez]] [[been|estado]] [[to Italy|en Italia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[Have you ever been to Italy|¿has estado alguna vez en Italia]]".' },
  { question: '[[Emma|Emma]] [[visited|visitó]] [[Spain|España]] [[for|durante]] [[two weeks|dos semanas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I went to Spain for two weeks|fui a España durante dos semanas]]".' },
];

export const UNIT_4_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u4-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Time Expressions',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
