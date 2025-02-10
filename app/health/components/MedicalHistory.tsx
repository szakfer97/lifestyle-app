export default function MedicalHistory() {
  return (
    <section>
      <h2 className="text-xl font-semibold mb-4">Medical History</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Condition</label>
          <input
            type="text"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Date Diagnosed</label>
          <input
            type="date"
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          Add Record
        </button>
      </form>
    </section>
  );
}
