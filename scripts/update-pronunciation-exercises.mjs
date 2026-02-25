import fs from 'fs';
import path from 'path';

const UNITS_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/lib/course/a1';
const PREMIUM_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/content/cursos/ingles-a1';

function stripMarkdown(text) {
  return text.replace(/\[\[(.*?)\|(.*?)\]\]/g, '$1');
}

async function updateUnits() {
  for (let i = 30; i <= 60; i++) {
    const unitFile = path.join(UNITS_DIR, `unit-${i}.ts`);
    const premiumFile = path.join(PREMIUM_DIR, `unit${i}.json`);

    if (!fs.existsSync(unitFile) || !fs.existsSync(premiumFile)) {
      console.log(`Skipping unit ${i} - file not found`);
      continue;
    }

    console.log(`Updating unit ${i}...`);

    const unitContent = fs.readFileSync(unitFile, 'utf8');
    const premiumData = JSON.parse(fs.readFileSync(premiumFile, 'utf8'));

    // Find the Lesson 5 block in premium
    const lesson5Block = premiumData.blocks.find((b) => b.title && b.title.includes('Lesson 5'));
    if (!lesson5Block) {
      console.log(`No Lesson 5 found in premium unit ${i}`);
      continue;
    }

    // Extract the pronunciation interactions
    const pronunciationInteractions = lesson5Block.content.filter((item) => item.type === 'pronunciation');

    let updatedUnitContent = unitContent;

    pronunciationInteractions.forEach((interaction) => {
      const exerciseId = `a1-u${i}-${interaction.interaction_id.toLowerCase()}`;
      
      const targetSentence = interaction.targetSentences && interaction.targetSentences[0];
      const expectedResponse = targetSentence ? stripMarkdown(targetSentence.text) : "";
      const audioUrl = targetSentence ? targetSentence.audioUrl : interaction.audio_url;

      const newExercise = {
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
        audioUrl: audioUrl,
        topicName: "Pronunciation"
      };

      // Find and replace the old exercise in the TS file
      // We look for the object with the same ID
      const idPattern = new RegExp(`{\\s*"id":\\s*"${exerciseId}"[\\s\\S]*?}\\n*\\s*,?`, 'g');
      
      const newExerciseStr = JSON.stringify(newExercise, null, 2);
      
      if (idPattern.test(updatedUnitContent)) {
        updatedUnitContent = updatedUnitContent.replace(idPattern, (match) => {
          const hasComma = match.trim().endsWith(',');
          return newExerciseStr + (hasComma ? ',' : '') + '\n  ';
        });
      } else {
        console.log(`Exercise ${exerciseId} not found in unit-${i}.ts`);
      }
    });

    fs.writeFileSync(unitFile, updatedUnitContent);
  }
}

updateUnits().catch(console.error);
