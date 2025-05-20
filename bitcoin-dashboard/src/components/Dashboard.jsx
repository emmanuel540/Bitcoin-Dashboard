import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PriceChart from "./pages/PriceChart";

const Dashboard = () => {
  const navigate = useNavigate();
  const [btcData, setBtcData] = useState(null);

  const handleLogout = () => {
    localStorage.removeItem("user");
    alert("You have been logged out.");
    navigate("/login");
  };

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
      .then((res) => setBtcData(res.data.bitcoin))
      .catch((err) => console.error("Failed to fetch BTC price:", err));
  }, []);

  return (
    <div className="min-h-screen bg-dark text-white flex flex-col items-center p-8">
      <header className="w-full max-w-4xl mb-8 text-center">
        <h1 className="text-4xl font-bold mb-2 text-primary">Bitcoin Dashboard</h1>
        <p className="text-gray-300">Live Bitcoin data with trend chart</p>
      </header>

      <main className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-primary p-6 rounded-lg shadow text-white">
          <h2 className="text-2xl font-semibold mb-4">BTC Price (USD)</h2>
          <p className="text-lg">
            {btcData ? `$${btcData.usd.toLocaleString()}` : "Loading..."}
          </p>
        </div>

        <div className="bg-primary p-6 rounded-lg shadow text-white">
          <h2 className="text-2xl font-semibold mb-4">Market Cap</h2>
          <p className="text-lg">Coming Soon</p>
        </div>
      </main>

      <PriceChart />

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
