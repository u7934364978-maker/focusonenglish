import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const CONTENT_DIR = path.join(ROOT, 'src/content/cursos/ingles-a1');
const REPORTS_DIR = path.join(ROOT, 'reports');

const INTERACTION_COUNT_MIN = 40;
const INTERACTION_COUNT_MAX = 80;
const MC_BIAS_THRESHOLD = 0.40;
const MC_BIAS_MIN_QUESTIONS = 10;

function parseRange(arg) {
  const match = arg?.match(/^--units=(\d+)-(\d+)$/);
  if (match) return { from: parseInt(match[1]), to: parseInt(match[2]) };
  return { from: 1, to: 60 };
}

const rangeArg = process.argv.find(a => a.startsWith('--units='));
const { from: unitFrom, to: unitTo } = parseRange(rangeArg);

const COMPREHENSION_MASTERY_TAGS = new Set(['reading', 'comprehension', 'reading_comprehension']);
const COMPREHENSION_TYPES = new Set([
  'true_false', 'true-false', 'multiple_choice', 'multiple-choice',
  'short_writing', 'open_answer', 'fill-blank', 'fill_blank'
]);

function hasTranslationToken(text) {
  if (typeof text !== 'string') return false;
  return /\[\[.+?\|.+?\]\]/.test(text);
}

function containsEnglishContent(text) {
  if (typeof text !== 'string' || text.trim() === '') return false;
  const latinWordPattern = /\b[a-zA-Z]{2,}\b/;
  return latinWordPattern.test(text);
}

function checkTranslationCoverage(interaction) {
  const issues = [];
  const fieldsToCheck = [];

  if (interaction.prompt_es) fieldsToCheck.push({ field: 'prompt_es', value: interaction.prompt_es });

  if (interaction.options) {
    interaction.options.forEach((opt, idx) => {
      fieldsToCheck.push({ field: `options[${idx}].text`, value: opt.text });
    });
  }

  if (interaction.pairs) {
    interaction.pairs.forEach((pair, idx) => {
      fieldsToCheck.push({ field: `pairs[${idx}].left`, value: pair.left });
    });
  }

  if (interaction.transcript) fieldsToCheck.push({ field: 'transcript', value: interaction.transcript });

  const englishFields = fieldsToCheck.filter(f => containsEnglishContent(f.value));
  const coveredFields = englishFields.filter(f => hasTranslationToken(f.value));

  if (englishFields.length > 0 && coveredFields.length === 0) {
    issues.push({
      code: 'FIX-1',
      severity: 'warning',
      message: `No [[English|Spanish]] translation tokens found in any English-content fields`,
      fields: englishFields.map(f => f.field)
    });
  }

  return issues;
}

function checkSentenceBuilding(interaction) {
  const issues = [];
  if (interaction.type !== 'sentence-building') return issues;

  const options = interaction.options || [];
  const correctAnswer = interaction.correct_answer;

  if (!Array.isArray(correctAnswer) || options.length === 0) return issues;

  const optionIds = options.map(o => o.id);
  const isIdenticalOrder = correctAnswer.every((id, idx) => id === optionIds[idx]);

  if (isIdenticalOrder && correctAnswer.length > 1) {
    issues.push({
      code: 'FIX-2',
      severity: 'error',
      message: `correct_answer order matches options array order exactly — likely incorrect`,
      correct_answer: correctAnswer,
      options_order: optionIds
    });
  }

  return issues;
}

function checkMatching(interaction) {
  const issues = [];
  if (interaction.type !== 'matching') return issues;

  const correctAnswer = interaction.correct_answer;
  if (!correctAnswer || typeof correctAnswer !== 'object' || Array.isArray(correctAnswer)) return issues;

  const entries = Object.entries(correctAnswer);
  if (entries.length === 0) return issues;

  const allIdentity = entries.every(([key, val]) => key === val);
  if (allIdentity) {
    issues.push({
      code: 'FIX-3',
      severity: 'error',
      message: `All matching pairs map pN→pN (trivial/non-shuffled answer key)`,
      correct_answer: correctAnswer
    });
  }

  return issues;
}

