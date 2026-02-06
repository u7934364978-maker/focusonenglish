import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 24;
const LEVEL = 'b1';

// SHARDS 1-2: Law & Justice Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'vocabulary',
  title: 'Legal Systems & Principles',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's1', i + 1),
    type: 'multiple-choice',
    question: [
      'What is "jurisdiction"?',
      'The word "legislation" refers to:',
      'What is a "plaintiff"?',
      'A "defendant" is:',
      'What does "due process" mean?',
      'The term "statute" refers to:',
      'What is "litigation"?',
      'An "appeal" is:',
      'What is "arbitration"?',
      'The word "precedent" means:'
    ][i],
    options: [
      ['Official power to make legal decisions and judgments', 'A type of airport', 'A map of a city'],
      ['Laws, considered collectively', 'A type of plant', 'Buying new clothes'],
      ['Person who brings a case against another in a court of law', 'A judge', 'A police officer'],
      ['Individual, company, or institution sued or accused in a court of law', 'A lawyer', 'A witness'],
      ['Fair treatment through the normal judicial system', 'Paying a bill on time', 'Being very fast'],
      ['Written law passed by a legislative body', 'A very tall building', 'A type of bird'],
      ['Process of taking legal action', 'Building a house', 'Going on vacation'],
      ['Apply to a higher court for a reversal of the decision of a lower court', 'A type of fruit', 'A loud noise'],
      ['Use of an arbitrator to settle a dispute', 'Fighting in the street', 'Ignoring a problem'],
      ['Earlier event or action that is regarded as an example or guide', 'A gift', 'A type of weather']
    ][i],
    correctAnswer: [
      'Official power to make legal decisions and judgments', 'Laws, considered collectively', 'Person who brings a case against another in a court of law',
      'Individual, company, or institution sued or accused in a court of law', 'Fair treatment through the normal judicial system', 'Written law passed by a legislative body',
      'Process of taking legal action', 'Apply to a higher court for a reversal of the decision of a lower court', 'Use of an arbitrator to settle a dispute',
      'Earlier event or action that is regarded as an example or guide'
    ][i],
    points: 1
  }))
};

const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'vocabulary',
  title: 'Criminal & Civil Law',
  questions: Array.from({ length: 10 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 's2', i + 1),
    type: 'multiple-choice',
    question: [
      'What is a "felony"?',
      'The word "misdemeanor" refers to:',
      'What is "liability"?',
      'The term "negligence" means:',
      'What is a "contract"?',
      'The word "testimony" refers to:',
      'What is "evidence"?',
      'A "verdict" is:',
      'What is "acquittal"?',
      'The term "rehabilitation" in law means:'
    ][i],
    options: [
      ['Crime, typically involving violence, regarded as more serious than a misdemeanor', 'A type of fruit', 'A funny joke'],
      ['Minor wrongdoing', 'A serious crime', 'A type of bird'],
      ['State of being responsible for something, especially by law', 'Being very strong', 'Having no money'],
      ['Failure to take proper care in doing something', 'Being very careful', 'Helping others'],
      ['Written or spoken agreement that is intended to be enforceable by law', 'A type of car', 'A musical instrument'],
      ['Formal written or spoken statement, especially one given in a court of law', 'A type of food', 'A long walk'],
      ['Available body of facts or information indicating whether a belief is true', 'A type of paint', 'A story in a book'],
      ['Decision on a disputed issue in a civil or criminal case', 'A type of hat', 'A sports score'],
      ['Judgment that a person is not guilty of the crime with which they have been charged', 'Going to jail', 'Paying a fine'],
      ['Action of restoring someone to health or normal life through training and therapy', 'Building a new prison', 'Giving a life sentence']
    ][i],
    correctAnswer: [
      'Crime, typically involving violence, regarded as more serious than a misdemeanor', 'Minor wrongdoing', 'State of being responsible for something, especially by law',
      'Failure to take proper care in doing something', 'Written or spoken agreement that is intended to be enforceable by law', 'Formal written or spoken statement, especially one given in a court of law',
      'Available body of facts or information indicating whether a belief is true', 'Decision on a disputed issue in a civil or criminal case', 'Judgment that a person is not guilty of the crime with which they have been charged',
      'Action of restoring someone to health or normal life through training and therapy'
    ][i],
    points: 1
  }))
};

const s3 = { id: genId(LEVEL, UNIT_ID, 's3', 0), type: 'grammar', title: 'Conditional 2 (Hypothetical Situations)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's3', i+1), type: 'multiple_choice', question: `Question ${i+1}: If I ____ a lawyer, I would help you.`, options: ['were', 'am', 'will be'], correctAnswer: 'were', points: 1 })) };
const s4 = { id: genId(LEVEL, UNIT_ID, 's4', 0), type: 'grammar', title: 'Wishes and Regrets (I wish / If only)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's4', i+1), type: 'multiple_choice', question: `Question ${i+1}: I wish I ____ more about the law before signing.`, options: ['had known', 'know', 'will know'], correctAnswer: 'had known', points: 1 })) };
const s5 = { id: genId(LEVEL, UNIT_ID, 's5', 0), type: 'reading', title: 'Reading: The Magna Carta', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's5', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What did the Magna Carta establish?`, options: ['The principle that everyone is subject to the law', 'The end of the monarchy', 'Free internet for everyone'], correctAnswer: 'The principle that everyone is subject to the law', points: 1 })) };
const s6 = { id: genId(LEVEL, UNIT_ID, 's6', 0), type: 'reading', title: 'Reading: Intellectual Property Rights', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's6', i+1), type: 'multiple_choice', question: `Reading Question ${i+1}: What does a patent protect?`, options: ['Inventions', 'Songs', 'Paintings'], correctAnswer: 'Inventions', points: 1 })) };
const s7 = { id: genId(LEVEL, UNIT_ID, 's7', 0), type: 'listening', title: 'Listening: Courtroom Procedure Overview', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's7', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: Who speaks first in a trial?`, options: ['The prosecution/plaintiff', 'The judge', 'The defendant'], correctAnswer: 'The prosecution/plaintiff', points: 1 })) };
const s8 = { id: genId(LEVEL, UNIT_ID, 's8', 0), type: 'listening', title: 'Listening: Lecture on Environmental Law', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's8', i+1), type: 'multiple_choice', question: `Listening Question ${i+1}: What is the "polluter pays" principle?`, options: ['Those who produce pollution should bear the costs of managing it', 'Polluters get a tax break', 'Pollution is free'], correctAnswer: 'Those who produce pollution should bear the costs of managing it', points: 1 })) };
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Legal Action Verbs (Sue, Accuse, Convict)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Verb Question ${i+1}: Define "Sue".`, options: ['Institute legal proceedings against', 'Help someone', 'Give money to'], correctAnswer: 'Institute legal proceedings against', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Legal Suffixes (-or, -ee, -ive)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Suffix Question ${i+1}: In "Lessor" and "Lessee", who receives the property?`, options: ['Lessee', 'Lessor', 'The lawyer'], correctAnswer: 'Lessee', points: 1 })) };

export const B1_WEEK_24 = createShardedToeflUnit(
  'toefl-b1-w24',
  'Week 24: Law & Justice',
  'Learn the language of the legal system, from core principles to courtroom procedures.',
  ['Master vocabulary for legal systems, criminal and civil law', 'Use Conditional 2 for hypothetical legal scenarios', 'Express wishes and regrets correctly'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
