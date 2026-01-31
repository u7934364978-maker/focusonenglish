'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { 
  Rocket, 
  Gamepad2, 
  Users, 
  Bot, 
  Glasses, 
  Mic, 
  TrendingUp,
  Award,
  Target,
  Zap,
  Calendar,
  Clock
} from 'lucide-react'
import { useMethodologyProgress } from '@/hooks/use-methodology-progress'

interface MethodologyCard {
  id: string
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  gradient: string
  stats: {
    label: string
    value: string | number
    icon: React.ReactNode
  }[]
  href: string
}

export default function MetodologiasInnovadorasPage() {
  const router = useRouter()
  const { fetchAllProgress } = useMethodologyProgress()
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)
  const [dbData, setDbData] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function load() {
      const data = await fetchAllProgress()
      setDbData(data)
      setIsLoading(false)
    }
    load()
  }, [fetchAllProgress])

  const methodologies: MethodologyCard[] = [
    {
      id: 'abp',
      title: 'Aprendizaje Basado en Proyectos',
      subtitle: 'Project-Based Learning',
      description: 'Supera retos reales como grabar podcasts, simulaciones de negocios o presentaciones profesionales en lugar de exámenes tradicionales.',
      icon: <Rocket className="w-12 h-12" />,
      gradient: 'from-purple-500 to-pink-500',
      stats: [
        { label: 'Proyectos', value: 3, icon: <Target className="w-5 h-5" /> },
        { label: 'Completados', value: dbData?.projects?.filter((p: any) => p.status === 'completed').length || 0, icon: <Award className="w-5 h-5" /> },
        { label: 'En Progreso', value: dbData?.projects?.filter((p: any) => p.status === 'in_progress').length || 0, icon: <Clock className="w-5 h-5" /> }
      ],
      href: '/metodologias-innovadoras/proyectos'
    },
    {
      id: 'gamification',
      title: 'Microlearning & Gamificación',
      subtitle: 'Bite-sized Learning with Points',
      description: 'Lecciones de 5-10 minutos con sistema de puntos, niveles, medallas y recompensas que mantienen tu motivación alta.',
      icon: <Gamepad2 className="w-12 h-12" />,
      gradient: 'from-orange-500 to-pink-500',
      stats: [
        { label: 'Nivel', value: Math.floor((dbData?.lessons?.reduce((acc: number, curr: any) => acc + (curr.xp_earned || 0), 0) || 0) / 500) + 1, icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'XP', value: dbData?.lessons?.reduce((acc: number, curr: any) => acc + (curr.xp_earned || 0), 0) || 0, icon: <Zap className="w-5 h-5" /> },
        { label: 'Medallas', value: `${dbData?.lessons?.filter((l: any) => l.completed).length || 0}/11`, icon: <Award className="w-5 h-5" /> }
      ],
      href: '/metodologias-innovadoras/gamificacion'
    },
    {
      id: 'social',
      title: 'Inmersión Social',
      subtitle: 'Community Learning',
      description: 'Clubes de conversación en vivo, foros de debate y conexión con estudiantes internacionales para practicar inglés real.',
      icon: <Users className="w-12 h-12" />,
      gradient: 'from-blue-500 to-purple-500',
      stats: [
        { label: 'Clubes', value: 5, icon: <Calendar className="w-5 h-5" /> },
        { label: 'Miembros', value: 45, icon: <Users className="w-5 h-5" /> },
        { label: 'Inscritos', value: dbData?.stats?.social_clubs_joined || 0, icon: <Award className="w-5 h-5" /> }
      ],
      href: '/metodologias-innovadoras/social'
    },
    {
      id: 'ai-tutor',
      title: 'IA Conversacional 24/7',
      subtitle: 'AI Tutors Always Available',
      description: 'Practica conversación con tutores de IA especializados en cualquier momento. Feedback instantáneo y personalizado.',
      icon: <Bot className="w-12 h-12" />,
      gradient: 'from-cyan-500 to-blue-500',
      stats: [
        { label: 'Conversaciones', value: dbData?.stats?.ai_conversations_count || 0, icon: <Bot className="w-5 h-5" /> },
        { label: 'Minutos', value: dbData?.stats?.ai_total_minutes || 0, icon: <Clock className="w-5 h-5" /> },
        { label: 'Fluidez', value: `${dbData?.stats?.ai_average_fluency || 0}%`, icon: <TrendingUp className="w-5 h-5" /> }
      ],
      href: '/metodologias-innovadoras/ia-conversacion'
    },
    {
      id: 'ar',
      title: 'Realidad Aumentada',
      subtitle: 'AR Vocabulary Learning',
      description: 'Aprende vocabulario proyectando objetos en tu espacio real. Contextualiza palabras en situaciones cotidianas.',
      icon: <Glasses className="w-12 h-12" />,
      gradient: 'from-emerald-500 to-teal-500',
      stats: [
        { label: 'Palabras', value: 6, icon: <Target className="w-5 h-5" /> },
        { label: 'Aprendidas', value: dbData?.arWords?.filter((w: any) => w.learned).length || 0, icon: <Award className="w-5 h-5" /> },
        { label: 'Hoy', value: 8, icon: <Calendar className="w-5 h-5" /> }
      ],
      href: '/metodologias-innovadoras/realidad-aumentada'
    },
    {
      id: 'pronunciation',
      title: 'Feedback de Pronunciación',
      subtitle: 'Real-time Pronunciation Analysis',
      description: 'Corrección inmediata de tu pronunciación con IA. Detecta errores y sugiere mejoras al instante.',
      icon: <Mic className="w-12 h-12" />,
      gradient: 'from-indigo-500 to-purple-500',
      stats: [
        { label: 'Promedio', value: `${dbData?.stats?.pronunciation_average_score || 0}%`, icon: <TrendingUp className="w-5 h-5" /> },
        { label: 'Prácticas', value: dbData?.stats?.pronunciation_practices_count || 0, icon: <Mic className="w-5 h-5" /> },
        { label: 'Mejoradas', value: 23, icon: <Award className="w-5 h-5" /> }
      ],
      href: '/metodologias-innovadoras/pronunciacion'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6 py-12">
        {/* Hero Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 px-6 py-2 rounded-full mb-6">
            <span className="text-2xl">🚀</span>
            <span className="font-bold text-purple-700">Nueva Generación de Aprendizaje</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Metodologías Innovadoras
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Olvídate de los exámenes tradicionales. Aprende inglés con tecnología de vanguardia: 
            proyectos reales, IA, gamificación, realidad aumentada y comunidad global.
          </p>

          {/* Key Benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { icon: '⚡', text: 'Resultados más rápidos' },
              { icon: '🎯', text: 'Aprendizaje práctico' },
              { icon: '🌟', text: 'Motivación alta' },
              { icon: '🤖', text: 'Tecnología IA' },
              { icon: '🌍', text: 'Comunidad global' }
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200"
              >
                <span className="text-xl">{benefit.icon}</span>
                <span className="text-sm font-semibold text-gray-700">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Methodologies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {methodologies.map((method) => (
            <div
              key={method.id}
              onMouseEnter={() => setHoveredCard(method.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => router.push(method.href)}
              className={`group bg-white rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300 ${
                hoveredCard === method.id
                  ? 'border-transparent shadow-2xl scale-105'
                  : 'border-gray-200 hover:border-gray-300 shadow-lg'
              }`}
            >
              {/* Header with Gradient */}
              <div className={`bg-gradient-to-r ${method.gradient} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-white/20 backdrop-blur-sm rounded-xl">
                    {method.icon}
                  </div>
                  <span className="text-3xl">→</span>
                </div>
                <h3 className="text-2xl font-bold mb-1">{method.title}</h3>
                <p className="text-sm opacity-90">{method.subtitle}</p>
              </div>

              {/* Body */}
              <div className="p-6">
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {method.stats.map((stat, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-3 text-center"
                    >
                      <div className="flex justify-center text-gray-400 mb-1">
                        {stat.icon}
                      </div>
                      <div className="text-lg font-bold text-gray-900">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button
                  className={`w-full bg-gradient-to-r ${method.gradient} text-white py-3 rounded-xl font-bold transition-all group-hover:shadow-lg`}
                >
                  Explorar Ahora
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 rounded-2xl p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            ¿Listo para Revolucionar tu Aprendizaje?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de estudiantes que ya están aprendiendo inglés de forma más efectiva y divertida
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-lg transition-all">
              Comenzar Ahora
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/30 transition-all border-2 border-white/50">
              Ver Demo
            </button>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-16 text-center">
          <p className="text-gray-500 text-sm">
            💡 <strong>Tip:</strong> Estas metodologías se integran perfectamente con nuestros cursos tradicionales. 
            Combínalas para obtener los mejores resultados.
          </p>
        </div>
      </div>
    </div>
  )
}
