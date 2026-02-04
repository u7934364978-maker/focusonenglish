
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U34_BLOCK1: Exercise = {
  "id": "c2-u34-b1",
  "type": "vocabulary",
  "title": "Block 1: The Entrepreneurial Spirit",
  "explanation": "Advanced terms for starting and growing a business.",
  "questions": [
    {
      "id": "c2-u34-b1-q1",
      "type": "multiple-choice",
      "question": "What is the term for an individual who invests in new businesses, typically providing funding in exchange for equity, and is known for taking significant risks in pursuit of substantial returns?",
      "options": ["A person who likes adventure", "An investor who provides capital to startups with high growth potential", "A bank manager", "A type of insurance agent"],
      "correctAnswer": "An investor who provides capital to startups with high growth potential",
      "explanation": "Venture capitalists often take high risks for potentially high returns.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q2",
      "type": "fill-blank",
      "question": "The startup reached a ________ (billion) dollar valuation.",
      "correctAnswer": "billion",
      "explanation": "A 'unicorn' is a startup valued at over $1 billion.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q3",
      "type": "multiple-choice",
      "question": "What is 'bootstrapping' in business?",
      "options": ["Putting on boots", "Starting a company with little capital and relying on personal savings or operating revenue", "A type of marketing", "Working in a factory"],
      "correctAnswer": "Starting a company with little capital and relying on personal savings or operating revenue",
      "explanation": "Bootstrapping requires great financial discipline.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q4",
      "type": "fill-blank",
      "question": "They decided to ________ (pivot) their business model.",
      "correctAnswer": "pivot",
      "explanation": "To pivot means to fundamentally change the direction of a business.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'disruptive innovation'?",
      "options": ["Innovation that is loud", "An innovation that creates a new market and value network, eventually disrupting an existing market", "A type of repair", "Working very fast"],
      "correctAnswer": "An innovation that creates a new market and value network, eventually disrupting an existing market",
      "explanation": "Example: Netflix disrupting the video rental industry.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q6",
      "type": "fill-blank",
      "question": "The ________ (incubate) provides resources for early-stage startups.",
      "correctAnswer": "incubator",
      "explanation": "Business incubators help startups during their initial development phase.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'scalability'?",
      "options": ["The ability to climb a mountain", "The capacity of a business to grow without being hampered by its structure or available resources", "A type of fish skin", "A measure of weight"],
      "correctAnswer": "The capacity of a business to grow without being hampered by its structure or available resources",
      "explanation": "Scalability is key for modern tech startups.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q8",
      "type": "fill-blank",
      "question": "A ________ (seed) round is the first formal stage of investment.",
      "correctAnswer": "seed",
      "explanation": "Seed funding helps a business get off the ground.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'equity' in a startup?",
      "options": ["Equality", "Ownership interest in a company, usually in the form of stock or shares", "A type of loan", "A bank account"],
      "correctAnswer": "Ownership interest in a company, usually in the form of stock or shares",
      "explanation": "Founders often give equity to investors in exchange for capital.",
      "points": 1
    },
    {
      "id": "c2-u34-b1-q10",
      "type": "fill-blank",
      "question": "The ________ (entrepre) mindset involves risk-taking.",
      "correctAnswer": "entrepreneurial",
      "explanation": "An entrepreneurial mindset focuses on opportunities and innovation.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK2: Exercise = {
  "id": "c2-u34-b2",
  "type": "grammar",
  "title": "Block 2: Hypothetical Situations",
  "explanation": "Using 'Suppose', 'What if', 'Imagine', and 'It's time' for hypothetical scenarios.",
  "questions": [
    {
      "id": "c2-u34-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses a hypothetical situation in the present/future?",
      "options": ["Suppose we win the contract.", "Suppose we won the contract.", "Suppose we will win the contract.", "Suppose we have won the contract."],
      "correctAnswer": "Suppose we won the contract.",
      "explanation": "'Suppose' + Past Simple refers to a hypothetical present or future.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q2",
      "type": "fill-blank",
      "question": "It's time you ________ (start) your own business.",
      "correctAnswer": "started",
      "explanation": "'It's time' + subject + Past Simple is used to say that something should have happened or been done already.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q3",
      "type": "key-word-transformation",
      "question": "What would happen if we lost our main investor? (SUPPOSE)\n\n________ our main investor? __________",
      "sentence": "What would happen if we lost our main investor?",
      "keyWord": "SUPPOSE",
      "startOfAnswer": "________ our main investor?",
      "correctAnswer": "Suppose we lost",
      "explanation": "'Suppose' used as a hypothetical question.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q4",
      "type": "multiple-choice",
      "question": "What would have happened if we had pivoted?",
      "options": ["We pivoted.", "We didn't pivot.", "We might pivot.", "We should pivot."],
      "correctAnswer": "We pivoted.",
      "explanation": "'What if' + Past Perfect refers to a hypothetical past (we DID pivot, but we are imagining the alternative).",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q5",
      "type": "fill-blank",
      "question": "Imagine you ________ (be) given a million dollars; what would you do?",
      "correctAnswer": "were",
      "explanation": "'Imagine' + Past Simple for hypothetical present/future.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q6",
      "type": "key-word-transformation",
      "question": "You really should go home now. (TIME)\n\nIt's ________ home. __________",
      "sentence": "You really should go home now.",
      "keyWord": "TIME",
      "startOfAnswer": "It's ________ home.",
      "correctAnswer": "time you went",
      "explanation": "'It's time' structure.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly uses the past perfect form to express a hypothetical situation in the past?",
      "options": ["Suppose he fails.", "Suppose he failed.", "Suppose he had failed.", "Suppose he was failing."],
      "correctAnswer": "Suppose he had failed.",
      "explanation": "'Suppose' + Past Perfect for hypothetical past.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q8",
      "type": "fill-blank",
      "question": "Suppose they ________ (offer) you the job; would you take it?",
      "correctAnswer": "offered",
      "explanation": "Hypothetical future.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q9",
      "type": "key-word-transformation",
      "question": "We should have told him the truth. (IF)\n\nWhat ________ the truth? __________",
      "sentence": "We should have told him the truth.",
      "keyWord": "IF",
      "startOfAnswer": "What ________ the truth?",
      "correctAnswer": "if we had told him",
      "explanation": "Hypothetical past with 'What if'.",
      "points": 1
    },
    {
      "id": "c2-u34-b2-q10",
      "type": "multiple-choice",
      "question": "Which statement accurately describes the difference between the phrases 'high time' and 'time'?",
      "options": ["No, they are identical.", "Yes, 'high time' is more emphatic.", "Yes, 'high time' refers only to the future.", "No, 'high time' is incorrect English."],
      "correctAnswer": "Yes, 'high time' is more emphatic.",
      "explanation": "Both use the same grammatical structure.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK3: Exercise = {
  "id": "c2-u34-b3",
  "type": "vocabulary",
  "title": "Block 3: Innovation & Technology",
  "explanation": "Terms related to research, development, and tech breakthroughs.",
  "questions": [
    {
      "id": "c2-u34-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'R&D'?",
      "options": ["Rest and Development", "Research and Development", "Real and Digital", "Road and Driving"],
      "correctAnswer": "Research and Development",
      "explanation": "R&D is essential for innovation-led companies.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q2",
      "type": "fill-blank",
      "question": "The ________ (break) through came after years of study.",
      "correctAnswer": "breakthrough",
      "explanation": "A breakthrough is a sudden, dramatic, and important discovery or development.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q3",
      "type": "multiple-choice",
      "question": "What is a 'patent'?",
      "options": ["A type of patient in a hospital", "A government authority or license conferring a right or title for a set period", "A type of shoe", "A bank loan"],
      "correctAnswer": "A government authority or license conferring a right or title for a set period",
      "explanation": "Patents protect intellectual property.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q4",
      "type": "fill-blank",
      "question": "The company has a ________ (cut) edge technology.",
      "correctAnswer": "cutting-edge",
      "explanation": "Cutting-edge means highly advanced or innovative.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q5",
      "type": "multiple-choice",
      "question": "What is 'obsolescence'?",
      "options": ["Being very clean", "The process of becoming obsolete or outdated", "Working in an office", "A type of insurance"],
      "correctAnswer": "The process of becoming obsolete or outdated",
      "explanation": "Planned obsolescence is a controversial business strategy.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q6",
      "type": "fill-blank",
      "question": "They are early ________ (adopt) of new tech.",
      "correctAnswer": "adopters",
      "explanation": "Early adopters are individuals or businesses that use a new product or technology before others.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'open source' software?",
      "options": ["Software that is free but secret", "Software for which the original source code is made freely available and may be redistributed and modified", "Software for opening doors", "A type of hardware"],
      "correctAnswer": "Software for which the original source code is made freely available and may be redistributed and modified",
      "explanation": "Linux is a famous example of open source software.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q8",
      "type": "fill-blank",
      "question": "The ________ (disrupt) of the industry was unexpected.",
      "correctAnswer": "disruption",
      "explanation": "Disruption changes the competitive landscape.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q9",
      "type": "multiple-choice",
      "question": "What is a 'paradigm shift'?",
      "options": ["Moving a car", "A fundamental change in approach or underlying assumptions", "A type of computer code", "Working in shifts"],
      "correctAnswer": "A fundamental change in approach or underlying assumptions",
      "explanation": "The internet caused a paradigm shift in communication.",
      "points": 1
    },
    {
      "id": "c2-u34-b3-q10",
      "type": "fill-blank",
      "question": "The ________ (iterate) process is key to design.",
      "correctAnswer": "iterative",
      "explanation": "Iteration involves repeating a process with the aim of approaching a desired goal.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK4: Exercise = {
  "id": "c2-u34-b4",
  "type": "grammar",
  "title": "Block 4: Hypothetical Review",
  "explanation": "Mixed practice of hypothetical structures.",
  "questions": [
    {
      "id": "c2-u34-b4-q1",
      "type": "fill-blank",
      "question": "What if we ________ (lose) everything tomorrow?",
      "correctAnswer": "lost",
      "explanation": "Hypothetical future.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q2",
      "type": "fill-blank",
      "question": "Suppose he ________ (not/tell) us the truth back then.",
      "correctAnswer": "hadn't told",
      "explanation": "Hypothetical past.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q3",
      "type": "key-word-transformation",
      "question": "It's time for the meeting to start. (TIME)\n\nIt's ________ the meeting started. __________",
      "sentence": "It's time for the meeting to start.",
      "keyWord": "TIME",
      "startOfAnswer": "It's ________ the meeting started.",
      "correctAnswer": "high time",
      "explanation": "Emphasis with 'high time'.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q4",
      "sentence": "()",
      "type": "key-word-transformation",
      "question": "() ()\n\n __________",
      "correctAnswer": "being",
      "explanation": "'Imagine' + -ing for general hypothetical situations.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q5",
      "type": "fill-blank",
      "question": "Suppose you ________ (see) a ghost; what would you do?",
      "correctAnswer": "saw",
      "explanation": "Hypothetical present.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q6",
      "type": "key-word-transformation",
      "question": "What would have happened if I had said yes? (SUPPOSE)\n\n________ yes? __________",
      "sentence": "What would have happened if I had said yes?",
      "keyWord": "SUPPOSE",
      "startOfAnswer": "________ yes?",
      "correctAnswer": "Suppose I had said",
      "explanation": "Hypothetical past.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q7",
      "sentence": "()",
      "type": "key-word-transformation",
      "question": "() ()\n\n __________",
      "correctAnswer": "took",
      "explanation": "'It's high time' + Past Simple.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q8",
      "type": "fill-blank",
      "question": "What if they ________ (cancel) the project next week?",
      "correctAnswer": "cancelled",
      "explanation": "Hypothetical future.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q9",
      "type": "key-word-transformation",
      "question": "Imagine how he felt. (HAVE)\n\nImagine how he must ________. __________",
      "sentence": "Imagine how he felt.",
      "keyWord": "HAVE",
      "startOfAnswer": "Imagine how he must ________.",
      "correctAnswer": "have felt",
      "explanation": "Deduction about the past.",
      "points": 1
    },
    {
      "id": "c2-u34-b4-q10",
      "sentence": "()",
      "type": "key-word-transformation",
      "question": "() ()\n\n __________",
      "correctAnswer": "were",
      "explanation": "Hypothetical present.",
      "points": 1
    }
  ]};

export const C2_U34_BLOCK5: Exercise = {
  "id": "c2-u34-b5",
  "type": "vocabulary",
  "title": "Block 5: Market Trends & Competition",
  "explanation": "Terms for describing the business environment.",
  "questions": [
    {
      "id": "c2-u34-b5-q1",
      "type": "multiple-choice",
      "question": "What is a 'monopoly'?",
      "options": ["A type of board game only", "The exclusive possession or control of the supply of or trade in a commodity or service", "A type of bank account", "Working alone"],
      "correctAnswer": "The exclusive possession or control of the supply of or trade in a commodity or service",
      "explanation": "Monopolies are often regulated by governments.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q2",
      "type": "fill-blank",
      "question": "They have a ________ (compete) advantage over their rivals.",
      "correctAnswer": "competitive",
      "explanation": "A competitive advantage is a condition or circumstance that puts a company in a superior business position.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q3",
      "type": "multiple-choice",
      "question": "What is 'market penetration'?",
      "options": ["Buying a market", "The extent to which a product is recognized and bought by customers in a particular market", "A type of physical attack", "A hole in the wall"],
      "correctAnswer": "The extent to which a product is recognized and bought by customers in a particular market",
      "explanation": "Market penetration strategies aim to increase sales of existing products.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q4",
      "type": "fill-blank",
      "question": "The market is ________ (saturate) with similar products.",
      "correctAnswer": "saturated",
      "explanation": "A saturated market is one in which the volume of a product or service has been maximized.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q5",
      "type": "multiple-choice",
      "question": "What is 'benchmarking'?",
      "options": ["Sitting on a bench", "Evaluating something by comparison with a standard", "A type of gardening", "A measure of weight"],
      "correctAnswer": "Evaluating something by comparison with a standard",
      "explanation": "Benchmarking helps companies identify areas for improvement.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q6",
      "type": "fill-blank",
      "question": "We must identify our ________ (target) demographic.",
      "correctAnswer": "target",
      "explanation": "A target demographic is a specific group of people that a product or service is aimed at.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q7",
      "type": "multiple-choice",
      "question": "What is 'cannibalization' in marketing?",
      "options": ["Eating people", "A reduction in sales volume of one product as a result of the introduction of a new product by the same producer", "A type of movie", "A decrease in the price of meat"],
      "correctAnswer": "A reduction in sales volume of one product as a result of the introduction of a new product by the same producer",
      "explanation": "Companies often worry about 'eating' their own sales.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q8",
      "type": "fill-blank",
      "question": "The ________ (niche) market is very profitable.",
      "correctAnswer": "niche",
      "explanation": "A niche market is a small, specialized section of the population.",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q9",
      "type": "multiple-choice",
      "question": "What is 'blue ocean' strategy?",
      "options": ["Fishing in the ocean", "Creating an uncontested market space and making the competition irrelevant", "A type of sailing race", "Protecting the environment"],
      "correctAnswer": "Creating an uncontested market space and making the competition irrelevant",
      "explanation": "Focuses on innovation rather than competing in existing markets ('red oceans').",
      "points": 1
    },
    {
      "id": "c2-u34-b5-q10",
      "type": "fill-blank",
      "question": "They are the ________ (market) leader.",
      "correctAnswer": "market",
      "explanation": "A market leader is the company with the largest market share.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK6: Exercise = {
  "id": "c2-u34-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Hypotheticals In Business Context",
  "explanation": "Using advanced structures to discuss entrepreneurial scenarios.",
  "questions": [
    {
      "id": "c2-u34-b6-q1",
      "type": "key-word-transformation",
      "question": "If we had more time, we could finish the prototype. (SUPPOSE)\n\n________ more time, could we finish the prototype? __________",
      "sentence": "If we had more time, we could finish the prototype.",
      "keyWord": "SUPPOSE",
      "startOfAnswer": "________ more time, could we finish the prototype?",
      "correctAnswer": "Suppose we had",
      "explanation": "Hypothetical present.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q2",
      "type": "key-word-transformation",
      "question": "What would you have done if they had rejected the proposal? (WHAT)\n\n________ rejected the proposal, what would you have done? __________",
      "sentence": "What would you have done if they had rejected the proposal?",
      "keyWord": "WHAT",
      "startOfAnswer": "________ rejected the proposal, what would you have done?",
      "correctAnswer": "What if they had",
      "explanation": "Hypothetical past.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q3",
      "type": "key-word-transformation",
      "question": "It is necessary for us to update our software now. (TIME)\n\nIt is ________ our software. __________",
      "sentence": "It is necessary for us to update our software now.",
      "keyWord": "TIME",
      "startOfAnswer": "It is ________ our software.",
      "correctAnswer": "time we updated",
      "explanation": "'It's time' structure.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q4",
      "type": "key-word-transformation",
      "question": "Imagine being the first person on Mars. (WERE)\n\nImagine ________ the first person on Mars. __________",
      "sentence": "Imagine being the first person on Mars.",
      "keyWord": "WERE",
      "startOfAnswer": "Imagine ________ the first person on Mars.",
      "correctAnswer": "if you were",
      "explanation": "Hypothetical state.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q5",
      "type": "key-word-transformation",
      "question": "We should have invested in Bitcoin years ago. (IF)\n\nWhat ________ in Bitcoin years ago? __________",
      "sentence": "We should have invested in Bitcoin years ago.",
      "keyWord": "IF",
      "startOfAnswer": "What ________ in Bitcoin years ago?",
      "correctAnswer": "if we had invested",
      "explanation": "Hypothetical past.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q6",
      "type": "key-word-transformation",
      "question": "Suppose they offer you a partnership. (OFFERED)\n\nSuppose you ________ a partnership. __________",
      "sentence": "Suppose they offer you a partnership.",
      "keyWord": "OFFERED",
      "startOfAnswer": "Suppose you ________ a partnership.",
      "correctAnswer": "were offered",
      "explanation": "Passive hypothetical.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q7",
      "type": "key-word-transformation",
      "question": "You should really find a new job. (HIGH)\n\nIt's ________ found a new job. __________",
      "sentence": "You should really find a new job.",
      "keyWord": "HIGH",
      "startOfAnswer": "It's ________ found a new job.",
      "correctAnswer": "high time you",
      "explanation": "'It's high time'.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q8",
      "type": "key-word-transformation",
      "question": "Imagine if the internet stopped working tomorrow. (TO)\n\nImagine the internet ________ working tomorrow. __________",
      "sentence": "Imagine if the internet stopped working tomorrow.",
      "keyWord": "TO",
      "startOfAnswer": "Imagine the internet ________ working tomorrow.",
      "correctAnswer": "were to stop",
      "explanation": "Hypothetical with 'were to'.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q9",
      "type": "key-word-transformation",
      "question": "If we don't act now, we'll lose out. (WHAT)\n\n________ don't act now? __________",
      "sentence": "If we don't act now, we'll lose out.",
      "keyWord": "WHAT",
      "startOfAnswer": "________ don't act now?",
      "correctAnswer": "What if we",
      "explanation": "Real condition with 'What if'.",
      "points": 1
    },
    {
      "id": "c2-u34-b6-q10",
      "type": "key-word-transformation",
      "question": "Suppose you were rich. (HAD)\n\nSuppose you ________ a lot of money. __________",
      "sentence": "Suppose you were rich.",
      "keyWord": "HAD",
      "startOfAnswer": "Suppose you ________ a lot of money.",
      "correctAnswer": "had",
      "explanation": "Hypothetical possession.",
      "points": 1
    }
  ]};

export const C2_U34_BLOCK7: Exercise = {
  "id": "c2-u34-b7",
  "type": "vocabulary",
  "title": "Block 7: Business Idioms & Expressions",
  "explanation": "Common idioms used in the entrepreneurial world.",
  "questions": [
    {
      "id": "c2-u34-b7-q1",
      "type": "multiple-choice",
      "question": "What does the phrase \"to get a project off the ground\" mean?",
      "options": ["To throw it in the air", "To start a project and make it successful", "To finish a project", "To fail a project"],
      "correctAnswer": "To start a project and make it successful",
      "explanation": "Example: 'We need more funding to get this project off the ground'.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q2",
      "type": "fill-blank",
      "question": "He decided to ________ (strike) out on his own.",
      "correctAnswer": "strike",
      "explanation": "'Strike out on one's own' means to start doing something independently, especially starting a business.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'to keep one's head above water'?",
      "options": ["To go swimming", "To manage to survive financially in a difficult situation", "To be very tall", "To be a good leader"],
      "correctAnswer": "To manage to survive financially in a difficult situation",
      "explanation": "Commonly used for startups in their early stages.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q4",
      "type": "fill-blank",
      "question": "We need to stay ahead of the ________ (curve).",
      "correctAnswer": "curve",
      "explanation": "'Stay ahead of the curve' means to be more advanced or successful than others.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'to think big' mean?",
      "options": ["To have a large head", "To have ambitious plans or ideas", "To be very smart", "To think about elephants"],
      "correctAnswer": "To have ambitious plans or ideas",
      "explanation": "Essential for successful entrepreneurs.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q6",
      "type": "fill-blank",
      "question": "The deal was a real ________ (game) changer.",
      "correctAnswer": "game",
      "explanation": "A 'game changer' is a person, idea, or event that completely changes the way a situation develops.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'to touch base'?",
      "options": ["To play baseball", "To briefly make contact with someone", "To land an airplane", "To be grounded"],
      "correctAnswer": "To briefly make contact with someone",
      "explanation": "Common business jargon.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q8",
      "type": "fill-blank",
      "question": "He's a ________ (cut) above the rest.",
      "correctAnswer": "cut",
      "explanation": "A 'cut above' means noticeably superior to others.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q9",
      "type": "multiple-choice",
      "question": "What does 'to go the extra mile' mean?",
      "options": ["To run a marathon", "To do more than what is expected of you", "To drive a long way", "To be tired"],
      "correctAnswer": "To do more than what is expected of you",
      "explanation": "Good for customer service and startup culture.",
      "points": 1
    },
    {
      "id": "c2-u34-b7-q10",
      "type": "fill-blank",
      "question": "We need to get our ________ (act) together.",
      "correctAnswer": "act",
      "explanation": "'Get one's act together' means to organize one's activities so as to be more effective.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK8: Exercise = {
  "id": "c2-u34-b8",
  "type": "reading",
  "title": "Block 8: The Lean Startup",
  "explanation": "Analyze a text about Eric Ries's methodology for developing businesses and products.",
  "questions": [
    {
      "id": "c2-u34-b8-q1",
      "type": "multiple-choice",
      "question": "What is an 'MVP' in the Lean Startup methodology?",
      "options": ["Most Valuable Player", "Minimum Viable Product", "Main Version Prototype", "Market Value Price"],
      "correctAnswer": "Minimum Viable Product",
      "explanation": "An MVP is a version of a new product which allows a team to collect the maximum amount of validated learning about customers with the least effort.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q2",
      "type": "fill-blank",
      "question": "The goal is to ________ (valid) learning.",
      "correctAnswer": "validate",
      "explanation": "Validated learning is a process in which one learns by trying out an initial idea and then measuring it to substantiate the effect.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q3",
      "type": "multiple-choice",
      "question": "What is 'pivoting'?",
      "options": ["Turning around", "A structured course correction designed to test a new fundamental hypothesis", "Giving up", "A type of accounting"],
      "correctAnswer": "A structured course correction designed to test a new fundamental hypothesis",
      "explanation": "Pivoting is a core concept in the Lean Startup.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q4",
      "type": "fill-blank",
      "question": "We must avoid ________ (vanity) metrics.",
      "correctAnswer": "vanity",
      "explanation": "Vanity metrics make you look good but don't help you make decisions (e.g., number of downloads vs. active users).",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q5",
      "type": "multiple-choice",
      "question": "What is the 'Build-Measure-Learn' loop?",
      "options": ["A type of physical exercise", "A feedback loop that is the core of the Lean Startup model", "A construction project", "A school curriculum"],
      "correctAnswer": "A feedback loop that is the core of the Lean Startup model",
      "explanation": "Startups should go through this loop as quickly as possible.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q6",
      "type": "fill-blank",
      "question": "The ________ (agile) methodology is often used with Lean.",
      "correctAnswer": "agile",
      "explanation": "Agile software development emphasizes iterative development and customer feedback.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q7",
      "type": "multiple-choice",
      "question": "What is 'continuous deployment'?",
      "options": ["Moving house frequently", "A software engineering approach in which software functionalities are delivered frequently through automated deployments", "Working 24/7", "A type of insurance"],
      "correctAnswer": "A software engineering approach in which software functionalities are delivered frequently through automated deployments",
      "explanation": "Allows for rapid testing of new features.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (founder) dilemma is a common issue.",
      "correctAnswer": "founder's",
      "explanation": "Refers to the difficult decisions founders must make about control and equity.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'A/B testing'?",
      "options": ["A type of school test", "A way to compare two versions of a single variable, typically by testing a subject's response to variant A against variant B", "Testing from A to B", "A music exam"],
      "correctAnswer": "A way to compare two versions of a single variable, typically by testing a subject's response to variant A against variant B",
      "explanation": "Commonly used to optimize websites and apps.",
      "points": 1
    },
    {
      "id": "c2-u34-b8-q10",
      "type": "fill-blank",
      "question": "We need to achieve ________ (product) market fit.",
      "correctAnswer": "product-market",
      "explanation": "Product-market fit means being in a good market with a product that can satisfy that market.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK9: Exercise = {
  "id": "c2-u34-b9",
  "type": "vocabulary",
  "title": "Block 9: Entrepreneurship Synthesis",
  "explanation": "Review of the unit's key vocabulary.",
  "questions": [
    {
      "id": "c2-u34-b9-q1",
      "type": "multiple-choice",
      "question": "What is a 'venture capitalist'?",
      "options": ["Startup investor", "Banker", "Agent", "Manager"],
      "correctAnswer": "Startup investor",
      "explanation": "Core concept review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q2",
      "type": "fill-blank",
      "question": "A startup valued at $1B: ________.",
      "correctAnswer": "unicorn",
      "explanation": "Business term review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'bootstrapping'?",
      "options": ["Self-funding", "Borrowing", "Investing", "Marketing"],
      "correctAnswer": "Self-funding",
      "explanation": "Core concept review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q4",
      "type": "fill-blank",
      "question": "To change direction: ________.",
      "correctAnswer": "pivot",
      "explanation": "Business term review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'MVP'?",
      "options": ["Min Viable Product", "Most Val Player", "Main Version", "Market Price"],
      "correctAnswer": "Min Viable Product",
      "explanation": "Lean startup review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q6",
      "type": "fill-blank",
      "question": "Game ________.",
      "correctAnswer": "changer",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'R&D'?",
      "options": ["Research & Dev", "Rest & Dev", "Real & Dig", "Road & Drive"],
      "correctAnswer": "Research & Dev",
      "explanation": "Innovation review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q8",
      "type": "fill-blank",
      "question": "Stay ahead of the ________.",
      "correctAnswer": "curve",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'scalability'?",
      "options": ["Capacity to grow", "Climbing", "Weight", "Skin"],
      "correctAnswer": "Capacity to grow",
      "explanation": "Business term review.",
      "points": 1
    },
    {
      "id": "c2-u34-b9-q10",
      "type": "fill-blank",
      "question": "Blue ________ strategy.",
      "correctAnswer": "ocean",
      "explanation": "Marketing review.",
      "points": 1
    }
  ]
};

export const C2_U34_BLOCK10: Exercise = {
  "id": "c2-u34-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 34 Final Review",
  "explanation": "Final wrap-up of hypothetical situations and entrepreneurial terminology.",
  "questions": [
    {
      "id": "c2-u34-b10-q1",
      "type": "multiple-choice",
      "question": "Identify the hypothetical structure.",
      "options": ["Suppose we win.", "Suppose we won.", "Suppose we will win.", "Suppose we winned."],
      "correctAnswer": "Suppose we won.",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q2",
      "type": "fill-blank",
      "question": "It's time you ________ (take) a break.",
      "correctAnswer": "took",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'disruptive innovation'?",
      "options": ["Market changer", "Loud innovation", "Repair", "Fast work"],
      "correctAnswer": "Market changer",
      "explanation": "Core topic review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q4",
      "type": "fill-blank",
      "question": "Think ________.",
      "correctAnswer": "big",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q5",
      "type": "key-word-transformation",
      "question": "What would have happened if we hadn't met? (SUPPOSE)\n\n________ met? __________",
      "sentence": "What would have happened if we hadn't met?",
      "keyWord": "SUPPOSE",
      "startOfAnswer": "________ met?",
      "correctAnswer": "Suppose we hadn't",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q6",
      "type": "multiple-choice",
      "question": "Which of the following terms most accurately describes the concept of possessing something legally or morally?",
      "options": ["Ownership", "Equality", "Loan", "Account"],
      "correctAnswer": "Ownership",
      "explanation": "Core topic review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q7",
      "type": "fill-blank",
      "question": "Go the extra ________.",
      "correctAnswer": "mile",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q8",
      "type": "key-word-transformation",
      "question": "You really should apologize. (TIME)\n\nIt's ________ apologized. __________",
      "sentence": "You really should apologize.",
      "keyWord": "TIME",
      "startOfAnswer": "It's ________ apologized.",
      "correctAnswer": "time you",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q9",
      "type": "multiple-choice",
      "question": "What is an 'incubator'?",
      "options": ["Startup resource", "Heater", "Hospital bed", "Bird nest"],
      "correctAnswer": "Startup resource",
      "explanation": "Core topic review.",
      "points": 1
    },
    {
      "id": "c2-u34-b10-q10",
      "type": "fill-blank",
      "question": "Product-market ________.",
      "correctAnswer": "fit",
      "explanation": "Lean startup review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_34 = createC2Unit(
  'c2-u34',
  'Entrepreneurship & Innovation',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U34_BLOCK1, C2_U34_BLOCK2, C2_U34_BLOCK3, C2_U34_BLOCK4, C2_U34_BLOCK5,
    C2_U34_BLOCK6, C2_U34_BLOCK7, C2_U34_BLOCK8, C2_U34_BLOCK9, C2_U34_BLOCK10
  ]
);
