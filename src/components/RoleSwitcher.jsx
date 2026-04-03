import { useApp } from "../context/AppContext";
import { LayoutGrid } from "lucide-react";

export default function RoleSwitcher() {
  const { role, setRole } = useApp();

  const toggleRole = () => {
    setRole(role === "admin" ? "viewer" : "admin");
  };

  return (
    <button
      onClick={toggleRole}
      className="flex items-center gap-2 px-4 py-2 bg-white border rounded-xl shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
    >
      <LayoutGrid size={16} className="text-gray-400" />
      {role.charAt(0).toUpperCase() + role.slice(1)}
    </button>
  );
}