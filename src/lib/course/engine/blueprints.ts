import { ExerciseType } from '../../exercise-types';

export interface Blueprint {
  id: string;
  skillId: string;
  type: ExerciseType;
  title?: string;
  instruction?: string;
  template: string;
  correctSlot?: string;
  explanationTemplate?: string; // Added for rich pedagogical notes
  slots: Record<string, {
    pos?: string;
    tags?: string[];
    fixedValues?: string[];
    forcePlural?: boolean;
  }>;
  translationTemplate: string;
}

export const A1_BLUEPRINTS: Blueprint[] = [
  // --- Unit 1: Greetings ---
  {
    id: 'BP-GREET-01',
    skillId: 'A1-GREET-01',
    type: 'multiple-choice',
    title: 'Saludos',
    instruction: 'Elige el saludo correcto para la {greeting_type}:',
    template: '{greeting}!',
    correctSlot: 'greeting',
    slots: {
      greeting: { pos: 'noun', tags: ['greeting'] }
    },
    translationTemplate: '¡{greeting_es}!'
  },
  {
    id: 'BP-GREET-03',
    skillId: 'A1-GREET-01',
    type: 'fill-blank',
    title: 'Despedidas',
    instruction: 'Elige el saludo nocturno:',
    template: '{greeting}.',
    correctSlot: 'greeting',
    slots: {
      greeting: { pos: 'noun', tags: ['greeting', 'night'] }
    },
    translationTemplate: '{greeting_es}.'
  },
  {
    id: 'BP-GREET-04',
    skillId: 'A1-GREET-01',
    type: 'multiple-choice',
    title: 'Buenos Días',
    instruction: '¿Cómo saludarías por la mañana?',
    template: '{greeting}, David.',
    correctSlot: 'greeting',
    slots: {
      greeting: { pos: 'noun', tags: ['greeting', 'morning'] }
    },
    translationTemplate: '{greeting_es}, David.'
  },
  {
    id: 'BP-BE-01',
    skillId: 'A1-BE-POS-01',
    type: 'fill-blank',
    title: 'Presentaciones',
    instruction: 'Completa con la forma correcta de "to be":',
    template: 'I {be} {name}.',
    correctSlot: 'be',
    slots: {
      be: { fixedValues: ['am'] },
      name: { pos: 'noun', tags: ['name', 'human'] }
    },
    translationTemplate: 'Yo {be_es} {name_es}.'
  },
  {
    id: 'BP-BE-02',
    skillId: 'A1-BE-POS-01',
    type: 'multiple-choice',
    title: 'Verbo To Be',
    instruction: 'Elige la forma correcta del verbo "to be":',
    template: 'I {be} {name}.',
    correctSlot: 'be',
    slots: {
      be: { fixedValues: ['am'] },
      name: { pos: 'noun', tags: ['name', 'human'] }
    },
    translationTemplate: 'Yo {be_es} {name_es}.'
  },
  {
    id: 'BP-GREET-02',
    skillId: 'A1-GREET-01',
    type: 'fill-blank',
    title: 'Saludos Formales',
    instruction: 'Completa el saludo:',
    template: '{greeting}, Maria.',
    correctSlot: 'greeting',
    slots: {
      greeting: { pos: 'noun', tags: ['greeting'] }
    },
    translationTemplate: '{greeting_es}, María.'
  },
  {
    id: 'BP-BE-03',
    skillId: 'A1-BE-POS-01',
    type: 'multiple-choice',
    title: 'Presentación Formal',
    instruction: 'Completa la presentación:',
    template: 'Hello, I {be} Laura.',
    correctSlot: 'be',
    slots: {
      be: { fixedValues: ['am'] }
    },
    translationTemplate: 'Hola, yo {be_es} Laura.'
  },
  // --- Unit 2: Coffee Break ---
  {
    id: 'BP-WANT-01',
    skillId: 'A1-WANT-01',
    type: 'fill-blank',
    title: '¿Qué te apetece?',
    instruction: 'Completa la frase con la bebida correcta:',
    template: 'I want a {drink}.',
    correctSlot: 'drink',
    slots: {
      drink: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: 'Yo quiero {drink_es}.'
  },
  {
    id: 'BP-WANT-02',
    skillId: 'A1-WANT-01',
    type: 'multiple-choice',
    title: 'Estructura: I want',
    instruction: 'Elige el verbo correcto para expresar deseo:',
    template: 'I {verb} {drink}.',
    correctSlot: 'verb',
    slots: {
      verb: { fixedValues: ['drink'] },
      drink: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: 'Yo {verb_es} {drink_es}.'
  },
  {
    id: 'BP-WANT-03',
    skillId: 'A1-WANT-01',
    type: 'multiple-choice',
    title: 'Bebidas',
    instruction: 'Elige la bebida mencionada:',
    template: 'I want {drink}.',
    correctSlot: 'drink',
    slots: {
      drink: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: 'Quiero {drink_es}.'
  },
  {
    id: 'BP-WANT-04',
    skillId: 'A1-WANT-01',
    type: 'fill-blank',
    title: 'Ordenando',
    instruction: 'Completa la orden:',
    template: 'One {drink}, please.',
    correctSlot: 'drink',
    slots: {
      drink: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: 'Un {drink_es}, por favor.'
  },
  {
    id: 'BP-WANT-05',
    skillId: 'A1-WANT-01',
    type: 'multiple-choice',
    title: 'Petición',
    instruction: '¿Cómo pedirías agua?',
    template: 'I want some {drink}.',
    correctSlot: 'drink',
    slots: {
      drink: { fixedValues: ['water'] }
    },
    translationTemplate: 'Quiero algo de {drink_es}.'
  },

  // --- Skill: A1-PREP-LOC-01 (Prepositions) ---
  {
    id: 'BP-PREP-SURF-01',
    skillId: 'A1-PREP-LOC-01',
    type: 'fill-blank',
    title: '¿Dónde está el objeto?',
    instruction: 'Escribe la preposición de lugar correcta:',
    template: 'The {item} is {prep} the {surface}.',
    correctSlot: 'prep',
    slots: {
      item: { pos: 'noun', tags: ['object'] },
      prep: { fixedValues: ['on', 'under', 'next to'] },
      surface: { pos: 'noun', tags: ['surface'] }
    },
    translationTemplate: '{el_la_item} {item_es} está {prep_es} {el_la_surface} {surface_es}.'
  },
  {
    id: 'BP-PREP-CONT-01',
    skillId: 'A1-PREP-LOC-01',
    type: 'multiple-choice',
    title: 'Objetos en contenedores',
    instruction: 'Elige la preposición correcta:',
    template: 'The {item} is {prep} the {container}.',
    correctSlot: 'prep',
    slots: {
      item: { pos: 'noun', tags: ['object'] },
      prep: { fixedValues: ['in'] },
      container: { pos: 'noun', tags: ['container'] }
    },
    translationTemplate: '{el_la_item} {item_es} está {prep_es} {el_la_container} {container_es}.'
  },
  {
    id: 'BP-FAM-02',
    skillId: 'A1-FAM-01',
    type: 'fill-blank',
    title: '¿Quién es él?',
    instruction: 'Completa con el miembro de la familia (masculino):',
    template: 'He is my {member}.',
    correctSlot: 'member',
    slots: {
      member: { pos: 'noun', tags: ['family', 'human', 'm'] }
    },
    translationTemplate: 'Él es mi {member_es}.'
  },
  {
    id: 'BP-FAM-03',
    skillId: 'A1-FAM-01',
    type: 'multiple-choice',
    title: '¿Quién es ella?',
    instruction: 'Elige el término correcto (femenino):',
    template: 'She is my {member}.',
    correctSlot: 'member',
    slots: {
      member: { pos: 'noun', tags: ['family', 'human', 'f'] }
    },
    translationTemplate: 'Ella es mi {member_es}.'
  },
  {
    id: 'BP-POSS-02',
    skillId: 'A1-POSS-01',
    type: 'multiple-choice',
    title: 'Posesivos',
    instruction: 'Elige el posesivo correcto:',
    template: 'Is this {poss} book?',
    correctSlot: 'poss',
    slots: {
      poss: { pos: 'adjective', tags: ['possessive'] }
    },
    translationTemplate: '¿Es este {poss_es} libro?'
  },
  // --- Unit 4: Routine ---
  {
    id: 'BP-ROUT-03',
    skillId: 'A1-ROUT-01',
    type: 'fill-blank',
    title: 'Mi Noche',
    instruction: 'Completa tu rutina de noche:',
    template: 'I {action} at 10 PM.',
    correctSlot: 'action',
    slots: {
      action: { pos: 'verb', tags: ['routine', 'night_activity'] }
    },
    translationTemplate: 'Yo {action_es} a las 10 PM.'
  },
  {
    id: 'BP-ROUT-04',
    skillId: 'A1-ROUT-01',
    type: 'multiple-choice',
    title: 'Momentos del Día',
    instruction: '¿Cuándo lo haces?',
    template: 'I work in the {time}.',
    correctSlot: 'time',
    slots: {
      time: { pos: 'noun', tags: ['time'] }
    },
    translationTemplate: 'Trabajo por la {time_es}.'
  },
  // --- Unit 5: Numbers ---
  {
    id: 'BP-NUM-01',
    skillId: 'A1-NUM-01',
    type: 'fill-blank',
    title: 'Contando',
    instruction: 'Completa con el número correcto:',
    template: 'I have {num} {item}.',
    correctSlot: 'num',
    slots: {
      num: { pos: 'adjective', tags: ['number'] },
      item: { pos: 'noun', tags: ['common_noun', 'object'] }
    },
    translationTemplate: 'Tengo {num_es} {item_es}.'
  },
  // --- Unit 6: Colors ---
  {
    id: 'BP-COL-01',
    skillId: 'A1-COL-01',
    type: 'multiple-choice',
    title: 'Colores',
    instruction: '¿De qué color es este objeto?',
    template: 'The {item} is {color}.',
    correctSlot: 'color',
    slots: {
      item: { pos: 'noun', tags: ['object'] },
      color: { pos: 'adjective', tags: ['color'] }
    },
    translationTemplate: '{el_la_item} {item_es} es {color_es}.'
  },
  // --- Unit 7: Time ---
  {
    id: 'BP-TIME-01',
    skillId: 'A1-TIME-01',
    type: 'multiple-choice',
    title: 'Días de la Semana',
    instruction: 'Identifica el día:',
    template: 'Today is {day}.',
    correctSlot: 'day',
    slots: {
      day: { pos: 'noun', tags: ['day'] }
    },
    translationTemplate: 'Hoy es {day_es}.'
  },
  // --- Unit 8: Routine ---
  {
    id: 'BP-ROUT-02',
    skillId: 'A1-ROUT-02',
    type: 'fill-blank',
    title: 'Mi Mañana',
    instruction: 'Completa tu rutina de mañana:',
    template: 'I {action} at 7 AM.',
    correctSlot: 'action',
    slots: {
      action: { pos: 'verb', tags: ['routine', 'morning_activity'] }
    },
    translationTemplate: 'Yo {action_es} a las 7 AM.'
  },
  // --- Unit 9: Food ---
  {
    id: 'BP-FOOD-01',
    skillId: 'A1-FOOD-01',
    type: 'multiple-choice',
    title: 'Gustos',
    instruction: '¿Qué te gusta comer?',
    template: 'I {verb} {food}.',
    correctSlot: 'verb',
    slots: {
      verb: { fixedValues: ['like'] },
      food: { pos: 'noun', tags: ['food', 'common_noun'] }
    },
    translationTemplate: 'Me {verb_es} {el_la_food} {food_es}.'
  },
  // --- Unit 10: Clothes ---
  {
    id: 'BP-CLOTH-01',
    skillId: 'A1-CLOTH-01',
    type: 'fill-blank',
    title: 'Mi Ropa',
    instruction: '¿Qué prenda llevas hoy?',
    template: 'I am wearing a {cloth}.',
    correctSlot: 'cloth',
    slots: {
      cloth: { pos: 'noun', tags: ['clothing'] }
    },
    translationTemplate: 'Llevo puesto {un_una_cloth} {cloth_es}.'
  },
  {
    id: 'BP-CLOTH-02',
    skillId: 'A1-CLOTH-01',
    type: 'multiple-choice',
    title: 'Vestimenta',
    instruction: 'Identifica la prenda:',
    template: 'This is my {cloth}.',
    slots: {
      cloth: { pos: 'noun', tags: ['clothing'] }
    },
    translationTemplate: 'Esta es mi {cloth_es}.'
  },
  // --- Unit 11: Jobs ---
  {
    id: 'BP-JOB-01',
    skillId: 'A1-JOB-01',
    type: 'multiple-choice',
    title: 'Profesiones',
    instruction: '¿Cuál es su trabajo?',
    template: 'I am a {job}.',
    correctSlot: 'job',
    slots: {
      job: { pos: 'noun', tags: ['job'] }
    },
    translationTemplate: 'Soy {job_es}.'
  },
  {
    id: 'BP-JOB-02',
    skillId: 'A1-JOB-01',
    type: 'fill-blank',
    title: 'Lugar de Trabajo',
    instruction: '¿Quién trabaja aquí?',
    template: 'The {job} works here.',
    correctSlot: 'job',
    slots: {
      job: { pos: 'noun', tags: ['job'] }
    },
    translationTemplate: '{el_la_job} {job_es} trabaja aquí.'
  },
  // --- Unit 12: City ---
  {
    id: 'BP-CITY-01',
    skillId: 'A1-CITY-01',
    type: 'multiple-choice',
    title: 'En la Ciudad',
    instruction: '¿A dónde vas?',
    template: 'I {verb} to the {place}.',
    correctSlot: 'verb',
    slots: {
      verb: { fixedValues: ['go'] },
      place: { pos: 'noun', tags: ['city', 'common_noun'] }
    },
    translationTemplate: '{verb_es} al {place_es}.'
  },
  {
    id: 'BP-CITY-02',
    skillId: 'A1-CITY-01',
    type: 'fill-blank',
    title: 'Mi Ciudad',
    instruction: '¿Qué lugar es este?',
    template: 'This is my {place}.',
    correctSlot: 'place',
    slots: {
      place: { pos: 'noun', tags: ['city'] }
    },
    translationTemplate: 'Esta es mi {place_es}.'
  },
  // --- Unit 13: Movement ---
  {
    id: 'BP-MOVE-01',
    skillId: 'A1-MOVE-01',
    type: 'fill-blank',
    title: 'Movimiento',
    instruction: 'Completa con el verbo de movimiento:',
    template: 'I {verb} to school.',
    correctSlot: 'verb',
    slots: {
      verb: { pos: 'verb', tags: ['movement'] }
    },
    translationTemplate: 'Yo {verb_es} a la escuela.'
  },
  {
    id: 'BP-MOVE-02',
    skillId: 'A1-MOVE-01',
    type: 'multiple-choice',
    title: 'Actividades',
    instruction: '¿Qué haces en el parque?',
    template: 'I {verb} in the park.',
    slots: {
      verb: { pos: 'verb', tags: ['movement'] }
    },
    translationTemplate: 'Yo {verb_es} en el parque.'
  },
  // --- Unit 14: Emotions ---
  {
    id: 'BP-FEEL-01',
    skillId: 'A1-FEEL-01',
    type: 'multiple-choice',
    title: 'Sentimientos',
    instruction: '¿Cómo te sientes hoy?',
    template: 'I am very {feeling}.',
    slots: {
      feeling: { pos: 'adjective', tags: ['emotion'] }
    },
    translationTemplate: 'Estoy muy {feeling_es}.'
  },
  // --- Unit 15: Animals ---
  {
    id: 'BP-ANIM-01',
    skillId: 'A1-ANIM-01',
    type: 'fill-blank',
    title: 'Animales',
    instruction: '¿Qué animal es?',
    template: 'The {animal} is sleeping.',
    slots: {
      animal: { pos: 'noun', tags: ['animal'] }
    },
    translationTemplate: 'El {animal_es} está durmiendo.'
  },
  // --- Unit 16: Weather ---
  {
    id: 'BP-WEATH-01',
    skillId: 'A1-WEATH-01',
    type: 'multiple-choice',
    title: 'El Clima',
    instruction: '¿Cómo está el tiempo?',
    template: 'Today is very {weather}.',
    slots: {
      weather: { pos: 'adjective', tags: ['weather'] }
    },
    translationTemplate: 'Hoy está muy {weather_es}.'
  },
  // --- Unit 17: Tech ---
  {
    id: 'BP-TECH-01',
    skillId: 'A1-TECH-01',
    type: 'fill-blank',
    title: 'Tecnología',
    instruction: 'Completa con el dispositivo:',
    template: 'I use a {device} to work.',
    slots: {
      device: { pos: 'noun', tags: ['tech', 'office'] }
    },
    translationTemplate: 'Uso {un_una_device} {device_es} para trabajar.'
  },
  // --- Unit 18: Body ---
  {
    id: 'BP-BODY-01',
    skillId: 'A1-BODY-01',
    type: 'multiple-choice',
    title: 'Partes del Cuerpo',
    instruction: '¿Con qué parte ves?',
    template: 'I see with my {part}.',
    correctSlot: 'part',
    slots: {
      part: { pos: 'noun', tags: ['body', 'sight'], forcePlural: true }
    },
    translationTemplate: 'Veo con mis {part_es}.'
  },
  {
    id: 'BP-BODY-02',
    skillId: 'A1-BODY-01',
    type: 'multiple-choice',
    title: 'Partes del Cuerpo',
    instruction: '¿Con qué parte hueles?',
    template: 'I smell with my {part}.',
    correctSlot: 'part',
    slots: {
      part: { pos: 'noun', tags: ['body', 'smell'] }
    },
    translationTemplate: 'Huelo con mi {part_es}.'
  },
  {
    id: 'BP-BODY-03',
    skillId: 'A1-BODY-01',
    type: 'multiple-choice',
    title: 'Partes del Cuerpo',
    instruction: '¿Con qué parte oyes?',
    template: 'I hear with my {part}.',
    correctSlot: 'part',
    slots: {
      part: { pos: 'noun', tags: ['body', 'hearing'], forcePlural: true }
    },
    translationTemplate: 'Oigo con mis {part_es}.'
  },
  // --- Unit 19: Can ---
  {
    id: 'BP-CAN-01',
    skillId: 'A1-CAN-01',
    type: 'fill-blank',
    title: 'Habilidades',
    instruction: '¿Qué puedes hacer?',
    template: 'I can {action} very well.',
    correctSlot: 'action',
    slots: {
      action: { pos: 'verb', tags: ['physical_action'] }
    },
    translationTemplate: 'Puedo {action_es} muy bien.'
  },
  // --- Unit 20: Prepositions ---
  {
    id: 'BP-PREP-02',
    skillId: 'A1-PREP-LOC-02',
    type: 'multiple-choice',
    title: '¿Dónde está?',
    instruction: 'Usa la preposición correcta:',
    template: 'The {item} is {prep} the box.',
    correctSlot: 'prep',
    slots: {
      item: { pos: 'noun', tags: ['common_noun', 'object'] },
      prep: { pos: 'preposition', tags: ['prep'] }
    },
    translationTemplate: '{el_la_item} {item_es} está {prep_es} la caja.'
  },
  // --- Unit 21: Travel ---
  {
    id: 'BP-TRAV-01',
    skillId: 'A1-TRAV-01',
    type: 'multiple-choice',
    title: 'Viajes',
    instruction: '¿Cómo vas al trabajo?',
    template: 'I go to work {transport}.',
    slots: {
      transport: { fixedValues: ['by bus', 'by car', 'by train'] }
    },
    translationTemplate: 'Voy al trabajo {transport_es}.'
  },
  // --- Unit 22: Health ---
  {
    id: 'BP-HLTH-01',
    skillId: 'A1-HLTH-01',
    type: 'multiple-choice',
    title: 'Salud',
    instruction: '¿Qué te duele?',
    template: 'I have a {pain}.',
    slots: {
      pain: { fixedValues: ['headache', 'stomachache', 'cold'] }
    },
    translationTemplate: 'Tengo {pain_es}.'
  },
  // --- Unit 23: Shopping ---
  {
    id: 'BP-SHOP-01',
    skillId: 'A1-SHOP-01',
    type: 'multiple-choice',
    title: 'Compras',
    instruction: '¿Qué quieres comprar?',
    template: 'I want to buy a {item}.',
    slots: {
      item: { pos: 'noun', tags: ['clothing'] }
    },
    translationTemplate: 'Quiero comprar {un_una_item} {item_es}.'
  },
  // --- Unit 24: Routine ---
  {
    id: 'BP-ROUT-01',
    skillId: 'A1-ROUT-01',
    type: 'fill-blank',
    title: 'Rutina',
    instruction: 'Completa la frase:',
    template: 'I {action} at 7 AM.',
    slots: {
      action: { pos: 'verb', tags: ['routine', 'morning_activity'] }
    },
    translationTemplate: 'Yo {action_es} a las 7 AM.'
  },
  {
    id: 'BP-ROUT-05',
    skillId: 'A1-ROUT-01',
    type: 'multiple-choice',
    title: 'Rutina Nocturna',
    instruction: 'Completa con tu actividad:',
    template: 'I {action} at 11 PM.',
    slots: {
      action: { pos: 'verb', tags: ['routine', 'night_activity'] }
    },
    translationTemplate: 'Yo {action_es} a las 11 PM.'
  },
  {
    id: 'BP-ROUT-06',
    skillId: 'A1-ROUT-01',
    type: 'fill-blank',
    title: 'Estudios',
    instruction: 'Completa con el verbo correcto:',
    template: 'I {action} at the library.',
    slots: {
      action: { fixedValues: ['study'] }
    },
    translationTemplate: 'Yo {action_es} en la biblioteca.'
  },
  // --- Unit 25: Past ---
  {
    id: 'BP-PAST-01',
    skillId: 'A1-PAST-01',
    type: 'multiple-choice',
    title: 'El Pasado',
    instruction: 'Completa con el pasado de "to be":',
    template: 'Yesterday I {past_be} at home.',
    slots: {
      past_be: { fixedValues: ['was'] }
    },
    translationTemplate: 'Ayer {past_be_es} en casa.'
  },
  // --- Unit 26: Future ---
  {
    id: 'BP-FUTR-01',
    skillId: 'A1-FUTR-01',
    type: 'multiple-choice',
    title: 'El Futuro',
    instruction: '¿Qué vas a hacer?',
    template: 'I am going to {verb} tomorrow.',
    slots: {
      verb: { pos: 'verb', tags: ['future'] }
    },
    translationTemplate: 'Voy a {verb_es} mañana.'
  },
  // --- Unit 27: Nature ---
  {
    id: 'BP-NATR-01',
    skillId: 'A1-NATR-01',
    type: 'multiple-choice',
    title: 'Naturaleza',
    instruction: '¿Qué ves?',
    template: 'I see a {element}.',
    slots: {
      element: { pos: 'noun', tags: ['nature'] }
    },
    translationTemplate: 'Veo {un_una_element} {element_es}.'
  },
  // --- Unit 28: Office ---
  {
    id: 'BP-OFFC-01',
    skillId: 'A1-OFFC-01',
    type: 'fill-blank',
    title: 'Oficina',
    instruction: '¿Qué hay en tu mesa?',
    template: 'There is a {item} on my desk.',
    slots: {
      item: { pos: 'noun', tags: ['office'] }
    },
    translationTemplate: 'Hay {un_una_item} {item_es} en mi mesa.'
  },
  // --- Unit 29: Hobbies ---
  {
    id: 'BP-HOBB-01',
    skillId: 'A1-HOBB-01',
    type: 'multiple-choice',
    title: 'Aficiones',
    instruction: '¿Qué te gusta hacer?',
    template: 'I like {hobby}.',
    slots: {
      hobby: { pos: 'noun', tags: ['hobby'] }
    },
    translationTemplate: 'Me gusta {el_la_hobby} {hobby_es}.'
  },
  // --- Unit 30: Comparison ---
  {
    id: 'BP-COMP-01',
    skillId: 'A1-COMP-01',
    type: 'fill-blank',
    title: 'Comparaciones',
    instruction: 'Completa la comparación:',
    template: '{item1} is {comp} {item2}.',
    slots: {
      item1: { pos: 'noun', tags: ['drink'] },
      comp: { fixedValues: ['better than'] },
      item2: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: '{el_la_item1} {item1_es} es {comp_es} {el_la_item2} {item2_es}.'
  },
  // --- Unit 1: Greetings Discovery ---
  {
    id: 'BP-GREET-MATCH-01',
    skillId: 'A1-GREET-01',
    type: 'matching',
    title: 'Relacionar: Saludos',
    instruction: 'Relaciona los saludos correctamente:',
    template: '{word}',
    slots: {
      word: { pos: 'noun', tags: ['greeting'] }
    },
    translationTemplate: '{word_es}'
  },
  // --- Unit 2: Drinks Discovery ---
  {
    id: 'BP-DRINK-MATCH-01',
    skillId: 'A1-WANT-01',
    type: 'matching',
    title: 'Relacionar: Bebidas',
    instruction: 'Relaciona las bebidas correctamente:',
    template: '{word}',
    slots: {
      word: { pos: 'noun', tags: ['drink'] }
    },
    translationTemplate: '{word_es}'
  },
  // --- Unit 3: Family Discovery ---
  {
    id: 'BP-FAM-MATCH-01',
    skillId: 'A1-FAM-01',
    type: 'matching',
    title: 'Relacionar: La Familia',
    instruction: 'Relaciona los miembros de la familia:',
    template: '{word}',
    slots: {
      word: { pos: 'noun', tags: ['family'] }
    },
    translationTemplate: '{word_es}'
  },
  // --- Universal Discovery Blueprints ---
  {
    id: 'BP-DISC-MATCH-UNIV',
    skillId: 'A1-UNIVERSAL',
    type: 'matching',
    title: 'Vocabulario',
    instruction: 'Relaciona las palabras con su traducción:',
    template: '{word}',
    slots: {
      word: { pos: 'noun' }
    },
    translationTemplate: '{word_es}'
  }
];
