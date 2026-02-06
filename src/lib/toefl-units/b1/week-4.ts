import { createShardedToeflUnit, genId } from '../utils';

const UNIT_ID = 4;
const LEVEL = 'b1';

// SHARDS 1-2: Humanities & Arts Vocabulary
const s1 = {
  id: genId(LEVEL, UNIT_ID, 's1', 0),
  type: 'listening',
  title: 'Artistic Styles & Techniques',
  transcript: `Today, we're exploring several artistic styles and techniques that have influenced the world of art throughout history. Let's start with Impressionism, which emerged in the late 19th century. Artists like Claude Monet used bright colors and bold brush strokes to capture light and movement. They often painted outdoors to better observe nature. Next, we have Cubism, famously associated with Pablo Picasso. This style breaks objects into geometric shapes and can be seen from multiple viewpoints at once. Moving on to Surrealism, which began in the 1920s. Artists like Salvador Dalí presented dream-like scenes, often with bizarre, illogical elements. A more contemporary style, Abstract Expressionism, focuses on spontaneous, automatic or subconscious creations. Jackson Pollock used this method, where he 'dripped' or 'poured' paint onto canvas. Finally, Digital Art, a newer form, uses digital technology as part of the creation process. This can include anything from computer graphics to 3D modeling. Each of these techniques offers a distinctive way of seeing and interpreting the world.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 1),
    "type": "multiple-choice",
    "question": "What technique did Impressionist artists often use to observe nature?",
    "options": [
      "Painting indoors",
      "Using soft colors",
      "Painting outdoors",
      "Focusing on urban scenes"
    ],
    "correctAnswer": "Painting outdoors",
    "explanation": "Los impresionistas pintaban al aire libre para observar mejor la naturaleza.",
    "context": "They often painted outdoors to better observe nature.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 2),
    "type": "multiple-choice",
    "question": "Which artist is associated with Cubism?",
    "options": [
      "Claude Monet",
      "Salvador Dalí",
      "Jackson Pollock",
      "Pablo Picasso"
    ],
    "correctAnswer": "Pablo Picasso",
    "explanation": "Pablo Picasso es uno de los artistas más destacados del cubismo.",
    "context": "Cubism, famously associated with Pablo Picasso.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 3),
    "type": "multiple-choice",
    "question": "What is a characteristic of Surrealism?",
    "options": [
      "Bizarre, illogical elements",
      "Geometric shapes",
      "Bright colors",
      "Automatic creation"
    ],
    "correctAnswer": "Bizarre, illogical elements",
    "explanation": "El surrealismo presenta escenas de sueño a menudo con elementos extraños e ilógicos.",
    "context": "Artists like Salvador Dalí presented dream-like scenes, often with bizarre, illogical elements.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 4),
    "type": "multiple-choice",
    "question": "Who is known for using Abstract Expressionism?",
    "options": [
      "Claude Monet",
      "Pablo Picasso",
      "Salvador Dalí",
      "Jackson Pollock"
    ],
    "correctAnswer": "Jackson Pollock",
    "explanation": "Jackson Pollock es famoso por su método de goteo en el expresionismo abstracto.",
    "context": "Jackson Pollock used this method, where he 'dripped' or 'poured' paint onto canvas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 5),
    "type": "multiple-choice",
    "question": "What defines Digital Art?",
    "options": [
      "Use of light",
      "Traditional paints",
      "Geometric designs",
      "Digital technology"
    ],
    "correctAnswer": "Digital technology",
    "explanation": "El arte digital utiliza tecnología digital como parte del proceso creativo.",
    "context": "Digital Art, a newer form, uses digital technology as part of the creation process.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 6),
    "type": "multiple-choice",
    "question": "Which movement aimed to capture light and movement in their work?",
    "options": [
      "Cubism",
      "Impressionism",
      "Surrealism",
      "Abstract Expressionism"
    ],
    "correctAnswer": "Impressionism",
    "explanation": "El impresionismo se centró en capturar la luz y el movimiento.",
    "context": "Artists like Claude Monet used bright colors and bold brush strokes to capture light and movement.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 7),
    "type": "multiple-choice",
    "question": "Which art style breaks objects into geometric shapes?",
    "options": [
      "Surrealism",
      "Cubism",
      "Impressionism",
      "Digital Art"
    ],
    "correctAnswer": "Cubism",
    "explanation": "El cubismo rompe objetos en formas geométricas para ofrecer múltiples puntos de vista.",
    "context": "This style breaks objects into geometric shapes and can be seen from multiple viewpoints at once.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 8),
    "type": "multiple-choice",
    "question": "From which decade did Surrealism begin?",
    "options": [
      "1940s",
      "1920s",
      "1890s",
      "1960s"
    ],
    "correctAnswer": "1920s",
    "explanation": "El surrealismo comenzó en la década de 1920.",
    "context": "Surrealism, which began in the 1920s.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 9),
    "type": "multiple-choice",
    "question": "Which artist is known for 'dripping' or 'pouring' paint?",
    "options": [
      "Jackson Pollock",
      "Claude Monet",
      "Pablo Picasso",
      "Salvador Dalí"
    ],
    "correctAnswer": "Jackson Pollock",
    "explanation": "Jackson Pollock es conocido por su método de 'goteo' o 'vertido' de pintura.",
    "context": "Jackson Pollock used this method, where he 'dripped' or 'poured' paint onto canvas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's1', 10),
    "type": "multiple-choice",
    "question": "Which style is known for spontaneous creation?",
    "options": [
      "Abstract Expressionism",
      "Cubism",
      "Surrealism",
      "Impressionism"
    ],
    "correctAnswer": "Abstract Expressionism",
    "explanation": "El expresionismo abstracto se centra en creaciones espontáneas o automáticas.",
    "context": "Abstract Expressionism focuses on spontaneous, automatic or subconscious creations.",
    "points": 1
  }
]
};
const s8 = {
  id: genId(LEVEL, UNIT_ID, 's8', 0),
  type: 'listening',
  title: 'Listening: Museum Audio Guide',
  transcript: `Welcome to the City Art Museum. Our first stop is in the Modern Art Gallery, featuring works from the 20th century. You'll see famous pieces by artists like Pablo Picasso and Jackson Pollock. Notice how Picasso's use of color and shape convey emotion. In Pollock's works, observe his unique technique of dripping paint onto the canvas, creating a chaotic yet harmonized effect. Next, we move to the Impressionist Room. This section has beautiful paintings by Claude Monet and Edgar Degas. Monet's landscapes are known for their vibrant depiction of light and atmosphere. Degas, on the other hand, captured the grace of movement in his dance-focused paintings. Now, let's proceed to the Ancient Art Hall. Here, you'll encounter artifacts from ancient civilizations, such as Egyptian sarcophagi and Roman sculptures. Pay attention to the details on the sculptures, which tell stories of the past. As we walk through the museum, feel free to take your time and ask any questions to our museum guides stationed around. We'll end our audio tour here, but you're welcome to explore further. Don't forget to visit our gift shop for souvenirs related to the exhibits.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 1),
    "type": "multiple-choice",
    "question": "What is the main focus of Jackson Pollock's paintings mentioned in the guide?",
    "options": [
      "The use of vibrant colors to depict emotions",
      "The depiction of light and atmosphere in landscapes",
      "The unique technique of dripping paint onto the canvas",
      "The representation of movement and grace"
    ],
    "correctAnswer": "The unique technique of dripping paint onto the canvas",
    "explanation": "Pollock es famoso por su técnica única de salpicar pintura sobre lienzo.",
    "context": "Observe his unique technique of dripping paint onto the canvas",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 2),
    "type": "multiple-choice",
    "question": "What can be seen in the Ancient Art Hall?",
    "options": [
      "Famous paintings by Claude Monet",
      "Famous paintings by Pablo Picasso",
      "Artifacts from ancient civilizations",
      "Modern abstract sculptures"
    ],
    "correctAnswer": "Artifacts from ancient civilizations",
    "explanation": "El salón de arte antiguo contiene artefactos de civilizaciones antiguas.",
    "context": "Here, you'll encounter artifacts from ancient civilizations",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 3),
    "type": "multiple-choice",
    "question": "What is the purpose of the audio guide at the museum?",
    "options": [
      "To sell souvenirs at the gift shop",
      "To provide directions to different parts of the museum",
      "To offer detailed information about the exhibits",
      "To list upcoming exhibitions and events"
    ],
    "correctAnswer": "To offer detailed information about the exhibits",
    "explanation": "El objetivo de la guía de audio es proporcionar información sobre las exhibiciones.",
    "context": "Our first stop is in the Modern Art Gallery, featuring works from the 20th century.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 4),
    "type": "multiple-choice",
    "question": "Who are featured in the Impressionist Room?",
    "options": [
      "Pablo Picasso and Edgar Degas",
      "Claude Monet and Edgar Degas",
      "Jackson Pollock and Claude Monet",
      "Jackson Pollock and Pablo Picasso"
    ],
    "correctAnswer": "Claude Monet and Edgar Degas",
    "explanation": "La sala impresionista presenta obras de Monet y Degas.",
    "context": "This section has beautiful paintings by Claude Monet and Edgar Degas.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 5),
    "type": "multiple-choice",
    "question": "What is highlighted about Monet's landscapes?",
    "options": [
      "The depiction of modern landscapes",
      "The use of bright colors to depict emotions",
      "The representation of ancient civilizations",
      "The vibrant depiction of light and atmosphere"
    ],
    "correctAnswer": "The vibrant depiction of light and atmosphere",
    "explanation": "Los paisajes de Monet son conocidos por su representación vibrante de la luz.",
    "context": "known for their vibrant depiction of light and atmosphere.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 6),
    "type": "multiple-choice",
    "question": "What should visitors not forget to do according to the guide?",
    "options": [
      "To take pictures in the galleries",
      "To explore the museum more after the tour",
      "To ask questions to any of the artists showcased",
      "To avoid touching the exhibits"
    ],
    "correctAnswer": "To explore the museum more after the tour",
    "explanation": "La guía anima a los visitantes a explorar más después de la visita.",
    "context": "you're welcome to explore further",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 7),
    "type": "multiple-choice",
    "question": "What kind of technique is highlighted in Picasso's works?",
    "options": [
      "Use of vibrant colors to depict light",
      "Play of color and shape to convey emotion",
      "Dripping paint on canvas technique",
      "Capturing motion and grace"
    ],
    "correctAnswer": "Play of color and shape to convey emotion",
    "explanation": "Picasso utiliza color y forma para expresar emociones.",
    "context": "Notice how Picasso's use of color and shape convey emotion.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 8),
    "type": "multiple-choice",
    "question": "What can visitors find in the gift shop?",
    "options": [
      "Original art pieces by the exhibited artists",
      "Souvenirs related to the exhibits",
      "Tickets for special museum events",
      "Discount vouchers for the museum café"
    ],
    "correctAnswer": "Souvenirs related to the exhibits",
    "explanation": "La tienda de regalos ofrece recuerdos relacionados con las exhibiciones.",
    "context": "visit our gift shop for souvenirs related to the exhibits",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 9),
    "type": "multiple-choice",
    "question": "In which room is grace and movement primarily highlighted?",
    "options": [
      "In the Ancient Art Hall",
      "In the Modern Art Gallery",
      "In the Impressionist Room",
      "In the Gift Shop"
    ],
    "correctAnswer": "In the Impressionist Room",
    "explanation": "El enfoque en gracia y movimiento se encuentra en la sala impresionista.",
    "context": "captured the grace of movement in his dance-focused paintings.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's8', 10),
    "type": "multiple-choice",
    "question": "What is significant about the sculptures in the Ancient Art Hall?",
    "options": [
      "They highlight modern artistic techniques",
      "They show detailed storytelling of the past",
      "They are made by famous contemporary artists",
      "They are mostly impressionistic"
    ],
    "correctAnswer": "They show detailed storytelling of the past",
    "explanation": "Las esculturas en el salón de arte antiguo narran historias del pasado.",
    "context": "Pay attention to the details on the sculptures, which tell stories of the past.",
    "points": 1
  }
]
};
const s9 = { id: genId(LEVEL, UNIT_ID, 's9', 0), type: 'vocabulary', title: 'Vocabulary: Creative Process', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's9', i+1), type: 'multiple_choice', question: `Process Question ${i+1}: Define "Inspire".`, options: ['Fill with urge to do something', 'Make tired', 'Stop working'], correctAnswer: 'Fill with urge to do something', points: 1 })) };
const s10 = { id: genId(LEVEL, UNIT_ID, 's10', 0), type: 'vocabulary', title: 'Humanities Roots (Phil, Anthrop, Eth)', questions: Array.from({ length: 10 }, (_, i) => ({ id: genId(LEVEL, UNIT_ID, 's10', i+1), type: 'multiple_choice', question: `Root Question ${i+1}: "Phil-" usually means:`, options: ['Love', 'Hate', 'Fear'], correctAnswer: 'Love', points: 1 })) };


