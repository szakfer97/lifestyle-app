export default function Income() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Income</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Source</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Amount</label>
          <input
            type="number"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Income
        </button>
      </form>
    </section>
  );
}
