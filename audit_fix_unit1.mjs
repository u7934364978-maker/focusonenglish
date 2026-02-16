
const exercises = [];

// Helper to create multiple choice
function mc(id, topic, title, instructions, question, options, correct, explanation, topicName = "Vocabulary") {
    return {
        id: `a1-u1-e${id}`,
        type: "multiple-choice",
        level: "A1",
        topic,
        difficulty: "medium",
        content: {
            title,
            instructions,
            questions: [{
                question,
                options,
                correctAnswer: correct,
                explanation
            }]
        },
        topicName
    };
}

// Helper for fill-blank
function fb(id, topic, title, instructions, question, correct, options, explanation, topicName = "Grammar") {
    return {
        id: `a1-u1-e${id}`,
        type: "fill-blank",
        level: "A1",
        topic,
        difficulty: "medium",
        content: {
            title,
            instructions,
            questions: [{
                question,
                correctAnswer: correct,
                options: options.map(opt => opt.includes('[[') ? opt : `[[${opt}|${opt}]]`), // Ensure translation format
                explanation
            }]
        },
        topicName
    };
}

// Helper for sentence building
function sb(id, topic, title, instructions, correctSentence, words, explanation, topicName = "Grammar") {
    return {
        id: `a1-u1-e${id}`,
        type: "sentence-building",
        level: "A1",
        topic,
        difficulty: "hard",
        content: {
            title,
            instructions,
            correctSentence,
            words,
            explanation
        },
        topicName
    };
}

