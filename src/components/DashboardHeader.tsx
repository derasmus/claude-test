interface DashboardHeaderProps {
  completedToday: number;
  total: number;
}

export function DashboardHeader({ completedToday, total }: DashboardHeaderProps) {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Habit Tracker</h1>
      <p className="mt-1 text-gray-500 text-sm">{today}</p>
      {total > 0 && (
        <p className="mt-3 text-sm font-medium text-indigo-600">
          {completedToday} of {total} habits completed today
        </p>
      )}
    </div>
  );
}
