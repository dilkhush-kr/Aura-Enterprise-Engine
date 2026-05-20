export default function TableSkeleton() {

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 animate-pulse">

      {/* Top */}
      <div className="flex justify-between items-center mb-6">

        <div>
          <div className="h-6 w-48 bg-slate-200 rounded mb-2"></div>

          <div className="h-4 w-32 bg-slate-200 rounded"></div>
        </div>

        <div className="h-10 w-32 bg-slate-200 rounded-2xl"></div>

      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4 mb-6">

        {Array.from({ length: 5 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-12 bg-slate-200 rounded-2xl"
            ></div>
          )
        )}

      </div>

      {/* Table */}
      <div className="space-y-4">

        {Array.from({ length: 6 }).map(
          (_, index) => (
            <div
              key={index}
              className="h-14 bg-slate-200 rounded-xl"
            ></div>
          )
        )}

      </div>

    </div>
  );
}