// 1-10: Greetings & Farewells
exercises.push(mc(1, "Greetings", "[[Morning|Mañana]] [[Greeting|Saludo]]", "[[Choose|Elige]] [[the|el]] [[appropriate|apropiado]] [[greeting|saludo]] [[for|para]] [[a|un]] [[business|de negocios]] [[meeting|reunión]] [[at|a las]] 9:00 AM.", "9:00 AM ([[Formal|Formal]])", ["[[Hi|Hola]]", "[[Good morning|Buenos días]]", "[[Hello|Hola]]"], 1, "[[In|En]] [[formal|formales]] [[situations|situaciones]], '[[Good morning|Buenos días]]' [[is|es]] [[the|la]] [[best|mejor]] [[option|opción]]."));
exercises.push(mc(2, "Greetings", "[[Afternoon|Tarde]] [[Greeting|Saludo]]", "[[Someone|Alguien]] [[arrives|llega]] [[at|a las]] 4:00 PM.", "4:00 PM", ["[[Good afternoon|Buenas tardes]]", "[[Good evening|Buenas noches (saludo)]]", "[[Good night|Buenas noches (despedida)]]"], 0, "'[[Afternoon|Tarde]]' [[is|es]] [[between|entre]] [[midday|mediodía]] [[and|y]] [[sunset|atardecer]]."));
exercises.push(mc(3, "Greetings", "[[Evening|Tarde-noche]] [[Greeting|Saludo]]", "[[Meeting|Quedar]] [[with|con]] [[a|un]] [[friend|amigo]] [[at|a las]] 8:00 PM.", "8:00 PM", ["[[Good morning|Buenos días]]", "[[Good afternoon|Buenas tardes]]", "[[Good evening|Buenas noches (saludo)]]"], 2, "'[[Good evening|Buenas noches]]' [[is|es]] [[used|usado]] [[when|cuando]] [[you|tú]] [[arrive|llegas]] [[at|a]] [[night|la noche]]."));
exercises.push(mc(4, "Farewells", "[[Night|Noche]] [[Farewell|Despedida]]", "[[Going|Yéndose]] [[to|a]] [[sleep|dormir]].", "[[Time|Hora]] [[to|de]] [[sleep|dormir]]", ["[[Good evening|Buenas noches (saludo)]]", "[[Good night|Buenas noches (despedida)]]", "[[Hello|Hola]]"], 1, "'[[Good night|Buenas noches]]' [[is|es]] [[only|solo]] [[for|para]] [[farewells|despedidas]], [[not|no]] [[greetings|saludos]]."));
exercises.push(fb(5, "Greetings", "[[Informal|Informal]] [[Greeting|Saludo]]", "[[Complete|Completa]] [[the|el]] [[informal|informal]] [[greeting|saludo]].", "[[Hi|Hola]], [[how|cómo]] [[are|estás]] [[you|tú]]?", "Hi", ["Hi", "Bye"], " '[[Hi|Hola]]' [[is|es]] [[very|muy]] [[common|común]] [[between|entre]] [[friends|amigos]].", "Vocabulary"));
exercises.push(fb(6, "Farewells", "[[Quick|Rápida]] [[Farewell|Despedida]]", "[[Complete|Completa]] [[the|la]] [[short|corta]] [[farewell|despedida]].", "[[See|Ver]] [[you|a ti]] [[later|luego]].", "later", ["later", "afternoon"], " '[[See|Ver]] [[you|a ti]] [[later|luego]]' [[is|es]] [[a|una]] [[common|común]] [[informal|informal]] [[farewell|despedida]].", "Vocabulary"));
exercises.push(sb(7, "Greetings", "[[Polite|Educado]] [[Greeting|Saludo]]", "[[Order|Ordena]] [[the|las]] [[words|palabras]].", "[[Good|Buenos]] [[afternoon|tardes]], [[sir|señor]].", ["[[afternoon|tardes]],", "[[Good|Buenos]]", "[[sir|señor]]."], "[[Formal|Formal]] [[address|tratamiento]] [[for|para]] [[a|un]] [[man|hombre]] [[you|tú]] [[don't|no]] [[know|conoces]]."));
exercises.push(sb(8, "Farewells", "[[Formal|Formal]] [[Farewell|Despedida]]", "[[Build|Construye]] [[the|la]] [[sentence|frase]].", "[[Goodbye|Adiós]], [[have|tenga]] [[a|un]] [[nice|buen]] [[day|día]].", ["[[have|tenga]]", "[[Goodbye|Adiós]],", "[[day|día]].", "[[nice|buen]]", "[[a|un]]"], "[[A|Una]] [[polite|educada]] [[way|forma]] [[to|de]] [[end|terminar]] [[a|una]] [[conversation|conversación]]."));
exercises.push(mc(9, "Greetings", "[[First|Primer]] [[Meeting|Encuentro]]", "[[What|Qué]] [[do|aux]] [[you|tú]] [[say|dices]] [[when|cuando]] [[you|tú]] [[meet|conoces]] [[someone|a alguien]] [[for|por]] [[the|la]] [[first|primera]] [[time|vez]]?", "[[First|Primer]] [[meeting|encuentro]]", ["[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]]", "[[Nice|Encantado]] [[to|de]] [[see|verte]] [[you|a ti]] [[again|otra vez]]", "[[Bye|Adiós]]"], 0, "[[Use|Usa]] '[[meet|conocer]]' [[only|solo]] [[for|para]] [[the|la]] [[first|primera]] [[time|vez]] [[you|tú]] [[see|ves]] [[someone|a alguien]]."));
exercises.push(fb(10, "Greetings", "[[Greeting|Saludo]] [[Response|Respuesta]]", "[[Respond|Responde]] [[to|a]] '[[How|Cómo]] [[are|estás]] [[you|tú]]?'.", "[[I|Yo]] [[am|estoy]] [[fine|bien]], [[thank|gracias]] [[you|ti]].", "fine", ["fine", "bad"], "'[[Fine|Bien]]' [[is|es]] [[the|la]] [[most|más]] [[standard|estándar]] [[and|y]] [[positive|positiva]] [[response|respuesta]].", "Vocabulary"));

