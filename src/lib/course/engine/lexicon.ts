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
  { lemma: 'hello', pos: 'noun', translation: 'hola', tags: ['greeting', 'formal', 'A1'], unit: 1 },
  { lemma: 'hi', pos: 'noun', translation: 'hola', tags: ['greeting', 'informal', 'A1'], unit: 1 },
  { lemma: 'good morning', pos: 'noun', translation: 'buenos días', tags: ['greeting', 'morning', 'A1'], unit: 1 },
  { lemma: 'good afternoon', pos: 'noun', translation: 'buenas tardes', tags: ['greeting', 'afternoon', 'A1'], unit: 1 },
  { lemma: 'good evening', pos: 'noun', translation: 'buenas noches', tags: ['greeting', 'evening', 'A1'], unit: 1 },
  { lemma: 'good night', pos: 'noun', translation: 'buenas noches', tags: ['greeting', 'night', 'A1'], unit: 1 },
  { lemma: 'am', pos: 'verb', translation: 'soy', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'are', pos: 'verb', translation: 'eres/estás', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'is', pos: 'verb', translation: 'es/está', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'John', pos: 'noun', translation: 'Juan', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Maria', pos: 'noun', translation: 'María', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'David', pos: 'noun', translation: 'David', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Anna', pos: 'noun', translation: 'Ana', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Peter', pos: 'noun', translation: 'Pedro', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Laura', pos: 'noun', translation: 'Laura', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Carlos', pos: 'noun', translation: 'Carlos', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Elena', pos: 'noun', translation: 'Elena', tags: ['name', 'proper_noun', 'A1'], unit: 1 },
  { lemma: 'Good evening', pos: 'noun', translation: 'Buenas noches', tags: ['greeting', 'A1'], unit: 1 },
  { lemma: 'Good night', pos: 'noun', translation: 'Buenas noches', tags: ['greeting', 'A1'], unit: 1 },
  { lemma: 'Welcome', pos: 'noun', translation: 'Bienvenido', tags: ['greeting', 'A1'], unit: 1 },
  
  // Drinks (Unit 2)
  { lemma: 'coffee', pos: 'noun', countable: false, article: 'some', translation: 'café', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'tea', pos: 'noun', countable: false, article: 'some', translation: 'té', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'water', pos: 'noun', countable: false, article: 'some', translation: 'agua', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'orange juice', pos: 'noun', countable: false, article: 'some', translation: 'zumo de naranja', tags: ['drink', 'A1'], unit: 2 },
  { lemma: 'milk', pos: 'noun', countable: false, article: 'some', translation: 'leche', tags: ['drink', 'A1'], unit: 2 },
  
  // Objects (Unit 5/20)
  { lemma: 'book', pos: 'noun', countable: true, article: 'a', plural: 'books', translation: 'libro', plural_es: 'libros', gender_es: 'm', tags: ['object', 'common_noun', 'A1'], unit: 5 },
  { lemma: 'key', pos: 'noun', countable: true, article: 'a', plural: 'keys', translation: 'llave', plural_es: 'llaves', gender_es: 'f', tags: ['object', 'common_noun', 'A1'], unit: 5 },
  { lemma: 'apple', pos: 'noun', countable: true, article: 'an', plural: 'apples', translation: 'manzana', plural_es: 'manzanas', gender_es: 'f', tags: ['food', 'fruit', 'common_noun', 'A1'], unit: 5 },
  { lemma: 'pen', pos: 'noun', countable: true, article: 'a', plural: 'pens', translation: 'bolígrafo', plural_es: 'bolígrafos', gender_es: 'm', tags: ['object', 'common_noun', 'A1'], unit: 5 },
  
  // Surfaces/Places
  { lemma: 'table', pos: 'noun', countable: true, article: 'a', plural: 'tables', translation: 'mesa', plural_es: 'mesas', gender_es: 'f', tags: ['furniture', 'common_noun', 'surface', 'A1'], unit: 20 },
  { lemma: 'chair', pos: 'noun', countable: true, article: 'a', plural: 'chairs', translation: 'silla', plural_es: 'sillas', gender_es: 'f', tags: ['furniture', 'common_noun', 'surface', 'A1'], unit: 20 },
  { lemma: 'box', pos: 'noun', countable: true, article: 'a', plural: 'boxes', translation: 'caja', plural_es: 'cajas', gender_es: 'f', tags: ['container', 'common_noun', 'A1'], unit: 20 },
  { lemma: 'fridge', pos: 'noun', countable: true, article: 'a', plural: 'fridges', translation: 'nevera', plural_es: 'neveras', gender_es: 'f', tags: ['appliance', 'container', 'common_noun', 'A1'], unit: 20 },

  // Verbs
  { lemma: 'want', pos: 'verb', translation: 'querer', i_es: 'quiero', tags: ['stative_verb', 'A1'], unit: 2 },
  { lemma: 'drink', pos: 'verb', translation: 'beber', i_es: 'bebo', tags: ['physical_action', 'A1'], unit: 2 },
  { lemma: 'eat', pos: 'verb', translation: 'comer', i_es: 'como', tags: ['physical_action', 'A1'], unit: 9 },
  { lemma: 'is', pos: 'verb', translation: 'es/está', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },
  { lemma: 'are', pos: 'verb', translation: 'somos/estamos/son/están', i_es: 'soy', tags: ['be', 'A1'], unit: 1 },

  // Family (Unit 3)
  { lemma: 'father', pos: 'noun', countable: true, article: 'a', plural: 'fathers', translation: 'padre', plural_es: 'padres', gender_es: 'm', tags: ['family', 'common_noun', 'A1'], unit: 3 },
  { lemma: 'mother', pos: 'noun', countable: true, article: 'a', plural: 'mothers', translation: 'madre', plural_es: 'madres', gender_es: 'f', tags: ['family', 'common_noun', 'A1'], unit: 3 },
  { lemma: 'sister', pos: 'noun', countable: true, article: 'a', plural: 'sisters', translation: 'hermana', plural_es: 'hermanas', gender_es: 'f', tags: ['family', 'common_noun', 'A1'], unit: 3 },
  { lemma: 'brother', pos: 'noun', countable: true, article: 'a', plural: 'brothers', translation: 'hermano', plural_es: 'hermanos', gender_es: 'm', tags: ['family', 'common_noun', 'A1'], unit: 3 },
  { lemma: 'son', pos: 'noun', countable: true, article: 'a', plural: 'sons', translation: 'hijo', plural_es: 'hijos', gender_es: 'm', tags: ['family', 'common_noun', 'A1'], unit: 3 },
  { lemma: 'daughter', pos: 'noun', countable: true, article: 'a', plural: 'daughters', translation: 'hija', plural_es: 'hijas', gender_es: 'f', tags: ['family', 'common_noun', 'A1'], unit: 3 },

  // Possessives (Unit 3)
  { lemma: 'my', pos: 'adjective', translation: 'mi', tags: ['possessive', 'A1'], unit: 3 },
  { lemma: 'your', pos: 'adjective', translation: 'tu', tags: ['possessive', 'A1'], unit: 3 },
  { lemma: 'his', pos: 'adjective', translation: 'su (de él)', tags: ['possessive', 'A1'], unit: 3 },
  { lemma: 'her', pos: 'adjective', translation: 'su (de ella)', tags: ['possessive', 'A1'], unit: 3 },

  // Daily Routine (Unit 4)
  { lemma: 'work', pos: 'verb', translation: 'trabajar', i_es: 'trabajo', tags: ['routine', 'A1'], unit: 4 },
  { lemma: 'sleep', pos: 'verb', translation: 'dormir', i_es: 'duermo', tags: ['routine', 'A1'], unit: 4 },
  { lemma: 'study', pos: 'verb', translation: 'estudiar', i_es: 'estudio', tags: ['routine', 'A1'], unit: 4 },
  { lemma: 'morning', pos: 'noun', translation: 'mañana', tags: ['time', 'A1'], unit: 4 },
  { lemma: 'afternoon', pos: 'noun', translation: 'tarde', tags: ['time', 'A1'], unit: 4 },
  { lemma: 'night', pos: 'noun', translation: 'noche', tags: ['time', 'A1'], unit: 4 },

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

  // Time (Unit 7)
  { lemma: 'Monday', pos: 'noun', translation: 'lunes', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Tuesday', pos: 'noun', translation: 'martes', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Wednesday', pos: 'noun', translation: 'miércoles', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Thursday', pos: 'noun', translation: 'jueves', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Friday', pos: 'noun', translation: 'viernes', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Saturday', pos: 'noun', translation: 'sábado', tags: ['day', 'A1'], unit: 7 },
  { lemma: 'Sunday', pos: 'noun', translation: 'domingo', tags: ['day', 'A1'], unit: 7 },

  // Expanded Routine (Unit 8)
  { lemma: 'wake up', pos: 'verb', translation: 'despertarse', i_es: 'despierto', tags: ['routine', 'morning', 'reflexive', 'A1'], unit: 8 },
  { lemma: 'eat breakfast', pos: 'verb', translation: 'desayunar', i_es: 'desayuno', tags: ['routine', 'morning', 'A1'], unit: 8 },
  { lemma: 'go to work', pos: 'verb', translation: 'ir a trabajar', i_es: 'voy a trabajar', tags: ['routine', 'morning', 'A1'], unit: 8 },
  { lemma: 'go to sleep', pos: 'verb', translation: 'ir a dormir', i_es: 'voy a dormir', tags: ['routine', 'night', 'A1'], unit: 8 },

  // Food (Unit 9)
  { lemma: 'pizza', pos: 'noun', translation: 'pizza', gender_es: 'f', tags: ['food', 'A1'], unit: 9 },
  { lemma: 'bread', pos: 'noun', translation: 'pan', gender_es: 'm', tags: ['food', 'A1'], unit: 9 },
  { lemma: 'cheese', pos: 'noun', translation: 'queso', gender_es: 'm', tags: ['food', 'A1'], unit: 9 },
  { lemma: 'like', pos: 'verb', translation: 'gustar', tags: ['action', 'A1'], unit: 9 },

  // Clothes (Unit 10)
  { lemma: 'T-shirt', pos: 'noun', translation: 'camiseta', gender_es: 'f', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'pants', pos: 'noun', translation: 'pantalones', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'shoes', pos: 'noun', translation: 'zapatos', gender_es: 'm', tags: ['clothing', 'A1'], unit: 10 },
  { lemma: 'wear', pos: 'verb', translation: 'llevar puesto', tags: ['action', 'A1'], unit: 10 },

  // Jobs (Unit 11)
  { lemma: 'teacher', pos: 'noun', translation: 'profesor', gender_es: 'm', tags: ['job', 'A1'], unit: 11 },
  { lemma: 'doctor', pos: 'noun', translation: 'médico', gender_es: 'm', tags: ['job', 'A1'], unit: 11 },
  { lemma: 'student', pos: 'noun', translation: 'estudiante', gender_es: 'm', tags: ['job', 'A1'], unit: 11 },

  // City (Unit 12)
  { lemma: 'bank', pos: 'noun', translation: 'banco', gender_es: 'm', tags: ['city', 'A1'], unit: 12 },
  { lemma: 'park', pos: 'noun', translation: 'parque', gender_es: 'm', tags: ['city', 'A1'], unit: 12 },
  { lemma: 'school', pos: 'noun', translation: 'escuela', gender_es: 'f', tags: ['city', 'A1'], unit: 12 },

  // Movement (Unit 13)
  { lemma: 'walk', pos: 'verb', translation: 'caminar', tags: ['movement', 'A1'], unit: 13 },
  { lemma: 'run', pos: 'verb', translation: 'correr', tags: ['movement', 'A1'], unit: 13 },
  { lemma: 'jump', pos: 'verb', translation: 'saltar', tags: ['movement', 'A1'], unit: 13 },

  // Emotions (Unit 14)
  { lemma: 'happy', pos: 'adjective', translation: 'feliz', tags: ['emotion', 'A1'], unit: 14 },
  { lemma: 'sad', pos: 'adjective', translation: 'triste', tags: ['emotion', 'A1'], unit: 14 },
  { lemma: 'angry', pos: 'adjective', translation: 'enfadado', tags: ['emotion', 'A1'], unit: 14 },

  // Animals (Unit 15)
  { lemma: 'dog', pos: 'noun', translation: 'perro', gender_es: 'm', tags: ['animal', 'A1'], unit: 15 },
  { lemma: 'cat', pos: 'noun', translation: 'gato', gender_es: 'm', tags: ['animal', 'A1'], unit: 15 },
  { lemma: 'bird', pos: 'noun', translation: 'pájaro', gender_es: 'm', tags: ['animal', 'A1'], unit: 15 },

  // Weather (Unit 16)
  { lemma: 'sunny', pos: 'adjective', translation: 'soleado', tags: ['weather', 'A1'], unit: 16 },
  { lemma: 'rainy', pos: 'adjective', translation: 'lluvioso', tags: ['weather', 'A1'], unit: 16 },
  { lemma: 'snowy', pos: 'adjective', translation: 'nevado', tags: ['weather', 'A1'], unit: 16 },
  { lemma: 'rain', pos: 'noun', translation: 'lluvia', gender_es: 'f', tags: ['weather', 'A1'], unit: 16 },

  // Technology (Unit 17)
  { lemma: 'laptop', pos: 'noun', translation: 'ordenador portátil', gender_es: 'm', tags: ['tech', 'A1'], unit: 17 },
  { lemma: 'phone', pos: 'noun', translation: 'teléfono', gender_es: 'm', tags: ['tech', 'A1'], unit: 17 },
  { lemma: 'computer', pos: 'noun', translation: 'ordenador', gender_es: 'm', tags: ['tech', 'A1'], unit: 17 },
  { lemma: 'mouse', pos: 'noun', translation: 'ratón', gender_es: 'm', tags: ['tech', 'A1'], unit: 17 },

  // Anatomy (Unit 18)
  { lemma: 'eye', pos: 'noun', translation: 'ojo', plural: 'eyes', gender_es: 'm', tags: ['body', 'A1'], unit: 18 },
  { lemma: 'nose', pos: 'noun', translation: 'nariz', gender_es: 'f', tags: ['body', 'A1'], unit: 18 },
  { lemma: 'mouth', pos: 'noun', translation: 'boca', gender_es: 'f', tags: ['body', 'A1'], unit: 18 },
  { lemma: 'ear', pos: 'noun', translation: 'oreja', plural: 'ears', gender_es: 'f', tags: ['body', 'A1'], unit: 18 },

  // More Actions (Unit 19)
  { lemma: 'swim', pos: 'verb', translation: 'nadar', tags: ['action', 'A1'], unit: 19 },
  { lemma: 'sing', pos: 'verb', translation: 'cantar', tags: ['action', 'A1'], unit: 19 },
  { lemma: 'dance', pos: 'verb', translation: 'bailar', tags: ['action', 'A1'], unit: 19 },
  { lemma: 'can', pos: 'verb', translation: 'poder', tags: ['modal', 'A1'], unit: 19 },

  // Prepositions (Unit 20)
  { lemma: 'in', pos: 'preposition', translation: 'dentro de', tags: ['prep', 'A1'], unit: 20 },
  { lemma: 'on', pos: 'preposition', translation: 'sobre', tags: ['prep', 'A1'], unit: 20 },
  { lemma: 'under', pos: 'preposition', translation: 'debajo de', tags: ['prep', 'A1'], unit: 20 },
  { lemma: 'behind', pos: 'preposition', translation: 'detrás de', tags: ['prep', 'A1'], unit: 20 },

  // Travel (Unit 21)
  { lemma: 'car', pos: 'noun', translation: 'coche', gender_es: 'm', tags: ['travel', 'A1'], unit: 21 },
  { lemma: 'bus', pos: 'noun', translation: 'autobús', gender_es: 'm', tags: ['travel', 'A1'], unit: 21 },
  { lemma: 'train', pos: 'noun', translation: 'tren', gender_es: 'm', tags: ['travel', 'A1'], unit: 21 },
  { lemma: 'plane', pos: 'noun', translation: 'avión', gender_es: 'm', tags: ['travel', 'A1'], unit: 21 },
  { lemma: 'by car', pos: 'noun', translation: 'en coche', gender_es: 'm', tags: ['travel', 'transport', 'A1'], unit: 21 },
  { lemma: 'by bus', pos: 'noun', translation: 'en autobús', gender_es: 'm', tags: ['travel', 'transport', 'A1'], unit: 21 },
  { lemma: 'by train', pos: 'noun', translation: 'en tren', gender_es: 'm', tags: ['travel', 'transport', 'A1'], unit: 21 },
  { lemma: 'by bike', pos: 'noun', translation: 'en bicicleta', gender_es: 'f', tags: ['travel', 'transport', 'A1'], unit: 21 },
  { lemma: 'by plane', pos: 'noun', translation: 'en avión', gender_es: 'm', tags: ['travel', 'transport', 'A1'], unit: 21 },
  { lemma: 'by', pos: 'preposition', translation: 'en (transporte)', tags: ['travel', 'A1'], unit: 21 },

  // Past Tense (Unit 25)
  { lemma: 'was', pos: 'verb', translation: 'era/estaba', tags: ['past', 'be', 'A1'], unit: 25 },
  { lemma: 'were', pos: 'verb', translation: 'éramos/estábamos', tags: ['past', 'be', 'A1'], unit: 25 },
  { lemma: 'yesterday', pos: 'adverb', translation: 'ayer', tags: ['time', 'A1'], unit: 25 },

  // Comparisons (Unit 30)
  { lemma: 'better', pos: 'adjective', translation: 'mejor', tags: ['comparative', 'A1'], unit: 30 },
  { lemma: 'than', pos: 'preposition', translation: 'que (comparación)', tags: ['comparative', 'A1'], unit: 30 },

  // Health (Unit 22)
  { lemma: 'headache', pos: 'noun', translation: 'dolor de cabeza', gender_es: 'm', tags: ['health', 'A1'], unit: 22 },
  { lemma: 'stomachache', pos: 'noun', translation: 'dolor de estómago', gender_es: 'm', tags: ['health', 'A1'], unit: 22 },
  { lemma: 'cold', pos: 'noun', translation: 'resfriado', gender_es: 'm', tags: ['health', 'A1'], unit: 22 },

  // Shopping (Unit 23)
  { lemma: 'shirt', pos: 'noun', countable: true, article: 'a', plural: 'shirts', translation: 'camisa', gender_es: 'f', tags: ['clothing', 'A1'], unit: 23 },
  { lemma: 'dress', pos: 'noun', countable: true, article: 'a', plural: 'dresses', translation: 'vestido', gender_es: 'm', tags: ['clothing', 'A1'], unit: 23 },
  { lemma: 'hat', pos: 'noun', countable: true, article: 'a', plural: 'hats', translation: 'sombrero', gender_es: 'm', tags: ['clothing', 'A1'], unit: 23 },

  // Routine (Unit 24)
  { lemma: 'get up', pos: 'verb', translation: 'levantarse', tags: ['routine', 'A1'], unit: 24 },
  { lemma: 'wake up', pos: 'verb', translation: 'despertarse', tags: ['routine', 'A1'], unit: 24 },

  // Future (Unit 26)
  { lemma: 'travel', pos: 'verb', translation: 'viajar', tags: ['future', 'A1'], unit: 26 },
  { lemma: 'study', pos: 'verb', translation: 'estudiar', tags: ['future', 'A1'], unit: 26 },

  // Nature (Unit 27)
  { lemma: 'mountain', pos: 'noun', countable: true, article: 'a', translation: 'montaña', gender_es: 'f', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'river', pos: 'noun', countable: true, article: 'a', translation: 'río', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },
  { lemma: 'forest', pos: 'noun', countable: true, article: 'a', translation: 'bosque', gender_es: 'm', tags: ['nature', 'A1'], unit: 27 },

  // Office (Unit 28)
  { lemma: 'laptop', pos: 'noun', countable: true, article: 'a', translation: 'portátil', gender_es: 'm', tags: ['office', 'tech', 'A1'], unit: 28 },
  { lemma: 'notebook', pos: 'noun', countable: true, article: 'a', translation: 'cuaderno', gender_es: 'm', tags: ['office', 'A1'], unit: 28 },
  { lemma: 'pen', pos: 'noun', countable: true, article: 'a', translation: 'bolígrafo', gender_es: 'm', tags: ['office', 'A1'], unit: 28 },

  // Hobbies (Unit 29)
  { lemma: 'reading', pos: 'noun', translation: 'la lectura', gender_es: 'f', tags: ['hobby', 'A1'], unit: 29 },
  { lemma: 'painting', pos: 'noun', translation: 'la pintura', gender_es: 'f', tags: ['hobby', 'A1'], unit: 29 },
  { lemma: 'dancing', pos: 'noun', translation: 'el baile', gender_es: 'm', tags: ['hobby', 'A1'], unit: 29 }
];
