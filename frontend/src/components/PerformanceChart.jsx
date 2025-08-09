import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';
import './SummaryCard.css'; // Use same CSS file

function PerformanceChart({ data }) {
  // Extract timeline array from backend object
  const chartData = data?.timeline || [];

  if (!Array.isArray(chartData) || chartData.length === 0) {
    return <p className="loading-text">Loading performance chart...</p>;
  }

  return (
    <div className="chart-box">
      <h3 className="chart-title">Portfolio vs Nifty50 vs Gold</h3>
      <LineChart width={600} height={300} data={chartData}>
        <CartesianGrid stroke="#ccc" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="portfolio" stroke="#4f46e5" strokeWidth={2} />
        <Line type="monotone" dataKey="nifty50" stroke="#16a34a" strokeWidth={2} />
        <Line type="monotone" dataKey="gold" stroke="#eab308" strokeWidth={2} />
      </LineChart>
    </div>
  );
}

export default PerformanceChart;