// 11-20: Personal Information
exercises.push(mc(11, "Personal Info", "[[Asking|Preguntando]] [[for|por]] [[Name|Nombre]]", "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]].", "[[Name|Nombre]]?", ["[[Who|Quién]] [[are|eres]] [[your|tu]] [[name|nombre]]?", "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?", "[[How|Cómo]] [[is|es]] [[your|tu]] [[name|nombre]]?"], 1, "[[We|Nosotros]] [[always|siempre]] [[use|usamos]] '[[What|Cuál]]' [[to|para]] [[ask|preguntar]] [[for|por]] [[names|nombres]]."));
exercises.push(fb(12, "Personal Info", "[[Surname|Apellido]] [[Meaning|Significado]]", "[[Another|Otra]] [[word|palabra]] [[for|para]] '[[last|último]] [[name|nombre]]'.", "[[Your|Tu]] [[family|de familia]] [[name|nombre]] [[is|es]] [[your|tu]] [[surname|apellido]].", "surname", ["surname", "nickname"], "'[[Surname|Apellido]]' [[is|es]] [[the|el]] [[formal|formal]] [[term|término]] [[for|para]] [[family|de familia]] [[name|nombre]].", "Vocabulary"));
exercises.push(mc(13, "Personal Info", "[[Subject|Sujeto]] [[I|Yo]]", "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] [[yourself|ti mismo]].", "[[Myself|Yo mismo]]", ["[[You|Tú]]", "[[I|Yo]]", "[[He|Él]]"], 1, "'[[I|Yo]]' [[must|debe]] [[always|siempre]] [[be|ser]] [[a|una]] [[capital|mayúscula]] [[letter|letra]] [[in|en]] [[English|inglés]]."));
exercises.push(mc(14, "Personal Info", "[[Subject|Sujeto]] [[You|Tú]]", "[[Choose|Elige]] [[the|el]] [[pronoun|pronombre]] [[for|para]] [[the|la]] [[person|persona]] [[you|tú]] [[talk|hablas]] [[to|a]].", "[[Person|Persona]] [[in front|enfrente]]", ["[[I|Yo]]", "[[You|Tú]]", "[[Me|Mí]]"], 1, "'[[You|Tú]]' [[refers|se refiere]] [[to|a]] [[the|la]] [[person|persona]] [[being|que está siendo]] [[addressed|dirigida]]."));
exercises.push(fb(15, "Personal Info", "[[Possessive|Posesivo]] [[My|Mi]]", "[[Complete|Completa]] [[with|con]] '[[mi|my]]'.", "[[My|Mi]] [[name|nombre]] [[is|es]] [[Alice|Alicia]].", "My", ["My", "Your"], "[[My|Mi]] [[is|es]] [[the|el]] [[possessive|posesivo]] [[adjective|adjetivo]] [[for|para]] '[[I|Yo]]'.", "Vocabulary"));
exercises.push(fb(16, "Personal Info", "[[Possessive|Posesivo]] [[Your|Tu]]", "[[Complete|Completa]] [[with|con]] '[[tu|your]]'.", "[[What|Cuál]] [[is|es]] [[your|tu]] [[surname|apellido]]?", "your", ["your", "my"], "[[Your|Tu]] [[is|es]] [[the|el]] [[possessive|posesivo]] [[adjective|adjetivo]] [[for|para]] '[[You|Tú]]'.", "Vocabulary"));
exercises.push(sb(17, "Personal Info", "[[Introduction|Introducción]]", "[[Build|Construye]] [[the|la]] [[sentence|frase]].", "[[I|Yo]] [[am|soy]] [[Mr.|el Sr.]] [[Wilson|Wilson]].", ["[[Wilson|Wilson]].", "[[I|Yo]]", "[[Mr.|el Sr.]]", "[[am|soy]]"], "[[Introducing|Presentándose]] [[formally|formalmente]] [[using|usando]] [[the|el]] [[verb|verbo]] '[[to be|ser]]'."));
exercises.push(sb(18, "Personal Info", "[[Asking|Preguntando]] [[Name|Nombre]]", "[[Build|Construye]] [[the|la]] [[question|pregunta]].", "[[What|Cuál]] [[is|es]] [[your|tu]] [[first|primer]] [[name|nombre]]?", ["[[first|primer]]", "[[What|Cuál]]", "[[your|tu]]", "[[is|es]]", "[[name|nombre]]?"], "[[Asking|Preguntando]] [[specifically|específicamente]] [[for|por]] [[the|el]] [[first|primer]] [[name|nombre]]."));
exercises.push(mc(19, "Personal Info", "[[Identification|Identificación]]", "[[Which|Cuál]] [[is|es]] [[NOT|NO]] [[personal|personal]] [[information|información]]?", "[[Not|No]] [[personal|personal]]", ["[[Name|Nombre]]", "[[Surname|Apellido]]", "[[Weather|Clima]]"], 2, "[[The|El]] [[weather|clima]] [[is|es]] [[an|un]] [[external|externo]] [[topic|tema]], [[not|no]] [[personal|personal]] [[data|datos]]."));
exercises.push(fb(20, "Personal Info", "[[Formal|Formal]] [[Title|Título]]", "[[Title|Título]] [[for|para]] [[a|un]] [[man|hombre]].", "[[Mr.|Sr.]] [[Smith|Smith]] [[is|es]] [[here|aquí]].", "Mr.", ["Mr.", "Ms."], "'[[Mr.|Sr.]]' [[is|es]] [[always|siempre]] [[for|para]] [[men|hombres]].", "Vocabulary"));

