
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U15_BLOCK1: Exercise = {
  "id": "c2-u15-b1",
  "type": "vocabulary",
  "title": "Block 1: Genetic Engineering Terminology",
  "explanation": "Advanced terms related to DNA, cloning, and genomic research.",
  "questions": [
    {
      "id": "c2-u15-b1-q1",
      "type": "multiple-choice",
      "question": "What is CRISPR-Cas9 best described as?",
      "options": ["A type of kitchen appliance", "A technology that allows for precise editing of DNA", "A fast-food chain", "A type of computer chip"],
      "correctAnswer": "A technology that allows for precise editing of DNA",
      "explanation": "CRISPR-Cas9 is a revolutionary gene-editing tool.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q2",
      "type": "fill-blank",
      "question": "The scientist mapped the entire human ________.",
      "correctAnswer": "genome",
      "explanation": "The genome is the complete set of genetic material in an organism.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q3",
      "type": "key-word-transformation",
      "question": "The two cells are exactly the same. (INDISTINGUISHABLE)\n\nThe cells are __________",
      "sentence": "The two cells are exactly the same.",
      "keyWord": "INDISTINGUISHABLE",
      "startOfAnswer": "The cells are",
      "correctAnswer": "indistinguishable from one another",
      "explanation": "Indistinguishable means not able to be identified as different or distinct.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q4",
      "type": "multiple-choice",
      "question": "What is the primary purpose of DNA sequencing in genomic research?",
      "options": ["To cut it", "To determine the precise order of nucleotides within a DNA molecule", "To throw it away", "To color it"],
      "correctAnswer": "To determine the precise order of nucleotides within a DNA molecule",
      "explanation": "DNA sequencing is fundamental to genomic research.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q5",
      "type": "fill-blank",
      "question": "The trait is ________ and can be passed down to offspring.",
      "correctAnswer": "heritable",
      "explanation": "Heritable traits are those determined by genes.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q6",
      "type": "key-word-transformation",
      "question": "The disease is caused by a small change in the gene. (MUTATION)\n\nA genetic __________",
      "sentence": "The disease is caused by a small change in the gene.",
      "keyWord": "MUTATION",
      "startOfAnswer": "A genetic",
      "correctAnswer": "mutation affecting the gene",
      "explanation": "Mutation is a change in the DNA sequence.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q7",
      "type": "multiple-choice",
      "question": "What is the primary purpose of gene therapy?",
      "options": ["Talking to your genes", "The transplantation of normal genes into cells in place of missing or defective ones in order to correct genetic disorders", "Buying new genes", "A type of exercise"],
      "correctAnswer": "The transplantation of normal genes into cells in place of missing or defective ones in order to correct genetic disorders",
      "explanation": "Gene therapy aims to treat diseases at their source.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q8",
      "type": "fill-blank",
      "question": "Stem cells are ________, meaning they can develop into many different cell types.",
      "correctAnswer": "pluripotent",
      "explanation": "Pluripotency is a key characteristic of certain stem cells.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q9",
      "keyWord": "TWEAK",
      "type": "key-word-transformation",
      "question": "They made a small adjustment to the formula. (TWEAK)\n\nThey __________",
      "sentence": "They made a small adjustment to the formula.",
      "startOfAnswer": "They",
      "correctAnswer": "made a slight tweak to the formula",
      "explanation": "'Tweak' is a common informal/semi-formal word for a small adjustment.",
      "points": 1
    },
    {
      "id": "c2-u15-b1-q10",
      "type": "multiple-choice",
      "question": "Which of the following best describes transgenic organisms?",
      "options": ["Organisms that have lived for a long time", "Organisms that contain genetic material into which DNA from an unrelated organism has been artificially introduced", "Organisms that are very large", "Robots"],
      "correctAnswer": "Organisms that contain genetic material into which DNA from an unrelated organism has been artificially introduced",
      "explanation": "Transgenic animals and plants are used in research and agriculture.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK2: Exercise = {
  "id": "c2-u15-b2",
  "type": "grammar",
  "title": "Block 2: Concession Clauses (Basic & Intermediate)",
  "explanation": "Using although, though, even though, despite, in spite of.",
  "questions": [
    {
      "id": "c2-u15-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence is grammatically correct?",
      "options": ["Despite he was tired, he kept working.", "In spite of being tired, he kept working.", "Although his tiredness, he kept working.", "Even though being tired, he kept working."],
      "correctAnswer": "In spite of being tired, he kept working.",
      "explanation": "'Despite' is followed by a noun or -ing form.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q2",
      "type": "fill-blank",
      "question": "________ (even) he had the best equipment, he failed the experiment.",
      "correctAnswer": "Even though",
      "explanation": "Even though is a stronger form of although.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q3",
      "type": "key-word-transformation",
      "question": "Although the weather was bad, the flight was not cancelled. (SPITE)\n\nIn __________",
      "sentence": "Although the weather was bad, the flight was not cancelled.",
      "keyWord": "SPITE",
      "startOfAnswer": "In",
      "correctAnswer": "spite of the bad weather",
      "explanation": "Transforming although to in spite of.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following conjunctions can be used at the end of a sentence in informal speech to express contrast?",
      "options": ["Although", "Though", "Even though", "Despite"],
      "correctAnswer": "Though",
      "explanation": "'Though' is often used at the end of a sentence in informal speech.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q5",
      "type": "fill-blank",
      "question": "________ the fact that it was raining, they went for a walk.",
      "correctAnswer": "Despite",
      "explanation": "'Despite the fact that' is a common way to follow despite with a clause.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q6",
      "type": "key-word-transformation",
      "question": "He is very rich, but he is not happy. (HOWEVER)\n\nHe is very rich; __________",
      "sentence": "He is very rich, but he is not happy.",
      "keyWord": "HOWEVER",
      "startOfAnswer": "He is very rich;",
      "correctAnswer": "however, he is not happy",
      "explanation": "Using however as a conjunctive adverb.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following options best introduces a contrast to the idea presented in the first clause?",
      "options": ["Since", "Because", "Much as", "So"],
      "correctAnswer": "Much as",
      "explanation": "'Much as' is a formal way to say although.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q8",
      "type": "fill-blank",
      "question": "I like the car, ________ I can't afford it.",
      "correctAnswer": "but",
      "explanation": "Simple contrast with 'but'.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q9",
      "type": "key-word-transformation",
      "question": "Even though he was injured, he won the race. (INJURY)\n\nDespite __________",
      "sentence": "Even though he was injured, he won the race.",
      "keyWord": "INJURY",
      "startOfAnswer": "Despite",
      "correctAnswer": "his injury",
      "explanation": "Replacing a clause with a noun phrase after despite.",
      "points": 1
    },
    {
      "id": "c2-u15-b2-q10",
      "type": "multiple-choice",
      "question": "Which of the following sentences best introduces a concession in the context of understanding?",
      "options": ["During the time I understand...", "Because I understand...", "Although I understand...", "Since I understand..."],
      "correctAnswer": "Although I understand...",
      "explanation": "'Although' can be used to introduce a concession.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK3: Exercise = {
  "id": "c2-u15-b3",
  "type": "vocabulary",
  "title": "Block 3: Bioethics & Social Implications",
  "explanation": "Vocabulary for the ethical debate surrounding biotechnology.",
  "questions": [
    {
      "id": "c2-u15-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'informed consent'?",
      "options": ["A type of contract", "Permission granted in the knowledge of the possible consequences, typically that which is given by a patient to a doctor", "Agreeing with everyone", "A legal argument"],
      "correctAnswer": "Permission granted in the knowledge of the possible consequences, typically that which is given by a patient to a doctor",
      "explanation": "Informed consent is a cornerstone of medical ethics.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q2",
      "type": "fill-blank",
      "question": "The ________ of human cloning is a topic of intense debate.",
      "correctAnswer": "ethics",
      "explanation": "Ethics refers to moral principles that govern a person's behavior.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q3",
      "type": "key-word-transformation",
      "question": "The experiment raised many difficult questions. (POSED)\n\nThe experiment __________",
      "sentence": "The experiment raised many difficult questions.",
      "keyWord": "POSED",
      "startOfAnswer": "The experiment",
      "correctAnswer": "posed many difficult questions",
      "explanation": "To pose a question is to present or raise it.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q4",
      "type": "multiple-choice",
      "question": "What is the term for the practice or advocacy of improving the human species by selectively mating people with specific desirable hereditary traits?",
      "options": ["The study of stars", "The practice or advocacy of improving the human species by selectively mating people with specific desirable hereditary traits", "A type of medicine", "Building better robots"],
      "correctAnswer": "The practice or advocacy of improving the human species by selectively mating people with specific desirable hereditary traits",
      "explanation": "Eugenics is historically associated with human rights abuses.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q5",
      "type": "fill-blank",
      "question": "There are concerns that genetic engineering could ________ the gap between rich and poor.",
      "correctAnswer": "exacerbate",
      "explanation": "To exacerbate is to make a problem, bad situation, or negative feeling worse.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q6",
      "type": "key-word-transformation",
      "question": "The public is very worried about the new technology. (APPREHENSION)\n\nThere is widespread __________",
      "sentence": "The public is very worried about the new technology.",
      "keyWord": "APPREHENSION",
      "startOfAnswer": "There is widespread",
      "correctAnswer": "apprehension about the new technology",
      "explanation": "Apprehension is anxiety or fear that something bad will happen.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q7",
      "type": "multiple-choice",
      "question": "Which of the following concepts refers to the belief that human behavior is fundamentally shaped by genetic factors?",
      "options": ["The idea that biology is a difficult subject", "The idea that all human behavior is innate and determined by genes", "Deciding to be a biologist", "A type of computer program"],
      "correctAnswer": "The idea that all human behavior is innate and determined by genes",
      "explanation": "Biological determinism is often debated in sociology and psychology.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q8",
      "type": "fill-blank",
      "question": "We must prevent the ________ of genetic information.",
      "correctAnswer": "misuse",
      "explanation": "Misuse refers to using something in the wrong way or for the wrong purpose.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q9",
      "keyWord": "TREAD",
      "type": "key-word-transformation",
      "question": "We should be very careful in this area. (TREAD)\n\nWe must __________",
      "sentence": "We should be very careful in this area.",
      "startOfAnswer": "We must",
      "correctAnswer": "tread carefully in this area",
      "explanation": "'Tread carefully' is a common idiom for acting with caution.",
      "points": 1
    },
    {
      "id": "c2-u15-b3-q10",
      "type": "multiple-choice",
      "question": "What is the best definition of a moral imperative?",
      "options": ["A type of sentence", "A strongly felt principle that compels a person to act", "A legal rule", "A suggestion"],
      "correctAnswer": "A strongly felt principle that compels a person to act",
      "explanation": "Bioethical debates often involve competing moral imperatives.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK4: Exercise = {
  "id": "c2-u15-b4",
  "type": "grammar",
  "title": "Block 4: Advanced Concession Structures",
  "explanation": "Using as/though (Cold as it was), Much as, While/Whereas.",
  "questions": [
    {
      "id": "c2-u15-b4-q1",
      "type": "multiple-choice",
      "question": "Identify the correct structure for emphasis.",
      "options": ["As it was cold, he went out.", "Cold as it was, he went out.", "Cold although it was, he went out.", "Even though cold it was, he went out."],
      "correctAnswer": "Cold as it was, he went out.",
      "explanation": "'Adjective + as/though + subject + verb' is a formal concession structure.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q2",
      "type": "fill-blank",
      "question": "________ (much) I admire his work, I can't agree with his latest theory.",
      "correctAnswer": "Much as",
      "explanation": "'Much as' is used for strong concession.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q3",
      "type": "key-word-transformation",
      "question": "Even though she tried hard, she couldn't solve the puzzle. (TRY)\n\nHard __________",
      "sentence": "Even though she tried hard, she couldn't solve the puzzle.",
      "keyWord": "TRY",
      "startOfAnswer": "Hard",
      "correctAnswer": "as she might try, she couldn't solve the puzzle",
      "explanation": "Advanced concession with 'might'.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q4",
      "type": "multiple-choice",
      "question": "Which of the following conjunctions is most appropriate to indicate a contrast between two statements in formal writing?",
      "options": ["Since", "Whereas", "Because", "So"],
      "correctAnswer": "Whereas",
      "explanation": "'Whereas' is common in formal writing for contrast.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q5",
      "type": "fill-blank",
      "question": "Poor ________ they were, they always helped others.",
      "correctAnswer": "though",
      "explanation": "'Adjective + though + subject + verb'.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q6",
      "type": "key-word-transformation",
      "question": "I like swimming, but my brother prefers running. (WHILE)\n\n________, my brother prefers running. __________",
      "sentence": "I like swimming, but my brother prefers running.",
      "keyWord": "WHILE",
      "startOfAnswer": "________, my brother prefers running.",
      "correctAnswer": "While I like swimming, my brother prefers running.",
      "explanation": "Using while for contrast.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q7",
      "type": "multiple-choice",
      "question": "Which of the following statements best describes the perceived value of a minor contribution?",
      "options": ["The contribution was large.", "The contribution was small, and because of that it was appreciated.", "The contribution was small, but it was still appreciated.", "The contribution was not small."],
      "correctAnswer": "The contribution was small, but it was still appreciated.",
      "explanation": "Standard formal concession structure.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q8",
      "type": "fill-blank",
      "question": "________ he had no experience, he was given the job.",
      "correctAnswer": "Despite",
      "explanation": "'Despite' cannot function correctly here without further contextual adjustment, as it requires a noun phrase. Use 'Despite the fact that he had no experience' or 'Although he had no experience'.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q9",
      "type": "key-word-transformation",
      "question": "Although he is young, he is very wise. (AS)\n\nYoung __________",
      "sentence": "Although he is young, he is very wise.",
      "keyWord": "AS",
      "startOfAnswer": "Young",
      "correctAnswer": "as he is, he is very wise",
      "explanation": "Transforming although to the 'Adj + as' structure.",
      "points": 1
    },
    {
      "id": "c2-u15-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following words is the most formal way to indicate a contrast in a sentence?",
      "options": ["But", "However", "Nonetheless", "Yet"],
      "correctAnswer": "Nonetheless",
      "explanation": "'Nonetheless' is a very formal way to show contrast.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK5: Exercise = {
  "id": "c2-u15-b5",
  "type": "vocabulary",
  "title": "Block 5: Biotechnology Applications",
  "explanation": "Vocabulary for how genetic engineering is used in the real world.",
  "questions": [
    {
      "id": "c2-u15-b5-q1",
      "type": "multiple-choice",
      "question": "What are 'GMOs'?",
      "options": ["Giant Mechanical Objects", "Genetically Modified Organisms", "Global Market Operations", "General Medical Options"],
      "correctAnswer": "Genetically Modified Organisms",
      "explanation": "GMOs are common in agriculture.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q2",
      "type": "fill-blank",
      "question": "The crops have been engineered to be ________ to pests.",
      "correctAnswer": "resistant",
      "explanation": "Pest resistance is a common goal of crop modification.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q3",
      "type": "key-word-transformation",
      "question": "The discovery could lead to a cure for cancer. (POTENTIAL)\n\nThe discovery has the __________",
      "sentence": "The discovery could lead to a cure for cancer.",
      "keyWord": "POTENTIAL",
      "startOfAnswer": "The discovery has the",
      "correctAnswer": "potential to lead to a cure for cancer",
      "explanation": "Potential refers to the possibility of something happening in the future.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q4",
      "type": "multiple-choice",
      "question": "What term describes the field that combines engineering principles with biological systems to create new biological parts, devices, and systems?",
      "options": ["Studying plastic plants", "The design and construction of new biological parts, devices, and systems", "A type of video game", "Making fake skin"],
      "correctAnswer": "The design and construction of new biological parts, devices, and systems",
      "explanation": "Synthetic biology applies engineering principles to biology.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q5",
      "type": "fill-blank",
      "question": "We must consider the long-term ________ of releasing modified organisms into the wild.",
      "correctAnswer": "consequences",
      "explanation": "Consequences are the results of an action.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q6",
      "type": "key-word-transformation",
      "question": "The new treatment is very effective. (EFFICACY)\n\nefficacy of the new treatment is __________",
      "sentence": "The new treatment is very effective.",
      "keyWord": "EFFICACY",
      "startOfAnswer": "efficacy of the new treatment is",
      "correctAnswer": "very high",
      "explanation": "Efficacy is the ability to produce a desired or intended result.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q7",
      "type": "multiple-choice",
      "question": "What is the process known as bio-remediation?",
      "options": ["A type of massage", "The use of either naturally occurring or deliberately introduced microorganisms to consume and break down environmental pollutants", "Building new hospitals", "A type of vitamin"],
      "correctAnswer": "The use of either naturally occurring or deliberately introduced microorganisms to consume and break down environmental pollutants",
      "explanation": "Bio-remediation can help clean up oil spills.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q8",
      "type": "fill-blank",
      "question": "The ________ of genetic testing has made it much more accessible.",
      "correctAnswer": "affordability",
      "explanation": "Affordability is a measure of whether people can afford something.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q9",
      "keyWord": "FRUIT",
      "type": "key-word-transformation",
      "question": "His research finally produced results. (FRUIT)\n\nHis research finally bore __________",
      "sentence": "His research finally produced results.",
      "startOfAnswer": "His research finally bore",
      "correctAnswer": "fruit",
      "explanation": "'Bear fruit' is an idiom for producing a successful result.",
      "points": 1
    },
    {
      "id": "c2-u15-b5-q10",
      "type": "multiple-choice",
      "question": "What is the term for the practice that allows individuals or organizations to claim ownership rights over specific genetic materials or organisms?",
      "options": ["Naming a new species", "The practice of granting legal ownership over genetic material or organisms", "Writing a biography", "Winning a prize for biology"],
      "correctAnswer": "The practice of granting legal ownership over genetic material or organisms",
      "explanation": "Genomic patents are highly controversial.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK6: Exercise = {
  "id": "c2-u15-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Advanced Concession Transformations",
  "explanation": "Rephrase sentences using complex concession structures.",
  "questions": [
    {
      "id": "c2-u15-b6-q1",
      "type": "key-word-transformation",
      "question": "Although he is very clever, he made a basic mistake. (CLEVER)\n\n________, he made a basic mistake. __________",
      "sentence": "Although he is very clever, he made a basic mistake.",
      "keyWord": "CLEVER",
      "startOfAnswer": "________, he made a basic mistake.",
      "correctAnswer": "Clever as he is, he made a basic mistake.",
      "explanation": "Adjective + as + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q2",
      "type": "key-word-transformation",
      "question": "Even though I like the design, I think it's too expensive. (MUCH)\n\n________, I think it's too expensive. __________",
      "sentence": "Even though I like the design, I think it's too expensive.",
      "keyWord": "MUCH",
      "startOfAnswer": "________, I think it's too expensive.",
      "correctAnswer": "Much as I like the design, I think it's too expensive.",
      "explanation": "Much as + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q3",
      "type": "key-word-transformation",
      "question": "Despite the fact that he was tired, he finished the work. (TIRED)\n\n________, he finished the work. __________",
      "sentence": "Despite the fact that he was tired, he finished the work.",
      "keyWord": "TIRED",
      "startOfAnswer": "________, he finished the work.",
      "correctAnswer": "Tired though he was, he finished the work.",
      "explanation": "Adjective + though + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q4",
      "type": "key-word-transformation",
      "question": "He is very hard-working, but his sister is lazy. (WHEREAS)\n\nHe is very hard-working, __________",
      "sentence": "He is very hard-working, but his sister is lazy.",
      "keyWord": "WHEREAS",
      "startOfAnswer": "He is very hard-working,",
      "correctAnswer": "whereas his sister is lazy",
      "explanation": "Contrast with whereas.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q5",
      "type": "key-word-transformation",
      "question": "No matter how hard he tries, he can't win. (HOWEVER)\n\n________, he can't win. __________",
      "sentence": "No matter how hard he tries, he can't win.",
      "keyWord": "HOWEVER",
      "startOfAnswer": "________, he can't win.",
      "correctAnswer": "However hard he tries, he can't win.",
      "explanation": "However + adjective/adverb + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q6",
      "type": "key-word-transformation",
      "question": "Although the instructions were complicated, he followed them perfectly. (COMPLICATED)\n\n________, he followed them perfectly. __________",
      "sentence": "Although the instructions were complicated, he followed them perfectly.",
      "keyWord": "COMPLICATED",
      "startOfAnswer": "________, he followed them perfectly.",
      "correctAnswer": "Complicated as the instructions were, he followed them perfectly.",
      "explanation": "Adj + as + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q7",
      "type": "key-word-transformation",
      "question": "I don't like his music, but I respect his talent. (WHILE)\n\n________, I respect his talent. __________",
      "sentence": "I don't like his music, but I respect his talent.",
      "keyWord": "WHILE",
      "startOfAnswer": "________, I respect his talent.",
      "correctAnswer": "While I don't like his music, I respect his talent.",
      "explanation": "Concession with while.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q8",
      "type": "key-word-transformation",
      "question": "Even though he had a lot of money, he lived a simple life. (DESPITE)\n\n________, he lived a simple life. __________",
      "sentence": "Even though he had a lot of money, he lived a simple life.",
      "keyWord": "DESPITE",
      "startOfAnswer": "________, he lived a simple life.",
      "correctAnswer": "Despite having a lot of money, he lived a simple life.",
      "explanation": "Despite + -ing.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q9",
      "type": "key-word-transformation",
      "question": "Although he was brave, he felt a bit nervous. (BRAVE)\n\n________, he felt a bit nervous. __________",
      "sentence": "Although he was brave, he felt a bit nervous.",
      "keyWord": "BRAVE",
      "startOfAnswer": "________, he felt a bit nervous.",
      "correctAnswer": "Brave though he was, he felt a bit nervous.",
      "explanation": "Adj + though + subject + verb.",
      "points": 1
    },
    {
      "id": "c2-u15-b6-q10",
      "type": "key-word-transformation",
      "question": "She is very tall, but she is not a good basketball player. (NEVERTHELESS)\n\nShe is very tall; __________",
      "sentence": "She is very tall, but she is not a good basketball player.",
      "keyWord": "NEVERTHELESS",
      "startOfAnswer": "She is very tall;",
      "correctAnswer": "nevertheless, she is not a good basketball player",
      "explanation": "Contrast with nevertheless.",
      "points": 1
    }
  ]};

export const C2_U15_BLOCK7: Exercise = {
  "id": "c2-u15-b7",
  "type": "vocabulary",
  "title": "Block 7: Scientific Ethics Idioms",
  "explanation": "Expressions about difficult choices and moral dilemmas.",
  "questions": [
    {
      "id": "c2-u15-b7-q1",
      "type": "multiple-choice",
      "question": "Which of the following phrases best describes a concept that can have both positive and negative impacts?",
      "options": ["A very sharp weapon", "Something that has both favorable and unfavorable consequences", "A tool for gardeners", "A dangerous situation"],
      "correctAnswer": "Something that has both favorable and unfavorable consequences",
      "explanation": "Technology is often described as a double-edged sword.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q2",
      "type": "fill-blank",
      "question": "They are walking a ________ between innovation and safety.",
      "correctAnswer": "tightrope",
      "explanation": "'Walk a tightrope' means to be in a situation where a small mistake can lead to a big problem.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q3",
      "type": "multiple-choice",
      "question": "If you 'open a Pandora's box', you...",
      "options": ["Find a treasure", "Start something that causes many unforeseen problems", "Are very curious", "Connect to the internet"],
      "correctAnswer": "Start something that causes many unforeseen problems",
      "explanation": "Idiom for unleashing trouble.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q4",
      "type": "fill-blank",
      "question": "We are at a ________ in human history.",
      "correctAnswer": "crossroads",
      "explanation": "'At a crossroads' means at a point where a very important decision must be made.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to play with fire' mean?",
      "options": ["To be a firefighter", "To take dangerous risks", "To cook outside", "To be very angry"],
      "correctAnswer": "To take dangerous risks",
      "explanation": "Idiom for reckless behavior.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q6",
      "type": "fill-blank",
      "question": "It's a ________ slope from gene editing to eugenics.",
      "correctAnswer": "slippery",
      "explanation": "'Slippery slope' is an idea that a small step will lead to a chain of related events.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q7",
      "type": "multiple-choice",
      "question": "If something is 'a necessary evil', it is...",
      "options": ["Completely bad", "Something bad that must exist or be done to achieve a particular result", "Very helpful", "A type of crime"],
      "correctAnswer": "Something bad that must exist or be done to achieve a particular result",
      "explanation": "Some see animal testing as a necessary evil.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q8",
      "type": "fill-blank",
      "question": "The decision was the ________ of two evils.",
      "correctAnswer": "lesser",
      "explanation": "'Lesser of two evils' means the less unpleasant of two poor options.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to have blood on your hands' mean?",
      "options": ["To be a doctor", "To be responsible for someone's death or suffering", "To be injured", "To be working hard"],
      "correctAnswer": "To be responsible for someone's death or suffering",
      "explanation": "Idiom for guilt.",
      "points": 1
    },
    {
      "id": "c2-u15-b7-q10",
      "type": "fill-blank",
      "question": "He's acting as a ________'s advocate to stimulate discussion.",
      "correctAnswer": "devil",
      "explanation": "'Devil's advocate' is someone who takes an opposing view for the sake of argument.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK8: Exercise = {
  "id": "c2-u15-b8",
  "type": "grammar",
  "title": "Block 8: Contrast with Conjunctions & Prepositions",
  "explanation": "Comparing the use of whereas, while, despite, in contrast to.",
  "questions": [
    {
      "id": "c2-u15-b8-q1",
      "type": "multiple-choice",
      "question": "Which sentence uses 'Whereas' correctly?",
      "options": ["Whereas he is rich, he is unhappy.", "He is rich whereas he is unhappy.", "He likes tea, whereas I prefer coffee.", "Whereas his wealth, he is unhappy."],
      "correctAnswer": "He likes tea, whereas I prefer coffee.",
      "explanation": "'Whereas' contrasts two different facts about two different subjects.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q2",
      "type": "fill-blank",
      "question": "In ________ to his previous work, this new study is very thorough.",
      "correctAnswer": "contrast",
      "explanation": "'In contrast to' is followed by a noun.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q3",
      "type": "key-word-transformation",
      "question": "London is expensive, but Berlin is quite cheap. (WHILE)\n\nWhile __________",
      "sentence": "London is expensive, but Berlin is quite cheap.",
      "keyWord": "WHILE",
      "startOfAnswer": "While",
      "correctAnswer": "London is expensive, Berlin is quite cheap.",
      "explanation": "Using while for contrast.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q4",
      "type": "multiple-choice",
      "question": "What is the key grammatical distinction between \"despite\" and \"although\"?",
      "options": ["They mean different things.", "Despite is followed by a noun/-ing; Although is followed by a clause.", "Although is more formal.", "There is no difference."],
      "correctAnswer": "Despite is followed by a noun/-ing; Although is followed by a clause.",
      "explanation": "This is a key grammatical distinction.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q5",
      "type": "fill-blank",
      "question": "He failed ________ having studied for weeks.",
      "correctAnswer": "despite",
      "explanation": "Followed by -ing.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q6",
      "type": "key-word-transformation",
      "question": "The movie was long, but it was very interesting. (THOUGH)\n\nThough __________",
      "sentence": "The movie was long, but it was very interesting.",
      "keyWord": "THOUGH",
      "startOfAnswer": "Though",
      "correctAnswer": "the movie was long, it was very interesting.",
      "explanation": "Advanced concession structure.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly expresses a formal concession?",
      "options": ["Much as I'd like to help, I can't.", "Much although I'd like to help, I can't.", "As much I'd like to help, I can't.", "Even much as I'd like to help, I can't."],
      "correctAnswer": "Much as I'd like to help, I can't.",
      "explanation": "Standard formal concession.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q8",
      "type": "fill-blank",
      "question": "________ the difficulties, she remained optimistic.",
      "correctAnswer": "Notwithstanding",
      "explanation": "'Notwithstanding' is a very formal way to say despite.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q9",
      "type": "key-word-transformation",
      "question": "I understand your concerns, but I have to proceed. (WHILE)\n\n________, I have to proceed. __________",
      "sentence": "I understand your concerns, but I have to proceed.",
      "keyWord": "WHILE",
      "startOfAnswer": "________, I have to proceed.",
      "correctAnswer": "While I understand your concerns, I have to proceed.",
      "explanation": "Concession with while.",
      "points": 1
    },
    {
      "id": "c2-u15-b8-q10",
      "type": "multiple-choice",
      "question": "Which of the following best describes the function of the word \"nevertheless\" in a sentence?",
      "options": ["It introduces a result.", "It introduces a contrast to a previous statement.", "It introduces a reason.", "It introduces a sequence."],
      "correctAnswer": "It introduces a contrast to a previous statement.",
      "explanation": "Nevertheless is a formal transition word.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK9: Exercise = {
  "id": "c2-u15-b9",
  "type": "reading",
  "title": "Block 9: The Genome Revolution",
  "explanation": "Analyze a complex text about the future of genetic medicine.",
  "questions": [
    {
      "id": "c2-u15-b9-q1",
      "type": "multiple-choice",
      "question": "What is the main benefit of 'personalized medicine' mentioned in the text?",
      "options": ["It is cheaper for everyone", "Treatments can be tailored to an individual's genetic profile, increasing efficacy and reducing side effects", "It doesn't require doctors", "It works for any disease"],
      "correctAnswer": "Treatments can be tailored to an individual's genetic profile, increasing efficacy and reducing side effects",
      "explanation": "Personalization is the future of healthcare.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q2",
      "type": "fill-blank",
      "question": "The ________ of genetic data raises serious privacy concerns.",
      "correctAnswer": "storage",
      "explanation": "Storing sensitive genetic information is a major ethical challenge.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q3",
      "type": "multiple-choice",
      "question": "What does 'genetic predisposition' mean?",
      "options": ["A genetic disease you have now", "An increased likelihood of developing a particular disease based on a person's genetic makeup", "Having the same genes as your father", "Being very good at biology"],
      "correctAnswer": "An increased likelihood of developing a particular disease based on a person's genetic makeup",
      "explanation": "Predisposition does not mean certainty.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q4",
      "type": "fill-blank",
      "question": "Genetic testing can reveal ________ information about a person's future health.",
      "correctAnswer": "sensitive",
      "explanation": "Sensitive information requires careful handling.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q5",
      "type": "multiple-choice",
      "question": "What is the 'alignment' problem in the context of bioethics?",
      "options": ["Making sure scientists' chairs are straight", "Ensuring that technological power is used in a way that is consistent with human values", "A problem with DNA sequencing", "The cost of research"],
      "correctAnswer": "Ensuring that technological power is used in a way that is consistent with human values",
      "explanation": "Alignment is a cross-disciplinary ethical challenge.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q6",
      "type": "fill-blank",
      "question": "The ________ of genetic modification are still being debated.",
      "correctAnswer": "merits",
      "explanation": "Merits refer to the quality of being particularly good or worthy.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q7",
      "type": "multiple-choice",
      "question": "What does 'ubiquity' refer to in the text?",
      "options": ["A new type of gene", "The state of being everywhere at once", "A very rare disease", "The cost of medicine"],
      "correctAnswer": "The state of being everywhere at once",
      "explanation": "Genetic technology is becoming ubiquitous.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q8",
      "type": "fill-blank",
      "question": "We must avoid a ________ where only the rich can afford genetic enhancement.",
      "correctAnswer": "dystopia",
      "explanation": "A dystopia is an imagined state or society in which there is great suffering or injustice.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'human enhancement'?",
      "options": ["Building bigger houses", "The use of technology to improve human physical and cognitive abilities beyond what is normal", "Improving human rights", "Teaching people better"],
      "correctAnswer": "The use of technology to improve human physical and cognitive abilities beyond what is normal",
      "explanation": "Enhancement goes beyond therapy or healing.",
      "points": 1
    },
    {
      "id": "c2-u15-b9-q10",
      "type": "fill-blank",
      "question": "The ________ of genetic research is breathtaking.",
      "correctAnswer": "pace",
      "explanation": "Pace refers to the speed at which something happens.",
      "points": 1
    }
  ]
};

export const C2_U15_BLOCK10: Exercise = {
  "id": "c2-u15-b10",
  "type": "vocabulary",
  "title": "Block 10: Genetic Engineering Review",
  "explanation": "Final review of Unit 15 concepts.",
  "questions": [
    {
      "id": "c2-u15-b10-q1",
      "type": "multiple-choice",
      "question": "Which term describes a change in the DNA sequence of an organism?",
      "options": ["Translation", "Transcription", "Mutation", "Replication"],
      "correctAnswer": "Mutation",
      "explanation": "Mutation is the source of genetic variation.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q2",
      "type": "fill-blank",
      "question": "The ________ of genes can be altered to produce specific traits.",
      "correctAnswer": "expression",
      "explanation": "Gene expression is the process by which information from a gene is used in the synthesis of a functional gene product.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'bioethics' primarily concerned with?",
      "options": ["The cost of biology textbooks", "The ethical implications of biological research and applications", "The classification of animals", "The history of the earth"],
      "correctAnswer": "The ethical implications of biological research and applications",
      "explanation": "Bioethics is a vital field in modern science.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q4",
      "type": "fill-blank",
      "question": "We must ensure that genetic research is ________.",
      "correctAnswer": "transparent",
      "explanation": "Transparency refers to being open and honest.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q5",
      "type": "key-word-transformation",
      "question": "Although he was rich, he was unhappy. (RICH)\n\nRich as he was, __________",
      "sentence": "Although he was rich, he was unhappy.",
      "keyWord": "RICH",
      "startOfAnswer": "Rich as he was,",
      "correctAnswer": "he was unhappy.",
      "explanation": "Advanced concession structure.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q6",
      "type": "multiple-choice",
      "question": "What is the definition of cloning?",
      "options": ["Making a photocopy", "The process of producing similar populations of genetically identical individuals", "A type of surgery", "A way to grow plants"],
      "correctAnswer": "The process of producing similar populations of genetically identical individuals",
      "explanation": "Cloning can be natural or artificial.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q7",
      "type": "fill-blank",
      "question": "The ________ of the new technology are unknown.",
      "correctAnswer": "ramifications",
      "explanation": "Ramifications are the possible results of a decision.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q8",
      "type": "key-word-transformation",
      "question": "He likes football, but I prefer tennis. (WHEREAS)\n\nHe likes football, __________",
      "sentence": "He likes football, but I prefer tennis.",
      "keyWord": "WHEREAS",
      "startOfAnswer": "He likes football,",
      "correctAnswer": "whereas I prefer tennis",
      "explanation": "Contrast with whereas.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q9",
      "type": "multiple-choice",
      "question": "What is a 'designer baby'?",
      "options": ["A very stylish baby", "A baby whose genetic makeup has been selected or altered, often to include a particular gene or to remove genes associated with a disease", "A baby who is good at design", "A robot baby"],
      "correctAnswer": "A baby whose genetic makeup has been selected or altered, often to include a particular gene or to remove genes associated with a disease",
      "explanation": "Designer babies are a major ethical concern.",
      "points": 1
    },
    {
      "id": "c2-u15-b10-q10",
      "type": "fill-blank",
      "question": "The study was ________ by the ethics committee.",
      "correctAnswer": "vetted",
      "explanation": "To vet is to make a careful and critical examination of (something).",
      "points": 1
    }
  ]
};

export const C2_UNIT_15 = createC2Unit(
  'c2-u15',
  'Genetic Engineering & Bioethics',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U15_BLOCK1, C2_U15_BLOCK2, C2_U15_BLOCK3, C2_U15_BLOCK4, C2_U15_BLOCK5,
    C2_U15_BLOCK6, C2_U15_BLOCK7, C2_U15_BLOCK8, C2_U15_BLOCK9, C2_U15_BLOCK10
  ]
);
