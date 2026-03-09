/**
 * Unidad 39 — Lección 3: Comprensión lectora (Zero Conditional)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Science|La ciencia]] [[teaches|enseña]] [[us|nos]] [[many|muchas]] [[general truths|verdades generales]]. [[If|Si]] [[you|tú]] [[heat|calientas]] [[water|agua]] [[to|a]] [[100|100]] [[degrees|grados]], [[it|ella]] [[boils|hierve]]. [[If|Si]] [[you|tú]] [[freeze|congelas]] [[water|agua]], [[it|ella]] [[turns|se convierte]] [[into|en]] [[ice|hielo]]. [[If|Si]] [[it|ello]] [[rains|llueve]], [[the|el]] [[ground|suelo]] [[gets|se pone]] [[wet|mojado]]. [[These|Estas]] [[are|son]] [[facts|hechos]] [[that|que]] [[are|son]] [[always|siempre]] [[true|verdaderos]]. [[In|En]] [[nature|la naturaleza]], [[if|si]] [[plants|las plantas]] [[don't|no]] [[get|reciben]] [[water|agua]], [[they|ellas]] [[die|mueren]]. [[If|Si]] [[you|tú]] [[exercise|haces ejercicio]] [[regularly|regularmente]], [[you|tú]] [[stay|te mantienes]] [[healthy|sano]]. [[We|Nosotros]] [[use|usamos]] [[the|el]] [[Zero Conditional|condicional cero]] [[to|para]] [[talk|hablar]] [[about|sobre]] [[these|estas]] [[general truths|verdades generales]] [[and|y]] [[scientific facts|hechos científicos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[What|Qué]] [[happens|pasa]] [[when|cuando]] [[you|tú]] [[heat|calientas]] [[water|agua]] [[to|a]] [[100|100]] [[degrees|grados]]?', options: ['[[It freezes|Se congela]]', '[[It boils|Hierve]]', '[[It melts|Se derrite]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you heat water to 100 degrees, it boils|Si calientas agua a 100 grados, hierve]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[when|cuando]] [[you|tú]] [[freeze|congelas]] [[water|agua]]?', options: ['[[It boils|Hierve]]', '[[It turns into ice|Se convierte en hielo]]', '[[It disappears|Desaparece]]', '[[It gets hot|Se calienta]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you freeze water, it turns into ice|Si congelas agua, se convierte en hielo]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[when|cuando]] [[it|ello]] [[rains|llueve]]?', options: ['[[The ground gets dry|El suelo se seca]]', '[[The ground gets wet|El suelo se moja]]', '[[Nothing|Nada]]', '[[The sun shines|El sol brilla]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If it rains, the ground gets wet|Si llueve, el suelo se moja]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[to|a]] [[plants|las plantas]] [[if|si]] [[they|ellas]] [[don\'t|no]] [[get|reciben]] [[water|agua]]?', options: ['[[They grow|Crecen]]', '[[They die|Mueren]]', '[[They bloom|Florecen]]', '[[They turn green|Se ponen verdes]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If plants don\'t get water, they die|Si las plantas no reciben agua, mueren]]".' },
  { question: '[[What|Qué]] [[happens|pasa]] [[if|si]] [[you|tú]] [[exercise|haces ejercicio]] [[regularly|regularmente]]?', options: ['[[You get sick|Te pones enfermo]]', '[[You stay healthy|Te mantienes sano]]', '[[You feel tired|Te sientes cansado]]', '[[Nothing|Nada]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you exercise regularly, you stay healthy|Si haces ejercicio regularmente, te mantienes sano]]".' },
  { question: '[[The|El]] [[Zero Conditional|condicional cero]] [[is used for|se usa para]] [[general truths|verdades generales]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[We use the Zero Conditional to talk about general truths|Usamos el condicional cero para hablar de verdades generales]]".' },
  { question: '[[These|Estas]] [[facts|hechos]] [[are|son]] [[sometimes|a veces]] [[true|verdaderos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The|El]] [[text|texto]] [[says|dice]] "[[facts that are always true|hechos que son siempre verdaderos]]".' },
  { question: '[[The|El]] [[text|texto]] [[is about|trata sobre]] [[past events|eventos pasados]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'False', explanation: '[[False|Falso]]. [[The|El]] [[text|texto]] [[is about|trata sobre]] [[general truths|verdades generales]] [[and|y]] [[scientific facts|hechos científicos]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Past|Pasado]] [[tense|tiempo]]', '[[Zero Conditional|Condicional cero]] [[for|para]] [[general truths|verdades generales]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is about|trata sobre]] [[Zero Conditional|condicional cero]] [[and|y]] [[general truths|verdades generales]].' },
  { question: '[[How many|Cuántos]] [[examples|ejemplos]] [[of|de]] [[Zero Conditional|condicional cero]] [[does|menciona]] [[the|el]] [[text|texto]] [[give|]]?', options: ['[[one|uno]]', '[[two|dos]]', '[[three|tres]]', '[[five|cinco]]'], correctAnswer: 3, explanation: '[[Five|Cinco]]: [[heat water|calentar agua]], [[freeze water|congelar agua]], [[rain|llover]], [[plants|plantas]], [[exercise|ejercicio]].' },
  { question: '[[Who|Quién]] [[teaches|enseña]] [[us|nos]] [[these|estas]] [[truths|verdades]]?', options: ['[[History|La historia]]', '[[Science|La ciencia]]', '[[Art|El arte]]', '[[Music|La música]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Science teaches us many general truths|La ciencia nos enseña muchas verdades generales]]".' },
  { question: '[[The|El]] [[Zero Conditional|condicional cero]] [[uses|usa]] [[present simple|presente simple]] [[in both|en ambas]] [[clauses|oraciones]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Zero Conditional|Condicional cero]]: [[If|Si]] + [[present simple|presente simple]], [[present simple|presente simple]].' },
  { question: '[[What|Qué]] [[temperature|temperatura]] [[does|hace]] [[water|agua]] [[boil|hervir]] [[at|a]]?', options: ['[[0|0]] [[degrees|grados]]', '[[50|50]] [[degrees|grados]]', '[[100|100]] [[degrees|grados]]', '[[200|200]] [[degrees|grados]]'], correctAnswer: 2, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[If you heat water to 100 degrees, it boils|Si calientas agua a 100 grados, hierve]]".' },
  { question: '[[Where|Dónde]] [[do|hacen]] [[plants|las plantas]] [[need|necesitan]] [[water|agua]]?', options: ['[[Only|Solo]] [[indoors|en interiores]]', '[[In|En]] [[nature|la naturaleza]]', '[[Nowhere|En ningún sitio]]', '[[In|En]] [[cities|ciudades]] [[only|solo]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[In nature, if plants don\'t get water, they die|En la naturaleza, si las plantas no reciben agua, mueren]]".' },
  { question: '[[We|Nosotros]] [[use|usamos]] [[Zero Conditional|condicional cero]] [[for|para]] [[scientific facts|hechos científicos]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[The|El]] [[text|texto]] [[says|dice]] "[[general truths and scientific facts|verdades generales y hechos científicos]]".' },
];

export const UNIT_39_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u39-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Zero Conditional',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
