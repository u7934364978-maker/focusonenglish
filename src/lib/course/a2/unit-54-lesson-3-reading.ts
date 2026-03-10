/**
 * Unidad 54 — Lección 3: Comprensión lectora (Modals: Could & May)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[When|Cuando]] [[I|yo]] [[was|era]] [[a|un]] [[child|niño]], [[I|yo]] [[could|podía]] [[ask|pedir]] [[my|mi]] [[parents|padres]] [[for|para]] [[permission|permiso]] [[to|para]] [[go|ir]] [[out|fuera]] [[with|con]] [[friends|amigos]]. [[They|Ellos]] [[would|solían]] [[say|decir]]: "[[You|Tú]] [[may|puedes]] [[go|ir]] [[if|si]] [[you|tú]] [[finish|terminas]] [[your|tu]] [[homework|deberes]]." [[Sometimes|A veces]] [[I|yo]] [[could|podía]] [[not|no]] [[go|ir]] [[because|porque]] [[I|yo]] [[had|tenía]] [[too much|demasiados]] [[tasks|tareas]]. [[Now|Ahora]] [[as|como]] [[an|un]] [[adult|adulto]], [[I|yo]] [[may|puedo]] [[decide|decidir]] [[for|por]] [[myself|mí mismo]]. [[The|El]] [[weather|tiempo]] [[may|puede]] [[be|ser]] [[nice|bueno]] [[tomorrow|mañana]] — [[we|nosotros]] [[could|podríamos]] [[have|tener]] [[a|un]] [[picnic|picnic]]. [[Or|O]] [[it|ello]] [[could|podría]] [[rain|llover]] [[and|y]] [[we|nosotros]] [[would|tendríamos]] [[to|que]] [[stay|quedarnos]] [[inside|dentro]]. [[Life|La vida]] [[is|es]] [[full|llena]] [[of|de]] [[possibilities|posibilidades]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[could|podía]] [[the|el]] [[writer|autor]] ____ ____ ____ ____ ____ ____?', options: ['[[Ask his parents for permission to go out|Pedir permiso a sus padres para salir]]', '[[Drive a car|Conducir un coche]]', '[[Travel alone|Viajar solo]]', '[[Work|Trabajar]]'], correctAnswer: 0, explanation: '[[I could ask my parents for permission to go out|Podía pedir permiso a mis padres para salir]].' },
  { question: '[[What|Qué]] [[condition|condición]] [[did|pusieron]] [[the|los]] [[parents|padres]] ____ ____ ____ ____?', options: ['[[Finish homework before going out|Terminar los deberes antes de salir]]', '[[Eat dinner|Cenar]]', '[[Clean the room|Limpiar la habitación]]', '[[Nothing|Nada]]'], correctAnswer: 0, explanation: '[[You may go if you finish your homework|Puedes ir si terminas tus deberes]].' },
  { question: '[[Why|Por qué]] [[could|podía]] [[the|el]] [[writer|autor]] ____ ____ ____ ____ ____ ____ ____?', options: ['[[Not go out sometimes|No salir a veces]]', '[[Because he had too many tasks|Porque tenía demasiadas tareas]]', '[[Both A and B|Ambas A y B]]', '[[He always went out|Siempre salía]]'], correctAnswer: 2, explanation: '[[I could not go because I had too many tasks|No podía ir porque tenía demasiadas tareas]].' },
  { question: '[[Now|Ahora]] [[as|como]] [[an|un]] [[adult|adulto]], [[the|el]] [[writer|autor]] ____ ____ ____ ____ ____ ____.', options: ['[[may decide for himself|puede decidir por sí mismo]]', '[[must ask parents|debe preguntar a los padres]]', '[[cannot go out|no puede salir]]', '[[has no choices|no tiene opciones]]'], correctAnswer: 0, explanation: '[[I may decide for myself|Puedo decidir por mí mismo]].' },
  { question: '[[The|El]] [[weather|tiempo]] ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[may be nice tomorrow|puede ser bueno mañana]]', '[[will definitely rain|definitivamente lloverá]]', '[[is always bad|siempre es malo]]', '[[never changes|nunca cambia]]'], correctAnswer: 0, explanation: '[[The weather may be nice tomorrow|El tiempo puede ser bueno mañana]].' },
  { question: '[[If|Si]] [[the|el]] [[weather|tiempo]] [[is|es]] [[nice|bueno]], [[they|ellos]] ____ ____ ____ ____ ____ ____.', options: ['[[could have a picnic|podrían tener un picnic]]', '[[must stay inside|deben quedarse dentro]]', '[[cannot go out|no pueden salir]]', '[[will work|trabajarán]]'], correctAnswer: 0, explanation: '[[We could have a picnic|Podríamos tener un picnic]].' },
  { question: '[[If|Si]] [[it|llueve]], [[they|ellos]] ____ ____ ____ ____ ____ ____ ____.', options: ['[[would have to stay inside|tendrían que quedarse dentro]]', '[[could have a picnic|podrían tener un picnic]]', '[[must go out|deben salir]]', '[[will be happy|estarán contentos]]'], correctAnswer: 0, explanation: '[[We would have to stay inside|Tendríamos que quedarnos dentro]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Permission and possibility in life|Permiso y posibilidad en la vida]]', '[[Work|Trabajo]]', '[[Sports|Deportes]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is about|trata de]] [[permission and possibilities|permiso y posibilidades]].' },
  { question: '[[Which|Cuál]] [[modals|modales]] [[are|se]] [[used|usan]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Can and must|Can y must]]', '[[Could and may|Could y may]]', '[[Should|Should]]', '[[Have to|Have to]]'], correctAnswer: 1, explanation: '[[Could and may|Could y may]] [[for|para]] [[permission and possibility|permiso y posibilidad]].' },
  { question: '[[Life|La vida]] [[is|es]] ____ ____ ____ ____ ____.', options: ['[[full of possibilities|llena de posibilidades]]', '[[boring|aburrida]]', '[[easy|fácil]]', '[[empty|vacía]]'], correctAnswer: 0, explanation: '[[Life is full of possibilities|La vida está llena de posibilidades]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[The|El]] [[writer|autor]] [[could|podía]] [[always|siempre]] [[go|ir]] [[out|fuera]] [[as|cuando]] [[a|era]] [[child|niño]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[Sometimes he could not go|A veces no podía ir]].' },
  { question: '[[Could|Podía]] [[is|se]] [[used|usa]] [[for|para]] ____ ____ ____ ____ ____ ____.', options: ['[[past ability and polite requests|capacidad pasada y peticiones educadas]]', '[[obligation|obligación]]', '[[permission only|solo permiso]]', '[[future plans|planes futuros]]'], correctAnswer: 0, explanation: '[[Could|Could]] [[has|tiene]] [[multiple uses|múltiples usos]].' },
  { question: '[[May|Puede]] [[is|se]] [[used|usa]] [[for|para]] ____ ____ ____ ____ ____.', options: ['[[permission and possibility|permiso y posibilidad]]', '[[obligation only|solo obligación]]', '[[past ability|capacidad pasada]]', '[[advice|consejo]]'], correctAnswer: 0, explanation: '[[May|May]] [[expresses|expresa]] [[permission and possibility|permiso y posibilidad]].' },
  { question: '[[The|El]] [[writer|autor]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[talks about childhood and adulthood|habla de infancia y adultez]]', '[[only talks about weather|solo habla del tiempo]]', '[[describes a picnic|describe un picnic]]', '[[complains about homework|se queja de los deberes]]'], correctAnswer: 0, explanation: '[[Childhood and adulthood experiences|Experiencias de infancia y adultez]].' },
  { question: '[[What|Qué]] [[does|significa]] "[[Life is full of possibilities|La vida está llena de posibilidades]]" [[mean|significar]]?', options: ['[[We have many options and chances|Tenemos muchas opciones y oportunidades]]', '[[Life is boring|La vida es aburrida]]', '[[Nothing is possible|Nada es posible]]', '[[We must stay home|Debemos quedarnos en casa]]'], correctAnswer: 0, explanation: '[[Full of possibilities|Llena de posibilidades]] = [[many options|muchas opciones]].' },
];

export const UNIT_54_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u54-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Modals: Could & May',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
