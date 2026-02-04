
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U2_BLOCK1: Exercise = {
  "id": "c2-u2-b1",
  "type": "vocabulary",
  "title": "Block 1: Evolution of Modern Relationships - Part 1",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b1-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses a correct advanced relative clause structure?",
      "options": [
        "The man whom I believe is his brother is arriving tomorrow.",
        "The man whose wallet I found is very grateful.",
        "This is the book what I was talking about.",
        "She is the author whose I was speaking at the conference."
      ],
      "correctAnswer": "The man whose wallet I found is very grateful.",
      "explanation": "En esta opción, 'whose' se utiliza correctamente para indicar posesión.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q2",
      "startOfAnswer": "which were",
      "sentence": "John had remarkable ideas.",
      "type": "key-word-transformation",
      "question": "John had remarkable ideas. ()\n\nwhich were __________",
      "correctAnswer": "remarkable",
      "explanation": "Usamos 'which' para referirnos a las ideas de John.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q3",
      "type": "key-word-transformation",
      "question": "Many considered it improbable that he became president. (WHICH)\n\nHe became president, __________",
      "correctAnswer": "which many considered improbable",
      "explanation": "'Which' se usa para referirse a la cláusula anterior completa.",
      "points": 1,
      "sentence": "Many considered it improbable that he became president.",
      "keyWord": "WHICH",
      "startOfAnswer": "He became president,"
    },
    {
      "id": "c2-u2-b1-q4",
      "keyWord": "WHOSE",
      "sentence": "The scientist _____ theory was groundbreaking received the Nobel Prize.",
      "startOfAnswer": "The scientist whose",
      "type": "key-word-transformation",
      "question": "The scientist _____ theory was groundbreaking received the Nobel Prize. (WHOSE)\n\nThe scientist whose __________",
      "correctAnswer": "whose",
      "explanation": "Utilizamos 'whose' para mostrar la relación de pertenencia entre el científico y su teoría.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q5",
      "type": "multiple-choice",
      "question": "Identify the correct use of a defining relative clause.",
      "options": [
        "The artist, whose painting won the award, is French.",
        "The artist whose painting won the award is French.",
        "The artist which painting won the award is French.",
        "The artist that paintings you admire is French."
      ],
      "correctAnswer": "The artist whose painting won the award is French.",
      "explanation": "En una oración definitoria, no usamos comas. 'Whose' indica posesión correctamente.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q6",
      "startOfAnswer": "The new policy which",
      "sentence": "The new policy has various effects.",
      "type": "key-word-transformation",
      "question": "The new policy has various effects. ()\n\nThe new policy which __________",
      "correctAnswer": "which has various effects",
      "explanation": "Utilizamos 'which' para referirnos a 'the new policy' y su efectos.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q7",
      "type": "key-word-transformation",
      "question": "Everyone agreed that the book was fascinating. (WHICH)\n\nThe book is fascinating, __________",
      "correctAnswer": "which everyone agreed on",
      "explanation": "'Which' se utiliza para hacer referencia a toda la cláusula anterior.",
      "points": 1,
      "sentence": "Everyone agreed that the book was fascinating.",
      "keyWord": "WHICH",
      "startOfAnswer": "The book is fascinating,"
    },
    {
      "id": "c2-u2-b1-q8",
      "keyWord": "WHOSE",
      "sentence": "The company, _______ headquarters are in London, has achieved international success.",
      "startOfAnswer": "The company whose",
      "type": "key-word-transformation",
      "question": "The company, _______ headquarters are in London, has achieved international success. (WHOSE)\n\nThe company whose __________",
      "correctAnswer": "whose",
      "explanation": "'Whose' se usa para indicar la relación de pertenencia entre la empresa y sus oficinas.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q9",
      "type": "multiple-choice",
      "question": "Choose the sentence with a non-defining relative clause.",
      "options": [
        "The book, which was on the table, is missing.",
        "This is the book that I want to read.",
        "He met the author who wrote that novel.",
        "He met the author, which astonished him."
      ],
      "correctAnswer": "The book, which was on the table, is missing.",
      "explanation": "Las cláusulas no definitorias siempre van entre comas.",
      "points": 1
    },
    {
      "id": "c2-u2-b1-q10",
      "type": "key-word-transformation",
      "question": "The project failed because its complexities were underestimated. (THE COMPLEXITIES OF)\n\nThe project, __________",
      "correctAnswer": "the complexities of which were underestimated, failed",
      "explanation": "'The complexities of which' se utiliza correctamente para describir el proyecto.",
      "points": 1,
      "sentence": "The project failed because its complexities were underestimated.",
      "keyWord": "THE COMPLEXITIES OF",
      "startOfAnswer": "The project,"
    }
  ]
};

