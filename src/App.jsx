import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./Page5";
import Dashboard from "./dashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
