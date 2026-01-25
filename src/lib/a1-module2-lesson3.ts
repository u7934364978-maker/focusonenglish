// Lección 3 del Módulo 2 - Curso A1
// There is / There are + Prepositions of Place

import { Lesson, Exercise, Question, VoiceRecordingExercise, GrammarExercise, ReadingExercise, ListeningExercise, WritingExercise } from './exercise-types';

export const A1_MODULE_2_LESSON_3: Lesson = {
  id: 'a1-m2-l3',
  title: 'Lección 3: Describing Places - There is/There are',
  description: 'Aprende a describir lugares y ubicaciones usando "there is/there are" y preposiciones de lugar',
  duration: 60,
  objectives: [
    'Usar "there is" y "there are" correctamente',
    'Describir lugares y habitaciones',
    'Usar preposiciones de lugar: in, on, under, next to, behind',
    'Hacer preguntas sobre ubicaciones'
  ],
  exercises: [
    {
      id: 'a1-m2-l3-grammar-1',
      type: 'grammar',
      title: 'There is / There are',
      grammarPoint: 'There is + singular / There are + plural',
      explanation: `Usamos "there is" y "there are" para decir qué hay en un lugar:

- **There is** (singular): There is a book on the table.
- **There are** (plural): There are three chairs in the room.
- **Negativo**: There isn't a TV. / There aren't any windows.
- **Pregunta**: Is there a park? / Are there any shops?

Estructura:
✓ There is + a/an + singular noun
✓ There are + number/some/many + plural noun`,
      examples: [
        'There is a cat under the table.',
        'There are two shops in my street.',
        'Is there a supermarket near here?',
        'There aren\'t any books on the desk.',
        'There is some milk in the fridge.'
      ],
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Choose the correct option: ___ a computer in the classroom.',
          options: ['There is', 'There are', 'Is there', 'Are there'],
          correctAnswer: 'There is',
          explanation: 'Usamos "There is" porque "a computer" es singular.',
          points: 1
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: '___ three parks in my city.',
          options: ['There is', 'There are', 'Is there', 'Are there'],
          correctAnswer: 'There are',
          explanation: 'Usamos "There are" porque "three parks" es plural.',
          points: 1
        },
        {
          id: 'q3',
          type: 'fill-blank',
          question: 'Complete: ___ any students in the library? (pregunta)',
          correctAnswer: 'Are there',
          acceptableAnswers: ['are there'],
          explanation: 'Para preguntas con plural usamos "Are there".',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Complete: ___ a dog in the garden. (negativo)',
          correctAnswer: 'There isn\'t',
          acceptableAnswers: ['There is not', 'there isn\'t', 'there is not'],
          explanation: 'Negativo singular: There isn\'t (There is not).',
          points: 1
        },
        {
          id: 'q5',
          type: 'multiple-choice',
          question: '___ any eggs in the fridge?',
          options: ['Is there', 'Are there', 'There is', 'There are'],
          correctAnswer: 'Are there',
          explanation: '"Eggs" es plural, entonces preguntamos con "Are there".',
          points: 1
        }
      ]
    },
    {
      id: 'a1-m2-l3-grammar-2',
      type: 'grammar',
      title: 'Prepositions of Place',
      grammarPoint: 'in, on, under, next to, behind, in front of',
      explanation: `Las preposiciones de lugar nos dicen DÓNDE está algo:

- **in** = dentro de (in the box)
- **on** = encima de (on the table)
- **under** = debajo de (under the bed)
- **next to** = al lado de (next to the door)
- **behind** = detrás de (behind the sofa)
- **in front of** = delante de (in front of the TV)
- **between** = entre (between the chairs)

Ejemplo completo:
The cat is **on** the sofa.
There is a lamp **next to** the bed.`,
      examples: [
        'The book is on the table.',
        'There is a cat under the chair.',
        'The bank is next to the supermarket.',
        'My car is in front of the house.',
        'The park is behind the school.'
      ],
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'The keys are ___ the table.',
          options: ['in', 'on', 'under', 'behind'],
          correctAnswer: 'on',
          explanation: 'Las llaves están "encima de" la mesa = on the table.',
          points: 1
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'There is a dog ___ the sofa. (debajo)',
          options: ['on', 'in', 'under', 'next to'],
          correctAnswer: 'under',
          explanation: '"Debajo de" = under.',
          points: 1
        },
        {
          id: 'q3',
          type: 'fill-blank',
          question: 'The supermarket is ___ the bank. (al lado de)',
          correctAnswer: 'next to',
          acceptableAnswers: ['next to', 'beside'],
          explanation: '"Al lado de" = next to or beside.',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'My bag is ___ my room. (dentro de)',
          correctAnswer: 'in',
          explanation: '"Dentro de" = in.',
          points: 1
        },
        {
          id: 'q5',
          type: 'multiple-choice',
          question: 'The car is ___ the house. (delante de)',
          options: ['behind', 'in front of', 'next to', 'between'],
          correctAnswer: 'in front of',
          explanation: '"Delante de" = in front of.',
          points: 1
        }
      ]
    },
    {
      id: 'a1-m2-l3-reading-1',
      type: 'reading',
      title: 'My Bedroom',
      text: `My bedroom is my favorite place in the house. It's not very big, but it's comfortable and nice.

There is a bed next to the window. On the bed, there are two pillows and a blue blanket. Under the bed, there is a box with my old toys.

There is a desk in front of the bed. On the desk, there is a computer, some books, and a lamp. My chair is under the desk. Next to the desk, there is a small bookshelf. There are many books on the bookshelf - I love reading!

Behind the door, there is a big wardrobe. In the wardrobe, there are all my clothes and shoes. There are also some bags on top of the wardrobe.

On the walls, there are three posters of my favorite bands. There is a clock on the wall too, above the desk.

There aren't any plants in my room, but there is a small fish tank on the bookshelf. There are two goldfish in the tank. Their names are Goldie and Sunny.

I really love my bedroom. It's my special place!

Word count: 185`,
      wordCount: 185,
      readingTime: 2,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Where is the bed?',
          options: ['Next to the window', 'Behind the door', 'In front of the desk', 'Under the window'],
          correctAnswer: 'Next to the window',
          explanation: 'El texto dice: "There is a bed next to the window."',
          points: 1
        },
        {
          id: 'q2',
          type: 'true-false',
          question: 'True or False: There are plants in the bedroom.',
          correctAnswer: 'False',
          explanation: 'El texto dice: "There aren\'t any plants in my room."',
          points: 1
        },
        {
          id: 'q3',
          type: 'multiple-choice',
          question: 'What is on the desk?',
          options: [
            'A computer, books, and a lamp',
            'A fish tank',
            'Clothes and shoes',
            'Posters'
          ],
          correctAnswer: 'A computer, books, and a lamp',
          explanation: 'El texto menciona: "On the desk, there is a computer, some books, and a lamp."',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Where is the wardrobe? It\'s ___ the door.',
          correctAnswer: 'behind',
          explanation: '"Behind the door, there is a big wardrobe."',
          points: 1
        },
        {
          id: 'q5',
          type: 'short-answer',
          question: 'How many goldfish are in the tank? What are their names?',
          correctAnswer: 'Two goldfish: Goldie and Sunny',
          acceptableAnswers: ['two', '2', 'Goldie and Sunny', 'Two: Goldie and Sunny'],
          explanation: 'El texto dice: "There are two goldfish in the tank. Their names are Goldie and Sunny."',
          points: 2
        }
      ],
      vocabularyHelp: [
        { word: 'comfortable', definition: 'nice to be in, pleasant' },
        { word: 'pillow', definition: 'soft thing you put your head on in bed' },
        { word: 'blanket', definition: 'cover to keep warm in bed' },
        { word: 'wardrobe', definition: 'large cupboard for clothes' },
        { word: 'bookshelf', definition: 'furniture for keeping books' },
        { word: 'fish tank', definition: 'glass container with water for fish' }
      ]
    },
    {
      id: 'a1-m2-l3-listening-1',
      type: 'listening',
      title: 'Tom\'s New Apartment',
      audioUrl: '/audio/a1-m2-l3-listening-1.mp3',
      duration: 90,
      allowReplay: true,
      maxReplays: 3,
      transcript: `Tom: Hi Sarah! Welcome to my new apartment!

Sarah: Wow, Tom! It's really nice! Is there a balcony?

Tom: Yes, there is! It's behind the living room. Come, I'll show you around.

Sarah: Great! So, where's the kitchen?

Tom: The kitchen is next to the living room, on the left. There's a big table in the kitchen.

Sarah: Cool! Are there many rooms?

Tom: Well, there are two bedrooms and one bathroom. The bathroom is between the two bedrooms.

Sarah: And where's your bedroom?

Tom: My bedroom is at the end of the hall, on the right. There's a big bed and a desk in my room.

Sarah: Is there a TV in the living room?

Tom: Yes, there is. The TV is on the wall, above the sofa. And there are some plants next to the window.

Sarah: It sounds perfect! Are there any shops near here?

Tom: Yes, there are! There's a supermarket in front of the building, and there are some restaurants behind it.

Sarah: That's so convenient! I really like your new place!

Tom: Thanks! There's coffee in the kitchen. Let's have some!`,
      questions: [
        {
          id: 'q1',
          type: 'multiple-choice',
          question: 'Where is the balcony?',
          options: ['Next to the kitchen', 'Behind the living room', 'In front of the building', 'Between the bedrooms'],
          correctAnswer: 'Behind the living room',
          explanation: 'Tom dice: "Yes, there is! It\'s behind the living room."',
          points: 1
        },
        {
          id: 'q2',
          type: 'multiple-choice',
          question: 'How many bedrooms are there?',
          options: ['One', 'Two', 'Three', 'Four'],
          correctAnswer: 'Two',
          explanation: 'Tom menciona: "there are two bedrooms and one bathroom."',
          points: 1
        },
        {
          id: 'q3',
          type: 'true-false',
          question: 'True or False: The bathroom is next to the kitchen.',
          correctAnswer: 'False',
          explanation: 'El baño está "between the two bedrooms", no al lado de la cocina.',
          points: 1
        },
        {
          id: 'q4',
          type: 'fill-blank',
          question: 'Where is the TV? It\'s ___ the wall.',
          correctAnswer: 'on',
          explanation: 'Tom dice: "The TV is on the wall, above the sofa."',
          points: 1
        },
        {
          id: 'q5',
          type: 'short-answer',
          question: 'What shops are near the apartment?',
          correctAnswer: 'A supermarket and some restaurants',
          acceptableAnswers: ['supermarket and restaurants', 'a supermarket and restaurants'],
          explanation: 'Tom menciona: "There\'s a supermarket in front of the building, and there are some restaurants behind it."',
          points: 2
        }
      ]
    },
    {
      id: 'a1-m2-l3-speaking-1',
      type: 'speaking',
      title: 'Describing Your Home',
      prompt: 'Describe your room or your house. Say what there is and where things are. Use "there is/there are" and prepositions (in, on, under, next to, behind). Speak for 1-2 minutes.',
      timeLimit: 120,
      evaluationCriteria: {
        pronunciation: true,
        fluency: true,
        grammar: true,
        vocabulary: true
      },
      hints: [
        'Start with: "In my room, there is..."',
        'Use: on the table, under the bed, next to the door',
        'Describe at least 5 things',
        'Use plural: There are (books, chairs, etc.)',
        'Say what there isn\'t: There isn\'t a TV'
      ],
      targetWords: [
        'there is',
        'there are',
        'on',
        'in',
        'under',
        'next to',
        'behind',
        'bed',
        'table',
        'chair',
        'window',
        'door'
      ],
      expectedResponse: 'A 1-2 minute description of a room or house using "there is/there are" and prepositions of place. Should include: (1) At least 5 items/furniture, (2) Correct use of "there is" (singular) and "there are" (plural), (3) At least 3 different prepositions (in, on, under, next to, behind), (4) Clear descriptions of where things are located. Example: "In my room, there is a bed next to the window. On the bed, there are two pillows. There is a desk in front of the bed, and on the desk there is a computer..."'
    },
    {
      id: 'a1-m2-l3-writing-1',
      type: 'writing',
      title: 'Describing Your Favorite Place',
      prompt: 'Write a short description of your favorite place (your room, a café, a park, etc.). Describe what there is in this place and where things are. Use "there is/there are" and prepositions of place.',
      writingType: 'description',
      minWords: 80,
      maxWords: 120,
      timeLimit: 20,
      rubric: {
        content: 25,
        organization: 25,
        grammar: 25,
        vocabulary: 25
      },
      tips: [
        'Give your text a title',
        'Start with: "My favorite place is..."',
        'Use: There is/There are',
        'Use prepositions: in, on, under, next to, behind, in front of',
        'Describe at least 5 things',
        'Say why you like this place at the end',
        'Check: Is/Are correct? Singular/Plural?'
      ]
    }
  ]
};

export default A1_MODULE_2_LESSON_3;
