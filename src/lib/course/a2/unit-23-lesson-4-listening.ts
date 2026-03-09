/**
 * Unidad 23 — Lección 4: Comprensión auditiva (Will/Won't Predictions & Promises)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Sarah|Sarah]]! [[Don't worry|No te preocupes]] [[about|sobre]] [[the|la]] [[party|fiesta]] [[tomorrow|mañana]]. [[I|Yo]] [[will|voy a]] [[help|ayudar]] [[you|te]] [[with|con]] [[the|la]] [[preparations|preparativos]]. [[I|Yo]] [[will|voy a]] [[buy|comprar]] [[the|los]] [[drinks|refrescos]] [[and|y]] [[I|yo]] [[won't|no]] [[be|ser]] [[late|tarde]]. [[I|Yo]] [[promise|prometo]]! [[Maybe|Quizás]] [[I|yo]] [[will|voy a]] [[bring|traer]] [[some|algo]] [[of|de]] [[music|música]] [[too|tambien]]. [[I|Yo]] [[think|creo]] [[the|la]] [[party|fiesta]] [[will|será]] [[be|ser]] [[great|genial]]. [[Everyone|Todos]] [[will|van a]] [[have|tener]] [[fun|diversión]]. [[I|Yo]] [[won't|no]] [[forget|olvidar]] [[the|los]] [[balloons|globos]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[Who|Quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]] [[to|con]]?',
    options: ['[[Maria|María]]', '[[Sarah|Sarah]]', '[[Anna|Ana]]', '[[Emma|Emma]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Hi Sarah|Hola Sarah]]".',
  },
  {
    question: '[[What|Qué]] [[is|está]] [[happening|pasando]] [[tomorrow|mañana]]?',
    options: ['[[a|un]] [[exam|examen]]', '[[a|una]] [[party|fiesta]]', '[[a|una]] [[meeting|reunión]]', '[[a|un]] [[trip|viaje]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Don\'t worry about the party tomorrow|No te preocupes por la fiesta de mañana]]".',
  },
  {
    question: '[[What|Qué]] [[will|va a]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[to|para]] [[help|ayudar]]?',
    options: ['[[cook|cocinar]]', '[[help|ayudar]] [[with|con]] [[preparations|preparativos]]', '[[clean|limpiar]]', '[[decorate|decorar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I will help you with the preparations|Te ayudaré con los preparativos]]".',
  },
  {
    question: '[[What|Qué]] [[will|va a]] [[the|el]] [[speaker|hablante]] [[buy|comprar]]?',
    options: ['[[food|comida]]', '[[the|los]] [[drinks|refrescos]]', '[[balloons|globos]]', '[[cake|tarta]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I will buy the drinks|Compraré los refrescos]]".',
  },
  {
    question: "[[What|Qué]] [[won't|no]] [[the|el]] [[speaker|hablante]] [[do|hacer]]?",
    options: ['[[help|ayudar]]', '[[be|ser]] [[late|tarde]]', '[[come|venir]]', '[[buy|comprar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I won\'t be late|No llegaré tarde]]".',
  },
  {
    question: '[[What|Qué]] [[might|podría]] [[the|el]] [[speaker|hablante]] [[bring|traer]]?',
    options: ['[[food|comida]]', '[[some|algo]] [[of|de]] [[music|música]]', '[[flowers|flores]]', '[[games|juegos]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Maybe I will bring some music too|Quizás traeré algo de música también]]".',
  },
  {
    question: '[[What|Qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[think|creer]] [[about|sobre]] [[the|la]] [[party|fiesta]]?',
    options: ['[[boring|aburrida]]', '[[small|pequeña]]', '[[great|genial]]', '[[quiet|tranquila]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I think the party will be great|Creo que la fiesta será genial]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[will|va a]] [[forget|olvidar]] [[the|los]] [[balloons|globos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[I won\'t forget the balloons|No olvidaré los globos]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[promises|promete]] [[to|a]] [[help|ayudar]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I promise|Prometo]]" [[and|y]] "[[I will help you|Te ayudaré]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[is|está]] [[sure|seguro]] [[he|él]] [[will|va a]] [[bring|traer]] [[music|música]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[says|dice]] "[[Maybe|Quizás]]" — [[not|no]] [[sure|seguro]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[thinks|cree]] [[everyone|todos]] [[will|van a]] [[have|tener]] [[fun|diversión]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[Everyone will have fun|Todos se divertirán]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Una]] [[complaint|queja]]', '[[Offers|Ofertas]] [[of|de]] [[help|ayuda]] [[and|y]] [[promises|promesas]]', '[[Weather|Tiempo]]', '[[Travel|Viajes]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[offers|ofertas]] [[of|de]] [[help|ayuda]] [[and|y]] [[promises|promesas]] [[for|para]] [[a|una]] [[party|fiesta]].',
  },
  {
    question: '[[Which|Cuál]] [[phrase|frase]] [[is|es]] [[an|una]] [[offer|oferta]]?',
    options: ['[[I won\'t|No]]', '[[I will help you|Te ayudaré]]', '[[Don\'t worry|No te preocupes]]', '[[Maybe|Quizás]]'],
    correctAnswer: 1,
    explanation: '[[I will help you|Te ayudaré]] [[is|es]] [[an|una]] [[offer|oferta]] [[of|de]] [[help|ayuda]].',
  },
  {
    question: '[[What|Qué]] [[will|va a]] [[the|el]] [[speaker|hablante]] [[not|no]] [[forget|olvidar]]?',
    options: ['[[the|los]] [[drinks|refrescos]]', '[[the|los]] [[balloons|globos]]', '[[the|la]] [[music|música]]', '[[the|la]] [[cake|tarta]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I won\'t forget the balloons|No olvidaré los globos]]".',
  },
  {
    question: '[[Why|Por qué]] [[does|hace]] [[the|el]] [[speaker|hablante]] [[say|decir]] "[[Don\'t worry|No te preocupes]]"?',
    options: ['[[because|porque]] [[he|él]] [[is|está]] [[angry|enfadado]]', '[[because|porque]] [[he|él]] [[will|va a]] [[help|ayudar]] [[with|con]] [[the|la]] [[party|fiesta]]', '[[because|porque]] [[the|la]] [[party|fiesta]] [[is|cancelada]] [[cancelled|está]]', '[[because|porque]] [[he|él]] [[can\'t|no]] [[come|venir]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[Don\'t worry|No te preocupes]]" [[because|porque]] [[he|él]] [[will|va a]] [[help|ayudar]] [[with|con]] [[the|la]] [[preparations|preparativos]].',
  },
];

export const UNIT_23_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u23-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Will/Won\'t Predictions & Promises',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
