// A1 Module 1 Lesson 5: Family and Relationships
// Complete exercises with 6 questions each

// ============================================
// GRAMMAR EXERCISE 1: Possessive 's
// ============================================
export const A1_M1_L5_GRAMMAR_1 = {
  id: 'a1-m1-l5-grammar-1',
  type: 'grammar',
  title: '[[Possessive \'s - Showing Relationships|Posesivo \'s - Mostrando Relaciones]]',
  grammarPoint: '[[Possessive \'s with Family Members|Posesivo \'s con Miembros de la Familia]]',
  explanation: `[[We use possessive 's to show relationships and ownership:|Usamos el posesivo 's para mostrar relaciones y pertenencia:]]

[[Formation:|Formación:]]
[[• Singular noun + 's: John's sister, Maria's mother, Tom's father|• Sustantivo singular + 's: John's sister (la hermana de John), Maria's mother, Tom's father]]
[[• Plural noun ending in -s + ': my parents' house, the students' books|• Sustantivo plural terminado en -s + ': my parents' house (la casa de mis padres), the students' books]]
[[• Irregular plural + 's: children's room, women's bags|• Plural irregular + 's: children's room, women's bags]]

[[With Family Members:|Con Miembros de la Familia:]]
[[• John's mother = the mother of John|• John's mother = la madre de John]]
[[• Sarah's brother = the brother of Sarah|• Sarah's brother = el hermano de Sarah]]
[[• My sister's name = the name of my sister|• My sister's name = el nombre de mi hermana]]

[[Note: We use 's after the person who possesses or has the relationship.|Nota: Usamos 's después de la persona que posee o tiene la relación.]]
[[The thing that is possessed comes after.|La cosa que se posee viene después.]]`,
  examples: [
    '[[This is Tom\'s sister. (the sister of Tom)|Esta es la hermana de Tom. (the sister of Tom)]]',
    '[[Maria\'s father is a doctor.|El padre de Maria es doctor.]]',
    '[[My brother\'s wife is very nice.|La esposa de mi hermano es muy agradable.]]',
    '[[The children\'s grandmother lives with us.|La abuela de los niños vive con nosotros.]]',
    '[[What\'s your mother\'s name?|¿Cómo se llama tu madre?]]'
  ],
  questions: [
    {
      id: 'a1-m1-l5-g1-q1',
      type: 'multiple-choice',
      question: '[[This is ___ car.|Este es el carro de ___.]]',
      options: ['John', 'Johns', 'John\'s', 'John is'],
      correctAnswer: 'John\'s',
      explanation: '[[We use John\'s (with apostrophe + s) to show possession.|Usamos John\'s (con apóstrofe + s) para mostrar posesión.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q2',
      type: 'multiple-choice',
      question: '[[My ___ name is Sarah.|El nombre de mi ___ es Sarah.]]',
      options: ['sister', 'sisters', 'sister\'s', 'sisters\''],
      correctAnswer: 'sister\'s',
      explanation: '[[We use sister\'s to show "the name of my sister".|Usamos sister\'s para mostrar "el nombre de mi hermana".]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q3',
      type: 'fill-blank',
      question: '[[What is your mother___ name?|¿Cuál es el nombre de tu madre?]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[We say "your mother\'s name" (the name of your mother).|Decimos "your mother\'s name" (el nombre de tu madre).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q4',
      type: 'true-false',
      question: '[[We write "the childrens\' room" without apostrophe before s.|Escribimos "the childrens\' room" sin apóstrofe antes de la s.]]',
      correctAnswer: 'False',
      explanation: '[[False. We write "the children\'s room" (children is irregular plural, so + \'s).|Falso. Escribimos "the children\'s room" (children es un plural irregular, por lo tanto se añade \'s).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q5',
      type: 'multiple-choice',
      question: '[[Which is correct?|¿Cuál es correcto?]]',
      options: ['Tom sister', 'Toms sister', 'Tom\'s sister', 'The Tom sister'],
      correctAnswer: 'Tom\'s sister',
      explanation: '[[The correct form is "Tom\'s sister" to show the relationship.|La forma correcta es "Tom\'s sister" para mostrar la relación.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q6',
      type: 'fill-blank',
      question: '[[My ___ house is very big. (the house of my parents)|La casa de mis ___ es muy grande. (la casa de mis padres)]]',
      correctAnswer: 'parents\'',
      acceptableAnswers: ['parents\'', 'parents\'', 'parent\'s'],
      explanation: '[[We say "my parents\' house" (parents ends in s, so just add apostrophe).|Decimos "my parents\' house" (parents termina en s, así que solo añadimos el apóstrofe).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q7',
      type: 'multiple-choice',
      question: '[[Where is ___ house?|¿Dónde está la casa de ___?]]',
      options: ['Sarah', 'Sarah\'s', 'Sarahs', 'Sarah is'],
      correctAnswer: 'Sarah\'s',
      explanation: '[[We use Sarah\'s to show possession.|Usamos Sarah\'s para mostrar posesión.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q8',
      type: 'fill-blank',
      question: '[[This is my brother___ room.|Esta es la habitación de mi hermano.]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[Brother is singular, so we add \'s.|Brother es singular, por lo que añadimos \'s.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q9',
      type: 'multiple-choice',
      question: '[[Those are the ___ toys.|Esos son los juguetes de los niños.]]',
      options: ['children', 'childrens', 'children\'s', 'childrens\''],
      correctAnswer: 'children\'s',
      explanation: '[[Children is an irregular plural, so we add \'s.|Children es un plural irregular, por lo que añadimos \'s.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q10',
      type: 'fill-blank',
      question: '[[Is that your grandmother___ cat?|¿Es ese el gato de tu abuela?]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[We add \'s to grandmother to show possession.|Añadimos \'s a grandmother para mostrar posesión.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q11',
      type: 'multiple-choice',
      question: '[[The ___ names are Mike and Paul.|Los nombres de los chicos son Mike y Paul.]]',
      options: ['boy\'s', 'boys\'', 'boys', 'boy'],
      correctAnswer: 'boys\'',
      explanation: '[[Boys is a regular plural ending in -s, so we only add the apostrophe.|Boys es un plural regular que termina en -s, por lo que solo añadimos el apóstrofe.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q12',
      type: 'fill-blank',
      question: '[[That is my uncle___ car.|Ese es el coche de mi tío.]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[Uncle is singular, so we add \'s.|Uncle es singular, por lo que añadimos \'s.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q13',
      type: 'multiple-choice',
      question: '[[___ sister is a doctor.|La hermana de Maria es doctora.]]',
      options: ['Maria', 'Marias', 'Maria\'s', 'Maria is'],
      correctAnswer: 'Maria\'s',
      explanation: '[[We add \'s to Maria to show the relationship.|Añadimos \'s a Maria para mostrar el parentesco.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q14',
      type: 'fill-blank',
      question: '[[My teacher___ name is Mr. Smith.|El nombre de mi profesor es el Sr. Smith.]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[Teacher is singular, so we add \'s.|Teacher es singular, por lo que añadimos \'s.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q15',
      type: 'multiple-choice',
      question: '[[The ___ office is on the second floor.|La oficina de los profesores está en el segundo piso.]]',
      options: ['teachers\'', 'teacher\'s', 'teachers', 'teacher'],
      correctAnswer: 'teachers\'',
      explanation: '[[Use teachers\' for the office of multiple teachers.|Usa teachers\' para la oficina de varios profesores.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q16',
      type: 'fill-blank',
      question: '[[Whose bag is this? It is Laura___ bag.|¿De quién es este bolso? Es el bolso de Laura.]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[We add \'s to show it belongs to Laura.|Añadimos \'s para mostrar que pertenece a Laura.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q17',
      type: 'multiple-choice',
      question: '[[My ___ garden is beautiful.|El jardín de mis abuelos es hermoso.]]',
      options: ['grandparents\'', 'grandparent\'s', 'grandparents', 'grandparent'],
      correctAnswer: 'grandparents\'',
      explanation: '[[Grandparents is plural, so we only add an apostrophe.|Grandparents es plural, por lo que solo añadimos un apóstrofe.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q18',
      type: 'fill-blank',
      question: '[[What is your cousin___ name?|¿Cómo se llama tu primo/a?]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[Cousin is singular, so we add \'s.|Cousin es singular, por lo que añadimos \'s.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q19',
      type: 'multiple-choice',
      question: '[[___ bike is red.|La bicicleta de Peter es roja.]]',
      options: ['Peter', 'Peter\'s', 'Peters', 'Peter is'],
      correctAnswer: 'Peter\'s',
      explanation: '[[We use Peter\'s to show ownership.|Usamos Peter\'s para mostrar pertenencia.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g1-q20',
      type: 'fill-blank',
      question: '[[My mother___ car is in the garage.|El coche de mi madre está en el garaje.]]',
      correctAnswer: '\'s',
      acceptableAnswers: ['\'s', '\'s', 's'],
      explanation: '[[Mother is singular, so we add \'s.|Mother es singular, por lo que añadimos \'s.]]',
      points: 1
    }
  ]
};

