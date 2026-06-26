"use client";

import { useState, useEffect, useCallback } from "react";
import { Habit, HabitViewModel } from "@/types/habit";
import { loadStore, saveStore } from "@/lib/storage";
import { calculateStreak, todayKey } from "@/lib/streaks";

function toViewModel(habit: Habit, today: string): HabitViewModel {
  return {
    id: habit.id,
    name: habit.name,
    currentStreak: calculateStreak(habit.completions, today),
    isCompletedToday: !!habit.completions[today],
    totalCompletions: Object.values(habit.completions).filter(Boolean).length,
  };
}

export function useHabits() {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const store = loadStore();
    setHabits(store.habits);
    setHydrated(true);
  }, []);

  const persist = useCallback((next: Habit[]) => {
    setHabits(next);
    saveStore({ habits: next, version: 1 });
  }, []);

  const addHabit = useCallback(
    (name: string) => {
      const trimmed = name.trim().slice(0, 100);
      if (!trimmed) return;
      const newHabit: Habit = {
        id: crypto.randomUUID(),
        name: trimmed,
        createdAt: todayKey(),
        completions: {},
      };
      persist([...habits, newHabit]);
    },
    [habits, persist]
  );

  const toggleToday = useCallback(
    (id: string) => {
      const today = todayKey();
      const next = habits.map((h) => {
        if (h.id !== id) return h;
        const completions = { ...h.completions };
        completions[today] = !completions[today];
        return { ...h, completions };
      });
      persist(next);
    },
    [habits, persist]
  );

  const deleteHabit = useCallback(
    (id: string) => {
      if (!window.confirm("Delete this habit? This cannot be undone.")) return;
      persist(habits.filter((h) => h.id !== id));
    },
    [habits, persist]
  );

  const today = todayKey();
  const viewModels: HabitViewModel[] = habits.map((h) => toViewModel(h, today));

  return { habits: viewModels, hydrated, addHabit, toggleToday, deleteHabit };
}
