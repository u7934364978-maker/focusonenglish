
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U26_BLOCK1: Exercise = {
  "id": "c2-u26-b1",
  "type": "vocabulary",
  "title": "Block 1: Branches of Philosophy",
  "explanation": "Terminology for the different areas of philosophical study (e.g., epistemology, metaphysics, ethics).",
  "questions": [
    {
      "id": "c2-u26-b1-q1",
      "startOfAnswer": "the nature, sources, and limits of knowledge",
      "type": "key-word-transformation",
      "question": "Knowledge is defined as justified true belief. (EPISTEMOLOGY)\n\nThe branch of philosophy that examines __________.",
      "options": ["The study of insects", "The theory of knowledge, especially with regard to its methods, validity, and scope", "The study of moral principles", "The study of the nature of reality"],
      "correctAnswer": "the nature, sources, and limits of knowledge",
      "explanation": "Epistemology asks 'How do we know what we know?'.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q2",
      "type": "fill-blank",
      "question": "________ is the branch of philosophy that deals with the first principles of things, including abstract concepts such as being, knowing, substance, cause, identity, time, and space.",
      "correctAnswer": "metaphysics",
      "explanation": "Metaphysics explores the fundamental nature of reality.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q3",
      "startOfAnswer": "systematizing, defending, and recommending concepts of right and wrong conduct",
      "type": "key-word-transformation",
      "question": "Ethics involves the study of what is right and wrong. (ETHICS)\n\nIt is about __________.",
      "options": ["Studying ancient ruins", "Systematizing, defending, and recommending concepts of right and wrong conduct", "Learning how to build machines", "The study of beautiful things"],
      "correctAnswer": "systematizing, defending, and recommending concepts of right and wrong conduct",
      "explanation": "Ethics is concerned with how we should live.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q4",
      "type": "fill-blank",
      "question": "________ is the study of the nature of beauty and taste.",
      "correctAnswer": "aesthetics",
      "explanation": "Aesthetics is closely related to the philosophy of art.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q5",
      "startOfAnswer": "the nature of being",
      "type": "key-word-transformation",
      "question": "Ontology is a central part of metaphysics. (ONTOLOGY)\n\nIt focuses on __________.",
      "options": ["The study of birds", "The branch of metaphysics dealing with the nature of being", "The study of human history", "The study of weather"],
      "correctAnswer": "the nature of being",
      "explanation": "Ontology asks 'What exists?'.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q6",
      "type": "fill-blank",
      "question": "________ is the study of reasoning and argumentation.",
      "correctAnswer": "logic",
      "explanation": "Logic provides the tools for philosophical inquiry.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q7",
      "startOfAnswer": "the philosophical study of the structures of experience and consciousness",
      "type": "key-word-transformation",
      "question": "Phenomenology studies the structures of experience. (PHENOMENOLOGY)\n\nIt is defined as __________.",
      "options": ["The study of ghosts", "The philosophical study of the structures of experience and consciousness", "The study of physical phenomena", "The study of ancient scripts"],
      "correctAnswer": "the philosophical study of the structures of experience and consciousness",
      "explanation": "Phenomenology was pioneered by Edmund Husserl.",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q8",
      "type": "fill-blank",
      "question": "________ is the view that all knowledge is derived from sense-experience.",
      "correctAnswer": "empiricism",
      "explanation": "Empiricism is a key tradition in modern philosophy (e.g., Locke, Hume).",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q9",
      "startOfAnswer": "reason rather than experience is the foundation of certainty in knowledge",
      "type": "key-word-transformation",
      "question": "Rationalism posits that reason is primary. (RATIONALISM)\n\nIt emphasizes that __________.",
      "options": ["The belief that emotions are the only guide", "The theory that reason rather than experience is the foundation of certainty in knowledge", "A type of financial planning", "Building a bridge"],
      "correctAnswer": "reason rather than experience is the foundation of certainty in knowledge",
      "explanation": "Rationalism is often contrasted with empiricism (e.g., Descartes, Spinoza).",
      "points": 1
    },
    {
      "id": "c2-u26-b1-q10",
      "type": "fill-blank",
      "question": "________ is the study of ultimate causes or purposes in nature.",
      "correctAnswer": "teleology",
      "explanation": "Teleology suggests that things have a design or a goal.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK2: Exercise = {
  "id": "c2-u26-b2",
  "type": "grammar",
  "title": "Block 2: Negative Inversion for Emphasis",
  "explanation": "Placing a negative or restrictive adverb at the beginning of a sentence followed by auxiliary-subject inversion.",
  "questions": [
    {
      "id": "c2-u26-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses negative inversion correctly?",
      "options": ["Never I have seen such a sight.", "Never have I seen such a sight.", "Never seen I have such a sight.", "Never seen such a sight I have."],
      "correctAnswer": "Never have I seen such a sight.",
      "explanation": "Negative adverb + auxiliary + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q2",
      "type": "fill-blank",
      "question": "Rarely ________ (be) there such a profound thinker as Socrates.",
      "correctAnswer": "was",
      "explanation": "Restrictive adverb 'Rarely' followed by inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q3",
      "type": "key-word-transformation",
      "question": "I little knew that he was a philosopher. (LITTLE)\n\n________ did I know that he was a philosopher. __________",
      "sentence": "I little knew that he was a philosopher.",
      "keyWord": "LITTLE",
      "startOfAnswer": "________ did I know that he was a philosopher.",
      "correctAnswer": "Little",
      "explanation": "Inversion for emphasis.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences is grammatically correct regarding the use of the phrase \"not only\"?",
      "options": ["Not only did he speak French, but also German.", "Not only he spoke French, but also German.", "He not only did speak French.", "Only not did he speak French."],
      "correctAnswer": "Not only did he speak French, but also German.",
      "explanation": "Not only + auxiliary + subject.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q5",
      "type": "fill-blank",
      "question": "Under no circumstances ________ (be) you to leave the room.",
      "correctAnswer": "are",
      "explanation": "Formal negative restriction.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q6",
      "type": "key-word-transformation",
      "question": "He had hardly finished his work when the phone rang. (HARDLY)\n\n________ finished his work when the phone rang. __________",
      "sentence": "He had hardly finished his work when the phone rang.",
      "keyWord": "HARDLY",
      "startOfAnswer": "________ finished his work when the phone rang.",
      "correctAnswer": "Hardly had he",
      "explanation": "Hardly/Scarcely + past perfect + when.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences is correct in terms of word order when using the adverb \"seldom\"?",
      "options": ["Seldom he went to bed before midnight.", "Seldom did he go to bed before midnight.", "Seldom went he to bed before midnight.", "Seldom he did go to bed before midnight."],
      "correctAnswer": "Seldom did he go to bed before midnight.",
      "explanation": "Seldom + auxiliary + subject.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q8",
      "type": "fill-blank",
      "question": "No sooner ________ (have) he arrived than the argument started.",
      "correctAnswer": "had",
      "explanation": "No sooner + auxiliary + subject + than.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q9",
      "type": "key-word-transformation",
      "question": "I have seldom heard such a foolish argument. (SELDOM)\n\n________ such a foolish argument. __________",
      "sentence": "I have seldom heard such a foolish argument.",
      "keyWord": "SELDOM",
      "startOfAnswer": "________ such a foolish argument.",
      "correctAnswer": "Seldom have I heard",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b2-q10",
      "type": "multiple-choice",
      "question": "What is the primary purpose of using elevated language or complex sentence structures in formal writing?",
      "options": ["To make the sentence shorter", "To sound more formal and emphatic", "To avoid using verbs", "To be more poetic"],
      "correctAnswer": "To sound more formal and emphatic",
      "explanation": "It's a common feature of literary and rhetorical registers.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK3: Exercise = {
  "id": "c2-u26-b3",
  "type": "vocabulary",
  "title": "Block 3: Existentialism & The Human Condition",
  "explanation": "Key terms from existentialist thought (e.g., angst, absurdity, authenticity).",
  "questions": [
    {
      "id": "c2-u26-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'existential angst'?",
      "options": ["A type of physical pain", "A feeling of dread or anxiety about the freedom and responsibility of one's own existence", "A fear of heights", "A loud noise"],
      "correctAnswer": "A feeling of dread or anxiety about the freedom and responsibility of one's own existence",
      "explanation": "Angst is a central concept in Kierkegaard and Sartre.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q2",
      "type": "fill-blank",
      "question": "For Camus, the ________ is the conflict between humans' search for meaning and the 'silent' universe.",
      "correctAnswer": "absurd",
      "explanation": "The Myth of Sisyphus is the definitive work on the absurd.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q3",
      "type": "multiple-choice",
      "question": "What does 'authenticity' mean in existentialism?",
      "options": ["Being very old", "The degree to which an individual's actions are congruent with their beliefs and desires, despite external pressures", "Winning a prize", "Being very loud"],
      "correctAnswer": "The degree to which an individual's actions are congruent with their beliefs and desires, despite external pressures",
      "explanation": "Authenticity is the opposite of 'bad faith' (mauvaise foi).",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q4",
      "type": "fill-blank",
      "question": "Sartre famously said that '________ precedes essence'.",
      "correctAnswer": "existence",
      "explanation": "This means that humans define themselves through their choices.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q5",
      "type": "multiple-choice",
      "question": "What is 'determinism'?",
      "options": ["The belief in free will", "The doctrine that all events, including human action, are ultimately determined by causes external to the will", "Being very persistent", "A type of insurance"],
      "correctAnswer": "The doctrine that all events, including human action, are ultimately determined by causes external to the will",
      "explanation": "Determinism is often contrasted with existentialist freedom.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q6",
      "type": "fill-blank",
      "question": "Nietzsche spoke of the ________, a man who has overcome the limitations of traditional morality.",
      "correctAnswer": "Ubermensch",
      "explanation": "Also translated as 'Overman' or 'Superman'.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'nihilism'?",
      "options": ["Believing in everything", "The rejection of all religious and moral principles, often in the belief that life is meaningless", "A type of architecture", "A government secret"],
      "correctAnswer": "The rejection of all religious and moral principles, often in the belief that life is meaningless",
      "explanation": "Nihilism is a significant theme in modern philosophy.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q8",
      "type": "fill-blank",
      "question": "The concept of 'facticity' refers to the ________ of our lives that we cannot change.",
      "correctAnswer": "facts",
      "explanation": "Facticity includes our birth, our body, and our past.",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q9",
      "type": "multiple-choice",
      "question": "What does 'being-for-itself' refer to in Sartre's philosophy?",
      "options": ["The nature of inanimate objects", "Human consciousness as it exists in its own right", "Being very selfish", "Working for oneself"],
      "correctAnswer": "Human consciousness as it exists in its own right",
      "explanation": "L'être-pour-soi is contrasted with l'être-en-soi (being-in-itself).",
      "points": 1
    },
    {
      "id": "c2-u26-b3-q10",
      "type": "fill-blank",
      "question": "Man is condemned to be ________.",
      "correctAnswer": "free",
      "explanation": "A famous quote by Sartre emphasizing the burden of choice.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK4: Exercise = {
  "id": "c2-u26-b4",
  "type": "grammar",
  "title": "Block 4: Advanced Comparisons",
  "explanation": "Using sophisticated structures for comparing ideas (e.g., no more... than, as... so, the... the).",
  "questions": [
    {
      "id": "c2-u26-b4-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses 'the... the' correctly?",
      "options": ["The more you read, the more you know.", "More you read, more you know.", "The more you read, more you know.", "More you read, the more you know."],
      "correctAnswer": "The more you read, the more you know.",
      "explanation": "The comparative + clause, the comparative + clause.",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q2",
      "type": "fill-blank",
      "question": "He is ________ (no/smart) than his brother.",
      "correctAnswer": "no smarter",
      "explanation": "'No + comparative + than' is a common way to deny a difference.",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q3",
      "type": "key-word-transformation",
      "question": "Knowledge is important, and so is wisdom. (AS)\n\n________ important, so is wisdom. __________",
      "sentence": "Knowledge is important, and so is wisdom.",
      "keyWord": "AS",
      "startOfAnswer": "________ important, so is wisdom.",
      "correctAnswer": "As knowledge is",
      "explanation": "As... so... structure (formal).",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q4",
      "type": "multiple-choice",
      "question": "Which phrase is most appropriate to emphasize a comparison in a sentence?",
      "options": ["Not at all", "Even more", "A little bit", "Nothing"],
      "correctAnswer": "Even more",
      "explanation": "Used for emphasis (e.g., 'His success was all the more impressive because of his background').",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q5",
      "type": "fill-blank",
      "question": "The task was ________ (difficult) than we had anticipated.",
      "correctAnswer": "far more difficult",
      "explanation": "Using 'far' as an intensifier for comparatives.",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q6",
      "type": "key-word-transformation",
      "question": "If you wait longer, it will be harder. (THE)\n\nThe ________ it will be. __________",
      "sentence": "If you wait longer, it will be harder.",
      "keyWord": "THE",
      "startOfAnswer": "The ________ it will be.",
      "correctAnswer": "longer you wait, the harder",
      "explanation": "Double comparative structure.",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q7",
      "type": "multiple-choice",
      "question": "Which phrase is used for strong comparisons to indicate a significant difference in characteristics or abilities?",
      "options": ["Less than", "As much as", "No more than", "Nothing like"],
      "correctAnswer": "Nothing like",
      "explanation": "Used for strong comparison (e.g., 'He's nothing like as clever as he thinks').",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q8",
      "type": "fill-blank",
      "question": "She is ________ (likely) to succeed as her predecessor.",
      "correctAnswer": "every bit as likely",
      "explanation": "Emphasis on equality in comparison.",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q9",
      "type": "key-word-transformation",
      "question": "This book is not as interesting as the last one. (NEARLY)\n\nThis book is ________ as interesting as the last one. __________",
      "sentence": "This book is not as interesting as the last one.",
      "keyWord": "NEARLY",
      "startOfAnswer": "This book is ________ as interesting as the last one.",
      "correctAnswer": "not nearly",
      "explanation": "Using 'not nearly' to emphasize a large difference.",
      "points": 1
    },
    {
      "id": "c2-u26-b4-q10",
      "type": "key-word-transformation",
      "question": "Like so many students, he struggled with philosophy. (LIKE)\n\nHe struggled __________ many students.",
      "sentence": "Like so many students, he struggled with philosophy.",
      "keyWord": "LIKE",
      "startOfAnswer": "He struggled",
      "correctAnswer": "just like so",
      "explanation": "Using 'like' for comparisons.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK5: Exercise = {
  "id": "c2-u26-b5",
  "type": "vocabulary",
  "title": "Block 5: Ethics & Moral Philosophy",
  "explanation": "Vocabulary for discussing right and wrong.",
  "questions": [
    {
      "id": "c2-u26-b5-q1",
      "type": "multiple-choice",
      "question": "What is 'utilitarianism'?",
      "options": ["The belief in tools", "The doctrine that actions are right if they are useful or for the benefit of a majority", "A type of house building", "A government secret"],
      "correctAnswer": "The doctrine that actions are right if they are useful or for the benefit of a majority",
      "explanation": "Utilitarianism is a form of consequentialism.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q2",
      "type": "fill-blank",
      "question": "The ________ (categorize) imperative is a central concept in Kant's ethics.",
      "correctAnswer": "categorical",
      "explanation": "Act only according to that maxim whereby you can, at the same time, will that it should become a universal law.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'virtue ethics'?",
      "options": ["A type of religious belief", "An approach to ethics that emphasizes an individual's character as the key element of ethical thinking", "Winning a prize for being good", "A type of law"],
      "correctAnswer": "An approach to ethics that emphasizes an individual's character as the key element of ethical thinking",
      "explanation": "Virtue ethics is often associated with Aristotle.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q4",
      "type": "fill-blank",
      "question": "A ________ is a situation in which a difficult choice has to be made between two or more alternatives, especially equally undesirable ones.",
      "correctAnswer": "dilemma",
      "explanation": "Ethical dilemmas test our moral principles.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q5",
      "type": "multiple-choice",
      "question": "What does 'deontology' focus on?",
      "options": ["Consequences", "Duties and rules", "Emotions", "Personal happiness"],
      "correctAnswer": "Duties and rules",
      "explanation": "Deontological ethics judges the morality of an action based on rules.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q6",
      "type": "fill-blank",
      "question": "Altruism is the belief in or practice of disinterested and selfless concern for the ________ of others.",
      "correctAnswer": "well-being",
      "explanation": "Altruism is the opposite of egoism.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'hedonism'?",
      "options": ["A type of religion", "The ethical theory that pleasure is the highest good and proper aim of human life", "Living in a hedge", "Being very brave"],
      "correctAnswer": "The ethical theory that pleasure is the highest good and proper aim of human life",
      "explanation": "Hedonism can be psychological or ethical.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q8",
      "type": "fill-blank",
      "question": "The ________ (subject) of morality is a major topic of debate.",
      "correctAnswer": "subjectivity",
      "explanation": "Subjectivity means being based on or influenced by personal feelings, tastes, or opinions.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'moral relativism'?",
      "options": ["Being kind to your relatives", "The view that moral judgments are true or false only relative to some particular standpoint (e.g., that of a culture or a historical period)", "A type of physics", "A government secret"],
      "correctAnswer": "The view that moral judgments are true or false only relative to some particular standpoint (e.g., that of a culture or a historical period)",
      "explanation": "Relativism challenges the idea of universal moral truths.",
      "points": 1
    },
    {
      "id": "c2-u26-b5-q10",
      "type": "fill-blank",
      "question": "The ________ (conscience) is our inner sense of right and wrong.",
      "correctAnswer": "conscience",
      "explanation": "Our conscience guides our moral decisions.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK6: Exercise = {
  "id": "c2-u26-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Inversion & Emphasis in Context",
  "explanation": "Applying negative inversion to philosophical statements.",
  "questions": [
    {
      "id": "c2-u26-b6-q1",
      "type": "key-word-transformation",
      "question": "He had never encountered such a radical idea. (NEVER)\n\n________ such a radical idea. __________",
      "sentence": "He had never encountered such a radical idea.",
      "keyWord": "NEVER",
      "startOfAnswer": "________ such a radical idea.",
      "correctAnswer": "Never had he encountered",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q2",
      "type": "key-word-transformation",
      "question": "He only realized the truth after he had read the book. (ONLY)\n\n________ read the book did he realize the truth. __________",
      "sentence": "He only realized the truth after he had read the book.",
      "keyWord": "ONLY",
      "startOfAnswer": "________ read the book did he realize the truth.",
      "correctAnswer": "Only after he had",
      "explanation": "Inversion after an 'only after' clause.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q3",
      "type": "key-word-transformation",
      "question": "You should not compromise your principles under any circumstances. (CIRCUMSTANCES)\n\nUnder ________ compromise your principles. __________",
      "sentence": "You should not compromise your principles under any circumstances.",
      "keyWord": "CIRCUMSTANCES",
      "startOfAnswer": "Under ________ compromise your principles.",
      "correctAnswer": "no circumstances should you",
      "explanation": "Formal negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q4",
      "type": "key-word-transformation",
      "question": "He not only questioned authority but also tradition. (NOT)\n\n________ authority, but also tradition. __________",
      "sentence": "He not only questioned authority but also tradition.",
      "keyWord": "NOT",
      "startOfAnswer": "________ authority, but also tradition.",
      "correctAnswer": "Not only did he question",
      "explanation": "Not only... but also inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q5",
      "type": "key-word-transformation",
      "question": "I little thought that I would become a philosopher. (LITTLE)\n\n________ that I would become a philosopher. __________",
      "sentence": "I little thought that I would become a philosopher.",
      "keyWord": "LITTLE",
      "startOfAnswer": "________ that I would become a philosopher.",
      "correctAnswer": "Little did I think",
      "explanation": "Emphatic inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q6",
      "type": "key-word-transformation",
      "question": "He had scarcely left when the debate began. (SCARCELY)\n\n________ when the debate began. __________",
      "sentence": "He had scarcely left when the debate began.",
      "keyWord": "SCARCELY",
      "startOfAnswer": "________ when the debate began.",
      "correctAnswer": "Scarcely had he left",
      "explanation": "Time-based inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q7",
      "type": "key-word-transformation",
      "question": "We seldom find such clarity in modern writing. (SELDOM)\n\n________ such clarity in modern writing. __________",
      "sentence": "We seldom find such clarity in modern writing.",
      "keyWord": "SELDOM",
      "startOfAnswer": "________ such clarity in modern writing.",
      "correctAnswer": "Seldom do we find",
      "explanation": "Restrictive adverb inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q8",
      "type": "key-word-transformation",
      "question": "It was only then that I understood the problem. (THEN)\n\nOnly ________ the problem. __________",
      "sentence": "It was only then that I understood the problem.",
      "keyWord": "THEN",
      "startOfAnswer": "Only ________ the problem.",
      "correctAnswer": "then did I understand",
      "explanation": "Focus on time with inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q9",
      "type": "key-word-transformation",
      "question": "They didn't realize the danger for one moment. (MOMENT)\n\nNot for one ________ realize the danger. __________",
      "sentence": "They didn't realize the danger for one moment.",
      "keyWord": "MOMENT",
      "startOfAnswer": "Not for one ________ realize the danger.",
      "correctAnswer": "moment did they",
      "explanation": "Negative phrase inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b6-q10",
      "type": "key-word-transformation",
      "question": "He had no sooner spoken than he regretted it. (SOONER)\n\nNo ________ than he regretted it. __________",
      "sentence": "He had no sooner spoken than he regretted it.",
      "keyWord": "SOONER",
      "startOfAnswer": "No ________ than he regretted it.",
      "correctAnswer": "sooner had he spoken",
      "explanation": "Comparative time inversion.",
      "points": 1
    }
  ]};

export const C2_U26_BLOCK7: Exercise = {
  "id": "c2-u26-b7",
  "type": "vocabulary",
  "title": "Block 7: Logic & Argumentation",
  "explanation": "Vocabulary for constructing and analyzing philosophical arguments.",
  "questions": [
    {
      "id": "c2-u26-b7-q1",
      "type": "multiple-choice",
      "question": "What is the definition of a syllogism?",
      "options": ["A type of poem", "A form of reasoning in which a conclusion is drawn from two given or assumed propositions (premises)", "A mistake in logic", "A long speech"],
      "correctAnswer": "A form of reasoning in which a conclusion is drawn from two given or assumed propositions (premises)",
      "explanation": "Example: All men are mortal; Socrates is a man; therefore, Socrates is mortal.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q2",
      "type": "fill-blank",
      "question": "The ________ (premise) of the argument was flawed.",
      "correctAnswer": "premise",
      "explanation": "A premise is a previous statement or proposition from which another is inferred or follows as a conclusion.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q3",
      "type": "multiple-choice",
      "question": "What is a 'tautology'?",
      "options": ["A very long sentence", "The saying of the same thing twice in different words, generally considered to be a fault of style", "A type of logic puzzle", "A religious ceremony"],
      "correctAnswer": "The saying of the same thing twice in different words, generally considered to be a fault of style",
      "explanation": "In logic, a tautology is a statement that is true by necessity or by virtue of its logical form.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q4",
      "type": "fill-blank",
      "question": "An ________ argument is one where the truth of the premises guarantees the truth of the conclusion.",
      "correctAnswer": "deductive",
      "explanation": "Deduction moves from the general to the specific.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q5",
      "type": "multiple-choice",
      "question": "What is 'induction' in logic?",
      "options": ["Being introduced to someone", "The inference of a general law from particular instances", "Working in a factory", "A type of electrical charge"],
      "correctAnswer": "The inference of a general law from particular instances",
      "explanation": "Induction involves probability rather than certainty.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q6",
      "type": "fill-blank",
      "question": "A logical ________ is a failure in reasoning which renders an argument invalid.",
      "correctAnswer": "fallacy",
      "explanation": "Examples include ad hominem or straw man arguments.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q7",
      "type": "multiple-choice",
      "question": "What does 'to infer' mean?",
      "options": ["To state clearly", "To deduce or conclude (information) from evidence and reasoning rather than from explicit statements", "To ask a question", "To shout"],
      "correctAnswer": "To deduce or conclude (information) from evidence and reasoning rather than from explicit statements",
      "explanation": "Inference is a key skill in reading and philosophy.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q8",
      "type": "fill-blank",
      "question": "The argument was ________.",
      "correctAnswer": "sound",
      "explanation": "A sound argument is valid and has true premises.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'dialectic'?",
      "options": ["A regional accent", "The art of investigating or discussing the truth of opinions", "A type of medicine", "A government secret"],
      "correctAnswer": "The art of investigating or discussing the truth of opinions",
      "explanation": "Dialectic often involves a process of thesis, antithesis, and synthesis.",
      "points": 1
    },
    {
      "id": "c2-u26-b7-q10",
      "type": "fill-blank",
      "question": "The ________ (conclude) was unavoidable.",
      "correctAnswer": "conclusion",
      "explanation": "The conclusion is the end of an argument.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK8: Exercise = {
  "id": "c2-u26-b8",
  "type": "reading",
  "title": "Block 8: The Legacy of Greek Philosophy",
  "explanation": "Analyze a text about the influence of Plato and Aristotle.",
  "questions": [
    {
      "id": "c2-u26-b8-q1",
      "type": "multiple-choice",
      "question": "What is Plato's 'Theory of Forms'?",
      "options": ["A theory about shapes", "The belief that the physical world is not as real or true as timeless, absolute, unchangeable ideas", "A type of government", "A way to build houses"],
      "correctAnswer": "The belief that the physical world is not as real or true as timeless, absolute, unchangeable ideas",
      "explanation": "For Plato, the 'Forms' are the true reality.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q2",
      "type": "fill-blank",
      "question": "Aristotle was a student of ________.",
      "correctAnswer": "Plato",
      "explanation": "The lineage of Greek philosophy is Socrates -> Plato -> Aristotle.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q3",
      "type": "multiple-choice",
      "question": "What is the 'Socratic method'?",
      "options": ["A way to cook food", "A form of cooperative argumentative dialogue between individuals, based on asking and answering questions to stimulate critical thinking", "A type of exercise", "A government secret"],
      "correctAnswer": "A form of cooperative argumentative dialogue between individuals, based on asking and answering questions to stimulate critical thinking",
      "explanation": "The Socratic method aims to expose contradictions in beliefs.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q4",
      "type": "fill-blank",
      "question": "The ________ (Academy) was the school founded by Plato.",
      "correctAnswer": "Academy",
      "explanation": "It is often considered the first university.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'stoicism'?",
      "options": ["A type of building", "The endurance of pain or hardship without the display of feelings and without complaint", "Being very loud", "A religious ceremony"],
      "correctAnswer": "The endurance of pain or hardship without the display of feelings and without complaint",
      "explanation": "Stoicism was a major school of Hellenistic philosophy.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q6",
      "type": "fill-blank",
      "question": "Epicurus taught that the goal of life was ________.",
      "correctAnswer": "happiness",
      "explanation": "Epicureanism focuses on the absence of pain and fear.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'skepticism'?",
      "options": ["Believing everything", "The theory that certain knowledge is impossible", "A type of medicine", "A government secret"],
      "correctAnswer": "The theory that certain knowledge is impossible",
      "explanation": "Skeptics doubt the possibility of absolute truth.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (Lyceum) was the school founded by Aristotle.",
      "correctAnswer": "Lyceum",
      "explanation": "Aristotle's followers were known as 'peripatetics' because they walked while discussing.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q9",
      "type": "multiple-choice",
      "question": "What does 'Eudaimonia' mean?",
      "options": ["Money", "Human flourishing or prosperity", "A type of demon", "A government secret"],
      "correctAnswer": "Human flourishing or prosperity",
      "explanation": "Eudaimonia is the central goal of Aristotelian ethics.",
      "points": 1
    },
    {
      "id": "c2-u26-b8-q10",
      "type": "fill-blank",
      "question": "The legacy of the Greeks remains ________.",
      "correctAnswer": "unparalleled",
      "explanation": "Unparalleled means having no equal; unmatched.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK9: Exercise = {
  "id": "c2-u26-b9",
  "type": "vocabulary",
  "title": "Block 9: Philosophy Idioms & Metaphors",
  "explanation": "Common expressions derived from philosophical concepts.",
  "questions": [
    {
      "id": "c2-u26-b9-q1",
      "type": "multiple-choice",
      "question": "What does 'the elephant in the room' mean?",
      "options": ["A very large animal", "A major problem or controversial issue which is present but is intentionally ignored", "A new computer game", "A government secret"],
      "correctAnswer": "A major problem or controversial issue which is present but is intentionally ignored",
      "explanation": "Commonly used in ethical and political discussions.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q2",
      "type": "fill-blank",
      "question": "Occam's ________ states that the simplest explanation is usually the correct one.",
      "correctAnswer": "razor",
      "explanation": "Also known as the principle of parsimony.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q3",
      "type": "multiple-choice",
      "question": "What does 'a tabula rasa' refer to?",
      "options": ["A clean table", "The theory that individuals are born without built-in mental content and that all knowledge comes from experience", "A type of Italian food", "A religious ceremony"],
      "correctAnswer": "The theory that individuals are born without built-in mental content and that all knowledge comes from experience",
      "explanation": "Literally 'blank slate'.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q4",
      "type": "fill-blank",
      "question": "To play ________ advocate is to argue against something for the sake of the argument.",
      "correctAnswer": "devil's",
      "explanation": "A common practice in philosophical debate.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q5",
      "type": "multiple-choice",
      "question": "What is an 'ivory tower'?",
      "options": ["A tower made of ivory", "A state of privileged seclusion or separation from the facts and practicalities of the real world", "A type of chess piece", "A government secret"],
      "correctAnswer": "A state of privileged seclusion or separation from the facts and practicalities of the real world",
      "explanation": "Often used to criticize academics and philosophers.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q6",
      "type": "fill-blank",
      "question": "To be at ________ with something is to be in disagreement.",
      "correctAnswer": "odds",
      "explanation": "Example: 'His actions are at odds with his principles'.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q7",
      "type": "multiple-choice",
      "question": "What does 'cogito, ergo sum' mean?",
      "options": ["I eat, therefore I am", "I think, therefore I am", "I speak, therefore I am", "I am, therefore I think"],
      "correctAnswer": "I think, therefore I am",
      "explanation": "Descartes' famous foundation for knowledge.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q8",
      "type": "fill-blank",
      "question": "The 'golden ________' is the desirable middle between two extremes.",
      "correctAnswer": "mean",
      "explanation": "A central concept in Aristotelian ethics.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q9",
      "type": "multiple-choice",
      "question": "What is a 'paradigm shift'?",
      "options": ["Moving a car", "A fundamental change in approach or underlying assumptions", "A type of electrical circuit", "A government secret"],
      "correctAnswer": "A fundamental change in approach or underlying assumptions",
      "explanation": "Coined by Thomas Kuhn in the context of scientific revolutions.",
      "points": 1
    },
    {
      "id": "c2-u26-b9-q10",
      "type": "fill-blank",
      "question": "He's lost in ________.",
      "correctAnswer": "thought",
      "explanation": "A common idiom for deep contemplation.",
      "points": 1
    }
  ]
};

export const C2_U26_BLOCK10: Exercise = {
  "id": "c2-u26-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 26 Review",
  "explanation": "Final review of Philosophy and Logic terminology.",
  "questions": [
    {
      "id": "c2-u26-b10-q1",
      "type": "multiple-choice",
      "question": "What is 'epistemology'?",
      "options": ["Theory of knowledge", "Study of being", "Study of beauty", "Study of insects"],
      "correctAnswer": "Theory of knowledge",
      "explanation": "Core vocabulary from Block 1.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q2",
      "type": "fill-blank",
      "question": "Never ________ (have) I heard such a clever argument.",
      "correctAnswer": "have",
      "explanation": "Negative inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'angst'?",
      "options": ["Physical pain", "Existential dread", "Loud music", "A type of bird"],
      "correctAnswer": "Existential dread",
      "explanation": "Existentialist term.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q4",
      "type": "fill-blank",
      "question": "The ________ (categorical) imperative.",
      "correctAnswer": "categorical",
      "explanation": "Kantian ethics.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q5",
      "type": "key-word-transformation",
      "question": "He only realized his mistake later. (ONLY)\n\nOnly __________ did he realize his mistake.",
      "sentence": "He only realized his mistake later.",
      "keyWord": "ONLY",
      "startOfAnswer": "Only",
      "correctAnswer": "later",
      "explanation": "Inversion.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following terms best describes a philosophical viewpoint that dismisses all beliefs or ideologies?",
      "options": ["Belief in nothing", "Belief in everything", "A type of art", "Online gaming"],
      "correctAnswer": "Belief in nothing",
      "explanation": "Philosophical term.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q7",
      "type": "fill-blank",
      "question": "Occam's ________.",
      "correctAnswer": "razor",
      "explanation": "Logical principle.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q8",
      "type": "key-word-transformation",
      "question": "He is as smart as his father. (EVERY)\n\nHe is __________ every bit as smart as his father.",
      "sentence": "He is as smart as his father.",
      "keyWord": "EVERY",
      "startOfAnswer": "every bit",
      "correctAnswer": "every bit",
      "explanation": "Emphasis in comparison.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q9",
      "type": "multiple-choice",
      "question": "What is a 'syllogism'?",
      "options": ["A logical argument", "A type of poem", "A religious ceremony", "A fast car"],
      "correctAnswer": "A logical argument",
      "explanation": "Logic term.",
      "points": 1
    },
    {
      "id": "c2-u26-b10-q10",
      "type": "fill-blank",
      "question": "The quest for ________ is never-ending.",
      "correctAnswer": "wisdom",
      "explanation": "Philosophy literally means 'love of wisdom'.",
      "points": 1
    }
  ]
};

export const C2_UNIT_26 = createC2Unit(
  'c2-u26',
  'Philosophy & Existentialism',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U26_BLOCK1, C2_U26_BLOCK2, C2_U26_BLOCK3, C2_U26_BLOCK4, C2_U26_BLOCK5,
    C2_U26_BLOCK6, C2_U26_BLOCK7, C2_U26_BLOCK8, C2_U26_BLOCK9, C2_U26_BLOCK10
  ]
);
