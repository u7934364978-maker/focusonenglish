/**
 * Unidad 9 B1 — Lección 3: Comprensión lectora (Used to, Habits & lifestyle)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[used to|solía]] [[live|vivir]] [[in|en]] [[a small village|un pueblo pequeño]] [[when|cuando]] [[I|yo]] [[was|era]] [[young|joven]]. [[I|Yo]] [[used to|solía]] [[walk|caminar]] [[to|a]] [[school|la escuela]] [[every day|cada día]] [[and|y]] [[play|jugar]] [[in|en]] [[the fields|los campos]] [[after|después]] [[class|clase]]. [[Now|Ahora]] [[I|yo]] [[live|vivo]] [[in|en]] [[a big city|una gran ciudad]] [[and|y]] [[I|yo]] [[am|estoy]] [[used to|acostumbrado a]] [[the noise|el ruido]] [[and|y]] [[the busy lifestyle|el estilo de vida ocupado]]. [[It|]] [[took|tomó]] [[me|me]] [[a few months|unos meses]] [[to|para]] [[get used to|acostumbrarme a]] [[living|vivir]] [[here|aquí]]. [[I|Yo]] [[used to|solía]] [[hate|odiar]] [[traffic|el tráfico]] [[but|pero]] [[now|ahora]] [[I|yo]] [[don\'t mind|no me importa]] [[it|]]. [[My parents|Mis padres]] [[used to|solían]] [[visit|visitar]] [[me|me]] [[every weekend|cada fin de semana]] [[but|pero]] [[they|ellos]] [[live|viven]] [[far|lejos]] [[now|ahora]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did the person use to live|solía vivir la persona]]?', options: ['[[in a big city|en una gran ciudad]]', '[[in a small village|en un pueblo pequeño]]', '[[in the countryside|en el campo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I used to live in a small village|solía vivir en un pueblo pequeño]]".' },
  { question: '[[How|Cómo]] [[did the person use to go to school|solía ir la persona a la escuela]]?', options: ['[[by bus|en autobús]]', '[[by car|en coche]]', '[[on foot|a pie]]'], correctAnswer: 2, explanation: '[[The text says|El texto dice]] "[[I used to walk to school|solía caminar a la escuela]]".' },
  { question: '[[Where|Dónde]] [[does the person live now|vive la persona ahora]]?', options: ['[[in a village|en un pueblo]]', '[[in a big city|en una gran ciudad]]', '[[in the countryside|en el campo]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[Now I live in a big city|ahora vivo en una gran ciudad]]".' },
  { question: '[[Is|Está]] [[the person|la persona]] [[used to|acostumbrado a]] [[the city|la ciudad]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'Yes', explanation: '[[The text says|El texto dice]] "[[I am used to the noise and the busy lifestyle|estoy acostumbrado al ruido y al estilo de vida ocupado]]".' },
  { question: '[[How long|Cuánto tiempo]] [[did it take|tomó]] [[to get used to|acostumbrarse a]] [[living there|vivir allí]]?', options: ['[[a few weeks|unas semanas]]', '[[a few months|unos meses]]', '[[a year|un año]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[It took me a few months to get used to living here|me tomó unos meses acostumbrarme a vivir aquí]]".' },
  { question: '[[What|Qué]] [[did the person use to hate|solía odiar la persona]]?', options: ['[[the noise|el ruido]]', '[[traffic|el tráfico]]', '[[the city|la ciudad]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[I used to hate traffic|solía odiar el tráfico]]".' },
  { question: '[[Does|Le]] [[the person|la persona]] [[mind traffic now|importa el tráfico ahora]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 'No', explanation: '[[The text says|El texto dice]] "[[now I don\'t mind it|ahora no me importa]]".' },
  { question: '[[Who|Quién]] [[used to visit|solía visitar]] [[the person|cada fin de semana]]?', options: ['[[friends|amigos]]', '[[parents|padres]]', '[[siblings|hermanos]]'], correctAnswer: 1, explanation: '[[The text says|El texto dice]] "[[My parents used to visit me every weekend|mis padres solían visitarme cada fin de semana]]".' },
  { question: '[[Do|Visitan]] [[the parents|los padres]] [[still visit|todavía visitan]] [[every weekend|cada fin de semana]]?', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[They|Ellos]] [[live far now|viven lejos ahora]].' },
  { question: '[[The person|La persona]] [[used to|solía]] [[play|jugar]] [[in the fields|en los campos]] [[after class|después de clase]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[play in the fields after class|jugar en los campos después de clase]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this text|este texto]]?', options: ['[[School|Escuela]]', '[[Change in lifestyle and habits|Cambio en estilo de vida y hábitos]]', '[[Parents|Padres]]'], correctAnswer: 1, explanation: '[[The text|El texto]] [[describes|describe]] [[past habits and adaptation|hábitos pasados y adaptación]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses|expresa]] [[past habits|hábitos pasados]]?', options: ['[[be used to|estar acostumbrado a]]', '[[used to|solía]]', '[[get used to|acostumbrarse a]]'], correctAnswer: 1, explanation: '[[Used to|Used to]] [[for past habits|para hábitos pasados]].' },
  { question: '[[The person|La persona]] [[got used to|se acostumbró a]] [[the city|la ciudad]] [[quickly|rápidamente]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It took a few months|Tomó unos meses]].' },
  { question: '[[Which structure|Qué estructura]] [[expresses|expresa]] [[being accustomed now|estar acostumbrado ahora]]?', options: ['[[used to|solía]]', '[[be used to|estar acostumbrado a]]', '[[get used to|acostumbrarse a]]'], correctAnswer: 1, explanation: '[[Be used to|Be used to]] [[for current state|para estado actual]].' },
  { question: '[[The person|La persona]] [[prefers|prefiere]] [[the village|el pueblo]] [[to the city|a la ciudad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The text|El texto]] [[doesn\'t say|no dice]] [[they prefer one|que prefiera uno]].' },
];

export const UNIT_9_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u9-l3-r${i + 1}`,
  type: 'reading',
  level: 'B1',
  topic: 'Habits & Lifestyle',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
