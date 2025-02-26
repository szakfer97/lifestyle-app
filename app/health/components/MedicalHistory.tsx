"use client";

import { useState } from "react";

type MedicalRecord = {
  id: string;
  condition: string;
  diagnosedDate: string;
  notes: string;
};

export default function MedicalHistory() {
  const [records, setRecords] = useState<MedicalRecord[]>([]);
  const [newRecord, setNewRecord] = useState({
    condition: "",
    diagnosedDate: "",
    notes: "",
  });

  const handleAddRecord = () => {
    const record = {
      id: Date.now().toString(),
      ...newRecord,
    };

    setRecords([...records, record]);
    setNewRecord({ condition: "", diagnosedDate: "", notes: "" });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Medical History</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Add New Record</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Condition
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newRecord.condition}
              onChange={(e) =>
                setNewRecord({ ...newRecord, condition: e.target.value })
              }
              placeholder="e.g., Asthma, Allergies"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date Diagnosed
            </label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newRecord.diagnosedDate}
              onChange={(e) =>
                setNewRecord({ ...newRecord, diagnosedDate: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Notes
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newRecord.notes}
              onChange={(e) =>
                setNewRecord({ ...newRecord, notes: e.target.value })
              }
              rows={3}
              placeholder="Additional information about the condition"
            />
          </div>
        </div>
        <button
          onClick={handleAddRecord}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Record
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Medical Records</h3>
        {records.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Condition</th>
                  <th className="py-2 px-4 text-left">Date Diagnosed</th>
                  <th className="py-2 px-4 text-left">Notes</th>
                </tr>
              </thead>
              <tbody>
                {records.map((record) => (
                  <tr key={record.id} className="border-b">
                    <td className="py-2 px-4">{record.condition}</td>
                    <td className="py-2 px-4">{record.diagnosedDate}</td>
                    <td className="py-2 px-4">{record.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No medical records added yet.</p>
        )}
      </div>
    </div>
  );
}
