import React from "react";
import Dashboard from "./pages/Dashboard.jsx";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
    <AppProvider>
      <Dashboard />
    </AppProvider>
  );
}

export default App;