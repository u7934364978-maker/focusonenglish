import fs from 'fs';
import path from 'path';

const COURSE_DIR = './src/lib/course/a1';
const REPORT_PATH = './.zencoder/chats/5c10a1e7-7d8e-4aec-b3a0-638692caa9d0/audit-report.md';

function auditUnit(unitId) {
  const filePath = path.join(COURSE_DIR, `${unitId}.ts`);
  if (!fs.existsSync(filePath)) return { error: 'File not found' };

  const content = fs.readFileSync(filePath, 'utf-8');
  if (content.trim().length < 100) {
     return { unitId, title: 'Empty/Stub', exerciseCount: 0, issues: ['File is empty or just a stub.'] };
  }

  // Count exercises by searching for ID pattern
  const idMatches = content.match(/"id":\s*"[^"]+"/g) || [];
  const exerciseCount = idMatches.length;
  
  const issues = [];

  // Target count is 60 or more for these units
  if (exerciseCount < 60) {
    issues.push(`Quantity error: Found only ${exerciseCount} exercises, expected at least 60.`);
  }

  // Translation Check: Verify presence of [[ ]] patterns
  // Since we can't easily parse TS here, we check if the pattern is prevalent
  const translationMatches = content.match(/\[\[[^|]+\|[^\]]+\]\]/g) || [];
  if (translationMatches.length < exerciseCount) {
    issues.push(`Translation warning: Only ${translationMatches.length} translations found for ${exerciseCount} exercises.`);
  }

  // Check for Mateo narrative context (heuristic)
  if (!content.includes('Mateo') && !content.includes('London')) {
    issues.push(`Narrative warning: "Mateo" or "London" context not found in unit.`);
  }

  return {
    unitId,
    title: unitId,
    exerciseCount,
    issues
  };
}

const results = [];
for (let i = 1; i <= 60; i++) {
  const result = auditUnit(`unit-${i}`);
  if (!result.error) results.push(result);
}

let report = `# Curriculum Audit Report (Corrected Path: src/lib/course/a1)\n\n`;
report += `This audit targets the TypeScript files used by the application, which follow the Mateo in London narrative.\n\n`;

results.forEach(res => {
  report += `## ${res.unitId}: ${res.title}\n`;
  report += `- Exercises: ${res.exerciseCount}\n`;
  if (res.issues.length > 0) {
    res.issues.forEach(issue => report += `- ❌ ${issue}\n`);
  } else {
    report += `- ✅ All checks passed (Basic).\n`;
  }
  report += `\n`;
});

fs.writeFileSync(REPORT_PATH, report);
console.log(`Audit complete. Report saved to ${REPORT_PATH}`);
