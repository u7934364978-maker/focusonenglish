import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 30;
const LEVEL = 'b1';

// SHARDS 1-2: Law Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Legal Systems & Courts',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's1', 1),
      type: 'multiple-choice',
      question: 'What is a "court"?',
      options: ['A place where legal trials take place', 'A place to play tennis only', 'A type of school'],
      correctAnswer: 'A place where legal trials take place',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 2),
      type: 'multiple-choice',
      question: 'The term "judge" refers to:',
      options: ['A public official appointed to decide cases in a court of law', 'A person who sells books', 'A type of police officer'],
      correctAnswer: 'A public official appointed to decide cases in a court of law',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 3),
      type: 'multiple-choice',
      question: 'What is a "lawyer"?',
      options: ['A person who practices or studies law', 'A person who writes laws only', 'A person who fixes computers'],
      correctAnswer: 'A person who practices or studies law',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 4),
      type: 'multiple-choice',
      question: 'The word "defendant" refers to:',
      options: ['An individual, company, or institution sued or accused in a court of law', 'The person who starts a lawsuit', 'The judge\'s assistant'],
      correctAnswer: 'An individual, company, or institution sued or accused in a court of law',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 5),
      type: 'multiple-choice',
      question: 'What is a "jury"?',
      options: ['A body of people sworn to give a verdict in a legal case', 'A group of lawyers', 'A type of legal document'],
      correctAnswer: 'A body of people sworn to give a verdict in a legal case',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 6),
      type: 'multiple-choice',
      question: 'The term "witness" refers to:',
      options: ['A person who sees an event, typically a crime or accident, take place', 'A person who is always right', 'A type of judge'],
      correctAnswer: 'A person who sees an event, typically a crime or accident, take place',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 7),
      type: 'multiple-choice',
      question: 'What is a "verdict"?',
      options: ['A decision on a disputed issue in a civil or criminal case', 'A type of evidence', 'A long speech by a lawyer'],
      correctAnswer: 'A decision on a disputed issue in a civil or criminal case',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 8),
      type: 'multiple-choice',
      question: 'The word "sentence" in a legal context means:',
      options: ['The punishment assigned to a defendant found guilty by a court', 'A group of words', 'A type of question'],
      correctAnswer: 'The punishment assigned to a defendant found guilty by a court',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 9),
      type: 'multiple-choice',
      question: 'What is "evidence"?',
      options: ['Information indicating whether a belief or proposition is true or valid', 'A type of secret', 'A story told by a friend'],
      correctAnswer: 'Information indicating whether a belief or proposition is true or valid',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's1', 10),
      type: 'multiple-choice',
      question: 'The term "appeal" refers to:',
      options: ['An application to a higher court for a reversal of the decision of a lower court', 'Being very attractive', 'Asking for more money'],
      correctAnswer: 'An application to a higher court for a reversal of the decision of a lower court',
      points: 1
    }
  ]
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Crime & Punishment',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 's2', 1),
      type: 'multiple-choice',
      question: 'What is a "felony"?',
      options: ['A crime regarded as more serious than a misdemeanor', 'A small mistake', 'A type of legal fee'],
      correctAnswer: 'A crime regarded as more serious than a misdemeanor',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 2),
      type: 'multiple-choice',
      question: 'The word "misdemeanor" refers to:',
      options: ['A minor wrongdoing', 'A very serious crime', 'A type of lawyer'],
      correctAnswer: 'A minor wrongdoing',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 3),
      type: 'multiple-choice',
      question: 'What is "theft"?',
      options: ['The action or crime of stealing', 'Helping someone move', 'Buying something expensive'],
      correctAnswer: 'The action or crime of stealing',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 4),
      type: 'multiple-choice',
      question: 'The term "fraud" refers to:',
      options: ['Deception intended to result in financial or personal gain', 'Being very honest', 'Winning the lottery'],
      correctAnswer: 'Deception intended to result in financial or personal gain',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 5),
      type: 'multiple-choice',
      question: 'What is "assault"?',
      options: ['A physical attack', 'A type of salt', 'A loud noise'],
      correctAnswer: 'A physical attack',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 6),
      type: 'multiple-choice',
      question: 'The word "rehabilitation" in law means:',
      options: ['The action of restoring someone to health or normal life through training after imprisonment', 'Building a new house', 'Buying a new car'],
      correctAnswer: 'The action of restoring someone to health or normal life through training after imprisonment',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 7),
      type: 'multiple-choice',
      question: 'What is a "fine"?',
      options: ['A sum of money exacted as a penalty by a court of law', 'A type of weather', 'Feeling very good'],
      correctAnswer: 'A sum of money exacted as a penalty by a court of law',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 8),
      type: 'multiple-choice',
      question: 'The term "probation" refers to:',
      options: ['The release of an offender from detention, subject to a period of good behavior', 'Going to jail forever', 'A type of surgery'],
      correctAnswer: 'The release of an offender from detention, subject to a period of good behavior',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 9),
      type: 'multiple-choice',
      question: 'What is "parole"?',
      options: ['The release of a prisoner temporarily or permanently before the completion of a sentence', 'A type of parrot', 'A secret password'],
      correctAnswer: 'The release of a prisoner temporarily or permanently before the completion of a sentence',
      points: 1
    },
    {
      id: genId(LEVEL, UNIT_ID, 's2', 10),
      type: 'multiple-choice',
      question: 'The word "prosecute" means:',
      options: ['Institute legal proceedings against a person or organization', 'To help someone escape', 'To write a book about crime'],
      correctAnswer: 'Institute legal proceedings against a person or organization',
      points: 1
    }
  ]
};

