/**
 * Unidad 46 B2 — Lección 3: Comprensión lectora (Psychology & Human Behavior)
 * 13 preguntas (B2: texto sobre psicología y condicionales mixtos)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If I had studied|Si hubiera estudiado]] [[psychology at university|psicología en la universidad]], [[I would be|sería]] [[a therapist now|terapeuta ahora]]. [[If she were more confident|Si fuera más segura]], [[she wouldn't have given up|no habría abandonado]] [[her research|su investigación]] [[so easily|tan fácilmente]]. [[Behavior|El comportamiento]] [[is influenced by|está influenciado por]] [[cognition and emotions|cognición y emociones]]. [[If they had understood|Si hubieran entendido]] [[their emotions better|sus emociones mejor]], [[they would have better relationships now|tendrían mejores relaciones ahora]]. [[Mental health|La salud mental]] [[depends on|depende de]] [[how we cope|cómo afrontamos]] [[with stress|el estrés]]. [[If he had listened|Si hubiera escuchado]] [[to his therapist|a su terapeuta]], [[he would know|sabría]] [[how to manage|cómo gestionar]] [[his anxiety now|su ansiedad ahora]].`;

const INSTRUCTIONS = 'Lee el texto sobre psicología. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[would the person be|sería la persona]] [[if they had studied psychology|si hubiera estudiado psicología]]?', options: ['[[A therapist now|Terapeuta ahora]]', '[[A doctor|Un doctor]]', '[[A teacher|Un profesor]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if I had studied psychology at university, I would be a therapist now|si hubiera estudiado psicología en la universidad, sería terapeuta ahora]]".' },
  { question: '[[What|Qué]] [[wouldn\'t she have done|no habría hecho ella]] [[if she were more confident|si fuera más segura]]?', options: ['[[Given up her research so easily|Abandonado su investigación tan fácilmente]]', '[[Started the research|Empezado la investigación]]', '[[Finished the research|Terminado la investigación]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if she were more confident, she wouldn\'t have given up her research so easily|si fuera más segura, no habría abandonado su investigación tan fácilmente]]".' },
  { question: '[[What|Qué]] [[influences behavior|influye en el comportamiento]]?', options: ['[[Cognition and emotions|Cognición y emociones]]', '[[Only genetics|Solo genética]]', '[[Environment only|Solo entorno]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[behavior is influenced by cognition and emotions|el comportamiento está influenciado por cognición y emociones]]".' },
  { question: '[[What|Qué]] [[would they have now|tendrían ahora]] [[if they had understood their emotions better|si hubieran entendido sus emociones mejor]]?', options: ['[[Better relationships|Mejores relaciones]]', '[[More money|Más dinero]]', '[[Less stress|Menos estrés]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if they had understood their emotions better, they would have better relationships now|si hubieran entendido sus emociones mejor, tendrían mejores relaciones ahora]]".' },
  { question: '[[What|De qué]] [[does mental health depend|depende la salud mental]]?', options: ['[[How we cope with stress|Cómo afrontamos el estrés]]', '[[Our income|Nuestros ingresos]]', '[[Our age|Nuestra edad]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[mental health depends on how we cope with stress|la salud mental depende de cómo afrontamos el estrés]]".' },
  { question: '[[What|Qué]] [[would he know now|sabría ahora]] [[if he had listened to his therapist|si hubiera escuchado a su terapeuta]]?', options: ['[[How to manage his anxiety|Cómo gestionar su ansiedad]]', '[[How to study|Cómo estudiar]]', '[[How to work|Cómo trabajar]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[if he had listened to his therapist, he would know how to manage his anxiety now|si hubiera escuchado a su terapeuta, sabría cómo gestionar su ansiedad ahora]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the text|del texto]]?', options: ['[[Psychology, behavior and mixed conditionals about past/present|Psicología, comportamiento y condicionales mixtos sobre pasado/presente]]', '[[Therapy is best|La terapia es mejor]]', '[[Emotions are bad|Las emociones son malas]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[combines|combina]] [[psychology|psicología]] [[with|con]] [[mixed conditionals|condicionales mixtos]].' },
  { question: '[[Which structure|Qué estructura]] [[combines past condition with present result|combina condición pasada con resultado presente]]?', options: ['[[If + had + past participle, would + infinitive|If + had + participio, would + infinitivo]]', '[[If + present, will + infinitive|If + presente, will + infinitivo]]', '[[If + past, would + infinitive|If + pasado, would + infinitivo]]'], correctAnswer: 0, explanation: '[[Mixed conditional|Condicional mixto]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is key|es clave]] [[in this text|en este texto]]?', options: ['[[cognition|cognición]], [[emotions|emociones]], [[mental health|salud mental]], [[anxiety|ansiedad]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The text|El texto]] [[focuses on|se centra en]] [[psychology vocabulary|vocabulario de psicología]].' },
  { question: '[[If she|Si ella]] ____ [[more patient|más paciente]], [[she wouldn\'t have lost|no habría perdido]] [[her temper|los estribos]].', options: ['[[were|fuera]]', '[[had been|hubiera sido]]'], correctAnswer: 0, explanation: '[[Mixed: present condition, past result|Mixto: condición presente, resultado pasado]].' },
  { question: '[[If I|Si yo]] ____ [[known|sabido]], [[I would have helped|habría ayudado]].', options: ['[[had|hubiera]]', '[[would have|habría]]'], correctAnswer: 0, explanation: '[[Third conditional|Tercer condicional]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about psychology|sobre la psicología]]?', options: ['[[Past choices affect present outcomes|Las elecciones pasadas afectan los resultados presentes]]', '[[Only therapy helps|Solo la terapia ayuda]]', '[[Emotions don\'t matter|Las emociones no importan]]'], correctAnswer: 0, explanation: '[[Mixed conditionals|Condicionales mixtos]] [[show this connection|muestran esta conexión]].' },
  { question: '[[If they|Si ellos]] ____ [[practised|practicado]] [[more|más]], [[they would be|estarían]] [[better now|mejor ahora]].', options: ['[[had|hubieran]]', '[[would have|habrían]]'], correctAnswer: 0, explanation: '[[Mixed: past condition, present result|Mixto: condición pasada, resultado presente]].' },
];

export const UNIT_46_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u46-l3-r${i + 1}`,
  type: 'reading',
  level: 'B2',
  topic: 'personal-relationships',
  difficulty: 'medium',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