// ============================================
// GRAMMAR EXERCISE 2: Family Relationships
// ============================================
export const A1_M1_L5_GRAMMAR_2 = {
  id: 'a1-m1-l5-grammar-2',
  type: 'grammar',
  title: '[[Family Relationships and Plurals|Relaciones Familiares y Plurales]]',
  grammarPoint: '[[Talking about Family Members|Hablar sobre los Miembros de la Familia]]',
  explanation: `[[Family relationship vocabulary:|Vocabulario de relaciones familiares:]]

[[Immediate Family:|Familia Inmediata:]]
[[• mother/father (parents)|• mother/father (padres)]]
[[• sister/brother (siblings)|• sister/brother (hermanos)]]
[[• son/daughter (children)|• son/daughter (hijos)]]
[[• husband/wife (spouse)|• husband/wife (esposo/a)]]

[[Extended Family:|Familia Extendida:]]
[[• grandmother/grandfather (grandparents)|• grandmother/grandfather (abuelos)]]
[[• grandson/granddaughter (grandchildren)|• grandson/granddaughter (nietos)]]
[[• uncle/aunt|• uncle/aunt (tío/a)]]
[[• cousin|• cousin (primo/a)]]
[[• nephew/niece|• nephew/niece (sobrino/a)]]

[[Plurals:|Plurales:]]
[[• Regular: sister → sisters, brother → brothers|• Regular: sister → sisters, brother → brothers]]
[[• Irregular: child → children, person → people|• Irregular: child → children (niños), person → people (gente/personas)]]

[[Useful expressions:|Expresiones útiles:]]
[[• I have two brothers. / I don\'t have any sisters.|• I have two brothers. / I don\'t have any sisters.]]
[[• My brother is married. He has two children.|• My brother is married. He has two children.]]
[[• I\'m an only child. (I don\'t have brothers or sisters)|• I\'m an only child. (Soy hijo único / No tengo hermanos ni hermanas)]]`,
  examples: [
    '[[I have one brother and two sisters.|Tengo un hermano y dos hermanas.]]',
    '[[My mother\'s mother is my grandmother.|La madre de mi madre es mi abuela.]]',
    '[[My father\'s brother is my uncle.|El hermano de mi padre es mi tío.]]',
    '[[I don\'t have any children.|No tengo hijos.]]',
    '[[She\'s an only child.|Ella es hija única.]]'
  ],
  questions: [
    {
      id: 'a1-m1-l5-g2-q1',
      type: 'multiple-choice',
      question: '[[Your mother\'s mother is your ___.|La madre de tu madre es tu ___.]]',
      options: ['aunt', 'grandmother', 'sister', 'mother-in-law'],
      correctAnswer: 'grandmother',
      explanation: '[[Your mother\'s mother is your grandmother.|La madre de tu madre es tu abuela.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q2',
      type: 'multiple-choice',
      question: '[[The plural of "child" is ___.|El plural de "child" es ___.]]',
      options: ['childs', 'childes', 'children', 'child'],
      correctAnswer: 'children',
      explanation: '[[ "Child" is irregular. The plural is "children".| "Child" es irregular. El plural es "children".]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q3',
      type: 'fill-blank',
      question: '[[My father\'s brother is my ___.|El hermano de mi padre es mi ___.]]',
      correctAnswer: 'uncle',
      acceptableAnswers: ['uncle', 'Uncle'],
      explanation: '[[Your father\'s brother is your uncle.|El hermano de tu padre es tu tío.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q4',
      type: 'true-false',
      question: '[[If you don\'t have brothers or sisters, you\'re an only child.|Si no tienes hermanos ni hermanas, eres hijo único.]]',
      correctAnswer: 'True',
      explanation: '[[True. "Only child" means you don\'t have any siblings.|Verdadero. "Only child" significa que no tienes hermanos.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q5',
      type: 'multiple-choice',
      question: '[[Your brother\'s son is your ___.|El hijo de tu hermano es tu ___.]]',
      options: ['cousin', 'nephew', 'uncle', 'grandson'],
      correctAnswer: 'nephew',
      explanation: '[[Your brother\'s son is your nephew.|El hijo de tu hermano es tu sobrino.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q6',
      type: 'fill-blank',
      question: '[[I have two ___. (brother)|Tengo dos ___. (hermano)]]',
      correctAnswer: 'brothers',
      acceptableAnswers: ['brothers', 'Brothers'],
      explanation: '[[The plural of brother is brothers.|El plural de brother es brothers.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q7',
      type: 'multiple-choice',
      question: '[[Your father\'s sister is your ___.|La hermana de tu padre es tu ___.]]',
      options: ['uncle', 'aunt', 'cousin', 'niece'],
      correctAnswer: 'aunt',
      explanation: '[[Your father\'s sister is your aunt.|La hermana de tu padre es tu tía.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q8',
      type: 'fill-blank',
      question: '[[My uncle\'s daughter is my ___.|La hija de mi tío es mi ___.]]',
      correctAnswer: 'cousin',
      acceptableAnswers: ['cousin', 'Cousin'],
      explanation: '[[The daughter of your uncle is your cousin.|La hija de tu tío es tu prima.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q9',
      type: 'multiple-choice',
      question: '[[The plural of "person" is ___.|El plural de "person" es ___.]]',
      options: ['persons', 'people', 'peoples', 'persones'],
      correctAnswer: 'people',
      explanation: '[[The plural of person is people (irregular).|El plural de person es people (irregular).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q10',
      type: 'fill-blank',
      question: '[[My mother\'s son is my ___.|El hijo de mi madre es mi ___.]]',
      correctAnswer: 'brother',
      acceptableAnswers: ['brother', 'Brother'],
      explanation: '[[Your mother\'s son is your brother.|El hijo de tu madre es tu hermano.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q11',
      type: 'multiple-choice',
      question: '[[Your sister\'s daughter is your ___.|La hija de tu hermana es tu ___.]]',
      options: ['nephew', 'niece', 'cousin', 'granddaughter'],
      correctAnswer: 'niece',
      explanation: '[[Your sister\'s daughter is your niece.|La hija de tu hermana es tu sobrina.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q12',
      type: 'fill-blank',
      question: '[[My son\'s son is my ___.|El hijo de mi hijo es mi ___.]]',
      correctAnswer: 'grandson',
      acceptableAnswers: ['grandson', 'Grandson'],
      explanation: '[[Your son\'s son is your grandson.|El hijo de tu hijo es tu nieto.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q13',
      type: 'multiple-choice',
      question: '[[A person who doesn\'t have brothers or sisters is an ___.|Una persona que no tiene hermanos ni hermanas es un ___.]]',
      options: ['only brother', 'only child', 'alone child', 'single child'],
      correctAnswer: 'only child',
      explanation: '[[An only child has no siblings.|Un only child es un hijo único.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q14',
      type: 'fill-blank',
      question: '[[My father\'s father is my ___.|El padre de mi padre es mi ___.]]',
      correctAnswer: 'grandfather',
      acceptableAnswers: ['grandfather', 'Grandfather', 'grandpa'],
      explanation: '[[Your father\'s father is your grandfather.|El padre de tu padre es tu abuelo.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q15',
      type: 'multiple-choice',
      question: '[[The children of your aunt are your ___.|Los hijos de tu tía son tus ___.]]',
      options: ['siblings', 'cousins', 'nephews', 'nieces'],
      correctAnswer: 'cousins',
      explanation: '[[The children of your aunt/uncle are your cousins.|Los hijos de tu tía/tío son tus primos.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q16',
      type: 'fill-blank',
      question: '[[My wife\'s mother is my ___.|La madre de mi esposa es mi ___.]]',
      correctAnswer: 'mother-in-law',
      acceptableAnswers: ['mother-in-law', 'mother in law'],
      explanation: '[[Your spouse\'s mother is your mother-in-law.|La madre de tu cónyuge es tu suegra.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q17',
      type: 'multiple-choice',
      question: '[[What do you call your brother and sister?|¿Cómo llamas a tu hermano y hermana?]]',
      options: ['parents', 'children', 'siblings', 'cousins'],
      correctAnswer: 'siblings',
      explanation: '[[Siblings refers to brothers and sisters.|Siblings se refiere a hermanos y hermanas.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q18',
      type: 'fill-blank',
      question: '[[My daughter\'s daughter is my ___.|La hija de mi hija es mi ___.]]',
      correctAnswer: 'granddaughter',
      acceptableAnswers: ['granddaughter', 'Granddaughter'],
      explanation: '[[Your daughter\'s daughter is your granddaughter.|La hija de tu hija es tu nieta.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q19',
      type: 'multiple-choice',
      question: '[[Your brother\'s wife is your ___.|La esposa de tu hermano es tu ___.]]',
      options: ['sister', 'sister-in-law', 'aunt', 'cousin'],
      correctAnswer: 'sister-in-law',
      explanation: '[[Your brother\'s wife is your sister-in-law.|La esposa de tu hermano es tu cuñada.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-g2-q20',
      type: 'fill-blank',
      question: '[[I have three ___: two girls and one boy. (child)|Tengo tres ___: dos niñas y un niño. (hijo)]]',
      correctAnswer: 'children',
      acceptableAnswers: ['children', 'Children'],
      explanation: '[[The plural of child is children.|El plural de child es children.]]',
      points: 1
    }
  ]
};

