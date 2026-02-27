export function UnitCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 border-2 border-slate-100 shadow-sm animate-pulse relative overflow-hidden">
      <div className="absolute -right-8 -top-8 w-24 h-24 rounded-full bg-slate-100" />
      <div className="flex flex-col h-full">
        <div className="absolute top-4 right-4 w-11 h-11 rounded-2xl bg-slate-200" />
        <div className="mb-4 pr-14">
          <div className="h-6 bg-slate-200 rounded-lg w-3/4 mb-2" />
          <div className="h-5 bg-slate-100 rounded-lg w-1/2" />
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          <div className="h-5 bg-slate-100 rounded-md w-14" />
          <div className="h-5 bg-slate-100 rounded-md w-18" />
          <div className="h-5 bg-slate-100 rounded-md w-12" />
        </div>
        <div className="flex items-center gap-4 mb-5 mt-auto">
          <div className="h-4 bg-slate-100 rounded w-16" />
          <div className="h-4 bg-slate-100 rounded w-20" />
        </div>
        <div className="h-11 bg-slate-100 rounded-2xl" />
      </div>
    </div>
  );
}
