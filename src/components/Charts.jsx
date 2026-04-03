import { LineChart, Line, PieChart, Pie, Cell, Tooltip } from "recharts";
import { useApp } from "../context/AppContext";

export default function Charts() {
  const { transactions } = useApp();

  const income = transactions.filter(t => t.type === "income");
  const expense = transactions.filter(t => t.type === "expense");

  const pieData = [
    { name: "Income", value: income.reduce((a, b) => a + b.amount, 0) },
    { name: "Expense", value: expense.reduce((a, b) => a + b.amount, 0) }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4">
      <LineChart width={300} height={200} data={transactions}>
        <Line type="monotone" dataKey="amount" stroke="#8884d8" />
        <Tooltip />
      </LineChart>

      <PieChart width={300} height={200}>
        <Pie data={pieData} dataKey="value" outerRadius={80}>
          {pieData.map((_, index) => (
            <Cell key={index} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
}