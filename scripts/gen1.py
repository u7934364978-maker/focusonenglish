#!/usr/bin/env python3
"""
Job Course Generator for Focus-on-English
Generates TypeScript exercise files for camarero, recepcionista, logistica courses (A1-B2)
"""
import os, textwrap

BASE = "/Users/lidia/ZenflowProjects/new-project/focusonenglish/src/lib/course"

COURSES = {
    "camarero": {
        "name": "Camarero",
        "name_es": "Camarero / Restaurante",
        "a1": {
            "units": [
                {"n":1,"title_es":"Saludos en el restaurante","title_en":"Restaurant Greetings","topic":"Restaurant Basics","grammar_topic":"Present Simple (to be)","vocab_topic":"Greetings & Welcome",
                 "vocab":[("good morning","buenos días"),("good afternoon","buenas tardes"),("good evening","buenas noches"),("welcome","bienvenido"),("table","mesa"),("chair","silla"),("menu","carta"),("waiter","camarero"),("customer","cliente"),("restaurant","restaurante")],
                 "grammar_notes":"Use 'Good morning/afternoon/evening' to greet customers. 'Welcome to our restaurant' is key phrase.",
                 "reading_text":"Carlos is a waiter at La Bella Noche restaurant. Every morning he arrives at 8 o'clock. He says 'Good morning' to his colleagues and 'Welcome to our restaurant' to customers. He always smiles and helps customers find a table.",
                 "listening_text":"Good evening! Welcome to La Bella Noche. My name is Miguel and I am your waiter tonight. How many people are in your party? Two people? Perfect. Please follow me to your table. Here is your menu. Can I get you some water to start?",
                 "speaking_phrases":["Good morning, welcome to our restaurant.","My name is Ana, I am your waiter.","How many people are in your party?","Please follow me to your table.","Here is your menu."]},
                {"n":2,"title_es":"Tomar pedidos de bebidas","title_en":"Taking Drink Orders","topic":"Drink Orders","grammar_topic":"Would like / Can I",
                 "vocab_topic":"Drinks Vocabulary",
                 "vocab":[("water","agua"),("wine","vino"),("beer","cerveza"),("juice","zumo"),("coffee","café"),("tea","té"),("sparkling water","agua con gas"),("still water","agua sin gas"),("soft drink","refresco"),("orange juice","zumo de naranja")],
                 "grammar_notes":"Use 'Would you like...' to offer and 'Can I get you...' to take orders.",
                 "reading_text":"A good waiter always asks customers about their drinks first. 'Can I get you something to drink?' is a common question. Customers can order water, juice, wine or soft drinks. It is important to repeat the order back to the customer to confirm it is correct.",
                 "listening_text":"Good afternoon. My name is Sara and I will be your server today. Can I start you off with something to drink? We have still water, sparkling water, fresh orange juice, and a selection of wines and beers. What would you like?",
                 "speaking_phrases":["Can I get you something to drink?","Would you like still or sparkling water?","We have orange juice, apple juice, and lemonade.","Would you like to see our wine list?","I will be right back with your drinks."]},
                {"n":3,"title_es":"Tomar pedidos de comida","title_en":"Taking Food Orders","topic":"Food Orders","grammar_topic":"Present Simple (questions)","vocab_topic":"Food & Menu",
                 "vocab":[("starter","entrante"),("main course","plato principal"),("dessert","postre"),("salad","ensalada"),("soup","sopa"),("steak","filete"),("chicken","pollo"),("fish","pescado"),("vegetarian","vegetariano"),("allergy","alergia")],
                 "grammar_notes":"Use 'Are you ready to order?' and 'What would you like for your main course?'",
                 "reading_text":"Taking a food order requires careful listening. The waiter asks 'Are you ready to order?' When customers choose their meals, the waiter writes everything down. At the end, the waiter reads back the order to check it is correct. This avoids mistakes in the kitchen.",
                 "listening_text":"Are you ready to order? I would like the tomato soup as a starter, please. And for the main course, I will have the grilled chicken with vegetables. Does it come with a salad? Yes, it comes with a mixed salad. Excellent. And for dessert? I will decide later, thank you.",
                 "speaking_phrases":["Are you ready to order?","What would you like for your starter?","And for the main course?","Do you have any allergies?","Let me repeat your order to confirm."]},
                {"n":4,"title_es":"Cobrar y despedirse","title_en":"Payment & Farewell","topic":"Payment","grammar_topic":"Can / Could (requests)","vocab_topic":"Payment Vocabulary",
                 "vocab":[("bill","cuenta"),("receipt","recibo"),("tip","propina"),("cash","efectivo"),("credit card","tarjeta de crédito"),("change","cambio"),("total","total"),("pay","pagar"),("split the bill","dividir la cuenta"),("thank you","gracias")],
                 "grammar_notes":"Use 'Could I have the bill, please?' and 'Shall I split the bill?'",
                 "reading_text":"At the end of a meal, customers ask for the bill. The waiter brings it quickly. In Spain, it is common to pay at the table. The waiter asks 'How would you like to pay — cash or card?' Tips are appreciated but not always expected. The waiter says 'Thank you and goodbye' when customers leave.",
                 "listening_text":"Excuse me, could we have the bill please? Of course! Here you are. The total is forty-two euros. Will you be paying by cash or card? We will pay by card. Certainly. Here is the card machine. Thank you very much. Have a lovely evening. Goodbye!",
                 "speaking_phrases":["Here is your bill.","The total comes to forty euros.","Would you like to pay by cash or card?","Thank you very much for coming.","We hope to see you again soon."]}
            ]
        },
        "a2": {
            "units": [
                {"n":1,"title_es":"Describir platos del menú","title_en":"Describing Menu Items","topic":"Menu Description","grammar_topic":"Adjectives & Descriptions","vocab_topic":"Taste & Texture",
                 "vocab":[("tender","tierno"),("crispy","crujiente"),("spicy","picante"),("mild","suave"),("fresh","fresco"),("grilled","a la parrilla"),("roasted","asado"),("creamy","cremoso"),("rich","rico/intenso"),("light","ligero")],
                 "grammar_notes":"Use adjectives before nouns: 'fresh grilled salmon', 'creamy mushroom sauce'. Use 'It comes with...' for accompaniments.",
                 "reading_text":"Our restaurant is famous for its fresh ingredients. The chef uses locally sourced vegetables and fish from the coast. The grilled sea bass comes with a creamy lemon sauce and crispy roasted potatoes. Our homemade desserts are light and delicious.",
                 "listening_text":"I can recommend the lamb chops today — they are very tender and served with a rich red wine sauce and roasted vegetables. If you prefer something lighter, the grilled sea bass is excellent. It has a mild, fresh flavor with a hint of lemon. Which one appeals to you?",
                 "speaking_phrases":["I recommend the grilled salmon — it is very fresh today.","It comes with crispy potatoes and a light herb sauce.","The sauce is creamy but not too heavy.","This dish has a mild, delicate flavor.","It is one of our most popular dishes."]},
                {"n":2,"title_es":"Gestionar quejas","title_en":"Handling Complaints","topic":"Complaints","grammar_topic":"Apologizing & Offering Solutions","vocab_topic":"Complaint Language",
                 "vocab":[("apologize","disculparse"),("complaint","queja"),("overcooked","demasiado cocinado"),("cold","frío"),("wrong order","pedido incorrecto"),("replace","reemplazar"),("discount","descuento"),("manager","encargado"),("mistake","error"),("immediately","inmediatamente")],
                 "grammar_notes":"Use 'I am so sorry about that. Let me...' and 'I will take care of it immediately.'",
                 "reading_text":"Complaints happen in every restaurant. A professional waiter stays calm and listens carefully. They do not argue with the customer. Instead, they apologize sincerely and offer a solution. Common solutions include replacing the dish, offering a discount, or bringing the manager.",
                 "listening_text":"Excuse me, I think there is a problem with my steak. It is overcooked — I asked for medium rare but this is very well done. I am so sorry about that. I will take it back to the kitchen immediately and bring you a new one. Can I get you anything while you wait — perhaps some bread or another drink?",
                 "speaking_phrases":["I am so sorry about that.","Let me take it back to the kitchen right away.","I will replace it immediately.","Can I offer you something while you wait?","I will speak to the manager for you."]},
                {"n":3,"title_es":"Requisitos dietéticos","title_en":"Dietary Requirements","topic":"Dietary Needs","grammar_topic":"Modal Verbs (can, cannot)","vocab_topic":"Dietary Vocabulary",
                 "vocab":[("gluten-free","sin gluten"),("dairy-free","sin lácteos"),("nut allergy","alergia a los frutos secos"),("vegan","vegano"),("vegetarian","vegetariano"),("halal","halal"),("kosher","kosher"),("intolerance","intolerancia"),("contain","contener"),("ingredient","ingrediente")],
                 "grammar_notes":"Use 'Does this dish contain...?' and 'This dish cannot be made without...' and 'We can prepare it without...'",
                 "reading_text":"Today many customers have special dietary requirements. Some are vegetarian or vegan. Others have allergies to nuts, gluten, or dairy. A good waiter always asks about allergies before recommending a dish. It is important to check with the chef if a dish can be modified.",
                 "listening_text":"Before I take your order, I need to ask — do you have any food allergies or dietary requirements? Yes, I am gluten intolerant and I cannot eat nuts. Of course. Let me tell you which dishes are safe for you. Our grilled fish is gluten-free and contains no nuts. The pasta dishes, however, are not suitable.",
                 "speaking_phrases":["Do you have any food allergies?","This dish contains nuts — would that be a problem?","We can prepare it without the sauce.","I will check with the chef for you.","This dish is suitable for vegetarians."]},
                {"n":4,"title_es":"Recomendaciones del restaurante","title_en":"Restaurant Recommendations","topic":"Recommendations","grammar_topic":"Making Suggestions","vocab_topic":"Recommendation Language",
                 "vocab":[("recommend","recomendar"),("suggest","sugerir"),("popular","popular"),("specialty","especialidad"),("daily special","plato del día"),("in season","de temporada"),("house wine","vino de la casa"),("best seller","el más vendido"),("pairing","maridaje"),("perfect for","perfecto para")],
                 "grammar_notes":"Use 'I would recommend...', 'Our chef suggests...', 'The house specialty is...'",
                 "reading_text":"Customers often ask waiters for recommendations. A knowledgeable waiter knows the menu well and can suggest the best options based on the customer's preferences. Today's special is always a good choice because it is fresh and often the best value on the menu.",
                 "listening_text":"I am not sure what to order. Can you recommend something? Of course! Our house specialty today is the roasted lamb with rosemary — it is absolutely delicious and very popular. If you prefer fish, the sea bass is excellent and in season right now. For wine, I would suggest the house Rioja — it pairs beautifully with both dishes.",
                 "speaking_phrases":["Our daily special today is the roasted lamb.","I would highly recommend the sea bass.","The house wine pairs perfectly with this dish.","This is our most popular dessert.","The chef's specialty is the chocolate fondant."]}
            ]
        },
        "b1": {
            "units": [
                {"n":1,"title_es":"Pedidos complejos y modificaciones","title_en":"Complex Orders & Modifications","topic":"Advanced Orders","grammar_topic":"Conditional Sentences","vocab_topic":"Order Modifications",
                 "vocab":[("on the side","aparte"),("well done","muy hecho"),("medium rare","al punto"),("substitute","sustituir"),("portion size","tamaño de la ración"),("extra","extra"),("without","sin"),("instead of","en lugar de"),("half portion","media ración"),("to go","para llevar")],
                 "grammar_notes":"Use conditionals: 'If you prefer it without sauce, I can ask the chef.' 'Would it be possible to have the salad on the side?'",
                 "reading_text":"At a busy restaurant, waiters handle many special requests. Some customers want their steak well done while others prefer it medium rare. Some ask for sauces on the side. A professional waiter handles all these modifications efficiently and communicates them clearly to the kitchen using a ticket system.",
                 "listening_text":"I would like the pasta but could I have the sauce on the side? And instead of the salad, could I have extra vegetables? Also, I am lactose intolerant, so is it possible to make it without the cheese? Of course, no problem at all. So that is pasta with sauce on the side, extra vegetables instead of salad, and no cheese. Is that correct?",
                 "speaking_phrases":["Of course, I can ask the chef to prepare it without the cheese.","Would you like the dressing on the side?","I can substitute the fries for a salad.","That will be medium rare with vegetables on the side.","I will make sure the kitchen knows about your modifications."]},
                {"n":2,"title_es":"Vinos y maridaje","title_en":"Wine & Food Pairing","topic":"Wine Service","grammar_topic":"Passive Voice","vocab_topic":"Wine Vocabulary",
                 "vocab":[("vintage","añada"),("full-bodied","de cuerpo pleno"),("light-bodied","ligero"),("tannins","taninos"),("dry","seco"),("sweet","dulce"),("oak-aged","envejecido en roble"),("grape variety","variedad de uva"),("cellar","bodega"),("decant","decantar")],
                 "grammar_notes":"Use passive: 'This wine is produced in the Rioja region.' 'It has been aged for twelve months in oak barrels.'",
                 "reading_text":"Wine service is an important part of fine dining. A sommelier or experienced waiter can recommend wines to complement each dish. White wines are generally served with fish and seafood. Red wines pair well with red meat and rich sauces. The temperature of the wine and the way it is served also affect its flavor.",
                 "listening_text":"I see you are having the duck confit. May I suggest a wine to go with that? We have an excellent Bordeaux that is aged eighteen months in oak barrels. It is full-bodied with notes of cherry and tobacco — it pairs beautifully with duck. Would you like to try a small taste before deciding?",
                 "speaking_phrases":["This wine is produced in the Rioja region.","It has been aged twelve months in oak barrels.","I recommend a full-bodied red with the lamb.","Shall I decant the wine for you?","This Chardonnay pairs beautifully with the fish."]},
                {"n":3,"title_es":"Recuperación del servicio","title_en":"Service Recovery","topic":"Problem Resolution","grammar_topic":"Conditionals & Apologizing","vocab_topic":"Service Language",
                 "vocab":[("compensate","compensar"),("complimentary","de cortesía"),("refund","reembolso"),("inconvenience","inconveniencia"),("rectify","rectificar"),("feedback","retroalimentación"),("resolve","resolver"),("priority","prioridad"),("genuine","genuino"),("empathy","empatía")],
                 "grammar_notes":"Use 'I completely understand your frustration.' 'I will personally ensure this is resolved.' 'As a gesture of goodwill, we would like to offer...'",
                 "reading_text":"Service recovery is the process of fixing a problem after something has gone wrong. The best waiters and managers turn a bad experience into a positive one. They listen actively, take responsibility, and act quickly. Offering a complimentary dessert or a discount on the bill can turn an unhappy customer into a loyal one.",
                 "listening_text":"I am very sorry to hear that your experience this evening was not up to our usual standards. I completely understand your frustration. The delay in your food was unacceptable and I take full responsibility. As a gesture of goodwill, I would like to offer you a complimentary dessert and take ten percent off your bill tonight.",
                 "speaking_phrases":["I completely understand your frustration.","I take full responsibility for this situation.","I will personally ensure this is resolved immediately.","As a gesture of goodwill, this dessert is on the house.","Your feedback helps us improve our service."]},
                {"n":4,"title_es":"Técnicas de venta","title_en":"Upselling Techniques","topic":"Upselling","grammar_topic":"Suggestions & Offers","vocab_topic":"Sales Language",
                 "vocab":[("upsell","venta adicional"),("upgrade","mejorar"),("premium","premium"),("add-on","complemento"),("tempting","tentador"),("indulge","darse un capricho"),("worth it","merece la pena"),("exclusive","exclusivo"),("limited time","tiempo limitado"),("pair with","maridar con")],
                 "grammar_notes":"Use 'You might also enjoy...', 'Many of our guests love...', 'Would you like to try...?'",
                 "reading_text":"Upselling means suggesting additional items to increase the value of a customer's meal. A skilled waiter does this naturally, without pressure. They might say 'Many guests love our homemade bread with olive oil as a starter' or 'Would you like to add a glass of wine with that?' Good upselling benefits both the customer and the restaurant.",
                 "listening_text":"Before I bring your starters, may I suggest our homemade focaccia with olive oil? It is absolutely delicious and very popular. Also, I noticed you are having the steak — we have a wonderful Malbec that pairs perfectly with it. Many of our guests say it really enhances the flavor of the meat. Would you like to try a glass?",
                 "speaking_phrases":["Would you like to start with some homemade bread?","Many of our guests love this with the steak.","Could I suggest a glass of our house Malbec?","Would you like to try our chef's dessert special?","This is very popular and only available tonight."]}
            ]
        },
        "b2": {
            "units": [
                {"n":1,"title_es":"Protocolo de alta gastronomía","title_en":"Fine Dining Protocol","topic":"Fine Dining","grammar_topic":"Formal Language & Register","vocab_topic":"Fine Dining Vocabulary",
                 "vocab":[("tasting menu","menú degustación"),("amuse-bouche","aperitivo del chef"),("mise en place","mise en place"),("sommelier","sumiller"),("maître d'","maitre"),("tableside preparation","preparación en mesa"),("silver service","servicio de plata"),("napkin fold","doblez de servilleta"),("finger bowl","cuenco para dedos"),("palate cleanser","limpiador de paladar")],
                 "grammar_notes":"Fine dining requires very formal language: 'May I present your...', 'Allow me to describe...', 'The chef has prepared...'",
                 "reading_text":"Fine dining is an art form that requires years of training. The maître d' manages the dining room and ensures every detail is perfect. Waiters in fine dining restaurants must have extensive knowledge of the menu, wine, and service protocols. The experience must be seamless, with timing and precision being essential.",
                 "listening_text":"Good evening and welcome to Le Jardin. My name is Antoine and I have the pleasure of being your maître d' this evening. Allow me to present your amuse-bouche — a delicate cucumber gazpacho with a hint of mint, compliments of Chef Laurent. This will prepare your palate for the tasting menu we have prepared for you tonight.",
                 "speaking_phrases":["Allow me to present tonight's tasting menu.","The chef has prepared an amuse-bouche for your table.","May I describe the next course?","This dish is prepared tableside for your enjoyment.","The sommelier will now present your wine pairing."]},
                {"n":2,"title_es":"Creación y descripción de menús","title_en":"Menu Creation & Description","topic":"Menu Development","grammar_topic":"Descriptive Writing","vocab_topic":"Culinary Terms",
                 "vocab":[("seasonal","de temporada"),("locally sourced","de proximidad"),("artisan","artesanal"),("heritage","herencia"),("provenance","procedencia"),("cured","curado"),("marinated","marinado"),("infused","infusionado"),("reduction","reducción"),("emulsion","emulsión")],
                 "grammar_notes":"Use rich descriptive language: 'slow-cooked heritage beef', 'infused with aromatic herbs', 'a delicate reduction of aged balsamic'",
                 "reading_text":"Writing a menu is a creative and commercial exercise. A well-written menu describes dishes in an appealing way that makes customers want to try them. Using words like 'seasonal', 'locally sourced', and 'artisan' communicates quality and care. The menu also needs to be organized logically and priced competitively.",
                 "listening_text":"For our autumn menu, we are featuring a slow-cooked heritage pork belly, marinated for twenty-four hours in aromatic herbs and spices. It is served with a delicate apple and cider reduction and a celeriac purée infused with truffle oil. The provenance of all our ingredients is listed on the back of the menu.",
                 "speaking_phrases":["This dish features locally sourced heritage beef.","The sauce is a slow reduction of our house red wine.","We use only seasonal, sustainably sourced ingredients.","The chef has infused the cream with lavender and vanilla.","Every ingredient on this menu has a traceable provenance."]},
                {"n":3,"title_es":"Liderazgo de equipo","title_en":"Team Leadership","topic":"Team Management","grammar_topic":"Reported Speech","vocab_topic":"Management Language",
                 "vocab":[("briefing","reunión informativa"),("delegation","delegación"),("performance","rendimiento"),("motivation","motivación"),("feedback","retroalimentación"),("roster","turno/horario"),("floor manager","jefe de sala"),("coordinate","coordinar"),("efficiency","eficiencia"),("standards","estándares")],
                 "grammar_notes":"Use reported speech in briefings: 'The manager told us to...', 'She said that the VIP table would arrive at eight.'",
                 "reading_text":"Running a restaurant floor requires strong leadership skills. The floor manager coordinates the team, assigns tables, and monitors the quality of service. During the pre-service briefing, they inform staff about the day's specials, VIP guests, and any special requirements. Clear communication prevents errors and ensures consistent standards.",
                 "listening_text":"Listen up, everyone. Tonight we have a fully booked dining room and two VIP tables. The mayor and his party will arrive at eight thirty — table twelve is reserved for them. I need our best waiter on that section. Also, the kitchen has told me that the sea bass is sold out, so stop recommending it. Any questions? Let's have an excellent service.",
                 "speaking_phrases":["During tonight's briefing, I reminded the team about the VIP guests.","The manager said that standards must be maintained at all times.","I delegated the wine service to our most experienced waiter.","She told us that the kitchen was running ten minutes behind.","We need to coordinate better between the floor and the kitchen."]},
                {"n":4,"title_es":"Gestión de relaciones con clientes","title_en":"Customer Relationship Management","topic":"CRM & Loyalty","grammar_topic":"Complex Conditionals","vocab_topic":"Loyalty & Retention Language",
                 "vocab":[("loyalty program","programa de fidelidad"),("returning guest","cliente habitual"),("preferences","preferencias"),("personalized service","servicio personalizado"),("reservation notes","notas de reserva"),("birthday","cumpleaños"),("anniversary","aniversario"),("complaint resolution","resolución de quejas"),("goodwill gesture","gesto de buena voluntad"),("retention","retención")],
                 "grammar_notes":"Use complex conditionals and formal language: 'Had the table been prepared earlier, the guest would not have waited.' 'Were we to offer a complimentary dish...'",
                 "reading_text":"Building long-term relationships with customers is essential for a successful restaurant. When a regular guest arrives, staff should greet them by name and remember their preferences. A good CRM system records details like food allergies, favorite tables, and special occasions. This personalized service makes guests feel valued and encourages them to return.",
                 "listening_text":"Mr. Garcia will be dining with us on Friday — it is his wedding anniversary. His file shows he prefers table seven by the window, he drinks Rioja, and his wife is vegetarian. I would like you to arrange a complimentary dessert with a candle for them. Had we not kept these notes, we would have missed this opportunity to make their evening truly special.",
                 "speaking_phrases":["Welcome back, Mr. Garcia — wonderful to see you again.","I have arranged your usual table by the window.","I noticed it is a special occasion — congratulations!","We have noted your preferences for your next visit.","Had we known earlier, we would have prepared a special menu."]}
            ]
        }
    }
}

