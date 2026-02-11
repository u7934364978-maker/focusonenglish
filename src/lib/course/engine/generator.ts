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

    // 1. Calculate weight and filter by pedagogical stage
    const weightedBlueprints = blueprints.map(bp => {
      const skill = A1_SKILLS[bp.skillId];
      if (!skill) return { bp, weight: 0 };

      // GATING LOGIC:
      // If the exercise is "production" (fill-blank),
      // check if the student has seen enough "discovery/recognition" for this skill.
      const mastery = profile.skills[bp.skillId] || {
        masteryLevel: 0,
        attempts: 0,
        failuresInRow: 0
      };
      
      const isProduction = bp.type === 'fill-blank' || bp.type === 'sentence-building';
      const hasEnoughExposure = mastery.masteryLevel > 0.2 || mastery.attempts >= 2;

      if (isProduction && !hasEnoughExposure) {
        return { bp, weight: 0 }; // Gate production until exposure
      }

      let weight = 0;

      // Priority 1: Recent failures (Crucial reinforcement)
      if (mastery.failuresInRow > 0) weight += 100 * mastery.failuresInRow;

      // Priority 2: Progression - New content in target unit
      if (skill.unit === targetUnit && mastery.attempts === 0) weight += 50;

      // Priority 3: Persistence - Low mastery content in target unit
      if (skill.unit === targetUnit && mastery.masteryLevel < 0.5) weight += 30;

      // Priority 4: Discovery - Everything else from current and past units
      if (skill.unit <= targetUnit) weight += 10;

      // Priority 5: Sneak Peek - Small chance for future units (Discovery only)
      if (skill.unit > targetUnit && !isProduction) weight += 2;

      return { bp, weight };
    }).filter(wb => wb.weight > 0);

    // Sort by weight and pick
    const sortedBlueprints = weightedBlueprints.sort((a, b) => b.weight - a.weight);

    // Shuffle top pool to avoid repetition if weights are equal
    const topPool = sortedBlueprints.slice(0, count * 3);
    const randomizedPool = this.shuffle(topPool);

    // Generate exercises with forced variety
    let i = 0;
    const typesSeen = new Set<string>();

    while (sessionExercises.length < count && randomizedPool.length > 0) {
      const selection = randomizedPool[i % randomizedPool.length];
      const bp = selection.bp;
      
      // Forced variety logic: don't pick the same type 3 times in a row
      // and prioritize types we haven't seen in this session yet
      const typeRepetition = sessionExercises.filter(e => e.type === bp.type).length;
      const isOverRepresented = typeRepetition > count / 2;

      if (isOverRepresented && randomizedPool.length > count) {
        // Skip this one to find more variety if possible
      } else {
        sessionExercises.push(this.assemble(bp));
        typesSeen.add(bp.type);
      }

      i++;
      if (i > count * 10) break; // Safety break
    }

    // Ensure at least one matching if available in pool
    if (!typesSeen.has('matching') && sessionExercises.length > 0) {
      const matchingBP = randomizedPool.find(wb => wb.bp.type === 'matching');
      if (matchingBP) {
        sessionExercises[sessionExercises.length - 1] = this.assemble(matchingBP.bp);
      }
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
        const selectedLemma = this.getRandom(config.fixedValues);
        // Look for translation in lexicon even for fixed values
        const lexiconMatch = this.lexicon.find(l => l.lemma === selectedLemma);
        
        filledSlots[slotName] = {
          lemma: selectedLemma,
          pos: config.pos as any || 'verb',
          translation: lexiconMatch?.translation || '',
          tags: lexiconMatch?.tags || []
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

    const tagTranslations: Record<string, string> = {
      'formal': 'formal',
      'informal': 'informal',
      'morning': 'mañana',
      'afternoon': 'tarde',
      'evening': 'tarde/noche',
      'night': 'noche',
      'happy': 'positivo/feliz',
      'sad': 'negativo/triste',
      'sunny': 'soleado',
      'rainy': 'lluvioso'
    };

    const slotName = blueprint.correctSlot || Object.keys(blueprint.slots)[0];
    const correctItem = filledSlots[slotName];
    
    // Resolve dynamic instructions
    let instructions = blueprint.instruction || defaultInstructions[blueprint.type] || 'Resuelve el ejercicio:';
    if (correctItem && correctItem.tags) {
      for (const tag of correctItem.tags) {
        if (tagTranslations[tag]) {
          instructions = instructions.replace(`{${slotName}_type}`, tagTranslations[tag]);
        }
      }
    }
    instructions = instructions.replace(new RegExp(`{${slotName}_type}`, 'g'), '');

    // Resolve rich explanation based on blueprint template or fallback
    let explanation = `💡 **Análisis**: En inglés, "${correctItem.lemma}" significa "${correctItem.translation}".`;
    
    if (blueprint.skillId.includes('BE-POS')) {
      explanation = `💡 **Gramática**: Usamos "${correctItem.lemma}" con el pronombre personal "I" para presentarnos o decir cómo estamos.`;
    } else if (blueprint.skillId.includes('WANT')) {
      explanation = `💡 **Uso**: Utilizamos el verbo "want" para expresar deseos. Recuerda: "I want" = "Yo quiero".`;
    } else if (blueprint.skillId.includes('PREP')) {
      explanation = `💡 **Preposición**: "${correctItem.lemma}" indica la posición exacta. En este caso: "${correctItem.translation}".`;
    }

    const base: any = {
      id: `${blueprint.id}-${Math.random().toString(36).substr(2, 9)}`,
      type: blueprint.type,
      level: 'A1' as any,
      topic: skill.id,
      topicName: skill.name,
      difficulty: 'medium' as any,
      content: {
        title: blueprint.title || skill.name,
        instructions: instructions,
        questions: []
      }
    };

    if (blueprint.type === 'fill-blank') {
      const answer = correctItem.lemma;
      let questionText = blueprint.template;
      for (const [name, item] of Object.entries(filledSlots)) {
        if (name === slotName) {
          questionText = questionText.replace(`{${name}}`, '_______');
        } else {
          const needsAn = /^[aeiou]/i.test(item.lemma);
          const correctArticle = needsAn ? 'an' : 'a';
          questionText = questionText.replace(new RegExp(`a {${name}}|an {${name}}`, 'g'), `${correctArticle} ${item.lemma}`);
          questionText = questionText.replace(`{${name}}`, item.lemma);
        }
      }

      base.content.questions = [{
        text: `En español: "${spanish}"\n\n${questionText}`,
        correctAnswer: answer,
        explanation: explanation
      }];
    } else if (blueprint.type === 'multiple-choice') {
      const correctAnswer = correctItem.lemma;
      let questionText = blueprint.template;
      for (const [name, item] of Object.entries(filledSlots)) {
        if (name === slotName) {
          questionText = questionText.replace(`{${name}}`, '_______');
        } else {
          const needsAn = /^[aeiou]/i.test(item.lemma);
          const correctArticle = needsAn ? 'an' : 'a';
          questionText = questionText.replace(new RegExp(`a {${name}}|an {${name}}`, 'g'), `${correctArticle} ${item.lemma}`);
          questionText = questionText.replace(`{${name}}`, item.lemma);
        }
      }
      
      const config = blueprint.slots[slotName];
      
      // Smart Distractors Logic:
      let potentialDistractors: string[] = [];
      
      // A. If fixedValues exist, they are the best distractors
      if (config.fixedValues) {
        potentialDistractors = config.fixedValues.filter(v => v !== correctAnswer);
      } 
      
      // B. If not enough fixed values, search lexicon by semantic tags + POS
      if (potentialDistractors.length < 3) {
        const semanticTags = config.tags || correctItem.tags || [];
        const extraDistractors = this.lexicon
          .filter(item => 
            item.lemma !== correctAnswer && 
            !potentialDistractors.includes(item.lemma) &&
            (!config.pos || item.pos === config.pos) &&
            (semanticTags.length > 0 ? item.tags.some(t => semanticTags.includes(t)) : true)
          )
          .map(i => i.lemma);
        
        potentialDistractors.push(...extraDistractors);
      }

      // Final fallback if we still don't have enough: any word with same POS
      if (potentialDistractors.length < 3) {
        const fallbacks = this.lexicon
          .filter(item => item.lemma !== correctAnswer && item.pos === (config.pos || correctItem.pos))
          .map(i => i.lemma);
        potentialDistractors.push(...fallbacks);
      }

      const finalDistractors = this.shuffle(potentialDistractors).slice(0, 3);

      base.content.questions = [{
        question: `En español: "${spanish}"\n\n${questionText}`,
        options: this.shuffle([correctAnswer, ...finalDistractors]),
        correctAnswer: correctAnswer,
        explanation: explanation
      }];
    } else if (blueprint.type === 'matching') {
      // Logic for 8 pairs of matching words
      const semanticTags = blueprint.slots[slotName]?.tags || correctItem.tags || [];
      const pairsPool = this.shuffle(this.lexicon
        .filter(item => 
          (semanticTags.length > 0 ? item.tags.some(t => semanticTags.includes(t)) : true) &&
          item.translation !== ''
        )).slice(0, 8); // Select 8 pairs randomly from the tag-matched pool

      const pairs = pairsPool.map(item => ({
        id: item.lemma,
        text: item.lemma,
        translation: item.translation
      }));

      base.content.questions = [{
        pairs: pairs, // The ExerciseRenderer handles independent shuffling of columns
        explanation: "Relaciona cada palabra en inglés con su traducción al español."
      }];
    } else if (blueprint.type === 'flashcard') {
      base.content.questions = [{
        text: correctItem.lemma,
        translation: correctItem.translation,
        explanation: explanation
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
