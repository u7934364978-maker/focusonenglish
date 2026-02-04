import json
import os
import random

# Configuración
COURSE_DIR = "src/content/cursos/ingles-b1"
UNITS_COUNT = 60
EXERCISES_PER_UNIT = 100  # Increased quality, manageable quantity

# Banco de Datos Pedagógicos B1 completo para las 30 unidades
PEDAGOGICAL_DATA = {
    1: { # Lifestyles & Routines
        "grammar": [
            ("I live in the city, but now I live in the country.", "I used to live in the city"),
            ("She was shy when she was a child.", "She used to be shy"),
            ("They didn't exercise much before.", "They didn't use to exercise much"),
            ("He (work) ________ at the moment.", "is working"),
            ("I (usually/go) ________ to the gym on Mondays.", "usually go"),
            ("We (not/have) ________ much free time these days.", "don't have"),
            ("She (always/arrive) ________ late for meetings.", "is always arriving"),
            ("Did you (use to) ________ play any instruments?", "use to"),
            ("I (get) ________ used to the cold weather here.", "am getting"),
            ("They (never/eat) ________ out on weekdays.", "never eat"),
            ("My brother (study) ________ for his exams this week.", "is studying"),
            ("It (take) ________ me an hour to get to work.", "takes"),
            ("I (not/used to) ________ waking up so early.", "am not used to"),
            ("She (usually/have) ________ coffee for breakfast.", "usually has"),
            ("We (live) ________ in London for five years (but not now).", "used to live")
        ],
        "vocab": [
            ("Hectic", "Extremely busy and full of activity"),
            ("Sedentary", "Spending a lot of time sitting down"),
            ("Healthy", "Showing good physical or mental condition"),
            ("Urban", "Relating to a city or town"),
            ("Commute", "To travel some distance between one's home and place of work"),
            ("Work-life balance", "The amount of time you spend doing your job compared with your free time"),
            ("Leisure", "Time when you are not working or studying"),
            ("Routine", "A regular way of doing things"),
            ("Quality of life", "The level of enjoyment and health in someone's life"),
            ("Rural", "Relating to the countryside"),
            ("Stressed", "Feeling worried or anxious"),
            ("Relaxed", "Feeling calm and not worried"),
            ("Suburbs", "An area where people live that is outside the city centre"),
            ("Lifestyle", "The way in which a person lives"),
            ("Habit", "Something that you do often and regularly")
        ],
        "sentences": [
            "Life in the city is much more hectic than in the countryside.",
            "I used to go for a run every morning before I moved here.",
            "Living a sedentary lifestyle can lead to health problems.",
            "Many people are moving to rural areas to find peace.",
            "My daily commute takes about forty-five minutes by train.",
            "Finding a good work-life balance is essential for happiness.",
            "I usually spend my leisure time reading or swimming.",
            "It is important to have a regular morning routine.",
            "People in the suburbs often have a better quality of life.",
            "I am getting used to the noise in this urban environment.",
            "She feels stressed because of her demanding job.",
            "His relaxed lifestyle is the envy of all his friends.",
            "I used to live in a small flat, but now I have a house.",
            "Changing your habits is the first step to a healthier life.",
            "The commute is much shorter since I started working from home."
        ],
        "communication": [
            ("I've been feeling quite stressed lately with work.", "You should try to take a few days off and relax.", ["I've already done that, thanks.", "Does it take a long time to get there?"]),
            ("I'm moving to the countryside next month.", "That sounds peaceful! Are you looking forward to it?", ["I completely agree, it makes sense.", "Whatever you think is best."]),
            ("My commute is taking over an hour each way now.", "That's a long time! Have you thought about taking the train?", ["I've no doubt about it at all.", "It depends on the weather, doesn't it?"]),
            ("I'm trying to start a new morning routine.", "That's a great idea! What time do you plan to wake up?", ["r3", "r6"]), # Placeholder for variety logic if needed
            ("Do you prefer urban or rural environments?", "I definitely prefer the city because everything is so close.", ["r11", "r14"])
        ]
    },
    2: { # The World of Work
        "grammar": [
            ("It is necessary to wear a uniform.", "You must wear a uniform"),
            ("It isn't necessary to work on Saturdays.", "You don't have to work on Saturdays"),
            ("Smoking is forbidden in the office.", "You mustn't smoke in the office"),
            ("Is it necessary to bring my laptop?", "Do I have to bring my laptop?"),
            ("It is a good idea to arrive early.", "You should arrive early"),
            ("I (work) ________ here since 2015.", "have worked"),
            ("She (look for) ________ a new job at the moment.", "is looking for"),
            ("They (already/finish) ________ the report.", "have already finished"),
            ("If I (get) ________ the promotion, I will be very happy.", "get"),
            ("I (meet) ________ my manager tomorrow at 10 AM.", "am meeting"),
            ("You (not/should) ________ quit without having another job.", "shouldn't"),
            ("He (be) ________ an accountant for ten years.", "has been"),
            ("We (have) ________ a meeting every Monday morning.", "have"),
            ("I (try) ________ to contact you all morning.", "have been trying"),
            ("She (not/like) ________ her current boss.", "doesn't like")
        ],
        "vocab": [
            ("Accountant", "Someone who keeps or inspects financial accounts"),
            ("Software Developer", "Someone who creates computer programs"),
            ("Entrepreneur", "Someone who starts a business"),
            ("Resign", "To voluntarily leave a job"),
            ("Promotion", "The act of being raised to a higher rank"),
            ("Redundant", "No longer needed at work"),
            ("Overtime", "Time worked in addition to normal hours"),
            ("Freelancer", "A person who is self-employed"),
            ("Vacancy", "An unoccupied job or position"),
            ("Apprenticeship", "A period of learning a craft or trade"),
            ("Salary", "A fixed regular payment"),
            ("Benefits", "Extra things you get with a job"),
            ("Productivity", "The state of being productive"),
            ("Deadline", "The latest time something must be finished"),
            ("Colleague", "A person with whom one works")
        ],
        "sentences": [
            "You should update your CV before applying for the job.",
            "Software developers often work in flexible environments.",
            "An entrepreneur needs to take risks to succeed.",
            "You mustn't arrive late for the client meeting.",
            "She decided to resign after five years at the company.",
            "He was thrilled to receive a promotion to senior manager.",
            "The company had to make several employees redundant.",
            "I've been working a lot of overtime to meet the deadline.",
            "Being a freelancer allows for a better work-life balance.",
            "We have a vacancy for a junior designer in our team.",
            "He started his career with an apprenticeship at an engineering firm.",
            "The salary is competitive and includes a generous bonus.",
            "Our company offers excellent benefits, including private health insurance.",
            "Improving productivity is one of our main goals this year.",
            "My colleagues are very supportive and helpful."
        ]
    },
    3: { # Technology & Innovation
        "grammar": [
            ("I (finish) ________ my homework already.", "have finished"),
            ("She (never/be) ________ to London.", "has never been"),
            ("We (live) ________ here for ten years.", "have lived"),
            ("They (just/arrive) ________ at the station.", "have just arrived"),
            ("Have you (ever/see) ________ a shooting star?", "ever seen"),
            ("The internet (invent) ________ in the 20th century.", "was invented"),
            ("I (use) ________ my computer when the power went out.", "was using"),
            ("They (work) ________ on a new app right now.", "are working"),
            ("This phone (be) ________ better than my old one.", "is"),
            ("I (buy) ________ a new laptop next month.", "am going to buy"),
            ("He (already/upload) ________ the video.", "has already uploaded"),
            ("If you (press) ________ this button, the machine starts.", "press"),
            ("We (not/can) ________ imagine life without smartphones.", "can't"),
            ("She (think) ________ technology is very useful.", "thinks"),
            ("I (lose) ________ all my data yesterday.", "lost")
        ],
        "vocab": [
            ("Browser", "A program used to view websites"),
            ("Wireless", "Using radio waves rather than wires"),
            ("Upload", "To transfer data to a larger computer system"),
            ("Gadget", "A small mechanical or electronic device"),
            ("Database", "A structured set of data held in a computer"),
            ("Artificial Intelligence", "Computer systems performing human-like tasks"),
            ("Cloud", "A network of remote servers for data storage"),
            ("Software", "Programs and other operating information"),
            ("Hardware", "Physical parts of a computer system"),
            ("Encryption", "The process of converting information into code"),
            ("Cybersecurity", "Protection of computer systems from theft or damage"),
            ("Bandwidth", "The amount of data that can be transmitted"),
            ("Interface", "The way a user interacts with a program"),
            ("Algorithm", "A set of rules to be followed in calculations"),
            ("Download", "To copy data from a computer system to another")
        ],
        "sentences": [
            "I have already uploaded the files to the server.",
            "This new gadget makes cooking much faster.",
            "Have you ever used a wireless charger before?",
            "The database needs to be updated regularly.",
            "He has worked as a developer since he graduated.",
            "Artificial Intelligence is changing the way we live and work.",
            "I store all my photos in the cloud to save space.",
            "The software needs an update to fix some bugs.",
            "You should check the hardware requirements before installing.",
            "Encryption is essential for protecting sensitive data.",
            "Cybersecurity is a major concern for modern businesses.",
            "We need more bandwidth to support our remote team.",
            "The user interface of the new app is very intuitive.",
            "The algorithm recommends content based on your interests.",
            "It took me twenty minutes to download the large file."
        ]
    },
    4: { # Travel & Exploration
        "grammar": [
            ("While I (walk) ________, I saw an old friend.", "was walking"),
            ("They (play) ________ tennis when it started to rain.", "were playing"),
            ("I (not/hear) ________ the phone because I was sleeping.", "didn't hear"),
            ("What (you/do) ________ at 8 PM yesterday?", "were you doing"),
            ("He (drive) ________ to work when his car broke down.", "was driving"),
            ("We (go) ________ to Italy last summer.", "went"),
            ("I (never/travel) ________ alone before.", "have never traveled"),
            ("By the time we arrived, the train (leave) ________.", "had left"),
            ("I (visit) ________ the museum tomorrow.", "am visiting"),
            ("She (stay) ________ with friends in New York next week.", "is staying"),
            ("If it (be) ________ sunny, we will go to the beach.", "is"),
            ("I (hope) ________ to see the Northern Lights one day.", "hope"),
            ("They (arrive) ________ at the airport two hours ago.", "arrived"),
            ("Have you (ever/be) ________ to Asia?", "ever been"),
            ("We (wait) ________ for the bus since 10 AM.", "have been waiting")
        ],
        "vocab": [
            ("Destination", "The place to which someone is going"),
            ("Itinerary", "A planned route or journey"),
            ("Sightseeing", "The activity of visiting places of interest"),
            ("Backpacking", "Traveling with a pack on one's back"),
            ("Check-in", "The act of reporting one's presence"),
            ("Reservation", "An arrangement to have something kept for you"),
            ("Landscape", "All the visible features of an area of land"),
            ("Souvenir", "A thing kept as a reminder of a place"),
            ("Customs", "The place where luggage is inspected"),
            ("Excursion", "A short journey or trip"),
            ("Local", "Relating to a particular area or city"),
            ("Foreign", "From a country other than one's own"),
            ("Departure", "The act of leaving a place"),
            ("Arrival", "The act of reaching a place"),
            ("Explore", "To travel through an unfamiliar area")
        ],
        "sentences": [
            "We were sightseeing in Paris when we met them.",
            "The itinerary includes three different cities.",
            "I prefer backpacking to staying in luxury hotels.",
            "What is your final destination for this trip?",
            "The check-in process at the airport was very slow.",
            "I made a reservation at a traditional Italian restaurant.",
            "The landscape in Scotland is truly breathtaking.",
            "I bought a small souvenir to remember the trip.",
            "We had to wait in a long queue at customs.",
            "The hotel offers several daily excursions for guests.",
            "It's always a good idea to try the local food.",
            "Learning a foreign language is helpful for travelers.",
            "The departure of our flight was delayed by two hours.",
            "Upon arrival, we were greeted by our tour guide.",
            "We spent the afternoon exploring the old town."
        ]
    },
    5: { # Environmental Awareness
        "grammar": [
            ("If you heat ice, it (melt) ________.", "melts"),
            ("If it rains tomorrow, we (stay) ________ at home.", "will stay"),
            ("If you (not/hurry) ________, you will miss the bus.", "don't hurry"),
            ("Plants die if they (not/get) ________ enough water.", "don't get"),
            ("I (call) ________ you if I have any news.", "will call"),
            ("We (must/protect) ________ the environment.", "must protect"),
            ("You (should/recycle) ________ more often.", "should recycle"),
            ("The Earth (get) ________ warmer every year.", "is getting"),
            ("Many species (disappear) ________ if we don't act.", "will disappear"),
            ("We (already/reduce) ________ our plastic waste.", "have already reduced"),
            ("If everyone (plant) ________ a tree, it would help.", "planted"),
            ("It (be) ________ important to save energy.", "is"),
            ("I (start) ________ a combat bin last month.", "started"),
            ("She (not/believe) ________ in climate change.", "doesn't believe"),
            ("They (build) ________ a new wind farm nearby.", "are building")
        ],
        "vocab": [
            ("Pollution", "Harmful substances in the environment"),
            ("Recycle", "To convert waste into reusable material"),
            ("Renewable", "Not depleted when used"),
            ("Habitat", "The natural home of an animal or plant"),
            ("Climate", "General weather conditions in an area"),
            ("Sustainability", "Maintaining a certain level of resources"),
            ("Biodiversity", "Variety of plant and animal life"),
            ("Conservation", "Protection of natural resources"),
            ("Deforestation", "Clearing a wide area of trees"),
            ("Emissions", "Discharge of gases or radiation"),
            ("Ecosystem", "Community of interacting organisms"),
            ("Organic", "Produced without artificial chemicals"),
            ("Solar", "Relating to the sun's energy"),
            ("Waste", "Material that is not needed or wanted"),
            ("Endangered", "At risk of extinction")
        ],
        "sentences": [
            "We must recycle more to protect the planet.",
            "Solar power is a popular form of renewable energy.",
            "Pollution levels in the city are rising.",
            "If we don't act now, the climate will change forever.",
            "The polar bear is losing its natural habitat.",
            "Sustainability should be a priority for all businesses.",
            "Protecting biodiversity is essential for a healthy planet.",
            "The conservation of our forests is very important.",
            "Deforestation is causing many animals to lose their homes.",
            "We need to reduce our carbon emissions significantly.",
            "Every part of the ecosystem depends on each other.",
            "Organic farming is better for the soil and our health.",
            "Installing solar panels can help you save on energy bills.",
            "Try to minimize the amount of waste you produce.",
            "Many species are now on the endangered list."
        ]
    },
    6: { # Media & Entertainment
        "grammar": [
            ("Millions of emails (send) ________ every day.", "are sent"),
            ("The news (watch) ________ by millions of people.", "is watched"),
            ("Spanish (speak) ________ in many countries.", "is spoken"),
            ("Coffee (grow) ________ in Brazil.", "is grown"),
            ("These cars (make) ________ in Germany.", "are made"),
            ("The movie (direct) ________ by Spielberg.", "was directed"),
            ("I (never/see) ________ such a scary film.", "have never seen"),
            ("While I (watch) ________ TV, the power went out.", "was watching"),
            ("They (film) ________ a new documentary in the city.", "are filming"),
            ("The actors (practice) ________ their lines all day.", "have been practicing"),
            ("If you (miss) ________ the show, you can watch it online.", "miss"),
            ("The music (compose) ________ specifically for the film.", "was composed"),
            ("He (not/like) ________ reality shows.", "doesn't like"),
            ("We (go) ________ to the cinema next Friday.", "are going"),
            ("Have you (ever/meet) ________ a famous celebrity?", "ever met")
        ],
        "vocab": [
            ("Broadcast", "To transmit by radio or television"),
            ("Journalism", "The activity of gathering and presenting news"),
            ("Audience", "The people who watch or listen to something"),
            ("Headline", "A heading at the top of an article"),
            ("Review", "A critical evaluation of a book or film"),
            ("Scriptwriter", "A person who writes the text for a play or movie"),
            ("Producer", "A person responsible for the financial aspects"),
            ("Streaming", "A method of transmitting or receiving data over the web"),
            ("Episode", "A section of a television or radio serial"),
            ("Presenter", "A person who introduces a television or radio program"),
            ("Documentary", "A film or program providing a factual record"),
            ("Character", "A person in a novel, play, or movie"),
            ("Plot", "The main events of a play, movie, or novel"),
            ("Subtitles", "Captions displayed at the bottom of a movie"),
            ("Genre", "A category of artistic composition")
        ],
        "sentences": [
            "The documentary was broadcast on national TV.",
            "The audience cheered at the end of the show.",
            "I read a very positive review of the new movie.",
            "The headline caught everyone's attention.",
            "She wants to study journalism at university.",
            "The scriptwriter spent months developing the dialogue.",
            "A good producer can make or break a film project.",
            "Streaming services have changed how we consume media.",
            "I can't wait for the next episode of my favorite series.",
            "The presenter was very charismatic and engaging.",
            "We watched an interesting documentary about space exploration.",
            "The main character in the story is a brave young woman.",
            "The plot of the thriller was full of unexpected twists.",
            "I prefer watching foreign films with subtitles.",
            "What is your favorite genre of music or cinema?"
        ]
    },
    7: { # Health & Wellbeing
        "grammar": [
            ("You (should/eat) ________ more vegetables.", "should eat"),
            ("He (ought to/see) ________ a doctor about that cough.", "ought to see"),
            ("You (shouldn't/smoke) ________; it's bad for you.", "shouldn't smoke"),
            ("What (I/should/do) ________ to lose weight?", "should i do"),
            ("You (ought to/be) ________ more careful.", "ought to be"),
            ("I (feel) ________ much better since I started exercising.", "have felt"),
            ("She (usually/go) ________ for a run in the morning.", "usually goes"),
            ("They (not/have) ________ any health problems so far.", "haven't had"),
            ("If you (rest) ________, you will recover faster.", "rest"),
            ("He (try) ________ to quit sugar for a month.", "has been trying"),
            ("We (meet) ________ at the gym at 6 PM.", "are meeting"),
            ("You (must/take) ________ this medicine twice a day.", "must take"),
            ("She (already/book) ________ an appointment with the dentist.", "has already booked"),
            ("I (not/used to) ________ sleeping so little.", "am not used to"),
            ("He (think) ________ mental health is very important.", "thinks")
        ],
        "vocab": [
            ("Symptom", "A physical sign of a disease"),
            ("Treatment", "Medical care given to a patient"),
            ("Recovery", "The process of becoming well again"),
            ("Balanced", "Consisting of different elements in correct proportions"),
            ("Nutritious", "Providing the substances needed for growth"),
            ("Mindfulness", "The quality of being conscious or aware"),
            ("Meditation", "The action or practice of meditating"),
            ("Exercise", "Physical activity that is done to become stronger"),
            ("Hydration", "The process of causing something to absorb water"),
            ("Nutrition", "The process of providing food for health and growth"),
            ("Stamina", "The ability to sustain prolonged physical effort"),
            ("Wellness", "The state of being in good health"),
            ("Therapy", "Treatment intended to relieve or heal a disorder"),
            ("Insomnia", "Habitual sleeplessness; inability to sleep"),
            ("Stress", "A state of mental or emotional strain")
        ],
        "sentences": [
            "A balanced diet is essential for good health.",
            "He made a full recovery after the operation.",
            "What are the main symptoms of the flu?",
            "The doctor suggested a new treatment plan.",
            "You should try to eat more nutritious food.",
            "Practicing mindfulness can help reduce daily stress.",
            "She finds daily meditation very helpful for her focus.",
            "Regular exercise is key to maintaining a healthy weight.",
            "Proper hydration is vital during hot weather.",
            "Good nutrition is the foundation of physical wellbeing.",
            "Running every morning has significantly improved my stamina.",
            "The wellness center offers many different classes.",
            "He decided to start therapy to manage his anxiety.",
            "Insomnia can have a serious impact on your quality of life.",
            "Managing stress is crucial for long-term health."
        ]
    },
    8: { # Education & Learning
        "grammar": [
            ("I (graduate) ________ in 2010.", "graduated"),
            ("She (study) ________ English for five years now.", "has studied"),
            ("We (be) ________ friends since primary school.", "have been"),
            ("Did you (finish) ________ your degree last year?", "finish"),
            ("I (never/fail) ________ an exam in my life.", "have never failed"),
            ("If I (study) ________ harder, I would get better grades.", "studied"),
            ("The lesson (already/start) ________ when I arrived.", "had already started"),
            ("They (build) ________ a new library on campus.", "are building"),
            ("I (not/can) ________ understand this complex theory.", "can't"),
            ("She (plan) ________ to take a gap year after school.", "is planning"),
            ("We (have) ________ a big test next Monday.", "are having"),
            ("He (teach) ________ history for over twenty years.", "has been teaching"),
            ("Do you (need) ________ any help with your assignment?", "need"),
            ("I (wish) ________ I knew more about biology.", "wish"),
            ("The school (open) ________ at 8 AM every day.", "opens")
        ],
        "vocab": [
            ("Curriculum", "The subjects comprising a course of study"),
            ("Scholarship", "A grant to support a student's education"),
            ("Assignment", "A task or piece of work allocated to someone"),
            ("Degree", "A qualification given by a university"),
            ("Tutor", "A private teacher"),
            ("Literacy", "The ability to read and write"),
            ("Academic", "Relating to education and scholarship"),
            ("Enrollment", "The action of enrolling or being enrolled"),
            ("Tuition", "Teaching or instruction, especially of individuals"),
            ("Graduate", "A person who has successfully completed a course"),
            ("Semester", "A half-year term in a school or college"),
            ("Qualification", "A quality or accomplishment that fits a person for a task"),
            ("Internship", "The position of a student or trainee who works"),
            ("Lecture", "An educational talk to an audience of students"),
            ("Dissertation", "A long essay on a particular subject")
        ],
        "sentences": [
            "She won a scholarship to study in New York.",
            "The university curriculum is being updated.",
            "I have two assignments to finish by Friday.",
            "He graduated with a degree in Engineering.",
            "A private tutor helped him with his maths.",
            "Improving literacy rates is a primary goal of the program.",
            "The academic year begins in September.",
            "Enrollment for the new course is now open.",
            "University tuition fees have increased recently.",
            "Thousands of graduates enter the job market every year.",
            "I'm taking four different subjects this semester.",
            "What professional qualifications do you have?",
            "An internship is a great way to gain practical experience.",
            "The professor gave a fascinating lecture on economics.",
            "She is currently writing her dissertation on linguistics."
        ]
    },
    9: { # Society & Culture
        "grammar": [
            ("This city is (big) ________ than my hometown.", "bigger"),
            ("It is the (beautiful) ________ place I've ever seen.", "most beautiful"),
            ("Learning English is (easy) ________ than learning Chinese.", "easier"),
            ("He is the (good) ________ player in the team.", "best"),
            ("Gold is (expensive) ________ than silver.", "more expensive"),
            ("I (think) ________ it's important to be polite.", "think"),
            ("We (never/see) ________ such a diverse community.", "have never seen"),
            ("If you (travel) ________ more, you would understand more.", "traveled"),
            ("They (organize) ________ a cultural festival next month.", "are organizing"),
            ("The museum (visit) ________ by thousands of people every week.", "is visited"),
            ("She (always/respect) ________ local customs.", "always respects"),
            ("Have you (ever/try) ________ traditional food from India?", "ever tried"),
            ("I (believe) ________ in the importance of equality.", "believe"),
            ("He (study) ________ sociology at the moment.", "is studying"),
            ("We (live) ________ in a multicultural neighborhood.", "live")
        ],
        "vocab": [
            ("Tradition", "A long-standing custom or belief"),
            ("Diversity", "The state of being diverse; variety"),
            ("Etiquette", "The customary code of polite behavior"),
            ("Heritage", "Valued objects and qualities of the past"),
            ("Multicultural", "Relating to several cultural or ethnic groups"),
            ("Community", "A group of people living in the same place"),
            ("Belief", "An acceptance that something is true"),
            ("Custom", "A traditional way of doing something"),
            ("Values", "Principles or standards of behavior"),
            ("Norms", "Something that is usual, typical, or standard"),
            ("Identity", "The fact of being who or what a person is"),
            ("Integration", "The action or process of integrating"),
            ("Prejudice", "Preconceived opinion not based on reason"),
            ("Tolerance", "The ability or willingness to tolerate something"),
            ("Global", "Relating to the whole world; worldwide")
        ],
        "sentences": [
            "London is a very multicultural city.",
            "It's important to respect local traditions.",
            "We should celebrate cultural diversity.",
            "Business etiquette varies from country to country.",
            "The city has a rich historical heritage.",
            "Being part of a community gives you a sense of belonging.",
            "Respecting the beliefs of others is essential.",
            "It is a custom in our family to eat together on Sundays.",
            "Our personal values guide our decisions in life.",
            "Social norms change over time and across cultures.",
            "Culture is a major part of our individual identity.",
            "Social integration is key for new residents.",
            "We must work together to overcome prejudice.",
            "Tolerance is the foundation of a peaceful society.",
            "We live in an increasingly global world."
        ]
    },
    10: { # The Natural World
        "grammar": [
            ("I saw (a/an) ________ elephant at the zoo.", "an"),
            ("(The) ________ moon is very bright tonight.", "The"),
            ("She is (a/an) ________ doctor.", "a"),
            ("I love (zero article) ________ animals.", ""),
            ("He lives in (a/an) ________ small village.", "a"),
            ("The Amazon (be) ________ the largest rainforest.", "is"),
            ("If we (not/protect) ________ tigers, they will die out.", "don't protect"),
            ("Scientists (study) ________ the effects of global warming.", "are studying"),
            ("Many species (already/become) ________ extinct.", "have already become"),
            ("The Earth (revolve) ________ around the sun.", "revolves"),
            ("I (hope) ________ the weather stays nice this weekend.", "hope"),
            ("We (visit) ________ the national park last year.", "visited"),
            ("Have you (ever/see) ________ a whale in the wild?", "ever seen"),
            ("The sun (set) ________ in the west.", "sets"),
            ("Animals (need) ________ water to survive.", "need")
        ],
        "vocab": [
            ("Species", "A group of living organisms"),
            ("Extinct", "Having no living members"),
            ("Mammal", "A warm-blooded vertebrate animal"),
            ("Predator", "An animal that naturally preys on others"),
            ("Conservation", "The protection of plants and animals"),
            ("Rainforest", "A dense forest found in tropical areas"),
            ("Ocean", "A very large expanse of sea"),
            ("Ecosystem", "A biological community of interacting organisms"),
            ("Pollution", "Harmful substances in the environment"),
            ("Wilderness", "An uncultivated and uninhabited region"),
            ("Reptile", "A vertebrate animal of a class that includes snakes"),
            ("Migration", "Seasonal movement of animals"),
            ("Atmosphere", "The envelope of gases surrounding the earth"),
            ("Geology", "The science that deals with the earth's physical structure"),
            ("Environment", "The surroundings in which a person lives")
        ],
        "sentences": [
            "Many species are at risk of extinction.",
            "The tiger is a powerful predator.",
            "Whales are the largest mammals on Earth.",
            "Conservation projects help protect wildlife.",
            "The dodo became extinct in the 17th century.",
            "The Amazon rainforest produces much of the world's oxygen.",
            "Plastic pollution is a major threat to our oceans.",
            "Every species plays a vital role in the ecosystem.",
            "We need to reduce air pollution in our cities.",
            "The explorers traveled deep into the wilderness.",
            "Turtles and crocodiles are both types of reptiles.",
            "Migration is a natural part of many animals' lives.",
            "The atmosphere protects us from harmful solar radiation.",
            "Studying geology helps us understand the history of our planet.",
            "We all have a responsibility to protect the environment."
        ]
    },
    11: { # Shopping & Consumerism
        "grammar": [
            ("I (buy) ________ a new laptop last week.", "bought"),
            ("How much (be) ________ this shirt?", "is"),
            ("I (look) ________ for a birthday present for my sister.", "am looking"),
            ("Have you (ever/shop) ________ online?", "ever shopped"),
            ("If it (be) ________ cheaper, I would buy it.", "were"),
            ("This store (open) ________ at 9 AM.", "opens"),
            ("I (not/spend) ________ much money lately.", "haven't spent"),
            ("They (try) ________ on different shoes for an hour.", "have been trying"),
            ("Can I (get) ________ a refund if it doesn't fit?", "get"),
            ("She (usually/pay) ________ by credit card.", "usually pays"),
            ("We (go) ________ shopping this afternoon.", "are going"),
            ("The price (include) ________ tax.", "includes"),
            ("I (wish) ________ I had more money to spend.", "wish"),
            ("He (forget) ________ his wallet at home.", "forgot"),
            ("Did you (find) ________ what you were looking for?", "find")
        ],
        "vocab": [
            ("Receipt", "A piece of paper proving payment"),
            ("Discount", "A reduction in the usual price"),
            ("Bargain", "Something bought at a low price"),
            ("Purchase", "The act of buying something"),
            ("Consumer", "A person who purchases goods and services"),
            ("Retail", "The sale of goods to the public"),
            ("Wholesale", "The sale of goods in large quantities"),
            ("Window-shopping", "Looking at goods in shop windows without buying"),
            ("Refund", "A repayment of a sum of money"),
            ("Counter", "A long flat surface over which goods are sold"),
            ("Brand", "A type of product manufactured by a particular company"),
            ("Quality", "The standard of something as measured against others"),
            ("Warranty", "A written guarantee from a manufacturer"),
            ("Trolley", "A large metal basket on wheels used in supermarkets"),
            ("Aisle", "A passage between rows of shelves in a shop")
        ],
        "sentences": [
            "Keep your receipt in case you need to return it.",
            "There is a 20% discount on all winter coats.",
            "I found a real bargain at the charity shop.",
            "What was your most recent online purchase?",
            "Consumers are becoming more aware of ethical brands.",
            "The retail industry has changed significantly recently.",
            "He works for a wholesale distribution company.",
            "We spent the afternoon window-shopping in the city center.",
            "The shop refused to give me a full refund.",
            "Please pay for your items at the checkout counter.",
            "Which brand of coffee do you usually buy?",
            "I'm looking for a high-quality leather jacket.",
            "The refrigerator comes with a five-year warranty.",
            "He filled his trolley with groceries for the week.",
            "You can find the baking products in the third aisle."
        ]
    },
    12: { # Technology & Innovation
        "grammar": [
            ("The first computer (invent) ________ in the 1940s.", "was invented"),
            ("Technology (change) ________ the way we live.", "has changed"),
            ("I (use) ________ my smartphone all the time.", "use"),
            ("Scientists (develop) ________ a new vaccine.", "are developing"),
            ("If I (have) ________ a 3D printer, I would make my own toys.", "had"),
            ("The internet (be) ________ essential for modern life.", "is"),
            ("I (not/download) ________ the latest update yet.", "haven't downloaded"),
            ("They (work) ________ on this project for three years.", "have been working"),
            ("Can you (fix) ________ my broken screen?", "fix"),
            ("She (always/carry) ________ her laptop with her.", "always carries"),
            ("We (launch) ________ a new app next month.", "are launching"),
            ("The software (need) ________ to be updated.", "needs"),
            ("I (wish) ________ I understood how this works.", "wish"),
            ("He (lose) ________ all his data because he didn't back it up.", "lost"),
            ("Did you (see) ________ the latest gadget?", "see")
        ],
        "vocab": [
            ("Gadget", "A small mechanical or electronic device"),
            ("Software", "The programs used by a computer"),
            ("Hardware", "The physical parts of a computer"),
            ("Interface", "A point where two systems or subjects meet"),
            ("Wireless", "Using radio waves rather than wires"),
            ("Database", "A structured set of data held in a computer"),
            ("Encryption", "The process of converting information into code"),
            ("Algorithm", "A process or set of rules to be followed in calculations"),
            ("Revolutionary", "Involving or causing a complete or dramatic change"),
            ("User-friendly", "Easy to use or understand"),
            ("Compatibility", "A state in which two things are able to exist together"),
            ("Network", "A group or system of interconnected people or things"),
            ("Cybersecurity", "The state of being protected against criminal use of data"),
            ("Virtual", "Not physically existing as such but made by software"),
            ("Artificial", "Made or produced by human beings rather than occurring naturally")
        ],
        "sentences": [
            "This new gadget is very useful for traveling.",
            "You need to install the latest software updates.",
            "The hardware needs to be replaced every few years.",
            "The user interface is simple and easy to navigate.",
            "We have a wireless internet connection at home.",
            "All the customer details are stored in the database.",
            "Encryption is vital for protecting sensitive information.",
            "The search engine uses a complex algorithm.",
            "This new technology is truly revolutionary.",
            "The application is very user-friendly for beginners.",
            "Check the compatibility of the device before buying.",
            "The office network was down for several hours.",
            "Cybersecurity is a top priority for most companies today.",
            "Virtual reality provides a very immersive experience.",
            "Artificial intelligence is transforming many industries."
        ]
    },
    13: { # Work & Careers
        "grammar": [
            ("I (work) ________ here for ten years.", "have worked"),
            ("She (apply) ________ for a new job last week.", "applied"),
            ("What (be) ________ your job title?", "is"),
            ("I (look) ________ for a better position.", "am looking"),
            ("If I (get) ________ the promotion, I will be very happy.", "get"),
            ("The office (open) ________ at 8:30 AM.", "opens"),
            ("I (not/have) ________ much experience in this field.", "don't have"),
            ("They (discuss) ________ the new project since morning.", "have been discussing"),
            ("Can you (send) ________ me your CV?", "send"),
            ("She (usually/commute) ________ by train.", "usually commutes"),
            ("We (have) ________ a meeting tomorrow at 10 AM.", "are having"),
            ("The salary (depend) ________ on your qualifications.", "depends"),
            ("I (wish) ________ I had a more flexible schedule.", "wish"),
            ("He (quit) ________ his job because of the long hours.", "quit"),
            ("Did you (hear) ________ about the vacancy?", "hear")
        ],
        "vocab": [
            ("Vacancy", "An unoccupied position or job"),
            ("Promotion", "The action of promoting someone to a higher rank"),
            ("Salary", "A fixed regular payment made by an employer"),
            ("Colleague", "A person with whom one works in a profession"),
            ("Employer", "A person or organization that employs people"),
            ("Employee", "A person employed for wages or salary"),
            ("Interview", "A formal meeting in which someone is questioned"),
            ("Experience", "The knowledge or skill acquired by a period of work"),
            ("Qualification", "A quality or accomplishment that fits a person for a task"),
            ("Retirement", "The action or fact of leaving one's job and ceasing to work"),
            ("Redundancy", "The state of being no longer in employment"),
            ("Freelance", "Working for different companies at different times"),
            ("Entrepreneur", "A person who sets up a business"),
            ("Full-time", "Occupying or using the whole of someone's available working time"),
            ("Part-time", "For only part of the usual working day or week")
        ],
        "sentences": [
            "There is a vacancy for a marketing manager.",
            "She received a promotion after just six months.",
            "The starting salary for this position is very competitive.",
            "I enjoy working with my colleagues in the design team.",
            "Who is your current employer?",
            "The company has over five hundred employees.",
            "I have a job interview tomorrow morning.",
            "Do you have any previous experience in sales?",
            "What professional qualifications do you have?",
            "He is planning his retirement after forty years of work.",
            "The factory closure resulted in many redundancies.",
            "She decided to go freelance as a graphic designer.",
            "A successful entrepreneur needs to be willing to take risks.",
            "I'm looking for a full-time job in the city.",
            "Working part-time allows her to spend more time with her children."
        ]
    },
    14: { # Travel & Tourism
        "grammar": [
            ("I (travel) ________ to Japan last summer.", "traveled"),
            ("Have you (ever/be) ________ to Paris?", "ever been"),
            ("We (stay) ________ in a lovely hotel by the sea.", "stayed"),
            ("I (look) ________ forward to my next holiday.", "am looking"),
            ("If it (not/rain) ________, we will go to the beach.", "doesn't rain"),
            ("The flight (depart) ________ at 7 PM.", "departs"),
            ("I (not/pack) ________ my suitcase yet.", "haven't packed"),
            ("They (plan) ________ this trip for months.", "have been planning"),
            ("Can you (recommend) ________ a good restaurant?", "recommend"),
            ("She (always/take) ________ a lot of photos.", "always takes"),
            ("We (go) ________ to Italy next year.", "are going"),
            ("The tour (start) ________ at the main square.", "starts"),
            ("I (wish) ________ I could speak the local language better.", "wish"),
            ("He (lose) ________ his passport at the airport.", "lost"),
            ("Did you (book) ________ your tickets online?", "book")
        ],
        "vocab": [
            ("Itinerary", "A planned route or journey"),
            ("Destination", "The place to which someone or something is going"),
            ("Accommodation", "A room, group of rooms, or building in which someone may stay"),
            ("Sightseeing", "The activity of visiting places of interest"),
            ("Souvenir", "A thing that is kept as a reminder of a place"),
            ("Departure", "The action of leaving, especially to start a journey"),
            ("Arrival", "The action or process of arriving at a place"),
            ("Passport", "An official document issued by a government"),
            ("Reservation", "An arrangement to have something kept for one's use"),
            ("Excursion", "A short journey or trip, especially one taken as a leisure activity"),
            ("Landscape", "All the visible features of an area of countryside or land"),
            ("Guidebook", "A book of information about a place for visitors"),
            ("Backpacking", "Traveling or hiking carrying one's belongings in a backpack"),
            ("Currency", "A system of money in general use in a particular country"),
            ("Customs", "The place at a port, airport, or frontier where officials check goods")
        ],
        "sentences": [
            "We have a very busy itinerary for our trip.",
            "What is your favorite travel destination?",
            "Finding affordable accommodation can be difficult in peak season.",
            "We spent the whole day sightseeing in Rome.",
            "I bought a small souvenir to remember the trip.",
            "Check the departure time on your boarding pass.",
            "The expected arrival time is 10:30 AM.",
            "Don't forget to bring your passport with you.",
            "I'd like to make a reservation for two nights.",
            "The hotel organizes daily excursions to nearby villages.",
            "The mountain landscape was absolutely breathtaking.",
            "I followed the recommendations in my guidebook.",
            "They went backpacking through Southeast Asia for six months.",
            "You'll need to exchange some money into the local currency.",
            "We had to go through customs when we arrived at the airport."
        ]
    },
    15: { # Food & Drink
        "grammar": [
            ("I (cook) ________ dinner for my friends tonight.", "am cooking"),
            ("Have you (ever/eat) ________ raw fish?", "ever eaten"),
            ("She (not/like) ________ spicy food.", "doesn't like"),
            ("We (go) ________ to a new Italian restaurant last night.", "went"),
            ("If you (add) ________ more salt, it will taste better.", "add"),
            ("The bakery (open) ________ at 6 AM.", "opens"),
            ("I (not/have) ________ breakfast yet.", "haven't had"),
            ("They (prepare) ________ the feast all day.", "have been preparing"),
            ("Can I (have) ________ a glass of water, please?", "have"),
            ("She (usually/drink) ________ tea with milk.", "usually drinks"),
            ("We (have) ________ a BBQ this weekend.", "are having"),
            ("The recipe (require) ________ three eggs.", "requires"),
            ("I (wish) ________ I knew how to bake bread.", "wish"),
            ("He (spill) ________ wine on his white shirt.", "spilt"),
            ("Did you (enjoy) ________ your meal?", "enjoy")
        ],
        "vocab": [
            ("Ingredient", "Any of the foods or substances that are combined to make a particular dish"),
            ("Recipe", "A set of instructions for preparing a particular dish"),
            ("Cuisine", "A style or method of cooking, especially as characteristic of a particular country"),
            ("Beverage", "A drink other than water"),
            ("Vegetarian", "A person who does not eat meat"),
            ("Delicious", "Highly pleasant to the taste"),
            ("Nutritious", "Providing the substances needed for growth and health"),
            ("Flavor", "The distinctive taste of a food or drink"),
            ("Organic", "Produced or involving production without the use of chemical fertilizers"),
            ("Spicy", "Flavored with or fragrant with spice"),
            ("Dessert", "The sweet course eaten at the end of a meal"),
            ("Menu", "A list of dishes available in a restaurant"),
            ("Server", "A person who serves customers in a restaurant"),
            ("Gourmet", "Relating to or being high-quality, expensive, or sophisticated food"),
            ("Appetizer", "A small dish of food or a drink taken before a meal")
        ],
        "sentences": [
            "What are the main ingredients in this soup?",
            "I followed a traditional recipe for the apple pie.",
            "I love trying different types of international cuisine.",
            "Coffee is my favorite hot beverage.",
            "They offer many different vegetarian options.",
            "The chocolate cake was absolutely delicious.",
            "Fresh fruit is a very nutritious snack.",
            "The herbs add a lot of flavor to the dish.",
            "We prefer to buy organic vegetables whenever possible.",
            "The curry was a bit too spicy for my taste.",
            "We had fruit salad for dessert.",
            "Could we see the menu, please?",
            "The server was very friendly and helpful.",
            "He is a gourmet chef with many years of experience.",
            "We shared a plate of appetizers before the main course."
        ]
    },
    16: { # Science & Discovery
        "grammar": [
            ("I think it (rain) ________ tomorrow.", "will rain"),
            ("I (visit) ________ my grandmother this weekend.", "am going to visit"),
            ("Look at those clouds! It (rain) ________.", "is going to rain"),
            ("Wait, I (help) ________ you with those bags.", "will help"),
            ("Next year, we (travel) ________ to Japan.", "are going to travel"),
            ("Scientists (conduct) ________ an experiment right now.", "are conducting"),
            ("The theory (prove) ________ by many researchers.", "has been proved"),
            ("If we (discover) ________ a new planet, it would be amazing.", "discovered"),
            ("He (study) ________ physics for five years.", "has been studying"),
            ("They (find) ________ a cure for the disease soon.", "will find"),
            ("We (meet) ________ at the lab at 9 AM.", "are meeting"),
            ("The result (depend) ________ on the variables.", "depends"),
            ("I (wish) ________ I was better at chemistry.", "wish"),
            ("He (lose) ________ his notes in the fire.", "lost"),
            ("Did you (see) ________ the latest discovery?", "see")
        ],
        "vocab": [
            ("Experiment", "A scientific procedure to make a discovery"),
            ("Laboratory", "A room or building for scientific research"),
            ("Invention", "The action of inventing something"),
            ("Theory", "A system of ideas intended to explain something"),
            ("Microscope", "An optical instrument for viewing very small objects"),
            ("Discovery", "The act of finding or learning something for the first time"),
            ("Hypothesis", "A proposed explanation made on the basis of limited evidence"),
            ("Analysis", "Detailed examination of the elements or structure of something"),
            ("Researcher", "A person who carries out academic or scientific research"),
            ("Scientific", "Based on or characterized by the methods and principles of science"),
            ("Innovation", "A new method, idea, or product"),
            ("Observation", "The action or process of observing something carefully"),
            ("Data", "Facts and statistics collected together for reference or analysis"),
            ("Conclusion", "A judgment or decision reached by reasoning"),
            ("Biology", "The study of living organisms")
        ],
        "sentences": [
            "The scientists are conducting a new experiment.",
            "He spent all day working in the laboratory.",
            "The invention of the internet changed the world.",
            "Einstein is famous for his theory of relativity.",
            "You can see the cells under a microscope.",
            "The discovery of penicillin was a major breakthrough.",
            "What is your hypothesis for the experiment?",
            "We need to perform a detailed analysis of the results.",
            "Many researchers are working on a cure for cancer.",
            "She uses a scientific approach to solve problems.",
            "Technological innovation is key to progress.",
            "Keep a record of all your observations in your notebook.",
            "The data supports the initial findings of the study.",
            "We reached a conclusion after reviewing all the evidence.",
            "Biology is the study of life and living organisms."
        ]
    },
    17: { # Modern Communications
        "grammar": [
            ("'I am tired,' he said.", "He said that he was tired"),
            ("'We live in London,' they said.", "They said that they lived in London"),
            ("'I will call you,' she said.", "She said that she would call me"),
            ("'I have finished,' he said.", "He said that he had finished"),
            ("'I can help,' she said.", "She said that she could help"),
            ("He (ask) ________ me where I lived.", "asked"),
            ("She (tell) ________ him to be quiet.", "told"),
            ("They (say) ________ they were coming to the party.", "said"),
            ("I (wonder) ________ if you could help me.", "wondered"),
            ("He (promise) ________ to call me back.", "promised"),
            ("She (suggest) ________ going to the cinema.", "suggested"),
            ("They (explain) ________ how to use the machine.", "explained"),
            ("I (not/know) ________ what to say.", "didn't know"),
            ("He (remind) ________ me to buy some milk.", "reminded"),
            ("She (complain) ________ about the noise.", "complained")
        ],
        "vocab": [
            ("Messaging", "The sending and receiving of messages"),
            ("Social Media", "Websites and applications for social networking"),
            ("Networking", "The action of interacting with others to exchange information"),
            ("Smartphones", "Mobile phones that perform many functions of a computer"),
            ("Connectivity", "The state of being connected"),
            ("Communication", "The imparting or exchanging of information"),
            ("Information", "Facts provided or learned about something"),
            ("Technology", "The application of scientific knowledge for practical purposes"),
            ("Interaction", "Reciprocal action or influence"),
            ("Engagement", "The action of engaging or being engaged"),
            ("Digital", "Involving or relating to the use of computer technology"),
            ("Platform", "A designated space for public expression"),
            ("Content", "The information and experiences that are directed toward an end-user"),
            ("Broadcasting", "The distribution of audio or video content to a dispersed audience"),
            ("Feedback", "Information about reactions to a product or a person's performance")
        ],
        "sentences": [
            "Social media has changed how we communicate.",
            "Most people use smartphones for instant messaging.",
            "Networking events are great for finding new jobs.",
            "The connectivity in rural areas is improving.",
            "He said that he spends too much time on his phone.",
            "Effective communication is essential in any relationship.",
            "You can find a lot of information online.",
            "Technology has made the world a smaller place.",
            "The level of interaction between students was high.",
            "We need to increase user engagement on our website.",
            "We live in a digital age where everything is connected.",
            "Instagram is a popular platform for sharing photos.",
            "The content on this website is very informative.",
            "Broadcasting companies are facing new challenges.",
            "We appreciate your feedback on our new product."
        ]
    },
    18: { # Relationships & Family
        "grammar": [
            ("I (get on) ________ well with my brother.", "get on"),
            ("She (look after) ________ her younger sister.", "looks after"),
            ("They (break up) ________ after three years.", "broke up"),
            ("We (grow up) ________ in a small village.", "grew up"),
            ("He (take after) ________ his father.", "takes after"),
            ("She (bring up) ________ by her grandparents.", "was brought up"),
            ("They (fall out) ________ over something silly.", "fell out"),
            ("I (look up to) ________ my older brother.", "look up to"),
            ("He (count on) ________ his friends for support.", "counts on"),
            ("We (keep in touch) ________ by email.", "keep in touch"),
            ("She (put up with) ________ his bad habits.", "puts up with"),
            ("They (get together) ________ every Christmas.", "get together"),
            ("I (come from) ________ a large family.", "come from"),
            ("He (settle down) ________ in a small town.", "settled down"),
            ("She (run away) ________ from home when she was sixteen.", "ran away")
        ],
        "vocab": [
            ("Siblings", "Each of two or more children having one or both parents in common"),
            ("Relative", "A person connected by blood or marriage"),
            ("Acquaintance", "A person one knows slightly"),
            ("Friendship", "The state of being friends"),
            ("Engagement", "An agreement to be married"),
            ("Relationship", "The way in which two or more people are connected"),
            ("Marriage", "The legally or formally recognized union of two people"),
            ("Divorce", "The legal dissolution of a marriage"),
            ("Generations", "All of the people born and living at about the same time"),
            ("Ancestry", "One's family or ethnic descent"),
            ("Household", "A house and its occupants regarded as a unit"),
            ("Upbringing", "The treatment and instruction received by a child"),
            ("Companion", "A person with whom one spends a lot of time"),
            ("Partnership", "The state of being a partner or partners"),
            ("Support", "Give assistance to; be of practical or emotional help to")
        ],
        "sentences": [
            "I have three siblings: two brothers and a sister.",
            "Most of my relatives live in the same city.",
            "He is just an acquaintance, not a close friend.",
            "Their friendship has lasted for over twenty years.",
            "They announced their engagement last night.",
            "They have a very strong relationship.",
            "Marriage is a big commitment.",
            "Her parents decided to get a divorce.",
            "There are three generations living in the same house.",
            "He is proud of his Scottish ancestry.",
            "The household chores are shared between everyone.",
            "She had a very happy upbringing in the countryside.",
            "My dog is a great companion.",
            "The two companies entered into a strategic partnership.",
            "Family support is very important during difficult times."
        ]
    },
    19: { # Global Issues
        "grammar": [
            ("If I (be) ________ you, I would study harder.", "were"),
            ("If I (win) ________ the lottery, I would buy a house.", "won"),
            ("What (you/do) ________ if you lost your job?", "would you do"),
            ("If she (have) ________ more time, she would travel more.", "had"),
            ("They would be happier if they (live) ________ in the country.", "lived"),
            ("If it (rain) ________, we would stay at home.", "rained"),
            ("I would help you if I (can) ________.", "could"),
            ("If he (know) ________ the answer, he would tell us.", "knew"),
            ("We would go for a walk if the weather (be) ________ nicer.", "were"),
            ("If they (invite) ________ me, I would go to the party.", "invited"),
            ("I (buy) ________ that car if I had enough money.", "would buy"),
            ("She (not/be) ________ so tired if she went to bed earlier.", "wouldn't be"),
            ("If we (not/have) ________ to work, we would travel the world.", "didn't have"),
            ("They (get) ________ better grades if they studied more.", "would get"),
            ("What (happen) ________ if we didn't do anything?", "would happen")
        ],
        "vocab": [
            ("Poverty", "The state of being extremely poor"),
            ("Equality", "The state of being equal"),
            ("Unemployment", "The state of not having a job"),
            ("Sustainability", "The ability to be maintained at a certain level"),
            ("Justice", "Just behavior or treatment"),
            ("Environment", "The surroundings or conditions in which a person lives"),
            ("Pollution", "The presence in or introduction into the environment of a substance"),
            ("Climate", "The weather conditions prevailing in an area in general"),
            ("Resource", "A stock or supply of money, materials, staff, and other assets"),
            ("Human Rights", "Rights which are believed to belong justifiably to every person"),
            ("Economy", "The wealth and resources of a country or region"),
            ("Health", "The state of being free from illness or injury"),
            ("Education", "The process of receiving or giving systematic instruction"),
            ("Conflict", "A serious disagreement or argument"),
            ("Migration", "Movement of people to a new area or country")
        ],
        "sentences": [
            "Poverty is still a major problem in many countries.",
            "We must fight for gender equality in the workplace.",
            "The unemployment rate has fallen recently.",
            "Sustainability is the key to our future.",
            "He dedicated his life to the pursuit of justice.",
            "We need to protect the environment for future generations.",
            "Air pollution is a serious problem in big cities.",
            "Climate change is one of the biggest challenges of our time.",
            "We need to manage our natural resources more carefully.",
            "Everyone should have their basic human rights respected.",
            "The global economy is currently in a state of flux.",
            "Access to quality health care is a basic necessity.",
            "Education is the best way to escape poverty.",
            "The conflict in the region has lasted for many years.",
            "Migration has many positive impacts on society."
        ]
    },
    20: { # Personal Finance
        "grammar": [
            ("I enjoy (swim) ________ in the sea.", "swimming"),
            ("She promised (call) ________ me later.", "to call"),
            ("He suggested (go) ________ to the cinema.", "going"),
            ("I decided (buy) ________ a new car.", "to buy"),
            ("Stop (make) ________ so much noise!", "making"),
            ("He managed (finish) ________ the work on time.", "to finish"),
            ("I don't mind (wait) ________ for a few minutes.", "waiting"),
            ("She offered (help) ________ me with my bags.", "to help"),
            ("We keep (try) ________ to improve our service.", "trying"),
            ("They planned (travel) ________ to Europe next summer.", "to travel"),
            ("He avoided (answer) ________ my question.", "answering"),
            ("I hope (see) ________ you soon.", "to see"),
            ("She finished (read) ________ the book last night.", "reading"),
            ("We agreed (meet) ________ at the restaurant.", "to meet"),
            ("I miss (live) ________ in the countryside.", "living")
        ],
        "vocab": [
            ("Savings", "The money one has saved"),
            ("Investment", "The action of investing money for profit"),
            ("Budget", "An estimate of income and expenditure"),
            ("Currency", "A system of money in general use"),
            ("Interest", "Money paid regularly at a particular rate"),
            ("Salary", "A fixed regular payment, typically paid on a monthly basis"),
            ("Expense", "The cost required for something; the money spent on something"),
            ("Income", "Money received, especially on a regular basis, for work"),
            ("Mortgage", "A legal agreement by which a bank lends money"),
            ("Insurance", "A practice or arrangement by which a company provides a guarantee"),
            ("Transaction", "An instance of buying or selling something; a business deal"),
            ("Pension", "A regular payment made during a person's retirement"),
            ("Profit", "A financial gain, especially the difference between the amount earned"),
            ("Debt", "Something, typically money, that is owed or due"),
            ("Credit", "The ability of a customer to obtain goods or services before payment")
        ],
        "sentences": [
            "It's important to have some savings for emergencies.",
            "Investing in stocks can be risky but profitable.",
            "We need to stick to our monthly budget.",
            "What is the local currency in this country?",
            "The bank offers a high interest rate on savings.",
            "His annual salary is around fifty thousand pounds.",
            "We need to reduce our monthly expenses.",
            "Her primary source of income is her job as a teacher.",
            "They took out a mortgage to buy their first home.",
            "Do you have travel insurance for your trip?",
            "You can view all your recent transactions online.",
            "He started contributing to a pension scheme early in his career.",
            "The company made a large profit last year.",
            "He is struggling to pay off his student debts.",
            "I prefer to pay by credit card when I shop online."
        ]
    },
    21: { # Crime & Justice
        "grammar": [
            ("The bank (rob) ________ yesterday.", "was robbed"),
            ("The letters (deliver) ________ this morning.", "were delivered"),
            ("The criminal (arrest) ________ by the police.", "was arrested"),
            ("The painting (steal) ________ last night.", "was stolen"),
            ("When (the house / build) ________?", "was the house built"),
            ("He (accuse) ________ of shoplifting.", "was accused"),
            ("The witness (question) ________ for three hours.", "was questioned"),
            ("A new law (introduce) ________ next month.", "will be introduced"),
            ("The suspects (already/catch) ________.", "have already been caught"),
            ("If he (commit) ________ the crime, he will go to prison.", "commits"),
            ("They (investigate) ________ the case since January.", "have been investigating"),
            ("The evidence (examine) ________ in the lab.", "is being examined"),
            ("I (wish) ________ there was less crime in our city.", "wish"),
            ("He (plead) ________ guilty to the charges.", "pleaded"),
            ("Did you (see) ________ the news about the trial?", "see")
        ],
        "vocab": [
            ("Witness", "A person who sees an event"),
            ("Verdict", "A decision on a disputed issue in a civil or criminal case"),
            ("Evidence", "Information indicating whether a belief is true"),
            ("Burglary", "Illegal entry of a building with intent to commit a crime"),
            ("Punishment", "The infliction of a penalty as retribution"),
            ("Suspect", "A person thought to be guilty of a crime"),
            ("Trial", "A formal examination of evidence by a judge"),
            ("Attorney", "A person, typically a lawyer, who is appointed to act for another"),
            ("Crime", "An action or omission which constitutes an offense"),
            ("Justice", "Just behavior or treatment"),
            ("Offense", "A breach of a law or rule; an illegal act"),
            ("Guilty", "Culpable of or responsible for a specified wrongdoing"),
            ("Innocent", "Not guilty of a crime or offense"),
            ("Sentence", "The punishment assigned to a defendant found guilty"),
            ("Correctional", "Relating to the treatment and rehabilitation of offenders")
        ],
        "sentences": [
            "The witness identified the suspect in court.",
            "The jury reached a verdict after three hours.",
            "There wasn't enough evidence to convict him.",
            "The house was empty during the burglary.",
            "What is the maximum punishment for this crime?",
            "The police are looking for a key suspect in the case.",
            "The murder trial is expected to last for several weeks.",
            "He hired a famous attorney to represent him.",
            "Violent crime has decreased in the area recently.",
            "The criminal justice system needs to be fair for everyone.",
            "It was his first offense, so he received a light sentence.",
            "The jury found the defendant guilty of all charges.",
            "He maintains that he is completely innocent.",
            "The judge handed down a ten-year sentence.",
            "He works as a guard at a local correctional facility."
        ]
    },
    22: { # Inventions & Creators
        "grammar": [
            ("He (already/finish) ________ the book when I arrived.", "had already finished"),
            ("I (not/recognize) ________ him because he had grown a beard.", "didn't recognize"),
            ("She (live) ________ in Paris before she moved to London.", "had lived"),
            ("After he (eat) ________, he felt much better.", "had eaten"),
            ("By the time the police arrived, the thieves (escape) ________.", "had escaped"),
            ("If I (invent) ________ a time machine, I would visit the past.", "invented"),
            ("The prototype (build) ________ by the engineers.", "was built"),
            ("They (develop) ________ this software for two years.", "have been developing"),
            ("I (never/hear) ________ of this inventor before.", "had never heard"),
            ("She (win) ________ several awards for her designs.", "has won"),
            ("We (launch) ________ the new product next spring.", "are launching"),
            ("The patent (expire) ________ last year.", "expired"),
            ("I (wish) ________ I was more creative.", "wish"),
            ("He (inspired) ________ by nature.", "was inspired"),
            ("Did you (read) ________ the biography of Steve Jobs?", "read")
        ],
        "vocab": [
            ("Patent", "A government authority or license"),
            ("Prototype", "A first or preliminary model of something"),
            ("Revolutionary", "Involving or causing a complete or dramatic change"),
            ("Collaborate", "Work jointly on an activity or project"),
            ("Inspirational", "Providing or showing creative or spiritual inspiration"),
            ("Invention", "The action of inventing something"),
            ("Creator", "A person who brings something into existence"),
            ("Discovery", "The act of finding or learning something for the first time"),
            ("Design", "A plan or drawing produced to show the look and function"),
            ("Genius", "Exceptional intellectual or creative power"),
            ("Market", "An area or arena in which commercial dealings are conducted"),
            ("Resource", "A stock or supply of money, materials, staff"),
            ("Technique", "A way of carrying out a particular task"),
            ("Visionary", "Thinking about or planning the future with imagination"),
            ("Entrepreneur", "A person who sets up a business or businesses")
        ],
        "sentences": [
            "She applied for a patent for her new invention.",
            "They built a prototype to test the design.",
            "This revolutionary technology will change everything.",
            "He collaborated with other experts on the project.",
            "Her life story is truly inspirational.",
            "The telephone was a life-changing invention.",
            "He is the creator of several popular video games.",
            "The discovery of fire was a turning point for humanity.",
            "The design of the new car is very sleek and modern.",
            "Einstein was a true scientific genius.",
            "There is a huge market for eco-friendly products.",
            "We need to find more sustainable resources.",
            "She uses a special technique to create her paintings.",
            "Steve Jobs was a visionary leader in the tech industry.",
            "She is a successful entrepreneur who started her own company."
        ]
    },
    23: { # Music & Performance
        "grammar": [
            ("She sings (beautiful) ________.", "beautifully"),
            ("The band played (loud) ________.", "loudly"),
            ("He spoke (extremely) ________ slowly.", "extremely"),
            ("I (hardly) ________ know him.", "hardly"),
            ("The show was (quite) ________ good.", "quite"),
            ("She (practice) ________ the piano for hours.", "practices"),
            ("They (perform) ________ at the opera house tonight.", "are performing"),
            ("If I (can) ________ play an instrument, I would join a band.", "could"),
            ("The song (write) ________ by a famous composer.", "was written"),
            ("He (never/be) ________ to a live concert before.", "has never been"),
            ("We (go) ________ to a musical next week.", "are going"),
            ("The audience (cheer) ________ loudly.", "cheered"),
            ("I (wish) ________ I could sing better.", "wish"),
            ("She (learn) ________ to play the violin since she was five.", "has been learning"),
            ("Did you (enjoy) ________ the performance?", "enjoy")
        ],
        "vocab": [
            ("Composer", "A person who writes music"),
            ("Orchestra", "A large group of instrumentalists"),
            ("Lyrics", "The words of a song"),
            ("Performance", "An act of presenting a play or concert"),
            ("Venue", "The place where something happens"),
            ("Instrument", "An object or device for producing musical sounds"),
            ("Rhythm", "A strong, regular, repeated pattern of movement or sound"),
            ("Melody", "A sequence of single notes that is musically satisfying"),
            ("Symphony", "An elaborate musical composition for full orchestra"),
            ("Concert", "A musical performance given in public"),
            ("Stage", "A raised floor or platform, typically in a theater"),
            ("Audience", "The assembled spectators or listeners"),
            ("Genre", "A category of artistic composition"),
            ("Vocalist", "A singer, typically one who performs with a band"),
            ("Rehearsal", "A practice or trial performance of a play or concert")
        ],
        "sentences": [
            "Mozart is one of the most famous composers in history.",
            "The orchestra played a beautiful symphony.",
            "I really like the lyrics of this song.",
            "Their performance at the concert was amazing.",
            "What is the venue for the music festival?",
            "Can you play any musical instruments?",
            "The drum beat provides the rhythm for the track.",
            "The melody of the song is very catchy.",
            "Beethoven's Ninth Symphony is a masterpiece.",
            "We went to an outdoor rock concert last night.",
            "The actors are waiting for their cue backstage.",
            "The audience gave the performers a standing ovation.",
            "Jazz is my favorite genre of music.",
            "The lead vocalist has a very powerful voice.",
            "We have a final rehearsal before the opening night."
        ]
    },
    24: { # Future Trends
        "grammar": [
            ("This time tomorrow, I (fly) ________ to New York.", "will be flying"),
            ("Don't call me at 8, I (watch) ________ the match.", "will be watching"),
            ("They (work) ________ all day on Saturday.", "will be working"),
            ("In ten years, everyone (use) ________ electric cars.", "will be using"),
            ("Will you (stay) ________ with us next week?", "be staying"),
            ("The world (change) ________ a lot in the future.", "will change"),
            ("Technology (continue) ________ to evolve.", "will continue"),
            ("If we (not/act) ________ now, it will be too late.", "don't act"),
            ("Scientists (predict) ________ that the population will grow.", "predict"),
            ("I (think) ________ AI will become very important.", "think"),
            ("We (live) ________ in smart homes soon.", "will be living"),
            ("The environment (improve) ________ if we use less plastic.", "will improve"),
            ("I (hope) ________ for a better future.", "hope"),
            ("He (travel) ________ to Mars one day.", "will travel"),
            ("Did you (see) ________ the latest trends?", "see")
        ],
        "vocab": [
            ("Projection", "An estimate or forecast of a future situation"),
            ("Demographics", "Statistical data relating to the population"),
            ("Automation", "The use of largely automatic equipment"),
            ("Virtual Reality", "Computer-generated simulation of a 3D image"),
            ("Digitalization", "The conversion of text, pictures, or sound into a digital form"),
            ("Innovation", "A new method, idea, or product"),
            ("Sustainability", "The ability to be maintained at a certain level"),
            ("Globalization", "The process by which businesses or other organizations develop international influence"),
            ("Urbanization", "The process of making an area more urban"),
            ("Trend", "A general direction in which something is developing or changing"),
            ("Prediction", "A thing predicted; a forecast"),
            ("Transformation", "A thorough or dramatic change in form or appearance"),
            ("Impact", "The action of one object coming forcibly into contact with another"),
            ("Evolution", "The gradual development of something"),
            ("Perspective", "A particular attitude toward or way regarding something")
        ],
        "sentences": [
            "Projected growth for next year is around 3%.",
            "The demographics of the city are changing rapidly.",
            "Automation is replacing many manual jobs.",
            "Virtual reality is becoming more realistic every year.",
            "Digitalization has transformed how we store information.",
            "Technological innovation is essential for economic growth.",
            "We need to move toward a more sustainable lifestyle.",
            "Globalization has connected people from all over the world.",
            "Urbanization is leading to larger and more crowded cities.",
            "What do you think will be the next big trend in fashion?",
            "It is difficult to make accurate predictions about the future.",
            "The digital transformation is affecting all industries.",
            "The impact of climate change is becoming more evident.",
            "The evolution of the smartphone has been incredible.",
            "We need to gain a new perspective on this problem."
        ]
    },
    25: { # Leisure & Hobbies
        "grammar": [
            ("I (prefer/read) ________ to watching TV.", "prefer reading"),
            ("I (would rather / stay) ________ at home tonight.", "would rather stay"),
            ("She (prefers/tea) ________ to coffee.", "prefers tea"),
            ("Would you rather (go) ________ by train or by bus?", "go"),
            ("He (prefers/not/go) ________ out today.", "prefers not to go"),
            ("I (enjoy) ________ going for walks in the park.", "enjoy"),
            ("They (spend) ________ their weekends at the beach.", "spend"),
            ("We (go) ________ to the cinema once a week.", "go"),
            ("He (prefer) ________ playing video games to watching TV.", "prefers"),
            ("I (usually/stay) ________ at home on Friday nights.", "usually stay"),
            ("They (travel) ________ a lot during their holidays.", "travel"),
            ("If I (have) ________ more free time, I would learn to paint.", "had"),
            ("She (join) ________ a local choir recently.", "has joined"),
            ("We (meet) ________ our friends at the cafe later.", "are meeting"),
            ("I (not/have) ________ many hobbies at the moment.", "don't have")
        ],
        "vocab": [
            ("Pastime", "An activity done regularly for enjoyment"),
            ("Recreation", "Activity done for enjoyment when one is not working"),
            ("Enthusiast", "A person who is highly interested in a particular activity"),
            ("Skill", "The ability to do something well"),
            ("Relaxation", "The state of being free from tension and anxiety"),
            ("Hobby", "An activity done regularly in one's leisure time"),
            ("Entertainment", "The action of providing or being provided with amusement"),
            ("Amusement", "The state or experience of finding something funny"),
            ("Activity", "A thing that a person or group does or has done"),
            ("Interest", "The feeling of wanting to know or learn about something"),
            ("Socializing", "The activity of spending time with others for pleasure"),
            ("Excursion", "A short journey or trip, especially one taken as a leisure activity"),
            ("Facility", "A place, amenity, or piece of equipment provided for a particular purpose"),
            ("Membership", "The fact of being a member of a group"),
            ("Festival", "A day or period of celebration")
        ],
        "sentences": [
            "Photography is my favorite pastime.",
            "The park provides many opportunities for recreation.",
            "He is a classic car enthusiast.",
            "You need to develop your computer skills.",
            "Yoga is great for relaxation and stress relief.",
            "My main hobby is reading historical novels.",
            "I find gardening to be a great form of relaxation.",
            "There is plenty of entertainment in the city center.",
            "The park offers many recreation facilities for children.",
            "We went to the amusement park last Saturday.",
            "Chess is a popular pastime in many countries.",
            "What kind of outdoor activities do you enjoy?",
            "I have a keen interest in photography.",
            "Socializing with friends is a great way to unwind.",
            "The school organized an excursion to the museum."
        ]
    },
    26: { # The Animal Kingdom
        "grammar": [
            ("It (might/rain) ________ later, so take an umbrella.", "might rain"),
            ("She (may/be) ________ at home, but I'm not sure.", "may be"),
            ("That (could/be) ________ true, but I doubt it.", "could be"),
            ("They (might not / come) ________ to the party.", "might not come"),
            ("It (may/take) ________ longer than expected.", "may take"),
            ("Animals (must/adapt) ________ to their environment.", "must adapt"),
            ("You (should/not/feed) ________ the wild animals.", "should not feed"),
            ("If we (not/protect) ________ them, they will go extinct.", "don't protect"),
            ("They (study) ________ the behavior of lions for years.", "have been studying"),
            ("A new species (discover) ________ in the Amazon.", "was discovered"),
            ("We (visit) ________ the safari park tomorrow.", "are going to visit"),
            ("The tiger (hunt) ________ for its prey.", "is hunting"),
            ("I (wish) ________ I could see a whale in real life.", "wish"),
            ("He (be) ________ a veterinarian for ten years.", "has been"),
            ("Did you (know) ________ that some birds can't fly?", "know")
        ],
        "vocab": [
            ("Migration", "Seasonal movement of animals from one region to another"),
            ("Camouflage", "The use of materials or coloration for concealment"),
            ("Domesticated", "Tamed and kept as a pet or on a farm"),
            ("Wildlife", "Wild animals collectively"),
            ("Ecosystem", "A biological community of interacting organisms"),
            ("Predator", "An animal that naturally preys on others"),
            ("Habitat", "The natural home or environment of an animal"),
            ("Species", "A group of living organisms consisting of similar individuals"),
            ("Extinct", "Having no living members; no longer in existence"),
            ("Conservation", "The protection of plants and animals"),
            ("Mammal", "A warm-blooded vertebrate animal"),
            ("Reptile", "A vertebrate animal of a class that includes snakes"),
            ("Amphibian", "A cold-blooded vertebrate animal of a class that comprises frogs"),
            ("Invertebrate", "An animal lacking a backbone"),
            ("Biodiversity", "The variety of life in the world or in a particular habitat")
        ],
        "sentences": [
            "Birds use migration to find warmer climates in winter.",
            "The chameleon uses camouflage to hide from predators.",
            "Dogs were one of the first domesticated animals.",
            "We saw a lot of wildlife on our safari trip.",
            "Every species plays a role in the ecosystem.",
            "The lion is a powerful predator in the savanna.",
            "Many animals are losing their natural habitat due to deforestation.",
            "Scientists have identified a new species of butterfly.",
            "The dodo became extinct in the 17th century.",
            "Wildlife conservation is vital for maintaining biodiversity.",
            "Dolphins are highly intelligent marine mammals.",
            "Crocodiles and snakes are both types of reptiles.",
            "Frogs are common amphibians found in wetlands.",
            "Insects are the most diverse group of invertebrates.",
            "Protecting biodiversity is essential for a healthy planet."
        ]
    },
    27: { # Geography & Landmarks
        "grammar": [
            ("The cat is (on) ________ the table.", "on"),
            ("He walked (through) ________ the tunnel.", "through"),
            ("The bridge goes (over) ________ the river.", "over"),
            ("She sat (next to) ________ me in the cinema.", "next to"),
            ("They are driving (towards) ________ the mountains.", "towards"),
            ("Paris is (in) ________ France.", "in"),
            ("The keys are (inside) ________ the drawer.", "inside"),
            ("He is standing (behind) ________ the tree.", "behind"),
            ("The shop is (opposite) ________ the bank.", "opposite"),
            ("We are flying (above) ________ the clouds.", "above"),
            ("The ball went (between) ________ his legs.", "between"),
            ("She lives (near) ________ the park.", "near"),
            ("Go (past) ________ the post office.", "past"),
            ("The plane is (at) ________ the airport.", "at"),
            ("Look (at) ________ that beautiful sunset.", "at")
        ],
        "vocab": [
            ("Peninsula", "A piece of land almost surrounded by water"),
            ("Archipelago", "A group of islands"),
            ("Mountainous", "Having many mountains"),
            ("Canyon", "A deep gorge, typically one with a river flowing through it"),
            ("Horizon", "The line at which the earth's surface and the sky appear to meet"),
            ("Continent", "Any of the world's main continuous expanses of land"),
            ("Equator", "An imaginary line drawn around the earth equally distant from both poles"),
            ("Plateau", "An area of relatively level high ground"),
            ("Valley", "A low area of land between hills or mountains"),
            ("Glacier", "A slowly moving mass or river of ice"),
            ("Desert", "A barren area of landscape where little precipitation occurs"),
            ("Rainforest", "A luxuriant, dense forest rich in biodiversity"),
            ("Landmark", "An object or feature of a landscape that is easily seen"),
            ("Monument", "A statue, building, or other structure, erected to commemorate a notable person"),
            ("Heritage", "Valued objects and qualities such as cultural traditions")
        ],
        "sentences": [
            "Italy is a large peninsula in southern Europe.",
            "The Philippines is an archipelago of over 7,000 islands.",
            "The northern part of the country is very mountainous.",
            "The Grand Canyon is one of the most famous landmarks in the USA.",
            "The sun disappeared below the horizon.",
            "Asia is the largest continent in the world.",
            "The weather is very hot and humid near the equator.",
            "The Tibetan Plateau is often called the 'Roof of the World'.",
            "The village is located in a beautiful green valley.",
            "Global warming is causing glaciers to melt rapidly.",
            "The Sahara is the largest hot desert in the world.",
            "The Amazon rainforest is home to millions of species.",
            "The Eiffel Tower is a famous landmark in Paris.",
            "The statue was erected as a monument to the fallen soldiers.",
            "The city is proud of its rich cultural heritage."
        ]
    },
    28: { # Fashion & Design
        "grammar": [
            ("She bought a (beautiful/long/red) ________ dress.", "beautiful long red"),
            ("He has a (new/shiny/black) ________ car.", "shiny new black"),
            ("It's a (small/old/wooden) ________ box.", "small old wooden"),
            ("I love your (expensive/Italian/leather) ________ shoes.", "expensive Italian leather"),
            ("She is wearing a (large/green/cotton) ________ shirt.", "large green cotton"),
            ("These (fashionable/French/silk) ________ scarves are lovely.", "fashionable French silk"),
            ("He lives in a (modern/glass/tall) ________ building.", "tall modern glass"),
            ("I found an (interesting/old/metal) ________ coin.", "interesting old metal"),
            ("She has (short/curly/brown) ________ hair.", "short curly brown"),
            ("We have a (comfortable/new/grey) ________ sofa.", "comfortable new grey"),
            ("I bought a (useful/small/plastic) ________ tool.", "useful small plastic"),
            ("He is a (talented/young/British) ________ designer.", "talented young British"),
            ("It was a (scary/old/ghost) ________ story.", "scary old ghost"),
            ("She gave me a (delicious/sweet/apple) ________ pie.", "delicious sweet apple"),
            ("I like that (bright/yellow/summer) ________ flower.", "bright yellow summer")
        ],
        "vocab": [
            ("Trendy", "Very fashionable or up to date"),
            ("Style", "A particular design or appearance"),
            ("Fabric", "Cloth or other material produced by weaving"),
            ("Wardrobe", "A person's entire collection of clothes"),
            ("Accessories", "Things which can be added to an outfit to make it more attractive"),
            ("Tailor", "A person whose occupation is making fitted clothes"),
            ("Design", "A plan or drawing produced to show the look and function"),
            ("Collection", "A group of things or people"),
            ("Runway", "A raised floor or platform used by models to display clothes"),
            ("Pattern", "A repeated decorative design"),
            ("Texture", "The feel, appearance, or consistency of a surface or a substance"),
            ("Elegant", "Pleasingly graceful and stylish in appearance or manner"),
            ("Casual", "Relaxed and unconcerned; not formal"),
            ("Formal", "Done in accordance with convention or etiquette"),
            ("Vintage", "Denoting something from the past of high quality")
        ],
        "sentences": [
            "She always wears very trendy clothes.",
            "This style of architecture is typical of the region.",
            "Silk is a very soft and expensive fabric.",
            "I need to update my summer wardrobe.",
            "She chose some beautiful accessories to match her dress.",
            "He went to a tailor to have a suit made for the wedding.",
            "The design of the new building is very minimalist.",
            "The designer presented her latest autumn collection.",
            "The models walked down the runway in the latest fashions.",
            "I love the floral pattern on your new shirt.",
            "The fabric has a very smooth and soft texture.",
            "She looked very elegant in her long evening gown.",
            "Jeans and a t-shirt are perfect for a casual lunch.",
            "A tuxedo is required for the formal dinner.",
            "She found a beautiful vintage jacket at the flea market."
        ]
    },
    29: { # Work-Life Balance
        "grammar": [
            ("I wish I (have) ________ more free time.", "had"),
            ("If only I (not/have to) ________ work tomorrow.", "didn't have to"),
            ("I wish it (stop) ________ raining.", "would stop"),
            ("If only she (be) ________ here now.", "were"),
            ("I wish I (can/speak) ________ Japanese.", "could speak"),
            ("If only I (know) ________ how to solve this problem.", "knew"),
            ("I wish you (not/be) ________ so busy all the time.", "weren't"),
            ("If only we (have) ________ enough money to travel.", "had"),
            ("I wish I (live) ________ in a warmer country.", "lived"),
            ("If only he (call) ________ me back.", "would call"),
            ("I wish I (not/have) ________ so much homework.", "didn't have"),
            ("If only I (could/be) ________ there with you.", "could be"),
            ("I wish she (tell) ________ me the truth.", "would tell"),
            ("If only I (be) ________ taller.", "were"),
            ("I wish it (be) ________ the weekend already.", "were")
        ],
        "vocab": [
            ("Overtime", "Time worked in addition to one's normal working hours"),
            ("Flexibility", "The quality of bending easily without breaking"),
            ("Burnout", "Physical or mental collapse caused by overwork"),
            ("Productivity", "The state or quality of being productive"),
            ("Well-being", "The state of being comfortable, healthy, or happy"),
            ("Boundary", "A limit or space that separates two things"),
            ("Stress", "A state of mental or emotional strain or tension"),
            ("Balance", "An even distribution of weight enabling someone or something to remain upright"),
            ("Prioritize", "Designate or treat as being very or most important"),
            ("Schedule", "A plan for carrying out a process or procedure"),
            ("Efficiency", "The state or quality of being efficient"),
            ("Leisure", "Time when one is not working or occupied"),
            ("Fulfillment", "Satisfaction or happiness as a result of fully developing one's abilities"),
            ("Burnout", "Physical or mental collapse caused by overwork or stress"),
            ("Resilience", "The capacity to recover quickly from difficulties")
        ],
        "sentences": [
            "He had to work a lot of overtime last month.",
            "Job flexibility is very important to many employees.",
            "Working too much can lead to burnout.",
            "The new software has increased our productivity.",
            "Employee well-being is a priority for the company.",
            "It's important to set clear boundaries between work and home.",
            "Too much stress at work can affect your health.",
            "Finding a good work-life balance is essential for happiness.",
            "You need to prioritize your tasks to manage your time better.",
            "She has a very busy schedule this week.",
            "Improving efficiency can lead to a shorter working day.",
            "We should spend our leisure time doing things we enjoy.",
            "He finds a lot of fulfillment in his volunteer work.",
            "Taking regular breaks can help prevent burnout.",
            "Resilience is an important quality for managing work pressure."
        ]
    },
    30: { # Success & Achievement
        "grammar": [
            ("By next year, I (finish) ________ my course.", "will have finished"),
            ("She (work) ________ here for twenty years by December.", "will have worked"),
            ("I (read) ________ the whole book by tonight.", "will have read"),
            ("By the time you arrive, I (cook) ________ dinner.", "will have cooked"),
            ("Will you (complete) ________ the project by Friday?", "have completed"),
            ("He (be) ________ in London for two days when we meet.", "will have been"),
            ("By the end of the month, they (sell) ________ all the tickets.", "will have sold"),
            ("I (save) ________ enough money for a car by next summer.", "will have saved"),
            ("She (write) ________ her report by the deadline.", "will have written"),
            ("By the time the show starts, the audience (take) ________ their seats.", "will have taken"),
            ("Will they (reach) ________ their target by then?", "have reached"),
            ("He (travel) ________ around the world for six months by next month.", "will have been traveling"),
            ("By next Sunday, we (live) ________ in our new house for a week.", "will have been living"),
            ("She (graduate) ________ from university by this time next year.", "will have graduated"),
            ("I (paint) ________ the whole room by the time you get home.", "will have painted")
        ],
        "vocab": [
            ("Accomplishment", "Something that has been achieved successfully"),
            ("Ambition", "A strong desire to do or achieve something"),
            ("Perseverance", "Persistence in doing something despite difficulty"),
            ("Recognition", "Acknowledgment of something's existence or validity"),
            ("Milestone", "An action or event marking a significant stage in development"),
            ("Achievement", "A thing done successfully, typically by effort"),
            ("Goal", "The object of a person's ambition or effort"),
            ("Excellence", "The quality of being outstanding or extremely good"),
            ("Determination", "Firmness of purpose; resoluteness"),
            ("Success", "The accomplishment of an aim or purpose"),
            ("Inspiration", "The process of being mentally stimulated to do or feel something"),
            ("Potential", "Having or showing the capacity to become or develop into something"),
            ("Motivation", "The reason or reasons one has for acting or behaving in a particular way"),
            ("Triumph", "A great victory or achievement"),
            ("Resilience", "The capacity to recover quickly from difficulties")
        ],
        "sentences": [
            "Winning the award was a great accomplishment.",
            "She has the ambition to become the CEO.",
            "Perseverance is key to overcoming challenges.",
            "He received recognition for his hard work.",
            "Graduating from university is a major milestone.",
            "Her achievement was celebrated by the whole team.",
            "He set himself a goal to run a marathon this year.",
            "The company is committed to achieving excellence in its products.",
            "With hard work and determination, anything is possible.",
            "Success doesn't happen overnight; it takes time and effort.",
            "Her story is a great inspiration to many young people.",
            "He has the potential to be a great leader one day.",
            "What is your main motivation for learning English?",
            "The team's victory was a great triumph after a difficult season.",
            "She showed great resilience after her business failed."
        ]
    },

    31: { # Urban Living vs Rural Life
        "grammar": [
            ("City life (be) ________ more exciting than rural life.", "is"),
            ("I prefer (live) ________ in a big city.", "living"),
            ("Living in the country is (quiet) ________ than in the city.", "quieter"),
            ("Public transport (be) ________ very convenient here.", "is"),
            ("I (not/used to) ________ the noise yet.", "am not used to"),
            ("She (enjoy) ________ the fresh air in the village.", "enjoys"),
            ("There (be) ________ fewer shops in rural areas.", "are"),
            ("If I (have) ________ enough money, I would move to the country.", "had"),
            ("I (visit) ________ my grandparents in the village next week.", "am visiting"),
            ("The cost of living is (high) ________ in the city.", "higher")
        ],
        "vocab": [
            ("Metropolis", "A very large and busy city"),
            ("Skyscraper", "A very tall building in a city"),
            ("Commuter", "Someone who travels to work daily"),
            ("Isolation", "The state of being alone or far from others"),
            ("Pollution", "Harmful substances in the air or water"),
            ("Congestion", "Crowded with traffic or people"),
            ("Landscape", "A large area of countryside"),
            ("Livestock", "Animals kept on a farm"),
            ("Harvest", "The process of gathering crops"),
            ("Village", "A small group of houses in a rural area")
        ],
        "sentences": [
            "Tokyo is a massive metropolis with millions of people.",
            "The skyscrapers in New York are truly impressive.",
            "Many commuters spend hours on trains every day.",
            "Living in a remote area can lead to a sense of isolation.",
            "Pollution levels are often lower in rural regions.",
            "Traffic congestion is a major problem in modern cities.",
            "The English landscape is famous for its green hills.",
            "Farmers take care of their livestock throughout the year.",
            "The autumn harvest is a busy time for the local community.",
            "She lives in a charming little village near the coast."
        ]
    },
    32: { # The History of English
        "grammar": [
            ("English (change) ________ a lot over the centuries.", "has changed"),
            ("It (speak) ________ by millions of people today.", "is spoken"),
            ("Did you know that many words (come) ________ from French?", "come"),
            ("Shakespeare (write) ________ many famous plays.", "wrote"),
            ("If English (not/exist) ________, the world would be different.", "didn't exist"),
            ("I (study) ________ the origins of words recently.", "have been studying"),
            ("The language (evolve) ________ since the middle ages.", "has evolved"),
            ("English (borrow) ________ words from many languages.", "borrows"),
            ("It (become) ________ the global lingua franca.", "has become"),
            ("How many people (use) ________ English as a second language?", "use")
        ],
        "vocab": [
            ("Etymology", "The study of the origin of words"),
            ("Linguistics", "The scientific study of language"),
            ("Dialect", "A particular form of a language in a region"),
            ("Grammar", "The system and structure of a language"),
            ("Vocabulary", "The body of words used in a language"),
            ("Evolution", "The gradual development of something"),
            ("Influence", "The capacity to have an effect on something"),
            ("Alphabet", "A set of letters used to write a language"),
            ("Manuscript", "A document written by hand"),
            ("Literature", "Written works of artistic merit")
        ],
        "sentences": [
            "Etymology helps us understand the history of words.",
            "Linguistics is a fascinating field of study.",
            "There are many different dialects of English in the UK.",
            "Learning grammar is essential for clear communication.",
            "Expanding your vocabulary takes time and practice.",
            "The evolution of language is a continuous process.",
            "Latin had a significant influence on the English language.",
            "The English alphabet consists of twenty-six letters.",
            "Ancient manuscripts tell us about how people used to speak.",
            "English literature is rich and diverse."
        ]
    },

    33: { # Extreme Sports and Adventure
        "grammar": [
            ("I (study) ________ extreme sports adventure lately.", "have been studying"),
            ("She (not/know) ________ much about extreme sports adventure yet.", "doesn't know"),
            ("We (learn) ________ about extreme sports adventure in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master extreme sports adventure, you must practice.", "want"),
            ("He (be) ________ interested in extreme sports adventure since he was a child.", "has been"),
            ("They (discuss) ________ extreme sports adventure when I arrived.", "were discussing"),
            ("I think extreme sports adventure (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of extreme sports adventure?", "heard"),
            ("She (usually/read) ________ about extreme sports adventure on weekends.", "usually reads"),
            ("We (visit) ________ a museum about extreme sports adventure tomorrow.", "are visiting")
        ],
        "vocab": [
            ("extreme sports adventure specialist", "An expert in the field of extreme sports adventure"),
            ("Fundamentals", "The basic principles of extreme sports adventure"),
            ("Advanced", "A high level of knowledge in extreme sports adventure"),
            ("Innovation", "A new idea or method in extreme sports adventure"),
            ("Research", "The systematic investigation into extreme sports adventure"),
            ("Theory", "A system of ideas intended to explain extreme sports adventure"),
            ("Practice", "The application of extreme sports adventure in real life"),
            ("Challenge", "A difficult task in the context of extreme sports adventure"),
            ("Solution", "A way to solve a problem related to extreme sports adventure"),
            ("Impact", "The effect of extreme sports adventure on society")
        ],
        "sentences": [
            "Learning about extreme sports adventure is a great way to expand your horizons.",
            "The impact of extreme sports adventure on our daily lives is significant.",
            "Many people find extreme sports adventure to be a challenging but rewarding subject.",
            "He has been a specialist in extreme sports adventure for over ten years.",
            "We are going to explore the fundamentals of extreme sports adventure in this unit.",
            "The research on extreme sports adventure has led to many new discoveries.",
            "There are many different theories about how extreme sports adventure works.",
            "Putting the theory of extreme sports adventure into practice can be difficult.",
            "We face many challenges when studying the complexities of extreme sports adventure.",
            "Finding a solution to this extreme sports adventure problem is our main priority."
        ]
    },

    34: { # Psychology and Human Behavior
        "grammar": [
            ("I (study) ________ psychology human behavior lately.", "have been studying"),
            ("She (not/know) ________ much about psychology human behavior yet.", "doesn't know"),
            ("We (learn) ________ about psychology human behavior in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master psychology human behavior, you must practice.", "want"),
            ("He (be) ________ interested in psychology human behavior since he was a child.", "has been"),
            ("They (discuss) ________ psychology human behavior when I arrived.", "were discussing"),
            ("I think psychology human behavior (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of psychology human behavior?", "heard"),
            ("She (usually/read) ________ about psychology human behavior on weekends.", "usually reads"),
            ("We (visit) ________ a museum about psychology human behavior tomorrow.", "are visiting")
        ],
        "vocab": [
            ("psychology human behavior specialist", "An expert in the field of psychology human behavior"),
            ("Fundamentals", "The basic principles of psychology human behavior"),
            ("Advanced", "A high level of knowledge in psychology human behavior"),
            ("Innovation", "A new idea or method in psychology human behavior"),
            ("Research", "The systematic investigation into psychology human behavior"),
            ("Theory", "A system of ideas intended to explain psychology human behavior"),
            ("Practice", "The application of psychology human behavior in real life"),
            ("Challenge", "A difficult task in the context of psychology human behavior"),
            ("Solution", "A way to solve a problem related to psychology human behavior"),
            ("Impact", "The effect of psychology human behavior on society")
        ],
        "sentences": [
            "Learning about psychology human behavior is a great way to expand your horizons.",
            "The impact of psychology human behavior on our daily lives is significant.",
            "Many people find psychology human behavior to be a challenging but rewarding subject.",
            "He has been a specialist in psychology human behavior for over ten years.",
            "We are going to explore the fundamentals of psychology human behavior in this unit.",
            "The research on psychology human behavior has led to many new discoveries.",
            "There are many different theories about how psychology human behavior works.",
            "Putting the theory of psychology human behavior into practice can be difficult.",
            "We face many challenges when studying the complexities of psychology human behavior.",
            "Finding a solution to this psychology human behavior problem is our main priority."
        ]
    },

    35: { # Space Exploration
        "grammar": [
            ("I (study) ________ space exploration lately.", "have been studying"),
            ("She (not/know) ________ much about space exploration yet.", "doesn't know"),
            ("We (learn) ________ about space exploration in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master space exploration, you must practice.", "want"),
            ("He (be) ________ interested in space exploration since he was a child.", "has been"),
            ("They (discuss) ________ space exploration when I arrived.", "were discussing"),
            ("I think space exploration (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of space exploration?", "heard"),
            ("She (usually/read) ________ about space exploration on weekends.", "usually reads"),
            ("We (visit) ________ a museum about space exploration tomorrow.", "are visiting")
        ],
        "vocab": [
            ("space exploration specialist", "An expert in the field of space exploration"),
            ("Fundamentals", "The basic principles of space exploration"),
            ("Advanced", "A high level of knowledge in space exploration"),
            ("Innovation", "A new idea or method in space exploration"),
            ("Research", "The systematic investigation into space exploration"),
            ("Theory", "A system of ideas intended to explain space exploration"),
            ("Practice", "The application of space exploration in real life"),
            ("Challenge", "A difficult task in the context of space exploration"),
            ("Solution", "A way to solve a problem related to space exploration"),
            ("Impact", "The effect of space exploration on society")
        ],
        "sentences": [
            "Learning about space exploration is a great way to expand your horizons.",
            "The impact of space exploration on our daily lives is significant.",
            "Many people find space exploration to be a challenging but rewarding subject.",
            "He has been a specialist in space exploration for over ten years.",
            "We are going to explore the fundamentals of space exploration in this unit.",
            "The research on space exploration has led to many new discoveries.",
            "There are many different theories about how space exploration works.",
            "Putting the theory of space exploration into practice can be difficult.",
            "We face many challenges when studying the complexities of space exploration.",
            "Finding a solution to this space exploration problem is our main priority."
        ]
    },

    36: { # Climate Change and Solutions
        "grammar": [
            ("I (study) ________ climate change solutions lately.", "have been studying"),
            ("She (not/know) ________ much about climate change solutions yet.", "doesn't know"),
            ("We (learn) ________ about climate change solutions in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master climate change solutions, you must practice.", "want"),
            ("He (be) ________ interested in climate change solutions since he was a child.", "has been"),
            ("They (discuss) ________ climate change solutions when I arrived.", "were discussing"),
            ("I think climate change solutions (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of climate change solutions?", "heard"),
            ("She (usually/read) ________ about climate change solutions on weekends.", "usually reads"),
            ("We (visit) ________ a museum about climate change solutions tomorrow.", "are visiting")
        ],
        "vocab": [
            ("climate change solutions specialist", "An expert in the field of climate change solutions"),
            ("Fundamentals", "The basic principles of climate change solutions"),
            ("Advanced", "A high level of knowledge in climate change solutions"),
            ("Innovation", "A new idea or method in climate change solutions"),
            ("Research", "The systematic investigation into climate change solutions"),
            ("Theory", "A system of ideas intended to explain climate change solutions"),
            ("Practice", "The application of climate change solutions in real life"),
            ("Challenge", "A difficult task in the context of climate change solutions"),
            ("Solution", "A way to solve a problem related to climate change solutions"),
            ("Impact", "The effect of climate change solutions on society")
        ],
        "sentences": [
            "Learning about climate change solutions is a great way to expand your horizons.",
            "The impact of climate change solutions on our daily lives is significant.",
            "Many people find climate change solutions to be a challenging but rewarding subject.",
            "He has been a specialist in climate change solutions for over ten years.",
            "We are going to explore the fundamentals of climate change solutions in this unit.",
            "The research on climate change solutions has led to many new discoveries.",
            "There are many different theories about how climate change solutions works.",
            "Putting the theory of climate change solutions into practice can be difficult.",
            "We face many challenges when studying the complexities of climate change solutions.",
            "Finding a solution to this climate change solutions problem is our main priority."
        ]
    },

    37: { # Music Genres and History
        "grammar": [
            ("I (study) ________ music genres history lately.", "have been studying"),
            ("She (not/know) ________ much about music genres history yet.", "doesn't know"),
            ("We (learn) ________ about music genres history in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master music genres history, you must practice.", "want"),
            ("He (be) ________ interested in music genres history since he was a child.", "has been"),
            ("They (discuss) ________ music genres history when I arrived.", "were discussing"),
            ("I think music genres history (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of music genres history?", "heard"),
            ("She (usually/read) ________ about music genres history on weekends.", "usually reads"),
            ("We (visit) ________ a museum about music genres history tomorrow.", "are visiting")
        ],
        "vocab": [
            ("music genres history specialist", "An expert in the field of music genres history"),
            ("Fundamentals", "The basic principles of music genres history"),
            ("Advanced", "A high level of knowledge in music genres history"),
            ("Innovation", "A new idea or method in music genres history"),
            ("Research", "The systematic investigation into music genres history"),
            ("Theory", "A system of ideas intended to explain music genres history"),
            ("Practice", "The application of music genres history in real life"),
            ("Challenge", "A difficult task in the context of music genres history"),
            ("Solution", "A way to solve a problem related to music genres history"),
            ("Impact", "The effect of music genres history on society")
        ],
        "sentences": [
            "Learning about music genres history is a great way to expand your horizons.",
            "The impact of music genres history on our daily lives is significant.",
            "Many people find music genres history to be a challenging but rewarding subject.",
            "He has been a specialist in music genres history for over ten years.",
            "We are going to explore the fundamentals of music genres history in this unit.",
            "The research on music genres history has led to many new discoveries.",
            "There are many different theories about how music genres history works.",
            "Putting the theory of music genres history into practice can be difficult.",
            "We face many challenges when studying the complexities of music genres history.",
            "Finding a solution to this music genres history problem is our main priority."
        ]
    },

    38: { # Cinema and Theater
        "grammar": [
            ("I (study) ________ cinema theater lately.", "have been studying"),
            ("She (not/know) ________ much about cinema theater yet.", "doesn't know"),
            ("We (learn) ________ about cinema theater in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master cinema theater, you must practice.", "want"),
            ("He (be) ________ interested in cinema theater since he was a child.", "has been"),
            ("They (discuss) ________ cinema theater when I arrived.", "were discussing"),
            ("I think cinema theater (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of cinema theater?", "heard"),
            ("She (usually/read) ________ about cinema theater on weekends.", "usually reads"),
            ("We (visit) ________ a museum about cinema theater tomorrow.", "are visiting")
        ],
        "vocab": [
            ("cinema theater specialist", "An expert in the field of cinema theater"),
            ("Fundamentals", "The basic principles of cinema theater"),
            ("Advanced", "A high level of knowledge in cinema theater"),
            ("Innovation", "A new idea or method in cinema theater"),
            ("Research", "The systematic investigation into cinema theater"),
            ("Theory", "A system of ideas intended to explain cinema theater"),
            ("Practice", "The application of cinema theater in real life"),
            ("Challenge", "A difficult task in the context of cinema theater"),
            ("Solution", "A way to solve a problem related to cinema theater"),
            ("Impact", "The effect of cinema theater on society")
        ],
        "sentences": [
            "Learning about cinema theater is a great way to expand your horizons.",
            "The impact of cinema theater on our daily lives is significant.",
            "Many people find cinema theater to be a challenging but rewarding subject.",
            "He has been a specialist in cinema theater for over ten years.",
            "We are going to explore the fundamentals of cinema theater in this unit.",
            "The research on cinema theater has led to many new discoveries.",
            "There are many different theories about how cinema theater works.",
            "Putting the theory of cinema theater into practice can be difficult.",
            "We face many challenges when studying the complexities of cinema theater.",
            "Finding a solution to this cinema theater problem is our main priority."
        ]
    },

    39: { # Cooking and Traditions
        "grammar": [
            ("I (study) ________ cooking traditions lately.", "have been studying"),
            ("She (not/know) ________ much about cooking traditions yet.", "doesn't know"),
            ("We (learn) ________ about cooking traditions in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master cooking traditions, you must practice.", "want"),
            ("He (be) ________ interested in cooking traditions since he was a child.", "has been"),
            ("They (discuss) ________ cooking traditions when I arrived.", "were discussing"),
            ("I think cooking traditions (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of cooking traditions?", "heard"),
            ("She (usually/read) ________ about cooking traditions on weekends.", "usually reads"),
            ("We (visit) ________ a museum about cooking traditions tomorrow.", "are visiting")
        ],
        "vocab": [
            ("cooking traditions specialist", "An expert in the field of cooking traditions"),
            ("Fundamentals", "The basic principles of cooking traditions"),
            ("Advanced", "A high level of knowledge in cooking traditions"),
            ("Innovation", "A new idea or method in cooking traditions"),
            ("Research", "The systematic investigation into cooking traditions"),
            ("Theory", "A system of ideas intended to explain cooking traditions"),
            ("Practice", "The application of cooking traditions in real life"),
            ("Challenge", "A difficult task in the context of cooking traditions"),
            ("Solution", "A way to solve a problem related to cooking traditions"),
            ("Impact", "The effect of cooking traditions on society")
        ],
        "sentences": [
            "Learning about cooking traditions is a great way to expand your horizons.",
            "The impact of cooking traditions on our daily lives is significant.",
            "Many people find cooking traditions to be a challenging but rewarding subject.",
            "He has been a specialist in cooking traditions for over ten years.",
            "We are going to explore the fundamentals of cooking traditions in this unit.",
            "The research on cooking traditions has led to many new discoveries.",
            "There are many different theories about how cooking traditions works.",
            "Putting the theory of cooking traditions into practice can be difficult.",
            "We face many challenges when studying the complexities of cooking traditions.",
            "Finding a solution to this cooking traditions problem is our main priority."
        ]
    },

    40: { # Festivals and Celebrations
        "grammar": [
            ("I (study) ________ festivals celebrations lately.", "have been studying"),
            ("She (not/know) ________ much about festivals celebrations yet.", "doesn't know"),
            ("We (learn) ________ about festivals celebrations in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master festivals celebrations, you must practice.", "want"),
            ("He (be) ________ interested in festivals celebrations since he was a child.", "has been"),
            ("They (discuss) ________ festivals celebrations when I arrived.", "were discussing"),
            ("I think festivals celebrations (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of festivals celebrations?", "heard"),
            ("She (usually/read) ________ about festivals celebrations on weekends.", "usually reads"),
            ("We (visit) ________ a museum about festivals celebrations tomorrow.", "are visiting")
        ],
        "vocab": [
            ("festivals celebrations specialist", "An expert in the field of festivals celebrations"),
            ("Fundamentals", "The basic principles of festivals celebrations"),
            ("Advanced", "A high level of knowledge in festivals celebrations"),
            ("Innovation", "A new idea or method in festivals celebrations"),
            ("Research", "The systematic investigation into festivals celebrations"),
            ("Theory", "A system of ideas intended to explain festivals celebrations"),
            ("Practice", "The application of festivals celebrations in real life"),
            ("Challenge", "A difficult task in the context of festivals celebrations"),
            ("Solution", "A way to solve a problem related to festivals celebrations"),
            ("Impact", "The effect of festivals celebrations on society")
        ],
        "sentences": [
            "Learning about festivals celebrations is a great way to expand your horizons.",
            "The impact of festivals celebrations on our daily lives is significant.",
            "Many people find festivals celebrations to be a challenging but rewarding subject.",
            "He has been a specialist in festivals celebrations for over ten years.",
            "We are going to explore the fundamentals of festivals celebrations in this unit.",
            "The research on festivals celebrations has led to many new discoveries.",
            "There are many different theories about how festivals celebrations works.",
            "Putting the theory of festivals celebrations into practice can be difficult.",
            "We face many challenges when studying the complexities of festivals celebrations.",
            "Finding a solution to this festivals celebrations problem is our main priority."
        ]
    },

    41: { # Social Media Impact
        "grammar": [
            ("I (study) ________ social media impact lately.", "have been studying"),
            ("She (not/know) ________ much about social media impact yet.", "doesn't know"),
            ("We (learn) ________ about social media impact in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master social media impact, you must practice.", "want"),
            ("He (be) ________ interested in social media impact since he was a child.", "has been"),
            ("They (discuss) ________ social media impact when I arrived.", "were discussing"),
            ("I think social media impact (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of social media impact?", "heard"),
            ("She (usually/read) ________ about social media impact on weekends.", "usually reads"),
            ("We (visit) ________ a museum about social media impact tomorrow.", "are visiting")
        ],
        "vocab": [
            ("social media impact specialist", "An expert in the field of social media impact"),
            ("Fundamentals", "The basic principles of social media impact"),
            ("Advanced", "A high level of knowledge in social media impact"),
            ("Innovation", "A new idea or method in social media impact"),
            ("Research", "The systematic investigation into social media impact"),
            ("Theory", "A system of ideas intended to explain social media impact"),
            ("Practice", "The application of social media impact in real life"),
            ("Challenge", "A difficult task in the context of social media impact"),
            ("Solution", "A way to solve a problem related to social media impact"),
            ("Impact", "The effect of social media impact on society")
        ],
        "sentences": [
            "Learning about social media impact is a great way to expand your horizons.",
            "The impact of social media impact on our daily lives is significant.",
            "Many people find social media impact to be a challenging but rewarding subject.",
            "He has been a specialist in social media impact for over ten years.",
            "We are going to explore the fundamentals of social media impact in this unit.",
            "The research on social media impact has led to many new discoveries.",
            "There are many different theories about how social media impact works.",
            "Putting the theory of social media impact into practice can be difficult.",
            "We face many challenges when studying the complexities of social media impact.",
            "Finding a solution to this social media impact problem is our main priority."
        ]
    },

    42: { # Ethics and Values
        "grammar": [
            ("I (study) ________ ethics values lately.", "have been studying"),
            ("She (not/know) ________ much about ethics values yet.", "doesn't know"),
            ("We (learn) ________ about ethics values in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master ethics values, you must practice.", "want"),
            ("He (be) ________ interested in ethics values since he was a child.", "has been"),
            ("They (discuss) ________ ethics values when I arrived.", "were discussing"),
            ("I think ethics values (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of ethics values?", "heard"),
            ("She (usually/read) ________ about ethics values on weekends.", "usually reads"),
            ("We (visit) ________ a museum about ethics values tomorrow.", "are visiting")
        ],
        "vocab": [
            ("ethics values specialist", "An expert in the field of ethics values"),
            ("Fundamentals", "The basic principles of ethics values"),
            ("Advanced", "A high level of knowledge in ethics values"),
            ("Innovation", "A new idea or method in ethics values"),
            ("Research", "The systematic investigation into ethics values"),
            ("Theory", "A system of ideas intended to explain ethics values"),
            ("Practice", "The application of ethics values in real life"),
            ("Challenge", "A difficult task in the context of ethics values"),
            ("Solution", "A way to solve a problem related to ethics values"),
            ("Impact", "The effect of ethics values on society")
        ],
        "sentences": [
            "Learning about ethics values is a great way to expand your horizons.",
            "The impact of ethics values on our daily lives is significant.",
            "Many people find ethics values to be a challenging but rewarding subject.",
            "He has been a specialist in ethics values for over ten years.",
            "We are going to explore the fundamentals of ethics values in this unit.",
            "The research on ethics values has led to many new discoveries.",
            "There are many different theories about how ethics values works.",
            "Putting the theory of ethics values into practice can be difficult.",
            "We face many challenges when studying the complexities of ethics values.",
            "Finding a solution to this ethics values problem is our main priority."
        ]
    },

    43: { # Public Transport and Mobility
        "grammar": [
            ("I (study) ________ public transport mobility lately.", "have been studying"),
            ("She (not/know) ________ much about public transport mobility yet.", "doesn't know"),
            ("We (learn) ________ about public transport mobility in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master public transport mobility, you must practice.", "want"),
            ("He (be) ________ interested in public transport mobility since he was a child.", "has been"),
            ("They (discuss) ________ public transport mobility when I arrived.", "were discussing"),
            ("I think public transport mobility (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of public transport mobility?", "heard"),
            ("She (usually/read) ________ about public transport mobility on weekends.", "usually reads"),
            ("We (visit) ________ a museum about public transport mobility tomorrow.", "are visiting")
        ],
        "vocab": [
            ("public transport mobility specialist", "An expert in the field of public transport mobility"),
            ("Fundamentals", "The basic principles of public transport mobility"),
            ("Advanced", "A high level of knowledge in public transport mobility"),
            ("Innovation", "A new idea or method in public transport mobility"),
            ("Research", "The systematic investigation into public transport mobility"),
            ("Theory", "A system of ideas intended to explain public transport mobility"),
            ("Practice", "The application of public transport mobility in real life"),
            ("Challenge", "A difficult task in the context of public transport mobility"),
            ("Solution", "A way to solve a problem related to public transport mobility"),
            ("Impact", "The effect of public transport mobility on society")
        ],
        "sentences": [
            "Learning about public transport mobility is a great way to expand your horizons.",
            "The impact of public transport mobility on our daily lives is significant.",
            "Many people find public transport mobility to be a challenging but rewarding subject.",
            "He has been a specialist in public transport mobility for over ten years.",
            "We are going to explore the fundamentals of public transport mobility in this unit.",
            "The research on public transport mobility has led to many new discoveries.",
            "There are many different theories about how public transport mobility works.",
            "Putting the theory of public transport mobility into practice can be difficult.",
            "We face many challenges when studying the complexities of public transport mobility.",
            "Finding a solution to this public transport mobility problem is our main priority."
        ]
    },

    44: { # Architecture and Landmarks
        "grammar": [
            ("I (study) ________ architecture landmarks lately.", "have been studying"),
            ("She (not/know) ________ much about architecture landmarks yet.", "doesn't know"),
            ("We (learn) ________ about architecture landmarks in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master architecture landmarks, you must practice.", "want"),
            ("He (be) ________ interested in architecture landmarks since he was a child.", "has been"),
            ("They (discuss) ________ architecture landmarks when I arrived.", "were discussing"),
            ("I think architecture landmarks (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of architecture landmarks?", "heard"),
            ("She (usually/read) ________ about architecture landmarks on weekends.", "usually reads"),
            ("We (visit) ________ a museum about architecture landmarks tomorrow.", "are visiting")
        ],
        "vocab": [
            ("architecture landmarks specialist", "An expert in the field of architecture landmarks"),
            ("Fundamentals", "The basic principles of architecture landmarks"),
            ("Advanced", "A high level of knowledge in architecture landmarks"),
            ("Innovation", "A new idea or method in architecture landmarks"),
            ("Research", "The systematic investigation into architecture landmarks"),
            ("Theory", "A system of ideas intended to explain architecture landmarks"),
            ("Practice", "The application of architecture landmarks in real life"),
            ("Challenge", "A difficult task in the context of architecture landmarks"),
            ("Solution", "A way to solve a problem related to architecture landmarks"),
            ("Impact", "The effect of architecture landmarks on society")
        ],
        "sentences": [
            "Learning about architecture landmarks is a great way to expand your horizons.",
            "The impact of architecture landmarks on our daily lives is significant.",
            "Many people find architecture landmarks to be a challenging but rewarding subject.",
            "He has been a specialist in architecture landmarks for over ten years.",
            "We are going to explore the fundamentals of architecture landmarks in this unit.",
            "The research on architecture landmarks has led to many new discoveries.",
            "There are many different theories about how architecture landmarks works.",
            "Putting the theory of architecture landmarks into practice can be difficult.",
            "We face many challenges when studying the complexities of architecture landmarks.",
            "Finding a solution to this architecture landmarks problem is our main priority."
        ]
    },

    45: { # Literature and Storytelling
        "grammar": [
            ("I (study) ________ literature storytelling lately.", "have been studying"),
            ("She (not/know) ________ much about literature storytelling yet.", "doesn't know"),
            ("We (learn) ________ about literature storytelling in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master literature storytelling, you must practice.", "want"),
            ("He (be) ________ interested in literature storytelling since he was a child.", "has been"),
            ("They (discuss) ________ literature storytelling when I arrived.", "were discussing"),
            ("I think literature storytelling (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of literature storytelling?", "heard"),
            ("She (usually/read) ________ about literature storytelling on weekends.", "usually reads"),
            ("We (visit) ________ a museum about literature storytelling tomorrow.", "are visiting")
        ],
        "vocab": [
            ("literature storytelling specialist", "An expert in the field of literature storytelling"),
            ("Fundamentals", "The basic principles of literature storytelling"),
            ("Advanced", "A high level of knowledge in literature storytelling"),
            ("Innovation", "A new idea or method in literature storytelling"),
            ("Research", "The systematic investigation into literature storytelling"),
            ("Theory", "A system of ideas intended to explain literature storytelling"),
            ("Practice", "The application of literature storytelling in real life"),
            ("Challenge", "A difficult task in the context of literature storytelling"),
            ("Solution", "A way to solve a problem related to literature storytelling"),
            ("Impact", "The effect of literature storytelling on society")
        ],
        "sentences": [
            "Learning about literature storytelling is a great way to expand your horizons.",
            "The impact of literature storytelling on our daily lives is significant.",
            "Many people find literature storytelling to be a challenging but rewarding subject.",
            "He has been a specialist in literature storytelling for over ten years.",
            "We are going to explore the fundamentals of literature storytelling in this unit.",
            "The research on literature storytelling has led to many new discoveries.",
            "There are many different theories about how literature storytelling works.",
            "Putting the theory of literature storytelling into practice can be difficult.",
            "We face many challenges when studying the complexities of literature storytelling.",
            "Finding a solution to this literature storytelling problem is our main priority."
        ]
    },

    46: { # Sports and Competition
        "grammar": [
            ("I (study) ________ sports competition lately.", "have been studying"),
            ("She (not/know) ________ much about sports competition yet.", "doesn't know"),
            ("We (learn) ________ about sports competition in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master sports competition, you must practice.", "want"),
            ("He (be) ________ interested in sports competition since he was a child.", "has been"),
            ("They (discuss) ________ sports competition when I arrived.", "were discussing"),
            ("I think sports competition (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of sports competition?", "heard"),
            ("She (usually/read) ________ about sports competition on weekends.", "usually reads"),
            ("We (visit) ________ a museum about sports competition tomorrow.", "are visiting")
        ],
        "vocab": [
            ("sports competition specialist", "An expert in the field of sports competition"),
            ("Fundamentals", "The basic principles of sports competition"),
            ("Advanced", "A high level of knowledge in sports competition"),
            ("Innovation", "A new idea or method in sports competition"),
            ("Research", "The systematic investigation into sports competition"),
            ("Theory", "A system of ideas intended to explain sports competition"),
            ("Practice", "The application of sports competition in real life"),
            ("Challenge", "A difficult task in the context of sports competition"),
            ("Solution", "A way to solve a problem related to sports competition"),
            ("Impact", "The effect of sports competition on society")
        ],
        "sentences": [
            "Learning about sports competition is a great way to expand your horizons.",
            "The impact of sports competition on our daily lives is significant.",
            "Many people find sports competition to be a challenging but rewarding subject.",
            "He has been a specialist in sports competition for over ten years.",
            "We are going to explore the fundamentals of sports competition in this unit.",
            "The research on sports competition has led to many new discoveries.",
            "There are many different theories about how sports competition works.",
            "Putting the theory of sports competition into practice can be difficult.",
            "We face many challenges when studying the complexities of sports competition.",
            "Finding a solution to this sports competition problem is our main priority."
        ]
    },

    47: { # Volunteering and Charity
        "grammar": [
            ("I (study) ________ volunteering charity lately.", "have been studying"),
            ("She (not/know) ________ much about volunteering charity yet.", "doesn't know"),
            ("We (learn) ________ about volunteering charity in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master volunteering charity, you must practice.", "want"),
            ("He (be) ________ interested in volunteering charity since he was a child.", "has been"),
            ("They (discuss) ________ volunteering charity when I arrived.", "were discussing"),
            ("I think volunteering charity (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of volunteering charity?", "heard"),
            ("She (usually/read) ________ about volunteering charity on weekends.", "usually reads"),
            ("We (visit) ________ a museum about volunteering charity tomorrow.", "are visiting")
        ],
        "vocab": [
            ("volunteering charity specialist", "An expert in the field of volunteering charity"),
            ("Fundamentals", "The basic principles of volunteering charity"),
            ("Advanced", "A high level of knowledge in volunteering charity"),
            ("Innovation", "A new idea or method in volunteering charity"),
            ("Research", "The systematic investigation into volunteering charity"),
            ("Theory", "A system of ideas intended to explain volunteering charity"),
            ("Practice", "The application of volunteering charity in real life"),
            ("Challenge", "A difficult task in the context of volunteering charity"),
            ("Solution", "A way to solve a problem related to volunteering charity"),
            ("Impact", "The effect of volunteering charity on society")
        ],
        "sentences": [
            "Learning about volunteering charity is a great way to expand your horizons.",
            "The impact of volunteering charity on our daily lives is significant.",
            "Many people find volunteering charity to be a challenging but rewarding subject.",
            "He has been a specialist in volunteering charity for over ten years.",
            "We are going to explore the fundamentals of volunteering charity in this unit.",
            "The research on volunteering charity has led to many new discoveries.",
            "There are many different theories about how volunteering charity works.",
            "Putting the theory of volunteering charity into practice can be difficult.",
            "We face many challenges when studying the complexities of volunteering charity.",
            "Finding a solution to this volunteering charity problem is our main priority."
        ]
    },

    48: { # Politics and Governance
        "grammar": [
            ("I (study) ________ politics governance lately.", "have been studying"),
            ("She (not/know) ________ much about politics governance yet.", "doesn't know"),
            ("We (learn) ________ about politics governance in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master politics governance, you must practice.", "want"),
            ("He (be) ________ interested in politics governance since he was a child.", "has been"),
            ("They (discuss) ________ politics governance when I arrived.", "were discussing"),
            ("I think politics governance (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of politics governance?", "heard"),
            ("She (usually/read) ________ about politics governance on weekends.", "usually reads"),
            ("We (visit) ________ a museum about politics governance tomorrow.", "are visiting")
        ],
        "vocab": [
            ("politics governance specialist", "An expert in the field of politics governance"),
            ("Fundamentals", "The basic principles of politics governance"),
            ("Advanced", "A high level of knowledge in politics governance"),
            ("Innovation", "A new idea or method in politics governance"),
            ("Research", "The systematic investigation into politics governance"),
            ("Theory", "A system of ideas intended to explain politics governance"),
            ("Practice", "The application of politics governance in real life"),
            ("Challenge", "A difficult task in the context of politics governance"),
            ("Solution", "A way to solve a problem related to politics governance"),
            ("Impact", "The effect of politics governance on society")
        ],
        "sentences": [
            "Learning about politics governance is a great way to expand your horizons.",
            "The impact of politics governance on our daily lives is significant.",
            "Many people find politics governance to be a challenging but rewarding subject.",
            "He has been a specialist in politics governance for over ten years.",
            "We are going to explore the fundamentals of politics governance in this unit.",
            "The research on politics governance has led to many new discoveries.",
            "There are many different theories about how politics governance works.",
            "Putting the theory of politics governance into practice can be difficult.",
            "We face many challenges when studying the complexities of politics governance.",
            "Finding a solution to this politics governance problem is our main priority."
        ]
    },

    49: { # Advertising and Marketing
        "grammar": [
            ("I (study) ________ advertising marketing lately.", "have been studying"),
            ("She (not/know) ________ much about advertising marketing yet.", "doesn't know"),
            ("We (learn) ________ about advertising marketing in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master advertising marketing, you must practice.", "want"),
            ("He (be) ________ interested in advertising marketing since he was a child.", "has been"),
            ("They (discuss) ________ advertising marketing when I arrived.", "were discussing"),
            ("I think advertising marketing (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of advertising marketing?", "heard"),
            ("She (usually/read) ________ about advertising marketing on weekends.", "usually reads"),
            ("We (visit) ________ a museum about advertising marketing tomorrow.", "are visiting")
        ],
        "vocab": [
            ("advertising marketing specialist", "An expert in the field of advertising marketing"),
            ("Fundamentals", "The basic principles of advertising marketing"),
            ("Advanced", "A high level of knowledge in advertising marketing"),
            ("Innovation", "A new idea or method in advertising marketing"),
            ("Research", "The systematic investigation into advertising marketing"),
            ("Theory", "A system of ideas intended to explain advertising marketing"),
            ("Practice", "The application of advertising marketing in real life"),
            ("Challenge", "A difficult task in the context of advertising marketing"),
            ("Solution", "A way to solve a problem related to advertising marketing"),
            ("Impact", "The effect of advertising marketing on society")
        ],
        "sentences": [
            "Learning about advertising marketing is a great way to expand your horizons.",
            "The impact of advertising marketing on our daily lives is significant.",
            "Many people find advertising marketing to be a challenging but rewarding subject.",
            "He has been a specialist in advertising marketing for over ten years.",
            "We are going to explore the fundamentals of advertising marketing in this unit.",
            "The research on advertising marketing has led to many new discoveries.",
            "There are many different theories about how advertising marketing works.",
            "Putting the theory of advertising marketing into practice can be difficult.",
            "We face many challenges when studying the complexities of advertising marketing.",
            "Finding a solution to this advertising marketing problem is our main priority."
        ]
    },

    50: { # Holidays and Traditions
        "grammar": [
            ("I (study) ________ holidays traditions lately.", "have been studying"),
            ("She (not/know) ________ much about holidays traditions yet.", "doesn't know"),
            ("We (learn) ________ about holidays traditions in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master holidays traditions, you must practice.", "want"),
            ("He (be) ________ interested in holidays traditions since he was a child.", "has been"),
            ("They (discuss) ________ holidays traditions when I arrived.", "were discussing"),
            ("I think holidays traditions (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of holidays traditions?", "heard"),
            ("She (usually/read) ________ about holidays traditions on weekends.", "usually reads"),
            ("We (visit) ________ a museum about holidays traditions tomorrow.", "are visiting")
        ],
        "vocab": [
            ("holidays traditions specialist", "An expert in the field of holidays traditions"),
            ("Fundamentals", "The basic principles of holidays traditions"),
            ("Advanced", "A high level of knowledge in holidays traditions"),
            ("Innovation", "A new idea or method in holidays traditions"),
            ("Research", "The systematic investigation into holidays traditions"),
            ("Theory", "A system of ideas intended to explain holidays traditions"),
            ("Practice", "The application of holidays traditions in real life"),
            ("Challenge", "A difficult task in the context of holidays traditions"),
            ("Solution", "A way to solve a problem related to holidays traditions"),
            ("Impact", "The effect of holidays traditions on society")
        ],
        "sentences": [
            "Learning about holidays traditions is a great way to expand your horizons.",
            "The impact of holidays traditions on our daily lives is significant.",
            "Many people find holidays traditions to be a challenging but rewarding subject.",
            "He has been a specialist in holidays traditions for over ten years.",
            "We are going to explore the fundamentals of holidays traditions in this unit.",
            "The research on holidays traditions has led to many new discoveries.",
            "There are many different theories about how holidays traditions works.",
            "Putting the theory of holidays traditions into practice can be difficult.",
            "We face many challenges when studying the complexities of holidays traditions.",
            "Finding a solution to this holidays traditions problem is our main priority."
        ]
    },

    51: { # Languages of the World
        "grammar": [
            ("I (study) ________ languages of the world lately.", "have been studying"),
            ("She (not/know) ________ much about languages of the world yet.", "doesn't know"),
            ("We (learn) ________ about languages of the world in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master languages of the world, you must practice.", "want"),
            ("He (be) ________ interested in languages of the world since he was a child.", "has been"),
            ("They (discuss) ________ languages of the world when I arrived.", "were discussing"),
            ("I think languages of the world (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of languages of the world?", "heard"),
            ("She (usually/read) ________ about languages of the world on weekends.", "usually reads"),
            ("We (visit) ________ a museum about languages of the world tomorrow.", "are visiting")
        ],
        "vocab": [
            ("languages of the world specialist", "An expert in the field of languages of the world"),
            ("Fundamentals", "The basic principles of languages of the world"),
            ("Advanced", "A high level of knowledge in languages of the world"),
            ("Innovation", "A new idea or method in languages of the world"),
            ("Research", "The systematic investigation into languages of the world"),
            ("Theory", "A system of ideas intended to explain languages of the world"),
            ("Practice", "The application of languages of the world in real life"),
            ("Challenge", "A difficult task in the context of languages of the world"),
            ("Solution", "A way to solve a problem related to languages of the world"),
            ("Impact", "The effect of languages of the world on society")
        ],
        "sentences": [
            "Learning about languages of the world is a great way to expand your horizons.",
            "The impact of languages of the world on our daily lives is significant.",
            "Many people find languages of the world to be a challenging but rewarding subject.",
            "He has been a specialist in languages of the world for over ten years.",
            "We are going to explore the fundamentals of languages of the world in this unit.",
            "The research on languages of the world has led to many new discoveries.",
            "There are many different theories about how languages of the world works.",
            "Putting the theory of languages of the world into practice can be difficult.",
            "We face many challenges when studying the complexities of languages of the world.",
            "Finding a solution to this languages of the world problem is our main priority."
        ]
    },

    52: { # Natural Disasters and Prevention
        "grammar": [
            ("I (study) ________ natural disasters prevention lately.", "have been studying"),
            ("She (not/know) ________ much about natural disasters prevention yet.", "doesn't know"),
            ("We (learn) ________ about natural disasters prevention in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master natural disasters prevention, you must practice.", "want"),
            ("He (be) ________ interested in natural disasters prevention since he was a child.", "has been"),
            ("They (discuss) ________ natural disasters prevention when I arrived.", "were discussing"),
            ("I think natural disasters prevention (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of natural disasters prevention?", "heard"),
            ("She (usually/read) ________ about natural disasters prevention on weekends.", "usually reads"),
            ("We (visit) ________ a museum about natural disasters prevention tomorrow.", "are visiting")
        ],
        "vocab": [
            ("natural disasters prevention specialist", "An expert in the field of natural disasters prevention"),
            ("Fundamentals", "The basic principles of natural disasters prevention"),
            ("Advanced", "A high level of knowledge in natural disasters prevention"),
            ("Innovation", "A new idea or method in natural disasters prevention"),
            ("Research", "The systematic investigation into natural disasters prevention"),
            ("Theory", "A system of ideas intended to explain natural disasters prevention"),
            ("Practice", "The application of natural disasters prevention in real life"),
            ("Challenge", "A difficult task in the context of natural disasters prevention"),
            ("Solution", "A way to solve a problem related to natural disasters prevention"),
            ("Impact", "The effect of natural disasters prevention on society")
        ],
        "sentences": [
            "Learning about natural disasters prevention is a great way to expand your horizons.",
            "The impact of natural disasters prevention on our daily lives is significant.",
            "Many people find natural disasters prevention to be a challenging but rewarding subject.",
            "He has been a specialist in natural disasters prevention for over ten years.",
            "We are going to explore the fundamentals of natural disasters prevention in this unit.",
            "The research on natural disasters prevention has led to many new discoveries.",
            "There are many different theories about how natural disasters prevention works.",
            "Putting the theory of natural disasters prevention into practice can be difficult.",
            "We face many challenges when studying the complexities of natural disasters prevention.",
            "Finding a solution to this natural disasters prevention problem is our main priority."
        ]
    },

    53: { # Fashion Trends and Sustainability
        "grammar": [
            ("I (study) ________ fashion trends sustainability lately.", "have been studying"),
            ("She (not/know) ________ much about fashion trends sustainability yet.", "doesn't know"),
            ("We (learn) ________ about fashion trends sustainability in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master fashion trends sustainability, you must practice.", "want"),
            ("He (be) ________ interested in fashion trends sustainability since he was a child.", "has been"),
            ("They (discuss) ________ fashion trends sustainability when I arrived.", "were discussing"),
            ("I think fashion trends sustainability (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of fashion trends sustainability?", "heard"),
            ("She (usually/read) ________ about fashion trends sustainability on weekends.", "usually reads"),
            ("We (visit) ________ a museum about fashion trends sustainability tomorrow.", "are visiting")
        ],
        "vocab": [
            ("fashion trends sustainability specialist", "An expert in the field of fashion trends sustainability"),
            ("Fundamentals", "The basic principles of fashion trends sustainability"),
            ("Advanced", "A high level of knowledge in fashion trends sustainability"),
            ("Innovation", "A new idea or method in fashion trends sustainability"),
            ("Research", "The systematic investigation into fashion trends sustainability"),
            ("Theory", "A system of ideas intended to explain fashion trends sustainability"),
            ("Practice", "The application of fashion trends sustainability in real life"),
            ("Challenge", "A difficult task in the context of fashion trends sustainability"),
            ("Solution", "A way to solve a problem related to fashion trends sustainability"),
            ("Impact", "The effect of fashion trends sustainability on society")
        ],
        "sentences": [
            "Learning about fashion trends sustainability is a great way to expand your horizons.",
            "The impact of fashion trends sustainability on our daily lives is significant.",
            "Many people find fashion trends sustainability to be a challenging but rewarding subject.",
            "He has been a specialist in fashion trends sustainability for over ten years.",
            "We are going to explore the fundamentals of fashion trends sustainability in this unit.",
            "The research on fashion trends sustainability has led to many new discoveries.",
            "There are many different theories about how fashion trends sustainability works.",
            "Putting the theory of fashion trends sustainability into practice can be difficult.",
            "We face many challenges when studying the complexities of fashion trends sustainability.",
            "Finding a solution to this fashion trends sustainability problem is our main priority."
        ]
    },

    54: { # Business Ethics
        "grammar": [
            ("I (study) ________ business ethics lately.", "have been studying"),
            ("She (not/know) ________ much about business ethics yet.", "doesn't know"),
            ("We (learn) ________ about business ethics in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master business ethics, you must practice.", "want"),
            ("He (be) ________ interested in business ethics since he was a child.", "has been"),
            ("They (discuss) ________ business ethics when I arrived.", "were discussing"),
            ("I think business ethics (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of business ethics?", "heard"),
            ("She (usually/read) ________ about business ethics on weekends.", "usually reads"),
            ("We (visit) ________ a museum about business ethics tomorrow.", "are visiting")
        ],
        "vocab": [
            ("business ethics specialist", "An expert in the field of business ethics"),
            ("Fundamentals", "The basic principles of business ethics"),
            ("Advanced", "A high level of knowledge in business ethics"),
            ("Innovation", "A new idea or method in business ethics"),
            ("Research", "The systematic investigation into business ethics"),
            ("Theory", "A system of ideas intended to explain business ethics"),
            ("Practice", "The application of business ethics in real life"),
            ("Challenge", "A difficult task in the context of business ethics"),
            ("Solution", "A way to solve a problem related to business ethics"),
            ("Impact", "The effect of business ethics on society")
        ],
        "sentences": [
            "Learning about business ethics is a great way to expand your horizons.",
            "The impact of business ethics on our daily lives is significant.",
            "Many people find business ethics to be a challenging but rewarding subject.",
            "He has been a specialist in business ethics for over ten years.",
            "We are going to explore the fundamentals of business ethics in this unit.",
            "The research on business ethics has led to many new discoveries.",
            "There are many different theories about how business ethics works.",
            "Putting the theory of business ethics into practice can be difficult.",
            "We face many challenges when studying the complexities of business ethics.",
            "Finding a solution to this business ethics problem is our main priority."
        ]
    },

    55: { # Technological Ethics (AI)
        "grammar": [
            ("I (study) ________ technological ethics (ai) lately.", "have been studying"),
            ("She (not/know) ________ much about technological ethics (ai) yet.", "doesn't know"),
            ("We (learn) ________ about technological ethics (ai) in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master technological ethics (ai), you must practice.", "want"),
            ("He (be) ________ interested in technological ethics (ai) since he was a child.", "has been"),
            ("They (discuss) ________ technological ethics (ai) when I arrived.", "were discussing"),
            ("I think technological ethics (ai) (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of technological ethics (ai)?", "heard"),
            ("She (usually/read) ________ about technological ethics (ai) on weekends.", "usually reads"),
            ("We (visit) ________ a museum about technological ethics (ai) tomorrow.", "are visiting")
        ],
        "vocab": [
            ("technological ethics (ai) specialist", "An expert in the field of technological ethics (ai)"),
            ("Fundamentals", "The basic principles of technological ethics (ai)"),
            ("Advanced", "A high level of knowledge in technological ethics (ai)"),
            ("Innovation", "A new idea or method in technological ethics (ai)"),
            ("Research", "The systematic investigation into technological ethics (ai)"),
            ("Theory", "A system of ideas intended to explain technological ethics (ai)"),
            ("Practice", "The application of technological ethics (ai) in real life"),
            ("Challenge", "A difficult task in the context of technological ethics (ai)"),
            ("Solution", "A way to solve a problem related to technological ethics (ai)"),
            ("Impact", "The effect of technological ethics (ai) on society")
        ],
        "sentences": [
            "Learning about technological ethics (ai) is a great way to expand your horizons.",
            "The impact of technological ethics (ai) on our daily lives is significant.",
            "Many people find technological ethics (ai) to be a challenging but rewarding subject.",
            "He has been a specialist in technological ethics (ai) for over ten years.",
            "We are going to explore the fundamentals of technological ethics (ai) in this unit.",
            "The research on technological ethics (ai) has led to many new discoveries.",
            "There are many different theories about how technological ethics (ai) works.",
            "Putting the theory of technological ethics (ai) into practice can be difficult.",
            "We face many challenges when studying the complexities of technological ethics (ai).",
            "Finding a solution to this technological ethics (ai) problem is our main priority."
        ]
    },

    56: { # Health Care Systems
        "grammar": [
            ("I (study) ________ health care systems lately.", "have been studying"),
            ("She (not/know) ________ much about health care systems yet.", "doesn't know"),
            ("We (learn) ________ about health care systems in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master health care systems, you must practice.", "want"),
            ("He (be) ________ interested in health care systems since he was a child.", "has been"),
            ("They (discuss) ________ health care systems when I arrived.", "were discussing"),
            ("I think health care systems (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of health care systems?", "heard"),
            ("She (usually/read) ________ about health care systems on weekends.", "usually reads"),
            ("We (visit) ________ a museum about health care systems tomorrow.", "are visiting")
        ],
        "vocab": [
            ("health care systems specialist", "An expert in the field of health care systems"),
            ("Fundamentals", "The basic principles of health care systems"),
            ("Advanced", "A high level of knowledge in health care systems"),
            ("Innovation", "A new idea or method in health care systems"),
            ("Research", "The systematic investigation into health care systems"),
            ("Theory", "A system of ideas intended to explain health care systems"),
            ("Practice", "The application of health care systems in real life"),
            ("Challenge", "A difficult task in the context of health care systems"),
            ("Solution", "A way to solve a problem related to health care systems"),
            ("Impact", "The effect of health care systems on society")
        ],
        "sentences": [
            "Learning about health care systems is a great way to expand your horizons.",
            "The impact of health care systems on our daily lives is significant.",
            "Many people find health care systems to be a challenging but rewarding subject.",
            "He has been a specialist in health care systems for over ten years.",
            "We are going to explore the fundamentals of health care systems in this unit.",
            "The research on health care systems has led to many new discoveries.",
            "There are many different theories about how health care systems works.",
            "Putting the theory of health care systems into practice can be difficult.",
            "We face many challenges when studying the complexities of health care systems.",
            "Finding a solution to this health care systems problem is our main priority."
        ]
    },

    57: { # Youth Culture
        "grammar": [
            ("I (study) ________ youth culture lately.", "have been studying"),
            ("She (not/know) ________ much about youth culture yet.", "doesn't know"),
            ("We (learn) ________ about youth culture in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master youth culture, you must practice.", "want"),
            ("He (be) ________ interested in youth culture since he was a child.", "has been"),
            ("They (discuss) ________ youth culture when I arrived.", "were discussing"),
            ("I think youth culture (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of youth culture?", "heard"),
            ("She (usually/read) ________ about youth culture on weekends.", "usually reads"),
            ("We (visit) ________ a museum about youth culture tomorrow.", "are visiting")
        ],
        "vocab": [
            ("youth culture specialist", "An expert in the field of youth culture"),
            ("Fundamentals", "The basic principles of youth culture"),
            ("Advanced", "A high level of knowledge in youth culture"),
            ("Innovation", "A new idea or method in youth culture"),
            ("Research", "The systematic investigation into youth culture"),
            ("Theory", "A system of ideas intended to explain youth culture"),
            ("Practice", "The application of youth culture in real life"),
            ("Challenge", "A difficult task in the context of youth culture"),
            ("Solution", "A way to solve a problem related to youth culture"),
            ("Impact", "The effect of youth culture on society")
        ],
        "sentences": [
            "Learning about youth culture is a great way to expand your horizons.",
            "The impact of youth culture on our daily lives is significant.",
            "Many people find youth culture to be a challenging but rewarding subject.",
            "He has been a specialist in youth culture for over ten years.",
            "We are going to explore the fundamentals of youth culture in this unit.",
            "The research on youth culture has led to many new discoveries.",
            "There are many different theories about how youth culture works.",
            "Putting the theory of youth culture into practice can be difficult.",
            "We face many challenges when studying the complexities of youth culture.",
            "Finding a solution to this youth culture problem is our main priority."
        ]
    },

    58: { # Retirement and Aging
        "grammar": [
            ("I (study) ________ retirement aging lately.", "have been studying"),
            ("She (not/know) ________ much about retirement aging yet.", "doesn't know"),
            ("We (learn) ________ about retirement aging in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master retirement aging, you must practice.", "want"),
            ("He (be) ________ interested in retirement aging since he was a child.", "has been"),
            ("They (discuss) ________ retirement aging when I arrived.", "were discussing"),
            ("I think retirement aging (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of retirement aging?", "heard"),
            ("She (usually/read) ________ about retirement aging on weekends.", "usually reads"),
            ("We (visit) ________ a museum about retirement aging tomorrow.", "are visiting")
        ],
        "vocab": [
            ("retirement aging specialist", "An expert in the field of retirement aging"),
            ("Fundamentals", "The basic principles of retirement aging"),
            ("Advanced", "A high level of knowledge in retirement aging"),
            ("Innovation", "A new idea or method in retirement aging"),
            ("Research", "The systematic investigation into retirement aging"),
            ("Theory", "A system of ideas intended to explain retirement aging"),
            ("Practice", "The application of retirement aging in real life"),
            ("Challenge", "A difficult task in the context of retirement aging"),
            ("Solution", "A way to solve a problem related to retirement aging"),
            ("Impact", "The effect of retirement aging on society")
        ],
        "sentences": [
            "Learning about retirement aging is a great way to expand your horizons.",
            "The impact of retirement aging on our daily lives is significant.",
            "Many people find retirement aging to be a challenging but rewarding subject.",
            "He has been a specialist in retirement aging for over ten years.",
            "We are going to explore the fundamentals of retirement aging in this unit.",
            "The research on retirement aging has led to many new discoveries.",
            "There are many different theories about how retirement aging works.",
            "Putting the theory of retirement aging into practice can be difficult.",
            "We face many challenges when studying the complexities of retirement aging.",
            "Finding a solution to this retirement aging problem is our main priority."
        ]
    },

    59: { # Globalization
        "grammar": [
            ("I (study) ________ globalization lately.", "have been studying"),
            ("She (not/know) ________ much about globalization yet.", "doesn't know"),
            ("We (learn) ________ about globalization in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master globalization, you must practice.", "want"),
            ("He (be) ________ interested in globalization since he was a child.", "has been"),
            ("They (discuss) ________ globalization when I arrived.", "were discussing"),
            ("I think globalization (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of globalization?", "heard"),
            ("She (usually/read) ________ about globalization on weekends.", "usually reads"),
            ("We (visit) ________ a museum about globalization tomorrow.", "are visiting")
        ],
        "vocab": [
            ("globalization specialist", "An expert in the field of globalization"),
            ("Fundamentals", "The basic principles of globalization"),
            ("Advanced", "A high level of knowledge in globalization"),
            ("Innovation", "A new idea or method in globalization"),
            ("Research", "The systematic investigation into globalization"),
            ("Theory", "A system of ideas intended to explain globalization"),
            ("Practice", "The application of globalization in real life"),
            ("Challenge", "A difficult task in the context of globalization"),
            ("Solution", "A way to solve a problem related to globalization"),
            ("Impact", "The effect of globalization on society")
        ],
        "sentences": [
            "Learning about globalization is a great way to expand your horizons.",
            "The impact of globalization on our daily lives is significant.",
            "Many people find globalization to be a challenging but rewarding subject.",
            "He has been a specialist in globalization for over ten years.",
            "We are going to explore the fundamentals of globalization in this unit.",
            "The research on globalization has led to many new discoveries.",
            "There are many different theories about how globalization works.",
            "Putting the theory of globalization into practice can be difficult.",
            "We face many challenges when studying the complexities of globalization.",
            "Finding a solution to this globalization problem is our main priority."
        ]
    },

    60: { # Final Review and B1 Assessment
        "grammar": [
            ("I (study) ________ final review b1 assessment lately.", "have been studying"),
            ("She (not/know) ________ much about final review b1 assessment yet.", "doesn't know"),
            ("We (learn) ________ about final review b1 assessment in the next lesson.", "are going to learn"),
            ("If you (want) ________ to master final review b1 assessment, you must practice.", "want"),
            ("He (be) ________ interested in final review b1 assessment since he was a child.", "has been"),
            ("They (discuss) ________ final review b1 assessment when I arrived.", "were discussing"),
            ("I think final review b1 assessment (be) ________ very important for the future.", "is"),
            ("Have you ever (hear) ________ of final review b1 assessment?", "heard"),
            ("She (usually/read) ________ about final review b1 assessment on weekends.", "usually reads"),
            ("We (visit) ________ a museum about final review b1 assessment tomorrow.", "are visiting")
        ],
        "vocab": [
            ("final review b1 assessment specialist", "An expert in the field of final review b1 assessment"),
            ("Fundamentals", "The basic principles of final review b1 assessment"),
            ("Advanced", "A high level of knowledge in final review b1 assessment"),
            ("Innovation", "A new idea or method in final review b1 assessment"),
            ("Research", "The systematic investigation into final review b1 assessment"),
            ("Theory", "A system of ideas intended to explain final review b1 assessment"),
            ("Practice", "The application of final review b1 assessment in real life"),
            ("Challenge", "A difficult task in the context of final review b1 assessment"),
            ("Solution", "A way to solve a problem related to final review b1 assessment"),
            ("Impact", "The effect of final review b1 assessment on society")
        ],
        "sentences": [
            "Learning about final review b1 assessment is a great way to expand your horizons.",
            "The impact of final review b1 assessment on our daily lives is significant.",
            "Many people find final review b1 assessment to be a challenging but rewarding subject.",
            "He has been a specialist in final review b1 assessment for over ten years.",
            "We are going to explore the fundamentals of final review b1 assessment in this unit.",
            "The research on final review b1 assessment has led to many new discoveries.",
            "There are many different theories about how final review b1 assessment works.",
            "Putting the theory of final review b1 assessment into practice can be difficult.",
            "We face many challenges when studying the complexities of final review b1 assessment.",
            "Finding a solution to this final review b1 assessment problem is our main priority."
        ]
    },
}

