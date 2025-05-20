
import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [price, setPrice] = useState(null);
  const [marketData, setMarketData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const priceRes = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd"
      );
      const marketRes = await axios.get(
        "https://api.coingecko.com/api/v3/coins/bitcoin"
      );
      setPrice(priceRes.data.bitcoin.usd);
      setMarketData(marketRes.data.market_data);
    } catch (error) {
      console.error("Error fetching Bitcoin data", error);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">BTC Price</h2>
        <p className="text-2xl">${price || "Loading..."}</p>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">Market Cap</h2>
        <p className="text-lg">
          ${marketData?.market_cap?.usd?.toLocaleString() || "Loading..."}
        </p>
      </div>
      <div className="bg-gray-800 p-4 rounded-xl shadow-md">
        <h2 className="text-xl font-semibold mb-2">24h Volume</h2>
        <p className="text-lg">
          ${marketData?.total_volume?.usd?.toLocaleString() || "Loading..."}
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
