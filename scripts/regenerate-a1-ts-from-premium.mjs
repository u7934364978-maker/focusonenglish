import fs from 'fs';
import path from 'path';

const UNITS_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a1';
const PREMIUM_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/content/cursos/ingles-a1';

function stripMarkdown(text) {
  if (!text) return "";
  return text.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');
}

function normalizeInteractionToExercise(interaction, unitId) {
  const exerciseId = `a1-u${unitId}-${interaction.interaction_id.toLowerCase()}`;
  const level = "A1";
  const topic = interaction.mastery_tag || "General";
  const difficulty = "medium";

  if (interaction.type === 'multiple_choice') {
    return {
      id: exerciseId,
      type: "multiple-choice",
      level,
      topic,
      difficulty,
      transcript: interaction.stimulus_en || "",
      content: {
        title: interaction.title || "Multiple Choice",
        instructions: interaction.prompt_es || "",
        questions: [
          {
            question: interaction.stimulus_en || interaction.prompt_es,
            options: (interaction.options || []).map(o => `[[${o.text}|]]`),
            correctAnswer: interaction.options?.findIndex(o => o.id === interaction.correct_answer) ?? 0,
            explanation: interaction.explanation || ""
          }
        ]
      },
      audioUrl: interaction.audio_url || interaction.audioUrl || "",
      topicName: topic
    };
  }

  if (interaction.type === 'matching') {
    return {
      id: exerciseId,
      type: "multiple-choice", // Placeholder for matching in TS format
      level,
      topic,
      difficulty,
      content: {
        title: "Matching",
        instructions: interaction.prompt_es || "Une los pares:",
        questions: (interaction.pairs || []).map(p => ({
          question: p.left,
          options: [`[[${p.right}|]]`, "[[incorrect|]]"],
          correctAnswer: 0
        }))
      },
      topicName: topic
    };
  }

  if (interaction.type === 'transformation' || interaction.type === 'fill_blanks') {
    return {
      id: exerciseId,
      type: "multiple-choice",
      level,
      topic,
      difficulty,
      content: {
        title: "Fill in the blanks",
        instructions: interaction.prompt_es || "Completa la frase:",
        questions: [
          {
            question: interaction.stimulus_en || "Exercise",
            options: [`[[${interaction.correct_answer}|]]`, "[[other|]]"],
            correctAnswer: 0
          }
        ]
      },
      topicName: topic
    };
  }

  if (interaction.type === 'reorder_words') {
    return {
      id: exerciseId,
      type: "multiple-choice",
      level,
      topic,
      difficulty,
      content: {
        title: "Reorder Words",
        instructions: interaction.prompt_es || "Ordena las palabras:",
        questions: [
          {
            question: (interaction.options || []).map(o => o.text).join(" "),
            options: [`[[${(interaction.correct_answer_text || "correct")}|]]`],
            correctAnswer: 0
          }
        ]
      },
      topicName: topic
    };
  }

  if (interaction.type === 'reading_comprehension') {
    return {
      id: exerciseId,
      type: "multiple-choice",
      level,
      topic,
      difficulty,
      transcript: interaction.transcript || "",
      content: {
        title: "Reading Comprehension",
        instructions: interaction.prompt_es || "Lee y responde:",
        questions: (interaction.questions || []).map(q => ({
          question: q.prompt_es || q.question,
          options: (q.options || []).map(o => `[[${o.text}|]]`),
          correctAnswer: q.options?.findIndex(o => o.id === q.correct_answer) ?? 0
        }))
      },
      topicName: topic
    };
  }
  
  if (interaction.type === 'listening_dictation') {
    return {
      id: exerciseId,
      type: "multiple-choice", // For the standard course UI
      level,
      topic: "Listening",
      difficulty,
      transcript: stripMarkdown(interaction.transcript_template || ""),
      content: {
        title: "Listening Practice",
        instructions: interaction.prompt_es || "Escucha y completa la frase:",
        questions: [
          {
            question: interaction.transcript_template?.replace('________', '_______') || "",
            options: [
              `[[${interaction.correct_answer}|]]`,
              "[[other|]]"
            ],
            correctAnswer: 0,
            explanation: "Escucha atentamente para identificar la palabra correcta."
          }
        ]
      },
      audioUrl: interaction.audio_url || interaction.audioUrl || "",
      topicName: "Listening"
    };
  }

  if (interaction.type === 'pronunciation') {
    const targetSentence = interaction.targetSentences && interaction.targetSentences[0];
    const expectedResponse = targetSentence ? stripMarkdown(targetSentence.text) : (interaction.stimulus_en || "");
    
    return {
      id: exerciseId,
      type: "pronunciation",
      level,
      topic: "Pronunciation",
      difficulty,
      transcript: expectedResponse,
      content: {
        title: interaction.title || "Pronunciation Practice",
        instructions: interaction.instructions || interaction.prompt_es || "Listen and repeat.",
        expectedResponse: expectedResponse,
        phonetic: targetSentence?.phonetic || interaction.phonetic || ""
      },
      audioUrl: targetSentence?.audioUrl || interaction.audio_url || interaction.audioUrl || "",
      topicName: "Pronunciation"
    };
  }

  // Fallback for other types to at least keep them as multiple-choice placeholders or similar
  return {
    id: exerciseId,
    type: "multiple-choice",
    level,
    topic,
    difficulty,
    transcript: interaction.stimulus_en || "",
    content: {
      title: interaction.title || interaction.type,
      instructions: interaction.prompt_es || "",
      questions: [
        {
          question: interaction.stimulus_en || interaction.prompt_es || "Exercise",
          options: ["[[Option 1|]]", "[[Option 2|]]"],
          correctAnswer: 0
        }
      ]
    },
    audioUrl: interaction.audio_url || interaction.audioUrl || "",
    topicName: topic
  };
}

async function regenerateAll() {
  for (let i = 30; i <= 60; i++) {
    const premiumFile = path.join(PREMIUM_DIR, `unit${i}.json`);
    const unitFile = path.join(UNITS_DIR, `unit-${i}.ts`);

    if (!fs.existsSync(premiumFile)) continue;

    console.log(`Regenerating unit ${i}...`);
    const premiumData = JSON.parse(fs.readFileSync(premiumFile, 'utf8'));

    const allExercises = [];
    premiumData.blocks.forEach(block => {
      block.content.forEach(interaction => {
        const exercise = normalizeInteractionToExercise(interaction, i);
        if (exercise) allExercises.push(exercise);
      });
    });

    const fileContent = `import { Exercise } from '@/lib/exercise-generator';

export const UNIT_${i}_EXERCISES: Exercise[] = ${JSON.stringify(allExercises, null, 2)};
`;

    fs.writeFileSync(unitFile, fileContent);
  }
}

regenerateAll().catch(console.error);
