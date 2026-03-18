/**
 * C1 Unit 6 — Work and Economy
 * Module 6: Work and Economy
 * Grammar: It-structures, cause/result linkers, advanced modals
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Work and Economy';

export const UNIT_6_EXERCISES: Exercise[] = [
  {
    id: 'c1-u6-g1', type: 'multiple-choice', level: 'C1', topic: 'it-structures', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[It-structures|Estructuras con it]]', instructions: 'Choose the correct it-structure.',
      questions: [{ question: '_______ that remote working has fundamentally changed expectations around workplace flexibility.', options: ['[[It is widely argued|Se argumenta ampliamente]]', '[[This is argued|Esto se argumenta]]', '[[It argues|Se argumenta]]'], correctAnswer: 0, explanation: '"It is widely argued that..." = impersonal it-structure for academic distancing.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u6-g2', type: 'fill-blank', level: 'C1', topic: 'cause-result', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Cause and Result Linkers|Conectores de causa y resultado]]', instructions: 'Complete with the correct linker.',
      questions: [{ question: 'The company introduced a four-day week; _______, productivity increased by 20%.', options: ['[[consequently|en consecuencia]]', '[[despite|a pesar de]]', '[[whereas|mientras que]]'], correctAnswer: 'consequently', acceptableAnswers: ['consequently', 'as a result', 'hence', 'thus'], explanation: '"Consequently" = as a result. Links cause (4-day week) to effect (productivity increase).' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u6-g3', type: 'multiple-choice', level: 'C1', topic: 'advanced-modals', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Advanced Modals in the Past|Modales avanzados en pasado]]', instructions: 'Choose the correct modal to express past criticism.',
      questions: [{ question: 'The board _______ acted sooner — the financial losses were entirely predictable.', options: ['[[should have|debería haber]]', '[[must have|debe haber]]', "[[couldn't have|no podría haber]]"], correctAnswer: 0, explanation: '"Should have + pp" expresses criticism of a past action that was not taken.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u6-g4', type: 'fill-blank', level: 'C1', topic: 'gerund-infinitive', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Gerund vs Infinitive|Gerundio vs infinitivo]]', instructions: 'Complete the sentence correctly.',
      questions: [{ question: 'We look forward _______ _______ from you regarding your application.', options: ['[[to hearing|a escuchar]]', '[[to hear|a escuchar]]', '[[hearing|escuchando]]'], correctAnswer: 'to hearing', acceptableAnswers: ['to hearing'], explanation: '"Look forward to + -ing" — "to" is a preposition here, not part of the infinitive.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u6-g5', type: 'multiple-choice', level: 'C1', topic: 'cause-result', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Cause and Result Linkers|Conectores de causa y resultado]]', instructions: 'Choose the most appropriate linker.',
      questions: [{ question: 'Wages stagnated for a decade, _______ widening the gap between the rich and poor.', options: ['[[thereby|con ello]]', '[[despite|a pesar de ello]]', '[[whereas|mientras que]]'], correctAnswer: 0, explanation: '"Thereby + -ing" = by doing this; expresses result in a single clause.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u6-v1', type: 'multiple-choice', level: 'C1', topic: 'work-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Work and Economy|Trabajo y economía]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The startup failed to achieve _______ — it worked well for 100 users but collapsed under the weight of 10,000.', options: ['[[scalability|escalabilidad]]', '[[productivity|productividad]]', '[[turnover|facturación]]'], correctAnswer: 0, explanation: 'Scalability = the ability of a system to grow and manage increased demand.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u6-v2', type: 'fill-blank', level: 'C1', topic: 'work-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Work and Economy|Trabajo y economía]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'Engaging all _______ — from employees to investors to local communities — is essential for ethical corporate governance.', options: ['[[stakeholders|partes interesadas]]', '[[shareholders|accionistas]]', '[[customers|clientes]]'], correctAnswer: 'stakeholders', acceptableAnswers: ['stakeholders'], explanation: 'Stakeholders = anyone who has an interest in or is affected by an organisation\'s decisions.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u6-v3', type: 'multiple-choice', level: 'C1', topic: 'work-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Work and Economy|Trabajo y economía]]', instructions: 'Choose the best word.',
      questions: [{ question: 'Tax incentives were introduced to _______ foreign direct investment in the region.', options: ['[[incentivise|incentivar]]', '[[enforce|imponer]]', '[[prevent|prevenir]]'], correctAnswer: 0, explanation: 'Incentivise = to encourage a particular behaviour through incentives.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u6-v4', type: 'fill-blank', level: 'C1', topic: 'work-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Work and Economy|Trabajo y economía]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'Many workers in the _______ _______ lack employment protections such as sick pay and pension contributions.', options: ['[[gig economy|economía gig]]', '[[public sector|sector público]]', '[[informal economy|economía informal]]'], correctAnswer: 'gig economy', acceptableAnswers: ['gig economy'], explanation: 'The gig economy = a labour market characterised by short-term contracts and freelance work.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u6-v5', type: 'multiple-choice', level: 'C1', topic: 'work-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Work and Economy|Trabajo y economía]]', instructions: 'Choose the best collocation.',
      questions: [{ question: 'Companies must invest in _______ to ensure their workforce remains competitive in an era of rapid technological change.', options: ['[[upskilling|formación continua]]', '[[outsourcing|externalización]]', '[[downsizing|reducción de plantilla]]'], correctAnswer: 0, explanation: 'Upskilling = training employees to develop new skills.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u6-r1', type: 'reading-comprehension', level: 'C1', topic: 'work-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[The Future of Work|El futuro del trabajo]]', instructions: 'Read and answer.',
      questions: [{ question: 'Text: "It is increasingly argued that the traditional nine-to-five model is not merely outdated but fundamentally incompatible with the expectations of a workforce that has been irrevocably transformed by the pandemic." What does the author claim?', options: ['[[remote working is a temporary trend|el trabajo remoto es una tendencia temporal]]', '[[the traditional work model is fundamentally unsuitable for the post-pandemic workforce|el modelo de trabajo tradicional es fundamentalmente inadecuado para la fuerza laboral pospandémica]]', '[[the pandemic had little effect on work culture|la pandemia tuvo poco efecto en la cultura del trabajo]]'], correctAnswer: 1, explanation: '"Fundamentally incompatible" and "irrevocably transformed" signal a deep, permanent change.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u6-r2', type: 'multiple-choice', level: 'C1', topic: 'work-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Global Economy|Economía global]]', instructions: 'Choose the correct inference.',
      questions: [{ question: 'Text: "Austerity measures, however well-intentioned, have consistently failed to deliver the promised economic recovery — thereby exacerbating the very inequalities they were designed to address." The author\'s tone towards austerity is:', options: ['[[supportive|favorable]]', '[[critical|crítico]]', '[[neutral|neutral]]'], correctAnswer: 1, explanation: '"Failed consistently" and "exacerbating inequalities" show the author is critical of austerity.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u6-l1', type: 'listening-comprehension', level: 'C1', topic: 'work-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Entrepreneurship|Emprendimiento]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'An entrepreneur says: "Had we secured funding in that first round, we would never have been forced to innovate so aggressively — in hindsight, the failure was the making of us." What does she imply?', options: ['[[early failure was entirely negative|el fracaso inicial fue totalmente negativo]]', '[[the lack of initial funding ultimately drove innovation and success|la falta de financiación inicial impulsó la innovación y el éxito]]', '[[securing funding is never important for startups|conseguir financiación nunca es importante para las startups]]'], correctAnswer: 1, explanation: '"The failure was the making of us" = the failure caused their eventual success.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u6-w1', type: 'writing', level: 'C1', topic: 'formal-report', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Formal Report|Informe formal]]', instructions: 'Choose the best sentence for a formal business report recommendation.',
      questions: [{ question: 'Which is most appropriate for the "Recommendations" section of a formal report?', options: ['[[We think the company should try remote working.|Creemos que la empresa debería probar el trabajo remoto.]]', '[[It is strongly recommended that the organisation pilot a hybrid working model across three departments before committing to company-wide implementation.|Se recomienda encarecidamente que la organización implemente un modelo de trabajo híbrido en tres departamentos antes de comprometerse con una implementación en toda la empresa.]]', '[[Remote working is good for employees.|El trabajo remoto es bueno para los empleados.]]'], correctAnswer: 1, explanation: '"It is strongly recommended that..." + subjunctive = formal report recommendation language.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u6-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-work', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Work-Life Balance|Equilibrio trabajo-vida]]', instructions: 'Choose the most sophisticated way to discuss work-life balance.',
      questions: [{ question: 'How would you best introduce the topic of work-life balance in a professional discussion?', options: ['[[Work-life balance is very important today.|El equilibrio trabajo-vida es muy importante hoy.]]', '[[The growing discourse around work-life integration raises fundamental questions about what we value as a society and how we define professional success.|El creciente discurso sobre la integración trabajo-vida plantea preguntas fundamentales sobre lo que valoramos como sociedad.]]', '[[People work too much and need more free time.|La gente trabaja demasiado y necesita más tiempo libre.]]'], correctAnswer: 1, explanation: '"Growing discourse", "fundamental questions", "define professional success" = sophisticated C1 academic register.' }] },
    topicName: 'Speaking',
  },
];
