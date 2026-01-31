import fs from 'fs';
import path from 'path';

const weeks = [
  {
    num: 3,
    title: "Introducing Colleagues & Titles",
    lessons: [
      {
        title: "Who is who?",
        desc: "Learn about different job titles in the office.",
        slides: [
          { title: "Common Job Titles", content: "Receptionist, Manager, Director, Assistant." },
          { title: "This is...", content: "How to introduce someone else. 'This is Mr. Jones, our Manager.'" }
        ]
      },
      {
        title: "Titles and Honorifics",
        desc: "Using Mr., Ms., and Mrs. correctly.",
        slides: [
          { title: "Formal Titles", content: "Mr. for men, Ms. for women (neutral), Mrs. for married women." },
          { title: "Practice", content: "Choosing the right title in a professional setting." }
        ]
      },
      {
        title: "Departments",
        desc: "IT, HR, Accounting, Marketing.",
        slides: [
          { title: "Office Areas", content: "Where do you work? 'I work in Human Resources.'" },
          { title: "Who to ask", content: "Matching departments to needs." }
        ]
      }
    ]
  },
  {
    num: 4,
    title: "Small Talk & Office Environment",
    lessons: [
      {
        title: "The Weather",
        desc: "Basic small talk about the weather.",
        slides: [
          { title: "It's sunny!", content: "Common weather adjectives: hot, cold, rainy, sunny." },
          { title: "Opening a conversation", content: "How to start a chat in the elevator or kitchen." }
        ]
      },
      {
        title: "The Weekend",
        desc: "Talking about your plans or past weekend.",
        slides: [
          { title: "How was your weekend?", content: "Standard questions for Monday morning." },
          { title: "It was good", content: "Simple responses: Great, busy, relaxing." }
        ]
      },
      {
        title: "Polite Comments",
        desc: "Compliments and safe topics.",
        slides: [
          { title: "Nice office!", content: "Giving simple compliments about the workspace." },
          { title: "Safe topics", content: "What to talk about (and what to avoid) at work." }
        ]
      }
    ]
  },
  {
    num: 5,
    title: "Alphabet & Spelling Names",
    lessons: [
      {
        title: "The Alphabet A-Z",
        desc: "Mastering the English alphabet for spelling.",
        slides: [
          { title: "Vowels and Consonants", content: "Tricky letters: A, E, I, O, U, G, J, H." },
          { title: "Spelling your name", content: "How to spell out loud: 'B as in Bravo...'" }
        ]
      },
      {
        title: "Spelling Email Addresses",
        desc: "Using @, dot, and underscore.",
        slides: [
          { title: "Email Symbols", content: "@ is 'at', . is 'dot', _ is 'underscore'." },
          { title: "Practice", content: "Giving your email address clearly." }
        ]
      },
      {
        title: "Spelling Check",
        desc: "Asking someone to repeat or spell.",
        slides: [
          { title: "Pardon?", content: "Can you repeat that, please? How do you spell that?" },
          { title: "Double letters", content: "Double 'L', Double 'S', etc." }
        ]
      }
    ]
  },
  {
    num: 6,
    title: "Numbers 1-100 & Prices",
    lessons: [
      {
        title: "Numbers 1-20",
        desc: "Counting office supplies and items.",
        slides: [
          { title: "Cardinal Numbers", content: "One to twenty. Focus on eleven, twelve, thirteen." },
          { title: "Plurals", content: "One pen, two pens." }
        ]
      },
      {
        title: "Numbers 20-100",
        desc: "Tens and units.",
        slides: [
          { title: "Twenty, Thirty, Forty", content: "Counting by tens. Focus on 'teen' vs 'ty' sounds." },
          { title: "Big numbers", content: "Eighty-five, ninety-nine, one hundred." }
        ]
      },
      {
        title: "Prices & Currency",
        desc: "Dollars, Euros, and Pounds.",
        slides: [
          { title: "How much is it?", content: "Asking for the price of supplies." },
          { title: "Payment", content: "Cash, card, receipt." }
        ]
      }
    ]
  },
  {
    num: 7,
    title: "Basic Phone Conversations",
    lessons: [
      {
        title: "Answering the Phone",
        desc: "Hello, this is...",
        slides: [
          { title: "Standard Greetings", content: "Focus English, good morning. How can I help you?" },
          { title: "Identifying Yourself", content: "This is [Name] speaking." }
        ]
      },
      {
        title: "Asking for Someone",
        desc: "Can I speak to...?",
        slides: [
          { title: "Requesting", content: "Is Mr. Smith available? Can I speak to the Manager?" },
          { title: "Putting through", content: "One moment, please. Please hold." }
        ]
      },
      {
        title: "Taking a Message",
        desc: "Can I take a message?",
        slides: [
          { title: "Leaving info", content: "Name, number, and topic." },
          { title: "Confirming", content: "I will tell him. Thank you for calling." }
        ]
      }
    ]
  },
  {
    num: 8,
    title: "Giving Directions in the Office",
    lessons: [
      {
        title: "Common Locations",
        desc: "Kitchen, Restroom, Elevator, Exit.",
        slides: [
          { title: "Where is it?", content: "Asking for basic facilities." },
          { title: "Floor numbers", content: "First floor, second floor, basement." }
        ]
      },
      {
        title: "Simple Directions",
        desc: "Left, Right, Straight.",
        slides: [
          { title: "Go straight", content: "Turn left, turn right, at the end of the hall." },
          { title: "Next to", content: "Beside, across from, near." }
        ]
      },
      {
        title: "The Reception Area",
        desc: "Welcoming a visitor.",
        slides: [
          { title: "Please wait here", content: "Have a seat. Would you like some water?" },
          { title: "Follow me", content: "The meeting room is this way." }
        ]
      }
    ]
  },
  {
    num: 9,
    title: "Common Office Objects",
    lessons: [
      {
        title: "On the Desk",
        desc: "Computer, Mouse, Keyboard, Laptop.",
        slides: [
          { title: "Tech terms", content: "The screen, the cable, the charger." },
          { title: "Verbs", content: "Turn on, turn off, log in." }
        ]
      },
      {
        title: "Stationery",
        desc: "Pen, Paper, Stapler, Scissors.",
        slides: [
          { title: "Daily tools", content: "Folder, notebook, highlighter." },
          { title: "Asking to borrow", content: "Can I use your pen? Do you have a stapler?" }
        ]
      },
      {
        title: "Furniture",
        desc: "Chair, Desk, Filing cabinet, Shelf.",
        slides: [
          { title: "The workspace", content: "Under the desk, on the shelf." },
          { title: "Organization", content: "Keeping the office tidy." }
        ]
      }
    ]
  },
  {
    num: 10,
    title: "Using Office Equipment",
    lessons: [
      {
        title: "The Printer & Scanner",
        desc: "Print, Copy, Scan.",
        slides: [
          { title: "Basic operations", content: "How to print a document. Out of paper." },
          { title: "Troubleshooting", content: "Paper jam. It's not working." }
        ]
      },
      {
        title: "The Coffee Machine",
        desc: "Break time basics.",
        slides: [
          { title: "Instructions", content: "Insert pod, press button." },
          { title: "Tea or Coffee?", content: "Milk, sugar, black coffee." }
        ]
      },
      {
        title: "The Phone System",
        desc: "Extensions and transfers.",
        slides: [
          { title: "Dialing", content: "Dial 9 for outside line. Press #." },
          { title: "Transferring", content: "Transferring your call now." }
        ]
      }
    ]
  },
  {
    num: 11,
    title: "Workplace Etiquette",
    lessons: [
      {
        title: "Polite Words",
        desc: "Please, Thank you, You're welcome.",
        slides: [
          { title: "Essential manners", content: "Using 'Please' for every request." },
          { title: "Responses", content: "Not at all, no problem, my pleasure." }
        ]
      },
      {
        title: "Asking Permission",
        desc: "May I...? Can I...?",
        slides: [
          { title: "Formal vs Informal", content: "May I enter? Can I take this?" },
          { title: "Excuse me", content: "Getting someone's attention politely." }
        ]
      },
      {
        title: "Apologizing",
        desc: "I'm sorry. I'm late.",
        slides: [
          { title: "Professional Apologies", content: "Sorry for the delay. I apologize." },
          { title: "Accepting an apology", content: "That's okay. No worries." }
        ]
      }
    ]
  },
  {
    num: 12,
    title: "Trimester 1 Review",
    lessons: [
      {
        title: "The Big Review Part 1",
        desc: "Greetings and Personal Info.",
        slides: [
          { title: "Everything we learned", content: "Summary of months 1 and 2." },
          { title: "Quiz time", content: "Quick check of the basics." }
        ]
      },
      {
        title: "The Big Review Part 2",
        desc: "Office Objects and Directions.",
        slides: [
          { title: "Workplace summary", content: "Summary of month 3." },
          { title: "Dialogue practice", content: "Common office conversations." }
        ]
      },
      {
        title: "Final Trimester Assessment",
        desc: "Check your progress!",
        slides: [
          { title: "Ready for Trimester 2?", content: "Preview of Job Interviews." },
          { title: "Congratulations!", content: "You completed the first 3 months." }
        ]
      }
    ]
  }
];

