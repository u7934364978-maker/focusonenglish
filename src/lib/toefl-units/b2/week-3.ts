import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 3;
const LEVEL = 'b2';

// SHARDS 1-2: History & Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Civilization & Society Vocabulary',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is a "Civilization"?',
      options: [
        'A complex human society with social hierarchy and cultural development',
        'A group of people living in small, isolated tribes only',
        'The study of old buildings'
      ],
      correctAnswer: 'A complex human society with social hierarchy and cultural development',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "Hierarchy" refers to:',
      options: [
        'A system in which members of a society are ranked according to relative status or authority',
        'A type of ancient religious ceremony',
        'The architectural style of a palace'
      ],
      correctAnswer: 'A system in which members of a society are ranked according to relative status or authority',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What does "Sedentary" mean in a historical context?',
      options: [
        'Living in one place for a long time rather than moving about',
        'Constantly traveling to find food',
        'Living in underwater caves'
      ],
      correctAnswer: 'Living in one place for a long time rather than moving about',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'A "Nomadic" lifestyle is one where:',
      options: [
        'People move from place to place rather than living in one settlement',
        'Everyone lives in a large city',
        'People only move once every hundred years'
      ],
      correctAnswer: 'People move from place to place rather than living in one settlement',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is "Agriculture"?',
      options: [
        'The practice of farming, including cultivation of the soil and rearing of animals',
        'Hunting wild animals for food',
        'The construction of large stone monuments'
      ],
      correctAnswer: 'The practice of farming, including cultivation of the soil and rearing of animals',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "Urbanization" refers to:',
      options: [
        'The process of making an area more urban (the growth of cities)',
        'The destruction of ancient cities',
        'The study of forest management'
      ],
      correctAnswer: 'The process of making an area more urban (the growth of cities)',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is "Trade"?',
      options: [
        'The action of buying and selling goods and services',
        'A type of military battle',
        'The process of making tools out of iron'
      ],
      correctAnswer: 'The action of buying and selling goods and services',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'A "Monarchy" is a form of government where:',
      options: [
        'A single person (a monarch) is the head of state',
        'All citizens vote on every decision',
        'The military has complete control'
      ],
      correctAnswer: 'A single person (a monarch) is the head of state',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What does "Dynasty" mean?',
      options: [
        'A line of hereditary rulers of a country',
        'A specific type of ancient coin',
        'The name of an ancient library'
      ],
      correctAnswer: 'A line of hereditary rulers of a country',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "Bureaucracy" refers to:',
      options: [
        'A system of government in which most decisions are made by state officials',
        'A government led by a single religious leader',
        'The absence of any formal government'
      ],
      correctAnswer: 'A system of government in which most decisions are made by state officials',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Archaeology & Research Vocabulary',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is an "Artifact"?',
      options: [
        'An object made by a human being, typically one of cultural or historical interest',
        'A natural rock formation',
        'A type of extinct plant'
      ],
      correctAnswer: 'An object made by a human being, typically one of cultural or historical interest',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The term "Excavation" means:',
      options: [
        'The action of excavating or digging something up',
        'The process of building a new skyscraper',
        'The study of ocean currents'
      ],
      correctAnswer: 'The action of excavating or digging something up',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is a "Chronology"?',
      options: [
        'The arrangement of events or dates in the order of their occurrence',
        'A map of a specific region',
        'A list of famous historical figures'
      ],
      correctAnswer: 'The arrangement of events or dates in the order of their occurrence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "Stratigraphy" in archaeology refers to:',
      options: [
        'The analysis of the order and position of layers of archaeological remains',
        'The study of ancient languages',
        'The process of restoring old paintings'
      ],
      correctAnswer: 'The analysis of the order and position of layers of archaeological remains',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "Decipherment"?',
      options: [
        'The discovery of the meaning of a text written in an ancient script',
        'The act of burning old documents',
        'The translation of a modern novel'
      ],
      correctAnswer: 'The discovery of the meaning of a text written in an ancient script',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'A "Primary Source" is:',
      options: [
        'An artifact, document, or other source of information that was created at the time under study',
        'A textbook written 500 years after an event',
        'A Wikipedia article'
      ],
      correctAnswer: 'An artifact, document, or other source of information that was created at the time under study',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What does "In situ" mean in archaeology?',
      options: [
        'In its original place',
        'In a museum display case',
        'Lost forever'
      ],
      correctAnswer: 'In its original place',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'A "Ruins" refers to:',
      options: [
        'The remains of a building, city, etc., that has been destroyed or that is in disrepair',
        'A perfectly preserved modern city',
        'A type of garden'
      ],
      correctAnswer: 'The remains of a building, city, etc., that has been destroyed or that is in disrepair',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is "Carbon Dating"?',
      options: [
        'A method for determining the age of an object containing organic material',
        'A way to find out what someone ate for dinner',
        'The study of diamonds'
      ],
      correctAnswer: 'A method for determining the age of an object containing organic material',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The term "Preservation" refers to:',
      options: [
        'The act of maintaining something in its original state',
        'The process of destroying something quickly',
        'The study of weather patterns'
      ],
      correctAnswer: 'The act of maintaining something in its original state',
      points: 1
    }
  ]
};

