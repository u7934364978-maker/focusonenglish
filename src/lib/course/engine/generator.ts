import { Exercise } from '@/lib/exercise-generator';
import { A1_LEXICON, LexicalItem } from './lexicon';
import { A1_BLUEPRINTS, Blueprint } from './blueprints';
import { A1_SKILLS } from './skills';

export class ExerciseGenerator {
  private lexicon: LexicalItem[] = A1_LEXICON;
  private recentWords: Set<string> = new Set();

  /**
   * Generates multiple variants for a specific blueprint
   */
  generateVariants(blueprintId: string, count: number = 5): Exercise[] {
    const blueprint = A1_BLUEPRINTS.find(bp => bp.id === blueprintId);
    if (!blueprint) throw new Error(`Blueprint ${blueprintId} not found`);

    const variants: Exercise[] = [];
    const usedCombinations = new Set<string>();
    this.recentWords.clear();

    while (variants.length < count) {
      const exercise = this.assemble(blueprint);
      const uniqueKey = JSON.stringify(exercise.content);
      
      if (!usedCombinations.has(uniqueKey)) {
        variants.push(exercise);
        usedCombinations.add(uniqueKey);
      }
      
      if (usedCombinations.size > 200) break; 
    }

    return variants;
  }

  private assemble(blueprint: Blueprint): Exercise {
    const filledSlots: Record<string, LexicalItem> = {};
    const skill = A1_SKILLS[blueprint.skillId];

    // 1. Fill slots with lexical items (with novelty rotation)
    for (const [slotName, config] of Object.entries(blueprint.slots)) {
      if (config.fixedValues) {
        filledSlots[slotName] = {
          lemma: this.getRandom(config.fixedValues),
          pos: config.pos as any || 'verb',
          translation: '',
          tags: []
        };
      } else {
        const matches = this.lexicon.filter(item => {
          const posMatch = !config.pos || item.pos === config.pos;
          const tagMatch = !config.tags || config.tags.every(t => item.tags.includes(t));
          const noveltyMatch = !this.recentWords.has(item.lemma);
          return posMatch && tagMatch && noveltyMatch;
        });

        // If no matches with novelty, relax novelty constraint
        const pool = matches.length > 0 ? matches : this.lexicon.filter(item => {
          const posMatch = !config.pos || item.pos === config.pos;
          const tagMatch = !config.tags || config.tags.every(t => item.tags.includes(t));
          return posMatch && tagMatch;
        });

        const selected = this.getRandom(pool);
        filledSlots[slotName] = selected;
        this.recentWords.add(selected.lemma);
      }
    }

    // 2. Build strings and apply Smart Grammar (a/an)
    let englishText = blueprint.template;
    let spanishText = blueprint.translationTemplate;

    // Sort slots to handle articles that might precede them
    const sortedSlotNames = Object.keys(filledSlots);

    for (const slotName of sortedSlotNames) {
      const item = filledSlots[slotName];
      
      // Handle "a/an" logic: Replace "a {slot}" or "an {slot}" with correct one
      const needsAn = /^[aeiou]/i.test(item.lemma);
      const correctArticle = needsAn ? 'an' : 'a';

      // Replace generic article markers if present in template
      englishText = englishText.replace(new RegExp(`a {${slotName}}`, 'g'), `${correctArticle} ${item.lemma}`);
      englishText = englishText.replace(new RegExp(`an {${slotName}}`, 'g'), `${correctArticle} ${item.lemma}`);
      
      // Fallback for direct slot replacement
      englishText = englishText.replace(`{${slotName}}`, item.lemma);
      spanishText = spanishText.replace(`{${slotName}_es}`, item.translation);
    }

    return this.mapToExercise(blueprint, englishText, spanishText, skill, filledSlots);
  }

  private mapToExercise(blueprint: Blueprint, english: string, spanish: string, skill: any, filledSlots: any): Exercise {
    const base = {
      id: `${blueprint.id}-${Math.random().toString(36).substr(2, 9)}`,
      type: blueprint.type,
      level: 'A1',
      topic: skill.name,
      topicName: skill.name,
      difficulty: 'medium',
    };

    if (blueprint.type === 'fill-blank') {
      const firstSlotName = Object.keys(blueprint.slots)[0];
      const answer = filledSlots[firstSlotName].lemma;
      
      return {
        ...base,
        content: {
          questions: [{
            text: english.replace(new RegExp(`\\b${answer}\\b`, 'g'), '_______'),
            correctAnswers: [answer],
            explanation: `Completamos con "${answer}": ${spanish}`
          }]
        }
      } as any;
    }

    if (blueprint.type === 'multiple-choice') {
      const firstSlotName = Object.keys(blueprint.slots)[0];
      const correctAnswer = filledSlots[firstSlotName].lemma;
      
      // Generate distractors from the same POS and tags
      const config = blueprint.slots[firstSlotName];
      const distractors = this.lexicon
        .filter(item => 
          item.lemma !== correctAnswer && 
          (!config.pos || item.pos === config.pos) &&
          (!config.tags || config.tags.every(t => item.tags.includes(t)))
        )
        .slice(0, 3)
        .map(i => i.lemma);

      return {
        ...base,
        content: {
          questions: [{
            question: english.replace(new RegExp(`\\b${correctAnswer}\\b`, 'g'), '_______'),
            options: this.shuffle([correctAnswer, ...distractors]),
            correctAnswer: correctAnswer,
            explanation: spanish
          }]
        }
      } as any;
    }

    return {
      ...base,
      content: {
        questions: [{
          question: english,
          options: [english],
          correctAnswer: english,
          explanation: spanish
        }]
      }
    } as any;
  }

  private getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }
}
