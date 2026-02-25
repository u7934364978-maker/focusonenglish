import fs from 'fs';
import path from 'path';

const UNITS_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a1';
const PREMIUM_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/content/cursos/ingles-a1';

function stripMarkdown(text) {
  return text.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');
}

function normalizeInteractionToExercise(interaction, unitId) {
  const exerciseId = `a1-u${unitId}-${interaction.interaction_id.toLowerCase()}`;
  
  if (interaction.type === 'listening_dictation') {
    return {
      id: exerciseId,
      type: "multiple-choice",
      level: "A1",
      topic: "Listening & Pronunciation",
      difficulty: "medium",
      transcript: stripMarkdown(interaction.transcript_template || ""),
      content: {
        title: "Listening Practice",
        instructions: interaction.prompt_es || "Escucha y completa la frase:",
        questions: [
          {
            question: interaction.transcript_template.replace('________', '_______'),
            options: [
              `[[${interaction.correct_answer}|]]`,
              "[[other|]]"
            ],
            correctAnswer: 0,
            explanation: "Escucha atentamente para identificar la palabra correcta."
          }
        ]
      },
      audioUrl: interaction.audio_url,
      topicName: "Listening"
    };
  } else if (interaction.type === 'pronunciation') {
    const targetSentence = interaction.targetSentences && interaction.targetSentences[0];
    const expectedResponse = targetSentence ? stripMarkdown(targetSentence.text) : "";
    
    return {
      id: exerciseId,
      type: "pronunciation",
      level: "A1",
      topic: "Listening & Pronunciation",
      difficulty: "medium",
      transcript: expectedResponse,
      content: {
        title: interaction.title || "Pronunciation Practice",
        instructions: interaction.instructions || "Listen and repeat the sentence.",
        expectedResponse: expectedResponse,
        phonetic: targetSentence?.phonetic || ""
      },
      audioUrl: targetSentence?.audioUrl || interaction.audio_url,
      topicName: "Pronunciation"
    };
  }
  return null;
}

async function syncAll() {
  for (let i = 30; i <= 60; i++) {
    const unitFile = path.join(UNITS_DIR, `unit-${i}.ts`);
    const premiumFile = path.join(PREMIUM_DIR, `unit${i}.json`);

    if (!fs.existsSync(unitFile) || !fs.existsSync(premiumFile)) {
      continue;
    }

    console.log(`Syncing unit ${i}...`);

    const unitContent = fs.readFileSync(unitFile, 'utf8');
    const premiumData = JSON.parse(fs.readFileSync(premiumFile, 'utf8'));

    const lesson5Block = premiumData.blocks.find((b) => b.title && b.title.includes('Lesson 5'));
    if (!lesson5Block) continue;

    const newExercises = lesson5Block.content
      .map(item => normalizeInteractionToExercise(item, i))
      .filter(Boolean);

    // Read the original exercises, removing any existing Lesson 5 exercises
    // Lesson 5 exercises have IDs starting with a1-uX-uX_i3
    const lesson5IdPrefix = `a1-u${i}-u${i}_i3`;
    
    // We'll parse the TS file content to find where to insert/replace
    // Since parsing TS is hard with regex, we'll try to find the last exercise
    // and replace everything from the first Lesson 5 exercise onwards.
    
    const lines = unitContent.split('\n');
    let firstLesson5Index = -1;
    for (let j = 0; j < lines.length; j++) {
      if (lines[j].includes(lesson5IdPrefix)) {
        // Find the start of this exercise object (the { before the id)
        for (let k = j; k >= 0; k--) {
          if (lines[k].includes('{')) {
            firstLesson5Index = k;
            break;
          }
        }
        break;
      }
    }

    let baseContent;
    if (firstLesson5Index !== -1) {
      // Remove everything from firstLesson5Index to the end of the array
      // Find the last ] before the end of the file or export
      const lastBracketIndex = unitContent.lastIndexOf('];');
      baseContent = unitContent.substring(0, firstLesson5Index);
      // Remove trailing comma if exists
      baseContent = baseContent.trim().replace(/,$/, '');
    } else {
      // No Lesson 5 yet, find the last ] of the array
      const lastBracketIndex = unitContent.lastIndexOf('];');
      baseContent = unitContent.substring(0, lastBracketIndex).trim().replace(/,$/, '');
    }

    const newExercisesJson = newExercises.map(ex => JSON.stringify(ex, null, 2)).join(',\n  ');
    
    const finalContent = `${baseContent},\n  ${newExercisesJson}\n];\n`;
    
    fs.writeFileSync(unitFile, finalContent);
  }
}

syncAll().catch(console.error);
