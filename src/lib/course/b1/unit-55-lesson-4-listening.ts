/**
 * Unidad 55 B1 — Lección 4: Comprensión auditiva (Repaso 51–54)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hello|Hola]], [[I|yo]] [[am|soy]] [[David|David]] [[and|y]] [[I|yo]] [[want|quiero]] [[to share|compartir]] [[my experience|mi experiencia]]. [[The new stadium|El nuevo estadio]] [[was built|fue construido]] [[last year|el año pasado]] [[and|y]] [[it|él]] [[is used|es usado]] [[for many events|para muchos eventos]]. [[My teacher|Mi profesora]] [[told me|me dijo]] [[that|que]] [[I|yo]] [[should practice|debería practicar]] [[more|más]]. [[If|Si]] [[I|yo]] [[had listened|hubiera escuchado]] [[to her|a ella]], [[I|yo]] [[would have passed|habría aprobado]] [[the exam|el examen]]. [[If|Si]] [[you|tú]] [[practice|practicas]] [[regularly|regularmente]], [[you|tú]] [[will improve|mejorarás]]. [[I|Yo]] [[have been studying|he estado estudiando]] [[since January|desde enero]]. [[Next month|El próximo mes]] [[I|yo]] [[am retaking|estoy repitiendo]] [[the exam|el examen]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Daniel|Daniel]]', '[[David|David]]', '[[Derek|Derek]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I am David|soy David]]".' },
  { question: '[[When|Cuándo]] [[was the stadium built|fue construido el estadio]]?', options: ['[[Two years ago|Hace dos años]]', '[[Last year|El año pasado]]', '[[Next year|El año que viene]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[The new stadium was built last year|el nuevo estadio fue construido el año pasado]]".' },
  { question: '[[What|Qué]] [[did the teacher tell David|le dijo la profesora a David]]?', options: ['[[To stop studying|Dejar de estudiar]]', '[[To practice more|Practicar más]]', '[[To give up|Rendirse]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[my teacher told me that I should practice more|mi profesora me dijo que debería practicar más]]".' },
  { question: '[[What|Qué]] [[would have happened|habría pasado]] [[if David had listened|si David hubiera escuchado]]?', options: ['[[Nothing|Nada]]', '[[He would have passed the exam|Habría aprobado el examen]]', '[[He would have failed|Habría suspendido]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[I would have passed the exam|habría aprobado el examen]]".' },
  { question: '[[What|Qué]] [[conditional|condicional]] [[does David use|usa David]] [[for the advice|para el consejo]] [[about practicing|sobre practicar]]?', options: ['[[Zero|Cero]]', '[[First|Primero]]', '[[Third|Tercero]]'], correctAnswer: 1, explanation: '[[First conditional|Primer condicional]]: "[[If you practice|si practicas]]... [[you will improve|mejorarás]]".' },
  { question: '[[The stadium|El estadio]] [[is used|es usado]] [[for many events|para muchos eventos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[it is used for many events|es usado para muchos eventos]]".' },
  { question: '[[David|David]] [[has been studying|ha estado estudiando]] [[since January|desde enero]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He says|Dice]] "[[I have been studying since January|he estado estudiando desde enero]]".' },
  { question: '[[When|Cuándo]] [[is David retaking|está repitiendo David]] [[the exam|el examen]]?', options: ['[[This month|Este mes]]', '[[Next month|El próximo mes]]', '[[Last month|El mes pasado]]'], correctAnswer: 1, explanation: '[[He says|Dice]] "[[Next month I am retaking the exam|el próximo mes estoy repitiendo el examen]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Sport|Deporte]]', '[[Learning from mistakes and exam preparation|Aprender de errores y preparación del examen]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[talks about|habla sobre]] [[learning and exam|aprender y examen]].' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for|para]] [[the stadium|el estadio]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was built|fue construido]]", "[[is used|es usado]]".' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the teacher\'s advice|el consejo de la profesora]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[my teacher told me that I should practice|mi profesora me dijo que debería practicar]]".' },
  { question: '[[Third conditional|Tercer condicional]] [[expresses|expresa]] [[David\'s regret|el arrepentimiento de David]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[If I had listened|si hubiera escuchado]]... [[I would have passed|habría aprobado]]".' },
  { question: '[[David|David]] [[passed|aprobó]] [[the exam|el examen]] [[the first time|la primera vez]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[He is retaking it|Lo está repitiendo]].' },
  { question: '[[Present continuous|Presente continuo]] [[is used|se usa]] [[for|para]] [[future exam|examen futuro]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[I am retaking the exam|estoy repitiendo el examen]]".' },
  { question: '[[The listening|La escucha]] [[mentions|menciona]] [[conditionals|condicionales]], [[passive|pasiva]] [[and|y]] [[reported speech|estilo indirecto]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All are present|Todos están presentes]].' },
];

export const UNIT_55_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u55-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Review 51–54',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
