import fs from 'fs';
import path from 'path';
import { SHARED_DICTIONARY } from './dictionary';

const pythonFilePath = path.join(process.cwd(), 'scripts/generate_a1_mega_course_data.py');
const UNIT_DATA_RAW = fs.readFileSync(pythonFilePath, 'utf-8');

function parsePythonUnitData(content: string) {
    const units: any = {};
    const unitRegex = /(\d+): \{([\s\S]*?)\n    \}/g;
    let match;
    
    while ((match = unitRegex.exec(content)) !== null) {
        const id = parseInt(match[1]);
        const body = match[2];
        
        const titleMatch = /"title": "(.*?)"/.exec(body);
        const vocabMatch = /"vocab": \[(.*?)\]/.exec(body);
        const grammarMatch = /"grammar": \[(.*?)\]/.exec(body);
        const sentencesMatch = /"sentences": \[(.*?)\]/.exec(body);
        
        units[id] = {
            title: titleMatch ? titleMatch[1] : `Unit ${id}`,
            vocab: vocabMatch ? parseTupleList(vocabMatch[1]) : [],
            grammar: grammarMatch ? parseTupleList(grammarMatch[1]) : [],
            sentences: sentencesMatch ? parseStringList(sentencesMatch[1]) : []
        };
    }
    return units;
}

function parseTupleList(listStr: string) {
    const items: any[] = [];
    const tupleRegex = /\("(.*?)", "(.*?)"\)/g;
    let match;
    while ((match = tupleRegex.exec(listStr)) !== null) {
        items.push({ en: match[1], es: match[2] });
    }
    return items;
}

function parseStringList(listStr: string) {
    const items: string[] = [];
    const stringRegex = /"(.*?)"/g;
    let match;
    while ((match = stringRegex.exec(listStr)) !== null) {
        items.push(match[1]);
    }
    return items;
}

function translateWordLevel(english: string, spanishHint?: string): string {
    if (!english) return "";
    
    const startPunct = english.match(/^[¡¿"'(]+/);
    const endPunct = english.match(/[.,!?;:"')]+$/);
    
    const prefix = startPunct ? startPunct[0] : "";
    const suffix = endPunct ? endPunct[0] : "";
    
    let core = english;
    if (prefix) core = core.slice(prefix.length);
    if (suffix) core = core.slice(0, -suffix.length);

    if (spanishHint && core.includes(" ")) {
        return `${prefix}[[${core}|${spanishHint}]]${suffix}`;
    }

    const cleanCore = core.toLowerCase().replace(/[()]/g, "");
    let translation = SHARED_DICTIONARY[cleanCore] || spanishHint || core;

    // Special handling for (be) or (not/be) hints that might come from the generator
    if (spanishHint && (spanishHint.includes("ser/estar") || spanishHint.includes("be") || spanishHint.includes("-"))) {
        translation = "ser/estar";
    }
    
    if (core.length > 0 && core[0] === core[0].toUpperCase() && translation[0]) {
        translation = translation[0].toUpperCase() + translation.slice(1);
    }

    return `${prefix}[[${core}|${translation}]]${suffix}`;
}

function generateExercises(unitId: number, data: any) {
    const exercises: any[] = [];
    
    // 1. Flashcards (Vocab)
    if (data.vocab.length > 0) {
        exercises.push({
            id: `a1-u${unitId}-e1`,
            type: "flashcard",
            level: "A1",
            topic: data.title,
            difficulty: "easy",
            transcript: data.vocab.map((v: any) => v.en).join(". "),
            content: {
                title: "Vocabulario Clave",
                instructions: "Aprende las palabras más importantes de la unidad.",
                items: data.vocab.map((v: any) => ({
                    front: translateWordLevel(v.en, v.es),
                    back: v.es
                }))
            },
            audioUrl: `audio/a1/unit-${unitId}/e1.mp3`,
            topicName: "Vocabulary"
        });
    }
    
    // 2. Multiple Choice (Grammar)
    data.grammar.forEach((g: any, index: number) => {
        const exerciseIndex = exercises.length + 1;
        let questionText = g.en.replace("________", "_______");
        
        // If the generator left a complex hint like (be) - I or (not/be) - He, simplify it
        questionText = questionText.replace(/\(.*?\)\s*-\s*[^\s]+/g, (match: string) => {
            const m = match.match(/\(.*?\)/);
            return m ? m[0] : match;
        });
        
        exercises.push({
            id: `a1-u${unitId}-e${exerciseIndex}`,
            type: "multiple-choice",
            level: "A1",
            topic: data.title,
            difficulty: "easy",
            transcript: g.en.replace("________", g.es).replace(/\(.*?\)/g, "").trim(),
            content: {
                title: "Practica la Gramática",
                instructions: "Completa la oración con la opción correcta.",
                questions: [{
                    question: questionText.split(/(\s+)/).map((word: string) => {
                        if (word.trim() === "_______" || word.trim() === "") return word;
                        return translateWordLevel(word);
                    }).join(""),
                    options: [
                        translateWordLevel(g.es),
                        translateWordLevel("is"),
                        translateWordLevel("are")
                    ].sort(() => Math.random() - 0.5),
                    correctAnswer: 0,
                    explanation: "Práctica de la estructura gramatical básica."
                }]
            },
            audioUrl: `audio/a1/unit-${unitId}/e${exerciseIndex}.mp3`,
            topicName: "Grammar"
        });
        
        const ex = exercises[exercises.length - 1];
        const correctOpt = translateWordLevel(g.es);
        ex.content.questions[0].correctAnswer = ex.content.questions[0].options.indexOf(correctOpt);
    });
    
    // 3. Sentence Building
    data.sentences.forEach((s: string, index: number) => {
        const exerciseIndex = exercises.length + 1;
        const words = s.split(/(\s+)/).filter(w => w.trim() !== "");
        
        exercises.push({
            id: `a1-u${unitId}-e${exerciseIndex}`,
            type: "sentence-building",
            level: "A1",
            topic: data.title,
            difficulty: "easy",
            transcript: s,
            content: {
                title: "Construcción de Oraciones",
                instructions: "Ordena las palabras para formar una oración correcta.",
                correctSentence: words.map((w: string) => translateWordLevel(w)).join(" "),
                words: words.map((w: string) => translateWordLevel(w)).sort(() => Math.random() - 0.5),
                explanation: "Practica el orden de las palabras en inglés."
            },
            audioUrl: `audio/a1/unit-${unitId}/e${exerciseIndex}.mp3`,
            topicName: "Vocabulary"
        });
    });

    return exercises;
}

const units = parsePythonUnitData(UNIT_DATA_RAW);

Object.keys(units).forEach(id => {
    const unitId = parseInt(id);
    const exercises = generateExercises(unitId, units[id]);
    
    const fileContent = `import { Exercise } from '@/lib/exercise-generator';

export const UNIT_${unitId}_EXERCISES: Exercise[] = ${JSON.stringify(exercises, null, 2)};
`;

    const outputPath = path.join(process.cwd(), `src/lib/course/a1/unit-${unitId}.ts`);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, fileContent);
});

console.log(`✅ Successfully converted ${Object.keys(units).length} units for A1.`);
