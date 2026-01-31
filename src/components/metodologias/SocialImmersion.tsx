'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Users, Video, MessageCircle, Calendar, Globe, Clock, Star, CheckCircle, UserPlus, ArrowLeft } from 'lucide-react'
import { useMethodologyProgress } from '@/hooks/use-methodology-progress'

interface ConversationClub {
  id: string
  title: string
  description: string
  level: string
  topic: string
  date: string
  time: string
  duration: string
  participants: number
  maxParticipants: number
  host: string
  language: string
  type: 'video' | 'audio' | 'chat'
  status: 'upcoming' | 'live' | 'completed'
  joined: boolean
}

interface ForumThread {
  id: string
  title: string
  author: string
  topic: string
  replies: number
  views: number
  lastActivity: string
  isHot: boolean
}

const conversationClubs: ConversationClub[] = [
  {
    id: 'club1',
    title: 'Business English Networking',
    description: 'Practica vocabulario profesional en un ambiente relajado. Hablaremos sobre networking, elevator pitches y small talk empresarial.',
    level: 'B1-B2',
    topic: 'Business & Networking',
    date: '2026-01-20',
    time: '18:00',
    duration: '60 min',
    participants: 8,
    maxParticipants: 12,
    host: 'Sarah Johnson',
    language: 'English',
    type: 'video',
    status: 'upcoming',
    joined: false
  },
  {
    id: 'club2',
    title: 'Travel Stories Exchange',
    description: 'Comparte tus experiencias de viaje y mejora tu speaking de forma natural. Todos los niveles bienvenidos.',
    level: 'A2-B1',
    topic: 'Travel & Culture',
    date: '2026-01-21',
    time: '19:30',
    duration: '45 min',
    participants: 15,
    maxParticipants: 20,
    host: 'Michael Chen',
    language: 'English',
    type: 'video',
    status: 'upcoming',
    joined: true
  },
  {
    id: 'club3',
    title: 'IELTS Speaking Practice',
    description: 'Sesión intensiva de práctica para el examen IELTS Speaking. Simularemos las 3 partes del examen con feedback personalizado.',
    level: 'B2-C1',
    topic: 'IELTS Preparation',
    date: '2026-01-22',
    time: '20:00',
    duration: '90 min',
    participants: 6,
    maxParticipants: 10,
    host: 'Emma Wilson',
    language: 'English',
    type: 'video',
    status: 'upcoming',
    joined: false
  },
  {
    id: 'club4',
    title: 'Tech Talk: AI & Innovation',
    description: 'Discusión sobre inteligencia artificial, tecnología y futuro. Ideal para profesionales tech.',
    level: 'B2-C1',
    topic: 'Technology',
    date: '2026-01-23',
    time: '17:00',
    duration: '60 min',
    participants: 10,
    maxParticipants: 15,
    host: 'David Kim',
    language: 'English',
    type: 'video',
    status: 'live',
    joined: false
  },
  {
    id: 'club5',
    title: 'Casual English Coffee Chat',
    description: 'Conversación informal para principiantes. Sin presión, solo práctica y diversión.',
    level: 'A1-A2',
    topic: 'General Conversation',
    date: '2026-01-24',
    time: '18:30',
    duration: '45 min',
    participants: 12,
    maxParticipants: 18,
    host: 'Laura García',
    language: 'English',
    type: 'audio',
    status: 'upcoming',
    joined: false
  }
]

