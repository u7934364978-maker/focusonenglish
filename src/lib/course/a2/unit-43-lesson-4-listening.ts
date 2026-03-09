/**
 * Unidad 43 — Lección 4: Comprensión auditiva (Present Perfect: Just, Already, Yet)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]] [[Mum|Mamá]]! [[I|Yo]] [[have|he]] [[just|acabo]] [[woken up|despertado]] [[and|y]] [[I|yo]] [[am|estoy]] [[very|muy]] [[tired|cansado]]. [[I|Yo]] [[have|he]] [[already|ya]] [[had|tomado]] [[my|mi]] [[coffee|café]] [[but|pero]] [[I|yo]] [[have not|no he]] [[eaten|comido]] [[breakfast|desayuno]] [[yet|aún]]. [[My|Mi]] [[sister|hermana]] [[has|ha]] [[just|acaba]] [[arrived|llegado]] [[from|de]] [[work|trabajo]]. [[She|Ella]] [[has|ha]] [[already|ya]] [[finished|terminado]] [[her|sus]] [[report|informe]] [[for|para]] [[today|hoy]]. [[We|Nosotros]] [[have not|no hemos]] [[had|tenido]] [[lunch|almuerzo]] [[yet|aún]] [[because|porque]] [[we|nosotros]] [[are|estamos]] [[waiting|esperando]] [[for|a]] [[our|nuestros]] [[parents|padres]]. [[They|Ellos]] [[have|han]] [[just|acaban]] [[left|salido]] [[the|del]] [[supermarket|supermercado]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who|Con quién]] [[is|está]] [[the|el]] [[speaker|hablante]] [[talking|hablando]]?', options: ['[[His|Su]] [[friend|amigo]]', '[[His|Su]] [[mum|mamá]]', '[[His|Su]] [[sister|hermana]]', '[[His|Su]] [[dad|padre]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[Hi Mum|Hola Mamá]]".' },
  { question: '[[What|Qué]] [[has|ha]] [[the|el]] [[speaker|hablante]] ____ ____ ____?', options: ['[[just woken up|acabo de despertar]]', '[[just eaten|acabo de comer]]', '[[just left|acabo de salir]]', '[[just finished|acabo de terminar]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have just woken up|Acabo de despertar]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____?', options: ['[[had coffee already|tomado café ya]]', '[[had breakfast already|tomado desayuno ya]]', '[[had lunch already|tomado almuerzo ya]]', '[[had dinner already|tomado cena ya]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have already had my coffee|Ya he tomado mi café]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[speaker|hablante]] ____ ____ ____ ____?', options: ['[[eaten breakfast yet|comido desayuno aún]]', '[[not eaten breakfast yet|no comido desayuno aún]]', '[[eaten lunch yet|comido almuerzo aún]]', '[[finished work yet|terminado trabajo aún]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have not eaten breakfast yet|No he comido desayuno aún]]".' },
  { question: '[[What|Qué]] [[has|ha]] [[the|la]] [[sister|hermana]] ____ ____ ____?', options: ['[[just arrived|acaba de llegar]]', '[[just left|acaba de salir]]', '[[just eaten|acaba de comer]]', '[[just slept|acaba de dormir]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has just arrived from work|acaba de llegar del trabajo]].' },
  { question: '[[Has|Ha]] [[the|la]] [[sister|hermana]] ____ ____ ____ ____?', options: ['[[already finished her report|ya terminado su informe]]', '[[not finished her report yet|no terminado su informe aún]]', '[[just started her report|acabo de empezar su informe]]', '[[never written a report|nunca escrito un informe]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has already finished her report|ya ha terminado su informe]].' },
  { question: '[[Have|Han]] [[they|ellos]] ____ ____ ____ ____?', options: ['[[had lunch yet|tomado almuerzo aún]]', '[[not had lunch yet|no tomado almuerzo aún]]', '[[had breakfast yet|tomado desayuno aún]]', '[[had dinner yet|tomado cena aún]]'], correctAnswer: 1, explanation: '[[They|Ellos]] [[have not had lunch yet|no han tomado almuerzo aún]].' },
  { question: '[[Who|A quiénes]] [[are|están]] [[they|ellos]] ____ ____ ____?', options: ['[[waiting for their parents|esperando a sus padres]]', '[[waiting for friends|esperando a amigos]]', '[[waiting for the bus|esperando el autobús]]', '[[waiting for dinner|esperando la cena]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[are waiting for their parents|están esperando a sus padres]].' },
  { question: '[[Where|Dónde]] [[have|han]] ____ ____ ____ ____ ____?', options: ['[[the parents just left|los padres acaban de salir]]', '[[The supermarket|El supermercado]]', '[[The office|La oficina]]', '[[The school|La escuela]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[They have just left the supermarket|Acaban de salir del supermercado]]".' },
  { question: '[[Just|Just]] [[means|significa]]?', options: ['[[Very recently|Muy recientemente]]', '[[A long time ago|Hace mucho tiempo]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 0, explanation: '[[Just|Just]] = [[very recently|muy recientemente]].' },
  { question: '[[Already|Already]] [[means|significa]]?', options: ['[[Before expected|Antes de lo esperado]]', '[[Never|Nunca]]', '[[Later|Más tarde]]', '[[Sometimes|A veces]]'], correctAnswer: 0, explanation: '[[Already|Already]] = [[before expected|antes de lo esperado]].' },
  { question: '[[Yet|Yet]] [[in|en]] [[negatives|negativas]] [[means|significa]]?', options: ['[[Until now|Hasta ahora]]', '[[A long time ago|Hace mucho tiempo]]', '[[Never|Nunca]]', '[[Always|Siempre]]'], correctAnswer: 0, explanation: '[[Yet|Yet]] = [[until now|hasta ahora]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Recent actions with just, already, yet|Acciones recientes con just, already, yet]]', '[[Work|Trabajo]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[uses|usa]] [[just|just]], [[already|already]] [[and|y]] [[yet|yet]].' },
  { question: '[[How|Cómo]] [[does|está]] [[the|el]] [[speaker|hablante]] ____ ____?', options: ['[[feel|sintiendo]]', '[[Very tired|Muy cansado]]', '[[Very happy|Muy feliz]]', '[[Very hungry|Muy hambriento]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I am very tired|Estoy muy cansado]]".' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[speaker uses Present Perfect with just, already, yet|hablante usa Presente Perfecto con just, already, yet]]', '[[speaker uses only Past Simple|hablante usa solo Pasado Simple]]', '[[speaker uses only Future|hablante usa solo Futuro]]', '[[speaker uses no grammar|hablante no usa gramática]]'], correctAnswer: 0, explanation: '[[Present Perfect|Presente Perfecto]] [[with|con]] [[just|just]], [[already|already]] [[and|y]] [[yet|yet]].' },
];

export const UNIT_43_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u43-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect: Just, Already, Yet',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
