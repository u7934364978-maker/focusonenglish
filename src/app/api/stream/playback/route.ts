import { NextRequest, NextResponse } from 'next/server';

/**
 * API Route: Get Cloudflare Stream Playback URL
 * GET /api/stream/playback?videoId=...
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('videoId');

    if (!videoId) {
      return NextResponse.json({ error: 'Missing videoId' }, { status: 400 });
    }

    // 1. Validate session (REMOVED for Pilot Public Access)
    /*
    const cookieStore = await cookies();
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return cookieStore.getAll();
          },
          setAll(cookiesToSet: any[]) {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          },
        },
      }
    );

    const { data: { user } } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // 2. Validate subscription/purchase
    const active = await hasActiveSubscription(user.id);
    if (!active) {
      // For pilot unit, we might allow access if it's the specific pilot video
      // But for now, let's stick to the requirement
      return NextResponse.json({ error: 'Active subscription required' }, { status: 403 });
    }
    */

    // 3. Generate Signed URL Token
    // In a real implementation, we would call Cloudflare API to get a signed token
    // or generate a JWT locally if we have the private key.
    // Documentation: https://developers.cloudflare.com/stream/viewing-videos/securing-video-playback/#generating-a-signed-url-token
    
    const CLOUDFLARE_API_TOKEN = process.env.CLOUDFLARE_API_TOKEN;
    const CLOUDFLARE_ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID;

    if (CLOUDFLARE_API_TOKEN && CLOUDFLARE_ACCOUNT_ID) {
      // Mocking the call to Cloudflare for now as we don't have real keys
      // In production: fetch(`https://api.cloudflare.com/client/v4/accounts/${CLOUDFLARE_ACCOUNT_ID}/stream/${videoId}/token`, ...)
      
      // return NextResponse.json({
      //   playbackUrl: `https://customer-<ID>.cloudflarestream.com/${videoId}/manifest/video.m3u8`,
      //   token: "signed-token-here"
      // });
    }

    // Fallback/Mock for Pilot
    return NextResponse.json({
      videoId,
      playbackUrl: `https://iframe.videodelivery.net/${videoId}`,
      status: 'success',
      signed: false // Indicating this is not signed for now
    });

  } catch (error: any) {
    console.error('Error in stream playback API:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
