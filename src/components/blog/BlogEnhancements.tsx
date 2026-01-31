'use client';

import { useEffect, useState } from 'react';

export function BlogEnhancements() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate reading progress
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      const scrolled = window.scrollY;
      
      // Progress calculation considering footer/bottom space
      const progress = (scrolled / (fullHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(progress, 100));

      // Show/hide scroll to top button
      setShowScrollTop(scrolled > 600);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {/* Reading Progress Bar - Themed to Coral */}
      <div
        className="fixed top-0 left-0 h-1.5 bg-gradient-to-r from-coral-500 to-peach-500 z-[9999] transition-all duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
        aria-valuemin={0}
        aria-valuemax={100}
      />

      {/* Scroll to Top Button - Modern Floating Circle */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 w-14 h-14 bg-white text-coral-600 rounded-full shadow-coral-lg 
          border-2 border-coral-100 flex items-center justify-center transition-all duration-300 z-50
          hover:bg-coral-600 hover:text-white hover:-translate-y-2
          ${showScrollTop ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}
        `}
        aria-label="Volver arriba"
        type="button"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
