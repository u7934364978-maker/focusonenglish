/**
 * Unidad 9 — Lección 2: Vocabulario (profesiones y lugares de trabajo)
 * teacher, doctor, engineer, student, waiter, nurse, chef, etc.
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 multiple-choice contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: profesiones y lugares de trabajo';
const TOPIC = 'Jobs & Occupations';

const INSTRUCTIONS_MC = 'Elige la palabra correcta.';
const INSTRUCTIONS_MATCH = 'Relaciona cada profesión con su lugar de trabajo.';
const INSTRUCTIONS_FILL = 'Completa la frase con la profesión correcta.';
const INSTRUCTIONS_CTX = 'Elige la opción correcta para la situación.';

export const UNIT_9_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: multiple-choice ──────────────────────────────────────────────────
  {
    id: 'a1-u9-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Someone|Alguien]] [[who|que]] [[works|trabaja]] [[in|en]] [[a|una]] [[school|escuela]] [[is|es]] ____.',
        options: ['[[teacher|profesor]]', '[[doctor|médico]]', '[[waiter|camarero]]'],
        correctAnswer: 0,
        explanation: 'Teacher = profesor.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Someone|Alguien]] [[who|que]] [[helps|ayuda]] [[sick|enfermas]] [[people|personas]] [[in|en]] [[a|un]] [[hospital|hospital]] [[is|es]] ____.',
        options: ['[[chef|cocinero]]', '[[doctor|médico]]', '[[driver|conductor]]'],
        correctAnswer: 1,
        explanation: 'Doctor = médico.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Un]] ____ [[works|trabaja]] [[in|en]] [[a|un]] [[restaurant|restaurante]] [[kitchen|cocina]].',
        options: ['[[waiter|camarero]]', '[[chef|cocinero]]', '[[nurse|enfermero]]'],
        correctAnswer: 1,
        explanation: 'Chef = cocinero.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[An|Un]] ____ [[drives|conduce]] [[buses|autobuses]] [[or|o]] [[taxis|taxis]].',
        options: ['[[engineer|ingeniero]]', '[[driver|conductor]]', '[[pilot|piloto]]'],
        correctAnswer: 1,
        explanation: 'Driver = conductor.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Un]] ____ [[studies|estudia]] [[at|en]] [[school|el colegio]] [[or|o]] [[university|universidad]].',
        options: ['[[student|estudiante]]', '[[teacher|profesor]]', '[[engineer|ingeniero]]'],
        correctAnswer: 0,
        explanation: 'Student = estudiante.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Una]] ____ [[helps|ayuda]] [[doctors|médicos]] [[in|en]] [[a|un]] [[hospital|hospital]].',
        options: ['[[nurse|enfermera]]', '[[waiter|camarero]]', '[[chef|cocinero]]'],
        correctAnswer: 0,
        explanation: 'Nurse = enfermera.',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: matching ──────────────────────────────────────────────────────
  {
    id: 'a1-u9-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[teacher|profesor]]', right: '[[school|escuela]]' },
        { id: 'p2', left: '[[doctor|médico]]', right: '[[hospital|hospital]]' },
        { id: 'p3', left: '[[chef|cocinero]]', right: '[[restaurant|restaurante]]' },
        { id: 'p4', left: '[[waiter|camarero]]', right: '[[restaurant|restaurante]]' },
        { id: 'p5', left: '[[engineer|ingeniero]]', right: '[[office|oficina]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[nurse|enfermera]]', right: '[[hospital|hospital]]' },
        { id: 'p2', left: '[[driver|conductor]]', right: '[[bus|autobús]]' },
        { id: 'p3', left: '[[student|estudiante]]', right: '[[university|universidad]]' },
        { id: 'p4', left: '[[pilot|piloto]]', right: '[[airport|aeropuerto]]' },
        { id: 'p5', left: '[[teacher|profesor]]', right: '[[school|escuela]]' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: 'Relaciona la profesión en inglés con su traducción.',
      pairs: [
        { id: 'p1', left: '[[engineer|ingeniero]]', right: 'Ingeniero' },
        { id: 'p2', left: '[[waiter|camarero]]', right: 'Camarero' },
        { id: 'p3', left: '[[artist|artista]]', right: 'Artista' },
        { id: 'p4', left: '[[pilot|piloto]]', right: 'Piloto' },
        { id: 'p5', left: '[[doctor|médico]]', right: 'Médico' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[I work in a school|Trabajo en una escuela]]', right: '[[I am a teacher|Soy profesor]]' },
        { id: 'p2', left: '[[I work in a hospital|Trabajo en un hospital]]', right: '[[I am a doctor or nurse|Soy médico o enfermero]]' },
        { id: 'p3', left: '[[I work in a restaurant|Trabajo en un restaurante]]', right: '[[I am a chef or waiter|Soy cocinero o camarero]]' },
        { id: 'p4', left: '[[I study at university|Estudio en la universidad]]', right: '[[I am a student|Soy estudiante]]' },
        { id: 'p5', left: '[[I drive a bus|Conduzco un autobús]]', right: '[[I am a driver|Soy conductor]]' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: fill-blank ───────────────────────────────────────────────────
  {
    id: 'a1-u9-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] [[mother|madre]] [[is|es]] ____ [[teacher|profesora]]. [[She|Ella]] [[works|trabaja]] [[in|en]] [[a|una]] [[school|escuela]].',
        options: ['[[a|una]]', '[[an|una]]', '[[the|la]]'],
        correctAnswer: 'a',
        acceptableAnswers: ['a'],
        explanation: 'A teacher. Ante consonante usamos "a".',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[He|Él]] [[is|es]] ____ [[engineer|ingeniero]]. [[He|Él]] [[works|trabaja]] [[in|en]] [[an|una]] [[office|oficina]].',
        options: ['[[a|un]]', '[[an|un]]', '[[the|el]]'],
        correctAnswer: 'an',
        acceptableAnswers: ['an'],
        explanation: 'An engineer. Ante vocal usamos "an".',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Where|Dónde]] ____ [[does|trabaja]] [[your|tu]] [[sister|hermana]] [[work|trabajar]]? [[She|Ella]] [[works|trabaja]] [[in|en]] [[a|un]] [[hospital|hospital]].',
        options: ['[[do|(auxiliar)]]', '[[does|(auxiliar)]]', '[[is|es]]'],
        correctAnswer: 'does',
        acceptableAnswers: ['does'],
        explanation: 'Where does she work?',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: multiple-choice contexto ──────────────────────────────────────
  {
    id: 'a1-u9-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[Someone|Alguien]] [[asks|pregunta]] [[your|tu]] [[job|trabajo]]. [[You|Tú]] [[say|dices]]: ____.',
        options: ['[[I am a teacher.|Soy profesor.]]', '[[I have a teacher.|Tengo un profesor.]]', '[[I work teacher.|Trabajo profesor.]]'],
        correctAnswer: 0,
        explanation: 'I am a [profession].',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u9-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[want|quieres]] [[to|preguntar]] [[ask|preguntar]] [[where|dónde]] [[someone|alguien]] [[works|trabaja]]. [[You|Tú]] ____.',
        options: ['[[say|dices]] "[[What is your name?|¿Cómo te llamas?]]"', '[[say|dices]] "[[Where do you work?|¿Dónde trabajas?]]"', '[[say|dices]] "[[How old are you?|¿Cuántos años tienes?]]"'],
        correctAnswer: 1,
        explanation: 'Where do you work?',
      }],
    },
    topicName: 'Vocabulary',
  },
];
