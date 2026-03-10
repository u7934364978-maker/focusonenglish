/**
 * Unidad 51 — Lección 3: Comprensión lectora (Modals: Have to & Must)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[At|En]] [[my|mi]] [[school|escuela]], [[we|nosotros]] [[have to|tenemos que]] [[follow|seguir]] [[many|muchas]] [[rules|reglas]]. [[Students|Los estudiantes]] [[must|deben]] [[wear|llevar]] [[uniforms|uniformes]] [[every|cada]] [[day|día]]. [[We|Nosotros]] [[have to|tenemos que]] [[arrive|llegar]] [[on|a]] [[time|tiempo]] [[and|y]] [[we|nosotros]] [[must|debemos]] [[not|no]] [[use|usar]] [[phones|teléfonos]] [[in|en]] [[class|clase]]. [[Teachers|Los profesores]] [[have to|tienen que]] [[prepare|preparar]] [[lessons|lecciones]] [[and|y]] [[mark|corregir]] [[homework|deberes]]. [[Everyone|Todos]] [[has to|tiene que]] [[respect|respetar]] [[each other|unos a otros]]. [[I|Yo]] [[have to|tengo que]] [[get up|levantarme]] [[early|temprano]] [[because|porque]] [[school|la escuela]] [[starts|empieza]] [[at|a las]] [[8|8]] [[am|am]]. [[My|Mi]] [[sister|hermana]] [[has to|tiene que]] [[take|tomar]] [[the|el]] [[bus|autobús]] [[because|porque]] [[she|ella]] [[lives|vive]] [[far|lejos]]. [[We|Nosotros]] [[both|ambos]] [[understand|entendemos]] [[that|que]] [[rules|las reglas]] [[are|son]] [[necessary|necesarias]] [[for|para]] [[a|un]] [[good|buen]] [[education|educación]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[does|está]] [[the|el]] [[writer|autor]] [[talk about|habla de]] [[rules|reglas]]?', options: ['[[At home|En casa]]', '[[At school|En la escuela]]', '[[At work|En el trabajo]]', '[[In a hospital|En un hospital]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[At my school|En mi escuela]]".' },
  { question: '[[What|Qué]] [[must|deben]] [[students|los estudiantes]] [[wear|llevar]]?', options: ['[[Casual clothes|Ropa casual]]', '[[Uniforms|Uniformes]]', '[[Sports clothes|Ropa deportiva]]', '[[Nothing special|Nada especial]]'], correctAnswer: 1, explanation: '[[Students must wear uniforms|Los estudiantes deben llevar uniformes]].' },
  { question: '[[Can|Pueden]] [[students|los estudiantes]] [[use|usar]] [[phones|teléfonos]] [[in|en]] [[class|clase]]?', options: ['[[Yes|Sí]]', '[[No|No]]', '[[Sometimes|A veces]]', '[[Only in break|Solo en el recreo]]'], correctAnswer: 1, explanation: '[[We must not use phones in class|No debemos usar teléfonos en clase]].' },
  { question: '[[What|Qué]] [[do|tienen que]] [[teachers|los profesores]] [[have to|hacer]]?', options: ['[[Only teach|Solo enseñar]]', '[[Prepare lessons and mark homework|Preparar lecciones y corregir deberes]]', '[[Clean the classroom|Limpiar el aula]]', '[[Nothing extra|Nada extra]]'], correctAnswer: 1, explanation: '[[Teachers have to prepare lessons and mark homework|Los profesores tienen que preparar lecciones y corregir deberes]].' },
  { question: '[[What|A qué]] [[time|hora]] [[does|empieza]] [[school|la escuela]] [[start|empezar]]?', options: ['[[7 am|7 am]]', '[[8 am|8 am]]', '[[9 am|9 am]]', '[[10 am|10 am]]'], correctAnswer: 1, explanation: '[[School starts at 8 am|La escuela empieza a las 8 am]].' },
  { question: '[[How|Cómo]] [[does|va]] [[the|la]] [[sister|hermana]] [[to|a]] [[school|la escuela]]?', options: ['[[By car|En coche]]', '[[By bus|En autobús]]', '[[On foot|A pie]]', '[[By bike|En bicicleta]]'], correctAnswer: 1, explanation: '[[She has to take the bus|Ella tiene que tomar el autobús]].' },
  { question: '[[Why|Por qué]] [[does|tiene que]] [[the|la]] [[sister|hermana]] [[take|tomar]] [[the bus|el autobús]]?', options: ['[[She likes it|Le gusta]]', '[[She lives far|Vive lejos]]', '[[It is free|Es gratis]]', '[[Her parents say so|Sus padres lo dicen]]'], correctAnswer: 1, explanation: '[[Because she lives far|Porque vive lejos]].' },
  { question: '[[What|Qué]] [[do|tienen que]] [[students|los estudiantes]] [[have to|hacer]] [[regarding|respecto a]] [[arrival|llegada]]?', options: ['[[Arrive late|Llegar tarde]]', '[[Arrive on time|Llegar a tiempo]]', '[[Arrive whenever|Llegar cuando quieran]]', '[[Not come|No venir]]'], correctAnswer: 1, explanation: '[[We have to arrive on time|Tenemos que llegar a tiempo]].' },
  { question: '[[The|El]] [[writer|autor]] [[and|y]] [[his|su]] [[sister|hermana]] ____ ____ ____ [[rules|reglas]].', options: ['[[understand that rules are necessary|entienden que las reglas son necesarias]]', '[[hate rules|odian las reglas]]', '[[ignore rules|ignoran las reglas]]', '[[don\'t care about rules|no les importan las reglas]]'], correctAnswer: 0, explanation: '[[We both understand that rules are necessary|Ambos entendemos que las reglas son necesarias]].' },
  { question: '[[Everyone|Todos]] [[has to|tiene que]] ____ ____ ____.', options: ['[[respect each other|respetar unos a otros]]', '[[wear a uniform|llevar uniforme]]', '[[arrive early|llegar temprano]]', '[[use phones|usar teléfonos]]'], correctAnswer: 0, explanation: '[[Everyone has to respect each other|Todos tienen que respetar unos a otros]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[Food|Comida]]', '[[School rules and obligations|Reglas y obligaciones escolares]]', '[[Travel|Viajes]]', '[[Sports|Deportes]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is about|trata de]] [[school rules|reglas escolares]].' },
  { question: '[[Which|Cuál]] [[modal|modal]] [[is|se]] [[used|usa]] [[most|más]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[Can|Can]]', '[[Have to and must|Have to y must]]', '[[Should|Should]]', '[[Could|Could]]'], correctAnswer: 1, explanation: '[[Have to and must|Have to y must]] [[for|para]] [[obligation|obligación]].' },
  { question: '[[The|El]] [[writer|autor]] ____ ____ ____ ____ [[early|temprano]].', options: ['[[has to get up|tiene que levantarse]]', '[[doesn\'t have to get up|no tiene que levantarse]]', '[[must not get up|no debe levantarse]]', '[[can get up|puede levantarse]]'], correctAnswer: 0, explanation: '[[I have to get up early|Tengo que levantarme temprano]].' },
  { question: '[[Rules|Las reglas]] [[are|son]] ____ ____ ____ ____ ____.', options: ['[[necessary for a good education|necesarias para una buena educación]]', '[[unnecessary|innecesarias]]', '[[boring|aburridas]]', '[[easy to ignore|fáciles de ignorar]]'], correctAnswer: 0, explanation: '[[Rules are necessary for a good education|Las reglas son necesarias para una buena educación]].' },
  { question: '[[True or False|Verdadero o Falso]]: [[Students|Los estudiantes]] [[can|pueden]] [[use|usar]] [[phones|teléfonos]] [[in|en]] [[class|clase]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[We must not use phones in class|No debemos usar teléfonos en clase]].' },
];

export const UNIT_51_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u51-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Modals: Have to & Must',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
