'use client';

import { useState } from 'react';
import { Unit, Lesson } from '@/lib/duolingo/units';
import { Lock, Star, Trophy, Play, Check, BookOpen } from 'lucide-react';

interface UnitsMapProps {
  units: Unit[];
  currentUnitId: string;
  onLessonClick: (unitId: string, lessonId: string) => void;
}

export default function UnitsMap({ units, currentUnitId, onLessonClick }: UnitsMapProps) {
  const [expandedUnit, setExpandedUnit] = useState<string | null>(currentUnitId);

  return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-black text-gray-900 mb-2">
          Learn English
        </h1>
        <p className="text-gray-600">
          Follow the path and unlock new skills
        </p>
      </div>

      {/* Units Path */}
      <div className="relative">
        {/* Connecting Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 -translate-x-1/2 -z-10" />

        {units.map((unit, index) => (
          <div key={unit.id} className="mb-8">
            {/* Unit Card */}
            <div
              className={`relative mx-auto w-full max-w-md transition-all duration-300 ${
                unit.status === 'locked' ? 'opacity-60' : ''
              }`}
            >
              {/* Unit Header Button */}
              <button
                onClick={() => setExpandedUnit(expandedUnit === unit.id ? null : unit.id)}
                disabled={unit.status === 'locked'}
                className={`w-full rounded-2xl p-6 shadow-lg transition-all duration-300 transform hover:scale-105 disabled:hover:scale-100 disabled:cursor-not-allowed ${
                  unit.status === 'locked'
                    ? 'bg-gray-300'
                    : `bg-gradient-to-br from-${unit.color} to-${unit.color}/80`
                }`}
                style={{
                  background: unit.status === 'locked' 
                    ? undefined 
                    : `linear-gradient(135deg, ${unit.color} 0%, ${unit.color}dd 100%)`
                }}
              >
                <div className="flex items-center gap-4">
                  {/* Unit Icon */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-full flex items-center justify-center text-4xl shadow-md">
                    {unit.status === 'locked' ? <Lock className="w-8 h-8 text-gray-500" /> : unit.icon}
                  </div>

                  {/* Unit Info */}
                  <div className="flex-1 text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-xl font-black text-white">
                        Unit {unit.order}
                      </h3>
                      {unit.status === 'completed' && (
                        <Check className="w-5 h-5 text-white" />
                      )}
                    </div>
                    <h4 className="text-lg font-bold text-white/90 mb-1">
                      {unit.title}
                    </h4>
                    <p className="text-sm text-white/80">
                      {unit.description}
                    </p>
                    
                    {/* Progress Bar */}
                    {unit.status !== 'locked' && (
                      <div className="mt-3">
                        <div className="h-2 bg-white/30 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-white transition-all duration-500"
                            style={{ width: `${unit.completionRate}%` }}
                          />
                        </div>
                        <div className="flex justify-between items-center mt-1 text-xs text-white/90">
                          <span>{unit.earnedXP} / {unit.totalXP} XP</span>
                          <span>{unit.completionRate}%</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Trophy if completed */}
                  {unit.status === 'completed' && (
                    <Trophy className="w-8 h-8 text-yellow-300 flex-shrink-0" />
                  )}
                </div>
              </button>

              {/* Lessons List (Expanded) */}
              {expandedUnit === unit.id && unit.status !== 'locked' && (
                <div className="mt-4 space-y-2 animate-slide-in">
                  {unit.lessons.map((lesson, lessonIndex) => (
                    <LessonButton
                      key={lesson.id}
                      lesson={lesson}
                      unitColor={unit.color}
                      isLast={lessonIndex === unit.lessons.length - 1}
                      onClick={() => onLessonClick(unit.id, lesson.id)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Connector to next unit */}
            {index < units.length - 1 && (
              <div className="flex justify-center my-6">
                <div className="w-1 h-12 bg-gray-300 rounded-full" />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom spacing */}
      <div className="h-20" />
    </div>
  );
}

// Lesson Button Component
interface LessonButtonProps {
  lesson: Lesson;
  unitColor: string;
  isLast: boolean;
  onClick: () => void;
}

function LessonButton({ lesson, unitColor, isLast, onClick }: LessonButtonProps) {
  const isLocked = lesson.status === 'locked';
  const isCompleted = lesson.status === 'completed';
  
  const getLessonIcon = () => {
    if (isLocked) return <Lock className="w-5 h-5" />;
    if (isCompleted) return <Check className="w-6 h-6" />;
    
    switch (lesson.type) {
      case 'lesson':
        return <BookOpen className="w-5 h-5" />;
      case 'practice':
        return <Play className="w-5 h-5" />;
      case 'test':
        return <Trophy className="w-5 h-5" />;
      case 'story':
        return '📖';
      default:
        return <BookOpen className="w-5 h-5" />;
    }
  };

  return (
    <button
      onClick={onClick}
      disabled={isLocked}
      className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-200 ${
        isLocked
          ? 'bg-gray-200 cursor-not-allowed opacity-60'
          : isCompleted
          ? 'bg-green-100 border-2 border-green-500 hover:bg-green-200'
          : 'bg-white border-2 border-gray-300 hover:border-gray-400 hover:shadow-md'
      }`}
    >
      {/* Icon */}
      <div
        className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white ${
          isLocked
            ? 'bg-gray-400'
            : isCompleted
            ? 'bg-green-500'
            : 'bg-gradient-to-br'
        }`}
        style={
          !isLocked && !isCompleted
            ? { background: `linear-gradient(135deg, ${unitColor} 0%, ${unitColor}dd 100%)` }
            : undefined
        }
      >
        {getLessonIcon()}
      </div>

      {/* Info */}
      <div className="flex-1 text-left">
        <div className="flex items-center gap-2">
          <h4 className={`font-bold ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
            {lesson.title}
          </h4>
          {lesson.type === 'test' && !isLocked && (
            <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              TEST
            </span>
          )}
          {lesson.type === 'story' && !isLocked && (
            <span className="bg-purple-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              STORY
            </span>
          )}
        </div>
        <p className="text-sm text-gray-600">
          {lesson.description}
        </p>
        <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
          <span>⏱️ {lesson.estimatedMinutes} min</span>
          <span>💎 +{lesson.xpReward} XP</span>
          {lesson.stars > 0 && (
            <div className="flex items-center gap-0.5">
              {Array.from({ length: lesson.stars }).map((_, i) => (
                <Star key={i} className="w-3 h-3 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Completion indicator */}
      {lesson.completionRate > 0 && lesson.completionRate < 100 && (
        <div className="flex-shrink-0 w-16">
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500"
              style={{ width: `${lesson.completionRate}%` }}
            />
          </div>
        </div>
      )}
    </button>
  );
}
