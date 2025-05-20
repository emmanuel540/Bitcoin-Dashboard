// src/pages/Dashboard.jsx
import React from "react";
import BitcoinDashboard from "../components/Dashboard"; // reuse existing component

const DashboardPage = () => {
  const isAuthenticated = localStorage.getItem("user");

  if (!isAuthenticated) {
    window.location.href = "/login";
    return null;
  }

  return (
    <div className="p-4">
      <BitcoinDashboard />
    </div>
  );
};

export default DashboardPage;
