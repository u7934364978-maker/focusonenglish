/**
 * Unidad 26 — Lección 3: Comprensión lectora (First Conditional)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[If|Si]] [[it|va]] [[rains|llueve]] [[tomorrow|mañana]], [[I|yo]] [[will stay|me quedaré]] [[at|en]] [[home|casa]]. [[I|Yo]] [[will watch|veré]] [[a|una]] [[film|película]] [[and|y]] [[relax|me relajaré]]. [[If|Si]] [[the|el]] [[weather|tiempo]] [[is|está]] [[nice|bueno]], [[I|yo]] [[will go|iré]] [[for|a]] [[a|un]] [[walk|paseo]] [[in|en]] [[the|el]] [[park|parque]]. [[If|Si]] [[you|tú]] [[come|vienes]] [[to|a]] [[visit|visitar]] [[me|me]], [[I|yo]] [[will make|haré]] [[coffee|café]] [[for|para]] [[you|ti]]. [[If|Si]] [[I|yo]] [[pass|aprobo]] [[the|el]] [[exam|examen]], [[I|yo]] [[will celebrate|celebraré]] [[with|con]] [[my|mis]] [[friends|amigos]]. [[If|Si]] [[I|yo]] [[don\'t pass|no apruebo]], [[I|yo]] [[will study|estudiaré]] [[harder|más]] [[next time|la próxima vez]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[if|si]] [[it|va]] [[rains|llueve]] [[tomorrow|mañana]]?',
    options: ['[[go out|salir]]', '[[stay|quedarse]] [[at|en]] [[home|casa]]', '[[work|trabajar]]', '[[travel|viajar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If it rains tomorrow I will stay at home|Si llueve mañana me quedaré en casa]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[at|en]] [[home|casa]] [[if|si]] [[it|va]] [[rains|llueve]]?',
    options: ['[[study|estudiar]]', '[[cook|cocinar]]', '[[watch|ver]] [[a|una]] [[film|película]] [[and|y]] [[relax|relajarse]]', '[[clean|limpiar]]'],
    correctAnswer: 2,
    explanation: '[[He|Él]] [[says|dice]] "[[I will watch a film and relax|Veré una película y me relajaré]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[if|si]] [[the|el]] [[weather|tiempo]] [[is|está]] [[nice|bueno]]?',
    options: ['[[stay|quedarse]] [[at|en]] [[home|casa]]', '[[go|ir]] [[for|a]] [[a|un]] [[walk|paseo]] [[in|en]] [[the|el]] [[park|parque]]', '[[work|trabajar]]', '[[sleep|dormir]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If the weather is nice I will go for a walk in the park|Si el tiempo está bien iré a pasear al parque]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[if|si]] [[you|tú]] [[come|vienes]] [[to|a]] [[visit|visitar]]?',
    options: ['[[order|pedir]] [[pizza|pizza]]', '[[make|hacer]] [[coffee|café]]', '[[go|ir]] [[out|fuera]]', '[[watch|ver]] [[TV|televisión]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If you come to visit I will make coffee for you|Si vienes a visitarme haré café para ti]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[if|si]] [[he|él]] [[passes|aprueba]] [[the|el]] [[exam|examen]]?',
    options: ['[[rest|descansar]]', '[[celebrate|celebrar]] [[with|con]] [[friends|amigos]]', '[[study more|estudiar más]]', '[[travel|viajar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If I pass the exam I will celebrate with my friends|Si apruebo el examen celebraré con mis amigos]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[writer|autor]] [[do|hacer]] [[if|si]] [[he|él]] [[doesn\'t|no]] [[pass|aprueba]]?',
    options: ['[[give up|rendirse]]', '[[study|estudiar]] [[harder|más]] [[next time|la próxima vez]]', '[[rest|descansar]]', '[[travel|viajar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If I don\'t pass I will study harder next time|Si no apruebo estudiaré más la próxima vez]]".',
  },
  {
    question: '[[Which|Cuál]] [[structure|estructura]] [[does|usa]] [[the|el]] [[text|texto]] [[use|usar]]?',
    options: ['[[Past|Pasado]] [[simple|simple]]', '[[First|Primer]] [[conditional|condicional]]', '[[Zero|Condicional]] [[conditional|cero]]', '[[Present|Presente]] [[perfect|perfecto]]'],
    correctAnswer: 1,
    explanation: '[[First|Primer]] [[conditional|condicional]]: [[If|Si]] + [[present|presente]], [[will|will]] + [[infinitive|infinitivo]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[will|se]] [[stay|quedará]] [[at|en]] [[home|casa]] [[only|solo]] [[if|si]] [[it|va]] [[rains|llueve]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|La]] [[condition|condición]] [[is|es]] [[rain|lluvia]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[will|irá]] [[go|ir]] [[to|a]] [[the|el]] [[park|parque]] [[if|si]] [[the|el]] [[weather|tiempo]] [[is|está]] [[bad|malo]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[He|Él]] [[will|irá]] [[only|solo]] [[if|si]] [[the|el]] [[weather|tiempo]] [[is|está]] [[nice|bueno]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[has|tiene]] [[two|dos]] [[plans|planes]] [[for|para]] [[the|el]] [[exam|examen]] [[result|resultado]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[If|Si]] [[pass|aprueba]] → [[celebrate|celebrar]]. [[If|Si]] [[don\'t pass|no aprueba]] → [[study harder|estudiar más]].',
  },
  {
    question: '[[The|El]] [[writer|autor]] [[will|hará]] [[make|hacer]] [[coffee|café]] [[only|solo]] [[if|si]] [[someone|alguien]] [[visits|visita]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[If you come to visit I will make coffee|Si vienes a visitarme haré café]]".',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Conditions|Condiciones]] [[and|y]] [[results|resultados]] [[in|en]] [[the|el]] [[future|futuro]]', '[[Weather|Tiempo]]', '[[Food|Comida]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[text|texto]] [[shows|muestra]] [[first|primer]] [[conditional|condicional]]: [[if|si]] + [[condition|condición]] → [[result|resultado]].',
  },
  {
    question: '[[In|En]] [[the|el]] [[first|primer]] [[conditional|condicional]], [[what|qué]] [[tense|tiempo]] [[do|usa]] [[we|usamos]] [[use|usar]] [[in|en]] [[the|la]] [[if|si]] [[clause|oración]]?',
    options: ['[[Past|Pasado]] [[simple|simple]]', '[[Present|Presente]] [[simple|simple]]', '[[Future|Futuro]]', '[[Present|Presente]] [[perfect|perfecto]]'],
    correctAnswer: 1,
    explanation: '[[First|Primer]] [[conditional|condicional]]: [[If|Si]] + [[present|presente]] [[simple|simple]], [[will|will]] + [[infinitive|infinitivo]].',
  },
  {
    question: '[[How many|Cuántas]] [[conditions|condiciones]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'],
    correctAnswer: 3,
    explanation: '[[Rain|Lluvia]], [[nice weather|buen tiempo]], [[visit|visita]], [[pass exam|aprobar examen]] / [[don\'t pass|no aprobar]] = [[5|cinco]] [[conditions|condiciones]].',
  },
  {
    question: '[[What|Qué]] [[word|palabra]] [[introduces|introduce]] [[the|la]] [[condition|condición]] [[in|en]] [[English|inglés]]?',
    options: ['[[When|Cuando]]', '[[If|Si]]', '[[Because|Porque]]', '[[So|Así que]]'],
    correctAnswer: 1,
    explanation: '[[If|Si]] [[introduces|introduce]] [[the|la]] [[condition|condición]] [[in|en]] [[first|primer]] [[conditional|condicional]].',
  },
];

export const UNIT_26_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u26-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'First Conditional',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Reading',
}));
