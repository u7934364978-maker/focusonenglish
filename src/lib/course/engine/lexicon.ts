export interface LexicalItem {
  lemma: string;
  pos: 'noun' | 'verb' | 'adjective' | 'preposition' | 'adverb';
  countable?: boolean;
  article?: 'a' | 'an' | 'some';
  plural?: string;
  plural_es?: string; // Spanish plural form
  gender_es?: 'm' | 'f'; // Spanish gender
  tags: string[];
  translation: string;
  i_es?: string;      // Spanish conjugation for "I"
  he_she_es?: string; // Spanish conjugation for "He/She"
  unit: number; // Mandatory for pedagogical control
}

export const A1_LEXICON: LexicalItem[] = [
  // Greetings (Unit 1)
  { lemma: 'hello', pos: 'noun', translation: 'hola (formal)', tags: ['greeting', 'formal', 'A1'], unit: 1 },
  { lemma: 'hi', pos: 'noun', translation: 'hola (informal)', tags: ['greeting', 'informal', 'A1'], unit: 1 },
  { lemma: 'good morning', pos: 'noun', translation: 'buenos días', tags: ['greeting', 'morning', 'A1'], unit: 1 },
  { lemma: 'good afternoon', pos: 'noun', translation: 'buenas tardes', tags: ['greeting', 'afternoon', 'A1'], unit: 1 },
  { lemma: 'good evening', pos: 'noun', translation: 'buenas noches (llegada)', tags: ['greeting', 'evening', 'A1'], unit: 1 },
  { lemma: 'good night', pos: 'noun', translation: 'buenas noches (despedida)', tags: ['greeting', 'night', 'A1'], unit: 1 },
  { lemma: 'am', pos: 'verb', translation: 'soy', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'are', pos: 'verb', translation: 'eres/estás', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'is', pos: 'verb', translation: 'es/está', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'John', pos: 'noun', translation: 'Juan', tags: ['name', 'proper_noun', 'human', 'm', 'A1'], unit: 1 },
  { lemma: 'Maria', pos: 'noun', translation: 'María', tags: ['name', 'proper_noun', 'human', 'f', 'A1'], unit: 1 },
  { lemma: 'David', pos: 'noun', translation: 'David', tags: ['name', 'proper_noun', 'human', 'm', 'A1'], unit: 1 },
  { lemma: 'Anna', pos: 'noun', translation: 'Ana', tags: ['name', 'proper_noun', 'human', 'f', 'A1'], unit: 1 },
  { lemma: 'Laura', pos: 'noun', translation: 'Laura', tags: ['name', 'proper_noun', 'human', 'f', 'A1'], unit: 1 },
  { lemma: 'Carlos', pos: 'noun', translation: 'Carlos', tags: ['name', 'proper_noun', 'human', 'm', 'A1'], unit: 1 },
  { lemma: 'Elena', pos: 'noun', translation: 'Elena', tags: ['name', 'proper_noun', 'human', 'f', 'A1'], unit: 1 },
  { lemma: 'Alex', pos: 'noun', translation: 'Álex', tags: ['name', 'proper_noun', 'human', 'm', 'A1'], unit: 1 },
  { lemma: 'Sarah', pos: 'noun', translation: 'Sara', tags: ['name', 'proper_noun', 'human', 'f', 'A1'], unit: 1 },
  { lemma: 'Tom', pos: 'noun', translation: 'Tomás', tags: ['name', 'proper_noun', 'human', 'm', 'A1'], unit: 1 },
  { lemma: 'Max', pos: 'noun', translation: 'Max', tags: ['name', 'proper_noun', 'animal', 'm', 'A1'], unit: 1 },
  { lemma: 'good', pos: 'adjective', translation: 'bueno/a', tags: ['quality', 'A1'], unit: 1 },
  { lemma: 'morning', pos: 'noun', translation: 'mañana', gender_es: 'f', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'afternoon', pos: 'noun', translation: 'tarde', gender_es: 'f', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'evening', pos: 'noun', translation: 'noche (llegada)', gender_es: 'f', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'night', pos: 'noun', translation: 'noche (despedida)', gender_es: 'f', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'bye', pos: 'noun', translation: 'adiós', tags: ['greeting', 'A1'], unit: 1 },
  { lemma: 'goodbye', pos: 'noun', translation: 'adiós', tags: ['greeting', 'A1'], unit: 1 },
  { lemma: 'thanks', pos: 'noun', translation: 'gracias', tags: ['politeness', 'A1'], unit: 1 },
  { lemma: 'fine', pos: 'adjective', translation: 'bien', tags: ['state', 'A1'], unit: 1 },
  { lemma: 'happy', pos: 'adjective', translation: 'feliz', tags: ['emotion', 'A1'], unit: 1 },
  { lemma: 'tall', pos: 'adjective', translation: 'alto/a', tags: ['quality', 'A1'], unit: 1 },
  { lemma: 'cool', pos: 'adjective', translation: 'genial', tags: ['quality', 'A1'], unit: 1 },
  { lemma: 'student', pos: 'noun', translation: 'estudiante', gender_es: 'm', tags: ['job', 'A1'], unit: 1 },
  { lemma: 'teacher', pos: 'noun', translation: 'profesor/a', gender_es: 'm', tags: ['job', 'A1'], unit: 1 },
  { lemma: 'doctor', pos: 'noun', translation: 'médico/a', gender_es: 'm', tags: ['job', 'A1'], unit: 1 },
  { lemma: 'friend', pos: 'noun', translation: 'amigo/a', gender_es: 'm', tags: ['relationship', 'A1'], unit: 1 },
  { lemma: 'cat', pos: 'noun', translation: 'gato/a', gender_es: 'm', tags: ['animal', 'A1'], unit: 1 },
  { lemma: 'dog', pos: 'noun', translation: 'perro/a', gender_es: 'm', tags: ['animal', 'A1'], unit: 1 },
  { lemma: 'name', pos: 'noun', translation: 'nombre', gender_es: 'm', tags: ['identity', 'A1'], unit: 1 },
  { lemma: 'classroom', pos: 'noun', translation: 'aula', gender_es: 'f', tags: ['place', 'A1'], unit: 1 },
  { lemma: 'restaurant', pos: 'noun', translation: 'restaurante', gender_es: 'm', tags: ['place', 'A1'], unit: 1 },
  { lemma: 'food', pos: 'noun', translation: 'comida', gender_es: 'f', tags: ['food', 'A1'], unit: 1 },
  { lemma: 'London', pos: 'noun', translation: 'Londres', tags: ['city', 'A1'], unit: 1 },
  { lemma: 'Canada', pos: 'noun', translation: 'Canadá', tags: ['country', 'A1'], unit: 1 },
  { lemma: 'Mexico', pos: 'noun', translation: 'México', tags: ['country', 'A1'], unit: 1 },
  { lemma: 'Italian', pos: 'adjective', translation: 'italiano/a', tags: ['nationality', 'A1'], unit: 1 },
  { lemma: 'how', pos: 'adverb', translation: 'cómo', tags: ['question', 'A1'], unit: 1 },
  { lemma: 'who', pos: 'adverb', translation: 'quién', tags: ['question', 'A1'], unit: 1 },
  { lemma: 'where', pos: 'adverb', translation: 'dónde', tags: ['question', 'A1'], unit: 1 },
  { lemma: 'what', pos: 'adverb', translation: 'qué', tags: ['question', 'A1'], unit: 1 },
  { lemma: 'nice', pos: 'adjective', translation: 'agradable', tags: ['quality', 'A1'], unit: 1 },
  { lemma: 'meet', pos: 'verb', translation: 'conocer', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'later', pos: 'adverb', translation: 'más tarde', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'today', pos: 'noun', translation: 'hoy', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'now', pos: 'adverb', translation: 'ahora', tags: ['time', 'A1'], unit: 1 },
  { lemma: 'from', pos: 'preposition', translation: 'de', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'in', pos: 'preposition', translation: 'en', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'at', pos: 'preposition', translation: 'en', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'too', pos: 'adverb', translation: 'también', tags: ['adverb', 'A1'], unit: 1 },
  { lemma: 'see', pos: 'verb', translation: 'ver', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'say', pos: 'verb', translation: 'decir', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'go', pos: 'verb', translation: 'ir', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'which', pos: 'adjective', translation: 'cuál', tags: ['question', 'A1'], unit: 1 },
  { lemma: 'word', pos: 'noun', translation: 'palabra', gender_es: 'f', tags: ['language', 'A1'], unit: 1 },
  { lemma: 'matches', pos: 'verb', translation: 'coincide', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'image', pos: 'noun', translation: 'imagen', gender_es: 'f', tags: ['object', 'A1'], unit: 1 },
  { lemma: 'sun', pos: 'noun', translation: 'sol', gender_es: 'm', tags: ['nature', 'A1'], unit: 1 },
  { lemma: 'moon', pos: 'noun', translation: 'luna', gender_es: 'f', tags: ['nature', 'A1'], unit: 1 },
  { lemma: 'pronoun', pos: 'noun', translation: 'pronombre', gender_es: 'm', tags: ['grammar', 'A1'], unit: 1 },
  { lemma: 'people', pos: 'noun', translation: 'gente', gender_es: 'f', tags: ['human', 'A1'], unit: 1 },
  { lemma: 'contraction', pos: 'noun', translation: 'contracción', gender_es: 'f', tags: ['grammar', 'A1'], unit: 1 },
  { lemma: 'select', pos: 'verb', translation: 'seleccionar', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'identify', pos: 'verb', translation: 'identificar', tags: ['action', 'A1'], unit: 1 },
  { lemma: 'boy', pos: 'noun', translation: 'niño', gender_es: 'm', tags: ['human', 'A1'], unit: 1 },
  { lemma: 'man', pos: 'noun', translation: 'hombre', gender_es: 'm', tags: ['human', 'A1'], unit: 1 },
  { lemma: 'formal', pos: 'adjective', translation: 'formal', tags: ['quality', 'A1'], unit: 1 },
  { lemma: 'greeting', pos: 'noun', translation: 'saludo', gender_es: 'm', tags: ['language', 'A1'], unit: 1 },
  { lemma: 'subject', pos: 'noun', translation: 'sujeto', gender_es: 'm', tags: ['grammar', 'A1'], unit: 1 },
  { lemma: 'sentence', pos: 'noun', translation: 'oración', gender_es: 'f', tags: ['language', 'A1'], unit: 1 },
  { lemma: 'opposite', pos: 'noun', translation: 'opuesto', gender_es: 'm', tags: ['concept', 'A1'], unit: 1 },
  { lemma: 'capitalized', pos: 'adjective', translation: 'en mayúsculas', tags: ['grammar', 'A1'], unit: 1 },
  { lemma: 'interview', pos: 'noun', translation: 'entrevista', gender_es: 'f', tags: ['event', 'A1'], unit: 1 },
  { lemma: 'job', pos: 'noun', translation: 'trabajo', gender_es: 'm', tags: ['work', 'A1'], unit: 1 },
  { lemma: 'brown', pos: 'adjective', translation: 'marrón', tags: ['color', 'A1'], unit: 1 },
  { lemma: 'years old', pos: 'adjective', translation: 'años de edad', tags: ['age', 'A1'], unit: 1 },
  { lemma: 'Focus English', pos: 'noun', translation: 'Focus English', tags: ['name', 'A1'], unit: 1 },
  
  // Drinks (Unit 2)
  { lemma: 'coffee', pos: 'noun', countable: false, article: 'some', translation: 'café', gender_es: 'm', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'tea', pos: 'noun', countable: false, article: 'some', translation: 'té', gender_es: 'm', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'water', pos: 'noun', countable: false, article: 'some', translation: 'agua', gender_es: 'f', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'orange juice', pos: 'noun', countable: false, article: 'some', translation: 'zumo de naranja', gender_es: 'm', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'milk', pos: 'noun', countable: false, article: 'some', translation: 'leche', gender_es: 'f', tags: ['drink', 'A1'], unit: 2 },
  
  // Objects & Containers (Unit 5/20)
  { lemma: 'book', pos: 'noun', countable: true, article: 'a', plural: 'books', translation: 'libro', plural_es: 'libros', gender_es: 'm', tags: ['object', 'common_noun', 'storage_item', 'A1'], unit: 5 },
  { lemma: 'key', pos: 'noun', countable: true, article: 'a', plural: 'keys', translation: 'llave', plural_es: 'llaves', gender_es: 'f', tags: ['object', 'common_noun', 'storage_item', 'A1'], unit: 5 },
  { lemma: 'apple', pos: 'noun', countable: true, article: 'an', plural: 'apples', translation: 'manzana', plural_es: 'manzanas', gender_es: 'f', tags: ['food', 'fruit', 'common_noun', 'food_item', 'A1'], unit: 5 },
  { lemma: 'pen', pos: 'noun', countable: true, article: 'a', plural: 'pens', translation: 'bolígrafo', plural_es: 'bolígrafos', gender_es: 'm', tags: ['object', 'common_noun', 'storage_item', 'A1'], unit: 5 },
  { lemma: 'table', pos: 'noun', countable: true, article: 'a', plural: 'tables', translation: 'mesa', plural_es: 'mesas', gender_es: 'f', tags: ['furniture', 'common_noun', 'surface', 'A1'], unit: 20 },
  { lemma: 'chair', pos: 'noun', countable: true, article: 'a', plural: 'chairs', translation: 'silla', plural_es: 'sillas', gender_es: 'f', tags: ['furniture', 'common_noun', 'surface', 'A1'], unit: 20 },
  { lemma: 'box', pos: 'noun', countable: true, article: 'a', plural: 'boxes', translation: 'caja', plural_es: 'cajas', gender_es: 'f', tags: ['container', 'storage_container', 'common_noun', 'A1'], unit: 20 },
  { lemma: 'fridge', pos: 'noun', countable: true, article: 'a', plural: 'fridges', translation: 'nevera', plural_es: 'neveras', gender_es: 'f', tags: ['appliance', 'container', 'food_container', 'common_noun', 'A1'], unit: 20 },
  { lemma: 'bag', pos: 'noun', countable: true, article: 'a', plural: 'bags', translation: 'bolsa', plural_es: 'bolsas', gender_es: 'f', tags: ['container', 'storage_container', 'common_noun', 'A1'], unit: 20 },

  // Verbs
  { lemma: 'want', pos: 'verb', translation: 'querer', i_es: 'quiero', tags: ['stative_verb', 'A1'], unit: 2 },
  { lemma: 'drink', pos: 'verb', translation: 'beber', i_es: 'bebo', tags: ['physical_action', 'A1'], unit: 2 },
  { lemma: 'eat', pos: 'verb', translation: 'comer', i_es: 'como', tags: ['physical_action', 'A1'], unit: 9 },
  { lemma: 'like', pos: 'verb', translation: 'gustar', i_es: 'me gusta', tags: ['action', 'A1'], unit: 9 },
  { lemma: 'wear', pos: 'verb', translation: 'llevar puesto', i_es: 'llevo puesto', tags: ['action', 'A1'], unit: 10 },
  { lemma: 'work', pos: 'verb', translation: 'trabajar', i_es: 'trabajo', tags: ['routine', 'A1'], unit: 4 },
  { lemma: 'sleep', pos: 'verb', translation: 'dormir', i_es: 'duermo', tags: ['routine', 'A1'], unit: 4 },
  { lemma: 'study', pos: 'verb', translation: 'estudiar', i_es: 'estudio', tags: ['routine', 'A1'], unit: 4 },

  // Family (Unit 3)
  { lemma: 'father', pos: 'noun', countable: true, article: 'a', plural: 'fathers', translation: 'padre', plural_es: 'padres', gender_es: 'm', tags: ['family', 'common_noun', 'human', 'm', 'A1'], unit: 3 },
  { lemma: 'mother', pos: 'noun', countable: true, article: 'a', plural: 'mothers', translation: 'madre', plural_es: 'madres', gender_es: 'f', tags: ['family', 'common_noun', 'human', 'f', 'A1'], unit: 3 },
  { lemma: 'sister', pos: 'noun', countable: true, article: 'a', plural: 'sisters', translation: 'hermana', plural_es: 'hermanas', gender_es: 'f', tags: ['family', 'common_noun', 'human', 'f', 'A1'], unit: 3 },
  { lemma: 'brother', pos: 'noun', countable: true, article: 'a', plural: 'brothers', translation: 'hermano', plural_es: 'hermanos', gender_es: 'm', tags: ['family', 'common_noun', 'human', 'm', 'A1'], unit: 3 },
  { lemma: 'son', pos: 'noun', countable: true, article: 'a', plural: 'sons', translation: 'hijo', plural_es: 'hijos', gender_es: 'm', tags: ['family', 'common_noun', 'human', 'm', 'A1'], unit: 3 },
  { lemma: 'daughter', pos: 'noun', countable: true, article: 'a', plural: 'daughters', translation: 'hija', plural_es: 'hijas', gender_es: 'f', tags: ['family', 'common_noun', 'human', 'f', 'A1'], unit: 3 },
  { lemma: 'grandmother', pos: 'noun', countable: true, article: 'a', plural: 'grandmothers', translation: 'abuela', plural_es: 'abuelas', gender_es: 'f', tags: ['family', 'common_noun', 'human', 'f', 'A1'], unit: 3 },
  { lemma: 'grandfather', pos: 'noun', countable: true, article: 'a', plural: 'grandfathers', translation: 'abuelo', plural_es: 'abuelos', gender_es: 'm', tags: ['family', 'common_noun', 'human', 'm', 'A1'], unit: 3 },
  { lemma: 'uncle', pos: 'noun', countable: true, article: 'an', plural: 'uncles', translation: 'tío', plural_es: 'tíos', gender_es: 'm', tags: ['family', 'common_noun', 'human', 'm', 'A1'], unit: 3 },
  { lemma: 'aunt', pos: 'noun', countable: true, article: 'an', plural: 'aunts', translation: 'tía', plural_es: 'tías', gender_es: 'f', tags: ['family', 'common_noun', 'human', 'f', 'A1'], unit: 3 },

  // Possessives & Pronouns
  { lemma: 'my', pos: 'adjective', translation: 'mi', tags: ['possessive', 'A1'], unit: 3 },
  { lemma: 'your', pos: 'adjective', translation: 'tu', tags: ['possessive', 'A1'], unit: 3 },
  { lemma: 'his', pos: 'adjective', translation: 'su', tags: ['possessive', 'A1'], unit: 3 },
  { lemma: 'her', pos: 'adjective', translation: 'su', tags: ['possessive', 'A1'], unit: 3 },

  // Routine & Time (Unit 4/8/24)
  { lemma: 'morning', pos: 'noun', translation: 'mañana', gender_es: 'f', tags: ['time', 'A1'], unit: 4 },
  { lemma: 'afternoon', pos: 'noun', translation: 'tarde', gender_es: 'f', tags: ['time', 'A1'], unit: 4 },
  { lemma: 'night', pos: 'noun', translation: 'noche', gender_es: 'f', tags: ['time', 'A1'], unit: 4 },
  { lemma: 'wake up', pos: 'verb', translation: 'despertarse', i_es: 'me despierto', tags: ['routine', 'morning_activity', 'reflexive', 'A1'], unit: 8 },
  { lemma: 'get up', pos: 'verb', translation: 'levantarse', i_es: 'me levanto', tags: ['routine', 'morning_activity', 'reflexive', 'A1'], unit: 8 },
  { lemma: 'eat breakfast', pos: 'verb', translation: 'desayunar', i_es: 'desayuno', tags: ['routine', 'morning_activity', 'A1'], unit: 8 },
  { lemma: 'go to work', pos: 'verb', translation: 'ir a trabajar', i_es: 'voy a trabajar', tags: ['routine', 'morning_activity', 'A1'], unit: 8 },
  { lemma: 'go to sleep', pos: 'verb', translation: 'ir a dormir', i_es: 'me voy a dormir', tags: ['routine', 'night_activity', 'A1'], unit: 8 },
  { lemma: 'shower', pos: 'verb', translation: 'ducharse', i_es: 'me ducho', tags: ['routine', 'morning_activity', 'night_activity', 'reflexive', 'A1'], unit: 8 },
  { lemma: 'cook', pos: 'verb', translation: 'cocinar', i_es: 'cocino', tags: ['routine', 'night_activity', 'A1'], unit: 8 },
  { lemma: 'read', pos: 'verb', translation: 'leer', i_es: 'leo', tags: ['routine', 'night_activity', 'A1'], unit: 8 },

  // Numbers (Unit 5)
  { lemma: 'one', pos: 'adjective', translation: 'un', tags: ['number', 'A1'], unit: 5 },
  { lemma: 'two', pos: 'adjective', translation: 'dos', tags: ['number', 'A1'], unit: 5 },
  { lemma: 'three', pos: 'adjective', translation: 'tres', tags: ['number', 'A1'], unit: 5 },
  { lemma: 'four', pos: 'adjective', translation: 'cuatro', tags: ['number', 'A1'], unit: 5 },
  { lemma: 'five', pos: 'adjective', translation: 'cinco', tags: ['number', 'A1'], unit: 5 },
  { lemma: 'ten', pos: 'adjective', translation: 'diez', tags: ['number', 'A1'], unit: 5 },

  // Colors (Unit 6)
  { lemma: 'red', pos: 'adjective', translation: 'rojo', tags: ['color', 'A1'], unit: 6 },
  { lemma: 'blue', pos: 'adjective', translation: 'azul', tags: ['color', 'A1'], unit: 6 },
  { lemma: 'green', pos: 'adjective', translation: 'verde', tags: ['color', 'A1'], unit: 6 },
  { lemma: 'yellow', pos: 'adjective', translation: 'amarillo', tags: ['color', 'A1'], unit: 6 },
  { lemma: 'black', pos: 'adjective', translation: 'negro', tags: ['color', 'A1'], unit: 6 },
  { lemma: 'white', pos: 'adjective', translation: 'blanco', tags: ['color', 'A1'], unit: 6 },

  // Days (Unit 7)
  { lemma: 'Monday', pos: 'noun', translation: 'lunes', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Tuesday', pos: 'noun', translation: 'martes', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Wednesday', pos: 'noun', translation: 'miércoles', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Thursday', pos: 'noun', translation: 'jueves', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Friday', pos: 'noun', translation: 'viernes', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Saturday', pos: 'noun', translation: 'sábado', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Sunday', pos: 'noun', translation: 'domingo', gender_es: 'm', tags: ['day', 'A1'], unit: 7 },

  // Food & Clothes
  { lemma: 'pizza', pos: 'noun', translation: 'pizza', gender_es: 'f', tags: ['food', 'A1'], unit: 9 },
  { lemma: 'bread', pos: 'noun', translation: 'pan', gender_es: 'm', tags: ['food', 'A1'], unit: 9 },
  { lemma: 'cheese', pos: 'noun', translation: 'queso', gender_es: 'm', tags: ['food', 'A1'], unit: 9 },
  { lemma: 'T-shirt', pos: 'noun', translation: 'camiseta', gender_es: 'f', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'pants', pos: 'noun', translation: 'pantalones', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'shoes', pos: 'noun', translation: 'zapatos', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'dress', pos: 'noun', translation: 'vestido', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'hat', pos: 'noun', translation: 'sombrero', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'skirt', pos: 'noun', translation: 'falda', gender_es: 'f', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'jacket', pos: 'noun', translation: 'chaqueta', gender_es: 'f', tags: ['clothing', 'A1'], unit: 10 },

  // Jobs (Unit 11)
  { lemma: 'teacher', pos: 'noun', translation: 'profesor/a', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'doctor', pos: 'noun', translation: 'médico/a', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'student', pos: 'noun', translation: 'estudiante', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'nurse', pos: 'noun', translation: 'enfermero/a', gender_es: 'f', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'chef', pos: 'noun', translation: 'cocinero/a', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'waiter', pos: 'noun', translation: 'camarero', gender_es: 'm', tags: ['job', 'human', 'm', 'A1'], unit: 11 },
  { lemma: 'waitress', pos: 'noun', translation: 'camarera', gender_es: 'f', tags: ['job', 'human', 'f', 'A1'], unit: 11 },
  { lemma: 'engineer', pos: 'noun', translation: 'ingeniero/a', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'pilot', pos: 'noun', translation: 'piloto', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'artist', pos: 'noun', translation: 'artista', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },

  // City & Travel
  { lemma: 'bank', pos: 'noun', translation: 'banco', gender_es: 'm', tags: ['city', 'A1'], unit: 12 },
  { lemma: 'park', pos: 'noun', translation: 'parque', gender_es: 'm', tags: ['city', 'A1'], unit: 12 },
  { lemma: 'school', pos: 'noun', translation: 'escuela', gender_es: 'f', tags: ['city', 'A1'], unit: 12 },
  { lemma: 'car', pos: 'noun', translation: 'coche', gender_es: 'm', tags: ['travel', 'A1'], unit: 21 },
  { lemma: 'bus', pos: 'noun', translation: 'autobús', gender_es: 'm', tags: ['travel', 'A1'], unit: 21 },

  // Movement & Emotions
  { lemma: 'walk', pos: 'verb', translation: 'caminar', i_es: 'camino', tags: ['movement', 'A1'], unit: 13 },
  { lemma: 'run', pos: 'verb', translation: 'correr', i_es: 'corro', tags: ['movement', 'A1'], unit: 13 },
  { lemma: 'happy', pos: 'adjective', translation: 'feliz', tags: ['emotion', 'A1'], unit: 14 },
  { lemma: 'sad', pos: 'adjective', translation: 'triste', tags: ['emotion', 'A1'], unit: 14 },

  // Anatomy & Tech
  { lemma: 'eye', pos: 'noun', translation: 'ojo', plural: 'eyes', gender_es: 'm', tags: ['body', 'sight', 'A1'], unit: 18 },
  { lemma: 'nose', pos: 'noun', translation: 'nariz', gender_es: 'f', tags: ['body', 'smell', 'A1'], unit: 18 },
  { lemma: 'mouth', pos: 'noun', translation: 'boca', gender_es: 'f', tags: ['body', 'taste', 'A1'], unit: 18 },
  { lemma: 'ear', pos: 'noun', translation: 'oreja', plural: 'ears', gender_es: 'f', tags: ['body', 'hearing', 'A1'], unit: 18 },
  { lemma: 'see', pos: 'verb', translation: 'ver', i_es: 'veo', tags: ['action', 'sight', 'A1'], unit: 18 },
  { lemma: 'smell', pos: 'verb', translation: 'oler', i_es: 'huelo', tags: ['action', 'smell', 'A1'], unit: 18 },
  { lemma: 'laptop', pos: 'noun', translation: 'ordenador portátil', gender_es: 'm', tags: ['tech', 'office', 'storage_item', 'A1'], unit: 17 },
  { lemma: 'mouse', pos: 'noun', translation: 'ratón', gender_es: 'm', tags: ['tech', 'storage_item', 'A1'], unit: 17 },
  { lemma: 'keyboard', pos: 'noun', translation: 'teclado', gender_es: 'm', tags: ['tech', 'storage_item', 'A1'], unit: 17 },
  { lemma: 'screen', pos: 'noun', translation: 'pantalla', gender_es: 'f', tags: ['tech', 'A1'], unit: 17 },
  { lemma: 'printer', pos: 'noun', translation: 'impresora', gender_es: 'f', tags: ['tech', 'office', 'A1'], unit: 17 },

  // Prepositions (Unit 20)
  { lemma: 'in', pos: 'preposition', translation: 'dentro de', tags: ['prep', 'A1'], unit: 20 },
  { lemma: 'on', pos: 'preposition', translation: 'sobre', tags: ['prep', 'A1'], unit: 20 },
  { lemma: 'under', pos: 'preposition', translation: 'debajo de', tags: ['prep', 'A1'], unit: 20 },

  // Tools (Unit 30)
  { lemma: 'hammer', pos: 'noun', translation: 'martillo', gender_es: 'm', tags: ['tool', 'storage_item', 'A1'], unit: 30 },

  // Grammar & Function Words (Common)
  { lemma: 'a', pos: 'adjective', translation: 'un/una', tags: ['article', 'A1'], unit: 1 },
  { lemma: 'an', pos: 'adjective', translation: 'un/una', tags: ['article', 'A1'], unit: 1 },
  { lemma: 'the', pos: 'adjective', translation: 'el/la/los/las', tags: ['article', 'A1'], unit: 1 },
  { lemma: 'I', pos: 'noun', translation: 'yo', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'you', pos: 'noun', translation: 'tú/usted/vosotros', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'he', pos: 'noun', translation: 'él', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'she', pos: 'noun', translation: 'ella', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'it', pos: 'noun', translation: 'ello/eso', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'we', pos: 'noun', translation: 'nosotros', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'they', pos: 'noun', translation: 'ellos/ellas', tags: ['pronoun', 'A1'], unit: 1 },
  { lemma: 'at', pos: 'preposition', translation: 'en/a', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'with', pos: 'preposition', translation: 'con', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'and', pos: 'adverb', translation: 'y', tags: ['conjunction', 'A1'], unit: 1 },
  { lemma: 'but', pos: 'adverb', translation: 'pero', tags: ['conjunction', 'A1'], unit: 1 },
  { lemma: 'for', pos: 'preposition', translation: 'para/por', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'from', pos: 'preposition', translation: 'de/desde', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'by', pos: 'preposition', translation: 'por/al lado de', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'of', pos: 'preposition', translation: 'de', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'to', pos: 'preposition', translation: 'a/para', tags: ['prep', 'A1'], unit: 1 },
  { lemma: 'this', pos: 'adjective', translation: 'este/esta/esto', tags: ['determiner', 'A1'], unit: 1 },
  { lemma: 'that', pos: 'adjective', translation: 'ese/esa/eso/aquel/aquella', tags: ['determiner', 'A1'], unit: 1 },
  { lemma: 'screwdriver', pos: 'noun', translation: 'destornillador', gender_es: 'm', tags: ['tool', 'storage_item', 'A1'], unit: 30 },
  { lemma: 'wrench', pos: 'noun', translation: 'llave inglesa', gender_es: 'f', tags: ['tool', 'storage_item', 'A1'], unit: 30 },
  { lemma: 'drill', pos: 'noun', translation: 'taladro', gender_es: 'm', tags: ['tool', 'storage_item', 'A1'], unit: 30 },
  
  // Comparisons (Unit 30)
  { lemma: 'better', pos: 'adjective', translation: 'mejor', tags: ['comparative', 'A1'], unit: 30 },
  { lemma: 'than', pos: 'preposition', translation: 'que', tags: ['comparative', 'A1'], unit: 30 },

  // Nature (Unit 27)
  { lemma: 'mountain', pos: 'noun', translation: 'montaña', gender_es: 'f', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'beach', pos: 'noun', translation: 'playa', gender_es: 'f', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'forest', pos: 'noun', translation: 'bosque', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'river', pos: 'noun', translation: 'río', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'tree', pos: 'noun', translation: 'árbol', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'flower', pos: 'noun', translation: 'flor', gender_es: 'f', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'sky', pos: 'noun', translation: 'cielo', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'sun', pos: 'noun', translation: 'sol', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'moon', pos: 'noun', translation: 'luna', gender_es: 'f', tags: ['nature', 'A1'], unit: 27 },

  // Unit 3: Family (More variety)
  { lemma: 'cousin', pos: 'noun', translation: 'primo/a', gender_es: 'm', tags: ['family', 'human', 'A1'], unit: 3 },
  { lemma: 'nephew', pos: 'noun', translation: 'sobrino', gender_es: 'm', tags: ['family', 'human', 'm', 'A1'], unit: 3 },
  { lemma: 'niece', pos: 'noun', translation: 'sobrina', gender_es: 'f', tags: ['family', 'human', 'f', 'A1'], unit: 3 },

  // Unit 10: Clothes (More variety)
  { lemma: 'socks', pos: 'noun', translation: 'calcetines', plural: 'socks', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'coat', pos: 'noun', translation: 'abrigo', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'gloves', pos: 'noun', translation: 'guantes', plural: 'gloves', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },

  // Unit 11: Jobs (More variety)
  { lemma: 'lawyer', pos: 'noun', translation: 'abogado/a', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'dentist', pos: 'noun', translation: 'dentista', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },
  { lemma: 'architect', pos: 'noun', translation: 'arquitecto/a', gender_es: 'm', tags: ['job', 'human', 'A1'], unit: 11 },

  // Unit 8: Routine (More variety)
  { lemma: 'brush teeth', pos: 'verb', translation: 'lavarse los dientes', i_es: 'me lavo los dientes', tags: ['routine', 'morning_activity', 'A1'], unit: 8 },
  { lemma: 'listen to music', pos: 'verb', translation: 'escuchar música', i_es: 'escucho música', tags: ['routine', 'night_activity', 'A1'], unit: 8 },
  { lemma: 'watch TV', pos: 'verb', translation: 'ver la tele', i_es: 'veo la tele', tags: ['routine', 'night_activity', 'A1'], unit: 8 },

  // Health (Unit 28)
  { lemma: 'stomachache', pos: 'noun', translation: 'dolor de estómago', gender_es: 'm', tags: ['health', 'A1'], unit: 28 },
  { lemma: 'headache', pos: 'noun', translation: 'dolor de cabeza', gender_es: 'm', tags: ['health', 'A1'], unit: 28 },
  { lemma: 'cold', pos: 'noun', translation: 'resfriado', gender_es: 'm', tags: ['health', 'A1'], unit: 28 },
  { lemma: 'fever', pos: 'noun', translation: 'fiebre', gender_es: 'f', tags: ['health', 'A1'], unit: 28 },
  { lemma: 'cough', pos: 'noun', translation: 'tos', gender_es: 'f', tags: ['health', 'A1'], unit: 28 },
  { lemma: 'flu', pos: 'noun', translation: 'gripe', gender_es: 'f', tags: ['health', 'A1'], unit: 28 },
];

