export function UnitCardSkeleton() {
  return (
    <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm animate-pulse">
      <div className="flex flex-col h-full">
        <div className="absolute top-4 right-4 w-12 h-12 rounded-xl bg-slate-200" />

        <div className="mb-4 pr-16">
          <div className="h-7 bg-slate-200 rounded-lg w-3/4 mb-2" />
          <div className="h-5 bg-slate-200 rounded-lg w-1/2" />
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <div className="h-6 bg-slate-200 rounded-md w-16" />
          <div className="h-6 bg-slate-200 rounded-md w-20" />
          <div className="h-6 bg-slate-200 rounded-md w-14" />
        </div>

        <div className="flex flex-col gap-3 mb-6 mt-auto">
          <div className="h-4 bg-slate-200 rounded w-32" />
          <div className="flex gap-4">
            <div className="h-4 bg-slate-200 rounded w-20" />
            <div className="h-4 bg-slate-200 rounded w-24" />
          </div>
        </div>

        <div className="h-12 bg-slate-200 rounded-xl" />
      </div>
    </div>
  );
}