print("Course data loaded for camarero")

COURSES["recepcionista"] = {
    "name": "Recepcionista",
    "name_es": "Recepcionista / Hotel",
    "a1": {
        "units": [
            {"n":1,"title_es":"Recibir a los huéspedes","title_en":"Welcoming Guests","topic":"Guest Welcome","grammar_topic":"Present Simple (to be)","vocab_topic":"Hotel Reception Basics",
             "vocab":[("reception","recepción"),("guest","huésped"),("check in","registrarse"),("check out","hacer el checkout"),("booking","reserva"),("room","habitación"),("key card","tarjeta llave"),("floor","planta"),("lift","ascensor"),("lobby","vestíbulo")],
             "grammar_notes":"Use 'Welcome to our hotel', 'How can I help you?', 'Do you have a reservation?'",
             "reading_text":"Maria works at the reception desk of Hotel Plaza. When guests arrive, she smiles and says 'Welcome to Hotel Plaza. How can I help you?' She asks for their name and checks their reservation. Then she gives them a key card and explains where their room is.",
             "listening_text":"Good afternoon and welcome to Hotel Plaza! Do you have a reservation with us? Yes, my name is James Wilson. Let me look that up for you, Mr. Wilson. Yes, I can see your reservation — a double room for three nights. Could I see your passport or ID, please? Thank you. Here is your key card. Your room is 304, on the third floor. The lift is just to your right.",
             "speaking_phrases":["Welcome to Hotel Plaza!","Do you have a reservation?","Could I see your ID please?","Here is your key card.","Your room is on the third floor."]},
            {"n":2,"title_es":"Proceso de check-in","title_en":"Check-in Process","topic":"Check-in","grammar_topic":"Questions & Forms","vocab_topic":"Check-in Vocabulary",
             "vocab":[("passport","pasaporte"),("signature","firma"),("deposit","depósito"),("credit card","tarjeta de crédito"),("arrival date","fecha de llegada"),("departure date","fecha de salida"),("single room","habitación individual"),("double room","habitación doble"),("twin room","habitación con dos camas"),("suite","suite")],
             "grammar_notes":"Use 'Could you fill in this form?', 'How will you be paying?', 'When are you planning to check out?'",
             "reading_text":"The check-in process at a hotel involves several steps. First, the receptionist confirms the reservation and the room type. Then the guest fills in a registration form with their name, address, and ID number. The receptionist takes a credit card for incidental charges. Finally, they explain the hotel facilities and give the guest their key.",
             "listening_text":"Could you fill in this registration form, please? Of course. I also need to take a credit card for any incidental charges during your stay. We will not charge it unless you use room service or the minibar. How will you be paying for the room itself — cash or card? By card, please. Excellent. And when are you planning to check out? On Sunday morning.",
             "speaking_phrases":["Could you fill in this registration form?","I need a credit card for incidentals.","We have you booked for four nights.","Breakfast is served from seven to ten in the restaurant.","Please call reception if you need anything."]},
            {"n":3,"title_es":"Información de la habitación","title_en":"Room Information","topic":"Room Facilities","grammar_topic":"There is / There are","vocab_topic":"Room Amenities",
             "vocab":[("minibar","minibar"),("air conditioning","aire acondicionado"),("safe","caja fuerte"),("TV","televisión"),("Wi-Fi","wifi"),("bathroom","cuarto de baño"),("bath","bañera"),("shower","ducha"),("balcony","balcón"),("room service","servicio de habitaciones")],
             "grammar_notes":"Use 'There is a...' and 'There are...' to describe room features.",
             "reading_text":"Modern hotel rooms have many facilities. There is usually a minibar with drinks and snacks. There is also a safe for valuable items. The bathroom has both a bath and a shower. There is air conditioning with a remote control. Guests can connect to Wi-Fi using the code on the welcome card.",
             "listening_text":"Let me tell you about your room. There is a minibar in the wardrobe — all items are listed with prices on the card. There is a safe next to the minibar for your valuables. The Wi-Fi password is on your welcome card. There is also a balcony with a lovely view of the garden. Room service is available twenty-four hours a day.",
             "speaking_phrases":["There is a minibar with drinks and snacks.","There are two keys — one for you and one for your partner.","The Wi-Fi password is on the welcome card.","There is a safe in the wardrobe for your valuables.","Room service is available around the clock."]},
            {"n":4,"title_es":"Llamadas telefónicas","title_en":"Phone Calls at Reception","topic":"Phone Communication","grammar_topic":"Present Simple (offers)","vocab_topic":"Phone Vocabulary",
             "vocab":[("hold on","espere un momento"),("transfer","transferir"),("extension","extensión"),("message","mensaje"),("urgent","urgente"),("call back","devolver la llamada"),("wake-up call","llamada de despertador"),("operator","operador"),("directory","directorio"),("voicemail","buzón de voz")],
             "grammar_notes":"Phone language: 'Hotel Plaza, good morning, how can I help you?', 'Could you hold the line, please?', 'I will transfer you now.'",
             "reading_text":"Receptionists answer many phone calls every day. They must speak clearly and professionally on the phone. When a call comes in, they say the hotel name and their greeting. If they need to transfer a call, they say 'Please hold' and then connect the caller to the right department. They can also take messages if a guest is not available.",
             "listening_text":"Hotel Plaza, good morning, this is Ana speaking, how can I help you? Hello, I would like to arrange a wake-up call for tomorrow morning at six thirty, please. Of course. Could you give me your room number? Room 215. Perfect, Mr. Johnson. We will call you at six thirty tomorrow morning. Is there anything else I can help you with?",
             "speaking_phrases":["Hotel Plaza, good morning, how can I help you?","Could you hold the line, please?","I will transfer you to the restaurant.","I can take a message if you like.","We will arrange your wake-up call for six thirty."]}
        ]
    },
    "a2": {
        "units": [
            {"n":1,"title_es":"Gestión de reservas","title_en":"Managing Reservations","topic":"Reservations","grammar_topic":"Future Tenses","vocab_topic":"Booking Vocabulary",
             "vocab":[("availability","disponibilidad"),("fully booked","completo"),("cancellation","cancelación"),("modification","modificación"),("confirmation","confirmación"),("advance booking","reserva anticipada"),("late arrival","llegada tardía"),("early check-in","check-in anticipado"),("late check-out","check-out tardío"),("policy","política")],
             "grammar_notes":"Use future tenses: 'We will hold your reservation until midnight.', 'Your room will be ready at three o'clock.'",
             "reading_text":"Managing reservations requires attention to detail. Receptionists must check availability, confirm bookings, and handle modifications and cancellations. When a room is not available, they offer alternative options. They always send a confirmation by email with all the booking details.",
             "listening_text":"I would like to make a reservation for next weekend. Certainly. What type of room are you looking for? A double room for two nights — Friday and Saturday. Let me check availability... Yes, we have a standard double room available at 120 euros per night, or a superior double with a sea view at 150 euros. Which would you prefer?",
             "speaking_phrases":["I will check availability for those dates.","We have a double room available at 120 euros per night.","I will send you a confirmation by email.","Your reservation will be held until six in the evening.","Would you like early check-in? There is a small additional charge."]},
            {"n":2,"title_es":"Servicios para huéspedes","title_en":"Guest Services","topic":"Concierge","grammar_topic":"Making Recommendations","vocab_topic":"Services Vocabulary",
             "vocab":[("concierge","conserje"),("recommend","recomendar"),("reservation","reserva"),("taxi","taxi"),("transfer","traslado"),("sightseeing","turismo"),("guided tour","visita guiada"),("map","mapa"),("directions","indicaciones"),("luggage storage","consigna de equipaje")],
             "grammar_notes":"Use 'I would recommend...', 'The best way to get there is...', 'I can arrange a taxi for you.'",
             "reading_text":"Concierge services help guests enjoy their stay. The concierge can recommend restaurants, arrange taxis, book theatre tickets, and provide maps and directions. A knowledgeable concierge knows the city well and can suggest the best attractions, restaurants, and shops for each type of guest.",
             "listening_text":"Excuse me, could you recommend a good restaurant near the hotel? Of course! For traditional Spanish food, I would suggest La Taberna — it is a five-minute walk from here. I would also recommend booking in advance as it gets very busy. Shall I make a reservation for you? What time were you thinking? Around eight o'clock?",
             "speaking_phrases":["I would recommend La Taberna for traditional Spanish cuisine.","The best way to get to the museum is by metro.","I can arrange a taxi to the airport for you.","The guided tour of the old town starts at ten o'clock.","Would you like me to store your luggage while you explore?"]},
            {"n":3,"title_es":"Gestión de problemas","title_en":"Handling Guest Problems","topic":"Problem Solving","grammar_topic":"Apologizing & Solutions","vocab_topic":"Problem Language",
             "vocab":[("noise complaint","queja de ruido"),("maintenance","mantenimiento"),("repair","reparar"),("plumber","fontanero"),("heating","calefacción"),("air conditioning","aire acondicionado"),("upgrade","mejora de habitación"),("move rooms","cambiar de habitación"),("compensation","compensación"),("priority","prioridad")],
             "grammar_notes":"Use 'I am terribly sorry about the inconvenience.', 'I will send maintenance immediately.', 'Would you like me to move you to another room?'",
             "reading_text":"Problems can arise during any hotel stay. Common issues include noisy neighbors, broken equipment, or rooms not meeting expectations. A professional receptionist handles these calmly and efficiently. They apologize sincerely, take action immediately, and follow up to ensure the problem is resolved.",
             "listening_text":"Hello, this is Mrs. Thompson in room 412. I am afraid there is a problem with the air conditioning — it is not working and the room is very hot. I am so sorry to hear that, Mrs. Thompson. I will send our maintenance team up immediately. In the meantime, would you like me to move you to another room while we fix it? We could upgrade you to a superior room at no extra charge.",
             "speaking_phrases":["I am terribly sorry for the inconvenience.","I will send maintenance to your room immediately.","Would you like me to move you to another room?","I can offer you an upgrade as a gesture of goodwill.","I will follow up personally to ensure everything is sorted."]},
            {"n":4,"title_es":"Proceso de checkout","title_en":"Check-out Process","topic":"Check-out","grammar_topic":"Past Simple & Present Perfect","vocab_topic":"Check-out Vocabulary",
             "vocab":[("bill","factura"),("itemized","desglosado"),("dispute","disputar"),("minibar charge","cargo de minibar"),("VAT","IVA"),("receipt","recibo"),("express checkout","checkout exprés"),("luggage","equipaje"),("porter","botones"),("feedback","opinión")],
             "grammar_notes":"Use past simple: 'Did you enjoy your stay?', 'Was everything satisfactory?', 'Have you had breakfast this morning?'",
             "reading_text":"The check-out process is the last impression guests have of a hotel. A smooth and efficient check-out leaves a positive memory. The receptionist prepares the final bill, checks for any extra charges, and resolves any disputes quickly. They ask for feedback and invite the guest to return.",
             "listening_text":"Good morning, I would like to check out from room 215. Of course. Let me bring up your bill. You have three nights at 120 euros, plus minibar charges of 18 euros, which brings your total to 378 euros. Is everything correct? Actually, I think the minibar charge might be a mistake — I did not use it. Let me check that for you. You are right — I will remove that charge. Your new total is 360 euros.",
             "speaking_phrases":["Did you enjoy your stay with us?","Here is your itemized bill.","I can remove that charge — I apologize for the error.","Would you like a receipt by email?","We hope to welcome you back very soon."]}
        ]
    },
    "b1": {
        "units": [
            {"n":1,"title_es":"Servicios de conserjería","title_en":"Concierge Services","topic":"Advanced Concierge","grammar_topic":"Complex Recommendations","vocab_topic":"Premium Services",
             "vocab":[("butler","mayordomo"),("private transfer","traslado privado"),("spa","spa"),("personal shopper","comprador personal"),("helicopter","helicóptero"),("yacht charter","alquiler de yate"),("VIP lounge","sala VIP"),("chauffeur","chófer"),("itinerary","itinerario"),("exclusive","exclusivo")],
             "grammar_notes":"Use complex recommendations: 'Given your interest in art, I would strongly suggest...', 'You might find the private tour more rewarding than...'",
             "reading_text":"Premium concierge services go far beyond giving directions. A five-star concierge can arrange private transfers, book exclusive restaurants, organize helicopter tours, and even arrange meetings with local celebrities. The key is anticipating what guests want before they ask.",
             "listening_text":"Mr. Rothstein, I understand you are interested in exclusive experiences during your stay. I have taken the liberty of researching some options for you. Tomorrow, I can arrange a private yacht for the afternoon, with a personal chef. In the evening, I have secured a table at Chef Adrià's private dining room — it is normally fully booked six months in advance. Shall I confirm both?",
             "speaking_phrases":["I have taken the liberty of making a few arrangements for you.","Given your preferences, I would strongly suggest the private yacht tour.","I can secure a table at an exclusive restaurant that is normally impossible to book.","Your personal driver will be waiting at the main entrance at nine.","I have prepared a bespoke itinerary for your entire stay."]},
            {"n":2,"title_es":"Atención a huéspedes VIP","title_en":"VIP Guest Management","topic":"VIP Service","grammar_topic":"Formal & Diplomatic Language","vocab_topic":"VIP Terminology",
             "vocab":[("discretion","discreción"),("confidentiality","confidencialidad"),("protocol","protocolo"),("preferences profile","perfil de preferencias"),("personalized","personalizado"),("NDA","acuerdo de confidencialidad"),("entourage","séquito"),("suite","suite presidencial"),("amenity","amenidad"),("turndown service","servicio de cobertura")],
             "grammar_notes":"VIP language requires maximum discretion and formality: 'Of course, Mr. X, your privacy is our absolute priority.' 'Allow me to personally escort you.'",
             "reading_text":"VIP guests expect an exceptional and discreet level of service. Hotels maintain detailed preference profiles for returning VIP guests, noting everything from preferred pillow types to dietary requirements. All staff who interact with VIP guests must sign confidentiality agreements and receive special training in discretion and protocol.",
             "listening_text":"The VIP profile for Mr. Martinez indicates he prefers the presidential suite, a hypoallergenic pillow menu, and no feathers anywhere in the room. He drinks still water at room temperature, not chilled. His personal assistant has requested complete privacy and that no photographs be taken in the lobby. Please brief all floor staff before his arrival at six this evening.",
             "speaking_phrases":["Allow me to personally escort you to your suite.","Your preferences have been fully noted and arranged.","Your privacy is our absolute priority throughout your stay.","I have briefed all staff regarding your requirements.","Please do not hesitate to contact me personally at any hour."]},
            {"n":3,"title_es":"Situaciones de emergencia","title_en":"Emergency Situations","topic":"Emergency Procedures","grammar_topic":"Imperatives & Instructions","vocab_topic":"Emergency Vocabulary",
             "vocab":[("fire drill","simulacro de incendio"),("evacuation","evacuación"),("first aid","primeros auxilios"),("emergency exit","salida de emergencia"),("assembly point","punto de encuentro"),("defibrillator","desfibrilador"),("ambulance","ambulancia"),("police","policía"),("incident report","informe de incidente"),("duty manager","encargado de turno")],
             "grammar_notes":"Use clear imperatives in emergencies: 'Please remain calm.', 'Proceed immediately to the nearest exit.', 'Do not use the lifts.'",
             "reading_text":"Hotel receptionists must know emergency procedures thoroughly. In case of fire, they must call the fire brigade, trigger the alarm, and coordinate evacuation. They must account for all guests using the room occupancy list. Medical emergencies require calling an ambulance immediately and, if trained, administering first aid while waiting for help to arrive.",
             "listening_text":"Attention all staff — this is a fire alarm activation on the fourth floor. All guests must be directed to evacuate immediately using the stairwells. Do not use the lifts. The assembly point is the car park on the north side of the building. Reception staff, please bring the guest occupancy list. This is not a drill. Remain calm and professional at all times.",
             "speaking_phrases":["Please remain calm and follow the emergency procedure.","Proceed to the nearest emergency exit — do not use the lifts.","I am calling for an ambulance immediately.","Please make your way to the assembly point in the car park.","The duty manager will be with you immediately."]},
            {"n":4,"title_es":"Comunicación entre departamentos","title_en":"Inter-department Communication","topic":"Team Coordination","grammar_topic":"Reported Speech & Instructions","vocab_topic":"Departmental Language",
             "vocab":[("housekeeping","gobernanta/pisos"),("maintenance","mantenimiento"),("food and beverage","alimentos y bebidas"),("HR","recursos humanos"),("handover","traspaso de turno"),("briefing","reunión de equipo"),("shift","turno"),("log book","libro de registro"),("follow-up","seguimiento"),("escalate","escalar")],
             "grammar_notes":"Use reported speech for handovers: 'The previous shift reported that...', 'I have informed housekeeping that room 412 requires a deep clean.'",
             "reading_text":"Effective communication between hotel departments is essential for guest satisfaction. Reception serves as the hub, coordinating with housekeeping, maintenance, food and beverage, and concierge. All requests must be logged, followed up, and communicated during shift handovers. A detailed log book ensures no request is forgotten.",
             "listening_text":"Good morning team. Here is the handover from the night shift. Room 412 reported a leaking shower at two am — maintenance was called but the repair is not yet complete. I have informed the guest and offered a room change, which she declined. Housekeeping has been asked to prioritize room 206 — the guest is checking in at noon and requested early occupancy. Any questions?",
             "speaking_phrases":["I have informed housekeeping about the early check-in request.","Maintenance reported that the repair will be completed by noon.","The previous shift left a note about room 412 — the shower is still leaking.","I will escalate this to the duty manager immediately.","Please log all requests in the handover book before your shift ends."]}
        ]
    },
    "b2": {
        "units": [
            {"n":1,"title_es":"Gestión hotelera","title_en":"Hotel Management Communication","topic":"Management","grammar_topic":"Passive & Complex Conditionals","vocab_topic":"Management Vocabulary",
             "vocab":[("KPI","indicador clave"),("occupancy rate","tasa de ocupación"),("revenue per room","ingresos por habitación"),("online review","reseña online"),("brand standards","estándares de marca"),("mystery guest","cliente misterioso"),("audit","auditoría"),("compliance","cumplimiento"),("performance review","evaluación de desempeño"),("benchmark","punto de referencia")],
             "grammar_notes":"Use passive for reports: 'Occupancy rates have been increased by 12%.', 'Performance standards are being reviewed quarterly.'",
             "reading_text":"Hotel management requires both operational skills and business acumen. Managers monitor KPIs such as occupancy rates, average daily rate, and guest satisfaction scores. Online reviews on platforms like TripAdvisor and Booking.com directly impact revenue, so managing guest feedback is a priority. Regular audits ensure brand standards are maintained.",
             "listening_text":"This quarter's performance report shows that our occupancy rate has increased by eight percent compared to last year. However, our online review score has dropped from 8.4 to 8.1 on Booking.com. Most negative reviews mention delays at check-in. I would like the reception team to analyze these comments and present a service improvement plan by the end of the month.",
             "speaking_phrases":["Our occupancy rate has been increased by eight percent.","The negative reviews are being analyzed by the team.","Brand standards will be reviewed at the next quarterly audit.","Were we to reduce check-in time, our review scores would improve significantly.","Performance against benchmark will be assessed monthly."]},
            {"n":2,"title_es":"Clientes corporativos","title_en":"Corporate Client Relations","topic":"Corporate Accounts","grammar_topic":"Formal Business English","vocab_topic":"Corporate Language",
             "vocab":[("corporate account","cuenta corporativa"),("rate agreement","acuerdo de tarifas"),("invoice","factura"),("billing","facturación"),("contract","contrato"),("volume discount","descuento por volumen"),("account manager","gestor de cuenta"),("RFP","solicitud de propuesta"),("SLA","acuerdo de nivel de servicio"),("renewal","renovación")],
             "grammar_notes":"Formal business English: 'We are pleased to offer your company a preferential corporate rate.', 'In accordance with our service level agreement...'",
             "reading_text":"Corporate clients represent a significant portion of hotel revenue. Account managers maintain relationships with companies, negotiating rates and ensuring the hotel meets their requirements. Corporate accounts expect reliable billing, consistent quality, and dedicated account management. Losing a corporate account can represent a significant revenue loss.",
             "listening_text":"Good morning, Mr. Chen. I am calling to discuss the renewal of your corporate rate agreement for next year. Your company has been a valued client for four years, and I am pleased to offer you an enhanced rate of 150 euros per night, which represents a ten percent reduction on last year's agreement. We would also like to offer complimentary breakfast for all business travelers on your account.",
             "speaking_phrases":["We are delighted to offer your company a preferential corporate rate.","In accordance with our service level agreement, all invoices will be sent monthly.","Your dedicated account manager will be available around the clock.","We would be pleased to arrange a site visit for your procurement team.","The contract renewal terms have been prepared and are ready for your review."]},
            {"n":3,"title_es":"Gestión de crisis","title_en":"Crisis Management","topic":"Crisis Communication","grammar_topic":"Formal Reporting Language","vocab_topic":"Crisis Vocabulary",
             "vocab":[("crisis communication","comunicación de crisis"),("press statement","comunicado de prensa"),("spokesperson","portavoz"),("damage control","control de daños"),("reputational risk","riesgo reputacional"),("stakeholder","parte interesada"),("media inquiry","consulta de medios"),("statement","declaración"),("investigation","investigación"),("transparency","transparencia")],
             "grammar_notes":"Crisis language requires precision: 'We are committed to full transparency throughout this process.', 'A thorough investigation is currently underway.'",
             "reading_text":"Crisis management in hotels can involve anything from a guest injury to a public health issue or a PR scandal. The key principles are speed, transparency, and empathy. The hotel must communicate clearly with guests, staff, media, and other stakeholders. A well-prepared crisis communication plan can make the difference between recovering quickly and lasting reputational damage.",
             "listening_text":"I have just been informed by the health authority that two guests have reported symptoms of food poisoning following last night's gala dinner. We must act immediately. First, the restaurant will be closed for a deep clean and inspection. Second, all guests from last night will be contacted and offered medical assistance. Third, we will prepare a press statement confirming we are cooperating fully with the investigation. I need the communication ready within the hour.",
             "speaking_phrases":["We are committed to full transparency throughout this process.","A thorough investigation is currently underway.","The safety and wellbeing of our guests is our absolute priority.","We are cooperating fully with the relevant authorities.","A further statement will be issued once the investigation is complete."]},
            {"n":4,"title_es":"Formación del personal","title_en":"Staff Training","topic":"Training & Development","grammar_topic":"Gerunds & Infinitives (Training)","vocab_topic":"Training Vocabulary",
             "vocab":[("onboarding","incorporación"),("mentoring","mentoría"),("role play","juego de rol"),("assessment","evaluación"),("certification","certificación"),("probationary period","período de prueba"),("performance improvement","mejora del desempeño"),("upskilling","mejora de habilidades"),("e-learning","aprendizaje online"),("succession planning","planificación de la sucesión")],
             "grammar_notes":"Use gerunds and infinitives: 'Training staff to handle VIP guests requires...', 'I recommend spending at least two weeks on the front desk before...'",
             "reading_text":"Staff training is an ongoing process in the hotel industry. New employees undergo an onboarding program that covers hotel standards, systems, and service protocols. Regular refresher training ensures standards are maintained. High-performing employees are identified for leadership development programs and succession planning.",
             "listening_text":"Welcome to the Hotel Plaza team. This week you will spend two days learning our reservation system, one day shadowing an experienced receptionist, and two days in role-play training for common guest scenarios. By the end of the week, you will be assessed on your ability to handle a complete check-in independently. Do not hesitate to ask questions — we are all here to support you.",
             "speaking_phrases":["Training staff to handle complaints effectively requires consistent practice.","I recommend spending the first week shadowing an experienced colleague.","The assessment will cover both technical skills and interpersonal communication.","Ongoing upskilling is essential in our rapidly changing industry.","We invest in our people because they are our most valuable asset."]}
        ]
    }
}