const forumThreads: ForumThread[] = [
  {
    id: 'f1',
    title: '¿Cuál es la mejor app para practicar pronunciación?',
    author: 'Carlos M.',
    topic: 'Tools & Resources',
    replies: 24,
    views: 342,
    lastActivity: 'Hace 2 horas',
    isHot: true
  },
  {
    id: 'f2',
    title: 'Tips para superar el miedo a hablar en inglés',
    author: 'Ana Rodríguez',
    topic: 'Motivation & Tips',
    replies: 67,
    views: 1205,
    lastActivity: 'Hace 5 horas',
    isHot: true
  },
  {
    id: 'f3',
    title: 'Busco partner para practicar inglés 30 min/día',
    author: 'Miguel S.',
    topic: 'Study Partners',
    replies: 18,
    views: 234,
    lastActivity: 'Hace 1 día',
    isHot: false
  },
  {
    id: 'f4',
    title: 'Mejores series en Netflix para aprender inglés',
    author: 'Patricia L.',
    topic: 'Entertainment',
    replies: 89,
    views: 2341,
    lastActivity: 'Hace 3 horas',
    isHot: true
  },
  {
    id: 'f5',
    title: '¿Alguien ha tomado el examen Cambridge C1?',
    author: 'Roberto F.',
    topic: 'Exams',
    replies: 42,
    views: 876,
    lastActivity: 'Hace 6 horas',
    isHot: false
  }
]

