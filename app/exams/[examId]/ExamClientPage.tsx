"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ExamViewer from "@/components/exam/ExamViewer";
import Certificate from "@/components/certification/Certificate";
import type { Exam, ExamResult } from "@/components/exam/types";

export default function ExamClientPage({ exam }: { exam: Exam }) {
  const router = useRouter();
  const [result, setResult] = useState<ExamResult | null>(null);
  const [showCertificate, setShowCertificate] = useState(false);

  const handleComplete = (examResult: ExamResult) => {
    setResult(examResult);
    if (examResult.passed) {
      // In a real app, we'd save this to a DB and get a real certificate ID
    }
  };

  const handleExit = () => {
    router.back();
  };

  if (result?.passed && showCertificate) {
    return (
      <div className="min-h-screen bg-slate-50 py-12">
        <div className="mx-auto max-w-4xl text-center mb-8">
          <h1 className="text-3xl font-black text-slate-900">Your Official Certificate</h1>
          <p className="text-slate-600">You have successfully mastered the {exam.level || 'B2'} proficiency level.</p>
        </div>
        <Certificate 
          userName="Student Name" // This would come from auth
          courseName={exam.title}
          level={exam.id.split('-')[2]?.toUpperCase() || "B2"}
          date={new Date().toLocaleDateString()}
          certificateId={`FE-${Math.random().toString(36).substr(2, 9).toUpperCase()}`}
          score={result.score}
        />
        <div className="mt-8 text-center">
          <button 
            onClick={() => setShowCertificate(false)}
            className="text-sm font-bold text-slate-500 hover:text-slate-900 transition underline underline-offset-4"
          >
            Back to Exam Results
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <ExamViewer 
        exam={exam} 
        onComplete={(res) => {
          handleComplete(res);
          // If we want to show a button in ExamViewer to see certificate
          // But for now let's just wait for user to click something.
          // Actually, let's update ExamViewer to show a "View Certificate" button if passed.
        }} 
        onExit={handleExit} 
      />
      {result?.passed && !showCertificate && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
          <button 
            onClick={() => setShowCertificate(true)}
            className="rounded-2xl bg-amber-600 px-8 py-4 text-base font-black text-white shadow-2xl shadow-amber-200 hover:bg-amber-700 transition transform hover:scale-105 active:scale-95"
          >
            ✨ Claim My Certificate
          </button>
        </div>
      )}
    </div>
  );
}