// 21-40: Grammar (Verb to be I/You)
for (let i = 21; i <= 25; i++) {
    const isYou = i % 2 === 0;
    exercises.push(mc(i, "Verb To Be", `[[Verb|Verbo]] [[To|A]] [[Be|Ser]] (${i-20})`, "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[form|forma]].", isYou ? "[[You|Tú]] [[are|eres]] [[happy|feliz]]." : "[[I|Yo]] [[am|soy]] [[a|un]] [[student|estudiante]].", ["[[am|soy]]", "[[are|eres]]", "[[is|es]]"], isYou ? 1 : 0, isYou ? "[[You|Tú]] [[always|siempre]] [[pairs|se empareja]] [[with|con]] '[[are|eres]]'." : "[[I|Yo]] [[always|siempre]] [[pairs|se empareja]] [[with|con]] '[[am|soy]]'.", "Grammar"));
}
for (let i = 26; i <= 30; i++) {
    const isYou = i % 2 === 0;
    exercises.push(fb(i, "Verb To Be", `[[Fill|Rellenar]] [[Verb|Verbo]] (${i-25})`, "[[Complete|Completa]] [[the|la]] [[sentence|frase]].", isYou ? "[[You|Tú]] [[are|eres]] [[my|mi]] [[friend|amigo]]." : "[[I|Yo]] [[am|soy]] [[tired|cansado]].", isYou ? "are" : "am", ["am", "are"], isYou ? "[[Use|Usa]] '[[are|eres]]' [[for|para]] [[the|la]] [[second|segunda]] [[person|persona]]." : "[[Use|Usa]] '[[am|soy]]' [[for|para]] [[the|la]] [[first|primera]] [[person|persona]].", "Grammar"));
}
exercises.push(mc(31, "Verb To Be", "[[Negative|Negativo]] [[I|Yo]]", "[[Make|Haz]] [[it|lo]] [[negative|negativo]].", "[[I|Yo]] [[am|soy]] [[hungry|hambriento]].", ["[[I|Yo]] [[am|soy]] [[not|no]] [[hungry|hambriento]]", "[[I|Yo]] [[not|no]] [[am|soy]] [[hungry|hambriento]]", "[[I|Yo]] [[no|no]] [[am|soy]] [[hungry|hambriento]]"], 0, "[[To|Para]] [[make|hacer]] [[it|la]] [[negative|negativa]], [[put|pon]] '[[not|no]]' [[after|después de]] [[the|el]] [[verb|verbo]].", "Grammar"));
exercises.push(mc(32, "Verb To Be", "[[Negative|Negativo]] [[You|Tú]]", "[[Make|Haz]] [[it|lo]] [[negative|negativo]].", "[[You|Tú]] [[are|eres]] [[ready|listo]].", ["[[You|Tú]] [[are|eres]] [[no|no]] [[ready|listo]]", "[[You|Tú]] [[not|no]] [[are|eres]] [[ready|listo]]", "[[You|Tú]] [[are|eres]] [[not|no]] [[ready|listo]]"], 2, "[[The|La]] [[correct|correcta]] [[order|orden]] [[is|es]] [[Subject|Sujeto]] + [[Verb|Verbo]] + [[Not|No]].", "Grammar"));
exercises.push(fb(33, "Verb To Be", "[[Contraction|Contracción]] 1", "[[Write|Escribe]] [[the|la]] [[contraction|contracción]] [[of|de]] '[[I|Yo]] [[am|soy]]'.", "[[I|Yo]] [[am|soy]] = [[I'm|Yo soy]]", "I'm", ["I'm", "Am"], "[[I'm|Yo soy]] [[is|es]] [[the|la]] [[short|corta]] [[form|forma]] [[of|de]] '[[I|Yo]] [[am|soy]]'.", "Grammar"));
exercises.push(fb(34, "Verb To Be", "[[Contraction|Contracción]] 2", "[[Write|Escribe]] [[the|la]] [[contraction|contracción]] [[of|de]] '[[You|Tú]] [[are|eres]]'.", "[[You|Tú]] [[are|eres]] = [[You're|Tú eres]]", "You're", ["You're", "Are"], "[[You're|Tú eres]] [[is|es]] [[the|la]] [[short|corta]] [[form|forma]] [[of|de]] '[[You|Tú]] [[are|eres]]'.", "Grammar"));
exercises.push(fb(35, "Verb To Be", "[[Negative|Negativo]] [[Contraction|Contracción]]", "[[Short|Corta]] [[form|forma]] [[of|de]] '[[You|Tú]] [[are|eres]] [[not|no]]'.", "[[You|Tú]] [[aren't|no eres]] [[late|tarde]].", "aren't", ["aren't", "am not"], "'[[Aren't|No eres]]' [[is|es]] [[the|la]] [[negative|negativa]] [[contraction|contracción]] [[for|para]] '[[You|Tú]]'.", "Grammar"));
exercises.push(sb(36, "Verb To Be", "[[Sentence|Frase]] [[Negative|Negativa]]", "[[Order|Ordena]] [[the|las]] [[words|palabras]].", "[[I|Yo]] [[am|soy]] [[not|no]] [[a|un]] [[teacher|profesor]].", ["[[am|soy]]", "[[not|no]]", "[[teacher|profesor]].", "[[I|Yo]]", "[[a|un]]"], "[[Correct|Correcta]] [[structure|estructura]] [[for|para]] [[negative|negativas]] [[sentences|frases]]."));
exercises.push(sb(37, "Verb To Be", "[[Sentence|Frase]] [[Contraction|Contracción]]", "[[Order|Ordena]] [[the|las]] [[words|palabras]].", "[[You're|Tú eres]] [[very|muy]] [[kind|amable]].", ["[[kind|amable]].", "[[You're|Tú eres]]", "[[very|muy]]"], "[[Using|Usando]] [[contractions|contracciones]] [[in|en]] [[sentences|frases]]."));
exercises.push(mc(38, "Verb To Be", "[[Question|Pregunta]] [[I|Yo]]", "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]].", "[[Am|¿Soy]] [[I|yo]] [[late|tarde]]?", ["[[Am|¿Soy]] [[I|yo]] [[late|tarde]]?", "[[I|Yo]] [[am|soy]] [[late|tarde]]?", "[[Do|¿Aux]] [[I|yo]] [[am|soy]] [[late|tarde]]?"], 0, "[[To|Para]] [[questions|preguntas]], [[we|nosotros]] [[invert|invertimos]] [[verb|verbo]] [[and|y]] [[subject|sujeto]].", "Grammar"));
exercises.push(mc(39, "Verb To Be", "[[Question|Pregunta]] [[You|Tú]]", "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[question|pregunta]].", "[[Are|¿Eres]] [[you|tú]] [[ok|bien]]?", ["[[Are|¿Eres]] [[you|tú]] [[ok|bien]]?", "[[You|Tú]] [[are|eres]] [[ok|bien]]?", "[[Is|¿Es]] [[you|tú]] [[ok|bien]]?"], 0, "[[Questions|Preguntas]] [[with|con]] '[[You|Tú]]' [[start|comienzan]] [[with|con]] '[[Are|¿Eres]]'.", "Grammar"));
exercises.push(fb(40, "Verb To Be", "[[Short|Corta]] [[Answer|Respuesta]]", "[[Answer|Responde]]: '[[Are|¿Eres]] [[you|tú]] [[John|Juan]]?'.", "[[Yes|Sí]], [[I|yo]] [[am|soy]].", "am", ["am", "are"], "[[Always|Siempre]] [[use|usa]] [[the|la]] [[full|completa]] [[form|forma]] [[in|en]] [[positive|positivas]] [[short|cortas]] [[answers|respuestas]].", "Grammar"));

