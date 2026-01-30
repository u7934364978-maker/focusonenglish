'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Trophy, Star, Flame, Target, Award, Zap, Clock, Brain, ArrowLeft } from 'lucide-react'

interface MicroLesson {
  id: string
  title: string
  level: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  duration: number // en minutos
  category: 'grammar' | 'vocabulary' | 'pronunciation' | 'listening' | 'speaking' | 'methodology'
  difficulty: 1 | 2 | 3 | 4 | 5
  xp: number
  completed: boolean
  unlocked: boolean
  content?: {
    text: string
    keyPoints: string[]
  }
}

interface UserProgress {
  level: number
  cefrLevel: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  currentXP: number
  nextLevelXP: number
  streak: number
  totalPoints: number
  badges: Badge[]
}

interface Badge {
  id: string
  name: string
  level?: 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'
  description: string
  icon: string
  unlocked: boolean
  date?: string
}

const microLessons: MicroLesson[] = [
  // Nivel A1 - Bloque 1: Primeros Pasos
  { id: 'l1', title: 'Saying Hello & Goodbye', level: 'A1', duration: 4, category: 'vocabulary', difficulty: 1, xp: 50, completed: false, unlocked: true },
  { id: 'l2', title: 'The Verb "To Be": I am, You are', level: 'A1', duration: 6, category: 'grammar', difficulty: 1, xp: 60, completed: false, unlocked: true },
  { id: 'l3', title: 'Numbers 1-20 & Spelling', level: 'A1', duration: 5, category: 'vocabulary', difficulty: 1, xp: 50, completed: false, unlocked: false },
  
  // Nivel A1 - Bloque 2: Mi Mundo
  { id: 'l4', title: 'Introduce Yourself', level: 'A1', duration: 7, category: 'speaking', difficulty: 2, xp: 80, completed: false, unlocked: false },
  { id: 'l5', title: 'Countries & Nationalities', level: 'A1', duration: 6, category: 'vocabulary', difficulty: 2, xp: 60, completed: false, unlocked: false },
  
  // Nivel A1 - Bloque 3: Día a Día
  { id: 'l6', title: 'Family Members', level: 'A1', duration: 5, category: 'vocabulary', difficulty: 2, xp: 70, completed: false, unlocked: false },
  { id: 'l7', title: 'Possessive Adjectives (My, Your)', level: 'A1', duration: 7, category: 'grammar', difficulty: 2, xp: 80, completed: false, unlocked: false },
  
  // Nivel A1 - Bloque 4: Habilidades
  { id: 'l8', title: 'Can/Can\'t for Abilities', level: 'A1', duration: 8, category: 'grammar', difficulty: 3, xp: 100, completed: false, unlocked: false },
  { id: 'l9', title: 'Action Verbs', level: 'A1', duration: 6, category: 'vocabulary', difficulty: 3, xp: 90, completed: false, unlocked: false },
  
  // Nivel A1 - Bloque 5: Final de Nivel
  { id: 'l10', title: 'Daily Routine Challenge', level: 'A1', duration: 10, category: 'speaking', difficulty: 3, xp: 150, completed: false, unlocked: false },

  // Nivel A2 - Bloque 1: Experiencias
  { id: 'l11', title: 'Past Simple: Regular Verbs', level: 'A2', duration: 6, category: 'grammar', difficulty: 2, xp: 70, completed: false, unlocked: true },
  { id: 'l12', title: 'Travel & Transport', level: 'A2', duration: 5, category: 'vocabulary', difficulty: 2, xp: 60, completed: false, unlocked: true },
  { id: 'l13', title: 'The Irregular Verbs List', level: 'A2', duration: 8, category: 'grammar', difficulty: 3, xp: 90, completed: false, unlocked: false },

  // Nivel A2 - Bloque 2: Comparaciones
  { id: 'l14', title: 'Comparatives: Better & Faster', level: 'A2', duration: 7, category: 'grammar', difficulty: 2, xp: 80, completed: false, unlocked: false },
  { id: 'l15', title: 'Shopping & Clothes', level: 'A2', duration: 6, category: 'vocabulary', difficulty: 2, xp: 70, completed: false, unlocked: false },

  // Nivel A2 - Bloque 3: Salud y Cuerpo
  { id: 'l16', title: 'Health & Illnesses', level: 'A2', duration: 6, category: 'vocabulary', difficulty: 3, xp: 80, completed: false, unlocked: false },
  { id: 'l17', title: 'Modal Verbs: Should & Must', level: 'A2', duration: 8, category: 'grammar', difficulty: 3, xp: 100, completed: false, unlocked: false },

  // Nivel A2 - Bloque 4: Futuro
  { id: 'l18', title: 'Future with "Going to"', level: 'A2', duration: 7, category: 'grammar', difficulty: 3, xp: 90, completed: false, unlocked: false },
  { id: 'l19', title: 'Plans & Intentions', level: 'A2', duration: 6, category: 'speaking', difficulty: 3, xp: 100, completed: false, unlocked: false },

  // Nivel A2 - Bloque 5: Consolidación
  { id: 'l20', title: 'Elementary Storyteller', level: 'A2', duration: 12, category: 'speaking', difficulty: 4, xp: 200, completed: false, unlocked: false },

  // Metodologías Innovadoras (Aprende a Aprender)
  { 
    id: 'm1', 
    title: '¿Qué es el Microlearning?', 
    level: 'A1', 
    duration: 3, 
    category: 'methodology', 
    difficulty: 1, 
    xp: 40, 
    completed: false, 
    unlocked: true,
    content: {
      text: 'El Microlearning es una estrategia de aprendizaje que fragmenta el contenido en pequeñas unidades de información llamadas "píldoras de aprendizaje". En Focus English, cada lección está diseñada para durar entre 5 y 10 minutos.',
      keyPoints: [
        'Unidades pequeñas y enfocadas',
        'Fácil de integrar en el día a día',
        'Mejora la retención de información',
        'Evita la sobrecarga cognitiva'
      ]
    }
  },
  { 
    id: 'm2', 
    title: 'Beneficios de Lecciones Cortas', 
    level: 'A1', 
    duration: 4, 
    category: 'methodology', 
    difficulty: 1, 
    xp: 40, 
    completed: false, 
    unlocked: true,
    content: {
      text: '¿Por qué 5-10 minutos? La ciencia demuestra que nuestra atención plena es limitada. Las lecciones cortas permiten que el cerebro procese y almacene la información de manera más eficiente antes de pasar a otra tarea.',
      keyPoints: [
        'Mayor frecuencia de estudio',
        'Menor resistencia mental para empezar',
        'Resultados visibles en poco tiempo',
        'Flexibilidad total: estudia en el bus o café'
      ]
    }
  },
  { 
    id: 'm3', 
    title: 'Gamificación: Aprender Jugando', 
    level: 'A1', 
    duration: 5, 
    category: 'methodology', 
    difficulty: 1, 
    xp: 50, 
    completed: false, 
    unlocked: true,
    content: {
      text: 'La gamificación utiliza elementos de los juegos en contextos educativos. Al ganar puntos, subir de nivel y desbloquear medallas, tu cerebro libera dopamina, lo que te mantiene motivado y comprometido con tu aprendizaje.',
      keyPoints: [
        'Mecánicas de juego (puntos, niveles)',
        'Feedback instantáneo',
        'Sentido de progresión clara',
        'Competición sana y desafíos'
      ]
    }
  },
  { 
    id: 'm4', 
    title: 'Sistema de Puntos y XP', 
    level: 'A1', 
    duration: 3, 
    category: 'methodology', 
    difficulty: 1, 
    xp: 40, 
    completed: false, 
    unlocked: true,
    content: {
      text: 'Los XP (Experience Points) miden tu esfuerzo. Cada actividad, escucha o ejercicio te otorga XP. Al acumular suficientes XP, subirás de nivel, demostrando tu dominio creciente del idioma.',
      keyPoints: [
        'Gana XP por cada acierto',
        'Desbloquea nuevos niveles de contenido',
        'Visualiza tu progreso acumulado',
        'Muestra tu nivel a la comunidad'
      ]
    }
  },
  { 
    id: 'm5', 
    title: 'Manteniendo tu Racha', 
    level: 'A1', 
    duration: 4, 
    category: 'methodology', 
    difficulty: 1, 
    xp: 50, 
    completed: false, 
    unlocked: true,
    content: {
      text: 'La racha (streak) es el número de días consecutivos que has estudiado. Es la herramienta más potente para crear el hábito de aprender inglés. ¡No dejes que el fuego se apague!',
      keyPoints: [
        'Construcción de hábitos sólidos',
        'Recordatorios diarios para estudiar',
        'Medallas especiales por rachas largas',
        'El secreto de la fluidez es la constancia'
      ]
    }
  },
]