print("Recepcionista data loaded")

COURSES["logistica"] = {
    "name": "Logistica",
    "name_es": "Logística / Almacén",
    "a1": {
        "units": [
            {"n":1,"title_es":"Vocabulario básico del almacén","title_en":"Basic Warehouse Vocabulary","topic":"Warehouse Basics","grammar_topic":"Nouns & Articles","vocab_topic":"Warehouse Items",
             "vocab":[("warehouse","almacén"),("pallet","palé"),("forklift","carretilla elevadora"),("shelf","estantería"),("aisle","pasillo"),("loading dock","muelle de carga"),("goods","mercancía"),("box","caja"),("label","etiqueta"),("barcode","código de barras")],
             "grammar_notes":"Learn basic warehouse vocabulary with articles: 'a pallet', 'the forklift', 'the loading dock'.",
             "reading_text":"A warehouse is a large building where goods are stored. Inside, there are many shelves and aisles. Workers use forklifts to move heavy pallets. Each box has a label with a barcode. The loading dock is where lorries arrive to deliver or collect goods.",
             "listening_text":"Good morning, everyone. Welcome to your first day at GreenLog Warehouse. My name is Pedro and I am your team leader. First, I will show you the main areas of the warehouse. This is the receiving area, where goods arrive. Over there is the storage zone with the shelving units. And at the back, you can see the loading dock where our lorries come in.",
             "speaking_phrases":["Where is the loading dock?","The pallet is in aisle three.","Please put the boxes on shelf B.","This barcode does not scan correctly.","The forklift is not working today."]},
            {"n":2,"title_es":"Seguimiento de envíos","title_en":"Shipment Tracking","topic":"Tracking","grammar_topic":"Present Continuous","vocab_topic":"Tracking Vocabulary",
             "vocab":[("tracking number","número de seguimiento"),("delivery","entrega"),("status","estado"),("in transit","en tránsito"),("delivered","entregado"),("delayed","retrasado"),("estimated arrival","llegada estimada"),("package","paquete"),("courier","mensajero"),("recipient","destinatario")],
             "grammar_notes":"Use present continuous for ongoing actions: 'The package is currently in transit.', 'The delivery is being processed.'",
             "reading_text":"Every shipment has a tracking number. With this number, you can check the status of your delivery online. Common status messages include 'In transit', 'Out for delivery', and 'Delivered'. If a package is delayed, the system shows an updated estimated arrival date. Customers use tracking to know when their package will arrive.",
             "listening_text":"Hello, I am calling about my order number 4528. Can you tell me where it is? Of course. Let me look that up for you. Your package is currently in transit and is at our sorting facility in Zaragoza. The estimated arrival date is tomorrow between two and six in the afternoon. You will receive a text message when the courier is on their way.",
             "speaking_phrases":["Your shipment is currently in transit.","The tracking number is AB12345678.","The estimated delivery date is Thursday.","Your package has been delivered to the reception desk.","There is a delay — the new estimated arrival is Friday."]},
            {"n":3,"title_es":"Carga y descarga","title_en":"Loading & Unloading","topic":"Loading Operations","grammar_topic":"Imperatives","vocab_topic":"Loading Vocabulary",
             "vocab":[("load","cargar"),("unload","descargar"),("lorry","camión"),("crane","grúa"),("straps","correas"),("secure","asegurar"),("weight limit","límite de peso"),("fragile","frágil"),("handle with care","manejar con cuidado"),("stack","apilar")],
             "grammar_notes":"Use imperatives for instructions: 'Secure the load before moving.', 'Do not stack fragile boxes.'",
             "reading_text":"Loading and unloading lorries is a daily task in a warehouse. Workers must follow safety rules at all times. Heavy items go at the bottom, lighter items on top. Fragile boxes must be marked and handled carefully. Straps are used to secure loads during transport. The weight limit of each vehicle must never be exceeded.",
             "listening_text":"Right, listen up. We have three lorries to unload this morning. Remember — always check the delivery note before you start. Heavy pallets go to zone A. Fragile goods go straight to the packing area — do not stack them. Use the forklift for anything over thirty kilos and always wear your safety boots. Any questions? Good. Let's get to work.",
             "speaking_phrases":["Secure the load before the lorry departs.","Do not stack fragile boxes more than two high.","Check the delivery note against the purchase order.","The weight limit for this lorry is ten tonnes.","Handle this pallet with care — the contents are fragile."]},
            {"n":4,"title_es":"Instrucciones de seguridad","title_en":"Safety Instructions","topic":"Warehouse Safety","grammar_topic":"Must / Must not","vocab_topic":"Safety Vocabulary",
             "vocab":[("hard hat","casco"),("safety vest","chaleco reflectante"),("gloves","guantes"),("safety boots","botas de seguridad"),("fire extinguisher","extintor"),("emergency exit","salida de emergencia"),("first aid kit","botiquín"),("hazard","peligro"),("risk assessment","evaluación de riesgos"),("PPE","EPI (equipo de protección individual)")],
             "grammar_notes":"Use 'must' and 'must not' for rules: 'You must wear a hard hat at all times.', 'You must not use the forklift without a license.'",
             "reading_text":"Safety is the most important thing in a warehouse. All workers must wear personal protective equipment (PPE) at all times. This includes a hard hat, safety vest, gloves, and safety boots. Workers must not use forklifts without proper training and certification. Emergency exits must always be kept clear. Regular safety briefings help prevent accidents.",
             "listening_text":"Before you start work today, I need to remind you of the safety rules. You must wear your hard hat and safety vest at all times in the warehouse. You must not operate the forklift unless you have your certification card with you. The fire extinguisher is located at the end of every aisle. If there is an emergency, proceed immediately to the assembly point outside the main entrance.",
             "speaking_phrases":["You must wear your hard hat at all times.","You must not operate the forklift without a license.","The emergency exit is at the end of aisle five.","Please complete the risk assessment before starting work.","All PPE must be worn in the warehouse — no exceptions."]}
        ]
    },
    "a2": {
        "units": [
            {"n":1,"title_es":"Documentación de envíos","title_en":"Shipping Documentation","topic":"Documentation","grammar_topic":"Passive Voice (simple)","vocab_topic":"Documents Vocabulary",
             "vocab":[("bill of lading","conocimiento de embarque"),("packing list","lista de empaque"),("invoice","factura"),("purchase order","orden de compra"),("delivery note","albarán"),("customs declaration","declaración aduanera"),("certificate of origin","certificado de origen"),("insurance","seguro"),("consignment","envío"),("documentation","documentación")],
             "grammar_notes":"Use passive: 'The invoice is sent with every shipment.', 'The goods are accompanied by a packing list.'",
             "reading_text":"Every international shipment requires documentation. The most important documents are the commercial invoice, the packing list, and the bill of lading. The invoice shows the value of the goods. The packing list details what is inside each box. The bill of lading is the contract between the shipper and the carrier.",
             "listening_text":"Before this shipment can be released, I need to see the complete documentation. Do you have the commercial invoice? Yes, here it is. Good. And the packing list? Yes, that is attached. I also need the certificate of origin for customs purposes. Ah, I will need to request that from our supplier. Can you send it by email? Of course, within the hour.",
             "speaking_phrases":["The commercial invoice must accompany every shipment.","The packing list is attached to the outside of the container.","The bill of lading has been signed by the carrier.","We need a certificate of origin for the customs declaration.","All documentation must be submitted before the goods are released."]},
            {"n":2,"title_es":"Trámites aduaneros","title_en":"Customs Procedures","topic":"Customs","grammar_topic":"Must / Have to (obligations)","vocab_topic":"Customs Vocabulary",
             "vocab":[("customs clearance","despacho aduanero"),("duty","arancel"),("import","importación"),("export","exportación"),("tariff","tarifa arancelaria"),("prohibited goods","mercancía prohibida"),("inspection","inspección"),("broker","agente de aduanas"),("declaration","declaración"),("bond","fianza aduanera")],
             "grammar_notes":"Use 'must' and 'have to' for obligations: 'All goods have to be declared.', 'You must pay import duty on goods over the threshold.'",
             "reading_text":"Customs clearance is the process of getting goods through customs. All goods entering a country must be declared. Import duties and taxes must be paid based on the value and type of goods. A customs broker can help manage the paperwork and ensure the goods are cleared quickly. Prohibited goods are confiscated and may result in heavy fines.",
             "listening_text":"These goods have been held at customs. The problem is that the customs declaration does not match the invoice — the declared value is lower than the actual value. This is very serious. You have to resubmit the declaration with the correct value, and you will need to pay the full import duty. I strongly recommend you work with a licensed customs broker to sort this out.",
             "speaking_phrases":["All goods must be declared at customs.","The import duty on these goods is twelve percent.","You have to provide the certificate of origin.","Our customs broker is handling the clearance process.","The goods were held because the documentation was incomplete."]},
            {"n":3,"title_es":"Programar entregas","title_en":"Scheduling Deliveries","topic":"Delivery Scheduling","grammar_topic":"Future Arrangements","vocab_topic":"Scheduling Vocabulary",
             "vocab":[("time slot","franja horaria"),("schedule","horario/programar"),("route","ruta"),("driver","conductor"),("estimated time of arrival","hora estimada de llegada"),("confirm","confirmar"),("reschedule","reprogramar"),("peak hours","horas punta"),("capacity","capacidad"),("dispatcher","despachador")],
             "grammar_notes":"Use future arrangements: 'The delivery is scheduled for Thursday morning.', 'I am going to reschedule the delivery for Friday.'",
             "reading_text":"Planning delivery routes efficiently saves time and money. Dispatchers use software to plan the most efficient routes for drivers. They consider factors like traffic, delivery time windows, and vehicle capacity. When customers need to reschedule, the dispatcher adjusts the plan and notifies the driver. Good planning means more deliveries per day with less fuel consumption.",
             "listening_text":"Hello, I am calling about the delivery scheduled for tomorrow afternoon. I am afraid we are not going to be available between two and five. Is it possible to reschedule? Of course. We have a morning slot available between eight and noon, or we could arrange it for the day after tomorrow in the afternoon. Which is more convenient? The morning slot tomorrow would be perfect. I will update the driver's route immediately.",
             "speaking_phrases":["The delivery is scheduled for Thursday between nine and twelve.","I can reschedule that for the following day.","The driver's route has been updated.","We will send you a text when the driver is thirty minutes away.","I am afraid the morning slot is fully booked — would afternoon work?"]},
            {"n":4,"title_es":"Mantenimiento de vehículos","title_en":"Vehicle Maintenance Reporting","topic":"Fleet Management","grammar_topic":"Present Perfect","vocab_topic":"Vehicle Vocabulary",
             "vocab":[("breakdown","avería"),("service","revisión/mantenimiento"),("mileage","kilometraje"),("fuel","combustible"),("tyre","neumático"),("oil change","cambio de aceite"),("inspection","inspección"),("fleet","flota"),("repair","reparación"),("log","registro")],
             "grammar_notes":"Use present perfect for recent events: 'The van has broken down on the motorway.', 'I have already booked the service.'",
             "reading_text":"Fleet maintenance is essential for logistics companies. Regular servicing prevents costly breakdowns. Drivers must check their vehicles before each shift — tyres, lights, oil, and fuel levels. Any defects must be reported immediately. The fleet manager keeps a maintenance log for each vehicle and schedules services based on mileage.",
             "listening_text":"I am calling to report a problem with van number 7. It has broken down on the A3 motorway, about ten kilometres from Valencia. The driver thinks it is a tyre problem — he has already called roadside assistance, but the delivery is going to be delayed by at least two hours. I have contacted the customer to explain the situation. Can you arrange a replacement vehicle from the depot?",
             "speaking_phrases":["Van number seven has broken down on the motorway.","I have already arranged for roadside assistance.","The vehicle needs an oil change — it has done 15,000 kilometres.","I have reported the defect in the maintenance log.","The replacement van has been dispatched from the depot."]}
        ]
    },
    "b1": {
        "units": [
            {"n":1,"title_es":"Comunicación en la cadena de suministro","title_en":"Supply Chain Communication","topic":"Supply Chain","grammar_topic":"Conditionals in Business","vocab_topic":"Supply Chain Vocabulary",
             "vocab":[("supplier","proveedor"),("manufacturer","fabricante"),("distributor","distribuidor"),("retailer","minorista"),("lead time","plazo de entrega"),("stock","existencias"),("just-in-time","justo a tiempo"),("bottleneck","cuello de botella"),("downstream","aguas abajo"),("upstream","aguas arriba")],
             "grammar_notes":"Use conditionals: 'If the supplier delays the shipment, we will not have enough stock.', 'Were we to switch suppliers, our lead time would decrease.'",
             "reading_text":"The supply chain connects suppliers, manufacturers, distributors, and retailers. Communication at every stage is critical. A delay at one point creates problems for everyone downstream. Logistics managers use ERP systems to track inventory and orders across the entire chain. Good communication helps identify bottlenecks before they become crises.",
             "listening_text":"We have a problem with our supplier in China. They have informed us that the shipment of components will be delayed by three weeks due to port congestion. If this happens, we will not have enough stock to fulfill orders for the next month. I am in contact with two alternative suppliers — if we place an urgent order today, they can deliver within ten days. I recommend we proceed immediately.",
             "speaking_phrases":["If the supplier delays, we will run out of stock by the end of the month.","We need to identify the bottleneck in the supply chain.","Were we to switch to a local supplier, our lead time would reduce significantly.","I am in communication with three alternative suppliers.","The delivery date has been confirmed by the manufacturer."]},
            {"n":2,"title_es":"Gestión de inventario","title_en":"Inventory Management","topic":"Inventory","grammar_topic":"Quantifiers & Measurements","vocab_topic":"Inventory Vocabulary",
             "vocab":[("stock count","recuento de inventario"),("reorder point","punto de reorden"),("dead stock","stock muerto"),("SKU","código de producto"),("cycle count","recuento cíclico"),("overstock","exceso de stock"),("shrinkage","merma"),("FIFO","FIFO (primero en entrar, primero en salir)"),("LIFO","LIFO"),("WMS","sistema de gestión de almacén")],
             "grammar_notes":"Use quantifiers: 'We have too much dead stock.', 'There is not enough safety stock.', 'We need at least two weeks of buffer.'",
             "reading_text":"Inventory management ensures a company always has the right amount of stock. Too much stock wastes money and space. Too little stock means lost sales and unhappy customers. Most companies use FIFO — first in, first out — to ensure older stock is used before newer stock. A warehouse management system (WMS) tracks every product using SKU codes.",
             "listening_text":"The quarterly stock count has revealed some issues. We have significant overstock of product SKU 4421 — we have enough for six months and it expires in four. We also have a shortage of SKU 8832, which is our fastest-moving product. We need to reorder immediately to avoid stockouts. I am also seeing a seven percent shrinkage rate in the electronics section — this needs investigation.",
             "speaking_phrases":["We have too much dead stock in zone C.","The reorder point for this product is set too high.","I will run a cycle count on the electronics section this week.","Our WMS shows we have 450 units — but the physical count shows 418.","We need to investigate the shrinkage in the electronics aisle."]},
            {"n":3,"title_es":"Negociación con proveedores","title_en":"Supplier Negotiations","topic":"Negotiation","grammar_topic":"Negotiation Language","vocab_topic":"Negotiation Vocabulary",
             "vocab":[("quotation","presupuesto/cotización"),("price per unit","precio por unidad"),("volume discount","descuento por volumen"),("payment terms","condiciones de pago"),("lead time","plazo de entrega"),("quality standards","estándares de calidad"),("penalty clause","cláusula de penalización"),("exclusivity","exclusividad"),("tender","licitación"),("counter-offer","contraoferta")],
             "grammar_notes":"Negotiation language: 'We would be able to commit to a larger volume if...', 'Would you be willing to reduce the price if we...?'",
             "reading_text":"Negotiating with suppliers requires preparation and skill. Before a negotiation, you must know your target price, your minimum acceptable terms, and your alternatives. During the negotiation, be respectful but firm. Volume discounts, payment terms, and delivery schedules are all negotiable. Always get the agreed terms in writing before finalizing the contract.",
             "listening_text":"Thank you for the quotation. We are interested, but the price per unit of twelve euros is above our target of ten euros. If we commit to ordering five thousand units per month, would you be willing to review the price? I understand. If you can guarantee that volume for twelve months, I can offer ten fifty per unit. That is our best offer. We would also need payment within sixty days. Could you do thirty?",
             "speaking_phrases":["Your quotation is above our target price — could you review it?","If we commit to 5,000 units per month, would you reduce the price?","We would need payment terms of thirty days to proceed.","I would be happy to sign a twelve-month contract at that rate.","Could you include a penalty clause for late deliveries?"]},
            {"n":4,"title_es":"Optimización de rutas","title_en":"Route Optimization","topic":"Route Planning","grammar_topic":"Comparatives & Superlatives","vocab_topic":"Route Planning Vocabulary",
             "vocab":[("efficiency","eficiencia"),("fuel consumption","consumo de combustible"),("optimized route","ruta optimizada"),("traffic congestion","congestión de tráfico"),("delivery window","ventana de entrega"),("GPS","GPS"),("telematics","telemática"),("carbon footprint","huella de carbono"),("consolidation","consolidación"),("last mile","última milla")],
             "grammar_notes":"Use comparatives and superlatives: 'The optimized route is thirty percent more efficient.', 'The most cost-effective solution is...'",
             "reading_text":"Route optimization software helps logistics companies deliver more efficiently. By analyzing traffic patterns, delivery windows, and vehicle capacity, the software finds the most efficient sequence of stops. This reduces fuel consumption, lowers the carbon footprint, and increases the number of deliveries per shift. Last-mile delivery — getting goods to the final customer — is typically the most expensive part of the supply chain.",
             "listening_text":"Our current delivery routes are consuming twelve percent more fuel than the industry average. I have run the data through our route optimization software and the results are clear — if we consolidate deliveries in the northern zone on Tuesday and Thursday, rather than running daily, we reduce fuel costs by eighteen percent and cut delivery time by twenty-two percent. The software also identified three drivers who are regularly taking longer routes.",
             "speaking_phrases":["The optimized route is twenty percent more efficient than the current one.","Consolidating deliveries will significantly reduce our fuel consumption.","Last-mile delivery is the most expensive stage in our supply chain.","Our GPS telematics show that route four is consistently the slowest.","The most cost-effective solution is to use larger vehicles for longer distances."]}
        ]
    },
    "b2": {
        "units": [
            {"n":1,"title_es":"Logística internacional","title_en":"International Logistics","topic":"International Trade","grammar_topic":"Complex Passives & Conditionals","vocab_topic":"International Trade Terms",
             "vocab":[("Incoterms","Incoterms"),("FOB","FOB (libre a bordo)"),("CIF","CIF (costo, seguro y flete)"),("EXW","EXW (en fábrica)"),("DDP","DDP (entregado con derechos pagados)"),("freight forwarder","agente de carga"),("container","contenedor"),("port of entry","puerto de entrada"),("demurrage","demuraje"),("letter of credit","carta de crédito")],
             "grammar_notes":"Use complex language: 'Under CIF terms, the seller is responsible for...', 'Had the goods been declared correctly, the demurrage charges would have been avoided.'",
             "reading_text":"International logistics involves navigating complex regulations, documentation requirements, and trade terms. Incoterms, published by the International Chamber of Commerce, define the responsibilities of buyers and sellers in international transactions. Understanding these terms is essential for avoiding disputes and unexpected costs in international trade.",
             "listening_text":"We need to discuss the terms for the next shipment from Vietnam. Our current agreement is CIF to Valencia. The supplier is now proposing EXW, which means we would be responsible for all freight and insurance costs from their factory. This would give us more control but also more responsibility and cost. I recommend we counter-propose FOB from Ho Chi Minh City port — that is a reasonable compromise.",
             "speaking_phrases":["Under CIF terms, the seller is responsible for freight and insurance.","Had we used DDP terms, we would have avoided these customs complications.","Our freight forwarder is managing the container booking.","The goods are currently awaiting clearance at the port of entry.","We are disputing the demurrage charges with the shipping line."]},
            {"n":2,"title_es":"Negociación de contratos","title_en":"Contract Negotiation","topic":"Contracts","grammar_topic":"Legal & Formal Language","vocab_topic":"Contract Vocabulary",
             "vocab":[("liability","responsabilidad"),("indemnification","indemnización"),("force majeure","fuerza mayor"),("arbitration","arbitraje"),("jurisdiction","jurisdicción"),("breach of contract","incumplimiento de contrato"),("liquidated damages","daños y perjuicios establecidos"),("warranty","garantía"),("non-disclosure","no divulgación"),("amendment","enmienda")],
             "grammar_notes":"Legal language: 'In the event of a breach of contract, the non-breaching party shall be entitled to...', 'Either party may terminate this agreement upon thirty days written notice.'",
             "reading_text":"Logistics contracts must be carefully negotiated to protect both parties. Key clauses cover liability limits, delivery timeframes, force majeure provisions, and dispute resolution mechanisms. Penalty clauses for late delivery incentivize performance. Limitation of liability clauses protect service providers from disproportionate claims. All amendments must be agreed in writing.",
             "listening_text":"I have reviewed the draft contract and I have three concerns. First, the liability clause — they want to limit their liability to the value of the goods, but that does not cover consequential losses if a delay causes us to miss our launch date. Second, the force majeure clause is too broad — it would allow them to avoid penalties for almost any disruption. Third, the arbitration clause specifies New York law — we need English law for this contract.",
             "speaking_phrases":["The liability clause needs to be amended to include consequential losses.","In the event of a breach, liquidated damages of five percent per week will apply.","The force majeure clause must be more precisely defined.","Either party may terminate this agreement with thirty days written notice.","I recommend we include an English law arbitration clause."]},
            {"n":3,"title_es":"Gestión de equipos","title_en":"Team Management in Logistics","topic":"Operations Management","grammar_topic":"Reported Speech (Complex)","vocab_topic":"Operations Language",
             "vocab":[("shift supervisor","supervisor de turno"),("productivity target","objetivo de productividad"),("KPI","indicador clave de rendimiento"),("throughput","rendimiento/producción"),("absenteeism","absentismo"),("incentive","incentivo"),("cross-training","formación cruzada"),("lean management","gestión lean"),("continuous improvement","mejora continua"),("Kaizen","Kaizen")],
             "grammar_notes":"Complex reported speech: 'The operations director told me that productivity targets had not been met.', 'She said that unless absenteeism was reduced, further measures would be taken.'",
             "reading_text":"Managing a logistics team requires balancing productivity, safety, and employee wellbeing. Operations managers set KPIs for throughput, accuracy, and on-time delivery. High absenteeism is a major challenge in warehouse environments and must be addressed proactively. Lean management principles, such as Kaizen, drive continuous improvement across all operations.",
             "listening_text":"I have just come from the operations review meeting. The director told me that our throughput in the night shift had fallen below target for three consecutive weeks. She also said that unless we addressed the absenteeism problem — which is currently running at twelve percent — she would be bringing in external consultants to review our processes. I have proposed implementing a cross-training program and an attendance incentive scheme. She said she would support this if we present results within ninety days.",
             "speaking_phrases":["The operations director said that our productivity targets had not been met.","She told us that absenteeism must be reduced to below five percent.","The Kaizen review identified three areas for immediate improvement.","Cross-training will increase our flexibility across all warehouse zones.","I proposed a throughput incentive scheme and the team responded positively."]},
            {"n":4,"title_es":"Sostenibilidad y reportes","title_en":"Sustainability & Reporting","topic":"Sustainable Logistics","grammar_topic":"Data & Trends Language","vocab_topic":"Sustainability Vocabulary",
             "vocab":[("carbon emissions","emisiones de carbono"),("carbon neutral","carbono neutral"),("electric vehicle","vehículo eléctrico"),("green logistics","logística verde"),("sustainability report","informe de sostenibilidad"),("scope 1 emissions","emisiones de alcance 1"),("circular economy","economía circular"),("carbon offset","compensación de carbono"),("ESG","ESG (ambiental, social y gobernanza)"),("net zero","cero neto")],
             "grammar_notes":"Data trends language: 'Emissions have fallen by twenty percent year-on-year.', 'We are on track to achieve net zero by 2030.'",
             "reading_text":"Sustainability is now a business priority in logistics. Companies face pressure from customers, investors, and regulators to reduce their environmental impact. Switching to electric vehicles, optimizing routes to reduce fuel consumption, and using recyclable packaging are common measures. Sustainability reports, aligned with ESG standards, must now be published by all large logistics companies.",
             "listening_text":"Our 2025 sustainability report shows significant progress. Scope 1 emissions from our vehicle fleet have fallen by twenty-two percent year-on-year, thanks to our EV transition program — forty percent of our delivery vans are now electric. We have also reduced packaging waste by thirty percent through our circular economy initiative. We are on track to achieve net zero across all operations by 2030. These results will be presented to our ESG investors next week.",
             "speaking_phrases":["Our carbon emissions have fallen by twenty-two percent year-on-year.","We are on track to achieve net zero by 2030.","The EV transition has reduced our scope 1 emissions significantly.","Our ESG report will be published in the first quarter of next year.","Sustainable logistics is not just an ethical choice — it is a business advantage."]}
        ]
    }
}

