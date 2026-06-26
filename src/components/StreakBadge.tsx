interface StreakBadgeProps {
  streak: number;
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
        streak > 0 ? "bg-orange-50 text-orange-500" : "bg-gray-50 text-gray-300"
      }`}
    >
      🔥 {streak}
    </span>
  );
}
