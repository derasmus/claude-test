"use client";

import { useHabits } from "@/hooks/useHabits";
import { DashboardHeader } from "@/components/DashboardHeader";
import { AddHabitForm } from "@/components/AddHabitForm";
import { HabitList } from "@/components/HabitList";
import { EmptyState } from "@/components/EmptyState";

export default function Home() {
  const { habits, hydrated, addHabit, toggleToday, deleteHabit } = useHabits();

  const completedToday = habits.filter((h) => h.isCompletedToday).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50">
      <div className="mx-auto max-w-lg px-4 py-12">
        <DashboardHeader completedToday={completedToday} total={habits.length} />
        <AddHabitForm onAdd={addHabit} />
        {!hydrated ? null : habits.length === 0 ? (
          <EmptyState />
        ) : (
          <HabitList habits={habits} onToggle={toggleToday} onDelete={deleteHabit} />
        )}
      </div>
    </div>
  );
}
