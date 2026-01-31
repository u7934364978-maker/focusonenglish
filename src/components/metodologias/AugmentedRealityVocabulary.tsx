'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Camera, Scan, BookOpen, Volume2, Star, CheckCircle, RefreshCw, ArrowLeft } from 'lucide-react'
import { useMethodologyProgress } from '@/hooks/use-methodology-progress'

interface VocabularyItem {
  id: string
  word: string
  translation: string
  pronunciation: string
  category: string
  context: string
  imageUrl: string
  learned: boolean
}

const vocabularyItems: VocabularyItem[] = [
  {
    id: 'v1',
    word: 'Laptop',
    translation: 'Portátil',
    pronunciation: '/ˈlæptɒp/',
    category: 'Technology',
    context: 'Office Environment',
    imageUrl: '💻',
    learned: false
  },
  {
    id: 'v2',
    word: 'Coffee Mug',
    translation: 'Taza de café',
    pronunciation: '/ˈkɒfi mʌɡ/',
    category: 'Office Supplies',
    context: 'Break Room',
    imageUrl: '☕',
    learned: false
  },
  {
    id: 'v3',
    word: 'Desk Chair',
    translation: 'Silla de escritorio',
    pronunciation: '/desk tʃeər/',
    category: 'Furniture',
    context: 'Office Environment',
    imageUrl: '🪑',
    learned: true
  },
  {
    id: 'v4',
    word: 'Meeting Room',
    translation: 'Sala de reuniones',
    pronunciation: '/ˈmiːtɪŋ ruːm/',
    category: 'Office Spaces',
    context: 'Corporate Setting',
    imageUrl: '🏢',
    learned: false
  },
  {
    id: 'v5',
    word: 'Whiteboard',
    translation: 'Pizarra blanca',
    pronunciation: '/ˈwaɪtbɔːrd/',
    category: 'Office Supplies',
    context: 'Meeting Room',
    imageUrl: '📋',
    learned: false
  },
  {
    id: 'v6',
    word: 'Smartphone',
    translation: 'Teléfono inteligente',
    pronunciation: '/ˈsmɑːrtfoʊn/',
    category: 'Technology',
    context: 'Daily Life',
    imageUrl: '📱',
    learned: true
  }
]

const arScenarios = [
  {
    id: 'ar1',
    title: 'Office Environment',
    description: 'Aprende vocabulario de oficina apuntando tu cámara a objetos',
    icon: '🏢',
    itemsCount: 25
  },
  {
    id: 'ar2',
    title: 'Restaurant & Food',
    description: 'Identifica alimentos y bebidas con realidad aumentada',
    icon: '🍽️',
    itemsCount: 40
  },
  {
    id: 'ar3',
    title: 'City & Transportation',
    description: 'Vocabulario urbano y de transporte contextualizado',
    icon: '🚗',
    itemsCount: 30
  },
  {
    id: 'ar4',
    title: 'Home & Furniture',
    description: 'Aprende los nombres de objetos en tu casa',
    icon: '🏠',
    itemsCount: 35
  }
]