# Títulos de las Unidades B1
UNIT_TITLES = {
    1: "Lifestyles and Routines",
    2: "The World of Work",
    3: "Technology and Innovation",
    4: "Travel and Exploration",
    5: "Environmental Awareness",
    6: "Media and Entertainment",
    7: "Health and Wellbeing",
    8: "Education and Learning",
    9: "Society and Culture",
    10: "The Natural World",
    11: "Shopping and Consumerism",
    12: "Food and Nutrition",
    13: "History and Heritage",
    14: "Sports and Fitness",
    15: "Art and Creativity",
    16: "Science and Discovery",
    17: "Modern Communications",
    18: "Relationships and Family",
    19: "Global Issues",
    20: "Personal Finance",
    21: "Crime and Justice",
    22: "Inventions and Creators",
    23: "Music and Performance",
    24: "Future Trends",
    25: "Leisure and Hobbies",
    26: "The Animal Kingdom",
    27: "Geography and Landmarks",
    28: "Fashion and Design",
    29: "Work-Life Balance",
    30: "Success and Achievement",

    31: "Urban Living vs Rural Life",
    32: "The History of English",
    33: "Extreme Sports and Adventure",
    34: "Psychology and Human Behavior",
    35: "Space Exploration",
    36: "Climate Change and Solutions",
    37: "Music Genres and History",
    38: "Cinema and Theater",
    39: "Cooking and Traditions",
    40: "Festivals and Celebrations",
    41: "Social Media Impact",
    42: "Ethics and Values",
    43: "Public Transport and Mobility",
    44: "Architecture and Landmarks",
    45: "Literature and Storytelling",
    46: "Sports and Competition",
    47: "Volunteering and Charity",
    48: "Politics and Governance",
    49: "Advertising and Marketing",
    50: "Holidays and Traditions",
    51: "Languages of the World",
    52: "Natural Disasters and Prevention",
    53: "Fashion Trends and Sustainability",
    54: "Business Ethics",
    55: "Technological Ethics (AI)",
    56: "Health Care Systems",
    57: "Youth Culture",
    58: "Retirement and Aging",
    59: "Globalization",
    60: "Final Review and B1 Assessment"
}

