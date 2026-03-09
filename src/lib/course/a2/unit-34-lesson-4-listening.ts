/**
 * Unidad 34 — Lección 4: Comprensión auditiva (Future with 'Will': Offers & Promises)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Mum|Mamá]], [[I|yo]] [[need|necesito]] [[help|ayuda]] [[with|con]] [[my|mi]] [[homework|deberes]]. [[I|Yo]] [[will|te]] [[help|ayudaré]] [[you|te]] [[with|con]] [[that|eso]]. [[I|Yo]] [[will|te]] [[call|llamaré]] [[you|te]] [[when|cuando]] [[I|yo]] [[finish|termine]]. [[I|Yo]] [[will|te]] [[get|conseguiré]] [[you|te]] [[a|un]] [[snack|tentempié]] [[first|primero]]. [[Thanks|Gracias]] [[Mum|mamá]]! [[I|Yo]] [[will|nunca]] [[never|olvidaré]] [[forget|olvidar]] [[to|a]] [[do|hacer]] [[my|mis]] [[homework|deberes]] [[again|de nuevo]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Quién]] [[needs|necesita]] [[help|ayuda]]?', options: ['[[The|El]] [[mother|madre]]', '[[The|El]] [[child|niño]]', '[[The|El]] [[teacher|profesor]]', '[[The|El]] [[father|padre]]'], correctAnswer: 1, explanation: '[[The|El]] [[child|niño]] [[says|dice]] "[[I need help|Necesito ayuda]]".' },
  { question: '[[What|Con qué]] [[does|necesita]] [[the|el]] [[child|niño]] [[need|ayuda]] [[help|?]]', options: ['[[cleaning|limpieza]]', '[[homework|deberes]]', '[[cooking|cocina]]', '[[shopping|compras]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[help with my homework|ayuda con mis deberes]]".' },
  { question: '[[What|Qué]] [[does|ofrece]] [[the|la]] [[mother|madre]] [[offer|la madre]] [[to|a]] [[do|hacer]] [[first|primero]]?', options: ['[[help|ayudar]] [[with|con]] [[homework|deberes]]', '[[get|conseguir]] [[a|un]] [[snack|tentempié]]', '[[call|llamar]]', '[[cook|cocinar]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I will get you a snack first|Te conseguiré un tentempié primero]]".' },
  { question: '[[What|Qué]] [[will|hará]] [[the|la]] [[mother|madre]] [[do|la madre]] [[when|cuando]] [[the|el]] [[child|niño]] [[finishes|termine]]?', options: ['[[rest|descansar]]', '[[call|llamar]] [[the|al]] [[child|niño]]', '[[cook|cocinar]]', '[[go out|salir]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[says|dice]] "[[I will call you when I finish|Te llamaré cuando termine]]".' },
  { question: '[[The|La]] [[mother|madre]] [[uses|usa]] [[will|will]] [[for|para]] [[offers|ofertas]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[offers|ofrece]] [[to|a]] [[help|ayudar]] [[and|y]] [[get|conseguir]] [[snack|tentempié]].' },
  { question: '[[The|El]] [[child|niño]] [[makes|hace]] [[a|una]] [[promise|promesa]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[I will never forget to do my homework again|Nunca olvidaré hacer mis deberes de nuevo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[audio|audio]]?', options: ['[[Weather|Tiempo]]', '[[Offers|Ofertas]] [[and|y]] [[promises|promesas]] [[with|con]] [[will|will]]', '[[Shopping|Compras]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[offers|ofertas]] [[and|y]] [[promises|promesas]].' },
  { question: '[[The|El]] [[child|niño]] [[says|dice]] [[thanks|gracias]] [[to|a]] [[his|su]] [[mother|madre]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[says|dice]] "[[Thanks Mum|Gracias mamá]]".' },
  { question: '[[How many|Cuántas]] [[offers|ofertas]] [[does|hace]] [[the|la]] [[mother|madre]] [[make|la madre]]?', options: ['[[one|una]]', '[[two|dos]]', '[[three|tres]]', '[[four|cuatro]]'], correctAnswer: 1, explanation: '[[Two|Dos]]: [[help|ayudar]] [[with|con]] [[homework|deberes]], [[get snack|conseguir tentempié]].' },
  { question: '[[The|El]] [[child|niño]] [[promises|promete]] [[to|a]] ____ [[do|hacer]] ____ [[homework|deberes]] ____ [[again|de nuevo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[promises|promete]] [[never|nunca]] [[to|a]] [[forget|olvidar]] [[homework|deberes]].' },
  { question: '[[Will|Usa]] [[the|la]] [[mother|madre]] [[use|la madre]] [[will|will]] [[for|para]] ____ [[spontaneous|espontáneas]] ____ [[offers|ofertas]]?', options: ['[[Yes|Sí]]', '[[No|No]]'], correctAnswer: 0, explanation: '[[Yes|Sí]]. [[She|Ella]] [[offers|ofrece]] [[immediately|inmediatamente]] [[when|cuando]] [[the|el]] [[child|niño]] [[asks|pide]].' },
  { question: '[[What|Qué]] [[does|hará]] [[the|el]] [[child|niño]] [[do|el niño]] [[after|después]] [[getting|conseguir]] [[the|el]] [[snack|tentempié]]?', options: ['[[play|jugar]]', '[[do|hacer]] [[homework|deberes]]', '[[sleep|dormir]]', '[[watch TV|ver la tele]]'], correctAnswer: 1, explanation: '[[The|El]] [[context|contexto]] [[suggests|sugiere]] [[he|él]] [[will|hará]] [[do|sus]] [[homework|deberes]].' },
  { question: '[[The|La]] [[mother|madre]] [[is|está]] [[kind|amable]] [[and|y]] [[helpful|servicial]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[She|Ella]] [[offers|ofrece]] [[help|ayuda]] [[and|y]] [[gets|consigue]] [[snack|tentempié]].' },
  { question: '[[Where|Dónde]] [[does|tiene lugar]] [[this|esta]] [[conversation|conversación]] [[take|la]] [[place|?]]', options: ['[[At|En]] [[school|el colegio]]', '[[At|En]] [[home|casa]]', '[[At|En]] [[a|un]] [[shop|tienda]]', '[[At|En]] [[the|el]] [[park|parque]]'], correctAnswer: 1, explanation: '[[At|En]] [[home|casa]] — [[child|niño]] [[asks|pide]] [[mum|mamá]] [[for|por]] [[help|ayuda]].' },
  { question: '[[The|El]] [[child|niño]] [[will|hará]] ____ ____ ____ ____ [[forget|olvidar]] ____ ____ ____ ____ [[homework|deberes]] ____ ____ ____ ____ [[again|de nuevo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[He|Él]] [[promises|promete]] "[[I will never forget|Nunca olvidaré]]".' },
];

export const UNIT_34_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u34-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: "Future with 'Will': Offers & Promises",
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