export default function AugmentedRealityVocabulary() {
  const router = useRouter()
  const { fetchAllProgress, saveARVocabulary, updateXP } = useMethodologyProgress()
  const [vocabulary, setVocabulary] = useState<VocabularyItem[]>(vocabularyItems)
  const [selectedItem, setSelectedItem] = useState<VocabularyItem | null>(null)
  const [isScanning, setIsScanning] = useState(false)
  const [stats, setStats] = useState({
    totalWords: vocabularyItems.length,
    learned: vocabularyItems.filter(v => v.learned).length,
    todayPractice: 8
  })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadProgress() {
      const dbData = await fetchAllProgress()
      if (dbData && dbData.arWords) {
        setVocabulary(prev => prev.map(item => {
          const saved = dbData.arWords?.find(w => w.word_id === item.id)
          return saved ? { ...item, learned: saved.learned } : item
        }))
      }
      setIsLoading(false)
    }
    loadProgress()
  }, [fetchAllProgress])

  const toggleLearned = async (itemId: string) => {
    let isNowLearned = false
    setVocabulary(prev =>
      prev.map(item => {
        if (item.id === itemId) {
          isNowLearned = !item.learned
          return { ...item, learned: isNowLearned }
        }
        return item
      })
    )
    
    // Persistir en DB
    await saveARVocabulary(itemId, isNowLearned)
    if (isNowLearned) {
      await updateXP(10, 'ar_vocabulary_learned', itemId)
    }
  }

  const playPronunciation = (item: VocabularyItem) => {
    // Simulate audio playback
    console.log(`Playing pronunciation: ${item.pronunciation}`)
  }

  const startARScanning = () => {
    setIsScanning(true)
    // Simulate AR scanning
    setTimeout(() => {
      setIsScanning(false)
      // Show random vocabulary item
      const randomItem = vocabulary[Math.floor(Math.random() * vocabulary.length)]
      setSelectedItem(randomItem)
    }, 2000)
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button 
        onClick={() => router.push('/metodologias-innovadoras')}
        className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Volver a Metodologías
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
          Realidad Aumentada (AR)
        </h1>
        <p className="text-gray-600 text-lg">
          Aprende vocabulario contextualizado proyectando objetos en tu espacio real
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 p-6 rounded-xl border border-emerald-200">
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="w-8 h-8 text-emerald-600" />
            <span className="text-3xl font-bold text-emerald-900">{stats.totalWords}</span>
          </div>
          <p className="text-emerald-700 font-medium">Palabras Totales</p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
          <div className="flex items-center gap-3 mb-2">
            <CheckCircle className="w-8 h-8 text-teal-600" />
            <span className="text-3xl font-bold text-teal-900">{stats.learned}</span>
          </div>
          <p className="text-teal-700 font-medium">Aprendidas</p>
        </div>

        <div className="bg-gradient-to-br from-cyan-50 to-cyan-100 p-6 rounded-xl border border-cyan-200">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-8 h-8 text-cyan-600" />
            <span className="text-3xl font-bold text-cyan-900">{stats.todayPractice}</span>
          </div>
          <p className="text-cyan-700 font-medium">Hoy Practicadas</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* AR Scanner */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6 mb-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Camera className="w-7 h-7 text-emerald-600" />
              Escáner AR
            </h2>
            
            {/* AR View Simulation */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 h-96 flex items-center justify-center relative overflow-hidden">
              {!isScanning && !selectedItem && (
                <div className="text-center text-white">
                  <Camera className="w-16 h-16 mx-auto mb-4 opacity-50" />
                  <h3 className="text-xl font-bold mb-2">Inicia el Escáner AR</h3>
                  <p className="text-gray-400 mb-6">
                    Apunta tu cámara a objetos en tu entorno para aprender vocabulario
                  </p>
                  <button
                    onClick={startARScanning}
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                  >
                    <span className="flex items-center gap-2">
                      <Scan className="w-5 h-5" />
                      Activar Cámara AR
                    </span>
                  </button>
                </div>
              )}

              {isScanning && (
                <div className="text-center">
                  <div className="relative">
                    <div className="absolute inset-0 border-4 border-emerald-500 rounded-lg animate-pulse"></div>
                    <div className="w-64 h-64 border-4 border-emerald-400 rounded-lg flex items-center justify-center">
                      <Scan className="w-20 h-20 text-emerald-400 animate-spin" />
                    </div>
                  </div>
                  <p className="text-white mt-4 font-semibold animate-pulse">
                    Escaneando objetos...
                  </p>
                </div>
              )}

              {!isScanning && selectedItem && (
                <div className="text-center text-white">
                  <div className="text-9xl mb-4">{selectedItem.imageUrl}</div>
                  <div className="bg-black/60 backdrop-blur-sm rounded-xl p-6 max-w-md">
                    <h3 className="text-3xl font-bold text-emerald-400 mb-2">
                      {selectedItem.word}
                    </h3>
                    <p className="text-gray-300 text-lg mb-1">{selectedItem.translation}</p>
                    <p className="text-gray-400 text-sm mb-4">{selectedItem.pronunciation}</p>
                    
                    <div className="flex gap-2 mb-4">
                      <span className="text-xs bg-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full">
                        {selectedItem.category}
                      </span>
                      <span className="text-xs bg-teal-500/30 text-teal-300 px-3 py-1 rounded-full">
                        {selectedItem.context}
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => playPronunciation(selectedItem)}
                        className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg font-semibold transition-all"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <Volume2 className="w-4 h-4" />
                          Pronunciar
                        </span>
                      </button>
                      <button
                        onClick={() => toggleLearned(selectedItem.id)}
                        className={`flex-1 px-4 py-2 rounded-lg font-semibold transition-all ${
                          selectedItem.learned
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                        }`}
                      >
                        {selectedItem.learned ? '✓ Aprendida' : 'Marcar'}
                      </button>
                    </div>

                    <button
                      onClick={() => setSelectedItem(null)}
                      className="mt-4 text-gray-400 hover:text-white transition-all text-sm"
                    >
                      <RefreshCw className="w-4 h-4 inline mr-1" />
                      Escanear otro objeto
                    </button>
                  </div>
                </div>
              )}

              {/* AR Grid Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-20">
                <div className="grid grid-cols-8 grid-rows-6 h-full">
                  {[...Array(48)].map((_, i) => (
                    <div key={i} className="border border-emerald-500/30"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* AR Scenarios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {arScenarios.map(scenario => (
              <div
                key={scenario.id}
                className="bg-white border-2 border-gray-200 rounded-xl p-5 hover:border-emerald-400 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="text-5xl mb-3">{scenario.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{scenario.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{scenario.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-emerald-600 font-semibold bg-emerald-100 px-2 py-1 rounded-full">
                    {scenario.itemsCount} palabras
                  </span>
                  <button className="text-emerald-600 font-semibold text-sm hover:text-emerald-700">
                    Explorar →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vocabulary List */}
        <div className="lg:col-span-1">
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <BookOpen className="w-6 h-6 text-emerald-600" />
              Vocabulario Reciente
            </h3>
            <div className="space-y-3 max-h-[800px] overflow-y-auto">
              {vocabulary.map(item => (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    item.learned
                      ? 'bg-green-50 border-green-300'
                      : 'bg-white border-gray-200 hover:border-emerald-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{item.imageUrl}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-bold text-gray-900">{item.word}</h4>
                        {item.learned && (
                          <CheckCircle className="w-4 h-4 text-green-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{item.translation}</p>
                      <p className="text-xs text-gray-500">{item.pronunciation}</p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        playPronunciation(item)
                      }}
                      className="p-2 hover:bg-emerald-100 rounded-lg transition-all"
                    >
                      <Volume2 className="w-5 h-5 text-emerald-600" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
