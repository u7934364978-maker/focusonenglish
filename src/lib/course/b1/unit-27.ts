import { Exercise } from "../types";

export const UNIT_27_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Reported Yes/No Questions (if/whether) (1-10) ---
  {
    id: "b1-u27-e1",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Reported Yes/No Questions",
          back: "Preguntas indirectas de sí/no",
          pronunciation: "/rɪˈpɔː.tɪd jes nəʊ ˈkwes.tʃənz/",
          example: "'Are you cold?' -> She asked if I was cold.",
          explanation: "Usamos 'if' o 'whether' para reportar preguntas que no empiezan con una 'Wh-' word. El orden de las palabras vuelve a ser el de una afirmación (sujeto + verbo)."
        }
      ]
    }
  },
  {
    id: "b1-u27-e2",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Do you like tea?' -> Reported: He asked me ________ I liked tea.",
      options: [ "that", "do", "what", "if" ],
      correctAnswer: 3,
      explanation: "Usamos 'if' para reportar preguntas de sí/no."
    }
  },
  {
    id: "b1-u27-e3",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Are you busy?' -> Reported: She asked me if I ________ busy.",
      options: [ "were", "am", "be", "was" ],
      correctAnswer: 3,
      explanation: "El presente simple 'am' cambia a pasado simple 'was' en el estilo indirecto."
    }
  },
  {
    id: "b1-u27-e4",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Can you swim?' -> Reported: They asked ________ I ________ swim.",
      options: [ "what / could", "if / could", "if / can", "that / can" ],
      correctAnswer: 1,
      explanation: "Can -> could, y usamos 'if' para la pregunta."
    }
  },
  {
    id: "b1-u27-e5",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Did you see him?' -> Reported: She asked if I ________ ________ him.",
      options: [ "saw", "have seen", "see", "had seen" ],
      correctAnswer: 3,
      explanation: "Pasado simple 'did see' cambia a pasado perfecto 'had seen'."
    }
  },
  {
    id: "b1-u27-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He asked ________ I was coming to the party ________ ________.",
      options: [ "if / yes", "if / that", "whether / or not", "whether / if" ],
      correctAnswer: 2,
      explanation: "'Whether' se usa a menudo con 'or not'."
    }
  },
  {
    id: "b1-u27-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Have you finished?' -> Reported: My boss asked if I ________ finished.",
      options: [ "have", "was", "did", "had" ],
      correctAnswer: 3,
      explanation: "Presente perfecto 'have finished' -> Pasado perfecto 'had finished'."
    }
  },
  {
    id: "b1-u27-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "She asked if I ________ (querer) some more coffee.",
      options: [ "wanted", "had wanted", "would want", "want" ],
      correctAnswer: 0,
      explanation: "Present simple -> Past simple."
    }
  },
  {
    id: "b1-u27-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "They asked me ________ I ________ (estar) happy with the results.",
      options: [ "if / was", "whether / am", "if / were", "that / was" ],
      correctAnswer: 0,
      explanation: "Reported question structure."
    }
  },
  {
    id: "b1-u27-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He asked if the train ________ ________ (llegar) on time.",
      options: [ "arrived", "has arrived", "arrives", "had arrived" ],
      correctAnswer: 3,
      explanation: "Did the train arrive? -> He asked if it had arrived."
    }
  },
  // --- SUB-TOPIC 2: Reported Wh- Questions (word order) (11-20) ---
  {
    id: "b1-u27-e11",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Reported Wh- Questions",
          back: "Preguntas indirectas con Wh-",
          pronunciation: "/rɪˈpɔː.tɪd dʌb.əl.juː eɪtʃ ˈkwes.tʃənz/",
          example: "'Where do you live?' -> She asked where I lived.",
          explanation: "Mantenemos la palabra 'Wh-' (where, when, why, etc.) pero usamos el orden de una afirmación (Sujeto + Verbo), eliminando el auxiliar 'do/does/did'."
        }
      ]
    }
  },
  {
    id: "b1-u27-e12",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Where is the station?' -> Reported: He asked where the station ________.",
      options: [ "is", "were", "was", "did" ],
      correctAnswer: 2,
      explanation: "El orden cambia de 'is the station' a 'the station was'."
    }
  },
  {
    id: "b1-u27-e13",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'What time does it start?' -> Reported: She asked what time it ________.",
      options: [ "did start", "had started", "started", "starts" ],
      correctAnswer: 2,
      explanation: "Eliminamos el auxiliar 'does' y cambiamos el verbo a pasado."
    }
  },
  {
    id: "b1-u27-e14",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Why are you crying?' -> Reported: He asked me why I ________ ________.",
      options: [ "were crying", "am crying", "was crying", "cried" ],
      correctAnswer: 2,
      explanation: "Present continuous -> Past continuous, subject before verb."
    }
  },
  {
    id: "b1-u27-e15",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Who did you call?' -> Reported: They asked me who I ________ ________.",
      options: [ "have called", "had called", "did call", "called" ],
      correctAnswer: 1,
      explanation: "Pasado simple -> Pasado perfecto."
    }
  },
  {
    id: "b1-u27-e16",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "She asked me ________ I ________ (llegar) so late.",
      options: [ "how / had arrived", "when / arrived", "why / arrived", "why / had arrived" ],
      correctAnswer: 3,
      explanation: "Why did you arrive...? -> She asked why I had arrived."
    }
  },
  {
    id: "b1-u27-e17",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He wanted to know ________ ________ ________ (cuánto costaba).",
      options: [ "how much it costs", "how much it cost", "what cost it", "how much did it cost" ],
      correctAnswer: 1,
      explanation: "How much does it cost? -> How much it cost."
    }
  },
  {
    id: "b1-u27-e18",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "They asked me ________ I ________ (vivir).",
      options: [ "where / live", "what / lived", "where / lived", "where / did live" ],
      correctAnswer: 2,
      explanation: "Where do you live? -> Where I lived."
    }
  },
  {
    id: "b1-u27-e19",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She asked ________ ________ ________ ________ (cuándo estaría listo el reporte).",
      options: [ "when would be the report ready", "when the report would be ready", "when will the report be ready", "if the report would be ready" ],
      correctAnswer: 1,
      explanation: "When will the report be ready? -> When the report would be ready."
    }
  },
  {
    id: "b1-u27-e20",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He asked me ________ ________ ________ (qué estaba haciendo) there.",
      options: [ "what I was doing", "what am I doing", "what I did", "what was I doing" ],
      correctAnswer: 0,
      explanation: "What are you doing? -> What I was doing."
    }
  },
  // --- SUB-TOPIC 3: Reported Requests (ask someone to...) (21-30) ---
  {
    id: "b1-u27-e21",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Reported Requests",
          back: "Peticiones indirectas",
          pronunciation: "/rɪˈpɔː.tɪd rɪˈkwest/",
          example: "'Please, open the window.' -> He asked me to open the window.",
          explanation: "Usamos el verbo 'ask' + objeto + to-infinitive para reportar peticiones amables."
        }
      ]
    }
  },
  {
    id: "b1-u27-e22",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Please help me.' -> Reported: She ________ me ________ ________ her.",
      options: [ "said / to help", "asked / helping", "told / to help", "asked / to help" ],
      correctAnswer: 3,
      explanation: "Ask someone to do something."
    }
  },
  {
    id: "b1-u27-e23",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Can you lend me a pen, please?' -> Reported: He ________ me ________ ________ him a pen.",
      options: [ "said / to lend", "asked / lending", "asked / to lend", "told / to lend" ],
      correctAnswer: 2,
      explanation: "Las peticiones con 'Can you...?' se reportan como 'asked to'."
    }
  },
  {
    id: "b1-u27-e24",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Please don't smoke here.' -> Reported: They ________ us ________ ________ ________ here.",
      options: [ "asked / not to smoke", "told / to not smoke", "asked / to not smoke", "said / not to smoke" ],
      correctAnswer: 0,
      explanation: "Negativa: ask someone not to do something."
    }
  },
  {
    id: "b1-u27-e25",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "She ________ (pedir) her brother ________ (que la llevara) to the airport.",
      options: [ "asked / to drive her", "asked / driving her", "said / to drive her", "told / to drive her" ],
      correctAnswer: 0,
      explanation: "Ask someone to do something."
    }
  },
  {
    id: "b1-u27-e26",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The teacher ________ the students ________ ________ quiet.",
      options: [ "asked / to be", "said / to be", "told / being", "asked / being" ],
      correctAnswer: 0,
      explanation: "Requesting to be quiet."
    }
  },
  {
    id: "b1-u27-e27",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "I ________ the waiter ________ ________ (que trajera) the bill.",
      options: [ "asked / bringing", "asked / to bring", "said / to bring", "told / to bring" ],
      correctAnswer: 1,
      explanation: "Ask for the bill."
    }
  },
  {
    id: "b1-u27-e28",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ me ________ ________ ________ ________ (que no le dijera a nadie) his secret.",
      options: [ "asked / not to tell anyone", "asked / not telling anyone", "asked / to not tell anyone", "asked / didn't tell anyone" ],
      correctAnswer: 0,
      explanation: "Negative request."
    }
  },
  {
    id: "b1-u27-e29",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "They ________ ________ ________ (nos pidieron que esperáramos) in the lobby.",
      options: [ "asked we to wait", "asked us to wait", "asked for us to wait", "asked to us wait" ],
      correctAnswer: 1,
      explanation: "Ask + object + to-infinitive."
    }
  },
  {
    id: "b1-u27-e30",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Could you ________ (pedirle a él) to call me back?",
      options: [ "ask to him", "tell him", "ask him", "say him" ],
      correctAnswer: 2,
      explanation: "Ask someone."
    }
  },
  // --- SUB-TOPIC 4: Reported Orders/Commands (tell someone to...) (31-40) ---
  {
    id: "b1-u27-e31",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Reported Orders",
          back: "Órdenes indirectas",
          pronunciation: "/rɪˈpɔː.tɪd ˈɔː.dərz/",
          example: "'Sit down!' -> She told me to sit down.",
          explanation: "Usamos el verbo 'tell' + objeto + to-infinitive para reportar órdenes o mandatos directos."
        }
      ]
    }
  },
  {
    id: "b1-u27-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Stop talking!' -> Reported: The teacher ________ us ________ ________.",
      options: [ "said / to stop", "told / stopping", "told / to stop", "asked / to stop" ],
      correctAnswer: 2,
      explanation: "Tell someone to do something (order)."
    }
  },
  {
    id: "b1-u27-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Don't touch that!' -> Reported: He ________ me ________ ________ ________ that.",
      options: [ "said / not to touch", "asked / not to touch", "told / to not touch", "told / not to touch" ],
      correctAnswer: 3,
      explanation: "Negative order: tell someone not to do something."
    }
  },
  {
    id: "b1-u27-e34",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The police officer ________ the driver ________ ________ (que se detuviera).",
      options: [ "told / stopping", "told / to stop", "asked / to stop", "said / to stop" ],
      correctAnswer: 1,
      explanation: "Command."
    }
  },
  {
    id: "b1-u27-e35",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "My mother ________ me ________ ________ (que limpiara) my room.",
      options: [ "told / cleaning", "said / to clean", "asked / to clean", "told / to clean" ],
      correctAnswer: 3,
      explanation: "Common order."
    }
  },
  {
    id: "b1-u27-e36",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The boss ________ them ________ ________ (que terminaran) the project by Friday.",
      options: [ "asked / to finish", "said / to finish", "told / to finish", "told / finishing" ],
      correctAnswer: 2,
      explanation: "Work instruction/order."
    }
  },
  {
    id: "b1-u27-e37",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ me ________ ________ ________ ________ (que no llegara tarde) again.",
      options: [ "said / not to be late", "told / not to be late", "asked / not to be late", "told / to not be late" ],
      correctAnswer: 1,
      explanation: "Negative command."
    }
  },
  {
    id: "b1-u27-e38",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The doctor ________ her ________ ________ ________ (que dejara de fumar) immediately.",
      options: [ "told / to give up smoking", "said / to give up smoking", "asked / to give up smoking", "told / giving up smoking" ],
      correctAnswer: 0,
      explanation: "Strong advice/order."
    }
  },
  {
    id: "b1-u27-e39",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The guard ________ the visitors ________ ________ ________ (que no hicieran fotos).",
      options: [ "said / not to take photos", "asked / not to take photos", "told / to not take photos", "told / not to take photos" ],
      correctAnswer: 3,
      explanation: "Prohibition/Order."
    }
  },
  {
    id: "b1-u27-e40",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ us ________ ________ ________ (que nos diéramos prisa) or we would miss the bus.",
      options: [ "told / hurrying up", "asked / to hurry up", "told / to hurry up", "said / to hurry up" ],
      correctAnswer: 2,
      explanation: "Urgent command."
    }
  },
  // --- SUB-TOPIC 5: Vocabulary: Travel & Tourism (Reported focus) (41-50) ---
  {
    id: "b1-u27-e41",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Itinerary",
          back: "Itinerario",
          pronunciation: "/aɪˈtɪn.ər.ər.i/",
          example: "The travel agent asked me if I liked the itinerary.",
          explanation: "Un plan detallado para un viaje."
        }
      ]
    }
  },
  {
    id: "b1-u27-e42",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The tourist ________ (preguntar) where the nearest museum was.",
      options: [ "talked", "asked", "said", "told" ],
      correctAnswer: 1,
      explanation: "Ask = preguntar."
    }
  },
  {
    id: "b1-u27-e43",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The receptionist ________ (decir/ordenar) me to sign the form.",
      options: [ "told", "questioned", "said", "asked" ],
      correctAnswer: 0,
      explanation: "Tell someone to do something."
    }
  },
  {
    id: "b1-u27-e44",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "They ________ (preguntar) if the ________ (vuelo) was on time.",
      options: [ "asked / journey", "asked / flight", "said / trip", "told / travel" ],
      correctAnswer: 1,
      explanation: "Flight = vuelo."
    }
  },
  {
    id: "b1-u27-e45",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The customs officer ________ (pedir) me to open my ________ (maleta).",
      options: [ "asked / backpack", "said / luggage", "told / bag", "asked / suitcase" ],
      correctAnswer: 3,
      explanation: "Suitcase = maleta."
    }
  },
  {
    id: "b1-u27-e46",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The travel agent ________ (recomendar) me to book the ________ (paquete vacacional).",
      options: [ "asked / destination", "said / tour", "told / flight", "advised / package holiday" ],
      correctAnswer: 3,
      explanation: "Package holiday = paquete vacacional."
    }
  },
  {
    id: "b1-u27-e47",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "He ________ (quería saber) how long the ________ (viaje) would take.",
      options: [ "told / trip", "wanted to know / journey", "said / flight", "asked / travel" ],
      correctAnswer: 1,
      explanation: "Journey = trayecto / viaje largo."
    }
  },
  {
    id: "b1-u27-e48",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The guide ________ (pedir) us not to leave the ________ (grupo).",
      options: [ "told / team", "ordered / people", "said / crowd", "asked / group" ],
      correctAnswer: 3,
      explanation: "Group = grupo."
    }
  },
  {
    id: "b1-u27-e49",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "She ________ (preguntar) what time the ________ (salida) was.",
      options: [ "asked / boarding", "told / arrival", "said / check-in", "asked / departure" ],
      correctAnswer: 3,
      explanation: "Departure = salida."
    }
  },
  {
    id: "b1-u27-e50",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "They ________ (confirmar) that the ________ (reserva) had been made.",
      options: [ "said / hotel", "confirmed / reservation", "asked / booking", "told / place" ],
      correctAnswer: 1,
      explanation: "Confirmation of a reservation."
    }
  },
  // --- SUB-TOPIC 6: Grammar: Asking for and giving directions (Reported) (51-60) ---
  {
    id: "b1-u27-e51",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Reporting Directions",
          back: "Reportar direcciones",
          pronunciation: "/rɪˈpɔː.tɪŋ daɪˈrek.ʃənz/",
          example: "'Go straight on.' -> He told me to go straight on.",
          explanation: "Las instrucciones o direcciones se reportan como órdenes o sugerencias (told to / suggested going)."
        }
      ]
    }
  },
  {
    id: "b1-u27-e52",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Turn left at the bank.' -> Reported: She ________ me ________ ________ left at the bank.",
      options: [ "asked / turning", "told / to turn", "asked / to turn", "said / to turn" ],
      correctAnswer: 1,
      explanation: "Instruction/Direction reported as 'told to'."
    }
  },
  {
    id: "b1-u27-e53",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'How can I get to the park?' -> Reported: He ________ how he ________ get to the park.",
      options: [ "said / could", "asked / can", "told / can", "asked / could" ],
      correctAnswer: 3,
      explanation: "Wh- question about directions."
    }
  },
  {
    id: "b1-u27-e54",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "She ________ (preguntar) if there ________ (haber) a pharmacy nearby.",
      options: [ "told / was", "said / is", "asked / was", "asked / is" ],
      correctAnswer: 2,
      explanation: "Is there...? -> She asked if there was..."
    }
  },
  {
    id: "b1-u27-e55",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "The man ________ (decir/indicar) us ________ (que tomáramos) the second exit.",
      options: [ "told / to take", "said / to take", "asked / to take", "told / taking" ],
      correctAnswer: 0,
      explanation: "Giving a direction."
    }
  },
  {
    id: "b1-u27-e56",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ (sugerir) ________ (tomar) a taxi instead of walking.",
      options: [ "asked / taking", "suggested / to take", "told / to take", "suggested / taking" ],
      correctAnswer: 3,
      explanation: "Suggest + -ing."
    }
  },
  {
    id: "b1-u27-e57",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ (preguntar) me ________ (cuánto tiempo) it ________ ________ (tardaría) to arrive.",
      options: [ "asked / how long / would take", "told / how long / took", "asked / how much / will take", "asked / when / would take" ],
      correctAnswer: 0,
      explanation: "Reporting a question about duration."
    }
  },
  {
    id: "b1-u27-e58",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "They ________ (preguntar) if they ________ ________ (podían aparcar) their car there.",
      options: [ "asked / could park", "told / could park", "asked / can park", "said / would park" ],
      correctAnswer: 0,
      explanation: "Permission question."
    }
  },
  {
    id: "b1-u27-e59",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ (confirmar) that the museum ________ ________ (estaba cerrado) on Mondays.",
      options: [ "confirmed / was closed", "told / were closed", "asked / is closed", "said / had closed" ],
      correctAnswer: 0,
      explanation: "Reporting information."
    }
  },
  {
    id: "b1-u27-e60",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "I ________ (preguntar) her to ________ (que me mostrara) the way on the map.",
      options: [ "asked / show me", "told / showing me", "said / to show me", "asked / showing me" ],
      correctAnswer: 0,
      explanation: "Request for help."
    }
  },
  // --- SUB-TOPIC 7: Vocabulary: Hotels & Services (Requests focus) (61-70) ---
  {
    id: "b1-u27-e61",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Room Service",
          back: "Servicio de habitaciones",
          pronunciation: "/ruːm ˈsɜː.vɪs/",
          example: "I asked the hotel to bring me breakfast via room service.",
          explanation: "Servicio que ofrece comida y bebida a los huéspedes en sus habitaciones."
        }
      ]
    }
  },
  {
    id: "b1-u27-e62",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The guest ________ (pedir) a ________ (habitación doble).",
      options: [ "said / twin room", "asked for / double room", "told for / suite", "asked to / single room" ],
      correctAnswer: 1,
      explanation: "Ask for something."
    }
  },
  {
    id: "b1-u27-e63",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "I ________ (pedir) the receptionist ________ (que me despertara) at 7 AM.",
      options: [ "asked / waking me up", "said / to wake me up", "asked / to wake me up", "told / to wake me up" ],
      correctAnswer: 2,
      explanation: "Wake-up call request."
    }
  },
  {
    id: "b1-u27-e64",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "She ________ (preguntar) if ________ (estaba incluido) breakfast.",
      options: [ "told / breakfast included", "asked / breakfast was included", "said / breakfast is included", "asked / was breakfast included" ],
      correctAnswer: 1,
      explanation: "Question about services."
    }
  },
  {
    id: "b1-u27-e65",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "They ________ (pedir) extra ________ (toallas) for the bathroom.",
      options: [ "said / sheets", "told for / pillows", "asked for / towels", "asked to / blankets" ],
      correctAnswer: 2,
      explanation: "Towels = toallas."
    }
  },
  {
    id: "b1-u27-e66",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The manager ________ (decir/ordenar) the staff ________ (que limpiaran) the lobby.",
      options: [ "said / to clean", "told / cleaning", "told / to clean", "asked / to clean" ],
      correctAnswer: 2,
      explanation: "Command to staff."
    }
  },
  {
    id: "b1-u27-e67",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "He ________ (preguntar) if there was a ________ (gimnasio) in the hotel.",
      options: [ "told / pool", "said / sauna", "asked / gym", "asked / spa" ],
      correctAnswer: 2,
      explanation: "Gym = gimnasio."
    }
  },
  {
    id: "b1-u27-e68",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "She ________ (quería saber) if ________ (había) a ________ (caja fuerte) in the room.",
      options: [ "asked / was there / safe", "wanted to know / there was / safe", "asked / there is / box", "told / was / safe" ],
      correctAnswer: 1,
      explanation: "Safe = caja fuerte."
    }
  },
  {
    id: "b1-u27-e69",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "They ________ (nos pidieron) to ________ ________ (que hiciéramos el registro de salida) before 11 AM.",
      options: [ "asked us / check out", "asked to us / leave", "said us / stay", "told us / check in" ],
      correctAnswer: 0,
      explanation: "Check out = hacer el registro de salida."
    }
  },
  {
    id: "b1-u27-e70",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "I ________ (le pedí a él) to help me with my ________ (equipaje).",
      options: [ "asked him / luggage", "asked to him / baggage", "said him / suitcases", "told him / bags" ],
      correctAnswer: 0,
      explanation: "Luggage = equipaje."
    }
  },
  // --- SUB-TOPIC 8: Grammar: Polite Requests (Reported) (71-80) ---
  {
    id: "b1-u27-e71",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Polite Requests Reporting",
          back: "Reporte de peticiones corteses",
          pronunciation: "/pəˈlaɪt rɪˈkwest rɪˈpɔː.tɪŋ/",
          example: "'Would you mind closing the door?' -> She asked me to close the door.",
          explanation: "Aunque la petición original sea muy larga o formal ('Would you mind...', 'I was wondering if...'), se suele reportar de forma sencilla con 'asked (me) to'."
        }
      ]
    }
  },
  {
    id: "b1-u27-e72",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Would you mind helping me?' -> Reported: She ________ me ________ ________ her.",
      options: [ "asked / helping", "asked / to help", "said / to help", "told / to help" ],
      correctAnswer: 1,
      explanation: "Polite request becomes 'asked to'."
    }
  },
  {
    id: "b1-u27-e73",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'Could you possibly open the window?' -> Reported: He ________ me ________ ________ the window.",
      options: [ "said / to open", "told / to open", "asked / to open", "asked / opening" ],
      correctAnswer: 2,
      explanation: "Polite request with 'could'."
    }
  },
  {
    id: "b1-u27-e74",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "Direct: 'I wonder if you could lend me some money.' -> Reported: She ________ me ________ ________ her some money.",
      options: [ "said / to lend", "asked / lending", "asked / to lend", "told / to lend" ],
      correctAnswer: 2,
      explanation: "Reporting a very polite request."
    }
  },
  {
    id: "b1-u27-e75",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      question: "He ________ (pedir educadamente) the audience ________ (que no hicieran ruido).",
      options: [ "asked / to make no noise", "asked / not to make noise", "said / not making noise", "told / to not make noise" ],
      correctAnswer: 1,
      explanation: "Polite request."
    }
  },
  {
    id: "b1-u27-e76",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The host ________ (pedir) the guests ________ (que se sintieran) at home.",
      options: [ "said / making themselves", "told / to make themselves", "asked / make themselves", "asked / to make themselves" ],
      correctAnswer: 3,
      explanation: "Polite invitation/request."
    }
  },
  {
    id: "b1-u27-e77",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "She ________ (preguntar educadamente) if I ________ ________ (me importaría) helping her.",
      options: [ "said / minding", "asked / would mind", "told / would mind", "asked / will mind" ],
      correctAnswer: 1,
      explanation: "Reported question with 'would mind'."
    }
  },
  {
    id: "b1-u27-e78",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The doctor ________ (preguntar) if I ________ ________ (podía esperar) a moment.",
      options: [ "told / can wait", "asked / could wait", "said / could wait", "asked / can wait" ],
      correctAnswer: 1,
      explanation: "Reported polite question."
    }
  },
  {
    id: "b1-u27-e79",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "They ________ (nos pidieron) to ________ ________ ________ ________ (que bajáramos el volumen) of the music.",
      options: [ "asked us / turn down the volume", "asked us / turning down the volume", "told us / turn up the volume", "said us / turn down the volume" ],
      correctAnswer: 0,
      explanation: "Requesting to lower the volume."
    }
  },
  {
    id: "b1-u27-e80",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "I ________ (pedir) her ________ ________ ________ ________ (que me perdonara) for being late.",
      options: [ "asked / forgiving me", "asked / to forgive me", "told / to forgive me", "said / to forgive me" ],
      correctAnswer: 1,
      explanation: "Request for forgiveness."
    }
  },
  // --- SUB-TOPIC 9: Phrasal Verbs related to Travel/Service (81-90) ---
  {
    id: "b1-u27-e81",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Set off",
          back: "Partir / Salir de viaje",
          pronunciation: "/set ɒf/",
          example: "He told us to set off early to avoid the traffic.",
          explanation: "Comenzar un viaje."
        }
      ]
    }
  },
  {
    id: "b1-u27-e82",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "We ________ (partimos) at 6 AM to avoid the crowd.",
      options: [ "set off", "checked in", "took off", "got on" ],
      correctAnswer: 0,
      explanation: "Set off = partir."
    }
  },
  {
    id: "b1-u27-e83",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "The plane ________ (despegó) two hours late.",
      options: [ "checked out", "set off", "took off", "landed" ],
      correctAnswer: 2,
      explanation: "Take off = despegar."
    }
  },
  {
    id: "b1-u27-e84",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "They ________ (nos despidieron) at the airport.",
      options: [ "saw us off", "set us off", "got us on", "checked us in" ],
      correctAnswer: 0,
      explanation: "See someone off = despedir a alguien (viaje)."
    }
  },
  {
    id: "b1-u27-e85",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      question: "I need to ________ ________ (registrarme) at the hotel.",
      options: [ "check out", "set off", "get in", "check in" ],
      correctAnswer: 3,
      explanation: "Check in = registrarse."
    }
  },
  {
    id: "b1-u27-e86",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "We ________ (nos quedamos sin) petrol in the middle of nowhere.",
      options: [ "checked out of", "set off for", "got out of", "ran out of" ],
      correctAnswer: 3,
      explanation: "Run out of = quedarse sin algo."
    }
  },
  {
    id: "b1-u27-e87",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "The bus ________ (se averió) on the way to the coast.",
      options: [ "took off", "broke down", "set off", "got off" ],
      correctAnswer: 1,
      explanation: "Break down = averiarse."
    }
  },
  {
    id: "b1-u27-e88",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "I ________ ________ (me encontré con) an old friend in London.",
      options: [ "ran into", "got on", "set off", "saw off" ],
      correctAnswer: 0,
      explanation: "Run into = encontrarse con alguien por casualidad."
    }
  },
  {
    id: "b1-u27-e89",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "Please ________ (espera) a moment while I check the itinerary.",
      options: [ "take off", "set off", "get on", "hold on" ],
      correctAnswer: 3,
      explanation: "Hold on = esperar un momento."
    }
  },
  {
    id: "b1-u27-e90",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      question: "We ________ ________ (tuvimos que cancelar) the trip due to the weather.",
      options: [ "set off", "called off", "took off", "got off" ],
      correctAnswer: 1,
      explanation: "Call off = cancelar."
    }
  },
  // --- SUB-TOPIC 10: Review & Roleplay Scenarios (91-100) ---
  {
    id: "b1-u27-e91",
    type: "flashcard",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      items: [
        {
          front: "Reported Questions & Orders Review",
          back: "Repaso de preguntas y órdenes indirectas.",
          pronunciation: "/rɪˈpɔː.tɪd ˈkwes.tʃənz ænd ˈɔː.dərz rɪˈvjuː/",
          example: "He asked if I knew the way and told me to be careful.",
          explanation: "Consolidación de estructuras de preguntas (if/wh-) y mandatos (told/asked to)."
        }
      ]
    }
  },
  {
    id: "b1-u27-e92",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Where are you going?' -> Reported: She asked me where I ________ ________.",
      options: [ "were going", "am going", "was going", "had gone" ],
      correctAnswer: 2,
      explanation: "Review Wh- question."
    }
  },
  {
    id: "b1-u27-e93",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Don't be late!' -> Reported: He ________ me ________ ________ late.",
      options: [ "asked / to be not", "said / not to be", "told / not to be", "told / to not be" ],
      correctAnswer: 2,
      explanation: "Review negative order."
    }
  },
  {
    id: "b1-u27-e94",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Can you help me?' -> Reported: She ________ me ________ ________ her.",
      options: [ "asked / helping", "asked / to help", "told / to help", "said / to help" ],
      correctAnswer: 1,
      explanation: "Review request."
    }
  },
  {
    id: "b1-u27-e95",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Have you seen my keys?' -> Reported: He asked ________ I ________ ________ his keys.",
      options: [ "if / have seen", "if / saw", "that / had seen", "if / had seen" ],
      correctAnswer: 3,
      explanation: "Review yes/no question."
    }
  },
  {
    id: "b1-u27-e96",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Give me the book.' -> Reported: She ________ me ________ ________ her the book.",
      options: [ "said / to give", "told / to give", "asked / giving", "told / giving" ],
      correctAnswer: 1,
      explanation: "Review order."
    }
  },
  {
    id: "b1-u27-e97",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Direct: 'Why did she leave?' -> Reported: They asked why ________ ________ ________.",
      options: [ "had she left", "did she leave", "she had left", "she left" ],
      correctAnswer: 2,
      explanation: "Review Wh- question (past simple -> past perfect)."
    }
  },
  {
    id: "b1-u27-e98",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "The guide ________ us ________ ________ ________ ________ (que no tocáramos) the statues.",
      options: [ "ordered / to not touch", "asked / to not touch", "told / not to touch", "said / not to touch" ],
      correctAnswer: 2,
      explanation: "Review negative command."
    }
  },
  {
    id: "b1-u27-e99",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "He ________ (preguntó educadamente) if ________ ________ ________ (me importaría) opening the window.",
      options: [ "said / I would mind", "told / I would mind", "asked / I would mind", "asked / if I mind" ],
      correctAnswer: 2,
      explanation: "Review polite request."
    }
  },
  {
    id: "b1-u27-e100",
    type: "multiple-choice",
    level: "B1",
    topic: "Reported Speech: Questions & Orders",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      question: "Finally, the travel agent ________ us ________ ________ (que confirmáramos) our flight.",
      options: [ "said / to confirm", "told / to confirm", "told / confirming", "asked / to confirm" ],
      correctAnswer: 1,
      explanation: "Final review: Order/Instruction."
    }
  }
];
