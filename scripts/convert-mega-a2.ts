import fs from 'fs';
import path from 'path';

const pythonFilePath = path.join(process.cwd(), 'scripts/expand_a2_course.py');
const UNIT_DATA_RAW = fs.readFileSync(pythonFilePath, 'utf-8');

// Basic dictionary for word-level tooltips
const dictionary: Record<string, string> = {
    "i": "yo", "am": "soy/estoy", "is": "es/está", "are": "somos/estamos/son/están",
    "you": "tú/usted/vosotros", "he": "él", "she": "ella", "it": "esto/eso",
    "we": "nosotros", "they": "ellos", "my": "mi/mis", "your": "tu/tus",
    "his": "su (de él)", "her": "su (de ella)", "its": "su (de ello)",
    "our": "nuestro", "their": "su (de ellos)", "the": "el/la/los/las",
    "a": "un/una", "an": "un/una", "this": "este/esta", "that": "ese/esa/aquel",
    "very": "muy", "quite": "bastante", "always": "siempre", "often": "a menudo",
    "never": "nunca", "sometimes": "a veces", "than": "que (comparativo)",
    "person": "persona", "people": "gente/personas", "man": "hombre", "woman": "mujer",
    "child": "niño/niña", "children": "niños/niñas", "friend": "amigo/amiga",
    "teacher": "profesor/profesora", "sister": "hermana", "brother": "hermano",
    "know": "saber/conocer", "think": "pensar/creer", "seem": "parecer",
    "like": "gustar/como", "have": "tener/haber", "has": "tiene/ha",
    "do": "hacer", "does": "hace", "don't": "no", "doesn't": "no",
    "can": "poder", "with": "con", "for": "para/por", "to": "a/para",
    "in": "en", "on": "en/sobre", "at": "en", "from": "de/desde",
    "by": "por", "who": "quién/que", "what": "qué", "why": "por qué",
    "where": "dónde", "how": "cómo", "when": "cuándo", "so": "tan/así que",
    "both": "ambos", "and": "y", "but": "pero", "or": "o",
    "good": "bueno/buena", "bad": "malo/mala", "big": "grande", "small": "pequeño/pequeña",
    "happy": "feliz", "sad": "triste", "angry": "enfadado/enojado",
    "kind": "amable", "friendly": "simpático/amigable", "funny": "divertido",
    "clever": "listo/inteligente", "lazy": "perezoso/vago", "patient": "paciente",
    "shy": "tímido", "outgoing": "extrovertido", "rude": "maleducado",
    "helpful": "servicial", "serious": "serio", "quiet": "tranquilo",
    "honest": "honesto", "polite": "educado", "hard-working": "trabajador",
    "work": "trabajo/trabajar", "home": "casa/hogar", "school": "escuela",
    "university": "universidad", "city": "ciudad", "town": "pueblo",
    "country": "país", "world": "mundo", "time": "tiempo", "day": "día",
    "week": "semana", "month": "mes", "year": "año", "life": "vida"
};