// 41-50: Mixed Vocabulary & Grammar
exercises.push(mc(41, "Personal Info", "[[Age|Edad]] ([[Preview|Avance]])", "[[How|Cómo]] [[do|aux]] [[you|tú]] [[ask|preguntas]] [[the|la]] [[age|edad]]?", "[[Age|Edad]]?", ["[[What|Qué]] [[age|edad]] [[are|tienes]] [[you|tú]]?", "[[How|Qué]] [[old|viejo]] [[are|eres]] [[you|tú]]?", "[[How|Cómo]] [[many|muchos]] [[years|años]] [[have|tienes]] [[you|tú]]?"], 1, "[[In|En]] [[English|inglés]], [[we|nosotros]] [[don't|no]] '[[have|tenemos]]' [[years|años]], [[we|nosotros]] '[[are|somos]]' [[years|años]] [[old|viejos]]."));
exercises.push(fb(42, "Greetings", "[[Good|Buenas]] [[Night|Noches]] [[Logic|Lógica]]", "[[What|Qué]] [[do|aux]] [[you|tú]] [[say|dices]] [[before|antes de]] [[going|ir]] [[to|a]] [[bed|cama]]?", "[[Good|Buenas]] [[night|noches]].", "night", ["night", "evening"], "[[Use|Usa]] '[[night|noches]]' [[for|para]] [[farewell|despedida]] [[at|a la]] [[night|noche]].", "Vocabulary"));
exercises.push(mc(43, "Personal Info", "[[Introduce|Presentar]] [[Someone|a alguien]]", "[[To|Para]] [[introduce|presentar]] [[Alice|Alicia]] [[to|a]] [[Tom|Tom]]:", "[[Introduction|Presentación]]", ["[[Alice|Alicia]], [[this|este]] [[is|es]] [[Tom|Tom]].", "[[Alice|Alicia]], [[he|él]] [[is|es]] [[Tom|Tom]].", "[[Alice|Alicia]], [[you|tú]] [[are|eres]] [[Tom|Tom]]."], 0, "[[Use|Usa]] '[[This|Este]] [[is|es]]' [[when|cuando]] [[introducing|presentando]] [[one|una]] [[person|persona]] [[to|a]] [[another|otra]]."));
exercises.push(fb(44, "Verb To Be", "[[Not|No]] [[Placement|Colocación]]", "[[Put|Pon]] '[[not|no]]' [[in|en]] [[the|la]] [[correct|correcta]] [[place|lugar]].", "[[I|Yo]] [[am|soy]] [[not|no]] [[fine|bien]].", "not", ["not", "no"], "'[[Not|No]]' [[always|siempre]] [[follows|sigue]] [[the|el]] [[verb|verbo]] '[[to be|ser]]'.", "Grammar"));
exercises.push(sb(45, "Personal Info", "[[Full|Nombre]] [[Name|Completo]]", "[[Order|Ordena]] [[the|las]] [[words|palabras]].", "[[My|Mi]] [[full|completo]] [[name|nombre]] [[is|es]] [[John|Juan]] [[Doe|Doe]].", ["[[is|es]]", "[[John|Juan]]", "[[name|nombre]]", "[[My|Mi]]", "[[Doe|Doe]].", "[[full|completo]]"], "[[How|Cómo]] [[to|a]] [[state|decir]] [[your|tu]] [[full|completo]] [[name|nombre]]."));
exercises.push(mc(46, "Greetings", "[[Greeting|Saludo]] [[vs|vs]] [[Farewell|Despedida]]", "[[Which|Cuál]] [[is|es]] [[a|un]] [[greeting|saludo]]?", "[[Identify|Identificar]]", ["[[Bye|Adiós]]", "[[Hello|Hola]]", "[[See|Ver]] [[you|a ti]]"], 1, "'[[Hello|Hola]]' [[is|es]] [[the|el]] [[most|más]] [[common|común]] [[greeting|saludo]].", "Vocabulary"));
exercises.push(fb(47, "Personal Info", "[[Possessive|Posesivo]] [[Choice|Elección]]", "[[Is|¿Es]] [[this|este]] [[your|tu]] [[bag|bolso]]? ([[Ask|Pregunta]])", "your", ["your", "my"], "[[Use|Usa]] '[[your|tu]]' [[to|para]] [[ask|preguntar]] [[about|sobre]] [[possession|posesión]] [[of|de]] [[the|la]] [[other|otra]] [[person|persona]].", "Grammar"));
exercises.push(sb(48, "Verb To Be", "[[Question|Pregunta]] [[Build|Construcción]]", "[[Order|Ordena]] [[the|las]] [[words|palabras]].", "[[Are|¿Eres]] [[you|tú]] [[from|de]] [[London|Londres]]?", ["[[from|de]]", "[[Are|¿Eres]]", "[[London|Londres]]?", "[[you|tú]]"], "[[Correct|Correcta]] [[order|orden]] [[for|para]] [[questions|preguntas]]."));
exercises.push(mc(49, "Personal Info", "[[Title|Título]] [[Ms.|Sra./Srta.]]", "[[What|Qué]] [[does|aux]] '[[Ms.|Sra./Srta.]]' [[mean|significar]]?", "[[Title|Título]]", ["[[Only|Solo]] [[married|casada]] [[woman|mujer]]", "[[Any|Cualquier]] [[woman|mujer]]", "[[A|Un]] [[man|hombre]]"], 1, "'[[Ms.|Sra./Srta.]]' [[is|es]] [[the|la]] [[modern|moderna]] [[and|y]] [[neutral|neutra]] [[way|forma]] [[for|para]] [[any|cualquier]] [[woman|mujer]]."));
exercises.push(fb(50, "Verb To Be", "[[Contraction|Contracción]] [[Check|Revisión]]", "[[Write|Escribe]] [[the|la]] [[contraction|contracción]] [[of|de]] '[[I|Yo]] [[am|soy]] [[not|no]]'.", "[[I'm|Yo soy]] [[not|no]] [[happy|feliz]].", "I'm", ["I'm", "Am"], "'[[I'm|Yo soy]]' [[is|es]] [[the|la]] [[only|única]] [[contraction|contracción]] [[for|para]] '[[I|Yo]] [[am|soy]]'.", "Grammar"));

