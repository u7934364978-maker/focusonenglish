import fs from 'fs';
import path from 'path';

const PREMIUM_DIR = '/Users/lidia/Documents/focusonenglish/focusonenglish/src/content/cursos/ingles-a1';

const syllabus = {
  41: { topic: "At the Airport", keyWords: ["airport", "check-in", "passport", "gate", "flight", "boarding", "luggage"] },
  42: { topic: "Transport", keyWords: ["bus", "train", "plane", "taxi", "bicycle", "station", "ticket"] },
  43: { topic: "Travel Verbs", keyWords: ["go", "stay", "visit", "arrive", "depart", "travel", "book"] },
  44: { topic: "The Weather", keyWords: ["sunny", "raining", "windy", "cold", "hot", "snowing", "cloudy"] },
  45: { topic: "Seasons", keyWords: ["spring", "summer", "autumn", "winter", "beach", "flowers", "leaves"] },
  46: { topic: "At the Hotel", keyWords: ["hotel", "room", "key", "reservation", "reception", "breakfast", "shower"] },
  47: { topic: "Holidays & Vacation", keyWords: ["holiday", "vacation", "beach", "mountains", "sightseeing", "relax", "photos"] },
  48: { topic: "Sightseeing", keyWords: ["museum", "statue", "bridge", "tower", "castle", "tour", "guide"] },
  49: { topic: "Packing a Suitcase", keyWords: ["suitcase", "clothes", "toiletries", "camera", "charger", "shoes", "map"] },
  50: { topic: "Module 5 Review", keyWords: ["airport", "transport", "weather", "seasons", "hotel", "travel", "packing"] },
  51: { topic: "At the Supermarket", keyWords: ["fruit", "vegetables", "milk", "bread", "eggs", "basket", "checkout"] },
  52: { topic: "Countable & Uncountable", keyWords: ["sugar", "salt", "water", "apple", "banana", "some", "any"] },
  53: { topic: "Some & Any", keyWords: ["some", "any", "bread", "cheese", "tomatoes", "milk", "coffee"] },
  54: { topic: "Much & Many", keyWords: ["much", "many", "how much", "how many", "money", "friends", "time"] },
  55: { topic: "Clothing Store", keyWords: ["shirt", "jeans", "size", "price", "fitting room", "try on", "expensive"] },
  56: { topic: "At the Restaurant", keyWords: ["menu", "waiter", "order", "bill", "water", "food", "table"] },
  57: { topic: "Cooking & Recipes", keyWords: ["cook", "boil", "fry", "mix", "add", "ingredients", "oven"] },
  58: { topic: "Health & Illness", keyWords: ["headache", "cold", "doctor", "medicine", "sore throat", "fever", "better"] },
  59: { topic: "Money & Currency", keyWords: ["pounds", "dollars", "euros", "cash", "card", "change", "price"] },
  60: { topic: "Module 6 Review", keyWords: ["food", "shopping", "restaurant", "cooking", "health", "money", "supermarket"] }
};

function generateLesson5(unitId, unitInfo) {
  const content = [];
  const unitStr = unitId.toString();

  // 7 Listening Dictation tasks
  for (let i = 1; i <= 7; i++) {
    const word = unitInfo.keyWords[(i - 1) % unitInfo.keyWords.length];
    content.push({
      "interaction_id": `U${unitStr}_I${304 + i}`,
      "type": "listening_dictation",
      "prompt_es": "Escucha y completa la frase:",
      "audio_url": `/audio/courses/ingles-a1/unit${unitStr}/lesson5-task-${i}.mp3`,
      "transcript_template": `The [[${word}|]] is here.`, // Simplified for now
      "correct_answer": word,
      "mastery_tag": "listening",
      "complexity": 2,
      "concept_tags": ["vocabulary", "listening"]
    });
  }

  // 8 Pronunciation tasks
  for (let i = 8; i <= 15; i++) {
    const word = unitInfo.keyWords[(i - 1) % unitInfo.keyWords.length];
    content.push({
      "interaction_id": `U${unitStr}_I${304 + i}`,
      "type": "pronunciation",
      "prompt_es": "Escucha y practica la pronunciación:",
      "title": `Pronunciación: ${unitInfo.topic}`,
      "instructions": "Escucha y repite la frase enfocándote en la entonación.",
      "targetSentences": [
        {
          "text": `I [[like|me gusta]] this [[${word}|]].`,
          "phonetic": "", // To be filled later if needed
          "audioUrl": `/audio/courses/ingles-a1/unit${unitStr}/lesson5-task-${i}.mp3`
        }
      ],
      "questions": [
        {
          "id": `U${unitStr}_I${304 + i}_Q1`,
          "type": "multiple_choice",
          "prompt_es": `¿Cómo se pronuncia '${word}'?`,
          "options": [
            { "id": "o1", "text": "Correctamente" },
            { "id": "o2", "text": "Incorrectamente" }
          ],
          "correct_answer": "o1",
          "mastery_tag": "pronunciation"
        }
      ],
      "mastery_tag": "pronunciation",
      "complexity": 2,
      "concept_tags": ["phonetics", "pronunciation"]
    });
  }

  return {
    "title": "Lesson 5: Listening & Pronunciation Review",
    "duration_minutes": 20,
    "content": content
  };
}

async function updateJsonFiles() {
  for (let i = 41; i <= 60; i++) {
    const filePath = path.join(PREMIUM_DIR, `unit${i}.json`);
    if (!fs.existsSync(filePath)) {
      console.log(`File not found: ${filePath}`);
      continue;
    }

    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Check if Lesson 5 already exists
    if (data.blocks.some(b => b.title && b.title.includes('Lesson 5'))) {
      console.log(`Unit ${i} already has Lesson 5`);
      continue;
    }

    console.log(`Adding Lesson 5 to unit ${i}...`);
    const lesson5 = generateLesson5(i, syllabus[i]);
    data.blocks.push(lesson5);

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
  }
}

updateJsonFiles().catch(console.error);
