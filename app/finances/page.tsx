import Income from "./components/Income";
import Expenses from "./components/Expenses";

export default function FinancesPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-8">Finances</h1>
      <div className="grid gap-8">
        <Income />
        <Expenses />
      </div>
    </div>
  );
}