print("Logistica data loaded")

def bi(en, es):
    return f"[[{en}|{es}]]"

def make_id(job_key, level, unit_n, lesson_n, ex_n, suffix):
    return f"{job_key[:3]}-{level}-u{unit_n}-l{lesson_n}-{suffix}{ex_n}"

def gen_grammar_lesson(job_key, level, unit):
    u = unit["n"]
    topic = unit["topic"]
    grammar_topic = unit["grammar_topic"]
    vocab = unit["vocab"]
    title = f"Gramática: {unit['title_es']}"
    
    exercises = []
    
    # 5 fill-blank exercises
    fill_pairs = [
        (vocab[0], vocab[1]),
        (vocab[2], vocab[3]),
        (vocab[4], vocab[5]),
        (vocab[6], vocab[7]),
        (vocab[8], vocab[9]) if len(vocab) > 9 else (vocab[0], vocab[2]),
    ]
    
    for i, (pair_a, pair_b) in enumerate(fill_pairs[:5], 1):
        en_a, es_a = pair_a
        en_b, es_b = pair_b
        options = [en_a, en_b, vocab[(i) % len(vocab)][0], vocab[(i+2) % len(vocab)][0]]
        exercises.append({
            "id": make_id(job_key, level, u, 1, i, "g"),
            "type": "fill-blank",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "easy" if level in ("a1","a2") else "medium",
            "content": {
                "title": title,
                "instructions": "[[Complete|Completa]] [[the|la]] [[sentence|frase]] [[with|con]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
                "questions": [{
                    "question": f"[[The|El/La]] ___ [[is|es]] [[in|en]] [[the|el]] {bi('workplace', 'lugar de trabajo')}. [{bi(en_a, es_a)}]",
                    "options": options,
                    "correctAnswer": en_a,
                    "explanation": f"{bi(en_a.capitalize(), es_a.capitalize())} {bi('is the correct answer', 'es la respuesta correcta')}."
                }]
            },
            "topicName": "Grammar"
        })
    
    # 5 multiple-choice exercises
    for i in range(1, 6):
        pair = vocab[i % len(vocab)]
        en, es = pair
        wrong1 = vocab[(i+1) % len(vocab)]
        wrong2 = vocab[(i+2) % len(vocab)]
        wrong3 = vocab[(i+3) % len(vocab)]
        exercises.append({
            "id": make_id(job_key, level, u, 1, i+5, "g"),
            "type": "multiple-choice",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "easy" if level in ("a1","a2") else "medium",
            "content": {
                "title": title,
                "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[translation|traducción]].",
                "questions": [{
                    "question": f"[[What|Qué]] [[is|significa]] [[the|el]] [[English|inglés]] [[word|palabra]] [[for|para]] \"{es}\"?",
                    "options": [en, wrong1[0], wrong2[0], wrong3[0]],
                    "correctAnswer": 0,
                    "explanation": f"\"[[{en}|{es}]]\" {bi('is correct', 'es correcto')}."
                }]
            },
            "topicName": "Grammar"
        })
    
    # 3 sentence-building exercises
    phrases = unit.get("speaking_phrases", [])
    for i, phrase in enumerate(phrases[:3], 1):
        words = phrase.split()
        exercises.append({
            "id": make_id(job_key, level, u, 1, i+10, "g"),
            "type": "sentence-building",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": "[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to form|para formar]] [[a correct|una correcta]] [[sentence|oración]].",
                "questions": [{
                    "question": "[[Arrange|Ordena]] [[these|estas]] [[words|palabras]]: " + " / ".join(f"[[{w}|{w}]]" for w in sorted(words)),
                    "correctAnswer": phrase,
                    "explanation": f"[[Correct sentence|Frase correcta]]: \"{phrase}\"."
                }]
            },
            "topicName": "Grammar"
        })
    
    # 2 true-false exercises
    for i in range(1, 3):
        pair = vocab[i % len(vocab)]
        en, es = pair
        exercises.append({
            "id": make_id(job_key, level, u, 1, i+13, "g"),
            "type": "true-false",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "easy",
            "content": {
                "title": title,
                "instructions": "[[Is|Es]] [[this|esta]] [[statement|afirmación]] [[true|verdadera]] [[or|o]] [[false|falsa]]?",
                "questions": [{
                    "question": f"\"[[{en}|{en}]]\" {bi('means', 'significa')} \"{es}\" [[in|en]] [[Spanish|español]].",
                    "options": [bi("True", "Verdadero"), bi("False", "Falso")],
                    "correctAnswer": "True",
                    "explanation": f"{bi('Yes', 'Sí')}, [[{en}|{es}]] {bi('is correct', 'es correcto')}."
                }]
            },
            "topicName": "Grammar"
        })
    
    return exercises


