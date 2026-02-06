
import OpenAI from 'openai';
import * as fs from 'fs';
import * as path from 'path';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generateToeflShardContent(level: string, title: string, count: number = 10) {
  console.log(`Generating TOEFL content for: ${title} (${level})...`);
  
  const prompt = `
    You are an expert TOEFL iBT content creator. 
    Generate a JSON object for a TOEFL ${level} level listening practice shard titled "${title}".
    
    The JSON should be an array of ${count} questions.
    Each question object must follow this structure:
    {
      "id": "toefl-${level.toLowerCase()}-uX-sY-qZ", (leave X, Y, Z as placeholders for the script to fill)
      "type": "multiple-choice",
      "question": "The actual question based on the audio transcript",
      "options": ["Option A", "Option B", "Option C", "Option D"],
      "correctAnswer": "The exact text of the correct option",
      "explanation": "Brief explanation in Spanish of why this is correct",
      "context": "A short part of the transcript relevant to this specific question",
      "points": 1
    }
    
    ALSO, generate a "transcript" for the ENTIRE shard (one long text that covers all ${count} questions).
    The transcript should be a realistic TOEFL ${level} dialogue or lecture related to "${title}".
    
    Return ONLY a JSON object with this structure:
    {
      "transcript": "Full text here...",
      "questions": [...]
    }
  `;

  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: "You are a TOEFL expert." },
        { role: "user", content: prompt }
      ],
      response_format: { type: "json_object" }
    });

    return JSON.parse(response.choices[0].message.content || '{}');
  } catch (error) {
    console.error(`Error generating content for ${title}:`, error);
    return null;
  }
}

async function updateWeekFile(filePath: string) {
  if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      return;
  }
  console.log(`Updating file: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  const levelMatch = content.match(/const LEVEL = '([^']+)';/);
  const unitMatch = content.match(/const UNIT_ID = ([0-9]+);/);
  
  if (!levelMatch || !unitMatch) {
    console.error(`Could not find LEVEL or UNIT_ID in ${filePath}`);
    return;
  }
  
  const level = levelMatch[1];
  
  // Find all shards and decide whether to update them inside the loop
  const shardRegex = /const (s[0-9]+|shard[0-9]+) = \{[\s\S]*?\};/g;
  let match;
  let replacements = [];
  
  while ((match = shardRegex.exec(content)) !== null) {
    const fullShardMatch = match[0];
    const shardVarName = match[1];
    
    // Check if it's one of the types we want to handle
    const typeMatch = fullShardMatch.match(/type: '([^']+)'/);
    const type = typeMatch ? typeMatch[1] : '';
    
    if (!['listening', 'speaking', 'conversation'].includes(type)) {
      continue;
    }
    
    // Check if it's a placeholder (contains Array.from or Simulated or missing transcript)
    const isPlaceholder = fullShardMatch.includes('Array.from') || fullShardMatch.includes('[Simulated') || fullShardMatch.includes('Listening Question');
    const hasTranscript = fullShardMatch.includes('transcript:');
    
    if (isPlaceholder || !hasTranscript) {
      replacements.push({
        oldString: fullShardMatch,
        varName: shardVarName,
        index: match.index
      });
    }
  }

  // Process replacements in reverse order to maintain indices
  replacements.sort((a, b) => b.index - a.index);

  for (const r of replacements) {
    const titleMatch = r.oldString.match(/title: '([^']+)'/);
    const title = titleMatch ? titleMatch[1] : 'TOEFL Practice';
    const typeMatch = r.oldString.match(/type: '([^']+)'/);
    const type = typeMatch ? typeMatch[1] : 'listening';
    
    const generated = await generateToeflShardContent(level, title);
    
    if (generated && generated.questions) {
      const shardId = `genId(LEVEL, UNIT_ID, '${r.varName}', 0)`;
      const formattedQuestions = generated.questions.map((q: any, i: number) => {
        q.id = `genId(LEVEL, UNIT_ID, '${r.varName}', ${i + 1})`;
        return q;
      });
      
      const newShardString = `const ${r.varName} = {
  id: ${shardId},
  type: '${type}',
  title: '${title}',
  transcript: \`${generated.transcript.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
  questions: ${JSON.stringify(formattedQuestions, null, 2).replace(/"id": "genId\(([^)]+)\)"/g, '"id": genId($1)')}
};`;

      content = content.substring(0, r.index) + newShardString + content.substring(r.index + r.oldString.length);
    }
  }
  
  fs.writeFileSync(filePath, content);
}

async function main() {
  const level = process.argv[2] || 'b1';
  const startWeek = parseInt(process.argv[3]) || 1;
  const endWeek = parseInt(process.argv[4]) || 5;

  console.log(`Batch: Level ${level}, Weeks ${startWeek} to ${endWeek}`);

  for (let i = startWeek; i <= endWeek; i++) {
    await updateWeekFile(path.join(process.cwd(), `src/lib/toefl-units/${level}/week-${i}.ts`));
  }
  
  console.log('Finished batch update.');
}

main();
