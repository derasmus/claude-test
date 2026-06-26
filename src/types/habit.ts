export type DateKey = string; // "YYYY-MM-DD"

export interface Habit {
  id: string;
  name: string;
  createdAt: DateKey;
  completions: { [date: DateKey]: boolean };
}

export interface HabitStore {
  habits: Habit[];
  version: number;
}

export interface HabitViewModel {
  id: string;
  name: string;
  currentStreak: number;
  isCompletedToday: boolean;
  totalCompletions: number;
}
