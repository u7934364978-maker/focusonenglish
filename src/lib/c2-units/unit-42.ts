
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U42_BLOCK1: Exercise = {
  "id": "c2-u42-b1",
  "type": "vocabulary",
  "title": "Block 1: Linguistics & Cognitive Concepts",
  "explanation": "Advanced terms for discussing the relationship between language and thought.",
  "questions": [
    {
      "id": "c2-u42-b1-q1",
      "type": "multiple-choice",
      "question": "Which concept describes the relationship between language and thought, suggesting that the structure of a language affects its speakers' worldview and cognition?",
      "options": ["The idea that language determines or influences thought", "The study of related languages", "Being very relative in speech", "A type of grammar"],
      "correctAnswer": "The idea that language determines or influences thought",
      "explanation": "Also known as the Sapir-Whorf hypothesis.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q2",
      "type": "fill-blank",
      "question": "The ________ (cognition) process involves acquiring knowledge through thought and experience.",
      "correctAnswer": "cognitive",
      "explanation": "Cognitive relates to the mental processes of perception, memory, and reasoning.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'lexicon'?",
      "options": ["A type of car", "The vocabulary of a person, language, or branch of knowledge", "A legal document", "A scientific experiment"],
      "correctAnswer": "The vocabulary of a person, language, or branch of knowledge",
      "explanation": "Basically a mental dictionary.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q4",
      "type": "fill-blank",
      "question": "Language is inherently ________ (ambiguous).",
      "correctAnswer": "ambiguous",
      "explanation": "Ambiguous means open to more than one interpretation.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'semantics'?",
      "options": ["The study of meaning in language", "The study of sound", "The study of sentence structure", "The study of ancient scripts"],
      "correctAnswer": "The study of meaning in language",
      "explanation": "Contrasts with syntax (structure).",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q6",
      "type": "fill-blank",
      "question": "The ________ (nuance) of the word were hard to grasp.",
      "correctAnswer": "nuances",
      "explanation": "Nuance is a subtle difference in or shade of meaning, expression, or sound.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'syntax'?",
      "options": ["A tax on language", "The arrangement of words and phrases to create well-formed sentences", "The study of word origins", "A type of computer code"],
      "correctAnswer": "The arrangement of words and phrases to create well-formed sentences",
      "explanation": "Often referred to as 'grammar' in common parlance.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q8",
      "type": "fill-blank",
      "question": "He is a ________ (polyglot) who speaks six languages.",
      "correctAnswer": "polyglot",
      "explanation": "A polyglot is someone who knows or uses several languages.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q9",
      "type": "multiple-choice",
      "question": "What does 'arbitrary' mean in linguistics?",
      "options": ["Very strict", "Based on random choice or personal whim, rather than any reason or system", "Being very old", "A type of tree"],
      "correctAnswer": "Based on random choice or personal whim, rather than any reason or system",
      "explanation": "Saussure argued that the relationship between a word and its meaning is arbitrary.",
      "points": 1
    },
    {
      "id": "c2-u42-b1-q10",
      "type": "fill-blank",
      "question": "The ________ (vernacular) language of the people.",
      "correctAnswer": "vernacular",
      "explanation": "Vernacular is the language or dialect spoken by the ordinary people in a particular country or region.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK2: Exercise = {
  "id": "c2-u42-b2",
  "type": "grammar",
  "title": "Block 2: Fronting for Emphasis",
  "explanation": "Moving a part of the sentence to the beginning for emphasis (e.g., 'Into the room he walked', 'Never had I seen...').",
  "questions": [
    {
      "id": "c2-u42-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses fronting for emphasis?",
      "options": ["I went home", "Home I went", "I am going home", "I have gone home"],
      "correctAnswer": "Home I went",
      "explanation": "The complement 'Home' is fronted.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q2",
      "type": "fill-blank",
      "question": "________ (behind) the curtain stood a man.",
      "correctAnswer": "Behind",
      "explanation": "Fronting a prepositional phrase.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q3",
      "type": "key-word-transformation",
      "question": "The rain came down. (DOWN)\n\n________ rain. __________",
      "sentence": "The rain came down.",
      "keyWord": "DOWN",
      "startOfAnswer": "________ rain.",
      "correctAnswer": "Down came the",
      "explanation": "Fronting an adverbial of direction.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences uses the literary device of fronting?",
      "options": ["He lay there", "There he lay", "He was lying there", "He has lain there"],
      "correctAnswer": "There he lay",
      "explanation": "Fronting 'There' is a common literary device.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q5",
      "type": "fill-blank",
      "question": "________ (so) great was his fear that he couldn't move.",
      "correctAnswer": "So",
      "explanation": "'So' + adjective fronting requires inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q6",
      "type": "key-word-transformation",
      "question": "Her beauty was such that everyone stared. (SUCH)\n\n________ that everyone stared. __________",
      "sentence": "Her beauty was such that everyone stared.",
      "keyWord": "SUCH",
      "startOfAnswer": "________ that everyone stared.",
      "correctAnswer": "Such was her beauty",
      "explanation": "'Such' fronting with inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences demonstrates the correct use of fronting with a place/direction adverbial?",
      "options": ["Never have I...", "Down the hill they ran", "Under no circumstances should you...", "Only then did he..."],
      "correctAnswer": "Down the hill they ran",
      "explanation": "Fronting of place/direction adverbials usually doesn't require inversion with pronouns (they ran), but it does with nouns (ran the children).",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q8",
      "type": "fill-blank",
      "question": "________ (exhausted) though he was, he kept working.",
      "correctAnswer": "Exhausted",
      "explanation": "Fronting an adjective with 'though' or 'as'.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q9",
      "type": "key-word-transformation",
      "question": "He speaks English well, and he also speaks French. (NOT)\n\nNot ________ well, but he also speaks French. __________",
      "sentence": "He speaks English well, and he also speaks French.",
      "keyWord": "NOT",
      "startOfAnswer": "Not ________ well, but he also speaks French.",
      "correctAnswer": "only does he speak English",
      "explanation": "Negative inversion for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u42-b2-q10",
      "type": "multiple-choice",
      "question": "Which grammatical term accurately describes the function of the word 'strange' in this sentence?",
      "options": ["The subject", "The verb", "The adjective", "The adverb"],
      "correctAnswer": "The adjective",
      "explanation": "'Strange' is the adjective complement.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK3: Exercise = {
  "id": "c2-u42-b3",
  "type": "vocabulary",
  "title": "Block 3: Linguistic Determinism",
  "explanation": "Exploring the strong version of the Sapir-Whorf hypothesis.",
  "questions": [
    {
      "id": "c2-u42-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'linguistic determinism'?",
      "options": ["The study of word meanings", "The belief that language determines thought and that different languages impose different conceptions of reality", "Being very determined to learn a language", "A type of biology"],
      "correctAnswer": "The belief that language determines thought and that different languages impose different conceptions of reality",
      "explanation": "A stronger version than relativity.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q2",
      "type": "fill-blank",
      "question": "Language provides a ________ (frame) for our thoughts.",
      "correctAnswer": "framework",
      "explanation": "A conceptual structure.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'untranslatable'?",
      "options": ["Something that cannot be said", "A word or phrase that has no direct equivalent in another language", "Being very bad at translation", "A secret code"],
      "correctAnswer": "A word or phrase that has no direct equivalent in another language",
      "explanation": "Example: 'Schadenfreude' in German.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q4",
      "type": "fill-blank",
      "question": "The ________ (malleable) of the human mind.",
      "correctAnswer": "malleability",
      "explanation": "Malleability means the quality of being easily influenced, trained, or controlled.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'paradigmatic' mean?",
      "options": ["Very fast", "Serving as a typical example of something", "A type of math", "Being very smart"],
      "correctAnswer": "Serving as a typical example of something",
      "explanation": "Often used for dominant theories (paradigm).",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q6",
      "type": "fill-blank",
      "question": "A ________ (concept) gap.",
      "correctAnswer": "conceptual",
      "explanation": "Occurs when one culture lacks a concept found in another.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'universalism' in linguistics?",
      "options": ["Everyone speaking the same language", "The theory that all humans share common linguistic and cognitive structures", "Studying the universe", "A type of religion"],
      "correctAnswer": "The theory that all humans share common linguistic and cognitive structures",
      "explanation": "Chomsky is a famous universalist.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q8",
      "type": "fill-blank",
      "question": "The ________ (innate) ability to learn language.",
      "correctAnswer": "innate",
      "explanation": "Innate means inborn; natural.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'pragmatics'?",
      "options": ["Being very practical", "The branch of linguistics dealing with language in use and the contexts in which it is used", "The study of old words", "A type of grammar"],
      "correctAnswer": "The branch of linguistics dealing with language in use and the contexts in which it is used",
      "explanation": "Focuses on how context contributes to meaning.",
      "points": 1
    },
    {
      "id": "c2-u42-b3-q10",
      "type": "fill-blank",
      "question": "A ________ (dialect) shift.",
      "correctAnswer": "dialectal",
      "explanation": "Relating to a dialect.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK4: Exercise = {
  "id": "c2-u42-b4",
  "type": "grammar",
  "title": "Block 4: Negative Inversion Mastery",
  "explanation": "Using 'Not only', 'Rarely', 'Little', 'Under no circumstances', etc., with auxiliary-subject inversion.",
  "questions": [
    {
      "id": "c2-u42-b4-q1",
      "type": "multiple-choice",
      "question": "Which is correct?",
      "options": ["Rarely I have seen such a thing", "Rarely have I seen such a thing", "Rarely seen I such a thing", "Rarely did I seen such a thing"],
      "correctAnswer": "Rarely have I seen such a thing",
      "explanation": "Inversion follows 'Rarely'.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q2",
      "type": "fill-blank",
      "question": "Little ________ (he/know) that his life was about to change.",
      "correctAnswer": "did he know",
      "explanation": "'Little' as a negative adverbial requires inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q3",
      "type": "key-word-transformation",
      "question": "You should not press this button under any circumstances. (NO)\n\nUnder ________ should you press this button. __________",
      "sentence": "You should not press this button under any circumstances.",
      "keyWord": "NO",
      "startOfAnswer": "Under ________ should you press this button.",
      "correctAnswer": "no circumstances",
      "explanation": "Inversion with a negative prepositional phrase.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences is grammatically correct?",
      "options": ["Only later I realized my mistake", "Only later did I realize my mistake", "Only later realized I my mistake", "Only later I did realize my mistake"],
      "correctAnswer": "Only later did I realize my mistake",
      "explanation": "'Only' phrases at the beginning require inversion in the main clause.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q5",
      "type": "fill-blank",
      "question": "Not ________ (be) only was it cold, but it was also raining.",
      "correctAnswer": "only",
      "explanation": "'Not only' inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q6",
      "type": "key-word-transformation",
      "question": "He had never been so insulted. (NEVER)\n\n________ so insulted. __________",
      "sentence": "He had never been so insulted.",
      "keyWord": "NEVER",
      "startOfAnswer": "________ so insulted.",
      "correctAnswer": "Never had he been",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q7",
      "type": "multiple-choice",
      "question": "In which context is the word \"when\" appropriately used to indicate the timing of an event in relation to another?",
      "options": ["when", "than", "as", "before"],
      "correctAnswer": "when",
      "explanation": "Example: 'Hardly had I arrived when the phone rang'.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q8",
      "type": "fill-blank",
      "question": "No sooner ________ (I/sit) down than the doorbell rang.",
      "correctAnswer": "had I sat",
      "explanation": "'No sooner' requires 'had' + past participle and 'than'.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q9",
      "type": "key-word-transformation",
      "question": "I haven't ever seen such a beautiful sunset. (SEEN)\n\nNever ________ such a beautiful sunset. __________",
      "sentence": "I haven't ever seen such a beautiful sunset.",
      "keyWord": "SEEN",
      "startOfAnswer": "Never ________ such a beautiful sunset.",
      "correctAnswer": "have I seen",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following adverbs indicates a high frequency of occurrence?",
      "options": ["Frequently", "Seldom", "Scarcely", "Not until"],
      "correctAnswer": "Frequently",
      "explanation": "'Frequently' is a positive adverbial; the others are negative or limiting.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK5: Exercise = {
  "id": "c2-u42-b5",
  "type": "vocabulary",
  "title": "Block 5: Language & Culture Idioms",
  "explanation": "Idiomatic expressions related to communication and expression.",
  "questions": [
    {
      "id": "c2-u42-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'to speak in riddles' mean?",
      "options": ["To tell jokes", "To speak in a way that is intentionally confusing or mysterious", "To speak very quietly", "To speak another language"],
      "correctAnswer": "To speak in a way that is intentionally confusing or mysterious",
      "explanation": "Used when someone is being indirect.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q2",
      "type": "fill-blank",
      "question": "I can't ________ (word) it properly.",
      "correctAnswer": "word",
      "explanation": "'To word something' means to express it in a particular way.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'a turn of phrase'?",
      "options": ["Turning a page", "A particular way of expressing something", "A type of grammar error", "Translating a sentence"],
      "correctAnswer": "A particular way of expressing something",
      "explanation": "Example: 'She has a lovely turn of phrase'.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q4",
      "type": "fill-blank",
      "question": "It's on the ________ (tip) of my tongue.",
      "correctAnswer": "tip",
      "explanation": "Means you are about to remember something but can't quite.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'to beat around the bush' mean?",
      "options": ["To garden", "To avoid talking about the main topic directly", "To be very aggressive", "To lose a game"],
      "correctAnswer": "To avoid talking about the main topic directly",
      "explanation": "Common idiom for indirectness.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q6",
      "type": "fill-blank",
      "question": "Keep me in the ________ (loop).",
      "correctAnswer": "loop",
      "explanation": "'In the loop' means informed about something.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'a mother tongue'?",
      "options": ["A type of anatomy", "One's first language", "Speaking like a mother", "A language used by mothers only"],
      "correctAnswer": "One's first language",
      "explanation": "Native language.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q8",
      "type": "fill-blank",
      "question": "Lost in ________ (translat).",
      "correctAnswer": "translation",
      "explanation": "Means the original meaning is missing in the new language.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q9",
      "type": "multiple-choice",
      "question": "What does 'to talk shop' mean?",
      "options": ["To buy things", "To talk about work with colleagues in a social setting", "To speak very loudly", "To open a store"],
      "correctAnswer": "To talk about work with colleagues in a social setting",
      "explanation": "Commonly used in professional contexts.",
      "points": 1
    },
    {
      "id": "c2-u42-b5-q10",
      "type": "fill-blank",
      "question": "A ________ (war) of words.",
      "correctAnswer": "war",
      "explanation": "A prolonged debate or argument.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK6: Exercise = {
  "id": "c2-u42-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Transforming Emphatic Sentences",
  "explanation": "Practice fronting and inversion in a linguistics context.",
  "questions": [
    {
      "id": "c2-u42-b6-q1",
      "type": "key-word-transformation",
      "question": "The theory is so complex that few understand it. (SUCH)\n\n________ the complexity of the theory that few understand it. __________",
      "sentence": "The theory is so complex that few understand it.",
      "keyWord": "SUCH",
      "startOfAnswer": "________ the complexity of the theory that few understand it.",
      "correctAnswer": "Such is",
      "explanation": "Emphatic fronting.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q2",
      "type": "key-word-transformation",
      "question": "I realized the importance of language only then. (ONLY)\n\n________ the importance of language. __________",
      "sentence": "I realized the importance of language only then.",
      "keyWord": "ONLY",
      "startOfAnswer": "________ the importance of language.",
      "correctAnswer": "Only then did I realize",
      "explanation": "Inversion with 'Only then'.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q3",
      "type": "key-word-transformation",
      "question": "The child ran out of the room. (OUT)\n\n________ the child. __________",
      "sentence": "The child ran out of the room.",
      "keyWord": "OUT",
      "startOfAnswer": "________ the child.",
      "correctAnswer": "Out of the room ran",
      "explanation": "Fronting with noun inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q4",
      "type": "key-word-transformation",
      "question": "He had scarcely finished speaking when the audience cheered. (SCARCELY)\n\n________ speaking when the audience cheered. __________",
      "sentence": "He had scarcely finished speaking when the audience cheered.",
      "keyWord": "SCARCELY",
      "startOfAnswer": "________ speaking when the audience cheered.",
      "correctAnswer": "Scarcely had he finished",
      "explanation": "Inversion with 'Scarcely'.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q5",
      "type": "key-word-transformation",
      "question": "Although he was talented, he failed. (TALENTED)\n\n________ as he was, he failed. __________",
      "sentence": "Although he was talented, he failed.",
      "keyWord": "TALENTED",
      "startOfAnswer": "________ as he was, he failed.",
      "correctAnswer": "Talented",
      "explanation": "Fronting adjective with 'as'.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q6",
      "type": "key-word-transformation",
      "question": "You should not leave the building for any reason. (ACCOUNT)\n\nOn ________ should you leave the building. __________",
      "sentence": "You should not leave the building for any reason.",
      "keyWord": "ACCOUNT",
      "startOfAnswer": "On ________ should you leave the building.",
      "correctAnswer": "no account",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q7",
      "type": "key-word-transformation",
      "question": "He didn't know that the meeting was over. (LITTLE)\n\n________ the meeting was over. __________",
      "sentence": "He didn't know that the meeting was over.",
      "keyWord": "LITTLE",
      "startOfAnswer": "________ the meeting was over.",
      "correctAnswer": "Little did he know that",
      "explanation": "Inversion with 'Little'.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q8",
      "type": "key-word-transformation",
      "question": "The prices are very high. (SO)\n\n________ that few can afford them. __________",
      "sentence": "The prices are very high.",
      "keyWord": "SO",
      "startOfAnswer": "________ that few can afford them.",
      "correctAnswer": "So high are the prices",
      "explanation": "'So' + adjective inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q9",
      "type": "key-word-transformation",
      "question": "I have never seen such a beautiful language. (SEEN)\n\nNever ________ such a beautiful language. __________",
      "sentence": "I have never seen such a beautiful language.",
      "keyWord": "SEEN",
      "startOfAnswer": "Never ________ such a beautiful language.",
      "correctAnswer": "have I seen",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u42-b6-q10",
      "type": "key-word-transformation",
      "question": "She arrived and immediately started working. (NO)\n\n________ she arrived than she started working. __________",
      "sentence": "She arrived and immediately started working.",
      "keyWord": "NO",
      "startOfAnswer": "________ she arrived than she started working.",
      "correctAnswer": "No sooner had",
      "explanation": "Inversion with 'No sooner'.",
      "points": 1
    }
  ]};

export const C2_U42_BLOCK7: Exercise = {
  "id": "c2-u42-b7",
  "type": "vocabulary",
  "title": "Block 7: Linguistic Vocabulary Synthesis",
  "explanation": "Reviewing key terms from the unit.",
  "questions": [
    {
      "id": "c2-u42-b7-q1",
      "type": "multiple-choice",
      "question": "What is the definition of phonology?",
      "options": ["The study of phones", "The branch of linguistics that deals with systems of sounds", "The study of old words", "A type of grammar"],
      "correctAnswer": "The branch of linguistics that deals with systems of sounds",
      "explanation": "Relates to phonemes.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q2",
      "type": "fill-blank",
      "question": "A ________ (morph) change.",
      "correctAnswer": "morphological",
      "explanation": "Relating to the form of words.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'etymology'?",
      "options": ["The study of insects", "The study of the origin of words", "The study of human behavior", "The study of the earth"],
      "correctAnswer": "The study of the origin of words",
      "explanation": "Don't confuse with entomology.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q4",
      "type": "fill-blank",
      "question": "He is an ________ (eloquent) speaker.",
      "correctAnswer": "eloquent",
      "explanation": "Eloquent means fluent or persuasive in speaking or writing.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q5",
      "type": "multiple-choice",
      "question": "What is 'discourse'?",
      "options": ["A type of dance", "Written or spoken communication or debate", "A grammar error", "A secret code"],
      "correctAnswer": "Written or spoken communication or debate",
      "explanation": "Discourse analysis is a common linguistic field.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q6",
      "type": "fill-blank",
      "question": "The ________ (liter) rate of the country.",
      "correctAnswer": "literacy",
      "explanation": "Literacy is the ability to read and write.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'a euphemism'?",
      "options": ["A very good feeling", "A mild or indirect word or expression substituted for one considered to be too harsh", "A type of biology", "A loud noise"],
      "correctAnswer": "A mild or indirect word or expression substituted for one considered to be too harsh",
      "explanation": "Example: 'passed away' for 'died'.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q8",
      "type": "fill-blank",
      "question": "An ________ (articulate) person.",
      "correctAnswer": "articulate",
      "explanation": "Articulate means having or showing the ability to speak fluently and coherently.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'jargon'?",
      "options": ["A type of container", "Special words or expressions used by a profession or group that are difficult for others to understand", "Being very rude", "A foreign language"],
      "correctAnswer": "Special words or expressions used by a profession or group that are difficult for others to understand",
      "explanation": "Example: medical jargon.",
      "points": 1
    },
    {
      "id": "c2-u42-b7-q10",
      "type": "fill-blank",
      "question": "A ________ (nuance) explanation.",
      "correctAnswer": "nuanced",
      "explanation": "Characterized by subtle shades of meaning or expression.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK8: Exercise = {
  "id": "c2-u42-b8",
  "type": "reading",
  "title": "Block 8: The Sapir-Whorf Hypothesis Today",
  "explanation": "Analyze a text about contemporary research in linguistic relativity.",
  "questions": [
    {
      "id": "c2-u42-b8-q1",
      "type": "multiple-choice",
      "question": "What is the 'weak' version of the hypothesis?",
      "options": ["Language determines thought", "Language influences thought and perception", "Language has no effect on thought", "Language is unimportant"],
      "correctAnswer": "Language influences thought and perception",
      "explanation": "Also called 'linguistic relativity'.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q2",
      "type": "fill-blank",
      "question": "Recent studies focus on ________ (spatial) cognition in different languages.",
      "correctAnswer": "spatial",
      "explanation": "How different languages describe location and direction.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q3",
      "type": "multiple-choice",
      "question": "What does 'neowhorfian' refer to?",
      "options": ["A type of food", "Modern researchers who support versions of the Sapir-Whorf hypothesis", "People who hate language", "A new grammar system"],
      "correctAnswer": "Modern researchers who support versions of the Sapir-Whorf hypothesis",
      "explanation": "Often using more rigorous experimental methods.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q4",
      "type": "fill-blank",
      "question": "The ________ (permeable) of the boundary between language and thought.",
      "correctAnswer": "permeability",
      "explanation": "The quality of being able to be passed through.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q5",
      "type": "multiple-choice",
      "question": "How do color terms affect perception according to the text?",
      "options": ["They make people colorblind", "They help people distinguish between shades faster if their language has names for them", "They have no effect", "They change the color of the eyes"],
      "correctAnswer": "They help people distinguish between shades faster if their language has names for them",
      "explanation": "A classic area of neowhorfian research.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q6",
      "type": "fill-blank",
      "question": "We must avoid ________ (reduct) conclusions.",
      "correctAnswer": "reductive",
      "explanation": "Reductive means simplified or crude.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'gendered' language?",
      "options": ["Language for men only", "Language that assigns masculine or feminine categories to nouns", "Polite language", "Scientific language"],
      "correctAnswer": "Language that assigns masculine or feminine categories to nouns",
      "explanation": "Studied for its impact on how people perceive objects (e.g., bridge).",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (predispose) of the mind.",
      "correctAnswer": "predisposition",
      "explanation": "A liability or tendency to suffer from a particular condition, hold a particular attitude, or act in a particular way.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'code-switching'?",
      "options": ["Changing a password", "Alternating between two or more languages or dialects in conversation", "Breaking a code", "Changing a channel"],
      "correctAnswer": "Alternating between two or more languages or dialects in conversation",
      "explanation": "Common among bilinguals.",
      "points": 1
    },
    {
      "id": "c2-u42-b8-q10",
      "type": "fill-blank",
      "question": "Linguistic ________ (diversity).",
      "correctAnswer": "diversity",
      "explanation": "The existence of many different languages.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK9: Exercise = {
  "id": "c2-u42-b9",
  "type": "vocabulary",
  "title": "Block 9: Language & Thought Review",
  "explanation": "Reviewing vocabulary and grammar from the unit.",
  "questions": [
    {
      "id": "c2-u42-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'linguistic relativity'?",
      "options": ["Language influences thought", "Language determines thought", "No effect", "Biology"],
      "correctAnswer": "Language influences thought",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q2",
      "type": "fill-blank",
      "question": "Inversion: Little ________ (he/know).",
      "correctAnswer": "did he know",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'lexicon'?",
      "options": ["Vocabulary", "Grammar", "Sound", "Meaning"],
      "correctAnswer": "Vocabulary",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q4",
      "type": "fill-blank",
      "question": "Fronting: ________ the room he walked.",
      "correctAnswer": "Into",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'arbitrary'?",
      "options": ["Random relationship", "Strict relationship", "Old", "New"],
      "correctAnswer": "Random relationship",
      "explanation": "Linguistic concept review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q6",
      "type": "fill-blank",
      "question": "Tip of the ________.",
      "correctAnswer": "tongue",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'syntax'?",
      "options": ["Structure", "Meaning", "Sound", "History"],
      "correctAnswer": "Structure",
      "explanation": "Term review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q8",
      "type": "fill-blank",
      "question": "No sooner had I left ________ he arrived.",
      "correctAnswer": "than",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'polyglot'?",
      "options": ["Speaks many languages", "Speaks one language", "Study of birds", "Study of shapes"],
      "correctAnswer": "Speaks many languages",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u42-b9-q10",
      "type": "fill-blank",
      "question": "Mother ________.",
      "correctAnswer": "tongue",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_U42_BLOCK10: Exercise = {
  "id": "c2-u42-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 42 Final Review",
  "explanation": "Final wrap-up of linguistic relativity and fronting.",
  "questions": [
    {
      "id": "c2-u42-b10-q1",
      "type": "multiple-choice",
      "question": "Which is correct inversion?",
      "options": ["Under no circumstances I will help", "Under no circumstances will I help", "Under no circumstances I help", "Under no circumstances I'm helping"],
      "correctAnswer": "Under no circumstances will I help",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q2",
      "type": "fill-blank",
      "question": "Rarely ________ (have/they) been so wrong.",
      "correctAnswer": "have they",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'linguistic determinism'?",
      "options": ["Language determines thought", "Language influences thought", "No effect", "Biology"],
      "correctAnswer": "Language determines thought",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q4",
      "type": "fill-blank",
      "question": "Beat around the ________.",
      "correctAnswer": "bush",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q5",
      "type": "key-word-transformation",
      "question": "He had only just arrived when it started raining. (SOONER)\n\n________ had he arrived than it started raining. __________",
      "sentence": "He had only just arrived when it started raining.",
      "keyWord": "SOONER",
      "startOfAnswer": "________ had he arrived than it started raining.",
      "correctAnswer": "No sooner",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q6",
      "type": "multiple-choice",
      "question": "What term refers to the analysis of the significance and interpretation of words and sentences in a language?",
      "options": ["Study of meaning", "Study of sound", "Study of structure", "Study of history"],
      "correctAnswer": "Study of meaning",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q7",
      "type": "fill-blank",
      "question": "Lost in ________.",
      "correctAnswer": "translation",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q8",
      "type": "key-word-transformation",
      "question": "I haven't ever been so happy. (NEVER)\n\n________ so happy. __________",
      "sentence": "I haven't ever been so happy.",
      "keyWord": "NEVER",
      "startOfAnswer": "________ so happy.",
      "correctAnswer": "Never have I been",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'etymology'?",
      "options": ["Origin of words", "Origin of insects", "Origin of stars", "Origin of man"],
      "correctAnswer": "Origin of words",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u42-b10-q10",
      "type": "fill-blank",
      "question": "Speak in ________ (confusing way).",
      "correctAnswer": "riddles",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_42 = createC2Unit(
  'c2-u42',
  'Linguistic Relativity & Thought',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U42_BLOCK1, C2_U42_BLOCK2, C2_U42_BLOCK3, C2_U42_BLOCK4, C2_U42_BLOCK5,
    C2_U42_BLOCK6, C2_U42_BLOCK7, C2_U42_BLOCK8, C2_U42_BLOCK9, C2_U42_BLOCK10
  ]
);