// SHARDS 3-4: Reading Comprehension - Inference (History)
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'reading',
  title: 'Inference: The Fall of the Maya',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's3', 1),
      type: 'multiple-choice',
      question: 'Paragraph 1: By the 9th century, many of the great Maya cities were abandoned. While the exact cause remains a subject of debate, evidence suggests a combination of environmental stress and social unrest. What can be inferred about the end of the Maya civilization?',
      options: [
        'It was likely a complex process involving multiple factors.',
        'It was caused solely by a massive earthquake.',
        'The Maya people were completely wiped out in a single year.'
      ],
      correctAnswer: 'It was likely a complex process involving multiple factors.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 2),
      type: 'multiple-choice',
      question: 'Paragraph 2: Agricultural yields decreased significantly during this period, possibly due to prolonged droughts. This led to a lack of resources for the growing population. What does the text suggest about the Maya economy?',
      options: [
        'It was heavily dependent on agriculture.',
        'It was mostly based on industrial manufacturing.',
        'It was unaffected by environmental changes.'
      ],
      correctAnswer: 'It was heavily dependent on agriculture.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 3),
      type: 'multiple-choice',
      question: 'Based on Paragraph 1, why do historians still debate the fall of the Maya?',
      options: [
        'Because there is no single, definitive piece of evidence for one cause.',
        'Because they don\'t believe environmental stress is possible.',
        'Because the Maya left written records explaining exactly what happened.'
      ],
      correctAnswer: 'Because there is no single, definitive piece of evidence for one cause.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 4),
      type: 'multiple-choice',
      question: 'What can be inferred about the relationship between the Maya and their environment?',
      options: [
        'The environment played a crucial role in their societal stability.',
        'The Maya had no impact on their environment.',
        'They were able to control the weather perfectly.'
      ],
      correctAnswer: 'The environment played a crucial role in their societal stability.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 5),
      type: 'multiple-choice',
      question: 'If "social unrest" is mentioned, what can we infer about the political state of the Maya?',
      options: [
        'There were internal conflicts and dissatisfaction with leadership.',
        'Everyone was perfectly happy with the government.',
        'There was no government at all.'
      ],
      correctAnswer: 'There were internal conflicts and dissatisfaction with leadership.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 6),
      type: 'multiple-choice',
      question: 'An "Inference" question asks you to:',
      options: [
        'Draw a logical conclusion based on what is stated in the text.',
        'Find a direct quote that answers the question.',
        'Give your own opinion regardless of the text.'
      ],
      correctAnswer: 'Draw a logical conclusion based on what is stated in the text.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 7),
      type: 'multiple-choice',
      question: 'True or False: An inference must be supported by evidence in the passage.',
      options: [
        'True',
        'False',
        'Only in history passages'
      ],
      correctAnswer: 'True',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 8),
      type: 'multiple-choice',
      question: 'In an Inference question, look for words like:',
      options: [
        'suggests, implies, or inferred',
        'states, says, or mentions',
        'always, never, or only'
      ],
      correctAnswer: 'suggests, implies, or inferred',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 9),
      type: 'multiple-choice',
      question: 'If the text says "The discovery of iron tools changed everything," what can we infer about the previous tools?',
      options: [
        'They were likely less efficient or durable than iron.',
        'They were also made of iron.',
        'They didn\'t exist.'
      ],
      correctAnswer: 'They were likely less efficient or durable than iron.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's3', 10),
      type: 'multiple-choice',
      question: 'If a passage states that a city was built on a high hill with thick walls, what can we infer?',
      options: [
        'Defense was a priority for the builders.',
        'The builders liked the view.',
        'There were no enemies in the region.'
      ],
      correctAnswer: 'Defense was a priority for the builders.',
      points: 1
    }
  ]
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'reading',
  title: 'Inference: Ancient Trade Routes',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's4', 1),
      type: 'multiple-choice',
      question: 'Paragraph 1: The Silk Road was not a single path but a network of trade routes. Along these routes, not only goods but also ideas, religions, and technologies were exchanged. What can be inferred about the Silk Road\'s impact?',
      options: [
        'It facilitated cultural diffusion between different civilizations.',
        'It was only useful for buying silk.',
        'It made people more isolated from each other.'
      ],
      correctAnswer: 'It facilitated cultural diffusion between different civilizations.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 2),
      type: 'multiple-choice',
      question: 'Paragraph 2: Traveling the entire length of the Silk Road was rare. Most traders only covered a segment of the route, selling their goods to middlemen at various trading hubs. What does this suggest about the journey?',
      options: [
        'It was long, difficult, and potentially dangerous.',
        'It was a quick and easy trip.',
        'Traders preferred to stay close to home.'
      ],
      correctAnswer: 'It was long, difficult, and potentially dangerous.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 3),
      type: 'multiple-choice',
      question: 'What can be inferred about the "trading hubs" mentioned in the text?',
      options: [
        'They were likely diverse and economically active places.',
        'They were small, empty villages.',
        'They were only located at the beginning and end of the road.'
      ],
      correctAnswer: 'They were likely diverse and economically active places.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 4),
      type: 'multiple-choice',
      question: 'The text implies that the "middlemen" were:',
      options: [
        'Necessary for the goods to travel long distances.',
        'A nuisance to the actual traders.',
        'Only present in one specific country.'
      ],
      correctAnswer: 'Necessary for the goods to travel long distances.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 5),
      type: 'multiple-choice',
      question: 'What can we infer about the religions mentioned in Paragraph 1?',
      options: [
        'They spread to new areas through interaction between people.',
        'They were forced on people by traders.',
        'They were all the same religion.'
      ],
      correctAnswer: 'They spread to new areas through interaction between people.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 6),
      type: 'multiple-choice',
      question: 'In a "Rhetorical Purpose" question, avoid options that:',
      options: [
        'Only state the literal meaning of the information.',
        'Explain why the information is included.',
        'Are related to the author\'s argument.'
      ],
      correctAnswer: 'Only state the literal meaning of the information.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 7),
      type: 'multiple-choice',
      question: 'If the author mentions a specific king\'s death, what might be the rhetorical purpose?',
      options: [
        'To mark a turning point or transition in history.',
        'To show that the author knows a lot of dates.',
        'To tell a sad story.'
      ],
      correctAnswer: 'To mark a turning point or transition in history.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 8),
      type: 'multiple-choice',
      question: 'The "Rhetorical Purpose" question often starts with:',
      options: [
        'Why does the author mention...?',
        'What is the main idea of...?',
        'When did... happen?'
      ],
      correctAnswer: 'Why does the author mention...?',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 9),
      type: 'multiple-choice',
      question: 'What is a "Middleman" in a trade context?',
      options: [
        'A person who buys from producers and sells to retailers.',
        'A person who is half-human and half-animal.',
        'A person who stands in the middle of a crowd.'
      ],
      correctAnswer: 'A person who buys from producers and sells to retailers.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's4', 10),
      type: 'multiple-choice',
      question: 'The Silk Road "network" implies:',
      options: [
        'Complexity and interconnectedness.',
        'A straight line.',
        'A single owner.'
      ],
      correctAnswer: 'Complexity and interconnectedness.',
      points: 1
    }
  ]
};