export default function SocialImmersion() {
  const router = useRouter()
  const { fetchAllProgress, updateMethodologyStats, updateXP } = useMethodologyProgress()
  const [clubs, setClubs] = useState<ConversationClub[]>(conversationClubs)
  const [selectedClub, setSelectedClub] = useState<ConversationClub | null>(null)
  const [activeTab, setActiveTab] = useState<'clubs' | 'forums'>('clubs')
  const [filterLevel, setFilterLevel] = useState<string>('all')
  const [stats, setStats] = useState({
    activeMembers: 1250,
    clubsThisWeek: 12,
    activeConversations: 156,
    myClubs: 0
  })

  useEffect(() => {
    async function loadStats() {
      const dbData = await fetchAllProgress()
      if (dbData && dbData.stats) {
        setStats(prev => ({
          ...prev,
          myClubs: dbData.stats.social_clubs_joined || 0
        }))
      }
    }
    loadStats()
  }, [fetchAllProgress])

  const joinClub = async (clubId: string) => {
    const club = clubs.find(c => c.id === clubId)
    if (!club) return

    const isJoining = !club.joined

    setClubs(prev =>
      prev.map(c =>
        c.id === clubId
          ? { ...c, joined: isJoining, participants: isJoining ? c.participants + 1 : c.participants - 1 }
          : c
      )
    )

    if (isJoining) {
      await updateMethodologyStats({ social_clubs_joined: 1 })
      await updateXP(50, 'social_club_joined', clubId)
      setStats(prev => ({ ...prev, myClubs: prev.myClubs + 1 }))
    } else {
      // Opcional: manejar desuscripción
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'live':
        return <span className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">🔴 EN VIVO</span>
      case 'upcoming':
        return <span className="px-3 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">📅 Próximo</span>
      case 'completed':
        return <span className="px-3 py-1 bg-gray-400 text-white text-xs font-bold rounded-full">✓ Finalizado</span>
      default:
        return null
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video':
        return <Video className="w-5 h-5 text-purple-600" />
      case 'audio':
        return <Users className="w-5 h-5 text-green-600" />
      case 'chat':
        return <MessageCircle className="w-5 h-5 text-blue-600" />
      default:
        return null
    }
  }

  const filteredClubs = filterLevel === 'all' 
    ? clubs 
    : clubs.filter(c => c.level.includes(filterLevel))

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button 
        onClick={() => router.push('/metodologias-innovadoras')}
        className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Volver a Metodologías
      </button>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Inmersión Social
        </h1>
        <p className="text-gray-600 text-lg">
          Practica inglés en comunidad mediante clubes de conversación y foros de debate en vivo
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-blue-600" />
            <span className="text-3xl font-bold text-blue-900">
              {stats.activeMembers}
            </span>
          </div>
          <p className="text-blue-700 font-medium">Miembros Activos</p>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <Calendar className="w-8 h-8 text-purple-600" />
            <span className="text-3xl font-bold text-purple-900">
              {stats.clubsThisWeek}
            </span>
          </div>
          <p className="text-purple-700 font-medium">Clubes esta Semana</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-8 h-8 text-green-600" />
            <span className="text-3xl font-bold text-green-900">
              {stats.activeConversations}
            </span>
          </div>
          <p className="text-green-700 font-medium">Conversaciones Activas</p>
        </div>

        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <Star className="w-8 h-8 text-orange-600" />
            <span className="text-3xl font-bold text-orange-900">
              {stats.myClubs}
            </span>
          </div>
          <p className="text-orange-700 font-medium">Mis Clubes</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b border-gray-200">
        <button
          onClick={() => setActiveTab('clubs')}
          className={`pb-3 px-2 font-semibold transition-all ${
            activeTab === 'clubs'
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="flex items-center gap-2">
            <Video className="w-5 h-5" />
            Clubes de Conversación
          </span>
        </button>
        <button
          onClick={() => setActiveTab('forums')}
          className={`pb-3 px-2 font-semibold transition-all ${
            activeTab === 'forums'
              ? 'text-purple-600 border-b-2 border-purple-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
        >
          <span className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            Foros de Debate
          </span>
        </button>
      </div>

      {/* Conversation Clubs Tab */}
      {activeTab === 'clubs' && (
        <>
          {/* Level Filter */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
            {['all', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
              <button
                key={level}
                onClick={() => setFilterLevel(level)}
                className={`px-4 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  filterLevel === level
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {level === 'all' ? '🌍 Todos los Niveles' : `Nivel ${level}`}
              </button>
            ))}
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filteredClubs.map(club => (
              <div
                key={club.id}
                className={`bg-white border-2 rounded-xl p-6 transition-all hover:shadow-lg ${
                  club.joined ? 'border-purple-400 bg-purple-50' : 'border-gray-200 hover:border-purple-300'
                }`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {getStatusBadge(club.status)}
                      {club.joined && (
                        <span className="px-2 py-1 bg-purple-500 text-white text-xs font-bold rounded-full">
                          ✓ Inscrito
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{club.title}</h3>
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {club.level}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    {getTypeIcon(club.type)}
                    <span className="text-xs text-gray-500 mt-1">{club.type}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm">{club.description}</p>

                {/* Info Grid */}
                <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                  <div className="flex items-center gap-2 text-gray-700">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span>{club.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span>{club.time} ({club.duration})</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Users className="w-4 h-4 text-gray-400" />
                    <span>{club.participants}/{club.maxParticipants} participantes</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-700">
                    <Globe className="w-4 h-4 text-gray-400" />
                    <span>{club.language}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all"
                      style={{ width: `${(club.participants / club.maxParticipants) * 100}%` }}
                    />
                  </div>
                </div>

                {/* Host & Action */}
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    <span className="font-semibold">Host:</span> {club.host}
                  </div>
                  <button
                    onClick={() => joinClub(club.id)}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      club.joined
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : club.status === 'live'
                        ? 'bg-red-500 text-white hover:bg-red-600 animate-pulse'
                        : 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:shadow-lg'
                    }`}
                  >
                    {club.joined ? 'Cancelar' : club.status === 'live' ? '🔴 Unirse Ahora' : 'Inscribirse'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Forums Tab */}
      {activeTab === 'forums' && (
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-6 rounded-xl mb-6">
            <h2 className="text-2xl font-bold mb-2">💬 Foros de Debate</h2>
            <p className="opacity-90">Participa en discusiones, resuelve dudas y conecta con otros estudiantes</p>
          </div>

          {forumThreads.map(thread => (
            <div
              key={thread.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-300 hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-bold text-gray-900">{thread.title}</h3>
                    {thread.isHot && (
                      <span className="px-2 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                        🔥 HOT
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3">
                    Por <span className="font-semibold">{thread.author}</span> · {thread.topic}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      {thread.replies} respuestas
                    </span>
                    <span>👁️ {thread.views} vistas</span>
                    <span className="text-purple-600 font-medium">{thread.lastActivity}</span>
                  </div>
                </div>
                <button className="text-purple-600 hover:text-purple-700 font-semibold">
                  Ver hilo →
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
