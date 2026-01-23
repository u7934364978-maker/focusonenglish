'use client';

import { useState } from 'react';
import { 
  B2ComprehensiveGenerator, 
  type B2GeneratedExercise,
  type ExerciseSkill,
  getSkillDisplayName,
  getSkillEmoji,
  getAllB2Grammar,
  getAllB2Topics,
  getAllB2Functions
} from '@/lib/b2-comprehensive-generator';
import { 
  B2_GRAMMAR,
  B2_TOPICS,
  B2_FUNCTIONS,
  type B2GrammarPoint,
  type B2Topic
} from '@/lib/b2-official-syllabus';

export default function GeneradorB2Page() {
  const [exercises, setExercises] = useState<B2GeneratedExercise[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<ExerciseSkill | 'all'>('all');
  const [selectedGrammar, setSelectedGrammar] = useState<string>('');
  const [selectedTopic, setSelectedTopic] = useState<string>('');
  const [generationMode, setGenerationMode] = useState<'random' | 'skill' | 'grammar' | 'topic'>('random');

  const skills: ExerciseSkill[] = ['grammar', 'vocabulary', 'reading', 'writing', 'listening', 'speaking'];

  const handleGenerateRandom = async () => {
    setLoading(true);
    try {
      const config = B2ComprehensiveGenerator.generateRandomConfig();
      const exercise = await B2ComprehensiveGenerator.generateExercise(config);
      setExercises(prev => [exercise, ...prev]);
    } catch (error) {
      console.error('Error generating exercise:', error);
      alert('Error al generar el ejercicio. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateBySkill = async () => {
    if (selectedSkill === 'all') {
      alert('Por favor, selecciona una skill específica');
      return;
    }
    
    setLoading(true);
    try {
      const newExercises = await B2ComprehensiveGenerator.generateBySkill(selectedSkill, 1);
      setExercises(prev => [...newExercises, ...prev]);
    } catch (error) {
      console.error('Error generating exercise:', error);
      alert('Error al generar el ejercicio. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateByGrammar = async () => {
    if (!selectedGrammar) {
      alert('Por favor, selecciona un punto gramatical');
      return;
    }
    
    setLoading(true);
    try {
      const newExercises = await B2ComprehensiveGenerator.generateByGrammar(selectedGrammar, 1);
      setExercises(prev => [...newExercises, ...prev]);
    } catch (error) {
      console.error('Error generating exercise:', error);
      alert('Error al generar el ejercicio. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerateByTopic = async () => {
    if (!selectedTopic) {
      alert('Por favor, selecciona un tema');
      return;
    }
    
    setLoading(true);
    try {
      const newExercises = await B2ComprehensiveGenerator.generateByTopic(selectedTopic, 1);
      setExercises(prev => [...newExercises, ...prev]);
    } catch (error) {
      console.error('Error generating exercise:', error);
      alert('Error al generar el ejercicio. Por favor, intenta de nuevo.');
    } finally {
      setLoading(false);
    }
  };

  const handleGenerate = () => {
    switch (generationMode) {
      case 'random':
        handleGenerateRandom();
        break;
      case 'skill':
        handleGenerateBySkill();
        break;
      case 'grammar':
        handleGenerateByGrammar();
        break;
      case 'topic':
        handleGenerateByTopic();
        break;
    }
  };

  const clearExercises = () => {
    setExercises([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            🎓 Generador Completo B2 (CEFR)
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Generador automático de ejercicios con IA cubriendo TODO el temario oficial del nivel B2
          </p>
          <p className="text-sm text-gray-500 mt-2">
            20+ puntos gramaticales • 18+ temas oficiales • 10+ funciones comunicativas
          </p>
        </div>

        {/* Controls */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold mb-6">Opciones de Generación</h2>
          
          {/* Mode Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Modo de Generación
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <button
                onClick={() => setGenerationMode('random')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  generationMode === 'random'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🎲 Aleatorio
              </button>
              <button
                onClick={() => setGenerationMode('skill')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  generationMode === 'skill'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                🎯 Por Skill
              </button>
              <button
                onClick={() => setGenerationMode('grammar')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  generationMode === 'grammar'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📝 Por Gramática
              </button>
              <button
                onClick={() => setGenerationMode('topic')}
                className={`px-4 py-3 rounded-lg font-medium transition-colors ${
                  generationMode === 'topic'
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                📚 Por Tema
              </button>
            </div>
          </div>

          {/* Conditional Selectors */}
          {generationMode === 'skill' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecciona Skill
              </label>
              <select
                value={selectedSkill}
                onChange={(e) => setSelectedSkill(e.target.value as ExerciseSkill)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">-- Selecciona una skill --</option>
                {skills.map(skill => (
                  <option key={skill} value={skill}>
                    {getSkillEmoji(skill)} {getSkillDisplayName(skill)}
                  </option>
                ))}
              </select>
            </div>
          )}

          {generationMode === 'grammar' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecciona Punto Gramatical
              </label>
              <select
                value={selectedGrammar}
                onChange={(e) => setSelectedGrammar(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Selecciona gramática --</option>
                {B2_GRAMMAR.map(grammar => (
                  <option key={grammar.id} value={grammar.id}>
                    {grammar.name} {grammar.difficulty === 'advanced' ? '⭐' : ''}
                  </option>
                ))}
              </select>
              {selectedGrammar && (
                <p className="mt-2 text-sm text-gray-600">
                  {B2_GRAMMAR.find(g => g.id === selectedGrammar)?.description}
                </p>
              )}
            </div>
          )}

          {generationMode === 'topic' && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Selecciona Tema
              </label>
              <select
                value={selectedTopic}
                onChange={(e) => setSelectedTopic(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">-- Selecciona tema --</option>
                {B2_TOPICS.map(topic => (
                  <option key={topic.id} value={topic.id}>
                    {topic.name} ({topic.category})
                  </option>
                ))}
              </select>
              {selectedTopic && (
                <p className="mt-2 text-sm text-gray-600">
                  Keywords: {B2_TOPICS.find(t => t.id === selectedTopic)?.keywords.join(', ')}
                </p>
              )}
            </div>
          )}

          {/* Generate Button */}
          <div className="flex gap-3">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Generando...
                </span>
              ) : (
                '✨ Generar Ejercicio'
              )}
            </button>
            {exercises.length > 0 && (
              <button
                onClick={clearExercises}
                className="px-6 py-3 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 transition-colors"
              >
                🗑️ Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Exercise Stats */}
        {exercises.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">📊 Estadísticas</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{exercises.length}</div>
                <div className="text-sm text-gray-600">Ejercicios Generados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">
                  {new Set(exercises.map(e => e.skill)).size}
                </div>
                <div className="text-sm text-gray-600">Skills Cubiertas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">
                  {new Set(exercises.map(e => e.topic)).size}
                </div>
                <div className="text-sm text-gray-600">Temas Diferentes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-600">
                  {exercises.reduce((acc, e) => acc + e.estimatedTime, 0)}
                </div>
                <div className="text-sm text-gray-600">Minutos Totales</div>
              </div>
            </div>
          </div>
        )}

        {/* Generated Exercises */}
        <div className="space-y-6">
          {exercises.map((exercise, index) => (
            <div key={exercise.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{getSkillEmoji(exercise.skill)}</span>
                    <h3 className="text-xl font-bold text-gray-900">
                      {getSkillDisplayName(exercise.skill)} Exercise #{exercises.length - index}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {exercise.exerciseType}
                    </span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      📚 {exercise.topic}
                    </span>
                    {exercise.grammarFocus && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">
                        📝 {exercise.grammarFocus}
                      </span>
                    )}
                    {exercise.functionFocus && (
                      <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">
                        💬 {exercise.functionFocus}
                      </span>
                    )}
                    <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium">
                      ⏱️ {exercise.estimatedTime} min
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">
                    Keywords: {exercise.topicKeywords.join(', ')}
                  </p>
                </div>
              </div>

              {/* Exercise Content */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Instrucciones:</h4>
                <p className="text-gray-700 mb-4">{exercise.instructions}</p>
                
                <details className="cursor-pointer">
                  <summary className="font-semibold text-blue-600 hover:text-blue-800">
                    Ver contenido completo del ejercicio
                  </summary>
                  <pre className="mt-4 p-4 bg-white rounded border overflow-x-auto text-xs">
                    {JSON.stringify(exercise.content, null, 2)}
                  </pre>
                </details>
              </div>

              <div className="mt-4 text-xs text-gray-500">
                Generado: {new Date(exercise.createdAt).toLocaleString('es-ES')}
              </div>
            </div>
          ))}
        </div>

        {exercises.length === 0 && !loading && (
          <div className="text-center py-16 bg-white rounded-lg shadow-lg">
            <div className="text-6xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">
              No hay ejercicios generados aún
            </h3>
            <p className="text-gray-600">
              Selecciona un modo de generación y haz clic en &quot;Generar Ejercicio&quot; para comenzar
            </p>
          </div>
        )}

        {/* Info Panel */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-4">ℹ️ Información del Sistema</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold mb-2">📝 Gramática B2</h3>
              <p className="text-sm opacity-90">{B2_GRAMMAR.length} puntos gramaticales oficiales del nivel B2</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">📚 Temas Cubiertos</h3>
              <p className="text-sm opacity-90">{B2_TOPICS.length} temas basados en el MCER</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">💬 Funciones</h3>
              <p className="text-sm opacity-90">{B2_FUNCTIONS.length} funciones comunicativas B2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
