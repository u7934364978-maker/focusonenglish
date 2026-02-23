'use client';

import { Download } from 'lucide-react';

export function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 bg-coral-600 text-white rounded-lg font-bold text-sm hover:bg-coral-700 transition-colors print:hidden"
    >
      <Download className="w-4 h-4" />
      Download PDF
    </button>
  );
}
