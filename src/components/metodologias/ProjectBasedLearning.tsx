'use client'

import { useState } from 'react'
import { PlayCircle, CheckCircle, Trophy, Users, Mic, FileText } from 'lucide-react'

interface Project {
  id: string
  title: string
  description: string
  difficulty: 'A1-A2' | 'B1-B2' | 'C1-C2'
  duration: string
  type: 'podcast' | 'negotiation' | 'presentation' | 'debate' | 'interview'
  skills: string[]
  tasks: Task[]
  completed: boolean
}

interface Task {
  id: string
  title: string
  description: string
  completed: boolean
}

const projects: Project[] = [
  {
    id: 'podcast-startup',
    title: 'Grabar un Podcast Empresarial',
    description: 'Crea un episodio de podcast de 10 minutos sobre innovación en tu industria',
    difficulty: 'B1-B2',
    duration: '2-3 semanas',
    type: 'podcast',
    skills: ['Speaking', 'Vocabulary', 'Pronunciation', 'Content Creation'],
    completed: false,
    tasks: [
      {
        id: 'research',
        title: 'Investigación y Guion',
        description: 'Investiga el tema y escribe un guion estructurado de 5-7 minutos',
        completed: false
      },
      {
        id: 'practice',
        title: 'Práctica de Pronunciación',
        description: 'Practica tu pronunciación con herramientas de IA durante 30 min/día',
        completed: false
      },
      {
        id: 'recording',
        title: 'Grabación del Podcast',
        description: 'Graba tu podcast con introducción, desarrollo y conclusión',
        completed: false
      },
      {
        id: 'feedback',
        title: 'Revisión y Feedback',
        description: 'Obtén feedback de la comunidad y del tutor de IA',
        completed: false
      }
    ]
  },
  {
    id: 'negotiation-simulation',
    title: 'Simulación de Negociación Internacional',
    description: 'Participa en una negociación comercial simulada con estudiantes de otros países',
    difficulty: 'B1-B2',
    duration: '1-2 semanas',
    type: 'negotiation',
    skills: ['Business English', 'Negotiation', 'Cultural Awareness', 'Speaking'],
    completed: false,
    tasks: [
      {
        id: 'case-study',
        title: 'Análisis del Caso',
        description: 'Lee el caso de negociación y define tu estrategia',
        completed: false
      },
      {
        id: 'vocabulary',
        title: 'Vocabulario Especializado',
        description: 'Domina el vocabulario de negociación con flashcards gamificadas',
        completed: false
      },
      {
        id: 'roleplay',
        title: 'Role-play con IA',
        description: 'Practica la negociación con un simulador de IA',
        completed: false
      },
      {
        id: 'live-negotiation',
        title: 'Negociación en Vivo',
        description: 'Participa en la sesión de negociación con otros estudiantes',
        completed: false
      }
    ]
  },
  {
    id: 'presentation-tech',
    title: 'Presentación Técnica en Inglés',
    description: 'Presenta tu proyecto o idea de negocio ante un panel de expertos',
    difficulty: 'B1-B2',
    duration: '2 semanas',
    type: 'presentation',
    skills: ['Presentation Skills', 'Technical Vocabulary', 'Public Speaking'],
    completed: false,
    tasks: [
      {
        id: 'slides',
        title: 'Crear Presentación',
        description: 'Diseña slides profesionales en inglés (10-15 diapositivas)',
        completed: false
      },
      {
        id: 'script',
        title: 'Guion de Presentación',
        description: 'Escribe tu guion con transiciones naturales',
        completed: false
      },
      {
        id: 'practice-ai',
        title: 'Práctica con IA',
        description: 'Presenta ante la IA y recibe feedback sobre fluidez y claridad',
        completed: false
      },
      {
        id: 'live-presentation',
        title: 'Presentación Final',
        description: 'Presenta ante el grupo y responde preguntas',
        completed: false
      }
    ]
  }
]

