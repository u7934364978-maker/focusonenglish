import fs from 'fs';
import path from 'path';

const baseDir = '/Users/lidia/Documents/focusonenglish/src/lib/toefl-units/b1';

function getPlaceholder(shardNum: number, unitId: number) {
  return `const s${shardNum} = { id: genId(LEVEL, UNIT_ID, 's${shardNum}', 0), type: 'listening', title: 'Placeholder Shard ${shardNum}', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's${shardNum}', i+1), type: 'multiple-choice', question: \`Question \${i+1}\`, options: ['Option A', 'Option B', 'Option C', 'Option D'], correctAnswer: 'Option A', points: 1 })) };`;
}

for (let i = 1; i <= 4; i++) {
  const filePath = path.join(baseDir, `week-${i}.ts`);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Normalize variable names from shardX to sX
  content = content.replace(/const shard(\d+) =/g, 'const s$1 =');
  content = content.replace(/genId\(LEVEL, UNIT_ID, 'shard(\d+)',/g, "genId(LEVEL, UNIT_ID, 's$1',");
  
  // Find unit id
  const unitIdMatch = content.match(/const UNIT_ID = (\d+);/);
  if (!unitIdMatch) continue;
  const unitId = parseInt(unitIdMatch[1]);
  
  // Identify missing shards
  let lastInsertedPos = content.lastIndexOf('const s');
  if (lastInsertedPos === -1) {
    // If no sX found, insert after UNIT_ID or LEVEL
    const levelMatch = content.indexOf("const LEVEL = 'b1';");
    lastInsertedPos = levelMatch + "const LEVEL = 'b1';".length;
  } else {
    // Find the end of the last shard definition
    const endOfLastShard = content.indexOf('};', lastInsertedPos);
    if (endOfLastShard !== -1) {
      lastInsertedPos = endOfLastShard + 2;
    }
  }

  const existingShards = new Set<number>();
  const shardMatches = content.matchAll(/const s(\d+) =/g);
  for (const match of shardMatches) {
    existingShards.add(parseInt(match[1]));
  }

  let newShardsCode = '\n';
  for (let sNum = 1; sNum <= 10; sNum++) {
    if (!existingShards.has(sNum)) {
      console.log(`Adding missing shard ${sNum} to week-${i}.ts`);
      newShardsCode += getPlaceholder(sNum, unitId) + '\n';
    }
  }

  // Insert before the export
  const exportMatch = content.indexOf('export const');
  if (exportMatch !== -1) {
    content = content.slice(0, exportMatch) + newShardsCode + '\n' + content.slice(exportMatch);
  } else {
    content += newShardsCode;
  }

  // Final check on the export array
  const exportArrayMatch = content.match(/\[shard1, shard2, shard3, shard4, shard5, shard6, shard7, shard8, shard9, shard10\]/);
  if (exportArrayMatch) {
    content = content.replace(/\[shard1, shard2, shard3, shard4, shard5, shard6, shard7, shard8, shard9, shard10\]/, '[s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]');
  } else {
      // Handle week-2, 3, 4 which already use [s1, s2...]
  }

  fs.writeFileSync(filePath, content);
}
