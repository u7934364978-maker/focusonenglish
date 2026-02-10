import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import { generateExerciseV2 } from '../src/lib/ai/generator-v2';
import { getAllTopics } from '../src/lib/cambridge-curriculum';
import { CEFRLevel, ExerciseType, DifficultyLevel } from '../src/lib/exercise-types';
import { UnitData, PremiumBlock, PremiumInteraction, PremiumOption } from '../src/types/premium-course';

dotenv.config();

const COURSES_PATH = path.join(process.cwd(), 'src/content/cursos');

async function populateUnit(level: CEFRLevel, unitFile: string, force: boolean = false) {
  const filePath = path.join(COURSES_PATH, `ingles-${level.toLowerCase()}`, unitFile);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const unitData: UnitData = JSON.parse(fileContent);

  if (unitData.blocks.length > 0 && !force) {
    console.log(`Skipping ${level} ${unitFile} - already has content.`);
    return;
  }

  console.log(`${force ? 'Forcing update of' : 'Populating'} ${level} ${unitFile}: ${unitData.course.unit_title}`);

  const topics = getAllTopics(level);
  // Pick 3 random topics for the unit
  const unitTopics = [];
  for (let i = 0; i < 3; i++) {
    unitTopics.push(topics[Math.floor(Math.random() * topics.length)]);
  }

  const blocks: PremiumBlock[] = [];

  for (let i = 0; i < unitTopics.length; i++) {
    const topic = unitTopics[i];
    console.log(`  Generating block ${i + 1} for topic: ${topic.name}`);

    // Map curriculum category to suitable exercise types
    let exerciseTypes: ExerciseType[] = ['multiple-choice', 'fill-blank'];
    if (topic.category === 'grammar') {
      exerciseTypes = ['multiple-choice', 'fill-blank', 'key-word-transformation'];
    } else if (topic.category === 'vocabulary') {
      exerciseTypes = ['multiple-choice', 'word-formation', 'multiple-choice-cloze'];
    } else if (topic.category === 'reading') {
      exerciseTypes = ['reading-comprehension', 'multiple-choice-cloze', 'open-cloze'];
    }

    // Filter by level support
    const exerciseType = exerciseTypes[Math.floor(Math.random() * exerciseTypes.length)];

    let success = false;
    let retries = 0;
    const maxRetries = 5;

    while (!success && retries < maxRetries) {
      try {
        // Increase delay between requests to avoid 429
        const delay = retries === 0 ? 5000 : 10000 * retries;
        if (retries > 0) console.log(`    Retry ${retries}/${maxRetries} after ${delay/1000}s delay...`);
        await new Promise(resolve => setTimeout(resolve, delay));
        
        const generated = await generateExerciseV2({
          exerciseType,
          level,
          difficulty: 'medium',
          topic: topic.id
        });

        // REJECT FALLBACKS: We want REAL AI content for this script
        if (generated.isFallback) {
          throw new Error('AI returned a fallback exercise instead of generating new content (likely rate limit or quota exceeded)');
        }

        const interactions: PremiumInteraction[] = mapGeneratedToPremium(generated, level, unitData.course.unit_id, i + 1);

        blocks.push({
          block_id: `B${i + 1}`,
          title: topic.name,
          duration_minutes: 20,
          content: interactions
        });
        success = true;
      } catch (error) {
        retries++;
        console.error(`    Error generating exercise for ${topic.name} (attempt ${retries}):`, error);
        if (retries >= maxRetries) {
          console.error(`    Failed to generate exercise after ${maxRetries} attempts.`);
        }
      }
    }
  }

  unitData.blocks = blocks;
  fs.writeFileSync(filePath, JSON.stringify(unitData, null, 2));
  console.log(`  Successfully populated ${level} ${unitFile}`);
}

