/**
 * Unidad 41 — Lección 3: Comprensión lectora (Present Perfect: Life Experiences)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have|he]] [[been|estado]] [[to|a]] [[many|muchos]] [[countries|países]] [[in|en]] [[my|mi]] [[life|vida]]. [[I|Yo]] [[have|he]] [[visited|visitado]] [[Paris|París]] [[twice|dos veces]] [[and|y]] [[London|Londres]] [[three|tres]] [[times|veces]]. [[I|Yo]] [[have|he]] [[tried|probado]] [[Italian|italiana]], [[Japanese|japonesa]] [[and|y]] [[Chinese|china]] [[food|comida]]. [[I|Yo]] [[have|he]] [[never|nunca]] [[been|estado]] [[to|a]] [[Australia|Australia]] [[but|pero]] [[I|yo]] [[want|quiero]] [[to|a]] [[go|ir]] [[one|algún]] [[day|día]]. [[My|Mi]] [[sister|hermana]] [[has|ha]] [[also|también]] [[travelled|viajado]] [[a lot|mucho]]. [[She|Ella]] [[has|ha]] [[been|estado]] [[to|a]] [[Africa|África]] [[and|y]] [[South America|Sudamérica]]. [[We|Nosotros]] [[both|ambos]] [[love|amamos]] [[exploring|explorar]] [[new|nuevos]] [[places|lugares]] [[and|y]] [[having|tener]] [[new|nuevas]] [[experiences|experiencias]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How many|Cuántos]] [[countries|países]] [[has|ha]] [[the|el]] [[writer|autor]] [[been to|estado en]]?', options: ['[[Few|Pocos]]', '[[Many|Muchos]]', '[[One|Uno]]', '[[Two|Dos]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have been to many countries|He estado en muchos países]]".' },
  { question: '[[How many|Cuántas]] [[times|veces]] [[has|ha]] [[the|el]] [[writer|autor]] [[visited|visitado]] [[Paris|París]]?', options: ['[[Once|Una vez]]', '[[Twice|Dos veces]]', '[[Three times|Tres veces]]', '[[Four times|Cuatro veces]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have visited Paris twice|He visitado París dos veces]]".' },
  { question: '[[How many|Cuántas]] [[times|veces]] [[has|ha]] [[the|el]] [[writer|autor]] [[visited|visitado]] [[London|Londres]]?', options: ['[[Once|Una vez]]', '[[Twice|Dos veces]]', '[[Three times|Tres veces]]', '[[Never|Nunca]]'], correctAnswer: 2, explanation: '[[He|Él]] [[says|dice]] "[[London three times|Londres tres veces]]".' },
  { question: '[[What|Qué]] [[types|tipos]] [[of|de]] [[food|comida]] [[has|ha]] [[the|el]] [[writer|autor]] [[tried|probado]]?', options: ['[[Only|Solo]] [[Italian|italiana]]', '[[Italian|Italiana]], [[Japanese|japonesa]] [[and|y]] [[Chinese|china]]', '[[French|Francesa]] [[only|solo]]', '[[No|Ninguna]] [[food|comida]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have tried Italian, Japanese and Chinese food|He probado comida italiana, japonesa y china]]".' },
  { question: '[[Has|Ha]] [[the|el]] [[writer|autor]] ____ ____ ____ [[Australia|Australia]]?', options: ['[[been to|estado en]]', '[[never been to|nunca estado en]]', '[[visited|visitado]]', '[[lived in|vivido en]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have never been to Australia|Nunca he estado en Australia]]".' },
  { question: '[[Does|Quiere]] [[the|el]] [[writer|autor]] ____ ____ ____ [[Australia|Australia]]?', options: ['[[want to go to|ir a]]', '[[not want to go to|no ir a]]', '[[hate|odiar]]', '[[forget|olvidar]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I want to go one day|Quiero ir algún día]]".' },
  { question: '[[Who|Quién]] [[has|ha]] [[also|también]] [[travelled|viajado]] [[a lot|mucho]]?', options: ['[[His|Su]] [[brother|hermano]]', '[[His|Su]] [[sister|hermana]]', '[[His|Su]] [[friend|amigo]]', '[[Nobody|Nadie]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[My sister has also travelled a lot|Mi hermana también ha viajado mucho]]".' },
  { question: '[[Where|Dónde]] [[has|ha]] [[the|la]] [[sister|hermana]] [[been|estado]]?', options: ['[[Asia|Asia]] [[only|solo]]', '[[Africa|África]] [[and|y]] [[South America|Sudamérica]]', '[[Europe|Europa]] [[only|solo]]', '[[Australia|Australia]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[has been to|ha estado en]] [[Africa and South America|África y Sudamérica]].' },
  { question: '[[What|Qué]] [[do|hacen]] [[they|ellos]] [[love|aman]]?', options: ['[[Staying|Quedarse]] [[at home|en casa]]', '[[Exploring|Explorar]] [[new places|nuevos lugares]] [[and|y]] [[having new experiences|tener nuevas experiencias]]', '[[Watching TV|Ver la tele]]', '[[Sleeping|Dormir]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We both love exploring new places and having new experiences|Ambos amamos explorar nuevos lugares y tener nuevas experiencias]]".' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[Present Perfect|Presente Perfecto]] [[for|para]] [[life|experiencias de]] [[experiences|vida]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[He|Él]] [[describes|describe]] [[experiences|experiencias]] [[in|en]] [[his|su]] [[life|vida]].' },
  { question: '[[The|El]] [[writer|autor]] [[has|ha]] ____ ____ ____ [[Australia|Australia]].', options: ['[[been to|estado en]]', '[[never been to|nunca estado en]]', '[[lived in|vivido en]]', '[[loved|amado]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have never been to Australia|Nunca he estado en Australia]]".' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Life|Experiencias de]] [[experiences|vida]] [[and|y]] [[travel|viajes]]', '[[Work|Trabajo]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[travel|viajes]] [[and|y]] [[life|experiencias de]] [[experiences|vida]].' },
  { question: '[[How many|Cuántos]] [[continents|continentes]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|mencionar]]?', options: ['[[One|Uno]]', '[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]'], correctAnswer: 2, explanation: '[[Europe|Europa]] ([[Paris|París]], [[London|Londres]]), [[Australia|Australia]], [[Africa|África]], [[South America|Sudamérica]].' },
  { question: '[[The|El]] [[writer|autor]] [[and|y]] [[his|su]] [[sister|hermana]] ____ ____ ____ [[travelling|viajar]].', options: ['[[love|aman]]', '[[hate|odian]]', '[[never|nunca]]', '[[sometimes|a veces]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[both love|ambos aman]] [[exploring|explorar]] [[new places|nuevos lugares]].' },
  { question: '[[Which|Cuál]] [[tense|tiempo]] [[does|usa]] [[the|el]] [[writer|autor]] [[use|usar]] [[most|más]]?', options: ['[[Past Simple|Pasado Simple]]', '[[Present Perfect|Presente Perfecto]]', '[[Future|Futuro]]', '[[Present Simple|Presente Simple]]'], correctAnswer: 1, explanation: '[[Present Perfect|Presente Perfecto]] [[for|para]] [[life|experiencias de]] [[experiences|vida]].' },
];

export const UNIT_41_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u41-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect: Life Experiences',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
