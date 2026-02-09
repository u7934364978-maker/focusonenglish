import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'src/content/cursos');

interface AuditResult {
  level: string;
  unitCount: number;
  interactionCount: number;
  types: Record<string, number>;
  isPlaceholder: boolean;
}

function auditLevel(level: string): AuditResult {
  const levelDir = path.join(CONTENT_DIR, level);
  const result: AuditResult = {
    level,
    unitCount: 0,
    interactionCount: 0,
    types: {},
    isPlaceholder: false
  };

  if (!fs.existsSync(levelDir)) return result;

  const files = fs.readdirSync(levelDir).filter(f => f.endsWith('.json'));
  result.unitCount = files.length;

  files.forEach(file => {
    try {
      const content = JSON.parse(fs.readFileSync(path.join(levelDir, file), 'utf-8'));
      
      // Heuristic for placeholders: check for "Term 1_4_1" or "Definition" in content
      const contentStr = JSON.stringify(content);
      if (contentStr.includes('Term 1_') || contentStr.includes('Definition 1_')) {
        result.isPlaceholder = true;
      }

      content.blocks?.forEach((block: any) => {
        block.content?.forEach((interaction: any) => {
          result.interactionCount++;
          const type = interaction.type || 'unknown';
          result.types[type] = (result.types[type] || 0) + 1;
        });
      });
    } catch (e) {
      console.error(`Error reading ${file} in ${level}:`, e);
    }
  });

  return result;
}

async function runAudit() {
  console.log('# Focus English Content Audit Report\n');
  
  const levels = [
    'ingles-a1', 'ingles-a2', 'ingles-b1', 'ingles-b2', 'ingles-c1', 'ingles-c2',
    'emails-b1', 'negociaciones-b2', 'viajes/a1'
  ];

  const results = levels.map(auditLevel);

  console.log('| Level | Units | Interactions | Status | Top Types |');
  console.log('|-------|-------|--------------|--------|-----------|');
  
  results.forEach(r => {
    const topTypes = Object.entries(r.types)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([type, count]) => `${type}(${count})`)
      .join(', ');
      
    let status = '✅ OK';
    if (r.unitCount === 0) status = '❌ Missing';
    else if (r.isPlaceholder) status = '⚠️ Placeholder';
    else if (r.interactionCount < 10) status = '📉 Low Content';

    console.log(`| ${r.level} | ${r.unitCount} | ${r.interactionCount} | ${status} | ${topTypes || '-'} |`);
  });
}

runAudit();