const BASE_PATH = 'src/content/cursos/trabajo/administracion/a1-redesign/trimestre1';

weeks.forEach(week => {
  const weekPath = path.join(BASE_PATH, `semana${week.num.toString().padStart(2, '0')}`);
  if (!fs.existsSync(weekPath)) {
    fs.mkdirSync(weekPath, { recursive: true });
  }

  week.lessons.forEach((lesson, index) => {
    const lessonNum = index + 1;
    const lessonJson = {
      id: `administracion-a1-s${week.num}-l${lessonNum}`,
      title: lesson.title,
      description: lesson.desc,
      duration: 15,
      objectives: [
        "Master the vocabulary related to " + lesson.title,
        "Understand basic concepts of " + lesson.title,
        "Complete interactive exercises about " + lesson.title
      ],
      videoUrl: `/videos/courses/admin-a1/semana${week.num.toString().padStart(2, '0')}/lesson${lessonNum}.mp4`,
      theorySlides: lesson.slides.map(s => ({
        title: s.title,
        content: s.content,
        imageUrl: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000&auto=format&fit=crop"
      })),
      exercises: [
        {
          id: `ex-w${week.num}-l${lessonNum}-1`,
          type: "multiple-choice",
          title: "Quick Check",
          instructions: "Choose the correct option.",
          questions: [
            {
              id: "q1",
              type: "multiple-choice",
              question: "Sample question for " + lesson.title,
              options: ["Option A", "Option B", "Option C"],
              correctAnswer: "Option A",
              points: 5
            }
          ]
        }
      ]
    };

    fs.writeFileSync(
      path.join(weekPath, `lesson${lessonNum}.json`),
      JSON.stringify(lessonJson, null, 2)
    );
  });
});

console.log("✅ Weeks 3-12 generated successfully!");
