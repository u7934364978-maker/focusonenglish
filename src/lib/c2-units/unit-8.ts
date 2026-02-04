
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U8_BLOCK1: Exercise = {
  "id": "c2-u8-b1",
  "type": "vocabulary",
  "title": "Block 1: The Nuances of Memory",
  "explanation": "Advanced vocabulary related to cognitive processes and memory types.",
  "questions": [
    {
      "id": "c2-u8-b1-q1",
      "type": "multiple-choice",
      "question": "What is the term for a memory that is exceptionally vivid and detailed, often associated with a shocking event?",
      "options": ["Flashbulb memory", "Implicit memory", "Short-term memory", "Procedural memory"],
      "correctAnswer": "Flashbulb memory",
      "explanation": "Las 'flashbulb memories' son recuerdos detallados de momentos impactantes.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q2",
      "type": "fill-blank",
      "question": "The witness's testimony was questioned due to the ________ nature of human memory.",
      "correctAnswer": "fallible",
      "explanation": "'Fallible' significa que puede fallar o cometer errores.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q3",
      "type": "key-word-transformation",
      "question": "I suddenly remembered where I had left my keys. (OCCURRED)\n\nIt suddenly __________",
      "sentence": "I suddenly remembered where I had left my keys.",
      "keyWord": "OCCURRED",
      "startOfAnswer": "It suddenly",
      "correctAnswer": "occurred to me where I had left my keys",
      "explanation": "Uso de 'it occurred to someone' como sinónimo de recordar de repente.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q4",
      "type": "multiple-choice",
      "question": "Which verb describes the process of keeping information in your memory?",
      "options": ["Retrieve", "Encode", "Retain", "Forget"],
      "correctAnswer": "Retain",
      "explanation": "'Retain' es retener o mantener la información.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q5",
      "type": "fill-blank",
      "question": "Sights and smells can often ________ powerful memories from our childhood.",
      "correctAnswer": "evoke",
      "explanation": "'Evoke' es evocar o traer un recuerdo a la mente.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q6",
      "type": "key-word-transformation",
      "question": "He can remember every detail of the meeting. (RECALL)\n\nHe has an __________",
      "sentence": "He can remember every detail of the meeting.",
      "keyWord": "RECALL",
      "startOfAnswer": "He has an",
      "correctAnswer": "incredible ability to recall every detail",
      "explanation": "Uso de 'recall' como sustantivo/infinitivo para memoria.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q7",
      "type": "multiple-choice",
      "question": "What do we call the loss of memory, often due to brain injury or shock?",
      "options": ["Aphasia", "Amnesia", "Insomnia", "Dyslexia"],
      "correctAnswer": "Amnesia",
      "explanation": "Amnesia es la pérdida de memoria.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q8",
      "type": "fill-blank",
      "question": "Some memories are ________ in our minds, impossible to erase.",
      "correctAnswer": "etched",
      "explanation": "'Etched' significa grabado, usado metafóricamente para recuerdos profundos.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q9",
      "type": "key-word-transformation",
      "question": "I will never forget the first time I saw the ocean. (MEMORABLE)\n\nSeeing the ocean for the first time __________",
      "sentence": "I will never forget the first time I saw the ocean.",
      "keyWord": "MEMORABLE",
      "startOfAnswer": "Seeing the ocean for the first time",
      "correctAnswer": "was a highly memorable experience",
      "explanation": "Transformación a una estructura con adjetivo.",
      "points": 1
    },
    {
      "id": "c2-u8-b1-q10",
      "type": "multiple-choice",
      "question": "Which adjective describes a memory that is becoming less clear?",
      "options": ["Vivid", "Fading", "Sharp", "Lasting"],
      "correctAnswer": "Fading",
      "explanation": "'Fading' es algo que se desvanece.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK2: Exercise = {
  "id": "c2-u8-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Narrative Tenses",
  "explanation": "Mastering the use of past tenses (Past Perfect, Continuous, and 'would/used to') for storytelling.",
  "questions": [
    {
      "id": "c2-u8-b2-q1",
      "type": "fill-blank",
      "question": "By the time the police arrived, the thief ________ (vanish).",
      "correctAnswer": "had vanished",
      "explanation": "Past Perfect para una acción terminada antes de otra en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q2",
      "type": "fill-blank",
      "question": "I ________ (work) in the garden when I heard the scream.",
      "options": ["had worked", "was working", "worked", "have been working"],
      "correctAnswer": "was working",
      "explanation": "Past Continuous para una acción en progreso interrumpida.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q3",
      "type": "key-word-transformation",
      "question": "When I was a child, we went to the beach every summer. (WOULD)\n\nWhen I was a child, __________",
      "sentence": "When I was a child, we went to the beach every summer.",
      "keyWord": "WOULD",
      "startOfAnswer": "When I was a child,",
      "correctAnswer": "we would go to the beach every summer",
      "explanation": "Uso de 'would' para hábitos en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q4",
      "type": "fill-blank",
      "question": "She ________ (be) exhausted because she had been running for hours.",
      "correctAnswer": "was",
      "explanation": "Estado en el pasado ligado a una acción continua anterior.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q5",
      "type": "multiple-choice",
      "question": "Which tense is used for an action that happened before a specific point in the past and continued up to it?",
      "options": ["Past Simple", "Past Perfect", "Past Perfect Continuous", "Past Continuous"],
      "correctAnswer": "Past Perfect Continuous",
      "explanation": "Past Perfect Continuous enfatiza la duración hasta un punto pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q6",
      "type": "fill-blank",
      "question": "I ________ (not / see) him for years before we met in London.",
      "correctAnswer": "had not seen",
      "explanation": "Past Perfect para la ausencia de acción previa.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q7",
      "type": "key-word-transformation",
      "question": "He worked as a baker for twenty years, then he retired. (HAD)\n\nHe retired after __________",
      "sentence": "He worked as a baker for twenty years, then he retired.",
      "keyWord": "HAD",
      "startOfAnswer": "He retired after",
      "correctAnswer": "he had worked as a baker for twenty years",
      "explanation": "Uso de 'had' para marcar la anterioridad.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q8",
      "type": "multiple-choice",
      "question": "Which sentence correctly describes a past habit that is no longer true?",
      "options": ["I would have a dog.", "I used to have a dog.", "I was having a dog.", "I had had a dog."],
      "correctAnswer": "I used to have a dog.",
      "explanation": "'Used to' sirve para estados pasados (como tener algo), 'would' no.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q9",
      "type": "fill-blank",
      "question": "Scarcely ________ (the film / start) when the power went out.",
      "correctAnswer": "had the film started",
      "explanation": "Inversión con 'Scarcely... when' en pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b2-q10",
      "type": "multiple-choice",
      "question": "In narrative, the Past Simple is primarily used for:",
      "options": ["Background information", "The main events of the story", "Actions in progress", "Habits"],
      "correctAnswer": "The main events of the story",
      "explanation": "El Past Simple hace avanzar la línea temporal del relato.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK3: Exercise = {
  "id": "c2-u8-b3",
  "type": "reading",
  "title": "Block 3: The Malleability of Memory",
  "explanation": "Reading comprehension on how memories can be altered and reconstructed.",
  "questions": [
    {
      "id": "c2-u8-b3-q1",
      "type": "multiple-choice",
      "question": "What is the 'misinformation effect'?",
      "options": ["Forgetting important details", "The tendency for post-event information to interfere with the memory of the original event", "Lying deliberately", "Improving memory through practice"],
      "correctAnswer": "The tendency for post-event information to interfere with the memory of the original event",
      "explanation": "La información externa puede contaminar el recuerdo original.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q2",
      "type": "fill-blank",
      "question": "Elizabeth Loftus's research showed that memory is not like a video recording, but rather ________.",
      "correctAnswer": "reconstructive",
      "explanation": "La memoria se reconstruye cada vez que se evoca.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q3",
      "type": "multiple-choice",
      "question": "False memories can be created by:",
      "options": ["Hypnosis", "Leading questions", "Repeated imagining", "All of the above"],
      "correctAnswer": "All of the above",
      "explanation": "Diversos factores pueden inducir recuerdos falsos.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q4",
      "type": "fill-blank",
      "question": "Our current ________ and beliefs can color how we remember past events.",
      "correctAnswer": "biases",
      "explanation": "Los sesgos actuales afectan al pasado recordado.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'hindsight bias' refer to?",
      "options": ["Thinking you knew it all along", "Forgetting the past", "Worrying about the future", "Learning from mistakes"],
      "correctAnswer": "Thinking you knew it all along",
      "explanation": "El sesgo retrospectivo hace que el pasado parezca más predecible de lo que fue.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q6",
      "type": "fill-blank",
      "question": "Confabulation is a memory error where gaps in memory are filled with ________ information.",
      "correctAnswer": "fabricated",
      "explanation": "La confabulación llena vacíos con datos inventados sin intención de mentir.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q7",
      "type": "multiple-choice",
      "question": "The reliability of eyewitness testimony is often:",
      "options": ["Absolute", "Overestimated", "Underestimated", "Irrelevant"],
      "correctAnswer": "Overestimated",
      "explanation": "Se suele confiar demasiado en los testigos oculares pese a sus errores.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q8",
      "type": "fill-blank",
      "question": "Emotional intensity can ________ the vividness of a memory, but not necessarily its accuracy.",
      "correctAnswer": "enhance",
      "explanation": "La emoción hace el recuerdo más vívido pero no más exacto.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'source amnesia'?",
      "options": ["Forgetting where you learned something", "Forgetting the event itself", "Forgetting your name", "Forgetting how to speak"],
      "correctAnswer": "Forgetting where you learned something",
      "explanation": "Recordar el dato pero no su origen.",
      "points": 1
    },
    {
      "id": "c2-u8-b3-q10",
      "type": "fill-blank",
      "question": "Memory consolidation is the process of stabilizing a memory ________ after the initial acquisition.",
      "correctAnswer": "trace",
      "explanation": "'Memory trace' es la huella de memoria.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK4: Exercise = {
  "id": "c2-u8-b4",
  "type": "vocabulary",
  "title": "Block 4: Idioms and Expressions about Memory",
  "explanation": "Common English idioms used to describe remembering or forgetting.",
  "questions": [
    {
      "id": "c2-u8-b4-q1",
      "type": "multiple-choice",
      "question": "If something 'rings a bell', it means:",
      "options": ["It is very loud", "It sounds familiar", "It makes you happy", "It is completely new"],
      "correctAnswer": "It sounds familiar",
      "explanation": "Usamos esta expresión cuando algo nos suena pero no lo recordamos del todo.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q2",
      "type": "fill-blank",
      "question": "I'm sorry, her name has completely ________ my mind.",
      "correctAnswer": "slipped",
      "explanation": "'Slip one's mind' es olvidarse de algo.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q3",
      "type": "multiple-choice",
      "question": "What does it mean to 'jog someone's memory'?",
      "options": ["To run with them", "To help them remember something", "To forget something on purpose", "To tell them a secret"],
      "correctAnswer": "To help them remember something",
      "explanation": "Dar pistas para que alguien recuerde.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q4",
      "type": "fill-blank",
      "question": "Her face is familiar, but I can't ________ my finger on where we met.",
      "correctAnswer": "put",
      "explanation": "'Put one's finger on' es identificar exactamente algo.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q5",
      "type": "multiple-choice",
      "question": "If you remember something 'vividly', you remember it:",
      "options": ["Hardly at all", "With great detail and clarity", "With sadness", "Incorrectly"],
      "correctAnswer": "With great detail and clarity",
      "explanation": "Recordar vívidamente.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q6",
      "type": "fill-blank",
      "question": "The experience is ________ in my memory forever.",
      "correctAnswer": "burned",
      "explanation": "'Burned in my memory' indica un recuerdo imborrable.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q7",
      "type": "multiple-choice",
      "question": "What is a 'trip down memory lane'?",
      "options": ["A holiday to a new place", "A period of time spent remembering the past", "A car accident", "A history lesson"],
      "correctAnswer": "A period of time spent remembering the past",
      "explanation": "Un viaje por el baúl de los recuerdos.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q8",
      "type": "fill-blank",
      "question": "Keep in ________ that the deadline is tomorrow.",
      "correctAnswer": "mind",
      "explanation": "'Keep in mind' es tener en cuenta.",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q9",
      "type": "multiple-choice",
      "question": "If you have a 'senior moment', you:",
      "options": ["Become very wise", "Have a temporary lapse in memory", "Win an award", "Go on a date"],
      "correctAnswer": "Have a temporary lapse in memory",
      "explanation": "Tener un lapsus de memoria (usado a menudo humorísticamente).",
      "points": 1
    },
    {
      "id": "c2-u8-b4-q10",
      "type": "fill-blank",
      "question": "The word is on the ________ of my tongue, but I can't quite say it.",
      "correctAnswer": "tip",
      "explanation": "Tener algo en la punta de la lengua.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK5: Exercise = {
  "id": "c2-u8-b5",
  "type": "grammar",
  "title": "Block 5: Future in the Past",
  "explanation": "Using 'was going to', 'was about to', and 'would' to describe future events from a past perspective.",
  "questions": [
    {
      "id": "c2-u8-b5-q1",
      "keyWord": "LEAVE",
      "sentence": "I was leaving the house when the phone rang.",
      "startOfAnswer": "was about to leave",
      "type": "key-word-transformation",
      "question": "I was leaving the house when the phone rang. (LEAVE)\n\nwas about to leave __________",
      "correctAnswer": "",
      "explanation": "'About to' indica inmediatez en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q2",
      "sentence": "He told me he ________ call me later.",
      "startOfAnswer": "would",
      "keyWord": "KEYWORD",
      "type": "key-word-transformation",
      "question": "He told me he ________ call me later. (KEYWORD)\n\nwould __________",
      "correctAnswer": "",
      "explanation": "'Would' es el futuro del 'will' en estilo indirecto.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q3",
      "type": "key-word-transformation",
      "question": "I intended to help you, but I forgot. (GOING)\n\nI __________",
      "sentence": "I intended to help you, but I forgot.",
      "keyWord": "GOING",
      "startOfAnswer": "I",
      "correctAnswer": "was going to help you, but I forgot",
      "explanation": "Uso de 'was going to' para intenciones pasadas no cumplidas.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q4",
      "sentence": "We intended to have a picnic, but then it started to rain.",
      "startOfAnswer": "were going to",
      "keyWord": "HAVE",
      "type": "key-word-transformation",
      "question": "We intended to have a picnic, but then it started to rain. (HAVE)\n\nwere going to __________",
      "correctAnswer": "have",
      "explanation": "Planes pasados frustrados.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q5",
      "type": "multiple-choice",
      "question": "Which structure implies an action was imminent?",
      "options": ["Was going to", "Was due to", "Was on the point of", "Was likely to"],
      "correctAnswer": "Was on the point of",
      "explanation": "'On the point of + -ing' indica inmediatez extrema.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q6",
      "sentence": "The train ________ (depart) at 8:00, but it was delayed.",
      "startOfAnswer": "was to depart",
      "keyWord": "DEPART",
      "type": "key-word-transformation",
      "question": "The train ________ (depart) at 8:00, but it was delayed. (DEPART)\n\nwas to depart __________",
      "correctAnswer": "",
      "explanation": "'Was to' se usa para horarios o destinos fijados en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q7",
      "type": "key-word-transformation",
      "question": "Little did I know that this decision would change my life. (REALIZED)\n\nI little __________",
      "sentence": "Little did I know that this decision would change my life.",
      "keyWord": "REALIZED",
      "startOfAnswer": "I little",
      "correctAnswer": "realized that this decision would change my life",
      "explanation": "Énfasis en la falta de conocimiento sobre el futuro.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q8",
      "type": "multiple-choice",
      "question": "Which sentence correctly uses 'would' for a prediction made in the past?",
      "options": ["I knew it would rain.", "I know it would rain.", "I knew it will rain.", "I would know it rains."],
      "correctAnswer": "I knew it would rain.",
      "explanation": "Concordancia de tiempos: pasado + would.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q9",
      "sentence": "They ________ (meet) later that day, though they didn't know it yet.",
      "startOfAnswer": "were to meet",
      "keyWord": "MEET",
      "type": "key-word-transformation",
      "question": "They ________ (meet) later that day, though they didn't know it yet. (MEET)\n\nwere to meet __________",
      "correctAnswer": "",
      "explanation": "Uso literario de 'was/were to' para el destino.",
      "points": 1
    },
    {
      "id": "c2-u8-b5-q10",
      "type": "multiple-choice",
      "question": "If you were 'supposed to' do something, it means:",
      "options": ["You did it", "You were expected to do it, but maybe didn't", "You wanted to do it", "You will do it"],
      "correctAnswer": "You were expected to do it, but maybe didn't",
      "explanation": "'Supposed to' indica obligación o expectativa.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK6: Exercise = {
  "id": "c2-u8-b6",
  "type": "vocabulary",
  "title": "Block 6: Phrasal Verbs related to Memory",
  "explanation": "Learning phrasal verbs like 'bring back', 'look back', etc.",
  "questions": [
    {
      "id": "c2-u8-b6-q1",
      "type": "multiple-choice",
      "question": "Which phrasal verb means to think about the past?",
      "options": ["Look forward to", "Look back on", "Look up to", "Look into"],
      "correctAnswer": "Look back on",
      "explanation": "'Look back on' es reflexionar sobre el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q2",
      "type": "fill-blank",
      "question": "This old song ________ back so many memories.",
      "correctAnswer": "brings",
      "explanation": "'Bring back' es traer de vuelta recuerdos.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q3",
      "type": "key-word-transformation",
      "question": "I need to review my notes before the exam. (BRUSH)\n\nI need to __________",
      "sentence": "I need to review my notes before the exam.",
      "keyWord": "BRUSH",
      "startOfAnswer": "I need to",
      "correctAnswer": "brush up on my notes before the exam",
      "explanation": "'Brush up on' es repasar algo olvidado.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q4",
      "startOfAnswer": "To",
      "keyWord": "CONJURE",
      "sentence": "To conjure up an image means to create a mental picture.",
      "type": "key-word-transformation",
      "question": "To conjure up an image means to create a mental picture. (CONJURE)\n\nTo __________",
      "correctAnswer": "create a mental picture of it",
      "explanation": "Evocar o imaginar vívidamente.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q5",
      "type": "fill-blank",
      "question": "He managed to ________ out the details of the story.",
      "correctAnswer": "flesh",
      "explanation": "'Flesh out' es añadir detalles a una idea básica.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q6",
      "type": "key-word-transformation",
      "question": "Try to remember where you saw her. (MIND)\n\nTry to __________",
      "sentence": "Try to remember where you saw her.",
      "keyWord": "MIND",
      "startOfAnswer": "Try to",
      "correctAnswer": "call to mind where you saw her",
      "explanation": "'Call to mind' es recordar.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q7",
      "type": "multiple-choice",
      "question": "If you 'block out' a memory, you:",
      "options": ["Write it down", "Stop yourself from thinking about it", "Tell everyone", "Make it clearer"],
      "correctAnswer": "Stop yourself from thinking about it",
      "explanation": "Bloquear un recuerdo traumático o doloroso.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q8",
      "type": "fill-blank",
      "question": "I've been trying to ________ up on my French before our trip.",
      "correctAnswer": "bone",
      "explanation": "'Bone up on' es estudiar intensamente algo.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q9",
      "type": "key-word-transformation",
      "question": "The details are starting to return to me. (COMING)\n\nIt's all __________",
      "sentence": "The details are starting to return to me.",
      "keyWord": "COMING",
      "startOfAnswer": "It's all",
      "correctAnswer": "coming back to me now",
      "explanation": "Uso de 'come back' para recuerdos que retornan.",
      "points": 1
    },
    {
      "id": "c2-u8-b6-q10",
      "startOfAnswer": "To",
      "keyWord": "CAST",
      "sentence": "To cast one's mind back means to think about a past event.",
      "type": "key-word-transformation",
      "question": "To cast one's mind back means to think about a past event. (CAST)\n\nTo __________",
      "correctAnswer": "Think about a past event",
      "explanation": "Remontarse al pasado mentalmente.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK7: Exercise = {
  "id": "c2-u8-b7",
  "type": "grammar",
  "title": "Block 7: Speculating about the Past",
  "explanation": "Using modal verbs (must have, might have, can't have) to speculate about past events.",
  "questions": [
    {
      "id": "c2-u8-b7-q1",
      "type": "fill-blank",
      "question": "He ________ (be) very talented as a child; look at his early work!",
      "correctAnswer": "must have been",
      "explanation": "Deducción lógica fuerte en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q2",
      "type": "multiple-choice",
      "question": "Choose the correct form: 'She ________ heard the news; she looks so happy.'",
      "options": ["must have", "can't have", "might not have", "should have"],
      "correctAnswer": "can't have",
      "explanation": "Deducción de imposibilidad en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q3",
      "type": "key-word-transformation",
      "question": "It is possible that he forgot about the meeting. (MIGHT)\n\nHe __________",
      "sentence": "It is possible that he forgot about the meeting.",
      "keyWord": "MIGHT",
      "startOfAnswer": "He",
      "correctAnswer": "might have forgotten about the meeting",
      "explanation": "Especulación sobre posibilidad pasada.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q4",
      "keyWord": "SHOULD",
      "sentence": "You told me you were coming!",
      "startOfAnswer": "You",
      "type": "key-word-transformation",
      "question": "You told me you were coming! (SHOULD)\n\nYou __________",
      "correctAnswer": "should have told",
      "explanation": "Crítica o lamento sobre una acción no realizada.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q5",
      "keyWord": "CAN'T",
      "sentence": "Which modal expresses the highest certainty that something didn't happen?",
      "startOfAnswer": "It",
      "type": "key-word-transformation",
      "question": "Which modal expresses the highest certainty that something didn't happen? (CAN'T)\n\nIt __________",
      "correctAnswer": "can't have happened",
      "explanation": "'Can't have' es la contrapartida de 'must have' para lo negativo.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q6",
      "type": "fill-blank",
      "question": "They ________ (leave) already; their car is gone.",
      "correctAnswer": "must have left",
      "explanation": "Conclusión basada en evidencia.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q7",
      "type": "key-word-transformation",
      "question": "I'm sure she didn't mean to offend you. (CAN'T)\n\nShe __________",
      "sentence": "I'm sure she didn't mean to offend you.",
      "keyWord": "CAN'T",
      "startOfAnswer": "She",
      "correctAnswer": "can't have meant to offend you",
      "explanation": "Transformación de 'I'm sure... not' a 'can't have'.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q8",
      "keyWord": "IMPLIES",
      "sentence": "What does 'could have' imply in speculation?",
      "startOfAnswer": "'could have'",
      "type": "key-word-transformation",
      "question": "What does 'could have' imply in speculation? (IMPLIES)\n\n'could have' __________",
      "correctAnswer": "implies possibility or ability that wasn't used",
      "explanation": "'Could have' a menudo implica algo que era posible pero no ocurrió.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q9",
      "type": "fill-blank",
      "question": "The letter ________ (get) lost in the mail; I never received it.",
      "correctAnswer": "may have got / might have got",
      "explanation": "Especulación de posibilidad.",
      "points": 1
    },
    {
      "id": "c2-u8-b7-q10",
      "keyWord": "SHOULD",
      "sentence": "Which modal is used to express an unfulfilled obligation?",
      "startOfAnswer": "It",
      "type": "key-word-transformation",
      "question": "Which modal is used to express an unfulfilled obligation? (SHOULD)\n\nIt __________",
      "correctAnswer": "should have",
      "explanation": "'Should have' indica que algo era lo correcto pero no se hizo.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK8: Exercise = {
  "id": "c2-u8-b8",
  "type": "vocabulary",
  "title": "Block 8: Memory and the Five Senses",
  "explanation": "Vocabulary for how sensory input triggers memory.",
  "questions": [
    {
      "id": "c2-u8-b8-q1",
      "type": "multiple-choice",
      "question": "The smell of fresh bread is ________ of my grandmother's kitchen.",
      "options": ["Repulsive", "Redolent", "Indifferent", "Pungent"],
      "correctAnswer": "Redolent",
      "explanation": "'Redolent' significa que huele a algo o que lo evoca fuertemente.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q2",
      "type": "fill-blank",
      "question": "The music was ________, bringing back a flood of emotions.",
      "correctAnswer": "evocative",
      "explanation": "'Evocative' describe algo que evoca recuerdos o sentimientos.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q3",
      "type": "key-word-transformation",
      "question": "The taste reminded me of my childhood. (MIND)\n\nThe taste __________",
      "sentence": "The taste reminded me of my childhood.",
      "keyWord": "MIND",
      "startOfAnswer": "The taste",
      "correctAnswer": "put me in mind of my childhood",
      "explanation": "'Put someone in mind of' es recordar a alguien algo.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q4",
      "startOfAnswer": "reminds you of it",
      "keyWord": "REMINDS",
      "sentence": "A sound that is 'reminiscent of' something else.",
      "type": "key-word-transformation",
      "question": "A sound that is 'reminiscent of' something else. (REMINDS)\n\nreminds you of it __________",
      "correctAnswer": "",
      "explanation": "'Reminiscent of' es evocador de algo.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q5",
      "type": "fill-blank",
      "question": "Some memories are ________, lasting only for a fleeting moment.",
      "correctAnswer": "ephemeral",
      "explanation": "'Ephemeral' es algo efímero o de corta duración.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q6",
      "type": "key-word-transformation",
      "question": "The photograph made me feel very nostalgic. (NOSTALGIA)\n\nThe photograph __________",
      "sentence": "The photograph made me feel very nostalgic.",
      "keyWord": "NOSTALGIA",
      "startOfAnswer": "The photograph",
      "correctAnswer": "filled me with nostalgia",
      "explanation": "Uso del sustantivo 'nostalgia'.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q7",
      "startOfAnswer": "sense that is most closely linked to the emotional centers of the brain is smell",
      "keyWord": "SENSE",
      "sentence": "Which sense is most closely linked to the emotional centers of the brain?",
      "type": "key-word-transformation",
      "question": "Which sense is most closely linked to the emotional centers of the brain? (SENSE)\n\nsense that is most closely linked to the emotional centers of the brain is smell __________",
      "correctAnswer": "Smell",
      "explanation": "El olfato tiene una conexión directa y potente con la memoria emocional.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q8",
      "type": "fill-blank",
      "question": "The ________ of the old book's pages had a distinctive, comforting scent.",
      "correctAnswer": "mustiness",
      "explanation": "'Mustiness' es el olor a humedad o rancio, típico de libros viejos.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q9",
      "type": "key-word-transformation",
      "question": "He remembered the event as if it were yesterday. (VIVIDLY)\n\nHe remembered __________",
      "sentence": "He remembered the event as if it were yesterday.",
      "keyWord": "VIVIDLY",
      "startOfAnswer": "He remembered",
      "correctAnswer": "the event very vividly",
      "explanation": "Sustitución de la comparación por un adverbio de grado.",
      "points": 1
    },
    {
      "id": "c2-u8-b8-q10",
      "startOfAnswer": "unclear and lacking detail",
      "keyWord": "UNCLEAR",
      "sentence": "If an image is 'blurred', your memory of it is:",
      "type": "key-word-transformation",
      "question": "If an image is 'blurred', your memory of it is: (UNCLEAR)\n\nunclear and lacking detail __________",
      "correctAnswer": "",
      "explanation": "'Blurred' es borroso.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK9: Exercise = {
  "id": "c2-u8-b9",
  "type": "reading",
  "title": "Block 9: The Art of Mnemonics",
  "explanation": "Reading about techniques to improve memory and recall.",
  "questions": [
    {
      "id": "c2-u8-b9-q1",
      "type": "multiple-choice",
      "question": "What is a 'mnemonic device'?",
      "options": ["A type of computer", "A strategy to help remember information", "A brain implant", "A psychological disorder"],
      "correctAnswer": "A strategy to help remember information",
      "explanation": "Las reglas mnemotécnicas ayudan a la retención.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q2",
      "type": "fill-blank",
      "question": "The 'Method of ________' involves visualizing a familiar place to store memories.",
      "correctAnswer": "Loci",
      "explanation": "El método de Loci (o palacio de la memoria) es una técnica milenaria.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q3",
      "type": "multiple-choice",
      "question": "Acronyms are mnemonics that use:",
      "options": ["Pictures", "The first letters of words to form a new word", "Rhymes", "Music"],
      "correctAnswer": "The first letters of words to form a new word",
      "explanation": "Los acrónimos facilitan recordar listas.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q4",
      "type": "fill-blank",
      "question": "Chunking is the process of grouping items into ________ units to improve recall.",
      "correctAnswer": "meaningful",
      "explanation": "'Chunking' divide la información en trozos significativos.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q5",
      "type": "multiple-choice",
      "question": "Why does 'elaborative rehearsal' work better than 'rote rehearsal'?",
      "options": ["It is faster", "It involves thinking about the meaning and making connections", "It is easier to do", "It doesn't require concentration"],
      "correctAnswer": "It involves thinking about the meaning and making connections",
      "explanation": "Conectar datos con significados crea memorias más duraderas que la simple repetición.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q6",
      "type": "fill-blank",
      "question": "The 'peg-word' system uses ________ to associate numbers with objects.",
      "correctAnswer": "rhymes",
      "explanation": "El sistema de palabras gancho suele usar rimas.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q7",
      "type": "multiple-choice",
      "question": "Which of these is most important for effective mnemonics?",
      "options": ["Logic", "Visual imagery", "Boredom", "Silence"],
      "correctAnswer": "Visual imagery",
      "explanation": "Las imágenes mentales potentes son la base de la mayoría de mnemotecnias.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q8",
      "type": "fill-blank",
      "question": "Spaced ________ is a learning technique that incorporates increasing intervals of time between reviews.",
      "correctAnswer": "repetition",
      "explanation": "La repetición espaciada es clave para la memoria a largo plazo.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q9",
      "type": "multiple-choice",
      "question": "An 'acrostic' is a mnemonic where:",
      "options": ["You draw a map", "The first letters of each word in a sentence stand for something else", "You sing a song", "You repeat a word ten times"],
      "correctAnswer": "The first letters of each word in a sentence stand for something else",
      "explanation": "Ejemplo: 'Every Good Boy Deserves Fun' para las notas musicales.",
      "points": 1
    },
    {
      "id": "c2-u8-b9-q10",
      "startOfAnswer": "Memory training can significantly  the brain's plasticity.",
      "keyWord": "KEYWORD",
      "sentence": "Memory training can significantly ________ the brain's plasticity.",
      "type": "key-word-transformation",
      "question": "Memory training can significantly ________ the brain's plasticity. (KEYWORD)\n\nMemory training can significantly  the brain's plasticity. __________",
      "correctAnswer": "enhance",
      "explanation": "Entrenar la memoria mejora la plasticidad cerebral.",
      "points": 1
    }
  ]
};

export const C2_U8_BLOCK10: Exercise = {
  "id": "c2-u8-b10",
  "type": "grammar",
  "title": "Block 10: Review and Consolidation",
  "explanation": "A final check of all concepts covered in the unit.",
  "questions": [
    {
      "id": "c2-u8-b10-q1",
      "type": "multiple-choice",
      "question": "Identify the error: 'I had been knowing him for years before he left.'",
      "options": ["'had been knowing'", "'for years'", "'before'", "'left'"],
      "correctAnswer": "'had been knowing'",
      "explanation": "'Know' es un verbo estático y no suele usarse en tiempos continuos.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q2",
      "type": "fill-blank",
      "question": "No sooner ________ we reached the summit than it started to snow.",
      "correctAnswer": "had",
      "explanation": "Estructura de inversión narrativa.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q3",
      "type": "key-word-transformation",
      "question": "I'm certain he wasn't there. (HAVE)\n\nHe can't __________",
      "sentence": "I'm certain he wasn't there.",
      "keyWord": "HAVE",
      "startOfAnswer": "He can't",
      "correctAnswer": "have been there",
      "explanation": "Deducción negativa en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q4",
      "sentence": "This perfume is reminiscent ________ (reminiscent) of my mother's rose garden.",
      "startOfAnswer": "is",
      "keyWord": "REMINISCENT",
      "type": "key-word-transformation",
      "question": "This perfume is reminiscent ________ (reminiscent) of my mother's rose garden. (REMINISCENT)\n\nis __________",
      "correctAnswer": "reminiscent",
      "explanation": "Uso del adjetivo para expresar recuerdo.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q5",
      "sentence": "Which sentence refers to a future event from a past perspective?",
      "startOfAnswer": "I was going to see you later",
      "keyWord": "PAST",
      "type": "key-word-transformation",
      "question": "Which sentence refers to a future event from a past perspective? (PAST)\n\nI was going to see you later __________",
      "correctAnswer": "",
      "explanation": "'Was going to' indica planes futuros vistos desde el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q6",
      "type": "fill-blank",
      "question": "The details are ________ (begin) to come back to me.",
      "correctAnswer": "beginning",
      "explanation": "Forma continua para un proceso en curso.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q7",
      "type": "key-word-transformation",
      "question": "I used to play the piano every day. (WOULD)\n\nI __________",
      "sentence": "I used to play the piano every day.",
      "keyWord": "WOULD",
      "startOfAnswer": "I",
      "correctAnswer": "would play the piano every day",
      "explanation": "Hábito en el pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q8",
      "type": "multiple-choice",
      "question": "If a memory is 'etched' in your mind, it is:",
      "options": ["Vague", "Deeply and permanently fixed", "False", "Short-term"],
      "correctAnswer": "Deeply and permanently fixed",
      "explanation": "Metaforizado como grabado en piedra.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q9",
      "type": "fill-blank",
      "question": "By 10 PM, I ________ (study) for five hours.",
      "correctAnswer": "had been studying",
      "explanation": "Past Perfect Continuous para duración hasta un punto pasado.",
      "points": 1
    },
    {
      "id": "c2-u8-b10-q10",
      "type": "multiple-choice",
      "question": "Which idiom means to help someone remember?",
      "options": ["Rings a bell", "Slip one's mind", "Jog one's memory", "Tripped up"],
      "correctAnswer": "Jog one's memory",
      "explanation": "Ayudar a recordar.",
      "points": 1
    }
  ]
};

export const C2_UNIT_8 = createC2Unit(
  'c2-u8',
  'The Paradox of Memory',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U8_BLOCK1,
    C2_U8_BLOCK2,
    C2_U8_BLOCK3,
    C2_U8_BLOCK4,
    C2_U8_BLOCK5,
    C2_U8_BLOCK6,
    C2_U8_BLOCK7,
    C2_U8_BLOCK8,
    C2_U8_BLOCK9,
    C2_U8_BLOCK10
  ]
);
