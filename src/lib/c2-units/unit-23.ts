
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U23_BLOCK1: Exercise = {
  "id": "c2-u23-b1",
  "type": "vocabulary",
  "title": "Block 1: Rhetorical Devices & Figures of Speech",
  "explanation": "Advanced terminology for persuasive speaking and writing (e.g., alliteration, anaphora, hyperbole).",
  "questions": [
    {
      "id": "c2-u23-b1-q1",
      "type": "multiple-choice",
      "question": "Which of the following terms describes the repetition of a word or phrase at the beginning of successive clauses?",
      "options": ["A type of flower", "The repetition of a word or phrase at the beginning of successive clauses", "Using a soft word instead of a harsh one", "An exaggeration"],
      "correctAnswer": "The repetition of a word or phrase at the beginning of successive clauses",
      "explanation": "Anaphora is a powerful rhetorical tool for emphasis and rhythm (e.g., 'I have a dream...').",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q2",
      "type": "fill-blank",
      "question": "The phrase 'Peter Piper picked a peck of pickled peppers' is an example of ________.",
      "correctAnswer": "alliteration",
      "explanation": "Alliteration is the occurrence of the same letter or sound at the beginning of adjacent or closely connected words.",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'hyperbole'?",
      "options": ["A very fast speed", "Exaggerated statements or claims not meant to be taken literally", "A type of shape", "A quiet whisper"],
      "correctAnswer": "Exaggerated statements or claims not meant to be taken literally",
      "explanation": "Hyperbole is used for emphasis or effect (e.g., 'I've told you a million times').",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q4",
      "type": "fill-blank",
      "question": "A ________ question is asked to make a point rather than to get an answer.",
      "correctAnswer": "rhetorical",
      "explanation": "Rhetorical questions engage the audience and provoke thought.",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'antithesis'?",
      "options": ["The opposite of a thesis", "A person or thing that is the direct opposite of someone or something else; used in rhetoric to contrast ideas", "A type of medication", "A final summary"],
      "correctAnswer": "A person or thing that is the direct opposite of someone or something else; used in rhetoric to contrast ideas",
      "explanation": "Antithesis creates a sharp contrast (e.g., 'Speech is silver, but silence is gold').",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q6",
      "type": "fill-blank",
      "question": "The use of 'passed away' instead of 'died' is an example of a ________.",
      "correctAnswer": "euphemism",
      "explanation": "Euphemisms are mild or indirect words or expressions substituted for ones considered too harsh or blunt.",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'oxymoron'?",
      "options": ["A very stupid person", "A figure of speech in which apparently contradictory terms appear in conjunction", "A type of oxygen", "A fast car"],
      "correctAnswer": "A figure of speech in which apparently contradictory terms appear in conjunction",
      "explanation": "Examples include 'jumbo shrimp' or 'deafening silence'.",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q8",
      "type": "fill-blank",
      "question": "The speech was full of powerful ________.",
      "correctAnswer": "metaphors",
      "explanation": "Metaphors describe something by saying it is something else, to suggest a resemblance.",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'irony'?",
      "options": ["Something made of iron", "The expression of one's meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect", "A type of metal", "A loud noise"],
      "correctAnswer": "The expression of one's meaning by using language that normally signifies the opposite, typically for humorous or emphatic effect",
      "explanation": "Irony can be verbal, situational, or dramatic.",
      "points": 1
    },
    {
      "id": "c2-u23-b1-q10",
      "type": "fill-blank",
      "question": "The use of three parallel words or phrases is known as a ________.",
      "correctAnswer": "tricolon",
      "explanation": "A tricolon (or the 'rule of three') is a common rhetorical structure (e.g., 'Veni, vidi, vici').",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK2: Exercise = {
  "id": "c2-u23-b2",
  "type": "grammar",
  "title": "Block 2: Cleft Sentences for Focus",
  "explanation": "Using 'It is/was... that' and 'What... is/was' to focus on specific information.",
  "questions": [
    {
      "id": "c2-u23-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence is a 'what-cleft'?",
      "options": ["It was the music that I liked most.", "What I liked most was the music.", "I liked the music most.", "The music was what I liked most."],
      "correctAnswer": "What I liked most was the music.",
      "explanation": "What-clefts (or pseudo-clefts) focus on the entire clause introduced by 'what'.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q2",
      "type": "fill-blank",
      "question": "It was ________ John who told me the news, not Mary.",
      "correctAnswer": "it was",
      "explanation": "Standard it-cleft structure.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q3",
      "type": "key-word-transformation",
      "question": "I only need a glass of water. (ALL)\n\n________ is a glass of water. __________",
      "sentence": "I only need a glass of water.",
      "keyWord": "ALL",
      "startOfAnswer": "________ is a glass of water.",
      "correctAnswer": "All I need is a glass of water.",
      "explanation": "Using 'All' as a cleft-like focus marker.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly emphasizes the cause of the project's failure?",
      "options": ["What the project failed was the lack of money.", "It was the lack of money that caused the project to fail.", "The lack of money was why it failed.", "It failed because of money."],
      "correctAnswer": "It was the lack of money that caused the project to fail.",
      "explanation": "It-clefts are very common for highlighting cause or agency.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q5",
      "type": "fill-blank",
      "question": "What he did ________ (be) to apologize for his behavior.",
      "correctAnswer": "was",
      "explanation": "Past tense what-cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q6",
      "type": "key-word-transformation",
      "question": "I hate the cold weather. (IT)\n\n________ the cold weather that I hate. __________",
      "sentence": "I hate the cold weather.",
      "keyWord": "IT",
      "startOfAnswer": "________ the cold weather that I hate.",
      "correctAnswer": "It is the cold weather that I hate.",
      "explanation": "It-cleft for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences expresses the idea that traffic is the most disliked aspect of your life?",
      "options": ["The thing that I hate most is traffic.", "I hate traffic most.", "It is traffic that I hate most.", "What I hate most is traffic."],
      "correctAnswer": "The thing that I hate most is traffic.",
      "explanation": "'The thing that' is a more explicit alternative to a what-cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q8",
      "type": "fill-blank",
      "question": "________ I love about the city is its energy.",
      "correctAnswer": "What",
      "explanation": "Beginning of a what-cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q9",
      "type": "key-word-transformation",
      "question": "He went to the airport to meet his brother. (REASON)\n\nThe reason why __________.",
      "sentence": "He went to the airport to meet his brother.",
      "keyWord": "REASON",
      "startOfAnswer": "The reason why",
      "correctAnswer": "he went to the airport was to meet his brother.",
      "explanation": "Using 'The reason why' as a focus structure.",
      "points": 1
    },
    {
      "id": "c2-u23-b2-q10",
      "type": "multiple-choice",
      "question": "What is the main purpose of using a cleft sentence in English?",
      "options": ["To make the sentence longer", "To highlight new or important information", "To avoid using verbs", "To be more poetic"],
      "correctAnswer": "To highlight new or important information",
      "explanation": "Clefting allows the speaker to control the information flow.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK3: Exercise = {
  "id": "c2-u23-b3",
  "type": "vocabulary",
  "title": "Block 3: Ethos, Pathos, and Logos",
  "explanation": "The three pillars of Aristotelian persuasion.",
  "questions": [
    {
      "id": "c2-u23-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'ethos' primarily concerned with?",
      "options": ["Logic", "Emotions", "The credibility or character of the speaker", "A type of fruit"],
      "correctAnswer": "The credibility or character of the speaker",
      "explanation": "Ethos establishes trust with the audience.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q2",
      "type": "fill-blank",
      "question": "A speech that relies on facts and statistics is using ________.",
      "correctAnswer": "logos",
      "explanation": "Logos is the appeal to logic and reason.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'pathos'?",
      "options": ["A type of road", "The appeal to the audience's emotions", "Scientific evidence", "A religious ceremony"],
      "correctAnswer": "The appeal to the audience's emotions",
      "explanation": "Pathos seeks to evoke feelings of pity, sympathy, or anger.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q4",
      "type": "fill-blank",
      "question": "A ________ argument is one that is logically sound and difficult to refute.",
      "correctAnswer": "cogent",
      "explanation": "Cogent means clear, logical, and convincing.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'specious' mean in the context of an argument?",
      "options": ["Very fast", "Superficially plausible, but actually wrong", "Extremely deep", "Very long"],
      "correctAnswer": "Superficially plausible, but actually wrong",
      "explanation": "A specious argument looks good at first but is flawed.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q6",
      "type": "fill-blank",
      "question": "The speaker used ________ language to incite the crowd.",
      "correctAnswer": "inflammatory",
      "explanation": "Inflammatory language is intended to stir up anger or violence.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'rhetoric'?",
      "options": ["A type of building", "The art of effective or persuasive speaking or writing", "A religious ceremony", "A government secret"],
      "correctAnswer": "The art of effective or persuasive speaking or writing",
      "explanation": "Rhetoric is the study of how to persuade through language.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q8",
      "type": "fill-blank",
      "question": "The candidate's ________ was met with skepticism.",
      "correctAnswer": "platitude",
      "explanation": "A platitude is a remark or statement, especially one with a moral content, that has been used too often to be interesting or thoughtful.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'demagoguery'?",
      "options": ["Rule by the people", "Political activity or practices that seek support by appealing to the desires and prejudices of ordinary people rather than by using rational argument", "A type of law", "Building a bridge"],
      "correctAnswer": "Political activity or practices that seek support by appealing to the desires and prejudices of ordinary people rather than by using rational argument",
      "explanation": "Demagoguery is often associated with populism and inflammatory rhetoric.",
      "points": 1
    },
    {
      "id": "c2-u23-b3-q10",
      "type": "fill-blank",
      "question": "His ________ voice was perfect for the radio.",
      "correctAnswer": "mellifluous",
      "explanation": "Mellifluous means sweet or musical; pleasant to hear.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK4: Exercise = {
  "id": "c2-u23-b4",
  "type": "grammar",
  "title": "Block 4: Fronting for Focus",
  "explanation": "Moving part of a sentence to the front for emphasis or to connect with the previous sentence.",
  "questions": [
    {
      "id": "c2-u23-b4-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses fronting correctly?",
      "options": ["In the corner a small dog sat.", "Sat a small dog in the corner.", "In the corner sat a small dog.", "A small dog sat in the corner."],
      "correctAnswer": "In the corner sat a small dog.",
      "explanation": "Inversion often follows fronted prepositional phrases of place.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q2",
      "type": "fill-blank",
      "question": "________ (Rare) as it is, we managed to find a copy.",
      "correctAnswer": "Rare",
      "explanation": "Adjective fronting for emphasis/concession.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q3",
      "type": "key-word-transformation",
      "question": "He ran away to escape the police. (ESCAPE)\n\nTo escape the police __________.",
      "sentence": "He ran away to escape the police.",
      "keyWord": "ESCAPE",
      "startOfAnswer": "To escape the police",
      "correctAnswer": "To escape the police he ran away.",
      "explanation": "Fronting the infinitive clause of purpose.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences uses correct inversion with a negative adverb?",
      "options": ["Never have I seen such a beautiful sight.", "Such a beautiful sight I have never seen.", "I seen have such a beautiful sight never.", "Never seen I such a beautiful sight."],
      "correctAnswer": "Never have I seen such a beautiful sight.",
      "explanation": "While this is also inversion, it is achieved through fronting the negative adverb.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q5",
      "type": "fill-blank",
      "question": "________ (Such) was his anger that he left the room.",
      "correctAnswer": "Such",
      "explanation": "'Such' followed by inversion for intensity.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q6",
      "type": "key-word-transformation",
      "question": "He gave me a book. (ME)\n\nTo me __________.",
      "sentence": "He gave me a book.",
      "keyWord": "ME",
      "startOfAnswer": "To me",
      "correctAnswer": "To me he gave a book.",
      "explanation": "Fronting the indirect object.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences exemplifies the use of fronted adverbs or adverbial phrases for descriptive effect?",
      "options": ["Suddenly, the door opened.", "Slowly he walked home.", "Up went the balloon.", "All of the above"],
      "correctAnswer": "All of the above",
      "explanation": "Adverbs and adverbial phrases are frequently fronted for descriptive effect.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q8",
      "type": "fill-blank",
      "question": "________ (Down) came the rain.",
      "correctAnswer": "Down",
      "explanation": "Directional adverb fronting with inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q9",
      "keyWord": "HARD",
      "type": "key-word-transformation",
      "question": "Though it was hard, we succeeded. (HARD)\n\n________ we succeeded. __________",
      "sentence": "Though it was hard, we succeeded.",
      "startOfAnswer": "________ we succeeded.",
      "correctAnswer": "Hard as it was, we succeeded.",
      "explanation": "Concessive fronting of the adjective.",
      "points": 1
    },
    {
      "id": "c2-u23-b4-q10",
      "type": "multiple-choice",
      "question": "What is the primary purpose of using fronting in sentence structure?",
      "options": ["To confuse the reader", "To create suspense and varied sentence rhythm", "To avoid using nouns", "To make it shorter"],
      "correctAnswer": "To create suspense and varied sentence rhythm",
      "explanation": "Fronting allows the writer to emphasize the most important or dramatic elements of a sentence.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK5: Exercise = {
  "id": "c2-u23-b5",
  "type": "vocabulary",
  "title": "Block 5: The Language of Debate",
  "explanation": "Vocabulary for structuring and refuting arguments.",
  "questions": [
    {
      "id": "c2-u23-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'to refute' mean?",
      "options": ["To agree", "To prove a statement or theory to be wrong or false; to disprove", "To ask a question", "To shout"],
      "correctAnswer": "To prove a statement or theory to be wrong or false; to disprove",
      "explanation": "Refuting an argument is a key part of debate.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q2",
      "type": "fill-blank",
      "question": "She gave a ________ rebuttal to the opposition's claims.",
      "correctAnswer": "scathing",
      "explanation": "Scathing means severely critical.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q3",
      "type": "multiple-choice",
      "question": "What is a 'fallacy'?",
      "options": ["A type of building", "A mistaken belief, especially one based on unsound argument", "A new law", "A religious ceremony"],
      "correctAnswer": "A mistaken belief, especially one based on unsound argument",
      "explanation": "Logical fallacies undermine the validity of an argument.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q4",
      "type": "fill-blank",
      "question": "The two sides were at ________.",
      "correctAnswer": "loggerheads",
      "explanation": "'At loggerheads' means in strong disagreement.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'to concede' mean in a debate?",
      "options": ["To win", "To admit that something is true or valid after first denying or resisting it", "To leave the room", "To ask for more time"],
      "correctAnswer": "To admit that something is true or valid after first denying or resisting it",
      "explanation": "Conceding a point can be a strategic move in an argument.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q6",
      "type": "fill-blank",
      "question": "His argument was ________ with inconsistencies.",
      "correctAnswer": "riddled",
      "explanation": "'Riddled with' means full of (usually something bad).",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'sophistry'?",
      "options": ["Being very wise", "The use of fallacious arguments, especially with the intention of deceiving", "A type of philosophy", "A religious group"],
      "correctAnswer": "The use of fallacious arguments, especially with the intention of deceiving",
      "explanation": "Sophistry involves clever but false reasoning.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q8",
      "type": "fill-blank",
      "question": "They reached a ________ after hours of negotiation.",
      "correctAnswer": "compromise",
      "explanation": "A compromise is an agreement or a settlement of a dispute that is reached by each side making concessions.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q9",
      "type": "multiple-choice",
      "question": "What does 'to equivocate' mean?",
      "options": ["To speak clearly", "To use ambiguous language so as to conceal the truth or avoid committing oneself", "To shout", "To agree"],
      "correctAnswer": "To use ambiguous language so as to conceal the truth or avoid committing oneself",
      "explanation": "Politicians are often accused of equivocating.",
      "points": 1
    },
    {
      "id": "c2-u23-b5-q10",
      "type": "fill-blank",
      "question": "The debate was a ________ affair.",
      "correctAnswer": "spirited",
      "explanation": "Spirited means full of energy, enthusiasm, and determination.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK6: Exercise = {
  "id": "c2-u23-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Emphasis & Clefts in Action",
  "explanation": "Transforming sentences to change the focus and emphasis.",
  "questions": [
    {
      "id": "c2-u23-b6-q1",
      "type": "key-word-transformation",
      "question": "I only wanted to help. (ALL)\n\n________ was to help. __________",
      "sentence": "I only wanted to help.",
      "keyWord": "ALL",
      "startOfAnswer": "________ was to help.",
      "correctAnswer": "All I wanted was to help.",
      "explanation": "Cleft-like structure for limiting focus.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q2",
      "type": "key-word-transformation",
      "question": "He left because he was bored. (REASON)\n\nThe ________ was that he was bored. __________",
      "sentence": "He left because he was bored.",
      "keyWord": "REASON",
      "startOfAnswer": "The ________ was that he was bored.",
      "correctAnswer": "The reason why he left was that he was bored.",
      "explanation": "Focus on the reason.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q3",
      "type": "key-word-transformation",
      "question": "You need a good rest. (WHAT)\n\n________ is a good rest. __________",
      "sentence": "You need a good rest.",
      "keyWord": "WHAT",
      "startOfAnswer": "________ is a good rest.",
      "correctAnswer": "What you need is a good rest.",
      "explanation": "What-cleft for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q4",
      "type": "key-word-transformation",
      "question": "We met for the first time in Paris. (IT)\n\n________ in Paris that we met for the first time. __________",
      "sentence": "We met for the first time in Paris.",
      "keyWord": "IT",
      "startOfAnswer": "________ in Paris that we met for the first time.",
      "correctAnswer": "It was in Paris that we met for the first time.",
      "explanation": "It-cleft focusing on the place.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q5",
      "type": "key-word-transformation",
      "question": "His arrogance makes me angry. (THING)\n\nThe ________ makes me angry is his arrogance. __________",
      "sentence": "His arrogance makes me angry.",
      "keyWord": "THING",
      "startOfAnswer": "The ________ makes me angry is his arrogance.",
      "correctAnswer": "The thing that makes me angry is his arrogance.",
      "explanation": "'The thing that' cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q6",
      "type": "key-word-transformation",
      "question": "I like the way she speaks. (WHAT)\n\n________ the way she speaks. __________",
      "sentence": "I like the way she speaks.",
      "keyWord": "WHAT",
      "startOfAnswer": "________ the way she speaks.",
      "correctAnswer": "What I like is the way she speaks.",
      "explanation": "What-cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q7",
      "type": "key-word-transformation",
      "question": "John broke the window. (IT)\n\n________ John who broke the window. __________",
      "sentence": "John broke the window.",
      "keyWord": "IT",
      "startOfAnswer": "________ John who broke the window.",
      "correctAnswer": "It was John who broke the window.",
      "explanation": "It-cleft focusing on the subject.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q8",
      "type": "key-word-transformation",
      "question": "I'm looking for my keys. (THINGS)\n\nThe ________ are my keys. __________",
      "sentence": "I'm looking for my keys.",
      "keyWord": "THINGS",
      "startOfAnswer": "The ________ are my keys.",
      "correctAnswer": "The things I'm looking for are my keys.",
      "explanation": "'The things that' cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q9",
      "type": "key-word-transformation",
      "question": "I called him because I was worried. (WAS)\n\n________ I was worried that I called him. __________",
      "sentence": "I called him because I was worried.",
      "keyWord": "WAS",
      "startOfAnswer": "________ I was worried that I called him.",
      "correctAnswer": "It was because I was worried that I called him.",
      "explanation": "It-cleft focusing on the reason clause.",
      "points": 1
    },
    {
      "id": "c2-u23-b6-q10",
      "type": "key-word-transformation",
      "question": "He told me the truth eventually. (ONLY)\n\nIt ________ eventually that he told me the truth. __________",
      "sentence": "He told me the truth eventually.",
      "keyWord": "ONLY",
      "startOfAnswer": "It ________ eventually that he told me the truth.",
      "correctAnswer": "It was only eventually that he told me the truth.",
      "explanation": "It-cleft with 'only'.",
      "points": 1
    }
  ]};

export const C2_U23_BLOCK7: Exercise = {
  "id": "c2-u23-b7",
  "type": "vocabulary",
  "title": "Block 7: Persuasive Metaphors",
  "explanation": "Idioms and metaphors used to sway opinion.",
  "questions": [
    {
      "id": "c2-u23-b7-q1",
      "type": "multiple-choice",
      "question": "What is often the primary objective of effective leadership in political and military contexts?",
      "options": ["To win a sports game", "To gain the emotional and intellectual support of people", "To be a doctor", "To be very smart"],
      "correctAnswer": "To gain the emotional and intellectual support of people",
      "explanation": "This phrase is common in political and military contexts.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q2",
      "type": "fill-blank",
      "question": "They are trying to ________ a narrative.",
      "correctAnswer": "shape",
      "explanation": "'Shape a narrative' means to control how a story or situation is perceived.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q3",
      "type": "multiple-choice",
      "question": "What is a 'slippery slope' argument?",
      "options": ["An argument about a mountain", "An argument that suggests that a relatively small first step will lead to a chain of related (and usually negative) events", "A type of insurance", "A government secret"],
      "correctAnswer": "An argument that suggests that a relatively small first step will lead to a chain of related (and usually negative) events",
      "explanation": "The slippery slope is a common logical fallacy and persuasive tactic.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q4",
      "type": "fill-blank",
      "question": "The news was a ________ blow to the campaign.",
      "correctAnswer": "crippling",
      "explanation": "Crippling means causing severe damage or problems.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to play to the gallery' mean?",
      "options": ["To be an artist", "To act or speak in a way intended to produce a strong effect on the common people, often at the expense of serious thought", "To visit a museum", "To shout"],
      "correctAnswer": "To act or speak in a way intended to produce a strong effect on the common people, often at the expense of serious thought",
      "explanation": "Playing to the gallery is a form of populism.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q6",
      "type": "fill-blank",
      "question": "He's a ________ orator.",
      "correctAnswer": "gifted",
      "explanation": "Gifted means having exceptional talent or ability.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'the silver lining'?",
      "options": ["A type of cloud", "A hopeful or positive aspect in an otherwise negative situation", "A type of jewelry", "A government secret"],
      "correctAnswer": "A hopeful or positive aspect in an otherwise negative situation",
      "explanation": "Used to maintain optimism in a difficult situation.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q8",
      "type": "fill-blank",
      "question": "The report was a ________ of the truth.",
      "correctAnswer": "whitewash",
      "explanation": "A whitewash is a deliberate attempt to conceal unpleasant or incriminating facts.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to read between the lines' mean?",
      "options": ["To be a good reader", "To understand the implicit or hidden meaning in a text or situation", "To look at the spaces between words", "To be a detective"],
      "correctAnswer": "To understand the implicit or hidden meaning in a text or situation",
      "explanation": "Essential for analyzing persuasive communication.",
      "points": 1
    },
    {
      "id": "c2-u23-b7-q10",
      "type": "fill-blank",
      "question": "The candidate is ________ thin ice.",
      "correctAnswer": "skating on",
      "explanation": "'Skating on thin ice' means taking a big risk.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK8: Exercise = {
  "id": "c2-u23-b8",
  "type": "grammar",
  "title": "Block 8: Sophisticated Fronting & Inversion",
  "explanation": "Combining fronting and inversion for maximum impact.",
  "questions": [
    {
      "id": "c2-u23-b8-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses fronting and inversion for a dramatic opening?",
      "options": ["Out of the shadows stepped a mysterious figure.", "A mysterious figure stepped out of the shadows.", "Stepped a mysterious figure out of the shadows.", "Shadows out of stepped a mysterious figure."],
      "correctAnswer": "Out of the shadows stepped a mysterious figure.",
      "explanation": "Adverbial phrase of place + verb + subject.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q2",
      "type": "fill-blank",
      "question": "________ (So) great was the pressure that he resigned.",
      "correctAnswer": "So",
      "explanation": "'So + adjective' fronting with inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q3",
      "type": "key-word-transformation",
      "question": "If you should need any further information, please contact me. (SHOULD)\n\n________ any further information, please contact me. __________",
      "sentence": "If you should need any further information, please contact me.",
      "keyWord": "SHOULD",
      "startOfAnswer": "________ any further information, please contact me.",
      "correctAnswer": "Should you need any further information, please contact me.",
      "explanation": "Inversion in the 'if' clause (formal).",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q4",
      "type": "multiple-choice",
      "question": "Which element of the sentence is associated with verb fronting in a concessive clause?",
      "options": ["The subject", "The verb 'Try'", "The object", "The auxiliary"],
      "correctAnswer": "The verb 'Try'",
      "explanation": "Verb fronting in a concessive clause.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q5",
      "type": "fill-blank",
      "question": "________ (Had) I known, I would have told you.",
      "correctAnswer": "Had",
      "explanation": "Inversion in a third conditional clause (formal).",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q6",
      "type": "key-word-transformation",
      "question": "The cost of the project is even more important. (MORE)\n\nEven ________ is the cost of the project. __________",
      "sentence": "The cost of the project is even more important.",
      "keyWord": "MORE",
      "startOfAnswer": "Even ________ is the cost of the project.",
      "correctAnswer": "Even more important is the cost of the project.",
      "explanation": "Adjective phrase fronting with inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences demonstrates the correct use of inversion following a negative adverbial phrase?",
      "options": ["Not for one moment I believed him.", "Not for one moment did I believe him.", "Not for one moment believed I him.", "Not for one moment believed him I."],
      "correctAnswer": "Not for one moment did I believe him.",
      "explanation": "Negative adverbial phrase + inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q8",
      "type": "fill-blank",
      "question": "________ (There) goes our last chance!",
      "correctAnswer": "There",
      "explanation": "'There' as an introductory adverb followed by inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q9",
      "type": "key-word-transformation",
      "question": "They didn't realize that they were being watched. (LITTLE)\n\n________ realize that they were being watched. __________",
      "sentence": "They didn't realize that they were being watched.",
      "keyWord": "LITTLE",
      "startOfAnswer": "________ realize that they were being watched.",
      "correctAnswer": "Little did they realize that they were being watched.",
      "explanation": "Emphatic inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b8-q10",
      "type": "multiple-choice",
      "question": "Which of the following sentences employs inversion and fronting for stylistic effect?",
      "options": ["The fire spread through the building.", "Through the building spread the fire.", "Spread through the building did the fire.", "Fire through the building spread."],
      "correctAnswer": "Through the building spread the fire.",
      "explanation": "Fronting the location and inverting the subject/verb creates a vivid image.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK9: Exercise = {
  "id": "c2-u23-b9",
  "type": "reading",
  "title": "Block 9: The Anatomy of a Great Speech",
  "explanation": "Analyze a text about the structure and delivery of famous oratory.",
  "questions": [
    {
      "id": "c2-u23-b9-q1",
      "type": "multiple-choice",
      "question": "What is the 'hook' in a speech?",
      "options": ["A tool for fishing", "An opening statement designed to capture the audience's attention", "The final sentence", "A type of joke"],
      "correctAnswer": "An opening statement designed to capture the audience's attention",
      "explanation": "The hook is essential for engaging the audience from the start.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q2",
      "type": "fill-blank",
      "question": "A great speech often follows a ________ arc.",
      "correctAnswer": "narrative",
      "explanation": "A narrative arc provides a logical and emotional structure to the speech.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'pacing' in oratory?",
      "options": ["Walking around", "The speed and rhythm with which a speech is delivered", "Buying a new suit", "A type of insurance"],
      "correctAnswer": "The speed and rhythm with which a speech is delivered",
      "explanation": "Effective pacing keeps the audience engaged and emphasizes key points.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q4",
      "type": "fill-blank",
      "question": "The speaker used ________ to emphasize the urgency of the situation.",
      "correctAnswer": "repetition",
      "explanation": "Repetition is a classic rhetorical device for reinforcement.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'audience awareness'?",
      "options": ["Knowing how many people are there", "The ability to understand and connect with the specific needs and values of the listeners", "A type of tax", "Building a bridge"],
      "correctAnswer": "The ability to understand and connect with the specific needs and values of the listeners",
      "explanation": "Successful persuasion requires tailoring the message to the audience.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q6",
      "type": "fill-blank",
      "question": "The peroration is the ________ of a speech.",
      "correctAnswer": "conclusion",
      "explanation": "The peroration is intended to leave a lasting impression on the audience.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'inflection' in speaking?",
      "options": ["A type of sickness", "The modulation of intonation or pitch in the voice", "Looking at a book", "A fast car"],
      "correctAnswer": "The modulation of intonation or pitch in the voice",
      "explanation": "Inflection conveys emotion and meaning beyond the literal words.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q8",
      "type": "fill-blank",
      "question": "The speech was ________ by loud applause.",
      "correctAnswer": "punctuated",
      "explanation": "Punctuated means interrupted at intervals.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q9",
      "type": "multiple-choice",
      "question": "What is a 'call to action'?",
      "options": ["Calling a friend", "An instruction to the audience to do something specific", "A religious ceremony", "A type of tax"],
      "correctAnswer": "An instruction to the audience to do something specific",
      "explanation": "Most persuasive speeches end with a clear call to action.",
      "points": 1
    },
    {
      "id": "c2-u23-b9-q10",
      "type": "fill-blank",
      "question": "A great orator must possess ________.",
      "correctAnswer": "charisma",
      "explanation": "Charisma is a compelling attractiveness or charm that can inspire devotion in others.",
      "points": 1
    }
  ]
};

export const C2_U23_BLOCK10: Exercise = {
  "id": "c2-u23-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 23 Review",
  "explanation": "Final review of Rhetoric and Focus structures.",
  "questions": [
    {
      "id": "c2-u23-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes the appeal to logic?",
      "options": ["Ethos", "Pathos", "Logos", "Chronos"],
      "correctAnswer": "Logos",
      "explanation": "Core vocabulary from Block 3.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q2",
      "startOfAnswer": "is",
      "keyWord": "BE",
      "sentence": "What is important is that we stay united.",
      "type": "key-word-transformation",
      "question": "What is important is that we stay united. (BE)\n\nWhat ________ is that we stay united.",
      "correctAnswer": "is",
      "explanation": "What-cleft.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'anaphora'?",
      "options": ["Ending with the same word", "Beginning with the same word", "A type of animal", "A quiet sound"],
      "correctAnswer": "Beginning with the same word",
      "explanation": "Rhetorical repetition.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q4",
      "startOfAnswer": "then that",
      "keyWord": "TIME",
      "sentence": "The decision was made at that time.",
      "type": "key-word-transformation",
      "question": "The decision was made at that time. (TIME)\n\nIt was ________ the decision was made.",
      "correctAnswer": "then that",
      "explanation": "It-cleft focusing on time.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q5",
      "type": "key-word-transformation",
      "question": "I only wanted to protect you. (ALL)\n\n________ was to protect you. __________",
      "sentence": "I only wanted to protect you.",
      "keyWord": "ALL",
      "startOfAnswer": "________ was to protect you.",
      "correctAnswer": "All I wanted was to protect you.",
      "explanation": "Emphasis structure.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q6",
      "type": "multiple-choice",
      "question": "Which rhetorical device involves the repetition of initial consonant sounds?",
      "options": ["Rhyming", "Repetition of initial consonant sounds", "A long story", "A type of bird"],
      "correctAnswer": "Repetition of initial consonant sounds",
      "explanation": "Rhetorical device.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q7",
      "type": "fill-blank",
      "question": "________ (Rarely) does such an opportunity arise.",
      "correctAnswer": "Rarely",
      "explanation": "Inversion.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q8",
      "type": "key-word-transformation",
      "question": "He succeeded because he was determined. (DETERMINATION)\n\nIt was his ________ that led to his success. __________",
      "sentence": "He succeeded because he was determined.",
      "keyWord": "DETERMINATION",
      "startOfAnswer": "It was his ________ that led to his success.",
      "correctAnswer": "It was his determination that led to his success.",
      "explanation": "It-cleft focus.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'antithesis'?",
      "options": ["Agreement", "Contrast of ideas", "A type of medicine", "A loud noise"],
      "correctAnswer": "Contrast of ideas",
      "explanation": "Rhetorical device.",
      "points": 1
    },
    {
      "id": "c2-u23-b10-q10",
      "type": "fill-blank",
      "question": "The power of ________ is undeniable.",
      "correctAnswer": "persuasion",
      "explanation": "Persuasion is the act of convincing.",
      "points": 1
    }
  ]
};

export const C2_UNIT_23 = createC2Unit(
  'c2-u23',
  'The Power of Rhetoric & Persuasion',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U23_BLOCK1, C2_U23_BLOCK2, C2_U23_BLOCK3, C2_U23_BLOCK4, C2_U23_BLOCK5,
    C2_U23_BLOCK6, C2_U23_BLOCK7, C2_U23_BLOCK8, C2_U23_BLOCK9, C2_U23_BLOCK10
  ]
);
