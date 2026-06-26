export function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-16 text-center">
      <div className="text-5xl mb-4">📋</div>
      <h2 className="text-xl font-semibold text-gray-700 mb-2">No habits yet</h2>
      <p className="text-gray-400 text-sm">Add your first habit above to start tracking your streaks.</p>
    </div>
  );
}
