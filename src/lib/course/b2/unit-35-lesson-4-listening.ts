/**
 * Unidad 35 B2 — Lección 4: Comprensión auditiva (Repaso 31–34)
 * 13 preguntas con texto y casos distintos
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = '[[Listening|Comprensión auditiva]]';
const LISTENING_TRANSCRIPT = `[[Hi|Hola]], [[I'm|soy]] [[James|James]] [[and|y]] [[I work|trabajo]] [[as|como]] [[a|un]] [[lecturer|profesor]] [[at|en]] [[the|la]] [[University of London|Universidad de Londres]]. [[I|Yo]] [[teach|enseño]] [[economics|economía]] [[and|y]] [[most|la mayoría de]] [[students|estudiantes]] [[attend|asisten]] [[the|las]] [[lectures|conferencias]] [[regularly|regularmente]]. [[I|Yo]] [[believe|creo]] [[that|que]] [[all|todos]] [[of the|de los]] [[environmental|medioambientales]] [[initiatives|iniciativas]] [[in|en]] [[the|la]] [[campus|campus]] [[are|son]] [[important|importantes]]. [[I|Yo]] [[regret|lamento]] [[to inform|informar]] [[you|que]] [[that the seminar is postponed|el seminario está aplazado]] [[but|pero]] [[I|yo]] [[remember|recuerdo]] [[to meet|cumplir]] [[deadlines|plazos]] [[and|y]] [[I|yo]] [[know|sé]] [[how important|lo importante que]] [[that is|es eso]]. [[Both|Ambos]] [[wind and solar|viento y solar]] [[are|son]] [[renewable|renovables]] [[and|y]] [[I|yo]] [[want|quiero]] [[to conduct|realizar]] [[more research|más investigación]] [[on|sobre]] [[sustainable|sostenible]] [[energy|energía]].`;

const INSTRUCTIONS = 'Escucha el audio (o lee la transcripción). Después responde las preguntas.';

const QUESTIONS = [
  { question: '[[Who is speaking|Quién habla]]?', options: ['[[James, a lecturer at the University of London|James, profesor en la Universidad de Londres]]', '[[A student|Un estudiante]]', '[[A supervisor|Un supervisor]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I\'m James and I work as a lecturer at the University of London|soy James y trabajo como profesor en la Universidad de Londres]]".' },
  { question: '[[What|Qué]] [[does James teach|enseña James]]?', options: ['[[Economics|Economía]]', '[[Finance|Finanzas]]', '[[Law|Derecho]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I teach economics|enseño economía]]".' },
  { question: '[[What|Qué]] [[does James believe|cree James]]?', options: ['[[That all environmental initiatives on campus are important|Que todas las iniciativas medioambientales en el campus son importantes]]', '[[That economics is easy|Que la economía es fácil]]', '[[That students should drop out|Que los estudiantes deberían abandonar]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I believe that all of the environmental initiatives in the campus are important|creo que todas las iniciativas medioambientales en el campus son importantes]]".' },
  { question: '[[What|Qué]] [[does James regret|lamenta James]]?', options: ['[[To inform that the seminar is postponed|Informar que el seminario está aplazado]]', '[[Not studying harder|No haber estudiado más]]', '[[Hurting a student|Haber herido a un estudiante]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I regret to inform you that the seminar is postponed|lamento informar que el seminario está aplazado]]".' },
  { question: '[[What|Qué]] [[does James remember|recuerda James]]?', options: ['[[To meet deadlines|Cumplir los plazos]]', '[[To buy tickets|Comprar entradas]]', '[[To call his mother|Llamar a su madre]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I remember to meet deadlines|recuerdo cumplir los plazos]]".' },
  { question: '[[What|Qué]] [[does James want|quiere James]]?', options: ['[[To conduct more research on sustainable energy|Realizar más investigación sobre energía sostenible]]', '[[To drop out|Abandonar]]', '[[To resign|Dimitir]]'], correctAnswer: 0, explanation: '[[The speaker says|El hablante dice]] "[[I want to conduct more research on sustainable energy|quiero realizar más investigación sobre energía sostenible]]".' },
  { question: '[[Which quantifier|Qué cuantificador]] [[is used|se usa]] [[with "wind and solar"|con "viento y solar"]]?', options: ['[[Both|Both]]', '[[All|All]]', '[[Each|Each]]'], correctAnswer: 0, explanation: '[[Both wind and solar|Ambos viento y solar]].' },
  { question: '[[What|Cuál]] [[is|es]] [[the main idea|la idea principal]] [[of the listening|de la escucha]]?', options: ['[[James describes his role and his views on education, environment and research|James describe su papel y sus opiniones sobre educación, medio ambiente e investigación]]', '[[Students should drop out|Los estudiantes deberían abandonar]]', '[[Economics is easy|La economía es fácil]]'], correctAnswer: 0, explanation: '[[The speaker|El hablante]] [[describes|describe]] [[his work|su trabajo]], [[beliefs|creencias]] [[and|y]] [[goals|objetivos]].' },
  { question: '[[Which article|Qué artículo]] [[is used|se usa]] [[with "lecturer"|con "lecturer"]]?', options: ['[[A|A]]', '[[The|The]]', '[[No article|Sin artículo]]'], correctAnswer: 0, explanation: '[[A for profession|A para profesión]] [[when first mentioned|cuando se menciona por primera vez]].' },
  { question: '[[What|Qué]] [[vocabulary|vocabulario]] [[is central|es central]] [[in this listening|en esta escucha]]?', options: ['[[lecturer|profesor]], [[economics|economía]], [[environmental initiatives|iniciativas medioambientales]], [[deadlines|plazos]], [[sustainable energy|energía sostenible]]', '[[sport|deporte]], [[music|música]]', '[[weather|tiempo]], [[food|comida]]'], correctAnswer: 0, explanation: '[[The listening|La escucha]] [[focuses on|se centra en]] [[education|educación]], [[environment|medio ambiente]] [[and|y]] [[research|investigación]].' },
  { question: '[[What|Qué]] [[can we infer|podemos inferir]] [[about James|sobre James]]?', options: ['[[He is experienced and cares about education, environment and research|Es experimentado y le importa la educación, el medio ambiente y la investigación]]', '[[He prefers students to drop out|Prefiere que los estudiantes abandonen]]', '[[He does not like research|No le gusta la investigación]]'], correctAnswer: 0, explanation: '[[He|Él]] [[teaches|enseña]], [[believes|cree]] [[in environmental initiatives|en iniciativas medioambientales]] [[and|y]] [[wants|quiere]] [[to conduct research|realizar investigación]].' },
  { question: '[[James|James]] ____ [[how important meeting deadlines is|lo importante que es cumplir los plazos]].', options: ['[[knows|sabe]]', '[[is knowing|está sabiendo]]'], correctAnswer: 0, explanation: '[[Know is a state verb|Know es verbo de estado]].' },
  { question: '[[Regret + infinitive|Regret + infinitivo]] [[is used for|se usa para]] ____.', options: ['[[Giving bad news|Dar malas noticias]]', '[[Past regrets|Arrepentimientos pasados]]'], correctAnswer: 0, explanation: '[[Regret + infinitive = formal bad news|Regret + infinitivo = malas noticias formales]].' },
];

export const UNIT_35_LESSON_4_LISTENING: Exercise[] = QUESTIONS.map((q, i) => ({
  id: `b2-u35-l4-l${i + 1}`,
  type: 'listening',
  level: 'B2',
  topic: 'Repaso 31–34',
  difficulty: 'medium',
  transcript: LISTENING_TRANSCRIPT,
  content: { title: LESSON_TITLE, instructions: INSTRUCTIONS, questions: [q] },
  topicName: 'Listening',
}));
