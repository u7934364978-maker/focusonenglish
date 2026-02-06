import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 1;
const LEVEL = 'b1';

// ============================================
// BLOCK 1: READING - VOCABULARY IN CONTEXT
// ============================================
export const B1_W1_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: 'vocabulary',
  title: 'Academic Vocabulary: Campus Life',
  explanation: 'Identify the meaning of words commonly used in university settings.',
  questions: Array.from({ length: 5 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 'b1', i + 1),
    type: 'multiple-choice',
    question: [
      'The "syllabus" is a document that contains:',
      'If a course is "mandatory", it means:',
      'A "prerequisite" is a course that:',
      'To "enroll" in a class means to:',
      'An "assignment" is another word for:'
    ][i],
    options: [
      ['The outline of a course', 'A list of library books', 'The campus map'],
      ['It is optional', 'It is required', 'It is free'],
      ['Must be taken after', 'Must be taken before', 'Is taken at the same time'],
      ['Officialy register', 'Attend as a guest', 'Drop the class'],
      ['Homework or project', 'Final exam', 'Presentation']
    ][i],
    correctAnswer: [
      'The outline of a course',
      'It is required',
      'Must be taken before',
      'Officialy register',
      'Homework or project'
    ][i],
    explanation: 'Basic academic terminology for the TOEFL iBT.',
    points: 1
  }))
};

// ============================================
// BLOCK 2: LISTENING - CONVERSATION (CAMPUS)
// ============================================
export const B1_W1_BLOCK2: any = {
  id: genId(LEVEL, UNIT_ID, 'b2', 0),
  type: 'listening',
  title: 'Listening: Meeting a Counselor',
  explanation: 'Listen to a student talking to an academic counselor.',
  transcript: 'Student: Hi, I am interested in enrolling in the Advanced Chemistry course. Counselor: I see. Have you completed the introductory course? It is a prerequisite.',
  questions: Array.from({ length: 5 }, (_, i) => ({
    id: genId(LEVEL, UNIT_ID, 'b2', i + 1),
    type: 'multiple-choice',
    question: [
      'What does the student want to do?',
      'What is the counselor\'s main concern?',
      'The word "prerequisite" implies the student must have:',
      'What will the student probably do next?',
      'How does the counselor sound?'
    ][i],
    options: [
      ['Register for a class', 'Drop a course', 'Find a library'],
      ['The student\'s grades', 'A missing prerequisite', 'The course cost'],
      ['Taken Intro Chemistry', 'Bought the book', 'Met the teacher'],
      ['Take the intro course', 'Leave the campus', 'Register anyway'],
      ['Helpful', 'Angry', 'Bored']
    ][i],
    correctAnswer: [
      'Register for a class',
      'A missing prerequisite',
      'Taken Intro Chemistry',
      'Take the intro course',
      'Helpful'
    ][i],
    explanation: 'Understanding purpose and details in campus conversations.',
    points: 1
  }))
};

export const B1_WEEK_1 = createToeflUnit(
  'toefl-b1-w1',
  'Week 1: Introduction to Academic Life',
  'Learn the basics of campus vocabulary and simple academic interactions.',
  ['Identify key campus vocabulary', 'Understand basic conversation purposes', 'Identify requirements in academic contexts'],
  [B1_W1_BLOCK1, B1_W1_BLOCK2]
);