// SHARDS 5-6: Reading Comprehension - Rhetorical Purpose (History)
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Rhetorical Purpose: The Library of Alexandria',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's5', 1),
      type: 'multiple-choice',
      question: 'Paragraph 1: The Great Library of Alexandria was more than just a collection of scrolls; it was a symbol of the intellectual power of the Hellenistic world. Scholars from across the Mediterranean traveled there to study. Why does the author mention "scholars from across the Mediterranean"?',
      options: [
        'To demonstrate the library\'s international reputation and significance.',
        'To list every country that had a university at the time.',
        'To show that travel was easy in the ancient world.'
      ],
      correctAnswer: 'To demonstrate the library\'s international reputation and significance.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 2),
      type: 'multiple-choice',
      question: 'Paragraph 2: While the library\'s destruction is often blamed on a single fire, it likely suffered a gradual decline due to lack of funding and political instability. Why does the author use the phrase "gradual decline"?',
      options: [
        'To suggest that the library\'s end was a long-term process rather than a sudden event.',
        'To explain how fires work in old buildings.',
        'To argue that the library was never actually destroyed.'
      ],
      correctAnswer: 'To suggest that the library\'s end was a long-term process rather than a sudden event.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 3),
      type: 'multiple-choice',
      question: 'In Paragraph 1, why does the author call the library a "symbol of intellectual power"?',
      options: [
        'To emphasize that it represented the culture\'s commitment to learning.',
        'To describe the physical size of the building.',
        'To contrast it with a smaller library in Rome.'
      ],
      correctAnswer: 'To emphasize that it represented the culture\'s commitment to learning.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 4),
      type: 'multiple-choice',
      question: 'What is the purpose of mentioning "lack of funding" in Paragraph 2?',
      options: [
        'To provide a practical reason for the library\'s deterioration.',
        'To criticize the ancient government\'s economic policies.',
        'To show that scrolls were very expensive.'
      ],
      correctAnswer: 'To provide a practical reason for the library\'s deterioration.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 5),
      type: 'multiple-choice',
      question: 'The author discusses the Mediterranean context to:',
      options: [
        'Provide a geographical framework for the library\'s influence.',
        'Describe the types of fish found in the sea.',
        'Explain why Alexandria was a good port city.'
      ],
      correctAnswer: 'Provide a geographical framework for the library\'s influence.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 6),
      type: 'multiple-choice',
      question: 'In a "Rhetorical Purpose" question, "purpose" means:',
      options: [
        'The author\'s goal in using a specific piece of information.',
        'The literal meaning of the words.',
        'The date the text was written.'
      ],
      correctAnswer: 'The author\'s goal in using a specific piece of information.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 7),
      type: 'multiple-choice',
      question: 'Why might an author use a "comparison"?',
      options: [
        'To clarify a concept by showing its similarities or differences to something familiar.',
        'To make the text longer.',
        'To show off their knowledge.'
      ],
      correctAnswer: 'To clarify a concept by showing its similarities or differences to something familiar.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 8),
      type: 'multiple-choice',
      question: 'If the author gives a "counter-example", the purpose is usually to:',
      options: [
        'Challenge or limit a general claim made earlier.',
        'Agree with everything that was said.',
        'Introduce a new topic.'
      ],
      correctAnswer: 'Challenge or limit a general claim made earlier.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 9),
      type: 'multiple-choice',
      question: 'The phrase "more than just" often indicates that the author is going to:',
      options: [
        'Highlight a deeper significance or additional role.',
        'List more items of the same type.',
        'End the paragraph.'
      ],
      correctAnswer: 'Highlight a deeper significance or additional role.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's5', 10),
      type: 'multiple-choice',
      question: 'The rhetorical purpose of an "introduction" is to:',
      options: [
        'Set the stage and state the main thesis.',
        'Give all the details immediately.',
        'Provide a bibliography.'
      ],
      correctAnswer: 'Set the stage and state the main thesis.',
      points: 1
    }
  ]
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Rhetorical Purpose: The Printing Press',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's6', 1),
      type: 'multiple-choice',
      question: 'Paragraph 1: Before Gutenberg, books were hand-copied by monks, a process that could take months or years. The printing press revolutionized this by allowing for mass production. Why does the author mention "hand-copied by monks"?',
      options: [
        'To emphasize the slow and labor-intensive nature of book production before the press.',
        'To show that the author admires the hard work of monks.',
        'To explain the history of religious texts.'
      ],
      correctAnswer: 'To emphasize the slow and labor-intensive nature of book production before the press.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 2),
      type: 'multiple-choice',
      question: 'Paragraph 2: This new technology didn\'t just make books cheaper; it democratized knowledge, making it accessible to the common person. Why does the author use the word "democratized"?',
      options: [
        'To explain that knowledge was no longer restricted to a small elite.',
        'To show that the printing press led to modern elections.',
        'To describe the mechanical process of printing.'
      ],
      correctAnswer: 'To explain that knowledge was no longer restricted to a small elite.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 3),
      type: 'multiple-choice',
      question: 'In Paragraph 1, what is the rhetorical purpose of the phrase "revolutionized this"?',
      options: [
        'To highlight the drastic change brought about by the new technology.',
        'To suggest that there was a violent war.',
        'To say that the change was very slow.'
      ],
      correctAnswer: 'To highlight the drastic change brought about by the new technology.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 4),
      type: 'multiple-choice',
      question: 'The author mentions "books were cheaper" to:',
      options: [
        'Provide a direct economic consequence of mass production.',
        'Complain about the price of modern books.',
        'Show that monks were very well-paid.'
      ],
      correctAnswer: 'Provide a direct economic consequence of mass production.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 5),
      type: 'multiple-choice',
      question: 'The purpose of Paragraph 2 is mostly to:',
      options: [
        'Discuss the social and cultural impact of the printing press.',
        'Explain how to build a printing press.',
        'List the names of famous printers.'
      ],
      correctAnswer: 'Discuss the social and cultural impact of the printing press.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 6),
      type: 'multiple-choice',
      question: 'Which word is a synonym for "Democratized" in this context?',
      options: [
        'Popularized',
        'Restricted',
        'Complicated'
      ],
      correctAnswer: 'Popularized',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 7),
      type: 'multiple-choice',
      question: 'If an author uses an "analogy", the purpose is to:',
      options: [
        'Make a complex idea easier to understand by comparing it to something simpler.',
        'Prove that two things are exactly the same.',
        'Confuse the reader.'
      ],
      correctAnswer: 'Make a complex idea easier to understand by comparing it to something simpler.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 8),
      type: 'multiple-choice',
      question: 'The author mentions "mass production" to:',
      options: [
        'Explain the key capability that led to the social changes described.',
        'Describe the pollution from early factories.',
        'Show that quality was not important.'
      ],
      correctAnswer: 'Explain the key capability that led to the social changes described.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 9),
      type: 'multiple-choice',
      question: 'The rhetorical purpose of a "conclusion" is to:',
      options: [
        'Summarize the main points and provide final thoughts.',
        'Introduce a new argument.',
        'List every fact mentioned again.'
      ],
      correctAnswer: 'Summarize the main points and provide final thoughts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's6', 10),
      type: 'multiple-choice',
      question: 'Why might an author include a "quote" from a historical figure?',
      options: [
        'To add authority or a first-hand perspective to the argument.',
        'To make the text look more impressive.',
        'Because they couldn\'t think of their own words.'
      ],
      correctAnswer: 'To add authority or a first-hand perspective to the argument.',
      points: 1
    }
  ]
};

