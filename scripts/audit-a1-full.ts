import fs from 'fs';
import path from 'path';
import { parseCurriculum, UnitCurriculum } from './curriculum-parser';

interface AuditResult {
  unitId: number;
  exerciseCount: number;
  missingVocabulary: string[];
  missingGrammar: string[];
  translationErrors: string[];
  qualityWarnings: string[];
  errors: string[];
}

function auditUnit(unitId: number, curriculum: UnitCurriculum | undefined): AuditResult {
  const filePath = path.join(process.cwd(), `src/content/cursos/ingles-a1/unit${unitId}.json`);
  const result: AuditResult = {
    unitId,
    exerciseCount: 0,
    missingVocabulary: [],
    missingGrammar: [],
    translationErrors: [],
    qualityWarnings: [],
    errors: []
  };

  if (!fs.existsSync(filePath)) {
    result.errors.push(`File not found: unit${unitId}.json`);
    return result;
  }

  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const exercises: any[] = [];
  data.blocks?.forEach((block: any) => {
    block.content?.forEach((ex: any) => {
      exercises.push(ex);
    });
  });

  result.exerciseCount = exercises.length;
  if (result.exerciseCount !== 75) {
    result.errors.push(`Invalid exercise count: ${result.exerciseCount} (expected 75)`);
  }

  const fullText = JSON.stringify(data).toLowerCase();
  
  // 1. Vocabulary & Grammar Coverage
  if (curriculum) {
    curriculum.vocabulary.forEach(word => {
      if (!fullText.includes(word.toLowerCase())) {
        result.missingVocabulary.push(word);
      }
    });
    curriculum.grammar.forEach(point => {
      if (!fullText.includes(point.toLowerCase())) {
        result.missingGrammar.push(point);
      }
    });
  }

  // 2. Translation & Quality Checks
  exercises.forEach((ex, index) => {
    const exText = JSON.stringify(ex);
    
    // Check for translations in specific user-facing English fields
    const userFacingFields = ['stimulus_en', 'text', 'transcript', 'text_en', 'referenceText'];
    userFacingFields.forEach(field => {
      if (ex[field] && typeof ex[field] === 'string') {
        const content = ex[field].trim();
        if (content && !content.includes('[[') && !content.includes('|')) {
           // Skip if it's just a single name or very short word that doesn't need translation
           if (content.split(' ').length > 1 || content.length > 10) {
             result.translationErrors.push(`[Ex ${index}] Missing [[English|Spanish]] format in ${field}: ${content.substring(0, 30)}...`);
           }
        }
      }
    });

    // Check options for multiple_choice
    if (ex.type === 'multiple_choice' && ex.options) {
      ex.options.forEach((opt: any) => {
        if (opt.text && typeof opt.text === 'string') {
          if (!opt.text.includes('[[') && !opt.text.includes('|')) {
            if (opt.text.split(' ').length > 1 || opt.text.length > 10) {
              result.translationErrors.push(`[Ex ${index}] Missing [[English|Spanish]] format in option: ${opt.text}`);
            }
          }
        }
      });
    }

    // 3. Quality: Progressive Difficulty
    // First 10 exercises should be simpler (matching, multiple-choice recognition)
    if (index < 10 && (ex.type === 'sentence-building' || ex.type === 'speaking-analysis')) {
        result.qualityWarnings.push(`[Ex ${index}] High-production task found too early in the unit.`);
    }

    // 4. Quality: Contextualization
    if (ex.type === 'multiple_choice' || ex.type === 'fill-blank') {
        const prompt = ex.prompt_es || ex.stimulus_en || '';
        if (prompt.length < 5) {
            result.qualityWarnings.push(`[Ex ${index}] Prompt seems too short, might lack context.`);
        }
    }
  });

  return result;
}

async function runAudit() {
  const specPath = path.join(process.cwd(), 'src/content/cursos/ingles-a1/course-specifications.md');
  const curriculumMap = parseCurriculum(specPath);
  const reports: AuditResult[] = [];

  console.log('🚀 Starting Full A1 Course Audit...\n');

  for (let i = 1; i <= 60; i++) {
    const report = auditUnit(i, curriculumMap.get(i));
    reports.push(report);
    
    if (report.errors.length > 0 || report.translationErrors.length > 0 || report.missingVocabulary.length > 0) {
        console.log(`❌ Unit ${i}: Fail (${report.errors.length} errs, ${report.translationErrors.length} trans, ${report.missingVocabulary.length} missing vocab)`);
    } else {
        console.log(`✅ Unit ${i}: Pass`);
    }
  }

  // Summary Report
  const totalErrors = reports.reduce((acc, r) => acc + r.errors.length, 0);
  const totalTransErrors = reports.reduce((acc, r) => acc + r.translationErrors.length, 0);
  
  console.log('\n--- AUDIT SUMMARY ---');
  console.log(`Total Units Checked: 60`);
  console.log(`Total Structural Errors: ${totalErrors}`);
  console.log(`Total Translation Format Errors: ${totalTransErrors}`);
  
  fs.writeFileSync('audit-report.json', JSON.stringify(reports, null, 2));
  console.log('\nDetailed report saved to audit-report.json');
}

runAudit().catch(console.error);
