import { Exercise } from '@/lib/exercise-generator';

export const UNIT_26_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Grammar: Reported Speech - Tense changes (Backshift) (1-10) ---
  {
    id: "b1-u26-e1",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Reported Speech (Backshift)",
          back: "Estilo indirecto (Cambio de tiempo)",
          pronunciation: "/rɪˈpɔː.tɪd spiːtʃ/",
          example: "Direct: 'I am tired.' -> Reported: He said he was tired.",
          explanation: "Cuando reportamos lo que alguien dijo, generalmente movemos el tiempo verbal un paso hacia atrás en el pasado."
        }
      ]
    }
  },
  {
    id: "b1-u26-e2",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      question: "Direct: 'I love chocolate.' -> Reported: She said she ________ chocolate.",
      options: [ "loved", "loves", "is loving", "love" ],
      correctAnswer: 0,
      explanation: "Present simple changes to past simple."
    }
  },
  {
    id: "b1-u26-e3",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      question: "Direct: 'I am working.' -> Reported: He said he ________.",
      options: [ "works", "was working", "worked", "is working" ],
      correctAnswer: 1,
      explanation: "Present continuous changes to past continuous."
    }
  },
  {
    id: "b1-u26-e4",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I have seen it.' -> Reported: She said she ________ it.",
      options: [ "saw", "sees", "has seen", "had seen" ],
      correctAnswer: 3,
      explanation: "Present perfect changes to past perfect."
    }
  },
  {
    id: "b1-u26-e5",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I will help you.' -> Reported: He said he ________ me.",
      options: [ "helps", "helped", "would help", "will help" ],
      correctAnswer: 2,
      explanation: "Will changes to would."
    }
  },
  {
    id: "b1-u26-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I bought a car.' -> Reported: She said she ________ a car.",
      options: [ "has bought", "had bought", "bought", "buys" ],
      correctAnswer: 1,
      explanation: "Past simple changes to past perfect."
    }
  },
  {
    id: "b1-u26-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I can swim.' -> Reported: He said he ________ swim.",
      options: [ "would", "can", "could", "may" ],
      correctAnswer: 2,
      explanation: "Can changes to could."
    }
  },
  {
    id: "b1-u26-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I may go.' -> Reported: She said she ________ go.",
      options: [ "would", "may", "might", "will" ],
      correctAnswer: 2,
      explanation: "May changes to might."
    }
  },
  {
    id: "b1-u26-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I must leave.' -> Reported: He said he ________ leave.",
      options: [ "had to", "must", "would", "might" ],
      correctAnswer: 0,
      explanation: "Must often changes to had to."
    }
  },
  {
    id: "b1-u26-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I was sleeping.' -> Reported: She said she ________.",
      options: [ "slept", "was sleeping", "had been sleeping", "is sleeping" ],
      correctAnswer: 2,
      explanation: "Past continuous changes to past perfect continuous."
    }
  },
  // --- SUB-TOPIC 2: Grammar: Reporting verbs (say, tell, explain) (11-20) ---
  {
    id: "b1-u26-e11",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Say vs. Tell",
          back: "Say (decir algo) vs. Tell (decirle algo a alguien)",
          pronunciation: "/seɪ / tel/",
          example: "He said that... vs. He told me that...",
          explanation: "Usamos 'tell' cuando mencionamos al oyente; con 'say' no es necesario."
        }
      ]
    }
  },
  {
    id: "b1-u26-e12",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      question: "He ________ (decir) he was happy.",
      options: [ "told", "explained", "said", "asked" ],
      correctAnswer: 2,
      explanation: "Say + that clause."
    }
  },
  {
    id: "b1-u26-e13",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "easy",
    content: {
      question: "He ________ (decirle) me that he was happy.",
      options: [ "explained", "told", "said", "say" ],
      correctAnswer: 1,
      explanation: "Tell + object."
    }
  },
  {
    id: "b1-u26-e14",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "She ________ (explicar) that the machine was broken.",
      options: [ "explained", "said me", "told", "talked" ],
      correctAnswer: 0,
      explanation: "Explain used for giving details."
    }
  },
  {
    id: "b1-u26-e15",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "They ________ (decir) us to wait outside.",
      options: [ "said", "told", "explained", "say" ],
      correctAnswer: 1,
      explanation: "Tell + object + infinitive."
    }
  },
  {
    id: "b1-u26-e16",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "I ________ (decir) goodbye to my friends.",
      options: [ "said", "told", "spoke", "talked" ],
      correctAnswer: 0,
      explanation: "Say goodbye."
    }
  },
  {
    id: "b1-u26-e17",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The teacher ________ (explicar) the rules to the class.",
      options: [ "explained", "said", "talked", "told" ],
      correctAnswer: 0,
      explanation: "Explain something to someone."
    }
  },
  {
    id: "b1-u26-e18",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ (decir) me her secret.",
      options: [ "explained", "said", "spoke", "told" ],
      correctAnswer: 3,
      explanation: "Tell someone something."
    }
  },
  {
    id: "b1-u26-e19",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "We ________ (decir) that we would be late.",
      options: [ "told", "said", "asked", "explained us" ],
      correctAnswer: 1,
      explanation: "Say + that clause."
    }
  },
  {
    id: "b1-u26-e20",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ (explicar) me why he was late.",
      options: [ "told", "said", "explained to", "explained" ],
      correctAnswer: 2,
      explanation: "Explain to someone."
    }
  },
  // --- SUB-TOPIC 3: Grammar: Pronoun and possessive changes (21-30) ---
  {
    id: "b1-u26-e21",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Pronoun Changes",
          back: "Cambios de pronombres",
          pronunciation: "/ˈprəʊ.naʊn tʃeɪndʒɪz/",
          example: "Direct: 'I have my book.' -> Reported: He said he had his book.",
          explanation: "Los pronombres y posesivos cambian para reflejar quién está hablando."
        }
      ]
    }
  },
  {
    id: "b1-u26-e22",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I like my car.' -> Reported: He said ________ liked ________ car.",
      options: [ "he / my", "he / his", "I / his", "I / my" ],
      correctAnswer: 1,
      explanation: "I -> he, my -> his."
    }
  },
  {
    id: "b1-u26-e23",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'We are at our house.' -> Reported: They said ________ were at ________ house.",
      options: [ "they / their", "they / our", "we / their", "we / our" ],
      correctAnswer: 0,
      explanation: "We -> they, our -> their."
    }
  },
  {
    id: "b1-u26-e24",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'You need your keys.' -> Reported: He told me ________ needed ________ keys.",
      options: [ "you / your", "I / your", "I / my", "you / my" ],
      correctAnswer: 2,
      explanation: "You -> I, your -> my (referring to 'me')."
    }
  },
  {
    id: "b1-u26-e25",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'She loves her dog.' -> Reported: He said she ________ ________ dog.",
      options: [ "loved his", "loves his", "loves her", "loved her" ],
      correctAnswer: 3,
      explanation: "3rd person usually stays the same (but tense changes)."
    }
  },
  {
    id: "b1-u26-e26",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'This is mine.' -> Reported: She said that ________ was ________.",
      options: [ "it / hers", "it / mine", "this / mine", "that / her" ],
      correctAnswer: 0,
      explanation: "This -> it/that, mine -> hers."
    }
  },
  {
    id: "b1-u26-e27",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I'll give it to you.' -> Reported: He told her ________ ________ give it to ________.",
      options: [ "I would / her", "he would / her", "I will / you", "he will / her" ],
      correctAnswer: 1,
      explanation: "I -> he, will -> would, you -> her."
    }
  },
  {
    id: "b1-u26-e28",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Our team won.' -> Reported: They told us ________ team ________.",
      options: [ "our / had won", "their / had won", "their / won", "our / won" ],
      correctAnswer: 1,
      explanation: "Our -> their, won -> had won."
    }
  },
  {
    id: "b1-u26-e29",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'My parents are coming.' -> Reported: She said ________ parents ________ coming.",
      options: [ "her / was", "my / was", "my / were", "her / were" ],
      correctAnswer: 3,
      explanation: "My -> her, are -> were."
    }
  },
  {
    id: "b1-u26-e30",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I can't find my phone.' -> Reported: He said ________ ________ find ________ phone.",
      options: [ "he couldn't / his", "I couldn't / my", "he can't / his", "I can't / my" ],
      correctAnswer: 0,
      explanation: "I -> he, can't -> couldn't, my -> his."
    }
  },
  // --- SUB-TOPIC 4: Grammar: Time and place expression changes (31-40) ---
  {
    id: "b1-u26-e31",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Time/Place Changes",
          back: "Cambios de tiempo y lugar",
          pronunciation: "/taɪm pleɪs tʃeɪndʒɪz/",
          example: "Now -> Then, Today -> That day, Here -> There",
          explanation: "Las expresiones de tiempo y lugar cambian para adaptarse al nuevo contexto del reporte."
        }
      ]
    }
  },
  {
    id: "b1-u26-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I am here now.' -> Reported: He said he was ________ ________.",
      options: [ "here now", "here then", "there now", "there then" ],
      correctAnswer: 3,
      explanation: "Here -> there, now -> then."
    }
  },
  {
    id: "b1-u26-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I saw her yesterday.' -> Reported: She said she had seen her ________.",
      options: [ "the day after", "the day before", "yesterday", "today" ],
      correctAnswer: 1,
      explanation: "Yesterday -> the day before / the previous day."
    }
  },
  {
    id: "b1-u26-e34",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I'll go tomorrow.' -> Reported: He said he would go ________.",
      options: [ "tomorrow", "yesterday", "the next day", "then" ],
      correctAnswer: 2,
      explanation: "Tomorrow -> the next day / the following day."
    }
  },
  {
    id: "b1-u26-e35",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I'm busy today.' -> Reported: She said she was busy ________.",
      options: [ "yesterday", "today", "now", "that day" ],
      correctAnswer: 3,
      explanation: "Today -> that day."
    }
  },
  {
    id: "b1-u26-e36",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I moved here two weeks ago.' -> Reported: He said he had moved there ________.",
      options: [ "two weeks ago", "now", "two weeks after", "two weeks before" ],
      correctAnswer: 3,
      explanation: "Ago -> before."
    }
  },
  {
    id: "b1-u26-e37",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'We'll meet next week.' -> Reported: They said they would meet ________.",
      options: [ "now", "the following week", "the week before", "next week" ],
      correctAnswer: 1,
      explanation: "Next week -> the following week."
    }
  },
  {
    id: "b1-u26-e38",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I finished it last night.' -> Reported: She said she had finished it ________.",
      options: [ "the night before", "the night after", "then", "last night" ],
      correctAnswer: 0,
      explanation: "Last night -> the night before."
    }
  },
  {
    id: "b1-u26-e39",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I'm not doing anything tonight.' -> Reported: He said he wasn't doing anything ________.",
      options: [ "that night", "last night", "then", "tonight" ],
      correctAnswer: 0,
      explanation: "Tonight -> that night."
    }
  },
  {
    id: "b1-u26-e40",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'This is my house.' -> Reported: She said ________ was her house.",
      options: [ "that", "here", "it", "this" ],
      correctAnswer: 0,
      explanation: "This -> that (often)."
    }
  },
  // --- SUB-TOPIC 5: Vocabulary: Journalism & News reporting (41-50) ---
  {
    id: "b1-u26-e41",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Headline",
          back: "Titular / Encabezado",
          pronunciation: "/ˈhed.laɪn/",
          example: "The headline said that a new discovery had been made.",
          explanation: "El título de una noticia en un periódico o sitio web."
        }
      ]
    }
  },
  {
    id: "b1-u26-e42",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The ________ (periodista) reported that the fire was under control.",
      options: [ "anchor", "photographer", "editor", "journalist" ],
      correctAnswer: 3,
      explanation: "Journalist = periodista."
    }
  },
  {
    id: "b1-u26-e43",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "According to the ________ (fuente), the president will resign.",
      options: [ "reporter", "victim", "source", "witness" ],
      correctAnswer: 2,
      explanation: "Source = fuente (de información)."
    }
  },
  {
    id: "b1-u26-e44",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The ________ (noticia) spread quickly on social media.",
      options: [ "headline", "broadcast", "news item", "article" ],
      correctAnswer: 2,
      explanation: "News item = noticia / pieza informativa."
    }
  },
  {
    id: "b1-u26-e45",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The police ________ (confirmar) that the suspect had been caught.",
      options: [ "suggested", "claimed", "denied", "confirmed" ],
      correctAnswer: 3,
      explanation: "Confirm = confirmar."
    }
  },
  {
    id: "b1-u26-e46",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "He ________ (afirmar) that he was innocent.",
      options: [ "reported", "claimed", "broadcast", "edited" ],
      correctAnswer: 1,
      explanation: "Claim = afirmar / asegurar (sin pruebas)."
    }
  },
  {
    id: "b1-u26-e47",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The ________ (artículo) stated that taxes would increase.",
      options: [ "column", "report", "article", "editorial" ],
      correctAnswer: 2,
      explanation: "Article = artículo."
    }
  },
  {
    id: "b1-u26-e48",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "A ________ (testigo) told the police what had happened.",
      options: [ "victim", "judge", "suspect", "witness" ],
      correctAnswer: 3,
      explanation: "Witness = testigo."
    }
  },
  {
    id: "b1-u26-e49",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The TV ________ (transmisión) was interrupted for a breaking news story.",
      options: [ "series", "show", "broadcast", "documentary" ],
      correctAnswer: 2,
      explanation: "Broadcast = transmisión / emisión."
    }
  },
  {
    id: "b1-u26-e50",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The ________ (editor) decided which stories to publish.",
      options: [ "editor", "owner", "writer", "publisher" ],
      correctAnswer: 0,
      explanation: "Editor = editor."
    }
  },
  // --- SUB-TOPIC 6: Vocabulary: Gossip & Anecdotes (51-60) ---
  {
    id: "b1-u26-e51",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Gossip",
          back: "Chismes / Cotilleos",
          pronunciation: "/ˈɡɒs.ɪp/",
          example: "He told me some gossip about our neighbors.",
          explanation: "Conversación sobre la vida privada de otras personas."
        }
      ]
    }
  },
  {
    id: "b1-u26-e52",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "She ________ (susurrar) that they were getting a divorce.",
      options: [ "yelled", "shouted", "whispered", "screamed" ],
      correctAnswer: 2,
      explanation: "Whisper = susurrar."
    }
  },
  {
    id: "b1-u26-e53",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "He ________ (mencionar) that he had seen her at the mall.",
      options: [ "shouted", "mentioned", "denied", "cried" ],
      correctAnswer: 1,
      explanation: "Mention = mencionar."
    }
  },
  {
    id: "b1-u26-e54",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "They ________ (rumorear) that the company was closing.",
      options: [ "wrote", "rumoured", "stated", "knew" ],
      correctAnswer: 1,
      explanation: "Rumour = rumorear."
    }
  },
  {
    id: "b1-u26-e55",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "Don't believe everything you ________ (oír).",
      options: [ "hear", "listen", "say", "tell" ],
      correctAnswer: 0,
      explanation: "Hear = oír (percepción involuntaria)."
    }
  },
  {
    id: "b1-u26-e56",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "She ________ (contar) a very funny ________ (anécdota).",
      options: [ "explained / news", "said / story", "told / anecdote", "talked / gossip" ],
      correctAnswer: 2,
      explanation: "Anecdote = anécdota."
    }
  },
  {
    id: "b1-u26-e57",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "He ________ (negar) that he had started the ________ (rumor).",
      options: [ "admitted / fact", "refused / story", "denied / rumour", "accepted / gossip" ],
      correctAnswer: 2,
      explanation: "Deny = negar / Rumour = rumor."
    }
  },
  {
    id: "b1-u26-e58",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The ________ (secreto) was revealed after many years.",
      options: [ "truth", "gossip", "secret", "lie" ],
      correctAnswer: 2,
      explanation: "Secret = secreto."
    }
  },
  {
    id: "b1-u26-e59",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "She ________ (admitir) that she had been wrong.",
      options: [ "promised", "refused", "admitted", "denied" ],
      correctAnswer: 2,
      explanation: "Admit = admitir."
    }
  },
  {
    id: "b1-u26-e60",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "Everyone was ________ (charlando) about the news.",
      options: [ "reporting", "speaking", "telling", "chatting" ],
      correctAnswer: 3,
      explanation: "Chat = charlar / platicar."
    }
  },
  // --- SUB-TOPIC 7: Grammar: Reporting verbs with specific structures (offer, promise, suggest) (61-70) ---
  {
    id: "b1-u26-e61",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Reporting Verbs Structures",
          back: "Estructuras de verbos de reporte",
          pronunciation: "/rɪˈpɔː.tɪŋ vɜːbz ˈstrʌk.tʃərz/",
          example: "He offered to help. She suggested going out.",
          explanation: "Diferentes verbos requieren diferentes estructuras (to + infinitive, -ing, etc.)."
        }
      ]
    }
  },
  {
    id: "b1-u26-e62",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He ________ (ofrecer) to drive me home.",
      options: [ "said", "offered", "admitted", "suggested" ],
      correctAnswer: 1,
      explanation: "Offer + to-infinitive."
    }
  },
  {
    id: "b1-u26-e63",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "She ________ (sugerir) going to the cinema.",
      options: [ "suggested", "promised", "told", "offered" ],
      correctAnswer: 0,
      explanation: "Suggest + -ing."
    }
  },
  {
    id: "b1-u26-e64",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "They ________ (prometer) to be there on time.",
      options: [ "promised", "denied", "admitted", "suggested" ],
      correctAnswer: 0,
      explanation: "Promise + to-infinitive."
    }
  },
  {
    id: "b1-u26-e65",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He ________ (negar) breaking the window.",
      options: [ "refused", "offered", "promised", "denied" ],
      correctAnswer: 3,
      explanation: "Deny + -ing."
    }
  },
  {
    id: "b1-u26-e66",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ (negarse) to answer the question.",
      options: [ "refused", "admitted", "suggested", "denied" ],
      correctAnswer: 0,
      explanation: "Refuse + to-infinitive."
    }
  },
  {
    id: "b1-u26-e67",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ (admitir) stealing the money.",
      options: [ "admitted", "promised", "offered", "refused" ],
      correctAnswer: 0,
      explanation: "Admit + -ing."
    }
  },
  {
    id: "b1-u26-e68",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The doctor ________ (recomendar) taking a rest.",
      options: [ "refused", "promised", "recommended", "offered" ],
      correctAnswer: 2,
      explanation: "Recommend + -ing / that clause."
    }
  },
  {
    id: "b1-u26-e69",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "They ________ (amenazar) to call the police.",
      options: [ "offered", "suggested", "threatened", "admitted" ],
      correctAnswer: 2,
      explanation: "Threaten + to-infinitive."
    }
  },
  {
    id: "b1-u26-e70",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ (insistir) on paying for the dinner.",
      options: [ "promised", "offered", "insisted", "suggested" ],
      correctAnswer: 2,
      explanation: "Insist on + -ing."
    }
  },
  // --- SUB-TOPIC 8: Grammar: Reporting speech in different contexts (formal vs informal) (71-80) ---
  {
    id: "b1-u26-e71",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Formal Reporting",
          back: "Reporte formal",
          pronunciation: "/ˈfɔː.məl rɪˈpɔː.tɪŋ/",
          example: "It was stated that... / The company announced that...",
          explanation: "En contextos formales se usan verbos más precisos como 'state', 'announce', 'declare'."
        }
      ]
    }
  },
  {
    id: "b1-u26-e72",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The government ________ (anunciar) that the lockdown would end.",
      options: [ "told", "announced", "talked", "said" ],
      correctAnswer: 1,
      explanation: "Announce = anunciar (formal)."
    }
  },
  {
    id: "b1-u26-e73",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The witness ________ (declarar) that he had seen the accident.",
      options: [ "told", "declared", "said me", "spoke" ],
      correctAnswer: 1,
      explanation: "Declare = declarar (formal)."
    }
  },
  {
    id: "b1-u26-e74",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The report ________ (afirmar) that climate change is real.",
      options: [ "states", "says me", "tells", "talks" ],
      correctAnswer: 0,
      explanation: "State = afirmar/establecer."
    }
  },
  {
    id: "b1-u26-e75",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He ________ (admitir) his guilt in court.",
      options: [ "declared", "admitted", "announced", "said" ],
      correctAnswer: 1,
      explanation: "Admit guilt."
    }
  },
  {
    id: "b1-u26-e76",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The company ________ (negar) any wrongdoing.",
      options: [ "refused", "stated", "announced", "denied" ],
      correctAnswer: 3,
      explanation: "Deny wrongdoing."
    }
  },
  {
    id: "b1-u26-e77",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The spokesperson ________ (confirmar) the news.",
      options: [ "confirmed", "declared", "told", "said" ],
      correctAnswer: 0,
      explanation: "Confirm news (formal)."
    }
  },
  {
    id: "b1-u26-e78",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The judge ________ (ordenar) the jury to be quiet.",
      options: [ "explained", "told", "said", "ordered" ],
      correctAnswer: 3,
      explanation: "Order = ordenar."
    }
  },
  {
    id: "b1-u26-e79",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ (asegurar) us that everything was fine.",
      options: [ "explained", "told to", "assured", "said" ],
      correctAnswer: 2,
      explanation: "Assure someone."
    }
  },
  {
    id: "b1-u26-e80",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The pilot ________ (informar) the passengers about the delay.",
      options: [ "announced to", "said", "informed", "told to" ],
      correctAnswer: 2,
      explanation: "Inform someone."
    }
  },
  // --- SUB-TOPIC 9: Idioms related to Communication (81-90) ---
  {
    id: "b1-u26-e81",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Break the news",
          back: "Dar una noticia (generalmente mala)",
          pronunciation: "/breɪk ðə njuːz/",
          example: "I had to break the news to him that he lost his job.",
          explanation: "Ser el primero en contar algo importante a alguien."
        }
      ]
    }
  },
  {
    id: "b1-u26-e82",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "He didn't want to ________ (dar la noticia) until he was sure.",
      options: [ "break the news", "announce the fact", "say the truth", "tell the story" ],
      correctAnswer: 0,
      explanation: "Break the news."
    }
  },
  {
    id: "b1-u26-e83",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "Let's ________ (hablar de negocios) now that everyone is here.",
      options: [ "talk the talk", "speak our minds", "get down to business", "break the ice" ],
      correctAnswer: 2,
      explanation: "Get down to business = ir al grano / hablar de negocios."
    }
  },
  {
    id: "b1-u26-e84",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "I had to ________ (romper el hielo) because it was very quiet.",
      options: [ "break the news", "break the ice", "beat around the bush", "talk shop" ],
      correctAnswer: 1,
      explanation: "Break the ice = romper el hielo."
    }
  },
  {
    id: "b1-u26-e85",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "Stop ________ (andarte con rodeos) and tell me what happened.",
      options: [ "talking shop", "beating around the bush", "breaking the ice", "getting down to business" ],
      correctAnswer: 1,
      explanation: "Beat around the bush = andarse con rodeos."
    }
  },
  {
    id: "b1-u26-e86",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "They always ________ (hablan de trabajo) even when they are on holiday.",
      options: [ "speak their minds", "talk shop", "break the ice", "get the message" ],
      correctAnswer: 1,
      explanation: "Talk shop = hablar de trabajo (fuera de él)."
    }
  },
  {
    id: "b1-u26-e87",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "You need to ________ (decir lo que piensas) if you aren't happy.",
      options: [ "get down to business", "speak your mind", "talk shop", "break the news" ],
      correctAnswer: 1,
      explanation: "Speak your mind = decir lo que piensas."
    }
  },
  {
    id: "b1-u26-e88",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "I finally ________ (capté el mensaje) and left him alone.",
      options: [ "talked shop", "got the message", "beat around the bush", "broke the ice" ],
      correctAnswer: 1,
      explanation: "Get the message = captar el mensaje."
    }
  },
  {
    id: "b1-u26-e89",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "Don't ________ (correr la voz) about the surprise party.",
      options: [ "talk shop", "break the news", "speak your mind", "spread the word" ],
      correctAnswer: 3,
      explanation: "Spread the word = correr la voz."
    }
  },
  {
    id: "b1-u26-e90",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "We are ________ (en la misma onda) regarding this project.",
      options: [ "breaking the ice", "beating around the bush", "talking shop", "on the same wavelength" ],
      correctAnswer: 3,
      explanation: "On the same wavelength = en la misma onda."
    }
  },
  // --- SUB-TOPIC 10: General Review & News Reports (91-100) ---
  {
    id: "b1-u26-e91",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Reported Speech Review",
          back: "Repaso de estilo indirecto.",
          pronunciation: "/rɪˈpɔː.tɪd spiːtʃ rɪˈvjuː/",
          example: "He said he had been there.",
          explanation: "Consolidación de cambios de tiempo, pronombres y expresiones temporales."
        }
      ]
    }
  },
  {
    id: "b1-u26-e92",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I am going to call you later.' -> Reported: She said ________ ________ to call me ________.",
      options: [ "she was going / later", "I am going / later", "she is going / later", "she was going / then" ],
      correctAnswer: 0,
      explanation: "Review: Tense and pronoun changes."
    }
  },
  {
    id: "b1-u26-e93",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I have never been to London.' -> Reported: He said he ________ never ________ to London.",
      options: [ "was / been", "did / go", "has / been", "had / been" ],
      correctAnswer: 3,
      explanation: "Review."
    }
  },
  {
    id: "b1-u26-e94",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I saw them yesterday.' -> Reported: She told me she ________ seen them ________.",
      options: [ "had / the day before", "had / yesterday", "has / yesterday", "saw / the day after" ],
      correctAnswer: 0,
      explanation: "Review: Past simple -> past perfect, yesterday -> the day before."
    }
  },
  {
    id: "b1-u26-e95",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'We will finish it tomorrow.' -> Reported: They said they ________ finish it ________.",
      options: [ "would / tomorrow", "would / the next day", "will / the next day", "will / tomorrow" ],
      correctAnswer: 1,
      explanation: "Review."
    }
  },
  {
    id: "b1-u26-e96",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I can't come tonight.' -> Reported: He said he ________ come ________.",
      options: [ "can't / tonight", "couldn't / that night", "can't / that night", "couldn't / tonight" ],
      correctAnswer: 1,
      explanation: "Review."
    }
  },
  {
    id: "b1-u26-e97",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I must leave now.' -> Reported: She said she ________ ________ ________.",
      options: [ "must leave now", "had to leave then", "must leave then", "had to leave now" ],
      correctAnswer: 1,
      explanation: "Review: must -> had to, now -> then."
    }
  },
  {
    id: "b1-u26-e98",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I was sleeping when you called.' -> Reported: He said he ________ ________ sleeping when I ________.",
      options: [ "had been / had called", "was / had called", "was / called", "had been / called" ],
      correctAnswer: 0,
      explanation: "Review: Past continuous -> past perfect continuous."
    }
  },
  {
    id: "b1-u26-e99",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'I'll help you with your bags.' -> Reported: He ________ ________ help me with ________ bags.",
      options: [ "promised to / his", "said he / your", "suggested / my", "offered to / my" ],
      correctAnswer: 3,
      explanation: "Review: Reporting verb with infinitive."
    }
  },
  {
    id: "b1-u26-e100",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Statements",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'The project is a success.' -> Reported: The report ________ that the project ________ a success.",
      options: [ "said / was", "explained / has been", "stated / had been", "told / is" ],
      correctAnswer: 2,
      explanation: "Final review: Formal reporting."
    }
  }
];
