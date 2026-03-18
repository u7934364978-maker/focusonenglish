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
    id: 'c1-u3-g4',
    type: 'fill-blank',
    level: 'C1',
    topic: 'conditional-inversion',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Conditional Inversion|Inversión en condicionales]]',
      instructions: 'Complete the formal conditional using inversion.',
      questions: [
        {
          question: '_______ we to invest now, the returns would be significant.',
          options: ['[[Were|Si fuéramos a]]', '[[If were|Si fuera]]', '[[Should were|Debería fuera]]'],
          correctAnswer: 'Were',
          acceptableAnswers: ['Were'],
          explanation: 'Were + subject + to + infinitive = formal conditional inversion replacing "If we were to...".',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u3-g5',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'conditional-inversion',
    difficulty: 'hard',
    content: {
      title: '[[Grammar|Gramática]]: [[Conditional Inversion|Inversión en condicionales]]',
      instructions: 'Choose the correct formal conditional inversion.',
      questions: [
        {
          question: '_______ the experiment failed, the entire project would be cancelled.',
          options: ['[[Should|Si llegara a]]', '[[Were|Si fuera]]', '[[Had|Si hubiera]]'],
          correctAnswer: 0,
          explanation: 'Should + subject + infinitive = formal way of saying "If the experiment were to fail...".',
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
    id: 'c1-u3-v4',
    type: 'fill-blank',
    level: 'C1',
    topic: 'science-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Science and Technology|Ciencia y tecnología]]',
      instructions: 'Complete the sentence.',
      questions: [
        {
          question: 'The widespread _______ of tasks previously done by humans is one of the defining challenges of the 21st century.',
          options: ['[[automation|automatización]]', '[[innovation|innovación]]', '[[disruption|disrupción]]'],
          correctAnswer: 'automation',
          acceptableAnswers: ['automation'],
          explanation: 'Automation = the use of technology to perform tasks without human input.',
        },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u3-v5',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'science-vocabulary',
    difficulty: 'hard',
    content: {
      title: '[[Vocabulary|Vocabulario]]: [[Science and Technology|Ciencia y tecnología]]',
      instructions: 'Choose the correct word.',
      questions: [
        {
          question: 'Before launching the product, the team built a _______ to test its key functions.',
          options: ['[[prototype|prototipo]]', '[[hypothesis|hipótesis]]', '[[algorithm|algoritmo]]'],
          correctAnswer: 0,
          explanation: 'A prototype = an early version of a product used to test its design.',
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
            '[[We should make rules for AI.|Deberíamos hacer reglas para la IA.]]',
            '[[It is strongly recommended that a cross-sector regulatory framework be established to govern the development and deployment of AI systems.|Se recomienda encarecidamente que se establezca un marco regulatorio intersectorial para regular el desarrollo y la implementación de sistemas de IA.]]',
            '[[AI needs to be controlled because it is dangerous.|La IA necesita ser controlada porque es peligrosa.]]',
          ],
          correctAnswer: 1,
          explanation: 'Formal proposals use impersonal passive + subjunctive: "it is recommended that... be established".',
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
            '[[Maybe AI will take all our jobs.|Quizás la IA tomará todos nuestros trabajos.]]',
            '[[One might reasonably posit that AI will transform rather than eliminate many professional roles.|Uno podría razonablemente postular que la IA transformará más que eliminará muchos roles profesionales.]]',
            '[[I think AI is going to be very important.|Creo que la IA va a ser muy importante.]]',
          ],
          correctAnswer: 1,
          explanation: '"One might reasonably posit" = sophisticated C1 hedging and speculation language.',
        },
      ],
    },
    topicName: 'Speaking',
  },
];
