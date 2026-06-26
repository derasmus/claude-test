import { HabitViewModel } from "@/types/habit";
import { StreakBadge } from "./StreakBadge";

interface HabitCardProps {
  habit: HabitViewModel;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitCard({ habit, onToggle, onDelete }: HabitCardProps) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-sm border border-gray-100">
      <button
        onClick={() => onToggle(habit.id)}
        aria-label={habit.isCompletedToday ? "Mark incomplete" : "Mark complete"}
        className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors ${
          habit.isCompletedToday
            ? "bg-indigo-500 border-indigo-500 text-white"
            : "border-gray-300 hover:border-indigo-400"
        }`}
      >
        {habit.isCompletedToday && (
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p className={`font-medium truncate ${habit.isCompletedToday ? "text-gray-400 line-through" : "text-gray-800"}`}>
          {habit.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{habit.totalCompletions} total completions</p>
      </div>

      <StreakBadge streak={habit.currentStreak} />

      <button
        onClick={() => onDelete(habit.id)}
        aria-label="Delete habit"
        className="flex-shrink-0 text-gray-300 hover:text-red-400 transition-colors ml-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