function mapGeneratedToPremium(generated: any, level: string, unitId: string, blockIndex: number): PremiumInteraction[] {
  const content = generated.content;
  const interactions: PremiumInteraction[] = [];

  const typeMap: Record<string, string> = {
    'multiple-choice': 'multiple_choice',
    'fill-blank': 'fill_blanks',
    'word-formation': 'fill_blanks',
    'key-word-transformation': 'key_word_transformation',
    'multiple-choice-cloze': 'multiple_choice_cloze',
    'open-cloze': 'fill_blanks',
    'reading-comprehension': 'multiple_choice',
    'gapped-text': 'gapped_text',
    'multiple-matching': 'multiple_matching'
  };

  const type = typeMap[generated.type] || 'multiple_choice';

  if (content.questions && Array.isArray(content.questions)) {
    // If it's a type that uses a shared text with multiple gaps, group them
    const isGroupedType = ['fill_blanks', 'multiple_choice_cloze', 'gapped_text', 'word_formation'].includes(type);

    if (isGroupedType && content.questions.length > 1 && (content.text || (content.questions[0].question && content.questions[0].question.length > 20))) {
      const interactionId = `${level}_${unitId}_B${blockIndex}_I1`;
      const interaction: PremiumInteraction = {
        interaction_id: interactionId,
        type: type,
        prompt_es: generated.instructions || content.instructions || 'Completa el siguiente ejercicio:',
        mastery_tag: `${generated.category}:${generated.topic}`,
      };

      if (content.text) {
        interaction.main_text = content.text;
      } else if (content.questions[0].question && content.questions[0].question.length > 50) {
        // If the first question is very long, it might be the text
        interaction.main_text = content.questions[0].question;
      } else if (content.questions[0].question) {
        // Build main_text from individual questions
        interaction.main_text = content.questions.map((q: any, idx: number) => {
          let qText = q.question;
          const gapFormat = type === 'multiple_choice_cloze' ? `[GAP ${idx + 1}]` : `___`;
          if (qText.includes('___') && !qText.includes(gapFormat)) {
            qText = qText.replace('___', gapFormat);
          } else if (!qText.includes(gapFormat) && !qText.includes('___')) {
            qText += ` ${gapFormat}`;
          }
          return qText;
        }).join('\n\n');
      }

      // Ensure the text has placeholders like [GAP 1] or ___
      if (interaction.main_text) {
        if (type === 'multiple_choice_cloze' || type === 'gapped_text') {
          if (!interaction.main_text.includes('[GAP 1]')) {
            let count = 1;
            interaction.main_text = interaction.main_text.replace(/_{2,}/g, () => `[GAP ${count++}]`);
          }
        } else if (type === 'fill_blanks') {
          // Keep ___ for fill_blanks as expected by PremiumSession.tsx
          interaction.main_text = interaction.main_text.replace(/_{2,}/g, '___');
          // For word-formation, we need to show the base words. We'll append them to main_text or prompt
          if (generated.type === 'word-formation') {
            const baseWords = content.questions.map((q: any, idx: number) => `(${idx + 1}) ${q.baseWord || q.rootWord || q.word}`).join(', ');
            interaction.prompt_es += `\n\nBase words: ${baseWords}`;
          }
        }
      }

      // Final validation for grouped types: must have gaps
      const hasCorrectGapFormat = type === 'multiple_choice_cloze' || type === 'gapped_text' 
        ? interaction.main_text?.includes('[GAP 1]')
        : interaction.main_text?.includes('___');

      if (interaction.main_text && !hasCorrectGapFormat) {
        console.warn(`      Warning: Grouped interaction ${interactionId} missing gaps. Falling back to individual questions.`);
      } else {
        if (type === 'multiple_choice_cloze') {
          interaction.gaps = content.questions.map((q: any, idx: number) => ({
            id: (idx + 1).toString(),
            options: q.options.map((opt: string, i: number) => ({
              id: `o${i + 1}`,
              text: opt
            }))
          }));
          interaction.correct_answer = content.questions.reduce((acc: any, q: any, idx: number) => {
            const correctIdx = q.options.indexOf(q.correctAnswer);
            acc[(idx + 1).toString()] = `o${correctIdx + 1}`;
            return acc;
          }, {});
        } else {
          interaction.correct_answer = content.questions.map((q: any) => q.correctAnswer);
        }
        
        // Combine explanations
        interaction.explanation = content.questions.map((q: any, idx: number) => `(${idx + 1}) ${q.explanation}`).join('\n');
        
        interactions.push(interaction);
        return interactions;
      }
    }

    // Default: one interaction per question
    content.questions.forEach((q: any, idx: number) => {
      const interactionId = `${level}_${unitId}_B${blockIndex}_I${idx + 1}`;
      
      const interaction: PremiumInteraction = {
        interaction_id: interactionId,
        type: type,
        prompt_es: generated.instructions || content.instructions || 'Resuelve el siguiente ejercicio:',
        mastery_tag: `${generated.category}:${generated.topic}`,
        explanation: q.explanation
      };

      if (q.question) interaction.stimulus_en = q.question;
      
      // MANDATORY TEXT for reading/cloze
      const needsText = ['reading-comprehension', 'multiple-choice-cloze', 'open-cloze'].includes(generated.type);
      if (content.text) {
        interaction.stimulus_en = content.text + (q.question ? `\n\n${q.question}` : '');
      } else if (needsText && !interaction.stimulus_en.includes('?') && interaction.stimulus_en.length > 100) {
        // AI might have put the text in stimulus_en
      } else if (needsText) {
        console.warn(`      Warning: Exercise type ${generated.type} needs a text but none was provided.`);
      }

      if (q.options) {
        interaction.options = q.options.map((opt: string, i: number) => ({
          id: `o${i + 1}`,
          text: opt
        }));
        
        const correctIdx = q.options.indexOf(q.correctAnswer);
        if (correctIdx !== -1) {
          interaction.correct_answer = `o${correctIdx + 1}`;
        } else {
          interaction.correct_answer = q.correctAnswer;
        }
      } else if (type === 'multiple_choice') {
        throw new Error(`AI failed to provide options for multiple_choice exercise in ${interactionId}`);
      } else {
        interaction.correct_answer = q.correctAnswer;
      }

      if (q.baseWord) {
        interaction.example = q.baseWord;
        interaction.prompt_es = `Form the correct word from '${q.baseWord}':`;
      }
      if (q.keyWord) {
        interaction.stimulus_en = q.question;
        interaction.prompt_es = `Reescribe la frase usando la palabra clave '${q.keyWord}':`;
        interaction.example = q.keyWord;
        if (q.startOfAnswer) {
          interaction.stimulus_en += `\n\n${q.startOfAnswer} ...`;
        }
      }

      interactions.push(interaction);
    });
  } else if (content.scenario) {
    interactions.push({
      interaction_id: `${level}_${unitId}_B${blockIndex}_I1`,
      type: 'roleplay',
      prompt_es: content.scenario.description,
      stimulus_en: content.scenario.startingMessage,
      mastery_tag: `${generated.category}:${generated.topic}`
    });
  }

  return interactions;
}