export default function ProjectBasedLearning() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [activeProjects, setActiveProjects] = useState<Project[]>(projects)

  const toggleTaskCompletion = (projectId: string, taskId: string) => {
    setActiveProjects(prev =>
      prev.map(project =>
        project.id === projectId
          ? {
              ...project,
              tasks: project.tasks.map(task =>
                task.id === taskId
                  ? { ...task, completed: !task.completed }
                  : task
              )
            }
          : project
      )
    )
  }

  const calculateProgress = (project: Project) => {
    const completedTasks = project.tasks.filter(t => t.completed).length
    return Math.round((completedTasks / project.tasks.length) * 100)
  }

  const getProjectIcon = (type: string) => {
    switch (type) {
      case 'podcast': return <Mic className="w-6 h-6" />
      case 'negotiation': return <Users className="w-6 h-6" />
      case 'presentation': return <FileText className="w-6 h-6" />
      default: return <PlayCircle className="w-6 h-6" />
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Aprendizaje Basado en Proyectos
        </h1>
        <p className="text-gray-600 text-lg">
          Supera retos reales en lugar de exámenes tradicionales. Crea contenido auténtico y desarrolla habilidades prácticas.
        </p>
      </div>

      {/* Estadísticas Generales */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
          <div className="flex items-center gap-3 mb-2">
            <Trophy className="w-8 h-8 text-purple-600" />
            <span className="text-3xl font-bold text-purple-900">
              {activeProjects.filter(p => calculateProgress(p) === 100).length}
            </span>
          </div>
          <p className="text-purple-700 font-medium">Proyectos Completados</p>
        </div>
        
        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border border-pink-200">
          <div className="flex items-center gap-3 mb-2">
            <PlayCircle className="w-8 h-8 text-pink-600" />
            <span className="text-3xl font-bold text-pink-900">
              {activeProjects.filter(p => calculateProgress(p) > 0 && calculateProgress(p) < 100).length}
            </span>
          </div>
          <p className="text-pink-700 font-medium">En Progreso</p>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
          <div className="flex items-center gap-3 mb-2">
            <Users className="w-8 h-8 text-orange-600" />
            <span className="text-3xl font-bold text-orange-900">
              {activeProjects.length}
            </span>
          </div>
          <p className="text-orange-700 font-medium">Proyectos Disponibles</p>
        </div>
      </div>

      {/* Lista de Proyectos */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {activeProjects.map(project => {
          const progress = calculateProgress(project)
          
          return (
            <div
              key={project.id}
              className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-purple-400 transition-all cursor-pointer hover:shadow-lg"
              onClick={() => setSelectedProject(project)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
                    {getProjectIcon(project.type)}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {project.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>

              {/* Barra de Progreso */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Progreso</span>
                  <span className="font-semibold text-purple-600">{progress}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.slice(0, 3).map(skill => (
                  <span
                    key={skill}
                    className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
                {project.skills.length > 3 && (
                  <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                    +{project.skills.length - 3}
                  </span>
                )}
              </div>

              <div className="flex items-center justify-between text-sm">
                <span className="text-gray-500">⏱️ {project.duration}</span>
                <button className="text-purple-600 font-semibold hover:text-purple-700 flex items-center gap-1">
                  {progress === 100 ? 'Ver Detalles' : 'Continuar'} →
                </button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Modal de Proyecto Seleccionado */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-8" onClick={e => e.stopPropagation()}>
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-purple-100 rounded-xl text-purple-600">
                  {getProjectIcon(selectedProject.type)}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">{selectedProject.title}</h2>
                  <div className="flex gap-2 mt-2">
                    <span className="text-sm font-semibold text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                      {selectedProject.difficulty}
                    </span>
                    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                      {selectedProject.duration}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            <p className="text-gray-700 mb-6 text-lg">{selectedProject.description}</p>

            {/* Progress */}
            <div className="mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-600 font-medium">Progreso General</span>
                <span className="font-bold text-purple-600">{calculateProgress(selectedProject)}%</span>
              </div>
              <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
                  style={{ width: `${calculateProgress(selectedProject)}%` }}
                />
              </div>
            </div>

            {/* Skills */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 mb-3">Habilidades que Desarrollarás</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.skills.map(skill => (
                  <span
                    key={skill}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tasks */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4 text-xl">Tareas del Proyecto</h3>
              <div className="space-y-3">
                {selectedProject.tasks.map((task, index) => (
                  <div
                    key={task.id}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      task.completed
                        ? 'bg-green-50 border-green-300'
                        : 'bg-white border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <button
                        onClick={() => toggleTaskCompletion(selectedProject.id, task.id)}
                        className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          task.completed
                            ? 'bg-green-500 border-green-500'
                            : 'border-gray-300 hover:border-purple-500'
                        }`}
                      >
                        {task.completed && <CheckCircle className="w-4 h-4 text-white" />}
                      </button>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-sm font-bold text-purple-600">Paso {index + 1}</span>
                          <h4 className={`font-bold ${task.completed ? 'text-green-700 line-through' : 'text-gray-900'}`}>
                            {task.title}
                          </h4>
                        </div>
                        <p className="text-gray-600 text-sm">{task.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="mt-6 w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-xl font-bold hover:shadow-lg transition-all"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
