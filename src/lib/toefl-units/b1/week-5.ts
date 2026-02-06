import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 5;
const LEVEL = 'b1';

// SHARDS 1-2: Social Sciences Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'History & Archeology',
  transcript: `Welcome, everyone, to our introductory lecture on History and Archeology. Today, we'll explore the fascinating world of ancient civilizations and the methods used by archeologists to uncover our past. We'll start with the ancient Egyptians, known for their pyramids and rich culture. Archeologists have learned a lot about their society through artifacts like pottery and hieroglyphs. Another significant civilization is the Maya, who lived in what is now Mexico and Central America. They were advanced in mathematics and astronomy. Their famous step pyramids and calendar system still intrigue researchers today. Moving further, Greek and Roman civilizations have also left a huge impact on modern Western culture. Their contributions in art, politics, and philosophy are profound. Archeologists study ruins like the Parthenon in Greece to learn about these societies. Now, what is archeology? At its core, it's the study of human history through excavation of sites and analysis of artifacts. Techniques include carbon dating, which helps determine the age of objects and is crucial for creating accurate timelines. Whenever a new site is discovered, archeologists conduct surveys and digs to collect data. Each artifact found can tell us a story. For example, a simple piece of broken pottery can reveal trading patterns, dietary habits, and even social structures. So, through archeology, we can recreate ancient histories and understand civilizations better. In the next session, we'll dive deeper into specific archeological discoveries and their significance.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What is one of the reasons the ancient Egyptians are well-known?",
    "options": [
      "Their advanced technology.",
      "Their interest in modern politics.",
      "Their pyramids and rich culture.",
      "Their maritime exploration."
    ],
    "correctAnswer": "Their pyramids and rich culture.",
    "explanation": "Los egipcios son conocidos por sus pirámides y rica cultura.",
    "context": "Today, we'll explore the fascinating world of ancient civilizations and the methods used by archeologists to uncover our past. We'll start with the ancient Egyptians, known for their pyramids and rich culture.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "What have archeologists learned about the Maya civilization?",
    "options": [
      "They were unaware of astronomy.",
      "They were superior in engineering.",
      "They lacked mathematical knowledge.",
      "They were advanced in mathematics and astronomy."
    ],
    "correctAnswer": "They were advanced in mathematics and astronomy.",
    "explanation": "Los mayas tenían conocimientos avanzados en matemáticas y astronomía.",
    "context": "Another significant civilization is the Maya, who lived in what is now Mexico and Central America. They were advanced in mathematics and astronomy.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "Which ancient civilizations have greatly impacted modern Western culture?",
    "options": [
      "Greek and Roman civilizations.",
      "Chinese and Egyptian civilizations.",
      "Maya and Aztec civilizations.",
      "Sumerian and Babylonian civilizations."
    ],
    "correctAnswer": "Greek and Roman civilizations.",
    "explanation": "Las civilizaciones griega y romana han dejado un gran impacto en la cultura occidental moderna.",
    "context": "Moving further, Greek and Roman civilizations have also left a huge impact on modern Western culture.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "What is the purpose of carbon dating in archeology?",
    "options": [
      "To analyze the texture of artifacts.",
      "To find new archeological sites.",
      "To determine the age of objects.",
      "To reconstruct broken artifacts."
    ],
    "correctAnswer": "To determine the age of objects.",
    "explanation": "La datación por carbono se utiliza para determinar la edad de los objetos.",
    "context": "Techniques include carbon dating, which helps determine the age of objects and is crucial for creating accurate timelines.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "Why do archeologists conduct surveys when a new site is discovered?",
    "options": [
      "To increase the value of the artifacts.",
      "To sell artifacts to museums.",
      "To collect data from the site.",
      "To publicize their findings."
    ],
    "correctAnswer": "To collect data from the site.",
    "explanation": "Los arqueólogos realizan encuestas para recopilar datos del sitio.",
    "context": "Whenever a new site is discovered, archeologists conduct surveys and digs to collect data.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "What story can a piece of broken pottery tell?",
    "options": [
      "About government structures.",
      "About fashion trends.",
      "About trading patterns and social structures.",
      "About environmental changes."
    ],
    "correctAnswer": "About trading patterns and social structures.",
    "explanation": "Un trozo de cerámica rota puede revelar patrones comerciales y estructuras sociales.",
    "context": "For example, a simple piece of broken pottery can reveal trading patterns, dietary habits, and even social structures.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What role does excavation play in archeology?",
    "options": [
      "It helps discover new planets.",
      "It recreates modern cities.",
      "It uncovers evidence of past human activities.",
      "It creates myths about ancient people."
    ],
    "correctAnswer": "It uncovers evidence of past human activities.",
    "explanation": "La excavación descubre evidencias de las actividades humanas pasadas.",
    "context": "Archeology, at its core, is the study of human history through excavation of sites.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "What do archeologists aim to do by studying ruins like the Parthenon?",
    "options": [
      "To sell ancient artifacts to collectors.",
      "To build replicas of ancient buildings.",
      "To learn about ancient societies.",
      "To create entertainment for tourists."
    ],
    "correctAnswer": "To learn about ancient societies.",
    "explanation": "Arqueólogos estudian ruinas para aprender sobre sociedades antiguas.",
    "context": "Archeologists study ruins like the Parthenon in Greece to learn about these societies.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "What is the core activity of archeology?",
    "options": [
      "Rebuilding ancient cities.",
      "Studying human history through excavation.",
      "Creating stories about historical events.",
      "Teaching languages used by ancients."
    ],
    "correctAnswer": "Studying human history through excavation.",
    "explanation": "La arqueología es principalmente el estudio de la historia humana a través de excavaciones.",
    "context": "Archeology, at its core, is the study of human history through excavation.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What will be discussed in the next session according to the lecture?",
    "options": [
      "Theories about the future of archeology.",
      "Specific archeological discoveries and their significance.",
      "A history of modern archeological tools.",
      "The influence of cinema on archeology."
    ],
    "correctAnswer": "Specific archeological discoveries and their significance.",
    "explanation": "La próxima sesión se centrará en descubrimientos arqueológicos específicos y su significado.",
    "context": "In the next session, we'll dive deeper into specific archeological discoveries and their significance.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: History Podcast',
  transcript: `Welcome to the History Podcast, where we explore fascinating events and people from the past. Today, we’re diving into the story of Leonardo da Vinci, a true Renaissance man. Born in 1452 in Vinci, Italy, Leonardo was not just a painter; he was also an inventor, scientist, and musician. His famous works include the 'Mona Lisa' and 'The Last Supper.' But did you know he also studied anatomy and designed early versions of flying machines? Leonardo's curiosity knew no bounds, and he left behind thousands of pages of sketches and notes. These documents reveal a mind far ahead of its time, imagining helicopters, tanks, and solar power centuries before they were realized. Now, let's focus on one of his unique skills: mirror writing. Leonardo often wrote from right to left in a mirror script. This technique might have been used to keep his ideas secret or simply because he was left-handed. His influence extended beyond art and invention; he inspired countless generations to pursue innovation and creativity. His legacy lives on, reminding us that imagination can lead to new discoveries. Join us next time as we explore another influential figure in history.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "What is one of the primary topics of the podcast?",
    "options": [
      "The life of a modern scientist",
      "The inventions of Leonardo da Vinci",
      "The politics of Renaissance Italy",
      "The history of art movements"
    ],
    "correctAnswer": "The inventions of Leonardo da Vinci",
    "explanation": "La pregunta se centra en los inventos de Leonardo, que se destacan claramente en el podcast.",
    "context": "But did you know he also studied anatomy and designed early versions of flying machines?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "What is Leonardo da Vinci most famous for?",
    "options": [
      "His sculptures",
      "His music compositions",
      "His paintings",
      "His architectural designs"
    ],
    "correctAnswer": "His paintings",
    "explanation": "Leonardo es famoso principalmente por sus pinturas, incluyendo la 'Mona Lisa' y 'La última cena'.",
    "context": "His famous works include the 'Mona Lisa' and 'The Last Supper.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "How did Leonardo often write?",
    "options": [
      "In mirror writing",
      "In code",
      "In multiple languages",
      "In invisible ink"
    ],
    "correctAnswer": "In mirror writing",
    "explanation": "Leonardo a menudo escribía de derecha a izquierda en un estilo de escritura de espejo.",
    "context": "Leonardo often wrote from right to left in a mirror script.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "Where was Leonardo da Vinci born?",
    "options": [
      "Milan",
      "Rome",
      "Vinci",
      "Florence"
    ],
    "correctAnswer": "Vinci",
    "explanation": "Leonardo nació en Vinci, Italia, como se menciona en el podcast.",
    "context": "Born in 1452 in Vinci, Italy,",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What did Leonardo's documents reveal?",
    "options": [
      "Plans for wars",
      "Future scientific discoveries",
      "Imaginative inventions",
      "Literary works"
    ],
    "correctAnswer": "Imaginative inventions",
    "explanation": "Sus documentos revelaron inventos imaginativos, como helicópteros y tanques.",
    "context": "These documents reveal a mind far ahead of its time, imagining helicopters, tanks, and solar power.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What is one reason Leonardo might have used mirror writing?",
    "options": [
      "To save paper",
      "To write faster",
      "To keep ideas secret",
      "To decorate manuscripts"
    ],
    "correctAnswer": "To keep ideas secret",
    "explanation": "Se sugiere que Leonardo usó la escritura en espejo para mantener sus ideas en secreto.",
    "context": "This technique might have been used to keep his ideas secret or simply because he was left-handed.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "What is a notable characteristic of Leonardo's mind?",
    "options": [
      "It was focused solely on art",
      "It had no interest in science",
      "It was far ahead of its time",
      "It resisted learning new things"
    ],
    "correctAnswer": "It was far ahead of its time",
    "explanation": "La mente de Leonardo estaba muy avanzada, imaginando ideas futuras como poder solar.",
    "context": "These documents reveal a mind far ahead of its time.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What did Leonardo study apart from art?",
    "options": [
      "Economics",
      "Pottery",
      "Anatomy",
      "Literature"
    ],
    "correctAnswer": "Anatomy",
    "explanation": "Leonardo estudió anatomía, lo cual fue uno de sus intereses además del arte.",
    "context": "But did you know he also studied anatomy and designed early versions of flying machines?",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "Which of the following inventions was NOT mentioned in the podcast?",
    "options": [
      "Helicopters",
      "Tanks",
      "Printing presses",
      "Solar power"
    ],
    "correctAnswer": "Printing presses",
    "explanation": "El podcast no menciona las imprentas, solo helicópteros, tanques y energía solar.",
    "context": "These documents reveal a mind far ahead of its time, imagining helicopters, tanks, and solar power.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "What did Leonardo inspire in future generations?",
    "options": [
      "Obedience",
      "Conflict",
      "Innovation",
      "Secrecy"
    ],
    "correctAnswer": "Innovation",
    "explanation": "Leonardo inspiró innovación y creatividad, como se menciona al final del segmento.",
    "context": "His influence extended beyond art and invention; he inspired countless generations to pursue innovation and creativity.",
    "points": 1
  }
]
};
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Academic Verbs',
  transcript: `Hello students, today we are going to explore some commonly used academic verbs that you will encounter in your studies. First, consider the verb 'analyze'. To analyze means to examine something in detail, often to understand it better or to extract some insight from it. For example, you might analyze the results of an experiment or the themes in a novel. Another important verb is 'synthesize'. To synthesize means to combine different ideas or pieces of information to form a comprehensive understanding or new idea. You'll frequently need to synthesize information from different sources in your research papers. The verb 'evaluate' is also crucial. When you evaluate, you are assessing something to determine its value or significance. This could apply to evaluating a theory or the effectiveness of a program. Next, we have 'compare'. To compare means to identify similarities and differences between two or more things, such as comparing two authors' styles or comparing data sets. Lastly, let's examine 'justify'. To justify means to provide reasons or evidence to support a claim, often in response to counterarguments. As you work on essays, you'll need to justify your viewpoints using evidence and logical reasoning. Understanding these verbs will greatly help you in your academic journey.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 1),
    "type": "multiple-choice",
    "question": "What does the verb 'analyze' mean?",
    "options": [
      "To dismiss",
      "To examine in detail",
      "To combine ideas",
      "To reject"
    ],
    "correctAnswer": "To examine in detail",
    "explanation": "Analizar significa examinar algo en detalle.",
    "context": "First, consider the verb 'analyze'. To analyze means to examine something in detail...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 2),
    "type": "multiple-choice",
    "question": "What action is described by the verb 'synthesize'?",
    "options": [
      "To forget",
      "To separate",
      "To combine ideas",
      "To detail"
    ],
    "correctAnswer": "To combine ideas",
    "explanation": "Sintetizar significa combinar diferentes ideas o información.",
    "context": "To synthesize means to combine different ideas or pieces of information...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 3),
    "type": "multiple-choice",
    "question": "For which task would you use the verb 'evaluate'?",
    "options": [
      "Determining a program's effectiveness",
      "Sorting documents",
      "Writing a summary",
      "Formulating hypotheses"
    ],
    "correctAnswer": "Determining a program's effectiveness",
    "explanation": "Evaluar es valorar algo, como la efectividad de un programa.",
    "context": "When you evaluate, you are assessing something to determine its value or significance...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 4),
    "type": "multiple-choice",
    "question": "Which verb refers to finding similarities and differences?",
    "options": [
      "Contrast",
      "Ignore",
      "Compare",
      "Discuss"
    ],
    "correctAnswer": "Compare",
    "explanation": "Comparar significa identificar similitudes y diferencias.",
    "context": "To compare means to identify similarities and differences...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 5),
    "type": "multiple-choice",
    "question": "What is the meaning of 'justify'?",
    "options": [
      "To argue without evidence",
      "To repeat information",
      "To support a claim with reasons",
      "To dismiss an idea"
    ],
    "correctAnswer": "To support a claim with reasons",
    "explanation": "Justificar significa proporcionar razones o evidencia para respaldar una afirmación.",
    "context": "To justify means to provide reasons or evidence to support a claim...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 6),
    "type": "multiple-choice",
    "question": "Why might students need to synthesize information?",
    "options": [
      "To party more efficiently",
      "To create a comprehensive understanding",
      "To avoid studying",
      "To highlight differences"
    ],
    "correctAnswer": "To create a comprehensive understanding",
    "explanation": "Los estudiantes sintetizan información para lograr una comprensión completa.",
    "context": "You'll frequently need to synthesize information from different sources...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 7),
    "type": "multiple-choice",
    "question": "What is a real-world application of analyzing?",
    "options": [
      "Daydreaming",
      "Examining experimental results",
      "Ignoring data",
      "Playing a game"
    ],
    "correctAnswer": "Examining experimental results",
    "explanation": "Analizar se aplica al examinar en detalle los resultados de un experimento.",
    "context": "For example, you might analyze the results of an experiment...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 8),
    "type": "multiple-choice",
    "question": "In which context would 'evaluate' be most appropriately used?",
    "options": [
      "Choosing a fun activity",
      "Assessing a theory's value",
      "Explaining basic concepts",
      "Narrating a story"
    ],
    "correctAnswer": "Assessing a theory's value",
    "explanation": "Evaluar un teoría involucra determinar su valor o significado.",
    "context": "This could apply to evaluating a theory...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 9),
    "type": "multiple-choice",
    "question": "What does 'analyze' typically involve?",
    "options": [
      "Quick assessment",
      "Detailed examination",
      "Ignoring context",
      "Memorization"
    ],
    "correctAnswer": "Detailed examination",
    "explanation": "Analizar implica un examen en detalle, no una evaluación rápida.",
    "context": "To analyze means to examine something in detail...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 10),
    "type": "multiple-choice",
    "question": "When are you likely to justify an argument?",
    "options": [
      "When refuting opponents",
      "While narrating events",
      "When memorizing data",
      "While doing nothing"
    ],
    "correctAnswer": "When refuting opponents",
    "explanation": "Justificar un argumento a menudo ocurre al refutar a tus opositores.",
    "context": "To justify means to provide reasons or evidence to support a claim, often in response to counterarguments...",
    "points": 1
  }
]
};
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Placeholder Shard 3',
  transcript: `Today, we're going to discuss a crucial topic: the importance of regular exercise. Exercise is not just about losing weight or building muscles, it has numerous health benefits. For instance, it can improve your mood and mental health. Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed, and less anxious. Moreover, regular exercise can help you combat health conditions and diseases. It can prevent high blood pressure, heart disease, and type 2 diabetes. Let me share an example: A study showed that people who exercise regularly have reduced risk of these illnesses. Exercise can also boost your energy. Engaging in physical activity delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently. And, as a result, you have more energy to go about your daily activities. For those worried about time, note that even small amounts of physical activity are helpful. You can engage in exercise by walking, cycling, or even participating in a dance class. So, it’s crucial to incorporate exercise into your routine. If you have questions about how to start, feel free to ask.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 1),
    "type": "multiple-choice",
    "question": "What is one of the mental health benefits of exercise mentioned in the transcript?",
    "options": [
      "It reduces stress",
      "It increases stress",
      "It causes anxiety",
      "It reduces coordination"
    ],
    "correctAnswer": "It reduces stress",
    "explanation": "El ejercicio puede mejorar el estado de ánimo y la salud mental, lo que incluye la reducción del estrés.",
    "context": "Exercise is not just about losing weight or building muscles, it has numerous health benefits. For instance, it can improve your mood and mental health.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 2),
    "type": "multiple-choice",
    "question": "How does exercise affect energy levels?",
    "options": [
      "It increases energy",
      "It decreases energy",
      "It has no effect",
      "It makes one sleepy"
    ],
    "correctAnswer": "It increases energy",
    "explanation": "El ejercicio ayuda a que el sistema cardiovascular funcione de manera más eficiente, aumentando así los niveles de energía.",
    "context": "Exercise can also boost your energy. Engaging in physical activity delivers oxygen and nutrients to your tissues and helps your cardiovascular system work more efficiently.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 3),
    "type": "multiple-choice",
    "question": "What health risks can regular exercise reduce?",
    "options": [
      "Heart disease",
      "Shortsightedness",
      "Common cold",
      "Asthma"
    ],
    "correctAnswer": "Heart disease",
    "explanation": "El ejercicio regular puede reducir el riesgo de enfermedades del corazón entre otros problemas de salud.",
    "context": "Moreover, regular exercise can help you combat health conditions and diseases. It can prevent high blood pressure, heart disease, and type 2 diabetes.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 4),
    "type": "multiple-choice",
    "question": "What did the study mentioned in the transcript reveal?",
    "options": [
      "Exercise decreases the risk of diseases",
      "Exercise increases the risk of diseases",
      "Exercise has no impact on diseases",
      "Exercise causes more injuries"
    ],
    "correctAnswer": "Exercise decreases the risk of diseases",
    "explanation": "Un estudio mostró que las personas que hacen ejercicio regularmente tienen un menor riesgo de contraer ciertas enfermedades.",
    "context": "A study showed that people who exercise regularly have reduced risk of these illnesses.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 5),
    "type": "multiple-choice",
    "question": "What is a simple way to add exercise to your routine?",
    "options": [
      "Walking",
      "Driving",
      "Sleeping",
      "Eating"
    ],
    "correctAnswer": "Walking",
    "explanation": "Caminar es una de las maneras sencillas de incluir el ejercicio en la rutina diaria.",
    "context": "You can engage in exercise by walking, cycling, or even participating in a dance class.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 6),
    "type": "multiple-choice",
    "question": "Which condition is not mentioned as being prevented by exercise?",
    "options": [
      "Obesity",
      "Heart disease",
      "Type 2 diabetes",
      "High blood pressure"
    ],
    "correctAnswer": "Obesity",
    "explanation": "En el texto no se mencionó la obesidad como una condición que se previene con ejercicio.",
    "context": "It can prevent high blood pressure, heart disease, and type 2 diabetes.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 7),
    "type": "multiple-choice",
    "question": "How does physical activity affect the brain?",
    "options": [
      "It stimulates brain chemicals",
      "It destroys brain cells",
      "It has no effect",
      "It slows brain function"
    ],
    "correctAnswer": "It stimulates brain chemicals",
    "explanation": "La actividad física estimula varias sustancias químicas del cerebro que mejoran el estado de ánimo.",
    "context": "Physical activity stimulates various brain chemicals that may leave you feeling happier, more relaxed, and less anxious.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 8),
    "type": "multiple-choice",
    "question": "What is a cardiovascular system benefit from exercise?",
    "options": [
      "Efficiency improvement",
      "Stress increase",
      "Increase of tension",
      "No change"
    ],
    "correctAnswer": "Efficiency improvement",
    "explanation": "El ejercicio ayuda a que el sistema cardiovascular funcione de manera más eficiente.",
    "context": "helps your cardiovascular system work more efficiently.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 9),
    "type": "multiple-choice",
    "question": "Which activity is not suggested in the transcript as exercise?",
    "options": [
      "Reading",
      "Cycling",
      "Walking",
      "Dance class"
    ],
    "correctAnswer": "Reading",
    "explanation": "Leer no es una actividad sugerida en el texto como ejercicio.",
    "context": "You can engage in exercise by walking, cycling, or even participating in a dance class.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 10),
    "type": "multiple-choice",
    "question": "What should people concerned about exercise time consider?",
    "options": [
      "Small amounts are beneficial",
      "Exercise is unnecessary",
      "It takes too much time",
      "It's not effective"
    ],
    "correctAnswer": "Small amounts are beneficial",
    "explanation": "Incluso pequeñas cantidades de actividad física son útiles, según el texto.",
    "context": "For those worried about time, note that even small amounts of physical activity are helpful.",
    "points": 1
  }
]
};
const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Placeholder Shard 4',
  transcript: `Welcome to this introductory session on sustainable gardening practices. Today, we'll explore some basic techniques that are easy to implement and beneficial for the environment. Let's start by discussing the importance of composting. Composting is a simple process that involves recycling organic waste like food scraps and yard waste into valuable nutrients for your garden soil. This process reduces landfill waste and enriches the soil, promoting plant growth without the need for chemical fertilizers. Next, we'll look at water conservation techniques such as rainwater harvesting. This involves collecting rainwater from your roof into barrels, which can then be used to water your garden during dry periods. This not only conserves water but also reduces your water bills. Another important aspect is selecting native plants, which are naturally adapted to grow in your area's climate and soil conditions. These plants typically require less water and are resistant to local pests, making them easier to care for and more sustainable. Finally, let's touch upon natural pest control methods. Encouraging beneficial insects like ladybugs and using organic pesticides can help keep harmful pests at bay without damaging the ecosystem. Sustainable gardening is not just about growing plants, but about creating a balanced environment that supports biodiversity. We will now take questions from the audience.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 1),
    "type": "multiple-choice",
    "question": "What is one benefit of composting mentioned in the lecture?",
    "options": [
      "Reduces landfill waste",
      "Increases chemical use",
      "Requires special equipment",
      "Involves complex processes"
    ],
    "correctAnswer": "Reduces landfill waste",
    "explanation": "Compostaje ayuda a reducir la basura que va a los vertederos.",
    "context": "Composting is a simple process that involves recycling organic waste like food scraps and yard waste into valuable nutrients for your garden soil. This process reduces landfill waste and enriches the soil.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 2),
    "type": "multiple-choice",
    "question": "What does rainwater harvesting involve?",
    "options": [
      "Using chemical fertilizers",
      "Collecting rainwater from your roof",
      "Planting more trees",
      "Using a sprinkler system"
    ],
    "correctAnswer": "Collecting rainwater from your roof",
    "explanation": "La recolección de agua de lluvia implica recoger el agua del techo.",
    "context": "Rainwater harvesting involves collecting rainwater from your roof into barrels, which can then be used to water your garden during dry periods.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 3),
    "type": "multiple-choice",
    "question": "Why are native plants considered sustainable?",
    "options": [
      "They need more water",
      "They attract more pests",
      "They require less water and are pest-resistant",
      "They need chemical fertilizers"
    ],
    "correctAnswer": "They require less water and are pest-resistant",
    "explanation": "Las plantas nativas requieren menos agua y son resistentes a las plagas locales.",
    "context": "Selecting native plants, which are naturally adapted to grow in your area's climate and soil conditions. These plants typically require less water and are resistant to local pests.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 4),
    "type": "multiple-choice",
    "question": "What are ladybugs used for in sustainable gardening?",
    "options": [
      "Attracting more insects",
      "Decorative purposes",
      "Natural pest control",
      "Fertilizing plants"
    ],
    "correctAnswer": "Natural pest control",
    "explanation": "Las mariquitas se usan como control de plagas natural al comer insectos dañinos.",
    "context": "Encouraging beneficial insects like ladybugs and using organic pesticides can help keep harmful pests at bay without damaging the ecosystem.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 5),
    "type": "multiple-choice",
    "question": "What is one environmental benefit of sustainable gardening?",
    "options": [
      "It uses more synthetic chemicals",
      "It depletes soil nutrients",
      "It promotes biodiversity",
      "It increases water wastage"
    ],
    "correctAnswer": "It promotes biodiversity",
    "explanation": "La jardinería sostenible promueve la biodiversidad al crear un ambiente equilibrado.",
    "context": "Sustainable gardening is not just about growing plants, but about creating a balanced environment that supports biodiversity.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 6),
    "type": "multiple-choice",
    "question": "What is a purpose of collecting rainwater as mentioned?",
    "options": [
      "To clean the garden",
      "To water the garden during dry periods",
      "To increase humidity levels",
      "To attract more birds"
    ],
    "correctAnswer": "To water the garden during dry periods",
    "explanation": "El agua de lluvia recolectada se utiliza para regar durante períodos secos.",
    "context": "Rainwater harvesting... can then be used to water your garden during dry periods.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 7),
    "type": "multiple-choice",
    "question": "What is the primary material used in composting?",
    "options": [
      "Chemical soil enhancers",
      "Organic waste",
      "Plastic waste",
      "Metal scraps"
    ],
    "correctAnswer": "Organic waste",
    "explanation": "El compostaje utiliza desechos orgánicos como restos de comida y residuos del jardín.",
    "context": "Process that involves recycling organic waste like food scraps and yard waste...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 8),
    "type": "multiple-choice",
    "question": "Which practice helps to reduce water bills as per the lecture?",
    "options": [
      "Using more water",
      "Rainwater harvesting",
      "Planting non-native species",
      "Using chemical pesticides"
    ],
    "correctAnswer": "Rainwater harvesting",
    "explanation": "La recolección de agua de lluvia reduce el gasto en agua al usar el agua de lluvia.",
    "context": "Rainwater harvesting... This not only conserves water but also reduces your water bills.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 9),
    "type": "multiple-choice",
    "question": "What does selecting native plants help avoid?",
    "options": [
      "Pesticide usage",
      "Reduction in biodiversity",
      "Increased water demand",
      "Lower garden yields"
    ],
    "correctAnswer": "Increased water demand",
    "explanation": "Las plantas nativas requieren menos agua por estar adaptadas al clima local.",
    "context": "These plants typically require less water and are resistant to local pests...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 10),
    "type": "multiple-choice",
    "question": "How does sustainable gardening affect chemical fertilizer usage?",
    "options": [
      "It increases usage significantly",
      "It decreases reliance on chemicals",
      "It has no effect",
      "It encourages synthetic fertilizers"
    ],
    "correctAnswer": "It decreases reliance on chemicals",
    "explanation": "La jardinería sostenible reduce la dependencia de fertilizantes químicos.",
    "context": "Promoting plant growth without the need for chemical fertilizers...",
    "points": 1
  }
]
};
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Placeholder Shard 5',
  transcript: `Good morning, class. Today, we're going to discuss an important topic in environmental science: the impact of recycling on reducing waste. Recycling is a key process in which materials that would otherwise be considered waste are collected and then processed and turned into new products. By recycling, we prevent pollution, save energy, and protect natural resources. Let’s explore this further. For example, recycling paper saves trees and reduces the need for landfill space. One ton of recycled paper can save 17 trees and 7,000 gallons of water. Similarly, recycling aluminum saves 95% of the energy it would take to make new aluminum from raw materials. Think about soda cans. These are typically made of aluminum, and recycling them means using much less energy than creating cans from scratch. Next, let's talk about the economic aspect. The recycling industry generates thousands of jobs and can be an important sector in a country's economy. Many communities and cities today encourage their citizens to participate in recycling programs through educational campaigns and convenient collection services. Finally, I’d like to address some challenges in recycling. Contamination of recyclable materials can make it difficult and expensive to process them. It's essential for individuals to understand what can and cannot be recycled to improve efficiency. Now, let’s open the floor to questions.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 1),
    "type": "multiple-choice",
    "question": "What is one benefit of recycling paper mentioned in the transcript?",
    "options": [
      "It saves energy.",
      "It saves trees.",
      "It increases pollution.",
      "It wastes water."
    ],
    "correctAnswer": "It saves trees.",
    "explanation": "Reciclar papel ahorra árboles y agua, como se mencionó en el pasaje.",
    "context": "For example, recycling paper saves trees and reduces the need for landfill space.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 2),
    "type": "multiple-choice",
    "question": "How much energy can be saved by recycling aluminum?",
    "options": [
      "50%",
      "70%",
      "95%",
      "100%"
    ],
    "correctAnswer": "95%",
    "explanation": "Reciclar aluminio ahorra hasta el 95% de la energía requerida para producirlo de materias primas nuevas.",
    "context": "Recycling aluminum saves 95% of the energy it would take to make new aluminum from raw materials.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 3),
    "type": "multiple-choice",
    "question": "According to the transcript, what is a challenge in recycling?",
    "options": [
      "Lack of materials",
      "High energy use",
      "Contamination of materials",
      "Too many jobs"
    ],
    "correctAnswer": "Contamination of materials",
    "explanation": "La contaminación de los materiales reciclables es un desafío importante mencionado.",
    "context": "Contamination of recyclable materials can make it difficult and expensive to process them.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 4),
    "type": "multiple-choice",
    "question": "What creates job opportunities according to the passage?",
    "options": [
      "Waste management",
      "Recycling activities",
      "Landfill expansion",
      "Energy production"
    ],
    "correctAnswer": "Recycling activities",
    "explanation": "La industria del reciclaje genera trabajo, lo cual es un aspecto económico resaltado en el texto.",
    "context": "The recycling industry generates thousands of jobs and can be an important sector in a country's economy.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 5),
    "type": "multiple-choice",
    "question": "Why is public education important in recycling programs?",
    "options": [
      "To increase landfill areas",
      "To prevent energy loss",
      "To improve recycling efficiency",
      "To use more water"
    ],
    "correctAnswer": "To improve recycling efficiency",
    "explanation": "La educación pública es clave para mejorar la eficiencia del reciclaje.",
    "context": "It's essential for individuals to understand what can and cannot be recycled to improve efficiency.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 6),
    "type": "multiple-choice",
    "question": "What is one economic benefit of recycling mentioned?",
    "options": [
      "Decreases pollution",
      "Creates jobs",
      "Saves forests",
      "Lowers water use"
    ],
    "correctAnswer": "Creates jobs",
    "explanation": "Reciclar genera empleos, como se menciona en la parte económica de la transcripción.",
    "context": "The recycling industry generates thousands of jobs and can be an important sector in a country's economy.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 7),
    "type": "multiple-choice",
    "question": "What is the topic of the class mentioned in the transcript?",
    "options": [
      "Deforestation",
      "Waste reduction",
      "Recycling impact",
      "Energy conservation"
    ],
    "correctAnswer": "Recycling impact",
    "explanation": "El enfoque de la clase es el impacto del reciclaje, lo cual se menciona al inicio.",
    "context": "Today, we're going to discuss an important topic in environmental science: the impact of recycling on reducing waste.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 8),
    "type": "multiple-choice",
    "question": "Why do cities encourage recycling as mentioned in the passage?",
    "options": [
      "To increase water usage",
      "To enhance landfill capacity",
      "To promote environmental benefits",
      "To consume more energy"
    ],
    "correctAnswer": "To promote environmental benefits",
    "explanation": "Las ciudades fomentan el reciclaje para promover beneficios ambientales, tal como se explica.",
    "context": "Many communities and cities today encourage their citizens to participate in recycling programs through educational campaigns.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 9),
    "type": "multiple-choice",
    "question": "What does the professor say about soda cans?",
    "options": [
      "They are not recyclable.",
      "They use more energy.",
      "They're mostly made of aluminum.",
      "They're made of paper."
    ],
    "correctAnswer": "They're mostly made of aluminum.",
    "explanation": "Las latas de soda están principalmente hechas de aluminio, lo cual requiere menos energía reciclar.",
    "context": "Think about soda cans. These are typically made of aluminum, and recycling them means using much less energy than creating cans from scratch.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 10),
    "type": "multiple-choice",
    "question": "What natural resource is saved by recycling paper?",
    "options": [
      "Aluminum",
      "Water",
      "Natural gas",
      "Trees"
    ],
    "correctAnswer": "Trees",
    "explanation": "Reciclar papel ahorra árboles, un recurso natural clave mencionado en el texto.",
    "context": "For example, recycling paper saves trees and reduces the need for landfill space.",
    "points": 1
  }
]
};
const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Placeholder Shard 6',
  transcript: `Welcome everyone to our introduction to sustainable living. Today, we're going to explore how small changes in our daily habits can make a big impact on the environment. Let's start with energy consumption. One of the simplest changes you can make is to switch off lights when you leave a room. Did you know that keeping unnecessary lights on uses a significant amount of energy? By being more mindful, we not only save energy but also reduce our electricity bills. Next, let's talk about water usage. One effective way to conserve water is by reducing shower time. Even cutting down by a few minutes can save gallons of water. Remember, every drop counts. Now, when it comes to transportation, carpooling or using public transport significantly reduces carbon emissions. It's also an excellent way to meet new people and share costs. Another area to focus on is waste management. Recycling is crucial, but we should also aim to reduce waste generation in the first place. For instance, opting for reusable bags instead of plastic ones can make a difference. Finally, consider growing your own vegetables. It's a rewarding experience, and it ensures you consume fresh, chemical-free produce. By making these small adjustments, we're contributing to a healthier planet. Are there any questions so far?`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 1),
    "type": "multiple-choice",
    "question": "According to the transcript, what is one simple change recommended for saving energy?",
    "options": [
      "Using energy-saving bulbs",
      "Turning off lights when leaving a room",
      "Installing solar panels",
      "Switching to electric cars"
    ],
    "correctAnswer": "Turning off lights when leaving a room",
    "explanation": "Apagar las luces al salir de una habitación es una forma sencilla de ahorrar energía según el transcript.",
    "context": "One of the simplest changes you can make is to switch off lights when you leave a room.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 2),
    "type": "multiple-choice",
    "question": "What is suggested for conserving water in daily routines?",
    "options": [
      "Using a dishwasher",
      "Taking shorter showers",
      "Flushing toilets less frequently",
      "Watering plants daily"
    ],
    "correctAnswer": "Taking shorter showers",
    "explanation": "Reducir el tiempo de ducha es una manera efectiva de conservar agua según el transcript.",
    "context": "One effective way to conserve water is by reducing shower time.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 3),
    "type": "multiple-choice",
    "question": "How can transportation affect the environment according to the transcript?",
    "options": [
      "Increases noise pollution",
      "Raises salaries of drivers",
      "Reduces carbon emissions",
      "Causes wear and tear on roads"
    ],
    "correctAnswer": "Reduces carbon emissions",
    "explanation": "Utilizar el transporte público o hacer carpooling reduce las emisiones de carbono, como se menciona en el transcript.",
    "context": "Carpooling or using public transport significantly reduces carbon emissions.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 4),
    "type": "multiple-choice",
    "question": "What is a benefit of carpooling mentioned in the transcript?",
    "options": [
      "It improves vehicle aerodynamics",
      "You can meet new people",
      "It decreases travel times",
      "It offers better seat comfort"
    ],
    "correctAnswer": "You can meet new people",
    "explanation": "Carpooling no solo reduce emisiones, sino que también permite conocer a nuevas personas, según el transcript.",
    "context": "It's also an excellent way to meet new people and share costs.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 5),
    "type": "multiple-choice",
    "question": "What is the primary focus of waste management according to the transcript?",
    "options": [
      "Increasing plastic waste",
      "Reducing waste generation",
      "Hiring more waste collectors",
      "Importing waste"
    ],
    "correctAnswer": "Reducing waste generation",
    "explanation": "El objetivo principal de la gestión de residuos es reducir la generación de residuos, como se indica en el transcript.",
    "context": "Recycling is crucial, but we should also aim to reduce waste generation in the first place.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 6),
    "type": "multiple-choice",
    "question": "Why are reusable bags preferred over plastic ones?",
    "options": [
      "They are cheaper",
      "They're more durable",
      "They help reduce waste",
      "They're waterproof"
    ],
    "correctAnswer": "They help reduce waste",
    "explanation": "Las bolsas reutilizables ayudan a reducir los residuos, como se menciona en el transcript.",
    "context": "For instance, opting for reusable bags instead of plastic ones can make a difference.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 7),
    "type": "multiple-choice",
    "question": "What is a suggested activity for ensuring consumption of fresh produce?",
    "options": [
      "Visiting the local market",
      "Growing your own vegetables",
      "Buying only organic",
      "Ordering online"
    ],
    "correctAnswer": "Growing your own vegetables",
    "explanation": "Cultivar tus propias verduras asegura consumir productos frescos, según el transcript.",
    "context": "Finally, consider growing your own vegetables.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 8),
    "type": "multiple-choice",
    "question": "What is one advantage of growing your own vegetables mentioned in the transcript?",
    "options": [
      "It's less time-consuming",
      "Provides fresh, chemical-free produce",
      "It's cheaper than buying",
      "Requires less space"
    ],
    "correctAnswer": "Provides fresh, chemical-free produce",
    "explanation": "Cultivar tus propios vegetales proporciona productos frescos sin químicos, como se explica en el transcript.",
    "context": "It's a rewarding experience, and it ensures you consume fresh, chemical-free produce.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 9),
    "type": "multiple-choice",
    "question": "What is the main purpose of the lecture in the transcript?",
    "options": [
      "To inform about climate change effects",
      "To teach how to live sustainably",
      "To criticize modern living habits",
      "To advertise eco-friendly products"
    ],
    "correctAnswer": "To teach how to live sustainably",
    "explanation": "El propósito principal de la charla es enseñar a vivir de manera sostenible, como se menciona en el transcript.",
    "context": "Today, we're going to explore how small changes in our daily habits can make a big impact on the environment.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 10),
    "type": "multiple-choice",
    "question": "How does the lecture suggest starting the journey to sustainable living?",
    "options": [
      "By recycling more",
      "Making small changes",
      "Investing in solar energy",
      "Avoiding technology"
    ],
    "correctAnswer": "Making small changes",
    "explanation": "La charla sugiere comenzar haciendo pequeños cambios, como se explica en el transcript.",
    "context": "Today, we're going to explore how small changes in our daily habits can make a big impact on the environment.",
    "points": 1
  }
]
};
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Placeholder Shard 7',
  transcript: `Welcome to today's lecture on the basics of photography. Photography is an art form that has existed for over 150 years, capturing moments from everyday life and grand historical events alike. Today, we'll discuss some fundamental concepts that will help you improve your photography skills, whether you're using a professional camera or just your smartphone. First, let's talk about composition, which refers to how the elements are arranged in a photograph. One key aspect of composition is the rule of thirds, which suggests dividing your image into three equal parts, both horizontally and vertically, and placing the subject at the intersection points. This creates a more balanced and engaging image. Another important concept is lighting. Professional photographers often prefer early morning or late afternoon, known as the golden hours, for outdoor photography because the natural light is softer and warmer, enhancing the colors of the scene. For indoor photography, you might use artificial light or reflectors to control shadows and highlights. Next, let's cover the basics of exposure, which is determined by three settings: aperture, shutter speed, and ISO. Aperture controls how much light enters the camera through the lens. A larger aperture allows more light and creates a shallow depth of field, which is great for portraits. Shutter speed controls how long the shutter remains open. A fast shutter speed freezes movement, while a slower speed can capture motion blur. Finally, ISO adjusts the camera's sensitivity to light. A higher ISO lets you shoot in low light, but it can introduce noise, which may negatively affect image quality. Now, let's move on to subject selection. Capturing a great photograph often depends on choosing the right subject and timing. Are there any questions so far about these basic principles? In our next class, we'll delve deeper into each area and practice with hands-on examples. Until then, I encourage you to experiment with these concepts on your own. Take photos at different times of the day, try using the rule of thirds, and play with your camera settings to see the effects. This is how you'll become more comfortable and creative with your photography.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 1),
    "type": "multiple-choice",
    "question": "What is the rule of thirds in photography?",
    "options": [
      "Dividing an image into three equal parts horizontally and vertically.",
      "Using three different color filters.",
      "Taking three pictures of the same subject.",
      "Editing a picture three times to perfect it."
    ],
    "correctAnswer": "Dividing an image into three equal parts horizontally and vertically.",
    "explanation": "La regla de los tercios sugiere dividir la imagen en partes iguales para mejorar la composición.",
    "context": "One key aspect of composition is the rule of thirds, which suggests dividing your image into three equal parts.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 2),
    "type": "multiple-choice",
    "question": "Why are the early morning and late afternoon called the golden hours?",
    "options": [
      "Because the natural light is softer and warmer.",
      "Because it's easier to use artificial light during this time.",
      "Because the sunlight is brighter and harsher.",
      "Because photographers can take more photos during these times."
    ],
    "correctAnswer": "Because the natural light is softer and warmer.",
    "explanation": "Durante las horas doradas, la luz natural es más suave y cálida, lo que mejora los colores de la escena.",
    "context": "Professional photographers often prefer early morning or late afternoon, known as the golden hours, for outdoor photography because the natural light is softer and warmer.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 3),
    "type": "multiple-choice",
    "question": "What controls how much light enters the camera through the lens?",
    "options": [
      "Aperture",
      "ISO",
      "Shutter speed",
      "Focus"
    ],
    "correctAnswer": "Aperture",
    "explanation": "La apertura controla la cantidad de luz que entra a través del lente, afectando la profundidad de campo.",
    "context": "Aperture controls how much light enters the camera through the lens.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 4),
    "type": "multiple-choice",
    "question": "What does a larger aperture create?",
    "options": [
      "A shallow depth of field",
      "More background details",
      "A more balanced image",
      "Less light entering the camera"
    ],
    "correctAnswer": "A shallow depth of field",
    "explanation": "Una apertura más grande permite más luz y crea una menor profundidad de campo, ideal para retratos.",
    "context": "A larger aperture allows more light and creates a shallow depth of field, which is great for portraits.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 5),
    "type": "multiple-choice",
    "question": "What does a fast shutter speed do?",
    "options": [
      "Freezes movement",
      "Blurs the image",
      "Increases brightness",
      "Adds noise to the photo"
    ],
    "correctAnswer": "Freezes movement",
    "explanation": "Una velocidad de obturación rápida congela el movimiento, ideal para sujetos en rápido movimiento.",
    "context": "A fast shutter speed freezes movement, while a slower speed can capture motion blur.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 6),
    "type": "multiple-choice",
    "question": "What can a higher ISO setting introduce to your photos?",
    "options": [
      "Noise",
      "Vivid colors",
      "Sharper focus",
      "Soft lighting"
    ],
    "correctAnswer": "Noise",
    "explanation": "Un ISO más alto aumenta la sensibilidad a la luz, pero puede introducir ruido, afectando la calidad de la imagen.",
    "context": "A higher ISO lets you shoot in low light, but it can introduce noise, which may negatively affect image quality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 7),
    "type": "multiple-choice",
    "question": "Why is subject selection important in photography?",
    "options": [
      "It determines the potential impact of a photograph.",
      "It decides the color scheme and lighting.",
      "It selects the camera settings automatically.",
      "It reduces the need for editing."
    ],
    "correctAnswer": "It determines the potential impact of a photograph.",
    "explanation": "Seleccionar el sujeto adecuado y el momento óptimo es crucial para captar una buena fotografía.",
    "context": "Capturing a great photograph often depends on choosing the right subject and timing.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 8),
    "type": "multiple-choice",
    "question": "What will the next class cover?",
    "options": [
      "Deeper exploration of each photography concept and practice.",
      "Advanced camera equipment insights.",
      "The history of photography.",
      "The business side of photography."
    ],
    "correctAnswer": "Deeper exploration of each photography concept and practice.",
    "explanation": "La próxima clase se enfocará en explorar más a fondo cada concepto con ejemplos prácticos.",
    "context": "In our next class, we'll delve deeper into each area and practice with hands-on examples.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 9),
    "type": "multiple-choice",
    "question": "What is recommended for photographers to do before the next class?",
    "options": [
      "Experiment with photography concepts on their own.",
      "Purchase a new camera.",
      "Read a book about photography history.",
      "Watch videos about famous photographers."
    ],
    "correctAnswer": "Experiment with photography concepts on their own.",
    "explanation": "Se recomienda que los fotógrafos experimenten por su cuenta con los conceptos para familiarizarse y ser más creativos.",
    "context": "I encourage you to experiment with these concepts on your own.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 10),
    "type": "multiple-choice",
    "question": "How does light affect a photograph according to the transcript?",
    "options": [
      "It enhances colors and can be softer or harsher depending on time.",
      "It never affects the outcome of a photograph.",
      "It is more important than composition.",
      "It is controlled solely through camera settings."
    ],
    "correctAnswer": "It enhances colors and can be softer or harsher depending on time.",
    "explanation": "La luz afecta una fotografía al realzar los colores y puede ser más suave o dura dependiendo la hora.",
    "context": "The natural light is softer and warmer, enhancing the colors of the scene.",
    "points": 1
  }
]
};


const s2 = { id: genId(LEVEL, UNIT_ID, 's2', 0), type: 'listening', title: 'Placeholder Shard 2', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's2', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'listening', title: 'Placeholder Shard 10', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple-choice', question: `Question ${i+1}`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };

export const B1_WEEK_5 = createShardedToeflUnit(
  'toefl-b1-w5',
  'Week 5: Social Sciences',
  'Explore the complexities of human society, history, and the mind.',
  ['Understand historical timelines and terminology', 'Use passive voice for academic descriptions', 'Identify societal structures and norms'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
