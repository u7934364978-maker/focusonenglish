import { ExerciseType } from '../../exercise-types';

export interface Blueprint {
  id: string;
  skillId: string;
  type: ExerciseType;
  title?: string;
  instruction?: string;
  template: string;
  correctSlot?: string; // New: specify which slot is the answer
  slots: Record<string, {
    pos?: string;
    tags?: string[];
    fixedValues?: string[];
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
    id: 'BP-BE-01',
    skillId: 'A1-BE-POS-01',
    type: 'fill-blank',
    title: 'Presentaciones',
    instruction: 'Completa con la forma correcta de "to be":',
    template: 'I {be} {name}.',
    correctSlot: 'be',
    slots: {
      be: { fixedValues: ['am'] },
      name: { pos: 'noun', tags: ['name'] }
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
      name: { pos: 'noun', tags: ['name'] }
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
      verb: { fixedValues: ['want'] },
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

  // --- Skill: A1-PREP-LOC-01 (Prepositions) ---
  {
    id: 'BP-PREP-01',
    skillId: 'A1-PREP-LOC-01',
    type: 'fill-blank',
    title: '¿Dónde está el objeto?',
    instruction: 'Escribe la preposición de lugar correcta:',
    template: 'The {item} is {prep} the {surface}.',
    correctSlot: 'prep',
    slots: {
      item: { pos: 'noun', tags: ['object'] },
      prep: { fixedValues: ['on', 'in', 'under', 'next to'] },
      surface: { pos: 'noun', tags: ['furniture'] }
    },
    translationTemplate: 'El/La {item_es} está {prep_es} el/la {surface_es}.'
  },
  {
    id: 'BP-PREP-02',
    skillId: 'A1-PREP-LOC-01',
    type: 'multiple-choice',
    title: 'Preposiciones de Lugar',
    instruction: 'Elige la preposición correcta:',
    template: 'The {item} is {prep} the {surface}.',
    correctSlot: 'prep',
    slots: {
      item: { pos: 'noun', tags: ['object'] },
      prep: { fixedValues: ['on', 'in', 'under', 'next to'] },
      surface: { pos: 'noun', tags: ['furniture'] }
    },
    translationTemplate: 'El/La {item_es} está {prep_es} el/la {surface_es}.'
  },
  // --- Unit 3: Family ---
  {
    id: 'BP-FAM-01',
    skillId: 'A1-FAM-01',
    type: 'multiple-choice',
    title: 'Mi Familia',
    instruction: 'Identifica al miembro de la familia:',
    template: 'She is my {member}.',
    slots: {
      member: { pos: 'noun', tags: ['family'] }
    },
    translationTemplate: 'Ella es mi {member_es}.'
  },
  {
    id: 'BP-POSS-01',
    skillId: 'A1-POSS-01',
    type: 'fill-blank',
    title: 'Posesivos',
    instruction: 'Completa con el posesivo correcto (mi, tu):',
    template: '{poss} {member} is here.',
    correctSlot: 'poss',
    slots: {
      poss: { pos: 'adjective', tags: ['possessive'] },
      member: { pos: 'noun', tags: ['family'] }
    },
    translationTemplate: '{poss_es} {member_es} está aquí.'
  },
  // --- Unit 4: Routine ---
  {
    id: 'BP-ROUT-01',
    skillId: 'A1-ROUT-01',
    type: 'multiple-choice',
    title: 'Rutina Diaria',
    instruction: '¿Qué haces durante el día?',
    template: 'I {action} in the {time}.',
    correctSlot: 'action',
    slots: {
      action: { pos: 'verb', tags: ['routine'] },
      time: { pos: 'noun', tags: ['time'] }
    },
    translationTemplate: 'Yo {action_es} por la {time_es}.'
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
      item: { pos: 'noun', tags: ['object'] }
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
    translationTemplate: 'El/La {item_es} es {color_es}.'
  },
  // --- Unit 7: Time ---
  {
    id: 'BP-TIME-01',
    skillId: 'A1-TIME-01',
    type: 'multiple-choice',
    title: 'Días de la Semana',
    instruction: 'Identifica el día:',
    template: 'Today is {day}.',
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
    instruction: 'Completa tu rutina de {action_type}:',
    template: 'I {action} at 7 AM.',
    correctSlot: 'action',
    slots: {
      action: { pos: 'verb', tags: ['routine'] }
    },
    translationTemplate: 'Yo me {action_es} a las 7 AM.'
  },
  // --- Unit 9: Food ---
  {
    id: 'BP-FOOD-01',
    skillId: 'A1-FOOD-01',
    type: 'multiple-choice',
    title: 'Gustos',
    instruction: '¿Qué te gusta comer?',
    template: 'I like {food}.',
    slots: {
      food: { pos: 'noun', tags: ['food'] }
    },
    translationTemplate: 'Me gusta la {food_es}.'
  },
  // --- Unit 10: Clothes ---
  {
    id: 'BP-CLOTH-01',
    skillId: 'A1-CLOTH-01',
    type: 'fill-blank',
    title: '¿Qué llevas puesto?',
    instruction: 'Completa con la prenda:',
    template: 'I am wearing {cloth}.',
    slots: {
      cloth: { pos: 'noun', tags: ['clothing'] }
    },
    translationTemplate: 'Llevo puesto {cloth_es}.'
  },
  // --- Unit 11: Jobs ---
  {
    id: 'BP-JOB-01',
    skillId: 'A1-JOB-01',
    type: 'multiple-choice',
    title: 'Profesiones',
    instruction: '¿Cuál es su trabajo?',
    template: 'I am a {job}.',
    slots: {
      job: { pos: 'noun', tags: ['job'] }
    },
    translationTemplate: 'Soy {job_es}.'
  },
  // --- Unit 12: City ---
  {
    id: 'BP-CITY-01',
    skillId: 'A1-CITY-01',
    type: 'multiple-choice',
    title: 'En la Ciudad',
    instruction: '¿A dónde vas?',
    template: 'I go to the {place}.',
    slots: {
      place: { pos: 'noun', tags: ['city'] }
    },
    translationTemplate: 'Voy al {place_es}.'
  },
  // --- Unit 13: Movement ---
  {
    id: 'BP-MOVE-01',
    skillId: 'A1-MOVE-01',
    type: 'fill-blank',
    title: 'Movimiento',
    instruction: 'Completa con el verbo de movimiento:',
    template: 'I {verb} to school.',
    slots: {
      verb: { pos: 'verb', tags: ['movement'] }
    },
    translationTemplate: 'Yo {verb_es} a la escuela.'
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
      device: { pos: 'noun', tags: ['tech'] }
    },
    translationTemplate: 'Uso un/a {device_es} para trabajar.'
  },
  // --- Unit 18: Body ---
  {
    id: 'BP-BODY-01',
    skillId: 'A1-BODY-01',
    type: 'multiple-choice',
    title: 'Partes del Cuerpo',
    instruction: '¿Con qué parte ves?',
    template: 'I see with my {part}.',
    slots: {
      part: { pos: 'noun', tags: ['body'] }
    },
    translationTemplate: 'Veo con mis {part_es}.'
  },
  // --- Unit 19: Can ---
  {
    id: 'BP-CAN-01',
    skillId: 'A1-CAN-01',
    type: 'fill-blank',
    title: 'Habilidades',
    instruction: '¿Qué puedes hacer?',
    template: 'I can {action} very well.',
    slots: {
      action: { pos: 'verb', tags: ['action'] }
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
    template: 'The ball is {prep} the box.',
    slots: {
      prep: { pos: 'preposition', tags: ['prep'] }
    },
    translationTemplate: 'La pelota está {prep_es} la caja.'
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
      item: { fixedValues: ['shirt', 'dress', 'hat'] }
    },
    translationTemplate: 'Quiero comprar {item_es}.'
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
      action: { fixedValues: ['get up', 'wake up'] }
    },
    translationTemplate: 'Me {action_es} a las 7 AM.'
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
      verb: { fixedValues: ['travel', 'study', 'work'] }
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
      element: { fixedValues: ['mountain', 'river', 'forest'] }
    },
    translationTemplate: 'Veo {element_es}.'
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
      item: { fixedValues: ['pen', 'laptop', 'notebook'] }
    },
    translationTemplate: 'Hay {item_es} en mi mesa.'
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
      hobby: { fixedValues: ['reading', 'painting', 'dancing'] }
    },
    translationTemplate: 'Me gusta {hobby_es}.'
  },
  // --- Unit 30: Comparison ---
  {
    id: 'BP-COMP-01',
    skillId: 'A1-COMP-01',
    type: 'fill-blank',
    title: 'Comparaciones',
    instruction: 'Completa la comparación:',
    template: 'Tea is {comp} coffee.',
    slots: {
      comp: { fixedValues: ['better than'] }
    },
    translationTemplate: 'El té es {comp_es} el café.'
  }
];
