import { Exercise } from '@/lib/exercise-generator';

export const UNIT_7_EXERCISES: Exercise[] = [
  // --- SUB-TOPIC 1: Planning & Bookings (1-10) ---
  {
    id: "b1-u7-e1",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Itinerary",
          back: "Itinerario",
          pronunciation: "/aɪˈtɪn.ər.ər.i/",
          example: "We have a very tight itinerary for our trip to London.",
          explanation: "Un plan detallado de una ruta o viaje."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e2",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "To book in advance",
          back: "Reservar con antelación",
          pronunciation: "/tuː bʊk ɪn ədˈvɑːns/",
          example: "It's cheaper if you book your flight in advance.",
          explanation: "Hacer una reserva antes de la fecha del evento o viaje."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e3",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Accommodation",
          back: "Alojamiento",
          pronunciation: "/əˌkɒm.əˈdeɪ.ʃən/",
          example: "We are looking for cheap accommodation near the city center.",
          explanation: "Un lugar donde vivir o quedarse, especialmente por poco tiempo."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e4",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Travel insurance",
          back: "Seguro de viaje",
          pronunciation: "/ˈtræv.əl ɪnˈʃɔː.rəns/",
          example: "Never travel abroad without a good travel insurance.",
          explanation: "Seguro que cubre gastos médicos o pérdidas durante un viaje."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e5",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Destination",
          back: "Destino",
          pronunciation: "/ˌdes.tɪˈneɪ.ʃən/",
          example: "Spain is a very popular holiday destination.",
          explanation: "El lugar al que alguien va o a donde se envía algo."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e6",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Making Plans',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'We need to __________ our hotel room today.',
          options: ["book", "read", "live", "stay"],
          correctAnswer: 0,
          explanation: "To 'book' means to reserve a place in advance."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e7",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Travel Prep',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'I always print my __________ before going to the airport.',
          options: ["itinerary", "dictionary", "furniture", "laundry"],
          correctAnswer: 0,
          explanation: "An itinerary shows your travel schedule and plans."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e8",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Stay Options',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'Finding good __________ is the most expensive part of the trip.',
          options: ["accommodation", "direction", "conversation", "imagination"],
          correctAnswer: 0,
          explanation: "Accommodation refers to the place where you stay (hotels, apartments, etc.)."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e9",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Safety First',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'Does your __________ cover lost luggage?',
          options: ["travel insurance", "driver's license", "credit card", "library card"],
          correctAnswer: 0,
          explanation: "Travel insurance protects you against unexpected travel costs or losses."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e10",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      title: 'Trip Goals',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'What is your dream __________ for next summer?',
          options: ["destination", "explanation", "invitation", "foundation"],
          correctAnswer: 0,
          explanation: "A destination is the place you are traveling to."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 2: Future Forms: Going to vs Will (11-20) ---
  {
    id: "b1-u7-e11",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Planned Trips',
      instructions: 'Choose the correct future form.',
      questions: [
        {
          id: 'q1',
          question: 'I __________ to Paris next month. I already have the tickets.',
          options: ["am going to travel", "will travel", "travel", "was traveling"],
          correctAnswer: 0,
          explanation: "Use 'be going to' for plans and intentions already made."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e12",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Sudden Decisions',
      instructions: 'Choose the correct future form.',
      questions: [
        {
          id: 'q1',
          question: 'Look at those cheap flights! I think I __________ them now.',
          options: ["will buy", "am going to buy", "buy", "bought"],
          correctAnswer: 0,
          explanation: "Use 'will' for spontaneous decisions made at the moment of speaking."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e13",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Holiday Weather',
      instructions: 'Choose the correct prediction.',
      questions: [
        {
          id: 'q1',
          question: 'I checked the forecast. It __________ sunny all week.',
          options: ["is going to be", "will being", "was", "is being"],
          correctAnswer: 0,
          explanation: "Use 'be going to' for predictions based on present evidence (the forecast)."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e14",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Offers',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'Don\'t worry about the suitcases. I __________ you with them.',
          options: ["will help", "am going to help", "help", "helped"],
          correctAnswer: 0,
          explanation: "Use 'will' for offers and promises."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e15",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Arranged Events',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'Our flight __________ at 10:00 PM tonight.',
          options: ["leaves", "is going to leave", "will leave", "leave"],
          correctAnswer: 0,
          explanation: "The Present Simple is used for fixed schedules (trains, planes, etc.)."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e16",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Plans: London',
      instructions: "Fill in the correct form (be going to).",
      questions: [
        {
          id: 'q1',
          text: "We ___ (visit) the British Museum while we are in London.",
          correctAnswer: "are going to visit",
          explanation: "Use 'be going to' for planned intentions."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e17",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Intentions',
      instructions: "Fill in the correct form (be going to).",
      questions: [
        {
          id: 'q1',
          text: "I ___ (not take) my laptop on holiday this year.",
          correctAnswer: "am not going to take",
          explanation: "Negative form of 'be going to' for intentions."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e18",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Spontaneous Offer',
      instructions: "Fill in the correct form (will).",
      questions: [
        {
          id: 'q1',
          text: "That bag looks heavy. I ___ (carry) it for you.",
          correctAnswer: "will carry",
          explanation: "Use 'will' for offers made at the moment."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e19",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Prediction',
      instructions: "Fill in the correct form (will).",
      questions: [
        {
          id: 'q1',
          text: "I think you ___ (have) a great time in Italy.",
          correctAnswer: "will have",
          explanation: "Use 'will' for predictions based on opinion."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e20",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Scheduled Flight',
      instructions: "Fill in the correct form (Present Simple).",
      questions: [
        {
          id: 'q1',
          text: "The train ___ (arrive) at the platform in five minutes.",
          correctAnswer: "arrives",
          explanation: "Fixed schedules use Present Simple."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 3: At the Airport (21-30) ---
  {
    id: "b1-u7-e21",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Boarding pass",
          back: "Tarjeta de embarque",
          pronunciation: "/ˈbɔː.dɪŋ ˌpɑːs/",
          example: "You need to show your boarding pass at the gate.",
          explanation: "Documento que permite a un pasajero subir a un avión."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e22",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Check-in desk",
          back: "Mostrador de facturación",
          pronunciation: "/ˈtʃek.ɪn desk/",
          example: "The check-in desk for our flight is already open.",
          explanation: "Lugar donde entregas el equipaje y obtienes tu tarjeta de embarque."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e23",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Excess baggage",
          back: "Exceso de equipaje",
          pronunciation: "/ɪkˈses ˈbæɡ.ɪdʒ/",
          example: "I had to pay a fee for my excess baggage.",
          explanation: "Equipaje que pesa más de lo permitido por la aerolínea."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e24",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Carry-on luggage",
          back: "Equipaje de mano",
          pronunciation: "/ˈkæri ɒn ˈbæɡ.ɪdʒ/",
          example: "I only travel with carry-on luggage to save time.",
          explanation: "Maletas pequeñas que puedes llevar contigo dentro del avión."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e25",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Delayed",
          back: "Retrasado",
          pronunciation: "/dɪˈleɪd/",
          example: "Our flight was delayed for two hours due to the fog.",
          explanation: "Cuando algo ocurre más tarde de lo planeado."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e26",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Airport Locations',
      instructions: 'Match the airport area with its function.',
      pairs: [
        { id: "v1", left: "Check-in desk", right: "Dropping off bags" },
        { id: "v2", left: "Security control", right: "Scanning passengers" },
        { id: "v3", left: "Duty-free shop", right: "Buying tax-free goods" },
        { id: "v4", left: "Departure gate", right: "Waiting to board" }
      ]
    } as any
  },
  {
    id: "b1-u7-e27",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Luggage Terms',
      instructions: 'Match the luggage type with the description.',
      pairs: [
        { id: "l1", left: "Checked luggage", right: "Goes in the plane's hold" },
        { id: "l2", left: "Carry-on", right: "Goes in the cabin" },
        { id: "l3", left: "Backpack", right: "Carried on your back" },
        { id: "l4", left: "Excess baggage", right: "Heavier than allowed" }
      ]
    } as any
  },
  {
    id: "b1-u7-e28",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Boarding Trouble',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'We can\'t find our __________! We might miss the flight.',
          options: ["boarding passes", "dictionaries", "envelopes", "calendars"],
          correctAnswer: 0,
          explanation: "You cannot board a plane without a boarding pass."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e29",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Flight Status',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "I'm sorry, but your flight has been ___ by three hours.",
          correctAnswer: "delayed",
          explanation: "Delayed means arriving or leaving later than scheduled."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e30",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Checking In',
      instructions: 'Say this sentence at the airport.',
      questions: [
        {
          id: 'q1',
          text: "I would like to check in my suitcase and take this small bag as carry-on.",
          correctAnswer: "I would like to check in my suitcase and take this small bag as carry-on",
          explanation: "Practica la entonación al hacer una solicitud."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 4: Future Continuous (31-40) ---
  {
    id: "b1-u7-e31",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Continuous: Action in Progress',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'This time tomorrow, I __________ on a beach in Hawaii.',
          options: ["will be lying", "will lie", "am lying", "lie"],
          correctAnswer: 0,
          explanation: "Future Continuous (will be + -ing) is used for actions in progress at a specific time in the future."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e32",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Continuous: Flight',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'At 8 PM, we __________ over the Atlantic.',
          options: ["will be flying", "will fly", "fly", "are flying"],
          correctAnswer: 0,
          explanation: "Use Future Continuous for actions happening at a specific future point."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e33",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Continuous: Politeness',
      instructions: 'Choose the correct question.',
      questions: [
        {
          id: 'q1',
          question: '__________ the car this weekend, or can I use it?',
          options: ["Will you be using", "Will you use", "Are you using", "Do you use"],
          correctAnswer: 0,
          explanation: "The Future Continuous is often used to ask about people's plans politely."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e34",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Continuous Practice',
      instructions: "Fill in the correct form (will be + -ing).",
      questions: [
        {
          id: 'q1',
          text: "Don't call me at 10:00. I ___ (sleep) in my hotel room.",
          correctAnswer: "will be sleeping",
          explanation: "Action in progress at a specific future time."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e35",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Continuous Practice',
      instructions: "Fill in the correct form (will be + -ing).",
      questions: [
        {
          id: 'q1',
          text: "They ___ (have) dinner at that famous restaurant tonight.",
          correctAnswer: "will be having",
          explanation: "Action in progress in the future."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e36",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Progress',
      instructions: 'Order the words to form a future continuous sentence.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'will', 'be', 'staying', 'at', 'a', 'small', 'hotel', '.'],
          correctSentence: 'We will be staying at a small hotel.',
          translation: 'Nos estaremos alojando en un hotel pequeño.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e37",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Airport Wait',
      instructions: 'Order the words to form a future continuous sentence.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'will', 'be', 'waiting', 'for', 'you', 'at', 'arrivals', '.'],
          correctSentence: 'I will be waiting for you at arrivals.',
          translation: 'Te estaré esperando en llegadas.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e38",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Will vs Will be -ing',
      instructions: 'Choose the best form for the context.',
      questions: [
        {
          id: 'q1',
          question: 'I __________ to the airport at 5 AM, so please don\'t call me then.',
          options: ["will be driving", "will drive", "drive", "am driving"],
          correctAnswer: 0,
          explanation: "Future Continuous emphasizes the duration/progress of the action at that time."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e39",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Continuous Negative',
      instructions: "Fill in the negative form (will not be + -ing).",
      questions: [
        {
          id: 'q1',
          text: "She ___ (not work) during her holiday in June.",
          correctAnswer: "will not be working",
          explanation: "Negative future continuous for an action that won't be in progress."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e40",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Holiday Dreams',
      instructions: 'Say this sentence about your future holiday.',
      questions: [
        {
          id: 'q1',
          text: "Next week, I will be enjoying the sun and the local food.",
          correctAnswer: "Next week, I will be enjoying the sun and the local food",
          explanation: "Practica la fluidez al hablar de planes agradables."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 5: Sightseeing & Activities (41-50) ---
  {
    id: "b1-u7-e41",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Sightseeing",
          back: "Turismo / Ver lugares de interés",
          pronunciation: "/ˈsaɪtˌsiː.ɪŋ/",
          example: "We spent the whole day sightseeing in Rome.",
          explanation: "La actividad de visitar los lugares interesantes de un sitio."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e42",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Guided tour",
          back: "Visita guiada",
          pronunciation: "/ˌɡaɪ.dɪd ˈtʊər/",
          example: "We took a guided tour to learn more about the history of the castle.",
          explanation: "Una visita a un lugar con un guía que da explicaciones."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e43",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Souvenir",
          back: "Recuerdo",
          pronunciation: "/ˌsuː.vəˈnɪər/",
          example: "I bought a small souvenir for my sister at the market.",
          explanation: "Algo que compras para recordar un lugar que visitaste."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e44",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "To go off the beaten track",
          back: "Salirse de la ruta turística",
          pronunciation: "/tuː ɡəʊ ɒf ðə ˈbiː.tən træk/",
          example: "I love exploring hidden villages and going off the beaten track.",
          explanation: "Visitar lugares que no son populares entre los turistas."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e45",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "easy",
    content: {
      items: [
        {
          front: "Local cuisine",
          back: "Gastronomía local",
          pronunciation: "/ˈləʊ.kəl kwɪˈziːn/",
          example: "You must try the local cuisine while you are in Thailand.",
          explanation: "La comida típica de un lugar específico."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e46",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Exploring',
      instructions: 'Choose the correct expression.',
      questions: [
        {
          id: 'q1',
          question: 'We prefer to __________ and find quiet places without many people.',
          options: ["go off the beaten track", "stay at home", "go to the airport", "buy a car"],
          correctAnswer: 0,
          explanation: "To 'go off the beaten track' means visiting less touristy locations."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e47",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Memories',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "I always buy a ___ from every country I visit.",
          correctAnswer: "souvenir",
          explanation: "A souvenir is an object kept as a reminder of a place."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e48",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Activities',
      instructions: 'Match the activity with the place.',
      pairs: [
        { id: "a1", left: "Sightseeing", right: "Historic city center" },
        { id: "a2", left: "Sunbathing", right: "Beach" },
        { id: "a3", left: "Hiking", right: "Mountains" },
        { id: "a4", left: "Snorkeling", right: "Coral reef" }
      ]
    } as any
  },
  {
    id: "b1-u7-e49",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Tour Plans',
      instructions: 'Order the words to form a sentence.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'are', 'going', 'to', 'take', 'a', 'guided', 'tour', '.'],
          correctSentence: 'We are going to take a guided tour.',
          translation: 'Vamos a hacer una visita guiada.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e50",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Foodie Travel',
      instructions: 'Say this sentence about your holiday goals.',
      questions: [
        {
          id: 'q1',
          text: "I really want to experience the local cuisine and meet the people.",
          correctAnswer: "I really want to experience the local cuisine and meet the people",
          explanation: "Practica la pronunciación de 'cuisine' /kwɪˈziːn/."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 6: Future Continuous (51-60) ---
  {
    id: "b1-u7-e51",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "I will be flying",
          back: "Estaré volando",
          pronunciation: "/aɪ wɪl biː ˈflaɪ.ɪŋ/",
          example: "This time tomorrow, I will be flying over the Atlantic.",
          explanation: "Future Continuous: se usa para acciones que estarán ocurriendo en un momento específico del futuro."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e52",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "I will be relaxing",
          back: "Estaré relajándome",
          pronunciation: "/aɪ wɪl biː rɪˈlæk.sɪŋ/",
          example: "Next week, I will be relaxing on a beach in Mallorca.",
          explanation: "Se forma con will + be + verbo-ing."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e53",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Specific Future Moments',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'At 8 PM tonight, I __________ dinner at a local restaurant.',
          options: ["will be having", "will have", "have", "am have"],
          correctAnswer: 0,
          explanation: "Use Future Continuous for actions in progress at a specific time in the future."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e54",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Travel Progress',
      instructions: 'Choose the correct form.',
      questions: [
        {
          id: 'q1',
          question: 'Don\'t call me at 10 AM. I __________ my luggage then.',
          options: ["will be packing", "will pack", "am pack", "pack"],
          correctAnswer: 0,
          explanation: "Future Continuous indicates an action that will be happening at that moment."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e55",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Holiday Routine',
      instructions: "Fill in the blank using Future Continuous.",
      questions: [
        {
          id: 'q1',
          text: "In two days, we ___ (sunbathe) by the pool.",
          correctAnswer: "will be sunbathing",
          explanation: "Will + be + verb-ing."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e56",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Long Flight',
      instructions: "Fill in the blank using Future Continuous.",
      questions: [
        {
          id: 'q1',
          text: "This time next Saturday, I ___ (wait) for my connection in Dubai.",
          correctAnswer: "will be waiting",
          explanation: "Use Future Continuous for actions that will be mid-progress."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e57",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Action',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['be', 'I', 'will', 'staying', 'near', 'the', 'coast', '.'],
          correctSentence: 'I will be staying near the coast.',
          translation: 'Me estaré quedando cerca de la costa.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e58",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      title: 'Future Question',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['Will', 'you', 'be', 'using', 'your', 'car', 'this', 'weekend', '?'],
          correctSentence: 'Will you be using your car this weekend?',
          translation: '¿Estarás usando tu coche este fin de semana?',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e59",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "medium",
    content: {
      title: 'Future Uses',
      instructions: 'Match the sentence with its meaning.',
      pairs: [
        { id: "m1", left: "I'll be working at 5.", right: "Action in progress" },
        { id: "m2", left: "I'll help you.", right: "Offer" },
        { id: "m3", left: "I'm going to travel.", right: "Plan/Intention" },
        { id: "m4", left: "The flight lands at 6.", right: "Schedule" }
      ]
    } as any
  },
  {
    id: "b1-u7-e60",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Imagining the Future',
      instructions: 'Say this sentence clearly.',
      questions: [
        {
          id: 'q1',
          text: "While you are at work on Monday, I will be enjoying a cocktail in the Caribbean.",
          correctAnswer: "While you are at work on Monday, I will be enjoying a cocktail in the Caribbean",
          explanation: "Practica el ritmo del Future Continuous."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 7: Accommodations & Problems (61-70) ---
  {
    id: "b1-u7-e61",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Half board",
          back: "Media pensión",
          pronunciation: "/hɑːf bɔːd/",
          example: "We booked half board, so breakfast and dinner are included.",
          explanation: "Un tipo de alojamiento que incluye dos comidas."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e62",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To overbook",
          back: "Sobrecontratar (Overbooking)",
          pronunciation: "/ˌəʊ.vəˈbʊk/",
          example: "The airline overbooked the flight, and we had to wait.",
          explanation: "Vender más plazas de las disponibles."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e63",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Hotel Amenities',
      instructions: 'Choose the best option.',
      questions: [
        {
          id: 'q1',
          question: 'Does the hotel have __________? I want to connect my laptop.',
          options: ["free Wi-Fi", "a balcony", "a fireplace", "a microwave"],
          correctAnswer: 0,
          explanation: "Wi-Fi is essential for connecting devices to the internet."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e64",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Complaints',
      instructions: 'Choose the correct word.',
      questions: [
        {
          id: 'q1',
          question: 'The room is very __________. Can we have another one?',
          options: ["noisy", "polite", "comfortable", "beautiful"],
          correctAnswer: 0,
          explanation: "If a room is noisy, you cannot sleep well, so you might complain."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e65",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Booking Details',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "I'd like to book a ___ room with a sea view.",
          correctAnswer: "double",
          explanation: "A double room is for two people."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e66",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Breakfast Included',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "Is breakfast ___ in the price of the room?",
          correctAnswer: "included",
          explanation: "Included means it's part of the total cost."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e67",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Hotel Services',
      instructions: 'Match the service with its description.',
      pairs: [
        { id: "s1", left: "Room service", right: "Food brought to your room" },
        { id: "s2", left: "Housekeeping", right: "Cleaning your room" },
        { id: "s3", left: "Reception", right: "Checking in and out" },
        { id: "s4", left: "Concierge", right: "Booking tours and taxis" }
      ]
    } as any
  },
  {
    id: "b1-u7-e68",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Making a Complaint',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['The', 'air', 'conditioning', 'is', 'not', 'working', 'properly', '.'],
          correctSentence: 'The air conditioning is not working properly.',
          translation: 'El aire acondicionado no está funcionando correctamente.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e69",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Leaving the Hotel',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'We need to __________ of the hotel before noon.',
          options: ["check out", "check in", "move in", "get out"],
          correctAnswer: 0,
          explanation: "To 'check out' means to pay your bill and leave the hotel."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e70",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Problem at Reception',
      instructions: 'Say this to the receptionist.',
      questions: [
        {
          id: 'q1',
          text: "Excuse me, I'm afraid there's a problem with the hot water in my room.",
          correctAnswer: "Excuse me, I'm afraid there's a problem with the hot water in my room",
          explanation: "Usa un tono educado pero firme."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 8: Travel Phrasal Verbs (71-80) ---
  {
    id: "b1-u7-e71",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To set off",
          back: "Partir / Ponerse en camino",
          pronunciation: "/tuː set ɒf/",
          example: "We need to set off early to avoid the traffic.",
          explanation: "Empezar un viaje."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e72",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "To take off",
          back: "Despegar",
          pronunciation: "/tuː teɪk ɒf/",
          example: "The plane is scheduled to take off at 3 PM.",
          explanation: "Cuando un avión deja el suelo y empieza a volar."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e73",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Starting the Trip',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'We __________ for the airport at 5 AM.',
          options: ["set off", "went off", "put off", "took off"],
          correctAnswer: 0,
          explanation: "'Set off' means to start a journey."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e74",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Seeing Someone Depart',
      instructions: 'Choose the correct phrasal verb.',
      questions: [
        {
          id: 'q1',
          question: 'My parents came to the station to __________.',
          options: ["see me off", "look me off", "get me off", "take me off"],
          correctAnswer: 0,
          explanation: "'See someone off' means to go to a station/airport to say goodbye."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e75",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Airport Action',
      instructions: "Complete with the correct phrasal verb.",
      questions: [
        {
          id: 'q1',
          text: "I was so nervous when the plane finally ___ (despegó).",
          correctAnswer: "took off",
          explanation: "Take off is used for planes leaving the ground."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e76",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Arriving',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "What time does your flight ___ (llegar/entrar)?",
          correctAnswer: "get in",
          explanation: "'Get in' is often used for the arrival of trains or planes."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e77",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Travel Phrasals Match',
      instructions: 'Match the phrasal verb with its definition.',
      pairs: [
        { id: "p1", left: "Get away", right: "Go on holiday" },
        { id: "p2", left: "Hold up", right: "Delay" },
        { id: "p3", left: "Drop off", right: "Take someone to a place" },
        { id: "p4", left: "Pick up", right: "Collect someone" }
      ]
    } as any
  },
  {
    id: "b1-u7-e78",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Using Phrasals',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['We', 'got', 'held', 'up', 'in', 'the', 'traffic', '.'],
          correctSentence: 'We got held up in the traffic.',
          translation: 'Nos retrasamos en el tráfico.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e79",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Holiday Break',
      instructions: 'Choose the correct option.',
      questions: [
        {
          id: 'q1',
          question: 'I really need to __________ for a few days. I\'m so stressed.',
          options: ["get away", "get off", "get up", "get down"],
          correctAnswer: 0,
          explanation: "'Get away' means to go somewhere for a rest or holiday."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e80",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "hard",
    content: {
      title: 'Planning Departure',
      instructions: 'Say this sentence fluently.',
      questions: [
        {
          id: 'q1',
          text: "We should set off at 6 AM so we don't get held up by the morning rush hour.",
          correctAnswer: "We should set off at 6 AM so we don't get held up by the morning rush hour",
          explanation: "Enlaza 'set off' y 'held up'."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 9: Cultural Etiquette & Tips (81-90) ---
  {
    id: "b1-u7-e81",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Customs",
          back: "Costumbres / Aduana",
          pronunciation: "/ˈkʌs.təmz/",
          example: "It is important to respect local customs when you travel.",
          explanation: "Formas tradicionales de comportarse; también el lugar del aeropuerto donde revisan bienes."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e82",
    type: "flashcard",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      items: [
        {
          front: "Tipping",
          back: "Dar propina",
          pronunciation: "/ˈtɪp.ɪŋ/",
          example: "In the USA, tipping is expected in most restaurants.",
          explanation: "Dar dinero extra por un servicio."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e83",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Local Respect',
      instructions: 'Choose the best word.',
      questions: [
        {
          id: 'q1',
          question: 'You should learn some basic phrases in the __________ language.',
          options: ["local", "remote", "ancient", "private"],
          correctAnswer: 0,
          explanation: "Learning the local language shows respect to the residents."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e84",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Money Matters',
      instructions: 'Choose the correct term.',
      questions: [
        {
          id: 'q1',
          question: 'What is the local __________ in Japan?',
          options: ["currency", "laundry", "gallery", "directory"],
          correctAnswer: 0,
          explanation: "Currency refers to the type of money used in a country."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e85",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Restaurant Culture',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "Is ___ included in the bill, or should I leave a tip?",
          correctAnswer: "service",
          explanation: "Service charge is sometimes added to the bill."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e86",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Dress Code',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "When visiting religious sites, please dress ___.",
          correctAnswer: "respectfully",
          explanation: "Modest dress is often required in sacred places."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e87",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Travel Manners',
      instructions: 'Match the tip with its category.',
      pairs: [
        { id: "t1", left: "Don't shout", right: "Public behavior" },
        { id: "t2", left: "Leave 15%", right: "Tipping" },
        { id: "t3", left: "Cover shoulders", right: "Dress code" },
        { id: "t4", left: "Ask for permission", right: "Taking photos" }
      ]
    } as any
  },
  {
    id: "b1-u7-e88",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Cultural Advice',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['You', 'should', 'always', 'respect', 'local', 'traditions', '.'],
          correctSentence: 'You should always respect local traditions.',
          translation: 'Siempre debes respetar las tradiciones locales.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e89",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Exchanging Money',
      instructions: 'Choose the correct place.',
      questions: [
        {
          id: 'q1',
          question: 'Where is the nearest __________?',
          options: ["bureau de change", "police station", "library", "gym"],
          correctAnswer: 0,
          explanation: "A bureau de change is where you can exchange your money for local currency."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e90",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "medium",
    content: {
      title: 'Asking for Advice',
      instructions: 'Ask a local for advice.',
      questions: [
        {
          id: 'q1',
          text: "What are the most important things I should know about the local culture here?",
          correctAnswer: "What are the most important things I should know about the local culture here",
          explanation: "Fluidez en la pregunta."
        }
      ]
    } as any
  },

  // --- SUB-TOPIC 10: Holiday Narratives & Summary (91-100) ---
  {
    id: "b1-u7-e91",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      title: 'Holiday Future Continuous',
      instructions: "Complete the story using Future Continuous.",
      questions: [
        {
          id: 'q1',
          text: "Next Monday, I ___ (lie) on the beach while my colleagues ___ (work).",
          correctAnswer: "will be lying / will be working",
          explanation: "Two actions in progress in the future."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e92",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      title: 'Will vs Going to vs Present Continuous',
      instructions: 'Choose the most natural form.',
      questions: [
        {
          id: 'q1',
          question: 'We __________ a big party for our anniversary at the hotel.',
          options: ["are having", "will be having", "will have", "have"],
          correctAnswer: 0,
          explanation: "Present Continuous is most natural for arranged social events."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e93",
    type: "sentence-building",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "hard",
    content: {
      title: 'Dream Trip',
      instructions: 'Order the words.',
      sentences: [
        {
          id: 's1',
          words: ['I', 'have', 'been', 'dreaming', 'about', 'visiting', 'Japan', 'for', 'years', '.'],
          correctSentence: 'I have been dreaming about visiting Japan for years.',
          translation: 'He estado soñando con visitar Japón durante años.',
          points: 10
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e94",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Grammar",
    difficulty: "hard",
    content: {
      title: 'Flight Confirmation',
      instructions: "Complete with the correct future form.",
      questions: [
        {
          id: 'q1',
          text: "My flight ___ (take off) at 9:00 PM, so I ___ (arrive) late.",
          correctAnswer: "takes off / will arrive",
          explanation: "Schedule (Present Simple) + Prediction (Will)."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e95",
    type: "matching",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Holiday Types',
      instructions: 'Match the holiday type with the activity.',
      pairs: [
        { id: "h1", left: "City break", right: "Visiting museums" },
        { id: "h2", left: "Ski trip", right: "Winter sports" },
        { id: "h3", left: "Safari", right: "Watching wildlife" },
        { id: "h4", left: "Cruise", right: "Sailing on a ship" }
      ]
    } as any
  },
  {
    id: "b1-u7-e96",
    type: "fill-blank",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Final Prep',
      instructions: "Complete the sentence.",
      questions: [
        {
          id: 'q1',
          text: "Don't forget to check the ___ requirements for the country.",
          correctAnswer: "visa",
          explanation: "A visa is official permission to enter a country."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e97",
    type: "speaking-analysis",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Production",
    difficulty: "hard",
    content: {
      title: 'Holiday Summary',
      instructions: 'Summarize your next trip.',
      questions: [
        {
          id: 'q1',
          text: "I am going to explore new cultures and I will be sharing my experiences on my blog.",
          correctAnswer: "I am going to explore new cultures and I will be sharing my experiences on my blog",
          explanation: "Combina 'going to' para intención y 'will be sharing' para progreso."
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e98",
    type: "interactive-dialogue",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Listening & Interaction",
    difficulty: "medium",
    content: {
      title: 'Checking into the Hotel',
      instructions: 'Listen to David checking into a hotel in Edinburgh. He has a small issue with his booking.',
      audioUrl: '/audio/b1/unit7/dialogue1.mp3',
      transcript: [
        { speaker: 'Receptionist', text: 'Good evening, sir. How can I help you?', start: 0, end: 4 },
        { speaker: 'David', text: 'Hello. I have a reservation under the name David Miller.', start: 5, end: 10 },
        { speaker: 'Receptionist', text: 'Let me see... Yes, Mr. Miller. A double room for three nights, including breakfast?', start: 11, end: 18 },
        { speaker: 'David', text: 'Actually, I thought I booked half board. My confirmation email says dinner is included.', start: 19, end: 26 },
        { speaker: 'Receptionist', text: 'Oh, I apologize. You are right. Our system had it as bed and breakfast only. I\'ll update that now.', start: 27, end: 35 },
        { speaker: 'David', text: 'Thank you. Is there free Wi-Fi in the room?', start: 36, end: 40 },
        { speaker: 'Receptionist', text: 'Yes, here is the password. Also, please note that check-out is before 11 AM.', start: 41, end: 48 },
        { speaker: 'David', text: 'Great. What time is dinner served?', start: 49, end: 52 },
        { speaker: 'Receptionist', text: 'The restaurant is open from 7 PM to 10 PM. Enjoy your stay!', start: 53, end: 58 }
      ],
      questions: [
        {
          id: 'q1',
          time: 18,
          question: 'What kind of room did David reserve?',
          options: ['Single room', 'Double room', 'Suite', 'Family room'],
          correctAnswer: 1,
          explanation: 'The receptionist confirms it is a double room.'
        },
        {
          id: 'q2',
          time: 26,
          question: 'What was the problem with the booking?',
          options: ['The name was wrong', 'The dates were wrong', 'The meal plan was wrong', 'The room was not ready'],
          correctAnswer: 2,
          explanation: 'David expected half board (including dinner) but the system showed only breakfast.'
        },
        {
          id: 'q3',
          time: 48,
          question: 'What is the check-out time?',
          options: ['Before 10 AM', 'Before 11 AM', 'After 12 PM', 'At midnight'],
          correctAnswer: 1,
          explanation: 'The receptionist says check-out is before 11 AM.'
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e99",
    type: "interactive-dialogue",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Listening & Interaction",
    difficulty: "hard",
    content: {
      title: 'Planning the Itinerary',
      instructions: 'Emma and Tom are planning their trip to Rome. Listen to their discussion about activities.',
      audioUrl: '/audio/b1/unit7/dialogue2.mp3',
      transcript: [
        { speaker: 'Emma', text: 'So, Tom, have you looked at the itinerary for Rome?', start: 0, end: 4 },
        { speaker: 'Tom', text: 'A bit. I know you want to do a lot of sightseeing, but I also want some time to relax.', start: 5, end: 12 },
        { speaker: 'Emma', text: 'Of course. On Tuesday morning, we are going to visit the Colosseum. We should book the tickets in advance.', start: 13, end: 21 },
        { speaker: 'Tom', text: 'Good idea. What will we be doing on Wednesday?', start: 22, end: 26 },
        { speaker: 'Emma', text: 'Wednesday is our "off the beaten track" day. We\'ll be exploring the smaller neighborhoods and trying local cuisine.', start: 27, end: 36 },
        { speaker: 'Tom', text: 'That sounds perfect. I hope it doesn\'t rain.', start: 37, end: 41 },
        { speaker: 'Emma', text: 'The forecast says it will be sunny. By the way, I already bought travel insurance for both of us.', start: 42, end: 49 },
        { speaker: 'Tom', text: 'You\'re so organized, Emma. I\'ll handle the currency exchange tomorrow.', start: 50, end: 56 }
      ],
      questions: [
        {
          id: 'q1',
          time: 21,
          question: 'What advice does Emma give about the Colosseum?',
          options: ['Go early', 'Book tickets in advance', 'Take a taxi', 'Wear comfortable shoes'],
          correctAnswer: 1,
          explanation: 'Emma says they should book tickets in advance.'
        },
        {
          id: 'q2',
          time: 36,
          question: 'What are they doing on Wednesday?',
          options: ['Visiting the Vatican', 'Exploring less touristy areas', 'Going to the beach', 'Staying at the hotel'],
          correctAnswer: 1,
          explanation: 'Emma says they will be going "off the beaten track" and exploring smaller neighborhoods.'
        },
        {
          id: 'q3',
          time: 49,
          question: 'What has Emma already done?',
          options: ['Packed her bags', 'Exchanged money', 'Bought travel insurance', 'Booked the flight'],
          correctAnswer: 2,
          explanation: 'Emma mentions she already bought travel insurance.'
        }
      ]
    } as any
  },
  {
    id: "b1-u7-e100",
    type: "multiple-choice",
    level: "B1",
    topic: "Travel & Holidays",
    topicName: "Vocabulary",
    difficulty: "medium",
    content: {
      title: 'Unit 7 Review',
      instructions: 'Choose the correct word to finish the unit.',
      questions: [
        {
          id: 'q1',
          question: 'A detailed plan for a journey is called an __________.',
          options: ["itinerary", "insurance", "accommodation", "itinerant"],
          correctAnswer: 0,
          explanation: "An itinerary is the correct term for a travel plan."
        }
      ]
    } as any
  }
];