const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'grammar',
  title: 'Modal Verbs: Obligation & Prohibition',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's3', i + 1),
    type: 'multiple-choice',
    question: [
      'Citizens ____ obey the law.',
      'You ____ park your car here; it\'s illegal.',
      'We ____ wear a seatbelt when driving.',
      'Students ____ bring their IDs to the exam.',
      'You ____ smoke in the courtroom.',
      'Lawyers ____ maintain client confidentiality.',
      'I ____ finish this report by tomorrow morning.',
      'You ____ use your phone during the trial.',
      'We ____ respect the judge\'s decision.',
      'He ____ pay the fine within 30 days.'
    ][i],
    options: [
      ['must', 'might', 'could'],
      ['mustn\'t', 'shouldn\'t', 'don\'t have to'],
      ['have to', 'can', 'may'],
      ['must', 'should', 'can'],
      ['mustn\'t', 'don\'t have to', 'won\'t'],
      ['must', 'can', 'might'],
      ['have to', 'may', 'could'],
      ['mustn\'t', 'can\'t', 'shouldn\'t'],
      ['must', 'might', 'could'],
      ['has to', 'can', 'may']
    ][i],
    correctAnswer: [
      'must', 'mustn\'t', 'have to', 'must', 'mustn\'t',
      'must', 'have to', 'mustn\'t', 'must', 'has to'
    ][i],
    points: 1
  }))
};

const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'grammar',
  title: 'Modal Verbs: Permission & Advice',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's4', i + 1),
    type: 'multiple-choice',
    question: [
      '____ I ask a question?',
      'You ____ consult a lawyer before signing the contract.',
      'Citizens ____ vote when they turn 18.',
      '____ we leave now?',
      'You ____ be more careful with your personal information.',
      'Students ____ use the library until 9 PM.',
      '____ you help me with this legal document?',
      'You ____ always read the fine print.',
      '____ I have a copy of the verdict?',
      'People ____ follow the safety guidelines.'
    ][i],
    options: [
      ['May', 'Must', 'Should'],
      ['should', 'must', 'can'],
      ['can', 'must', 'should'],
      ['Can', 'Must', 'Should'],
      ['should', 'could', 'might'],
      ['can', 'must', 'should'],
      ['Could', 'Must', 'Should'],
      ['should', 'can', 'may'],
      ['May', 'Must', 'Should'],
      ['should', 'can', 'may']
    ][i],
    correctAnswer: [
      'May', 'should', 'can', 'Can', 'should', 'can', 'Could', 'should', 'May', 'should'
    ][i],
    points: 1
  }))
};

