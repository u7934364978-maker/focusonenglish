/**
 * Unidad 34 B1 — Lección 3: Comprensión lectora (-ed/-ing adjectives, Personal feelings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[was|estaba]] [[very|muy]] [[excited|emocionado]] [[about|por]] [[my|mi]] [[trip|viaje]] [[to|a]] [[Paris|París]]. [[The journey|El viaje]] [[was|era]] [[long|largo]] [[and|y]] [[tiring|agotador]], [[but|pero]] [[when|cuando]] [[I|yo]] [[arrived|llegué]] [[I|yo]] [[felt|me sentí]] [[thrilled|emocionado]]. [[The city|La ciudad]] [[is|es]] [[amazing|asombrosa]] [[and|y]] [[I|yo]] [[was|estaba]] [[never|nunca]] [[bored|aburrido]]. [[Some|Algunos]] [[museums|museos]] [[were|eran]] [[a bit|un poco]] [[boring|aburridos]], [[but|pero]] [[the|la]] [[food|comida]] [[was|era]] [[delicious|deliciosa]]. [[I|Yo]] [[was|estaba]] [[disappointed|decepcionado]] [[when|cuando]] [[the|la]] [[Eiffel Tower|Torre Eiffel]] [[was|estaba]] [[closed|cerrada]], [[but|pero]] [[overall|en general]] [[I|yo]] [[had|tuve]] [[an|una]] [[interesting|interesante]] [[and|y]] [[exciting|emocionante]] [[time|experiencia]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[was the person excited about|estaba emocionada la persona]]?', options: ['[[a job|un trabajo]]', '[[a trip to Paris|un viaje a París]]', '[[a film|una película]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was very excited about my trip to Paris|estaba muy emocionado por mi viaje a París]]".' },
  { question: '[[What|Qué]] [[was the journey like|era el viaje]]?', options: ['[[short and easy|corto y fácil]]', '[[long and tiring|largo y agotador]]', '[[boring|aburrido]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The journey was long and tiring|el viaje era largo y agotador]]".' },
  { question: '[[How|Cómo]] [[did they feel when they arrived|se sintieron al llegar]]?', options: ['[[bored|aburridos]]', '[[thrilled|emocionados]]', '[[disappointed|decepcionados]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[when I arrived I felt thrilled|cuando llegué me sentí emocionado]]".' },
  { question: '[[What|Qué]] [[were some museums like|eran algunos museos]]?', options: ['[[amazing|asombrosos]]', '[[a bit boring|un poco aburridos]]', '[[exciting|emocionantes]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Some museums were a bit boring|algunos museos eran un poco aburridos]]".' },
  { question: '[[What|Qué]] [[was the food like|era la comida]]?', options: ['[[boring|aburrida]]', '[[disappointing|decepcionante]]', '[[delicious|deliciosa]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[the food was delicious|la comida era deliciosa]]".' },
  { question: '[[What|Qué]] [[disappointed them|les decepcionó]]?', options: ['[[the food|la comida]]', '[[the Eiffel Tower was closed|la Torre Eiffel estaba cerrada]]', '[[the museums|los museos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I was disappointed when the Eiffel Tower was closed|estaba decepcionado cuando la Torre Eiffel estaba cerrada]]".' },
  { question: '[[The person|La persona]] [[was|estaba]] [[never bored|nunca aburrida]] [[in Paris|en París]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I was never bored|nunca estaba aburrido]]".' },
  { question: '[[The journey|El viaje]] [[was|era]] [[short|corto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It was long and tiring|Era largo y agotador]].' },
  { question: '[[Overall|En general]] [[they had|tuvieron]] [[an interesting time|una experiencia interesante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[overall I had an interesting and exciting time|en general tuve una experiencia interesante y emocionante]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[A trip to Paris and feelings|Un viaje a París y sentimientos]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[feelings during a trip|sentimientos durante un viaje]].' },
  { question: '[[Which -ed adjective|Qué adjetivo -ed]] [[describes how they felt|describe cómo se sintieron]] [[about the Eiffel Tower|sobre la Torre Eiffel]]?', options: ['[[excited|emocionado]]', '[[disappointed|decepcionado]]', '[[bored|aburrido]]'], correctAnswer: 1, explanation: '[[Disappointed|Decepcionado]] = [[how they felt|cómo se sintieron]].' },
  { question: '[[Which -ing adjective|Qué adjetivo -ing]] [[describes the journey|describe el viaje]]?', options: ['[[tiring|agotador]]', '[[tired|cansado]]', '[[excited|emocionado]]'], correctAnswer: 0, explanation: '[[Tiring|Agotador]] = [[the journey causes tiredness|el viaje causa cansancio]].' },
  { question: '[[The city|La ciudad]] [[is|es]] [[amazing|asombrosa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[The city is amazing|la ciudad es asombrosa]]".' },
  { question: '[[They|Ellos]] [[visited|visitaron]] [[the Eiffel Tower|la Torre Eiffel]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It was closed|Estaba cerrada]].' },
  { question: '[[The overall experience|La experiencia general]] [[was|era]] [[positive|positiva]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[overall I had an interesting and exciting time|en general tuve una experiencia interesante y emocionante]]".' },
];

export const UNIT_34_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u34-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Personal Feelings',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
