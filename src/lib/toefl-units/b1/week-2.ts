import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 2;
const LEVEL = 'b1';

// SHARDS 1-2: Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Social Sciences Foundation',
  transcript: `Welcome to the Social Sciences Foundation. Today, we will explore the basic concepts that shape this field of study. Social sciences are a group of academic disciplines that study human society and social relationships. These include fields such as sociology, anthropology, psychology, economics, and political science. Sociology, for example, examines the development, structure, and functioning of human society. Anthropologists, on the other hand, focus on human behavior and cultures, often through time. Psychology deals with the mind and behavior, aiming to understand individuals and groups. Economics studies the production, distribution, and consumption of goods and services, while political science is concerned with systems of governance and the analysis of political activities and behavior. It is important to understand the methodologies used by social scientists, which often involve both qualitative and quantitative research. Qualitative methods might include interviews and observations, allowing for detailed insights into social phenomena. Quantitative methods use numerical data and statistical techniques to identify patterns and test hypotheses. Understanding human society and its complex dynamics helps us address critical issues such as poverty, inequality, and governance. As we explore these topics, consider how they interconnect to form the foundation of social sciences.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What is the main focus of sociology?",
    "options": [
      "The study of human cultures through time",
      "The study of the mind and behavior",
      "The study of the development, structure, and functioning of human society",
      "The study of governance systems"
    ],
    "correctAnswer": "The study of the development, structure, and functioning of human society",
    "explanation": "La sociología se centra en la sociedad humana y cómo ésta se desarrolla, estructura y funciona.",
    "context": "Sociology examines the development, structure, and functioning of human society.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "Which discipline focuses on the mind and behavior?",
    "options": [
      "Anthropology",
      "Economics",
      "Psychology",
      "Political Science"
    ],
    "correctAnswer": "Psychology",
    "explanation": "La psicología se ocupa de la mente y el comportamiento.",
    "context": "Psychology deals with the mind and behavior.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "What are qualitative methods in social science research?",
    "options": [
      "Methods that involve interviews and observations",
      "Methods that use numerical data and statistical techniques",
      "Methods that study the production of goods",
      "Methods that examine systems of governance"
    ],
    "correctAnswer": "Methods that involve interviews and observations",
    "explanation": "Los métodos cualitativos incluyen entrevistas y observaciones para ofrecer información detallada.",
    "context": "Qualitative methods might include interviews and observations.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "Which field studies the distribution and consumption of goods and services?",
    "options": [
      "Sociology",
      "Economics",
      "Political Science",
      "Anthropology"
    ],
    "correctAnswer": "Economics",
    "explanation": "La economía estudia la producción, distribución y consumo de bienes y servicios.",
    "context": "Economics studies the production, distribution, and consumption of goods and services.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "What do anthropologists primarily focus on?",
    "options": [
      "Human governance systems",
      "Human behavior and cultures, often through time",
      "The mind and behavior",
      "The consumption of goods and services"
    ],
    "correctAnswer": "Human behavior and cultures, often through time",
    "explanation": "Los antropólogos se enfocan en el comportamiento humano y las culturas a través del tiempo.",
    "context": "Anthropologists focus on human behavior and cultures, often through time.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "Political science is mainly concerned with what?",
    "options": [
      "Systems of governance and political activities",
      "The mind and its activities",
      "Cultural development through time",
      "Economic distribution patterns"
    ],
    "correctAnswer": "Systems of governance and political activities",
    "explanation": "La ciencia política se centra en los sistemas de gobierno y las actividades políticas.",
    "context": "Political science is concerned with systems of governance and the analysis of political activities and behavior.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What benefit does an understanding of social sciences provide?",
    "options": [
      "Solving engineering problems",
      "Fulfilling technological needs",
      "Addressing critical issues like poverty and inequality",
      "Exploring the universe and space"
    ],
    "correctAnswer": "Addressing critical issues like poverty and inequality",
    "explanation": "Comprender las ciencias sociales ayuda a abordar problemas críticos como la pobreza y la desigualdad.",
    "context": "Understanding human society and its complex dynamics helps us address critical issues such as poverty, inequality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "Which research method involves using statistical techniques?",
    "options": [
      "Qualitative methods",
      "Quantitative methods",
      "Cultural methods",
      "Behavioral methods"
    ],
    "correctAnswer": "Quantitative methods",
    "explanation": "Los métodos cuantitativos utilizan datos numéricos y técnicas estadísticas.",
    "context": "Quantitative methods use numerical data and statistical techniques.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "What topic does the lecture primarily cover?",
    "options": [
      "Natural sciences overview",
      "Social sciences foundation",
      "Technological advancements",
      "Economic theories"
    ],
    "correctAnswer": "Social sciences foundation",
    "explanation": "La conferencia cubre los conceptos básicos de las ciencias sociales.",
    "context": "Today, we will explore the basic concepts that shape the field of study.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What is the purpose of integrating both qualitative and quantitative research in social science?",
    "options": [
      "To increase the speed of research",
      "To save research costs",
      "To gain a comprehensive understanding of social phenomena",
      "To focus exclusively on statistical analysis"
    ],
    "correctAnswer": "To gain a comprehensive understanding of social phenomena",
    "explanation": "Usar ambos métodos permite entender de manera más completa los fenómenos sociales.",
    "context": "Social scientists use both qualitative and quantitative research for understanding social phenomena.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Library Search',
  transcript: `Librarian: Good morning! How can I help you today?
