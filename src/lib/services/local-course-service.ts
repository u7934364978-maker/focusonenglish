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
      
      if (!fs.existsSync(baseDir)) {
        return null;
      }

      const theoryPath = path.join(baseDir, 'theory.json');
      const exercisesPath = path.join(baseDir, 'exercises.json');

      let theoryData = null;
      if (fs.existsSync(theoryPath)) {
        theoryData = JSON.parse(fs.readFileSync(theoryPath, 'utf8'));
      }

      let exercisesData = null;
      if (fs.existsSync(exercisesPath)) {
        exercisesData = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
      }

      // If neither theory nor exercises exist, return null
      if (!theoryData && !exercisesData) {
        return null;
      }

      // Convert local format to Lesson interface
      const items = Array.isArray(exercisesData) ? exercisesData : (exercisesData?.items || []);
      
      const lesson: Lesson = {
        id: `${sector}-${level}-${trimester}-${weekId}`,
        title: theoryData?.title || exercisesData?.title || 'Professional Lesson',
        description: theoryData?.description || exercisesData?.description || '',
        duration: 60, // Default duration
        objectives: theoryData?.objectives || [],
        audioUrl: theoryData?.audioUrl || exercisesData?.audioUrl,
        videoUrl: theoryData?.videoUrl || exercisesData?.videoUrl,
        theoryContent: theoryData ? this.formatTheoryToMarkdown(theoryData) : undefined,
        exercises: this.convertItemsToExercises(items),
        caseStudies: theoryData?.caseStudies || exercisesData?.caseStudies
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
      const questionText = item.question || item.prompt || '';
      const id = item.id?.toString() || Math.random().toString(36).substr(2, 9);

      // Multiple Choice
      if (item.type === 'multipleChoice' || item.type === 'multiple-choice') {
        let correctAnswer = item.correctAnswer;
        if (typeof item.answerIndex === 'number' && item.options) {
          correctAnswer = item.options[item.answerIndex];
        } else if (typeof item.correctAnswer === 'number' && item.options) {
          correctAnswer = item.options[item.correctAnswer];
        }

        return {
          id: id,
          type: 'grammar',
          title: 'Exercise',
          instructions: 'Choose the correct option.',
          questions: [
            {
              id: id + '-q',
              type: 'multiple-choice',
              question: questionText,
              options: item.options || [],
              correctAnswer: correctAnswer || '',
              explanation: item.explanation,
              points: 1
            }
          ]
        } as any;
      }
      
      // Fill in the blanks
      if (item.type === 'fill-in-the-blank' || item.type === 'fillBlanks' || item.type === 'fill-blank') {
        return {
          id: id,
          type: 'grammar',
          title: 'Fill in the Blanks',
          instructions: 'Complete the sentence with the correct form.',
          questions: [
            {
              id: id + '-q',
              type: 'fill-blank',
              question: questionText,
              correctAnswer: item.correctAnswer || item.answers || '',
              explanation: item.explanation,
              points: 1
            }
          ]
        } as any;
      }

      // Matching
      if (item.type === 'matching') {
        return {
          id: id,
          type: 'matching',
          title: 'Matching Exercise',
          instructions: questionText || 'Match the terms with their definitions.',
          pairs: (item.pairs || []).map((p: any, idx: number) => ({
            id: `${id}-p${idx}`,
            word: p.left,
            correctMatch: p.right,
            distractors: [],
            points: 1
          }))
        } as any;
      }

      if (item.type === 'readingComprehension' || item.type === 'reading-comprehension') {
        let correctAnswer = item.correctAnswer;
        if (typeof item.answerIndex === 'number' && item.options) {
          correctAnswer = item.options[item.answerIndex];
        }

        return {
          id: id,
          type: 'reading',
          title: item.title || 'Reading Comprehension',
          instructions: item.instructions || 'Read the text and answer the question.',
          text: item.text || item.prompt,
          vocabularyHelp: item.vocabularyHelp || [],
          wordCount: item.wordCount,
          readingTime: item.readingTime,
          questions: item.questions || [
            {
              id: id + '-q',
              type: 'multiple-choice',
              question: item.question || 'Choose the correct answer based on the text.',
              options: item.options || [],
              correctAnswer: correctAnswer || '',
              explanation: item.explanation,
              points: 2
            }
          ]
        } as any;
      }

      // Listening Comprehension
      if (item.type === 'listening-comprehension' || item.type === 'listening') {
        return {
          id: id,
          type: 'listening',
          title: item.title || 'Listening Comprehension',
          instructions: item.instructions || 'Listen to the audio and answer the questions.',
          audioUrl: item.audioUrl,
          transcript: item.transcript,
          structuredTranscript: item.structuredTranscript,
          duration: item.duration || 0,
          maxReplays: item.maxReplays || 3,
          questions: item.questions || []
        } as any;
      }
      
      // Drag and Drop
      if (item.type === 'drag-and-drop') {
        return {
          ...item,
          id: id,
          title: item.title || 'Drag and Drop'
        } as any;
      }

      // Graph Analysis
      if (item.type === 'graph-analysis') {
        return {
          ...item,
          id: id,
          title: item.title || 'Graph Analysis'
        } as any;
      }

      // Default fallback
      return {
        id: id,
        type: 'grammar',
        title: 'Exercise',
        questions: []
      } as any;
    });
  }
};
