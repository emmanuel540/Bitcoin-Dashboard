import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const PriceChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/bitcoin/market_chart", {
        params: {
          vs_currency: "usd",
          days: 7,
          interval: "daily",
        },
      })
      .then((res) => {
        const formatted = res.data.prices.map(([timestamp, price]) => ({
          date: new Date(timestamp).toLocaleDateString(),
          price: parseFloat(price.toFixed(2)),
        }));
        setChartData(formatted);
      })
      .catch((err) => console.error("Chart fetch failed:", err));
  }, []);

  return (
    <div className="bg-primary p-6 rounded-lg shadow text-white mt-10 w-full max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4">7-Day BTC Price Trend</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" stroke="#fff" />
          <YAxis stroke="#fff" domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#fff" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