// ============================================
// READING EXERCISE
// ============================================
export const A1_M1_L5_READING = {
  id: 'a1-m1-l5-reading-1',
  type: 'reading',
  title: '[[Reading: My Big Family|Lectura: Mi Gran Familia]]',
  text: `[[My Big Family|Mi Gran Familia]]

[[Hi! My name is Emma, and I want to tell you about my big family.|¡Hola! Mi nombre es Emma y quiero contarte sobre mi gran familia.]]

[[I live with my parents and my older brother. My mother\'s name is Susan. She\'s 45 years old and she\'s a nurse. My father\'s name is Michael. He\'s 48 years old and he works in a bank. My brother\'s name is Tom. He\'s 18 years old and he\'s a university student.|Vivo con mis padres y mi hermano mayor. El nombre de mi madre es Susan. Ella tiene 45 años y es enfermera. El nombre de mi padre es Michael. Él tiene 48 años y trabaja en un banco. El nombre de mi hermano es Tom. Él tiene 18 años y es estudiante universitario.]]

[[We\'re a close family. Every Sunday, we have lunch at my grandmother\'s house. My grandmother\'s name is Elizabeth, but we call her "Grandma Liz". She\'s 72 years old and she\'s very energetic! My grandfather passed away three years ago, so now Grandma Liz lives alone.|Somos una familia unida. Cada domingo almorzamos en la casa de mi abuela. El nombre de mi abuela es Elizabeth, pero la llamamos "Grandma Liz". Ella tiene 72 años ¡y es muy enérgica! Mi abuelo falleció hace tres años, así que ahora Grandma Liz vive sola.]]

[[I have many cousins because my mother has three sisters and my father has one brother. My favorite cousin is Julia. She\'s my aunt Patricia\'s daughter. Julia is 16 years old, and we\'re like best friends. We go to the same school and we do everything together.|Tengo muchos primos porque mi madre tiene tres hermanas y mi padre tiene un hermano. Mi prima favorita es Julia. Ella es la hija de mi tía Patricia. Julia tiene 16 años y somos como mejores amigas. Vamos a la misma escuela y hacemos todo juntas.]]

[[My uncle Robert, my father\'s brother, has two sons. Their names are Mike and Dave. Mike is 12 and Dave is 10. They\'re very funny boys. When we have family gatherings, we always have a great time playing together.|Mi tío Robert, el hermano de mi padre, tiene dos hijos. Sus nombres son Mike y Dave. Mike tiene 12 y Dave tiene 10. Son niños muy divertidos. Cuando tenemos reuniones familiares, siempre la pasamos muy bien jugando juntos.]]

[[I also have a younger cousin named Sophie. She\'s only 5 years old. She\'s my aunt Maria\'s daughter. Sophie is so cute! She always wants to play with me.|También tengo una prima menor llamada Sophie. Ella solo tiene 5 años. Es la hija de mi tía María. ¡Sophie es tan linda! Siempre quiere jugar conmigo.]]

[[I love my big family. Family is the most important thing in life!|Amo a mi gran familia. ¡La familia es lo más importante en la vida!]]`,
  questions: [
    {
      id: 'a1-m1-l5-read-q1',
      type: 'multiple-choice',
      question: '[[How old is Emma\'s brother?|¿Qué edad tiene el hermano de Emma?]]',
      options: ['16 years old', '18 years old', '20 years old', '22 years old'],
      correctAnswer: '18 years old',
      explanation: '[[The text says "My brother\'s name is Tom. He\'s 18 years old."|El texto dice "My brother\'s name is Tom. He\'s 18 years old" (El nombre de mi hermano es Tom. Él tiene 18 años).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q2',
      type: 'multiple-choice',
      question: '[[Where does the family have lunch every Sunday?|¿Dónde almuerza la familia todos los domingos?]]',
      options: ['At Emma\'s house', 'At a restaurant', 'At grandmother\'s house', 'At uncle\'s house'],
      correctAnswer: 'At grandmother\'s house',
      explanation: '[[The text says "Every Sunday, we have lunch at my grandmother\'s house."|El texto dice "Every Sunday, we have lunch at my grandmother\'s house" (Cada domingo almorzamos en la casa de mi abuela).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q3',
      type: 'true-false',
      question: '[[Julia is Emma\'s sister.|Julia es la hermana de Emma.]]',
      correctAnswer: 'False',
      explanation: '[[False. Julia is Emma\'s cousin (her aunt Patricia\'s daughter).|Falso. Julia es la prima de Emma (la hija de su tía Patricia).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q4',
      type: 'fill-blank',
      question: '[[Emma\'s grandmother is ___ years old.|La abuela de Emma tiene ___ años.]]',
      correctAnswer: '72',
      acceptableAnswers: ['72', 'seventy-two', 'seventy two'],
      explanation: '[[The text says "She\'s 72 years old."|El texto dice "She\'s 72 years old" (Ella tiene 72 años).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q5',
      type: 'multiple-choice',
      question: '[[How many sons does Uncle Robert have?|¿Cuántos hijos tiene el tío Robert?]]',
      options: ['One', 'Two', 'Three', 'Four'],
      correctAnswer: 'Two',
      explanation: '[[Uncle Robert has two sons: Mike and Dave.|El tío Robert tiene dos hijos: Mike y Dave.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q6',
      type: 'multiple-choice',
      question: '[[Who is Sophie?|¿Quién es Sophie?]]',
      options: ['Emma\'s sister', 'Emma\'s cousin', 'Emma\'s niece', 'Emma\'s aunt'],
      correctAnswer: 'Emma\'s cousin',
      explanation: '[[Sophie is Emma\'s cousin. She\'s aunt Maria\'s daughter.|Sophie es la prima de Emma. Es la hija de la tía María.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q7',
      type: 'multiple-choice',
      question: '[[What is Elizabeth\'s nickname?|¿Cuál es el apodo de Elizabeth?]]',
      options: ['Beth', 'Lizzy', 'Grandma Liz', 'Eli'],
      correctAnswer: 'Grandma Liz',
      explanation: '[[The text says "we call her \'Grandma Liz\'".|El texto dice "la llamamos \'Grandma Liz\'".]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q8',
      type: 'true-false',
      question: '[[Emma has only one cousin.|Emma tiene solo una prima.]]',
      correctAnswer: 'False',
      explanation: '[[False. Emma says she has many cousins.|Falso. Emma dice que tiene muchos primos.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q9',
      type: 'multiple-choice',
      question: '[[How old is Dave?|¿Qué edad tiene Dave?]]',
      options: ['10 years old', '12 years old', '14 years old', '16 years old'],
      correctAnswer: '10 years old',
      explanation: '[[The text says "Dave is 10".|El texto dice "Dave tiene 10".]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-read-q10',
      type: 'fill-blank',
      question: '[[Emma\'s father works in a ___.|El padre de Emma trabaja en un ___.]]',
      correctAnswer: 'bank',
      acceptableAnswers: ['bank', 'Bank'],
      explanation: '[[The text says "he works in a bank".|El texto dice "él trabaja en un banco".]]',
      points: 1
    }
  ]
};

// ============================================
// LISTENING EXERCISE
// ============================================
export const A1_M1_L5_LISTENING = {
  id: 'a1-m1-l5-listening-1',
  type: 'listening',
  audioUrl: '/audio/a1-m1-l5-listening-1.mp3',
  transcript: `[[Conversation: Talking About Family|Conversación: Hablando sobre la familia]]

[[Person A: Hi Sarah! Tell me about your family.|Persona A: ¡Hola Sarah! Cuéntame sobre tu familia.]]

[[Sarah: Sure! I have a small family. I live with my parents and my younger sister.|Sarah: ¡Claro! Tengo una familia pequeña. Vivo con mis padres y mi hermana menor.]]

[[Person A: How old is your sister?|Persona A: ¿Qué edad tiene tu hermana?]]

[[Sarah: She\'s 14. Her name is Amy. She\'s in high school.|Sarah: Tiene 14 años. Su nombre es Amy. Está en la secundaria.]]

[[Person A: That\'s nice. Do you have any brothers?|Persona A: Qué bien. ¿Tienes hermanos?]]

[[Sarah: No, I don\'t. It\'s just my sister and me. But I have many cousins!|Sarah: No, no tengo. Solo somos mi hermana y yo. ¡Pero tengo muchos primos!]]

[[Person A: Oh really? How many cousins do you have?|Persona A: ¿Ah sí? ¿Cuántos primos tienes?]]

[[Sarah: I have five cousins. Three on my mother\'s side and two on my father\'s side.|Sarah: Tengo cinco primos. Tres por parte de mi madre y dos por parte de mi padre.]]

[[Person A: Wow! Do you see them often?|Persona A: ¡Vaya! ¿Los ves a menudo?]]

[[Sarah: Yes, we have family dinners every month. My grandmother organizes them.|Sarah: Sí, tenemos cenas familiares todos los meses. Mi abuela las organiza.]]

[[Person A: That sounds wonderful! Does your grandmother live with you?|Persona A: ¡Eso suena maravilloso! ¿Tu abuela vive con ustedes?]]

[[Sarah: No, she doesn\'t. She lives with my uncle and aunt. But she lives very close to us.|Sarah: No, no vive con nosotros. Vive con mi tío y mi tía. Pero vive muy cerca de nosotros.]]

[[Person A: And your grandfather?|Persona A: ¿Y tu abuelo?]]

[[Sarah: My grandfather lives in another city. He lives with my aunt Emma. We visit him twice a year.|Sarah: Mi abuelo vive en otra ciudad. Vive con mi tía Emma. Lo visitamos dos veces al año.]]

[[Person A: It\'s great that you have a close family!|Persona A: ¡Es genial que tengas una familia unida!]]

[[Sarah: Yes, I\'m very lucky. Family is very important to me.|Sarah: Sí, tengo mucha suerte. La familia es muy importante para mí.]]`,
  duration: 65,
  allowReplay: true,
  maxReplays: 3,
  questions: [
    {
      id: 'a1-m1-l5-list-q1',
      type: 'multiple-choice',
      question: '[[How old is Sarah\'s sister?|¿Qué edad tiene la hermana de Sarah?]]',
      options: ['14 years old', '14 years old', '16 years old', '18 years old'],
      correctAnswer: '14 years old',
      explanation: '[[Sarah says "She\'s 14."|Sarah dice "She\'s 14" (Tiene 14).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q2',
      type: 'true-false',
      question: '[[Sarah has two brothers.|Sarah tiene dos hermanos.]]',
      correctAnswer: 'False',
      explanation: '[[False. Sarah says "No, I don\'t" when asked about brothers.|Falso. Sarah dice "No, I don\'t" (No, no tengo) cuando le preguntan por hermanos.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q3',
      type: 'multiple-choice',
      question: '[[How many cousins does Sarah have?|¿Cuántos primos tiene Sarah?]]',
      options: ['Three', 'Four', 'Five', 'Six'],
      correctAnswer: 'Five',
      explanation: '[[Sarah says "I have five cousins."|Sarah dice "I have five cousins" (Tengo cinco primos).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q4',
      type: 'fill-blank',
      question: '[[The family has dinners every ___.|La familia tiene cenas cada ___.]]',
      correctAnswer: 'month',
      acceptableAnswers: ['month', 'Month'],
      explanation: '[[Sarah says "we have family dinners every month."|Sarah dice "we have family dinners every month" (tenemos cenas familiares todos los meses).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q5',
      type: 'multiple-choice',
      question: '[[Where does Sarah\'s grandmother live?|¿Dónde vive la abuela de Sarah?]]',
      options: ['With Sarah', 'With uncle and aunt', 'Alone', 'In another city'],
      correctAnswer: 'With uncle and aunt',
      explanation: '[[Sarah says "She lives with my uncle and aunt."|Sarah dice "She lives with my uncle and aunt" (Vive con mi tío y mi tía).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q6',
      type: 'true-false',
      question: '[[Sarah visits her grandfather twice a year.|Sarah visita a su abuelo dos veces al año.]]',
      correctAnswer: 'True',
      explanation: '[[True. Sarah says "We visit him twice a year."|Verdadero. Sarah dice "We visit him twice a year" (Lo visitamos dos veces al año).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q7',
      type: 'multiple-choice',
      question: '[[How many cousins does Sarah have on her mother\'s side?|¿Cuántos primos tiene Sarah por parte de su madre?]]',
      options: ['Two', 'Three', 'Four', 'Five'],
      correctAnswer: 'Three',
      explanation: '[[Sarah says "Three on my mother\'s side".|Sarah dice "Tres por parte de mi madre".]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q8',
      type: 'true-false',
      question: '[[Sarah\'s grandmother lives alone.|La abuela de Sarah vive sola.]]',
      correctAnswer: 'False',
      explanation: '[[False. She lives with Sarah\'s uncle and aunt.|Falso. Vive con el tío y la tía de Sarah.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q9',
      type: 'multiple-choice',
      question: '[[Who does the grandfather live with?|¿Con quién vive el abuelo?]]',
      options: ['Sarah', 'Grandmother', 'Aunt Emma', 'Uncle Robert'],
      correctAnswer: 'Aunt Emma',
      explanation: '[[Sarah says "He lives with my aunt Emma".|Sarah dice "Él vive con mi tía Emma".]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-list-q10',
      type: 'fill-blank',
      question: '[[Sarah has a ___ family.|Sarah tiene una familia ___.]]',
      correctAnswer: 'small',
      acceptableAnswers: ['small', 'Small'],
      explanation: '[[Sarah says "I have a small family".|Sarah dice "Tengo una familia pequeña".]]',
      points: 1
    }
  ]
};

