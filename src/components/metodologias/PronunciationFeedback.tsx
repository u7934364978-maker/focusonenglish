'use client'

import { useState, useRef, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Mic, Volume2, RotateCcw, Trophy, TrendingUp, ChevronRight, CheckCircle, XCircle, ArrowLeft } from 'lucide-react'
import { useMethodologyProgress } from '@/hooks/use-methodology-progress'

interface PronunciationExercise {
  id: string
  word: string
  phonetic: string
  difficulty: 'easy' | 'medium' | 'hard'
  category: string
  audioUrl: string
  commonMistakes: string[]
}

interface PronunciationResult {
  word: string
  score: number
  feedback: string
  improvements: string[]
  timestamp: Date
}

const exercises: PronunciationExercise[] = [
  {
    id: 'e1',
    word: 'Entrepreneur',
    phonetic: '/ˌɒntrəprəˈnɜːr/',
    difficulty: 'hard',
    category: 'Business',
    audioUrl: '',
    commonMistakes: ['Pronunciar la "r" final', 'Acentuar la sílaba incorrecta']
  },
  {
    id: 'e2',
    word: 'Schedule',
    phonetic: '/ˈʃedjuːl/ (UK) or /ˈskedʒuːl/ (US)',
    difficulty: 'medium',
    category: 'General',
    audioUrl: '',
    commonMistakes: ['Confusión con "sh" vs "sk"']
  },
  {
    id: 'e3',
    word: 'Thorough',
    phonetic: '/ˈθʌrə/',
    difficulty: 'hard',
    category: 'Academic',
    audioUrl: '',
    commonMistakes: ['El sonido "th"', 'La terminación "ough"']
  },
  {
    id: 'e4',
    word: 'Colleague',
    phonetic: '/ˈkɒliːɡ/',
    difficulty: 'medium',
    category: 'Business',
    audioUrl: '',
    commonMistakes: ['No pronunciar la "ue" final']
  },
  {
    id: 'e5',
    word: 'Specific',
    phonetic: '/spəˈsɪfɪk/',
    difficulty: 'easy',
    category: 'General',
    audioUrl: '',
    commonMistakes: ['Acentuar la primera sílaba incorrectamente']
  }
]

const recentResults: PronunciationResult[] = [
  {
    word: 'Communication',
    score: 92,
    feedback: 'Excelente pronunciación',
    improvements: [],
    timestamp: new Date('2026-01-18T10:30:00')
  },
  {
    word: 'Development',
    score: 78,
    feedback: 'Bueno, pero mejora el énfasis',
    improvements: ['Acentúa la segunda sílaba más fuerte'],
    timestamp: new Date('2026-01-18T10:25:00')
  },
  {
    word: 'Presentation',
    score: 85,
    feedback: 'Muy bien',
    improvements: ['Pronuncia la "t" más clara'],
    timestamp: new Date('2026-01-18T10:20:00')
  }
]