export const C2_U2_BLOCK2: Exercise = {
  "id": "c2-u2-b2",
  "type": "grammar",
  "title": "Block 2: Evolution of Modern Relationships - Part 2",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b2-q1",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly uses a non-defining relative clause?",
      "options": [
        "My sister, who lives in France, is coming to visit.",
        "The girl who lives next door is very friendly.",
        "I have a friend which can speak Japanese.",
        "The book that you lent me is fascinating."
      ],
      "correctAnswer": "My sister, who lives in France, is coming to visit.",
      "explanation": "En las oraciones de relativo no definitorias, la cláusula proporciona información adicional, y el uso de comas es obligatorio.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q2",
      "type": "fill-blank",
      "question": "She has a habit of ignoring everything _________ she feels is unimportant.",
      "correctAnswer": "that",
      "explanation": "Cuando el antecedente es todo o lo único que existe de su tipo, ‘that’ es el pronombre relativo más adecuado.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q3",
      "type": "key-word-transformation",
      "question": "The friend who you recommended has been very helpful. (WHOM)\n\nThe friend whom __________",
      "sentence": "The friend who you recommended has been very helpful.",
      "keyWord": "WHOM",
      "startOfAnswer": "The friend whom",
      "correctAnswer": "you recommended has been very helpful",
      "explanation": "El uso de 'whom' es adecuado cuando es el objeto del verbo en la clausula relativa.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q4",
      "type": "multiple-choice",
      "question": "Select the sentence where a defining relative clause is necessary.",
      "options": [
        "Our neighbor, who has a loud dog, complained about the noise.",
        "The musician whose song topped the charts is performing tonight.",
        "My car, which I bought last year, needs repairs.",
        "We stayed at a hotel, where they have an amazing spa."
      ],
      "correctAnswer": "The musician whose song topped the charts is performing tonight.",
      "explanation": "La cláusula relativa es definitoria y esencial para identificar al músico exacto del que se habla.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q5",
      "type": "fill-blank",
      "question": "The house _________ we used to live has been demolished.",
      "correctAnswer": "where",
      "explanation": "'Where' se utiliza para referirse a un lugar o ubicación dentro de una cláusula relativa.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q6",
      "type": "key-word-transformation",
      "question": "The book that she recommended was sold out. (WHICH)\n\nThe book which __________",
      "sentence": "The book that she recommended was sold out.",
      "keyWord": "WHICH",
      "startOfAnswer": "The book which",
      "correctAnswer": "she recommended was sold out",
      "explanation": "'Which' es un pronombre relativo que se puede usar en lugar de 'that' en contextos formales para cosas.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q7",
      "type": "fill-blank",
      "question": "The person _________ ideas have transformed the company is leaving.",
      "correctAnswer": "whose",
      "explanation": "'Whose' indica posesión y se utiliza para conectar a una persona con algo que les pertenece.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q8",
      "type": "multiple-choice",
      "question": "Identify the sentence that lacks precision due to an inappropriate use of a relative clause.",
      "options": [
        "The artist, whose paintings were displayed, gained fame.",
        "I saw the cat that you brought home.",
        "He spoke to the man who was standing by the door.",
        "They visited a museum, that had an amazing exhibit."
      ],
      "correctAnswer": "They visited a museum, that had an amazing exhibit.",
      "explanation": "El uso de 'that' en una cláusula relativa no definitoria es incorrecto; debe usarse 'which'.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q9",
      "type": "key-word-transformation",
      "question": "The concert, which I really enjoyed, was held last night. (THAT)\n\nThe concert that __________",
      "sentence": "The concert, which I really enjoyed, was held last night.",
      "keyWord": "THAT",
      "startOfAnswer": "The concert that",
      "correctAnswer": "I really enjoyed was held last night",
      "explanation": "'That' puede utilizarse en lugar de 'which' en cláusulas definitorias, pero no es adecuado para no-definitorias.",
      "points": 1
    },
    {
      "id": "c2-u2-b2-q10",
      "type": "fill-blank",
      "question": "There's a place down the road _________ they do the best coffee.",
      "correctAnswer": "where",
      "explanation": "'Where' se utiliza para especificar la ubicación o lugar en el que ocurre algo.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK3: Exercise = {
  "id": "c2-u2-b3",
  "type": "vocabulary",
  "title": "Block 3: Evolution of Modern Relationships - Part 3",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b3-q1",
      "type": "multiple-choice",
      "question": "Which sentence correctly uses a non-defining relative clause?",
      "options": [
        "The book, that I left on the table, is gone.",
        "The car, which cost a fortune, is finally here.",
        "My friend who lives in Canada sent a postcard.",
        "She bought a dress that was way too expensive."
      ],
      "correctAnswer": "The car, which cost a fortune, is finally here.",
      "explanation": "En una oración de cláusula relativa no definitoria, 'which' es la opción correcta para introducir información adicional que no es esencial.",
      "points": 1
    },
    {
      "id": "c2-u2-b3-q2",
      "type": "fill-blank",
      "question": "Complete the sentence: The artist _______ work was exhibited last week, will attend the gala.",
      "correctAnswer": "whose",
      "explanation": "'Whose' se usa para mostrar posesión o relación con el antecedente de la oración.",
      "points": 1
    },
    {
      "id": "c2-u2-b3-q3",
      "type": "key-word-transformation",
      "question": "The man gave me a book. The book was fascinating. (WHICH)\n\nThe man gave me a book which __________",
      "correctAnswer": "was fascinating",
      "explanation": "Usamos 'which' para definir el libro en la cláusula relativa que proporciona información adicional.",
      "points": 1,
      "sentence": "The man gave me a book. The book was fascinating.",
      "keyWord": "WHICH",
      "startOfAnswer": "The man gave me a book which"
    },
    {
      "id": "c2-u2-b3-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences uses the correct defining relative clause?",
      "options": [
        "He’ll meet the lady, who just arrived from Paris.",
        "The house that Jack built is old and charming.",
        "The song, that I heard yesterday, is stuck in my head.",
        "The coffee which John likes is always too strong."
      ],
      "correctAnswer": "The house that Jack built is old and charming.",
      "explanation": "En cláusulas relativas definitorias, 'that' suele ser más apropiado cuando el antecedente se refiere a cosas, especialmente en inglés hablado.",
      "points": 1
    },
    {
      "id": "c2-u2-b3-q5",
      "type": "fill-blank",
      "question": "Complete the sentence using an appropriate relative pronoun: She is a person _______ opinion matters a lot to me.",
      "correctAnswer": "whose",
      "explanation": "Se usa 'whose' para indicar posesión o relación entre el sujeto y su característica.",
      "points": 1
    },
    {
      "id": "c2-u2-b3-q6",
      "type": "key-word-transformation",
      "question": "The garden was full of flowers. They smelled delightful. (THAT)\n\nThe garden was full of flowers that __________",
      "correctAnswer": "smelled delightful",
      "explanation": "Usamos 'that' para limitar el entendimiento de las flores como una parte esencial de la cláusula relativa.",
      "points": 1,
      "sentence": "The garden was full of flowers. They smelled delightful.",
      "keyWord": "THAT",
      "startOfAnswer": "The garden was full of flowers that"
    },
    {
      "id": "c2-u2-b3-q7",
      "type": "multiple-choice",
      "question": "Which relative pronoun can best complete this sentence: The professor informed us about the research ______ won the prestigious award.",
      "options": [
        "who",
        "whom",
        "which",
        "whose"
      ],
      "correctAnswer": "which",
      "explanation": "'Which' se usa para referirse a cosas, en este caso 'la investigación', que ganó un premio.",
      "points": 1
    },
    {
      "id": "c2-u2-b3-q8",
      "type": "fill-blank",
      "question": "Fill in the gap with the correct relative pronoun: The scientist _______ theory changed the course of history was James Watson.",
      "correctAnswer": "whose",
      "explanation": "'Whose' indica una relación de posesión entre el científico y su teoría.",
      "points": 1
    },
    {
      "id": "c2-u2-b3-q9",
      "type": "key-word-transformation",
      "question": "The guide showed us the path. The path leads to the waterfall. (WHICH)\n\nThe guide showed us the path which __________",
      "correctAnswer": "leads to the waterfall",
      "explanation": "Usamos 'which' en una cláusula relativa definitoria para especificar información sobre el camino.",
      "points": 1,
      "sentence": "The guide showed us the path. The path leads to the waterfall.",
      "keyWord": "WHICH",
      "startOfAnswer": "The guide showed us the path which"
    },
    {
      "id": "c2-u2-b3-q10",
      "type": "multiple-choice",
      "question": "In which of these sentences is the relative clause incorrectly used?",
      "options": [
        "The actress who won the award gave a touching speech.",
        "The river, that we saw during our trip, is one of the longest in the world.",
        "Her latest novel, which critics praised worldwide, sold out quickly.",
        "The teacher whom everyone respects is retiring."
      ],
      "correctAnswer": "The river, that we saw during our trip, is one of the longest in the world.",
      "explanation": "Para una cláusula relativa no definitoria, 'which' es preferible a 'that' al proporcionar información adicional.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK4: Exercise = {
  "id": "c2-u2-b4",
  "type": "grammar",
  "title": "Block 4: Evolution of Modern Relationships - Part 4",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b4-q1",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly uses a non-defining relative clause?",
      "options": [
        "The book, which I lent you last week, is a best-seller.",
        "The book which I lent you last week is a best-seller.",
        "The book, that I lent you last week, is a best-seller.",
        "The book; which I lent you last week, is a best-seller."
      ],
      "correctAnswer": "The book, which I lent you last week, is a best-seller.",
      "explanation": "La cláusula de relativo no definida proporciona información adicional que no es esencial para entender el significado general de la oración.",
      "points": 1
    },
    {
      "id": "c2-u2-b4-q2",
      "type": "fill-blank",
      "question": "Their close friendship, __ origins go back to childhood, has endured numerous challenges.",
      "correctAnswer": "whose",
      "explanation": "Se utiliza 'whose' para indicar posesión o relación en cláusulas relativas que no definen.",
      "points": 1
    },
    {
      "id": "c2-u2-b4-q3",
      "type": "key-word-transformation",
      "question": null,
      "correctAnswer": "me to Alex, went on to become an actor",
      "explanation": "Las cláusulas relativas no definidas se pueden usar para agregar información adicional sin alterar el significado principal, usando 'who' para personas.",
      "points": 1,
      "sentence": "My friend John, ________, went on to become an actor.",
      "keyWord": "INTRODUCED",
      "startOfAnswer": "who introduced"
    },
    {
      "id": "c2-u2-b4-q4",
      "type": "multiple-choice",
      "question": "Identify the sentence that contains a defining relative clause.",
      "options": [
        "The musician, whom everyone admires, will be performing tonight.",
        "This is the house that Jack built.",
        "My father, who loves jazz, has an extensive collection of records.",
        "The artist, whose painting sold for a fortune, is relatively unknown."
      ],
      "correctAnswer": "This is the house that Jack built.",
      "explanation": "Las cláusulas de relativo definidas son esenciales para el significado de la oración y no están separadas por comas.",
      "points": 1
    },
    {
      "id": "c2-u2-b4-q5",
      "type": "fill-blank",
      "question": "She spoke affectionately of the days __ she spent with her grandparents.",
      "correctAnswer": "which",
      "explanation": "'Which' se utiliza para referirse a cosas o ideas en cláusulas relativas.",
      "points": 1
    },
    {
      "id": "c2-u2-b4-q6",
      "type": "key-word-transformation",
      "question": null,
      "correctAnswer": "for the project knew no bounds",
      "explanation": "La cláusula relativa 'whose' se usa aquí para referirse a la posesión, indicando que el entusiasmo de Anna es lo que inspiró.",
      "points": 1,
      "sentence": "Anna, ________, managed to inspire the entire team.",
      "keyWord": "ENTHUSIASM",
      "startOfAnswer": "whose enthusiasm"
    },
    {
      "id": "c2-u2-b4-q7",
      "type": "multiple-choice",
      "question": "Select the sentence that improperly uses a relative pronoun.",
      "options": [
        "The committee, that met last week, decided on the budget cuts.",
        "The committee, which met last week, decided on the budget cuts.",
        "The committee that met last week decided on the budget cuts.",
        "The committee, whose decision was final, announced the changes."
      ],
      "correctAnswer": "The committee, that met last week, decided on the budget cuts.",
      "explanation": "'That' no se debe usar en cláusulas relativas no definidas, se debe usar 'which' en su lugar.",
      "points": 1
    },
    {
      "id": "c2-u2-b4-q8",
      "type": "fill-blank",
      "question": "The group, to __ the secret was revealed, remained silent.",
      "correctAnswer": "whom",
      "explanation": "'Whom' se usa después de preposiciones para referirse a personas en un contexto formal.",
      "points": 1
    },
    {
      "id": "c2-u2-b4-q9",
      "type": "key-word-transformation",
      "question": null,
      "correctAnswer": "were against the policy",
      "explanation": "En una cláusula de relativo no definida que refiere a un grupo, 'many of whom' se utiliza para dar más información sobre el grupo.",
      "points": 1,
      "sentence": "The council members, ________, expressed their concerns during the meeting.",
      "keyWord": "MANY",
      "startOfAnswer": "many of whom"
    },
    {
      "id": "c2-u2-b4-q10",
      "type": "multiple-choice",
      "question": "Choose the sentence that uses a present participle as a reduced relative clause.",
      "options": [
        "The man driving the car waved at us.",
        "The man driven by ambition achieved success.",
        "The man who is driving the car waved at us.",
        "The man, who drives a car, waved at us."
      ],
      "correctAnswer": "The man driving the car waved at us.",
      "explanation": "Una cláusula de relativo puede reducirse eliminando el pronombre y el verbo 'be', convirtiendo el verbo en participio presente.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK5: Exercise = {
  "id": "c2-u2-b5",
  "type": "vocabulary",
  "title": "Block 5: Evolution of Modern Relationships - Part 5",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b5-q1",
      "type": "multiple-choice",
      "question": "Choose the sentence that correctly uses a non-defining relative clause:",
      "options": [
  "The woman, who is my neighbor, is a renowned artist.",
  "The man who plays the violin is a member of the orchestra.",
  "My brother, who is two years younger than me, is studying medicine.",
  "The car, which was parked outside, was vandalized."
],
      "correctAnswer": "My brother, who is two years younger than me, is studying medicine.",
      "explanation": "En las oraciones no definitorias, el pronombre relativo introduce información adicional y se separa con comas.",
      "points": 1
    },
    {
      "id": "c2-u2-b5-q2",
      "type": "fill-blank",
      "question": "Fill in the blank with an appropriate relative pronoun: 'Her partner, _______ loyalty was never in question, supported her through difficult times.'",
      "correctAnswer": "whose",
      "explanation": "Para indicar posesión en oraciones relativas, usamos 'whose'.",
      "points": 1
    },
    {
      "id": "c2-u2-b5-q3",
      "type": "key-word-transformation",
      "question": "The author has won multiple awards. Her latest novel has been adapted into a screenplay. (WHOSE)\n\nThe author, whose latest novel __________",
      "correctAnswer": "has been adapted into a screenplay, has won multiple awards",
      "explanation": "Usamos 'whose' para combinar ambas ideas en una oración relativa no definitoria.",
      "points": 1,
      "sentence": "The author has won multiple awards. Her latest novel has been adapted into a screenplay.",
      "keyWord": "WHOSE",
      "startOfAnswer": "The author, whose latest novel"
    },
    {
      "id": "c2-u2-b5-q4",
      "type": "fill-blank",
      "question": "Complete the sentence with an appropriate relative clause: 'The committee, _______ decision was unanimous, opted for a new strategy.'",
      "correctAnswer": "whose",
      "explanation": "En este contexto, 'whose' indica posesión en relación al 'decision' de 'the committee'.",
      "points": 1
    },
    {
      "id": "c2-u2-b5-q5",
      "type": "multiple-choice",
      "question": "Which sentence contains a defining relative clause?",
      "options": [
  "The book that I borrowed from the library was thrilling.",
  "My neighbor, who is a chef, makes delicious cuisine.",
  "Paris, where I studied, is a beautiful city.",
  "John, whose opinion I value, suggested a new method."
],
      "correctAnswer": "The book that I borrowed from the library was thrilling.",
      "explanation": "En una cláusula relativa definitoria, no se utilizan comas y proporciona información esencial.",
      "points": 1
    },
    {
      "id": "c2-u2-b5-q6",
      "type": "key-word-transformation",
      "question": "The lecture on quantum mechanics, important though it was, didn't address the students' concerns. (WHICH)\n\nThe lecture on quantum mechanics, which __________",
      "correctAnswer": "was important, didn't address the students' concerns",
      "explanation": "La oración debe reconfigurarse para utilizar 'which' en una cláusula relativa explicativa.",
      "points": 1,
      "sentence": "The lecture on quantum mechanics, important though it was, didn't address the students' concerns.",
      "keyWord": "WHICH",
      "startOfAnswer": "The lecture on quantum mechanics, which"
    },
    {
      "id": "c2-u2-b5-q7",
      "type": "fill-blank",
      "question": "Complete the sentence with an appropriate relative pronoun: 'The changes implemented by the CEO, _______ impact was immediate, improved the company's efficiency.'",
      "correctAnswer": "whose",
      "explanation": "'Whose' se utiliza para expresar posesión en oraciones relativas.",
      "points": 1
    },
    {
      "id": "c2-u2-b5-q8",
      "type": "key-word-transformation",
      "question": "I met a traveler. Her tales of adventure inspired everyone at the party. (WHOSE)\n\nI met a traveler whose __________",
      "correctAnswer": "tales of adventure inspired everyone at the party",
      "explanation": "'Whose' conecta la información sobre el visible en la primera oración y su aporte al contexto.",
      "points": 1,
      "sentence": "I met a traveler. Her tales of adventure inspired everyone at the party.",
      "keyWord": "WHOSE",
      "startOfAnswer": "I met a traveler whose"
    },
    {
      "id": "c2-u2-b5-q9",
      "type": "multiple-choice",
      "question": "Which sentence is an example of combining clauses with a relative pronoun for additional information?",
      "options": [
        "She couldn't find the document she misplaced.",
        "The musician is talented.",
        "The concert, which was sold out, was a great success.",
        "She is the one who told me the news."
      ],
      "correctAnswer": "The concert, which was sold out, was a great success.",
      "explanation": "La cláusula con 'which' añade información adicional sobre el concierto, usando comas.",
      "points": 1
    },
    {
      "id": "c2-u2-b5-q10",
      "type": "fill-blank",
      "question": "Fill in the blank with an appropriate word: 'The jam session, _______ lasted over three hours, brought the musicians closer together.'",
      "correctAnswer": "which",
      "explanation": "Usamos 'which' para referirnos a la sesión como algo adicional, sin comas.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK6: Exercise = {
  "id": "c2-u2-b6",
  "type": "grammar",
  "title": "Block 6: Evolution of Modern Relationships - Part 6",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b6-q1",
      "type": "multiple-choice",
      "question": "Which sentence correctly uses an advanced relative clause?",
      "options": [
  "He is the person whom many admire.",
  "She wrote a book that became a bestseller, which was surprising to everyone.",
  "The car that was parked outside is mine.",
  "The man to whom I spoke seemed kind."
],
      "correctAnswer": "She wrote a book that became a bestseller, which was surprising to everyone.",
      "explanation": "En español: Usamos 'which' para introducir una cláusula relativa no esencial, explicando algo más sobre el libro.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q2",
      "type": "fill-blank",
      "question": "Few people understand the significance of the events, ______ implications were profound and long-lasting.",
      "correctAnswer": "whose",
      "explanation": "En español: Usamos 'whose' para referirnos a las implicaciones de 'los eventos'.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q3",
      "type": "key-word-transformation",
      "question": "The scientist published his findings last week. These findings have changed the world. (WHICH)\n\nThe findings, which __________",
      "sentence": "The scientist published his findings last week. These findings have changed the world.",
      "keyWord": "which",
      "startOfAnswer": "The findings, which",
      "correctAnswer": "were published by the scientist last week",
      "explanation": "En español: 'Which' se utiliza para unir las dos oraciones, formando una cláusula relativa no definitoria que añade información sobre las conclusiones.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q4",
      "type": "multiple-choice",
      "question": "Identify the sentence with the correct relative clause.",
      "options": [
  "Anyone to whom he spoke was left confused.",
  "The party which I attended was boring.",
  "I lost the book whose cover is red.",
  "The woman whose brother I know is here."
],
      "correctAnswer": "Anyone to whom he spoke was left confused.",
      "explanation": "En español: 'To whom' es la forma correcta en oraciones formales para indicar la persona con la que habló.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q5",
      "type": "fill-blank",
      "question": "The decision, ______ ramifications will be felt for years, has already been made.",
      "correctAnswer": "whose",
      "explanation": "En español: Usamos 'whose' para indicar que las ramificaciones pertenecen a la decisión.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q6",
      "type": "key-word-transformation",
      "question": "She has a brother. His taste in music is unusual. (WHOSE)\n\nShe has a brother whose __________",
      "sentence": "She has a brother. His taste in music is unusual.",
      "keyWord": "whose",
      "startOfAnswer": "She has a brother whose",
      "correctAnswer": "taste in music is unusual",
      "explanation": "En español: Utilizamos 'whose' para relacionar dos ideas, 'a brother' y 'su gusto musical'.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q7",
      "type": "multiple-choice",
      "question": "Choose the sentence that illustrates an advanced use of a relative clause.",
      "options": [
        "The house which we saw yesterday has been sold.",
        "He is the kind of person who you would trust immediately.",
        "The cat that is sitting on the mat is mine.",
        "Her style, which many consider to be outdated, is actually quite trendy."
      ],
      "correctAnswer": "Her style, which many consider to be outdated, is actually quite trendy.",
      "explanation": "En español: 'Which' se usa para proporcionar información adicional sobre 'su estilo'.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q8",
      "type": "fill-blank",
      "question": "There are many theories ______ origins remain unclear.",
      "correctAnswer": "whose",
      "explanation": "En español: Usamos 'whose' para referirnos a los orígenes de las teorías, indicando posesión.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q9",
      "type": "key-word-transformation",
      "question": "The book was fascinating. I borrowed it last week. (WHICH)\n\nThe book, which __________",
      "sentence": "The book was fascinating. I borrowed it last week.",
      "keyWord": "which",
      "startOfAnswer": "The book, which",
      "correctAnswer": "I borrowed it last week",
      "explanation": "En español: 'Which' introduce una información adicional sobre el libro, indicando cuándo lo tomé prestado.",
      "points": 1
    },
    {
      "id": "c2-u2-b6-q10",
      "type": "multiple-choice",
      "question": "Select the sentence with the accurate use of an advanced relative clause.",
      "options": [
  "My neighbor whose car is red is moving.",
  "The teacher whom I respect the most is retiring.",
  "She visited the gallery that was closed for renovation.",
  "The musician who plays the guitar is talented."
],
      "correctAnswer": "The teacher whom I respect the most is retiring.",
      "explanation": "En español: 'Whom' se usa correctamente para referirse a 'el maestro', quien es objeto del verbo 'respeto'.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK7: Exercise = {
  "id": "c2-u2-b7",
  "type": "vocabulary",
  "title": "Block 7: Evolution of Modern Relationships - Part 7",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b7-q1",
      "type": "multiple-choice",
      "question": "Choose the sentence that correctly uses an advanced relative clause pertaining to relationships.",
      "options": [
        "The couple, whom the neighbors had known for years, decided to emigrate.",
        "There are few people to whom he confides in as deeply as his brother.",
        "She quickly realized that no one whom she had trusted was entirely honest.",
        "The professor, of whom several students disliked, wrote a controversial article."
      ],
      "correctAnswer": "The couple, whom the neighbors had known for years, decided to emigrate.",
      "explanation": "La primera opción es la correcta porque utiliza correctamente 'whom' como complemento del verbo 'known'.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q2",
      "type": "fill-blank",
      "question": "Their friendship, _______ had lasted over two decades, was an example of unwavering loyalty.",
      "correctAnswer": "which",
      "explanation": "Usamos 'which' para proporcionar información adicional sobre la amistad en sí misma, que es una cosa, no una persona.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q3",
      "type": "key-word-transformation",
      "question": "His father, to whom he looks up, was a renowned scientist. (ADMIRATION)\n\nHe holds his father __________",
      "sentence": "His father, to whom he looks up, was a renowned scientist.",
      "keyWord": "admiration",
      "startOfAnswer": "He holds his father",
      "correctAnswer": "for whom he has great admiration",
      "explanation": "Se utiliza 'for whom' para introducir el complemento del sustantivo 'admiration'.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q4",
      "type": "multiple-choice",
      "question": "Select the sentence that effectively uses a non-defining relative clause.",
      "options": [
        "The book that I borrowed from the library was fascinating.",
        "The woman who spoke at the conference is a well-known author.",
        "Anna, whose novel had won several awards, inspired many writers.",
        "They donated the collection which wasn’t being used anymore."
      ],
      "correctAnswer": "Anna, whose novel had won several awards, inspired many writers.",
      "explanation": "La tercera opción es un ejemplo de cláusula de relativo no restrictiva que añade información adicional sobre Anna.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q5",
      "type": "fill-blank",
      "question": "The organization, _______ she devoted her career, was focused on human rights.",
      "correctAnswer": "to which",
      "explanation": "Usamos 'to which' después de 'organization' para mostrar la dedicación hacia un objetivo.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q6",
      "type": "key-word-transformation",
      "question": "The committee, which includes several renowned experts, will make the final decision. (COMPOSED)\n\nThe committee, composed __________",
      "sentence": "The committee, which includes several renowned experts, will make the final decision.",
      "keyWord": "composed",
      "startOfAnswer": "The committee, composed",
      "correctAnswer": "of several renowned experts",
      "explanation": "Aquí sustituyes la cláusula relativa por una estructura participial al adjetivar 'composed'.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences contains an advanced relative clause correctly using a preposition?",
      "options": [
        "The mentor, whom everyone relies on, will conduct the seminar.",
        "The celebrity, with whom the journalist was traveling, avoided the press.",
        "The regulations, that were recently amended, will be enforced strictly.",
        "The project, in which Tom takes great pride, has been recognized nationally."
      ],
      "correctAnswer": "The celebrity, with whom the journalist was traveling, avoided the press.",
      "explanation": "La segunda opción es correcta porque usa 'with whom' correctamente al evitar terminar la oración con una preposición.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q8",
      "type": "fill-blank",
      "question": "The townsfolk, _______ opinions were fiercely divided, awaited the election results.",
      "correctAnswer": "whose",
      "explanation": "Usamos 'whose' para indicar posesión con respecto a 'opinions'.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q9",
      "type": "key-word-transformation",
      "question": "The artist, who I greatly admire, will unveil his latest collection tomorrow. (ADMIRED)\n\nThe artist I greatly __________",
      "sentence": "The artist, who I greatly admire, will unveil his latest collection tomorrow.",
      "keyWord": "admired",
      "startOfAnswer": "The artist I greatly",
      "correctAnswer": "admired",
      "explanation": "En este caso, 'whom' puede ser suprimido y constructos que le siguen pueden ser añadidos correctamente.",
      "points": 1
    },
    {
      "id": "c2-u2-b7-q10",
      "type": "multiple-choice",
      "question": "Identify the sentence with the correctly used defining relative clause.",
      "options": [
  "The city mayor, who is retiring next month, has been in office for 12 years.",
  "The presentation which he gave yesterday was well-received by everyone.",
  "The car, which had brakes that failed the test, will be recalled.",
  "My neighbor’s cat, which is very friendly, often visits us."
],
      "correctAnswer": "The city mayor, who is retiring next month, has been in office for 12 years.",
      "explanation": "La primera opción tiene una cláusula de relativo definida que proporciona información esencial sobre 'The city mayor'.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK8: Exercise = {
  "id": "c2-u2-b8",
  "type": "grammar",
  "title": "Block 8: Evolution of Modern Relationships - Part 8",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b8-q1",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly uses a non-defining relative clause?",
      "options": [
        "The man who you met is my uncle.",
        "The book that I borrowed was fascinating.",
        "My sister, who lives in France, is a chef.",
        "The doctor whom I visited was very efficient."
      ],
      "correctAnswer": "My sister, who lives in France, is a chef.",
      "explanation": "Una cláusula de relativo no definitoria se usa para agregar información extra sobre un sustantivo ya definido, y va entre comas.",
      "points": 1
    },
    {
      "id": "c2-u2-b8-q2",
      "type": "fill-blank",
      "question": "Due to the complexity of the relationship, it was essential to _________ relative clauses appropriately.",
      "correctAnswer": "use",
      "explanation": "En inglés avanzado, es importante usar adecuadamente cláusulas de relativo para clarificar relaciones complejas.",
      "points": 1
    },
    {
      "id": "c2-u2-b8-q3",
      "type": "key-word-transformation",
      "question": "The manager spoke to the intern. The intern’s project was impressive. (WHOSE)\n\nThe manager spoke to the intern whose __________",
      "correctAnswer": "project was impressive",
      "explanation": "Se utiliza 'whose' para indicar posesión entre el sujeto de la clausula principal y la información complementaria.",
      "points": 1,
      "sentence": "The manager spoke to the intern. The intern’s project was impressive.",
      "keyWord": "WHOSE",
      "startOfAnswer": "The manager spoke to the intern whose"
    },
    {
      "id": "c2-u2-b8-q4",
      "type": "multiple-choice",
      "question": "Select the sentence where a reduced relative clause is correctly used.",
      "options": [
        "The man who works there is friendly.",
        "The book written by my friend was great.",
        "The cat, that chased the mouse, was tired.",
        "The car that was stolen has been found."
      ],
      "correctAnswer": "The book written by my friend was great.",
      "explanation": "Las cláusulas de relativo reducidas eliminan el pronombre relativo y el verbo 'to be', a menudo adoptando una forma pasiva.",
      "points": 1
    },
    {
      "id": "c2-u2-b8-q5",
      "type": "fill-blank",
      "question": "In a marriage, _______ honesty is valued tends to thrive.",
      "correctAnswer": "honesty is valued",
      "explanation": "La cláusula 'which' se usa para referirse al concepto de honestidad en general, no a un sujeto específico.",
      "points": 1
    },
    {
      "id": "c2-u2-b8-q6",
      "type": "key-word-transformation",
      "question": "She has a brother. Her brother is a well-known author. (WHO)\n\nShe has a brother who __________",
      "correctAnswer": "is a well-known author",
      "explanation": "La palabra 'who' se utiliza para identificar personas en cláusulas de relativo.",
      "points": 1,
      "sentence": "She has a brother. Her brother is a well-known author.",
      "keyWord": "WHO",
      "startOfAnswer": "She has a brother who"
    },
    {
      "id": "c2-u2-b8-q7",
      "type": "multiple-choice",
      "question": "In which sentence is the relative pronoun correctly omitted?",
      "options": [
        "The movie that I watched was exciting.",
        "The cake she made was delicious.",
        "The man whom I spoke to was helpful.",
        "The friend who you met is visiting."
      ],
      "correctAnswer": "The cake she made was delicious.",
      "explanation": "El pronombre relativo puede omitirse cuando sigue a un objeto directo, como en este caso.",
      "points": 1
    },
    {
      "id": "c2-u2-b8-q8",
      "startOfAnswer": "In a situation where silence is maintained, which",
      "keyWord": "WHICH",
      "sentence": "In a situation where silence is maintained, an explanation is offered.",
      "type": "key-word-transformation",
      "question": "In a situation where silence is maintained, an explanation is offered. (WHICH)\n\nIn a situation where silence is maintained, which __________",
      "correctAnswer": "which",
      "explanation": "La cláusula 'which' refiere a la acción de mantenerse en silencio, introduciendo una explicación adicional.",
      "points": 1
    },
    {
      "id": "c2-u2-b8-q9",
      "type": "key-word-transformation",
      "question": "The city has many parks. The parks are well-maintained. (THAT)\n\nThe city has many parks that __________",
      "correctAnswer": "are well-maintained",
      "explanation": "El uso de 'that' en cláusulas de relativo define y especifica a qué parques se refiere.",
      "points": 1,
      "sentence": "The city has many parks. The parks are well-maintained.",
      "keyWord": "THAT",
      "startOfAnswer": "The city has many parks that"
    },
    {
      "id": "c2-u2-b8-q10",
      "type": "multiple-choice",
      "question": "Identify the sentence where the defining relative clause is correctly used.",
      "options": [
  "The woman who you met yesterday is my aunt.",
  "The bicycle, which was found, is mine.",
  "The students who studied hard passed their exams.",
  "The dog, that barked, eventually calmed down."
],
      "correctAnswer": "The students who studied hard passed their exams.",
      "explanation": "Una cláusula de relativo definitoria especifica un sujeto particular dentro de un grupo más amplio.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK9: Exercise = {
  "id": "c2-u2-b9",
  "type": "vocabulary",
  "title": "Block 9: Evolution of Modern Relationships - Part 9",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b9-q1",
      "type": "multiple-choice",
      "question": "Listen to the recording and identify the speaker who is being referred to with the clause: 'the man whose ideas revolutionized modern technology.'",
      "options": [
        "Steve Jobs",
        "Elon Musk",
        "Bill Gates",
        "Mark Zuckerberg"
      ],
      "correctAnswer": "Steve Jobs",
      "explanation": "La expresión 'whose ideas revolutionized modern technology' se refiere a Steve Jobs, conocido por sus contribuciones significativas a la tecnología moderna.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q2",
      "type": "fill-blank",
      "question": "Complete the sentence you hear: 'The _________ by whom all crucial decisions were made was highly respected.'",
      "correctAnswer": "committee",
      "explanation": "La respuesta correcta es 'committee', ya que se refiere al grupo por el cual se tomaron las decisiones cruciales.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q3",
      "type": "multiple-choice",
      "question": "Identify the person being described: 'She is the woman to whom many attribute the success of the campaign.'",
      "options": [
        "The finance manager",
        "The marketing director",
        "The project leader",
        "The CEO"
      ],
      "correctAnswer": "The marketing director",
      "explanation": "La descripción 'to whom many attribute the success of the campaign' sugiere que se refiere a la directora de marketing, responsable de campañas exitosas.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q4",
      "type": "key-word-transformation",
      "question": "Her brother, who she always admired, has won a Nobel Prize. (ADMIRATION)\n\nHer brother, for whom __________",
      "correctAnswer": "her admiration was boundless, has won a Nobel Prize",
      "explanation": "Se utiliza 'for whom her admiration was boundless' para indicar la admiración que ella siente por su hermano.",
      "points": 1,
      "sentence": "Her brother, who she always admired, has won a Nobel Prize.",
      "keyWord": "admiration",
      "startOfAnswer": "Her brother, for whom"
    },
    {
      "id": "c2-u2-b9-q5",
      "type": "key-word-transformation",
      "question": " ()\n\n __________",
      "correctAnswer": "to which",
      "explanation": "Se utiliza 'to which' para denotar la relación entre el libro y la referencia hecha.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q6",
      "type": "multiple-choice",
      "question": "Which phrase correctly replaces the relative pronoun in: 'The singer, who everyone adores, was on stage.'",
      "options": [
        "whom everyone adores",
        "whom adores everyone",
        "whose adoration everyone",
        "who everyone is adored by"
      ],
      "correctAnswer": "whom everyone adores",
      "explanation": "'Whom everyone adores' es la forma correcta de reemplazar el pronombre relativo, manteniéndose en el nivel gramatical esperado.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q7",
      "startOfAnswer": "She has a friend",
      "keyWord": "who",
      "sentence": "She has a friend who has the unique ability to solve complex puzzles with ease.",
      "type": "key-word-transformation",
      "question": "She has a friend who has the unique ability to solve complex puzzles with ease. (WHO)\n\nShe has a friend __________",
      "correctAnswer": "who has the unique ability to solve complex puzzles with ease",
      "explanation": "Se utiliza 'who' ya que se refiere a una persona, el amigo que tiene la habilidad.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q8",
      "type": "key-word-transformation",
      "question": "The professor, to whom we owe the discovery, is retiring next year. (CREDIT)\n\nThe professor, to whom we give credit for __________",
      "correctAnswer": "the discovery, is retiring next year",
      "explanation": "Se incorpora 'to whom we give credit for' para enfatizar el reconocimiento hacia el profesor.",
      "points": 1,
      "sentence": "The professor, to whom we owe the discovery, is retiring next year.",
      "keyWord": "credit",
      "startOfAnswer": "The professor, to whom we give credit for"
    },
    {
      "id": "c2-u2-b9-q9",
      "type": "multiple-choice",
      "question": "Which relative clause fits best? 'The person _____ strategy secured an unprecedented victory is being promoted.'",
      "options": [
        "who's",
        "whose",
        "whom",
        "which"
      ],
      "correctAnswer": "whose",
      "explanation": "'Whose' se ajusta mejor aquí para indicar posesión, en este caso, la estrategia de esa persona.",
      "points": 1
    },
    {
      "id": "c2-u2-b9-q10",
      "type": "fill-blank",
      "question": "The town hall, ________ they held the meeting, was built in the 19th century.",
      "correctAnswer": "where",
      "explanation": "El uso de 'where' es adecuado aquí para hablar del lugar en el que se realizó la reunión.",
      "points": 1
    }
  ]
};

