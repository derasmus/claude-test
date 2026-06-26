interface DashboardHeaderProps {
  completedToday: number;
  total: number;
}

export function DashboardHeader({ completedToday, total }: DashboardHeaderProps) {
  const now = new Date();
  const weekday = now.toLocaleDateString("en-US", { weekday: "long" });
  const rest = now.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
  const progress = total > 0 ? Math.round((completedToday / total) * 100) : 0;
  const allDone = total > 0 && completedToday === total;

  return (
    <div className="mb-8">
      <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-violet-500">Today</p>
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">{weekday}</h1>
      <p className="mt-0.5 text-sm text-gray-400">{rest}</p>

      {total > 0 && (
        <div className="mt-6 rounded-2xl bg-white p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500">
              {allDone ? "All done for today 🎉" : "Daily progress"}
            </span>
            <span className="text-sm font-bold text-gray-700">
              {completedToday}/{total}
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}
    </div>
  );
}
