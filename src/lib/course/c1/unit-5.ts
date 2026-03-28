/**
 * C1 Unit 5 — Arts and Culture
 * Module 5: Arts and Culture
 * Grammar: Narrative tenses and nominalisation
 */

import { Exercise } from '@/lib/exercise-generator';

export const UNIT_TITLE = 'Arts and Culture';

export const UNIT_5_EXERCISES: Exercise[] = [
  {
    id: 'c1-u5-g1', type: 'multiple-choice', level: 'C1', topic: 'narrative-tenses', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Narrative Tenses|Tiempos narrativos]]', instructions: 'Choose the correct narrative tense sequence.',
      questions: [{ question: 'By the time the exhibition opened, the artist _______ on the collection for over three years.', options: ['[[had been working|había estado trabajando]]', '[[was working|estaba trabajando]]', '[[worked|trabajó]]'], correctAnswer: 0, explanation: 'Past perfect continuous = ongoing action completed before a past point.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u5-g2', type: 'fill-blank', level: 'C1', topic: 'narrative-tenses', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Narrative Tenses|Tiempos narrativos]]', instructions: 'Complete with the correct tense.',
      questions: [{ question: 'The gallery _______ (be) closed for renovation when the fire broke out.', options: ['[[had been|había estado]]', '[[was|estaba]]', '[[is|está]]'], correctAnswer: 'was', acceptableAnswers: ['was', 'had been'], explanation: 'Past continuous sets the background scene in narrative writing.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u5-g3', type: 'multiple-choice', level: 'C1', topic: 'nominalisation', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Nominalisation|Nominalización]]', instructions: 'Choose the nominalised version of the underlined verb.',
      questions: [{ question: 'They decided to relocate the collection. → "The _______ of the collection was controversial."', options: ['[[relocation|reubicación]]', '[[relocating|reubicación]]', '[[relocated|reubicado]]'], correctAnswer: 0, explanation: 'Nominalisation: relocate → relocation. Nouns replace verb phrases in academic writing.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u5-v1', type: 'multiple-choice', level: 'C1', topic: 'arts-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Arts and Culture|Arte y cultura]]', instructions: 'Choose the correct word.',
      questions: [{ question: 'The film\'s _______ score moved audiences to tears — it perfectly captured the emotional arc of the story.', options: ['[[evocative|evocador]]', '[[provocative|provocador]]', '[[normative|normativo]]'], correctAnswer: 0, explanation: 'Evocative = bringing strong memories or feelings to mind.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u5-v2', type: 'fill-blank', level: 'C1', topic: 'arts-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Arts and Culture|Arte y cultura]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'The painting\'s recurring water _______ represents the passage of time and the inevitability of change.', options: ['[[motif|motivo]]', '[[canvas|lienzo]]', '[[genre|género]]'], correctAnswer: 'motif', acceptableAnswers: ['motif'], explanation: 'Motif = a recurring element in a work of art that carries symbolic meaning.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u5-v3', type: 'multiple-choice', level: 'C1', topic: 'arts-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Arts and Culture|Arte y cultura]]', instructions: 'Choose the best word.',
      questions: [{ question: 'The novel functions as a political _______ — on the surface it tells a simple story, but beneath it critiques the regime.',  options: ['[[allegory|alegoría]]', '[[genre|género]]', '[[critique|crítica]]'], correctAnswer: 0, explanation: 'Allegory = a story where characters and events represent deeper abstract ideas.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u5-r1', type: 'reading-comprehension', level: 'C1', topic: 'arts-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Literature and Storytelling|Literatura y narrativa]]', instructions: 'Read and answer.',
      questions: [{ question: 'Text: "Great literature does not merely entertain — it disturbs, disrupts, and ultimately transforms the reader\'s understanding of the world." What does the author imply about literature\'s purpose?', options: ['[[literature should only be pleasurable|la literatura solo debe ser placentera]]', '[[the highest form of literature challenges and changes the reader|la forma más alta de literatura desafía y cambia al lector]]', '[[entertainment is the primary goal of all literature|el entretenimiento es el objetivo principal de toda literatura]]'], correctAnswer: 1, explanation: '"Not merely entertain" signals the author values literature\'s power to transform thinking.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u5-r2', type: 'multiple-choice', level: 'C1', topic: 'arts-reading', difficulty: 'hard',
    content: { title: '[[Reading|Lectura]]: [[Cultural Heritage|Patrimonio cultural]]', instructions: 'Choose the correct inference.',
      questions: [{ question: 'Text: "The provenance of the artefacts, disputed since their removal from the region in 1903, remains a deeply contentious issue." What does "provenance" mean in this context?', options: ['[[the artistic value of the objects|el valor artístico de los objetos]]', '[[the history of ownership and origin of the objects|la historia de propiedad y origen de los objetos]]', '[[the condition and preservation of the objects|el estado y conservación de los objetos]]'], correctAnswer: 1, explanation: 'Provenance = the history of ownership and origin, especially of a work of art.' }] },
    topicName: 'Reading',
  },
  {
    id: 'c1-u5-r3',
    type: 'reading-comprehension',
    level: 'C1',
    topic: 'arts-reading',
    difficulty: 'hard',
    content: {
      title: '[[Reading|Lectura]]: [[Follow-up|Seguimiento]]',
      instructions: 'Read and answer.',
      questions: [
        {
          question:
            'Text: "Returning to the core theme of this unit (Arts and Culture), learners benefit from comparing how different authors frame the same underlying issue."\n\nThe text recommends:',
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
    id: 'c1-u5-l1', type: 'listening-comprehension', level: 'C1', topic: 'arts-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Film and Society|Cine y sociedad]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A film critic says: "What strikes me most about this director\'s work is the deliberate ambiguity — audiences are never quite sure whether to admire or condemn the protagonist." What does this suggest about the film?', options: ['[[the film has a clear moral message|la película tiene un mensaje moral claro]]', '[[the film deliberately avoids moral judgement|la película evita deliberadamente el juicio moral]]', '[[audiences dislike the film|el público no le gusta la película]]'], correctAnswer: 1, explanation: '"Deliberate ambiguity" means the lack of clear moral judgement is intentional.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u5-l2',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'arts-listening',
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
    id: 'c1-u5-l3',
    type: 'listening-comprehension',
    level: 'C1',
    topic: 'arts-listening',
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
    id: 'c1-u5-w1', type: 'writing', level: 'C1', topic: 'review-writing', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Arts Review|Reseña artística]]', instructions: 'Choose the best review sentence at C1 level.',
      questions: [{ question: 'Choose the best opening for a critical review of an exhibition.', options: ['[[The exhibition presents a comprehensive selection of works spanning the artist\'s entire career, from her early figurative studies to her mature abstract compositions, and effectively conveys the scope and coherence of her artistic development over the course of more than four decades.|La exposición presenta una selección exhaustiva de obras que abarca toda la carrera de la artista, desde sus primeros estudios figurativos hasta sus composiciones abstractas maduras, y transmite eficazmente el alcance y la coherencia de su desarrollo artístico a lo largo de más de cuatro décadas.]]', '[[This groundbreaking retrospective traces the artist\'s evolution across four decades, offering a compelling reassessment of her contribution to contemporary abstract art.|Esta retrospectiva innovadora traza la evolución del artista a lo largo de cuatro décadas, ofreciendo una convincente revalorización de su contribución al arte abstracto contemporáneo.]]', '[[This major retrospective at the National Gallery represents a long-overdue reassessment of a figure whose contribution to British abstract art has been consistently undervalued, and raises important questions about whose legacies the critical establishment has historically chosen to celebrate and whose it has chosen to neglect.|Esta gran retrospectiva en la National Gallery representa una revalorización largamente esperada de una figura cuya contribución al arte abstracto británico ha sido constantemente infravalorada, y plantea preguntas importantes sobre qué legados el establishment crítico ha elegido históricamente celebrar y cuáles ha elegido descuidar.]]'], correctAnswer: 2, explanation: 'The brief asks for a **critical** review opening. Option C challenges the critical establishment ("long-overdue reassessment", "undervalued", whose legacies are celebrated) — the most evaluative stance. A is mainly descriptive; B is positive but less critical.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u5-w2',
    type: 'writing',
    level: 'C1',
    topic: 'review-writing',
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
    id: 'c1-u5-w3',
    type: 'writing',
    level: 'C1',
    topic: 'review-writing',
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
    id: 'c1-u5-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-arts', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Analysing Art|Analizar arte]]', instructions: 'Choose the most sophisticated analytical comment about a painting.',
      questions: [{ question: 'How would you best analyse the use of colour in an impressionist painting?', options: ['[[The impressionist palette, characterised by short, visible brushstrokes and a focus on capturing natural light at a specific moment, represents a decisive departure from the smooth, blended technique of academic painting and reflects the movement\'s broader preoccupation with immediacy and perceptual experience.|La paleta impresionista, caracterizada por pinceladas cortas y visibles y un enfoque en capturar la luz natural en un momento específico, representa una ruptura decisiva con la técnica suave y mezclada de la pintura académica.]]', '[[The artist\'s use of fragmented, luminous brushstrokes creates a sense of movement and transience that challenges the static conventions of academic painting.|El uso de pinceladas fragmentadas y luminosas crea una sensación de movimiento y transitoriedad que desafía las convenciones estáticas de la pintura académica.]]', '[[What strikes me most is the artist\'s apparent refusal to blend — each stroke remains visible and distinct, which creates an almost tactile quality that draws the viewer into the scene and subverts our expectation of smooth pictorial illusion, making the act of painting itself visible and present.|Lo que más me llama la atención es la aparente negativa del artista a mezclar — cada pincelada permanece visible y distinta, lo que crea una calidad casi táctil que atrae al espectador hacia la escena y subvierte nuestra expectativa de ilusión pictórica suave.]]'], correctAnswer: 1, explanation: 'C1 art analysis uses precise vocabulary (fragmented, luminous, transience) and connects technique to meaning.' }] },
    topicName: 'Speaking',
  },
  {
    id: 'c1-u5-s2',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-arts',
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
    id: 'c1-u5-s3',
    type: 'multiple-choice',
    level: 'C1',
    topic: 'speaking-arts',
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
