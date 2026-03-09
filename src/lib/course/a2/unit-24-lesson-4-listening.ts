/**
 * Unidad 24 — Lección 4: Comprensión auditiva (Present Continuous for Future)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Lisa|Lisa]]! [[I|Yo]] [[am calling|llamo]] [[to|para]] [[confirm|confirmar]] [[our|nuestra]] [[plans|planes]] [[for|para]] [[next week|la próxima semana]]. [[On|El]] [[Monday|lunes]] [[I|yo]] [[am meeting|quedo]] [[my|mi]] [[boss|jefe]] [[at|a]] [[9|nueve]] [[o'clock|en punto]]. [[On|El]] [[Wednesday|miércoles]] [[I|yo]] [[am flying|vuelo]] [[to|a]] [[Barcelona|Barcelona]] [[for|para]] [[a|una]] [[conference|conferencia]]. [[On|El]] [[Friday|viernes]] [[I|yo]] [[am having|tengo]] [[lunch|almuerzo]] [[with|con]] [[my|mi]] [[sister|hermana]] [[at|a]] [[1|una]] [[pm|de la tarde]]. [[Are|¿Estás]] [[you|tú]] [[free|libre]] [[on|el]] [[Saturday|sábado]]? [[I|Yo]] [[am going|voy]] [[to|a]] [[the|la]] [[cinema|cine]] [[and|y]] [[I|yo]] [[would|me]] [[like|gustaría]] [[you|que]] [[to come|vinieras]] [[with|con]] [[me|mí]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Who|Quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[calling|llamando]]?',
    options: ['[[Maria|María]]', '[[Lisa|Lisa]]', '[[Anna|Ana]]', '[[Emma|Emma]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Hi Lisa|Hola Lisa]]".',
  },
  {
    question: '[[Why|Por qué]] [[is|está]] [[the|el]] [[speaker|hablante]] [[calling|llamando]]?',
    options: ['[[to|para]] [[cancel|cancelar]] [[plans|planes]]', '[[to|para]] [[confirm|confirmar]] [[plans|planes]]', '[[to|para]] [[invite|invitar]] [[to|a]] [[dinner|cena]]', '[[to|para]] [[ask|pedir]] [[for|por]] [[help|ayuda]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am calling to confirm our plans|Llamo para confirmar nuestros planes]]".',
  },
  {
    question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[meeting|quedando]] [[on|el]] [[Monday|lunes]]?',
    options: ['[[his|su]] [[sister|hermana]]', '[[his|su]] [[boss|jefe]]', '[[his|su]] [[friend|amigo]]', '[[Lisa|Lisa]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am meeting my boss at 9 o\'clock|Quedo con mi jefe a las 9]]".',
  },
  {
    question: '[[Where|Dónde]] [[is|está]] [[the|el]] [[speaker|hablante]] [[flying|volando]] [[on|el]] [[Wednesday|miércoles]]?',
    options: ['[[London|Londres]]', '[[Madrid|Madrid]]', '[[Barcelona|Barcelona]]', '[[Valencia|Valencia]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I am flying to Barcelona|Vuelo a Barcelona]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] [[doing|haciendo]] [[in|en]] [[Barcelona|Barcelona]]?',
    options: ['[[holiday|vacaciones]]', '[[a|una]] [[conference|conferencia]]', '[[a|una]] [[meeting|reunión]]', '[[shopping|compras]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am flying to Barcelona for a conference|Vuelo a Barcelona para una conferencia]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[the|el]] [[speaker|hablante]] [[having|teniendo]] [[on|el]] [[Friday|viernes]]?',
    options: ['[[dinner|cena]]', '[[lunch|almuerzo]] [[with|con]] [[his|su]] [[sister|hermana]]', '[[breakfast|desayuno]]', '[[coffee|café]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am having lunch with my sister|Almuerzo con mi hermana]]".',
  },
  {
    question: '[[Where|Dónde]] [[is|está]] [[the|el]] [[speaker|hablante]] [[going|yendo]] [[on|el]] [[Saturday|sábado]]?',
    options: ['[[to|a]] [[the|la]] [[beach|playa]]', '[[to|a]] [[the|la]] [[cinema|cine]]', '[[to|a]] [[the|el]] [[park|parque]]', '[[to|a]] [[the|el]] [[restaurant|restaurante]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am going to the cinema|Voy al cine]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[meeting|quedando]] [[his|su]] [[boss|jefe]] [[at|a]] [[10|diez]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|está]] [[meeting|quedando]] [[at|a]] [[9|nueve]] [[o\'clock|en punto]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[inviting|invitando]] [[Lisa|Lisa]] [[to|a]] [[the|la]] [[cinema|cine]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I would like you to come with me|Me gustaría que vinieras conmigo]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[flying|volando]] [[to|a]] [[Madrid|Madrid]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|está]] [[flying|volando]] [[to|a]] [[Barcelona|Barcelona]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[having|teniendo]] [[lunch|almuerzo]] [[at|a]] [[1|una]] [[pm|de la tarde]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I am having lunch at 1 pm|Almuerzo a la 1 de la tarde]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Future|Citas]] [[appointments|y planes]] [[futuros]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[confirming|confirmar]] [[future|futuros]] [[plans|planes]] [[and|y]] [[appointments|citas]].',
  },
  {
    question: '[[Which|Cuál]] [[day|día]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[not|no]] [[mention|mencionar]] [[appointments|citas]] [[for|para]]?',
    options: ['[[Tuesday|martes]]', '[[Thursday|jueves]]', '[[Saturday|sábado]]', '[[Sunday|domingo]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[mentions|menciona]] [[Monday|Lunes]], [[Wednesday|Miércoles]], [[Friday|Viernes]], [[Saturday|Sábado]]. [[Not|No]] [[Tuesday|Martes]].',
  },
  {
    question: '[[When|A qué hora]] [[is|está]] [[the|el]] [[speaker|hablante]] [[having|teniendo]] [[lunch|almuerzo]] [[on|el]] [[Friday|viernes]]?',
    options: ['[[at 12|a las 12]]', '[[at 1|a la 1]] [[pm|de la tarde]]', '[[at 2|a las 2]]', '[[at 3|a las 3]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I am having lunch at 1 pm|Almuerzo a la 1 de la tarde]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[ask|preguntar]] [[Lisa|Lisa]]?',
    options: ['[[if|si]] [[she|ella]] [[is|está]] [[free|libre]] [[on|el]] [[Saturday|sábado]]', '[[if|si]] [[she|ella]] [[can|puede]] [[help|ayudar]]', '[[if|si]] [[she|ella]] [[likes|le gusta]] [[Barcelona|Barcelona]]', '[[if|si]] [[she|ella]] [[has|tiene]] [[plans|planes]] [[for|para]] [[Monday|lunes]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[Are you free on Saturday?|¿Estás libre el sábado?]]" [[and|y]] [[invites|invita]] [[to|a]] [[the|la]] [[cinema|cine]].',
  },
];

export const UNIT_24_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u24-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Continuous for Future',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
