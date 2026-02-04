import * as fs from 'fs';
import * as path from 'path';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const unitsDir = path.join(process.cwd(), 'src/lib/c2-units');

async function recoverQuestion(options, correctAnswer, explanation) {
  const prompt = `
    You are an expert English teacher. 
    I have a multiple-choice question where the original question text was lost, but I have the options, the correct answer, and the explanation.
    Please reconstruct the MOST LIKELY original question text (at Cambridge C2 Proficiency level).
    
    Options: ${JSON.stringify(options)}
    Correct Answer: "${correctAnswer}"
    Explanation: "${explanation}"
    
    IMPORTANT: The correct answer MUST BE EXACTLY one of the options.
    If the provided "Correct Answer" is slightly different from the options, choose the best matching option as the new correct answer.

    Return a JSON object:
    {
      "question": "reconstructed question text",
      "correctAnswer": "exactly one of the options provided"
    }
  `;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
    response_format: { type: "json_object" }
  });

  return JSON.parse(response.choices[0].message.content.trim());
}

async function fixFile(file) {
  const filePath = path.join(unitsDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // 1. Fix definitely corrupted transformation-labeled items
  const corruptedRegex = /\{[^{}]*?"id":\s*"(c2-u\d+-b\d+-q\d+)"[^{}]*?"type":\s*"key-word-transformation"[^{}]*?"options":\s*\[[^{}]*?\][^{}]*?\}/gs;
  
  let matches = [...content.matchAll(corruptedRegex)];
  
  if (matches.length > 0) {
    console.log(`Fixing ${file}: ${matches.length} corrupted items...`);
    for (const match of matches) {
        let qBody = match[0];
        const qId = match[1];
        try {
            const optionsMatch = qBody.match(/"options":\s*\[([\s\S]*?)\]/);
            const correctMatch = qBody.match(/"correctAnswer":\s*"([^"]+)"/);
            const explanationMatch = qBody.match(/"explanation":\s*"([^"]+)"/);

            if (!optionsMatch || !correctMatch || !explanationMatch) continue;

            const options = JSON.parse(`[${optionsMatch[1]}]`);
            const correctAnswer = correctMatch[1];
            const explanation = explanationMatch[1];

            const recovered = await recoverQuestion(options, correctAnswer, explanation);

            let newQBody = qBody
                .replace(/"type":\s*"key-word-transformation"/, '"type": "multiple-choice"')
                .replace(/"question":\s*"[^"]*"/, `"question": ${JSON.stringify(recovered.question)}`)
                .replace(/"correctAnswer":\s*"[^"]*"/, `"correctAnswer": ${JSON.stringify(recovered.correctAnswer)}`);
            
            newQBody = newQBody
                .replace(/\s*"sentence":\s*"[^"]*",?/g, '')
                .replace(/\s*"keyWord":\s*"[^"]*",?/g, '')
                .replace(/\s*"startOfAnswer":\s*"[^"]*",?/g, '');

            content = content.replace(qBody, newQBody);
        } catch (e) {
            console.error(`  - Failed to fix ${qId}: ${e}`);
        }
    }
  }

  // 2. Fix multiple-choice where correct answer is not in options
  // (This happens if previous run generated a slightly different string)
  const mcRegex = /\{[^{}]*?"id":\s*"(c2-u\d+-b\d+-q\d+)"[^{}]*?"type":\s*"multiple-choice"[\s\S]*?\}/g;
  let mcMatches = [...content.matchAll(mcRegex)];
  
  for (const match of mcMatches) {
      let qBody = match[0];
      const qId = match[1];
      
      const optionsMatch = qBody.match(/"options":\s*\[([\s\S]*?)\]/);
      const correctMatch = qBody.match(/"correctAnswer":\s*"([^"]+)"/);
      
      if (optionsMatch && correctMatch) {
          const optionsStr = optionsMatch[1];
          const correct = correctMatch[1];
          if (!optionsStr.includes(`"${correct}"`)) {
              console.log(`  - Fixing answer mismatch in ${qId}...`);
              try {
                  const options = JSON.parse(`[${optionsStr}]`);
                  const explanationMatch = qBody.match(/"explanation":\s*"([^"]+)"/);
                  const explanation = explanationMatch ? explanationMatch[1] : "";
                  
                  // Ask AI to pick the right one from options
                  const prompt = `Which of these options best matches the intent of "${correct}"? Explanation: ${explanation}\nOptions: ${JSON.stringify(options)}\nReturn ONLY the exact option string.`;
                  const response = await openai.chat.completions.create({
                      model: "gpt-4o-mini",
                      messages: [{ role: "user", content: prompt }],
                  });
                  const bestOption = response.choices[0].message.content.trim().replace(/^"|"$/g, '');
                  
                  content = content.replace(qBody, qBody.replace(/"correctAnswer":\s*"([^"]+)"/, `"correctAnswer": "${bestOption}"`));
              } catch (e) {
                  console.error(`  - Failed to fix mismatch in ${qId}: ${e}`);
              }
          }
      }
  }

  fs.writeFileSync(filePath, content);
}

const untrackedFiles = [
  'unit-14.ts', 'unit-15.ts', 'unit-16.ts', 'unit-17.ts', 'unit-18.ts', 
  'unit-19.ts', 'unit-20.ts', 'unit-21.ts', 'unit-22.ts', 'unit-23.ts',
  'unit-24.ts', 'unit-25.ts', 'unit-26.ts', 'unit-27.ts', 'unit-28.ts',
  'unit-29.ts', 'unit-30.ts', 'unit-31.ts', 'unit-32.ts', 'unit-33.ts',
  'unit-34.ts', 'unit-35.ts', 'unit-36.ts', 'unit-37.ts', 'unit-38.ts',
  'unit-39.ts', 'unit-40.ts', 'unit-41.ts', 'unit-42.ts', 'unit-43.ts',
  'unit-44.ts', 'unit-45.ts', 'unit-46.ts', 'unit-47.ts', 'unit-48.ts',
  'unit-49.ts', 'unit-50.ts', 'unit-51.ts', 'unit-52.ts', 'unit-53.ts',
  'unit-54.ts', 'unit-55.ts', 'unit-56.ts', 'unit-57.ts', 'unit-58.ts',
  'unit-59.ts', 'unit-60.ts'
];

async function main() {
  for (const file of untrackedFiles) {
    await fixFile(file);
  }
  console.log("Recovery completed.");
}

main().catch(console.error);