def gen_vocabulary_lesson(job_key, level, unit):
    u = unit["n"]
    topic = unit["topic"]
    vocab = unit["vocab"]
    title = f"Vocabulario: {unit['vocab_topic']}"
    
    exercises = []
    
    # 6 multiple-choice
    for i, (en, es) in enumerate(vocab[:6], 1):
        wrong1 = vocab[(i) % len(vocab)]
        wrong2 = vocab[(i+1) % len(vocab)]
        wrong3 = vocab[(i+2) % len(vocab)]
        exercises.append({
            "id": make_id(job_key, level, u, 2, i, "v"),
            "type": "multiple-choice",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "easy",
            "content": {
                "title": title,
                "instructions": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].",
                "questions": [{
                    "question": f"[[How|Cómo]] [[do you say|se dice]] \"{es}\" [[in|en]] [[English|inglés]]?",
                    "options": [en, wrong1[0], wrong2[0], wrong3[0]],
                    "correctAnswer": 0,
                    "explanation": f"\"{bi(en, es)}\" {bi('is the correct translation', 'es la traducción correcta')}."
                }]
            },
            "topicName": "Vocabulary"
        })
    
    # 4 fill-blank
    for i, (en, es) in enumerate(vocab[2:6], 1):
        wrong1 = vocab[(i+3) % len(vocab)][0]
        wrong2 = vocab[(i+5) % len(vocab)][0]
        exercises.append({
            "id": make_id(job_key, level, u, 2, i+6, "v"),
            "type": "fill-blank",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": "[[Fill in|Completa]] [[the|el]] [[blank|hueco]] [[with|con]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
                "questions": [{
                    "question": f"[[I need|Necesito]] [[the|el/la]] ___ {bi('for this task', 'para esta tarea')}. [[({es})|({es})]]",
                    "options": [en, wrong1, wrong2, vocab[(i+7) % len(vocab)][0]],
                    "correctAnswer": en,
                    "explanation": f"{bi(en.capitalize(), es.capitalize())} {bi('is correct', 'es correcto')}."
                }]
            },
            "topicName": "Vocabulary"
        })
    
    # 3 matching (as multiple-choice)
    for i, (en, es) in enumerate(vocab[6:9], 1):
        wrong1 = vocab[(i+1) % len(vocab)]
        wrong2 = vocab[(i+4) % len(vocab)]
        wrong3 = vocab[(i+7) % len(vocab)]
        exercises.append({
            "id": make_id(job_key, level, u, 2, i+10, "v"),
            "type": "multiple-choice",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": "[[Match|Relaciona]] [[the|la]] [[word|palabra]] [[with|con]] [[its|su]] [[correct|correcta]] [[meaning|significado]].",
                "questions": [{
                    "question": f"[[What|Qué]] [[does|significa]] \"{en}\" [[mean|significar]]?",
                    "options": [es, wrong1[1], wrong2[1], wrong3[1]],
                    "correctAnswer": 0,
                    "explanation": f"\"{bi(en, es)}\": {bi('correct!', '¡correcto!')}."
                }]
            },
            "topicName": "Vocabulary"
        })
    
    # 2 true-false
    for i in range(1, 3):
        pair = vocab[(i+7) % len(vocab)]
        en, es = pair
        exercises.append({
            "id": make_id(job_key, level, u, 2, i+13, "v"),
            "type": "true-false",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "easy",
            "content": {
                "title": title,
                "instructions": "[[True|Verdadero]] [[or|o]] [[False|Falso]]?",
                "questions": [{
                    "question": f"\"[[{en}|{en}]]\" {bi('means', 'significa')} \"{es}\".",
                    "options": [bi("True", "Verdadero"), bi("False", "Falso")],
                    "correctAnswer": "True",
                    "explanation": f"{bi('Correct', 'Correcto')}! [[{en}|{es}]]."
                }]
            },
            "topicName": "Vocabulary"
        })
    
    return exercises


