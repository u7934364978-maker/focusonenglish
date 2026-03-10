/**
 * Unidad 19 B1 — Lección 4: Comprensión auditiva (Reported speech questions/commands, language)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I went|Fui]] [[to|a]] [[my first|mi primera]] [[Spanish class|clase de español]] [[last week|la semana pasada]]. [[The teacher asked me|El profesor me preguntó]] [[if|si]] [[I had studied|había estudiado]] [[any language|algún idioma]] [[before|antes]]. [[I told her|Le dije]] [[that|que]] [[I had learnt|había aprendido]] [[English|inglés]] [[at school|en el colegio]]. [[She told me|Ella me dijo]] [[to practise|practicar]] [[my pronunciation|mi pronunciación]] [[every day|cada día]] [[by|con]] [[watching|viendo]] [[Spanish films|películas españolas]]. [[Another student asked her|Otro estudiante le preguntó]] [[how to translate|cómo traducir]] [[the word|la palabra]] [["fluent"|"fluido"]] [[into Spanish|al español]]. [[She asked him|Ella le preguntó]] [[whether|si]] [[he had a dictionary|tenía un diccionario]]. [[The teacher told us|El profesor nos dijo]] [[not to worry|no preocuparse]] [[about|por]] [[making mistakes|cometer errores]] [[because|porque]] [[that's how we learn|así es como aprendemos]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[When|Cuándo]] [[did the person go|fue la persona]] [[to their first Spanish class|a su primera clase de español]]?', options: ['[[yesterday|ayer]]', '[[last week|la semana pasada]]', '[[last month|el mes pasado]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[went to my first Spanish class last week|fui a mi primera clase de español la semana pasada]]".' },
  { question: '[[What|Qué]] [[did the teacher ask|preguntó el profesor]]?', options: ['[[about the homework|sobre los deberes]]', '[[if I had studied any language before|si había estudiado algún idioma antes]]', '[[about the test|sobre el examen]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[asked if I had studied any language before|preguntó si había estudiado algún idioma antes]]".' },
  { question: '[[What|Qué]] [[had the person learnt|había aprendido la persona]] [[at school|en el colegio]]?', options: ['[[Spanish|español]]', '[[English|inglés]]', '[[French|francés]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[I had learnt English at school|había aprendido inglés en el colegio]]".' },
  { question: '[[What|Qué]] [[did the teacher tell the person to do|le dijo el profesor a la persona que hiciera]]?', options: ['[[study grammar|estudiar gramática]]', '[[practise pronunciation every day by watching Spanish films|practicar pronunciación cada día viendo películas españolas]]', '[[buy a dictionary|comprar un diccionario]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[told me to practise my pronunciation every day by watching Spanish films|me dijo practicar mi pronunciación cada día viendo películas españolas]]".' },
  { question: '[[What|Qué]] [[did another student ask|preguntó otro estudiante]]?', options: ['[[how to spell the word|cómo deletrear la palabra]]', '[[how to translate the word "fluent" into Spanish|cómo traducir la palabra "fluido" al español]]', '[[how to pronounce|cómo pronunciar]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[asked how to translate the word "fluent" into Spanish|preguntó cómo traducir la palabra "fluido" al español]]".' },
  { question: '[[The teacher|El profesor]] [[asked him|le preguntó]] [[whether he had a dictionary|si tenía un diccionario]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The speaker says|El hablante dice]] "[[asked whether he had a dictionary|preguntó si tenía un diccionario]]".' },
  { question: '[[The teacher|El profesor]] [[told us|nos dijo]] [[to worry|preocuparse]] [[about mistakes|por los errores]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Not to worry|No preocuparse]] [[about making mistakes|por cometer errores]].' },
  { question: '[[What|Qué]] [[structure|estructura]] [[is used|se usa]] [[for "me dijo practicar"|para "me dijo practicar"]]?', options: ['[[told me to + infinitive|told me to + infinitivo]]', '[[asked me if|asked me if]]', '[[said that|said that]]'], correctAnswer: 0, explanation: '[[Told me to practise|Me dijo practicar]] [[= command in reported speech|= orden en estilo indirecto]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[reported questions|preguntas en estilo indirecto]] [[and|y]] [[reported commands|órdenes en estilo indirecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Asked if|Preguntó si]], [[told me to|me dijo que]].' },
  { question: '[[The person|La persona]] [[had studied|había estudiado]] [[Spanish|español]] [[before|antes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It was their first Spanish class|Era su primera clase de español]].' },
  { question: '[[Which question word|Qué palabra interrogativa]] [[is used|se usa]] [[for "cómo traducir"|para "cómo traducir"]]?', options: ['[[if|si]]', '[[how|cómo]]', '[[what|qué]]'], correctAnswer: 1, explanation: '[[Asked how to translate|Preguntó cómo traducir]] [[= Wh- question|= pregunta Wh-]].' },
  { question: '[[For negative commands|Para órdenes negativas]] [[we use|usamos]] ____.', options: ['[[told to not|told to not]]', '[[told not to|told not to]]', '[[asked not to|asked not to]]'], correctAnswer: 1, explanation: '[[Told not to worry|Dijo no preocuparse]] [[= told + not to + infinitive|= told + not to + infinitivo]].' },
  { question: '[[The main topic|El tema principal]] [[is|es]] [[language learning|aprendizaje de idiomas]] [[with reported speech|con estilo indirecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The listening|La escucha]] [[focuses on|se centra en]] [[Spanish class|clase de español]] [[and|y]] [[reported speech|estilo indirecto]].' },
  { question: '[[The teacher said|El profesor dijo]] [[that|que]] ____.', options: ['[[we should worry about mistakes|deberíamos preocuparnos por los errores]]', '[[that\'s how we learn|así es como aprendemos]]', '[[we must not make mistakes|no debemos cometer errores]]'], correctAnswer: 1, explanation: '[[The speaker says|El hablante dice]] "[[because that\'s how we learn|porque así es como aprendemos]]".' },
  { question: '[[What|Qué]] [[language vocabulary|vocabulario de idiomas]] [[appears|aparece]] [[in the listening|en la escucha]]?', options: ['[[pronunciation, translate, dictionary, fluent|pronunciación, traducir, diccionario, fluido]]', '[[food, weather|comida, tiempo]]', '[[music, art|música, arte]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[mentions|menciona]] [[pronunciation|pronunciación]], [[translate|traducir]], [[dictionary|diccionario]], [[fluent|fluido]].' },
];

export const UNIT_19_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u19-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Language',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
