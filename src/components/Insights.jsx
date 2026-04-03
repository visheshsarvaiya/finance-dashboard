import { TrendingUp, Calendar, Info } from "lucide-react";

const Insights = () => {
  const cards = [
    {
      title: "Highest Spending Category",
      val: "Transportation",
      desc: "$2,526.00 total",
      icon: <TrendingUp size={18} />,
      bg: "bg-gray-100",
    },
    {
      title: "Monthly Comparison",
      val: "-100.0%",
      desc: "vs last month ($3,900.00)",
      icon: <Calendar size={18} />,
      bg: "bg-green-100",
    },
    {
      title: "Current Month Expenses",
      val: "$0.00",
      desc: "Total spending this month",
      icon: <Info size={18} />,
      bg: "bg-gray-100",
    },
  ];

  return (
    <div className="space-y-4">
      
      {/* Title */}
      <div>
        <h3 className="text-lg font-semibold text-gray-900">
          Financial Insights
        </h3>
        <p className="text-sm text-gray-500">
          Key observations from your spending patterns
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((c, i) => (
          <div
            key={i}
            className="bg-white border rounded-2xl p-5 shadow-sm flex items-start gap-4"
          >
            {/* Icon */}
            <div className={`p-3 rounded-xl ${c.bg}`}>
              {c.icon}
            </div>

            {/* Content */}
            <div>
              <p className="text-xs text-gray-500">{c.title}</p>
              <h4 className="text-lg font-semibold text-gray-900 mt-1">
                {c.val}
              </h4>
              <p className="text-xs text-gray-400 mt-1">{c.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insights;