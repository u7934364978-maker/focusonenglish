import Ajv from 'ajv/dist/2020.js';
import addFormats from 'ajv-formats';
import fs from 'fs';
import path from 'path';

const ajv = new Ajv({ allErrors: true, verbose: true });
addFormats(ajv);

const schemaPath = path.resolve('schemas/week.schema.json');
const schema = JSON.parse(fs.readFileSync(schemaPath, 'utf-8'));
const validate = ajv.compile(schema);

function validateWeekFile(filePath) {
  console.log(`Validating ${filePath}...`);
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

  const valid = validate(data);

  if (!valid) {
    console.error(`❌ Schema validation failed for ${filePath}:`);
    validate.errors.forEach(err => {
      console.error(`  - ${err.instancePath || 'root'}: ${err.message}`);
      if (err.params) console.error(`    Params: ${JSON.stringify(err.params)}`);
    });
    return false;
  }

  console.log(`✅ Schema validation passed for ${filePath}`);

  // Semantic validations
  const semanticErrors = [];
  
  const itemBankIds = new Set(data.itemBank.map(q => q.id));
  const assetIds = new Set(data.assets.map(a => a.id));
  const templateIds = new Set(data.templates.map(t => t.id));
  const allIds = new Set();

  // Check for duplicate IDs across everything
  [...data.itemBank, ...data.assets, ...data.templates].forEach(item => {
    if (allIds.has(item.id)) {
      semanticErrors.push(`Duplicate ID found: ${item.id}`);
    }
    allIds.add(item.id);
  });

  data.week.days.forEach(day => {
    let dayMinutes = 0;
    day.activities.forEach(activity => {
      dayMinutes += activity.minutes;

      // Check questionIds
      if (activity.questionIds) {
        activity.questionIds.forEach(qId => {
          if (!itemBankIds.has(qId)) {
            semanticErrors.push(`Activity ${activity.id} references non-existent questionId: ${qId}`);
          }
        });
      }

      // Check assetId
      if (activity.assetId && !assetIds.has(activity.assetId)) {
        semanticErrors.push(`Activity ${activity.id} references non-existent assetId: ${activity.assetId}`);
      }

      // Check templateId
      if (activity.templateId && !templateIds.has(activity.templateId)) {
        semanticErrors.push(`Activity ${activity.id} references non-existent templateId: ${activity.templateId}`);
      }
    });

    if (dayMinutes < 25 || dayMinutes > 35) {
      console.warn(`⚠️ Warning: Day ${day.id} total minutes (${dayMinutes}) is outside recommended range (25-35)`);
    }
  });

  if (semanticErrors.length > 0) {
    console.error(`❌ Semantic validation failed for ${filePath}:`);
    semanticErrors.forEach(err => console.error(`  - ${err}`));
    return false;
  }

  console.log(`✅ Semantic validation passed for ${filePath}`);
  return true;
}

const args = process.argv.slice(2);
if (args.length === 0) {
  console.error('Usage: node scripts/validate-week.mjs <file1.json> <file2.json> ...');
  process.exit(1);
}

let allPassed = true;
args.forEach(file => {
  if (!validateWeekFile(file)) {
    allPassed = false;
  }
});

if (!allPassed) {
  process.exit(1);
}
