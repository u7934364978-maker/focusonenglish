/**
 * Unidad 20 — Lección 3: Comprensión lectora (Module 2 review)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[My|Mi]] [[name|nombre]] [[is|es]] [[David|David]]. [[I|Yo]] [[have|he]] [[lived|vivido]] [[in|en]] [[Barcelona|Barcelona]] [[for|durante]] [[three years|tres años]]. [[I|Yo]] [[have|he]] [[worked|trabajado]] [[as|como]] [[a|un]] [[teacher|profesor]] [[since|desde]] [[2021|2021]]. [[Last|El]] [[week|semana]] [[I|yo]] [[was|estaba]] [[walking|caminando]] [[in|en]] [[the|el]] [[park|parque]] [[when|cuando]] [[I|yo]] [[met|conocí]] [[an|un]] [[old|viejo]] [[friend|amigo]]. [[We|Nosotros]] [[were|estábamos]] [[talking|hablando]] [[while|mientras]] [[we|nosotros]] [[walked|caminábamos]]. [[How often|Con qué frecuencia]] [[do|hago]] [[I|yo]] [[exercise|ejercicio]]? [[I|Yo]] [[go|voy]] [[to|a]] [[the|el]] [[gym|gimnasio]] [[three times|tres veces]] [[a|a]] [[week|semana]]. [[I|Yo]] [[have|he]] [[already|ya]] [[finished|terminado]] [[my|mi]] [[course|curso]] [[this|este]] [[year|año]] [[but|pero]] [[I|yo]] [[haven\'t|no he]] [[found|encontrado]] [[a|un]] [[new|nuevo]] [[job|trabajo]] [[yet|aún]]. [[I|Yo]] [[feel|me siento]] [[good|bien]] [[because|porque]] [[I|yo]] [[have|tengo]] [[a|una]] [[stable|estable]] [[life|vida]] [[with|con]] [[good|buenos]] [[friends|amigos]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Cuál]] [[is|es]] [[his|su]] [[name|nombre]]?',
    options: ['[[Daniel|Daniel]]', '[[David|David]]', '[[Derek|Derek]]', '[[Dennis|Dennis]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]]: "[[My name is David|Mi nombre es David]]".',
  },
  {
    question: '[[How long|Cuánto tiempo]] [[has|ha]] [[he|él]] [[lived|vivido]] [[in|en]] [[Barcelona|Barcelona]]?',
    options: ['[[two years|dos años]]', '[[three years|tres años]]', '[[five years|cinco años]]', '[[ten years|diez años]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have lived in Barcelona for three years|He vivido en Barcelona durante tres años]]".',
  },
  {
    question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] [[he|él]] [[worked|trabajado]] [[as|como]] [[a|un]] [[teacher|profesor]]?',
    options: ['[[2020|2020]]', '[[2021|2021]]', '[[2022|2022]]', '[[2019|2019]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have worked as a teacher since 2021|He trabajado como profesor desde 2021]]".',
  },
  {
    question: '[[What|Qué]] [[was|estaba]] [[he|él]] [[doing|haciendo]] [[when|cuando]] [[he|él]] [[met|conoció]] [[his|su]] [[friend|amigo]]?',
    options: ['[[running|corriendo]]', '[[walking|caminando]] [[in|en]] [[the|el]] [[park|parque]]', '[[sitting|sentado]]', '[[swimming|nadando]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I was walking in the park when I met an old friend|Estaba caminando en el parque cuando conocí a un viejo amigo]]".',
  },
  {
    question: '[[How often|Con qué frecuencia]] [[does|va]] [[he|él]] [[go|ir]] [[to|a]] [[the|el]] [[gym|gimnasio]]?',
    options: ['[[once a week|una vez a la semana]]', '[[twice a week|dos veces a la semana]]', '[[three times a week|tres veces a la semana]]', '[[every day|cada día]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I go to the gym three times a week|Voy al gimnasio tres veces a la semana]]".',
  },
  {
    question: '[[Has|Ha]] [[he|él]] [[finished|terminado]] [[his|su]] [[course|curso]] [[this|este]] [[year|año]]?',
    options: ['[[no|no]]', '[[yes|sí]]', '[[maybe|quizás]]', '[[not yet|aún no]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I have already finished my course this year|Ya he terminado mi curso este año]]".',
  },
  {
    question: '[[Has|Ha]] [[he|él]] [[found|encontrado]] [[a|un]] [[new|nuevo]] [[job|trabajo]] [[yet|aún]]?',
    options: ['[[yes|sí]]', '[[no|no]]', '[[maybe|quizás]]', '[[not mentioned|no mencionado]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I haven\'t found a new job yet|Aún no he encontrado un nuevo trabajo]]".',
  },
  {
    question: '[[David|David]] [[has|ha]] [[lived|vivido]] [[in|en]] [[Madrid|Madrid]] [[for|durante]] [[three years|tres años]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[has|ha]] [[lived|vivido]] [[in|en]] [[Barcelona|Barcelona]], [[not|no]] [[Madrid|Madrid]].',
  },
  {
    question: '[[David|David]] [[was|estaba]] [[walking|caminando]] [[when|cuando]] [[he|él]] [[met|conoció]] [[his|su]] [[friend|amigo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I was walking in the park when I met an old friend|Estaba caminando en el parque cuando conocí a un viejo amigo]]".',
  },
  {
    question: '[[David|David]] [[has|ha]] [[already|ya]] [[finished|terminado]] [[his|su]] [[course|curso]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I have already finished my course|Ya he terminado mi curso]]".',
  },
  {
    question: '[[David|David]] [[feels|se siente]] [[bad|mal]] [[because|porque]] [[he|él]] [[has|tiene]] [[no|ningún]] [[friends|amigos]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[feels|se siente]] [[good|bien]] [[because|porque]] [[he|él]] [[has|tiene]] [[a|una]] [[stable|estable]] [[life|vida]] [[with|con]] [[good|buenos]] [[friends|amigos]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[A|Un]] [[trip|viaje]] [[to|a]] [[the|el]] [[beach|playa]]', '[[David\'s|David]] [[life|vida]] [[with|con]] [[mix|mezcla]] [[of|de]] [[grammar|gramática]] [[from|de]] [[Module 2|Módulo 2]]', '[[A|Una]] [[birthday|cumpleaños]] [[party|fiesta]]', '[[School|Escuela]] [[subjects|asignaturas]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[uses|usa]] Present Perfect, Past Simple, Past Continuous, For/Since, How questions.',
  },
  {
    question: '[[Who|Quién]] [[did|conoció]] [[David|David]] [[meet|conocer]] [[last|la]] [[week|semana]]?',
    options: ['[[a|un]] [[new|nuevo]] [[friend|amigo]]', '[[an|un]] [[old|viejo]] [[friend|amigo]]', '[[his|su]] [[teacher|profesor]]', '[[his|su]] [[boss|jefe]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[I met an old friend|Conocí a un viejo amigo]]".',
  },
  {
    question: '[[What|Qué]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]] [[for|para]] [[the|la]] [[meeting|reunión]] [[with|con]] [[the|el]] [[friend|amigo]]?',
    options: ['[[Present Simple|Presente Simple]]', '[[Past Simple|Pasado Simple]] [[and|y]] [[Past Continuous|Pasado Continuo]]', '[[Future|Futuro]]', '[[Present Perfect|Presente Perfecto]] [[only|solo]]'],
    correctAnswer: 1,
    explanation: '[[I was walking|Estaba caminando]] (Past Continuous) [[when|cuando]] [[I met|conocí]] (Past Simple).',
  },
  {
    question: '[[How|Cómo]] [[does|se]] [[David|David]] [[feel|siente]]?',
    options: ['[[tired|cansado]]', '[[bad|mal]]', '[[good|bien]]', '[[angry|enfadado]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I feel good because I have a stable life with good friends|Me siento bien porque tengo una vida estable con buenos amigos]]".',
  },
];

export const UNIT_20_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u20-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Module 2 Review',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
