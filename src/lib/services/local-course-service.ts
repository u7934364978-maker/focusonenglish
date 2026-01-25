import fs from 'fs';
import path from 'path';
import { Lesson, Exercise } from '../exercise-types';

export const localCourseService = {
  async getProfessionalLesson(
    sector: string,
    level: string,
    trimester: string,
    weekId: string
  ): Promise<Lesson | null> {
    try {
      const baseDir = path.join(process.cwd(), 'src/content/cursos/trabajo', sector, level, trimester, weekId);
      
      const theoryPath = path.join(baseDir, 'theory.json');
      const exercisesPath = path.join(baseDir, 'exercises.json');
      const examPath = path.join(baseDir, 'exam.json');

      let theoryData = null;
      if (fs.existsSync(theoryPath)) {
        theoryData = JSON.parse(fs.readFileSync(theoryPath, 'utf8'));
      }

      let exercisesData = null;
      if (fs.existsSync(exercisesPath)) {
        exercisesData = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
      }

      // Convert local format to Lesson interface
      const lesson: Lesson = {
        id: `${sector}-${level}-${trimester}-${weekId}`,
        title: exercisesData?.title || theoryData?.title || 'Professional Lesson',
        description: exercisesData?.description || '',
        duration: 60, // Default duration
        objectives: [],
        theoryContent: theoryData ? this.formatTheoryToMarkdown(theoryData) : undefined,
        exercises: exercisesData ? this.convertItemsToExercises(exercisesData.items) : []
      };

      return lesson;
    } catch (error) {
      console.error('Error loading local professional lesson:', error);
      return null;
    }
  },

  formatTheoryToMarkdown(theoryData: any): string {
    if (!theoryData.sections) return '';
    return theoryData.sections
      .map((s: any) => `## ${s.title}\n\n${s.content}`)
      .join('\n\n');
  },

  convertItemsToExercises(items: any[]): Exercise[] {
    if (!items) return [];
    return items.map((item: any) => {
      // Basic conversion from local item format to Exercise interface
      if (item.type === 'multipleChoice' || item.type === 'multiple-choice') {
        return {
          id: item.id,
          type: 'grammar',
          title: 'Exercise',
          instructions: 'Choose the correct option.',
          questions: [
            {
              id: item.id + '-q',
              type: 'multiple-choice',
              question: item.prompt,
              options: item.options,
              correctAnswer: Array.isArray(item.options) ? item.options[item.answerIndex] : item.correctAnswer,
              explanation: item.explanation,
              points: 1
            }
          ]
        } as any;
      }
      
      if (item.type === 'readingComprehension') {
        return {
          id: item.id,
          type: 'reading',
          title: 'Reading Comprehension',
          instructions: 'Read the text and answer the question.',
          text: item.text || item.prompt,
          questions: [
            {
              id: item.id + '-q',
              type: 'multiple-choice',
              question: item.question || 'Choose the correct answer based on the text.',
              options: item.options,
              correctAnswer: item.options[item.answerIndex],
              explanation: item.explanation,
              points: 2
            }
          ]
        } as any;
      }

      // Default fallback
      return {
        id: item.id,
        type: 'grammar',
        title: 'Exercise',
        questions: []
      } as any;
    });
  }
};
