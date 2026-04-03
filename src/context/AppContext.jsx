import React, { createContext, useContext, useState } from "react";
import { transactionsData } from "../data/transactionsData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [role, setRole] = useState("admin");
  const [transactions, setTransactions] = useState(transactionsData);

  // Calculations (for cards + charts)
  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amt, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amt, 0);

  const balance = income - expenses;

  return (
    <AppContext.Provider
      value={{
        role,
        setRole,
        transactions,
        setTransactions,
        income,
        expenses,
        balance,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);