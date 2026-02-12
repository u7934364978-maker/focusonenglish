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
      options: ["loved", "love", "loves", "is loving"],
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
      options: ["was working", "is working", "works", "worked"],
      correctAnswer: 0,
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
      options: ["had seen", "has seen", "saw", "sees"],
      correctAnswer: 0,
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
      options: ["would help", "will help", "helps", "helped"],
      correctAnswer: 0,
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
      options: ["had bought", "bought", "buys", "has bought"],
      correctAnswer: 0,
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
      options: ["could", "can", "may", "would"],
      correctAnswer: 0,
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
      options: ["might", "may", "will", "would"],
      correctAnswer: 0,
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
      options: ["had to", "must", "might", "would"],
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
      options: ["had been sleeping", "was sleeping", "slept", "is sleeping"],
      correctAnswer: 0,
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
      options: ["said", "told", "explained", "asked"],
      correctAnswer: 0,
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
      options: ["told", "said", "explained", "say"],
      correctAnswer: 0,
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
      options: ["explained", "told", "said me", "talked"],
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
      options: ["told", "said", "explained", "say"],
      correctAnswer: 0,
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
      options: ["said", "told", "talked", "spoke"],
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
      options: ["explained", "told", "said", "talked"],
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
      options: ["told", "said", "explained", "spoke"],
      correctAnswer: 0,
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
      options: ["said", "told", "explained us", "asked"],
      correctAnswer: 0,
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
      options: ["explained to", "told", "said", "explained"],
      correctAnswer: 0,
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
      options: ["he / his", "I / my", "he / my", "I / his"],
      correctAnswer: 0,
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
      options: ["they / their", "we / our", "they / our", "we / their"],
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
      options: ["I / my", "you / your", "I / your", "you / my"],
      correctAnswer: 0,
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
      options: ["loved her", "loves her", "loved his", "loves his"],
      correctAnswer: 0,
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
      options: ["it / hers", "this / mine", "that / her", "it / mine"],
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
      options: ["he would / her", "I will / you", "he will / her", "I would / her"],
      correctAnswer: 0,
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
      options: ["their / had won", "our / won", "their / won", "our / had won"],
      correctAnswer: 0,
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
      options: ["her / were", "my / was", "her / was", "my / were"],
      correctAnswer: 0,
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
      options: ["he couldn't / his", "I can't / my", "he can't / his", "I couldn't / my"],
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
      options: ["there then", "here now", "there now", "here then"],
      correctAnswer: 0,
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
      options: ["the day before", "yesterday", "the day after", "today"],
      correctAnswer: 0,
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
      options: ["the next day", "tomorrow", "yesterday", "then"],
      correctAnswer: 0,
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
      options: ["that day", "today", "yesterday", "now"],
      correctAnswer: 0,
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
      options: ["two weeks before", "two weeks ago", "two weeks after", "now"],
      correctAnswer: 0,
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
      options: ["the following week", "next week", "the week before", "now"],
      correctAnswer: 0,
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
      options: ["the night before", "last night", "the night after", "then"],
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
      options: ["that night", "tonight", "last night", "then"],
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
      options: ["that", "this", "it", "here"],
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
      options: ["journalist", "anchor", "editor", "photographer"],
      correctAnswer: 0,
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
      options: ["source", "witness", "reporter", "victim"],
      correctAnswer: 0,
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
      options: ["news item", "headline", "article", "broadcast"],
      correctAnswer: 0,
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
      options: ["confirmed", "denied", "claimed", "suggested"],
      correctAnswer: 0,
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
      options: ["claimed", "reported", "broadcast", "edited"],
      correctAnswer: 0,
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
      options: ["article", "column", "editorial", "report"],
      correctAnswer: 0,
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
      options: ["witness", "victim", "suspect", "judge"],
      correctAnswer: 0,
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
      options: ["broadcast", "show", "series", "documentary"],
      correctAnswer: 0,
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
      options: ["editor", "publisher", "owner", "writer"],
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
      options: ["whispered", "shouted", "yelled", "screamed"],
      correctAnswer: 0,
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
      options: ["mentioned", "denied", "shouted", "cried"],
      correctAnswer: 0,
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
      options: ["rumoured", "knew", "stated", "wrote"],
      correctAnswer: 0,
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
      options: ["hear", "listen", "say", "tell"],
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
      options: ["told / anecdote", "said / story", "talked / gossip", "explained / news"],
      correctAnswer: 0,
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
      options: ["denied / rumour", "admitted / fact", "refused / story", "accepted / gossip"],
      correctAnswer: 0,
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
      options: ["secret", "truth", "lie", "gossip"],
      correctAnswer: 0,
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
      options: ["admitted", "denied", "refused", "promised"],
      correctAnswer: 0,
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
      options: ["chatting", "speaking", "telling", "reporting"],
      correctAnswer: 0,
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
      options: ["offered", "suggested", "admitted", "said"],
      correctAnswer: 0,
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
      options: ["suggested", "offered", "promised", "told"],
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
      options: ["promised", "admitted", "denied", "suggested"],
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
      options: ["denied", "offered", "promised", "refused"],
      correctAnswer: 0,
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
      options: ["refused", "denied", "admitted", "suggested"],
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
      options: ["admitted", "refused", "promised", "offered"],
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
      options: ["recommended", "promised", "refused", "offered"],
      correctAnswer: 0,
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
      options: ["threatened", "suggested", "admitted", "offered"],
      correctAnswer: 0,
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
      options: ["insisted", "offered", "promised", "suggested"],
      correctAnswer: 0,
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
      options: ["announced", "said", "told", "talked"],
      correctAnswer: 0,
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
      options: ["declared", "told", "said me", "spoke"],
      correctAnswer: 0,
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
      options: ["states", "tells", "talks", "says me"],
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
      options: ["admitted", "declared", "said", "announced"],
      correctAnswer: 0,
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
      options: ["denied", "refused", "announced", "stated"],
      correctAnswer: 0,
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
      options: ["confirmed", "said", "told", "declared"],
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
      options: ["ordered", "told", "said", "explained"],
      correctAnswer: 0,
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
      options: ["assured", "said", "told to", "explained"],
      correctAnswer: 0,
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
      options: ["informed", "said", "told to", "announced to"],
      correctAnswer: 0,
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
      options: ["break the news", "tell the story", "say the truth", "announce the fact"],
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
      options: ["get down to business", "talk the talk", "speak our minds", "break the ice"],
      correctAnswer: 0,
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
      options: ["break the ice", "break the news", "talk shop", "beat around the bush"],
      correctAnswer: 0,
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
      options: ["beating around the bush", "breaking the ice", "talking shop", "getting down to business"],
      correctAnswer: 0,
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
      options: ["talk shop", "break the ice", "speak their minds", "get the message"],
      correctAnswer: 0,
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
      options: ["speak your mind", "talk shop", "break the news", "get down to business"],
      correctAnswer: 0,
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
      options: ["got the message", "broke the ice", "talked shop", "beat around the bush"],
      correctAnswer: 0,
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
      options: ["spread the word", "break the news", "talk shop", "speak your mind"],
      correctAnswer: 0,
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
      options: ["on the same wavelength", "breaking the ice", "talking shop", "beating around the bush"],
      correctAnswer: 0,
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
      options: ["she was going / later", "I am going / later", "she was going / then", "she is going / later"],
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
      options: ["had / been", "has / been", "was / been", "did / go"],
      correctAnswer: 0,
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
      options: ["had / the day before", "has / yesterday", "saw / the day after", "had / yesterday"],
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
      options: ["would / the next day", "will / tomorrow", "would / tomorrow", "will / the next day"],
      correctAnswer: 0,
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
      options: ["couldn't / that night", "can't / tonight", "couldn't / tonight", "can't / that night"],
      correctAnswer: 0,
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
      options: ["had to leave then", "must leave now", "had to leave now", "must leave then"],
      correctAnswer: 0,
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
      options: ["had been / had called", "was / called", "had been / called", "was / had called"],
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
      options: ["offered to / my", "said he / your", "promised to / his", "suggested / my"],
      correctAnswer: 0,
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
      options: ["stated / had been", "said / was", "told / is", "explained / has been"],
      correctAnswer: 0,
      explanation: "Final review: Formal reporting."
    }
  }
];
