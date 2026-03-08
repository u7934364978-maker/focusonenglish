/**
 * Unidad 6 — Lección 4: Comprensión auditiva (Superlativos)
 * 15 actividades: 1 transcripción + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[Today|Hoy]] [[I|yo]] [[want|quiero]] [[to|a]] [[tell|contar]] [[you|a ti]] [[about|sobre]] [[my|mi]] [[favourite|favorita]] [[place|lugar]] [[in|en]] [[the|el]] [[city|ciudad]]. [[It|Él]] [[is|es]] [[the biggest|el más grande]] [[park|parque]] [[in|en]] [[town|el pueblo]]. [[It|Él]] [[has|tiene]] [[the tallest|el más alto]] [[trees|árboles]] [[I|yo]] [[have ever|he jamás]] [[seen|visto]]. [[In|En]] [[the|el]] [[centre|centro]] [[there is|hay]] [[a|un]] [[lake|lago]] [[with|con]] [[the most beautiful|las más hermosas]] [[swans|cisnes]]. [[The|El]] [[best|mejor]] [[time|momento]] [[to|para]] [[visit|visitar]] [[is|es]] [[early|temprano]] [[in|por]] [[the|la]] [[morning|mañana]] [[when|cuando]] [[it|es]] [[is|está]] [[the quietest|el más tranquilo]]. [[My|Mi]] [[sister|hermana]] [[says|dice]] [[it|él]] [[is|es]] [[the most peaceful|el más tranquilo]] [[place|lugar]] [[in|en]] [[the|el]] [[world|mundo]]. [[I|Yo]] [[agree|estoy de acuerdo]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[does|quiere]] [[the|el]] [[speaker|hablante]] [[want|querer]] [[to|a]] [[tell|contar]]?',
    options: ['[[about|sobre]] [[his|su]] [[family|familia]]', '[[about|sobre]] [[his|su]] [[favourite|favorito]] [[place|lugar]] [[in|en]] [[the|el]] [[city|ciudad]]', '[[about|sobre]] [[his|su]] [[school|colegio]]', '[[about|sobre]] [[his|su]] [[job|trabajo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I want to tell you about my favourite place in the city|Quiero contarte sobre mi lugar favorito en la ciudad]]".',
  },
  {
    question: '[[What|Qué]] [[is|es]] [[the|el]] [[place|lugar]]?',
    options: ['[[the|el]] [[biggest|más grande]] [[park|parque]] [[in|en]] [[town|el pueblo]]', '[[the|el]] [[museum|museo]]', '[[the|la]] [[beach|playa]]', '[[the|el]] [[shopping centre|centro comercial]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[It is the biggest park in town|Es el parque más grande del pueblo]]".',
  },
  {
    question: '[[What|Qué]] [[does|tiene]] [[the|el]] [[park|parque]] [[have|tener]]?',
    options: ['[[the tallest|los más altos]] [[trees|árboles]] [[he|él]] [[has ever|ha jamás]] [[seen|visto]]', '[[the biggest|el más grande]] [[fountain|fuente]]', '[[the oldest|el más antiguo]] [[statue|estatua]]', '[[the most|los más]] [[flowers|flores]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[It has the tallest trees I have ever seen|Tiene los árboles más altos que he visto jamás]]".',
  },
  {
    question: '[[What|Qué]] [[is|hay]] [[in|en]] [[the|el]] [[centre|centro]] [[of|del]] [[the|el]] [[park|parque]]?',
    options: ['[[a|un]] [[fountain|fuente]]', '[[a|un]] [[lake|lago]] [[with|con]] [[the most beautiful|las más hermosas]] [[swans|cisnes]]', '[[a|un]] [[playground|parque infantil]]', '[[a|un]] [[cafe|café]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[In the centre there is a lake with the most beautiful swans|En el centro hay un lago con los cisnes más hermosos]]".',
  },
  {
    question: '[[When|Cuándo]] [[is|es]] [[the|el]] [[best|mejor]] [[time|momento]] [[to|para]] [[visit|visitar]]?',
    options: ['[[at|por]] [[night|noche]]', '[[early|temprano]] [[in|por]] [[the|la]] [[morning|mañana]] [[when|cuando]] [[it|es]] [[is|está]] [[the quietest|el más tranquilo]]', '[[in|por]] [[the|la]] [[afternoon|tarde]]', '[[at|a]] [[lunchtime|hora de comer]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[The best time to visit is early in the morning when it is the quietest|El mejor momento para visitar es temprano por la mañana cuando está más tranquilo]]".',
  },
  {
    question: '[[What|Qué]] [[does|dice]] [[his|su]] [[sister|hermana]] [[say|decir]]?',
    options: ['[[It|Es]] [[boring|aburrido]]', '[[It|Es]] [[the most peaceful|el más tranquilo]] [[place|lugar]] [[in|en]] [[the|el]] [[world|mundo]]', '[[It|Es]] [[too|demasiado]] [[small|pequeño]]', '[[She|Ella]] [[doesn\'t|no]] [[like|le gusta]] [[it|él]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[My sister says it is the most peaceful place in the world|Mi hermana dice que es el lugar más tranquilo del mundo]]".',
  },
  {
    question: '[[Does|¿]] [[he|él]] [[agree|está de acuerdo]] [[with|con]] [[his|su]] [[sister|hermana]]?',
    options: ['[[Yes|Sí]], [[he|él]] [[agrees|está de acuerdo]]', '[[No|No]], [[he|él]] [[doesn\'t|no]] [[agree|está de acuerdo]]', '[[Maybe|Quizás]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[I agree|Estoy de acuerdo]]"!',
  },
  {
    question: '[[The|El]] [[place|lugar]] [[is|es]] [[a|un]] [[museum|museo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[It|Es]] [[is|un]] [[a|parque]] [[park|parque]], [[not|no]] [[a|un]] [[museum|museo]].',
  },
  {
    question: '[[The|El]] [[park|parque]] [[has|tiene]] [[the tallest|los más altos]] [[trees|árboles]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[It has the tallest trees I have ever seen|Tiene los árboles más altos que he visto jamás]]".',
  },
  {
    question: '[[The|El]] [[best|mejor]] [[time|momento]] [[to|para]] [[visit|visitar]] [[is|es]] [[at|por]] [[night|noche]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[The|El]] [[best|mejor]] [[time|momento]] [[is|es]] [[early|temprano]] [[in|por]] [[the|la]] [[morning|mañana]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]]', '[[The|El]] [[biggest|más grande]] [[park|parque]] [[and|y]] [[its|sus]] [[superlatives|superlativos]]', '[[A|Una]] [[family|familia]]', '[[A|Un]] [[restaurant|restaurante]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[a|un]] [[park|parque]] [[using|usando]] [[superlatives|superlativos]].',
  },
  {
    question: '[[Which|Cuál]] [[superlative|superlativo]] [[does|usa]] [[the|el]] [[speaker|hablante]] [[use|usar]] [[for|para]] [[the|el]] [[park|parque]]?',
    options: ['[[the smallest|el más pequeño]]', '[[the biggest|el más grande]]', '[[the oldest|el más antiguo]]', '[[the newest|el más nuevo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[It is the biggest park in town|Es el parque más grande del pueblo]]".',
  },
  {
    question: '[[What|Qué]] [[animals|animales]] [[are|están]] [[in|en]] [[the|el]] [[lake|lago]]?',
    options: ['[[fish|peces]]', '[[ducks|patos]]', '[[swans|cisnes]]', '[[frogs|ranas]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[a lake with the most beautiful swans|un lago con los cisnes más hermosos]]".',
  },
  {
    question: '[[Why|Por qué]] [[is|es]] [[early morning|la mañana temprano]] [[the best|el mejor]] [[time|momento]]?',
    options: ['[[because|porque]] [[it|es]] [[is|está]] [[the quietest|el más tranquilo]]', '[[because|porque]] [[it|es]] [[is|está]] [[free|gratis]]', '[[because|porque]] [[there|hay]] [[are|menos]] [[fewer|gente]] [[people|gente]]', '[[He|Él]] [[doesn\'t|no]] [[say|dice]]'],
    correctAnswer: 0,
    explanation: '[[He|Él]] [[says|dice]] "[[when it is the quietest|cuando está más tranquilo]]".',
  },
  {
    question: '[[What|Qué]] [[does|significa]] "[[the most peaceful|el más tranquilo]]" [[mean|significar]]?',
    options: ['[[the most|el más]] [[noisy|ruidoso]]', '[[the most|el más]] [[peaceful|tranquilo]]', '[[the most|el más]] [[busy|ocupado]]', '[[the most|el más]] [[expensive|caro]]'],
    correctAnswer: 1,
    explanation: '[[Peaceful|Tranquilo]] = [[calm|calma]], [[quiet|tranquilo]]. [[The most peaceful|El más tranquilo]] = [[el lugar más tranquilo|el lugar más tranquilo]].',
  },
];

export const UNIT_6_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u6-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Superlatives',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
