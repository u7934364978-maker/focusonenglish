/**
 * Unit 4 — Formación del personal / Staff Training (B2)
 * Grammar lesson: Reported Speech
 * — Estilo indirecto —
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_4_LESSON_1_GRAMMAR: Exercise[] = [
  {
    id: 'rec-b2-u4-l1-g1',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Staff Training',
    difficulty: 'medium',
    content: {
      title: '[[Reported Speech — Statements|Estilo indirecto — Afirmaciones]]',
      instructions: '[[Complete the reported speech version of the sentence. Change the verb tense and pronouns as necessary.|Completa la versión en estilo indirecto de la frase. Cambia el tiempo verbal y los pronombres según sea necesario.]]',
      questions: [
        {
          question: '[[Direct: \"The training will begin at nine o\'clock sharp.\" → She said that the training ___ at nine o\'clock sharp.|Directo: «La formación empezará a las nueve en punto.» → Dijo que la formación ___ a las nueve en punto.]]',
          correctAnswer: 'would begin',
          explanation: '[[Will → would|Will → would]] [[in reported speech|en estilo indirecto]]. [[This is the most common tense shift|Este es el cambio de tiempo más común]]: [[future simple|futuro simple]] (will + infinitive) [[becomes|se convierte en]] [[conditional|condicional]] (would + infinitive) [[when the reporting verb is in the past|cuando el verbo de reporte está en pasado]].',
        },
        {
          question: '[[Direct: \"I am not happy with the new induction schedule.\" → The trainer told me that he ___ happy with the new induction schedule.|Directo: «No estoy contento con el nuevo calendario de incorporación.» → El formador me dijo que él ___ contento con el nuevo calendario de incorporación.]]',
          correctAnswer: 'was not',
          explanation: '[[Present simple → past simple|Presente simple → pasado simple]] [[in reported speech|en estilo indirecto]]. "Am" [[becomes|se convierte en]] "was". [[Also note|Nota también]] [[the pronoun shift|el cambio de pronombre]]: "I" → "he" [[depending on context|dependiendo del contexto]].',
        },
        {
          question: '[[Direct: \"We have already completed the SOP review.\" → They said that they ___ the SOP review.|Directo: «Ya hemos completado la revisión de los procedimientos.» → Dijeron que ellos ___ la revisión de los procedimientos.]]',
          correctAnswer: 'had already completed',
          explanation: '[[Present perfect → past perfect|Presente perfecto → pasado perfecto]] [[in reported speech|en estilo indirecto]]. "Have completed" [[becomes|se convierte en]] "had completed". [[The adverb "already"|El adverbio "already"]] [[keeps its position|mantiene su posición]] [[between had and the past participle|entre had y el participio pasado]].',
        },
        {
          question: '[[Direct: \"New staff must shadow an experienced colleague for their first two weeks.\" → The manager explained that new staff ___ shadow an experienced colleague for their first two weeks.|Directo: «El nuevo personal debe hacer shadowing con un compañero experimentado las dos primeras semanas.» → El director explicó que el nuevo personal ___ hacer shadowing con un compañero experimentado las dos primeras semanas.]]',
          correctAnswer: 'had to',
          explanation: '"Must" [[becomes|se convierte en]] "had to" [[in reported speech|en estilo indirecto]] [[when reporting a past obligation|cuando se reporta una obligación pasada]]. "Must" [[has no past form|no tiene forma pasada]], [[so "had to"|por eso "had to"]] [[is used instead|se usa en su lugar]].',
        },
        {
          question: '[[Direct: \"I can\'t attend the briefing tomorrow.\" → She told her supervisor that she ___ attend the briefing the following day.|Directo: «No puedo asistir al briefing de mañana.» → Le dijo a su supervisor que ella ___ asistir al briefing al día siguiente.]]',
          correctAnswer: 'could not',
          explanation: '"Can\'t → could not/couldn\'t" [[in reported speech|en estilo indirecto]]. [[Also note|Nota también]] [[the time shift|el cambio de tiempo]]: "tomorrow" → "the following day" ([[or "the next day"|o "the next day"]]). [[Time expressions change|Las expresiones de tiempo cambian]] [[to reflect the new time frame|para reflejar el nuevo marco temporal]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u4-l1-g2',
    type: 'multiple-choice',
    level: 'B2',
    topic: 'Staff Training',
    difficulty: 'medium',
    content: {
      title: '[[Reported Speech — Questions & Commands|Estilo indirecto — Preguntas y órdenes]]',
      instructions: '[[Choose the correct reported version of each sentence.|Elige la versión correcta en estilo indirecto de cada frase.]]',
      questions: [
        {
          question: '[[Direct question: \"Have you completed your appraisal form?\" → The supervisor asked her ___.|Pregunta directa: «¿Has completado tu formulario de evaluación?» → El supervisor le preguntó ___.]]',
          options: [
            'if she had completed her appraisal form',
            'if she has completed her appraisal form',
            'whether had she completed her appraisal form',
            'did she complete her appraisal form',
          ],
          correctAnswer: 0,
          explanation: '[[Reported yes/no questions|Las preguntas sí/no en estilo indirecto]] [[use "if" or "whether"|usan "if" o "whether"]] + [[subject + verb order|orden sujeto + verbo]] (no inversion). [[Present perfect|Presente perfecto]] (have completed) → [[past perfect|pasado perfecto]] (had completed). [[The pronoun|El pronombre]] "you" → "she".',
        },
        {
          question: '[[Direct: \"Please don\'t discuss your salary with other colleagues.\" → The HR manager told the new employee ___.|Directo: «Por favor, no discutas tu salario con otros compañeros.» → RRHH le dijo al nuevo empleado ___.]]',
          options: [
            'not to discuss her salary with other colleagues',
            'don\'t discuss her salary with other colleagues',
            'that she won\'t discuss her salary with other colleagues',
            'to not discussing her salary with other colleagues',
          ],
          correctAnswer: 0,
          explanation: '[[Reported commands and requests|Las órdenes y peticiones en estilo indirecto]] [[use the infinitive|usan el infinitivo]] (to + verb). [[Negative commands|Las órdenes negativas]] [[use|usan]] "not to + infinitive". [[Never use|Nunca uses]] [[the imperative form|la forma imperativa]] [[in reported speech|en estilo indirecto]].',
        },
        {
          question: '[[Direct: \"Why did you arrive late for the induction session?\" → The trainer asked the new receptionist ___.|Directo: «¿Por qué llegaste tarde a la sesión de incorporación?» → El formador le preguntó al nuevo recepcionista ___.]]',
          options: [
            'why she had arrived late for the induction session',
            'why did she arrive late for the induction session',
            'why she arrived late for the induction session',
            'the reason she has arrived late for the induction session',
          ],
          correctAnswer: 0,
          explanation: '[[Reported wh-questions|Las preguntas con partícula interrogativa en estilo indirecto]] [[use the wh-word|usan la partícula interrogativa]] (why) + [[subject + verb|sujeto + verbo]] ([[no question mark|sin signo de interrogación]], [[no inversion|sin inversión]]). [[Past simple|Pasado simple]] (did arrive) → [[past perfect|pasado perfecto]] (had arrived).',
        },
        {
          question: '[[Direct: \"You should always confirm important instructions in writing.\" → The manager advised the team ___.|Directo: «Deberías confirmar siempre las instrucciones importantes por escrito.» → El director aconsejó al equipo ___.]]',
          options: [
            'to always confirm important instructions in writing',
            'that they should always confirm important instructions in writing',
            'always confirm important instructions in writing',
            'both A and B are correct',
          ],
          correctAnswer: 3,
          explanation: '[[Both options are grammatically correct|Ambas opciones son gramaticalmente correctas]]. "Advise + to + infinitive" (A) [[is the most common reporting structure|es la estructura de reporte más común]]. "Advise + that + clause" (B) [[with "should"|con "should"]] [[is also accepted|también se acepta]] ([[especially in formal writing|especialmente en escritura formal]]). [[Note|Nota]]: "should" [[does not change|no cambia]] [[in reported speech|en estilo indirecto]].',
        },
        {
          question: '[[Direct: \"The probation period ends next month.\" → The HR officer said that the probation period ___.|Directo: «El periodo de prueba termina el mes que viene.» → El responsable de RRHH dijo que el periodo de prueba ___.]]',
          options: [
            'ended the following month',
            'ends next month',
            'would end next month',
            'had ended the following month',
          ],
          correctAnswer: 0,
          explanation: '[[Present simple|Presente simple]] (ends) → [[past simple|pasado simple]] (ended). [[Time expressions also shift|Las expresiones de tiempo también cambian]]: "next month" → "the following month". [[If the situation is still true|Si la situación sigue siendo verdadera]], [[some speakers keep the present tense|algunos hablantes mantienen el presente]], [[but past tense is more standard|pero el pasado es más estándar]] [[in formal contexts|en contextos formales]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u4-l1-g3',
    type: 'fill-blank',
    level: 'B2',
    topic: 'Staff Training',
    difficulty: 'hard',
    content: {
      title: '[[Reported Speech — Time & Place Shifts|Estilo indirecto — Cambios de tiempo y lugar]]',
      instructions: '[[Rewrite the direct speech sentence in reported speech, making all necessary changes (verb tenses, pronouns, time expressions).|Reescribe la frase en estilo directo en estilo indirecto, haciendo todos los cambios necesarios (tiempos verbales, pronombres, expresiones de tiempo).]]',
      questions: [
        {
          question: '[[\"I will send you the training materials here tomorrow.\" (The trainer said this on Monday.) → The trainer said that she ___ the training materials ___ the ___ day.|«Te enviaré los materiales aquí mañana.» (El lunes.) → Dijo que ella ___ los materiales ___ al ___ día.]]',
          correctAnswer: 'would send / there / following',
          explanation: '[[Three changes are needed|Se necesitan tres cambios]]: 1) will → would [[tense backshift|retroceso temporal]]; 2) "here" → "there" [[place shift|cambio de lugar]]; 3) "tomorrow" → "the following day" / "the next day" [[time shift|cambio de tiempo]]. [[All three shifts|Los tres cambios]] [[are standard in reported speech|son estándar en estilo indirecto]].',
        },
        {
          question: '[[\"We met the new general manager yesterday and she seems very professional.\" → They said that they ___ the new general manager ___ and that she ___ very professional.|«Conocimos al nuevo director general ayer y parece muy profesional.» → Dijeron que ellos ___ al nuevo director general ___ y que ella ___ muy profesional.]]',
          correctAnswer: 'had met / the day before / seemed',
          explanation: '[[Past simple|Pasado simple]] (met) → [[past perfect|pasado perfecto]] (had met). "Yesterday" → "the day before" / "the previous day". [[Present simple|Presente simple]] (seems) → [[past simple|pasado simple]] (seemed). [[All these shifts|Todos estos cambios]] [[are necessary when|son necesarios cuando]] [[the reporting verb is in the past|el verbo de reporte está en pasado]].',
        },
        {
          question: '[[\"These are the new SOPs that everyone must follow from now on.\" → The manager explained that those ___ the new SOPs that everyone ___ follow from ___ on.|«Estos son los nuevos procedimientos que todos deben seguir a partir de ahora.» → Explicó que esos ___ los nuevos procedimientos que todos ___ seguir a partir de ___.]]',
          correctAnswer: 'were / had to / then',
          explanation: '[[Three changes|Tres cambios]]: 1) "these" → "those" ([[demonstrative shift|cambio de demostrativo]]); 2) "are" → "were" ([[present simple|presente simple]] → [[past simple|pasado simple]]); 3) "must" → "had to" ([[past form of obligation|forma pasada de obligación]]); 4) "now" → "then" ([[time shift|cambio de tiempo]]).',
        },
        {
          question: '[[\"Can you explain the shadowing procedure again? I didn\'t understand it the first time.\" → The new receptionist asked the trainer if she ___ explain the shadowing procedure again and said she ___ understood it the first time.|«¿Puedes explicar de nuevo el procedimiento de shadowing? No lo entendí la primera vez.» → El recepcionista nuevo preguntó al formador si ella ___ explicar el procedimiento otra vez y dijo que no lo ___ entendido la primera vez.]]',
          correctAnswer: 'could / had not',
          explanation: '"Can" → "could" [[in reported questions|en preguntas indirectas]]. [[Past simple|Pasado simple]] (didn\'t understand) → [[past perfect|pasado perfecto]] (had not understood). [[Reported yes/no questions|Las preguntas sí/no en estilo indirecto]] [[use "if" or "whether"|usan "if" o "whether"]] + [[statement word order|orden de frase afirmativa]].',
        },
        {
          question: '[[\"I have been working here for two years and I still find the appraisal process very stressful.\" → She told me that she ___ working there for two years and that she still ___ the appraisal process very stressful.|«Llevo dos años trabajando aquí y aún encuentro el proceso de evaluación muy estresante.» → Me dijo que ella ___ trabajando allí dos años y que aún ___ el proceso de evaluación muy estresante.]]',
          correctAnswer: 'had been / found',
          explanation: '[[Present perfect continuous|Presente perfecto continuo]] (have been working) → [[past perfect continuous|pasado perfecto continuo]] (had been working). [[Present simple|Presente simple]] (find) → [[past simple|pasado simple]] (found). "Here" → "there". [[The word "still"|La palabra "still"]] [[does not change|no cambia]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u4-l1-g4',
    type: 'sentence-building',
    level: 'B2',
    topic: 'Staff Training',
    difficulty: 'medium',
    content: {
      title: '[[Reported Speech — Sentence Building|Estilo indirecto — Construye la frase]]',
      instructions: '[[Put the words in the correct order to form a reported speech sentence.|Pon las palabras en el orden correcto para formar una frase en estilo indirecto.]]',
      questions: [
        {
          question: '[[that / The / the / would / said / training / manager / at / begin / nine. [Starts with: The]|Ordena las palabras en inglés (afirmación indirecta). Pista: «El director dijo que la formación empezaría a las nueve.» [Empieza por: The]]',
          correctAnswer: 'The manager said that the training would begin at nine.',
          explanation: '[[Reported statement|Afirmación en estilo indirecto]]: reporting verb (said) + that + subject + would + infinitive. "Will" → "would" ([[tense backshift|retroceso temporal]]). [[Note|Nota]]: "that" [[is optional|es opcional]] [[in informal speech|en el habla informal]] [[but common in formal writing|pero común en escritura formal]].',
        },
        {
          question: '[[her / She / complete / told / to / the / not / appraisal / form / herself. [Starts with: She]|Ordena las palabras en inglés (orden negativa). Pista: «Le dijo que no completara el formulario de evaluación por sí misma.» [Empieza por: She]]',
          correctAnswer: 'She told her not to complete the appraisal form herself.',
          explanation: '[[Reported negative command|Orden negativa en estilo indirecto]]: reporting verb (told) + object pronoun (her) + not to + bare infinitive (complete). [[This structure|Esta estructura]] [[is used for|se usa para]] [[reported instructions and commands|instrucciones y órdenes en estilo indirecto]].',
        },
        {
          question: '[[whether / The / shadowed / she / trainer / had / asked / a / colleague. [Starts with: The]|Ordena las palabras en inglés (pregunta indirecta). Pista: «El formador preguntó si había hecho shadowing con un compañero.» [Empieza por: The]]',
          correctAnswer: 'The trainer asked whether she had shadowed a colleague.',
          explanation: '[[Reported yes/no question|Pregunta sí/no en estilo indirecto]]: reporting verb (asked) + whether/if + subject + verb ([[no inversion|sin inversión]]). [[Past simple|Pasado simple]] (had she shadowed) → [[past perfect|pasado perfecto]] (she had shadowed) [[with statement word order|con orden de frase afirmativa]].',
        },
      ],
    },
    topicName: 'Grammar',
  },
  {
    id: 'rec-b2-u4-l1-g5',
    type: 'true-false',
    level: 'B2',
    topic: 'Staff Training',
    difficulty: 'medium',
    content: {
      title: '[[Reported Speech — True or False|Estilo indirecto — Verdadero o falso]]',
      instructions: '[[Decide if the reported speech sentence is grammatically correct. Pay attention to tense backshifts, pronouns, and word order.|Decide si la frase en estilo indirecto es gramaticalmente correcta. Presta atención a los retrocesos temporales, pronombres y al orden de palabras.]]',
      questions: [
        {
          question: '[[\"The HR manager told the new staff that they must to complete the induction form before their first shift.\" — Is this sentence grammatically correct?|«The HR manager told the new staff that they must to complete the induction form before their first shift.» — ¿Esta frase es gramaticalmente correcta?]]',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. [[The error is|El error es]] "must to complete". [[Modal verbs|Los verbos modales]] [[are NEVER followed by "to"|NUNCA van seguidos de "to"]]. [[Also|Además]], "must" [[in reported past|en estilo indirecto pasado]] [[becomes|se convierte en]] "had to". [[Correct form|Forma correcta]]: "...that they had to complete the induction form..."',
        },
        {
          question: '[[\"She asked me where the briefing would be held the following morning.\" — Is this sentence grammatically correct?|«Me preguntó dónde se celebraría el briefing a la mañana siguiente.» — ¿Esta frase es gramaticalmente correcta?]]',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcta]]. [[Reported wh-question|Pregunta con partícula interrogativa en estilo indirecto]]: asked + where + subject (the briefing) + verb (would be held). [[No inversion|Sin inversión]], [[statement word order|orden de frase afirmativa]]. "Tomorrow" → "the following morning" ([[correct time shift|cambio de tiempo correcto]]). "Will" → "would" ([[correct backshift|retroceso temporal correcto]]).',
        },
        {
          question: '[[\"The trainer told us don\'t use our phones during the induction session.\" — Is this sentence grammatically correct?|«The trainer told us don\'t use our phones during the induction session.» — ¿Esta frase es gramaticalmente correcta?]]',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. [[Reported commands|Las órdenes en estilo indirecto]] [[use|usan]] "not to + infinitive", [[not the imperative|no el imperativo]]. [[Correct form|Forma correcta]]: "The trainer told us not to use our phones during the induction session." [[The structure|La estructura]] [[is: tell + object + (not) to + infinitive|es: tell + objeto + (not) to + infinitivo]].',
        },
        {
          question: '[[\"He said that he had been working in the hotel industry for over ten years and that he found the new role very rewarding.\" — Is this sentence grammatically correct?|«Dijo que llevaba más de diez años en hostelería y que encontraba el nuevo puesto muy gratificante.» — ¿Esta frase es gramaticalmente correcta?]]',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'True',
          explanation: '[[Correct|Correcta]]. [[Present perfect continuous|Presente perfecto continuo]] (has been working) → [[past perfect continuous|pasado perfecto continuo]] (had been working). [[Present simple|Presente simple]] (finds) → [[past simple|pasado simple]] (found). [[Both backshifts are correct|Ambos retrocesos son correctos]]. [[The sentence also maintains|La frase también mantiene]] [[the correct pronoun|el pronombre correcto]] (he).',
        },
        {
          question: '[[\"The manager asked what time does the appraisal meeting start.\" — Is this sentence grammatically correct?|«The manager asked what time does the appraisal meeting start.» — ¿Esta frase es gramaticalmente correcta?]]',
          options: ['[[True|Verdadero]] — [[It is correct|Es correcta]]', '[[False|Falso]] — [[It contains an error|Contiene un error]]'],
          correctAnswer: 'False',
          explanation: '[[Incorrect|Incorrecta]]. [[The error is|El error es]] [[the inverted question word order|el orden de palabras invertido de pregunta]]: "does the appraisal meeting start". [[In reported questions|En preguntas en estilo indirecto]], [[we use|usamos]] [[statement word order|orden de frase afirmativa]] ([[no auxiliary "does"|sin auxiliar "does"]]). [[Correct form|Forma correcta]]: "The manager asked what time the appraisal meeting started." [[Note also|Nota también]] [[the tense backshift|el retroceso temporal]]: starts → started.',
        },
      ],
    },
    topicName: 'Grammar',
  },
];
