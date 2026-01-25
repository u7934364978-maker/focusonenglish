import OpenAI from 'openai';
import { GenerateExerciseRequest, GeneratedExercise, CEFRLevel, ExerciseCategory } from '@/lib/exercise-types';
import { generateFallbackExercise } from '@/lib/ai/fallback-exercises';
import { B2_GRAMMAR, B2_TOPICS, B2_FUNCTIONS } from '@/lib/b2-official-syllabus';
import { getAllTopics } from '@/lib/cambridge-curriculum';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || '',
});

const systemPrompt = `You are an expert English language teacher. 
Your task is to generate high-quality English exercises for students.

GUIDELINES:
1. Level: Strictly follow the CEFR level requested (A1-C2).
2. Content: 
   - All questions, options, and exercises must be in ENGLISH.
   - All explanations MUST be in SPANISH to help the student understand the reasoning.
3. Format: Return ONLY a JSON object with the following structure:
   {
     "title": "Clear exercise title",
     "instructions": "Clear instructions in English",
     "text": "Reading passage if applicable (for reading-comprehension, word-formation, cloze exercises)",
     "questions": [
       {
         "number": 1, (For cloze/formation exercises)
         "question": "The question text", (For discrete questions)
         "baseWord": "BASE", (ONLY for word-formation)
         "keyWord": "KEY", (ONLY for key-word-transformation)
         "startOfAnswer": "Start...", (ONLY for key-word-transformation)
         "options": ["Option A", "Option B", "Option C", "Option D"], (Include only for multiple-choice and multiple-choice-cloze)
         "correctAnswer": "The exact correct answer",
         "explanation": "Brief explanation in Spanish",
         "correctiveFeedback": "Specific feedback in Spanish for why common mistakes might happen in this question (ONLY if useful)",
         "suggestions": ["Native-like alternatives or related vocabulary"],
         "translation": "Spanish translation of the question (ONLY for A1 level)",
         "visualHint": "Simple emoji or description that represents the concept (ONLY for A1 level)"
       }
     ]
   }
4. Exercise Types:
   - fill-blank: A sentence with a missing word. No options.
   - multiple-choice: A question or sentence with 4 options.
   - reading-comprehension: A text followed by questions about it.
   - writing-analysis: A short prompt or sentence to correct/improve.
   - pronunciation-practice: Focus on phonetics or word stress.
   - dictation: Generate a short sentence (5-10 words) as "correctAnswer". The "question" should be "Escucha y escribe lo que oyes."
   - speaking-analysis: A situational prompt for the student to respond to.
   - key-word-transformation: A sentence to rewrite using a given key word (2-5 words).
     JSON: { "question": "Original sentence", "keyWord": "KEY", "startOfAnswer": "Start...", "correctAnswer": "rest of the answer" }
   - word-formation: A text with gaps and base words to transform.
     JSON: { "text": "Text with (1)___", "questions": [{ "number": 1, "baseWord": "ACT", "correctAnswer": "ACTION" }] }
   - open-cloze: A text with gaps (no options provided).
     JSON: { "text": "Text with (1)___", "questions": [{ "number": 1, "correctAnswer": "the" }] }
   - multiple-choice-cloze: A text with gaps and 4 options each.
     JSON: { "text": "Text with (1)___", "questions": [{ "number": 1, "options": ["A", "B", "C", "D"], "correctAnswer": "A" }] }
   - gapped-text: A text with 6 gaps [1]-[6] and 7 sentences (A-G) to choose from (one extra).
     JSON: { "text": "Passage with [1]...", "options": ["A: Sentence...", "B: Sentence..."], "questions": [{ "number": 1, "correctAnswer": "A", "explanation": "..." }] }
   - multiple-matching: 4-5 short texts (A-E) and 10 statements to match.
     JSON: { "sections": [{ "id": "A", "content": "..." }], "questions": [{ "question": "Statement...", "correctAnswer": "A", "explanation": "..." }] }
   - roleplay: Instead of "questions", return a "scenario" object:
     {
       "scenario": {
         "title": "Scenario Title",
         "description": "General description",
         "aiCharacter": { "name": "Name", "role": "Role", "personality": "Personality" },
         "studentRole": "What the student should do",
         "context": "The setting",
         "goal": "What to achieve",
         "tasks": ["Task 1", "Task 2"],
         "startingMessage": "Hello!"
       }
     }

5. Topic: Adapt the content to the requested topic if provided.
6. Difficulty: Adjust the complexity within the CEFR level based on "easy", "medium", or "hard".

**SPECIAL INSTRUCTIONS FOR A1 LEVEL (ABSOLUTE BEGINNERS):**
- Include "translation" field in each question with Spanish translation
- Include "visualHint" field with relevant emoji or simple description (e.g., "👋" for greetings, "🏠" for house, "🍎" for apple)
- Use VERY SIMPLE vocabulary (max 500 most common words)
- Use present simple tense primarily
- Include cognates when possible (words similar in Spanish: "hotel", "hospital", "family")
- Questions should focus on: greetings, numbers, colors, family, food, daily routines, basic objects
- Provide contextual images hints through emojis
- All options should be single words or very short phrases (2-3 words max)`;