def generate_exercises(unit_id, count):
    exercises = []
    data = PEDAGOGICAL_DATA.get(unit_id)
    if not data:
        return []
    
    grammar_pool = data["grammar"]
    vocab_pool = data["vocab"]
    sentence_pool = data["sentences"]

    for i in range(1, count + 1):
        # Rotate through different exercise types for variety
        type_idx = i % 6
        
        # Add random salt to interaction_id to ensure global uniqueness if needed
        # but here unit_id and i are enough
        interaction_id = f"U{unit_id}_I{i}"

        if type_idx == 0: # Multiple Choice (Vocab)
            word, definition = random.choice(vocab_pool)
            other_words = [w for w, d in vocab_pool if w != word]
            distractors = random.sample(other_words, min(len(other_words), 2))
            
            options = [{"id": "o1", "text": word}]
            for idx, d_word in enumerate(distractors):
                options.append({"id": f"o{idx+2}", "text": d_word})
            random.shuffle(options)
            
            prompts = [
                f"¿Qué palabra corresponde a esta definición?: \"{definition}\"",
                f"Selecciona el término que mejor encaja con: \"{definition}\"",
                f"Identifica la palabra correcta para: \"{definition}\""
            ]
            
            exercises.append({
                "interaction_id": interaction_id,
                "type": "multiple_choice",
                "prompt_es": random.choice(prompts),
                "options": options,
                "correct_answer": [opt["id"] for opt in options if opt["text"] == word][0],
                "feedback_correct_es": "¡Muy bien! Has acertado.",
                "mastery_tag": "vocabulary"
            })

        elif type_idx == 1: # Matching (Vocab)
            # Shuffle vocab to get different combinations
            selected = random.sample(vocab_pool, min(len(vocab_pool), 3))
            pairs = []
            for idx, (word, df) in enumerate(selected):
                pairs.append({"id": f"p{idx}", "left": word, "right": df})
            
            exercises.append({
                "interaction_id": interaction_id,
                "type": "matching",
                "prompt_es": "Une cada término con su definición correspondiente:",
                "pairs": pairs,
                "correct_answer": {p["id"]: p["id"] for p in pairs},
                "mastery_tag": "vocabulary"
            })

        elif type_idx == 2: # Transformation / Fill-in-the-blanks (Grammar)
            stimulus, correct = random.choice(grammar_pool)
            
            # Detect task type to set a more accurate prompt and avoid giving away the answer
            if "(" in stimulus and "/" in stimulus and "________" in stimulus:
                # Likely adjective ordering or multiple choice syntax
                try:
                    parts = stimulus.split("(")
                    before = parts[0]
                    inner_parts = parts[1].split(")")
                    options_str = inner_parts[0]
                    after = ")".join(inner_parts[1:])
                    
                    options = [o.strip() for o in options_str.split("/")]
                    # Only shuffle if it's an ordering task (more than 1 option)
                    if len(options) > 1:
                        shuffled_options = list(options)
                        attempts = 0
                        # Try to ensure it's different from both original AND correct answer
                        while attempts < 20:
                            random.shuffle(shuffled_options)
                            shuffled_str = "/".join(shuffled_options)
                            if shuffled_str != options_str:
                                # Also check against correct answer if possible
                                if shuffled_str.lower().replace("/", " ") != correct.lower().strip():
                                    break
                            attempts += 1
                        stimulus = f"{before}({'/'.join(shuffled_options)}){after}"
                    
                    # More specific prompt for adjective ordering or word choice
                    if any(adj in stimulus.lower() for adj in ["delicious", "big", "small", "old", "new", "beautiful", "long", "red", "shiny", "black", "wooden", "leather", "cotton", "silk", "glass", "metal", "curly", "brown", "grey", "plastic"]):
                        prompt = "Ordena los adjetivos correctamente para completar la frase:"
                    else:
                        prompt = "Elige la opción correcta o reordena las palabras:"
                except:
                    prompt = "Completa la oración correctamente:"
            elif "________" in stimulus and "(" in stimulus:
                # Likely verb conjugation or grammatical form
                if "/" in stimulus:
                    prompt = "Elige la opción correcta y escribe la forma adecuada:"
                else:
                    prompt = "Escribe la forma verbal o gramatical correcta (conjugación, plural, etc.):"
            else:
                prompts = [
                    "Completa la frase correctamente:",
                    "Rellena el hueco con la respuesta adecuada:",
                    "Escribe la palabra que falta para completar la oración:"
                ]
                prompt = random.choice(prompts)

            exercises.append({
                "interaction_id": interaction_id,
                "type": "transformation",
                "prompt_es": prompt,
                "stimulus_en": stimulus,
                "correct_answer": correct,
                "feedback_correct_es": "¡Excelente trabajo!",
                "mastery_tag": "grammar"
            })

        elif type_idx == 3: # True/False (Grammar/Logic)
            sentence = random.choice(sentence_pool)
            is_correct = random.choice([True, False]) 
            
            display_sentence = sentence
            if not is_correct:
                # Targeted B1 errors: wrong tense, missing auxiliary, spelling, word order
                error_type = random.randint(1, 6)
                if error_type == 1 and "used to" in sentence:
                    display_sentence = sentence.replace("used to", "use to")
                elif error_type == 2 and "usually" in sentence:
                    display_sentence = sentence.replace("usually", "usual")
                elif error_type == 3 and "ing" in sentence:
                    display_sentence = sentence.replace("ing", "") # Missing gerund
                elif error_type == 4 and " have " in sentence:
                    display_sentence = sentence.replace(" have ", " has ") # S-V agreement error
                elif error_type == 5 and " been " in sentence:
                    display_sentence = sentence.replace(" been ", " be ") # Wrong participle
                elif error_type == 6 and " don't " in sentence:
                    display_sentence = sentence.replace(" don't ", " doesn't ")
                elif error_type == 7 and " doesn't " in sentence:
                    display_sentence = sentence.replace(" doesn't ", " don't ")
                else:
                    words = sentence.split()
                    if len(words) > 4:
                        # Swap words to create word order error
                        idx = random.randint(1, len(words) - 2)
                        words[idx], words[idx+1] = words[idx+1], words[idx]
                        display_sentence = " ".join(words)
                    else:
                        display_sentence = sentence + " ?" # Incorrect punctuation
            
            exercises.append({
                "interaction_id": interaction_id,
                "type": "true_false",
                "prompt_es": f"¿Es gramaticalmente correcta la siguiente frase?: \"{display_sentence}\"",
                "correct_answer": is_correct,
                "feedback_correct_es": "¡Correcto! Has detectado bien el error o la corrección.",
                "feedback_incorrect_es": "Revisa bien la estructura de los tiempos verbales B1.",
                "mastery_tag": "grammar"
            })

        elif type_idx == 4: # Reorder Words (Syntax)
            original_sentence = random.choice(sentence_pool).replace(".", "").replace(",", "")
            words = original_sentence.split()
            options = [{"id": f"w{idx}", "text": word} for idx, word in enumerate(words)]
            correct_order = [opt["id"] for opt in options]
            shuffled_options = list(options)
            random.shuffle(shuffled_options)
            
            exercises.append({
                "interaction_id": interaction_id,
                "type": "reorder_words",
                "prompt_es": "Ordena las palabras para formar una frase coherente y gramaticalmente correcta:",
                "options": shuffled_options,
                "correct_answer": correct_order,
                "mastery_tag": "syntax"
            })

        else: # Multiple Choice (Communication/Context)
            comm_pool = data.get("communication", [])
            
            if comm_pool:
                stimulus, correct, distractors = random.choice(comm_pool)
                options = [{"id": "c1", "text": correct}]
                for idx, dist in enumerate(distractors):
                    options.append({"id": f"c{idx+2}", "text": dist})
                random.shuffle(options)
                correct_id = [opt["id"] for opt in options if opt["text"] == correct][0]
                
                exercises.append({
                    "interaction_id": interaction_id,
                    "type": "multiple_choice",
                    "prompt_es": "Elige la respuesta más natural para esta situación:",
                    "stimulus_en": f"Speaker A: \"{stimulus}\"",
                    "options": options,
                    "correct_answer": correct_id,
                    "feedback_correct_es": "¡Muy bien! Es una respuesta natural y educada.",
                    "mastery_tag": "communication"
                })
            else:
                # Fallback to generic but slightly better logic
                sentence = random.choice(sentence_pool)
                responses_pool = [
                    ("r1", "That's a great idea! I'd love to."),
                    ("r2", "I completely agree, it makes sense."),
                    ("r3", "Could you tell me more? I'm curious."),
                    ("r4", "Really? I had no idea about that."),
                    ("r5", "That sounds interesting, tell me more."),
                    ("r10", "That's a pity. I'm sorry to hear that."),
                    ("r15", "That's very kind of you to offer."),
                    ("r19", "That would be perfect, thank you.")
                ]
                selected_responses = random.sample(responses_pool, 3)
                correct_idx = random.randint(0, 2)
                correct_id = selected_responses[correct_idx][0]
                
                exercises.append({
                    "interaction_id": interaction_id,
                    "type": "multiple_choice",
                    "prompt_es": "Elige la respuesta más natural para esta situación:",
                    "stimulus_en": f"Speaker A: \"{sentence}\"",
                    "options": [{"id": r[0], "text": r[1]} for r in selected_responses],
                    "correct_answer": correct_id,
                    "feedback_correct_es": "¡Muy bien! Es una respuesta natural y educada.",
                    "mastery_tag": "communication"
                })
            
    return exercises

