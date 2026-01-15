#!/usr/bin/env python3
"""
Script para generar ejercicios Word Formation para Módulo 1 (Lecciones 2-6)
Ya tenemos M1L1, necesitamos M1L2 a M1L6 (10 ejercicios adicionales)
"""

# Template para cada ejercicio
exercises_data = {
    "M1L2": [
        {
            "id": "b2-m1-l2-wordform-1",
            "title": "Word Formation: Conditional Thinking",
            "text": "The ability to think (1. CONDITION)_____ is crucial for problem-solving. When facing complex decisions, (2. SUCCESS)_____ individuals consider multiple scenarios and their potential outcomes. This type of thinking requires both (3. LOGIC)_____ reasoning and (4. CREATE)_____ imagination. Research suggests that practicing hypothetical scenarios can enhance our (5. DECIDE)_____ skills. Moreover, understanding the (6. RELATE)_____ between actions and consequences helps us make more informed choices. While some people seem (7. NATURE)_____ good at this, it's a skill that can be developed through practice and (8. AWARE)_____.",
            "questions": [
                ("CONDITION", "conditionally", "adverb", "adjective → adverb (-ly)", '"Think conditionally" means considering conditions and possibilities.'),
                ("SUCCESS", "successful", "adjective", "noun → adjective (-ful)", '"Successful individuals" - those who achieve their goals.'),
                ("LOGIC", "logical", "adjective", "noun → adjective (-al)", '"Logical reasoning" - based on clear thinking and reason.'),
                ("CREATE", "creative", "adjective", "verb → adjective (-ive)", '"Creative imagination" - ability to imagine new ideas.'),
                ("DECIDE", "decision-making", "noun", "verb → compound noun", '"Decision-making skills" - ability to make good decisions. Alternative: decisiveness.'),
                ("RELATE", "relationship", "noun", "verb → noun (-ship)", '"Relationship between" - connection or link between things.'),
                ("NATURE", "naturally", "adverb", "noun → adverb (-ally)", '"Naturally good" - having a natural talent or ability.'),
                ("AWARE", "awareness", "noun", "adjective → noun (-ness)", '"Through awareness" - state of being conscious and informed.')
            ]
        },
        {
            "id": "b2-m1-l2-wordform-2",
            "title": "Word Formation: Consequences and Choices",
            "text": "Every choice we make has (1. PREDICT)_____ and sometimes (2. EXPECT)_____ consequences. Understanding this principle is fundamental to personal (3. RESPONSIBLE)_____. When we act (4. IMPULSE)_____, we often overlook important factors that should influence our decisions. The (5. WISE)_____ of hindsight teaches us valuable lessons about cause and effect. However, it's (6. POINT)_____ to dwell on past mistakes; instead, we should focus on developing better (7. JUDGE)_____. By learning from our experiences, both positive and negative, we can become more (8. SKILL)_____ decision-makers.",
            "questions": [
                ("PREDICT", "predictable", "adjective", "verb → adjective (-able)", '"Predictable consequences" - can be foreseen or anticipated.'),
                ("EXPECT", "unexpected", "adjective", "verb → negative adjective (un-)", '"Unexpected consequences" - not anticipated. Negative prefix un-.'),
                ("RESPONSIBLE", "responsibility", "noun", "adjective → noun (-ity)", '"Personal responsibility" - being accountable for one\'s actions.'),
                ("IMPULSE", "impulsively", "adverb", "noun → adverb (-ively)", '"Act impulsively" - without thinking carefully first.'),
                ("WISE", "wisdom", "noun", "adjective → noun (-dom)", '"Wisdom of hindsight" - understanding gained from past experience.'),
                ("POINT", "pointless", "adjective", "noun → negative adjective (-less)", '"Pointless to dwell" - having no purpose or use.'),
                ("JUDGE", "judgment", "noun", "verb → noun (-ment)", '"Better judgment" - ability to make sensible decisions. (judgement also acceptable)'),
                ("SKILL", "skillful", "adjective", "noun → adjective (-ful)", '"Skillful decision-makers" - having and showing skill. (skilful UK spelling also acceptable)')
            ]
        }
    ],
    "M1L3": [
        {
            "id": "b2-m1-l3-wordform-1",
            "title": "Word Formation: Environmental Action",
            "text": "Climate change represents one of humanity's greatest challenges, requiring immediate and (1. DECIDE)_____ action. The (2. SCIENCE)_____ evidence is overwhelming and (3. DENY)_____. Yet many people remain (4. AWARE)_____ of the urgency or feel (5. POWER)_____ to make a difference. This sense of (6. HELP)_____ often stems from the (7. PERCEIVE)_____ that individual actions are (8. SIGNIFY)_____. However, collective efforts can create meaningful change.",
            "questions": [
                ("DECIDE", "decisive", "adjective", "verb → adjective (-ive)", '"Decisive action" - showing determination and firmness.'),
                ("SCIENCE", "scientific", "adjective", "noun → adjective (-ific)", '"Scientific evidence" - based on or relating to science.'),
                ("DENY", "undeniable", "adjective", "verb → negative adjective (un- + -able)", '"Undeniable evidence" - impossible to deny or dispute.'),
                ("AWARE", "unaware", "adjective", "adjective → negative (un-)", '"Remain unaware" - not having knowledge of something.'),
                ("POWER", "powerless", "adjective", "noun → negative adjective (-less)", '"Feel powerless" - lacking power or ability to act.'),
                ("HELP", "helplessness", "noun", "adjective → noun (-ness)", '"Sense of helplessness" - feeling unable to help oneself. From helpless + ness.'),
                ("PERCEIVE", "perception", "noun", "verb → noun (-tion)", '"The perception that" - way in which something is understood.'),
                ("SIGNIFY", "insignificant", "adjective", "verb → negative adjective (in- + -ant)", '"Insignificant actions" - not important or meaningful. Negative prefix in-.')
            ]
        },
        {
            "id": "b2-m1-l3-wordform-2",
            "title": "Word Formation: Sustainable Living",
            "text": "Adopting a more (1. SUSTAIN)_____ lifestyle doesn't require drastic changes. Simple modifications to daily routines can have a (2. REMARK)_____ impact. For instance, reducing plastic (3. CONSUME)_____ and choosing (4. REUSE)_____ products are practical steps anyone can take. The key is (5. CONSIST)_____ – making these choices habitual rather than occasional. While some (6. ENVIRONMENT)_____ friendly alternatives may seem (7. EXPENSE)_____ initially, they often prove more (8. ECONOMY)_____ in the long run.",
            "questions": [
                ("SUSTAIN", "sustainable", "adjective", "verb → adjective (-able)", '"Sustainable lifestyle" - able to continue without damaging the environment.'),
                ("REMARK", "remarkable", "adjective", "verb/noun → adjective (-able)", '"Remarkable impact" - worthy of attention, extraordinary.'),
                ("CONSUME", "consumption", "noun", "verb → noun (-tion)", '"Plastic consumption" - amount consumed or used.'),
                ("REUSE", "reusable", "adjective", "verb → adjective (-able)", '"Reusable products" - can be used again.'),
                ("CONSIST", "consistency", "noun", "adjective → noun (-ency)", '"The key is consistency" - quality of always behaving in the same way.'),
                ("ENVIRONMENT", "environmentally", "adverb", "noun → adverb (-ally)", '"Environmentally friendly" - in a way that relates to the environment.'),
                ("EXPENSE", "expensive", "adjective", "noun → adjective (-ive)", '"Seem expensive" - costing a lot of money.'),
                ("ECONOMY", "economical", "adjective", "noun → adjective (-ical)", '"More economical" - giving good value for money, not wasteful.')
            ]
        }
    ],
    "M1L4": [
        {
            "id": "b2-m1-l4-wordform-1",
            "title": "Word Formation: Narrative Power",
            "text": "Storytelling has been central to human (1. COMMUNICATE)_____ since ancient times. What makes narratives so (2. POWER)_____ is their ability to create (3. EMOTION)_____ connections between the teller and audience. A well-crafted story can be more (4. PERSUADE)_____ than mere facts, as it engages both our rational and emotional faculties. The (5. EFFECTIVE)_____ of storytelling in education and leadership is well-documented. Stories make abstract concepts (6. ACCESS)_____ and memorable, facilitating deeper (7. UNDERSTAND)_____. This is why successful communicators (8. VARY)_____ use narratives to convey complex ideas.",
            "questions": [
                ("COMMUNICATE", "communication", "noun", "verb → noun (-ation)", '"Human communication" - exchange of information and ideas.'),
                ("POWER", "powerful", "adjective", "noun → adjective (-ful)", '"So powerful" - having great effect or influence.'),
                ("EMOTION", "emotional", "adjective", "noun → adjective (-al)", '"Emotional connections" - relating to emotions and feelings.'),
                ("PERSUADE", "persuasive", "adjective", "verb → adjective (-ive)", '"More persuasive" - good at convincing people.'),
                ("EFFECTIVE", "effectiveness", "noun", "adjective → noun (-ness)", '"The effectiveness of" - degree to which something is successful.'),
                ("ACCESS", "accessible", "adjective", "noun → adjective (-ible)", '"Make accessible" - easy to understand or obtain.'),
                ("UNDERSTAND", "understanding", "noun", "verb → noun (-ing/gerund)", '"Deeper understanding" - comprehension or grasp of knowledge.'),
                ("VARY", "invariably", "adverb", "verb → adverb (in- + -ably)", '"Invariably use" - always, without variation. Negative prefix in-.')
            ]
        },
        {
            "id": "b2-m1-l4-wordform-2",
            "title": "Word Formation: Memory and Experience",
            "text": "Our memories are (1. SURPRISE)_____ unreliable. What we remember as factual events are often (2. CONSTRUCT)_____ influenced by our current beliefs and emotions. This (3. PSYCHOLOGY)_____ phenomenon has important (4. IMPLY)_____ for eyewitness testimony and personal narratives. The (5. ACCURATE)_____ of memory doesn't necessarily make experiences less meaningful, but it does highlight the (6. SUBJECT)_____ nature of human perception. Understanding these (7. LIMIT)_____ helps us approach personal histories with appropriate (8. SKEPTIC)_____ while still valuing their emotional truth.",
            "questions": [
                ("SURPRISE", "surprisingly", "adverb", "verb → adverb (-ingly)", '"Surprisingly unreliable" - in a way that causes surprise.'),
                ("CONSTRUCT", "reconstructions", "noun", "verb → noun (re- + -ion + plural)", '"Reconstructions influenced" - things rebuilt or remade. Prefix re- means again.'),
                ("PSYCHOLOGY", "psychological", "adjective", "noun → adjective (-ical)", '"Psychological phenomenon" - relating to the mind and behavior.'),
                ("IMPLY", "implications", "noun", "verb → noun (-ation → -ications plural)", '"Important implications" - possible effects or results.'),
                ("ACCURATE", "inaccuracy", "noun", "adjective → noun (in- + -acy)", '"The inaccuracy of memory" - lack of accuracy. Negative prefix in-.'),
                ("SUBJECT", "subjective", "adjective", "noun → adjective (-ive)", '"Subjective nature" - based on personal feelings rather than facts.'),
                ("LIMIT", "limitations", "noun", "verb → noun (-ation + plural)", '"These limitations" - restrictions or weaknesses.'),
                ("SKEPTIC", "skepticism", "noun", "noun → abstract noun (-ism)", '"Appropriate skepticism" - attitude of doubting claims. (scepticism UK spelling also acceptable)')
            ]
        }
    ],
    "M1L5": [
        {
            "id": "b2-m1-l5-wordform-1",
            "title": "Word Formation: Literary Analysis",
            "text": "Literary criticism requires a combination of (1. SCHOLAR)_____ knowledge and (2. SENSE)_____ interpretation. A good critic must be (3. ANALYZE)_____ yet (4. IMAGINE)_____, able to identify technical elements while appreciating aesthetic qualities. The (5. COMPLEX)_____ of great literature often rewards multiple readings, revealing new layers of meaning. Critics must balance (6. OBJECT)_____ analysis with (7. PERSON)_____ response, acknowledging their own biases while striving for fair (8. ASSESS)_____.",
            "questions": [
                ("SCHOLAR", "scholarly", "adjective", "noun → adjective (-ly)", '"Scholarly knowledge" - relating to serious academic study.'),
                ("SENSE", "sensitive", "adjective", "noun → adjective (-itive)", '"Sensitive interpretation" - showing understanding and awareness.'),
                ("ANALYZE", "analytical", "adjective", "verb → adjective (-ytical)", '"Be analytical" - using logical analysis. (analyse UK spelling also acceptable)'),
                ("IMAGINE", "imaginative", "adjective", "verb → adjective (-ative)", '"Yet imaginative" - showing creativity and original thinking.'),
                ("COMPLEX", "complexity", "noun", "adjective → noun (-ity)", '"The complexity of" - state of being complex or intricate.'),
                ("OBJECT", "objective", "adjective", "noun → adjective (-ive)", '"Objective analysis" - not influenced by personal feelings, factual.'),
                ("PERSON", "personal", "adjective", "noun → adjective (-al)", '"Personal response" - relating to individual experience and feelings.'),
                ("ASSESS", "assessment", "noun", "verb → noun (-ment)", '"Fair assessment" - evaluation or judgment of something.')
            ]
        },
        {
            "id": "b2-m1-l5-wordform-2",
            "title": "Word Formation: Artistic Expression",
            "text": "Art serves as a powerful medium for (1. EXPRESS)_____ emotions and ideas that resist (2. CONVENTION)_____ language. Artists throughout history have used their work to challenge social norms and inspire (3. REFLECT)_____ on important issues. The (4. INTERPRET)_____ of art is inherently (5. SUBJECT)_____, as each viewer brings their own experiences and perspectives. This (6. AMBIGUOUS)_____ is not a weakness but rather a source of art's enduring power. Great artworks maintain their (7. RELEVANT)_____ across generations precisely because they resist (8. SIMPLE)_____ explanations.",
            "questions": [
                ("EXPRESS", "expressing", "gerund", "verb → gerund (-ing)", '"Medium for expressing" - communicating or showing feelings/ideas.'),
                ("CONVENTION", "conventional", "adjective", "noun → adjective (-al)", '"Conventional language" - following traditional or normal patterns.'),
                ("REFLECT", "reflection", "noun", "verb → noun (-ion)", '"Inspire reflection" - serious thought or consideration.'),
                ("INTERPRET", "interpretation", "noun", "verb → noun (-ation)", '"The interpretation of" - explanation or understanding of meaning.'),
                ("SUBJECT", "subjective", "adjective", "noun → adjective (-ive)", '"Inherently subjective" - based on personal opinions and feelings.'),
                ("AMBIGUOUS", "ambiguity", "noun", "adjective → noun (-ity)", '"This ambiguity" - quality of having more than one possible meaning.'),
                ("RELEVANT", "relevance", "noun", "adjective → noun (-ance)", '"Maintain relevance" - quality of being connected or appropriate.'),
                ("SIMPLE", "simplistic", "adjective", "adjective → negative adjective (-istic)", '"Resist simplistic explanations" - overly simple, treating complex things as simple. Negative connotation.')
            ]
        }
    ],
    "M1L6": [
        {
            "id": "b2-m1-l6-wordform-1",
            "title": "Word Formation: Learning Strategies",
            "text": "Effective learning requires more than just (1. MEMORY)_____ facts; it involves developing deep (2. COMPREHEND)_____ of concepts and their (3. APPLY)_____. Research in educational (4. PSYCHOLOGY)_____ suggests that (5. ACTIVE)_____ engaging with material produces better retention than passive reading. Students who approach learning (6. STRATEGY)_____ and maintain (7. PERSIST)_____ in the face of challenges tend to achieve greater (8. SUCCESS)_____.",
            "questions": [
                ("MEMORY", "memorizing", "gerund", "noun → verb → gerund (-izing)", '"More than memorizing" - learning by heart. (memorising UK spelling also acceptable)'),
                ("COMPREHEND", "comprehension", "noun", "verb → noun (-sion)", '"Deep comprehension" - ability to understand something fully.'),
                ("APPLY", "applications", "noun", "verb → noun (-ation + plural)", '"Their applications" - practical uses of knowledge.'),
                ("PSYCHOLOGY", "psychology", "noun", "no change", '"Educational psychology" - study of how people learn. (No transformation needed)'),
                ("ACTIVE", "actively", "adverb", "adjective → adverb (-ly)", '"Actively engaging" - in an active manner, with full participation.'),
                ("STRATEGY", "strategically", "adverb", "noun → adverb (-ically)", '"Approach strategically" - in a planned and deliberate way.'),
                ("PERSIST", "persistence", "noun", "verb → noun (-ence)", '"Maintain persistence" - quality of continuing despite difficulties.'),
                ("SUCCESS", "success", "noun", "no change", '"Achieve success" - favorable outcome or result. (No transformation needed)')
            ]
        },
        {
            "id": "b2-m1-l6-wordform-2",
            "title": "Word Formation: Module Review",
            "text": "Throughout this module, we've explored various aspects of advanced (1. COMMUNICATE)_____. From narrative structures to (2. ARGUE)_____ techniques, each lesson has built upon previous knowledge. The (3. DIVERSE)_____ of topics covered reflects the (4. MULTI)_____ nature of B2-level English. Success at this level requires not just grammatical (5. ACCURATE)_____ but also stylistic (6. FLEXIBLE)_____ and cultural (7. AWARE)_____. As you continue your studies, remember that language (8. PROFICIENT)_____ develops through consistent practice and reflection.",
            "questions": [
                ("COMMUNICATE", "communication", "noun", "verb → noun (-ation)", '"Advanced communication" - exchange of information and ideas.'),
                ("ARGUE", "argumentative", "adjective", "verb → adjective (-ative)", '"Argumentative techniques" - relating to presenting reasons and evidence.'),
                ("DIVERSE", "diversity", "noun", "adjective → noun (-ity)", '"The diversity of topics" - variety and range of different things.'),
                ("MULTI", "multifaceted", "adjective", "prefix + adjective", '"Multifaceted nature" - having many different aspects. Prefix multi- means many.'),
                ("ACCURATE", "accuracy", "noun", "adjective → noun (-acy)", '"Grammatical accuracy" - quality of being correct and exact.'),
                ("FLEXIBLE", "flexibility", "noun", "adjective → noun (-ity)", '"Stylistic flexibility" - ability to adapt and vary one\'s style.'),
                ("AWARE", "awareness", "noun", "adjective → noun (-ness)", '"Cultural awareness" - knowledge and understanding of different cultures.'),
                ("PROFICIENT", "proficiency", "noun", "adjective → noun (-ency)", '"Language proficiency" - skill and competence in using a language.')
            ]
        }
    ]
}

