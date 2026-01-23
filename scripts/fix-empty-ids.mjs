#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courseDataPath = path.join(__dirname, '../lib/course-data-b2.ts');
let content = fs.readFileSync(courseDataPath, 'utf-8');

const lines = content.split('\n');
const exerciseIdPattern = /^\s+id:\s*'([^']+)',/;
const emptyIdPattern = /^(\s+)id:\s*'',/;
const questionIndexPattern = /^\s+questions:\s*\[/;
const transformationsIndexPattern = /^\s+transformations:\s*\[/;
const formationsIndexPattern = /^\s+formations:\s*\[/;
const gapsIndexPattern = /^\s+gaps:\s*\[/;

let currentExerciseId = null;
let inQuestionsArray = false;
let inTransformationsArray = false;
let inFormationsArray = false;
let inGapsArray = false;
let questionCounter = 0;
let transformationCounter = 0;
let formationCounter = 0;
let gapCounter = 0;
let fixedCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  const exerciseMatch = line.match(exerciseIdPattern);
  if (exerciseMatch && !line.includes("id: '',")) {
    const potentialId = exerciseMatch[1];
    if (potentialId.includes('-') && potentialId.startsWith('b2-')) {
      currentExerciseId = potentialId;
      inQuestionsArray = false;
      inTransformationsArray = false;
      inFormationsArray = false;
      inGapsArray = false;
      questionCounter = 0;
      transformationCounter = 0;
      formationCounter = 0;
      gapCounter = 0;
    }
  }
  
  if (questionIndexPattern.test(line)) {
    inQuestionsArray = true;
    inTransformationsArray = false;
    inFormationsArray = false;
    inGapsArray = false;
    questionCounter = 0;
  }
  
  if (transformationsIndexPattern.test(line)) {
    inTransformationsArray = true;
    inQuestionsArray = false;
    inFormationsArray = false;
    inGapsArray = false;
    transformationCounter = 0;
  }
  
  if (formationsIndexPattern.test(line)) {
    inFormationsArray = true;
    inQuestionsArray = false;
    inTransformationsArray = false;
    inGapsArray = false;
    formationCounter = 0;
  }
  
  if (gapsIndexPattern.test(line)) {
    inGapsArray = true;
    inQuestionsArray = false;
    inTransformationsArray = false;
    inFormationsArray = false;
    gapCounter = 0;
  }
  
  const emptyIdMatch = line.match(emptyIdPattern);
  if (emptyIdMatch && currentExerciseId) {
    const indent = emptyIdMatch[1];
    let newId;
    
    if (inQuestionsArray) {
      questionCounter++;
      newId = `${currentExerciseId}-q${questionCounter}`;
    } else if (inTransformationsArray) {
      transformationCounter++;
      newId = `${currentExerciseId}-t${transformationCounter}`;
    } else if (inFormationsArray) {
      formationCounter++;
      newId = `${currentExerciseId}-f${formationCounter}`;
    } else if (inGapsArray) {
      gapCounter++;
      newId = `${currentExerciseId}-g${gapCounter}`;
    } else {
      questionCounter++;
      newId = `${currentExerciseId}-q${questionCounter}`;
    }
    
    lines[i] = `${indent}id: '${newId}',`;
    fixedCount++;
    console.log(`Fixed: ${newId}`);
  }
  
  if (line.trim() === '],') {
    if (inQuestionsArray || inTransformationsArray || inFormationsArray || inGapsArray) {
      const nextLine = lines[i + 1];
      if (!nextLine || !nextLine.includes(':')) {
        inQuestionsArray = false;
        inTransformationsArray = false;
        inFormationsArray = false;
        inGapsArray = false;
      }
    }
  }
}

const newContent = lines.join('\n');
fs.writeFileSync(courseDataPath, newContent, 'utf-8');

console.log(`\n✅ Fixed ${fixedCount} empty IDs`);
