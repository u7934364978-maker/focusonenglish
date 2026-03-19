import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase/server';
import { hubspotRequest } from '@/lib/crm/hubspot';

type HubSpotTicket = {
  id: string;
  subject?: string;
  content?: string;
  createdate?: string;
  contactEmail?: string;
  contactId?: string;
};

export async function GET(request: NextRequest) {
  try {
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

    const limit = Math.min(
      Number(request.nextUrl.searchParams.get('limit') ?? 20),
      50
    );

    const ticketsResp: any = await hubspotRequest(
      `/crm/v3/objects/tickets?limit=${limit}&archived=false&properties=subject,content,createdate`,
      'GET'
    );

    const ticketResults: any[] = ticketsResp?.results ?? [];

    const tickets: HubSpotTicket[] = ticketResults.map((t: any) => ({
      id: String(t.id),
      subject: t?.properties?.subject ?? '',
      content: t?.properties?.content ?? '',
      createdate: t?.properties?.createdate ?? null,
    }));

    // Buscar contacto asociado a cada ticket (best-effort)
    const ticketIds = tickets.map((t) => t.id);
    if (ticketIds.length > 0) {
      const assocResp: any = await hubspotRequest(
        `/crm/v3/associations/Tickets/Contacts/batch/read`,
        'POST',
        { inputs: ticketIds.map((id) => ({ id })) }
      );

      const results: any[] = assocResp?.results ?? [];
      const ticketToContactId = new Map<string, string>();
      for (const r of results) {
        const fromId = String(r?.from?.id ?? '');
        const toId = r?.to?.[0]?.id;
        if (fromId && toId) ticketToContactId.set(fromId, String(toId));
      }

      const contactIds = Array.from(ticketToContactId.values());

      if (contactIds.length > 0) {
        const contactsResp: any = await hubspotRequest(
          `/crm/v3/objects/contacts/batch/read`,
          'POST',
          {
            inputs: contactIds.map((id) => ({ id })),
            properties: ['email'],
          }
        );

        const contactsResults: any[] = contactsResp?.results ?? [];
        const contactIdToEmail = new Map<string, string>();
        for (const c of contactsResults) {
          const cid = String(c?.id ?? '');
          const email = c?.properties?.email ?? '';
          if (cid) contactIdToEmail.set(cid, String(email));
        }

        for (const t of tickets) {
          const cid = ticketToContactId.get(t.id);
          if (cid) {
            t.contactId = cid;
            t.contactEmail = contactIdToEmail.get(cid) ?? '';
          }
        }
      }
    }

    return NextResponse.json({ tickets });
  } catch (error) {
    console.error('[admin/tickets] error', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

