/**
 * Unidad 1 — Lección 4: Comprensión auditiva (Greetings & Introductions)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Carlos|Carlos]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Barcelona|Barcelona]], [[Spain|España]]. [[I|Yo]] [[am|tengo]] [[twenty-five|veinticinco]] [[years|años]] [[old|de edad]]. [[My|Mi]] [[hometown|ciudad natal]] [[is|es]] [[Barcelona|Barcelona]]. [[I|Yo]] [[live|vivo]] [[in|en]] [[a|un]] [[nice|bonito]] [[neighbourhood|barrio]] [[near|cerca]] [[the|la]] [[beach|playa]]. [[My|Mi]] [[favourite|favorito]] [[hobby|pasatiempo]] [[is|es]] [[playing|jugar]] [[football|fútbol]]. [[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]]. [[I|Yo]] [[study|estudio]] [[at|en]] [[the|la]] [[university|universidad]]. [[I|Yo]] [[am|estoy]] [[happy|feliz]] [[to|de]] [[be|estar]] [[here|aquí]]. [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]]!`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

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
    question: '[[How|Cuántos]] [[old|años]] [[is|tiene]] [[Carlos|Carlos]]?',
    options: ['[[twenty|veinte]]', '[[twenty-three|veintitrés]]', '[[twenty-five|veinticinco]]', '[[thirty|treinta]]'],
    correctAnswer: 2,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[twenty-five years old|veinticinco años]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[hometown|ciudad natal]]?',
    options: ['[[Madrid|Madrid]]', '[[Valencia|Valencia]]', '[[Barcelona|Barcelona]]', '[[Seville|Sevilla]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[My hometown is Barcelona|Mi ciudad natal es Barcelona]]".',
  },
  {
    question: '[[What|Qué]] [[is|es]] [[Carlos|Carlos]]? ([[job|trabajo]] / [[role|rol]])',
    options: ['[[teacher|profesor]]', '[[doctor|médico]]', '[[student|estudiante]]', '[[engineer|ingeniero]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I am a student|Soy estudiante]]".',
  },
  {
    question: '[[Where|Dónde]] [[does|estudia]] [[he|él]] [[study|estudiar]]?',
    options: ['[[at|en]] [[school|el colegio]]', '[[at|en]] [[the|la]] [[university|universidad]]', '[[at|en]] [[home|casa]]', '[[in|en]] [[a|una]] [[library|biblioteca]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I study at the university|Estudio en la universidad]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[favourite|favorito]] [[hobby|pasatiempo]]?',
    options: ['[[reading|leer]]', '[[cooking|cocinar]]', '[[playing|jugar]] [[football|fútbol]]', '[[swimming|nadar]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[My favourite hobby is playing football|Mi pasatiempo favorito es jugar fútbol]]".',
  },
  {
    question: '[[What|Qué]] [[kind|tipo]] [[of|de]] [[neighbourhood|barrio]] [[does|tiene]] [[he|él]] [[live|vivir]] [[in|en]]?',
    options: ['[[noisy|ruidoso]]', '[[nice|bonito]] [[near|cerca]] [[the|la]] [[beach|playa]]', '[[big|grande]]', '[[old|viejo]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I live in a nice neighbourhood near the beach|Vivo en un barrio bonito cerca de la playa]]".',
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
    question: '[[Carlos|Carlos]] [[is|tiene]] [[thirty|treinta]] [[years|años]] [[old|de edad]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[is|tiene]] [[twenty-five|veinticinco]] [[years old|años]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Una]] [[lesson|clase]] [[at|en]] [[university|la universidad]]', '[[A|Una]] [[person|persona]] [[introducing|presentándose]] [[himself|a sí mismo]]', '[[A|Un]] [[trip|viaje]] [[to|a]] [[Barcelona|Barcelona]]', '[[A|Una]] [[job|trabajo]] [[interview|entrevista]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[Carlos|Carlos]] [[introducing|presentándose]]: [[name|nombre]], [[age|edad]], [[hometown|ciudad natal]], [[neighbourhood|barrio]], [[hobby|pasatiempo]], [[student|estudiante]].',
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
  id: `a2-u1-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Greetings',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