const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'reading',
  title: 'Reading: The Role of the Supreme Court',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's5', i + 1),
    type: 'multiple-choice',
    question: [
      'What is the Supreme Court?',
      'How many justices are usually on the Supreme Court?',
      'What is the primary role of the Supreme Court?',
      'How are Supreme Court justices appointed?',
      'What is "judicial review"?',
      'How long do Supreme Court justices serve?',
      'What kind of cases does the Supreme Court hear?',
      'What is a "precedent" in law?',
      'Who is the Chief Justice?',
      'Why is the Supreme Court important?'
    ][i],
    options: [
      ['The highest court in a country or state', 'A court for small crimes', 'A type of sports court'],
      ['Nine', 'Twelve', 'Fifty'],
      ['To interpret the constitution and laws', 'To write new laws', 'To arrest criminals'],
      ['By the President and confirmed by the Senate', 'By public vote', 'By other judges'],
      ['The power to declare laws unconstitutional', 'Reviewing a judge\'s performance', 'Writing a book about law'],
      ['For life, unless they resign or are impeached', 'Four years', 'Ten years'],
      ['Cases involving constitutional issues or federal law', 'Traffic accidents only', 'Small disputes between neighbors'],
      ['A previous case that is used as an example for future cases', 'A type of law', 'A secret document'],
      ['The head of the Supreme Court', 'The youngest judge', 'The person who cleans the court'],
      ['It ensures that the law is applied fairly and constitutionally', 'It makes the laws', 'It is not important']
    ][i],
    correctAnswer: [
      'The highest court in a country or state', 'Nine', 'To interpret the constitution and laws',
      'By the President and confirmed by the Senate', 'The power to declare laws unconstitutional',
      'For life, unless they resign or are impeached', 'Cases involving constitutional issues or federal law',
      'A previous case that is used as an example for future cases', 'The head of the Supreme Court',
      'It ensures that the law is applied fairly and constitutionally'
    ][i],
    points: 1
  }))
};

const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'reading',
  title: 'Reading: Human Rights & International Law',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's6', i + 1),
    type: 'multiple-choice',
    question: [
      'What are "human rights"?',
      'What is the "Universal Declaration of Human Rights"?',
      'Who adopted the Universal Declaration of Human Rights?',
      'When was it adopted?',
      'What is "international law"?',
      'What is the "United Nations" (UN)?',
      'What is the "International Court of Justice"?',
      'What are some examples of human rights?',
      'How are human rights protected globally?',
      'What is a "treaty"?'
    ][i],
    options: [
      ['Basic rights and freedoms that belong to every person', 'Rights for only some people', 'A type of movie'],
      ['A milestone document in the history of human rights', 'A list of laws for one country', 'A type of science book'],
      ['The United Nations General Assembly', 'The President of the USA', 'A group of students'],
      ['1948', '1918', '2000'],
      ['Rules that govern relations between nations', 'Laws for one city', 'A type of computer program'],
      ['An international organization founded to maintain peace', 'A type of bank', 'A global sports club'],
      ['The principal judicial organ of the United Nations', 'A court in New York only', 'A type of police station'],
      ['Right to life, liberty, and freedom of expression', 'Right to drive a fast car', 'Right to have a big house'],
      ['Through treaties, monitoring, and international organizations', 'By ignoring them', 'By only one country'],
      ['A formally concluded and ratified agreement between countries', 'A type of food', 'A small gift']
    ][i],
    correctAnswer: [
      'Basic rights and freedoms that belong to every person', 'A milestone document in the history of human rights',
      'The United Nations General Assembly', '1948', 'Rules that govern relations between nations',
      'An international organization founded to maintain peace',
      'The principal judicial organ of the United Nations',
      'Right to life, liberty, and freedom of expression',
      'Through treaties, monitoring, and international organizations',
      'A formally concluded and ratified agreement between countries'
    ][i],
    points: 1
  }))
};

