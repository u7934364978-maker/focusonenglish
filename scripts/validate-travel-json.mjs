#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_DIR = path.join(__dirname, '..', 'src', 'content', 'cursos', 'viajes', 'a1');

const errors = [];
let totalFiles = 0;
let totalExercises = 0;

function reportIssue(file, interactionId, field, issue, severity = 'error') {
  errors.push({ file, interactionId, field, issue, severity });
}

function validateInteraction(file, interaction) {
  const id = interaction.interaction_id || 'unknown';
  totalExercises++;

  if (!interaction.type) reportIssue(file, id, 'type', 'Missing type');
  if (!interaction.prompt_es) reportIssue(file, id, 'prompt_es', 'Missing prompt_es');
  
  if (interaction.type === 'multiple_choice') {
    if (!interaction.options || !Array.isArray(interaction.options) || interaction.options.length < 2) {
      reportIssue(file, id, 'options', 'Invalid or missing options');
    }
    if (!interaction.correct_answer) reportIssue(file, id, 'correct_answer', 'Missing correct_answer');
  } else if (interaction.type === 'matching') {
    if (!interaction.pairs || !Array.isArray(interaction.pairs) || interaction.pairs.length === 0) {
      reportIssue(file, id, 'pairs', 'Invalid or missing pairs');
    }
  } else if (interaction.type === 'transformation') {
    if (!interaction.stimulus_en) reportIssue(file, id, 'stimulus_en', 'Missing stimulus_en');
    if (!interaction.correct_answer) reportIssue(file, id, 'correct_answer', 'Missing correct_answer');
  } else if (interaction.type === 'reorder_words') {
    if (!interaction.options || !Array.isArray(interaction.options) || interaction.options.length === 0) {
      reportIssue(file, id, 'options', 'Invalid or missing options');
    }
    if (!interaction.correct_answer || !Array.isArray(interaction.correct_answer)) {
      reportIssue(file, id, 'correct_answer', 'Invalid or missing correct_answer');
    }
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.json')) {
      validateFile(filePath);
    }
  }
}

function validateFile(filePath) {
  totalFiles++;
  const relativePath = path.relative(BASE_DIR, filePath);
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    if (!data.course || !data.blocks) {
      reportIssue(relativePath, 'FILE', 'structure', 'Missing course or blocks');
      return;
    }
    data.blocks.forEach(block => {
      if (!block.content || !Array.isArray(block.content)) {
        reportIssue(relativePath, block.block_id, 'content', 'Missing or invalid content array');
        return;
      }
      block.content.forEach(interaction => validateInteraction(relativePath, interaction));
    });
  } catch (e) {
    reportIssue(relativePath, 'FILE', 'json', `JSON Parse Error: ${e.message}`);
  }
}

console.log(`🔍 Validating Travel A1 JSON files in: ${BASE_DIR}\n`);

if (!fs.existsSync(BASE_DIR)) {
  console.error(`❌ Error: Directory not found: ${BASE_DIR}`);
  process.exit(1);
}

walkDir(BASE_DIR);

console.log('=' .repeat(80));
console.log(`Total Files Validated: ${totalFiles}`);
console.log(`Total Exercises Validated: ${totalExercises}`);
console.log(`Total Issues Found: ${errors.length}`);

if (errors.length > 0) {
  console.log('\n📋 DETAILED REPORT (First 20 issues):\n');
  errors.slice(0, 20).forEach(err => {
    console.log(`[${err.severity.toUpperCase()}] ${err.file} | ${err.interactionId} | ${err.field}: ${err.issue}`);
  });
  if (errors.length > 20) console.log(`\n... and ${errors.length - 20} more issues.`);
  process.exit(1);
} else {
  console.log('\n✅ All files are valid!');
  process.exit(0);
}