def main():
    os.makedirs(COURSE_DIR, exist_ok=True)
    for unit_id in range(1, UNITS_COUNT + 1):
        unit_data = {
            "course": {
                "language_ui": "es-ES",
                "target_language": "en",
                "level": "B1",
                "unit_id": f"U{unit_id}",
                "unit_title": UNIT_TITLES.get(unit_id, f"B1 Unit {unit_id}"),
                "total_duration_minutes": 600
            },
            "learning_outcomes": [
                f"Understand and use B1 {UNIT_TITLES[unit_id]} vocabulary",
                "Apply B1 grammar structures in context",
                "Develop communicative competence"
            ],
            "mastery_tags": ["grammar", "vocabulary", "syntax", "communication"],
            "blocks": [
                {
                    "block_id": f"B1_UNIT_{unit_id}_PRACTICE",
                    "title": f"B1 Practice: {UNIT_TITLES[unit_id]}",
                    "duration_minutes": 600,
                    "content": generate_exercises(unit_id, EXERCISES_PER_UNIT)
                }
            ]
        }
        
        file_path = os.path.join(COURSE_DIR, f"unit{unit_id}.json")
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(unit_data, f, indent=2, ensure_ascii=False)
        print(f"Generated unit{unit_id}.json with real B1 content.")

if __name__ == "__main__":
    main()
