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
    id: 'c1-u5-g4', type: 'fill-blank', level: 'C1', topic: 'nominalisation', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Nominalisation|Nominalización]]', instructions: 'Nominalise the verb in brackets.',
      questions: [{ question: 'The government approved the plan. → "Government _______ (approve) of the plan was widely praised."', options: ['[[approval|aprobación]]', '[[approved|aprobación]]', '[[approving|aprobando]]'], correctAnswer: 'approval', acceptableAnswers: ['approval'], explanation: 'Approve → approval. Nominalisation creates academic density.' }] },
    topicName: 'Grammar',
  },
  {
    id: 'c1-u5-g5', type: 'multiple-choice', level: 'C1', topic: 'nominalisation', difficulty: 'hard',
    content: { title: '[[Grammar|Gramática]]: [[Nominalisation|Nominalización]]', instructions: 'Choose the sentence that best uses nominalisation for academic writing.',
      questions: [{ question: 'Which is more appropriate in an academic essay?', options: ['[[They destroyed the artwork.|Destruyeron la obra de arte.]]', '[[The destruction of the artwork provoked widespread outrage.|La destrucción de la obra de arte provocó una indignación generalizada.]]', '[[Destroying the artwork was bad.|Destruir la obra de arte fue malo.]]'], correctAnswer: 1, explanation: '"The destruction of..." = nominalised structure, more formal and dense than a verb phrase.' }] },
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
    id: 'c1-u5-v4', type: 'fill-blank', level: 'C1', topic: 'arts-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Arts and Culture|Arte y cultura]]', instructions: 'Complete the sentence.',
      questions: [{ question: 'The film\'s _______ narrative structure leaves much open to interpretation, refusing to provide clear answers.', options: ['[[ambiguous|ambigua]]', '[[linear|lineal]]', '[[chronological|cronológica]]'], correctAnswer: 'ambiguous', acceptableAnswers: ['ambiguous'], explanation: 'Ambiguous = open to more than one interpretation.' }] },
    topicName: 'Vocabulary',
  },
  {
    id: 'c1-u5-v5', type: 'multiple-choice', level: 'C1', topic: 'arts-vocabulary', difficulty: 'hard',
    content: { title: '[[Vocabulary|Vocabulario]]: [[Arts and Culture|Arte y cultura]]', instructions: 'Choose the correct collocation.',
      questions: [{ question: 'The retrospective _______ the artist\'s evolution from abstract expressionism to figurative realism.', options: ['[[traced|trazó]]', '[[made|hizo]]', '[[told|contó]]'], correctAnswer: 0, explanation: '"Traced" collocates naturally with evolution/development in critical writing.' }] },
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
    id: 'c1-u5-l1', type: 'listening-comprehension', level: 'C1', topic: 'arts-listening', difficulty: 'hard',
    content: { title: '[[Listening|Comprensión auditiva]]: [[Film and Society|Cine y sociedad]]', instructions: 'Listen and choose the correct answer.',
      questions: [{ question: 'A film critic says: "What strikes me most about this director\'s work is the deliberate ambiguity — audiences are never quite sure whether to admire or condemn the protagonist." What does this suggest about the film?', options: ['[[the film has a clear moral message|la película tiene un mensaje moral claro]]', '[[the film deliberately avoids moral judgement|la película evita deliberadamente el juicio moral]]', '[[audiences dislike the film|el público no le gusta la película]]'], correctAnswer: 1, explanation: '"Deliberate ambiguity" means the lack of clear moral judgement is intentional.' }] },
    topicName: 'Listening',
  },
  {
    id: 'c1-u5-w1', type: 'writing', level: 'C1', topic: 'review-writing', difficulty: 'hard',
    content: { title: '[[Writing|Escritura]]: [[Arts Review|Reseña artística]]', instructions: 'Choose the best review sentence at C1 level.',
      questions: [{ question: 'Choose the best opening for a critical review of an exhibition.', options: ['[[The exhibition is very good and interesting.|La exposición es muy buena e interesante.]]', '[[This groundbreaking retrospective traces the artist\'s evolution across four decades, offering a compelling reassessment of her contribution to contemporary abstract art.|Esta retrospectiva innovadora traza la evolución del artista a lo largo de cuatro décadas, ofreciendo una convincente revalorización de su contribución al arte abstracto contemporáneo.]]', '[[I liked the exhibition because it had good paintings.|Me gustó la exposición porque tenía buenas pinturas.]]'], correctAnswer: 1, explanation: 'Option B uses "groundbreaking", "compelling reassessment" — sophisticated critical vocabulary at C1 level.' }] },
    topicName: 'Writing',
  },
  {
    id: 'c1-u5-s1', type: 'multiple-choice', level: 'C1', topic: 'speaking-arts', difficulty: 'hard',
    content: { title: '[[Speaking|Expresión oral]]: [[Analysing Art|Analizar arte]]', instructions: 'Choose the most sophisticated analytical comment about a painting.',
      questions: [{ question: 'How would you best analyse the use of colour in an impressionist painting?', options: ['[[The colours are nice and bright.|Los colores son bonitos y brillantes.]]', '[[The artist\'s use of fragmented, luminous brushstrokes creates a sense of movement and transience that challenges the static conventions of academic painting.|El uso de pinceladas fragmentadas y luminosas crea una sensación de movimiento y transitoriedad que desafía las convenciones estáticas de la pintura académica.]]', '[[There are many colours in the painting.|Hay muchos colores en la pintura.]]'], correctAnswer: 1, explanation: 'C1 art analysis uses precise vocabulary (fragmented, luminous, transience) and connects technique to meaning.' }] },
    topicName: 'Speaking',
  },
];
