import fs from 'fs';
import path from 'path';

export interface UnitCurriculum {
  unitId: number;
  vocabulary: string[];
  grammar: string[];
}

export function parseCurriculum(filePath: string): Map<number, UnitCurriculum> {
  const content = fs.readFileSync(filePath, 'utf-8');
  const curriculumMap = new Map<number, UnitCurriculum>();
  
  // Split by unit headers
  const unitSections = content.split(/### Unit (\d+):/g);
  
  for (let i = 1; i < unitSections.length; i += 2) {
    const unitId = parseInt(unitSections[i]);
    const sectionBody = unitSections[i + 1];
    
    const vocabMatch = sectionBody.match(/- \*\*Vocabulary\*\*: (.*?)(?:\n|$)/);
    const grammarMatch = sectionBody.match(/- \*\*Grammar\*\*: (.*?)(?:\n|$)/);
    
    const vocabulary = vocabMatch 
      ? vocabMatch[1]
          .replace(/\(.*?\)/g, '') // remove text in parens
          .split(',')
          .map(v => v.replace(/[.()]/g, '').trim()) // remove specific chars and trim
          .filter(v => v.length > 0)
      : [];
      
    const grammar = grammarMatch
      ? grammarMatch[1]
          .replace(/\(.*?\)/g, '') // remove text in parens
          .split(',')
          .map(g => g.replace(/[.()]/g, '').trim()) // remove specific chars and trim
          .filter(g => g.length > 0)
      : [];
      
    curriculumMap.set(unitId, {
      unitId,
      vocabulary,
      grammar
    });
  }
  
  return curriculumMap;
}

// Test if run directly
if (process.argv[1].endsWith('curriculum-parser.ts')) {
  const specPath = path.join(process.cwd(), 'src/content/cursos/ingles-a1/course-specifications.md');
  const curriculum = parseCurriculum(specPath);
  console.log('Parsed Units:', curriculum.size);
  console.log('Unit 1:', curriculum.get(1));
  console.log('Unit 2:', curriculum.get(2));
}
