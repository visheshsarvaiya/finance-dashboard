import { createContext, useContext, useState } from "react";
import { transactionsData } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useState(transactionsData);
  const [role, setRole] = useState("viewer");
  const [search, setSearch] = useState("");

  return (
    <AppContext.Provider
      value={{ transactions, setTransactions, role, setRole, search, setSearch }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);