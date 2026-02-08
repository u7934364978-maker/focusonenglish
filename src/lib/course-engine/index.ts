import { CourseUnitSchema, type CourseUnit } from './schema';

export interface ValidationResult {
  success: boolean;
  data?: CourseUnit;
  errors?: string[];
}

export class CourseEngine {
  /**
   * Validates raw data against the CourseUnit schema.
   */
  static validate(data: any): ValidationResult {
    const result = CourseUnitSchema.safeParse(data);
    
    if (result.success) {
      return { success: true, data: result.data };
    } else {
      // @ts-ignore
      const errorIssues = result.error?.issues || result.error?.errors || [];
      return { 
        success: false, 
        errors: errorIssues.map((e: any) => `${e.path.join('.')}: ${e.message}`) 
      };
    }
  }

  /**
   * Normalizes data: trims strings, ensures IDs exist, fixes common type issues.
   */
  static normalize(data: any): any {
    if (!data || typeof data !== 'object') return data;

    // Clone to avoid mutations
    const normalized = JSON.parse(JSON.stringify(data));

    const processObject = (obj: any) => {
      if (!obj || typeof obj !== 'object') return;

      Object.keys(obj).forEach(key => {
        const value = obj[key];
        
        // Trim strings
        if (typeof value === 'string') {
          obj[key] = value.trim();
        } 
        // Recursive for arrays/objects
        else if (Array.isArray(value)) {
          value.forEach((item, index) => {
            if (typeof item === 'string') {
              value[index] = item.trim();
            } else {
              processObject(item);
            }
          });
        } else if (typeof value === 'object') {
          processObject(value);
        }
      });

      // Normalize interaction type
      if (obj.type && typeof obj.type === 'string') {
        let type = obj.type.trim().toLowerCase();
        if (type.endsWith('.')) type = type.slice(0, -1);
        
        // Normalize common type variations
        const typeMap: Record<string, string> = {
          'multiplechoice': 'multiple_choice',
          'multiple-choice': 'multiple_choice',
          'matching': 'matching',
          'vocabulary-match': 'matching',
          'drag-drop': 'reorder_words',
          'fillblanks': 'fill_blanks',
          'fill-blank': 'fill_blanks',
          'flashcards': 'flashcard',
          'true-false': 'true_false',
          'truefalse': 'true_false'
        };

        if (typeMap[type]) {
          type = typeMap[type];
        }
        
        obj.type = type;

        // Flatten nested questions/content for common types
        if (['multiple_choice', 'true_false', 'reading-comprehension'].includes(type)) {
          const q = obj.questions?.[0] || obj.content?.questions?.[0] || (obj.options ? obj : null);
          if (q) {
            if (!obj.prompt && q.prompt) obj.prompt = q.prompt;
            if (!obj.options && q.options) obj.options = q.options;
            
            const rawCorrect = q.correct_answer || q.correctAnswer || q.answer || q.answerIndex || obj.correct_answer || obj.correctAnswer || obj.answer || obj.answerIndex;
            if (rawCorrect !== undefined) {
              obj.correct_answer = rawCorrect;
            }

            // Normalize options to {id, text} objects if they are just strings
            if (obj.options && Array.isArray(obj.options) && obj.options.length > 0) {
              // Handle [{text: '...', isCorrect: true}] legacy format
              if (typeof obj.options[0] === 'object' && obj.options[0].text && obj.options[0].isCorrect !== undefined) {
                const correct = obj.options.find((o: any) => o.isCorrect);
                if (correct && obj.correct_answer === undefined) {
                  obj.correct_answer = correct.text;
                }
                obj.options = obj.options.map((o: any) => o.text);
              }

              if (typeof obj.options[0] === 'string') {
                const originalOptions = [...obj.options];
                obj.options = originalOptions.map((opt: string, i: number) => ({
                  id: `o${i}`,
                  text: opt.trim()
                }));

                // If correct_answer is a number or matches a string option, convert to oX ID
                if (typeof obj.correct_answer === 'number' && obj.correct_answer < originalOptions.length) {
                  obj.correct_answer = `o${obj.correct_answer}`;
                } else if (typeof obj.correct_answer === 'string') {
                  const idx = originalOptions.findIndex(o => o.trim().toLowerCase() === (obj.correct_answer as string).trim().toLowerCase());
                  if (idx !== -1) {
                    obj.correct_answer = `o${idx}`;
                  }
                }
              }
            }
          }
        }

        // Matching normalization
        if (type === 'matching' && (obj.pairs || obj.items)) {
          const pairs = obj.pairs || obj.items;
          if (Array.isArray(pairs)) {
            obj.pairs = pairs.map((p: any) => ({
              id: p.id || `p_${Math.random().toString(36).substr(2, 5)}`,
              left: p.word || p.left || '',
              right: p.correctMatch || p.translation || p.right || ''
            }));
          }
        }

        // Reorder words normalization
        if (type === 'reorder_words' && (obj.correctSentence || obj.sentence)) {
          const sentence = obj.correctSentence || obj.sentence;
          if (typeof sentence === 'string') {
            obj.stimulus_en = sentence;
            const words = sentence.split(/\s+/).filter(Boolean);
            obj.options = words.map((w: string, i: number) => ({
              id: `w${i}`,
              text: w
            }));
            obj.correct_answer = words.map((_: string, i: number) => `w${i}`);
          }
        }

        // Fill blanks normalization
        if (type === 'fill_blanks' && !obj.correct_answer) {
          if (obj.answers && Array.isArray(obj.answers)) {
            obj.correct_answer = obj.answers[0];
          } else if (obj.answer) {
            obj.correct_answer = obj.answer;
          }
        }

        // Flashcard normalization
        if (type === 'flashcard' && (obj.items || obj.cards)) {
          const items = obj.items || obj.cards;
          if (Array.isArray(items)) {
            obj.cards = items.map((item: any) => ({
              id: item.id || `c_${Math.random().toString(36).substr(2, 5)}`,
              front: item.front || item.word || '',
              back: item.back || item.translation || ''
            }));
          }
        }

        // Map inconsistent field names
        if (type === 'audio_player') {
          if (obj.audioUrl && !obj.audio_url) obj.audio_url = obj.audioUrl;
          if (obj.text && !obj.transcript) obj.transcript = obj.text;
        }
      }

      // Ensure ID for exercises if missing (best effort)
      if (obj.type && !obj.interaction_id) {
        obj.interaction_id = obj.interaction_id || `int_${Math.random().toString(36).substr(2, 9)}`;
      }
    };

    processObject(normalized);
    return normalized;
  }
}