export default function PronunciationFeedback() {
  const router = useRouter()
  const { fetchAllProgress, updateMethodologyStats, updateXP } = useMethodologyProgress()
  const [selectedExercise, setSelectedExercise] = useState<PronunciationExercise>(exercises[0])
  const [isRecording, setIsRecording] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [currentResult, setCurrentResult] = useState<PronunciationResult | null>(null)
  const [stats, setStats] = useState({
    averageScore: 85,
    totalPractices: 47,
    wordsImproved: 23,
    todayStreak: 5
  })

  useEffect(() => {
    async function loadStats() {
      const dbData = await fetchAllProgress()
      if (dbData && dbData.stats) {
        setStats(prev => ({
          ...prev,
          averageScore: Math.round(dbData.stats.pronunciation_average_score || 85),
          totalPractices: dbData.stats.pronunciation_practices_count || 0
        }))
      }
    }
    loadStats()
  }, [fetchAllProgress])

  const startRecording = () => {
    setIsRecording(true)
    // Simulate recording
    setTimeout(() => {
      setIsRecording(false)
      analyzePronunciation()
    }, 3000)
  }

  const analyzePronunciation = async () => {
    // Simulate AI analysis
    const randomScore = Math.floor(Math.random() * 30) + 70 // 70-100
    const result: PronunciationResult = {
      word: selectedExercise.word,
      score: randomScore,
      feedback: randomScore >= 90 ? 'Excelente pronunciación!' : randomScore >= 80 ? 'Muy bien!' : 'Bueno, sigue practicando',
      improvements: randomScore < 90 ? ['Mejora el énfasis en la segunda sílaba', 'Pronuncia la "th" más suave'] : [],
      timestamp: new Date()
    }
    
    // Persistir resultados
    await updateMethodologyStats({ 
      pronunciation_practices_count: 1,
      pronunciation_average_score: randomScore
    })
    await updateXP(15, 'pronunciation_practice', selectedExercise.id)

    setCurrentResult(result)
    setShowResult(true)
  }

  const playModelAudio = () => {
    // Simulate audio playback
    console.log(`Playing: ${selectedExercise.word}`)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-700 border-green-300'
      case 'medium': return 'bg-yellow-100 text-yellow-700 border-yellow-300'
      case 'hard': return 'bg-red-100 text-red-700 border-red-300'
      default: return 'bg-gray-100 text-gray-700 border-gray-300'
    }
  }

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600'
    if (score >= 80) return 'text-yellow-600'
    return 'text-orange-600'
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button 
        onClick={() => router.push('/')}
        className="flex items-center gap-2 text-gray-500 hover:text-indigo-600 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Volver a Metodologías
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Feedback Inmediato de Pronunciación
        </h1>
        <p className="text-gray-600 text-lg">
          Corrección en tiempo real de tu pronunciación con inteligencia artificial
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-6 rounded-xl border border-indigo-200">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-8 h-8 text-indigo-600" />
            <span className="text-3xl font-bold text-indigo-900">{stats.averageScore}%</span>
          </div>
          <p className="text-indigo-700 font-medium">Promedio General</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <Mic className="w-8 h-8 text-purple-600" />
            <span className="text-3xl font-bold text-purple-900">{stats.totalPractices}</span>
          </div>
          <p className="text-purple-700 font-medium">Prácticas Totales</p>
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-8 h-8 text-pink-600" />
            <span className="text-3xl font-bold text-pink-900">{stats.wordsImproved}</span>
          </div>
          <p className="text-pink-700 font-medium">Palabras Mejoradas</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">🔥</span>
            <span className="text-3xl font-bold text-orange-900">{stats.todayStreak}</span>
          </div>
          <p className="text-orange-700 font-medium">Racha Hoy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Practice Area */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Mic className="w-7 h-7 text-indigo-600" />
              Práctica de Pronunciación
            </h2>

            {/* Current Word */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-bold border-2 ${getDifficultyColor(selectedExercise.difficulty)}`}>
                  {selectedExercise.difficulty.toUpperCase()}
                </span>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                  {selectedExercise.category}
                </span>
              </div>

              <h3 className="text-5xl font-bold text-indigo-900 mb-4 text-center">
                {selectedExercise.word}
              </h3>

              <p className="text-2xl text-gray-600 text-center mb-6">
                {selectedExercise.phonetic}
              </p>

              {/* Audio Controls */}
              <div className="flex gap-4 justify-center mb-6">
                <button
                  onClick={playModelAudio}
                  className="bg-white border-2 border-indigo-300 text-indigo-700 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-all flex items-center gap-2"
                >
                  <Volume2 className="w-5 h-5" />
                  Escuchar Modelo
                </button>
              </div>

              {/* Recording Button */}
              <div className="text-center">
                {!isRecording && !showResult && (
                  <button
                    onClick={startRecording}
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-12 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all flex items-center gap-3 mx-auto"
                  >
                    <Mic className="w-6 h-6" />
                    Grabar mi Pronunciación
                  </button>
                )}

                {isRecording && (
                  <div className="inline-flex items-center gap-3 bg-red-500 text-white px-8 py-4 rounded-xl font-bold animate-pulse">
                    <div className="w-4 h-4 bg-white rounded-full animate-ping"></div>
                    Grabando...
                  </div>
                )}
              </div>
            </div>

            {/* Common Mistakes */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
              <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                ⚠️ Errores Comunes
              </h4>
              <ul className="space-y-2">
                {selectedExercise.commonMistakes.map((mistake, index) => (
                  <li key={index} className="text-gray-700 flex items-start gap-2">
                    <span className="text-yellow-600 mt-1">•</span>
                    <span>{mistake}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Result Modal */}
          {showResult && currentResult && (
            <div className="mt-6 bg-white border-2 border-gray-200 rounded-xl p-8 animate-fadeIn">
              <div className="text-center mb-6">
                <div className={`text-7xl font-bold mb-2 ${getScoreColor(currentResult.score)}`}>
                  {currentResult.score}%
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{currentResult.feedback}</h3>
                <p className="text-gray-600">Palabra: {currentResult.word}</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full transition-all duration-1000 ${
                      currentResult.score >= 90 ? 'bg-green-500' : 
                      currentResult.score >= 80 ? 'bg-yellow-500' : 
                      'bg-orange-500'
                    }`}
                    style={{ width: `${currentResult.score}%` }}
                  />
                </div>
              </div>

              {/* Improvements */}
              {currentResult.improvements.length > 0 && (
                <div className="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 mb-6">
                  <h4 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                    💡 Sugerencias de Mejora
                  </h4>
                  <ul className="space-y-2">
                    {currentResult.improvements.map((improvement, index) => (
                      <li key={index} className="text-gray-700 flex items-start gap-2">
                        <ChevronRight className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span>{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Actions */}
              <div className="flex gap-4">
                <button
                  onClick={() => {
                    setShowResult(false)
                    setCurrentResult(null)
                  }}
                  className="flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                >
                  Siguiente Palabra
                </button>
                <button
                  onClick={() => {
                    setShowResult(false)
                    setCurrentResult(null)
                  }}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 rounded-xl font-bold hover:bg-gray-300 transition-all flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Intentar de Nuevo
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Sidebar - Exercise List & History */}
        <div className="lg:col-span-1 space-y-6">
          {/* Exercise List */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Palabras para Practicar</h3>
            <div className="space-y-2">
              {exercises.map(exercise => (
                <div
                  key={exercise.id}
                  onClick={() => setSelectedExercise(exercise)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedExercise.id === exercise.id
                      ? 'border-indigo-500 bg-indigo-50'
                      : 'border-gray-200 hover:border-indigo-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-gray-900">{exercise.word}</h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(exercise.difficulty)}`}>
                      {exercise.difficulty}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{exercise.phonetic}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Results */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Historial Reciente</h3>
            <div className="space-y-3">
              {recentResults.map((result, index) => (
                <div key={index} className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900">{result.word}</span>
                    <span className={`text-2xl font-bold ${getScoreColor(result.score)}`}>
                      {result.score}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-600">{result.feedback}</p>
                  {result.score >= 90 && (
                    <CheckCircle className="w-4 h-4 text-green-500 inline mt-1" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