Student: Hi, I'm looking for a book on European history, but I'm not sure where to begin.
Librarian: Sure! We have several sections for history books. You'll likely find European history in the History section, second floor.
Student: Great, but I'm worried it might take too long to find the exact book I need.
Librarian: Well, you can use our library catalog on the computer right over there to search for specific titles or authors.
Student: That's helpful, thank you! And what if I'm interested in digital resources or e-books?
Librarian: We offer a wide range of digital resources. You can access them online through our library website. Just log in with your student ID.
Student: Wonderful! Do you provide any support or workshops on how to use these resources?
Librarian: Yes, we do. We have weekly workshops. You can sign up online or at the front desk. 
Student: That sounds perfect. I'll definitely sign up. Thank you for your help!
Librarian: You're welcome! If you need further assistance, don't hesitate to ask.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "Where does the librarian suggest the student look for European history books?",
    "options": [
      "First floor",
      "Second floor",
      "Third floor",
      "Fourth floor"
    ],
    "correctAnswer": "Second floor",
    "explanation": "La bibliotecaria mencionó que los libros de historia europea están en el segundo piso.",
    "context": "You'll likely find European history in the History section, second floor.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "What does the librarian suggest the student use to find specific book titles?",
    "options": [
      "Library catalog",
      "Library map",
      "Library guide",
      "Librarian help"
    ],
    "correctAnswer": "Library catalog",
    "explanation": "La bibliotecaria recomendó usar el catálogo de la biblioteca para buscar títulos específicos.",
    "context": "You can use our library catalog on the computer right over there to search for specific titles.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "What does the student need to access digital resources?",
    "options": [
      "Library card",
      "Student ID",
      "Library map",
      "Library guide"
    ],
    "correctAnswer": "Student ID",
    "explanation": "La bibliotecaria explicó que se necesita un ID de estudiante para acceder a los recursos digitales.",
    "context": "Just log in with your student ID.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "How does the librarian suggest the student sign up for workshops?",
    "options": [
      "Online",
      "Via email",
      "Call the library",
      "In person only"
    ],
    "correctAnswer": "Online",
    "explanation": "La bibliotecaria indicó que las inscripciones para los talleres se pueden hacer en línea.",
    "context": "You can sign up online or at the front desk.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What type of resource is NOT mentioned by the librarian?",
    "options": [
      "E-books",
      "Workshops",
      "Printed magazines",
      "Digital resources"
    ],
    "correctAnswer": "Printed magazines",
    "explanation": "La bibliotecaria no habló sobre revistas impresas en la conversación.",
    "context": "We offer a wide range of digital resources.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What concern does the student have about finding the book?",
    "options": [
      "Library opening hours",
      "Length of time to find it",
      "Availability of the book",
      "Quality of the book"
    ],
    "correctAnswer": "Length of time to find it",
    "explanation": "El estudiante está preocupado por el tiempo que llevará encontrar el libro.",
    "context": "I'm worried it might take too long to find the exact book I need.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "Who can help if the student needs further assistance?",
    "options": [
      "Security",
      "Other students",
      "Librarian",
      "Cleaning staff"
    ],
    "correctAnswer": "Librarian",
    "explanation": "La bibliotecaria ofreció más ayuda si el estudiante la necesita.",
    "context": "If you need further assistance, don't hesitate to ask.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What is the student's initial request?",
    "options": [
      "Information on library events",
      "Help to find a book",
      "Suggestions for e-books",
      "Library map"
    ],
    "correctAnswer": "Help to find a book",
    "explanation": "El estudiante inicialmente pidió ayuda para encontrar un libro sobre historia europea.",
    "context": "I'm looking for a book on European history.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "What is the librarian's attitude throughout the conversation?",
    "options": [
      "Unfriendly",
      "Helpful",
      "Indifferent",
      "Annoyed"
    ],
    "correctAnswer": "Helpful",
    "explanation": "La bibliotecaria se mostró servicial y ofreció varias opciones al estudiante.",
    "context": "How can I help you today?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "What service does the librarian mention is available for digital resources?",
    "options": [
      "Printing services",
      "Weekly workshops",
      "Study rooms",
      "Free transportation"
    ],
    "correctAnswer": "Weekly workshops",
    "explanation": "La bibliotecaria mencionó que hay talleres semanales disponibles para aprender a usar los recursos digitales.",
    "context": "We have weekly workshops.",
    "points": 1
  }
]
};
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Academic Transition Words',
  transcript: `Good day, everyone. Today we're discussing academic transition words, which are essential in academic writing. Transition words help us connect ideas smoothly. First, let us consider the word 'however'. This word is used to introduce a statement that contrasts with or seems to contradict something that has been said previously. For example, one might say, 'The research was comprehensive; however, it didn't cover all aspects of the topic.' Here, 'however' connects two contrasting ideas. Next, consider 'therefore'. This word suggests cause and effect. For instance, 'The experiment failed; therefore, we need to revise our hypothesis.' Moving on, 'furthermore' is used to add information. A sentence with 'furthermore' might be, 'The results were not only accurate but furthermore, they were consistent over time.' Lastly, 'nevertheless' is similar to 'however', but often used when something is true in spite of a previous statement. For example, 'The initial results were discouraging; nevertheless, we achieved our goal eventually.' By using these transition words correctly, your writing can be both cohesive and persuasive.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 1),
    "type": "multiple-choice",
    "question": "What is the main purpose of the word 'however' in academic writing, according to the lecture?",
    "options": [
      "To list examples",
      "To illustrate cause and effect",
      "To contrast ideas",
      "To summarize information"
    ],
    "correctAnswer": "To contrast ideas",
    "explanation": "La palabra 'however' se usa para contrastar ideas, introduciendo afirmaciones que pueden contradecir otras previas.",
    "context": "'however'. This word is used to introduce a statement that contrasts with or seems to contradict something that has been said previously.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 2),
    "type": "multiple-choice",
    "question": "Which transition word indicates a cause-and-effect relationship?",
    "options": [
      "however",
      "furthermore",
      "therefore",
      "nevertheless"
    ],
    "correctAnswer": "therefore",
    "explanation": "La palabra 'therefore' indica una relación de causa y efecto al conectar dos ideas relacionadas.",
    "context": "'therefore'. This word suggests cause and effect.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 3),
    "type": "multiple-choice",
    "question": "What does the word 'furthermore' help to do in a sentence?",
    "options": [
      "Add extra information",
      "Show contrast",
      "Conclude an idea",
      "Show a comparison"
    ],
    "correctAnswer": "Add extra information",
    "explanation": "'furthermore' se utiliza para añadir más información a una afirmación previa.",
    "context": "'furthermore' is used to add information.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 4),
    "type": "multiple-choice",
    "question": "In what context should 'nevertheless' be used?",
    "options": [
      "To list items",
      "To show contrast",
      "To add a conclusion",
      "To indicate cause"
    ],
    "correctAnswer": "To show contrast",
    "explanation": "'nevertheless' se emplea para mostrar que algo es verdad a pesar de lo que se indicó previamente.",
    "context": "'nevertheless' is similar to 'however', but often used when something is true in spite of a previous statement.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 5),
    "type": "multiple-choice",
    "question": "Which transition word would be most appropriate when providing additional supporting evidence?",
    "options": [
      "however",
      "moreover",
      "therefore",
      "nevertheless"
    ],
    "correctAnswer": "moreover",
    "explanation": "'moreover' se utiliza para añadir evidencia o información adicional a una idea existente.",
    "context": "In a sentence like, 'The study confirms this finding; moreover, it extends the understanding of the issue.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 6),
    "type": "multiple-choice",
    "question": "The word 'however', as used in the transcript, would likely link which two types of statements?",
    "options": [
      "Supporting and main idea",
      "Two contrasting ideas",
      "Examples and details",
      "Beginning and end"
    ],
    "correctAnswer": "Two contrasting ideas",
    "explanation": "'however' se utiliza para vincular dos ideas que son contrastantes o que parecen contradecirse.",
    "context": "'however' connects two contrasting ideas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 7),
    "type": "multiple-choice",
    "question": "When should you use 'therefore' instead of 'however'?",
    "options": [
      "To introduce a problem",
      "To show continuation",
      "To show cause and effect",
      "To add contrasting information"
    ],
    "correctAnswer": "To show cause and effect",
    "explanation": "'therefore' se usa específicamente para mostrar la relación de causa y efecto, a diferencia de 'however'.",
    "context": "This word suggests cause and effect.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 8),
    "type": "multiple-choice",
    "question": "If a sentence begins with 'furthermore', what will likely follow?",
    "options": [
      "A contrasting idea",
      "A conclusion",
      "Additional information",
      "Cause and effect"
    ],
    "correctAnswer": "Additional information",
    "explanation": "La palabra 'furthermore' típicamente introduce información adicional relacionada con la anterior.",
    "context": "'furthermore' is used to add information.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 9),
    "type": "multiple-choice",
    "question": "What type of transition is 'nevertheless' providing in a statement?",
    "options": [
      "Continuation",
      "Comparison",
      "Concession",
      "Cause and effect"
    ],
    "correctAnswer": "Concession",
    "explanation": "'nevertheless' proporciona una concesión sugiriendo que algo es cierto a pesar de lo que se afirmó antes.",
    "context": "'nevertheless' is similar to 'however', but often used when something is true in spite of a previous statement.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 10),
    "type": "multiple-choice",
    "question": "Which transition would you use to replace 'although' in a sentence to show contrast?",
    "options": [
      "furthermore",
      "however",
      "therefore",
      "similarity"
    ],
    "correctAnswer": "however",
    "explanation": "'however' se usa comúnmente para mostrar contraste, similar a 'although'.",
    "context": "'however'. This word is used to introduce a statement that contrasts.",
    "points": 1
  }
]
};
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Placeholder Shard 3',
  transcript: `Welcome everyone to our weekly discussion on technology trends. Today, we're focusing on the impact of smart home devices. These devices, like thermostats and voice assistants, are becoming more common in households. They offer convenience by automating tasks and providing control even when you're not at home. However, there are concerns about privacy and data security. Many people are curious about how their data is used by the companies that create these devices. For example, voice assistants are always listening, which raises questions on whether our conversations are being recorded. Additionally, smart thermostats learn your schedule to maintain comfort and efficiency, but this involves collecting data about your habits. Yet, the convenience of adjusting the temperature from your phone is seen as a major benefit by many users. On the whole, while there are undeniable advantages, it’s important for consumers to stay informed about how their data could be used. Understanding these factors can help make a more informed decision when adding smart devices to your home.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 1),
    "type": "multiple-choice",
    "question": "What is the main topic of the discussion?",
    "options": [
      "Smart home devices",
      "Old furniture",
      "Cooking trends",
      "Outdoor sports"
    ],
    "correctAnswer": "Smart home devices",
    "explanation": "El diálogo se centra principalmente en los dispositivos inteligentes para el hogar.",
    "context": "Today, we're focusing on the impact of smart home devices.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 2),
    "type": "multiple-choice",
    "question": "What benefit do smart home devices offer?",
    "options": [
      "More storage space",
      "Convenience in managing tasks",
      "Increased travel opportunities",
      "New cooking recipes"
    ],
    "correctAnswer": "Convenience in managing tasks",
    "explanation": "Estos dispositivos proporcionan comodidad al automatizar tareas.",
    "context": "They offer convenience by automating tasks and providing control even when you're not at home.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 3),
    "type": "multiple-choice",
    "question": "What concern is raised about smart home devices?",
    "options": [
      "High cost",
      "Durability issues",
      "Privacy and data security",
      "Limited color choices"
    ],
    "correctAnswer": "Privacy and data security",
    "explanation": "La privacidad y la seguridad de los datos son una preocupación importante.",
    "context": "However, there are concerns about privacy and data security.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 4),
    "type": "multiple-choice",
    "question": "How do voice assistants operate that might cause concern?",
    "options": [
      "They are very noisy",
      "They are always listening",
      "They require constant updates",
      "They need expensive batteries"
    ],
    "correctAnswer": "They are always listening",
    "explanation": "Los asistentes de voz están constantemente escuchando, lo que podría preocupar a algunos usuarios.",
    "context": "voice assistants are always listening, which raises questions...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 5),
    "type": "multiple-choice",
    "question": "What aspect of smart thermostats is highlighted?",
    "options": [
      "They have colorful displays",
      "They save energy immediately",
      "They learn your schedule",
      "They are only manual"
    ],
    "correctAnswer": "They learn your schedule",
    "explanation": "Los termostatos inteligentes aprenden el horario del usuario para optimizar la eficiencia.",
    "context": "smart thermostats learn your schedule to maintain comfort and efficiency...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 6),
    "type": "multiple-choice",
    "question": "What is one advantage of controlling the thermostat from your phone?",
    "options": [
      "Easier to reinstall",
      "It provides greater security",
      "Convenience in adjusting temperature",
      "Reduces phone's battery life"
    ],
    "correctAnswer": "Convenience in adjusting temperature",
    "explanation": "El control del termostato desde el teléfono es conveniente para muchos usuarios.",
    "context": "Yet, the convenience of adjusting the temperature from your phone is seen as a major benefit...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 7),
    "type": "multiple-choice",
    "question": "Why is it important for consumers to stay informed?",
    "options": [
      "To get discounts on devices",
      "To entertain themselves",
      "To understand data usage",
      "To connect with friends"
    ],
    "correctAnswer": "To understand data usage",
    "explanation": "Es importante para los consumidores conocer cómo se utilizan sus datos.",
    "context": "it’s important for consumers to stay informed about how their data could be used.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 8),
    "type": "multiple-choice",
    "question": "What does the speaker suggest about making a decision on smart devices?",
    "options": [
      "It should be spontaneous",
      "Based on general opinions",
      "An informed decision is best",
      "Should be expensive"
    ],
    "correctAnswer": "An informed decision is best",
    "explanation": "El hablante sugiere que se tome una decisión informada sobre el uso de dispositivos inteligentes.",
    "context": "Understanding these factors can help make a more informed decision...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 9),
    "type": "multiple-choice",
    "question": "Which of these is a direct benefit mentioned about smart thermostats?",
    "options": [
      "Stylish design",
      "Continuous improvements",
      "Temperature adjustment from phone",
      "Noise cancellation"
    ],
    "correctAnswer": "Temperature adjustment from phone",
    "explanation": "Un beneficio directo mencionado es el ajuste de temperatura desde el teléfono.",
    "context": "the convenience of adjusting the temperature from your phone is seen as a major benefit...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 10),
    "type": "multiple-choice",
    "question": "What overall theme does the discussion address?",
    "options": [
      "Technology's impact on home living",
      "The rise of traditional methods",
      "Decreasing gadget prices",
      "Outdoor technology trends"
    ],
    "correctAnswer": "Technology's impact on home living",
    "explanation": "El tema principal es el impacto de la tecnología en la vida en el hogar.",
    "context": "We're focusing on the impact of smart home devices.",
    "points": 1
  }
]
};
const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Placeholder Shard 4',
  transcript: `Welcome to today's lecture on marine ecosystems and their importance to our planet. We'll start by discussing the structure of ocean food chains. At the base of the food chain, we have phytoplankton — small, plant-like organisms that photosynthesize just like plants on land. Phytoplankton are a crucial source of food for many marine species. Next in the chain are zooplankton, which feed on phytoplankton. Small fish and shellfish consume zooplankton, and bigger fish, in turn, eat them. This progression continues up to the top predators like sharks and large marine mammals. Understanding this chain is essential for maintaining ecological balance. Now, let's talk about coral reefs. These diverse underwater ecosystems support a vast variety of life. They act as barriers protecting coastal communities from powerful ocean waves and help promote marine biodiversity by providing habitats for numerous species. Finally, conservation efforts are crucial as these ecosystems face threats from pollution, climate change, and overfishing. It's vital for us to recognize the impact human activities have on these ecosystems and strive for sustainable practices.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 1),
    "type": "multiple-choice",
    "question": "What is the main purpose of phytoplankton in the ocean food chain?",
    "options": [
      "To provide food for zooplankton",
      "To clean the ocean",
      "To feed large fish",
      "To protect coastal areas"
    ],
    "correctAnswer": "To provide food for zooplankton",
    "explanation": "Los fitoplancton sirven de alimento inicial en la cadena alimentaria marina.",
    "context": "At the base of the food chain, we have phytoplankton — small, plant-like organisms that photosynthesize just like plants on land. Phytoplankton are a crucial source of food for many marine species.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 2),
    "type": "multiple-choice",
    "question": "What do small fish and shellfish in the ocean primarily feed on?",
    "options": [
      "Coral reefs",
      "Zooplankton",
      "Phytoplankton",
      "Large fish"
    ],
    "correctAnswer": "Zooplankton",
    "explanation": "Los pequeños peces y mariscos se alimentan principalmente de zooplancton que comen fitoplancton.",
    "context": "Next in the chain are zooplankton, which feed on phytoplankton. Small fish and shellfish consume zooplankton.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 3),
    "type": "multiple-choice",
    "question": "What role do coral reefs play in marine ecosystems?",
    "options": [
      "They serve as a food source for large fish",
      "They act as a habitat for marine species",
      "They produce oxygen for fish",
      "They regulate the temperature of ocean water"
    ],
    "correctAnswer": "They act as a habitat for marine species",
    "explanation": "Los arrecifes de coral proporcionan hábitats que fomentan la biodiversidad marina.",
    "context": "Now, let's talk about coral reefs. These diverse underwater ecosystems support a vast variety of life.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 4),
    "type": "multiple-choice",
    "question": "Why are coral reefs important for coastal communities?",
    "options": [
      "They provide food for people",
      "They act as barriers against ocean waves",
      "They increase the water's salinity",
      "They reduce the temperature of nearby areas"
    ],
    "correctAnswer": "They act as barriers against ocean waves",
    "explanation": "Los arrecifes de coral protegen a las comunidades costeras de olas poderosas.",
    "context": "They act as barriers protecting coastal communities from powerful ocean waves.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 5),
    "type": "multiple-choice",
    "question": "What are the main threats to marine ecosystems mentioned?",
    "options": [
      "Pollution and climate change",
      "Tourist activity",
      "Overpopulation of fish",
      "Natural predators"
    ],
    "correctAnswer": "Pollution and climate change",
    "explanation": "La contaminación y el cambio climático son amenazas significativas para los ecosistemas marinos.",
    "context": "Finally, conservation efforts are crucial as these ecosystems face threats from pollution, climate change, and overfishing.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 6),
    "type": "multiple-choice",
    "question": "What can humans do to help preserve marine ecosystems?",
    "options": [
      "Increase fishing activities",
      "Ignore pollution",
      "Encourage sustainable practices",
      "Build more coastal cities"
    ],
    "correctAnswer": "Encourage sustainable practices",
    "explanation": "Promover prácticas sostenibles ayuda a mitigar el daño humano a los ecosistemas marinos.",
    "context": "It's vital for us to recognize the impact human activities have on these ecosystems and strive for sustainable practices.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 7),
    "type": "multiple-choice",
    "question": "What is the relevance of understanding ocean food chains?",
    "options": [
      "It helps in building artificial reefs",
      "It is essential for maintaining ecological balance",
      "It reduces ocean pollution",
      "It helps control the population of marine mammals"
    ],
    "correctAnswer": "It is essential for maintaining ecological balance",
    "explanation": "Comprender las cadenas alimentarias oceánicas es clave para el equilibrio ecológico.",
    "context": "Understanding this chain is essential for maintaining ecological balance.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 8),
    "type": "multiple-choice",
    "question": "Which organisms are at the base of the ocean food chain?",
    "options": [
      "Large fish",
      "Zooplankton",
      "Phytoplankton",
      "Marine mammals"
    ],
    "correctAnswer": "Phytoplankton",
    "explanation": "Los fitoplancton forman la base de la cadena alimentaria oceánica.",
    "context": "At the base of the food chain, we have phytoplankton — small, plant-like organisms that photosynthesize just like plants on land.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 9),
    "type": "multiple-choice",
    "question": "What follows phytoplankton in the ocean food chain?",
    "options": [
      "Marine mammals",
      "Zooplankton",
      "Large fish",
      "Coral reefs"
    ],
    "correctAnswer": "Zooplankton",
    "explanation": "Los zooplancton vienen después del fitoplancton en la cadena alimentaria.",
    "context": "Next in the chain are zooplankton, which feed on phytoplankton.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 10),
    "type": "multiple-choice",
    "question": "How do coral reefs contribute to marine biodiversity?",
    "options": [
      "They clean the water",
      "They offer a habitat for fish",
      "They control algae growth",
      "They provide food for mammals"
    ],
    "correctAnswer": "They offer a habitat for fish",
    "explanation": "Los arrecifes de coral proporcionan un hábitat vital para muchos organismos marinos.",
    "context": "These diverse underwater ecosystems support a vast variety of life. They act as barriers protecting coastal communities from powerful ocean waves and help promote marine biodiversity by providing habitats for numerous species.",
    "points": 1
  }
]
};
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Placeholder Shard 5',
  transcript: `Welcome to Placeholder Shard 5. Today, we’re going to talk about sustainable gardening and its benefits for urban environments. Many city dwellers are turning to gardening as a way to not only beautify their surroundings but also contribute positively to the environment. Let's explore why sustainable gardening is gaining popularity. First, let’s consider the environmental benefits. Gardens help reduce the urban heat effect because plants cool the surrounding air by evaporating water. Additionally, they help absorb carbon dioxide, which in turn, helps offset emissions from urban areas. Another significant benefit is biodiversity. City gardens create habitats for various species, from insects to birds. This urban greenery helps maintain ecological balance. Now, let's talk practicality. Sustainable gardens are often designed with water conservation in mind, such as using drought-resistant plants and efficient irrigation systems. These gardens can be easier to maintain and resource-efficient over time. Lastly, gardening has health benefits for city residents. The act of gardening can be a great physical exercise, reducing stress and improving mental health through spending time in nature. Community gardening projects are also excellent for fostering community spirit and social connections. Holding communal events and workshops around gardening can strengthen neighborhood ties. Let’s review some specific techniques used to make gardening sustainable, and how you can apply these to improve your own green spaces in the city.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 1),
    "type": "multiple-choice",
    "question": "What is one environmental benefit of sustainable gardening mentioned in the transcript?",
    "options": [
      "Reducing urban heat",
      "Increasing water usage",
      "Decreasing air quality",
      "Increasing temperature"
    ],
    "correctAnswer": "Reducing urban heat",
    "explanation": "La jardinería sostenible ayuda a combatir el efecto de calor urbano enfriando el aire circundante.",
    "context": "Gardens help reduce the urban heat effect because plants cool the surrounding air by evaporating water.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 2),
    "type": "multiple-choice",
    "question": "What role do city gardens play in biodiversity?",
    "options": [
      "They minimize species variety",
      "They remove habitats",
      "They create habitats",
      "They increase pollution"
    ],
    "correctAnswer": "They create habitats",
    "explanation": "Los jardines urbanos proporcionan hábitats para diversas especies, fomentando así la biodiversidad.",
    "context": "City gardens create habitats for various species, from insects to birds.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 3),
    "type": "multiple-choice",
    "question": "How can sustainable gardens contribute to water conservation?",
    "options": [
      "Using drought-resistant plants",
      "Increasing water pump usage",
      "Watering more frequently",
      "Removing all plants"
    ],
    "correctAnswer": "Using drought-resistant plants",
    "explanation": "Las plantas resistentes a la sequía requieren menos agua, lo que contribuye a la conservación del agua.",
    "context": "Sustainable gardens are often designed with water conservation in mind, such as using drought-resistant plants.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 4),
    "type": "multiple-choice",
    "question": "What is described as a personal health benefit of gardening?",
    "options": [
      "Reducing physical strength",
      "Increasing stress levels",
      "Reducing stress",
      "Causing isolation"
    ],
    "correctAnswer": "Reducing stress",
    "explanation": "La jardinería puede ser un ejercicio físico y ayuda a reducir el estrés al pasar tiempo en la naturaleza.",
    "context": "The act of gardening can be a great physical exercise, reducing stress.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 5),
    "type": "multiple-choice",
    "question": "What is one social benefit of community gardening?",
    "options": [
      "Fostering isolation",
      "Promoting loneliness",
      "Fostering community spirit",
      "Decreasing neighbor relations"
    ],
    "correctAnswer": "Fostering community spirit",
    "explanation": "Los proyectos de jardinería comunitaria fortalecen los lazos vecinales y promueven el espíritu comunitario.",
    "context": "Community gardening projects are also excellent for fostering community spirit.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 6),
    "type": "multiple-choice",
    "question": "Why are composting methods important in sustainable gardening?",
    "options": [
      "They create plastic waste",
      "They improve soil fertility",
      "They increase soil erosion",
      "They pollute the land"
    ],
    "correctAnswer": "They improve soil fertility",
    "explanation": "El compostaje mejora la fertilidad del suelo al añadir nutrientes orgánicos esenciales.",
    "context": "Composting methods improve soil fertility by adding essential organic nutrients.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 7),
    "type": "multiple-choice",
    "question": "How do gardens help offset carbon emissions?",
    "options": [
      "By absorbing carbon dioxide",
      "By emitting carbon dioxide",
      "By increasing temperature",
      "By storing plastic"
    ],
    "correctAnswer": "By absorbing carbon dioxide",
    "explanation": "Las plantas en los jardines absorben el dióxido de carbono, ayudando a compensar las emisiones.",
    "context": "They help absorb carbon dioxide, which in turn, helps offset emissions from urban areas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 8),
    "type": "multiple-choice",
    "question": "Which of the following is a technique used in sustainable gardening for water efficiency?",
    "options": [
      "Drought-resistant plants",
      "Frequent watering",
      "Watering at noon",
      "Using only cement"
    ],
    "correctAnswer": "Drought-resistant plants",
    "explanation": "El uso de plantas resistentes a la sequía es una técnica para hacer el uso del agua más eficiente.",
    "context": "Using drought-resistant plants and efficient irrigation systems.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 9),
    "type": "multiple-choice",
    "question": "What is a community gardening activity mentioned that strengthens neighborhood ties?",
    "options": [
      "Holding communal events",
      "Avoiding neighbors",
      "Building large fences",
      "Ignoring workshops"
    ],
    "correctAnswer": "Holding communal events",
    "explanation": "Las actividades comunitarias como eventos y talleres fortalecen los lazos de vecindad.",
    "context": "Holding communal events and workshops around gardening can strengthen neighborhood ties.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 10),
    "type": "multiple-choice",
    "question": "What aspect of gardening contributes positively to mental health?",
    "options": [
      "Spending time in nature",
      "Isolation indoors",
      "Using synthetic fertilizers",
      "Avoiding sunlight"
    ],
    "correctAnswer": "Spending time in nature",
    "explanation": "Pasar tiempo en la naturaleza a través de la jardinería mejora la salud mental.",
    "context": "Improving mental health through spending time in nature.",
    "points": 1
  }
]
};
const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Placeholder Shard 6',
  transcript: `Welcome everyone to today's class. We are going to talk about the basics of photosynthesis. This process is essential for plant life and, by extension, for all life on Earth. But what exactly is photosynthesis? It is the way that plants convert light energy, usually from the sun, into chemical energy in the form of glucose, which is a type of sugar. The most important players in this process are the chlorophyll, which is found in the chloroplasts of plant cells, carbon dioxide from the air, and water from the soil. Now, let's recall that photosynthesis takes place mainly in the leaves of plants. The chlorophyll absorbs sunlight, which gives the plant the energy to transform carbon dioxide and water into glucose. Oxygen is released as a byproduct during this process. This is why plants are so crucial for life on Earth; they are essentially natural air purifiers. They take in carbon dioxide and release oxygen. For our next session, I suggest you read more about the different types of chlorophyll and how they affect photosynthesis efficiency. Does anyone have any questions so far?`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 1),
    "type": "multiple-choice",
    "question": "What is the main topic of the lecture?",
    "options": [
      "Climate change",
      "Photosynthesis",
      "Animal behavior",
      "Solar energy"
    ],
    "correctAnswer": "Photosynthesis",
    "explanation": "La conferencia se centra en cómo las plantas convierten energía de la luz en glucosa mediante la fotosíntesis.",
    "context": "We are going to talk about the basics of photosynthesis.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 2),
    "type": "multiple-choice",
    "question": "What do plants produce during photosynthesis?",
    "options": [
      "Glucose and oxygen",
      "Carbon dioxide and water",
      "Sunlight",
      "Chlorophyll"
    ],
    "correctAnswer": "Glucose and oxygen",
    "explanation": "Durante la fotosíntesis, las plantas convierten CO2 y agua en glucosa y liberan oxígeno.",
    "context": "Plants convert light energy into chemical energy in the form of glucose, and oxygen is released as a byproduct.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 3),
    "type": "multiple-choice",
    "question": "Where does photosynthesis mostly take place in a plant?",
    "options": [
      "Roots",
      "Flowers",
      "Stems",
      "Leaves"
    ],
    "correctAnswer": "Leaves",
    "explanation": "La fotosíntesis ocurre principalmente en las hojas de las plantas donde se encuentra la clorofila.",
    "context": "Photosynthesis takes place mainly in the leaves of plants.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 4),
    "type": "multiple-choice",
    "question": "What role does chlorophyll play in photosynthesis?",
    "options": [
      "Absorbs carbon dioxide",
      "Releases oxygen",
      "Absorbs sunlight",
      "Produces water"
    ],
    "correctAnswer": "Absorbs sunlight",
    "explanation": "La clorofila absorbe la luz solar, que es necesaria para la conversión de energía en la fotosíntesis.",
    "context": "The chlorophyll absorbs sunlight, which gives the plant the energy...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 5),
    "type": "multiple-choice",
    "question": "What is a byproduct of photosynthesis according to the lecture?",
    "options": [
      "Carbon dioxide",
      "Water",
      "Glucose",
      "Oxygen"
    ],
    "correctAnswer": "Oxygen",
    "explanation": "El producto secundario liberado durante la fotosíntesis es el oxígeno.",
    "context": "Oxygen is released as a byproduct during this process.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 6),
    "type": "multiple-choice",
    "question": "Why are plants essential for life on Earth as mentioned in the lecture?",
    "options": [
      "They consume oxygen",
      "They produce water",
      "They purify the air",
      "They absorb sunlight"
    ],
    "correctAnswer": "They purify the air",
    "explanation": "Las plantas son purificadores naturales del aire, absorben CO2 y liberan oxígeno.",
    "context": "They are essentially natural air purifiers.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 7),
    "type": "multiple-choice",
    "question": "What are students advised to do for the next session?",
    "options": [
      "Write a report on chlorophyll",
      "Read about chlorophyll types",
      "Conduct an experiment",
      "Visit a botanical garden"
    ],
    "correctAnswer": "Read about chlorophyll types",
    "explanation": "Los estudiantes deben leer sobre los diferentes tipos de clorofila para aumentar su comprensión.",
    "context": "I suggest you read more about the different types of chlorophyll...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 8),
    "type": "multiple-choice",
    "question": "How is chemical energy stored in plants?",
    "options": [
      "As proteins",
      "As glucose",
      "As chlorophyll",
      "As minerals"
    ],
    "correctAnswer": "As glucose",
    "explanation": "La energía química se almacena en forma de glucosa, que es producida por las plantas durante la fotosíntesis.",
    "context": "into chemical energy in the form of glucose...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 9),
    "type": "multiple-choice",
    "question": "What elements from the environment are used by plants in photosynthesis?",
    "options": [
      "Oxygen and nitrogen",
      "Carbon dioxide and water",
      "Sunlight and soil",
      "Minerals and vitamins"
    ],
    "correctAnswer": "Carbon dioxide and water",
    "explanation": "Las plantas utilizan dióxido de carbono del aire y agua del suelo para la fotosíntesis.",
    "context": "carbon dioxide from the air, and water from the soil...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 10),
    "type": "multiple-choice",
    "question": "What does the instructor ask at the end of the lecture?",
    "options": [
      "To conduct further research",
      "If there are any questions",
      "To memorize the process",
      "If anyone disagrees"
    ],
    "correctAnswer": "If there are any questions",
    "explanation": "El instructor pregunta si los estudiantes tienen alguna duda respecto al contenido explicado.",
    "context": "Does anyone have any questions so far?",
    "points": 1
  }
]
};
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Placeholder Shard 7',
  transcript: `Professor Taylor: Today, we're going to talk about the basics of photosynthesis. This process is essential for plants, allowing them to convert light into energy. Photosynthesis primarily occurs in the leaves of plants. It involves the absorption of light by chlorophyll, a green pigment responsible for the color of plant leaves.

Student: How exactly does light energy get converted into chemical energy?

Professor Taylor: It's a great question. The light energy from the sun is captured by chlorophyll and used to form the chemical ATP, which is a form of energy that the plant can use. Additionally, photosynthesis produces glucose, a type of sugar that serves as an energy source for plants.

Student: Is water important in this process?

Professor Taylor: Absolutely. Water acts as a reactant in photosynthesis. It's absorbed from the soil through the plant's roots. During the process, water molecules are split apart to release oxygen, which is a byproduct of photosynthesis.

Student: So, without photosynthesis, would plants be unable to exist?

Professor Taylor: That's correct. Without photosynthesis, plants would not have the energy they need to grow and survive. Moreover, the oxygen generated as a byproduct is crucial for the survival of many other organisms, including humans.

Student: What about the importance of carbon dioxide?

Professor Taylor: Carbon dioxide is also a vital ingredient for photosynthesis. Plants take in carbon dioxide from the air through small openings called stomata. The carbon atoms from carbon dioxide are combined with hydrogen from water to create glucose through a series of reactions.

Student: Interesting. Can photosynthesis occur at night?

Professor Taylor: Photosynthesis requires sunlight, so it primarily occurs during the day. However, plants also undergo a complementary process called respiration, which can happen at night, where they convert stored glucose into energy. This ensures they continue to survive and function when sunlight is not available.

Student: Thank you for explaining, Professor Taylor.

Professor Taylor: My pleasure. Understanding photosynthesis helps us appreciate the vital role plants play in our ecosystem.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 1),
    "type": "multiple-choice",
    "question": "What is the main role of chlorophyll in photosynthesis?",
    "options": [
      "To absorb water",
      "To capture light energy",
      "To release oxygen",
      "To absorb carbon dioxide"
    ],
    "correctAnswer": "To capture light energy",
    "explanation": "Chlorophyll es responsable de capturar la energía de la luz del sol, lo cual es fundamental para realizar la fotosíntesis.",
    "context": "The light energy from the sun is captured by chlorophyll.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 2),
    "type": "multiple-choice",
    "question": "What does photosynthesis produce as a primary product?",
    "options": [
      "Oxygen",
      "ATP",
      "Glucose",
      "Carbon dioxide"
    ],
    "correctAnswer": "Glucose",
    "explanation": "La fotosíntesis produce glucosa como fuente principal de energía para las plantas.",
    "context": "Photosynthesis produces glucose, a type of sugar.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 3),
    "type": "multiple-choice",
    "question": "Why is water important in photosynthesis?",
    "options": [
      "It is absorbed by stomata",
      "It provides energy",
      "It is split to release oxygen",
      "It combines with oxygen"
    ],
    "correctAnswer": "It is split to release oxygen",
    "explanation": "El agua es descompuesta para liberar oxígeno, que es un subproducto de la fotosíntesis.",
    "context": "Water molecules are split apart to release oxygen.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 4),
    "type": "multiple-choice",
    "question": "What would happen to plants without photosynthesis?",
    "options": [
      "They would produce more oxygen",
      "They would not survive",
      "They would decrease carbon dioxide",
      "They would increase glucose"
    ],
    "correctAnswer": "They would not survive",
    "explanation": "Sin fotosíntesis, las plantas no tendrían la energía necesaria para crecer y sobrevivir.",
    "context": "Without photosynthesis, plants would not have the energy they need to grow and survive.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 5),
    "type": "multiple-choice",
    "question": "Why is carbon dioxide important during photosynthesis?",
    "options": [
      "It provides energy",
      "It releases oxygen",
      "It combines with hydrogen to form glucose",
      "It captures sunlight"
    ],
    "correctAnswer": "It combines with hydrogen to form glucose",
    "explanation": "El dióxido de carbono se combina con el hidrógeno para formar glucosa, un proceso clave en la fotosíntesis.",
    "context": "Carbon atoms from carbon dioxide are combined with hydrogen from water to create glucose.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 6),
    "type": "multiple-choice",
    "question": "When does respiration occur in plants?",
    "options": [
      "Only during the day",
      "At night",
      "In the absence of water",
      "When oxygen levels are high"
    ],
    "correctAnswer": "At night",
    "explanation": "La respiración ocurre en las plantas durante la noche para convertir glucosa almacenada en energía.",
    "context": "Plants also undergo a complementary process called respiration, which can happen at night.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 7),
    "type": "multiple-choice",
    "question": "What role do stomata play in photosynthesis?",
    "options": [
      "Release oxygen",
      "Capture sunlight",
      "Take in carbon dioxide",
      "Absorb water"
    ],
    "correctAnswer": "Take in carbon dioxide",
    "explanation": "Los estomas permiten que las plantas absorban dióxido de carbono del aire, necesario para la fotosíntesis.",
    "context": "Plants take in carbon dioxide from the air through small openings called stomata.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 8),
    "type": "multiple-choice",
    "question": "What is a byproduct of photosynthesis?",
    "options": [
      "Water",
      "Sugar",
      "Carbon dioxide",
      "Oxygen"
    ],
    "correctAnswer": "Oxygen",
    "explanation": "El oxígeno es un subproducto generado durante la fotosíntesis y es esencial para muchos organismos.",
    "context": "Water molecules are split apart to release oxygen, which is a byproduct of photosynthesis.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 9),
    "type": "multiple-choice",
    "question": "Which part of the plant primarily undergoes photosynthesis?",
    "options": [
      "Roots",
      "Stems",
      "Leaves",
      "Flowers"
    ],
    "correctAnswer": "Leaves",
    "explanation": "La fotosíntesis ocurre principalmente en las hojas de las plantas, donde se encuentra la clorofila.",
    "context": "Photosynthesis primarily occurs in the leaves of plants.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 10),
    "type": "multiple-choice",
    "question": "What does ATP represent in photosynthesis?",
    "options": [
      "A sugar type",
      "Stored sunlight",
      "Chemical energy",
      "Water source"
    ],
    "correctAnswer": "Chemical energy",
    "explanation": "ATP es una forma de energía química que las plantas pueden utilizar para varias funciones.",
    "context": "The light energy from the sun is captured by chlorophyll and used to form the chemical ATP.",
    "points": 1
  }
]
};


const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Placeholder Shard 2',
  transcript: `Welcome to today's lecture on urban planning concepts. Urban planning plays a crucial role in designing cities that are functional and sustainable. Let's start with the basics of zoning. Zoning regulations determine what kind of buildings can be constructed in specific areas. For instance, some zones allow residential buildings, while others might be designated for commercial use. This helps in organizing city spaces efficiently. Next, we should consider public transportation. Effective public transport systems reduce traffic congestion and pollution. Cities like Tokyo and London have excellent public transportation networks. They encourage people to use buses, trains, and subways, rather than driving cars. Green spaces are another important aspect. Parks and recreational areas are essential for the well-being of city residents. They offer a place to relax and exercise, and they can also improve air quality. Urban planners also focus on infrastructure, such as roads, bridges, and utilities. Cities must ensure that these are modernized and maintained, to support growing populations. Finally, let's talk about urban resilience. This refers to the ability of a city to withstand and recover from challenges like natural disasters. Planners work on strategies to mitigate these effects by enhancing building codes and emergency response systems. Remember, effective urban planning ensures a city is livable, and can adapt to future changes.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 1),
    "type": "multiple-choice",
    "question": "What is the primary purpose of zoning in urban planning?",
    "options": [
      "To control the types of buildings in an area",
      "To manage the population density",
      "To promote economic development",
      "To reduce pollution levels"
    ],
    "correctAnswer": "To control the types of buildings in an area",
    "explanation": "Zoning ayuda a determinar qué tipo de edificios se pueden construir en ciertas áreas.",
    "context": "Zoning regulations determine what kind of buildings can be constructed in specific areas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 2),
    "type": "multiple-choice",
    "question": "Why are effective public transportation systems important?",
    "options": [
      "They increase property values",
      "They reduce traffic congestion",
      "They create more jobs",
      "They lower energy costs"
    ],
    "correctAnswer": "They reduce traffic congestion",
    "explanation": "Los sistemas de transporte público eficaces reducen la congestión del tráfico.",
    "context": "Effective public transport systems reduce traffic congestion and pollution.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 3),
    "type": "multiple-choice",
    "question": "What benefit do green spaces provide in urban areas?",
    "options": [
      "They increase industrial opportunities",
      "They offer areas for relaxation and exercise",
      "They decrease urban property taxes",
      "They improve road infrastructure"
    ],
    "correctAnswer": "They offer areas for relaxation and exercise",
    "explanation": "Los espacios verdes proporcionan lugares para relajarse y hacer ejercicio.",
    "context": "Parks and recreational areas are essential for the well-being of city residents.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 4),
    "type": "multiple-choice",
    "question": "What is one focus of urban infrastructure planning?",
    "options": [
      "Developing shopping centers",
      "Enhancing local cultural activities",
      "Modernizing roads and bridges",
      "Increasing tax revenue"
    ],
    "correctAnswer": "Modernizing roads and bridges",
    "explanation": "La planificación urbana se centra en modernizar caminos y puentes.",
    "context": "Urban planners also focus on infrastructure, such as roads, bridges, and utilities.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 5),
    "type": "multiple-choice",
    "question": "What does urban resilience help a city to do?",
    "options": [
      "Expand rapidly",
      "Attract tourists",
      "Withstand natural disasters",
      "Increase funding"
    ],
    "correctAnswer": "Withstand natural disasters",
    "explanation": "La resiliencia urbana ayuda a la ciudad a soportar desastres naturales.",
    "context": "Urban resilience refers to the ability of a city to withstand and recover from challenges like natural disasters.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 6),
    "type": "multiple-choice",
    "question": "Which city is mentioned as having an excellent public transportation network?",
    "options": [
      "New York",
      "Paris",
      "London",
      "Beijing"
    ],
    "correctAnswer": "London",
    "explanation": "Se menciona que Londres tiene excelentes redes de transporte público.",
    "context": "Cities like Tokyo and London have excellent public transportation networks.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 7),
    "type": "multiple-choice",
    "question": "What is one way cities can prepare for challenges like natural disasters?",
    "options": [
      "By increasing tourism",
      "By enhancing building codes",
      "By constructing more factories",
      "By reducing population density"
    ],
    "correctAnswer": "By enhancing building codes",
    "explanation": "Las ciudades pueden prepararse mejorando los códigos de construcción.",
    "context": "Planners work on strategies to mitigate these effects by enhancing building codes and emergency response systems.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 8),
    "type": "multiple-choice",
    "question": "Why are parks and recreational areas important in a city?",
    "options": [
      "They generate energy",
      "They attract international investors",
      "They improve air quality",
      "They support commercial zones"
    ],
    "correctAnswer": "They improve air quality",
    "explanation": "Los parques y áreas recreativas son importantes porque mejoran la calidad del aire.",
    "context": "They offer a place to relax and exercise, and they can also improve air quality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 9),
    "type": "multiple-choice",
    "question": "What is the role of public transportation in reducing city pollution?",
    "options": [
      "Raising fares to decrease usage",
      "Making transportation cost-free",
      "Encouraging less car use",
      "Subsidizing electric cars"
    ],
    "correctAnswer": "Encouraging less car use",
    "explanation": "El transporte público fomenta un menor uso de automóviles, reduciendo la contaminación.",
    "context": "They encourage people to use buses, trains, and subways, rather than driving cars.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 10),
    "type": "multiple-choice",
    "question": "How do urban planners ensure that infrastructure supports a growing population?",
    "options": [
      "By freezing development projects",
      "By expanding existing facilities",
      "By importing resources",
      "By reducing infrastructure sizes"
    ],
    "correctAnswer": "By expanding existing facilities",
    "explanation": "Los planificadores urbanos aseguran que la infraestructura crecerá junto con la población.",
    "context": "Cities must ensure that these are modernized and maintained, to support growing populations.",
    "points": 1
  }
]
};
const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'listening',
  title: 'Placeholder Shard 10',
  transcript: `Welcome, everyone. Today, we're going to explore the basics of photography, an incredible art form that's accessible to everyone. Photography allows us to capture moments and tell powerful stories. To get started, you need a camera, and fortunately, many smartphones today have excellent cameras. The first concept to understand is composition. Think about how you frame your subject, considering elements like the rule of thirds, which suggests dividing your frame into a grid. Another important aspect is lighting. Natural light often works best, so try shooting during the golden hours — early morning or late afternoon. Don't forget about the importance of perspective. Change your angle to add interest to your photos. Finally, practice is key. Take your camera out regularly and experiment with these ideas.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 1),
    "type": "multiple-choice",
    "question": "According to the transcript, what is the first concept in photography that the speaker mentions?",
    "options": [
      "Lighting",
      "Composition",
      "Perspective",
      "Camera type"
    ],
    "correctAnswer": "Composition",
    "explanation": "La composición es la primera noción mencionada como esencial en la fotografía.",
    "context": "The first concept to understand is composition.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 2),
    "type": "multiple-choice",
    "question": "What does the 'rule of thirds' refer to?",
    "options": [
      "Dividing a frame into a grid",
      "The best time of day to take photos",
      "Using different camera angles",
      "Adjusting the flash settings"
    ],
    "correctAnswer": "Dividing a frame into a grid",
    "explanation": "La 'regla de los tercios' se refiere a dividir el encuadre en una cuadrícula para mejorar la composición.",
    "context": "The rule of thirds, which suggests dividing your frame into a grid.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 3),
    "type": "multiple-choice",
    "question": "What does the speaker suggest about natural light?",
    "options": [
      "It should be avoided in photography",
      "It is often the best lighting for photographs",
      "Only use it during the night",
      "It is not important in photography"
    ],
    "correctAnswer": "It is often the best lighting for photographs",
    "explanation": "El altavoz sugiere que la luz natural a menudo es la mejor para la fotografía.",
    "context": "Natural light often works best.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 4),
    "type": "multiple-choice",
    "question": "What time of day does the speaker refer to as the 'golden hours'?",
    "options": [
      "Midday",
      "Early morning and late afternoon",
      "Midnight",
      "During rainstorms"
    ],
    "correctAnswer": "Early morning and late afternoon",
    "explanation": "Las 'horas doradas' son temprano por la mañana y al final de la tarde.",
    "context": "Try shooting during the golden hours — early morning or late afternoon.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 5),
    "type": "multiple-choice",
    "question": "Why does the speaker emphasize changing your angle?",
    "options": [
      "To break your camera",
      "To make photos less interesting",
      "To add interest to your photos",
      "To confuse viewers"
    ],
    "correctAnswer": "To add interest to your photos",
    "explanation": "Cambiar el ángulo puede hacer que tus fotos sean más interesantes.",
    "context": "Change your angle to add interest to your photos.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 6),
    "type": "multiple-choice",
    "question": "What is essential according to the speaker to improve in photography?",
    "options": [
      "Buying the most expensive camera",
      "Practicing regularly",
      "Avoiding photography guides",
      "Relying solely on editing software"
    ],
    "correctAnswer": "Practicing regularly",
    "explanation": "Practicar regularmente es crucial para mejorar en la fotografía.",
    "context": "Practice is key.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 7),
    "type": "multiple-choice",
    "question": "What equipment does the speaker say you need to start photography?",
    "options": [
      "A professional camera",
      "Any camera, including a smartphone",
      "Lighting kits",
      "Only film cameras"
    ],
    "correctAnswer": "Any camera, including a smartphone",
    "explanation": "Cualquier cámara, incluso smartphones, es suficiente para empezar en fotografía.",
    "context": "You need a camera, and fortunately, many smartphones today have excellent cameras.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 8),
    "type": "multiple-choice",
    "question": "How does the speaker describe photography?",
    "options": [
      "An elite art form",
      "Accessible to everyone",
      "Extremely difficult to learn",
      "Reserved for professionals"
    ],
    "correctAnswer": "Accessible to everyone",
    "explanation": "La fotografía se describe como accesible para todos.",
    "context": "An incredible art form that's accessible to everyone.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 9),
    "type": "multiple-choice",
    "question": "What does the speaker mention as a tool to tell powerful stories?",
    "options": [
      "Lighting",
      "Composition",
      "Photography",
      "Editing software"
    ],
    "correctAnswer": "Photography",
    "explanation": "La fotografía se menciona como medio para contar historias poderosas.",
    "context": "Photography allows us to capture moments and tell powerful stories.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 10),
    "type": "multiple-choice",
    "question": "Why should you take your camera out regularly, according to the speaker?",
    "options": [
      "To exercise your muscles",
      "To keep up with camera trends",
      "To practice the discussed photography ideas",
      "To protect it from dirt"
    ],
    "correctAnswer": "To practice the discussed photography ideas",
    "explanation": "Sacar la cámara regularmente es importante para practicar las ideas discutidas.",
    "context": "Take your camera out regularly and experiment with these ideas.",
    "points": 1
  }
]
};

export const B1_WEEK_2 = createShardedToeflUnit(
  'toefl-b1-w2',
  'Week 2: Social Sciences & Academic Writing',
  'Deep dive into sociology, history, and the mechanics of formal English.',
  ['Master social science vocabulary', 'Apply advanced subject-verb agreement', 'Analyze cause and effect in history texts'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