def gen_reading_lesson(job_key, level, unit):
    u = unit["n"]
    topic = unit["topic"]
    text = unit["reading_text"]
    title = f"Lectura: {unit['title_es']}"
    vocab = unit["vocab"]
    
    words = text.split()
    
    def bi_word(w):
        clean = w.strip(".,!?;:")
        for en, es in vocab:
            if en.lower() == clean.lower():
                return w.replace(clean, f"[[{clean}|{es}]]")
        return w
    
    def annotated_text():
        ann = []
        for w in words[:40]:
            ann.append(bi_word(w))
        return " ".join(ann) + "..."
    
    text_annotated = annotated_text()
    
    questions = [
        {"q": f"[[What|Qué]] [[is|es]] [[the|el]] [[main|principal]] [[topic|tema]] [[of|de]] [[the|el]] [[text|texto]]?",
         "opts": [bi(topic, topic), bi("Other topic", "Otro tema"), bi("Weather", "Tiempo"), bi("Sports", "Deportes")],
         "ans": 0, "exp": f"[[The text|El texto]] [[is about|trata sobre]] [[{topic}|{topic}]]."},
        {"q": f"[[Is|Es]] [[this|este]] [[text|texto]] [[about|sobre]] [[professional|profesional]] [[English|inglés]]?",
         "opts": [bi("True", "Verdadero"), bi("False", "Falso")],
         "ans": "True", "exp": f"[[True|Verdadero]]. [[The text|El texto]] [[focuses on|se centra en]] {bi('professional vocabulary', 'vocabulario profesional')}."},
        {"q": f"[[Which|Cuál]] [[word|palabra]] [[from|del]] [[the text|texto]] [[means|significa]] \"{vocab[0][1]}\"?",
         "opts": [bi(vocab[0][0], vocab[0][1]), bi(vocab[1][0], vocab[1][1]), bi(vocab[2][0], vocab[2][1]), bi(vocab[3][0], vocab[3][1])],
         "ans": 0, "exp": f"\"{bi(vocab[0][0], vocab[0][1])}\" {bi('is the correct answer', 'es la respuesta correcta')}."},
    ]
    
    for i in range(4, 16):
        pair = vocab[i % len(vocab)]
        en, es = pair
        wrong1 = vocab[(i+1) % len(vocab)]
        wrong2 = vocab[(i+2) % len(vocab)]
        questions.append({
            "q": f"[[The|El/La]] [[word|palabra]] \"{en}\" [[in|en]] [[this context|este contexto]] [[means|significa]]...",
            "opts": [bi(es, es), bi(wrong1[1], wrong1[1]), bi(wrong2[1], wrong2[1]), bi(vocab[(i+3) % len(vocab)][1], vocab[(i+3) % len(vocab)][1])],
            "ans": 0,
            "exp": f"\"{bi(en, es)}\" {bi('is the correct meaning', 'es el significado correcto')}."
        })
    
    exercise_questions = []
    for q_data in questions[:15]:
        exercise_questions.append({
            "question": q_data["q"],
            "options": q_data["opts"],
            "correctAnswer": q_data["ans"],
            "explanation": q_data["exp"]
        })
    
    return [{
        "id": make_id(job_key, level, u, 3, 1, "r"),
        "type": "reading-comprehension",
        "level": level.upper(),
        "topic": topic,
        "difficulty": "medium",
        "content": {
            "title": title,
            "instructions": f"[[Read|Lee]] [[the|el]] [[following|siguiente]] [[text|texto]] [[and|y]] [[answer|responde]] [[the|las]] [[questions|preguntas]].",
            "passage": text_annotated,
            "questions": exercise_questions
        },
        "topicName": "Reading"
    }]


