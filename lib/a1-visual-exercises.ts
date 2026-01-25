// Banco de imágenes para ejercicios A1
// Usando URLs de imágenes educativas de alta calidad

export const A1_IMAGE_BANK = {
  // COLORES
  colors: {
    red: 'https://images.unsplash.com/photo-1525648199074-cee30ba79a4a?w=400',
    blue: 'https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?w=400',
    yellow: 'https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=400',
    green: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=400',
  },

  // ANIMALES
  animals: {
    cat: 'https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400',
    dog: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400',
    bird: 'https://images.unsplash.com/photo-1552728089-57bdde30beb3?w=400',
    fish: 'https://images.unsplash.com/photo-1520990984169-d3e0f884eeb2?w=400',
  },

  // FRUTAS
  fruits: {
    apple: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400',
    banana: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400',
    orange: 'https://images.unsplash.com/photo-1580052614034-c55d20bfee3b?w=400',
    grapes: 'https://images.unsplash.com/photo-1599819177090-8c8c7e0d3238?w=400',
  },

  // NÚMEROS (imágenes con objetos para contar)
  numbers: {
    one: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=400', // 1 manzana
    two: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400', // 2 corazones
    three: 'https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?w=400', // 3 estrellas
    four: 'https://images.unsplash.com/photo-1573879625185-5c0e6d36c20f?w=400', // 4 flores
  },

  // FAMILIA
  family: {
    mother: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?w=400',
    father: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400',
    baby: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=400',
    family: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400',
  },

  // OBJETOS COTIDIANOS
  objects: {
    book: 'https://images.unsplash.com/photo-1589998059171-988d887df646?w=400',
    ball: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400',
    car: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=400',
    house: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400',
  },

  // COMIDA
  food: {
    bread: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400',
    milk: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400',
    cheese: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=400',
    egg: 'https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=400',
  },

  // ROPA
  clothes: {
    shirt: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400',
    shoes: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
    hat: 'https://images.unsplash.com/photo-1514327605112-b887c0e61c0a?w=400',
    dress: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400',
  },

  // PARTES DEL CUERPO
  body: {
    hand: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=400',
    foot: 'https://images.unsplash.com/photo-1560343776-97e7d202ff0e?w=400',
    eye: 'https://images.unsplash.com/photo-1585934733612-a63f7cd836b1?w=400',
    mouth: 'https://images.unsplash.com/photo-1616528101862-d816c00e6eb0?w=400',
  },

  // SALUDOS Y EMOCIONES
  emotions: {
    happy: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400',
    sad: 'https://images.unsplash.com/photo-1607193992726-233ac8a25264?w=400',
    hello: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400',
    goodbye: 'https://images.unsplash.com/photo-1502139214982-d0ad755818d8?w=400',
  },
};

