import React from "react";
import { useApp } from "../context/AppContext";
import SummaryCards from "../components/SummaryCards";
import BalanceChart from "../components/BalanceChart";
import SpendingPie from "../components/SpendingPie";
import TransactionList from "../components/TransactionList";
import Insights from "../components/Insights";
import RoleSwitcher from "../components/RoleSwitcher";
import { Moon } from "lucide-react";

const Dashboard = () => {
  const { role } = useApp();

  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8 space-y-8">

        {/* Header */}
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">
              Finance Dashboard
            </h1>
            <p className="text-gray-500 text-sm">
              Track and manage your finances
            </p>
          </div>

          <div className="flex items-center gap-3">
            <RoleSwitcher />

            <button className="p-2 bg-white border rounded-xl shadow-sm hover:bg-gray-50 transition">
              <Moon size={18} />
            </button>
          </div>
        </header>

        {/* Summary Cards */}
        <SummaryCards />

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Balance Chart */}
          <div className="lg:col-span-2 bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Balance Trend
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Last 30 days balance progression
            </p>
            <BalanceChart />
          </div>

          {/* Spending Pie */}
          <div className="bg-white border rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Spending Breakdown
            </h2>
            <p className="text-sm text-gray-500 mb-4">
              Category-wise expenses
            </p>
            <SpendingPie />
          </div>
        </div>

        {/* Transactions (NO extra card wrapper) */}
        <TransactionList />

        {/* Insights (NO extra card wrapper) */}
        <Insights />

      </div>
    </div>
  );
};

export default Dashboard;