const badges: Badge[] = [
  { id: 'b1', name: 'A1 Starter', level: 'A1', description: 'Completa tu primera lección de nivel A1', icon: '🌱', unlocked: false },
  { id: 'b2', name: 'Políglota Novel', level: 'A1', description: 'Aprende 5 países y nacionalidades', icon: '🌍', unlocked: false },
  { id: 'b3', name: 'Comunicador', level: 'A1', description: 'Realiza tu primera presentación personal', icon: '👋', unlocked: false },
  { id: 'b4', name: 'Gramático A1', level: 'A1', description: 'Domina el verbo To Be y los Posesivos', icon: '📖', unlocked: false },
  { id: 'b5', name: 'Superviviente', description: 'Alcanza el nivel 5 de experiencia', icon: '🛡️', unlocked: false },
  { id: 'b6', name: 'Racha Imparable', description: 'Completa lecciones durante 7 días seguidos', icon: '⚡', unlocked: false },
  
  // Medallas A2
  { id: 'b7', name: 'Viajero A2', level: 'A2', description: 'Domina el vocabulario de viajes y transporte', icon: '✈️', unlocked: false },
  { id: 'b8', name: 'Historiador', level: 'A2', description: 'Usa correctamente el pasado simple', icon: '📜', unlocked: false },
  { id: 'b9', name: 'Consejero', level: 'A2', description: 'Da consejos usando modal verbs', icon: '🤝', unlocked: false },
  { id: 'b10', name: 'Futurista', level: 'A2', description: 'Expresa planes futuros con claridad', icon: '🚀', unlocked: false },
  { id: 'b11', name: 'Experto en Metodología', description: 'Completaste todas las lecciones sobre Microlearning y Gamificación', icon: '🎓', unlocked: false },
]