export async function generateExerciseV2(request: GenerateExerciseRequest): Promise<GeneratedExercise> {
  const { exerciseType, level, difficulty, topic } = request;
  
  // Inyectar aleatoriedad para evitar repeticiones de la IA
  const randomSeed = Math.floor(Math.random() * 10000);
  const contextExtra = [
    "Focus on a specific, real-world scenario.",
    "Use contemporary vocabulary.",
    "Avoid common textbook examples.",
    "Make the context professionally relevant.",
    "Include subtle nuances appropriate for the level."
  ][randomSeed % 5];

  console.log(`[IA V2] Solicitando ejercicio: ${exerciseType}, Nivel: ${level}, Tema: ${topic}, Semilla: ${randomSeed}`);

  if (!process.env.OPENAI_API_KEY) {
    console.warn("[IA V2] API Key no configurada. Usando fallback.");
    return generateFallbackExercise(request);
  }

  // Inyectar contexto del syllabus del nivel si aplica
  let syllabusContext = '';
  
  // Buscar el topic en el curriculum general
  const allLevelTopics = getAllTopics(level as CEFRLevel);
  const curriculumTopic = allLevelTopics.find(t => t.id === topic);
  
  if (curriculumTopic) {
    syllabusContext = `
    🎯 ${level} OFFICIAL SYLLABUS CONTEXT:
    Category: ${curriculumTopic.category}
    Topic Name: ${curriculumTopic.name}
    Description: ${curriculumTopic.description}
    Keywords/Focus Areas: ${curriculumTopic.keywords.join(', ')}
    Ensure the exercise covers this specific topic accurately and pedagogically.`;
  } else if (level === 'B2') {
    // Fallback al syllabus B2 legacy si no se encuentra en el nuevo
    const grammarPoint = B2_GRAMMAR.find(g => g.id === topic);
    const vocabularyTopic = B2_TOPICS.find(t => t.id === topic);
    
    if (grammarPoint) {
      syllabusContext = `
      🎯 B2 OFFICIAL SYLLABUS CONTEXT (Grammar):
      Point: ${grammarPoint.name}
      Description: ${grammarPoint.description}
      Official Examples for reference:
      ${grammarPoint.examples.map(ex => `- ${ex}`).join('\n')}
      Ensure the exercise covers this specific grammar point accurately.`;
    } else if (vocabularyTopic) {
      syllabusContext = `
      🎯 B2 OFFICIAL SYLLABUS CONTEXT (Vocabulary):
      Topic: ${vocabularyTopic.name}
      Key Areas/Keywords: ${vocabularyTopic.keywords.join(', ')}
      Ensure the exercise uses vocabulary relevant to these specific areas.`;
    }
  }

  try {
    // Instrucciones especiales para nivel A1
    const a1Instructions = level === 'A1' ? `
    
    🎯 CRITICAL A1 BEGINNER REQUIREMENTS:
    - Add "translation" field to EVERY question (Spanish translation)
    - Add "visualHint" field to EVERY question (emoji that represents the concept)
    - Use ONLY the 500 most common English words
    - Focus on: greetings, numbers (1-20), colors, family members, basic food, daily actions
    - Examples of good A1 questions:
      * "What is this? 🍎" (options: apple, orange, banana, grape) 
      * "How do you greet someone? 👋" (options: Hello, Goodbye, Please, Sorry)
      * "This is my ___. 👨‍👩‍👧" (Fill: family/mother/father)
    - Make it VISUAL and INTUITIVE for someone with ZERO English knowledge
    - Include everyday situations: home, family, food, basic actions` 
    : '';

    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: systemPrompt },
        { 
          role: "user", 
          content: `Generate a ${exerciseType} exercise with 5 questions. 
          Level: ${level} 
          Difficulty: ${difficulty} 
          Topic: ${topic || 'General English'}
          ${syllabusContext}
          ${request.recentErrors && request.recentErrors.length > 0 ? `
          IMPORTANT: The student has recently struggled with the following topics/errors:
          ${request.recentErrors.map((e: any) => `- Topic: ${e.topic}, Mistake: "${e.wrong_answer}" (Expected: "${e.correct_answer}")`).join('\n')}
          
          Please include at least 2 questions that specifically address these weak areas or similar concepts.` : ''}
          Random context seed: ${randomSeed}
          Special instruction: ${contextExtra}
          ${a1Instructions}
          
          Ensure it is pedagogically sound and unique.` 
        }
      ],
      response_format: { type: "json_object" },
      temperature: 0.9, // Aumentamos la temperatura para más creatividad
    });

    const rawContent = response.choices[0].message.content;
    console.log("[IA V2] Respuesta recibida de OpenAI");
    
    const content = JSON.parse(rawContent || '{}');

    return {
      id: `ai_${Date.now()}`,
      type: exerciseType,
      category: (curriculumTopic?.category as ExerciseCategory) || 'practice',
      topic: topic || 'General',
      difficulty: difficulty as any,
      level: level as any,
      content: content,
      createdAt: new Date(),
    };
  } catch (error: any) {
    console.error("[IA V2] Error en OpenAI, usando fallback:", error.message);
    // Si falla la cuota (429) o cualquier otro error de red/servidor, usamos el fallback
    return generateFallbackExercise(request);
  }
}
