import MedicalHistory from "./components/MedicalHistory";
import Fitness from "./components/Fitness";
import Nutrition from "./components/Nutrition";

export default function Health() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Health</h1>
      <div className="grid gap-8">
        <MedicalHistory />
        <Fitness />
        <Nutrition />
      </div>
    </div>
  );
}