// SHARDS 7-8: Grammar & Sentence Structure (History Context)
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'vocabulary',
  title: 'Grammar: Past Tenses & Sequences',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's7', 1),
      type: 'multiple-choice',
      question: 'Choose the correct form: "By the time the Europeans arrived, the empire ____ for centuries."',
      options: [
        'had flourished',
        'has flourished',
        'flourished'
      ],
      correctAnswer: 'had flourished',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 2),
      type: 'multiple-choice',
      question: 'Which tense is used for a completed action in the past?',
      options: [
        'Simple Past',
        'Present Perfect',
        'Past Continuous'
      ],
      correctAnswer: 'Simple Past',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 3),
      type: 'multiple-choice',
      question: 'Complete the sentence: "While the city ____, a large library was being built."',
      options: [
        'was growing',
        'grows',
        'had grown'
      ],
      correctAnswer: 'was growing',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 4),
      type: 'multiple-choice',
      question: 'Which word indicates a sequence of events?',
      options: [
        'Subsequently',
        'Simultaneously',
        'Previously'
      ],
      correctAnswer: 'Subsequently',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 5),
      type: 'multiple-choice',
      question: 'Choose the best option: "The dynasty ____ power after a long period of internal conflict."',
      options: [
        'seized',
        'has seized',
        'is seizing'
      ],
      correctAnswer: 'seized',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 6),
      type: 'multiple-choice',
      question: 'What does "formerly" mean?',
      options: [
        'In the past',
        'In the future',
        'Right now'
      ],
      correctAnswer: 'In the past',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 7),
      type: 'multiple-choice',
      question: 'Identify the sentence in the Past Perfect:',
      options: [
        'The Romans had already expanded their territory before the war began.',
        'The Romans expanded their territory.',
        'The Romans were expanding their territory.'
      ],
      correctAnswer: 'The Romans had already expanded their territory before the war began.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 8),
      type: 'multiple-choice',
      question: 'Choose the correct connector: "____ the king died, his son took the throne."',
      options: [
        'After',
        'Before',
        'While'
      ],
      correctAnswer: 'After',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 9),
      type: 'multiple-choice',
      question: 'What does "hitherto" mean?',
      options: [
        'Until this time',
        'After that time',
        'Instead of'
      ],
      correctAnswer: 'Until this time',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's7', 10),
      type: 'multiple-choice',
      question: 'Which tense is used to describe two actions happening at the same time in the past?',
      options: [
        'Past Continuous',
        'Simple Past',
        'Past Perfect'
      ],
      correctAnswer: 'Past Continuous',
      points: 1
    }
  ]
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'vocabulary',
  title: 'Grammar: Modals of Deduction (Past)',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's8', 1),
      type: 'multiple-choice',
      question: 'Choose the correct deduction: "The city was destroyed; it ____ have been a powerful earthquake."',
      options: [
        'must',
        'might',
        'can\'t'
      ],
      correctAnswer: 'must',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 2),
      type: 'multiple-choice',
      question: 'Which phrase shows uncertainty about the past?',
      options: [
        'may have been',
        'was definitely',
        'is known to be'
      ],
      correctAnswer: 'may have been',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 3),
      type: 'multiple-choice',
      question: 'Complete the sentence: "They ____ have abandoned the city because of war; there is no evidence of battle."',
      options: [
        'can\'t',
        'must',
        'might'
      ],
      correctAnswer: 'can\'t',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 4),
      type: 'multiple-choice',
      question: 'What does "could have" imply in a deduction?',
      options: [
        'A past possibility',
        'A past certainty',
        'A future event'
      ],
      correctAnswer: 'A past possibility',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 5),
      type: 'multiple-choice',
      question: 'Choose the best option: "The library ____ have contained thousands of scrolls, but many were lost."',
      options: [
        'could',
        'can',
        'must'
      ],
      correctAnswer: 'could',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 6),
      type: 'multiple-choice',
      question: 'What is the function of "it is speculated that"?',
      options: [
        'To introduce a theory or guess when facts are not certain',
        'To state a proven fact',
        'To tell a joke'
      ],
      correctAnswer: 'To introduce a theory or guess when facts are not certain',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 7),
      type: 'multiple-choice',
      question: 'Identify the sentence showing a strong deduction:',
      options: [
        'The lack of water must have caused the famine.',
        'The lack of water might have caused the famine.',
        'The lack of water caused the famine.'
      ],
      correctAnswer: 'The lack of water must have caused the famine.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 8),
      type: 'multiple-choice',
      question: 'Choose the correct form: "The artifact ____ have belonged to a wealthy merchant."',
      options: [
        'might',
        'must be',
        'can'
      ],
      correctAnswer: 'might',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 9),
      type: 'multiple-choice',
      question: 'What does "evidence suggests" mean?',
      options: [
        'The proof points to a likely conclusion',
        'It is a 100% proven fact',
        'There is no evidence'
      ],
      correctAnswer: 'The proof points to a likely conclusion',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's8', 10),
      type: 'multiple-choice',
      question: 'Which modal is used to show something was impossible in the past?',
      options: [
        'couldn\'t have',
        'shouldn\'t have',
        'might not have'
      ],
      correctAnswer: 'couldn\'t have',
      points: 1
    }
  ]
};