function parsePythonUnitData(content: string) {
    const units: any = {};
    const unitRegex = /(\d+): \{([\s\S]*?)\n    \}(?:,|$)/g;
    let match;
    
    while ((match = unitRegex.exec(content)) !== null) {
        const id = parseInt(match[1]);
        const body = match[2];
        
        const titleMatch = /# (.*)/.exec(body);
        const vocabMatch = /"vocab": \[([\s\S]*?)\]/.exec(body);
        const grammarMatch = /"grammar": \[([\s\S]*?)\]/.exec(body);
        const sentencesMatch = /"sentences": \[([\s\S]*?)\]/.exec(body);
        
        units[id] = {
            title: titleMatch ? titleMatch[1].trim() : `Unit ${id}`,
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
    
    // Punctuation handling
    const startPunct = english.match(/^[¡¿"'(]+/);
    const endPunct = english.match(/[.,!?;:"')]+$/);
    
    const prefix = startPunct ? startPunct[0] : "";
    const suffix = endPunct ? endPunct[0] : "";
    
    let core = english;
    if (prefix) core = core.slice(prefix.length);
    if (suffix) core = core.slice(0, -suffix.length);

    // If it's something like (be) or (not/be)
    const cleanCore = core.toLowerCase().replace(/[()]/g, "");
    
    let translation = dictionary[cleanCore] || spanishHint || core;
    
    // Case sensitivity
    if (core[0] === core[0].toUpperCase() && translation[0]) {
        translation = translation[0].toUpperCase() + translation.slice(1);
    }

    return `${prefix}[[${core}|${translation}]]${suffix}`;
}

function generateExercises(unitId: number, data: any) {
    const exercises: any[] = [];
    
    // 1. Flashcards (Vocab)
    if (data.vocab.length > 0) {
        exercises.push({
            id: `a2-u${unitId}-e1`,
            type: "flashcard",
            level: "A2",
            topic: data.title,
            difficulty: "medium",
            transcript: data.vocab.map((v: any) => v.en).join(". "),
            content: {
                title: "Vocabulario Clave",
                instructions: "Aprende las palabras más importantes de la unidad.",
                items: data.vocab.map((v: any) => ({
                    front: translateWordLevel(v.en, v.es),
                    back: v.es
                }))
            },
            audioUrl: `audio/a2/unit-${unitId}/e1.mp3`,
            topicName: "Vocabulary"
        });
    }
    
    // 2. Multiple Choice (Grammar)
    data.grammar.forEach((g: any, index: number) => {
        const exerciseIndex = exercises.length + 1;
        const questionText = g.en.replace("________", "_______");
        
        exercises.push({
            id: `a2-u${unitId}-e${exerciseIndex}`,
            type: "multiple-choice",
            level: "A2",
            topic: data.title,
            difficulty: "medium",
            transcript: g.en.replace("________", g.es).replace(/\(.*?\)/g, "").trim(),
            content: {
                title: "Practica la Gramática",
                instructions: "Completa la oración con la opción correcta.",
                questions: [{
                    question: questionText.split(" ").map((word: string) => {
                        if (word === "_______") return word;
                        return translateWordLevel(word);
                    }).join(" "),
                    options: [
                        `[[${g.es}|${g.es}]]`,
                        `[[to|a]]`,
                        `[[it|lo]]`
                    ].sort(() => Math.random() - 0.5),
                    correctAnswer: 0,
                    explanation: "Práctica de la estructura gramatical A2."
                }]
            },
            audioUrl: `audio/a2/unit-${unitId}/e${exerciseIndex}.mp3`,
            topicName: "Grammar"
        });
        
        const ex = exercises[exercises.length - 1];
        const correctOpt = `[[${g.es}|${g.es}]]`;
        ex.content.questions[0].correctAnswer = ex.content.questions[0].options.indexOf(correctOpt);
    });
    
    // 3. Sentence Building
    data.sentences.forEach((s: string, index: number) => {
        const exerciseIndex = exercises.length + 1;
        const words = s.split(" ");
        
        exercises.push({
            id: `a2-u${unitId}-e${exerciseIndex}`,
            type: "sentence-building",
            level: "A2",
            topic: data.title,
            difficulty: "medium",
            transcript: s,
            content: {
                title: "Construcción de Oraciones",
                instructions: "Ordena las palabras para formar una oración correcta.",
                correctSentence: words.map((w: string) => translateWordLevel(w)).join(" "),
                words: words.map((w: string) => translateWordLevel(w)).sort(() => Math.random() - 0.5),
                explanation: "Practica el orden de las palabras en nivel A2."
            },
            audioUrl: `audio/a2/unit-${unitId}/e${exerciseIndex}.mp3`,
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

    const outputPath = path.join(process.cwd(), `src/lib/course/a2/unit-${unitId}.ts`);
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, fileContent);
});

console.log(`✅ Successfully converted ${Object.keys(units).length} units for A2.`);
