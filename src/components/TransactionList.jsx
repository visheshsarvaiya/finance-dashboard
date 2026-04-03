import { useApp } from "../context/AppContext";
import { Search, Plus, Edit2, Trash2 } from "lucide-react";

const TransactionList = () => {
  const { transactions, role } = useApp();

  return (
    <div className="bg-white border rounded-2xl shadow-sm overflow-hidden">
      
      {/* Header */}
      <div className="p-5 flex justify-between items-center border-b">
        <h3 className="text-lg font-semibold text-gray-900">
          Transactions
        </h3>

        <button className="bg-gray-900 text-white px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition">
          <Plus size={16} />
          Add Transaction
        </button>
      </div>

      {/* Search */}
      <div className="p-4 border-b bg-gray-50">
        <div className="relative max-w-sm">
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
          <input
            className="w-full pl-9 pr-3 py-2 border rounded-xl text-sm outline-none focus:ring-2 focus:ring-gray-200"
            placeholder="Search transactions..."
          />
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          
          {/* Table Head */}
          <thead className="bg-gray-50 text-gray-500 border-b">
            <tr>
              <th className="px-6 py-3 text-left font-medium">Date</th>
              <th className="px-6 py-3 text-left font-medium">Description</th>
              <th className="px-6 py-3 text-left font-medium">Category</th>
              <th className="px-6 py-3 text-right font-medium">Amount</th>
              <th className="px-6 py-3 text-center font-medium">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y">
            {transactions.map((t) => (
              <tr
                key={t.id}
                className="hover:bg-gray-50 transition"
              >
                <td className="px-6 py-4 text-gray-600">{t.date}</td>

                <td className="px-6 py-4 font-medium text-gray-900">
                  {t.desc}
                </td>

                {/* Category Badge */}
                <td className="px-6 py-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
                    {t.cat}
                  </span>
                </td>

                {/* Amount */}
                <td
                  className={`px-6 py-4 text-right font-semibold ${
                    t.type === "income"
                      ? "text-emerald-600"
                      : "text-rose-600"
                  }`}
                >
                  {t.type === "income" ? "+" : "-"}${t.amt.toFixed(2)}
                </td>

                {/* Actions */}
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center gap-3">
                    <button className="text-gray-400 hover:text-gray-900">
                      <Edit2 size={16} />
                    </button>

                    {role === "admin" && (
                      <button className="text-gray-400 hover:text-red-600">
                        <Trash2 size={16} />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
};

export default TransactionList;