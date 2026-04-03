import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { date: "Jan 26", balance: 8000 },
  { date: "Jan 30", balance: 9000 },
  { date: "Feb 1", balance: 9500 },
  { date: "Feb 7", balance: 12000 },
  { date: "Feb 11", balance: 17000 },
  { date: "Feb 16", balance: 16500 },
  { date: "Feb 20", balance: 18500 },
  { date: "Mar 4", balance: 26000 },
  { date: "Mar 9", balance: 25500 },
  { date: "Mar 12", balance: 25000 },
  { date: "Mar 17", balance: 24000 },
  { date: "Mar 23", balance: 23500 },
  { date: "Mar 26", balance: 28000 },
  { date: "Mar 29", balance: 27500 },
  { date: "Mar 31", balance: 32000 },
];

const BalanceChart = () => {
  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer>
        <LineChart data={data}>

          {/* Light dotted grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={true}
            stroke="#e5e7eb"
          />

          {/* X Axis */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis */}
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={false}
            tickLine={false}
          />

          {/* Tooltip */}
          <Tooltip
            contentStyle={{
              borderRadius: "10px",
              border: "1px solid #e5e7eb",
              fontSize: "12px",
            }}
          />

          {/* Line (IMPORTANT styling) */}
          <Line
            type="monotone"
            dataKey="balance"
            stroke="#111827"   // dark black line
            strokeWidth={2.5}
            dot={false}
          />

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BalanceChart;