// ============================================
// MÓDULO 2: DEBATE, OPINIÓN Y PERSUASIÓN
// LECCIÓN 4: PASSIVE VOICE ADVANCED - CONTENIDO COMPLETO
// ============================================

export const MODULE_2_LESSON_4 = {
  id: 'b2-m2-l4',
  title: 'Lección 4: Passive Voice Advanced',
  description: 'Domina todas las formas de voz pasiva incluyendo estructuras impersonales',
  duration: 90,
  objectives: [
    'Usar voz pasiva en todos los tiempos verbales correctamente',
    'Aplicar estructuras pasivas impersonales (It is said that...)',
    'Convertir oraciones activas a pasivas y viceversa con fluidez',
    'Comprender cuándo la voz pasiva es preferible o necesaria',
    'Usar pasiva para escritura formal y académica'
  ],
  exercises: [
    // GRAMMAR EXERCISE 1
    {
      id: 'b2-m2-l4-grammar-1',
      type: 'grammar',
      title: 'Passive Voice: All Tenses Review',
      grammarPoint: 'be + past participle (all tenses)',
      explanation: `La voz pasiva se forma con BE (en cualquier tiempo) + PAST PARTICIPLE del verbo principal.

ESTRUCTURA: Subject + BE (conjugado) + PAST PARTICIPLE + (by + agent)

TODOS LOS TIEMPOS:
• Present Simple: "The letter is written (by her)"
• Present Continuous: "The letter is being written"
• Past Simple: "The letter was written"
• Past Continuous: "The letter was being written"
• Present Perfect: "The letter has been written"
• Past Perfect: "The letter had been written"
• Future Simple: "The letter will be written"
• Future Perfect: "The letter will have been written"
• Modals: "The letter must/should/can be written"

¿CUÁNDO USAMOS PASIVA?
1. No sabemos quién hizo la acción: "The window was broken" (no sabemos quién)
2. No importa quién hizo la acción: "This car was made in Germany" (el fabricante específico no importa)
3. Es obvio quién hizo la acción: "The thief was arrested" (obviamente por la policía)
4. Queremos enfatizar la acción, no el actor: "The Mona Lisa was painted in 1503"
5. En escritura formal/científica/académica: "The experiment was conducted carefully"`,
      examples: [
        'English is spoken in many countries. (Present Simple - fact)',
        'The building was designed by a famous architect. (Past Simple - completed action)',
        'The report has been submitted. (Present Perfect - recent completion)',
        'The results will be announced tomorrow. (Future - scheduled action)',
        'This form must be signed by your manager. (Modal - obligation)',
        'The bridge is being repaired. (Present Continuous - ongoing)',
        'All the invitations had been sent before I arrived. (Past Perfect - before past)',
        'The project can be completed in two weeks. (Modal - possibility)'
      ],
      questions: [
        {
          id: 'q1',
          type: 'fill-blank',
          question: 'Transform to passive: They make these watches in Switzerland.',
          correctAnswer: 'These watches are made in Switzerland.',
          explanation: 'Present Simple passive: are/is + past participle. El énfasis está en los relojes, no en quién los hace.',
          points: 2
        },
        {
          id: 'q2',
          type: 'fill-blank',
          question: 'Transform to passive: Someone stole my bike last night.',
          correctAnswer: 'My bike was stolen last night.',
          explanation: 'Past Simple passive: was/were + past participle. No sabemos quién robó la bicicleta.',
          points: 2
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Choose the correct form: The problem ___ by tomorrow.',
          options: ['will be solved', 'will solve', 'is solved', 'has been solved'],
          correctAnswer: 'will be solved',
          explanation: 'Future passive: will be + past participle. La acción ocurrirá en el futuro.',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Transform to passive: They have fired three employees this week.',
          correctAnswer: 'Three employees have been fired this week.',
          explanation: 'Present Perfect passive: have/has been + past participle. La acción ocurrió recientemente.',
          points: 2
        },
        {
          id: 'q5',
          type: 'fill-blank',
          question: 'Transform to passive: They are building a new hospital in the city center.',
          correctAnswer: 'A new hospital is being built in the city center.',
          explanation: 'Present Continuous passive: is/are being + past participle. La acción está en progreso ahora.',
          points: 2
        },
        {
          id: 'q6',
          type: 'multiple-choice',
          question: 'The ancient ruins ___ by thousands of tourists every year.',
          options: ['visit', 'are visited', 'are visiting', 'have visited'],
          correctAnswer: 'are visited',
          explanation: 'Present Simple passive para acciones habituales o hechos generales.',
          points: 1
        },
        {
          id: 'q7',
          type: 'fill-blank',
          question: 'Transform to passive: You must complete this form before Friday.',
          correctAnswer: 'This form must be completed before Friday.',
          explanation: 'Modal passive: modal + be + past participle. Expresa obligación sobre el formulario.',
          points: 2
        }
      ]
    },

    // GRAMMAR EXERCISE 2
    {
      id: 'b2-m2-l4-grammar-2',
      type: 'grammar',
      title: 'Impersonal Passive Structures',
      grammarPoint: 'It is said/believed/thought/reported that... / Subject + passive verb + to-infinitive',
      explanation: `Las estructuras pasivas impersonales se usan para:
• Expresar opiniones generales sin mencionar quién las tiene
• Reportar información de fuentes no específicas
• Dar un tono más formal y objetivo a la escritura

DOS ESTRUCTURAS PRINCIPALES:

ESTRUCTURA 1: It + passive verb + that + clause
• "It is said that the company is closing."
• "It was reported that 100 people attended."
• "It has been suggested that prices will rise."

ESTRUCTURA 2: Subject + passive verb + to-infinitive
• "The company is said to be closing." (presente)
• "100 people were reported to have attended." (pasado)
• "Prices are expected to rise." (futuro)

VERBOS COMUNES:
say, believe, think, report, know, consider, expect, understand, allege, claim, estimate, assume, suppose

NOTA: La Estructura 2 es más formal y común en escritura académica y periodística.`,
      examples: [
        'It is believed that exercise improves mental health. / Exercise is believed to improve mental health.',
        'It was reported that the CEO resigned. / The CEO was reported to have resigned.',
        'It is thought that he is the best candidate. / He is thought to be the best candidate.',
        'It is known that smoking causes cancer. / Smoking is known to cause cancer.',
        'It is expected that prices will increase. / Prices are expected to increase.',
        'It has been suggested that remote work improves productivity.',
        'It was claimed that over 5,000 people attended the protest.',
        'It is generally accepted that climate change is real.'
      ],
      questions: [
        {
          id: 'q1',
          type: 'fill-blank',
          question: 'Rewrite using impersonal passive: People say that he is very rich.',
          correctAnswer: 'It is said that he is very rich. OR He is said to be very rich.',
          explanation: 'Ambas estructuras son correctas. La primera es más común en inglés hablado, la segunda en escritura formal.',
          points: 2
        },
        {
          id: 'q2',
          type: 'fill-blank',
          question: 'Rewrite using Structure 2: People believe that the company will expand next year.',
          correctAnswer: 'The company is believed to expand next year.',
          explanation: 'Subject + is believed + to-infinitive para expresar opinión general en forma más formal.',
          points: 2
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'Choose the correct form: It ___ that the president will resign soon.',
          options: ['is thought', 'thinks', 'has thought', 'was thinking'],
          correctAnswer: 'is thought',
          explanation: 'It is + past participle del verbo de reporte para estructura impersonal.',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Rewrite using impersonal passive: People reported that 50 people were injured in the accident.',
          correctAnswer: 'It was reported that 50 people were injured in the accident. OR 50 people were reported to have been injured in the accident.',
          explanation: 'Usamos Past Simple del verbo "report" porque la información fue reportada en el pasado.',
          points: 2
        },
        {
          id: 'q5',
          type: 'multiple-choice',
          question: 'The new vaccine ___ to be highly effective.',
          options: ['is believed', 'believes', 'believing', 'has believing'],
          correctAnswer: 'is believed',
          explanation: 'Subject + is believed + to-infinitive para expresar creencia general.',
          points: 1
        },
        {
          id: 'q6',
          type: 'fill-blank',
          question: 'Transform: People know that she won several awards.',
          correctAnswer: 'It is known that she won several awards. OR She is known to have won several awards.',
          explanation: 'Con "to have won" (perfect infinitive) porque los premios son acciones pasadas.',
          points: 2
        }
      ]
    },

    // READING EXERCISE
    {
      id: 'b2-m2-l4-reading-1',
      type: 'reading',
      title: 'The Discovery and Development of Penicillin',
      text: `One of the most important medical discoveries of the 20th century was made almost entirely by accident. Penicillin, the world's first true antibiotic, was discovered by Scottish scientist Alexander Fleming in 1928, though its full therapeutic potential wasn't realized until more than a decade later.

The story begins when Fleming returned to his laboratory at St. Mary's Hospital in London after a summer holiday. Some bacterial cultures had been left on the laboratory bench and had become contaminated with mold during his absence. Upon examining the cultures, Fleming noticed something unusual: the bacteria near the mold colonies had been killed. This unexpected observation was followed up with systematic experiments, and it was determined that the mold produced a substance that was toxic to many types of harmful bacteria.

The mold was identified as belonging to the genus Penicillium notatum, and the antibacterial substance it produced was consequently named penicillin. Fleming published his findings in 1929, but at the time, his discovery was largely overlooked by the medical community. Moreover, Fleming himself couldn't produce penicillin in sufficient quantities for medical use, and without a method for mass production, the discovery remained little more than a laboratory curiosity.

It wasn't until World War II that penicillin's importance was fully recognized and its potential was finally realized. In 1939, a research team led by Howard Florey and Ernst Boris Chain at Oxford University began investigating Fleming's earlier work. Through painstaking research, methods for mass-producing penicillin were developed, and by 1942, the drug was being manufactured on a large enough scale to be used in treating wounded soldiers.

The impact on medicine was immediate and revolutionary. During the war, thousands of soldiers' lives were saved by penicillin treatment. Infections that had previously been considered fatal could now be cured with a simple course of injections. It is estimated that penicillin has saved over 200 million lives since its discovery, and it continues to be widely used today.

The development of penicillin is considered by many to have ushered in the modern era of antibiotic medicine. Before antibiotics, even minor infections could prove deadly - a simple cut or scratch could lead to blood poisoning and death. Operations were extremely risky due to the high probability of post-surgical infection. Today, thanks to antibiotics, such scenarios are largely preventable.

Fleming, Florey, and Chain were awarded the Nobel Prize in Physiology or Medicine in 1945 for their work on penicillin. In his Nobel acceptance speech, Fleming warned that bacteria could develop resistance to penicillin if the drug was used carelessly. Tragically, his warning has proven prescient - antibiotic resistance is now considered one of the greatest threats to global health.

It is generally accepted that penicillin is one of the most significant medical breakthroughs in human history. Modern medicine as we know it was made possible by this fortunate accident, and millions of people alive today owe their lives to Fleming's keen observation and the persistence of Florey and Chain in developing it for practical use.

Word count: 502`,
      wordCount: 502,
      readingTime: 4,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'How was penicillin initially discovered?',
          options: [
            'Through careful planning and systematic research',
            'By accident when mold contaminated bacterial cultures',
            'During World War II research',
            'By Florey and Chain at Oxford University'
          ],
          correctAnswer: 'By accident when mold contaminated bacterial cultures',
          explanation: 'El texto dice claramente: "was made almost entirely by accident" y describe cómo el moho contaminó los cultivos bacterianos.',
          points: 1
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'True or False: Fleming was immediately able to produce penicillin in large quantities.',
          correctAnswer: 'False',
          explanation: 'El texto afirma: "Fleming himself couldn\'t produce penicillin in sufficient quantities for medical use"',
          points: 1
        },
        {
          id: 'q3',
          type: 'short-answer',
          question: 'When and why was penicillin\'s importance finally recognized?',
          correctAnswer: 'During World War II (1939-1942) because it could save soldiers\' lives',
          explanation: 'El texto explica que fue durante la Segunda Guerra Mundial cuando su importancia fue reconocida y se desarrollaron métodos de producción masiva.',
          points: 2
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'How many lives is penicillin estimated to have saved?',
          options: [
            'Thousands',
            'Hundreds of thousands',
            'Over 200 million',
            'Over a billion'
          ],
          correctAnswer: 'Over 200 million',
          explanation: 'El texto dice explícitamente: "It is estimated that penicillin has saved over 200 million lives"',
          points: 1
        },
        {
          id: 'q5',
          type: 'fill-blank',
          question: 'List TEN passive voice structures from the text (any tense).',
          correctAnswer: 'was made, was discovered, wasn\'t realized, had been left, had become contaminated, had been killed, was followed up, was determined, was identified, was named, was largely overlooked, was fully recognized, was finally realized, were developed, was being manufactured, were saved, could be cured, is estimated, is considered, were awarded, was used, has proven, is now considered, is generally accepted, was made possible',
          explanation: 'El texto usa extensivamente la voz pasiva, lo cual es típico y apropiado para textos científicos, históricos y académicos donde el énfasis está en las acciones y descubrimientos, no en los actores.',
          points: 5
        },
        {
          id: 'q6',
          type: 'short-answer',
          question: 'What warning did Fleming give in his Nobel Prize speech, and has it come true?',
          correctAnswer: 'He warned that bacteria could develop resistance to penicillin if used carelessly, and this has proven true - antibiotic resistance is now a major global health threat',
          explanation: 'El texto menciona: "Fleming warned that bacteria could develop resistance... his warning has proven prescient - antibiotic resistance is now considered one of the greatest threats to global health"',
          points: 2
        },
        {
          id: 'q7',
          type: 'multiple-choice',
          question: 'According to the text, what was medical practice like before antibiotics?',
          options: [
            'Exactly the same as today',
            'Minor infections could be deadly and operations were very risky',
            'Only major diseases were dangerous',
            'There were no infections'
          ],
          correctAnswer: 'Minor infections could be deadly and operations were very risky',
          explanation: 'El texto afirma: "even minor infections could prove deadly... Operations were extremely risky due to the high probability of post-surgical infection"',
          points: 1
        }
      ],
      vocabularyHelp: [
        { word: 'antibiotic', definition: 'medicine that kills bacteria and cures infections' },
        { word: 'contaminated', definition: 'made impure or infected by unwanted substances' },
        { word: 'mold/mould', definition: 'type of fungus that grows in damp conditions' },
        { word: 'toxic', definition: 'poisonous; harmful to living organisms' },
        { word: 'therapeutic', definition: 'relating to the treatment and cure of disease' },
        { word: 'painstaking', definition: 'requiring or done with great care and thoroughness' },
        { word: 'ushered in', definition: 'marked the start of; introduced' },
        { word: 'prescient', definition: 'having knowledge of events before they happen; prophetic' },
        { word: 'breakthrough', definition: 'important discovery or development' }
      ]
    },

    // LISTENING EXERCISE
    {
      id: 'b2-m2-l4-listening-1',
      type: 'listening',
      audioUrl: '/audio/b2-m2-l4-listening-1.mp3',
      duration: 240,
      allowReplay: true,
      maxReplays: 3,
      transcript: `[University Lecture - History of Medicine]

Professor Martinez: Good morning, everyone. Today we're going to continue our exploration of medical breakthroughs by looking at the discovery and development of vaccines. Now, I know many of you have been vaccinated against various diseases throughout your lives, but have you ever stopped to think about how vaccines were discovered?

The first vaccine was developed in 1796 by an English doctor named Edward Jenner. At that time, smallpox was one of the deadliest diseases in the world - it's estimated that it killed about 400,000 Europeans annually. Jenner observed that milkmaids who had been infected with cowpox, a much milder disease, seemed to be immune to smallpox.

To test his theory, Jenner performed what would today be considered a highly unethical experiment. He took pus from a cowpox blister and injected it into an eight-year-old boy named James Phipps. Six weeks later, he deliberately infected the boy with smallpox. Fortunately for young James, he didn't develop the disease - he had been made immune by the cowpox injection.

Jenner's method was initially met with skepticism and even ridicule. It was thought by many to be dangerous and unnatural. However, as more people were successfully vaccinated, the technique was gradually accepted. By 1840, vaccination against smallpox had been made mandatory in England.

The word "vaccine" itself comes from the Latin word "vacca," meaning cow, because of the cowpox connection. It was coined by Jenner to describe his technique.

Over the next century, many more vaccines were developed. In 1885, Louis Pasteur created a vaccine for rabies. The tetanus vaccine was introduced in 1924, and by the 1950s, vaccines for polio, measles, and mumps had been developed. Each of these vaccines has saved countless lives and prevented immeasurable suffering.

The development of vaccines is considered by most medical historians to be one of humanity's greatest achievements. It's estimated that vaccination prevents 2-3 million deaths every year, and that's a conservative figure. Diseases that were once common killers - like diphtheria, whooping cough, and polio - are now rare in countries with good vaccination programs.

The success of vaccination led to one of medicine's greatest triumphs: in 1980, smallpox was declared eradicated worldwide. This was the first disease to be completely eliminated by human effort. Think about that - a disease that had killed billions of people throughout history had been wiped out entirely. It's believed that the last natural case of smallpox occurred in Somalia in 1977.

However, it should be noted that vaccines are not without controversy. Throughout history, they have been opposed by various groups for religious, philosophical, or safety concerns. In recent years, a debunked study linking vaccines to autism has been widely shared, despite being thoroughly discredited by the scientific community. This has led to decreased vaccination rates in some areas, which has resulted in outbreaks of diseases like measles that had previously been under control.

The COVID-19 pandemic has highlighted both the importance of vaccines and the challenges in developing them. Multiple effective vaccines were created in record time - usually, vaccine development takes 10-15 years, but COVID vaccines were developed in less than a year. This was achieved through unprecedented international cooperation and funding. It's estimated that COVID vaccines have prevented millions of deaths worldwide.

Looking to the future, new vaccine technologies are being developed that could revolutionize medicine even further. mRNA vaccines, like those used for COVID-19, are being studied for use against cancer, HIV, and other diseases. It's hoped that these new approaches will lead to breakthroughs that were previously thought impossible.

So, to summarize: vaccination has saved more lives than perhaps any other medical intervention. It's estimated that smallpox vaccination alone has saved about 200 million lives. The principle is simple - train the immune system to recognize and fight diseases before they can cause harm. And while vaccines aren't perfect and some people can't receive them due to medical conditions, the evidence overwhelmingly shows that vaccination programs benefit society as a whole.

Any questions? Yes, you in the back?`,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Who developed the first vaccine and when?',
          options: [
            'Louis Pasteur in 1885',
            'Edward Jenner in 1796',
            'James Phipps in 1840',
            'A group of scientists in 1950'
          ],
          correctAnswer: 'Edward Jenner in 1796',
          explanation: 'El profesor dice claramente: "The first vaccine was developed in 1796 by an English doctor named Edward Jenner"',
          points: 1
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'True or False: Jenner\'s vaccination method was immediately accepted by everyone.',
          correctAnswer: 'False',
          explanation: 'El profesor afirma: "Jenner\'s method was initially met with skepticism and even ridicule"',
          points: 1
        },
        {
          id: 'q3',
          type: 'short-answer',
          question: 'Where does the word "vaccine" come from and why?',
          correctAnswer: 'From the Latin word "vacca" meaning cow, because of the cowpox connection',
          explanation: 'El profesor explica: "The word \'vaccine\' itself comes from the Latin word \'vacca,\' meaning cow, because of the cowpox connection"',
          points: 2
        },
        {
          id: 'q4',
          type: 'multiple-choice',
          question: 'How many deaths does vaccination prevent each year according to the lecture?',
          options: [
            'Hundreds',
            'Thousands',
            '2-3 million',
            '200 million'
          ],
          correctAnswer: '2-3 million',
          explanation: 'El profesor dice: "It\'s estimated that vaccination prevents 2-3 million deaths every year"',
          points: 1
        },
        {
          id: 'q5',
          type: 'short-answer',
          question: 'What was the first disease to be completely eradicated, and when?',
          correctAnswer: 'Smallpox in 1980',
          explanation: 'El profesor menciona: "in 1980, smallpox was declared eradicated worldwide. This was the first disease to be completely eliminated"',
          points: 2
        },
        {
          id: 'q6',
          type: 'multiple-choice',
          question: 'How long did it take to develop COVID-19 vaccines compared to typical vaccine development?',
          options: [
            'COVID vaccines took longer than usual',
            'About the same time - 10-15 years',
            'Less than a year, compared to the usual 10-15 years',
            'Exactly 5 years'
          ],
          correctAnswer: 'Less than a year, compared to the usual 10-15 years',
          explanation: 'El profesor explica: "usually, vaccine development takes 10-15 years, but COVID vaccines were developed in less than a year"',
          points: 1
        },
        {
          id: 'q7',
          type: 'short-answer',
          question: 'Count how many times passive voice structures are used in the lecture. List at least 8 examples.',
          correctAnswer: 'was developed, was killed, had been infected, had been made, was initially met, was thought, was gradually accepted, had been made, was coined, were developed, was introduced, has saved, are now rare, was declared, was the first to be eliminated, had been wiped out, is believed, occurred, have been opposed, has been widely shared, being thoroughly discredited, has led, has resulted, had previously been, were created, was achieved, are being developed, are being studied, is hoped, were previously thought, has saved, were',
          explanation: 'La conferencia usa extensivamente la voz pasiva, típica del discurso académico y científico formal.',
          points: 3
        }
      ]
    },

    // SPEAKING EXERCISE
    {
      id: 'b2-m2-l4-speaking-1',
      type: 'speaking',
      prompt: `Choose ONE of these topics and describe it using MOSTLY passive voice (at least 80% of your sentences should be passive):

OPTION 1: "How chocolate is made" - from cacao beans to chocolate bar
OPTION 2: "The invention and development of the internet"
OPTION 3: "How a book gets published" - from manuscript to bookstore
OPTION 4: "The process of making a movie" - from script to cinema

Your description should:
- Be 2-3 minutes long
- Focus on the PROCESS and ACTIONS, not the people
- Use passive voice in multiple tenses
- Include at least 2 impersonal passive structures (It is known that..., It has been estimated that...)
- Use appropriate sequencing words (First, Then, After that, Next, Finally)

Speak for 2-3 minutes.`,
      timeLimit: 180,
      evaluationCriteria: {
        pronunciation: true,
        fluency: true,
        grammar: true,
        vocabulary: true
      },
      hints: [
        'Start with background/introduction using impersonal passive',
        'Describe each step of the process using passive voice',
        'Use different tenses: "is done" (habitual), "was invented" (past), "has been improved" (present perfect)',
        'Include time expressions: "nowadays", "traditionally", "in recent years"',
        'Use sequencing: "First... Then... After that... Next... Finally..."',
        'End with a conclusion using impersonal passive',
        'Avoid mentioning specific people unless absolutely necessary',
        'Focus on WHAT happens, not WHO does it'
      ]
    },

    // WRITING EXERCISE
    {
      id: 'b2-m2-l4-writing-1',
      type: 'writing',
      prompt: `Write a formal report (180-220 words) about a recent scientific discovery, technological development, or important event in your field or area of interest.

REQUIREMENTS:
• Use passive voice extensively (aim for 70-80% of sentences in passive)
• Include at least 3 impersonal passive structures:
  - "It is believed that..."
  - "It has been reported that..."
  - "It was discovered that..."
  - etc.
• Use passive in different tenses (present, past, present perfect, future)
• Maintain formal, objective tone throughout
• Include: Introduction, Main findings/developments, Conclusion

Your report should read like something from a scientific journal or formal news report.`,
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
        'Use formal, objective language - avoid "I think" or personal opinions',
        'Start with a clear topic sentence introducing your subject',
        'Use passive voice to maintain objectivity: "It was found that..." not "Scientists found that..."',
        'Include specific data or facts if possible',
        'Use formal linking words: Furthermore, Moreover, However, Consequently, Therefore',
        'Organize clearly: Introduction → Findings/Development → Significance → Conclusion',
        'Use Present Perfect for recent discoveries: "has been discovered", "have been developed"',
        'Use Past Simple for specific past events: "was announced", "were tested"',
        'End with implications or future outlook',
        'Proofread for consistent formal tone and correct passive structures'
      ],
      exampleResponse: `New Malaria Vaccine Shows Promising Results in Clinical Trials

A groundbreaking malaria vaccine has been developed by researchers at Oxford University, and promising results have recently been reported from Phase 3 clinical trials conducted in West Africa.

It is estimated that malaria kills over 400,000 people annually, with children under five being particularly vulnerable. For decades, an effective vaccine has been sought by the global health community, but previous attempts have been largely unsuccessful.

The new vaccine, called R21/Matrix-M, was tested on over 4,800 children aged 5-17 months in Burkina Faso. It has been found that the vaccine provides up to 77% protection against malaria when administered in three doses. Furthermore, it was discovered that a fourth booster dose maintains this high level of protection for at least two years.

It is believed by many experts that this vaccine could be a game-changer in the fight against malaria. The drug has already been approved for use in Ghana, and it is expected that other African countries will follow suit in the coming months.

However, it should be noted that large-scale manufacturing and distribution will be required before the vaccine can be widely deployed. Nonetheless, this development is considered to be one of the most significant advances in malaria prevention in recent history. (207 words)`
    }
  ]
};

console.log('✅ MODULE 2 LESSON 4 CREATED - Passive Voice Advanced');
console.log('Total exercises: ' + MODULE_2_LESSON_4.exercises.length);
