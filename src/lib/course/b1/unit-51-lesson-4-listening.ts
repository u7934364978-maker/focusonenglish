/**
 * Unidad 51 B1 — Lección 4: Comprensión auditiva (Conditionals review)
 * 15 actividades
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I|yo]] [[am|soy]] [[Maria|María]] [[and|y]] [[today|hoy]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|te]] [[about|sobre]] [[my|mi]] [[day|día]] [[using|usando]] [[conditionals|condicionales]]. [[If|Si]] [[I|yo]] [[wake up early|me levanto temprano]], [[I|yo]] [[always|siempre]] [[have|tengo]] [[time|tiempo]] [[for|para]] [[breakfast|desayuno]]. [[That|Eso]] [[is|es]] [[a zero conditional|un condicional cero]]. [[If|Si]] [[it|ello]] [[rains|llueve]] [[tomorrow|mañana]], [[I will stay|me quedaré]] [[at home|en casa]]. [[That|Eso]] [[is|es]] [[a first conditional|un primer condicional]]. [[If|Si]] [[I|yo]] [[were|fuera]] [[a millionaire|un millonario]], [[I would buy|compraría]] [[a castle|un castillo]]. [[That|Eso]] [[is|es]] [[a second conditional|un segundo condicional]]. [[If|Si]] [[I|yo]] [[had studied|hubiera estudiado]] [[harder|más duro]] [[at school|en la escuela]], [[I would have become|me habría convertido]] [[a doctor|médico]]. [[That|Eso]] [[is|es]] [[a third conditional|un tercer condicional]]. [[I|Yo]] [[hope|espero]] [[this|esto]] [[helps|ayuda]] [[you|te]] [[understand|entender]] [[conditionals|los condicionales]] [[better|mejor]].`;

const INSTRUCTIONS = 'Escucha el audio. Puedes leer la transcripción. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[is the speaker\'s name|es el nombre del hablante]]?', options: ['[[Maria|María]]', '[[Maria|María]]', '[[Mary|Mary]]'], correctAnswer: 0, explanation: '[[She says|Dice]] "[[I am Maria|soy María]]".' },
  { question: '[[What|Qué]] [[does the zero conditional example|el ejemplo del condicional cero]] [[describe|describe]]?', options: ['[[Staying at home|quedarse en casa]]', '[[Waking up early and having time for breakfast|levantarse temprano y tener tiempo para desayuno]]', '[[Buying a castle|comprar un castillo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[If I wake up early, I always have time for breakfast|si me levanto temprano, siempre tengo tiempo para desayuno]]".' },
  { question: '[[What|Qué]] [[will happen|ocurrirá]] [[if|si]] [[it rains tomorrow|llueve mañana]]?', options: ['[[She will go out|saldrá]]', '[[She will stay at home|se quedará en casa]]', '[[She will buy an umbrella|comprará un paraguas]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[If it rains tomorrow, I will stay at home|si llueve mañana, me quedaré en casa]]".' },
  { question: '[[What|Qué]] [[would she buy|compraría]] [[if|si]] [[she were a millionaire|fuera millonaria]]?', options: ['[[A car|un coche]]', '[[A castle|un castillo]]', '[[A house|una casa]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[If I were a millionaire, I would buy a castle|si fuera millonaria, compraría un castillo]]".' },
  { question: '[[What|Qué]] [[does the third conditional express|expresa el tercer condicional]]?', options: ['[[A future plan|un plan futuro]]', '[[A past regret about not studying harder|un lamento del pasado por no estudiar más duro]]', '[[A general truth|una verdad general]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[If I had studied harder at school, I would have become a doctor|si hubiera estudiado más duro en la escuela, me habría convertido en médico]]".' },
  { question: '[[The speaker|La hablante]] [[uses|usa]] [["were"|"were"]] [[not|no]] [["was"|"was"]] [[for|para]] [[the second conditional|el segundo condicional]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[If I were a millionaire|si fuera millonario]]".' },
  { question: '[[Who|A quién]] [[does the speaker hope|la hablante espera]] [[to help|ayudar]]?', options: ['[[Her students|sus estudiantes]]', '[[The listener|el oyente]]', '[[Her family|su familia]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I hope this helps you understand|espero que esto te ayude a entender]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the main topic|el tema principal]] [[of|del]] [[this listening|esta escucha]]?', options: ['[[Breakfast|Desayuno]]', '[[Conditionals in English|Los condicionales en inglés]]', '[[Castles|Castillos]]'], correctAnswer: 1, explanation: '[[The listening|La escucha]] [[explains|explica]] [[conditionals|los condicionales]] [[with examples|con ejemplos]].' },
  { question: '[[The speaker|La hablante]] [[gives|da]] [[examples|ejemplos]] [[of|de]] [[all four|los cuatro]] [[conditionals|condicionales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Zero, first, second and third|Cero, primero, segundo y tercer]] [[conditionals|condicionales]].' },
  { question: '[[What|Qué]] [[would she have become|se habría convertido]] [[if|si]] [[she had studied harder|hubiera estudiado más duro]]?', options: ['[[A teacher|profesora]]', '[[A doctor|médica]]', '[[A lawyer|abogada]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I would have become a doctor|me habría convertido en médico]]".' },
  { question: '[[The zero conditional|El condicional cero]] [[uses|usa]] [[present simple|presente simple]] [[in|en]] [[both|ambas]] [[clauses|oraciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Example|Ejemplo]]: if I wake up early, I have time.' },
  { question: '[[The first conditional|El primer condicional]] [[talks about|habla de]] [[real future|futuro real]] [[possibilities|posibilidades]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The rain example|El ejemplo de la lluvia]] [[is|es]] [[a real possibility|una posibilidad real]].' },
  { question: '[[The second conditional|El segundo condicional]] [[is|es]] [[hypothetical|hipotético]] [[because|porque]] [[she|ella]] [[is not|no es]] [[a millionaire|millonaria]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Second conditional|Segundo condicional]] [[describes|describe]] [[unreal situations|situaciones irreales]].' },
  { question: '[[The speaker|La hablante]] [[wants|quiere]] [[to|a]] [[tell|contar]] [[about|sobre]] [[her day|su día]] [[using|usando]] [[conditionals|condicionales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She says|Dice]] "[[I want to tell you about my day using conditionals|quiero contarte sobre mi día usando condicionales]]".' },
  { question: '[[What|Qué]] [[does the speaker hope|la hablante espera]]?', options: ['[[To become a doctor|convertirse en médico]]', '[[To help the listener understand conditionals better|ayudar al oyente a entender los condicionales mejor]]', '[[To buy a castle|comprar un castillo]]'], correctAnswer: 1, explanation: '[[She says|Dice]] "[[I hope this helps you understand conditionals better|espero que esto te ayude a entender los condicionales mejor]]".' },
];

export const UNIT_51_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b1-u51-l4-l${i + 1}`,
  type: 'listening',
  level: 'B1',
  topic: 'Conditionals',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
