import fs from 'fs';
import path from 'path';

const UNITS_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a1';
const PREMIUM_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/content/cursos/ingles-a1';

function stripMarkdown(text) {
  if (!text) return "";
  return text.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');
}

function shuffle(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

function normalizeInteractionToExercise(interaction, unitId, allCorrectAnswers) {
  const exerciseId = `a1-u${unitId}-${interaction.interaction_id.toLowerCase()}`;
  const level = "A1";
  const topic = interaction.mastery_tag || "General";
  const difficulty = "medium";

  // Helper to get random distractors from other exercises
  const getRandomDistractors = (correctAnswer, count = 3) => {
    const otherAnswers = allCorrectAnswers.filter(a => a !== correctAnswer && a.length > 1);
    const shuffled = shuffle(otherAnswers);
    return shuffled.slice(0, count).map(a => `[[${a}|]]`);
  };

  if (interaction.type === 'multiple_choice') {
    const options = (interaction.options || []).map(o => `[[${o.text}|]]`);
    const correctAnswerText = interaction.options?.find(o => o.id === interaction.correct_answer)?.text;
    
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
            options: options,
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
    const questions = (interaction.pairs || []).map((p, index, allPairs) => {
      const distractors = allPairs
        .filter((_, idx) => idx !== index)
        .map(other => `[[${other.right}|]]`);
      
      // If not enough distractors from same exercise, pull from other exercises
      if (distractors.length < 3) {
        const extra = getRandomDistractors(p.right, 3 - distractors.length);
        distractors.push(...extra);
      }

      const options = shuffle([`[[${p.right}|]]`, ...distractors].slice(0, 4));
      const correctAnswer = options.indexOf(`[[${p.right}|]]`);

      return {
        question: p.left,
        options: options,
        correctAnswer: correctAnswer
      };
    });

    return {
      id: exerciseId,
      type: "multiple-choice",
      level,
      topic,
      difficulty,
      content: {
        title: "Matching",
        instructions: interaction.prompt_es || "Une los pares:",
        questions: questions
      },
      topicName: topic
    };
  }

  if (interaction.type === 'transformation' || interaction.type === 'fill_blanks') {
    const distractors = getRandomDistractors(interaction.correct_answer, 3);
    const options = shuffle([`[[${interaction.correct_answer}|]]`, ...distractors]);
    const correctAnswer = options.indexOf(`[[${interaction.correct_answer}|]]`);

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
            options: options,
            correctAnswer: correctAnswer
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
    const distractors = getRandomDistractors(interaction.correct_answer, 1);
    const options = shuffle([`[[${interaction.correct_answer}|]]`, ...distractors]);
    const correctAnswer = options.indexOf(`[[${interaction.correct_answer}|]]`);

    return {
      id: exerciseId,
      type: "multiple-choice", 
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
            options: options,
            correctAnswer: correctAnswer,
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

    // First pass: collect all correct answers to use as distractors
    const allCorrectAnswers = [];
    premiumData.blocks.forEach(block => {
      block.content.forEach(interaction => {
        if (interaction.correct_answer && typeof interaction.correct_answer === 'string') {
          allCorrectAnswers.push(interaction.correct_answer);
        }
        if (interaction.pairs) {
          interaction.pairs.forEach(p => allCorrectAnswers.push(p.right));
        }
      });
    });

    const allExercises = [];
    premiumData.blocks.forEach(block => {
      block.content.forEach(interaction => {
        const exercise = normalizeInteractionToExercise(interaction, i, allCorrectAnswers);
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
