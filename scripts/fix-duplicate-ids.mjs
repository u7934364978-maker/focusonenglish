#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courseDataPath = path.join(__dirname, '../lib/course-data-b2.ts');
let content = fs.readFileSync(courseDataPath, 'utf-8');

const lines = content.split('\n');
const exerciseIdPattern = /^\s+id:\s*'(b2-[^']+)',/;
const shortIdPattern = /^(\s+)id:\s*'([^']+)',/;

let currentExerciseId = null;
let fixedCount = 0;
const seenIds = new Set();

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const exerciseMatch = line.match(exerciseIdPattern);
  if (exerciseMatch) {
    currentExerciseId = exerciseMatch[1];
  }
  
  const idMatch = line.match(shortIdPattern);
  if (idMatch && currentExerciseId) {
    const indent = idMatch[1];
    const id = idMatch[2];
    
    if (!id.startsWith('b2-') && !id.includes('-')) {
      const newId = `${currentExerciseId}-${id}`;
      
      lines[i] = `${indent}id: '${newId}',`;
      fixedCount++;
      console.log(`Fixed: ${id} -> ${newId}`);
    } else if (id.startsWith('b2-') && id.match(/-q\d+$/)) {
      if (seenIds.has(id)) {
        const counter = Array.from(seenIds).filter(existingId => existingId.startsWith(id)).length;
        const newId = `${id}-${counter + 1}`;
        lines[i] = `${indent}id: '${newId}',`;
        seenIds.add(newId);
        fixedCount++;
        console.log(`Fixed duplicate: ${id} -> ${newId}`);
      } else {
        seenIds.add(id);
      }
    }
  }
}

const newContent = lines.join('\n');
fs.writeFileSync(courseDataPath, newContent, 'utf-8');

console.log(`\n✅ Fixed ${fixedCount} short/duplicate IDs`);
