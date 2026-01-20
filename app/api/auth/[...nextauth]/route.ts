// ============================================
// NEXTAUTH API ROUTE
// Handler para todas las rutas de autenticación
// ============================================

import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth';

export const runtime = 'nodejs';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
