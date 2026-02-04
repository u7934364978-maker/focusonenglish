import * as fs from 'fs';
import * as path from 'path';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');

async function auditExercises(exercises) {
  const prompt = `
    You are a linguistic auditor for a Cambridge C2 Proficiency (CPE) course.
    Review the following exercises and identify any typos, grammatical errors, or level inconsistencies (too easy/too hard/awkward).
    
    For each exercise, check:
    1. "question" (English): Grammatical correctness and C2 level appropriateness.
       - For key-word-transformation items, it MUST be in the format: "Original sentence. (KEYWORD)\\n\\nStart of answer __________"
       - EXAMPLE of a good transformation question: "I'm sure he didn't mean to offend you. (INTENTION)\\n\\nHe had __________ you."
       - If it's a placeholder or incorrect format, RECONSTRUCT IT based on the "correctAnswer" and "explanation".
    2. "options" (English): If applicable, correctness and relevance.
    3. "correctAnswer" (English): Correctness and consistency with the question.
       - For key-word-transformation, it MUST be ONLY the missing part (3 to 8 words usually).
    4. "explanation" (Spanish): Grammatical correctness and accuracy in explaining the English concept.
    5. "sentence", "keyWord", "startOfAnswer" (English): For key-word-transformation items, ensure they are correct and follow CPE format.
       - "sentence" is the original sentence.
       - "keyWord" is the keyword (usually 1 word, ALL CAPS).
       - "startOfAnswer" is the beginning of the transformed sentence.

    IMPORTANT: If you find an exercise where "type" is "key-word-transformation" but the content looks like a "multiple-choice" or "vocabulary" question, FIX THE TYPE to match the content or RECONSTRUCT the content to match the type. Prefer reconstruction for C2 units.

    Return a JSON object with a key "results" containing an array of objects:
    {
      "id": "exercise-id",
      "hasIssue": true/false,
      "issueDescription": "Description of the issue (if any)",
      "fixedFields": {
        // Only include fields that actually need fixing. Use exactly the same keys as the input.
      }
    }

    Exercises:
    ${JSON.stringify(exercises, null, 2)}
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "system", content: "You are a helpful assistant that returns JSON." }, { role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content.trim()).results;
}

async function processUnit(unitNum) {
  const fileName = `unit-${unitNum}.ts`;
  const filePath = path.join(unitsDir, fileName);
  if (!fs.existsSync(filePath)) {
    console.log(`File ${fileName} does not exist. Skipping.`);
    return;
  }

  console.log(`Auditing ${fileName}...`);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Extract all question objects using regex
  // Using a more robust regex to find objects that start with "id": "c2-uX-bY-qZ"
  const questionRegex = /\{\s*"id":\s*"c2-u\d+-b\d+-q\d+"[\s\S]*?\n\s+\}/g;
  let matches = [...content.matchAll(questionRegex)];
  
  const allExercises = [];
  const exerciseMap = new Map(); // To keep track of match and parsed object

  for (const match of matches) {
      try {
          let qBody = match[0];
          // Clean up potential trailing commas and other TS syntax to make it valid JSON
          let jsonStr = qBody
            .replace(/,(\s*[}\]])/g, '$1') // Remove trailing commas
            .replace(/([{,]\s*)(\w+):/g, '$1"$2":') // Quote unquoted keys
            .trim();
          
          if (jsonStr.endsWith('},')) jsonStr = jsonStr.slice(0, -1);
          if (!jsonStr.endsWith('}')) jsonStr += '}';

          const parsed = JSON.parse(jsonStr);
          allExercises.push(parsed);
          exerciseMap.set(parsed.id, qBody);
      } catch (e) {
          // console.warn(`  - Could not parse exercise ${match[1]} in ${fileName}: ${e.message}`);
      }
  }

  if (allExercises.length === 0) {
      console.log(`  - No exercises found in ${fileName}`);
      return;
  }

  // Audit in batches of 10 to avoid token limits and stay focused
  const batchSize = 10;
  for (let i = 0; i < allExercises.length; i += batchSize) {
    const batch = allExercises.slice(i, i + batchSize);
    console.log(`  - Processing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(allExercises.length/batchSize)}...`);
    
    try {
        const results = await auditExercises(batch);
        
        for (const res of results) {
            if (res.hasIssue && res.fixedFields) {
                console.log(`    [ISSUE] ${res.id}: ${res.issueDescription}`);
                
                // Find the original string in content and replace fields
                const originalQ = exerciseMap.get(res.id);
                
                if (originalQ) {
                    let updatedQ = originalQ;
                    // Sort fields to ensure we don't have issues with dependencies
                    const fieldsToFix = Object.entries(res.fixedFields);
                    
                    for (const [field, newValue] of fieldsToFix) {
                        const fieldRegex = new RegExp(`("${field}":\\s*)"([^"]*)"`, 'g');
                        const arrayRegex = new RegExp(`("${field}":\\s*)\\[[\\s\\S]*?\\]`, 'g');
                        
                        const hasField = updatedQ.match(new RegExp(`"${field}":`));
                        
                        if (hasField) {
                            if (Array.isArray(newValue)) {
                                updatedQ = updatedQ.replace(arrayRegex, `$1${JSON.stringify(newValue, null, 2)}`);
                            } else {
                                updatedQ = updatedQ.replace(fieldRegex, `$1${JSON.stringify(newValue)}`);
                            }
                        } else {
                            // Insert missing field after "id"
                            const idRegex = /("id":\s*"[^"]*",?)/;
                            const replacement = Array.isArray(newValue) 
                                ? `$1\n      "${field}": ${JSON.stringify(newValue, null, 2)},`
                                : `$1\n      "${field}": ${JSON.stringify(newValue)},`;
                            updatedQ = updatedQ.replace(idRegex, replacement);
                        }
                    }
                    content = content.replace(originalQ, updatedQ);
                }
            }
        }
    } catch (e) {
        console.error(`  - Error auditing batch: ${e.message}`);
    }
  }

  fs.writeFileSync(filePath, content);
  console.log(`Finished ${fileName}.\n`);
}

async function main() {
  const start = parseInt(process.argv[2]) || 1;
  const end = parseInt(process.argv[3]) || 20;
  for (let i = start; i <= end; i++) {
    await processUnit(i);
  }
}

main().catch(console.error);
