/**
 * Unidad 36 B1 — Lección 3: Comprensión lectora (So/such, Intensifiers)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|El pasado]] [[weekend|fin de semana]] [[I|yo]] [[had|tuve]] [[such a|un]] [[wonderful|maravilloso]] [[time|tiempo]] [[that|que]] [[I|yo]] [[don't want|no quiero]] [[to go back|volver]] [[to work|al trabajo]]. [[The|El]] [[weather|tiempo]] [[was|era]] [[so|tan]] [[beautiful|hermoso]] [[that|que]] [[we|nosotros]] [[spent|pasamos]] [[all day|todo el día]] [[outside|fuera]]. [[There were|Había]] [[so many|tantas]] [[people|personas]] [[at the|en el]] [[beach|playa]] [[that|que]] [[we|nosotros]] [[couldn't find|no pudimos encontrar]] [[a place|un sitio]] [[to sit|para sentarnos]]. [[But|Pero]] [[the|el]] [[ice cream|helado]] [[was|era]] [[extremely|extremadamente]] [[delicious|delicioso]] [[and|y]] [[we|nosotros]] [[had|tuvimos]] [[so much|tanto]] [[fun|diversión]] [[that|que]] [[we|nosotros]] [[didn't|no]] [[care|nos importó]]. [[I|Yo]] [[had|tuve]] [[such a|un]] [[amazing|increíble]] [[experience|experiencia]] [[that|que]] [[I|yo]] [[will|voy a]] [[definitely|definitivamente]] [[go back|volver]] [[next|el próximo]] [[summer|verano]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[did the person have last weekend|tuvo la persona el pasado fin de semana]]?', options: ['[[a boring time|un tiempo aburrido]]', '[[a wonderful time|un tiempo maravilloso]]', '[[work|trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[such a wonderful time|un tiempo maravilloso]]".' },
  { question: '[[What|Qué]] [[was the weather like|era el tiempo]]?', options: ['[[rainy|lluvioso]]', '[[so beautiful|tan hermoso]]', '[[cold|frío]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[The weather was so beautiful|el tiempo era tan hermoso]]".' },
  { question: '[[Where|Dónde]] [[did they spend the day|pasaron el día]]?', options: ['[[inside|dentro]]', '[[outside|fuera]]', '[[at work|en el trabajo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[we spent all day outside|pasamos todo el día fuera]]".' },
  { question: '[[Why|Por qué]] [[couldn\'t they find a place to sit|no pudieron encontrar sitio para sentarse]]?', options: ['[[because the beach was closed|porque la playa estaba cerrada]]', '[[because there were so many people|porque había tantas personas]]', '[[because the weather was bad|porque el tiempo era malo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[There were so many people at the beach|había tantas personas en la playa]]".' },
  { question: '[[What|Qué]] [[was the ice cream like|era el helado]]?', options: ['[[terrible|terrible]]', '[[extremely delicious|extremadamente delicioso]]', '[[normal|normal]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[the ice cream was extremely delicious|el helado era extremadamente delicioso]]".' },
  { question: '[[Will|Va]] [[the person go back|la persona volver]] [[next summer|el próximo verano]]?', options: ['[[No|No]]', '[[Yes, definitely|Sí, definitivamente]]', '[[Maybe|Quizás]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I will definitely go back next summer|voy a volver definitivamente el próximo verano]]".' },
  { question: '[[The person|La persona]] [[had|tuvo]] [[a wonderful time|un tiempo maravilloso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[such a wonderful time|un tiempo maravilloso]]".' },
  { question: '[[They|Ellos]] [[found|encontraron]] [[a place|un sitio]] [[to sit|para sentarse]] [[easily|fácilmente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They couldn\'t find a place|No pudieron encontrar sitio]].' },
  { question: '[[The ice cream|El helado]] [[was|era]] [[extremely delicious|extremadamente delicioso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[extremely delicious|extremadamente delicioso]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[Work|Trabajo]]', '[[A wonderful weekend at the beach|Un fin de semana maravilloso en la playa]]', '[[Weather|Tiempo]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[a weekend at the beach|un fin de semana en la playa]].' },
  { question: '[[Which intensifier|Qué intensificador]] [[describes the ice cream|describe el helado]]?', options: ['[[slightly|ligeramente]]', '[[extremely|extremadamente]]', '[[a bit|un poco]]'], correctAnswer: 1, explanation: '[[The text uses|El texto usa]] "[[extremely delicious|extremadamente delicioso]]".' },
  { question: '[[They|Ellos]] [[had|tuvieron]] [[so much fun|tanta diversión]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[we had so much fun|tuvimos tanta diversión]]".' },
  { question: '[[Which structure|Qué estructura]] [[is used for "wonderful time"|se usa para "tiempo maravilloso"]]?', options: ['[[so|tan]]', '[[such a|un día tan]]', '[[so many|tantos]]'], correctAnswer: 1, explanation: '[[Such a|Tal]] + [[adjective + noun|adjetivo + sustantivo]]: "[[such a wonderful time|un tiempo maravilloso]]".' },
  { question: '[[The person|La persona]] [[wants|quiere]] [[to go back|volver]] [[to work|al trabajo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They don\'t want to go back to work|No quieren volver al trabajo]].' },
  { question: '[[The experience|La experiencia]] [[was|era]] [[amazing|increíble]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[such an amazing experience|una experiencia increíble]]".' },
];

export const UNIT_36_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u36-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Intensifiers',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
