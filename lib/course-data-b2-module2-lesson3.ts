// ============================================
// MÓDULO 2: DEBATE, OPINIÓN Y PERSUASIÓN
// LECCIONES 3, 4, 5, 6 - CONTENIDO COMPLETO
// ============================================

// Estas lecciones se añadirán al archivo principal course-data-b2.ts

export const MODULE_2_LESSON_3 = {
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
    // GRAMMAR EXERCISE 1
    {
      id: 'b2-m2-l3-grammar-1',
      type: 'grammar',
      title: 'Modals of Deduction: Present',
      grammarPoint: 'Must/might/can\'t + infinitive (present deduction)',
      explanation: `Usamos modals para expresar qué tan seguros estamos de algo:

• MUST (95% certain): "She must be at home" (Ella debe estar en casa - estoy casi seguro)
• MIGHT/MAY/COULD (50% certain): "He might know the answer" (Él podría saber la respuesta - es posible)
• CAN'T (95% certain negative): "That can't be true" (Eso no puede ser verdad - estoy casi seguro que es falso)

Estructura: Modal + base verb
- I/You/He/She/It/We/They + must/might/can't + be/know/have, etc.`,
      examples: [
        'She must be tired. She\'s been working all day. (Deducción lógica - 95% seguro)',
        'They might be in a meeting. Their phones are off. (Posibilidad - 50%)',
        'He can\'t be the manager. He looks too young. (Imposibilidad - 95% seguro que no)',
        'You must be joking! That\'s unbelievable. (Seguridad fuerte)',
        'She could be American, judging by her accent. (Especulación)',
        'It might rain later. Look at those dark clouds. (Posibilidad)',
        'They can\'t be hungry. They just ate an hour ago. (Imposibilidad lógica)'
      ],
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Choose the correct modal: The lights are on. Someone ___ be home.',
          options: ['must', 'might', 'can\'t', 'could'],
          correctAnswer: 'must',
          explanation: 'Usamos "must" porque las luces encendidas son evidencia fuerte de que alguien está en casa. Es una deducción lógica con alta certeza.',
          points: 1
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'She ___ be the new teacher. She was hired yesterday.',
          options: ['can\'t', 'might', 'must', 'could'],
          correctAnswer: 'must',
          explanation: '"Must" expresa deducción fuerte basada en evidencia concreta (fue contratada ayer). Tenemos casi 100% de certeza.',
          points: 1
        },
        {
          id: 'q3',
          type: 'fill-blank',
          question: 'Complete: He ___ (not/be) serious. He\'s always joking.',
          correctAnswer: 'can\'t be',
          explanation: 'Can\'t be para expresar que es imposible que sea serio, basado en su comportamiento habitual.',
          points: 1
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'They haven\'t answered yet. They ___ be busy.',
          options: ['must', 'might', 'can\'t', 'mustn\'t'],
          correctAnswer: 'might',
          explanation: 'Might expresa posibilidad (50% seguro) - no tenemos evidencia fuerte, solo especulamos.',
          points: 1
        },
        {
          id: 'q5',
          type: 'fill-blank',
          question: 'Transform: I\'m sure that\'s not her car. (Use can\'t)',
          correctAnswer: 'That can\'t be her car.',
          explanation: 'Can\'t + be para expresar certeza negativa (casi 100% seguro que no es su auto).',
          points: 2
        },
        {
          id: 'q6',
          type: 'multiple-choice',
          question: 'This bag ___ be expensive. It\'s a designer brand.',
          options: ['might', 'must', 'could', 'can\'t'],
          correctAnswer: 'must',
          explanation: 'Must porque tenemos evidencia fuerte (marca de diseñador) para deducir que es caro.',
          points: 1
        }
      ]
    },

    // GRAMMAR EXERCISE 2
    {
      id: 'b2-m2-l3-grammar-2',
      type: 'grammar',
      title: 'Modals of Deduction: Past',
      grammarPoint: 'Must/might/can\'t + have + past participle (past deduction)',
      explanation: `Para deducciones sobre el pasado, usamos: Modal + HAVE + PAST PARTICIPLE

• MUST HAVE: "She must have missed the bus" (Debe haber perdido el autobús - deducción lógica pasada)
• MIGHT/MAY/COULD HAVE: "He might have forgotten" (Puede que haya olvidado - posibilidad pasada)
• CAN'T HAVE: "They can't have left already" (No pueden haberse ido ya - imposibilidad pasada)

Estructura: Modal + have + past participle
- I/You/He/She/It/We/They + must/might/can't + have + been/done/gone, etc.`,
      examples: [
        'She must have studied hard. She got 100% on the exam. (Deducción lógica)',
        'They might have taken the wrong train. They\'re very late. (Posibilidad)',
        'He can\'t have finished already. He started 5 minutes ago. (Imposibilidad)',
        'You must have been disappointed when you heard the news. (Certeza pasada)',
        'She could have called, but I didn\'t hear my phone. (Especulación)',
        'They might have forgotten about the meeting. (Posibilidad - no estamos seguros)',
        'He can\'t have said that. He would never be so rude. (Imposibilidad - estamos seguros que no)'
      ],
      questions: [
        {
          id: 'q1',
          type: 'fill-blank',
          question: 'Complete: He\'s not here. He ___ (leave) early.',
          correctAnswer: 'must have left',
          explanation: 'Must have + past participle para deducción fuerte sobre el pasado. La evidencia (no está aquí) sugiere que se fue temprano.',
          points: 1
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'She ___ the email. It\'s not in her inbox.',
          options: ['might not have received', 'must not receive', 'can\'t receive', 'mustn\'t have received'],
          correctAnswer: 'might not have received',
          explanation: 'Might not have expresa posibilidad de que no recibió el email. No tenemos certeza total.',
          points: 1
        },
        {
          id: 'q3',
          type: 'short-answer',
          question: 'Rewrite using can\'t have: I\'m sure they didn\'t see us.',
          correctAnswer: 'They can\'t have seen us.',
          explanation: 'Can\'t have + past participle para expresar imposibilidad en el pasado (estamos 95% seguros que no nos vieron).',
          points: 2
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Complete: She ___ (forget) about the deadline. It was so important.',
          correctAnswer: 'can\'t have forgotten',
          explanation: 'Can\'t have forgotten porque es muy improbable que olvidara algo tan importante.',
          points: 1
        },
        {
          id: 'q5',
          type: 'multiple-choice',
          question: 'They look exhausted. They ___ all night.',
          options: ['must have worked', 'might work', 'can\'t work', 'must work'],
          correctAnswer: 'must have worked',
          explanation: 'Must have worked (pasado) porque su apariencia exhausta es evidencia de que trabajaron toda la noche.',
          points: 1
        }
      ]
    },

    // READING EXERCISE
    {
      id: 'b2-m2-l3-reading-1',
      type: 'reading',
      title: 'The Mysterious Disappearance',
      text: `Detective Maria Rodriguez stood in the empty apartment, surveying the scene carefully. Something wasn't right. The door had been locked from the inside, yet the occupant, Mr. Harrison, was nowhere to be found. His car was still in the garage, and his wallet and phone were sitting on the kitchen counter, untouched.

"He must have left in a hurry," suggested Officer Chen, pointing to the unmade bed and half-eaten breakfast still on the table. "Look at this - his coffee is still warm. He can't have been gone long."

"Perhaps," Maria replied thoughtfully, examining the scene, "but he can't have gone far without his car or phone. People don't just disappear into thin air. He might have had an emergency, but surely he would have taken his wallet? Something doesn't add up."

The neighbors reported hearing nothing unusual during the night or early morning, though Mrs. Patterson from the apartment upstairs mentioned that Mr. Harrison might have had a visitor late the previous evening. "I heard voices around 11 PM," she explained nervously. "Two people talking - one must have been Mr. Harrison, but I couldn't make out what they were saying. They might have been arguing, but I can't be certain."

Maria walked over to examine the window overlooking the fire escape. It was unlocked - unusual for someone as security-conscious as Mr. Harrison was reported to be. "He could have left this way," she mused, looking down at the metal stairs. "But why would he? Unless..." She paused, noticing something: a crumpled note in the wastepaper basket near the desk.

Smoothing it out carefully with gloved hands, she read: "Meet me at the old warehouse on Pier 17. Come alone. 11:30 PM. Don't tell anyone."

"So he must have known whoever wrote this," Officer Chen observed, reading over her shoulder. "Otherwise, he wouldn't have agreed to meet them in such a suspicious location."

"Yes, and he might have been in some kind of trouble," Maria agreed grimly. "Otherwise, he wouldn't have left everything behind - his phone, his wallet, his car. People in trouble don't think clearly. But one thing's certain - this can't have been a random disappearance. This was planned, either by him or by whoever sent this note."

She took photos of the note and bagged it as evidence. "The handwriting must have been disguised - it's too careful, too deliberate. Whoever wrote this didn't want to be identified."

As they prepared to leave the apartment to check the warehouse, Maria couldn't shake an uneasy feeling. Mr. Harrison might still be in danger - if he had gone to meet whoever wrote that note, the meeting might not have gone well. Whoever had convinced him to leave everything behind and sneak out via the fire escape must have known him well enough to make him trust them, or frightened him enough to make him comply.

The question weighing on Maria's mind was urgent: where was Mr. Harrison now, and could they find him before it was too late?

Word count: 518`,
      wordCount: 518,
      readingTime: 4,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'What evidence suggests Mr. Harrison left in a hurry?',
          options: [
            'His car was missing',
            'The door was unlocked',
            'His wallet and phone were left behind, and his coffee was still warm',
            'The window was wide open'
          ],
          correctAnswer: 'His wallet and phone were left behind, and his coffee was still warm',
          explanation: 'El texto menciona explícitamente que su billetera y teléfono estaban en la encimera, y Officer Chen nota que el café aún estaba tibio.',
          points: 1
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'True or False: The neighbors heard a fight in Mr. Harrison\'s apartment.',
          correctAnswer: 'False',
          explanation: 'Mrs. Patterson escuchó voces y menciona que "might have been arguing" pero no está segura. No reportaron escuchar una pelea definitiva.',
          points: 1
        },
        {
          id: 'q3',
          type: 'short-answer',
          question: 'How might Mr. Harrison have left the apartment?',
          correctAnswer: 'Through the window using the fire escape',
          explanation: 'Maria descubre que la ventana que da a la escalera de incendios estaba desbloqueada, sugiriendo que pudo haber salido por ahí.',
          points: 2
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'What does Detective Rodriguez conclude about the disappearance?',
          options: [
            'It was random and unplanned',
            'It was planned, either by Mr. Harrison or by whoever sent the note',
            'It was definitely an accident',
            'It was a simple mistake'
          ],
          correctAnswer: 'It was planned, either by Mr. Harrison or by whoever sent the note',
          explanation: 'Maria dice explícitamente: "this can\'t have been a random disappearance. This was planned, either by him or by whoever sent this note."',
          points: 1
        },
        {
          id: 'q5',
          type: 'fill-blank',
          question: 'Find and write SEVEN examples of modals of deduction from the text (must have, might have, can\'t have, could have).',
          correctAnswer: 'must have left, can\'t have been, can\'t have gone, might have had, might have been, could have left, must have been, might have been, must have known, might have been, wouldn\'t have, can\'t have been, must have been, might have, might not have',
          explanation: 'El texto está repleto de modales de deducción usados por los detectives mientras analizan la evidencia y especulan sobre lo que ocurrió.',
          points: 3
        },
        {
          id: 'q6',
          type: 'short-answer',
          question: 'According to Detective Rodriguez, why might Mr. Harrison have left without his phone and wallet?',
          correctAnswer: 'He might have been in trouble and people in trouble don\'t think clearly',
          explanation: 'Maria dice: "he might have been in some kind of trouble. Otherwise, he wouldn\'t have left everything behind... People in trouble don\'t think clearly."',
          points: 2
        }
      ],
      vocabularyHelp: [
        { word: 'surveying', definition: 'looking at and examining carefully and thoroughly' },
        { word: 'occupant', definition: 'person living in or using a place' },
        { word: 'in a hurry', definition: 'quickly, without much time, rushing' },
        { word: 'disappear into thin air', definition: 'vanish completely and mysteriously with no trace' },
        { word: 'warehouse', definition: 'large building for storing goods and products' },
        { word: 'security-conscious', definition: 'very careful about safety and security' },
        { word: 'disguised', definition: 'changed in appearance to hide true identity' }
      ]
    },

    // LISTENING EXERCISE
    {
      id: 'b2-m2-l3-listening-1',
      type: 'listening',
      audioUrl: '/audio/b2-m2-l3-listening-1.mp3',
      duration: 220,
      allowReplay: true,
      maxReplays: 3,
      transcript: `[Phone call recording - Detective's interview with witness]

Detective Rodriguez: Thank you for agreeing to speak with me, Mrs. Patterson. I know this must be stressful. So, let me get this straight - you're saying you didn't see anything suspicious yesterday?

Mrs. Patterson: That's right, Detective. I mean, I might have heard something around midnight, but I can't be completely sure what it was. It could have been a cat knocking something over, or maybe the wind. You know how old buildings creak and groan.

Detective: A cat? In a fifth-floor apartment building with no balconies?

Mrs. Patterson: Well, it must have been something. There was definitely a noise - a kind of scraping or dragging sound. Now that I think about it, it might have been furniture being moved.

Detective: I see. And Mr. Harrison - when did you last see him?

Mrs. Patterson: Yesterday morning, I think. It must have been around 8 AM because I was taking out my recycling, which I always do on Tuesdays. He must have been going to work because he was wearing a suit and carrying his briefcase. He usually does on Tuesdays - business meeting days, he once told me.

Detective: Did he seem normal? Worried about anything?

Mrs. Patterson: Now that you mention it, he might have been a bit distracted. He didn't say his usual "good morning" - just nodded and hurried past. That can't have been normal for him. He's usually very friendly and chatty.

Detective: Could he have had any visitors yesterday? Either during the day or evening?

Mrs. Patterson: I'm not entirely sure about the daytime - I was at my daughter's house until 5 PM. But someone might have come by in the evening. I saw a car I didn't recognize parked outside around 7 PM. A dark sedan - it might have been a BMW or Mercedes, one of those expensive German cars. It can't have been there long because it was gone by the time I looked again at 8:30.

Detective: Can you describe the car more specifically? Color, license plate?

Mrs. Patterson: Not really, I'm afraid. It might have been dark blue? Or black? The streetlight isn't very good there. And I really can't remember seeing the license plate. My eyesight isn't what it used to be, you understand.

Detective: Of course. And you're certain you didn't hear anything else throughout the evening?

Mrs. Patterson: Well, now that you mention it, there might have been voices around 11 PM. I was getting ready for bed and I heard what sounded like two people talking in Mr. Harrison's apartment. One must have been Mr. Harrison himself - I recognize his voice - but the other... I couldn't say. It might have been a man or a woman. The walls muffle sound, you see.

Detective: Did they sound like they were arguing?

Mrs. Patterson: They can't have been arguing loudly because I would have heard that clearly. But there was definitely tension in the voices - that sharp tone people use when they're upset but trying to keep quiet. They might have been having a disagreement, but a controlled one, if that makes sense.

Detective: What time might this have been exactly?

Mrs. Patterson: It must have been around 11 PM, maybe 11:15. I was watching the late news, and it always ends at 11. I heard the voices just as I was turning off the TV.

Detective: And after that? Did you hear anyone leave the building?

Mrs. Patterson: I can't have seen or heard anyone leave because I went to bed right after brushing my teeth, around 11:30. And I'm a heavy sleeper - someone could have driven a truck past my window and I wouldn't have woken up. But I suppose someone could have left while I was asleep.

Detective: Is there anything else you remember? Any detail, no matter how small?

Mrs. Patterson: Not really. Although... wait, there was one thing. The note under his door. I saw it this morning when I went down to get my newspaper. It must have been slipped under there sometime during the night because it wasn't there when I came home at 8:30 last night.

Detective: What note? Can you describe it?

Mrs. Patterson: I didn't read it, of course - that would have been rude. But it must have been important because it was in a fancy cream-colored envelope, the expensive kind. The kind you might use for a wedding invitation or formal event. It definitely wasn't junk mail.

Detective: And it was still there this morning?

Mrs. Patterson: Yes, lying on the floor just inside his apartment door. He must have missed it when he left, or... well, maybe he never came back through the front door at all?

Detective: That's very helpful, Mrs. Patterson. One last question - in the time you've known Mr. Harrison, did he ever mention any problems? Threats? People who might have wanted to harm him?

Mrs. Patterson: No, never. He's such a quiet man. He must have been well-liked at work - he mentioned winning some employee award last month. He can't have had enemies. But then again, you never really know people, do you? He might have had a whole other life I knew nothing about.`,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'When did the witness last see Mr. Harrison?',
          options: ['Yesterday morning around 8 AM', 'Yesterday afternoon', 'Last night at 11 PM', 'This morning'],
          correctAnswer: 'Yesterday morning around 8 AM',
          explanation: 'Mrs. Patterson dice: "Yesterday morning, I think. It must have been around 8 AM because I was taking out my recycling"',
          points: 1
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'True or False: Mrs. Patterson is certain about everything she heard and saw.',
          correctAnswer: 'False',
          explanation: 'La testigo usa constantemente "might have", "could have", "can\'t be sure" - claramente no está segura de muchos detalles.',
          points: 1
        },
        {
          id: 'q3',
          type: 'short-answer',
          question: 'What color might the suspicious car have been, according to Mrs. Patterson?',
          correctAnswer: 'Dark blue or black',
          explanation: 'Mrs. Patterson dice: "It might have been dark blue? Or black? The streetlight isn\'t very good there."',
          points: 1
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'Why didn\'t Mrs. Patterson see anyone leave the building?',
          options: [
            'She wasn\'t home',
            'She went to bed and is a heavy sleeper',
            'She was watching TV',
            'Her view was blocked'
          ],
          correctAnswer: 'She went to bed and is a heavy sleeper',
          explanation: 'Ella dice: "I went to bed right after brushing my teeth, around 11:30. And I\'m a heavy sleeper"',
          points: 1
        },
        {
          id: 'q5',
          type: 'short-answer',
          question: 'What important detail does the witness remember at the end about the note?',
          correctAnswer: 'A note in a fancy cream-colored envelope under the door that wasn\'t there at 8:30 PM but was there in the morning',
          explanation: 'Mrs. Patterson menciona una nota en un sobre elegante color crema que apareció durante la noche.',
          points: 2
        },
        {
          id: 'q6',
          type: 'multiple-choice',
          question: 'How did Mr. Harrison seem when the witness saw him yesterday morning?',
          options: [
            'Normal and chatty as usual',
            'Distracted and didn\'t give his usual greeting',
            'Angry and upset',
            'Excited and happy'
          ],
          correctAnswer: 'Distracted and didn\'t give his usual greeting',
          explanation: 'Mrs. Patterson nota: "he might have been a bit distracted. He didn\'t say his usual \'good morning\'"',
          points: 1
        }
      ]
    },

    // SPEAKING EXERCISE
    {
      id: 'b2-m2-l3-speaking-1',
      type: 'speaking',
      prompt: `You are a detective investigating a mystery. Look at this scenario and make deductions using modals:

SCENARIO: Your colleague Sarah hasn't shown up for an important board meeting. Her car is in the parking lot with the engine cold. Her office is locked but her computer is on and logged in. Her coffee mug on the desk is full but cold. Her coat and purse are on her chair. She's not answering her phone or emails. The meeting started 30 minutes ago.

Make logical deductions about:
1. When she might have arrived at work
2. What might have happened to her
3. Where she could be now
4. Why she isn't answering
5. What you think is the most likely explanation

Use modals of deduction (must have, might have, could have, can't have) throughout your response. Speak for 2-3 minutes.`,
      timeLimit: 180,
      evaluationCriteria: {
        pronunciation: true,
        fluency: true,
        grammar: true,
        vocabulary: true
      },
      hints: [
        'Start by analyzing the evidence systematically',
        'Use "must have" for strong deductions based on evidence',
        'Use "might have/could have" for possibilities you\'re not sure about',
        'Use "can\'t have" for things you think are impossible',
        'Use phrases like: "judging by...", "based on...", "given that...", "the fact that... suggests..."',
        'Consider multiple theories, then explain which seems most likely',
        'Build your case logically, like a real detective would'
      ]
    },

    // WRITING EXERCISE
    {
      id: 'b2-m2-l3-writing-1',
      type: 'writing',
      prompt: `Write a short detective story or mystery scenario (180-220 words) where a character makes deductions to solve a puzzle or mystery. 

Your story must include:
- A clear mystery or unusual situation
- Physical evidence or clues
- At least 8 different modal deductions (must have, might have, could have, can't have - in both present and past forms)
- A logical conclusion or solution

The story can be about anything: a missing item, a mysterious event, strange behavior, etc.`,
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
        'Start with a hook - introduce the mystery immediately',
        'Present clues one by one',
        'Have your character make deductions about each clue using different modals',
        'Build suspense - make some deductions turn out wrong',
        'Use a variety of modal structures (must be, might have been, can\'t have done, could have gone, etc.)',
        'End with a satisfying solution or twist',
        'Use detective/mystery vocabulary (evidence, clue, suspect, deduce, conclude)',
        'Vary your sentence structures - don\'t start every sentence with a modal'
      ],
      exampleResponse: `The Missing Trophy

Detective Lisa Chen stood in the empty trophy case, puzzled. The championship trophy had vanished overnight, yet there were no signs of forced entry. The security cameras had been offline - they must have been disabled deliberately. But how?

"The janitor must have access to the electrical room," her partner suggested. "He could have cut the power."

"Possibly," Lisa replied, "but he can't have taken the trophy. He was on vacation all week - we verified that." She examined the case more closely. The lock wasn't broken; someone must have had a key.

Then she noticed something: fresh scratches around the lock. "These might have been made recently, maybe by someone picking the lock. But look - they're on the wrong side. Someone might have been practicing... from inside the case."

Suddenly it clicked. "The trophy can't have been stolen - it must have been hidden!" She checked the other trophies. Behind the largest one sat the "missing" trophy.

"But why?" her partner asked.

"Insurance fraud. The owner must have reported it stolen to collect insurance money. He couldn't have known we'd notice the scratches proving he practiced picking his own lock."

Case closed. (206 words)`
    }
  ]
};

console.log('✅ MODULE 2 LESSON 3 CREATED - Modals of Deduction');
console.log('Total exercises: ' + MODULE_2_LESSON_3.exercises.length);
