import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { hubspotRequest, addNoteToContact } from '@/lib/crm/hubspot';

function ensureArrayIds(resp: any): string[] {
  const results: any[] = resp?.results ?? [];
  const ids = new Set<string>();
  for (const r of results) {
    const to = r?.to?.[0];
    if (to?.id) ids.add(String(to.id));
  }
  return Array.from(ids);
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  try {
    const { ticketId } = await params;

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();
    if (profile?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    const ticketResp: any = await hubspotRequest(
      `/crm/v3/objects/tickets/${ticketId}?properties=subject,content,createdate`,
      'GET'
    );

    const ticketProps = ticketResp?.properties ?? {};

    // contact associated with this ticket (best-effort)
    let contactEmail = '';
    try {
      const assocResp: any = await hubspotRequest(
        `/crm/v3/associations/Tickets/Contacts/batch/read`,
        'POST',
        { inputs: [{ id: ticketId }] }
      );

      const contactIds = ensureArrayIds(assocResp);
      if (contactIds.length > 0) {
        const contactsResp: any = await hubspotRequest(
          `/crm/v3/objects/contacts/batch/read`,
          'POST',
          { inputs: contactIds.map((id) => ({ id })), properties: ['email'] }
        );

        const contactsResults: any[] = contactsResp?.results ?? [];
        const cid = contactIds[0];
        const found = contactsResults.find((c) => String(c?.id) === String(cid));
        contactEmail = found?.properties?.email ?? '';
      }
    } catch {}

    return NextResponse.json({
      ticket: {
        id: String(ticketId),
        subject: ticketProps.subject ?? '',
        content: ticketProps.content ?? '',
        createdate: ticketProps.createdate ?? null,
        contactEmail,
      },
    });
  } catch (error) {
    console.error('[admin/tickets/ticketId] GET error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ ticketId: string }> }
) {
  try {
    const { ticketId } = await params;
    const body = await request.json().catch(() => ({}));
    const message = (body?.message ?? '').toString().trim();
    if (!message) {
      return NextResponse.json({ error: 'Missing message' }, { status: 400 });
    }

    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const { data: profile } = await supabase
      .from('user_profiles')
      .select('role')
      .eq('user_id', user.id)
      .single();
    if (profile?.role !== 'admin') {
      return NextResponse.json({ error: 'Forbidden' }, { status: 403 });
    }

    // Asociar nota al contacto asociado al ticket (best-effort)
    let contactId: string | null = null;
    const assocResp: any = await hubspotRequest(
      `/crm/v3/associations/Tickets/Contacts/batch/read`,
      'POST',
      { inputs: [{ id: ticketId }] }
    );

    const contactIds = ensureArrayIds(assocResp);
    if (contactIds.length > 0) contactId = contactIds[0];

    if (!contactId) {
      return NextResponse.json(
        { error: 'No contact associated with this ticket' },
        { status: 400 }
      );
    }

    await addNoteToContact(
      contactId,
      `Respuesta admin (${new Date().toISOString()}):\n${message}`
    );

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('[admin/tickets/ticketId] POST error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