export const B1_LEXICON: LexicalItem[] = [
  // Unit 1: Life Stories
  { lemma: 'highlight', pos: 'noun', translation: 'punto culminante / momento destacado', gender_es: 'm', tags: ['life', 'B1'], unit: 1 },
  { lemma: 'achievement', pos: 'noun', translation: 'logro', gender_es: 'm', tags: ['success', 'B1'], unit: 1 },
  { lemma: 'background', pos: 'noun', translation: 'trasfondo / antecedentes', gender_es: 'm', tags: ['personal', 'B1'], unit: 1 },
  { lemma: 'turning point', pos: 'noun', translation: 'punto de inflexión', gender_es: 'm', tags: ['life', 'B1'], unit: 1 },
  { lemma: 'milestone', pos: 'noun', translation: 'hito / etapa importante', gender_es: 'm', tags: ['progress', 'B1'], unit: 1 },
  { lemma: 'overcome', pos: 'verb', translation: 'superar', i_es: 'supero', tags: ['resilience', 'B1'], unit: 1 },
  { lemma: 'grow up', pos: 'verb', translation: 'crecer / criarse', i_es: 'crezco', tags: ['life', 'B1'], unit: 1 },
  
  // Unit 2: Experiences & Memories
  { lemma: 'memorable', pos: 'adjective', translation: 'memorable / inolvidable', tags: ['memory', 'B1'], unit: 2 },
  { lemma: 'unforgettable', pos: 'adjective', translation: 'inolvidable', tags: ['memory', 'B1'], unit: 2 },
  { lemma: 'nostalgic', pos: 'adjective', translation: 'nostálgico', tags: ['emotion', 'B1'], unit: 2 },
  { lemma: 'reminisce', pos: 'verb', translation: 'rememorar / recordar', i_es: 'rememoro', tags: ['action', 'B1'], unit: 2 },
  { lemma: 'vivid', pos: 'adjective', translation: 'vívido / muy claro', tags: ['memory', 'B1'], unit: 2 },
  { lemma: 'cherish', pos: 'verb', translation: 'apreciar / guardar con cariño', i_es: 'aprecio', tags: ['emotion', 'B1'], unit: 2 },

  // Unit 3: Work & Professional Life
  { lemma: 'deadline', pos: 'noun', translation: 'fecha límite', gender_es: 'f', tags: ['work', 'B1'], unit: 3 },
  { lemma: 'promote', pos: 'verb', translation: 'ascender', i_es: 'ascienden', tags: ['work', 'B1'], unit: 3 },
  { lemma: 'networking', pos: 'noun', translation: 'red de contactos', gender_es: 'f', tags: ['work', 'B1'], unit: 3 },
  { lemma: 'overtime', pos: 'noun', translation: 'horas extras', gender_es: 'f', tags: ['work', 'B1'], unit: 3 },
  { lemma: 'salary', pos: 'noun', translation: 'salario', gender_es: 'm', tags: ['work', 'B1'], unit: 3 },
  { lemma: 'feedback', pos: 'noun', translation: 'comentarios / retroalimentación', gender_es: 'm', tags: ['work', 'B1'], unit: 3 },

  // Unit 4: Health, Mind & Body
  { lemma: 'wellness', pos: 'noun', translation: 'bienestar', gender_es: 'm', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'balanced', pos: 'adjective', translation: 'equilibrado', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'sore', pos: 'adjective', translation: 'dolorido', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'workout', pos: 'noun', translation: 'entrenamiento', gender_es: 'm', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'immune system', pos: 'noun', translation: 'sistema inmunológico', gender_es: 'm', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'meditation', pos: 'noun', translation: 'meditación', gender_es: 'f', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'recovery', pos: 'noun', translation: 'recuperación', gender_es: 'f', tags: ['health', 'B1'], unit: 4 },
  { lemma: 'lifestyle', pos: 'noun', translation: 'estilo de vida', gender_es: 'm', tags: ['health', 'B1'], unit: 4 },
  
  // Generic B1 Foundational
  { lemma: 'actually', pos: 'adverb', translation: 'en realidad / de hecho', tags: ['generic', 'B1'], unit: 1 },
  { lemma: 'currently', pos: 'adverb', translation: 'actualmente', tags: ['generic', 'B1'], unit: 1 },
  { lemma: 'environment', pos: 'noun', translation: 'medio ambiente / entorno', gender_es: 'm', tags: ['generic', 'B1'], unit: 12 },
  { lemma: 'frequent', pos: 'adjective', translation: 'frecuente', tags: ['generic', 'B1'], unit: 1 },
  { lemma: 'identity', pos: 'noun', translation: 'identidad', gender_es: 'f', tags: ['generic', 'B1'], unit: 1 },
  { lemma: 'movement', pos: 'noun', translation: 'movimiento', gender_es: 'm', tags: ['generic', 'B1'], unit: 1 },
  { lemma: 'professional', pos: 'adjective', translation: 'profesional', tags: ['generic', 'B1'], unit: 6 },
  { lemma: 'sabbatical', pos: 'noun', translation: 'año sabático', gender_es: 'm', tags: ['generic', 'B1'], unit: 6 },
  { lemma: 'success', pos: 'noun', translation: 'éxito', gender_es: 'm', tags: ['generic', 'B1'], unit: 27 },
  { lemma: 'traditional', pos: 'adjective', translation: 'tradicional', tags: ['generic', 'B1'], unit: 19 },
];

export const GLOBAL_LEXICON: LexicalItem[] = [...A1_LEXICON, ...B1_LEXICON];
