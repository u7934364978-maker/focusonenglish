/**
 * Unidad 17 — Lección 4: Comprensión auditiva (Past Simple + Past Continuous, when/while, story connectors)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[At first|Al principio]] [[yesterday|ayer]] [[evening|tarde]] [[I|yo]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]] [[when|cuando]] [[the|el]] [[doorbell|timbre]] [[rang|sonó]]. [[It|Era]] [[was|era]] [[my|mi]] [[neighbour|vecino]] [[Mr|Sr]] [[Jones|Jones]]. [[He|Él]] [[was|estaba]] [[walking|caminando]] [[his|su]] [[dog|perro]] [[when|cuando]] [[he|él]] [[saw|vió]] [[smoke|humo]] [[coming|saliendo]] [[from|de]] [[my|mi]] [[kitchen|cocina]]. [[I|Yo]] [[was|estaba]] [[cooking|cocinando]] [[dinner|cena]] [[while|mientras]] [[I|yo]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]]. [[Suddenly|De repente]] [[something|algo]] [[burned|quemó]] [[in|en]] [[the|la]] [[oven|horno]]. [[Mr|Sr]] [[Jones|Jones]] [[helped|ayudó]] [[me|a mí]] [[open|abrir]] [[the|las]] [[windows|ventanas]]. [[Then|Entonces]] [[we|nosotros]] [[checked|comprobamos]] [[the|el]] [[kitchen|cocina]] [[together|juntos]]. [[Finally|Finalmente]] [[everything|todo]] [[was|estaba]] [[okay|bien]] [[and|y]] [[I|yo]] [[thanked|agradecí]] [[him|a él]] [[for|por]] [[his|su]] [[help|ayuda]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[When|Cuándo]] [[did|ocurrió]] [[this|esto]] [[happen|ocurrir]]?',
    options: ['[[yesterday|ayer]] [[morning|mañana]]', '[[yesterday|ayer]] [[evening|tarde]]', '[[today|hoy]] [[afternoon|tarde]]', '[[last week|la semana pasada]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[Yesterday evening|Ayer por la tarde]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[the|el]] [[speaker|hablante]] [[doing|haciendo]] [[when|cuando]] [[the|el]] [[doorbell|timbre]] [[rang|sonó]]?',
    options: ['[[cooking|cocinando]]', '[[watching|viendo]] [[TV|televisión]]', '[[sleeping|durmiendo]]', '[[walking|caminando]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I was watching TV when the doorbell rang|Estaba viendo la televisión cuando sonó el timbre]]".',
  },
  {
    question: '[[Who|Quién]] [[rang|sonó]] [[the|el]] [[doorbell|timbre]]?',
    options: ['[[a|un]] [[friend|amigo]]', '[[Mr|Sr]] [[Jones|Jones]] [[the|el]] [[neighbour|vecino]]', '[[the|el]] [[postman|cartero]]', '[[a|un]] [[family|familia]] [[member|miembro]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[It was my neighbour Mr Jones|Era mi vecino Sr Jones]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[Mr|Sr]] [[Jones|Jones]] [[doing|haciendo]] [[when|cuando]] [[he|él]] [[saw|vió]] [[the|el]] [[smoke|humo]]?',
    options: ['[[cooking|cocinando]]', '[[walking|caminando]] [[his|su]] [[dog|perro]]', '[[watching|viendo]] [[TV|televisión]]', '[[sleeping|durmiendo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[He was walking his dog when he saw smoke|Estaba paseando a su perro cuando vio humo]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[the|el]] [[speaker|hablante]] [[doing|haciendo]] [[while|mientras]] [[watching|viendo]] [[TV|televisión]]?',
    options: ['[[sleeping|durmiendo]]', '[[cooking|cocinando]] [[dinner|cena]]', '[[reading|leyendo]]', '[[cleaning|limpiando]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I was cooking dinner while I was watching TV|Estaba cocinando la cena mientras veía la televisión]]".',
  },
  {
    question: '[[What|Qué]] [[happened|pasó]] [[suddenly|de repente]]?',
    options: ['[[the|el]] [[doorbell|timbre]] [[rang|sonó]]', '[[something|algo]] [[burned|quemó]] [[in|en]] [[the|la]] [[oven|horno]]', '[[Mr|Sr]] [[Jones|Jones]] [[arrived|llegó]]', '[[the|el]] [[dog|perro]] [[barked|ladró]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Suddenly something burned in the oven|De repente algo se quemó en el horno]]".',
  },
  {
    question: '[[What|Qué]] [[did|hizo]] [[Mr|Sr]] [[Jones|Jones]] [[do|hacer]] [[to|para]] [[help|ayudar]]?',
    options: ['[[cook|cocinar]] [[dinner|cena]]', '[[help|ayudar]] [[open|abrir]] [[the|las]] [[windows|ventanas]]', '[[call|llamar]] [[the|los]] [[fire|bomberos]] [[brigade|bomberos]]', '[[walk|caminar]] [[the|el]] [[dog|perro]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Mr Jones helped me open the windows|Sr Jones me ayudó a abrir las ventanas]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[was|estaba]] [[sleeping|durmiendo]] [[when|cuando]] [[the|el]] [[doorbell|timbre]] [[rang|sonó]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[was|estaba]] [[watching|viendo]] [[TV|televisión]], [[not|no]] [[sleeping|durmiendo]].',
  },
  {
    question: '[[Mr|Sr]] [[Jones|Jones]] [[saw|vió]] [[smoke|humo]] [[coming|saliendo]] [[from|de]] [[the|la]] [[kitchen|cocina]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[He saw smoke coming from my kitchen|Vio humo saliendo de mi cocina]]".',
  },
  {
    question: '[[They|Ellos]] [[checked|comprobaron]] [[the|la]] [[kitchen|cocina]] [[together|juntos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[Then we checked the kitchen together|Entonces comprobamos la cocina juntos]]".',
  },
  {
    question: '[[Everything|Todo]] [[was|estaba]] [[okay|bien]] [[in|en]] [[the|el]] [[end|final]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[Finally everything was okay|Finalmente todo estaba bien]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[An|Un]] [[incident|incidente]] [[in|en]] [[the|la]] [[kitchen|cocina]] [[with|con]] [[when|cuando]]/[[while|mientras]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[the|la]] [[beach|playa]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[an|un]] [[incident|incidente]] [[with|con]] Past Simple [[and|y]] Past Continuous.',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[Mr|Sr]] [[Jones|Jones]]', '[[A|Una]] [[person|persona]] [[who|que]] [[had|tuvo]] [[an|un]] [[incident|incidente]] [[in|en]] [[the|la]] [[kitchen|cocina]]', '[[A|Un]] [[firefighter|bombero]]', '[[The|El]] [[neighbour|vecino]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[describes|describe]] [[his|su]] [[experience|experiencia]] ("[[I was watching|Estaba viendo]]", "[[I was cooking|Estaba cocinando]]").',
  },
  {
    question: '[[What|Qué]] [[story|historia]] [[connector|conector]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[the|el]] [[burning|quemado]] [[event|evento]]?',
    options: ['[[At first|Al principio]]', '[[Suddenly|De repente]]', '[[Finally|Finalmente]]', '[[Then|Entonces]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Suddenly something burned|De repente algo se quemó]]".',
  },
  {
    question: '[[Did|Hizo]] [[the|el]] [[speaker|hablante]] [[thank|agradecer]] [[Mr|Sr]] [[Jones|Jones]]?',
    options: ['[[no|no]]', '[[yes|sí]]', '[[maybe|quizás]]', '[[not mentioned|no mencionado]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I thanked him for his help|Le agradecí por su ayuda]]".',
  },
];

export const UNIT_17_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u17-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Past Simple Past Continuous',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
