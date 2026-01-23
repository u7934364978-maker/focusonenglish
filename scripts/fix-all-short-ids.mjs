#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courseDataPath = path.join(__dirname, '../lib/course-data-b2.ts');
let content = fs.readFileSync(courseDataPath, 'utf-8');

const exerciseIdPattern = /^\s+id:\s*'(b2-[^']+)',/;
const shortIdInlinePattern = /id:\s*'([a-z]+\d+|gap-\d+)'/g;
const shortIdBlockPattern = /^(\s+)id:\s*'([a-z]+\d+|gap-\d+)',$/;

const lines = content.split('\n');
let currentExerciseId = null;
let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const exerciseMatch = line.match(exerciseIdPattern);
  if (exerciseMatch) {
    currentExerciseId = exerciseMatch[1];
    continue;
  }
  
  if (currentExerciseId) {
    const blockMatch = line.match(shortIdBlockPattern);
    if (blockMatch) {
      const indent = blockMatch[1];
      const shortId = blockMatch[2];
      const newId = `${currentExerciseId}-${shortId}`;
      lines[i] = `${indent}id: '${newId}',`;
      fixedCount++;
      console.log(`Fixed block: ${shortId} -> ${newId}`);
      continue;
    }
    
    if (line.includes('id:') && !line.match(/^\s+id:\s*'b2-/)) {
      const newLine = line.replace(shortIdInlinePattern, (match, shortId) => {
        if (shortId.startsWith('b2-')) {
          return match;
        }
        const newId = `${currentExerciseId}-${shortId}`;
        fixedCount++;
        console.log(`Fixed inline: ${shortId} -> ${newId}`);
        return `id: '${newId}'`;
      });
      if (newLine !== line) {
        lines[i] = newLine;
      }
    }
  }
}

const newContent = lines.join('\n');
fs.writeFileSync(courseDataPath, newContent, 'utf-8');

console.log(`\n✅ Fixed ${fixedCount} short IDs`);
