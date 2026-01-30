'use client';

import { useRouter } from 'next/navigation';
import { BookOpen, Award, TrendingUp, Target, Star, Trophy } from 'lucide-react';

import { CEFRLevel } from '@/lib/exercise-types';

interface LevelInfo {
  id: CEFRLevel;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  bgGradient: string;
  icon: React.ReactNode;
  skills: string[];
  examInfo: string;
}

const CEFR_LEVELS: LevelInfo[] = [
  {
    id: 'A1',
    title: 'A1 - Beginner',
    subtitle: 'Cambridge Key (KET) - Basic User',
    description: 'Can understand and use familiar everyday expressions and very basic phrases. Can introduce themselves and ask simple questions.',
    color: 'from-green-500 to-emerald-600',
    bgGradient: 'from-green-50 to-emerald-50',
    icon: <BookOpen className="w-8 h-8" />,
    skills: [
      'Simple greetings and introductions',
      'Basic personal information',
      'Common everyday situations',
      'Simple questions and answers'
    ],
    examInfo: 'Cambridge Key English Test (KET)'
  },
  {
    id: 'A2',
    title: 'A2 - Elementary',
    subtitle: 'Cambridge Key (KET) - Basic User',
    description: 'Can communicate in simple routine tasks requiring simple exchange of information on familiar topics.',
    color: 'from-blue-500 to-cyan-600',
    bgGradient: 'from-blue-50 to-cyan-50',
    icon: <Target className="w-8 h-8" />,
    skills: [
      'Simple conversations on familiar topics',
      'Describe immediate environment',
      'Express immediate needs',
      'Simple written messages'
    ],
    examInfo: 'Cambridge Key English Test (KET)'
  },
  {
    id: 'B1',
    title: 'B1 - Intermediate',
    subtitle: 'Cambridge Preliminary (PET) - Independent User',
    description: 'Can deal with most situations likely to arise while traveling. Can produce simple connected text on familiar topics.',
    color: 'from-yellow-500 to-orange-600',
    bgGradient: 'from-yellow-50 to-orange-50',
    icon: <TrendingUp className="w-8 h-8" />,
    skills: [
      'Understand main points of clear standard input',
      'Deal with travel situations',
      'Describe experiences and events',
      'Give reasons and explanations'
    ],
    examInfo: 'Cambridge Preliminary English Test (PET)'
  },
  {
    id: 'B2',
    title: 'B2 - Upper Intermediate',
    subtitle: 'Cambridge First (FCE) - Independent User',
    description: 'Can interact with fluency and spontaneity. Can produce clear, detailed text on a wide range of subjects.',
    color: 'from-orange-500 to-red-600',
    bgGradient: 'from-orange-50 to-red-50',
    icon: <Award className="w-8 h-8" />,
    skills: [
      'Understand complex texts',
      'Interact with native speakers naturally',
      'Produce detailed text on various topics',
      'Explain viewpoints on topical issues'
    ],
    examInfo: 'Cambridge First Certificate (FCE)'
  },
  {
    id: 'C1',
    title: 'C1 - Advanced',
    subtitle: 'Cambridge Advanced (CAE) - Proficient User',
    description: 'Can express ideas fluently and spontaneously. Can use language flexibly for social, academic and professional purposes.',
    color: 'from-purple-500 to-indigo-600',
    bgGradient: 'from-purple-50 to-indigo-50',
    icon: <Star className="w-8 h-8" />,
    skills: [
      'Understand demanding, longer texts',
      'Express ideas fluently and spontaneously',
      'Use language flexibly and effectively',
      'Produce well-structured, detailed text'
    ],
    examInfo: 'Cambridge Advanced (CAE)'
  },
  {
    id: 'C2',
    title: 'C2 - Proficiency',
    subtitle: 'Cambridge Proficiency (CPE) - Proficient User',
    description: 'Can understand virtually everything heard or read. Can express themselves spontaneously, fluently and precisely.',
    color: 'from-pink-500 to-rose-600',
    bgGradient: 'from-pink-50 to-rose-50',
    icon: <Trophy className="w-8 h-8" />,
    skills: [
      'Understand virtually everything',
      'Express nuanced meanings',
      'Summarize information from various sources',
      'Master-level fluency and precision'
    ],
    examInfo: 'Cambridge Proficiency (CPE)'
  }
];

export default function AulaPage() {
  const router = useRouter();

  const handleLevelSelect = (levelId: CEFRLevel) => {
    router.push(`/aula/${levelId.toLowerCase()}`);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-5xl font-black text-gray-900 mb-3">
              🎓 English Learning Classroom
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose your CEFR level and start practicing with Cambridge-aligned exercises
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span>Basic User</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span>Independent User</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>Proficient User</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Levels Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CEFR_LEVELS.map((level) => (
            <button
              key={level.id}
              onClick={() => handleLevelSelect(level.id)}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
            >
              {/* Color Header */}
              <div className={`bg-gradient-to-r ${level.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3">
                    {level.icon}
                  </div>
                  <div className="text-4xl font-black opacity-20">
                    {level.id}
                  </div>
                </div>
                <h2 className="text-2xl font-black mb-1">{level.title}</h2>
                <p className="text-sm text-white/90 font-medium">{level.subtitle}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-gray-700 mb-4 leading-relaxed">
                  {level.description}
                </p>

                {/* Skills */}
                <div className="space-y-2 mb-4">
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-wide">
                    Key Skills:
                  </p>
                  <ul className="space-y-1">
                    {level.skills.map((skill, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-orange-500 mt-0.5">✓</span>
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exam Info */}
                <div className={`bg-gradient-to-r ${level.bgGradient} rounded-lg p-3 border border-gray-200`}>
                  <p className="text-xs font-bold text-gray-700 mb-1">Cambridge Exam:</p>
                  <p className="text-sm font-semibold text-gray-900">{level.examInfo}</p>
                </div>

                {/* Call to Action */}
                <div className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-gray-500 group-hover:text-orange-600 transition-colors">
                  <span>Start Practicing</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${level.color} opacity-0 group-hover:opacity-5 transition-opacity pointer-events-none`}></div>
            </button>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <h3 className="text-2xl font-black text-gray-900 mb-4 text-center">
            📚 About CEFR Levels
          </h3>
          <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
            The Common European Framework of Reference for Languages (CEFR) is an international standard 
            for describing language ability. Our exercises are aligned with Cambridge English exams, 
            providing you with authentic practice materials that match official exam standards.
          </p>
        </div>
      </div>
    </main>
  );
}
