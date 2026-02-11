export interface LexicalItem {
  lemma: string;
  pos: 'noun' | 'verb' | 'adjective' | 'preposition' | 'adverb';
  countable?: boolean;
  article?: 'a' | 'an' | 'some';
  plural?: string;
  tags: string[];
  translation: string;
}

export const A1_LEXICON: LexicalItem[] = [
  // Greetings (Unit 1)
  { lemma: 'hello', pos: 'noun', translation: 'hola', tags: ['greeting', 'A1'] },
  { lemma: 'hi', pos: 'noun', translation: 'hola', tags: ['greeting', 'A1'] },
  { lemma: 'good morning', pos: 'noun', translation: 'buenos días', tags: ['greeting', 'A1'] },
  { lemma: 'good afternoon', pos: 'noun', translation: 'buenas tardes', tags: ['greeting', 'A1'] },
  { lemma: 'good evening', pos: 'noun', translation: 'buenas noches', tags: ['greeting', 'A1'] },
  { lemma: 'am', pos: 'verb', translation: 'soy/estoy', tags: ['be', 'A1'] },
  { lemma: 'are', pos: 'verb', translation: 'eres/estás', tags: ['be', 'A1'] },
  { lemma: 'John', pos: 'noun', translation: 'Juan', tags: ['name', 'A1'] },
  { lemma: 'Maria', pos: 'noun', translation: 'María', tags: ['name', 'A1'] },
  { lemma: 'David', pos: 'noun', translation: 'David', tags: ['name', 'A1'] },
  { lemma: 'Anna', pos: 'noun', translation: 'Ana', tags: ['name', 'A1'] },
  { lemma: 'Peter', pos: 'noun', translation: 'Pedro', tags: ['name', 'A1'] },
  { lemma: 'Laura', pos: 'noun', translation: 'Laura', tags: ['name', 'A1'] },
  { lemma: 'Carlos', pos: 'noun', translation: 'Carlos', tags: ['name', 'A1'] },
  { lemma: 'Elena', pos: 'noun', translation: 'Elena', tags: ['name', 'A1'] },
  { lemma: 'Good evening', pos: 'noun', translation: 'Buenas noches', tags: ['greeting', 'A1'] },
  { lemma: 'Good night', pos: 'noun', translation: 'Buenas noches', tags: ['greeting', 'A1'] },
  { lemma: 'Welcome', pos: 'noun', translation: 'Bienvenido', tags: ['greeting', 'A1'] },
  
  // Drinks (Unit 2)
  { lemma: 'coffee', pos: 'noun', countable: false, article: 'some', translation: 'café', tags: ['drink', 'A1'] },
  { lemma: 'tea', pos: 'noun', countable: false, article: 'some', translation: 'té', tags: ['drink', 'A1'] },
  { lemma: 'water', pos: 'noun', countable: false, article: 'some', translation: 'agua', tags: ['drink', 'A1'] },
  { lemma: 'orange juice', pos: 'noun', countable: false, article: 'some', translation: 'zumo de naranja', tags: ['drink', 'A1'] },
  { lemma: 'milk', pos: 'noun', countable: false, article: 'some', translation: 'leche', tags: ['drink', 'A1'] },
  
  // Objects (Unit 20)
  { lemma: 'book', pos: 'noun', countable: true, article: 'a', plural: 'books', translation: 'libro', tags: ['object', 'A1'] },
  { lemma: 'key', pos: 'noun', countable: true, article: 'a', plural: 'keys', translation: 'llave', tags: ['object', 'A1'] },
  { lemma: 'apple', pos: 'noun', countable: true, article: 'an', plural: 'apples', translation: 'manzana', tags: ['food', 'fruit', 'A1'] },
  { lemma: 'pen', pos: 'noun', countable: true, article: 'a', plural: 'pens', translation: 'bolígrafo', tags: ['object', 'A1'] },
  
  // Surfaces/Places
  { lemma: 'table', pos: 'noun', countable: true, article: 'a', plural: 'tables', translation: 'mesa', tags: ['furniture', 'A1'] },
  { lemma: 'chair', pos: 'noun', countable: true, article: 'a', plural: 'chairs', translation: 'silla', tags: ['furniture', 'A1'] },
  { lemma: 'box', pos: 'noun', countable: true, article: 'a', plural: 'boxes', translation: 'caja', tags: ['container', 'A1'] },
  { lemma: 'fridge', pos: 'noun', countable: true, article: 'a', plural: 'fridges', translation: 'nevera', tags: ['appliance', 'A1'] },

  // Verbs
  { lemma: 'want', pos: 'verb', translation: 'querer', tags: ['desire', 'A1'] },
  { lemma: 'drink', pos: 'verb', translation: 'beber', tags: ['action', 'A1'] },
  { lemma: 'eat', pos: 'verb', translation: 'comer', tags: ['action', 'A1'] },
  { lemma: 'is', pos: 'verb', translation: 'es/está', tags: ['be', 'A1'] },
  { lemma: 'are', pos: 'verb', translation: 'somos/estamos/son/están', tags: ['be', 'A1'] },

  // Family (Unit 3)
  { lemma: 'father', pos: 'noun', countable: true, article: 'a', plural: 'fathers', translation: 'padre', tags: ['family', 'A1'] },
  { lemma: 'mother', pos: 'noun', countable: true, article: 'a', plural: 'mothers', translation: 'madre', tags: ['family', 'A1'] },
  { lemma: 'sister', pos: 'noun', countable: true, article: 'a', plural: 'sisters', translation: 'hermana', tags: ['family', 'A1'] },
  { lemma: 'brother', pos: 'noun', countable: true, article: 'a', plural: 'brothers', translation: 'hermano', tags: ['family', 'A1'] },
  { lemma: 'son', pos: 'noun', countable: true, article: 'a', plural: 'sons', translation: 'hijo', tags: ['family', 'A1'] },
  { lemma: 'daughter', pos: 'noun', countable: true, article: 'a', plural: 'daughters', translation: 'hija', tags: ['family', 'A1'] },

  // Possessives (Unit 3)
  { lemma: 'my', pos: 'adjective', translation: 'mi', tags: ['possessive', 'A1'] },
  { lemma: 'your', pos: 'adjective', translation: 'tu', tags: ['possessive', 'A1'] },
  { lemma: 'his', pos: 'adjective', translation: 'su (de él)', tags: ['possessive', 'A1'] },
  { lemma: 'her', pos: 'adjective', translation: 'su (de ella)', tags: ['possessive', 'A1'] },

  // Daily Routine (Unit 4)
  { lemma: 'work', pos: 'verb', translation: 'trabajar', tags: ['routine', 'A1'] },
  { lemma: 'sleep', pos: 'verb', translation: 'dormir', tags: ['routine', 'A1'] },
  { lemma: 'study', pos: 'verb', translation: 'estudiar', tags: ['routine', 'A1'] },
  { lemma: 'morning', pos: 'noun', translation: 'mañana', tags: ['time', 'A1'] },
  { lemma: 'afternoon', pos: 'noun', translation: 'tarde', tags: ['time', 'A1'] },
  { lemma: 'night', pos: 'noun', translation: 'noche', tags: ['time', 'A1'] },

  // Numbers (Unit 5)
  { lemma: 'one', pos: 'adjective', translation: 'uno', tags: ['number', 'A1'] },
  { lemma: 'two', pos: 'adjective', translation: 'dos', tags: ['number', 'A1'] },
  { lemma: 'three', pos: 'adjective', translation: 'tres', tags: ['number', 'A1'] },
  { lemma: 'four', pos: 'adjective', translation: 'cuatro', tags: ['number', 'A1'] },
  { lemma: 'five', pos: 'adjective', translation: 'cinco', tags: ['number', 'A1'] },
  { lemma: 'ten', pos: 'adjective', translation: 'diez', tags: ['number', 'A1'] },

  // Colors (Unit 6)
  { lemma: 'red', pos: 'adjective', translation: 'rojo', tags: ['color', 'A1'] },
  { lemma: 'blue', pos: 'adjective', translation: 'azul', tags: ['color', 'A1'] },
  { lemma: 'green', pos: 'adjective', translation: 'verde', tags: ['color', 'A1'] },
  { lemma: 'yellow', pos: 'adjective', translation: 'amarillo', tags: ['color', 'A1'] },
  { lemma: 'black', pos: 'adjective', translation: 'negro', tags: ['color', 'A1'] },
  { lemma: 'white', pos: 'adjective', translation: 'blanco', tags: ['color', 'A1'] },

  // Time (Unit 7)
  { lemma: 'Monday', pos: 'noun', translation: 'lunes', tags: ['day', 'A1'] },
  { lemma: 'Tuesday', pos: 'noun', translation: 'martes', tags: ['day', 'A1'] },
  { lemma: 'Wednesday', pos: 'noun', translation: 'miércoles', tags: ['day', 'A1'] },
  { lemma: 'Thursday', pos: 'noun', translation: 'jueves', tags: ['day', 'A1'] },
  { lemma: 'Friday', pos: 'noun', translation: 'viernes', tags: ['day', 'A1'] },
  { lemma: 'Saturday', pos: 'noun', translation: 'sábado', tags: ['day', 'A1'] },
  { lemma: 'Sunday', pos: 'noun', translation: 'domingo', tags: ['day', 'A1'] },

  // Expanded Routine (Unit 8)
  { lemma: 'wake up', pos: 'verb', translation: 'despertarse', tags: ['routine', 'A1'] },
  { lemma: 'eat breakfast', pos: 'verb', translation: 'desayunar', tags: ['routine', 'A1'] },
  { lemma: 'go to work', pos: 'verb', translation: 'ir a trabajar', tags: ['routine', 'A1'] },

  // Food (Unit 9)
  { lemma: 'pizza', pos: 'noun', translation: 'pizza', tags: ['food', 'A1'] },
  { lemma: 'bread', pos: 'noun', translation: 'pan', tags: ['food', 'A1'] },
  { lemma: 'cheese', pos: 'noun', translation: 'queso', tags: ['food', 'A1'] },
  { lemma: 'like', pos: 'verb', translation: 'gustar', tags: ['action', 'A1'] },

  // Clothes (Unit 10)
  { lemma: 'T-shirt', pos: 'noun', translation: 'camiseta', tags: ['clothing', 'A1'] },
  { lemma: 'pants', pos: 'noun', translation: 'pantalones', tags: ['clothing', 'A1'] },
  { lemma: 'shoes', pos: 'noun', translation: 'zapatos', tags: ['clothing', 'A1'] },
  { lemma: 'wear', pos: 'verb', translation: 'llevar puesto', tags: ['action', 'A1'] },

  // Jobs (Unit 11)
  { lemma: 'teacher', pos: 'noun', translation: 'profesor', tags: ['job', 'A1'] },
  { lemma: 'doctor', pos: 'noun', translation: 'médico', tags: ['job', 'A1'] },
  { lemma: 'student', pos: 'noun', translation: 'estudiante', tags: ['job', 'A1'] },

  // City (Unit 12)
  { lemma: 'bank', pos: 'noun', translation: 'banco', tags: ['city', 'A1'] },
  { lemma: 'park', pos: 'noun', translation: 'parque', tags: ['city', 'A1'] },
  { lemma: 'school', pos: 'noun', translation: 'escuela', tags: ['city', 'A1'] },

  // Movement (Unit 13)
  { lemma: 'walk', pos: 'verb', translation: 'caminar', tags: ['movement', 'A1'] },
  { lemma: 'run', pos: 'verb', translation: 'correr', tags: ['movement', 'A1'] },
  { lemma: 'jump', pos: 'verb', translation: 'saltar', tags: ['movement', 'A1'] },

  // Emotions (Unit 14)
  { lemma: 'happy', pos: 'adjective', translation: 'feliz', tags: ['emotion', 'A1'] },
  { lemma: 'sad', pos: 'adjective', translation: 'triste', tags: ['emotion', 'A1'] },
  { lemma: 'angry', pos: 'adjective', translation: 'enfadado', tags: ['emotion', 'A1'] },

  // Animals (Unit 15)
  { lemma: 'dog', pos: 'noun', translation: 'perro', tags: ['animal', 'A1'] },
  { lemma: 'cat', pos: 'noun', translation: 'gato', tags: ['animal', 'A1'] },
  { lemma: 'bird', pos: 'noun', translation: 'pájaro', tags: ['animal', 'A1'] },

  // Weather (Unit 16)
  { lemma: 'sunny', pos: 'adjective', translation: 'soleado', tags: ['weather', 'A1'] },
  { lemma: 'rainy', pos: 'adjective', translation: 'lluvioso', tags: ['weather', 'A1'] },
  { lemma: 'snowy', pos: 'adjective', translation: 'nevado', tags: ['weather', 'A1'] },
  { lemma: 'rain', pos: 'noun', translation: 'lluvia', tags: ['weather', 'A1'] },

  // Technology (Unit 17)
  { lemma: 'laptop', pos: 'noun', translation: 'ordenador portátil', tags: ['tech', 'A1'] },
  { lemma: 'phone', pos: 'noun', translation: 'teléfono', tags: ['tech', 'A1'] },
  { lemma: 'computer', pos: 'noun', translation: 'ordenador', tags: ['tech', 'A1'] },
  { lemma: 'mouse', pos: 'noun', translation: 'ratón', tags: ['tech', 'A1'] },

  // Anatomy (Unit 18)
  { lemma: 'eye', pos: 'noun', translation: 'ojo', plural: 'eyes', tags: ['body', 'A1'] },
  { lemma: 'nose', pos: 'noun', translation: 'nariz', tags: ['body', 'A1'] },
  { lemma: 'mouth', pos: 'noun', translation: 'boca', tags: ['body', 'A1'] },
  { lemma: 'ear', pos: 'noun', translation: 'oreja', plural: 'ears', tags: ['body', 'A1'] },

  // More Actions (Unit 19)
  { lemma: 'swim', pos: 'verb', translation: 'nadar', tags: ['action', 'A1'] },
  { lemma: 'sing', pos: 'verb', translation: 'cantar', tags: ['action', 'A1'] },
  { lemma: 'dance', pos: 'verb', translation: 'bailar', tags: ['action', 'A1'] },
  { lemma: 'can', pos: 'verb', translation: 'poder', tags: ['modal', 'A1'] },

  // Prepositions (Unit 20)
  { lemma: 'in', pos: 'preposition', translation: 'dentro de', tags: ['prep', 'A1'] },
  { lemma: 'on', pos: 'preposition', translation: 'sobre', tags: ['prep', 'A1'] },
  { lemma: 'under', pos: 'preposition', translation: 'debajo de', tags: ['prep', 'A1'] },
  { lemma: 'behind', pos: 'preposition', translation: 'detrás de', tags: ['prep', 'A1'] },

  // Travel (Unit 21)
  { lemma: 'car', pos: 'noun', translation: 'coche', tags: ['travel', 'A1'] },
  { lemma: 'bus', pos: 'noun', translation: 'autobús', tags: ['travel', 'A1'] },
  { lemma: 'train', pos: 'noun', translation: 'tren', tags: ['travel', 'A1'] },
  { lemma: 'plane', pos: 'noun', translation: 'avión', tags: ['travel', 'A1'] },
  { lemma: 'by', pos: 'preposition', translation: 'en (transporte)', tags: ['travel', 'A1'] },

  // Past Tense (Unit 25)
  { lemma: 'was', pos: 'verb', translation: 'era/estaba', tags: ['past', 'be', 'A1'] },
  { lemma: 'were', pos: 'verb', translation: 'éramos/estábamos', tags: ['past', 'be', 'A1'] },
  { lemma: 'yesterday', pos: 'adverb', translation: 'ayer', tags: ['time', 'A1'] },

  // Comparisons (Unit 30)
  { lemma: 'better', pos: 'adjective', translation: 'mejor', tags: ['comparative', 'A1'] },
  { lemma: 'than', pos: 'preposition', translation: 'que (comparación)', tags: ['comparative', 'A1'] },

  // Health (Unit 22)
  { lemma: 'headache', pos: 'noun', translation: 'dolor de cabeza', tags: ['health', 'A1'] },
  { lemma: 'stomachache', pos: 'noun', translation: 'dolor de estómago', tags: ['health', 'A1'] },
  { lemma: 'cold', pos: 'noun', translation: 'resfriado', tags: ['health', 'A1'] },

  // Shopping (Unit 23)
  { lemma: 'shirt', pos: 'noun', countable: true, article: 'a', plural: 'shirts', translation: 'camisa', tags: ['clothing', 'A1'] },
  { lemma: 'dress', pos: 'noun', countable: true, article: 'a', plural: 'dresses', translation: 'vestido', tags: ['clothing', 'A1'] },
  { lemma: 'hat', pos: 'noun', countable: true, article: 'a', plural: 'hats', translation: 'sombrero', tags: ['clothing', 'A1'] },

  // Routine (Unit 24)
  { lemma: 'get up', pos: 'verb', translation: 'levantarse', tags: ['routine', 'A1'] },
  { lemma: 'wake up', pos: 'verb', translation: 'despertarse', tags: ['routine', 'A1'] },

  // Future (Unit 26)
  { lemma: 'travel', pos: 'verb', translation: 'viajar', tags: ['future', 'A1'] },
  { lemma: 'study', pos: 'verb', translation: 'estudiar', tags: ['future', 'A1'] },

  // Nature (Unit 27)
  { lemma: 'mountain', pos: 'noun', countable: true, article: 'a', translation: 'montaña', tags: ['nature', 'A1'] },
  { lemma: 'river', pos: 'noun', countable: true, article: 'a', translation: 'río', tags: ['nature', 'A1'] },
  { lemma: 'forest', pos: 'noun', countable: true, article: 'a', translation: 'bosque', tags: ['nature', 'A1'] },

  // Office (Unit 28)
  { lemma: 'laptop', pos: 'noun', countable: true, article: 'a', translation: 'portátil', tags: ['office', 'A1'] },
  { lemma: 'notebook', pos: 'noun', countable: true, article: 'a', translation: 'cuaderno', tags: ['office', 'A1'] },

  // Hobbies (Unit 29)
  { lemma: 'reading', pos: 'noun', translation: 'leer', tags: ['hobby', 'A1'] },
  { lemma: 'painting', pos: 'noun', translation: 'pintar', tags: ['hobby', 'A1'] },
  { lemma: 'dancing', pos: 'noun', translation: 'bailar', tags: ['hobby', 'A1'] }
];
