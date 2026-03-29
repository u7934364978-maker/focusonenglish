import { C1_UNIT1_QUESTION_ES } from './c1-unit1-question-es';
import { C1_UNIT2_QUESTION_ES } from './c1-unit2-question-es';
import { C1_UNIT3_QUESTION_ES } from './c1-unit3-question-es';
import { C1_UNIT4_QUESTION_ES } from './c1-unit4-question-es';
import { C1_UNIT5_QUESTION_ES } from './c1-unit5-question-es';
import { C1_UNIT6_QUESTION_ES } from './c1-unit6-question-es';

function c1QuestionEsMapForExercise(exerciseId: string): Record<string, string> | null {
  if (exerciseId.startsWith('c1-u1-')) return C1_UNIT1_QUESTION_ES;
  if (exerciseId.startsWith('c1-u2-')) return C1_UNIT2_QUESTION_ES;
  if (exerciseId.startsWith('c1-u3-')) return C1_UNIT3_QUESTION_ES;
  if (exerciseId.startsWith('c1-u4-')) return C1_UNIT4_QUESTION_ES;
  if (exerciseId.startsWith('c1-u5-')) return C1_UNIT5_QUESTION_ES;
  if (exerciseId.startsWith('c1-u6-')) return C1_UNIT6_QUESTION_ES;
  return null;
}

/** Reading/listening ya llevan [[Text:|Texto:]], roles, etc.; no envolver otra capa [[en|es]]. */
export function shouldSkipC1BilingualQuestionWrap(questionEn: string): boolean {
  return (
    questionEn.includes('[[Text:|Texto:]]') ||
    questionEn.includes('[[Speaker:|') ||
    questionEn.includes('[[Lecturer:|') ||
    questionEn.includes('[[Interviewer:|') ||
    questionEn.includes('[[Coach:|') ||
    questionEn.includes('[[Podcast host:|') ||
    questionEn.includes('[[Therapist:|') ||
    questionEn.includes('[[Debate:|') ||
    questionEn.includes('[[Seminar leader:|') ||
    questionEn.includes('[[Radio:|') ||
    questionEn.includes('[[Workshop:|') ||
    questionEn.includes('[[Lecture:|') ||
    questionEn.includes('[[Clip:|') ||
    questionEn.includes('[[Interview:|') ||
    questionEn.includes('[[Panel:|') ||
    questionEn.includes('[[Talk:|') ||
    questionEn.includes('[[Discussion:|') ||
    questionEn.includes('[[Summary:|')
  );
}

export function applyC1QuestionBilingual(exerciseId: string, questionEn: string): string {
  const map = c1QuestionEsMapForExercise(exerciseId);
  if (!map) return questionEn;
  const es = map[exerciseId];
  if (!es) return questionEn;
  if (shouldSkipC1BilingualQuestionWrap(questionEn)) return questionEn;
  return `[[${questionEn}|${es}]]`;
}