export default function MicrolearningGamification() {
  const router = useRouter()
  const [lessons, setLessons] = useState<MicroLesson[]>(microLessons)
  const [progress, setProgress] = useState<UserProgress>({
    level: 1,
    cefrLevel: 'A1',
    currentXP: 0,
    nextLevelXP: 500,
    streak: 3,
    totalPoints: 0,
    badges: badges
  })
  const [selectedLevel, setSelectedLevel] = useState<'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2'>('A1')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showBadgeModal, setShowBadgeModal] = useState(false)
  const [newBadge, setNewBadge] = useState<Badge | null>(null)
  const [selectedLesson, setSelectedLesson] = useState<MicroLesson | null>(null)
  const [showLessonModal, setShowLessonModal] = useState(false)

  const handleLessonAction = (lesson: MicroLesson) => {
    if (!lesson.unlocked) return

    if (lesson.content) {
      setSelectedLesson(lesson)
      setShowLessonModal(true)
    } else if (!lesson.completed) {
      completeLesson(lesson.id)
    }
  }

  const completeLesson = (lessonId: string) => {
    setLessons(prev => {
      const updatedLessons = prev.map(lesson => {
        if (lesson.id === lessonId && !lesson.completed) {
          // Unlock next lesson
          const currentIndex = prev.findIndex(l => l.id === lessonId)
          if (currentIndex < prev.length - 1) {
            prev[currentIndex + 1].unlocked = true
          }
          
          // Update progress
          setProgress(prevProgress => {
            const newXP = prevProgress.currentXP + lesson.xp
            const newLevel = Math.floor(newXP / prevProgress.nextLevelXP) + 1
            
            // Check for badge unlocks
            const completedLessonsCount = prev.filter(l => l.completed).length + 1
            if (completedLessonsCount === 1) {
              const starterBadgeId = selectedLevel === 'A1' ? 'b1' : 'b7'; // A1 Starter or A2 Traveler
              unlockBadge(starterBadgeId)
            }
            
            if (completedLessonsCount === 5 && selectedLevel === 'A2') {
              unlockBadge('b8') // Historiador
            }

            // Check methodology expert badge
            const completedMethodologyCount = updatedLessons.filter(l => l.category === 'methodology' && l.completed).length
            const totalMethodologyCount = updatedLessons.filter(l => l.category === 'methodology').length
            if (completedMethodologyCount === totalMethodologyCount && totalMethodologyCount > 0) {
              unlockBadge('b11')
            }
            
            return {
              ...prevProgress,
              currentXP: newXP % prevProgress.nextLevelXP,
              level: newLevel,
              totalPoints: prevProgress.totalPoints + lesson.xp
            }
          })
          
          return { ...lesson, completed: true }
        }
        return lesson
      })
      return updatedLessons
    })
  }

  const unlockBadge = (badgeId: string) => {
    const badge = badges.find(b => b.id === badgeId)
    if (badge && !badge.unlocked) {
      setNewBadge(badge)
      setShowBadgeModal(true)
      setProgress(prev => ({
        ...prev,
        badges: prev.badges.map(b =>
          b.id === badgeId ? { ...b, unlocked: true, date: new Date().toLocaleDateString() } : b
        )
      }))
    }
  }

  const filteredLessons = lessons.filter(l => {
    const levelMatch = l.level === selectedLevel
    const categoryMatch = selectedCategory === 'all' || l.category === selectedCategory
    return levelMatch && categoryMatch
  })

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'grammar': return '📖'
      case 'vocabulary': return '💬'
      case 'pronunciation': return '🗣️'
      case 'listening': return '👂'
      case 'speaking': return '🎤'
      case 'methodology': return '🧠'
      default: return '📚'
    }
  }

  const getDifficultyColor = (difficulty: number) => {
    if (difficulty <= 2) return 'bg-green-500'
    if (difficulty <= 3) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  const progressPercentage = (progress.currentXP / progress.nextLevelXP) * 100

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button 
        onClick={() => router.push('/metodologias-innovadoras')}
        className="flex items-center gap-2 text-gray-500 hover:text-orange-600 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Volver a Metodologías
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
          Microlearning & Gamificación
        </h1>
        <p className="text-gray-600 text-lg">
          Lecciones de 5-10 minutos con sistema de puntos, niveles y recompensas
        </p>
      </div>

      {/* Stats Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {/* Level */}
        <div className="bg-gradient-to-br from-purple-500 to-purple-700 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Trophy className="w-8 h-8" />
            <span className="text-3xl font-bold">Nivel {progress.level}</span>
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span>XP</span>
              <span>{progress.currentXP}/{progress.nextLevelXP}</span>
            </div>
            <div className="w-full h-2 bg-purple-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-500"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        </div>

        {/* Streak */}
        <div className="bg-gradient-to-br from-orange-500 to-red-500 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Flame className="w-8 h-8" />
            <span className="text-3xl font-bold">{progress.streak}</span>
          </div>
          <p className="text-sm opacity-90">Días de racha</p>
          <p className="text-xs mt-1 opacity-75">¡Sigue así!</p>
        </div>

        {/* Total Points */}
        <div className="bg-gradient-to-br from-yellow-400 to-orange-400 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Star className="w-8 h-8" />
            <span className="text-3xl font-bold">{progress.totalPoints}</span>
          </div>
          <p className="text-sm opacity-90">Puntos totales</p>
        </div>

        {/* Badges */}
        <div className="bg-gradient-to-br from-pink-500 to-rose-500 text-white p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between mb-2">
            <Award className="w-8 h-8" />
            <span className="text-3xl font-bold">
              {progress.badges.filter(b => b.unlocked).length}/{progress.badges.length}
            </span>
          </div>
          <p className="text-sm opacity-90">Medallas desbloqueadas</p>
        </div>
      </div>

      {/* Level & Category Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 mb-8">
        <div className="flex flex-col md:flex-row md:items-center gap-6">
          {/* CEFR Level Selector */}
          <div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Nivel MCER:</p>
            <div className="flex gap-2">
              {['A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
                <button
                  key={level}
                  onClick={() => setSelectedLevel(level as any)}
                  className={`w-12 h-12 rounded-xl font-black transition-all ${
                    selectedLevel === level
                      ? 'bg-gradient-to-br from-orange-500 to-pink-500 text-white shadow-lg scale-110'
                      : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block w-px h-12 bg-gray-200" />

          {/* Category Filter */}
          <div className="flex-1">
            <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">Categoría:</p>
            <div className="flex gap-2 overflow-x-auto pb-2">
              {['all', 'grammar', 'vocabulary', 'pronunciation', 'listening', 'speaking', 'methodology'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? 'bg-gray-800 text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat === 'all' ? '🎯 Todas' : cat === 'methodology' ? '🧠 Metodología' : `${getCategoryIcon(cat)} ${cat.charAt(0).toUpperCase() + cat.slice(1)}`}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {filteredLessons.map((lesson, index) => (
          <div
            key={lesson.id}
            className={`relative p-6 rounded-xl border-2 transition-all ${
              lesson.completed
                ? 'bg-green-50 border-green-300'
                : lesson.unlocked
                ? 'bg-white border-gray-200 hover:border-orange-400 hover:shadow-lg cursor-pointer'
                : 'bg-gray-50 border-gray-200 opacity-50 cursor-not-allowed'
            }`}
            onClick={() => handleLessonAction(lesson)}
          >
            {/* Lesson Number */}
            <div className="absolute -top-3 -left-3 w-10 h-10 bg-gradient-to-br from-orange-500 to-pink-500 text-white rounded-full flex items-center justify-center font-bold shadow-lg">
              {index + 1}
            </div>

            {/* Completed Badge */}
            {lesson.completed && (
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <Trophy className="w-5 h-5 text-white" />
              </div>
            )}

            {/* Category Icon */}
            <div className="text-4xl mb-3">{getCategoryIcon(lesson.category)}</div>

            {/* Title */}
            <h3 className={`font-bold text-lg mb-2 ${lesson.completed ? 'text-green-700' : 'text-gray-900'}`}>
              {lesson.title}
            </h3>

            {/* Info */}
            <div className="flex items-center gap-3 mb-3 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>{lesson.duration} min</span>
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                <span className="font-semibold text-yellow-600">+{lesson.xp} XP</span>
              </div>
            </div>

            {/* Difficulty */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`h-2 flex-1 rounded-full ${
                    i < lesson.difficulty ? getDifficultyColor(lesson.difficulty) : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>

            {/* Action Button */}
            <button
              className={`w-full py-2 rounded-lg font-bold text-sm transition-all ${
                lesson.completed
                  ? 'bg-green-100 text-green-700'
                  : lesson.unlocked
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-md hover:shadow-lg'
                  : 'bg-gray-200 text-gray-400'
              }`}
            >
              {lesson.completed ? '✓ Completada' : lesson.unlocked ? (lesson.content ? 'Ver Lección' : '¡Empezar ahora!') : '🔒 Bloqueada'}
            </button>
          </div>
        ))}
      </div>

      {/* Lesson Content Modal */}
      {showLessonModal && selectedLesson && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="bg-gradient-to-r from-orange-500 to-pink-500 p-8 text-white relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white/20 rounded-2xl backdrop-blur-md">
                  <Brain className="w-8 h-8" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold">{selectedLesson.title}</h2>
                  <p className="opacity-90">Microlearning • {selectedLesson.duration} min</p>
                </div>
              </div>
            </div>
            
            <div className="p-8">
              <div className="prose prose-orange max-w-none mb-8">
                <p className="text-gray-600 text-lg leading-relaxed">
                  {selectedLesson.content?.text}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {selectedLesson.content?.keyPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-3 bg-orange-50 p-4 rounded-xl border border-orange-100">
                    <div className="w-2 h-2 bg-orange-500 rounded-full" />
                    <span className="text-sm font-medium text-gray-700">{point}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <button
                  onClick={() => {
                    if (!selectedLesson.completed) {
                      completeLesson(selectedLesson.id)
                    }
                    setShowLessonModal(false)
                  }}
                  className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500 text-white py-4 rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all"
                >
                  {selectedLesson.completed ? 'Cerrar' : 'Entendido, ¡ganar XP!'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Badges Section */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Award className="w-7 h-7 text-purple-600" />
          Colección de Medallas
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {progress.badges.map(badge => (
            <div
              key={badge.id}
              className={`p-4 rounded-xl text-center transition-all ${
                badge.unlocked
                  ? 'bg-white border-2 border-purple-300 shadow-lg'
                  : 'bg-gray-100 border-2 border-gray-200 opacity-40'
              }`}
            >
              <div className="text-5xl mb-2">{badge.icon}</div>
              <h4 className="font-bold text-sm text-gray-900 mb-1">{badge.name}</h4>
              <p className="text-xs text-gray-600 mb-2">{badge.description}</p>
              {badge.unlocked && badge.date && (
                <p className="text-xs text-purple-600 font-semibold">{badge.date}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Badge Unlock Modal */}
      {showBadgeModal && newBadge && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-2xl p-8 max-w-md text-center animate-scaleIn">
            <div className="text-8xl mb-4">{newBadge.icon}</div>
            <h3 className="text-3xl font-bold text-purple-600 mb-2">¡Medalla Desbloqueada!</h3>
            <h4 className="text-2xl font-bold text-gray-900 mb-2">{newBadge.name}</h4>
            <p className="text-gray-600 mb-6">{newBadge.description}</p>
            <button
              onClick={() => setShowBadgeModal(false)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              ¡Genial!
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
