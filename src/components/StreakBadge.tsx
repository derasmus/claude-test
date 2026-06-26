interface StreakBadgeProps {
  streak: number;
}

export function StreakBadge({ streak }: StreakBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-violet-100 px-2.5 py-0.5 text-sm font-semibold text-violet-700">
      🔥 {streak}
    </span>
  );
}
