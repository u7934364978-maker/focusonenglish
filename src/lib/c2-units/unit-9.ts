
import { Exercise } from '../exercise-types';
import { createC2Unit } from './utils';

export const C2_U9_BLOCK1: Exercise = {
  "id": "c2-u9-b1",
  "type": "vocabulary",
  "title": "Block 1: Legal Terminology",
  "explanation": "Advanced vocabulary related to law, courts, and legal processes.",
  "questions": [
    {
      "id": "c2-u9-b1-q1",
      "type": "multiple-choice",
      "question": "What is the term for a person who brings a case against another in a court of law?",
      "options": ["Defendant", "Plaintiff", "Bailiff", "Solicitor"],
      "correctAnswer": "Plaintiff",
      "explanation": "El 'plaintiff' es el demandante.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q2",
      "type": "fill-blank",
      "question": "The jury reached a ________ of 'not guilty' after hours of deliberation.",
      "correctAnswer": "verdict",
      "explanation": "'Verdict' es el veredicto.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q3",
      "type": "key-word-transformation",
      "question": "He was accused of stealing the documents. (CHARGED)\n\nHe was __________",
      "sentence": "He was accused of stealing the documents.",
      "keyWord": "CHARGED",
      "startOfAnswer": "He was",
      "correctAnswer": "charged with stealing the documents",
      "explanation": "'Charged with' es la forma legal de decir que alguien es acusado formalmente.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q4",
      "type": "multiple-choice",
      "question": "What do we call the formal statement of a witness in a court of law?",
      "options": ["Testimony", "Allegation", "Indictment", "Acquittal"],
      "correctAnswer": "Testimony",
      "explanation": "'Testimony' es el testimonio o declaración.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q5",
      "type": "fill-blank",
      "question": "The judge ________ the case due to a lack of evidence.",
      "correctAnswer": "dismissed",
      "explanation": "'Dismiss a case' es desestimar o archivar un caso.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q6",
      "type": "key-word-transformation",
      "question": "The lawyer said that his client was innocent. (PLEADED)\n\nThe client __________",
      "sentence": "The lawyer said that his client was innocent.",
      "keyWord": "PLEADED",
      "startOfAnswer": "The client",
      "correctAnswer": "pleaded not guilty",
      "explanation": "'Plead not guilty' es declararse no culpable.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q7",
      "type": "multiple-choice",
      "question": "What is 'libel'?",
      "options": ["Physical assault", "Written defamation", "Theft", "Arson"],
      "correctAnswer": "Written defamation",
      "explanation": "'Libel' es difamación por escrito (a diferencia de 'slander', que es oral).",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q8",
      "type": "fill-blank",
      "question": "A person who sees a crime happen is called an ________.",
      "correctAnswer": "eyewitness",
      "explanation": "'Eyewitness' es un testigo ocular.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q9",
      "type": "key-word-transformation",
      "question": "They decided to take the matter to court. (LITIGATION)\n\nThey decided to __________",
      "sentence": "They decided to take the matter to court.",
      "keyWord": "LITIGATION",
      "startOfAnswer": "They decided to",
      "correctAnswer": "resort to litigation",
      "explanation": "'Litigation' es el proceso de pleitear o litigar.",
      "points": 1
    },
    {
      "id": "c2-u9-b1-q10",
      "type": "multiple-choice",
      "question": "What is the role of a 'barrister' in the UK legal system?",
      "options": ["To prepare legal documents", "To represent clients in higher courts", "To arrest criminals", "To manage a prison"],
      "correctAnswer": "To represent clients in higher courts",
      "explanation": "En el Reino Unido, los 'barristers' litigan en los tribunales superiores.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK2: Exercise = {
  "id": "c2-u9-b2",
  "type": "grammar",
  "title": "Block 2: Advanced Passive Structures",
  "explanation": "Mastering complex passive forms, including 'it is said that', 'he is thought to', and causative passives.",
  "questions": [
    {
      "id": "c2-u9-b2-q1",
      "type": "fill-blank",
      "question": "People believe that he is hiding in South America. (Rewrite using Passive) -> He ________ to be hiding in South America.",
      "correctAnswer": "is believed",
      "explanation": "Estructura pasiva personal: sujeto + be + past participle + to-infinitive.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q2",
      "startOfAnswer": "had my hair",
      "keyWord": "CAUSATIVE",
      "sentence": "I had my hair cut by a professional yesterday.",
      "type": "key-word-transformation",
      "question": "I had my hair cut by a professional yesterday. (CAUSATIVE)\n\nhad my hair __________",
      "correctAnswer": "cut",
      "explanation": "Causativa: have + object + past participle.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q3",
      "type": "key-word-transformation",
      "question": "They are reporting that the economy is improving. (REPORTED)\n\nThe economy __________",
      "sentence": "They are reporting that the economy is improving.",
      "keyWord": "REPORTED",
      "startOfAnswer": "The economy",
      "correctAnswer": "is reported to be improving",
      "explanation": "Pasiva personal con 'reported'.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q4",
      "type": "fill-blank",
      "question": "It ________ (expect) that the new law will be passed soon.",
      "correctAnswer": "is expected",
      "explanation": "Pasiva impersonal con 'it'.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q5",
      "type": "multiple-choice",
      "question": "Which sentence is a correct passive of 'Someone has stolen my wallet'?",
      "options": ["My wallet has stolen.", "My wallet has been stolen.", "My wallet was stolen.", "My wallet is being stolen."],
      "correctAnswer": "My wallet has been stolen.",
      "explanation": "Present Perfect Passive: has/have + been + past participle.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q6",
      "type": "fill-blank",
      "question": "He ________ (get / his car / repair) last week.",
      "correctAnswer": "got his car repaired",
      "explanation": "Causativa con 'get' (más informal que 'have').",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q7",
      "type": "key-word-transformation",
      "question": "Everybody knows that she is a great singer. (KNOWN)\n\nShe __________",
      "sentence": "Everybody knows that she is a great singer.",
      "keyWord": "KNOWN",
      "startOfAnswer": "She",
      "correctAnswer": "is known to be a great singer",
      "explanation": "Pasiva personal con 'known'.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q8",
      "startOfAnswer": "must be done",
      "keyWord": "PASSIVE",
      "sentence": "You must do it.",
      "type": "key-word-transformation",
      "question": "You must do it. (PASSIVE)\n\nmust be done __________",
      "correctAnswer": "It must be done.",
      "explanation": "Pasiva con modales: modal + be + past participle.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q9",
      "type": "fill-blank",
      "question": "The suspect ________ (allege) to have committed the crime.",
      "correctAnswer": "is alleged",
      "explanation": "Estructura pasiva personal para alegaciones.",
      "points": 1
    },
    {
      "id": "c2-u9-b2-q10",
      "type": "multiple-choice",
      "question": "Choose the correct form: 'The bridge ________ at the moment.'",
      "options": ["is repaired", "is being repaired", "repairs", "has been repaired"],
      "correctAnswer": "is being repaired",
      "explanation": "Present Continuous Passive.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK3: Exercise = {
  "id": "c2-u9-b3",
  "type": "reading",
  "title": "Block 3: Ethics in the Digital Age",
  "explanation": "Reading comprehension on the ethical implications of AI, privacy, and big data.",
  "questions": [
    {
      "id": "c2-u9-b3-q1",
      "type": "multiple-choice",
      "question": "What is 'algorithmic bias'?",
      "options": ["A computer error", "Systematic and repeatable errors in a computer system that create unfair outcomes", "A fast internet connection", "A new programming language"],
      "correctAnswer": "Systematic and repeatable errors in a computer system that create unfair outcomes",
      "explanation": "El sesgo algorítmico ocurre cuando los sistemas de IA replican prejuicios humanos.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q2",
      "type": "fill-blank",
      "question": "The right to ________ is a fundamental human right that is often challenged online.",
      "correctAnswer": "privacy",
      "explanation": "La privacidad es un derecho clave en la era digital.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q3",
      "type": "multiple-choice",
      "question": "What does 'surveillance capitalism' refer to?",
      "options": ["Selling cameras", "The commodification of personal data for profit", "Government spying", "A type of stock market"],
      "correctAnswer": "The commodification of personal data for profit",
      "explanation": "Término acuñado por Shoshana Zuboff sobre la explotación de datos personales.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q4",
      "type": "fill-blank",
      "question": "Digital ________ refers to the trail of data we leave behind when using the internet.",
      "correctAnswer": "footprint",
      "explanation": "'Digital footprint' es la huella digital.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q5",
      "type": "multiple-choice",
      "question": "The 'Right to be Forgotten' allows individuals to:",
      "options": ["Change their name", "Request the removal of personal data from search engines", "Go off the grid", "Erase their memory"],
      "correctAnswer": "Request the removal of personal data from search engines",
      "explanation": "Derecho legal a que se elimine información obsoleta o irrelevante.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q6",
      "type": "fill-blank",
      "question": "An ethical ________ is a situation in which there is no clear right or wrong answer.",
      "correctAnswer": "dilemma",
      "explanation": "Un dilema ético implica conflicto entre valores.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q7",
      "type": "multiple-choice",
      "question": "What is 'deepfake' technology?",
      "options": ["A type of video game", "AI used to create realistic but fake videos or images", "A secure database", "A high-resolution screen"],
      "correctAnswer": "AI used to create realistic but fake videos or images",
      "explanation": "Los deepfakes plantean graves problemas éticos de desinformación.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q8",
      "type": "fill-blank",
      "question": "Corporate social ________ (CSR) involves companies taking responsibility for their impact on society.",
      "correctAnswer": "responsibility",
      "explanation": "RSC o Responsabilidad Social Corporativa.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q9",
      "type": "multiple-choice",
      "question": "What is 'whistleblowing'?",
      "options": ["Playing a sport", "Reporting illegal or unethical activity within an organization", "Working from home", "Promoting a product"],
      "correctAnswer": "Reporting illegal or unethical activity within an organization",
      "explanation": "Denunciar irregularidades internas.",
      "points": 1
    },
    {
      "id": "c2-u9-b3-q10",
      "type": "fill-blank",
      "question": "The ethical use of AI requires ________ in how algorithms make decisions.",
      "correctAnswer": "transparency",
      "explanation": "La transparencia es vital para la ética en IA.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK4: Exercise = {
  "id": "c2-u9-b4",
  "type": "vocabulary",
  "title": "Block 4: Crime and Punishment",
  "explanation": "Vocabulary for different types of crimes and legal penalties.",
  "questions": [
    {
      "id": "c2-u9-b4-q1",
      "type": "multiple-choice",
      "question": "What is 'embezzlement'?",
      "options": ["Theft of money from an employer", "Breaking into a house", "Kidnapping", "Speeding"],
      "correctAnswer": "Theft of money from an employer",
      "explanation": "'Embezzlement' es malversación de fondos.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q2",
      "type": "fill-blank",
      "question": "The judge gave him a suspended ________, meaning he won't go to jail unless he breaks the law again.",
      "correctAnswer": "sentence",
      "explanation": "'Suspended sentence' es una condena condicional.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q3",
      "type": "key-word-transformation",
      "question": "He was sent to prison for life. (LIFE)\n\nHe received a __________",
      "sentence": "He was sent to prison for life.",
      "keyWord": "LIFE",
      "startOfAnswer": "He received a",
      "correctAnswer": "life sentence",
      "explanation": "Cadena perpetua.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q4",
      "type": "multiple-choice",
      "question": "What do we call a crime that is not very serious?",
      "options": ["Felony", "Misdemeanor", "Treason", "Homicide"],
      "correctAnswer": "Misdemeanor",
      "explanation": "'Misdemeanor' es un delito menor o falta.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q5",
      "type": "fill-blank",
      "question": "He was caught ________ for stealing clothes from the mall.",
      "correctAnswer": "shoplifting",
      "explanation": "'Shoplifting' es hurtar en tiendas.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q6",
      "type": "key-word-transformation",
      "question": "The police are looking into the cause of the fire. (INVESTIGATING)\n\nThe police are __________",
      "sentence": "The police are looking into the cause of the fire.",
      "keyWord": "INVESTIGATING",
      "startOfAnswer": "The police are",
      "correctAnswer": "investigating the cause of the fire",
      "explanation": "Investigando el origen del incendio.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q7",
      "type": "multiple-choice",
      "question": "What is 'perjury'?",
      "options": ["Lying under oath", "Bribery", "Forgery", "Vandalism"],
      "correctAnswer": "Lying under oath",
      "explanation": "'Perjury' es perjurio o falso testimonio.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q8",
      "type": "fill-blank",
      "question": "He was released on ________ after paying a large sum of money.",
      "correctAnswer": "bail",
      "explanation": "'Bail' es fianza.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q9",
      "type": "key-word-transformation",
      "question": "They let him go because there wasn't enough evidence. (RELEASED)\n\nHe was __________",
      "sentence": "They let him go because there wasn't enough evidence.",
      "keyWord": "RELEASED",
      "startOfAnswer": "He was",
      "correctAnswer": "released",
      "explanation": "Puesto en libertad.",
      "points": 1
    },
    {
      "id": "c2-u9-b4-q10",
      "type": "multiple-choice",
      "question": "What is 'capital punishment'?",
      "options": ["A large fine", "The death penalty", "Community service", "House arrest"],
      "correctAnswer": "The death penalty",
      "explanation": "'Capital punishment' es la pena de muerte.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK5: Exercise = {
  "id": "c2-u9-b5",
  "type": "grammar",
  "title": "Block 5: Verbs with two objects in the Passive",
  "explanation": "Transforming sentences with direct and indirect objects into passive forms.",
  "questions": [
    {
      "id": "c2-u9-b5-q1",
      "type": "fill-blank",
      "question": "They gave him a medal. (Passive starting with 'He') -> He ________ a medal.",
      "correctAnswer": "was given",
      "explanation": "Pasiva enfocada en el objeto indirecto (persona).",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q2",
      "startOfAnswer": "was shown",
      "keyWord": "PASSIVE",
      "sentence": "She showed me the room.",
      "type": "key-word-transformation",
      "question": "She showed me the room. (PASSIVE)\n\nwas shown __________",
      "correctAnswer": "",
      "explanation": "Transformación a pasiva del verbo 'show'.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q3",
      "type": "key-word-transformation",
      "question": "The company sent us a letter. (SENT)\n\nWe __________",
      "sentence": "The company sent us a letter.",
      "keyWord": "SENT",
      "startOfAnswer": "We",
      "correctAnswer": "re sent a letter by the company",
      "explanation": "Transformación a pasiva con 'we'.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q4",
      "type": "fill-blank",
      "question": "Someone offered her a job. -> She ________ a job.",
      "correctAnswer": "was offered",
      "explanation": "Pasiva con el verbo 'offer'.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q5",
      "startOfAnswer": "He",
      "keyWord": "PASSIVE",
      "sentence": "They will pay him 5,000.",
      "type": "key-word-transformation",
      "question": "They will pay him 5,000. (PASSIVE)\n\nHe __________",
      "correctAnswer": "will be paid 5,000",
      "explanation": "Transformación a pasiva del verbo 'pay'.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q6",
      "type": "fill-blank",
      "question": "They told us the truth. -> We ________ (tell) the truth.",
      "correctAnswer": "were told",
      "explanation": "Pasiva con 'tell'.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q7",
      "type": "key-word-transformation",
      "question": "My parents bought me a car. (BOUGHT)\n\nA car __________",
      "sentence": "My parents bought me a car.",
      "keyWord": "BOUGHT",
      "startOfAnswer": "A car",
      "correctAnswer": "was bought for me by my parents",
      "explanation": "Cuando el sujeto es el objeto directo (la cosa), usamos 'for' o 'to'.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q8",
      "startOfAnswer": "Give",
      "keyWord": "VERB",
      "sentence": "Which of these verbs usually takes 'to' in the passive when the thing is the subject?",
      "type": "key-word-transformation",
      "question": "Which of these verbs usually takes 'to' in the passive when the thing is the subject? (VERB)\n\nGive __________",
      "correctAnswer": "",
      "explanation": "Se utiliza el 'to' cuando el sujeto es la cosa.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q9",
      "type": "fill-blank",
      "question": "They awarded her the prize. -> The prize ________ (award) to her.",
      "correctAnswer": "was awarded",
      "explanation": "Pasiva enfocada en el objeto directo.",
      "points": 1
    },
    {
      "id": "c2-u9-b5-q10",
      "type": "multiple-choice",
      "question": "In English, is it more common to start the passive with the person or the thing?",
      "options": ["The thing", "The person", "Both are equally common", "Neither"],
      "correctAnswer": "The person",
      "explanation": "Es más natural decir 'I was given' que 'It was given to me'.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK6: Exercise = {
  "id": "c2-u9-b6",
  "type": "vocabulary",
  "title": "Block 6: Idioms and Formal Expressions about Law",
  "explanation": "Common idioms used in legal or formal contexts.",
  "questions": [
    {
      "id": "c2-u9-b6-q1",
      "type": "multiple-choice",
      "question": "What does it mean to 'lay down the law'?",
      "options": ["To write a book", "To state rules firmly and expect them to be followed", "To break the law", "To study law"],
      "correctAnswer": "To state rules firmly and expect them to be followed",
      "explanation": "Poner las cartas sobre la mesa o dictar las normas.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q2",
      "type": "fill-blank",
      "question": "Justice is said to be ________, meaning it should be impartial.",
      "correctAnswer": "blind",
      "explanation": "'Justice is blind' es un dicho común sobre la imparcialidad.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q3",
      "type": "key-word-transformation",
      "question": "He strictly followed the rules. (LETTER)\n\nHe followed the rules to the __________",
      "sentence": "He strictly followed the rules.",
      "keyWord": "LETTER",
      "startOfAnswer": "He followed the rules to the",
      "correctAnswer": "letter",
      "explanation": "'To the letter' significa al pie de la letra.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q4",
      "type": "multiple-choice",
      "question": "If you are 'above the law', you:",
      "options": ["Are a judge", "Think you don't have to follow rules", "Are very tall", "Work in a high court"],
      "correctAnswer": "Think you don't have to follow rules",
      "explanation": "Estar por encima de la ley.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q5",
      "type": "fill-blank",
      "question": "The evidence was thrown ________ of court because it was obtained illegally.",
      "correctAnswer": "out",
      "explanation": "'Throw out of court' es rechazar una prueba o caso.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q6",
      "type": "key-word-transformation",
      "question": "You should obey the law. (ABIDE)\n\nYou should __________",
      "sentence": "You should obey the law.",
      "keyWord": "ABIDE",
      "startOfAnswer": "You should",
      "correctAnswer": "abide by the law",
      "explanation": "'Abide by' es acatar o cumplir.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q7",
      "type": "multiple-choice",
      "question": "What does 'take the law into your own hands' mean?",
      "options": ["To become a lawyer", "To punish someone yourself instead of calling the police", "To write new laws", "To sign a contract"],
      "correctAnswer": "To punish someone yourself instead of calling the police",
      "explanation": "Tomarse la justicia por su mano.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q8",
      "type": "fill-blank",
      "question": "He was caught red-________ while stealing the car.",
      "correctAnswer": "handed",
      "explanation": "'Caught red-handed' es ser pillado con las manos en la masa.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q9",
      "type": "key-word-transformation",
      "question": "The police are looking for him. (LARGE)\n\nHe is still __________",
      "sentence": "The police are looking for him.",
      "keyWord": "LARGE",
      "startOfAnswer": "He is still",
      "correctAnswer": "at large",
      "explanation": "'At large' significa que un criminal sigue libre/fugitivo.",
      "points": 1
    },
    {
      "id": "c2-u9-b6-q10",
      "type": "multiple-choice",
      "question": "What is a 'landmark ruling'?",
      "options": ["A map of a building", "A decision that sets a significant legal precedent", "A fine for littering", "A type of insurance"],
      "correctAnswer": "A decision that sets a significant legal precedent",
      "explanation": "Una sentencia histórica que marca un precedente.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK7: Exercise = {
  "id": "c2-u9-b7",
  "type": "grammar",
  "title": "Block 7: Passive with 'to be seen/heard/felt'",
  "explanation": "Using sensory verbs in the passive with -ing or infinitive.",
  "questions": [
    {
      "id": "c2-u9-b7-q1",
      "type": "fill-blank",
      "question": "I saw him enter the building. -> He was seen ________ (enter) the building.",
      "correctAnswer": "to enter",
      "explanation": "En la pasiva, los verbos de percepción van seguidos de 'to + infinitive'.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q2",
      "startOfAnswer": "singing",
      "keyWord": "SING",
      "sentence": "She was heard singing in the shower.",
      "type": "key-word-transformation",
      "question": "She was heard singing in the shower. (SING)\n\nsinging __________",
      "correctAnswer": "",
      "explanation": "Usamos el gerundio si la acción estaba en curso.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q3",
      "type": "key-word-transformation",
      "question": "Someone noticed him leaving the office early. (NOTICED)\n\nHe __________",
      "sentence": "Someone noticed him leaving the office early.",
      "keyWord": "NOTICED",
      "startOfAnswer": "He",
      "correctAnswer": "was noticed leaving the office early",
      "explanation": "Pasiva con 'notice'.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q4",
      "startOfAnswer": "to shake",
      "keyWord": "SHAKE",
      "sentence": "The earth was felt to shake during the earthquake.",
      "type": "key-word-transformation",
      "question": "The earth was felt to shake during the earthquake. (SHAKE)\n\nto shake __________",
      "correctAnswer": "",
      "explanation": "Sensación física en pasiva.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q5",
      "type": "multiple-choice",
      "question": "In the sentence 'He was made to pay the fine', why is 'to' used?",
      "options": ["Because 'made' is always followed by 'to'", "Because it is a passive structure", "It's a mistake", "Because 'pay' is a noun"],
      "correctAnswer": "Because it is a passive structure",
      "explanation": "Verbos como 'make' pierden el infinitivo sin 'to' en la pasiva.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q6",
      "startOfAnswer": "running",
      "keyWord": "RUN",
      "sentence": "They were seen running away from the scene.",
      "type": "key-word-transformation",
      "question": "They were seen running away from the scene. (RUN)\n\nrunning __________",
      "correctAnswer": "",
      "explanation": "Acción en progreso vista por testigos.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q7",
      "type": "key-word-transformation",
      "question": "I heard the bell ring. (RUNG)\n\nThe bell was heard __________",
      "sentence": "I heard the bell ring.",
      "keyWord": "RUNG",
      "startOfAnswer": "The bell was heard",
      "correctAnswer": "to be rung",
      "explanation": "Forma pasiva del sonido percibido.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q8",
      "type": "multiple-choice",
      "question": "Which sentence is correct?",
      "options": ["He was seen cross the road.", "He was seen to cross the road.", "He was see crossing the road.", "He was seen to crossing the road."],
      "correctAnswer": "He was seen to cross the road.",
      "explanation": "Estructura estándar de percepción en pasiva.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q9",
      "startOfAnswer": "blowing",
      "keyWord": "BLOW",
      "sentence": "The wind could be felt blowing through the cracks.",
      "type": "key-word-transformation",
      "question": "The wind could be felt blowing through the cracks. (BLOW)\n\nblowing __________",
      "correctAnswer": "",
      "explanation": "Acción continua percibida.",
      "points": 1
    },
    {
      "id": "c2-u9-b7-q10",
      "type": "multiple-choice",
      "question": "When we use the -ing form in a sensory passive, it emphasizes:",
      "options": ["The completion of the action", "The duration or progress of the action", "The result of the action", "The cause of the action"],
      "correctAnswer": "The duration or progress of the action",
      "explanation": "El gerundio enfatiza que la acción estaba sucediendo.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK8: Exercise = {
  "id": "c2-u9-b8",
  "type": "vocabulary",
  "title": "Block 8: Ethical Concepts",
  "explanation": "Vocabulary for discussing philosophical and ethical issues.",
  "questions": [
    {
      "id": "c2-u9-b8-q1",
      "type": "multiple-choice",
      "question": "What is 'utilitarianism'?",
      "options": ["The belief that actions are right if they benefit the majority", "The belief that money is the most important thing", "A type of architecture", "A legal system based on tradition"],
      "correctAnswer": "The belief that actions are right if they benefit the majority",
      "explanation": "Utilitarismo: el mayor bien para el mayor número.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q2",
      "type": "fill-blank",
      "question": "An ________ is a person who believes in principles of right and wrong.",
      "correctAnswer": "ethicist",
      "explanation": "Un eticista estudia la moral y la ética.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q3",
      "type": "key-word-transformation",
      "question": "The decision was based on what is morally right. (ETHICAL)\n\nIt was an __________",
      "sentence": "The decision was based on what is morally right.",
      "keyWord": "ETHICAL",
      "startOfAnswer": "It was an",
      "correctAnswer": "ethical decision",
      "explanation": "Adjetivo para decisiones morales.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q4",
      "startOfAnswer": "It refers to",
      "keyWord": "SELFLESSNESS",
      "sentence": "What does 'altruism' mean?",
      "type": "key-word-transformation",
      "question": "What does 'altruism' mean? (SELFLESSNESS)\n\nIt refers to __________",
      "correctAnswer": "disinterested and selfless concern for the well-being of others",
      "explanation": "Altruismo es ayudar a los demás sin buscar beneficio propio.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q5",
      "type": "fill-blank",
      "question": "________ is the quality of being honest and having strong moral principles.",
      "correctAnswer": "Integrity",
      "explanation": "'Integrity' es integridad.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q6",
      "type": "key-word-transformation",
      "question": "He doesn't care about the consequences of his actions. (REGARDLESS)\n\nHe acts __________",
      "sentence": "He doesn't care about the consequences of his actions.",
      "keyWord": "REGARDLESS",
      "startOfAnswer": "He acts",
      "correctAnswer": "regardless of the consequences",
      "explanation": "'Regardless of' es sin importar.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q7",
      "startOfAnswer": "It is a form of",
      "keyWord": "FAVORITISM",
      "sentence": "What is 'nepotism'?",
      "type": "key-word-transformation",
      "question": "What is 'nepotism'? (FAVORITISM)\n\nIt is a form of __________",
      "correctAnswer": "favoritism shown to relatives or friends by those in power",
      "explanation": "Nepotismo es el trato de favor a familiares.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q8",
      "type": "fill-blank",
      "question": "A ________ of interest occurs when a person's private interests conflict with their professional duties.",
      "correctAnswer": "conflict",
      "explanation": "'Conflict of interest' es conflicto de intereses.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q9",
      "type": "key-word-transformation",
      "question": "The experiment was morally unacceptable. (UNETHICAL)\n\nThe experiment was __________",
      "sentence": "The experiment was morally unacceptable.",
      "keyWord": "UNETHICAL",
      "startOfAnswer": "The experiment was",
      "correctAnswer": "unethical",
      "explanation": "Lo opuesto a ético.",
      "points": 1
    },
    {
      "id": "c2-u9-b8-q10",
      "startOfAnswer": "It is the idea that",
      "keyWord": "RELATIVITY",
      "sentence": "What is 'moral relativism'?",
      "type": "key-word-transformation",
      "question": "What is 'moral relativism'? (RELATIVITY)\n\nIt is the idea that __________",
      "correctAnswer": "moral judgments are true or false only relative to some particular standpoint",
      "explanation": "Relativismo moral.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK9: Exercise = {
  "id": "c2-u9-b9",
  "type": "reading",
  "title": "Block 9: International Law and Human Rights",
  "explanation": "Reading about global legal frameworks and universal rights.",
  "questions": [
    {
      "id": "c2-u9-b9-q1",
      "startOfAnswer": "Its main function is",
      "keyWord": "PROSECUTION",
      "sentence": "What is the primary function of the International Criminal Court (ICC)?",
      "type": "key-word-transformation",
      "question": "What is the primary function of the International Criminal Court (ICC)? (PROSECUTION)\n\nIts main function is __________",
      "correctAnswer": "to prosecute individuals for genocide, war crimes, and crimes against humanity",
      "explanation": "La CPI juzga los crímenes más graves a nivel mundial.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q2",
      "type": "fill-blank",
      "question": "The Universal ________ of Human Rights was adopted by the UN in 1948.",
      "correctAnswer": "Declaration",
      "explanation": "Declaración Universal de los Derechos Humanos.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q3",
      "type": "fill-blank",
      "question": "What is 'extradition'? (KEYWORD)\n\n'Extradition' is the formal process where __________.",
      "options": ["Being kicked out of a club", "The formal process where one country transfers a suspected or convicted criminal to another country", "A type of space travel", "Buying property abroad"],
      "correctAnswer": "The formal process where one country transfers a suspected or convicted criminal to another country",
      "explanation": "'Extradition' es la entrega de un criminal a otro país.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q4",
      "type": "fill-blank",
      "question": "Diplomatic ________ protects diplomats from being prosecuted under the host country's laws.",
      "correctAnswer": "immunity",
      "explanation": "Inmunidad diplomática.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q5",
      "type": "fill-blank",
      "question": "What does 'asylum' mean in a legal context? (KEYWORD)\n\n'Asylum' refers to __________.",
      "options": ["A hospital for the mentally ill", "Protection granted by a nation to someone who has left their native country as a political refugee", "A high-security prison", "A type of school"],
      "correctAnswer": "Protection granted by a nation to someone who has left their native country as a political refugee",
      "explanation": "Asilo político.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q6",
      "type": "fill-blank",
      "question": "A ________ is a formal agreement between countries.",
      "correctAnswer": "treaty",
      "explanation": "'Treaty' es un tratado internacional.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q7",
      "type": "fill-blank",
      "question": "What is the Geneva Convention? (KEYWORD)\n\nThe Geneva Convention is a series of __________.",
      "options": ["A car show", "A series of treaties on the treatment of civilians, prisoners of war, and soldiers during wartime", "A meeting about climate change", "A fashion event"],
      "correctAnswer": "A series of treaties on the treatment of civilians, prisoners of war, and soldiers during wartime",
      "explanation": "Los Convenios de Ginebra regulan el derecho humanitario en la guerra.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q8",
      "type": "fill-blank",
      "question": "Sanctions are ________ measures taken by countries against others to force a change in behavior.",
      "correctAnswer": "punitive",
      "explanation": "Las sanciones son medidas punitivas.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q9",
      "type": "multiple-choice",
      "question": "What is 'sovereignty'?",
      "options": ["The authority of a state to govern itself", "Being very rich", "A type of coin", "Having many soldiers"],
      "correctAnswer": "The authority of a state to govern itself",
      "explanation": "Soberanía es el poder de autogobierno de un estado.",
      "points": 1
    },
    {
      "id": "c2-u9-b9-q10",
      "type": "fill-blank",
      "question": "Humanitarian ________ involves providing aid and support to people in need during crises.",
      "correctAnswer": "intervention",
      "explanation": "Intervención humanitaria.",
      "points": 1
    }
  ]
};

export const C2_U9_BLOCK10: Exercise = {
  "id": "c2-u9-b10",
  "type": "grammar",
  "title": "Block 10: Review and Consolidation",
  "explanation": "Final review of legal vocabulary and passive structures.",
  "questions": [
    {
      "id": "c2-u9-b10-q1",
      "type": "fill-blank",
      "question": "Correct the sentence: 'He is said to have escaped from prison last night.' (KEYWORD)\n\nThe correct form is: 'He is said __________.'",
      "options": ["It is correct as it is.", "He is said to escape...", "He is said escaping...", "He said to have escaped..."],
      "correctAnswer": "It is correct as it is.",
      "explanation": "Pasiva personal con infinitivo perfecto para una acción pasada.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q2",
      "type": "fill-blank",
      "question": "I must have my car ________ (service) before the long trip.",
      "correctAnswer": "serviced",
      "explanation": "Estructura causativa.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q3",
      "type": "key-word-transformation",
      "question": "The police caught them while they were spray-painting the wall. (VANDALIZING)\n\nThey were caught __________",
      "sentence": "The police caught them while they were spray-painting the wall.",
      "keyWord": "VANDALIZING",
      "startOfAnswer": "They were caught",
      "correctAnswer": "vandalizing the wall",
      "explanation": "Pasiva de percepción.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q4",
      "type": "fill-blank",
      "question": "The defendant was ________ (acquit) due to lack of proof.",
      "correctAnswer": "acquitted",
      "explanation": "'Acquitted' significa absuelto.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q5",
      "sentence": "Which of these terms describes 'lying under oath'?",
      "startOfAnswer": "Perjury",
      "keyWord": "KEYWORD",
      "type": "key-word-transformation",
      "question": "Which of these terms describes 'lying under oath'? (KEYWORD)\n\nPerjury __________",
      "correctAnswer": "",
      "explanation": "Perjurio.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q6",
      "type": "fill-blank",
      "question": "She was seen ________ (sneak) out of the room.",
      "correctAnswer": "sneaking / to sneak",
      "explanation": "Ambas son posibles, 'sneaking' enfatiza el proceso.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q7",
      "type": "key-word-transformation",
      "question": "They think the hacker is a teenager. (THOUGHT)\n\nThe hacker __________",
      "sentence": "They think the hacker is a teenager.",
      "keyWord": "THOUGHT",
      "startOfAnswer": "The hacker",
      "correctAnswer": "is thought to be a teenager",
      "explanation": "Pasiva personal.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q8",
      "sentence": "What does 'at large' mean?",
      "startOfAnswer": "Free and uncaptured",
      "keyWord": "KEYWORD",
      "type": "key-word-transformation",
      "question": "What does 'at large' mean? (KEYWORD)\n\nFree and uncaptured __________",
      "correctAnswer": "",
      "explanation": "Fugitivo.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q9",
      "type": "fill-blank",
      "question": "I ________ (have / my roof / blow) off during the storm.",
      "correctAnswer": "had my roof blown",
      "explanation": "Estructura causativa usada para infortunios.",
      "points": 1
    },
    {
      "id": "c2-u9-b10-q10",
      "sentence": "Which term describes 'written defamation'?",
      "startOfAnswer": "Libel",
      "keyWord": "KEYWORD",
      "type": "key-word-transformation",
      "question": "Which term describes 'written defamation'? (KEYWORD)\n\nLibel __________",
      "correctAnswer": "",
      "explanation": "Difamación escrita.",
      "points": 1
    }
  ]
};

export const C2_UNIT_9 = createC2Unit(
  'c2-u9',
  'The Legal Landscape & Ethics',
  'Advanced C2 unit exploring complex topics and formal language structures.',
  ['Master advanced vocabulary', 'Apply complex grammatical structures', 'Improve formal writing skills', 'Enhance high-level comprehension'],
  [
    C2_U9_BLOCK1,
    C2_U9_BLOCK2,
    C2_U9_BLOCK3,
    C2_U9_BLOCK4,
    C2_U9_BLOCK5,
    C2_U9_BLOCK6,
    C2_U9_BLOCK7,
    C2_U9_BLOCK8,
    C2_U9_BLOCK9,
    C2_U9_BLOCK10
  ]
);
