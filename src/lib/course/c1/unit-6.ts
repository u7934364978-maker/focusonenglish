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
    id: 'c1-u6-r3',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'work-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Follow-up|Seguimiento]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question:
            'Text: "Returning to the core theme of this unit (Work and Economy), learners benefit from comparing how different authors frame the same underlying issue."\n\nThe text recommends:',
          options: [
            '[[comparing how different authors frame the issue|comparar cómo distintos autores enmarcan el tema]]',
            '[[reading only one author|leer solo un autor]]',
            '[[ignoring framing|ignorar el encuadre]]',
          ],
          correctAnswer: 0,
          explanation: 'The passage explicitly recommends comparing authors\' framing.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u6-l1', type: 'listening-comprehension', level: 'C1', topic: 'work-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Entrepreneurship|Emprendimiento]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'An entrepreneur says: "Had we secured funding in that first round, we would never have been forced to innovate so aggressively — in hindsight, the failure was the making of us." What does she imply?', options: ['[[early failure was entirely negative|el fracaso inicial fue totalmente negativo]]', '[[the lack of initial funding ultimately drove innovation and success|la falta de financiación inicial impulsó la innovación y el éxito]]', '[[securing funding is never important for startups|conseguir financiación nunca es importante para las startups]]'], correctAnswer: 1, explanation: '"The failure was the making of us" = the failure caused their eventual success.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u6-l2',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'work-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Follow-up 2|Complemento]]',
      instructions: 'Listen and choose.',
      questions: [
        {
          question:
            'Speaker: "What matters in this unit is not memorising lists but noticing how language patterns recur in authentic use."\n\nThe speaker emphasises:',
          options: [
            '[[noticing patterns in real use|fijarse en patrones en uso real]]',
            '[[memorising long lists|memorizar listas]]',
            '[[avoiding authentic input|evitar input auténtico]]',
          ],
          correctAnswer: 0,
          explanation: 'The speaker contrasts lists with noticing patterns in authentic language.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u6-l3',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'work-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[Follow-up 3|Complemento]]',
      instructions: 'Listen and choose.',
      questions: [
        {
          question:
            'Speaker: "What matters in this unit is not memorising lists but noticing how language patterns recur in authentic use."\n\nThe speaker emphasises:',
          options: [
            '[[noticing patterns in real use|fijarse en patrones en uso real]]',
            '[[memorising long lists|memorizar listas]]',
            '[[avoiding authentic input|evitar input auténtico]]',
          ],
          correctAnswer: 0,
          explanation: 'The speaker contrasts lists with noticing patterns in authentic language.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u6-w1', type: 'writing', level: 'C1', topic: 'formal-report', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Formal Report|Informe formal]]', instructions: 'Choose the best sentence for a formal business report recommendation.',
      questions: [{ question: 'Which is most appropriate for the "Recommendations" section of a formal report?', options: ['[[Based on the data gathered during this review, the organisation would be well-advised to consider introducing elements of hybrid working on a trial basis, with a view to evaluating its effectiveness before any decision regarding wider or full-scale implementation across the company is taken.|Basándose en los datos recopilados durante esta revisión, la organización haría bien en considerar la introducción de elementos de trabajo híbrido de forma experimental, con vistas a evaluar su efectividad antes de tomar cualquier decisión sobre una implementación más amplia.]]', '[[It is strongly recommended that the organisation pilot a hybrid working model across three departments before committing to company-wide implementation.|Se recomienda encarecidamente que la organización implemente un modelo de trabajo híbrido en tres departamentos antes de comprometerse con una implementación en toda la empresa.]]', '[[This report advocates that the company introduce a hybrid working arrangement on a phased basis. We propose that management assess the impact on productivity and employee wellbeing over a twelve-month trial period before deciding whether to roll out the model across the organisation.|Este informe aboga por que la empresa introduzca un acuerdo de trabajo híbrido de forma gradual. Proponemos que la dirección evalúe el impacto en la productividad y el bienestar de los empleados durante un período de prueba de doce meses.]]'], correctAnswer: 1, explanation: '"It is strongly recommended that..." + subjunctive = formal report recommendation language.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u6-w2',
    type: 'writing',
    level: 'C1',
    topic: 'formal-report',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Cohesion and register|Cohesión y registro]]',
      instructions: 'Choose the sentence that best models C1 academic register.',
      questions: [
        {
          question: 'Which sentence is most appropriate in a formal paragraph on this unit\'s theme?',
          options: [
            '[[It is worth noting that the evidence does not permit a single simplistic conclusion; rather, it points to an interplay of factors that merit separate discussion.|matiz y formalidad]]',
            '[[The theme is interesting and has many sides.|demasiado simple]]',
            '[[I think this unit is about stuff.|informal]]',
          ],
          correctAnswer: 0,
          explanation: 'Hedging and formal vocabulary suit C1 writing.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u6-w3',
    type: 'writing',
    level: 'C1',
    topic: 'formal-report',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Cohesion and register|Cohesión y registro]]',
      instructions: 'Choose the sentence that best models C1 academic register.',
      questions: [
        {
          question: 'Which sentence is most appropriate in a formal paragraph on this unit\'s theme?',
          options: [
            '[[It is worth noting that the evidence does not permit a single simplistic conclusion; rather, it points to an interplay of factors that merit separate discussion.|matiz y formalidad]]',
            '[[The theme is interesting and has many sides.|demasiado simple]]',
            '[[I think this unit is about stuff.|informal]]',
          ],
          correctAnswer: 0,
          explanation: 'Hedging and formal vocabulary suit C1 writing.',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u6-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-work', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Work-Life Balance|Equilibrio trabajo-vida]]', instructions: 'Choose the most sophisticated way to discuss work-life balance.',
      questions: [{ question: 'How would you best introduce the topic of work-life balance in a professional discussion?', options: ['[[Work-life balance has become a central concern in contemporary management literature, and the evidence suggests that organisations which invest in employee wellbeing tend to outperform those that do not, particularly on key metrics such as talent retention, absenteeism rates and long-term productivity.|El equilibrio trabajo-vida se ha convertido en una preocupación central en la literatura de gestión contemporánea, y la evidencia sugiere que las organizaciones que invierten en el bienestar de los empleados tienden a superar a las que no lo hacen, particularmente en métricas como la retención de talento y la productividad.]]', '[[The growing discourse around work-life integration raises fundamental questions about what we value as a society and how we define professional success.|El creciente discurso sobre la integración trabajo-vida plantea preguntas fundamentales sobre lo que valoramos como sociedad.]]', '[[The concept of work-life balance, despite its popularity in policy and management circles, remains remarkably ill-defined, with significant variation in how different cultures, industries and professional groups interpret the appropriate boundary between professional obligations and personal time.|El concepto de equilibrio trabajo-vida, a pesar de su popularidad en los círculos de política y gestión, sigue siendo notablemente mal definido, con una variación significativa en cómo diferentes culturas e industrias interpretan el límite apropiado entre las obligaciones profesionales y el tiempo personal.]]'], correctAnswer: 1, explanation: '"Growing discourse", "fundamental questions", "define professional success" = sophisticated C1 academic register.' }] },
    topicName: 'Speaking',
  },
  {
    id: 'c1-u6-s2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-work',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discussion|Discusión]]',
      instructions: 'Choose the most natural C1 spoken response.',
      questions: [
        {
          question: 'In a discussion, how might you add balance after stating one view?',
          options: [
            '[[That said, an alternative reading of the evidence would be that alternative explanations cannot be ruled out without further data.|*That said* + contrapeso formal]]',
            '[[But I am right.|demasiado directo]]',
            '[[Whatever.|vago]]',
          ],
          correctAnswer: 0,
          explanation: '*That said* introduces a counterbalance politely at C1.',
        },
      ],
    },
    topicName: 'Speaking',
  },
  {
    id: 'c1-u6-s3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-work',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Discussion|Discusión]]',
      instructions: 'Choose the most natural C1 spoken response.',
      questions: [
        {
          question: 'In a discussion, how might you add balance after stating one view?',
          options: [
            '[[That said, an alternative reading of the evidence would be that alternative explanations cannot be ruled out without further data.|*That said* + contrapeso formal]]',
            '[[But I am right.|demasiado directo]]',
            '[[Whatever.|vago]]',
          ],
          correctAnswer: 0,
          explanation: '*That said* introduces a counterbalance politely at C1.',
        },
      ],
    },
    topicName: 'Speaking',
  },
];
