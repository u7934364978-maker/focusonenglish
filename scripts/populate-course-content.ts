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
    'word-formation': 'word_formation',
    'key-word-transformation': 'key_word_transformation',
    'multiple-choice-cloze': 'cloze',
    'open-cloze': 'cloze',
    'reading-comprehension': 'reading_comprehension',
    'gapped-text': 'cloze',
    'multiple-matching': 'matching'
  };

  const type = typeMap[generated.type] || 'multiple_choice';

  if (content.questions && Array.isArray(content.questions)) {
    // If it's a type that uses a shared text with multiple gaps, group them
    const isGroupedType = ['fill_blanks', 'cloze', 'word_formation', 'reading_comprehension'].includes(type);

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
      } else if (content.questions[0].question) {
        // Build main_text from individual questions
        interaction.main_text = content.questions.map((q: any, idx: number) => {
          let qText = q.question;
          if (qText.includes('___') && !qText.includes(`(${idx + 1})___`)) {
            qText = qText.replace('___', `(${idx + 1})___`);
          } else if (!qText.includes('___')) {
            qText += ` (${idx + 1})___`;
          }
          return qText;
        }).join('\n\n');
      }

      // Ensure the text has placeholders like (1)___ if it only has ___
      if (interaction.main_text && (interaction.main_text.includes('___') || interaction.main_text.includes('__')) && !interaction.main_text.includes('(1)___')) {
        let count = 1;
        // Replace sequences of underscores (2 or more) with numbered gaps
        interaction.main_text = interaction.main_text.replace(/_{2,}/g, () => `(${count++})___`);
      } else if (interaction.main_text && !interaction.main_text.includes('___') && !interaction.main_text.includes('__') && content.questions && content.questions.every((q: any) => q.correctAnswer)) {
        // If no gaps at all, but we have answers, try to find the answers in the text and replace them
        let modifiedText = interaction.main_text;
        content.questions.forEach((q: any, idx: number) => {
          const ans = q.correctAnswer;
          if (!ans) return;
          const escapedAns = ans.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
          const regex = new RegExp(`\\b${escapedAns}\\b`, 'i');
          if (regex.test(modifiedText)) {
            modifiedText = modifiedText.replace(regex, `(${idx + 1})___`);
          }
        });
        interaction.main_text = modifiedText;
      }

      // Final validation for grouped types: must have gaps
      if (interaction.main_text && !interaction.main_text.includes('(1)___')) {
        console.warn(`      Warning: Grouped interaction ${interactionId} missing gaps. Falling back to individual questions.`);
      } else {
        interaction.correct_answer = content.questions.map((q: any) => q.correctAnswer);
        if (type === 'word_formation') {
          // Word formation needs the base words in order
          interaction.example = content.questions.map((q: any) => q.baseWord || q.rootWord || q.word).filter(Boolean).join(', ');
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
      if (content.text && !interaction.stimulus_en) interaction.main_text = content.text;
      if (content.text && interaction.stimulus_en) interaction.main_text = content.text;

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
      } else {
        interaction.correct_answer = q.correctAnswer;
      }

      if (q.baseWord) interaction.example = q.baseWord;
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
  
  for (let i = 0; i < Math.min(files.length, limit); i++) {
    await populateUnit(levelArg, files[i], force);
  }
}

main().catch(console.error);
