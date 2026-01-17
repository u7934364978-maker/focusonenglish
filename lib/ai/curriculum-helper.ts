// ============================================
// CURRICULUM HELPER FOR A1 LEVEL
// ============================================
// Integra el curriculum A1 con el generador de ejercicios

import { getCurriculumByLevel, LevelCurriculum, CurriculumModule } from '@/lib/curriculum-data';
import { ExerciseCategory, ExerciseType, DifficultyLevel } from '@/lib/exercise-types';

// ============================================
// CURRICULUM CONTEXT FOR AI
// ============================================

export interface CurriculumContext {
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  modules: CurriculumModule[];
  relevantTopics: string[];
  relevantGrammar: string[];
  relevantVocabulary: string[];
  skills: {
    reading: string[];
    writing: string[];
    listening: string[];
    speaking: string[];
  };
}

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Obtiene el contexto del curriculum para un nivel específico
 */
export function getCurriculumContext(level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): CurriculumContext {
  const curriculum = getCurriculumByLevel(level);
  
  if (!curriculum) {
    throw new Error(`Curriculum for level ${level} not found`);
  }

  // Agregar todos los tópicos, gramática y vocabulario de todos los módulos
  const allTopics: string[] = [];
  const allGrammar: string[] = [];
  const allVocabulary: string[] = [];
  const allReading: string[] = [];
  const allWriting: string[] = [];
  const allListening: string[] = [];
  const allSpeaking: string[] = [];

  curriculum.modules.forEach(module => {
    allTopics.push(...module.topics);
    allGrammar.push(...module.grammar);
    allVocabulary.push(...module.vocabulary);
    allReading.push(...module.skills.reading);
    allWriting.push(...module.skills.writing);
    allListening.push(...module.skills.listening);
    allSpeaking.push(...module.skills.speaking);
  });

  return {
    level,
    modules: curriculum.modules,
    relevantTopics: allTopics,
    relevantGrammar: allGrammar,
    relevantVocabulary: allVocabulary,
    skills: {
      reading: allReading,
      writing: allWriting,
      listening: allListening,
      speaking: allSpeaking
    }
  };
}

/**
 * Obtiene tópicos relevantes para una categoría de ejercicio
 */
export function getRelevantTopicsForCategory(
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2',
  category: ExerciseCategory
): string[] {
  const context = getCurriculumContext(level);

  switch (category) {
    case 'grammar':
      return context.relevantGrammar;
    case 'vocabulary':
      return context.relevantVocabulary;
    case 'reading':
      return context.skills.reading;
    case 'writing':
      return context.skills.writing;
    case 'listening':
      return context.skills.listening;
    case 'speaking':
      return context.skills.speaking;
    case 'pronunciation':
      return context.relevantTopics.slice(0, 10); // Primeros 10 tópicos
    case 'exam-practice':
      return context.relevantTopics;
    default:
      return context.relevantTopics;
  }
}

/**
 * Construye un prompt específico del curriculum para la IA
 */
export function buildCurriculumPrompt(
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2',
  category: ExerciseCategory,
  exerciseType: ExerciseType,
  difficulty: DifficultyLevel
): string {
  const context = getCurriculumContext(level);
  const relevantContent = getRelevantTopicsForCategory(level, category);

  let prompt = `\n\n=== CURRICULUM CONTEXT FOR ${level} LEVEL ===\n`;
  
  // Información del nivel
  prompt += `\nCEFR Level: ${level}\n`;
  prompt += `Category: ${category}\n`;
  prompt += `Exercise Type: ${exerciseType}\n`;
  prompt += `Difficulty: ${difficulty}\n`;

  // Contenido relevante del curriculum
  if (category === 'grammar' && context.relevantGrammar.length > 0) {
    prompt += `\n📚 GRAMMAR TOPICS TO USE (${level}):\n`;
    const grammarTopics = selectRandomTopics(context.relevantGrammar, 5, difficulty);
    grammarTopics.forEach((topic, i) => {
      prompt += `${i + 1}. ${topic}\n`;
    });
    prompt += `\n✅ Use ONLY these grammar structures appropriate for ${level} level.`;
  }

  if (category === 'vocabulary' && context.relevantVocabulary.length > 0) {
    prompt += `\n📖 VOCABULARY THEMES TO USE (${level}):\n`;
    const vocabThemes = selectRandomTopics(context.relevantVocabulary, 5, difficulty);
    vocabThemes.forEach((theme, i) => {
      prompt += `${i + 1}. ${theme}\n`;
    });
    prompt += `\n✅ Use ONLY vocabulary from these ${level}-appropriate themes.`;
  }

  if (category === 'reading' || category === 'listening') {
    prompt += `\n📚 RELEVANT TOPICS (${level}):\n`;
    const topics = selectRandomTopics(context.relevantTopics, 5, difficulty);
    topics.forEach((topic, i) => {
      prompt += `${i + 1}. ${topic}\n`;
    });
    
    if (category === 'reading') {
      prompt += `\n📖 READING SKILLS FOR ${level}:\n`;
      context.skills.reading.slice(0, 3).forEach((skill, i) => {
        prompt += `${i + 1}. ${skill}\n`;
      });
    } else {
      prompt += `\n🎧 LISTENING SKILLS FOR ${level}:\n`;
      context.skills.listening.slice(0, 3).forEach((skill, i) => {
        prompt += `${i + 1}. ${skill}\n`;
      });
    }
  }

  if (category === 'writing') {
    prompt += `\n✍️ WRITING SKILLS FOR ${level}:\n`;
    context.skills.writing.slice(0, 3).forEach((skill, i) => {
      prompt += `${i + 1}. ${skill}\n`;
    });
    
    prompt += `\n📝 VOCABULARY FOR WRITING:\n`;
    const vocabForWriting = selectRandomTopics(context.relevantVocabulary, 3, difficulty);
    vocabForWriting.forEach((vocab, i) => {
      prompt += `${i + 1}. ${vocab}\n`;
    });
  }

  if (category === 'speaking' || category === 'pronunciation') {
    prompt += `\n🗣️ SPEAKING SKILLS FOR ${level}:\n`;
    context.skills.speaking.slice(0, 3).forEach((skill, i) => {
      prompt += `${i + 1}. ${skill}\n`;
    });
    
    prompt += `\n🎯 TOPICS FOR SPEAKING:\n`;
    const topicsForSpeaking = selectRandomTopics(context.relevantTopics, 3, difficulty);
    topicsForSpeaking.forEach((topic, i) => {
      prompt += `${i + 1}. ${topic}\n`;
    });
  }

  // Instrucciones específicas por nivel
  prompt += getLevelSpecificInstructions(level, difficulty);

  return prompt;
}

