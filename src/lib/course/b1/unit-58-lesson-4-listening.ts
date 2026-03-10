/**
 * Unidad 58 B1 — Lección 4: Comprensión auditiva (Places: town & countryside)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I|yo]] [[am|soy]] [[James|James]] [[and|y]] [[I|yo]] [[want|quiero]] [[to tell|contar]] [[you|te]] [[about|sobre]] [[my town|mi pueblo]]. [[The town centre|El centro del pueblo]] [[was renovated|fue renovado]] [[last year|el año pasado]], [[and|y]] [[now|ahora]] [[there are|hay]] [[many new shops|muchas tiendas nuevas]]. [[I|Yo]] [[have been living|he estado viviendo]] [[here|aquí]] [[since 2010|desde 2010]]. [[The park|El parque]] [[is visited|es visitado]] [[by hundreds of people|por cientos de personas]] [[every weekend|cada fin de semana]]. [[If|Si]] [[you|tú]] [[come|vienes]] [[to visit|a visitar]], [[you will love|te encantará]] [[the countryside|el campo]] [[around|alrededor]]. [[My sister|Mi hermana]] [[told me|me dijo]] [[that|que]] [[she would|vendría]] [[visit|a visitar]] [[next month|el próximo mes]]. [[The mountains|Las montañas]] [[are covered|están cubiertas]] [[with snow|con nieve]] [[in winter|en invierno]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[John|John]]', '[[James|James]]', '[[Jack|Jack]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am James|soy James]]".' },
  { question: '[[When|Cuándo]] [[was the town centre renovated|fue renovado el centro del pueblo]]?', options: ['[[Two years ago|Hace dos años]]', '[[Last year|El año pasado]]', '[[Next year|El año que viene]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The town centre was renovated last year|el centro del pueblo fue renovado el año pasado]]".' },
  { question: '[[How long|Cuánto tiempo]] [[has James been living|ha estado viviendo James]] [[there|allí]]?', options: ['[[Since 2005|Desde 2005]]', '[[Since 2010|Desde 2010]]', '[[Since 2015|Desde 2015]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I have been living here since 2010|he estado viviendo aquí desde 2010]]".' },
  { question: '[[What|Qué]] [[is visited|es visitado]] [[by hundreds of people|por cientos de personas]] [[every weekend|cada fin de semana]]?', options: ['[[The shops|Las tiendas]]', '[[The park|El parque]]', '[[The mountains|Las montañas]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The park is visited by hundreds of people|el parque es visitado por cientos de personas]]".' },
  { question: '[[What|Qué]] [[will happen|pasará]] [[if you visit|si visitas]]?', options: ['[[Nothing|Nada]]', '[[You will love the countryside|Te encantará el campo]]', '[[You will leave|Te irás]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[you will love the countryside around|te encantará el campo alrededor]]".' },
  { question: '[[There are|Hay]] [[many new shops|muchas tiendas nuevas]] [[in the town centre|en el centro del pueblo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[now there are many new shops|ahora hay muchas tiendas nuevas]]".' },
  { question: '[[James\'s sister|La hermana de James]] [[will visit|visitará]] [[next month|el próximo mes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[my sister told me that she would visit next month|mi hermana me dijo que vendría a visitar el próximo mes]]".' },
  { question: '[[The mountains|Las montañas]] [[are covered|están cubiertas]] [[with snow|con nieve]] [[in winter|en invierno]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[The mountains are covered with snow in winter|las montañas están cubiertas con nieve en invierno]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Food|Comida]]', '[[Town and countryside|Pueblo y campo]]', '[[Sport|Deporte]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[talks about|habla sobre]] [[town and countryside|pueblo y campo]].' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for|para]] [[the town centre and park|el centro del pueblo y parque]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was renovated|fue renovado]]", "[[is visited|es visitado]]".' },
  { question: '[[First conditional|Primer condicional]] [[is used|se usa]] [[for|para]] [[inviting visitors|invitar visitantes]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If you come to visit|si vienes a visitar]]... [[you will love|te encantará]]".' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the sister\'s visit|la visita de la hermana]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My sister told me that she would visit|mi hermana me dijo que vendría a visitar]]".' },
  { question: '[[James|James]] [[has lived|ha vivido]] [[there|allí]] [[for 15 years|durante 15 años]] [[if since 2010|si desde 2010]] [[and now is 2025|y ahora es 2025]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Since 2010|Desde 2010]] [[means many years|significa muchos años]].' },
  { question: '[[The countryside|El campo]] [[is|es]] [[around|alrededor de]] [[the town|el pueblo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[the countryside around|el campo alrededor]]".' },
  { question: '[[The listening|La escucha]] [[mentions|menciona]] [[town centre|centro del pueblo]], [[park|parque]] [[and|y]] [[mountains|montañas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All are mentioned|Todos están mencionados]].' },
];

export const UNIT_58_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u58-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Places',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
