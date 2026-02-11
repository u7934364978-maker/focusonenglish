import { Exercise } from '../../exercise-generator';
import { A1_LEXICON, LexicalItem } from './lexicon';
import { A1_BLUEPRINTS, Blueprint } from './blueprints';
import { A1_SKILLS } from './skills';
import { StudentProfile } from './mastery';

export class ExerciseGenerator {
  private lexicon: LexicalItem[] = A1_LEXICON;
  private recentWords: Set<string> = new Set();

  /**
   * Generates an adaptive session based on student profile.
   * Logic:
   * 1. REINFORCEMENT: Skills with recent failures or low mastery.
   * 2. PROGRESSION: New skills from the current unit.
   * 3. RETENTION: Old mastered skills (Spaced Repetition).
   */
  generateAdaptiveSession(profile: StudentProfile, targetUnit: number = 1, count: number = 10): Exercise[] {
    const sessionExercises: Exercise[] = [];
    const blueprints = [...A1_BLUEPRINTS];

    // 1. Calculate weight for each blueprint
    const weightedBlueprints = blueprints.map(bp => {
      const skill = A1_SKILLS[bp.skillId];
      const mastery = profile.skills[bp.skillId] || {
        masteryLevel: 0,
        attempts: 0,
        failuresInRow: 0,
        lastAttemptAt: new Date(0).toISOString()
      };

      let weight = 0;

      // Priority 1: Recent failures (Crucial reinforcement)
      if (mastery.failuresInRow > 0) weight += 100 * mastery.failuresInRow;

      // Priority 2: New content in target unit
      if (skill.unit === targetUnit && mastery.attempts === 0) weight += 50;

      // Priority 3: Low mastery content in target unit
      if (skill.unit === targetUnit && mastery.masteryLevel < 0.5) weight += 30;

      // Priority 4: Spaced repetition (Mastered but not seen recently)
      if (mastery.masteryLevel > 0.8) {
        const lastSeen = new Date(mastery.lastAttemptAt).getTime();
        const now = Date.now();
        const daysSince = (now - lastSeen) / (1000 * 60 * 60 * 24);
        if (daysSince > 2) weight += 10; // Bring back after 2 days
      }

      // Penalty: Content from future units
      if (skill.unit > targetUnit) weight = 0;

      return { bp, weight };
    }).filter(wb => wb.weight > 0);

    // Sort by weight and pick
    const sortedBlueprints = weightedBlueprints.sort((a, b) => b.weight - a.weight);

    // Generate exercises
    let i = 0;
    while (sessionExercises.length < count && sortedBlueprints.length > 0) {
      const selection = sortedBlueprints[i % sortedBlueprints.length];
      sessionExercises.push(this.assemble(selection.bp));
      i++;
      
      // Safety break to avoid infinite loops if pool is too small
      if (i > count * 2) break;
    }

    return sessionExercises;
  }

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
        if (!selected) {
          // Absolute fallback: pick any word if no match
          filledSlots[slotName] = this.getRandom(this.lexicon) || { 
            lemma: '...', 
            pos: 'noun', 
            translation: '...', 
            tags: [] 
          };
        } else {
          filledSlots[slotName] = selected;
          this.recentWords.add(selected.lemma);
        }
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
    const defaultInstructions: Record<string, string> = {
      'fill-blank': 'Completa el espacio en blanco:',
      'multiple-choice': 'Elige la opción correcta:',
      'matching': 'Une las parejas:',
      'sentence-building': 'Ordena las palabras:',
      'flashcard': 'Aprende este concepto:'
    };

    const base: any = {
      id: `${blueprint.id}-${Math.random().toString(36).substr(2, 9)}`,
      type: blueprint.type,
      level: 'A1' as any,
      topic: skill.id,
      topicName: skill.name,
      difficulty: 'medium' as any,
      content: {
        title: blueprint.title || skill.name,
        instructions: blueprint.instruction || defaultInstructions[blueprint.type] || 'Resuelve el ejercicio:',
        questions: []
      }
    };

    if (blueprint.type === 'fill-blank') {
      const firstSlotName = Object.keys(blueprint.slots)[0];
      const answer = filledSlots[firstSlotName].lemma;
      
      base.content.questions = [{
        text: english.replace(new RegExp(`\\b${answer}\\b`, 'g'), '_______'),
        correctAnswers: [answer],
        explanation: `💡 **Tip pedagógico**: ${spanish}.`
      }];
    } else if (blueprint.type === 'multiple-choice') {
      const firstSlotName = Object.keys(blueprint.slots)[0];
      const correctAnswer = filledSlots[firstSlotName].lemma;
      
      const config = blueprint.slots[firstSlotName];
      const distractors = this.lexicon
        .filter(item => 
          item.lemma !== correctAnswer && 
          (!config.pos || item.pos === config.pos) &&
          (!config.tags || config.tags.every(t => item.tags.includes(t)))
        )
        .slice(0, 3)
        .map(i => i.lemma);

      base.content.questions = [{
        question: english.replace(new RegExp(`\\b${correctAnswer}\\b`, 'g'), '_______'),
        options: this.shuffle([correctAnswer, ...distractors]),
        correctAnswer: correctAnswer,
        explanation: `💡 **Tip pedagógico**: ${spanish}.`
      }];
    } else {
      base.content.questions = [{
        question: english,
        options: [english],
        correctAnswer: english,
        explanation: spanish
      }];
    }

    return base;
  }

  private getRandom<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  private shuffle<T>(arr: T[]): T[] {
    return [...arr].sort(() => Math.random() - 0.5);
  }
}
