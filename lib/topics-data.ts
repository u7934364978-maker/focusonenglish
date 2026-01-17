// ============================================
// TEMAS ESTRUCTURADOS POR NIVEL CEFR
// ============================================

export interface Topic {
  id: string;
  name: string;
  nameEs: string;
  module: string;
  moduleEs: string;
  description: string;
  keywords: string[];
  levels: CEFRLevel[];
}

export type CEFRLevel = 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';

export const TOPICS: Topic[] = [
  // MÓDULO 1: Personal Information & Daily Life
  {
    id: 'greetings-introductions',
    name: 'Greetings & Introductions',
    nameEs: 'Saludos y Presentaciones',
    module: 'Personal Information & Daily Life',
    moduleEs: 'Información Personal y Vida Diaria',
    description: 'Greetings, introducing yourself, saying goodbye',
    keywords: ['hello', 'goodbye', 'nice to meet you', 'how are you', 'my name is'],
    levels: ['A1', 'A2']
  },
  {
    id: 'family-relationships',
    name: 'Family & Relationships',
    nameEs: 'Familia y Relaciones',
    module: 'Personal Information & Daily Life',
    moduleEs: 'Información Personal y Vida Diaria',
    description: 'Family members, relationships, describing people',
    keywords: ['mother', 'father', 'sister', 'brother', 'family', 'parents', 'children'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'daily-routines',
    name: 'Daily Routines',
    nameEs: 'Rutinas Diarias',
    module: 'Personal Information & Daily Life',
    moduleEs: 'Información Personal y Vida Diaria',
    description: 'Daily activities, routines, schedules',
    keywords: ['wake up', 'breakfast', 'go to work', 'sleep', 'routine', 'every day'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'house-home',
    name: 'House & Home',
    nameEs: 'Casa y Hogar',
    module: 'Personal Information & Daily Life',
    moduleEs: 'Información Personal y Vida Diaria',
    description: 'House, rooms, furniture, home activities',
    keywords: ['house', 'apartment', 'bedroom', 'kitchen', 'living room', 'furniture'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'personal-information',
    name: 'Personal Information',
    nameEs: 'Información Personal',
    module: 'Personal Information & Daily Life',
    moduleEs: 'Información Personal y Vida Diaria',
    description: 'Name, age, nationality, occupation, contact info',
    keywords: ['name', 'age', 'from', 'nationality', 'job', 'address', 'phone'],
    levels: ['A1', 'A2']
  },
  {
    id: 'physical-descriptions',
    name: 'Physical Descriptions',
    nameEs: 'Descripciones Físicas',
    module: 'Personal Information & Daily Life',
    moduleEs: 'Información Personal y Vida Diaria',
    description: 'Physical appearance, clothing, colors',
    keywords: ['tall', 'short', 'hair', 'eyes', 'wear', 'appearance'],
    levels: ['A1', 'A2', 'B1']
  },

  // MÓDULO 2: Food & Shopping
  {
    id: 'food-drinks',
    name: 'Food & Drinks',
    nameEs: 'Comida y Bebidas',
    module: 'Food & Shopping',
    moduleEs: 'Comida y Compras',
    description: 'Food, drinks, fruits, vegetables, meals',
    keywords: ['food', 'drink', 'eat', 'fruit', 'vegetable', 'meal', 'hungry', 'thirsty'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'restaurant',
    name: 'At the Restaurant',
    nameEs: 'En el Restaurante',
    module: 'Food & Shopping',
    moduleEs: 'Comida y Compras',
    description: 'Ordering food, restaurant vocabulary, menus',
    keywords: ['menu', 'order', 'waiter', 'bill', 'reservation', 'table'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },
  {
    id: 'shopping',
    name: 'Shopping',
    nameEs: 'Compras',
    module: 'Food & Shopping',
    moduleEs: 'Comida y Compras',
    description: 'Shopping, stores, prices, buying things',
    keywords: ['buy', 'shop', 'store', 'price', 'pay', 'money', 'expensive', 'cheap'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'clothes-colors',
    name: 'Clothes & Colors',
    nameEs: 'Ropa y Colores',
    module: 'Food & Shopping',
    moduleEs: 'Comida y Compras',
    description: 'Clothing, colors, sizes, fashion',
    keywords: ['shirt', 'pants', 'dress', 'shoes', 'color', 'size', 'wear'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'numbers-time',
    name: 'Numbers & Time',
    nameEs: 'Números y Tiempo',
    module: 'Food & Shopping',
    moduleEs: 'Comida y Compras',
    description: 'Numbers, time, days, months, dates',
    keywords: ['one', 'two', 'time', 'hour', 'day', 'week', 'month', 'year', 'date'],
    levels: ['A1', 'A2']
  },

  // MÓDULO 3: Activities & Hobbies
  {
    id: 'hobbies-free-time',
    name: 'Hobbies & Free Time',
    nameEs: 'Pasatiempos y Tiempo Libre',
    module: 'Activities & Hobbies',
    moduleEs: 'Actividades y Pasatiempos',
    description: 'Hobbies, leisure activities, interests',
    keywords: ['hobby', 'like', 'enjoy', 'free time', 'play', 'read', 'watch'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },
  {
    id: 'sports-exercise',
    name: 'Sports & Exercise',
    nameEs: 'Deportes y Ejercicio',
    module: 'Activities & Hobbies',
    moduleEs: 'Actividades y Pasatiempos',
    description: 'Sports, exercise, fitness, teams',
    keywords: ['sport', 'play', 'team', 'exercise', 'run', 'swim', 'football', 'tennis'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },
  {
    id: 'weather-seasons',
    name: 'Weather & Seasons',
    nameEs: 'Clima y Estaciones',
    module: 'Activities & Hobbies',
    moduleEs: 'Actividades y Pasatiempos',
    description: 'Weather, seasons, climate, temperature',
    keywords: ['weather', 'sunny', 'rain', 'snow', 'hot', 'cold', 'season', 'spring', 'summer'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'animals-pets',
    name: 'Animals & Pets',
    nameEs: 'Animales y Mascotas',
    module: 'Activities & Hobbies',
    moduleEs: 'Actividades y Pasatiempos',
    description: 'Animals, pets, wildlife, nature',
    keywords: ['dog', 'cat', 'pet', 'animal', 'bird', 'fish', 'have a pet'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    nameEs: 'Entretenimiento',
    module: 'Activities & Hobbies',
    moduleEs: 'Actividades y Pasatiempos',
    description: 'Music, movies, TV, entertainment',
    keywords: ['music', 'movie', 'film', 'TV', 'watch', 'listen', 'song', 'concert'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },

  // MÓDULO 4: Places & Travel
  {
    id: 'city-places',
    name: 'City & Places',
    nameEs: 'Ciudad y Lugares',
    module: 'Places & Travel',
    moduleEs: 'Lugares y Viajes',
    description: 'City, public places, buildings, locations',
    keywords: ['city', 'town', 'bank', 'post office', 'library', 'park', 'street'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'directions',
    name: 'Directions',
    nameEs: 'Direcciones',
    module: 'Places & Travel',
    moduleEs: 'Lugares y Viajes',
    description: 'Giving and asking for directions, locations',
    keywords: ['left', 'right', 'straight', 'turn', 'next to', 'between', 'near'],
    levels: ['A1', 'A2', 'B1']
  },
  {
    id: 'transportation',
    name: 'Transportation',
    nameEs: 'Transporte',
    module: 'Places & Travel',
    moduleEs: 'Lugares y Viajes',
    description: 'Transport, travel, vehicles, journeys',
    keywords: ['bus', 'train', 'car', 'plane', 'taxi', 'travel', 'trip', 'ticket'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },
  {
    id: 'countries-nationalities',
    name: 'Countries & Nationalities',
    nameEs: 'Países y Nacionalidades',
    module: 'Places & Travel',
    moduleEs: 'Lugares y Viajes',
    description: 'Countries, nationalities, languages, cultures',
    keywords: ['country', 'from', 'nationality', 'language', 'speak', 'England', 'Spain'],
    levels: ['A1', 'A2', 'B1']
  },

  // MÓDULO 5: Work & Education
  {
    id: 'jobs-occupations',
    name: 'Jobs & Occupations',
    nameEs: 'Trabajos y Profesiones',
    module: 'Work & Education',
    moduleEs: 'Trabajo y Educación',
    description: 'Jobs, professions, careers, work activities',
    keywords: ['job', 'work', 'teacher', 'doctor', 'engineer', 'profession', 'career'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },
  {
    id: 'school-education',
    name: 'School & Education',
    nameEs: 'Escuela y Educación',
    module: 'Work & Education',
    moduleEs: 'Trabajo y Educación',
    description: 'School, education, subjects, learning',
    keywords: ['school', 'student', 'teacher', 'learn', 'study', 'class', 'subject', 'exam'],
    levels: ['A1', 'A2', 'B1', 'B2']
  },
  {
    id: 'at-work',
    name: 'At Work',
    nameEs: 'En el Trabajo',
    module: 'Work & Education',
    moduleEs: 'Trabajo y Educación',
    description: 'Workplace, office, colleagues, meetings',
    keywords: ['office', 'colleague', 'boss', 'meeting', 'computer', 'email', 'project'],
    levels: ['A2', 'B1', 'B2', 'C1']
  },

  // MÓDULO 6: Health & Body
  {
    id: 'body-parts',
    name: 'Body Parts',
    nameEs: 'Partes del Cuerpo',
    module: 'Health & Body',
    moduleEs: 'Salud y Cuerpo',
    description: 'Body parts, physical features',
    keywords: ['head', 'arm', 'leg', 'hand', 'foot', 'eye', 'ear', 'nose', 'mouth'],
    levels: ['A1', 'A2']
  },
  {
    id: 'health-feelings',
    name: 'Health & Feelings',
    nameEs: 'Salud y Sentimientos',
    module: 'Health & Body',
    moduleEs: 'Salud y Cuerpo',
    description: 'Health, feelings, emotions, illnesses',
    keywords: ['feel', 'happy', 'sad', 'tired', 'sick', 'doctor', 'medicine', 'pain'],
    levels: ['A1', 'A2', 'B1', 'B2']
  }
];

// ============================================
// FUNCIONES AUXILIARES
// ============================================

/**
 * Obtener temas disponibles para un nivel específico
 */
export function getTopicsForLevel(level: CEFRLevel): Topic[] {
  return TOPICS.filter(topic => topic.levels.includes(level));
}

/**
 * Obtener un tema aleatorio para un nivel
 */
export function getRandomTopicForLevel(level: CEFRLevel): Topic {
  const availableTopics = getTopicsForLevel(level);
  const randomIndex = Math.floor(Math.random() * availableTopics.length);
  return availableTopics[randomIndex];
}

/**
 * Obtener tema por ID
 */
export function getTopicById(id: string): Topic | undefined {
  return TOPICS.find(topic => topic.id === id);
}

/**
 * Obtener todos los módulos únicos
 */
export function getAllModules(): string[] {
  const modules = TOPICS.map(topic => topic.module);
  return [...new Set(modules)];
}

/**
 * Obtener temas de un módulo específico
 */
export function getTopicsByModule(moduleName: string, level?: CEFRLevel): Topic[] {
  let topics = TOPICS.filter(topic => topic.module === moduleName);
  if (level) {
    topics = topics.filter(topic => topic.levels.includes(level));
  }
  return topics;
}
