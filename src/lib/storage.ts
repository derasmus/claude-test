import { HabitStore } from "@/types/habit";

const STORAGE_KEY = "habit-tracker-v1";

export function getDefaultStore(): HabitStore {
  return { habits: [], version: 1 };
}

export function loadStore(): HabitStore {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultStore();
    const parsed = JSON.parse(raw) as HabitStore;
    if (!parsed.habits || !Array.isArray(parsed.habits)) return getDefaultStore();
    return parsed;
  } catch {
    return getDefaultStore();
  }
}

export function saveStore(store: HabitStore): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
}