export const C2_U2_BLOCK10: Exercise = {
  "id": "c2-u2-b10",
  "type": "grammar",
  "title": "Block 10: Evolution of Modern Relationships - Part 10",
  "explanation": "Advanced practice for Evolution of Modern Relationships",
  "questions": [
    {
      "id": "c2-u2-b10-q1",
      "type": "multiple-choice",
      "question": "Choose the correct sentence that correctly uses an advanced relative clause.",
      "options": [
  "She rarely talks to her sister, with whom she shares a turbulent history.",
  "She rarely talks to her sister, with whom she shares a turbulent history.",
  "Her sister, with whom she shares turbulent tensions, rarely talks to her.",
  "She rarely talks to her sister, who shares a turbulent past."
],
      "correctAnswer": "She rarely talks to her sister, with whom she shares a turbulent history.",
      "explanation": "La opción correcta usa una cláusula relativa avanzada 'with whom' que es adecuada para el nivel C2.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q2",
      "type": "fill-blank",
      "question": "He is someone ____ ideas have transformed the field of relationship counseling.",
      "correctAnswer": "whose",
      "explanation": "La palabra 'whose' se usa para referirse a una persona a la que pertenecen las ideas.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q3",
      "type": "key-word-transformation",
      "question": "My uncle, who is an exceptional chef, cooked for us last night. (BEING)\n\nMy uncle, being an exceptional chef, __________",
      "sentence": "My uncle, who is an exceptional chef, cooked for us last night.",
      "keyWord": "being",
      "startOfAnswer": "My uncle, being an exceptional chef,",
      "correctAnswer": "cooked for us last night",
      "explanation": "Transforma la oración usando una cláusula reducida de participio.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q4",
      "type": "multiple-choice",
      "question": "Select the sentence that contains a correct use of a non-defining relative clause.",
      "options": [
  "The novel is written by my friend, which has inspired generations.",
  "The teacher, who won the award, still feels humble.",
  "John, who works with us, is an excellent team player.",
  "The woman to whom it may concern was absent."
],
      "correctAnswer": "The teacher, who won the award, still feels humble.",
      "explanation": "La frase 'who won the award' es una cláusula relativa no definitoria que proporciona información adicional sin alterar el significado principal.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q5",
      "type": "fill-blank",
      "question": "The city ____ I spent most of my childhood is now unrecognizable.",
      "correctAnswer": "where",
      "explanation": "La relativa 'where' se refiere a un lugar y es apropiada para este contexto.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q6",
      "type": "key-word-transformation",
      "question": "The book was written by an author whose understanding of human relationships is unparalleled. (WHOSE)\n\nThe author, whose __________",
      "sentence": "The book was written by an author whose understanding of human relationships is unparalleled.",
      "keyWord": "whose",
      "startOfAnswer": "The author, whose",
      "correctAnswer": "is unparalleled, and the author wrote the book",
      "explanation": "Transforma la oración para enfocar al autor usando 'whose'.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q7",
      "type": "multiple-choice",
      "question": "Identify the sentence that uses a defining relative clause effectively.",
      "options": [
        "The woman, who helped me, is very kind.",
        "The manager who oversees the project is on leave.",
        "The city, which is known for its canals, is beautiful.",
        "The report that was delivered yesterday, it was concise."
      ],
      "correctAnswer": "The manager who oversees the project is on leave.",
      "explanation": "La cláusula relativa 'who oversees the project' es definitoria, especificando de qué gerente se habla.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q8",
      "type": "fill-blank",
      "question": "This is the person ____ advice saved our relationship.",
      "correctAnswer": "whose",
      "explanation": "Se usa 'whose' para mostrar posesión del consejo que proporcionó esta persona.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q9",
      "type": "key-word-transformation",
      "question": "There are several issues which need to be addressed in our relationship. (THAT)\n\nThere are several issues that __________",
      "sentence": "There are several issues which need to be addressed in our relationship.",
      "keyWord": "that",
      "startOfAnswer": "There are several issues that",
      "correctAnswer": "need to be addressed in our relationship",
      "explanation": "Usamos 'that' para formar una cláusula relativa definitoria de manera eficaz.",
      "points": 1
    },
    {
      "id": "c2-u2-b10-q10",
      "type": "multiple-choice",
      "question": "Which of the following sentences uses an elliptical relative clause correctly?",
      "options": [
  "The dog loved by everyone in the building was lost.",
  "who was loved by everyone in the building",
  "was lost.",
  "The teacher gave a book to the students",
  "whom she shared a story with.",
  "Jack",
  "to whom we owe so much",
  "is leaving.",
  "The person to whom I gave my phone number emailed me."
],
      "correctAnswer": "The dog loved by everyone in the building was lost.",
      "explanation": "La frase utiliza una cláusula relativa elíptica, omitiendo 'that is' o 'who is'.",
      "points": 1
    }
  ]
};

export const C2_UNIT_2 = createC2Unit(
  'c2-u2',
  'Evolution of Modern Relationships',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U2_BLOCK1, C2_U2_BLOCK2, C2_U2_BLOCK3, C2_U2_BLOCK4, C2_U2_BLOCK5, C2_U2_BLOCK6, C2_U2_BLOCK7, C2_U2_BLOCK8, C2_U2_BLOCK9, C2_U2_BLOCK10
  ]
);
