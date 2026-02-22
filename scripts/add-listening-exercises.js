const fs = require('fs');
const path = require('path');

const UNITS = [6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];
const CONTENT_DIR = path.join(__dirname, '../src/content/cursos/ingles-a1');

const listeningExercises = {
  6: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit6/family.mp3",
      template: "She is my ___.",
      answer: "sister"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit6/parents.mp3",
      template: "My ___ are doctors.",
      answer: "parents"
    }
  ],
  8: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit8/work.mp3",
      template: "I ___ in an office.",
      answer: "work"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit8/job.mp3",
      template: "What is your ___?",
      answer: "job"
    }
  ],
  10: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit10/time.mp3",
      template: "What ___ is it?",
      answer: "time"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit10/oclock.mp3",
      template: "It's three ___.",
      answer: "o'clock"
    }
  ],
  12: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit12/like.mp3",
      template: "I ___ chocolate.",
      answer: "like"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit12/favorite.mp3",
      template: "What's your ___ food?",
      answer: "favorite"
    }
  ],
  14: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit14/live.mp3",
      template: "Where do you ___?",
      answer: "live"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit14/city.mp3",
      template: "I live in a ___.",
      answer: "city"
    }
  ],
  16: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit16/can.mp3",
      template: "___ you swim?",
      answer: "Can"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit16/play.mp3",
      template: "I can ___ the guitar.",
      answer: "play"
    }
  ],
  18: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit18/there.mp3",
      template: "___ is a book on the table.",
      answer: "There"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit18/are.mp3",
      template: "There ___ three chairs.",
      answer: "are"
    }
  ],
  20: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit20/going.mp3",
      template: "I am ___ to the store.",
      answer: "going"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit20/will.mp3",
      template: "I ___ call you later.",
      answer: "will"
    }
  ],
  22: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit22/was.mp3",
      template: "She ___ happy yesterday.",
      answer: "was"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit22/were.mp3",
      template: "They ___ at school.",
      answer: "were"
    }
  ],
  24: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit24/have.mp3",
      template: "I ___ a new car.",
      answer: "have"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit24/has.mp3",
      template: "She ___ two cats.",
      answer: "has"
    }
  ],
  26: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit26/much.mp3",
      template: "How ___ is it?",
      answer: "much"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit26/many.mp3",
      template: "How ___ apples do you want?",
      answer: "many"
    }
  ],
  28: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit28/more.mp3",
      template: "I need ___ time.",
      answer: "more"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit28/than.mp3",
      template: "This is better ___ that.",
      answer: "than"
    }
  ],
  30: [
    {
      id: "_L1",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit30/review.mp3",
      template: "Let's ___ what we learned.",
      answer: "review"
    },
    {
      id: "_L2",
      prompt: "Escucha y completa:",
      audioUrl: "/audio/a1/unit30/practice.mp3",
      template: "___ makes perfect!",
      answer: "Practice"
    }
  ]
};

function addListeningExercises(unitNum) {
  const filePath = path.join(CONTENT_DIR, `unit${unitNum}.json`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Unit ${unitNum} not found`);
    return;
  }
  
  try {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const exercises = listeningExercises[unitNum];
    
    if (!exercises) {
      console.log(`⚠️  No listening exercises defined for unit ${unitNum}`);
      return;
    }
    
    // Find the last block
    const lastBlock = data.blocks[data.blocks.length - 1];
    const lastContent = lastBlock.content[lastBlock.content.length - 1];
    const lastId = lastContent.interaction_id;
    const unitPrefix = `U${unitNum}`;
    
    // Extract the number from the last ID (e.g., "U6_I24" -> 24)
    const match = lastId.match(/_I(\d+)$/);
    let nextNum = match ? parseInt(match[1]) + 1 : 1;
    
    // Add listening exercises
    exercises.forEach((ex, idx) => {
      const newExercise = {
        interaction_id: `${unitPrefix}_I${nextNum + idx}`,
        type: "listening_dictation",
        prompt_es: ex.prompt,
        audio_url: ex.audioUrl,
        transcript_template: ex.template,
        correct_answer: ex.answer,
        mastery_tag: "listening"
      };
      
      lastBlock.content.push(newExercise);
    });
    
    // Write back to file
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n');
    console.log(`✅ Added ${exercises.length} listening exercises to unit ${unitNum}`);
    
  } catch (error) {
    console.error(`❌ Error processing unit ${unitNum}:`, error.message);
  }
}

// Process all units
console.log('Adding listening exercises to even units...\n');
UNITS.forEach(addListeningExercises);
console.log('\n✨ Done!');
