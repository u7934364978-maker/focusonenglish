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
  { lemma: 'eat', pos: 'verb', translation: 'comer', tags: ['action', 'A1'] }
];
