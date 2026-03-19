'use client';

import { useEffect, useMemo, useState } from 'react';

type Ticket = {
  id: string;
  subject?: string;
  content?: string;
  createdate?: string | null;
  contactEmail?: string;
};

export default function AdminTicketsPage() {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTicketId, setSelectedTicketId] = useState<string | null>(null);
  const [selectedTicket, setSelectedTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState(true);
  const [detailLoading, setDetailLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);

  useEffect(() => {
    async function loadTickets() {
      try {
        setError(null);
        setLoading(true);
        const res = await fetch('/api/admin/tickets?limit=50');
        if (!res.ok) throw new Error('No se pudieron cargar los tickets');
        const data = await res.json();
        const list: Ticket[] = data?.tickets ?? [];
        setTickets(list);
        if (list.length > 0) setSelectedTicketId((prev) => prev ?? list[0].id);
      } catch (e) {
        setError(e instanceof Error ? e.message : 'Error desconocido');
      } finally {
        setLoading(false);
      }
    }
    loadTickets();
  }, []);

  useEffect(() => {
    async function loadTicketDetail(ticketId: string) {
      try {
        setDetailLoading(true);
        const res = await fetch(`/api/admin/tickets/${encodeURIComponent(ticketId)}`);
        if (!res.ok) throw new Error('No se pudo cargar el ticket');
        const data = await res.json();
        setSelectedTicket(data?.ticket ?? null);
      } catch (e) {
        setSelectedTicket(null);
        setError(e instanceof Error ? e.message : 'Error cargando detalle');
      } finally {
        setDetailLoading(false);
      }
    }

    if (selectedTicketId) {
      loadTicketDetail(selectedTicketId);
    } else {
      setSelectedTicket(null);
    }
  }, [selectedTicketId]);

  async function sendReply() {
    if (!selectedTicketId) return;
    const message = reply.trim();
    if (!message) return;

    try {
      setSending(true);
      setError(null);
      const res = await fetch(`/api/admin/tickets/${encodeURIComponent(selectedTicketId)}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error ?? 'No se pudo enviar la respuesta');
      }
      setReply('');
      alert('Respuesta enviada correctamente');
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error enviando respuesta');
    } finally {
      setSending(false);
    }
  }

  const selectedDate = useMemo(() => {
    if (!selectedTicket?.createdate) return '—';
    const d = new Date(selectedTicket.createdate);
    if (Number.isNaN(d.getTime())) return selectedTicket.createdate;
    return d.toLocaleString();
  }, [selectedTicket?.createdate]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-slate-900">Tickets</h1>
        <p className="text-slate-600 mt-1">Bandeja de soporte y respuesta desde el panel.</p>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <div className="lg:col-span-1 bg-white border border-slate-200 rounded-2xl p-3">
          <h2 className="font-black text-slate-900 px-2 py-1">Lista de tickets</h2>
          {loading ? (
            <div className="text-slate-600 text-sm px-2 py-3">Cargando...</div>
          ) : tickets.length === 0 ? (
            <div className="text-slate-600 text-sm px-2 py-3">No hay tickets.</div>
          ) : (
            <div className="space-y-2 max-h-[65vh] overflow-y-auto pr-1 mt-2">
              {tickets.map((t) => {
                const isActive = t.id === selectedTicketId;
                return (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTicketId(t.id)}
                    className={[
                      'w-full text-left px-3 py-3 rounded-xl border transition',
                      isActive
                        ? 'bg-coral-50 border-coral-300'
                        : 'bg-white border-slate-200 hover:bg-slate-50',
                    ].join(' ')}
                  >
                    <div className="font-semibold text-slate-800 truncate">
                      {t.subject || `Ticket ${t.id}`}
                    </div>
                    <div className="text-xs text-slate-500 truncate mt-1">
                      {t.contactEmail || 'Sin email asociado'}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-5">
          {!selectedTicketId ? (
            <div className="text-slate-600">Selecciona un ticket.</div>
          ) : detailLoading ? (
            <div className="text-slate-600">Cargando detalle...</div>
          ) : !selectedTicket ? (
            <div className="text-slate-600">No se pudo cargar el detalle del ticket.</div>
          ) : (
            <div className="space-y-4">
              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-bold">Asunto</div>
                <div className="text-xl font-black text-slate-900">{selectedTicket.subject || 'Sin asunto'}</div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <div className="text-slate-500">Alumno</div>
                  <div className="font-semibold text-slate-800">{selectedTicket.contactEmail || 'Sin email'}</div>
                </div>
                <div>
                  <div className="text-slate-500">Fecha</div>
                  <div className="font-semibold text-slate-800">{selectedDate}</div>
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">Mensaje</div>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 whitespace-pre-wrap text-slate-800">
                  {selectedTicket.content || 'Sin contenido'}
                </div>
              </div>

              <div>
                <div className="text-xs uppercase tracking-wide text-slate-500 font-bold mb-1">
                  Responder
                </div>
                <textarea
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                  rows={6}
                  className="w-full rounded-xl border border-slate-300 px-3 py-2 outline-none focus:ring-2 focus:ring-coral-200 focus:border-coral-400"
                  placeholder="Escribe aquí la respuesta para el alumno..."
                />
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={sendReply}
                    disabled={sending || reply.trim().length === 0}
                    className="inline-flex items-center px-4 py-2 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {sending ? 'Enviando...' : 'Enviar respuesta'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

