import * as fs from 'fs';
import * as path from 'path';
import { Lesson, Exercise } from '../exercise-types';

export const localCourseService = {
  async getLesson(
    goal: string,
    sectorOrLevel: string,
    levelOrTrimester: string,
    trimesterOrWeekId: string,
    weekIdOrLessonId?: string,
    lessonId: string = 'lesson1'
  ): Promise<Lesson | null> {
    try {
      const normalizedGoal = goal.toLowerCase();
      let normalizedPath = '';

      if (normalizedGoal === 'trabajo') {
        const sector = sectorOrLevel.toLowerCase();
        const level = levelOrTrimester.toLowerCase();
        const trimester = trimesterOrWeekId.toLowerCase();
        const weekId = weekIdOrLessonId?.toLowerCase() || '';
        normalizedPath = path.join('src/content/cursos/trabajo', sector, level, trimester, weekId);
      } else {
        // Generic path for other goals (like viajes)
        // Expected params: goal, level, trimester, weekId, lessonId
        const level = sectorOrLevel.toLowerCase();
        const trimester = levelOrTrimester.toLowerCase();
        const weekId = trimesterOrWeekId.toLowerCase();
        const requestedLessonId = weekIdOrLessonId || lessonId;
        normalizedPath = path.join('src/content/cursos', normalizedGoal, level, trimester, weekId);
        lessonId = requestedLessonId;
      }

      const baseDir = path.resolve(process.cwd(), normalizedPath);
      
      if (!fs.existsSync(baseDir)) {
        return null;
      }

      const theoryPath = path.join(baseDir, 'theory.json');
      const exercisesPath = path.join(baseDir, 'exercises.json');
      const interactiveLessonPath = path.join(baseDir, `${lessonId}.json`);

      let theoryData = null;
      let exercisesData = null;
      let isRedesigned = false;

      if (fs.existsSync(interactiveLessonPath)) {
        const lessonData = JSON.parse(fs.readFileSync(interactiveLessonPath, 'utf8'));
        theoryData = lessonData;
        exercisesData = lessonData.exercises || [];
        isRedesigned = true;
      } else if (lessonId === 'lesson1') {
        if (fs.existsSync(theoryPath)) {
          theoryData = JSON.parse(fs.readFileSync(theoryPath, 'utf8'));
        }
        if (fs.existsSync(exercisesPath)) {
          exercisesData = JSON.parse(fs.readFileSync(exercisesPath, 'utf8'));
        }
      }

      if (!theoryData && !exercisesData) {
        return null;
      }

      const items = Array.isArray(exercisesData) ? exercisesData : (exercisesData?.items || []);
      const exercises = this.convertItemsToExercises(items);
      const caseStudies = theoryData?.caseStudies || exercisesData?.caseStudies || [];

      caseStudies.forEach((cs: any) => {
        if (cs.questions && Array.isArray(cs.questions)) {
          const csExercises = this.convertItemsToExercises(cs.questions.map((q: any) => ({
            ...q,
            title: cs.title || 'Case Study',
            instructions: cs.scenario || cs.instructions || 'Based on the case study scenario:'
          })));
          exercises.push(...csExercises);
        }
      });
      
      const lesson: Lesson = {
        id: `${goal}-${sectorOrLevel}-${levelOrTrimester}-${trimesterOrWeekId}-${lessonId}`,
        title: theoryData?.title || exercisesData?.title || 'Lesson',
        description: theoryData?.description || exercisesData?.description || '',
        duration: theoryData?.duration || 60,
        objectives: theoryData?.objectives || [],
        audioUrl: theoryData?.audioUrl || exercisesData?.audioUrl,
        videoUrl: theoryData?.videoUrl || exercisesData?.videoUrl,
        theoryContent: (!isRedesigned && theoryData) ? this.formatTheoryToMarkdown(theoryData) : undefined,
        theorySlides: theoryData?.theorySlides,
        exercises: exercises,
        caseStudies: caseStudies
      };

      return lesson;
    } catch (error) {
      console.error(`Error loading local ${goal} lesson:`, error);
      return null;
    }
  },

  async getProfessionalLesson(
    sector: string,
    level: string,
    trimester: string,
    weekId: string,
    lessonId: string = 'lesson1'
  ): Promise<Lesson | null> {
    return this.getLesson('trabajo', sector, level, trimester, weekId, lessonId);
  },

  async getTravelLesson(
    level: string,
    trimester: string,
    weekId: string,
    lessonId: string = 'lesson1'
  ): Promise<Lesson | null> {
    return this.getLesson('viajes', level, trimester, weekId, lessonId);
  },

  formatTheoryToMarkdown(theoryData: any): string {
    if (!theoryData.sections) return '';
    return theoryData.sections
      .map((s: any) => `## ${s.title}\n\n${s.content}`)
      .join('\n\n');
  },

  convertItemsToExercises(items: any[]): Exercise[] {
    if (!items) return [];
    
    const normalizeAnswer = (ans: any): string | string[] => {
      if (!ans && ans !== 0) return '';
      if (Array.isArray(ans)) return ans;
      if (typeof ans !== 'string') return ans.toString();
      
      if (ans.includes('/')) {
        return ans.split('/').map(a => a.trim()).filter(Boolean);
      }
      return ans;
    };

    const normalizeQuestion = (q: any, idx: number, parentId: string) => {
      let correctAnswer = q.correctAnswer || q.answer;
      if (typeof q.answerIndex === 'number' && q.options) {
        correctAnswer = q.options[q.answerIndex];
      } else if (typeof q.correctAnswer === 'number' && q.options) {
        correctAnswer = q.options[q.correctAnswer];
      }
      return {
        id: q.id || `${parentId}-q${idx}`,
        type: q.type || (q.options ? 'multiple-choice' : 'fill-blank'),
        question: q.question || '',
        options: q.options || [],
        correctAnswer: correctAnswer || '',
        explanation: q.explanation,
        points: q.points || 1
      };
    };

    return items.map((item: any) => {
      const questionText = item.question || item.prompt || '';
      const id = item.id?.toString() || Math.random().toString(36).substr(2, 9);
      const itemType = (item.type || '').toString().toLowerCase().trim();

      // Grammar with items (as seen in some JSON files)
      if (itemType === 'grammar' && item.items && Array.isArray(item.items)) {
        return {
          id: id,
          type: 'grammar',
          title: item.title || 'Grammar Exercise',
          instructions: item.instructions || 'Complete the exercises below.',
          grammarPoint: item.grammarPoint,
          explanation: item.explanation,
          examples: item.examples || [],
          questions: item.items.map((q: any, idx: number) => normalizeQuestion(q, idx, id))
        } as any;
      }

      // Multiple Choice
      if (itemType === 'multiplechoice' || itemType === 'multiple-choice' || itemType === 'multiple_choice' || (itemType === 'grammar' && item.options) || (itemType === 'roleplay' && item.options)) {
        let correctAnswer = item.correctAnswer || item.answer;
        if (typeof item.answerIndex === 'number' && item.options) {
          correctAnswer = item.options[item.answerIndex];
        } else if (typeof item.correctAnswer === 'number' && item.options) {
          correctAnswer = item.options[item.correctAnswer];
        }

        return {
          id: id,
          type: 'grammar',
          title: item.title || 'Exercise',
          instructions: item.instructions || 'Choose the correct option.',
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
      if (itemType === 'fill-in-the-blank' || itemType === 'fill-in-the-blanks' || itemType === 'fillblanks' || itemType === 'fill-blank' || itemType === 'fill_in_the_blank') {
        const normalized = normalizeAnswer(item.correctAnswer || item.answers || item.answer || '');
        const text = item.text || item.question || item.prompt || '';
        
        // If there are multiple answers or multiple brackets, treat it as a gap-fill
        const hasMultipleAnswers = Array.isArray(normalized) && normalized.length > 1;
        const hasBrackets = text.includes('[') && text.includes(']');
        
        if (hasBrackets || hasMultipleAnswers) {
          let gapCount = 0;
          let processedText = text;
          const gaps: any[] = [];
          
          // If we have brackets like [answer], replace them with [1], [2], etc.
          if (hasBrackets) {
            processedText = text.replace(/\[(.*?)\]/g, (match: string, answer: string) => {
              gapCount++;
              gaps.push({
                id: `gap-${gapCount}`,
                number: gapCount,
                correctAnswer: answer.trim(),
                points: 1
              });
              return `[${gapCount}]`;
            });
          } else if (hasMultipleAnswers && Array.isArray(normalized)) {
            // Fallback for when we have multiple answers but no brackets (unlikely but possible)
            normalized.forEach((ans, idx) => {
              gaps.push({
                id: `gap-${idx + 1}`,
                number: idx + 1,
                correctAnswer: ans,
                points: 1
              });
            });
          }

          return {
            id: id,
            type: 'gap-fill',
            title: item.title || 'Fill in the Blanks',
            instructions: item.instructions || 'Complete the text with the correct words.',
            text: processedText,
            gaps: gaps,
            explanation: item.explanation
          } as any;
        }

        // Single answer fallback
        return {
          id: id,
          type: 'grammar',
          title: item.title || 'Fill in the Blanks',
          instructions: item.instructions || 'Complete the sentence with the correct form.',
          questions: [
            {
              id: id + '-q',
              type: 'fill-blank',
              question: text.replace(/\[.*?\]/g, '___'),
              correctAnswer: Array.isArray(normalized) ? normalized[0] : normalized,
              acceptableAnswers: Array.isArray(normalized) ? normalized : [normalized],
              explanation: item.explanation,
              points: 1
            }
          ]
        } as any;
      }

      // Matching / Vocabulary Match / Crossword fallback
      if (itemType === 'matching' || itemType === 'vocabulary-match' || itemType === 'crossword') {
        const matchingItems = item.pairs || item.items || [];
        return {
          id: id,
          type: 'matching',
          title: item.title || (item.type === 'crossword' ? 'Crossword Clues' : 'Matching Exercise'),
          instructions: item.instructions || item.question || item.prompt || (item.type === 'crossword' ? 'Match the words to their clues.' : 'Match the terms with their definitions.'),
          pairs: matchingItems.map((p: any, idx: number) => ({
            id: p.id || `${id}-p${idx}`,
            word: p.left || p.term || p.word || '',
            correctMatch: p.correctMatch || p.right || p.definition || p.match || p.clue || '',
            distractors: p.distractors || [],
            points: 1
          }))
        } as any;
      }

      if (itemType === 'reading' || itemType === 'readingcomprehension' || itemType === 'reading-comprehension') {
        let correctAnswer = item.correctAnswer;
        if (typeof item.answerIndex === 'number' && item.options) {
          correctAnswer = item.options[item.answerIndex];
        }

        const processedQuestions = item.questions 
          ? item.questions.map((q: any, idx: number) => normalizeQuestion(q, idx, id))
          : [
            {
              id: id + '-q',
              type: 'multiple-choice',
              question: item.question || 'Choose the correct answer based on the text.',
              options: item.options || [],
              correctAnswer: correctAnswer || '',
              explanation: item.explanation,
              points: 2
            }
          ];

        return {
          id: id,
          type: 'reading',
          title: item.title || 'Reading Comprehension',
          instructions: item.instructions || 'Read the text and answer the question.',
          text: item.text || item.prompt,
          vocabularyHelp: item.vocabularyHelp || [],
          wordCount: item.wordCount,
          readingTime: item.readingTime,
          questions: processedQuestions
        } as any;
      }

      // Listening Comprehension
      if (itemType === 'listening-comprehension' || itemType === 'listening') {
        const processedQuestions = (item.questions || []).map((q: any, idx: number) => normalizeQuestion(q, idx, id));
        
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
          questions: processedQuestions
        } as any;
      }

      // Writing Task
      if (itemType === 'writingtask' || itemType === 'writing-task' || itemType === 'writing') {
        return {
          id: id,
          type: 'writing',
          title: item.title || 'Writing Task',
          writingType: item.writingType || (item.prompt?.toLowerCase().includes('email') ? 'email' : 'essay'),
          prompt: item.prompt,
          minWords: item.minWords || 50,
          maxWords: item.maxWords || 200,
          timeLimit: item.timeLimit || 20,
          exampleResponse: item.modelAnswer || item.exampleResponse,
          tips: item.keywords || item.tips || [],
          rubric: item.rubric
        } as any;
      }

      // Roleplay / Speaking
      if (itemType === 'roleplayprompt' || itemType === 'roleplay' || itemType === 'speaking' || itemType === 'roleplay') {
        const fullPrompt = item.context ? `${item.context}\n\nTask: ${item.prompt}` : item.prompt;
        return {
          id: id,
          type: 'speaking',
          title: item.title || 'Speaking Practice',
          prompt: fullPrompt,
          targetWords: item.keyPhrases || item.keywords || item.suggestedPhrases || [],
          hints: item.keyPhrases || item.suggestedPhrases || [],
          timeLimit: item.timeLimit || 60,
          expectedResponse: item.modelAnswer || item.expectedResponse
        } as any;
      }

      // Reordering
      if (itemType === 'reorder' || itemType === 'sentence-reordering' || itemType === 'sentence-ordering') {
        if (item.sentences && Array.isArray(item.sentences)) {
          return {
            id: id,
            type: 'sentence-reordering',
            title: item.title || 'Reorder the Sentences',
            instructions: item.instructions || item.prompt || 'Put the sentences in the correct order.',
            sentences: item.sentences,
            correctOrder: item.correctOrder || Array.from({ length: item.sentences.length }, (_, i) => i),
            explanation: item.explanation
          } as any;
        } else if (item.sentence) {
          // Word reordering
          const normalizedSentences = normalizeAnswer(item.sentence);
          const targetSentence = Array.isArray(normalizedSentences) ? normalizedSentences[0] : normalizedSentences;
          const acceptableVariations = Array.isArray(normalizedSentences) ? normalizedSentences.slice(1) : [];
          
          const words = targetSentence.split(' ');
          const shuffled = [...words].sort(() => Math.random() - 0.5);

          return {
            id: id,
            type: 'sentence-building',
            title: item.title || 'Build the Sentence',
            instructions: item.instructions || item.prompt || 'Reorder the words to form a correct sentence.',
            challenges: [
              {
                id: id + '-c',
                prompt: item.prompt || 'Arrange the words to form a correct sentence:',
                targetSentence: targetSentence,
                acceptableVariations: acceptableVariations,
                scrambled: shuffled.join(' '),
                translation: item.explanation,
                difficulty: 'medium',
                words: words.map((w: string, i: number) => ({
                  id: `${id}-w${i}`,
                  text: w,
                  type: 'object'
                }))
              }
            ]
          } as any;
        }
      }
      
      // Drag and Drop
      if (itemType === 'drag-and-drop' || itemType === 'draganddrop') {
        return {
          ...item,
          id: id,
          title: item.title || 'Drag and Drop'
        } as any;
      }

      // Word Search fallback
      if (itemType === 'word-search' || itemType === 'wordsearch') {
        return {
          id: id,
          type: 'reading',
          title: item.title || 'Word Search',
          instructions: item.instructions || 'Find the financial terms.',
          text: `### Find these words:\n\n${(item.words || []).map((w: string) => `- ${w}`).join('\n')}`,
          questions: [
            {
              id: id + '-q',
              type: 'multiple-choice',
              question: 'Did you find all the words in the grid?',
              options: ['Yes, I found them all', 'I found some of them'],
              correctAnswer: normalizeAnswer('Yes, I found them all'),
              points: 1
            }
          ]
        } as any;
      }

      // Graph Analysis
      if (itemType === 'graph-analysis' || itemType === 'graphanalysis') {
        return {
          ...item,
          id: id,
          title: item.title || 'Graph Analysis'
        } as any;
      }

      // Short Answer
      if (itemType === 'short-answer' || itemType === 'shortanswer') {
        const normalized = normalizeAnswer(item.correctAnswer || item.answer || '');
        return {
          id: id,
          type: 'grammar',
          title: item.title || 'Short Answer',
          instructions: item.instructions || 'Answer the question briefly.',
          questions: [
            {
              id: id + '-q',
              type: 'fill-blank',
              question: questionText,
              correctAnswer: Array.isArray(normalized) ? normalized[0] : normalized,
              acceptableAnswers: Array.isArray(normalized) ? normalized : [normalized],
              explanation: item.explanation,
              points: item.points || 1
            }
          ]
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
