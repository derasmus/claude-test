import { HabitViewModel } from "@/types/habit";
import { StreakBadge } from "./StreakBadge";

interface HabitCardProps {
  habit: HabitViewModel;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
}

export function HabitCard({ habit, onToggle, onDelete }: HabitCardProps) {
  return (
    <div
      className={`group flex items-center gap-4 rounded-2xl p-4 border transition-all duration-200 ${
        habit.isCompletedToday
          ? "bg-green-50 border-green-100"
          : "bg-white border-gray-100 shadow-sm hover:shadow-md hover:border-gray-200"
      }`}
    >
      <button
        onClick={() => onToggle(habit.id)}
        aria-label={habit.isCompletedToday ? "Mark incomplete" : "Mark complete"}
        className={`flex-shrink-0 w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all duration-200 ${
          habit.isCompletedToday
            ? "bg-green-500 border-green-500 text-white scale-95"
            : "border-gray-200 hover:border-violet-400 hover:bg-violet-50"
        }`}
      >
        {habit.isCompletedToday && (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <p
          className={`font-semibold truncate transition-colors ${
            habit.isCompletedToday ? "text-gray-400 line-through decoration-green-400" : "text-gray-800"
          }`}
        >
          {habit.name}
        </p>
        <p className="text-xs text-gray-400 mt-0.5">{habit.totalCompletions} completions</p>
      </div>

      <StreakBadge streak={habit.currentStreak} />

      <button
        onClick={() => onDelete(habit.id)}
        aria-label="Delete habit"
        className="flex-shrink-0 text-gray-200 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all duration-150 ml-1"
      >
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );
}