// SHARDS 9-10: Mixed Practice (Inference & Rhetorical Purpose)
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'reading',
  title: 'Practice: The Renaissance',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's9', 1),
      type: 'multiple-choice',
      question: 'Inference: The Renaissance began in Italy, partly due to the wealth accumulated by merchants through Mediterranean trade. What can be inferred about the start of the Renaissance?',
      options: [
        'Economic prosperity was a key factor in cultural development.',
        'Italy was the only country with artists.',
        'Trade was the only reason the Renaissance happened.'
      ],
      correctAnswer: 'Economic prosperity was a key factor in cultural development.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 2),
      type: 'multiple-choice',
      question: 'Rhetorical Purpose: The author mentions "wealth accumulated by merchants" to:',
      options: [
        'Explain the financial basis that allowed for the patronage of the arts.',
        'Show that merchants were more important than artists.',
        'Describe the types of goods traded in Italy.'
      ],
      correctAnswer: 'Explain the financial basis that allowed for the patronage of the arts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 3),
      type: 'multiple-choice',
      question: 'What can be inferred about the term "Patronage"?',
      options: [
        'Financial support given by wealthy individuals to artists.',
        'A type of military rank.',
        'The act of painting a portrait.'
      ],
      correctAnswer: 'Financial support given by wealthy individuals to artists.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 4),
      type: 'multiple-choice',
      question: 'If the text says the Renaissance was a "rebirth" of classical learning, what can we infer about the previous period?',
      options: [
        'Classical learning had been largely neglected or forgotten.',
        'Classical learning was very popular.',
        'There was no learning at all.'
      ],
      correctAnswer: 'Classical learning had been largely neglected or forgotten.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 5),
      type: 'multiple-choice',
      question: 'Why does the author use the word "rebirth"?',
      options: [
        'To emphasize the revival and new energy in art and science.',
        'To say that people were born again.',
        'To describe the biological process of birth.'
      ],
      correctAnswer: 'To emphasize the revival and new energy in art and science.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 6),
      type: 'multiple-choice',
      question: 'Inference: Humanism, a core philosophy of the Renaissance, focused on human potential and achievements rather than just religious themes. What can be inferred about earlier philosophies?',
      options: [
        'They likely placed a stronger emphasis on religious themes.',
        'They also focused only on humans.',
        'They didn\'t exist.'
      ],
      correctAnswer: 'They likely placed a stronger emphasis on religious themes.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 7),
      type: 'multiple-choice',
      question: 'Rhetorical Purpose: The author discusses "Humanism" to:',
      options: [
        'Introduce the shift in thinking that characterized the era.',
        'List every famous humanist philosopher.',
        'Argue that religion is not important.'
      ],
      correctAnswer: 'Introduce the shift in thinking that characterized the era.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 8),
      type: 'multiple-choice',
      question: 'What does the phrase "core philosophy" suggest about Humanism?',
      options: [
        'It was central to the identity of the Renaissance.',
        'It was a minor, unimportant idea.',
        'It was only understood by a few people.'
      ],
      correctAnswer: 'It was central to the identity of the Renaissance.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 9),
      type: 'multiple-choice',
      question: 'The word "accumulated" is closest in meaning to:',
      options: [
        'collected',
        'spent',
        'lost'
      ],
      correctAnswer: 'collected',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's9', 10),
      type: 'multiple-choice',
      question: 'The author uses the Mediterranean as a context to:',
      options: [
        'Explain the source of the wealth mentioned earlier.',
        'Describe the climate of Italy.',
        'List the countries involved in the war.'
      ],
      correctAnswer: 'Explain the source of the wealth mentioned earlier.',
      points: 1
    }
  ]
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'reading',
  title: 'Practice: Ancient Egypt',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's10', 1),
      type: 'multiple-choice',
      question: 'Inference: The pyramids were not built by slaves, as was once thought, but by paid laborers who took great pride in their work. What can be inferred about the pyramid builders?',
      options: [
        'They were likely skilled workers and respected members of society.',
        'They were forced to work against their will.',
        'They hated their jobs.'
      ],
      correctAnswer: 'They were likely skilled workers and respected members of society.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 2),
      type: 'multiple-choice',
      question: 'Rhetorical Purpose: Why does the author mention that the builders were "not built by slaves"?',
      options: [
        'To correct a common historical misconception.',
        'To explain how to build a pyramid.',
        'To show that the author is an expert on slavery.'
      ],
      correctAnswer: 'To correct a common historical misconception.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 3),
      type: 'multiple-choice',
      question: 'Inference: The Nile River provided fertile soil for farming and served as a major transportation route. What can be inferred about the Nile\'s importance?',
      options: [
        'It was essential for the survival and growth of Ancient Egypt.',
        'It was only used for swimming.',
        'It caused many problems for the Egyptian people.'
      ],
      correctAnswer: 'It was essential for the survival and growth of Ancient Egypt.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 4),
      type: 'multiple-choice',
      question: 'Rhetorical Purpose: The author mentions "fertile soil" and "transportation route" to:',
      options: [
        'List the specific benefits provided by the river.',
        'Explain how the pyramids were moved.',
        'Show that the river was very long.'
      ],
      correctAnswer: 'List the specific benefits provided by the river.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 5),
      type: 'multiple-choice',
      question: 'Based on the text, what can be inferred about the Egyptian view of the afterlife?',
      options: [
        'It was a central concern, as shown by the construction of elaborate tombs.',
        'They didn\'t believe in an afterlife.',
        'They only cared about life on Earth.'
      ],
      correctAnswer: 'It was a central concern, as shown by the construction of elaborate tombs.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 6),
      type: 'multiple-choice',
      question: 'Why does the author use the word "elaborate" to describe the tombs?',
      options: [
        'To emphasize the effort and resources dedicated to them.',
        'To say that they were very small.',
        'To describe the smell inside.'
      ],
      correctAnswer: 'To emphasize the effort and resources dedicated to them.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 7),
      type: 'multiple-choice',
      question: 'Inference: The Rosetta Stone allowed scholars to finally decipher Egyptian hieroglyphs. What can be inferred about hieroglyphs before this discovery?',
      options: [
        'Their meaning was unknown to modern people.',
        'Everyone could read them easily.',
        'They were a type of modern art.'
      ],
      correctAnswer: 'Their meaning was unknown to modern people.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 8),
      type: 'multiple-choice',
      question: 'Rhetorical Purpose: Why mention the "Rosetta Stone"?',
      options: [
        'To highlight a key event that enabled the study of Ancient Egyptian history.',
        'To explain the chemical properties of stones.',
        'To describe a famous museum.'
      ],
      correctAnswer: 'To highlight a key event that enabled the study of Ancient Egyptian history.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 9),
      type: 'multiple-choice',
      question: 'Summary question: This week, we focused on:',
      options: [
        'Inference and Rhetorical Purpose in historical contexts.',
        'Grammar of future tenses.',
        'Writing letters to friends.'
      ],
      correctAnswer: 'Inference and Rhetorical Purpose in historical contexts.',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's10', 10),
      type: 'multiple-choice',
      question: 'Are you ready to practice academic grammar for reading next week?',
      options: [
        'Yes, ready!',
        'I need a break',
        'Not sure'
      ],
      correctAnswer: 'Yes, ready!',
      points: 1
    }
  ]
};

export const B2_WEEK_3 = createShardedToeflUnit(
  'toefl-b2-w3',
  'Week 3: Reading - Inference & Rhetorical Purpose',
  'Develop advanced reading skills by learning to draw logical inferences and understand the author\'s rhetorical choices in historical texts.',
  ['Learn to identify information that is implied but not directly stated in a text', 'Understand why an author chooses to include specific information or use certain language', 'Master vocabulary related to history, civilization, archaeology, and social sciences'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
