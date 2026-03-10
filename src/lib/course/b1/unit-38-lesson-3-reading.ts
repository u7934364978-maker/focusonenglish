/**
 * Unidad 38 B1 — Lección 3: Comprensión lectora (Clauses of contrast, Opinions)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[In my view|En mi opinión]], [[social media|redes sociales]] [[has|tiene]] [[both|tanto]] [[advantages|ventajas]] [[and|como]] [[disadvantages|desventajas]]. [[Although|Aunque]] [[it|ello]] [[helps|ayuda]] [[us|nos]] [[stay connected|mantenernos conectados]] [[with|con]] [[friends|amigos]] [[and|y]] [[family|familia]], [[it can also|también puede]] [[be|ser]] [[addictive|adictivo]]. [[Many people|Mucha gente]] [[believe|cree]] [[that|que]] [[we spend|pasamos]] [[too much time|demasiado tiempo]] [[online|en línea]]. [[However|Sin embargo]], [[I think|creo]] [[that|que]] [[social media|las redes sociales]] [[can be|pueden ser]] [[useful|útiles]] [[if|si]] [[we use it|lo usamos]] [[responsibly|responsablemente]]. [[Although|Aunque]] [[some people|algunas personas]] [[disagree|no están de acuerdo]], [[I am convinced|estoy convencido]] [[that|que]] [[the benefits|los beneficios]] [[outweigh|superan]] [[the drawbacks|los inconvenientes]]. [[From my point of view|Desde mi punto de vista]], [[the key|la clave]] [[is|es]] [[balance|equilibrio]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the main topic|es el tema principal]] [[of the text|del texto]]?', options: ['[[Technology|Tecnología]]', '[[Social media advantages and disadvantages|Ventajas y desventajas de redes sociales]]', '[[Family|Familia]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[discusses|discute]] [[social media|redes sociales]] [[and its pros and cons|y sus pros y contras]].' },
  { question: '[[What|Qué]] [[does the writer think|piensa el escritor]] [[about social media|sobre las redes sociales]]?', options: ['[[It is only bad|Solo es malo]]', '[[It has both advantages and disadvantages|Tiene ventajas y desventajas]]', '[[It is only good|Solo es bueno]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[social media has both advantages and disadvantages|las redes sociales tienen ventajas y desventajas]]".' },
  { question: '[[What|Qué]] [[advantage|ventaja]] [[is mentioned|se menciona]]?', options: ['[[it saves money|ahorra dinero]]', '[[it helps us stay connected|ayuda a mantenernos conectados]]', '[[it is free|es gratis]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[it helps us stay connected with friends and family|ayuda a mantenernos conectados con amigos y familia]]".' },
  { question: '[[What|Qué]] [[disadvantage|desventaja]] [[is mentioned|se menciona]]?', options: ['[[it is expensive|es caro]]', '[[it can be addictive|puede ser adictivo]]', '[[it is slow|es lento]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[it can also be addictive|también puede ser adictivo]]".' },
  { question: '[[What|Qué]] [[do many people believe|creen muchas personas]]?', options: ['[[we don\'t use it enough|no lo usamos suficiente]]', '[[we spend too much time online|pasamos demasiado tiempo en línea]]', '[[it is useful|es útil]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Many people believe that we spend too much time online|muchas personas creen que pasamos demasiado tiempo en línea]]".' },
  { question: '[[What|Qué]] [[does the writer think|piensa el escritor]] [[about responsible use|sobre el uso responsable]]?', options: ['[[social media can be useful if we use it responsibly|las redes pueden ser útiles si las usamos responsablemente]]', '[[we should never use it|nunca deberíamos usarlas]]', '[[it is always bad|siempre es malo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[social media can be useful if we use it responsibly|las redes pueden ser útiles si las usamos responsablemente]]".' },
  { question: '[[Which contrast word|Qué palabra de contraste]] [[is used|se usa]] [[for "it helps us stay connected"|para "ayuda a mantenernos conectados"]]?', options: ['[[however|sin embargo]]', '[[although|aunque]]', '[[but|pero]]'], correctAnswer: 1, explanation: '[[Although|Aunque]] [[introduces the contrast|introduce el contraste]] [[before "it can also be addictive"|antes de "también puede ser adictivo"]].' },
  { question: '[[The writer|El escritor]] [[is convinced|está convencido]] [[that benefits outweigh drawbacks|que los beneficios superan los inconvenientes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I am convinced that the benefits outweigh the drawbacks|estoy convencido de que los beneficios superan los inconvenientes]]".' },
  { question: '[[What|Cuál]] [[is the key|es la clave]] [[according to the writer|según el escritor]]?', options: ['[[technology|tecnología]]', '[[balance|equilibrio]]', '[[time|tiempo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[From my point of view, the key is balance|desde mi punto de vista, la clave es el equilibrio]]".' },
  { question: '[[Everyone|Todos]] [[agrees|está de acuerdo]] [[with the writer|con el escritor]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text says|El texto dice]] "[[although some people disagree|aunque algunas personas no están de acuerdo]]".' },
  { question: '[[Which phrase|Qué frase]] [[introduces the writer\'s opinion|introduce la opinión del escritor]]?', options: ['[[In my view|En mi opinión]]', '[[In fact|De hecho]]', '[[Actually|En realidad]]'], correctAnswer: 0, explanation: '[[In my view|En mi opinión]] [[introduces the opinion|introduce la opinión]].' },
  { question: '[[The writer|El escritor]] [[thinks|piensa]] [[social media|las redes sociales]] [[can be useful|pueden ser útiles]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I think that social media can be useful|creo que las redes pueden ser útiles]]".' },
  { question: '[[Which word|Qué palabra]] [[connects the two ideas|conecta las dos ideas]] [[about spending time and usefulness|sobre pasar tiempo y utilidad]]?', options: ['[[although|aunque]]', '[[however|sin embargo]]', '[[because|porque]]'], correctAnswer: 1, explanation: '[[However|Sin embargo]] [[connects|conecta]] [["many people believe"|"muchas personas creen"]] [[and|y]] [["I think"|"creo"]].' },
  { question: '[[Social media|Las redes sociales]] [[helps|ayuda]] [[stay connected|mantenerse conectado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[it helps us stay connected|ayuda a mantenernos conectados]]".' },
  { question: '[[The writer|El escritor]] [[believes|cree]] [[in|en]] [[balance|equilibrio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[From my point of view, the key is balance|desde mi punto de vista, la clave es el equilibrio]]".' },
];

export const UNIT_38_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u38-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Opinions',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