const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Listening: Lecture on Criminal Law',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's7', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "criminal law"?',
      'What is the "burden of proof" in a criminal case?',
      'What does "beyond a reasonable doubt" mean?',
      'What is an "indictment"?',
      'What happens during an "arraignment"?',
      'What is a "plea bargain"?',
      'What is the role of a "prosecutor"?',
      'What is the role of a "defense attorney"?',
      'What is "due process"?',
      'What is "double jeopardy"?'
    ][i],
    options: [
      ['Laws that deal with crimes and their punishment', 'Laws about marriage', 'Laws about business only'],
      ['The obligation to prove one\'s assertion', 'A type of exercise', 'Buying a new car'],
      ['The standard of proof required in criminal cases', 'Being slightly sure', 'Thinking someone is guilty'],
      ['A formal charge or accusation of a serious crime', 'A type of gift', 'A secret letter'],
      ['The defendant is called before a court to hear the charges', 'Everyone has dinner', 'The judge goes home'],
      ['An agreement in which the defendant pleads guilty for a lesser charge', 'A type of shopping deal', 'A game played in court'],
      ['A lawyer who conducts the case against a defendant', 'A person who protects the defendant', 'A type of witness'],
      ['A lawyer who represents the defendant', 'A person who helps the prosecutor', 'A judge\'s assistant'],
      ['Fair treatment through the normal judicial system', 'Doing things quickly', 'Ignoring the rules'],
      ['The prosecution of a person twice for the same offense', 'Losing your job', 'A type of game show']
    ][i],
    correctAnswer: [
      'Laws that deal with crimes and their punishment', 'The obligation to prove one\'s assertion',
      'The standard of proof required in criminal cases', 'A formal charge or accusation of a serious crime',
      'The defendant is called before a court to hear the charges',
      'An agreement in which the defendant pleads guilty for a lesser charge',
      'A lawyer who conducts the case against a defendant', 'A lawyer who represents the defendant',
      'Fair treatment through the normal judicial system',
      'The prosecution of a person twice for the same offense'
    ][i],
    points: 1
  }))
};

const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Discussion on Civil Rights',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's8', i + 1),
    type: 'multiple-choice',
    question: [
      'What are "civil rights"?',
      'What was the Civil Rights Movement?',
      'Who was a key leader in the Civil Rights Movement?',
      'What is "segregation"?',
      'What is "discrimination"?',
      'How do civil rights differ from human rights?',
      'What is the "Civil Rights Act of 1964"?',
      'What is "equality"?',
      'How can citizens protect their civil rights?',
      'What is "activism"?'
    ][i],
    options: [
      ['Rights to social and political freedom and equality', 'Rights to build a house', 'Rights to own a car'],
      ['A movement to end racial discrimination', 'A movement to build more roads', 'A type of sports event'],
      ['Martin Luther King Jr.', 'Bill Gates', 'Albert Einstein'],
      ['The action of setting someone apart from others', 'Joining a club', 'Moving to a new city'],
      ['Unjust treatment of different categories of people', 'Being very kind', 'Helping everyone'],
      ['Civil rights are granted by a state; human rights are universal', 'They are exactly the same', 'Human rights are only for adults'],
      ['A landmark civil rights and labor law in the United States', 'A type of school book', 'A new tax law'],
      ['The state of being equal, especially in status, rights, and opportunities', 'Being better than others', 'Having more money'],
      ['Through voting, protest, and legal action', 'By doing nothing', 'By staying at home'],
      ['The policy or action of using vigorous campaigning to bring about social change', 'Being very quiet', 'Studying for an exam']
    ][i],
    correctAnswer: [
      'Rights to social and political freedom and equality', 'A movement to end racial discrimination',
      'Martin Luther King Jr.', 'The action of setting someone apart from others',
      'Unjust treatment of different categories of people',
      'Civil rights are granted by a state; human rights are universal',
      'A landmark civil rights and labor law in the United States',
      'The state of being equal, especially in status, rights, and opportunities',
      'Through voting, protest, and legal action',
      'The policy or action of using vigorous campaigning to bring about social change'
    ][i],
    points: 1
  }))
};

