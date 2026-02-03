import fs from 'fs';
import path from 'path';

const contentDir = './src/content/cursos/ingles-a1';
const migrationsDir = './supabase/migrations';

const dictionary = {
  // Vocabulary
  "actor": "actor",
  "pilot": "piloto",
  "office worker": "oficinista",
  "new": "nuevo",
  "coat": "abrigo",
  "boots": "botas",
  "shirt": "camisa",
  "t-shirt": "camiseta",
  "shoes": "zapatos",
  "socks": "calcetines",
  "gloves": "guantes",
  "skirt": "falda",
  "dress": "vestido",
  "jeans": "vaqueros",
  "jacket": "chaqueta",
  "hat": "sombrero",
  "scarf": "bufanda",
  "suit": "traje",
  "tie": "corbata",
  "belt": "cinturón",
  "wallet": "cartera",
  "bag": "bolso",
  "watch": "reloj",
  "glasses": "gafas",
  "mother": "madre",
  "father": "padre",
  "sister": "hermana",
  "brother": "hermano",
  "parents": "padres",
  "children": "hijos",
  "son": "hijo",
  "daughter": "hija",
  "husband": "esposo",
  "wife": "esposa",
  "aunt": "tía",
  "uncle": "tío",
  "cousin": "primo/a",
  "nephew": "sobrino",
  "niece": "sobrina",
  "grandmother": "abuela",
  "grandfather": "abuelo",
  "grandson": "nieto",
  "granddaughter": "nieta",
  
  // Verbs/Actions
  "buy": "comprar",
  "sell": "vender",
  "wear": "llevar puesto",
  "pay": "pagar",
  "try on": "probarse",
  "put on": "ponerse",
  "take off": "quitarse",
  
  // Properties
  "expensive": "caro",
  "cheap": "barato",
  "perfect": "perfecto",
  "small": "pequeño",
  "medium": "mediano",
  "large": "grande",
  "red": "rojo",
  "blue": "azul",
  "green": "verde",
  "yellow": "amarillo",
  "pink": "rosa",
  "purple": "morado",
  "black": "negro",
  "white": "blanco",
  "grey": "gris",
  "orange": "naranja",
  "brown": "marrón",
  
  // Grammar/Logic
  "male parent": "progenitor masculino",
  "female parent": "progenitor femenino",
  "male sibling": "hermano varón",
  "female sibling": "hermana",
  "sister of your parent": "hermana de tu progenitor",
  "brother of your parent": "hermano de tu progenitor",
  "uncle's son": "hijo de tu tío",
  "male": "masculino",
  "female": "femenino",
  "plural": "plural",
  "singular": "singular",
  "article": "artículo",
  "verb": "verbo",
  "adjective": "adjetivo",
  "pronoun": "pronombre"
};

function translateText(text) {
  // Translate individual words separated by /
  if (text.includes('/')) {
    return text.split('/').map(word => {
        const trimmed = word.trim().toLowerCase();
        return dictionary[trimmed] || word.trim();
    }).join(' / ');
  }
  
  const trimmed = text.trim().toLowerCase();
  return dictionary[trimmed] || text;
}

function processHints(content) {
  // Target JSON keys that contain text
  return content.replace(/"(text|prompt|instructions|stimulus_en|prompt_es|prompt_en|prompt)":\s*"([^"]+)"/g, (match, key, value) => {
    let newValue = value.replace(/\s*\(([^)]+)\)/g, (m, inner) => {
       const translatedInner = translateText(inner);
       return ` (${translatedInner})`;
    });

    // Cleanup double spaces and spaces before punctuation
    newValue = newValue.replace(/\s+/g, ' ').replace(/\s+\./g, '.').trim();

    return `"${key}": "${newValue}"`;
  });
}

// Process JSON files
const jsonFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.json'));
for (const file of jsonFiles) {
  const filePath = path.join(contentDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const processed = processHints(content);
  if (content !== processed) {
    console.log(`Translated hints in ${file}`);
    fs.writeFileSync(filePath, processed);
  }
}

// Process Migrations
const migrationFiles = fs.readdirSync(migrationsDir).filter(f => f.endsWith('.sql') && f.includes('expand_unit'));
for (const file of migrationFiles) {
  const filePath = path.join(migrationsDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  const processed = processHints(content);
  if (content !== processed) {
    console.log(`Translated hints in migration ${file}`);
    fs.writeFileSync(filePath, processed);
  }
}