// 51-60: Reading Comprehension
const transcript1 = "[[A|A]]: [[Hello|Hola]], [[my|mi]] [[name|nombre]] [[is|es]] [[Mark|Marcos]]. [[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]?\n[[B|B]]: [[Hi|Hola]] [[Mark|Marcos]], [[I|yo]] [[am|soy]] [[Sarah|Sara]]. [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]].\n[[A|A]]: [[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]], [[too|también]]. [[Are|¿Eres]] [[you|tú]] [[a|una]] [[student|estudiante]]?\n[[B|B]]: [[Yes|Sí]], [[I|yo]] [[am|soy]].";
for (let i = 1; i <= 3; i++) {
    let q, opts, corr, expl;
    if (i === 1) { q = "[[What|Cuál]] [[is|es]] [[the|el]] [[man's|del hombre]] [[name|nombre]]?"; opts = ["[[Mark|Marcos]]", "[[Sarah|Sara]]", "[[John|Juan]]"]; corr = 0; expl = "[[The|El]] [[man|hombre]] [[introduces|se presenta]] [[himself|él mismo]] [[as|como]] [[Mark|Marcos]]."; }
    if (i === 2) { q = "[[Is|¿Es]] [[Sarah|Sara]] [[a|una]] [[student|estudiante]]?"; opts = ["[[No|No]], [[she|ella]] [[isn't|no es]]", "[[Yes|Sí]], [[she|ella]] [[is|es]]", "[[We|Nosotros]] [[don't|no]] [[know|sabemos]]"]; corr = 1; expl = "[[Sarah|Sara]] [[explicitly|explícitamente]] [[says|dice]] '[[Yes|Sí]], [[I|yo]] [[am|soy]] [[a|una]] [[student|estudiante]]'."; }
    if (i === 3) { q = "[[What|Qué]] [[greeting|saludo]] [[do|aux]] [[they|ellos]] [[use|usan]]?"; opts = ["[[Good|Buenas]] [[night|noches]]", "[[Goodbye|Adiós]]", "[[Hello|Hola]] [[and|y]] [[Hi|Hola]]"]; corr = 2; expl = "[[They|Ellos]] [[use|usan]] '[[Hello|Hola]]' [[and|y]] '[[Hi|Hola]]' [[at|al]] [[the|el]] [[start|inicio]]."; }
    exercises.push({
        id: `a1-u1-e${50+i}`,
        type: "multiple-choice",
        level: "A1",
        topic: "Reading",
        difficulty: "medium",
        transcript: transcript1,
        content: {
            title: "[[Dialogue|Diálogo]]: [[Meeting|Encuentro]]",
            instructions: "[[Read|Lee]] [[the|el]] [[dialogue|diálogo]] [[and|y]] [[answer|responde]] [[the|las]] [[questions|preguntas]].",
            questions: [{ question: q, options: opts, correctAnswer: corr, explanation: expl }]
        },
        topicName: "Reading"
    });
}

