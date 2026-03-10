/**
 * Unidad 6 B1 — Lección 4: Comprensión auditiva (Future, Travel & transport)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Sarah|Sarah]]. [[Next|El próximo]] [[week|semana]] [[I|yo]] [[am|estoy]] [[travelling|viajando]] [[to|a]] [[Barcelona|Barcelona]] [[by|en]] [[train|tren]]. [[I|yo]] [[have|he]] [[already|ya]] [[booked|reservado]] [[my|mi]] [[ticket|billete]]. [[The|El]] [[train|tren]] [[departs|sale]] [[at|a las]] [[9|9]] [[AM|de la mañana]] [[and|y]] [[I|yo]] [[am|estoy]] [[meeting|reuniendo]] [[my|a mi]] [[friend|amiga]] [[at|en]] [[the station|la estación]] [[at|a las]] [[8:30|8:30]]. [[I|yo]] [[think|creo]] [[we|nosotros]] [[will|]] [[have|tendremos]] [[a|un]] [[great|gran]] [[time|tiempo]]. [[I|yo]] [[am going to|voy a]] [[visit|visitar]] [[the|la]] [[Sagrada Familia|Sagrada Familia]] [[and|y]] [[maybe|quizás]] [[some|algunos]] [[beaches|playas]]. [[I|yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|en]] [[Barcelona|Barcelona]] [[before|antes]] [[so|así que]] [[I|yo]] [[am|estoy]] [[very|muy]] [[excited|emocionada]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[When|Cuándo]] [[is Sarah travelling|viaja Sarah]] [[to Barcelona|a Barcelona]]?', options: ['[[this week|esta semana]]', '[[next week|la próxima semana]]', '[[next month|el próximo mes]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Next week I am travelling|la próxima semana estoy viajando]]".' },
  { question: '[[How|Cómo]] [[is she travelling|viaja]]?', options: ['[[by plane|en avión]]', '[[by train|en tren]]', '[[by car|en coche]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am travelling to Barcelona by train|estoy viajando a Barcelona en tren]]".' },
  { question: '[[Has|Ha]] [[she|ella]] [[booked|reservado]] [[her ticket|su billete]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[She says|Dice]] "[[I have already booked my ticket|ya he reservado mi billete]]".' },
  { question: '[[When|Cuándo]] [[does the train depart|sale el tren]]?', options: ['[[at 8:30|a las 8:30]]', '[[at 9 AM|a las 9]]', '[[at 10 AM|a las 10]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[The train departs at 9 AM|el tren sale a las 9]]".' },
  { question: '[[Where|Dónde]] [[is she meeting|se reúne]] [[her friend|su amiga]]?', options: ['[[at the airport|en el aeropuerto]]', '[[at the station|en la estación]]', '[[at the hotel|en el hotel]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am meeting my friend at the station|me reúno con mi amiga en la estación]]".' },
  { question: '[[When|Cuándo]] [[is she meeting|se reúne]] [[her friend|su amiga]]?', options: ['[[at 8 AM|a las 8]]', '[[at 8:30|a las 8:30]]', '[[at 9 AM|a las 9]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[at the station at 8:30|en la estación a las 8:30]]".' },
  { question: '[[What|Qué]] [[is she going to visit|va a visitar]]?', options: ['[[the museum|el museo]]', '[[the Sagrada Familia|la Sagrada Familia]]', '[[the park|el parque]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am going to visit the Sagrada Familia|voy a visitar la Sagrada Familia]]".' },
  { question: '[[Has|Ha]] [[she|ella]] [[been|estado]] [[to Barcelona|en Barcelona]] [[before|antes]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[She says|Dice]] "[[I have never been to Barcelona before|nunca he estado en Barcelona antes]]".' },
  { question: '[[Sarah|Sarah]] [[is|está]] [[excited|emocionada]] [[about|sobre]] [[the trip|el viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am very excited|estoy muy emocionada]]".' },
  { question: '[[Sarah|Sarah]] [[is travelling|viaja]] [[by plane|en avión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[is travelling by train|viaja en tren]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Work|Trabajo]]', '[[Travel plans to Barcelona|Planes de viaje a Barcelona]]', '[[Friends|Amigos]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[Sarah\'s travel plans|los planes de viaje de Sarah]].' },
  { question: '[[Which future form|Qué forma futura]] [[is used for|se usa para]] "[[am travelling|estoy viajando]]"?', options: ['[[will|will]]', '[[present continuous|presente continuo]]', '[[going to|going to]]'], correctAnswer: 1, explanation: '[[Present continuous|Presente continuo]] [[for fixed plans|para planes fijos]].' },
  { question: '[[Sarah|Sarah]] [[might|podría]] [[visit|visitar]] [[some beaches|algunas playas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[maybe some beaches|quizás algunas playas]]".' },
  { question: '[[Sarah|Sarah]] [[thinks|cree]] [[she will have|tendrá]] [[a great time|un gran tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I think we will have a great time|creo que tendremos un gran tiempo]]".' },
  { question: '[[Sarah|Sarah]] [[has|ha]] [[booked|reservado]] [[the hotel|el hotel]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[only booked the ticket|solo reservó el billete]].' },
];

export const UNIT_6_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u6-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Travel & Transport',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
