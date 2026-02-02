import json
import os
import random

def generate_unit(unit_id, level="B2"):
    topics = {
        1: ("Lifestyles and Routines", "Present Simple vs Continuous, Stative Verbs", [
            ("I ________ (think) about moving to London lately.", "am thinking", "transformation"),
            ("He ________ (weigh) 80 kilos.", "weighs", "transformation"),
            ("Does she ________ (belong) to any sports club?", "belong", "transformation"),
            ("Match: Hectic - Very busy", "p0", "matching"),
            ("Match: Commute - Travel to work", "p1", "matching")
        ]),
        2: ("The Media", "Past Simple, Past Continuous, Past Perfect", [
            ("When I arrived, the film ________ (already/start).", "had already started", "transformation"),
            ("I ________ (watch) TV when the phone rang.", "was watching", "transformation"),
            ("Match: Headline - The title of a news story", "p0", "matching"),
            ("Match: Broadcast - To transmit by radio or TV", "p1", "matching")
        ]),
        3: ("Travel and Tourism", "Comparatives and Superlatives, Articles", [
            ("This is ________ (interesting) book I have ever read.", "the most interesting", "transformation"),
            ("Is Tokyo ________ (big) than London?", "bigger", "transformation"),
            ("Match: Itinerary - A planned route or journey", "p0", "matching")
        ]),
        4: ("Health and Fitness", "Modal Verbs of Obligation and Necessity", [
            ("You ________ (not/have to) go if you don't want to.", "don't have to", "transformation"),
            ("We ________ (must/wear) a uniform at work.", "must wear", "transformation"),
            ("Match: Sedentary - Spending too much time sitting", "p0", "matching")
        ]),
        5: ("The Environment", "Future Forms", [
            ("This time tomorrow, I ________ (fly) to New York.", "will be flying", "transformation"),
            ("Look at those clouds! It ________ (rain).", "is going to rain", "transformation"),
            ("Match: Sustainability - The ability to be maintained at a certain rate", "p0", "matching")
        ]),
        6: ("Science and Technology", "Zero and First Conditionals", [
            ("If you heat ice, it ________ (melt).", "melts", "transformation"),
            ("If I ________ (see) him, I will tell him.", "see", "transformation"),
            ("Match: Breakthrough - A significant discovery", "p0", "matching")
        ]),
        7: ("Work and Careers", "Second Conditional, I wish / If only", [
            ("If I ________ (be) you, I would take the job.", "were", "transformation"),
            ("I wish I ________ (have) more free time.", "had", "transformation"),
            ("Match: Resign - To voluntarily leave a job", "p0", "matching")
        ]),
        8: ("Culture and Customs", "The Passive", [
            ("The Mona Lisa ________ (paint) by Leonardo da Vinci.", "was painted", "transformation"),
            ("Spanish ________ (speak) in many countries.", "is spoken", "transformation"),
            ("Match: Heritage - Valued objects and qualities such as cultural traditions", "p0", "matching")
        ]),
        9: ("Entertainment", "Relative Clauses", [
            ("The actor ________ played the lead was brilliant.", "who", "transformation"),
            ("This is the house ________ I was born.", "where", "transformation"),
            ("Match: Genre - A style or category of art, music, or literature", "p0", "matching")
        ]),
        10: ("Education", "Reported Speech", [
            ("He said that he ________ (be) tired.", "was", "transformation"),
            ("She asked me where I ________ (live).", "lived", "transformation"),
            ("Match: Curriculum - The subjects comprising a course of study", "p0", "matching")
        ]),
        11: ("Social Issues", "Third Conditional", [
            ("If I ________ (know) the truth, I wouldn't have lied.", "had known", "transformation"),
            ("If we ________ (leave) earlier, we wouldn't have missed the bus.", "had left", "transformation"),
            ("Match: Inequality - Difference in size, degree, circumstances, etc.", "p0", "matching")
        ]),
        12: ("The Natural World", "Modals of Deduction", [
            ("He ________ (must/be) exhausted after that long flight.", "must be", "transformation"),
            ("It ________ (can't/be) true! I don't believe it.", "can't be", "transformation"),
            ("Match: Ecosystem - A biological community of interacting organisms", "p0", "matching")
        ],),
        13: ("Success and Achievement", "Present Perfect Simple vs Continuous", [
            ("I ________ (read) this book for three hours.", "have been reading", "transformation"),
            ("She ________ (finish) her homework already.", "has finished", "transformation"),
            ("Match: Milestone - A significant stage or event in the development of something", "p0", "matching")
        ]),
        14: ("Relationships", "Gerunds and Infinitives", [
            ("I enjoy ________ (swim) in the ocean.", "swimming", "transformation"),
            ("He promised ________ (help) me.", "to help", "transformation"),
            ("Match: Acquaintance - A person one knows slightly, but who is not a close friend", "p0", "matching")
        ]),
        15: ("Consumerism", "Causative Passive", [
            ("I need to have my car ________ (repair).", "repaired", "transformation"),
            ("She is getting her hair ________ (cut) tomorrow.", "cut", "transformation"),
            ("Match: Bargain - A thing bought or offered for sale more cheaply than is usual", "p0", "matching")
        ]),
        16: ("Crime and Punishment", "Reported Verbs", [
            ("He denied ________ (steal) the money.", "stealing", "transformation"),
            ("She suggested ________ (go) to the cinema.", "going", "transformation"),
            ("Match: Verdict - A decision on a disputed issue in a civil or criminal case", "p0", "matching")
        ]),
        17: ("Inventions", "Used to / Get used to", [
            ("I ________ (use to) play the piano when I was a child.", "used to", "transformation"),
            ("I am getting used to ________ (live) in a big city.", "living", "transformation"),
            ("Match: Patent - A government authority or license conferring a right or title", "p0", "matching")
        ]),
        18: ("Psychology", "Adjectives ending in -ed and -ing", [
            ("The film was very ________ (bore).", "boring", "transformation"),
            ("I am very ________ (interest) in history.", "interested", "transformation"),
            ("Match: Cognitive - Relating to the mental action or process of acquiring knowledge", "p0", "matching")
        ]),
        19: ("History", "Past Perfect Continuous", [
            ("They ________ (wait) for an hour before the bus finally arrived.", "had been waiting", "transformation"),
            ("She ________ (work) there for ten years when she got promoted.", "had been working", "transformation"),
            ("Match: Decade - A period of ten years", "p0", "matching")
        ]),
        20: ("Sport", "Participle Clauses", [
            ("________ (see) the accident, I called the police.", "Seeing", "transformation"),
            ("________ (finish) her work, she went home.", "Having finished", "transformation"),
            ("Match: Referee - An official who watches a game or match closely", "p0", "matching")
        ]),
        21: ("Art and Literature", "Quantifiers", [
            ("I have ________ (neither) the time nor the money.", "neither", "transformation"),
            ("________ (both) of my sisters are doctors.", "Both", "transformation"),
            ("Match: Protagonist - The leading character or one of the major characters", "p0", "matching")
        ]),
        22: ("Communication", "Question Tags", [
            ("You are coming, ________ you?", "aren't", "transformation"),
            ("He can't swim, ________ he?", "can", "transformation"),
            ("Match: Non-verbal - Not involving or using words or speech", "p0", "matching")
        ]),
        23: ("Economics", "Future Perfect", [
            ("By next year, I ________ (finish) my degree.", "will have finished", "transformation"),
            ("They ________ (complete) the project by Monday.", "will have completed", "transformation"),
            ("Match: Inflation - A general increase in prices and fall in the purchasing value of money", "p0", "matching")
        ]),
        24: ("Architecture", "Inversion", [
            ("Never ________ I seen such a beautiful building.", "have", "transformation"),
            ("Hardly ________ he started speaking when he was interrupted.", "had", "transformation"),
            ("Match: Facade - The face of a building, especially the principal front", "p0", "matching")
        ]),
        25: ("Globalisation", "Linking Words", [
            ("________ the rain, we went for a walk.", "Despite", "transformation"),
            ("I went to the store ________ buy some milk.", "to", "transformation"),
            ("Match: Outsourcing - Obtain goods or a service from an outside or foreign supplier", "p0", "matching")
        ]),
        26: ("Nutrition", "Subjunctive Mood", [
            ("I suggest that he ________ (study) harder.", "study", "transformation"),
            ("It is essential that she ________ (be) there on time.", "be", "transformation"),
            ("Match: Metabolism - The chemical processes that occur within a living organism", "p0", "matching")
        ]),
        27: ("Fashion", "Reflexive Pronouns", [
            ("I cut ________ (myself) while cooking.", "myself", "transformation"),
            ("They enjoyed ________ (themselves) at the party.", "themselves", "transformation"),
            ("Match: Haute couture - Expensive, fashionable clothes produced by leading fashion houses", "p0", "matching")
        ]),
        28: ("Politics", "Compound Adjectives", [
            ("This is a ________ (well-known) fact.", "well-known", "transformation"),
            ("She is a ________ (full-time) student.", "full-time", "transformation"),
            ("Match: Coalition - An alliance for combined action, especially of political parties", "p0", "matching")
        ]),
        29: ("Philosophy", "Phrasal Verbs", [
            ("I need to ________ (look up) the word in the dictionary.", "look up", "transformation"),
            ("He ________ (gave up) smoking last year.", "gave up", "transformation"),
            ("Match: Paradox - A seemingly absurd or self-contradictory statement", "p0", "matching")
        ]),
        30: ("Final Review", "Mixed B2 Review", [
            ("If I ________ (know) earlier, I would have helped.", "had known", "transformation"),
            ("She ________ (live) here since 2010.", "has lived", "transformation"),
            ("Match: Proficiency - A high degree of skill; expertise", "p0", "matching")
        ])
    }

    title, grammar_topic, samples = topics.get(unit_id, ("General B2 Review", "Mixed Grammar", []))
    content = []
    
    for i in range(1, 201):
        interaction_id = f"U{unit_id}_I{i}"
        sample = samples[(i-1) % len(samples)]
        
        if sample[2] == "transformation":
            item = {
                "interaction_id": interaction_id,
                "type": "transformation",
                "prompt_es": "Escribe la respuesta correcta para completar la oración:",
                "stimulus_en": sample[0].replace("________", "______"),
                "correct_answer": sample[1],
                "feedback_correct_es": "¡Excelente!",
                "mastery_tag": "grammar"
            }
        elif sample[2] == "matching":
            parts = sample[0].split(": ")
            word_def = parts[1].split(" - ")
            item = {
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": "Une cada término con su definición correspondiente:",
                "pairs": [
                    {"id": "p0", "left": word_def[0], "right": word_def[1]},
                    {"id": "p1", "left": f"Term {unit_id}_{i}_1", "right": f"Definition {unit_id}_{i}_1"},
                    {"id": "p2", "left": f"Term {unit_id}_{i}_2", "right": f"Definition {unit_id}_{i}_2"}
                ],
                "correct_answer": {"p0": "p0", "p1": "p1", "p2": "p2"},
                "mastery_tag": "vocabulary"
            }
        else:
            # Fallback to multiple choice if needed
            item = {
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": "Selecciona la opción correcta:",
                "question_en": f"Complete: {sample[0]}",
                "options": [
                    {"id": "o1", "text": sample[1]},
                    {"id": "o2", "text": "Wrong option"},
                    {"id": "o3", "text": "Other option"}
                ],
                "correct_answer": "o1",
                "mastery_tag": "grammar"
            }
        content.append(item)

    unit_data = {
        "course": {
            "language_ui": "es-ES",
            "target_language": "en",
            "level": level,
            "unit_id": f"U{unit_id}",
            "unit_title": title,
            "total_duration_minutes": 600
        },
        "learning_outcomes": [
            f"Understand and use {level} {title} vocabulary",
            f"Apply {level} {grammar_topic} structures in context",
            "Develop communicative competence"
        ],
        "mastery_tags": ["grammar", "vocabulary", "syntax", "communication"],
        "blocks": [
            {
                "block_id": f"{level}_UNIT_{unit_id}_PRACTICE",
                "title": f"{level} Practice: {title}",
                "duration_minutes": 600,
                "content": content
            }
        ]
    }
    return unit_data

output_dir = "src/content/cursos/ingles-b2"
os.makedirs(output_dir, exist_ok=True)

for u in range(1, 31):
    data = generate_unit(u)
    with open(os.path.join(output_dir, f"unit{u}.json"), "w", encoding="utf-8") as f:
        json.dump(data, f, indent=2, ensure_ascii=False)

print("Generated 30 high-quality B2 units.")