const transcript2 = "[[I|Yo]] [[am|soy]] [[Alex|Alex]]. [[My|Mi]] [[surname|apellido]] [[is|es]] [[Reed|Reed]]. [[I|Yo]] [[am|soy]] [[from|de]] [[London|Londres]]. [[I|Yo]] [[am|soy]] [[a|un]] [[teacher|profesor]].";
exercises.push({
    id: `a1-u1-e54`,
    type: "multiple-choice",
    level: "A1",
    topic: "Reading",
    difficulty: "medium",
    transcript: transcript2,
    content: {
        title: "[[Profile|Perfil]]: [[Alex|Alex]]",
        instructions: "[[Read|Lee]] [[the|el]] [[profile|perfil]] [[and|y]] [[answer|responde]].",
        questions: [{ 
            question: "[[What|Cuál]] [[is|es]] [[his|su]] [[surname|apellido]]?", 
            options: ["[[Alex|Alex]]", "[[Reed|Reed]]", "[[London|Londres]]"], 
            correctAnswer: 1, 
            explanation: "[[The|El]] [[text|texto]] [[states|afirma]] [[that|que]] '[[My|Mi]] [[surname|apellido]] [[is|es]] [[Reed|Reed]]'." 
        }]
    },
    topicName: "Reading"
});
exercises.push({
    id: `a1-u1-e55`,
    type: "multiple-choice",
    level: "A1",
    topic: "Reading",
    difficulty: "medium",
    transcript: transcript2,
    content: {
        title: "[[Profile|Perfil]]: [[Alex|Alex]]",
        instructions: "[[Read|Lee]] [[the|el]] [[profile|perfil]] [[and|y]] [[answer|responde]].",
        questions: [{ 
            question: "[[Where|De dónde]] [[is|es]] [[he|él]]?", 
            options: ["[[Paris|París]]", "[[New|Nueva]] [[York|York]]", "[[London|Londres]]"], 
            correctAnswer: 2, 
            explanation: "[[Alex|Alex]] [[says|dice]] [[he|él]] [[is|es]] '[[from|de]] [[London|Londres]]'." 
        }]
    },
    topicName: "Reading"
});

