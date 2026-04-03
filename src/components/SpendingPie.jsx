import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { useApp } from "../context/AppContext";

const COLORS = ["#111827", "#6b7280", "#9ca3af", "#d1d5db", "#e5e7eb"];

const SpendingPie = () => {
  const { transactions } = useApp();

  // Filter only expenses
  const expenses = transactions.filter((t) => t.type === "expense");

  // Group by category
  const dataMap = {};
  expenses.forEach((t) => {
    if (!dataMap[t.cat]) {
      dataMap[t.cat] = 0;
    }
    dataMap[t.cat] += t.amt;
  });

  const data = Object.keys(dataMap).map((key) => ({
    name: key,
    value: dataMap[key],
  }));

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer>
        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={3}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>

          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
            }}
          />

        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SpendingPie;