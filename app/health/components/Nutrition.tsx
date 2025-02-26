"use client";

import { useState } from "react";

type MealEntry = {
  id: string;
  meal: string;
  food: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  date: string;
};

export default function Nutrition() {
  const [entries, setEntries] = useState<MealEntry[]>([]);
  const [newEntry, setNewEntry] = useState({
    meal: "Breakfast",
    food: "",
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
  });

  const handleAddEntry = () => {
    const entry = {
      id: Date.now().toString(),
      ...newEntry,
      date: new Date().toISOString().split("T")[0],
    };

    setEntries([...entries, entry]);
    setNewEntry({
      meal: "Breakfast",
      food: "",
      calories: 0,
      protein: 0,
      carbs: 0,
      fat: 0,
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">
        Nutrition Tracker
      </h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Add Meal</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Meal
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newEntry.meal}
              onChange={(e) =>
                setNewEntry({ ...newEntry, meal: e.target.value })
              }
            >
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Snack">Snack</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Food Item
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newEntry.food}
              onChange={(e) =>
                setNewEntry({ ...newEntry, food: e.target.value })
              }
              placeholder="e.g., Oatmeal with banana"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calories
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newEntry.calories || ""}
              onChange={(e) =>
                setNewEntry({ ...newEntry, calories: parseInt(e.target.value) })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Protein (g)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newEntry.protein || ""}
              onChange={(e) =>
                setNewEntry({ ...newEntry, protein: parseInt(e.target.value) })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Carbs (g)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newEntry.carbs || ""}
              onChange={(e) =>
                setNewEntry({ ...newEntry, carbs: parseInt(e.target.value) })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fat (g)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newEntry.fat || ""}
              onChange={(e) =>
                setNewEntry({ ...newEntry, fat: parseInt(e.target.value) })
              }
            />
          </div>
        </div>
        <button
          onClick={handleAddEntry}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Meal
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Meal Journal</h3>
        {entries.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Meal</th>
                  <th className="py-2 px-4 text-left">Food</th>
                  <th className="py-2 px-4 text-left">Calories</th>
                  <th className="py-2 px-4 text-left">Protein (g)</th>
                  <th className="py-2 px-4 text-left">Carbs (g)</th>
                  <th className="py-2 px-4 text-left">Fat (g)</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry) => (
                  <tr key={entry.id} className="border-b">
                    <td className="py-2 px-4">{entry.date}</td>
                    <td className="py-2 px-4">{entry.meal}</td>
                    <td className="py-2 px-4">{entry.food}</td>
                    <td className="py-2 px-4">{entry.calories}</td>
                    <td className="py-2 px-4">{entry.protein}</td>
                    <td className="py-2 px-4">{entry.carbs}</td>
                    <td className="py-2 px-4">{entry.fat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No meals logged yet.</p>
        )}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Daily Nutrition Summary</h3>
        {entries.length > 0 ? (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Total Calories</p>
                <p className="text-2xl font-bold text-blue-700">
                  {entries.reduce((sum, entry) => sum + entry.calories, 0)}
                </p>
              </div>
              <div className="bg-green-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Total Protein</p>
                <p className="text-2xl font-bold text-green-700">
                  {entries.reduce((sum, entry) => sum + entry.protein, 0)}g
                </p>
              </div>
              <div className="bg-yellow-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Total Carbs</p>
                <p className="text-2xl font-bold text-yellow-700">
                  {entries.reduce((sum, entry) => sum + entry.carbs, 0)}g
                </p>
              </div>
              <div className="bg-red-50 p-3 rounded-md">
                <p className="text-sm text-gray-600">Total Fat</p>
                <p className="text-2xl font-bold text-red-700">
                  {entries.reduce((sum, entry) => sum + entry.fat, 0)}g
                </p>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">No data to display.</p>
        )}
      </div>
    </div>
  );
}
