import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import {
  syncHubSpotContact,
  createHubSpotTicket,
  associateTicketWithContact,
} from '@/lib/crm/hubspot';

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();

    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = (await request.json().catch(() => ({}))) as {
      subject?: string;
      content?: string;
    };

    const subject = (body.subject ?? '').toString().trim();
    const content = (body.content ?? '').toString().trim();
    if (!subject || !content) {
      return NextResponse.json({ error: 'Missing subject/content' }, { status: 400 });
    }

    const email = user.email;
    if (!email) {
      return NextResponse.json({ error: 'Missing user email' }, { status: 400 });
    }

    // Sync contact in HubSpot and create the ticket.
    const contactId = await syncHubSpotContact({ email });
    const ticketId = await createHubSpotTicket({ subject, content });

    if (!ticketId) {
      return NextResponse.json({ error: 'Failed to create HubSpot ticket' }, { status: 500 });
    }

    if (contactId) {
      // Best-effort association.
      try {
        await associateTicketWithContact(ticketId, contactId);
      } catch {}
    }

    return NextResponse.json({ ok: true, ticketId });
  } catch (e) {
    console.error('[support/ticket] error', e);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