// 56-60: Final Mixed Review
exercises.push(mc(56, "Mixed", "[[Review|Repaso]] 1", "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].", "[[Are|¿Eres]] [[you|tú]] [[Tom|Tom]]?", ["[[Yes|Sí]], [[I|yo]] [[am|soy]]", "[[Yes|Sí]], [[I'm|yo soy]]", "[[Yes|Sí]], [[I|yo]] [[is|soy]]"], 0, "[[Never|Nunca]] [[use|uses]] [[contractions|contracciones]] [[in|en]] [[positive|positivas]] [[short|cortas]] [[answers|respuestas]].", "Grammar"));
exercises.push(fb(57, "Mixed", "[[Review|Repaso]] 2", "[[Complete|Completa]] [[the|la]] [[phrase|frase]].", "[[Goodbye|Adiós]], [[have|tenga]] [[a|un]] [[nice|buen]] [[day|día]].", "have", ["have", "has"], "[[Standard|Estándar]] [[farewell|despedida]] [[phrase|frase]].", "Vocabulary"));
exercises.push(sb(58, "Mixed", "[[Review|Repaso]] 3", "[[Order|Ordena]] [[the|las]] [[words|palabras]].", "[[I|Yo]] [[am|soy]] [[not|no]] [[from|de]] [[Spain|España]].", ["[[from|de]]", "[[not|no]]", "[[am|soy]]", "[[I|Yo]]", "[[Spain|España]]."], "Grammar"));
exercises.push(mc(59, "Mixed", "[[Review|Repaso]] 4", "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].", "[[What|Cuál]] [[is|es]] [[your|tu]] [[name|nombre]]? [[I|Yo]] [[am|soy]] [[Paul|Paul]].", ["[[my|mi]]", "[[your|tu]]", "[[you|tú]]"], 1, "[[Use|Usa]] '[[your|tu]]' [[to|para]] [[ask|preguntar]] [[the|la]] [[other|otra]] [[person's|de la persona]] [[name|nombre]].", "Vocabulary"));
exercises.push(fb(60, "Mixed", "[[Review|Repaso]] 5", "[[Final|Final]] [[Check|Revisión]] [[of|de]] [[Politeness|Cortesía]].", "[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]].", "you", ["you", "your"], "[[Complete|Completa]] [[the|la]] [[phrase|frase]] '[[Nice|Encantado]] [[to|de]] [[meet|conocerte]] [[you|a ti]]'.", "Vocabulary"));

console.log(`import { Exercise } from '@/lib/exercise-generator';`);
console.log(`export const UNIT_1_EXERCISES: Exercise[] = ${JSON.stringify(exercises, null, 2)};`);
