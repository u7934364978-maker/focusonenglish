/**
 * Unidad 19 B1 — Lección 3: Comprensión lectora (Reported speech questions/commands, language)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[In our English class|En nuestra clase de inglés]] [[yesterday|ayer]], [[the teacher asked us|el profesor nos preguntó]] [[if|si]] [[we had practised|habíamos practicado]] [[our pronunciation|nuestra pronunciación]] [[at home|en casa]]. [[She told us|Ella nos dijo]] [[to translate|traducir]] [[the text|el texto]] [[into Spanish|al español]] [[for homework|para deberes]]. [[One student asked her|Un estudiante le preguntó]] [[how to pronounce|cómo pronunciar]] [[a difficult word|una palabra difícil]]. [[She asked him|Ella le preguntó]] [[whether|si]] [[he had checked|había consultado]] [[the dictionary|el diccionario]] [[first|primero]]. [[The teacher told us|El profesor nos dijo]] [[not to forget|no olvidar]] [[to study|estudiar]] [[the grammar rules|las reglas gramaticales]] [[for the test|para el examen]]. [[She also asked|Ella también preguntó]] [[what|qué]] [[our favourite way|nuestra forma favorita]] [[to learn vocabulary|de aprender vocabulario]] [[was|era]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the teacher ask|preguntó el profesor]] [[first|primero]]?', options: ['[[about the homework|sobre los deberes]]', '[[if we had practised our pronunciation at home|si habíamos practicado nuestra pronunciación en casa]]', '[[about the test|sobre el examen]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[asked if we had practised our pronunciation at home|preguntó si habíamos practicado nuestra pronunciación en casa]]".' },
  { question: '[[What|Qué]] [[did the teacher tell us|nos dijo el profesor]] [[to do for homework|hacer para deberes]]?', options: ['[[study grammar|estudiar gramática]]', '[[translate the text into Spanish|traducir el texto al español]]', '[[practise pronunciation|practicar pronunciación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[told us to translate the text into Spanish for homework|nos dijo traducir el texto al español para deberes]]".' },
  { question: '[[What|Qué]] [[did one student ask|preguntó un estudiante]]?', options: ['[[about the test|sobre el examen]]', '[[how to pronounce a difficult word|cómo pronunciar una palabra difícil]]', '[[about the dictionary|sobre el diccionario]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[asked how to pronounce a difficult word|preguntó cómo pronunciar una palabra difícil]]".' },
  { question: '[[What|Qué]] [[did she ask him|le preguntó ella]]?', options: ['[[if he was tired|si estaba cansado]]', '[[whether he had checked the dictionary first|si había consultado el diccionario primero]]', '[[what his name was|cuál era su nombre]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[asked whether he had checked the dictionary first|preguntó si había consultado el diccionario primero]]".' },
  { question: '[[What|Qué]] [[did the teacher tell us not to do|nos dijo el profesor que no hiciéramos]]?', options: ['[[translate the text|traducir el texto]]', '[[forget to study the grammar rules|olvidar estudiar las reglas gramaticales]]', '[[practise pronunciation|practicar pronunciación]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[told us not to forget to study the grammar rules|nos dijo no olvidar estudiar las reglas gramaticales]]".' },
  { question: '[[The teacher|El profesor]] [[asked|preguntó]] [[what our favourite way to learn vocabulary was|cuál era nuestra forma favorita de aprender vocabulario]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[asked what our favourite way to learn vocabulary was|preguntó cuál era nuestra forma favorita]]".' },
  { question: '[[The teacher|El profesor]] [[told us|nos dijo]] [[to forget|olvidar]] [[the grammar|la gramática]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Not to forget|No olvidar]] [[to study|estudiar]] [[the grammar|la gramática]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Travel|Viajes]]', '[[Language learning and reported speech|Aprendizaje de idiomas y estilo indirecto]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[talks about|habla de]] [[English class|clase de inglés]] [[and uses|y usa]] [[reported questions and commands|preguntas y órdenes en estilo indirecto]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[asked if/whether|preguntó si]] [[and|y]] [[told to|dijo que]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Examples|Ejemplos]]: [[asked if|preguntó si]], [[asked whether|preguntó si]], [[told us to|nos dijo que]].' },
  { question: '[[For yes/no questions|Para preguntas sí/no]] [[we use|usamos]] [[asked + if/whether|asked + if/whether]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Asked if we had practised|Preguntó si habíamos practicado]].' },
  { question: '[[For commands|Para órdenes]] [[we use|usamos]] [[told + to + infinitive|told + to + infinitivo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Told us to translate|Nos dijo traducir]].' },
  { question: '[[The student|El estudiante]] [[asked|preguntó]] [[how to spell|cómo deletrear]] [[the word|la palabra]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[How to pronounce|Cómo pronunciar]].' },
  { question: '[[Which structure|Qué estructura]] [[is used|se usa]] [[for "no olvidar"|para "no olvidar"]]?', options: ['[[told to forget|dijo olvidar]]', '[[told not to forget|dijo no olvidar]]', '[[asked to forget|preguntó olvidar]]'], correctAnswer: 1, explanation: '[[Told not to forget|Dijo no olvidar]] [[= negative command|= orden negativa]].' },
  { question: '[[For Wh- questions|Para preguntas Wh-]] [[we keep|mantenemos]] [[the question word|la palabra interrogativa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Asked how to pronounce|Preguntó cómo pronunciar]], [[asked what|preguntó qué]].' },
  { question: '[[What|Qué]] [[language vocabulary|vocabulario de idiomas]] [[appears|aparece]] [[in the text|en el texto]]?', options: ['[[pronunciation, translate, grammar, vocabulary, dictionary|pronunciación, traducir, gramática, vocabulario, diccionario]]', '[[food, weather|comida, tiempo]]', '[[music, art|música, arte]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[mentions|menciona]] [[pronunciation|pronunciación]], [[translate|traducir]], [[grammar|gramática]], [[vocabulary|vocabulario]], [[dictionary|diccionario]].' },
];

export const UNIT_19_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u19-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Language',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
