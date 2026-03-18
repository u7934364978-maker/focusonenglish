import { Suspense } from "react";
import SupportTicketClient from "./SupportTicketClient";

export default function SupportTicketPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-3xl px-6 py-14 text-sm text-slate-600">Cargando…</div>}>
      <SupportTicketClient />
    </Suspense>
  );
}
