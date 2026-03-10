/**
 * Unidad 8 B1 — Lección 4: Comprensión auditiva (Modal deduction, Personal feelings)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Lisa|Lisa]]. [[I|Yo]] [[just|acabo de]] [[saw|vi]] [[my|a mi]] [[friend|amiga]] [[Sarah|Sarah]] [[at|en]] [[the supermarket|el supermercado]]. [[She|Ella]] [[must|debe]] [[be|estar]] [[excited|emocionada]] — [[she|ella]] [[was|estaba]] [[holding|sosteniendo]] [[a wedding|una boda]] [[magazine|revista]] [[and|y]] [[smiling|sonriendo]] [[a lot|mucho]]. [[She|Ella]] [[might|podría]] [[be|estar]] [[getting married|casándose]] [[soon|pronto]]! [[Her boyfriend|Su novio]] [[can\'t|no puede]] [[be|ser]] [[far|lejos]] — [[I|yo]] [[saw|vi]] [[a ring|un anillo]] [[on|en]] [[her finger|su dedo]]. [[They|Ellos]] [[must|deben]] [[have|haber]] [[got engaged|comprometido]] [[recently|recientemente]]. [[I|Yo]] [[feel|me siento]] [[so|tan]] [[happy|feliz]] [[for|por]] [[her|ella]]!`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Where|Dónde]] [[did Lisa see Sarah|vio Lisa a Sarah]]?', options: ['[[at the cinema|en el cine]]', '[[at the supermarket|en el supermercado]]', '[[at a wedding|en una boda]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I just saw my friend Sarah at the supermarket|acabo de ver a mi amiga Sarah en el supermercado]]".' },
  { question: '[[Why|Por qué]] [[must Sarah be excited|Sarah debe estar emocionada]]?', options: ['[[She got a new job|Consiguió un trabajo nuevo]]', '[[She was holding a wedding magazine|Estaba sosteniendo una revista de bodas]]', '[[She won a prize|Ganó un premio]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[she was holding a wedding magazine and smiling a lot|estaba sosteniendo una revista de bodas y sonriendo mucho]]".' },
  { question: '[[What|Qué]] [[might Sarah be doing soon|Sarah podría estar haciendo pronto]]?', options: ['[[travelling|viajando]]', '[[getting married|casándose]]', '[[moving house|mudándose]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[She might be getting married soon|podría estar casándose pronto]]".' },
  { question: '[[What|Qué]] [[did Lisa see|vio Lisa]] [[on Sarah\'s finger|en el dedo de Sarah]]?', options: ['[[a bracelet|una pulsera]]', '[[a ring|un anillo]]', '[[a watch|un reloj]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I saw a ring on her finger|vi un anillo en su dedo]]".' },
  { question: '[[Why|Por qué]] [[can\'t the boyfriend be far|el novio no puede estar lejos]]?', options: ['[[He was with her|Estaba con ella]]', '[[Sarah had a ring|Sarah tenía un anillo]]', '[[Lisa saw him|Lisa lo vio]]'], correctAnswer: 1, explanation: '[[The ring|El anillo]] [[suggests|sugiere]] [[engagement|compromiso]].' },
  { question: '[[What|Qué]] [[must they have done|deben haber hecho ellos]]?', options: ['[[got engaged|comprometido]]', '[[got married|casado]]', '[[had a baby|tenido un bebé]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[They must have got engaged recently|deben haberse comprometido recientemente]]".' },
  { question: '[[How|Cómo]] [[does Lisa feel|se siente Lisa]]?', options: ['[[jealous|celosa]]', '[[happy for Sarah|feliz por Sarah]]', '[[surprised|sorprendida]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I feel so happy for her|me siento tan feliz por ella]]".' },
  { question: '[[Lisa|Lisa]] [[is certain|está segura]] [[Sarah is getting married|Sarah se está casando]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She uses might|Usa might]] [[for possibility|para posibilidad]].' },
  { question: '[[Sarah|Sarah]] [[had|tenía]] [[a ring|un anillo]] [[on her finger|en su dedo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text says|El texto dice]] "[[I saw a ring on her finger|vi un anillo en su dedo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Shopping|Compras]]', '[[Deductions about a friend\'s engagement|Deducciones sobre el compromiso de una amiga]]', '[[Weddings|Bodas]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[describes|describe]] [[deductions|deducciones]] [[about Sarah|sobre Sarah]].' },
  { question: '[[Which modal|Qué modal]] [[does Lisa use|usa Lisa]] [[for strong deduction|para deducción fuerte]]?', options: ['[[might|might]]', '[[must|must]]', "[[can't|can't]]"], correctAnswer: 1, explanation: '[[Must|Must]] [[for almost certain|para casi seguro]].' },
  { question: '[[Lisa|Lisa]] [[asked|preguntó]] [[Sarah|a Sarah]] [[about the wedding|sobre la boda]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[Lisa|Lisa]] [[makes deductions|hace deducciones]] [[from observation|desde la observación]].' },
  { question: '[[Sarah|Sarah]] [[was|estaba]] [[alone|sola]] [[at the supermarket|en el supermercado]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The text|El texto]] [[doesn\'t mention|no menciona]] [[the boyfriend with her|al novio con ella]].' },
  { question: '[[Lisa|Lisa]] [[uses|usa]] [[can\'t|can\'t]] [[for|para]] [[impossibility|imposibilidad]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[Her boyfriend can\'t be far|su novio no puede estar lejos]]" [[deduces|deduce]] [[he is nearby|cerca]].' },
  { question: '[[Which feeling|Qué sentimiento]] [[does Lisa express|expresa Lisa]]?', options: ['[[envy|envidia]]', '[[happiness for her friend|felicidad por su amiga]]', '[[curiosity|curiosidad]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I feel so happy for her|me siento tan feliz por ella]]".' },
];

export const UNIT_8_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u8-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Personal Feelings',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
