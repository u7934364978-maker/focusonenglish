/**
 * Unidad 44 — Lección 3: Comprensión lectora (Present Perfect: For & Since)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[I|Yo]] [[have|he]] [[lived|vivido]] [[in|en]] [[this|esta]] [[city|ciudad]] [[for|durante]] [[ten|diez]] [[years|años]]. [[I|Yo]] [[have|he]] [[worked|trabajado]] [[at|en]] [[the|la]] [[same|misma]] [[company|empresa]] [[since|desde]] [[2015|2015]]. [[My|Mi]] [[wife|esposa]] [[and|y]] [[I|yo]] [[have|hemos]] [[known|conocido]] [[each other|el uno al otro]] [[for|durante]] [[a long time|mucho tiempo]]. [[We|Nosotros]] [[have|hemos]] [[been|estado]] [[married|casados]] [[for|durante]] [[seven|siete]] [[years|años]]. [[She|Ella]] [[has|ha]] [[lived|vivido]] [[in|en]] [[London|Londres]] [[since|desde]] [[childhood|infancia]]. [[I|Yo]] [[have|he]] [[not|no]] [[seen|visto]] [[my|mi]] [[brother|hermano]] [[for|desde hace]] [[a long time|mucho tiempo]]. [[He|Él]] [[has|ha]] [[lived|vivido]] [[in|en]] [[Paris|París]] [[since|desde]] [[March|marzo]]. [[We|Nosotros]] [[have|hemos]] [[not|no]] [[spoken|hablado]] [[since|desde]] [[Christmas|Navidad]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[How long|Cuánto tiempo]] [[has|ha]] [[the|el]] [[writer|autor]] ____ ____ ____ [[in|en]] [[this|esta]] [[city|ciudad]]?', options: ['[[lived|vivido]] [[for ten years|durante diez años]]', '[[lived|vivido]] [[for five years|durante cinco años]]', '[[lived|vivido]] [[for two years|durante dos años]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[I have lived in this city for ten years|He vivido en esta ciudad durante diez años]]".' },
  { question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] ____ ____ ____ [[at|en]] [[the|la]] [[company|empresa]]?', options: ['[[he worked|él trabajado]] [[2015|2015]]', '[[he worked|él trabajado]] [[2020|2020]]', '[[he worked|él trabajado]] [[2010|2010]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have worked at the same company since 2015|He trabajado en la misma empresa desde 2015]]".' },
  { question: '[[How long|Cuánto tiempo]] [[have|han]] ____ ____ ____ ____ ____ ____ [[each other|el uno al otro]]?', options: ['[[they known|ellos conocido]] [[for a long time|durante mucho tiempo]]', '[[they known|ellos conocido]] [[for five years|durante cinco años]]', '[[they known|ellos conocido]] [[for one year|durante un año]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We have known each other for a long time|Nos conocemos desde hace mucho tiempo]]".' },
  { question: '[[How long|Cuánto tiempo]] [[have|han]] ____ ____ ____ ____ ____ ____ [[married|casados]]?', options: ['[[they been|ellos estado]] [[for seven years|durante siete años]]', '[[they been|ellos estado]] [[for ten years|durante diez años]]', '[[they been|ellos estado]] [[for five years|durante cinco años]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We have been married for seven years|Hemos estado casados durante siete años]]".' },
  { question: '[[Since|Desde]] [[when|cuándo]] [[has|ha]] ____ ____ ____ ____ ____ ____ [[in|en]] [[London|Londres]]?', options: ['[[his wife lived|su esposa vivido]] [[childhood|infancia]]', '[[his wife lived|su esposa vivido]] [[2010|2010]]', '[[his wife lived|su esposa vivido]] [[last year|el año pasado]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has|ha]] [[lived|vivido]] [[in London since childhood|en Londres desde la infancia]].' },
  { question: '[[For|For]] [[is|se]] [[used|usa]] [[with|con]] [[periods|períodos]] [[of time|de tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[For|For]] + [[five years|cinco años]], [[a long time|mucho tiempo]], [[etc|etc]].' },
  { question: '[[Since|Since]] [[is|se]] [[used|usa]] [[with|con]] [[points|puntos]] [[in time|en el tiempo]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Since|Since]] + [[2015|2015]], [[Monday|lunes]], [[childhood|infancia]], [[etc|etc]].' },
  { question: '[[Where|Dónde]] [[has|ha]] ____ ____ ____ ____ ____ ____ [[lived|vivido]] [[since|desde]] [[March|marzo]]?', options: ['[[the writer\'s brother|el hermano del autor]] [[in Paris|en París]]', '[[the writer|el autor]] [[in Paris|en París]]', '[[the wife|la esposa]] [[in Paris|en París]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[He has lived in Paris since March|Ha vivido en París desde marzo]]".' },
  { question: '[[What|Cuál]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|del]] [[this|este]] [[text|texto]]?', options: ['[[Work|Trabajo]]', '[[Duration|Duración]] [[with|con]] [[for|for]] [[and|y]] [[since|since]]', '[[Travel|Viajes]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[duration|duración]] [[with|con]] [[for|for]] [[and|y]] [[since|since]].' },
  { question: '[[When|Cuándo]] [[did|hablaron]] ____ ____ ____ ____ ____ ____ [[last|por última vez]]?', options: ['[[they last speak|ellos hablar]] [[at Christmas|en Navidad]]', '[[they last speak|ellos hablar]] [[last year|el año pasado]]', '[[they last speak|ellos hablar]] [[yesterday|ayer]]'], correctAnswer: 0, explanation: '[[They|Ellos]] [[have not spoken since Christmas|no han hablado desde Navidad]].' },
  { question: '[[The|El]] [[writer|autor]] ____ ____ ____ ____ ____ ____ [[his|su]] [[brother|hermano]] ____ ____ ____.', options: ['[[has not seen|no ha visto]] [[for a long time|desde hace mucho tiempo]]', '[[has seen|ha visto]] [[recently|recientemente]]', '[[saw|vió]] [[yesterday|ayer]]'], correctAnswer: 0, explanation: '[[He|Él]] [[says|dice]] "[[I have not seen my brother for a long time|No he visto a mi hermano desde hace mucho tiempo]]".' },
  { question: '[[For|For]] [[+ period|+ período]] [[means|significa]] [[during|durante]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[For ten years|Durante diez años]] = [[for|for]] + [[period|período]].' },
  { question: '[[Since|Since]] [[+ point|+ punto]] [[means|significa]] [[from|desde]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[Since 2015|Desde 2015]] = [[since|since]] + [[point|punto]] [[in time|en el tiempo]].' },
  { question: '[[How many|Cuántas]] [[people|personas]] [[are|están]] [[mentioned|mencionadas]] [[in|en]] [[the|el]] [[text|texto]]?', options: ['[[three|tres]]', '[[four|cuatro]]', '[[five|cinco]]'], correctAnswer: 1, explanation: '[[Four|Cuatro]]: [[writer|autor]], [[wife|esposa]], [[brother|hermano]], [[and implied|y implícito]] [[each other|el uno al otro]].' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[Present Perfect|Presente Perfecto]] [[with|con]] ____ ____ ____.', options: ['[[for and since|for y since]]', '[[just and already|just y already]]', '[[ever and never|ever y never]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[focuses|se centra]] [[on|en]] [[for|for]] [[and|y]] [[since|since]].' },
];

export const UNIT_44_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u44-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect: For & Since',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
