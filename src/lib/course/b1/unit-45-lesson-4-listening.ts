/**
 * Unidad 45 B1 — Lección 4: Comprensión auditiva (Repaso 41–44)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Paul|Paul]] [[and|y]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]]. [[I|Yo]] [[depend on|dependo de]] [[public transport|transporte público]] [[for|para]] [[getting|llegar]] [[to work|al trabajo]]. [[I|Yo]] [[am|estoy]] [[afraid of|tengo miedo de]] [[being|llegar]] [[late|tarde]]. [[I|Yo]] [[have worked|he trabajado]] [[here|aquí]] [[for|durante]] [[five years|cinco años]]. [[During the journey|Durante el viaje]] [[I|yo]] [[read|leo]] [[or|o]] [[listen to|escucho]] [[podcasts|podcasts]]. [[I|Yo]] [[have lived|he vivido]] [[in|en]] [[this area|esta zona]] [[since|desde]] [[2020|2020]]. [[The office|La oficina]] [[is open|está abierta]] [[from|desde]] [[8am|8am]] [[to|hasta]] [[5pm|5pm]]. [[While I was having lunch|Mientras almorzaba]], [[my|mi]] [[boss|jefe]] [[called|llamó]]. [[I|Yo]] [[am|estoy]] [[proud of|orgulloso de]] [[my team|mi equipo]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|De qué]] [[does Paul depend on|depende Paul]]?', options: ['[[his car|su coche]]', '[[public transport|transporte público]]', '[[his bike|su bici]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[depend on public transport|dependo del transporte público]]".' },
  { question: '[[What|De qué]] [[is Paul afraid of|tiene miedo Paul]]?', options: ['[[flying|volar]]', '[[being late|llegar tarde]]', '[[speaking|hablar]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[afraid of being late|miedo de llegar tarde]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has Paul worked there|ha trabajado Paul allí]]?', options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[seven years|siete años]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[have worked here for five years|he trabajado aquí durante cinco años]]".' },
  { question: '[[What|Qué]] [[does Paul do during the journey|hace Paul durante el viaje]]?', options: ['[[he sleeps|duerme]]', '[[he reads or listens to podcasts|lee o escucha podcasts]]', '[[he works|trabaja]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[read or listen to podcasts|leo o escucho podcasts]]".' },
  { question: '[[Since when|Desde cuándo]] [[has Paul lived in the area|vive Paul en la zona]]?', options: ['[[2018|2018]]', '[[2020|2020]]', '[[2022|2022]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[have lived in this area since 2020|he vivido en esta zona desde 2020]]".' },
  { question: '[[What|Cuál]] [[are the office hours|son el horario de la oficina]]?', options: ['[[7am to 4pm|7am a 4pm]]', '[[8am to 5pm|8am a 5pm]]', '[[9am to 6pm|9am a 6pm]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[from 8am to 5pm|desde 8am hasta 5pm]]".' },
  { question: '[[When|Cuándo]] [[did the boss call|llamó el jefe]]?', options: ['[[during the meeting|durante la reunión]]', '[[while Paul was having lunch|mientras Paul almorzaba]]', '[[in the morning|por la mañana]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[while I was having lunch, my boss called|mientras almorzaba, mi jefe llamó]]".' },
  { question: '[[What|De qué]] [[is Paul proud of|está orgulloso Paul]]?', options: ['[[his car|su coche]]', '[[his team|su equipo]]', '[[his office|su oficina]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[proud of my team|orgulloso de mi equipo]]".' },
  { question: '[[Paul|Paul]] [[uses|usa]] [[public transport|transporte público]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[depend on public transport|dependo del transporte público]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[A work day with prepositions and time|Un día de trabajo con preposiciones y tiempo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[a work day|un día de trabajo]] [[using units 41-44|usando unidades 41-44]].' },
  { question: '[[The text|El texto]] [[uses|usa]] [[during|durante]], [[for|durante]], [[since|desde]] [[and|y]] [[from|desde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[During the journey|Durante el viaje]], [[for five years|durante cinco años]], [[since 2020|desde 2020]], [[from 8am to 5pm|desde 8am hasta 5pm]].' },
  { question: '[[Paul|Paul]] [[listens to|escucha]] [[podcasts|podcasts]] [[during the journey|durante el viaje]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[read or listen to podcasts|leo o escucho podcasts]]".' },
  { question: '[[Which verb + preposition|Qué verbo + preposición]] [[means "depender de"|significa depender de]]?', options: ['[[wait for|esperar a]]', '[[depend on|depender de]]', '[[listen to|escuchar a]]'], correctAnswer: 1, explanation: '[[Depend on|Depender de]] [[means depender de|significa depender de]].' },
  { question: '[[Paul|Paul]] [[has lived|ha vivido]] [[there|allí]] [[since 2018|desde 2018]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He has lived since 2020|Ha vivido desde 2020]].' },
  { question: '[[The boss|El jefe]] [[called|llamó]] [[while Paul was having lunch|mientras Paul almorzaba]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[while I was having lunch, my boss called|mientras almorzaba, mi jefe llamó]]".' },
];

export const UNIT_45_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u45-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 41-44',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
