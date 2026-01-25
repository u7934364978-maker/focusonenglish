'use client'

import { useState, useEffect } from 'react'
import { Trophy, Star, Flame, Target, Award, Zap, Clock, Brain } from 'lucide-react'

interface MicroLesson {
  id: string
  title: string
  duration: number // en minutos
  category: 'grammar' | 'vocabulary' | 'pronunciation' | 'listening' | 'speaking'
  difficulty: 1 | 2 | 3 | 4 | 5
  xp: number
  completed: boolean
  unlocked: boolean
}

interface UserProgress {
  level: number
  currentXP: number
  nextLevelXP: number
  streak: number
  totalPoints: number
  badges: Badge[]
}

interface Badge {
  id: string
  name: string
  description: string
  icon: string
  unlocked: boolean
  date?: string
}

const microLessons: MicroLesson[] = [
  // Día 1
  { id: 'l1', title: 'Present Simple: Daily Routines', duration: 5, category: 'grammar', difficulty: 1, xp: 50, completed: false, unlocked: true },
  { id: 'l2', title: '10 Business Phrases', duration: 7, category: 'vocabulary', difficulty: 1, xp: 70, completed: false, unlocked: true },
  { id: 'l3', title: 'Pronunciation: /th/ sounds', duration: 5, category: 'pronunciation', difficulty: 1, xp: 50, completed: false, unlocked: false },
  
  // Día 2
  { id: 'l4', title: 'Small Talk at Work', duration: 8, category: 'speaking', difficulty: 2, xp: 80, completed: false, unlocked: false },
  { id: 'l5', title: 'Email Vocabulary', duration: 6, category: 'vocabulary', difficulty: 2, xp: 60, completed: false, unlocked: false },
  
  // Día 3
  { id: 'l6', title: 'Past Simple Stories', duration: 10, category: 'grammar', difficulty: 2, xp: 100, completed: false, unlocked: false },
  { id: 'l7', title: 'Listen: Job Interview', duration: 7, category: 'listening', difficulty: 2, xp: 70, completed: false, unlocked: false },
  
  // Día 4
  { id: 'l8', title: 'Phrasal Verbs: Business', duration: 8, category: 'vocabulary', difficulty: 3, xp: 120, completed: false, unlocked: false },
  { id: 'l9', title: 'Present Perfect Practice', duration: 9, category: 'grammar', difficulty: 3, xp: 130, completed: false, unlocked: false },
  
  // Día 5
  { id: 'l10', title: 'Presentation Skills', duration: 10, category: 'speaking', difficulty: 3, xp: 150, completed: false, unlocked: false },
]

const badges: Badge[] = [
  { id: 'b1', name: 'Primer Paso', description: 'Completa tu primera lección', icon: '🎯', unlocked: false },
  { id: 'b2', name: 'Racha de 3', description: 'Mantén una racha de 3 días', icon: '🔥', unlocked: false },
  { id: 'b3', name: 'Velocista', description: 'Completa 5 lecciones en un día', icon: '⚡', unlocked: false },
  { id: 'b4', name: 'Maestro Grammar', description: 'Completa todas las lecciones de gramática', icon: '📚', unlocked: false },
  { id: 'b5', name: 'Nivel 5', description: 'Alcanza el nivel 5', icon: '👑', unlocked: false },
  { id: 'b6', name: 'Perfeccionista', description: 'Obtén 100% en 10 lecciones', icon: '💎', unlocked: false },
]

export default function MicrolearningGamification() {
  const [lessons, setLessons] = useState<MicroLesson[]>(microLessons)
  const [progress, setProgress] = useState<UserProgress>({
    level: 1,
    currentXP: 0,
    nextLevelXP: 500,
    streak: 3,
    totalPoints: 0,
    badges: badges
  })
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [showBadgeModal, setShowBadgeModal] = useState(false)
  const [newBadge, setNewBadge] = useState<Badge | null>(null)

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
            const completedLessons = prev.filter(l => l.completed).length + 1
            if (completedLessons === 1) {
              unlockBadge('b1')
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

  const filteredLessons = selectedCategory === 'all' 
    ? lessons 
    : lessons.filter(l => l.category === selectedCategory)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'grammar': return '📖'
      case 'vocabulary': return '💬'
      case 'pronunciation': return '🗣️'
      case 'listening': return '👂'
      case 'speaking': return '🎤'
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

      {/* Category Filter */}
      <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
        {['all', 'grammar', 'vocabulary', 'pronunciation', 'listening', 'speaking'].map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
              selectedCategory === cat
                ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat === 'all' ? '🎯 Todas' : `${getCategoryIcon(cat)} ${cat.charAt(0).toUpperCase() + cat.slice(1)}`}
          </button>
        ))}
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
            onClick={() => lesson.unlocked && !lesson.completed && completeLesson(lesson.id)}
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
            {lesson.unlocked && !lesson.completed && (
              <button className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-2 rounded-lg font-semibold hover:shadow-lg transition-all">
                ¡Empezar ahora!
              </button>
            )}

            {lesson.completed && (
              <div className="w-full bg-green-500 text-white py-2 rounded-lg font-semibold text-center">
                ✓ Completada
              </div>
            )}

            {!lesson.unlocked && (
              <div className="w-full bg-gray-300 text-gray-600 py-2 rounded-lg font-semibold text-center">
                🔒 Bloqueada
              </div>
            )}
          </div>
        ))}
      </div>

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