// ============================================
// SPEAKING EXERCISE
// ============================================
export const A1_M1_L5_SPEAKING = {
  id: 'a1-m1-l5-speaking-1',
  type: 'speaking',
  title: '[[Speaking: Talk About Your Family|Habla: Habla sobre tu familia]]',
  prompt: '[[Answer these questions about your family. Speak clearly and use complete sentences.|Responde estas preguntas sobre tu familia. Habla claro y usa oraciones completas.]]',
  instructions: '[[Record your answers to the following questions. Try to speak for at least 10 seconds for each question.|Graba tus respuestas a las siguientes preguntas. Intenta hablar al menos 10 segundos por cada pregunta.]]',
  timeLimit: 120,
  questions: [
    '[[How many people are in your family?|¿Cuántas personas hay en tu familia?]]',
    '[[Do you have any brothers or sisters? How old are they?|¿Tienes hermanos o hermanas? ¿Qué edad tienen?]]',
    '[[What are your parents\' names?|¿Cómo se llaman tus padres?]]',
    '[[Do you have grandparents? Where do they live?|¿Tienes abuelos? ¿Dónde viven?]]',
    '[[Do you have any cousins? How many?|¿Tienes primos? ¿Cuántos?]]',
    '[[Who is your favorite family member? Why?|¿Quién es tu miembro favorito de la familia? ¿Por qué?]]'
  ],
  tips: [
    '[[Use "I have..." to talk about family members|Usa "I have..." para hablar sobre los miembros de la familia]]',
    '[[Use possessive \'s: "My brother\'s name is..."|Usa el posesivo \'s: "My brother\'s name is..." (El nombre de mi hermano es...)]]',
    '[[You can say "I\'m an only child" if you don\'t have siblings|Puedes decir "I\'m an only child" si no tienes hermanos (Soy hijo único)]]',
    '[[Describe relationships: "My mother\'s mother is my grandmother"|Describe relaciones: "My mother\'s mother is my grandmother" (La madre de mi madre es mi abuela)]]',
    '[[Talk about ages: "My sister is 20 years old"|Habla sobre las edades: "My sister is 20 years old" (Mi hermana tiene 20 años)]]'
  ]
};

// ============================================
// WRITING EXERCISE
// ============================================
export const A1_M1_L5_WRITING = {
  id: 'a1-m1-l5-writing-1',
  type: 'writing',
  title: '[[Writing: My Family|Escritura: Mi Familia]]',
  prompt: '[[Write a short paragraph (60-100 words) about your family. Include: family members, their names, ages, and relationships. Describe what makes your family special.|Escribe un párrafo corto (60-100 palabras) sobre tu familia. Incluye: miembros de la familia, sus nombres, edades y parentesco. Describe qué hace que tu familia sea especial.]]',
  wordLimit: { min: 60, max: 150 },
  rubric: {
    content: '[[Includes family members with names, ages, and relationships|Incluye miembros de la familia con nombres, edades y parentesco]]',
    grammar: '[[Correct use of possessive \'s and family vocabulary|Uso correcto del posesivo \'s y vocabulario familiar]]',
    vocabulary: '[[Appropriate use of family relationship words|Uso apropiado de palabras de relaciones familiares]]',
    organization: '[[Clear and logical paragraph structure|Estructura de párrafo clara y lógica]]'
  },
  tips: [
    '[[Start with: "I have a [small/big] family."|Comienza con: "I have a [small/big] family."]]',
    '[[Use: "My mother\'s name is..." "My father\'s name is..."|Usa: "My mother\'s name is..." "My father\'s name is..."]]',
    '[[Include ages: "My brother is 25 years old."|Incluye edades: "My brother is 25 years old."]]',
    '[[Describe relationships: "My uncle is my father\'s brother."|Describe parentescos: "My uncle is my father\'s brother."]]',
    '[[End with something special about your family|Termina con algo especial sobre tu familia]]'
  ],
  exampleAnswer: '[[I have a medium-sized family. My mother\'s name is Linda and she\'s 50 years old. My father\'s name is Robert and he\'s 52. I have one older brother named David. He\'s 28 years old and he\'s married. His wife\'s name is Anna. They have one daughter, so I\'m an aunt! My niece\'s name is Emma and she\'s 3 years old. She\'s so cute! We also have family dinners with my grandparents every Sunday. My family is very close and we love spending time together. I\'m very lucky to have such a loving family.|Tengo una familia de tamaño mediano. El nombre de mi madre es Linda y tiene 50 años. El nombre de mi padre es Robert y tiene 52. Tengo un hermano mayor llamado David. Él tiene 28 años y está casado. El nombre de su esposa es Anna. Tienen una hija, ¡así que soy tía! El nombre de mi sobrina es Emma y tiene 3 años. ¡Es tan linda! También tenemos cenas familiares con mis abuelos todos los domingos. Mi familia es muy unida y nos encanta pasar tiempo juntos. Tengo mucha suerte de tener una familia tan cariñosa.]]'
};

