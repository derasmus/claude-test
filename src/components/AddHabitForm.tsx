"use client";

import { useState, FormEvent } from "react";

interface AddHabitFormProps {
  onAdd: (name: string) => void;
}

export function AddHabitForm({ onAdd }: AddHabitFormProps) {
  const [value, setValue] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim();
    if (!trimmed) return;
    onAdd(trimmed);
    setValue("");
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-8">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        maxLength={100}
        placeholder="Add a new habit..."
        className="flex-1 rounded-lg border border-gray-200 px-4 py-2.5 text-sm text-gray-800 placeholder-gray-400 shadow-sm focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="rounded-lg bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        Add
      </button>
    </form>
  );
}