function checkReadingPhase(block) {
  const issues = [];
  const content = block.content || [];

  for (let i = 0; i < content.length; i++) {
    const interaction = content[i];
    const isComprehensionType = COMPREHENSION_TYPES.has(interaction.type);
    const isReadingMastery = COMPREHENSION_MASTERY_TAGS.has(interaction.mastery_tag);

    if (isComprehensionType && isReadingMastery) {
      const precedingContent = content.slice(0, i);
      const hasReadingPhase = precedingContent.some(p => p.type === 'reading_phase');

      if (!hasReadingPhase) {
        issues.push({
          code: 'FIX-4',
          severity: 'error',
          message: `Block "${block.block_id}" (${block.title}) has comprehension question "${interaction.interaction_id}" without a preceding reading_phase interaction`,
          block_id: block.block_id,
          first_comprehension_id: interaction.interaction_id
        });
        break;
      }
    }
  }

  return issues;
}

function checkDuplicateIds(allInteractions) {
  const issues = [];
  const seen = new Map();

  for (const { interaction, blockId } of allInteractions) {
    const id = interaction.interaction_id;
    if (!id) continue;

    if (seen.has(id)) {
      issues.push({
        code: 'FIX-5',
        severity: 'error',
        message: `Duplicate interaction_id "${id}" found in block "${blockId}" (first seen in "${seen.get(id)}")`,
        duplicate_id: id,
        first_block: seen.get(id),
        duplicate_block: blockId
      });
    } else {
      seen.set(id, blockId);
    }
  }

  return issues;
}

function checkMcDistribution(allInteractions) {
  const issues = [];
  const mcQuestions = allInteractions.filter(({ interaction }) => {
    return interaction.type === 'multiple-choice' || interaction.type === 'multiple_choice';
  });

  if (mcQuestions.length < MC_BIAS_MIN_QUESTIONS) return issues;

  const correctAnswerCounts = {};
  for (const { interaction } of mcQuestions) {
    const answer = interaction.correct_answer;
    if (typeof answer === 'string') {
      correctAnswerCounts[answer] = (correctAnswerCounts[answer] || 0) + 1;
    }
  }

  const total = mcQuestions.length;
  for (const [optionId, count] of Object.entries(correctAnswerCounts)) {
    const ratio = count / total;
    if (ratio > MC_BIAS_THRESHOLD) {
      issues.push({
        code: 'FIX-6',
        severity: 'warning',
        message: `Option "${optionId}" is the correct answer in ${count}/${total} MC questions (${Math.round(ratio * 100)}%) — exceeds ${Math.round(MC_BIAS_THRESHOLD * 100)}% threshold`,
        option_id: optionId,
        count,
        total,
        ratio: Math.round(ratio * 100) / 100
      });
    }
  }

  return issues;
}

function checkInteractionCount(count) {
  if (count < INTERACTION_COUNT_MIN) {
    return [{
      code: 'FIX-7',
      severity: 'error',
      message: `Unit has ${count} interactions — below minimum of ${INTERACTION_COUNT_MIN}`,
      count
    }];
  }
  if (count > INTERACTION_COUNT_MAX) {
    return [{
      code: 'FIX-8',
      severity: 'warning',
      message: `Unit has ${count} interactions — exceeds maximum of ${INTERACTION_COUNT_MAX} (review for duplicates)`,
      count
    }];
  }
  return [];
}

