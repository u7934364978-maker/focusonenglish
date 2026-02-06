import fs from 'fs';
import path from 'path';

const baseDir = '/Users/lidia/Documents/focusonenglish/src/lib/toefl-units';
const levels = ['b1', 'b2', 'c1'];

function getPlaceholder(shardNum: number, unitId: number) {
  return `const s${shardNum} = { id: genId(LEVEL, UNIT_ID, 's${shardNum}', 0), type: 'listening', title: 'Placeholder Shard ${shardNum}', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's${shardNum}', i+1), type: 'multiple-choice', question: \`Question \${i+1}\`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };`;
}

for (const level of levels) {
    const levelDir = path.join(baseDir, level);
    if (!fs.existsSync(levelDir)) continue;
    
    console.log(`Processing level: ${level}`);
    
    const files = fs.readdirSync(levelDir).filter(f => f.startsWith('week-') && f.endsWith('.ts'));

    for (const fileName of files) {
      const filePath = path.join(levelDir, fileName);
      let content = fs.readFileSync(filePath, 'utf-8');
      
      // Normalize variable names from shardX to sX
      content = content.replace(/const shard(\d+) =/g, 'const s$1 =');
      content = content.replace(/genId\(LEVEL, UNIT_ID, 'shard(\d+)',/g, "genId(LEVEL, UNIT_ID, 's$1',");
      
      // Find unit id
      const unitIdMatch = content.match(/const UNIT_ID = (\d+);/);
      if (!unitIdMatch) continue;
      const unitId = parseInt(unitIdMatch[1]);
      
      const existingShards = new Set<number>();
      const shardMatches = content.matchAll(/const s(\d+) =/g);
      for (const match of shardMatches) {
        existingShards.add(parseInt(match[1]));
      }

      let newShardsCode = '\n';
      let addedCount = 0;
      for (let sNum = 1; sNum <= 10; sNum++) {
        if (!existingShards.has(sNum)) {
          addedCount++;
          newShardsCode += getPlaceholder(sNum, unitId) + '\n';
        }
      }

      if (addedCount > 0) {
          console.log(`Adding ${addedCount} missing shards to ${level}/${fileName}`);
          
          // Insert before the export
          const exportMatch = content.indexOf('export const');
          if (exportMatch !== -1) {
            content = content.slice(0, exportMatch) + newShardsCode + '\n' + content.slice(exportMatch);
          } else {
            content += newShardsCode;
          }
      }

      // Final check on the export array
      const exportArrayMatch = content.match(/\[shard1, shard2, shard3, shard4, shard5, shard6, shard7, shard8, shard9, shard10\]/);
      if (exportArrayMatch) {
        content = content.replace(/\[shard1, shard2, shard3, shard4, shard5, shard6, shard7, shard8, shard9, shard10\]/, '[s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]');
      }

      fs.writeFileSync(filePath, content);
    }
}
