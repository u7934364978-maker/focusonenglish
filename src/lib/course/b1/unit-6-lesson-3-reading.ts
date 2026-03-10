/**
 * Unidad 6 B1 — Lección 3: Comprensión lectora (Future, Travel & transport)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Next|El próximo]] [[month|mes]] [[I|yo]] [[am|estoy]] [[flying|volando]] [[to|a]] [[Tokyo|Tokio]] [[for|para]] [[a|un]] [[business|negocios]] [[trip|viaje]]. [[I|Yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[flight|vuelo]] [[and|y]] [[hotel|hotel]]. [[I|Yo]] [[am|estoy]] [[meeting|reuniendo]] [[my|a mis]] [[colleagues|colegas]] [[at|en]] [[the airport|el aeropuerto]] [[at|a las]] [[6|6]] [[AM|de la mañana]]. [[The|El]] [[plane|avión]] [[takes off|despega]] [[at|a las]] [[8|8]] [[o\'clock|en punto]]. [[I|Yo]] [[think|creo]] [[I|yo]] [[will|me]] [[enjoy|disfrutaré]] [[the|el]] [[trip|viaje]] [[because|porque]] [[I|yo]] [[love|amo]] [[travelling|viajar]]. [[I|Yo]] [[am going to|voy a]] [[visit|visitar]] [[some|algunos]] [[temples|templos]] [[if|si]] [[I|yo]] [[have|tengo]] [[time|tiempo]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[When|Cuándo]] [[is the person flying|vuela la persona]] [[to Tokyo|a Tokio]]?', options: ['[[this month|este mes]]', '[[next month|el próximo mes]]', '[[next year|el próximo año]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Next month I am flying|el próximo mes estoy volando]]".' },
  { question: '[[What|Qué]] [[type of trip|tipo de viaje]] [[is it|es]]?', options: ['[[holiday|vacaciones]]', '[[business trip|viaje de negocios]]', '[[family visit|visita familiar]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[for a business trip|para un viaje de negocios]]".' },
  { question: '[[Has|Ha]] [[the person|la persona]] [[booked|reservado]] [[the flight|el vuelo]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I have already booked my flight|ya he reservado mi vuelo]]".' },
  { question: '[[Where|Dónde]] [[is the person meeting|se reúne la persona]] [[their colleagues|con sus colegas]]?', options: ['[[at the hotel|en el hotel]]', '[[at the airport|en el aeropuerto]]', '[[at the office|en la oficina]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[at the airport at 6 AM|en el aeropuerto a las 6 de la mañana]]".' },
  { question: '[[When|Cuándo]] [[does the plane take off|despega el avión]]?', options: ['[[at 6 AM|a las 6]]', '[[at 8 AM|a las 8]]', '[[at 10 AM|a las 10]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The plane takes off at 8 o\'clock|el avión despega a las 8]]".' },
  { question: '[[Why|Por qué]] [[does the person think|cree la persona]] [[they will enjoy|disfrutará]] [[the trip|el viaje]]?', options: ['[[because of work|por el trabajo]]', '[[because they love travelling|porque ama viajar]]', '[[because of the food|por la comida]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[because I love travelling|porque amo viajar]]".' },
  { question: '[[What|Qué]] [[is the person going to do|va a hacer la persona]] [[if they have time|si tiene tiempo]]?', options: ['[[go shopping|ir de compras]]', '[[visit some temples|visitar algunos templos]]', '[[meet friends|ver amigos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am going to visit some temples if I have time|voy a visitar algunos templos si tengo tiempo]]".' },
  { question: '[[The person|La persona]] [[has|ha]] [[booked|reservado]] [[the hotel|el hotel]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I have already booked my flight and hotel|ya he reservado mi vuelo y hotel]]".' },
  { question: '[[The person|La persona]] [[is meeting|se reúne]] [[colleagues|colegas]] [[at 8 AM|a las 8]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They meet at 6 AM|se reúnen a las 6]] [[and the plane takes off at 8|y el avión despega a las 8]].' },
  { question: '[[The person|La persona]] [[uses|usa]] [[will|will]] [[for a prediction|para una predicción]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I think I will enjoy|creo que disfrutaré]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[Upcoming travel plans|Planes de viaje próximos]]', '[[Tokyo|Tokio]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[upcoming travel plans|planes de viaje próximos]].' },
  { question: '[[Which future form|Qué forma futura]] [[is used for|se usa para]] "[[am flying|estoy volando]]"?', options: ['[[will|will]]', '[[present continuous|presente continuo]]', '[[going to|going to]]'], correctAnswer: 1, explanation: '[[Present continuous|Presente continuo]] [[for fixed arrangements|para arreglos fijos]].' },
  { question: '[[The person|La persona]] [[is going to|va a]] [[visit|visitar]] [[temples|templos]] [[definitely|definitivamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Only if they have time|Solo si tiene tiempo]].' },
  { question: '[[The person|La persona]] [[loves|ama]] [[travelling|viajar]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I love travelling|amo viajar]]".' },
  { question: '[[The person|La persona]] [[has|ha]] [[been|estado]] [[to Tokyo|en Tokio]] [[before|antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text|El texto]] [[doesn\'t say|no dice]] [[they have been before|que haya estado antes]].' },
];

export const UNIT_6_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u6-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Travel & Transport',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