def generate_exercise(lesson_key, exercise_data):
    """Generate the TypeScript code for a word formation exercise."""
    ex_id = exercise_data["id"]
    title = exercise_data["title"]
    text = exercise_data["text"]
    questions = exercise_data["questions"]
    
    result = f'''      {{
        id: '{ex_id}',
        type: 'word-formation',
        title: '{title}',
        text: `{text}`,
        questions: [
'''
    
    for i, (base_word, correct, word_type, transformation, explanation) in enumerate(questions, 1):
        # Handle acceptable answers
        if correct in ["memorizing", "memorising"]:
            acceptable = "['memorizing', 'memorising']"
        elif correct in ["judgment", "judgement"]:
            acceptable = "['judgment', 'judgement']"
        elif correct in ["skillful", "skilful"]:
            acceptable = "['skillful', 'skilful']"
        elif correct in ["skepticism", "scepticism"]:
            acceptable = "['skepticism', 'scepticism']"
        elif correct in ["analytical", "analyse"]:
            acceptable = "['analytical']"
        elif correct in ["psychology", "success"]:
            acceptable = f"['{correct}']"
        else:
            acceptable = f"['{correct}']"
        
        result += f'''          {{
            id: 'q{i}',
            gapNumber: {i},
            baseWord: '{base_word}',
            correctAnswer: '{correct}',
            acceptableAnswers: {acceptable},
            explanation: '{explanation}',
            wordType: '{word_type}',
            transformation: '{transformation}',
            points: 1
          }}'''
        
        if i < len(questions):
            result += ","
        
        result += "\n"
    
    result += '''        ],
        focusAreas: ['Word formation', 'Prefixes and suffixes', 'Part of speech changes']
      }'''
    
    return result

# Generate all exercises
print("# Generated Word Formation Exercises for M1L2-M1L6\n")
print("# Copy and paste each section after the corresponding lesson's last exercise\n")

for lesson_key in ["M1L2", "M1L3", "M1L4", "M1L5", "M1L6"]:
    print(f"\n{'='*60}")
    print(f"# {lesson_key} - Insert after last exercise")
    print(f"{'='*60}\n")
    
    for i, exercise_data in enumerate(exercises_data[lesson_key]):
        if i > 0:
            print(",")
        print(generate_exercise(lesson_key, exercise_data))
        if i < len(exercises_data[lesson_key]) - 1:
            print(",")

print("\n\n# Total exercises generated: 10")
print("# Total transformations: 80")
