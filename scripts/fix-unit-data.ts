
import * as fs from 'fs';
import * as path from 'path';

const UNIT_ID = 'unit-1';
const JSON_ID = 'unit1';
const JSON_PATH = path.join(process.cwd(), 'src/content/cursos/ingles-a1', `${JSON_ID}.json`);
const TS_PATH = path.join(process.cwd(), 'src/lib/course/a1', `${UNIT_ID}.ts`);

if (!fs.existsSync(JSON_PATH)) {
  console.error(`JSON file not found: ${JSON_PATH}`);
  process.exit(1);
}

const unitData = JSON.parse(fs.readFileSync(JSON_PATH, 'utf-8'));

function mapInteraction(interaction: any, blockTitle: string) {
  const common = {
    id: interaction.interaction_id,
    level: 'A1',
    topic: blockTitle,
    topicName: blockTitle,
    audioUrl: `audio/a1/${UNIT_ID}/${interaction.interaction_id}.mp3`,
  };

  if (interaction.type === 'matching') {
    return {
      ...common,
      type: 'matching',
      content: {
        title: blockTitle,
        instructions: interaction.prompt_es,
        pairs: interaction.pairs.map((p: any) => ({
          id: p.id,
          left: p.left,
          right: p.right
        })),
        explanation: interaction.explanation
      }
    };
  }

  if (interaction.type === 'multiple_choice') {
    const options = interaction.options.map((o: any) => o.text);
    const correctIdx = interaction.options.findIndex((o: any) => o.id === interaction.correct_answer);
    
    return {
      ...common,
      type: 'multiple-choice',
      content: {
        title: blockTitle,
        instructions: interaction.prompt_es,
        questions: [
          {
            question: interaction.stimulus_en || interaction.prompt_es,
            options: options,
            correctAnswer: correctIdx,
            explanation: interaction.explanation
          }
        ]
      }
    };
  }

  if (interaction.type === 'reorder_words') {
    const words = interaction.correct_answer.map((id: string) => {
      const option = interaction.options.find((o: any) => o.id === id);
      return option ? option.text : '';
    });
    
    return {
      ...common,
      type: 'sentence-building',
      content: {
        title: blockTitle,
        instructions: interaction.prompt_es,
        correctSentence: words.join(' '),
        words: words.sort(() => Math.random() - 0.5), // Shuffled words for the UI
        explanation: interaction.explanation,
        translation: interaction.prompt_es.replace('Ordena la frase: ', '').replace(/"/g, '')
      }
    };
  }

  // Fallback for other types if any
  return {
    ...common,
    type: interaction.type,
    content: interaction
  };
}

const allExercises: any[] = [];
unitData.blocks.forEach((block: any) => {
  block.content.forEach((interaction: any) => {
    allExercises.push(mapInteraction(interaction, block.title));
  });
});

const tsContent = `
import { Exercise } from '@/lib/exercise-generator';

export const UNIT_1_EXERCISES: Exercise[] = ${JSON.stringify(allExercises, null, 2)};
`;

fs.writeFileSync(TS_PATH, tsContent);
console.log(`Successfully updated ${TS_PATH} with ${allExercises.length} exercises.`);
