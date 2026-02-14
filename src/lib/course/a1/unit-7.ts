import { Exercise } from '@/lib/exercise-generator';

/**
 * Unit 7: Days of the week
 */

export const UNIT_7_EXERCISES: Exercise[] = [
  {
    id: 'a1-u7-e1',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Días de la semana',
      instructions: '¿Cuál es el primer día de la semana laboral?',
      questions: [
        {
          id: 'q1',
          question: 'The first day of the work week is ________.',
          options: ['Monday', 'Tuesday', 'Sunday'],
          correctAnswer: 0,
          explanation: '"Monday" es lunes. En la mayoría de los países occidentales, es el primer día de la semana laboral.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e2',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: '¿Qué hora es?',
          back: "What time is it?",
          example: "Excuse me, what time is it?",
          pronunciation: '/wɒt taɪm ɪz ɪt/',
          explanation: 'Esta es la forma más común y directa de preguntar la hora.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e3',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Son las tres',
      instructions: 'Ordena las palabras para decir "Son las tres en punto".',
      sentences: [
        {
          id: 's1',
          words: ["o'clock", 'three', 'is', 'It'],
          correctSentence: "It is three o'clock",
          translation: 'Son las tres en punto.',
          hint: 'Usa "It is" para empezar.',
          explanation: 'En inglés, siempre usamos "It is" para decir la hora, seguido del número y "o\'clock" si es exacta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e4',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Fin de semana',
      instructions: '¿Cuál de estos días es parte del fin de semana?',
      questions: [
        {
          id: 'q1',
          question: 'Today is ________, I don\'t work!',
          options: ['Friday', 'Wednesday', 'Saturday'],
          correctAnswer: 2,
          explanation: '"Saturday" es sábado, parte del "weekend" (fin de semana).'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e6',
    type: 'matching',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Días de la semana',
      instructions: 'Une el día en español con su traducción al inglés.',
      pairs: [
        { id: '1', left: 'Lunes', right: 'Monday' },
        { id: '2', left: 'Martes', right: 'Tuesday' },
        { id: '3', left: 'Miércoles', right: 'Wednesday' },
        { id: '4', left: 'Jueves', right: 'Thursday' },
        { id: '5', left: 'Viernes', right: 'Friday' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Recuerda que en inglés los días de la semana siempre se escriben con mayúscula inicial.'
    } as any
  },
  {
    id: 'a1-u7-e7',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Al mediodía',
      instructions: 'Escribe la palabra para "mediodía".',
      questions: [
        {
          id: 'q1',
          text: 'It is 12:00 PM. It is ___.',
          correctAnswer: 'noon',
          explanation: '"Noon" es la palabra específica para las 12 del mediodía.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e8',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'La mañana',
      instructions: '¿Qué abreviatura usamos para la mañana?',
      questions: [
        {
          id: 'q1',
          question: 'It is 9:00 ________.',
          options: ['AM', 'PM', 'o\'clock'],
          correctAnswer: 0,
          explanation: '"AM" (Ante Meridiem) se usa para las horas antes del mediodía.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e9',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Hoy',
          back: 'Today',
          example: 'Today is Monday.',
          pronunciation: '/təˈdeɪ/',
          explanation: '"Today" se refiere al día presente.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e10',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Mañana es martes',
      instructions: 'Ordena las palabras para traducir "Mañana es martes".',
      sentences: [
        {
          id: 's1',
          words: ['Tuesday', 'is', 'Tomorrow'],
          correctSentence: 'Tomorrow is Tuesday',
          translation: 'Mañana es martes.',
          hint: 'Empieza con "Tomorrow".',
          explanation: '"Tomorrow" significa mañana (el día después de hoy).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e11',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Día después de martes',
      instructions: '¿Qué día sigue al martes?',
      questions: [
        {
          id: 'q1',
          question: 'Tuesday, ________, Thursday.',
          options: ['Monday', 'Wednesday', 'Friday'],
          correctAnswer: 1,
          explanation: '"Wednesday" es miércoles, el día que va entre el martes y el jueves.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e13',
    type: 'matching',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Momentos del día',
      instructions: 'Une el momento con su traducción.',
      pairs: [
        { id: '1', left: 'Mañana', right: 'Morning' },
        { id: '2', left: 'Tarde', right: 'Afternoon' },
        { id: '3', left: 'Noche (temprano)', right: 'Evening' },
        { id: '4', left: 'Noche (tarde)', right: 'Night' },
        { id: '5', left: 'Mediodía', right: 'Noon' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Diferenciar estos momentos es vital para usar los saludos correctos.'
    } as any
  },
  {
    id: 'a1-u7-e14',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Media noche',
      instructions: 'Escribe la palabra para "medianoche".',
      questions: [
        {
          id: 'q1',
          text: 'It is 12:00 AM. It is ___.',
          correctAnswer: 'midnight',
          explanation: '"Midnight" es la palabra para las 12 de la noche.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e15',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: '¿Qué hora es?',
      instructions: 'Identifica la hora en el reloj.',
      questions: [
        {
          id: 'q1',
          question: '2:00 PM is ________.',
          options: ['two o\'clock', 'ten o\'clock', 'twelve o\'clock'],
          correctAnswer: 0,
          explanation: 'Usamos el número correspondiente a la hora seguido de "o\'clock" para las horas en punto.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e16',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Fin de semana',
          back: 'Weekend',
          example: 'I love the weekend!',
          pronunciation: '/ˈwiːk.end/',
          explanation: '"Weekend" combina "week" (semana) y "end" (final).'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e17',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Hoy es viernes',
      instructions: 'Ordena las palabras para traducir "Hoy es viernes".',
      sentences: [
        {
          id: 's1',
          words: ['Friday', 'is', 'Today'],
          correctSentence: 'Today is Friday',
          translation: 'Hoy es viernes.',
          hint: 'Empieza con "Today".',
          explanation: '"Friday" es el último día de la semana laboral estándar.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e18',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Domingo',
      instructions: '¿Cómo se dice "domingo" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'The last day of the week is ________.',
          options: ['Saturday', 'Sunday', 'Monday'],
          correctAnswer: 1,
          explanation: '"Sunday" es domingo, tradicionalmente considerado el último (o primero) día de la semana.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e20',
    type: 'matching',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Relaciones temporales',
      instructions: 'Une las palabras relacionadas.',
      pairs: [
        { id: '1', left: 'Hoy', right: 'Today' },
        { id: '2', left: 'Mañana (día)', right: 'Tomorrow' },
        { id: '3', left: 'Ayer', right: 'Yesterday' },
        { id: '4', left: 'Semana', right: 'Week' },
        { id: '5', left: 'Mes', right: 'Month' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Estas palabras te permiten situar eventos en el tiempo de forma básica.'
    } as any
  },
  {
    id: 'a1-u7-e21',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Día de la semana',
      instructions: 'Escribe el día que sigue al viernes.',
      questions: [
        {
          id: 'q1',
          text: 'Friday, ___, Sunday.',
          correctAnswer: 'Saturday',
          explanation: '"Saturday" es sábado. Recuerda escribirlo con mayúscula.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e22',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Tarde en la noche',
      instructions: '¿Qué abreviatura usamos para la noche?',
      questions: [
        {
          id: 'q1',
          question: 'It is 8:00 ________.',
          options: ['AM', 'PM', 'noon'],
          correctAnswer: 1,
          explanation: '"PM" (Post Meridiem) se usa para las horas después del mediodía.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e23',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ayer',
          back: 'Yesterday',
          example: 'Yesterday was Sunday.',
          pronunciation: '/ˈjes.tə.deɪ/',
          explanation: '"Yesterday" se refiere al día anterior al actual.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e24',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Es tarde',
      instructions: 'Ordena para decir "Es tarde".',
      sentences: [
        {
          id: 's1',
          words: ['late', 'is', 'It'],
          correctSentence: 'It is late',
          translation: 'Es tarde.',
          hint: 'Empieza con "It is".',
          explanation: 'Usamos "It is late" para expresar que ya ha pasado mucho tiempo en el día.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e25',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Es temprano',
      instructions: '¿Cómo se dice "temprano" en inglés?',
      questions: [
        {
          id: 'q1',
          question: 'It is 5:00 AM. It is ________.',
          options: ['early', 'late', 'noon'],
          correctAnswer: 0,
          explanation: '"Early" significa temprano. Se pronuncia como "ér-li".'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e26',
    type: 'matching',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Abreviaturas AM/PM',
      instructions: 'Une la hora con su etiqueta correcta.',
      pairs: [
        { id: '1', left: '8:00 de la mañana', right: '8:00 AM' },
        { id: '2', left: '12:00 del día', right: 'Noon' },
        { id: '3', left: '4:00 de la tarde', right: '4:00 PM' },
        { id: '4', left: '10:00 de la noche', right: '10:00 PM' },
        { id: '5', left: '12:00 de la noche', right: 'Midnight' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Dominar AM y PM es esencial para no confundir citas por la mañana con citas por la tarde.'
    } as any
  },
  {
    id: 'a1-u7-e27',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Día después de miércoles',
      instructions: 'Escribe el día que sigue al miércoles.',
      questions: [
        {
          id: 'q1',
          text: 'Wednesday, ___, Friday.',
          correctAnswer: 'Thursday',
          explanation: '"Thursday" es jueves. Cuidado con no confundirlo con Tuesday.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e28',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'El reloj',
      instructions: '¿Cuál es la palabra para "reloj" (de pared)?',
      questions: [
        {
          id: 'q1',
          question: 'The ________ says it is 10:00.',
          options: ['watch', 'clock', 'time'],
          correctAnswer: 1,
          explanation: '"Clock" es un reloj de pared o mesa. "Watch" es el que llevas en la muñeca.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e29',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Reloj de pulsera',
          back: 'Watch',
          example: 'I have a new watch.',
          pronunciation: '/wɒtʃ/',
          explanation: '"Watch" se usa tanto para el verbo ver como para el sustantivo reloj de pulsera.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e30',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Hora exacta',
      instructions: 'Ordena para decir "Son las seis en punto".',
      sentences: [
        {
          id: 's1',
          words: ["o'clock", 'six', 'is', 'It'],
          correctSentence: "It is six o'clock",
          translation: 'Son las seis en punto.',
          hint: 'Usa "It is" para empezar.',
          explanation: 'La frase sigue la estructura estándar para decir la hora en inglés.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e31',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Days of the week',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Día de descanso',
      instructions: '¿Qué día suele ser para descansar?',
      questions: [
        {
          id: 'q1',
          question: 'Sunday is a ________ day.',
          options: ['work', 'rest', 'school'],
          correctAnswer: 1,
          explanation: '"Rest" significa descanso. El domingo es el día de descanso por excelencia.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e33',
    type: 'matching',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Partes de la semana',
      instructions: 'Une las partes de la semana.',
      pairs: [
        { id: '1', left: 'Lunes a viernes', right: 'Work week' },
        { id: '2', left: 'Sábado y domingo', right: 'Weekend' },
        { id: '3', left: 'Mañana', right: 'Morning' },
        { id: '4', left: 'Noche', right: 'Night' },
        { id: '5', left: 'Siete días', right: 'A week' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Categorizar los días te ayuda a organizar tu vocabulario.'
    } as any
  },
  {
    id: 'a1-u7-e34',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Siete días',
      instructions: 'Completa la frase.',
      questions: [
        {
          id: 'q1',
          text: 'There are seven days in a ___.',
          correctAnswer: 'week',
          explanation: '"Week" significa semana.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e35',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Mediodía exacto',
      instructions: '¿Qué hora es al mediodía?',
      questions: [
        {
          id: 'q1',
          question: 'It is ________ PM.',
          options: ['10:00', '12:00', '1:00'],
          correctAnswer: 1,
          explanation: 'Las 12:00 PM marca el inicio de la tarde (afternoon).'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e36',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Minuto',
          back: 'Minute',
          example: 'Wait a minute, please.',
          pronunciation: '/ˈmɪn.ɪt/',
          explanation: '"Minute" se escribe igual pero se pronuncia con una "i" corta.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e37',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Tengo tiempo',
      instructions: 'Ordena para decir "Tengo tiempo".',
      sentences: [
        {
          id: 's1',
          words: ['time', 'have', 'I'],
          correctSentence: 'I have time',
          translation: 'Tengo tiempo.',
          hint: 'Sujeto + Verbo + Objeto.',
          explanation: '"Have" es el verbo tener.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e38',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Segundos',
      instructions: '¿Cómo se dice "segundo"?',
      questions: [
        {
          id: 'q1',
          question: 'One minute has 60 ________.',
          options: ['seconds', 'hours', 'days'],
          correctAnswer: 0,
          explanation: '"Seconds" significa segundos.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e40',
    type: 'matching',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Unidades de tiempo',
      instructions: 'Une las unidades de tiempo.',
      pairs: [
        { id: '1', left: 'Segundo', right: 'Second' },
        { id: '2', left: 'Minuto', right: 'Minute' },
        { id: '3', left: 'Hora', right: 'Hour' },
        { id: '4', left: 'Día', right: 'Day' },
        { id: '5', left: 'Año', right: 'Year' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Estas son las bases para medir cualquier duración.'
    } as any
  },
  {
    id: 'a1-u7-e41',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Día de hoy',
      instructions: 'Escribe el nombre del día de hoy (en inglés).',
      questions: [
        {
          id: 'q1',
          text: 'What day is it today? Today is ___.',
          correctAnswer: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          explanation: 'Cualquier día de la semana es una respuesta válida aquí, ¡siempre con mayúscula!'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e42',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Próxima semana',
      instructions: '¿Cómo se dice "próximo"?',
      questions: [
        {
          id: 'q1',
          question: 'See you ________ week.',
          options: ['next', 'last', 'now'],
          correctAnswer: 0,
          explanation: '"Next" significa próximo o siguiente.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e43',
    type: 'flashcard',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      items: [
        {
          front: 'Ahora',
          back: 'Now',
          example: 'I want tea now.',
          pronunciation: '/naʊ/',
          explanation: '"Now" se refiere al momento inmediato.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e44',
    type: 'sentence-building',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Hasta luego',
      instructions: 'Ordena las palabras para despedirte.',
      sentences: [
        {
          id: 's1',
          words: ['later', 'See', 'you'],
          correctSentence: 'See you later',
          translation: 'Nos vemos luego.',
          hint: 'Empieza con "See".',
          explanation: 'Es una forma muy común de despedirse indicando que se verán más tarde.'
        }
      ]
    } as any
  },
  {
    id: 'a1-u7-e45',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Buen día',
      instructions: '¿Cómo le deseas a alguien un buen día?',
      questions: [
        {
          id: 'q1',
          question: 'Have a ________ day!',
          options: ['nice', 'bad', 'old'],
          correctAnswer: 0,
          explanation: '"Nice" significa agradable o bueno. Se usa mucho para desear algo positivo.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e47',
    type: 'matching',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Adverbios de tiempo',
      instructions: 'Une los adverbios con su traducción.',
      pairs: [
        { id: '1', left: 'Ahora', right: 'Now' },
        { id: '2', left: 'Luego', right: 'Later' },
        { id: '3', left: 'Pronto', right: 'Soon' },
        { id: '4', left: 'Hoy', right: 'Today' },
        { id: '5', left: 'Mañana', right: 'Tomorrow' }
      ].sort(() => Math.random() - 0.5),
      explanation: 'Estos adverbios son fundamentales para situar tus acciones en el tiempo.'
    } as any
  },
  {
    id: 'a1-u7-e48',
    type: 'fill-blank',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Fin de la semana',
      instructions: 'Completa la palabra.',
      questions: [
        {
          id: 'q1',
          text: 'See you on the ___.',
          correctAnswer: 'weekend',
          explanation: '"Weekend" es el fin de semana.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e49',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: '¿Mañana?',
      instructions: '¿Cómo preguntas por los planes de mañana?',
      questions: [
        {
          id: 'q1',
          question: 'See you ________?',
          options: ['tomorrow', 'yesterday', 'now'],
          correctAnswer: 0,
          explanation: 'Usamos "tomorrow" para referirnos al día siguiente.'
        }
      ]
    }
  },
  {
    id: 'a1-u7-e50',
    type: 'multiple-choice',
    level: 'A1',
    topic: 'Time',
    topicName: 'Time Check',
    difficulty: 'easy',
    content: {
      title: 'Repaso: Lunes',
      instructions: '¿Qué día es Monday?',
      questions: [
        {
          id: 'q1',
          question: 'Monday is ________.',
          options: ['Lunes', 'Martes', 'Miercoles'],
          correctAnswer: 0,
          explanation: '"Monday" es el primer día de la semana.'
        }
      ]
    }
  }
];
