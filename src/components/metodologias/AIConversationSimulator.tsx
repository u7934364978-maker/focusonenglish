'use client'

import { useState, useRef, useEffect } from 'react'
import { Bot, Mic, Send, Volume2, StopCircle, RotateCcw, Settings, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useMethodologyProgress } from '@/hooks/use-methodology-progress'

interface Message {
  id: string
  type: 'user' | 'ai'
  text: string
  timestamp: Date
  audioUrl?: string
  feedback?: {
    original: string
    correction: string
    explanation: string
  }
}

interface AITutor {
  id: string
  name: string
  avatar: string
  specialty: string
  voice: string
  voiceId: string
  personality: string
  difficulty: string
}

const aiTutors: AITutor[] = [
  {
    id: 'tutor1',
    name: 'Emma',
    avatar: '👩‍🏫',
    specialty: 'Business English',
    voice: 'Female (US)',
    voiceId: 'EXAVITQu4vr4xnSDxMaL',
    personality: 'Professional & Friendly',
    difficulty: 'Intermediate'
  },
  {
    id: 'tutor2',
    name: 'James',
    avatar: '👨‍💼',
    specialty: 'Conversational English',
    voice: 'Male (UK)',
    voiceId: 'cgSgspJ2msm6clMCkdW9',
    personality: 'Patient & Encouraging',
    difficulty: 'Beginner'
  },
  {
    id: 'tutor3',
    name: 'Sofia',
    avatar: '👩‍🎓',
    specialty: 'IELTS Preparation',
    voice: 'Female (UK)',
    voiceId: '21m00Tcm4TlvDq8ikWAM',
    personality: 'Academic & Structured',
    difficulty: 'Advanced'
  },
  {
    id: 'tutor4',
    name: 'Michael',
    avatar: '👨‍💻',
    specialty: 'Tech & Innovation',
    voice: 'Male (US)',
    voiceId: 'ErXwobaYiN019PkySvjV',
    personality: 'Casual & Modern',
    difficulty: 'Intermediate'
  }
]

const conversationScenarios = [
  { id: 's1', title: 'Job Interview', icon: '💼', difficulty: 'Intermediate' },
  { id: 's2', title: 'Restaurant Ordering', icon: '🍽️', difficulty: 'Beginner' },
  { id: 's3', title: 'Business Presentation', icon: '📊', difficulty: 'Advanced' },
  { id: 's4', title: 'Travel Assistance', icon: '✈️', difficulty: 'Beginner' },
  { id: 's5', title: 'Negotiation Meeting', icon: '🤝', difficulty: 'Advanced' },
  { id: 's6', title: 'Casual Small Talk', icon: '☕', difficulty: 'Beginner' },
]

