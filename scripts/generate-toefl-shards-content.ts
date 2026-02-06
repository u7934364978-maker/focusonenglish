
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
  console.log(`Updating file: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract level and unit from filename or content
  const levelMatch = content.match(/const LEVEL = '([^']+)';/);
  const unitMatch = content.match(/const UNIT_ID = ([0-9]+);/);
  
  if (!levelMatch || !unitMatch) {
    console.error(`Could not find LEVEL or UNIT_ID in ${filePath}`);
    return;
  }
  
  const level = levelMatch[1];
  const unitId = unitMatch[1];
  
  // Find shards of type 'listening' that look like placeholders
  // Pattern: const shardX = { ... type: 'listening' ... }
  const shardRegex = /const (s[0-9]+|shard[0-9]+) = \{[\s\S]*?type: 'listening'[\s\S]*?\};/g;
  let match;
  
  while ((match = shardRegex.exec(content)) !== null) {
    const fullShardMatch = match[0];
    const shardVarName = match[1];
    
    // Check if it's a placeholder (contains Array.from or Simulated)
    if (fullShardMatch.includes('Array.from') || fullShardMatch.includes('[Simulated')) {
      // Extract title
      const titleMatch = fullShardMatch.match(/title: '([^']+)'/);
      const title = titleMatch ? titleMatch[1] : 'TOEFL Listening';
      
      const generated = await generateToeflShardContent(level, title);
      
      if (generated && generated.questions) {
        // Build the new shard string
        const shardId = `genId(LEVEL, UNIT_ID, '${shardVarName}', 0)`;
        
        // Format questions with correct IDs
        const formattedQuestions = generated.questions.map((q: any, i: number) => {
          q.id = `genId(LEVEL, UNIT_ID, '${shardVarName}', ${i + 1})`;
          return q;
        });
        
        const newShardString = `const ${shardVarName} = {
  id: ${shardId},
  type: 'listening',
  title: '${title}',
  transcript: \`${generated.transcript.replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`,
  questions: ${JSON.stringify(formattedQuestions, null, 2).replace(/"id": "genId\(([^)]+)\)"/g, '"id": genId($1)')}
};`;

        content = content.replace(fullShardMatch, newShardString);
      }
    }
  }
  
  fs.writeFileSync(filePath, content);
}

async function main() {
  const weeks = [
    'src/lib/toefl-units/b1/week-1.ts',
    'src/lib/toefl-units/b1/week-2.ts',
    'src/lib/toefl-units/b1/week-3.ts',
    'src/lib/toefl-units/b1/week-4.ts'
  ];
  
  for (const week of weeks) {
    await updateWeekFile(path.join(process.cwd(), week));
  }
  
  console.log('Finished updating TOEFL units.');
}

main();