/**
 * Selecciona tópicos aleatorios basados en la dificultad
 */
function selectRandomTopics(
  topics: string[], 
  count: number, 
  difficulty: DifficultyLevel
): string[] {
  if (topics.length === 0) return [];
  
  // Para dificultad easy, usar los primeros tópicos (más básicos)
  // Para medium, usar del medio
  // Para hard, usar del final (más avanzados)
  let startIndex = 0;
  const segmentSize = Math.floor(topics.length / 3);
  
  if (difficulty === 'medium' && segmentSize > 0) {
    startIndex = segmentSize;
  } else if (difficulty === 'hard' && segmentSize > 0) {
    startIndex = segmentSize * 2;
  }
  
  const availableTopics = topics.slice(startIndex);
  const selectedTopics: string[] = [];
  const usedIndices = new Set<number>();
  
  while (selectedTopics.length < Math.min(count, availableTopics.length)) {
    const randomIndex = Math.floor(Math.random() * availableTopics.length);
    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      selectedTopics.push(availableTopics[randomIndex]);
    }
  }
  
  return selectedTopics;
}

/**
 * Obtiene instrucciones específicas del nivel
 */
function getLevelSpecificInstructions(
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2',
  difficulty: DifficultyLevel
): string {
  const instructions: Record<string, Record<DifficultyLevel, string>> = {
    'A1': {
      'easy': `\n\n🎯 A1 EASY LEVEL REQUIREMENTS:
- Use PRESENT SIMPLE and basic verbs (be, have, go, do, like)
- Simple subject-verb-object sentences
- Vocabulary: numbers 1-100, colors, family, everyday objects, basic actions
- Very short texts (20-40 words)
- Clear, simple questions with yes/no or single-word answers
- Avoid: complex grammar, phrasal verbs, conditionals, perfect tenses`,
      
      'medium': `\n\n🎯 A1 MEDIUM LEVEL REQUIREMENTS:
- Add PRESENT CONTINUOUS (I am doing) and basic PAST SIMPLE (regular verbs)
- Include some/any, this/that/these/those
- Vocabulary: days, months, time, basic adjectives, common activities
- Short texts (40-60 words)
- Mix of yes/no questions and simple Wh- questions (What/Where/When)
- Introduce basic prepositions (in, on, at, under, behind)`,
      
      'hard': `\n\n🎯 A1 HARD LEVEL REQUIREMENTS:
- Use CAN/CAN'T for ability, PAST SIMPLE (irregular verbs)
- Basic QUESTIONS in all forms (do/does/did)
- Include HOW MUCH/MANY, possessive 's, object pronouns
- Texts up to 80 words
- Variety of question types, short comprehension passages
- Introduce: basic adverbs (always, never, usually), imperatives`
    },
    'A2': {
      'easy': `\n\n🎯 A2 EASY LEVEL REQUIREMENTS:
- Review A1 + add GOING TO for future, simple comparatives
- Basic past tense stories, present perfect introduction
- Vocabulary: hobbies, feelings, food, shopping, travel basics
- Texts: 60-100 words`,
      
      'medium': `\n\n🎯 A2 MEDIUM LEVEL REQUIREMENTS:
- PRESENT PERFECT with for/since, WILL for predictions
- Modal verbs: should, must, have to
- Vocabulary expansion in all A2 topics
- Texts: 100-150 words`,
      
      'hard': `\n\n🎯 A2 HARD LEVEL REQUIREMENTS:
- All A2 grammar including conditionals type 1, relative clauses (who/which)
- Linking words: because, so, but, although
- Complex A2 scenarios
- Texts: 150-200 words`
    }
  };

  return instructions[level]?.[difficulty] || '';
}

/**
 * Obtiene un módulo aleatorio del curriculum
 */
export function getRandomModule(level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'): CurriculumModule {
  const context = getCurriculumContext(level);
  const randomIndex = Math.floor(Math.random() * context.modules.length);
  return context.modules[randomIndex];
}

/**
 * Obtiene tópicos específicos de un módulo
 */
export function getModuleTopics(
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2',
  moduleIndex: number
): {
  topics: string[];
  grammar: string[];
  vocabulary: string[];
} {
  const context = getCurriculumContext(level);
  const module = context.modules[moduleIndex];
  
  if (!module) {
    throw new Error(`Module ${moduleIndex} not found for level ${level}`);
  }

  return {
    topics: module.topics,
    grammar: module.grammar,
    vocabulary: module.vocabulary
  };
}
