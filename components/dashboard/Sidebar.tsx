'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className = '' }: SidebarProps) {
  const pathname = usePathname();
  
  const navItems = [
    { icon: '🏠', label: 'Home', href: '/dashboard', color: 'from-[#FF6B6B] to-[#FF8E53]' },
    { icon: '📚', label: 'Courses', href: '/curso-b2', color: 'from-[#FFA06B] to-[#FFB89C]' },
    { icon: '🎯', label: 'Practice', href: '/practica', color: 'from-[#34D399] to-[#10B981]' },
    { icon: '👥', label: 'Community', href: '/community', color: 'from-[#60A5FA] to-[#3B82F6]' },
    { icon: '👤', label: 'Profile', href: '/profile', color: 'from-[#A78BFA] to-[#8B5CF6]' },
  ];

  return (
    <aside className={`fixed left-0 top-0 h-full w-20 bg-white border-r-2 border-[#FFE8D9] z-40 flex flex-col items-center py-6 gap-6 shadow-lg ${className}`}>
      {/* Logo */}
      <Link href="/dashboard" className="mb-4">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#FF6B6B] to-[#FF8E53] flex items-center justify-center text-white font-black text-2xl shadow-coral transform hover:scale-110 transition-transform">
          F
        </div>
      </Link>

      {/* Navigation Items */}
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="group relative"
              title={item.label}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl transition-all duration-300 ${
                isActive 
                  ? `bg-gradient-to-br ${item.color} shadow-coral transform scale-110` 
                  : 'bg-gray-50 hover:bg-gradient-to-br hover:from-[#FFE8D9] hover:to-[#FFF4ED] hover:shadow-sm'
              }`}>
                {item.icon}
              </div>
              
              {/* Tooltip */}
              <div className="absolute left-full ml-4 px-3 py-2 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity whitespace-nowrap">
                {item.label}
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-900"></div>
              </div>
            </Link>
          );
        })}
      </nav>

      {/* Settings at Bottom */}
      <div className="mt-auto">
        <button className="w-12 h-12 rounded-xl bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-xl transition-all">
          ⚙️
        </button>
      </div>
    </aside>
  );
}