def gen_listening_lesson(job_key, level, unit):
    u = unit["n"]
    topic = unit["topic"]
    text = unit["listening_text"]
    title = f"Escucha: {unit['title_es']}"
    vocab = unit["vocab"]
    
    questions = []
    for i in range(15):
        pair = vocab[i % len(vocab)]
        en, es = pair
        wrong1 = vocab[(i+1) % len(vocab)]
        wrong2 = vocab[(i+2) % len(vocab)]
        wrong3 = vocab[(i+3) % len(vocab)]
        
        q_type = i % 3
        if q_type == 0:
            questions.append({
                "question": f"[[What|Qué]] [[does|significa]] \"{en}\" [[mean|significar]] [[in|en]] [[this|este]] [[conversation|conversación]]?",
                "options": [bi(es, es), bi(wrong1[1], wrong1[1]), bi(wrong2[1], wrong2[1]), bi(wrong3[1], wrong3[1])],
                "correctAnswer": 0,
                "explanation": f"{bi(en.capitalize(), es.capitalize())} {bi('is the correct meaning', 'es el significado correcto')}."
            })
        elif q_type == 1:
            questions.append({
                "question": f"[[Is|Es]] \"[[{en}|{es}]]\" [[mentioned|mencionado]] [[in|en]] [[the|la]] [[conversation|conversación]]?",
                "options": [bi("True", "Verdadero"), bi("False", "Falso")],
                "correctAnswer": "True" if en.lower() in text.lower() else "False",
                "explanation": f"{bi('Listen carefully', 'Escucha con atención')} {bi('to the audio', 'al audio')} {bi('for the answer', 'para la respuesta')}."
            })
        else:
            questions.append({
                "question": f"[[Which|Cuál]] [[of these|de estas]] [[expressions|expresiones]] [[is|es]] [[used|usada]] [[professionally|profesionalmente]] [[in|en]] [[this context|este contexto]]?",
                "options": [bi(en, es), bi(wrong1[0], wrong1[1]), bi(wrong2[0], wrong2[1]), bi(wrong3[0], wrong3[1])],
                "correctAnswer": 0,
                "explanation": f"\"[[{en}|{es}]]\" {bi('is the most professional expression here', 'es la expresión más profesional aquí')}."
            })
    
    def annotate_transcript(t):
        words = t.split()
        result = []
        for w in words:
            clean = w.strip(".,!?;:'\"")
            annotated = False
            for en, es in vocab:
                if en.lower() == clean.lower():
                    result.append(w.replace(clean, f"[[{clean}|{es}]]"))
                    annotated = True
                    break
            if not annotated:
                result.append(w)
        return " ".join(result)
    
    return [{
        "id": make_id(job_key, level, u, 4, 1, "l"),
        "type": "listening-comprehension",
        "level": level.upper(),
        "topic": topic,
        "difficulty": "medium",
        "content": {
            "title": title,
            "instructions": f"[[Listen|Escucha]] [[to|a]] [[the|el]] [[audio|audio]] [[and|y]] [[answer|responde]] [[the|las]] [[questions|preguntas]].",
            "transcript": annotate_transcript(text),
            "questions": questions
        },
        "topicName": "Listening"
    }]


