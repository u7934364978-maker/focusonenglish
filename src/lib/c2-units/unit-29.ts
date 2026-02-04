
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U29_BLOCK1: Exercise = {
  "id": "c2-u29-b1",
  "type": "vocabulary",
  "title": "Block 1: Literary Devices & Figures of Speech",
  "explanation": "Advanced terminology for analyzing creative writing (e.g., personification, synecdoche, metonymy).",
  "questions": [
    {
      "id": "c2-u29-b1-q1",
      "type": "multiple-choice",
      "question": "What is the definition of anthropomorphism?",
      "options": ["Making a person look better", "The attribution of a personal nature or human characteristics to something non-human", "A type of biography", "Acting like someone else"],
      "correctAnswer": "The attribution of a personal nature or human characteristics to something non-human",
      "explanation": "Example: 'The wind whispered through the trees'.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q2",
      "type": "fill-blank",
      "question": "A ________ is a figure of speech in which a part is made to represent the whole or vice versa.",
      "correctAnswer": "synecdoche",
      "explanation": "Example: 'All hands on deck' (where 'hands' represents the crew).",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'metonymy'?",
      "options": ["A type of metal", "The substitution of the name of an attribute or adjunct for that of the thing meant", "A long poem", "A religious ceremony"],
      "correctAnswer": "The substitution of the name of an attribute or adjunct for that of the thing meant",
      "explanation": "Example: 'The White House issued a statement' (where 'White House' represents the President's administration).",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q4",
      "type": "fill-blank",
      "question": "The ________ (allude) in the poem to Greek mythology was clear.",
      "correctAnswer": "allusion",
      "explanation": "An allusion is an expression designed to call something to mind without mentioning it explicitly.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'onomatopoeia'?",
      "options": ["A fear of names", "The formation of a word from a sound associated with what is named", "A type of musical instrument", "A government secret"],
      "correctAnswer": "The formation of a word from a sound associated with what is named",
      "explanation": "Examples include 'cuckoo', 'sizzle', and 'bang'.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q6",
      "type": "fill-blank",
      "question": "The use of 'like' or 'as' to compare two things is a ________.",
      "correctAnswer": "simile",
      "explanation": "Similes are distinct from metaphors, which state that something *is* something else.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'allegory'?",
      "options": ["A fear of allergies", "A story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one", "A type of Italian food", "A religious ceremony"],
      "correctAnswer": "A story, poem, or picture that can be interpreted to reveal a hidden meaning, typically a moral or political one",
      "explanation": "Orwell's 'Animal Farm' is a famous allegory.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q8",
      "type": "fill-blank",
      "question": "The ________ (iron) of the situation was that he lost his keys while looking for them.",
      "correctAnswer": "irony",
      "explanation": "Irony is the expression of one's meaning by using language that normally signifies the opposite.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'paradox'?",
      "options": ["Two docks side by side", "A seemingly absurd or self-contradictory statement or proposition that when investigated or explained may prove to be well founded or true", "A type of medical treatment", "A government secret"],
      "correctAnswer": "A seemingly absurd or self-contradictory statement or proposition that when investigated or explained may prove to be well founded or true",
      "explanation": "Example: 'This is the beginning of the end'.",
      "points": 1
    },
    {
      "id": "c2-u29-b1-q10",
      "type": "fill-blank",
      "question": "The ________ (image) in the novel was very vivid.",
      "correctAnswer": "imagery",
      "explanation": "Imagery refers to visually descriptive or figurative language.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK2: Exercise = {
  "id": "c2-u29-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Substitution & Ellipsis",
  "explanation": "Using words like 'so', 'did', 'one', and 'do' to avoid repetition, and omitting words when the meaning is clear.",
  "questions": [
    {
      "id": "c2-u29-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses ellipsis correctly?",
      "options": ["He likes coffee and she likes tea.", "He likes coffee and she tea.", "He likes coffee and she does tea.", "He likes coffee and she like tea."],
      "correctAnswer": "He likes coffee and she tea.",
      "explanation": "The verb 'likes' is omitted because it is understood from the first clause.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q2",
      "type": "fill-blank",
      "question": "Do you think it will rain? I hope ________.",
      "correctAnswer": "so",
      "explanation": "Using 'so' to substitute for the clause 'that it will rain'.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q3",
      "type": "key-word-transformation",
      "question": "I bought a blue shirt and my brother bought a blue shirt too. (ONE)\n\nI bought a blue shirt and my brother bought a blue ________ too. __________",
      "sentence": "I bought a blue shirt and my brother bought a blue shirt too.",
      "keyWord": "ONE",
      "startOfAnswer": "I bought a blue shirt and my brother bought a blue ________ too.",
      "correctAnswer": "one",
      "explanation": "Using 'one' to substitute for the noun 'shirt'.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following grammatical errors is exemplified by the sentence: \"I'll have the red [car] and you have the blue\"?",
      "options": ["Omission of a verb", "Omission of a noun or noun phrase", "Omission of a conjunction", "A type of star"],
      "correctAnswer": "Omission of a noun or noun phrase",
      "explanation": "Example: 'I'll have the red [car] and you have the blue'.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q5",
      "type": "fill-blank",
      "question": "He said he would come, and he ________.",
      "correctAnswer": "did",
      "explanation": "Using 'did' as an auxiliary to substitute for the entire verb phrase 'did come'.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q6",
      "type": "key-word-transformation",
      "question": "If you need help, just ask for help. (SO)\n\nIf you need help, ________. __________",
      "sentence": "If you need help, just ask for help.",
      "keyWord": "SO",
      "startOfAnswer": "If you need help, ________.",
      "correctAnswer": "just say so",
      "explanation": "Using 'so' to substitute for the action being discussed.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following expressions can be used to convey a negative opinion about a previous statement?",
      "options": ["I don't think so.", "I think not.", "Both A and B", "Neither"],
      "correctAnswer": "Both A and B",
      "explanation": "Both are common ways to express a negative opinion about a previous statement, though 'I think not' is more formal.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q8",
      "type": "fill-blank",
      "question": "Some people like the book, others ________ (not).",
      "correctAnswer": "do not",
      "explanation": "Ellipsis of the main verb 'like'.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q9",
      "type": "key-word-transformation",
      "question": "He hasn't finished yet, but he will finish soon. (SO)\n\nHe hasn't finished yet, but he ________ soon. __________",
      "sentence": "He hasn't finished yet, but he will finish soon.",
      "keyWord": "SO",
      "startOfAnswer": "He hasn't finished yet, but he ________ soon.",
      "correctAnswer": "will do so",
      "explanation": "Using 'do so' for verb phrase substitution.",
      "points": 1
    },
    {
      "id": "c2-u29-b2-q10",
      "type": "multiple-choice",
      "question": "What is the primary purpose of using substitution and ellipsis in writing?",
      "options": ["To make the text longer", "To avoid monotony and create a smoother flow of ideas", "To confuse the reader", "To avoid using nouns"],
      "correctAnswer": "To avoid monotony and create a smoother flow of ideas",
      "explanation": "Substitution and ellipsis are essential for cohesion in any text.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK3: Exercise = {
  "id": "c2-u29-b3",
  "type": "vocabulary",
  "title": "Block 3: Narrative Structure & Narratology",
  "explanation": "Terminology for how stories are built and told.",
  "questions": [
    {
      "id": "c2-u29-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'narratology'?",
      "options": ["The study of nature", "The branch of knowledge or literary criticism that deals with the structure and function of narrative and its themes, conventions, and symbols", "A type of medicine", "Working in a library"],
      "correctAnswer": "The branch of knowledge or literary criticism that deals with the structure and function of narrative and its themes, conventions, and symbols",
      "explanation": "Narratology explores the 'how' of storytelling.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q2",
      "type": "fill-blank",
      "question": "The ________ (expose) is the part of a story that provides background information about the characters and situation.",
      "correctAnswer": "exposition",
      "explanation": "The exposition typically occurs at the beginning of a narrative.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q3",
      "type": "multiple-choice",
      "question": "What is the 'climax' of a story?",
      "options": ["The beginning", "The most intense, exciting, or important point of something; the turning point", "The ending", "A list of characters"],
      "correctAnswer": "The most intense, exciting, or important point of something; the turning point",
      "explanation": "The climax is the peak of the narrative arc.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q4",
      "type": "fill-blank",
      "question": "A ________ is an interruption of the chronological sequence of an event of earlier occurrence.",
      "correctAnswer": "flashback",
      "explanation": "Flashbacks provide context or back-story.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q5",
      "type": "multiple-choice",
      "question": "What is an 'unreliable narrator'?",
      "options": ["A narrator who is late", "A narrator whose credibility is compromised", "A narrator who doesn't speak", "A group of characters"],
      "correctAnswer": "A narrator whose credibility is compromised",
      "explanation": "Unreliable narrators can be biased, insane, or deceptive.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q6",
      "type": "fill-blank",
      "question": "The ________ (denouement) is the final part of a play, film, or narrative in which the strands of the plot are drawn together.",
      "correctAnswer": "denouement",
      "explanation": "The denouement resolves the conflict.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'foreshadowing'?",
      "options": ["Standing in the shade", "A warning or indication of a future event", "A type of drawing", "A religious ceremony"],
      "correctAnswer": "A warning or indication of a future event",
      "explanation": "Foreshadowing creates suspense and prepares the reader for later events.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q8",
      "type": "fill-blank",
      "question": "The ________ (protagonist) is the leading character in a story.",
      "correctAnswer": "protagonist",
      "explanation": "The protagonist is typically the character the audience identifies with.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'stream of consciousness'?",
      "options": ["A river", "A literary style in which a character's thoughts, feelings, and reactions are depicted in a continuous flow uninterrupted by objective description or conventional dialogue", "A religious ceremony", "A type of insurance"],
      "correctAnswer": "A literary style in which a character's thoughts, feelings, and reactions are depicted in a continuous flow uninterrupted by objective description or conventional dialogue",
      "explanation": "Virginia Woolf and James Joyce are famous for this style.",
      "points": 1
    },
    {
      "id": "c2-u29-b3-q10",
      "type": "fill-blank",
      "question": "The ________ (antagonist) is the character who opposes the leading character.",
      "correctAnswer": "antagonist",
      "explanation": "The antagonist creates the conflict in the story.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK4: Exercise = {
  "id": "c2-u29-b4",
  "type": "grammar",
  "title": "Block 4: Advanced Relative Clauses",
  "explanation": "Using relative clauses with prepositions, 'whereby', 'whose', and as sentence modifiers.",
  "questions": [
    {
      "id": "c2-u29-b4-q1",
      "startOfAnswer": "about which",
      "keyWord": "FORMAL",
      "sentence": "The book I was talking about.",
      "type": "key-word-transformation",
      "question": "Which sentence is most formal? (FORMAL)\n\nThe book ________ I was talking about.",
      "options": ["The book I was talking about.", "The book about which I was talking.", "The book which I was talking about.", "The book that I talked about."],
      "correctAnswer": "The book about which I was talking.",
      "explanation": "Placing the preposition before 'which' is a hallmark of formal English.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q2",
      "type": "fill-blank",
      "question": "He developed a theory ________ (whereby) all life is connected.",
      "correctAnswer": "whereby",
      "explanation": "'Whereby' means 'by which' or 'according to which'.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q3",
      "type": "key-word-transformation",
      "question": "That is the house. I was born in it. (WHICH)\n\nThat is the house ________. __________",
      "sentence": "That is the house. I was born in it.",
      "keyWord": "WHICH",
      "startOfAnswer": "That is the house ________.",
      "correctAnswer": "in which I was born",
      "explanation": "Combining sentences using a prepositional relative clause.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q4",
      "type": "multiple-choice",
      "question": "What does the term 'whose' primarily indicate in relation to its grammatical usage?",
      "options": ["A person", "A thing", "Possession by a person or thing", "A place"],
      "correctAnswer": "Possession by a person or thing",
      "explanation": "'Whose' can be used for both people and inanimate objects (e.g., 'the house whose roof was leaking').",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q5",
      "type": "fill-blank",
      "question": "He arrived late, ________ (which) annoyed me.",
      "correctAnswer": "which",
      "explanation": "'Which' as a sentential relative pronoun refers back to the entire preceding clause.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q6",
      "type": "key-word-transformation",
      "question": "The person you should speak to is the manager. (WHOM)\n\nThe person ________ is the manager. __________",
      "sentence": "The person you should speak to is the manager.",
      "keyWord": "WHOM",
      "startOfAnswer": "The person ________ is the manager.",
      "correctAnswer": "to whom you should speak",
      "explanation": "Formal use of 'whom' with a preposition.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q7",
      "type": "multiple-choice",
      "question": "Is the use of \"whom\" still relevant in modern English?",
      "options": ["Yes, but mainly in formal writing.", "No, it's completely obsolete.", "Only by children.", "Only in poetry."],
      "correctAnswer": "Yes, but mainly in formal writing.",
      "explanation": "In informal English, 'who' is typically used even for objects.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q8",
      "type": "fill-blank",
      "question": "The city, ________ (many) of whose buildings are historic, is beautiful.",
      "correctAnswer": "many",
      "explanation": "Quantifier + of + whose + noun.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q9",
      "type": "key-word-transformation",
      "question": "The method by which he succeeded was unusual. (WHEREBY)\n\nThe method ________ was unusual. __________",
      "sentence": "The method by which he succeeded was unusual.",
      "keyWord": "WHEREBY",
      "startOfAnswer": "The method ________ was unusual.",
      "correctAnswer": "whereby he succeeded",
      "explanation": "Using 'whereby' as a more formal alternative to 'by which'.",
      "points": 1
    },
    {
      "id": "c2-u29-b4-q10",
      "type": "multiple-choice",
      "question": "What is the purpose of using non-defining relative clauses in a sentence?",
      "options": ["To identify which person/thing we mean", "To add extra, non-essential information", "To avoid using verbs", "To make the sentence shorter"],
      "correctAnswer": "To add extra, non-essential information",
      "explanation": "Non-defining clauses are separated by commas and can be omitted without changing the core meaning.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK5: Exercise = {
  "id": "c2-u29-b5",
  "type": "vocabulary",
  "title": "Block 5: Genres & Forms",
  "explanation": "Terminology for different types of literature.",
  "questions": [
    {
      "id": "c2-u29-b5-q1",
      "type": "multiple-choice",
      "question": "What is a 'novella'?",
      "options": ["A new book", "A short novel or long short story", "A type of poem", "A religious ceremony"],
      "correctAnswer": "A short novel or long short story",
      "explanation": "Examples include 'The Metamorphosis' or 'Animal Farm'.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q2",
      "type": "fill-blank",
      "question": "A ________ is a poem of fourteen lines using any of a number of formal rhyme schemes.",
      "correctAnswer": "sonnet",
      "explanation": "Shakespeare is the most famous writer of sonnets.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q3",
      "type": "multiple-choice",
      "question": "What is an 'epic'?",
      "options": ["A very large book", "A long poem, typically one derived from ancient oral tradition, narrating the deeds and adventures of heroic or legendary figures", "A type of modern film", "A religious song"],
      "correctAnswer": "A long poem, typically one derived from ancient oral tradition, narrating the deeds and adventures of heroic or legendary figures",
      "explanation": "Examples include 'The Odyssey' and 'The Iliad'.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q4",
      "type": "fill-blank",
      "question": "A ________ is a play dealing with tragic events and having an unhappy ending, especially one concerning the downfall of the main character.",
      "correctAnswer": "tragedy",
      "explanation": "Tragedy is a major genre of drama.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q5",
      "type": "multiple-choice",
      "question": "What is 'satire'?",
      "options": ["A type of chair", "The use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices", "A religious ceremony", "A government secret"],
      "correctAnswer": "The use of humor, irony, exaggeration, or ridicule to expose and criticize people's stupidity or vices",
      "explanation": "Satire is often used for social or political commentary.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q6",
      "type": "fill-blank",
      "question": "The ________ (anthology) included poems from various authors.",
      "correctAnswer": "anthology",
      "explanation": "An anthology is a published collection of poems or other pieces of writing.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'autobiography'?",
      "options": ["A book about cars", "An account of a person's life written by that person", "A biography written by a computer", "A religious ceremony"],
      "correctAnswer": "An account of a person's life written by that person",
      "explanation": "Distinguished from 'biography', which is written by someone else.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q8",
      "type": "fill-blank",
      "question": "The ________ (epistle) novel is told through letters.",
      "correctAnswer": "epistolary",
      "explanation": "Examples include 'Dracula' or 'Pamela'.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'free verse'?",
      "options": ["Poetry that doesn't cost anything", "Poetry that does not rhyme or have a regular meter", "Poetry about freedom", "A religious song"],
      "correctAnswer": "Poetry that does not rhyme or have a regular meter",
      "explanation": "Free verse is common in modern poetry.",
      "points": 1
    },
    {
      "id": "c2-u29-b5-q10",
      "type": "fill-blank",
      "question": "The ________ (lyric) poem expresses personal emotions or feelings.",
      "correctAnswer": "lyric",
      "explanation": "Lyric poetry is often set to music.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK6: Exercise = {
  "id": "c2-u29-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Substitution & Relatives in Context",
  "explanation": "Combining advanced grammar points in literary analysis.",
  "questions": [
    {
      "id": "c2-u29-b6-q1",
      "type": "key-word-transformation",
      "question": "If you want to read the book, you should do it. (SO)\n\nIf you want to read the book, ________. __________",
      "sentence": "If you want to read the book, you should do it.",
      "keyWord": "SO",
      "startOfAnswer": "If you want to read the book, ________.",
      "correctAnswer": "you should do so",
      "explanation": "Verb phrase substitution.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q2",
      "type": "key-word-transformation",
      "question": "This is the town. The author was born here. (WHICH)\n\nThis is the town ________. __________",
      "sentence": "This is the town. The author was born here.",
      "keyWord": "WHICH",
      "startOfAnswer": "This is the town ________.",
      "correctAnswer": "in which the author was born",
      "explanation": "Formal relative clause.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q3",
      "type": "key-word-transformation",
      "question": "I don't think he will finish the novel. (NOT)\n\nWill he finish the novel? I ________. __________",
      "sentence": "I don't think he will finish the novel.",
      "keyWord": "NOT",
      "startOfAnswer": "Will he finish the novel? I ________.",
      "correctAnswer": "think not",
      "explanation": "Formal substitution.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q4",
      "type": "key-word-transformation",
      "question": "The writer, whose father was also a writer, won the prize. (FATHER)\n\nThe writer, ________ a writer, won the prize. __________",
      "sentence": "The writer, whose father was also a writer, won the prize.",
      "keyWord": "FATHER",
      "startOfAnswer": "The writer, ________ a writer, won the prize.",
      "correctAnswer": "father of whom was also",
      "explanation": "Alternative formal possessive relative structure.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q5",
      "type": "key-word-transformation",
      "question": "He likes Shakespeare and I like Shakespeare too. (DO)\n\nHe likes Shakespeare and ________. __________",
      "sentence": "He likes Shakespeare and I like Shakespeare too.",
      "keyWord": "DO",
      "startOfAnswer": "He likes Shakespeare and ________.",
      "correctAnswer": "so do I",
      "explanation": "Inversion with 'so' for substitution.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q6",
      "type": "key-word-transformation",
      "question": "The novel was successful, which surprised everyone. (SURPRISE)\n\nTo ________, the novel was successful. __________",
      "sentence": "The novel was successful, which surprised everyone.",
      "keyWord": "SURPRISE",
      "startOfAnswer": "To ________, the novel was successful.",
      "correctAnswer": "everyone's surprise",
      "explanation": "Replacing a relative clause with a prepositional phrase.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q7",
      "type": "key-word-transformation",
      "question": "I hope you are happy. If you are happy, I am happy too. (SO)\n\nI hope you are happy; ________. __________",
      "sentence": "I hope you are happy. If you are happy, I am happy too.",
      "keyWord": "SO",
      "startOfAnswer": "I hope you are happy; ________.",
      "correctAnswer": "if so, I am happy too",
      "explanation": "Clause substitution with 'so'.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q8",
      "type": "key-word-transformation",
      "question": "The method by which the story is told is unique. (WHEREBY)\n\nThe method ________ unique. __________",
      "sentence": "The method by which the story is told is unique.",
      "keyWord": "WHEREBY",
      "startOfAnswer": "The method ________ unique.",
      "correctAnswer": "whereby the story is told is",
      "explanation": "Using 'whereby'.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q9",
      "type": "key-word-transformation",
      "question": "He promised to help, but he didn't help. (FAILED)\n\nHe promised to help, but ________. __________",
      "sentence": "He promised to help, but he didn't help.",
      "keyWord": "FAILED",
      "startOfAnswer": "He promised to help, but ________.",
      "correctAnswer": "failed to do so",
      "explanation": "Using 'do so' after a verb.",
      "points": 1
    },
    {
      "id": "c2-u29-b6-q10",
      "type": "key-word-transformation",
      "question": "The book, which was written in 1920, is a classic. (DATE)\n\nThe book, the ________ 1920, is a classic. __________",
      "sentence": "The book, which was written in 1920, is a classic.",
      "keyWord": "DATE",
      "startOfAnswer": "The book, the ________ 1920, is a classic.",
      "correctAnswer": "date of which was",
      "explanation": "Formal possessive relative.",
      "points": 1
    }
  ]};

export const C2_U29_BLOCK7: Exercise = {
  "id": "c2-u29-b7",
  "type": "vocabulary",
  "title": "Block 7: Literary Analysis & Criticism",
  "explanation": "Vocabulary for describing how a text is analyzed.",
  "questions": [
    {
      "id": "c2-u29-b7-q1",
      "startOfAnswer": "The term for the underlying or implicit meaning is called",
      "type": "key-word-transformation",
      "question": "What is the term for the underlying or implicit meaning in a dialogue or the underlying theme in a piece of writing? (KEYWORD)\n\nStart of answer __________",
      "options": ["A text written under another", "The underlying or implicit meaning in a dialogue or the underlying theme in a piece of writing", "A footnote", "A government secret"],
      "correctAnswer": "SUBTEXT",
      "explanation": "Subtext is what is 'read between the lines'.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q2",
      "type": "fill-blank",
      "question": "To ________ (analyze) a poem is to examine its structure and meaning in detail.",
      "correctAnswer": "analyze",
      "explanation": "Analysis is the core of literary criticism.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q3",
      "startOfAnswer": "A motif is a decorative design or pattern; in literature, a distinctive feature or dominant idea in an artistic or literary composition.",
      "type": "key-word-transformation",
      "question": "What is a 'motif'? (KEYWORD)\n\nStart of answer __________",
      "options": ["A type of car", "A decorative design or pattern; in literature, a distinctive feature or dominant idea in an artistic or literary composition", "A very large building", "A religious ceremony"],
      "correctAnswer": "MOTIF",
      "explanation": "Motifs reinforce the themes of a work.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q4",
      "type": "fill-blank",
      "question": "The ________ (theme) of the novel is the struggle for identity.",
      "correctAnswer": "theme",
      "explanation": "The theme is the main subject or idea of a piece of writing.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q5",
      "startOfAnswer": "Pacing refers to the speed at which a story is told.",
      "type": "key-word-transformation",
      "question": "What is 'pacing' in a novel? (KEYWORD)\n\nStart of answer __________",
      "options": ["Walking around while reading", "The speed at which a story is told", "A type of paper", "A government secret"],
      "correctAnswer": "PACED",
      "explanation": "Pacing can be fast or slow, depending on the desired effect.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q6",
      "type": "fill-blank",
      "question": "The ________ (tone) of the essay was ironic.",
      "correctAnswer": "tone",
      "explanation": "Tone refers to the attitude or character of a piece of writing.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q7",
      "startOfAnswer": "Juxtaposition is the fact of two things being seen or placed close together with contrasting effect.",
      "type": "key-word-transformation",
      "question": "What is 'juxtaposition'? (KEYWORD)\n\nStart of answer __________",
      "options": ["Being next to something", "The fact of two things being seen or placed close together with contrasting effect", "A type of grammar", "A religious ceremony"],
      "correctAnswer": "JUxtaposition",
      "explanation": "Juxtaposition is used to highlight differences or create a specific effect.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q8",
      "type": "fill-blank",
      "question": "The ________ (evoke) description of the city was praised.",
      "correctAnswer": "evocative",
      "explanation": "Evocative means bringing strong images, memories, or feelings to mind.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q9",
      "startOfAnswer": "A metaphor is a figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable.",
      "type": "key-word-transformation",
      "question": "What is 'metaphor'? (KEYWORD)\n\nStart of answer __________",
      "options": ["A comparison using 'like' or 'as'", "A figure of speech in which a word or phrase is applied to an object or action to which it is not literally applicable", "A type of insurance", "A government secret"],
      "correctAnswer": "METAPHOR",
      "explanation": "Metaphors are powerful tools for creative expression.",
      "points": 1
    },
    {
      "id": "c2-u29-b7-q10",
      "type": "fill-blank",
      "question": "The author used ________ (symbol) to represent death.",
      "correctAnswer": "symbolism",
      "explanation": "Symbolism is the use of symbols to represent ideas or qualities.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK8: Exercise = {
  "id": "c2-u29-b8",
  "type": "vocabulary",
  "title": "Block 8: Literature Idioms & Expressions",
  "explanation": "Common expressions derived from books and writing.",
  "questions": [
    {
      "id": "c2-u29-b8-q1",
      "type": "multiple-choice",
      "question": "What does 'to read someone like a book' mean?",
      "options": ["To read a book to someone", "To understand someone's thoughts and motives perfectly", "To be a teacher", "A government secret"],
      "correctAnswer": "To understand someone's thoughts and motives perfectly",
      "explanation": "Implies that the person is easy to understand.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q2",
      "type": "fill-blank",
      "question": "The news was a ________ (turn) point in his life.",
      "correctAnswer": "turning",
      "explanation": "A turning point is a time at which a decisive change in a situation occurs.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q3",
      "type": "multiple-choice",
      "question": "What does 'to take a leaf out of someone's book' mean?",
      "options": ["To steal someone's book", "To imitate someone in a particular way", "To be a librarian", "A religious ceremony"],
      "correctAnswer": "To imitate someone in a particular way",
      "explanation": "Usually implies imitating a positive trait.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q4",
      "type": "fill-blank",
      "question": "He is an open ________.",
      "correctAnswer": "book",
      "explanation": "An 'open book' is someone whose feelings or thoughts are easily known.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q5",
      "type": "multiple-choice",
      "question": "What does 'the oldest trick in the book' mean?",
      "options": ["A very old magic trick", "A common and well-known way of deceiving someone", "A type of antique", "A government secret"],
      "correctAnswer": "A common and well-known way of deceiving someone",
      "explanation": "Example: 'That's the oldest trick in the book!'.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q6",
      "type": "fill-blank",
      "question": "To speak ________ (volume) means to provide a lot of information.",
      "correctAnswer": "volumes",
      "explanation": "Example: 'His silence spoke volumes'.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q7",
      "type": "multiple-choice",
      "question": "What does 'to be in someone's good books' mean?",
      "options": ["To be inside a book", "To be in favor with someone", "To be a good reader", "A religious ceremony"],
      "correctAnswer": "To be in favor with someone",
      "explanation": "The opposite is 'to be in someone's bad books'.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q8",
      "type": "fill-blank",
      "question": "It's time to turn over a new ________.",
      "correctAnswer": "leaf",
      "explanation": "To turn over a new leaf means to start behaving in a better way.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q9",
      "type": "multiple-choice",
      "question": "What is a 'cliffhanger'?",
      "options": ["A person who hangs off cliffs", "A dramatic and exciting ending to an episode of a serial, leaving the audience in suspense", "A type of sports film", "A government secret"],
      "correctAnswer": "A dramatic and exciting ending to an episode of a serial, leaving the audience in suspense",
      "explanation": "Cliffhangers encourage the audience to watch the next episode.",
      "points": 1
    },
    {
      "id": "c2-u29-b8-q10",
      "type": "fill-blank",
      "question": "You can't judge a book by its ________.",
      "correctAnswer": "cover",
      "explanation": "A common proverb meaning you shouldn't judge the value of something by its outward appearance.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK9: Exercise = {
  "id": "c2-u29-b9",
  "type": "reading",
  "title": "Block 9: The Evolution of the Novel",
  "explanation": "Analyze a text about the history and development of the novel form.",
  "questions": [
    {
      "id": "c2-u29-b9-q1",
      "type": "multiple-choice",
      "question": "When did the modern novel first emerge?",
      "options": ["15th century", "18th century", "20th century", "12th century"],
      "correctAnswer": "18th century",
      "explanation": "The 18th century saw the rise of the novel with authors like Defoe and Richardson.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q2",
      "type": "fill-blank",
      "question": "The ________ (real) novel aims to represent life as it actually is.",
      "correctAnswer": "realist",
      "explanation": "Realism was a dominant movement in the 19th century.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'modernism' in literature?",
      "options": ["Writing about modern technology", "A movement characterized by a self-conscious break with traditional ways of writing", "Writing only in the present tense", "A religious ceremony"],
      "correctAnswer": "A movement characterized by a self-conscious break with traditional ways of writing",
      "explanation": "Modernism explored new narrative techniques like stream of consciousness.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q4",
      "type": "fill-blank",
      "question": "The ________ (gothic) novel is characterized by gloom, mystery, and the grotesque.",
      "correctAnswer": "gothic",
      "explanation": "Examples include 'Frankenstein' and 'Wuthering Heights'.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'metafiction'?",
      "options": ["Fiction about science", "Fiction in which the author self-consciously alludes to the artificiality or literariness of a work", "Very long fiction", "A government secret"],
      "correctAnswer": "Fiction in which the author self-consciously alludes to the artificiality or literariness of a work",
      "explanation": "Metafiction is a common feature of postmodern literature.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q6",
      "type": "fill-blank",
      "question": "The ________ (narrate) voice is crucial to the novel.",
      "correctAnswer": "narrative",
      "explanation": "The narrative voice defines how the story is perceived.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q7",
      "type": "multiple-choice",
      "question": "What is a 'bildungsroman'?",
      "options": ["A book about building houses", "A novel dealing with one person's formative years or spiritual education", "A German history book", "A religious ceremony"],
      "correctAnswer": "A novel dealing with one person's formative years or spiritual education",
      "explanation": "Examples include 'David Copperfield' or 'Jane Eyre'.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q8",
      "type": "fill-blank",
      "question": "The novel is a ________ (diverse) genre.",
      "correctAnswer": "diverse",
      "explanation": "Diverse means showing a great deal of variety; very different.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'intertextuality'?",
      "options": ["A text between two others", "The relationship between literary texts", "A type of internet connection", "A government secret"],
      "correctAnswer": "The relationship between literary texts",
      "explanation": "No text is an island; all texts refer to others.",
      "points": 1
    },
    {
      "id": "c2-u29-b9-q10",
      "type": "fill-blank",
      "question": "The novel continues to ________ (evolve).",
      "correctAnswer": "evolve",
      "explanation": "To evolve means to develop gradually.",
      "points": 1
    }
  ]
};

export const C2_U29_BLOCK10: Exercise = {
  "id": "c2-u29-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 29 Review",
  "explanation": "Final review of Literature and Narratology terminology.",
  "questions": [
    {
      "id": "c2-u29-b10-q1",
      "type": "multiple-choice",
      "question": "What is 'personification'?",
      "options": ["Human traits to non-human things", "Acting", "A type of biography", "A quiet sound"],
      "correctAnswer": "Human traits to non-human things",
      "explanation": "Core vocabulary from Block 1.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q2",
      "startOfAnswer": "I hope __________.",
      "keyWord": "SO",
      "sentence": "I hope to see you soon.",
      "type": "key-word-transformation",
      "question": "I hope to see you soon. (SO)\n\nI hope _________.",
      "correctAnswer": "to see you too",
      "explanation": "Substitution.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q3",
      "type": "multiple-choice",
      "question": "What is the 'climax'?",
      "options": ["Turning point", "Start", "End", "Middle"],
      "correctAnswer": "Turning point",
      "explanation": "Narratology term.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q4",
      "type": "fill-blank",
      "question": "The house, in ________ I lived.",
      "correctAnswer": "which",
      "explanation": "Relative clause.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q5",
      "type": "key-word-transformation",
      "question": "He likes reading and I like reading. (DO)\n\nHe likes reading and ________. __________",
      "sentence": "He likes reading and I like reading.",
      "keyWord": "DO",
      "startOfAnswer": "He likes reading and ________.",
      "correctAnswer": "so do I",
      "explanation": "Substitution.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following is a genre term for a fictional narrative that is typically more concise than a full-length novel?",
      "options": ["Short novel", "Long poem", "A new book", "Online story"],
      "correctAnswer": "Novella",
      "explanation": "Genre term for a fictional narrative that's shorter than a novel.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q7",
      "type": "fill-blank",
      "question": "A ________ point in history.",
      "correctAnswer": "turning",
      "explanation": "Idiom.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q8",
      "type": "key-word-transformation",
      "question": "The method by which he won was fair. (WHEREBY)\n\nThe method ________ was fair. __________",
      "sentence": "The method by which he won was fair.",
      "keyWord": "WHEREBY",
      "startOfAnswer": "The method ________ was fair.",
      "correctAnswer": "whereby he won",
      "explanation": "Relative clause.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'subtext'?",
      "options": ["Implicit meaning", "Underlined text", "A footnote", "A government secret"],
      "correctAnswer": "Implicit meaning",
      "explanation": "Literary analysis term.",
      "points": 1
    },
    {
      "id": "c2-u29-b10-q10",
      "type": "fill-blank",
      "question": "The power of ________ is huge.",
      "correctAnswer": "storytelling",
      "explanation": "Core topic of the unit.",
      "points": 1
    }
  ]
};

export const C2_UNIT_29 = createC2Unit(
  'c2-u29',
  'Literature & Narratology',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U29_BLOCK1, C2_U29_BLOCK2, C2_U29_BLOCK3, C2_U29_BLOCK4, C2_U29_BLOCK5,
    C2_U29_BLOCK6, C2_U29_BLOCK7, C2_U29_BLOCK8, C2_U29_BLOCK9, C2_U29_BLOCK10
  ]
);
