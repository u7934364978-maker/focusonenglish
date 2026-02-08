import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const UNITS_DIR = path.join(__dirname, '..', 'src', 'content', 'cursos', 'ingles-a1');

const getTypeComplexity = (type) => {
  switch (type) {
    case 'multiple_choice':
    case 'true_false':
    case 'matching':
      return 1;
    case 'reorder_words':
    case 'categorization':
      return 2;
    case 'fill_blanks':
    case 'multiple_choice_cloze':
    case 'audio_player':
      return 3;
    case 'short_writing':
    case 'reading-comprehension':
    case 'flashcard':
      return 4;
    default:
      return 2;
  }
};

const getTagsFromMastery = (mastery_tag) => {
  if (!mastery_tag) return ['general'];
  const parts = mastery_tag.split(':');
  return ['grammar', ...parts];
};

const processFile = (filePath) => {
  const content = fs.readFileSync(filePath, 'utf-8');
  const unit = JSON.parse(content);
  let modified = false;

  unit.blocks.forEach(block => {
    block.content.forEach(interaction => {
      if (interaction.complexity === undefined) {
        interaction.complexity = getTypeComplexity(interaction.type);
        modified = true;
      }
      if (!interaction.concept_tags) {
        interaction.concept_tags = getTagsFromMastery(interaction.mastery_tag);
        modified = true;
      }
    });
  });

  if (modified) {
    fs.writeFileSync(filePath, JSON.stringify(unit, null, 2));
    console.log(`✅ Updated ${path.basename(filePath)}`);
  }
};

const main = () => {
  const files = fs.readdirSync(UNITS_DIR).filter(f => f.endsWith('.json'));
  files.forEach(file => {
    processFile(path.join(UNITS_DIR, file));
  });
};

main();
