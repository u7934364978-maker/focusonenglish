/**
 * Unidad 1 B1 — Lección 3: Comprensión lectora (Repaso personal info, feelings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[Maria|María]] [[and|y]] [[I|yo]] [[am|soy]] [[from|de]] [[Spain|España]]. [[I|Yo]] [[have|he]] [[been|estado]] [[living|viviendo]] [[in|en]] [[London|Londres]] [[for|desde hace]] [[two|dos]] [[years|años]] [[because|porque]] [[I|yo]] [[work|trabajo]] [[as|como]] [[a|una]] [[journalist|periodista]]. [[At|Al]] [[first|principio]] [[I|yo]] [[felt|me sentí]] [[very|muy]] [[nervous|nerviosa]] [[and|y]] [[anxious|ansiosa]] [[because|porque]] [[I|yo]] [[didn\'t|no]] [[know|conocía]] [[anyone|a nadie]]. [[But|Pero]] [[now|ahora]] [[I|yo]] [[have|tengo]] [[many|muchos]] [[friends|amigos]] [[and|y]] [[I|yo]] [[feel|me siento]] [[much|mucho]] [[more|más]] [[confident|segura]]. [[I|Yo]] [[used to|solía]] [[miss|echar de menos]] [[my|mi]] [[family|familia]] [[a lot|mucho]], [[but|pero]] [[I|yo]] [[get|me]] [[used to|acostumbré]] [[living|viviendo]] [[alone|sola]]. [[My|Mi]] [[sister|hermana]] [[is|es]] [[an|una]] [[architect|arquitecta]] [[and|y]] [[she|ella]] [[is|está]] [[very|muy]] [[proud|orgullosa]] [[of|de]] [[her|su]] [[job|trabajo]]. [[We|Nosotros]] [[both|ambas]] [[love|amamos]] [[travelling|viajar]] [[and|y]] [[we|nosotros]] [[have|hemos]] [[visited|visitado]] [[many|muchos]] [[countries|países]] [[together|juntas]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[is Maria from|es María de]]?', options: ['[[France|Francia]]', '[[Spain|España]]', '[[Italy|Italia]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I am from Spain|soy de España]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has she been living|lleva viviendo]] [[in London|en Londres]]?', options: ['[[one year|un año]]', '[[two years|dos años]]', '[[three years|tres años]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I have been living in London for two years|llevo viviendo en Londres dos años]]".' },
  { question: '[[What|Qué]] [[does she do|hace]] [[for work|como trabajo]]?', options: ['[[architect|arquitecta]]', '[[journalist|periodista]]', '[[teacher|profesora]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I work as a journalist|trabajo como periodista]]".' },
  { question: '[[How|Cómo]] [[did she feel|se sintió]] [[at first|al principio]]?', options: ['[[confident|segura]]', '[[relaxed|relajada]]', '[[nervous and anxious|nerviosa y ansiosa]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[At first I felt very nervous and anxious|al principio me sentí muy nerviosa y ansiosa]]".' },
  { question: '[[Why|Por qué]] [[did she feel that way|se sintió así]]?', options: ['[[because|porque]] [[she|ella]] [[didn\'t know anyone|no conocía a nadie]]', '[[because|porque]] [[she|ella]] [[didn\'t like London|no le gustaba Londres]]', '[[because|porque]] [[she|ella]] [[missed her job|echaba de menos su trabajo]]'], correctAnswer: 0, explanation: '[[The text says|El texto dice]] "[[because I didn\'t know anyone|porque no conocía a nadie]]".' },
  { question: '[[How|Cómo]] [[does she feel now|se siente ahora]]?', options: ['[[more nervous|más nerviosa]]', '[[more confident|más segura]]', '[[more anxious|más ansiosa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I feel much more confident|me siento mucho más segura]]".' },
  { question: '[[What|Qué]] [[did she use to miss|solía echar de menos]]?', options: ['[[her job|su trabajo]]', '[[her family|su familia]]', '[[London|Londres]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I used to miss my family a lot|solía echar de menos a mi familia mucho]]".' },
  { question: '[[What|Qué]] [[is her sister\'s job|es el trabajo de su hermana]]?', options: ['[[journalist|periodista]]', '[[architect|arquitecta]]', '[[teacher|profesora]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My sister is an architect|mi hermana es arquitecta]]".' },
  { question: '[[How|Cómo]] [[does her sister feel|se siente su hermana]] [[about her job|sobre su trabajo]]?', options: ['[[embarrassed|avergonzada]]', '[[proud|orgullosa]]', '[[nervous|nerviosa]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[she is very proud of her job|está muy orgullosa de su trabajo]]".' },
  { question: '[[What|Qué]] [[do they both love|aman ambas]]?', options: ['[[cooking|cocinar]]', '[[travelling|viajar]]', '[[reading|leer]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[We both love travelling|ambas amamos viajar]]".' },
  { question: '[[Maria|María]] [[has|ha]] [[visited|visitado]] [[many countries|muchos países]] [[with|con]] [[her sister|su hermana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we have visited many countries together|hemos visitado muchos países juntas]]".' },
  { question: '[[Maria|María]] [[still|todavía]] [[feels|se siente]] [[nervous|nerviosa]] [[in London|en Londres]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[now feels more confident|ahora se siente más segura]].' },
  { question: '[[Maria|María]] [[got used to|se acostumbró]] [[living alone|a vivir sola]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I got used to living alone|me acostumbré a vivir sola]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[A|Una]] [[trip|viaje]]', '[[Maria\'s|La]] [[life|vida]] [[and|y]] [[feelings|sentimientos]] [[in London|en Londres]]', '[[Jobs|Trabajos]] [[in London|en Londres]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[Maria\'s life|la vida de María]] [[and|y]] [[her feelings|sus sentimientos]] [[in London|en Londres]].' },
  { question: '[[Maria|María]] [[works|trabaja]] [[as|como]] [[an architect|arquitecta]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She|Ella]] [[works as a journalist|trabaja como periodista]]. [[Her sister|Su hermana]] [[is|es]] [[the architect|la arquitecta]].' },
];

export const UNIT_1_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u1-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Personal Info',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
