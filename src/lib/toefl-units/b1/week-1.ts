import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 1;
const LEVEL = 'b1';

// SHARD 1-10: Academic Vocabulary & Campus Life (10 Questions each)
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Campus Facilities',
  transcript: `Welcome to our university campus, everyone. Today, I’ll give you a brief overview of the facilities available here. Firstly, let's talk about the main library. It's located in the heart of the campus and offers several resources, including study rooms and digital materials accessible through the computers inside the library. Secondly, we have the Student Center. It's a place where students can relax, access different student services, and participate in various clubs and activities. Next, there's the Sports Complex, which houses a gym, swimming pool, and several sports courts. This facility is open to all students. Additionally, our campus café, located near the Arts Building, is a popular spot for grabbing a meal or coffee between classes. The Engineering Building also includes the tech lab where students have access to cutting-edge technology for research and project work. Lastly, for those interested in art and music, the Fine Arts Building has several studios and practice rooms which are open to all students with a valid student ID. Remember, each facility has its own schedule, so be sure to check the timetables online or at the entrance of each building. I hope you make good use of these facilities during your time here at the university.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "Where is the main library located on campus?",
    "options": [
      "Near the Arts Building",
      "In the heart of the campus",
      "Next to the Sports Complex",
      "By the dormitories"
    ],
    "correctAnswer": "In the heart of the campus",
    "explanation": "La biblioteca principal se encuentra en el centro del campus, lo cual se menciona claramente en el inicio de la descripción.",
    "context": "Firstly, let's talk about the main library. It's located in the heart of the campus...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "What facilities does the Sports Complex offer?",
    "options": [
      "Only a gym",
      "A gym and a swimming pool",
      "Multiple gyms and cafés",
      "Just sports courts"
    ],
    "correctAnswer": "A gym and a swimming pool",
    "explanation": "Se menciona que el complejo deportivo tiene un gimnasio y una piscina, junto con varias canchas deportivas.",
    "context": "Next, there's the Sports Complex, which houses a gym, swimming pool, and several sports courts.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "Which building is the campus café located near?",
    "options": [
      "Engineering Building",
      "Arts Building",
      "Sports Complex",
      "Library"
    ],
    "correctAnswer": "Arts Building",
    "explanation": "El café del campus está situado cerca del Edificio de Artes, lo cual se indica en la explicación.",
    "context": "Additionally, our campus café, located near the Arts Building...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "What can students access in the Engineering Building?",
    "options": [
      "Art studios",
      "A computer lab",
      "A tech lab",
      "Library resources"
    ],
    "correctAnswer": "A tech lab",
    "explanation": "El Edificio de Ingeniería incluye un laboratorio de tecnología, de acuerdo con la descripción del guion.",
    "context": "The Engineering Building also includes the tech lab where students have access...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "Which facility offers study rooms and digital materials?",
    "options": [
      "Student Center",
      "Sports Complex",
      "Main Library",
      "Fine Arts Building"
    ],
    "correctAnswer": "Main Library",
    "explanation": "La biblioteca principal ofrece salas de estudio y materiales digitales, como se menciona claramente.",
    "context": "It offers several resources, including study rooms and digital materials...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "What is the purpose of the Student Center?",
    "options": [
      "To hold lectures",
      "To host art exhibits",
      "To provide a relaxation space",
      "To conduct tech workshops"
    ],
    "correctAnswer": "To provide a relaxation space",
    "explanation": "El Centro de Estudiantes sirve como lugar de relajación y para servicios estudiantiles, conforme al guion.",
    "context": "Student Center. It's a place where students can relax, access different student services...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "What kind of activities are hosted in the Student Center?",
    "options": [
      "Sports competitions",
      "Club activities",
      "Research projects",
      "Art performances"
    ],
    "correctAnswer": "Club activities",
    "explanation": "Las actividades de clubes tienen lugar en el Centro de Estudiantes, según se afirma en el guion.",
    "context": "participate in various clubs and activities.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "Who can use the sports facilities?",
    "options": [
      "Only faculty",
      "All students",
      "Only athletes",
      "Invited guests"
    ],
    "correctAnswer": "All students",
    "explanation": "Las instalaciones deportivas están abiertas a todos los estudiantes, como se indica en el guion.",
    "context": "This facility is open to all students.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "What is located in the Fine Arts Building?",
    "options": [
      "A library",
      "Art studios and practice rooms",
      "A tech lab",
      "A gym"
    ],
    "correctAnswer": "Art studios and practice rooms",
    "explanation": "El Edificio de Bellas Artes contiene estudios de arte y salas de práctica, según se detalla.",
    "context": "Fine Arts Building has several studios and practice rooms...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "What do you need to access the studios in the Fine Arts Building?",
    "options": [
      "A faculty pass",
      "A valid student ID",
      "An appointment",
      "A club membership"
    ],
    "correctAnswer": "A valid student ID",
    "explanation": "Se requiere una identificación válida de estudiante para acceder a los estudios del Edificio de Bellas Artes.",
    "context": "which are open to all students with a valid student ID.",
    "points": 1
  }
]
};
const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Academic Verbs',
  transcript: `Today, we will explore some common academic verbs and their applications in different fields of study. Understanding these verbs is crucial for academic success as they help convey precise activities in research and analysis. Let's start with the verb 'analyze', which is often used in social sciences to examine various aspects of a topic in detail. For instance, you might analyze survey data to identify trends. Another key verb is 'synthesize', utilized in subjects like chemistry or even literature, referring to combining elements to create a cohesive whole. If you conduct an experiment, you will likely 'measure' your results, a verb central to scientific methods, indicating the quantification of variables. Additionally, 'evaluate' is a versatile verb that involves judging the significance or value of something, used in tasks ranging from critiquing art to assessing theories. In writing, one might 'summarize' a complex text to extract its core message, a skill essential for efficient communication. Next, 'interpret' is crucial in fields like history or anthropology, where understanding cultural artifacts is essential. Similarly, 'justify' requires providing reasons or arguments to support a particular position, often seen in legal or philosophical writing. The verb 'compare' helps highlight similarities and differences in studies or analyses. Also, 'describe' involves detailing the characteristics of an object or scenario, critical in observational research. Finally, 'argue' is vital in developing thesis statements where you need to present and defend a viewpoint.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 1),
    "type": "multiple-choice",
    "question": "Which verb means to examine something in detail?",
    "options": [
      "Measure",
      "Analyze",
      "Interpret",
      "Describe"
    ],
    "correctAnswer": "Analyze",
    "explanation": "En el contexto académico, 'analizar' significa examinar detalladamente un tema o datos.",
    "context": "Let's start with the verb 'analyze', which is often used in social sciences to examine various aspects of a topic in detail.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 2),
    "type": "multiple-choice",
    "question": "What does the verb 'synthesize' refer to?",
    "options": [
      "Summarizing information",
      "Evaluating results",
      "Combining elements",
      "Arguing a point"
    ],
    "correctAnswer": "Combining elements",
    "explanation": "'Sintetizar' se refiere a la acción de combinar diferentes elementos para formar un todo coherente.",
    "context": "Another key verb is 'synthesize', utilized in subjects like chemistry or even literature, referring to combining elements to create a cohesive whole.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 3),
    "type": "multiple-choice",
    "question": "In scientific methods, which verb is central to quantifying variables?",
    "options": [
      "Summarize",
      "Evaluate",
      "Measure",
      "Describe"
    ],
    "correctAnswer": "Measure",
    "explanation": "'Medir' es un verbo central en métodos científicos que indica la cuantificación de variables.",
    "context": "If you conduct an experiment, you will likely 'measure' your results, a verb central to scientific methods, indicating the quantification of variables.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 4),
    "type": "multiple-choice",
    "question": "Which verb involves judging the significance of something?",
    "options": [
      "Interpret",
      "Evaluate",
      "Synthesize",
      "Justify"
    ],
    "correctAnswer": "Evaluate",
    "explanation": "‘Evaluar’ implica juzgar la importancia o el valor de algo.",
    "context": "Additionally, 'evaluate' is a versatile verb that involves judging the significance or value of something.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 5),
    "type": "multiple-choice",
    "question": "What is the main purpose of summarizing?",
    "options": [
      "Extracting the core message",
      "Arguing about the text",
      "Comparing texts",
      "Describing details"
    ],
    "correctAnswer": "Extracting the core message",
    "explanation": "'Resumir' se refiere a extraer el mensaje principal de un texto complejo.",
    "context": "In writing, one might 'summarize' a complex text to extract its core message.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 6),
    "type": "multiple-choice",
    "question": "Which verb would you use to understand cultural artifacts?",
    "options": [
      "Justify",
      "Interpret",
      "Compare",
      "Describe"
    ],
    "correctAnswer": "Interpret",
    "explanation": "'Interpretar' es crucial para entender artefactos culturales, especialmente en campos como la historia o la antropología.",
    "context": "Next, 'interpret' is crucial in fields like history or anthropology, where understanding cultural artifacts is essential.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 7),
    "type": "multiple-choice",
    "question": "What does 'justify' require you to do?",
    "options": [
      "Detail characteristics",
      "Present reasons",
      "Compare theories",
      "Summarize data"
    ],
    "correctAnswer": "Present reasons",
    "explanation": "'Justificar' requiere presentar razones o argumentos para apoyar una posición.",
    "context": "Similarly, 'justify' requires providing reasons or arguments to support a particular position.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 8),
    "type": "multiple-choice",
    "question": "Which verb is used to highlight similarities and differences?",
    "options": [
      "Describe",
      "Measure",
      "Compare",
      "Analyze"
    ],
    "correctAnswer": "Compare",
    "explanation": "'Comparar' se utiliza para destacar similitudes y diferencias en estudios o análisis.",
    "context": "The verb 'compare' helps highlight similarities and differences in studies or analyses.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 9),
    "type": "multiple-choice",
    "question": "What does 'describe' entail in observational research?",
    "options": [
      "Summarizing events",
      "Arguing conclusions",
      "Detailing characteristics",
      "Justifying outcomes"
    ],
    "correctAnswer": "Detailing characteristics",
    "explanation": "'Describir' implica detallar las características de un objeto o escenario.",
    "context": "Also, 'describe' involves detailing the characteristics of an object or scenario, critical in observational research.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 10),
    "type": "multiple-choice",
    "question": "In developing thesis statements, what does 'argue' involve?",
    "options": [
      "Judging value",
      "Combining ideas",
      "Presenting and defending a viewpoint",
      "Measuring evidence"
    ],
    "correctAnswer": "Presenting and defending a viewpoint",
    "explanation": "'Argumentar' implica presentar y defender un punto de vista.",
    "context": "Finally, 'argue' is vital in developing thesis statements where you need to present and defend a viewpoint.",
    "points": 1
  }
]
};
const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Transition Words',
  transcript: `Good morning, class. Today we're discussing transition words, a crucial part of writing. Transition words are like bridges, helping you connect ideas smoothly. For example, 'therefore' shows cause and effect, as in 'The experiment failed; therefore, we need to try again.' On the other hand, 'however' is used to present a contrast. Imagine saying, 'She is skilled at painting; however, she dislikes doing it.' Notice how the contrast is clear? Another group includes words like 'next' and 'finally,' which organize ideas sequentially. First, 'next' indicates a continuation or succession of points. For instance, 'Prepare your ingredients. Next, start mixing the batter.' As a result, your instructions are easy to follow. 'Finally,' signals the last point, ensuring your structure is organized, such as 'Finally, bake the cake for 30 minutes.' Let's recap: Transition words are essential for clarity and flow in your writing. Keep practicing them while drafting your essays.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 1),
    "type": "multiple-choice",
    "question": "What purpose does the word 'therefore' serve in the transcript?",
    "options": [
      "To show contrast",
      "To indicate cause and effect",
      "To add extra information",
      "To list a sequence"
    ],
    "correctAnswer": "To indicate cause and effect",
    "explanation": "La palabra 'therefore' se usa para mostrar una relación de causa y efecto, como se explicó en el ejemplo mencionado en la clase.",
    "context": "'The experiment failed; therefore, we need to try again.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 2),
    "type": "multiple-choice",
    "question": "Which transition word is used to present a contrast in the transcript?",
    "options": [
      "Therefore",
      "However",
      "Next",
      "Finally"
    ],
    "correctAnswer": "However",
    "explanation": "'However' es una palabra de transición que se utiliza para presentar un contraste, como se ilustró con el ejemplo de la clase.",
    "context": "'She is skilled at painting; however, she dislikes doing it.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 3),
    "type": "multiple-choice",
    "question": "What is the function of the word 'next' in sequencing?",
    "options": [
      "It concludes an idea",
      "It indicates the end of a list",
      "It shows continuation or succession",
      "It provides an example"
    ],
    "correctAnswer": "It shows continuation or succession",
    "explanation": "La palabra 'next' se usa para mostrar la continuación o la sucesión de ideas, lo cual es importante para la secuenciación.",
    "context": "'Prepare your ingredients. Next, start mixing the batter.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 4),
    "type": "multiple-choice",
    "question": "Which word signals the final point in a structured list or sequence?",
    "options": [
      "Therefore",
      "Next",
      "First",
      "Finally"
    ],
    "correctAnswer": "Finally",
    "explanation": "'Finally' se utiliza para señalar el último punto en una secuencia, asegurando que la estructura esté organizada correctamente.",
    "context": "'Finally, bake the cake for 30 minutes.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 5),
    "type": "multiple-choice",
    "question": "How does the instructor describe transition words?",
    "options": [
      "As simple words",
      "As grammatical errors",
      "As crucial parts of writing",
      "As vocabulary builders"
    ],
    "correctAnswer": "As crucial parts of writing",
    "explanation": "El instructor describe las palabras de transición como partes cruciales de la escritura, enfatizando su importancia.",
    "context": "'Today we're discussing transition words, a crucial part of writing.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 6),
    "type": "multiple-choice",
    "question": "What analogy is used to describe transition words?",
    "options": [
      "Bridges connecting ideas",
      "Obstacles in writing",
      "Building blocks of paragraphs",
      "Decorations in essays"
    ],
    "correctAnswer": "Bridges connecting ideas",
    "explanation": "Las palabras de transición se comparan con 'puentes' que ayudan a conectar ideas suavemente.",
    "context": "'Transition words are like bridges, helping you connect ideas smoothly.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 7),
    "type": "multiple-choice",
    "question": "According to the transcript, what does 'first' typically introduce?",
    "options": [
      "A conclusion",
      "A cause",
      "The initial step in a sequence",
      "A contrasting idea"
    ],
    "correctAnswer": "The initial step in a sequence",
    "explanation": "'First' se usa típicamente para presentar el primer paso en una secuencia.",
    "context": "It does not relate directly but is inferred from the usage of words like 'next' and 'finally'.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 8),
    "type": "multiple-choice",
    "question": "Why are transition words important according to the transcript?",
    "options": [
      "They enhance vocabulary",
      "They make writing clearer and smoother",
      "They confuse readers",
      "They replace punctuation"
    ],
    "correctAnswer": "They make writing clearer and smoother",
    "explanation": "Las palabras de transición son importantes porque hacen que la escritura sea más clara y fluida.",
    "context": "Transition words are essential for clarity and flow in your writing.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 9),
    "type": "multiple-choice",
    "question": "What does 'as a result' indicate in writing?",
    "options": [
      "A comparison",
      "A sequence",
      "An effect or consequence",
      "An introduction"
    ],
    "correctAnswer": "An effect or consequence",
    "explanation": "La frase 'as a result' indica un efecto o una consecuencia, vinculando así ideas de manera lógica.",
    "context": "'As a result, your instructions are easy to follow.'",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's10', 10),
    "type": "multiple-choice",
    "question": "In what context does the instructor suggest practicing transition words?",
    "options": [
      "While drafting essays",
      "During leisure reading",
      "In mathematical problems",
      "In scientific experiments"
    ],
    "correctAnswer": "While drafting essays",
    "explanation": "El instructor sugiere practicar las palabras de transición mientras se redactan ensayos, lo que resalta su aplicabilidad en la escritura.",
    "context": "'Keep practicing them while drafting your essays.'",
    "points": 1
  }
]
};
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Placeholder Shard 3',
  transcript: `Good afternoon, everyone. Today we're going to discuss the basics of renewable energy. Renewable energy comes from natural sources like the sun, wind, and water, which are constantly replenished. Unlike fossil fuels, which can take millions of years to form and are being depleted by current use, renewable sources can help us reduce our carbon footprint. Solar power harnesses energy from the sun using photovoltaic cells. Wind energy uses turbines to convert wind into electricity. Meanwhile, hydropower captures energy from moving water. Let's focus first on the advantages and challenges of solar energy. One major benefit is that solar panels produce no pollution during operation. However, their efficiency can be lower in cloudy weather, and they require a large surface area. It's also important to consider the initial cost of installation. Similarly, wind energy is clean and abundant but may face challenges with location suitability and noise. Remember, the transition to renewables plays a crucial role in sustainable development. Now, let’s address your questions.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 1),
    "type": "multiple-choice",
    "question": "What is renewable energy?",
    "options": [
      "Energy from natural sources",
      "Energy from fossil fuels",
      "Energy that is not replenished",
      "Energy that is not used"
    ],
    "correctAnswer": "Energy from natural sources",
    "explanation": "La energía renovable proviene de fuentes naturales que se reponen constantemente.",
    "context": "Renewable energy comes from natural sources like the sun, wind, and water, which are constantly replenished.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 2),
    "type": "multiple-choice",
    "question": "What is a disadvantage of solar energy mentioned in the lecture?",
    "options": [
      "High pollution levels",
      "High initial cost",
      "Inability to work at night",
      "Limited availability"
    ],
    "correctAnswer": "High initial cost",
    "explanation": "El costo inicial de instalación de paneles solares es alto.",
    "context": "It's also important to consider the initial cost of installation.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 3),
    "type": "multiple-choice",
    "question": "How do solar panels generate energy?",
    "options": [
      "Using turbines",
      "With photovoltaic cells",
      "By capturing moving water",
      "Through burning fuels"
    ],
    "correctAnswer": "With photovoltaic cells",
    "explanation": "Los paneles solares utilizan celdas fotovoltaicas para capturar la energía del sol.",
    "context": "Solar power harnesses energy from the sun using photovoltaic cells.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 4),
    "type": "multiple-choice",
    "question": "What is one advantage of wind energy?",
    "options": [
      "Produces pollution",
      "Abundant and clean",
      "Requires a small area",
      "High efficiency in rain"
    ],
    "correctAnswer": "Abundant and clean",
    "explanation": "La energía eólica es abundante y no contamina.",
    "context": "Similarly, wind energy is clean and abundant but may face challenges with location suitability and noise.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 5),
    "type": "multiple-choice",
    "question": "What challenge does wind energy face?",
    "options": [
      "Too quiet",
      "Not enough turbines",
      "Location suitability",
      "High pollution levels"
    ],
    "correctAnswer": "Location suitability",
    "explanation": "La energía eólica enfrenta desafíos relacionados con la idoneidad de su ubicación.",
    "context": "Wind energy is clean and abundant but may face challenges with location suitability and noise.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 6),
    "type": "multiple-choice",
    "question": "What is the environmental benefit of solar panels during operation?",
    "options": [
      "They produce noise",
      "They take up little space",
      "They produce no pollution",
      "They work in any weather"
    ],
    "correctAnswer": "They produce no pollution",
    "explanation": "Los paneles solares no generan contaminación durante su funcionamiento.",
    "context": "One major benefit is that solar panels produce no pollution during operation.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 7),
    "type": "multiple-choice",
    "question": "Why is renewable energy preferred over fossil fuels?",
    "options": [
      "It's cheaper",
      "It's less efficient",
      "It reduces our carbon footprint",
      "It uses more resources"
    ],
    "correctAnswer": "It reduces our carbon footprint",
    "explanation": "La energía renovable ayuda a reducir la huella de carbono.",
    "context": "Renewable sources can help us reduce our carbon footprint.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 8),
    "type": "multiple-choice",
    "question": "What renewable energy source uses turbines?",
    "options": [
      "Solar power",
      "Fossil fuels",
      "Wind energy",
      "Hydropower"
    ],
    "correctAnswer": "Wind energy",
    "explanation": "La energía eólica utiliza turbinas para convertir el viento en electricidad.",
    "context": "Wind energy uses turbines to convert wind into electricity.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 9),
    "type": "multiple-choice",
    "question": "What does hydropower capture?",
    "options": [
      "Energy from the sun",
      "Energy from burning coal",
      "Energy from moving water",
      "Energy from wind"
    ],
    "correctAnswer": "Energy from moving water",
    "explanation": "La energía hidroeléctrica captura energía del agua en movimiento.",
    "context": "Hydropower captures energy from moving water.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 10),
    "type": "multiple-choice",
    "question": "What is a challenge for solar panel efficiency?",
    "options": [
      "Windy weather",
      "Cloudy weather",
      "Too much sunlight",
      "Moving water"
    ],
    "correctAnswer": "Cloudy weather",
    "explanation": "La eficiencia de los paneles solares puede ser menor en climas nublados.",
    "context": "However, their efficiency can be lower in cloudy weather.",
    "points": 1
  }
]
};
const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Placeholder Shard 4',
  transcript: `Buenos días, estudiantes. Hoy vamos a hablar sobre la importancia de las plantas en nuestro ecosistema. Las plantas juegan un papel crucial al producir oxígeno a través de la fotosíntesis. Además, proporcionan alimento y refugio a muchos animales. Por ejemplo, los árboles ofrecen un hábitat esencial para aves y mamíferos pequeños.

Consideremos las plantas acuáticas, que son vitales para la salud de los ecosistemas acuáticos. Estas plantas no solo producen oxígeno para los organismos acuáticos, sino que también ayudan a filtrar el agua, mejorando así su calidad. Ahora, es importante mencionar que la deforestación y la contaminación pueden afectar negativamente a las plantas y, por ende, a todo el ecosistema dependiente de ellas. La deforestación reduce la cantidad de oxígeno en el aire y destruye hábitats. Mientras tanto, los contaminantes pueden dañar o matar las plantas, disminuyendo su capacidad para sostener vida.

Por último, vamos a explorar cómo nosotros, como individuos, podemos ayudar a proteger las plantas. Plantar un árbol, por ejemplo, contribuye positivamente al medio ambiente. También podemos participar en proyectos comunitarios para limpiar y conservar espacios naturales. En resumen, las plantas son esenciales para la vida, y es nuestra responsabilidad asegurarnos de protegerlas y preservarlas para las futuras generaciones.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 1),
    "type": "multiple-choice",
    "question": "¿Cuál es el papel principal de las plantas según el audio?",
    "options": [
      "Producir oxígeno",
      "Ofrecer alimento a los humanos",
      "Filtrar la luz solar",
      "Aumentar la temperatura del aire"
    ],
    "correctAnswer": "Producir oxígeno",
    "explanation": "Las plantas producen oxígeno a través de la fotosíntesis, lo cual es esencial para la vida en la Tierra.",
    "context": "Las plantas juegan un papel crucial al producir oxígeno a través de la fotosíntesis.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 2),
    "type": "multiple-choice",
    "question": "¿Qué efecto tiene la deforestación en los ecosistemas?",
    "options": [
      "Aumenta la calidad del agua",
      "Crea nuevos hábitats",
      "Reduce la cantidad de oxígeno en el aire",
      "Mejora la salud de las plantas acuáticas"
    ],
    "correctAnswer": "Reduce la cantidad de oxígeno en el aire",
    "explanation": "La deforestación reduce la cantidad de oxígeno en el aire y destruye hábitats.",
    "context": "La deforestación reduce la cantidad de oxígeno en el aire y destruye hábitats.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 3),
    "type": "multiple-choice",
    "question": "¿Cómo ayudan las plantas acuáticas a los ecosistemas acuáticos?",
    "options": [
      "Almacenan el agua",
      "Filtran el agua y mejoran su calidad",
      "Aumentan la temperatura del agua",
      "Impiden el paso de luz"
    ],
    "correctAnswer": "Filtran el agua y mejoran su calidad",
    "explanation": "Las plantas acuáticas ayudan a filtrar el agua, mejorando su calidad.",
    "context": "Estas plantas... ayudan a filtrar el agua, mejorando así su calidad.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 4),
    "type": "multiple-choice",
    "question": "¿Qué se puede hacer para ayudar a proteger las plantas?",
    "options": [
      "Cortar más árboles",
      "Plantar un árbol",
      "Usar pesticidas químicos",
      "Evitar el contacto directo con las plantas"
    ],
    "correctAnswer": "Plantar un árbol",
    "explanation": "Plantar un árbol contribuye positivamente al medio ambiente.",
    "context": "Plantar un árbol, por ejemplo, contribuye positivamente al medio ambiente.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 5),
    "type": "multiple-choice",
    "question": "¿Qué ocurre si los contaminantes afectan a las plantas?",
    "options": [
      "Se vuelven más saludables",
      "Aumentan la cantidad de oxígeno producido",
      "Pueden dañarse o morir",
      "Producen más alimentos para los animales"
    ],
    "correctAnswer": "Pueden dañarse o morir",
    "explanation": "Los contaminantes pueden dañar o matar las plantas.",
    "context": "Mientras tanto, los contaminantes pueden dañar o matar las plantas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 6),
    "type": "multiple-choice",
    "question": "¿Por qué los árboles son importantes para los animales?",
    "options": [
      "Ofrecen un hábitat esencial",
      "Aumentan la temperatura ambiente",
      "Reducen la cantidad de lluvia",
      "Producen sonidos relajantes"
    ],
    "correctAnswer": "Ofrecen un hábitat esencial",
    "explanation": "Los árboles ofrecen un hábitat esencial para aves y mamíferos pequeños.",
    "context": "Por ejemplo, los árboles ofrecen un hábitat esencial para aves y mamíferos pequeños.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 7),
    "type": "multiple-choice",
    "question": "¿Qué animal se menciona como beneficiario de los hábitats que proveen los árboles?",
    "options": [
      "Reptiles grandes",
      "Aves",
      "Peces",
      "Insectos"
    ],
    "correctAnswer": "Aves",
    "explanation": "Los árboles proporcionan un hábitat esencial para aves.",
    "context": "Por ejemplo, los árboles ofrecen un hábitat esencial para aves y mamíferos pequeños.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 8),
    "type": "multiple-choice",
    "question": "¿Qué se sugiere hacer en los proyectos comunitarios para ayudar al medio ambiente?",
    "options": [
      "Construir más edificios",
      "Limpiar y conservar espacios naturales",
      "Aumentar el uso de pesticidas",
      "Eliminar las plantas acuáticas"
    ],
    "correctAnswer": "Limpiar y conservar espacios naturales",
    "explanation": "Participar en proyectos comunitarios para limpiar y conservar espacios naturales ayuda al medio ambiente.",
    "context": "También podemos participar en proyectos comunitarios para limpiar y conservar espacios naturales.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 9),
    "type": "multiple-choice",
    "question": "¿Cuál es una consecuencia positiva de plantar un árbol mencionada en el audio?",
    "options": [
      "Disminuye la circulación de aire",
      "Incrementa la deforestación",
      "Contribuye positivamente al medio ambiente",
      "Reduce la calidad del suelo"
    ],
    "correctAnswer": "Contribuye positivamente al medio ambiente",
    "explanation": "Plantar un árbol contribuye positivamente al medio ambiente.",
    "context": "Plantar un árbol, por ejemplo, contribuye positivamente al medio ambiente.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 10),
    "type": "multiple-choice",
    "question": "¿Cómo se beneficia el ecosistema de las acciones humanas para proteger las plantas según el audio?",
    "options": [
      "Se protegen y preservan para las futuras generaciones",
      "Se destruyen más hábitats",
      "Se aumenta la contaminación del aire",
      "Se promueve el uso de pesticidas"
    ],
    "correctAnswer": "Se protegen y preservan para las futuras generaciones",
    "explanation": "Proteger y preservar las plantas asegura que estarán disponibles para futuras generaciones.",
    "context": "Es nuestra responsabilidad asegurarnos de protegerlas y preservarlas para las futuras generaciones.",
    "points": 1
  }
]
};
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Placeholder Shard 5',
  transcript: `Today we're going to discuss the basics of urban gardening. Many people are interested in growing their own food, even in crowded cities. Urban gardening allows individuals to plant a variety of fruits, vegetables, and herbs on balconies, rooftops, or even small indoor spaces. A popular method is container gardening, which uses pots or other containers filled with soil. This approach is flexible and can be adjusted to fit the available space. Furthermore, urban gardening is believed to reduce stress, promote a healthy lifestyle, and even improve air quality. Studies suggest that being around plants can improve our mood and lower anxiety levels. Besides, consuming fresh produce you’ve grown yourself is rewarding and often healthier. City residents also engage in community gardening, where they share plots of land, tools, and knowledge. This creates a support system among neighbors and promotes social interaction. Before starting, you should consider factors like sunlight exposure, water availability, and the types of plants suitable for your environment. Remember, urban gardening doesn’t require a green thumb; it’s all about learning and experimenting as you grow, literally.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 1),
    "type": "multiple-choice",
    "question": "What is urban gardening?",
    "options": [
      "A method of farming in rural areas",
      "Growing plants in containers in city environments",
      "A type of gardening that only uses traditional soil",
      "Planting trees in parks"
    ],
    "correctAnswer": "Growing plants in containers in city environments",
    "explanation": "La jardinería urbana implica cultivar plantas en entornos urbanos, típicamente en contenedores.",
    "context": "Urban gardening allows individuals to plant a variety of fruits, vegetables, and herbs on balconies, rooftops, or even small indoor spaces.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 2),
    "type": "multiple-choice",
    "question": "What is container gardening?",
    "options": [
      "Using large plots of land for gardening",
      "Gardening in pots or containers",
      "Only gardening indoors",
      "A special technique for growing corn"
    ],
    "correctAnswer": "Gardening in pots or containers",
    "explanation": "La jardinería en contenedores utiliza macetas u otros recipientes, lo que ofrece flexibilidad en espacios reducidos.",
    "context": "A popular method is container gardening, which uses pots or other containers filled with soil.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 3),
    "type": "multiple-choice",
    "question": "How can urban gardening benefit people?",
    "options": [
      "Increases stress levels",
      "Promotes an unhealthy lifestyle",
      "Improves air quality",
      "Is a waste of time"
    ],
    "correctAnswer": "Improves air quality",
    "explanation": "La jardinería urbana puede mejorar la calidad del aire al aumentar la vegetación en áreas urbanas.",
    "context": "Urban gardening is believed to reduce stress, promote a healthy lifestyle, and even improve air quality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 4),
    "type": "multiple-choice",
    "question": "What emotional benefit does being around plants provide?",
    "options": [
      "Increases anxiety levels",
      "Promotes loneliness",
      "Improves mood",
      "Causes frustration"
    ],
    "correctAnswer": "Improves mood",
    "explanation": "Estar cerca de plantas puede mejorar nuestro estado de ánimo, reduciendo la ansiedad.",
    "context": "Studies suggest that being around plants can improve our mood and lower anxiety levels.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 5),
    "type": "multiple-choice",
    "question": "What do city residents do in community gardening?",
    "options": [
      "Use only their own land",
      "Garden competitively",
      "Share plots and tools",
      "Refuse to share knowledge"
    ],
    "correctAnswer": "Share plots and tools",
    "explanation": "La jardinería comunitaria promueve la cooperación al compartir terrenos, herramientas y conocimiento.",
    "context": "City residents also engage in community gardening, where they share plots of land, tools, and knowledge.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 6),
    "type": "multiple-choice",
    "question": "What should one consider before starting urban gardening?",
    "options": [
      "The color of the pots",
      "Sunlight exposure and water availability",
      "The age of the gardener",
      "The season of the year"
    ],
    "correctAnswer": "Sunlight exposure and water availability",
    "explanation": "Factores como la luz solar y la disponibilidad de agua son cruciales para el éxito de la jardinería urbana.",
    "context": "Before starting, you should consider factors like sunlight exposure, water availability, and the types of plants suitable for your environment.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 7),
    "type": "multiple-choice",
    "question": "How is urban gardening described in terms of skill required?",
    "options": [
      "Requires a green thumb",
      "Needs a farming degree",
      "Involves heavy machinery",
      "Is about learning and experimenting"
    ],
    "correctAnswer": "Is about learning and experimenting",
    "explanation": "La jardinería urbana se basa en aprender y experimentar, no en tener habilidades avanzadas desde el principio.",
    "context": "Remember, urban gardening doesn’t require a green thumb; it’s all about learning and experimenting as you grow, literally.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 8),
    "type": "multiple-choice",
    "question": "Why might consuming freshly grown produce be advantageous?",
    "options": [
      "It's less healthy",
      "It's more expensive",
      "It's rewarding and healthier",
      "It's difficult to find"
    ],
    "correctAnswer": "It's rewarding and healthier",
    "explanation": "Consumir productos frescos cultivados por uno mismo suele ser más saludable y gratificante.",
    "context": "Consuming fresh produce you’ve grown yourself is rewarding and often healthier.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 9),
    "type": "multiple-choice",
    "question": "What do community gardens create among neighbors?",
    "options": [
      "Hostility",
      "A support system",
      "Disconnection",
      "Competition"
    ],
    "correctAnswer": "A support system",
    "explanation": "Los jardines comunitarios fomentan la creación de un sistema de apoyo entre los vecinos.",
    "context": "This creates a support system among neighbors and promotes social interaction.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 10),
    "type": "multiple-choice",
    "question": "What is not a benefit of urban gardening according to the transcript?",
    "options": [
      "Improves sleep quality",
      "Reduces stress",
      "Promotes a healthy lifestyle",
      "Improves air quality"
    ],
    "correctAnswer": "Improves sleep quality",
    "explanation": "El texto no menciona que la jardinería urbana mejore la calidad del sueño.",
    "context": "Urban gardening is believed to reduce stress, promote a healthy lifestyle, and even improve air quality.",
    "points": 1
  }
]
};
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Placeholder Shard 7',
  transcript: `Welcome everyone to today's discussion on urban gardening. As we've seen cities grow, the concept of urban gardening has gained popularity. Urban gardening involves cultivating plants in cities, often using spaces like balconies, rooftops, and community gardens. It's a great way for city dwellers to grow their own food. One key advantage is that it brings fresh produce to places where it might be harder to access otherwise. Urban gardens also help improve air quality and can reduce urban heat. Furthermore, it provides educational opportunities for children and adults alike to learn about botany and sustainability. Now, let's talk about different types of plants suitable for urban gardening. Leafy greens such as lettuce and spinach are popular due to their quick growth and easy maintenance. Herbs like basil and mint are also favorites. In terms of setup, vertical gardens are becoming increasingly popular as they save space and can be set up against walls or fences. These methods give people with limited space a chance to cultivate a garden. Finally, remember that keeping an urban garden requires regular maintenance like watering and occasional fertilizing to keep plants healthy. So, who here has tried urban gardening before, and what were your experiences?`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 1),
    "type": "multiple-choice",
    "question": "What is the primary focus of the discussion?",
    "options": [
      "The benefits of urban gardening",
      "The history of urban gardening",
      "The challenges of rural farming",
      "The difference between rural and urban lifestyles"
    ],
    "correctAnswer": "The benefits of urban gardening",
    "explanation": "La discusión se centra principalmente en los beneficios de la jardinería urbana.",
    "context": "The concept of urban gardening has gained popularity",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 2),
    "type": "multiple-choice",
    "question": "Which of the following is mentioned as a benefit of urban gardening?",
    "options": [
      "Increased stress levels",
      "Improved access to fresh produce",
      "Higher grocery bills",
      "Larger living spaces"
    ],
    "correctAnswer": "Improved access to fresh produce",
    "explanation": "La jardinería urbana mejora el acceso a productos frescos, como se menciona en el texto.",
    "context": "It's a great way for city dwellers to grow their own food.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 3),
    "type": "multiple-choice",
    "question": "What are vertical gardens most beneficial for?",
    "options": [
      "Providing shade",
      "Saving space",
      "Reducing noise pollution",
      "Enhancing privacy"
    ],
    "correctAnswer": "Saving space",
    "explanation": "Los jardines verticales son beneficiosos para ahorrar espacio, dado el espacio limitado en las ciudades.",
    "context": "Vertical gardens are becoming increasingly popular as they save space.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 4),
    "type": "multiple-choice",
    "question": "Which plants are suggested as good options for urban gardening?",
    "options": [
      "Leafy greens and herbs",
      "Tropical fruits and palms",
      "Large trees and shrubs",
      "Desert cacti and succulents"
    ],
    "correctAnswer": "Leafy greens and herbs",
    "explanation": "Se sugieren verduras de hoja y hierbas como plantas adecuadas para la jardinería urbana.",
    "context": "Leafy greens such as lettuce and spinach are popular.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 5),
    "type": "multiple-choice",
    "question": "What does urban gardening provide educational opportunities for?",
    "options": [
      "Learning about fashion",
      "Understanding meteorology",
      "Studying botany and sustainability",
      "Exploring ancient history"
    ],
    "correctAnswer": "Studying botany and sustainability",
    "explanation": "La jardinería urbana ofrece oportunidades educativas en botánica y sostenibilidad.",
    "context": "It provides educational opportunities for children and adults alike to learn about botany and sustainability.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 6),
    "type": "multiple-choice",
    "question": "Why might urban gardening help reduce urban heat?",
    "options": [
      "Plants block sunlight",
      "Plants absorb CO2 and cool the air",
      "Gardens reflect more sunlight",
      "Gardening requires less energy"
    ],
    "correctAnswer": "Plants absorb CO2 and cool the air",
    "explanation": "Las plantas absorben CO2 y pueden enfriar el aire, lo que ayuda a reducir el calor urbano.",
    "context": "Urban gardens also help improve air quality and can reduce urban heat.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 7),
    "type": "multiple-choice",
    "question": "What type of space is commonly used for urban gardening?",
    "options": [
      "Community parks",
      "Underground tunnels",
      "Balconies and rooftops",
      "Closed office rooms"
    ],
    "correctAnswer": "Balconies and rooftops",
    "explanation": "Los balcones y azoteas son espacios comunes utilizados para la jardinería urbana.",
    "context": "Urban gardening involves cultivating plants in cities, often using spaces like balconies, rooftops.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 8),
    "type": "multiple-choice",
    "question": "What is required to keep an urban garden healthy?",
    "options": [
      "Constant lighting",
      "Regular maintenance",
      "Occasional neglect",
      "Daily soil changes"
    ],
    "correctAnswer": "Regular maintenance",
    "explanation": "Un jardín urbano requiere mantenimiento regular para mantener las plantas saludables.",
    "context": "Remember that keeping an urban garden requires regular maintenance like watering.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 9),
    "type": "multiple-choice",
    "question": "Who is the speaker likely addressing?",
    "options": [
      "Professional landscape architects",
      "Urban residents interested in gardening",
      "High school science teachers",
      "Supermarket owners"
    ],
    "correctAnswer": "Urban residents interested in gardening",
    "explanation": "El ponente probablemente se dirige a los residentes urbanos interesados en la jardinería.",
    "context": "Welcome everyone to today's discussion on urban gardening.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 10),
    "type": "multiple-choice",
    "question": "What question does the speaker end the discussion with?",
    "options": [
      "How much does urban gardening cost?",
      "Who here has tried urban gardening before?",
      "What plants grow best in shady areas?",
      "Why is rural gardening different?"
    ],
    "correctAnswer": "Who here has tried urban gardening before?",
    "explanation": "El orador termina la discusión preguntando sobre la experiencia previa de los asistentes con la jardinería urbana.",
    "context": "So, who here has tried urban gardening before, and what were your experiences?",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Placeholder Shard 8',
  transcript: `Welcome to today's lesson on climate change impacts on agriculture. As you know, agriculture depends heavily on weather conditions. Climate change is altering weather patterns, leading to shifts in growing seasons. For example, farmers in certain areas may now experience longer dry spells or more intense rainy periods, which can impact crop yields. Additionally, temperature changes can influence the types of crops that can be grown in a region. In recent years, some farmers have had to switch crops entirely to adapt to warmer climates. While technological advancements, such as drought-resistant seeds, offer some solutions, these changes require significant investments. Furthermore, climate change also increases the frequency of extreme weather events like hurricanes and floods, which can cause severe damage to crops and farmland. It's crucial that we understand these impacts and work towards sustainable farming practices to ensure food security for the future.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "What are the two main changes in weather patterns mentioned that impact agriculture?",
    "options": [
      "Longer dry spells and more intense rainy periods",
      "Shorter winters and longer summers",
      "Less sunlight and colder temperatures",
      "Consistent rainfall and stable temperatures"
    ],
    "correctAnswer": "Longer dry spells and more intense rainy periods",
    "explanation": "La transcripción menciona claramente que el cambio climático está alterando los patrones climáticos, específicamente causando períodos de sequía más largos y períodos de lluvia más intensos.",
    "context": "Climate change is altering weather patterns, leading to shifts in growing seasons. Farmers in certain areas may now experience longer dry spells or more intense rainy periods."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "Why might farmers need to switch crops due to climate change?",
    "options": [
      "To reduce pest infestations",
      "To adapt to warmer climates",
      "To increase profits",
      "To use less water"
    ],
    "correctAnswer": "To adapt to warmer climates",
    "explanation": "En la charla se menciona que, debido a los cambios de temperatura, algunos agricultores han tenido que cambiar de cultivos para adaptarse a climas más cálidos.",
    "context": "Temperature changes can influence the types of crops that can be grown in a region. Some farmers have had to switch crops entirely to adapt to warmer climates."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "What solution is mentioned to help farmers deal with drought?",
    "options": [
      "Drought-resistant seeds",
      "More efficient irrigation systems",
      "Organic farming methods",
      "Using fertilizers"
    ],
    "correctAnswer": "Drought-resistant seeds",
    "explanation": "En la transcripción se menciona el uso de semillas resistentes a la sequía como una solución para los campesinos que enfrentan condiciones de sequía.",
    "context": "While technological advancements, such as drought-resistant seeds, offer some solutions, these changes require significant investments."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "What investment is mentioned as necessary for adapting to climate change in agriculture?",
    "options": [
      "High-tech machinery",
      "Significant investments in new solutions",
      "Large tracts of farmland",
      "Government subsidies"
    ],
    "correctAnswer": "Significant investments in new solutions",
    "explanation": "La charla destaca que las soluciones tecnológicas requieren inversiones significativas, lo cual es un desafío para los agricultores.",
    "context": "These changes require significant investments."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What is a consequence of the increased frequency of extreme weather events?",
    "options": [
      "Improved crop variety",
      "Severe damage to crops and farmland",
      "More predictable weather patterns",
      "Increased agricultural exports"
    ],
    "correctAnswer": "Severe damage to crops and farmland",
    "explanation": "En la transcripción se declara que eventos climáticos extremos como huracanes e inundaciones pueden causar un daño severo a los cultivos y tierras agrícolas.",
    "context": "Climate change also increases the frequency of extreme weather events like hurricanes and floods, which can cause severe damage to crops and farmland."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What does the speaker emphasize as crucial for the future of food security?",
    "options": [
      "Increased food imports",
      "Working towards sustainable farming practices",
      "Expanding urban areas",
      "Lowering crop prices"
    ],
    "correctAnswer": "Working towards sustainable farming practices",
    "explanation": "El narrador destaca la importancia de las prácticas agrícolas sostenibles para asegurar la seguridad alimentaria en el futuro.",
    "context": "It's crucial that we understand these impacts and work towards sustainable farming practices to ensure food security for the future."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "What is one example given of how climate change can affect the types of crops grown?",
    "options": [
      "Crops may yield double the produce",
      "Farmers might need to grow different crops due to warmer climates",
      "Crops will require less sunlight",
      "The soil quality will improve drastically"
    ],
    "correctAnswer": "Farmers might need to grow different crops due to warmer climates",
    "explanation": "El texto indica que debido a los cambios de temperatura, los agricultores podrían necesitar cultivar diferentes tipos de productos que se adapten mejor a los nuevos climas.",
    "context": "Temperature changes can influence the types of crops that can be grown in a region. Some farmers have had to switch crops entirely to adapt to warmer climates."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What is a challenge mentioned for adopting new agricultural technology?",
    "options": [
      "Lack of skilled labor",
      "Requirement of significant investments",
      "Limited research data",
      "Environmental regulations"
    ],
    "correctAnswer": "Requirement of significant investments",
    "explanation": "La transcripción menciona como desafío principal para adoptar nuevas tecnologías el requerimiento de inversiones significativas.",
    "context": "These changes require significant investments."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "Why is the understanding of climate impacts on agriculture important?",
    "options": [
      "To increase crop prices",
      "To prevent agricultural exports",
      "To ensure future food security",
      "To limit technological advancements"
    ],
    "correctAnswer": "To ensure future food security",
    "explanation": "El texto concluye que es crucial entender cómo el cambio climático afecta la agricultura para garantizar la seguridad alimentaria en el futuro.",
    "context": "It's crucial that we understand these impacts and work towards sustainable farming practices to ensure food security for the future."
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "How might new technology help farmers cope with climate change?",
    "options": [
      "By lowering overall production costs",
      "Through the development of drought-resistant seeds",
      "By increasing farm sizes",
      "Through reducing market competition"
    ],
    "correctAnswer": "Through the development of drought-resistant seeds",
    "explanation": "La transcripción menciona específicamente el desarrollo de semillas resistentes a la sequía como una ayuda tecnológica para los agricultores.",
    "context": "While technological advancements, such as drought-resistant seeds, offer some solutions, these changes require significant investments."
  }
]
};
const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'listening',
  title: 'Placeholder Shard 9',
  transcript: `Welcome to our introduction on urban gardening. Today, we're discussing its benefits and how you can start your own garden even in a small city apartment. Urban gardening brings nature into urban spaces, promoting relaxation and improving air quality. Let's explore some basics. First, consider containers suitable for small spaces, like balconies or windowsills. Herbs like basil and mint are great for beginners. They require minimal space and care. Also, using vertical spaces by installing shelves or hanging planters can maximize gardening areas. Remember, sunlight is crucial, so choose spots in your home that get direct sunlight for at least six hours a day. Additionally, watering needs vary, so research each plant's needs. We'll talk about this more in the coming sessions.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 1),
    "type": "multiple-choice",
    "question": "According to the speaker, what is one benefit of urban gardening mentioned?",
    "options": [
      "It reduces water use.",
      "It promotes relaxation.",
      "It is cost-free.",
      "It decreases city noise."
    ],
    "correctAnswer": "It promotes relaxation.",
    "explanation": "Una de las ventajas mencionadas del jardín urbano es la promoción de la relajación.",
    "context": "Urban gardening brings nature into urban spaces, promoting relaxation.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 2),
    "type": "multiple-choice",
    "question": "What is suggested for someone with limited space?",
    "options": [
      "Planting trees.",
      "Using large containers.",
      "Using vertical spaces.",
      "Growing only flowers."
    ],
    "correctAnswer": "Using vertical spaces.",
    "explanation": "Se sugiere utilizar espacios verticales como las estanterías para maximizar el espacio de jardinería.",
    "context": "Using vertical spaces by installing shelves or hanging planters can maximize gardening areas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 3),
    "type": "multiple-choice",
    "question": "Which types of plants are recommended for beginners?",
    "options": [
      "Trees and shrubs.",
      "Flowers and vines.",
      "Herbs like basil and mint.",
      "Cacti and succulents."
    ],
    "correctAnswer": "Herbs like basil and mint.",
    "explanation": "Los principiantes deberían empezar con hierbas como la albahaca y menta, que son fáciles de cultivar.",
    "context": "Herbs like basil and mint are great for beginners.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 4),
    "type": "multiple-choice",
    "question": "What is important to ensure plant growth?",
    "options": [
      "Having well-decorated pots.",
      "Purchasing expensive soil.",
      "Ensuring six hours of sunlight.",
      "Playing music to the plants."
    ],
    "correctAnswer": "Ensuring six hours of sunlight.",
    "explanation": "La luz solar es crucial, por lo que los lugares deben recibir al menos seis horas de luz directa al día.",
    "context": "sunlight is crucial, so choose spots in your home that get direct sunlight for at least six hours a day.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 5),
    "type": "multiple-choice",
    "question": "How can one adapt gardening for a balcony?",
    "options": [
      "Using only indoor plants.",
      "Purchasing a greenhouse.",
      "Selecting suitable containers.",
      "Growing plants without sunlight."
    ],
    "correctAnswer": "Selecting suitable containers.",
    "explanation": "Las macetas adecuadas para espacios pequeños, como balcones, son esenciales para adaptar el jardín.",
    "context": "consider containers suitable for small spaces, like balconies or windowsills.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 6),
    "type": "multiple-choice",
    "question": "What does the speaker propose for maximizing gardening areas?",
    "options": [
      "Increasing sunlight exposure.",
      "Adding more soil to each pot.",
      "Installing shelves or hanging planters.",
      "Growing plants in water."
    ],
    "correctAnswer": "Installing shelves or hanging planters.",
    "explanation": "El ponente menciona que instalar estanterías o maceteros colgantes ayuda a maximizar las áreas de jardinería.",
    "context": "using vertical spaces by installing shelves or hanging planters can maximize gardening areas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 7),
    "type": "multiple-choice",
    "question": "Why is understanding watering needs important?",
    "options": [
      "Plants have different water needs.",
      "It's the only care requirement.",
      "All plants need equal water.",
      "Watering is only for outdoor plants."
    ],
    "correctAnswer": "Plants have different water needs.",
    "explanation": "Comprender las necesidades de riego es importante porque las plantas tienen diferentes requerimientos de agua.",
    "context": "water needs vary, so research each plant's needs.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 8),
    "type": "multiple-choice",
    "question": "What topics will be covered in future sessions?",
    "options": [
      "How to choose garden furniture.",
      "Detailed plant care instructions.",
      "Benefits of indoor lighting options.",
      "History of urban gardening."
    ],
    "correctAnswer": "Detailed plant care instructions.",
    "explanation": "El próximo tema incluirá más información sobre el cuidado detallado de las plantas.",
    "context": "We'll talk about this more in the coming sessions.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 9),
    "type": "multiple-choice",
    "question": "What is the primary focus of the talk?",
    "options": [
      "The history of urban gardening.",
      "Basic information for beginners.",
      "Advanced gardening techniques.",
      "The economics of gardening."
    ],
    "correctAnswer": "Basic information for beginners.",
    "explanation": "El enfoque principal es proporcionar información básica para principiantes sobre el jardín urbano.",
    "context": "We're discussing its benefits and how you can start your own garden even in a small city apartment.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's9', 10),
    "type": "multiple-choice",
    "question": "What is NOT mentioned as a container type?",
    "options": [
      "Traditional pots.",
      "Vertical planters.",
      "Windowsill containers.",
      "Greenhouse containers."
    ],
    "correctAnswer": "Greenhouse containers.",
    "explanation": "El texto no menciona específicamente el uso de contenedores de invernadero.",
    "context": "consider containers suitable for small spaces, like balconies or windowsills.",
    "points": 1
  }
]
};


