import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("You have been logged out.");
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col items-center p-8">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">Bitcoin Dashboard</h1>
        <p className="text-gray-300">Welcome! View your Bitcoin data securely.</p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary p-6 rounded-lg shadow text-white">
          <h2 className="text-2xl font-semibold mb-4">BTC Price</h2>
          <p className="text-lg">₿ 69,000</p>
        </div>

        <div className="bg-primary p-6 rounded-lg shadow text-white">
          <h2 className="text-2xl font-semibold mb-4">Market Cap</h2>
          <p className="text-lg">$1.3 Trillion</p>
        </div>

        <div className="bg-primary p-6 rounded-lg shadow text-white">
          <h2 className="text-2xl font-semibold mb-4">24H Volume</h2>
          <p className="text-lg">$40 Billion</p>
        </div>

        <div className="bg-primary p-6 rounded-lg shadow text-white">
          <h2 className="text-2xl font-semibold mb-4">BTC Dominance</h2>
          <p className="text-lg">49%</p>
        </div>
      </main>

      <button
        onClick={handleLogout}
        className="mt-10 bg-black text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
