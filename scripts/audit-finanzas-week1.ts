
import fs from 'fs';
import path from 'path';
import { localCourseService } from '../src/lib/services/local-course-service';

async function auditFinanzasWeek1() {
  const levels = ['a1', 'a2', 'b1', 'b2', 'c1'];
  const sector = 'finanzas';
  const trimester = 'trimestre1';
  const weekId = 'semana01';
  
  const report: any[] = [];

  for (const level of levels) {
    console.log(`Auditing ${level.toUpperCase()}...`);
    const lesson = await localCourseService.getProfessionalLesson(sector, level, trimester, weekId);
    
    if (!lesson) {
      report.push({ level, status: 'error', message: 'Lesson not found' });
      continue;
    }

    const levelIssues: string[] = [];
    
    if (!lesson.exercises || lesson.exercises.length === 0) {
      levelIssues.push('No exercises found in lesson');
    }

    lesson.exercises.forEach((ex: any, exIdx: number) => {
      const exId = ex.id || `index-${exIdx}`;
      
      // Check for empty questions (fallback indicator)
      if (ex.questions && ex.questions.length === 0 && ex.type !== 'writing' && ex.type !== 'speaking' && ex.type !== 'sentence-reordering' && ex.type !== 'matching') {
        levelIssues.push(`Exercise ${exId} (${ex.type}) has no questions (possible transformation failure)`);
      }

      // Check specific types
      if (ex.type === 'grammar' || ex.type === 'reading' || ex.type === 'listening') {
        ex.questions?.forEach((q: any, qIdx: number) => {
          if (!q.question && q.type !== 'fill-blank') {
            levelIssues.push(`Exercise ${exId}, Question ${qIdx} is missing question text`);
          }
          
          if (q.type === 'multiple-choice') {
            if (!q.options || q.options.length < 2) {
              levelIssues.push(`Exercise ${exId}, Question ${qIdx} has fewer than 2 options`);
            }
            if (!q.correctAnswer) {
              levelIssues.push(`Exercise ${exId}, Question ${qIdx} is missing correctAnswer (normalized from answerIndex)`);
            } else if (q.options && !q.options.includes(q.correctAnswer)) {
              levelIssues.push(`Exercise ${exId}, Question ${qIdx} has correctAnswer "${q.correctAnswer}" which is not in options: ${q.options.join(', ')}`);
            }
          }

          if (q.type === 'fill-blank') {
            if (!q.correctAnswer && (!q.acceptableAnswers || q.acceptableAnswers.length === 0)) {
              levelIssues.push(`Exercise ${exId}, Question ${qIdx} is missing correct/acceptable answers`);
            }
          }
        });
      }

      if (ex.type === 'matching') {
        if (!ex.pairs || ex.pairs.length === 0) {
          levelIssues.push(`Exercise ${exId} (matching) has no pairs`);
        } else {
          ex.pairs.forEach((p: any, pIdx: number) => {
            if (!p.word || !p.correctMatch) {
              levelIssues.push(`Exercise ${exId} (matching), Pair ${pIdx} is missing word or match`);
            }
          });
        }
      }

      if (ex.type === 'sentence-building') {
        if (!ex.challenges || ex.challenges.length === 0) {
          levelIssues.push(`Exercise ${exId} (sentence-building) has no challenges`);
        } else {
          ex.challenges.forEach((c: any, cIdx: number) => {
            if (!c.targetSentence) {
              levelIssues.push(`Exercise ${exId} (sentence-building), Challenge ${cIdx} is missing targetSentence`);
            }
          });
        }
      }
    });

    if (levelIssues.length === 0) {
      report.push({ level, status: 'ok', exercisesCount: lesson.exercises.length });
    } else {
      report.push({ level, status: 'issues', issues: levelIssues, exercisesCount: lesson.exercises.length });
    }
  }

  console.log('\n--- AUDIT REPORT ---');
  report.forEach(r => {
    if (r.status === 'ok') {
      console.log(`✅ ${r.level.toUpperCase()}: ${r.exercisesCount} exercises OK`);
    } else if (r.status === 'error') {
      console.log(`❌ ${r.level.toUpperCase()}: ${r.message}`);
    } else {
      console.log(`⚠️  ${r.level.toUpperCase()}: ${r.issues.length} issues found (${r.exercisesCount} exercises)`);
      r.issues.forEach((issue: string) => console.log(`   - ${issue}`));
    }
  });
}

auditFinanzasWeek1().catch(console.error);
