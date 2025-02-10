export default function Fitness() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Fitness</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Activity</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">
            Duration (minutes)
          </label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Log Activity
        </button>
      </form>
    </section>
  );
}