// Ejercicios A1 simplificados al máximo (nivel infantil)
export const A1_KIDS_EXERCISES = [
  {
    id: 'a1-colors-1',
    title: '🎨 Aprende los Colores',
    instructions: '¿De qué color es?',
    category: 'vocabulary',
    questions: [
      {
        id: 'q1',
        question: 'What color is this?',
        translation: '¿De qué color es esto?',
        imageUrl: A1_IMAGE_BANK.colors.red,
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correctAnswer: 'Red',
        explanation: 'Esta imagen es de color ROJO. En inglés se dice "Red".',
        audioHint: 'Red',
      },
      {
        id: 'q2',
        question: 'What color is this?',
        translation: '¿De qué color es esto?',
        imageUrl: A1_IMAGE_BANK.colors.blue,
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correctAnswer: 'Blue',
        explanation: 'Esta imagen es de color AZUL. En inglés se dice "Blue".',
        audioHint: 'Blue',
      },
      {
        id: 'q3',
        question: 'What color is this?',
        translation: '¿De qué color es esto?',
        imageUrl: A1_IMAGE_BANK.colors.yellow,
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correctAnswer: 'Yellow',
        explanation: 'Esta imagen es de color AMARILLO. En inglés se dice "Yellow".',
        audioHint: 'Yellow',
      },
      {
        id: 'q4',
        question: 'What color is this?',
        translation: '¿De qué color es esto?',
        imageUrl: A1_IMAGE_BANK.colors.green,
        options: ['Red', 'Blue', 'Green', 'Yellow'],
        correctAnswer: 'Green',
        explanation: 'Esta imagen es de color VERDE. En inglés se dice "Green".',
        audioHint: 'Green',
      },
    ],
  },
  {
    id: 'a1-animals-1',
    title: '🐾 Aprende los Animales',
    instructions: '¿Qué animal es?',
    category: 'vocabulary',
    questions: [
      {
        id: 'q1',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.animals.cat,
        options: ['Cat', 'Dog', 'Bird', 'Fish'],
        correctAnswer: 'Cat',
        explanation: 'Este es un GATO. En inglés se dice "Cat".',
        audioHint: 'Cat',
      },
      {
        id: 'q2',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.animals.dog,
        options: ['Cat', 'Dog', 'Bird', 'Fish'],
        correctAnswer: 'Dog',
        explanation: 'Este es un PERRO. En inglés se dice "Dog".',
        audioHint: 'Dog',
      },
      {
        id: 'q3',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.animals.bird,
        options: ['Cat', 'Dog', 'Bird', 'Fish'],
        correctAnswer: 'Bird',
        explanation: 'Este es un PÁJARO. En inglés se dice "Bird".',
        audioHint: 'Bird',
      },
      {
        id: 'q4',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.animals.fish,
        options: ['Cat', 'Dog', 'Bird', 'Fish'],
        correctAnswer: 'Fish',
        explanation: 'Este es un PEZ. En inglés se dice "Fish".',
        audioHint: 'Fish',
      },
    ],
  },
  {
    id: 'a1-fruits-1',
    title: '🍎 Aprende las Frutas',
    instructions: '¿Qué fruta es?',
    category: 'vocabulary',
    questions: [
      {
        id: 'q1',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.fruits.apple,
        options: ['Apple', 'Banana', 'Orange', 'Grapes'],
        correctAnswer: 'Apple',
        explanation: 'Esta es una MANZANA. En inglés se dice "Apple".',
        audioHint: 'Apple',
      },
      {
        id: 'q2',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.fruits.banana,
        options: ['Apple', 'Banana', 'Orange', 'Grapes'],
        correctAnswer: 'Banana',
        explanation: 'Este es un PLÁTANO. En inglés se dice "Banana".',
        audioHint: 'Banana',
      },
      {
        id: 'q3',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.fruits.orange,
        options: ['Apple', 'Banana', 'Orange', 'Grapes'],
        correctAnswer: 'Orange',
        explanation: 'Esta es una NARANJA. En inglés se dice "Orange".',
        audioHint: 'Orange',
      },
      {
        id: 'q4',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.fruits.grapes,
        options: ['Apple', 'Banana', 'Orange', 'Grapes'],
        correctAnswer: 'Grapes',
        explanation: 'Estas son UVAS. En inglés se dice "Grapes".',
        audioHint: 'Grapes',
      },
    ],
  },
  {
    id: 'a1-objects-1',
    title: '📚 Objetos Cotidianos',
    instructions: '¿Qué objeto es?',
    category: 'vocabulary',
    questions: [
      {
        id: 'q1',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.objects.book,
        options: ['Book', 'Ball', 'Car', 'House'],
        correctAnswer: 'Book',
        explanation: 'Este es un LIBRO. En inglés se dice "Book".',
        audioHint: 'Book',
      },
      {
        id: 'q2',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.objects.ball,
        options: ['Book', 'Ball', 'Car', 'House'],
        correctAnswer: 'Ball',
        explanation: 'Esta es una PELOTA. En inglés se dice "Ball".',
        audioHint: 'Ball',
      },
      {
        id: 'q3',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.objects.car,
        options: ['Book', 'Ball', 'Car', 'House'],
        correctAnswer: 'Car',
        explanation: 'Este es un COCHE. En inglés se dice "Car".',
        audioHint: 'Car',
      },
      {
        id: 'q4',
        question: 'What is this?',
        translation: '¿Qué es esto?',
        imageUrl: A1_IMAGE_BANK.objects.house,
        options: ['Book', 'Ball', 'Car', 'House'],
        correctAnswer: 'House',
        explanation: 'Esta es una CASA. En inglés se dice "House".',
        audioHint: 'House',
      },
    ],
  },
  {
    id: 'a1-numbers-1',
    title: '🔢 Aprende los Números',
    instructions: '¿Cuántos hay?',
    category: 'vocabulary',
    questions: [
      {
        id: 'q1',
        question: 'How many?',
        translation: '¿Cuántos hay?',
        imageUrl: A1_IMAGE_BANK.numbers.one,
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'One',
        explanation: 'Hay UNO. En inglés se dice "One".',
        audioHint: 'One',
      },
      {
        id: 'q2',
        question: 'How many?',
        translation: '¿Cuántos hay?',
        imageUrl: A1_IMAGE_BANK.numbers.two,
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Two',
        explanation: 'Hay DOS. En inglés se dice "Two".',
        audioHint: 'Two',
      },
      {
        id: 'q3',
        question: 'How many?',
        translation: '¿Cuántos hay?',
        imageUrl: A1_IMAGE_BANK.numbers.three,
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Three',
        explanation: 'Hay TRES. En inglés se dice "Three".',
        audioHint: 'Three',
      },
      {
        id: 'q4',
        question: 'How many?',
        translation: '¿Cuántos hay?',
        imageUrl: A1_IMAGE_BANK.numbers.four,
        options: ['One', 'Two', 'Three', 'Four'],
        correctAnswer: 'Four',
        explanation: 'Hay CUATRO. En inglés se dice "Four".',
        audioHint: 'Four',
      },
    ],
  },
];
