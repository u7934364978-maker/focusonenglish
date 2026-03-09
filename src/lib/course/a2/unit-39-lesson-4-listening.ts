/**
 * Unidad 39 — Lección 4: Comprensión auditiva (Zero Conditional)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[My|Mi]] [[teacher|profesor]] [[explained|explicó]] [[the|el]] [[Zero Conditional|condicional cero]] [[today|hoy]]. [[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]], [[it|ella]] [[boils|hierve]]. [[If|Si]] [[it|ello]] [[rains|llueve]], [[the|el]] [[ground|suelo]] [[gets|se pone]] [[wet|mojado]]. [[If|Si]] [[you|tú]] [[freeze|congelas]] [[water|agua]], [[it|ella]] [[turns|se convierte]] [[into|en]] [[ice|hielo]]. [[These|Estas]] [[are|son]] [[general truths|verdades generales]] [[that|que]] [[are|son]] [[always|siempre]] [[true|verdaderas]]. [[I|Yo]] [[like|me gusta]] [[this|este]] [[grammar|gramática]] [[because|porque]] [[it|ella]] [[is|es]] [[easy|fácil]] [[to|de]] [[remember|recordar]]. [[If|Si]] [[you|tú]] [[practice|practicas]] [[every day|cada día]], [[you|tú]] [[learn|aprendes]] [[quickly|rápido]]. [[That|Eso]] [[is|es]] [[another|otra]] [[general truth|verdad general]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[explained|explicó]] [[the|el]] [[Zero Conditional|condicional cero]]?', options: ['[[A|Un]] [[friend|amigo]]', '[[The|El]] [[teacher|profesor]]', '[[A|Un]] [[parent|padre]]', '[[A|Un]] [[student|estudiante]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[My teacher explained the Zero Conditional today|Mi profesor explicó el condicional cero hoy]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[when|cuando]] [[you|tú]] [[heat|calientas]] [[water|agua]]?', options: ['[[It freezes|Se congela]]', '[[It boils|Hierve]]', '[[It melts|Se derrite]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you heat water, it boils|Si calientas agua, hierve]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[when|cuando]] [[it|ello]] [[rains|llueve]]?', options: ['[[The ground gets dry|El suelo se seca]]', '[[The ground gets wet|El suelo se moja]]', '[[The sun shines|El sol brilla]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If it rains, the ground gets wet|Si llueve, el suelo se moja]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[when|cuando]] [[you|tú]] [[freeze|congelas]] [[water|agua]]?', options: ['[[It boils|Hierve]]', '[[It turns into ice|Se convierte en hielo]]', '[[It disappears|Desaparece]]', '[[It gets hot|Se calienta]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you freeze water, it turns into ice|Si congelas agua, se convierte en hielo]]".' },
  { question: '[[Why|Por qué]] [[does|le]] [[the|al]] [[speaker|hablante]] [[like|gusta]] [[this|esta]] [[grammar|gramática]]?', options: ['[[It is difficult|Es difícil]]', '[[It is easy to remember|Es fácil de recordar]]', '[[It is boring|Es aburrida]]', '[[It is long|Es larga]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[I like this grammar because it is easy to remember|Me gusta esta gramática porque es fácil de recordar]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[practice|practicas]] [[every day|cada día]]?', options: ['[[You forget|Olvidas]]', '[[You learn quickly|Aprendes rápido]]', '[[You get tired|Te cansas]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you practice every day, you learn quickly|Si practicas cada día, aprendes rápido]]".' },
  { question: '[[The|El]] [[Zero Conditional|condicional cero]] [[is for|es para]] [[general truths|verdades generales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The|El]] [[speaker|hablante]] [[says|dice]] "[[These are general truths that are always true|Estas son verdades generales que son siempre verdaderas]]".' },
  { question: '[[The|El]] [[explanation|explicación]] [[was|fue]] [[yesterday|ayer]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The|El]] [[speaker|hablante]] [[says|dice]] "[[My teacher explained the Zero Conditional today|Mi profesor explicó el condicional cero hoy]]".' },
  { question: '[[The|El]] [[speaker|hablante]] [[thinks|cree]] [[practice|practicar]] [[helps|ayuda]] [[to learn|a aprender]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you practice every day, you learn quickly|Si practicas cada día, aprendes rápido]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Weather|Tiempo]]', '[[Zero Conditional|Condicional cero]] [[and|y]] [[general truths|verdades generales]]', '[[Food|Comida]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is about|trata sobre]] [[Zero Conditional|condicional cero]] [[and|y]] [[general truths|verdades generales]].' },
  { question: '[[When|Cuándo]] [[did|explicó]] [[the|el]] [[teacher|profesor]] [[explain|explicar]] [[the|el]] [[grammar|gramática]]?', options: ['[[Yesterday|Ayer]]', '[[Today|Hoy]]', '[[Last week|La semana pasada]]', '[[Tomorrow|Mañana]]'], correctAnswer: 1, explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[My teacher explained the Zero Conditional today|Mi profesor explicó el condicional cero hoy]]".' },
  { question: '[[How many|Cuántos]] [[examples|ejemplos]] [[of|de]] [[Zero Conditional|condicional cero]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[give|]]?', options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 3, explanation: '[[Four|Cuatro]]: [[heat water|calentar agua]], [[rain|llover]], [[freeze water|congelar agua]], [[practice|practicar]].' },
  { question: '[[General truths|Las verdades generales]] [[are|son]] [[always|siempre]] [[true|verdaderas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The|El]] [[speaker|hablante]] [[says|dice]] "[[general truths that are always true|verdades generales que son siempre verdaderas]]".' },
  { question: '[[What|Qué]] [[grammar|gramática]] [[structure|estructura]] [[uses|usa]] [[present simple|presente simple]] [[in both|en ambas]] [[clauses|oraciones]]?', options: ['[[Past|Pasado]] [[tense|tiempo]]', '[[Zero Conditional|Condicional cero]]', '[[Future|Futuro]]', '[[Imperative|Imperativo]]'], correctAnswer: 1, explanation: '[[Zero Conditional|Condicional cero]]: [[If|Si]] + [[present simple|presente simple]], [[present simple|presente simple]].' },
  { question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[a|un]] [[teacher|profesor]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The|El]] [[speaker|hablante]] [[is|es]] [[a|un]] [[student|estudiante]] — [[his|su]] [[teacher|profesor]] [[explained|explicó]] [[the|el]] [[grammar|gramática]].' },
];

export const UNIT_39_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u39-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Zero Conditional',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
