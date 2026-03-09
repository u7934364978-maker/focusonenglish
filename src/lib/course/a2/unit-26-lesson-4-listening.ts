/**
 * Unidad 26 — Lección 4: Comprensión auditiva (First Conditional)
 * 15 actividades: 1 audio (transcripción) + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[If|Si]] [[you|tú]] [[finish|terminas]] [[your|tu]] [[homework|deberes]] [[early|temprano]], [[I|yo]] [[will let you go out|te dejaré salir]] [[tonight|esta noche]]. [[If|Si]] [[it|va]] [[rains|llueve]] [[on|el]] [[Saturday|sábado]], [[we|nosotros]] [[will stay|nos quedaremos]] [[at|en]] [[home|casa]] [[and|y]] [[play|jugaremos]] [[games|juegos]]. [[If|Si]] [[you|tú]] [[pass|apruebas]] [[the|el]] [[exam|examen]], [[I|yo]] [[will buy you a present|te compraré un regalo]]. [[If|Si]] [[the|el]] [[bus|autobús]] [[is|está]] [[late|tarde]], [[I|yo]] [[will be late|llegaré tarde]] [[to|a]] [[work|trabajo]]. [[If|Si]] [[you|tú]] [[need|necesitas]] [[help|ayuda]], [[just|solo]] [[call|llama]] [[me|me]] [[and|y]] [[I|yo]] [[will come|vendré]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  {
    question: '[[What|Qué]] [[will|pasará]] [[happen|pasar]] [[if|si]] [[the|el]] [[child|niño]] [[finishes|termina]] [[homework|deberes]] [[early|temprano]]?',
    options: ['[[stay|quedarse]] [[at|en]] [[home|casa]]', '[[go out|salir]] [[tonight|esta noche]]', '[[study more|estudiar más]]', '[[sleep|dormir]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If you finish your homework early I will let you go out tonight|Si terminas los deberes temprano te dejaré salir esta noche]]".',
  },
  {
    question: '[[What|Qué]] [[will|harán]] [[they|ellos]] [[do|hacer]] [[if|si]] [[it|va]] [[rains|llueve]] [[on|el]] [[Saturday|sábado]]?',
    options: ['[[go|ir]] [[to|a]] [[the|el]] [[park|parque]]', '[[stay|quedarse]] [[at|en]] [[home|casa]] [[and|y]] [[play|jugar]] [[games|juegos]]', '[[travel|viajar]]', '[[work|trabajar]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[speaker|hablante]] [[says|dice]] "[[If it rains on Saturday we will stay at home and play games|Si llueve el sábado nos quedaremos en casa y jugaremos]]".',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[if|si]] [[the|el]] [[child|niño]] [[passes|aprueba]] [[the|el]] [[exam|examen]]?',
    options: ['[[celebrate|celebrar]]', '[[buy|comprar]] [[a|un]] [[present|regalo]]', '[[travel|viajar]]', '[[rest|descansar]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If you pass the exam I will buy you a present|Si apruebas el examen te compraré un regalo]]".',
  },
  {
    question: '[[What|Qué]] [[will|pasará]] [[happen|pasar]] [[if|si]] [[the|el]] [[bus|autobús]] [[is|está]] [[late|tarde]]?',
    options: ['[[early|llegar]] [[to|a]] [[work|trabajo]] [[early|temprano]]', '[[be|ser]] [[late|tarde]] [[to|a]] [[work|trabajo]]', '[[stay|quedarse]] [[at|en]] [[home|casa]]', '[[take|tomar]] [[a|un]] [[taxi|taxi]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If the bus is late I will be late to work|Si el autobús llega tarde llegaré tarde al trabajo]]".',
  },
  {
    question: '[[What|Qué]] [[should|debe]] [[the|el]] [[listener|oyente]] [[do|hacer]] [[if|si]] [[they|ellos]] [[need|necesitan]] [[help|ayuda]]?',
    options: ['[[wait|esperar]]', '[[call|llamar]] [[the|el]] [[speaker|hablante]]', '[[ask|preguntar]] [[someone else|a otro]]', '[[give up|rendirse]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If you need help just call me and I will come|Si necesitas ayuda solo llámame y vendré]]".',
  },
  {
    question: '[[Who|Quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[probably|probablemente]] [[talking|hablando]] [[to|con]]?',
    options: ['[[a|un]] [[boss|jefe]]', '[[a|un]] [[child|niño]] [[or|o]] [[student|estudiante]]', '[[a|un]] [[stranger|desconocido]]', '[[a|un]] [[doctor|médico]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[context|contexto]] ([[homework|deberes]], [[exam|examen]], [[go out|salir]]) [[suggests|sugiere]] [[parent|padre]] [[to|a]] [[child|niño]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[will|dejará]] [[let|dejar]] [[the|el]] [[child|niño]] [[go out|salir]] [[only|solo]] [[if|si]] [[they|ellos]] [[finish|terminan]] [[homework|deberes]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[If you finish your homework early I will let you go out|Si terminas los deberes temprano te dejaré salir]]".',
  },
  {
    question: '[[If|Si]] [[it|va]] [[rains|llueve]], [[they|ellos]] [[will|irán]] [[go|ir]] [[to|a]] [[the|el]] [[park|parque]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'False',
    explanation: '[[False|Falso]]. [[They|Ellos]] [[will|se]] [[stay|quedarán]] [[at|en]] [[home|casa]] [[if|si]] [[it|va]] [[rains|llueve]].',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[promises|promete]] [[to|a]] [[come|venir]] [[if|si]] [[the|el]] [[listener|oyente]] [[needs|necesita]] [[help|ayuda]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. "[[If you need help just call me and I will come|Si necesitas ayuda solo llámame y vendré]]".',
  },
  {
    question: '[[The|El]] [[speaker|hablante]] [[will|comprará]] [[buy|comprar]] [[a|un]] [[present|regalo]] [[only|solo]] [[if|si]] [[the|el]] [[child|niño]] [[passes|aprueba]] [[the|el]] [[exam|examen]].',
    options: ['[[True|Verdadero]]', '[[False|Falso]]'],
    correctAnswer: 'True',
    explanation: '[[True|Verdadero]]. [[The|La]] [[condition|condición]] [[is|es]] [[pass|aprobar]] [[the|el]] [[exam|examen]].',
  },
  {
    question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?',
    options: ['[[Past|Eventos]] [[events|pasados]]', '[[Conditions|Condiciones]] [[and|y]] [[results|resultados]] [[in|en]] [[the|el]] [[future|futuro]]', '[[Weather|Tiempo]]', '[[Shopping|Compras]]'],
    correctAnswer: 1,
    explanation: '[[The|El]] [[audio|audio]] [[uses|usa]] [[first|primer]] [[conditional|condicional]]: [[if|si]] + [[condition|condición]] → [[result|resultado]].',
  },
  {
    question: '[[In|En]] [[the|el]] [[first|primer]] [[conditional|condicional]], [[what|qué]] [[tense|tiempo]] [[follows|sigue]] [[will|will]]?',
    options: ['[[past|pasado]] [[participle|participio]]', '[[infinitive|infinitivo]]', '[[gerund|gerundio]]', '[[past|pasado]] [[simple|simple]]'],
    correctAnswer: 1,
    explanation: '[[Will|Will]] + [[infinitive|infinitivo]] ([[without|sin]] [[to|a]]): [[will stay|quedaré]], [[will go|iré]].',
  },
  {
    question: '[[How many|Cuántas]] [[conditions|condiciones]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?',
    options: ['[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'],
    correctAnswer: 3,
    explanation: '[[Homework|Deberes]], [[rain|lluvia]], [[exam|examen]], [[bus|autobús]], [[help|ayuda]] = [[5|cinco]] [[conditions|condiciones]].',
  },
  {
    question: '[[Which|Cuál]] [[phrase|frase]] [[shows|muestra]] [[a|una]] [[promise|promesa]]?',
    options: ['[[If it rains|Si llueve]]', '[[I will come|Vendré]]', '[[the bus is late|el autobús llega tarde]]', '[[you pass|apruebas]]'],
    correctAnswer: 1,
    explanation: '[[I will come|Vendré]] = [[promise|promesa]] [[when|cuando]] [[you|tú]] [[call|llames]].',
  },
  {
    question: '[[What|Qué]] [[will|hará]] [[the|el]] [[speaker|hablante]] [[do|hacer]] [[if|si]] [[the|el]] [[listener|oyente]] [[calls|llama]] [[for|por]] [[help|ayuda]]?',
    options: ['[[wait|esperar]]', '[[come|venir]]', '[[buy|comprar]]', '[[stay|quedarse]]'],
    correctAnswer: 1,
    explanation: '[[He|Él]] [[says|dice]] "[[If you need help just call me and I will come|Si necesitas ayuda solo llámame y vendré]]".',
  },
];

export const UNIT_26_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u26-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'First Conditional',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: {
    title: LESSON_TITLE,
    instructions: INSTRUCTIONS,
    questions: [q],
  },
  topicName: 'Listening',
}));
