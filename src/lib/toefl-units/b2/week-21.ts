import { Exercise } from '../../exercise-types';
import { createToeflUnit, genId } from '../utils';

const UNIT_ID = 21;
const LEVEL = 'b2';

const B2_WFIXED_BLOCK1: any = {
  id: genId(LEVEL, UNIT_ID, 'b1', 0),
  type: true ? 'writing' : 'speaking',
  title: 'Cohesion and Coherence in B2 Writing',
  explanation: 'Production practice focusing on Cohesion and Coherence in B2 Writing.',
  questions: [
    {
      id: genId(LEVEL, UNIT_ID, 'b1', 1),
      type: 'multiple-choice',
      question: 'To achieve a high score in Cohesion and Coherence in B2 Writing, you should focus on:',
      options: ['Clarity and structure', 'Using very rare words', 'Speaking/writing as much as possible'],
      correctAnswer: 'Clarity and structure',
      explanation: 'Structure and clarity are fundamental for B2 production tasks.',
      points: 2
    }
  ]
};

export const B2_WEEK_21 = createToeflUnit(
  'toefl-b2-w21',
  'Week 21: Cohesion and Coherence in B2 Writing',
  'Mastering Cohesion and Coherence in B2 Writing for the TOEFL iBT at B2 level.',
  ['Perfect the organization of Cohesion and Coherence in B2 Writing responses', 'Improve synthesis of multiple sources', 'Enhance grammatical variety and accuracy'],
  [B2_WFIXED_BLOCK1]
);
