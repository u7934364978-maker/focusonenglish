// Script para completar las 4 lecciones faltantes del Módulo 2
// Lecciones 3, 4, 5, 6 del Módulo 2: Debate, Opinión y Persuasión

export const MODULE_2_LESSONS_3_TO_6 = `
  // Lección 3: Modals of Deduction
  {
    id: 'b2-m2-l3',
    title: 'Lección 3: Modals of Deduction (must, might, can\'t)',
    description: 'Aprende a hacer deducciones y especulaciones en inglés',
    duration: 90,
    objectives: [
      'Usar modals para expresar certeza, posibilidad y imposibilidad',
      'Distinguir entre must, might, may, could, can\'t',
      'Hacer deducciones sobre situaciones presentes y pasadas',
      'Especular sobre causas y razones'
    ],
    exercises: [
      {
        id: 'b2-m2-l3-grammar-1',
        type: 'grammar',
        title: 'Modals of Deduction: Present',
        grammarPoint: 'Must/might/can\'t + infinitive (present deduction)',
        explanation: \`Usamos modals para expresar qué tan seguros estamos de algo:
- MUST (95% certain): "She must be at home" (Ella debe estar en casa - estoy casi seguro)
- MIGHT/MAY/COULD (50% certain): "He might know the answer" (Él podría saber la respuesta - es posible)
- CAN'T (95% certain negative): "That can't be true" (Eso no puede ser verdad - estoy casi seguro que es falso)\`,
        examples: [
          'She must be tired. She\'s been working all day. (Deducción lógica)',
          'They might be in a meeting. Their phones are off. (Posibilidad)',
          'He can\'t be the manager. He looks too young. (Imposibilidad)',
          'You must be joking! That\'s unbelievable. (Seguridad fuerte)',
          'She could be American, judging by her accent. (Especulación)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'Choose the correct modal: The lights are on. Someone ___ be home.',
            options: ['must', 'might', 'can\'t', 'could'],
            correctAnswer: 'must',
            explanation: 'Usamos "must" porque las luces encendidas son evidencia fuerte de que alguien está en casa.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'She ___ be the new teacher. She was hired yesterday.',
            options: ['can\'t', 'might', 'must', 'could'],
            correctAnswer: 'must',
            explanation: '"Must" expresa deducción fuerte basada en evidencia (fue contratada ayer).',
            points: 1
          },
          {
            id: 'q3',
            type: 'fill-blank',
            question: 'Complete: He ___ (not/be) serious. He\'s always joking.',
            correctAnswer: 'can\'t be',
            explanation: 'Can\'t be para expresar que es imposible que sea serio.',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'They haven\'t answered yet. They ___ be busy.',
            options: ['must', 'might', 'can\'t', 'mustn\'t'],
            correctAnswer: 'might',
            explanation: 'Might expresa posibilidad (50% seguro) - no tenemos evidencia fuerte.',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l3-grammar-2',
        type: 'grammar',
        title: 'Modals of Deduction: Past',
        grammarPoint: 'Must/might/can\'t + have + past participle (past deduction)',
        explanation: \`Para deducciones sobre el pasado, usamos modal + have + past participle:
- MUST HAVE: "She must have missed the bus" (Debe haber perdido el autobús)
- MIGHT/MAY/COULD HAVE: "He might have forgotten" (Puede que haya olvidado)
- CAN'T HAVE: "They can't have left already" (No pueden haberse ido ya)\`,
        examples: [
          'She must have studied hard. She got 100% on the exam.',
          'They might have taken the wrong train. They\'re very late.',
          'He can\'t have finished already. He started 5 minutes ago.',
          'You must have been disappointed when you heard the news.',
          'She could have called, but I didn\'t hear my phone.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Complete: He\'s not here. He ___ (leave) early.',
            correctAnswer: 'must have left',
            explanation: 'Must have + past participle para deducción fuerte sobre el pasado.',
            points: 1
          },
          {
            id: 'q2',
            type: 'multiple-choice',
            question: 'She ___ the email. It\'s not in her inbox.',
            options: ['might not have received', 'must not receive', 'can\'t receive', 'mustn\'t have received'],
            correctAnswer: 'might not have received',
            explanation: 'Might not have = posibilidad de que no recibió el email.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'Rewrite: I\'m sure they didn\'t see us. (Use can\'t have)',
            correctAnswer: 'They can\'t have seen us.',
            explanation: 'Can\'t have + past participle para expresar imposibilidad en el pasado.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l3-reading-1',
        type: 'reading',
        title: 'The Mysterious Disappearance',
        text: \`Detective Maria Rodriguez stood in the empty apartment, surveying the scene. Something wasn't right. The door had been locked from the inside, yet the occupant, Mr. Harrison, was nowhere to be found. His car was still in the garage, and his wallet and phone were on the kitchen counter.

"He must have left in a hurry," suggested Officer Chen, pointing to the unmade bed and half-eaten breakfast on the table.

"Perhaps," Maria replied thoughtfully, "but he can't have gone far without his car or phone. People don't just disappear into thin air. He might have had an emergency, but surely he would have taken his wallet?"

The neighbors reported hearing nothing unusual, though Mrs. Patterson from upstairs mentioned that Mr. Harrison might have had a visitor late the previous evening. "I heard voices," she explained, "but I couldn't make out what they were saying. It must have been around 11 PM."

Maria examined the window overlooking the fire escape. It was unlocked. "He could have left this way," she mused. "But why? Unless..." She paused, noticing a crumpled note in the wastepaper basket. Smoothing it out, she read: "Meet me at the old warehouse. Come alone."

"So he must have known whoever wrote this," Officer Chen observed.

"Yes, and he might have been in some kind of trouble," Maria agreed. "Otherwise, he wouldn't have left everything behind. But one thing's certain - this can't have been a random disappearance. This was planned."

As they left the apartment, Maria couldn't shake the feeling that Mr. Harrison might still be in danger. Whoever had written that note must have known him well enough to convince him to leave everything behind. The question was: where was he now, and could they find him before it was too late?

Word count: 315\`,
        wordCount: 315,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'What evidence suggests Mr. Harrison left in a hurry?',
            options: [
              'His car was missing',
              'The door was unlocked',
              'His wallet and phone were left behind',
              'The window was open'
            ],
            correctAnswer: 'His wallet and phone were left behind',
            explanation: 'El texto menciona que su billetera y teléfono estaban en la encimera de la cocina.',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: The neighbors heard a fight in Mr. Harrison\'s apartment.',
            correctAnswer: 'False',
            explanation: 'Los vecinos reportaron no haber escuchado nada inusual, solo voces.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'How might Mr. Harrison have left the apartment?',
            correctAnswer: 'Through the window using the fire escape',
            explanation: 'Maria nota que la ventana con salida de incendios estaba desbloqueada.',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'What does Detective Rodriguez conclude about the disappearance?',
            options: [
              'It was random',
              'It was planned',
              'It was an accident',
              'It was a mistake'
            ],
            correctAnswer: 'It was planned',
            explanation: 'Maria dice: "this can\'t have been a random disappearance. This was planned."',
            points: 1
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'Find and write FIVE examples of modals of deduction from the text.',
            correctAnswer: 'must have left, can\'t have gone, might have had, could have left, must have known',
            explanation: 'El texto está lleno de modales de deducción usados por los detectives.',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'surveying', definition: 'looking at and examining carefully' },
          { word: 'occupant', definition: 'person living in or using a place' },
          { word: 'in a hurry', definition: 'quickly, without much time' },
          { word: 'disappear into thin air', definition: 'vanish completely and mysteriously' },
          { word: 'warehouse', definition: 'large building for storing goods' }
        ]
      },
      {
        id: 'b2-m2-l3-listening-1',
        type: 'listening',
        audioUrl: '/audio/b2-m2-l3-listening-1.mp3',
        duration: 180,
        allowReplay: true,
        maxReplays: 3,
        transcript: \`Detective: So, let me get this straight. You're saying you didn't see anything suspicious?

Witness: That's right. I mean, I might have heard something around midnight, but I can't be sure. It could have been a cat or something.

Detective: A cat? In a fifth-floor apartment?

Witness: Well, it must have been something. There was definitely a noise.

Detective: And Mr. Harrison - when did you last see him?

Witness: Yesterday morning, I think. He must have been going to work because he was wearing a suit. He usually does on Tuesdays.

Detective: Could he have had any visitors that day?

Witness: I'm not sure. Someone might have come by in the afternoon. I saw a car I didn't recognize parked outside. It can't have been there long because it was gone by dinner time.

Detective: Can you describe the car?

Witness: Not really. It might have been dark blue? Or black? I really can't remember.

Detective: And you're certain you didn't hear anything else?

Witness: Well, now that you mention it, there might have been voices. But they can't have been arguing because everything seemed quiet.

Detective: What time might this have been?

Witness: It must have been around 11 PM. I was watching the news, and it always ends at 11.

Detective: And you're absolutely sure you didn't see anyone leave the building?

Witness: I can't have seen anyone leave because I went to bed right after the news. But someone could have left while I was asleep, I suppose.

Detective: Is there anything else you remember? Anything at all?

Witness: Not really. Although... the note under his door. He must have missed it. I saw it this morning, still there on the floor.

Detective: What note?

Witness: I don't know what it said. But it must have been important. It was in a fancy envelope.\`,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'When did the witness last see Mr. Harrison?',
            options: ['Yesterday morning', 'Yesterday afternoon', 'Last night', 'This morning'],
            correctAnswer: 'Yesterday morning',
            explanation: 'El testigo dice "Yesterday morning, I think. He must have been going to work"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: The witness is certain about what they heard.',
            correctAnswer: 'False',
            explanation: 'El testigo usa mucho "might have", "could have" - no está seguro.',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'What color might the suspicious car have been?',
            correctAnswer: 'Dark blue or black',
            explanation: 'El testigo dice: "It might have been dark blue? Or black?"',
            points: 1
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'Why didn\'t the witness see anyone leave?',
            options: [
              'They weren\'t home',
              'They went to bed',
              'They were watching TV',
              'Their view was blocked'
            ],
            correctAnswer: 'They went to bed',
            explanation: 'El testigo dice "I went to bed right after the news"',
            points: 1
          },
          {
            id: 'q5',
            type: 'short-answer',
            question: 'What important detail does the witness remember at the end?',
            correctAnswer: 'A note in a fancy envelope under the door',
            explanation: 'Menciona una nota en un sobre elegante que el Sr. Harrison no recogió.',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l3-speaking-1',
        type: 'speaking',
        prompt: 'Look at this scenario and make deductions: Your colleague hasn\'t shown up for an important meeting. Their car is in the parking lot, their office is locked, and they\'re not answering their phone. Speculate about what might have happened using modals of deduction. Speak for 2-3 minutes.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use must have/might have/can\'t have + past participle',
          'Consider multiple possibilities',
          'Use expressions like: "judging by...", "based on...", "given that..."',
          'Rank your deductions from most to least likely',
          'Conclude with your strongest theory'
        ]
      },
      {
        id: 'b2-m2-l3-writing-1',
        type: 'writing',
        prompt: 'Write a short detective story (180-220 words) where a character makes deductions to solve a mystery. Use at least 6 different modals of deduction (must, might, could, can\'t + present or perfect form).',
        writingType: 'article',
        minWords: 180,
        maxWords: 220,
        timeLimit: 30,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Create a clear mystery or problem',
          'Have your character find clues',
          'Use modals to make deductions about each clue',
          'Build suspense as clues accumulate',
          'Reveal the solution at the end',
          'Vary your modals (must, might, could, can\'t)'
        ]
      }
    ]
  },

  // Lección 4: Passive Voice Advanced
  {
    id: 'b2-m2-l4',
    title: 'Lección 4: Passive Voice Advanced',
    description: 'Domina todas las formas de voz pasiva incluyendo impersonal',
    duration: 90,
    objectives: [
      'Usar voz pasiva en todos los tiempos verbales',
      'Aplicar estructuras pasivas impersonales (It is said that...)',
      'Convertir oraciones activas a pasivas y viceversa',
      'Entender cuándo la voz pasiva es preferible'
    ],
    exercises: [
      {
        id: 'b2-m2-l4-grammar-1',
        type: 'grammar',
        title: 'Passive Voice: All Tenses',
        grammarPoint: 'be + past participle (all tenses)',
        explanation: \`La voz pasiva se forma con BE + PAST PARTICIPLE en cualquier tiempo:
- Present Simple: "The letter is written"
- Past Simple: "The letter was written"
- Present Perfect: "The letter has been written"
- Future: "The letter will be written"
- Modal: "The letter must be written"

Usamos pasiva cuando:
1. No sabemos quién hizo la acción
2. No es importante quién hizo la acción
3. Queremos enfatizar la acción, no el actor\`,
        examples: [
          'English is spoken in many countries. (Present Simple)',
          'The building was designed by a famous architect. (Past Simple)',
          'The report has been submitted. (Present Perfect)',
          'The results will be announced tomorrow. (Future)',
          'This form must be signed by your manager. (Modal)'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Transform to passive: They make these watches in Switzerland.',
            correctAnswer: 'These watches are made in Switzerland.',
            explanation: 'Present Simple passive: are/is + past participle',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Transform to passive: Someone stole my bike last night.',
            correctAnswer: 'My bike was stolen last night.',
            explanation: 'Past Simple passive: was/were + past participle',
            points: 2
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Choose the correct form: The problem ___ (solve) by tomorrow.',
            options: ['will be solved', 'will solve', 'is solved', 'has been solved'],
            correctAnswer: 'will be solved',
            explanation: 'Future passive: will be + past participle',
            points: 1
          },
          {
            id: 'q4',
            type: 'fill-blank',
            question: 'Transform to passive: They have fired three employees.',
            correctAnswer: 'Three employees have been fired.',
            explanation: 'Present Perfect passive: have/has been + past participle',
            points: 2
          }
        ]
      },
      {
        id: 'b2-m2-l4-grammar-2',
        type: 'grammar',
        title: 'Impersonal Passive Structures',
        grammarPoint: 'It is said/believed/thought/reported that...',
        explanation: \`Estructuras pasivas impersonales se usan para expresar opiniones generales o información de fuentes no específicas:

Estructura 1: It + passive verb + that + clause
- "It is said that the company is closing."
- "It was reported that the meeting was cancelled."

Estructura 2: Subject + passive verb + to + infinitive
- "The company is said to be closing."
- "The meeting was reported to have been cancelled."

Verbos comunes: say, believe, think, report, know, consider, expect, understand\`,
        examples: [
          'It is believed that exercise improves mental health.',
          'He is thought to be the best candidate.',
          'It was reported that 100 people attended the event.',
          'The new product is expected to be a success.',
          'It is known that smoking causes cancer.'
        ],
        questions: [
          {
            id: 'q1',
            type: 'fill-blank',
            question: 'Rewrite: People say that he is very rich.',
            correctAnswer: 'It is said that he is very rich. / He is said to be very rich.',
            explanation: 'Ambas estructuras son correctas para expresar opinión general.',
            points: 2
          },
          {
            id: 'q2',
            type: 'fill-blank',
            question: 'Rewrite: People believe that the company will expand.',
            correctAnswer: 'It is believed that the company will expand. / The company is believed to expand.',
            explanation: 'Pasiva impersonal con "believe"',
            points: 2
          },
          {
            id: 'q3',
            type: 'multiple-choice',
            question: 'Choose the correct form: It ___ that the president will resign.',
            options: ['is thought', 'thinks', 'has thought', 'was thinking'],
            correctAnswer: 'is thought',
            explanation: 'It is + past participle para estructura impersonal',
            points: 1
          }
        ]
      },
      {
        id: 'b2-m2-l4-reading-1',
        type: 'reading',
        title: 'The Discovery of Penicillin',
        text: \`One of the most important medical discoveries of the 20th century was made almost by accident. Penicillin, the first antibiotic, was discovered by Alexander Fleming in 1928, though its full potential wasn't realized until years later.

The story begins when Fleming returned to his laboratory after a summer holiday. Some bacterial cultures had been left on the laboratory bench and had become contaminated with mold. Fleming noticed that the bacteria near the mold had been killed. This observation was followed up with careful experiments, and it was determined that the mold produced a substance that was toxic to many bacteria.

The mold was identified as Penicillium notatum, and the antibacterial substance was named penicillin. However, Fleming couldn't produce penicillin in large quantities, and his discovery was largely forgotten for a decade.

It wasn't until World War II that penicillin's importance was fully recognized. In 1939, a team led by Howard Florey and Ernst Chain at Oxford University began researching Fleming's work. Methods for mass-producing penicillin were developed, and by 1942, the drug was being manufactured on a large scale.

The impact was immediate and dramatic. During the war, thousands of soldiers' lives were saved by penicillin. Infections that had previously been fatal could now be cured. It is estimated that penicillin has saved over 200 million lives since its discovery.

Today, penicillin and other antibiotics are so common that their revolutionary nature is often taken for granted. However, it should be remembered that before antibiotics, even minor infections could be deadly. Modern medicine as we know it was made possible by this accidental discovery.

Fleming, Florey, and Chain were awarded the Nobel Prize in Medicine in 1945 for their work. It is generally accepted that penicillin is one of the most important medical breakthroughs in history.

Word count: 295\`,
        wordCount: 295,
        readingTime: 3,
        questions: [
          {
            id: 'q1',
            type: 'multiple-choice',
            question: 'How was penicillin discovered?',
            options: [
              'Through careful planning',
              'By accident',
              'During the war',
              'By Florey and Chain'
            ],
            correctAnswer: 'By accident',
            explanation: 'El texto dice que fue descubierto "almost by accident"',
            points: 1
          },
          {
            id: 'q2',
            type: 'true-false',
            question: 'True or False: Fleming immediately produced penicillin in large quantities.',
            correctAnswer: 'False',
            explanation: 'El texto dice "Fleming couldn\'t produce penicillin in large quantities"',
            points: 1
          },
          {
            id: 'q3',
            type: 'short-answer',
            question: 'When was penicillin\'s importance fully recognized?',
            correctAnswer: 'During World War II (1939-1945)',
            explanation: 'El texto menciona que fue durante la Segunda Guerra Mundial.',
            points: 2
          },
          {
            id: 'q4',
            type: 'multiple-choice',
            question: 'How many lives is penicillin estimated to have saved?',
            options: [
              'Thousands',
              'Millions',
              'Over 200 million',
              'Over a billion'
            ],
            correctAnswer: 'Over 200 million',
            explanation: 'El texto dice "over 200 million lives"',
            points: 1
          },
          {
            id: 'q5',
            type: 'fill-blank',
            question: 'List FIVE passive structures from the text.',
            correctAnswer: 'was made, was discovered, had been left, had been killed, was followed up, was determined, was identified, was named, was being manufactured, were saved, were awarded, is generally accepted',
            explanation: 'El texto usa extensivamente la voz pasiva, típico de textos científicos e históricos.',
            points: 3
          }
        ],
        vocabularyHelp: [
          { word: 'antibiotic', definition: 'medicine that kills bacteria' },
          { word: 'contaminated', definition: 'made impure by unwanted substances' },
          { word: 'mold', definition: 'fungus that grows in damp conditions' },
          { word: 'toxic', definition: 'poisonous' },
          { word: 'breakthrough', definition: 'important discovery or achievement' }
        ]
      },
      {
        id: 'b2-m2-l4-speaking-1',
        type: 'speaking',
        prompt: 'Describe a process or historical event using mostly passive voice. Choose something like "How chocolate is made" or "The invention of the internet". Speak for 2-3 minutes, using passive structures to focus on the actions rather than the people.',
        timeLimit: 180,
        evaluationCriteria: {
          pronunciation: true,
          fluency: true,
          grammar: true,
          vocabulary: true
        },
        hints: [
          'Use passive voice in different tenses',
          'Include impersonal structures (It is known that...)',
          'Focus on the process/events, not the people',
          'Use sequencing words: First, Then, After that, Finally',
          'Try to use at least 8-10 passive structures'
        ]
      },
      {
        id: 'b2-m2-l4-writing-1',
        type: 'writing',
        prompt: 'Write a formal report (180-220 words) about a recent event or discovery in your field or area of interest. Use passive voice extensively and include at least 2 impersonal passive structures (It is believed that..., It has been reported that...).',
        writingType: 'report',
        minWords: 180,
        maxWords: 220,
        timeLimit: 35,
        rubric: {
          content: 25,
          organization: 25,
          grammar: 25,
          vocabulary: 25
        },
        tips: [
          'Use formal, objective tone',
          'Focus on facts and findings, not opinions',
          'Use passive voice to maintain objectivity',
          'Include impersonal structures',
          'Structure: Introduction, Findings, Conclusion',
          'Use formal linking words (Furthermore, Moreover, However)'
        ]
      }
    ]
  }
`;

console.log('Module 2 Lessons 3-4 generated successfully');
console.log('Total lessons: 2 (Lección 3: Modals of Deduction, Lección 4: Passive Voice Advanced)');
