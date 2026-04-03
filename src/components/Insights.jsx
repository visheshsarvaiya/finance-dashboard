import { useApp } from "../context/AppContext";

export default function Insights() {
  const { transactions } = useApp();

  const highest = transactions.reduce((prev, curr) =>
    prev.amount > curr.amount ? prev : curr
  );

  return (
    <div className="bg-white p-4 rounded shadow">
      <h3 className="font-bold">Insights</h3>
      <p>Highest Transaction: ₹ {highest.amount} ({highest.category})</p>
    </div>
  );
}