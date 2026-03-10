/**
 * Unidad 57 B1 — Lección 4: Comprensión auditiva (Clothes & colours)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Emma|Emma]] [[and|y]] [[I|yo]] [[work|trabajo]] [[in a clothes shop|en una tienda de ropa]]. [[The new collection|La nueva colección]] [[was designed|fue diseñada]] [[by a local designer|por un diseñador local]]. [[I|Yo]] [[would rather wear|preferiría llevar]] [[comfortable clothes|ropa cómoda]] [[than|que]] [[fashionable ones|ropa de moda]]. [[Pale colours|Los colores pálidos]] [[look good|se ven bien]] [[on me|en mí]] [[but|pero]] [[bright red|rojo brillante]] [[doesn\'t suit me|no me favorece]]. [[My mum|Mi madre]] [[told me|me dijo]] [[that|que]] [[I should|debería]] [[match my shoes|hacer juego mis zapatos]] [[with my bag|con mi bolso]]. [[Cotton|El algodón]] [[is made from|está hecho de]] [[a natural plant|una planta natural]]. [[Next week|La próxima semana]] [[we|nosotros]] [[are having|estamos teniendo]] [[a sale|unas rebajas]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Cuál]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Eva|Eva]]', '[[Emma|Emma]]', '[[Ella|Ella]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I am Emma|soy Emma]]".' },
  { question: '[[Where|Dónde]] [[does Emma work|trabaja Emma]]?', options: ['[[In a restaurant|En un restaurante]]', '[[In a clothes shop|En una tienda de ropa]]', '[[In a hospital|En un hospital]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I work in a clothes shop|trabajo en una tienda de ropa]]".' },
  { question: '[[Who|Quién]] [[designed the new collection|diseñó la nueva colección]]?', options: ['[[A famous designer|Un diseñador famoso]]', '[[A local designer|Un diseñador local]]', '[[Emma|Emma]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[was designed by a local designer|fue diseñada por un diseñador local]]".' },
  { question: '[[What|Qué]] [[does Emma prefer|prefiere Emma]]?', options: ['[[Fashionable clothes|Ropa de moda]]', '[[Comfortable clothes|Ropa cómoda]]', '[[Expensive clothes|Ropa cara]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I would rather wear comfortable clothes|preferiría llevar ropa cómoda]]".' },
  { question: '[[What|Qué]] [[colours look good|colores se ven bien]] [[on Emma|en Emma]]?', options: ['[[Bright red|Rojo brillante]]', '[[Pale colours|Colores pálidos]]', '[[Dark colours|Colores oscuros]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Pale colours look good on me|los colores pálidos se ven bien en mí]]".' },
  { question: '[[Bright red|Rojo brillante]] [[suits Emma|favorece a Emma]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[She says|Dice]] "[[bright red doesn\'t suit me|rojo brillante no me favorece]]".' },
  { question: '[[Emma\'s mum|La madre de Emma]] [[told her|le dijo]] [[to match shoes with bag|hacer juego zapatos con bolso]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[my mum told me that I should match my shoes with my bag|mi madre me dijo que debería hacer juego mis zapatos con mi bolso]]".' },
  { question: '[[Cotton|El algodón]] [[is made from|está hecho de]] [[a natural plant|una planta natural]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[Cotton is made from a natural plant|el algodón está hecho de una planta natural]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Food|Comida]]', '[[Clothes and fashion|Ropa y moda]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[talks about|habla sobre]] [[clothes and fashion|ropa y moda]].' },
  { question: '[[When|Cuándo]] [[are they having|están teniendo]] [[a sale|unas rebajas]]?', options: ['[[This week|Esta semana]]', '[[Next week|La próxima semana]]', '[[Last week|La semana pasada]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[Next week we are having a sale|la próxima semana estamos teniendo unas rebajas]]".' },
  { question: '[[Passive voice|Voz pasiva]] [[is used|se usa]] [[for|para]] [[the collection|la colección]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[was designed|fue diseñada]]".' },
  { question: '[[Would rather|Preferiría]] [[expresses|expresa]] [[preference|preferencia]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Emma prefers comfortable over fashionable|Emma prefiere cómodo sobre moda]].' },
  { question: '[[Reported speech|Estilo indirecto]] [[is used|se usa]] [[for|para]] [[the mum\'s advice|el consejo de la madre]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. "[[My mum told me that I should|mi madre me dijo que debería]]".' },
  { question: '[[Emma|Emma]] [[likes|le gusta]] [[bright red|rojo brillante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[It doesn\'t suit her|No le favorece]].' },
  { question: '[[The listening|La escucha]] [[mentions|menciona]] [[pale colours|colores pálidos]], [[cotton|algodón]] [[and|y]] [[a sale|unas rebajas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[All are mentioned|Todos están mencionados]].' },
];

export const UNIT_57_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u57-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Clothes & Colours',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
