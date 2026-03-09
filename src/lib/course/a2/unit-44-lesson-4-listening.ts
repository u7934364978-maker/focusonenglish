/**
 * Unidad 44 — Lección 4: Comprensión auditiva (Present Perfect: For & Since)
 * 15 actividades: 1 audio + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[I|Yo]] [[have|he]] [[lived|vivido]] [[in|en]] [[this|esta]] [[city|ciudad]] [[for|durante]] [[ten|diez]] [[years|años]]. [[I|Yo]] [[have|he]] [[worked|trabajado]] [[at|en]] [[the|la]] [[same|misma]] [[company|empresa]] [[since|desde]] [[2015|2015]]. [[My|Mi]] [[best|mejor]] [[friend|amigo]] [[has|ha]] [[lived|vivido]] [[here|aquí]] [[since|desde]] [[childhood|infancia]]. [[We|Nosotros]] [[have|hemos]] [[known|conocido]] [[each other|el uno al otro]] [[for|durante]] [[twenty|veinte]] [[years|años]]. [[My|Mi]] [[sister|hermana]] [[has|ha]] [[been|estado]] [[married|casada]] [[for|durante]] [[five|cinco]] [[years|años]]. [[She|Ella]] [[has|ha]] [[had|tenido]] [[her|su]] [[job|trabajo]] [[since|desde]] [[January|enero]] [[2020|2020]]. [[I|Yo]] [[have not|no he]] [[seen|visto]] [[her|a ella]] [[for|desde hace]] [[a long time|mucho tiempo]] [[because|porque]] [[she|ella]] [[lives|vive]] [[abroad|en el extranjero]].`;

const INSTRUCTIONS = 'Escucha el audio de abajo. Puedes leer la transcripción después de escuchar. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has|ha]] [[the|el]] [[speaker|hablante]] [[lived|vivido]] [[in|en]] [[this|esta]] [[city|ciudad]]?', options: ['[[Five years|Cinco años]]', '[[Ten years|Diez años]]', '[[Twenty years|Veinte años]]', '[[Two years|Dos años]]'], correctAnswer: 1, explanation: '[[He|Él]] [[says|dice]] "[[I have lived here for ten years|He vivido aquí durante diez años]]".' },
  { question: '[[Since|Desde]] ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[when has the speaker worked at the company|cuándo trabaja el hablante en la empresa]]', '[[2015|2015]]', '[[2020|2020]]', '[[2010|2010]]'], correctAnswer: 1, explanation: '[[He|Él]] [[has worked since 2015|trabaja desde 2015]].' },
  { question: '[[Since|Desde]] ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[when has the best friend lived here|cuándo ha vivido el mejor amigo aquí]]', '[[Childhood|Infancia]]', '[[2015|2015]]', '[[Ten years ago|Hace diez años]]'], correctAnswer: 0, explanation: '[[The|El]] [[best friend|mejor amigo]] [[has lived here since childhood|ha vivido aquí desde la infancia]].' },
  { question: '[[How long|Cuánto tiempo]] [[have|han]] ____ ____ ____ ____ ____?', options: ['[[they known each other|ellos conocido el uno al otro]]', '[[Twenty years|Veinte años]]', '[[Ten years|Diez años]]', '[[Five years|Cinco años]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[have known each other for twenty years|se conocen desde hace veinte años]].' },
  { question: '[[How long|Cuánto tiempo]] [[has|ha]] ____ ____ ____ ____ ____?', options: ['[[the sister been married|la hermana estado casada]]', '[[Five years|Cinco años]]', '[[Ten years|Diez años]]', '[[Twenty years|Veinte años]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has been married for five years|ha estado casada durante cinco años]].' },
  { question: '[[Since|Desde]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____?', options: ['[[when has the sister had her job|cuándo tiene la hermana su trabajo]]', '[[January 2020|Enero 2020]]', '[[January 2015|Enero 2015]]', '[[Five years ago|Hace cinco años]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has had her job since January 2020|tiene su trabajo desde enero 2020]].' },
  { question: '[[Why|Por qué]] [[has|ha]] ____ ____ ____ ____ ____ ____?', options: ['[[the speaker not seen his sister|el hablante no visto a su hermana]]', '[[For a long time because she lives abroad|Desde hace mucho tiempo porque vive en el extranjero]]', '[[Because she is busy|Porque está ocupada]]', '[[Because they argued|Porque discutieron]]'], correctAnswer: 0, explanation: '[[Because|Porque]] [[she lives abroad|ella vive en el extranjero]].' },
  { question: '[[For|For]] [[is used with|se usa con]]?', options: ['[[A period of time|Un período de tiempo]]', '[[A point in time|Un punto en el tiempo]]', '[[A place|Un lugar]]', '[[A person|Una persona]]'], correctAnswer: 0, explanation: '[[For|For]] + [[period|período]] ([[ten years|diez años]], [[five years|cinco años]]).' },
  { question: '[[Since|Since]] [[is used with|se usa con]]?', options: ['[[A point in time|Un punto en el tiempo]]', '[[A period of time|Un período de tiempo]]', '[[A place|Un lugar]]', '[[A person|Una persona]]'], correctAnswer: 0, explanation: '[[Since|Since]] + [[point|punto]] ([[2015|2015]], [[childhood|infancia]], [[January 2020|enero 2020]]).' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[audio|audio]] [[is|es]]?', options: ['[[Travel|Viajes]]', '[[Duration with for and since|Duración con for y since]]', '[[Food|Comida]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The|El]] [[audio|audio]] [[is|es]] [[about|sobre]] [[duration|duración]] [[with for and since|con for y since]].' },
  { question: '[[How many|Cuántas]] [[people|personas]] [[does|menciona]] [[the|el]] [[speaker|hablante]] [[mention|mencionar]]?', options: ['[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]', '[[Five|Cinco]]'], correctAnswer: 2, explanation: '[[Speaker|Hablante]], [[best friend|mejor amigo]], [[sister|hermana]].' },
  { question: '[[Where|Dónde]] ____ ____ ____ ____?', options: ['[[does the sister live|vive la hermana]]', '[[Abroad|En el extranjero]]', '[[In the same city|En la misma ciudad]]', '[[Near the speaker|Cerca del hablante]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[lives abroad|vive en el extranjero]].' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[speaker uses Present Perfect with for and since|hablante usa Presente Perfecto con for y since]]', '[[speaker uses only Past Simple|hablante usa solo Pasado Simple]]', '[[speaker uses only Future|hablante usa solo Futuro]]', '[[speaker uses no grammar|hablante no usa gramática]]'], correctAnswer: 0, explanation: '[[For|For]] [[and|y]] [[since|since]] [[with|con]] [[Present Perfect|Presente Perfecto]].' },
  { question: '[[Which|Cuál]] [[word|palabra]] [[indicates|indica]] [[a period|un período]] [[of time|de tiempo]]?', options: ['[[Since|Since]]', '[[For|For]]', '[[At|At]]', '[[On|On]]'], correctAnswer: 1, explanation: '[[For|For]] = [[period|período]] ([[ten years|diez años]], [[five years|cinco años]]).' },
  { question: '[[The|El]] ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____ ____.', options: ['[[speaker has not seen his sister for a long time|hablante no ha visto a su hermana desde hace mucho tiempo]]', '[[speaker sees his sister every day|hablante ve a su hermana cada día]]', '[[speaker has just seen his sister|hablante acaba de ver a su hermana]]', '[[speaker never met his sister|hablante nunca conoció a su hermana]]'], correctAnswer: 0, explanation: '[[He|Él]] [[has not seen her for a long time|no la ha visto desde hace mucho tiempo]].' },
];

export const UNIT_44_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u44-l4-l${i + 1}`,
  type: 'listening',
  level: 'A2',
  topic: 'Present Perfect: For & Since',
  difficulty: 'easy',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
