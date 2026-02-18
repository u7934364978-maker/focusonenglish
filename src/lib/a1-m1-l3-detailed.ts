// A1 Module 1 Unit 3: Moods and Questions
// Focus: Adjectives of mood, Verb 'to be' negatives, Yes/No questions, and short answers
// Total: 60 Exercises

import { Exercise } from './exercise-types';

// Helper to create a simple exercise from a question
const createExercise = (id: string, q: any, topic: string): Exercise => ({
  id,
  type: q.type || 'grammar',
  level: 'A1',
  topicName: topic,
  content: {
    title: topic,
    instructions: q.type === 'fill-blank' ? 'Escribe la palabra correcta.' : 'Elige la respuesta correcta.',
    questions: [q]
  }
});

const GRAMMAR_QUESTIONS = [
  // Verb 'to be' Negatives (1-20)
  { id: 'a1-m1-l3-q1', type: 'multiple-choice', question: 'I ___ sad. I am happy!', options: ['[[am not|no soy/estoy]]', '[[is not|no es/está]]', '[[are not|no eres/estás]]'], correctAnswer: 'am not' },
  { id: 'a1-m1-l3-q2', type: 'multiple-choice', question: 'He ___ from France. He is from Spain.', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q3', type: 'multiple-choice', question: 'They ___ at school today.', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q4', type: 'fill-blank', question: 'She ___ my sister. She is my friend.', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q5', type: 'fill-blank', question: 'We ___ from England. We are from the USA.', correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q6', type: 'multiple-choice', question: 'Which contraction is correct for "It is not"?', options: ["[[It isn't|Ello no es]]", "[[It's not|Ello no es]]", "[[Both|Ambos]]"], correctAnswer: 'Both' },
  { id: 'a1-m1-l3-q7', type: 'true-false', question: 'We can say "I aren\'t tired."', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q8', type: 'fill-blank', question: 'You ___ 20 years old. You are 25!', correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q9', type: 'multiple-choice', question: 'The car ___ new. It is old.', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q10', type: 'true-false', question: '"They\'re not" is a correct contraction.', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q11', type: 'fill-blank', question: 'I ___ hungry.', correctAnswer: "am not" },
  { id: 'a1-m1-l3-q12', type: 'multiple-choice', question: 'My parents ___ here.', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no son/están]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q13', type: 'fill-blank', question: 'It ___ hot today. It is cold.', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q14', type: 'multiple-choice', question: 'Which one is correct?', options: ['[[You no are|tú no eres]]', '[[You are not|Tú no eres]]', '[[You am not|tú soy no]]'], correctAnswer: 'You are not' },
  { id: 'a1-m1-l3-q15', type: 'true-false', question: '"He isn\'t" means the same as "He is not".', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q16', type: 'fill-blank', question: 'London ___ in Italy.', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q17', type: 'multiple-choice', question: 'We ___ tired.', options: ['[[am not|no soy/estoy]]', "[[isn't|no es/está]]", "[[aren't|no somos/estamos]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q18', type: 'fill-blank', question: 'I ___ 10 years old. I am 20!', correctAnswer: "am not" },
  { id: 'a1-m1-l3-q19', type: 'true-false', question: 'We use "don\'t" with the verb "to be".', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q20', type: 'multiple-choice', question: 'Choose the correct form:', options: ["[[She's not|Ella no está]]", "[[She isn't|Ella no está]]", "[[Both|Ambas]]"], correctAnswer: 'Both' },

  // Yes/No Questions (21-40)
  { id: 'a1-m1-l3-q21', type: 'multiple-choice', question: '___ you from Spain?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Eres?]]'], correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q22', type: 'multiple-choice', question: '___ he a doctor?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Eres?]]'], correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q23', type: 'fill-blank', question: '___ she your sister?', correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q24', type: 'multiple-choice', question: 'Are they happy? - Yes, they ___.', options: ['[[am|soy]]', '[[is|es]]', '[[are|son]]'], correctAnswer: 'are' },
  { id: 'a1-m1-l3-q25', type: 'multiple-choice', question: 'Is it cold today? - No, it ___.', options: ['[[am not|no soy]]', "[[isn't|no es]]", "[[aren't|no son]]"], correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q26', type: 'fill-blank', question: '___ you and Tom friends?', correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q27', type: 'true-false', question: 'In a question, the subject comes BEFORE the verb.', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q28', type: 'multiple-choice', question: 'Am I late? - No, you ___.', options: ['[[am not|no soy]]', "[[aren't|no eres]]", "[[isn't|no es]]"], correctAnswer: "aren't" },
  { id: 'a1-m1-l3-q29', type: 'fill-blank', question: '___ your name Luis?', correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q30', type: 'true-false', question: 'Affirmative short answers like "Yes, I\'m" are correct.', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q31', type: 'multiple-choice', question: '___ the students ready?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Son?]]'], correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q32', type: 'fill-blank', question: 'Is she from Japan? - No, she ___.', correctAnswer: "isn't" },
  { id: 'a1-m1-l3-q33', type: 'multiple-choice', question: '___ I in room 10?', options: ['[[Am|¿Soy?]]', '[[Is|¿Es?]]', '[[Are|¿Eres?]]'], correctAnswer: 'Am' },
  { id: 'a1-m1-l3-q34', type: 'true-false', question: '"Are you tired?" is a correct question.', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q35', type: 'fill-blank', question: '___ your parents at home?', correctAnswer: 'Are' },
  { id: 'a1-m1-l3-q36', type: 'multiple-choice', question: 'Are you hungry? - No, ___.', options: ["[[I am|yo soy]]", "[[I'm not|yo no soy]]", "[[you aren't|tú no eres]]"], correctAnswer: "I'm not" },
  { id: 'a1-m1-l3-q37', type: 'fill-blank', question: '___ he your teacher?', correctAnswer: 'Is' },
  { id: 'a1-m1-l3-q38', type: 'multiple-choice', question: 'Is Maria 25? - Yes, ___.', options: ["[[he is|él es]]", "[[she is|ella es]]", "[[it is|ello es]]"], correctAnswer: 'she is' },
  { id: 'a1-m1-l3-q39', type: 'true-false', question: 'We can say "Is you from Spain?".', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q40', type: 'fill-blank', question: '___ we ready?', correctAnswer: 'Are' },

  // Practice & Vocabulary (41-55)
  { id: 'a1-m1-l3-q41', type: 'multiple-choice', question: 'I am ___. I want to sleep.', options: ['[[Happy|Feliz]]', '[[Tired|Cansado]]', '[[Angry|Enojado]]'], correctAnswer: 'Tired' },
  { id: 'a1-m1-l3-q42', type: 'multiple-choice', question: 'I am ___. I want a sandwich.', options: ['[[Thirsty|Sediento]]', '[[Hungry|Hambriento]]', '[[Bored|Aburrido]]'], correctAnswer: 'Hungry' },
  { id: 'a1-m1-l3-q43', type: 'fill-blank', question: 'He is not sad. He is ___.', correctAnswer: 'happy' },
  { id: 'a1-m1-l3-q44', type: 'multiple-choice', question: 'She is ___. She has a lot of work.', options: ['[[Busy|Ocupada]]', '[[Lazy|Perezosa]]', '[[Excited|Emocionada]]'], correctAnswer: 'Busy' },
  { id: 'a1-m1-l3-q45', type: 'multiple-choice', question: 'They are ___. It is a surprise!', options: ['[[Scared|Asustados]]', '[[Excited|Emocionados]]', '[[Angry|Enojados]]'], correctAnswer: 'Excited' },
  { id: 'a1-m1-l3-q46', type: 'true-false', question: '"Bored" means you are having a lot of fun.', correctAnswer: 'False' },
  { id: 'a1-m1-l3-q47', type: 'fill-blank', question: 'Are you ___? No, I am fine.', correctAnswer: 'tired' },
  { id: 'a1-m1-l3-q48', type: 'multiple-choice', question: 'He is ___. The train is late.', options: ['[[Happy|Feliz]]', '[[Angry|Enojado]]', '[[Sleepy|Soñoliento]]'], correctAnswer: 'Angry' },
  { id: 'a1-m1-l3-q49', type: 'fill-blank', question: 'She is ___. She wants some water.', correctAnswer: 'thirsty' },
  { id: 'a1-m1-l3-q50', type: 'multiple-choice', question: 'We are ___. There is nothing to do.', options: ['[[Bored|Aburridos]]', '[[Busy|Ocupados]]', '[[Interested|Interesados]]'], correctAnswer: 'Bored' },
  { id: 'a1-m1-l3-q51', type: 'true-false', question: '"Fine" and "Well" mean similar things.', correctAnswer: 'True' },
  { id: 'a1-m1-l3-q52', type: 'multiple-choice', question: 'Are they ___? Yes, they want to go to bed.', options: ['[[Hungry|Hambrientos]]', '[[Tired|Cansados]]', '[[Excited|Emocionados]]'], correctAnswer: 'Tired' },
  { id: 'a1-m1-l3-q53', type: 'fill-blank', question: 'I am not ___. I am happy.', correctAnswer: 'sad' },
  { id: 'a1-m1-l3-q54', type: 'multiple-choice', question: 'Is he ___? Yes, he is looking for his dog.', options: ['[[Worried|Preocupado]]', '[[Happy|Feliz]]', '[[Bored|Aburrido]]'], correctAnswer: 'Worried' },
  { id: 'a1-m1-l3-q55', type: 'true-false', question: '"Nervous" is a feeling.', correctAnswer: 'True' },
];

// Reading Exercises (56-60)
const READING_EXERCISES: Exercise[] = [
  {
    id: 'a1-m1-l3-reading-1',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "Ben: I'm not very well. I'm very tired. Emma: Are you sick? Ben: No, I'm not sick. But I am very busy at work.",
    content: {
      title: 'Reading: Ben is tired',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l3-q56', type: 'multiple-choice', question: 'How is Ben?', options: ['[[Sick|Enfermo]]', '[[Tired|Cansado]]', '[[Happy|Feliz]]'], correctAnswer: 'Tired' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-2',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "Ben: My sister is very happy and excited in her new job. But my parents aren't happy today because the train is late!",
    content: {
      title: 'Reading: Family Moods',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l3-q57', type: 'multiple-choice', question: 'How is Ben\'s sister?', options: ['[[Happy|Feliz]]', '[[Angry|Enojada]]', '[[Tired|Cansada]]'], correctAnswer: 'Happy' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-3',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "Emma: Why are your parents angry? Ben: Because the train is late! Emma: Well, I'm happy because it is Friday!",
    content: {
      title: 'Reading: Why Angry?',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l3-q58', type: 'true-false', question: 'The parents are angry because of the train.', correctAnswer: 'True' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-4',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "Man: I'm very happy. It's a beautiful day. I'm a tourist from Australia. My brother is not happy. He's hungry!",
    content: {
      title: 'Reading: The Tourist',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l3-q59', type: 'multiple-choice', question: 'Where is the man from?', options: ['[[USA|EE.UU.]]', '[[Australia|Australia]]', '[[UK|Reino Unido]]'], correctAnswer: 'Australia' }]
    }
  },
  {
    id: 'a1-m1-l3-reading-5',
    type: 'reading-comprehension',
    level: 'A1',
    topicName: 'Reading',
    transcript: "Brother: I am very hungry! Is there a restaurant near here? Journalist: Yes, there is one in the park. Is it open? Man: Let me see... yes, it is!",
    content: {
      title: 'Reading: Hungry Brother',
      instructions: 'Read and answer.',
      questions: [{ id: 'a1-m1-l3-q60', type: 'true-false', question: 'The restaurant is closed.', correctAnswer: 'False' }]
    }
  }
];

// Flatten grammar questions into individual exercises
const INDIVIDUAL_GRAMMAR_EXERCISES = GRAMMAR_QUESTIONS.map(q => createExercise(q.id, q, 'Moods & Questions'));

export const A1_M1_L3_ALL_EXERCISES: Exercise[] = [
  ...INDIVIDUAL_GRAMMAR_EXERCISES,
  ...READING_EXERCISES
];
