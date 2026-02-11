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

      // STRICTOR PEDAGOGICAL CONTROL:
      // A. Never show content from FUTURE units
      if (skill.unit > targetUnit) return { bp, weight: 0 };

      // B. Mastery-based Gating
      const mastery = profile.skills[bp.skillId] || {
        masteryLevel: 0,
        attempts: 0,
        failuresInRow: 0
      };
      
      const isProduction = bp.type === 'fill-blank' || bp.type === 'sentence-building';
      const isDiscovery = bp.type === 'flashcard' || bp.type === 'matching';
      
      // Word-Level Sequencing:
      // If the skill is new, we MUST do Discovery first.
      if (skill.unit === targetUnit && mastery.attempts === 0 && isProduction) {
        return { bp, weight: 0 };
      }

      let weight = 0;
      // Priority 1: Recent failures
      if (mastery.failuresInRow > 0) weight += 200 * mastery.failuresInRow;

      // Priority 2: Brand new content (Discovery phase)
      if (skill.unit === targetUnit && mastery.attempts < 2) {
        weight += 150;
        if (isDiscovery) weight += 600; // Strongest push for discovery
        if (bp.type === 'multiple-choice') weight += 200;
      }

      // Priority 3: Current unit practice
      if (skill.unit === targetUnit) {
        weight += 50;
        if (mastery.masteryLevel < 0.7) weight += 30;
      }

      // Priority 4: Review of past units (Retention)
      if (skill.unit < targetUnit) {
        weight += 10;
        // Spaced repetition boost
        const lastAttemptDays = (new Date().getTime() - new Date(mastery.lastAttemptAt || 0).getTime()) / (1000 * 3600 * 24);
        if (lastAttemptDays > 3) weight += 20;
      }

      return { bp, weight };
    }).filter(wb => wb.weight > 0);

    // Sort by weight and pick
    const sortedBlueprints = weightedBlueprints.sort((a, b) => b.weight - a.weight);

    // Shuffle top pool but keep thematic continuity
    // We group by skillId to maintain "Thematic Continuity"
    const groupedBySkill = sortedBlueprints.reduce((acc, wb) => {
      if (!acc[wb.bp.skillId]) acc[wb.bp.skillId] = [];
      acc[wb.bp.skillId].push(wb);
      return acc;
    }, {} as Record<string, typeof sortedBlueprints>);

    const randomizedPool: typeof sortedBlueprints = [];
    const skillIds = this.shuffle(Object.keys(groupedBySkill));
    
    for (const sid of skillIds) {
      randomizedPool.push(...this.shuffle(groupedBySkill[sid]));
    }

    // Generate exercises with forced variety and anti-clustering
    const typesSeen: Record<string, number> = {};
    let lastType = '';
    let consecutiveTypeCount = 0;

    const filteredPool = randomizedPool.filter(wb => {
      if (sessionExercises.length >= count) return false;
      
      const bp = wb.bp;
      const typeCount = typesSeen[bp.type] || 0;
      
      // Anti-Clustering: Max 2 of the same type in a row
      if (bp.type === lastType && consecutiveTypeCount >= 2) return false;

      // Capping per type at 40% for variety
      if (typeCount >= Math.ceil(count * 0.4) && randomizedPool.length > count) return false;

      const exercise = this.assemble(bp, profile, targetUnit);
      sessionExercises.push(exercise);
      
      typesSeen[bp.type] = typeCount + 1;
      if (bp.type === lastType) {
        consecutiveTypeCount++;
      } else {
        lastType = bp.type;
        consecutiveTypeCount = 1;
      }
      
      return true;
    });

    // PEDAGOGICAL SORTING: Discovery -> Recognition -> Production
    // But we keep some thematic grouping within stages
    return sessionExercises.sort((a, b) => {
      const typeOrder: Record<string, number> = {
        'flashcard': 1,
        'matching': 2,
        'multiple-choice': 3,
        'fill-blank': 4,
        'sentence-building': 5
      };
      return (typeOrder[a.type] || 99) - (typeOrder[b.type] || 99);
    });
  }

  /**
   * Generates multiple variants for a specific blueprint
   */
  generateVariants(blueprintId: string, profile: StudentProfile, count: number = 5): Exercise[] {
    const blueprint = A1_BLUEPRINTS.find(bp => bp.id === blueprintId);
    if (!blueprint) throw new Error(`Blueprint ${blueprintId} not found`);

    const variants: Exercise[] = [];
    const usedCombinations = new Set<string>();
    this.recentWords.clear();

    while (variants.length < count) {
      const exercise = this.assemble(blueprint, profile);
      const uniqueKey = JSON.stringify(exercise.content);
      
      if (!usedCombinations.has(uniqueKey)) {
        variants.push(exercise);
        usedCombinations.add(uniqueKey);
      }
      
      if (usedCombinations.size > 200) break; 
    }

    return variants;
  }

  private assemble(blueprint: Blueprint, profile: StudentProfile, forcedUnit?: number): Exercise {
    const filledSlots: Record<string, LexicalItem> = {};
    const skill = A1_SKILLS[blueprint.skillId] || { unit: forcedUnit || 1, name: 'General' };
    const effectiveUnit = blueprint.skillId === 'A1-UNIVERSAL' ? (forcedUnit || 1) : skill.unit;
    
    const isProduction = blueprint.type === 'fill-blank' || blueprint.type === 'sentence-building';

    // 1. Fill slots with lexical items (with novelty rotation and pedagogical gating)
    for (const [slotName, config] of Object.entries(blueprint.slots)) {
      if (config.fixedValues) {
        const selectedLemma = this.getRandom(config.fixedValues);
        // Look for translation in lexicon even for fixed values
        const lexiconMatch = this.lexicon.find(l => l.lemma === selectedLemma);
        
        filledSlots[slotName] = {
          lemma: selectedLemma,
          pos: config.pos as any || 'verb',
          translation: lexiconMatch?.translation || '',
          tags: lexiconMatch?.tags || [],
          unit: effectiveUnit
        };
      } else {
        const matches = this.lexicon.filter(item => {
          const posMatch = !config.pos || item.pos === config.pos;
          const tagMatch = !config.tags || config.tags.every(t => item.tags.includes(t));
          const unitMatch = item.unit <= effectiveUnit; 
          const noveltyMatch = !this.recentWords.has(item.lemma);
          
          // SEMANTIC & PEDAGOGICAL GATING:
          // A. Semantic Shielding (don't use proper nouns for common slots)
          const properNounShield = config.tags?.includes('proper_noun') ? true : !item.tags.includes('proper_noun');
          
          // B. Discovery Gating: If production exercise, word MUST have been seen before
          const exposure = profile.vocabulary[item.lemma];
          const isDiscovered = exposure && (exposure.discoveryCount > 0 || exposure.recognitionCount > 0);
          const pedagogicalMatch = isProduction ? isDiscovered : true;

          return posMatch && tagMatch && unitMatch && noveltyMatch && properNounShield && pedagogicalMatch;
        });

        // If no matches with novelty/discovery gating, relax constraints but ONLY if it's not production
        const pool = matches.length > 0 ? matches : this.lexicon.filter(item => {
          const posMatch = !config.pos || item.pos === config.pos;
          const tagMatch = !config.tags || config.tags.every(t => item.tags.includes(t));
          const unitMatch = item.unit <= effectiveUnit; 
          const properNounShield = config.tags?.includes('proper_noun') ? true : !item.tags.includes('proper_noun');
          
          const exposure = profile.vocabulary[item.lemma];
          const isDiscovered = exposure && (exposure.discoveryCount > 0 || exposure.recognitionCount > 0);
          const pedagogicalMatch = isProduction ? isDiscovered : true;

          return posMatch && tagMatch && unitMatch && properNounShield && pedagogicalMatch;
        });

        const selected = this.getRandom(pool);
        if (!selected) {
          // Absolute fallback but still respecting unit and excluding proper nouns for common slots
          const safePool = this.lexicon.filter(item => {
            const unitMatch = item.unit <= skill.unit;
            const posMatch = !config.pos || item.pos === config.pos;
            const notProperNoun = !item.tags.includes('proper_noun');
            return unitMatch && posMatch && notProperNoun;
          });

          filledSlots[slotName] = this.getRandom(safePool) || this.lexicon[0];
        } else {
          filledSlots[slotName] = selected;
          this.recentWords.add(selected.lemma);
        }
      }
    }

    // 2. Build strings and apply Smart Grammar (a/an + Plurals)
    let englishText = blueprint.template;
    let spanishText = blueprint.translationTemplate;

    const sortedSlotNames = Object.keys(filledSlots);

    for (const slotName of sortedSlotNames) {
      const item = filledSlots[slotName];
      
      // Determine if we need plural form (for numbers)
      const numSlot = Object.keys(filledSlots).find(key => filledSlots[key].tags.includes('number'));
      const numberValue = numSlot ? filledSlots[numSlot].lemma : null;
      const isPlural = numberValue !== null && numberValue !== 'one' && numberValue !== '1';
      
      const englishLemma = (isPlural && item.plural) ? item.plural : item.lemma;
      
      // Smart Spanish Translation (Conjugation + Pluralization)
      let spanishLemma = item.translation;
      if (item.pos === 'verb' && item.i_es && (blueprint.template.startsWith('I ') || blueprint.template.includes(' I '))) {
        spanishLemma = item.i_es;
      }
      
      // Pluralize Spanish nouns if count > 1
      if (isPlural && item.pos === 'noun' && item.plural_es) {
        spanishLemma = item.plural_es;
      }
      
      // Dynamic Spanish Articles based on gender
      const el_la = item.gender_es === 'f' ? 'la' : 'el';
      const un_una = item.gender_es === 'f' ? 'una' : 'un';
      const plur_art = item.gender_es === 'f' ? 'las' : 'los';
      
      const resolvedArt = isPlural ? plur_art : el_la;
      const resolvedIndef = isPlural ? (item.gender_es === 'f' ? 'unas' : 'unos') : un_una;

      // Handle "a/an" logic
      const needsAn = /^[aeiou]/i.test(englishLemma);
      const correctArticle = needsAn ? 'an' : 'a';

      // Replace generic article markers
      englishText = englishText.replace(new RegExp(`a {${slotName}}`, 'g'), `${correctArticle} ${englishLemma}`);
      englishText = englishText.replace(new RegExp(`an {${slotName}}`, 'g'), `${correctArticle} ${englishLemma}`);
      
      // Replace Spanish dynamic articles in templates
      spanishText = spanishText.replace(`{el_la_${slotName}}`, resolvedArt);
      spanishText = spanishText.replace(`{un_una_${slotName}}`, resolvedIndef);
      
      // Direct slot replacement
      englishText = englishText.replace(`{${slotName}}`, englishLemma);
      spanishText = spanishText.replace(`{${slotName}_es}`, spanishLemma);
    }

    return this.mapToExercise(blueprint, englishText, spanishText, skill, filledSlots, effectiveUnit);
  }

  private mapToExercise(blueprint: Blueprint, english: string, spanish: string, skill: any, filledSlots: Record<string, LexicalItem>, effectiveUnit?: number): Exercise {
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

    // Determine if we need plural form for the answer
    const isNumber = filledSlots['num']?.tags.includes('number') || filledSlots['number']?.tags.includes('number');
    const numberValue = filledSlots['num']?.lemma || filledSlots['number']?.lemma;
    const isPlural = isNumber && numberValue !== 'one' && numberValue !== '1';
    
    const answer = (isPlural && correctItem.plural) ? correctItem.plural : correctItem.lemma;
    
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
      const questionText = english.replace(new RegExp(`\\b${answer}\\b`, 'g'), '_______');

      base.content.questions = [{
        text: `En español: "${spanish}"\n\n${questionText}`,
        correctAnswer: answer,
        explanation: explanation
      }];
    } else if (blueprint.type === 'multiple-choice') {
      const questionText = english.replace(new RegExp(`\\b${answer}\\b`, 'g'), '_______');
      
      const config = blueprint.slots[slotName];
      
      // Smart Distractors Logic:
      let potentialDistractors: string[] = [];
      
      // A. If fixedValues exist, they are the best distractors
      if (config.fixedValues) {
        potentialDistractors = config.fixedValues.filter(v => v !== answer);
      } 
      
      // B. If not enough fixed values, search lexicon by semantic tags + POS
      if (potentialDistractors.length < 3) {
        const semanticTags = config.tags || correctItem.tags || [];
        const extraDistractors = this.lexicon
          .filter(item => 
            item.lemma !== correctItem.lemma && 
            !potentialDistractors.includes(item.lemma) &&
            (!config.pos || item.pos === config.pos) &&
            (semanticTags.length > 0 ? item.tags.some(t => semanticTags.includes(t)) : true)
          )
          .map(i => (isPlural && i.plural) ? i.plural : i.lemma);
        
        potentialDistractors.push(...extraDistractors);
      }

      // Final fallback if we still don't have enough: any word with same POS
      if (potentialDistractors.length < 3) {
        const fallbacks = this.lexicon
          .filter(item => item.lemma !== correctItem.lemma && item.pos === (config.pos || correctItem.pos))
          .map(i => (isPlural && i.plural) ? i.plural : i.lemma);
        potentialDistractors.push(...fallbacks);
      }

      const finalDistractors = this.shuffle(Array.from(new Set(potentialDistractors))).slice(0, 3);

      base.content.questions = [{
        question: `En español: "${spanish}"\n\n${questionText}`,
        options: this.shuffle([answer, ...finalDistractors]),
        correctAnswer: answer,
        explanation: explanation
      }];
    } else if (blueprint.type === 'matching') {
      // Logic for 8 pairs of matching words
      const semanticTags = blueprint.slots[slotName]?.tags || correctItem.tags || [];
      const unitConstraint = effectiveUnit; 

      let pairsPool = this.shuffle(this.lexicon
        .filter(item => 
          (semanticTags.length > 0 ? item.tags.some(t => semanticTags.includes(t)) : true) &&
          item.translation !== '' &&
          item.unit === unitConstraint 
        )).slice(0, 8);

      // Fallback: If not enough in current unit, take from previous units
      if (pairsPool.length < 4) {
        const extraPool = this.shuffle(this.lexicon
          .filter(item => 
            (semanticTags.length > 0 ? item.tags.some(t => semanticTags.includes(t)) : true) &&
            item.translation !== '' &&
            item.unit < unitConstraint &&
            !pairsPool.some(p => p.lemma === item.lemma)
          )).slice(0, 8 - pairsPool.length);
        pairsPool = [...pairsPool, ...extraPool];
      }

      const pairs = pairsPool.map(item => ({
        id: item.lemma,
        left: item.lemma,
        right: item.translation
      }));

      base.content.pairs = pairs;
      base.content.explanation = "Relaciona cada palabra en inglés con su traducción al español.";
    } else if (blueprint.type === 'flashcard') {
      base.content.items = [{
        front: correctItem.lemma,
        back: correctItem.translation,
        pronunciation: correctItem.tags.includes('greeting') ? 'GREETING' : undefined
      }];
      base.content.explanation = explanation;
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
