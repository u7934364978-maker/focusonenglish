/**
 * Unidad 32 B2 — Lección 4: Comprensión auditiva (Environment extended)
 * 13 preguntas (B2: transcripción sobre medio ambiente y cuantificadores)
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[Elena|Elena]] [[and|y]] [[I work|trabajo]] [[for|para]] [[an|una]] [[environmental NGO|ONG ambiental]]. [[All|Todos]] [[our|nuestros]] [[projects|proyectos]] [[focus on|se centran en]] [[conservation|conservación]] [[and|y]] [[most of|la mayoría de]] [[the work|el trabajo]] [[we do|que hacemos]] [[involves|implica]] [[raising awareness|aumentar la conciencia]] [[about|sobre]] [[biodiversity|biodiversidad]]. [[Each|Cada]] [[volunteer|voluntario]] [[receives|recibe]] [[training|formación]] [[and|y]] [[every|cada]] [[month|mes]] [[we|nosotros]] [[organise|organizamos]] [[clean-up events|eventos de limpieza]] [[in|en]] [[nature reserves|reservas naturales]]. [[Both|Ambos]] [[the local|el gobierno]] [[government|local]] [[and|y]] [[businesses|empresas]] [[support|apoyan]] [[our|nuestra]] [[initiatives|iniciativas]]. [[Most of|La mayoría de]] [[the species|las especies]] [[we protect|que protegemos]] [[are|están]] [[endangered|en peligro]] [[and|y]] [[each|cada]] [[habitat|hábitat]] [[has|tiene]] [[its own|su propia]] [[challenges|desafíos]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[Elena, who works for an environmental NGO|Elena, que trabaja para una ONG ambiental]]', '[[A government official|Un funcionario del gobierno]]', '[[A business owner|Un empresario]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m Elena and I work for an environmental NGO|soy Elena y trabajo para una ONG ambiental]]".' },
  { question: '[[What|Qué]] [[do all their projects focus on|en qué se centran todos sus proyectos]]?', options: ['[[Conservation|Conservación]]', '[[Business|Negocios]]', '[[Government|Gobierno]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[all our projects focus on conservation|todos nuestros proyectos se centran en conservación]]".' },
  { question: '[[What|Qué]] [[does most of the work involve|implica la mayoría del trabajo]]?', options: ['[[Raising awareness about biodiversity|Aumentar la conciencia sobre biodiversidad]]', '[[Building factories|Construir fábricas]]', '[[Cutting trees|Talar árboles]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[most of the work we do involves raising awareness about biodiversity|la mayoría del trabajo que hacemos implica aumentar la conciencia sobre biodiversidad]]".' },
  { question: '[[What|Qué]] [[does each volunteer receive|recibe cada voluntario]]?', options: ['[[Training|Formación]]', '[[Money|Dinero]]', '[[A certificate|Un certificado]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[each volunteer receives training|cada voluntario recibe formación]]".' },
  { question: '[[How often|Con qué frecuencia]] [[do they organise clean-up events|organizan eventos de limpieza]]?', options: ['[[Every month|Cada mes]]', '[[Every year|Cada año]]', '[[Every week|Cada semana]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[every month we organise clean-up events|cada mes organizamos eventos de limpieza]]".' },
  { question: '[[Who|Quién]] [[supports their initiatives|apoya sus iniciativas]]?', options: ['[[Both the local government and businesses|Tanto el gobierno local como las empresas]]', '[[Only the government|Solo el gobierno]]', '[[Only businesses|Solo empresas]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[both the local government and businesses support our initiatives|tanto el gobierno local como las empresas apoyan nuestras iniciativas]]".' },
  { question: '[[What|Qué]] [[is the status of most species they protect|es el estado de la mayoría de especies que protegen]]?', options: ['[[They are endangered|Están en peligro]]', '[[They are extinct|Están extintas]]', '[[They are safe|Están seguras]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[most of the species we protect are endangered|la mayoría de especies que protegemos están en peligro]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[An NGO\'s work in conservation and environmental protection|El trabajo de una ONG en conservación y protección ambiental]]', '[[Business is more important|Los negocios son más importantes]]', '[[Government does everything|El gobierno hace todo]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[her NGO work|su trabajo en la ONG]].' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used for|se usa para]] [[two things|dos cosas]]?', options: ['[[Both|Both]]', '[[All|All]]', '[[Each|Each]]'], correctAnswer: 0, explanation: '[[Both = two|Both = dos]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[conservation|conservación]], [[biodiversity|biodiversidad]], [[habitat|hábitat]], [[endangered|en peligro]]', '[[sport|deporte]], [[music|música]]', '[[food|comida]], [[weather|tiempo]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[environment vocabulary|vocabulario de medio ambiente]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about Elena|sobre Elena]]?', options: ['[[She is dedicated to environmental protection|Está dedicada a la protección ambiental]]', '[[She works for a factory|Trabaja para una fábrica]]', '[[She does not care about nature|No le importa la naturaleza]]'], correctAnswer: 0, explanation: '[[She works|Trabaja]] [[for|para]] [[an environmental NGO|una ONG ambiental]] [[and|y]] [[describes|describe]] [[conservation work|trabajo de conservación]].' },
  { question: '[[Each|Cada]] ____ [[has its own challenges|tiene sus propios desafíos]].', options: ['[[habitat|hábitat]]', '[[volunteer|voluntario]]', '[[business|empresa]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[each habitat has its own challenges|cada hábitat tiene sus propios desafíos]]".' },
  { question: '[[They organise|Organizan]] ____ [[clean-up events|eventos de limpieza]] [[in nature reserves|en reservas naturales]].', options: ['[[every month|cada mes]]', '[[every year|cada año]]', '[[never|nunca]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[every month we organise clean-up events in nature reserves|cada mes organizamos eventos de limpieza en reservas naturales]]".' },
];

export const UNIT_32_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u32-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Environment (extended)',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
