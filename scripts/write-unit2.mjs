import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const contentDir = join(__dirname, '../src/content/cursos/ingles-a1');

const unit2 = {
  "course": {
    "language_ui": "es-ES",
    "target_language": "en",
    "level": "A1",
    "unit_id": "U2",
    "unit_title": "Countries, Nationalities and Numbers",
    "total_duration_minutes": 120
  },
  "learning_outcomes": [
    "Name countries and nationalities in English (France/French, Spain/Spanish, UK/British, USA/American, Germany/German, Italy/Italian)",
    "Count and use numbers 1–10 in context",
    "Use verb 'to be' with He, She, It, We, They (is/are)",
    "Read short descriptions of people from different countries"
  ],
  "blocks": [
    {
      "block_id": "B1",
      "title": "Countries and Nationalities",
      "content": [
        {
          "interaction_id": "U2_I1",
          "type": "matching",
          "prompt_es": "Une el [[country|país]] con su [[nationality|nacionalidad]]:",
          "pairs": [
            { "id": "p1", "left": "[[France|Francia]]", "right": "Española" },
            { "id": "p2", "left": "[[Spain|España]]", "right": "Alemana" },
            { "id": "p3", "left": "[[Germany|Alemania]]", "right": "Italiana" },
            { "id": "p4", "left": "[[Italy|Italia]]", "right": "Francesa" }
          ],
          "correct_answer": { "p1": "p4", "p2": "p1", "p3": "p2", "p4": "p3" },
          "mastery_tag": "countries"
        },
        {
          "interaction_id": "U2_I2",
          "type": "multiple-choice",
          "prompt_es": "[[Pablo|Pablo]] [[is|es]] [[from|de]] [[Spain|España]]. [[He|Él]] [[is|es]] ___.",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[Spanish|Español]]" },
            { "id": "o2", "text": "[[Italian|Italiano]]" },
            { "id": "o3", "text": "[[French|Francés]]" }
          ],
          "correct_answer": "o1"
        },
        {
          "interaction_id": "U2_I3",
          "type": "multiple-choice",
          "prompt_es": "[[Emma|Emma]] [[is|es]] [[from|de]] [[the|el]] [[UK|Reino Unido]]. [[She|Ella]] [[is|es]] ___.",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[American|Americana]]" },
            { "id": "o2", "text": "[[British|Británica]]" },
            { "id": "o3", "text": "[[German|Alemana]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I4",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] [[the|la]] [[nationality|nacionalidad]] [[correct|correcta]].",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "stimulus_en": "[[Carlos|Carlos]] [[is|es]] [[from|de]] [[Spain|España]]. [[He|Él]] [[is|es]] _____.",
          "correct_answer": "Spanish"
        },
        {
          "interaction_id": "U2_I5",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] [[the|la]] [[nationality|nacionalidad]] [[correct|correcta]].",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "stimulus_en": "[[Sophie|Sophie]] [[is|es]] [[from|de]] [[France|Francia]]. [[She|Ella]] [[is|es]] _____.",
          "correct_answer": "French"
        },
        {
          "interaction_id": "U2_I6",
          "type": "multiple-choice",
          "prompt_es": "¿Cuál [[is|es]] [[the|la]] [[nationality|nacionalidad]] [[of|de]] [[someone|alguien]] [[from|de]] [[Germany|Alemania]]?",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[Italian|Italiano]]" },
            { "id": "o2", "text": "[[French|Francés]]" },
            { "id": "o3", "text": "[[German|Alemán]]" }
          ],
          "correct_answer": "o3"
        },
        {
          "interaction_id": "U2_I7",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]].",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "stimulus_en": "[[Marco|Marco]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[He|Él]] [[is|es]] _____.",
          "correct_answer": "Italian"
        },
        {
          "interaction_id": "U2_I8",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]].",
          "mastery_tag": "nationalities",
          "complexity": 1,
          "stimulus_en": "[[Lisa|Lisa]] [[is|es]] [[from|de]] [[the|los]] [[USA|Estados Unidos]]. [[She|Ella]] [[is|es]] _____.",
          "correct_answer": "American"
        },
        {
          "interaction_id": "U2_I9",
          "type": "multiple-choice",
          "prompt_es": "[[John|John]] [[is|es]] [[from|de]] [[the|el]] [[UK|Reino Unido]]. ¿Cuál [[is|es]] [[his|su]] [[nationality|nacionalidad]]?",
          "mastery_tag": "nationalities",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[British|Británico]]" },
            { "id": "o2", "text": "[[Spanish|Español]]" },
            { "id": "o3", "text": "[[American|Americano]]" }
          ],
          "correct_answer": "o1"
        },
        {
          "interaction_id": "U2_I10",
          "type": "matching",
          "prompt_es": "[[Match|Empareja]] [[the|el]] [[country|país]] [[with|con]] [[its|su]] [[nationality|nacionalidad]]:",
          "pairs": [
            { "id": "p1", "left": "[[UK|Reino Unido]]", "right": "Americana" },
            { "id": "p2", "left": "[[USA|Estados Unidos]]", "right": "Británica" },
            { "id": "p3", "left": "[[France|Francia]]", "right": "Española" },
            { "id": "p4", "left": "[[Spain|España]]", "right": "Francesa" }
          ],
          "correct_answer": { "p1": "p2", "p2": "p1", "p3": "p4", "p4": "p3" },
          "mastery_tag": "countries"
        },
        {
          "interaction_id": "U2_I11",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[She|Ella]] [[is|es]] [[French|Francesa]]'.",
          "mastery_tag": "nationalities",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[French|Francesa]]" },
            { "id": "w2", "text": "[[She|Ella]]" },
            { "id": "w3", "text": "[[is|es]]" },
            { "id": "w4", "text": "." }
          ],
          "correct_answer": ["w2","w3","w1","w4"]
        },
        {
          "interaction_id": "U2_I12",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[He|Él]] [[is|es]] [[American|Americano]]'.",
          "mastery_tag": "nationalities",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[American|Americano]]" },
            { "id": "w2", "text": "[[is|es]]" },
            { "id": "w3", "text": "[[He|Él]]" },
            { "id": "w4", "text": "." }
          ],
          "correct_answer": ["w3","w2","w1","w4"]
        },
        {
          "interaction_id": "U2_I13",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]].",
          "mastery_tag": "nationalities",
          "complexity": 2,
          "stimulus_en": "[[Hans|Hans]] [[is|es]] [[from|de]] [[Germany|Alemania]]. [[He|Él]] [[is|es]] _____.",
          "correct_answer": "German"
        },
        {
          "interaction_id": "U2_I14",
          "type": "multiple-choice",
          "prompt_es": "[[Anna|Anna]] [[is|es]] [[from|de]] [[Italy|Italia]]. ¿Cómo [[do|hay que]] [[say|decir]] [[her|su]] [[nationality|nacionalidad]]?",
          "mastery_tag": "nationalities",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[Spanish|Española]]" },
            { "id": "o2", "text": "[[Italian|Italiana]]" },
            { "id": "o3", "text": "[[British|Británica]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I15",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
          "mastery_tag": "countries",
          "complexity": 2,
          "stimulus_en": "[[Jack|Jack]] [[is|es]] [[American|Americano]]. [[He|Él]] [[is|es]] [[from|de]] [[the|los]] _____.",
          "correct_answer": "USA"
        }
      ]
    },
    {
      "block_id": "B2",
      "title": "Numbers 1–10",
      "content": [
        {
          "interaction_id": "U2_I16",
          "type": "matching",
          "prompt_es": "[[Match|Empareja]] [[the|el]] [[number|número]] [[with|con]] [[its|su]] [[word|palabra]]:",
          "pairs": [
            { "id": "p1", "left": "[[One|1]]", "right": "3" },
            { "id": "p2", "left": "[[Two|2]]", "right": "1" },
            { "id": "p3", "left": "[[Three|3]]", "right": "4" },
            { "id": "p4", "left": "[[Four|4]]", "right": "2" }
          ],
          "correct_answer": { "p1": "p2", "p2": "p4", "p3": "p1", "p4": "p3" },
          "mastery_tag": "numbers"
        },
        {
          "interaction_id": "U2_I17",
          "type": "multiple-choice",
          "prompt_es": "¿Cómo [[se|se]] [[dice|dice]] '[[5|cinco]]' [[in|en]] [[English|inglés]]?",
          "mastery_tag": "numbers",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[Four|Cuatro]]" },
            { "id": "o2", "text": "[[Six|Seis]]" },
            { "id": "o3", "text": "[[Five|Cinco]]" }
          ],
          "correct_answer": "o3"
        },
        {
          "interaction_id": "U2_I18",
          "type": "fill-blank",
          "prompt_es": "[[Write|Escribe]] [[the|el]] [[number|número]] [[in|en]] [[English|inglés]].",
          "mastery_tag": "numbers",
          "complexity": 1,
          "stimulus_en": "7 = _____",
          "correct_answer": "seven"
        },
        {
          "interaction_id": "U2_I19",
          "type": "fill-blank",
          "prompt_es": "[[Write|Escribe]] [[the|el]] [[number|número]] [[in|en]] [[English|inglés]].",
          "mastery_tag": "numbers",
          "complexity": 1,
          "stimulus_en": "10 = _____",
          "correct_answer": "ten"
        },
        {
          "interaction_id": "U2_I20",
          "type": "multiple-choice",
          "prompt_es": "¿Cómo [[se|se]] [[dice|dice]] '[[3|tres]]' [[in|en]] [[English|inglés]]?",
          "mastery_tag": "numbers",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[Three|Tres]]" },
            { "id": "o2", "text": "[[Two|Dos]]" },
            { "id": "o3", "text": "[[Four|Cuatro]]" }
          ],
          "correct_answer": "o1"
        },
        {
          "interaction_id": "U2_I21",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] [[the|el]] [[number|número]].",
          "mastery_tag": "numbers",
          "complexity": 1,
          "stimulus_en": "[[There|Hay]] [[are|son]] _____ [[students|estudiantes]] [[in|en]] [[the|la]] [[class|clase]]. (8)",
          "correct_answer": "eight"
        },
        {
          "interaction_id": "U2_I22",
          "type": "multiple-choice",
          "prompt_es": "¿Cuántos [[students|estudiantes]] [[hay|hay]]? '[[There|Hay]] [[are|son]] [[nine|nueve]] _____'",
          "mastery_tag": "numbers",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "9" },
            { "id": "o2", "text": "6" },
            { "id": "o3", "text": "3" }
          ],
          "correct_answer": "o1"
        },
        {
          "interaction_id": "U2_I23",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[I|Yo]] [[am|tengo]] [[six|seis]] [[books|libros]]'.",
          "mastery_tag": "numbers",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[books|libros]]" },
            { "id": "w2", "text": "[[six|seis]]" },
            { "id": "w3", "text": "[[I|Yo]]" },
            { "id": "w4", "text": "[[have|tengo]]" },
            { "id": "w5", "text": "." }
          ],
          "correct_answer": ["w3","w4","w2","w1","w5"]
        },
        {
          "interaction_id": "U2_I24",
          "type": "fill-blank",
          "prompt_es": "[[Write|Escribe]] [[the|el]] [[number|número]].",
          "mastery_tag": "numbers",
          "complexity": 1,
          "stimulus_en": "2 = _____",
          "correct_answer": "two"
        },
        {
          "interaction_id": "U2_I25",
          "type": "fill-blank",
          "prompt_es": "[[Write|Escribe]] [[the|el]] [[number|número]].",
          "mastery_tag": "numbers",
          "complexity": 1,
          "stimulus_en": "9 = _____",
          "correct_answer": "nine"
        },
        {
          "interaction_id": "U2_I26",
          "type": "multiple-choice",
          "prompt_es": "¿Cómo [[se|se]] [[dice|dice]] '[[8|ocho]]' [[in|en]] [[English|inglés]]?",
          "mastery_tag": "numbers",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[Seven|Siete]]" },
            { "id": "o2", "text": "[[Eight|Ocho]]" },
            { "id": "o3", "text": "[[Nine|Nueve]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I27",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[She|Ella]] [[is|tiene]] [[ten|diez]] [[pens|bolígrafos]]'.",
          "mastery_tag": "numbers",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[pens|bolígrafos]]" },
            { "id": "w2", "text": "[[ten|diez]]" },
            { "id": "w3", "text": "[[She|Ella]]" },
            { "id": "w4", "text": "[[has|tiene]]" },
            { "id": "w5", "text": "." }
          ],
          "correct_answer": ["w3","w4","w2","w1","w5"]
        }
      ]
    },
    {
      "block_id": "B3",
      "title": "Verb 'to be': He, She, It, We, They",
      "content": [
        {
          "interaction_id": "U2_I28",
          "type": "matching",
          "prompt_es": "[[Match|Empareja]] [[the|el]] [[pronoun|pronombre]] [[with|con]] [[its|su]] [[verb|verbo]] [[to be|ser/estar]]:",
          "pairs": [
            { "id": "p1", "left": "[[He|Él]]", "right": "[[are|son/están]]" },
            { "id": "p2", "left": "[[She|Ella]]", "right": "[[is|es/está]]" },
            { "id": "p3", "left": "[[We|Nosotros]]", "right": "[[is|es/está]]" },
            { "id": "p4", "left": "[[They|Ellos]]", "right": "[[are|son/están]]" }
          ],
          "correct_answer": { "p1": "p2", "p2": "p3", "p3": "p4", "p4": "p1" },
          "mastery_tag": "verb to be"
        },
        {
          "interaction_id": "U2_I29",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
          "mastery_tag": "verb to be",
          "complexity": 1,
          "stimulus_en": "[[He|Él]] _____ [[a|un]] [[doctor|médico]].",
          "correct_answer": "is"
        },
        {
          "interaction_id": "U2_I30",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
          "mastery_tag": "verb to be",
          "complexity": 1,
          "stimulus_en": "[[She|Ella]] _____ [[a|una]] [[student|estudiante]].",
          "correct_answer": "is"
        },
        {
          "interaction_id": "U2_I31",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
          "mastery_tag": "verb to be",
          "complexity": 1,
          "stimulus_en": "[[It|Ello]] _____ [[a|un]] [[big|grande]] [[city|ciudad]].",
          "correct_answer": "is"
        },
        {
          "interaction_id": "U2_I32",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
          "mastery_tag": "verb to be",
          "complexity": 1,
          "stimulus_en": "[[We|Nosotros]] _____ [[students|estudiantes]].",
          "correct_answer": "are"
        },
        {
          "interaction_id": "U2_I33",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] '[[is|es]]' [[or|o]] '[[are|son]]'.",
          "mastery_tag": "verb to be",
          "complexity": 1,
          "stimulus_en": "[[They|Ellos]] _____ [[friends|amigos]].",
          "correct_answer": "are"
        },
        {
          "interaction_id": "U2_I34",
          "type": "multiple-choice",
          "prompt_es": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "stimulus_en": "[[She|Ella]] (_____) [[happy|feliz]].",
          "options": [
            { "id": "o1", "text": "[[am|soy]]" },
            { "id": "o2", "text": "[[are|eres]]" },
            { "id": "o3", "text": "[[is|es]]" }
          ],
          "correct_answer": "o3"
        },
        {
          "interaction_id": "U2_I35",
          "type": "multiple-choice",
          "prompt_es": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "stimulus_en": "[[They|Ellos]] (_____) [[at|en]] [[school|la escuela]].",
          "options": [
            { "id": "o1", "text": "[[are|son]]" },
            { "id": "o2", "text": "[[is|es]]" },
            { "id": "o3", "text": "[[am|soy]]" }
          ],
          "correct_answer": "o1"
        },
        {
          "interaction_id": "U2_I36",
          "type": "multiple-choice",
          "prompt_es": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[verb|verbo]].",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "stimulus_en": "[[We|Nosotros]] (_____) [[here|aquí]].",
          "options": [
            { "id": "o1", "text": "[[is|es]]" },
            { "id": "o2", "text": "[[are|somos]]" },
            { "id": "o3", "text": "[[am|soy]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I37",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[He|Él]] [[is|es]] [[Spanish|Español]]'.",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[Spanish|Español]]" },
            { "id": "w2", "text": "[[He|Él]]" },
            { "id": "w3", "text": "[[is|es]]" },
            { "id": "w4", "text": "." }
          ],
          "correct_answer": ["w2","w3","w1","w4"]
        },
        {
          "interaction_id": "U2_I38",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[They|Ellos]] [[are|son]] [[British|Británicos]]'.",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[British|Británicos]]" },
            { "id": "w2", "text": "[[are|son]]" },
            { "id": "w3", "text": "[[They|Ellos]]" },
            { "id": "w4", "text": "." }
          ],
          "correct_answer": ["w3","w2","w1","w4"]
        },
        {
          "interaction_id": "U2_I39",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[the|la]] [[contraction|contracción]].",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "stimulus_en": "[[She|Ella]] _____ [[a|una]] [[teacher|profesora]]. (contracción)",
          "correct_answer": "She's"
        },
        {
          "interaction_id": "U2_I40",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[the|la]] [[contraction|contracción]].",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "stimulus_en": "[[They|Ellos]] _____ [[students|estudiantes]]. (contracción)",
          "correct_answer": "They're"
        },
        {
          "interaction_id": "U2_I41",
          "type": "multiple-choice",
          "prompt_es": "¿Cuál [[es|es]] [[la|la]] [[contraction|contracción]] [[correcta|correcta]] [[de|de]] '[[He|Él]] [[is|es]]'?",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[He're|Él son]]" },
            { "id": "o2", "text": "[[He's|Él es]]" },
            { "id": "o3", "text": "[[He'm|Él soy]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I42",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[with|con]] [[the|el]] [[correct|correcto]] [[pronoun|pronombre]].",
          "mastery_tag": "verb to be",
          "complexity": 2,
          "stimulus_en": "[[Maria|María]] [[is|es]] [[a|una]] [[student|estudiante]]. _____ [[is|es]] [[Spanish|Española]].",
          "correct_answer": "She"
        }
      ]
    },
    {
      "block_id": "B4",
      "title": "Reading: Students from Around the World",
      "content": [
        {
          "interaction_id": "U2_I43",
          "type": "reading_phase",
          "prompt_es": "[[Read|Lee]] [[the|el]] [[following|siguiente]] [[text|texto]] [[carefully|con atención]].",
          "transcript": "[[Hello|Hola]]! [[My|Mi]] [[name|nombre]] [[is|es]] [[Sofia|Sofía]]. [[I|Yo]] [[am|soy]] [[from|de]] [[Spain|España]]. [[I|Yo]] [[am|soy]] [[Spanish|Española]]. [[I|Yo]] [[am|soy]] [[a|una]] [[student|estudiante]]. [[I|Yo]] [[am|soy]] [[twenty|veinte]] [[years|años]] [[old|vieja]].\n\n[[This|Este]] [[is|es]] [[Luca|Luca]]. [[He|Él]] [[is|es]] [[from|de]] [[Italy|Italia]]. [[He|Él]] [[is|es]] [[Italian|Italiano]]. [[He|Él]] [[is|es]] [[a|un]] [[teacher|profesor]]. [[He|Él]] [[is|es]] [[thirty-five|treinta y cinco]] [[years|años]] [[old|viejo]].\n\n[[This|Esta]] [[is|es]] [[Emma|Emma]]. [[She|Ella]] [[is|es]] [[from|de]] [[the|el]] [[UK|Reino Unido]]. [[She|Ella]] [[is|es]] [[British|Británica]]. [[She|Ella]] [[is|es]] [[eighteen|dieciocho]] [[years|años]] [[old|vieja]]. [[She|Ella]] [[is|es]] [[a|una]] [[student|estudiante]] [[too|también]].\n\n[[There|Hay]] [[are|son]] [[ten|diez]] [[students|estudiantes]] [[in|en]] [[our|nuestra]] [[class|clase]]. [[Six|Seis]] [[are|son]] [[Spanish|Españoles]] [[and|y]] [[four|cuatro]] [[are|son]] [[from|de]] [[other|otros]] [[countries|países]].",
          "mastery_tag": "reading"
        },
        {
          "interaction_id": "U2_I44",
          "type": "multiple-choice",
          "prompt_es": "¿[[De|De]] [[dónde|dónde]] [[es|es]] [[Sofia|Sofía]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[Italy|Italia]]" },
            { "id": "o2", "text": "[[Spain|España]]" },
            { "id": "o3", "text": "[[UK|Reino Unido]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I45",
          "type": "multiple-choice",
          "prompt_es": "¿Cuál [[es|es]] [[la|la]] [[profesión|profesión]] [[de|de]] [[Luca|Luca]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[Student|Estudiante]]" },
            { "id": "o2", "text": "[[Doctor|Doctor]]" },
            { "id": "o3", "text": "[[Teacher|Profesor]]" }
          ],
          "correct_answer": "o3"
        },
        {
          "interaction_id": "U2_I46",
          "type": "multiple-choice",
          "prompt_es": "¿[[De|De]] [[dónde|dónde]] [[es|es]] [[Emma|Emma]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[UK|Reino Unido]]" },
            { "id": "o2", "text": "[[France|Francia]]" },
            { "id": "o3", "text": "[[Germany|Alemania]]" }
          ],
          "correct_answer": "o1"
        },
        {
          "interaction_id": "U2_I47",
          "type": "true-false",
          "prompt_es": "[[Emma|Emma]] [[is|es]] [[a|un]] [[teacher|profesor]]. ¿[[Verdadero|Verdadero]] [[or|o]] [[falso|falso]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "correct_answer": false
        },
        {
          "interaction_id": "U2_I48",
          "type": "true-false",
          "prompt_es": "[[There|Hay]] [[are|son]] [[ten|diez]] [[students|estudiantes]] [[in|en]] [[the|la]] [[class|clase]]. ¿[[Verdadero|Verdadero]] [[or|o]] [[falso|falso]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "correct_answer": true
        },
        {
          "interaction_id": "U2_I49",
          "type": "multiple-choice",
          "prompt_es": "¿[[Qué|Qué]] [[nationality|nacionalidad]] [[is|es]] [[Luca|Luca]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[Spanish|Español]]" },
            { "id": "o2", "text": "[[Italian|Italiano]]" },
            { "id": "o3", "text": "[[British|Británico]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I50",
          "type": "true-false",
          "prompt_es": "[[Sofia|Sofía]] [[is|es]] [[Spanish|Española]]. ¿[[Verdadero|Verdadero]] [[or|o]] [[falso|falso]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "correct_answer": true
        },
        {
          "interaction_id": "U2_I51",
          "type": "multiple-choice",
          "prompt_es": "¿[[Cuántos|Cuántos]] [[students|estudiantes]] [[son|son]] [[Spanish|Españoles]] [[in|en]] [[the|la]] [[class|clase]]?",
          "mastery_tag": "reading_comprehension",
          "complexity": 2,
          "options": [
            { "id": "o1", "text": "[[Four|Cuatro]]" },
            { "id": "o2", "text": "[[Ten|Diez]]" },
            { "id": "o3", "text": "[[Six|Seis]]" }
          ],
          "correct_answer": "o3"
        }
      ]
    },
    {
      "block_id": "B5",
      "title": "Practice Mix",
      "content": [
        {
          "interaction_id": "U2_I52",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
          "mastery_tag": "mixed",
          "complexity": 2,
          "stimulus_en": "[[Pierre|Pierre]] [[is|es]] [[from|de]] [[France|Francia]]. _____ [[is|es]] [[French|Francés]].",
          "correct_answer": "He"
        },
        {
          "interaction_id": "U2_I53",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
          "mastery_tag": "mixed",
          "complexity": 2,
          "stimulus_en": "[[Anna|Anna]] [[and|y]] [[Maria|María]] [[are|son]] [[students|estudiantes]]. _____ [[are|son]] [[Italian|Italianas]].",
          "correct_answer": "They"
        },
        {
          "interaction_id": "U2_I54",
          "type": "multiple-choice",
          "prompt_es": "[[Choose|Elige]] [[the|la]] [[correct|correcta]] [[option|opción]].",
          "mastery_tag": "mixed",
          "complexity": 2,
          "stimulus_en": "[[John|John]] [[is|es]] [[from|de]] [[the|los]] [[USA|EE.UU.]] [[He|Él]] _____ [[American|Americano]].",
          "options": [
            { "id": "o1", "text": "[[are|son]]" },
            { "id": "o2", "text": "[[am|soy]]" },
            { "id": "o3", "text": "[[is|es]]" }
          ],
          "correct_answer": "o3"
        },
        {
          "interaction_id": "U2_I55",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[We|Nosotros]] [[are|somos]] [[German|Alemanes]]'.",
          "mastery_tag": "mixed",
          "complexity": 3,
          "options": [
            { "id": "w1", "text": "[[German|Alemanes]]" },
            { "id": "w2", "text": "[[are|somos]]" },
            { "id": "w3", "text": "[[We|Nosotros]]" },
            { "id": "w4", "text": "." }
          ],
          "correct_answer": ["w3","w2","w1","w4"]
        },
        {
          "interaction_id": "U2_I56",
          "type": "fill-blank",
          "prompt_es": "[[Complete|Completa]] [[the|la]] [[sentence|frase]].",
          "mastery_tag": "mixed",
          "complexity": 2,
          "stimulus_en": "[[There|Hay]] _____ [[five|cinco]] [[books|libros]] [[on|en]] [[the|la]] [[table|mesa]].",
          "correct_answer": "are"
        },
        {
          "interaction_id": "U2_I57",
          "type": "multiple-choice",
          "prompt_es": "[[Choose|Elige]] [[the|el]] [[correct|correcto]] [[number|número]] [[in|en]] [[English|inglés]] [[for|para]] '[[4|cuatro]]'.",
          "mastery_tag": "mixed",
          "complexity": 1,
          "options": [
            { "id": "o1", "text": "[[Five|Cinco]]" },
            { "id": "o2", "text": "[[Four|Cuatro]]" },
            { "id": "o3", "text": "[[Three|Tres]]" }
          ],
          "correct_answer": "o2"
        },
        {
          "interaction_id": "U2_I58",
          "type": "true-false",
          "prompt_es": "'[[She|Ella]] [[is|es]]' [[is|es]] [[used|usa]] [[for|para]] [[women|mujeres]].",
          "mastery_tag": "mixed",
          "complexity": 1,
          "correct_answer": true
        },
        {
          "interaction_id": "U2_I59",
          "type": "sentence-building",
          "prompt_es": "[[Build|Construye]]: '[[It|Ello]] [[is|es]] [[a|una]] [[big|grande]] [[city|ciudad]]'.",
          "mastery_tag": "mixed",
          "complexity": 2,
          "options": [
            { "id": "w1", "text": "[[city|ciudad]]" },
            { "id": "w2", "text": "[[It|Ello]]" },
            { "id": "w3", "text": "[[a|una]]" },
            { "id": "w4", "text": "[[big|grande]]" },
            { "id": "w5", "text": "[[is|es]]" },
            { "id": "w6", "text": "." }
          ],
          "correct_answer": ["w2","w5","w3","w4","w1","w6"]
        },
        {
          "interaction_id": "U2_I60",
          "type": "true-false",
          "prompt_es": "'[[They|Ellos]] [[are|son]]' [[is|es]] [[used|usa]] [[for|para]] [[groups|grupos]] [[of|de]] [[people|personas]].",
          "mastery_tag": "mixed",
          "complexity": 1,
          "correct_answer": true
        }
      ]
    }
  ]
};

writeFileSync(join(contentDir, 'unit2.json'), JSON.stringify(unit2, null, 2), 'utf8');
console.log('✓ Unit 2 written (full rewrite)');
