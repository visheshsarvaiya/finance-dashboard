import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

const SummaryCards = () => {
  const stats = [
    {
      label: "Total Balance",
      value: "$32,204.00",
      icon: <DollarSign size={20} className="text-green-600" />,
      bg: "bg-green-100",
    },
    {
      label: "Total Income",
      value: "$40,613.00",
      icon: <TrendingUp size={20} className="text-emerald-600" />,
      bg: "bg-emerald-100",
    },
    {
      label: "Total Expenses",
      value: "$8,409.00",
      icon: <TrendingDown size={20} className="text-rose-600" />,
      bg: "bg-rose-100",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((s, i) => (
        <div
          key={i}
          className="bg-white border rounded-2xl p-5 shadow-sm flex items-center justify-between"
        >
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-500 font-medium">
              {s.label}
            </p>
            <h2 className="text-2xl font-semibold text-gray-900 mt-1">
              {s.value}
            </h2>
          </div>

          {/* Icon */}
          <div className={`p-3 rounded-xl ${s.bg}`}>
            {s.icon}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;