// ============================================
// PRONUNCIATION EXERCISE
// ============================================
export const A1_M1_L5_PRONUNCIATION = {
  id: 'a1-m1-l5-pronunciation-1',
  type: 'pronunciation',
  title: '[[Pronunciation: Family Words|Pronunciación: Palabras de Familia]]',
  instructions: '[[Listen and repeat each word. Pay attention to the stress and vowel sounds.|Escucha y repite cada palabra. Presta atención al acento y a los sonidos vocálicos.]]',
  targetSentences: [
    {
      text: 'mother - father',
      audioUrl: '/audio/a1-m1-l5-pronun-1.mp3',
      phonetic: '/ˈmʌðə - ˈfɑːðə/'
    },
    {
      text: 'brother - sister',
      audioUrl: '/audio/a1-m1-l5-pronun-2.mp3',
      phonetic: '/ˈbrʌðə - ˈsɪstə/'
    },
    {
      text: 'grandmother - grandfather',
      audioUrl: '/audio/a1-m1-l5-pronun-3.mp3',
      phonetic: '/ˈgrænmʌðə - ˈgrænfɑːðə/'
    },
    {
      text: 'aunt - uncle',
      audioUrl: '/audio/a1-m1-l5-pronun-4.mp3',
      phonetic: '/ɑːnt - ˈʌŋkəl/'
    },
    {
      text: 'cousin - nephew - niece',
      audioUrl: '/audio/a1-m1-l5-pronun-5.mp3',
      phonetic: '/ˈkʌzən - ˈnefjuː - niːs/'
    },
    {
      text: 'daughter - son',
      audioUrl: '/audio/a1-m1-l5-pronun-6.mp3',
      phonetic: '/ˈdɔːtə - sʌn/'
    }
  ],
  focusPoints: [
    '[[Stress is usually on the FIRST syllable: MOther, FAther, BROther|El acento suele estar en la PRIMERA sílaba: MOther, FAther, BROther]]',
    '[[The "th" sound /ð/ in mother, father, brother (voiced)|El sonido "th" /ð/ en mother, father, brother (sonoro)]]',
    '[[Silent letters: daughter (silent "gh"), nephew (silent "ph")|Letras mudas: daughter ("gh" muda), nephew ("ph" suena como f)]]',
    '[[Different vowel sounds: mother /ʌ/ vs father /ɑː/|Diferentes sonidos vocálicos: mother /ʌ/ vs father /ɑː/]]'
  ],
  tips: [
    '[[Practice the "th" sound by putting your tongue between your teeth|Practica el sonido "th" poniendo la lengua entre los dientes]]',
    '[[Remember: daughter has a silent "gh" - say "DOter"|Recuerda: daughter tiene una "gh" muda - di "DOter"]]',
    '[[Nephew: the "ph" sounds like /f/ but we say "NEF-yoo"|Nephew: la "ph" suena como /f/ pero decimos "NEF-yoo"]]',
    '[[Aunt can be pronounced /ɑːnt/ or /ænt/ (both correct)|Aunt puede pronunciarse /ɑːnt/ o /ænt/ (ambas son correctas)]]'
  ],
  questions: [
    {
      id: 'a1-m1-l5-pronun-q1',
      type: 'multiple-choice',
      question: '[[Where is the stress in "mother"?|¿Dónde está el acento en "mother"?]]',
      options: ['First syllable: MOther', 'Second syllable: moTHER', 'Both equal', 'No stress'],
      correctAnswer: 'First syllable: MOther',
      explanation: '[[Family words have stress on the first syllable: MOther.|Las palabras de familia tienen el acento en la primera sílaba: MOther.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q2',
      type: 'true-false',
      question: '[[The word "daughter" has a silent "gh".|La palabra "daughter" tiene una "gh" muda.]]',
      correctAnswer: 'True',
      explanation: '[[True. "Daughter" is pronounced /ˈdɔːtə/ - the "gh" is silent.|Verdadero. "Daughter" se pronuncia /ˈdɔːtə/ - la "gh" es muda.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q3',
      type: 'multiple-choice',
      question: '[[The "th" in "mother" and "father" is pronounced:|La "th" en "mother" y "father" se pronuncia:]]',
      options: ['Like /t/', 'Like /s/', 'Like /ð/ (voiced th)', 'Like /θ/ (unvoiced th)'],
      correctAnswer: 'Like /ð/ (voiced th)',
      explanation: '[[The "th" in mother, father, brother is voiced: /ð/.|La "th" en mother, father, brother es sonora: /ð/.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q4',
      type: 'fill-blank',
      question: '[[In family words, stress is usually on the ___ syllable.|En las palabras de familia, el acento suele estar en la ___ sílaba.]]',
      correctAnswer: 'first',
      acceptableAnswers: ['first', 'First', '1st'],
      explanation: '[[Family words have stress on the FIRST syllable.|Las palabras de familia tienen el acento en la PRIMERA sílaba.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q5',
      type: 'true-false',
      question: '[[The word "nephew" is pronounced exactly as it\'s spelled.|La palabra "nephew" se pronuncia exactamente como se escribe.]]',
      correctAnswer: 'False',
      explanation: '[[False. "Nephew" has a silent "ph" sound and is pronounced /ˈnefjuː/.|Falso. "Nephew" tiene un sonido "ph" y se pronuncia /ˈnefjuː/.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q6',
      type: 'multiple-choice',
      question: '[[How do you pronounce "aunt"?|¿Cómo se pronuncia "aunt"?]]',
      options: ['Only /ɑːnt/', 'Only /ænt/', 'Both /ɑːnt/ and /ænt/ are correct', 'Like "ant"'],
      correctAnswer: 'Both /ɑːnt/ and /ænt/ are correct',
      explanation: '[[Both pronunciations are correct in English.|Ambas pronunciaciones son correctas en inglés.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q7',
      type: 'multiple-choice',
      question: '[[Which word has a silent "gh"?|¿Qué palabra tiene una "gh" muda?]]',
      options: ['Daughter', 'Mother', 'Brother', 'Sister'],
      correctAnswer: 'Daughter',
      explanation: '[[The word "daughter" is pronounced /ˈdɔːtə/, so the "gh" is silent.|La palabra "daughter" se pronuncia /ˈdɔːtə/, por lo que la "gh" es muda.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q8',
      type: 'multiple-choice',
      question: '[[In the word "uncle", the stress is on the ___ syllable.|En la palabra "uncle", el acento está en la ___ sílaba.]]',
      options: ['First', 'Second', 'Third', 'No syllable'],
      correctAnswer: 'First',
      explanation: '[[Stress is on the first syllable: UN-cle.|El acento está en la primera sílaba: UN-cle.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q9',
      type: 'multiple-choice',
      question: '[[How is the "ph" in "nephew" pronounced?|¿Cómo se pronuncia la "ph" en "nephew"?]]',
      options: ['Like /p/', 'Like /h/', 'Like /f/', 'It is silent'],
      correctAnswer: 'Like /f/',
      explanation: '[[The "ph" in nephew is pronounced as /f/: /ˈnefjuː/.|La "ph" en nephew se pronuncia como /f/: /ˈnefjuː/.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-pronun-q10',
      type: 'multiple-choice',
      question: '[[The word "cousin" is pronounced with the stress on the:|La palabra "cousin" se pronuncia con el acento en:]]',
      options: ['First syllable', 'Second syllable', 'Both syllables', 'No syllable'],
      correctAnswer: 'First syllable',
      explanation: '[[The stress is on the first syllable: COU-sin.|El acento está en la primera sílaba: COU-sin.]]',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 1: Immediate Family
// ============================================
export const A1_M1_L5_VOCABULARY_1 = {
  id: 'a1-m1-l5-vocabulary-1',
  type: 'vocabulary',
  title: '[[Vocabulary: Immediate Family|Vocabulario: Familia Inmediata]]',
  words: [
    { word: 'mother', translation: 'madre', example: 'My mother is a teacher.' },
    { word: 'father', translation: 'padre', example: 'My father works in an office.' },
    { word: 'parents', translation: 'padres', example: 'My parents are very kind.' },
    { word: 'sister', translation: 'hermana', example: 'My sister is 16 years old.' },
    { word: 'brother', translation: 'hermano', example: 'I have one brother.' },
    { word: 'daughter', translation: 'hija', example: 'She has two daughters.' },
    { word: 'son', translation: 'hijo', example: 'Their son is a doctor.' },
    { word: 'children', translation: 'hijos/niños', example: 'They have three children.' },
    { word: 'husband', translation: 'esposo', example: 'Her husband is very tall.' },
    { word: 'wife', translation: 'esposa', example: 'His wife is a nurse.' }
  ],
  questions: [
    {
      id: 'a1-m1-l5-v1-q1',
      type: 'multiple-choice',
      question: '[[Your mother and father together are your ___.|Tu madre y tu padre juntos son tus ___.]]',
      options: ['sisters', 'brothers', 'parents', 'children'],
      correctAnswer: 'parents',
      explanation: '[[Mother + father = parents.|Madre + padre = parents (padres).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q2',
      type: 'fill-blank',
      question: '[[A man\'s wife is his ___. A woman\'s husband is her ___.|La esposa de un hombre es su ___. El esposo de una mujer es su ___.]]',
      correctAnswer: 'wife, husband',
      acceptableAnswers: ['wife, husband', 'wife/husband', 'spouse'],
      explanation: '[[Wife and husband are married to each other.|Esposa (wife) y esposo (husband) están casados el uno con el otro.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q3',
      type: 'true-false',
      question: '[[The plural of "child" is "children".|El plural de "child" es "children".]]',
      correctAnswer: 'True',
      explanation: '[[True. Child → children (irregular plural).|Verdadero. Child → children (plural irregular).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q4',
      type: 'multiple-choice',
      question: '[[Your male sibling is your ___.|Tu hermano varón es tu ___.]]',
      options: ['sister', 'brother', 'cousin', 'uncle'],
      correctAnswer: 'brother',
      explanation: '[[A male sibling is a brother.|Un hermano varón es un brother.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q5',
      type: 'fill-blank',
      question: '[[My parents have two ___: my brother and me.|Mis padres tienen dos ___: mi hermano y yo.]]',
      correctAnswer: 'children',
      acceptableAnswers: ['children', 'Children', 'kids'],
      explanation: '[[Sons and daughters together are children.|Hijos e hijas juntos son children (hijos).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q6',
      type: 'multiple-choice',
      question: '[[A female child is a ___.|Una hija mujer es una ___.]]',
      options: ['son', 'daughter', 'sister', 'niece'],
      correctAnswer: 'daughter',
      explanation: '[[A female child is a daughter.|Una hija mujer es una daughter.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q7',
      type: 'multiple-choice',
      question: '[[Your mother\'s husband is your ___.|El esposo de tu madre es tu ___.]]',
      options: ['brother', 'father', 'son', 'uncle'],
      correctAnswer: 'father',
      explanation: '[[Your mother\'s husband is your father.|El esposo de tu madre es tu padre.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q8',
      type: 'multiple-choice',
      question: '[[Your father\'s wife is your ___.|La esposa de tu padre es tu ___.]]',
      options: ['sister', 'mother', 'daughter', 'aunt'],
      correctAnswer: 'mother',
      explanation: '[[Your father\'s wife is your mother.|La esposa de tu padre es tu madre.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q9',
      type: 'multiple-choice',
      question: '[[My father\'s daughter is my ___.|La hija de mi padre es mi ___.]]',
      options: ['sister', 'brother', 'mother', 'aunt'],
      correctAnswer: 'sister',
      explanation: '[[Your father\'s daughter is your sister.|La hija de tu padre es tu hermana.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q10',
      type: 'multiple-choice',
      question: '[[My mother\'s son is my ___.|El hijo de mi madre es mi ___.]]',
      options: ['sister', 'brother', 'father', 'uncle'],
      correctAnswer: 'brother',
      explanation: '[[Your mother\'s son is your brother.|El hijo de tu madre es tu hermano.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q11',
      type: 'fill-blank',
      question: '[[If you are a girl, you are your parents\' ___.|Si eres una niña, eres la ___ de tus padres.]]',
      correctAnswer: 'daughter',
      acceptableAnswers: ['daughter', 'Daughter'],
      explanation: '[[A female child is a daughter.|Una hija mujer es una daughter.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q12',
      type: 'fill-blank',
      question: '[[If you are a boy, you are your parents\' ___.|Si eres un niño, eres el ___ de tus padres.]]',
      correctAnswer: 'son',
      acceptableAnswers: ['son', 'Son'],
      explanation: '[[A male child is a son.|Un hijo varón es un son.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q13',
      type: 'multiple-choice',
      question: '[[Your sister and brother are your parents\' ___.|Tu hermana y hermano son los ___ de tus padres.]]',
      options: ['parents', 'children', 'cousins', 'grandparents'],
      correctAnswer: 'children',
      explanation: '[[Sons and daughters are children.|Los hijos e hijas son children.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q14',
      type: 'fill-blank',
      question: '[[Her ___ works in an office. (esposo)|Su ___ trabaja en una oficina.]]',
      correctAnswer: 'husband',
      acceptableAnswers: ['husband', 'Husband'],
      explanation: '[[A married man is a husband.|Un hombre casado es un husband.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v1-q15',
      type: 'fill-blank',
      question: '[[His ___ is a nurse. (esposa)|Su ___ es enfermera.]]',
      correctAnswer: 'wife',
      acceptableAnswers: ['wife', 'Wife'],
      explanation: '[[A married woman is a wife.|Una mujer casada es una wife.]]',
      points: 1
    }
  ]
};

// ============================================
// VOCABULARY EXERCISE 2: Extended Family
// ============================================
export const A1_M1_L5_VOCABULARY_2 = {
  id: 'a1-m1-l5-vocabulary-2',
  type: 'vocabulary',
  title: '[[Vocabulary: Extended Family|Vocabulario: Familia Extendida]]',
  words: [
    { word: 'grandmother', translation: 'abuela', example: 'My grandmother is 70 years old.' },
    { word: 'grandfather', translation: 'abuelo', example: 'My grandfather loves fishing.' },
    { word: 'grandparents', translation: 'abuelos', example: 'I visit my grandparents every week.' },
    { word: 'aunt', translation: 'tía', example: 'My aunt lives in Paris.' },
    { word: 'uncle', translation: 'tío', example: 'My uncle is very funny.' },
    { word: 'cousin', translation: 'primo/prima', example: 'I have five cousins.' },
    { word: 'nephew', translation: 'sobrino', example: 'My nephew is 5 years old.' },
    { word: 'niece', translation: 'sobrina', example: 'My niece is very smart.' },
    { word: 'grandson', translation: 'nieto', example: 'He is my grandfather\'s grandson.' },
    { word: 'granddaughter', translation: 'nieta', example: 'She is their only granddaughter.' }
  ],
  questions: [
    {
      id: 'a1-m1-l5-v2-q1',
      type: 'multiple-choice',
      question: '[[Your mother\'s mother is your ___.|La madre de tu madre es tu ___.]]',
      options: ['aunt', 'grandmother', 'mother-in-law', 'sister'],
      correctAnswer: 'grandmother',
      explanation: '[[Your mother\'s mother is your grandmother.|La madre de tu madre es tu abuela.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q2',
      type: 'fill-blank',
      question: '[[Your brother\'s son is your ___.|El hijo de tu hermano es tu ___.]]',
      correctAnswer: 'nephew',
      acceptableAnswers: ['nephew', 'Nephew'],
      explanation: '[[Your brother\'s son is your nephew.|El hijo de tu hermano es tu sobrino.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q3',
      type: 'true-false',
      question: '[[Your aunt is your mother\'s or father\'s sister.|Tu tía es la hermana de tu madre o de tu padre.]]',
      correctAnswer: 'True',
      explanation: '[[True. Your aunt is your parent\'s sister (or your uncle\'s wife).|Verdadero. Tu tía es la hermana de tu padre o madre (o la esposa de tu tío).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q4',
      type: 'multiple-choice',
      question: '[[Your uncle\'s children are your ___.|Los hijos de tu tío son tus ___.]]',
      options: ['siblings', 'nephews', 'cousins', 'nieces'],
      correctAnswer: 'cousins',
      explanation: '[[Your uncle\'s children are your cousins.|Los hijos de tu tío son tus primos.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q5',
      type: 'fill-blank',
      question: '[[Grandmother and grandfather together are ___.|La abuela y el abuelo juntos son los ___.]]',
      correctAnswer: 'grandparents',
      acceptableAnswers: ['grandparents', 'Grandparents'],
      explanation: '[[Grandmother + grandfather = grandparents.|Abuela + abuelo = grandparents (abuelos).]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q6',
      type: 'multiple-choice',
      question: '[[Your sister\'s daughter is your ___.|La hija de tu hermana es tu ___.]]',
      options: ['cousin', 'daughter', 'niece', 'granddaughter'],
      correctAnswer: 'niece',
      explanation: '[[Your sister\'s daughter is your niece.|La hija de tu hermana es tu sobrina.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q7',
      type: 'multiple-choice',
      question: '[[Your father\'s father is your ___.|El padre de tu padre es tu ___.]]',
      options: ['grandfather', 'uncle', 'nephew', 'grandson'],
      correctAnswer: 'grandfather',
      explanation: '[[Your father\'s father is your grandfather.|El padre de tu padre es tu abuelo.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q8',
      type: 'multiple-choice',
      question: '[[Your mother\'s sister is your ___.|La hermana de tu madre es tu ___.]]',
      options: ['uncle', 'aunt', 'cousin', 'niece'],
      correctAnswer: 'aunt',
      explanation: '[[Your mother\'s sister is your aunt.|La hermana de tu madre es tu tía.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q9',
      type: 'multiple-choice',
      question: '[[Your father\'s brother is your ___.|El hermano de mi padre es mi ___.]]',
      options: ['uncle', 'aunt', 'cousin', 'nephew'],
      correctAnswer: 'uncle',
      explanation: '[[Your father\'s brother is your uncle.|El hermano de tu padre es tu tío.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q10',
      type: 'fill-blank',
      question: '[[Your sister\'s son is your ___.|El hijo de tu hermana es tu ___.]]',
      correctAnswer: 'nephew',
      acceptableAnswers: ['nephew', 'Nephew'],
      explanation: '[[Your sister\'s son is your nephew.|El hijo de tu hermana es tu sobrino.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q11',
      type: 'fill-blank',
      question: '[[Your brother\'s daughter is your ___.|La hija de tu hermano es tu ___.]]',
      correctAnswer: 'niece',
      acceptableAnswers: ['niece', 'Niece'],
      explanation: '[[Your brother\'s daughter is your niece.|La hija de tu hermano es tu sobrina.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q12',
      type: 'multiple-choice',
      question: '[[Your children\'s son is your ___.|El hijo de tus hijos es tu ___.]]',
      options: ['grandson', 'granddaughter', 'nephew', 'cousin'],
      correctAnswer: 'grandson',
      explanation: '[[Your child\'s son is your grandson.|El hijo de tu hijo/a es tu nieto.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q13',
      type: 'multiple-choice',
      question: '[[Your children\'s daughter is your ___.|La hija de tus hijos es tu ___.]]',
      options: ['granddaughter', 'grandson', 'niece', 'cousin'],
      correctAnswer: 'granddaughter',
      explanation: '[[Your child\'s daughter is your granddaughter.|La hija de tu hijo/a es tu nieta.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q14',
      type: 'fill-blank',
      question: '[[My ___ are very old. (abuelos)|Mis ___ son muy mayores.]]',
      correctAnswer: 'grandparents',
      acceptableAnswers: ['grandparents', 'Grandparents'],
      explanation: '[[Grandmother and grandfather are grandparents.|La abuela y el abuelo son los grandparents.]]',
      points: 1
    },
    {
      id: 'a1-m1-l5-v2-q15',
      type: 'fill-blank',
      question: '[[My ___ is my aunt\'s daughter. (prima)|Mi ___ es la hija de mi tía.]]',
      correctAnswer: 'cousin',
      acceptableAnswers: ['cousin', 'Cousin'],
      explanation: '[[Your aunt\'s or uncle\'s child is your cousin.|El hijo o hija de tu tío o tía es tu cousin.]]',
      points: 1
    }
  ]
};

// Export all exercises for Module 1, Lesson 5


export const A1_M1_L5_SENTENCE_COMPLETION = {
  id: 'a1-m1-l5-sentence-completion',
  type: 'sentence-completion',
  title: '[[Complete Family Sentences|Completa Oraciones Familiares]]',
  instructions: '[[Complete sentences about family.|Completa oraciones sobre la familia.]]',
  sentences: [
    {
      id: 'sc1',
      prompt: '[[My father\'s wife is my ___.|La esposa de mi padre es mi ___.]]',
      correctCompletion: 'mother',
      options: ['mother', 'sister', 'aunt', 'grandmother'],
      explanation: '[[Your father\'s wife is your mother.|La esposa de tu padre es tu madre.]]',
      points: 1
    },
    {
      id: 'sc2',
      prompt: '[[My mother\'s brother is my ___.|El hermano de mi madre es mi ___.]]',
      correctCompletion: 'uncle',
      options: ['uncle', 'aunt', 'cousin', 'brother'],
      explanation: '[[Your mother\'s brother is your uncle.|El hermano de tu madre es tu tío.]]',
      points: 1
    },
    {
      id: 'sc3',
      prompt: '[[My sister\'s son is my ___.|El hijo de mi hermana es mi ___.]]',
      correctCompletion: 'nephew',
      options: ['nephew', 'niece', 'cousin', 'son'],
      explanation: '[[Your sister\'s son is your nephew.|El hijo de tu hermana es tu sobrino.]]',
      points: 1
    },
    {
      id: 'sc4',
      prompt: '[[My grandfather\'s wife is my ___.|La esposa de mi abuelo es mi ___.]]',
      correctCompletion: 'grandmother',
      options: ['grandmother', 'mother', 'aunt', 'sister'],
      explanation: '[[Your grandfather\'s wife is your grandmother.|La esposa de tu abuelo es tu abuela.]]',
      points: 1
    },
    {
      id: 'sc5',
      prompt: '[[My uncle\'s wife is my ___.|La esposa de mi tío es mi ___.]]',
      correctCompletion: 'aunt',
      options: ['aunt', 'sister', 'mother', 'niece'],
      explanation: '[[Your uncle\'s wife is your aunt.|La esposa de tu tío es tu tía.]]',
      points: 1
    },
    {
      id: 'sc6',
      prompt: '[[My daughter\'s brother is my ___.|El hermano de mi hija es mi ___.]]',
      correctCompletion: 'son',
      options: ['son', 'father', 'uncle', 'brother'],
      explanation: '[[Your daughter\'s brother is your son.|El hermano de tu hija es tu hijo.]]',
      points: 1
    },
    {
      id: 'sc7',
      prompt: '[[My son\'s sister is my ___.|La hermana de mi hijo es mi ___.]]',
      correctCompletion: 'daughter',
      options: ['daughter', 'mother', 'aunt', 'sister'],
      explanation: '[[Your son\'s sister is your daughter.|La hermana de tu hijo es tu hija.]]',
      points: 1
    },
    {
      id: 'sc8',
      prompt: '[[My father\'s sister is my ___.|La hermana de mi padre es mi ___.]]',
      correctCompletion: 'aunt',
      options: ['aunt', 'grandmother', 'niece', 'sister'],
      explanation: '[[Your father\'s sister is your aunt.|La hermana de tu padre es tu tía.]]',
      points: 1
    },
    {
      id: 'sc9',
      prompt: '[[My mother\'s father is my ___.|El padre de mi madre es mi ___.]]',
      correctCompletion: 'grandfather',
      options: ['grandfather', 'uncle', 'father', 'son'],
      explanation: '[[Your mother\'s father is your grandfather.|El padre de tu madre es tu abuelo.]]',
      points: 1
    },
    {
      id: 'sc10',
      prompt: '[[My brother\'s daughter is my ___.|La hija de mi hermano es mi ___.]]',
      correctCompletion: 'niece',
      options: ['niece', 'nephew', 'daughter', 'cousin'],
      explanation: '[[Your brother\'s daughter is your niece.|La hija de tu hermano es tu sobrina.]]',
      points: 1
    }
  ]
};

export const A1_M1_L5_ERROR_IDENTIFICATION = {
  id: 'a1-m1-l5-error-identification',
  type: 'error-identification',
  title: '[[Find Family Term Errors|Encuentra Errores en Términos Familiares]]',
  instructions: '[[Find errors in family relationship sentences.|Encuentra errores en las oraciones de relaciones familiares.]]',
  sentences: [
    {
      id: 'ei1',
      sentence: 'My father is my mother husband.',
      hasError: true,
      errorWord: 'mother',
      correction: 'mother\'s',
      explanation: '[[Incorrect! We need the possessive form. Correct: My father is my mother\'s husband.|¡Incorrecto! Necesitamos la forma posesiva. Correcto: My father is my mother\'s husband.]]',
      points: 1
    },
    {
      id: 'ei2',
      sentence: 'My brother\'s daughter is my niece.',
      hasError: false,
      explanation: '[[Correct! This is the right family relationship.|¡Correcto! Esta es la relación familiar correcta.]]',
      points: 1
    },
    {
      id: 'ei3',
      sentence: 'I have two childs.',
      hasError: true,
      errorWord: 'childs',
      correction: 'children',
      explanation: '[[Incorrect! The plural of "child" is "children".|¡Incorrecto! El plural de "child" es "children".]]',
      points: 1
    },
    {
      id: 'ei4',
      sentence: 'This is John car.',
      hasError: true,
      errorWord: 'John',
      correction: 'John\'s',
      explanation: '[[Incorrect! We need the possessive form. Correct: John\'s car.|¡Incorrecto! Necesitamos la forma posesiva. Correcto: John\'s car.]]',
      points: 1
    },
    {
      id: 'ei5',
      sentence: 'The childrens are playing in the garden.',
      hasError: true,
      errorWord: 'childrens',
      correction: 'children',
      explanation: '[[Incorrect! "Children" is already plural. Do not add "s".|¡Incorrecto! "Children" ya es plural. No añadas "s".]]',
      points: 1
    },
    {
      id: 'ei6',
      sentence: 'My parents house is very big.',
      hasError: true,
      errorWord: 'parents',
      correction: 'parents\'',
      explanation: '[[Incorrect! We need the possessive form. Correct: parents\' house.|¡Incorrecto! Necesitamos la forma posesiva. Correcto: parents\' house.]]',
      points: 1
    },
    {
      id: 'ei7',
      sentence: 'She is an only children.',
      hasError: true,
      errorWord: 'children',
      correction: 'child',
      explanation: '[[Incorrect! Use "child" for singular. Correct: only child.|¡Incorrecto! Usa "child" para singular. Correcto: only child.]]',
      points: 1
    },
    {
      id: 'ei8',
      sentence: 'Your mother sister is your aunt.',
      hasError: true,
      errorWord: 'mother',
      correction: 'mother\'s',
      explanation: '[[Incorrect! We need the possessive form. Correct: mother\'s sister.|¡Incorrecto! Necesitamos la forma posesiva. Correcto: mother\'s sister.]]',
      points: 1
    },
    {
      id: 'ei9',
      sentence: 'My brother wife is from Spain.',
      hasError: true,
      errorWord: 'brother',
      correction: 'brother\'s',
      explanation: '[[Incorrect! We need the possessive form. Correct: brother\'s wife.|¡Incorrecto! Necesitamos la forma posesiva. Correcto: brother\'s wife.]]',
      points: 1
    },
    {
      id: 'ei10',
      sentence: 'I have two brothers and one sisters.',
      hasError: true,
      errorWord: 'sisters',
      correction: 'sister',
      explanation: '[[Incorrect! Use "sister" for singular. Correct: one sister.|¡Incorrecto! Usa "sister" para el singular. Correcto: one sister.]]',
      points: 1
    }
  ]
};

export const A1_M1_L5_GAP_FILL = {
  id: 'a1-m1-l5-gap-fill',
  type: 'gap-fill-text',
  title: '[[My Family Tree|Mi Árbol Genealógico]]',
  instructions: '[[Complete the text about family.|Completa el texto sobre la familia.]]',
  text: `[[I have a big family. My {{1}} are John and Mary. I have one {{2}} and two {{3}}.

My brother is married. His {{4}} is called Sarah. They have two children - my {{5}} Tom and my {{6}} Emma.

My {{7}} (my mother\'s parents) live nearby. My mother also has a sister, Linda. Linda is my {{8}}. Her husband is Mark. Mark is my {{9}}. We all love our {{10}}!|Tengo una familia grande. Mis {{1}} son John y Mary. Tengo un {{2}} y dos {{3}}.

Mi hermano está casado. Su {{4}} se llama Sarah. Tienen dos hijos - mi {{5}} Tom y mi {{6}} Emma.

Mis {{7}} (los padres de mi madre) viven cerca. Mi madre también tiene una hermana, Linda. Linda es mi {{8}}. Su esposo es Mark. Mark es mi {{9}}. ¡Todos amamos a nuestra {{10}}!]]`,
  gaps: [
    {
      id: 'gap1',
      gapNumber: 1,
      correctAnswer: 'parents',
      options: ['parents', 'parentss', 'other'],
      explanation: '[[Mother and father are your parents.|Madre y padre son tus parents (padres).]]',
      points: 1
    },
    {
      id: 'gap2',
      gapNumber: 2,
      correctAnswer: 'brother',
      options: ['brother', 'sister', 'father'],
      explanation: '[[Male sibling.|Hermano varón.]]',
      points: 1
    },
    {
      id: 'gap3',
      gapNumber: 3,
      correctAnswer: 'sisters',
      options: ['sisters', 'brothers', 'parents'],
      explanation: '[[Female siblings.|Hermanas mujeres.]]',
      points: 1
    },
    {
      id: 'gap4',
      gapNumber: 4,
      correctAnswer: 'wife',
      options: ['wife', 'husband', 'partner'],
      explanation: '[[His wife is Sarah.|Su esposa (wife) es Sarah.]]',
      points: 1
    },
    {
      id: 'gap5',
      gapNumber: 5,
      correctAnswer: 'nephew',
      options: ['nephew', 'nephews', 'other'],
      explanation: '[[Brother\'s son is nephew.|El hijo del hermano es nephew (sobrino).]]',
      points: 1
    },
    {
      id: 'gap6',
      gapNumber: 6,
      correctAnswer: 'niece',
      options: ['niece', 'nieces', 'other'],
      explanation: '[[Brother\'s daughter is niece.|La hija del hermano es niece (sobrina).]]',
      points: 1
    },
    {
      id: 'gap7',
      gapNumber: 7,
      correctAnswer: 'grandparents',
      options: ['grandparents', 'grandparentss', 'other'],
      explanation: '[[Mother\'s parents are grandparents.|Los padres de la madre son los grandparents (abuelos).]]',
      points: 1
    },
    {
      id: 'gap8',
      gapNumber: 8,
      correctAnswer: 'aunt',
      options: ['aunt', 'uncle', 'sister'],
      explanation: '[[Your mother\'s sister is your aunt.|La hermana de tu madre es tu tía.]]',
      points: 1
    },
    {
      id: 'gap9',
      gapNumber: 9,
      correctAnswer: 'uncle',
      options: ['uncle', 'aunt', 'brother'],
      explanation: '[[Your aunt\'s husband is your uncle.|El esposo de tu tía es tu tío.]]',
      points: 1
    },
    {
      id: 'gap10',
      gapNumber: 10,
      correctAnswer: 'family',
      options: ['family', 'familys', 'families'],
      explanation: '[[All these people are your family.|Todas estas personas son tu familia.]]',
      points: 1
    }
  ]
};

export const A1_M1_L5_COLLOCATION_MATCHING = {
  id: 'a1-m1-l5-collocation-matching',
  type: 'collocation-matching',
  title: '[[Match Family Relationships|Une las Relaciones Familiares]]',
  instructions: '[[Match the family member with their relationship.|Une al miembro de la familia con su parentesco.]]',
  pairs: [
    {
      id: 'cm1',
      word: 'Mother',
      correctMatch: '[[female parent|progenitora femenina]]',
      distractors: ['[[male parent|progenitor masculino]]', '[[sibling|hermano/a]]', '[[child|hijo/a]]'],
      example: '[[My mother is very kind.|Mi madre es muy amable.]]',
      points: 1
    },
    {
      id: 'cm2',
      word: 'Uncle',
      correctMatch: '[[parent\'s brother|hermano del padre o madre]]',
      distractors: ['[[parent\'s sister|hermana del padre o madre]]', '[[sibling\'s son|hijo del hermano/a]]', '[[grandparent|abuelo/a]]'],
      example: '[[My uncle is my father\'s brother.|Mi tío es el hermano de mi padre.]]',
      points: 1
    },
    {
      id: 'cm3',
      word: 'Father',
      correctMatch: '[[male parent|progenitor masculino]]',
      distractors: ['[[female parent|progenitora femenina]]', '[[sibling|hermano/a]]', '[[nephew|sobrino/a]]'],
      example: '[[My father is 50 years old.|Mi padre tiene 50 años.]]',
      points: 1
    },
    {
      id: 'cm4',
      word: 'Aunt',
      correctMatch: '[[parent\'s sister|hermana del padre o madre]]',
      distractors: ['[[parent\'s brother|hermano del padre o madre]]', '[[niece|sobrina]]', '[[grandmother|abuela]]'],
      example: '[[My aunt lives in London.|Mi tía vive en Londres.]]',
      points: 1
    },
    {
      id: 'cm5',
      word: 'Cousin',
      correctMatch: '[[parent\'s sibling\'s child|hijo/a del hermano/a de los padres]]',
      distractors: ['[[sibling|hermano/a]]', '[[nephew|sobrino/a]]', '[[grandson|nieto]]'],
      example: '[[My cousin is my aunt\'s son.|Mi primo es el hijo de mi tía.]]',
      points: 1
    },
    {
      id: 'cm6',
      word: 'Grandmother',
      correctMatch: '[[parent\'s mother|madre del padre o madre]]',
      distractors: ['[[parent\'s sister|hermana del padre o madre]]', '[[wife|esposa]]', '[[daughter|hija]]'],
      example: '[[My grandmother is very kind.|Mi abuela es muy amable.]]',
      points: 1
    },
    {
      id: 'cm7',
      word: 'Grandfather',
      correctMatch: '[[parent\'s father|padre del padre o madre]]',
      distractors: ['[[parent\'s brother|hermano del padre o madre]]', '[[husband|esposo]]', '[[son|hijo]]'],
      example: '[[My grandfather loves fishing.|A mi abuelo le encanta pescar.]]',
      points: 1
    },
    {
      id: 'cm8',
      word: 'Niece',
      correctMatch: '[[sibling\'s daughter|hija del hermano/a]]',
      distractors: ['[[sibling\'s son|hijo del hermano/a]]', '[[aunt|tía]]', '[[granddaughter|nieta]]'],
      example: '[[My niece is only two years old.|Mi sobrina solo tiene dos años.]]',
      points: 1
    },
    {
      id: 'cm9',
      word: 'Nephew',
      correctMatch: '[[sibling\'s son|hijo del hermano/a]]',
      distractors: ['[[sibling\'s daughter|hija del hermano/a]]', '[[uncle|tío]]', '[[grandson|nieto]]'],
      example: '[[My nephew is very tall.|Mi sobrino es muy alto.]]',
      points: 1
    },
    {
      id: 'cm10',
      word: 'Son',
      correctMatch: '[[male child|hijo varón]]',
      distractors: ['[[female child|hija mujer]]', '[[brother|hermano]]', '[[father|padre]]'],
      example: '[[Their son is a doctor.|Su hijo es doctor.]]',
      points: 1
    },
    {
      id: 'cm11',
      word: 'Daughter',
      correctMatch: '[[female child|hija mujer]]',
      distractors: ['[[male child|hijo varón]]', '[[sister|hermana]]', '[[mother|madre]]'],
      example: '[[She is their only daughter.|Ella es su única hija.]]',
      points: 1
    },
    {
      id: 'cm12',
      word: 'Wife',
      correctMatch: '[[married woman|mujer casada]]',
      distractors: ['[[married man|hombre casado]]', '[[sister|hermana]]', '[[mother|madre]]'],
      example: '[[His wife is a teacher.|Su esposa es profesora.]]',
      points: 1
    }
  ]
};

// LISTENING & PRONUNCIATION LESSON (EXERCISES 61-75)
const LISTENING_AND_PRONUNCIATION: Exercise[] = [
  // Listening Comprehension (61-68)
  {
    id: 'a1-u5-e61',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'This is my sister\'s car.',
    audioUrl: 'audio/a1/unit-5/e61.mp3',
    content: {
      title: 'Listening: Possession',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q61',
        type: 'multiple-choice',
        question: 'Whose car is it?',
        options: ['His sister\'s', 'His brother\'s', 'His mother\'s'],
        correctAnswer: 'His sister\'s',
        explanation: 'The speaker says: "my sister\'s car".'
      }]
    }
  },
  {
    id: 'a1-u5-e62',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'My father\'s name is John.',
    audioUrl: 'audio/a1/unit-5/e62.mp3',
    content: {
      title: 'Listening: Names',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q62',
        type: 'multiple-choice',
        question: 'What is his father\'s name?',
        options: ['Jack', 'John', 'James'],
        correctAnswer: 'John',
        explanation: 'The speaker says: "John".'
      }]
    }
  },
  {
    id: 'a1-u5-e63',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'Are they your parents? Yes, they are.',
    audioUrl: 'audio/a1/unit-5/e63.mp3',
    content: {
      title: 'Listening: Family',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q63',
        type: 'multiple-choice',
        question: 'Who are they?',
        options: ['His grandparents', 'His parents', 'His uncles'],
        correctAnswer: 'His parents',
        explanation: 'The speaker says: "Yes, they are" (his parents).'
      }]
    }
  },
  {
    id: 'a1-u5-e64',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'I have two brothers and one sister.',
    audioUrl: 'audio/a1/unit-5/e64.mp3',
    content: {
      title: 'Listening: Siblings',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q64',
        type: 'multiple-choice',
        question: 'How many brothers does he have?',
        options: ['1', '2', '3'],
        correctAnswer: '2',
        explanation: 'The speaker says: "two brothers".'
      }]
    }
  },
  {
    id: 'a1-u5-e65',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'My grandmother is eighty years old.',
    audioUrl: 'audio/a1/unit-5/e65.mp3',
    content: {
      title: 'Listening: Age',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q65',
        type: 'multiple-choice',
        question: 'How old is his grandmother?',
        options: ['18', '80', '88'],
        correctAnswer: '80',
        explanation: 'The speaker says: "eighty".'
      }]
    }
  },
  {
    id: 'a1-u5-e66',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'He is my uncle\'s son.',
    audioUrl: 'audio/a1/unit-5/e66.mp3',
    content: {
      title: 'Listening: Relationships',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q66',
        type: 'multiple-choice',
        question: 'Who is he?',
        options: ['His cousin', 'His brother', 'His nephew'],
        correctAnswer: 'His cousin',
        explanation: 'The son of an uncle is a cousin.'
      }]
    }
  },
  {
    id: 'a1-u5-e67',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'My mother has three sisters.',
    audioUrl: 'audio/a1/unit-5/e67.mp3',
    content: {
      title: 'Listening: Family',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q67',
        type: 'multiple-choice',
        question: 'How many aunts does the speaker have?',
        options: ['2', '3', '4'],
        correctAnswer: '3',
        explanation: 'His mother\'s sisters are his aunts.'
      }]
    }
  },
  {
    id: 'a1-u5-e68',
    type: 'listening-comprehension',
    level: 'A1',
    topicName: 'Listening',
    transcript: 'Is your brother married? No, he is single.',
    audioUrl: 'audio/a1/unit-5/e68.mp3',
    content: {
      title: 'Listening: Status',
      instructions: 'Escucha y selecciona la respuesta correcta.',
      questions: [{
        id: 'q68',
        type: 'multiple-choice',
        question: 'Is his brother married?',
        options: ['Yes', 'No', 'Maybe'],
        correctAnswer: 'No',
        explanation: 'The speaker says: "No, he is single".'
      }]
    }
  },
  // Pronunciation Practice (69-75)
  {
    id: 'a1-u5-e69',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'My sister\'s name.',
    audioUrl: 'audio/a1/unit-5/e69.mp3',
    content: {
      title: 'Pronunciation: Possessive \'s',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'My sister\'s name.',
      evaluationCriteria: [
        'Sonido /z/ claro al final de "sister\'s"',
        'Liaison suave entre "sister\'s" y "name"',
        'Vocal corta /ɪ/ en "sister"'
      ]
    }
  },
  {
    id: 'a1-u5-e70',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'John\'s car is blue.',
    audioUrl: 'audio/a1/unit-5/e70.mp3',
    content: {
      title: 'Pronunciation: Possession',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'John\'s car is blue.',
      evaluationCriteria: [
        'Sonido /z/ en "John\'s"',
        'Vocal larga /uː/ en "blue"',
        'Sonido /r/ suave en "car"'
      ]
    }
  },
  {
    id: 'a1-u5-e71',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'I have two children.',
    audioUrl: 'audio/a1/unit-5/e71.mp3',
    content: {
      title: 'Pronunciation: Irregular Plurals',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'I have two children.',
      evaluationCriteria: [
        'Acento en la primera sílaba "chil" (/ˈtʃɪldrən/)',
        'Sonido /tʃ/ claro',
        'Vocal corta /ɪ/ en "children"'
      ]
    }
  },
  {
    id: 'a1-u5-e72',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'He is my uncle.',
    audioUrl: 'audio/a1/unit-5/e72.mp3',
    content: {
      title: 'Pronunciation: Family',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'He is my uncle.',
      evaluationCriteria: [
        'Sonido /ʌ/ en "uncle" (/ˈʌŋkl/)',
        'Sonido /ŋ/ nasal',
        'Sonido /l/ silábico final'
      ]
    }
  },
  {
    id: 'a1-u5-e73',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'Are they cousins?',
    audioUrl: 'audio/a1/unit-5/e73.mp3',
    content: {
      title: 'Pronunciation: Questions',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'Are they cousins?',
      evaluationCriteria: [
        'Entonación ascendente',
        'Sonido /ð/ en "they"',
        'Sonido /z/ en "cousins" (/ˈkʌznz/)'
      ]
    }
  },
  {
    id: 'a1-u5-e74',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'My parents\' house.',
    audioUrl: 'audio/a1/unit-5/e74.mp3',
    content: {
      title: 'Pronunciation: Plural Possession',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'My parents\' house.',
      evaluationCriteria: [
        'Sonido /s/ final en "parents\'"',
        'Diptongo /aʊ/ en "house"',
        'Acento tónico en "house"'
      ]
    }
  },
  {
    id: 'a1-u5-e75',
    type: 'pronunciation',
    level: 'A1',
    topicName: 'Pronunciation',
    transcript: 'She is an only child.',
    audioUrl: 'audio/a1/unit-5/e75.mp3',
    content: {
      title: 'Pronunciation: Expressions',
      instructions: 'Escucha la frase y repítela con claridad.',
      expectedResponse: 'She is an only child.',
      evaluationCriteria: [
        'Liaison entre "is" y "an"',
        'Diptongo /əʊ/ en "only"',
        'Sonido /tʃ/ en "child"'
      ]
    }
  }
];

export const A1_M1_L5_ALL_EXERCISES = [
  A1_M1_L5_GRAMMAR_1,
  A1_M1_L5_GRAMMAR_2,
  A1_M1_L5_READING,
  A1_M1_L5_LISTENING,
  A1_M1_L5_SPEAKING,
  A1_M1_L5_WRITING,
  A1_M1_L5_PRONUNCIATION,
  A1_M1_L5_VOCABULARY_1,
  A1_M1_L5_VOCABULARY_2,
  A1_M1_L5_SENTENCE_COMPLETION,
  A1_M1_L5_ERROR_IDENTIFICATION,
  A1_M1_L5_GAP_FILL,
  A1_M1_L5_COLLOCATION_MATCHING,
  ...LISTENING_AND_PRONUNCIATION
];
