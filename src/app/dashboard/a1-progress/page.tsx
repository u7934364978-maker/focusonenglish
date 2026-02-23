'use client';

import A1ProgressDashboard from '@/components/a1/A1ProgressDashboard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function A1ProgressPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-coral-500 hover:text-coral-600 font-bold mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Dashboard
          </Link>
          <h1 className="text-4xl font-black text-slate-900 mb-2">A1 Course Progress</h1>
          <p className="text-slate-600">Track your learning journey through all 60 A1 units</p>
        </div>

        {/* Dashboard */}
        <A1ProgressDashboard />
      </div>
    </div>
  );
}
