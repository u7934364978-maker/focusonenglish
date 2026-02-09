import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

function getFilesRecursively(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(getFilesRecursively(file));
    } else if (file.endsWith('.json')) {
      results.push(file);
    }
  });
  return results;
}

test.describe('Content Quality Audit', () => {
  const baseDir = path.join(process.cwd(), 'src/content/cursos');
  const files = getFilesRecursively(baseDir);

  test('should have no trivial exercises in B1+ levels', async () => {
    let trivialFound = 0;
    const trivialList: string[] = [];

    for (const file of files) {
      if (file.includes('syllabus.md')) continue;
      
      const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
      const level = content.course?.level?.toUpperCase() || 'A1';
      
      if (['B1', 'B2', 'C1', 'C2'].includes(level)) {
        for (const block of content.blocks || []) {
          for (const ex of block.content || []) {
            if (ex.complexity === 1) {
              trivialFound++;
              trivialList.push(`${ex.interaction_id} in ${path.basename(file)}`);
            }
          }
        }
      }
    }

    if (trivialFound > 0) {
      console.error('Found trivial exercises:', trivialList.slice(0, 10));
    }
    expect(trivialFound, `Found ${trivialFound} trivial exercises in B1+ levels`).toBe(0);
  });

  test('should have no duplicate exercises across all units', async () => {
    const signatures = new Map<string, string>();
    let duplicatesFound = 0;
    const duplicateList: string[] = [];

    for (const file of files) {
      if (file.includes('syllabus.md')) continue;
      
      const content = JSON.parse(fs.readFileSync(file, 'utf-8'));
      
      for (const block of content.blocks || []) {
        for (const ex of block.content || []) {
          const type = ex.type || '';
          const prompt = (ex.prompt_es || '').trim();
          const stimulus = (ex.stimulus_en || ex.stimulus_es || '').trim();
          const answer = typeof ex.correct_answer === 'object' ? JSON.stringify(ex.correct_answer) : String(ex.correct_answer);
          
          const signature = `${type}|${prompt}|${stimulus}|${answer}`;
          
          if (signatures.has(signature)) {
            duplicatesFound++;
            duplicateList.push(`${ex.interaction_id} duplicates ${signatures.get(signature)}`);
          } else {
            signatures.set(signature, ex.interaction_id);
          }
        }
      }
    }

    if (duplicatesFound > 0) {
      console.error('Found duplicates:', duplicateList.slice(0, 10));
    }
    expect(duplicatesFound, `Found ${duplicatesFound} duplicate exercises`).toBe(0);
  });
});
