
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U10_BLOCK1: Exercise = {
  "id": "c2-u10-b1",
  "type": "vocabulary",
  "title": "Block 1: Scientific Breakthroughs",
  "explanation": "Advanced vocabulary related to research, innovation, and scientific discovery.",
  "questions": [
    {
      "id": "c2-u10-b1-q1",
      "type": "multiple-choice",
      "question": "What is a 'paradigm shift' in science?",
      "options": ["A small improvement", "A fundamental change in approach or underlying assumptions", "A laboratory accident", "A type of chemical reaction"],
      "correctAnswer": "A fundamental change in approach or underlying assumptions",
      "explanation": "Un 'paradigm shift' es un cambio de paradigma o giro radical en la ciencia.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q2",
      "type": "fill-blank",
      "question": "The researchers made a ________ discovery that could cure the disease.",
      "correctAnswer": "groundbreaking",
      "explanation": "'Groundbreaking' significa innovador o revolucionario.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q3",
      "type": "key-word-transformation",
      "sentence": "The experiment was successful beyond all expectations.",
      "keyWord": "EXCEEDED",
      "startOfAnswer": "The success of the experiment",
      "correctAnswer": "The success of the experiment exceeded all expectations.",
      "explanation": "'Exceeded' es superar.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q4",
      "type": "multiple-choice",
      "question": "What does it mean if a study is 'peer-reviewed'?",
      "options": ["It was written by students", "It was evaluated by experts in the same field before publication", "It was published in a newspaper", "It was paid for by the government"],
      "correctAnswer": "It was evaluated by experts in the same field before publication",
      "explanation": "La revisión por pares asegura la calidad científica.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q5",
      "type": "fill-blank",
      "question": "The data ________ the theory that climate change is accelerating.",
      "correctAnswer": "corroborates",
      "explanation": "'Corroborate' es corroborar o confirmar con pruebas.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q6",
      "type": "key-word-transformation",
      "sentence": "They are on the verge of a major discovery.",
      "keyWord": "BRINK",
      "startOfAnswer": "They are on the",
      "correctAnswer": "They are on the brink of a major discovery.",
      "explanation": "'On the brink of' es al borde de (frecuentemente algo positivo en ciencia).",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'empirical' evidence?",
      "options": ["Evidence based on theory", "Evidence based on observation or experience", "Evidence that is secret", "Evidence from a king"],
      "correctAnswer": "Evidence based on observation or experience",
      "explanation": "La evidencia empírica se basa en la realidad observable.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q8",
      "type": "fill-blank",
      "question": "The vaccine underwent rigorous ________ trials before being approved.",
      "correctAnswer": "clinical",
      "explanation": "'Clinical trials' son los ensayos clínicos.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q9",
      "type": "key-word-transformation",
      "sentence": "Scientists are trying to find the origin of the virus.",
      "keyWord": "SOURCE",
      "startOfAnswer": "Scientists are trying to",
      "correctAnswer": "Scientists are trying to identify the source of the virus.",
      "explanation": "'Source' como origen o fuente.",
      "points": 1
    },
    {
      "id": "c2-u10-b1-q10",
      "type": "multiple-choice",
      "question": "What is a 'catalyst' in a chemical reaction?",
      "options": ["A byproduct", "A substance that increases the rate of reaction without being consumed", "The main ingredient", "A type of container"],
      "correctAnswer": "A substance that increases the rate of reaction without being consumed",
      "explanation": "Un catalizador acelera la reacción.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK2: Exercise = {
  "id": "c2-u10-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Conditional Structures",
  "explanation": "Mastering mixed conditionals and formal alternatives to 'if' (e.g., 'provided that', 'supposing', 'were it not for').",
  "questions": [
    {
      "id": "c2-u10-b2-q1",
      "type": "fill-blank",
      "question": "If I ________ (study) harder at school, I would have a better job now.",
      "correctAnswer": "had studied",
      "explanation": "Mixed Conditional: condición pasada (3rd) con resultado presente (2nd).",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q2",
      "type": "multiple-choice",
      "question": "Choose the formal alternative: '________ it not for his help, we would have failed.'",
      "options": ["If", "Was", "Were", "Had"],
      "correctAnswer": "Were",
      "explanation": "'Were it not for' es una forma formal de 'if it weren't for'.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q3",
      "type": "key-word-transformation",
      "sentence": "I will go only if you come with me.",
      "keyWord": "PROVIDED",
      "startOfAnswer": "I will go",
      "correctAnswer": "I will go provided that you come with me.",
      "explanation": "'Provided that' es un conector condicional formal.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q4",
      "type": "fill-blank",
      "question": "________ (suppose) you won the lottery, what would you do?",
      "correctAnswer": "Supposing",
      "explanation": "'Supposing' se usa para plantear hipótesis.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q5",
      "type": "multiple-choice",
      "question": "Which mixed conditional describes a present state leading to a past result?",
      "options": ["If + Past Perfect, would + infinitive", "If + Past Simple, would have + past participle", "If + Past Simple, would + infinitive", "If + Past Perfect, would have + past participle"],
      "correctAnswer": "If + Past Simple, would have + past participle",
      "explanation": "Ejemplo: 'If I were taller (present), I would have been picked (past)'.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q6",
      "type": "fill-blank",
      "question": "But ________ your support, I couldn't have finished the project.",
      "correctAnswer": "for",
      "explanation": "'But for' significa 'si no fuera por'.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q7",
      "type": "key-word-transformation",
      "sentence": "If you should see him, tell him I called.",
      "keyWord": "SHOULD",
      "startOfAnswer": "",
      "correctAnswer": "Should you see him, tell him I called.",
      "explanation": "Inversión en el primer condicional para mayor formalidad.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q8",
      "type": "multiple-choice",
      "question": "Which word means 'if not'?",
      "options": ["Unless", "Provided", "Whether", "Otherwise"],
      "correctAnswer": "Unless",
      "explanation": "'Unless' introduce una condición negativa.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q9",
      "type": "fill-blank",
      "question": "If the sun ________ (not / exist), there would be no life on Earth.",
      "correctAnswer": "didn't exist",
      "explanation": "Second conditional para una situación hipotética presente.",
      "points": 1
    },
    {
      "id": "c2-u10-b2-q10",
      "type": "multiple-choice",
      "question": "In formal English, 'If I were to...' is often replaced by:",
      "options": ["Were I to...", "Had I...", "Should I...", "If I am..."],
      "correctAnswer": "Were I to...",
      "explanation": "Inversión formal del segundo condicional.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK3: Exercise = {
  "id": "c2-u10-b3",
  "type": "reading",
  "title": "Block 3: The Ethics of Genetic Engineering",
  "explanation": "Reading comprehension on CRISPR, designer babies, and bioethics.",
  "questions": [
    {
      "id": "c2-u10-b3-q1",
      "type": "multiple-choice",
      "question": "What is CRISPR-Cas9?",
      "options": ["A new type of telescope", "A precise genome editing tool", "A planet in another galaxy", "A deep-sea creature"],
      "correctAnswer": "A precise genome editing tool",
      "explanation": "CRISPR es la tecnología revolucionaria de edición genética.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q2",
      "type": "fill-blank",
      "question": "The term 'designer babies' refers to infants whose genetic makeup has been ________.",
      "correctAnswer": "altered / modified",
      "explanation": "Se refiere a la modificación genética de embriones.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q3",
      "type": "multiple-choice",
      "question": "What is a major ethical concern regarding germline editing?",
      "options": ["It is too expensive", "Changes are passed down to future generations", "It only works on animals", "It is very slow"],
      "correctAnswer": "Changes are passed down to future generations",
      "explanation": "La edición de la línea germinal afecta a toda la descendencia futura.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q4",
      "type": "fill-blank",
      "question": "Bioethics is the study of the ethical issues emerging from advances in ________ and medicine.",
      "correctAnswer": "biology",
      "explanation": "La bioética une la ética con las ciencias de la vida.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q5",
      "type": "multiple-choice",
      "question": "What is the difference between 'gene therapy' and 'gene enhancement'?",
      "options": ["There is no difference", "Therapy treats disease; enhancement improves normal traits", "Enhancement is for plants", "Therapy is only for children"],
      "correctAnswer": "Therapy treats disease; enhancement improves normal traits",
      "explanation": "La distinción es clave en el debate ético.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q6",
      "type": "fill-blank",
      "question": "Slippery ________ argument suggests that one small step will lead to a chain of negative events.",
      "correctAnswer": "slope",
      "explanation": "'Slippery slope' es la pendiente resbaladiza.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q7",
      "type": "multiple-choice",
      "question": "The 'Precautionary Principle' suggests that:",
      "options": ["We should ignore risks", "If an action has a risk of causing harm, the burden of proof that it is NOT harmful falls on those taking the action", "Science should never stop", "Only experts should decide"],
      "correctAnswer": "If an action has a risk of causing harm, the burden of proof that it is NOT harmful falls on those taking the action",
      "explanation": "Principio de precaución.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q8",
      "type": "fill-blank",
      "question": "Genetic ________ is the use of genetic information to favor or disadvantage individuals.",
      "correctAnswer": "discrimination",
      "explanation": "Discriminación genética.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q9",
      "type": "multiple-choice",
      "question": "What does 'informed consent' mean in medical research?",
      "options": ["Signing a paper without reading it", "A participant's agreement to take part after being fully told of all risks and benefits", "A doctor's permission to operate", "Paying for a treatment"],
      "correctAnswer": "A participant's agreement to take part after being fully told of all risks and benefits",
      "explanation": "Consentimiento informado.",
      "points": 1
    },
    {
      "id": "c2-u10-b3-q10",
      "type": "fill-blank",
      "question": "Monogenics refers to diseases caused by a mutation in a ________ gene.",
      "correctAnswer": "single",
      "explanation": "Enfermedades monogénicas.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK4: Exercise = {
  "id": "c2-u10-b4",
  "type": "vocabulary",
  "title": "Block 4: Space Exploration & Astronomy",
  "explanation": "Vocabulary related to the cosmos, planetary science, and aerospace.",
  "questions": [
    {
      "id": "c2-u10-b4-q1",
      "type": "multiple-choice",
      "question": "What is an 'exoplanet'?",
      "options": ["A planet in our solar system", "A planet that orbits a star outside our solar system", "A moon of Jupiter", "A dead star"],
      "correctAnswer": "A planet that orbits a star outside our solar system",
      "explanation": "Exoplanetas o planetas extrasolares.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q2",
      "type": "fill-blank",
      "question": "The James Webb Space Telescope provides ________ views of the early universe.",
      "correctAnswer": "unprecedented",
      "explanation": "'Unprecedented' significa sin precedentes.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q3",
      "type": "key-word-transformation",
      "sentence": "Mars might have been habitable in the past.",
      "keyWord": "POSSIBILITY",
      "startOfAnswer": "There is a",
      "correctAnswer": "There is a possibility that Mars was habitable in the past.",
      "explanation": "Transformación a estructura nominal.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q4",
      "type": "multiple-choice",
      "question": "What is 'dark matter'?",
      "options": ["Dust in space", "Matter that does not emit light and is only detected by its gravity", "Black holes", "The shadow of a planet"],
      "correctAnswer": "Matter that does not emit light and is only detected by its gravity",
      "explanation": "La materia oscura es uno de los grandes misterios de la física.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q5",
      "type": "fill-blank",
      "question": "The rocket entered the Earth's ________ at a very high speed.",
      "correctAnswer": "atmosphere",
      "explanation": "Atmósfera terrestre.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q6",
      "type": "key-word-transformation",
      "sentence": "The launch was cancelled due to bad weather.",
      "keyWord": "ABORTED",
      "startOfAnswer": "The launch was",
      "correctAnswer": "The launch was aborted because of weather conditions.",
      "explanation": "'Abort' es el término técnico para cancelar un lanzamiento.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q7",
      "type": "multiple-choice",
      "question": "What is a 'light-year'?",
      "options": ["A measure of time", "The distance light travels in one year", "The age of the sun", "A leap year"],
      "correctAnswer": "The distance light travels in one year",
      "explanation": "El año luz es una unidad de distancia, no de tiempo.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q8",
      "type": "fill-blank",
      "question": "Astrophysicists study the ________ laws of the universe.",
      "correctAnswer": "fundamental",
      "explanation": "Leyes fundamentales.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q9",
      "type": "key-word-transformation",
      "sentence": "We are searching for life elsewhere in the galaxy.",
      "keyWord": "EXTRATERRESTRIAL",
      "startOfAnswer": "We are searching for",
      "correctAnswer": "We are searching for extraterrestrial life in the galaxy.",
      "explanation": "Vida extraterrestre.",
      "points": 1
    },
    {
      "id": "c2-u10-b4-q10",
      "type": "multiple-choice",
      "question": "What is a 'supernova'?",
      "options": ["A small star", "A powerful and luminous stellar explosion", "A new planet", "A space station"],
      "correctAnswer": "A powerful and luminous stellar explosion",
      "explanation": "Una supernova es la explosión de una estrella.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK5: Exercise = {
  "id": "c2-u10-b5",
  "type": "grammar",
  "title": "Block 5: Conditionals with 'Suppose' and 'Imagine'",
  "explanation": "Using 'Suppose' and 'Imagine' as alternatives to 'if' in hypothetical questions.",
  "questions": [
    {
      "id": "c2-u10-b5-q1",
      "type": "fill-blank",
      "question": "________ (suppose) you were offered the job, would you take it?",
      "correctAnswer": "Suppose",
      "explanation": "Uso de 'Suppose' imperativo para plantear una hipótesis.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q2",
      "type": "multiple-choice",
      "question": "Choose the correct form: 'Imagine you ________ (live) on the moon. What would you eat?'",
      "options": ["live", "lived", "will live", "had lived"],
      "correctAnswer": "lived",
      "explanation": "Después de 'Imagine' usamos el pasado simple para situaciones irreales presentes.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q3",
      "type": "key-word-transformation",
      "sentence": "What would happen if the project failed?",
      "keyWord": "SUPPOSING",
      "startOfAnswer": "",
      "correctAnswer": "Supposing the project failed, what would happen?",
      "explanation": "Uso de 'Supposing' como conector.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q4",
      "type": "fill-blank",
      "question": "Suppose he ________ (not / tell) us the truth yesterday. What would we have done?",
      "correctAnswer": "had not told",
      "explanation": "Hipotético pasado con 'Suppose' requiere Past Perfect.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q5",
      "type": "multiple-choice",
      "question": "Which structure is most common for inviting someone to consider a possibility?",
      "options": ["If you suppose", "Just imagine", "What if", "Both Just imagine and What if"],
      "correctAnswer": "Both Just imagine and What if",
      "explanation": "Ambas son muy comunes en el lenguaje hablado.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q6",
      "type": "fill-blank",
      "question": "Imagine ________ (find) a cure for all diseases. How would the world change?",
      "correctAnswer": "finding",
      "explanation": "'Imagine' puede seguirse de gerundio para una situación general.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q7",
      "type": "key-word-transformation",
      "sentence": "If we lost all our data, it would be a disaster.",
      "keyWord": "SUPPOSING",
      "startOfAnswer": "It would be a disaster",
      "correctAnswer": "It would be a disaster supposing we lost all our data.",
      "explanation": "Posición final de la condición.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q8",
      "type": "multiple-choice",
      "question": "Can 'Suppose' be used at the end of a sentence?",
      "options": ["Yes", "No", "Only in questions", "Only in formal writing"],
      "correctAnswer": "No",
      "explanation": "'Suppose' suele iniciar la frase o la cláusula condicional.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q9",
      "type": "fill-blank",
      "question": "________ (suppose) we had never met. Where would you be now?",
      "correctAnswer": "Suppose",
      "explanation": "Escenario hipotético pasado con resultado presente.",
      "points": 1
    },
    {
      "id": "c2-u10-b5-q10",
      "type": "multiple-choice",
      "question": "Which word is more common in formal speech for hypotheticals?",
      "options": ["Imagine", "Suppose", "What if", "Think"],
      "correctAnswer": "Suppose",
      "explanation": "'Suppose' suena ligeramente más formal que 'imagine' o 'what if'.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK6: Exercise = {
  "id": "c2-u10-b6",
  "type": "vocabulary",
  "title": "Block 6: Phrasal Verbs in Science & Technology",
  "explanation": "Learning phrasal verbs like 'carry out', 'set up', 'break down', etc.",
  "questions": [
    {
      "id": "c2-u10-b6-q1",
      "type": "multiple-choice",
      "question": "Which phrasal verb means to perform an experiment?",
      "options": ["Carry on", "Carry out", "Carry off", "Carry through"],
      "correctAnswer": "Carry out",
      "explanation": "'Carry out an experiment' es realizarlo.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q2",
      "type": "fill-blank",
      "question": "The computer system ________ down last night, causing a delay.",
      "correctAnswer": "broke",
      "explanation": "'Break down' es dejar de funcionar.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q3",
      "type": "key-word-transformation",
      "sentence": "They started a new research project.",
      "keyWord": "SET",
      "startOfAnswer": "They",
      "correctAnswer": "They set up a new research project.",
      "explanation": "'Set up' es establecer u organizar.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q4",
      "type": "multiple-choice",
      "question": "What does it mean to 'figure out' a problem?",
      "options": ["To ignore it", "To solve it or understand it", "To create it", "To draw it"],
      "correctAnswer": "To solve it or understand it",
      "explanation": "'Figure out' es deducir o solucionar.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q5",
      "type": "fill-blank",
      "question": "Scientists are ________ into the effects of microplastics.",
      "correctAnswer": "looking",
      "explanation": "'Look into' es investigar.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q6",
      "type": "key-word-transformation",
      "sentence": "The information was transmitted via satellite.",
      "keyWord": "BEAMED",
      "startOfAnswer": "The information was",
      "correctAnswer": "The information was beamed via satellite.",
      "explanation": "'Beam' se usa para la transmisión de señales de radio/TV.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q7",
      "type": "multiple-choice",
      "question": "To 'come up with' an idea means to:",
      "options": ["Forget it", "Think of it for the first time", "Argue against it", "Buy it"],
      "correctAnswer": "Think of it for the first time",
      "explanation": "'Come up with' es proponer o idear.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q8",
      "type": "fill-blank",
      "question": "We need to ________ back on energy consumption.",
      "correctAnswer": "cut",
      "explanation": "'Cut back on' es reducir.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q9",
      "type": "key-word-transformation",
      "sentence": "The research was based on old data.",
      "keyWord": "DREW",
      "startOfAnswer": "The research",
      "correctAnswer": "The research drew on old data.",
      "explanation": "'Draw on' es basarse o hacer uso de una fuente.",
      "points": 1
    },
    {
      "id": "c2-u10-b6-q10",
      "type": "multiple-choice",
      "question": "To 'wipe out' a virus means to:",
      "options": ["Study it", "Completely destroy it", "Clean it", "Vaccinate it"],
      "correctAnswer": "Completely destroy it",
      "explanation": "'Wipe out' es erradicar.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK7: Exercise = {
  "id": "c2-u10-b7",
  "type": "grammar",
  "title": "Block 7: Conditional Conjunctions",
  "explanation": "Using words like 'as long as', 'on condition that', 'unless', and 'otherwise'.",
  "questions": [
    {
      "id": "c2-u10-b7-q1",
      "type": "fill-blank",
      "question": "You can use my car ________ you drive carefully.",
      "correctAnswer": "as long as / so long as",
      "explanation": "Conectores que indican condición necesaria.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q2",
      "type": "multiple-choice",
      "question": "Choose the correct word: 'You must pay now; ________, we cannot process the order.'",
      "options": ["Unless", "Otherwise", "Provided", "Supposing"],
      "correctAnswer": "Otherwise",
      "explanation": "'Otherwise' significa 'de lo contrario'.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q3",
      "type": "key-word-transformation",
      "sentence": "He only agreed to help because I paid him.",
      "keyWord": "CONDITION",
      "startOfAnswer": "He agreed to help",
      "correctAnswer": "He agreed to help on condition that I paid him.",
      "explanation": "'On condition that' es muy formal.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q4",
      "type": "fill-blank",
      "question": "I'll go to the party ________ (if not) it rains.",
      "correctAnswer": "unless",
      "explanation": "Unless = If not.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q5",
      "type": "multiple-choice",
      "question": "Which conjunction emphasizes a very specific requirement?",
      "options": ["As long as", "Provided", "Only if", "If"],
      "correctAnswer": "Only if",
      "explanation": "'Only if' es muy restrictivo.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q6",
      "type": "fill-blank",
      "question": "Take an umbrella with you in ________ it rains.",
      "correctAnswer": "case",
      "explanation": "'In case' indica precaución ante una posibilidad.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q7",
      "type": "key-word-transformation",
      "sentence": "Whether or not it rains, we are going hiking.",
      "keyWord": "RAIN",
      "startOfAnswer": "Rain",
      "correctAnswer": "Rain or shine, we are going hiking.",
      "explanation": "Expresión fija para 'sea como sea'.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q8",
      "type": "multiple-choice",
      "question": "Which of these is most formal?",
      "options": ["As long as", "On condition that", "So long as", "If"],
      "correctAnswer": "On condition that",
      "explanation": "Típico de contratos y lenguaje legal/académico.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q9",
      "type": "fill-blank",
      "question": "________ (even if) he apologizes, I won't forgive him.",
      "correctAnswer": "Even if",
      "explanation": "Introduce una condición que no cambiará el resultado.",
      "points": 1
    },
    {
      "id": "c2-u10-b7-q10",
      "type": "multiple-choice",
      "question": "The conjunction 'assuming' is similar to:",
      "options": ["Unless", "Otherwise", "If it is true that", "Never"],
      "correctAnswer": "If it is true that",
      "explanation": "Partir de una premisa.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK8: Exercise = {
  "id": "c2-u10-b8",
  "type": "vocabulary",
  "title": "Block 8: Idioms about Discovery and Innovation",
  "explanation": "Common English idioms for scientific and intellectual breakthroughs.",
  "questions": [
    {
      "id": "c2-u10-b8-q1",
      "type": "multiple-choice",
      "question": "What does it mean to 'revisit the drawing board'?",
      "options": ["To paint a picture", "To start over after a failure", "To buy new furniture", "To graduate from university"],
      "correctAnswer": "To start over after a failure",
      "explanation": "Volver a empezar desde cero cuando algo no funciona.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q2",
      "type": "fill-blank",
      "question": "His invention was ahead of its ________, so nobody understood it.",
      "correctAnswer": "time",
      "explanation": "'Ahead of its time' significa adelantado a su época.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q3",
      "type": "key-word-transformation",
      "sentence": "The discovery was completely unexpected.",
      "keyWord": "BLUE",
      "startOfAnswer": "The discovery came out of the",
      "correctAnswer": "The discovery came out of the blue.",
      "explanation": "'Out of the blue' es de la nada o por sorpresa.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q4",
      "type": "multiple-choice",
      "question": "If you 'strike gold' in research, you:",
      "options": ["Become a miner", "Find something very valuable or successful", "Lose all your money", "Make a mistake"],
      "correctAnswer": "Find something very valuable or successful",
      "explanation": "Tener un gran éxito o hallazgo.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q5",
      "type": "fill-blank",
      "question": "It's not rocket ________, it's actually quite simple.",
      "correctAnswer": "science",
      "explanation": "'It's not rocket science' se usa para decir que algo no es tan difícil.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q6",
      "type": "key-word-transformation",
      "sentence": "He is always thinking about new and original ideas.",
      "keyWord": "OUTSIDE",
      "startOfAnswer": "He always thinks",
      "correctAnswer": "He always thinks outside the box.",
      "explanation": "Pensar de forma creativa y no convencional.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q7",
      "type": "multiple-choice",
      "question": "What is a 'eureka moment'?",
      "options": ["A period of sadness", "A moment of sudden, triumphant discovery", "A long meeting", "An expensive holiday"],
      "correctAnswer": "A moment of sudden, triumphant discovery",
      "explanation": "El momento del hallazgo (Atribuido a Arquímedes).",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q8",
      "type": "fill-blank",
      "question": "The project is still in its ________, but it looks promising.",
      "correctAnswer": "infancy",
      "explanation": "'In its infancy' significa en sus primeras etapas.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q9",
      "type": "key-word-transformation",
      "sentence": "The new technology is very advanced.",
      "keyWord": "CUTTING",
      "startOfAnswer": "The technology is",
      "correctAnswer": "The technology is cutting-edge.",
      "explanation": "'Cutting-edge' es de vanguardia.",
      "points": 1
    },
    {
      "id": "c2-u10-b8-q10",
      "type": "multiple-choice",
      "question": "What does it mean to 'reinvent the wheel'?",
      "options": ["To buy a car", "To waste time creating something that already exists", "To be very smart", "To work in a factory"],
      "correctAnswer": "To waste time creating something that already exists",
      "explanation": "Perder el tiempo en algo que ya está inventado y funciona.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK9: Exercise = {
  "id": "c2-u10-b9",
  "type": "reading",
  "title": "Block 9: The Future of Artificial Intelligence",
  "explanation": "Reading about the potential and risks of AGI and machine learning.",
  "questions": [
    {
      "id": "c2-u10-b9-q1",
      "type": "multiple-choice",
      "question": "What is Artificial General Intelligence (AGI)?",
      "options": ["AI that can only play chess", "AI that can understand or learn any intellectual task that a human being can", "A type of robot", "A faster computer chip"],
      "correctAnswer": "AI that can understand or learn any intellectual task that a human being can",
      "explanation": "La AGI es el objetivo de crear IA con capacidades humanas generales.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q2",
      "type": "fill-blank",
      "question": "Machine ________ is a subset of AI that focuses on building systems that learn from data.",
      "correctAnswer": "learning",
      "explanation": "'Machine learning' es aprendizaje automático.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q3",
      "type": "multiple-choice",
      "question": "The 'Singularity' refers to:",
      "options": ["A single computer", "A hypothetical point in the future when technological growth becomes uncontrollable and irreversible", "A new language", "The end of the world"],
      "correctAnswer": "A hypothetical point in the future when technological growth becomes uncontrollable and irreversible",
      "explanation": "La singularidad tecnológica.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q4",
      "type": "fill-blank",
      "question": "Neural ________ are computing systems vaguely inspired by the biological brain.",
      "correctAnswer": "networks",
      "explanation": "Redes neuronales.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q5",
      "type": "multiple-choice",
      "question": "What is the 'Turing Test'?",
      "options": ["A math exam", "A test of a machine's ability to exhibit intelligent behavior equivalent to that of a human", "A race between robots", "A type of security software"],
      "correctAnswer": "A test of a machine's ability to exhibit intelligent behavior equivalent to that of a human",
      "explanation": "El test de Turing evalúa la inteligencia de la máquina.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q6",
      "type": "fill-blank",
      "question": "Data ________ is the process of examining large datasets to find patterns.",
      "correctAnswer": "mining",
      "explanation": "'Data mining' es minería de datos.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q7",
      "type": "multiple-choice",
      "question": "What is a major concern with AI 'black boxes'?",
      "options": ["They are too small", "The lack of transparency in how they reach decisions", "They are too expensive", "They only work at night"],
      "correctAnswer": "The lack of transparency in how they reach decisions",
      "explanation": "La falta de explicabilidad en las decisiones de la IA.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q8",
      "type": "fill-blank",
      "question": "Large Language ________ (LLMs) are trained on vast amounts of text.",
      "correctAnswer": "Models",
      "explanation": "LLM (Modelos de Lenguaje Extensos).",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'automation'?",
      "options": ["Driving a car", "The use of technology to perform tasks with reduced human intervention", "Working in an office", "Buying a robot"],
      "correctAnswer": "The use of technology to perform tasks with reduced human intervention",
      "explanation": "Automatización.",
      "points": 1
    },
    {
      "id": "c2-u10-b9-q10",
      "type": "fill-blank",
      "question": "Ethics in AI involves addressing ________ and fairness in algorithms.",
      "correctAnswer": "bias",
      "explanation": "El sesgo es un problema ético crítico.",
      "points": 1
    }
  ]
};

export const C2_U10_BLOCK10: Exercise = {
  "id": "c2-u10-b10",
  "type": "grammar",
  "title": "Block 10: Review and Consolidation",
  "explanation": "A final review of advanced conditionals and scientific vocabulary.",
  "questions": [
    {
      "id": "c2-u10-b10-q1",
      "type": "multiple-choice",
      "question": "Correct the mixed conditional: 'If I hadn't lost my keys, I would be inside now.'",
      "options": ["It is already correct.", "If I didn't lose...", "I would have been inside...", "If I hadn't lose..."],
      "correctAnswer": "It is already correct.",
      "explanation": "Condición pasada + resultado presente.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q2",
      "type": "fill-blank",
      "question": "________ it not for the vaccine, many more would have died.",
      "correctAnswer": "Were",
      "explanation": "Estructura formal de inversión.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q3",
      "type": "key-word-transformation",
      "sentence": "If you need any help, just ask.",
      "keyWord": "SHOULD",
      "startOfAnswer": "",
      "correctAnswer": "Should you need any help, just ask.",
      "explanation": "Inversión formal.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q4",
      "type": "fill-blank",
      "question": "I'll lend you the money ________ condition that you pay me back by Friday.",
      "correctAnswer": "on",
      "explanation": "'On condition that'.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q5",
      "type": "multiple-choice",
      "question": "What is a 'paradigm shift'?",
      "options": ["A small change", "A fundamental change in thinking", "A gear shift", "A movement of the stars"],
      "correctAnswer": "A fundamental change in thinking",
      "explanation": "Cambio radical de enfoque.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q6",
      "type": "fill-blank",
      "question": "Supposing you ________ (be) invisible for a day, what would you do?",
      "correctAnswer": "were",
      "explanation": "Hipótesis presente.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q7",
      "type": "key-word-transformation",
      "sentence": "He only passed because he studied.",
      "keyWord": "WOULDN'T",
      "startOfAnswer": "If he hadn't studied,",
      "correctAnswer": "If he hadn't studied, he wouldn't have passed.",
      "explanation": "Tercer condicional estándar.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q8",
      "type": "multiple-choice",
      "question": "Which idiom means 'not difficult'?",
      "options": ["Reinvent the wheel", "Rocket science", "Cutting-edge", "Out of the blue"],
      "correctAnswer": "Rocket science",
      "explanation": "'It's not rocket science'.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q9",
      "type": "fill-blank",
      "question": "I'll go ________ (if not) you tell me not to.",
      "correctAnswer": "unless",
      "explanation": "Unless.",
      "points": 1
    },
    {
      "id": "c2-u10-b10-q10",
      "type": "multiple-choice",
      "question": "What does 'groundbreaking' mean?",
      "options": ["Digging a hole", "Innovative and pioneering", "Destructive", "Boring"],
      "correctAnswer": "Innovative and pioneering",
      "explanation": "Revolucionario.",
      "points": 1
    }
  ]
};

export const C2_UNIT_10 = createC2Unit(
  'c2-u10',
  'The Scientific Frontier',
  'Explore the latest breakthroughs in science and technology while mastering advanced conditionals and hypothetical structures.',
  ['Master mixed conditionals and formal alternatives', 'Use conditional conjunctions and inversions', 'Acquire advanced scientific and technical vocabulary', 'Discuss ethical implications of modern science'],
  [
    C2_U10_BLOCK1,
    C2_U10_BLOCK2,
    C2_U10_BLOCK3,
    C2_U10_BLOCK4,
    C2_U10_BLOCK5,
    C2_U10_BLOCK6,
    C2_U10_BLOCK7,
    C2_U10_BLOCK8,
    C2_U10_BLOCK9,
    C2_U10_BLOCK10
  ]
);