const s2 = {
  id: genId(LEVEL, UNIT_ID, 's2', 0),
  type: 'listening',
  title: 'Placeholder Shard 2',
  transcript: `Welcome, everyone, to our discussion on renewable energy sources. Today, we're going to talk about solar power and wind energy. First, let's consider solar energy, which uses sunlight to produce electricity. Solar panels, which you might have seen on rooftops, absorb sunlight and convert it into energy. This type of energy is very popular because sunlight is free and it's a clean source of energy. Next, we have wind energy. Modern wind turbines capture wind and use it to generate electricity. These turbines can be seen in big open spaces or even at sea. While both solar and wind energy have their advantages and disadvantages, they are crucial for our future energy needs. For instance, if it’s a cloudy day, solar energy production might decrease, but during such times, wind energy could still be effective if there are strong winds. Combined, these renewable energy sources play a vital role in reducing pollution and helping combat climate change.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 1),
    "type": "multiple-choice",
    "question": "What is discussed first in the talk?",
    "options": [
      "Wind energy",
      "Nuclear power",
      "Solar energy",
      "Hydroelectric power"
    ],
    "correctAnswer": "Solar energy",
    "explanation": "La charla comienza discutiendo la energía solar en primer lugar.",
    "context": "Today, we're going to talk about solar power and wind energy. First, let's consider solar energy...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 2),
    "type": "multiple-choice",
    "question": "Where can you commonly see solar panels?",
    "options": [
      "In deep forests",
      "On rooftops",
      "Inside factories",
      "Underwater"
    ],
    "correctAnswer": "On rooftops",
    "explanation": "Los paneles solares se mencionan comúnmente en los tejados.",
    "context": "Solar panels, which you might have seen on rooftops...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 3),
    "type": "multiple-choice",
    "question": "Why is solar energy popular?",
    "options": [
      "It's expensive",
      "Sunlight is free",
      "It's hard to install",
      "It uses fossil fuels"
    ],
    "correctAnswer": "Sunlight is free",
    "explanation": "La energía solar es popular porque la luz del sol es gratuita.",
    "context": "This type of energy is very popular because sunlight is free...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 4),
    "type": "multiple-choice",
    "question": "What do modern wind turbines capture?",
    "options": [
      "Water",
      "Wind",
      "Coal",
      "Sunlight"
    ],
    "correctAnswer": "Wind",
    "explanation": "Los aerogeneradores capturan el viento para generar electricidad.",
    "context": "Modern wind turbines capture wind and use it to generate electricity.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 5),
    "type": "multiple-choice",
    "question": "Where can wind turbines be located?",
    "options": [
      "In urban areas",
      "Underground",
      "In big open spaces",
      "Inside buildings"
    ],
    "correctAnswer": "In big open spaces",
    "explanation": "Los aerogeneradores se pueden encontrar en grandes espacios abiertos.",
    "context": "These turbines can be seen in big open spaces or even at sea.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 6),
    "type": "multiple-choice",
    "question": "What might affect solar energy production?",
    "options": [
      "Cloudy days",
      "Strong winds",
      "High temperatures",
      "Cold water"
    ],
    "correctAnswer": "Cloudy days",
    "explanation": "Los días nublados pueden disminuir la producción de energía solar.",
    "context": "For instance, if it’s a cloudy day, solar energy production might decrease...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 7),
    "type": "multiple-choice",
    "question": "When is wind energy effective?",
    "options": [
      "During earthquakes",
      "When there are strong winds",
      "During snowfall",
      "When there’s no sun"
    ],
    "correctAnswer": "When there are strong winds",
    "explanation": "La energía eólica es efectiva cuando hay vientos fuertes.",
    "context": "...but during such times, wind energy could still be effective if there are strong winds.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 8),
    "type": "multiple-choice",
    "question": "What role do renewable energy sources play?",
    "options": [
      "They generate pollution",
      "They only serve industrial purposes",
      "They help reduce pollution",
      "They primarily are entertainment"
    ],
    "correctAnswer": "They help reduce pollution",
    "explanation": "Las fuentes de energía renovables ayudan a reducir la contaminación.",
    "context": "Combined, these renewable energy sources play a vital role in reducing pollution...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 9),
    "type": "multiple-choice",
    "question": "What does the talk suggest about future energy needs?",
    "options": [
      "They rely solely on fossil fuels",
      "They will decrease",
      "They are crucially supported by renewables",
      "They are irrelevant"
    ],
    "correctAnswer": "They are crucially supported by renewables",
    "explanation": "Las necesidades energéticas futuras dependen de las fuentes renovables.",
    "context": "...they are crucial for our future energy needs.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's2', 10),
    "type": "multiple-choice",
    "question": "What combination helps mitigate climate change?",
    "options": [
      "Nuclear and coal",
      "Solar and fossil fuels",
      "Solar and wind",
      "Hydroelectric and nuclear"
    ],
    "correctAnswer": "Solar and wind",
    "explanation": "La combinación de energía solar y eólica ayuda a mitigar el cambio climático.",
    "context": "Combined, these renewable energy sources play a vital role in reducing pollution and helping combat climate change.",
    "points": 1
  }
]
};
const s3 = {
  id: genId(LEVEL, UNIT_ID, 's3', 0),
  type: 'listening',
  title: 'Placeholder Shard 3',
  transcript: `Welcome, everyone, to today's lecture on the basics of urban gardening. Many people are now growing their own vegetables and flowers in urban spaces. The trend towards urban gardening has gained popularity due to the increasing awareness of sustainable living and the benefits of eating fresh produce. Typically, urban gardens can be found on balconies, rooftops, and even in small backyards. One of the essential things to understand about urban gardening is the need for adequate sunlight. Most plants require at least six hours of sunlight per day. In addition, selecting the right type of soil is crucial for the health of your plants. Container gardening is a popular method where soil quality can be controlled easily. Watering practices are also important; while too little water can dry out the plants, too much can lead to root rot. Additionally, urban gardeners often choose to compost at home to reduce waste and provide nutrient-rich matter for their plants. Let's delve into some details about the common plants people choose for urban gardens. Herbs like basil, mint, and parsley are excellent choices as they do not require much space and can be used fresh for cooking. Vegetables such as tomatoes and peppers are also popular because they can be grown in smaller spaces with the right support systems. If you are thinking about starting your own urban garden, consider attending workshops or joining community gardening groups to gain more knowledge and share experiences with fellow gardeners. These groups can provide valuable insights into dealing with common challenges such as pests and weather changes. The satisfaction of growing your food and contributing to a sustainable lifestyle can be highly rewarding. Now, let's explore these aspects further in our series of questions.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 1),
    "type": "multiple-choice",
    "question": "What is a key reason for the popularity of urban gardening?",
    "options": [
      "Increased awareness of sustainable living",
      "Availability of larger spaces",
      "Expense reduction",
      "Need for decoration"
    ],
    "correctAnswer": "Increased awareness of sustainable living",
    "explanation": "La popularidad del jardín urbano se ha incrementado debido a la consciencia sobre la vida sostenible.",
    "context": "The trend towards urban gardening has gained popularity due to the increasing awareness of sustainable living.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 2),
    "type": "multiple-choice",
    "question": "Where are urban gardens commonly found?",
    "options": [
      "On beach fronts",
      "In factories",
      "On rooftops",
      "In deserts"
    ],
    "correctAnswer": "On rooftops",
    "explanation": "Los jardines urbanos comúnmente se encuentran en lugares como azoteas, balcones y patios pequeños.",
    "context": "Typically, urban gardens can be found on balconies, rooftops, and even in small backyards.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 3),
    "type": "multiple-choice",
    "question": "How many hours of sunlight do most plants need?",
    "options": [
      "At least six hours",
      "One hour",
      "Two hours",
      "Twelve hours"
    ],
    "correctAnswer": "At least six hours",
    "explanation": "La mayoría de las plantas necesitan al menos seis horas de luz solar al día.",
    "context": "Most plants require at least six hours of sunlight per day.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 4),
    "type": "multiple-choice",
    "question": "Why is container gardening popular?",
    "options": [
      "It is easier to control soil quality",
      "It requires less water",
      "It uses no soil",
      "It is cheaper"
    ],
    "correctAnswer": "It is easier to control soil quality",
    "explanation": "La jardinería en contenedores es popular porque permite un control fácil de la calidad del suelo.",
    "context": "Container gardening is a popular method where soil quality can be controlled easily.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 5),
    "type": "multiple-choice",
    "question": "What can lead to root rot in plants?",
    "options": [
      "Too much water",
      "Too much sunlight",
      "Not enough soil",
      "Lack of space"
    ],
    "correctAnswer": "Too much water",
    "explanation": "El exceso de agua puede causar la pudrición de las raíces de las plantas.",
    "context": "While too little water can dry out the plants, too much can lead to root rot.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 6),
    "type": "multiple-choice",
    "question": "Which herb is mentioned as suitable for urban gardening?",
    "options": [
      "Lavender",
      "Basil",
      "Saffron",
      "Rosemary"
    ],
    "correctAnswer": "Basil",
    "explanation": "El albahaca se menciona como una hierba que no requiere mucho espacio y es adecuada para la jardinería urbana.",
    "context": "Herbs like basil, mint, and parsley are excellent choices...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 7),
    "type": "multiple-choice",
    "question": "Which vegetable requires a support system for growth?",
    "options": [
      "Carrots",
      "Tomatoes",
      "Lettuce",
      "Potatoes"
    ],
    "correctAnswer": "Tomatoes",
    "explanation": "Los tomates son populares en jardines urbanos y requieren sistemas de soporte para crecer.",
    "context": "Vegetables such as tomatoes and peppers are also popular because they can be grown in smaller spaces with the right support systems.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 8),
    "type": "multiple-choice",
    "question": "What can help reduce waste and improve plant nutrition in urban gardening?",
    "options": [
      "Composting",
      "Plastic covers",
      "Chemical fertilizers",
      "Artificial light"
    ],
    "correctAnswer": "Composting",
    "explanation": "El compostaje ayuda a reducir desechos y proporciona materia rica en nutrientes para las plantas.",
    "context": "Urban gardeners often choose to compost at home to reduce waste and provide nutrient-rich matter for their plants.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 9),
    "type": "multiple-choice",
    "question": "What can urban gardeners gain from joining community gardening groups?",
    "options": [
      "Fame",
      "Knowledge and shared experiences",
      "Free tools",
      "Scientific awards"
    ],
    "correctAnswer": "Knowledge and shared experiences",
    "explanation": "Unirse a grupos de jardinería comunitaria permite ganar conocimiento y compartir experiencias.",
    "context": "Consider attending workshops or joining community gardening groups to gain more knowledge and share experiences with fellow gardeners.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's3', 10),
    "type": "multiple-choice",
    "question": "What is a rewarding aspect of urban gardening?",
    "options": [
      "Becoming a TV star",
      "Growing your own food",
      "Winning competitions",
      "Building large constructions"
    ],
    "correctAnswer": "Growing your own food",
    "explanation": "La satisfacción de cultivar tu propia comida es un aspecto gratificante de la jardinería urbana.",
    "context": "The satisfaction of growing your food and contributing to a sustainable lifestyle can be highly rewarding.",
    "points": 1
  }
]
};
const s4 = {
  id: genId(LEVEL, UNIT_ID, 's4', 0),
  type: 'listening',
  title: 'Placeholder Shard 4',
  transcript: `Welcome to today's lecture on environmental sustainability. We'll be discussing some simple yet effective ways people can reduce their environmental impact every day. First, consider your use of plastic. Did you know that billions of plastic bags are used worldwide every year? Simple changes like using reusable bags can make a significant difference. Also, think about your energy consumption. Energy-saving light bulbs and turning off appliances when they're not in use can contribute to lower energy bills and less pollution. Thirdly, water conservation is crucial. Fixing leaking taps and using water-efficient fixtures are easy steps to take. Additionally, recycling is vital. Always separate your recyclables from your trash and compost whenever possible. Finally, consider your mode of transportation. Walking or cycling not only reduces carbon emissions but also improves your health. Each small change can lead to a sizeable impact on the environment.`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 1),
    "type": "multiple-choice",
    "question": "What is one way the lecturer suggests reducing the use of plastic?",
    "options": [
      "Avoid using any bags",
      "Use reusable bags",
      "Buy more plastic products",
      "None of the above"
    ],
    "correctAnswer": "Use reusable bags",
    "explanation": "El conferenciante menciona específicamente que el uso de bolsas reutilizables puede marcar una gran diferencia.",
    "context": "Simple changes like using reusable bags can make a significant difference.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 2),
    "type": "multiple-choice",
    "question": "How can someone reduce their energy consumption according to the lecture?",
    "options": [
      "Using energy-saving light bulbs",
      "Leaving appliances on",
      "Buying more lights",
      "Ignoring energy consumption"
    ],
    "correctAnswer": "Using energy-saving light bulbs",
    "explanation": "Se enfatiza el uso de bombillas de bajo consumo como forma de reducir la factura energética y la contaminación.",
    "context": "Energy-saving light bulbs and turning off appliances when they're not in use can contribute to lower energy bills and less pollution.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 3),
    "type": "multiple-choice",
    "question": "What does the lecturer suggest to conserve water?",
    "options": [
      "Water more plants",
      "Fix leaking taps",
      "Use more water fixtures",
      "Ignore leaking taps"
    ],
    "correctAnswer": "Fix leaking taps",
    "explanation": "La sugerencia incluye reparar los grifos con fugas como una forma sencilla de conservar el agua.",
    "context": "Fixing leaking taps and using water-efficient fixtures are easy steps to take.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 4),
    "type": "multiple-choice",
    "question": "What should be done with recyclable materials?",
    "options": [
      "Throw them away",
      "Mix with trash",
      "Separate and compost them",
      "Ignore them"
    ],
    "correctAnswer": "Separate and compost them",
    "explanation": "La separación de reciclables de los desechos y el compostaje son acciones destacadas por el conferenciante.",
    "context": "Always separate your recyclables from your trash and compost whenever possible.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 5),
    "type": "multiple-choice",
    "question": "What benefits are mentioned regarding walking or cycling?",
    "options": [
      "Increases carbon emissions",
      "Reduces carbon emissions and improves health",
      "Is more expensive",
      "None of the above"
    ],
    "correctAnswer": "Reduces carbon emissions and improves health",
    "explanation": "Caminar o andar en bicicleta no solo reduce las emisiones de carbono, sino que también mejora la salud.",
    "context": "Walking or cycling not only reduces carbon emissions but also improves your health.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 6),
    "type": "multiple-choice",
    "question": "Why is recycling important according to the lecture?",
    "options": [
      "It increases waste",
      "It is ignored by many",
      "It reduces environmental impact",
      "It has no effect"
    ],
    "correctAnswer": "It reduces environmental impact",
    "explanation": "El reciclaje es importante porque ayuda a reducir el impacto ambiental.",
    "context": "Recycling is vital.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 7),
    "type": "multiple-choice",
    "question": "What is one way mentioned to lower energy bills?",
    "options": [
      "Using more appliances",
      "Buying expensive gadgets",
      "Turning off appliances when not in use",
      "Leaving lights on"
    ],
    "correctAnswer": "Turning off appliances when not in use",
    "explanation": "Apagar los dispositivos cuando no se utilizan contribuye a reducir las facturas de energía.",
    "context": "Turning off appliances when they're not in use can contribute to lower energy bills.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 8),
    "type": "multiple-choice",
    "question": "What environmental issue is addressed by using reusable bags?",
    "options": [
      "Water wastage",
      "Plastic waste",
      "Air pollution",
      "Noise pollution"
    ],
    "correctAnswer": "Plastic waste",
    "explanation": "El uso de bolsas reutilizables ayuda a reducir la cantidad de desechos plásticos.",
    "context": "Simple changes like using reusable bags can make a significant difference.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 9),
    "type": "multiple-choice",
    "question": "What is the primary focus of today's lecture?",
    "options": [
      "Environmental sustainability",
      "Economic growth",
      "Technological advancement",
      "Historical events"
    ],
    "correctAnswer": "Environmental sustainability",
    "explanation": "La conferencia se centra en la sostenibilidad ambiental y cómo reducir los impactos negativos.",
    "context": "Welcome to today's lecture on environmental sustainability.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's4', 10),
    "type": "multiple-choice",
    "question": "How does the lecturer suggest we can impact the environment positively?",
    "options": [
      "Ignore recycling",
      "Continue usual habits",
      "Implement small changes",
      "Do nothing"
    ],
    "correctAnswer": "Implement small changes",
    "explanation": "Se sugiere que pequeños cambios pueden llevar a un impacto ambiental significativo.",
    "context": "Each small change can lead to a sizeable impact on the environment.",
    "points": 1
  }
]
};
const s5 = {
  id: genId(LEVEL, UNIT_ID, 's5', 0),
  type: 'listening',
  title: 'Placeholder Shard 5',
  transcript: `Good morning, class. Today we're going to discuss recycling, a topic that's becoming more and more important. Recycling is the process of converting waste into reusable material. It helps reduce the consumption of fresh raw materials, decreases energy usage, and minimizes greenhouse gas emissions, which contribute to climate change. Around the world, various countries are making significant efforts to improve their recycling processes. For example, in Japan, recycling is considered a civic duty, and they have a very detailed system separating different types of waste. Residents are required to follow strict guidelines, ensuring proper disposal of materials like plastics, paper, metals, and glass. Additionally, recycling helps save natural resources and supports economic growth by creating jobs in the recycling and manufacturing industries. In the United States, the situation is quite different. While recycling rates have improved over the years, there is still plenty of work to be done. Many American communities offer curbside recycling to make the process easier for residents, but issues such as contamination and lack of public awareness remain challenges. People often incorrectly mix non-recyclable items with recyclables, which can hinder the entire process. Educating the public about what can and cannot be recycled could greatly improve recycling rates. Now, can anyone suggest some items that are commonly recycled?`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 1),
    "type": "multiple-choice",
    "question": "What is the main purpose of recycling mentioned in the lecture?",
    "options": [
      "To reduce waste only",
      "To save natural resources",
      "To generate energy",
      "To create jobs"
    ],
    "correctAnswer": "To save natural resources",
    "explanation": "El orador menciona que el reciclaje ayuda a ahorrar recursos naturales.",
    "context": "Additionally, recycling helps save natural resources and supports economic growth...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 2),
    "type": "multiple-choice",
    "question": "Which country is highlighted for its detailed recycling system?",
    "options": [
      "United States",
      "Canada",
      "Japan",
      "Germany"
    ],
    "correctAnswer": "Japan",
    "explanation": "Japón es mencionado por tener un sistema de reciclaje detallado.",
    "context": "For example, in Japan, recycling is considered a civic duty...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 3),
    "type": "multiple-choice",
    "question": "What is a major challenge for recycling in the United States?",
    "options": [
      "High processing costs",
      "Lack of public awareness",
      "Insufficient raw materials",
      "Limited curbside programs"
    ],
    "correctAnswer": "Lack of public awareness",
    "explanation": "Se menciona que la falta de conciencia pública es un desafío importante.",
    "context": "but issues such as contamination and lack of public awareness remain challenges...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 4),
    "type": "multiple-choice",
    "question": "Why is curbside recycling mentioned in the dialogue?",
    "options": [
      "To point out its absence",
      "To highlight its benefits",
      "To discuss its cost",
      "To propose improvements"
    ],
    "correctAnswer": "To highlight its benefits",
    "explanation": "El reciclaje en la acera se menciona para mostrar cómo facilita el proceso.",
    "context": "Many American communities offer curbside recycling to make the process easier...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 5),
    "type": "multiple-choice",
    "question": "What problem does contamination cause in recycling?",
    "options": [
      "It improves sorting efficiency",
      "It hinders the process",
      "It decreases waste",
      "It increases the value of recycled materials"
    ],
    "correctAnswer": "It hinders the process",
    "explanation": "La contaminación dificulta el proceso de reciclaje, como se menciona en la transcripción.",
    "context": "People often incorrectly mix non-recyclable items with recyclables, which can hinder the entire process...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 6),
    "type": "multiple-choice",
    "question": "What contribution does recycling make towards climate change?",
    "options": [
      "It increases greenhouse emissions",
      "It minimizes greenhouse gas emissions",
      "It has no effect",
      "It promotes deforestation"
    ],
    "correctAnswer": "It minimizes greenhouse gas emissions",
    "explanation": "El reciclaje ayuda a minimizar las emisiones de gases de efecto invernadero.",
    "context": "minimizes greenhouse gas emissions, which contribute to climate change...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 7),
    "type": "multiple-choice",
    "question": "How does Japan view recycling according to the lecture?",
    "options": [
      "As a necessary burden",
      "As a civic duty",
      "As a private matter",
      "As an economic strategy"
    ],
    "correctAnswer": "As a civic duty",
    "explanation": "El reciclaje en Japón se considera un deber cívico según la transcripción.",
    "context": "For example, in Japan, recycling is considered a civic duty...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 8),
    "type": "multiple-choice",
    "question": "What are residents in Japan required to do with their waste?",
    "options": [
      "Burn it",
      "Throw it in one container",
      "Follow strict guidelines",
      "Sell it"
    ],
    "correctAnswer": "Follow strict guidelines",
    "explanation": "En Japón, los residentes deben seguir pautas estrictas para el reciclaje.",
    "context": "Residents are required to follow strict guidelines, ensuring proper disposal...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 9),
    "type": "multiple-choice",
    "question": "Which industry benefits from recycling according to the lecture?",
    "options": [
      "Construction",
      "Manufacturing",
      "Healthcare",
      "Tourism"
    ],
    "correctAnswer": "Manufacturing",
    "explanation": "La industria manufacturera se beneficia del reciclaje al crear empleos.",
    "context": "supports economic growth by creating jobs in the recycling and manufacturing industries...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's5', 10),
    "type": "multiple-choice",
    "question": "What solution is suggested for improving the recycling rate in the US?",
    "options": [
      "Strict penalties",
      "Public education",
      "Buying more bins",
      "Exporting waste"
    ],
    "correctAnswer": "Public education",
    "explanation": "Educar al público es una solución sugerida para mejorar las tasas de reciclaje.",
    "context": "Educating the public about what can and cannot be recycled could greatly improve recycling rates...",
    "points": 1
  }
]
};
const s6 = {
  id: genId(LEVEL, UNIT_ID, 's6', 0),
  type: 'listening',
  title: 'Placeholder Shard 6',
  transcript: `Welcome to our campus tour! Today, we're starting at the main entrance, where you can see the beautiful landscaping and the iconic library building to your right. This library was built in 1950 and has become an important resource for students. To your left is the student center, a hub of activity with cafes, study rooms, and event spaces. Moving forward, you'll see our state-of-the-art science labs, which were recently upgraded to provide the best facilities for our research students. Next, we have the historic Arts Building, which offers various programs in visual and performing arts. At the center of the campus is the courtyard, a perfect place to relax and have lunch between classes. Continuing our tour, we'll pass the sports complex. This facility is not only for athletes; it also provides fitness classes and recreational sports for everyone. Finally, we will end our tour at the student dormitories, where many students live on campus and enjoy easy access to all the facilities. We hope you enjoy the tour and learn more about what makes our campus unique!`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 1),
    "type": "multiple-choice",
    "question": "What can you find at the main entrance of the campus?",
    "options": [
      "The iconic library building",
      "The student dormitories",
      "The sports complex",
      "The Arts Building"
    ],
    "correctAnswer": "The iconic library building",
    "explanation": "La biblioteca icónica está ubicada a la derecha en la entrada principal.",
    "context": "Today, we're starting at the main entrance, where you can see the beautiful landscaping and the iconic library building to your right.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 2),
    "type": "multiple-choice",
    "question": "What is located to the left of the main entrance?",
    "options": [
      "The library",
      "The student center",
      "The science labs",
      "The sports complex"
    ],
    "correctAnswer": "The student center",
    "explanation": "El centro estudiantil se encuentra a la izquierda de la entrada principal.",
    "context": "To your left is the student center, a hub of activity with cafes, study rooms, and event spaces.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 3),
    "type": "multiple-choice",
    "question": "When was the library built?",
    "options": [
      "1940",
      "1950",
      "1960",
      "1970"
    ],
    "correctAnswer": "1950",
    "explanation": "La biblioteca fue construida en 1950.",
    "context": "This library was built in 1950 and has become an important resource for students.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 4),
    "type": "multiple-choice",
    "question": "What can you find in the student center?",
    "options": [
      "Science labs",
      "A gym",
      "Cafes and study rooms",
      "The library"
    ],
    "correctAnswer": "Cafes and study rooms",
    "explanation": "El centro estudiantil tiene cafeterías y salas de estudio.",
    "context": "To your left is the student center, a hub of activity with cafes, study rooms, and event spaces.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 5),
    "type": "multiple-choice",
    "question": "What is described as being recently upgraded?",
    "options": [
      "The library",
      "The science labs",
      "The Arts Building",
      "The sports complex"
    ],
    "correctAnswer": "The science labs",
    "explanation": "Los laboratorios de ciencias han sido recientemente renovados.",
    "context": "Moving forward, you'll see our state-of-the-art science labs, which were recently upgraded.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 6),
    "type": "multiple-choice",
    "question": "Which building offers programs in visual and performing arts?",
    "options": [
      "The library",
      "The student center",
      "The Arts Building",
      "The science labs"
    ],
    "correctAnswer": "The Arts Building",
    "explanation": "El Edificio de Artes ofrece programas en artes visuales y escénicas.",
    "context": "Next, we have the historic Arts Building, which offers various programs in visual and performing arts.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 7),
    "type": "multiple-choice",
    "question": "What is located at the center of the campus?",
    "options": [
      "The library",
      "The courtyard",
      "The dormitories",
      "The science labs"
    ],
    "correctAnswer": "The courtyard",
    "explanation": "El patio está ubicado en el centro del campus.",
    "context": "At the center of the campus is the courtyard, a perfect place to relax and have lunch between classes.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 8),
    "type": "multiple-choice",
    "question": "Who can use the sports complex?",
    "options": [
      "Only athletes",
      "Researchers",
      "Faculty members",
      "Everyone"
    ],
    "correctAnswer": "Everyone",
    "explanation": "El complejo deportivo está disponible para todos, no solo para atletas.",
    "context": "This facility is not only for athletes; it also provides fitness classes and recreational sports for everyone.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 9),
    "type": "multiple-choice",
    "question": "Where will the tour end?",
    "options": [
      "The Arts Building",
      "The science labs",
      "The student center",
      "The student dormitories"
    ],
    "correctAnswer": "The student dormitories",
    "explanation": "El recorrido termina en los dormitorios estudiantiles.",
    "context": "Finally, we will end our tour at the student dormitories.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's6', 10),
    "type": "multiple-choice",
    "question": "What is one benefit of living in the student dormitories?",
    "options": [
      "Easy access to facilities",
      "Private kitchens",
      "Complimentary meals",
      "Access to private gyms"
    ],
    "correctAnswer": "Easy access to facilities",
    "explanation": "Vivir en los dormitorios estudiantiles ofrece fácil acceso a las instalaciones.",
    "context": "Many students live on campus and enjoy easy access to all the facilities.",
    "points": 1
  }
]
};
const s7 = {
  id: genId(LEVEL, UNIT_ID, 's7', 0),
  type: 'listening',
  title: 'Placeholder Shard 7',
  transcript: `Welcome to Placeholder Shard 7 lecture! Today, we will explore the basic principles of gardening. Gardening is not just about planting seeds; it's about understanding the environment, choosing the right plants, knowing when to water them, and more. First, assess the climate - understanding the local weather patterns helps in selecting suitable plants. For example, in a region with hot summers, drought-resistant plants are ideal. Moreover, the soil type also plays a crucial role. Sandy soils drain quickly, while clay retains moisture. Another key aspect is the timing of planting. Spring is generally good for many plants, as the soil starts to warm up. Remember, plants need a balance of sunlight and shade, so select a spot accordingly in your garden. Additionally, talk about the importance of composting. Compost provides essential nutrients that enhance soil quality. In conclusion, with proper planning and attention, anyone can enjoy a flourishing garden. Thank you for listening, and happy gardening!`,
  questions: [
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 1),
    "type": "multiple-choice",
    "question": "What is the first step in successful gardening according to the lecture?",
    "options": [
      "Planting seeds",
      "Understanding the environment",
      "Watering the plants",
      "Using fertilizer"
    ],
    "correctAnswer": "Understanding the environment",
    "explanation": "Es importante comprender el ambiente para seleccionar las plantas adecuadas.",
    "context": "Gardening is not just about planting seeds; it's about understanding the environment...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 2),
    "type": "multiple-choice",
    "question": "What kind of plants should you choose for hot summers?",
    "options": [
      "Tropical plants",
      "Drought-resistant plants",
      "Water plants",
      "Shade-loving plants"
    ],
    "correctAnswer": "Drought-resistant plants",
    "explanation": "Las plantas resistentes a la sequía son las mejores para veranos calurosos.",
    "context": "For example, in a region with hot summers, drought-resistant plants are ideal.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 3),
    "type": "multiple-choice",
    "question": "How does sandy soil affect water drainage?",
    "options": [
      "Drains quickly",
      "Retains moisture",
      "Blocks water",
      "Needs no watering"
    ],
    "correctAnswer": "Drains quickly",
    "explanation": "El suelo arenoso permite que el agua se drene rápidamente.",
    "context": "Sandy soils drain quickly, while clay retains moisture.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 4),
    "type": "multiple-choice",
    "question": "When is the best time to plant many types of plants?",
    "options": [
      "Summer",
      "Winter",
      "Spring",
      "Autumn"
    ],
    "correctAnswer": "Spring",
    "explanation": "La primavera es ideal porque el suelo empieza a calentarse.",
    "context": "Spring is generally good for many plants, as the soil starts to warm up.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 5),
    "type": "multiple-choice",
    "question": "Why is it important to choose the right spot in your garden?",
    "options": [
      "To make it look beautiful",
      "For balance of sunlight and shade",
      "Enhance soil drainage",
      "Avoid windy areas"
    ],
    "correctAnswer": "For balance of sunlight and shade",
    "explanation": "Es importante para asegurar el equilibrio entre la luz solar y la sombra.",
    "context": "Remember, plants need a balance of sunlight and shade, so select a spot accordingly...",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 6),
    "type": "multiple-choice",
    "question": "What benefit does composting provide?",
    "options": [
      "Enhances soil quality",
      "Repels insects",
      "Speeds up growth",
      "Reduces pests"
    ],
    "correctAnswer": "Enhances soil quality",
    "explanation": "El compost mejora la calidad del suelo al proporcionar nutrientes esenciales.",
    "context": "Compost provides essential nutrients that enhance soil quality.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 7),
    "type": "multiple-choice",
    "question": "What is NOT a factor in choosing plants?",
    "options": [
      "Local climate",
      "Soil type",
      "Time of planting",
      "Garden design"
    ],
    "correctAnswer": "Garden design",
    "explanation": "El diseño del jardín no afecta directamente la selección de plantas.",
    "context": "First, assess the climate... Moreover, the soil type also plays a crucial role.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 8),
    "type": "multiple-choice",
    "question": "Which soil type retains moisture well?",
    "options": [
      "Sandy soil",
      "Clay soil",
      "Rocky soil",
      "Salty soil"
    ],
    "correctAnswer": "Clay soil",
    "explanation": "El suelo arcilloso retiene bien la humedad.",
    "context": "Sandy soils drain quickly, while clay retains moisture.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 9),
    "type": "multiple-choice",
    "question": "What is the main purpose of the lecture?",
    "options": [
      "Teach about different flowers",
      "Explain gardening principles",
      "Discuss climate change",
      "Sell gardening products"
    ],
    "correctAnswer": "Explain gardening principles",
    "explanation": "La lección se centra en explicar los principios básicos de la jardinería.",
    "context": "Today, we will explore the basic principles of gardening.",
    "points": 1
  },
  {
    "id": genId(LEVEL, UNIT_ID, 's7', 10),
    "type": "multiple-choice",
    "question": "What can you achieve with proper planning and attention in gardening?",
    "options": [
      "Financial profit",
      "Beautiful landscapes",
      "Flourishing garden",
      "Advanced knowledge"
    ],
    "correctAnswer": "Flourishing garden",
    "explanation": "Con la planificación y atención adecuadas, puedes disfrutar de un jardín floreciente.",
    "context": "In conclusion, with proper planning and attention, anyone can enjoy a flourishing garden.",
    "points": 1
  }
]
};

export const B1_WEEK_4 = createShardedToeflUnit(
  'toefl-b1-w4',
  'Week 4: Humanities & Fine Arts',
  'Immerse yourself in literature, philosophy, and the world of visual arts.',
  ['Distinguish art styles and terminology', 'Use adjectives and adverbs for description', 'Analyze literary devices like metaphors'],
  [s1, s2, s3, s4, s5, s6, s7, s8, s9, s10]
);
