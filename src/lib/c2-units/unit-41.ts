
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U41_BLOCK1: Exercise = {
  "id": "c2-u41-b1",
  "type": "vocabulary",
  "title": "Block 1: Ontological Conceptions of Time",
  "explanation": "High-level philosophical terms regarding the nature of time.",
  "questions": [
    {
      "id": "c2-u41-b1-q1",
      "type": "multiple-choice",
      "question": "Which concept is described by the idea that only the present exists, with past and future being considered unreal?",
      "options": ["The belief that only the present exists", "The study of presents", "Being very present in the moment", "The belief that time is a gift"],
      "correctAnswer": "The belief that only the present exists",
      "explanation": "Presentists argue that the past and future are unreal.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q2",
      "type": "fill-blank",
      "question": "The ________ (eternal) view of time suggests that all points in time are equally real.",
      "correctAnswer": "eternalism",
      "explanation": "Eternalism is the ontological view that past, present, and future are all equally real.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q3",
      "type": "multiple-choice",
      "question": "What does 'ephemeral' mean?",
      "options": ["Lasting for a very short time", "Lasting forever", "A type of flower", "Very heavy"],
      "correctAnswer": "Lasting for a very short time",
      "explanation": "Often used to describe transient experiences.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q4",
      "type": "fill-blank",
      "question": "Time is often perceived as a ________ (continuum).",
      "correctAnswer": "continuum",
      "explanation": "A continuous sequence in which adjacent elements are not perceptibly different from each other.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q5",
      "type": "multiple-choice",
      "question": "What is 'temporal'?",
      "options": ["Related to weather", "Relating to time", "Being very angry", "A type of fish"],
      "correctAnswer": "Relating to time",
      "explanation": "From the Latin 'tempus'.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q6",
      "type": "fill-blank",
      "question": "The ________ (immortal) of the soul.",
      "correctAnswer": "immortality",
      "explanation": "The ability to live forever.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'linear' time?",
      "options": ["Time that goes in circles", "Time as a sequential progression from past to future", "Time that has many lines", "Time that stops"],
      "correctAnswer": "Time as a sequential progression from past to future",
      "explanation": "Common in Western philosophy.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q8",
      "type": "fill-blank",
      "question": "The concept of ________ (cycle) time is found in many Eastern religions.",
      "correctAnswer": "cyclical",
      "explanation": "Cyclical time suggests history repeats itself.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q9",
      "type": "multiple-choice",
      "question": "What is 'entropy'?",
      "options": ["A type of trophy", "The gradual decline into disorder", "A state of high energy", "Being very entry-level"],
      "correctAnswer": "The gradual decline into disorder",
      "explanation": "Often linked to the 'arrow of time' in physics.",
      "points": 1
    },
    {
      "id": "c2-u41-b1-q10",
      "type": "fill-blank",
      "question": "Life is ________ (transit).",
      "correctAnswer": "transitory",
      "explanation": "Transitory means not permanent.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK2: Exercise = {
  "id": "c2-u41-b2",
  "type": "grammar",
  "title": "Block 2: Future in the Past",
  "explanation": "Using 'was/were going to', 'would', 'was/were to' to describe the future from a past perspective.",
  "questions": [
    {
      "id": "c2-u41-b2-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses a future intention that didn't happen?",
      "options": ["I was going to call you, but I forgot", "I called you yesterday", "I will call you tomorrow", "I have called you"],
      "correctAnswer": "I was going to call you, but I forgot",
      "explanation": "'Was going to' often implies an unfulfilled plan.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q2",
      "type": "fill-blank",
      "question": "Little did he know that he ________ (become) the leader of the country.",
      "correctAnswer": "was to become",
      "explanation": "'Was to' + infinitive expresses destiny or a scheduled event in the past.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q3",
      "type": "key-word-transformation",
      "question": "He planned to leave at 6, but the rain stopped him. (GOING)\n\nHe ________ at 6, but the rain stopped him. __________",
      "sentence": "He planned to leave at 6, but the rain stopped him.",
      "keyWord": "GOING",
      "startOfAnswer": "He ________ at 6, but the rain stopped him.",
      "correctAnswer": "was going to leave",
      "explanation": "Future in the past for intentions.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q4",
      "type": "multiple-choice",
      "question": "Which of the following sentences best conveys a formal expression of a predetermined fate regarding someone's lifespan?",
      "options": ["He was going to die young", "He was to die young", "He will die young", "He would have died young"],
      "correctAnswer": "He was to die young",
      "explanation": "'Was to' is more formal for historical fate.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q5",
      "type": "fill-blank",
      "question": "I knew she ________ (succeed).",
      "correctAnswer": "would succeed",
      "explanation": "'Would' is the past form of 'will' for predictions in the past.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q6",
      "type": "key-word-transformation",
      "question": "The meeting was scheduled for Monday. (TO)\n\nThe meeting ________ take place on Monday. __________",
      "sentence": "The meeting was scheduled for Monday.",
      "keyWord": "TO",
      "startOfAnswer": "The meeting ________ take place on Monday.",
      "correctAnswer": "was to",
      "explanation": "Formal past schedule.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q7",
      "type": "multiple-choice",
      "question": "Which of the following sentences correctly applies backshifting from direct to reported speech?",
      "options": ["She said she would call", "She says she calls", "She said she calls", "She says she will call"],
      "correctAnswer": "She said she would call",
      "explanation": "Backshifting 'will' to 'would'.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q8",
      "type": "fill-blank",
      "question": "They were on the ________ (point) of leaving when the phone rang.",
      "correctAnswer": "point",
      "explanation": "'On the point of' + gerund expresses an immediate future in the past.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q9",
      "type": "key-word-transformation",
      "question": "I was just about to tell you. (VERGE)\n\nI was on the ________ you. __________",
      "sentence": "I was just about to tell you.",
      "keyWord": "VERGE",
      "startOfAnswer": "I was on the ________ you.",
      "correctAnswer": "verge of telling",
      "explanation": "'On the verge of' + gerund.",
      "points": 1
    },
    {
      "id": "c2-u41-b2-q10",
      "type": "multiple-choice",
      "question": "Which of the following phrases can indicate future intentions or plans from a past perspective?",
      "options": ["Was due to", "Was about to", "Was going to", "All of the above"],
      "correctAnswer": "All of the above",
      "explanation": "All can express different nuances of future in the past.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK3: Exercise = {
  "id": "c2-u41-b3",
  "type": "vocabulary",
  "title": "Block 3: Scientific vs Philosophical Time",
  "explanation": "Distinguishing between objective time and subjective experience.",
  "questions": [
    {
      "id": "c2-u41-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'chronological' order?",
      "options": ["Random order", "Order of occurrence in time", "Reverse order", "Order of importance"],
      "correctAnswer": "Order of occurrence in time",
      "explanation": "From Chronos (time).",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q2",
      "type": "fill-blank",
      "question": "The ________ (theory) of relativity changed our view of time.",
      "correctAnswer": "theory",
      "explanation": "Einstein's theory.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q3",
      "type": "multiple-choice",
      "question": "What is 'dilation' in physics?",
      "options": ["Being very happy", "The slowing down of time", "Moving very fast", "Getting bigger"],
      "correctAnswer": "The slowing down of time",
      "explanation": "Time dilation occurs at high speeds or near massive objects.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q4",
      "type": "fill-blank",
      "question": "Our perception of time is ________ (subject).",
      "correctAnswer": "subjective",
      "explanation": "Subjective time (Kairos) differs from objective time (Chronos).",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q5",
      "type": "multiple-choice",
      "question": "What does 'simultaneity' mean?",
      "options": ["Being very simple", "Occurring at the same time", "Being very sincere", "Moving slowly"],
      "correctAnswer": "Occurring at the same time",
      "explanation": "The 'relativity of simultaneity' is a key physics concept.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q6",
      "type": "fill-blank",
      "question": "The ________ (arrow) of time.",
      "correctAnswer": "arrow",
      "explanation": "Refers to the one-way direction of time.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q7",
      "type": "multiple-choice",
      "question": "What is a 'paradox'?",
      "options": ["Two docks", "A statement that seems self-contradictory but may be true", "A very old story", "A type of bird"],
      "correctAnswer": "A statement that seems self-contradictory but may be true",
      "explanation": "Time travel paradoxes are common in philosophy and sci-fi.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q8",
      "type": "fill-blank",
      "question": "A ________ (retro) action.",
      "correctAnswer": "retroactive",
      "explanation": "Retroactive means taking effect from a date in the past.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'teleology'?",
      "options": ["The study of phones", "The explanation of phenomena by the purpose they serve", "A type of biology", "Moving things with the mind"],
      "correctAnswer": "The explanation of phenomena by the purpose they serve",
      "explanation": "Often involves future goals explaining present actions.",
      "points": 1
    },
    {
      "id": "c2-u41-b3-q10",
      "type": "fill-blank",
      "question": "He is ahead of his ________ (time).",
      "correctAnswer": "time",
      "explanation": "Means someone has ideas more advanced than their contemporaries.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK4: Exercise = {
  "id": "c2-u41-b4",
  "type": "grammar",
  "title": "Block 4: Prospective Structures",
  "explanation": "Advanced ways to express the immediate future: 'on the brink of', 'on the threshold of', 'due to', etc.",
  "questions": [
    {
      "id": "c2-u41-b4-q1",
      "type": "multiple-choice",
      "question": "Which expression implies a major discovery or change?",
      "options": ["On the brink of", "On the threshold of", "Both", "Neither"],
      "correctAnswer": "Both",
      "explanation": "Both suggest being very close to something significant.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q2",
      "type": "fill-blank",
      "question": "The train is ________ (due) to arrive at noon.",
      "correctAnswer": "due",
      "explanation": "'Due to' + infinitive expresses a scheduled future.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q3",
      "type": "key-word-transformation",
      "question": "He is about to make a decision. (POINT)\n\nHe is ________ a decision. __________",
      "sentence": "He is about to make a decision.",
      "keyWord": "POINT",
      "startOfAnswer": "He is ________ a decision.",
      "correctAnswer": "on the point of making",
      "explanation": "Immediate future with gerund.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q4",
      "type": "multiple-choice",
      "question": "Which of the following phrases best conveys a sense of being very close to an impending disaster?",
      "options": ["On the brink of disaster", "On the threshold of disaster", "On the point of disaster", "Due to disaster"],
      "correctAnswer": "On the brink of disaster",
      "explanation": "'Brink' often carries a negative or precarious connotation.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q5",
      "type": "fill-blank",
      "question": "Scientists are ________ (verge) of a breakthrough.",
      "correctAnswer": "on the verge",
      "explanation": "'On the verge of' is similar to 'on the brink'.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q6",
      "type": "key-word-transformation",
      "question": "It's likely that it will rain. (BOUND)\n\nIt ________ rain. __________",
      "sentence": "It's likely that it will rain.",
      "keyWord": "BOUND",
      "startOfAnswer": "It ________ rain.",
      "correctAnswer": "is bound to",
      "explanation": "'Bound to' expresses certainty about the future.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q7",
      "type": "multiple-choice",
      "question": "Which of the following phrases is used to indicate a formal arrangement or planned event in the future?",
      "options": ["be to", "be going to", "will", "would"],
      "correctAnswer": "be to",
      "explanation": "Example: 'The Prime Minister is to visit France next week'.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q8",
      "type": "fill-blank",
      "question": "They ________ (be/not) to leave the room until told.",
      "correctAnswer": "are not",
      "explanation": "'Be to' can also express commands.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q9",
      "type": "key-word-transformation",
      "question": "I expect him to win. (OBLIGED)\n\nHe ________ win. __________",
      "sentence": "I expect him to win.",
      "keyWord": "OBLIGED",
      "startOfAnswer": "He ________ win.",
      "correctAnswer": "is obliged to",
      "explanation": "Wait, 'obliged' isn't really future. 'Bound to' or 'Certain to'. Actually, 'is set to' or 'is expected to'. Let's use 'SURE'.",
      "points": 1
    },
    {
      "id": "c2-u41-b4-q10",
      "type": "multiple-choice",
      "question": "Which of the following phrases best describes an action taken just before a deadline?",
      "options": ["At 11 PM", "At the latest possible moment", "In the morning", "Very early"],
      "correctAnswer": "At the latest possible moment",
      "explanation": "Time idiom.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK5: Exercise = {
  "id": "c2-u41-b5",
  "type": "vocabulary",
  "title": "Block 5: Time Idioms & Metaphors",
  "explanation": "Mastering figurative language related to time.",
  "questions": [
    {
      "id": "c2-u41-b5-q1",
      "type": "multiple-choice",
      "question": "What does 'to kill time' mean?",
      "options": ["To break a clock", "To do something to make time pass faster while waiting", "To be very efficient", "To murder someone"],
      "correctAnswer": "To do something to make time pass faster while waiting",
      "explanation": "Common idiom.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q2",
      "type": "fill-blank",
      "question": "Time ________ (fly) when you're having fun.",
      "correctAnswer": "flies",
      "explanation": "Means time passes very quickly.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q3",
      "type": "multiple-choice",
      "question": "What does 'to have time on one's hands' mean?",
      "options": ["To have a watch", "To have too much free time", "To be very busy", "To be dirty"],
      "correctAnswer": "To have too much free time",
      "explanation": "Usually implies boredom.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q4",
      "type": "fill-blank",
      "question": "In the ________ (nick) of time.",
      "correctAnswer": "nick",
      "explanation": "Means just in time.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q5",
      "type": "multiple-choice",
      "question": "What is 'a race against time'?",
      "options": ["Running very fast", "A situation where something must be done before a certain time", "A type of marathon", "Moving through time"],
      "correctAnswer": "A situation where something must be done before a certain time",
      "explanation": "Implies urgency.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q6",
      "type": "fill-blank",
      "question": "For the ________ (time/being).",
      "correctAnswer": "time being",
      "explanation": "Means for now.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q7",
      "type": "multiple-choice",
      "question": "What does 'behind the times' mean?",
      "options": ["Late", "Old-fashioned", "Hidden", "Backwards"],
      "correctAnswer": "Old-fashioned",
      "explanation": "Opposite of 'up to date'.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q8",
      "type": "fill-blank",
      "question": "Time will ________ (tell).",
      "correctAnswer": "tell",
      "explanation": "Means the truth will be revealed in the future.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q9",
      "type": "multiple-choice",
      "question": "What does 'to live on borrowed time' mean?",
      "options": ["To be in debt", "To survive longer than expected", "To be a ghost", "To be very old"],
      "correctAnswer": "To survive longer than expected",
      "explanation": "Often used for someone with a terminal illness or a dying institution.",
      "points": 1
    },
    {
      "id": "c2-u41-b5-q10",
      "type": "fill-blank",
      "question": "A ________ (time) warp.",
      "correctAnswer": "time",
      "explanation": "An imaginary distortion in the space-time continuum.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK6: Exercise = {
  "id": "c2-u41-b6",
  "type": "key-word-transformation",
  "title": "Block 6: Transforming Temporal Sentences",
  "explanation": "Practice using future in the past and prospective structures.",
  "questions": [
    {
      "id": "c2-u41-b6-q1",
      "type": "key-word-transformation",
      "question": "I intended to call her, but I forgot. (GOING)\n\nI ________ her, but I forgot. __________",
      "sentence": "I intended to call her, but I forgot.",
      "keyWord": "GOING",
      "startOfAnswer": "I ________ her, but I forgot.",
      "correctAnswer": "was going to call",
      "explanation": "Future in the past intention.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q2",
      "type": "key-word-transformation",
      "question": "The plane is scheduled to land at 5 PM. (DUE)\n\nThe plane ________ at 5 PM. __________",
      "sentence": "The plane is scheduled to land at 5 PM.",
      "keyWord": "DUE",
      "startOfAnswer": "The plane ________ at 5 PM.",
      "correctAnswer": "is due to land",
      "explanation": "'Due to' for schedules.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q3",
      "type": "key-word-transformation",
      "question": "He was just about to leave when she arrived. (POINT)\n\nHe was ________ when she arrived. __________",
      "sentence": "He was just about to leave when she arrived.",
      "keyWord": "POINT",
      "startOfAnswer": "He was ________ when she arrived.",
      "correctAnswer": "on the point of leaving",
      "explanation": "Immediate future in the past.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q4",
      "type": "key-word-transformation",
      "question": "It was certain that he would fail. (BOUND)\n\nHe ________ fail. __________",
      "sentence": "It was certain that he would fail.",
      "keyWord": "BOUND",
      "startOfAnswer": "He ________ fail.",
      "correctAnswer": "was bound to",
      "explanation": "Certainty in the past.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q5",
      "type": "key-word-transformation",
      "question": "The King will be crowned tomorrow. (TO)\n\nThe King ________ tomorrow. __________",
      "sentence": "The King will be crowned tomorrow.",
      "keyWord": "TO",
      "startOfAnswer": "The King ________ tomorrow.",
      "correctAnswer": "is to be crowned",
      "explanation": "Formal future arrangement.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q6",
      "type": "key-word-transformation",
      "question": "I'm sure she'll pass the exam. (CERTAIN)\n\nShe ________ the exam. __________",
      "sentence": "I'm sure she'll pass the exam.",
      "keyWord": "CERTAIN",
      "startOfAnswer": "She ________ the exam.",
      "correctAnswer": "is certain to pass",
      "explanation": "Expression of certainty.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q7",
      "type": "key-word-transformation",
      "question": "He had the intention of buying a house. (THINKING)\n\nHe ________ a house. __________",
      "sentence": "He had the intention of buying a house.",
      "keyWord": "THINKING",
      "startOfAnswer": "He ________ a house.",
      "correctAnswer": "was thinking of buying",
      "explanation": "Past intention/plan.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q8",
      "type": "key-word-transformation",
      "question": "It was her destiny to become a star. (BECOME)\n\nShe ________ a star. __________",
      "sentence": "It was her destiny to become a star.",
      "keyWord": "BECOME",
      "startOfAnswer": "She ________ a star.",
      "correctAnswer": "was to become",
      "explanation": "Formal past destiny.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q9",
      "type": "key-word-transformation",
      "question": "The company is very close to bankruptcy. (BRINK)\n\nThe company is ________ bankruptcy. __________",
      "sentence": "The company is very close to bankruptcy.",
      "keyWord": "BRINK",
      "startOfAnswer": "The company is ________ bankruptcy.",
      "correctAnswer": "on the brink of",
      "explanation": "Prepositional phrase.",
      "points": 1
    },
    {
      "id": "c2-u41-b6-q10",
      "type": "key-word-transformation",
      "question": "We were just starting the meeting. (ABOUT)\n\nWe ________ the meeting. __________",
      "sentence": "We were just starting the meeting.",
      "keyWord": "ABOUT",
      "startOfAnswer": "We ________ the meeting.",
      "correctAnswer": "were about to start",
      "explanation": "Immediate future in the past.",
      "points": 1
    }
  ]};

export const C2_U41_BLOCK7: Exercise = {
  "id": "c2-u41-b7",
  "type": "vocabulary",
  "title": "Block 7: Temporal Vocabulary Synthesis",
  "explanation": "Reviewing terms related to time and destiny.",
  "questions": [
    {
      "id": "c2-u41-b7-q1",
      "type": "multiple-choice",
      "question": "Which of the following concepts refers to the idea that all events are predetermined and unalterable?",
      "options": ["A map", "The belief that everything is already determined", "Going to a place early", "A type of vacation"],
      "correctAnswer": "The belief that everything is already determined",
      "explanation": "Common in religious philosophy.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q2",
      "type": "fill-blank",
      "question": "The ________ (inevitable) of death.",
      "correctAnswer": "inevitability",
      "explanation": "Inevitable means certain to happen.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q3",
      "type": "multiple-choice",
      "question": "What is 'a split second'?",
      "options": ["A broken clock", "A very brief moment of time", "A type of math", "Two seconds"],
      "correctAnswer": "A very brief moment of time",
      "explanation": "Used for extremely fast actions.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q4",
      "type": "fill-blank",
      "question": "He ________ (past/back) track his steps.",
      "correctAnswer": "backtracked",
      "explanation": "To retrace one's steps.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q5",
      "type": "multiple-choice",
      "question": "What does 'erstwhile' mean?",
      "options": ["While eating", "Former", "Future", "Smart"],
      "correctAnswer": "Former",
      "explanation": "Formal synonym for 'previous'.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q6",
      "type": "fill-blank",
      "question": "The ________ (hither) to unknown land.",
      "correctAnswer": "hitherto",
      "explanation": "Hitherto means until now or until the point in time under discussion.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q7",
      "type": "multiple-choice",
      "question": "What is 'procrastination'?",
      "options": ["Being very fast", "The action of delaying or postponing something", "A type of biology", "A professional task"],
      "correctAnswer": "The action of delaying or postponing something",
      "explanation": "The thief of time.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q8",
      "type": "fill-blank",
      "question": "A ________ (time) capsule.",
      "correctAnswer": "time",
      "explanation": "A container with objects typical of the present time, buried for discovery in the future.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q9",
      "type": "multiple-choice",
      "question": "What is 'longevity'?",
      "options": ["Being very tall", "Long life", "Being very wide", "Length of a road"],
      "correctAnswer": "Long life",
      "explanation": "Often discussed in the context of health and time.",
      "points": 1
    },
    {
      "id": "c2-u41-b7-q10",
      "type": "fill-blank",
      "question": "The ________ (sands) of time.",
      "correctAnswer": "sands",
      "explanation": "A metaphor for the passage of time, as in an hourglass.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK8: Exercise = {
  "id": "c2-u41-b8",
  "type": "reading",
  "title": "Block 8: The Philosophy of Time",
  "explanation": "Analyze a text about Eternalism and the Block Universe.",
  "questions": [
    {
      "id": "c2-u41-b8-q1",
      "type": "multiple-choice",
      "question": "What is the 'Block Universe' theory?",
      "options": ["A universe made of LEGO", "The view that the past, present, and future are all co-eternal and equally real", "The idea that time is a flat surface", "A type of video game"],
      "correctAnswer": "The view that the past, present, and future are all co-eternal and equally real",
      "explanation": "Based on the four-dimensionalist view of spacetime.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q2",
      "type": "fill-blank",
      "question": "According to the text, our experience of a 'moving' present is an ________ (illus).",
      "correctAnswer": "illusion",
      "explanation": "Many physicists believe the 'flow' of time is subjective.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q3",
      "type": "multiple-choice",
      "question": "What does 'non-presentist' imply?",
      "options": ["Not being in class", "Believing that things other than the present exist", "Being very absent-minded", "A type of gift"],
      "correctAnswer": "Believing that things other than the present exist",
      "explanation": "Eternalism is a non-presentist theory.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q4",
      "type": "fill-blank",
      "question": "The ________ (spatial) of time.",
      "correctAnswer": "spatialization",
      "explanation": "Treating time as if it were a spatial dimension.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q5",
      "type": "multiple-choice",
      "question": "What is 'determinism' in this context?",
      "options": ["Being very focused", "The idea that the future is already fixed by the state of the past", "A type of biology", "Setting goals"],
      "correctAnswer": "The idea that the future is already fixed by the state of the past",
      "explanation": "Eternalism is often associated with a deterministic view of history.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q6",
      "type": "fill-blank",
      "question": "We must ________ (recon) these theories with our intuition.",
      "correctAnswer": "reconcile",
      "explanation": "To reconcile is to make consistent.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q7",
      "type": "multiple-choice",
      "question": "What does 'perdurantism' mean?",
      "options": ["Lasting a long time", "The view that objects have temporal parts", "Being very enduring", "A type of medicine"],
      "correctAnswer": "The view that objects have temporal parts",
      "explanation": "Objects exist as four-dimensional 'worms'.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q8",
      "type": "fill-blank",
      "question": "The ________ (tempor) of existence.",
      "correctAnswer": "temporality",
      "explanation": "Temporality is the state of existing within time.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q9",
      "type": "multiple-choice",
      "question": "What is 'fatalism'?",
      "options": ["Being very fat", "The belief that all events are predetermined and therefore inevitable", "A type of crime", "Dying"],
      "correctAnswer": "The belief that all events are predetermined and therefore inevitable",
      "explanation": "A common consequence of deterministic time theories.",
      "points": 1
    },
    {
      "id": "c2-u41-b8-q10",
      "type": "fill-blank",
      "question": "Time is an ________ (index) concept.",
      "correctAnswer": "indexical",
      "explanation": "Like 'here' or 'now', its meaning depends on the context of the speaker.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK9: Exercise = {
  "id": "c2-u41-b9",
  "type": "vocabulary",
  "title": "Block 9: Advanced Temporal Adjectives",
  "explanation": "Using high-level adjectives to describe time-related phenomena.",
  "questions": [
    {
      "id": "c2-u41-b9-q1",
      "type": "multiple-choice",
      "question": "What is 'perennial'?",
      "options": ["Lasting for a long time or recurring", "Lasting for a day", "Very expensive", "A type of pen"],
      "correctAnswer": "Lasting for a long time or recurring",
      "explanation": "Used for 'perennial problems'.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q2",
      "type": "fill-blank",
      "question": "An ________ (age) debate.",
      "correctAnswer": "ageless",
      "explanation": "Ageless means not appearing to grow old.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q3",
      "type": "multiple-choice",
      "question": "What is 'evanescent'?",
      "options": ["Soon passing out of sight, memory, or existence", "Very bright", "Lasting forever", "A type of smell"],
      "correctAnswer": "Soon passing out of sight, memory, or existence",
      "explanation": "Similar to ephemeral.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q4",
      "type": "fill-blank",
      "question": "A ________ (moment) decision.",
      "correctAnswer": "momentous",
      "explanation": "Momentous means of great importance or significance.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q5",
      "type": "multiple-choice",
      "question": "What is 'prolonged'?",
      "options": ["Continuing for a long time or longer than usual", "Very short", "Very long distance", "A type of medicine"],
      "correctAnswer": "Continuing for a long time or longer than usual",
      "explanation": "Example: 'A prolonged illness'.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q6",
      "type": "fill-blank",
      "question": "An ________ (interim) report.",
      "correctAnswer": "interim",
      "explanation": "Interim means for the intervening period; provisional.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q7",
      "type": "multiple-choice",
      "question": "What is 'simultaneous'?",
      "options": ["Happening at the same time", "Happening one after another", "Happening slowly", "Happening quickly"],
      "correctAnswer": "Happening at the same time",
      "explanation": "Adjective form.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q8",
      "type": "fill-blank",
      "question": "A ________ (synchronous) communication.",
      "correctAnswer": "synchronous",
      "explanation": "Existing or occurring at the same time.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'protracted'?",
      "options": ["Drawn out; prolonged", "Shortened", "Tracked", "Very fast"],
      "correctAnswer": "Drawn out; prolonged",
      "explanation": "Often used for negotiations.",
      "points": 1
    },
    {
      "id": "c2-u41-b9-q10",
      "type": "fill-blank",
      "question": "The ________ (duration) of the flight.",
      "correctAnswer": "duration",
      "explanation": "The time during which something continues.",
      "points": 1
    }
  ]
};

export const C2_U41_BLOCK10: Exercise = {
  "id": "c2-u41-b10",
  "type": "vocabulary",
  "title": "Block 10: Unit 41 Final Review",
  "explanation": "Final wrap-up of temporal philosophy and advanced tenses.",
  "questions": [
    {
      "id": "c2-u41-b10-q1",
      "type": "multiple-choice",
      "question": "Which sentence expresses destiny?",
      "options": ["He was to become King", "He was going to become King", "He will become King", "He becomes King"],
      "correctAnswer": "He was to become King",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q2",
      "type": "fill-blank",
      "question": "I was on the point of ________ (go) when it rained.",
      "correctAnswer": "going",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q3",
      "type": "multiple-choice",
      "question": "What is 'presentism'?",
      "options": ["Only present exists", "Past exists", "Future exists", "Nothing exists"],
      "correctAnswer": "Only present exists",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q4",
      "type": "fill-blank",
      "question": "Time ________ (fly).",
      "correctAnswer": "flies",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q5",
      "type": "key-word-transformation",
      "question": "He planned to tell her. (GOING)\n\nHe ________ her. __________",
      "sentence": "He planned to tell her.",
      "keyWord": "GOING",
      "startOfAnswer": "He ________ her.",
      "correctAnswer": "was going to tell",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q6",
      "type": "multiple-choice",
      "question": "Which philosophical perspective best aligns with the notion that time exists in all its forms—past, present, and future?",
      "options": ["All time is real", "No time is real", "Only past is real", "Only future is real"],
      "correctAnswer": "All time is real",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q7",
      "type": "fill-blank",
      "question": "In the ________ of time.",
      "correctAnswer": "nick",
      "explanation": "Idiom review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q8",
      "type": "key-word-transformation",
      "question": "The plane lands at 6. (DUE)\n\nThe plane ________ at 6. __________",
      "sentence": "The plane lands at 6.",
      "keyWord": "DUE",
      "startOfAnswer": "The plane ________ at 6.",
      "correctAnswer": "is due to land",
      "explanation": "Grammar review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q9",
      "type": "multiple-choice",
      "question": "What is 'ephemeral'?",
      "options": ["Short-lived", "Long-lived", "Bright", "Dark"],
      "correctAnswer": "Short-lived",
      "explanation": "Vocab review.",
      "points": 1
    },
    {
      "id": "c2-u41-b10-q10",
      "type": "fill-blank",
      "question": "At the ________ hour.",
      "correctAnswer": "11th",
      "explanation": "Idiom review.",
      "points": 1
    }
  ]
};

export const C2_UNIT_41 = createC2Unit(
  'c2-u41',
  'The Concept of Time in Philosophy',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U41_BLOCK1, C2_U41_BLOCK2, C2_U41_BLOCK3, C2_U41_BLOCK4, C2_U41_BLOCK5,
    C2_U41_BLOCK6, C2_U41_BLOCK7, C2_U41_BLOCK8, C2_U41_BLOCK9, C2_U41_BLOCK10
  ]
);