const s9 = {
  id: genId(LEVEL, UNIT_ID, 's9', 0),
  type: 'vocabulary',
  title: 'Legal Professions',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's9', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "solicitor"?',
      'What is a "barrister"?',
      'What is a "notary public"?',
      'What is a "paralegal"?',
      'What is a "bailiff"?',
      'What is a "court reporter"?',
      'What is a "prosecutor"?',
      'What is a "defense lawyer"?',
      'What is a "magistrate"?',
      'What is a "legal secretary"?'
    ][i],
    options: [
      ['A legal practitioner who traditionally deals with most of the legal matters in some jurisdictions', 'A person who sells books', 'A type of police officer'],
      ['A lawyer entitled to practice as an advocate, particularly in higher courts', 'A person who works at a bar', 'A type of judge'],
      ['A person authorized to perform certain legal formalities', 'A famous actor', 'A type of teacher'],
      ['A person trained in legal matters who performs tasks in support of a lawyer', 'A person who is half-legal', 'A law student only'],
      ['An official in a court of law who keeps order', 'A person who cleans the court', 'A type of witness'],
      ['A person who keeps a verbatim record of court proceedings', 'A person who writes for a newspaper', 'A famous author'],
      ['A lawyer who conducts the case against a defendant', 'A person who protects the defendant', 'A type of witness'],
      ['A lawyer who represents the defendant', 'A person who helps the prosecutor', 'A judge\'s assistant'],
      ['A civil officer who administers the law', 'A type of magic', 'A person who builds bridges'],
      ['A person who works in a law office and performs administrative tasks', 'A person who writes laws', 'A judge\'s daughter']
    ][i],
    correctAnswer: [
      'A legal practitioner who traditionally deals with most of the legal matters in some jurisdictions',
      'A lawyer entitled to practice as an advocate, particularly in higher courts',
      'A person authorized to perform certain legal formalities',
      'A person trained in legal matters who performs tasks in support of a lawyer',
      'An official in a court of law who keeps order',
      'A person who keeps a verbatim record of court proceedings',
      'A lawyer who conducts the case against a defendant', 'A lawyer who represents the defendant',
      'A civil officer who administers the law',
      'A person who works in a law office and performs administrative tasks'
    ][i],
    points: 1
  }))
};

const s10 = {
  id: genId(LEVEL, UNIT_ID, 's10', 0),
  type: 'vocabulary',
  title: 'Contracts & Agreements',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's10', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "contract"?',
      'The term "clause" refers to:',
      'What does "terminate" mean in a contract?',
      'What is a "breach of contract"?',
      'The word "liability" means:',
      'What is an "agreement"?',
      'The term "notary" refers to:',
      'What is "signature"?',
      'What is a "lease"?',
      'The word "witness" in a contract means:'
    ][i],
    options: [
      ['A written or spoken agreement that is intended to be enforceable by law', 'A type of story', 'A school assignment'],
      ['A particular and separate article, stipulation, or proviso in a treaty or contract', 'A part of Santa Claus', 'A type of animal'],
      ['To bring to an end', 'To start something new', 'To make it longer'],
      ['An act of breaking the terms of a contract', 'A type of legal fee', 'A successful agreement'],
      ['The state of being responsible for something, especially by law', 'Being very happy', 'A type of asset'],
      ['Harmony or accordance in opinion or feeling', 'A type of argument', 'A long book'],
      ['A person who can certify documents', 'A person who writes books', 'A type of chef'],
      ['A person\'s name written in a distinctive way', 'A type of sign', 'A secret code'],
      ['A contract by which one party conveys land, property, services, etc., to another for a specified time', 'A type of fruit', 'Buying a new car'],
      ['A person who sees the signing of the document', 'A person who reads the contract', 'A person who cleans the office']
    ][i],
    correctAnswer: [
      'A written or spoken agreement that is intended to be enforceable by law',
      'A particular and separate article, stipulation, or proviso in a treaty or contract',
      'To bring to an end', 'An act of breaking the terms of a contract',
      'The state of being responsible for something, especially by law', 'Harmony or accordance in opinion or feeling',
      'A person who can certify documents', 'A person\'s name written in a distinctive way',
      'A contract by which one party conveys land, property, services, etc., to another for a specified time',
      'A person who sees the signing of the document'
    ][i],
    points: 1
  }))
};

export const B1_WEEK_30 = createShardedToeflUnit(
  'toefl-b1-w30',
  'Week 30: Law & Justice',
  'Understand legal systems, crime, human rights, and the language of justice.',
  ['Master legal and justice vocabulary', 'Use Modal Verbs of obligation, permission, and advice correctly', 'Understand legal texts and discussions'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