function auditUnit(unitNumber) {
  const filePath = path.join(CONTENT_DIR, `unit${unitNumber}.json`);
  const result = {
    unit: unitNumber,
    file: `unit${unitNumber}.json`,
    issues: [],
    stats: {
      interaction_count: 0,
      block_count: 0,
      types: {}
    }
  };

  if (!fs.existsSync(filePath)) {
    result.issues.push({
      code: 'MISSING',
      severity: 'error',
      message: `File unit${unitNumber}.json not found`
    });
    return result;
  }

  let data;
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    data = JSON.parse(raw);
  } catch (err) {
    result.issues.push({
      code: 'PARSE_ERROR',
      severity: 'error',
      message: `JSON parse error: ${err.message}`
    });
    return result;
  }

  const blocks = data.blocks || [];
  result.stats.block_count = blocks.length;

  const allInteractions = [];

  for (const block of blocks) {
    const content = block.content || [];

    const blockReadingIssues = checkReadingPhase(block);
    result.issues.push(...blockReadingIssues);

    for (const interaction of content) {
      allInteractions.push({ interaction, blockId: block.block_id });

      const type = interaction.type;
      result.stats.types[type] = (result.stats.types[type] || 0) + 1;

      result.issues.push(...checkTranslationCoverage(interaction));
      result.issues.push(...checkSentenceBuilding(interaction));
      result.issues.push(...checkMatching(interaction));
    }
  }

  result.stats.interaction_count = allInteractions.length;

  result.issues.push(...checkDuplicateIds(allInteractions));
  result.issues.push(...checkMcDistribution(allInteractions));
  result.issues.push(...checkInteractionCount(allInteractions.length));

  return result;
}

function summarize(unitResults) {
  const summary = {
    units_audited: unitResults.length,
    units_with_errors: 0,
    units_with_warnings: 0,
    units_clean: 0,
    total_issues: 0,
    issues_by_code: {}
  };

  for (const unit of unitResults) {
    const errors = unit.issues.filter(i => i.severity === 'error');
    const warnings = unit.issues.filter(i => i.severity === 'warning');

    if (errors.length > 0) summary.units_with_errors++;
    else if (warnings.length > 0) summary.units_with_warnings++;
    else summary.units_clean++;

    summary.total_issues += unit.issues.length;

    for (const issue of unit.issues) {
      summary.issues_by_code[issue.code] = (summary.issues_by_code[issue.code] || 0) + 1;
    }
  }

  return summary;
}

function main() {
  console.log(`Auditing A1 units ${unitFrom}–${unitTo}...`);

  const unitResults = [];

  for (let n = unitFrom; n <= unitTo; n++) {
    const result = auditUnit(n);
    unitResults.push(result);

    const errors = result.issues.filter(i => i.severity === 'error').length;
    const warnings = result.issues.filter(i => i.severity === 'warning').length;
    const status = errors > 0 ? '❌' : warnings > 0 ? '⚠️ ' : '✅';
    console.log(`  ${status} Unit ${n}: ${result.stats.interaction_count} interactions, ${errors} errors, ${warnings} warnings`);
  }

  const summary = summarize(unitResults);

  const report = {
    generated_at: new Date().toISOString(),
    range: { from: unitFrom, to: unitTo },
    summary,
    units: unitResults
  };

  if (!fs.existsSync(REPORTS_DIR)) {
    fs.mkdirSync(REPORTS_DIR, { recursive: true });
  }

  const reportPath = path.join(REPORTS_DIR, 'audit-report-full.json');
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');

  console.log(`\nSummary:`);
  console.log(`  Units audited: ${summary.units_audited}`);
  console.log(`  With errors:   ${summary.units_with_errors}`);
  console.log(`  With warnings: ${summary.units_with_warnings}`);
  console.log(`  Clean:         ${summary.units_clean}`);
  console.log(`  Total issues:  ${summary.total_issues}`);
  console.log(`\nIssues by code:`);
  for (const [code, count] of Object.entries(summary.issues_by_code)) {
    console.log(`  ${code}: ${count}`);
  }
  console.log(`\nReport saved to: ${reportPath}`);

  const hasErrors = unitResults.some(r => r.issues.some(i => i.severity === 'error'));
  process.exit(hasErrors ? 1 : 0);
}

main();
