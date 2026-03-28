/**
 * C1 Unit 3 — Science and Technology
 * Module 3: Science and Technology
 * Grammar: Mixed conditionals
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Science and Technology';

export const UNIT_3_EXERCISES: Exercise[] = [
  {
    id: 'c1-u3-g1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'mixed-conditionals',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Mixed Conditionals|Condicionales mixtos]]',
      instructions: 'Choose the correct mixed conditional form.',
      questions: [
        {
          question: 'If she _______ the research grant, she would be a professor now.',
          options: ['[[had received|hubiera recibido]]', '[[received|recibió]]', '[[has received|ha recibido]]'],
          correctAnswer: 0,
          explanation: 'Mixed conditional: past perfect (condition) + would + infinitive (present result).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u3-g2',
    type: 'fill-blank',
    level: 'C1',
    topic: 'mixed-conditionals',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Mixed Conditionals|Condicionales mixtos]]',
      instructions: 'Complete with the correct conditional form.',
      questions: [
        {
          question: 'If he were more disciplined, he ____ ____ the project on time.',
          options: ['[[would have finished|habría terminado]]', '[[will finish|terminará]]', '[[had finished|hubiera terminado]]'],
          correctAnswer: 'would have finished',
          acceptableAnswers: ['would have finished'],
          explanation: 'Mixed conditional: present unreal condition (were) + past result (would have finished).',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u3-g3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'mixed-conditionals',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Mixed Conditionals|Condicionales mixtos]]',
      instructions: 'Identify the correct mixed conditional.',
      questions: [
        {
          question: 'Which sentence is a correct mixed conditional?',
          options: [
            '[[If AI had been developed earlier, society is very different now.|Si la IA hubiera sido desarrollada antes, la sociedad es muy diferente ahora.]]',
            '[[If AI had been developed earlier, society would be very different now.|Si la IA hubiera sido desarrollada antes, la sociedad sería muy diferente ahora.]]',
            '[[If AI developed earlier, society would have been very different.|Si la IA se desarrollara antes, la sociedad habría sido muy diferente.]]',
          ],
          correctAnswer: 1,
          explanation: 'Past perfect in the if-clause + would + infinitive in the result clause = classic mixed conditional.',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u3-v1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'science-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Science and Technology|Ciencia y tecnología]]',
      instructions: 'Choose the best word.',
      questions: [
        {
          question: 'The new drug represents a major _______ — it could transform the treatment of this disease.',
          options: ['[[breakthrough|avance decisivo]]', '[[breakdown|avería]]', '[[outlook|perspectiva]]'],
          correctAnswer: 0,
          explanation: 'A breakthrough = a sudden important discovery or development.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u3-v2',
    type: 'fill-blank',
    level: 'C1',
    topic: 'science-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Science and Technology|Ciencia y tecnología]]',
      instructions: 'Complete the sentence.',
      questions: [
        {
          question: 'The research is purely _______ — based on direct observation and experimentation rather than theory alone.',
          options: ['[[empirical|empírico]]', '[[hypothetical|hipotético]]', '[[theoretical|teórico]]'],
          correctAnswer: 'empirical',
          acceptableAnswers: ['empirical'],
          explanation: 'Empirical = based on observation and experiment, not theory.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u3-v3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'science-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Science and Technology|Ciencia y tecnología]]',
      instructions: 'Choose the best option.',
      questions: [
        {
          question: 'The introduction of smartphones represented a _______ shift in how people communicate and access information.',
          options: ['[[paradigm|paradigma]]', '[[theory|teoría]]', '[[diagnosis|diagnóstico]]'],
          correctAnswer: 0,
          explanation: 'A paradigm shift = a fundamental change in the way something is understood or done.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u3-r1',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'science-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Artificial Intelligence|Inteligencia artificial]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question: 'Text: "AI does not merely process data — it increasingly generates insights that its creators did not anticipate, raising profound questions about authorship, accountability and control."\n\nThe author is primarily concerned with:',
          options: [
            '[[the speed at which AI processes data|la velocidad a la que la IA procesa datos]]',
            '[[the ethical and social implications of AI\'s unexpected capabilities|las implicaciones éticas y sociales de las capacidades inesperadas de la IA]]',
            '[[the technical limitations of current AI systems|las limitaciones técnicas de los sistemas de IA actuales]]',
          ],
          correctAnswer: 1,
          explanation: 'The text focuses on questions of "authorship, accountability and control" — ethical concerns.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u3-r2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'science-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Technology and Society|Tecnología y sociedad]]',
      instructions: 'Choose the correct inference.',
      questions: [
        {
          question: 'Text: "Were the current pace of technological disruption to continue unchecked, entire sectors of the economy could become unrecognisable within a decade." The author\'s tone is best described as:',
          options: ['[[optimistic|optimista]]', '[[cautionary|de advertencia]]', '[[indifferent|indiferente]]'],
          correctAnswer: 1,
          explanation: '"Unchecked" and "unrecognisable" suggest the author is warning about unregulated technological change.',
        },
      ],
    },
    topicName: 'Reading',
  },
  {
    id: 'c1-u3-r3',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'science-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Follow-up|Seguimiento]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question:
            'Text: "Returning to the core theme of this unit (Science and Technology), learners benefit from comparing how different authors frame the same underlying issue."\n\nThe text recommends:',
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
    id: 'c1-u3-l1',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'science-listening',
    difficulty: 'hard',
    content: {
      title: '[[Listening|Comprensión auditiva]]: [[The Future of AI|El futuro de la IA]]',
      instructions: 'Listen and choose the correct answer.',
      questions: [
        {
          question: 'A researcher says: "Had we anticipated these ethical dilemmas at the design stage, we would have built in far more robust safeguards." What does this suggest?',
          options: [
            '[[The researchers planned for ethical problems|Los investigadores planificaron los problemas éticos]]',
            '[[The ethical problems were not foreseen at the beginning|Los problemas éticos no se previeron al principio]]',
            '[[The safeguards they built were sufficient|Las salvaguardas que construyeron fueron suficientes]]',
          ],
          correctAnswer: 1,
          explanation: 'Had we anticipated = they did NOT anticipate. The third conditional implies a regret about the past.',
        },
      ],
    },
    topicName: 'Listening',
  },
  {
    id: 'c1-u3-l2',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'science-listening',
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
    id: 'c1-u3-l3',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'science-listening',
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
    id: 'c1-u3-w1',
    type: 'writing',
    level: 'C1',
    topic: 'proposal-writing',
    difficulty: 'hard',
    content: {
      title: '[[Writing|Escritura]]: [[Proposal|Propuesta formal]]',
      instructions: 'Which sentence is most appropriate for a formal proposal at C1 level?',
      questions: [
        {
          question: 'Choose the best sentence to recommend an action in a formal proposal about AI regulation.',
          options: [
            '[[The development and deployment of AI must be regulated without delay. Regulators should act swiftly to introduce comprehensive rules that prevent misuse, ensure accountability and guarantee that AI innovation serves the public interest rather than narrow commercial or political interests.|El desarrollo y la implementación de la IA debe regularse sin demora. Los reguladores deben actuar rápidamente para introducir normas exhaustivas que prevengan el mal uso, garanticen la responsabilidad y aseguren que la innovación de IA sirva al interés público.]]',
            '[[It is strongly recommended that a cross-sector regulatory framework be established to govern the development and deployment of AI systems.|Se recomienda encarecidamente que se establezca un marco regulatorio intersectorial para regular el desarrollo y la implementación de sistemas de IA.]]',
            '[[In light of the evidence presented in this report, it is our recommendation that relevant stakeholders begin discussions regarding the possible formation of an oversight committee. We propose that a working group be convened within the next six months to explore regulatory options.|A la luz de la evidencia presentada en este informe, nuestra recomendación es que las partes interesadas comiencen a discutir la posible formación de un comité de supervisión. Proponemos que se convoque un grupo de trabajo en los próximos seis meses.]]',
          ],
          correctAnswer: 1,
          explanation: 'Formal proposals use impersonal passive + subjunctive: "it is recommended that... be established".',
        },
      ],
    },
    topicName: 'Writing',
  },
  {
    id: 'c1-u3-w2',
    type: 'writing',
    level: 'C1',
    topic: 'proposal-writing',
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
    id: 'c1-u3-w3',
    type: 'writing',
    level: 'C1',
    topic: 'proposal-writing',
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
    id: 'c1-u3-s1',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-speculation',
    difficulty: 'hard',
    content: {
      title: '[[Speaking|Expresión oral]]: [[Speculating about the Future|Especular sobre el futuro]]',
      instructions: 'Choose the most appropriate C1 expression for speculating about future technology.',
      questions: [
        {
          question: 'You want to speculate about whether AI will replace human jobs. Which is the most academically appropriate expression?',
          options: [
            '[[It seems highly probable that AI will lead to widespread disruption in the labour market, and there are reasonable grounds for believing that a significant proportion of professional roles will be substantially redefined, though the precise timeline and scope of this transformation remain difficult to predict.|Parece muy probable que la IA conduzca a una amplia disrupción en el mercado laboral, y hay razones razonables para creer que una proporción significativa de los roles profesionales será sustancialmente redefinida, aunque el calendario y alcance precisos siguen siendo difíciles de predecir.]]',
            '[[One might reasonably posit that AI will transform rather than eliminate many professional roles.|Uno podría razonablemente postular que la IA transformará más que eliminará muchos roles profesionales.]]',
            '[[Looking ahead, we can anticipate that AI will have far-reaching implications for the world of work, potentially rendering certain roles obsolete while simultaneously generating new opportunities that are currently impossible to foresee with any degree of certainty or specificity.|Mirando hacia el futuro, podemos anticipar que la IA tendrá implicaciones de gran alcance para el mundo laboral, potencialmente haciendo obsoletos ciertos roles mientras genera simultáneamente nuevas oportunidades que actualmente son imposibles de prever con ningún grado de certeza.]]',
          ],
          correctAnswer: 1,
          explanation: '"One might reasonably posit" = sophisticated C1 hedging and speculation language.',
        },
      ],
    },
    topicName: 'Speaking',
  },
  {
    id: 'c1-u3-s2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-speculation',
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
    id: 'c1-u3-s3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-speculation',
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
