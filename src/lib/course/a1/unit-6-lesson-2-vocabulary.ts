/**
 * Unidad 6 — Lección 2: Vocabulario (miembros de la familia)
 * 15 ejercicios: 6 multiple-choice, 4 matching, 3 fill-blank, 2 multiple-choice contexto
 */

import { Exercise } from '@/lib/exercise-generator';

const LESSON_TITLE = 'Vocabulario: miembros de la familia';
const TOPIC = 'Family & Possessives';

const INSTRUCTIONS_MC = 'Elige el miembro de la familia correcto para cada definición o contexto.';
const INSTRUCTIONS_MATCH = 'Relaciona cada palabra o frase en inglés con su significado en español.';
const INSTRUCTIONS_FILL = 'Completa la frase con la palabra correcta.';
const INSTRUCTIONS_CTX = 'Elige la palabra correcta para la situación.';

export const UNIT_6_LESSON_2_VOCABULARY: Exercise[] = [
  // ─── 1–6: multiple-choice (miembro de familia) ───────────────────────────
  {
    id: 'a1-u6-l2-v1',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Who|Quién]] [[is|es]] [[the|la]] [[female|mujer]] [[parent|progenitor]] [[who|que]] [[gave|dio]] [[you|te]] [[birth|nacimiento]]?',
        options: ['[[mother|madre]]', '[[father|padre]]', '[[sister|hermana]]', '[[grandmother|abuela]]'],
        correctAnswer: 0,
        explanation: 'Mother = madre.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v2',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Who|Quién]] [[is|es]] [[the|el]] [[male|varón]] [[parent|progenitor]]?',
        options: ['[[mother|madre]]', '[[father|padre]]', '[[brother|hermano]]', '[[grandfather|abuelo]]'],
        correctAnswer: 1,
        explanation: 'Father = padre.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v3',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[A|Una]] [[female|hembra]] [[sibling|hermana]] [[is|es]] [[your|tu]] ____.',
        options: ['[[brother|hermano]]', '[[sister|hermana]]', '[[cousin|primo]]', '[[aunt|tía]]'],
        correctAnswer: 1,
        explanation: 'Sister = hermana.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v4',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Your|Tu]] [[mother\'s|de tu madre]] [[mother|madre]] [[is|es]] [[your|tu]] ____.',
        options: ['[[grandmother|abuela]]', '[[aunt|tía]]', '[[mother|madre]]', '[[sister|hermana]]'],
        correctAnswer: 0,
        explanation: 'Grandmother = abuela (madre de tu madre o padre).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v5',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[Your|Tu]] [[father\'s|de tu padre]] [[father|padre]] [[is|es]] [[your|tu]] ____.',
        options: ['[[uncle|tío]]', '[[father|padre]]', '[[grandfather|abuelo]]', '[[brother|hermano]]'],
        correctAnswer: 2,
        explanation: 'Grandfather = abuelo.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v6',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MC,
      questions: [{
        question: '[[The|El]] [[child|hijo]] [[of|de]] [[your|tu]] [[aunt|tía]] [[or|o]] [[uncle|tío]] [[is|es]] [[your|tu]] ____.',
        options: ['son', '[[daughter|hija]]', '[[cousin|primo]]', '[[nephew|sobrino]]'],
        correctAnswer: 2,
        explanation: 'Cousin = primo o prima.',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 7–10: matching (left token, right plain Spanish) ─────────────────────
  {
    id: 'a1-u6-l2-v7',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[mother|madre]]', right: 'madre' },
        { id: 'p2', left: '[[father|padre]]', right: 'padre' },
        { id: 'p3', left: '[[sister|hermana]]', right: 'hermana' },
        { id: 'p4', left: '[[brother|hermano]]', right: 'hermano' },
        { id: 'p5', left: '[[grandmother|abuela]]', right: 'abuela' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v8',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[grandfather|abuelo]]', right: 'abuelo' },
        { id: 'p2', left: 'son', right: 'hijo' },
        { id: 'p3', left: '[[daughter|hija]]', right: 'hija' },
        { id: 'p4', left: '[[uncle|tío]]', right: 'tío' },
        { id: 'p5', left: '[[aunt|tía]]', right: 'tía' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v9',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[My mother cooks.|Mi madre cocina.]]', right: 'Mi madre cocina.' },
        { id: 'p2', left: '[[His father works.|Su padre trabaja.]]', right: 'Su padre trabaja.' },
        { id: 'p3', left: '[[Her sister is young.|Su hermana es joven.]]', right: 'Su hermana es joven.' },
        { id: 'p4', left: '[[Our grandmother lives here.|Nuestra abuela vive aquí.]]', right: 'Nuestra abuela vive aquí.' },
        { id: 'p5', left: '[[Their son studies.|Su hijo estudia.]]', right: 'Su hijo estudia.' },
      ],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v10',
    type: 'matching',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_MATCH,
      pairs: [
        { id: 'p1', left: '[[My brother is tall.|Mi hermano es alto.]]', right: 'Mi hermano es alto.' },
        { id: 'p2', left: '[[Your aunt is kind.|Tu tía es amable.]]', right: 'Tu tía es amable.' },
        { id: 'p3', left: '[[His cousin plays football.|Su primo juega al fútbol.]]', right: 'Su primo juega al fútbol.' },
        { id: 'p4', left: '[[Our grandfather is seventy.|Nuestro abuelo tiene setenta.]]', right: 'Nuestro abuelo tiene setenta.' },
        { id: 'p5', left: '[[Their daughter sings.|Su hija canta.]]', right: 'Su hija canta.' },
      ],
    },
    topicName: 'Vocabulary',
  },

  // ─── 11–13: fill-blank ───────────────────────────────────────────────────
  {
    id: 'a1-u6-l2-v11',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[My|Mi]] ____ [[is|es]] [[a|una]] [[teacher|profesora]].',
        options: ['[[mother|madre]]', '[[father|padre]]', '[[brother|hermano]]', '[[grandfather|abuelo]]'],
        correctAnswer: '[[mother|madre]]',
        explanation: 'Mother = madre.',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v12',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[His|Su]] ____ [[works|trabaja]] [[in|en]] [[Madrid|Madrid]].',
        options: ['[[sister|hermana]]', '[[father|padre]]', '[[grandmother|abuela]]', '[[daughter|hija]]'],
        correctAnswer: '[[father|padre]]',
        explanation: 'His father = su padre (de él).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v13',
    type: 'fill-blank',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_FILL,
      questions: [{
        question: '[[Their|Su]] ____ [[is|es]] [[five|cinco]] [[years|años]] [[old|de edad]].',
        options: ['[[uncle|tío]]', '[[aunt|tía]]', 'son', '[[cousin|primo]]'],
        correctAnswer: 'son',
        explanation: 'Son = hijo. Their son = su hijo (de ellos).',
      }],
    },
    topicName: 'Vocabulary',
  },

  // ─── 14–15: multiple-choice contexto ──────────────────────────────────────
  {
    id: 'a1-u6-l2-v14',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[introduce|presentas]] [[the|a]] [[sister|hermana]] [[of|de]] [[your|tu]] [[mother|madre]]. [[She|Ella]] [[is|es]] [[your|tu]] ____.',
        options: ['[[grandmother|abuela]]', '[[aunt|tía]]', '[[cousin|primo]]', '[[sister|hermana]]'],
        correctAnswer: 1,
        explanation: 'La hermana de tu madre es tu tía (aunt).',
      }],
    },
    topicName: 'Vocabulary',
  },
  {
    id: 'a1-u6-l2-v15',
    type: 'multiple-choice',
    level: 'A1',
    topic: TOPIC,
    difficulty: 'easy',
    content: {
      title: LESSON_TITLE,
      instructions: INSTRUCTIONS_CTX,
      questions: [{
        question: '[[You|Tú]] [[talk|hablas]] [[about|de]] [[the|el]] [[child|hijo]] [[of|de]] [[your|tu]] [[uncle|tío]]. [[He|Él]] [[is|es]] [[your|tu]] ____.',
        options: ['son', '[[cousin|primo]]', '[[brother|hermano]]', '[[grandfather|abuelo]]'],
        correctAnswer: 1,
        explanation: 'El hijo de tu tío es tu primo (cousin).',
      }],
    },
    topicName: 'Vocabulary',
  },
];