export default function AIConversationSimulator() {
  const router = useRouter()
  const { updateMethodologyStats, updateXP } = useMethodologyProgress()
  const [selectedTutor, setSelectedTutor] = useState<AITutor>(aiTutors[0])
  const [selectedScenario, setSelectedScenario] = useState(conversationScenarios[0])
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isRecording, setIsRecording] = useState(false)
  const [isAISpeaking, setIsAISpeaking] = useState(false)
  const [isTTSLoading, setIsTTSLoading] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [conversationStarted, setConversationStarted] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [voiceSettings, setVoiceSettings] = useState({
    stability: 0.4,
    similarityBoost: 0.75
  })
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const playAudio = async (text: string, voiceId: string, existingUrl?: string) => {
    try {
      let url = existingUrl

      if (!url) {
        setIsTTSLoading(true)
        const response = await fetch('/api/ai-tutor/tts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            text, 
            voiceId,
            stability: voiceSettings.stability,
            similarityBoost: voiceSettings.similarityBoost
          })
        })

        if (!response.ok) throw new Error('TTS failed')

        const blob = await response.blob()
        url = URL.createObjectURL(blob)
        setIsTTSLoading(false)
      }
      
      setIsAISpeaking(true)
      if (audioRef.current) {
        audioRef.current.src = url
        audioRef.current.play()
        audioRef.current.onended = () => {
          setIsAISpeaking(false)
        }
      }
      return url
    } catch (error) {
      console.error('Audio playback error:', error)
      setError('Error al reproducir audio. Por favor, intenta de nuevo.')
      setIsAISpeaking(false)
      setIsTTSLoading(false)
      return undefined
    }
  }

  const startConversation = async () => {
    setConversationStarted(true)
    const welcomeText = `Hi! I'm ${selectedTutor.name}, your AI English tutor. I'm here to help you practice ${selectedScenario.title}. Shall we begin?`
    
    // Persistir inicio de conversación
    await updateMethodologyStats({ ai_conversations_count: 1 })
    await updateXP(10, 'ai_conversation_start')

    setIsLoading(true)
    const audioUrl = await playAudio(welcomeText, selectedTutor.voiceId)
    setIsLoading(false)

    const welcomeMessage: Message = {
      id: Date.now().toString(),
      type: 'ai',
      text: welcomeText,
      timestamp: new Date(),
      audioUrl
    }
    setMessages([welcomeMessage])
  }

  const sendMessage = async (textOverride?: string) => {
    const textToSend = textOverride || inputText
    if (!textToSend.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      text: textToSend,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsLoading(true)
    setError(null)

    try {
      const chatResponse = await fetch('/api/ai-tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          tutorId: selectedTutor.id,
          messages: [...messages, userMessage].map(m => ({
            role: m.type === 'user' ? 'user' : 'assistant',
            content: m.text
          })),
          level: 'Intermediate',
          scenario: selectedScenario.title
        })
      })

      const data = await chatResponse.json()
      
      if (data.success) {
        // Otorgar XP por mensaje enviado
        await updateXP(5, 'ai_message_sent')
        
        // Update user message with feedback if any
        if (data.feedback) {
          setMessages(prev => prev.map(m => 
            m.id === userMessage.id ? { ...m, feedback: data.feedback } : m
          ))
        }

        const audioUrl = await playAudio(data.reply, selectedTutor.voiceId)

        const aiMessage: Message = {
          id: (Date.now() + 1).toString(),
          type: 'ai',
          text: data.reply,
          timestamp: new Date(),
          audioUrl
        }
        setMessages(prev => [...prev, aiMessage])
      } else {
        throw new Error(data.error || 'Chat failed')
      }
    } catch (error) {
      console.error('Chat error:', error)
      setError('Lo siento, hubo un problema con la conexión. ¿Podrías intentar de nuevo?')
    } finally {
      setIsLoading(false)
    }
  }

  const recognitionRef = useRef<any>(null)
  const sendMessageRef = useRef(sendMessage)

  useEffect(() => {
    sendMessageRef.current = sendMessage
  }, [sendMessage])

  useEffect(() => {
    if (typeof window !== 'undefined' && ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      const recognition = new SpeechRecognition()
      recognition.continuous = false
      recognition.interimResults = false
      recognition.lang = 'en-US'

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        sendMessageRef.current(transcript)
        setIsRecording(false)
      }

      recognition.onerror = (event: any) => {
        if (event.error !== 'aborted') {
          console.error('Speech recognition error:', event.error)
        }
        setIsRecording(false)
      }

      recognition.onend = () => {
        setIsRecording(false)
      }

      recognitionRef.current = recognition
    }
  }, [])

  const toggleRecording = () => {
    if (!recognitionRef.current) return

    if (isRecording) {
      recognitionRef.current.stop()
    } else {
      try {
        setIsRecording(true)
        recognitionRef.current.start()
      } catch (error) {
        console.error('Start recording error:', error)
        setIsRecording(false)
      }
    }
  }

  const playAIVoice = (message: Message) => {
    playAudio(message.text, selectedTutor.voiceId, message.audioUrl)
  }

  const resetConversation = () => {
    setMessages([])
    setConversationStarted(false)
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.src = ''
    }
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <button 
        onClick={() => router.push('/metodologias-innovadoras')}
        className="flex items-center gap-2 text-gray-500 hover:text-cyan-600 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
        Volver a Metodologías
      </button>

      <audio ref={audioRef} hidden />
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          IA Conversacional 24/7
        </h1>
        <p className="text-gray-600 text-lg">
          Practica conversación con tutores de IA en cualquier momento y lugar
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar - Tutors & Scenarios */}
        <div className="lg:col-span-1 space-y-6">
          {/* AI Tutors */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <Bot className="w-6 h-6 text-cyan-600" />
              Tutores IA
            </h3>
            <div className="space-y-3">
              {aiTutors.map(tutor => (
                <div
                  key={tutor.id}
                  onClick={() => setSelectedTutor(tutor)}
                  className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedTutor.id === tutor.id
                      ? 'border-cyan-500 bg-cyan-50'
                      : 'border-gray-200 hover:border-cyan-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-3xl">{tutor.avatar}</span>
                    <div>
                      <h4 className="font-bold text-gray-900">{tutor.name}</h4>
                      <p className="text-xs text-gray-600">{tutor.voice}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-700 mb-1">{tutor.specialty}</p>
                  <div className="flex gap-2">
                    <span className="text-xs bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full">
                      {tutor.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Scenarios */}
          <div className="bg-white border-2 border-gray-200 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Escenarios</h3>
            <div className="space-y-2">
              {conversationScenarios.map(scenario => (
                <div
                  key={scenario.id}
                  onClick={() => setSelectedScenario(scenario)}
                  className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                    selectedScenario.id === scenario.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-blue-300'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{scenario.icon}</span>
                    <div className="flex-1">
                      <p className="font-semibold text-gray-900 text-sm">{scenario.title}</p>
                      <p className="text-xs text-gray-600">{scenario.difficulty}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Chat Area */}
        <div className="lg:col-span-2">
          <div className="bg-white border-2 border-gray-200 rounded-xl h-[700px] flex flex-col">
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-t-xl flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`relative ${isAISpeaking ? 'scale-110 transition-transform duration-500' : ''}`}>
                  <span className="text-4xl">{selectedTutor.avatar}</span>
                  {(isAISpeaking || isLoading || isTTSLoading) && (
                    <span className="absolute -bottom-1 -right-1 flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-white"></span>
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-bold text-lg">{selectedTutor.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-sm opacity-90">{selectedScenario.title}</p>
                    {isLoading && <span className="text-xs italic bg-white/20 px-2 py-0.5 rounded-full animate-pulse">Thinking...</span>}
                    {isTTSLoading && <span className="text-xs italic bg-white/20 px-2 py-0.5 rounded-full animate-pulse">Preparing audio...</span>}
                    {isAISpeaking && <span className="text-xs italic bg-white/20 px-2 py-0.5 rounded-full animate-pulse">Speaking...</span>}
                    {isRecording && <span className="text-xs italic bg-red-400 px-2 py-0.5 rounded-full animate-pulse">Listening...</span>}
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={resetConversation}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all"
                  title="Reset"
                >
                  <RotateCcw className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setShowSettings(!showSettings)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-all"
                  title="Settings"
                >
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-6 bg-gray-50 relative">
              {error && (
                <div className="absolute inset-x-0 top-0 z-20 bg-red-50 border-b border-red-200 p-3 flex items-center justify-between animate-in slide-in-from-top">
                  <div className="flex items-center gap-2 text-red-700 text-sm">
                    <StopCircle className="w-4 h-4" />
                    <span>{error}</span>
                  </div>
                  <button 
                    onClick={() => setError(null)}
                    className="text-red-500 hover:text-red-700"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              )}
              {showSettings && (
                <div className="absolute inset-x-0 top-0 z-10 bg-white border-b-2 border-gray-200 p-6 shadow-xl animate-in slide-in-from-top">
                  <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Settings className="w-5 h-5 text-cyan-600" />
                    Voice Configuration (ElevenLabs)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-semibold text-gray-700">Stability</label>
                        <span className="text-xs text-cyan-600 font-bold">{voiceSettings.stability}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={voiceSettings.stability}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, stability: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                      />
                      <p className="text-[10px] text-gray-500">More stability makes the voice consistent but can sound robotic.</p>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <label className="text-sm font-semibold text-gray-700">Similarity Boost</label>
                        <span className="text-xs text-cyan-600 font-bold">{voiceSettings.similarityBoost}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={voiceSettings.similarityBoost}
                        onChange={(e) => setVoiceSettings(prev => ({ ...prev, similarityBoost: parseFloat(e.target.value) }))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-cyan-600"
                      />
                      <p className="text-[10px] text-gray-500">Higher values follow the original voice more closely.</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setShowSettings(false)}
                    className="mt-6 w-full py-2 bg-gray-100 text-gray-700 rounded-lg font-bold hover:bg-gray-200 transition-all"
                  >
                    Close Settings
                  </button>
                </div>
              )}

              {!conversationStarted ? (
                <div className="h-full flex items-center justify-center">
                  <div className="text-center">
                    <span className="text-6xl mb-4 block">{selectedTutor.avatar}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Ready to Practice?
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Start a conversation with {selectedTutor.name} about {selectedScenario.title}
                    </p>
                    <button
                      onClick={startConversation}
                      className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-xl font-bold hover:shadow-lg transition-all"
                    >
                      Start Conversation
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {messages.map(message => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[75%] p-4 rounded-2xl ${
                          message.type === 'user'
                            ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white'
                            : 'bg-white border-2 border-gray-200 text-gray-900'
                        }`}
                      >
                        <div className="flex items-start gap-2">
                          {message.type === 'ai' && (
                            <span className="text-2xl">{selectedTutor.avatar}</span>
                          )}
                          <div className="flex-1">
                            <p className="text-sm mb-1">{message.text}</p>
                            <p className={`text-xs ${message.type === 'user' ? 'text-white/70' : 'text-gray-500'}`}>
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                          {message.type === 'ai' && (
                            <button
                              onClick={() => playAIVoice(message)}
                              className="p-1 hover:bg-gray-100 rounded transition-all"
                            >
                              <Volume2 className={`w-4 h-4 ${isAISpeaking ? 'text-cyan-600 animate-pulse' : 'text-gray-600'}`} />
                            </button>
                          )}
                        </div>
                        
                        {/* Feedback Area */}
                        {message.type === 'user' && message.feedback && (
                          <div className="mt-3 p-4 bg-white rounded-xl shadow-sm border border-cyan-100 text-gray-900">
                            <div className="flex items-center gap-2 mb-2 text-cyan-600">
                              <Bot className="w-4 h-4" />
                              <span className="text-xs font-bold uppercase tracking-wider">Sugerencia del Tutor</span>
                            </div>
                            <div className="space-y-3">
                              <div>
                                <p className="text-[10px] text-gray-400 uppercase font-bold">Dijiste:</p>
                                <p className="text-sm text-gray-600 line-through decoration-red-300">{message.feedback.original}</p>
                              </div>
                              <div>
                                <p className="text-[10px] text-cyan-500 uppercase font-bold">Mejor así:</p>
                                <p className="text-sm font-semibold text-gray-900 bg-cyan-50 p-2 rounded-lg border border-cyan-100">
                                  {message.feedback.correction}
                                </p>
                              </div>
                              <div className="pt-2 border-t border-gray-100">
                                <p className="text-xs text-gray-500 italic">
                                  <span className="font-bold">Por qué: </span>
                                  {message.feedback.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-white border-2 border-gray-200 p-4 rounded-2xl flex items-center gap-2">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.2s]" />
                          <div className="w-2 h-2 bg-cyan-500 rounded-full animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input Area */}
            {conversationStarted && (
              <div className="p-4 border-t-2 border-gray-200 bg-white rounded-b-xl">
                <div className="flex gap-2">
                  <button
                    onClick={toggleRecording}
                    className={`p-3 rounded-xl font-bold transition-all ${
                      isRecording
                        ? 'bg-red-500 text-white animate-pulse'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {isRecording ? <StopCircle className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                  </button>
                  
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                    placeholder="Type your message or use voice..."
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-cyan-500 focus:outline-none"
                    disabled={isRecording}
                  />
                  
                  <button
                    onClick={() => sendMessage()}
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-lg transition-all disabled:opacity-50"
                    disabled={!inputText.trim()}
                  >
                    <Send className="w-6 h-6" />
                  </button>
                </div>
                
                {isRecording && (
                  <div className="mt-2 flex items-center justify-center gap-1">
                    <div className="w-1 h-4 bg-red-500 animate-[bounce_1s_infinite]" />
                    <div className="w-1 h-6 bg-red-500 animate-[bounce_1s_infinite_0.1s]" />
                    <div className="w-1 h-8 bg-red-500 animate-[bounce_1s_infinite_0.2s]" />
                    <div className="w-1 h-6 bg-red-500 animate-[bounce_1s_infinite_0.3s]" />
                    <div className="w-1 h-4 bg-red-500 animate-[bounce_1s_infinite_0.4s]" />
                    <span className="ml-2 text-red-500 font-semibold text-sm">Escuchando...</span>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
