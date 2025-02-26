"use client";

import { useState } from "react";

type Activity = {
  id: string;
  type: string;
  duration: number;
  calories: number;
  date: string;
};

export default function Fitness() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [newActivity, setNewActivity] = useState({
    type: "",
    duration: 0,
    calories: 0,
  });

  const handleAddActivity = () => {
    const activity = {
      id: Date.now().toString(),
      ...newActivity,
      date: new Date().toISOString().split("T")[0],
    };

    setActivities([...activities, activity]);
    setNewActivity({ type: "", duration: 0, calories: 0 });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-blue-600">Fitness Tracker</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">Add New Activity</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Activity Type
            </label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newActivity.type}
              onChange={(e) =>
                setNewActivity({ ...newActivity, type: e.target.value })
              }
              placeholder="e.g., Running, Swimming"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Duration (minutes)
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newActivity.duration || ""}
              onChange={(e) =>
                setNewActivity({
                  ...newActivity,
                  duration: parseInt(e.target.value),
                })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calories Burned
            </label>
            <input
              type="number"
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              value={newActivity.calories || ""}
              onChange={(e) =>
                setNewActivity({
                  ...newActivity,
                  calories: parseInt(e.target.value),
                })
              }
            />
          </div>
        </div>
        <button
          onClick={handleAddActivity}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Add Activity
        </button>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Activities</h3>
        {activities.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Activity</th>
                  <th className="py-2 px-4 text-left">Duration (min)</th>
                  <th className="py-2 px-4 text-left">Calories</th>
                </tr>
              </thead>
              <tbody>
                {activities.map((activity) => (
                  <tr key={activity.id} className="border-b">
                    <td className="py-2 px-4">{activity.date}</td>
                    <td className="py-2 px-4">{activity.type}</td>
                    <td className="py-2 px-4">{activity.duration}</td>
                    <td className="py-2 px-4">{activity.calories}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-gray-500">No activities recorded yet.</p>
        )}
      </div>
    </div>
  );
}
