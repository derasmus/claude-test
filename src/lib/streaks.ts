import { DateKey } from "@/types/habit";

export function todayKey(): DateKey {
  return new Date().toISOString().slice(0, 10);
}

export function subtractDay(dateKey: DateKey): DateKey {
  const date = new Date(dateKey + "T00:00:00");
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
}

export function calculateStreak(
  completions: { [date: DateKey]: boolean },
  today: DateKey
): number {
  let streak = 0;
  let current = today;
  let skippedToday = false;

  while (true) {
    if (completions[current]) {
      streak++;
      current = subtractDay(current);
    } else if (current === today && !skippedToday) {
      // Today not yet done — don't break the streak, check yesterday
      skippedToday = true;
      current = subtractDay(current);
    } else {
      break;
    }
  }

  return streak;
}
