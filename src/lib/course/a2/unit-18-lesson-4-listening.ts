/**
 * Unidad 18 — Lección 4: Comprensión auditiva (For & Since, time periods)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]]! [[I|Yo]] [[am|soy]] [[Tom|Tom]]. [[I|Yo]] [[have|he]] [[lived|vivido]] [[in|en]] [[Manchester|Manchester]] [[for|durante]] [[three years|tres años]]. [[I|Yo]] [[have|he]] [[worked|trabajado]] [[as|como]] [[a|un]] [[teacher|profesor]] [[since|desde]] [[2021|2021]]. [[I|Yo]] [[have|he]] [[been|estado]] [[married|casado]] [[for|durante]] [[five years|cinco años]]. [[My|Mi]] [[wife|esposa]] [[and|y]] [[I|yo]] [[met|conocimos]] [[when|cuando]] [[we|nosotros]] [[were|éramos]] [[at|en]] [[university|universidad]]. [[I|Yo]] [[have|he]] [[had|tenido]] [[my|mi]] [[car|coche]] [[since|desde]] [[last|el]] [[January|enero]]. [[I|Yo]] [[have|he]] [[been|estado]] [[learning|aprendiendo]] [[guitar|guitarra]] [[for|durante]] [[six months|seis meses]]. [[I|Yo]] [[have|he]] [[loved|amado]] [[music|música]] [[since|desde]] [[I|yo]] [[was|era]] [[a|un]] [[teenager|adolescente]]. [[I|Yo]] [[feel|me siento]] [[happy|feliz]] [[because|porque]] [[I|yo]] [[have|tengo]] [[a|una]] [[good|buena]] [[job|trabajo]] [[and|y]] [[a|una]] [[wonderful|maravillosa]] [[family|familia]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Tim|Tim]]', '[[Tom|Tom]]', '[[Tony|Tony]]', '[[Ted|Ted]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[I am Tom|Soy Tom]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[has|ha]] [[he|él]] [[lived|vivido]] [[in|en]] [[Manchester|Manchester]]?',
    options: ['[[two years|dos años]]', '[[three years|tres años]]', '[[five years|cinco años]]', '[[ten years|diez años]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have lived in Manchester for three years|He vivido en Manchester durante tres años]]".',
  },
  {
    question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] [[he|él]] [[worked|trabajado]] [[as|como]] [[a|un]] [[teacher|profesor]]?',
    options: ['[[2020|2020]]', '[[2021|2021]]', '[[2022|2022]]', '[[2019|2019]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have worked as a teacher since 2021|He trabajado como profesor desde 2021]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[has|ha]] [[he|él]] [[been|estado]] [[married|casado]]?',
    options: ['[[three years|tres años]]', '[[five years|cinco años]]', '[[six months|seis meses]]', '[[ten years|diez años]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have been married for five years|He estado casado durante cinco años]]".',
  },
  {
    question: '[[When|Cuándo]] [[did|conocieron]] [[they|ellos]] [[meet|conocerse]]?',
    options: ['[[at|en]] [[school|escuela]]', '[[at|en]] [[university|universidad]]', '[[at|en]] [[work|trabajo]]', '[[at|en]] [[a|un]] [[party|fiesta]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[We met when we were at university|Nos conocimos cuando estábamos en la universidad]]".',
  },
  {
    question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] [[he|él]] [[had|tenido]] [[his|su]] [[car|coche]]?',
    options: ['[[last|el]] [[summer|verano]]', '[[last|el]] [[January|enero]]', '[[last|el]] [[year|año]]', '[[last|la]] [[month|mes]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have had my car since last January|He tenido mi coche desde el enero pasado]]".',
  },
  {
    question: '[[How|Cuánto]] [[long|tiempo]] [[has|ha]] [[he|él]] [[been|estado]] [[learning|aprendiendo]] [[guitar|guitarra]]?',
    options: ['[[three months|tres meses]]', '[[six months|seis meses]]', '[[one year|un año]]', '[[two years|dos años]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have been learning guitar for six months|He estado aprendiendo guitarra durante seis meses]]".',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[lived|vivido]] [[in|en]] [[London|Londres]] [[for|durante]] [[three years|tres años]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|ha]] [[lived|vivido]] [[in|en]] [[Manchester|Manchester]], [[not|no]] [[London|Londres]].',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[loved|amado]] [[music|música]] [[since|desde]] [[he|él]] [[was|era]] [[a|un]] [[teenager|adolescente]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have loved music since I was a teenager|He amado la música desde que era adolescente]]".',
  },
  {
    question: '[[Tom|Tom]] [[has|ha]] [[been|estado]] [[learning|aprendiendo]] [[piano|piano]] [[for|durante]] [[six months|seis meses]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|ha]] [[been|estado]] [[learning|aprendiendo]] [[guitar|guitarra]], [[not|no]] [[piano|piano]].',
  },
  {
    question: '[[Tom|Tom]] [[feels|se siente]] [[happy|feliz]] [[because|porque]] [[he|él]] [[has|tiene]] [[a|un]] [[good|buen]] [[job|trabajo]] [[and|y]] [[a|una]] [[wonderful|maravillosa]] [[family|familia]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I feel happy because I have a good job and a wonderful family|Me siento feliz porque tengo un buen trabajo y una familia maravillosa]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[Tom\'s|Tom]] [[life|vida]] [[with|con]] [[for|durante]] [[and|y]] [[since|desde]] [[time periods|períodos de tiempo]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[life|vida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[describes|describe]] [[Tom\'s|Tom]] [[life|vida]] [[using|usando]] [[for|durante]] [[and|y]] [[since|desde]].',
  },
  {
    question: '[[Who|Quién]] [[is|es]] [[speaking|habla]] [[in|en]] [[the|el]] [[audio|audio]]?',
    options: ['[[A|Un]] [[teacher|profesor]] [[talking|hablando]] [[about|sobre]] [[a|un]] [[student|estudiante]]', '[[Tom|Tom]] [[himself|él mismo]]', '[[Tom\'s|Tom]] [[wife|esposa]]', '[[A|Un]] [[friend|amigo]] [[of|de]] [[Tom|Tom]]'],
    correctAnswer: 1,
    explanation: '[[Tom|Tom]] [[speaks|habla]] [[about|sobre]] [[himself|sí mismo]] ("[[I am Tom|Soy Tom]]", "[[I have|He]]").',
  },
  {
    question: '[[What|Qué]] [[job|trabajo]] [[does|tiene]] [[Tom|Tom]] [[have|tener]]?',
    options: ['[[doctor|médico]]', '[[teacher|profesor]]', '[[engineer|ingeniero]]', '[[driver|conductor]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have worked as a teacher since 2021|He trabajado como profesor desde 2021]]".',
  },
  {
    question: '[[What|Qué]] [[instrument|instrumento]] [[is|está]] [[Tom|Tom]] [[learning|aprendiendo]]?',
    options: ['[[piano|piano]]', '[[guitar|guitarra]]', '[[violin|violín]]', '[[drums|batería]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have been learning guitar for six months|He estado aprendiendo guitarra durante seis meses]]".',
  },
];

export const UNIT_18_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u18-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'For Since',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
