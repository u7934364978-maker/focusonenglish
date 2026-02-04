
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U16_BLOCK1: Exercise = {
  "id": "c2-u16-b1",
  "type": "vocabulary",
  "title": "Block 1: Cosmology & Astrophysics",
  "explanation": "Advanced terms related to the universe, celestial bodies, and space physics.",
  "questions": [
    {
      "id": "c2-u16-b1-q1",
      "type": "multiple-choice",
      "question": "What is the term used to describe a form of matter that is thought to make up a significant portion of the universe, yet remains invisible and does not emit light?",
      "options": ["Smoke in space", "A hypothetical form of matter that is believed to make up most of the matter in the universe but does not emit light", "The shadow of a planet", "Cold lava"],
      "correctAnswer": "A hypothetical form of matter that is believed to make up most of the matter in the universe but does not emit light",
      "explanation": "Dark matter is detected only by its gravitational effects.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q2",
      "type": "fill-blank",
      "question": "The ________ of the universe is a fundamental question in cosmology.",
      "correctAnswer": "origin",
      "explanation": "Origin refers to the point or place where something begins, arises, or is derived.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q3",
      "type": "key-word-transformation",
      "question": "The star is so far away that we can barely see it. (DISTANT)\n\nThe star is so __________",
      "sentence": "The star is so far away that we can barely see it.",
      "keyWord": "DISTANT",
      "startOfAnswer": "The star is so",
      "correctAnswer": "distant that it is barely visible",
      "explanation": "Distant is a more formal synonym for 'far away'.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q4",
      "type": "multiple-choice",
      "question": "What is a nebula?",
      "options": ["A type of star", "A giant cloud of dust and gas in space", "A black hole", "A telescope"],
      "correctAnswer": "A giant cloud of dust and gas in space",
      "explanation": "Nebulae are often 'stellar nurseries' where stars are born.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q5",
      "type": "fill-blank",
      "question": "The moon ________ the earth once every 27.3 days.",
      "correctAnswer": "orbits",
      "explanation": "To orbit is to move in a curved path around a star, planet, or moon.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q6",
      "type": "key-word-transformation",
      "question": "The force of gravity is weaker on the moon. (GRAVITATIONAL)\n\nThe __________",
      "sentence": "The force of gravity is weaker on the moon.",
      "keyWord": "GRAVITATIONAL",
      "startOfAnswer": "The",
      "correctAnswer": "gravitational pull is weaker on the moon",
      "explanation": "'Gravitational pull' is a standard scientific term.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q7",
      "type": "multiple-choice",
      "question": "Which of the following terms refers to the measurement of how far light travels in one year?",
      "options": ["Time", "Distance", "Brightness", "Speed"],
      "correctAnswer": "Distance",
      "explanation": "A light-year is the distance light travels in one year.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q8",
      "type": "fill-blank",
      "question": "A ________ is an object with such strong gravity that not even light can escape it.",
      "correctAnswer": "black hole",
      "explanation": "Black holes are regions of space-time with extreme gravity.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q9",
      "keyWord": "VAST",
      "type": "key-word-transformation",
      "question": "The universe is extremely large. (VAST)\n\nThe universe is __________",
      "sentence": "The universe is extremely large.",
      "startOfAnswer": "The universe is",
      "correctAnswer": "vast",
      "explanation": "Vast means of very great extent or quantity; immense.",
      "points": 1
    },
    {
      "id": "c2-u16-b1-q10",
      "type": "multiple-choice",
      "question": "What is the term used to describe a powerful and luminous stellar explosion that marks the end of a star's life cycle?",
      "options": ["A new planet", "A powerful and luminous stellar explosion", "A type of space ship", "A solar eclipse"],
      "correctAnswer": "A powerful and luminous stellar explosion",
      "explanation": "Supernovae mark the end of a star's life cycle.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK2: Exercise = {
  "id": "c2-u16-b2",
  "type": "grammar",
  "title": "Block 2: Fronting for Emphasis",
  "explanation": "Moving elements to the front of the sentence for dramatic effect or emphasis.",
  "questions": [
    {
      "id": "c2-u16-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses fronting correctly?",
      "options": ["Away the rocket flew.", "Flew the rocket away.", "The rocket away flew.", "Away flew the rocket."],
      "correctAnswer": "Away flew the rocket.",
      "explanation": "'Adverbial of direction + verb + subject' is a common fronting structure.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q2",
      "type": "fill-blank",
      "question": "________ (rarely) have we witnessed such a spectacular event.",
      "correctAnswer": "Rarely",
      "explanation": "Negative adverbial at the front triggers inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q3",
      "type": "key-word-transformation",
      "question": "A massive star stood in the center of the galaxy. (STOOD)\n\nIn the center of the galaxy __________",
      "sentence": "A massive star stood in the center of the galaxy.",
      "keyWord": "STOOD",
      "startOfAnswer": "In the center of the galaxy",
      "correctAnswer": "stood a massive star",
      "explanation": "Fronting the prepositional phrase.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly employs the structure of 'adjective + verb + subject' for emphasis?",
      "options": ["Happy was he.", "He was happy.", "Was he happy.", "Happy he was."],
      "correctAnswer": "Happy was he.",
      "explanation": "'Adjective + verb + subject' (though 'Happy he was' is also possible in some poetic contexts, this is more standard for emphasis).",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q5",
      "type": "fill-blank",
      "question": "________ (not / only) did he find the star, but he also named it.",
      "correctAnswer": "Not only",
      "explanation": "'Not only' at the front triggers inversion (did he find).",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q6",
      "type": "key-word-transformation",
      "question": "He had never seen anything like it before. (NEVER)\n\nNever __________",
      "sentence": "He had never seen anything like it before.",
      "keyWord": "NEVER",
      "startOfAnswer": "Never",
      "correctAnswer": "before had he seen anything like it.",
      "explanation": "Fronting a negative adverbial.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences employs standard dramatic inversion?",
      "options": ["The rain came down.", "Down came the rain.", "Down the rain came.", "The rain down came."],
      "correctAnswer": "Down came the rain.",
      "explanation": "Standard dramatic inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q8",
      "type": "fill-blank",
      "question": "________ (under / no / circumstances) should you open the airlock.",
      "correctAnswer": "Under no circumstances",
      "explanation": "Negative prepositional phrase triggers inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q9",
      "type": "key-word-transformation",
      "question": "The values of science are more important than fame. (IMPORTANT)\n\nMore ________ are the values of science. __________",
      "sentence": "The values of science are more important than fame.",
      "keyWord": "IMPORTANT",
      "startOfAnswer": "More ________ are the values of science.",
      "correctAnswer": "More important than fame are the values of science.",
      "explanation": "Fronting the comparative adjective phrase.",
      "points": 1
    },
    {
      "id": "c2-u16-b2-q10",
      "type": "multiple-choice",
      "question": "Which of the following techniques is employed to emphasize a particular part of a sentence?",
      "options": ["Cutting a sentence in half", "Using 'It is...' or 'What...' to focus on a specific part of the sentence", "Using very long words", "Ending a sentence with a preposition"],
      "correctAnswer": "Using 'It is...' or 'What...' to focus on a specific part of the sentence",
      "explanation": "Cleft sentences (It-clefts and Wh-clefts) are powerful tools for focus.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK3: Exercise = {
  "id": "c2-u16-b3",
  "type": "vocabulary",
  "title": "Block 3: Space Exploration & Technology",
  "explanation": "Vocabulary for missions, spacecraft, and life in space.",
  "questions": [
    {
      "id": "c2-u16-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'telemetry'?",
      "options": ["A type of space food", "The process of recording and transmitting the readings of an instrument to a remote location", "A new type of engine", "A star chart"],
      "correctAnswer": "The process of recording and transmitting the readings of an instrument to a remote location",
      "explanation": "Telemetry is vital for monitoring spacecraft.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q2",
      "type": "fill-blank",
      "question": "The astronaut performed an ________ (EVA) to repair the satellite.",
      "correctAnswer": "extra-vehicular activity",
      "explanation": "EVA is the technical term for a 'spacewalk'.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q3",
      "type": "key-word-transformation",
      "question": "The mission was a complete failure. (ABORTED)\n\nThe mission had to be __________",
      "sentence": "The mission was a complete failure.",
      "keyWord": "ABORTED",
      "startOfAnswer": "The mission had to be",
      "correctAnswer": "aborted",
      "explanation": "To abort is to bring to a premature end because of a problem or fault.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q4",
      "type": "multiple-choice",
      "question": "What does the term \"payload capacity\" refer to in the context of space missions?",
      "options": ["The cost of the mission", "The passengers or instruments being carried by a spacecraft", "The fuel used for launch", "A type of space suit"],
      "correctAnswer": "The passengers or instruments being carried by a spacecraft",
      "explanation": "Payload capacity is a key metric for rockets.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q5",
      "type": "fill-blank",
      "question": "The spacecraft entered the Earth's ________.",
      "correctAnswer": "atmosphere",
      "explanation": "Atmospheric entry is a critical phase of return.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q6",
      "type": "key-word-transformation",
      "question": "They finally reached the moon after a three-day journey. (DESTINATION)\n\nThe moon was their final __________",
      "sentence": "They finally reached the moon after a three-day journey.",
      "keyWord": "DESTINATION",
      "startOfAnswer": "The moon was their final",
      "correctAnswer": "destination",
      "explanation": "Destination is the place to which someone or something is going.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q7",
      "type": "multiple-choice",
      "question": "What is the term used to describe the state in which people or objects experience a sensation of weightlessness, particularly in an environment like space?",
      "options": ["A place with no air", "The condition in which people or objects appear to be weightless", "Being very cold", "Moving very slowly"],
      "correctAnswer": "The condition in which people or objects appear to be weightless",
      "explanation": "Microgravity occurs during freefall in orbit.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q8",
      "type": "fill-blank",
      "question": "The ________ was launched successfully from the cape.",
      "correctAnswer": "rocket",
      "explanation": "Rockets provide the thrust needed to reach space.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q9",
      "keyWord": "THRESHOLD",
      "type": "key-word-transformation",
      "question": "We are at the beginning of a new era of exploration. (THRESHOLD)\n\nWe are on the __________",
      "sentence": "We are at the beginning of a new era of exploration.",
      "startOfAnswer": "We are on the",
      "correctAnswer": "threshold of exploration",
      "explanation": "'On the threshold of' means at the beginning of something significant.",
      "points": 1
    },
    {
      "id": "c2-u16-b3-q10",
      "type": "multiple-choice",
      "question": "Which of the following describes the process by which two spacecraft connect in outer space to facilitate crew and cargo transfer?",
      "options": ["Landing on a planet", "The joining of two spacecraft in space", "Fixing a computer", "Eating space food"],
      "correctAnswer": "The joining of two spacecraft in space",
      "explanation": "Docking allows for crew and cargo transfer.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK4: Exercise = {
  "id": "c2-u16-b4",
  "type": "grammar",
  "title": "Block 4: Cleft Sentences (It-clefts & Wh-clefts)",
  "explanation": "Using 'It is...' and 'What...' to highlight specific information.",
  "questions": [
    {
      "id": "c2-u16-b4-q1",
      "type": "multiple-choice",
      "question": "Which is an example of an It-cleft focusing on 'The Captain'?",
      "options": ["The Captain made the decision.", "What the Captain did was make the decision.", "It was the Captain who made the decision.", "The decision was made by the Captain."],
      "correctAnswer": "It was the Captain who made the decision.",
      "explanation": "It-clefts follow the structure: It + be + focused element + relative clause.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q2",
      "type": "fill-blank",
      "question": "________ (what) I really need is a cup of coffee.",
      "correctAnswer": "What",
      "explanation": "Wh-cleft to focus on the object/need.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q3",
      "type": "key-word-transformation",
      "question": "She wants a new telescope for her birthday. (IS)\n\nWhat __________",
      "sentence": "She wants a new telescope for her birthday.",
      "keyWord": "IS",
      "startOfAnswer": "What",
      "correctAnswer": "she wants for her birthday is a new telescope",
      "explanation": "Transforming to a Wh-cleft.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly employs a Wh-cleft construction to explain why he left?",
      "options": ["He left because he was angry.", "The reason why he left was that he was angry.", "Why he left was because he was angry.", "It was anger that made him leave."],
      "correctAnswer": "The reason why he left was that he was angry.",
      "explanation": "Using a Wh-cleft with 'The reason why'.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q5",
      "type": "fill-blank",
      "question": "It was in 1969 ________ humans first walked on the moon.",
      "correctAnswer": "that",
      "explanation": "Relative word in an It-cleft focusing on time.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q6",
      "type": "key-word-transformation",
      "question": "I only realized my mistake later. (UNTIL)\n\nIt wasn't __________",
      "sentence": "I only realized my mistake later.",
      "keyWord": "UNTIL",
      "startOfAnswer": "It wasn't",
      "correctAnswer": "until later that I realized my mistake",
      "explanation": "Standard emphatic 'It wasn't until... that' structure.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly emphasizes the action he took?",
      "options": ["What he bought was a car.", "What he did was buy a car.", "It was a car he bought.", "The car was what he bought."],
      "correctAnswer": "What he did was buy a car.",
      "explanation": "Using 'What + subject + do' to focus on the verb phrase.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q8",
      "type": "fill-blank",
      "question": "________ (it) was my brother who told me the news.",
      "correctAnswer": "It",
      "explanation": "Subject of an It-cleft.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q9",
      "type": "key-word-transformation",
      "question": "I hate the cold weather most of all. (HATRED)\n\nWhat I have is __________",
      "sentence": "I hate the cold weather most of all.",
      "keyWord": "HATRED",
      "startOfAnswer": "What I have is",
      "correctAnswer": "a hatred for the cold weather",
      "explanation": "Wh-cleft with a noun transformation.",
      "points": 1
    },
    {
      "id": "c2-u16-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly employs a Wh-cleft construction to express the location of something quiet?",
      "options": ["Where I live is quiet.", "The place where I live is quiet.", "It is a quiet place where I live.", "What is quiet is where I live."],
      "correctAnswer": "The place where I live is quiet.",
      "explanation": "'The place where' is a standard way to start a Wh-cleft for location.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK5: Exercise = {
  "id": "c2-u16-b5",
  "type": "vocabulary",
  "title": "Block 5: Existential Questions & Future",
  "explanation": "Vocabulary for the big questions about life beyond Earth and the future of humanity.",
  "questions": [
    {
      "id": "c2-u16-b5-q1",
      "type": "multiple-choice",
      "question": "What is the 'Fermi Paradox'?",
      "options": ["A problem with a rocket engine", "The contradiction between the high probability of extraterrestrial life and the lack of evidence for it", "A type of black hole", "A law about space speed"],
      "correctAnswer": "The contradiction between the high probability of extraterrestrial life and the lack of evidence for it",
      "explanation": "Named after Enrico Fermi, it asks: 'Where is everybody?'.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q2",
      "type": "fill-blank",
      "question": "The discovery of an ________ planet could change everything.",
      "correctAnswer": "Earth-like",
      "explanation": "Exoplanets that resemble Earth are high-priority targets.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q3",
      "type": "key-word-transformation",
      "question": "The possibility of alien life is very exciting. (PROSPECT)\n\nThe prospect of __________",
      "sentence": "The possibility of alien life is very exciting.",
      "keyWord": "PROSPECT",
      "startOfAnswer": "The prospect of",
      "correctAnswer": "prospect of alien life is very exciting",
      "explanation": "Prospect refers to the possibility or likelihood of some future event occurring.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q4",
      "type": "multiple-choice",
      "question": "What is the acronym SETI commonly associated with?",
      "options": ["A type of space suit", "Search for Extraterrestrial Intelligence", "Space Exploration and Technology Institute", "A city on Mars"],
      "correctAnswer": "Search for Extraterrestrial Intelligence",
      "explanation": "SETI uses radio telescopes to listen for signals.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q5",
      "type": "fill-blank",
      "question": "Some scientists argue that we should ________ other planets.",
      "correctAnswer": "colonize",
      "explanation": "Colonization is the act of establishing control over an area or people.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q6",
      "type": "key-word-transformation",
      "question": "Our knowledge of the universe is still very limited. (SURFACE)\n\nWe have only __________",
      "sentence": "Our knowledge of the universe is still very limited.",
      "keyWord": "SURFACE",
      "startOfAnswer": "We have only",
      "correctAnswer": "scratched the surface of the universe",
      "explanation": "'Scratch the surface' means to deal with only a small part of a subject or problem.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q7",
      "type": "multiple-choice",
      "question": "What term refers to the process of deliberately modifying the atmosphere and temperature of a planet to make it habitable for humans?",
      "options": ["Building giant mirrors", "Deliberately modifying the atmosphere and temperature of a planet to make it habitable for humans", "Searching for water", "Moving a planet"],
      "correctAnswer": "Deliberately modifying the atmosphere and temperature of a planet to make it habitable for humans",
      "explanation": "Terraforming is a staple of science fiction and future speculation.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q8",
      "type": "fill-blank",
      "question": "The search for ________ life is a major scientific endeavor.",
      "correctAnswer": "extraterrestrial",
      "explanation": "Extraterrestrial means from outside the earth or its atmosphere.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q9",
      "keyWord": "BOUNDS",
      "type": "key-word-transformation",
      "question": "Human curiosity has no limits. (BOUNDS)\n\nHuman curiosity knows __________",
      "sentence": "Human curiosity has no limits.",
      "startOfAnswer": "Human curiosity knows",
      "correctAnswer": "no bounds",
      "explanation": "'Know no bounds' means to be limitless.",
      "points": 1
    },
    {
      "id": "c2-u16-b5-q10",
      "type": "multiple-choice",
      "question": "Which of the following best describes an exoplanet?",
      "options": ["A planet that has exploded", "A planet that orbits a star outside our solar system", "A very cold planet", "A planet made of metal"],
      "correctAnswer": "A planet that orbits a star outside our solar system",
      "explanation": "Thousands of exoplanets have been discovered in recent years.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK6: Exercise = {
  "id": "c2-u16-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Advanced Emphasis Transformations",
  "explanation": "Combining fronting and cleft sentences.",
  "questions": [
    {
      "id": "c2-u16-b6-q1",
      "type": "key-word-transformation",
      "question": "He only wanted to help. (ALL)\n\n________ was help. __________",
      "sentence": "He only wanted to help.",
      "keyWord": "ALL",
      "startOfAnswer": "________ was help.",
      "correctAnswer": "All he wanted was help.",
      "explanation": "Wh-cleft with 'All'.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q2",
      "type": "key-word-transformation",
      "question": "The news was so shocking that I couldn't speak. (SHOCKING)\n\nSo __________",
      "sentence": "The news was so shocking that I couldn't speak.",
      "keyWord": "SHOCKING",
      "startOfAnswer": "So",
      "correctAnswer": "shocking was the news that I couldn't speak",
      "explanation": "Fronting the adjective for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q3",
      "type": "key-word-transformation",
      "question": "I haven't seen such a beautiful sight anywhere else. (NOWHERE)\n\n________ such a beautiful sight. __________",
      "sentence": "I haven't seen such a beautiful sight anywhere else.",
      "keyWord": "NOWHERE",
      "startOfAnswer": "________ such a beautiful sight.",
      "correctAnswer": "Nowhere else have I seen such a beautiful sight.",
      "explanation": "Negative fronting with inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q4",
      "type": "key-word-transformation",
      "question": "It was her smile that I noticed first. (WHAT)\n\n________ was her smile. __________",
      "sentence": "It was her smile that I noticed first.",
      "keyWord": "WHAT",
      "startOfAnswer": "________ was her smile.",
      "correctAnswer": "What I noticed first was her smile.",
      "explanation": "Transforming It-cleft to Wh-cleft.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q5",
      "type": "key-word-transformation",
      "question": "The rocket went up into the sky. (UP)\n\n________ the rocket. __________",
      "sentence": "The rocket went up into the sky.",
      "keyWord": "UP",
      "startOfAnswer": "________ the rocket.",
      "correctAnswer": "Up into the sky went the rocket.",
      "explanation": "Fronting the adverbial of direction.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q6",
      "type": "key-word-transformation",
      "question": "I only realized the truth when I saw the photo. (DID)\n\nOnly when I saw the photo __________",
      "sentence": "I only realized the truth when I saw the photo.",
      "keyWord": "DID",
      "startOfAnswer": "Only when I saw the photo",
      "correctAnswer": "did I realize the truth",
      "explanation": "Emphasis with 'Only when' at the front.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q7",
      "type": "key-word-transformation",
      "question": "I'm looking for my keys. (IT)\n\n________ I'm looking for. __________",
      "sentence": "I'm looking for my keys.",
      "keyWord": "IT",
      "startOfAnswer": "________ I'm looking for.",
      "correctAnswer": "It is the keys that I'm looking for.",
      "explanation": "Creating an It-cleft.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q8",
      "type": "key-word-transformation",
      "question": "He rarely goes out after dark. (RARELY)\n\n________ after dark. __________",
      "sentence": "He rarely goes out after dark.",
      "keyWord": "RARELY",
      "startOfAnswer": "________ after dark.",
      "correctAnswer": "Rarely does he go out after dark.",
      "explanation": "Fronting with a negative frequency adverb.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q9",
      "type": "key-word-transformation",
      "question": "The cost of the mission is the biggest problem. (WHAT)\n\n________ the cost of the mission. __________",
      "sentence": "The cost of the mission is the biggest problem.",
      "keyWord": "WHAT",
      "startOfAnswer": "________ the cost of the mission.",
      "correctAnswer": "What is the biggest problem is the cost of the mission.",
      "explanation": "Double 'is' Wh-cleft.",
      "points": 1
    },
    {
      "id": "c2-u16-b6-q10",
      "type": "key-word-transformation",
      "question": "You must not tell anyone under any circumstances. (NO)\n\nUnder __________",
      "sentence": "You must not tell anyone under any circumstances.",
      "keyWord": "NO",
      "startOfAnswer": "Under",
      "correctAnswer": "no circumstances must you tell anyone",
      "explanation": "Negative prepositional fronting.",
      "points": 1
    }
  ]};

export const C2_U16_BLOCK7: Exercise = {
  "id": "c2-u16-b7",
  "type": "vocabulary",
  "title": "Block 7: Space Idioms & Sayings",
  "explanation": "Expressions derived from astronomy and exploration.",
  "questions": [
    {
      "id": "c2-u16-b7-q1",
      "type": "multiple-choice",
      "question": "Which idiom means something is of exceptional quality?",
      "options": ["It is in space", "It is extremely good or impressive", "It is very far away", "It is invisible"],
      "correctAnswer": "It is extremely good or impressive",
      "explanation": "Idiom for excellence.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q2",
      "type": "fill-blank",
      "question": "He's over the ________ about his new job.",
      "correctAnswer": "moon",
      "explanation": "'Over the moon' means extremely happy.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q3",
      "type": "multiple-choice",
      "question": "If something happens 'once in a blue moon', it happens...",
      "options": ["Every night", "Very rarely", "During a full moon", "Only in the morning"],
      "correctAnswer": "Very rarely",
      "explanation": "Idiom for rarity.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q4",
      "type": "fill-blank",
      "question": "She's reaching for the ________ with her ambitious plans.",
      "correctAnswer": "stars",
      "explanation": "'Reach for the stars' means to aim for something very difficult or high.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to bring someone back down to earth' mean?",
      "options": ["To help them land a plane", "To make someone realize the reality of a situation after they have been too excited", "To take someone on a journey", "To be very rude"],
      "correctAnswer": "To make someone realize the reality of a situation after they have been too excited",
      "explanation": "Idiom for reality check.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q6",
      "type": "fill-blank",
      "question": "There's no ________ for error in this mission.",
      "correctAnswer": "margin",
      "explanation": "'Margin for error' is the amount by which you can be wrong without causing a total failure.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q7",
      "type": "multiple-choice",
      "question": "If someone is 'spaced out', they are...",
      "options": ["In a space suit", "Not aware of what is happening around them, often due to tiredness or drugs", "Moving very fast", "In a large room"],
      "correctAnswer": "Not aware of what is happening around them, often due to tiredness or drugs",
      "explanation": "Idiom for being dazed or distracted.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q8",
      "type": "fill-blank",
      "question": "The sky is the ________.",
      "correctAnswer": "limit",
      "explanation": "'The sky is the limit' means there is no limit to what can be achieved.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'star-crossed lovers' mean?",
      "options": ["Lovers who like astronomy", "Lovers whose relationship is doomed to fail by bad luck or fate", "Lovers who live in different countries", "Lovers who are very famous"],
      "correctAnswer": "Lovers whose relationship is doomed to fail by bad luck or fate",
      "explanation": "A term famously used by Shakespeare in Romeo and Juliet.",
      "points": 1
    },
    {
      "id": "c2-u16-b7-q10",
      "type": "fill-blank",
      "question": "It's not exactly ________ science.",
      "correctAnswer": "rocket",
      "explanation": "Meaning it's not very difficult to understand.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK8: Exercise = {
  "id": "c2-u16-b8",
  "type": "reading",
  "title": "Block 8: The Search for Life",
  "explanation": "Analyze a text about astrobiology and the conditions for life.",
  "questions": [
    {
      "id": "c2-u16-b8-q1",
      "type": "multiple-choice",
      "question": "What is the 'Goldilocks zone'?",
      "options": ["A place where bears live", "The habitable zone around a star where the temperature is 'just right' for liquid water to exist", "A very bright part of a galaxy", "A type of space suit"],
      "correctAnswer": "The habitable zone around a star where the temperature is 'just right' for liquid water to exist",
      "explanation": "Planets in this zone are prime candidates for life.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q2",
      "type": "fill-blank",
      "question": "The presence of ________ is considered a key indicator for potential life.",
      "correctAnswer": "liquid water",
      "explanation": "Water is a universal solvent necessary for life as we know it.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q3",
      "type": "multiple-choice",
      "question": "What does 'extremophile' refer to?",
      "options": ["Someone who likes extreme sports", "An organism that thrives in physically or geochemically extreme conditions that are detrimental to most life on Earth", "A type of comet", "A very fast spacecraft"],
      "correctAnswer": "An organism that thrives in physically or geochemically extreme conditions that are detrimental to most life on Earth",
      "explanation": "Extremophiles suggest that life could exist in harsh space environments.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q4",
      "type": "fill-blank",
      "question": "Astrobiology is a multi-disciplinary ________.",
      "correctAnswer": "field",
      "explanation": "A field of study.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'panspermia'?",
      "options": ["A type of space sickness", "The hypothesis that life exists throughout the Universe, distributed by space dust, meteoroids, asteroids, and comets", "A way to grow plants in space", "A new language"],
      "correctAnswer": "The hypothesis that life exists throughout the Universe, distributed by space dust, meteoroids, asteroids, and comets",
      "explanation": "Panspermia suggests that life on Earth might have originated elsewhere.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q6",
      "type": "fill-blank",
      "question": "The ________ for life beyond Earth continues.",
      "correctAnswer": "quest",
      "explanation": "Quest is a long or arduous search for something.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q7",
      "type": "multiple-choice",
      "question": "What are 'biosignatures'?",
      "options": ["An astronaut's autograph", "Any substance or phenomenon that provides scientific evidence of past or present life", "A type of space food", "The DNA of a space monkey"],
      "correctAnswer": "Any substance or phenomenon that provides scientific evidence of past or present life",
      "explanation": "Biosignatures can be chemical, physical, or morphological.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q8",
      "type": "fill-blank",
      "question": "Methane in the Martian atmosphere is a potential ________.",
      "correctAnswer": "biosignature",
      "explanation": "Methane can be produced by biological or geological processes.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q9",
      "type": "multiple-choice",
      "question": "What does 'habitable' mean?",
      "options": ["Suitable or good enough to live in", "Very small", "Made of rock", "Full of gas"],
      "correctAnswer": "Suitable or good enough to live in",
      "explanation": "Habitability is a central concept in astrobiology.",
      "points": 1
    },
    {
      "id": "c2-u16-b8-q10",
      "type": "fill-blank",
      "question": "The universe is ________ with possibilities.",
      "correctAnswer": "teeming",
      "explanation": "Teeming means to be full of or swarming with.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK9: Exercise = {
  "id": "c2-u16-b9",
  "type": "grammar",
  "title": "Block 9: Inversion after Negative Adverbials",
  "explanation": "Detailed practice on inversion structures like 'Hardly had...', 'No sooner...'.",
  "questions": [
    {
      "id": "c2-u16-b9-q1",
      "type": "multiple-choice",
      "question": "Which sentence shows the correct use of 'No sooner'?",
      "options": ["No sooner he had left than it started to rain.", "No sooner had he left than it started to rain.", "No sooner had he left when it started to rain.", "No sooner he left than it started to rain."],
      "correctAnswer": "No sooner had he left than it started to rain.",
      "explanation": "'No sooner... than' requires inversion and the word 'than'.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q2",
      "type": "fill-blank",
      "question": "________ (hardly) had I closed my eyes when the phone rang.",
      "correctAnswer": "Hardly",
      "explanation": "'Hardly... when' requires inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q3",
      "type": "key-word-transformation",
      "question": "As soon as the sun rose, they started their journey. (SOONER)\n\nNo __________",
      "sentence": "As soon as the sun rose, they started their journey.",
      "keyWord": "SOONER",
      "startOfAnswer": "No",
      "correctAnswer": "sooner had the sun risen than they started their journey",
      "explanation": "Transforming 'As soon as' to 'No sooner... than'.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q4",
      "type": "multiple-choice",
      "question": "Which of the following options correctly completes the sentence: \"___ he entered when everyone cheered\"?",
      "options": ["Scarcely had he entered when everyone cheered.", "Scarcely he had entered than everyone cheered.", "Scarcely had he entered than everyone cheered.", "Scarcely he entered when everyone cheered."],
      "correctAnswer": "Scarcely had he entered when everyone cheered.",
      "explanation": "'Scarcely... when' is the correct pair.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q5",
      "type": "fill-blank",
      "question": "Not until much later ________ (I / realize) what had happened.",
      "correctAnswer": "did I realize",
      "explanation": "Inversion after 'Not until'.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q6",
      "type": "key-word-transformation",
      "question": "You should not leave the house under any circumstances. (ACCOUNT)\n\nOn no __________",
      "sentence": "You should not leave the house under any circumstances.",
      "keyWord": "ACCOUNT",
      "startOfAnswer": "On no",
      "correctAnswer": "account should you leave the house",
      "explanation": "'On no account' triggers inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences is grammatically correct and uses inversion for emphasis?",
      "options": ["Little he knew about the surprise.", "Little did he know about the surprise.", "Little knew he about the surprise.", "He little knew about the surprise."],
      "correctAnswer": "Little did he know about the surprise.",
      "explanation": "'Little' at the front for emphasis triggers inversion.",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q8",
      "type": "fill-blank",
      "question": "Only by ________ (work) hard will you succeed.",
      "correctAnswer": "working",
      "explanation": "'Only by + -ing' at the front triggers inversion in the main clause (will you).",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q9",
      "type": "key-word-transformation",
      "question": "If I had known, I wouldn't have come. (HAD)\n\nHad __________",
      "sentence": "If I had known, I wouldn't have come.",
      "keyWord": "HAD",
      "startOfAnswer": "Had",
      "correctAnswer": "I known, I wouldn't have come",
      "explanation": "Inversion in a conditional clause (formal).",
      "points": 1
    },
    {
      "id": "c2-u16-b9-q10",
      "type": "multiple-choice",
      "question": "What grammatical structure is typically required when using the adverb \"seldom\" in a sentence?",
      "options": ["A past tense", "An inversion of subject and auxiliary verb", "A negative verb", "A question mark"],
      "correctAnswer": "An inversion of subject and auxiliary verb",
      "explanation": "Seldom is a negative frequency adverb.",
      "points": 1
    }
  ]
};

export const C2_U16_BLOCK10: Exercise = {
  "id": "c2-u16-b10",
  "type": "vocabulary",
  "title": "Block 10: Space Review",
  "explanation": "Final review of Unit 16 concepts.",
  "questions": [
    {
      "id": "c2-u16-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes the study of the origin, evolution, and eventual fate of the universe?",
      "options": ["Astrology", "Astronomy", "Cosmology", "Geography"],
      "correctAnswer": "Cosmology",
      "explanation": "Cosmology is the overarching science of the universe.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q2",
      "startOfAnswer": "The distance between the two stars.",
      "keyWord": "DISTANCE",
      "sentence": "The distance between the two stars is immense.",
      "type": "key-word-transformation",
      "question": "The distance between the two stars is immense. (DISTANCE)\n\nThe distance between the two stars. __________",
      "correctAnswer": "distance",
      "explanation": "La distancia se refiere a la medida en línea recta entre dos puntos.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q3",
      "type": "multiple-choice",
      "question": "What is an 'asteroid'?",
      "options": ["A type of star", "A small rocky body orbiting the sun", "A ball of ice and dust", "A moon of Jupiter"],
      "correctAnswer": "A small rocky body orbiting the sun",
      "explanation": "Asteroids are mostly found in the asteroid belt.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q4",
      "type": "fill-blank",
      "question": "The spacecraft is designed to ________ extreme heat.",
      "correctAnswer": "withstand",
      "explanation": "To withstand is to remain undamaged or unaffected by.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q5",
      "type": "key-word-transformation",
      "question": "I have never seen such a sight. (NEVER)\n\n________ such a sight. __________",
      "sentence": "I have never seen such a sight.",
      "keyWord": "NEVER",
      "startOfAnswer": "________ such a sight.",
      "correctAnswer": "Never have I seen such a sight.",
      "explanation": "Simple inversion for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following terms best describes the force that draws objects toward the center of the Earth or any other mass?",
      "options": ["A type of light", "The force that attracts a body toward the center of the earth, or toward any other physical body having mass", "The speed of a rocket", "A type of space gas"],
      "correctAnswer": "The force that attracts a body toward the center of the earth, or toward any other physical body having mass",
      "explanation": "Gravity is one of the four fundamental forces.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q7",
      "startOfAnswer": "The moon landing",
      "keyWord": "MOON LANDING",
      "sentence": "The moon landing was a major milestone in space exploration.",
      "type": "key-word-transformation",
      "question": "The moon landing was a major milestone in space exploration. (MOON LANDING)\n\nThe moon landing __________",
      "correctAnswer": "",
      "explanation": "El alunizaje es un evento histórico que marcó un gran avance en la exploración del espacio.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q8",
      "type": "key-word-transformation",
      "question": "The engine failed, not the sensors. (IT)\n\n________ that failed. __________",
      "sentence": "The engine failed, not the sensors.",
      "keyWord": "IT",
      "startOfAnswer": "________ that failed.",
      "correctAnswer": "It was the engine that failed.",
      "explanation": "It-cleft for focus.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q9",
      "type": "multiple-choice",
      "question": "What is a 'constellation'?",
      "options": ["A group of planets", "A group of stars forming a recognizable pattern", "A single very bright star", "A type of galaxy"],
      "correctAnswer": "A group of stars forming a recognizable pattern",
      "explanation": "Constellations are often named after mythological figures.",
      "points": 1
    },
    {
      "id": "c2-u16-b10-q10",
      "type": "fill-blank",
      "question": "The universe is ________ with stars.",
      "correctAnswer": "filled",
      "explanation": "Simple descriptive verb.",
      "points": 1
    }
  ]
};

export const C2_UNIT_16 = createC2Unit(
  'c2-u16',
  'Cosmology & Space Exploration',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U16_BLOCK1, C2_U16_BLOCK2, C2_U16_BLOCK3, C2_U16_BLOCK4, C2_U16_BLOCK5,
    C2_U16_BLOCK6, C2_U16_BLOCK7, C2_U16_BLOCK8, C2_U16_BLOCK9, C2_U16_BLOCK10
  ]
);