async function main() {
  const force = process.argv.includes('--force');
  const levelArg = process.argv.find(arg => ['B1', 'B2', 'C1', 'C2'].includes(arg)) as CEFRLevel;
  
  if (!levelArg) {
    console.error('Usage: npx tsx scripts/populate-course-content.ts <LEVEL> [--force] [limit]');
    process.exit(1);
  }

  const levelDir = path.join(COURSES_PATH, `ingles-${levelArg.toLowerCase()}`);
  const files = fs.readdirSync(levelDir).filter(f => f.startsWith('unit') && f.endsWith('.json'));
  
  // Sort files numerically
  files.sort((a, b) => {
    const numA = parseInt(a.match(/\d+/)?.[0] || '0');
    const numB = parseInt(b.match(/\d+/)?.[0] || '0');
    return numA - numB;
  });

  const limitArg = process.argv.find(arg => !isNaN(parseInt(arg)) && !arg.startsWith('--'));
  const limit = limitArg ? parseInt(limitArg) : files.length;
  
  const unitArg = process.argv.find(arg => arg.startsWith('--unit='));
  const specificUnit = unitArg ? unitArg.split('=')[1] : null;

  for (let i = 0; i < Math.min(files.length, limit); i++) {
    if (specificUnit && files[i] !== `unit${specificUnit}.json`) continue;
    await populateUnit(levelArg, files[i], force);
  }
}

main().catch(console.error);