const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Placeholder Shard 2',
  transcript: `Welcome to our lecture today on the basics of plant biology. Plants are vital to life on Earth because they produce oxygen through the process of photosynthesis. Let's begin with the structure of a typical plant. A plant is usually composed of roots, stems, and leaves. Roots are responsible for absorbing water and nutrients from the soil. Stems support the plant and transport nutrients and water throughout the organism. Leaves are the primary sites for photosynthesis. Photosynthesis is how plants create energy and involves converting carbon dioxide and water into glucose and oxygen using sunlight. Now, let's talk about plant reproduction. Most plants reproduce using flowers, which contain reproductive organs. Pollination often occurs with the help of insects or the wind. Once pollination happens, seeds are produced, allowing for new plant growth. In addition to reproduction, plants have adaptations to help them survive in different environments. Some plants have thick leaves to store water, while others have long roots to reach underground water. Understanding these basic plant functions and adaptations is critical for fields such as agriculture, conservation, and environmental science. Thank you for joining today's session on plant biology.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 1),
    "type": "multiple-choice",
    "question": "What is NOT a part of a typical plant structure?",
    "options": [
      "Roots",
      "Stem",
      "Leaves",
      "Wings"
    ],
    "correctAnswer": "Wings",
    "explanation": "Las plantas típicas no tienen alas como parte de su estructura.",
    "context": "A plant is usually composed of roots, stems, and leaves.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 2),
    "type": "multiple-choice",
    "question": "What is the main function of leaves in a plant?",
    "options": [
      "Storing water",
      "Photosynthesis",
      "Reproduction",
      "Absorbing nutrients"
    ],
    "correctAnswer": "Photosynthesis",
    "explanation": "Las hojas son los principales sitios de fotosíntesis.",
    "context": "Leaves are the primary sites for photosynthesis.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 3),
    "type": "multiple-choice",
    "question": "How do plants create energy?",
    "options": [
      "Through respiration",
      "By photosynthesis",
      "With pollination",
      "Via decomposition"
    ],
    "correctAnswer": "By photosynthesis",
    "explanation": "Las plantas crean energía mediante la fotosíntesis.",
    "context": "Photosynthesis is how plants create energy and involves converting carbon dioxide and water into glucose and oxygen using sunlight.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 4),
    "type": "multiple-choice",
    "question": "What is the role of roots in a plant?",
    "options": [
      "Reproducing new plants",
      "Converting sunlight into energy",
      "Absorbing water and nutrients",
      "Emitting oxygen"
    ],
    "correctAnswer": "Absorbing water and nutrients",
    "explanation": "Las raíces absorben agua y nutrientes del suelo.",
    "context": "Roots are responsible for absorbing water and nutrients from the soil.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 5),
    "type": "multiple-choice",
    "question": "What helps in the process of plant pollination?",
    "options": [
      "Insects",
      "Photosynthesis",
      "Glucose",
      "Sunlight"
    ],
    "correctAnswer": "Insects",
    "explanation": "Los insectos ayudan en la polinización transportando el polen.",
    "context": "Pollination often occurs with the help of insects or the wind.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 6),
    "type": "multiple-choice",
    "question": "What happens after pollination in plants?",
    "options": [
      "Photosynthesis",
      "Seed production",
      "Water absorption",
      "Nutrient transport"
    ],
    "correctAnswer": "Seed production",
    "explanation": "Después de la polinización, se producen semillas para el crecimiento de nuevas plantas.",
    "context": "Once pollination happens, seeds are produced, allowing for new plant growth.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 7),
    "type": "multiple-choice",
    "question": "Why is photosynthesis critical for life on Earth?",
    "options": [
      "It stores water",
      "It produces oxygen",
      "It creates glucose",
      "It pollinates flowers"
    ],
    "correctAnswer": "It produces oxygen",
    "explanation": "La fotosíntesis es crítica porque produce oxígeno necesario para la vida.",
    "context": "Plants are vital to life on Earth because they produce oxygen through the process of photosynthesis.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 8),
    "type": "multiple-choice",
    "question": "What adaptation might a plant in a dry area have?",
    "options": [
      "Bright flowers",
      "Thick leaves",
      "Short stems",
      "Shallow roots"
    ],
    "correctAnswer": "Thick leaves",
    "explanation": "Las plantas en áreas secas pueden tener hojas gruesas para almacenar agua.",
    "context": "Some plants have thick leaves to store water.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 9),
    "type": "multiple-choice",
    "question": "What do plants convert during photosynthesis?",
    "options": [
      "Oxygen and glucose",
      "Oxygen and sunlight",
      "Carbon dioxide and water",
      "Water and glucose"
    ],
    "correctAnswer": "Carbon dioxide and water",
    "explanation": "Durante la fotosíntesis, las plantas convierten dióxido de carbono y agua.",
    "context": "Photosynthesis is how plants create energy and involves converting carbon dioxide and water into glucose and oxygen using sunlight.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 10),
    "type": "multiple-choice",
    "question": "Why is understanding plant adaptations important?",
    "options": [
      "For animal conservation",
      "Improving photosynthesis",
      "For agriculture and environmental science",
      "Enhancing flower colors"
    ],
    "correctAnswer": "For agriculture and environmental science",
    "explanation": "Entender las adaptaciones de las plantas es importante para la agricultura y la ciencia ambiental.",
    "context": "Understanding these basic plant functions and adaptations is critical for fields such as agriculture, conservation, and environmental science.",
    "points": 1
  }
]
};

export const B1_WEEK_1 = createShardedToeflUnit(
  'toefl-b1-w1',
  'Week 1: Foundations of Campus Life',
  'A massive introduction to everything you need to start your TOEFL journey.',
  ['Master 100 essential campus concepts', 'Develop academic listening stamina', 'Perfect core grammar structures'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
