/**
 * Unidad 42 — Lección 3: Comprensión lectora (Present Perfect: Ever & Never)
 * 15 actividades: 1 texto + 15 preguntas
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Reading|Comprensión lectora]]';
const READING_TRANSCRIPT = `[[Last|La pasada]] [[week|semana]] [[I|yo]] [[asked|pregunté]] [[my|mis]] [[friends|amigos]] [[about|sobre]] [[their|sus]] [[experiences|experiencias]]. [[Have|¿]] [[you|tú]] [[ever|alguna vez]] [[been|estado]] [[to|a]] [[Japan|Japón]]? [[Maria|María]] [[said|dijo]] [[she|ella]] [[has|ha]] [[never|nunca]] [[been|estado]] [[there|allí]] [[but|pero]] [[she|ella]] [[has|ha]] [[tried|probado]] [[sushi|sushi]] [[many|muchas]] [[times|veces]]. [[Tom|Tom]] [[has|ha]] [[ridden|montado]] [[a|una]] [[motorcycle|motocicleta]] [[and|y]] [[he|él]] [[loved|le encantó]] [[it|]]. [[Sarah|Sarah]] [[has|ha]] [[never|nunca]] [[travelled|viajado]] [[alone|sola]] [[abroad|al extranjero]]. [[She|Ella]] [[has|ha]] [[been|estado]] [[on|en]] [[a|un]] [[cruise|crucero]] [[with|con]] [[her|su]] [[family|familia]] [[though|aunque]]. [[We|Nosotros]] [[all|todos]] [[have|tenemos]] [[different|diferentes]] [[experiences|experiencias]] [[in|en]] [[life|la vida]].`;

const INSTRUCTIONS = 'Lee el texto de abajo. Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[When|Cuándo]] [[did|hizo]] [[the|el]] [[writer|autor]] [[ask|preguntar]] [[his|sus]] [[friends|amigos]]?', options: ['[[Yesterday|Ayer]]', '[[Last week|La pasada semana]]', '[[Last month|El pasado mes]]', '[[Last year|El año pasado]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[Last week|La pasada semana]]".' },
  { question: '[[Has|Ha]] [[Maria|María]] ____ ____ ____ [[Japan|Japón]]?', options: ['[[been to|estado en]]', '[[never been to|nunca estado en]]', '[[lived in|vivido en]]', '[[loved|amado]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[said|dijo]] "[[she has never been there|nunca ha estado allí]]".' },
  { question: '[[Has|Ha]] [[Maria|María]] ____ ____ ____ [[sushi|sushi]]?', options: ['[[never tried|nunca probado]]', '[[tried many times|probado muchas veces]]', '[[hated|odiado]]', '[[cooked|cocinado]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[has tried sushi many times|ha probado sushi muchas veces]].' },
  { question: '[[Has|Ha]] [[Tom|Tom]] ____ ____ ____ ____ ____ [[motorcycle|motocicleta]]?', options: ['[[ever ridden a|alguna vez montado una]]', '[[never ridden a|nunca montado una]]', '[[bought a|comprado una]]', '[[sold a|vendido una]]'], correctAnswer: 0, explanation: '[[He|Él]] [[has ever ridden a motorcycle|ha montado alguna vez una motocicleta]].' },
  { question: '[[Did|Le]] [[Tom|Tom]] ____ ____ ____ ____ ____?', options: ['[[love it|encantar]]', '[[hate it|odiar]]', '[[forget it|olvidar]]', '[[sell it|vender]]'], correctAnswer: 0, explanation: '[[He|Él]] [[loved it|le encantó]].' },
  { question: '[[Has|Ha]] [[Sarah|Sarah]] ____ ____ ____ ____ ____ [[abroad|al extranjero]]?', options: ['[[travelled alone|viajado sola]]', '[[never travelled alone|nunca viajado sola]]', '[[lived alone|vivido sola]]', '[[worked alone|trabajado sola]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[has never travelled alone abroad|nunca ha viajado sola al extranjero]].' },
  { question: '[[Has|Ha]] [[Sarah|Sarah]] ____ ____ ____ ____ ____ ____ [[cruise|crucero]]?', options: ['[[been on a|estado en un]]', '[[never been on a|nunca estado en un]]', '[[owned a|poseído un]]', '[[built a|construido un]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[has been on a cruise|ha estado en un crucero]] [[with her family|con su familia]].' },
  { question: '[[Who|Con quién]] [[did|fue]] [[Sarah|Sarah]] ____ ____ ____ ____ ____?', options: ['[[on the cruise with|en el crucero con]] [[her family|su familia]]', '[[alone|sola]]', '[[with Tom|con Tom]]', '[[with Maria|con María]]'], correctAnswer: 0, explanation: '[[She|Ella]] [[went on a cruise with her family|fue en un crucero con su familia]].' },
  { question: '[[The|El]] [[main|principal]] [[topic|tema]] [[of|del]] [[text|texto]] [[is|es]]?', options: ['[[Food|Comida]]', '[[Experiences|Experiencias]] [[with|con]] [[ever|ever]] [[and|y]] [[never|never]]', '[[Work|Trabajo]]', '[[School|Escuela]]'], correctAnswer: 1, explanation: '[[The|El]] [[text|texto]] [[is|es]] [[about|sobre]] [[experiences|experiencias]] [[with ever and never|con ever y never]].' },
  { question: '[[How many|Cuántas]] [[people|personas]] [[does|menciona]] [[the|el]] [[writer|autor]] [[mention|mencionar]]?', options: ['[[One|Una]]', '[[Two|Dos]]', '[[Three|Tres]]', '[[Four|Cuatro]]'], correctAnswer: 2, explanation: '[[Maria|María]], [[Tom|Tom]] [[and|y]] [[Sarah|Sarah]].' },
  { question: '[[We|Todos]] [[all|nosotros]] ____ ____ ____ ____ ____ ____.', options: ['[[have different experiences in life|tenemos diferentes experiencias en la vida]]', '[[have the same experiences|tenemos las mismas experiencias]]', '[[have no experiences|no tenemos experiencias]]', '[[hate experiences|odiamos las experiencias]]'], correctAnswer: 0, explanation: '[[The|El]] [[text|texto]] [[says|dice]] "[[We all have different experiences in life|Todos tenemos diferentes experiencias en la vida]]".' },
  { question: '[[Which|Cuál]] [[word|palabra]] [[is|es]] [[used|usada]] [[for|para]] [[questions|preguntas]] [[about|sobre]] [[experiences|experiencias]]?', options: ['[[Never|Never]]', '[[Ever|Ever]]', '[[Always|Always]]', '[[Sometimes|Sometimes]]'], correctAnswer: 1, explanation: '[[Ever|Ever]] [[in|en]] [[questions|preguntas]] = [[at any time|en algún momento]].' },
  { question: '[[Which|Cuál]] [[word|palabra]] [[is|es]] [[used|usada]] [[for|para]] [[negative|negativas]] [[experiences|experiencias]]?', options: ['[[Ever|Ever]]', '[[Never|Never]]', '[[Always|Always]]', '[[Often|A menudo]]'], correctAnswer: 1, explanation: '[[Never|Never]] = [[not at any time|en ningún momento]].' },
  { question: '[[The|El]] [[writer|autor]] [[uses|usa]] [[Present Perfect|Presente Perfecto]] [[with|con]] [[ever|ever]] [[and|y]] [[never|never]].', options: ['[[True|Verdadero]]', '[[False|Falso]]'], correctAnswer: 'True', explanation: '[[True|Verdadero]]. [[Ever|Ever]] [[and|y]] [[never|never]] [[with|con]] [[Present Perfect|Presente Perfecto]].' },
  { question: '[[What|Qué]] [[can|podemos]] [[we|]] [[say|decir]] [[about|sobre]] [[Sarah|Sarah]]?', options: ['[[She|Ella]] [[travelled alone many times|viajó sola muchas veces]]', '[[She|Ella]] [[never travelled alone but has been on a cruise|nunca viajó sola pero ha estado en un crucero]]', '[[She|Ella]] [[never left her country|nunca salió de su país]]', '[[She|Ella]] [[hated travelling|odió viajar]]'], correctAnswer: 1, explanation: '[[She|Ella]] [[has never travelled alone|nunca ha viajado sola]] [[but has been on a cruise|pero ha estado en un crucero]].' },
];

export const UNIT_42_LESSON_3_READING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `a2-u42-l3-r${i + 1}`,
  type: 'reading',
  level: 'A2',
  topic: 'Present Perfect: Ever & Never',
  difficulty: 'easy',
  transcript: READING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Reading',
}));
