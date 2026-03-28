/**
 * Unidad 1 — Lección 4: Comprensión auditiva
 * 15 actividades: 1 audio (transcripción) + 15 preguntas (1 por actividad).
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Comprensión auditiva';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]], [[Spain|España]]. [[I am twenty-five years old.|Tengo veinticinco años.]] [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]. [[I|Yo]] [[study|estudio]] [[at|en]] [[the|la]] [[university|universidad]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]] [[to|de]] [[be|estar]] [[here|aquí]]. [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]]!`;

const INSTRUCTIONS = '[[Listen|Escucha]] [[the|el]] [[audio|audio]] [[below|abajo]]. [[You can|Puedes]] [[read|leer]] [[the|la]] [[transcript|transcripción]] [[after|después]] [[listening|escuchar]]. [[Then|Después]] [[answer|responde]] [[the|las]] [[questions|preguntas]].';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Pedro|Pedro]]', '[[Carlos|Carlos]]', '[[Pablo|Pablo]]', '[[Antonio|Antonio]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[My name is Carlos|Mi nombre es Carlos]]".',
  },
  {
    question: '[[Where|De dónde]] [[is|es]] [[Carlos|Carlos]] [[from|de]]?',
    options: ['[[Madrid|Madrid]]', '[[Valencia|Valencia]]', '[[Barcelona|Barcelona]]', '[[Seville|Sevilla]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I am from Barcelona, Spain|Soy de Barcelona, España]]".',
  },
  {
    question: '[[How old is Carlos?|¿Cuántos años tiene Carlos?]]',
    options: ['[[twenty|veinte]]', '[[twenty-three|veintitrés]]', '[[twenty-five|veinticinco]]', '[[thirty|treinta]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[twenty-five years old|veinticinco años]]".',
  },
  {
    question: '[[What|Qué]] [[is|es]] [[Carlos|Carlos]]? ([[job|trabajo]] / [[role|rol]])',
    options: ['[[teacher|profesor]]', '[[doctor|médico]]', '[[student|estudiante]]', '[[engineer|ingeniero]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I am a student|Soy estudiante]]".',
  },
  {
    question: '[[Where does he study?|¿Dónde estudia él?]]',
    options: ['[[at|en]] [[school|el colegio]]', '[[at|en]] [[the|la]] [[university|universidad]]', '[[at|en]] [[home|casa]]', '[[in|en]] [[a|una]] [[library|biblioteca]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I study at the university|Estudio en la universidad]]".',
  },
  {
    question: '[[How does Carlos feel?|¿Cómo se siente Carlos?]]',
    options: ['[[tired|cansado]]', '[[sad|triste]]', '[[happy|feliz]]', '[[angry|enfadado]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I am happy to be here|Estoy feliz de estar aquí]]".',
  },
  {
    question: '[[What country does he mention?|¿Qué país menciona él?]]',
    options: ['[[Italy|Italia]]', '[[France|Francia]]', '[[Spain|España]]', '[[Portugal|Portugal]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[from Barcelona, Spain|de Barcelona, España]]".',
  },
  {
    question: '[[What phrase does Carlos use at the end?|¿Qué frase usa Carlos al final?]]',
    options: ['[[Goodbye|Adiós]]', '[[Thank you|Gracias]]', '[[Nice to meet you|Encantado de conocerte]]', '[[How are you?|¿Cómo estás?]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[ends|termina]] [[with|con]] "[[Nice to meet you|Encantado de conocerte]]".',
  },
  {
    question: '[[Carlos|Carlos]] [[is|es]] [[from|de]] [[Madrid|Madrid]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|es]] [[from|de]] [[Barcelona|Barcelona]], [[not|no]] [[Madrid|Madrid]].',
  },
  {
    question: '[[Carlos|Carlos]] [[is|es]] [[a|un]] [[teacher|profesor]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|es]] [[a|un]] [[student|estudiante]].',
  },
  {
    question: '[[Carlos|Carlos]] [[studies|estudia]] [[at|en]] [[the|la]] [[university|universidad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I study at the university|Estudio en la universidad]]".',
  },
  {
    question: '[[Carlos|Carlos]] [[is|es]] [[thirty|treinta]] [[years old|años]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He is twenty-five years old.|Tiene veinticinco años.]]',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Una]] [[lesson|clase]] [[at|en]] [[university|la universidad]]', '[[A|Una]] [[person|persona]] [[introducing|presentándose]] [[himself|a sí mismo]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[Barcelona|Barcelona]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[Carlos|Carlos]] [[introducing|presentándose]]: [[name|nombre]], [[age|edad]], [[city|ciudad]], [[student|estudiante]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[A|Un]] [[teacher|profesor]]', '[[Carlos|Carlos]] [[himself|él mismo]]', '[[A|Un]] [[friend|amigo]] [[of|de]] [[Carlos|Carlos]]', '[[A|Un]] [[student|estudiante]] [[from|de]] [[another|otra]] [[country|país]]'],
    correctAnswer: 1,
    explanation: '[[Carlos|Carlos]] [[speaks|habla]] [[about|sobre]] [[himself|sí mismo]] ("[[My name is|Mi nombre es]]", "[[I am|Yo soy]]").',
  },
  {
    question: '[[Does|¿]] [[Carlos|Carlos]] [[say|dice]] [[he|él]] [[is|está]] [[happy|feliz]]?',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I am happy to be here|Estoy feliz de estar aquí]]".',
  },
];

export const UNIT_1_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a1-u1-l4-listening-${i + 1}`,
  type: 'listening',
  level: 'A1',
  topic: 'Personal Info',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
