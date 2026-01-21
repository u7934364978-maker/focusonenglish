/**
 * DEPRECATED - Redirige a /api/auth/signup
 * Mantiene compatibilidad con código legacy
 */

import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/auth/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const data = await response.json();
  return NextResponse.json(data, { status: response.status });
}
