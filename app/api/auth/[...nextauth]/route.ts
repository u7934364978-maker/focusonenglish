// ============================================
// NEXTAUTH API ROUTE
// Handler para todas las rutas de autenticación
// ============================================

import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

// REMOVED: export const runtime = 'edge';
// NextAuth requires Node.js runtime for crypto and bcrypt modules
// Cloudflare Pages will use Node.js compatibility mode

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
