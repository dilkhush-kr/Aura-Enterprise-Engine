import { TrendingUp } from "lucide-react";

export default function StatCard({
  title,
  value,
  growth,
  icon: Icon,
}) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 hover:shadow-md transition">

      <div className="flex items-start justify-between">

        <div>
          <p className="text-slate-500 text-sm font-medium">
            {title}
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-3">
            {value}
          </h2>
        </div>

        <div className="bg-slate-100 p-3 rounded-2xl">
          <Icon className="text-slate-700" size={24} />
        </div>
      </div>

      <div className="flex items-center gap-2 mt-6">
        <TrendingUp
          size={18}
          className="text-green-500"
        />

        <span className="text-green-500 font-semibold text-sm">
          {growth}
        </span>

        <span className="text-slate-400 text-sm">
          this month
        </span>
      </div>
    </div>
  );
}