def gen_speaking_lesson(job_key, level, unit):
    u = unit["n"]
    topic = unit["topic"]
    phrases = unit.get("speaking_phrases", [])
    title = f"Expresión oral: {unit['title_es']}"
    vocab = unit["vocab"]
    
    exercises = []
    
    for i, phrase in enumerate(phrases[:5], 1):
        exercises.append({
            "id": make_id(job_key, level, u, 5, i, "sp"),
            "type": "pronunciation",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": f"[[Read|Lee]] [[the|la]] [[phrase|frase]] [[aloud|en voz alta]] [[and|y]] [[record|graba]] [[your|tu]] [[pronunciation|pronunciación]].",
                "questions": [{
                    "question": phrase,
                    "targetPhrase": phrase,
                    "phonetic": "",
                    "explanation": f"[[Practice|Practica]] [[saying|decir]] [[this|esta]] [[phrase|frase]] [[clearly|claramente]] [[and|y]] [[confidently|con confianza]]."
                }]
            },
            "topicName": "Speaking"
        })
    
    for i in range(6, 16):
        pair = vocab[(i-6) % len(vocab)]
        en, es = pair
        exercises.append({
            "id": make_id(job_key, level, u, 5, i, "sp"),
            "type": "pronunciation",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": f"[[Pronounce|Pronuncia]] [[this|esta]] [[word|palabra]] [[or|o]] [[phrase|frase]] [[correctly|correctamente]].",
                "questions": [{
                    "question": en,
                    "targetPhrase": en,
                    "phonetic": "",
                    "explanation": f"[[In Spanish|En español]]: \"{es}\". [[Practice|Practica]] [[the|la]] [[English|inglesa]] [[pronunciation|pronunciación]]."
                }]
            },
            "topicName": "Speaking"
        })
    
    return exercises


def gen_writing_lesson(job_key, level, unit):
    u = unit["n"]
    topic = unit["topic"]
    title = f"Escritura: {unit['title_es']}"
    vocab = unit["vocab"]
    phrases = unit.get("speaking_phrases", [])
    
    exercises = []
    
    for i, (en, es) in enumerate(vocab[:5], 1):
        wrong1 = vocab[(i) % len(vocab)][0]
        wrong2 = vocab[(i+1) % len(vocab)][0]
        wrong3 = vocab[(i+2) % len(vocab)][0]
        exercises.append({
            "id": make_id(job_key, level, u, 6, i, "w"),
            "type": "fill-blank",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": f"[[Complete|Completa]] [[the|la]] [[sentence|frase]] [[with|con]] [[the|la]] [[correct|correcta]] [[word|palabra]].",
                "questions": [{
                    "question": f"[[In|En]] [[a professional|un contexto profesional]] [[context|,]] [[you|tú]] [[would say|dirías]] ___ [[instead of|en lugar de]] \"{es}\".",
                    "options": [en, wrong1, wrong2, wrong3],
                    "correctAnswer": en,
                    "explanation": f"[[The professional|La expresión profesional]] [[expression|correcta]] [[is|es]] \"{bi(en, es)}\"."
                }]
            },
            "topicName": "Writing"
        })
    
    for i, phrase in enumerate(phrases[:5], 1):
        words = phrase.split()
        exercises.append({
            "id": make_id(job_key, level, u, 6, i+5, "w"),
            "type": "sentence-building",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": f"[[Order|Ordena]] [[the|las]] [[words|palabras]] [[to form|para formar]] [[a correct|una correcta]] [[professional|profesional]] [[sentence|frase]].",
                "questions": [{
                    "question": "[[Arrange|Ordena]]: " + " / ".join(f"[[{w.strip('.,!?')}|{w.strip('.,!?')}]]" for w in sorted(words)),
                    "correctAnswer": phrase,
                    "explanation": f"[[Correct|Correcto]]: \"{phrase}\"."
                }]
            },
            "topicName": "Writing"
        })
    
    for i in range(6, 16):
        pair = vocab[i % len(vocab)]
        en, es = pair
        wrong1 = vocab[(i+1) % len(vocab)]
        wrong2 = vocab[(i+2) % len(vocab)]
        wrong3 = vocab[(i+3) % len(vocab)]
        exercises.append({
            "id": make_id(job_key, level, u, 6, i, "w"),
            "type": "multiple-choice",
            "level": level.upper(),
            "topic": topic,
            "difficulty": "medium",
            "content": {
                "title": title,
                "instructions": f"[[Choose|Elige]] [[the|la]] [[most|más]] [[appropriate|apropiada]] [[word|palabra]] [[for|para]] [[this|este]] [[professional|profesional]] [[context|contexto]].",
                "questions": [{
                    "question": f"[[In|En]] [[a formal|un formal]] [[professional|profesional]] [[context|contexto]], [[how|cómo]] [[would you express|expresarías]] \"{es}\"?",
                    "options": [en, wrong1[0], wrong2[0], wrong3[0]],
                    "correctAnswer": 0,
                    "explanation": f"\"{bi(en, es)}\" {bi('is the most appropriate professional expression', 'es la expresión profesional más apropiada')}."
                }]
            },
            "topicName": "Writing"
        })
    
    return exercises


print("Generator functions defined")

import json

def exercises_to_ts(exercises, const_name):
    lines = [f"import {{ Exercise }} from '@/lib/exercise-generator';\n\nexport const {const_name}: Exercise[] = ["]
    for ex in exercises:
        lines.append("  " + json.dumps(ex, ensure_ascii=False, indent=2).replace("\n", "\n  ") + ",")
    lines.append("];")
    return "\n".join(lines)


def write_unit_files(job_key, level_key, unit, out_dir):
    u = unit["n"]
    level_upper = level_key.upper()
    
    generators = [
        (gen_grammar_lesson, f"UNIT_{u}_LESSON_1_GRAMMAR"),
        (gen_vocabulary_lesson, f"UNIT_{u}_LESSON_2_VOCABULARY"),
        (gen_reading_lesson, f"UNIT_{u}_LESSON_3_READING"),
        (gen_listening_lesson, f"UNIT_{u}_LESSON_4_LISTENING"),
        (gen_speaking_lesson, f"UNIT_{u}_LESSON_5_SPEAKING"),
        (gen_writing_lesson, f"UNIT_{u}_LESSON_6_WRITING"),
    ]
    
    lesson_names = ["grammar", "vocabulary", "reading", "listening", "speaking", "writing"]
    
    for (gen_fn, const_name), lesson_name in zip(generators, lesson_names):
        exercises = gen_fn(job_key, level_key, unit)
        ts = exercises_to_ts(exercises, const_name)
        fname = f"unit-{u}-lesson-{['1','2','3','4','5','6'][lesson_names.index(lesson_name)]}-{lesson_name}.ts"
        path = os.path.join(out_dir, fname)
        with open(path, "w", encoding="utf-8") as f:
            f.write(f"/**\n * Unit {u} — {unit['title_en']} ({level_upper})\n * {lesson_name.capitalize()} lesson\n */\n\n")
            f.write(ts)
            f.write("\n")
        print(f"  Written: {fname}")
    
    # lessons-index.ts
    idx_content = f"""/**
 * Unit {u} lessons index ({level_upper})
 */

import {{ Exercise }} from '@/lib/exercise-generator';
import {{ UNIT_{u}_LESSON_1_GRAMMAR }} from './unit-{u}-lesson-1-grammar';
import {{ UNIT_{u}_LESSON_2_VOCABULARY }} from './unit-{u}-lesson-2-vocabulary';
import {{ UNIT_{u}_LESSON_3_READING }} from './unit-{u}-lesson-3-reading';
import {{ UNIT_{u}_LESSON_4_LISTENING }} from './unit-{u}-lesson-4-listening';
import {{ UNIT_{u}_LESSON_5_SPEAKING }} from './unit-{u}-lesson-5-speaking';
import {{ UNIT_{u}_LESSON_6_WRITING }} from './unit-{u}-lesson-6-writing';

export const UNIT_{u}_LESSONS = {{
  grammar: UNIT_{u}_LESSON_1_GRAMMAR,
  vocabulary: UNIT_{u}_LESSON_2_VOCABULARY,
  reading: UNIT_{u}_LESSON_3_READING,
  listening: UNIT_{u}_LESSON_4_LISTENING,
  speaking: UNIT_{u}_LESSON_5_SPEAKING,
  writing: UNIT_{u}_LESSON_6_WRITING,
}} as const;

export const UNIT_{u}_ALL_LESSONS: Exercise[][] = [
  UNIT_{u}_LESSON_1_GRAMMAR,
  UNIT_{u}_LESSON_2_VOCABULARY,
  UNIT_{u}_LESSON_3_READING,
  UNIT_{u}_LESSON_4_LISTENING,
  UNIT_{u}_LESSON_5_SPEAKING,
  UNIT_{u}_LESSON_6_WRITING,
];

export const UNIT_{u}_ALL_EXERCISES: Exercise[] = UNIT_{u}_ALL_LESSONS.flat();
"""
    with open(os.path.join(out_dir, f"unit-{u}-lessons-index.ts"), "w", encoding="utf-8") as f:
        f.write(idx_content)
    print(f"  Written: unit-{u}-lessons-index.ts")
    
    # unit.ts
    unit_content = f"""/**
 * Unit {u} — {unit['title_en']} ({level_upper})
 */

import {{ UNIT_{u}_ALL_EXERCISES }} from './unit-{u}-lessons-index';

export const UNIT_TITLE = '{unit["title_es"]}';
export const UNIT_{u}_EXERCISES = UNIT_{u}_ALL_EXERCISES;
"""
    with open(os.path.join(out_dir, f"unit-{u}.ts"), "w", encoding="utf-8") as f:
        f.write(unit_content)
    print(f"  Written: unit-{u}.ts")


def write_course_index(job_key, level_key, units, out_dir):
    u_nums = [u["n"] for u in units]
    
    imports = "\n".join(f"import {{ UNIT_{n}_EXERCISES }} from './unit-{n}';" for n in u_nums)
    imports += "\n" + "\n".join(f"import {{ UNIT_TITLE as UNIT_{n}_TITLE }} from './unit-{n}';" for n in u_nums)
    
    units_arr = "[\n" + "\n".join(
        f"  {{ id: 'unit-{n}', title: UNIT_{n}_TITLE, exercises: UNIT_{n}_EXERCISES }},"
        for n in u_nums
    ) + "\n]"
    
    course_id = f"{job_key}-{level_key}"
    const_name = f"{job_key.upper()}_{level_key.upper()}_COURSE"
    
    content = f"""/**
 * {job_key.capitalize()} {level_key.upper()} Course Index
 */

{imports}

export const {const_name} = {{
  id: '{course_id}',
  units: {units_arr},
}};
"""
    with open(os.path.join(out_dir, "index.ts"), "w", encoding="utf-8") as f:
        f.write(content)
    print(f"  Written: index.ts for {course_id}")


def generate_all():
    for job_key, job_data in COURSES.items():
        for level_key in ["a1", "a2", "b1", "b2"]:
            level_data = job_data[level_key]
            units = level_data["units"]
            
            course_dir = os.path.join(BASE, f"{job_key}-{level_key}")
            os.makedirs(course_dir, exist_ok=True)
            
            print(f"\n=== Generating {job_key}-{level_key} ===")
            
            for unit in units:
                print(f"  Unit {unit['n']}: {unit['title_en']}")
                write_unit_files(job_key, level_key, unit, course_dir)
            
            write_course_index(job_key, level_key, units, course_dir)
    
    print("\n✅ All job course files generated!")

generate_all()
